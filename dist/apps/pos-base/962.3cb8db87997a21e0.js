/*! For license information please see 962.3cb8db87997a21e0.js.LICENSE.txt */
(self.webpackChunkpos_base=self.webpackChunkpos_base||[]).push([[962],{8962:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=(e=>e.CapacitorPlatforms=(e=>{const t=new Map;t.set("web",{name:"web"});const n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t};return n.addPlatform=(e,t)=>{n.platforms.set(e,t)},n.setPlatform=e=>{n.platforms.has(e)&&(n.currentPlatform=n.platforms.get(e))},n})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:{}),i=r.addPlatform,o=r.setPlatform;var s;t.ExceptionCode=void 0,(s=t.ExceptionCode||(t.ExceptionCode={})).Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE";class a extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const l=(e=>e.Capacitor=(e=>{var n,r,i,o,s;const l=e.CapacitorCustomPlatform||null,c=e.Capacitor||{},d=c.Plugins=c.Plugins||{},u=e.CapacitorPlatforms,p=(null===(n=null==u?void 0:u.currentPlatform)||void 0===n?void 0:n.getPlatform)||(()=>null!==l?l.name:(e=>{var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(e)),m=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.isNativePlatform)||(()=>"web"!==p()),f=(null===(i=null==u?void 0:u.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(e=>{const t=w.get(e);return!!(null==t?void 0:t.platforms.has(p()))||!!g(e)}),g=(null===(o=null==u?void 0:u.currentPlatform)||void 0===o?void 0:o.getPluginHeader)||(e=>{var t;return null===(t=c.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))}),w=new Map,h=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.registerPlugin)||((e,n={})=>{const r=w.get(e);if(r)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),r.proxy;const i=p(),o=g(e);let s;const u=r=>{let d;const u=(...u)=>{const p=(async()=>(!s&&i in n?s=s="function"==typeof n[i]?await n[i]():n[i]:null!==l&&!s&&"web"in n&&(s=s="function"==typeof n.web?await n.web():n.web),s))().then((n=>{const s=((n,r)=>{var s,l;if(!o){if(n)return null===(l=n[r])||void 0===l?void 0:l.bind(n);throw new a(`"${e}" plugin is not implemented on ${i}`,t.ExceptionCode.Unimplemented)}{const t=null==o?void 0:o.methods.find((e=>r===e.name));if(t)return"promise"===t.rtype?t=>c.nativePromise(e,r.toString(),t):(t,n)=>c.nativeCallback(e,r.toString(),t,n);if(n)return null===(s=n[r])||void 0===s?void 0:s.bind(n)}})(n,r);if(s){const e=s(...u);return d=null==e?void 0:e.remove,e}throw new a(`"${e}.${r}()" is not implemented on ${i}`,t.ExceptionCode.Unimplemented)}));return"addListener"===r&&(p.remove=async()=>d()),p};return u.toString=()=>`${r.toString()}() { [capacitor code] }`,Object.defineProperty(u,"name",{value:r,writable:!1,configurable:!1}),u},m=u("addListener"),f=u("removeListener"),h=(e,t)=>{const n=m({eventName:e},t),r=async()=>{const r=await n;f({eventName:e,callbackId:r},t)},i=new Promise((e=>n.then((()=>e({remove:r})))));return i.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()},i},v=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return o?h:m;case"removeListener":return f;default:return u(t)}}});return d[e]=v,w.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(n),...o?[i]:[]])}),v});return c.convertFileSrc||(c.convertFileSrc=e=>e),c.getPlatform=p,c.handleError=t=>e.console.error(t),c.isNativePlatform=m,c.isPluginAvailable=f,c.pluginMethodNoop=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),c.registerPlugin=h,c.Exception=a,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:{}),c=l.registerPlugin,d=l.Plugins;class u{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const r=async()=>this.removeListener(e,t),i=Promise.resolve({remove:r});return Object.defineProperty(i,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()}}),i}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t){const n=this.listeners[e];n&&n.forEach((e=>e(t)))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new l.Exception(e,t.ExceptionCode.Unimplemented)}unavailable(e="not available"){return new l.Exception(e,t.ExceptionCode.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const p=c("WebView"),m=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),f=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class g extends u{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach((e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=f(n).trim(),r=f(r).trim(),t[n]=r})),t}async setCookie(e){try{const t=m(e.key),n=m(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),o=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${r}; path=${i}; ${o};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const w=c("CapacitorCookies",{web:()=>new g});class h extends u{async request(e){const t=((e,t={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},t),r=((e={})=>{const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((n,r,i)=>(n[r]=e[t[i]],n)),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)n.body=e.data;else if(r.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes("multipart/form-data")){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,n)=>{t.append(n,e)}));else for(const n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;const r=new Headers(n.headers);r.delete("content-type"),n.headers=r}else(r.includes("application/json")||"object"==typeof e.data)&&(n.body=JSON.stringify(e.data));return n})(e,e.webFetchExtra),n=((e,t=!0)=>e?Object.entries(e).reduce(((e,n)=>{const[r,i]=n;let o,s;return Array.isArray(i)?(s="",i.forEach((e=>{o=t?encodeURIComponent(e):e,s+=`${r}=${o}&`})),s.slice(0,-1)):(o=t?encodeURIComponent(i):i,s=`${r}=${o}`),`${e}&${s}`}),"").substr(1):null)(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),o=i.headers.get("content-type")||"";let s,a,{responseType:l="text"}=i.ok?e:{};switch(o.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":a=await i.blob(),s=await(async e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=()=>{const e=r.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)})))(a);break;case"json":s=await i.json();break;default:s=await i.text()}const c={};return i.headers.forEach(((e,t)=>{c[t]=e})),{data:s,headers:c,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const v=c("CapacitorHttp",{web:()=>new h});t.Capacitor=l,t.CapacitorCookies=w,t.CapacitorException=a,t.CapacitorHttp=v,t.CapacitorPlatforms=r,t.Plugins=d,t.WebPlugin=u,t.WebView=p,t.addPlatform=i,t.registerPlugin=c,t.registerWebPlugin=e=>((e,t)=>{var n;const r=t.config,i=e.Plugins;if(!r||!r.name)throw new Error('Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."');console.warn(`Capacitor plugin "${r.name}" is using the deprecated "registerWebPlugin()" function`),i[r.name]&&!(null===(n=null==r?void 0:r.platforms)||void 0===n?void 0:n.includes(e.getPlatform()))||(i[r.name]=t)})(l,e),t.setPlatform=o}}]);