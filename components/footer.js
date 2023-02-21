import Image from 'next/image';
import Link from 'next/link';
import NieuwTooltip from '../components/nieuw-tooltip';
import { get_partners } from '../utils/footer-partners';
import ActionPanel from '../components/section-action-panel';
import sanityLogo from '../public/logo_partners/sanity-logo.svg';

const navigation = {
  WAARDEKETENS: [
    { name: 'Houtbouw stimuleren', href: '/houtbouw', className: 'text-black-white-200' },
    {
      name: 'Circulaire windturbines',
      href: '/circulaire-windturbines',
      className: 'text-black-white-200',
    },
    {
      name: 'Circulaire matrasketen',
      href: '/matrassen',
      className: 'text-black-white-200',
    },
  ],

  // FAQ href is linked to CMS.
  other: [
    { name: 'Contact', href: '/contact', className: '' },
    { name: 'Disclaimer/Beta', href: '/beta', className: '' },
    { name: 'Privacy', href: '/privacy-policy', className: '' },
    { name: 'Cookies', href: '/cookie-info', className: '' },
  ],
};

const partners = get_partners();

export default function Footer(props) {
  let aboutSlugs = [];
  if (props.aboutSlugs) {
    aboutSlugs = props.aboutSlugs;
  }

  let FAQslug = [];
  if (props.vraagSlug) {
    FAQslug = props.vraagSlug;
  }
  return (
    <footer className='' aria-labelledby='footer-heading'>
      <div className='bg-green-600'>
        <div className='global-margin pt-12 lg:pt-16 lg:px-8'>
          <div className='pb-20'>
            <div className=''>
              <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8'>
                <div className='sm:hidden block border-b border-black-white-200 pb-4'>
                  <ActionPanel
                    title='Doe met ons mee'
                    paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
                    buttonText='Neem contact op'
                    buttonLink='/contact'
                  />
                </div>
                <div className=' border-b border-black-white-200 sm:border-0 py-2 sm:py-0'>
                  <h4 className='text-green-300 mobile sm:desktop uppercase'>THEMA’S</h4>
                  <div className='grid grid-cols-1 gap-8 py-2 sm:py-0'>
                    <ul role='list' className='mt-4 space-y-4'>
                      {navigation.WAARDEKETENS.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={` p-base hover:text-green-400 ${item.className}`}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className=' border-b border-black-white-200 sm:border-0 py-2 sm:py-0'>
                  <h4 className='text-green-300 mobile sm:desktop uppercase'>OVER CIRCULAW</h4>
                  <div className='grid grid-cols-1 gap-8 pb-4 sm:pb-0'>
                    {' '}
                    <ul role='list' className='mt-4 space-y-4'>
                      {aboutSlugs?.map((slug) => (
                        <li key={slug}>
                          <a
                            href={`/about/${encodeURIComponent(slug)}`}
                            className=' p-base hover:text-green-400 text-black-white-200'
                          >
                            <span className='inline-block first-letter:uppercase'>
                              {slug.replaceAll('-', ' ')}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='py-2 sm:py-0'>
                  <NieuwTooltip />
                  <ul role='list' className='mt-4 space-y-4'>
                    <li>
                      <a
                        className='p-base text-black-white-200 hover:text-green-400'
                        href={`/about/${encodeURIComponent(FAQslug)}`}
                      >
                        {FAQslug.length > 0 && (
                          <span className='inline-block first-letter:uppercase'>
                            {FAQslug.replaceAll('-', ' ')}
                          </span>
                        )}
                      </a>
                    </li>
                    {navigation.other.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className=' p-base text-black-white-200 hover:text-green-400'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='hidden sm:block'>
                  <ActionPanel
                    title='Doe met ons mee'
                    paragraph='Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?'
                    buttonText='Neem contact op'
                    buttonLink='/contact'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-green-800 pt-10 pb-2'>
        <div className='global-margin pb-12 px-4 lg:pb-16'>
          <div className='grid grid-cols-3 gap-x-0.5 gap-y-4 lg:grid-cols-5'>
            {partners.map((partner, index) => {
              return (
                <>
                  <div
                    key={partner.name}
                    className={`col-span-1 flex justify-center py-4 px-4 lg:py-8 lg:px-8 ${partner.className}`}
                  >
                    <a target='_blank' href={partner.link} rel='noopener noreferrer'>
                      <Image src={partner.image} alt={partner.name} />
                    </a>
                  </div>

                  {index === 2 && (
                    <div className='col-span-3 block lg:hidden'>
                      <hr className='border-black-white-200' />
                    </div>
                  )}

                  {index === 4 && (
                    <div className='col-span-5 hidden lg:block'>
                      <hr className='border-black-white-200' />
                    </div>
                  )}

                  {index === 5 && (
                    <div className='col-span-3 block lg:hidden'>
                      <hr className='border-black-white-200' />
                    </div>
                  )}

                  {index === 8 && (
                    <div className='col-span-3 block lg:hidden'>
                      <hr className='border-black-white-200' />
                    </div>
                  )}

                  {index === 9 && (
                    <div className='col-span-5 hidden lg:block'>
                      <hr className='border-black-white-200' />
                    </div>
                  )}

                  {index === 11 && (
                    <div className='col-span-3 block lg:hidden'>
                      <hr className='border-black-white-200' />
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className='global-margin pb-2 text-black-white-200 p-base'>
          <p className='pb-8'>
            Welkom bij CircuLaw. Deze website is volop in ontwikkeling. In deze versie testen we de
            techniek, opzet en inhoud van de site. Het is mogelijk dat de inhoud van de site
            incompleet is of fouten bevat. Dat betekent dan ook dat aan de inhoud van deze site geen
            rechten kunnen worden ontleend. We horen graag wat je ervan vindt, wat je anders zou
            willen, wat je mist en natuurlijk horen we ook graag waar je blij van wordt.{' '}
            <Link href='/contact'>
              <span className='underline'>Stuur je feedback op deze testversie.</span>
            </Link>
          </p>
          <hr className='border-black-white-200 ' />
          <div className='text-center py-2'>
            <span className='text-black-white-100 p-sm'>
              Legal data & content managed with support from
            </span>
            <a target='_blank' href='https://www.sanity.io/' rel='noopener noreferrer'>
              <Image className='inline mx-2 my-2' src={sanityLogo} alt='Sanity logo' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
