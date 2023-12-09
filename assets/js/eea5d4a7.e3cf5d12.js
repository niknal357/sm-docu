"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[3355],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),s=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return l.createElement(o.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=s(n),d=r,m=k["".concat(o,".").concat(d)]||k[d]||p[d]||a;return n?l.createElement(m,i(i({ref:e},c),{},{components:n})):l.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[k]="string"==typeof t?t:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7866:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"AiState",hide_title:!0,"sidebar-label":"AiState"},i=void 0,u={unversionedId:"Game-Script-Environment/Userdata/AiState",id:"Game-Script-Environment/Userdata/AiState",title:"AiState",description:"AiState",source:"@site/docs/Game-Script-Environment/Userdata/AiState.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/AiState",permalink:"/docs/Game-Script-Environment/Userdata/AiState",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AiState",hide_title:!0,"sidebar-label":"AiState"},sidebar:"tutorialSidebar",previous:{title:"ScriptableObjectClass",permalink:"/docs/Game-Script-Environment/Classes/ScriptableObjectClass"},next:{title:"AreaTrigger",permalink:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}},o={},s=[{value:"AiState",id:"aistate",level:2},{value:"Functions",id:"functions",level:2},{value:"getFacingDirection",id:"getfacingdirection",level:3},{value:"getMovementDirection",id:"getmovementdirection",level:3},{value:"getMovementType",id:"getmovementtype",level:3},{value:"getWantsJump",id:"getwantsjump",level:3},{value:"isDone",id:"isdone",level:3},{value:"onFixedUpdate",id:"onfixedupdate",level:3},{value:"onUnitUpdate",id:"onunitupdate",level:3},{value:"start",id:"start",level:3},{value:"stop",id:"stop",level:3}],c={toc:s},k="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"aistate"},"AiState"),(0,r.kt)("p",null,"A userdata object representing an ",(0,r.kt)("strong",null,"AI state")," belonging to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Unit"},"Unit"),"."),(0,r.kt)("p",null,"This library can only be used on the ",(0,r.kt)("strong",null,"server"),"."),(0,r.kt)("strong",null,"Operations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"AiState")," == ",(0,r.kt)("code",null,"AiState")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,r.kt)("code",null,"AiState")," refer to the same ",(0,r.kt)("code",null,"AiState"),".")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"getfacingdirection"},"getFacingDirection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:getFacingDirection()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the state's facing direction."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The direction.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmovementdirection"},"getMovementDirection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:getMovementDirection()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the state's movement direction."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The direction.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmovementtype"},"getMovementType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:getMovementType()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns a string describing the state's movement type."),(0,r.kt)("p",null,'Movement type can be "stand", "walk", "sprint" or "crouch".'),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," string "),"]",": The movement type.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getwantsjump"},"getWantsJump"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:getWantsJump()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Check if the state wants to jump."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": True when the state wants to jump.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isdone"},"isDone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:isDone()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Checks if the AI state is done."),(0,r.kt)("p",null,"Returns true when the state is done, and a string describing the state's current situation."),(0,r.kt)("p",null,"Can be used to determine if another state is allowed to be started."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": True if the state is done."),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," string "),"]",": The state's current situation.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onfixedupdate"},"onFixedUpdate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:onFixedUpdate( dt )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Updates the state by adding delta time progression."),(0,r.kt)("p",null,"Should be called once every game tick while the state is active."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"dt")," [",(0,r.kt)("strong",null," number "),"]: The delta time.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onunitupdate"},"onUnitUpdate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:onUnitUpdate( dt )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Updates the state by adding delta time progression."),(0,r.kt)("p",null,"Should be called once every unit update, by the unit that owns the state, while the state is active."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"dt")," [",(0,r.kt)("strong",null," number "),"]: The delta time.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:start()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Starts the state."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stop"},"stop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"AiState:stop()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Stops the state."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"AiState")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AiState"}," AiState ")," "),"]: The state.")),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);