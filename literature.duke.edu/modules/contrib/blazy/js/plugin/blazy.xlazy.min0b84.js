!function(l,s){"use strict";var u="data-",e="srcset",d=u+"src",f=[e,"src"],b=0;function r(s,e,r){var t=l.closest(s,r.parent)||s,a=e===l._ok||!0===e,o=r.successClass,i=r.errorClass,c="is-"+o,n="is-"+i;return l.addClass(s,a?o:i),l.addClass(t,a?c:n),a?(i=s,c=e,n=t,a=r,(l.isFun(a.success)||l.isObj(a.success))&&a.success(i,c,n,a),0<b&&b--,l.hasAttr(s,d)&&l.removeAttr(s,f,u)):(s=s,e=e,t=t,r=r,(l.isFun(r.error)||l.isObj(r.error))&&r.error(s,e,t,r),b=++b),b}l._defaults={error:!1,offset:100,root:s,success:!1,selector:".b-lazy",separator:"|",container:!1,containerClass:!1,errorClass:"b-error",loadInvisible:!1,successClass:"b-loaded",visibleClass:!1,validateDelay:25,saveViewportOffsetDelay:50,srcset:"data-srcset",src:d,bgClass:"b-bg",isMedia:!1,parent:".media",disconnect:!1,intersecting:!1,observing:!1,resizing:!1,mobileFirst:!1,rootMargin:"0px",threshold:[0]},l.isCompleted=function(s){if(l.isElm(s)){if(l.equal(s,"img"))return l.isDecoded(s);if(l.equal(s,"iframe"))return"complete"===(s.contentDocument||s.contentWindow.document).readyState}return!1},l.selector=function(s,e){var r=s.selector;return e&&l.isBool(e)&&(e=":not(."+s.successClass+")"),r+(e=e||"")},l.status=r}(dBlazy,this.document);