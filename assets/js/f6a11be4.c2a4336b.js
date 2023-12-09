"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[6238],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),s=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=s(e.components);return l.createElement(i.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(t),c=r,p=k["".concat(i,".").concat(c)]||k[c]||d[c]||u;return t?l.createElement(p,a(a({ref:n},m),{},{components:t})):l.createElement(p,a({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,a=new Array(u);a[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[k]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<u;s++)a[s]=t[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>s});var l=t(7462),r=(t(7294),t(3905));const u={sidebar_position:33,title:"sm.noise",hide_title:!0,"sidebar-label":"sm.noise"},a=void 0,o={unversionedId:"Game-Script-Environment/Static-Functions/sm.noise",id:"Game-Script-Environment/Static-Functions/sm.noise",title:"sm.noise",description:"sm.noise",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.noise.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.noise",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.noise",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,title:"sm.noise",hide_title:!0,"sidebar-label":"sm.noise"},sidebar:"tutorialSidebar",previous:{title:"sm.menuCreation",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.menuCreation"},next:{title:"sm.particle",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.particle"}},i={},s=[{value:"sm.noise",id:"smnoise",level:2},{value:"Functions",id:"functions",level:2},{value:"floatNoise2d",id:"floatnoise2d",level:3},{value:"gunSpread",id:"gunspread",level:3},{value:"intNoise2d",id:"intnoise2d",level:3},{value:"octaveNoise2d",id:"octavenoise2d",level:3},{value:"perlinNoise2d",id:"perlinnoise2d",level:3},{value:"randomNormalDistribution",id:"randomnormaldistribution",level:3},{value:"randomRange",id:"randomrange",level:3},{value:"simplexNoise1d",id:"simplexnoise1d",level:3},{value:"simplexNoise2d",id:"simplexnoise2d",level:3}],m={toc:s},k="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"smnoise"},"sm.noise"),(0,r.kt)("p",null,"Contains methods related to random number and noise generation."),(0,r.kt)("p",null,"Most noise related functions are used for terrain generation."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"floatnoise2d"},"floatNoise2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.floatNoise2d( x, y, seed )\n")),(0,r.kt)("p",null,"A number noise 2D function."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"x")," [",(0,r.kt)("strong",null," number "),"]: The X value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"y")," [",(0,r.kt)("strong",null," number "),"]: The Y value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"seed")," [",(0,r.kt)("strong",null," int "),"]: The seed.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The noise value.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gunspread"},"gunSpread"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.gunSpread( direction, spreadAngle )\n")),(0,r.kt)("p",null,"Returns a directional vector with a random spread given by a ",(0,r.kt)("a",{parentName:"p",href:"#randomnormaldistribution"},"normal distribution"),"."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"direction")," [",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The direction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"spreadAngle")," [",(0,r.kt)("strong",null," number "),"]: The spread angle in degrees.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," ",(0,r.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]",": The spread direction.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"intnoise2d"},"intNoise2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.intNoise2d( x, y, seed )\n")),(0,r.kt)("p",null,"An integer noise 2D function."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"x")," [",(0,r.kt)("strong",null," number "),"]: The X value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"y")," [",(0,r.kt)("strong",null," number "),"]: The Y value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"seed")," [",(0,r.kt)("strong",null," int "),"]: The seed.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The noise value.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"octavenoise2d"},"octaveNoise2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.octaveNoise2d( x, y, octaves, seed )\n")),(0,r.kt)("p",null,"An octave noise 2D function."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"x")," [",(0,r.kt)("strong",null," number "),"]: The X value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"y")," [",(0,r.kt)("strong",null," number "),"]: The Y value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"octaves")," [",(0,r.kt)("strong",null," int "),"]: The octaves."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"seed")," [",(0,r.kt)("strong",null," int "),"]: The seed.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The noise value.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"perlinnoise2d"},"perlinNoise2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.perlinNoise2d( x, y, seed )\n")),(0,r.kt)("p",null,"A perlin noise 2D function."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"x")," [",(0,r.kt)("strong",null," number "),"]: The X value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"y")," [",(0,r.kt)("strong",null," number "),"]: The Y value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"seed")," [",(0,r.kt)("strong",null," int "),"]: The seed.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The noise value.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"randomnormaldistribution"},"randomNormalDistribution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.randomNormalDistribution( mean, deviation )\n")),(0,r.kt)("p",null,"Returns a random number according to the normal ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Normal_distribution"},"random number distribution"),"."),(0,r.kt)("p",null,"Values near the ",(0,r.kt)("strong",null,"mean")," are the most likely."),(0,r.kt)("p",null,"Standard ",(0,r.kt)("strong",null,"deviation")," affects the dispersion of generated values from the mean."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"mean")," [",(0,r.kt)("strong",null," number "),"]: The mean."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"deviation")," [",(0,r.kt)("strong",null," number "),"]: The deviation.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The random number.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"randomrange"},"randomRange"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.randomRange( a, b )\n")),(0,r.kt)("p",null,"Returns a random number N such that ",(0,r.kt)("code",null,"a <= N <= b"),"."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"a")," [",(0,r.kt)("strong",null," number "),"]: The lower bound."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"b")," [",(0,r.kt)("strong",null," number "),"]: The upper bound.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The random number.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"simplexnoise1d"},"simplexNoise1d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.simplexNoise1d( x )\n")),(0,r.kt)("p",null,"A simplex noise 1D function."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"x")," [",(0,r.kt)("strong",null," number "),"]: The X value.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The noise value.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"simplexnoise2d"},"simplexNoise2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.noise.simplexNoise2d( x, y )\n")),(0,r.kt)("p",null,"A simplex noise 2D function."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"x")," [",(0,r.kt)("strong",null," number "),"]: The X value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"y")," [",(0,r.kt)("strong",null," number "),"]: The Y value.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The noise value.")),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);