(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),i=n.n(o),s=n(7),l=n.n(s),c=n(240),u=n.n(c),m=n(171),f=n.n(m),p=n(241),d=n(162);function b(){var e=u()(["\n  margin: 0.5em;\n\n  h3 {\n    margin: 0;\n  }\n"]);return b=function(){return e},e}function h(){var e=u()(["\n  display: flex;\n"]);return h=function(){return e},e}var v=p.a.div(h()),y=p.a.div(b()),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={progressBar:!0,pauseOnHover:!1,sticky:!1,dismissable:!1,timeout:3e3,position:"bottom"},n.snackbarManager=r.a.createRef(),n.showSnackbar=n.showSnackbar.bind(i()(n)),n}l()(t,e);var n=t.prototype;return n.showSnackbar=function(){this.snackbarManager.current.create({message:"Hello Snackbar!",progressBar:this.state.progressBar,pauseOnHover:this.state.pauseOnHover,sticky:this.state.sticky,dismissable:this.state.dismissable,timeout:this.state.timeout})},n.checkboxStateUpdater=function(e){var t=this;return function(n){var a;t.setState(((a={})[e]=n.target.checked,a),function(){f.a.highlightAll()})}},n.numberStateUpdater=function(e){var t=this;return function(n){var a,r=parseInt(n.target.value,10);t.setState(((a={})[e]=r,a),function(){f.a.highlightAll()})}},n.selectStateUpdater=function(e){var t=this;return function(n){var a;t.setState(((a={})[e]=n.target.value,a),function(){f.a.highlightAll()})}},n.render=function(){return r.a.createElement("div",null,r.a.createElement(d.SnackbarManager,{ref:this.snackbarManager,position:this.state.position}),r.a.createElement("main",null,r.a.createElement(v,null,r.a.createElement(y,null,r.a.createElement("h3",null,"Snackbar Options"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"timeout"},"Timeout (ms):"),r.a.createElement("input",{id:"timeout",type:"number",value:this.state.timeout,onChange:this.numberStateUpdater("timeout")})),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"progress-bar",checked:this.state.progressBar,onChange:this.checkboxStateUpdater("progressBar")}),r.a.createElement("label",{htmlFor:"progress-bar"},"Progress Bar")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"pause-on-hover",checked:this.state.pauseOnHover,onChange:this.checkboxStateUpdater("pauseOnHover")}),r.a.createElement("label",{htmlFor:"pause-on-hover"},"Pause on Hover")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"sticky",checked:this.state.sticky,onChange:this.checkboxStateUpdater("sticky")}),r.a.createElement("label",{htmlFor:"sticky"},"Sticky")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"dismissable",checked:this.state.dismissable,onChange:this.checkboxStateUpdater("dismissable")}),r.a.createElement("label",{htmlFor:"dismissable"},"Dismissable"))),r.a.createElement(y,null,r.a.createElement("h3",null,"Snackbar Manager Options"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"position"},"Position:"),r.a.createElement("select",{id:"position",value:this.state.position,onChange:this.selectStateUpdater("position")},r.a.createElement("option",{value:"top"},"Top"),r.a.createElement("option",{value:"top-left"},"Top Left"),r.a.createElement("option",{value:"top-right"},"Top Right"),r.a.createElement("option",{value:"bottom"},"Bottom"),r.a.createElement("option",{value:"bottom-left"},"Bottom Left"),r.a.createElement("option",{value:"bottom-right"},"Bottom Right"))))),r.a.createElement("button",{onClick:this.showSnackbar},"Show Snackbar"),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-jsx"},"\nimport React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\n\nexport default function DemoExample() {\n  const snackbarManager = useRef();\n\n  function showSnackbar() {\n    this.snackbarManager.current.create({\n      message: 'Hello Snackbar!',\n      progressBar: "+this.state.progressBar+",\n      pauseOnHover: "+this.state.pauseOnHover+",\n      sticky: "+this.state.sticky+",\n      dismissable: "+this.state.dismissable+",\n      timeout: "+this.state.timeout+'\n    });\n  }\n\n  return (\n    <div>\n      <SnackbarManager\n        ref={snackbarManager} \n        position="'+this.state.position+'" />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n          '))))},t}(r.a.Component),E=n(161);function k(){return r.a.createElement(E.a,null,r.a.createElement("h1",null,"Welcome"),r.a.createElement("p",null,"React Snackbar Alert is a very simple library for \"snackbar\" style notifications. It's a quick and lightweight way to let your users know what's going on in your app."),r.a.createElement("h1",null,"Demo"),r.a.createElement(g,null),r.a.createElement("h1",null,"Features"),r.a.createElement("ul",null,r.a.createElement("li",null,"Easy to use"),r.a.createElement("li",null,"Notifications can be restyled and extended"),r.a.createElement("li",null,"Arbitrary custom data can be specified to create rich, interactive notifications"),r.a.createElement("li",null,"About 6 KB gzipped")),r.a.createElement("h1",null,"Requirements"),r.a.createElement("p",null,"React Snackbar Alert requires React 16 or newer."))}n.d(t,"default",function(){return k})},156:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},157:function(e,t,n){"use strict";n(163),n(164),n(165),n(166),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(159)),r=i(n(158)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(167));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){var e=y(["\n  align-self: flex-start;\n  width: calc(100% + 0.5em);\n  height: 0.25em;\n  background: rgba(255, 255, 255, 0.2);\n  position: relative;\n  top: 0.25em;\n  left: -0.25em;\n  border-bottom-left-radius: 5px;\n  animation: "," ","ms linear;\n"]);return f=function(){return e},e}function p(){var e=y(["\n  background: transparent;\n  padding: 0;\n  font-size: 1.5em;\n  margin-top: -0.25em;\n  outline: none;\n  width: 1em;\n"]);return p=function(){return e},e}function d(){var e=y(["\n  flex-grow: 1;\n  margin-left: ",";\n"]);return d=function(){return e},e}function b(){var e=y(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);return b=function(){return e},e}function h(){var e=y(["\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 5px;\n  color: #ffffff;\n  min-height: 3em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.25em;\n  text-align: center;\n  margin-bottom: ",";\n  margin-top: ",";\n"]);return h=function(){return e},e}function v(){var e=y(["\n  0% {\n    width: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  99% {\n    border-bottom-right-radius: 0;\n  }\n\n  100% {\n    width: calc(100% + 0.5em);\n    border-bottom-right-radius: 5px;\n  }\n"]);return v=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=(0,o.keyframes)(v()),E=o.default.div(h(),function(e){return 0===e.position.indexOf("bottom")?"0.5em":0},function(e){return 0===e.position.indexOf("top")?"0.5em":0}),k=o.default.div(b()),O=o.default.div(d(),function(e){return e.dismissable?"1.5em":"0"}),S=o.default.button(p()),w=o.default.div(f(),g,function(e){return e.timeout}),x=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=c(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?u(a):r).state={animationPaused:!1},n.pause=n.pause.bind(u(n)),n.resume=n.resume.bind(u(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["default"].Component),n=t,(a=[{key:"pause",value:function(){this.props.pauseOnHover&&(this.setState({animationPaused:!0}),this.props.onPause())}},{key:"resume",value:function(){this.props.pauseOnHover&&(this.setState({animationPaused:!1}),this.props.onResume())}},{key:"render",value:function(){var e=this.props,t=e.timeout,n=e.children,a=e.dismissable,o=e.message,i=e.onDismiss,s=e.sticky,l=e.progressBar,c=e.position;return r.default.createElement(E,{position:c,onMouseEnter:this.pause,onMouseLeave:this.resume},r.default.createElement(k,null,r.default.createElement(O,{dismissable:a},n||o),a?r.default.createElement(S,{onClick:i},"×"):null),!s&&l?r.default.createElement(w,{timeout:t,className:"react-snackbar-alert__snackbar-progress-bar",style:{animationPlayState:this.state.animationPaused?"paused":"running"}}):null)}}])&&l(n.prototype,a),o&&l(n,o),t}();t.default=x,x.defaultProps={progressBar:!0,position:"bottom"},x.propTypes={children:a.default.node,pauseOnHover:a.default.bool,onPause:a.default.func,onResume:a.default.func,timeout:a.default.number,dismissable:a.default.bool,message:a.default.string,onDismiss:a.default.func,sticky:a.default.bool,progressBar:a.default.bool,position:a.default.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right"])}},160:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(55),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,n){"use strict";var a=n(171),r=n.n(a),o=(n(172),n(173),n(0)),i=n.n(o),s=n(174),l=n(175),c=n.n(l);function u(){return i.a.createElement("footer",{id:c.a.footer},"Created with 💙 by ",i.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var m=n(176),f=n.n(m);function p(){return i.a.createElement("header",{id:f.a.header},i.a.createElement("h1",null,"🍫 React Snackbar Alert"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),i.a.createElement("div",null,i.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},i.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var d=n(4),b=n.n(d),h=n(33),v=n.n(h);n(156),i.a.createContext({});b.a.object,b.a.string.isRequired,b.a.func,b.a.func;var y=n(177),g=n.n(y);function E(){return i.a.createElement("nav",{id:g.a.sidebar},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.a,{to:"/",activeClassName:g.a.active},"Home")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/gettingStarted/",activeClassName:g.a.active},"Getting Started")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/api/",activeClassName:g.a.active},"API"))),i.a.createElement("h2",null,"Examples"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/base/",activeClassName:g.a.active},"Base")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/position/",activeClassName:g.a.active},"Position")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/pauseOnHover/",activeClassName:g.a.active},"Pause on Hover")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/noProgressBar/",activeClassName:g.a.active},"No Progress Bar")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/dismissable/",activeClassName:g.a.active},"Dismissable")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/sticky/",activeClassName:g.a.active},"Sticky")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/customTimeout/",activeClassName:g.a.active},"Custom Timeout")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/customAnimationTimeout/",activeClassName:g.a.active},"Custom Animation Timeout")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/customComponent/",activeClassName:g.a.active},"Custom Snackbar Component")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/customChildComponent/",activeClassName:g.a.active},"Extending Snackbar Component")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/examples/customComponentData/",activeClassName:g.a.active},"Custom Component Data"))))}var k=n(178),O=n.n(k);n(179);function S(e){var t=e.children,n=e.title;return Object(o.useEffect)(function(){r.a.highlightAll()}),i.a.createElement("div",null,i.a.createElement(s.Helmet,null,i.a.createElement("title",null,n?n+" |":""," React Snackbar Alert")),i.a.createElement(p,null),i.a.createElement("div",{id:O.a.body},i.a.createElement(E,null),i.a.createElement("main",{id:O.a.main},i.a.createElement("div",{id:O.a.contentContainer},i.a.createElement("h1",null,n),t),i.a.createElement(u,null))))}n.d(t,"a",function(){return S})},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SnackbarManager",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Snackbar",{enumerable:!0,get:function(){return r.default}});var a=o(n(168)),r=o(n(157));function o(e){return e&&e.__esModule?e:{default:e}}},168:function(e,t,n){"use strict";n(56),n(180),n(163),n(164),n(75),n(181),n(182),n(35),n(74),n(165),n(166),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(159)),r=c(n(158)),o=c(n(167)),i=n(184),s=c(n(183)),l=c(n(157));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(){var e=y(["\n  &.react-snackbar-alert__snackbar-container-enter {\n    opacity: 0;\n    transform: scaleY(0.1);\n  }\n\n  &.react-snackbar-alert__snackbar-container-enter-active {\n    opacity: 1;\n    transform: scaleY(1);\n    transition: all ","ms;\n  }\n\n  &.react-snackbar-alert__snackbar-container-exit {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n\n  &.react-snackbar-alert__snackbar-container-exit-active {\n    opacity: 0;\n    transform: scaleY(0.1);\n    transition: all ","ms;\n  }\n"]);return h=function(){return e},e}function v(){var e=y(["\n  position: fixed;\n  width: 20em;\n  top: ",";\n  bottom: ",";\n  left: ",";\n  z-index: 10000;\n"]);return v=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=o.default.div(v(),function(e){return 0===e.position.indexOf("top")?0:"inherit"},function(e){return 0===e.position.indexOf("bottom")?0:"inherit"},function(e){return function(e){switch(e){case"top":case"bottom":return"calc(50% - 10em)";case"top-left":case"bottom-left":return"0.5em";case"top-right":case"bottom-right":return"calc(100vw - 20.5em)"}}(e.position)}),E=o.default.div(h(),function(e){return e.animationTimeout},function(e){return e.animationTimeout}),k=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=p(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?d(a):r).timeouts={},n.startTimes={},n.paused={},n.state={notifications:[]},n.create=n.create.bind(d(n)),n.pause=n.pause.bind(d(n)),n.remove=n.remove.bind(d(n)),n.resume=n.resume.bind(d(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["default"].Component),n=t,(a=[{key:"create",value:function(e){var t=this;e.key=(0,s.default)(),void 0===e.timeout&&(e.timeout=this.props.timeout),this.setState({notifications:[].concat(m(this.state.notifications),[e])},function(){if(!e.sticky){t.startTimes[e.key]=Date.now();var n=setTimeout(function(){t.remove(e)},e.timeout);t.timeouts[e.key]=n}})}},{key:"remove",value:function(e){clearTimeout(this.timeouts[e.key]),this.setState({notifications:this.state.notifications.filter(function(t){return t!==e})}),delete this.timeouts[e.key],delete this.paused[e.key],delete this.startTimes[e.key]}},{key:"pause",value:function(e){if(!e.sticky){clearTimeout(this.timeouts[e.key]),delete this.timeouts[e.key];var t=(this.paused[e.key]||e.timeout)-(Date.now()-this.startTimes[e.key]);this.paused[e.key]=t}}},{key:"resume",value:function(e){var t=this;if(!e.sticky){var n=this.paused[e.key];this.startTimes[e.key]=Date.now();var a=setTimeout(function(){t.remove(e)},n);this.timeouts[e.key]=a}}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this.timeouts).forEach(function(t){clearTimeout(e.timeouts[t])})}},{key:"render",value:function(){var e=this,t=this.props,n=t.component,a=t.position,o=0===a.indexOf("top")?m(this.state.notifications).reverse():this.state.notifications;return r.default.createElement(g,{position:a},r.default.createElement(i.TransitionGroup,null,o.map(function(t){return r.default.createElement(i.CSSTransition,{key:t.key,timeout:t.animationTimeout||e.props.animationTimeout,classNames:"react-snackbar-alert__snackbar-container"},r.default.createElement(E,{animationTimeout:t.animationTimeout||e.props.animationTimeout},r.default.createElement(n,{progressBar:void 0!==t.progressBar?t.progressBar:e.props.progressBar,sticky:t.sticky,timeout:t.timeout,dismissable:void 0!==t.dismissable?t.dismissable:e.props.dismissable,onDismiss:function(){return e.remove(t)},onPause:function(){return e.pause(t)},onResume:function(){return e.resume(t)},pauseOnHover:void 0!==t.pauseOnHover?t.pauseOnHover:e.props.pauseOnHover,message:t.message,data:t.data,position:a})))})))}}])&&f(n.prototype,a),o&&f(n,o),t}();t.default=k,k.defaultProps={animationTimeout:250,component:l.default,dismissable:!1,pauseOnHover:!1,position:"bottom",progressBar:!0,timeout:3e3},k.propTypes={animationTimeout:a.default.number,component:a.default.elementType,dismissable:a.default.bool,pauseOnHover:a.default.bool,progressBar:a.default.bool,position:a.default.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right"]),timeout:a.default.number}}}]);
//# sourceMappingURL=component---src-pages-index-js-1d517954109908ba0cd5.js.map