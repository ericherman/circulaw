import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function NieuwToolTip() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Open ToolTip</span>
        <span
          type='button'
          className={
            'inline-flex rounded-full items-center px-4 py-1 shadow border button border-green-600 bg-green-500 hover:bg-transparent text-black-white-200 hover:text-green-600 transition ease-in-out hover:duration-150 focus:outline-none'
          }
        >
          NIEUW
        </span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='absolute float-right top-0 right-0 flex pt-4 pr-8 sm:-ml-10'>
                        <button
                          type='button'
                          className='rounded-md text-green-600'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <Dialog.Title className='text-gray-900'>
                          {' '}
                          <h2 className='mobile sm:desktop'>Nieuw in CircuLaw</h2>
                        </Dialog.Title>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        <div className='absolute inset-0 px-4 sm:px-6'>
                          <p className='tooltip-body pb-6'>
                            We hebben nu ook{' '}
                            <Link className='link-base' href='/matrassen'>
                              juridische instrumenten geïdentificeerd om de circulariteit van de
                              matrasketen te bevorderen
                            </Link>
                          </p>
                          <p className='tooltip-body pb-6'>
                            CircuLaw volgt voor de analyse van wet-en regelgeving en het
                            identificeren van juridische instrumenten een standaard werkwijze: deze
                            CircuLaw-methodiek voor wetsanalyse is nu ook voor iedereen beschikbaar.
                          </p>
                          <p className='tooltip-body'>
                            In deze versie van de website hebben we techniek, ontwerp en copy
                            verbeterd.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
