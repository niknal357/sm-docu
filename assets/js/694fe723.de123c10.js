"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[8953],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=r.createContext({}),o=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=o(t.components);return r.createElement(i.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=o(a),d=l,m=k["".concat(i,".").concat(d)]||k[d]||p[d]||n;return a?r.createElement(m,s(s({ref:e},c),{},{components:a})):r.createElement(m,s({ref:e},c))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,s=new Array(n);s[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[k]="string"==typeof t?t:l,s[1]=u;for(var o=2;o<n;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},625:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>u,toc:()=>o});var r=a(7462),l=(a(7294),a(3905));const n={sidebar_position:22,title:"RaycastResult",hide_title:!0,"sidebar-label":"RaycastResult"},s=void 0,u={unversionedId:"Game-Script-Environment/Userdata/RaycastResult",id:"Game-Script-Environment/Userdata/RaycastResult",title:"RaycastResult",description:"RaycastResult",source:"@site/docs/Game-Script-Environment/Userdata/RaycastResult.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/RaycastResult",permalink:"/docs/Game-Script-Environment/Userdata/RaycastResult",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,title:"RaycastResult",hide_title:!0,"sidebar-label":"RaycastResult"},sidebar:"tutorialSidebar",previous:{title:"Quat",permalink:"/docs/Game-Script-Environment/Userdata/Quat"},next:{title:"ScriptableObject",permalink:"/docs/Game-Script-Environment/Userdata/ScriptableObject"}},i={},o=[{value:"RaycastResult",id:"raycastresult",level:2},{value:"Functions",id:"functions",level:2},{value:"getAreaTrigger",id:"getareatrigger",level:3},{value:"getBody",id:"getbody",level:3},{value:"getCharacter",id:"getcharacter",level:3},{value:"getHarvestable",id:"getharvestable",level:3},{value:"getJoint",id:"getjoint",level:3},{value:"getLiftData",id:"getliftdata",level:3},{value:"getShape",id:"getshape",level:3}],c={toc:o},k="wrapper";function p(t){let{components:e,...a}=t;return(0,l.kt)(k,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"raycastresult"},"RaycastResult"),(0,l.kt)("p",null,"A userdata object representing a ",(0,l.kt)("strong",null,"raycast result"),"."),(0,l.kt)("p",null,"A raycast result is a collection of data received from a raycast. ",(0,l.kt)("br",null),"\nThe result contains information about where the raycast travelled and what objects it eventually hit."),(0,l.kt)("p",null,"Raycast results are the result of functions such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.physics#raycast"},"sm.physics.raycast"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.physics#distanceRaycast"},"sm.physics.distanceRaycast")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.localPlayer#getRaycast"},"sm.localPlayer.getRaycast"),"."),(0,l.kt)("strong",null,"Values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"directionWorld")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The raycast's direction vector.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"fraction")," [",(0,l.kt)("strong",null," number "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The fraction (0 - 1) of the distance reached until collision, divided by the ray's length.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"normalLocal")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The normal vector of the hit surface, relative to the target's rotation.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"normalWorld")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The normal vector of the hit surface.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"originWorld")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The raycast's start position.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"pointLocal")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The world position of the hit point, relative to the target's position.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"pointWorld")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The world position of the hit point.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"type")," [",(0,l.kt)("strong",null," string "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The physics type of the shape that was hit.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"valid")," [",(0,l.kt)("strong",null," bool "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": Whether the raycast hit a target or not.")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"getareatrigger"},"getAreaTrigger"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"raycastResult:getAreaTrigger()\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"},"AreaTrigger")," hit by the raycast, if the result type is ",(0,l.kt)("code",null,"areaTrigger"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"raycastResult")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]: The raycastResult.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}," AreaTrigger ")," "),"]",": The areaTrigger.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getbody"},"getBody"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"raycastResult:getBody()\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Body"},"Body")," hit by the raycast, if the result type is ",(0,l.kt)("code",null,"body"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"raycastResult")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]: The raycastResult.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Body"}," Body ")," "),"]",": The body.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getcharacter"},"getCharacter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"raycastResult:getCharacter()\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Character"},"Character")," hit by the raycast, if the result type is ",(0,l.kt)("code",null,"character"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"raycastResult")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]: The raycastResult.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Character"}," Character ")," "),"]",": The character.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getharvestable"},"getHarvestable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"raycastResult:getHarvestable()\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Harvestable"},"Harvestable")," hit by the raycast, if the result type is ",(0,l.kt)("code",null,"harvestable"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"raycastResult")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]: The raycastResult.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]",": The harvestable.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getjoint"},"getJoint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"raycastResult:getJoint()\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Joint"},"Joint")," hit by the raycast, if the result type is ",(0,l.kt)("code",null,"joint"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"raycastResult")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]: The raycastResult.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Joint"}," Joint ")," "),"]",": The joint.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getliftdata"},"getLiftData"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"raycastResult:getLiftData()\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Lift"},"Lift")," hit by the raycast, if the result type is ",(0,l.kt)("code",null,"lift"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"raycastResult")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]: The raycastResult.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift"}," Lift ")," "),"]",": The lift."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," bool "),"]",": Whether the lift is top(?) or not.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getshape"},"getShape"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"raycastResult:getShape()\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Shape"},"Shape")," hit by the raycast, if the result type is ",(0,l.kt)("code",null,"shape"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"raycastResult")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]: The raycastResult.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape"}," Shape ")," "),"]",": The shape.")),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);