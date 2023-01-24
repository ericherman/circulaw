import Image from 'next/image';
import IconWood from '../public/icons/houtbouwIconBg.svg';
import WindmillIcon from '../public/winturbines.svg';
import MatrassenIcon from '../public/icons/matressIcon.svg'
import Link from 'next/link';
import RTooltip from '../components/r-ladder-tooltip';
import JHTooltip from '../components/juridische-houdbaarheid-tooltip';
import JITooltip from '../components/juridische-invloed-tooltip';

const viewportType = {
  mobile: 'block sm:hidden gradient-overview -m-8 h-[30rem] mb-10',
  desktop:'hidden sm:block float-right pl-4 ml-6 sm:pr-6 md:pr-10 lg:pr-14 gradient-overview h-[38rem] sticky top-40',};

export default function MeasureOverview({ viewport, children, data, ...props }) {
  let viewportClasses = viewportType[viewport];
  return (
    <div {...props} className={`${viewportClasses}`}>
      <div className='px-8 pb-10 sm:pb-0 sm:px-0 sm:py-12 block h-[30rem] sm:h-[38rem]'>
        {children}
        <div className='invisible sm:visible container pb-2'>
          {data?.measure?.thema === 'houtbouw' && 
            <div className='container-image h-14 w-14'>
              <Image src={IconWood} alt='Icon of a Wood Log' />
            </div>}
            {data?.measure?.thema === 'circulaire-windturbines' &&
            <div className='container-image h-14 w-14'>
              <Image src={WindmillIcon} alt='Icon of a Wood Log' />
            </div>
            }
             {data?.measure?.thema === 'matrassen' &&
            <div className='container-image h-14 w-14'>
              <Image src={MatrassenIcon} alt='Icon of a Wood Log' />
            </div>
            }
    
          <div className=''>
            <Link href={'/' + data?.measure?.thema.replace(/\s+/g, '-').toLowerCase()} passHref>
              <h5 className='mobile sm:desktop underline pl-2 text-green-600 first-letter:uppercase block'>
                {data?.measure?.thema}
              </h5>
            </Link>
          </div>
        </div>

        <div className='-mt-8 sm:mt-0 sm:pt-5 pb-1 sm:border-t border-black-white-600'>
          <div className='flex pb-2 justify-between items-center'>
            <div className='flex justify-left items-center'>
              <span className='text-black-white-800 pr-3'>R-ladder</span>
              <RTooltip>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#676868' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#F8FAF8'
                  />
                </svg>
              </RTooltip>
            </div>
            <div className='flex justify-end items-center visible sm:hidden'>
              <Link href={'/' + data?.measure?.thema.replace(/\s+/g, '-').toLowerCase()} passHref>
                <h5 className='mobile sm:desktop underline pl-2 text-green-600 first-letter:uppercase block'>
                  {data?.measure?.thema}
                </h5>
              </Link>
            </div>
          </div>
          <span className='block-inline grid grid-rows-1 grid-cols-6'>
            {data?.measure?.rLadder.map((rValue) => (
              <h6
                key={rValue}
                className='bg-green-600 text-black-white-200 mobile sm:desktop rounded-full p-1 mr-2 h-8 w-8 sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 flex justify-center items-center'
              >
                {rValue}
              </h6>
            ))}
          </span>
        </div>

        <div className='pt-5 pb-1'>
          <div className='relative border-t border-black-white-600 pt-4'>
            <div className='text-black-white-800 py-2'>Subrechtsgebied</div>
          </div>

          <div className='p-mobile-bg sm:p-desktop-bg first-letter:capitalize'>
            <p>{data?.measure?.subrechtsgebied}</p>
          </div>
        </div>

        <div className='pt-5 pb-1'>
          <div className='relative flex justify-between border-t border-black-white-600 pt-2'>
            <div className='flex py-2'>
              <span className='text-black-white-800 py-2 pr-3'>Invloed</span>
              <JITooltip data={data}>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#676868' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#F8FAF8'
                  />
                </svg>
              </JITooltip>
            </div>
          </div>

          <div className='flex items-center'>
            <span className='p-mobile-bg sm:p-desktop-bg border border-black rounded-xl uppercase px-2'>
              {data?.measure?.juridischInvloed}
            </span>
          </div>
        </div>

        <div className='pt-5 pb-5 border-b border-black-white-600'>
          <div className='relative flex justify-between border-t border-black-white-600 pt-2'>
            <div className='flex py-2'>
              <span className='text-black-white-800 py-2 pr-3'>Juridische haalbaarheid</span>
              <JHTooltip data={data}>
                <svg
                  width='24'
                  height='30'
                  viewBox='0 0 24 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='12' cy='15' r='12' fill='#676868' />
                  <path
                    d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                    fill='#F8FAF8'
                  />
                </svg>
              </JHTooltip>
            </div>
          </div>
          <div className='flex items-center w-10/12'>
            <span className='p-mobile-bg sm:p-desktop-bg border border-black rounded-xl px-2 uppercase'>
              {data?.measure?.juridischeHaalbaarheid}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
