/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{292:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,c=r(293),f=r(301),component=r(337),l=r(338),h=((n={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n["invalid-log-argument"]="First argument to `onLog` must be null or a function.",n),d=new f.ErrorFactory("app","Firebase",h),v="@firebase/app",y="[DEFAULT]",m=((o={})[v]="fire-core",o["@firebase/analytics"]="fire-analytics",o["@firebase/auth"]="fire-auth",o["@firebase/database"]="fire-rtdb",o["@firebase/functions"]="fire-fn",o["@firebase/installations"]="fire-iid",o["@firebase/messaging"]="fire-fcm",o["@firebase/performance"]="fire-perf",o["@firebase/remote-config"]="fire-rc",o["@firebase/storage"]="fire-gcs",o["@firebase/firestore"]="fire-fst",o["fire-js"]="fire-js",o["firebase-wrapper"]="fire-js-all",o),_=new l.Logger("@firebase/app"),w=function(){function e(e,t,r){var n,o,l=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=f.deepCopy(e),this.container=new component.ComponentContainer(t.name),this._addComponent(new component.Component("app",(function(){return l}),"PUBLIC"));try{for(var h=c.__values(this.firebase_.INTERNAL.components.values()),d=h.next();!d.done;d=h.next()){var v=d.value;this._addComponent(v)}}catch(e){n={error:e}}finally{try{d&&!d.done&&(o=h.return)&&o.call(h)}finally{if(n)throw n.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t=y),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=y),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(component){try{this.container.addComponent(component)}catch(e){_.debug("Component "+component.name+" failed to register with FirebaseApp "+this.name,e)}},e.prototype._addOrOverwriteComponent=function(component){this.container.addOrOverwriteComponent(component)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw d.create("app-deleted",{appName:this.name_})},e}();w.prototype.name&&w.prototype.options||w.prototype.delete||console.log("dc");var E=function e(){var t=function(e){var t={},r=new Map,n={__esModule:!0,initializeApp:function(r,o){void 0===o&&(o={}),"object"==typeof o&&null!==o||(o={name:o});var c=o;void 0===c.name&&(c.name=y);var l=c.name;if("string"!=typeof l||!l)throw d.create("bad-app-name",{appName:String(l)});if(f.contains(t,l))throw d.create("duplicate-app",{appName:l});var h=new e(r,c,n);return t[l]=h,h},app:o,registerVersion:function(e,t,r){var n,o=null!==(n=m[e])&&void 0!==n?n:e;r&&(o+="-"+r);var c=o.match(/\s|\//),f=t.match(/\s|\//);if(c||f){var l=['Unable to register library "'+o+'" with version "'+t+'":'];return c&&l.push('library name "'+o+'" contains illegal characters (whitespace or "/")'),c&&f&&l.push("and"),f&&l.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void _.warn(l.join(" "))}h(new component.Component(o+"-version",(function(){return{library:o,version:t}}),"VERSION"))},setLogLevel:l.setLogLevel,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw d.create("invalid-log-argument",{appName:name});l.setUserLogHandler(e,t)},apps:null,SDK_VERSION:"7.20.0",INTERNAL:{registerComponent:h,removeApp:function(e){delete t[e]},components:r,useAsService:function(e,t){return"serverAuth"===t?null:t}}};function o(e){if(e=e||y,!f.contains(t,e))throw d.create("no-app",{appName:e});return t[e]}function h(component){var l,h,v=component.name;if(r.has(v))return _.debug("There were multiple attempts to register component "+v+"."),"PUBLIC"===component.type?n[v]:null;if(r.set(v,component),"PUBLIC"===component.type){var y=function(e){if(void 0===e&&(e=o()),"function"!=typeof e[v])throw d.create("invalid-app-argument",{appName:v});return e[v]()};void 0!==component.serviceProps&&f.deepExtend(y,component.serviceProps),n[v]=y,e.prototype[v]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,v).apply(this,component.multipleInstances?e:[])}}try{for(var m=c.__values(Object.keys(t)),w=m.next();!w.done;w=m.next()){var E=w.value;t[E]._addComponent(component)}}catch(e){l={error:e}}finally{try{w&&!w.done&&(h=m.return)&&h.call(m)}finally{if(l)throw l.error}}return"PUBLIC"===component.type?n[v]:null}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),o.App=e,n}(w);return t.INTERNAL=c.__assign(c.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){f.deepExtend(t,e)},createSubscribe:f.createSubscribe,ErrorFactory:f.ErrorFactory,deepExtend:f.deepExtend}),t}(),O=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var component=e.getComponent();return"VERSION"===(null==component?void 0:component.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();if(f.isBrowser()&&void 0!==self.firebase){_.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var S=self.firebase.SDK_VERSION;S&&S.indexOf("LITE")>=0&&_.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var A=E.initializeApp;E.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return f.isNode()&&_.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),A.apply(void 0,e)};var C=E;!function(e,t){e.INTERNAL.registerComponent(new component.Component("platform-logger",(function(e){return new O(e)}),"PRIVATE")),e.registerVersion(v,"0.6.11",t),e.registerVersion("fire-js","")}(C),t.default=C,t.firebase=C},293:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return c})),r.d(t,"__rest",(function(){return f})),r.d(t,"__decorate",(function(){return l})),r.d(t,"__param",(function(){return h})),r.d(t,"__metadata",(function(){return d})),r.d(t,"__awaiter",(function(){return v})),r.d(t,"__generator",(function(){return y})),r.d(t,"__createBinding",(function(){return m})),r.d(t,"__exportStar",(function(){return _})),r.d(t,"__values",(function(){return w})),r.d(t,"__read",(function(){return E})),r.d(t,"__spread",(function(){return O})),r.d(t,"__spreadArrays",(function(){return S})),r.d(t,"__await",(function(){return A})),r.d(t,"__asyncGenerator",(function(){return C})),r.d(t,"__asyncDelegator",(function(){return N})),r.d(t,"__asyncValues",(function(){return I})),r.d(t,"__makeTemplateObject",(function(){return D})),r.d(t,"__importStar",(function(){return P})),r.d(t,"__importDefault",(function(){return L})),r.d(t,"__classPrivateFieldGet",(function(){return T})),r.d(t,"__classPrivateFieldSet",(function(){return j}));var n=function(e,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},n(e,b)};function o(e,b){function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}var c=function(){return c=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e},c.apply(this,arguments)};function f(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function l(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c}function h(e,t){return function(r,n){t(r,n,e)}}function d(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function v(e,t,r,n){return new(r||(r=Promise))((function(o,c){function f(e){try{h(n.next(e))}catch(e){c(e)}}function l(e){try{h(n.throw(e))}catch(e){c(e)}}function h(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(f,l)}h((n=n.apply(e,t||[])).next())}))}function y(e,body){var t,r,n,g,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(f){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(n=2&c[0]?r.return:c[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,c[1])).done)return n;switch(r=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){o.label=c[1];break}if(6===c[0]&&o.label<n[1]){o.label=n[1],n=c;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(c);break}n[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],r=0}finally{t=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,f])}}}function m(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function _(e,t){for(var p in e)"default"===p||t.hasOwnProperty(p)||(t[p]=e[p])}function w(e){var s="function"==typeof Symbol&&Symbol.iterator,t=s&&e[s],i=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function E(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)c.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return c}function O(){for(var e=[],i=0;i<arguments.length;i++)e=e.concat(E(arguments[i]));return e}function S(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),r=0;for(i=0;i<e;i++)for(var a=arguments[i],n=0,o=a.length;n<o;n++,r++)t[r]=a[n];return t}function A(e){return this instanceof A?(this.v=e,this):new A(e)}function C(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,g=r.apply(e,t||[]),q=[];return i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i;function n(e){g[e]&&(i[e]=function(t){return new Promise((function(a,b){q.push([e,t,a,b])>1||o(e,t)}))})}function o(e,t){try{(r=g[e](t)).value instanceof A?Promise.resolve(r.value.v).then(c,f):l(q[0][2],r)}catch(e){l(q[0][3],e)}var r}function c(e){o("next",e)}function f(e){o("throw",e)}function l(e,t){e(t),q.shift(),q.length&&o(q[0][0],q[0][1])}}function N(e){var i,p;return i={},t("next"),t("throw",(function(e){throw e})),t("return"),i[Symbol.iterator]=function(){return this},i;function t(t,r){i[t]=e[t]?function(n){return(p=!p)?{value:A(e[t](n)),done:"return"===t}:r?r(n):n}:r}}function I(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,t=e[Symbol.asyncIterator];return t?t.call(e):(e=w(e),i={},r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i);function r(t){i[t]=e[t]&&function(r){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(r=e[t](r)).done,r.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function L(e){return e&&e.__esModule?e:{default:e}}function T(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function j(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},301:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(293),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},c=function(e,t){if(!e)throw f(t)},f=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},l=function(e){for(var t=[],p=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);r<128?t[p++]=r:r<2048?(t[p++]=r>>6|192,t[p++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[p++]=r>>18|240,t[p++]=r>>12&63|128,t[p++]=r>>6&63|128,t[p++]=63&r|128):(t[p++]=r>>12|224,t[p++]=r>>6&63|128,t[p++]=63&r|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(input,e){if(!Array.isArray(input))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,output=[],i=0;i<input.length;i+=3){var r=input[i],n=i+1<input.length,o=n?input[i+1]:0,c=i+2<input.length,f=c?input[i+2]:0,l=r>>2,h=(3&r)<<4|o>>4,d=(15&o)<<2|f>>6,v=63&f;c||(v=64,n||(d=64)),output.push(t[l],t[h],t[d],t[v])}return output.join("")},encodeString:function(input,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(input):this.encodeByteArray(l(input),e)},decodeString:function(input,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(input):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var c=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&c)}else if(o>239&&o<365){var u=((7&o)<<18|(63&(c=e[r++]))<<12|(63&(f=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{c=e[r++];var f=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&c)<<6|63&f)}}return t.join("")}(this.decodeStringToByteArray(input,e))},decodeStringToByteArray:function(input,e){this.init_();for(var t=e?this.charToByteMapWebSafe_:this.charToByteMap_,output=[],i=0;i<input.length;){var r=t[input.charAt(i++)],n=i<input.length?t[input.charAt(i)]:0,o=++i<input.length?t[input.charAt(i)]:64,c=++i<input.length?t[input.charAt(i)]:64;if(++i,null==r||null==n||null==o||null==c)throw Error();var f=r<<2|n>>4;if(output.push(f),64!==o){var l=n<<4&240|o>>2;if(output.push(l),64!==c){var h=o<<6&192|c;output.push(h)}}}return output},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},d=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function v(e,source){if(!(source instanceof Object))return source;switch(source.constructor){case Date:return new Date(source.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return source}for(var t in source)source.hasOwnProperty(t)&&(e[t]=v(e[t],source[t]));return e}var y=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}var w=function(e){function t(code,r){var n=e.call(this,r)||this;return n.code=code,n.name="FirebaseError",Object.setPrototypeOf(n,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,E.prototype.create),n}return n.__extends(t,e),t}(Error),E=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(code){for(var data=[],e=1;e<arguments.length;e++)data[e-1]=arguments[e];for(var t=data[0]||{},r=this.service+"/"+code,template=this.errors[code],n=template?O(template,t):"Error",o=this.serviceName+": "+n+" ("+r+").",c=new w(r,o),f=0,l=Object.keys(t);f<l.length;f++){var h=l[f];"_"!==h.slice(-1)&&(h in c&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),c[h]=t[h])}return c},e}();function O(template,data){return template.replace(S,(function(e,t){var r=data[t];return null!=r?String(r):"<"+t+"?>"}))}var S=/\{\$([^}]+)}/g;function A(e){return JSON.parse(e)}var C=function(e){var header={},t={},data={},r="";try{var n=e.split(".");header=A(d(n[0])||""),t=A(d(n[1])||""),r=n[2],data=t.d||{},delete t.d}catch(e){}return{header:header,claims:t,data:data,signature:r}};var N=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var i=1;i<this.blockSize;++i)this.pad_[i]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var i=0;i<16;i++)r[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(i=0;i<16;i++)r[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(i=16;i<80;i++){var n=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=4294967295&(n<<1|n>>>31)}var o,c,a=this.chain_[0],b=this.chain_[1],f=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(o=l^b&(f^l),c=1518500249):(o=b^f^l,c=1859775393):i<60?(o=b&f|l&(b|f),c=2400959708):(o=b^f^l,c=3395469782);n=(a<<5|a>>>27)+o+h+c+r[i]&4294967295;h=l,l=f,f=4294967295&(b<<30|b>>>2),b=a,a=n}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+b&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,c=this.inbuf_;n<t;){if(0===c)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[c]=e.charCodeAt(n),++n,++c===this.blockSize){this.compress_(o),c=0;break}}else for(;n<t;)if(o[c]=e[n],++n,++c===this.blockSize){this.compress_(o),c=0;break}}this.inbuf_=c,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(i=0;i<5;i++)for(var n=24;n>=0;n-=8)e[r]=this.chain_[i]>>n&255,++r;return e},e}();var I=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=D),void 0===n.error&&(n.error=D),void 0===n.complete&&(n.complete=D);var c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),c},e.prototype.unsubscribeOne=function(i){void 0!==this.observers&&void 0!==this.observers[i]&&(delete this.observers[i],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var i=0;i<this.observers.length;i++)this.sendOne(i,e)},e.prototype.sendOne=function(i,e){var t=this;this.task.then((function(){if(void 0!==t.observers&&void 0!==t.observers[i])try{e(t.observers[i])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function D(){}function P(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}var L=144e5;t.CONSTANTS=o,t.Deferred=y,t.ErrorFactory=E,t.FirebaseError=w,t.MAX_VALUE_MILLIS=L,t.RANDOM_FACTOR=.5,t.Sha1=N,t.areCookiesEnabled=function(){return!(!navigator||!navigator.cookieEnabled)},t.assert=c,t.assertionError=f,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},t.base64=h,t.base64Decode=d,t.base64Encode=function(e){var t=l(e);return h.encodeByteArray(t,!0)},t.calculateBackoffMillis=function(e,t,r){void 0===t&&(t=1e3),void 0===r&&(r=2);var n=t*Math.pow(r,e),o=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(L,n+o)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new I(e,t);return r.subscribe.bind(r)},t.decode=C,t.deepCopy=function(e){return v(void 0,e)},t.deepExtend=v,t.errorPrefix=P,t.getUA=m,t.isAdmin=function(e){var t=C(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return m().indexOf("Electron/")>=0},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isIE=function(){var e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isIndexedDBAvailable=function(){return"indexedDB"in self&&null!=indexedDB},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())},t.isNode=_,t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isSafari=function(){return!_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},t.isUWP=function(){return m().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){var t=C(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=C(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),o=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},t.issuedAtTime=function(e){var t=C(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=A,t.map=function(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n},t.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,o=Object.entries(e);n<o.length;n++){var c=o[n];r(c[0],c[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var p=0,i=0;i<e.length;i++){var t=e.charCodeAt(i);t<128?p++:t<2048?p+=2:t>=55296&&t<=56319?(p+=4,i++):p+=3}return p},t.stringToByteArray=function(e){for(var t=[],p=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);if(r>=55296&&r<=56319){var n=r-55296;i++,c(i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(n<<10)+(e.charCodeAt(i)-56320)}r<128?t[p++]=r:r<2048?(t[p++]=r>>6|192,t[p++]=63&r|128):r<65536?(t[p++]=r>>12|224,t[p++]=r>>6&63|128,t[p++]=63&r|128):(t[p++]=r>>18|240,t[p++]=r>>12&63|128,t[p++]=r>>6&63|128,t[p++]=63&r|128)}return t},t.stringify=function(data){return JSON.stringify(data)},t.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(P(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(P(e,t,n)+"must be a valid context object.")},t.validateIndexedDBOpenable=function(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",o=window.indexedDB.open(n);o.onsuccess=function(){o.result.close(),r||window.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=function(){r=!1},o.onerror=function(){var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))},t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(P(e,t,n)+"must be a valid firebase namespace.")}}).call(this,r(32))},337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(293),o=r(301),c=function(){function e(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),f="[DEFAULT]",l=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e=f);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new o.Deferred;this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=n.__assign({identifier:f,optional:!1},e),r=t.identifier,o=t.optional,c=this.normalizeInstanceIdentifier(r);try{var l=this.getOrInitializeService(c);if(!l){if(o)return null;throw Error("Service "+this.name+" is not available")}return l}catch(e){if(o)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(component){var e,t;if(component.name!==this.name)throw Error("Mismatching Component "+component.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=component,function(component){return"EAGER"===component.instantiationMode}(component))try{this.getOrInitializeService(f)}catch(e){}try{for(var r=n.__values(this.instancesDeferred.entries()),o=r.next();!o.done;o=r.next()){var c=n.__read(o.value,2),l=c[0],h=c[1],d=this.normalizeInstanceIdentifier(l);try{var v=this.getOrInitializeService(d);h.resolve(v)}catch(e){}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e=f),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return n.__awaiter(this,void 0,void 0,(function(){var e;return n.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(n.__spread(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return e===f?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:f:e},e}();var h=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(component){var e=this.getProvider(component.name);if(e.isComponentSet())throw new Error("Component "+component.name+" has already been registered with "+this.name);e.setComponent(component)},e.prototype.addOrOverwriteComponent=function(component){this.getProvider(component.name).isComponentSet()&&this.providers.delete(component.name),this.addComponent(component)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new l(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();t.Component=c,t.ComponentContainer=h,t.Provider=l},338:function(e,t,r){"use strict";function n(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),r=0;for(i=0;i<e;i++)for(var a=arguments[i],n=0,o=a.length;n<o;n++,r++)t[r]=a[n];return t}var o;r.r(t),r.d(t,"LogLevel",(function(){return c})),r.d(t,"Logger",(function(){return y})),r.d(t,"setLogLevel",(function(){return m})),r.d(t,"setUserLogHandler",(function(){return _}));var c,f=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(c||(c={}));var l={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},h=c.INFO,d=((o={})[c.DEBUG]="log",o[c.VERBOSE]="log",o[c.INFO]="info",o[c.WARN]="warn",o[c.ERROR]="error",o),v=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];if(!(t<e.logLevel)){var c=(new Date).toISOString(),f=d[t];if(!f)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[f].apply(console,n(["["+c+"]  "+e.name+":"],r))}},y=function(){function e(e){this.name=e,this._logLevel=h,this._logHandler=v,this._userLogHandler=null,f.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in c))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?l[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,c.DEBUG],e)),this._logHandler.apply(this,n([this,c.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,c.VERBOSE],e)),this._logHandler.apply(this,n([this,c.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,c.INFO],e)),this._logHandler.apply(this,n([this,c.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,c.WARN],e)),this._logHandler.apply(this,n([this,c.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,c.ERROR],e)),this._logHandler.apply(this,n([this,c.ERROR],e))},e}();function m(e){f.forEach((function(t){t.setLogLevel(e)}))}function _(e,t){for(var r=function(r){var n=null;t&&t.level&&(n=l[t.level]),r.userLogHandler=null===e?null:function(t,r){for(var o=[],f=2;f<arguments.length;f++)o[f-2]=arguments[f];var l=o.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:c[r].toLowerCase(),message:l,args:o,type:t.name})}},n=0,o=f;n<o.length;n++){r(o[n])}}}}]);