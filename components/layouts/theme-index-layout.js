import Link from 'next/link';
import ThemeBottomSection from '../section-bottom-theme-index';
import ThemeCard from '../theme-card';

export default function ThemeLayout(props) {
  
  return (
    <>
      {/* HEADER */}
      <div className='w-full h-[28rem] bg-houtbouw-hero bg-center bg-cover relative'>
        <div className='thema-hero-gradient absolute inset-x-0 bottom-0 h-[42rem] z-5'>
          <div className='global-margin h-[28rem] mt-[18rem] z-10'>
            <div className='breadcrumb pt-8 text-greenLink -mt-16'>
              <Link className='bg-black-white-200 border rounded-md border-black-white-200 px-1 py-0.5' href='/'>
                &lt; Home
              </Link>
            </div>
            <div className='grid col-span-8 grid-cols-8 pl-36 pb-14 pt-14 w-4/5'>
              <div className='col-span-8'>
                <h1 className='text-black-white-200 inline-block mobile sm:desktop'>{props.title}</h1>
              </div>
              <div className='col-span-7'>
                <p className='pt-4 text-black-white-200 body-text-mobile sm:body-text'>
                 {props.headerSubtitle}
                  <span className='text-greenLink link-mobile sm:link inline-block pl-1'>
                    <a href={props.headerLinkURL} target='_blank' rel='noopener noreferrer'>
                      {' '}
                      {props.headerLinkText}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=''>
        <div className='global-margin'>
            <div className='pt-20 pb-10'>
              <h2 className='mobile sm:desktop'>Overzichten van instrumenten die {props.thema} stimuleren </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-14 justify-items-center md:h-[76rem] lg:h-[38rem]'>

             <ThemeCard props={props} type='list'/>
             <ThemeCard props={props} type='samenhang'/>
             <ThemeCard props={props} type= 'waarvoor'/>

            </div>
        </div>
        <ThemeBottomSection props={props} />
      </div>
    </>
  );
}
