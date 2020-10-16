import React from 'react'
import Head from 'next/head'

import { Navbar } from '../components/Navbar'

const marketplace = () => {
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
      <div className='relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              Marketplace
            </h2>
            <p className='max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4'>
              Here you see apps that have been created within the iHub Ecosystem
            </p>
          </div>
          <div className='grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
            <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
              <div className='flex-shrink-0'>
                <img className='object-cover w-full h-48' src='/img/marketplace/boldo-cover.png' alt='' />
              </div>
              <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                <div className='flex-1'>
                  <p className='text-sm font-medium leading-5 text-indigo-600'>
                    <a href='https://boldo.penguin.software' className='hover:underline'>
                      Telemedicine
                    </a>
                  </p>
                  <a href='https://boldo.penguin.software' className='block'>
                    <h3 className='mt-2 text-xl font-semibold leading-7 text-gray-900'>Boldo</h3>
                    <p className='mt-3 text-base leading-6 text-gray-500'>
                      Boldo connects Doctors and Patients to have consultations and manage health records.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default marketplace
