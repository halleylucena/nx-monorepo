import*as e from"https://pos-staging.vendus.pt/documents/remoteEntry.js";import*as t from"https://pos-staging.vendus.pt/products/remoteEntry.js";var r,a,n,o,i,u,f,s,l={6333:(e,t,r)=>{Promise.all([r.e(19),r.e(619),r.e(461),r.e(130),r.e(135),r.e(189),r.e(825)]).then(r.bind(r,6244))},3553:t=>{t.exports=e},2906:e=>{e.exports=t}},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return l[e].call(r.exports,r,r.exports,d),r.exports}d.m=l,d.c=c,d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var o={};r=r||[null,a({}),a([]),a(a)];for(var i=2&t&&e;"object"==typeof i&&!~r.indexOf(i);i=a(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,d.d(n,o),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{12:"b92b203871920911",19:"9e4aeb6e71fc185d",27:"85b4e280714e03fa",32:"708c31cf97eddb54",130:"2771dfa019d43455",135:"267f2e1bf5b5d5b0",142:"0263efcf27607fae",145:"a7aaf1b73f4a2705",181:"1bf7f3b2d64ce31b",189:"e81555691903c18d",223:"915c94ae80e32243",289:"5cff0241f117346f",316:"11ecb14472bec155",375:"2516d132d3da3469",449:"661ae7a099082029",461:"95c3afdfbc339b60",530:"d35e8bae912bc7f3",541:"c53752291ac4c7ca",609:"68fc83f6444663c7",619:"f88e516afccc890c",624:"253c7b7fcab86b4c",672:"1c7e51a57c329d62",784:"3015dacc901bf015",788:"e208cd888e225c63",825:"261dda4e28db8d1f",832:"17614f162032c8f7",833:"961d03ad668c1c89",865:"4051bcf282106405",929:"dd63d620e634eb32",941:"1be642869e2fa543",962:"3cb8db87997a21e0",977:"ae762bd1586f6dd9",997:"224e8d977e077309"}[e]+".js",d.miniCssF=e=>e+"."+{19:"33ec7548ff9b05cc",825:"53f0eba0dc3a1dce"}[e]+".css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="pos-base:",d.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,u;if(void 0!==r)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){i=l;break}}i||(u=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var c=(t,r)=>{i.onerror=i.onload=null,clearTimeout(h);var a=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},h=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),u&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i={142:[8142],449:[9449],788:[3788]},u={3788:["default","./DocumentDetail",3553],8142:["default","./Products",2906],9449:["default","./Documents",3553]},d.f.remotes=(e,t)=>{d.o(i,e)&&i[e].forEach((e=>{var r=d.R;r||(r=[]);var a=u[e];if(!(r.indexOf(a)>=0)){if(r.push(a),a.p)return t.push(a.p);var n=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+a[1]+'" from '+a[2]),d.m[e]=()=>{throw t},a.p=0},o=(e,r,o,i,u,f)=>{try{var s=e(r,o);if(!s||!s.then)return u(s,i,f);var l=s.then((e=>u(e,i)),n);if(!f)return l;t.push(a.p=l)}catch(e){n(e)}},i=(e,t,n)=>o(t.get,a[1],r,0,f,n),f=t=>{a.p=1,d.m[e]=e=>{e.exports=t()}};o(d,a[2],0,0,((e,t,r)=>e?o(d.I,a[0],0,e,i,r):n()),1)}}))},(()=>{d.S={};var e={},t={};d.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];d.o(d.S,r)||(d.S[r]={});var o=d.S[r],i="pos-base",u=(e,t,r,a)=>{var n=o[e]=o[e]||{},u=n[t];(!u||!u.loaded&&(!a!=!u.eager?a:i>u.from))&&(n[t]={get:r,from:i,eager:!!a})},f=e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(t));var t};try{var n=d(e);if(!n)return;var o=e=>e&&e.init&&e.init(d.S[r],a);if(n.then)return s.push(n.then(o,t));var i=o(n);if(i&&i.then)return s.push(i.catch(t))}catch(e){t(e)}},s=[];return"default"===r&&(u("@awesome-cordova-plugins/bluetooth-serial","6.3.0",(()=>d.e(32).then((()=>()=>d(9032))))),u("@capacitor/core","4.8.0",(()=>d.e(962).then((()=>()=>d(8962))))),u("@ionic/react-router","6.7.4",(()=>Promise.all([d.e(541),d.e(619),d.e(461),d.e(130)]).then((()=>()=>d(9541))))),u("@ionic/react","6.7.4",(()=>Promise.all([d.e(941),d.e(619),d.e(135),d.e(27)]).then((()=>()=>d(7941))))),u("@tanstack/react-query-devtools","4.29.12",(()=>d.e(223).then((()=>()=>d(2223))))),u("@tanstack/react-query","4.29.12",(()=>Promise.all([d.e(609),d.e(619)]).then((()=>()=>d(8609))))),u("@vendus/sockets-for-cordova","1.7.2",(()=>d.e(181).then((()=>()=>d(6181))))),u("ionicons/icons","7.1.1",(()=>d.e(12).then((()=>()=>d(5012))))),u("react-dom","18.2.0",(()=>Promise.all([d.e(316),d.e(619)]).then((()=>()=>d(8316))))),u("react-router-dom","5.3.4",(()=>Promise.all([d.e(833),d.e(619),d.e(461)]).then((()=>()=>d(2833))))),u("react-router","5.3.4",(()=>Promise.all([d.e(289),d.e(619)]).then((()=>()=>d(289))))),u("react","18.2.0",(()=>d.e(784).then((()=>()=>d(2784))))),u("zustand/middleware","4.3.8",(()=>d.e(832).then((()=>()=>d(7832))))),u("zustand","4.3.8",(()=>Promise.all([d.e(619),d.e(997)]).then((()=>()=>d(624))))),f(3553),f(2906)),s.length?e[r]=Promise.all(s).then((()=>e[r]=1)):e[r]=1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},t=e=>{var r=e[0],a="";if(1===e.length)return"*";if(r+.5){a+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,a+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return a}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():t(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},r=(t,a)=>{if(0 in t){a=e(a);var n=t[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,f=!0;;u++,i++){var s,l,c=u<t.length?(typeof t[u])[0]:"";if(i>=a.length||"o"==(l=(typeof(s=a[i]))[0]))return!f||("u"==c?u>n&&!o:""==c!=o);if("u"==l){if(!f||"u"!=c)return!1}else if(f)if(c==l)if(u<=n){if(s!=t[u])return!1}else{if(o?s>t[u]:s<t[u])return!1;s!=t[u]&&(f=!1)}else if("s"!=c&&"n"!=c){if(o||u<=n)return!1;f=!1,u--}else{if(u<=n||l<c!=o)return!1;f=!1}else"s"!=c&&"n"!=c&&(f=!1,u--)}}var d=[],h=d.pop.bind(d);for(i=1;i<t.length;i++){var p=t[i];d.push(1==p?h()|h():2==p?h()&h():p?r(p,a):!h())}return!!h()},a=(t,r)=>{var a=t[r];return Object.keys(a).reduce(((t,r)=>!t||!a[t].loaded&&((t,r)=>{t=e(t),r=e(r);for(var a=0;;){if(a>=t.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=t[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}})(t,r)?r:t),0)},n=(e,n,i,u)=>{var f=a(e,i);if(!r(u,f))throw new Error(((e,r,a,n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(e,i,f,u));return o(e[i][f])},o=e=>(e.loaded=1,e.get()),i=(e=>function(t,r,a,n){var o=d.I(t);return o&&o.then?o.then(e.bind(e,t,d.S[t],r,a,n)):e(t,d.S[t],r,a,n)})(((e,t,r,a,o)=>t&&d.o(t,r)?n(t,0,r,a):o())),u={},f={9619:()=>i("default","react",[4,18,2,0],(()=>d.e(784).then((()=>()=>d(2784))))),461:()=>i("default","react-router",[1,5,3,4],(()=>d.e(289).then((()=>()=>d(289))))),1521:()=>i("default","react-router-dom",[1,5,3,4],(()=>d.e(833).then((()=>()=>d(2833))))),1921:()=>i("default","@ionic/react",[1,6,2,0],(()=>Promise.all([d.e(941),d.e(135),d.e(672)]).then((()=>()=>d(7941))))),1135:()=>i("default","react-dom",[4,18,2,0],(()=>d.e(316).then((()=>()=>d(8316))))),1373:()=>i("default","@ionic/react-router",[1,6,2,0],(()=>d.e(541).then((()=>()=>d(9541))))),3315:()=>i("default","@vendus/sockets-for-cordova",[1,1,7,2],(()=>d.e(181).then((()=>()=>d(6181))))),3501:()=>i("default","@tanstack/react-query",[1,4,29,12],(()=>d.e(609).then((()=>()=>d(8609))))),5205:()=>i("default","zustand/middleware",[1,4,3,8],(()=>d.e(832).then((()=>()=>d(7832))))),6021:()=>i("default","ionicons/icons",[1,7,1,1],(()=>d.e(12).then((()=>()=>d(5012))))),6216:()=>i("default","zustand",[1,4,3,8],(()=>d.e(624).then((()=>()=>d(624))))),6669:()=>i("default","@awesome-cordova-plugins/bluetooth-serial",[1,6,3,0],(()=>d.e(32).then((()=>()=>d(9032))))),7786:()=>i("default","@capacitor/core",[4,4,8,0],(()=>d.e(962).then((()=>()=>d(8962))))),2124:()=>i("default","@tanstack/react-query-devtools",[1,4,29,12],(()=>d.e(223).then((()=>()=>d(2223)))))},s={130:[1521,1921],135:[1135],189:[1373,3315,3501,5205,6021,6216,6669,7786],461:[461],619:[9619],825:[2124]};d.f.consumes=(e,t)=>{d.o(s,e)&&s[e].forEach((e=>{if(d.o(u,e))return t.push(u[e]);var r=t=>{u[e]=0,d.m[e]=r=>{delete d.c[e],r.exports=t()}},a=t=>{delete u[e],d.m[e]=r=>{throw delete d.c[e],t}};try{var n=f[e]();n.then?t.push(u[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))}})(),f=e=>new Promise(((t,r)=>{var a=d.miniCssF(e),n=d.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===t)return i}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=u,n.parentNode.removeChild(n),a(f)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),s={179:0},d.f.miniCss=(e,t)=>{s[e]?t.push(s[e]):0!==s[e]&&{19:1,825:1}[e]&&t.push(s[e]=f(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))},(()=>{var e={179:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(1(30|35|42|9)|449|461|619|788)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=d.p+d.u(t),i=new Error;d.l(o,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,i,u]=r,f=0;if(o.some((t=>0!==e[t]))){for(a in i)d.o(i,a)&&(d.m[a]=i[a]);u&&u(d)}for(t&&t(r);f<o.length;f++)n=o[f],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkpos_base=self.webpackChunkpos_base||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d(6333);