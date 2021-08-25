(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(4),s=a.n(l),r=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch my-1",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],l=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{className:"mb-3",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",value:c,style:{backgroundColor:"light"===e.mode?"white":"#13466e",color:"dark"===e.mode?"white":"black"},onChange:function(e){l(e.target.value)},rows:"8"})}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toUpperCase();l(t),e.showAlert("Coverted to UpperCase","success")},children:"Convert to uppercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toLowerCase();l(t),e.showAlert("Coverted to LowerCase","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){for(var e=c.toLowerCase().split(""),t=0;t<=e.length-1;t+=2)e[t]=e[t].toUpperCase();e=e.join(""),l(e)},children:"AlTeRnAtInG CaSe"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){l("")},children:"Clear"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," words, ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(o.jsx)("h2",{children:"Text Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Enter something in the text to preview it here"})]})]})}i.defaultProps={title:"Set title here",about:"About"};var d=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})})};var h=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(r.a)(l,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"))}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{showAlert:m,heading:"Enter the text to analyze below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.b815e4b3.chunk.js.map