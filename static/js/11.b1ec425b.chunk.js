(this["webpackJsonptouchpoint-docs"]=this["webpackJsonptouchpoint-docs"]||[]).push([[11],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(0),o=n.n(a),l=n(32),c=n(39),r=n(11),u=n(31),s=n(35);function p(){function e(){var e=Object(u.x)().Popup;return o.a.createElement(u.i,{onClick:function(){e.open(o.a.createElement(u.p,{title:"TouchPoint UI"},"Hello there!"))}},"Open Popup")}return o.a.createElement("div",null,o.a.createElement("h1",null,"Popups"),"Create interactive information dialogs for your users.",o.a.createElement("h3",null,"Creating a popup"),"You can create popups anywhere in your TouchPoint app through the ",o.a.createElement(r.Link,{to:"/Docs/SystemAPI"},"System API"),".",o.a.createElement("br",null),"To open a popup, use System.Popup.open( JSXContent )",o.a.createElement("br",null),"To close the open popup. use System.Popup.close( )",o.a.createElement(l.a,{gist:"8d0898a7cc5467a8d4855eb7aaf33cd2"},o.a.createElement(e,null)),o.a.createElement("h3",null,"PopupCard Component"),"The container for all your popup content. By default, clicking the background will close the popup.",o.a.createElement(s.a,{title:"PopupCard props",items:[{name:"title",type:"string",desc:"Title for the card"},{name:"onOpen",type:"function( )",desc:"Callback that runs when the popup is opened"},{name:"onClose",type:"function( )",desc:"Callback that runs when the popup is closed"},{name:"forceOpen",type:"boolean",desc:"Removes the close button and disables clicking the background to close. Make sure you implement your own way of closing the popup"},{name:"stripeCoor",type:"string (css color)",desc:"Colors the stripe of the card"},{name:"style",type:"object (style)",desc:"Optional custom styling"},{name:"locked",type:"boolean",desc:"Locks all content in the popup"}]}),o.a.createElement(c.a,null,"Note: by default popups do not inherit a locked prop from a parent module. "))}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(37),o=n(0),l=n.n(o),c=(n(33),n(31)),r=n(34);function u(e){var t=Object(c.x)().io;return l.a.createElement(c.o,{moduleName:"ExampleModule"},t.children)}function s(e){var t={ExampleModule:{name:"ExampleModule",component:u}};return l.a.createElement("div",{className:"Example",style:e.style},l.a.createElement("div",{className:"exampleContainer",style:Object(a.a)(Object(a.a)({},e.style),{},{margin:e.gist?"0px 7px":null})},l.a.createElement(c.v,{homeModule:"ExampleModule",modules:t,saveSettings:function(e,t){void 0!==typeof localStorage&&localStorage.setItem(e,t)},getSettings:function(e){if(void 0!==typeof localStorage)return localStorage.getItem(e)},io:{children:e.children}})),e.gist?l.a.createElement("div",{className:"sourceCode"},l.a.createElement(r.a,{id:e.gist})):null)}},33:function(e,t,n){},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a);n(36);function l(e){return o.a.createElement("div",{className:"PropList"},o.a.createElement("h5",null,e.title?e.title:"Props"),o.a.createElement("table",null,o.a.createElement("tbody",null,e.items.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",{className:"name"},e.name),o.a.createElement("td",{className:"type"},e.type),o.a.createElement("td",{className:"desc"},e.desc))})))))}},36:function(e,t,n){},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a);function l(e){return o.a.createElement("div",{className:"Note",style:e.style},o.a.createElement("i",null,e.children))}}}]);
//# sourceMappingURL=11.b1ec425b.chunk.js.map