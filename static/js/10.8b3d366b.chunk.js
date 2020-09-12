(this["webpackJsonptouchpoint-docs"]=this["webpackJsonptouchpoint-docs"]||[]).push([[10],{31:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(35),l=n(0),o=n.n(l),r=(n(32),n(34)),c=n(33);function m(e){var t=Object(r.o)().io;return o.a.createElement(r.i,{moduleName:"ExampleModule"},t.children)}function u(e){var t={ExampleModule:{name:"ExampleModule",component:m}};return o.a.createElement("div",{className:"Example",style:e.style},o.a.createElement("div",{className:"exampleContainer",style:Object(a.a)(Object(a.a)({},e.style),{},{margin:e.gist?"0px 7px":null})},o.a.createElement(r.m,{homeModule:"ExampleModule",modules:t,saveSettings:function(e,t){void 0!==typeof localStorage&&localStorage.setItem(e,t)},getSettings:function(e){if(void 0!==typeof localStorage)return localStorage.getItem(e)},io:{children:e.children}})),e.gist?o.a.createElement("div",{className:"sourceCode"},o.a.createElement(c.a,{id:e.gist})):null)}},32:function(e,t,n){},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),l=n.n(a);n(38);function o(e){return l.a.createElement("div",{className:"PropList"},l.a.createElement("h5",null,e.title?e.title:"Props"),l.a.createElement("table",null,l.a.createElement("tbody",null,e.items.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{className:"name"},e.name),l.a.createElement("td",{className:"type"},e.type),l.a.createElement("td",{className:"desc"},e.desc))})))))}},38:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(0),l=n.n(a),o=n(31),r=(n(33),n(34)),c=n(11),m=n(37);function u(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Core Components"),"Building blocks for the app. Core components are usually present app-wide and remain on screen for all modules.",l.a.createElement("br",null),l.a.createElement("h3",{id:"AppToolbar"},"AppToolbar"),"Remains at the top of the screen, above all modules. Can be used for app-wide settings, user management, or anything else that isn't module-specific.",l.a.createElement("br",null),"When used with the system API, you can add menus to change themes or open popup dialogs.",l.a.createElement("br",null),"Add this component as a direct Child of your ",l.a.createElement(c.Link,{to:"/Docs/CreateApp"},"TouchPointApp")," component.",l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement(m.a,{items:[{name:"Label",type:"String",desc:"Label for the screen"}]}),l.a.createElement(o.a,{gist:"2b6c8d17a80500f162a97c12d4d23d32"},l.a.createElement(r.a,{label:"TouchPoint Toolbar"},l.a.createElement(r.h,{menuContent:l.a.createElement("div",null,l.a.createElement("button",null,"Sign In"),l.a.createElement("button",null,"Sign Out"),l.a.createElement("button",null,"About"))},"User"),l.a.createElement(r.h,{menuContent:l.a.createElement("div",null,l.a.createElement("button",null,"Theme"),l.a.createElement("button",null,"Account"),l.a.createElement("button",null,"View"))},"Settings"),l.a.createElement(r.h,{menuContent:l.a.createElement("div",null,l.a.createElement("button",null,"Option"),l.a.createElement("button",null,"More"),l.a.createElement("button",null,"View"))},"Example"))),l.a.createElement("h3",{id:"AppFooter"},"AppFooter"),"Similar to AppToolbar but remains at the bottom of the screen instead of the top.",l.a.createElement("h3",{id:"AppDrawer"},"AppDrawer"),"Adds a side menu to your app that can be opened anywhere by calling ",l.a.createElement(c.Link,{to:"/Docs/SystemAPI"},"System.Drawer.open()"))}}}]);
//# sourceMappingURL=10.8b3d366b.chunk.js.map