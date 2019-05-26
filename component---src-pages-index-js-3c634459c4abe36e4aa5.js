(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,n,a){"use strict";a.r(n);var t=a(147),r=a.n(t),c=(a(148),a(149),a(0)),l=a.n(c),o=a(150),m=(a(142),a(143));function s(){var e=Object(c.useRef)(null);return l.a.createElement("div",null,l.a.createElement(m.SnackbarManager,{ref:e}),l.a.createElement("main",null,l.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}function u(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Base"),l.a.createElement("p",null,"The default timeout is 3 seconds."),l.a.createElement(s,null),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-jsx"},"\nimport React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nexport default function BaseExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n        ")))}function i(){var e=Object(c.useRef)(null);return l.a.createElement("div",null,l.a.createElement(m.SnackbarManager,{animationTimeout:1e3,ref:e}),l.a.createElement("main",null,l.a.createElement("button",{onClick:function(){e.current.create({message:"Custom animation timeout!"})}},"Show Snackbar")))}function b(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Custom Animation Timeout"),l.a.createElement("p",null,"The snackbars are displayed with a simple animation. The duration of this animation can be changed in two ways:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Specifying the ",l.a.createElement("code",null,"animationTimeout")," prop on the ",l.a.createElement("code",null,"SnackbarManager")," component."),l.a.createElement("li",null,"Specifying the ",l.a.createElement("code",null,"animationTimeout")," property on the passed snackbar object.")),l.a.createElement(i,null),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-jsx"},"\nimport React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nexport default function CustomAnimationTimeoutExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Custom animation timeout!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager animationTimeout={1000} ref={snackbarManager} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n        ")))}function k(e){return l.a.createElement(m.Snackbar,e,l.a.createElement("h2",{style:{margin:0}},e.message))}function p(){var e=Object(c.useRef)(null);return l.a.createElement("div",null,l.a.createElement(m.SnackbarManager,{ref:e,component:k}),l.a.createElement("main",null,l.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}function d(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Extending the Snackbar Component"),l.a.createElement("p",null,"You can also extend the default ",l.a.createElement("code",null,"Snackbar")," component. This allows you to keep the default styling and animation, but also add your own child content to the snackbar."),l.a.createElement("p",null,"To extend the default component, import the ",l.a.createElement("code",null,"Snackbar")," component and use it in your custom component. Make sure to pass all received props along to the ",l.a.createElement("code",null,"Snackbar")," component, or else the animations won't work."),l.a.createElement(p,null),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-jsx"},"\nimport React, { useRef } from 'react';\n\nimport { Snackbar, SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nfunction CustomSnackbarComponent(props) {\n  return (\n    <Snackbar {...props}>\n      <h2 style={{margin: 0}}>{props.message}</h2>\n    </Snackbar>\n  );\n}\n\nexport default function CustomComponentExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n        ")))}function E(e){return l.a.createElement(m.Snackbar,e,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{margin:"0.5em",flexGrow:1}},e.message),l.a.createElement("button",{style:{marginRight:"0.5em"}},e.data.action)))}function f(){var e=Object(c.useRef)(null);return l.a.createElement("div",null,l.a.createElement(m.SnackbarManager,{ref:e,component:E}),l.a.createElement("main",null,l.a.createElement("button",{onClick:function(){e.current.create({data:{action:"Retry"},message:"⚠️ Connection Error"})}},"Show Snackbar")))}function g(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Passing Custom Data to a Custom Component"),l.a.createElement("p",null,"You can also create more rich snackbar notifications by passing arbitrary data that can be used when rendering a custom snackbar component."),l.a.createElement("p",null,"Simply pass a ",l.a.createElement("code",null,"data")," property in the snackbar object passed to ",l.a.createElement("code",null,"SnackbarManager.create"),", then reference the data attributes in your custom component's ",l.a.createElement("code",null,"render")," function."),l.a.createElement(f,null),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-jsx"},"\nimport React, { useRef } from 'react';\n\nimport { Snackbar, SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nfunction CustomSnackbarComponent(props) {\n  return (\n    <Snackbar {...props}>\n      <div style={{display: 'flex', justifyContent: 'center'}}>\n        <div style={{margin: '0.5em', flexGrow: 1}}>{props.message}</div>\n        <button style={{marginRight: '0.5em'}}>{props.data.action}</button>\n      </div>\n    </Snackbar>\n  );\n}\n\nexport default function CustomComponentDataExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      data: {\n        action: 'Retry'\n      },\n      message: '⚠️ Connection Error'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n        ")))}function h(e){var n=e.message;return l.a.createElement("div",{style:{background:"#FF0000",color:"#FFFFFF",padding:"0.5em",marginBottom:"0.5em"}},n)}function S(){var e=Object(c.useRef)(null);return l.a.createElement("div",null,l.a.createElement(m.SnackbarManager,{ref:e,component:h}),l.a.createElement("main",null,l.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!"})}},"Show Snackbar")))}function C(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Custom Snackbar Component"),l.a.createElement("p",null,"For greater customization of the snackbar component, a custom component can be used. Create your custom snackbar component and pass it as the ",l.a.createElement("code",null,"component")," prop to the ",l.a.createElement("code",null,"SnackbarManager"),". The component will receive a ",l.a.createElement("code",null,"message")," prop with the message to display."),l.a.createElement("p",null,"Note that if you use a custom component, you will lose the default animations."),l.a.createElement(S,null),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-jsx"},"\nimport React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nfunction CustomSnackbarComponent({ message }) {\n  return (\n    <div style={{\n      background: '#FF0000',\n      color: '#FFFFFF',\n      padding: '0.5em',\n      marginBottom: '0.5em'\n    }}>\n      {message}\n    </div>\n  );\n}\n\nexport default function CustomComponentExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!'\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} component={CustomSnackbarComponent} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n        ")))}function v(){var e=Object(c.useRef)(null);return l.a.createElement("div",null,l.a.createElement(m.SnackbarManager,{ref:e}),l.a.createElement("main",null,l.a.createElement("button",{onClick:function(){e.current.create({message:"5 second timeout!",timeout:5e3})}},"Show Snackbar")))}function y(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Custom Timeout"),l.a.createElement("p",null,"The timeout can be changed by setting the `timeout` property of the passed snackbar object."),l.a.createElement(v,null),l.a.createElement("pre",null,l.a.createElement("code",{className:"language-jsx"},"\nimport React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\nimport 'react-snackbar-alert/styles/react-snackbar-alert.css';\n\nexport default function CustomTimeoutExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: '5 second timeout!',\n      timeout: 5000\n    });\n  } \n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n        ")))}var w=a(171),M=a.n(w);function R(){return Object(c.useEffect)(function(){r.a.highlightAll()}),l.a.createElement("div",null,l.a.createElement(o.Helmet,null,l.a.createElement("title",null,"React Snackbar Alert")),l.a.createElement("header",{id:M.a.header},l.a.createElement("h1",null,"React Snackbar Alert"),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},l.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},l.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"})))),l.a.createElement("main",{id:M.a.main},l.a.createElement("div",null,l.a.createElement("p",null,'React Snackbar Alert is a very simple library for "snackbar" style notifications. Snackbars appear at the bottom of the viewport, and multiple snackbars can be stacked.')),l.a.createElement("div",{id:M.a.exampleCode},l.a.createElement("h2",null,"Code Examples"),l.a.createElement(u,null),l.a.createElement(y,null),l.a.createElement(b,null),l.a.createElement(C,null),l.a.createElement(d,null),l.a.createElement(g,null))))}a.d(n,"default",function(){return R})}}]);
//# sourceMappingURL=component---src-pages-index-js-3c634459c4abe36e4aa5.js.map