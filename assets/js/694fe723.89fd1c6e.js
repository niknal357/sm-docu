"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[8953],{4990:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(5893),t=n(1151);const i={sidebar_position:22,title:"RaycastResult",hide_title:!0,"sidebar-label":"RaycastResult"},a=void 0,c={id:"Game-Script-Environment/Userdata/RaycastResult",title:"RaycastResult",description:"RaycastResult",source:"@site/docs/Game-Script-Environment/Userdata/RaycastResult.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/RaycastResult",permalink:"/docs/Game-Script-Environment/Userdata/RaycastResult",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,title:"RaycastResult",hide_title:!0,"sidebar-label":"RaycastResult"},sidebar:"tutorialSidebar",previous:{title:"Quat",permalink:"/docs/Game-Script-Environment/Userdata/Quat"},next:{title:"ScriptableObject",permalink:"/docs/Game-Script-Environment/Userdata/ScriptableObject"}},l={},d=[{value:"RaycastResult",id:"raycastresult",level:2},{value:"Functions",id:"functions",level:2},{value:"getAreaTrigger",id:"getareatrigger",level:3},{value:"getBody",id:"getbody",level:3},{value:"getCharacter",id:"getcharacter",level:3},{value:"getHarvestable",id:"getharvestable",level:3},{value:"getJoint",id:"getjoint",level:3},{value:"getLiftData",id:"getliftdata",level:3},{value:"getShape",id:"getshape",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h2,{id:"raycastresult",children:"RaycastResult"}),"\n",(0,r.jsxs)(s.p,{children:["A userdata object representing a ",(0,r.jsx)("strong",{children:"raycast result"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["A raycast result is a collection of data received from a raycast. ",(0,r.jsx)("br",{}),"\r\nThe result contains information about where the raycast travelled and what objects it eventually hit."]}),"\n",(0,r.jsxs)(s.p,{children:["Raycast results are the result of functions such as ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.physics#raycast",children:"sm.physics.raycast"}),", ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.physics#distanceraycast",children:"sm.physics.distanceRaycast"})," and ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.localPlayer#getraycast",children:"sm.localPlayer.getRaycast"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Values:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"directionWorld"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The raycast's direction vector."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"fraction"})," [",(0,r.jsx)("strong",{children:" number "}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The fraction (0 - 1) of the distance reached until collision, divided by the ray's length."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"normalLocal"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The normal vector of the hit surface, relative to the target's rotation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"normalWorld"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The normal vector of the hit surface."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"originWorld"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The raycast's start position."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"pointLocal"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The world position of the hit point, relative to the target's position."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"pointWorld"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The world position of the hit point."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"type"})," [",(0,r.jsx)("strong",{children:" string "}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The physics type of the shape that was hit."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("code",{children:"valid"})," [",(0,r.jsx)("strong",{children:" bool "}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"Get"}),": Whether the raycast hit a target or not."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(s.h3,{id:"getareatrigger",children:"getAreaTrigger"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"raycastResult:getAreaTrigger()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger",children:"AreaTrigger"})," hit by the raycast, if the result type is ",(0,r.jsx)("code",{children:"areaTrigger"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"raycastResult"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult",children:" RaycastResult "})," "]}),"]: The raycastResult."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/AreaTrigger",children:" AreaTrigger "})," "]}),"]: The areaTrigger."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getbody",children:"getBody"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"raycastResult:getBody()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Userdata/Body",children:"Body"})," hit by the raycast, if the result type is ",(0,r.jsx)("code",{children:"body"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"raycastResult"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult",children:" RaycastResult "})," "]}),"]: The raycastResult."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Body",children:" Body "})," "]}),"]: The body."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getcharacter",children:"getCharacter"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"raycastResult:getCharacter()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Userdata/Character",children:"Character"})," hit by the raycast, if the result type is ",(0,r.jsx)("code",{children:"character"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"raycastResult"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult",children:" RaycastResult "})," "]}),"]: The raycastResult."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "})," "]}),"]: The character."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getharvestable",children:"getHarvestable"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"raycastResult:getHarvestable()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:"Harvestable"})," hit by the raycast, if the result type is ",(0,r.jsx)("code",{children:"harvestable"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"raycastResult"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult",children:" RaycastResult "})," "]}),"]: The raycastResult."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "})," "]}),"]: The harvestable."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getjoint",children:"getJoint"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"raycastResult:getJoint()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Userdata/Joint",children:"Joint"})," hit by the raycast, if the result type is ",(0,r.jsx)("code",{children:"joint"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"raycastResult"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult",children:" RaycastResult "})," "]}),"]: The raycastResult."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Joint",children:" Joint "})," "]}),"]: The joint."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getliftdata",children:"getLiftData"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"raycastResult:getLiftData()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Userdata/Lift",children:"Lift"})," hit by the raycast, if the result type is ",(0,r.jsx)("code",{children:"lift"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"raycastResult"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult",children:" RaycastResult "})," "]}),"]: The raycastResult."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift",children:" Lift "})," "]}),"]: The lift."]}),"\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether you are looking at the lift's top face or not. (true if you are looking at the top face)"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getshape",children:"getShape"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lua",children:"raycastResult:getShape()\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/docs/Game-Script-Environment/Userdata/Shape",children:"Shape"})," hit by the raycast, if the result type is ",(0,r.jsx)("code",{children:"shape"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("code",{children:"raycastResult"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/RaycastResult",children:" RaycastResult "})," "]}),"]: The raycastResult."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "})," "]}),"]: The shape."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var r=n(7294);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);