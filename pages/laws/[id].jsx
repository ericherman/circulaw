import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../public/placeholder.png";
import { StarIcon } from "@heroicons/react/solid";
import Tooltip from "../../components/tooltip";

import Layout from "../../components/layout";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Law() {
  const { query } = useRouter();

  const { data, error } = useSWR(
    () => query.id && `/api/laws/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message} </div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <style jsx>{`
        .square {
          display: inline-block;
          margin-right: 1rem;
          width: 25px;
          height: 25px;
        }
        .score-true {
          background-color: #565d61;
        }
        .score-false {
          background-color: #c2d1d9;
        }
      `}</style>
      <div className='mt-14 p-8'>
        <div className='block p-6 w-full'>
          <Link href='/laws' className='mt-24 mb-2 w-full font-normal '>
            <a>← Overzicht maatregelen</a>
          </Link>

          <h1 className='font-bold text-2xl mb-9'>{data.titel}</h1>
          <div>
            <div className='inline-block pr-4'>
              Fase:
              <span className='font-bold inline-block'>{data.fasen}</span>
            </div>
            <div className='inline-block pr-4'>
              R ladder:
              <span className='font-bold inline-block'>{data.r_ladder}</span>
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='w-2/3 p-6'>
            <div className='py-4'>
              <h3 className='font-bold pb-2'>
                Samenvatting juridische maatregel
              </h3>
              <p className=''>{data.samenvatting}</p>
            </div>
            <div className='py-4'>
              <h3 className='font-bold pb-2'>
                Voorbeelden van circulaire handelingsperspectieven
              </h3>
              <p className=' px-4 py-4 bg-blue-100'>{data.voorbeelden}</p>
            </div>
            <div className='py-4'>
              <h3 className='font-bold pb-2'>
                Eisen/beperkingen van de juridische maatregel
              </h3>
              <p className=''>{data.eisen_beperkingen}</p>
            </div>
            <div className='py-4'>
              <h3 className='font-bold pb-2'>Juridische toelichting</h3>
              <p className=''>{data.juridische_toelichting}</p>
            </div>
            <table className='table-fixed w-full mt-5'>
              <tbody>
                <tr className='my-10 border-b-2 border-t-2'>
                  <td className='w-1/2'>Rechtsgebied</td>
                  <td className='w-1/2'>{data.rechtsgebied}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Wettelijk document</td>
                  <td className='w-1/2'>
                    {data.officiele_titel_wettelijk_document}
                  </td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Artikel</td>
                  <td className='w-1/2'>{data.artikel}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Ingang wet</td>
                  <td className='w-1/2'>{data.ingang_van_wet}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Bevoegdheids niveau</td>
                  <td className='w-1/2'>{data.beleids_instrument_type}</td>
                </tr>
                <tr className='my-10 border-b-2'>
                  <td className='w-1/2'>Type document</td>
                  <td className='w-1/2'>{data.type_document}</td>
                </tr>

                <tr className='border-b-2'>
                  <td>Relatie</td>
                  <td>{data.relatie}</td>
                </tr>
                <tr>
                  <td>Beleidsinstrument</td>
                  <td>{data.beleids_instrument_type}</td>
                </tr>
              </tbody>
            </table>
            <div
              className={classNames(
                data.opmerkingen_type_norm_valt_hier_ook_onder === ""
                  ? "hidden"
                  : ""
              )}
            >
              <h3 className='my-5 text-lg font-extrabold'>
                Voorbeelden uit de praktijk waar de maatregelen succesvol zijn
                toegepast
              </h3>
              {/* <LinkPreviewer
                data={
                  data.OpmerkingenLink === "" ? "null" : data.OpmerkingenLink
                }
              /> */}

              <div>
                {" "}
                <Link href={data.opmerkingen_type_norm_valt_hier_ook_onder}>
                  <a>Voorbeeld 1</a>
                </Link>
                <br />
                <Link href={data.opmerkingen_type_norm_valt_hier_ook_onder}>
                  <a className='underline text-blue-500'>Link ↗</a>
                </Link>
              </div>

              <p>{data.Opmerkingen}</p>
            </div>
          </div>
          <div className='w-1/3 '>
            <div className='py-5'>
              <div className='relative flex justify-between'>
                <div className='font-bold	'>Invloed</div>
                <Tooltip data='' />
              </div>

              <div className='mt-3 flex items-center'>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.ranking_invloed > rating
                        ? "score-true"
                        : "score-false",
                      "mr-5 h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden='true'
                  />
                ))}
              </div>

              <div className='mt-3'>{data.ranking_invloed}</div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between'>
                <div className='font-bold	'>Juridisch afbreukrisico</div>
                <Tooltip data={data.JuridischAfbreukrisicoToolTip} />
              </div>
              <div className='mt-3 flex items-center'>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      data.ranking_afbreukrisico > rating
                        ? "score-true"
                        : "score-false",
                      "mr-5 h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden='true'
                  />
                ))}
              </div>
              <div className='mt-3'>{data.ranking_afbreukrisico}</div>
            </div>

            {/* <div className='py-5'>
              <div className='font-bold	'>Trefwoorden</div>
              ...
            </div> */}

            <div className='py-5'>
              <div className='font-bold	'>Relevante organisaties</div>
              ...
            </div>
            <div className='py-5'>
              <div className='font-bold	'>Relevante documenten</div>
              ...
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Rating(data) {
  {
    /* TODO: @Will make the ratings system a component which supports diff values (3,5,10) + shapes */
  }
  return <>Future Rating Systems</>;
}
