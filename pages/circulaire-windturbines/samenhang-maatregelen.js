import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import TimberImage from '../../public/Windmill_Process_Web.png';
import TimberImageMob from '../../public/Windmill_Process_Mob.png';

export default function InfoPage() {
  return (
    <Layout>
      {/* TODO: this page and Houtbouw samenhang page are very similar and basic layout should be combined */} 
      <div className='global-margin my-20'>
        <div className='breadcrumb text-greenLink pb-8'>
          <Link href='/'>
            <a>Home &gt; </a>
          </Link>
          <Link href='/circulaire-windturbines'>
            <a>Circulaire windturbines &gt; </a>
          </Link>
        </div>
        <h1 className='mobile sm:main text-green1 pb-2 max-w-3xl mx-auto'>
          Samenhang maatregelen circulaire windturbines
        </h1>
      </div>
      <div className='hidden sm:block image-margin'>
        <Image src={TimberImage} layout='responsive' alt='Picture of the case' />
      </div>
      <div className='block sm:hidden'>
        <Image src={TimberImageMob} layout='responsive' alt='Picture of the case' />
      </div>
      <div className='global-margin mb-20'>
        <div className='max-w-3xl mx-auto'>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Beleid rondom circulaire windturbines kan worden opgenomen in omgevingsvisies. Door dit
            te verankeren kunnen subsidies worden vastgesteld. Daarnaast kunnen overheden proberen
            meer grond te kopen om uit te geven met circulaire eisen. Ook kunnen met het
            omgevingsplan of een projectbesluit vergunningen worden verleend voor circulaire
            windturbines. Afspraken over de kosten van circulaire windturbines kunnen voor het
            omgevingsplan worden vastgelegd in een anterieure overeenkomst.
          </p>
        </div>
      </div>
    </Layout>
  );
}
