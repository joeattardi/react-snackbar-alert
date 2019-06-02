(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{149:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(159),s=a(160);function u(){var e=Object(t.useRef)(null);return r.a.createElement("div",null,r.a.createElement(s.SnackbarManager,{ref:e}),r.a.createElement("main",null,r.a.createElement("button",{onClick:function(){e.current.create({message:"Hello Snackbar!",sticky:!0,dismissable:!0})}},"Show Snackbar")))}var l=a(239),i=a.n(l),o=a(156);function b(){return r.a.createElement(c.a,{title:"Sticky Snackbars"},r.a.createElement("p",null,"A snackbar can be sticky, which means that it is not automatically removed."),r.a.createElement("p",null,"It is recommended that sticky snackbars are also user-dismissable, otherwise the snackbar can never be removed."),r.a.createElement(u,null),r.a.createElement(o.a,{src:i.a}))}a.d(n,"default",function(){return b})},156:function(e,n,a){"use strict";a.d(n,"a",function(){return u});var t=a(157),r=a.n(t),c=a(0),s=a.n(c);function u(e){var n=e.src,a=e.language;return s.a.createElement("pre",null,s.a.createElement("code",{className:"language-"+a,dangerouslySetInnerHTML:{__html:r()(n)}}))}u.defaultProps={language:"jsx"}},157:function(e,n,a){"use strict";var t=/["'&<>]/;e.exports=function(e){var n,a=""+e,r=t.exec(a);if(!r)return a;var c="",s=0,u=0;for(s=r.index;s<a.length;s++){switch(a.charCodeAt(s)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}u!==s&&(c+=a.substring(u,s)),u=s+1,c+=n}return u!==s?c+a.substring(u,s):c}},239:function(e,n){e.exports="import React, { useRef } from 'react';\n\nimport { SnackbarManager } from 'react-snackbar-alert';\n\nexport default function StickyExample() {\n  const snackbarManager = useRef(null);\n\n  function showSnackbar() {\n    snackbarManager.current.create({\n      message: 'Hello Snackbar!',\n      sticky: true,\n      dismissable: true\n    });\n  }\n\n  return (\n    <div>\n      <SnackbarManager ref={snackbarManager} />\n      <main>\n        <button onClick={showSnackbar}>Show Snackbar</button>\n      </main>\n    </div>\n  );\n}\n"}}]);
//# sourceMappingURL=component---src-pages-examples-sticky-js-1f951787fa2c8a9a4c0e.js.map