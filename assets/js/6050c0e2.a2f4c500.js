"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[1297],{9465:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var l=s(5893),t=s(1151);const i={sidebar_position:1,title:"Common Callbacks",hide_title:!0,"sidebar-label":"Common Callbacks"},r=void 0,a={id:"Game-Script-Environment/Classes/CommonCallbacks",title:"Common Callbacks",description:"Common Fields and Callbacks",source:"@site/docs/Game-Script-Environment/Classes/CommonCallbacks.md",sourceDirName:"Game-Script-Environment/Classes",slug:"/Game-Script-Environment/Classes/CommonCallbacks",permalink:"/docs/Game-Script-Environment/Classes/CommonCallbacks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Common Callbacks",hide_title:!0,"sidebar-label":"Common Callbacks"},sidebar:"tutorialSidebar",previous:{title:"Constants",permalink:"/docs/Game-Script-Environment/Constants"},next:{title:"ShapeClass",permalink:"/docs/Game-Script-Environment/Classes/ShapeClass"}},c={},d=[{value:"Common Fields and Callbacks",id:"common-fields-and-callbacks",level:3},{value:"Server + Client",id:"server--client",level:2},{value:"onCreate",id:"oncreate",level:3},{value:"onDestroy",id:"ondestroy",level:3},{value:"onRefresh",id:"onrefresh",level:3},{value:"onFixedUpdate",id:"onfixedupdate",level:3},{value:"Client-only",id:"client-only",level:2},{value:"onUpdate",id:"onupdate",level:3},{value:"onClientDataUpdate",id:"onclientdataupdate",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h3,{id:"common-fields-and-callbacks",children:"Common Fields and Callbacks"}),"\n",(0,l.jsxs)(n.p,{children:["The callback functions listed below are available in ",(0,l.jsx)("strong",{children:"every"})," ",(0,l.jsx)("code",{children:"ScriptClass"}),", ",(0,l.jsx)("strong",{children:"in addition"})," ",(0,l.jsx)("br",{}),"\r\nto that ScriptClass's own fields and callbacks."]}),"\n",(0,l.jsx)(n.h2,{id:"server--client",children:"Server + Client"}),"\n",(0,l.jsx)(n.h3,{id:"oncreate",children:"onCreate"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function Class.server_onCreate( self )\r\nend\r\nfunction Class.client_onCreate( self )\r\nend\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Called when the scripted object is created. ",(0,l.jsx)("br",{}),"\r\nThis occurs when a new object is built, spawned, or loaded from the save file."]}),"\n",(0,l.jsx)("strong",{children:"Arguments:"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"self"})," [",(0,l.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"ondestroy",children:"onDestroy"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function Class.server_onDestroy( self )\r\nend\r\nfunction Class.client_onDestroy( self )\r\nend\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Called when the scripted object is destroyed. ",(0,l.jsx)("br",{}),"\r\nThis occurs when an object is erased, destroyed by an explosion, robot attack, etc."]}),"\n",(0,l.jsx)("strong",{children:"Arguments:"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"self"})," [",(0,l.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"onrefresh",children:"onRefresh"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function Class.server_onRefresh( self )\r\nend\r\nfunction Class.client_onRefresh( self )\r\nend\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Called if the Lua script attached to the object is modified while the game is running. ",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(n.admonition,{title:"note",type:"info",children:(0,l.jsxs)(n.p,{children:["This event requires Scrap Mechanic to be running with the ",(0,l.jsx)("code",{children:"-dev"})," launch option. ",(0,l.jsx)("br",{}),"\r\nThis will allow scripts to automatically refresh upon changes."]})}),"\n",(0,l.jsx)("strong",{children:"Arguments:"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"self"})," [",(0,l.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"onfixedupdate",children:"onFixedUpdate"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function Class.server_onFixedUpdate( self, timeStep )\r\nend\r\nfunction Class.client_onFixedUpdate( self, timeStep )\r\nend\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Called every game tick - 40 times per second. ",(0,l.jsx)("br",{}),"\r\nIf the frame rate is lower than 40 fps, this event may be called twice. ",(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(n.p,{children:"During a fixed update, physics and logic between interactables are updated."}),"\n",(0,l.jsx)("strong",{children:"Arguments:"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"self"})," [",(0,l.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"timeStep"})," [",(0,l.jsx)("strong",{children:" number "}),"]: The time period of a tick. (Always 0.025, a 1/40th of a second.)"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"client-only",children:"Client-only"}),"\n",(0,l.jsx)(n.h3,{id:"onupdate",children:"onUpdate"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function Class.client_onUpdate( self, deltaTime )\r\nend\n"})}),"\n",(0,l.jsx)(n.p,{children:"Called every frame."}),"\n",(0,l.jsx)(n.p,{children:"During a frame update, graphics, animations and effects are updated."}),"\n",(0,l.jsxs)(n.admonition,{title:"warning",type:"caution",children:[(0,l.jsx)(n.p,{children:"Because of how frequent this event is called, the game's frame rate is greatly affected by the amount of code executed here."}),(0,l.jsxs)(n.p,{children:["For any non-graphics related code, consider using ",(0,l.jsx)(n.a,{href:"#onfixedupdate",children:"client_onFixedUpdate"})," instead."]}),(0,l.jsx)(n.p,{children:"If the event is not in use, consider removing it from the script (Event callbacks that are not implemented will not be called)."})]}),"\n",(0,l.jsx)("strong",{children:"Arguments:"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"self"})," [",(0,l.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"deltaTime"})," [",(0,l.jsx)("strong",{children:" number "}),"]: Delta time since the last frame."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"onclientdataupdate",children:"onClientDataUpdate"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function Class.client_onClientDataUpdate( self, data, channel )\r\nend\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Called when the client receives new client data updates from the server set with ",(0,l.jsxs)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Network#setclientdata",children:["Network",":setClientData"]}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Data set in this way is persistent and the latest data will automatically be sent to new clients."}),"\n",(0,l.jsx)(n.p,{children:"The data will arrive after client_onCreate during the same tick."}),"\n",(0,l.jsx)(n.p,{children:"Channel 1 will be received before channel 2 if both are updated."}),"\n",(0,l.jsx)("strong",{children:"Arguments:"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"self"})," [",(0,l.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"data"})," [",(0,l.jsx)("strong",{children:" any "}),"]: Any lua object set with ",(0,l.jsxs)("code",{children:["Network",":setClientData"]}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)("code",{children:"channel"})," [",(0,l.jsx)("strong",{children:" int "}),"]: Client data channel, 1 or 2. (default: 1)"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var l=s(7294);const t={},i=l.createContext(t);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);