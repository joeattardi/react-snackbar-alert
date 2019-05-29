(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156),o=a(160),c=a(158);a(157);function l(){var e=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement(c.SnackbarManager,{ref:e}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({message:"5 second timeout!",timeout:5e3})}},"Show Snackbar")))}var s=a(232),u=a.n(s);function m(){return r.a.createElement(i.a,{title:"Custom Timeout"},r.a.createElement("p",null,"The timeout can be changed by setting the ",r.a.createElement("code",null,"timeout")," property of the passed snackbar object."),r.a.createElement(l,null),r.a.createElement(o.a,{src:u.a}))}a.d(t,"default",function(){return m})},152:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e,t,a){"use strict";a(179),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.animationTimeout,a=e.children,r=e.dismissable,i=e.message,c=e.onDismiss;return n.default.createElement(o,{animationTimeout:t,className:"react-snackbar-alert__snackbar"},n.default.createElement("div",{className:"react-snackbar-alert__snackbar-content"},a||i),r?n.default.createElement("button",{onClick:c,className:"react-snackbar-alert__snackbar-close"},"×"):null)};var n=r(a(153));function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  &.react-snackbar-alert__snackbar-enter {\n    opacity: 0;\n    transform: scaleY(0.5);\n  }\n\n  &.react-snackbar-alert__snackbar-enter-active {\n    opacity: 1;\n    transform: scaleY(1);\n    transition: all ","ms;\n  }\n\n  &.react-snackbar-alert__snackbar-exit {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n\n  &.react-snackbar-alert__snackbar-exit-active {\n    opacity: 0;\n    transform: scaleY(0.5);\n    transition: all ","ms;\n  }\n"]);return i=function(){return e},e}var o=r(a(180)).default.div(i(),function(e){return e.animationTimeout},function(e){return e.animationTimeout})},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){"use strict";var n=a(163),r=a.n(n),i=(a(164),a(165),a(0)),o=a.n(i),c=a(166),l=a(167),s=a.n(l);function u(){return o.a.createElement("footer",{id:s.a.footer},"Created with 💙 by ",o.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var m=a(168),f=a.n(m);function b(){return o.a.createElement("header",{id:f.a.header},o.a.createElement("h1",null,"🍫 React Snackbar Alert"),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},o.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),o.a.createElement("div",null,o.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},o.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var d=a(4),p=a.n(d),v=a(33),E=a.n(v);a(152),o.a.createContext({});p.a.object,p.a.string.isRequired,p.a.func,p.a.func;var h=a(169),k=a.n(h);function y(){return o.a.createElement("nav",{id:k.a.sidebar},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(E.a,{to:"/",activeClassName:k.a.active},"Home")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/gettingStarted/",activeClassName:k.a.active},"Getting Started")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/api/",activeClassName:k.a.active},"API"))),o.a.createElement("h2",null,"Examples"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(E.a,{to:"/examples/base/",activeClassName:k.a.active},"Base")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/examples/dismissable/",activeClassName:k.a.active},"Dismissable")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/examples/customTimeout/",activeClassName:k.a.active},"Custom Timeout")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/examples/customAnimationTimeout/",activeClassName:k.a.active},"Custom Animation Timeout")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/examples/customComponent/",activeClassName:k.a.active},"Custom Snackbar Component")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/examples/customChildComponent/",activeClassName:k.a.active},"Extending Snackbar Component")),o.a.createElement("li",null,o.a.createElement(E.a,{to:"/examples/customComponentData/",activeClassName:k.a.active},"Custom Component Data"))))}var g=a(170),_=a.n(g);a(157),a(171);function C(e){var t=e.children,a=e.title;return Object(i.useEffect)(function(){r.a.highlightAll()}),o.a.createElement("div",null,o.a.createElement(c.Helmet,null,o.a.createElement("title",null,a?a+" |":""," React Snackbar Alert")),o.a.createElement(b,null),o.a.createElement("div",{id:_.a.body},o.a.createElement(y,null),o.a.createElement("main",{id:_.a.main},o.a.createElement("div",{id:_.a.contentContainer},o.a.createElement("h1",null,a),t),o.a.createElement(u,null))))}a.d(t,"a",function(){return C})},158:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SnackbarManager",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Snackbar",{enumerable:!0,get:function(){return r.default}});var n=i(a(159)),r=i(a(154));function i(e){return e&&e.__esModule?e:{default:e}}},159:function(e,t,a){"use strict";a(56),a(172),a(173),a(75),a(174),a(175),a(35),a(74),a(176),a(177),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(161)),r=l(a(153)),i=a(181),o=l(a(178)),c=l(a(154));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=f(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?b(n):r).timeouts={},a.state={notifications:[]},a.create=a.create.bind(b(a)),a.remove=a.remove.bind(b(a)),a}var a,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["default"].Component),a=t,(n=[{key:"create",value:function(e){var t=this;e.key=(0,o.default)(),this.setState({notifications:[].concat(u(this.state.notifications),[e])},function(){var a=setTimeout(function(){t.remove(e)},e.timeout||t.props.timeout);t.timeouts[e.key]=a})}},{key:"remove",value:function(e){clearTimeout(this.timeouts[e.key]),this.setState({notifications:this.state.notifications.filter(function(t){return t!==e})}),delete this.timeouts[e.key]}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this.timeouts).forEach(function(t){clearTimeout(e.timeouts[t])})}},{key:"render",value:function(){var e=this,t=this.props.component;return r.default.createElement("div",{className:"react-snackbar-alert__snackbar-manager"},r.default.createElement(i.TransitionGroup,null,this.state.notifications.map(function(a){return r.default.createElement(i.CSSTransition,{key:a.key,timeout:a.animationTimeout||e.props.animationTimeout,classNames:"react-snackbar-alert__snackbar"},r.default.createElement(t,{animationTimeout:a.animationTimeout||e.props.animationTimeout,dismissable:void 0!==a.dismissable?a.dismissable:e.props.dismissable,onDismiss:function(){return e.remove(a)},message:a.message,data:a.data}))})))}}])&&m(a.prototype,n),c&&m(a,c),t}();t.default=p,p.defaultProps={timeout:3e3,animationTimeout:250,component:c.default,dismissable:!1},p.propTypes={timeout:n.default.number,animationTimeout:n.default.number,component:n.default.elementType,dismissable:n.default.bool}},160:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(162),r=a.n(n),i=a(0),o=a.n(i);function c(e){var t=e.src,a=e.language;return o.a.createElement("pre",null,o.a.createElement("code",{className:"language-"+a,dangerouslySetInnerHTML:{__html:r()(t)}}))}c.defaultProps={language:"jsx"}},162:function(e,t,a){"use strict";var n=/["'&<>]/;e.exports=function(e){var t,a=""+e,r=n.exec(a);if(!r)return a;var i="",o=0,c=0;for(o=r.index;o<a.length;o++){switch(a.charCodeAt(o)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==o&&(i+=a.substring(c,o)),c=o+1,i+=t}return c!==o?i+a.substring(c,o):i}},232:function(e,t){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nexport default function CustomTimeoutExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: '5 second timeout!',\n      timeout: 5000\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-custom-timeout-js-5597bef5eb32809692c6.js.map