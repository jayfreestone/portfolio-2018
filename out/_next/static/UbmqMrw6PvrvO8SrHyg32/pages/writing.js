(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{102:function(e,t,n){"use strict";var r=n(17),o=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(103)),i=o(n(46)),a=o(n(6)),s=o(n(7)),f=o(n(12)),c=o(n(13)),l=o(n(14)),p=o(n(33)),h=o(n(10)),d=n(85),v=r(n(0)),y=(o(n(20)),r(n(45))),m=n(19);var w=function(e){function t(){var e,n,r,o,u,s;(0,a.default)(this,t);for(var l=arguments.length,v=new Array(l),w=0;w<l;w++)v[w]=arguments[w];return n=(0,f.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(v))),(0,h.default)((0,p.default)((0,p.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,i.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,i.default)(t)?(0,d.format)(t):t}},o=null,u=null,s=null,function(e,t){if(e===o&&t===u)return s;var n=r(e,t);return o=e,u=t,s=n,n})),(0,h.default)((0,p.default)((0,p.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var u=n.formatUrls(n.props.href,n.props.as),i=u.href,a=u.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,d.resolve)(s,i),a=a?(0,d.resolve)(s,a):i,e.preventDefault();var f=n.props.scroll;null==f&&(f=a.indexOf("#")<0);var c=n.props.replace?"replace":"push";y.default[c](i,a,{shallow:n.props.shallow}).then(function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,l.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,u.default)(this.props.href)!==(0,u.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);y.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=v.default.createElement("a",null,t));var u=v.Children.only(t),i={onClick:function(t){u.props&&"function"==typeof u.props.onClick&&u.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==u.type||"href"in u.props)||(i.href=o||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,y._rewriteUrlForNextExport)(i.href)),v.default.cloneElement(u,i)}}]),t}(v.Component);t.default=w},103:function(e,t,n){e.exports=n(104)},104:function(e,t,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},237:function(e,t,n){__NEXT_REGISTER_PAGE("/writing",function(){return e.exports=n(238),{page:e.exports.default}})},238:function(e,t,n){"use strict";n.r(t);var r=n(21),o=n.n(r),u=n(0),i=n.n(u),a=n(34),s=n.n(a),f=n(48);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r,o,u,i){try{var a=e[u](i),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,o)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,d(t).apply(this,arguments))}var n,r,u,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,i.a.Component),n=t,r=[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("ul",null,this.props.posts.map(function(e){return i.a.createElement("li",{key:e.route},i.a.createElement(s.a,{as:e.route,href:{pathname:e.page,query:e.query}},i.a.createElement("a",null,e.meta.title)))})))}}],u=[{key:"getInitialProps",value:(a=o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.getPosts();case 2:return t=e.sent,e.abrupt("return",{posts:t});case 4:case"end":return e.stop()}},e,this)}),c=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=a.apply(e,t);function u(e){l(o,n,r,u,i,"next",e)}function i(e){l(o,n,r,u,i,"throw",e)}u(void 0)})},function(){return c.apply(this,arguments)})}],r&&p(n.prototype,r),u&&p(n,u),t}();t.default=y},34:function(e,t,n){e.exports=n(102)},47:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var u in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(u,t.headers[u]);function i(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,u,i){t.push(u=u.toLowerCase()),n.push([u,i]),r[u]=(e=r[u])?e+","+i:i}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(i())},o.onerror=r,o.send(t.body||null)})}},48:function(e,t,n){"use strict";var r=n(49),o=n.n(r),u=n(50),i=n.n(u),a=o()().publicRuntimeConfig;function s(e){return function(){return i()("".concat(a.API_URL,"/").concat(e)).then(function(e){return e.json()})}}t.a={getPosts:s("writing"),getPost:function(e){return s("writing/".concat(e))()}}},49:function(e,t,n){e.exports=n(88)},50:function(e,t,n){e.exports=window.fetch||(window.fetch=n(47).default||n(47))}},[[237,1,0]]]);