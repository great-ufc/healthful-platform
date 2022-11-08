(function(){"use strict";var e={6471:function(e,n,t){var o=t(9242),r=t(3396);function i(e,n,t,o,i,a){const u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(u)}var a={name:"App",components:{}},u=t(89);const c=(0,u.Z)(a,[["render",i]]);var f=c,l=t(678);const s=(0,l.p7)({history:(0,l.PO)(),mode:"history",routes:[{name:"Home",path:"/",component:()=>Promise.all([t.e(65),t.e(452)]).then(t.bind(t,8452)),meta:{requiresAuth:!0}},{name:"ListLoops",path:"/loops",component:()=>Promise.all([t.e(65),t.e(302)]).then(t.bind(t,9302)),meta:{requiresAuth:!0}},{name:"AddLoop",path:"/loops/new",component:()=>Promise.all([t.e(65),t.e(557)]).then(t.bind(t,5557)),meta:{requiresAuth:!0}},{name:"EditLoop",path:"/loops/edit/:id",component:()=>Promise.all([t.e(65),t.e(854)]).then(t.bind(t,3854)),meta:{requiresAuth:!0}},{name:"Login",path:"/sign-in",component:()=>t.e(285).then(t.bind(t,7285))},{name:"Register",path:"/sign-up",component:()=>t.e(763).then(t.bind(t,1763))}]});s.beforeEach(((e,n,t)=>{if(e.matched.some((e=>e.meta.requiresAuth))){var o=localStorage.getItem("isLogged");null===o||"false"==o?t({name:"Login"}):t()}else t()}));var p=s,m=t(6780),d=(t(410),t(6070));const h={apiKey:"AIzaSyBmU35vDMmqfac0hJmndkOpzcC4Kp-idPo",authDomain:"qolmonitor.firebaseapp.com",projectId:"qolmonitor",storageBucket:"qolmonitor.appspot.com",messagingSenderId:"202065532022",appId:"1:202065532022:web:bb625912fa06264b563b57",measurementId:"G-6TS64QEDYE"};m.Z.initializeApp(h);let b="202065532022-8c628861eqi5evnee3vm6f1jga6t4a6k.apps.googleusercontent.com";const v=(0,o.ri)(f);v.use(d.ZP,{clientId:b}),v.use(p),v.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{65:"2492fe7d",285:"3ba3b3fa",302:"1c6907b9",452:"7bf843bf",557:"7eb3a291",763:"a2b7a5b1",854:"603459b9"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="healthful-platform:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var p=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/healthful-platform/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var l=c(t)}for(n&&n(o);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkhealthful_platform"]=self["webpackChunkhealthful_platform"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6471)}));o=t.O(o)})();
//# sourceMappingURL=app.bd9ee852.js.map