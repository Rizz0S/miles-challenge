parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nqmn":[function(require,module,exports) {
"use strict";function e(e){var o,r=e.Symbol;return"function"==typeof r?r.observable?o=r.observable:(o=r("observable"),r.observable=o):o="@@observable",o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"KzwE":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var d,o=t(require("./ponyfill.js"));function t(e){return e&&e.__esModule?e:{default:e}}d="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof module?module:Function("return this")();var u=(0,o.default)(d),n=u;exports.default=n;
},{"./ponyfill.js":"nqmn"}],"WZ36":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyMiddleware=w,exports.bindActionCreators=p,exports.combineReducers=f,exports.compose=b,exports.createStore=i,exports.__DO_NOT_USE__ActionTypes=void 0;var e=t(require("symbol-observable"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(){return Math.random().toString(36).substring(7).split("").join(".")},n={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function i(t,r,u){var c;if("function"==typeof r&&"function"==typeof u||"function"==typeof u&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===u&&(u=r,r=void 0),void 0!==u){if("function"!=typeof u)throw new Error("Expected the enhancer to be a function.");return u(i)(t,r)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,s=r,f=[],d=f,p=!1;function l(){d===f&&(d=f.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return l(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,l();var r=d.indexOf(e);d.splice(r,1),f=null}}}function b(e){if(!o(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=a(s,e)}finally{p=!1}for(var t=f=d,r=0;r<t.length;r++){(0,t[r])()}return e}return b({type:n.INIT}),(c={dispatch:b,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,b({type:n.REPLACE})}})[e.default]=function(){var t,r=y;return(t={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(h())}return t(),{unsubscribe:r(t)}}})[e.default]=function(){return this},t},c}function u(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}function c(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function a(e,t,r,i){var u=Object.keys(t),c=r&&r.type===n.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===u.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!o(e))return"The "+c+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+u.join('", "')+'"';var a=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!i[e]});return a.forEach(function(e){i[e]=!0}),r&&r.type===n.REPLACE?void 0:a.length>0?"Unexpected "+(a.length>1?"keys":"key")+' "'+a.join('", "')+'" found in '+c+'. Expected to find one of the known reducer keys instead: "'+u.join('", "')+'". Unexpected keys will be ignored.':void 0}function s(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:n.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+n.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function f(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{s(r)}catch(a){i=a}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},a=0;a<u.length;a++){var s=u[a],f=r[s],d=e[s],p=f(d,t);if(void 0===p){var l=c(s,t);throw new Error(l)}o[s]=p,n=n||p!==d}return(n=n||u.length!==Object.keys(e).length)?o:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"==typeof e)return d(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=d(o,t))}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function w(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return y({},r,{dispatch:n=b.apply(void 0,i)(r.dispatch)})}}}function v(){}exports.__DO_NOT_USE__ActionTypes=n;
},{"symbol-observable":"KzwE"}],"JgID":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ActionCreators=exports.ActionTypes=void 0;var e={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"};exports.ActionTypes=e;var r={undo:function(){return{type:e.UNDO}},redo:function(){return{type:e.REDO}},jumpToFuture:function(r){return{type:e.JUMP_TO_FUTURE,index:r}},jumpToPast:function(r){return{type:e.JUMP_TO_PAST,index:r}},jump:function(r){return{type:e.JUMP,index:r}},clearHistory:function(){return{type:e.CLEAR_HISTORY}}};exports.ActionCreators=r;
},{}],"u536":[function(require,module,exports) {
"use strict";function r(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.isArray(r)?r:"string"==typeof r?[r]:t}function t(r){return void 0!==r.present&&void 0!==r.future&&void 0!==r.past&&Array.isArray(r.future)&&Array.isArray(r.past)}function e(t){var e=r(t);return function(r){return e.indexOf(r.type)>=0}}function n(t){var e=r(t);return function(r){return e.indexOf(r.type)<0}}function u(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(function(r,t){return function(e,n,u){return r(e,n,u)&&t(e,n,u)}},function(){return!0})}function i(t){var e=r(t);return function(r){return e.indexOf(r.type)>=0?r.type:null}}function o(r,t,e){return{past:r,present:t,future:e,group:arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,_latestUnfiltered:t,index:r.length,limit:r.length+e.length+1}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseActions=r,exports.isHistory=t,exports.includeAction=e,exports.excludeAction=n,exports.combineFilters=u,exports.groupByActionTypes=i,exports.newHistory=o;
},{}],"v26V":[function(require,module,exports) {
"use strict";function o(o){return n(o)||e(o)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e(o){if(Symbol.iterator in Object(o)||"[object Arguments]"===Object.prototype.toString.call(o))return Array.from(o)}function n(o){if(Array.isArray(o)){for(var t=0,e=new Array(o.length);t<o.length;t++)e[t]=o[t];return e}}var r,c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.set=g,exports.start=i,exports.end=u,exports.log=y;var a={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function l(){c={header:[],prev:[],action:[],next:[],msgs:[]}}function p(){var t,e,n,r,a,l,p,s,i,u,y=c,g=y.header,f=y.prev,d=y.next,v=y.action,x=y.msgs;console.group?((t=console).groupCollapsed.apply(t,o(g)),(e=console).log.apply(e,o(f)),(n=console).log.apply(n,o(v)),(r=console).log.apply(r,o(d)),(a=console).log.apply(a,o(x)),console.groupEnd()):((l=console).log.apply(l,o(g)),(p=console).log.apply(p,o(f)),(s=console).log.apply(s,o(v)),(i=console).log.apply(i,o(d)),(u=console).log.apply(u,o(x)))}function s(o,t,e){return["%c".concat(o),"color: ".concat(t,"; font-weight: bold"),e]}function i(o,t){l(),r&&(console.group?(c.header=["%credux-undo","font-style: italic","action",o.type],c.action=s("action",a.action,o),c.prev=s("prev history",a.prevState,t)):(c.header=["redux-undo action",o.type],c.action=["action",o],c.prev=["prev history",t]))}function u(o){r&&(console.group?c.next=s("next history",a.nextState,o):c.next=["next history",o],p())}function y(){if(r){for(var o=arguments.length,t=new Array(o),e=0;e<o;e++)t[e]=arguments[e];c.msgs=c.msgs.concat([].concat(t,["\n"]))}}function g(o){r=o}
},{}],"RMyU":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=O;var t=i(require("./debug")),r=require("./actions"),n=require("./helpers");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(t){if(t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!=typeof t)return{default:t};var r=o();if(r&&r.has(t))return r.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var a=i?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=t[u]}return n.default=t,r&&r.set(t,n),n}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return f(e)||s(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function y(e,t){var r=(0,n.newHistory)([],e,[]);return t&&(r._latestUnfiltered=null),r}function d(e,r,o,i){var u=e.past.length+1;t.log("inserting",r),t.log("new free: ",o-u);var a=e.past,c=e._latestUnfiltered,l=o&&o<=u,s=a.slice(l?1:0),f=null!=c?[].concat(p(s),[c]):s;return(0,n.newHistory)(f,r,[],i)}function g(e,t){if(t<0||t>=e.future.length)return e;var r=e.past,o=e.future,i=e._latestUnfiltered,u=[].concat(p(r),[i],p(o.slice(0,t))),a=o[t],c=o.slice(t+1);return(0,n.newHistory)(u,a,c)}function v(e,t){if(t<0||t>=e.past.length)return e;var r=e.past,o=e.future,i=e._latestUnfiltered,u=r.slice(0,t),a=[].concat(p(r.slice(t+1)),[i],p(o)),c=r[t];return(0,n.newHistory)(u,c,a)}function b(e,t){return t>0?g(e,t-1):t<0?v(e,e.past.length+t):e}function T(e,t){return t.indexOf(e)>-1?e:!e}function O(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.set(o.debug);var i,u=a({limit:void 0,filter:function(){return!0},groupBy:function(){return null},undoType:r.ActionTypes.UNDO,redoType:r.ActionTypes.REDO,jumpToPastType:r.ActionTypes.JUMP_TO_PAST,jumpToFutureType:r.ActionTypes.JUMP_TO_FUTURE,jumpType:r.ActionTypes.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1},o,{initTypes:(0,n.parseActions)(o.initTypes,["@@redux-undo/INIT"]),clearHistoryType:(0,n.parseActions)(o.clearHistoryType,[r.ActionTypes.CLEAR_HISTORY])}),c=u.neverSkipReducer?function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return a({},t,{present:e.apply(void 0,[t.present,r].concat(o))})}:function(e){return e};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.start(o,r);for(var a,p=r,l=arguments.length,s=new Array(l>2?l-2:0),f=2;f<l;f++)s[f-2]=arguments[f];if(!i){if(t.log("history is uninitialized"),void 0===r){return p=y(e.apply(void 0,[r,{type:"@@redux-undo/CREATE_HISTORY"}].concat(s)),u.ignoreInitialState),t.log("do not set initialState on probe actions"),t.end(p),p}(0,n.isHistory)(r)?(p=i=u.ignoreInitialState?r:(0,n.newHistory)(r.past,r.present,r.future),t.log("initialHistory initialized: initialState is a history",i)):(p=i=y(r,u.ignoreInitialState),t.log("initialHistory initialized: initialState is not a history",i))}switch(o.type){case void 0:return p;case u.undoType:return a=b(p,-1),t.log("perform undo"),t.end(a),c.apply(void 0,[a,o].concat(s));case u.redoType:return a=b(p,1),t.log("perform redo"),t.end(a),c.apply(void 0,[a,o].concat(s));case u.jumpToPastType:return a=v(p,o.index),t.log("perform jumpToPast to ".concat(o.index)),t.end(a),c.apply(void 0,[a,o].concat(s));case u.jumpToFutureType:return a=g(p,o.index),t.log("perform jumpToFuture to ".concat(o.index)),t.end(a),c.apply(void 0,[a,o].concat(s));case u.jumpType:return a=b(p,o.index),t.log("perform jump to ".concat(o.index)),t.end(a),c.apply(void 0,[a,o].concat(s));case T(o.type,u.clearHistoryType):return a=y(p.present,u.ignoreInitialState),t.log("perform clearHistory"),t.end(a),c.apply(void 0,[a,o].concat(s));default:if(a=e.apply(void 0,[p.present,o].concat(s)),u.initTypes.some(function(e){return e===o.type}))return t.log("reset history due to init action"),t.end(i),i;if(p._latestUnfiltered===a)return p;if("function"==typeof u.filter&&!u.filter(o,a,p)){var O=(0,n.newHistory)(p.past,a,p.future,p.group);return u.syncFilter||(O._latestUnfiltered=p._latestUnfiltered),t.log("filter ignored action, not storing it in past"),t.end(O),O}var m=u.groupBy(o,a,p);if(null!=m&&m===p.group){var j=(0,n.newHistory)(p.past,a,p.future,p.group);return t.log("groupBy grouped the action with the previous action"),t.end(j),j}return p=d(p,a,u.limit,m),t.log("inserted new state into history"),t.end(p),p}}}
},{"./debug":"v26V","./actions":"JgID","./helpers":"u536"}],"mevM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ActionTypes",{enumerable:!0,get:function(){return e.ActionTypes}}),Object.defineProperty(exports,"ActionCreators",{enumerable:!0,get:function(){return e.ActionCreators}}),Object.defineProperty(exports,"parseActions",{enumerable:!0,get:function(){return t.parseActions}}),Object.defineProperty(exports,"isHistory",{enumerable:!0,get:function(){return t.isHistory}}),Object.defineProperty(exports,"includeAction",{enumerable:!0,get:function(){return t.includeAction}}),Object.defineProperty(exports,"excludeAction",{enumerable:!0,get:function(){return t.excludeAction}}),Object.defineProperty(exports,"combineFilters",{enumerable:!0,get:function(){return t.combineFilters}}),Object.defineProperty(exports,"groupByActionTypes",{enumerable:!0,get:function(){return t.groupByActionTypes}}),Object.defineProperty(exports,"newHistory",{enumerable:!0,get:function(){return t.newHistory}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return r.default}});var e=require("./actions"),t=require("./helpers"),r=n(require("./reducer"));function n(e){return e&&e.__esModule?e:{default:e}}
},{"./actions":"JgID","./helpers":"u536","./reducer":"RMyU"}],"P1PT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.persistState=exports.loadState=void 0;var t=function(){try{var t=localStorage.getItem("boardState");if(!t)return;return JSON.parse(t)}catch(e){return}};exports.loadState=t;var e=function(t){try{var e=JSON.stringify(t);localStorage.setItem("boardState",e)}catch(r){console.log(r)}};exports.persistState=e;
},{}],"ONc1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.persistedState=void 0;var r=require("redux"),e=n(require("redux-undo")),t=require("./localStorage.js");function n(r){return r&&r.__esModule?r:{default:r}}function o(r){return c(r)||u(r)||i(r)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(r,e){if(r){if("string"==typeof r)return s(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(r,e):void 0}}function u(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function c(r){if(Array.isArray(r))return s(r)}function s(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function l(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function f(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach(function(e){p(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function p(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var d=localStorage.getItem("boardState")?(0,t.loadState)():b;exports.persistedState=d;var b={past:[{r1:[],r2:[],r3:[],r4:[],r5:[]}],present:{r1:[],r2:[],r3:[],r4:[],r5:[]},future:[{r1:[],r2:[],r3:[],r4:[],r5:[]}]};function y(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.present,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CATEGORY":var t=e.payload,n=t.reward,a=t.addedCategory;return f(f({},r),{},p({},n,[].concat(o(r[n]),[a])));case"REMOVE_CATEGORY":var i=e.payload,u=i.reward,c=i.removedCategory,s=r[u].filter(function(r){return r!==c});return f(f({},r),{},p({},u,s));default:return r}}var O=(0,r.createStore)((0,e.default)(y),d);O.subscribe(function(){(0,t.persistState)(O.getState())});var v=O;exports.default=v;
},{"redux":"WZ36","redux-undo":"mevM","./localStorage.js":"P1PT"}],"T6ID":[function(require,module,exports) {
"use strict";var e=n(require("./store.js")),t=require("redux-undo");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var r=o?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(n,c,r):n[c]=e[c]}return n.default=e,t&&t.set(e,n),n}function o(e,t,i,n,o){o.present["r".concat(e)].includes("c".concat(t))?(i.style.opacity="1",i.style.visibility="visible",n.style.opacity="1",n.style.visibility="visible"):(i.style.opacity="0",n.style.opacity="0",setTimeout(function(){i.style.visibility="hidden",n.style.visibility="hidden"},1e3))}function c(){var t=e.default.getState(),i=1,n=1;document.querySelectorAll(".category").forEach(function(e){n>5&&(n=1,i++);var c=document.querySelector(".reward-tile.r".concat(i,".c").concat(n)),r=document.querySelector(".remove-btn.r".concat(i,".c").concat(n));o(i,n,c,r,t),n++})}function r(t){var i=1,n=1;document.querySelectorAll(".category").forEach(function(c){n>5&&(n=1,i++);var r=document.createElement("div"),l=document.createElement("div");r.className="reward-tile r".concat(i," c").concat(n),l.className="remove-btn r".concat(i," c").concat(n),l.innerText="x",o(i,n,r,l,t),c.appendChild(r),c.appendChild(l),l.addEventListener("click",function(t){var i=t.target.classList[1],n=t.target.classList[2],o=document.querySelector(".".concat(i,".").concat(n)),c=t.target;o.style.opacity="0",c.style.opacity="0",setTimeout(function(){o.style.visibility="hidden",c.style.visibility="hidden"},1e3),e.default.dispatch({type:"REMOVE_CATEGORY",payload:{reward:i,removedCategory:n}})}),n++})}function l(t){var i=(0).pos1,n=(0).pos2,o=(0).pos3,c=(0).pos4;function r(e){i=o-e.clientX,n=c-e.clientY,o=e.clientX,c=e.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-i+"px"}function l(i){t.style.opacity="0",t.style.visibility="hidden";var n=document.elementFromPoint(i.clientX,i.clientY);if("category"===n.className){var o=n.firstElementChild,c=o.classList[1],r=o.classList[2];e.default.dispatch({type:"ADD_CATEGORY",payload:{reward:c,addedCategory:r}});var l=document.querySelector(".remove-btn.".concat(c,".").concat(r));l.style.opacity="1",l.style.visibility="visible",o.style.visibility="visible",o.style.opacity="1"}document.onmouseup=null,document.onmousemove=null}document.onmousedown=function(e){e.preventDefault(),e.target.classList.contains("parent-tile")&&(o=e.clientX,c=e.clientY,t.style.opacity="1",t.style.visibility="visible",t.style.top=e.target.offsetTop+"px",t.style.left=e.target.offsetLeft+"px",document.onmouseup=l,document.onmousemove=r)}}document.querySelector(".undo-btn").addEventListener("click",function(){e.default.dispatch(t.ActionCreators.undo()),c()}),document.querySelector(".redo-btn").addEventListener("click",function(){e.default.dispatch(t.ActionCreators.redo()),c()}),r(e.persistedState),l(document.querySelector("#drag-tile"));
},{"./store.js":"ONc1","redux-undo":"mevM"}]},{},["T6ID"], null)
//# sourceMappingURL=script.b7e74a0c.js.map