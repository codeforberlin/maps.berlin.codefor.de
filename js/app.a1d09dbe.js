(function(e){function t(t){for(var r,a,l=t[0],s=t[1],b=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,b||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"292e":function(e,t,n){},"420a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");n("d81d");function i(e,t,n,i,o,a){var l=Object(r["k"])("Nav"),s=Object(r["k"])("Map");return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["f"])(l,{brand:o.brand,maps:o.maps,map:o.map,onChangeMap:a.changeMap,onChangeCenter:a.changeCenter},null,8,["brand","maps","map","onChangeMap","onChangeCenter"]),Object(r["f"])(s,{map:o.map,center:o.center,zoom:o.zoom},null,8,["map","center","zoom"])],64)}var o=Object(r["q"])("data-v-41332e22");Object(r["i"])("data-v-41332e22");var a={class:"map",id:"map"};Object(r["h"])();var l=o((function(e,t,n,i,o,l){return Object(r["g"])(),Object(r["c"])("div",a)})),s=(n("a9e3"),n("6cc5"),n("e11e")),b=n.n(s),p={name:"Map",props:{map:Object,center:Array,zoom:Number},data:function(){return{leafletMap:null,leafletLayer:null}},methods:{setupLeafletMap:function(){this.leafletMap=b.a.map("map"),this.changeView(),this.changeMap()},changeMap:function(){this.leafletLayer&&this.leafletMap.removeLayer(this.leafletLayer),this.leafletLayer=b.a.tileLayer(this.map.url,this.map.options).addTo(this.leafletMap)},changeView:function(){this.leafletMap.setView(this.center,this.zoom)}},watch:{map:function(){this.changeMap()},center:function(){this.changeView()}},mounted:function(){this.setupLeafletMap()}};n("b685");p.render=l,p.__scopeId="data-v-41332e22";var d=p,f=(n("b0c0"),Object(r["q"])("data-v-0ca1c5b7"));Object(r["i"])("data-v-0ca1c5b7");var c={class:"nav-left"},u={class:"info"},m={class:"nav-right"};Object(r["h"])();var h=f((function(e,t,n,i,o,a){var l=Object(r["k"])("Info");return Object(r["g"])(),Object(r["c"])("nav",null,[Object(r["f"])("div",c,[Object(r["f"])("h1",null,[Object(r["f"])("a",{href:n.brand.href},Object(r["l"])(n.brand.text),9,["href"])]),Object(r["f"])("div",u,[Object(r["f"])("a",{href:"",onClick:t[1]||(t[1]=Object(r["p"])((function(){return a.toggleInfo&&a.toggleInfo.apply(a,arguments)}),["prevent"]))},[Object(r["f"])("img",{src:i.iconInfo,alt:"Information"},null,8,["src"])])])]),Object(r["f"])("div",m,[Object(r["f"])("form",{onSubmit:t[3]||(t[3]=Object(r["p"])((function(e){return a.searchLocation()}),["prevent"]))},[Object(r["o"])(Object(r["f"])("input",{type:"search",placeholder:"Search address","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.searchString=e})},null,512),[[r["n"],o.searchString]])],32),Object(r["o"])(Object(r["f"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.currentMapIndex=e}),onUpdate:t[5]||(t[5]=function(t){return e.changeMap(e.index)})},[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(n.maps,(function(e,t){return Object(r["g"])(),Object(r["c"])("option",{key:t,value:t},Object(r["l"])(e.name),9,["value"])})),128))],544),[[r["m"],o.currentMapIndex]])]),o.info?(Object(r["g"])(),Object(r["c"])(l,{key:0,map:n.map,onOnClose:a.toggleInfo},null,8,["map","onOnClose"])):Object(r["d"])("",!0)])})),g=(n("d3b7"),Object(r["q"])("data-v-3034abe0"));Object(r["i"])("data-v-3034abe0");var O={class:"modal"},j=Object(r["f"])("p",null,[Object(r["e"])(" maps.codefor.berlin ist ein Projekt des "),Object(r["f"])("a",{href:"https://codefor.de/berlin"},"OK Lab Berlins"),Object(r["e"])(". ")],-1),v=Object(r["f"])("p",null,[Object(r["e"])(" Den Source-Code gibt es auf "),Object(r["f"])("a",{href:"https://github.com/codeforberlin/maps.berlin.codefor.de"},"GitHub"),Object(r["e"])(". ")],-1),y=Object(r["e"])(" Die aktuelle Karte zeigt "),x=Object(r["e"])(". Hinter dem Link gibt es mehr Informationen. "),_=Object(r["f"])("p",null," Um die Karte in einem eigenen Projekt zu verwenden können folgende Metadaten genutzt werden: ",-1),D=Object(r["f"])("p",null," Für einen Produktionsbetrieb müsste die Karte aber selber gehosted werden. ",-1);Object(r["h"])();var Z=g((function(e,t,n,i,o,a){return Object(r["g"])(),Object(r["c"])("div",O,[Object(r["f"])("a",{href:"",class:"close",onClick:t[1]||(t[1]=Object(r["p"])((function(){return a.handleClose&&a.handleClose.apply(a,arguments)}),["prevent"]))},"×"),j,v,Object(r["f"])("p",null,[y,Object(r["f"])("span",{innerHTML:n.map.options.attribution},null,8,["innerHTML"]),x]),_,Object(r["f"])("pre",null,Object(r["l"])(n.map),1),D])})),E={name:"Info",props:{map:Object,onClose:Function},methods:{handleClose:function(){this.$emit("onClose")}}};n("ed70");E.render=Z,E.__scopeId="data-v-3034abe0";var B=E,k=n("d399"),G=n.n(k),z={name:"Nav",props:{brand:Object,maps:Array,map:Object},components:{Info:B},setup:function(){return{iconInfo:G.a}},data:function(){return{currentMapIndex:this.maps.indexOf(this.map),searchString:"",info:!1}},watch:{currentMapIndex:function(e){this.$emit("changeMap",e)}},methods:{searchLocation:function(){var e=this;if(this.searchString){var t="https://nominatim.openstreetmap.org/search?format=json&q=Berlin "+encodeURIComponent(this.searchString);fetch(t).then((function(e){return e.json()})).then((function(t){t.length>0&&e.$emit("changeCenter",[t[0].lat,t[0].lon])}))}},toggleInfo:function(){this.info=!this.info}}};n("5742");z.render=h,z.__scopeId="data-v-0ca1c5b7";var F=z,L={name:"App",data:function(){return{brand:this.$config.brand,maps:this.$config.maps,map:this.$config.maps[0],center:this.$config.view.center,zoom:this.$config.view.zoom}},components:{Map:d,Nav:F},methods:{changeMap:function(e){this.map=this.maps[e]},changeCenter:function(e){this.center=e}}};n("6620");L.render=i;var M=L,I=n("7dc5"),P=Object(r["b"])(M);P.config.globalProperties.$config=I,P.mount("#app")},5742:function(e,t,n){"use strict";n("7c8c")},6620:function(e,t,n){"use strict";n("420a")},"7c8c":function(e,t,n){},"7dc5":function(e){e.exports=JSON.parse('{"brand":{"text":"maps.berlin.codefor.de","href":"https:/maps.berlin.codefor.de"},"view":{"center":[52.51,13.37628],"zoom":15},"maps":[{"name":"Luftbilder 2022","url":"https://tiles.codefor.de/berlin-2022-dop20rgbi/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2022_true_rgbi@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2022 (DOP20RGBI)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2021","url":"https://tiles.codefor.de/berlin-2021-dop20rgbi/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2021_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2021 (DOP20RGBI)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2020","url":"https://tiles.codefor.de/berlin-2020-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2020_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2020 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2020 Infrarot","url":"https://tiles.codefor.de/berlin-2020-dop20cir/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service_intern.jsp?id=a_luftbild2020_cir@senstadt&type=FEED\\">Geoportal Berlin / Digitale Color-Infrarot-Orthophotos 2020 (DOP20CIR) - Sommerbefliegung</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2020 TrueDOP","url":"https://tiles.codefor.de/berlin-2020-truedop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2020_true_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige TrueOrthophotos 2020 (TrueDOP20RGB) - Sommerbefliegung</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2020 TrueDOP Infrarot","url":"https://tiles.codefor.de/berlin-2020-truedop20cir/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2020_true_cir@senstadt&type=FEED\\">Geoportal Berlin / Digitale Color-Infrarot-TrueOrthophotos 2020 (TrueDOP20CIR) - Sommerbefliegung</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2019","url":"https://tiles.codefor.de/berlin-2019-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2019_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2019 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2018","url":"https://tiles.codefor.de/berlin-2018-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2018_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2018 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2017","url":"https://tiles.codefor.de/berlin-2017-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2017_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2017 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2016","url":"https://tiles.codefor.de/berlin-2016-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2016_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2016 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2016 Infrarot","url":"https://tiles.codefor.de/berlin-2016dop20cir/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2016_cir@senstadt&type=FEED\\">Geoportal Berlin / Digitale Color-Infrarot-Orthophotos 2016 (DOP20CIR)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2015","url":"https://tiles.codefor.de/berlin-2015-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2015_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2015 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2015 Infrarot","url":"https://tiles.codefor.de/berlin-2015-dop20cir/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2015_cir@senstadt&type=FEED\\">Geoportal Berlin / Digitale Color-Infrarot-Orthophotos 2015 (DOP20CIR)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2014","url":"https://tiles.codefor.de/berlin-2014-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2014@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2014 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2010","url":"https://tiles.codefor.de/berlin-2010-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2010@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2010 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2007","url":"https://tiles.codefor.de/berlin-2007-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2007@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2007 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2006 Schwarz-Weiß","url":"https://tiles.codefor.de/berlin-2006-dop15pan/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2006@senstadt&type=FEED\\">Digitale Schwarz-Weiß-Orthophotos 2006 (DOP15PAN)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2004","url":"https://tiles.codefor.de/berlin-2004-dop25rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2004@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2004 (DOP25RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 1953","url":"https://tiles.codefor.de/berlin-1953/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service_intern.jsp?id=k_luftbild1953@senstadt&type=WMS\\">Geoportal Berlin / Luftbilder 1953, Maßstab 1:22 000</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 1928","url":"https://tiles.codefor.de/berlin-1928/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild1928@senstadt&type=FEED\\">Geoportal Berlin / Luftbilder 1928, Maßstab 1:4 000</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1650","url":"https://tiles.codefor.de/berlin-1650/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1650.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1650@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1650</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1690","url":"https://tiles.codefor.de/berlin-1690/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1690.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1690@senstadt&type=FEED\\"> Geoportal Berlin / Berlin um 1690</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1750","url":"https://tiles.codefor.de/berlin-1750/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1750.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1750@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1750</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1800","url":"https://tiles.codefor.de/berlin-1800/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1800.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1800@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1800</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1850","url":"https://tiles.codefor.de/berlin-1850/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1850.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1850@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1850</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1880","url":"https://tiles.codefor.de/berlin-1880/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1880.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1880@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1880</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1910","url":"https://tiles.codefor.de/berlin-1910/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1910.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1910@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1910</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1940","url":"https://tiles.codefor.de/berlin-1940/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1940.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1940@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1940</a>","minZoom":10,"maxZoom":20}},{"name":"Historische Karte 1986","url":"https://tiles.codefor.de/berlin-1986/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_berlin1986.gif","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_berlin1986@senstadt&type=FEED\\">Geoportal Berlin / Berlin um 1986</a>","minZoom":10,"maxZoom":20}},{"name":"Hobrechtplan 1862","url":"https://tiles.codefor.de/berlin-hobrecht/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_hobrecht.jpg","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_hobrecht@senstadt&type=FEED\\">Geoportal Berlin / Hobrechtplan 1862</a>","minZoom":10,"maxZoom":20}},{"name":"Gebäudeschäden 1945","url":"https://tiles.codefor.de/berlin-gebschaden/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_gebschaden.jpg","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_gebschaden@senstadt&type=FEED\\">Geoportal Berlin / Gebäudeschäden 1945</a>","minZoom":10,"maxZoom":20}},{"name":"Gebäudealter 1992/93","url":"https://tiles.codefor.de/berlin-gebaeudealter/{z}/{x}/{y}.png","legend":"https://tiles.codefor.de/meta/legenden/leg_gebaeudealter.jpg","options":{"attribution":"<a target=\\"blank\\" href=\\"http://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_gebaeudealter@senstadt&type=FEED\\">Geoportal Berlin / Gebäudealter 1992/93</a>","minZoom":10,"maxZoom":20}},{"name":"Straubeplan","url":"https://tiles.codefor.de/berlin-straubeplan/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_straubeplan@senstadt&type=FEED\\">Geoportal Berlin / Straubes Übersichtsplan von Berlin (Historische Mitte)</a>","minZoom":10,"maxZoom":20}},{"name":"Karte von Berlin 1:5000 (K5 - Farbausgabe)","url":"https://tiles.codefor.de/berlin-k5/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service_intern.jsp?id=a_k5_farbe@senstadt&type=FEED\\">Geoportal Berlin / Karte von Berlin 1:5000 (K5 - Farbausgabe)</a>","minZoom":10,"maxZoom":20}}]}')},b685:function(e,t,n){"use strict";n("292e")},c0e9:function(e,t,n){},d399:function(e,t,n){e.exports=n.p+"img/icon-info.32aa8313.svg"},ed70:function(e,t,n){"use strict";n("c0e9")}});
//# sourceMappingURL=app.a1d09dbe.js.map