import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from 'next/image'
import placeholder from "../../public/placeholder.png"


import Layout from "../../components/layout";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

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
			  .true {
					background-color: #565D61;
				  }
			  .flase {
				  background-color: #C2D1D9;
				  }
			`}</style>
      <div className='mt-14 p-8'>
        <div className='block w-full'>
          <Link href='/laws' className='mt-24 mb-2 w-full font-normal '>
            <a>← Overzicht maatregelen</a>
          </Link>

          <h1 className='font-bold text-2xl mb-9'>{data.lawTitel}</h1>
        </div>

        <div className='flex'>
          <div className='w-2/3 p-6'>
            <h3 className='font-bold pb-2'>
              Circulaire maatregel/ mogelijkheid
            </h3>
            <p className='border-solid border p-3'>
              {data.InhoudCirculaireMaatregel}
            </p>
            <h3 className='font-bold pt-6 pb-1'>
              Waarom zit deze mogelijkheid in de wettelijke bepaling?
            </h3>
            <p className='border-solid'>{data.Toelichting}</p>

            <table className='table-fixed w-full mt-5'>
              <tbody>
                <tr className='py-3 border-b-2 border-t-2'>
                  <td className='w-1/2'>Rechtsgebied</td>
                  <td className='w-1/2'>{data.Rechtsgebied}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Wettelijk document</td>
                  <td className='w-1/2'>{data.officieleTitel}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Artikel</td>
                  <td className='w-1/2'>{data.Artikel}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Ingang wet</td>
                  <td className='w-1/2'>{data.IngangWet}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Bevoegdheids niveau</td>
                  <td className='w-1/2'>{data.Bevoegdheidsniveau}</td>
                </tr>
                <tr className='py-3 border-b-2'>
                  <td className='w-1/2'>Type document</td>
                  <td className='w-1/2'>{data.TypeDocument}</td>
                </tr>

                <tr className='border-b-2'>
                  <td>Relatie</td>
                  <td>{data.Relatie}</td>
                </tr>
                <tr>
                  <td>Beleidsinstrument</td>
                  <td>{data.BeleidsInstrumentType}</td>
                </tr>
              </tbody>
            </table>
            <h3 className='mt-5 text-lg font-extrabold'>
              Voorbeelden uit de praktijk waar de maatregelen succesvol zijn
              toegepast
            </h3>
            <div>
				
              <Image alt="document preview" src={placeholder} width={222} height={156} />

              <div>Voorbeeld 1 </div>
              <p>{data.Opmerkingen}</p>
 
            </div>
          </div>
          <div className='w-1/3'>
            <div className='py-5'>
              <div className='font-bold	'>Juridische reikwijdte</div>
			  
			   <div className="square ${data === true ? 'true' : 'false'}`"></div>
			   <div className="square ${data === true ? 'true' : 'false'}`"></div>
			   <div className="square ${data === true ? 'true' : 'false'}`"></div>
			  <div>{data.Reikwijdte}</div>
			  
			  
			  
			
            </div>

            <div className='py-5'>
              <div className='font-bold	'>Juridisch afbreukrisico</div>
			  <div className="square ${data === true ? 'true' : 'false'}`"></div>
				 <div className="square ${data === true ? 'true' : 'false'}`"></div>
				 <div className="square ${data === true ? 'true' : 'false'}`"></div>
			  <div>{data.Afbreukrisico}</div>
            </div>

            <div className='py-5'>
              <div className='font-bold	'>Trefwoorden</div>
              ...
            </div>

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

export  function Rating(data) {
	console.log(data);
return(<>
		

	</>)
}

export  function RatingIndicator(data) {
	console.log("SQR" + data);
	return(<>
		

		</>)
	}
	
	
	


	
	
	
	
	
	
