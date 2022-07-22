import Link from "next/link";
import Image from "next/image";
import { ArrowNarrowDownIcon } from "@heroicons/react/solid";
import ActionPanel from "../components/section-action-panel";
import Layout from "/components/layout";
import SectionTypes from "/components/section-types-list";
import cycleScale from "../public/Circulaw_texture.svg";
import overTexture from "../public/Circulaw_texture2.svg";
import hammerIcon from "../public/hammer.svg";
import userIcon from "../public/person.svg";
import leafIcon from "../public/leaf.svg";

export default function Index() {
  return (
    <Layout>
      <div className="items-center bg-white">
        <div className="mx-20 pb-20">
          <div className="grid grid-cols-2 gap-1">
            <h1 className="text-green1 pb-6 pt-20 ">
              Regelgeving voor een circulaire economie
            </h1>
            <div className="texture-move invisible sm:visible">
              <Image src={cycleScale} alt="texture icon" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-5">
            <div className="bg-green1 p-8 max-w-sm">
              <div className="grid grid-cols-3 pb-4">
                <h3 className="text-white pt-2 pb-8 col-span-2">
                  Wegwijs in regelgeving
                </h3>
                <div className="pl-10">
                  <Image
                    src={hammerIcon}
                    alt="hammer icon"
                    className="h-2 w-2"
                  />
                </div>
              </div>
              <p className="card-body text-white">
                CircuLaw is voor circulaire beleidsmakers en transitiemanagers.
                CircuLaw biedt hulp bij het selecteren van de juiste
                instrumenten en geeft handvatten voor de toepassing in
                circulaire projecten en programma’s.
              </p>
            </div>
            <div className="bg-green1 p-8 max-w-sm">
              <div className="grid grid-cols-3 pb-4">
                <h3 className="text-white pt-2 pb-8 col-span-2">
                  Voor beleidsmedewerkers en transitiemanagers
                </h3>
                <div className="pl-10">
                  <Image src={userIcon} alt="person icon" className="h-2 w-2" />
                </div>
              </div>
              <p className="card-body text-white">
                CircuLaw maakt regelgeving toegankelijk en geeft inzicht in
                regelgevende instrumenten die de circulaire economie kunnen
                versnellen, en toont hoe instrumenten samenhangen.
              </p>
            </div>
            <div className="bg-green1 p-8 max-w-sm">
              <div className="grid grid-cols-3 pb-4">
                <h3 className="text-white pt-2 pb-8 col-span-2">
                  Versterken ketensamenwerking
                </h3>
                <div className="pl-10">
                  <Image src={leafIcon} alt="leaf icon" className="h-2 w-2" />
                </div>
              </div>
              <p className="card-body text-white">
                CircuLaw maakt voor een circulaire productgroep inzichtelijk
                welke instrumenten per overheidslaag beschikbaar zijn. Zo wordt
                helder wie wat moet doen, en kan ketensamenwerking worden
                opgezet.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="inline-flex rounded-full items-center px-4 py-2 border border-blush1 button text-blush1 bg-green1 hover:bg-greenLink focus:outline-none "
            >
              Waarom CircuLaw?
              <ArrowNarrowDownIcon
                className="ml-3 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="px-20 bg-greenAlpha pb-20">
        <h2 className="pb-6 pt-10">Thema’s</h2>

        <SectionTypes />
        <p className="body-text">
          In 2022 volgen meer thema’s binnen verschillende waardeketens. <br />
          Lees meer over de{" "}
          <span className="bold-text text-greenLink">
            status en ambitie van CircuLaw
          </span>{" "}
          of ga naar{" "}
          <span className="bold-text text-greenLink">Vraag & Antwoord</span>
        </p>
      </div>
      <div className="px-20 bg-white py-20 mr-10">
        <h1>Over CircuLaw</h1>
        <div className="texture-move2 invisible sm:visible">
          <Image src={overTexture} alt="texture icon" />
        </div>
        <div className="border-b border-grey1 pb-10">
          <h2 className="pt-10">Waarom CircuLaw?</h2>
          <p className="body py-5">
            Voor het tegengaan van klimaatverandering, het verminderen van
            vervuiling, het behoud van biodiversiteit en de beschikbaarheid van
            grondstoffen is een circulaire economie essentieel. In Nederland
            hebben we hierin nog een lange weg te gaan. De wet-en regelgeving
            die hierbij kan helpen is complex, ontoegankelijk, moeilijk
            vindbaar, onbekend. Gevolg: er worden oplossingen gezocht die vaak
            te vrijblijvend zijn. CircuLaw laat daarom zien waar en hoe
            regelgeving mogelijkheden biedt om circulaire doelen te halen en zo
            bij te dragen aan een versnelling van de circulaire transitie.
          </p>
          <span className="text-greenLink link">Meer lezen →</span>
        </div>
        <div className="border-b border-grey1 pb-10">
          <h2 className="pt-10">Hoever zijn we?</h2>
          <ul className="body py-5 list-disc">
            <li>
              Een overzicht van wet- en regelgeving voor beleidsmakers die aan
              de slag willen met maatregelen voor de thema’s{" "}
              <span className="bold-text text-greenLink">houtbouw</span> en{" "}
              <span className="bold-text text-greenLink">
                circulaire windmolens
              </span>
            </li>
            <li>Een leidraad voor 3 maatregelen die houtbouw stimuleren</li>
            <li>
              Goed inzicht in de samenhang tussen bevoegdheidsniveaus binnen
              regelgeving rond circulaire houtbouw en circulaire windmolens
            </li>
          </ul>
          <span className="text-greenLink link">
            Meer lezen over de volgende stappen →
          </span>
        </div>
        <div className="border-b border-grey1 pb-10">
          <h2 className="pt-10">Voor wie is CircuLaw?</h2>
          <p className="body py-5">
            CircuLaw is een service waarmee we in de eerste plaats beleidsmakers
            en transitiemanagers helpen meer en beter gebruik te maken van
            regelgeving om de circulaire economie te bevorderen. Maar CircuLaw
            is ambitieus. Door stap voor stap uit te breiden willen we
            uiteindelijk ook strategen, toezichthouders, juristen en circulaire
            ondernemers bedienen.
          </p>
          <span className="text-greenLink link">Meer lezen →</span>
        </div>
        <div className="pb-10">
          <h2 className="pt-10">Wie maken CircuLaw?</h2>
          <p className="body py-5">
            Gemeente Amsterdam, Dark Matter Laboratories, EIT Climate KIC, de
            Provincies Noord-Holland en Flevoland, Rijksdienst voor Ondernemend
            Nederland (RVO), het MRA (Metropoolregio Amsterdam) Kernteam
            Houtbouw, Belastingdienst, TU Delft, Erasmus School of LAW, de VU,
            Wageningen Universiteit ( WUR Law group), Stichting Koninklijk
            Nederlands Normalisatie Instituut (NEN).
          </p>
          <span className="text-greenLink link">
            Meer over de makers van CircuLaw→
          </span>
        </div>
      </div>
      <ActionPanel
        title="Doe met ons mee"
        paragraph="Heb je vragen, wil je je ervaringen delen of wil je een wetsanalyse laten uitvoeren op een circulair  thema of casus?"
        buttonText="Neem contact op"
        buttonLink="/"
      />
    </Layout>
  );
}
