(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(160),o=a(156),u=a(162);function l(){return r.a.createElement(u.SnackbarProvider,{timeout:5e3},r.a.createElement(i,null))}var i=Object(u.wrapComponent)(function(e){var n=e.createSnackbar;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){n({message:"Hello Snackbar!"})}},"Show Snackbar"))}),s=a(229),m=a.n(s);function b(){return r.a.createElement(c.a,{title:"Custom Timeout"},r.a.createElement("p",null,"By default, a snackbar is removed after 3 seconds. A custom timeout can be specified in one of two ways:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Setting the ",r.a.createElement("code",null,"timeout")," prop on the"," ",r.a.createElement("code",null,"SnackbarManager")," for all snackbars"),r.a.createElement("li",null,"Setting the ",r.a.createElement("code",null,"timeout")," property on the passed snackbar object for a specific snackbar")),r.a.createElement(l,null),r.a.createElement(o.a,{src:m.a}))}a.d(n,"default",function(){return b})},156:function(e,n,a){"use strict";a.d(n,"a",function(){return u});var t=a(157),r=a.n(t),c=a(0),o=a.n(c);function u(e){var n=e.src,a=e.language;return o.a.createElement("pre",null,o.a.createElement("code",{className:"language-"+a,dangerouslySetInnerHTML:{__html:r()(n)}}))}u.defaultProps={language:"jsx"}},157:function(e,n,a){"use strict";var t=/["'&<>]/;e.exports=function(e){var n,a=""+e,r=t.exec(a);if(!r)return a;var c="",o=0,u=0;for(o=r.index;o<a.length;o++){switch(a.charCodeAt(o)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}u!==o&&(c+=a.substring(u,o)),u=o+1,c+=n}return u!==o?c+a.substring(u,o):c}},229:function(e,n){e.exports="import React from 'react';\n\nimport { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';\n\nexport default function CustomTimeoutExample() {\n  return (\n    <SnackbarProvider timeout={5000}>\n      <Container />\n    </SnackbarProvider>\n  );\n}\n\nconst Container = wrapComponent(function({ createSnackbar }) {\n  function showSnackbar() {\n    createSnackbar({\n      message: 'Hello Snackbar!'\n    });\n  }\n\n  return (\n    <div>\n      <button onClick={showSnackbar}>Show Snackbar</button>\n    </div>\n  );\n});\n"}}]);
//# sourceMappingURL=component---src-pages-examples-custom-timeout-js-a427b8bf9dedfd6f4fe4.js.map