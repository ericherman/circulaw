import { FcAbout } from 'react-icons/fc';

export default {
  title: 'About Pages',
  name: 'aboutPage',
  type: 'document',
  icon: FcAbout,
  fields: [
    {
      title: 'Titel',
      name: 'pageTitle',
      type: 'string',
      description:
        'Voer de titel in. De titel komt terug in de slug (het deel van de URL na de domeinnaam - zichtbaar in de navigatie en footer)',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description:
        'Klik op ‘aanmaken’ (Slug is het het deel van de URL na de domeinnaam - zichtbaar in de navigatie en footer).',
      options: {
        source: 'pageTitle',
        inUnique: 'true',
        slugify: (input) => input.replace(/\s+/g, '-').replace('?', '').slice(0, 200),
      },
    },
    {
      title: 'Copy',
      name: 'aboutPageContent',
      type: 'array',
      description:
        'Voer hier de tekst in (maak gebruik van voorgestelde subkoppen, alinea-indeling,  enz.).',
      of: [
        {
          type: 'greenBox',
        },
        {
          type: 'imageBlock',
        },
        {
          type: 'pdfBlock',
        },
        {
          type: 'smallPara',
        },
        {
          type: 'block',
          of: [
            {
              type: 'dropDown',
            },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          styles: [
            { title: 'H2', value: 'h2' },
            { title: 'firstH2', value: 'firstH2' },
            { title: 'H3', value: 'h3' },
            { title: 'normal', value: 'normal' },
          ],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: 'Open in new winder',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
