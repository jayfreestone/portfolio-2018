(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{236:function(t,e,n){__NEXT_REGISTER_PAGE("/writing-single",function(){return t.exports=n(246),{page:t.exports.default}})},246:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n.n(r),u=n(0),i=n.n(u),s=n(48),c=n(35),a=n(36);var f=i.a.memo(function(t){var e=t.html;return i.a.createElement("div",{dangerouslySetInnerHTML:function(t){return{__html:t}}(e)})});function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,n,r,o,u,i){try{var s=t[u](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,b(e).apply(this,arguments))}var n,r,u,l,d;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,i.a.Component),n=e,r=[{key:"render",value:function(){var t=this.props.post,e=t.meta,n=t.content;return i.a.createElement(a.b,null,i.a.createElement(c.a,null,e.title),i.a.createElement(f,{html:n}))}}],u=[{key:"getInitialProps",value:(l=o.a.mark(function t(e){var n,r,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query,r=n.slug,t.next=4,s.a.getPost(r);case 4:return u=t.sent,t.abrupt("return",{post:u});case 6:case"end":return t.stop()}},t,this)}),d=function(){var t=this,e=arguments;return new Promise(function(n,r){var o=l.apply(t,e);function u(t){p(o,n,r,u,i,"next",t)}function i(t){p(o,n,r,u,i,"throw",t)}u(void 0)})},function(t){return d.apply(this,arguments)})}],r&&y(n.prototype,r),u&&y(n,u),e}();e.default=d},47:function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return e=e||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var u in o.open(e.method||"get",t,!0),e.headers)o.setRequestHeader(u,e.headers[u]);function i(){var t,e=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,u,i){e.push(u=u.toLowerCase()),n.push([u,i]),r[u]=(t=r[u])?t+","+i:i}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return e},entries:function(){return n},get:function(t){return r[t.toLowerCase()]},has:function(t){return t.toLowerCase()in r}}}}o.withCredentials="include"==e.credentials,o.onload=function(){n(i())},o.onerror=r,o.send(e.body||null)})}},48:function(t,e,n){"use strict";var r=n(49),o=n.n(r),u=n(50),i=n.n(u),s=o()().publicRuntimeConfig;function c(t){return function(){return i()("".concat(s.API_URL,"/").concat(t)).then(function(t){return t.json()})}}e.a={getPosts:c("writing"),getPost:function(t){return c("writing/".concat(t))()}}},49:function(t,e,n){t.exports=n(88)},50:function(t,e,n){t.exports=window.fetch||(window.fetch=n(47).default||n(47))}},[[236,1,0]]]);