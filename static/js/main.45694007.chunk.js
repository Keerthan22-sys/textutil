(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(14),a(1)),s=(a(15),a(2)),i=a.n(s);function m(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable dark mode switch"))))))}function u(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.headings),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){console.log("On change"),c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Uppercase was clicked"+r);var t=r.toUpperCase();c(t),e.showAlert("Converted to upper case","success")}},"Convert to upper case"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Lowercase was clicked"+r);var t=r.toLowerCase();c(t),e.showAlert("Converted to lower case","success")}},"Convert to lower case"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c(""),e.showAlert("Text is cleared","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Removed extraspace","success")}},"Remove extra spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters "),l.a.createElement("p",null," ",.008*r.split(" ").length," minutes read "),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in textbox to preview here")))}function d(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}m.protoTypes={title:i.a.string.isRequired,About:i.a.string.isRequired},m.defaultProps={title:"Set Title here",About:"About"};var b=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(o.a)(c,2),i=s[0],b=s[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",g("Dark mode has been enabled","success"),document.title="TextUtils - Dark mode"):(r("light"),document.body.style.backgroundColor="white",g("Light mode has been enabled","success"),document.title="TextUtils - Light mode")}}),l.a.createElement(d,{alert:i}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(u,{showAlert:g,headings:"Enter the text to analyze",mode:a})))},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),g()},5:function(e,t,a){e.exports=a(18)}},[[5,1,2]]]);
//# sourceMappingURL=main.45694007.chunk.js.map