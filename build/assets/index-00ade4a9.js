function X1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Id={exports:{}},Ho={},_d={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),eh=Symbol.for("react.portal"),th=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),oh=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),lh=Symbol.for("react.suspense"),ah=Symbol.for("react.memo"),uh=Symbol.for("react.lazy"),bu=Symbol.iterator;function ch(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Md=Object.assign,Fd={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||zd}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $d(){}$d.prototype=Sr.prototype;function ka(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||zd}var ja=ka.prototype=new $d;ja.constructor=ka;Md(ja,Sr.prototype);ja.isPureReactComponent=!0;var Uu=Array.isArray,Bd=Object.prototype.hasOwnProperty,La={current:null},bd={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Bd.call(t,r)&&!bd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xi,type:e,key:o,ref:s,props:i,_owner:La.current}}function dh(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function fh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hu=/\/+/g;function Ms(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fh(""+e.key):t.toString(36)}function Qi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xi:case eh:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ms(s,0):r,Uu(i)?(n="",e!=null&&(n=e.replace(Hu,"$&/")+"/"),Qi(i,t,n,"",function(u){return u})):i!=null&&(Ra(i)&&(i=dh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Hu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Uu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ms(o,l);s+=Qi(o,t,n,a,i)}else if(a=ch(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ms(o,l++),s+=Qi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ri(e,t,n){if(e==null)return e;var r=[],i=0;return Qi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ph(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Ki={transition:null},hh={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:La};X.Children={map:Ri,forEach:function(e,t,n){Ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ri(e,function(){t++}),t},toArray:function(e){return Ri(e,function(t){return t})||[]},only:function(e){if(!Ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Sr;X.Fragment=th;X.Profiler=rh;X.PureComponent=ka;X.StrictMode=nh;X.Suspense=lh;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Md({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=La.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Bd.call(t,a)&&!bd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xi,type:e.type,key:i,ref:o,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:oh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ih,_context:e},e.Consumer=e};X.createElement=Ud;X.createFactory=function(e){var t=Ud.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:sh,render:e}};X.isValidElement=Ra;X.lazy=function(e){return{$$typeof:uh,_payload:{_status:-1,_result:e},_init:ph}};X.memo=function(e,t){return{$$typeof:ah,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return Qe.current.useCallback(e,t)};X.useContext=function(e){return Qe.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};X.useEffect=function(e,t){return Qe.current.useEffect(e,t)};X.useId=function(){return Qe.current.useId()};X.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Qe.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};X.useRef=function(e){return Qe.current.useRef(e)};X.useState=function(e){return Qe.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Qe.current.useTransition()};X.version="18.2.0";_d.exports=X;var R=_d.exports;const Ve=Dd(R),mh=X1({__proto__:null,default:Ve},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh=R,vh=Symbol.for("react.element"),yh=Symbol.for("react.fragment"),xh=Object.prototype.hasOwnProperty,wh=gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sh={key:!0,ref:!0,__self:!0,__source:!0};function Hd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xh.call(t,r)&&!Sh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vh,type:e,key:o,ref:s,props:i,_owner:wh.current}}Ho.Fragment=yh;Ho.jsx=Hd;Ho.jsxs=Hd;Id.exports=Ho;var c=Id.exports,yl={},Vd={exports:{}},rt={},Wd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,W){var U=N.length;N.push(W);e:for(;0<U;){var Y=U-1>>>1,T=N[Y];if(0<i(T,W))N[Y]=W,N[U]=T,U=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var W=N[0],U=N.pop();if(U!==W){N[0]=U;e:for(var Y=0,T=N.length,I=T>>>1;Y<I;){var _=2*(Y+1)-1,V=N[_],j=_+1,K=N[j];if(0>i(V,U))j<T&&0>i(K,V)?(N[Y]=K,N[j]=U,Y=j):(N[Y]=V,N[_]=U,Y=_);else if(j<T&&0>i(K,U))N[Y]=K,N[j]=U,Y=j;else break e}}return W}function i(N,W){var U=N.sortIndex-W.sortIndex;return U!==0?U:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,f=null,g=3,x=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=N)r(u),W.sortIndex=W.expirationTime,t(a,W);else break;W=n(u)}}function w(N){if(y=!1,h(N),!v)if(n(a)!==null)v=!0,Le(S);else{var W=n(u);W!==null&&ve(w,W.startTime-N)}}function S(N,W){v=!1,y&&(y=!1,m(L),L=-1),x=!0;var U=g;try{for(h(W),f=n(a);f!==null&&(!(f.expirationTime>W)||N&&!re());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,g=f.priorityLevel;var T=Y(f.expirationTime<=W);W=e.unstable_now(),typeof T=="function"?f.callback=T:f===n(a)&&r(a),h(W)}else r(a);f=n(a)}if(f!==null)var I=!0;else{var _=n(u);_!==null&&ve(w,_.startTime-W),I=!1}return I}finally{f=null,g=U,x=!1}}var C=!1,O=null,L=-1,k=5,M=-1;function re(){return!(e.unstable_now()-M<k)}function ee(){if(O!==null){var N=e.unstable_now();M=N;var W=!0;try{W=O(!0,N)}finally{W?Z():(C=!1,O=null)}}else C=!1}var Z;if(typeof p=="function")Z=function(){p(ee)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,de=fe.port2;fe.port1.onmessage=ee,Z=function(){de.postMessage(null)}}else Z=function(){E(ee,0)};function Le(N){O=N,C||(C=!0,Z())}function ve(N,W){L=E(function(){N(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Le(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var U=g;g=W;try{return N()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=g;g=N;try{return W()}finally{g=U}},e.unstable_scheduleCallback=function(N,W,U){var Y=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Y+U:Y):U=Y,N){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=U+T,N={id:d++,callback:W,priorityLevel:N,startTime:U,expirationTime:T,sortIndex:-1},U>Y?(N.sortIndex=U,t(u,N),n(a)===null&&N===n(u)&&(y?(m(L),L=-1):y=!0,ve(w,U-Y))):(N.sortIndex=T,t(a,N),v||x||(v=!0,Le(S))),N},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(N){var W=g;return function(){var U=g;g=W;try{return N.apply(this,arguments)}finally{g=U}}}})(Qd);Wd.exports=Qd;var Ch=Wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=R,nt=Ch;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,Jr={};function Fn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)Gd.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,Eh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vu={},Wu={};function kh(e){return xl.call(Wu,e)?!0:xl.call(Vu,e)?!1:Eh.test(e)?Wu[e]=!0:(Vu[e]=!0,!1)}function jh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lh(e,t,n,r){if(t===null||typeof t>"u"||jh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oa=/[\-:]([a-z])/g;function Pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oa,Pa);Me[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oa,Pa);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oa,Pa);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Na(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lh(t,n,i,r)&&(n=null),r||i===null?kh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oi=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Aa=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),Jd=Symbol.for("react.context"),Ta=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Fs;function zr(e){if(Fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fs=t&&t[1]||""}return`
`+Fs+e}var $s=!1;function Bs(e,t){if(!e||$s)return"";$s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{$s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function Rh(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=Bs(e.type,!1),e;case 11:return e=Bs(e.type.render,!1),e;case 1:return e=Bs(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Wn:return"Portal";case wl:return"Profiler";case Aa:return"StrictMode";case Sl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jd:return(e.displayName||"Context")+".Consumer";case Zd:return(e._context.displayName||"Context")+".Provider";case Ta:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function Oh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ph(e){var t=qd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=Ph(e))}function Xd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ef(e,t){t=t.checked,t!=null&&Na(e,"checked",t,!1)}function jl(e,t){ef(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Mr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function tf(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ni,rf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ni=Ni||document.createElement("div"),Ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nh=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){Nh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function sf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ah=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(Ah[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,or=null,sr=null;function Yu(e){if(e=Ci(e)){if(typeof Tl!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Go(t),Tl(e.stateNode,e.type,t))}}function lf(e){or?sr?sr.push(e):sr=[e]:or=e}function af(){if(or){var e=or,t=sr;if(sr=or=null,Yu(e),t)for(e=0;e<t.length;e++)Yu(t[e])}}function uf(e,t){return e(t)}function cf(){}var bs=!1;function df(e,t,n){if(bs)return e(t,n);bs=!0;try{return uf(e,t,n)}finally{bs=!1,(or!==null||sr!==null)&&(cf(),af())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Dl=!1;if(Vt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Dl=!1}function Th(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var br=!1,po=null,ho=!1,Il=null,Dh={onError:function(e){br=!0,po=e}};function Ih(e,t,n,r,i,o,s,l,a){br=!1,po=null,Th.apply(Dh,arguments)}function _h(e,t,n,r,i,o,s,l,a){if(Ih.apply(this,arguments),br){if(br){var u=po;br=!1,po=null}else throw Error(A(198));ho||(ho=!0,Il=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ff(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qu(e){if($n(e)!==e)throw Error(A(188))}function zh(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qu(i),e;if(o===r)return qu(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function pf(e){return e=zh(e),e!==null?hf(e):null}function hf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hf(e);if(t!==null)return t;e=e.sibling}return null}var mf=nt.unstable_scheduleCallback,Xu=nt.unstable_cancelCallback,Mh=nt.unstable_shouldYield,Fh=nt.unstable_requestPaint,je=nt.unstable_now,$h=nt.unstable_getCurrentPriorityLevel,_a=nt.unstable_ImmediatePriority,gf=nt.unstable_UserBlockingPriority,mo=nt.unstable_NormalPriority,Bh=nt.unstable_LowPriority,vf=nt.unstable_IdlePriority,Vo=null,At=null;function bh(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Vo,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Vh,Uh=Math.log,Hh=Math.LN2;function Vh(e){return e>>>=0,e===0?32:31-(Uh(e)/Hh|0)|0}var Ai=64,Ti=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Fr(l):(o&=s,o!==0&&(r=Fr(o)))}else s=n&~i,s!==0?r=Fr(s):o!==0&&(r=Fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-wt(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Wh(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yf(){var e=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),e}function Us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function Kh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function za(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function xf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wf,Ma,Sf,Cf,Ef,zl=!1,Di=[],ln=null,an=null,un=null,Xr=new Map,ei=new Map,tn=[],Gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ec(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function Pr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ci(t),t!==null&&Ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zh(e,t,n,r,i){switch(t){case"focusin":return ln=Pr(ln,e,t,n,r,i),!0;case"dragenter":return an=Pr(an,e,t,n,r,i),!0;case"mouseover":return un=Pr(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Xr.set(o,Pr(Xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ei.set(o,Pr(ei.get(o)||null,e,t,n,r,i)),!0}return!1}function kf(e){var t=jn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=ff(n),t!==null){e.blockedOn=t,Ef(e.priority,function(){Sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return t=Ci(n),t!==null&&Ma(t),e.blockedOn=n,!1;t.shift()}return!0}function tc(e,t,n){Gi(e)&&n.delete(t)}function Jh(){zl=!1,ln!==null&&Gi(ln)&&(ln=null),an!==null&&Gi(an)&&(an=null),un!==null&&Gi(un)&&(un=null),Xr.forEach(tc),ei.forEach(tc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Jh)))}function ti(e){function t(i){return Nr(i,e)}if(0<Di.length){Nr(Di[0],e);for(var n=1;n<Di.length;n++){var r=Di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Nr(ln,e),an!==null&&Nr(an,e),un!==null&&Nr(un,e),Xr.forEach(t),ei.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)kf(n),n.blockedOn===null&&tn.shift()}var lr=Gt.ReactCurrentBatchConfig,vo=!0;function Yh(e,t,n,r){var i=se,o=lr.transition;lr.transition=null;try{se=1,Fa(e,t,n,r)}finally{se=i,lr.transition=o}}function qh(e,t,n,r){var i=se,o=lr.transition;lr.transition=null;try{se=4,Fa(e,t,n,r)}finally{se=i,lr.transition=o}}function Fa(e,t,n,r){if(vo){var i=Ml(e,t,n,r);if(i===null)qs(e,t,r,yo,n),ec(e,r);else if(Zh(i,e,t,n,r))r.stopPropagation();else if(ec(e,r),t&4&&-1<Gh.indexOf(e)){for(;i!==null;){var o=Ci(i);if(o!==null&&wf(o),o=Ml(e,t,n,r),o===null&&qs(e,t,r,yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qs(e,t,r,null,n)}}var yo=null;function Ml(e,t,n,r){if(yo=null,e=Ia(r),e=jn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ff(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($h()){case _a:return 1;case gf:return 4;case mo:case Bh:return 16;case vf:return 536870912;default:return 16}default:return 16}}var rn=null,$a=null,Zi=null;function Lf(){if(Zi)return Zi;var e,t=$a,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function nc(){return!1}function it(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ii:nc,this.isPropagationStopped=nc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=it(Cr),Si=Se({},Cr,{view:0,detail:0}),Xh=it(Si),Hs,Vs,Ar,Wo=Se({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Hs=e.screenX-Ar.screenX,Vs=e.screenY-Ar.screenY):Vs=Hs=0,Ar=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Vs}}),rc=it(Wo),e0=Se({},Wo,{dataTransfer:0}),t0=it(e0),n0=Se({},Si,{relatedTarget:0}),Ws=it(n0),r0=Se({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),i0=it(r0),o0=Se({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s0=it(o0),l0=Se({},Cr,{data:0}),ic=it(l0),a0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c0[e])?!!t[e]:!1}function ba(){return d0}var f0=Se({},Si,{key:function(e){if(e.key){var t=a0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p0=it(f0),h0=Se({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=it(h0),m0=Se({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),g0=it(m0),v0=Se({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=it(v0),x0=Se({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=it(x0),S0=[9,13,27,32],Ua=Vt&&"CompositionEvent"in window,Ur=null;Vt&&"documentMode"in document&&(Ur=document.documentMode);var C0=Vt&&"TextEvent"in window&&!Ur,Rf=Vt&&(!Ua||Ur&&8<Ur&&11>=Ur),sc=String.fromCharCode(32),lc=!1;function Of(e,t){switch(e){case"keyup":return S0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function E0(e,t){switch(e){case"compositionend":return Pf(t);case"keypress":return t.which!==32?null:(lc=!0,sc);case"textInput":return e=t.data,e===sc&&lc?null:e;default:return null}}function k0(e,t){if(Kn)return e==="compositionend"||!Ua&&Of(e,t)?(e=Lf(),Zi=$a=rn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rf&&t.locale!=="ko"?null:t.data;default:return null}}var j0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j0[e.type]:t==="textarea"}function Nf(e,t,n,r){lf(r),t=xo(t,"onChange"),0<t.length&&(n=new Ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ni=null;function L0(e){bf(e,0)}function Qo(e){var t=Jn(e);if(Xd(t))return e}function R0(e,t){if(e==="change")return t}var Af=!1;if(Vt){var Qs;if(Vt){var Ks="oninput"in document;if(!Ks){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),Ks=typeof uc.oninput=="function"}Qs=Ks}else Qs=!1;Af=Qs&&(!document.documentMode||9<document.documentMode)}function cc(){Hr&&(Hr.detachEvent("onpropertychange",Tf),ni=Hr=null)}function Tf(e){if(e.propertyName==="value"&&Qo(ni)){var t=[];Nf(t,ni,e,Ia(e)),df(L0,t)}}function O0(e,t,n){e==="focusin"?(cc(),Hr=t,ni=n,Hr.attachEvent("onpropertychange",Tf)):e==="focusout"&&cc()}function P0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(ni)}function N0(e,t){if(e==="click")return Qo(t)}function A0(e,t){if(e==="input"||e==="change")return Qo(t)}function T0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:T0;function ri(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,t){var n=dc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dc(n)}}function Df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function If(){for(var e=window,t=fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fo(e.document)}return t}function Ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D0(e){var t=If(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Df(n.ownerDocument.documentElement,n)){if(r!==null&&Ha(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=fc(n,o);var s=fc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I0=Vt&&"documentMode"in document&&11>=document.documentMode,Gn=null,Fl=null,Vr=null,$l=!1;function pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$l||Gn==null||Gn!==fo(r)||(r=Gn,"selectionStart"in r&&Ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&ri(Vr,r)||(Vr=r,r=xo(Fl,"onSelect"),0<r.length&&(t=new Ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Gs={},_f={};Vt&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Ko(e){if(Gs[e])return Gs[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _f)return Gs[e]=t[n];return e}var zf=Ko("animationend"),Mf=Ko("animationiteration"),Ff=Ko("animationstart"),$f=Ko("transitionend"),Bf=new Map,hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){Bf.set(e,t),Fn(t,[e])}for(var Zs=0;Zs<hc.length;Zs++){var Js=hc[Zs],_0=Js.toLowerCase(),z0=Js[0].toUpperCase()+Js.slice(1);wn(_0,"on"+z0)}wn(zf,"onAnimationEnd");wn(Mf,"onAnimationIteration");wn(Ff,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn($f,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function mc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_h(r,t,void 0,e),e.currentTarget=null}function bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;mc(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;mc(i,l,u),o=a}}}if(ho)throw e=Il,ho=!1,Il=null,e}function me(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(Uf(t,e,2,!1),n.add(r))}function Ys(e,t,n){var r=0;t&&(r|=4),Uf(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[zi]){e[zi]=!0,Gd.forEach(function(n){n!=="selectionchange"&&(M0.has(n)||Ys(n,!1,e),Ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,Ys("selectionchange",!1,t))}}function Uf(e,t,n,r){switch(jf(t)){case 1:var i=Yh;break;case 4:i=qh;break;default:i=Fa}n=i.bind(null,t,n,e),i=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=jn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}df(function(){var u=o,d=Ia(n),f=[];e:{var g=Bf.get(e);if(g!==void 0){var x=Ba,v=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":x=p0;break;case"focusin":v="focus",x=Ws;break;case"focusout":v="blur",x=Ws;break;case"beforeblur":case"afterblur":x=Ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=g0;break;case zf:case Mf:case Ff:x=i0;break;case $f:x=y0;break;case"scroll":x=Xh;break;case"wheel":x=w0;break;case"copy":case"cut":case"paste":x=s0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=oc}var y=(t&4)!==0,E=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var p=u,h;p!==null;){h=p;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=qr(p,m),w!=null&&y.push(oi(p,w,h)))),E)break;p=p.return}0<y.length&&(g=new x(g,v,null,n,d),f.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Al&&(v=n.relatedTarget||n.fromElement)&&(jn(v)||v[Wt]))break e;if((x||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?jn(v):null,v!==null&&(E=$n(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(y=rc,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=oc,w="onPointerLeave",m="onPointerEnter",p="pointer"),E=x==null?g:Jn(x),h=v==null?g:Jn(v),g=new y(w,p+"leave",x,n,d),g.target=E,g.relatedTarget=h,w=null,jn(d)===u&&(y=new y(m,p+"enter",v,n,d),y.target=h,y.relatedTarget=E,w=y),E=w,x&&v)t:{for(y=x,m=v,p=0,h=y;h;h=Hn(h))p++;for(h=0,w=m;w;w=Hn(w))h++;for(;0<p-h;)y=Hn(y),p--;for(;0<h-p;)m=Hn(m),h--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Hn(y),m=Hn(m)}y=null}else y=null;x!==null&&gc(f,g,x,y,!1),v!==null&&E!==null&&gc(f,E,v,y,!0)}}e:{if(g=u?Jn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var S=R0;else if(ac(g))if(Af)S=A0;else{S=P0;var C=O0}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=N0);if(S&&(S=S(e,u))){Nf(f,S,n,d);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Ll(g,"number",g.value)}switch(C=u?Jn(u):window,e){case"focusin":(ac(C)||C.contentEditable==="true")&&(Gn=C,Fl=u,Vr=null);break;case"focusout":Vr=Fl=Gn=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,pc(f,n,d);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":pc(f,n,d)}var O;if(Ua)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Kn?Of(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Rf&&n.locale!=="ko"&&(Kn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Kn&&(O=Lf()):(rn=d,$a="value"in rn?rn.value:rn.textContent,Kn=!0)),C=xo(u,L),0<C.length&&(L=new ic(L,e,null,n,d),f.push({event:L,listeners:C}),O?L.data=O:(O=Pf(n),O!==null&&(L.data=O)))),(O=C0?E0(e,n):k0(e,n))&&(u=xo(u,"onBeforeInput"),0<u.length&&(d=new ic("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=O))}bf(f,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qr(e,n),o!=null&&r.unshift(oi(e,o,i)),o=qr(e,t),o!=null&&r.push(oi(e,o,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=qr(n,o),a!=null&&s.unshift(oi(n,a,l))):i||(a=qr(n,o),a!=null&&s.push(oi(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var F0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(F0,`
`).replace($0,"")}function Mi(e,t,n){if(t=vc(t),vc(e)!==t&&n)throw Error(A(425))}function wo(){}var Bl=null,bl=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(U0)}:Hl;function U0(e){setTimeout(function(){throw e})}function Xs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Er,si="__reactProps$"+Er,Wt="__reactContainer$"+Er,Vl="__reactEvents$"+Er,H0="__reactListeners$"+Er,V0="__reactHandles$"+Er;function jn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xc(e);e!==null;){if(n=e[Pt])return n;e=xc(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){return e=e[Pt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Go(e){return e[si]||null}var Wl=[],Yn=-1;function Sn(e){return{current:e}}function ge(e){0>Yn||(e.current=Wl[Yn],Wl[Yn]=null,Yn--)}function he(e,t){Yn++,Wl[Yn]=e.current,e.current=t}var yn={},be=Sn(yn),Je=Sn(!1),An=yn;function dr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function So(){ge(Je),ge(be)}function wc(e,t,n){if(be.current!==yn)throw Error(A(168));he(be,t),he(Je,n)}function Hf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Oh(e)||"Unknown",i));return Se({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,An=be.current,he(be,e),he(Je,Je.current),!0}function Sc(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Hf(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ge(Je),ge(be),he(be,e)):ge(Je),he(Je,n)}var Ft=null,Zo=!1,el=!1;function Vf(e){Ft===null?Ft=[e]:Ft.push(e)}function W0(e){Zo=!0,Vf(e)}function Cn(){if(!el&&Ft!==null){el=!0;var e=0,t=se;try{var n=Ft;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Zo=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),mf(_a,Cn),i}finally{se=t,el=!1}}return null}var qn=[],Xn=0,Eo=null,ko=0,lt=[],at=0,Tn=null,$t=1,Bt="";function En(e,t){qn[Xn++]=ko,qn[Xn++]=Eo,Eo=e,ko=t}function Wf(e,t,n){lt[at++]=$t,lt[at++]=Bt,lt[at++]=Tn,Tn=e;var r=$t;e=Bt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$t=1<<32-wt(t)+i|n<<i|r,Bt=o+e}else $t=1<<o|n<<i|r,Bt=e}function Va(e){e.return!==null&&(En(e,1),Wf(e,1,0))}function Wa(e){for(;e===Eo;)Eo=qn[--Xn],qn[Xn]=null,ko=qn[--Xn],qn[Xn]=null;for(;e===Tn;)Tn=lt[--at],lt[at]=null,Bt=lt[--at],lt[at]=null,$t=lt[--at],lt[at]=null}var tt=null,et=null,ye=!1,yt=null;function Qf(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:$t,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(ye){var t=et;if(t){var n=t;if(!Cc(e,t)){if(Ql(e))throw Error(A(418));t=cn(n.nextSibling);var r=tt;t&&Cc(e,t)?Qf(r,n):(e.flags=e.flags&-4097|2,ye=!1,tt=e)}}else{if(Ql(e))throw Error(A(418));e.flags=e.flags&-4097|2,ye=!1,tt=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Fi(e){if(e!==tt)return!1;if(!ye)return Ec(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=et)){if(Ql(e))throw Kf(),Error(A(418));for(;t;)Qf(e,t),t=cn(t.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?cn(e.stateNode.nextSibling):null;return!0}function Kf(){for(var e=et;e;)e=cn(e.nextSibling)}function fr(){et=tt=null,ye=!1}function Qa(e){yt===null?yt=[e]:yt.push(e)}var Q0=Gt.ReactCurrentBatchConfig;function gt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var jo=Sn(null),Lo=null,er=null,Ka=null;function Ga(){Ka=er=Lo=null}function Za(e){var t=jo.current;ge(jo),e._currentValue=t}function Gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Lo=e,Ka=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(Lo===null)throw Error(A(308));er=e,Lo.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var Ln=null;function Ja(e){Ln===null?Ln=[e]:Ln.push(e)}function Gf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ja(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ja(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function Yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,za(e,n)}}function kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ro(e,t,n,r){var i=e.updateQueue;en=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;s=0,d=u=a=null,l=o;do{var g=l.lane,x=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(g=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(x,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(x,f,g):v,g==null)break e;f=Se({},f,g);break e;case 2:en=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=x,a=f):d=d.next=x,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);In|=s,e.lanes=s,e.memoizedState=f}}function jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Jf=new Kd.Component().refs;function Zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=pn(e),o=bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(St(t,e,i,r),Yi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=pn(e),o=bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(St(t,e,i,r),Yi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=pn(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(St(t,e,r,n),Yi(t,e,r))}};function Lc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,o):!0}function Yf(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=ft(o):(i=Ye(t)?An:be.current,r=t.contextTypes,o=(r=r!=null)?dr(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jf,Ya(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ft(o):(o=Ye(t)?An:be.current,i.context=dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Jo.enqueueReplaceState(i,i.state,null),Ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Jf&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function $i(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function qf(e){function t(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=hn(m,p),m.index=0,m.sibling=null,m}function o(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,h,w){return p===null||p.tag!==6?(p=ll(h,m.mode,w),p.return=m,p):(p=i(p,h),p.return=m,p)}function a(m,p,h,w){var S=h.type;return S===Qn?d(m,p,h.props.children,w,h.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xt&&Oc(S)===p.type)?(w=i(p,h.props),w.ref=Tr(m,p,h),w.return=m,w):(w=ro(h.type,h.key,h.props,null,m.mode,w),w.ref=Tr(m,p,h),w.return=m,w)}function u(m,p,h,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=al(h,m.mode,w),p.return=m,p):(p=i(p,h.children||[]),p.return=m,p)}function d(m,p,h,w,S){return p===null||p.tag!==7?(p=Pn(h,m.mode,w,S),p.return=m,p):(p=i(p,h),p.return=m,p)}function f(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ll(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oi:return h=ro(p.type,p.key,p.props,null,m.mode,h),h.ref=Tr(m,null,p),h.return=m,h;case Wn:return p=al(p,m.mode,h),p.return=m,p;case Xt:var w=p._init;return f(m,w(p._payload),h)}if(Mr(p)||Rr(p))return p=Pn(p,m.mode,h,null),p.return=m,p;$i(m,p)}return null}function g(m,p,h,w){var S=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(m,p,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Oi:return h.key===S?a(m,p,h,w):null;case Wn:return h.key===S?u(m,p,h,w):null;case Xt:return S=h._init,g(m,p,S(h._payload),w)}if(Mr(h)||Rr(h))return S!==null?null:d(m,p,h,w,null);$i(m,h)}return null}function x(m,p,h,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,l(p,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oi:return m=m.get(w.key===null?h:w.key)||null,a(p,m,w,S);case Wn:return m=m.get(w.key===null?h:w.key)||null,u(p,m,w,S);case Xt:var C=w._init;return x(m,p,h,C(w._payload),S)}if(Mr(w)||Rr(w))return m=m.get(h)||null,d(p,m,w,S,null);$i(p,w)}return null}function v(m,p,h,w){for(var S=null,C=null,O=p,L=p=0,k=null;O!==null&&L<h.length;L++){O.index>L?(k=O,O=null):k=O.sibling;var M=g(m,O,h[L],w);if(M===null){O===null&&(O=k);break}e&&O&&M.alternate===null&&t(m,O),p=o(M,p,L),C===null?S=M:C.sibling=M,C=M,O=k}if(L===h.length)return n(m,O),ye&&En(m,L),S;if(O===null){for(;L<h.length;L++)O=f(m,h[L],w),O!==null&&(p=o(O,p,L),C===null?S=O:C.sibling=O,C=O);return ye&&En(m,L),S}for(O=r(m,O);L<h.length;L++)k=x(O,m,L,h[L],w),k!==null&&(e&&k.alternate!==null&&O.delete(k.key===null?L:k.key),p=o(k,p,L),C===null?S=k:C.sibling=k,C=k);return e&&O.forEach(function(re){return t(m,re)}),ye&&En(m,L),S}function y(m,p,h,w){var S=Rr(h);if(typeof S!="function")throw Error(A(150));if(h=S.call(h),h==null)throw Error(A(151));for(var C=S=null,O=p,L=p=0,k=null,M=h.next();O!==null&&!M.done;L++,M=h.next()){O.index>L?(k=O,O=null):k=O.sibling;var re=g(m,O,M.value,w);if(re===null){O===null&&(O=k);break}e&&O&&re.alternate===null&&t(m,O),p=o(re,p,L),C===null?S=re:C.sibling=re,C=re,O=k}if(M.done)return n(m,O),ye&&En(m,L),S;if(O===null){for(;!M.done;L++,M=h.next())M=f(m,M.value,w),M!==null&&(p=o(M,p,L),C===null?S=M:C.sibling=M,C=M);return ye&&En(m,L),S}for(O=r(m,O);!M.done;L++,M=h.next())M=x(O,m,L,M.value,w),M!==null&&(e&&M.alternate!==null&&O.delete(M.key===null?L:M.key),p=o(M,p,L),C===null?S=M:C.sibling=M,C=M);return e&&O.forEach(function(ee){return t(m,ee)}),ye&&En(m,L),S}function E(m,p,h,w){if(typeof h=="object"&&h!==null&&h.type===Qn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Oi:e:{for(var S=h.key,C=p;C!==null;){if(C.key===S){if(S=h.type,S===Qn){if(C.tag===7){n(m,C.sibling),p=i(C,h.props.children),p.return=m,m=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xt&&Oc(S)===C.type){n(m,C.sibling),p=i(C,h.props),p.ref=Tr(m,C,h),p.return=m,m=p;break e}n(m,C);break}else t(m,C);C=C.sibling}h.type===Qn?(p=Pn(h.props.children,m.mode,w,h.key),p.return=m,m=p):(w=ro(h.type,h.key,h.props,null,m.mode,w),w.ref=Tr(m,p,h),w.return=m,m=w)}return s(m);case Wn:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(m,p.sibling),p=i(p,h.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=al(h,m.mode,w),p.return=m,m=p}return s(m);case Xt:return C=h._init,E(m,p,C(h._payload),w)}if(Mr(h))return v(m,p,h,w);if(Rr(h))return y(m,p,h,w);$i(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,h),p.return=m,m=p):(n(m,p),p=ll(h,m.mode,w),p.return=m,m=p),s(m)):n(m,p)}return E}var pr=qf(!0),Xf=qf(!1),Ei={},Tt=Sn(Ei),li=Sn(Ei),ai=Sn(Ei);function Rn(e){if(e===Ei)throw Error(A(174));return e}function qa(e,t){switch(he(ai,t),he(li,e),he(Tt,Ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}ge(Tt),he(Tt,t)}function hr(){ge(Tt),ge(li),ge(ai)}function ep(e){Rn(ai.current);var t=Rn(Tt.current),n=Ol(t,e.type);t!==n&&(he(li,e),he(Tt,n))}function Xa(e){li.current===e&&(ge(Tt),ge(li))}var xe=Sn(0);function Oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function eu(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var qi=Gt.ReactCurrentDispatcher,nl=Gt.ReactCurrentBatchConfig,Dn=0,we=null,Oe=null,Te=null,Po=!1,Wr=!1,ui=0,K0=0;function Fe(){throw Error(A(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function nu(e,t,n,r,i,o){if(Dn=o,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?Y0:q0,e=n(r,i),Wr){o=0;do{if(Wr=!1,ui=0,25<=o)throw Error(A(301));o+=1,Te=Oe=null,t.updateQueue=null,qi.current=X0,e=n(r,i)}while(Wr)}if(qi.current=No,t=Oe!==null&&Oe.next!==null,Dn=0,Te=Oe=we=null,Po=!1,t)throw Error(A(300));return e}function ru(){var e=ui!==0;return ui=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?we.memoizedState=Te=e:Te=Te.next=e,Te}function pt(){if(Oe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Te===null?we.memoizedState:Te.next;if(t!==null)Te=t,Oe=e;else{if(e===null)throw Error(A(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Te===null?we.memoizedState=Te=e:Te=Te.next=e}return Te}function ci(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=pt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((Dn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,we.lanes|=d,In|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Et(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,we.lanes|=o,In|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=pt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Et(o,t.memoizedState)||(Ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function tp(){}function np(e,t){var n=we,r=pt(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,Ze=!0),r=r.queue,iu(op.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,di(9,ip.bind(null,n,r,i,t),void 0,null),De===null)throw Error(A(349));Dn&30||rp(n,t,i)}return i}function rp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ip(e,t,n,r){t.value=n,t.getSnapshot=r,sp(t)&&lp(e)}function op(e,t,n){return n(function(){sp(t)&&lp(e)})}function sp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function lp(e){var t=Qt(e,1);t!==null&&St(t,e,1,-1)}function Pc(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=J0.bind(null,we,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ap(){return pt().memoizedState}function Xi(e,t,n,r){var i=Ot();we.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(Oe!==null){var s=Oe.memoizedState;if(o=s.destroy,r!==null&&tu(r,s.deps)){i.memoizedState=di(t,n,o,r);return}}we.flags|=e,i.memoizedState=di(1|t,n,o,r)}function Nc(e,t){return Xi(8390656,8,e,t)}function iu(e,t){return Yo(2048,8,e,t)}function up(e,t){return Yo(4,2,e,t)}function cp(e,t){return Yo(4,4,e,t)}function dp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fp(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4,4,dp.bind(null,t,e),n)}function ou(){}function pp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mp(e,t,n){return Dn&21?(Et(n,t)||(n=yf(),we.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function G0(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{se=n,nl.transition=r}}function gp(){return pt().memoizedState}function Z0(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vp(e))yp(t,n);else if(n=Gf(e,t,n,r),n!==null){var i=We();St(n,e,r,i),xp(n,t,r)}}function J0(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vp(e))yp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Et(l,s)){var a=t.interleaved;a===null?(i.next=i,Ja(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Gf(e,t,i,r),n!==null&&(i=We(),St(n,e,r,i),xp(n,t,r))}}function vp(e){var t=e.alternate;return e===we||t!==null&&t===we}function yp(e,t){Wr=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,za(e,n)}}var No={readContext:ft,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Y0={readContext:ft,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Nc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,dp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z0.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:ou,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=G0.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Ot();if(ye){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),De===null)throw Error(A(349));Dn&30||rp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Nc(op.bind(null,r,o,e),[e]),r.flags|=2048,di(9,ip.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ot(),t=De.identifierPrefix;if(ye){var n=Bt,r=$t;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},q0={readContext:ft,useCallback:pp,useContext:ft,useEffect:iu,useImperativeHandle:fp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:hp,useReducer:rl,useRef:ap,useState:function(){return rl(ci)},useDebugValue:ou,useDeferredValue:function(e){var t=pt();return mp(t,Oe.memoizedState,e)},useTransition:function(){var e=rl(ci)[0],t=pt().memoizedState;return[e,t]},useMutableSource:tp,useSyncExternalStore:np,useId:gp,unstable_isNewReconciler:!1},X0={readContext:ft,useCallback:pp,useContext:ft,useEffect:iu,useImperativeHandle:fp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:hp,useReducer:il,useRef:ap,useState:function(){return il(ci)},useDebugValue:ou,useDeferredValue:function(e){var t=pt();return Oe===null?t.memoizedState=e:mp(t,Oe.memoizedState,e)},useTransition:function(){var e=il(ci)[0],t=pt().memoizedState;return[e,t]},useMutableSource:tp,useSyncExternalStore:np,useId:gp,unstable_isNewReconciler:!1};function mr(e,t){try{var n="",r=t;do n+=Rh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var em=typeof WeakMap=="function"?WeakMap:Map;function wp(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){To||(To=!0,la=r),Yl(e,t)},n}function Sp(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Yl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yl(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new em;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hm.bind(null,e,t,n),t.then(e,e))}function Tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var tm=Gt.ReactCurrentOwner,Ze=!1;function He(e,t,n,r){t.child=e===null?Xf(t,null,n,r):pr(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var o=t.ref;return ar(t,i),r=nu(e,t,n,r,o,i),n=ru(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(ye&&n&&Va(t),t.flags|=1,He(e,t,r,i),t.child)}function _c(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!pu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Cp(e,t,o,r,i)):(e=ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(s,r)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Cp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ri(o,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return ql(e,t,n,r,i)}function Ep(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(nr,Xe),Xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(nr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(nr,Xe),Xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(nr,Xe),Xe|=r;return He(e,t,i,n),t.child}function kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,i){var o=Ye(n)?An:be.current;return o=dr(t,o),ar(t,i),n=nu(e,t,n,r,o,i),r=ru(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(ye&&r&&Va(t),t.flags|=1,He(e,t,n,i),t.child)}function zc(e,t,n,r,i){if(Ye(n)){var o=!0;Co(t)}else o=!1;if(ar(t,i),t.stateNode===null)eo(e,t),Yf(t,n,r),Jl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Ye(n)?An:be.current,u=dr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Rc(t,s,r,u),en=!1;var g=t.memoizedState;s.state=g,Ro(t,r,s,i),a=t.memoizedState,l!==r||g!==a||Je.current||en?(typeof d=="function"&&(Zl(t,n,d,r),a=t.memoizedState),(l=en||Lc(t,n,l,r,g,a,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Zf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:gt(t.type,l),s.props=u,f=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=ft(a):(a=Ye(n)?An:be.current,a=dr(t,a));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||g!==a)&&Rc(t,s,r,a),en=!1,g=t.memoizedState,s.state=g,Ro(t,r,s,i);var v=t.memoizedState;l!==f||g!==v||Je.current||en?(typeof x=="function"&&(Zl(t,n,x,r),v=t.memoizedState),(u=en||Lc(t,n,u,r,g,v,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,o,i)}function Xl(e,t,n,r,i,o){kp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Sc(t,n,!1),Kt(e,t,o);r=t.stateNode,tm.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=pr(t,e.child,null,o),t.child=pr(t,null,l,o)):He(e,t,l,o),t.memoizedState=r.state,i&&Sc(t,n,!0),t.child}function jp(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),qa(e,t.containerInfo)}function Mc(e,t,n,r,i){return fr(),Qa(i),t.flags|=256,He(e,t,n,r),t.child}var ea={dehydrated:null,treeContext:null,retryLane:0};function ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lp(e,t,n){var r=t.pendingProps,i=xe.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(xe,i&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=es(s,r,0,null),e=Pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ta(n),t.memoizedState=ea,e):su(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nm(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=hn(l,o):(o=Pn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ta(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ea,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function su(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bi(e,t,n,r){return r!==null&&Qa(r),pr(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(A(422))),Bi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=Pn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pr(t,e.child,null,s),t.child.memoizedState=ta(s),t.memoizedState=ea,o);if(!(t.mode&1))return Bi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(A(419)),r=ol(o,r,void 0),Bi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ze||l){if(r=De,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),St(r,e,i,-1))}return fu(),r=ol(Error(A(421))),Bi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,et=cn(i.nextSibling),tt=t,ye=!0,yt=null,e!==null&&(lt[at++]=$t,lt[at++]=Bt,lt[at++]=Tn,$t=e.id,Bt=e.overflow,Tn=t),t=su(t,r.children),t.flags|=4096,t)}function Fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,n)}function sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,n,t);else if(e.tag===19)Fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,o);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rm(e,t,n){switch(t.tag){case 3:jp(t),fr();break;case 5:ep(t);break;case 1:Ye(t.type)&&Co(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?Lp(e,t,n):(he(xe,xe.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);he(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ep(e,t,n)}return Kt(e,t,n)}var Op,na,Pp,Np;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};na=function(){};Pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(Tt.current);var o=null;switch(n){case"input":i=kl(e,i),r=kl(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=Rl(e,i),r=Rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}Pl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&me("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Np=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dr(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function im(e,t,n){var r=t.pendingProps;switch(Wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Ye(t.type)&&So(),$e(t),null;case 3:return r=t.stateNode,hr(),ge(Je),ge(be),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(ca(yt),yt=null))),na(e,t),$e(t),null;case 5:Xa(t);var i=Rn(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)Pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return $e(t),null}if(e=Rn(Tt.current),Fi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[si]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)me($r[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Ku(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":Zu(r,o),me("invalid",r)}Pl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",""+l]):Jr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&me("scroll",r)}switch(n){case"input":Pi(r),Gu(r,o,!0);break;case"textarea":Pi(r),Ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pt]=t,e[si]=r,Op(e,t,!1,!1),t.stateNode=e;e:{switch(s=Nl(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)me($r[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Ku(e,r),i=kl(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),me("invalid",e);break;case"textarea":Zu(e,r),i=Rl(e,r),me("invalid",e);break;default:i=r}Pl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?sf(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rf(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Yr(e,a):typeof a=="number"&&Yr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&me("scroll",e):a!=null&&Na(e,o,a,s))}switch(n){case"input":Pi(e),Gu(e,r,!1);break;case"textarea":Pi(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ir(e,!!r.multiple,o,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Np(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Rn(ai.current),Rn(Tt.current),Fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return $e(t),null;case 13:if(ge(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&et!==null&&t.mode&1&&!(t.flags&128))Kf(),fr(),t.flags|=98560,o=!1;else if(o=Fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Pt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),o=!1}else yt!==null&&(ca(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Pe===0&&(Pe=3):fu())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return hr(),na(e,t),e===null&&ii(t.stateNode.containerInfo),$e(t),null;case 10:return Za(t.type._context),$e(t),null;case 17:return Ye(t.type)&&So(),$e(t),null;case 19:if(ge(xe),o=t.memoizedState,o===null)return $e(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Dr(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Oo(e),s!==null){for(t.flags|=128,Dr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(xe,xe.current&1|2),t.child}e=e.sibling}o.tail!==null&&je()>gr&&(t.flags|=128,r=!0,Dr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Oo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ye)return $e(t),null}else 2*je()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Dr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,n=xe.current,he(xe,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function om(e,t){switch(Wa(t),t.tag){case 1:return Ye(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),ge(Je),ge(be),eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xa(t),null;case 13:if(ge(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(xe),null;case 4:return hr(),null;case 10:return Za(t.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var bi=!1,Be=!1,sm=typeof WeakSet=="function"?WeakSet:Set,$=null;function tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function ra(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var $c=!1;function lm(e,t){if(Bl=vo,e=If(),Ha(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===n&&++u===i&&(l=s),g===o&&++d===r&&(a=s),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},vo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:gt(t.type,y),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){Ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return v=$c,$c=!1,v}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ra(t,n,o)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ap(e){var t=e.alternate;t!==null&&(e.alternate=null,Ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[si],delete t[Vl],delete t[H0],delete t[V0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tp(e){return e.tag===5||e.tag===3||e.tag===4}function Bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}var _e=null,vt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Dp(e,t,n),n=n.sibling}function Dp(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:Be||tr(n,t);case 6:var r=_e,i=vt;_e=null,Yt(e,t,n),_e=r,vt=i,_e!==null&&(vt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(vt?(e=_e,n=n.stateNode,e.nodeType===8?Xs(e.parentNode,n):e.nodeType===1&&Xs(e,n),ti(e)):Xs(_e,n.stateNode));break;case 4:r=_e,i=vt,_e=n.stateNode.containerInfo,vt=!0,Yt(e,t,n),_e=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ra(n,t,s),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Be&&(tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Yt(e,t,n),Be=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sm),t.forEach(function(r){var i=gm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,vt=!1;break e;case 3:_e=l.stateNode.containerInfo,vt=!0;break e;case 4:_e=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(_e===null)throw Error(A(160));Dp(o,s,i),_e=null,vt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ip(t,e),t=t.sibling}function Ip(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Rt(e),r&4){try{Qr(3,e,e.return),qo(3,e)}catch(y){Ce(e,e.return,y)}try{Qr(5,e,e.return)}catch(y){Ce(e,e.return,y)}}break;case 1:mt(t,e),Rt(e),r&512&&n!==null&&tr(n,n.return);break;case 5:if(mt(t,e),Rt(e),r&512&&n!==null&&tr(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(y){Ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ef(i,o),Nl(l,s);var u=Nl(l,o);for(s=0;s<a.length;s+=2){var d=a[s],f=a[s+1];d==="style"?sf(i,f):d==="dangerouslySetInnerHTML"?rf(i,f):d==="children"?Yr(i,f):Na(i,d,f,u)}switch(l){case"input":jl(i,o);break;case"textarea":tf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ir(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?ir(i,!!o.multiple,o.defaultValue,!0):ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[si]=o}catch(y){Ce(e,e.return,y)}}break;case 6:if(mt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ce(e,e.return,y)}}break;case 3:if(mt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(y){Ce(e,e.return,y)}break;case 4:mt(t,e),Rt(e);break;case 13:mt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(uu=je())),r&4&&bc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||d,mt(t,e),Be=u):mt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for($=e,d=e.child;d!==null;){for(f=$=d;$!==null;){switch(g=$,x=g.child,g.tag){case 0:case 11:case 14:case 15:Qr(4,g,g.return);break;case 1:tr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){Ce(r,n,y)}}break;case 5:tr(g,g.return);break;case 22:if(g.memoizedState!==null){Hc(f);continue}}x!==null?(x.return=g,$=x):Hc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=of("display",s))}catch(y){Ce(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Ce(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(t,e),Rt(e),r&4&&bc(e);break;case 21:break;default:mt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tp(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var o=Bc(e);sa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Bc(e);oa(e,l,s);break;default:throw Error(A(161))}}catch(a){Ce(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function am(e,t,n){$=e,_p(e)}function _p(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||bi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Be;l=bi;var u=Be;if(bi=s,(Be=a)&&!u)for($=i;$!==null;)s=$,a=s.child,s.tag===22&&s.memoizedState!==null?Vc(i):a!==null?(a.return=s,$=a):Vc(i);for(;o!==null;)$=o,_p(o),o=o.sibling;$=i,bi=l,Be=u}Uc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):Uc(e)}}function Uc(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&jc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Be||t.flags&512&&ia(t)}catch(g){Ce(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Hc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Vc(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(a){Ce(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Ce(t,i,a)}}var o=t.return;try{ia(t)}catch(a){Ce(t,o,a)}break;case 5:var s=t.return;try{ia(t)}catch(a){Ce(t,s,a)}}}catch(a){Ce(t,t.return,a)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var um=Math.ceil,Ao=Gt.ReactCurrentDispatcher,lu=Gt.ReactCurrentOwner,ct=Gt.ReactCurrentBatchConfig,ne=0,De=null,Re=null,ze=0,Xe=0,nr=Sn(0),Pe=0,fi=null,In=0,Xo=0,au=0,Kr=null,Ge=null,uu=0,gr=1/0,Mt=null,To=!1,la=null,fn=null,Ui=!1,on=null,Do=0,Gr=0,aa=null,to=-1,no=0;function We(){return ne&6?je():to!==-1?to:to=je()}function pn(e){return e.mode&1?ne&2&&ze!==0?ze&-ze:Q0.transition!==null?(no===0&&(no=yf()),no):(e=se,e!==0||(e=window.event,e=e===void 0?16:jf(e.type)),e):1}function St(e,t,n,r){if(50<Gr)throw Gr=0,aa=null,Error(A(185));wi(e,n,r),(!(ne&2)||e!==De)&&(e===De&&(!(ne&2)&&(Xo|=n),Pe===4&&nn(e,ze)),qe(e,r),n===1&&ne===0&&!(t.mode&1)&&(gr=je()+500,Zo&&Cn()))}function qe(e,t){var n=e.callbackNode;Qh(e,t);var r=go(e,e===De?ze:0);if(r===0)n!==null&&Xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xu(n),t===1)e.tag===0?W0(Wc.bind(null,e)):Vf(Wc.bind(null,e)),b0(function(){!(ne&6)&&Cn()}),n=null;else{switch(xf(r)){case 1:n=_a;break;case 4:n=gf;break;case 16:n=mo;break;case 536870912:n=vf;break;default:n=mo}n=Hp(n,zp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zp(e,t){if(to=-1,no=0,ne&6)throw Error(A(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=go(e,e===De?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=ne;ne|=2;var o=Fp();(De!==e||ze!==t)&&(Mt=null,gr=je()+500,On(e,t));do try{fm();break}catch(l){Mp(e,l)}while(1);Ga(),Ao.current=o,ne=i,Re!==null?t=0:(De=null,ze=0,t=Pe)}if(t!==0){if(t===2&&(i=_l(e),i!==0&&(r=i,t=ua(e,i))),t===1)throw n=fi,On(e,0),nn(e,r),qe(e,je()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!cm(i)&&(t=Io(e,r),t===2&&(o=_l(e),o!==0&&(r=o,t=ua(e,o))),t===1))throw n=fi,On(e,0),nn(e,r),qe(e,je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:kn(e,Ge,Mt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=uu+500-je(),10<t)){if(go(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hl(kn.bind(null,e,Ge,Mt),t);break}kn(e,Ge,Mt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-wt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*um(r/1960))-r,10<r){e.timeoutHandle=Hl(kn.bind(null,e,Ge,Mt),r);break}kn(e,Ge,Mt);break;case 5:kn(e,Ge,Mt);break;default:throw Error(A(329))}}}return qe(e,je()),e.callbackNode===n?zp.bind(null,e):null}function ua(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&ca(t)),e}function ca(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~au,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function Wc(e){if(ne&6)throw Error(A(327));ur();var t=go(e,0);if(!(t&1))return qe(e,je()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=ua(e,r))}if(n===1)throw n=fi,On(e,0),nn(e,t),qe(e,je()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ge,Mt),qe(e,je()),null}function cu(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(gr=je()+500,Zo&&Cn())}}function _n(e){on!==null&&on.tag===0&&!(ne&6)&&ur();var t=ne;ne|=1;var n=ct.transition,r=se;try{if(ct.transition=null,se=1,e)return e()}finally{se=r,ct.transition=n,ne=t,!(ne&6)&&Cn()}}function du(){Xe=nr.current,ge(nr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B0(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:hr(),ge(Je),ge(be),eu();break;case 5:Xa(r);break;case 4:hr();break;case 13:ge(xe);break;case 19:ge(xe);break;case 10:Za(r.type._context);break;case 22:case 23:du()}n=n.return}if(De=e,Re=e=hn(e.current,null),ze=Xe=t,Pe=0,fi=null,au=Xo=In=0,Ge=Kr=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ln=null}return e}function Mp(e,t){do{var n=Re;try{if(Ga(),qi.current=No,Po){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(Dn=0,Te=Oe=we=null,Wr=!1,ui=0,lu.current=null,n===null||n.return===null){Pe=1,fi=t,Re=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=ze,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Tc(s);if(x!==null){x.flags&=-257,Dc(x,s,l,o,t),x.mode&1&&Ac(o,u,t),t=x,a=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(a),t.updateQueue=y}else v.add(a);break e}else{if(!(t&1)){Ac(o,u,t),fu();break e}a=Error(A(426))}}else if(ye&&l.mode&1){var E=Tc(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Dc(E,s,l,o,t),Qa(mr(a,l));break e}}o=a=mr(a,l),Pe!==4&&(Pe=2),Kr===null?Kr=[o]:Kr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=wp(o,a,t);kc(o,m);break e;case 1:l=a;var p=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fn===null||!fn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Sp(o,l,t);kc(o,w);break e}}o=o.return}while(o!==null)}Bp(n)}catch(S){t=S,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function Fp(){var e=Ao.current;return Ao.current=No,e===null?No:e}function fu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),De===null||!(In&268435455)&&!(Xo&268435455)||nn(De,ze)}function Io(e,t){var n=ne;ne|=2;var r=Fp();(De!==e||ze!==t)&&(Mt=null,On(e,t));do try{dm();break}catch(i){Mp(e,i)}while(1);if(Ga(),ne=n,Ao.current=r,Re!==null)throw Error(A(261));return De=null,ze=0,Pe}function dm(){for(;Re!==null;)$p(Re)}function fm(){for(;Re!==null&&!Mh();)$p(Re)}function $p(e){var t=Up(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Bp(e):Re=t,lu.current=null}function Bp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=om(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Re=null;return}}else if(n=im(n,t,Xe),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Pe===0&&(Pe=5)}function kn(e,t,n){var r=se,i=ct.transition;try{ct.transition=null,se=1,pm(e,t,n,r)}finally{ct.transition=i,se=r}return null}function pm(e,t,n,r){do ur();while(on!==null);if(ne&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kh(e,o),e===De&&(Re=De=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ui||(Ui=!0,Hp(mo,function(){return ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ct.transition,ct.transition=null;var s=se;se=1;var l=ne;ne|=4,lu.current=null,lm(e,n),Ip(n,e),D0(bl),vo=!!Bl,bl=Bl=null,e.current=n,am(n),Fh(),ne=l,se=s,ct.transition=o}else e.current=n;if(Ui&&(Ui=!1,on=e,Do=i),o=e.pendingLanes,o===0&&(fn=null),bh(n.stateNode),qe(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(To)throw To=!1,e=la,la=null,e;return Do&1&&e.tag!==0&&ur(),o=e.pendingLanes,o&1?e===aa?Gr++:(Gr=0,aa=e):Gr=0,Cn(),null}function ur(){if(on!==null){var e=xf(Do),t=ct.transition,n=se;try{if(ct.transition=null,se=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Do=0,ne&6)throw Error(A(331));var i=ne;for(ne|=4,$=e.current;$!==null;){var o=$,s=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for($=u;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Qr(8,d,o)}var f=d.child;if(f!==null)f.return=d,$=f;else for(;$!==null;){d=$;var g=d.sibling,x=d.return;if(Ap(d),d===u){$=null;break}if(g!==null){g.return=x,$=g;break}$=x}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,$=m;break e}$=o.return}}var p=e.current;for($=p;$!==null;){s=$;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,$=h;else e:for(s=p;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qo(9,l)}}catch(S){Ce(l,l.return,S)}if(l===s){$=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,$=w;break e}$=l.return}}if(ne=i,Cn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Vo,e)}catch{}r=!0}return r}finally{se=n,ct.transition=t}}return!1}function Qc(e,t,n){t=mr(n,t),t=wp(e,t,1),e=dn(e,t,1),t=We(),e!==null&&(wi(e,1,t),qe(e,t))}function Ce(e,t,n){if(e.tag===3)Qc(e,e,n);else for(;t!==null;){if(t.tag===3){Qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=mr(n,e),e=Sp(t,e,1),t=dn(t,e,1),e=We(),t!==null&&(wi(t,1,e),qe(t,e));break}}t=t.return}}function hm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(ze&n)===n&&(Pe===4||Pe===3&&(ze&130023424)===ze&&500>je()-uu?On(e,0):au|=n),qe(e,t)}function bp(e,t){t===0&&(e.mode&1?(t=Ti,Ti<<=1,!(Ti&130023424)&&(Ti=4194304)):t=1);var n=We();e=Qt(e,t),e!==null&&(wi(e,t,n),qe(e,n))}function mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bp(e,n)}function gm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),bp(e,n)}var Up;Up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,rm(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ye&&t.flags&1048576&&Wf(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eo(e,t),e=t.pendingProps;var i=dr(t,be.current);ar(t,n),i=nu(null,t,r,e,i,n);var o=ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(o=!0,Co(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ya(t),i.updater=Jo,t.stateNode=i,i._reactInternals=t,Jl(t,r,e,n),t=Xl(null,t,r,!0,o,n)):(t.tag=0,ye&&o&&Va(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ym(r),e=gt(r,e),i){case 0:t=ql(null,t,r,e,n);break e;case 1:t=zc(null,t,r,e,n);break e;case 11:t=Ic(null,t,r,e,n);break e;case 14:t=_c(null,t,r,gt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),zc(e,t,r,i,n);case 3:e:{if(jp(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Zf(e,t),Ro(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mr(Error(A(423)),t),t=Mc(e,t,r,n,i);break e}else if(r!==i){i=mr(Error(A(424)),t),t=Mc(e,t,r,n,i);break e}else for(et=cn(t.stateNode.containerInfo.firstChild),tt=t,ye=!0,yt=null,n=Xf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=Kt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return ep(t),e===null&&Kl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ul(r,i)?s=null:o!==null&&Ul(r,o)&&(t.flags|=32),kp(e,t),He(e,t,s,n),t.child;case 6:return e===null&&Kl(t),null;case 13:return Lp(e,t,n);case 4:return qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Ic(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,he(jo,r._currentValue),r._currentValue=s,o!==null)if(Et(o.value,s)){if(o.children===i.children&&!Je.current){t=Kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=bt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gl(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=ft(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=gt(r,t.pendingProps),i=gt(r.type,i),_c(e,t,r,i,n);case 15:return Cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),eo(e,t),t.tag=1,Ye(r)?(e=!0,Co(t)):e=!1,ar(t,n),Yf(t,r,i),Jl(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return Rp(e,t,n);case 22:return Ep(e,t,n)}throw Error(A(156,t.tag))};function Hp(e,t){return mf(e,t)}function vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new vm(e,t,n,r)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ym(e){if(typeof e=="function")return pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ta)return 11;if(e===Da)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")pu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qn:return Pn(n.children,i,o,t);case Aa:s=8,i|=8;break;case wl:return e=ut(12,n,t,i|2),e.elementType=wl,e.lanes=o,e;case Sl:return e=ut(13,n,t,i),e.elementType=Sl,e.lanes=o,e;case Cl:return e=ut(19,n,t,i),e.elementType=Cl,e.lanes=o,e;case Yd:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zd:s=10;break e;case Jd:s=9;break e;case Ta:s=11;break e;case Da:s=14;break e;case Xt:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=ut(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Pn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Yd,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hu(e,t,n,r,i,o,s,l,a){return e=new xm(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(o),e}function wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vp(e){if(!e)return yn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Hf(e,n,t)}return t}function Wp(e,t,n,r,i,o,s,l,a){return e=hu(n,r,!0,e,i,o,s,l,a),e.context=Vp(null),n=e.current,r=We(),i=pn(n),o=bt(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,wi(e,i,r),qe(e,r),e}function ts(e,t,n,r){var i=t.current,o=We(),s=pn(i);return n=Vp(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,s),e!==null&&(St(e,i,s,o),Yi(e,i,s)),s}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function Sm(){return null}var Qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}ns.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ts(e,t,null,null)};ns.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){ts(null,e,null,null)}),t[Wt]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&kf(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function Cm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=_o(s);o.call(u)}}var s=Wp(t,r,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=s,e[Wt]=s.current,ii(e.nodeType===8?e.parentNode:e),_n(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=_o(a);l.call(u)}}var a=hu(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=a,e[Wt]=a.current,ii(e.nodeType===8?e.parentNode:e),_n(function(){ts(t,a,n,r)}),a}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=_o(s);l.call(a)}}ts(t,s,e,i)}else s=Cm(n,t,e,i,r);return _o(s)}wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(za(t,n|1),qe(t,je()),!(ne&6)&&(gr=je()+500,Cn()))}break;case 13:_n(function(){var r=Qt(e,1);if(r!==null){var i=We();St(r,e,1,i)}}),mu(e,1)}};Ma=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=We();St(t,e,134217728,n)}mu(e,134217728)}};Sf=function(e){if(e.tag===13){var t=pn(e),n=Qt(e,t);if(n!==null){var r=We();St(n,e,t,r)}mu(e,t)}};Cf=function(){return se};Ef=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};Tl=function(e,t,n){switch(t){case"input":if(jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Go(r);if(!i)throw Error(A(90));Xd(r),jl(r,i)}}}break;case"textarea":tf(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};uf=cu;cf=_n;var Em={usingClientEntryPoint:!1,Events:[Ci,Jn,Go,lf,af,cu]},Ir={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},km={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pf(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||Sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hi.isDisabled&&Hi.supportsFiber)try{Vo=Hi.inject(km),At=Hi}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Em;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(A(200));return wm(e,t,null,n)};rt.createRoot=function(e,t){if(!vu(e))throw Error(A(299));var n=!1,r="",i=Qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hu(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,ii(e.nodeType===8?e.parentNode:e),new gu(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=pf(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return _n(e)};rt.hydrate=function(e,t,n){if(!rs(t))throw Error(A(200));return is(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Qp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Wp(t,null,e,1,n??null,i,!1,o,s),e[Wt]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};rt.render=function(e,t,n){if(!rs(t))throw Error(A(200));return is(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!rs(e))throw Error(A(40));return e._reactRootContainer?(_n(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};rt.unstable_batchedUpdates=cu;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return is(e,t,n,!1,r)};rt.version="18.2.0-next-9e3b772b8-20220608";function Kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)}catch(e){console.error(e)}}Kp(),Vd.exports=rt;var jm=Vd.exports,Zc=jm;yl.createRoot=Zc.createRoot,yl.hydrateRoot=Zc.hydrateRoot;var Gp={exports:{}},le={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=Symbol.for("react.element"),xu=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),ls=Symbol.for("react.profiler"),as=Symbol.for("react.provider"),us=Symbol.for("react.context"),Lm=Symbol.for("react.server_context"),cs=Symbol.for("react.forward_ref"),ds=Symbol.for("react.suspense"),fs=Symbol.for("react.suspense_list"),ps=Symbol.for("react.memo"),hs=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),Zp;Zp=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yu:switch(e=e.type,e){case os:case ls:case ss:case ds:case fs:return e;default:switch(e=e&&e.$$typeof,e){case Lm:case us:case cs:case hs:case ps:case as:return e;default:return t}}case xu:return t}}}le.ContextConsumer=us;le.ContextProvider=as;le.Element=yu;le.ForwardRef=cs;le.Fragment=os;le.Lazy=hs;le.Memo=ps;le.Portal=xu;le.Profiler=ls;le.StrictMode=ss;le.Suspense=ds;le.SuspenseList=fs;le.isAsyncMode=function(){return!1};le.isConcurrentMode=function(){return!1};le.isContextConsumer=function(e){return ht(e)===us};le.isContextProvider=function(e){return ht(e)===as};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yu};le.isForwardRef=function(e){return ht(e)===cs};le.isFragment=function(e){return ht(e)===os};le.isLazy=function(e){return ht(e)===hs};le.isMemo=function(e){return ht(e)===ps};le.isPortal=function(e){return ht(e)===xu};le.isProfiler=function(e){return ht(e)===ls};le.isStrictMode=function(e){return ht(e)===ss};le.isSuspense=function(e){return ht(e)===ds};le.isSuspenseList=function(e){return ht(e)===fs};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===os||e===ls||e===ss||e===ds||e===fs||e===Rm||typeof e=="object"&&e!==null&&(e.$$typeof===hs||e.$$typeof===ps||e.$$typeof===as||e.$$typeof===us||e.$$typeof===cs||e.$$typeof===Zp||e.getModuleId!==void 0)};le.typeOf=ht;Gp.exports=le;var Jp=Gp.exports;function Om(e){function t(T,I,_,V,j){for(var K=0,D=0,oe=0,J=0,F,z,H=0,b=0,B,ie=B=F=0,G=0,ue=0,_t=0,ke=0,Lt=_.length,zt=Lt-1,Ue,Q="",pe="",Un="",zs="",Jt;G<Lt;){if(z=_.charCodeAt(G),G===zt&&D+J+oe+K!==0&&(D!==0&&(z=D===47?10:47),J=oe=K=0,Lt++,zt++),D+J+oe+K===0){if(G===zt&&(0<ue&&(Q=Q.replace(g,"")),0<Q.trim().length)){switch(z){case 32:case 9:case 59:case 13:case 10:break;default:Q+=_.charAt(G)}z=59}switch(z){case 123:for(Q=Q.trim(),F=Q.charCodeAt(0),B=1,ke=++G;G<Lt;){switch(z=_.charCodeAt(G)){case 123:B++;break;case 125:B--;break;case 47:switch(z=_.charCodeAt(G+1)){case 42:case 47:e:{for(ie=G+1;ie<zt;++ie)switch(_.charCodeAt(ie)){case 47:if(z===42&&_.charCodeAt(ie-1)===42&&G+2!==ie){G=ie+1;break e}break;case 10:if(z===47){G=ie+1;break e}}G=ie}}break;case 91:z++;case 40:z++;case 34:case 39:for(;G++<zt&&_.charCodeAt(G)!==z;);}if(B===0)break;G++}switch(B=_.substring(ke,G),F===0&&(F=(Q=Q.replace(f,"").trim()).charCodeAt(0)),F){case 64:switch(0<ue&&(Q=Q.replace(g,"")),z=Q.charCodeAt(1),z){case 100:case 109:case 115:case 45:ue=I;break;default:ue=Le}if(B=t(I,ue,B,z,j+1),ke=B.length,0<N&&(ue=n(Le,Q,_t),Jt=l(3,B,ue,I,Z,ee,ke,z,j,V),Q=ue.join(""),Jt!==void 0&&(ke=(B=Jt.trim()).length)===0&&(z=0,B="")),0<ke)switch(z){case 115:Q=Q.replace(C,s);case 100:case 109:case 45:B=Q+"{"+B+"}";break;case 107:Q=Q.replace(p,"$1 $2"),B=Q+"{"+B+"}",B=de===1||de===2&&o("@"+B,3)?"@-webkit-"+B+"@"+B:"@"+B;break;default:B=Q+B,V===112&&(B=(pe+=B,""))}else B="";break;default:B=t(I,n(I,Q,_t),B,V,j+1)}Un+=B,B=_t=ue=ie=F=0,Q="",z=_.charCodeAt(++G);break;case 125:case 59:if(Q=(0<ue?Q.replace(g,""):Q).trim(),1<(ke=Q.length))switch(ie===0&&(F=Q.charCodeAt(0),F===45||96<F&&123>F)&&(ke=(Q=Q.replace(" ",":")).length),0<N&&(Jt=l(1,Q,I,T,Z,ee,pe.length,V,j,V))!==void 0&&(ke=(Q=Jt.trim()).length)===0&&(Q="\0\0"),F=Q.charCodeAt(0),z=Q.charCodeAt(1),F){case 0:break;case 64:if(z===105||z===99){zs+=Q+_.charAt(G);break}default:Q.charCodeAt(ke-1)!==58&&(pe+=i(Q,F,z,Q.charCodeAt(2)))}_t=ue=ie=F=0,Q="",z=_.charCodeAt(++G)}}switch(z){case 13:case 10:D===47?D=0:1+F===0&&V!==107&&0<Q.length&&(ue=1,Q+="\0"),0<N*U&&l(0,Q,I,T,Z,ee,pe.length,V,j,V),ee=1,Z++;break;case 59:case 125:if(D+J+oe+K===0){ee++;break}default:switch(ee++,Ue=_.charAt(G),z){case 9:case 32:if(J+K+D===0)switch(H){case 44:case 58:case 9:case 32:Ue="";break;default:z!==32&&(Ue=" ")}break;case 0:Ue="\\0";break;case 12:Ue="\\f";break;case 11:Ue="\\v";break;case 38:J+D+K===0&&(ue=_t=1,Ue="\f"+Ue);break;case 108:if(J+D+K+fe===0&&0<ie)switch(G-ie){case 2:H===112&&_.charCodeAt(G-3)===58&&(fe=H);case 8:b===111&&(fe=b)}break;case 58:J+D+K===0&&(ie=G);break;case 44:D+oe+J+K===0&&(ue=1,Ue+="\r");break;case 34:case 39:D===0&&(J=J===z?0:J===0?z:J);break;case 91:J+D+oe===0&&K++;break;case 93:J+D+oe===0&&K--;break;case 41:J+D+K===0&&oe--;break;case 40:if(J+D+K===0){if(F===0)switch(2*H+3*b){case 533:break;default:F=1}oe++}break;case 64:D+oe+J+K+ie+B===0&&(B=1);break;case 42:case 47:if(!(0<J+K+oe))switch(D){case 0:switch(2*z+3*_.charCodeAt(G+1)){case 235:D=47;break;case 220:ke=G,D=42}break;case 42:z===47&&H===42&&ke+2!==G&&(_.charCodeAt(ke+2)===33&&(pe+=_.substring(ke,G+1)),Ue="",D=0)}}D===0&&(Q+=Ue)}b=H,H=z,G++}if(ke=pe.length,0<ke){if(ue=I,0<N&&(Jt=l(2,pe,ue,T,Z,ee,ke,V,j,V),Jt!==void 0&&(pe=Jt).length===0))return zs+pe+Un;if(pe=ue.join(",")+"{"+pe+"}",de*fe!==0){switch(de!==2||o(pe,2)||(fe=0),fe){case 111:pe=pe.replace(w,":-moz-$1")+pe;break;case 112:pe=pe.replace(h,"::-webkit-input-$1")+pe.replace(h,"::-moz-$1")+pe.replace(h,":-ms-input-$1")+pe}fe=0}}return zs+pe+Un}function n(T,I,_){var V=I.trim().split(E);I=V;var j=V.length,K=T.length;switch(K){case 0:case 1:var D=0;for(T=K===0?"":T[0]+" ";D<j;++D)I[D]=r(T,I[D],_).trim();break;default:var oe=D=0;for(I=[];D<j;++D)for(var J=0;J<K;++J)I[oe++]=r(T[J]+" ",V[D],_).trim()}return I}function r(T,I,_){var V=I.charCodeAt(0);switch(33>V&&(V=(I=I.trim()).charCodeAt(0)),V){case 38:return I.replace(m,"$1"+T.trim());case 58:return T.trim()+I.replace(m,"$1"+T.trim());default:if(0<1*_&&0<I.indexOf("\f"))return I.replace(m,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+I}function i(T,I,_,V){var j=T+";",K=2*I+3*_+4*V;if(K===944){T=j.indexOf(":",9)+1;var D=j.substring(T,j.length-1).trim();return D=j.substring(0,T).trim()+D+";",de===1||de===2&&o(D,1)?"-webkit-"+D+D:D}if(de===0||de===2&&!o(j,1))return j;switch(K){case 1015:return j.charCodeAt(10)===97?"-webkit-"+j+j:j;case 951:return j.charCodeAt(3)===116?"-webkit-"+j+j:j;case 963:return j.charCodeAt(5)===110?"-webkit-"+j+j:j;case 1009:if(j.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+j+j;case 978:return"-webkit-"+j+"-moz-"+j+j;case 1019:case 983:return"-webkit-"+j+"-moz-"+j+"-ms-"+j+j;case 883:if(j.charCodeAt(8)===45)return"-webkit-"+j+j;if(0<j.indexOf("image-set(",11))return j.replace(re,"$1-webkit-$2")+j;break;case 932:if(j.charCodeAt(4)===45)switch(j.charCodeAt(5)){case 103:return"-webkit-box-"+j.replace("-grow","")+"-webkit-"+j+"-ms-"+j.replace("grow","positive")+j;case 115:return"-webkit-"+j+"-ms-"+j.replace("shrink","negative")+j;case 98:return"-webkit-"+j+"-ms-"+j.replace("basis","preferred-size")+j}return"-webkit-"+j+"-ms-"+j+j;case 964:return"-webkit-"+j+"-ms-flex-"+j+j;case 1023:if(j.charCodeAt(8)!==99)break;return D=j.substring(j.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+j+"-ms-flex-pack"+D+j;case 1005:return v.test(j)?j.replace(x,":-webkit-")+j.replace(x,":-moz-")+j:j;case 1e3:switch(D=j.substring(13).trim(),I=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(I)){case 226:D=j.replace(S,"tb");break;case 232:D=j.replace(S,"tb-rl");break;case 220:D=j.replace(S,"lr");break;default:return j}return"-webkit-"+j+"-ms-"+D+j;case 1017:if(j.indexOf("sticky",9)===-1)break;case 975:switch(I=(j=T).length-10,D=(j.charCodeAt(I)===33?j.substring(0,I):j).substring(T.indexOf(":",7)+1).trim(),K=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:j=j.replace(D,"-webkit-"+D)+";"+j;break;case 207:case 102:j=j.replace(D,"-webkit-"+(102<K?"inline-":"")+"box")+";"+j.replace(D,"-webkit-"+D)+";"+j.replace(D,"-ms-"+D+"box")+";"+j}return j+";";case 938:if(j.charCodeAt(5)===45)switch(j.charCodeAt(6)){case 105:return D=j.replace("-items",""),"-webkit-"+j+"-webkit-box-"+D+"-ms-flex-"+D+j;case 115:return"-webkit-"+j+"-ms-flex-item-"+j.replace(L,"")+j;default:return"-webkit-"+j+"-ms-flex-line-pack"+j.replace("align-content","").replace(L,"")+j}break;case 973:case 989:if(j.charCodeAt(3)!==45||j.charCodeAt(4)===122)break;case 931:case 953:if(M.test(T)===!0)return(D=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?i(T.replace("stretch","fill-available"),I,_,V).replace(":fill-available",":stretch"):j.replace(D,"-webkit-"+D)+j.replace(D,"-moz-"+D.replace("fill-",""))+j;break;case 962:if(j="-webkit-"+j+(j.charCodeAt(5)===102?"-ms-"+j:"")+j,_+V===211&&j.charCodeAt(13)===105&&0<j.indexOf("transform",10))return j.substring(0,j.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+j}return j}function o(T,I){var _=T.indexOf(I===1?":":"{"),V=T.substring(0,I!==3?_:10);return _=T.substring(_+1,T.length-1),W(I!==2?V:V.replace(k,"$1"),_,I)}function s(T,I){var _=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return _!==I+";"?_.replace(O," or ($1)").substring(4):"("+I+")"}function l(T,I,_,V,j,K,D,oe,J,F){for(var z=0,H=I,b;z<N;++z)switch(b=ve[z].call(d,T,H,_,V,j,K,D,oe,J,F)){case void 0:case!1:case!0:case null:break;default:H=b}if(H!==I)return H}function a(T){switch(T){case void 0:case null:N=ve.length=0;break;default:if(typeof T=="function")ve[N++]=T;else if(typeof T=="object")for(var I=0,_=T.length;I<_;++I)a(T[I]);else U=!!T|0}return a}function u(T){return T=T.prefix,T!==void 0&&(W=null,T?typeof T!="function"?de=1:(de=2,W=T):de=0),u}function d(T,I){var _=T;if(33>_.charCodeAt(0)&&(_=_.trim()),Y=_,_=[Y],0<N){var V=l(-1,I,_,_,Z,ee,0,0,0,0);V!==void 0&&typeof V=="string"&&(I=V)}var j=t(Le,_,I,0,0);return 0<N&&(V=l(-2,j,_,_,Z,ee,j.length,0,0,0),V!==void 0&&(j=V)),Y="",fe=0,ee=Z=1,j}var f=/^\0+/g,g=/[\0\r\f]/g,x=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,E=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,w=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,L=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,re=/([^-])(image-set\()/,ee=1,Z=1,fe=0,de=1,Le=[],ve=[],N=0,W=null,U=0,Y="";return d.use=a,d.set=u,e!==void 0&&u(e),d}var Pm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Nm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Am=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Jc=Nm(function(e){return Am.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Yp={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,wu=Ie?Symbol.for("react.element"):60103,Su=Ie?Symbol.for("react.portal"):60106,ms=Ie?Symbol.for("react.fragment"):60107,gs=Ie?Symbol.for("react.strict_mode"):60108,vs=Ie?Symbol.for("react.profiler"):60114,ys=Ie?Symbol.for("react.provider"):60109,xs=Ie?Symbol.for("react.context"):60110,Cu=Ie?Symbol.for("react.async_mode"):60111,ws=Ie?Symbol.for("react.concurrent_mode"):60111,Ss=Ie?Symbol.for("react.forward_ref"):60112,Cs=Ie?Symbol.for("react.suspense"):60113,Tm=Ie?Symbol.for("react.suspense_list"):60120,Es=Ie?Symbol.for("react.memo"):60115,ks=Ie?Symbol.for("react.lazy"):60116,Dm=Ie?Symbol.for("react.block"):60121,Im=Ie?Symbol.for("react.fundamental"):60117,_m=Ie?Symbol.for("react.responder"):60118,zm=Ie?Symbol.for("react.scope"):60119;function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wu:switch(e=e.type,e){case Cu:case ws:case ms:case vs:case gs:case Cs:return e;default:switch(e=e&&e.$$typeof,e){case xs:case Ss:case ks:case Es:case ys:return e;default:return t}}case Su:return t}}}function qp(e){return ot(e)===ws}ae.AsyncMode=Cu;ae.ConcurrentMode=ws;ae.ContextConsumer=xs;ae.ContextProvider=ys;ae.Element=wu;ae.ForwardRef=Ss;ae.Fragment=ms;ae.Lazy=ks;ae.Memo=Es;ae.Portal=Su;ae.Profiler=vs;ae.StrictMode=gs;ae.Suspense=Cs;ae.isAsyncMode=function(e){return qp(e)||ot(e)===Cu};ae.isConcurrentMode=qp;ae.isContextConsumer=function(e){return ot(e)===xs};ae.isContextProvider=function(e){return ot(e)===ys};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wu};ae.isForwardRef=function(e){return ot(e)===Ss};ae.isFragment=function(e){return ot(e)===ms};ae.isLazy=function(e){return ot(e)===ks};ae.isMemo=function(e){return ot(e)===Es};ae.isPortal=function(e){return ot(e)===Su};ae.isProfiler=function(e){return ot(e)===vs};ae.isStrictMode=function(e){return ot(e)===gs};ae.isSuspense=function(e){return ot(e)===Cs};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ms||e===ws||e===vs||e===gs||e===Cs||e===Tm||typeof e=="object"&&e!==null&&(e.$$typeof===ks||e.$$typeof===Es||e.$$typeof===ys||e.$$typeof===xs||e.$$typeof===Ss||e.$$typeof===Im||e.$$typeof===_m||e.$$typeof===zm||e.$$typeof===Dm)};ae.typeOf=ot;Yp.exports=ae;var Mm=Yp.exports,Eu=Mm,Fm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$m={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ku={};ku[Eu.ForwardRef]=Bm;ku[Eu.Memo]=Xp;function Yc(e){return Eu.isMemo(e)?Xp:ku[e.$$typeof]||Fm}var bm=Object.defineProperty,Um=Object.getOwnPropertyNames,qc=Object.getOwnPropertySymbols,Hm=Object.getOwnPropertyDescriptor,Vm=Object.getPrototypeOf,Xc=Object.prototype;function e1(e,t,n){if(typeof t!="string"){if(Xc){var r=Vm(t);r&&r!==Xc&&e1(e,r,n)}var i=Um(t);qc&&(i=i.concat(qc(t)));for(var o=Yc(e),s=Yc(t),l=0;l<i.length;++l){var a=i[l];if(!$m[a]&&!(n&&n[a])&&!(s&&s[a])&&!(o&&o[a])){var u=Hm(t,a);try{bm(e,a,u)}catch{}}}}return e}var Wm=e1;const Qm=Dd(Wm);function xt(){return(xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ed=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},da=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Jp.typeOf(e)},zo=Object.freeze([]),mn=Object.freeze({});function vr(e){return typeof e=="function"}function td(e){return e.displayName||e.name||"Component"}function ju(e){return e&&typeof e.styledComponentId=="string"}var yr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Lu=typeof window<"u"&&"HTMLElement"in window,Km=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Gm={};function zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Zm=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&zn(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var l=o;l<s;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,l=o;l<s;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),io=new Map,Mo=new Map,Zr=1,Vi=function(e){if(io.has(e))return io.get(e);for(;Mo.has(Zr);)Zr++;var t=Zr++;return io.set(e,t),Mo.set(t,e),t},Jm=function(e){return Mo.get(e)},Ym=function(e,t){t>=Zr&&(Zr=t+1),io.set(e,t),Mo.set(t,e)},qm="style["+yr+'][data-styled-version="5.3.11"]',Xm=new RegExp("^"+yr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),eg=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},tg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var l=s.match(Xm);if(l){var a=0|parseInt(l[1],10),u=l[2];a!==0&&(Ym(u,a),eg(e,u,l[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(s)}}},ng=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},t1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var d=a[u];if(d&&d.nodeType===1&&d.hasAttribute(yr))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(yr,"active"),r.setAttribute("data-styled-version","5.3.11");var s=ng();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},rg=function(){function e(n){var r=this.element=t1(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,l=o.length;s<l;s++){var a=o[s];if(a.ownerNode===i)return a}zn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ig=function(){function e(n){var r=this.element=t1(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),og=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),nd=Lu,sg={isServer:!Lu,useCSSOMInjection:!Km},Fo=function(){function e(n,r,i){n===void 0&&(n=mn),r===void 0&&(r={}),this.options=xt({},sg,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Lu&&nd&&(nd=!1,function(o){for(var s=document.querySelectorAll(qm),l=0,a=s.length;l<a;l++){var u=s[l];u&&u.getAttribute(yr)!=="active"&&(tg(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Vi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(xt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new og(s):o?new rg(s):new ig(s),new Zm(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Vi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Vi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Vi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var l=Jm(s);if(l!==void 0){var a=n.names.get(l),u=r.getGroup(s);if(a&&u&&a.size){var d=yr+".g"+s+'[id="'+l+'"]',f="";a!==void 0&&a.forEach(function(g){g.length>0&&(f+=g+",")}),o+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),lg=/(a)(d)/gi,rd=function(e){return String.fromCharCode(e+(e>25?39:97))};function fa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rd(t%52)+n;return(rd(t%52)+n).replace(lg,"$1-$2")}var rr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},n1=function(e){return rr(5381,e)};function r1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vr(n)&&!ju(n))return!1}return!0}var ag=n1("5.3.11"),ug=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&r1(t),this.componentId=n,this.baseHash=rr(ag,n),this.baseStyle=r,Fo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=Mn(this.rules,t,n,r).join(""),l=fa(rr(this.baseHash,s)>>>0);if(!n.hasNameForId(i,l)){var a=r(s,"."+l,void 0,i);n.insertRules(i,l,a)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=rr(this.baseHash,r.hash),f="",g=0;g<u;g++){var x=this.rules[g];if(typeof x=="string")f+=x;else if(x){var v=Mn(x,t,n,r),y=Array.isArray(v)?v.join(""):v;d=rr(d,y+g),f+=y}}if(f){var E=fa(d>>>0);if(!n.hasNameForId(i,E)){var m=r(f,"."+E,void 0,i);n.insertRules(i,E,m)}o.push(E)}}return o.join(" ")},e}(),cg=/^\s*\/\/.*$/gm,dg=[":","[",".","#"];function fg(e){var t,n,r,i,o=e===void 0?mn:e,s=o.options,l=s===void 0?mn:s,a=o.plugins,u=a===void 0?zo:a,d=new Om(l),f=[],g=function(y){function E(m){if(m)try{y(m+"}")}catch{}}return function(m,p,h,w,S,C,O,L,k,M){switch(m){case 1:if(k===0&&p.charCodeAt(0)===64)return y(p+";"),"";break;case 2:if(L===0)return p+"/*|*/";break;case 3:switch(L){case 102:case 112:return y(h[0]+p),"";default:return p+(M===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(E)}}}(function(y){f.push(y)}),x=function(y,E,m){return E===0&&dg.indexOf(m[n.length])!==-1||m.match(i)?y:"."+t};function v(y,E,m,p){p===void 0&&(p="&");var h=y.replace(cg,""),w=E&&m?m+" "+E+" { "+h+" }":h;return t=p,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(m||!E?"":E,w)}return d.use([].concat(u,[function(y,E,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,x))},g,function(y){if(y===-2){var E=f;return f=[],E}}])),v.hash=u.length?u.reduce(function(y,E){return E.name||zn(15),rr(y,E.name)},5381).toString():"",v}var i1=Ve.createContext();i1.Consumer;var o1=Ve.createContext(),pg=(o1.Consumer,new Fo),pa=fg();function s1(){return R.useContext(i1)||pg}function l1(){return R.useContext(o1)||pa}var hg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=pa);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return zn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=pa),this.name+t.hash},e}(),mg=/([A-Z])/,gg=/([A-Z])/g,vg=/^ms-/,yg=function(e){return"-"+e.toLowerCase()};function id(e){return mg.test(e)?e.replace(gg,yg).replace(vg,"-ms-"):e}var od=function(e){return e==null||e===!1||e===""};function Mn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,l=e.length;s<l;s+=1)(i=Mn(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(od(e))return"";if(ju(e))return"."+e.styledComponentId;if(vr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Mn(a,t,n,r)}var u;return e instanceof hg?n?(e.inject(n,r),e.getName(r)):e:da(e)?function d(f,g){var x,v,y=[];for(var E in f)f.hasOwnProperty(E)&&!od(f[E])&&(Array.isArray(f[E])&&f[E].isCss||vr(f[E])?y.push(id(E)+":",f[E],";"):da(f[E])?y.push.apply(y,d(f[E],E)):y.push(id(E)+": "+(x=E,(v=f[E])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||x in Pm||x.startsWith("--")?String(v).trim():v+"px")+";"));return g?[g+" {"].concat(y,["}"]):y}(e):e.toString()}var sd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function a1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return vr(e)||da(e)?sd(Mn(ed(zo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:sd(Mn(ed(e,n)))}var u1=function(e,t,n){return n===void 0&&(n=mn),e.theme!==n.theme&&e.theme||t||n.theme},xg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wg=/(^-|-$)/g;function ul(e){return e.replace(xg,"-").replace(wg,"")}var c1=function(e){return fa(n1(e)>>>0)};function Wi(e){return typeof e=="string"&&!0}var ha=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Sg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Cg(e,t,n){var r=e[n];ha(t)&&ha(r)?d1(r,t):e[n]=t}function d1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(ha(s))for(var l in s)Sg(l)&&Cg(e,s[l],l)}return e}var pi=Ve.createContext();pi.Consumer;function Eg(e){var t=R.useContext(pi),n=R.useMemo(function(){return function(r,i){if(!r)return zn(14);if(vr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?zn(8):i?xt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Ve.createElement(pi.Provider,{value:n},e.children):null}var cl={};function f1(e,t,n){var r=ju(e),i=!Wi(e),o=t.attrs,s=o===void 0?zo:o,l=t.componentId,a=l===void 0?function(p,h){var w=typeof p!="string"?"sc":ul(p);cl[w]=(cl[w]||0)+1;var S=w+"-"+c1("5.3.11"+w+cl[w]);return h?h+"-"+S:S}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(p){return Wi(p)?"styled."+p:"Styled("+td(p)+")"}(e):u,f=t.displayName&&t.componentId?ul(t.displayName)+"-"+t.componentId:t.componentId||a,g=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(p,h,w){return e.shouldForwardProp(p,h,w)&&t.shouldForwardProp(p,h,w)}:e.shouldForwardProp);var v,y=new ug(n,f,r?e.componentStyle:void 0),E=y.isStatic&&s.length===0,m=function(p,h){return function(w,S,C,O){var L=w.attrs,k=w.componentStyle,M=w.defaultProps,re=w.foldedComponentIds,ee=w.shouldForwardProp,Z=w.styledComponentId,fe=w.target,de=function(V,j,K){V===void 0&&(V=mn);var D=xt({},j,{theme:V}),oe={};return K.forEach(function(J){var F,z,H,b=J;for(F in vr(b)&&(b=b(D)),b)D[F]=oe[F]=F==="className"?(z=oe[F],H=b[F],z&&H?z+" "+H:z||H):b[F]}),[D,oe]}(u1(S,R.useContext(pi),M)||mn,S,L),Le=de[0],ve=de[1],N=function(V,j,K,D){var oe=s1(),J=l1(),F=j?V.generateAndInjectStyles(mn,oe,J):V.generateAndInjectStyles(K,oe,J);return F}(k,O,Le),W=C,U=ve.$as||S.$as||ve.as||S.as||fe,Y=Wi(U),T=ve!==S?xt({},S,{},ve):S,I={};for(var _ in T)_[0]!=="$"&&_!=="as"&&(_==="forwardedAs"?I.as=T[_]:(ee?ee(_,Jc,U):!Y||Jc(_))&&(I[_]=T[_]));return S.style&&ve.style!==S.style&&(I.style=xt({},S.style,{},ve.style)),I.className=Array.prototype.concat(re,Z,N!==Z?N:null,S.className,ve.className).filter(Boolean).join(" "),I.ref=W,R.createElement(U,I)}(v,p,h,E)};return m.displayName=d,(v=Ve.forwardRef(m)).attrs=g,v.componentStyle=y,v.displayName=d,v.shouldForwardProp=x,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):zo,v.styledComponentId=f,v.target=r?e.target:e,v.withComponent=function(p){var h=t.componentId,w=function(C,O){if(C==null)return{};var L,k,M={},re=Object.keys(C);for(k=0;k<re.length;k++)L=re[k],O.indexOf(L)>=0||(M[L]=C[L]);return M}(t,["componentId"]),S=h&&h+"-"+(Wi(p)?p:ul(td(p)));return f1(p,xt({},w,{attrs:g,componentId:S}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?d1({},e.defaultProps,p):p}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&Qm(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var ma=function(e){return function t(n,r,i){if(i===void 0&&(i=mn),!Jp.isValidElementType(r))return zn(1,String(r));var o=function(){return n(r,i,a1.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,xt({},i,{},s))},o.attrs=function(s){return t(n,r,xt({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(f1,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ma[e]=ma(e)});var kg=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=r1(n),Fo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(Mn(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Fo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function jg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=a1.apply(void 0,[e].concat(n)),o="sc-global-"+c1(JSON.stringify(i)),s=new kg(i,o);function l(u){var d=s1(),f=l1(),g=R.useContext(pi),x=R.useRef(d.allocateGSInstance(o)).current;return d.server&&a(x,u,d,g,f),R.useLayoutEffect(function(){if(!d.server)return a(x,u,d,g,f),function(){return s.removeStyles(x,d)}},[x,u,d,g,f]),null}function a(u,d,f,g,x){if(s.isStatic)s.renderStyles(u,Gm,f,x);else{var v=xt({},d,{theme:u1(d,g,l.defaultProps)});s.renderStyles(u,v,f,x)}}return Ve.memo(l)}const q=ma,Lg=jg`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme:e})=>e.COLORS.BACKGROUND};
    color: ${({theme:e})=>e.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const ld="popstate";function Rg(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return ga("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:p1(i)}return Pg(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ru(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Og(){return Math.random().toString(36).substr(2,8)}function ad(e,t){return{usr:e.state,key:e.key,idx:t}}function ga(e,t,n,r){return n===void 0&&(n=null),hi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||Og()})}function p1(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=sn.Pop,a=null,u=d();u==null&&(u=0,s.replaceState(hi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=sn.Pop;let E=d(),m=E==null?null:E-u;u=E,a&&a({action:l,location:y.location,delta:m})}function g(E,m){l=sn.Push;let p=ga(y.location,E,m);n&&n(p,E),u=d()+1;let h=ad(p,u),w=y.createHref(p);try{s.pushState(h,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&a&&a({action:l,location:y.location,delta:1})}function x(E,m){l=sn.Replace;let p=ga(y.location,E,m);n&&n(p,E),u=d();let h=ad(p,u),w=y.createHref(p);s.replaceState(h,"",w),o&&a&&a({action:l,location:y.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:p1(E);return Ne(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return l},get location(){return e(i,s)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ld,f),a=E,()=>{i.removeEventListener(ld,f),a=null}},createHref(E){return t(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:x,go(E){return s.go(E)}};return y}var ud;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ud||(ud={}));function Ng(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,i=g1(r.pathname||"/",n);if(i==null)return null;let o=h1(e);Ag(o);let s=null;for(let l=0;s==null&&l<o.length;++l)s=Bg(o[l],Hg(i));return s}function h1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(Ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Nn([r,a.relativePath]),d=n.concat(a);o.children&&o.children.length>0&&(Ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),h1(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Fg(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of m1(o.path))i(o,s,a)}),t}function m1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=m1(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function Ag(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$g(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Tg=/^:\w+$/,Dg=3,Ig=2,_g=1,zg=10,Mg=-2,cd=e=>e==="*";function Fg(e,t){let n=e.split("/"),r=n.length;return n.some(cd)&&(r+=Mg),t&&(r+=Ig),n.filter(i=>!cd(i)).reduce((i,o)=>i+(Tg.test(o)?Dg:o===""?_g:zg),r)}function $g(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Bg(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let l=n[s],a=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=bg({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;o.push({params:r,pathname:Nn([i,d.pathname]),pathnameBase:Zg(Nn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Nn([i,d.pathnameBase]))}return o}function bg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ug(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let g=l[f]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=Vg(l[f]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Ug(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ru(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hg(e){try{return decodeURI(e)}catch(t){return Ru(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vg(e,t){try{return decodeURIComponent(e)}catch(n){return Ru(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function g1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Wg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:Qg(n,t):t,search:Jg(r),hash:Yg(i)}}function Qg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kr(e):(i=hi({},e),Ne(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(r||s==null)l=n;else{let f=t.length-1;if(s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}l=f>=0?t[f]:"/"}let a=Wg(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),Zg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const v1=["post","put","patch","delete"];new Set(v1);const Xg=["get",...v1];new Set(Xg);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}const Ou=R.createContext(null),e2=R.createContext(null),js=R.createContext(null),Ls=R.createContext(null),Bn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),y1=R.createContext(null);function Rs(){return R.useContext(Ls)!=null}function x1(){return Rs()||Ne(!1),R.useContext(Ls).location}function w1(e){R.useContext(js).static||R.useLayoutEffect(e)}function kt(){let{isDataRoute:e}=R.useContext(Bn);return e?p2():t2()}function t2(){Rs()||Ne(!1);let e=R.useContext(Ou),{basename:t,navigator:n}=R.useContext(js),{matches:r}=R.useContext(Bn),{pathname:i}=x1(),o=JSON.stringify(Kg(r).map(a=>a.pathnameBase)),s=R.useRef(!1);return w1(()=>{s.current=!0}),R.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){n.go(a);return}let d=Gg(a,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Nn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}function S1(){let{matches:e}=R.useContext(Bn),t=e[e.length-1];return t?t.params:{}}function n2(e,t){return r2(e,t)}function r2(e,t,n){Rs()||Ne(!1);let{navigator:r}=R.useContext(js),{matches:i}=R.useContext(Bn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let a=x1(),u;if(t){var d;let y=typeof t=="string"?kr(t):t;l==="/"||(d=y.pathname)!=null&&d.startsWith(l)||Ne(!1),u=y}else u=a;let f=u.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",x=Ng(e,{pathname:g}),v=a2(x&&x.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Nn([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Nn([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&v?R.createElement(Ls.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:sn.Pop}},v):v}function i2(){let e=f2(),t=qg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,o)}const o2=R.createElement(i2,null);class s2 extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R.createElement(Bn.Provider,{value:this.props.routeContext},R.createElement(y1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l2(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(Ou);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Bn.Provider,{value:t},r)}function a2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let l=o.findIndex(a=>a.route.id&&(s==null?void 0:s[a.route.id]));l>=0||Ne(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,a,u)=>{let d=a.route.id?s==null?void 0:s[a.route.id]:null,f=null;n&&(f=a.route.errorElement||o2);let g=t.concat(o.slice(0,u+1)),x=()=>{let v;return d?v=f:a.route.Component?v=R.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,R.createElement(l2,{match:a,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?R.createElement(s2,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var va;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(va||(va={}));var mi;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(mi||(mi={}));function u2(e){let t=R.useContext(Ou);return t||Ne(!1),t}function c2(e){let t=R.useContext(e2);return t||Ne(!1),t}function d2(e){let t=R.useContext(Bn);return t||Ne(!1),t}function C1(e){let t=d2(),n=t.matches[t.matches.length-1];return n.route.id||Ne(!1),n.route.id}function f2(){var e;let t=R.useContext(y1),n=c2(mi.UseRouteError),r=C1(mi.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function p2(){let{router:e}=u2(va.UseNavigateStable),t=C1(mi.UseNavigateStable),n=R.useRef(!1);return w1(()=>{n.current=!0}),R.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,$o({fromRouteId:t},o)))},[e,t])}function st(e){Ne(!1)}function h2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:o,static:s=!1}=e;Rs()&&Ne(!1);let l=t.replace(/^\/*/,"/"),a=R.useMemo(()=>({basename:l,navigator:o,static:s}),[l,o,s]);typeof r=="string"&&(r=kr(r));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:x="default"}=r,v=R.useMemo(()=>{let y=g1(u,l);return y==null?null:{location:{pathname:y,search:d,hash:f,state:g,key:x},navigationType:i}},[l,u,d,f,g,x,i]);return v==null?null:R.createElement(js.Provider,{value:a},R.createElement(Ls.Provider,{children:n,value:v}))}function ya(e){let{children:t,location:n}=e;return n2(xa(t),n)}var dd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(dd||(dd={}));new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;let o=[...t,i];if(r.type===R.Fragment){n.push.apply(n,xa(r.props.children,o));return}r.type!==st&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=xa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const m2="startTransition",fd=mh[m2];function g2(e){let{basename:t,children:n,future:r,window:i}=e,o=R.useRef();o.current==null&&(o.current=Rg({window:i,v5Compat:!0}));let s=o.current,[l,a]=R.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=R.useCallback(f=>{u&&fd?fd(()=>a(f)):a(f)},[a,u]);return R.useLayoutEffect(()=>s.listen(d),[s,d]),R.createElement(h2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s})}var pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(pd||(pd={}));var hd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hd||(hd={}));const v2=q.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex: 1;
  align-items: center;

  background: none;

  border: 1px solid #fff;
  border-radius: 5px;
 
  > input {
      width: 100%;
      height: 16px;
      background: transparent;
      border: none;

      gap: 10px;
      padding: 14px;

      color: ${({theme:e})=>e.COLORS.WHITE};

      border: 0;

        @media (max-width: 400px) {
        padding: 2px
      }
    }

    > svg {
      margin-left: 16px;
      min-width: 15px;

      @media (max-width: 400px) {
        margin-left: 4px;
      }
    }



`;function Ct({icon:e,span:t,children:n,...r}){return c.jsxs(v2,{children:[e||null,t||null,c.jsx("span",{}),c.jsx("input",{...r})]})}const y2=q.button`
  width: 100%;
  max-height: 50px;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins', sans-serif ;
  font-weight: 500;
  
  border: 0;
  padding: 12px;
  border-radius: 5px;
  line-height: 24px;
  
  color: ${({theme:e})=>e.COLORS.BACKGROUND_BUTTON};
  background-color: ${({theme:e})=>e.COLORS.RED};
  
  &:disabled{
    opacity: 0.5;
  }
   svg {
    margin-right: 8px;
   }


`;function bn({title:e,loading:t=!1,icon:n,...r}){return c.jsxs(y2,{type:"button",disabled:t===!0,loading:t===!0?"true":"false",...r,children:[n||null,c.jsx("p",{children:t?"Carregando":e})]})}const x2=q.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
  

  .logo {
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  h1 {
    font-size: 2rem;
  }

  svg {
    margin-right: 0.75rem;
  }

  @media (max-width: 540px) {
    margin: 8px 0;
  }

  }

  .form {
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  gap: 1.6rem;

  max-width: 47rem;
  padding: 6.4rem;

  border-radius: 16px;

  background: ${({theme:e})=>e.COLORS.BACKGROUND_FORM};
    
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;
  }
  

  a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;
  }

  span {
    margin-bottom: 8px;
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  > div span {
    font-family: 'Roboto', sans-serif;
    display: flex;
  }

  @media (max-width: 540px) {
    padding: 3rem;

    h1 {
      font-size: 24px;
    }
  }
}
  `;var E1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},md=Ve.createContext&&Ve.createContext(E1),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gn.apply(this,arguments)},w2=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function k1(e){return e&&e.map(function(t,n){return Ve.createElement(t.tag,gn({key:n},t.attr),k1(t.child))})}function jt(e){return function(t){return Ve.createElement(S2,gn({attr:gn({},e.attr)},t),k1(e.child))}}function S2(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=w2(e,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Ve.createElement("svg",gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:a,style:gn(gn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Ve.createElement("title",null,o),e.children)};return md!==void 0?Ve.createElement(md.Consumer,null,function(n){return t(n)}):t(E1)}function j1(e){return jt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"}}]})(e)}function L1(e,t){return function(){return e.apply(t,arguments)}}const{toString:C2}=Object.prototype,{getPrototypeOf:Pu}=Object,Os=(e=>t=>{const n=C2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),It=e=>(e=e.toLowerCase(),t=>Os(t)===e),Ps=e=>t=>typeof t===e,{isArray:jr}=Array,gi=Ps("undefined");function E2(e){return e!==null&&!gi(e)&&e.constructor!==null&&!gi(e.constructor)&&dt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const R1=It("ArrayBuffer");function k2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&R1(e.buffer),t}const j2=Ps("string"),dt=Ps("function"),O1=Ps("number"),Ns=e=>e!==null&&typeof e=="object",L2=e=>e===!0||e===!1,oo=e=>{if(Os(e)!=="object")return!1;const t=Pu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},R2=It("Date"),O2=It("File"),P2=It("Blob"),N2=It("FileList"),A2=e=>Ns(e)&&dt(e.pipe),T2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||dt(e.append)&&((t=Os(e))==="formdata"||t==="object"&&dt(e.toString)&&e.toString()==="[object FormData]"))},D2=It("URLSearchParams"),I2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ki(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),jr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function P1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const N1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),A1=e=>!gi(e)&&e!==N1;function wa(){const{caseless:e}=A1(this)&&this||{},t={},n=(r,i)=>{const o=e&&P1(t,i)||i;oo(t[o])&&oo(r)?t[o]=wa(t[o],r):oo(r)?t[o]=wa({},r):jr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ki(arguments[r],n);return t}const _2=(e,t,n,{allOwnKeys:r}={})=>(ki(t,(i,o)=>{n&&dt(i)?e[o]=L1(i,n):e[o]=i},{allOwnKeys:r}),e),z2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),M2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},F2=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Pu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},B2=e=>{if(!e)return null;if(jr(e))return e;let t=e.length;if(!O1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},b2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pu(Uint8Array)),U2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},H2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},V2=It("HTMLFormElement"),W2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),gd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Q2=It("RegExp"),T1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ki(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},K2=e=>{T1(e,(t,n)=>{if(dt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(dt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},G2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return jr(e)?r(e):r(String(e).split(t)),n},Z2=()=>{},J2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),fl="abcdefghijklmnopqrstuvwxyz",vd="0123456789",D1={DIGIT:vd,ALPHA:fl,ALPHA_DIGIT:fl+fl.toUpperCase()+vd},Y2=(e=16,t=D1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function q2(e){return!!(e&&dt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const X2=e=>{const t=new Array(10),n=(r,i)=>{if(Ns(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=jr(r)?[]:{};return ki(r,(s,l)=>{const a=n(s,i+1);!gi(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},ev=It("AsyncFunction"),tv=e=>e&&(Ns(e)||dt(e))&&dt(e.then)&&dt(e.catch),P={isArray:jr,isArrayBuffer:R1,isBuffer:E2,isFormData:T2,isArrayBufferView:k2,isString:j2,isNumber:O1,isBoolean:L2,isObject:Ns,isPlainObject:oo,isUndefined:gi,isDate:R2,isFile:O2,isBlob:P2,isRegExp:Q2,isFunction:dt,isStream:A2,isURLSearchParams:D2,isTypedArray:b2,isFileList:N2,forEach:ki,merge:wa,extend:_2,trim:I2,stripBOM:z2,inherits:M2,toFlatObject:F2,kindOf:Os,kindOfTest:It,endsWith:$2,toArray:B2,forEachEntry:U2,matchAll:H2,isHTMLForm:V2,hasOwnProperty:gd,hasOwnProp:gd,reduceDescriptors:T1,freezeMethods:K2,toObjectSet:G2,toCamelCase:W2,noop:Z2,toFiniteNumber:J2,findKey:P1,global:N1,isContextDefined:A1,ALPHABET:D1,generateString:Y2,isSpecCompliantForm:q2,toJSONObject:X2,isAsyncFn:ev,isThenable:tv};function te(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const I1=te.prototype,_1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_1[e]={value:e}});Object.defineProperties(te,_1);Object.defineProperty(I1,"isAxiosError",{value:!0});te.from=(e,t,n,r,i,o)=>{const s=Object.create(I1);return P.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),te.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const nv=null;function Sa(e){return P.isPlainObject(e)||P.isArray(e)}function z1(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function yd(e,t,n){return e?e.concat(t).map(function(i,o){return i=z1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function rv(e){return P.isArray(e)&&!e.some(Sa)}const iv=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function As(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!P.isUndefined(E[y])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(P.isDate(v))return v.toISOString();if(!a&&P.isBlob(v))throw new te("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(v)||P.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,y,E){let m=v;if(v&&!E&&typeof v=="object"){if(P.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(P.isArray(v)&&rv(v)||(P.isFileList(v)||P.endsWith(y,"[]"))&&(m=P.toArray(v)))return y=z1(y),m.forEach(function(h,w){!(P.isUndefined(h)||h===null)&&t.append(s===!0?yd([y],w,o):s===null?y:y+"[]",u(h))}),!1}return Sa(v)?!0:(t.append(yd(E,y,o),u(v)),!1)}const f=[],g=Object.assign(iv,{defaultVisitor:d,convertValue:u,isVisitable:Sa});function x(v,y){if(!P.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(v),P.forEach(v,function(m,p){(!(P.isUndefined(m)||m===null)&&i.call(t,m,P.isString(p)?p.trim():p,y,g))===!0&&x(m,y?y.concat(p):[p])}),f.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return x(e),t}function xd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Nu(e,t){this._pairs=[],e&&As(e,this,t)}const M1=Nu.prototype;M1.append=function(t,n){this._pairs.push([t,n])};M1.toString=function(t){const n=t?function(r){return t.call(this,r,xd)}:xd;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ov(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function F1(e,t,n){if(!t)return e;const r=n&&n.encode||ov,i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new Nu(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class sv{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const wd=sv,$1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lv=typeof URLSearchParams<"u"?URLSearchParams:Nu,av=typeof FormData<"u"?FormData:null,uv=typeof Blob<"u"?Blob:null,cv=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),dv=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Nt={isBrowser:!0,classes:{URLSearchParams:lv,FormData:av,Blob:uv},isStandardBrowserEnv:cv,isStandardBrowserWebWorkerEnv:dv,protocols:["http","https","file","blob","url","data"]};function fv(e,t){return As(e,new Nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Nt.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function pv(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function hv(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function B1(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&P.isArray(i)?i.length:s,a?(P.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!P.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&P.isArray(i[s])&&(i[s]=hv(i[s])),!l)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(pv(r),i,n,0)}),n}return null}const mv={"Content-Type":void 0};function gv(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ts={transitional:$1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i&&i?JSON.stringify(B1(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return fv(t,this.formSerializer).toString();if((l=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return As(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),gv(t)):t}],transformResponse:[function(t){const n=this.transitional||Ts.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?te.from(l,te.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],function(t){Ts.headers[t]={}});P.forEach(["post","put","patch"],function(t){Ts.headers[t]=P.merge(mv)});const Au=Ts,vv=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yv=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&vv[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Sd=Symbol("internals");function _r(e){return e&&String(e).trim().toLowerCase()}function so(e){return e===!1||e==null?e:P.isArray(e)?e.map(so):String(e)}function xv(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const wv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function pl(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function Sv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Cv(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Ds{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const d=_r(a);if(!d)throw new Error("header name must be a non-empty string");const f=P.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||a]=so(l))}const s=(l,a)=>P.forEach(l,(u,d)=>o(u,d,a));return P.isPlainObject(t)||t instanceof this.constructor?s(t,n):P.isString(t)&&(t=t.trim())&&!wv(t)?s(yv(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=_r(t),t){const r=P.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return xv(i);if(P.isFunction(n))return n.call(this,i,r);if(P.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_r(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||pl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=_r(s),s){const l=P.findKey(r,s);l&&(!n||pl(r,r[l],l,n))&&(delete r[l],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||pl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return P.forEach(this,(i,o)=>{const s=P.findKey(r,o);if(s){n[s]=so(i),delete n[o];return}const l=t?Sv(o):String(o).trim();l!==o&&delete n[o],n[l]=so(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Sd]=this[Sd]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=_r(s);r[l]||(Cv(i,s),r[l]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}}Ds.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.freezeMethods(Ds.prototype);P.freezeMethods(Ds);const Ut=Ds;function hl(e,t){const n=this||Au,r=t||n,i=Ut.from(r.headers);let o=r.data;return P.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function b1(e){return!!(e&&e.__CANCEL__)}function ji(e,t,n){te.call(this,e??"canceled",te.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(ji,te,{__CANCEL__:!0});function Ev(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const kv=Nt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,l){const a=[];a.push(n+"="+encodeURIComponent(r)),P.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),P.isString(o)&&a.push("path="+o),P.isString(s)&&a.push("domain="+s),l===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function jv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Lv(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function U1(e,t){return e&&!jv(t)?Lv(e,t):t}const Rv=Nt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=P.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Ov(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Pv(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[o];s||(s=u),n[i]=a,r[i]=u;let f=o,g=0;for(;f!==i;)g+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const x=d&&u-d;return x?Math.round(g*1e3/x):void 0}}function Cd(e,t){let n=0;const r=Pv(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,a=r(l),u=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&u?(s-o)/a:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const Nv=typeof XMLHttpRequest<"u",Av=Nv&&function(e){return new Promise(function(n,r){let i=e.data;const o=Ut.from(e.headers).normalize(),s=e.responseType;let l;function a(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}P.isFormData(i)&&(Nt.isStandardBrowserEnv||Nt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+v))}const d=U1(e.baseURL,e.url);u.open(e.method.toUpperCase(),F1(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const x=Ut.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:x,config:e,request:u};Ev(function(m){n(m),a()},function(m){r(m),a()},y),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new te("Request aborted",te.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||$1;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new te(v,y.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,e,u)),u=null},Nt.isStandardBrowserEnv){const x=(e.withCredentials||Rv(d))&&e.xsrfCookieName&&kv.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&P.forEach(o.toJSON(),function(v,y){u.setRequestHeader(y,v)}),P.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Cd(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Cd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=x=>{u&&(r(!x||x.type?new ji(null,e,u):x),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=Ov(d);if(g&&Nt.protocols.indexOf(g)===-1){r(new te("Unsupported protocol "+g+":",te.ERR_BAD_REQUEST,e));return}u.send(i||null)})},lo={http:nv,xhr:Av};P.forEach(lo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Tv={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=P.isString(n)?lo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new te(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(P.hasOwnProp(lo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!P.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:lo};function ml(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ji(null,e)}function Ed(e){return ml(e),e.headers=Ut.from(e.headers),e.data=hl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Tv.getAdapter(e.adapter||Au.adapter)(e).then(function(r){return ml(e),r.data=hl.call(e,e.transformResponse,r),r.headers=Ut.from(r.headers),r},function(r){return b1(r)||(ml(e),r&&r.response&&(r.response.data=hl.call(e,e.transformResponse,r.response),r.response.headers=Ut.from(r.response.headers))),Promise.reject(r)})}const kd=e=>e instanceof Ut?e.toJSON():e;function xr(e,t){t=t||{};const n={};function r(u,d,f){return P.isPlainObject(u)&&P.isPlainObject(d)?P.merge.call({caseless:f},u,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function i(u,d,f){if(P.isUndefined(d)){if(!P.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function o(u,d){if(!P.isUndefined(d))return r(void 0,d)}function s(u,d){if(P.isUndefined(d)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,d)=>i(kd(u),kd(d),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=a[d]||i,g=f(e[d],t[d],d);P.isUndefined(g)&&f!==l||(n[d]=g)}),n}const H1="1.4.0",Tu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Tu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const jd={};Tu.transitional=function(t,n,r){function i(o,s){return"[Axios v"+H1+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new te(i(s," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!jd[s]&&(jd[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function Dv(e,t,n){if(typeof e!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new te("option "+o+" must be "+a,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+o,te.ERR_BAD_OPTION)}}const Ca={assertOptions:Dv,validators:Tu},qt=Ca.validators;class Bo{constructor(t){this.defaults=t,this.interceptors={request:new wd,response:new wd}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Ca.assertOptions(r,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1),i!=null&&(P.isFunction(i)?n.paramsSerializer={serialize:i}:Ca.assertOptions(i,{encode:qt.function,serialize:qt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&P.merge(o.common,o[n.method]),s&&P.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Ut.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(a=a&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,f=0,g;if(!a){const v=[Ed.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),g=v.length,d=Promise.resolve(n);f<g;)d=d.then(v[f++],v[f++]);return d}g=l.length;let x=n;for(f=0;f<g;){const v=l[f++],y=l[f++];try{x=v(x)}catch(E){y.call(this,E);break}}try{d=Ed.call(this,x)}catch(v){return Promise.reject(v)}for(f=0,g=u.length;f<g;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=xr(this.defaults,t);const n=U1(t.baseURL,t.url);return F1(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){Bo.prototype[t]=function(n,r){return this.request(xr(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(xr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Bo.prototype[t]=n(),Bo.prototype[t+"Form"]=n(!0)});const ao=Bo;class Du{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new ji(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Du(function(i){t=i}),cancel:t}}}const Iv=Du;function _v(e){return function(n){return e.apply(null,n)}}function zv(e){return P.isObject(e)&&e.isAxiosError===!0}const Ea={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ea).forEach(([e,t])=>{Ea[t]=e});const Mv=Ea;function V1(e){const t=new ao(e),n=L1(ao.prototype.request,t);return P.extend(n,ao.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return V1(xr(e,i))},n}const Ae=V1(Au);Ae.Axios=ao;Ae.CanceledError=ji;Ae.CancelToken=Iv;Ae.isCancel=b1;Ae.VERSION=H1;Ae.toFormData=As;Ae.AxiosError=te;Ae.Cancel=Ae.CanceledError;Ae.all=function(t){return Promise.all(t)};Ae.spread=_v;Ae.isAxiosError=zv;Ae.mergeConfig=xr;Ae.AxiosHeaders=Ut;Ae.formToJSON=e=>B1(P.isHTMLForm(e)?new FormData(e):e);Ae.HttpStatusCode=Mv;Ae.default=Ae;const Fv=Ae,ce=Fv.create({baseURL:"https://food-explorer-api-yrug.onrender.com"}),W1=R.createContext({});function $v({children:e}){const[t,n]=R.useState({});async function r({email:o,password:s}){try{const l=await ce.post("/sessions",{email:o,password:s}),{user:a,token:u}=l.data;localStorage.setItem("@food-explorer:user",JSON.stringify(a)),localStorage.setItem("@food-explorer:token",u),ce.defaults.headers.common.Authorization=`Bearer ${u}`,n({user:a,token:u})}catch(l){l.response?alert(l.response.data.message):alert("Não foi possível entrar.")}}function i(){localStorage.removeItem("@food-explorer:token"),localStorage.removeItem("@food-explorer:user"),n({})}return R.useEffect(()=>{const o=localStorage.getItem("@food-explorer:token"),s=localStorage.getItem("@food-explorer:user");o&&s&&(ce.defaults.headers.common.Authorization=`Bearer ${o}`,n({token:o,user:JSON.parse(s)}))},[]),c.jsx(W1.Provider,{value:{signIn:r,signOut:i,user:t.user},children:e})}function Zt(){return R.useContext(W1)}function Bv(){const[e,t]=R.useState(""),[n,r]=R.useState(""),i=kt(),{signIn:o}=Zt();function s(){o({email:e,password:n})}function l(){i("/register")}return c.jsxs(x2,{children:[c.jsxs("div",{className:"logo",children:[c.jsx(j1,{size:40,color:"#065E7C"}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsxs("div",{className:"form",children:[c.jsx("h1",{children:"Faça login"}),c.jsxs("div",{children:[c.jsx("span",{children:"Email"}),c.jsx(Ct,{placeholder:"Exemplo: exemplo@exemplo.com.br",type:"text",onChange:a=>t(a.target.value)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Senha"}),c.jsx(Ct,{placeholder:"No mínimo 6 caracteres",type:"password",onChange:a=>r(a.target.value)})]}),c.jsx(bn,{title:"Entrar",onClick:s}),c.jsx("a",{onClick:l,children:" Criar uma conta"})]})]})}const bv=q.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    
  }
  

  .logo {
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  h1 {
    font-size: 2rem;
  }

  svg {
    margin-right: 0.75rem;
  }

  @media (max-width: 540px) {
    margin: 8px 0;
  }

  }

  .form {
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  gap: 1.5rem;

  max-width: 47rem;
  padding: 6rem;

  border-radius: 16px;

  background: ${({theme:e})=>e.COLORS.BACKGROUND_FORM};
    
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;
  }
  

  a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;
  }

  span {
    margin-bottom: 8px;
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  > div span {
    font-family: 'Roboto', sans-serif;
    display: flex;
  }

  @media (max-width: 540px) {
    padding: 3rem;

    h1 {
      font-size: 24px;
    }
  }
}
  `;function Uv(){const[e,t]=R.useState(""),[n,r]=R.useState(""),[i,o]=R.useState(""),s=kt();function l(){if(!e||!n||!i)return alert("Preencha todos os campos!");if(i.length<6)return alert("A senha deve ter no mínimo 6 caracteres.");ce.post("/users",{name:e,email:n,password:i}).then(()=>{alert("Usuário cadastrado com sucesso!"),s("/")}).catch(u=>{u.response?alert(u.response.data.message):alert("Não foi possível cadastrar.")})}function a(){s("/")}return c.jsxs(bv,{children:[c.jsxs("div",{className:"logo",children:[c.jsx(j1,{size:40,color:"#065E7C"}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsxs("div",{className:"form",children:[c.jsx("h1",{children:"Crie sua conta"}),c.jsxs("div",{children:[c.jsx("span",{children:"Seu nome"}),c.jsx(Ct,{placeholder:"Exemplo: Maria da Silva",type:"text",onChange:u=>t(u.target.value)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Email"}),c.jsx(Ct,{placeholder:"Exemplo: exemplo@exemplo.com.br",type:"email",onChange:u=>r(u.target.value)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Senha"}),c.jsx(Ct,{placeholder:"No mínimo 6 caracteres",type:"password",onChange:u=>o(u.target.value)})]}),c.jsx(bn,{title:"Criar conta",onClick:l}),c.jsx("a",{onClick:a,children:"Já tenho uma conta"})]})]})}function Hv(){return c.jsxs(ya,{children:[c.jsx(st,{path:"/",element:c.jsx(Bv,{})}),c.jsx(st,{path:"/register",element:c.jsx(Uv,{})})]})}function Vv(e){return jt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function Q1(e){return jt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(e)}function Wv(e){return jt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function Iu(e){return jt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"}},{tag:"path",attr:{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"}}]})(e)}const Qv=q.button`
  background: transparent;
  border: none;

  display: flex;
  gap: 5px;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${({theme:e})=>e.COLORS.WHITE};
`;function Dt({title:e="",onClick:t,Icon:n=!1,iconSize:r=!1,iconColor:i="",...o}){return c.jsxs(Qv,{onClick:t,...o,children:[n&&c.jsx(n,{size:r,color:i}),e]})}const Kv=q.header`
  grid-area: header;

  font-family: 'Roboto',sans-serif;
  font-weight: 700;

  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
  padding: 0 1rem;

  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_HEADER};

  .header {
    display: flex;
    flex: 1;
    align-items: center;
    max-width: 80rem;

    @media (max-width: 585px) {
    .button-receipt {
      p {
        display: none;
      }
      svg {
        margin: 0;
      }
    }}
  }

  .buttons{
    display: flex;
    flex: 3;
    align-items: center;
    margin-right:2rem;
  }

`,Gv=q.div`
  display: flex;
  cursor: pointer;

  h1 {
    font-size: 25.11px;
    height: 29px;
  }

  > svg {
    font-size: 16px;
    margin-right: 12px;
  }

  @media (max-width: 700px) {
    > h1 {
      display: none;
    }
  }
`,Zv=q.button`
  border: none;
  background: none;

  margin-left: 2rem;

`;function K1(){return c.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.31703 1.61739C5.65131 0.725854 7.21999 0.25 8.8247 0.25H8.82475C10.9766 0.250137 13.0402 1.105 14.5617 2.62655C16.0833 4.14811 16.9382 6.21174 16.9383 8.36355V8.36359C16.9383 9.96831 16.4624 11.537 15.5709 12.8713C15.4144 13.1054 15.2464 13.3305 15.0677 13.5459L19.9914 18.4697C20.2843 18.7626 20.2843 19.2374 19.9914 19.5303C19.6985 19.8232 19.2237 19.8232 18.9308 19.5303L14.007 14.6065C13.3846 15.1232 12.6851 15.5467 11.9296 15.8596C10.4471 16.4737 8.8157 16.6344 7.24182 16.3213C5.66794 16.0082 4.22223 15.2355 3.08753 14.1008C1.95282 12.9661 1.18007 11.5204 0.867009 9.94648C0.553945 8.37259 0.714621 6.74122 1.32872 5.25866C1.94282 3.77609 2.98276 2.50892 4.31703 1.61739ZM8.82466 1.75C7.51663 1.75001 6.23797 2.13789 5.15039 2.86459C4.06279 3.5913 3.21511 4.6242 2.71454 5.83268C2.21397 7.04116 2.083 8.37093 2.33819 9.65384C2.59337 10.9368 3.22326 12.1152 4.14819 13.0401C5.07311 13.965 6.25154 14.5949 7.53446 14.8501C8.81737 15.1053 10.1471 14.9743 11.3556 14.4738C12.5641 13.9732 13.597 13.1255 14.3237 12.0379C15.0504 10.9503 15.4383 9.67167 15.4383 8.36364M8.8247 1.75C10.5787 1.75012 12.2608 2.44695 13.5011 3.68721C14.7413 4.92748 15.4382 6.6096 15.4383 8.36359",fill:"#C4C4CC"})})}const Jv=q.button`
  background: none;
  color: ${({theme:e})=>e.COLORS.WHITE};

  border: none;
  font-size: 16px;
  font-weight:400;

  padding: 0 2rem;

  &:hover{
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    > p {
      display: none;
    }
  }
  @media (min-width: 700px) {
    > svg {
      display: none;
    }
  }

  @media (max-width: 426px) {
    padding: 0 0.5rem;
  }
`;function Yv({title:e,icon:t,...n}){return c.jsxs(Jv,{type:"button",...n,children:[t||null,c.jsx("p",{children:e})]})}function _u(){return c.jsxs("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.96118 13C8.96118 12.4477 9.4089 12 9.96118 12H22.9612C23.5135 12 23.9612 12.4477 23.9612 13C23.9612 13.5523 23.5135 14 22.9612 14H9.96118C9.4089 14 8.96118 13.5523 8.96118 13Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.96118 17C8.96118 16.4477 9.4089 16 9.96118 16H22.9612C23.5135 16 23.9612 16.4477 23.9612 17C23.9612 17.5523 23.5135 18 22.9612 18H9.96118C9.4089 18 8.96118 17.5523 8.96118 17Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.04697 5.58579C4.42204 5.21071 4.93075 5 5.46118 5H27.4612C27.9916 5 28.5003 5.21071 28.8754 5.58579C29.2505 5.96086 29.4612 6.46957 29.4612 7V26C29.4612 26.3466 29.2817 26.6684 28.9869 26.8507C28.6921 27.0329 28.324 27.0494 28.014 26.8944L24.4612 25.118L20.9084 26.8944C20.6269 27.0352 20.2955 27.0352 20.014 26.8944L16.4612 25.118L12.9084 26.8944C12.6269 27.0352 12.2955 27.0352 12.014 26.8944L8.46118 25.118L4.9084 26.8944C4.59841 27.0494 4.23027 27.0329 3.93545 26.8507C3.64063 26.6684 3.46118 26.3466 3.46118 26V7C3.46118 6.46957 3.6719 5.96086 4.04697 5.58579ZM27.4612 7L5.46118 7L5.46118 24.382L8.01397 23.1056C8.2955 22.9648 8.62687 22.9648 8.9084 23.1056L12.4612 24.882L16.014 23.1056C16.2955 22.9648 16.6269 22.9648 16.9084 23.1056L20.4612 24.882L24.014 23.1056C24.2955 22.9648 24.6269 22.9648 24.9084 23.1056L27.4612 24.382V7Z",fill:"white"})]})}function qv(){return c.jsx("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M17.4104 26.4874L27.5354 16.3624C30.0229 13.8624 30.3854 9.77493 28.0354 7.16243C27.4461 6.50407 26.7287 5.97278 25.927 5.60103C25.1254 5.22929 24.2564 5.02488 23.3732 5.00032C22.4899 4.97575 21.6109 5.13153 20.7898 5.45814C19.9688 5.78476 19.223 6.27534 18.5979 6.89993L16.6979 8.81243L15.0604 7.16243C12.5604 4.67493 8.47293 4.31243 5.86043 6.66243C5.20206 7.25179 4.67078 7.96919 4.29903 8.7708C3.92728 9.57242 3.72288 10.4414 3.69831 11.3247C3.67375 12.208 3.82953 13.087 4.15614 13.908C4.48276 14.7291 4.97334 15.4749 5.59793 16.0999L15.9854 26.4874C16.175 26.6752 16.4311 26.7806 16.6979 26.7806C16.9648 26.7806 17.2208 26.6752 17.4104 26.4874V26.4874Z",stroke:"#D9D9D9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Li({handleShowFavorites:e,allQuantity:t,setDishes:n}){const[r,i]=R.useState(""),o=kt(),{signOut:s}=Zt();function l(){o("/")}function a(){o("/payment")}async function u(){const d=await ce.get("/favorites"),f=localStorage.getItem("@foodexplorer:favorites");f.length!==0&&(d.data.favoriteList?await ce.put("/favorites",{favoriteList:f}):await ce.post("/favorites",{favoriteList:f})),localStorage.removeItem("@foodexplorer:favorites"),o("/"),s()}return R.useEffect(()=>{if(r.length>0&&window.location.pathname=="/"){async function d(){const f=await ce.get(`/dishes?name=${r}`);n(f.data)}d()}else if(r.length==0&&n){async function d(){const f=await ce.get(`/dishes?name=${r}`);n(f.data)}d()}},[r]),c.jsx(Kv,{children:c.jsxs("div",{className:"header",children:[c.jsxs("div",{className:"buttons",children:[c.jsxs(Gv,{onClick:l,children:[c.jsx("svg",{width:"26",height:"30",viewBox:"0 0 26 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z",fill:"#065E7C"})}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsx(Yv,{icon:c.jsx(qv,{}),title:"Meus favoritos",onClick:e}),c.jsx(Ct,{icon:c.jsx(K1,{}),placeholder:"Busque pelas opções de pratos",onChange:d=>i(d.target.value)})]}),c.jsx(bn,{className:"button-receipt",icon:c.jsx(_u,{}),title:`Meu pedido (${t})`,onClick:a}),c.jsx(Zv,{onClick:u,children:c.jsx("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})}const Xv=q.header`
  grid-area: header;

  font-family: 'Roboto',sans-serif;

  display: flex;

  justify-content: center;
  align-items: center;



  padding: 0 1rem;

  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_HEADER};

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .input {
      width: 50%
    }
  }


  h2 {
    font-size: 14px;
    color: ${({theme:e})=>e.COLORS.GRAY_CARD};
    font-weight: 400;
    line-height: 30px;
    
  }


`,ey=q.button`
  background: transparent;
  border: none;

  display: flex;
  gap: 5px;

  align-items: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${({theme:e})=>e.COLORS.WHITE};

  h1 {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    > h1 {
      display: none;
    }
  }
`,ty=q.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    font-size: 24px;
  }

  > svg {
    font-size: 16px;
    margin-right: 12px;

    @media (max-width: 700px) {
    margin: 0
    }
  }

  @media (max-width: 700px) {
    > h1 {
      display: none;
    }
  }
`,ny=q.button`
  border: none;
  background: none;

`;function ry(e){return jt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function iy(e){return jt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function oy(e){return jt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(e)}function sy(e){return jt({tag:"svg",attr:{t:"1551322312294",style:"",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"}},{tag:"path",attr:{d:"M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"}}]})(e)}function Is({setDishes:e}){const[t,n]=R.useState(""),r=kt(),{signOut:i}=Zt();function o(){r("/")}function s(){r("/create")}function l(){r("/orders")}function a(){r("/"),i()}return R.useEffect(()=>{if(t.length>0&&window.location.pathname=="/"){async function u(){const d=await ce.get(`/dishes?name=${t}`);e(d.data)}u()}else if(t.length==0&&e){async function u(){const d=await ce.get(`/dishes?name=${t}`);e(d.data)}u()}},[t]),c.jsx(Xv,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsxs(ty,{onClick:o,children:[c.jsx("svg",{width:"26",height:"30",viewBox:"0 0 26 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z",fill:"#065E7C"})}),c.jsx("h1",{children:"Food Explorer"})]})}),c.jsx("li",{children:c.jsxs(ey,{onClick:s,children:[c.jsx(sy,{}),c.jsx("h1",{children:"Novo Prato"})]})}),c.jsx("li",{className:"input",children:c.jsx(Ct,{icon:c.jsx(K1,{}),placeholder:"Busque pelas opções de pratos",onChange:u=>n(u.target.value)})}),c.jsx("li",{children:c.jsx(bn,{title:"Pedidos",onClick:l})}),c.jsx("li",{children:c.jsx(ny,{onClick:a,children:c.jsx("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})})}const ly=q.footer`
  grid-area: footer;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px ;

  background: ${({theme:e})=>e.COLORS.BACKGROUND_HEADER};

  > div {
    display: flex;
    font-family:'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
  }

  svg {
    margin-right: 12px;
  }

  > svg ,path{
    fill: rgba(255, 255, 255, 0.3);
  }

  span {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    padding: 0 8px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    padding: 10px;
  }

`;function Lr(){return c.jsxs(ly,{children:[c.jsxs("div",{children:[c.jsx("svg",{width:"26",height:"30",viewBox:"0 0 26 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z",fill:"#065E7C"})}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsx("span",{children:"© 2023 - Todos os direitos reservados."})]})}const ay=q.textarea`
  width: 100%;
  height: 9.375rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  background-color: #020a0f;
  color: ${({theme:e})=>e.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  border: 1px solid #fff;
`;function G1({value:e,...t}){return c.jsx(ay,{...t,children:e})}const uy=q.div`
  height: 36px;

  padding: 0.5rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  background-color: ${({isNew:e})=>e?"transparent":"#1a2227"};
  color: ${({theme:e,isNew:t})=>t?e.COLORS.GRAY:e.COLORS.WHITE};

  border: ${({theme:e,isNew:t})=>t?`1px dashed ${e.COLORS.GRAY}`:"none"};

  margin-bottom: 0.5rem;

  > input {
    color: ${({theme:e})=>e.COLORS.WHITE};
    font-size: 0.9rem;
    max-width: 110px;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({theme:e,isNew:t})=>t?e.COLORS.GRAY:e.COLORS.WHITE};
    }
  }

  > button {
    background: none;
    border: none;
    > svg {
      width: 100%;
      height: 100%;
      color: ${({theme:e,isNew:t})=>t?`${e.COLORS.GRAY}`:`${e.COLORS.WHITE}`};
      &:hover {
        color: ${({theme:e})=>e.COLORS.WHITE};
      }
    }
  }
`;function bo({isNew:e=!1,value:t,onClick:n,...r}){return c.jsxs(uy,{isNew:e,children:[c.jsx("input",{type:"text",value:t,readOnly:!e,...r}),c.jsx("button",{type:"button",onClick:n,children:e?c.jsx(Vv,{}):c.jsx(Wv,{})})]})}const cy=q.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 70px auto 80px;

  grid-template-areas: 
    "header"
    "content"
    "footer";
  
  main {
    font-family: 'Roboto', sans-serif;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
  }

  svg {
    min-width: 26px;
    min-height: 30px;
  }

  button {
    margin: 8px;
  }

   button input {
    background: rgba(255, 255, 255, 0.1);
    opacity: 0.8;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
  }

  span, p {
    margin: 8px 0;
  }

  h2 {
    margin-top: 10px;
  }

  .wrapper {
    display: flex;
    gap: 30px;
    width: 100%;
  }

  .files {
    display: flex;
    flex-direction: column;

    input[type='file']{
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 10px;

      border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
      border-radius: 5px;

      font-size: 12px;
      font-weight: 500;
      line-height: 24px;  

      cursor: pointer;
    }
  }

  .input-name{
    width: 72.5%;
  }

  .select {
    width: fit-content;
    display: flex;
    flex-direction: column;

    line-height: 16px;

    select {
      background: none;
      height: 51px;
      border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
      border-radius: 5px;
      color: ${({theme:e})=>e.COLORS.WHITE};
      padding: 10px 10px;
    }

    option {
      background-color: #192227;
    }

    }

    .ingredients {
    width: 100%;

    display: flex;
    flex-direction: column;

    line-height: 16px;
  }

  .tags {
    display: flex;
    min-height: 48px;
    flex-wrap: wrap;
    gap: 10px;
    background: transparent;
    padding: 5px;

    border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
    border-radius: 5px;
  }

  .addDish {
  font-family: 'Poppins', sans-serif ;
  font-weight: 500;

  width: 30%;
  align-self: flex-end;

  background: rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  border: 1px solid #FFFFFF;
  border-radius: 5px;

  margin-bottom: 8px;

  color: #FFF;

  padding: 0.75rem 2rem;
  }

  @media(max-width:426px ) {
    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input-name {
      width: 100%;
    }

    button {
      margin: 0
    }

    .addDish{
      width: 100%;
      margin-bottom: 30px;
    }
  }

`;function dy(){const{user:e}=Zt(),[t,n]=R.useState(""),[r,i]=R.useState(""),[o,s]=R.useState(""),[l,a]=R.useState(null),u=["Prato Principal","Sobremesa","Bebida"],[d,f]=R.useState(u[0]),[g,x]=R.useState([]),[v,y]=R.useState(""),E=kt();function m(){x(C=>[...C,v]),y("")}function p(C){x(O=>O.filter(L=>L!==C))}function h(C){a(C.target.files[0])}async function w(){const C=new FormData;if(!t||!r||!o||!d||!l)return alert("Preencha todos os campos!");if(v.length>0)return alert("Você deixou um ingrediente pendente no campo para adicionar.");const{data:{dish_id:O}}=await ce.post("/dishes",{name:t,ingredients:g,price:o,description:r,category:d});C.append("image",l);const L={headers:{"Content-Type":"multipart/form-data"}};await ce.patch(`/dishes/image/${O}`,C,L),alert("Prato criado com sucesso!"),E("/")}function S(){E("/")}return c.jsxs(cy,{children:[e.admin?c.jsx(Is,{}):c.jsx(Li,{}),c.jsxs("main",{children:[c.jsx(Dt,{onClick:S,Icon:Iu,iconSize:20,title:"voltar"}),c.jsx("h2",{children:"Criar Prato"}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"files",children:[c.jsx("span",{children:"Imagem do Prato"}),c.jsxs("label",{htmlFor:"dish-name",children:[c.jsx(Q1,{size:24})," Selecione imagem"]}),c.jsx("input",{type:"file",id:"dish-name",name:"dish-name",onChange:h,accept:"image/png, image/jpeg"})]}),c.jsxs("div",{className:"input-name",children:[c.jsx("p",{children:"Nome"}),c.jsx(Ct,{placeholder:"Ex.: Salada Cesar",onChange:C=>n(C.target.value),required:!0})]}),c.jsxs("div",{className:" select",children:[c.jsx("span",{htmlFor:"food_type",children:"Categoria"}),c.jsx("select",{value:d,onChange:C=>f(C.target.value),children:u.map((C,O)=>c.jsx("option",{value:C,children:C},String(O)))})]})]}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"ingredients",children:[c.jsx("span",{children:"Ingredientes"}),c.jsxs("div",{className:"tags",children:[g.map((C,O)=>c.jsx(bo,{value:C,onClick:()=>p(C)},String(O))),c.jsx(bo,{isNew:!0,value:v,onChange:C=>y(C.target.value),onClick:m,placeholder:"Ingredientes"})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Preço"}),c.jsx(Ct,{placeholder:"R$ 00,00",onChange:C=>s(C.target.value)})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Descrição"}),c.jsx(G1,{placeholder:"Fale brevemente sobre o prato, seus ingredientes e composição",onChange:C=>i(C.target.value)})]}),c.jsx("button",{className:"addDish",onClick:w,children:"Criar Prato"})]}),c.jsx(Lr,{})]})}const fy=q.div`
  width: 300px;
  height: 512px;

  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;

  gap: 16px;
  margin: 0.5rem 1rem ;
  
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  
  border-radius: 8px;

  svg {
    align-self: flex-end;
  }

  .icon {
    align-self: flex-end;
    margin-right: 15px;
  }

  .name {
    justify-content: center;
    font-size: 24px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme:e})=>e.COLORS.WHITE}
  }

  span {
    font-size: 14px;
    color: ${({theme:e})=>e.COLORS.GRAY}
  }

  span, h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h2 {
    font-size: 32px;
    color: ${({theme:e})=>e.COLORS.BLUE}
  }

  div {
    img {
      width: 176px;
      height: 176px;

      margin-bottom: 16px;
    }
  }

  .informations {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


`;function py(e){return jt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 7l16 0"}},{tag:"path",attr:{d:"M10 11l0 6"}},{tag:"path",attr:{d:"M14 11l0 6"}},{tag:"path",attr:{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}},{tag:"path",attr:{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}}]})(e)}function gl({title:e,image:t,id:n,description:r,price:i,...o}){const s=kt();function l(){s(`/edit/${n}`)}async function a(){try{return await ce.delete(`/dishes/${n}`),alert("Prato deletado."),s("/")}catch{return alert("Erro, favor tentar novamente.")}}return c.jsxs(fy,{children:[c.jsx(Dt,{Icon:py,className:"icon",iconSize:20,iconColor:"red",onClick:a}),c.jsxs("div",{children:[c.jsx("img",{src:`${ce.defaults.baseURL}/dishes/${t}`,alt:"dish image"}),c.jsxs("div",{className:"informations",children:[c.jsx(Dt,{className:"name",title:e,onClick:l}),c.jsx("span",{children:r}),c.jsxs("h2",{children:["R$ ",i]})]})]})]})}const hy="/assets/fruits-ecb7b9a0.png",my=q.div`
  width: 100%;
  color: white;

  .embla {
  overflow: clip;
  gap: 2rem;
}
.embla__container {
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  justify-content: center;

  gap:48px 60px;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
`;function gy(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ld(e){return gy(e)||Array.isArray(e)}function vy(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function zu(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),o=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==o?!1:n.every(s=>{const l=e[s],a=t[s];return typeof l=="function"?`${l}`==`${a}`:!Ld(l)||!Ld(a)?l===a:zu(l,a)})}function Rd(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function yy(e,t){if(e.length!==t.length)return!1;const n=Rd(e),r=Rd(t);return n.every((i,o)=>{const s=r[o];return zu(i,s)})}function Mu(e){return typeof e=="number"}function Od(e){return typeof e=="string"}function Fu(e){return typeof e=="boolean"}function Pd(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ee(e){return Math.abs(e)}function $u(e){return Math.sign(e)}function uo(e,t){return Ee(e-t)}function xy(e,t){if(e===0||t===0||Ee(e)<=Ee(t))return 0;const n=uo(Ee(e),Ee(t));return Ee(n/e)}function vi(e){return Uo(e).map(Number)}function Ht(e){return e[_s(e)]}function _s(e){return Math.max(0,e.length-1)}function Uo(e){return Object.keys(e)}function Z1(e,t){return[e,t].reduce((n,r)=>(Uo(r).forEach(i=>{const o=n[i],s=r[i],l=Pd(o)&&Pd(s);n[i]=l?Z1(o,s):s}),n),{})}function J1(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function wy(e,t){const n={start:r,center:i,end:o};function r(){return 0}function i(u){return o(u)/2}function o(u){return t-u}function s(){return t*Number(e)}function l(u){return Mu(e)?s():n[e](u)}return{measure:l}}function Sy(e,t){const n=e==="y"?"y":"x",r=e==="y"?"x":"y",i=l(),o=a();function s(d){const{width:f,height:g}=d;return n==="x"?f:g}function l(){return n==="y"?"top":t==="rtl"?"right":"left"}function a(){return n==="y"?"bottom":t==="rtl"?"left":"right"}return{scroll:n,cross:r,startEdge:i,endEdge:o,measureSize:s}}function xn(e,t){const n=Ee(e-t);function r(u){return u<e}function i(u){return u>t}function o(u){return r(u)||i(u)}function s(u){return o(u)?r(u)?e:t:u}function l(u){return n?u-n*Math.ceil((u-t)/n):u}return{length:n,max:t,min:e,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:l}}function Y1(e,t,n){const{constrain:r}=xn(0,e),i=e+1;let o=s(t);function s(g){return n?Ee((i+g)%i):r(g)}function l(){return o}function a(g){return o=s(g),f}function u(g){return d().set(l()+g)}function d(){return Y1(e,l(),n)}const f={get:l,set:a,add:u,clone:d};return f}function Cy(e){const t=e==="rtl"?-1:1;function n(i){return i*t}return{apply:n}}function yi(){let e=[];function t(i,o,s,l={passive:!0}){return i.addEventListener(o,s,l),e.push(()=>i.removeEventListener(o,s,l)),r}function n(){e=e.filter(i=>i())}const r={add:t,clear:n};return r}function Ey(e,t,n,r,i,o,s,l,a,u,d,f,g,x,v,y,E,m,p){const{cross:h}=e,w=["INPUT","SELECT","TEXTAREA"],S={passive:!1},C=yi(),O=yi(),L=xn(50,225).constrain(v.measure(20)),k={mouse:300,touch:400},M={mouse:500,touch:600},re=y?43:25;let ee=!1,Z=0,fe=0,de=!1,Le=!1,ve=!1,N=!1;function W(F,z){if(!z)return;function H(B){(Fu(z)||z(F,B))&&V(B)}const b=n;C.add(b,"dragstart",B=>B.preventDefault(),S).add(b,"touchmove",()=>{},S).add(b,"touchend",()=>{}).add(b,"touchstart",H).add(b,"mousedown",H).add(b,"touchcancel",K).add(b,"contextmenu",K).add(b,"click",D,!0)}function U(){C.clear(),O.clear()}function Y(){const F=N?r:n;O.add(F,"touchmove",j,S).add(F,"touchend",K).add(F,"mousemove",j,S).add(F,"mouseup",K)}function T(F){const z=F.nodeName||"";return w.includes(z)}function I(){return(y?M:k)[N?"mouse":"touch"]}function _(F,z){const H=g.add($u(F)*-1),b=f.byDistance(F,!y).distance;return y||Ee(F)<L?b:m&&z?b*.5:f.byIndex(H.get(),0).distance}function V(F){const z=J1(F,i);N=z,!(z&&F.button!==0)&&(T(F.target)||(ve=y&&z&&!F.buttons&&ee,ee=uo(o.get(),l.get())>=2,de=!0,s.pointerDown(F),d.useFriction(0).useDuration(0),o.set(l),Y(),Z=s.readPoint(F),fe=s.readPoint(F,h),x.emit("pointerDown")))}function j(F){const z=s.readPoint(F),H=s.readPoint(F,h),b=uo(z,Z),B=uo(H,fe);if(!Le&&!N&&(!F.cancelable||(Le=b>B,!Le)))return K(F);const ie=s.pointerMove(F);b>E&&(ve=!0),d.useFriction(.3).useDuration(1),a.start(),o.add(t.apply(ie)),F.preventDefault()}function K(F){const H=f.byDistance(0,!1).index!==g.get(),b=s.pointerUp(F)*I(),B=_(t.apply(b),H),ie=xy(b,B),G=re-10*ie,ue=p+ie/50;Le=!1,de=!1,O.clear(),d.useDuration(G).useFriction(ue),u.distance(B,!y),N=!1,x.emit("pointerUp")}function D(F){ve&&(F.stopPropagation(),F.preventDefault())}function oe(){return de}return{init:W,pointerDown:oe,destroy:U}}function ky(e,t){let r,i;function o(f){return f.timeStamp}function s(f,g){const v=`client${(g||e.scroll)==="x"?"X":"Y"}`;return(J1(f,t)?f:f.touches[0])[v]}function l(f){return r=f,i=f,s(f)}function a(f){const g=s(f)-s(i),x=o(f)-o(r)>170;return i=f,x&&(r=f),g}function u(f){if(!r||!i)return 0;const g=s(i)-s(r),x=o(f)-o(r),v=o(f)-o(i)>170,y=g/x;return x&&!v&&Ee(y)>.1?y:0}return{pointerDown:l,pointerMove:a,pointerUp:u,readPoint:s}}function jy(e){function t(r){return e*(r/100)}return{measure:t}}function Ly(e,t,n,r,i){let o,s,l=[],a=!1;function u(x){return i.measureSize(x.getBoundingClientRect())}function d(x,v){if(!v)return;s=u(e),l=r.map(u);function y(m){for(const p of m){const h=p.target===e,w=r.indexOf(p.target),S=h?s:l[w],C=u(h?e:r[w]);if(S!==C){n.requestAnimationFrame(()=>{x.reInit(),t.emit("resize")});break}}}o=new ResizeObserver(m=>{a||(Fu(v)||v(x,m))&&y(m)}),[e].concat(r).forEach(m=>o.observe(m))}function f(){o&&o.disconnect(),a=!0}return{init:d,destroy:f}}function Ry(e,t,n,r){let i=!0,o=0,s=0,l=n,a=r,u=e.get(),d=0;function f(){const S=t.get()-e.get(),C=!l;let O=0;return C?(o=0,e.set(t),O=S):(o+=S/l,o*=a,u+=o,e.add(o),O=u-d),s=$u(O),d=u,i=Ee(S)<.001,w}function g(){return i}function x(){return l}function v(){return s}function y(){return o}function E(){return p(n)}function m(){return h(r)}function p(S){return l=S,w}function h(S){return a=S,w}const w={direction:v,duration:x,velocity:y,seek:f,settled:g,useBaseFriction:m,useBaseDuration:E,useFriction:h,useDuration:p};return w}function Oy(e,t,n,r,i){const o=i.measure(10),s=i.measure(50),l=xn(.1,.99);let a=!1;function u(){return!(a||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function d(x){if(!u())return;const v=e.reachedMin(t.get())?"min":"max",y=Ee(e[v]-t.get()),E=n.get()-t.get(),m=l.constrain(y/s);n.subtract(E*m),!x&&Ee(E)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function f(x){a=!x}return{constrain:d,toggleActive:f}}function Py(e,t,n,r){const i=xn(-t+e,n[0]),o=a(),s=u();function l(){const f=o[0],g=Ht(o),x=o.lastIndexOf(f),v=o.indexOf(g)+1;return xn(x,v)}function a(){return n.map(i.constrain).map(f=>parseFloat(f.toFixed(3)))}function u(){if(t<=e)return[i.max];if(r==="keepSnaps")return o;const{min:f,max:g}=l();return o.slice(f,g)}return{snapsContained:s}}function Ny(e,t,n){const r=t[0],i=n?r-e:Ht(t);return{limit:xn(i,r)}}function Ay(e,t,n,r){const o=t.min+.1,s=t.max+.1,{reachedMin:l,reachedMax:a}=xn(o,s);function u(g){return g===1?a(n.get()):g===-1?l(n.get()):!1}function d(g){if(!u(g))return;const x=e*(g*-1);r.forEach(v=>v.add(x))}return{loop:d}}function Ty(e){const{max:t,length:n}=e;function r(o){return(o-t)/-n}return{get:r}}function Dy(e,t,n,r,i,o,s){const{startEdge:l,endEdge:a}=e,{groupSlides:u}=o,d=x().map(t.measure),f=v(),g=y();function x(){return u(r).map(m=>Ht(m)[a]-m[0][l]).map(Ee)}function v(){return r.map(m=>n[l]-m[l]).map(m=>-Ee(m))}function y(){const p=Ht(f)-Ht(i);return u(f).map(h=>h[0]).map((h,w,S)=>{const C=!w,O=w===_s(S);return s&&C?0:s&&O?p:h+d[w]})}return{snaps:f,snapsAligned:g}}function Iy(e,t,n,r,i){const{reachedAny:o,removeOffset:s,constrain:l}=r;function a(v){return v.concat().sort((y,E)=>Ee(y)-Ee(E))[0]}function u(v){const y=e?s(v):l(v),E=t.map(p=>p-y).map(p=>d(p,0)).map((p,h)=>({diff:p,index:h})).sort((p,h)=>Ee(p.diff)-Ee(h.diff)),{index:m}=E[0];return{index:m,distance:y}}function d(v,y){const E=[v,v+n,v-n];if(!e)return E[0];if(!y)return a(E);const m=E.filter(p=>$u(p)===y);return a(m)}function f(v,y){const E=t[v]-i.get(),m=d(E,y);return{index:v,distance:m}}function g(v,y){const E=i.get()+v,{index:m,distance:p}=u(E),h=!e&&o(E);if(!y||h)return{index:m,distance:v};const w=t[m]-p,S=v+d(w,0);return{index:m,distance:S}}return{byDistance:g,byIndex:f,shortcut:d}}function _y(e,t,n,r,i,o,s){function l(f){const g=f.distance,x=f.index!==t.get();o.add(g),g&&(i.duration()?e.start():(e.update(),e.render(1),e.update())),x&&(n.set(t.get()),t.set(f.index),s.emit("select"))}function a(f,g){const x=r.byDistance(f,g);l(x)}function u(f,g){const x=t.clone().set(f),v=r.byIndex(x.get(),g);l(v)}return{distance:a,index:u}}function co(e){let t=e;function n(){return t}function r(a){t=s(a)}function i(a){t+=s(a)}function o(a){t-=s(a)}function s(a){return Mu(a)?a:a.get()}return{get:n,set:r,add:i,subtract:o}}function q1(e,t,n){const r=e.scroll==="x"?s:l,i=n.style;let o=!1;function s(g){return`translate3d(${g}px,0px,0px)`}function l(g){return`translate3d(0px,${g}px,0px)`}function a(g){o||(i.transform=r(t.apply(g)))}function u(g){o=!g}function d(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:d,to:a,toggleActive:u}}function zy(e,t,n,r,i,o,s,l,a){const u=vi(i),d=vi(i).reverse(),f=y().concat(E());function g(S,C){return S.reduce((O,L)=>O-i[L],C)}function x(S,C){return S.reduce((O,L)=>g(O,C)>0?O.concat([L]):O,[])}function v(S,C){const O=C==="start",L=O?-r:r,k=s.findSlideBounds([L]);return S.map(M=>{const re=O?0:-r,ee=O?r:0,fe=k.filter(de=>de.index===M)[0][O?"end":"start"];return{index:M,slideLocation:co(-1),translate:q1(e,t,a[M]),target:()=>l.get()>fe?re:ee}})}function y(){const S=o[0]-1,C=x(d,S);return v(C,"end")}function E(){const S=n-o[0]-1,C=x(u,S);return v(C,"start")}function m(){return f.every(({index:S})=>{const C=u.filter(O=>O!==S);return g(C,n)<=.1})}function p(){f.forEach(S=>{const{target:C,translate:O,slideLocation:L}=S,k=C();k!==L.get()&&(O.to(k),L.set(k))})}function h(){f.forEach(S=>S.translate.clear())}return{canLoop:m,clear:h,loop:p,loopPoints:f}}function My(e,t){let n,r=!1;function i(l,a){if(!a)return;function u(d){for(const f of d)if(f.type==="childList"){l.reInit(),t.emit("slidesChanged");break}}n=new MutationObserver(d=>{r||(Fu(a)||a(l,d))&&u(d)}),n.observe(e,{childList:!0})}function o(){n&&n.disconnect(),r=!0}return{init:i,destroy:o}}function Fy(e,t,n,r,i,o,s){const{removeOffset:l,constrain:a}=i,u=.5,d=o?[0,t,-t]:[0],f=x(d,s);function g(E){const m=E||0;return n.map(p=>xn(u,p-u).constrain(p*m))}function x(E,m){const p=E||d,h=g(m);return p.reduce((w,S)=>{const C=r.map((O,L)=>({start:O-n[L]+h[L]+S,end:O+e-h[L]+S,index:L}));return w.concat(C)},[])}function v(E,m){const p=o?l(E):a(E);return(m||f).reduce((w,S)=>{const{index:C,start:O,end:L}=S,k=w.includes(C),M=O<p&&L>p;return!k&&M?w.concat([C]):w},[])}return{check:v,findSlideBounds:x}}function $y(e,t,n,r,i,o){const{measureSize:s,startEdge:l,endEdge:a}=e,u=n[0]&&i,d=v(),f=y(),g=n.map(s),x=E();function v(){if(!u)return 0;const p=n[0];return Ee(t[l]-p[l])}function y(){if(!u)return 0;const p=o.getComputedStyle(Ht(r));return parseFloat(p.getPropertyValue(`margin-${a}`))}function E(){return n.map((p,h,w)=>{const S=!h,C=h===_s(w);return S?g[h]+d:C?g[h]+f:w[h+1][l]-p[l]}).map(Ee)}return{slideSizes:g,slideSizesWithGaps:x}}function By(e,t,n){const r=Mu(n);function i(a,u){return vi(a).filter(d=>d%u===0).map(d=>a.slice(d,d+u))}function o(a){return vi(a).reduce((u,d)=>{const g=t.slice(Ht(u),d+1).reduce((x,v)=>x+v,0);return!d||g>e?u.concat(d):u},[]).map((u,d,f)=>a.slice(u,f[d+1]))}function s(a){return r?i(a,n):o(a)}return{groupSlides:s}}function by(e,t,n,r,i,o,s,l){const{align:a,axis:u,direction:d,startIndex:f,inViewThreshold:g,loop:x,duration:v,dragFree:y,dragThreshold:E,slidesToScroll:m,skipSnaps:p,containScroll:h}=o,w=t.getBoundingClientRect(),S=n.map(ue=>ue.getBoundingClientRect()),C=Cy(d),O=Sy(u,d),L=O.measureSize(w),k=jy(L),M=wy(a,L),re=!x&&!!h,ee=x||!!h,{slideSizes:Z,slideSizesWithGaps:fe}=$y(O,w,S,n,ee,i),de=By(L,fe,m),{snaps:Le,snapsAligned:ve}=Dy(O,M,w,S,fe,de,re),N=-Ht(Le)+Ht(fe),{snapsContained:W}=Py(L,N,ve,h),U=re?W:ve,{limit:Y}=Ny(N,U,x),T=Y1(_s(U),f,x),I=T.clone(),_=vi(n),V=({dragHandler:ue,scrollBody:_t,scrollBounds:ke,eventHandler:Lt,animation:zt,options:{loop:Ue}})=>{const Q=ue.pointerDown();Ue||ke.constrain(Q);const pe=_t.seek().settled();pe&&!Q&&(zt.stop(),Lt.emit("settle")),pe||Lt.emit("scroll")},j=({scrollBody:ue,translate:_t,location:ke,offsetLocation:Lt,scrollLooper:zt,slideLooper:Ue,options:{loop:Q}},pe)=>{const Un=ue.velocity();Lt.set(ke.get()-Un+Un*pe),Q&&(zt.loop(ue.direction()),Ue.loop()),_t.to(Lt.get())},K={start:()=>l.start(G),stop:()=>l.stop(G),update:()=>V(G),render:ue=>j(G,ue)},D=.68,oe=U[T.get()],J=co(oe),F=co(oe),z=co(oe),H=Ry(J,z,v,D),b=Iy(x,U,N,Y,z),B=_y(K,T,I,b,H,z,s),ie=Fy(L,N,Z,Le,Y,x,g),G={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:w,slideRects:S,animation:K,axis:O,direction:C,dragHandler:Ey(O,C,e,r,i,z,ky(O,i),J,K,B,H,b,T,s,k,y,E,p,D),eventStore:yi(),percentOfView:k,index:T,indexPrevious:I,limit:Y,location:J,offsetLocation:F,options:o,resizeHandler:Ly(t,s,i,n,O),scrollBody:H,scrollBounds:Oy(Y,J,z,H,k),scrollLooper:Ay(N,Y,F,[J,F,z]),scrollProgress:Ty(Y),scrollSnaps:U,scrollTarget:b,scrollTo:B,slideLooper:zy(O,C,L,N,fe,U,ie,F,n),slidesHandler:My(t,s),slidesInView:ie,slideIndexes:_,slidesToScroll:de,target:z,translate:q1(O,C,t)};return G}function Uy(e){const t=16.666666666666668;let n=[],r=null,i=0,o=0;function s(f){r||(r=f);const g=f-r;for(r=f,i+=g;i>=t;)n.forEach(({animation:v})=>v.update()),i-=t;const x=Ee(i/t);n.forEach(({animation:v})=>v.render(x)),o&&e.requestAnimationFrame(s)}function l(f){n.includes(f)||n.push(f),!o&&(o=e.requestAnimationFrame(s))}function a(f){n=n.filter(g=>g!==f),!n.length&&(e.cancelAnimationFrame(o),r=null,i=0,o=0)}function u(){r=null,i=0}return{start:l,stop:a,reset:u,window:e}}function Hy(){const e={};let t;function n(a){t=a}function r(a){return e[a]||[]}function i(a){return r(a).forEach(u=>u(t,a)),l}function o(a,u){return e[a]=r(a).concat([u]),l}function s(a,u){return e[a]=r(a).filter(d=>d!==u),l}const l={init:n,emit:i,off:s,on:o};return l}const Vy={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,dragThreshold:10,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Wy(e){function t(o,s){return Z1(o,s||{})}function n(o){const s=o.breakpoints||{},l=Uo(s).filter(a=>e.matchMedia(a).matches).map(a=>s[a]).reduce((a,u)=>t(a,u),{});return t(o,l)}function r(o){return o.map(s=>Uo(s.breakpoints||{})).reduce((s,l)=>s.concat(l),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function Qy(e){let t=[];function n(o,s){return t=o.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),t.forEach(l=>l.init(s,e)),o.reduce((l,a)=>Object.assign(l,{[a.name]:a}),{})}function r(){t=t.filter(o=>o.destroy())}return{init:n,destroy:r}}function wr(e,t,n){const r=e.ownerDocument,i=r.defaultView,o=Wy(i),s=Qy(o),l=yi(),a=yi(),u=Hy(),{animationRealms:d}=wr,{mergeOptions:f,optionsAtMedia:g,optionsMediaQueries:x}=o,{on:v,off:y,emit:E}=u,m=Z;let p=!1,h,w=f(Vy,wr.globalOptions),S=f(w),C=[],O,L,k;function M(){const{container:H,slides:b}=S;L=(Od(H)?e.querySelector(H):H)||e.children[0];const ie=Od(b)?L.querySelectorAll(b):b;k=[].slice.call(ie||L.children)}function re(H,b){const B=by(e,L,k,r,i,H,u,b);if(H.loop&&!B.slideLooper.canLoop()){const ie=Object.assign({},H,{loop:!1});return re(ie,b)}return B}function ee(H,b){if(p)return;const B=d.find(G=>G.window===i),ie=B||Uy(i);B||d.push(ie),w=f(w,H),S=g(w),C=b||C,M(),h=re(S,ie),x([w,...C.map(({options:G})=>G)]).forEach(G=>l.add(G,"change",Z)),S.active&&(h.translate.to(h.location.get()),h.eventHandler.init(z),h.resizeHandler.init(z,S.watchResize),h.slidesHandler.init(z,S.watchSlides),a.add(r,"visibilitychange",()=>{r.hidden&&ie.reset()}),h.options.loop&&h.slideLooper.loop(),L.offsetParent&&k.length&&h.dragHandler.init(z,S.watchDrag),O=s.init(C,z))}function Z(H,b){const B=V();fe(),ee(f({startIndex:B},H),b),u.emit("reInit")}function fe(){h.dragHandler.destroy(),h.animation.stop(),h.eventStore.clear(),h.translate.clear(),h.slideLooper.clear(),h.resizeHandler.destroy(),h.slidesHandler.destroy(),s.destroy(),l.clear(),a.clear()}function de(){p||(p=!0,l.clear(),fe(),u.emit("destroy"))}function Le(H){const b=h[H?"target":"location"].get(),B=S.loop?"removeOffset":"constrain";return h.slidesInView.check(h.limit[B](b))}function ve(H){const b=Le(H);return h.slideIndexes.filter(B=>!b.includes(B))}function N(H,b,B){!S.active||p||(h.scrollBody.useBaseFriction().useDuration(b?0:S.duration),h.scrollTo.index(H,B||0))}function W(H){const b=h.index.add(1).get();N(b,H===!0,-1)}function U(H){const b=h.index.add(-1).get();N(b,H===!0,1)}function Y(){return h.index.add(1).get()!==V()}function T(){return h.index.add(-1).get()!==V()}function I(){return h.scrollSnaps.map(h.scrollProgress.get)}function _(){return h.scrollProgress.get(h.location.get())}function V(){return h.index.get()}function j(){return h.indexPrevious.get()}function K(){return O}function D(){return h}function oe(){return e}function J(){return L}function F(){return k}const z={canScrollNext:Y,canScrollPrev:T,containerNode:J,internalEngine:D,destroy:de,off:y,on:v,emit:E,plugins:K,previousScrollSnap:j,reInit:m,rootNode:oe,scrollNext:W,scrollPrev:U,scrollProgress:_,scrollSnapList:I,scrollTo:N,selectedScrollSnap:V,slideNodes:F,slidesInView:Le,slidesNotInView:ve};return ee(t,n),setTimeout(()=>u.emit("init"),0),z}wr.animationRealms=[];wr.globalOptions=void 0;function Bu(e={},t=[]){const n=R.useRef(e),r=R.useRef(t),[i,o]=R.useState(),[s,l]=R.useState(),a=R.useCallback(()=>{i&&i.reInit(n.current,r.current)},[i]);return R.useEffect(()=>{if(vy()&&s){wr.globalOptions=Bu.globalOptions;const u=wr(s,n.current,r.current);return o(u),()=>u.destroy()}else o(void 0)},[s,o]),R.useEffect(()=>{zu(n.current,e)||(n.current=e,a())},[e,a]),R.useEffect(()=>{yy(r.current,t)||(r.current=t,a())},[t,a]),[l,i]}Bu.globalOptions=void 0;const vl=({title:e,children:t})=>{const[n]=Bu();return c.jsxs(my,{children:[c.jsx("h1",{children:e}),c.jsx("div",{className:"embla",ref:n,children:c.jsxs("div",{className:"embla__container",children:[t,c.jsx("div",{className:"embla__slide"}),c.jsx("div",{className:"embla__slide"}),c.jsx("div",{className:"embla__slide"})]})})]})},Ky=q.div`
  font-family: 'Poppins', sans-serif;

  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 80px;
  grid-template-areas:
    'header'
    'content'
    'footer';

    header {
      position: fixed;
      width: 100%;
      height: 68px;
      z-index: 1;
    }
`,Gy=q.div`
  grid-area: content;

  padding: 130px 10px 0;
  margin: 0 auto 30px;

  width: 100%;
  max-width: 1280px;



.banner {
  position: relative;
  width: 100%;
  height: 260px;

  padding: 50px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 0 auto;
  
  border-radius: 8px;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);


  img {
    width: 600px;
    position: absolute;
    left: -50px;
    bottom: 0;
    }

  h1 {
    font-weight: 500;
  }
}

@media (max-width: 1000px) {
    padding: 50px 30px 0;

    .banner {
      height: 200px;
      img {
        width: 400px;
        left: -40px;
      }

      .text-banner {
        width: 50%;
        h2 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (max-width: 426px) {
    padding: 30px 15px 0;

    .banner {
      height: 130px;
      img {
        width: 250px;
        left: 50px;
      }
      .text-banner {
        position: absolute;
        top: 10px;
        left: 5px;
        right: 0;
        width: 100%;
        h2 {
          font-size: 3.5rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .banner {
      .text-banner {
        top: -10px;
      }
    }
  }


`;function Zy(){return c.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.24902 12C3.24902 11.5858 3.5882 11.25 4.0066 11.25H20.6733C21.0917 11.25 21.4308 11.5858 21.4308 12C21.4308 12.4142 21.0917 12.75 20.6733 12.75H4.0066C3.5882 12.75 3.24902 12.4142 3.24902 12Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.3399 3C12.7583 3 13.0975 3.33579 13.0975 3.75V20.25C13.0975 20.6642 12.7583 21 12.3399 21C11.9215 21 11.5824 20.6642 11.5824 20.25V3.75C11.5824 3.33579 11.9215 3 12.3399 3Z",fill:"white"})]})}function Jy(){return c.jsx("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49146 12C3.49146 11.5858 3.83063 11.25 4.24903 11.25H20.9157C21.3341 11.25 21.6733 11.5858 21.6733 12C21.6733 12.4142 21.3341 12.75 20.9157 12.75H4.24903C3.83063 12.75 3.49146 12.4142 3.49146 12Z",fill:"white"})})}const Yy=q.div`
  width: 300px;
  height: 512px;

  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;

  gap: 16px;
  margin: 0.5rem 1rem ;
  
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  
  border-radius: 8px;

  svg {
    align-self: flex-end;
  }

  .icon {
    align-self: flex-end;
    margin-right: 15px;
  }

  .name {
    justify-content: center;
    font-size: 24px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme:e})=>e.COLORS.WHITE}
  }

  span {
    font-size: 14px;
    color: ${({theme:e})=>e.COLORS.GRAY}
  }

  span, h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h2 {
    font-size: 32px;
    color: ${({theme:e})=>e.COLORS.BLUE}
  }

  div {
    img {
      width: 176px;
      height: 176px;

      margin-bottom: 16px;
    }
  }

  .informations {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


`,Nd=q.button`
  background: none;
  border: none;

`,qy=q.div`
  display: flex;
  align-items: center;

  margin-right: 0.5rem;

  span {
    font-size: 20px;

    padding: 0 0.5rem;
  }
`,Xy=q.div`
  width: 100%;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  
  span {
  font-weight: 700;
  color: ${({theme:e})=>e.COLORS.WHITE};

  }
`;function Vn({title:e,image:t,id:n,description:r,price:i,setAllOrders:o,setFavoriteP:s,favoriteP:l,...a}){const[u,d]=R.useState(1),f=kt(),[g,x]=R.useState(()=>{const h=localStorage.getItem("@foodexplorer:favorites");return!!(h&&JSON.parse(h).filter(C=>C==n).length===1)});function v(){if(x(!g),g){const h=l.filter(w=>w!==n);s(h)}else s(h=>[...h,n])}const y=()=>{f(`/details/${n}`)};function E(){d(h=>h+1)}function m(){u>1&&d(h=>h-1)}function p(){const h={id:n,name:e,image:t,price:i,quantity:u},w=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));w||o(C=>[...C,h]);const S=w.filter(C=>C.id!==h.id);o(S),o(C=>[...C,h])}return c.jsxs(Yy,{...a,children:[c.jsx(Dt,{Icon:g?ry:oy,className:"icon",iconSize:30,iconColor:g?"red":"",onClick:()=>v()}),c.jsxs("div",{children:[c.jsx("img",{src:`${ce.defaults.baseURL}/dishes/${t}`,alt:"dish image"}),c.jsxs("div",{className:"informations",children:[c.jsx(Dt,{className:"name",title:e,onClick:y}),c.jsx("span",{children:r}),c.jsxs("h2",{children:["R$ ",i]})]})]}),c.jsxs(Xy,{children:[c.jsxs(qy,{children:[c.jsx(Nd,{onClick:m,children:c.jsx(Jy,{})}),c.jsx("span",{children:u.toString().padStart(2,0)}),c.jsx(Nd,{onClick:E,children:c.jsx(Zy,{})})]}),c.jsx(bn,{title:"incluir",onClick:p})]})]})}function Ad(){const{user:e}=Zt(),[t,n]=R.useState(()=>{const k=localStorage.getItem("@foodexplorer:favorites");return k?JSON.parse(k):[]}),[r,i]=R.useState([]),[o,s]=R.useState([]),[l,a]=R.useState([]),[u,d]=R.useState([]),[f,g]=R.useState([]),[x,v]=R.useState([]),[y,E]=R.useState([]),[m,p]=R.useState(!1),[h,w]=R.useState(0),[S,C]=R.useState(()=>{const k=localStorage.getItem("@foodexplorer:dishes");return k?JSON.parse(k):[]});async function O(){if(!t)return alert("Não há pratos favoritos");const k=r.filter(Z=>t.includes(Z.id)),M=k.filter(Z=>Z.category=="Prato Principal");a(M);const re=k.filter(Z=>Z.category=="Sobremesa");g(re);const ee=k.filter(Z=>Z.category=="Bebida");E(ee),p(!m)}function L(){let k=0;S.forEach(M=>{k+=Number(M.quantity)}),w(k)}return R.useEffect(()=>{async function k(){const M=await ce.get("/dishes?name");i(M.data)}k()},[]),R.useEffect(()=>{async function k(){const M=await ce.get("/favorites");M.data.favoriteList?localStorage.setItem("@foodexplorer:favorites",M.data.favoriteList):localStorage.setItem("@foodexplorer:favorites",JSON.stringify([]))}k()},[]),R.useEffect(()=>{const k=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));k&&(C(k),L())},[]),R.useEffect(()=>{localStorage.setItem("@foodexplorer:dishes",JSON.stringify(S)),L()},[S]),R.useEffect(()=>{function k(){const M=r.filter(Z=>Z.category=="Prato Principal");s(M);const re=r.filter(Z=>Z.category=="Sobremesa");d(re);const ee=r.filter(Z=>Z.category=="Bebida");v(ee)}k()},[r]),R.useEffect(()=>{localStorage.setItem("@foodexplorer:favorites",JSON.stringify(t))},[t]),c.jsxs(Ky,{children:[e.admin?c.jsx(Is,{setDishes:i}):c.jsx(Li,{handleShowFavorites:O,allQuantity:h,setDishes:i}),c.jsxs(Gy,{children:[c.jsxs("div",{className:"banner",children:[c.jsx("img",{src:hy,alt:"image fruits and cookie"}),c.jsxs("div",{className:"text-banner",children:[c.jsx("h1",{children:"Sabores Inigualáveis"}),c.jsx("p",{children:"Sinta o cuidado do preparo com ingredientes selecionados"})]})]}),o.length>0?c.jsx(vl,{title:"Pratos principais",children:e.admin?o.map(k=>c.jsx(gl,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C},k.id)):m?l.map(k=>c.jsx(Vn,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C,setFavoriteP:n,favoriteP:t},k.id)):o.map(k=>c.jsx(Vn,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C,setFavoriteP:n,favoriteP:t},k.id))}):"",u.length>0?c.jsx(vl,{title:"Sobremesas",children:e.admin?u.map(k=>c.jsx(gl,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C},k.id)):m?f.map(k=>c.jsx(Vn,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C,setFavoriteP:n,favoriteP:t},k.id)):u.map(k=>c.jsx(Vn,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C,setFavoriteP:n,favoriteP:t},k.id))}):"",x.length>0?c.jsx(vl,{title:"Bebidas",children:e.admin?x.map(k=>c.jsx(gl,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C},k.id)):m?y.map(k=>c.jsx(Vn,{id:k.id,className:"card",title:k.title,image:k.image,description:k.description,price:k.price,setAllOrders:C,setFavoriteP:n,favoriteP:t},k.id)):x.map(k=>c.jsx(Vn,{id:k.id,className:"card",title:k.name,image:k.image,description:k.description,price:k.price,setAllOrders:C,setFavoriteP:n,favoriteP:t},k.id))}):""]}),c.jsx(Lr,{})]})}const ex=q.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 70px auto 80px;

  grid-template-areas: 
    "header"
    "content"
    "footer";
  
  main {
    font-family: 'Roboto', sans-serif;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
  }

  svg {
    min-width: 26px;
    min-height: 30px;
  }

  button {
    margin: 8px;
  }

   button input {
    background: rgba(255, 255, 255, 0.1);
    opacity: 0.8;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
  }

  span, p {
    margin: 8px 0;
  }

  h2 {
    margin-top: 10px;
  }

  .wrapper {
    display: flex;
    gap: 30px;
    width: 100%;
  }

  .files {
    display: flex;
    flex-direction: column;

    input[type='file']{
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 10px;

      border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
      border-radius: 5px;

      font-size: 12px;
      font-weight: 500;
      line-height: 24px;  

      cursor: pointer;
    }
  }

  .input-name{
    width: 72.5%;
  }

  .select {
    width: fit-content;
    display: flex;
    flex-direction: column;

    line-height: 16px;

    select {
      background: none;
      height: 51px;
      border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
      border-radius: 5px;
      color: ${({theme:e})=>e.COLORS.WHITE};
      padding: 10px 10px;
    }

    option {
      background-color: #192227;
    }

    }

    .ingredients {
    width: 100%;

    display: flex;
    flex-direction: column;

    line-height: 16px;
  }

  .tags {
    display: flex;
    min-height: 48px;
    flex-wrap: wrap;
    gap: 10px;
    background: transparent;
    padding: 5px;

    border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
    border-radius: 5px;
  }

  .addDish {
  font-family: 'Poppins', sans-serif ;
  font-weight: 500;

  width: 30%;
  align-self: flex-end;

  background: rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  border: 1px solid #FFFFFF;
  border-radius: 5px;

  margin-bottom: 8px;

  color: #FFF;

  padding: 0.75rem 2rem;
  }

  @media(max-width:426px ) {
    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input-name {
      width: 100%;
    }

    button {
      margin: 0
    }

    .addDish{
      width: 100%;
      margin-bottom: 30px;
    }
  }

`;function tx(){const e=S1(),{user:t}=Zt(),[n,r]=R.useState(""),[i,o]=R.useState(""),[s,l]=R.useState(""),[a,u]=R.useState(null),d=["Prato Principal","Sobremesa","Bebida"],[f,g]=R.useState(d[0]),[x,v]=R.useState([]),[y,E]=R.useState(""),m=kt();function p(){v(L=>[...L,y]),E("")}function h(L){v(k=>k.filter(M=>M!==L))}function w(L){u(L.target.files[0])}async function S(){const L=new FormData;if(y.length>0)return alert("Você deixou um ingrediente pendente no campo para adicionar.");await ce.put(`/dishes/${e.id}`,{name:n,ingredients:x,price:s,description:i,category:f}),L.append("image",a);const k={headers:{"Content-Type":"multipart/form-data"}};await ce.patch(`/dishes/image/${e.id}`,L,k),alert("Prato editado com sucesso!"),m("/")}function C(){m("/")}function O(){ce.get(`/dishes/${e.id}`).then(L=>{o(L.data.description),r(L.data.name),l(L.data.price),g(L.data.category);const k=L.data.ingredients.map(M=>M.name);v(k)})}return R.useEffect(()=>{O()},[]),c.jsxs(ex,{children:[t.admin?c.jsx(Is,{}):c.jsx(Li,{}),c.jsxs("main",{children:[c.jsx(Dt,{onClick:C,Icon:Iu,iconSize:20,title:"voltar"}),c.jsx("h2",{children:"Editar Prato"}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"files",children:[c.jsx("span",{children:"Imagem do Prato"}),c.jsxs("label",{htmlFor:"dish-name",children:[c.jsx(Q1,{size:24})," Selecione imagem"]}),c.jsx("input",{type:"file",id:"dish-name",name:"dish-name",onChange:w,accept:"image/png, image/jpeg"})]}),c.jsxs("div",{className:"input-name",children:[c.jsx("p",{children:"Nome"}),c.jsx(Ct,{placeholder:n,onChange:L=>r(L.target.value),required:!0})]}),c.jsxs("div",{className:" select",children:[c.jsx("span",{htmlFor:"food_type",children:"Categoria"}),c.jsx("select",{value:f,onChange:L=>g(L.target.value),children:d.map((L,k)=>c.jsx("option",{value:L,children:L},String(k)))})]})]}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"ingredients",children:[c.jsx("span",{children:"Ingredientes"}),c.jsxs("div",{className:"tags",children:[x.map((L,k)=>c.jsx(bo,{value:L,onClick:()=>h(L)},String(k))),c.jsx(bo,{isNew:!0,value:y,onChange:L=>E(L.target.value),onClick:p,placeholder:"Ingredientes"})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Preço"}),c.jsx(Ct,{placeholder:s,onChange:L=>l(L.target.value)})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Descrição"}),c.jsx(G1,{placeholder:i,onChange:L=>o(L.target.value)})]}),c.jsx("button",{className:"addDish",onClick:S,children:"Editar Prato"})]}),c.jsx(Lr,{})]})}const nx=q.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 80px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  @media (max-width: 1024px) {
  grid-template-rows: 100px auto 80px;
  }
  @media (max-width: 426px) {
    grid-template-rows: 100px auto 80px;
  }
`,rx=q.div`
  grid-area: content;

  padding: 0 10px;
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;


  > button {
    margin: 16px;
    font-size: 16px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .info-dish {
    margin: 50px auto 0;
    max-width: 1020px;
    width: 100%;

    display: flex;
    gap: 60px;
    img {
      height: 250px;
    }

    .infos {
      font-family: 'Roboto', sans-serif;
      color: ${({theme:e})=>e.COLORS.WHITE};

      h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 40px;
      }

      p {
        font-size: 22px;

        margin-bottom: 20px;
      }

      span {
        font-size: 20px;
        font-weight: 700;
      }

      h5 {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 400;

      }

      li {
        list-style: none;

        display: flex;
        gap: 20px;

        ul {
          display: flex;
          flex-direction: column;

          font-size: 2rem;
          line-height: 30px;
          font-weight: 400;
        }
        ul img {
          height: 60px;
        }
        ul span {
          text-align: center;
        }
      }

      .valueAndQuantity {
        display: flex;
        align-items: center;
        margin-top: 20px;
        display: flex;
        gap: 40px;

        h4 {
          font-size: 1.7rem;
          font-weight: 400;
          color: #82f3ff;
        }
        .quantity {
          display: flex;
          gap: 20px;
          > div {
            display: flex;
            align-items: center;
            gap: 20px;

            font-size: 2rem;
            font-weight: 700;
            line-height: 32px;

            button {
              background: transparent;
              border: none;
              color: ${({theme:e})=>e.COLORS.WHITE};
            }
          }
        }
      }
    }
  }


  @media (max-width: 426px) {
    .info-dish {
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 40px;

      li {
        justify-content: center;
      }

      .dish-img {
        width: 250px;;
        height: 250px;
      }

      .valueAndQuantity {
        flex-direction: column;
      }

      .infos .valueAndQuantity {
        .quantity {
          > div {
            width: 100%;
            display: flex;
          }
        }

        gap: 20px;
        margin-bottom: 30px;
      }
    }
  }
`;function ix(){const e=S1(),[t,n]=R.useState(),[r,i]=R.useState(0),[o,s]=R.useState(()=>{const y=localStorage.getItem("@foodexplorer:dishes");return y?JSON.parse(y):[]}),[l,a]=R.useState(1);function u(){a(y=>y+1)}function d(){if(l<=1)return a(1),alert("Quantidade mínima é 1");a(y=>y-1)}const f=kt();function g(){const y={quantity:l,id:"01",name:"Salada Ravanello",image:imageDish,description:"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",ingredients:[{id:"01",name:"alface",image:imageIngredients},{id:"02",name:"alface",image:imageIngredients},{id:"03",name:"alface",image:imageIngredients},{id:"04",name:"alface",image:imageIngredients}],price:"R$ 25,97"},E=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));E||s(y);const m=E.filter(p=>p.id!==y.id);s(m),s(p=>[...p,y])}function x(){f("/")}const v=()=>{let y=0;o.forEach(E=>{y+=Number(E.quantity)}),i(y)};return R.useEffect(()=>{const y=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));y&&(s(y),v())},[]),R.useEffect(()=>{async function y(){const E=await ce.get(`/dishes/${e.id}`);n(E.data)}y()},[]),c.jsxs(nx,{children:[c.jsx(Li,{allQuantity:r}),c.jsxs(rx,{children:[c.jsx(Dt,{Icon:Iu,iconSize:30,title:"voltar",onClick:x}),t&&c.jsxs("div",{className:"info-dish",children:[c.jsx("img",{src:`${ce.defaults.baseURL}/dishes/${t.image}`,className:"dish-img",alt:"image dish"}),c.jsxs("div",{className:"infos",children:[c.jsx("h2",{children:t.name}),c.jsx("p",{children:t.description}),c.jsx("li",{children:t.ingredients.map(y=>c.jsxs("ul",{children:[c.jsx("img",{src:`${ce.defaults.baseURL}/${y.image}`,alt:"ingredients",className:"ingredients"}),c.jsx("h5",{children:y.name})]},y.id))}),c.jsxs("div",{className:"valueAndQuantity",children:[c.jsxs("h4",{children:["R$ ",t.price]}),c.jsxs("div",{className:"quantity",children:[c.jsxs("div",{children:[c.jsx("button",{onClick:d,children:"−"}),c.jsx("span",{children:l.toString().padStart(2,0)}),c.jsx("button",{onClick:u,children:"+"})]}),c.jsx(bn,{icon:c.jsx(_u,{}),title:"incluir",onClick:g})]})]})]})]})]}),c.jsx(Lr,{})]})}const ox=q.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 80px;

  grid-template-areas:
    'header'
    'content'
    'footer';

    @media (max-width: 400px) {
    grid-template-rows: auto auto 70px;
  }


`,sx=q.div`
  grid-area: content;

  padding: 0 10px;
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;


  display: flex;
  justify-content: space-between;
  gap: 16px;

  h1, h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1 {
    font-size: 2rem
  }

  h2 {
    font-size: 1.25rem;
  }

  span {

  }

  .orders {

    display: flex;
    flex-direction: column;
    gap: 10px;


    .scroll {
      overflow-y: auto;
      width: 100%;

      height: 50vh;
    }

    .foods {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 100px;
      }

      .infos {
        display: flex;
        align-items: center;
        gap: 5px;
        .quantity,
        .name {
          color: ${({theme:e})=>e.COLORS.WHITE};
          font-weight: 500;
          font-size: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .value {
          display: inline-block;
          font-family: 'Roboto', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;

          color: ${({theme:e})=>e.COLORS.GRAY};

        }
      }

      button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        margin-top: 5px;
        color: ${({theme:e})=>e.COLORS.PINK};
      }
    }

  }

  .payment {

    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-bottom: 16px;
  }

  @media(max-width: 426px) {
    flex-direction: column;
    ;
  }

 

`,lx=q.div`
  border: 1px solid #192227;
  border-radius: 8px;

  .pay {
    display: flex;
    > button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      
      margin: 0;
      width: 100%;
      padding: 10px 30px;

      border-bottom: 1px solid #192227;

      justify-content: center;

      overflow: hidden;
      :hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    button:first-child {
      border-right: 1px solid #192227;
      border-top-left-radius: 8px;
    }

    button:last-child {
      border-top-right-radius: 8px;
    }

    .active {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`,ax=q.div`
  width: 100%;
  height: 50vh;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  .status-order {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.8rem;
      text-align: center;

      color: ${({theme:e})=>e.COLORS.GRAY};
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      p {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-size: 1.4rem;

        color: ${({theme:e})=>e.COLORS.GRAY};
      }
    }
  }
`;function ux(e){return jt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"}}]})(e)}const cx=q.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  color: ${({theme:e})=>e.COLORS.GRAY};

  .creditCardNumber {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
  input {
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: transparent;
    color: ${({theme:e})=>e.COLORS.GRAY};
  }

  button {
    justify-content: center;
  }

  label {
    font-family: 'Roboto', sans-serif;
  }

  .other-informations {
  display: flex;
  gap: 20px;
  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
}

`;function dx({paymentMethod:e}){return c.jsxs(cx,{children:[c.jsxs("div",{className:"creditCardNumber",children:[c.jsx("label",{htmlFor:"creditCardNumber",children:"Número do Cartão"}),c.jsx("input",{type:"text",name:"creditCardNumber",id:"creditCardNumber",placeholder:"0000 0000 0000 0000"})]}),c.jsxs("div",{className:"other-informations",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"valid",children:"Validade"}),c.jsx("input",{type:"text",name:"valid",id:"valid",placeholder:"04/25"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"cvc",children:"CVC"}),c.jsx("input",{type:"text",name:"cvc",id:"cvc",placeholder:"04/25"})]})]}),c.jsx(bn,{icon:c.jsx(_u,{}),title:"Finalizar pagamento",onClick:e})]})}const fx=q.div`
  img {
    display: flex;
    margin: 0 auto;
    max-width: 300px;
  }
`,px="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAYAAACJIC3tAAAAAXNSR0IArs4c6QAAD5RJREFUeF7t3dFyK0cOA1D7/z/aW7XJq+aohMA9kpFXXpIgSDR7RrLy/fPz8/O1/8bAGKgw8D2BVXhd0DHwfwYmsA3CGCgyMIEVyV3oMTCBbQbGQJGBCaxI7kKPgQlsMzAGigxMYEVyF3oMUGDf398fzZI+BkzrV3yRq/yKL3/ll/10fuFr21m/PgdrN6hNgOKToPCAUXzhE/+KL3/ll/10fuFr21n/BHb9RZZ0QNUADYDyK778lV/20/mFr21n/RPYBJYMIQcsvAEk2H7Dl/VPYBNYMogcsAns+su+7StG0tz/wrc9IIqvGsS/4stf+WU/nV/42nbWvw22DZYMIQdsG2wb7GrA0g2gAdRwK7/iy1/5ZT+dX/jadtafbjAlaBeo+Bow4Ze/8suu/PIXvtPx2/jET2pP8ccfNKcNTAmQf0xQ+YqT8pfWd5q/tH7hT+0pvxMY/qBbBKcNTAdM+E7Hb+NL+Zd/in8Cm8AuZyweMNwA0gNAAkntcf17Buu+RVSD0wFLB0D40vipv/C17Sn+bbBtsG2wCwYmMBxhMUF7yXHJsDZwyn97Qyl+in8bbBtsG+ydN5hOAJ0gsrdPUOFv51f9sqf4FV/2NL/8lV/2dv/qG+ztCQrfgql+NVgDIvu75xd+1S+7+Fd++rffIgqgCJCdBR4WiOoXftUv+7vnF37VL7v4V376T2DZa3oSHApcAyJ7OiCKL3uaX/7KL3u7f7sihi852g3SgMiuARV+xZc9zS9/5Zdd9Ss//bfBtsE0hIk9HtDDH5PE+CewCSwRkHzjAZ3AsgFVg2Tnig6fgdoDIvyqX/YUv+LLnuaXv/LLLv6Vn/7bYN0Dgg04fEJrAOMBKx9wwi972h/6T2AT2NUQTmDXP7w7gR0+QdmAbbDLJSOBa0PJnvaH/ttg22DbYI8ZkMAnsG0wHeLRBuGAHeZfxdfxb4Ntg22DbYM9ZKB+AoXPSCk+ncCyK7/84yvSNlj2u4hqoBqkBsue5k/92/gUX3bVJ3/1T/Hb/sIvex3/rojXV0Q1KLWnA6j8ii9/2esDGt4gjuOfwCYwDeGVfQLDM/wENoFNYHvJcewlRzJ8z/jqCqcNoRyKL3/ZhU/5U3/hkz3NT/9tsG0wDeGuiI8ZmMDC18TJ8D3jm57wyqH48pedAxby//b4t8G2wSSibbBtsIcM6ATUCZwM3zO+bXyK/wzGCezGAksbmPprwCSw1D/Ff9o/rT/1f/v621fEtycofIY4XX+aPxVI6p/iT/1T/PVflUoLTP1jgiawyxZ8+g0gnp9tsOzb9Bqw9IA47R8P2JsfUHH9E9gEdiXieMAmsO636XcCn2Ygyz+B3fw3ObL25t5/fUBSBv86f3H9uyLuirgr4mMGjgssPSFP++slRUxw+Azy6flP9z/Nz/lJN1gK8LQ/CZpAqq/pT/c/zc/5mcC6V8RP30AcsPJfJKcCSf1Z/wQ2gZ18BksH/LT/BIYOkKBdEXdFvGCA87MNtg22Dfb6HpzAtsGqG4gDtmew7Jscr2v/Hp7pgMw/uwHcYwpeR8H+64r4euq/4dl+SygW2eDDz5DC/+l2/rnKpxOQ1jeBnf3JhbR/bf8JLGR4ApvALl8S7YqYKWwCm8AmsExDl94T2AQ2gU1gDxlovyQpUv8WofcMFrZpG2wbbBssFNGdv+nQ3kDpAVKk/i1Cc4OJYFWpAZB/ml/xU3yKn9pV/93xq/60Pvkrf2oX/xPY9RdZUv5jfw2QGhwDKAdI65N/Gf6X+J/AJrD2DN76LWxa/AQGBkVQ2oDUXyf03fGr/rQ++St/ahf/22DbYOmMRf4SCAf48Lf1iU/f5BABYlcA5J/mV/wUn+KndtV/d/yqP61P/sqf2sX/Ntg2WDpjkb8EwgHeBss+iFQDou5+ffEtUBo/9Vf9GsA0f9s/rU/+bfziP95gTBD+PVKboNMNUn3iV/7t+lJ8bfzCJ37kT/zpM5gAtAtQgbILn/zbdvGr/O36Unxt/MInfuRP/BPY9Y/7i8C2PW5w+RklxSf+JAD5C5/iy1/5d0UsD6AaIHvc4HJ9KT7VLwHIX/gUX/7KP4GVB1ANkD1ucLm+FJ/qlwDkL3yKL3/ln8DKA6gGyB43uFxfik/1SwDyFz7Fl7/yT2DlAVQDZI8bXK4vxaf6JQD5C5/iy1/5J7DyAKoBsscNLteX4lP9EoD8hU/x5a/8xwUmgCpQBCl+ahc+xRd+xW/7C/+728VvWt8EFjKYNqgtEOFT/pCe27uLn7SACSxkMG2QBlzx2/4hPbd3F79pARNYyGDaoLZAhE/5Q3pu7y5+0gImsJDBtEEacMVv+4f03N5d/KYFTGAhg2mD2gIRPuUP6bm9u/hJC5jAQgbTBmnAFb/tH9Jze3fxmxYwgYUMpg1qC0T4lD+k5/bu4ictgAJLE8i/3eA2gX+9PtUvu/qf9k/xhS/Orz9XEYDUnhKg/ClBii/7p9en+mUXP2n/FF/44vwTmCjO7GmDlT0dAMVv28VPWp/iq744/wQmijN72mBlTwdA8dt28ZPWp/iqL84/gYnizJ42WNnTAVD8tl38pPUpvuqL809gojizpw1W9nQAFL9tFz9pfYqv+uL8E5gozuxpg5U9HQDFb9vFT1qf4qu+OP8EJooze9pgZU8HQPHbdvGT1qf4qi/Of3eBqcCUQBEse4qv7S/84i/Fp/yyn84f45vAROG1PR2Atr+qm8DEUNj/CaxMcPjLxqkAVF0aX/7KL3t6ACl+aie+CSyjmARPYBHBKb9R8ieciW8Ce4LFi39CgiewiOCU3yj5E87EN4E9weIE9pCBXRGv/+9Bt/82PU+I8s+SSX4pvra/8EsgKT7ll/10/hjfNpgoDN8i7YoYEfzxAtMJF7H3hLMIfiLE5T9p1yf8yv/p/upfys/x+NpgKlAFpHYNWBq/XZ/wK/+n+6t/KT/H409g3f8/2KcL5O0FEF7hKeAJbAK7GpL2AcEBbQugHX8Cm8AmsMcM6IDhATGBTWAT2ASmg+Jlu54hXg78r6NOQOX/dH/xm/JzPP422DbYNtjBDaYTQPb0BJK/8p+2tzdQWl/Kr+oTvjS/4sue4lf8+lelRKAKlL8KPG1P65N/Wl/Kb4ovzZ/Wn+JX/glMDIV2NVADJv8Q3pfyK36KL80vfLKn+BV/AhNDoV0N1IDJP4Q3gf1cfxs+5lcvOeIE4Qd5GsAUX9tfAlF98k/xK7/ip/jS/MIne4pf8bfBxFBoVwM1YPIP4W2DbYN1X6OnAyp/CWQCO9tf9Uf9lX0bTAyFdjVwApvAohHTAEXBv76+NMBpfOH/6/nFr/gRv3ePL3zHN5gAyq4Gyl92DcBfzy/+xI/4vXt84ZvAwJAGQAOkBsh+9/zCL35U393jC98ENoFdMvDuAmjjn8DEwAQ2gV0woA2s8doGm8AmsAnsMQPpCcMTKPwmiuLLrivO6fqFX/hU393jC9822DbYNtjJDZaeMFJ4am+fkHfHp/pT/Hfvf1pfnT992ffuBIug0/jb+BQ/HcDT/KX45V/nbwJTCzK7GpgOsOJn6L/iLwOn+dv+df4msG4L1cAJrMu/oqs/8pedLznSARCA1C6CTuNv41P8lN/T/KX45V/nbxtMLcjsamA6wIqfod8VMeZvAkspvPaXACawLv+Krv7IX/ZdEcVQaFcDJ7CQ4NBd/QnDf1FgaYJ3928LQPE1APIX/2l8+Su/7KqvnV/4ZJ/AwJAaLII1AIqf+p/Gp/yyp/wofts+gU1glwycHvDT+VMBTmAT2ASWqujCfwKbwCawCazIwAQ2gRXHaxtsApvAJrAiAxPYBFYcL24wvcUpYvuV0HoNLhDvzo/qV31391f/2vYJLPxtcg1gu4Fp/LsLRPwKf8pP6j+BTWDVK2IqkNQ/FUjqP4FNYBNYqqLkczCdIEVsvxI6vWK8Oz+qX/Xd3f9XhmgCe8yABkQN0gDK/7Rd9au+u/uf5ndXxF0Rd0UsqnACm8AmsDsLTFeEIvanQp++4gik8Mm/zb/wnc4vfmSv409/MqANUATJng5I6p/ik3+b/3b9qk/55S97nb8J7Kd6RVKD0wGqD8jNf5tf/Mpe528Cm8CuhlAHQH1AIXAJSPY6/glsApvAJMPX7fFbxPYJ8Hpp/3imJ3DqL/yKL/82/8J3Or/4kb2OfxtsG2wbTDJ83b4Nhs/B2ie44qu19RN4LznUguuXZO0Nlg6QqtOAKX/qL3yyK7/823bx185/On7an/oGazdIBCh/6p8OgPKn8VN/8ZfGv7t/2p8JLLwipgOSNjDNL/8J7PoZnfztipi95BDBsk9gYuisPe3PNtg22PVDevmD3rPycfYJLBSICGxfkZTfI9D9F+36u+jz6Gl/tsFCgaYtTBuY5pf/BLZnsOiKowFvD5jySwBte7v+Nv40ftqfbbDwDy7VwHRA1eA0vvDfPb/wH+dnbxGzK0C7wXcf8NMD3OZf8dmfCWwCuxoiDlD5LaPySwCnD4BdEXdFvJxRDfjpAZ7ADp9wGgANkBoou/LLX/jS+O+eX/iP87Mr4q6IuyJKpo/tPAAnsAlsApvAHjLAE+TN/54pre/10fnH8+75Vd+uiGII9nQA5C94aqDiy1/5FV/+sqf4FD/FL3yKn/qrvr1FDN8ipg2SvxqoAZK/7Ck+xU/xC5/ip/6qbwKbwC5nRAOoAZNdApC/8Cl+6k98e8mRveRIGyR/NVADJH/ZU3yKn+IXPsVP/VXfNtg22DbYBQMS6ARWfouYnoDyVwPTAVD8FJ/ip/iFT/FTf9W3DbYNtg22DfaYgeMnVLghdYLqhFT98pc9xaf4KX7hU/zUX/XVN5gAtO0pgfIXfjVY/sqv+Kl/ik/+d7eLX+GfwMo/GRA3qLwh2/g0gHe3x/y0X9OfJjA9weWv+uIGTWCiuGqP+zeBdX8XMW7QBFYVkILH/ZvAJjAN2ZU93fBJ7t/wncDAsgZABMpfTVZ8+Su/4qf+KT75390ufoV/Lzn2kkMzcmmXgKPgN3CewLbBIgHEA1T+SYjTGov5SZ/BThOQ5heB6Qmt+MKv/H89fsqf/GUX//EVUQDubidB4Qmt+OJnAhND13bxl0V/4i++t8E++y2iBkgDePcDIq1P/rKLn22wD3/JoQGZwMTQtX0CA38kaFfEaALbAhY45Ze/7JyfXRF3RbwaIg2QBlADnsZP88tfduHfFXFXxMsZ0gBpACcwMCiCRPDd7RqgtH7FFz/K/9fjp/zJX3bxzw2mBLOPgTHwmIEJbNMxBooMTGBFchd6DExgm4ExUGRgAiuSu9BjYALbDIyBIgMTWJHchR4DE9hmYAwUGfgf+zDOeNffUMkAAAAASUVORK5CYII=";function hx(){return c.jsx(fx,{children:c.jsx("img",{src:px,alt:""})})}function mx(){return c.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M15.9778 18.5353L15.978 18.5355C16.4223 18.9796 16.9442 19.3203 17.5127 19.545L14.3323 22.7255C13.2989 23.7588 11.6235 23.7588 10.5903 22.7255L10.5903 22.7255L7.49699 19.6323C8.14385 19.4119 8.73705 19.0447 9.23337 18.5486L9.23355 18.5485L12.6122 15.1697L15.9778 18.5353Z",stroke:"white",strokeWidth:"2"}),c.jsx("path",{d:"M17.5126 5.45499C16.9441 5.67967 16.4222 6.02044 15.9779 6.46451L15.9777 6.46471L12.612 9.83069L9.23352 6.45157L9.23329 6.45134C8.73701 5.9553 8.14386 5.58815 7.49705 5.36773L10.5902 2.27458L10.5902 2.27455C11.6234 1.24125 13.2988 1.24116 14.3323 2.27457C14.3323 2.27458 14.3323 2.2746 14.3324 2.27461L17.5126 5.45499ZM12.377 10.0657C12.3773 10.0654 12.3776 10.0651 12.378 10.0648L12.377 10.0657ZM12.8465 10.0652L12.8464 10.0651C12.8464 10.0651 12.8465 10.0652 12.8465 10.0652Z",stroke:"white",strokeWidth:"2"}),c.jsx("mask",{id:"path-3-inside-1_1_140",fill:"white",children:c.jsx("path",{d:"M23.3933 9.92194L20.6304 7.15898C20.5696 7.18334 20.5037 7.19855 20.4341 7.19855H19.1779C18.5284 7.19855 17.8926 7.46198 17.4337 7.92124L13.8341 11.521C13.4972 11.8578 13.0546 12.0264 12.6124 12.0264C12.1697 12.0264 11.7274 11.8578 11.3907 11.5213L7.77747 7.90808C7.31854 7.44872 6.68277 7.1854 6.0333 7.1854H4.48863C4.42274 7.1854 4.36118 7.16987 4.30306 7.14798L1.52911 9.92194C0.105205 11.3458 0.105205 13.6543 1.52911 15.0782L4.30294 17.8521C4.36117 17.8302 4.42274 17.8146 4.48863 17.8146H6.0333C6.68277 17.8146 7.31854 17.5513 7.77747 17.0921L11.3903 13.4792C12.0434 12.8267 13.1817 12.8265 13.8341 13.4795L17.4337 17.0789C17.8926 17.5381 18.5284 17.8016 19.1779 17.8016H20.4341C20.5037 17.8016 20.5696 17.8168 20.6304 17.8412L23.3933 15.0782C24.8171 13.6543 24.8171 11.3458 23.3933 9.92192"})}),c.jsx("path",{d:"M20.6304 7.15898L22.0446 5.74477L21.1116 4.81175L19.8867 5.30239L20.6304 7.15898ZM17.4337 7.92124L18.848 9.33543L18.8484 9.33495L17.4337 7.92124ZM13.8341 11.521L15.2483 12.9352L15.2483 12.9352L13.8341 11.521ZM11.3907 11.5213L9.97646 12.9355L9.97692 12.936L11.3907 11.5213ZM7.77747 7.90808L6.36259 9.32163L6.36325 9.3223L7.77747 7.90808ZM4.30306 7.14798L5.00801 5.27634L3.80092 4.82169L2.88884 5.73377L4.30306 7.14798ZM1.52911 9.92194L2.94333 11.3361L2.94333 11.3361L1.52911 9.92194ZM1.52911 15.0782L2.94333 13.664L2.94333 13.664L1.52911 15.0782ZM4.30294 17.8521L2.88873 19.2663L3.80011 20.1777L5.00659 19.7242L4.30294 17.8521ZM7.77747 17.0921L6.36325 15.6779L6.36275 15.6784L7.77747 17.0921ZM11.3903 13.4792L9.97671 12.0644L9.97612 12.065L11.3903 13.4792ZM13.8341 13.4795L12.4192 14.893L12.4199 14.8937L13.8341 13.4795ZM17.4337 17.0789L18.8484 15.6652L18.8479 15.6646L17.4337 17.0789ZM20.6304 17.8412L19.8861 19.6975L21.1113 20.1887L22.0446 19.2554L20.6304 17.8412ZM23.3933 15.0782L24.8075 16.4924L24.8076 16.4924L23.3933 15.0782ZM24.8075 8.50772L22.0446 5.74477L19.2162 8.57319L21.9791 11.3362L24.8075 8.50772ZM19.8867 5.30239C20.0217 5.2483 20.2085 5.19855 20.4341 5.19855V9.19855C20.7988 9.19855 21.1174 9.11839 21.3741 9.01557L19.8867 5.30239ZM20.4341 5.19855H19.1779V9.19855H20.4341V5.19855ZM19.1779 5.19855C17.9979 5.19855 16.8532 5.67276 16.019 6.50753L18.8484 9.33495C18.9321 9.25121 19.0589 9.19855 19.1779 9.19855V5.19855ZM16.0195 6.50705L12.4199 10.1068L15.2483 12.9352L18.848 9.33543L16.0195 6.50705ZM12.4199 10.1068C12.4742 10.0525 12.5473 10.0264 12.6124 10.0264V14.0264C13.5619 14.0264 14.5203 13.6632 15.2483 12.9352L12.4199 10.1068ZM12.6124 10.0264C12.677 10.0264 12.7502 10.0524 12.8044 10.1066L9.97692 12.936C10.7047 13.6632 11.6625 14.0264 12.6124 14.0264V10.0264ZM12.8049 10.1071L9.19168 6.49387L6.36325 9.3223L9.97646 12.9355L12.8049 10.1071ZM9.19234 6.49453C8.35796 5.65936 7.21306 5.1854 6.0333 5.1854V9.1854C6.15248 9.1854 6.27912 9.23808 6.36259 9.32163L9.19234 6.49453ZM6.0333 5.1854H4.48863V9.1854H6.0333V5.1854ZM4.48863 5.1854C4.74027 5.1854 4.92594 5.24543 5.00801 5.27634L3.5981 9.01962C3.79642 9.09432 4.10521 9.1854 4.48863 9.1854V5.1854ZM2.88884 5.73377L0.114895 8.50773L2.94333 11.3361L5.71727 8.56219L2.88884 5.73377ZM0.114896 8.50773C-2.09006 10.7127 -2.09006 14.2875 0.114896 16.4924L2.94333 13.664C2.30047 13.0211 2.30047 11.979 2.94333 11.3361L0.114896 8.50773ZM0.114895 16.4924L2.88873 19.2663L5.71716 16.4378L2.94333 13.664L0.114895 16.4924ZM5.00659 19.7242C4.92575 19.7546 4.74032 19.8146 4.48863 19.8146V15.8146C4.10516 15.8146 3.7966 15.9058 3.5993 15.9799L5.00659 19.7242ZM4.48863 19.8146H6.0333V15.8146H4.48863V19.8146ZM6.0333 19.8146C7.21304 19.8146 8.35785 19.3407 9.19218 18.5058L6.36275 15.6784C6.27923 15.7619 6.1525 15.8146 6.0333 15.8146V19.8146ZM9.19168 18.5063L12.8046 14.8934L9.97612 12.065L6.36325 15.6779L9.19168 18.5063ZM12.804 14.894C12.7157 14.9822 12.6358 14.9898 12.6124 14.9898C12.5889 14.9898 12.5082 14.9821 12.4192 14.893L15.249 12.066C13.8148 10.6303 11.41 10.6323 9.97671 12.0644L12.804 14.894ZM12.4199 14.8937L16.0195 18.4931L18.8479 15.6646L15.2483 12.0652L12.4199 14.8937ZM16.019 18.4926C16.8532 19.3274 17.9979 19.8016 19.1779 19.8016V15.8016C19.0589 15.8016 18.9321 15.7489 18.8484 15.6652L16.019 18.4926ZM19.1779 19.8016H20.4341V15.8016H19.1779V19.8016ZM20.4341 19.8016C20.2088 19.8016 20.0219 19.7519 19.8861 19.6975L21.3746 15.9848C21.1172 15.8816 20.7985 15.8016 20.4341 15.8016V19.8016ZM22.0446 19.2554L24.8075 16.4924L21.9791 13.664L19.2162 16.4269L22.0446 19.2554ZM24.8076 16.4924C27.0124 14.2874 27.0124 10.7127 24.8076 8.50776L21.9791 11.3361C22.6219 11.979 22.6219 13.0212 21.9791 13.664L24.8076 16.4924Z",fill:"white",mask:"url(#path-3-inside-1_1_140)"})]})}function gx(){return c.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 25 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.961182 2.64284C0.961182 1.69607 1.72869 0.928558 2.67547 0.928558H23.2469C24.1937 0.928558 24.9612 1.69607 24.9612 2.64284V16.3571C24.9612 17.3039 24.1937 18.0714 23.2469 18.0714H2.67547C1.72869 18.0714 0.961182 17.3039 0.961182 16.3571V2.64284ZM23.2469 2.64284H2.67547V16.3571H23.2469V2.64284Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.3898 13.7857C16.3898 13.3123 16.7735 12.9286 17.2469 12.9286H20.6755C21.1489 12.9286 21.5326 13.3123 21.5326 13.7857C21.5326 14.2591 21.1489 14.6428 20.6755 14.6428H17.2469C16.7735 14.6428 16.3898 14.2591 16.3898 13.7857Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2469 13.7857C11.2469 13.3123 11.6307 12.9286 12.104 12.9286H13.8183C14.2917 12.9286 14.6755 13.3123 14.6755 13.7857C14.6755 14.2591 14.2917 14.6428 13.8183 14.6428H12.104C11.6307 14.6428 11.2469 14.2591 11.2469 13.7857Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.961182 6.16851C0.961182 5.69513 1.34494 5.31137 1.81832 5.31137H24.104C24.5774 5.31137 24.9612 5.69513 24.9612 6.16851C24.9612 6.6419 24.5774 7.02566 24.104 7.02566H1.81832C1.34494 7.02566 0.961182 6.6419 0.961182 6.16851Z",fill:"white"})]})}function vx(){return c.jsx("svg",{width:"150",height:"150",viewBox:"0 0 129 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64.4612 20C40.1607 20 20.4612 39.6995 20.4612 64C20.4612 88.3005 40.1607 108 64.4612 108C88.7617 108 108.461 88.3005 108.461 64C108.461 39.6995 88.7617 20 64.4612 20ZM12.4612 64C12.4612 35.2812 35.7424 12 64.4612 12C93.18 12 116.461 35.2812 116.461 64C116.461 92.7188 93.18 116 64.4612 116C35.7424 116 12.4612 92.7188 12.4612 64ZM64.4612 32C66.6703 32 68.4612 33.7909 68.4612 36V60H92.4612C94.6703 60 96.4612 61.7909 96.4612 64C96.4612 66.2091 94.6703 68 92.4612 68H64.4612C62.252 68 60.4612 66.2091 60.4612 64V36C60.4612 33.7909 62.252 32 64.4612 32Z",fill:"#646b6f"})})}function yx({status:e,allOrders:t}){const n=kt(),[r,i]=R.useState(e);async function o(){if(t.length===0)return alert("O carrinho está vazio.");{const l=localStorage.getItem("@foodexplorer:dishes"),a=JSON.parse(l).map(u=>({name:u.name,quantity:u.quantity}));return await ce.post("/orders",{status:e,description:JSON.stringify(a)}),localStorage.removeItem("@foodexplorer:dishes"),i("aproved"),n("/"),alert("Pedido efetuado")}}const s=l=>{switch(l){case"pending":return c.jsxs("div",{className:"status-order",children:[c.jsx(vx,{}),c.jsxs("div",{children:[c.jsx("span",{children:"Aguardando pagamento no caixa "}),c.jsx("p",{children:"Escolha uma forma de pagamento"})]})]});case"pix":return c.jsx(hx,{});case"credit":return c.jsx(dx,{paymentMethod:o});case"aproved":return c.jsxs("div",{className:"status-order",children:[c.jsx(iy,{size:150,color:"#c4c4cc"}),c.jsx("span",{children:"Pagamento aprovado!"})]});case"delivered":return c.jsxs("div",{className:"status-order",children:[c.jsx(ux,{size:150,color:"#c4c4cc"}),c.jsx("span",{children:"Pedido entregue!"})]})}};return c.jsxs(lx,{children:[c.jsxs("div",{className:"pay",children:[c.jsx(Dt,{Icon:mx,iconSize:30,title:"PIX",className:r==="pix"?"active":"",onClick:()=>i("pix")}),c.jsx(Dt,{Icon:gx,iconSize:30,title:"Crédito",className:r==="credit"?"active":"",onClick:()=>i("credit")})]}),c.jsx(ax,{children:s(r)})]})}function xx(){const[e,t]=R.useState(0),[n,r]=R.useState(0),[i,o]=R.useState(()=>{const a=localStorage.getItem("@foodexplorer:dishes");return a?JSON.parse(a):[]});function s(){let a=0;i.forEach(u=>{a+=Number(u.quantity)}),r(a)}function l(a){const u=i.filter(d=>d.id!==a);o(u),localStorage.setItem("@foodexplorer:dishes",JSON.stringify(u))}return R.useEffect(()=>{const a=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));a&&(o(a),s())},[i]),R.useEffect(()=>{let a=0;i.forEach(u=>{a+=Number(u.quantity)*Number(u.price.replace(",","."))}),t(a)},[i]),c.jsxs(ox,{children:[c.jsx(Li,{allQuantity:n}),c.jsxs(sx,{children:[c.jsxs("div",{className:"orders",children:[c.jsx("h1",{children:"Meu pedido"}),c.jsxs("div",{className:"scroll",children:[i&&i.map(a=>c.jsxs("div",{className:"foods",children:[c.jsx("img",{src:`${ce.defaults.baseURL}/dishes/${a.image}`,alt:"food image"}),c.jsxs("div",{children:[c.jsxs("div",{className:"infos",children:[c.jsxs("span",{className:"quantity",children:[a.quantity," x"]}),c.jsx("span",{className:"name",children:a.name}),c.jsxs("span",{className:"value",children:[" R$ ",a.price]})]}),c.jsx(Dt,{title:"Excluir",onClick:()=>l(a.id)})]})]},a.id)),c.jsx("div",{className:"foods"})]}),c.jsxs("h2",{children:["Total: R$ ",e]})]}),c.jsxs("div",{className:"payment",children:[c.jsx("h1",{children:"Pagamento"}),c.jsx(yx,{status:"pending",allOrders:i})]})]}),c.jsx(Lr,{})]})}const wx="/assets/background-404-bb5ac743.png",Sx=q.div`
  width: 100%;
  height: 100vh;

  font-family: 'Poppins', sans-serif;

  background: url(${wx});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    max-width: 80%;
  }

  display: flex;
  align-items: center;
  text-align: center;


  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  h1 {
    font-size: 3rem;
  }


  h2 {
    font-weight: 400;
    font-size: 2rem;
  }

  p {
    margin: 10px 0
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: ${({theme:e})=>e.COLORS.RED};
    color: ${({theme:e})=>e.COLORS.WHITE};
    border-radius: 30px;
    border: none;
    width: 100px;
    height: 35px;
  }

  @media(max-width: 426px) {
    flex-direction: column;
    
    img {
      max-width: 100%;
    padding-left: 70px;
    }
  }


`,Cx="/assets/404-119be92d.png";function Td(){const{user:e}=Zt(),t=kt();function n(){t("/")}function r(){t("/payment")}function i(){t("/create")}return c.jsxs(Sx,{children:[c.jsx("div",{className:"image",children:c.jsx("img",{src:Cx,alt:""})}),c.jsxs("div",{className:"text",children:[c.jsx("h1",{children:"Oops!"}),c.jsx("h2",{children:"Não encontramos a página."}),c.jsx("p",{children:"Talvez você possa encontrar o que precisa aqui:"}),c.jsxs("div",{className:"buttons",children:[c.jsx("button",{onClick:n,children:"Home"}),e.admin?c.jsx("button",{onClick:i,children:"Novo Prato"}):c.jsx("button",{onClick:r,children:"Meu pedido"})]})]})]})}const Ex=q.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 80px;

  grid-template-areas:
    'header'
    'content'
    'footer';

  @media (max-width: 1024px) {
    grid-template-rows: 100px auto 80px;
  }
  @media (max-width: 400px) {
    grid-template-rows: 100px auto 80px;
  }
`,kx=q.div`
  grid-area: content;

  padding: 0 10px;
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;


  h2 {
    font-family: 'Poppins', sans-serif;
    color: ${({theme:e})=>e.COLORS.WHITE};
    font-weight: 500;
    font-size: 2rem;
    margin: 10px;
  }
  table,
  tr,
  td,
  th {
    border: 1px solid #192227;
  }

  table {
    border-spacing: 0;
    border-collapse: separate;
    border: 1px solid #192227;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;

    overflow-x: auto;
    margin-bottom: 10px;
  }

  th {
    font-family: 'Roboto', sans-serif;
    color: ${({theme:e})=>e.COLORS.WHITE};
    padding: 20px 30px;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
  }

  th:first-child {
    border-top-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
  }

  td {
    font-family: 'Roboto', sans-serif;
    text-align: left;
    color: ${({theme:e})=>e.COLORS.GRAY};

    font-size: 1rem;
    padding: 20px 30px;
  }

  select {
    background: none;
    border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
    border-radius: 5px;
    color: ${({theme:e})=>e.COLORS.WHITE};
    padding: 10px 20px;
    width: 100%;

    option {
      border: none;
      font-size: 1rem;
    }
  }

  option {
    font-size: 1.6rem;
    background-color: #192227;

    &:hover {
      background: white;
      color: black;
    }
  }

  span {
    font-size: 1rem;
  }

  @media (max-width: 570px) {
    th {
      font-size: 1rem
    }
  }

  @media (max-width: 1000px) {
    th,
    td,
    select {
      padding: 10px;
    }
  }
`;function jx(){const[e,t]=R.useState([]);async function n(){const s=(await ce.get("/ordersAdm")).data.map(l=>{const a=l.update_at.split(" ");return{id:l.id,status:l.status,description:JSON.parse(l.description),date:a[0].replaceAll("-","/").split("/").reverse().join("/").slice(0,5),hour:a[1].slice(0,5)}});t(s)}async function r(i,o){await ce.put(`/ordersAdm/${o}`,{status:i}),n()}return R.useEffect(()=>{n()},[]),c.jsxs(Ex,{children:[c.jsx(Is,{}),c.jsxs(kx,{children:[c.jsx("h2",{children:"Pedidos"}),c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Código"}),c.jsx("th",{children:"Detalhamento"}),c.jsx("th",{children:"Data e hora"})]})}),c.jsx("tbody",{children:e.map(i=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsxs("select",{name:"status",id:"status",value:i.status,onChange:o=>r(o.target.value,i.id),children:[c.jsx("option",{value:"default",children:"Status"}),c.jsx("option",{value:"readying",children:"Preparando"}),c.jsx("option",{value:"pending",children:"Pendente"}),c.jsx("option",{value:"delivered",children:"Entregue"})]})}),c.jsx("td",{children:c.jsx("p",{children:String(i.id).padStart(5,"0")})}),c.jsx("td",{children:c.jsx("p",{children:i.description.map((o,s)=>c.jsxs("span",{children:[o.quantity," x ",i.description.length-1===s?o.name:o.name+", "," "]},s))})}),c.jsx("td",{children:c.jsxs("p",{children:[i.date," às ",i.hour]})})]},String(i.id)))})]})]}),c.jsx(Lr,{})]})}function Lx(){const{user:e}=Zt();return(()=>e.admin?c.jsxs(ya,{children:[c.jsx(st,{path:"/",element:c.jsx(Ad,{})}),c.jsx(st,{path:"/create",element:c.jsx(dy,{})}),c.jsx(st,{path:"/edit/:id",element:c.jsx(tx,{})}),c.jsx(st,{path:"/orders",element:c.jsx(jx,{})}),c.jsx(st,{path:"*",element:c.jsx(Td,{})})]}):c.jsxs(ya,{children:[c.jsx(st,{path:"/",element:c.jsx(Ad,{})}),c.jsx(st,{path:"/details/:id",element:c.jsx(ix,{})}),c.jsx(st,{path:"/payment",element:c.jsx(xx,{})}),c.jsx(st,{path:"*",element:c.jsx(Td,{})})]}))()}function Rx(){const{user:e}=Zt();return c.jsx(g2,{children:e?c.jsx(Lx,{}):c.jsx(Hv,{})})}const Ox={COLORS:{BACKGROUND:"#000A0F",BACKGROUND_BUTTON:"#FFFFFF",BACKGROUND_HEADER:"#00111A",BACKGROUND_INPUT:"#0D1D25",BACKGROUND_FORM:"#001119",GRAY:"#7C7C8A",GRAY_CARD:"#C4C4CC",WHITE:"#E1E1E6",RED:"#92000E",BLUE:"#82F3FF",PINK:"#AB4D55"}};yl.createRoot(document.getElementById("root")).render(c.jsx(Ve.StrictMode,{children:c.jsxs(Eg,{theme:Ox,children:[c.jsx(Lg,{}),c.jsx($v,{children:c.jsx(Rx,{})})]})}));
