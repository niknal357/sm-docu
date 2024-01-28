"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[3752],{9899:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=s(5893),i=s(1151);const t={sidebar_position:44,title:"sm.shape",hide_title:!0,"sidebar-label":"sm.shape"},c=void 0,d={id:"Game-Script-Environment/Static-Functions/sm.shape",title:"sm.shape",description:"sm.shape",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.shape.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.shape",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.shape",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,title:"sm.shape",hide_title:!0,"sidebar-label":"sm.shape"},sidebar:"tutorialSidebar",previous:{title:"sm.scriptableObject",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.scriptableObject"},next:{title:"sm.storage",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.storage"}},l={},a=[{value:"sm.shape",id:"smshape",level:2},{value:"Functions",id:"functions",level:2},{value:"createBlock",id:"createblock",level:3},{value:"createPart",id:"createpart",level:3},{value:"getShapeDescription",id:"getshapedescription",level:3},{value:"getShapeIcon",id:"getshapeicon",level:3},{value:"getShapeTitle",id:"getshapetitle",level:3},{value:"getShapeTypeColor",id:"getshapetypecolor",level:3},{value:"getIsHarvest",id:"getisharvest",level:3},{value:"uuidExists",id:"uuidexists",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"smshape",children:"sm.shape"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Associated object type:"})," ",(0,r.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Shape",children:"Shape"})]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)("strong",{children:"shape"})," is any block, part or basic material that can be built by a player. ",(0,r.jsx)("br",{}),"\r\nShapes are always connected to a ",(0,r.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Body",children:"body"}),", which is a collection of shapes."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information about creating your own scripted shapes, see ",(0,r.jsx)(n.a,{href:"/docs/Game-Script-Environment/Classes/ShapeClass",children:"ShapeClass"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"createblock",children:"createBlock"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.createBlock( uuid, size, position, rotation, dynamic, forceSpawn )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Creates a new block."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The block uuid."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"size"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The block size."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"position"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The the world position."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"rotation"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat",children:" Quat "})," "]}),"]: The world rotation (defaults to none)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"dynamic"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the shape is dynamic or static. Defaults to true (dynamic)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"forceSpawn"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether to force spawn the shape or not. Optional."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "})," "]}),"]: The created shape."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"createpart",children:"createPart"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.createPart( uuid, position, rotation, dynamic, forceSpawn )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Creates a new part."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The part uuid."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"position"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The the world position."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"rotation"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Quat",children:" Quat "})," "]}),"]: The world rotation (defaults to none)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"dynamic"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the shape is dynamic or static. Defaults to true (dynamic)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"forceSpawn"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether to force spawn the shape or not. Optional."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "})," "]}),"]: The created shape."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getshapedescription",children:"getShapeDescription"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.getShapeDescription( uuid )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the item description for the given uuid."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" string "}),"]: The description."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getshapeicon",children:"getShapeIcon"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.getShapeIcon( uuid )\n"})}),"\n",(0,r.jsx)(n.p,{children:"[Missing Description]"}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" any "}),"]: The shape's icon."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getshapetitle",children:"getShapeTitle"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.getShapeTitle( uuid )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the item's name for the given uuid."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" string "}),"]: The shape's name."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getshapetypecolor",children:"getShapeTypeColor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.getShapeTypeColor( uuid )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the color of the uuid's shape type."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Color",children:" Color "})," "]}),"]: The color of the shape type."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getisharvest",children:"getIsHarvest"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.getIsHarvest( uuid )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the uuid belongs to a harvestable shape."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the shape is harvestable or not."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"uuidexists",children:"uuidExists"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.shape.uuidExists( uuid )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns whether the shape uuid exists."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The shape uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the uuid exists or not."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var r=s(7294);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);