/*! For license information please see 865.41705ba879acd8c4.js.LICENSE.txt */
"use strict";(self.webpackChunkionic_default=self.webpackChunkionic_default||[]).push([[865],{9865:(e,t,n)=>{n.r(t),n.d(t,{startInputShims:()=>h});var o=n(5476),r=n(1507);const i=new WeakMap,a=(e,t,n,o=0,r=!1)=>{i.has(e)!==n&&(n?d(e,t,o,r):l(e,t))},s=e=>e===e.getRootNode().activeElement,d=(e,t,n,o=!1)=>{const r=t.parentNode,a=t.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),r.appendChild(a),i.set(e,a);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c="input, textarea, [no-blur], [contenteditable]",u=(e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,d=.75*Math.min(t.bottom,o-n)-i,l=s-r,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,r-a),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(r-s)}},m=async(e,t,n,i,s,d=!1)=>{if(!n&&!i)return;const l=((e,t,n)=>{var o;const r=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return u(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||i,s);if(n&&Math.abs(l.scrollAmount)<4)t.focus();else if(a(e,t,!0,l.inputSafeY,d),t.focus(),(0,r.r)((()=>e.click())),"undefined"!=typeof window){let r;const i=async()=>{void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),n&&await(0,o.c)(n,0,l.scrollAmount,l.scrollDuration),a(e,t,!1,l.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await(0,o.g)(n),a=e.scrollHeight-e.clientHeight;if(l.scrollAmount>a-e.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}},f=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},p="$ionPaddingTimer",v=(e,t)=>{var n,r;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName))return;const i=(0,o.a)(e);if(null===i)return;const a=i[p];a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i[p]=setTimeout((()=>{i.style.setProperty("--keyboard-offset","0px")}),120)},h=(e,t)=>{const n=document,i="ios"===t,d="android"===t,l=e.getNumber("keyboardHeight",290),u=e.getBoolean("scrollAssist",!0),p=e.getBoolean("hideCaretOnScroll",i),h=e.getBoolean("inputBlurring",i),w=e.getBoolean("scrollPadding",!0),y=Array.from(n.querySelectorAll("ion-input, ion-textarea")),E=new WeakMap,g=new WeakMap,b=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),i=(0,o.a)(e),c=i?null:e.closest("ion-footer");if(!n)return;if(i&&p&&!E.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&a(e,t,n)},i=()=>a(e,t,!1),d=()=>o(!0),l=()=>o(!1);return(0,r.a)(n,"ionScrollStart",d),(0,r.a)(n,"ionScrollEnd",l),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",d),(0,r.b)(n,"ionScrollEnd",l),t.removeEventListener("blur",i)}})(e,n,i);E.set(e,t)}if(!("date"===n.type||"datetime-local"===n.type)&&(i||c)&&u&&!g.has(e)){const t=((e,t,n,o,i,a=!1)=>{let d;const l=e=>{d=(0,r.p)(e)},c=l=>{if(!d)return;const c=(0,r.p)(l);f(6,d,c)||s(t)||m(e,t,n,o,i,a)};return e.addEventListener("touchstart",l,{capture:!0,passive:!0}),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",c,!0)}})(e,n,i,c,l,d);g.set(e,t)}};h&&(()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},a=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(c))return;const i=o.target;i!==r&&(i.matches(c)||i.closest(c)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1)})(),w&&(e=>{const t=document,n=t=>{v(t.target,e)},o=e=>{v(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)})(l);for(const o of y)b(o);n.addEventListener("ionInputDidLoad",(e=>{b(e.detail)})),n.addEventListener("ionInputDidUnload",(e=>{(e=>{if(p){const t=E.get(e);t&&t(),E.delete(e)}if(u){const t=g.get(e);t&&t(),g.delete(e)}})(e.detail)}))}}}]);