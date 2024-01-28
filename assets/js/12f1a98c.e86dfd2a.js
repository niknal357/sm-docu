"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[3341],{9432:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(5893),i=s(1151);const t={sidebar_position:14,title:"sm.container",hide_title:!0,"sidebar-label":"sm.container"},l=void 0,c={id:"Game-Script-Environment/Static-Functions/sm.container",title:"sm.container",description:"sm.container",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.container.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.container",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.container",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"sm.container",hide_title:!0,"sidebar-label":"sm.container"},sidebar:"tutorialSidebar",previous:{title:"sm.construction",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.construction"},next:{title:"sm.creation",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.creation"}},o={},a=[{value:"sm.container",id:"smcontainer",level:2},{value:"Functions",id:"functions",level:2},{value:"abortTransaction",id:"aborttransaction",level:3},{value:"beginTransaction",id:"begintransaction",level:3},{value:"collect",id:"collect",level:3},{value:"collectToSlot",id:"collecttoslot",level:3},{value:"endTransaction",id:"endtransaction",level:3},{value:"getFirstItem",id:"getfirstitem",level:3},{value:"itemUuid",id:"itemuuid",level:3},{value:"moveAll",id:"moveall",level:3},{value:"moveAllToCarryContainer",id:"movealltocarrycontainer",level:3},{value:"quantity",id:"quantity",level:3},{value:"spend",id:"spend",level:3},{value:"spendFromSlot",id:"spendfromslot",level:3},{value:"swap",id:"swap",level:3},{value:"totalQuantity",id:"totalquantity",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.h2,{id:"smcontainer",children:"sm.container"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Associated object type:"})," ",(0,r.jsx)(e.a,{href:"/docs/Game-Script-Environment/Userdata/Container",children:"Container"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["A ",(0,r.jsx)("strong",{children:"container"})," keeps track of items and stores them in slots. ",(0,r.jsx)("br",{}),"\r\nEach slot holds one item type and a quantity, if the item is stackable."]}),"\n",(0,r.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(e.h3,{id:"aborttransaction",children:"abortTransaction"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.abortTransaction()\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Aborts a transaction."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"begintransaction",children:"beginTransaction"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.beginTransaction()\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.p,{children:["Starts a new transaction shared across all containers. ",(0,r.jsx)("br",{}),"\r\nA transaction is a collection of all changes of container items that will be collected and processed."]}),"\n",(0,r.jsxs)(e.p,{children:["A transaction must be ended with ",(0,r.jsx)(e.a,{href:"#endtransaction",children:"sm.container.endTransaction"}),"."]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the transaction was successfully started or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"collect",children:"collect"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.collect( container, itemUuid, quantity, mustCollectAll )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Adds a quantity of a given item to a container."}),"\n",(0,r.jsx)(e.admonition,{title:"note",type:"info",children:(0,r.jsxs)(e.p,{children:["A transaction must be ",(0,r.jsx)(e.a,{href:"#begintransaction",children:"started"})," before using this."]})}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"itemUuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The item amount."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"mustCollectAll"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether all items must be collected to make the transaction valid. Defaults to true."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" int "}),"]: The amount of collected items."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"collecttoslot",children:"collectToSlot"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.collectToSlot( container, slot, itemUuid, quantity, mustCollectAll )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.p,{children:["Performs an ",(0,r.jsx)(e.a,{href:"#collect",children:"sm.container.collect"})," operation on a specific slot."]}),"\n",(0,r.jsx)(e.admonition,{title:"note",type:"info",children:(0,r.jsxs)(e.p,{children:["A transaction must be ",(0,r.jsx)(e.a,{href:"#begintransaction",children:"started"})," before using this."]})}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"slot"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The slot."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"itemUuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The item amount."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"mustCollectAll"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether all items must be collected to make the transaction valid. Defaults to true."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" int "}),"]: The amount of collected items."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"endtransaction",children:"endTransaction"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.endTransaction()\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Ends a transaction."}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the transaction was ended successfully or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"getfirstitem",children:"getFirstItem"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.getFirstItem( container )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns a table containing item uuid, quantity (and instance id for tools) at the first available slot."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" table "}),"]: The table containing the item data."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"itemuuid",children:"itemUuid"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.itemUuid( container )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns a table containing all item uuids in a container."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" table "}),"]: The table containing the item uuids."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"moveall",children:"moveAll"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.moveAll( container, container, moveAll )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Moves the content from one container to another."}),"\n",(0,r.jsx)(e.admonition,{title:"note",type:"info",children:(0,r.jsxs)(e.p,{children:["A transaction must be ",(0,r.jsx)(e.a,{href:"#begintransaction",children:"started"})," before using this."]})}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The source container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The target container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"moveAll"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: Whether all items are required to be movable."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"movealltocarrycontainer",children:"moveAllToCarryContainer"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.moveAllToCarryContainer( container, player, color )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Moves the content of input container to the player carry container and assigns the carry color."}),"\n",(0,r.jsx)(e.admonition,{title:"note",type:"info",children:(0,r.jsxs)(e.p,{children:["A transaction must be ",(0,r.jsx)(e.a,{href:"#begintransaction",children:"started"})," before using this."]})}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container to assign."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"player"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Player",children:" Player "})," "]}),"]: The player to receive the carry content and color."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"color"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Color",children:" Color "})," "]}),"]: The color to assign."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"quantity",children:"quantity"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.quantity( container )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns a table containing all item quantities in a container."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" table "}),"]: The table of item quantities."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"spend",children:"spend"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.spend( container, itemUuid, quantity, mustSpendAll )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Removes a quantity of a given item from a container."}),"\n",(0,r.jsx)(e.admonition,{title:"note",type:"info",children:(0,r.jsxs)(e.p,{children:["A transaction must be ",(0,r.jsx)(e.a,{href:"#begintransaction",children:"started"})," before using this."]})}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"itemUuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The item amount."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"mustSpendAll"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" int "}),"]: The amount of successfully removed items."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"spendfromslot",children:"spendFromSlot"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.spendFromSlot( container, slot, itemUuid, quantity, mustSpendAll )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.p,{children:["Performs an ",(0,r.jsx)(e.a,{href:"#spend",children:"sm.container.spend"})," operation on a specific slot."]}),"\n",(0,r.jsx)(e.admonition,{title:"note",type:"info",children:(0,r.jsxs)(e.p,{children:["A transaction must be ",(0,r.jsx)(e.a,{href:"#begintransaction",children:"started"})," before using this."]})}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"slot"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The slot."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"itemUuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"quantity"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The item amount."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"mustSpendAll"})," [",(0,r.jsx)("strong",{children:" bool "}),"]: True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" int "}),"]: The amount of successfully removed items."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"swap",children:"swap"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.swap( container, container, sourceSlot, targetSlot )\n"})}),"\n",(0,r.jsx)("code",{children:"Server-Only"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Swaps two item slots."}),"\n",(0,r.jsx)(e.admonition,{title:"note",type:"info",children:(0,r.jsxs)(e.p,{children:["A transaction must be ",(0,r.jsx)(e.a,{href:"#begintransaction",children:"started"})," before using this."]})}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The first container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The second container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"sourceSlot"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The first slot."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"targetSlot"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The second slot."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the action was successful or not."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"totalquantity",children:"totalQuantity"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"sm.container.totalQuantity( container, uuid )\n"})}),"\n",(0,r.jsx)(e.p,{children:"Returns the total number of a given item uuid in a container."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"container"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Container",children:" Container "})," "]}),"]: The container."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The item uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["[",(0,r.jsx)("strong",{children:" int "}),"]: The quantity of the given item uuid."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>l});var r=s(7294);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);