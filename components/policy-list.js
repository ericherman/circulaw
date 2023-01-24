import Link from 'next/link';
import Image from 'next/image';

import IconWood from '../public/icons/houtbuowSm.svg';
import WindmillIcon from '../public/windmill.svg';
import MatrassenIcon from '../public/icons/matressIcon.svg';

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      {lawData.map((law, index) => (
        <div key={index} className='block sm:ml-0 pb-8 sm:pb-10'>
          <div className=''>
            <div className='inline-block flex justify-start items-center'>
              {law?.thema === 'houtbouw' && (
                <div className='inline-block'>
                  <Image width='30' height='30' src={IconWood} alt='Icon of Wood' />
                </div>
              )}
              {law?.thema === 'circulaire-windturbines' && (
                <Image width='30' height='30' src={WindmillIcon} alt='Icon of Wood' />
              )}
              {law?.thema === 'matrassen' && (
                <div className='inline-block'>
                  <Image width='30' height='30' src={MatrassenIcon} alt='Icon of Wood' />
                </div>
              )}
              <h6 className='inline-block pl-2 inline uppercase text-green-600'>{law?.thema.replace('-', ' ')}</h6>
              {law?.extraContent &&
                law?.extraContent.map((content) => (
                  <h6
                    key={content}
                    className='ml-2 p-1 rounded bg-green-500 text-black-white-200 no-underline'
                  >
                    {content}
                  </h6>
                ))}
            </div>
            <div className='block my-1 max-w-4xl'>
              <Link href={'/measures/' + law.slug.current} key={law.slug.current}>
                <span className='no-underline hover:text-green-500'>
                  <h3 className='mobile sm:desktop text-black-white-800'>{law.titel} </h3>
                </span>
              </Link>
              <div className='block pb-1'>
                {law?.overheidslaag?.map((level) => (
                  <h6 key={level} className='capitalize text-green-500 inline'>
                    {level} {law?.overheidslaag.slice(-1)[0] !== level && <span>- </span>}
                  </h6>
                ))}
              </div>

              <div className='block newlineDisplay twoLines p-base text-black-white-800 mb-4'>
                <Link href={'/measures/' + law.slug.current} key={law.slug.current} passHref>
                  <p className='max-w-xs sm:max-w-5xl'>{law.introText}</p>
                </Link>
              </div>

              <div className='lg:flex space-x-0 lg:space-x-8 space-y-4 sm:space-y-0 sm:py-1 border-b border-t border-black-white-500 mb-2 items-center'>
                <div className='flex-2 mr-5'>
                  <h6 className='block-inline flex items-center text-black-white-500'>
                    Invloed:{' '}
                    <span className='text-green-500 uppercase pl-1'>{law.juridischInvloed}</span>
                  </h6>
                </div>

                <div className='flex-2 mr-5 '>
                  <h6 className='block-inline flex items-center text-black-white-500'>
                    Juridische Haalbaarheid:{' '}
                    <span className='text-green-500 uppercase pl-1'>
                      {law.juridischeHaalbaarheid}
                    </span>
                  </h6>
                </div>
                <div className='flex-2 md:mr-5 text-black-white-500'>
                  <h6 className='inline'>R-ladder:{' '}</h6>
                  <h6 className='block-inline text-black-white-200 inline'>
                    {law.rLadder.map((rValue) => (
                      <span key={rValue} className='bg-green-500 rounded-full p-1 mr-2'>
                        {rValue}{' '}
                      </span>
                    ))}
                  </h6>
                </div>
              </div>
              <div className='flex space-x-8'>
                <h6 className='p-1 rounded bg-black-white-300 text-black-white-800 '>
                  {law.subrechtsgebied}
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
