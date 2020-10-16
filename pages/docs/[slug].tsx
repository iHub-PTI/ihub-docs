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

  const post = getPostBySlug('docs', params.slug, ['content', 'title', 'priority', 'date', 'slug', 'ogImage'])
  const posts = getAllPosts('docs', ['slug', 'title'])

  const content = await markdownToHtml(post.content || '')

  return { props: { post: { ...post, content }, posts } }
}

export async function getStaticPaths() {
  const posts = getAllPosts('docs', ['slug'])

  return {
    paths: posts.map(post => {
      return { params: { slug: post.slug } }
    }),
    fallback: false,
  }
}

function PostBody({ content }: { content: string }) {
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
            href={`/docs/${post.slug}`}
            className='flex items-center w-full py-2 pr-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out rounded-md bg-gray-100_ group pl-7 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200'
          >
            {post.title}
          </a>
        </div>
      ))}
    </nav>
  )
}

// <div>
//   <button className='flex items-center w-full py-2 pr-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out bg-white rounded-md group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50'>
//     {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
//     <svg
//       className='w-5 h-5 mr-2 transition-colors duration-150 ease-in-out transform group-hover:text-gray-400 group-focus:text-gray-400'
//       viewBox='0 0 20 20'
//     >
//       <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
//     </svg>
//     Team
//   </button>
//   {/* Expandable link section, show/hide based on state. */}
//   <div className='mt-1 space-y-1'>
//     <a
//       href='#'
//       className='flex items-center w-full py-2 pl-10 pr-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
//     >
//       Overview
//     </a>
//     <a
//       href='#'
//       className='flex items-center w-full py-2 pl-10 pr-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
//     >
//       Members
//     </a>
//     <a
//       href='#'
//       className='flex items-center w-full py-2 pl-10 pr-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
//     >
//       Calendar
//     </a>
//     <a
//       href='#'
//       className='flex items-center w-full py-2 pl-10 pr-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
//     >
//       Settings
//     </a>
//   </div>
// </div>
