"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[926],{2123:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=s(5893),r=s(1151);const c={sidebar_position:23,title:"ScriptableObject",hide_title:!0,"sidebar-label":"ScriptableObject"},l=void 0,i={id:"Game-Script-Environment/Userdata/ScriptableObject",title:"ScriptableObject",description:"ScriptableObject",source:"@site/docs/Game-Script-Environment/Userdata/ScriptableObject.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/ScriptableObject",permalink:"/docs/Game-Script-Environment/Userdata/ScriptableObject",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"ScriptableObject",hide_title:!0,"sidebar-label":"ScriptableObject"},sidebar:"tutorialSidebar",previous:{title:"RaycastResult",permalink:"/docs/Game-Script-Environment/Userdata/RaycastResult"},next:{title:"Shape",permalink:"/docs/Game-Script-Environment/Userdata/Shape"}},d={},a=[{value:"ScriptableObject",id:"scriptableobject",level:2},{value:"Functions",id:"functions",level:2},{value:"destroy",id:"destroy",level:3},{value:"getClientPublicData",id:"getclientpublicdata",level:3},{value:"getId",id:"getid",level:3},{value:"getPublicData",id:"getpublicdata",level:3},{value:"getWorld",id:"getworld",level:3},{value:"setClientPublicData",id:"setclientpublicdata",level:3},{value:"setPublicData",id:"setpublicdata",level:3}];function j(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"scriptableobject",children:"ScriptableObject"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Associated namespace:"})," ",(0,t.jsx)(n.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.scriptableObject",children:"sm.scriptableObject"})]}),"\n",(0,t.jsxs)(n.p,{children:["A userdata object representing a ",(0,t.jsx)("strong",{children:"scriptable object"}),"."]}),"\n",(0,t.jsx)("strong",{children:"Values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("code",{children:"clientPublicData"})," [",(0,t.jsx)("strong",{children:" table "}),"] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"Get"}),": (Client-Only) The objects's client public data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"Set"}),": (Client-Only) Sets the objects's client public data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("code",{children:"id"})," [",(0,t.jsx)("strong",{children:" int "}),"] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"Get"}),": The object's id."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("code",{children:"publicData"})," [",(0,t.jsx)("strong",{children:" table "}),"] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"Get"}),": (Server-Only) The object's server public data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"Set"}),": (Server-Only) Sets the object's server public data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("code",{children:"world"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/World",children:" World "})," "]}),"] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"Get"}),": The object's world."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Operations:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operation"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("code",{children:"ScriptableObject"})," == ",(0,t.jsx)("code",{children:"ScriptableObject"})]}),(0,t.jsxs)(n.td,{children:["Checks if two instances of ",(0,t.jsx)("code",{children:"ScriptableObject"})," refer to the same ",(0,t.jsx)("code",{children:"ScriptableObject"}),"."]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"destroy",children:"destroy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"scriptableObject:destroy()\n"})}),"\n",(0,t.jsx)("code",{children:"Server-Only"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Destroys the object."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"scriptableObject"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/ScriptableObject",children:" ScriptableObject "})," "]}),"]: The scriptable object."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getclientpublicdata",children:"getClientPublicData"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"scriptableObject:getClientPublicData()\n"})}),"\n",(0,t.jsx)("code",{children:"Client-Only"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Returns the object's client public data."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"scriptableObject"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/ScriptableObject",children:" ScriptableObject "})," "]}),"]: The scriptable object."]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Returns:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[",(0,t.jsx)("strong",{children:" table "}),"]: The objects's client public data."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getid",children:"getId"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"scriptableObject:getId()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the object's id."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"scriptableObject"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/ScriptableObject",children:" ScriptableObject "})," "]}),"]: The scriptable object."]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Returns:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[",(0,t.jsx)("strong",{children:" int "}),"]: The objects's id."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getpublicdata",children:"getPublicData"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"scriptableObject:getPublicData()\n"})}),"\n",(0,t.jsx)("code",{children:"Server-Only"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Returns the object's server public data."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"scriptableObject"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/ScriptableObject",children:" ScriptableObject "})," "]}),"]: The scriptable object."]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Returns:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[",(0,t.jsx)("strong",{children:" table "}),"]: The objects's server public data."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"getworld",children:"getWorld"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"scriptableObject:getWorld()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the object's world."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"scriptableObject"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/ScriptableObject",children:" ScriptableObject "})," "]}),"]: The scriptable object."]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Returns:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/World",children:" World "})," "]}),"]: The objects's world."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setclientpublicdata",children:"setClientPublicData"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"scriptableObject:setClientPublicData( data )\n"})}),"\n",(0,t.jsx)("code",{children:"Client-Only"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Sets the object's client public data."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"scriptableObject"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/ScriptableObject",children:" ScriptableObject "})," "]}),"]: The scriptable object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"data"})," [",(0,t.jsx)("strong",{children:" table "}),"]: The data to set."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setpublicdata",children:"setPublicData"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"scriptableObject:setPublicData( data )\n"})}),"\n",(0,t.jsx)("code",{children:"Server-Only"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Sets the object's server public data."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"scriptableObject"})," [",(0,t.jsxs)("strong",{children:[" ",(0,t.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/ScriptableObject",children:" ScriptableObject "})," "]}),"]: The scriptable object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"data"})," [",(0,t.jsx)("strong",{children:" table "}),"]: The data to set."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(7294);const r={},c=t.createContext(r);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);