import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <nav className='relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6'>
            <div className='flex items-center flex-1'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <Link href='/'>
                  <a aria-label='Home'>
                    <img className='w-auto h-8 sm:h-10' src='/img/iHub-logo-white.svg' alt='iHub Logo' />
                  </a>
                </Link>
                <div className='flex items-center -mr-2 md:hidden'>
                  <Menu.Button
                    className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                    aria-label='Main menu'
                    aria-haspopup='true'
                  >
                    <svg className='w-6 h-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                  </Menu.Button>
                </div>
              </div>
              <div className='hidden space-x-10 md:flex md:ml-10'>
                <Link href='#'>
                  <a className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                    Overview
                  </a>
                </Link>
                <Link href='/guides/getting-started'>
                  <a className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                    Getting Started
                  </a>
                </Link>
                <Link href='/docs/api'>
                  <a className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                    Documentation
                  </a>
                </Link>
                <Link href='/marketplace'>
                  <a className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                    Marketplace
                  </a>
                </Link>
                <Link href='#'>
                  <a className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                    About
                  </a>
                </Link>
              </div>
            </div>
            <div className='hidden md:flex'>
              <a
                href='#'
                className='inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700'
              >
                Log in
              </a>
            </div>
          </nav>
          {/* Mobile menu, show/hide based on menu open state.*/}
          <Transition
            show={open}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
            className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'
          >
            <Menu.Items static className='rounded-lg shadow-md'>
              <div
                className='overflow-hidden bg-white rounded-lg shadow-xs'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='main-menu'
              >
                <div className='flex items-center justify-between px-5 pt-4'>
                  <div>
                    <img className='w-auto h-8' src='/img/iHub-logo.svg' alt='' />
                  </div>
                  <div className='-mr-2'>
                    <Menu.Item
                      as='button'
                      className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500'
                    >
                      <svg className='w-6 h-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </Menu.Item>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  <Menu.Item>
                    <Link href='#'>
                      <a
                        className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                        role='menuitem'
                      >
                        Overview
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='/docs/api'>
                      <a
                        className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                        role='menuitem'
                      >
                        Documentation
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='#'>
                      <a
                        className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                        role='menuitem'
                      >
                        Marketplace
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='#'>
                      <a
                        className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                        role='menuitem'
                      >
                        About
                      </a>
                    </Link>
                  </Menu.Item>
                </div>
                <div>
                  <Menu.Item>
                    <a
                      href='#'
                      className='block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700'
                      role='menuitem'
                    >
                      Log in
                    </a>
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
