import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import IcontWood from '../../public/icons/houtbouwIconBg.svg';
import Tooltip from '../../components/tooltip';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Law() {
  return (
    <Layout>
      <div className='px-5 sm:px-20 pt-10 gradient-bg '>
        <div className='flex'>
          <div className='w-11/12 sm:w-2/3 p-6 pb-20'>
            <h1 className='my-9 text-green1 mobile sm:main'>Sloopmelding</h1>

            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>De sloopmelding: wat is het?</h2>
              <p className='newlineDisplay body-text-mobile sm:body-text'>
                Een initiatiefnemer van sloop moet een melding doen bij het Omgevingsloket om
                inzichtelijk te maken of er veilig wordt gesloopt en of er verantwoord wordt
                omgegaan met restmaterialen en afvalscheiding. Door de sloopmelding weten gemeenten
                waar en wanneer er wordt gesloopt. Ook moet een initiatiefnemer een schatting geven
                van de aard en hoeveelheid van de vrijkomende materialen bij de sloopwerkzaamheden
                en aangeven waar hij dat materiaal naar afvoert.
              </p>
            </div>
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>Hoe kan een sloopmelding houtbouw bevorderen?</h2>
              <p className='body-text-mobile sm:body-text'>
                Door een sloopmelding kunnen gemeenten in de gaten houden welke gebouwen er binnen
                de gemeente worden gesloopt en op welke manier dit gebeurt. Voor gemeentes wordt zo
                inzichtelijk welke materialen in het algemeen beschikbaar komen en in het bijzonder
                hoeveel hout er beschikbaar komt voor hergebruik in de bouw
              </p>
              <p className='py-5 body-text-mobile sm:body-text'>
                Het inzichtelijk maken van deze data bevordert twee circulaire aspecten:
                <ul className='list-disc pl-6'>
                  <li>
                    gemeenten kunnen vraag en aanbod van reststromen beter reguleren en op elkaar
                    afstemmen. Dit kan bijvoorbeeld gebeuren door een platform waar sloopmeldingen
                    worden verbonden aan initiatiefnemers van nog te ontwikkelen gebouwen. Daarnaast
                    ontwikkelen en bouwen gemeenten zelf ook veel en kunnen zijn de vrijgekomen
                    materialen zelf inkopen.{' '}
                  </li>
                  <li>
                    gemeenten kunnen zo digitaal en kwantitatief bijhouden in hoeverre hun
                    circulaire beleid aansluit bij materiaalstromen in de stad.
                  </li>
                </ul>
              </p>
            </div>
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>Uit de praktijk</h2>
              <p className='body-text-mobile sm:body-text'>
                De sloopmelding is onderdeel van de regelgeving van de Omgevingswet; omdat de
                Omgevingswet nog niet in werking is getreden is er nog geen praktijkvoorbeeld: ga
                ermee aan de slag, je bent de eerste!
              </p>
            </div>

            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>Verder lezen/andere bronnen</h2>
              <p className='newlineDisplay body-text-mobile sm:body-text'>
                <ul className='list-disc pl-6'>
                  <li>
                    Juridische informatie over sloopmeldingen:
                    <a
                      href='https://iplo.nl/regelgeving/regels-voor-activiteiten/sloopactiviteit/rijksregels-sloopactiviteit/informatieplicht-sloopactiviteit/'
                      className='text-greenLink'
                    >
                      Informatieplicht sloopactiviteit - Informatiepunt Leefomgeving (iplo.nl)
                    </a>
                  </li>
                  <li>
                    Informatie over circulair slopen:
                    <a href='https://www.allesovercirculairslopen.nl/' className='text-greenLink'>
                      Alles over circulair slopen | powered by VERAS
                    </a>
                  </li>
                  <li>
                    Een overzichtelijke artikel met een stappenplan om circulaire sloop binnen je
                    eigen gemeente mogelijk te maken:
                    <a
                      href='https://openresearch.amsterdam/nl/page/86336/circular-demolition'
                      className='text-greenLink'
                    >
                      Circular demolition - openresearch.amsterdam
                    </a>{' '}
                  </li>
                  <li>
                    Praktijkvoorbeelden van circulair slopen in het algemeen:
                    <a
                      href='https://circulairebouweconomie.nl/nieuws/praktijkvoorbeeld-succesvolle-circulaire-sloop-schoolgebouw-hattem/'
                      className='text-greenLink'
                    >
                      Praktijkvoorbeeld - Succesvolle circulaire sloop schoolgebouw Hattem |
                      Circulaire Bouweconomie
                    </a>
                  </li>
                </ul>
              </p>
            </div>
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>Beleid en andere instrumenten</h2>
              <p className='body-text-mobile sm:body-text'>
                Gemeenten kunnen strengere eisen stellen voor initiatiefnemers van sloop. Dit worden
                maatwerkvoorschriften genoemd. Met een maatwerkvoorschrift kan onder andere worden
                bepaald dat de initiatiefnemer na het slopen een opgave moet doen van de
                daadwerkelijke bij de sloop vrijgekomen materiaalstromen. Met een ander
                maatwerkvoorschrift kan van initiatiefnemers worden gevraagd om in extra fracties te
                slopen. Fracties zijn groepen materiaalstromen zoals betonvloeren, isolatiemateriaal
                en hout. Door het verplichten van sloop in meerdere fracties kunnen
                sloopwerkzaamheden tot kleinere productgroepen worden verwerkt waardoor deze
                materiaalstromen gemakkelijker kunnen worden doorverkocht aan afnemers.
              </p>
            </div>
            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>
                Gemeentelijke omgevingsvisie: eisen en beperkingen
              </h2>
              <p className='body-text-mobile sm:body-text'>
                <ul className='list-disc pl-6'>
                  <li>
                    De sloopmelding moet ten minste vier weken voor het begin van de
                    sloopwerkzaamheden worden ingediend. Dan hebben gemeenten genoeg tijd om de
                    sloopmelding te verwerken en inventariseren.
                  </li>
                </ul>
              </p>
            </div>

            <div className='py-4'>
              <h2 className='pb-2 mobile sm:main'>Juridische toelichting</h2>
              <table className='table-fixed w-full mt-5'>
                <tbody>
                  <tr className='my-10 border-b-2 border-t-2'>
                    <td className='w-1/2 font-manrope text-base font-normal'>Rechtsgebied</td>
                    <td className='w-1/2 font-manrope text-base font-bold'>
                      Publiekrecht - Omgevingsrecht
                    </td>
                  </tr>
                  <tr className='my-10 border-b-2'>
                    <td className='w-1/2 font-manrope text-base font-normal'>Citeertitel</td>
                    <td className='w-1/2 font-manrope text-base font-bold'>
                      Besluit bouwwerken leefomgeving
                    </td>
                  </tr>
                  <tr className='my-10 border-b-2'>
                    <td className='w-1/2 font-manrope text-base font-normal'>Artikel</td>
                    <td className='w-1/2 font-manrope text-base font-bold'>7.10</td>
                  </tr>
                  <tr className='my-10 border-b-2'>
                    <td className='w-1/2 font-manrope text-base font-normal'>Geldig vanaf</td>
                    <td className='w-1/2 font-manrope text-base font-bold'>
                      nog niet in werking getreden
                    </td>
                  </tr>
                  <tr className='my-10 border-b-2'>
                    <td className='w-1/2 font-manrope text-base font-normal'>Bevoegdheidsniveau</td>
                    <td className='w-1/2 font-manrope text-base font-bold'>Gemeentelijk</td>
                  </tr>
                  <tr className='my-10 border-b-2'>
                    <td className='w-1/2 font-manrope text-base font-normal'>Type document</td>
                    <td className='w-1/2 font-manrope text-base font-bold'>
                      Algemene Maatregel van Bestuur
                    </td>
                  </tr>
                  <tr>
                    <td className='font-manrope text-base font-normal'>Beleidsinstrument</td>
                    <td className='font-manrope text-base font-bold'>Facilitair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='hidden sm:block w-1/3'>
            <div className='container pb-2'>
              <div className='container-image'>
                <Image src={IcontWood} alt='Icon of a Wood Log' />
              </div>
              <div className=''>
                <Link href={'/houtbuow'}>
                  <a>
                    <span className='font-openSans font-bold pl-2 text-greenLink'>Houtbouw</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className='py-5 border-t-2 border-grey2 '>
              <p className='font-manrope font-semibold text-lg text-black1 pb-2'>R-ladder </p>
              <span className='block-inline font-semibold text-base text-gray-900'>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                  <Tooltip icon='false'>R5</Tooltip>
                </span>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>
                  <Tooltip icon='false'>R6</Tooltip>
                </span>
              </span>
            </div>

            <div className='py-5'>
              <div className='relative border-t-2 border-grey2 pt-4'>
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Subrechtsgebied
                </div>
              </div>

              <div className='font-manrope font-normal text-base'>
                <p>Omgevingsrecht</p>
              </div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Juridisch invloed
                </div>
              </div>

              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'>LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      3 > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Juridisch houdbaarheid
                </div>
              </div>
              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      4 > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
