import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <nav className='relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6'>
            <div className='flex items-center flex-1'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <Link href='/'>
                  <a aria-label='Home'>
                    <img className='h-8 w-auto sm:h-10' src='/img/iHub-logo-white.svg' alt='iHub Logo' />
                  </a>
                </Link>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Menu.Button
                    className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out'
                    aria-label='Main menu'
                    aria-haspopup='true'
                  >
                    <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                  </Menu.Button>
                </div>
              </div>
              <div className='hidden space-x-10 md:flex md:ml-10'>
                <Link href='#'>
                  <a className='font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out'>
                    Overview
                  </a>
                </Link>
                <Link href='/docs/api'>
                  <a className='font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out'>
                    Documentation
                  </a>
                </Link>
                <Link href='#'>
                  <a className='font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out'>
                    Marketplace
                  </a>
                </Link>
                <Link href='#'>
                  <a className='font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out'>
                    About
                  </a>
                </Link>
              </div>
            </div>
            <div className='hidden md:flex'>
              <a
                href='#'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out'
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
            className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <Menu.Items static className='rounded-lg shadow-md'>
              <div
                className='rounded-lg bg-white shadow-xs overflow-hidden'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='main-menu'
              >
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <img className='h-8 w-auto' src='/img/iHub-logo.svg' alt='' />
                  </div>
                  <div className='-mr-2'>
                    <Menu.Item
                      as='button'
                      className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                    >
                      <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </Menu.Item>
                  </div>
                </div>
                <div className='space-y-1 px-2 pt-2 pb-3'>
                  <Menu.Item>
                    <Link href='#'>
                      <a
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                        role='menuitem'
                      >
                        Overview
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='/docs/api'>
                      <a
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                        role='menuitem'
                      >
                        Documentation
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='#'>
                      <a
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                        role='menuitem'
                      >
                        Marketplace
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='#'>
                      <a
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
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
                      className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out'
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
