/*! For license information please see 624.253c7b7fcab86b4c.js.LICENSE.txt */
(self.webpackChunkpos_base=self.webpackChunkpos_base||[]).push([[624,997],{452:(e,t,n)=>{var r=n(9619),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,s=r.useEffect,a=r.useLayoutEffect,c=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,l=r[1];return a((function(){u.value=n,u.getSnapshot=t,i(u)&&l({inst:u})}),[e,n,t]),s((function(){return i(u)&&l({inst:u}),e((function(){i(u)&&l({inst:u})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},402:(e,t,n)=>{var r=n(9619),u=n(3100),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=u.useSyncExternalStore,a=r.useRef,c=r.useEffect,i=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=i((function(){function e(e){if(!c){if(c=!0,s=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return a=t}return a=e}if(t=a,o(s,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(s=e,a=n)}var s,a,c=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,u]);var v=s(e,f[0],f[1]);return c((function(){d.hasValue=!0,d.value=v}),[v]),l(v),v}},3100:(e,t,n)=>{e.exports=n(452)},1110:(e,t,n)=>{e.exports=n(402)},624:(e,t,n)=>{n.r(t),n.d(t,{create:()=>l,createStore:()=>u,default:()=>f,useStore:()=>c});const r=e=>{let t;const n=new Set,r=(e,r)=>{const u="function"==typeof e?e(t):e;if(!Object.is(u,t)){const e=t;t=(null!=r?r:"object"!=typeof u)?u:Object.assign({},t,u),n.forEach((n=>n(t,e)))}},u=()=>t,o={setState:r,getState:u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,u,o),o},u=e=>e?r(e):r;var o=n(9619),s=n(1110);const{useSyncExternalStoreWithSelector:a}=s;function c(e,t=e.getState,n){const r=a(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,o.useDebugValue)(r),r}const i=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"==typeof e?u(e):e,n=(e,n)=>c(t,e,n);return Object.assign(n,t),n},l=e=>e?i(e):i;var f=e=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),l(e))}}]);