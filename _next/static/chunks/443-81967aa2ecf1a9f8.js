(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{4444:function(e,t,n){"use strict";n.d(t,{$s:function(){return P},BH:function(){return w},L:function(){return l},LL:function(){return E},ZB:function(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let r in n)n.hasOwnProperty(r)&&"__proto__"!==r&&(t[r]=e(t[r],n[r]));return t}},ZR:function(){return _},aH:function(){return y},eu:function(){return p},hl:function(){return d},jU:function(){return u},m9:function(){return k},ne:function(){return C},r3:function(){return I},ru:function(){return f},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let a of r){if(!i.includes(a))return!1;let o=t[a],s=n[a];if(T(o)&&T(s)){if(!e(o,s))return!1}else if(o!==s)return!1}for(let l of i)if(!r.includes(l))return!1;return!0}},zI:function(){return h}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let o=e[n++],s=e[n++],l=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{let u=e[n++],f=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&u)<<6|63&f)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let a=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;let l=i<e.length,c=l?n[e.charAt(i)]:64;++i;let u=i<e.length,f=u?n[e.charAt(i)]:64;if(++i,null==a||null==s||null==c||null==f)throw Error();let d=a<<2|s>>4;if(r.push(d),64!==c){let p=s<<4&240|c>>2;if(r.push(p),64!==f){let h=c<<6&192|f;r.push(h)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){let t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function u(){return"object"==typeof self&&self.self===self}function f(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function d(){try{return"object"==typeof indexedDB}catch(e){return!1}}function p(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(a){t(a)}})}function h(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,g=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},v=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let n=e&&c(e[1]);return n&&JSON.parse(n)},b=()=>{try{return m()||g()||v()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},y=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(S,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new _(r,o,n);return s}}let S=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(e){return null!==e&&"object"==typeof e}function C(e,t){let n=new O(e,t);return n.subscribe.bind(n)}class O{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=A),void 0===r.error&&(r.error=A),void 0===r.complete&&(r.complete=A);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A(){}function P(e,t=1e3,n=2){let r=t*Math.pow(n,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){return e&&e._delegate?e._delegate:e}},3096:function(e,t,n){var r="Expected a function",i=0/0,a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=u||f||Function("return this")(),p=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return d.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(n=t)&&"object"==typeof n&&"[object Symbol]"==p.call(t))return i;if(v(e)){var t,n,r="function"==typeof e.valueOf?e.valueOf():e;e=v(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var u=s.test(e);return u||l.test(e)?c(e.slice(2),u?2:8):o.test(e)?i:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw TypeError(r);return v(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),function(e,t,n){var i,a,o,s,l,c,u=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError(r);function y(t){var n=i,r=a;return i=a=void 0,u=t,s=e.apply(r,n)}function w(e){var n=e-c,r=e-u;return void 0===c||n>=t||n<0||d&&r>=o}function _(){var e,n,r,i=g();if(w(i))return E(i);l=setTimeout(_,(e=i-c,n=i-u,r=t-e,d?m(r,o-n):r))}function E(e){return(l=void 0,p&&i)?y(e):(i=a=void 0,s)}function S(){var e,n=g(),r=w(n);if(i=arguments,a=this,c=n,r){if(void 0===l)return u=e=c,l=setTimeout(_,t),f?y(e):s;if(d)return l=setTimeout(_,t),y(c)}return void 0===l&&(l=setTimeout(_,t)),s}return t=b(t)||0,v(n)&&(f=!!n.leading,o=(d="maxWait"in n)?h(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=a=l=void 0},S.flush=function(){return void 0===l?s:E(g())},S}(e,t,{leading:i,maxWait:t,trailing:a})}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(r){n=o}}();var l=[],c=!1,u=-1;function f(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=s(f);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()},9008:function(e,t,n){e.exports=n(3121)},2703:function(e,t,n){"use strict";var r=n(414);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=o(n(7294)),a=o(n(1093));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return i.default.createElement("input",this.props,this.props.children)}}]),t}(i.default.Component);t.default=(0,a.default)(s)},5343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(7294)),o=l(n(8e3)),s=l(n(5697));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this,t=r({},this.props);return t.parentBindings&&delete t.parentBindings,a.default.createElement("div",r({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);c.propTypes={name:s.default.string,id:s.default.string},t.default=(0,o.default)(c)},8939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(7294)),i=a(n(1093));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var e,n,i,a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.render=function(){return r.default.createElement("a",i.props,i.props.children)},o(i,n)}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component);t.default=(0,i.default)(s)},6261:function(e,t,n){"use strict";t.rU=void 0;var r=p(n(8939)),i=p(n(8477)),a=p(n(5343)),o=p(n(2628)),s=p(n(4592)),l=p(n(7606)),c=p(n(3200)),u=p(n(1093)),f=p(n(8e3)),d=p(n(8482));function p(e){return e&&e.__esModule?e:{default:e}}t.rU=r.default,i.default,a.default,o.default,s.default,l.default,c.default,u.default,f.default,d.default,r.default,i.default,a.default,o.default,s.default,l.default,c.default,u.default,f.default,d.default},8482:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function s(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(7294);n(3935),n(4259);var c=n(7606),u=n(2628),f=n(5697),d=n(9678),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number};e.exports={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,f=function(t){function u(e){a(this,u);var t=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return h.call(t),t.state={active:!1},t}return s(u,t),i(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var i in p)n.hasOwnProperty(i)&&delete n[i];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),u}(l.Component),h=function(){var e=this;this.scrollTo=function(t,i){n.scrollTo(t,r({},e.state,i))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var i=e.props.to,a=null,o=0,s=0,l=0;if(r.getBoundingClientRect&&(l=r.getBoundingClientRect().top),!a||e.props.isDynamic){if(!(a=n.get(i)))return;var u=a.getBoundingClientRect();s=(o=u.top-l+t)+u.height}var f=t-e.props.offset,p=f>=Math.floor(o)&&f<Math.floor(s),h=f<Math.floor(o)||f>=Math.floor(s),m=n.getActiveLink();return h?(i===m&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===i&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates()):p&&m!==i?(n.setActiveLink(i),e.props.hashSpy&&d.changeHash(i),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i)),c.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),i(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return t.propTypes={name:f.string,id:f.string},t}}},3200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};s(n(4259));var i=s(n(9765)),a=s(n(140)),o=s(n(4592));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return i.default[e.smooth]||i.default.defaultEasing},c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())},u=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},f=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},d=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},p=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},h=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},m=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),null===i.start&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var a=e.bind(null,t,n);c.call(window,a);return}o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPosition)},g=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},v=function(e,t,n,r){if(t.data=t.data||u(),window.clearTimeout(t.data.delayTimeout),a.default.subscribe(function(){t.data.cancel=!0}),g(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?f(t):d(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition===t.data.targetPosition){o.default.registered.end&&o.default.registered.end(t.data.to,t.data.target,t.data.currentPosition);return}t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(i=t.duration)?i:function(){return i})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=r;var i,s=l(t),p=m.bind(null,s,t);if(t&&t.delay>0){t.data.delayTimeout=window.setTimeout(function(){o.default.registered.begin&&o.default.registered.begin(t.data.to,t.data.target),c.call(window,p)},t.delay);return}o.default.registered.begin&&o.default.registered.begin(t.data.to,t.data.target),c.call(window,p)},b=function(e){return(e=r({},e)).data=e.data||u(),e.absolute=!0,e};t.default={animateTopScroll:v,getAnimationType:l,scrollToTop:function(e){v(0,b(e))},scrollToBottom:function(e){g(e=b(e)),v(e.horizontal?p(e):h(e),e)},scrollTo:function(e,t){v(e,b(t))},scrollMore:function(e,t){g(t=b(t)),v(e+(t.horizontal?f(t):d(t)),t)}}},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5236),i=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&i.forEach(function(t){return(0,r.addPassiveEventListener)(document,t,e)})}}},5236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addPassiveEventListener=function(e,t,n){var r=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!r&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(7294));l(n(3935));var o=l(n(2628)),s=l(n(5697));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),i(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;o.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){o.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},4592:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},9678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(5236);var r,i=(r=n(4259))&&r.__esModule?r:{default:r};t.default={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout(function(){e.scrollTo(t,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return i.default.getHash()},changeHash:function(e,t){this.isInitialized()&&i.default.getHash()!==e&&i.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}}},1093:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(7294)),o=u(n(7606)),s=u(n(2628)),l=u(n(5697)),c=u(n(9678));function u(e){return e&&e.__esModule?e:{default:e}}var f={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};t.default=function(e,t){var n=t||s.default,l=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return u.call(t),t.state={active:!1},t}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),i(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();o.default.isMounted(e)||o.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,e)),o.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){o.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?r({},this.props.style,this.props.activeStyle):r({},this.props.style);var i=r({},this.props);for(var o in f)i.hasOwnProperty(o)&&delete i[o];return i.className=t,i.style=n,i.onClick=this.handleClick,a.default.createElement(e,i)}}]),s}(a.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,i){n.scrollTo(t,r({},e.state,i))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,r){var i=e.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var a=e.props.horizontal,o=e.props.to,s=null,l=void 0,u=void 0;if(a){var f=0,d=0,p=0;if(i.getBoundingClientRect&&(p=i.getBoundingClientRect().left),!s||e.props.isDynamic){if(!(s=n.get(o)))return;var h=s.getBoundingClientRect();d=(f=h.left-p+t)+h.width}var m=t-e.props.offset;l=m>=Math.floor(f)&&m<Math.floor(d),u=m<Math.floor(f)||m>=Math.floor(d)}else{var g=0,v=0,b=0;if(i.getBoundingClientRect&&(b=i.getBoundingClientRect().top),!s||e.props.isDynamic){if(!(s=n.get(o)))return;var y=s.getBoundingClientRect();v=(g=y.top-b+r)+y.height}var w=r-e.props.offset;l=w>=Math.floor(g)&&w<Math.floor(v),u=w<Math.floor(g)||w>=Math.floor(v)}var _=n.getActiveLink();if(u){if(o===_&&n.setActiveLink(void 0),e.props.hashSpy&&c.default.getHash()===o){var E=e.props.saveHashHistory;c.default.changeHash("",void 0!==E&&E)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(o,s))}if(l&&(_!==o||!1===e.state.active)){n.setActiveLink(o);var S=e.props.saveHashHistory;e.props.hashSpy&&c.default.changeHash(o,void 0!==S&&S),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(o,s))}}}};return l.propTypes=f,l.defaultProps={offset:0},l}},7606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=(r=n(3096))&&r.__esModule?r:{default:r},a=n(5236),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,i.default)(e,t)},s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=o(function(t){s.scrollHandler(e)},t);s.scrollSpyContainers.push(e),(0,a.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return -1!==s.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e!==document)return e.scrollLeft;var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft},currentPositionY:function(e){if(e!==document)return e.scrollTop;var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach(function(t){return t(s.currentPositionX(e),s.currentPositionY(e))})},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionX(t),s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach(function(e){return e()})},unmount:function(e,t){s.scrollSpyContainers.forEach(function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(e)>-1&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(e){return s.scrollHandler(e)})}};t.default=s},2628:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n(4259)),a=s(n(3200)),o=s(n(4592));function s(e){return e&&e.__esModule?e:{default:e}}var l={},c=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return c=e},getActiveLink:function(){return c},scrollTo:function(e,t){var n=this.get(e);if(!n){console.warn("target Element not found");return}var s=(t=r({},t,{absolute:!1})).containerId,l=t.container,c=void 0;c=s?document.getElementById(s):l&&l.nodeType?l:document,t.absolute=!0;var u=t.horizontal,f=i.default.scrollOffset(c,n,u)+(t.offset||0);if(!t.smooth){o.default.registered.begin&&o.default.registered.begin(e,n),c===document?t.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):c.scrollTop=f,o.default.registered.end&&o.default.registered.end(e,n);return}a.default.animateTopScroll(f,t,e,n)}}},9765:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},4259:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,r=e.offsetParent;r&&!t(r);)n+=r.offsetTop,r=r.offsetParent;return{offsetTop:n,offsetParent:r}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,r=n?"#"+n:"",i=window&&window.location,a=r?i.pathname+i.search+r:i.pathname+i.search;t?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,r){if(r)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var i=n(t,function(t){return t===e||t===document}),a=i.offsetTop;if(i.offsetParent!==e)throw Error("Seems containerElement is not an ancestor of the Element");return a}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var o=function(e){return e===document};return n(t,o).offsetTop-n(e,o).offsetTop}}},2238:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return a.ZR},SDK_VERSION:function(){return S},_DEFAULT_ENTRY_NAME:function(){return f},_addComponent:function(){return m},_addOrOverwriteComponent:function(){return g},_apps:function(){return p},_clearComponents:function(){return w},_components:function(){return h},_getProvider:function(){return b},_registerComponent:function(){return v},_removeServiceInstance:function(){return y},deleteApp:function(){return O},getApp:function(){return T},getApps:function(){return C},initializeApp:function(){return I},onLog:function(){return P},registerVersion:function(){return A},setLogLevel:function(){return k}});var r=n(8463),i=n(3333),a=n(4444),o=n(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",c="0.9.0",u=new i.Yd("@firebase/app"),f="[DEFAULT]",d={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,h=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function g(e,t){e.container.addOrOverwriteComponent(t)}function v(e){let t=e.name;if(h.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(h.set(t,e),p.values()))m(n,e);return!0}function b(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function y(e,t,n=f){b(e,t).clearInstance(n)}function w(){h.clear()}let _=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S="9.15.0";function I(e,t={}){let n=e;if("object"!=typeof t){let i=t;t={name:i}}let o=Object.assign({name:f,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!=typeof s||!s)throw _.create("bad-app-name",{appName:String(s)});if(n||(n=(0,a.aH)()),!n)throw _.create("no-options");let l=p.get(s);if(l){if((0,a.vZ)(n,l.options)&&(0,a.vZ)(o,l.config))return l;throw _.create("duplicate-app",{appName:s})}let c=new r.H0(s);for(let u of h.values())c.addComponent(u);let d=new E(n,o,c);return p.set(s,d),d}function T(e=f){let t=p.get(e);if(!t&&e===f)return I();if(!t)throw _.create("no-app",{appName:e});return t}function C(){return Array.from(p.values())}async function O(e){let t=e.name;p.has(t)&&(p.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function A(e,t,n){var i;let a=null!==(i=d[e])&&void 0!==i?i:e;n&&(a+=`-${n}`);let o=a.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let l=[`Unable to register library "${a}" with version "${t}":`];o&&l.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),u.warn(l.join(" "));return}v(new r.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}function P(e,t){if(null!==e&&"function"!=typeof e)throw _.create("invalid-log-argument");(0,i.Am)(e,t)}function k(e){(0,i.Ub)(e)}let D="firebase-heartbeat-store",M=null;function j(){return M||(M=(0,o.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(D)}}).catch(e=>{throw _.create("idb-open",{originalErrorMessage:e.message})})),M}async function L(e){try{let t=await j();return t.transaction(D).objectStore(D).get(B(e))}catch(r){if(r instanceof a.ZR)u.warn(r.message);else{let n=_.create("idb-get",{originalErrorMessage:null==r?void 0:r.message});u.warn(n.message)}}}async function N(e,t){try{let n=await j(),r=n.transaction(D,"readwrite"),i=r.objectStore(D);return await i.put(t,B(e)),r.done}catch(s){if(s instanceof a.ZR)u.warn(s.message);else{let o=_.create("idb-set",{originalErrorMessage:null==s?void 0:s.message});u.warn(o.message)}}}function B(e){return`${e.name}!${e.options.appId}`}class R{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new F(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=H();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=H(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let a=n.find(e=>e.agent===i.agent);if(a){if(a.dates.push(i.date),$(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,a.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function H(){let e=new Date;return e.toISOString().substring(0,10)}class F{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await L(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function $(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}v(new r.wA("platform-logger",e=>new s(e),"PRIVATE")),v(new r.wA("heartbeat",e=>new R(e),"PRIVATE")),A(l,c,""),A(l,c,"esm2017"),A("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return s},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new r.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(a){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(t){}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch(s){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,a]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(i);n===o&&a.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},7578:function(e,t,n){"use strict";var r=n(2238),i=n(8463),a=n(4444),o=n(6531);let s="@firebase/installations",l="0.6.0",c=`w:${l}`,u="FIS_v2",f=new a.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function d(e){return e instanceof a.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function h(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function m(e,t){let n=await t.json(),r=n.error;return f.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function g({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function v(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=p(e),i=g(e),a=t.getImmediate({optional:!0});if(a){let o=await a.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let s={fid:n,authVersion:u,appId:e.appId,sdkVersion:c},l={method:"POST",headers:i,body:JSON.stringify(s)},f=await v(()=>fetch(r,l));if(f.ok){let d=await f.json(),b={fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:h(d.authToken)};return b}throw await m("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E=new Map;function S(e,t){let n=_(e);I(n,t),function(e,t){let n=(!T&&"BroadcastChannel"in self&&((T=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{I(e.data.key,e.data.fid)}),T);n&&n.postMessage({key:e,fid:t}),0===E.size&&T&&(T.close(),T=null)}(n,t)}function I(e,t){let n=E.get(e);if(n)for(let r of n)r(t)}let T=null,C="firebase-installations-store",O=null;function A(){return O||(O=(0,o.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(C)}})),O}async function P(e,t){let n=_(e),r=await A(),i=r.transaction(C,"readwrite"),a=i.objectStore(C),o=await a.get(n);return await a.put(t,n),await i.done,o&&o.fid===t.fid||S(e,t.fid),t}async function k(e){let t=_(e),n=await A(),r=n.transaction(C,"readwrite");await r.objectStore(C).delete(t),await r.done}async function D(e,t){let n=_(e),r=await A(),i=r.transaction(C,"readwrite"),a=i.objectStore(C),o=await a.get(n),s=t(o);return void 0===s?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&S(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M(e){let t;let n=await D(e.appConfig,n=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return w.test(n)?n:""}catch(r){return""}}(),registrationStatus:0};return B(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let n=Promise.reject(f.create("app-offline"));return{installationEntry:t,registrationPromise:n}}let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=j(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:L(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function j(e,t){try{let n=await b(e,t);return P(e.appConfig,n)}catch(r){throw d(r)&&409===r.customData.serverCode?await k(e.appConfig):await P(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function L(e){let t=await N(e.appConfig);for(;1===t.registrationStatus;)await y(100),t=await N(e.appConfig);if(0===t.registrationStatus){let{installationEntry:n,registrationPromise:r}=await M(e);return r||n}return t}function N(e){return D(e,e=>{if(!e)throw f.create("installation-not-found");return B(e)})}function B(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${p(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=g(e);return n.append("Authorization",`${u} ${t}`),n}(e,n),a=t.getImmediate({optional:!0});if(a){let o=await a.getHeartbeatsHeader();o&&i.append("x-firebase-client",o)}let s={installation:{sdkVersion:c,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},f=await v(()=>fetch(r,l));if(f.ok){let d=await f.json(),b=h(d);return b}throw await m("Generate Auth Token",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){let n;let r=await D(e.appConfig,r=>{var i;if(!U(r))throw f.create("not-registered");let a=r.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===a.requestStatus)return n=F(e,t),r;{if(!navigator.onLine)throw f.create("app-offline");let o=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=x(e,o),o}}),i=n?await n:r.authToken;return i}async function F(e,t){let n=await $(e.appConfig);for(;1===n.authToken.requestStatus;)await y(100),n=await $(e.appConfig);let r=n.authToken;return 0===r.requestStatus?H(e,t):r}function $(e){return D(e,e=>{if(!U(e))throw f.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function x(e,t){try{let n=await R(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await P(e.appConfig,r),n}catch(a){if(d(a)&&(401===a.customData.serverCode||404===a.customData.serverCode))await k(e.appConfig);else{let i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await P(e.appConfig,i)}throw a}}function U(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e){let{installationEntry:t,registrationPromise:n}=await M(e);return n?n.catch(console.error):H(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){await W(e);let n=await H(e,t);return n.token}async function W(e){let{registrationPromise:t}=await M(e);t&&await t}function q(e){return f.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K="installations",Y=e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw q("App Configuration");if(!e.name)throw q("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw q(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=(0,r._getProvider)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Z=e=>{let t=e.getProvider("app").getImmediate(),n=(0,r._getProvider)(t,K).getImmediate();return{getId:()=>z(n),getToken:e=>V(n,e)}};(0,r._registerComponent)(new i.wA(K,Y,"PUBLIC")),(0,r._registerComponent)(new i.wA("installations-internal",Z,"PRIVATE")),(0,r.registerVersion)(s,l),(0,r.registerVersion)(s,l,"esm2017")},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Am:function(){return d},Ub:function(){return f},Yd:function(){return u},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function f(e){a.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let n of a){let i=null;t&&t.level&&(i=o[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...a)=>{let o=a.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:a,type:t.name})}}}},9261:function(e,t,n){"use strict";let r,i,a,o;n.d(t,{IH:function(){return M}});var s=n(2238),l=n(3333),c=n(4444),u=n(8463);n(7578);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="analytics",d="https://www.googletagmanager.com/gtag/js",p=new l.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function m(e,t,n,r,i,a){let o=r[i];try{if(o)await t[o];else{let s=await h(n),l=s.find(e=>e.measurementId===i);l&&await t[l.appId]}}catch(c){p.error(c)}e("config",i,a)}async function g(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);let s=await h(n);for(let l of o){let c=s.find(e=>e.measurementId===l),u=c&&t[c.appId];if(u)a.push(u);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(f){p.error(f)}}let v=new c.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),b=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function y(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(a,i);if(200!==o.status&&304!==o.status){let s="";try{let l=await o.json();(null===(t=l.error)||void 0===t?void 0:t.message)&&(s=l.error.message)}catch(c){}throw v.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function w(e,t=b,n){let{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw v.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw v.create("no-api-key")}let o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new E;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),_({appId:r,apiKey:i,measurementId:a},o,s,t)}async function _(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=b){var a;let{appId:o,measurementId:s}=e;try{await new Promise((e,n)=>{let i=Math.max(t-Date.now(),0),a=setTimeout(e,i);r.addEventListener(()=>{clearTimeout(a),n(v.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(l){if(s)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:s};throw l}try{let u=await y(e);return i.deleteThrottleMetadata(o),u}catch(h){if(!function(e){if(!(e instanceof c.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(h)){if(i.deleteThrottleMetadata(o),s)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:o,measurementId:s};throw h}let f=503===Number(null===(a=null==h?void 0:h.customData)||void 0===a?void 0:a.httpStatus)?(0,c.$s)(n,i.intervalMillis,30):(0,c.$s)(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,d),p.debug(`Calling attemptFetch again in ${f} millis`),_(e,d,r,i)}}class E{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function S(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}{let a=await t,o=Object.assign(Object.assign({},r),{send_to:a});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I(){if(!(0,c.hl)())return p.warn(v.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,c.eu)()}catch(e){return p.warn(v.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function T(e,t,n,a,o,s,l){var c;let u=w(e);u.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>p.error(e)),t.push(u);let f=I().then(e=>e?a.getId():void 0),[h,m]=await Promise.all([u,f]);!function(e){let t=window.document.getElementsByTagName("script");for(let n of Object.values(t))if(n.src&&n.src.includes(d)&&n.src.includes(e))return n;return null}(s)&&function(e,t){let n=document.createElement("script");n.src=`${d}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,h.measurementId),i&&(o("consent","default",i),i=void 0),o("js",new Date);let g=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return g.origin="firebase",g.update=!0,null!=m&&(g.firebase_id=m),o("config",h.measurementId,g),r&&(o("set",r),r=void 0),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.app=e}_delete(){return delete O[this.app.options.appId],Promise.resolve()}}let O={},A=[],P={},k="dataLayer",D=!1;function M(e=(0,s.getApp)()){e=(0,c.m9)(e);let t=(0,s._getProvider)(e,f);return t.isInitialized()?t.getImmediate():function(e,t={}){let n=(0,s._getProvider)(e,f);if(n.isInitialized()){let r=n.getImmediate();if((0,c.vZ)(t,n.getOptions()))return r;throw v.create("already-initialized")}let i=n.initialize({options:t});return i}(e)}let j="@firebase/analytics",L="0.9.0";(0,s._registerComponent)(new u.wA(f,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return function(e,t,n){!function(){let e=[];if((0,c.ru)()&&e.push("This is a browser extension environment."),(0,c.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=v.create("invalid-analytics-context",{errorInfo:t});p.warn(n.message)}}();let r=e.options.appId;if(!r)throw v.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw v.create("no-api-key")}if(null!=O[r])throw v.create("already-exists",{id:r});if(!D){var i,s;let l,u;l=[],Array.isArray(window[k])?l=window[k]:window[k]=l;let{wrappedGtag:f,gtagCore:d}=(i="gtag",u=function(...e){window[k].push(arguments)},window[i]&&"function"==typeof window[i]&&(u=window[i]),window[i]=(s=u,async function(e,t,n){try{"event"===e?await g(s,O,A,t,n):"config"===e?await m(s,O,A,P,t,n):"consent"===e?s("consent","update",n):s("set",t)}catch(r){p.error(r)}}),{gtagCore:u,wrappedGtag:window[i]});o=f,a=d,D=!0}O[r]=T(e,A,P,t,a,k,n);let h=new C(e);return h}(n,r,t)},"PUBLIC")),(0,s._registerComponent)(new u.wA("analytics-internal",function(e){try{let t=e.getProvider(f).getImmediate();return{logEvent:(e,n,r)=>(function(e,t,n,r){S(o,O[(e=(0,c.m9)(e)).app.options.appId],t,n,r).catch(e=>p.error(e))})(t,e,n,r)}}catch(n){throw v.create("interop-component-reg-failed",{reason:n})}},"PRIVATE")),(0,s.registerVersion)(j,L),(0,s.registerVersion)(j,L,"esm2017")},770:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(4444),i=n(8463),a=n(2238),o=n(3333);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this._delegate=e,this.firebase=t,(0,a._addComponent)(e,new i.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,a.deleteApp)(this._delegate)))}_getService(e,t=a._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();let r=this._delegate.container.getProvider(e);return r.isInitialized()||(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)!=="EXPLICIT"||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=a._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,a._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,a._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let l=new r.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),c=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t={},n={__esModule:!0,initializeApp:function(i,o={}){let s=a.initializeApp(i,o);if((0,r.r3)(t,s.name))return t[s.name];let l=new e(s,n);return t[s.name]=l,l},app:i,registerVersion:a.registerVersion,setLogLevel:a.setLogLevel,onLog:a.onLog,apps:null,SDK_VERSION:a.SDK_VERSION,INTERNAL:{registerComponent:function(t){let o=t.name,s=o.replace("-compat","");if(a._registerComponent(t)&&"PUBLIC"===t.type){let c=(e=i())=>{if("function"!=typeof e[s])throw l.create("invalid-app-argument",{appName:o});return e[s]()};void 0!==t.serviceProps&&(0,r.ZB)(c,t.serviceProps),n[s]=c,e.prototype[s]=function(...e){let n=this._getService.bind(this,o);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:a}};function i(e){if(e=e||a._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,n}(s);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,r.ZB)(t,e)},createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),t}(),u=new o.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){u.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let f=self.firebase.SDK_VERSION;f&&f.indexOf("LITE")>=0&&u.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}let d=c;(0,a.registerVersion)("@firebase/app-compat","0.2.0",void 0),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */d.registerVersion("firebase","9.15.0","app-compat")},1427:function(e,t,n){"use strict";let r,i,a,o,s,l;n.d(t,{r:function(){return J}});var c,u,f=n(4444),d=n(3333),p=n(2238),h=n(8463);n(7578);let m="@firebase/performance",g="0.6.0",v="FB-PERF-TRACE-MEASURE",b="_wt_",y="_fcp",w="_fid",_="@firebase/performance/config",E="@firebase/performance/configexpire",S="Performance",I=new f.LL("performance",S,{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."}),T=new d.Yd(S);T.logLevel=d.in.INFO;class C{constructor(e){if(this.window=e,!e)throw I.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){this.performance&&this.performance.mark&&this.performance.mark(e)}measure(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)}getEntriesByType(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}getEntriesByName(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,f.zI)()?!!(0,f.hl)()||(T.info("IndexedDB is not supported by current browswer"),!1):(T.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(e,t){if(!this.PerformanceObserver)return;let n=new this.PerformanceObserver(e=>{for(let n of e.getEntries())t(n)});n.observe({entryTypes:[e]})}static getInstance(){return void 0===r&&(r=new C(i)),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){let n=e.length-t.length;if(n<0||n>1)throw I.create("invalid String merger input");let r=[];for(let i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}class A{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=O("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=O("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===o&&(o=new A),o}}(c=u||(u={}))[c.UNKNOWN=0]="UNKNOWN",c[c.VISIBLE=1]="VISIBLE",c[c.HIDDEN=2]="HIDDEN";let P=["firebase_","google_","ga_"],k=RegExp("^[a-zA-Z]\\w*$");function D(){let e=C.getInstance().document,t=e.visibilityState;switch(t){case"visible":return u.VISIBLE;case"hidden":return u.HIDDEN;default:return u.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){var t;let n=null===(t=e.options)||void 0===t?void 0:t.appId;if(!n)throw I.create("no app id");return n}let j={loggingEnabled:!0};function L(e){if(!e)return e;let t=A.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=j.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):j.logSource&&(t.logSource=j.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:j.logEndPointUrl&&(t.logEndPointUrl=j.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:j.transportKey&&(t.transportKey=j.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==j.networkRequestsSamplingRate&&(t.networkRequestsSamplingRate=j.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==j.tracesSamplingRate&&(t.tracesSamplingRate=j.tracesSamplingRate),t.logTraceAfterSampling=N(t.tracesSamplingRate),t.logNetworkAfterSampling=N(t.networkRequestsSamplingRate),e}function N(e){return Math.random()<=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B=1;function R(e){return B=2,s=s||(function(){let e=C.getInstance().document;return new Promise(t=>{if(e&&"complete"!==e.readyState){let n=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})})().then(()=>(function(e){let t=e.getId();return t.then(e=>{a=e}),t})(e.installations)).then(t=>(function(e,t){let n=function(){let e=C.getInstance().localStorage;if(!e)return;let t=e.getItem(E);if(!t||!(Number(t)>Date.now()))return;let n=e.getItem(_);if(n)try{let r=JSON.parse(n);return r}catch(i){return}}();return n?(L(n),Promise.resolve()):(function(e){let t=e.getToken();return t.then(e=>{}),t})(e.installations).then(n=>{let r=function(e){var t;let n=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!n)throw I.create("no project id");return n}(e.app),i=function(e){var t;let n=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!n)throw I.create("no api key");return n}(e.app),a=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,o=new Request(a,{method:"POST",headers:{Authorization:`FIREBASE_INSTALLATIONS_AUTH ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:M(e.app),app_version:g,sdk_version:"0.0.1"})});return fetch(o).then(e=>{if(e.ok)return e.json();throw I.create("RC response not ok")})}).catch(()=>{T.info("Could not fetch config, will use default configs")}).then(L).then(e=>(function(e){let t=C.getInstance().localStorage;e&&t&&(t.setItem(_,JSON.stringify(e)),t.setItem(E,String(Date.now()+36e5*A.getInstance().configTimeToLive)))})(e),()=>{})})(e,t)).then(()=>void(B=3),()=>void(B=3))}let H=3,F=[],$=!1;function x(e,t){!l&&(l=(...e)=>{let t=function(e,t){return 0===t?function(e){let t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:V(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}(e):function(e){let t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);let n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);let r={application_info:V(e.performanceController.app),trace_metric:t};return JSON.stringify(r)}(e)}(...e);!function(e){if(!e.eventTime||!e.message)throw I.create("invalid cc log");F=[...F,e]}({message:t,eventTime:Date.now()})}),l(e,t)}function U(e){let t=A.getInstance();(t.instrumentationEnabled||!e.isAuto)&&(t.dataCollectionEnabled||e.isAuto)&&C.getInstance().requiredApisAvailable()&&(!e.isAuto||D()===u.VISIBLE)&&(3===B?z(e):R(e.performanceController).then(()=>z(e),()=>z(e)))}function z(e){if(!a)return;let t=A.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout(()=>x(e,1),0)}function V(e){return{google_app_id:M(e),app_instance_id:a,web_app_info:{sdk_version:g,page_url:C.getInstance().getUrl(),service_worker_status:function(){let e=C.getInstance().navigator;return null!=e&&e.serviceWorker?e.serviceWorker.controller?2:3:1}(),visibility_state:D(),effective_connection_type:function(){let e=C.getInstance().navigator,t=e.connection,n=t&&t.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0}}let W=["_fp",y,w];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,n=!1,r){this.performanceController=e,this.name=t,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=C.getInstance(),this.randomId=Math.floor(1e6*Math.random()),!this.isAuto&&(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=r||`${v}-${this.randomId}-${this.name}`,r&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw I.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw I.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),U(this)}record(e,t,n){if(e<=0)throw I.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw I.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(let r of Object.keys(n.metrics))isNaN(Number(n.metrics[r]))||(this.counters[r]=Math.floor(Number(n.metrics[r])));U(this)}incrementMetric(e,t=1){void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}putMetric(e,t){var n;if(n=this.name,0!==e.length&&!(e.length>100)&&(n&&n.startsWith(b)&&W.indexOf(e)>-1||!e.startsWith("_")))this.counters[e]=function(e){let t=Math.floor(e);return t<e&&T.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}(null!=t?t:0);else throw I.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,t){let n=function(e){if(0===e.length||e.length>40)return!1;let t=P.some(t=>e.startsWith(t));return!t&&!!e.match(k)}(e),r=0!==t.length&&t.length<=100;if(n&&r){this.customAttributes[e]=t;return}if(!n)throw I.create("invalid attribute name",{attributeName:e});if(!r)throw I.create("invalid attribute value",{attributeValue:t})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){let e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor((t.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,t,n,r){let i=C.getInstance().getUrl();if(!i)return;let a=new q(e,b+i,!0),o=Math.floor(1e3*C.getInstance().getTimeOrigin());if(a.setStartTime(o),t&&t[0]&&(a.setDuration(Math.floor(1e3*t[0].duration)),a.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),a.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),a.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd))),n){let s=n.find(e=>"first-paint"===e.name);s&&s.startTime&&a.putMetric("_fp",Math.floor(1e3*s.startTime));let l=n.find(e=>"first-contentful-paint"===e.name);l&&l.startTime&&a.putMetric(y,Math.floor(1e3*l.startTime)),r&&a.putMetric(w,Math.floor(1e3*r))}U(a)}static createUserTimingTrace(e,t){let n=new q(e,t,!1,t);U(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){if(!t||void 0===t.responseStart)return;let n=C.getInstance().getTimeOrigin(),r=Math.floor((t.startTime+n)*1e3),i=t.responseStart?Math.floor((t.responseStart-t.startTime)*1e3):void 0,a=Math.floor((t.responseEnd-t.startTime)*1e3),o=t.name&&t.name.split("?")[0],s={performanceController:e,url:o,responsePayloadBytes:t.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:a};!function(e){let t=A.getInstance();if(!t.instrumentationEnabled)return;let n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout(()=>x(e,0),0)}(s)}function Y(e){a&&(setTimeout(()=>(function(e){let t=C.getInstance(),n=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");if(t.onFirstInputDelay){let i=setTimeout(()=>{q.createOobTrace(e,n,r),i=void 0},5e3);t.onFirstInputDelay(t=>{i&&(clearTimeout(i),q.createOobTrace(e,n,r,t))})}else q.createOobTrace(e,n,r)})(e),0),setTimeout(()=>(function(e){let t=C.getInstance(),n=t.getEntriesByType("resource");for(let r of n)K(e,r);t.setupObserver("resource",t=>K(e,t))})(e),0),setTimeout(()=>(function(e){let t=C.getInstance(),n=t.getEntriesByType("measure");for(let r of n)Z(e,r);t.setupObserver("measure",t=>Z(e,t))})(e),0))}function Z(e,t){let n=t.name;n.substring(0,v.length)!==v&&q.createUserTimingTrace(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.app=e,this.installations=t,this.initialized=!1}_init(e){this.initialized||((null==e?void 0:e.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),(null==e?void 0:e.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),C.getInstance().requiredApisAvailable()?(0,f.eu)().then(e=>{e&&($||(function e(t){setTimeout(()=>{if(0!==H){if(!F.length)return e(1e4);!function(){let t=F.splice(0,1e3),n=t.map(e=>({source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)})),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:A.getInstance().logSource,log_event:n};(function(e){let t=A.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})})(r).then(e=>(e.ok||T.info("Call to Firebase backend failed."),e.json())).then(n=>{let r=Number(n.nextRequestWaitMillis),i=1e4;isNaN(r)||(i=Math.max(r,i));let a=n.logResponseDetails;Array.isArray(a)&&a.length>0&&"RETRY_REQUEST_LATER"===a[0].responseAction&&(F=[...t,...F],T.info("Retry transport request later.")),H=3,e(i)}).catch(()=>{F=[...t,...F],H--,T.info(`Tries left: ${H}.`),e(1e4)})}()}},t)}(5500),$=!0),R(this).then(()=>Y(this),()=>Y(this)),this.initialized=!0)}).catch(e=>{T.info(`Environment doesn't support IndexedDB: ${e}`)}):T.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){A.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return A.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){A.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return A.getInstance().dataCollectionEnabled}}function J(e=(0,p.getApp)()){e=(0,f.m9)(e);let t=(0,p._getProvider)(e,"performance"),n=t.getImmediate();return n}let G=(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw I.create("FB not default");if("undefined"==typeof window)throw I.create("no window");i=window;let a=new X(n,r);return a._init(t),a};(0,p._registerComponent)(new h.wA("performance",G,"PUBLIC")),(0,p.registerVersion)(m,g),(0,p.registerVersion)(m,g,"esm2017")},6531:function(e,t,n){"use strict";var r;let i,a;n.d(t,{X3:function(){return m}});let o=(e,t)=>t.some(t=>e instanceof t),s=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(p(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&s.set(t,e)}).catch(()=>{}),f.set(t,e),t}(e);if(u.has(e))return u.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(h(this),e),p(s.get(this))}:function(...e){return p(t.apply(h(this),e))}:function(e,...n){let r=t.call(h(this),e,...n);return c.set(r,e.sort?e.sort():[e]),p(r)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});l.set(e,t)}(t),o(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return n!==e&&(u.set(e,n),f.set(n,e)),n}let h=e=>f.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=p(o);return r&&o.addEventListener("upgradeneeded",e=>{r(p(o.result),e.oldVersion,e.newVersion,p(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}let g=["get","getKey","getAll","getAllKeys","count"],v=["put","add","delete","clear"],b=new Map;function y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(b.get(t))return b.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=v.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||g.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return b.set(t,a),a}d={...r=d,get:(e,t,n)=>y(e,t)||r.get(e,t,n),has:(e,t)=>!!y(e,t)||r.has(e,t)}}}]);