(this["webpackJsonptouchpoint-docs"]=this["webpackJsonptouchpoint-docs"]||[]).push([[20],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(40),l=n(0),o=n.n(l),u=n(32),r=n(31);function c(){var e=Object(l.useState)(0),t=Object(a.a)(e,2),n=t[0],u=t[1];return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return u(n+1)}},"Increase"),o.a.createElement("button",{onClick:function(){return u(n-1)}},"Decrease"),o.a.createElement(r.j,{stripe:!0},o.a.createElement("label",null,"Value ="),n))}function i(){return o.a.createElement("div",null,o.a.createElement("h1",null,"MenuButton"),"Create customizable dropdown menus, with support for nested menus.",o.a.createElement("br",null),"MenuButtons are similar regular buttons, except they take a menuContent prop (either a component, or some JSX) which becomes a dropdown menu. By default, MenuButtons will blend into their surroundings, but you can pass a 'style' prop to customize them.",o.a.createElement("br",null),o.a.createElement("br",null),"Menus will break out of any container, even if overflow is hidden.",o.a.createElement("p",null),o.a.createElement(u.a,{gist:"62ea80fac1e40edd1e53ac9127344e14"},o.a.createElement(r.n,{style:{backgroundColor:"white",borderRadius:"10px"},menuContent:o.a.createElement("div",null,o.a.createElement("button",null,"Option 1"),o.a.createElement("button",null,"Option 2"),o.a.createElement("button",null,"Option 3"),o.a.createElement("button",null,"Option 4"),o.a.createElement(r.n,{menuContent:o.a.createElement("div",null,o.a.createElement("button",null,"More Options"),o.a.createElement("button",null,"More Options"),o.a.createElement("button",null,"More Options"),o.a.createElement("button",null,"More Options"))},"Submenu Time!"))},"Open")),"Like the example above, putting a menuButton inside the menuContent creates a sub menu.",o.a.createElement("h3",null,"Complex Menu Content"),"You can put anything inside the menu, not just buttons. If you want to use hooks/state in the menuContent, define a component like normal, and pass it to the menuContent like below.",o.a.createElement(u.a,{gist:"051628434e5ccaee492cc6fa63221963"},o.a.createElement(r.n,{style:{backgroundColor:"white",borderRadius:"10px"},menuContent:c},"Complex Menus")))}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(37),l=n(0),o=n.n(l),u=(n(33),n(31)),r=n(34);function c(e){var t=Object(u.x)().io;return o.a.createElement(u.o,{moduleName:"ExampleModule"},t.children)}function i(e){var t={ExampleModule:{name:"ExampleModule",component:c}};return o.a.createElement("div",{className:"Example",style:e.style},o.a.createElement("div",{className:"exampleContainer",style:Object(a.a)(Object(a.a)({},e.style),{},{margin:e.gist?"0px 7px":null})},o.a.createElement(u.v,{homeModule:"ExampleModule",modules:t,saveSettings:function(e,t){void 0!==typeof localStorage&&localStorage.setItem(e,t)},getSettings:function(e){if(void 0!==typeof localStorage)return localStorage.getItem(e)},io:{children:e.children}})),e.gist?o.a.createElement("div",{className:"sourceCode"},o.a.createElement(r.a,{id:e.gist})):null)}},33:function(e,t,n){}}]);
//# sourceMappingURL=20.3db09f54.chunk.js.map