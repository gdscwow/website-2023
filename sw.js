if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Assets/BG/about.png",revision:"c175a37c2435b8e27898434177f5516b"},{url:"/Assets/BG/home.png",revision:"85921e284cffa8ffe45d8d697013dfbd"},{url:"/Assets/BG/team.png",revision:"a8e8d0986615c8e6b7b3d74966047bff"},{url:"/Assets/Fonts/GoogleSans-Medium.ttf",revision:"6e8db86fe091d16a432715917e040f29"},{url:"/Assets/Fonts/GoogleSans-Regular-v1.27.ttf",revision:"51134713ade7b1f137e06ce395d39d40"},{url:"/Assets/Fonts/GoogleSansDisplay-Medium-v1.27.ttf",revision:"d4373a4426bc10a849be7f89a843a007"},{url:"/Assets/Fonts/GoogleSansDisplay-Regular-v1.27.ttf",revision:"e4ea236b3ef749fa293905025b92365f"},{url:"/Assets/Images/4blue.svg",revision:"e6b560e889ece07bc875a1ec2bcebec1"},{url:"/Assets/Images/4orange.svg",revision:"b341e211c7406e2f666f5a7ea4e940ea"},{url:"/Assets/Images/Arrow.svg",revision:"8826df09398ab7d137b9ac3e0530998b"},{url:"/Assets/Images/Hero.svg",revision:"90fd1d5ccb28a4624eb1d72add44c2d5"},{url:"/Assets/Images/Logo.png",revision:"adf2d1235e69a4e383e3c3416b6b5d77"},{url:"/Assets/Images/Team/ER.jpg",revision:"75fff00171ef351d1d2428c4174950d3"},{url:"/Assets/Images/Team/content.jpg",revision:"3b0323abd98001810998985319217fce"},{url:"/Assets/Images/Team/design.jpg",revision:"23c95ffb7525c86e4ae1ada793cea2a7"},{url:"/Assets/Images/Team/management.jpg",revision:"c56d539c9c9b7e3008d6a0b90c3d79d3"},{url:"/Assets/Images/Team/mentor.jpg",revision:"0c769f6645d7a7822908b125a2dbafe5"},{url:"/Assets/Images/Team/pwgen-2.9.0-setup.exe",revision:"7c139212d532bab28df3b60fc88eddac"},{url:"/Assets/Images/Team/sponsor.jpg",revision:"e0bd236461b0d7bc600f9f2ee4716116"},{url:"/Assets/Images/Team/technology.jpg",revision:"b225c6a887e08e9c4a0ebe98361680dc"},{url:"/Assets/Images/circle.svg",revision:"e85796f6e0291a2c88a02b99beeb19d0"},{url:"/Assets/Images/heronoo.svg",revision:"9083470d6fe7da9fa30b252e414a1a86"},{url:"/Assets/Images/wow.svg",revision:"db8cad7ac98681637a6d6b2f758e7e1d"},{url:"/Data/regions.json",revision:"4d3099969e0dc0e8b6060338c0ddd106"},{url:"/Data/teams.json",revision:"a188a63edaae78af6ccb7fe635994968"},{url:"/_next/static/Zc1VovulIdEM41y3fDoSG/_buildManifest.js",revision:"b8ccfbab39eca58ef0993511c39a9064"},{url:"/_next/static/Zc1VovulIdEM41y3fDoSG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1bfc9850-00ea49458566704c.js",revision:"00ea49458566704c"},{url:"/_next/static/chunks/212-ce50e08b18fd39f8.js",revision:"ce50e08b18fd39f8"},{url:"/_next/static/chunks/675-cb3e4d935b320adb.js",revision:"cb3e4d935b320adb"},{url:"/_next/static/chunks/814c6784-f06d563cd5a7a46b.js",revision:"f06d563cd5a7a46b"},{url:"/_next/static/chunks/95b64a6e-b7f3102cd88ac259.js",revision:"b7f3102cd88ac259"},{url:"/_next/static/chunks/986-9f1c40dad04fdfca.js",revision:"9f1c40dad04fdfca"},{url:"/_next/static/chunks/d0447323-aa7f6e6cbffe94bc.js",revision:"aa7f6e6cbffe94bc"},{url:"/_next/static/chunks/d7eeaac4-76df9967b2c87e7f.js",revision:"76df9967b2c87e7f"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-1b72d890d0c56126.js",revision:"1b72d890d0c56126"},{url:"/_next/static/chunks/pages/404-88149f97222f277f.js",revision:"88149f97222f277f"},{url:"/_next/static/chunks/pages/_app-122454e439ade1ac.js",revision:"122454e439ade1ac"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-a83d51987265692a.js",revision:"a83d51987265692a"},{url:"/_next/static/chunks/pages/privacy-policy-e71aa770633f2a2a.js",revision:"e71aa770633f2a2a"},{url:"/_next/static/chunks/pages/regions-fa2a6cc328baa870.js",revision:"fa2a6cc328baa870"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/193f061f59ed11e6.css",revision:"193f061f59ed11e6"},{url:"/_next/static/css/475aeb58aa7d66d8.css",revision:"475aeb58aa7d66d8"},{url:"/_next/static/media/GoogleSans-Medium.49f278ee.ttf",revision:"49f278ee"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
