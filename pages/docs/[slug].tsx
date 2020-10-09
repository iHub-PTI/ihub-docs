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
}

function Post({ post }: Props): ReactElement {
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
        <div className='py-6 relative'>
          <Navbar />
        </div>
      </div>

      <div className='flex'>
        <div className='flex w-64 min-h-screen flex-col flex-shrink-0 border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto'>
          {/* <div className='flex items-center flex-shrink-0 px-4'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-logo-on-white.svg'
              alt='Workflow'
            />
          </div> */}
          <div className='mt-5 flex-grow flex flex-col'>
            <nav className='flex-1 px-2 bg-white'>
              <div>
                <a
                  href='#'
                  className='group w-full flex items-center pl-7 pr-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150'
                >
                  Entities
                </a>
              </div>
              <div>
                <button className='mt-1 group w-full flex items-center pr-2 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'>
                  {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                  <svg
                    className='mr-2 h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                  </svg>
                  Team
                </button>
                {/* Expandable link section, show/hide based on state. */}
                <div className='mt-1 space-y-1'>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Overview
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Members
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Calendar
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div>
                <button className='mt-1 group w-full flex items-center pr-2 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'>
                  {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                  <svg
                    className='mr-2 h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                  </svg>
                  Projects
                </button>
                {/* Expandable link section, show/hide based on state. */}
                <div className='mt-1 space-y-1'>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Overview
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Members
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Calendar
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div>
                <button className='mt-1 group w-full flex items-center pr-2 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'>
                  {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                  <svg
                    className='mr-2 h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                  </svg>
                  Calendar
                </button>
                {/* Expandable link section, show/hide based on state. */}
                <div className='mt-1 space-y-1'>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Overview
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Members
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Calendar
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div>
                <button className='mt-1 group w-full flex items-center pr-2 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'>
                  {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                  <svg
                    className='mr-2 h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                  </svg>
                  Documents
                </button>
                {/* Expandable link section, show/hide based on state. */}
                <div className='mt-1 space-y-1'>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Overview
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Members
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Calendar
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div>
                <button className='mt-1 group w-full flex items-center pr-2 py-2 text-sm leading-5 font-medium rounded-md bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'>
                  {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                  <svg
                    className='mr-2 h-5 w-5 transform group-hover:text-gray-400 group-focus:text-gray-400 transition-colors ease-in-out duration-150'
                    viewBox='0 0 20 20'
                  >
                    <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                  </svg>
                  Reports
                </button>
                {/* Expandable link section, show/hide based on state. */}
                <div className='mt-1 space-y-1'>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Overview
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Members
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Calendar
                  </a>
                  <a
                    href='#'
                    className='group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150'
                  >
                    Settings
                  </a>
                </div>
              </div>
            </nav>
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

  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])

  const content = await markdownToHtml(post.content || '')

  return { props: { post: { ...post, content } } }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return { params: { slug: post.slug } }
    }),
    fallback: false,
  }
}

function PostBody({ content }: { content: string }) {
  return (
    <div className='max-w-2xl mx-auto p-12 overflow-scroll flex-grow'>
      <div className='prose prose-xl' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
