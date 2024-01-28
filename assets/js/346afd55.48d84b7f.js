"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[5913],{6136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(5893),t=r(1151);const a={sidebar_position:25,title:"Storage",hide_title:!0,"sidebar-label":"Storage"},o=void 0,i={id:"Game-Script-Environment/Userdata/Storage",title:"Storage",description:"Storage",source:"@site/docs/Game-Script-Environment/Userdata/Storage.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/Storage",permalink:"/docs/Game-Script-Environment/Userdata/Storage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Storage",hide_title:!0,"sidebar-label":"Storage"},sidebar:"tutorialSidebar",previous:{title:"Shape",permalink:"/docs/Game-Script-Environment/Userdata/Shape"},next:{title:"Tool",permalink:"/docs/Game-Script-Environment/Userdata/Tool"}},d={},c=[{value:"Storage",id:"storage",level:2},{value:"Functions",id:"functions",level:2},{value:"load",id:"load",level:3},{value:"save",id:"save",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Associated namespace:"})," ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Storage",children:"sm.storage"})]}),"\n",(0,s.jsxs)(n.p,{children:["A userdata object representing a ",(0,s.jsx)("strong",{children:"storage"})," object."]}),"\n",(0,s.jsxs)(n.admonition,{title:"note",type:"info",children:[(0,s.jsxs)(n.p,{children:["The storage object is only accessible via ",(0,s.jsx)("code",{children:"self.storage"})," in scripted objects (see ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Classes/CommonCallbacks",children:"classes"}),")."]}),(0,s.jsx)(n.p,{children:"The storage object also allows for data to be saved in creations saved on the Lift."})]}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.h3,{id:"load",children:"load"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"storage:load()\n"})}),"\n",(0,s.jsx)("code",{children:"Server-Only"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["Returns the data stored in the storage object. ",(0,s.jsx)("br",{}),"\r\nReturns nil if the object contains no data."]}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"storage"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Storage",children:" Storage "})," "]}),"]: The storage."]}),"\n"]}),"\n",(0,s.jsx)("strong",{children:"Returns:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[",(0,s.jsx)("strong",{children:" any "}),"]: The data."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"save",children:"save"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"storage:save( data )\n"})}),"\n",(0,s.jsx)("code",{children:"Server-Only"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Saves any Lua data into the storage object."}),"\n",(0,s.jsxs)(n.p,{children:["The data will remain stored after closing the world, and is retrieved using ",(0,s.jsx)(n.a,{href:"#load",children:"load"}),"."]}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"storage"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Storage",children:" Storage "})," "]}),"]: The storage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"data"})," [",(0,s.jsx)("strong",{children:" any "}),"]: The data."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var s=r(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);