"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[2848],{8338:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=n(5893),i=n(1151);const d={sidebar_position:4,title:"sm.debugDraw",hide_title:!0,"sidebar-label":"sm.debugDraw"},a=void 0,c={id:"Terrain-Script-Environment/Static-Functions/sm.debugDraw",title:"sm.debugDraw",description:"sm.debugDraw",source:"@site/docs/Terrain-Script-Environment/Static-Functions/sm.debugDraw.md",sourceDirName:"Terrain-Script-Environment/Static-Functions",slug:"/Terrain-Script-Environment/Static-Functions/sm.debugDraw",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.debugDraw",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"sm.debugDraw",hide_title:!0,"sidebar-label":"sm.debugDraw"},sidebar:"tutorialSidebar",previous:{title:"sm.color",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.color"},next:{title:"sm.harvestable",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.harvestable"}},o={},l=[{value:"sm.debugDraw",id:"smdebugdraw",level:2},{value:"Functions",id:"functions",level:2},{value:"addArrow",id:"addarrow",level:3},{value:"addSphere",id:"addsphere",level:3},{value:"addTransform",id:"addtransform",level:3},{value:"clear",id:"clear",level:3},{value:"removeArrow",id:"removearrow",level:3},{value:"removeSphere",id:"removesphere",level:3},{value:"removeTransform",id:"removetransform",level:3}];function t(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.h2,{id:"smdebugdraw",children:"sm.debugDraw"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)("strong",{children:"Debug Draw"})," api can be used for drawing geometric primitives for debug purposes."]}),"\n",(0,s.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(r.h3,{id:"addarrow",children:"addArrow"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",children:"sm.debugDraw.addArrow( name, startPos, endPos, color )\n"})}),"\n",(0,s.jsx)(r.p,{children:"Adds a named arrow debug draw."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"name"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The debug arrow name."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"startPos"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The start position."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"endPos"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The end position. Defaults to ",(0,s.jsx)("code",{children:"startPos"})," plus 1 on the Z axis."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"color"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Color",children:" Color "})," "]}),"]: The color. Defaults to white."]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"addsphere",children:"addSphere"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",children:"sm.debugDraw.addSphere( name, center, radius, color )\n"})}),"\n",(0,s.jsx)(r.p,{children:"Adds a named sphere debug draw."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"name"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The debug sphere name."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"center"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The center position."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"radius"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The radius. Defaults to 0.125."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"color"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Color",children:" Color "})," "]}),"]: The color. Defaults to white."]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"addtransform",children:"addTransform"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",children:"sm.debugDraw.addTransform( name, origin, rotation, scale )\n"})}),"\n",(0,s.jsx)(r.p,{children:"Adds a named transform debug draw."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"name"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The debug transform name."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"origin"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The transform origin."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"rotation"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Terrain-Script-Environment/Userdata/Quat",children:" Quat "})," "]}),"]: The transform rotation."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"scale"})," [",(0,s.jsx)("strong",{children:" number "}),"]: The transform scale. Defaults to 1.0."]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"clear",children:"clear"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",children:"sm.debugDraw.clear( name )\n"})}),"\n",(0,s.jsx)(r.p,{children:"Removes all debug draws beginning with a given name."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"name"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The name. Defaults to ",(0,s.jsx)("code",{children:'""'}),", matching all debug draws."]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"removearrow",children:"removeArrow"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",children:"sm.debugDraw.removeArrow( name )\n"})}),"\n",(0,s.jsx)(r.p,{children:"Removes a named arrow debug draw."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"name"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The name."]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"removesphere",children:"removeSphere"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",children:"sm.debugDraw.removeSphere( name )\n"})}),"\n",(0,s.jsx)(r.p,{children:"Removes a named sphere debug draw."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"name"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The name."]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"removetransform",children:"removeTransform"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lua",children:"sm.debugDraw.removeTransform( name )\n"})}),"\n",(0,s.jsx)(r.p,{children:"Removes a named transform debug draw."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)("code",{children:"name"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The name."]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>a});var s=n(7294);const i={},d=s.createContext(i);function a(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);