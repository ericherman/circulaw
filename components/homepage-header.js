import CustomButton from './custom-button';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/outline';

export default function HomepageHeader() {
  return (
    <main className='h-auto global-margin'>
      <div className='h-full mx-auto max-w-4xl'>
        <div className='text-center'>
          <div className='header hidden sm:block text-black-white-200 pb-10'>
            <span className='block '>Regelgeving voor een circulaire economie</span>{' '}
          </div>
          <h1 className='text-left mobile block sm:hidden text-black-white-200 py-4'>
            <span className='block '>Regelgeving voor een circulaire economie</span>{' '}
          </h1>
          <p className='text-left sm:text-center mt-2 p-base max-w-sm sm:max-w-full sm:p-xl-header text-black-white-200 pb-8'>
          CircuLaw laat decentrale overheden zien hoe je met bestaande juridische instrumenten de circulaire transitie kunt versnellen.
          </p>
          <div className='mt-2 sm:flex sm:justify-center md:mt-2'>
            <div className=''>
              <CustomButton color='home'>
                <ScrollLink to='thema' smooth={true}>
                  Bekijk de thema&rsquo;s{' '}
                  <ArrowDownIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </ScrollLink>
              </CustomButton>
            </div>
            <div className='mt-3 rounded-md sm:mt-0 sm:ml-3'>
              <CustomButton color='home'>
                <ScrollLink to='about' smooth={true}>
                  Meer over CircuLaw?{' '}
                  <ArrowDownIcon className='inline-block h-4 w-4' aria-hidden='true' />
                </ScrollLink>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
