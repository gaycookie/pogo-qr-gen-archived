if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let o={};const f=e=>i(e,c),d={module:{uri:c},exports:o,require:f};n[c]=Promise.all(r.map((e=>d[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pogo-qr-gen"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"3309a2859a563b78f3530c035608b9f3"},{url:"/android-chrome-512x512.png",revision:"dbb5c56132f0a36e49608ceb709162c4"},{url:"/apple-touch-icon.png",revision:"6cf59d8baf934d32265fdbbf15f5d219"},{url:"/css/app.f91ed6ce.css",revision:null},{url:"/css/chunk-vendors.6da4e358.css",revision:null},{url:"/favicon-16x16.png",revision:"444b0b588a618f19c2b0302ce082659e"},{url:"/favicon-32x32.png",revision:"4d954a8e31370c4de41b58d14197f53a"},{url:"/img/articuno.ec4b520d.png",revision:null},{url:"/index.html",revision:"69dfecfd66008275f9a65ddc56ccdef5"},{url:"/js/app.12a03ebc.js",revision:null},{url:"/js/chunk-vendors.57fbfd7e.js",revision:null},{url:"/manifest.json",revision:"5f7e297eb19a956b66ccfacce86c5a59"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"}],{})}));
//# sourceMappingURL=service-worker.js.map
