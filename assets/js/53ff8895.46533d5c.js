"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[6050],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>h});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var k=a.createContext({}),i=function(e){var t=a.useContext(k),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},o=function(e){var t=i(e.components);return a.createElement(k.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,k=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=i(l),d=n,h=c["".concat(k,".").concat(d)]||c[d]||m[d]||r;return l?a.createElement(h,u(u({ref:t},o),{},{components:l})):a.createElement(h,u({ref:t},o))}));function h(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,u=new Array(r);u[0]=d;var s={};for(var k in t)hasOwnProperty.call(t,k)&&(s[k]=t[k]);s.originalType=e,s[c]="string"==typeof e?e:n,u[1]=s;for(var i=2;i<r;i++)u[i]=l[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},249:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=l(7462),n=(l(7294),l(3905));const r={sidebar_position:12,title:"Harvestable",hide_title:!0,"sidebar-label":"Harvestable"},u=void 0,s={unversionedId:"Game-Script-Environment/Userdata/Harvestable",id:"Game-Script-Environment/Userdata/Harvestable",title:"Harvestable",description:"Harvestable",source:"@site/docs/Game-Script-Environment/Userdata/Harvestable.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/Harvestable",permalink:"/docs/Game-Script-Environment/Userdata/Harvestable",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Harvestable",hide_title:!0,"sidebar-label":"Harvestable"},sidebar:"tutorialSidebar",previous:{title:"GuiInterface",permalink:"/docs/Game-Script-Environment/Userdata/GuiInterface"},next:{title:"Interactable",permalink:"/docs/Game-Script-Environment/Userdata/Interactable"}},k={},i=[{value:"Harvestable",id:"harvestable",level:2},{value:"Functions",id:"functions",level:2},{value:"destroy",id:"destroy",level:3},{value:"getAabb",id:"getaabb",level:3},{value:"getClientPublicData",id:"getclientpublicdata",level:3},{value:"getColor",id:"getcolor",level:3},{value:"getData",id:"getdata",level:3},{value:"getId",id:"getid",level:3},{value:"getMass",id:"getmass",level:3},{value:"getMaterial",id:"getmaterial",level:3},{value:"getMaterialId",id:"getmaterialid",level:3},{value:"getName",id:"getname",level:3},{value:"getPoseWeight",id:"getposeweight",level:3},{value:"getPosition",id:"getposition",level:3},{value:"getPublicData",id:"getpublicdata",level:3},{value:"getRotation",id:"getrotation",level:3},{value:"getScale",id:"getscale",level:3},{value:"getSeatCharacter",id:"getseatcharacter",level:3},{value:"getType",id:"gettype",level:3},{value:"getUuid",id:"getuuid",level:3},{value:"getUvFrameIndex",id:"getuvframeindex",level:3},{value:"getWorld",id:"getworld",level:3},{value:"hasSeat",id:"hasseat",level:3},{value:"isKinematic",id:"iskinematic",level:3},{value:"setClientPublicData",id:"setclientpublicdata",level:3},{value:"setColor",id:"setcolor",level:3},{value:"setParams",id:"setparams",level:3},{value:"setPoseWeight",id:"setposeweight",level:3},{value:"setPosition",id:"setposition",level:3},{value:"setPublicData",id:"setpublicdata",level:3},{value:"setRotation",id:"setrotation",level:3},{value:"setSeatCharacter",id:"setseatcharacter",level:3},{value:"setUvFrameIndex",id:"setuvframeindex",level:3}],o={toc:i},c="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"harvestable"},"Harvestable"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.harvestable"},"sm.harvestable")),(0,n.kt)("p",null,"Represents a harvestable object in the game."),(0,n.kt)("strong",null,"Values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"clientPublicData")," [",(0,n.kt)("strong",null," table "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": (Client-Only) The harvestable's client public data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Set"),": (Client-Only) Sets the harvestable's client public data.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"id")," [",(0,n.kt)("strong",null," int "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's id.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"initialPosition")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's initial world position.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"initialRotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's initial world rotation.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"mass")," [",(0,n.kt)("strong",null," number "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's mass.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"material")," [",(0,n.kt)("strong",null," string "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's material name.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"materialId")," [",(0,n.kt)("strong",null," int "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's material id.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"name")," [",(0,n.kt)("strong",null," string "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's name.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"publicData")," [",(0,n.kt)("strong",null," table "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": (Server-Only) The harvestable's server public data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Set"),": (Server-Only) Sets the harvestable's server public data.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"type")," [",(0,n.kt)("strong",null," string "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's type.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"uuid")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid"}," Uuid ")," "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's uuid.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"worldPosition")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's world position.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"worldRotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The harvestable's world rotation.")))),(0,n.kt)("strong",null,"Operations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Operation"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Harvestable")," == ",(0,n.kt)("code",null,"Harvestable")),(0,n.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,n.kt)("code",null,"Harvestable")," refer to the same ",(0,n.kt)("code",null,"Harvestable"),".")))),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"destroy"},"destroy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:destroy()\n")),(0,n.kt)("code",null,"Server-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Destroys the harvestable."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getaabb"},"getAabb"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getAabb()\n")),(0,n.kt)("p",null,"Returns the bounds of the harvestable shape."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The max bounds."),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The min bounds.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getclientpublicdata"},"getClientPublicData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getClientPublicData()\n")),(0,n.kt)("code",null,"Client-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Returns the harvestable's client public data."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," table "),"]",": The public data.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getcolor"},"getColor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getColor()\n")),(0,n.kt)("p",null,"Returns the harvestable's color."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Color"}," Color ")," "),"]",": The color.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getdata"},"getData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getData()\n")),(0,n.kt)("p",null,"Returns the harvestable's script data."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," table "),"]",": The script data.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getid"},"getId"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getId()\n")),(0,n.kt)("p",null,"Returns the harvestable's id."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," int "),"]",": The id.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getmass"},"getMass"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getMass()\n")),(0,n.kt)("p",null,"Returns the harvestable's mass."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," number "),"]",": The mass.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getmaterial"},"getMaterial"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getMaterial()\n")),(0,n.kt)("p",null,"Returns the harvestable's material name."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," string "),"]",": The material name.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getmaterialid"},"getMaterialId"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getMaterialId()\n")),(0,n.kt)("p",null,"Returns the harvestable's material id."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," int "),"]",": The material id.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getname"},"getName"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getName()\n")),(0,n.kt)("p",null,"Returns the harvestable's name."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," string "),"]",": The name.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getposeweight"},"getPoseWeight"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getPoseWeight( index )\n")),(0,n.kt)("code",null,"Client-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Returns the pose weight of the pose in the given index."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"index")," [",(0,n.kt)("strong",null," int "),"]: The index.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," number "),"]",": The pose weight.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getposition"},"getPosition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getPosition()\n")),(0,n.kt)("p",null,"Returns the harvestable's world position."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The world position.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getpublicdata"},"getPublicData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getPublicData()\n")),(0,n.kt)("code",null,"Server-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Returns the harvestable's server public data."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," table "),"]",": The public data.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getrotation"},"getRotation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getRotation()\n")),(0,n.kt)("p",null,"Returns the harvestable's rotation."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"]",": The rotation.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getscale"},"getScale"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getScale()\n")),(0,n.kt)("p",null,"Returns the harvestable's scale."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The scale.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getseatcharacter"},"getSeatCharacter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"kinematic:getSeatCharacter()\n")),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Character"},"Character")," that is seated in the kinematic."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"kinematic")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The kinematic.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Character"}," Character ")," "),"]",": The character.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gettype"},"getType"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getType()\n")),(0,n.kt)("p",null,"Returns the harvestable's type."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," string "),"]",": The type.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getuuid"},"getUuid"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getUuid()\n")),(0,n.kt)("p",null,"Returns the harvestable's uuid."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid"}," Uuid ")," "),"]",": The uuid.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getuvframeindex"},"getUvFrameIndex"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getUvFrameIndex()\n")),(0,n.kt)("code",null,"Client-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Returns the harvestable's current UV animation frame."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," int "),"]",": The UV frame.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getworld"},"getWorld"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:getWorld()\n")),(0,n.kt)("p",null,"Returns the harvestable's world."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/World"}," World ")," "),"]",": The world.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hasseat"},"hasSeat"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"kinematic:hasSeat()\n")),(0,n.kt)("p",null,"Returns whether the kinematic has a seat component."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"kinematic")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The kinematic.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," bool "),"]",": Whether the kinematic has a seat component or not.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"iskinematic"},"isKinematic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:isKinematic()\n")),(0,n.kt)("p",null,"Returns whether the harvestable is a kinematic."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," bool "),"]",": Whether the harvestable is a kinematic or not.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setclientpublicdata"},"setClientPublicData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:setClientPublicData( data )\n")),(0,n.kt)("code",null,"Client-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Sets the harvestable's client public data."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"data")," [",(0,n.kt)("strong",null," table "),"]: The data to set.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setcolor"},"setColor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:setColor( color )\n")),(0,n.kt)("code",null,"Client-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Sets the harvestable's color."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"color")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Color"}," Color ")," "),"]: The color.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setparams"},"setParams"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:setParams( data )\n")),(0,n.kt)("code",null,"Server-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Sets the harvestable's param data."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"data")," [",(0,n.kt)("strong",null," any "),"]: The data.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setposeweight"},"setPoseWeight"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:setPoseWeight( index, value )\n")),(0,n.kt)("code",null,"Client-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Set the pose weight of the pose in the given index."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"index")," [",(0,n.kt)("strong",null," int "),"]: The index."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"value")," [",(0,n.kt)("strong",null," number "),"]: The pose weight.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setposition"},"setPosition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"kinematic:setPosition( position )\n")),(0,n.kt)("p",null,"Set the harvestable's world position. ",(0,n.kt)("br",null),"\nCan only be used on kinematic harvestables."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"kinematic")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The kinematic."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"position")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The world position.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setpublicdata"},"setPublicData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:setPublicData( data )\n")),(0,n.kt)("code",null,"Server-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Set the harvestable's server public data."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"data")," [",(0,n.kt)("strong",null," table "),"]: The data to set.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setrotation"},"setRotation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"kinematic:setRotation( rotation )\n")),(0,n.kt)("p",null,"Set the harvestable's rotation. ",(0,n.kt)("br",null),"\nCan only be used on kinematic harvestables."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"kinematic")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The kinematic."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"rotation")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat"}," Quat ")," "),"]: The rotation.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setseatcharacter"},"setSeatCharacter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"kinematic:setSeatCharacter( character )\n")),(0,n.kt)("p",null,"Requests to seat a ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Character"},"Character")," in the kinematic."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"kinematic")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The kinematic."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"character")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Character"}," Character ")," "),"]: The character.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setuvframeindex"},"setUvFrameIndex"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"harvestable:setUvFrameIndex( index )\n")),(0,n.kt)("code",null,"Client-Only")," ",(0,n.kt)("br",null),(0,n.kt)("p",null,"Sets the UV animation frame with the given index."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"harvestable")," [",(0,n.kt)("strong",null," ",(0,n.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable"}," Harvestable ")," "),"]: The harvestable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"index")," [",(0,n.kt)("strong",null," int "),"]: The index.")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);