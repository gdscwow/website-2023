(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3675)}])},3675:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893);t(4744);var o=t(7294),i=t(4865),s=t.n(i);t(435);var a=t(1163),u=t.n(a);function c(e){let{Component:n,pageProps:t}=e;return(0,o.useEffect)(()=>{{let e=document.getElementById("globalLoader");e&&(e.style.display="none")}},[]),(0,r.jsx)(n,{...t})}u().events.on("routeChangeStart",()=>{let e=document.getElementById("globalLoader");e&&(e.style.display="flex")}),u().events.on("routeChangeComplete",()=>{let e=document.getElementById("globalLoader");e&&(e.style.display="none")}),u().events.on("routeChangeError",()=>s().done())},4744:function(){},435:function(){},1163:function(e,n,t){e.exports=t(880)},4865:function(e,n,t){var r,o;void 0!==(r="function"==typeof(o=function(){var e,n,t,r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(e,n,t){return e<n?n:e>t?t:e}r.configure=function(e){var n,t;for(n in e)void 0!==(t=e[n])&&e.hasOwnProperty(n)&&(o[n]=t);return this},r.status=null,r.set=function(e){var n=r.isStarted();e=i(e,o.minimum,1),r.status=1===e?null:e;var t=r.render(!n),u=t.querySelector(o.barSelector),c=o.speed,l=o.easing;return t.offsetWidth,s(function(n){var i,s;""===o.positionUsing&&(o.positionUsing=r.getPositioningCSS()),a(u,(i=e,(s="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+i)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+i)*100+"%,0)"}:{"margin-left":(-1+i)*100+"%"}).transition="all "+c+"ms "+l,s)),1===e?(a(t,{transition:"none",opacity:1}),t.offsetWidth,setTimeout(function(){a(t,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){r.remove(),n()},c)},c)):setTimeout(n,c)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var n=r.status;return n?("number"!=typeof e&&(e=(1-n)*i(Math.random()*n,.1,.95)),n=i(n+e,0,.994),r.set(n)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},e=0,n=0,r.promise=function(t){return t&&"resolved"!==t.state()&&(0===n&&r.start(),e++,n++,t.always(function(){0==--n?(e=0,r.done()):r.set((e-n)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=o.template;var t,i,s=n.querySelector(o.barSelector),u=e?"-100":(-1+(r.status||0))*100,l=document.querySelector(o.parent);return a(s,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),!o.showSpinner&&(i=n.querySelector(o.spinnerSelector))&&f(i),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(n),n},r.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective" in e?"translate3d":n+"Transform" in e?"translate":"margin"};var s=(t=[],function(e){t.push(e),1==t.length&&function e(){var n=t.shift();n&&n(e)}()}),a=function(){var e=["Webkit","O","Moz","ms"],n={};function t(t,r,o){var i;r=n[i=(i=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,n){return n.toUpperCase()})]||(n[i]=function(n){var t=document.body.style;if(n in t)return n;for(var r,o=e.length,i=n.charAt(0).toUpperCase()+n.slice(1);o--;)if((r=e[o]+i)in t)return r;return n}(i)),t.style[r]=o}return function(e,n){var r,o,i=arguments;if(2==i.length)for(r in n)void 0!==(o=n[r])&&n.hasOwnProperty(r)&&t(e,r,o);else t(e,i[1],i[2])}}();function u(e,n){return("string"==typeof e?e:d(e)).indexOf(" "+n+" ")>=0}function c(e,n){var t=d(e);u(t,n)||(e.className=(t+n).substring(1))}function l(e,n){var t,r=d(e);u(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?o.call(n,t,n,e):o)&&(e.exports=r)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],function(){return n(3837),n(880)}),_N_E=e.O()}]);