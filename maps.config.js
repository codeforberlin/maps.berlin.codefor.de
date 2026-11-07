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
    minZoom: 9,
    maxZoom: 19,
  },
  external: [
    {
      name: 'luftbilder.berlin.codefor.de',
      url: 'https://luftbilder.berlin.codefor.de/',
    },
    ...defaults.external,
  ],
  maps,
}
