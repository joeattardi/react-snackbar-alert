(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(184),c=n(226),l=n.n(c),i=n(227),u=n.n(i),s=n(157);n(156);function m(e){var t=e.message;return r.a.createElement("div",{style:{background:"#FF0000",color:"#FFFFFF",padding:"0.5em",marginBottom:"0.5em"}},t)}function f(){var e=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement(s.SnackbarManager,{ref:e,component:m}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}var p=n(155),d=n(159);function b(){return r.a.createElement(p.a,{title:"Custom Snackbar Component"},r.a.createElement("p",null,"For greater customization of the snackbar component, a custom component can be used. Create your custom snackbar component and pass it as the ",r.a.createElement("code",null,"component")," prop to the ",r.a.createElement("code",null,"SnackbarManager"),". The component will receive a ",r.a.createElement("code",null,"message")," prop with the message to display."),r.a.createElement("p",null,"Note that if you use a custom component, you will lose the default animations."),r.a.createElement(f,null),r.a.createElement(o.d,{forceRenderTabPanel:!0},r.a.createElement(o.b,null,r.a.createElement(o.a,null,"CustomComponentExample.js"),r.a.createElement(o.a,null,"CustomSnackbarComponent.js")),r.a.createElement(o.c,null,r.a.createElement(d.a,{src:l.a})),r.a.createElement(o.c,null,r.a.createElement(d.a,{src:u.a}))))}n.d(t,"default",function(){return b})},151:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},153:function(e,t,n){"use strict";n(177),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.animationTimeout,n=e.children,r=e.message;return a.default.createElement(c,{animationTimeout:t,className:"react-snackbar-alert__snackbar"},n||r)};var a=r(n(152));function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  &.react-snackbar-alert__snackbar-enter {\n    opacity: 0;\n    transform: scaleY(0.5);\n  }\n\n  &.react-snackbar-alert__snackbar-enter-active {\n    opacity: 1;\n    transform: scaleY(1);\n    transition: all ","ms;\n  }\n\n  &.react-snackbar-alert__snackbar-exit {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n\n  &.react-snackbar-alert__snackbar-exit-active {\n    opacity: 0;\n    transform: scaleY(0.5);\n    transition: all ","ms;\n  }\n"]);return o=function(){return e},e}var c=r(n(178)).default.div(o(),function(e){return e.animationTimeout},function(e){return e.animationTimeout})},154:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(55),i=n(2),u=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},155:function(e,t,n){"use strict";var a=n(162),r=n.n(a),o=(n(163),n(164),n(0)),c=n.n(o),l=n(165),i=n(166),u=n.n(i);function s(){return c.a.createElement("footer",{id:u.a.footer},"Created with 💙 by ",c.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var m=n(167),f=n.n(m);function p(){return c.a.createElement("header",{id:f.a.header},c.a.createElement("h1",null,"🍫 React Snackbar Alert"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),c.a.createElement("div",null,c.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var d=n(4),b=n.n(d),v=n(33),E=n.n(v);n(151),c.a.createContext({});b.a.object,b.a.string.isRequired,b.a.func,b.a.func;var h=n(168),g=n.n(h);function y(){return c.a.createElement("nav",{id:g.a.sidebar},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(E.a,{to:"/",activeClassName:g.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/gettingStarted/",activeClassName:g.a.active},"Getting Started")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/api/",activeClassName:g.a.active},"API"))),c.a.createElement("h2",null,"Examples"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(E.a,{to:"/examples/base/",activeClassName:g.a.active},"Base")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/examples/customTimeout/",activeClassName:g.a.active},"Custom Timeout")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/examples/customAnimationTimeout/",activeClassName:g.a.active},"Custom Animation Timeout")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/examples/customComponent/",activeClassName:g.a.active},"Custom Snackbar Component")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/examples/customChildComponent/",activeClassName:g.a.active},"Extending Snackbar Component")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/examples/customComponentData/",activeClassName:g.a.active},"Custom Component Data"))))}var k=n(169),C=n.n(k);n(156),n(170);function S(e){var t=e.children,n=e.title;return Object(o.useEffect)(function(){r.a.highlightAll()}),c.a.createElement("div",null,c.a.createElement(l.Helmet,null,c.a.createElement("title",null,n?n+" |":""," React Snackbar Alert")),c.a.createElement(p,null),c.a.createElement("div",{id:C.a.body},c.a.createElement(y,null),c.a.createElement("main",{id:C.a.main},c.a.createElement("div",{id:C.a.contentContainer},c.a.createElement("h1",null,n),t),c.a.createElement(s,null))))}n.d(t,"a",function(){return S})},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SnackbarManager",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Snackbar",{enumerable:!0,get:function(){return r.default}});var a=o(n(158)),r=o(n(153));function o(e){return e&&e.__esModule?e:{default:e}}},158:function(e,t,n){"use strict";n(171),n(75),n(172),n(173),n(35),n(74),n(174),n(175),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(160)),r=i(n(152)),o=n(179),c=i(n(176)),l=i(n(153));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).timeouts=[],n.state={notifications:[]},n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["default"].Component),n=t,(a=[{key:"create",value:function(e){var t=this;e.key=(0,c.default)(),this.setState({notifications:[].concat(s(this.state.notifications),[e])},function(){var n=setTimeout(function(){t.setState({notifications:t.state.notifications.filter(function(t){return t!==e})}),t.timeouts=t.timeouts.filter(function(e){return e!==n})},e.timeout||t.props.timeout);t.timeouts.push(n)})}},{key:"componentWillUnmount",value:function(){this.timeouts.forEach(function(e){return clearTimeout(e)})}},{key:"render",value:function(){var e=this,t=this.props.component;return r.default.createElement("div",{className:"react-snackbar-alert__snackbar-manager"},r.default.createElement(o.TransitionGroup,null,this.state.notifications.map(function(n){var a=n.animationTimeout,c=n.data,l=n.key,i=n.message;return r.default.createElement(o.CSSTransition,{key:l,timeout:a||e.props.animationTimeout,classNames:"react-snackbar-alert__snackbar"},r.default.createElement(t,{animationTimeout:a||e.props.animationTimeout,message:i,data:c}))})))}}])&&m(n.prototype,a),l&&m(n,l),t}();t.default=b,b.defaultProps={timeout:3e3,animationTimeout:250,component:l.default},b.propTypes={timeout:a.default.number,animationTimeout:a.default.number,component:a.default.elementType}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(161),r=n.n(a),o=n(0),c=n.n(o);function l(e){var t=e.src,n=e.language;return c.a.createElement("pre",null,c.a.createElement("code",{className:"language-"+n,dangerouslySetInnerHTML:{__html:r()(t)}}))}l.defaultProps={language:"jsx"}},226:function(e,t){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nimport CustomSnackbarComponent from './CustomSnackbarComponent';\n\nexport default function CustomComponentExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"},227:function(e,t){e.exports="import React from 'react';\n\nexport default function CustomSnackbarComponent({ message }) {\n  return (\n    <div style={{\n      background: '#FF0000',\n      color: '#FFFFFF',\n      padding: '0.5em',\n      marginBottom: '0.5em'\n    }}>\n      {message}\n    </div>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-custom-component-js-f334d74618ef0ddef018.js.map