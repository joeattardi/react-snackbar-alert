(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(170),c=t(198),o=t.n(c),m=t(199),s=t.n(m),i=t(166);t(154);function u(e){var a=e.message;return r.a.createElement("div",{style:{background:"#FF0000",color:"#FFFFFF",padding:"0.5em",marginBottom:"0.5em"}},a)}function p(){var e=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement(i.SnackbarManager,{ref:e,component:u}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}var E=t(153),d=t(155);function f(){return r.a.createElement(E.a,{title:"Custom Snackbar Component"},r.a.createElement("p",null,"For greater customization of the snackbar component, a custom component can be used. Create your custom snackbar component and pass it as the ",r.a.createElement("code",null,"component")," prop to the ",r.a.createElement("code",null,"SnackbarManager"),". The component will receive a ",r.a.createElement("code",null,"message")," prop with the message to display."),r.a.createElement("p",null,"Note that if you use a custom component, you will lose the default animations."),r.a.createElement(p,null),r.a.createElement(l.d,{forceRenderTabPanel:!0},r.a.createElement(l.b,null,r.a.createElement(l.a,null,"CustomComponentExample.js"),r.a.createElement(l.a,null,"CustomSnackbarComponent.js")),r.a.createElement(l.c,null,r.a.createElement(d.a,{src:o.a})),r.a.createElement(l.c,null,r.a.createElement(d.a,{src:s.a}))))}t.d(a,"default",function(){return f})},151:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},152:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),o=t(55),m=t(2),s=function(e){var a=e.location,t=m.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},153:function(e,a,t){"use strict";var n=t(157),r=t.n(n),l=(t(158),t(159),t(0)),c=t.n(l),o=t(160),m=t(161),s=t.n(m);function i(){return c.a.createElement("footer",{id:s.a.footer},"Created with 💙 by ",c.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var u=t(162),p=t.n(u);function E(){return c.a.createElement("header",{id:p.a.header},c.a.createElement("h1",null,"🍫 React Snackbar Alert"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),c.a.createElement("div",null,c.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"}))))}var d=t(4),f=t.n(d),b=t(33),v=t.n(b);t(151),c.a.createContext({});f.a.object,f.a.string.isRequired,f.a.func,f.a.func;var g=t(163),C=t.n(g);function h(){return c.a.createElement("nav",{id:C.a.sidebar},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(v.a,{to:"/",activeClassName:C.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/gettingStarted",activeClassName:C.a.active},"Getting Started")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/api",activeClassName:C.a.active},"API"))),c.a.createElement("h2",null,"Examples"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/base",activeClassName:C.a.active},"Base")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customTimeout",activeClassName:C.a.active},"Custom Timeout")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customAnimationTimeout",activeClassName:C.a.active},"Custom Animation Timeout")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customComponent",activeClassName:C.a.active},"Custom Snackbar Component")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customChildComponent",activeClassName:C.a.active},"Extending Snackbar Component")),c.a.createElement("li",null,c.a.createElement(v.a,{to:"/examples/customComponentData",activeClassName:C.a.active},"Custom Component Data"))))}var k=t(164),S=t.n(k);t(154),t(165);function F(e){var a=e.children,t=e.title;return Object(l.useEffect)(function(){r.a.highlightAll()}),c.a.createElement("div",null,c.a.createElement(o.Helmet,null,c.a.createElement("title",null,t?t+" |":""," React Snackbar Alert")),c.a.createElement(E,null),c.a.createElement("div",{id:S.a.body},c.a.createElement(h,null),c.a.createElement("main",{id:S.a.main},c.a.createElement("div",{id:S.a.contentContainer},c.a.createElement("h1",null,t),a),c.a.createElement(i,null))))}t.d(a,"a",function(){return F})},155:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(156),r=t.n(n),l=t(0),c=t.n(l);function o(e){var a=e.src,t=e.language;return c.a.createElement("pre",null,c.a.createElement("code",{className:"language-"+t,dangerouslySetInnerHTML:{__html:r()(a)}}))}o.defaultProps={language:"jsx"}},198:function(e,a){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nimport CustomSnackbarComponent from './CustomSnackbarComponent';\n\nexport default function CustomComponentExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"},199:function(e,a){e.exports="import React from 'react';\n\nexport default function CustomSnackbarComponent({ message }) {\n  return (\n    <div style={{\n      background: '#FF0000',\n      color: '#FFFFFF',\n      padding: '0.5em',\n      marginBottom: '0.5em'\n    }}>\n      {message}\n    </div>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-custom-component-js-79ccef4d0b5485da6db4.js.map