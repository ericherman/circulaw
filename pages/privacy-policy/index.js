import Link from 'next/link';
import Layout from '../../components/layouts/layout';

export default function Privacy() {
  return (
    <Layout>
      <div className='global-margin my-20 max-w-2xl text-black-white-800'>
        <h1 className='mobile sm:desktop pb-6'>Privacyverklaring</h1>
        <p className=' p-lg pt-2 pb-6 max-w-4xl'>
          Het team CircuLaw is verantwoordelijk voor de verwerking van persoonsgegevens zoals
          weergegeven in deze verklaring. CircuLaw Bèta is een bètaversie van de website CircuLaw.
          CircuLaw valt onder het beheer van de gemeente Amsterdam.
        </p>
        <p className=' p-lg pb-10 max-w-4xl'>
          Contactgegevens projectteam CircuLaw:{' '}
          <span className='text-green-500  link-lg'>
            <a href='mailto:info@circulaw.nl'>info@circulaw.nl</a>
          </span>
        </p>
        <h2 className='mobile sm:desktop py-2'>Wanneer verwerken wij persoonsgegevens</h2>
        <p className=' p-lg pb-10 max-w-4xl'>
          Wanneer je je registreert of aanmeldt voor een van onze producten, diensten of
          activiteiten, voor een nieuwsbrief, of deelneemt aan een bijeenkomst, gebruik maakt van
          onze digitale diensten, contact opneemt met het team van CircuLaw of op een andere manier
          gebruik maakt van onze diensten, worden de persoonsgegevens die je hebt verstrekt,
          vastgelegd en verwerkt onder de verantwoordelijkheid van de gemeente Amsterdam. De
          gemeente verwerkt deze persoonsgegevens op basis van een gerechtvaardigd belang, artikel
          6, eerste lid, sub f, van de AVG.
        </p>
        <h2 className='mobile sm:desktop py-2'>Welke gegevens verwerken wij?</h2>
        <p className=' p-lg pb-10 max-w-4xl'>
          We verwerken jouw registratiegegevens. Dit zijn de gegevens waarnaar we je vragen bij
          registratie zoals je naam, e-mailadres, telefoonnummer, functie, naam werkgever/bedrijf en
          de vestigingsplaats van het bedrijf. Voor de verwerking van je gegevens maken wij géén
          gebruik van AI-technieken.
        </p>
        <h2 className='mobile sm:desktop py-2'>Met welk doel verwerken wij je persoonsgegevens?</h2>
        <div className=' p-lg pb-10 max-w-4xl'>
          <ul className='list-disc pl-6'>
            <li>We verwerken je persoonsgegevens om je te informeren over ons product</li>
            <li>om je nieuwsbrieven, onderzoeken en andere berichten te sturen</li>
            <li>
              om contact met je op te nemen om te vragen hoe wij de producten en diensten van
              CircuLaw kunnen verbeteren
            </li>
            <li>
              om het gebruik van de website te analyseren en daarmee te verbeteren, het product te
              verbeteren en af te stemmen op jouw voorkeuren
            </li>
            <li>om te voldoen aan een wettelijke verplichting.</li>
          </ul>
        </div>
        <h2 className='mobile sm:desktop py-2'>
          Wanneer verstrekken wij je persoonsgegevens aan derden?
        </h2>
        <p className=' p-lg pb-10 max-w-4xl'>Dit doen wij nooit.</p>
        <h2 className='mobile sm:desktop py-2'>
          Hoe zit het met links naar websites van derde partijen?
        </h2>
        <p className=' p-lg pb-10 max-w-4xl'>
          Als je via de website of andere diensten of producten van CircuLaw terecht komt op de
          website van een derde, zijn de voorwaarden en privacyregels van die betreffende derde van
          toepassing. CircuLaw controleert de activiteiten van dergelijke websites of derde partijen
          niet en is niet aansprakelijk voor de content, privacy, beveiliging en reglementen van de
          websites waar CircuLaw naar linkt. CircuLaw adviseert je daarom je bekend te maken met de
          privacy voorwaarden, beveiliging en reglementen van de derde partij voordat je hun
          (persoonlijke) informatie verschaft.
        </p>
        <h2 className='mobile sm:desktop py-2'>Wat zijn jouw rechten?</h2>
        <p className=' p-lg pb-6 max-w-4xl'>
          Je hebt het recht op inzage in je persoonsgegevens en het recht om correctie, verwijdering
          of overdracht van je persoonsgegevens te vragen. Daarnaast heb je het recht bezwaar te
          maken tegen het verwerken van je gegevens.
        </p>
        <p className=' p-lg pb-6 max-w-4xl'>
          CircuLaw biedt je de mogelijkheid om jouw gegevens in te zien, te laten wijzigen of te
          laten verwijderen. Je kunt dit doen door een email te sturen naar het projectteam. Als je
          geen marketing en promotieberichten over onze producten en diensten of algemene
          nieuwsberichten meer via e-mail wenst te ontvangen, kun je je hiervoor uitschrijven door
          de instructies te volgen die in elke e-mail hiervoor zijn opgenomen, dan wel door een
          bericht te sturen naar het projectteam van CircuLaw.
        </p>
        <p className=' p-lg pb-10 max-w-4xl'>
          Als je het niet eens zijn met de manier waarop CircuLaw omgaat met je persoonsgegevens dan
          kun je een klacht indienen bij de{' '}
          <span className='text-green-500 link-lg'>
            <a
              href='https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap'
              target='_blank'
              rel='noopener noreferrer'
            >
              Autoriteit Persoonsgegevens
            </a>
          </span>
          .
        </p>
        <h2 className='mobile sm:desktop py-2'>Hoe lang bewaren we je gegevens?</h2>
        <p className=' p-lg pb-10 max-w-4xl'>
          CircuLaw bewaart je persoonsgegevens zolang als dat nodig is voor de doelen die hierboven
          zijn genoemd of om te voldoen aan wettelijke (bewaar)verplichtingen.
        </p>
        <h2 className='mobile sm:desktop py-2'>Wijziging van deze Privacyverklaring</h2>
        <p className=' p-lg pb-6 max-w-4xl'>
          De gemeente Amsterdam heeft het recht om haar Privacyverklaring te wijzigen. Als er
          inhoudelijke wijzigingen worden doorgevoerd, maken we dit bekend via de website{' '}
          <span className='text-green-500 link-lg'>
            <a href='https://www.amsterdam.nl/' target='_blank' rel='noopener noreferrer'>
              amsterdam.nl
            </a>
          </span>
          .{' '}
        </p>
        <p className=' p-lg max-w-4xl pb-6'>
          Heb je vragen naar aanleiding van deze Privacyverklaring? Mail{' '}
          <span className='text-green-500 link-lg'>
            <a href='mailto:info@circulaw.nl'>info@circulaw.nl</a>
          </span>
        </p>
        <h2 className='mobile sm:desktop py-2'>Cookies</h2>
        <p className=' p-lg pb-6 max-w-4xl'>
          Bekijk ons{' '}
          <span className='text-green-500 link-lg'>
            <Link href='/cookie-info'>Cookiebeleid</Link>
          </span>
          .
        </p>
      </div>
    </Layout>
  );
}
