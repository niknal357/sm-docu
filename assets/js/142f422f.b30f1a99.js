"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[4721],{198:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=r(5893),a=r(1151);const s={sidebar_position:11,title:"sm.terrainGeneration",hide_title:!0,"sidebar-label":"sm.terrainGeneration"},i=void 0,o={id:"Terrain-Script-Environment/Static-Functions/sm.terrainGeneration",title:"sm.terrainGeneration",description:"sm.terrainGeneration",source:"@site/docs/Terrain-Script-Environment/Static-Functions/sm.terrainGeneration.md",sourceDirName:"Terrain-Script-Environment/Static-Functions",slug:"/Terrain-Script-Environment/Static-Functions/sm.terrainGeneration",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.terrainGeneration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"sm.terrainGeneration",hide_title:!0,"sidebar-label":"sm.terrainGeneration"},sidebar:"tutorialSidebar",previous:{title:"sm.terrainData",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.terrainData"},next:{title:"sm.terrainTile",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.terrainTile"}},d={},l=[{value:"sm.terrainGeneration",id:"smterraingeneration",level:2},{value:"Functions",id:"functions",level:2},{value:"getTempData",id:"gettempdata",level:3},{value:"loadGameStorage",id:"loadgamestorage",level:3},{value:"saveAndSyncGameStorage",id:"saveandsyncgamestorage",level:3},{value:"setGameStorageNoSave",id:"setgamestoragenosave",level:3},{value:"setTempData",id:"settempdata",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"smterraingeneration",children:"sm.terrainGeneration"}),"\n",(0,t.jsx)(n.p,{children:"Allows reading and writing in game storage from terrain generation scripts."}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"gettempdata",children:"getTempData"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"sm.terrainGeneration.getTempData( key )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Loads temporary data stored by terrain generation."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: Key used to lookup the saved data."]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Returns:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[",(0,t.jsx)("strong",{children:" any "}),"]: The saved data."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"loadgamestorage",children:"loadGameStorage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"sm.terrainGeneration.loadGameStorage( key )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Loads data stored by terrain generation."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: Key used to lookup the saved data."]}),"\n"]}),"\n",(0,t.jsx)("strong",{children:"Returns:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["[",(0,t.jsx)("strong",{children:" any "}),"]: The saved data."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"saveandsyncgamestorage",children:"saveAndSyncGameStorage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"sm.terrainGeneration.saveAndSyncGameStorage( key, data )\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Saves data produced from terrain generation and synchronizes to clients. ",(0,t.jsx)("br",{}),"\r\nSaved data can be retrieved in later game sessions and by the game lua environment."]}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: Key used to lookup and save the data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: The data to save."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setgamestoragenosave",children:"setGameStorageNoSave"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"sm.terrainGeneration.setGameStorageNoSave( key, data )\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets data produced from terrain generation and synchronizes to clients. ",(0,t.jsx)("br",{}),"\r\nThis data is only valid during the game session."]}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: Key used to lookup and save the data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: The data to save."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"settempdata",children:"setTempData"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"sm.terrainGeneration.setTempData( key, data )\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets temporary data produced from terrain generation and synchronizes to clients."}),"\n",(0,t.jsx)("strong",{children:"Arguments:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: Key used to lookup and save the data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("code",{children:"key"})," [",(0,t.jsx)("strong",{children:" any "}),"]: The data to save."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(7294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);