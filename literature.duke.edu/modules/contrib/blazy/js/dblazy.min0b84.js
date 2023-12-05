!function(l,o){"use strict";var r,e,u=Object.assign,c=Array.prototype,i=Object.prototype,a=i.toString,n=c.splice,f=c.some,t="undefined"!=typeof Symbol&&Symbol,s="jQuery"in l,d="cash"in l,p="add",h="remove",m="has",v="get",y="set",g="width",b="clientWidth",E="scroll",w="iterator",S="Observer",C="EventListener",N="body",x="html",O=/-([a-z])/g,A=/^--/,I=l.localStorage,j={},z=Math.pow(2,53)-1,L=(T.prototype.init=function(n,t){t=new T(n,t);return Q(n)?(n.idblazy||(n.idblazy=t),n.idblazy):t},T);function T(n,t){if(this.name="dblazy",n){if(D(n))return n;var e=n;if(Y(n)){if(!(e=Sn(Tn(t,n),n)).length)return}else if(V(n))return this.ready(n);!e.nodeType&&e!==l||(e=[e]);for(var r=this.length=e.length,i=0;i<r;i++)this[i]=e[i]}}function M(n){var t=this,e=(t=D(t)?t:r(t)).length;return V(n)&&(e&&1!==e?t.each(n):n(t[0],0)),t}function P(n,t){function e(){return setTimeout(n,t||0,r)}return"loading"!==o.readyState?e():o.addEventListener("DOMContentLoaded",e),this}function W(n){var t="[object "+n+"]";return function(n){return a.call(n)===t}}e=L.prototype,((r=e.init).fn=r.prototype=e).length=0,e.splice=n,t&&(e[t[w]]=c[t[w]]);var q,B,R=(q="length",function(n){return G(n)?void 0:n[q]}),_=(B=R,function(n){n=B(n);return"number"==typeof n&&0<=n&&n<=z});function k(n){return X(n)?Object.keys(n):[]}function D(n){return n instanceof L}function F(n){return!Y(n)&&(n&&(Array.isArray(n)||_(n)))}function H(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function Q(n){return n&&(n instanceof Element||n.querySelector)}function $(n){return!isNaN(n)&&parseInt(Number(n))===n&&!isNaN(parseInt(n,10))}function U(n,t){return $(n)||(n=parseInt(n)),n||t||0}var V=W("Function");function J(n){if(G(n)||Z(n)||!1===n)return!0;var t=R(n);return"number"==typeof t&&(F(n)||Y(n))?0===t:0===R(k(n))}function G(n){return null===n}function K(n){return!isNaN(parseFloat(n))&&isFinite(n)}function X(n){if(!n||"object"!=typeof n)return!1;n=Object.getPrototypeOf(n);return G(n)||n===i}function Y(n){return n&&"string"==typeof n}function Z(n){return void 0===n}function nn(n){return!!n&&n===n.window}function tn(n){return-1!==[9,11].indexOf(!!n&&n.nodeType)}function en(n){return n&&(n.querySelector||-1!==[1,9,11].indexOf(!!n&&n.nodeType))}function rn(n){return en(n)||nn(n)}function on(n){return n&&"getAttribute"in n}function un(n,t){var e={};return n&&n.length&&c.slice.call(n).forEach(function(n){e[n.name]=n.value},t||this),e}function cn(n,t,e){if(V(n)||Y(n)||H(n)||K(n))return[];if(F(n)&&!Z(n.length)){var r=n.length;if(!r||1===r&&" "===n[0])return[]}if(X(n)&&J(n))return[];var i;if("[object Object]"===a.call(n)){for(var o in n)if(an(n,o)&&"length"!==o&&"name"!==o&&!1===t.call(e,n[o],o,n))break}else n&&(n instanceof HTMLCollection&&(n=c.slice.call(n)),n instanceof NamedNodeMap?(i=un(n,e),t.call(e,i,0,n)):(i=n.length)&&1===i&&!Z(n[0])?t.call(e,n[0],0,n):n.forEach(t,e));return n}function an(n,t){return i.hasOwnProperty.call(n,t)}function fn(n){if(Y(n)){if(-1!==(n=n.trim()).indexOf(","))return n.split(",").map(function(n){return n.trim()});if(/\s/.test(n))return n.split(" ").map(function(n){return n.trim()})}return F(n)?n:[n]}function ln(n,t,e,r){return on(n)?n[t+"Attribute"](e,r):""}function sn(n,t,r,e){var i=this,o=Z(r),u=!X(t)&&(o||H(e)),c=Y(e)?e:"",a=Mn(n);if(Z(t)&&Q(a))return un(a.attributes);if(u&&Y(t)){t=t.trim(),o&&(r="");var f=r;return fn(t).every(function(n){return!ln(a,m,n)||!(f=ln(a,v,n))}),f}return M.call(n,function(e){if(!on(e))return u?"":i;X(t)?cn(t,function(n,t){ln(e,y,c+t,n)}):G(r)?cn(fn(t),function(n){n=c+n;ln(e,m,n)&&ln(e,h,n)}):"src"===t?e.src=r:"href"===t?e.href=r:ln(e,y,t,r)})}function dn(n,r,i){return M.call(n,function(n,t){var e;on(n)&&(e=n.classList,V(r)&&(r=r(ln(n,v,"class"),t)),t=fn(r),e&&(Z(i)?t.map(function(n){e.toggle(n)}):e[i].apply(e,t)))})}function pn(t,n){var e=0;return Q(t)&&Q(n)?t!==n&&t.contains(n):F(t)?-1!==t.indexOf(n):(Y(t)&&Y(n)&&(t=t.toLowerCase(),cn(fn(n=n.toLowerCase()),function(n){-1!==t.indexOf(n)&&e++})),0<e)}function hn(n){return n.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function mn(t,n){var e=0;return Y(t)&&cn(fn(n),function(n){t.startsWith(n)&&e++}),0<e}function vn(n){return n.replace(/\s+/g," ").trim()}function yn(n,t){return Q(n)&&Y(t)?n.closest(t):null}function gn(n,t){if(Q(n)){if(Y(t))return t=wn(t),!!n.matches&&n.matches(t);if(Q(t))return n===t}return n===t}function bn(t,n){return!(!t||!t.nodeName)&&f.call(fn(n),function(n){return t.nodeName.toLowerCase()===n.toLowerCase()})}function En(n,t,e){e=Z(e)&&Y(t);return Y(n=n||o)&&(n=Mn(n,!0)),en(n)?(n=Tn(n,t=wn(t)),e?n.querySelector(t):function(n,t){var e=fn(n);Y(n)&&(e=t.querySelectorAll(n));return c.slice.call(e)}(t,n)):e?null:[]}function wn(n){var t=n;return Y(n)&&mn(n,">")&&(t=":scope "+n),t}function Sn(n,t){return En(n,t,1)}function Cn(n){return Q(n)&&n.currentStyle||!Z(o.documentMode)}function Nn(){return l.devicePixelRatio||1}function xn(){return l.innerWidth||o.documentElement[b]||l.screen[g]}function On(n,t,e,r,i,o){return Ln(n,t,e,r,i,o,p)}function An(n,t,e,r,i,o){return Ln(n,t,e,r,i,o,h)}function In(n){return n.decoded||n.complete}function jn(n,t){return(t||mn(n,["blazy.","bio."])?n:n.split(".")[0]).trim()}var zn={_opts:function(n){var t=!1,e=n||!1;return X(n)&&(t=(e=u({capture:!1,passive:!0},n)).once||!1),{one:t,options:e}},add:function(t,n,e,r,i){var o=this._opts(r),r=o.options,u=jn(n,i),i=e;o.one&&Cn()&&(i=function n(){t[h+C](u,n),e.apply(this,arguments)}),V(i)&&(j[n]=i,t[p+C](u,i,r))},remove:function(n,t,e,r,i){r=this._opts(r).options,i=jn(t,i),e=j[t]||e;V(e)&&(n[h+C](i,e,r),delete j[t])}};function Ln(n,e,t,r,i,o,u){var c,a=r,f=Cn();Y(n)&&V(e)?(i=t,r=e,e=n,n=[l]):Y(t)?(c=pn(e,["touchstart",E,"wheel"]),Z(i)&&(i=!f&&{capture:!c,passive:c}),r=function(n){!function(n,t,e){var r=n.target;if(gn(r,e))t.call(r,n);else for(;r&&r!==this;){if(gn(r,e)){t.call(r,n);break}r=r.parentElement||r.parentNode}}(n,a,t)}):V(t)&&(o=i,i=a,r=t);return M.call(n,function(t){rn(t)&&cn(fn(e),function(n){zn[u](t,n,r,i,o)})})}function Tn(n,t){return n=Mn(n=n||o,!0)||o,t&&(gn(n,t)||gn(t,N)||gn(t,x))&&(n=o),en(n)&&n.children&&n.children.length||tn(n)?n:o}function Mn(n,t){if(Y(n))return n===N?o.body:n===x?o:o.querySelector(n);if(t&&gn(n,x))return o;var e=s&&n instanceof l.jQuery,t=d&&n instanceof l.cash;return n&&(D(n)||e||t)?n[0]:n}function Pn(n){return A.test(n)}function Wn(n,t,e){if(Q(n)){var r=n[e];if(Z(t))return r;for(;r;){if(gn(r,t)||bn(r,t))return r;r=r[e]}}return null}function qn(n,t){return Wn(n,t,"parentElement")}function Bn(n,t,e){return Wn(n,t,e+"ElementSibling")}function Rn(n,t){return Bn(n,t,"previous")}r.isTag=W,r.isArr=F,r.isBool=H,r.isDoc=tn,r.isElm=Q,r.isFun=V,r.isEmpty=J,r.isInt=$,r.isNull=G,r.isNum=K,r.isObj=X,r.isStr=Y,r.isUnd=Z,r.isEvt=rn,r.isQsa=en,r.isIo="Intersection"+S in l,r.isMo="Mutation"+S in l,r.isRo="Resize"+S in l,r.isNativeLazy="loading"in HTMLImageElement.prototype,r.isAmd="function"==typeof define&&define.amd,r.isWin=nn,r._er=-1,r._ok=1,r.chain=function(n,t){return M.call(n,t)},r.each=cn,r.extend=u,e.extend=function(n,t){return(t=t||!1)?u(n,e):u(e,n)},r.hasProp=an,r.parse=function(n){try{return 0===n.length||"1"===n?{}:JSON.parse(n)}catch(n){return{}}},r.toArray=fn,r.toInt=U,r.attr=sn.bind(r),r.hasAttr=function(t,n){var e=0;return on(t)&&Y(n)&&cn(fn(n),function(n){ln(t,m,n)&&e++}),0<e},r.nodeMapAttr=un,r.removeAttr=function(n,t,e){return sn(n,t,null,e||"")}.bind(r),r.hasClass=function(n,t){var e,r=0;return on(n)&&Y(t)&&(e=sn(n,"class"),cn(fn(t),function(t){cn(fn(e),function(n){n&&n===t&&r++})})),0<r},r.toggleClass=dn,r.addClass=function(n,t){return dn(n,t,p)},r.removeClass=function(n,t){return dn(n,t,h)},r.contains=pn,r.escape=hn,r.startsWith=mn,r.trimSpaces=vn,r.closest=yn,r.is=gn,r.equal=bn,r.find=En,r.findAll=Sn,r.remove=function(n){var t;!Q(n)||(t=qn(n))&&t.removeChild(n)},r.ie=Cn,r.pixelRatio=Nn,r.windowWidth=xn,r.windowSize=function(){return{width:xn(),height:l.innerHeight||o.documentElement.clientHeight}},r.activeWidth=function(t,n){var e=n.up||!1,r=k(t),i=r[0],o=r[r.length-1],u=n.ww||xn(),n=u*Nn(),c=e?u:n;return Z(r=r.filter(function(n){return e?U(n,0)<=c:U(n,0)>=c}).map(function(n){return t[n]})[e?"pop":"shift"]())?t[o<=c?o:i]:r},r.on=On,r.off=An,r.one=function(n,t,e,r){return On(n,t,e,{once:!0},r)},r.trigger=function(n,t,r,i){return M.call(n,function(e){rn(e)&&cn(fn(t),function(n){var t=Z(r)?new Event(n):(t={bubbles:!0,cancelable:!0,detail:r||{}},X(i)&&(t=u(t,i)),new CustomEvent(n,t));e.dispatchEvent(t)})})},r.getScript=function(n,e,t){var r=o.createElement("script"),i=o.getElementsByTagName("script")[0];r.async=1,r.id=t,r.onload=r.onreadystatechange=function(n,t){!t&&r.readyState&&!/loaded|complete/.test(r.readyState)||(r.onload=r.onreadystatechange=null,r=null,!t&&e&&l.setTimeout(e,0))},r.src=n,i.parentNode.insertBefore(r,i)},r.isDecoded=In,r.ready=P.bind(r),r.decode=function(e){return In(e)?Promise.resolve(e):"decode"in e?(e.decoding="async",e.decode()):new Promise(function(n,t){e.onload=function(){n(e)},e.onerror=t()})},r.throttle=function(t,e,r){e=e||50;var i=0;return function(){var n=+new Date;n-i<e||(i=n,t.apply(r,arguments))}},r.resize=function(t,e){return l.onresize=function(n){clearTimeout(e),e=setTimeout(t.bind(n),200)},t},r.template=function(n,t){for(var e in t)an(t,e)&&(n=n.replace(new RegExp(hn("$"+e),"g"),t[e]));return vn(n)},r.context=Tn,r.toElm=Mn,r.camelCase=function(n){return n.replace(O,function(n,t){return t.toUpperCase()})},r.isVar=Pn,r.computeStyle=function(n,t,e){if(!Q(n))return null;var r=getComputedStyle(n,null);return Z(t)?r:e||Pn(t)?r.getPropertyValue(t)||null:r[t]||n.style[t]},r.rect=function(n){return Q(n)?n.getBoundingClientRect():{}},r.empty=function(n){return M.call(n,function(n){if(Q(n))for(;n.firstChild;)n.removeChild(n.firstChild)})},r.parent=qn,r.next=function(n,t){return Bn(n,t,"next")},r.prev=Rn,r.index=function(e,n){var r=0,i=!0;if(Q(e)&&(Z(n)||cn(fn(n),function(n,t){if(Q(n)){if(i=!1,gn(e,n))return r=t,!1}else if(Y(n)){n=yn(e,n);if(Q(n))return e=n,!1}}),i))for(;!G(e=Rn(e));)r++;return r},r.keys=k,r._op=ln,r.storage=function(t,e,n,r){if(I){if(Z(e))return I.getItem(t);if(G(e))I.removeItem(t);else try{I.setItem(t,e)}catch(n){I.removeItem(t),r&&I.setItem(t,e)}}return n||!1},S={chain:function(n){return M.call(this,n)},each:function(n){return cn(this,n)},ready:function(n){return P.call(this,n)}},e.extend(S),r.matches=gn,r.forEach=cn,r.bindEvent=On.bind(r),r.unbindEvent=An.bind(r),"undefined"!=typeof exports?module.exports=r:l.dBlazy=r}(this,this.document);