import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import OverNav from './over-nav';
import { usePreview } from '../lib/sanity.preview';
import { aboutPagePTComponents } from '../lib/portable-text/pt-components';
import AboutPageDropdown from './about-page-dropdown';

export default function AboutPagepreview({ query, queryParams }) {
  const data = { aboutPage: usePreview(null, query, queryParams) };
  return (
    <div>
      <div className='bg-about-header bg-cover bg-center h-40'></div>
      <div className='pb-8 text-black-white-800 global-margin-alternative'>
        <div className='block lg:hidden w-full'>
          <AboutPageDropdown
            currentSlug={data?.aboutPage?.slug.current}
            slugs={data.aboutPage.aboutPageSlugs}
          />
        </div>
        <div className='grid grid-cols-1 w-full lg:grid-cols-3'>
          <div className='col-span-2'>
            <div className='breadcrumb pt-8 text-green-500'>
              <Link href='/'>Home &gt;</Link>
            </div>
            <div className='max-w-3xl'>
              <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop text-green-500'>
                {data?.aboutPage?.pageTitle}
              </h1>
              <PortableText
                value={data?.aboutPage?.aboutPageContent}
                components={aboutPagePTComponents}
              />
            </div>
          </div>
          <div className='hidden lg:block mt-3 max-w-3xl lg:ml-12 lg:mb-20 lg:mt-32 col-span-1'>
            <OverNav
              currentSlug={data?.aboutPage?.slug.current}
              slugs={data.aboutPage.aboutPageSlugs}
            />
          </div>
          <div className='block lg:hidden'>
            <AboutPageDropdown
              currentSlug={data?.aboutPage?.slug.current}
              slugs={data.aboutPage.aboutPageSlugs}
            />
          </div>
        </div>
        <Link
          className='bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0'
          href='/api/exit-preview'
        >
          Exit Preview
        </Link>
      </div>
    </div>
  );
}
