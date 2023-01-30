import Link from 'next/link';
import Image from 'next/image';

import MeasureLinks from '../measure-links-dropdown';

export default function WelkeLayout(props) {
  const gemLaws = props.gemLaws;
  return (
    <>
      {/* Header */}
      <div className='global-margin mt-10 mb-20 max-w-2xl'>
        <div className='flex justify-between items-center  pb-8'>
          <div className='breadcrumb text-green-500'>
            <Link href='/'>Home &gt;</Link>
            <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
              <span className='inline-block lowercase first-letter:uppercase'>
                {props.casus} &gt;{' '}
              </span>
            </Link>
          </div>
          <div className='hidden sm:block float-right'>
            <MeasureLinks type={props.casus} page='welke' />
          </div>
        </div>

        <div className='items-center justify-start grid grid-cols-10'>
          <div className='col-span-1 flex h-full w-full items-start pt-2'>
            <Image src={props.iconPath} alt='Thema icon' width={107} height={107} />
          </div>
          <div className='col-span-9'>
            <h1 className='mobile sm:desktop text-black pb-2 max-w-3xl pl-6'>{props.title}</h1>
          </div>
        </div>
      </div>

      {/* DYNAMIC IMAGE */}
      <div className='global-margin'>
        <div className='flex grid-cols-3 items-start justify-center'>
          {/* HEADING */}
          <div className='grid col-span-1 items-start justify-center h-full w-80'>
            <div className='w-80 h-10 border border-green-800 rounded-full text-black-white-800 bg-black-white-200 flex items-center justify-left'>
              <div className='h-10 w-10 border-r border-t border-b border-green-800 rounded-full flex items-center justify-center'>
                <h5 className='mobile sm:desktop'>A</h5>
              </div>
              <div className='flex items-center justify-center w-full h-full -ml-10'>
                <h4 className='mobile sm:desktop'>Alle overheidslagen</h4>
              </div>
            </div>
            <div className='pl-4 pt-6'>
              {gemLaws &&
                gemLaws.map((gemLaw) => (
                  <div key={gemLaw.titel} className='flex items-center justify-start max-w-80'>
                    <span className='pr-2 inline-block'>
                      {' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='#028352'
                        className='w-4  h-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                        />
                      </svg>
                    </span>
                    <h5 className='py-2 inline-block mobile sm:desktop'>{gemLaw.titel}</h5>
                  </div>
                ))}
            </div>
          </div>

          {/* DIAGRAM */}
          <div className='w-[37.5rem] h-[37.5rem] flex items-center justify-center'>
            <div className='w-full h-full border-1 border-green-800 bg-green-800 rounded-full flex items-end justify-center'>
              <div className='w-5/6 h-5/6 border-1 border-green-500 bg-green-500 rounded-full flex items-end justify-center'>
                <div className='w-[70%] h-[70%] border-1 border-green-400 bg-green-400 rounded-full flex items-end justify-center'>
                  <div className='w-[33%] h-[37.5rem] rounded-[50%] overview-radial-gradient'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-1'>
            <div className='w-80 h-10'>top button</div>
          </div>
        </div>
      </div>

      <div className='global-margin mb-20'>
        <div className='max-w-3xl mx-auto'>
          <p className=' p-lg text-black-white-800 pb-6'>{props.p1}</p>
          {props.p2 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p2}</p>}
          {props.p3 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p3}</p>}
          {props.p4 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p4}</p>}
        </div>
      </div>
    </>
  );
}
