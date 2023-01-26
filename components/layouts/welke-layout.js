import Link from 'next/link';
import Image from 'next/image';

import MeasureLinks from '../measure-links-dropdown';

/* list of props
casus
title
img
imgMob
p1
p2
p3
*/

export default function WelkeLayout(props) {
  return (
    <>
      <div className='global-margin my-20 max-w-2xl'>
        <div className='breadcrumb text-green-500 pb-8'>
          <Link href='/'>Home &gt;</Link>
          <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
            <span className='inline-block lowercase first-letter:uppercase'>
              {props.casus} &gt;{' '}
            </span>
          </Link>
        </div>
        <h1 className='mobile sm:desktop text-green-600 pb-2 max-w-3xl mx-auto'>{props.title}</h1>
        <div className='hidden sm:block float-right'>
          <MeasureLinks type={props.casus} page='welke' />
        </div>
      </div>
      <div className='hidden sm:block image-margin'>
        <Image src={props.img} alt='Picture of the case' />
      </div>
      <div className='block sm:hidden'>
        <Image src={props.imgMob} alt='Picture of the case' />
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
