import React, { ReactElement, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Navbar } from '../../components/Navbar'
import { getPostBySlug, getAllDocs } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { Footer } from '../../components/Footer'

type Post = {
  title: string
  section: string
  priority: number
  slug: string
}

type Doc = {
  repo: string
  posts: Post[]
  priority: number
}

interface Props {
  post: Post & { content: string }
  docs: Doc[]
}

function Post({ post, docs }: Props): ReactElement {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    if (typeof window !== 'undefined') {
      const url = docs[0] && docs[0].posts[0] ? `/docs/${docs[0].repo}/${docs[0].posts[0].slug}` : '/'
      router.push(url)
    }
  }
  return (
    <>
      <Head>
        <title>iHub Documentation</title>
      </Head>
      <div className='bg-gray-800'>
        <div className='relative py-6'>
          <Navbar />
        </div>
      </div>

      <div className='flex'>
        <div className='flex flex-col flex-shrink-0 w-64 min-h-screen pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200'>
          <div className='flex flex-col flex-grow'>{docs && <Sidebar docs={docs} />}</div>
        </div>
        {post && <PostBody content={post.content} />}
      </div>
      <Footer />
    </>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} }

  const docs = getAllDocs(['slug', 'title', 'priority', 'section'])

  if (!params?.slug) return { props: { docs } }

  let folder: string[] = []

  if (typeof params.slug !== 'string') {
    folder = params.slug.slice(0, params.slug.length - 1)
    params.slug = params.slug[params.slug.length - 1]
  }

  const post = getPostBySlug(['docs', ...folder], params.slug, [
    'content',
    'title',
    'section',
    'priority',
    'date',
    'slug',
    'ogImage',
  ])

  const content = await markdownToHtml(post.content || '')

  return { props: { post: { ...post, content }, docs } }
}

export async function getStaticPaths() {
  const docs = getAllDocs()

  type paths = { params: { slug: string[] } }[]
  const paths: paths = [{ params: { slug: [] } }]
  docs.forEach(doc => {
    doc.posts.forEach(post => {
      paths.push({ params: { slug: [doc.repo, post.slug] } })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

function PostBody({ content }: { content: string }) {
  return (
    <div className='flex-grow p-12 mx-auto overflow-scroll'>
      <div className='prose prose-max-w-7xl' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

const groupBySection = (docs: Doc[]) => {
  const posts = [] as (Post & { repo: string })[]
  const sections = [] as string[]
  docs.forEach(doc => {
    doc.posts.forEach(post => {
      if (!sections.includes(post.section) && post.section) sections.push(post.section)
      posts.push({ ...post, repo: doc.repo })
    })
  })

  return sections
    .map(section => {
      const sectionPosts = posts
        .filter(post => post.section === section)
        .sort((post1, post2) => (post1.priority > post2.priority ? -1 : 1))

      const priority = sectionPosts[0]?.priority || 0
      return {
        name: section,
        posts: sectionPosts,
        priority,
      }
    })
    .sort((post1, post2) => (post1.priority > post2.priority ? -1 : 1))
}

const Sidebar = ({ docs }: { docs: Doc[] }) => {
  const router = useRouter()
  const currentRepo = router.asPath.split('/')[2]
  const currentSlug = router.asPath.split('/')[3]

  const ihubDocs = docs.filter(doc => doc.repo.startsWith('ihub-') && doc.posts.length)
  const boldoDocs = docs.filter(doc => doc.repo.startsWith('boldo-') && doc.posts.length)

  const ihubDocsSections = groupBySection(ihubDocs)
  const boldoDocsSections = groupBySection(boldoDocs)

  return (
    <nav className='flex-1 px-2 bg-white'>
      <div className='flex items-center py-2 text-sm font-medium leading-5 text-gray-900 bg-white rounded-md'>
        <svg
          className='w-6 h-6 mr-3 text-gray-500'
          x-description='Heroicon name: home'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          ></path>
        </svg>
        iHub Ecosystem
      </div>
      <div className='mt-1 ml-2 space-y-1'>
        {ihubDocsSections.map(section =>
          section.posts.length === 1 ? (
            <div>
              <Link href={`/docs/${section.posts[0].repo}/${section.posts[0].slug}`}>
                <a
                  className={
                    `flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md hover:text-gray-900 focus:outline-none transition ease-in-out duration-150 w-full ml-2` +
                    (section.posts[0].repo === currentRepo && section.posts[0].slug === currentSlug
                      ? 'text-gray-900 bg-gray-100 hover:bg-gray-100 focus:bg-gray-200'
                      : 'text-gray-600 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50')
                  }
                >
                  {section.posts[0].title}
                </a>
              </Link>
            </div>
          ) : (
            <Subtree section={section} />
          )
        )}
      </div>

      <div className='flex items-center py-2 mt-5 text-sm font-medium leading-5 text-gray-900 bg-white rounded-md'>
        <img src='/img/boldo-icon-black.svg' className='w-6 h-6 mr-3 text-gray-500' />
        Boldo App
      </div>
      <div className='mt-1 ml-2 space-y-1'>
        {boldoDocsSections.map(section =>
          section.posts.length === 1 ? (
            <div>
              <Link href={`/docs/${section.posts[0].repo}/${section.posts[0].slug}`}>
                <a
                  className={
                    `flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md hover:text-gray-900 focus:outline-none transition ease-in-out duration-150 w-full ml-2` +
                    (section.posts[0].repo === currentRepo && section.posts[0].slug === currentSlug
                      ? 'text-gray-900 bg-gray-100 hover:bg-gray-100 focus:bg-gray-200'
                      : 'text-gray-600 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50')
                  }
                >
                  {section.posts[0].title}
                </a>
              </Link>
            </div>
          ) : (
            <Subtree section={section} />
          )
        )}
      </div>
    </nav>
  )
}

type GroupedPost = {
  name: string
  posts: (Post & {
    repo: string
  })[]
  priority: number
}

const Subtree = ({ section }: { section: GroupedPost }) => {
  const router = useRouter()
  const currentRepo = router.asPath.split('/')[2]
  const currentSlug = router.asPath.split('/')[3]

  let isCurrent = false

  section.posts.forEach(post => {
    if (post.repo === currentRepo && post.slug === currentSlug) isCurrent = true
  })

  useEffect(() => {
    if (isCurrent) setShow(true)
  }, [isCurrent])

  const [show, setShow] = useState(isCurrent)
  return (
    <div className='mt-1 ml-2 space-y-1'>
      <button
        className='flex items-center w-full py-2 pr-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out bg-white rounded-md group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
        onClick={() => setShow(show => !show)}
      >
        <svg
          className={
            'w-5 h-5 mr-2 transition-colors duration-150 ease-in-out transform group-hover:text-gray-400 group-focus:text-gray-400 ' +
            (show ? 'text-gray-400 rotate-90' : 'text-gray-300')
          }
          viewBox='0 0 20 20'
        >
          <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
        </svg>
        {section.name}
      </button>
      {show && (
        <div className='mt-1 space-y-1'>
          {section.posts.map(post => (
            <Link href={`/docs/${post.repo}/${post.slug}`}>
              <a
                className={
                  `flex items-center px-2 py-2 pl-10 pr-2 text-sm leading-5 font-medium rounded-md hover:text-gray-900 focus:outline-none transition ease-in-out duration-150 w-full` +
                  (post.repo === currentRepo && post.slug === currentSlug
                    ? 'text-gray-900 bg-gray-100 hover:bg-gray-100 focus:bg-gray-200'
                    : 'text-gray-600 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50')
                }
              >
                {post.title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
