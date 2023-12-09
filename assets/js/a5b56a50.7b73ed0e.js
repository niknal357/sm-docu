"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[8289],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(n),k=l,m=p["".concat(i,".").concat(k)]||p[k]||d[k]||r;return n?a.createElement(m,s(s({ref:e},c),{},{components:n})):a.createElement(m,s({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,s=new Array(r);s[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[p]="string"==typeof t?t:l,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4090:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:37,title:"sm.physics",hide_title:!0,"sidebar-label":"sm.physics"},s=void 0,o={unversionedId:"Game-Script-Environment/Static-Functions/sm.physics",id:"Game-Script-Environment/Static-Functions/sm.physics",title:"sm.physics",description:"sm.physics",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.physics.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.physics",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.physics",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,title:"sm.physics",hide_title:!0,"sidebar-label":"sm.physics"},sidebar:"tutorialSidebar",previous:{title:"sm.pathfinder",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.pathfinder"},next:{title:"sm.player",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.player"}},i={},u=[{value:"sm.physics",id:"smphysics",level:2},{value:"Functions",id:"functions",level:2},{value:"applyImpulse",id:"applyimpulse",level:3},{value:"applyTorque",id:"applytorque",level:3},{value:"distanceRaycast",id:"distanceraycast",level:3},{value:"explode",id:"explode",level:3},{value:"getGravity",id:"getgravity",level:3},{value:"getGroundMaterial",id:"getgroundmaterial",level:3},{value:"getSphereContacts",id:"getspherecontacts",level:3},{value:"multicast",id:"multicast",level:3},{value:"raycast",id:"raycast",level:3},{value:"raycastTarget",id:"raycasttarget",level:3},{value:"setGravity",id:"setgravity",level:3},{value:"sphereContactCount",id:"spherecontactcount",level:3},{value:"spherecast",id:"spherecast",level:3}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"smphysics"},"sm.physics"),(0,l.kt)("p",null,"Contains functions regarding the physics engine."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smphysicsfilter"},"Constants")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"applyimpulse"},"applyImpulse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.applyImpulse( target, impulse, worldSpace, offset )\n")),(0,l.kt)("p",null,"Applies an impulse to an object, changing its velocity immediately. ",(0,l.kt)("br",null),"\nThe impulse is applied to the object's center point with an optional offset."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"target")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape"}," Shape "),"/body/character "),"]: The target that the impulse is applied to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"impulse")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The direction and strength of the impulse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"worldSpace")," [",(0,l.kt)("strong",null," bool "),"]: Whether the impulse is applied in world space (global) coordinates. Defaults to local."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"offset")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The offset from the center point. Defaults to none.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"applytorque"},"applyTorque"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.applyTorque( target, torque, worldSpace )\n")),(0,l.kt)("p",null,"Applies a torque impulse to a ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Body"},"Body"),", changing its angular velocity immediately. ",(0,l.kt)("br",null),"\nThe torque is applied along the body's center of mass, making it rotate."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"target")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Body"}," Body ")," "),"]: The body that the torque is applied to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"torque")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The direction and strength of the torque."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"worldSpace")," [",(0,l.kt)("strong",null," bool "),"]: Whether the torque is applied in world space (global) coordinates. Defaults to local.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"distanceraycast"},"distanceRaycast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.distanceRaycast( start, direction )\n")),(0,l.kt)("p",null,"Performs a distance ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ray_casting"},"ray cast")," from a position in a given direction."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"start")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The start position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"direction")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The ray's direction and length.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," bool "),"]",": Whether the raycast was successful or not."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," number "),"]",": The fraction (0.0 - 1.0) of the distance reached until collision.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"explode"},"explode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.explode( position, level, destructionRadius, impulseRadius, magnitude, effectName, ignoreShape, parameters )\n")),(0,l.kt)("code",null,"Server-Only")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"Creates an explosion at given position. ",(0,l.kt)("br",null),"\nThe explosion creates a shockwave that is capable of destroying blocks and pushing characters and creations away."),(0,l.kt)("p",null,"Shapes that are within the explosion's destruction radius may receive the event ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Classes/ShapeClass#onexplosion"},"server_onExplosion"),"."),(0,l.kt)("admonition",{title:"note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("strong",null,"destruction level")," is the damage effect on blocks and parts, determining how likely it is that they are destroyed. ",(0,l.kt)("br",null),"\nThis is related to the ",(0,l.kt)("code",null,"qualityLevel")," found in parts json-files."),(0,l.kt)("p",{parentName:"admonition"},"Any quality level equal to or less than the destruction level may be destroyed. ",(0,l.kt)("br",null),"\nThe effect fades one level every half travelled of the remaining destruction radius."),(0,l.kt)("p",{parentName:"admonition"},"A quality level of 0 means a block or part is indestructible.")),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"position")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The center point of the explosion."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"level")," [",(0,l.kt)("strong",null," int "),"]: The destruction level affecting nearby objects."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"destructionRadius")," [",(0,l.kt)("strong",null," number "),"]: The destruction radius. Objects inside this sphere may be destroyed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"impulseRadius")," [",(0,l.kt)("strong",null," number "),"]: The impulse radius. Objects inside this sphere are affected by an impulse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"magnitude")," [",(0,l.kt)("strong",null," number "),"]: The impulse strength of the explosion. The strength diminishes with distance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"effectName")," [",(0,l.kt)("strong",null," string "),"]: The name of the effect to be played upon explosion. Optional."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"ignoreShape")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape"}," Shape ")," "),"]: The shape to be ignored. Optional."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"parameters")," [",(0,l.kt)("strong",null," table "),"]: A table containing parameters for the effect. Optional.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getgravity"},"getGravity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.getGravity()\n")),(0,l.kt)("code",null,"Server-Only")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"Returns the gravitational acceleration affecting ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Shape"},"shapes")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Body"},"bodies"),"."),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," number "),"]",": The gravitational value.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getgroundmaterial"},"getGroundMaterial"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.getGroundMaterial( position )\n")),(0,l.kt)("p",null,"Returns the terrain material at the given position."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"position")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The position.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," string "),"]",": The terrain material at the position.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getspherecontacts"},"getSphereContacts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.getSphereContacts( position, radius )\n")),(0,l.kt)("code",null,"Server-Only")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"Returns a table of the objects that were found inside the given sphere."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"position")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The position of the sphere."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"radius")," [",(0,l.kt)("strong",null," number "),"]: The radius of the sphere.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," table "),"]",": A table containing tables of objects found inside the sphere. See structure below.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Table Structure"',title:'"Table','Structure"':!0},"{\n    bodies = {\n        Body1,\n        Body2,\n        ...\n    },\n    characters = {\n        Character1,\n        Character2,\n        ...\n    },\n    harvestables = {\n        Harvestable1,\n        Harvestable2,\n        ...\n    },\n    lifts = {\n        Lift1,\n        Lift2,\n        ...\n    }\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"multicast"},"multicast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.multicast( casts )\n")),(0,l.kt)("p",null,"Performs multiple sphere and/or raycasts given a table of parameters."),(0,l.kt)("p",null,'Type can be "sphere" or "ray". Radius is ignored for rays.'),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"casts")," [",(0,l.kt)("strong",null," table "),"]: The table of casts to perform. See 'casts' table structure below.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," table "),"]",": An array of tables containing ",(0,l.kt)("code",null,"bool")," and ",(0,l.kt)("code",null,"raycastResult")," for each cast.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=\"'casts' Table Structure\"",title:"\"'casts'",Table:!0,'Structure"':!0},'{\n    {\n        type = "ray",                   --The cast type.\n        startPoint = vec3,              --The start point.\n        endPoint = vec3,                --The end point.\n        mask = sm.physics.filter.all    --The cast filter.\n    },\n    {\n        type = "sphere",                --The cast type.\n        startPoint = vec3,              --The start point.\n        endPoint = vec3,                --The end point.\n        radius = 5,                     --The sphere radius.\n        mask = sm.physics.filter.all    --The cast filter.\n    },\n    ...                                 --etc.\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Returned Table Structure"',title:'"Returned',Table:!0,'Structure"':!0},"{\n    {\n        true,           --Whether the cast is valid or not.\n        raycastResult   --The cast result data.\n    },\n    {\n        true,           --Whether the cast is valid or not.\n        raycastResult   --The cast result data.\n    },\n    ...                 --etc.\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"raycast"},"raycast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.raycast( startPos, endPos, body, mask )\n")),(0,l.kt)("p",null,"Performs a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ray_casting"},"ray cast")," between two positions."),(0,l.kt)("p",null,"The returned ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/RaycastResult"},"RaycastResult")," contains information about any object intersected by the ray."),(0,l.kt)("p",null,"If the ray cast is called from within a shape (e.g. a Sensor), a ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Body"},"Body")," may be provided which the ray will not intersect."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"startPos")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The start position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"endPos")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The end position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"body")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Body"}," Body ")," "),"]: The body to ignore. Defaults to none."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"mask")," [",(0,l.kt)("strong",null," int "),"]: The collision mask. Defaults to ",(0,l.kt)("code",null,"sm.physics.filter.default"),".")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," bool "),"]",": Whether the raycast is valid or not."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]",": The raycast result data.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"raycasttarget"},"raycastTarget"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.raycastTarget( startPos, endPos, body )\n")),(0,l.kt)("p",null,"Performs a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ray_casting"},"ray cast")," between two positions to find a specific target."),(0,l.kt)("p",null,"A target ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Body"},"Body")," must be provided."),(0,l.kt)("p",null,"The returned ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/RaycastResult"},"RaycastResult")," contains information about any object intersected by the ray."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"startPos")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The start position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"endPos")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The end position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"body")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Body"}," Body ")," "),"]: The body be exclusively checked.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," bool "),"]",": Whether the raycast is valid or not."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]",": The raycast result data.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setgravity"},"setGravity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.setGravity( gravity )\n")),(0,l.kt)("code",null,"Server-Only")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"Sets the gravitational acceleration affecting ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Shape"},"shapes")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Body"},"bodies"),"."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"gravity")," [",(0,l.kt)("strong",null," number "),"]: The gravitational value.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spherecontactcount"},"sphereContactCount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.sphereContactCount( worldPosition, radius, includeTerrain, countWater )\n")),(0,l.kt)("p",null,"Returns the number of collision objects that were found inside the given sphere."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"worldPosition")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The sphere position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"radius")," [",(0,l.kt)("strong",null," number "),"]: The sphere radius."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"includeTerrain")," [",(0,l.kt)("strong",null," bool "),"]: Whether terrain should be included in the test. Defaults to false."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"countWater")," [",(0,l.kt)("strong",null," bool "),"]: Whether water should be included in the test. Defaults to false.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," number "),"]",": The number of objects.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spherecast"},"spherecast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.physics.spherecast( startPos, endPos, radius, body, mask )\n")),(0,l.kt)("p",null,"Performs a spherical ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ray_casting"},"ray cast")," between two positions."),(0,l.kt)("p",null,"The returned ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/RaycastResult"},"RaycastResult")," contains information about any object intersected by the ray."),(0,l.kt)("p",null,"If the ray cast is called from within a shape (e.g. a Sensor), a ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Body"},"Body")," may be provided which the ray will not intersect."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"startPos")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The start position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"endPos")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3"}," Vec3 ")," "),"]: The end position."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"radius")," [",(0,l.kt)("strong",null," number "),"]: The radius of the sphere."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"body")," [",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/Body"}," Body ")," "),"]: The body to ignore. Defaults to none."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"mask")," [",(0,l.kt)("strong",null," int "),"]: The collision mask. Defaults to ",(0,l.kt)("code",null,"sm.physics.filter.default"),".")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," bool "),"]",": Whether the raycast is valid or not."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," ",(0,l.kt)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult"}," RaycastResult ")," "),"]",": The raycast result data.")),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);