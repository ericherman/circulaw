import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';

export default function AboutPageDropdown({ currentSlug, slugs }) {
  const remainingTitles = slugs?.filter((el) => el.slug !== currentSlug) ?? [];
  const currentPage = slugs?.filter((el) => el.slug === currentSlug) ?? [];
  const router = useRouter();
  // add on click close to close the disclosure.
  return (
    <div className='pt-8 w-full'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } text-black bg-green-500 hover:text-green-500 flex justify-between items-center border border-green-500 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
              >
                <span className='inline text-left '>{currentPage[0]?.title}</span>
              </div>
              <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500'>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                />
              </div>
            </Disclosure.Button>

            <Disclosure.Panel>
              <Disclosure.Button
                as='div'
                onClick={() => {
                  router.push(`/about/${encodeURIComponent(remainingTitles[0]?.slug)}`);
                }}
              >
                <div className='bg-white w-full text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500'>
                  <span className='block pl-3 truncate'>{remainingTitles[0]?.title}</span>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as='div'
                onClick={() => {
                  router.push(`/about/${encodeURIComponent(remainingTitles[1]?.slug)}`);
                }}
              >
                <div className='bg-white w-full text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500'>
                  <span className='block pl-3 truncate'>{remainingTitles[1]?.title}</span>
                </div>
              </Disclosure.Button>
              <Disclosure.Button
                as='div'
                onClick={() => {
                  router.push(`/about/${encodeURIComponent(remainingTitles[2]?.slug)}`);
                }}
              >
                <div
                  className={`${
                    remainingTitles[2]?.slug === remainingTitles?.slice(-1)[0]?.slug
                      ? 'rounded-b-cl'
                      : ''
                  } bg-white w-full text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500`}
                >
                  <span className='block pl-3 truncate'>{remainingTitles[2]?.title}</span>
                </div>
              </Disclosure.Button>
              {remainingTitles[3] && (
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`/about/${encodeURIComponent(remainingTitles[3]?.slug)}`);
                  }}
                >
                  <div
                    className={`${
                      remainingTitles[3]?.slug === remainingTitles?.slice(-1)[0]?.slug
                        ? 'rounded-b-cl'
                        : ''
                    } bg-white text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500`}
                  >
                    <span className='block pl-3 truncate'>{remainingTitles[3]?.title}</span>
                  </div>
                </Disclosure.Button>
              )}
              {remainingTitles[4] && (
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`/about/${encodeURIComponent(remainingTitles[4]?.slug)}`);
                  }}
                >
                  <div
                    className={`${
                      remainingTitles[4]?.slug === remainingTitles?.slice(-1)[0]?.slug
                        ? 'rounded-b-cl'
                        : ''
                    } bg-white text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500`}
                  >
                    <span className='block pl-3 truncate'>{remainingTitles[4]?.title}</span>
                  </div>
                </Disclosure.Button>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
