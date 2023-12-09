"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),s=i(n),p=l,m=s["".concat(c,".").concat(p)]||s[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},k),{},{components:n})):r.createElement(m,o({ref:t},k))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:5,title:"Vec3",hide_title:!0,"sidebar-label":"Vec3"},o=void 0,u={unversionedId:"Terrain-Script-Environment/Userdata/Vec3",id:"Terrain-Script-Environment/Userdata/Vec3",title:"Vec3",description:"Vec3",source:"@site/docs/Terrain-Script-Environment/Userdata/Vec3.md",sourceDirName:"Terrain-Script-Environment/Userdata",slug:"/Terrain-Script-Environment/Userdata/Vec3",permalink:"/docs/Terrain-Script-Environment/Userdata/Vec3",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Vec3",hide_title:!0,"sidebar-label":"Vec3"},sidebar:"tutorialSidebar",previous:{title:"Uuid",permalink:"/docs/Terrain-Script-Environment/Userdata/Uuid"},next:{title:"World",permalink:"/docs/Terrain-Script-Environment/Userdata/World"}},c={},i=[{value:"Vec3",id:"vec3",level:2},{value:"Functions",id:"functions",level:2},{value:"cross",id:"cross",level:3},{value:"dot",id:"dot",level:3},{value:"length",id:"length",level:3},{value:"length2",id:"length2",level:3},{value:"max",id:"max",level:3},{value:"min",id:"min",level:3},{value:"normalize",id:"normalize",level:3},{value:"rotate",id:"rotate",level:3},{value:"rotateX",id:"rotatex",level:3},{value:"rotateY",id:"rotatey",level:3},{value:"rotateZ",id:"rotatez",level:3},{value:"safeNormalize",id:"safenormalize",level:3}],k={toc:i},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"vec3"},"Vec3"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.vec3"},"sm.vec3")),(0,l.kt)("p",null,"A userdata object representing a ",(0,l.kt)("strong",null,"3D vector"),"."),(0,l.kt)("strong",null,"Operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," + ",(0,l.kt)("code",null,"Vec3")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the sum of two vectors.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," / ",(0,l.kt)("code",null,"Vec3")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the quotient of two vectors, dividing element by element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," / ",(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the quotient of a vector and a scalar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," == ",(0,l.kt)("code",null,"Vec3")),(0,l.kt)("td",{parentName:"tr",align:null},"Checks if two vectors are equal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," < ",(0,l.kt)("code",null,"Vec3")),(0,l.kt)("td",{parentName:"tr",align:null},'Returns whether the first vector is "less than" the second.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," * ",(0,l.kt)("code",null,"Vec3")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the product of two vectors, multiplying element by element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," * ",(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the product of a vector and a scalar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Vec3")," - ",(0,l.kt)("code",null,"Vec3")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the difference of two vectors.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tostring( ",(0,l.kt)("code",null,"Vec3")," )"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the string representation of a vector.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-",(0,l.kt)("code",null,"Vec3")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the negated vector.")))),(0,l.kt)("strong",null,"Values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"x")," [",(0,l.kt)("strong",null," number "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The vector's X value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Set"),": Sets the vector's X value.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"y")," [",(0,l.kt)("strong",null," number "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The vector's Y value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Set"),": Sets the vector's Y value.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"z")," [",(0,l.kt)("strong",null," number "),"] ",(0,l.kt)("br",null),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Get"),": The vector's Z value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"Set"),": Sets the vector's Z value.")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"cross"},"cross"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:cross( vector )\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross_product"},"cross product")," of two vectors."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vector")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The second vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The cross product.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dot"},"dot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:dot( vector )\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dot_product"},"dot product")," of two vectors."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vector")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The second vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The dot product.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"length"},"length"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:length( vector )\n")),(0,l.kt)("p",null,"Returns the length of the vector."),(0,l.kt)("p",null,"If you want the squared length, using ",(0,l.kt)("a",{parentName:"p",href:"#length2"},"length2")," is faster than squaring the result of this function."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," number "),"]",": The length.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"length2"},"length2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:length2( vector )\n")),(0,l.kt)("p",null,"Returns the squared length of the vector."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," number "),"]",": The squared length.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"max"},"max"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:max( vector )\n")),(0,l.kt)("p",null,"Returns the maximum value between two vectors components."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vector")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The second vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": Component wise maximum value vector.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"min"},"min"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:min( vector )\n")),(0,l.kt)("p",null,"Returns the minimum value between two vectors components."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vector")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The second vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": Component wise minimum value vector.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"normalize"},"normalize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:normalize()\n")),(0,l.kt)("p",null,"Normalizes the vector, ie. converts it to a unit vector of length 1."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The normalized vector.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rotate"},"rotate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:rotate( angle, normal )\n")),(0,l.kt)("p",null,"Rotates the vector around an axis."),(0,l.kt)("p",null,"The angle value uses ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Radian"},"radians"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"angle")," [",(0,l.kt)("strong",null," number "),"]: The angle."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"normal")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The axis to be rotated around.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The rotated vector.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rotatex"},"rotateX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:rotateX( angle )\n")),(0,l.kt)("p",null,"Rotates the vector around the X axis."),(0,l.kt)("p",null,"The angle value uses ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Radian"},"radians"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"angle")," [",(0,l.kt)("strong",null," number "),"]: The angle.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The rotated vector.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rotatey"},"rotateY"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:rotateY( angle )\n")),(0,l.kt)("p",null,"Rotates the vector around the Y axis."),(0,l.kt)("p",null,"The angle value uses ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Radian"},"radians"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"angle")," [",(0,l.kt)("strong",null," number "),"]: The angle.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The rotated vector.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rotatez"},"rotateZ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:rotateZ( angle )\n")),(0,l.kt)("p",null,"Rotates the vector around the Z axis."),(0,l.kt)("p",null,"The angle value uses ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Radian"},"radians"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"angle")," [",(0,l.kt)("strong",null," number "),"]: The angle.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The rotated vector.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"safenormalize"},"safeNormalize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"vec3:safeNormalize( fallback )\n")),(0,l.kt)("p",null,"Normalizes a vector with safety, ie. converts to a unit vector of length 1."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"vec3")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The vector."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"fallback")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The fallback vector.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The normalized vector.")),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);