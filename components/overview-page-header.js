import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import MeasureLinksDropdown from './measure-links-dropdown';

export default function OverviewPageHeader({ props, page }) {
  return (
    <>
      <div>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 sm:pt-0 pb-8'>
          <div className='breadcrumb uppercase'>
            <Link className='underline link-interaction' href='/'>
              Home &nbsp;
            </Link>
            <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />{' '}
            <Link href={`/${props.thema.toLowerCase().replace(/ /g, '-')}`}>
              <span className='underline inline-block uppercase link-interaction'>
                {props.thema.replace('-', ' ')}
              </span>
            </Link>
          </div>
          <div className='block sm:float-right'>
            <MeasureLinksDropdown type={props.thema} page={page} />
          </div>
        </div>
        <div className='items-center justify-center grid grid-cols-10 pb-2'>
          <div className='col-span-1 flex h-12 w-12 sm:h-full sm:w-full items-center'>
            <Image src={props.icon} alt='Thema icon' width={107} height={107} />
          </div>
          <div className='col-span-9'>
            <h1 className='mobile sm:desktop text-black max-w-3xl pl-6'>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
