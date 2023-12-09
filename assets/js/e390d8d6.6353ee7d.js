"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[6112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(r),p=n,d=g["".concat(s,".").concat(p)]||g[p]||m[p]||l;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:4,title:"sm.areaTrigger",hide_title:!0,"sidebar-label":"sm.areaTrigger"},i=void 0,o={unversionedId:"Game-Script-Environment/Static-Functions/sm.areaTrigger",id:"Game-Script-Environment/Static-Functions/sm.areaTrigger",title:"sm.areaTrigger",description:"sm.areaTrigger",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.areaTrigger.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.areaTrigger",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.areaTrigger",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"sm.areaTrigger",hide_title:!0,"sidebar-label":"sm.areaTrigger"},sidebar:"tutorialSidebar",previous:{title:"sm.ai",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.ai"},next:{title:"sm.audio",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.audio"}},s={},c=[{value:"sm.areaTrigger",id:"smareatrigger",level:2},{value:"Functions",id:"functions",level:2},{value:"createAttachedBox",id:"createattachedbox",level:3},{value:"createAttachedSphere",id:"createattachedsphere",level:3},{value:"createBox",id:"createbox",level:3},{value:"createBoxWater",id:"createboxwater",level:3},{value:"createSphere",id:"createsphere",level:3},{value:"destroy",id:"destroy",level:3}],u={toc:c},g="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(g,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"smareatrigger"},"sm.areaTrigger"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Associated object type:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"},"AreaTrigger")),(0,n.kt)("p",null,"An area trigger is an invisible collider in the world that can trigger events when objects move in or out of it. ",(0,n.kt)("br",null),"\nThis allows the script to, for instance, detect when a character enters a door or count the number of shapes that are in a room."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smareatriggerfilter"},"Constants")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"createattachedbox"},"createAttachedBox"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"sm.areaTrigger.createAttachedBox( interactable, dimension, position, rotation, filter, userdata )\n")),(0,n.kt)("p",null,"Creates a new area trigger box with a given size that stays attached to an ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Interactable"},"Interactable"),"."),(0,n.kt)("p",null,"If a filter is specified, the trigger area will only be able to detects objects of that certain type."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smareatriggerfilter"},"sm.areaTrigger.filter")," for more information about filters."),(0,n.kt)("admonition",{title:"warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Creating an area trigger with zero in any of the 3 ",(0,n.kt)("code",null,"dimension")," values (x, y, z) will cause a game crash!")),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"interactable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Interactable"}," Interactable ")," "),"]: The host interactable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"dimension")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The trigger size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"position")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The position offset (defaults to none)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"rotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"]: The rotation offset (defaults to none)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"filter")," [",(0,n.kt)("strong",null," int "),"]: The filter. Defaults to no filter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"userdata")," [",(0,n.kt)("strong",null," table "),"]: A table of data that can be retrieved using ",(0,n.kt)("code",null,"areaTrigger:getUserData()"),".")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}," AreaTrigger ")," "),"]",": The created areaTrigger.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},"MyShape = class()\n\nfunction MyShape.server_onCreate( self )\n    local position = self.shape:getWorldPosition()\n    local size = sm.vec3.new( 1, 1, 1 )\n\n    self.myTrigger = sm.areaTrigger.createAttachedBox( self.interactable, size )\nend\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example with a filter"',title:'"Example',with:!0,a:!0,'filter"':!0},"MyShape = class()\n\nfunction MyShape.server_onCreate( self )\n    local position = self.shape:getWorldPosition()\n    local size = sm.vec3.new( 1, 1, 1 )\n    \n    --Only detect characters\n    local filter = sm.areaTrigger.filter.character\n\n    self.myTrigger = sm.areaTrigger.createAttachedBox( self.interactable, size, _, _, filter )\nend\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createattachedsphere"},"createAttachedSphere"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"sm.areaTrigger.createAttachedSphere( interactable, radius, position, rotation, filter, userdata )\n")),(0,n.kt)("p",null,"Creates a new area trigger sphere with a given size that stays attached to an ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Interactable"},"Interactable"),"."),(0,n.kt)("p",null,"If a filter is specified, the trigger area will only be able to detects objects of that certain type."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smareatriggerfilter"},"sm.areaTrigger.filter")," for more information about filters."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"interactable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Interactable"}," Interactable ")," "),"]: The host interactable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"radius")," [",(0,n.kt)("strong",null," number "),"]: The trigger radius."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"position")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The position offset (defaults to none)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"rotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"]: The rotation offset (defaults to none)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"filter")," [",(0,n.kt)("strong",null," int "),"]: The filter. Defaults to no filter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"userdata")," [",(0,n.kt)("strong",null," table "),"]: A table of data that can be retrieved using ",(0,n.kt)("code",null,"areaTrigger:getUserData()"),".")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}," AreaTrigger ")," "),"]",": The created areaTrigger.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createbox"},"createBox"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"sm.areaTrigger.createBox( size, position, rotation, filter, userdata )\n")),(0,n.kt)("p",null,"Creates a new area trigger box."),(0,n.kt)("p",null,"If a filter is specified, the trigger area will only be able to detects objects of that certain type."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smareatriggerfilter"},"sm.areaTrigger.filter")," for more information about filters."),(0,n.kt)("admonition",{title:"warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Creating an area trigger with zero in any of the 3 ",(0,n.kt)("code",null,"size")," values (x, y, z) will cause a game crash!")),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"size")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The trigger size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"position")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The position."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"rotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"]: The rotation (defaults to ",(0,n.kt)("code",null,"sm.quat.identity"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"filter")," [",(0,n.kt)("strong",null," int "),"]: The filter. Defaults to no filter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"userdata")," [",(0,n.kt)("strong",null," table "),"]: A table of data that can be retrieved using ",(0,n.kt)("code",null,"areaTrigger:getUserData()"),".")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}," AreaTrigger ")," "),"]",": The created areaTrigger.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createboxwater"},"createBoxWater"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"sm.areaTrigger.createBoxWater( size, position, rotation, filter, userdata )\n")),(0,n.kt)("p",null,"Creates a new area trigger box that represents water, ie. certain objects can't be placed in it."),(0,n.kt)("p",null,"If a filter is specified, the trigger area will only be able to detects objects of that certain type."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smareatriggerfilter"},"sm.areaTrigger.filter")," for more information about filters."),(0,n.kt)("admonition",{title:"warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Creating an area trigger with zero in any of the 3 ",(0,n.kt)("code",null,"size")," values (x, y, z) will cause a game crash!")),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"size")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The trigger size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"position")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The position."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"rotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"]: The rotation (defaults to ",(0,n.kt)("code",null,"sm.quat.identity"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"filter")," [",(0,n.kt)("strong",null," int "),"]: The filter. Defaults to no filter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"userdata")," [",(0,n.kt)("strong",null," table "),"]: A table of data that can be retrieved using ",(0,n.kt)("code",null,"areaTrigger:getUserData()"),".")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}," AreaTrigger ")," "),"]",": The created areaTrigger.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createsphere"},"createSphere"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"sm.areaTrigger.createSphere( radius, position, rotation, filter, userdata )\n")),(0,n.kt)("p",null,"Creates a new area trigger sphere."),(0,n.kt)("p",null,"If a filter is specified, the trigger area will only be able to detects objects of that certain type."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smareatriggerfilter"},"sm.areaTrigger.filter")," for more information about filters."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"radius")," [",(0,n.kt)("strong",null," number "),"]: The trigger radius."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"position")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The position."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"rotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"]: The rotation (defaults to ",(0,n.kt)("code",null,"sm.quat.identity"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"filter")," [",(0,n.kt)("strong",null," int "),"]: The filter. Defaults to no filter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"userdata")," [",(0,n.kt)("strong",null," table "),"]: A table of data that can be retrieved using ",(0,n.kt)("code",null,"areaTrigger:getUserData()"),".")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}," AreaTrigger ")," "),"]",": The created areaTrigger.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"destroy"},"destroy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"sm.areaTrigger.destroy( trigger )\n")),(0,n.kt)("p",null,"Destroys an areaTrigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"trigger")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger"}," AreaTrigger ")," "),"]: The trigger to destroy.")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);