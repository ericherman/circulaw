import Link from 'next/link';

export default function BetaBanner() {
  return (
    <div className='bg-green-400 rounded-b-[20px] max-w-lg mx-auto'>
      <div className='global-margin py-4 text-center'>
        <div className='flex justify-between flex-wrap'>
          <div className='w-0 flex-1'>
            <p className='ml-3 font-medium text-black-white-200 truncate font-manrope font-normal'>
              <span className='md:hidden'>
                <span className='font-bold'>Beta</span> versie van CircuLaw -{' '}
                <span className='link-mobile sm:link-desktop text-green-600'>
                  <Link href='/alpha'>Lees meer -&gt;</Link>
                </span>
              </span>
              <span className='hidden md:inline'>
                <span className='font-bold'>Beta</span> versie van CircuLaw -{' '}
                <span className='link-mobile sm:link-desktop text-green-600'>
                  <Link href='/alpha'>Lees meer -&gt;</Link>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
