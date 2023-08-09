function U1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Zo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var of={exports:{}},qo={},lf={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),H1=Symbol.for("react.portal"),V1=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),Q1=Symbol.for("react.profiler"),G1=Symbol.for("react.provider"),K1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),X1=Symbol.for("react.suspense"),Z1=Symbol.for("react.memo"),q1=Symbol.for("react.lazy"),sc=Symbol.iterator;function J1(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},af=Object.assign,uf={};function Or(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||sf}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=Or.prototype;function Ba(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||sf}var Ua=Ba.prototype=new cf;Ua.constructor=Ba;af(Ua,Or.prototype);Ua.isPureReactComponent=!0;var ac=Array.isArray,df=Object.prototype.hasOwnProperty,Ha={current:null},ff={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)df.call(t,r)&&!ff.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ki,type:e,key:o,ref:l,props:i,_owner:Ha.current}}function em(e,t){return{$$typeof:ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Va(e){return typeof e=="object"&&e!==null&&e.$$typeof===ki}function tm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uc=/\/+/g;function Zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tm(""+e.key):t.toString(36)}function Ji(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ki:case H1:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Zl(l,0):r,ac(i)?(n="",e!=null&&(n=e.replace(uc,"$&/")+"/"),Ji(i,t,n,"",function(u){return u})):i!=null&&(Va(i)&&(i=em(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(uc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ac(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Zl(o,s);l+=Ji(o,t,n,a,i)}else if(a=J1(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Zl(o,s++),l+=Ji(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function bi(e,t,n){if(e==null)return e;var r=[],i=0;return Ji(e,r,"","",function(o){return t.call(n,o,i++)}),r}function nm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},eo={transition:null},rm={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:eo,ReactCurrentOwner:Ha};Z.Children={map:bi,forEach:function(e,t,n){bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bi(e,function(){t++}),t},toArray:function(e){return bi(e,function(t){return t})||[]},only:function(e){if(!Va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Or;Z.Fragment=V1;Z.Profiler=Q1;Z.PureComponent=Ba;Z.StrictMode=W1;Z.Suspense=X1;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=af({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ha.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)df.call(t,a)&&!ff.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ki,type:e.type,key:i,ref:o,props:r,_owner:l}};Z.createContext=function(e){return e={$$typeof:K1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:G1,_context:e},e.Consumer=e};Z.createElement=pf;Z.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Y1,render:e}};Z.isValidElement=Va;Z.lazy=function(e){return{$$typeof:q1,_payload:{_status:-1,_result:e},_init:nm}};Z.memo=function(e,t){return{$$typeof:Z1,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return Qe.current.useCallback(e,t)};Z.useContext=function(e){return Qe.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Qe.current.useEffect(e,t)};Z.useId=function(){return Qe.current.useId()};Z.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Qe.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};Z.useRef=function(e){return Qe.current.useRef(e)};Z.useState=function(e){return Qe.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Qe.current.useTransition()};Z.version="18.2.0";lf.exports=Z;var C=lf.exports;const W=Zo(C),im=U1({__proto__:null,default:W},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=C,lm=Symbol.for("react.element"),sm=Symbol.for("react.fragment"),am=Object.prototype.hasOwnProperty,um=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cm={key:!0,ref:!0,__self:!0,__source:!0};function hf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)am.call(t,r)&&!cm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lm,type:e,key:o,ref:l,props:i,_owner:um.current}}qo.Fragment=sm;qo.jsx=hf;qo.jsxs=hf;of.exports=qo;var c=of.exports,Ns={},mf={exports:{}},lt={},gf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,$){var F=N.length;N.push($);e:for(;0<F;){var q=F-1>>>1,b=N[q];if(0<i(b,$))N[q]=$,N[F]=b,F=q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var $=N[0],F=N.pop();if(F!==$){N[0]=F;e:for(var q=0,b=N.length,D=b>>>1;q<D;){var M=2*(q+1)-1,B=N[M],P=M+1,J=N[P];if(0>i(B,F))P<b&&0>i(J,B)?(N[q]=J,N[P]=F,q=P):(N[q]=B,N[M]=F,q=M);else if(P<b&&0>i(J,F))N[q]=J,N[P]=F,q=P;else break e}}return $}function i(N,$){var F=N.sortIndex-$.sortIndex;return F!==0?F:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,f=null,p=3,v=!1,g=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=N)r(u),$.sortIndex=$.expirationTime,t(a,$);else break;$=n(u)}}function w(N){if(x=!1,y(N),!g)if(n(a)!==null)g=!0,ze(O);else{var $=n(u);$!==null&&Se(w,$.startTime-N)}}function O(N,$){g=!1,x&&(x=!1,m(R),R=-1),v=!0;var F=p;try{for(y($),f=n(a);f!==null&&(!(f.expirationTime>$)||N&&!G());){var q=f.callback;if(typeof q=="function"){f.callback=null,p=f.priorityLevel;var b=q(f.expirationTime<=$);$=e.unstable_now(),typeof b=="function"?f.callback=b:f===n(a)&&r(a),y($)}else r(a);f=n(a)}if(f!==null)var D=!0;else{var M=n(u);M!==null&&Se(w,M.startTime-$),D=!1}return D}finally{f=null,p=F,v=!1}}var k=!1,T=null,R=-1,E=5,_=-1;function G(){return!(e.unstable_now()-_<E)}function K(){if(T!==null){var N=e.unstable_now();_=N;var $=!0;try{$=T(!0,N)}finally{$?H():(k=!1,T=null)}}else k=!1}var H;if(typeof h=="function")H=function(){h(K)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=K,H=function(){de.postMessage(null)}}else H=function(){S(K,0)};function ze(N){T=N,k||(k=!0,H())}function Se(N,$){R=S(function(){N(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,ze(O))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var F=p;p=$;try{return N()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=p;p=N;try{return $()}finally{p=F}},e.unstable_scheduleCallback=function(N,$,F){var q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,N){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=F+b,N={id:d++,callback:$,priorityLevel:N,startTime:F,expirationTime:b,sortIndex:-1},F>q?(N.sortIndex=F,t(u,N),n(a)===null&&N===n(u)&&(x?(m(R),R=-1):x=!0,Se(w,F-q))):(N.sortIndex=b,t(a,N),g||v||(g=!0,ze(O))),N},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(N){var $=p;return function(){var F=p;p=$;try{return N.apply(this,arguments)}finally{p=F}}}})(vf);gf.exports=vf;var dm=gf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=C,ot=dm;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xf=new Set,ii={};function Vn(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(ii[e]=t,e=0;e<t.length;e++)xf.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=Object.prototype.hasOwnProperty,fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cc={},dc={};function pm(e){return _s.call(dc,e)?!0:_s.call(cc,e)?!1:fm.test(e)?dc[e]=!0:(cc[e]=!0,!1)}function hm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mm(e,t,n,r){if(t===null||typeof t>"u"||hm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wa=/[\-:]([a-z])/g;function Qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wa,Qa);Me[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wa,Qa);Me[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wa,Qa);Me[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ga(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mm(t,n,i,r)&&(n=null),r||i===null?pm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),Ya=Symbol.for("react.forward_ref"),Is=Symbol.for("react.suspense"),Ds=Symbol.for("react.suspense_list"),Xa=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Cf=Symbol.for("react.offscreen"),fc=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,ql;function Hr(e){if(ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||""}return`
`+ql+e}var Jl=!1;function es(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hr(e):""}function gm(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=es(e.type,!1),e;case 11:return e=es(e.type.render,!1),e;case 1:return e=es(e.type,!0),e;default:return""}}function Ms(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Xn:return"Portal";case bs:return"Profiler";case Ka:return"StrictMode";case Is:return"Suspense";case Ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sf:return(e.displayName||"Context")+".Consumer";case wf:return(e._context.displayName||"Context")+".Provider";case Ya:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xa:return t=e.displayName||null,t!==null?t:Ms(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return Ms(e(t))}catch{}}return null}function vm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ms(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ym(e){var t=Ef(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=ym(e))}function Pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ef(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zs(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kf(e,t){t=t.checked,t!=null&&Ga(e,"checked",t,!1)}function $s(e,t){kf(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fs(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fs(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Vr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Of(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mi,Rf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mi=Mi||document.createElement("div"),Mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xm=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){xm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gr[t]=Gr[e]})});function Tf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+t).trim():t+"px"}function Af(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wm=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(wm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function Za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,cr=null,dr=null;function vc(e){if(e=Ri(e)){if(typeof Qs!="function")throw Error(A(280));var t=e.stateNode;t&&(t=rl(t),Qs(e.stateNode,e.type,t))}}function Lf(e){cr?dr?dr.push(e):dr=[e]:cr=e}function Nf(){if(cr){var e=cr,t=dr;if(dr=cr=null,vc(e),t)for(e=0;e<t.length;e++)vc(t[e])}}function _f(e,t){return e(t)}function bf(){}var ts=!1;function If(e,t,n){if(ts)return e(t,n);ts=!0;try{return _f(e,t,n)}finally{ts=!1,(cr!==null||dr!==null)&&(bf(),Nf())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Gs=!1;if(Gt)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Gs=!1}function Sm(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Kr=!1,yo=null,xo=!1,Ks=null,Cm={onError:function(e){Kr=!0,yo=e}};function Em(e,t,n,r,i,o,l,s,a){Kr=!1,yo=null,Sm.apply(Cm,arguments)}function Pm(e,t,n,r,i,o,l,s,a){if(Em.apply(this,arguments),Kr){if(Kr){var u=yo;Kr=!1,yo=null}else throw Error(A(198));xo||(xo=!0,Ks=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Df(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yc(e){if(Wn(e)!==e)throw Error(A(188))}function km(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yc(i),e;if(o===r)return yc(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Mf(e){return e=km(e),e!==null?zf(e):null}function zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zf(e);if(t!==null)return t;e=e.sibling}return null}var $f=ot.unstable_scheduleCallback,xc=ot.unstable_cancelCallback,Om=ot.unstable_shouldYield,jm=ot.unstable_requestPaint,Ee=ot.unstable_now,Rm=ot.unstable_getCurrentPriorityLevel,qa=ot.unstable_ImmediatePriority,Ff=ot.unstable_UserBlockingPriority,wo=ot.unstable_NormalPriority,Tm=ot.unstable_LowPriority,Bf=ot.unstable_IdlePriority,Jo=null,Mt=null;function Am(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:_m,Lm=Math.log,Nm=Math.LN2;function _m(e){return e>>>=0,e===0?32:31-(Lm(e)/Nm|0)|0}var zi=64,$i=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Wr(s):(o&=l,o!==0&&(r=Wr(o)))}else l=n&~i,l!==0?r=Wr(l):o!==0&&(r=Wr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function bm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Im(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=bm(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uf(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function ns(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Dm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var le=0;function Hf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vf,eu,Wf,Qf,Gf,Xs=!1,Fi=[],dn=null,fn=null,pn=null,si=new Map,ai=new Map,ln=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ri(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zm(e,t,n,r,i){switch(t){case"focusin":return dn=Dr(dn,e,t,n,r,i),!0;case"dragenter":return fn=Dr(fn,e,t,n,r,i),!0;case"mouseover":return pn=Dr(pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return si.set(o,Dr(si.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ai.set(o,Dr(ai.get(o)||null,e,t,n,r,i)),!0}return!1}function Kf(e){var t=An(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Df(n),t!==null){e.blockedOn=t,Gf(e.priority,function(){Wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=Ri(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function Sc(e,t,n){to(e)&&n.delete(t)}function $m(){Xs=!1,dn!==null&&to(dn)&&(dn=null),fn!==null&&to(fn)&&(fn=null),pn!==null&&to(pn)&&(pn=null),si.forEach(Sc),ai.forEach(Sc)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,$m)))}function ui(e){function t(i){return Mr(i,e)}if(0<Fi.length){Mr(Fi[0],e);for(var n=1;n<Fi.length;n++){var r=Fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&Mr(dn,e),fn!==null&&Mr(fn,e),pn!==null&&Mr(pn,e),si.forEach(t),ai.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)Kf(n),n.blockedOn===null&&ln.shift()}var fr=Zt.ReactCurrentBatchConfig,Co=!0;function Fm(e,t,n,r){var i=le,o=fr.transition;fr.transition=null;try{le=1,tu(e,t,n,r)}finally{le=i,fr.transition=o}}function Bm(e,t,n,r){var i=le,o=fr.transition;fr.transition=null;try{le=4,tu(e,t,n,r)}finally{le=i,fr.transition=o}}function tu(e,t,n,r){if(Co){var i=Zs(e,t,n,r);if(i===null)fs(e,t,r,Eo,n),wc(e,r);else if(zm(i,e,t,n,r))r.stopPropagation();else if(wc(e,r),t&4&&-1<Mm.indexOf(e)){for(;i!==null;){var o=Ri(i);if(o!==null&&Vf(o),o=Zs(e,t,n,r),o===null&&fs(e,t,r,Eo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fs(e,t,r,null,n)}}var Eo=null;function Zs(e,t,n,r){if(Eo=null,e=Za(r),e=An(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Df(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Eo=e,null}function Yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case qa:return 1;case Ff:return 4;case wo:case Tm:return 16;case Bf:return 536870912;default:return 16}default:return 16}}var an=null,nu=null,no=null;function Xf(){if(no)return no;var e,t=nu,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return no=i.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function Cc(){return!1}function st(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bi:Cc,this.isPropagationStopped=Cc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=st(jr),ji=ye({},jr,{view:0,detail:0}),Um=st(ji),rs,is,zr,el=ye({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(rs=e.screenX-zr.screenX,is=e.screenY-zr.screenY):is=rs=0,zr=e),rs)},movementY:function(e){return"movementY"in e?e.movementY:is}}),Ec=st(el),Hm=ye({},el,{dataTransfer:0}),Vm=st(Hm),Wm=ye({},ji,{relatedTarget:0}),os=st(Wm),Qm=ye({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=st(Qm),Km=ye({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ym=st(Km),Xm=ye({},jr,{data:0}),Pc=st(Xm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jm[e])?!!t[e]:!1}function iu(){return e0}var t0=ye({},ji,{key:function(e){if(e.key){var t=Zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n0=st(t0),r0=ye({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=st(r0),i0=ye({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),o0=st(i0),l0=ye({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s0=st(l0),a0=ye({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=st(a0),c0=[9,13,27,32],ou=Gt&&"CompositionEvent"in window,Yr=null;Gt&&"documentMode"in document&&(Yr=document.documentMode);var d0=Gt&&"TextEvent"in window&&!Yr,Zf=Gt&&(!ou||Yr&&8<Yr&&11>=Yr),Oc=String.fromCharCode(32),jc=!1;function qf(e,t){switch(e){case"keyup":return c0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function f0(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:(jc=!0,Oc);case"textInput":return e=t.data,e===Oc&&jc?null:e;default:return null}}function p0(e,t){if(qn)return e==="compositionend"||!ou&&qf(e,t)?(e=Xf(),no=nu=an=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zf&&t.locale!=="ko"?null:t.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!h0[e.type]:t==="textarea"}function ep(e,t,n,r){Lf(r),t=Po(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,ci=null;function m0(e){dp(e,0)}function tl(e){var t=tr(e);if(Pf(t))return e}function g0(e,t){if(e==="change")return t}var tp=!1;if(Gt){var ls;if(Gt){var ss="oninput"in document;if(!ss){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),ss=typeof Tc.oninput=="function"}ls=ss}else ls=!1;tp=ls&&(!document.documentMode||9<document.documentMode)}function Ac(){Xr&&(Xr.detachEvent("onpropertychange",np),ci=Xr=null)}function np(e){if(e.propertyName==="value"&&tl(ci)){var t=[];ep(t,ci,e,Za(e)),If(m0,t)}}function v0(e,t,n){e==="focusin"?(Ac(),Xr=t,ci=n,Xr.attachEvent("onpropertychange",np)):e==="focusout"&&Ac()}function y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(ci)}function x0(e,t){if(e==="click")return tl(t)}function w0(e,t){if(e==="input"||e==="change")return tl(t)}function S0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:S0;function di(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_s.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var n=Lc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function rp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ip(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function C0(e){var t=ip(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rp(n.ownerDocument.documentElement,n)){if(r!==null&&lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nc(n,o);var l=Nc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E0=Gt&&"documentMode"in document&&11>=document.documentMode,Jn=null,qs=null,Zr=null,Js=!1;function _c(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||Jn==null||Jn!==vo(r)||(r=Jn,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&di(Zr,r)||(Zr=r,r=Po(qs,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function Ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionend:Ui("Transition","TransitionEnd")},as={},op={};Gt&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function nl(e){if(as[e])return as[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in op)return as[e]=t[n];return e}var lp=nl("animationend"),sp=nl("animationiteration"),ap=nl("animationstart"),up=nl("transitionend"),cp=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){cp.set(e,t),Vn(t,[e])}for(var us=0;us<bc.length;us++){var cs=bc[us],P0=cs.toLowerCase(),k0=cs[0].toUpperCase()+cs.slice(1);En(P0,"on"+k0)}En(lp,"onAnimationEnd");En(sp,"onAnimationIteration");En(ap,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(up,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Ic(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pm(r,t,void 0,e),e.currentTarget=null}function dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Ic(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Ic(i,s,u),o=a}}}if(xo)throw e=Ks,xo=!1,Ks=null,e}function pe(e,t){var n=t[ia];n===void 0&&(n=t[ia]=new Set);var r=e+"__bubble";n.has(r)||(fp(t,e,2,!1),n.add(r))}function ds(e,t,n){var r=0;t&&(r|=4),fp(n,e,r,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[Hi]){e[Hi]=!0,xf.forEach(function(n){n!=="selectionchange"&&(O0.has(n)||ds(n,!1,e),ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,ds("selectionchange",!1,t))}}function fp(e,t,n,r){switch(Yf(t)){case 1:var i=Fm;break;case 4:i=Bm;break;default:i=tu}n=i.bind(null,t,n,e),i=void 0,!Gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=An(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}If(function(){var u=o,d=Za(n),f=[];e:{var p=cp.get(e);if(p!==void 0){var v=ru,g=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":v=n0;break;case"focusin":g="focus",v=os;break;case"focusout":g="blur",v=os;break;case"beforeblur":case"afterblur":v=os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=o0;break;case lp:case sp:case ap:v=Gm;break;case up:v=s0;break;case"scroll":v=Um;break;case"wheel":v=u0;break;case"copy":case"cut":case"paste":v=Ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=kc}var x=(t&4)!==0,S=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=li(h,m),w!=null&&x.push(pi(h,w,y)))),S)break;h=h.return}0<x.length&&(p=new v(p,g,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ws&&(g=n.relatedTarget||n.fromElement)&&(An(g)||g[Kt]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?An(g):null,g!==null&&(S=Wn(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(x=Ec,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=kc,w="onPointerLeave",m="onPointerEnter",h="pointer"),S=v==null?p:tr(v),y=g==null?p:tr(g),p=new x(w,h+"leave",v,n,d),p.target=S,p.relatedTarget=y,w=null,An(d)===u&&(x=new x(m,h+"enter",g,n,d),x.target=y,x.relatedTarget=S,w=x),S=w,v&&g)t:{for(x=v,m=g,h=0,y=x;y;y=Kn(y))h++;for(y=0,w=m;w;w=Kn(w))y++;for(;0<h-y;)x=Kn(x),h--;for(;0<y-h;)m=Kn(m),y--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=Kn(x),m=Kn(m)}x=null}else x=null;v!==null&&Dc(f,p,v,x,!1),g!==null&&S!==null&&Dc(f,S,g,x,!0)}}e:{if(p=u?tr(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var O=g0;else if(Rc(p))if(tp)O=w0;else{O=y0;var k=v0}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=x0);if(O&&(O=O(e,u))){ep(f,O,n,d);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Fs(p,"number",p.value)}switch(k=u?tr(u):window,e){case"focusin":(Rc(k)||k.contentEditable==="true")&&(Jn=k,qs=u,Zr=null);break;case"focusout":Zr=qs=Jn=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,_c(f,n,d);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":_c(f,n,d)}var T;if(ou)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else qn?qf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Zf&&n.locale!=="ko"&&(qn||R!=="onCompositionStart"?R==="onCompositionEnd"&&qn&&(T=Xf()):(an=d,nu="value"in an?an.value:an.textContent,qn=!0)),k=Po(u,R),0<k.length&&(R=new Pc(R,e,null,n,d),f.push({event:R,listeners:k}),T?R.data=T:(T=Jf(n),T!==null&&(R.data=T)))),(T=d0?f0(e,n):p0(e,n))&&(u=Po(u,"onBeforeInput"),0<u.length&&(d=new Pc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}dp(f,t)})}function pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Po(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=li(e,n),o!=null&&r.unshift(pi(e,o,i)),o=li(e,t),o!=null&&r.push(pi(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=li(n,o),a!=null&&l.unshift(pi(n,a,s))):i||(a=li(n,o),a!=null&&l.push(pi(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var j0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function Mc(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(R0,"")}function Vi(e,t,n){if(t=Mc(t),Mc(e)!==t&&n)throw Error(A(425))}function ko(){}var ea=null,ta=null;function na(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ra=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(L0)}:ra;function L0(e){setTimeout(function(){throw e})}function ps(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),It="__reactFiber$"+Rr,hi="__reactProps$"+Rr,Kt="__reactContainer$"+Rr,ia="__reactEvents$"+Rr,N0="__reactListeners$"+Rr,_0="__reactHandles$"+Rr;function An(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$c(e);e!==null;){if(n=e[It])return n;e=$c(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[It]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function rl(e){return e[hi]||null}var oa=[],nr=-1;function Pn(e){return{current:e}}function he(e){0>nr||(e.current=oa[nr],oa[nr]=null,nr--)}function fe(e,t){nr++,oa[nr]=e.current,e.current=t}var Cn={},He=Pn(Cn),Ze=Pn(!1),Mn=Cn;function gr(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Oo(){he(Ze),he(He)}function Fc(e,t,n){if(He.current!==Cn)throw Error(A(168));fe(He,t),fe(Ze,n)}function pp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,vm(e)||"Unknown",i));return ye({},n,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Mn=He.current,fe(He,e),fe(Ze,Ze.current),!0}function Bc(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=pp(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,he(Ze),he(He),fe(He,e)):he(Ze),fe(Ze,n)}var Ut=null,il=!1,hs=!1;function hp(e){Ut===null?Ut=[e]:Ut.push(e)}function b0(e){il=!0,hp(e)}function kn(){if(!hs&&Ut!==null){hs=!0;var e=0,t=le;try{var n=Ut;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,il=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),$f(qa,kn),i}finally{le=t,hs=!1}}return null}var rr=[],ir=0,Ro=null,To=0,dt=[],ft=0,zn=null,Ht=1,Vt="";function Rn(e,t){rr[ir++]=To,rr[ir++]=Ro,Ro=e,To=t}function mp(e,t,n){dt[ft++]=Ht,dt[ft++]=Vt,dt[ft++]=zn,zn=e;var r=Ht;e=Vt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ht=1<<32-Ot(t)+i|n<<i|r,Vt=o+e}else Ht=1<<o|n<<i|r,Vt=e}function su(e){e.return!==null&&(Rn(e,1),mp(e,1,0))}function au(e){for(;e===Ro;)Ro=rr[--ir],rr[ir]=null,To=rr[--ir],rr[ir]=null;for(;e===zn;)zn=dt[--ft],dt[ft]=null,Vt=dt[--ft],dt[ft]=null,Ht=dt[--ft],dt[ft]=null}var it=null,rt=null,me=!1,Et=null;function gp(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,rt=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,rt=null,!0):!1;default:return!1}}function la(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sa(e){if(me){var t=rt;if(t){var n=t;if(!Uc(e,t)){if(la(e))throw Error(A(418));t=hn(n.nextSibling);var r=it;t&&Uc(e,t)?gp(r,n):(e.flags=e.flags&-4097|2,me=!1,it=e)}}else{if(la(e))throw Error(A(418));e.flags=e.flags&-4097|2,me=!1,it=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Wi(e){if(e!==it)return!1;if(!me)return Hc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!na(e.type,e.memoizedProps)),t&&(t=rt)){if(la(e))throw vp(),Error(A(418));for(;t;)gp(e,t),t=hn(t.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=it?hn(e.stateNode.nextSibling):null;return!0}function vp(){for(var e=rt;e;)e=hn(e.nextSibling)}function vr(){rt=it=null,me=!1}function uu(e){Et===null?Et=[e]:Et.push(e)}var I0=Zt.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ao=Pn(null),Lo=null,or=null,cu=null;function du(){cu=or=Lo=null}function fu(e){var t=Ao.current;he(Ao),e._currentValue=t}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Lo=e,cu=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(Lo===null)throw Error(A(308));or=e,Lo.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Ln=null;function pu(e){Ln===null?Ln=[e]:Ln.push(e)}function yp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function Vc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function No(e,t,n,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;l=0,d=u=a=null,s=o;do{var p=s.lane,v=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,x=s;switch(p=t,v=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(v,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(v,f,p):g,p==null)break e;f=ye({},f,p);break e;case 2:rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,a=f):d=d.next=v,l|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=f}}function Wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var wp=new yf.Component().refs;function ua(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=vn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(jt(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=vn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(jt(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=vn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(jt(t,e,r,n),io(t,e,r))}};function Qc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(i,o):!0}function Sp(e,t,n){var r=!1,i=Cn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=qe(t)?Mn:He.current,r=t.contextTypes,o=(r=r!=null)?gr(e,i):Cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function ca(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wp,hu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=qe(t)?Mn:He.current,i.context=gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ua(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ol.enqueueReplaceState(i,i.state,null),No(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===wp&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function Cp(e){function t(m,h){if(e){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=yn(m,h),m.index=0,m.sibling=null,m}function o(m,h,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,y,w){return h===null||h.tag!==6?(h=Ss(y,m.mode,w),h.return=m,h):(h=i(h,y),h.return=m,h)}function a(m,h,y,w){var O=y.type;return O===Zn?d(m,h,y.props.children,w,y.key):h!==null&&(h.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===nn&&Kc(O)===h.type)?(w=i(h,y.props),w.ref=$r(m,h,y),w.return=m,w):(w=co(y.type,y.key,y.props,null,m.mode,w),w.ref=$r(m,h,y),w.return=m,w)}function u(m,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Cs(y,m.mode,w),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function d(m,h,y,w,O){return h===null||h.tag!==7?(h=In(y,m.mode,w,O),h.return=m,h):(h=i(h,y),h.return=m,h)}function f(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ss(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ii:return y=co(h.type,h.key,h.props,null,m.mode,y),y.ref=$r(m,null,h),y.return=m,y;case Xn:return h=Cs(h,m.mode,y),h.return=m,h;case nn:var w=h._init;return f(m,w(h._payload),y)}if(Vr(h)||br(h))return h=In(h,m.mode,y,null),h.return=m,h;Qi(m,h)}return null}function p(m,h,y,w){var O=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return O!==null?null:s(m,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ii:return y.key===O?a(m,h,y,w):null;case Xn:return y.key===O?u(m,h,y,w):null;case nn:return O=y._init,p(m,h,O(y._payload),w)}if(Vr(y)||br(y))return O!==null?null:d(m,h,y,w,null);Qi(m,y)}return null}function v(m,h,y,w,O){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,s(h,m,""+w,O);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ii:return m=m.get(w.key===null?y:w.key)||null,a(h,m,w,O);case Xn:return m=m.get(w.key===null?y:w.key)||null,u(h,m,w,O);case nn:var k=w._init;return v(m,h,y,k(w._payload),O)}if(Vr(w)||br(w))return m=m.get(y)||null,d(h,m,w,O,null);Qi(h,w)}return null}function g(m,h,y,w){for(var O=null,k=null,T=h,R=h=0,E=null;T!==null&&R<y.length;R++){T.index>R?(E=T,T=null):E=T.sibling;var _=p(m,T,y[R],w);if(_===null){T===null&&(T=E);break}e&&T&&_.alternate===null&&t(m,T),h=o(_,h,R),k===null?O=_:k.sibling=_,k=_,T=E}if(R===y.length)return n(m,T),me&&Rn(m,R),O;if(T===null){for(;R<y.length;R++)T=f(m,y[R],w),T!==null&&(h=o(T,h,R),k===null?O=T:k.sibling=T,k=T);return me&&Rn(m,R),O}for(T=r(m,T);R<y.length;R++)E=v(T,m,R,y[R],w),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?R:E.key),h=o(E,h,R),k===null?O=E:k.sibling=E,k=E);return e&&T.forEach(function(G){return t(m,G)}),me&&Rn(m,R),O}function x(m,h,y,w){var O=br(y);if(typeof O!="function")throw Error(A(150));if(y=O.call(y),y==null)throw Error(A(151));for(var k=O=null,T=h,R=h=0,E=null,_=y.next();T!==null&&!_.done;R++,_=y.next()){T.index>R?(E=T,T=null):E=T.sibling;var G=p(m,T,_.value,w);if(G===null){T===null&&(T=E);break}e&&T&&G.alternate===null&&t(m,T),h=o(G,h,R),k===null?O=G:k.sibling=G,k=G,T=E}if(_.done)return n(m,T),me&&Rn(m,R),O;if(T===null){for(;!_.done;R++,_=y.next())_=f(m,_.value,w),_!==null&&(h=o(_,h,R),k===null?O=_:k.sibling=_,k=_);return me&&Rn(m,R),O}for(T=r(m,T);!_.done;R++,_=y.next())_=v(T,m,R,_.value,w),_!==null&&(e&&_.alternate!==null&&T.delete(_.key===null?R:_.key),h=o(_,h,R),k===null?O=_:k.sibling=_,k=_);return e&&T.forEach(function(K){return t(m,K)}),me&&Rn(m,R),O}function S(m,h,y,w){if(typeof y=="object"&&y!==null&&y.type===Zn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ii:e:{for(var O=y.key,k=h;k!==null;){if(k.key===O){if(O=y.type,O===Zn){if(k.tag===7){n(m,k.sibling),h=i(k,y.props.children),h.return=m,m=h;break e}}else if(k.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===nn&&Kc(O)===k.type){n(m,k.sibling),h=i(k,y.props),h.ref=$r(m,k,y),h.return=m,m=h;break e}n(m,k);break}else t(m,k);k=k.sibling}y.type===Zn?(h=In(y.props.children,m.mode,w,y.key),h.return=m,m=h):(w=co(y.type,y.key,y.props,null,m.mode,w),w.ref=$r(m,h,y),w.return=m,m=w)}return l(m);case Xn:e:{for(k=y.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Cs(y,m.mode,w),h.return=m,m=h}return l(m);case nn:return k=y._init,S(m,h,k(y._payload),w)}if(Vr(y))return g(m,h,y,w);if(br(y))return x(m,h,y,w);Qi(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,y),h.return=m,m=h):(n(m,h),h=Ss(y,m.mode,w),h.return=m,m=h),l(m)):n(m,h)}return S}var yr=Cp(!0),Ep=Cp(!1),Ti={},zt=Pn(Ti),mi=Pn(Ti),gi=Pn(Ti);function Nn(e){if(e===Ti)throw Error(A(174));return e}function mu(e,t){switch(fe(gi,t),fe(mi,e),fe(zt,Ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Us(t,e)}he(zt),fe(zt,t)}function xr(){he(zt),he(mi),he(gi)}function Pp(e){Nn(gi.current);var t=Nn(zt.current),n=Us(t,e.type);t!==n&&(fe(mi,e),fe(zt,n))}function gu(e){mi.current===e&&(he(zt),he(mi))}var ge=Pn(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ms=[];function vu(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var oo=Zt.ReactCurrentDispatcher,gs=Zt.ReactCurrentBatchConfig,$n=0,ve=null,ke=null,Te=null,bo=!1,qr=!1,vi=0,D0=0;function Fe(){throw Error(A(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function xu(e,t,n,r,i,o){if($n=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?F0:B0,e=n(r,i),qr){o=0;do{if(qr=!1,vi=0,25<=o)throw Error(A(301));o+=1,Te=ke=null,t.updateQueue=null,oo.current=U0,e=n(r,i)}while(qr)}if(oo.current=Io,t=ke!==null&&ke.next!==null,$n=0,Te=ke=ve=null,bo=!1,t)throw Error(A(300));return e}function wu(){var e=vi!==0;return vi=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ve.memoizedState=Te=e:Te=Te.next=e,Te}function vt(){if(ke===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Te===null?ve.memoizedState:Te.next;if(t!==null)Te=t,ke=e;else{if(e===null)throw Error(A(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Te===null?ve.memoizedState=Te=e:Te=Te.next=e}return Te}function yi(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=vt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var d=u.lane;if(($n&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=f,l=r):a=a.next=f,ve.lanes|=d,Fn|=d}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Tt(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ys(e){var t=vt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Tt(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function kp(){}function Op(e,t){var n=ve,r=vt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Xe=!0),r=r.queue,Su(Tp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,xi(9,Rp.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(A(349));$n&30||jp(n,t,i)}return i}function jp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rp(e,t,n,r){t.value=n,t.getSnapshot=r,Ap(t)&&Lp(e)}function Tp(e,t,n){return n(function(){Ap(t)&&Lp(e)})}function Ap(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Lp(e){var t=Yt(e,1);t!==null&&jt(t,e,1,-1)}function Yc(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=$0.bind(null,ve,e),[t.memoizedState,e]}function xi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Np(){return vt().memoizedState}function lo(e,t,n,r){var i=bt();ve.flags|=e,i.memoizedState=xi(1|t,n,void 0,r===void 0?null:r)}function ll(e,t,n,r){var i=vt();r=r===void 0?null:r;var o=void 0;if(ke!==null){var l=ke.memoizedState;if(o=l.destroy,r!==null&&yu(r,l.deps)){i.memoizedState=xi(t,n,o,r);return}}ve.flags|=e,i.memoizedState=xi(1|t,n,o,r)}function Xc(e,t){return lo(8390656,8,e,t)}function Su(e,t){return ll(2048,8,e,t)}function _p(e,t){return ll(4,2,e,t)}function bp(e,t){return ll(4,4,e,t)}function Ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dp(e,t,n){return n=n!=null?n.concat([e]):null,ll(4,4,Ip.bind(null,t,e),n)}function Cu(){}function Mp(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zp(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $p(e,t,n){return $n&21?(Tt(n,t)||(n=Uf(),ve.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function M0(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=gs.transition;gs.transition={};try{e(!1),t()}finally{le=n,gs.transition=r}}function Fp(){return vt().memoizedState}function z0(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bp(e))Up(t,n);else if(n=yp(e,t,n,r),n!==null){var i=We();jt(n,e,r,i),Hp(n,t,r)}}function $0(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bp(e))Up(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Tt(s,l)){var a=t.interleaved;a===null?(i.next=i,pu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=yp(e,t,i,r),n!==null&&(i=We(),jt(n,e,r,i),Hp(n,t,r))}}function Bp(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Up(e,t){qr=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var Io={readContext:gt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},F0={readContext:gt,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,Ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=z0.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Yc,useDebugValue:Cu,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Yc(!1),t=e[0];return e=M0.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=bt();if(me){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ae===null)throw Error(A(349));$n&30||jp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xc(Tp.bind(null,r,o,e),[e]),r.flags|=2048,xi(9,Rp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bt(),t=Ae.identifierPrefix;if(me){var n=Vt,r=Ht;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B0={readContext:gt,useCallback:Mp,useContext:gt,useEffect:Su,useImperativeHandle:Dp,useInsertionEffect:_p,useLayoutEffect:bp,useMemo:zp,useReducer:vs,useRef:Np,useState:function(){return vs(yi)},useDebugValue:Cu,useDeferredValue:function(e){var t=vt();return $p(t,ke.memoizedState,e)},useTransition:function(){var e=vs(yi)[0],t=vt().memoizedState;return[e,t]},useMutableSource:kp,useSyncExternalStore:Op,useId:Fp,unstable_isNewReconciler:!1},U0={readContext:gt,useCallback:Mp,useContext:gt,useEffect:Su,useImperativeHandle:Dp,useInsertionEffect:_p,useLayoutEffect:bp,useMemo:zp,useReducer:ys,useRef:Np,useState:function(){return ys(yi)},useDebugValue:Cu,useDeferredValue:function(e){var t=vt();return ke===null?t.memoizedState=e:$p(t,ke.memoizedState,e)},useTransition:function(){var e=ys(yi)[0],t=vt().memoizedState;return[e,t]},useMutableSource:kp,useSyncExternalStore:Op,useId:Fp,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",r=t;do n+=gm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function xs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function da(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function Vp(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,Sa=r),da(e,t)},n}function Wp(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){da(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){da(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new H0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rg.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var V0=Zt.ReactCurrentOwner,Xe=!1;function Ve(e,t,n,r){t.child=e===null?Ep(t,null,n,r):yr(t,e.child,n,r)}function ed(e,t,n,r,i){n=n.render;var o=t.ref;return pr(t,i),r=xu(e,t,n,r,o,i),n=wu(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(me&&n&&su(t),t.flags|=1,Ve(e,t,r,i),t.child)}function td(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qp(e,t,o,r,i)):(e=co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(l,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=yn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(di(o,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return fa(e,t,n,r,i)}function Gp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(sr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(sr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,fe(sr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,fe(sr,et),et|=r;return Ve(e,t,i,n),t.child}function Kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fa(e,t,n,r,i){var o=qe(n)?Mn:He.current;return o=gr(t,o),pr(t,i),n=xu(e,t,n,r,o,i),r=wu(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(me&&r&&su(t),t.flags|=1,Ve(e,t,n,i),t.child)}function nd(e,t,n,r,i){if(qe(n)){var o=!0;jo(t)}else o=!1;if(pr(t,i),t.stateNode===null)so(e,t),Sp(t,n,r),ca(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=qe(n)?Mn:He.current,u=gr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Gc(t,l,r,u),rn=!1;var p=t.memoizedState;l.state=p,No(t,r,l,i),a=t.memoizedState,s!==r||p!==a||Ze.current||rn?(typeof d=="function"&&(ua(t,n,d,r),a=t.memoizedState),(s=rn||Qc(t,n,s,r,p,a,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,xp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:St(t.type,s),l.props=u,f=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=gt(a):(a=qe(n)?Mn:He.current,a=gr(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||p!==a)&&Gc(t,l,r,a),rn=!1,p=t.memoizedState,l.state=p,No(t,r,l,i);var g=t.memoizedState;s!==f||p!==g||Ze.current||rn?(typeof v=="function"&&(ua(t,n,v,r),g=t.memoizedState),(u=rn||Qc(t,n,u,r,p,g,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return pa(e,t,n,r,o,i)}function pa(e,t,n,r,i,o){Kp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Bc(t,n,!1),Xt(e,t,o);r=t.stateNode,V0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=yr(t,e.child,null,o),t.child=yr(t,null,s,o)):Ve(e,t,s,o),t.memoizedState=r.state,i&&Bc(t,n,!0),t.child}function Yp(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),mu(e,t.containerInfo)}function rd(e,t,n,r,i){return vr(),uu(i),t.flags|=256,Ve(e,t,n,r),t.child}var ha={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xp(e,t,n){var r=t.pendingProps,i=ge.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(ge,i&1),e===null)return sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ul(l,r,0,null),e=In(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ma(n),t.memoizedState=ha,e):Eu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return W0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=yn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=yn(s,o):(o=In(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ma(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ha,r}return o=e.child,e=o.sibling,r=yn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eu(e,t){return t=ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,n,r){return r!==null&&uu(r),yr(t,e.child,null,n),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function W0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=xs(Error(A(422))),Gi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ul({mode:"visible",children:r.children},i,0,null),o=In(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yr(t,e.child,null,l),t.child.memoizedState=ma(l),t.memoizedState=ha,o);if(!(t.mode&1))return Gi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(A(419)),r=xs(o,r,void 0),Gi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Xe||s){if(r=Ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),jt(r,e,i,-1))}return Tu(),r=xs(Error(A(421))),Gi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ig.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,rt=hn(i.nextSibling),it=t,me=!0,Et=null,e!==null&&(dt[ft++]=Ht,dt[ft++]=Vt,dt[ft++]=zn,Ht=e.id,Vt=e.overflow,zn=t),t=Eu(t,r.children),t.flags|=4096,t)}function id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function ws(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,n,t);else if(e.tag===19)id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(ge,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ws(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ws(t,!0,n,null,o);break;case"together":ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Q0(e,t,n){switch(t.tag){case 3:Yp(t),vr();break;case 5:Pp(t);break;case 1:qe(t.type)&&jo(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;fe(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?Xp(e,t,n):(fe(ge,ge.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);fe(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Gp(e,t,n)}return Xt(e,t,n)}var qp,ga,Jp,eh;qp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ga=function(){};Jp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nn(zt.current);var o=null;switch(n){case"input":i=zs(e,i),r=zs(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=Bs(e,i),r=Bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}Hs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&pe("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};eh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G0(e,t,n){var r=t.pendingProps;switch(au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return qe(t.type)&&Oo(),Be(t),null;case 3:return r=t.stateNode,xr(),he(Ze),he(He),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(Pa(Et),Et=null))),ga(e,t),Be(t),null;case 5:gu(t);var i=Nn(gi.current);if(n=t.type,e!==null&&t.stateNode!=null)Jp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Be(t),null}if(e=Nn(zt.current),Wi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[It]=t,r[hi]=o,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)pe(Qr[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":pc(r,o),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pe("invalid",r);break;case"textarea":mc(r,o),pe("invalid",r)}Hs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,s,e),i=["children",""+s]):ii.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&pe("scroll",r)}switch(n){case"input":Di(r),hc(r,o,!0);break;case"textarea":Di(r),gc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ko)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[hi]=r,qp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vs(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)pe(Qr[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":pc(e,r),i=zs(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),pe("invalid",e);break;case"textarea":mc(e,r),i=Bs(e,r),pe("invalid",e);break;default:i=r}Hs(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Af(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Rf(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&oi(e,a):typeof a=="number"&&oi(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ii.hasOwnProperty(o)?a!=null&&o==="onScroll"&&pe("scroll",e):a!=null&&Ga(e,o,a,l))}switch(n){case"input":Di(e),hc(e,r,!1);break;case"textarea":Di(e),gc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ur(e,!!r.multiple,o,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)eh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Nn(gi.current),Nn(zt.current),Wi(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(o=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Be(t),null;case 13:if(he(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&rt!==null&&t.mode&1&&!(t.flags&128))vp(),vr(),t.flags|=98560,o=!1;else if(o=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[It]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),o=!1}else Et!==null&&(Pa(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Oe===0&&(Oe=3):Tu())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return xr(),ga(e,t),e===null&&fi(t.stateNode.containerInfo),Be(t),null;case 10:return fu(t.type._context),Be(t),null;case 17:return qe(t.type)&&Oo(),Be(t),null;case 19:if(he(ge),o=t.memoizedState,o===null)return Be(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Fr(o,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_o(e),l!==null){for(t.flags|=128,Fr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(ge,ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Sr&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=_o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!me)return Be(t),null}else 2*Ee()-o.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=ge.current,fe(ge,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function K0(e,t){switch(au(t),t.tag){case 1:return qe(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),he(Ze),he(He),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(he(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ge),null;case 4:return xr(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var Ki=!1,Ue=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,z=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function va(e,t,n){try{n()}catch(r){we(e,t,r)}}var od=!1;function X0(e,t){if(ea=Co,e=ip(),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=l+i),f!==o||r!==0&&f.nodeType!==3||(a=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++u===i&&(s=l),p===o&&++d===r&&(a=l),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Co=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,S=g.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:St(t.type,x),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){we(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=od,od=!1,g}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&va(t,n,o)}i=i.next}while(i!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function th(e){var t=e.alternate;t!==null&&(e.alternate=null,th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[hi],delete t[ia],delete t[N0],delete t[_0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nh(e){return e.tag===5||e.tag===3||e.tag===4}function ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(xa(e,t,n),e=e.sibling;e!==null;)xa(e,t,n),e=e.sibling}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}var Ie=null,Ct=!1;function en(e,t,n){for(n=n.child;n!==null;)rh(e,t,n),n=n.sibling}function rh(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:Ue||lr(n,t);case 6:var r=Ie,i=Ct;Ie=null,en(e,t,n),Ie=r,Ct=i,Ie!==null&&(Ct?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Ct?(e=Ie,n=n.stateNode,e.nodeType===8?ps(e.parentNode,n):e.nodeType===1&&ps(e,n),ui(e)):ps(Ie,n.stateNode));break;case 4:r=Ie,i=Ct,Ie=n.stateNode.containerInfo,Ct=!0,en(e,t,n),Ie=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&va(n,t,l),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!Ue&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){we(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,en(e,t,n),Ue=r):en(e,t,n);break;default:en(e,t,n)}}function sd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Y0),t.forEach(function(r){var i=og.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,Ct=!1;break e;case 3:Ie=s.stateNode.containerInfo,Ct=!0;break e;case 4:Ie=s.stateNode.containerInfo,Ct=!0;break e}s=s.return}if(Ie===null)throw Error(A(160));rh(o,l,i),Ie=null,Ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){we(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ih(t,e),t=t.sibling}function ih(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),_t(e),r&4){try{Jr(3,e,e.return),sl(3,e)}catch(x){we(e,e.return,x)}try{Jr(5,e,e.return)}catch(x){we(e,e.return,x)}}break;case 1:wt(t,e),_t(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(wt(t,e),_t(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(x){we(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&kf(i,o),Vs(s,l);var u=Vs(s,o);for(l=0;l<a.length;l+=2){var d=a[l],f=a[l+1];d==="style"?Af(i,f):d==="dangerouslySetInnerHTML"?Rf(i,f):d==="children"?oi(i,f):Ga(i,d,f,u)}switch(s){case"input":$s(i,o);break;case"textarea":Of(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?ur(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?ur(i,!!o.multiple,o.defaultValue,!0):ur(i,!!o.multiple,o.multiple?[]:"",!1))}i[hi]=o}catch(x){we(e,e.return,x)}}break;case 6:if(wt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){we(e,e.return,x)}}break;case 3:if(wt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(x){we(e,e.return,x)}break;case 4:wt(t,e),_t(e);break;case 13:wt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ou=Ee())),r&4&&sd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(u=Ue)||d,wt(t,e),Ue=u):wt(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(f=z=d;z!==null;){switch(p=z,v=p.child,p.tag){case 0:case 11:case 14:case 15:Jr(4,p,p.return);break;case 1:lr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){we(r,n,x)}}break;case 5:lr(p,p.return);break;case 22:if(p.memoizedState!==null){ud(f);continue}}v!==null?(v.return=p,z=v):ud(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,a=f.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Tf("display",l))}catch(x){we(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){we(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wt(t,e),_t(e),r&4&&sd(e);break;case 21:break;default:wt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nh(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var o=ld(e);wa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ld(e);xa(e,s,l);break;default:throw Error(A(161))}}catch(a){we(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Z0(e,t,n){z=e,oh(e)}function oh(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ki;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Ue;s=Ki;var u=Ue;if(Ki=l,(Ue=a)&&!u)for(z=i;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?cd(i):a!==null?(a.return=l,z=a):cd(i);for(;o!==null;)z=o,oh(o),o=o.sibling;z=i,Ki=s,Ue=u}ad(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):ad(e)}}function ad(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ui(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ue||t.flags&512&&ya(t)}catch(p){we(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function ud(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function cd(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(a){we(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){we(t,i,a)}}var o=t.return;try{ya(t)}catch(a){we(t,o,a)}break;case 5:var l=t.return;try{ya(t)}catch(a){we(t,l,a)}}}catch(a){we(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var q0=Math.ceil,Do=Zt.ReactCurrentDispatcher,Pu=Zt.ReactCurrentOwner,ht=Zt.ReactCurrentBatchConfig,te=0,Ae=null,Pe=null,De=0,et=0,sr=Pn(0),Oe=0,wi=null,Fn=0,al=0,ku=0,ei=null,Ye=null,Ou=0,Sr=1/0,Bt=null,Mo=!1,Sa=null,gn=null,Yi=!1,un=null,zo=0,ti=0,Ca=null,ao=-1,uo=0;function We(){return te&6?Ee():ao!==-1?ao:ao=Ee()}function vn(e){return e.mode&1?te&2&&De!==0?De&-De:I0.transition!==null?(uo===0&&(uo=Uf()),uo):(e=le,e!==0||(e=window.event,e=e===void 0?16:Yf(e.type)),e):1}function jt(e,t,n,r){if(50<ti)throw ti=0,Ca=null,Error(A(185));Oi(e,n,r),(!(te&2)||e!==Ae)&&(e===Ae&&(!(te&2)&&(al|=n),Oe===4&&sn(e,De)),Je(e,r),n===1&&te===0&&!(t.mode&1)&&(Sr=Ee()+500,il&&kn()))}function Je(e,t){var n=e.callbackNode;Im(e,t);var r=So(e,e===Ae?De:0);if(r===0)n!==null&&xc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xc(n),t===1)e.tag===0?b0(dd.bind(null,e)):hp(dd.bind(null,e)),A0(function(){!(te&6)&&kn()}),n=null;else{switch(Hf(r)){case 1:n=qa;break;case 4:n=Ff;break;case 16:n=wo;break;case 536870912:n=Bf;break;default:n=wo}n=ph(n,lh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lh(e,t){if(ao=-1,uo=0,te&6)throw Error(A(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=So(e,e===Ae?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=te;te|=2;var o=ah();(Ae!==e||De!==t)&&(Bt=null,Sr=Ee()+500,bn(e,t));do try{tg();break}catch(s){sh(e,s)}while(1);du(),Do.current=o,te=i,Pe!==null?t=0:(Ae=null,De=0,t=Oe)}if(t!==0){if(t===2&&(i=Ys(e),i!==0&&(r=i,t=Ea(e,i))),t===1)throw n=wi,bn(e,0),sn(e,r),Je(e,Ee()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!J0(i)&&(t=$o(e,r),t===2&&(o=Ys(e),o!==0&&(r=o,t=Ea(e,o))),t===1))throw n=wi,bn(e,0),sn(e,r),Je(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Tn(e,Ye,Bt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Ou+500-Ee(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ra(Tn.bind(null,e,Ye,Bt),t);break}Tn(e,Ye,Bt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q0(r/1960))-r,10<r){e.timeoutHandle=ra(Tn.bind(null,e,Ye,Bt),r);break}Tn(e,Ye,Bt);break;case 5:Tn(e,Ye,Bt);break;default:throw Error(A(329))}}}return Je(e,Ee()),e.callbackNode===n?lh.bind(null,e):null}function Ea(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Pa(t)),e}function Pa(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function J0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~ku,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function dd(e){if(te&6)throw Error(A(327));hr();var t=So(e,0);if(!(t&1))return Je(e,Ee()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Ys(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=wi,bn(e,0),sn(e,t),Je(e,Ee()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ye,Bt),Je(e,Ee()),null}function ju(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Sr=Ee()+500,il&&kn())}}function Bn(e){un!==null&&un.tag===0&&!(te&6)&&hr();var t=te;te|=1;var n=ht.transition,r=le;try{if(ht.transition=null,le=1,e)return e()}finally{le=r,ht.transition=n,te=t,!(te&6)&&kn()}}function Ru(){et=sr.current,he(sr)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T0(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:xr(),he(Ze),he(He),vu();break;case 5:gu(r);break;case 4:xr();break;case 13:he(ge);break;case 19:he(ge);break;case 10:fu(r.type._context);break;case 22:case 23:Ru()}n=n.return}if(Ae=e,Pe=e=yn(e.current,null),De=et=t,Oe=0,wi=null,ku=al=Fn=0,Ye=ei=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ln=null}return e}function sh(e,t){do{var n=Pe;try{if(du(),oo.current=Io,bo){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bo=!1}if($n=0,Te=ke=ve=null,qr=!1,vi=0,Pu.current=null,n===null||n.return===null){Oe=1,wi=t,Pe=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=De,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=qc(l);if(v!==null){v.flags&=-257,Jc(v,l,s,o,t),v.mode&1&&Zc(o,u,t),t=v,a=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(a),t.updateQueue=x}else g.add(a);break e}else{if(!(t&1)){Zc(o,u,t),Tu();break e}a=Error(A(426))}}else if(me&&s.mode&1){var S=qc(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Jc(S,l,s,o,t),uu(wr(a,s));break e}}o=a=wr(a,s),Oe!==4&&(Oe=2),ei===null?ei=[o]:ei.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Vp(o,a,t);Vc(o,m);break e;case 1:s=a;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(gn===null||!gn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Wp(o,s,t);Vc(o,w);break e}}o=o.return}while(o!==null)}ch(n)}catch(O){t=O,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function ah(){var e=Do.current;return Do.current=Io,e===null?Io:e}function Tu(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ae===null||!(Fn&268435455)&&!(al&268435455)||sn(Ae,De)}function $o(e,t){var n=te;te|=2;var r=ah();(Ae!==e||De!==t)&&(Bt=null,bn(e,t));do try{eg();break}catch(i){sh(e,i)}while(1);if(du(),te=n,Do.current=r,Pe!==null)throw Error(A(261));return Ae=null,De=0,Oe}function eg(){for(;Pe!==null;)uh(Pe)}function tg(){for(;Pe!==null&&!Om();)uh(Pe)}function uh(e){var t=fh(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?ch(e):Pe=t,Pu.current=null}function ch(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=K0(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Pe=null;return}}else if(n=G0(n,t,et),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Oe===0&&(Oe=5)}function Tn(e,t,n){var r=le,i=ht.transition;try{ht.transition=null,le=1,ng(e,t,n,r)}finally{ht.transition=i,le=r}return null}function ng(e,t,n,r){do hr();while(un!==null);if(te&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dm(e,o),e===Ae&&(Pe=Ae=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yi||(Yi=!0,ph(wo,function(){return hr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ht.transition,ht.transition=null;var l=le;le=1;var s=te;te|=4,Pu.current=null,X0(e,n),ih(n,e),C0(ta),Co=!!ea,ta=ea=null,e.current=n,Z0(n),jm(),te=s,le=l,ht.transition=o}else e.current=n;if(Yi&&(Yi=!1,un=e,zo=i),o=e.pendingLanes,o===0&&(gn=null),Am(n.stateNode),Je(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mo)throw Mo=!1,e=Sa,Sa=null,e;return zo&1&&e.tag!==0&&hr(),o=e.pendingLanes,o&1?e===Ca?ti++:(ti=0,Ca=e):ti=0,kn(),null}function hr(){if(un!==null){var e=Hf(zo),t=ht.transition,n=le;try{if(ht.transition=null,le=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,zo=0,te&6)throw Error(A(331));var i=te;for(te|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Jr(8,d,o)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var p=d.sibling,v=d.return;if(th(d),d===u){z=null;break}if(p!==null){p.return=v,z=p;break}z=v}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,z=m;break e}z=o.return}}var h=e.current;for(z=h;z!==null;){l=z;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,z=y;else e:for(l=h;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:sl(9,s)}}catch(O){we(s,s.return,O)}if(s===l){z=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,z=w;break e}z=s.return}}if(te=i,kn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{le=n,ht.transition=t}}return!1}function fd(e,t,n){t=wr(n,t),t=Vp(e,t,1),e=mn(e,t,1),t=We(),e!==null&&(Oi(e,1,t),Je(e,t))}function we(e,t,n){if(e.tag===3)fd(e,e,n);else for(;t!==null;){if(t.tag===3){fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=wr(n,e),e=Wp(t,e,1),t=mn(t,e,1),e=We(),t!==null&&(Oi(t,1,e),Je(t,e));break}}t=t.return}}function rg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(De&n)===n&&(Oe===4||Oe===3&&(De&130023424)===De&&500>Ee()-Ou?bn(e,0):ku|=n),Je(e,t)}function dh(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=We();e=Yt(e,t),e!==null&&(Oi(e,t,n),Je(e,n))}function ig(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dh(e,n)}function og(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),dh(e,n)}var fh;fh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,Q0(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,me&&t.flags&1048576&&mp(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=gr(t,He.current);pr(t,n),i=xu(null,t,r,e,i,n);var o=wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(o=!0,jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hu(t),i.updater=ol,t.stateNode=i,i._reactInternals=t,ca(t,r,e,n),t=pa(null,t,r,!0,o,n)):(t.tag=0,me&&o&&su(t),Ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sg(r),e=St(r,e),i){case 0:t=fa(null,t,r,e,n);break e;case 1:t=nd(null,t,r,e,n);break e;case 11:t=ed(null,t,r,e,n);break e;case 14:t=td(null,t,r,St(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),fa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),nd(e,t,r,i,n);case 3:e:{if(Yp(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,xp(e,t),No(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wr(Error(A(423)),t),t=rd(e,t,r,n,i);break e}else if(r!==i){i=wr(Error(A(424)),t),t=rd(e,t,r,n,i);break e}else for(rt=hn(t.stateNode.containerInfo.firstChild),it=t,me=!0,Et=null,n=Ep(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===i){t=Xt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Pp(t),e===null&&sa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,na(r,i)?l=null:o!==null&&na(r,o)&&(t.flags|=32),Kp(e,t),Ve(e,t,l,n),t.child;case 6:return e===null&&sa(t),null;case 13:return Xp(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),ed(e,t,r,i,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,fe(Ao,r._currentValue),r._currentValue=l,o!==null)if(Tt(o.value,l)){if(o.children===i.children&&!Ze.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Wt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),aa(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(A(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),aa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pr(t,n),i=gt(i),r=r(i),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),td(e,t,r,i,n);case 15:return Qp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),so(e,t),t.tag=1,qe(r)?(e=!0,jo(t)):e=!1,pr(t,n),Sp(t,r,i),ca(t,r,i,n),pa(null,t,r,!0,e,n);case 19:return Zp(e,t,n);case 22:return Gp(e,t,n)}throw Error(A(156,t.tag))};function ph(e,t){return $f(e,t)}function lg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new lg(e,t,n,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ya)return 11;if(e===Xa)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Au(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Zn:return In(n.children,i,o,t);case Ka:l=8,i|=8;break;case bs:return e=pt(12,n,t,i|2),e.elementType=bs,e.lanes=o,e;case Is:return e=pt(13,n,t,i),e.elementType=Is,e.lanes=o,e;case Ds:return e=pt(19,n,t,i),e.elementType=Ds,e.lanes=o,e;case Cf:return ul(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wf:l=10;break e;case Sf:l=9;break e;case Ya:l=11;break e;case Xa:l=14;break e;case nn:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=pt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function In(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function ul(e,t,n,r){return e=pt(22,e,r,t),e.elementType=Cf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ss(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Cs(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ag(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ns(0),this.expirationTimes=ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lu(e,t,n,r,i,o,l,s,a){return e=new ag(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(o),e}function ug(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hh(e){if(!e)return Cn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(qe(n))return pp(e,n,t)}return t}function mh(e,t,n,r,i,o,l,s,a){return e=Lu(n,r,!0,e,i,o,l,s,a),e.context=hh(null),n=e.current,r=We(),i=vn(n),o=Wt(r,i),o.callback=t??null,mn(n,o,i),e.current.lanes=i,Oi(e,i,r),Je(e,r),e}function cl(e,t,n,r){var i=t.current,o=We(),l=vn(i);return n=hh(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,l),e!==null&&(jt(e,i,l,o),io(e,i,l)),l}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nu(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function cg(){return null}var gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}dl.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));cl(e,t,null,null)};dl.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){cl(null,e,null,null)}),t[Kt]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&Kf(e)}};function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hd(){}function dg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Fo(l);o.call(u)}}var l=mh(t,r,e,0,null,!1,!1,"",hd);return e._reactRootContainer=l,e[Kt]=l.current,fi(e.nodeType===8?e.parentNode:e),Bn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Fo(a);s.call(u)}}var a=Lu(e,0,!1,null,null,!1,!1,"",hd);return e._reactRootContainer=a,e[Kt]=a.current,fi(e.nodeType===8?e.parentNode:e),Bn(function(){cl(t,a,n,r)}),a}function pl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Fo(l);s.call(a)}}cl(t,l,e,i)}else l=dg(n,t,e,i,r);return Fo(l)}Vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(Ja(t,n|1),Je(t,Ee()),!(te&6)&&(Sr=Ee()+500,kn()))}break;case 13:Bn(function(){var r=Yt(e,1);if(r!==null){var i=We();jt(r,e,1,i)}}),Nu(e,1)}};eu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=We();jt(t,e,134217728,n)}Nu(e,134217728)}};Wf=function(e){if(e.tag===13){var t=vn(e),n=Yt(e,t);if(n!==null){var r=We();jt(n,e,t,r)}Nu(e,t)}};Qf=function(){return le};Gf=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};Qs=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=rl(r);if(!i)throw Error(A(90));Pf(r),$s(r,i)}}}break;case"textarea":Of(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};_f=ju;bf=Bn;var fg={usingClientEntryPoint:!1,Events:[Ri,tr,rl,Lf,Nf,ju]},Br={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pg={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Jo=Xi.inject(pg),Mt=Xi}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(t))throw Error(A(200));return ug(e,t,null,n)};lt.createRoot=function(e,t){if(!bu(e))throw Error(A(299));var n=!1,r="",i=gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Lu(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,fi(e.nodeType===8?e.parentNode:e),new _u(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Bn(e)};lt.hydrate=function(e,t,n){if(!fl(t))throw Error(A(200));return pl(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!bu(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=gh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=mh(t,null,e,1,n??null,i,!1,o,l),e[Kt]=t.current,fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new dl(t)};lt.render=function(e,t,n){if(!fl(t))throw Error(A(200));return pl(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!fl(e))throw Error(A(40));return e._reactRootContainer?(Bn(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};lt.unstable_batchedUpdates=ju;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return pl(e,t,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";function vh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh)}catch(e){console.error(e)}}vh(),mf.exports=lt;var hg=mf.exports,md=hg;Ns.createRoot=md.createRoot,Ns.hydrateRoot=md.hydrateRoot;var yh={exports:{}},se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=Symbol.for("react.element"),Du=Symbol.for("react.portal"),hl=Symbol.for("react.fragment"),ml=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),vl=Symbol.for("react.provider"),yl=Symbol.for("react.context"),mg=Symbol.for("react.server_context"),xl=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),Cl=Symbol.for("react.memo"),El=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),xh;xh=Symbol.for("react.module.reference");function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Iu:switch(e=e.type,e){case hl:case gl:case ml:case wl:case Sl:return e;default:switch(e=e&&e.$$typeof,e){case mg:case yl:case xl:case El:case Cl:case vl:return e;default:return t}}case Du:return t}}}se.ContextConsumer=yl;se.ContextProvider=vl;se.Element=Iu;se.ForwardRef=xl;se.Fragment=hl;se.Lazy=El;se.Memo=Cl;se.Portal=Du;se.Profiler=gl;se.StrictMode=ml;se.Suspense=wl;se.SuspenseList=Sl;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return yt(e)===yl};se.isContextProvider=function(e){return yt(e)===vl};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Iu};se.isForwardRef=function(e){return yt(e)===xl};se.isFragment=function(e){return yt(e)===hl};se.isLazy=function(e){return yt(e)===El};se.isMemo=function(e){return yt(e)===Cl};se.isPortal=function(e){return yt(e)===Du};se.isProfiler=function(e){return yt(e)===gl};se.isStrictMode=function(e){return yt(e)===ml};se.isSuspense=function(e){return yt(e)===wl};se.isSuspenseList=function(e){return yt(e)===Sl};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hl||e===gl||e===ml||e===wl||e===Sl||e===gg||typeof e=="object"&&e!==null&&(e.$$typeof===El||e.$$typeof===Cl||e.$$typeof===vl||e.$$typeof===yl||e.$$typeof===xl||e.$$typeof===xh||e.getModuleId!==void 0)};se.typeOf=yt;yh.exports=se;var wh=yh.exports;function vg(e){function t(b,D,M,B,P){for(var J=0,I=0,xe=0,re=0,oe,Q,Ne=0,Ke=0,ne,$e=ne=oe=0,ie=0,_e=0,Nr=0,be=0,_i=M.length,_r=_i-1,xt,V="",Ce="",Yl="",Xl="",Jt;ie<_i;){if(Q=M.charCodeAt(ie),ie===_r&&I+re+xe+J!==0&&(I!==0&&(Q=I===47?10:47),re=xe=J=0,_i++,_r++),I+re+xe+J===0){if(ie===_r&&(0<_e&&(V=V.replace(p,"")),0<V.trim().length)){switch(Q){case 32:case 9:case 59:case 13:case 10:break;default:V+=M.charAt(ie)}Q=59}switch(Q){case 123:for(V=V.trim(),oe=V.charCodeAt(0),ne=1,be=++ie;ie<_i;){switch(Q=M.charCodeAt(ie)){case 123:ne++;break;case 125:ne--;break;case 47:switch(Q=M.charCodeAt(ie+1)){case 42:case 47:e:{for($e=ie+1;$e<_r;++$e)switch(M.charCodeAt($e)){case 47:if(Q===42&&M.charCodeAt($e-1)===42&&ie+2!==$e){ie=$e+1;break e}break;case 10:if(Q===47){ie=$e+1;break e}}ie=$e}}break;case 91:Q++;case 40:Q++;case 34:case 39:for(;ie++<_r&&M.charCodeAt(ie)!==Q;);}if(ne===0)break;ie++}switch(ne=M.substring(be,ie),oe===0&&(oe=(V=V.replace(f,"").trim()).charCodeAt(0)),oe){case 64:switch(0<_e&&(V=V.replace(p,"")),Q=V.charCodeAt(1),Q){case 100:case 109:case 115:case 45:_e=D;break;default:_e=ze}if(ne=t(D,_e,ne,Q,P+1),be=ne.length,0<N&&(_e=n(ze,V,Nr),Jt=s(3,ne,_e,D,H,K,be,Q,P,B),V=_e.join(""),Jt!==void 0&&(be=(ne=Jt.trim()).length)===0&&(Q=0,ne="")),0<be)switch(Q){case 115:V=V.replace(k,l);case 100:case 109:case 45:ne=V+"{"+ne+"}";break;case 107:V=V.replace(h,"$1 $2"),ne=V+"{"+ne+"}",ne=de===1||de===2&&o("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=V+ne,B===112&&(ne=(Ce+=ne,""))}else ne="";break;default:ne=t(D,n(D,V,Nr),ne,B,P+1)}Yl+=ne,ne=Nr=_e=$e=oe=0,V="",Q=M.charCodeAt(++ie);break;case 125:case 59:if(V=(0<_e?V.replace(p,""):V).trim(),1<(be=V.length))switch($e===0&&(oe=V.charCodeAt(0),oe===45||96<oe&&123>oe)&&(be=(V=V.replace(" ",":")).length),0<N&&(Jt=s(1,V,D,b,H,K,Ce.length,B,P,B))!==void 0&&(be=(V=Jt.trim()).length)===0&&(V="\0\0"),oe=V.charCodeAt(0),Q=V.charCodeAt(1),oe){case 0:break;case 64:if(Q===105||Q===99){Xl+=V+M.charAt(ie);break}default:V.charCodeAt(be-1)!==58&&(Ce+=i(V,oe,Q,V.charCodeAt(2)))}Nr=_e=$e=oe=0,V="",Q=M.charCodeAt(++ie)}}switch(Q){case 13:case 10:I===47?I=0:1+oe===0&&B!==107&&0<V.length&&(_e=1,V+="\0"),0<N*F&&s(0,V,D,b,H,K,Ce.length,B,P,B),K=1,H++;break;case 59:case 125:if(I+re+xe+J===0){K++;break}default:switch(K++,xt=M.charAt(ie),Q){case 9:case 32:if(re+J+I===0)switch(Ne){case 44:case 58:case 9:case 32:xt="";break;default:Q!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:re+I+J===0&&(_e=Nr=1,xt="\f"+xt);break;case 108:if(re+I+J+ce===0&&0<$e)switch(ie-$e){case 2:Ne===112&&M.charCodeAt(ie-3)===58&&(ce=Ne);case 8:Ke===111&&(ce=Ke)}break;case 58:re+I+J===0&&($e=ie);break;case 44:I+xe+re+J===0&&(_e=1,xt+="\r");break;case 34:case 39:I===0&&(re=re===Q?0:re===0?Q:re);break;case 91:re+I+xe===0&&J++;break;case 93:re+I+xe===0&&J--;break;case 41:re+I+J===0&&xe--;break;case 40:if(re+I+J===0){if(oe===0)switch(2*Ne+3*Ke){case 533:break;default:oe=1}xe++}break;case 64:I+xe+re+J+$e+ne===0&&(ne=1);break;case 42:case 47:if(!(0<re+J+xe))switch(I){case 0:switch(2*Q+3*M.charCodeAt(ie+1)){case 235:I=47;break;case 220:be=ie,I=42}break;case 42:Q===47&&Ne===42&&be+2!==ie&&(M.charCodeAt(be+2)===33&&(Ce+=M.substring(be,ie+1)),xt="",I=0)}}I===0&&(V+=xt)}Ke=Ne,Ne=Q,ie++}if(be=Ce.length,0<be){if(_e=D,0<N&&(Jt=s(2,Ce,_e,b,H,K,be,B,P,B),Jt!==void 0&&(Ce=Jt).length===0))return Xl+Ce+Yl;if(Ce=_e.join(",")+"{"+Ce+"}",de*ce!==0){switch(de!==2||o(Ce,2)||(ce=0),ce){case 111:Ce=Ce.replace(w,":-moz-$1")+Ce;break;case 112:Ce=Ce.replace(y,"::-webkit-input-$1")+Ce.replace(y,"::-moz-$1")+Ce.replace(y,":-ms-input-$1")+Ce}ce=0}}return Xl+Ce+Yl}function n(b,D,M){var B=D.trim().split(S);D=B;var P=B.length,J=b.length;switch(J){case 0:case 1:var I=0;for(b=J===0?"":b[0]+" ";I<P;++I)D[I]=r(b,D[I],M).trim();break;default:var xe=I=0;for(D=[];I<P;++I)for(var re=0;re<J;++re)D[xe++]=r(b[re]+" ",B[I],M).trim()}return D}function r(b,D,M){var B=D.charCodeAt(0);switch(33>B&&(B=(D=D.trim()).charCodeAt(0)),B){case 38:return D.replace(m,"$1"+b.trim());case 58:return b.trim()+D.replace(m,"$1"+b.trim());default:if(0<1*M&&0<D.indexOf("\f"))return D.replace(m,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+D}function i(b,D,M,B){var P=b+";",J=2*D+3*M+4*B;if(J===944){b=P.indexOf(":",9)+1;var I=P.substring(b,P.length-1).trim();return I=P.substring(0,b).trim()+I+";",de===1||de===2&&o(I,1)?"-webkit-"+I+I:I}if(de===0||de===2&&!o(P,1))return P;switch(J){case 1015:return P.charCodeAt(10)===97?"-webkit-"+P+P:P;case 951:return P.charCodeAt(3)===116?"-webkit-"+P+P:P;case 963:return P.charCodeAt(5)===110?"-webkit-"+P+P:P;case 1009:if(P.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+P+P;case 978:return"-webkit-"+P+"-moz-"+P+P;case 1019:case 983:return"-webkit-"+P+"-moz-"+P+"-ms-"+P+P;case 883:if(P.charCodeAt(8)===45)return"-webkit-"+P+P;if(0<P.indexOf("image-set(",11))return P.replace(G,"$1-webkit-$2")+P;break;case 932:if(P.charCodeAt(4)===45)switch(P.charCodeAt(5)){case 103:return"-webkit-box-"+P.replace("-grow","")+"-webkit-"+P+"-ms-"+P.replace("grow","positive")+P;case 115:return"-webkit-"+P+"-ms-"+P.replace("shrink","negative")+P;case 98:return"-webkit-"+P+"-ms-"+P.replace("basis","preferred-size")+P}return"-webkit-"+P+"-ms-"+P+P;case 964:return"-webkit-"+P+"-ms-flex-"+P+P;case 1023:if(P.charCodeAt(8)!==99)break;return I=P.substring(P.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+P+"-ms-flex-pack"+I+P;case 1005:return g.test(P)?P.replace(v,":-webkit-")+P.replace(v,":-moz-")+P:P;case 1e3:switch(I=P.substring(13).trim(),D=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(D)){case 226:I=P.replace(O,"tb");break;case 232:I=P.replace(O,"tb-rl");break;case 220:I=P.replace(O,"lr");break;default:return P}return"-webkit-"+P+"-ms-"+I+P;case 1017:if(P.indexOf("sticky",9)===-1)break;case 975:switch(D=(P=b).length-10,I=(P.charCodeAt(D)===33?P.substring(0,D):P).substring(b.indexOf(":",7)+1).trim(),J=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:P=P.replace(I,"-webkit-"+I)+";"+P;break;case 207:case 102:P=P.replace(I,"-webkit-"+(102<J?"inline-":"")+"box")+";"+P.replace(I,"-webkit-"+I)+";"+P.replace(I,"-ms-"+I+"box")+";"+P}return P+";";case 938:if(P.charCodeAt(5)===45)switch(P.charCodeAt(6)){case 105:return I=P.replace("-items",""),"-webkit-"+P+"-webkit-box-"+I+"-ms-flex-"+I+P;case 115:return"-webkit-"+P+"-ms-flex-item-"+P.replace(R,"")+P;default:return"-webkit-"+P+"-ms-flex-line-pack"+P.replace("align-content","").replace(R,"")+P}break;case 973:case 989:if(P.charCodeAt(3)!==45||P.charCodeAt(4)===122)break;case 931:case 953:if(_.test(b)===!0)return(I=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?i(b.replace("stretch","fill-available"),D,M,B).replace(":fill-available",":stretch"):P.replace(I,"-webkit-"+I)+P.replace(I,"-moz-"+I.replace("fill-",""))+P;break;case 962:if(P="-webkit-"+P+(P.charCodeAt(5)===102?"-ms-"+P:"")+P,M+B===211&&P.charCodeAt(13)===105&&0<P.indexOf("transform",10))return P.substring(0,P.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+P}return P}function o(b,D){var M=b.indexOf(D===1?":":"{"),B=b.substring(0,D!==3?M:10);return M=b.substring(M+1,b.length-1),$(D!==2?B:B.replace(E,"$1"),M,D)}function l(b,D){var M=i(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return M!==D+";"?M.replace(T," or ($1)").substring(4):"("+D+")"}function s(b,D,M,B,P,J,I,xe,re,oe){for(var Q=0,Ne=D,Ke;Q<N;++Q)switch(Ke=Se[Q].call(d,b,Ne,M,B,P,J,I,xe,re,oe)){case void 0:case!1:case!0:case null:break;default:Ne=Ke}if(Ne!==D)return Ne}function a(b){switch(b){case void 0:case null:N=Se.length=0;break;default:if(typeof b=="function")Se[N++]=b;else if(typeof b=="object")for(var D=0,M=b.length;D<M;++D)a(b[D]);else F=!!b|0}return a}function u(b){return b=b.prefix,b!==void 0&&($=null,b?typeof b!="function"?de=1:(de=2,$=b):de=0),u}function d(b,D){var M=b;if(33>M.charCodeAt(0)&&(M=M.trim()),q=M,M=[q],0<N){var B=s(-1,D,M,M,H,K,0,0,0,0);B!==void 0&&typeof B=="string"&&(D=B)}var P=t(ze,M,D,0,0);return 0<N&&(B=s(-2,P,M,M,H,K,P.length,0,0,0),B!==void 0&&(P=B)),q="",ce=0,K=H=1,P}var f=/^\0+/g,p=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,x=/([,: ])(transform)/g,S=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,w=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,_=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,K=1,H=1,ce=0,de=1,ze=[],Se=[],N=0,$=null,F=0,q="";return d.use=a,d.set=u,e!==void 0&&u(e),d}var yg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function xg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var wg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gd=xg(function(e){return wg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Sh={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=typeof Symbol=="function"&&Symbol.for,Mu=Le?Symbol.for("react.element"):60103,zu=Le?Symbol.for("react.portal"):60106,Pl=Le?Symbol.for("react.fragment"):60107,kl=Le?Symbol.for("react.strict_mode"):60108,Ol=Le?Symbol.for("react.profiler"):60114,jl=Le?Symbol.for("react.provider"):60109,Rl=Le?Symbol.for("react.context"):60110,$u=Le?Symbol.for("react.async_mode"):60111,Tl=Le?Symbol.for("react.concurrent_mode"):60111,Al=Le?Symbol.for("react.forward_ref"):60112,Ll=Le?Symbol.for("react.suspense"):60113,Sg=Le?Symbol.for("react.suspense_list"):60120,Nl=Le?Symbol.for("react.memo"):60115,_l=Le?Symbol.for("react.lazy"):60116,Cg=Le?Symbol.for("react.block"):60121,Eg=Le?Symbol.for("react.fundamental"):60117,Pg=Le?Symbol.for("react.responder"):60118,kg=Le?Symbol.for("react.scope"):60119;function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mu:switch(e=e.type,e){case $u:case Tl:case Pl:case Ol:case kl:case Ll:return e;default:switch(e=e&&e.$$typeof,e){case Rl:case Al:case _l:case Nl:case jl:return e;default:return t}}case zu:return t}}}function Ch(e){return at(e)===Tl}ae.AsyncMode=$u;ae.ConcurrentMode=Tl;ae.ContextConsumer=Rl;ae.ContextProvider=jl;ae.Element=Mu;ae.ForwardRef=Al;ae.Fragment=Pl;ae.Lazy=_l;ae.Memo=Nl;ae.Portal=zu;ae.Profiler=Ol;ae.StrictMode=kl;ae.Suspense=Ll;ae.isAsyncMode=function(e){return Ch(e)||at(e)===$u};ae.isConcurrentMode=Ch;ae.isContextConsumer=function(e){return at(e)===Rl};ae.isContextProvider=function(e){return at(e)===jl};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mu};ae.isForwardRef=function(e){return at(e)===Al};ae.isFragment=function(e){return at(e)===Pl};ae.isLazy=function(e){return at(e)===_l};ae.isMemo=function(e){return at(e)===Nl};ae.isPortal=function(e){return at(e)===zu};ae.isProfiler=function(e){return at(e)===Ol};ae.isStrictMode=function(e){return at(e)===kl};ae.isSuspense=function(e){return at(e)===Ll};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pl||e===Tl||e===Ol||e===kl||e===Ll||e===Sg||typeof e=="object"&&e!==null&&(e.$$typeof===_l||e.$$typeof===Nl||e.$$typeof===jl||e.$$typeof===Rl||e.$$typeof===Al||e.$$typeof===Eg||e.$$typeof===Pg||e.$$typeof===kg||e.$$typeof===Cg)};ae.typeOf=at;Sh.exports=ae;var Og=Sh.exports,Fu=Og,jg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Eh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bu={};Bu[Fu.ForwardRef]=Tg;Bu[Fu.Memo]=Eh;function vd(e){return Fu.isMemo(e)?Eh:Bu[e.$$typeof]||jg}var Ag=Object.defineProperty,Lg=Object.getOwnPropertyNames,yd=Object.getOwnPropertySymbols,Ng=Object.getOwnPropertyDescriptor,_g=Object.getPrototypeOf,xd=Object.prototype;function Ph(e,t,n){if(typeof t!="string"){if(xd){var r=_g(t);r&&r!==xd&&Ph(e,r,n)}var i=Lg(t);yd&&(i=i.concat(yd(t)));for(var o=vd(e),l=vd(t),s=0;s<i.length;++s){var a=i[s];if(!Rg[a]&&!(n&&n[a])&&!(l&&l[a])&&!(o&&o[a])){var u=Ng(t,a);try{Ag(e,a,u)}catch{}}}}return e}var bg=Ph;const Ig=Zo(bg);function Pt(){return(Pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var wd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ka=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!wh.typeOf(e)},Bo=Object.freeze([]),xn=Object.freeze({});function Cr(e){return typeof e=="function"}function Sd(e){return e.displayName||e.name||"Component"}function Uu(e){return e&&typeof e.styledComponentId=="string"}var Er=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Hu=typeof window<"u"&&"HTMLElement"in window,Dg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),Mg={};function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var zg=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Un(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var s=o;s<l;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,s=o;s<l;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),fo=new Map,Uo=new Map,ni=1,Zi=function(e){if(fo.has(e))return fo.get(e);for(;Uo.has(ni);)ni++;var t=ni++;return fo.set(e,t),Uo.set(t,e),t},$g=function(e){return Uo.get(e)},Fg=function(e,t){t>=ni&&(ni=t+1),fo.set(e,t),Uo.set(t,e)},Bg="style["+Er+'][data-styled-version="5.3.11"]',Ug=new RegExp("^"+Er+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Hg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Vg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(Ug);if(s){var a=0|parseInt(s[1],10),u=s[2];a!==0&&(Fg(u,a),Hg(e,u,s[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(l)}}},Wg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},kh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var a=s.childNodes,u=a.length;u>=0;u--){var d=a[u];if(d&&d.nodeType===1&&d.hasAttribute(Er))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Er,"active"),r.setAttribute("data-styled-version","5.3.11");var l=Wg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Qg=function(){function e(n){var r=this.element=kh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,s=o.length;l<s;l++){var a=o[l];if(a.ownerNode===i)return a}Un(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Gg=function(){function e(n){var r=this.element=kh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Kg=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Cd=Hu,Yg={isServer:!Hu,useCSSOMInjection:!Dg},Ho=function(){function e(n,r,i){n===void 0&&(n=xn),r===void 0&&(r={}),this.options=Pt({},Yg,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Hu&&Cd&&(Cd=!1,function(o){for(var l=document.querySelectorAll(Bg),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(Er)!=="active"&&(Vg(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Zi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Pt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Kg(l):o?new Qg(l):new Gg(l),new zg(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Zi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Zi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Zi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var s=$g(l);if(s!==void 0){var a=n.names.get(s),u=r.getGroup(l);if(a&&u&&a.size){var d=Er+".g"+l+'[id="'+s+'"]',f="";a!==void 0&&a.forEach(function(p){p.length>0&&(f+=p+",")}),o+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),Xg=/(a)(d)/gi,Ed=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ed(t%52)+n;return(Ed(t%52)+n).replace(Xg,"$1-$2")}var ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oh=function(e){return ar(5381,e)};function jh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Cr(n)&&!Uu(n))return!1}return!0}var Zg=Oh("5.3.11"),qg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jh(t),this.componentId=n,this.baseHash=ar(Zg,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Hn(this.rules,t,n,r).join(""),s=Oa(ar(this.baseHash,l)>>>0);if(!n.hasNameForId(i,s)){var a=r(l,"."+s,void 0,i);n.insertRules(i,s,a)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,d=ar(this.baseHash,r.hash),f="",p=0;p<u;p++){var v=this.rules[p];if(typeof v=="string")f+=v;else if(v){var g=Hn(v,t,n,r),x=Array.isArray(g)?g.join(""):g;d=ar(d,x+p),f+=x}}if(f){var S=Oa(d>>>0);if(!n.hasNameForId(i,S)){var m=r(f,"."+S,void 0,i);n.insertRules(i,S,m)}o.push(S)}}return o.join(" ")},e}(),Jg=/^\s*\/\/.*$/gm,ev=[":","[",".","#"];function tv(e){var t,n,r,i,o=e===void 0?xn:e,l=o.options,s=l===void 0?xn:l,a=o.plugins,u=a===void 0?Bo:a,d=new vg(s),f=[],p=function(x){function S(m){if(m)try{x(m+"}")}catch{}}return function(m,h,y,w,O,k,T,R,E,_){switch(m){case 1:if(E===0&&h.charCodeAt(0)===64)return x(h+";"),"";break;case 2:if(R===0)return h+"/*|*/";break;case 3:switch(R){case 102:case 112:return x(y[0]+h),"";default:return h+(_===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(S)}}}(function(x){f.push(x)}),v=function(x,S,m){return S===0&&ev.indexOf(m[n.length])!==-1||m.match(i)?x:"."+t};function g(x,S,m,h){h===void 0&&(h="&");var y=x.replace(Jg,""),w=S&&m?m+" "+S+" { "+y+" }":y;return t=h,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(m||!S?"":S,w)}return d.use([].concat(u,[function(x,S,m){x===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,v))},p,function(x){if(x===-2){var S=f;return f=[],S}}])),g.hash=u.length?u.reduce(function(x,S){return S.name||Un(15),ar(x,S.name)},5381).toString():"",g}var Rh=W.createContext();Rh.Consumer;var Th=W.createContext(),nv=(Th.Consumer,new Ho),ja=tv();function Ah(){return C.useContext(Rh)||nv}function Lh(){return C.useContext(Th)||ja}var rv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ja);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Un(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ja),this.name+t.hash},e}(),iv=/([A-Z])/,ov=/([A-Z])/g,lv=/^ms-/,sv=function(e){return"-"+e.toLowerCase()};function Pd(e){return iv.test(e)?e.replace(ov,sv).replace(lv,"-ms-"):e}var kd=function(e){return e==null||e===!1||e===""};function Hn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,s=e.length;l<s;l+=1)(i=Hn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(kd(e))return"";if(Uu(e))return"."+e.styledComponentId;if(Cr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Hn(a,t,n,r)}var u;return e instanceof rv?n?(e.inject(n,r),e.getName(r)):e:ka(e)?function d(f,p){var v,g,x=[];for(var S in f)f.hasOwnProperty(S)&&!kd(f[S])&&(Array.isArray(f[S])&&f[S].isCss||Cr(f[S])?x.push(Pd(S)+":",f[S],";"):ka(f[S])?x.push.apply(x,d(f[S],S)):x.push(Pd(S)+": "+(v=S,(g=f[S])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in yg||v.startsWith("--")?String(g).trim():g+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(e):e.toString()}var Od=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Nh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Cr(e)||ka(e)?Od(Hn(wd(Bo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Od(Hn(wd(e,n)))}var _h=function(e,t,n){return n===void 0&&(n=xn),e.theme!==n.theme&&e.theme||t||n.theme},av=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uv=/(^-|-$)/g;function Es(e){return e.replace(av,"-").replace(uv,"")}var bh=function(e){return Oa(Oh(e)>>>0)};function qi(e){return typeof e=="string"&&!0}var Ra=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},cv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function dv(e,t,n){var r=e[n];Ra(t)&&Ra(r)?Ih(r,t):e[n]=t}function Ih(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Ra(l))for(var s in l)cv(s)&&dv(e,l[s],s)}return e}var Si=W.createContext();Si.Consumer;function fv(e){var t=C.useContext(Si),n=C.useMemo(function(){return function(r,i){if(!r)return Un(14);if(Cr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Un(8):i?Pt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?W.createElement(Si.Provider,{value:n},e.children):null}var Ps={};function Dh(e,t,n){var r=Uu(e),i=!qi(e),o=t.attrs,l=o===void 0?Bo:o,s=t.componentId,a=s===void 0?function(h,y){var w=typeof h!="string"?"sc":Es(h);Ps[w]=(Ps[w]||0)+1;var O=w+"-"+bh("5.3.11"+w+Ps[w]);return y?y+"-"+O:O}(t.displayName,t.parentComponentId):s,u=t.displayName,d=u===void 0?function(h){return qi(h)?"styled."+h:"Styled("+Sd(h)+")"}(e):u,f=t.displayName&&t.componentId?Es(t.displayName)+"-"+t.componentId:t.componentId||a,p=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(h,y,w){return e.shouldForwardProp(h,y,w)&&t.shouldForwardProp(h,y,w)}:e.shouldForwardProp);var g,x=new qg(n,f,r?e.componentStyle:void 0),S=x.isStatic&&l.length===0,m=function(h,y){return function(w,O,k,T){var R=w.attrs,E=w.componentStyle,_=w.defaultProps,G=w.foldedComponentIds,K=w.shouldForwardProp,H=w.styledComponentId,ce=w.target,de=function(B,P,J){B===void 0&&(B=xn);var I=Pt({},P,{theme:B}),xe={};return J.forEach(function(re){var oe,Q,Ne,Ke=re;for(oe in Cr(Ke)&&(Ke=Ke(I)),Ke)I[oe]=xe[oe]=oe==="className"?(Q=xe[oe],Ne=Ke[oe],Q&&Ne?Q+" "+Ne:Q||Ne):Ke[oe]}),[I,xe]}(_h(O,C.useContext(Si),_)||xn,O,R),ze=de[0],Se=de[1],N=function(B,P,J,I){var xe=Ah(),re=Lh(),oe=P?B.generateAndInjectStyles(xn,xe,re):B.generateAndInjectStyles(J,xe,re);return oe}(E,T,ze),$=k,F=Se.$as||O.$as||Se.as||O.as||ce,q=qi(F),b=Se!==O?Pt({},O,{},Se):O,D={};for(var M in b)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?D.as=b[M]:(K?K(M,gd,F):!q||gd(M))&&(D[M]=b[M]));return O.style&&Se.style!==O.style&&(D.style=Pt({},O.style,{},Se.style)),D.className=Array.prototype.concat(G,H,N!==H?N:null,O.className,Se.className).filter(Boolean).join(" "),D.ref=$,C.createElement(F,D)}(g,h,y,S)};return m.displayName=d,(g=W.forwardRef(m)).attrs=p,g.componentStyle=x,g.displayName=d,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Bo,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(h){var y=t.componentId,w=function(k,T){if(k==null)return{};var R,E,_={},G=Object.keys(k);for(E=0;E<G.length;E++)R=G[E],T.indexOf(R)>=0||(_[R]=k[R]);return _}(t,["componentId"]),O=y&&y+"-"+(qi(h)?h:Es(Sd(h)));return Dh(h,Pt({},w,{attrs:p,componentId:O}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?Ih({},e.defaultProps,h):h}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&Ig(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Ta=function(e){return function t(n,r,i){if(i===void 0&&(i=xn),!wh.isValidElementType(r))return Un(1,String(r));var o=function(){return n(r,i,Nh.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Pt({},i,{},l))},o.attrs=function(l){return t(n,r,Pt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Dh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ta[e]=Ta(e)});var pv=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=jh(n),Ho.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(Hn(this.rules,r,i,o).join(""),""),s=this.componentId+n;i.insertRules(s,s,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Ho.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function hv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nh.apply(void 0,[e].concat(n)),o="sc-global-"+bh(JSON.stringify(i)),l=new pv(i,o);function s(u){var d=Ah(),f=Lh(),p=C.useContext(Si),v=C.useRef(d.allocateGSInstance(o)).current;return d.server&&a(v,u,d,p,f),C.useLayoutEffect(function(){if(!d.server)return a(v,u,d,p,f),function(){return l.removeStyles(v,d)}},[v,u,d,p,f]),null}function a(u,d,f,p,v){if(l.isStatic)l.renderStyles(u,Mg,f,v);else{var g=Pt({},d,{theme:_h(d,p,s.defaultProps)});l.renderStyles(u,g,f,v)}}return W.memo(s)}const U=Ta,mv=hv`
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
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const jd="popstate";function gv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Aa("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mh(i)}return yv(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vv(){return Math.random().toString(36).substr(2,8)}function Rd(e,t){return{usr:e.state,key:e.key,idx:t}}function Aa(e,t,n,r){return n===void 0&&(n=null),Ci({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tr(t):t,{state:n,key:t&&t.key||r||vv()})}function Mh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=cn.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(Ci({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){s=cn.Pop;let S=d(),m=S==null?null:S-u;u=S,a&&a({action:s,location:x.location,delta:m})}function p(S,m){s=cn.Push;let h=Aa(x.location,S,m);n&&n(h,S),u=d()+1;let y=Rd(h,u),w=x.createHref(h);try{l.pushState(y,"",w)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(w)}o&&a&&a({action:s,location:x.location,delta:1})}function v(S,m){s=cn.Replace;let h=Aa(x.location,S,m);n&&n(h,S),u=d();let y=Rd(h,u),w=x.createHref(h);l.replaceState(y,"",w),o&&a&&a({action:s,location:x.location,delta:0})}function g(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:Mh(S);return je(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return s},get location(){return e(i,l)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(jd,f),a=S,()=>{i.removeEventListener(jd,f),a=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let m=g(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:v,go(S){return l.go(S)}};return x}var Td;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Td||(Td={}));function xv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Tr(t):t,i=Fh(r.pathname||"/",n);if(i==null)return null;let o=zh(e);wv(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=Tv(o[s],Nv(i));return l}function zh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(je(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Dn([r,a.relativePath]),d=n.concat(a);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:jv(u,o.index),routesMeta:d})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of $h(o.path))i(o,l,a)}),t}function $h(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=$h(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function wv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Rv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sv=/^:\w+$/,Cv=3,Ev=2,Pv=1,kv=10,Ov=-2,Ad=e=>e==="*";function jv(e,t){let n=e.split("/"),r=n.length;return n.some(Ad)&&(r+=Ov),t&&(r+=Ev),n.filter(i=>!Ad(i)).reduce((i,o)=>i+(Sv.test(o)?Cv:o===""?Pv:kv),r)}function Rv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Tv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Av({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let f=s.route;o.push({params:r,pathname:Dn([i,d.pathname]),pathnameBase:zv(Dn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Dn([i,d.pathnameBase]))}return o}function Av(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Lv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let p=s[f]||"";l=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[d]=_v(s[f]||"",d),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Lv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Nv(e){try{return decodeURI(e)}catch(t){return Vu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _v(e,t){try{return decodeURIComponent(e)}catch(n){return Vu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Fh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Tr(e):e;return{pathname:n?n.startsWith("/")?n:Iv(n,t):t,search:$v(r),hash:Fv(i)}}function Iv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ks(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Tr(e):(i=Ci({},e),je(!i.pathname||!i.pathname.includes("?"),ks("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),ks("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),ks("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(r||l==null)s=n;else{let f=t.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let a=bv(i,s),u=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Dn=e=>e.join("/").replace(/\/\/+/g,"/"),zv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$v=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Bv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bh=["post","put","patch","delete"];new Set(Bh);const Uv=["get",...Bh];new Set(Uv);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}const Wu=C.createContext(null),Hv=C.createContext(null),bl=C.createContext(null),Il=C.createContext(null),Qn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Uh=C.createContext(null);function Dl(){return C.useContext(Il)!=null}function Hh(){return Dl()||je(!1),C.useContext(Il).location}function Vh(e){C.useContext(bl).static||C.useLayoutEffect(e)}function Lt(){let{isDataRoute:e}=C.useContext(Qn);return e?ny():Vv()}function Vv(){Dl()||je(!1);let e=C.useContext(Wu),{basename:t,navigator:n}=C.useContext(bl),{matches:r}=C.useContext(Qn),{pathname:i}=Hh(),o=JSON.stringify(Dv(r).map(a=>a.pathnameBase)),l=C.useRef(!1);return Vh(()=>{l.current=!0}),C.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){n.go(a);return}let d=Mv(a,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Dn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}function Wh(){let{matches:e}=C.useContext(Qn),t=e[e.length-1];return t?t.params:{}}function Wv(e,t){return Qv(e,t)}function Qv(e,t,n){Dl()||je(!1);let{navigator:r}=C.useContext(bl),{matches:i}=C.useContext(Qn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let a=Hh(),u;if(t){var d;let x=typeof t=="string"?Tr(t):t;s==="/"||(d=x.pathname)!=null&&d.startsWith(s)||je(!1),u=x}else u=a;let f=u.pathname||"/",p=s==="/"?f:f.slice(s.length)||"/",v=xv(e,{pathname:p}),g=Zv(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Dn([s,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:Dn([s,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&g?C.createElement(Il.Provider,{value:{location:Vo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:cn.Pop}},g):g}function Gv(){let e=ty(),t=Bv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const Kv=C.createElement(Gv,null);class Yv extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Qn.Provider,{value:this.props.routeContext},C.createElement(Uh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xv(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Wu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Qn.Provider,{value:t},r)}function Zv(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let s=o.findIndex(a=>a.route.id&&(l==null?void 0:l[a.route.id]));s>=0||je(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,a,u)=>{let d=a.route.id?l==null?void 0:l[a.route.id]:null,f=null;n&&(f=a.route.errorElement||Kv);let p=t.concat(o.slice(0,u+1)),v=()=>{let g;return d?g=f:a.route.Component?g=C.createElement(a.route.Component,null):a.route.element?g=a.route.element:g=s,C.createElement(Xv,{match:a,routeContext:{outlet:s,matches:p,isDataRoute:n!=null},children:g})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?C.createElement(Yv,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:v(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):v()},null)}var La;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(La||(La={}));var Ei;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Ei||(Ei={}));function qv(e){let t=C.useContext(Wu);return t||je(!1),t}function Jv(e){let t=C.useContext(Hv);return t||je(!1),t}function ey(e){let t=C.useContext(Qn);return t||je(!1),t}function Qh(e){let t=ey(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function ty(){var e;let t=C.useContext(Uh),n=Jv(Ei.UseRouteError),r=Qh(Ei.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ny(){let{router:e}=qv(La.UseNavigateStable),t=Qh(Ei.UseNavigateStable),n=C.useRef(!1);return Vh(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vo({fromRouteId:t},o)))},[e,t])}function ut(e){je(!1)}function ry(e){let{basename:t="/",children:n=null,location:r,navigationType:i=cn.Pop,navigator:o,static:l=!1}=e;Dl()&&je(!1);let s=t.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof r=="string"&&(r=Tr(r));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:v="default"}=r,g=C.useMemo(()=>{let x=Fh(u,s);return x==null?null:{location:{pathname:x,search:d,hash:f,state:p,key:v},navigationType:i}},[s,u,d,f,p,v,i]);return g==null?null:C.createElement(bl.Provider,{value:a},C.createElement(Il.Provider,{children:n,value:g}))}function Na(e){let{children:t,location:n}=e;return Wv(_a(t),n)}var Ld;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ld||(Ld={}));new Promise(()=>{});function _a(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,_a(r.props.children,o));return}r.type!==ut&&je(!1),!r.props.index||!r.props.children||je(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=_a(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const iy="startTransition",Nd=im[iy];function oy(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=gv({window:i,v5Compat:!0}));let l=o.current,[s,a]=C.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=C.useCallback(f=>{u&&Nd?Nd(()=>a(f)):a(f)},[a,u]);return C.useLayoutEffect(()=>l.listen(d),[l,d]),C.createElement(ry,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l})}var _d;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(_d||(_d={}));var bd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bd||(bd={}));const ly=U.div`
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



`;function Rt({icon:e,span:t,children:n,...r}){return c.jsxs(ly,{children:[e||null,t||null,c.jsx("span",{}),c.jsx("input",{...r})]})}const sy=U.button`
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


`;function Gn({title:e,loading:t=!1,icon:n,...r}){return c.jsxs(sy,{type:"button",disabled:t===!0,loading:t===!0?"true":"false",...r,children:[n||null,c.jsx("p",{children:t?"Carregando":e})]})}const ay=U.div`
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
  `;var Gh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Id=W.createContext&&W.createContext(Gh),wn=globalThis&&globalThis.__assign||function(){return wn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wn.apply(this,arguments)},uy=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Kh(e){return e&&e.map(function(t,n){return W.createElement(t.tag,wn({key:n},t.attr),Kh(t.child))})}function Nt(e){return function(t){return W.createElement(cy,wn({attr:wn({},e.attr)},t),Kh(e.child))}}function cy(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=uy(e,["attr","size","title"]),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),W.createElement("svg",wn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:wn(wn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&W.createElement("title",null,o),e.children)};return Id!==void 0?W.createElement(Id.Consumer,null,function(n){return t(n)}):t(Gh)}function Yh(e){return Nt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"}}]})(e)}function Xh(e,t){return function(){return e.apply(t,arguments)}}const{toString:dy}=Object.prototype,{getPrototypeOf:Qu}=Object,Ml=(e=>t=>{const n=dy.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ft=e=>(e=e.toLowerCase(),t=>Ml(t)===e),zl=e=>t=>typeof t===e,{isArray:Ar}=Array,Pi=zl("undefined");function fy(e){return e!==null&&!Pi(e)&&e.constructor!==null&&!Pi(e.constructor)&&mt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Zh=Ft("ArrayBuffer");function py(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Zh(e.buffer),t}const hy=zl("string"),mt=zl("function"),qh=zl("number"),$l=e=>e!==null&&typeof e=="object",my=e=>e===!0||e===!1,po=e=>{if(Ml(e)!=="object")return!1;const t=Qu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gy=Ft("Date"),vy=Ft("File"),yy=Ft("Blob"),xy=Ft("FileList"),wy=e=>$l(e)&&mt(e.pipe),Sy=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||mt(e.append)&&((t=Ml(e))==="formdata"||t==="object"&&mt(e.toString)&&e.toString()==="[object FormData]"))},Cy=Ft("URLSearchParams"),Ey=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ai(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ar(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length;let s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function Jh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const e1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),t1=e=>!Pi(e)&&e!==e1;function ba(){const{caseless:e}=t1(this)&&this||{},t={},n=(r,i)=>{const o=e&&Jh(t,i)||i;po(t[o])&&po(r)?t[o]=ba(t[o],r):po(r)?t[o]=ba({},r):Ar(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ai(arguments[r],n);return t}const Py=(e,t,n,{allOwnKeys:r}={})=>(Ai(t,(i,o)=>{n&&mt(i)?e[o]=Xh(i,n):e[o]=i},{allOwnKeys:r}),e),ky=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Oy=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},jy=(e,t,n,r)=>{let i,o,l;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Qu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ry=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ty=e=>{if(!e)return null;if(Ar(e))return e;let t=e.length;if(!qh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ay=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Qu(Uint8Array)),Ly=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Ny=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_y=Ft("HTMLFormElement"),by=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Dd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Iy=Ft("RegExp"),n1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ai(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Dy=e=>{n1(e,(t,n)=>{if(mt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(mt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},My=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ar(e)?r(e):r(String(e).split(t)),n},zy=()=>{},$y=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Os="abcdefghijklmnopqrstuvwxyz",Md="0123456789",r1={DIGIT:Md,ALPHA:Os,ALPHA_DIGIT:Os+Os.toUpperCase()+Md},Fy=(e=16,t=r1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function By(e){return!!(e&&mt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Uy=e=>{const t=new Array(10),n=(r,i)=>{if($l(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ar(r)?[]:{};return Ai(r,(l,s)=>{const a=n(l,i+1);!Pi(a)&&(o[s]=a)}),t[i]=void 0,o}}return r};return n(e,0)},Hy=Ft("AsyncFunction"),Vy=e=>e&&($l(e)||mt(e))&&mt(e.then)&&mt(e.catch),j={isArray:Ar,isArrayBuffer:Zh,isBuffer:fy,isFormData:Sy,isArrayBufferView:py,isString:hy,isNumber:qh,isBoolean:my,isObject:$l,isPlainObject:po,isUndefined:Pi,isDate:gy,isFile:vy,isBlob:yy,isRegExp:Iy,isFunction:mt,isStream:wy,isURLSearchParams:Cy,isTypedArray:Ay,isFileList:xy,forEach:Ai,merge:ba,extend:Py,trim:Ey,stripBOM:ky,inherits:Oy,toFlatObject:jy,kindOf:Ml,kindOfTest:Ft,endsWith:Ry,toArray:Ty,forEachEntry:Ly,matchAll:Ny,isHTMLForm:_y,hasOwnProperty:Dd,hasOwnProp:Dd,reduceDescriptors:n1,freezeMethods:Dy,toObjectSet:My,toCamelCase:by,noop:zy,toFiniteNumber:$y,findKey:Jh,global:e1,isContextDefined:t1,ALPHABET:r1,generateString:Fy,isSpecCompliantForm:By,toJSONObject:Uy,isAsyncFn:Hy,isThenable:Vy};function ee(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const i1=ee.prototype,o1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{o1[e]={value:e}});Object.defineProperties(ee,o1);Object.defineProperty(i1,"isAxiosError",{value:!0});ee.from=(e,t,n,r,i,o)=>{const l=Object.create(i1);return j.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),ee.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};const Wy=null;function Ia(e){return j.isPlainObject(e)||j.isArray(e)}function l1(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function zd(e,t,n){return e?e.concat(t).map(function(i,o){return i=l1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Qy(e){return j.isArray(e)&&!e.some(Ia)}const Gy=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Fl(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,S){return!j.isUndefined(S[x])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(j.isDate(g))return g.toISOString();if(!a&&j.isBlob(g))throw new ee("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(g)||j.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,x,S){let m=g;if(g&&!S&&typeof g=="object"){if(j.endsWith(x,"{}"))x=r?x:x.slice(0,-2),g=JSON.stringify(g);else if(j.isArray(g)&&Qy(g)||(j.isFileList(g)||j.endsWith(x,"[]"))&&(m=j.toArray(g)))return x=l1(x),m.forEach(function(y,w){!(j.isUndefined(y)||y===null)&&t.append(l===!0?zd([x],w,o):l===null?x:x+"[]",u(y))}),!1}return Ia(g)?!0:(t.append(zd(S,x,o),u(g)),!1)}const f=[],p=Object.assign(Gy,{defaultVisitor:d,convertValue:u,isVisitable:Ia});function v(g,x){if(!j.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(g),j.forEach(g,function(m,h){(!(j.isUndefined(m)||m===null)&&i.call(t,m,j.isString(h)?h.trim():h,x,p))===!0&&v(m,x?x.concat(h):[h])}),f.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return v(e),t}function $d(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Gu(e,t){this._pairs=[],e&&Fl(e,this,t)}const s1=Gu.prototype;s1.append=function(t,n){this._pairs.push([t,n])};s1.toString=function(t){const n=t?function(r){return t.call(this,r,$d)}:$d;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Ky(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a1(e,t,n){if(!t)return e;const r=n&&n.encode||Ky,i=n&&n.serialize;let o;if(i?o=i(t,n):o=j.isURLSearchParams(t)?t.toString():new Gu(t,n).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Yy{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fd=Yy,u1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xy=typeof URLSearchParams<"u"?URLSearchParams:Gu,Zy=typeof FormData<"u"?FormData:null,qy=typeof Blob<"u"?Blob:null,Jy=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),e2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Dt={isBrowser:!0,classes:{URLSearchParams:Xy,FormData:Zy,Blob:qy},isStandardBrowserEnv:Jy,isStandardBrowserWebWorkerEnv:e2,protocols:["http","https","file","blob","url","data"]};function t2(e,t){return Fl(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Dt.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function n2(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function r2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function c1(e){function t(n,r,i,o){let l=n[o++];const s=Number.isFinite(+l),a=o>=n.length;return l=!l&&j.isArray(i)?i.length:l,a?(j.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!j.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&j.isArray(i[l])&&(i[l]=r2(i[l])),!s)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,i)=>{t(n2(r),i,n,0)}),n}return null}const i2={"Content-Type":void 0};function o2(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Bl={transitional:u1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=j.isObject(t);if(o&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i&&i?JSON.stringify(c1(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return t2(t,this.formSerializer).toString();if((s=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Fl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),o2(t)):t}],transformResponse:[function(t){const n=this.transitional||Bl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?ee.from(s,ee.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],function(t){Bl.headers[t]={}});j.forEach(["post","put","patch"],function(t){Bl.headers[t]=j.merge(i2)});const Ku=Bl,l2=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),s2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&l2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Bd=Symbol("internals");function Ur(e){return e&&String(e).trim().toLowerCase()}function ho(e){return e===!1||e==null?e:j.isArray(e)?e.map(ho):String(e)}function a2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const u2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function js(e,t,n,r,i){if(j.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function c2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function d2(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}class Ul{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,a,u){const d=Ur(a);if(!d)throw new Error("header name must be a non-empty string");const f=j.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||a]=ho(s))}const l=(s,a)=>j.forEach(s,(u,d)=>o(u,d,a));return j.isPlainObject(t)||t instanceof this.constructor?l(t,n):j.isString(t)&&(t=t.trim())&&!u2(t)?l(s2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Ur(t),t){const r=j.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return a2(i);if(j.isFunction(n))return n.call(this,i,r);if(j.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ur(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||js(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(l){if(l=Ur(l),l){const s=j.findKey(r,l);s&&(!n||js(r,r[s],s,n))&&(delete r[s],i=!0)}}return j.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||js(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return j.forEach(this,(i,o)=>{const l=j.findKey(r,o);if(l){n[l]=ho(i),delete n[o];return}const s=t?c2(o):String(o).trim();s!==o&&delete n[o],n[s]=ho(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Bd]=this[Bd]={accessors:{}}).accessors,i=this.prototype;function o(l){const s=Ur(l);r[s]||(d2(i,l),r[s]=!0)}return j.isArray(t)?t.forEach(o):o(t),this}}Ul.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.freezeMethods(Ul.prototype);j.freezeMethods(Ul);const Qt=Ul;function Rs(e,t){const n=this||Ku,r=t||n,i=Qt.from(r.headers);let o=r.data;return j.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function d1(e){return!!(e&&e.__CANCEL__)}function Li(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(Li,ee,{__CANCEL__:!0});function f2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const p2=Dt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,l,s){const a=[];a.push(n+"="+encodeURIComponent(r)),j.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),j.isString(o)&&a.push("path="+o),j.isString(l)&&a.push("domain="+l),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function h2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function m2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function f1(e,t){return e&&!h2(t)?m2(e,t):t}const g2=Dt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const s=j.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function v2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function y2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[o];l||(l=u),n[i]=a,r[i]=u;let f=o,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-l<t)return;const v=d&&u-d;return v?Math.round(p*1e3/v):void 0}}function Ud(e,t){let n=0;const r=y2(50,250);return i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-n,a=r(s),u=o<=l;n=o;const d={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:a||void 0,estimated:a&&l&&u?(l-o)/a:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const x2=typeof XMLHttpRequest<"u",w2=x2&&function(e){return new Promise(function(n,r){let i=e.data;const o=Qt.from(e.headers).normalize(),l=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}j.isFormData(i)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+g))}const d=f1(e.baseURL,e.url);u.open(e.method.toUpperCase(),a1(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const v=Qt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),x={data:!l||l==="text"||l==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};f2(function(m){n(m),a()},function(m){r(m),a()},x),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new ee("Request aborted",ee.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||u1;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),r(new ee(g,x.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,u)),u=null},Dt.isStandardBrowserEnv){const v=(e.withCredentials||g2(d))&&e.xsrfCookieName&&p2.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&j.forEach(o.toJSON(),function(g,x){u.setRequestHeader(x,g)}),j.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),l&&l!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ud(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ud(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{u&&(r(!v||v.type?new Li(null,e,u):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=v2(d);if(p&&Dt.protocols.indexOf(p)===-1){r(new ee("Unsupported protocol "+p+":",ee.ERR_BAD_REQUEST,e));return}u.send(i||null)})},mo={http:Wy,xhr:w2};j.forEach(mo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const S2={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=j.isString(n)?mo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ee(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(j.hasOwnProp(mo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!j.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:mo};function Ts(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Li(null,e)}function Hd(e){return Ts(e),e.headers=Qt.from(e.headers),e.data=Rs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),S2.getAdapter(e.adapter||Ku.adapter)(e).then(function(r){return Ts(e),r.data=Rs.call(e,e.transformResponse,r),r.headers=Qt.from(r.headers),r},function(r){return d1(r)||(Ts(e),r&&r.response&&(r.response.data=Rs.call(e,e.transformResponse,r.response),r.response.headers=Qt.from(r.response.headers))),Promise.reject(r)})}const Vd=e=>e instanceof Qt?e.toJSON():e;function Pr(e,t){t=t||{};const n={};function r(u,d,f){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:f},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function i(u,d,f){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function o(u,d){if(!j.isUndefined(d))return r(void 0,d)}function l(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,d)=>i(Vd(u),Vd(d),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=a[d]||i,p=f(e[d],t[d],d);j.isUndefined(p)&&f!==s||(n[d]=p)}),n}const p1="1.4.0",Yu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Wd={};Yu.transitional=function(t,n,r){function i(o,l){return"[Axios v"+p1+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new ee(i(l," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!Wd[l]&&(Wd[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function C2(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],l=t[o];if(l){const s=e[o],a=s===void 0||l(s,o,e);if(a!==!0)throw new ee("option "+o+" must be "+a,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+o,ee.ERR_BAD_OPTION)}}const Da={assertOptions:C2,validators:Yu},tn=Da.validators;class Wo{constructor(t){this.defaults=t,this.interceptors={request:new Fd,response:new Fd}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Pr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Da.assertOptions(r,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1),i!=null&&(j.isFunction(i)?n.paramsSerializer={serialize:i}:Da.assertOptions(i,{encode:tn.function,serialize:tn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=o&&j.merge(o.common,o[n.method]),l&&j.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Qt.concat(l,o);const s=[];let a=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(a=a&&x.synchronous,s.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let d,f=0,p;if(!a){const g=[Hd.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),p=g.length,d=Promise.resolve(n);f<p;)d=d.then(g[f++],g[f++]);return d}p=s.length;let v=n;for(f=0;f<p;){const g=s[f++],x=s[f++];try{v=g(v)}catch(S){x.call(this,S);break}}try{d=Hd.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,p=u.length;f<p;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Pr(this.defaults,t);const n=f1(t.baseURL,t.url);return a1(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){Wo.prototype[t]=function(n,r){return this.request(Pr(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(Pr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Wo.prototype[t]=n(),Wo.prototype[t+"Form"]=n(!0)});const go=Wo;class Xu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new Li(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Xu(function(i){t=i}),cancel:t}}}const E2=Xu;function P2(e){return function(n){return e.apply(null,n)}}function k2(e){return j.isObject(e)&&e.isAxiosError===!0}const Ma={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ma).forEach(([e,t])=>{Ma[t]=e});const O2=Ma;function h1(e){const t=new go(e),n=Xh(go.prototype.request,t);return j.extend(n,go.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return h1(Pr(e,i))},n}const Re=h1(Ku);Re.Axios=go;Re.CanceledError=Li;Re.CancelToken=E2;Re.isCancel=d1;Re.VERSION=p1;Re.toFormData=Fl;Re.AxiosError=ee;Re.Cancel=Re.CanceledError;Re.all=function(t){return Promise.all(t)};Re.spread=P2;Re.isAxiosError=k2;Re.mergeConfig=Pr;Re.AxiosHeaders=Qt;Re.formToJSON=e=>c1(j.isHTMLForm(e)?new FormData(e):e);Re.HttpStatusCode=O2;Re.default=Re;const j2=Re,ue=j2.create({baseURL:"https://food-explorer-api-yrug.onrender.com"}),m1=C.createContext({});function R2({children:e}){const[t,n]=C.useState({});async function r({email:o,password:l}){try{const s=await ue.post("/sessions",{email:o,password:l}),{user:a,token:u}=s.data;localStorage.setItem("@food-explorer:user",JSON.stringify(a)),localStorage.setItem("@food-explorer:token",u),ue.defaults.headers.common.Authorization=`Bearer ${u}`,n({user:a,token:u})}catch(s){s.response?alert(s.response.data.message):alert("Não foi possível entrar.")}}function i(){localStorage.removeItem("@food-explorer:token"),localStorage.removeItem("@food-explorer:user"),n({})}return C.useEffect(()=>{const o=localStorage.getItem("@food-explorer:token"),l=localStorage.getItem("@food-explorer:user");o&&l&&(ue.defaults.headers.common.Authorization=`Bearer ${o}`,n({token:o,user:JSON.parse(l)}))},[]),c.jsx(m1.Provider,{value:{signIn:r,signOut:i,user:t.user},children:e})}function qt(){return C.useContext(m1)}function T2(){const[e,t]=C.useState(""),[n,r]=C.useState(""),i=Lt(),{signIn:o}=qt();function l(){o({email:e,password:n})}function s(){i("/register")}return c.jsxs(ay,{children:[c.jsxs("div",{className:"logo",children:[c.jsx(Yh,{size:40,color:"#065E7C"}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsxs("div",{className:"form",children:[c.jsx("h1",{children:"Faça login"}),c.jsxs("div",{children:[c.jsx("span",{children:"Email"}),c.jsx(Rt,{placeholder:"Exemplo: exemplo@exemplo.com.br",type:"text",onChange:a=>t(a.target.value)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Senha"}),c.jsx(Rt,{placeholder:"No mínimo 6 caracteres",type:"password",onChange:a=>r(a.target.value)})]}),c.jsx(Gn,{title:"Entrar",onClick:l}),c.jsx("a",{onClick:s,children:" Criar uma conta"})]})]})}const A2=U.div`
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
  `;function L2(){const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),l=Lt();function s(){if(!e||!n||!i)return alert("Preencha todos os campos!");if(i.length<6)return alert("A senha deve ter no mínimo 6 caracteres.");ue.post("/users",{name:e,email:n,password:i}).then(()=>{alert("Usuário cadastrado com sucesso!"),l("/")}).catch(u=>{u.response?alert(u.response.data.message):alert("Não foi possível cadastrar.")})}function a(){l("/")}return c.jsxs(A2,{children:[c.jsxs("div",{className:"logo",children:[c.jsx(Yh,{size:40,color:"#065E7C"}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsxs("div",{className:"form",children:[c.jsx("h1",{children:"Crie sua conta"}),c.jsxs("div",{children:[c.jsx("span",{children:"Seu nome"}),c.jsx(Rt,{placeholder:"Exemplo: Maria da Silva",type:"text",onChange:u=>t(u.target.value)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Email"}),c.jsx(Rt,{placeholder:"Exemplo: exemplo@exemplo.com.br",type:"email",onChange:u=>r(u.target.value)})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Senha"}),c.jsx(Rt,{placeholder:"No mínimo 6 caracteres",type:"password",onChange:u=>o(u.target.value)})]}),c.jsx(Gn,{title:"Criar conta",onClick:s}),c.jsx("a",{onClick:a,children:"Já tenho uma conta"})]})]})}function N2(){return c.jsxs(Na,{children:[c.jsx(ut,{path:"/",element:c.jsx(T2,{})}),c.jsx(ut,{path:"/register",element:c.jsx(L2,{})})]})}function _2(e){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function g1(e){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(e)}function b2(e){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function Zu(e){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"}},{tag:"path",attr:{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"}}]})(e)}const I2=U.button`
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
`;function $t({title:e="",onClick:t,Icon:n=!1,iconSize:r=!1,iconColor:i="",...o}){return c.jsxs(I2,{onClick:t,...o,children:[n&&c.jsx(n,{size:r,color:i}),e]})}const D2=U.header`
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

`,M2=U.div`
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
`,z2=U.button`
  border: none;
  background: none;

  margin-left: 2rem;

`;function v1(){return c.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.31703 1.61739C5.65131 0.725854 7.21999 0.25 8.8247 0.25H8.82475C10.9766 0.250137 13.0402 1.105 14.5617 2.62655C16.0833 4.14811 16.9382 6.21174 16.9383 8.36355V8.36359C16.9383 9.96831 16.4624 11.537 15.5709 12.8713C15.4144 13.1054 15.2464 13.3305 15.0677 13.5459L19.9914 18.4697C20.2843 18.7626 20.2843 19.2374 19.9914 19.5303C19.6985 19.8232 19.2237 19.8232 18.9308 19.5303L14.007 14.6065C13.3846 15.1232 12.6851 15.5467 11.9296 15.8596C10.4471 16.4737 8.8157 16.6344 7.24182 16.3213C5.66794 16.0082 4.22223 15.2355 3.08753 14.1008C1.95282 12.9661 1.18007 11.5204 0.867009 9.94648C0.553945 8.37259 0.714621 6.74122 1.32872 5.25866C1.94282 3.77609 2.98276 2.50892 4.31703 1.61739ZM8.82466 1.75C7.51663 1.75001 6.23797 2.13789 5.15039 2.86459C4.06279 3.5913 3.21511 4.6242 2.71454 5.83268C2.21397 7.04116 2.083 8.37093 2.33819 9.65384C2.59337 10.9368 3.22326 12.1152 4.14819 13.0401C5.07311 13.965 6.25154 14.5949 7.53446 14.8501C8.81737 15.1053 10.1471 14.9743 11.3556 14.4738C12.5641 13.9732 13.597 13.1255 14.3237 12.0379C15.0504 10.9503 15.4383 9.67167 15.4383 8.36364M8.8247 1.75C10.5787 1.75012 12.2608 2.44695 13.5011 3.68721C14.7413 4.92748 15.4382 6.6096 15.4383 8.36359",fill:"#C4C4CC"})})}const $2=U.button`
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
`;function F2({title:e,icon:t,...n}){return c.jsxs($2,{type:"button",...n,children:[t||null,c.jsx("p",{children:e})]})}function qu(){return c.jsxs("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.96118 13C8.96118 12.4477 9.4089 12 9.96118 12H22.9612C23.5135 12 23.9612 12.4477 23.9612 13C23.9612 13.5523 23.5135 14 22.9612 14H9.96118C9.4089 14 8.96118 13.5523 8.96118 13Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.96118 17C8.96118 16.4477 9.4089 16 9.96118 16H22.9612C23.5135 16 23.9612 16.4477 23.9612 17C23.9612 17.5523 23.5135 18 22.9612 18H9.96118C9.4089 18 8.96118 17.5523 8.96118 17Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.04697 5.58579C4.42204 5.21071 4.93075 5 5.46118 5H27.4612C27.9916 5 28.5003 5.21071 28.8754 5.58579C29.2505 5.96086 29.4612 6.46957 29.4612 7V26C29.4612 26.3466 29.2817 26.6684 28.9869 26.8507C28.6921 27.0329 28.324 27.0494 28.014 26.8944L24.4612 25.118L20.9084 26.8944C20.6269 27.0352 20.2955 27.0352 20.014 26.8944L16.4612 25.118L12.9084 26.8944C12.6269 27.0352 12.2955 27.0352 12.014 26.8944L8.46118 25.118L4.9084 26.8944C4.59841 27.0494 4.23027 27.0329 3.93545 26.8507C3.64063 26.6684 3.46118 26.3466 3.46118 26V7C3.46118 6.46957 3.6719 5.96086 4.04697 5.58579ZM27.4612 7L5.46118 7L5.46118 24.382L8.01397 23.1056C8.2955 22.9648 8.62687 22.9648 8.9084 23.1056L12.4612 24.882L16.014 23.1056C16.2955 22.9648 16.6269 22.9648 16.9084 23.1056L20.4612 24.882L24.014 23.1056C24.2955 22.9648 24.6269 22.9648 24.9084 23.1056L27.4612 24.382V7Z",fill:"white"})]})}function B2(){return c.jsx("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M17.4104 26.4874L27.5354 16.3624C30.0229 13.8624 30.3854 9.77493 28.0354 7.16243C27.4461 6.50407 26.7287 5.97278 25.927 5.60103C25.1254 5.22929 24.2564 5.02488 23.3732 5.00032C22.4899 4.97575 21.6109 5.13153 20.7898 5.45814C19.9688 5.78476 19.223 6.27534 18.5979 6.89993L16.6979 8.81243L15.0604 7.16243C12.5604 4.67493 8.47293 4.31243 5.86043 6.66243C5.20206 7.25179 4.67078 7.96919 4.29903 8.7708C3.92728 9.57242 3.72288 10.4414 3.69831 11.3247C3.67375 12.208 3.82953 13.087 4.15614 13.908C4.48276 14.7291 4.97334 15.4749 5.59793 16.0999L15.9854 26.4874C16.175 26.6752 16.4311 26.7806 16.6979 26.7806C16.9648 26.7806 17.2208 26.6752 17.4104 26.4874V26.4874Z",stroke:"#D9D9D9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Ni({handleShowFavorites:e,allQuantity:t,setDishes:n}){const[r,i]=C.useState(""),o=Lt(),{signOut:l}=qt();function s(){o("/")}function a(){o("/payment")}async function u(){const d=await ue.get("/favorites"),f=localStorage.getItem("@foodexplorer:favorites");f.length!==0&&(d.data.favoriteList?await ue.put("/favorites",{favoriteList:f}):await ue.post("/favorites",{favoriteList:f})),localStorage.removeItem("@foodexplorer:favorites"),o("/"),l()}return C.useEffect(()=>{if(r.length>0&&window.location.pathname=="/"){async function d(){const f=await ue.get(`/dishes?name=${r}`);n(f.data)}d()}else if(r.length==0&&n){async function d(){const f=await ue.get(`/dishes?name=${r}`);n(f.data)}d()}},[r]),c.jsx(D2,{children:c.jsxs("div",{className:"header",children:[c.jsxs("div",{className:"buttons",children:[c.jsxs(M2,{onClick:s,children:[c.jsx("svg",{width:"26",height:"30",viewBox:"0 0 26 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z",fill:"#065E7C"})}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsx(F2,{icon:c.jsx(B2,{}),title:"Meus favoritos",onClick:e}),c.jsx(Rt,{icon:c.jsx(v1,{}),placeholder:"Busque pelas opções de pratos",onChange:d=>i(d.target.value)})]}),c.jsx(Gn,{className:"button-receipt",icon:c.jsx(qu,{}),title:`Meu pedido (${t})`,onClick:a}),c.jsx(z2,{onClick:u,children:c.jsx("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})}const U2=U.header`
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


`,H2=U.button`
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
`,V2=U.div`
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
`,W2=U.button`
  border: none;
  background: none;

`;function Q2(e){return Nt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function G2(e){return Nt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function K2(e){return Nt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(e)}function Y2(e){return Nt({tag:"svg",attr:{t:"1551322312294",style:"",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"}},{tag:"path",attr:{d:"M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"}}]})(e)}function Hl({setDishes:e}){const[t,n]=C.useState(""),r=Lt(),{signOut:i}=qt();function o(){r("/")}function l(){r("/create")}function s(){r("/orders")}function a(){r("/"),i()}return C.useEffect(()=>{if(t.length>0&&window.location.pathname=="/"){async function u(){const d=await ue.get(`/dishes?name=${t}`);e(d.data)}u()}else if(t.length==0&&e){async function u(){const d=await ue.get(`/dishes?name=${t}`);e(d.data)}u()}},[t]),c.jsx(U2,{children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsxs(V2,{onClick:o,children:[c.jsx("svg",{width:"26",height:"30",viewBox:"0 0 26 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z",fill:"#065E7C"})}),c.jsx("h1",{children:"Food Explorer"})]})}),c.jsx("li",{children:c.jsxs(H2,{onClick:l,children:[c.jsx(Y2,{}),c.jsx("h1",{children:"Novo Prato"})]})}),c.jsx("li",{className:"input",children:c.jsx(Rt,{icon:c.jsx(v1,{}),placeholder:"Busque pelas opções de pratos",onChange:u=>n(u.target.value)})}),c.jsx("li",{children:c.jsx(Gn,{title:"Pedidos",onClick:s})}),c.jsx("li",{children:c.jsx(W2,{onClick:a,children:c.jsx("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})})}const X2=U.footer`
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

`;function Lr(){return c.jsxs(X2,{children:[c.jsxs("div",{children:[c.jsx("svg",{width:"26",height:"30",viewBox:"0 0 26 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z",fill:"#065E7C"})}),c.jsx("h1",{children:"Food Explorer"})]}),c.jsx("span",{children:"© 2022 - Todos os direitos reservados."})]})}const Z2=U.textarea`
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
`;function y1({value:e,...t}){return c.jsx(Z2,{...t,children:e})}const q2=U.div`
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
`;function Qo({isNew:e=!1,value:t,onClick:n,...r}){return c.jsxs(q2,{isNew:e,children:[c.jsx("input",{type:"text",value:t,readOnly:!e,...r}),c.jsx("button",{type:"button",onClick:n,children:e?c.jsx(_2,{}):c.jsx(b2,{})})]})}const J2=U.div`

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

`;function ex(){const{user:e}=qt(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,l]=C.useState(""),[s,a]=C.useState(null),u=["Prato Principal","Sobremesa","Bebida"],[d,f]=C.useState(u[0]),[p,v]=C.useState([]),[g,x]=C.useState(""),S=Lt();function m(){v(k=>[...k,g]),x("")}function h(k){v(T=>T.filter(R=>R!==k))}function y(k){a(k.target.files[0])}async function w(){const k=new FormData;if(!t||!r||!o||!d||!s)return alert("Preencha todos os campos!");if(g.length>0)return alert("Você deixou um ingrediente pendente no campo para adicionar.");const{data:{dish_id:T}}=await ue.post("/dishes",{name:t,ingredients:p,price:o,description:r,category:d});k.append("image",s);const R={headers:{"Content-Type":"multipart/form-data"}};await ue.patch(`/dishes/image/${T}`,k,R),alert("Prato criado com sucesso!"),S("/")}function O(){S("/")}return c.jsxs(J2,{children:[e.admin?c.jsx(Hl,{}):c.jsx(Ni,{}),c.jsxs("main",{children:[c.jsx($t,{onClick:O,Icon:Zu,iconSize:20,title:"voltar"}),c.jsx("h2",{children:"Criar Prato"}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"files",children:[c.jsx("span",{children:"Imagem do Prato"}),c.jsxs("label",{htmlFor:"dish-name",children:[c.jsx(g1,{size:24})," Selecione imagem"]}),c.jsx("input",{type:"file",id:"dish-name",name:"dish-name",onChange:y,accept:"image/png, image/jpeg"})]}),c.jsxs("div",{className:"input-name",children:[c.jsx("p",{children:"Nome"}),c.jsx(Rt,{placeholder:"Ex.: Salada Cesar",onChange:k=>n(k.target.value),required:!0})]}),c.jsxs("div",{className:" select",children:[c.jsx("span",{htmlFor:"food_type",children:"Categoria"}),c.jsx("select",{value:d,onChange:k=>f(k.target.value),children:u.map((k,T)=>c.jsx("option",{value:k,children:k},String(T)))})]})]}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"ingredients",children:[c.jsx("span",{children:"Ingredientes"}),c.jsxs("div",{className:"tags",children:[p.map((k,T)=>c.jsx(Qo,{value:k,onClick:()=>h(k)},String(T))),c.jsx(Qo,{isNew:!0,value:g,onChange:k=>x(k.target.value),onClick:m,placeholder:"Ingredientes"})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Preço"}),c.jsx(Rt,{placeholder:"R$ 00,00",onChange:k=>l(k.target.value)})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Descrição"}),c.jsx(y1,{placeholder:"Fale brevemente sobre o prato, seus ingredientes e composição",onChange:k=>i(k.target.value)})]}),c.jsx("button",{className:"addDish",onClick:w,children:"Criar Prato"})]}),c.jsx(Lr,{})]})}const tx="/assets/fruits-ecb7b9a0.png";function nx(){return c.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.24902 12C3.24902 11.5858 3.5882 11.25 4.0066 11.25H20.6733C21.0917 11.25 21.4308 11.5858 21.4308 12C21.4308 12.4142 21.0917 12.75 20.6733 12.75H4.0066C3.5882 12.75 3.24902 12.4142 3.24902 12Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.3399 3C12.7583 3 13.0975 3.33579 13.0975 3.75V20.25C13.0975 20.6642 12.7583 21 12.3399 21C11.9215 21 11.5824 20.6642 11.5824 20.25V3.75C11.5824 3.33579 11.9215 3 12.3399 3Z",fill:"white"})]})}function rx(){return c.jsx("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49146 12C3.49146 11.5858 3.83063 11.25 4.24903 11.25H20.9157C21.3341 11.25 21.6733 11.5858 21.6733 12C21.6733 12.4142 21.3341 12.75 20.9157 12.75H4.24903C3.83063 12.75 3.49146 12.4142 3.49146 12Z",fill:"white"})})}const ix=U.div`
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


`,Qd=U.button`
  background: none;
  border: none;

`,ox=U.div`
  display: flex;
  align-items: center;

  margin-right: 0.5rem;

  span {
    font-size: 20px;

    padding: 0 0.5rem;
  }
`,lx=U.div`
  width: 100%;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  
  span {
  font-weight: 700;
  color: ${({theme:e})=>e.COLORS.WHITE};

  }
`;function Yn({title:e,image:t,id:n,description:r,price:i,setAllOrders:o,setFavoriteP:l,favoriteP:s,...a}){const[u,d]=C.useState(1),f=Lt(),[p,v]=C.useState(()=>{const y=localStorage.getItem("@foodexplorer:favorites");return!!(y&&JSON.parse(y).filter(k=>k==n).length===1)});function g(){if(v(!p),p){const y=s.filter(w=>w!==n);l(y)}else l(y=>[...y,n])}const x=()=>{f(`/details/${n}`)};function S(){d(y=>y+1)}function m(){u>1&&d(y=>y-1)}function h(){const y={id:n,name:e,image:t,price:i,quantity:u},w=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));w||o(k=>[...k,y]);const O=w.filter(k=>k.id!==y.id);o(O),o(k=>[...k,y])}return c.jsxs(ix,{...a,children:[c.jsx($t,{Icon:p?Q2:K2,className:"icon",iconSize:30,iconColor:p?"red":"",onClick:()=>g()}),c.jsxs("div",{children:[c.jsx("img",{src:`${ue.defaults.baseURL}/dishes/${t}`,alt:"dish image"}),c.jsxs("div",{className:"informations",children:[c.jsx($t,{className:"name",title:e,onClick:x}),c.jsx("span",{children:r}),c.jsxs("h2",{children:["R$ ",i]})]})]}),c.jsxs(lx,{children:[c.jsxs(ox,{children:[c.jsx(Qd,{onClick:m,children:c.jsx(rx,{})}),c.jsx("span",{children:u.toString().padStart(2,0)}),c.jsx(Qd,{onClick:S,children:c.jsx(nx,{})})]}),c.jsx(Gn,{title:"incluir",onClick:h})]})]})}const sx=U.div`
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


`;function ax(e){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 7l16 0"}},{tag:"path",attr:{d:"M10 11l0 6"}},{tag:"path",attr:{d:"M14 11l0 6"}},{tag:"path",attr:{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}},{tag:"path",attr:{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}}]})(e)}function As({title:e,image:t,id:n,description:r,price:i,...o}){const l=Lt();function s(){l(`/edit/${n}`)}async function a(){try{return await ue.delete(`/dishes/${n}`),alert("Prato deletado."),l("/")}catch{return alert("Erro, favor tentar novamente.")}}return c.jsxs(sx,{children:[c.jsx($t,{Icon:ax,className:"icon",iconSize:20,iconColor:"red",onClick:a}),c.jsxs("div",{children:[c.jsx("img",{src:`${ue.defaults.baseURL}/dishes/${t}`,alt:"dish image"}),c.jsxs("div",{className:"informations",children:[c.jsx($t,{className:"name",title:e,onClick:s}),c.jsx("span",{children:r}),c.jsxs("h2",{children:["R$ ",i]})]})]})]})}const ux=U.div`
  width: 100%;
  color: white;

  h1 {
    font-family: ${({theme:e})=>e.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 500;
    margin: 20px 0 20px 25px;
  }
  .rec-arrow {
    font-size: 1.5rem;
    color: #fff;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .rec-arrow:hover {
    color: ${({theme:e})=>e.COLORS.BLUE} ;
  }
`;var x1={exports:{}},cx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dx=cx,fx=dx;function w1(){}function S1(){}S1.resetWarningCache=w1;var px=function(){function e(r,i,o,l,s,a){if(a!==fx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:S1,resetWarningCache:w1};return n.PropTypes=n,n};x1.exports=px();var hx=x1.exports;const L=Zo(hx);function ct(){return ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ct.apply(this,arguments)}function mx(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var gx={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},za={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},vx="Left",yx="Right",xx="Up",wx="Down",Sx="touchstart",Cx="touchmove",Ex="touchend",Gd="mousemove",Kd="mouseup";function Px(e,t,n,r){return e>t?n>0?vx:yx:r>0?xx:wx}function Yd(e,t){if(t===0)return e;var n=Math.PI/180*t,r=e[0]*Math.cos(n)+e[1]*Math.sin(n),i=e[1]*Math.cos(n)-e[0]*Math.sin(n);return[r,i]}function kx(e,t){var n=function(f){f.touches&&f.touches.length>1||e(function(p,v){v.trackMouse&&(document.addEventListener(Gd,r),document.addEventListener(Kd,l));var g=f.touches?f.touches[0]:f,x=g.clientX,S=g.clientY,m=Yd([x,S],v.rotationAngle);return ct({},p,za,{eventData:{initial:[].concat(m),first:!0},xy:m,start:f.timeStamp||0})})},r=function(f){e(function(p,v){if(!p.xy[0]||!p.xy[1]||f.touches&&f.touches.length>1)return p;var g=f.touches?f.touches[0]:f,x=g.clientX,S=g.clientY,m=Yd([x,S],v.rotationAngle),h=m[0],y=m[1],w=p.xy[0]-h,O=p.xy[1]-y,k=Math.abs(w),T=Math.abs(O),R=(f.timeStamp||0)-p.start,E=Math.sqrt(k*k+T*T)/(R||1);if(k<v.delta&&T<v.delta&&!p.swiping)return p;var _=Px(k,T,w,O),G=ct({},p.eventData,{event:f,absX:k,absY:T,deltaX:w,deltaY:O,velocity:E,dir:_});v.onSwiping&&v.onSwiping(G);var K=!1;return(v.onSwiping||v.onSwiped||v["onSwiped"+_])&&(K=!0),K&&v.preventDefaultTouchmoveEvent&&v.trackTouch&&f.cancelable&&f.preventDefault(),ct({},p,{eventData:ct({},G,{first:!1}),swiping:!0})})},i=function(f){e(function(p,v){var g;return p.swiping&&(g=ct({},p.eventData,{event:f}),v.onSwiped&&v.onSwiped(g),v["onSwiped"+g.dir]&&v["onSwiped"+g.dir](g)),ct({},p,za,{eventData:g})})},o=function(){document.removeEventListener(Gd,r),document.removeEventListener(Kd,l)},l=function(f){o(),i(f)},s=function(f){if(f&&f.addEventListener){var p=[[Sx,n],[Cx,r],[Ex,i]];return p.forEach(function(v){var g=v[0],x=v[1];return f.addEventListener(g,x)}),function(){return p.forEach(function(v){var g=v[0],x=v[1];return f.removeEventListener(g,x)})}}},a=function(f){f!==null&&e(function(p,v){if(p.el===f)return p;var g={};return p.el&&p.el!==f&&p.cleanUpTouch&&(p.cleanUpTouch(),g.cleanUpTouch=null),v.trackTouch&&f&&(g.cleanUpTouch=s(f)),ct({},p,{el:f},g)})},u={ref:a};return t.trackMouse&&(u.onMouseDown=n),[u,s]}function Ox(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),ct({},e,r)}var Ju=function(e){mx(t,e);function t(r){var i;return i=e.call(this,r)||this,i._set=function(o){i.transientState=o(i.transientState,i.props)},i.transientState=ct({},za,{type:"class"}),i}var n=t.prototype;return n.render=function(){var i=this.props,o=i.className,l=i.style,s=i.nodeName,a=s===void 0?"div":s,u=i.innerRef,d=i.children,f=i.trackMouse,p=kx(this._set,{trackMouse:f}),v=p[0],g=p[1];this.transientState=Ox(this.transientState,this.props,g);var x=u?function(S){return u(S),v.ref(S)}:v.ref;return W.createElement(a,ct({},v,{className:o,style:l,ref:x}),d)},t}(W.PureComponent);Ju.propTypes={onSwiped:L.func,onSwiping:L.func,onSwipedUp:L.func,onSwipedRight:L.func,onSwipedDown:L.func,onSwipedLeft:L.func,delta:L.number,preventDefaultTouchmoveEvent:L.bool,nodeName:L.string,trackMouse:L.bool,trackTouch:L.bool,innerRef:L.func,rotationAngle:L.number};Ju.defaultProps=gx;var C1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var a in o)t.call(o,a)&&o[a]&&r.push(a)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(C1);var jx=C1.exports;const Rx=Zo(jx);var E1=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},t.prototype.get=function(r){var i=e(this.__entries__,r),o=this.__entries__[i];return o&&o[1]},t.prototype.set=function(r,i){var o=e(this.__entries__,r);~o?this.__entries__[o][1]=i:this.__entries__.push([r,i])},t.prototype.delete=function(r){var i=this.__entries__,o=e(i,r);~o&&i.splice(o,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,i){var o=this;i===void 0&&(i=null);for(var l=0,s=o.__entries__;l<s.length;l+=1){var a=s[l];r.call(i,a[1],a[0])}},Object.defineProperties(t.prototype,n),t}()}(),ec=typeof window<"u"&&typeof document<"u"&&window.document===document,Go=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Tx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Go):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Ax=2,Lx=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function l(){Tx(o)}function s(){var a=Date.now();if(n){if(a-i<Ax)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=a}return s},Nx=20,_x=["top","right","bottom","left","width","height","size","weight"],bx=typeof MutationObserver<"u",At=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Lx(this.refresh.bind(this),Nx)};At.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()};At.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()};At.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()};At.prototype.updateObservers_=function(){var e=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return e.forEach(function(t){return t.broadcastActive()}),e.length>0};At.prototype.connect_=function(){!ec||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),bx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)};At.prototype.disconnect_=function(){!ec||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)};At.prototype.onTransitionEnd_=function(e){var t=e.propertyName;t===void 0&&(t="");var n=_x.some(function(r){return!!~t.indexOf(r)});n&&this.refresh()};At.getInstance=function(){return this.instance_||(this.instance_=new At),this.instance_};At.instance_=null;var P1=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n+=1){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},kr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Go},k1=Vl(0,0,0,0);function Ko(e){return parseFloat(e)||0}function Xd(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Ko(o)},0)}function Ix(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r+=1){var o=i[r],l=e["padding-"+o];n[o]=Ko(l)}return n}function Dx(e){var t=e.getBBox();return Vl(0,0,t.width,t.height)}function Mx(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return k1;var r=kr(e).getComputedStyle(e),i=Ix(r),o=i.left+i.right,l=i.top+i.bottom,s=Ko(r.width),a=Ko(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Xd(r,"left","right")+o),Math.round(a+l)!==n&&(a-=Xd(r,"top","bottom")+l)),!$x(e)){var u=Math.round(s+o)-t,d=Math.round(a+l)-n;Math.abs(u)!==1&&(s-=u),Math.abs(d)!==1&&(a-=d)}return Vl(i.left,i.top,s,a)}var zx=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof kr(e).SVGGraphicsElement}:function(e){return e instanceof kr(e).SVGElement&&typeof e.getBBox=="function"}}();function $x(e){return e===kr(e).document.documentElement}function Fx(e){return ec?zx(e)?Dx(e):Mx(e):k1}function Bx(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return P1(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Vl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var tc=function(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Vl(0,0,0,0),this.target=e};tc.prototype.isActive=function(){var e=Fx(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight};tc.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e};var Ux=function(e,t){var n=Bx(t);P1(this,{target:e,contentRect:n})},On=function(e,t,n){if(this.activeObservations_=[],this.observations_=new E1,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n};On.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof kr(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new tc(e)),this.controller_.addObserver(this),this.controller_.refresh())}};On.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof kr(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}};On.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)};On.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})};On.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(n){return new Ux(n.target,n.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}};On.prototype.clearActive=function(){this.activeObservations_.splice(0)};On.prototype.hasActive=function(){return this.activeObservations_.length>0};var O1=typeof WeakMap<"u"?new WeakMap:new E1,nc=function(e){if(!(this instanceof nc))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=At.getInstance(),n=new On(e,t,this);O1.set(this,n)};["observe","unobserve","disconnect"].forEach(function(e){nc.prototype[e]=function(){return(t=O1.get(this))[e].apply(t,arguments);var t}});var Hx=function(){return typeof Go.ResizeObserver<"u"?Go.ResizeObserver:nc}(),Vx=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Wx=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Zd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qx=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Gx=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Kx=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},ri=function(e){Qx(t,e);function t(){return Vx(this,t),Kx(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Wx(t,[{key:"render",value:function(){var r=this.props,i=r.children,o=r.when,l=r.hiddenMode,s=r.className,a=W.Children.only(i),u=a.props,d=u.style,f=Gx(u,["style"]),p=Zd({},f),v=l&&l!=="withNull";v&&(l==="withCss"?p.className=p.className+" "+s:p.style=Zd({},d,l==="withDisplay"&&{display:"none"},l==="withVisibility"&&{visibility:"hidden"}));var g=W.cloneElement(a,p),x=v?g:null;return o?a:x}}]),t}(C.Component);ri.defaultProps={hiddenMode:"withNull",className:"r-o_hidden"};ri.propTypes={children:L.element.isRequired,when:L.bool.isRequired,hiddenMode:L.oneOf(["withNull","withDisplay","withVisibility","withCss"]),className:L.string};function Wl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ql(e,t,n){return t&&qd(e.prototype,t),n&&qd(e,n),e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yo(){return Yo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}function Jd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jd(Object(n),!0).forEach(function(r){Y(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gl(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$a(e,t)}function Xo(e){return Xo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Xo(e)}function $a(e,t){return $a=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$a(e,t)}function Yx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Xx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function j1(e,t){if(e==null)return{};var n=Xx(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function X(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zx(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:X(e)}function Kl(e){var t=Yx();return function(){var r=Xo(e),i;if(t){var o=Xo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Zx(this,i)}}function jn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function qx(e){return Jx(e)||ew(e)||R1(e)||tw()}function Jx(e){if(Array.isArray(e))return Fa(e)}function ew(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function R1(e,t){if(e){if(typeof e=="string")return Fa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fa(e,t)}}function Fa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nw(e,t){var n;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=R1(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(a){throw a},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,l=!1,s;return{s:function(){n=e[Symbol.iterator]()},n:function(){var a=n.next();return o=a.done,a},e:function(a){l=!0,s=a},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(l)throw s}}}}var on=function(){},T1=function(t){return qx(Array(t).keys())},kt=function(){for(var t="rec",n=" ",r="".concat(t),i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];var s=o.reduce(function(a,u){return u&&(a+="".concat(n).concat(t,"-").concat(u)),a},"");return r+=s,r},rw=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,l){return l(o)},i)}};function A1(){var e=jn([`
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 1.6em;
  background-color: rgba(103, 58, 183, 0.1);
  color: `,`;
  box-shadow: 0 0 2px 0px #333;
  border-radius: 50%;
  border: none;
  padding: 0;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover:enabled,
  &:focus:enabled {
    color: #fff;
    background-color: rgba(103, 58, 183, 1);
    box-shadow: 0 0 2px 0 #333;
  }
  &:disabled {
    cursor: not-allowed;
  }
`]);return A1=function(){return e},e}var iw=U.button.attrs(function(e){var t=e.type,n=t===void 0?"button":t;return{type:n}})(A1(),function(e){return e.disabled?"#999":"#333"}),nt={PREV:"PREV",NEXT:"NEXT",START:"flex-start",CENTER:"center",END:"flex-end"};function L1(){var e=jn([`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  user-select: none;
  justify-content: `,`;
`]);return L1=function(){return e},e}var rc=U.div.attrs(function(e){var t=e.style;return{style:t,className:kt("item-wrapper")}})(L1(),function(e){var t=e.itemPosition;return t});rc.defaultProps={style:{},itemPosition:nt.CENTER};rc.propTypes={children:L.element.isRequired,style:L.object,itemPosition:L.oneOf([nt.START,nt.CENTER,nt.END])};function N1(){var e=jn([`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 10px;
`]);return N1=function(){return e},e}var ow=U.div(N1());function _1(){var e=jn([`
  position: absolute;
  display: flex;
  flex-direction: `,`;
  `,`;
  `,`;
`]);return _1=function(){return e},e}var lw=function(t){var n=t.isRTL,r=t.verticalMode,i=t.isSwiping,o=t.swipedSliderPosition,l=t.sliderPosition;return r||n?"auto":"".concat(i?o:l,"px")},sw=function(t){var n=t.isRTL,r=t.verticalMode,i=t.isSwiping,o=t.swipedSliderPosition,l=t.sliderPosition;return!r&&n?"".concat(i?o:l,"px"):"auto"},aw=function(t){var n=t.verticalMode,r=t.isSwiping,i=t.swipedSliderPosition,o=t.sliderPosition;return n?"".concat(r?i:o,"px"):"auto"},uw=function(t){var n=t.isSwiping,r=t.transitionMs,i=t.easing,o=t.tiltEasing,l=n?0:r,s=n?o:i;return"all ".concat(l,"ms ").concat(s)},cw=U.div.attrs(function(e){return{style:{transition:uw(e),left:lw(e),right:sw(e),top:aw(e)}}})(_1(),function(e){var t=e.verticalMode;return t?"column":"row"},function(e){var t=e.verticalMode;return t?"min-height: 100%;":""},function(e){var t=e.verticalMode,n=e.outerSpacing;return t?"":"margin: 0 ".concat(n,"px;")});function b1(){var e=jn([`
  display: flex;
  flex-direction: row;
  width: 100%;
`]);return b1=function(){return e},e}var dw=U.div.attrs(function(e){return{style:{height:e.size.height}}})(b1());function I1(){var e=jn([`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  direction: `,`;
`]);return I1=function(){return e},e}var fw=U.div(I1(),function(e){var t=e.isRTL;return t?"rtl":"ltr"}),ic=function(e){Gl(n,e);var t=Kl(n);function n(){var r;Wl(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Y(X(r),"onClick",function(){var s=r.props,a=s.onClick,u=s.id;a(u)}),r}return Ql(n,[{key:"render",value:function(){return W.createElement(rc,Yo({},this.props,{onClick:this.onClick}))}}]),n}(W.Component);ic.defaultProps={onClick:on};ic.propTypes={id:L.oneOfType([L.string,L.number]),onClick:L.func};var D1=function(t){var n=t.children,r=t.childWidth,i=t.autoTabIndexVisibleItems,o=t.enableSwipe,l=t.enableMouseSwipe,s=t.preventDefaultTouchmoveEvent,a=t.itemsToShow,u=t.itemsToScroll,d=t.currentItem,f=t.itemPosition,p=t.itemPadding,v=t.onSwiped,g=t.onSwiping,x=t.verticalMode,S=t.onItemClick,m="".concat(r,"px"),h="".concat(p.join("px "),"px"),y=d,w=d+a,O=y-u,k=w+u,T=W.Children.map(n,function(E,_){var G=_>=y&&_<w,K=!G&&_>=O&&_<d,H=!G&&_<k&&_>d,ce="carousel-item",de=i?W.cloneElement(E,{tabIndex:G?0:-1}):E;return W.createElement("div",{className:kt(ce,"".concat(ce,"-").concat(_),"".concat(ce,"-").concat(G?"visible":"hidden"),K&&"".concat(ce,"-prev"),H&&"".concat(ce,"-next"))},W.createElement(ic,{id:_,itemPosition:f,style:{width:m,padding:h},key:_,onClick:S},de))}),R=o?W.createElement(Ju,{style:{display:"flex",flexDirection:x?"column":"row"},stopPropagation:!0,preventDefaultTouchmoveEvent:s,trackMouse:l,onSwiped:v,onSwiping:g,className:kt("swipable")},T):T;return R};D1.propTypes={children:L.array.isRequired,itemsToShow:L.number.isRequired,noAutoTabbedItems:L.bool,currentItem:L.number.isRequired,itemPosition:L.string,itemPadding:L.array,childWidth:L.number,verticalMode:L.bool,enableSwipe:L.bool,enableMouseSwipe:L.bool,preventDefaultTouchmoveEvent:L.bool,onSwiped:L.func,onSwiping:L.func,onItemClick:L.func};var pw={left:"❮",right:"❯",up:"❮",down:"❯"},ef=kt("arrow"),hw=function(t){var n={};return(t===tt.up||t===tt.down)&&(n.transform="rotate(90deg)"),n},tt=function(t){var n=t.direction,r=t.onClick,i=t.icons,o=t.style,l=j1(t,["direction","onClick","icons","style"]),s=_n(_n({},pw),i),a=_n(_n({},hw(n)),o);return W.createElement(iw,Yo({tabIndex:0,onClick:r,className:Rx(ef,"".concat(ef,"-").concat(n)),style:a},l),s[n])};tt.left="left";tt.right="right";tt.up="up";tt.down="down";tt.propTypes={direction:L.oneOf(["left","right","up","down"]).isRequired,icons:L.object,style:L.object,onClick:L.func};var M1="NEXT_ITEM",z1="PREV_ITEM",mw=function(t,n){var r=n.limit,i=n.itemsToScroll,o=n.type;switch(o){case M1:{var l=t+i,s=r>=l?l:r;return s}case z1:{var a=t-i,u=a>=r?a:r;return u}default:return t}},gw=function(t,n){return{type:M1,limit:t,itemsToScroll:n}},vw=function(t,n){return{type:z1,limit:t,itemsToScroll:n}};function $1(){var e=jn([`
  box-sizing: border-box;
  padding: 0;
  transition: all 250ms ease;
  border: none;
  margin: 5px;
  background-color: `,`;
  font-size: 1.3em;
  content: "";
  height: 10px;
  width: 10px;
  box-shadow: `,`;
  border-radius: 50%;
  outline: none;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: `,`;
  }
`]);return $1=function(){return e},e}var yw="0 0 1px 2px rgba(0, 0, 0, 0.5)",tf="0 0 1px 3px rgba(103,58,183,1)",xw="0 0 1px 3px rgba(103,58,183,.5)",ww=U.button.attrs(function(e){var t=e.type,n=t===void 0?"button":t;return{type:n}})($1(),function(e){var t=e.active;return t?"rgba(103,58,183,.5)":"transparent"},function(e){var t=e.active;return t?tf:yw},function(e){var t=e.active;return t?tf:xw}),F1=function(e){Gl(n,e);var t=Kl(n);function n(){var r;Wl(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Y(X(r),"onClick",function(){var s=r.props,a=s.onClick,u=s.id;a(u)}),r}return Ql(n,[{key:"render",value:function(){var i=this.props.active;return W.createElement(ww,{tabIndex:i?-1:0,onClick:this.onClick,active:i,className:"".concat(kt("dot")," ").concat(i?kt("dot_active"):"")})}}]),n}(W.Component);F1.propTypes={id:L.oneOfType([L.string,L.number]),active:L.bool,onClick:L.func};function B1(){var e=jn([`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`]);return B1=function(){return e},e}var Sw=U.div(B1()),oc=function(e){Gl(n,e);var t=Kl(n);function n(){return Wl(this,n),t.apply(this,arguments)}return Ql(n,[{key:"render",value:function(){var i=this.props,o=i.numOfPages,l=i.activePage,s=i.onClick,a=T1(o);return W.createElement(Sw,{className:kt("pagination")},a.map(function(u,d){return W.createElement(F1,{key:d,id:d,active:d===l,onClick:s})}))}}]),n}(W.Component);oc.defaultProps={onClick:on};oc.propTypes={numOfPages:L.number.isRequired,activePage:L.number.isRequired,onClick:L.func};var lc=function(e){Gl(n,e);var t=Kl(n);function n(){var r;Wl(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Y(X(r),"isComponentMounted",!1),Y(X(r),"state",{rootHeight:0,childHeight:0,sliderPosition:0,swipedSliderPosition:0,isSwiping:!1,transitioning:!1,transitionMs:r.props.transitionMs,activeIndex:r.props.initialActiveIndex||r.props.initialFirstItem,pages:[],activePage:0,sliderContainerWidth:0}),Y(X(r),"setRef",function(s){return function(a){return r[s]=a}}),Y(X(r),"initResizeObserver",function(){r.ro=new Hx(function(s,a){var u=nw(s),d;try{var f=function(){var v=d.value;v.target===r.sliderContainer&&window.requestAnimationFrame(function(){r.onContainerResize(v)}),v.target===r.slider&&window.requestAnimationFrame(function(){r.onSliderResize(v)})};for(u.s();!(d=u.n()).done;)f()}catch(p){u.e(p)}finally{u.f()}}),r.ro.observe(r.sliderContainer),r.ro.observe(r.slider)}),Y(X(r),"unSubscribeObserver",function(){return r.ro.disconnect()}),Y(X(r),"setAutoPlay",function(){var s=r.getDerivedPropsFromBreakPoint(),a=s.autoPlaySpeed;r.autoPlayIntervalId=setInterval(function(){if(r.isComponentMounted){var u=r.state.transitioning;u||r.slideNext()}},a)}),Y(X(r),"removeAutoPlay",function(){r.autoPlayIntervalId&&(clearInterval(r.autoPlayIntervalId),r.autoPlayIntervalId=null)}),Y(X(r),"setPages",function(){var s=r.getNumOfPages(),a=T1(s);r.setState({pages:a})}),Y(X(r),"onSliderTransitionEnd",function(s){r.slider.addEventListener("transitionend",s)}),Y(X(r),"removeSliderTransitionHook",function(s){r.slider.removeEventListener("transitionend",s)}),Y(X(r),"getDerivedPropsFromBreakPoint",function(){var s=r.props,a=s.breakPoints,u=j1(s,["breakPoints"]),d=r.state.sliderContainerWidth,f;return a&&a.length>0&&(f=a.slice().reverse().find(function(p){return p.width<=d}),f||(f=a[0])),_n(_n({},u),f)}),Y(X(r),"updateSliderPosition",function(){r.setState(function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.children,d=a.verticalMode,f=a.itemsToShow,p=a.transitionMs,v=s.childHeight,g=s.activeIndex,x=r.calculateChildWidth(),S=C.Children.toArray(u).length,m=S-f,h=g*-1,y=f-(S-g);y>0&&m>0&&(h=y+g*-1);var w=(d?v:x)*h,O=y>0?g-y:g;return window.requestAnimationFrame(function(){r.isComponentMounted&&r.setState({transitionMs:p})}),{sliderPosition:w,activeIndex:O<0?0:O}})}),Y(X(r),"onSliderResize",function(s){if(r.isComponentMounted){var a=r.getDerivedPropsFromBreakPoint(),u=a.verticalMode,d=a.children,f=a.itemsToShow,p=s.contentRect.height,v={},g=C.Children.toArray(d).length;if(u){var x=p/g;v.rootHeight=x*Math.min(g,f),v.childHeight=x}else v.rootHeight=p;r.setState(v)}}),Y(X(r),"calculateChildWidth",function(){var s=r.state.sliderContainerWidth,a=r.getDerivedPropsFromBreakPoint(),u=a.verticalMode,d=a.itemsToShow,f=a.showEmptySlots,p=a.children,v=C.Children.toArray(p).length||1,g=0;return u?g=s:g=s/(f?d:Math.min(v,d)),g}),Y(X(r),"onContainerResize",function(s){var a=s.contentRect.width,u=r.getDerivedPropsFromBreakPoint(),d=u.outerSpacing,f=u.verticalMode,p=a-(f?0:d*2);!r.isComponentMounted||r.state.sliderContainerWidth===a||r.setState({sliderContainerWidth:p,transitionMs:0},function(){var v=r.getDerivedPropsFromBreakPoint(),g=v.onResize,x=v.itemsToShow,S=v.children,m=C.Children.toArray(S).length||1;r.setState(function(h){var y=h.activeIndex,w=Math.min(m,x),O=m-w;return y>O&&(y=O),{activeIndex:y}},function(){r.updateSliderPosition();var h=r.getDerivedPropsFromBreakPoint();g(h)})})}),Y(X(r),"tiltMovement",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:20,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:150;r.setState(function(d){return{isSwiping:!0,swipedSliderPosition:s-a}}),setTimeout(function(){r.setState({isSwiping:!1,swipedSliderPosition:0})},u)}),Y(X(r),"convertChildToCbObj",function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.children,d=Math.round(s),f=C.Children.toArray(u)[d];return{item:f.props,index:d}}),Y(X(r),"getNextItemIndex",function(s,a){var u=r.getDerivedPropsFromBreakPoint(),d=u.children,f=u.itemsToShow,p=u.itemsToScroll,v=C.Children.toArray(d).length||1,g=f>v,x=a?0:v-f;g&&(x=0);var S=a?vw(0,p):gw(x,p),m=mw(s,S);return m}),Y(X(r),"getNextItemObj",function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.children,d=r.state.activeIndex,f=r.getNextItemIndex(d,s),p=Math.round(f),v=C.Children.toArray(u)[p],g={item:v.props,index:p};return g}),Y(X(r),"resetSwipe",function(){r.setState({swipedSliderPosition:0,transitioning:!1,isSwiping:!1})}),Y(X(r),"onSwiping",function(s){var a=s.deltaX,u=s.absX,d=s.deltaY,f=s.absY,p=s.dir;r.setState(function(v){var g=v.childHeight,x=v.activeIndex,S=v.sliderPosition,m=r.getDerivedPropsFromBreakPoint(),h=m.itemsToShow,y=m.verticalMode,w=m.children,O=m.isRTL,k=r.calculateChildWidth(),T=C.Children.toArray(w).length||1,R=!y&&p==="Left"&&!O||!y&&p==="Right"&&O||y&&p==="Up",E=!y&&p==="Right"&&!O||!y&&p==="Left"&&O||y&&p==="Down",_=p==="Left"||p==="Right",G=p==="Up"||p==="Down",K=!y,H=0,ce=k/2,de=g/2;if(y){if(G){var ze=T*g;R?H=ze-g*x-h*g+de:E&&(H=g*x+de)}}else if(_){var Se=T*k;R?H=Se-k*x-h*k+ce:E&&(H=k*x+ce)}var N=K&&G||K&&_&&u>H,$=y&&_||y&&G&&f>H;if(!(N||$)){var F;return _?O?F=S+a:F=S-a:F=S-d,{swipedSliderPosition:F,isSwiping:!0,transitioning:!0}}})}),Y(X(r),"onSwiped",function(s){var a=s.absX,u=s.absY,d=s.dir,f=r.state,p=f.childHeight,v=f.activeIndex,g=r.getDerivedPropsFromBreakPoint(),x=g.verticalMode,S=g.isRTL,m=g.itemsToScroll,h=r.calculateChildWidth(),y=r.resetSwipe,w=h/5,O=p/5,k=d==="Left",T=d==="Right",R=d==="Up",E=d==="Down",_=x&&(R||E)&&u>O,G=!x&&(T||k)&&a>w,K=!1;if((_||G)&&(K=!0),K)if(x){var H=Math.ceil((u-O)/p),ce=Math.max(m,H),de=v-ce,ze=v+ce;E&&(y=function(){return r.goTo(de)}),R&&(y=function(){return r.goTo(ze)})}else{var Se=Math.ceil((a-w)/h),N=Math.max(m,Se),$=v-N,F=v+N;S?(k&&(y=function(){return r.goTo($)}),T&&(y=function(){return r.goTo(F)})):(k&&(y=function(){return r.goTo(F)}),T&&(y=function(){return r.goTo($)}))}r.setState({isSwiping:!1,transitioning:!1}),y({skipTilt:!0})}),Y(X(r),"onNextStart",function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.onNextStart,d=r.state.activeIndex,f=r.getNextItemObj(),p=r.convertChildToCbObj(d);u(p,f),r.slideNext(s)}),Y(X(r),"onPrevStart",function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.onPrevStart,d=r.state.activeIndex,f=r.getNextItemObj(!0),p=r.convertChildToCbObj(d);u(p,f),r.slidePrev(s)}),Y(X(r),"slideNext",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=s.skipTilt,u=r.getDerivedPropsFromBreakPoint(),d=u.enableTilt,f=r.state,p=f.activeIndex,v=f.sliderPosition,g=r.getNextItemIndex(p,!1);p!==g?r.goTo(g):d&&!a&&r.tiltMovement(v,20,150)}),Y(X(r),"slidePrev",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=s.skipTilt,u=r.state.activeIndex,d=r.getDerivedPropsFromBreakPoint(),f=d.enableTilt,p=r.getNextItemIndex(u,!0);u!==p?r.goTo(p):f&&!a&&r.tiltMovement(0,-20,150)}),Y(X(r),"onNextEnd",function(){var s=r.getDerivedPropsFromBreakPoint(),a=s.onNextEnd,u=s.onChange,d=r.state,f=d.activeIndex,p=d.activePage,v=r.convertChildToCbObj(f);r.removeSliderTransitionHook(r.onNextEnd),r.setState({transitioning:!1}),u&&u(v,p),a(v,p)}),Y(X(r),"onPrevEnd",function(){var s=r.getDerivedPropsFromBreakPoint(),a=s.onPrevEnd,u=s.onChange,d=r.state,f=d.activeIndex,p=d.activePage,v=r.convertChildToCbObj(f);r.removeSliderTransitionHook(r.onPrevEnd),r.setState({transitioning:!1}),u&&u(v,p),a(v,p)}),Y(X(r),"generatePositionUpdater",function(s,a,u,d){return function(f){var p=f.sliderPosition,v=f.childHeight,g=f.activeIndex,x=r.calculateChildWidth(),S=0,m=u?v:x;return s===nt.NEXT?S=p-m*(a-g):S=p+m*(g-a),_n({sliderPosition:S,activeIndex:a,swipedSliderPosition:0,isSwiping:!1},d)}}),Y(X(r),"goTo",function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.children,d=a.verticalMode,f=a.itemsToShow,p=r.state.activeIndex,v=C.Children.toArray(u).length,g=Math.max(0,s),x=p>g,S=r.getNextItemIndex(p,x),m=S===p,h=g+f>=v;if(!m){h&&(g=Math.max(0,v-f));var y=nt.NEXT,w=r.onNextEnd;x&&(y=nt.PREV,w=r.onPrevEnd);var O=r.generatePositionUpdater(y,g,d,{transitioning:!0});r.setState(O,function(){rw(r.updateActivePage(),r.onSliderTransitionEnd(w))})}}),Y(X(r),"getNumOfPages",function(){var s=r.getDerivedPropsFromBreakPoint(),a=s.children,u=s.itemsToShow,d=C.Children.toArray(a).length,f=Math.max(u,1),p=Math.ceil(d/f);return p||1}),Y(X(r),"updateActivePage",function(){r.setState(function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.itemsToShow,d=a.children,f=s.activeIndex,p=s.activePage,v=r.getNumOfPages(),g=C.Children.toArray(d).length,x=Math.min(g,u),S=Math.max(x,1),m=Math.ceil(f/S),h=Math.min(v-1,m);if(p!==h)return{activePage:h}})}),Y(X(r),"onIndicatorClick",function(s){var a=r.getDerivedPropsFromBreakPoint(),u=a.itemsToShow,d=s*u;r.setState({activePage:s}),r.goTo(d)}),r}return Ql(n,[{key:"componentDidMount",value:function(){this.isComponentMounted=!0,this.initResizeObserver(),this.updateActivePage(),this.setPages()}},{key:"componentDidUpdate",value:function(i,o){var l=this.props,s=l.enableAutoPlay,a=l.children,u=l.itemsToShow,d=l.itemsToScroll,f=l.breakPoints,p=this.state,v=p.activeIndex,g=p.sliderContainerWidth,x=this.getNextItemIndex(v,!1),S=C.Children.toArray(a).length,m=C.Children.toArray(i.children).length;if((m!==S||i.itemsToShow!==u||i.itemsToScroll!==d||i.breakPoints!==f||g!==o.sliderContainerWidth)&&(this.onContainerResize({contentRect:{width:g}}),this.setPages(),this.updateActivePage()),v===x?this.removeAutoPlay():s&&!this.autoPlayIntervalId?this.setAutoPlay():!s&&this.autoPlayIntervalId&&this.removeAutoPlay(),m!==S){var h=this.getDerivedPropsFromBreakPoint(),y=h.itemsToShow,w=S-1,O=v+y>w;O&&this.goTo(Math.max(0,S-y))}}},{key:"componentWillUnmount",value:function(){this.isComponentMounted=!1,this.removeAutoPlay(),this.unSubscribeObserver()}},{key:"render",value:function(){var i=this.state,o=i.activePage,l=i.isSwiping,s=i.sliderPosition,a=i.swipedSliderPosition,u=i.rootHeight,d=i.pages,f=i.activeIndex,p=i.transitionMs,v=this.getDerivedPropsFromBreakPoint(),g=v.className,x=v.style,S=v.itemsToShow,m=v.itemsToScroll,h=v.verticalMode,y=v.isRTL,w=v.easing,O=v.tiltEasing,k=v.children,T=v.focusOnSelect,R=v.autoTabIndexVisibleItems,E=v.itemPosition,_=v.itemPadding,G=v.outerSpacing,K=v.enableSwipe,H=v.enableMouseSwipe,ce=v.pagination,de=v.showArrows,ze=v.disableArrowsOnEnd,Se=v.preventDefaultTouchmoveEvent,N=v.renderArrow,$=v.renderPagination,F=this.calculateChildWidth(),q=this.getNumOfPages(),b=f!==this.getNextItemIndex(f,!0),D=f!==this.getNextItemIndex(f,!1),M=!b&&ze,B=!D&&ze;return W.createElement(fw,{isRTL:y,className:"".concat(kt("carousel-wrapper")," ").concat(g),style:x},W.createElement(dw,{className:kt("carousel"),size:{height:u}},W.createElement(ri,{when:de},N?N({type:nt.PREV,onClick:this.onPrevStart,isEdge:!b}):W.createElement(tt,{onClick:this.onPrevStart,direction:h?tt.up:tt.left,disabled:M})),W.createElement(ow,{className:kt("slider-container"),ref:this.setRef("sliderContainer")},W.createElement(cw,{verticalMode:h,isRTL:y,easing:w,sliderPosition:s,swipedSliderPosition:a,isSwiping:l,transitionMs:p,tiltEasing:O,className:kt("slider"),ref:this.setRef("slider"),outerSpacing:G},W.createElement(D1,{verticalMode:h,children:C.Children.toArray(k),childWidth:F,currentItem:f,autoTabIndexVisibleItems:R,itemsToShow:S,itemsToScroll:m,itemPosition:E,itemPadding:_,enableSwipe:K,enableMouseSwipe:H,preventDefaultTouchmoveEvent:Se,onSwiped:this.onSwiped,onSwiping:this.onSwiping,onItemClick:T?this.goTo:void 0}))),W.createElement(ri,{when:de},N?N({type:nt.NEXT,onClick:this.onNextStart,isEdge:!D}):W.createElement(tt,{onClick:this.onNextStart,direction:h?tt.down:tt.right,disabled:B}))),W.createElement(ri,{when:ce},$?$({pages:d,activePage:o,onClick:this.onIndicatorClick}):W.createElement(oc,{numOfPages:q,activePage:o,onClick:this.onIndicatorClick})))}}]),n}(W.Component);lc.defaultProps={className:"",style:{},verticalMode:!1,isRTL:!1,initialFirstItem:0,initialActiveIndex:0,showArrows:!0,showEmptySlots:!1,disableArrowsOnEnd:!0,pagination:!0,easing:"ease",tiltEasing:"ease",transitionMs:500,enableTilt:!0,enableSwipe:!0,enableMouseSwipe:!0,preventDefaultTouchmoveEvent:!1,focusOnSelect:!1,autoTabIndexVisibleItems:!0,itemsToShow:1,itemsToScroll:1,itemPosition:nt.CENTER,itemPadding:[0,0,0,0],outerSpacing:0,enableAutoPlay:!1,autoPlaySpeed:2e3,onChange:on,onNextEnd:on,onPrevEnd:on,onNextStart:on,onPrevStart:on,onResize:on};lc.propTypes={children:L.node.isRequired,className:L.string,style:L.object,verticalMode:L.bool,isRTL:L.bool,pagination:L.bool,transitionMs:L.number,easing:L.string,tiltEasing:L.string,enableTilt:L.bool,itemsToShow:L.number,itemsToScroll:L.number,breakPoints:L.arrayOf(L.shape({width:L.number.isRequired,itemsToShow:L.number,itemsToScroll:L.number})),initialActiveIndex:L.number,initialFirstItem:L.number,showArrows:L.bool,showEmptySlots:L.bool,disableArrowsOnEnd:L.bool,focusOnSelect:L.bool,autoTabIndexVisibleItems:L.bool,renderArrow:L.func,renderPagination:L.func,itemPosition:L.oneOf([nt.START,nt.CENTER,nt.END]),itemPadding:L.array,outerSpacing:L.number,enableSwipe:L.bool,enableMouseSwipe:L.bool,preventDefaultTouchmoveEvent:L.bool,enableAutoPlay:L.bool,autoPlaySpeed:L.number,onChange:L.func,onNextStart:L.func,onPrevStart:L.func,onNextEnd:L.func,onPrevEnd:L.func,onResize:L.func};function Ls({title:e,children:t}){const n=[{width:1,itemsToShow:1},{width:550,itemsToShow:2},{width:910,itemsToShow:3},{width:1140,itemsToShow:4}];return c.jsxs(ux,{children:[c.jsx("h1",{children:e}),c.jsx(lc,{breakPoints:n,pagination:!1,children:t})]})}const Cw=U.div`
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
`,Ew=U.div`
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


`;function nf(){const{user:e}=qt(),[t,n]=C.useState(()=>{const E=localStorage.getItem("@foodexplorer:favorites");return E?JSON.parse(E):[]}),[r,i]=C.useState([]),[o,l]=C.useState([]),[s,a]=C.useState([]),[u,d]=C.useState([]),[f,p]=C.useState([]),[v,g]=C.useState([]),[x,S]=C.useState([]),[m,h]=C.useState(!1),[y,w]=C.useState(0),[O,k]=C.useState(()=>{const E=localStorage.getItem("@foodexplorer:dishes");return E?JSON.parse(E):[]});async function T(){if(!t)return alert("Não há pratos favoritos");const E=r.filter(H=>t.includes(H.id)),_=E.filter(H=>H.category=="Prato Principal");a(_);const G=E.filter(H=>H.category=="Sobremesa");p(G);const K=E.filter(H=>H.category=="Bebida");S(K),h(!m)}function R(){let E=0;O.forEach(_=>{E+=Number(_.quantity)}),w(E)}return C.useEffect(()=>{async function E(){const _=await ue.get("/dishes?name");i(_.data)}E()},[]),C.useEffect(()=>{async function E(){const _=await ue.get("/favorites");_.data.favoriteList?localStorage.setItem("@foodexplorer:favorites",_.data.favoriteList):localStorage.setItem("@foodexplorer:favorites",JSON.stringify([]))}E()},[]),C.useEffect(()=>{const E=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));E&&(k(E),R())},[]),C.useEffect(()=>{localStorage.setItem("@foodexplorer:dishes",JSON.stringify(O)),R()},[O]),C.useEffect(()=>{function E(){const _=r.filter(H=>H.category=="Prato Principal");l(_);const G=r.filter(H=>H.category=="Sobremesa");d(G);const K=r.filter(H=>H.category=="Bebida");g(K)}E()},[r]),C.useEffect(()=>{localStorage.setItem("@foodexplorer:favorites",JSON.stringify(t))},[t]),c.jsxs(Cw,{children:[e.admin?c.jsx(Hl,{setDishes:i}):c.jsx(Ni,{handleShowFavorites:T,allQuantity:y,setDishes:i}),c.jsxs(Ew,{children:[c.jsxs("div",{className:"banner",children:[c.jsx("img",{src:tx,alt:"image fruits and cookie"}),c.jsxs("div",{className:"text-banner",children:[c.jsx("h1",{children:"Sabores Inigualáveis"}),c.jsx("p",{children:"Sinta o cuidado do preparo com ingredientes selecionados"})]})]}),o.length>0?c.jsx(Ls,{title:"Pratos principais",children:e.admin?o.map(E=>c.jsx(As,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k},E.id)):m?s.map(E=>c.jsx(Yn,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k,setFavoriteP:n,favoriteP:t},E.id)):o.map(E=>c.jsx(Yn,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k,setFavoriteP:n,favoriteP:t},E.id))}):"",u.length>0?c.jsx(Ls,{title:"Sobremesas",children:e.admin?u.map(E=>c.jsx(As,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k},E.id)):m?f.map(E=>c.jsx(Yn,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k,setFavoriteP:n,favoriteP:t},E.id)):u.map(E=>c.jsx(Yn,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k,setFavoriteP:n,favoriteP:t},E.id))}):"",v.length>0?c.jsx(Ls,{title:"Bebidas",children:e.admin?v.map(E=>c.jsx(As,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k},E.id)):m?x.map(E=>c.jsx(Yn,{id:E.id,className:"card",title:E.title,image:E.image,description:E.description,price:E.price,setAllOrders:k,setFavoriteP:n,favoriteP:t},E.id)):v.map(E=>c.jsx(Yn,{id:E.id,className:"card",title:E.name,image:E.image,description:E.description,price:E.price,setAllOrders:k,setFavoriteP:n,favoriteP:t},E.id))}):""]}),c.jsx(Lr,{})]})}const Pw=U.div`

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

`;function kw(){const e=Wh(),{user:t}=qt(),[n,r]=C.useState(""),[i,o]=C.useState(""),[l,s]=C.useState(""),[a,u]=C.useState(null),d=["Prato Principal","Sobremesa","Bebida"],[f,p]=C.useState(d[0]),[v,g]=C.useState([]),[x,S]=C.useState(""),m=Lt();function h(){g(R=>[...R,x]),S("")}function y(R){g(E=>E.filter(_=>_!==R))}function w(R){u(R.target.files[0])}async function O(){const R=new FormData;if(x.length>0)return alert("Você deixou um ingrediente pendente no campo para adicionar.");await ue.put(`/dishes/${e.id}`,{name:n,ingredients:v,price:l,description:i,category:f}),R.append("image",a);const E={headers:{"Content-Type":"multipart/form-data"}};await ue.patch(`/dishes/image/${e.id}`,R,E),alert("Prato editado com sucesso!"),m("/")}function k(){m("/")}function T(){ue.get(`/dishes/${e.id}`).then(R=>{o(R.data.description),r(R.data.name),s(R.data.price),p(R.data.category);const E=R.data.ingredients.map(_=>_.name);g(E)})}return C.useEffect(()=>{T()},[]),c.jsxs(Pw,{children:[t.admin?c.jsx(Hl,{}):c.jsx(Ni,{}),c.jsxs("main",{children:[c.jsx($t,{onClick:k,Icon:Zu,iconSize:20,title:"voltar"}),c.jsx("h2",{children:"Editar Prato"}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"files",children:[c.jsx("span",{children:"Imagem do Prato"}),c.jsxs("label",{htmlFor:"dish-name",children:[c.jsx(g1,{size:24})," Selecione imagem"]}),c.jsx("input",{type:"file",id:"dish-name",name:"dish-name",onChange:w,accept:"image/png, image/jpeg"})]}),c.jsxs("div",{className:"input-name",children:[c.jsx("p",{children:"Nome"}),c.jsx(Rt,{placeholder:n,onChange:R=>r(R.target.value),required:!0})]}),c.jsxs("div",{className:" select",children:[c.jsx("span",{htmlFor:"food_type",children:"Categoria"}),c.jsx("select",{value:f,onChange:R=>p(R.target.value),children:d.map((R,E)=>c.jsx("option",{value:R,children:R},String(E)))})]})]}),c.jsxs("div",{className:"wrapper",children:[c.jsxs("div",{className:"ingredients",children:[c.jsx("span",{children:"Ingredientes"}),c.jsxs("div",{className:"tags",children:[v.map((R,E)=>c.jsx(Qo,{value:R,onClick:()=>y(R)},String(E))),c.jsx(Qo,{isNew:!0,value:x,onChange:R=>S(R.target.value),onClick:h,placeholder:"Ingredientes"})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Preço"}),c.jsx(Rt,{placeholder:l,onChange:R=>s(R.target.value)})]})]}),c.jsxs("div",{children:[c.jsx("p",{children:"Descrição"}),c.jsx(y1,{placeholder:i,onChange:R=>o(R.target.value)})]}),c.jsx("button",{className:"addDish",onClick:O,children:"Editar Prato"})]}),c.jsx(Lr,{})]})}const Ow=U.div`

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
`,jw=U.div`
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
`;function Rw(){const e=Wh(),[t,n]=C.useState(),[r,i]=C.useState(0),[o,l]=C.useState(()=>{const x=localStorage.getItem("@foodexplorer:dishes");return x?JSON.parse(x):[]}),[s,a]=C.useState(1);function u(){a(x=>x+1)}function d(){if(s<=1)return a(1),alert("Quantidade mínima é 1");a(x=>x-1)}const f=Lt();function p(){const x={quantity:s,id:"01",name:"Salada Ravanello",image:imageDish,description:"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",ingredients:[{id:"01",name:"alface",image:imageIngredients},{id:"02",name:"alface",image:imageIngredients},{id:"03",name:"alface",image:imageIngredients},{id:"04",name:"alface",image:imageIngredients}],price:"R$ 25,97"},S=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));S||l(x);const m=S.filter(h=>h.id!==x.id);l(m),l(h=>[...h,x])}function v(){f("/")}const g=()=>{let x=0;o.forEach(S=>{x+=Number(S.quantity)}),i(x)};return C.useEffect(()=>{const x=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));x&&(l(x),g())},[]),C.useEffect(()=>{async function x(){const S=await ue.get(`/dishes/${e.id}`);n(S.data)}x()},[]),c.jsxs(Ow,{children:[c.jsx(Ni,{allQuantity:r}),c.jsxs(jw,{children:[c.jsx($t,{Icon:Zu,iconSize:30,title:"voltar",onClick:v}),t&&c.jsxs("div",{className:"info-dish",children:[c.jsx("img",{src:`${ue.defaults.baseURL}/dishes/${t.image}`,className:"dish-img",alt:"image dish"}),c.jsxs("div",{className:"infos",children:[c.jsx("h2",{children:t.name}),c.jsx("p",{children:t.description}),c.jsx("li",{children:t.ingredients.map(x=>c.jsxs("ul",{children:[c.jsx("img",{src:`${ue.defaults.baseURL}/${x.image}`,alt:"ingredients",className:"ingredients"}),c.jsx("h5",{children:x.name})]},x.id))}),c.jsxs("div",{className:"valueAndQuantity",children:[c.jsxs("h4",{children:["R$ ",t.price]}),c.jsxs("div",{className:"quantity",children:[c.jsxs("div",{children:[c.jsx("button",{onClick:d,children:"−"}),c.jsx("span",{children:s.toString().padStart(2,0)}),c.jsx("button",{onClick:u,children:"+"})]}),c.jsx(Gn,{icon:c.jsx(qu,{}),title:"incluir",onClick:p})]})]})]})]})]}),c.jsx(Lr,{})]})}const Tw=U.div`
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


`,Aw=U.div`
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

 

`,Lw=U.div`
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
`,Nw=U.div`
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
`;function _w(e){return Nt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"}}]})(e)}const bw=U.div`
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

`;function Iw({paymentMethod:e}){return c.jsxs(bw,{children:[c.jsxs("div",{className:"creditCardNumber",children:[c.jsx("label",{htmlFor:"creditCardNumber",children:"Número do Cartão"}),c.jsx("input",{type:"text",name:"creditCardNumber",id:"creditCardNumber",placeholder:"0000 0000 0000 0000"})]}),c.jsxs("div",{className:"other-informations",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"valid",children:"Validade"}),c.jsx("input",{type:"text",name:"valid",id:"valid",placeholder:"04/25"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"cvc",children:"CVC"}),c.jsx("input",{type:"text",name:"cvc",id:"cvc",placeholder:"04/25"})]})]}),c.jsx(Gn,{icon:c.jsx(qu,{}),title:"Finalizar pagamento",onClick:e})]})}const Dw=U.div`
  img {
    display: flex;
    margin: 0 auto;
    max-width: 300px;
  }
`,Mw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAYAAACJIC3tAAAAAXNSR0IArs4c6QAAD5RJREFUeF7t3dFyK0cOA1D7/z/aW7XJq+aohMA9kpFXXpIgSDR7RrLy/fPz8/O1/8bAGKgw8D2BVXhd0DHwfwYmsA3CGCgyMIEVyV3oMTCBbQbGQJGBCaxI7kKPgQlsMzAGigxMYEVyF3oMUGDf398fzZI+BkzrV3yRq/yKL3/ll/10fuFr21m/PgdrN6hNgOKToPCAUXzhE/+KL3/ll/10fuFr21n/BHb9RZZ0QNUADYDyK778lV/20/mFr21n/RPYBJYMIQcsvAEk2H7Dl/VPYBNYMogcsAns+su+7StG0tz/wrc9IIqvGsS/4stf+WU/nV/42nbWvw22DZYMIQdsG2wb7GrA0g2gAdRwK7/iy1/5ZT+dX/jadtafbjAlaBeo+Bow4Ze/8suu/PIXvtPx2/jET2pP8ccfNKcNTAmQf0xQ+YqT8pfWd5q/tH7hT+0pvxMY/qBbBKcNTAdM+E7Hb+NL+Zd/in8Cm8AuZyweMNwA0gNAAkntcf17Buu+RVSD0wFLB0D40vipv/C17Sn+bbBtsG2wCwYmMBxhMUF7yXHJsDZwyn97Qyl+in8bbBtsG+ydN5hOAJ0gsrdPUOFv51f9sqf4FV/2NL/8lV/2dv/qG+ztCQrfgql+NVgDIvu75xd+1S+7+Fd++rffIgqgCJCdBR4WiOoXftUv+7vnF37VL7v4V376T2DZa3oSHApcAyJ7OiCKL3uaX/7KL3u7f7sihi852g3SgMiuARV+xZc9zS9/5Zdd9Ss//bfBtsE0hIk9HtDDH5PE+CewCSwRkHzjAZ3AsgFVg2Tnig6fgdoDIvyqX/YUv+LLnuaXv/LLLv6Vn/7bYN0Dgg04fEJrAOMBKx9wwi972h/6T2AT2NUQTmDXP7w7gR0+QdmAbbDLJSOBa0PJnvaH/ttg22DbYI8ZkMAnsG0wHeLRBuGAHeZfxdfxb4Ntg22DbYM9ZKB+AoXPSCk+ncCyK7/84yvSNlj2u4hqoBqkBsue5k/92/gUX3bVJ3/1T/Hb/sIvex3/rojXV0Q1KLWnA6j8ii9/2esDGt4gjuOfwCYwDeGVfQLDM/wENoFNYHvJcewlRzJ8z/jqCqcNoRyKL3/ZhU/5U3/hkz3NT/9tsG0wDeGuiI8ZmMDC18TJ8D3jm57wyqH48pedAxby//b4t8G2wSSibbBtsIcM6ATUCZwM3zO+bXyK/wzGCezGAksbmPprwCSw1D/Ff9o/rT/1f/v621fEtycofIY4XX+aPxVI6p/iT/1T/PVflUoLTP1jgiawyxZ8+g0gnp9tsOzb9Bqw9IA47R8P2JsfUHH9E9gEdiXieMAmsO636XcCn2Ygyz+B3fw3ObL25t5/fUBSBv86f3H9uyLuirgr4mMGjgssPSFP++slRUxw+Azy6flP9z/Nz/lJN1gK8LQ/CZpAqq/pT/c/zc/5mcC6V8RP30AcsPJfJKcCSf1Z/wQ2gZ18BksH/LT/BIYOkKBdEXdFvGCA87MNtg22Dfb6HpzAtsGqG4gDtmew7Jscr2v/Hp7pgMw/uwHcYwpeR8H+64r4euq/4dl+SygW2eDDz5DC/+l2/rnKpxOQ1jeBnf3JhbR/bf8JLGR4ApvALl8S7YqYKWwCm8AmsExDl94T2AQ2gU1gDxlovyQpUv8WofcMFrZpG2wbbBssFNGdv+nQ3kDpAVKk/i1Cc4OJYFWpAZB/ml/xU3yKn9pV/93xq/60Pvkrf2oX/xPY9RdZUv5jfw2QGhwDKAdI65N/Gf6X+J/AJrD2DN76LWxa/AQGBkVQ2oDUXyf03fGr/rQ++St/ahf/22DbYOmMRf4SCAf48Lf1iU/f5BABYlcA5J/mV/wUn+KndtV/d/yqP61P/sqf2sX/Ntg2WDpjkb8EwgHeBss+iFQDou5+ffEtUBo/9Vf9GsA0f9s/rU/+bfziP95gTBD+PVKboNMNUn3iV/7t+lJ8bfzCJ37kT/zpM5gAtAtQgbILn/zbdvGr/O36Unxt/MInfuRP/BPY9Y/7i8C2PW5w+RklxSf+JAD5C5/iy1/5d0UsD6AaIHvc4HJ9KT7VLwHIX/gUX/7KP4GVB1ANkD1ucLm+FJ/qlwDkL3yKL3/ln8DKA6gGyB43uFxfik/1SwDyFz7Fl7/yT2DlAVQDZI8bXK4vxaf6JQD5C5/iy1/5J7DyAKoBsscNLteX4lP9EoD8hU/x5a/8xwUmgCpQBCl+ahc+xRd+xW/7C/+728VvWt8EFjKYNqgtEOFT/pCe27uLn7SACSxkMG2QBlzx2/4hPbd3F79pARNYyGDaoLZAhE/5Q3pu7y5+0gImsJDBtEEacMVv+4f03N5d/KYFTGAhg2mD2gIRPuUP6bm9u/hJC5jAQgbTBmnAFb/tH9Jze3fxmxYwgYUMpg1qC0T4lD+k5/bu4ictgAJLE8i/3eA2gX+9PtUvu/qf9k/xhS/Orz9XEYDUnhKg/ClBii/7p9en+mUXP2n/FF/44vwTmCjO7GmDlT0dAMVv28VPWp/iq744/wQmijN72mBlTwdA8dt28ZPWp/iqL84/gYnizJ42WNnTAVD8tl38pPUpvuqL809gojizpw1W9nQAFL9tFz9pfYqv+uL8E5gozuxpg5U9HQDFb9vFT1qf4qu+OP8EJooze9pgZU8HQPHbdvGT1qf4qi/Of3eBqcCUQBEse4qv7S/84i/Fp/yyn84f45vAROG1PR2Atr+qm8DEUNj/CaxMcPjLxqkAVF0aX/7KL3t6ACl+aie+CSyjmARPYBHBKb9R8ieciW8Ce4LFi39CgiewiOCU3yj5E87EN4E9weIE9pCBXRGv/+9Bt/82PU+I8s+SSX4pvra/8EsgKT7ll/10/hjfNpgoDN8i7YoYEfzxAtMJF7H3hLMIfiLE5T9p1yf8yv/p/upfys/x+NpgKlAFpHYNWBq/XZ/wK/+n+6t/KT/H409g3f8/2KcL5O0FEF7hKeAJbAK7GpL2AcEBbQugHX8Cm8AmsMcM6IDhATGBTWAT2ASmg+Jlu54hXg78r6NOQOX/dH/xm/JzPP422DbYNtjBDaYTQPb0BJK/8p+2tzdQWl/Kr+oTvjS/4sue4lf8+lelRKAKlL8KPG1P65N/Wl/Kb4ovzZ/Wn+JX/glMDIV2NVADJv8Q3pfyK36KL80vfLKn+BV/AhNDoV0N1IDJP4Q3gf1cfxs+5lcvOeIE4Qd5GsAUX9tfAlF98k/xK7/ip/jS/MIne4pf8bfBxFBoVwM1YPIP4W2DbYN1X6OnAyp/CWQCO9tf9Uf9lX0bTAyFdjVwApvAohHTAEXBv76+NMBpfOH/6/nFr/gRv3ePL3zHN5gAyq4Gyl92DcBfzy/+xI/4vXt84ZvAwJAGQAOkBsh+9/zCL35U393jC98ENoFdMvDuAmjjn8DEwAQ2gV0woA2s8doGm8AmsAnsMQPpCcMTKPwmiuLLrivO6fqFX/hU393jC9822DbYNtjJDZaeMFJ4am+fkHfHp/pT/Hfvf1pfnT992ffuBIug0/jb+BQ/HcDT/KX45V/nbwJTCzK7GpgOsOJn6L/iLwOn+dv+df4msG4L1cAJrMu/oqs/8pedLznSARCA1C6CTuNv41P8lN/T/KX45V/nbxtMLcjsamA6wIqfod8VMeZvAkspvPaXACawLv+Krv7IX/ZdEcVQaFcDJ7CQ4NBd/QnDf1FgaYJ3928LQPE1APIX/2l8+Su/7KqvnV/4ZJ/AwJAaLII1AIqf+p/Gp/yyp/wofts+gU1glwycHvDT+VMBTmAT2ASWqujCfwKbwCawCazIwAQ2gRXHaxtsApvAJrAiAxPYBFYcL24wvcUpYvuV0HoNLhDvzo/qV31391f/2vYJLPxtcg1gu4Fp/LsLRPwKf8pP6j+BTWDVK2IqkNQ/FUjqP4FNYBNYqqLkczCdIEVsvxI6vWK8Oz+qX/Xd3f9XhmgCe8yABkQN0gDK/7Rd9au+u/uf5ndXxF0Rd0UsqnACm8AmsDsLTFeEIvanQp++4gik8Mm/zb/wnc4vfmSv409/MqANUATJng5I6p/ik3+b/3b9qk/55S97nb8J7Kd6RVKD0wGqD8jNf5tf/Mpe528Cm8CuhlAHQH1AIXAJSPY6/glsApvAJMPX7fFbxPYJ8Hpp/3imJ3DqL/yKL/82/8J3Or/4kb2OfxtsG2wbTDJ83b4Nhs/B2ie44qu19RN4LznUguuXZO0Nlg6QqtOAKX/qL3yyK7/823bx185/On7an/oGazdIBCh/6p8OgPKn8VN/8ZfGv7t/2p8JLLwipgOSNjDNL/8J7PoZnfztipi95BDBsk9gYuisPe3PNtg22PVDevmD3rPycfYJLBSICGxfkZTfI9D9F+36u+jz6Gl/tsFCgaYtTBuY5pf/BLZnsOiKowFvD5jySwBte7v+Nv40ftqfbbDwDy7VwHRA1eA0vvDfPb/wH+dnbxGzK0C7wXcf8NMD3OZf8dmfCWwCuxoiDlD5LaPySwCnD4BdEXdFvJxRDfjpAZ7ADp9wGgANkBoou/LLX/jS+O+eX/iP87Mr4q6IuyJKpo/tPAAnsAlsApvAHjLAE+TN/54pre/10fnH8+75Vd+uiGII9nQA5C94aqDiy1/5FV/+sqf4FD/FL3yKn/qrvr1FDN8ipg2SvxqoAZK/7Ck+xU/xC5/ip/6qbwKbwC5nRAOoAZNdApC/8Cl+6k98e8mRveRIGyR/NVADJH/ZU3yKn+IXPsVP/VXfNtg22DbYBQMS6ARWfouYnoDyVwPTAVD8FJ/ip/iFT/FTf9W3DbYNtg22DfaYgeMnVLghdYLqhFT98pc9xaf4KX7hU/zUX/XVN5gAtO0pgfIXfjVY/sqv+Kl/ik/+d7eLX+GfwMo/GRA3qLwh2/g0gHe3x/y0X9OfJjA9weWv+uIGTWCiuGqP+zeBdX8XMW7QBFYVkILH/ZvAJjAN2ZU93fBJ7t/wncDAsgZABMpfTVZ8+Su/4qf+KT75390ufoV/Lzn2kkMzcmmXgKPgN3CewLbBIgHEA1T+SYjTGov5SZ/BThOQ5heB6Qmt+MKv/H89fsqf/GUX//EVUQDubidB4Qmt+OJnAhND13bxl0V/4i++t8E++y2iBkgDePcDIq1P/rKLn22wD3/JoQGZwMTQtX0CA38kaFfEaALbAhY45Ze/7JyfXRF3RbwaIg2QBlADnsZP88tfduHfFXFXxMsZ0gBpACcwMCiCRPDd7RqgtH7FFz/K/9fjp/zJX3bxzw2mBLOPgTHwmIEJbNMxBooMTGBFchd6DExgm4ExUGRgAiuSu9BjYALbDIyBIgMTWJHchR4DE9hmYAwUGfgf+zDOeNffUMkAAAAASUVORK5CYII=";function zw(){return c.jsx(Dw,{children:c.jsx("img",{src:Mw,alt:""})})}function $w(){return c.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M15.9778 18.5353L15.978 18.5355C16.4223 18.9796 16.9442 19.3203 17.5127 19.545L14.3323 22.7255C13.2989 23.7588 11.6235 23.7588 10.5903 22.7255L10.5903 22.7255L7.49699 19.6323C8.14385 19.4119 8.73705 19.0447 9.23337 18.5486L9.23355 18.5485L12.6122 15.1697L15.9778 18.5353Z",stroke:"white",strokeWidth:"2"}),c.jsx("path",{d:"M17.5126 5.45499C16.9441 5.67967 16.4222 6.02044 15.9779 6.46451L15.9777 6.46471L12.612 9.83069L9.23352 6.45157L9.23329 6.45134C8.73701 5.9553 8.14386 5.58815 7.49705 5.36773L10.5902 2.27458L10.5902 2.27455C11.6234 1.24125 13.2988 1.24116 14.3323 2.27457C14.3323 2.27458 14.3323 2.2746 14.3324 2.27461L17.5126 5.45499ZM12.377 10.0657C12.3773 10.0654 12.3776 10.0651 12.378 10.0648L12.377 10.0657ZM12.8465 10.0652L12.8464 10.0651C12.8464 10.0651 12.8465 10.0652 12.8465 10.0652Z",stroke:"white",strokeWidth:"2"}),c.jsx("mask",{id:"path-3-inside-1_1_140",fill:"white",children:c.jsx("path",{d:"M23.3933 9.92194L20.6304 7.15898C20.5696 7.18334 20.5037 7.19855 20.4341 7.19855H19.1779C18.5284 7.19855 17.8926 7.46198 17.4337 7.92124L13.8341 11.521C13.4972 11.8578 13.0546 12.0264 12.6124 12.0264C12.1697 12.0264 11.7274 11.8578 11.3907 11.5213L7.77747 7.90808C7.31854 7.44872 6.68277 7.1854 6.0333 7.1854H4.48863C4.42274 7.1854 4.36118 7.16987 4.30306 7.14798L1.52911 9.92194C0.105205 11.3458 0.105205 13.6543 1.52911 15.0782L4.30294 17.8521C4.36117 17.8302 4.42274 17.8146 4.48863 17.8146H6.0333C6.68277 17.8146 7.31854 17.5513 7.77747 17.0921L11.3903 13.4792C12.0434 12.8267 13.1817 12.8265 13.8341 13.4795L17.4337 17.0789C17.8926 17.5381 18.5284 17.8016 19.1779 17.8016H20.4341C20.5037 17.8016 20.5696 17.8168 20.6304 17.8412L23.3933 15.0782C24.8171 13.6543 24.8171 11.3458 23.3933 9.92192"})}),c.jsx("path",{d:"M20.6304 7.15898L22.0446 5.74477L21.1116 4.81175L19.8867 5.30239L20.6304 7.15898ZM17.4337 7.92124L18.848 9.33543L18.8484 9.33495L17.4337 7.92124ZM13.8341 11.521L15.2483 12.9352L15.2483 12.9352L13.8341 11.521ZM11.3907 11.5213L9.97646 12.9355L9.97692 12.936L11.3907 11.5213ZM7.77747 7.90808L6.36259 9.32163L6.36325 9.3223L7.77747 7.90808ZM4.30306 7.14798L5.00801 5.27634L3.80092 4.82169L2.88884 5.73377L4.30306 7.14798ZM1.52911 9.92194L2.94333 11.3361L2.94333 11.3361L1.52911 9.92194ZM1.52911 15.0782L2.94333 13.664L2.94333 13.664L1.52911 15.0782ZM4.30294 17.8521L2.88873 19.2663L3.80011 20.1777L5.00659 19.7242L4.30294 17.8521ZM7.77747 17.0921L6.36325 15.6779L6.36275 15.6784L7.77747 17.0921ZM11.3903 13.4792L9.97671 12.0644L9.97612 12.065L11.3903 13.4792ZM13.8341 13.4795L12.4192 14.893L12.4199 14.8937L13.8341 13.4795ZM17.4337 17.0789L18.8484 15.6652L18.8479 15.6646L17.4337 17.0789ZM20.6304 17.8412L19.8861 19.6975L21.1113 20.1887L22.0446 19.2554L20.6304 17.8412ZM23.3933 15.0782L24.8075 16.4924L24.8076 16.4924L23.3933 15.0782ZM24.8075 8.50772L22.0446 5.74477L19.2162 8.57319L21.9791 11.3362L24.8075 8.50772ZM19.8867 5.30239C20.0217 5.2483 20.2085 5.19855 20.4341 5.19855V9.19855C20.7988 9.19855 21.1174 9.11839 21.3741 9.01557L19.8867 5.30239ZM20.4341 5.19855H19.1779V9.19855H20.4341V5.19855ZM19.1779 5.19855C17.9979 5.19855 16.8532 5.67276 16.019 6.50753L18.8484 9.33495C18.9321 9.25121 19.0589 9.19855 19.1779 9.19855V5.19855ZM16.0195 6.50705L12.4199 10.1068L15.2483 12.9352L18.848 9.33543L16.0195 6.50705ZM12.4199 10.1068C12.4742 10.0525 12.5473 10.0264 12.6124 10.0264V14.0264C13.5619 14.0264 14.5203 13.6632 15.2483 12.9352L12.4199 10.1068ZM12.6124 10.0264C12.677 10.0264 12.7502 10.0524 12.8044 10.1066L9.97692 12.936C10.7047 13.6632 11.6625 14.0264 12.6124 14.0264V10.0264ZM12.8049 10.1071L9.19168 6.49387L6.36325 9.3223L9.97646 12.9355L12.8049 10.1071ZM9.19234 6.49453C8.35796 5.65936 7.21306 5.1854 6.0333 5.1854V9.1854C6.15248 9.1854 6.27912 9.23808 6.36259 9.32163L9.19234 6.49453ZM6.0333 5.1854H4.48863V9.1854H6.0333V5.1854ZM4.48863 5.1854C4.74027 5.1854 4.92594 5.24543 5.00801 5.27634L3.5981 9.01962C3.79642 9.09432 4.10521 9.1854 4.48863 9.1854V5.1854ZM2.88884 5.73377L0.114895 8.50773L2.94333 11.3361L5.71727 8.56219L2.88884 5.73377ZM0.114896 8.50773C-2.09006 10.7127 -2.09006 14.2875 0.114896 16.4924L2.94333 13.664C2.30047 13.0211 2.30047 11.979 2.94333 11.3361L0.114896 8.50773ZM0.114895 16.4924L2.88873 19.2663L5.71716 16.4378L2.94333 13.664L0.114895 16.4924ZM5.00659 19.7242C4.92575 19.7546 4.74032 19.8146 4.48863 19.8146V15.8146C4.10516 15.8146 3.7966 15.9058 3.5993 15.9799L5.00659 19.7242ZM4.48863 19.8146H6.0333V15.8146H4.48863V19.8146ZM6.0333 19.8146C7.21304 19.8146 8.35785 19.3407 9.19218 18.5058L6.36275 15.6784C6.27923 15.7619 6.1525 15.8146 6.0333 15.8146V19.8146ZM9.19168 18.5063L12.8046 14.8934L9.97612 12.065L6.36325 15.6779L9.19168 18.5063ZM12.804 14.894C12.7157 14.9822 12.6358 14.9898 12.6124 14.9898C12.5889 14.9898 12.5082 14.9821 12.4192 14.893L15.249 12.066C13.8148 10.6303 11.41 10.6323 9.97671 12.0644L12.804 14.894ZM12.4199 14.8937L16.0195 18.4931L18.8479 15.6646L15.2483 12.0652L12.4199 14.8937ZM16.019 18.4926C16.8532 19.3274 17.9979 19.8016 19.1779 19.8016V15.8016C19.0589 15.8016 18.9321 15.7489 18.8484 15.6652L16.019 18.4926ZM19.1779 19.8016H20.4341V15.8016H19.1779V19.8016ZM20.4341 19.8016C20.2088 19.8016 20.0219 19.7519 19.8861 19.6975L21.3746 15.9848C21.1172 15.8816 20.7985 15.8016 20.4341 15.8016V19.8016ZM22.0446 19.2554L24.8075 16.4924L21.9791 13.664L19.2162 16.4269L22.0446 19.2554ZM24.8076 16.4924C27.0124 14.2874 27.0124 10.7127 24.8076 8.50776L21.9791 11.3361C22.6219 11.979 22.6219 13.0212 21.9791 13.664L24.8076 16.4924Z",fill:"white",mask:"url(#path-3-inside-1_1_140)"})]})}function Fw(){return c.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 25 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.961182 2.64284C0.961182 1.69607 1.72869 0.928558 2.67547 0.928558H23.2469C24.1937 0.928558 24.9612 1.69607 24.9612 2.64284V16.3571C24.9612 17.3039 24.1937 18.0714 23.2469 18.0714H2.67547C1.72869 18.0714 0.961182 17.3039 0.961182 16.3571V2.64284ZM23.2469 2.64284H2.67547V16.3571H23.2469V2.64284Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.3898 13.7857C16.3898 13.3123 16.7735 12.9286 17.2469 12.9286H20.6755C21.1489 12.9286 21.5326 13.3123 21.5326 13.7857C21.5326 14.2591 21.1489 14.6428 20.6755 14.6428H17.2469C16.7735 14.6428 16.3898 14.2591 16.3898 13.7857Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2469 13.7857C11.2469 13.3123 11.6307 12.9286 12.104 12.9286H13.8183C14.2917 12.9286 14.6755 13.3123 14.6755 13.7857C14.6755 14.2591 14.2917 14.6428 13.8183 14.6428H12.104C11.6307 14.6428 11.2469 14.2591 11.2469 13.7857Z",fill:"white"}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.961182 6.16851C0.961182 5.69513 1.34494 5.31137 1.81832 5.31137H24.104C24.5774 5.31137 24.9612 5.69513 24.9612 6.16851C24.9612 6.6419 24.5774 7.02566 24.104 7.02566H1.81832C1.34494 7.02566 0.961182 6.6419 0.961182 6.16851Z",fill:"white"})]})}function Bw(){return c.jsx("svg",{width:"150",height:"150",viewBox:"0 0 129 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64.4612 20C40.1607 20 20.4612 39.6995 20.4612 64C20.4612 88.3005 40.1607 108 64.4612 108C88.7617 108 108.461 88.3005 108.461 64C108.461 39.6995 88.7617 20 64.4612 20ZM12.4612 64C12.4612 35.2812 35.7424 12 64.4612 12C93.18 12 116.461 35.2812 116.461 64C116.461 92.7188 93.18 116 64.4612 116C35.7424 116 12.4612 92.7188 12.4612 64ZM64.4612 32C66.6703 32 68.4612 33.7909 68.4612 36V60H92.4612C94.6703 60 96.4612 61.7909 96.4612 64C96.4612 66.2091 94.6703 68 92.4612 68H64.4612C62.252 68 60.4612 66.2091 60.4612 64V36C60.4612 33.7909 62.252 32 64.4612 32Z",fill:"#646b6f"})})}function Uw({status:e,allOrders:t}){const n=Lt(),[r,i]=C.useState(e);async function o(){if(t.length===0)return alert("O carrinho está vazio.");{const s=localStorage.getItem("@foodexplorer:dishes"),a=JSON.parse(s).map(u=>({name:u.name,quantity:u.quantity}));return await ue.post("/orders",{status:e,description:JSON.stringify(a)}),localStorage.removeItem("@foodexplorer:dishes"),i("aproved"),n("/"),alert("Pedido efetuado")}}const l=s=>{switch(s){case"pending":return c.jsxs("div",{className:"status-order",children:[c.jsx(Bw,{}),c.jsxs("div",{children:[c.jsx("span",{children:"Aguardando pagamento no caixa "}),c.jsx("p",{children:"Escolha uma forma de pagamento"})]})]});case"pix":return c.jsx(zw,{});case"credit":return c.jsx(Iw,{paymentMethod:o});case"aproved":return c.jsxs("div",{className:"status-order",children:[c.jsx(G2,{size:150,color:"#c4c4cc"}),c.jsx("span",{children:"Pagamento aprovado!"})]});case"delivered":return c.jsxs("div",{className:"status-order",children:[c.jsx(_w,{size:150,color:"#c4c4cc"}),c.jsx("span",{children:"Pedido entregue!"})]})}};return c.jsxs(Lw,{children:[c.jsxs("div",{className:"pay",children:[c.jsx($t,{Icon:$w,iconSize:30,title:"PIX",className:r==="pix"?"active":"",onClick:()=>i("pix")}),c.jsx($t,{Icon:Fw,iconSize:30,title:"Crédito",className:r==="credit"?"active":"",onClick:()=>i("credit")})]}),c.jsx(Nw,{children:l(r)})]})}function Hw(){const[e,t]=C.useState(0),[n,r]=C.useState(0),[i,o]=C.useState(()=>{const a=localStorage.getItem("@foodexplorer:dishes");return a?JSON.parse(a):[]});function l(){let a=0;i.forEach(u=>{a+=Number(u.quantity)}),r(a)}function s(a){const u=i.filter(d=>d.id!==a);o(u),localStorage.setItem("@foodexplorer:dishes",JSON.stringify(u))}return C.useEffect(()=>{const a=JSON.parse(localStorage.getItem("@foodexplorer:dishes"));a&&(o(a),l())},[i]),C.useEffect(()=>{let a=0;i.forEach(u=>{a+=Number(u.quantity)*Number(u.price.replace(",","."))}),t(a)},[i]),c.jsxs(Tw,{children:[c.jsx(Ni,{allQuantity:n}),c.jsxs(Aw,{children:[c.jsxs("div",{className:"orders",children:[c.jsx("h1",{children:"Meu pedido"}),c.jsxs("div",{className:"scroll",children:[i&&i.map(a=>c.jsxs("div",{className:"foods",children:[c.jsx("img",{src:`${ue.defaults.baseURL}/dishes/${a.image}`,alt:"food image"}),c.jsxs("div",{children:[c.jsxs("div",{className:"infos",children:[c.jsxs("span",{className:"quantity",children:[a.quantity," x"]}),c.jsx("span",{className:"name",children:a.name}),c.jsxs("span",{className:"value",children:[" R$ ",a.price]})]}),c.jsx($t,{title:"Excluir",onClick:()=>s(a.id)})]})]},a.id)),c.jsx("div",{className:"foods"})]}),c.jsxs("h2",{children:["Total: R$ ",e]})]}),c.jsxs("div",{className:"payment",children:[c.jsx("h1",{children:"Pagamento"}),c.jsx(Uw,{status:"pending",allOrders:i})]})]}),c.jsx(Lr,{})]})}const Vw="/assets/background-404-bb5ac743.png",Ww=U.div`
  width: 100%;
  height: 100vh;

  font-family: 'Poppins', sans-serif;

  background: url(${Vw});
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


`,Qw="/assets/404-119be92d.png";function rf(){const{user:e}=qt(),t=Lt();function n(){t("/")}function r(){t("/payment")}function i(){t("/create")}return c.jsxs(Ww,{children:[c.jsx("div",{className:"image",children:c.jsx("img",{src:Qw,alt:""})}),c.jsxs("div",{className:"text",children:[c.jsx("h1",{children:"Oops!"}),c.jsx("h2",{children:"Não encontramos a página."}),c.jsx("p",{children:"Talvez você possa encontrar o que precisa aqui:"}),c.jsxs("div",{className:"buttons",children:[c.jsx("button",{onClick:n,children:"Home"}),e.admin?c.jsx("button",{onClick:i,children:"Novo Prato"}):c.jsx("button",{onClick:r,children:"Meu pedido"})]})]})]})}const Gw=U.div`
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
`,Kw=U.div`
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
`;function Yw(){const[e,t]=C.useState([]);async function n(){const l=(await ue.get("/ordersAdm")).data.map(s=>{const a=s.update_at.split(" ");return{id:s.id,status:s.status,description:JSON.parse(s.description),date:a[0].replaceAll("-","/").split("/").reverse().join("/").slice(0,5),hour:a[1].slice(0,5)}});t(l)}async function r(i,o){await ue.put(`/ordersAdm/${o}`,{status:i}),n()}return C.useEffect(()=>{n()},[]),c.jsxs(Gw,{children:[c.jsx(Hl,{}),c.jsxs(Kw,{children:[c.jsx("h2",{children:"Pedidos"}),c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Código"}),c.jsx("th",{children:"Detalhamento"}),c.jsx("th",{children:"Data e hora"})]})}),c.jsx("tbody",{children:e.map(i=>c.jsxs("tr",{children:[c.jsx("td",{children:c.jsxs("select",{name:"status",id:"status",value:i.status,onChange:o=>r(o.target.value,i.id),children:[c.jsx("option",{value:"default",children:"Status"}),c.jsx("option",{value:"readying",children:"Preparando"}),c.jsx("option",{value:"pending",children:"Pendente"}),c.jsx("option",{value:"delivered",children:"Entregue"})]})}),c.jsx("td",{children:c.jsx("p",{children:String(i.id).padStart(5,"0")})}),c.jsx("td",{children:c.jsx("p",{children:i.description.map((o,l)=>c.jsxs("span",{children:[o.quantity," x ",i.description.length-1===l?o.name:o.name+", "," "]},l))})}),c.jsx("td",{children:c.jsxs("p",{children:[i.date," às ",i.hour]})})]},String(i.id)))})]})]}),c.jsx(Lr,{})]})}function Xw(){const{user:e}=qt();return(()=>e.admin?c.jsxs(Na,{children:[c.jsx(ut,{path:"/",element:c.jsx(nf,{})}),c.jsx(ut,{path:"/create",element:c.jsx(ex,{})}),c.jsx(ut,{path:"/edit/:id",element:c.jsx(kw,{})}),c.jsx(ut,{path:"/orders",element:c.jsx(Yw,{})}),c.jsx(ut,{path:"*",element:c.jsx(rf,{})})]}):c.jsxs(Na,{children:[c.jsx(ut,{path:"/",element:c.jsx(nf,{})}),c.jsx(ut,{path:"/details/:id",element:c.jsx(Rw,{})}),c.jsx(ut,{path:"/payment",element:c.jsx(Hw,{})}),c.jsx(ut,{path:"*",element:c.jsx(rf,{})})]}))()}function Zw(){const{user:e}=qt();return c.jsx(oy,{children:e?c.jsx(Xw,{}):c.jsx(N2,{})})}const qw={COLORS:{BACKGROUND:"#000A0F",BACKGROUND_BUTTON:"#FFFFFF",BACKGROUND_HEADER:"#00111A",BACKGROUND_INPUT:"#0D1D25",BACKGROUND_FORM:"#001119",GRAY:"#7C7C8A",GRAY_CARD:"#C4C4CC",WHITE:"#E1E1E6",RED:"#92000E",BLUE:"#82F3FF",PINK:"#AB4D55"}};Ns.createRoot(document.getElementById("root")).render(c.jsx(W.StrictMode,{children:c.jsxs(fv,{theme:qw,children:[c.jsx(mv,{}),c.jsx(R2,{children:c.jsx(Zw,{})})]})}));
