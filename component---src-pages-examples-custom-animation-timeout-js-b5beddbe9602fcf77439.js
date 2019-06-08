(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(158),c=t(159),i=t(170);function o(){return r.a.createElement(i.SnackbarProvider,{animationTimeout:1e3},r.a.createElement(m,null))}var m=Object(i.wrapComponent)(function(e){var a=e.createSnackbar;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){a({message:"Hello Snackbar!"})}},"Show Snackbar"))}),s=t(189),u=t.n(s);function E(){return r.a.createElement(l.a,{title:"Custom Animation Timeout"},r.a.createElement("p",null,"The snackbars are displayed with a simple animation. The duration of this animation can be changed in two ways:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Specifying the ",r.a.createElement("code",null,"animationTimeout")," prop on the"," ",r.a.createElement("code",null,"SnackbarManager")," component."),r.a.createElement("li",null,"Specifying the ",r.a.createElement("code",null,"animationTimeout")," property on the passed snackbar object.")),r.a.createElement(o,null),r.a.createElement(c.a,{src:u.a}))}t.d(a,"default",function(){return E})},156:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},157:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(55),o=t(2),m=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},158:function(e,a,t){"use strict";var n=t(161),r=t.n(n),l=(t(162),t(163),t(0)),c=t.n(l),i=t(164),o=t(165),m=t.n(o);function s(){return c.a.createElement("footer",{id:m.a.footer},"Created with 💙 by ",c.a.createElement("a",{href:"https://joeattardi.codes"},"Joe Attardi"),".")}var u=t(166),E=t.n(u);function d(e){var a=e.onMenuToggle;return c.a.createElement("header",{id:E.a.header},c.a.createElement("h1",null,c.a.createElement("button",{id:E.a.menuButton,onClick:a},"☰")," ","🍫 React Snackbar Alert"),c.a.createElement("div",{id:E.a.headerLinks},c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/joeattardi/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/joeattardi/react-snackbar-alert.svg?style=social"}))),c.a.createElement("div",null,c.a.createElement("a",{href:"https://npmjs.com/package/react-snackbar-alert"},c.a.createElement("img",{src:"https://img.shields.io/npm/v/react-snackbar-alert.svg"})))))}var v=t(4),p=t.n(v),b=t(33),f=t.n(b);t(156),c.a.createContext({});p.a.object,p.a.string.isRequired,p.a.func,p.a.func;var h=t(167),g=t.n(h);function k(e){var a=e.visible;return c.a.createElement("nav",{id:g.a.sidebar,className:a?g.a.open:g.a.closed},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:"/",activeClassName:g.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/gettingStarted/",activeClassName:g.a.active},"Getting Started")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/api/",activeClassName:g.a.active},"API"))),c.a.createElement("h2",null,"Examples"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/base/",activeClassName:g.a.active},"Base")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/position/",activeClassName:g.a.active},"Position")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/pauseOnHover/",activeClassName:g.a.active},"Pause on Hover")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/noProgressBar/",activeClassName:g.a.active},"No Progress Bar")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/dismissable/",activeClassName:g.a.active},"Dismissable")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/sticky/",activeClassName:g.a.active},"Sticky")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customTimeout/",activeClassName:g.a.active},"Custom Timeout")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customAnimationTimeout/",activeClassName:g.a.active},"Custom Animation Timeout")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customComponent/",activeClassName:g.a.active},"Custom Snackbar Component")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customChildComponent/",activeClassName:g.a.active},"Extending Snackbar Component")),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/examples/customComponentData/",activeClassName:g.a.active},"Custom Component Data"))))}var C=t(168),S=t.n(C);t(169);function x(e){var a=e.children,t=e.title;Object(l.useEffect)(function(){r.a.highlightAll()});var n=Object(l.useState)(!1),o=n[0],m=n[1];return c.a.createElement("div",null,c.a.createElement(i.Helmet,null,c.a.createElement("title",null,t?t+" |":""," React Snackbar Alert"),c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"})),c.a.createElement(d,{onMenuToggle:function(){return m(!o)}}),c.a.createElement("div",{id:S.a.body},c.a.createElement(k,{visible:o}),c.a.createElement("div",{id:S.a.main},c.a.createElement("div",{id:S.a.contentContainer},c.a.createElement("h1",null,t),a),c.a.createElement(s,null))))}t.d(a,"a",function(){return x})},159:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(160),r=t.n(n),l=t(0),c=t.n(l);function i(e){var a=e.src,t=e.language;return c.a.createElement("pre",null,c.a.createElement("code",{className:"language-"+t,dangerouslySetInnerHTML:{__html:r()(a)}}))}i.defaultProps={language:"jsx"}},160:function(e,a,t){"use strict";var n=/["'&<>]/;e.exports=function(e){var a,t=""+e,r=n.exec(t);if(!r)return t;var l="",c=0,i=0;for(c=r.index;c<t.length;c++){switch(t.charCodeAt(c)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}i!==c&&(l+=t.substring(i,c)),i=c+1,l+=a}return i!==c?l+t.substring(i,c):l}},189:function(e,a){e.exports="import React from 'react';\n\nimport { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';\n\nexport default function CustomAnimationTimeoutExample() {\n  return (\n    <SnackbarProvider animationTimeout={1000}>\n      <Container />\n    </SnackbarProvider>\n  );\n}\n\nconst Container = wrapComponent(function({ createSnackbar }) {\n  function showSnackbar() {\n    createSnackbar({\n      message: 'Hello Snackbar!'\n    });\n  }\n\n  return (\n    <div>\n      <button onClick={showSnackbar}>Show Snackbar</button>\n    </div>\n  );\n});\n"}}]);
//# sourceMappingURL=component---src-pages-examples-custom-animation-timeout-js-b5beddbe9602fcf77439.js.map