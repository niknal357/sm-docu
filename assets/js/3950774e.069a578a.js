"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[2094],{2230:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var t=n(5893),c=n(1151);const s={sidebar_position:11,title:"sm.character",hide_title:!0,"sidebar-label":"sm.character"},a=void 0,i={id:"Game-Script-Environment/Static-Functions/sm.character",title:"sm.character",description:"sm.character",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.character.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.character",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.character",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"sm.character",hide_title:!0,"sidebar-label":"sm.character"},sidebar:"tutorialSidebar",previous:{title:"sm.challenge",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.challenge"},next:{title:"sm.color",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.color"}},l={},o=[{value:"sm.character",id:"smcharacter",level:2},{value:"Functions",id:"functions",level:2},{value:"createCharacter",id:"createcharacter",level:3},{value:"preloadRenderables",id:"preloadrenderables",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h2,{id:"smcharacter",children:"sm.character"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Associated object type:"})," ",(0,t.jsx)(r.a,{href:"/docs/Game-Script-Environment/Userdata/Character",children:"Character"})]}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)("strong",{children:"character"})," is the physical body of a living entity in the world. Both ",(0,t.jsx)("strong",{children:"players"})," and ",(0,t.jsx)("strong",{children:"units"})," may control a character."]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(r.h3,{id:"createcharacter",children:"createCharacter"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:"sm.character.createCharacter( player, world, position, yaw, pitch )\n"})}),"\n",(0,t.jsx)("code",{children:"Server-Only"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.p,{children:"Creates a new character in a world."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)("code",{children:"player"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Player",children:" Player "})," "]}),"]: The player controlling the character."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)("code",{children:"world"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/World",children:" World "})," "]}),"]: The world the character is created in."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)("code",{children:"position"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The world position of the character."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)("code",{children:"yaw"})," [",(0,t.jsx)("strong",{children:" number "}),"]: The initial yaw of the character (Optional)."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)("code",{children:"pitch"})," [",(0,t.jsx)("strong",{children:" number "}),"]: The initial pitch of the character (Optional)."]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Returns:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["[",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "})," "]}),"]: The created character."]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"preloadrenderables",children:"preloadRenderables"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:"sm.character.preloadRenderables( renderables )\n"})}),"\n",(0,t.jsx)("code",{children:"Client-Only"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.p,{children:["Pre-loads renderable data to be used by the character. ",(0,t.jsx)("br",{}),"\r\nThis eliminates excessive loading during run time."]}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)("code",{children:"renderables"})," [",(0,t.jsx)("strong",{children:" table "}),"]: The table of renderables."]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var t=n(7294);const c={},s=t.createContext(c);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);