import Link from 'next/link';

export default function BetaBanner() {
  return (
    <div className='bg-green-400 rounded-b-[20px] max-w-sm mx-auto'>
      <div className='global-margin py-2 text-center'>
        <div className='flex justify-between flex-wrap'>
          <div className='w-0 flex-1'>
            <p className='ml-3 text-black-white-200 truncate'>
              <div className='md:hidden'>
                <h6 className='xb mobile inline'>Beta</h6>{' '}
                <h6 className='mobile sm:desktop inline'>versie van CircuLaw - </h6>
                <span className='link-mobile sm:link-desktop text-green-600'>
                  <Link href='/beta'>Lees meer -&gt;</Link>
                </span>
              </div>
              <div className='hidden md:inline'>
                <h6 className='xb mobile inline'>Beta</h6>{' '}
                <h6 className='mobile sm:desktop inline'>versie van CircuLaw - </h6>
                <span className='link-mobile sm:link-desktop text-green-600'>
                  <Link href='/beta'>Lees meer -&gt;</Link>
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
