import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Navbar } from '../../components/Navbar'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { Footer } from '../../components/Footer'

interface Props {
  post: any
  posts: any
}

function Post({ post, posts }: Props): ReactElement {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>iHub</title>
      </Head>
      <div className='bg-gray-800'>
        <div className='relative py-6'>
          <Navbar />
        </div>
      </div>

      <div className='flex'>
        <div className='flex flex-col flex-shrink-0 w-64 min-h-screen pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200'>
          <div className='flex flex-col flex-grow mt-5'>
            <Sidebar posts={posts} />
          </div>
        </div>
        <PostBody content={post.content} />
      </div>
      <Footer />
    </>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} }
  if (typeof params.slug !== 'string') params.slug = params.slug[0]

  const post = getPostBySlug('guides', params.slug, ['content', 'title', 'priority', 'date', 'slug', 'ogImage'])
  const posts = getAllPosts('guides', ['slug', 'title'])

  const content = await markdownToHtml(post.content || '')

  return { props: { post: { ...post, content }, posts } }
}

export async function getStaticPaths() {
  const posts = getAllPosts('guides', ['slug'])

  return {
    paths: posts.map(post => {
      return { params: { slug: post.slug } }
    }),
    fallback: false,
  }
}

const PostBody = ({ content }: { content: string }) => {
  return (
    <div className='flex-grow p-12 mx-auto overflow-scroll max-w-7xl'>
      <div className='prose prose-xl' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

const Sidebar = ({ posts }: any) => {
  return (
    <nav className='flex-1 px-2 bg-white'>
      {posts.map((post: any) => (
        <div>
          <a
            href={`/guides/${post.slug}`}
            className='flex items-center w-full py-2 pr-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group pl-7 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200'
          >
            {post.title}
          </a>
        </div>
      ))}
    </nav>
  )
}
