"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[1037],{9141:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=s(5893),i=s(1151);const t={sidebar_position:8,title:"Container",hide_title:!0,"sidebar-label":"Container"},l=void 0,c={id:"Game-Script-Environment/Userdata/Container",title:"Container",description:"Container",source:"@site/docs/Game-Script-Environment/Userdata/Container.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/Container",permalink:"/docs/Game-Script-Environment/Userdata/Container",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Container",hide_title:!0,"sidebar-label":"Container"},sidebar:"tutorialSidebar",previous:{title:"Color",permalink:"/docs/Game-Script-Environment/Userdata/Color"},next:{title:"CullSphereGroup",permalink:"/docs/Game-Script-Environment/Userdata/CullSphereGroup"}},d={},o=[{value:"Container",id:"container",level:2},{value:"Functions",id:"functions",level:2},{value:"canCollect",id:"cancollect",level:3},{value:"canSpend",id:"canspend",level:3},{value:"getAllowCollect",id:"getallowcollect",level:3},{value:"getAllowSpend",id:"getallowspend",level:3},{value:"getItem",id:"getitem",level:3},{value:"getMaxStackSize",id:"getmaxstacksize",level:3},{value:"getSize",id:"getsize",level:3},{value:"hasChanged",id:"haschanged",level:3},{value:"isEmpty",id:"isempty",level:3},{value:"setAllowCollect",id:"setallowcollect",level:3},{value:"setAllowSpend",id:"setallowspend",level:3},{value:"setFilters",id:"setfilters",level:3},{value:"setItem",id:"setitem",level:3}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.h2,{id:"container",children:"Container"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Associated namespace:"})," ",(0,r.jsx)(e.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.container",children:"sm.container"})]}),"\n",(0,r.jsxs)(e.p,{children:["A userdata object representing a ",(0,r.jsx)("strong",{children:"container"})," in the game."]}),"\n",(0,r.jsx)("strong",{children:"Values:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)("code",{children:"allowCollect"})," [",(0,r.jsx)("strong",{children:" bool "}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"Get"}),": (Server-Only) Whether the container can collect items."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"Set"}),": (Server-Only) Sets whether the container can collect items or not."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)("code",{children:"allowSpend"})," [",(0,r.jsx)("strong",{children:" bool "}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"Get"}),": (Server-Only) Whether the container can spend items."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"Set"}),": (Server-Only) Sets whether the container can spend items or not."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)("code",{children:"id"})," [",(0,r.jsx)("strong",{children:" int "}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The id of the container."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)("code",{children:"size"})," [",(0,r.jsx)("strong",{children:" int "}),"] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"Get"}),": The number of slots in the container."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Operations:"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Operation"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:[(0,r.jsx)("code",{children:"Container"})," == ",(0,r.jsx)("code",{children:"Container"})]}),(0,r.jsxs)(e.td,{children:["Checks if two instances of ",(0,r.jsx)("code",{children:"Container"})," refer to the same ",(0,r.jsx)("code",{children:"Container"}),"."]})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(e.h3,{id:"cancollect",children:"canCollect"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:canCollect( itemUuid, quantity )\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Checks if ",(0,r.jsx)(e.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.container#collect",children:"sm.container.collect"})," is allowed using the same parameters."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"itemUuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The uuid of the item."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The number of items."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container can collect the item(s) or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"canspend",children:"canSpend"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:canSpend( itemUuid, quantity )\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Checks if ",(0,r.jsx)(e.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.container#spend",children:"sm.container.spend"})," is allowed using the same parameters."]}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"itemUuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The uuid of the item."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The number of items."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container can spend the item(s) or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getallowcollect",children:"getAllowCollect"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:getAllowCollect()\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Returns whether the container can collect items."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container can collect items or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getallowspend",children:"getAllowSpend"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:getAllowSpend()\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Returns whether the container can spend items."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container can spend items or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getitem",children:"getItem"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:getItem( slot )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns a table containing item uuid, quantity (and instance id for tools) at the given slot."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"slot"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The slot."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" table "}),"]: The table containing item information (see table content below)."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Table Content:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item UUID."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"instance"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The instance ID, if the item is a tool."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The item amount."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getmaxstacksize",children:"getMaxStackSize"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:getMaxStackSize()\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns the max stack size in the container."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" int "}),"]: The container's max stack size."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getsize",children:"getSize"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:getSize()\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns the number of slots in a container."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" int "}),"]: The size."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"haschanged",children:"hasChanged"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:hasChanged( tick )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns true if the given tick is lower than the tick the container was last changed."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"tick"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The tick."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container has changed or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"isempty",children:"isEmpty"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:isEmpty()\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns true if the container is empty."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container is empty or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"setallowcollect",children:"setAllowCollect"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:setAllowCollect( state )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Sets whether the container can collect items."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"state"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container can collect items or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"setallowspend",children:"setAllowSpend"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:setAllowSpend( state )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Sets whether the container can spend items."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"state"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the container can spend items or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"setfilters",children:"setFilters"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:setFilters( filter )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Sets item filters."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"filter"})," [",(0,r.jsx)("strong",{children:" table "}),"]: The table of allowed item uuids."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"setitem",children:"setItem"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"container:setItem( slot, itemUuid, quantity, instance )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Sets the number of items stacked in a given container slot."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"slot"})," [",(0,r.jsx)("strong",{children:" table "}),"]: The slot."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"itemUuid"})," [",(0,r.jsx)("strong",{children:" table "}),"]: The uuid of the item."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" table "}),"]: The number of items."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"instance"})," [",(0,r.jsx)("strong",{children:" table "}),"]: The instance id, if the item is a tool. (Optional)"]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the action was successful or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>l});var r=s(7294);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);