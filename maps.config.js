import { defaults } from '@jochenklar/maps'

import infoDe from './info.de.html?raw'
import infoEn from './info.en.html?raw'
import maps from './maps.json'


export default {
  brand: {
    text: {
      de: 'Daten aus dem Geoportal Berlin',
      en: 'Data from the Geoportal Berlin',
    },
  },
  info: {
    de: infoDe,
    en: infoEn,
  },
  view: {
    center: [52.51, 13.37628],
    zoom: 14,
  },
  // the other site of the OK Lab Berlin, which opens with the current view
  external: [
    ...defaults.external,
    {
      name: 'luftbilder.berlin.codefor.de',
      url: 'https://luftbilder.berlin.codefor.de/',
    },
  ],
  maps,
}
