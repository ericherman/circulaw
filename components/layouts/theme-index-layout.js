  import Link from 'next/link';
  import ThemeBottomSection from '../section-bottom-theme-index';
  import Image from 'next/image';
  import CustomButton from '../custom-button'
 


  export default function ThemeLayout(props) {
    return (
       <>
       {/* Create Component with props */}
        <div className='w-full h-[28rem] bg-houtbouw-hero bg-center bg-cover relative'>
          <div className='thema-hero-gradient absolute inset-x-0 bottom-0 h-[42rem] z-5'>
            <div className='global-margin h-[28rem] mt-[18rem] z-10'>
            <div className='breadcrumb pt-8 text-greenLink -mt-16'>
                <Link className='bg-white1 border rounded-md border-white1 px-1 py-0.5' href='/'>&lt; Home</Link>
            </div>

              <div className='grid col-span-8 grid-cols-8 pl-36 pb-14 pt-14 w-4/5'>
                <div className='col-span-8'>
                <h1 className='text-white1 inline-block mob-new sm:urban'>{props.title} CF </h1>
                </div>
                <div className='col-span-7'>
                <p className='pt-4 text-white1 body-text-mobile sm:body-text'>We kunnen veel milieuvriendelijker bouwen wanneer we beton (deels) vervangen door houtfont change
                <span className='text-greenLink link-mobile sm:link inline-block pl-1'>
                  <a href={props.pdfSource} target='_blank' rel='noopener noreferrer'>
                  {' '} meer over nut van houtbouw →  
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


          {/* CREATE COMPONENT */}
          <div classname = 'bg-white1'>
            <div className='pt-20'>
              <h2 className='urban'>Overzichten van instrumenten die houtbouw stimuleren </h2>
            </div>

            <div className='flex gap-14 justify-between items-center h-[32rem]'>
              
              
              <div className='grid grid-rows-5 border-transparent shadow-md rounded-md h-5/6 w-full'>
                <div className='row-span-2 bg-green1 rounded-t-md flex items-center justify-center'>
                  <div className='w-5/6 h-5/6 relative'>
                    <Image src='../list.svg' alt='' fill />
                  </div>
                </div>
                <div className='row-span-3'>
                  <h3>
                    Lijst van 36 instrumenten
                  </h3>
                  <p>
                  Met handige filters om snel te vinden wat je zoekt.
                  </p>
                </div>
                <div className='pb-6 pl-8'>
                <CustomButton color='whiteBackground'>Bekijk  de lijst<span className='pl-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5  h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
                </span></CustomButton>
                </div>
              </div>
              <div className='grid grid-rows-5 border border-transparent shadow-md rounded-md h-5/6 w-full'>
              <div className='row-span-2 bg-green1 rounded-t-md flex items-center justify-center'>
              <div className='w-5/6 h-5/6 relative'>
                    <Image src='../samenhang.svg' alt='' fill />
                  </div>
              </div>
                <div className='row-span-3'>
                 <h3>
                 Samenhang álle houtbouwinstrumenten in beeld
                 </h3>
                 <p>
                 Hoe meer instrumenten je tegelijk inzet, hoe meer je bereikt.
                 </p>
                </div>
                <div className='pb-6 pl-8'>
                <CustomButton color='whiteBackground'>Bekijk de samenhang<span className='pl-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5  h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
                </span></CustomButton>
                </div>
              </div>
              <div className='grid grid-rows-5 border border-transparent shadow-md rounded-md h-5/6 w-full'>
              <div className='row-span-2 bg-green1 rounded-t-md flex items-center justify-center'>
                  <div className='w-5/6 h-5/6 relative'>
                    <Image src='../waarvoor.svg' alt='' fill />
                  </div>
              </div>
              <div className='row-span-3'>
                <h3>
                  Wie is waarvoor bevoegd?
                </h3>
                <p>
                  Zonder samenwerking geen succes. Maar dan moet je wel weten wie voor welk instrument verantwoordelijk is.
                </p>
              </div>
              <div className='pb-6 pl-8'>
              <CustomButton color='whiteBackground'>Bekijk  de bevoegdheden<span className='pl-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5  h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
                </span></CustomButton>
              </div>
              </div>
            
            
      
            </div>
          </div>

        
        </div>
        <ThemeBottomSection props={props} />
      </div>
      </>
    );
  }
