import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function Kunststoffen() {
  return (
    <Layout>
      <div className="mx-20">
        <h1 className="py-14 mobile sm:main">Hoe CircuLaw werkt</h1>
        <h2 className="mobile sm:main">Waarom CircuLaw?</h2>
        <div className="body-text">
          De klimaatcrisis is een van de grootste bedreigingen van onze tijd. Om
          (verdere) opwarming van de aarde tegen te gaan, is drastische actie
          nodig. In 2050 wil Nederland volledig circulair zijn. Juridische
          instrumenten zijn onmisbaar om deze transitie waar te maken. Maar wet-
          en regelgeving is complexe materie. Het kost beleidsmakers veel tijd
          en energie om uit te vinden welke fiscaal-juridische instrumenten ze
          kunnen inzetten en hoe ze deze vervolgens kunnen gebruiken.
        </div>
        <div className="py-9 body-text">
          CircuLaw laat beleidsmakers zien welke mogelijkheden in bestaande wet-
          en regelgeving aanwezig zijn om de circulaire transitie te versnellen
        </div>

        <h2 className="mobile sm:main">
          Wetgeving geanalyseerd en geïnventariseerd door juridische experts
        </h2>

        <div className="py-8">
          <ul className="pl-6 body-text list-disc">
            <li>
              Samen met verschillende Nederlandse rechtenuniversiteiten
              ontwikkelde CircuLaw een protocol dat wetten analyseert vanuit
              circulaire transitiedoelen v
            </li>
            <li>
              Juridische experts voeren hiermee wetsanalyses uit op basis van
              circulaire thema’s en productgroepen zoals ‘Houtbouw’ of
              ‘Circulaire windturbines’
            </li>
            <li>
              De maatregelen die hieruit voortkomen maken zij met een
              multidisciplinair team leesbaar voor beleidsmakers, zodat zij die
              makkelijk kunnen toepassen.
            </li>
          </ul>
        </div>
        <h2 className="mobile sm:main">Verken de maatregelen</h2>

        <div className="body-text">
          In CircuLaw vind je dus maatregelen die beleidsmakers helpen de
          circulaire transitie te versnellen. Dat kunnen nieuwe maatregelen
          zijn, maar ook bestaande maatregelen die nog niet, of weinig worden
          toegepast. Met zoeken en filteren kun je in CircuLaw waar je mee aan
          de slag wilt in jouw gemeente of provincie. Op dit moment vind je
          maatregelen met kansen om ‘Houtbouw’ en ‘Circulaire windturbines’ te
          bevorderen. In de toekomst volgen meer thema’s.
        </div>

        <h2 className="pt-8 mobile sm:main">Verdiep je in de maatregelen</h2>

        <div className="py-9 body-text">
          Een maatregel is een juridisch instrument waarmee overheden een
          beleidsdoel kunnen vormgeven en behalen. Voorbeelden van maatregelen
          zijn subsidies, vergunningen of belastingen of.... Een maatregel in
          CircuLaw beschrijft kort:
          <ul className="pl-6 list-disc ">
            <li>Het onderwerp waarop de maatregel betrekking heeft</li>
            <li>
              Wat de maatregel inhoudt in zo begrijpelijk mogelijke juridische
              taal
            </li>

            <li>
              Hoe de maatregel kansen biedt om circulariteit te bevorderen
            </li>

            <li>Eisen en beperkingen aan het inzetten van de maatregel</li>

            <li>
              De juridische bron, een inschatting van de juridische houdbaarheid
              v en de mate van circulaire strategie (R-waarde v) achter de
              maatregel.
            </li>
          </ul>
        </div>

        <h2 className="mobile sm:main pb-4">
          Pas de maatregelen toe in nieuw, circulair beleid
        </h2>

        <div className="py-9 body-text">
          Vind je als beleidsmaker een maatregel in CircuLaw waarvan je je
          afvraagt of ‘ie interessant of relevant zou kunnen zijn voor jouw
          gemeente of provincie? Dan daagt CircuLaw je uit:
          <ul className="pl-6 list-disc">
            <li>Verken de maatregel</li>
            <li>
              Bespreek deze met juridische experts in je eigen organisatie
            </li>

            <li>Gebruik de maatregel in je eigen context</li>
          </ul>
        </div>

        <div className="py-9 p-4 bg-green3">
          <div className="body-text">Een voorbeeld:</div>

          <ul className="body-text">
            <li>
              Je vind in CircuLaw een maatregel ‘Houtbouw een plek geven in de
              omgevingsvisie’
            </li>
            <li>Je vraagt je af of jouw gemeente daar al iets mee doet.</li>

            <li>
              Je klopt aan bij……….…en bespreekt of en hoe je ‘Houtbouw’ in de
              omgevingsvisie kan opnemen en wat de impact is.
            </li>

            <li>Daarna onderneem je actie om het voor elkaar te krijgen.</li>
          </ul>
        </div>
        <h2 className="mobile sm:main py-9">Let op:</h2>

        <div className="italic body-text pb-10">
          De maatregelen kun je in de praktijk nit allemaal één-op-één overnemen
          of toepassen: sommige maatregelen zijn zelfs nog niet eerder toegepast
          en vragen om een innovative aanpak!
        </div>
      </div>
    </Layout>
  );
}
