"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[4025],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>f});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=s(l),p=r,f=k["".concat(u,".").concat(p)]||k[p]||c[p]||a;return l?n.createElement(f,i(i({ref:e},d),{},{components:l})):n.createElement(f,i({ref:e},d))}));function f(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,i=new Array(a);i[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<a;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},6465:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=l(7462),r=(l(7294),l(3905));const a={sidebar_position:15,title:"Lift",hide_title:!0,"sidebar-label":"Lift"},i=void 0,o={unversionedId:"Game-Script-Environment/Userdata/Lift",id:"Game-Script-Environment/Userdata/Lift",title:"Lift",description:"Lift",source:"@site/docs/Game-Script-Environment/Userdata/Lift.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/Lift",permalink:"/docs/Game-Script-Environment/Userdata/Lift",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Lift",hide_title:!0,"sidebar-label":"Lift"},sidebar:"tutorialSidebar",previous:{title:"Joint",permalink:"/docs/Game-Script-Environment/Userdata/Joint"},next:{title:"LoadCellHandle",permalink:"/docs/Game-Script-Environment/Userdata/LoadCellHandle"}},u={},s=[{value:"Lift",id:"lift",level:2},{value:"Functions",id:"functions",level:2},{value:"destroy",id:"destroy",level:3},{value:"getId",id:"getid",level:3},{value:"getLevel",id:"getlevel",level:3},{value:"getWorldPosition",id:"getworldposition",level:3},{value:"hasBodies",id:"hasbodies",level:3}],d={toc:s},k="wrapper";function c(t){let{components:e,...l}=t;return(0,r.kt)(k,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"lift"},"Lift"),(0,r.kt)("p",null,"A userdata object representing a ",(0,r.kt)("strong",null,"lift")," in the game."),(0,r.kt)("strong",null,"Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"id")," [",(0,r.kt)("strong",null," int "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The lift's id.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"level")," [",(0,r.kt)("strong",null," int "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The lift's level.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"worldPosition")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The lift's world position.")))),(0,r.kt)("strong",null,"Operations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Lift")," == ",(0,r.kt)("code",null,"Lift")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,r.kt)("code",null,"Lift")," refer to the same ",(0,r.kt)("code",null,"Lift"),".")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lift:destroy()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Destroys the lift."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"lift")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift"}," Lift ")," "),"]: The lift.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getid"},"getId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lift:getId()\n")),(0,r.kt)("p",null,"Returns the lift's id."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"lift")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift"}," Lift ")," "),"]: The lift.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The lift's id.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlevel"},"getLevel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lift:getLevel()\n")),(0,r.kt)("p",null,"Returns the lift's level."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"lift")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift"}," Lift ")," "),"]: The lift.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The lift's level.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getworldposition"},"getWorldPosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lift:getWorldPosition()\n")),(0,r.kt)("p",null,"Returns the lift's world position."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"lift")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift"}," Lift ")," "),"]: The lift.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The lift's world position.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hasbodies"},"hasBodies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lift:hasBodies()\n")),(0,r.kt)("p",null,"Returns whether there is a body on the lift."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"lift")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift"}," Lift ")," "),"]: The lift.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the lift has bodies or not.")),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);