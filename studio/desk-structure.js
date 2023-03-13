import { VscLaw } from 'react-icons/vsc';
import { GiDeadWood, GiBed, GiWindmill } from 'react-icons/gi';
import { GrNavigate } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';
import { MdSettingsSuggest } from 'react-icons/md';
import { FaLanguage, FaHandshake } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';

export const Structure = (S) =>
  S.list()
    .title('Content Types')
    .items([
      S.listItem()
        .title('Measures')
        .icon(VscLaw)
        .child(
          S.list()
            .title('Themas')
            .items([
              S.listItem()
                .title('Houtbouw')
                .icon(GiDeadWood)
                .child(
                  S.documentList()
                    .title('Houtbouw Measures')
                    .filter('_type == "measure" &&  thema == "houtbouw"'),
                ),
              S.listItem()
                .title('Circulaire windturbines')
                .icon(GiWindmill)
                .child(
                  S.documentList()
                    .title('Circulaire windturbines measures')
                    .filter('_type == "measure" &&  thema == "circulaire-windturbines"'),
                ),
              S.listItem()
                .title('Matrassen')
                .icon(GiBed)
                .child(
                  S.documentList()
                    .title('Matrassen measures')
                    .filter('_type == "measure" && thema == "matrassen"'),
                ),
            ]),
        ),
      S.listItem()
        .title("Thema's")
        .icon(BsCircle)
        .child(S.documentList().title("Thema's").filter('_type == "thema"')),
      S.listItem()
        .title('About Pages')
        .icon(FcAbout)
        .child(S.documentList().title('About Pages').filter('_type == "aboutPage"')),
      S.documentListItem().schemaType('englishPage').title('English Page').icon(FaLanguage),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .id('NavigationList')
        .icon(GrNavigate)
        .child(S.documentList().title('Navigation').filter('_type == "navigation"')),
      S.documentListItem()
        .schemaType('partners')
        .title('Partners')
        .id('PartnersList')
        .icon(FaHandshake),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(MdSettingsSuggest)
        .child(S.document().schemaType('siteConfig').documentId('siteSettings')),
    ]);
