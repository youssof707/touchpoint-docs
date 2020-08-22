(this["webpackJsonptouchpoint-docs"]=this["webpackJsonptouchpoint-docs"]||[]).push([[7],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(48),r=n(0),l=n.n(r),o=n(35);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=Object(r.useState)({width:"undefined"!==typeof window?window.innerWidth:null,height:"undefined"!==typeof window?window.innerHeight:null}),n=Object(a.a)(t,2),l=n[0],c=n[1];function i(t){return t<e}var s=Object(r.useState)(i("undefined"!==typeof window?window.innerWidth:null)),u=Object(a.a)(s,2),m=u[0],d=u[1];return Object(r.useEffect)((function(){function e(){"undefined"!==typeof window&&(c({width:window.innerWidth,height:window.innerHeight}),d(i(window.innerWidth)))}return"undefined"!==typeof window&&window.addEventListener("resize",e),function(){"undefined"!==typeof window&&window.removeEventListener("resize",e)}}),[]),Object(o.a)(Object(o.a)({},l),{},{narrow:m})}n(52);var i=n(13),s=n.n(i),u=(n(53),n(11)),m=n(42),d=n(43);function h(e){return l.a.createElement("div",{className:"NavBar",style:{backgroundImage:"url("+s.a+")"}},l.a.createElement("div",{className:"navContainer"},l.a.createElement("div",{className:"leftSide"},l.a.createElement("div",{className:"menuContainer"},l.a.createElement("button",{className:"mainButton",onClick:function(){e.setSideBarOpen(!e.sideBarOpen)}},l.a.createElement(m.a,{icon:d.a}))),l.a.createElement("span",{className:"title"},l.a.createElement(u.Link,{to:"/"},"TouchPoint ",e.subTitle),l.a.createElement("span",{className:"subTitle"},e.title?" - "+e.title:"")))))}n(58);function E(e){var t=c().narrow;return l.a.createElement("div",{className:e.open?"SideBar open":"SideBar closed"},l.a.createElement("div",{className:"content",onClick:function(){e.setOpen&&t&&e.setOpen(!1)}},e.children))}var f=n(1),p=n(59),D=n.n(p);n(19);function b(){return l.a.createElement("div",{className:"Fallback small"},l.a.createElement("div",{className:"logoContainer"},l.a.createElement("img",{src:D.a})))}var v=n(60);function k(e){var t=c().narrow,o=Object(r.useState)(!t),i=Object(a.a)(o,2),s=i[0],u=i[1];return l.a.createElement("div",{className:"Docs"},l.a.createElement(h,{subTitle:"Docs",setSideBarOpen:u,sideBarOpen:s,title:e.title}),l.a.createElement("div",{className:"docsContainer"},l.a.createElement(E,{open:s,setOpen:u},l.a.createElement("h3",null,"Getting Started"),l.a.createElement(v.HashLink,{to:"/Docs/CreateApp",className:"shiftLeft"},"Create a new app"),l.a.createElement(v.HashLink,{to:"/Docs/CreateModule",className:"shiftLeft"},"Create a module"),l.a.createElement(v.HashLink,{to:"/Docs/Permissions",className:"shiftLeft"},"Permissions"),l.a.createElement(v.HashLink,{to:"/Docs/SystemAPI",className:"shiftLeft"},"System API"),l.a.createElement(v.HashLink,{to:"/Docs/SettingsAPI",className:"shiftLeft"},"Settings API"),l.a.createElement("h3",null,"Components"),l.a.createElement("h4",null,"Core"),l.a.createElement(v.HashLink,{to:"/Docs/Core#AppToolbar"},"AppToolbar"),l.a.createElement(v.HashLink,{to:"/Docs/Core#AppFooter"},"AppFooter"),l.a.createElement(v.HashLink,{to:"/Docs/Core#AppDrawer"},"AppDrawer"),l.a.createElement("h4",null,"Containers"),l.a.createElement(v.HashLink,{to:"/Docs/SplitScreen"},"SplitScreen"),l.a.createElement(v.HashLink,{to:"/Docs/InfoCard"},"InfoCard"),l.a.createElement(v.HashLink,{to:"/Docs/Tabs#InfoTab"},"InfoTab"),l.a.createElement(v.HashLink,{to:"/Docs/Tabs#InfoTabContainer"},"InfoTabContainer"),l.a.createElement(v.HashLink,{to:"/Docs/Tabs#ControlledTabContainer"},"ControlledTabContainer"),l.a.createElement(v.HashLink,{to:"/Docs/Dock"},"Dock"),l.a.createElement(v.HashLink,{to:"/Docs/ControlBar"},"ControlBar"),l.a.createElement("h4",null,"Inputs"),l.a.createElement(v.HashLink,{to:"/Docs/Text#TextBox"},"TextBox"),l.a.createElement(v.HashLink,{to:"/Docs/Text#CommentBox"},"CommentBox"),l.a.createElement(v.HashLink,{to:"/Docs/Text#RadioGroup"},"SearchBar"),l.a.createElement(v.HashLink,{to:"/Docs/Select#ComboBox"},"ComboBox"),l.a.createElement(v.HashLink,{to:"/Docs/Select#CheckBox"},"CheckBox"),l.a.createElement(v.HashLink,{to:"/Docs/Select#CheckButton"},"CheckButton"),l.a.createElement(v.HashLink,{to:"/Docs/Radio#RadioGroup"},"RadioGroup"),l.a.createElement(v.HashLink,{to:"/Docs/Buttons#FreeButton"},"FreeButton"),l.a.createElement(v.HashLink,{to:"/Docs/Buttons#ConfirmButton"},"ConfirmButton"),l.a.createElement(v.HashLink,{to:"/Docs/Buttons#CoreButton"},"CoreButton"),l.a.createElement("h4",null,"Display"),l.a.createElement(v.HashLink,{to:"/Docs/MainTable"},"MainTable"),l.a.createElement(v.HashLink,{to:"/Docs/MenuButton"},"MenuButton"),l.a.createElement(v.HashLink,{to:"/Docs/Popups"},"PopupCard"),l.a.createElement("h4",null,"Hooks"),l.a.createElement(v.HashLink,{to:"/Docs/useDataset"},"useDataset"),l.a.createElement(v.HashLink,{to:"/Docs/SystemAPI"},"useSystem")),l.a.createElement("div",{className:"docsContent",style:{width:s?"calc(100% - 300px)":"100%"}},l.a.createElement(l.a.Suspense,{fallback:b},l.a.createElement(f.g,null,l.a.createElement(f.d,{path:"/Docs/CreateApp",render:function(){var e=l.a.lazy((function(){return n.e(10).then(n.bind(null,103))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/CreateModule",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,84))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Permissions",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,85))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/SystemAPI",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,86))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/SettingsAPI",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,87))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Core",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,88))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/SplitScreen",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,89))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/InfoCard",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,90))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Tabs",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,91))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Dock",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,92))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/ControlBar",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,93))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Text",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,94))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Select",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,95))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Buttons",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,96))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/MainTable",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,97))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/MenuButton",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,98))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/Popups",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,99))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/useDataset",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,100))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs/SystemAPI",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,86))}));return l.a.createElement(e,null)}}),l.a.createElement(f.d,{path:"/Docs",render:function(){var e=l.a.lazy((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,84))}));return l.a.createElement(e,null)}}))),l.a.createElement("div",{className:"gap",style:{height:"100px"}}))))}},52:function(e,t,n){},53:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){e.exports=n.p+"static/media/logo-red.7427f326.svg"}}]);
//# sourceMappingURL=7.8b021665.chunk.js.map