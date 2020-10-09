import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>iHub</title>
      </Head>
      <div className='relative bg-gray-800 overflow-hidden'>
        <div className='hidden sm:block sm:absolute sm:inset-0'>
          <svg
            className='absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0'
            width={364}
            height={384}
            viewBox='0 0 364 384'
            fill='none'
          >
            <defs>
              <pattern
                id='eab71dd9-9d7a-47bd-8044-256344ee00d0'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} fill='currentColor' />
              </pattern>
            </defs>
            <rect width={364} height={384} fill='url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)' />
          </svg>
        </div>
        <div className='relative pt-6 pb-12 sm:pb-32'>
          <Navbar />
          <main className='mt-8 sm:mt-16 md:mt-20 lg:mt-24'>
            <div className='mx-auto max-w-screen-xl'>
              <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
                  <div>
                    <a
                      href='https://github.com/iHub-PTI'
                      target='_blank'
                      className='inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                    >
                      <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                        License: GPL v3
                      </span>
                      <span className='ml-4 text-sm leading-5'>Visit GitHub</span>

                      {/* Heroicon name: chevron-right */}
                      <svg
                        className='ml-2 w-5 h-5 text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                    <h2 className='mt-4 text-3xl tracking-tight leading-10 font-extrabold text-white sm:mt-5 sm:leading-none sm:text-5xl lg:mt-6 lg:text-4xl xl:text-4xl'>
                      The open <span className='text-indigo-400'>Health Ecosystem</span>{' '}
                      <br className='hidden md:inline' />
                      for Paraguay and beyond
                    </h2>
                    <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                      iHub handles all the compliance, security, privacy and critical infrastructure for you and
                      provides one simple API with access to central medical data. So you can build great apps easier,
                      faster and more secure.
                    </p>
                    <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
                      <div className='rounded-md shadow'>
                        <a
                          href='#'
                          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                        >
                          Get started
                        </a>
                      </div>
                      <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                        <a
                          href='#'
                          className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                        >
                          Live demo
                        </a>
                      </div>
                    </div>

                    <p className='mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10'>
                      Provided by
                    </p>
                    <div className='mt-2 w-full sm:mx-auto sm:max-w-lg lg:ml-0'>
                      <div className='flex flex-wrap items-start justify-between'>
                        <div className='flex justify-center px-1 py-3'>
                          <img className='h-9 sm:h-10' src='/img/pti-logo.svg' alt='PTI' />
                        </div>
                        <div className='flex justify-center px-1 py-3'>
                          <img className='h-9 sm:h-10' src='/img/mspbs-logo.png' alt='mspbs' />
                        </div>
                        <div className='flex justify-center px-1 py-3'>
                          <img className='h-9 sm:h-10' src='/img/penguin-academy_logo.svg' alt='Penguin Academy' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className='relative mx-auto p-12 mt-12 sm:mt-16 lg:mt-0 lg:col-span-6'
                  width={490}
                  src='/img/placeholder.svg'
                  alt=''
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Section 1: Why iHub */}
      {/*
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
*/}
      <div className='py-16 bg-gray-50 overflow-hidden lg:py-24'>
        <div className='relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl'>
          <svg
            className='hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={784} fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)' />
          </svg>
          <div className='relative'>
            <h3 className='text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              Why iHub?
            </h3>
            <p className='mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500'>
              We believe that everyone should have easy access to their medical history and to doctors. COVID-19 has
              shown how important digitalization is for the Paraguayan health system.
            </p>
          </div>
          <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
            <div className='relative'>
              <h4 className='text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9'>
                Built on international standards
              </h4>
              <p className='mt-3 text-lg leading-7 text-gray-500'>
                By leveraging state-of-the-art technology, we can increase the access to healthcare services, while
                lowering the cost and time it takes. We put special ephasis on privacy, interoperability and
                accessibility.
              </p>
              <ul className='mt-10'>
                <li>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                        {/* Heroicon name: scale */}
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h5 className='text-lg leading-6 font-medium text-gray-900'>International Privacy Level</h5>
                      <p className='mt-2 text-base leading-6 text-gray-500'>
                        Health Records require a high level of privacy. This is why we follow international
                        best-practices. We draw inspiration from GDPR (EU Privacy Law) and HIPAA (US) while complying
                        with Paraguayan law.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='mt-10'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                        {/* Heroicon name: globe-alt */}
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h5 className='text-lg leading-6 font-medium text-gray-900'>
                        International Interoperability Standars
                      </h5>
                      <p className='mt-2 text-base leading-6 text-gray-500'>
                        Patient records need to be readily “available, discoverable, and understandable.” Therefore we
                        implement FHIR (Fast Healthcare Interoperability Resources). This standard is developed by HL7
                        and the de-facto standard format for electronic health records (EHRs) around the world.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='mt-10'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                        {/* Heroicon name: lightning-bolt */}
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 10V3L4 14h7v7l9-11h-7z'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h5 className='text-lg leading-6 font-medium text-gray-900'>Accessibility</h5>
                      <p className='mt-2 text-base leading-6 text-gray-500'>
                        This system should be available for everyone! So special care is taken to design it accessible -
                        we consider 2 distinct dimensions: (1) Contents being accessible to people with handicap. And
                        (2) system being available accross the country on budget hardware and low connectivity.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='mt-10 -mx-4 relative lg:mt-0'>
              <svg
                className='absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden'
                width={784}
                height={404}
                fill='none'
                viewBox='0 0 784 404'
              >
                <defs>
                  <pattern
                    id='ca9667ae-9f92-4be7-abcb-9e3d727f2941'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill='url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)' />
              </svg>
              <img className='relative mx-auto' width={490} src='/img/placeholder.svg' alt='' />
            </div>
          </div>
          <svg
            className='hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={784} fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
          </svg>
          <div className='relative mt-12 sm:mt-16 lg:mt-24'>
            <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
              <div className='lg:col-start-2'>
                <h4 className='text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9'>
                  Free as in Freedom
                </h4>
                <p className='mt-3 text-lg leading-7 text-gray-500'>
                  We chose to use open source licenses for the iHub source code because every Paraguayan Citizen has the
                  right to know how their medical data is beeing processed, transformed or stored by the system. This is
                  a small but important way to ensure the public has that freedom and transparency to the process.
                </p>
                <ul className='mt-10'>
                  <li>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                          {/* Heroicon name: shield-check */}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='ml-4'>
                        <h5 className='text-lg leading-6 font-medium text-gray-900'>Security first</h5>
                        <p className='mt-2 text-base leading-6 text-gray-500'>
                          We apply security by design and use open standards such as oAuth2, OpenID Connect and JWT. As
                          all the code in the system can be accessed openly, it is possible for anyone with the skills
                          to review the code and inform us about potential security issues.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='mt-10'>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                          {/* Heroicon name: book-open */}
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='ml-4'>
                        <h5 className='text-lg leading-6 font-medium text-gray-900'>Learn from the code</h5>
                        <p className='mt-2 text-base leading-6 text-gray-500'>
                          As all code is available open, you can use it to learn or contribute to the existing system by
                          adding functionality, fixing problems or improving accessibilitiy!
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='mt-10 -mx-4 relative lg:mt-0 lg:col-start-1'>
                <svg
                  className='absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden'
                  width={784}
                  height={404}
                  fill='none'
                  viewBox='0 0 784 404'
                >
                  <defs>
                    <pattern
                      id='e80155a9-dfde-425a-b5ea-1f6fadd20131'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                    </pattern>
                  </defs>
                  <rect width={784} height={404} fill='url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)' />
                </svg>
                <img className='relative mx-auto' width={490} src='/img/placeholder.svg' alt='' />
              </div>
            </div>
          </div>
          <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
            <div className='relative'>
              <h4 className='text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9'>
                Crafted by humans and teamwork
              </h4>
              <p className='mt-3 text-lg leading-7 text-gray-500'>
                To achieve the mission we are on, great people need to work together. We are an inclusive team, composed
                of experts from Paraguay and abroad. We use Design Thinking and agile development to place the human at
                the center of technology.
              </p>
              <a href='#' className='mt-5 text-indigo-600 flex group'>
                <span className='text-base font-medium'>Learn more about the team and the process</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='h-6 w-6 ml-2 group-hover:translate-x-2 transform transition duration-500 ease-in-out'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </a>
            </div>
            <div className='mt-10 -mx-4 relative lg:mt-0'>
              <svg
                className='absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden'
                width={784}
                height={404}
                fill='none'
                viewBox='0 0 784 404'
              >
                <defs>
                  <pattern
                    id='ca9667ae-9f92-4be7-abcb-9e3d727f2941'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill='url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)' />
              </svg>
              <img className='relative mx-auto' width={490} src='/img/placeholder.svg' alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Call to action */}

      <div className='relative'>
        <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
          <div className='flex-1 bg-gray-50' />
          <div className='flex-1 bg-gray-900' />
        </div>
        <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
            <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
              <div className='lg:self-center'>
                <h2 className='text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10'>
                  <span className='block'>Ready to dive in?</span>
                  <span className='block text-red-900'>Start building your app today.</span>
                </h2>
                <p className='mt-4 text-lg leading-6 text-orange-50'>
                  Learn about the components that are available in the ecosystem and the resources you access through
                  the API - such as: Doctros, Patients, Appointments and many more ...
                </p>
                <a
                  href='#'
                  className='mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base leading-6 font-medium text-red-600 hover:text-red-500 focus:outline-none focus:border-red-300 focus:shadow-outline-red transition duration-150 ease-in-out'
                >
                  Explore the Docs
                </a>
              </div>
            </div>
            <div className='relative pb-3/5 -mt-6 md:pb-1/2'>
              <img
                className='absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
                src='/img/placeholder.svg'
                alt='App screenshot'
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
