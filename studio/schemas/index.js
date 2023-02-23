import measure from './documents/measure';
import aboutPage from './documents/about-pages';
import navigation from './documents/navigation';
import siteConfig from './documents/site-config';
import partners from './documents/partners';

import greenBox from './objects/green-box';
import pdfBlock from './objects/pdf-block';
import imageBlock from './objects/image-object';
import hoverText from './objects/hover-text';
import smallPara from './objects/small-paragraph';
import link from './objects/link';
import navItem from './objects/nav-item';
import dropDown from './objects/drop-down';
import partner from './objects/partner';



export const schemaTypes = [
  // DOCUMENT TYPES
  measure,
  aboutPage,
  navigation,
  partners,

  // OBJECTS
  greenBox,
  pdfBlock,
  imageBlock,
  hoverText,
  smallPara,
  link,
  navItem,
  siteConfig,
  dropDown,
  partner,
];
