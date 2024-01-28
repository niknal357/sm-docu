"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[8494],{4198:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(5893),l=r(1151);const i={sidebar_position:9,title:"WorldClass",hide_title:!0,"sidebar-label":"WorldClass"},t=void 0,c={id:"Game-Script-Environment/Classes/WorldClass",title:"WorldClass",description:"WorldClass",source:"@site/docs/Game-Script-Environment/Classes/WorldClass.md",sourceDirName:"Game-Script-Environment/Classes",slug:"/Game-Script-Environment/Classes/WorldClass",permalink:"/docs/Game-Script-Environment/Classes/WorldClass",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"WorldClass",hide_title:!0,"sidebar-label":"WorldClass"},sidebar:"tutorialSidebar",previous:{title:"GameClass",permalink:"/docs/Game-Script-Environment/Classes/GameClass"},next:{title:"ScriptableObjectClass",permalink:"/docs/Game-Script-Environment/Classes/ScriptableObjectClass"}},a={},d=[{value:"WorldClass",id:"worldclass",level:3},{value:"Server + Client",id:"server--client",level:2},{value:"onCollision",id:"oncollision",level:3},{value:"Server-only",id:"server-only",level:2},{value:"onCellCreated",id:"oncellcreated",level:3},{value:"onCellLoaded",id:"oncellloaded",level:3},{value:"onCellUnloaded",id:"oncellunloaded",level:3},{value:"onInteractableCreated",id:"oninteractablecreated",level:3},{value:"onInteractableDestroyed",id:"oninteractabledestroyed",level:3},{value:"onProjectile",id:"onprojectile",level:3},{value:"onExplosion",id:"onexplosion",level:3},{value:"onMelee",id:"onmelee",level:3},{value:"onProjectileFire",id:"onprojectilefire",level:3},{value:"Client-only",id:"client-only",level:2},{value:"onCellLoaded",id:"oncellloaded-1",level:3},{value:"onCellUnloaded",id:"oncellunloaded-1",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"worldclass",children:"WorldClass"}),"\n",(0,s.jsxs)(n.p,{children:["A script class that is instanced for every ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/World",children:"World"})," in the game."]}),"\n",(0,s.jsx)(n.p,{children:"When entering a warehouse floor, the player is entering a new world."}),"\n",(0,s.jsxs)(n.p,{children:["The class can receive events sent with ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.event",children:"sm.event.sendToWorld"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The fields below are accessed using ",(0,s.jsx)("code",{children:"self.fieldName"})," in the WorldClass script:"]}),"\n",(0,s.jsx)("strong",{children:"Fields:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/World",children:"World"})}),(0,s.jsx)(n.td,{children:"world"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/World",children:"World"})," game object belonging to this class instance."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Network",children:"Network"})}),(0,s.jsx)(n.td,{children:"network"}),(0,s.jsxs)(n.td,{children:["A ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Network",children:"Network"})," object that can be used to send data between client and server."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Storage",children:"Storage"})}),(0,s.jsx)(n.td,{children:"storage"}),(0,s.jsxs)(n.td,{children:["A server-side ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Storage",children:"Storage"})," object that can be used to save and load data to/from the world database."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"data"}),(0,s.jsxs)(n.td,{children:["Parameters passed to ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.world#createworld",children:"sm.world.createWorld"})]})]})]})]}),"\n",(0,s.jsx)("strong",{children:"Constants:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"cellMaxX"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"cellMaxY"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"cellMinX"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"cellMinY"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"enableAssets"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"enableClutter"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"enableCreations"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"enableHarvestables"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"enableKinematics"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"enableNodes"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"enableSurface"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"groundMaterialSet"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"isIndoor"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"renderMode"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"terrainScript"})," ",(0,s.jsx)("br",{}),"\r\n",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Constants#worldclass",children:"worldBorder"})," ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("strong",{children:"Callbacks:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"server--client",children:"Server + Client"}),"\n",(0,s.jsx)(n.h3,{id:"oncollision",children:"onCollision"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onCollision( self, objectA, objectB, position, pointVelocityA, pointVelocityB, normal )\r\nend\r\nfunction WorldClass.client_onCollision( self, objectA, objectB, position, pointVelocityA, pointVelocityB, normal )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a collision occurs in this world."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"objectA"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift",children:" Lift "}),"/ nil "]}),"]: The first colliding object. Nil if terrain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"objectB"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift",children:" Lift "}),"/ nil "]}),"]: The second colliding object. Nil if terrain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"position"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The position in world space where the collision occurred."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"pointVelocityA"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The velocity that that the first object had at the point of collision."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"pointVelocityB"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The velocity that that the second object had at the point of collision."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"normal"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The collision normal from objectA to objectB."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"server-only",children:"Server-only"}),"\n",(0,s.jsx)(n.h3,{id:"oncellcreated",children:"onCellCreated"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onCellCreated( self, x, y )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a world cell is loaded and feature complete for the first time."}),"\n",(0,s.jsx)(n.admonition,{title:"note",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Interactable",children:"Interactables"})," created by terrain scripts should be processed here using ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.cell#getinteractablesbytag",children:"sm.cell.getInteractablesByTag"})," and ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Static-Functions/sm.cell#getinteractablesbyuuid",children:"sm.cell.getInteractablesByUuid"}),",\r\nas they are only accessible for 1 tick after being created."]})}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"x"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's X position."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"y"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's Y position."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"oncellloaded",children:"onCellLoaded"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onCellLoaded( self, x, y )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a world cell is loaded and feature complete, but has been before."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"x"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's X position."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"y"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's Y position."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"oncellunloaded",children:"onCellUnloaded"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onCellUnloaded( self, x, y )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a world cell is no longer feature complete."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"x"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's X position."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"y"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's Y position."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"oninteractablecreated",children:"onInteractableCreated"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onInteractableCreated( self, interactable )\r\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Called when an ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Interactable",children:"Interactable"})," ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Shape",children:"Shape"})," is built in the world."]}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"interactable"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Interactable",children:" Interactable "})," "]}),"]: The interactable of the built shape."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"oninteractabledestroyed",children:"onInteractableDestroyed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onInteractableDestroyed( self, interactable )\r\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Called when an ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Interactable",children:"Interactable"})," ",(0,s.jsx)(n.a,{href:"/docs/Game-Script-Environment/Userdata/Shape",children:"Shape"})," is removed from the world."]}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"interactable"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Interactable",children:" Interactable "})," "]}),"]: The interactable of the removed shape."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onprojectile",children:"onProjectile"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onProjectile( self, position, airTime, velocity, projectileName, shooter, damage, customData, normal, target, uuid )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a projectile hits something in this world."}),"\n",(0,s.jsx)(n.admonition,{title:"note",type:"info",children:(0,s.jsx)(n.p,{children:"If the shooter is destroyed before the projectile hits, the shooter value will be nil."})}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"position"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The position in world space where the projectile hit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"airTime"})," [",(0,s.jsx)("strong",{children:" number "}),"]: The time, in seconds, that the projectile spent flying before the hit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"velocity"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The velocity of the projectile at impact."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"projectileName"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The name of the projectile. (Legacy, use uuid instead)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"shooter"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Player",children:" Player "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/ nil "]}),"]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"damage"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The damage value of the projectile."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"customData"})," [",(0,s.jsx)("strong",{children:" any "}),"]: A Lua object that can be defined at shoot time using ",(0,s.jsx)("code",{children:"sm.projectile.customProjectileAttack"})," or any other custom version."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"target"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift",children:" Lift "}),"/ nil "]}),"]: The hit target. Can be a Character, Shape, Harvestable, Lift or nil if terrain or unknown."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"normal"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The normal at the point of impact."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"uuid"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The uuid of the projectile."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onexplosion",children:"onExplosion"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onExplosion( self, center, destructionLevel )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when an explosion occurs in this world."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"center"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The center of the explosion."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"destructionLevel"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The level of destruction done by this explosion. Corresponds to the ",(0,s.jsx)("code",{children:"durability"})," rating of a Shape."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onmelee",children:"onMelee"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onMelee( self, position, attacker, target, damage, power, direction, normal )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a melee attack hits something in this world."}),"\n",(0,s.jsx)(n.admonition,{title:"note",type:"info",children:(0,s.jsx)(n.p,{children:"If the attacker is destroyed before the hit lands, the attacker value will be nil."})}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"position"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The position in world space where the attack hit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"attacker"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Player",children:" Player "}),"/ nil "]}),"]: The attacker. Can be a Player, Unit or nil if unknown."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"target"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Lift",children:" Lift "}),"/ nil "]}),"]: The hit target. Can be a Character, Shape, Harvestable, Lift or nil if terrain or unknown."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"damage"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The damage value of the melee hit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"power"})," [",(0,s.jsx)("strong",{children:" number "}),"]: The physical impact of the hit."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"direction"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The direction of the melee attack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"normal"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The normal at the point of impact."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onprojectilefire",children:"onProjectileFire"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.server_onProjectileFire( self, position, velocity, projectileName, shooter, uuid )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a projectile is fired in this world."}),"\n",(0,s.jsx)(n.admonition,{title:"note",type:"info",children:(0,s.jsx)(n.p,{children:"If the shooter is destroyed before the projectile hits, the shooter value will be nil."})}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"position"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The position in world space where projectile was fired from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"velocity"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The fire velocity of the projectile."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"projectileName"})," [",(0,s.jsx)("strong",{children:" string "}),"]: The name of the projectile. (Legacy, use uuid instead)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"shooter"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Player",children:" Player "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "}),"/",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/ nil "]}),"]: The shooter. Can be a Player, Unit, Shape, Harvestable or nil if unknown."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"uuid"})," [",(0,s.jsxs)("strong",{children:[" ",(0,s.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The uuid of the projectile."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"client-only",children:"Client-only"}),"\n",(0,s.jsx)(n.h3,{id:"oncellloaded-1",children:"onCellLoaded"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.client_onCellLoaded( self, x, y )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a world cell is considered feature complete for a client (has nodes)."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"x"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's X position."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"y"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's Y position."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"oncellunloaded-1",children:"onCellUnloaded"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function WorldClass.client_onCellUnloaded( self, x, y )\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Called when a world cell is no longer considered feature complete for a client (no longer has nodes)."}),"\n",(0,s.jsx)("strong",{children:"Arguments:"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"self"})," [",(0,s.jsx)("strong",{children:" table "}),"]: The class instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"x"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's X position."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("code",{children:"y"})," [",(0,s.jsx)("strong",{children:" int "}),"]: The cell's Y position."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var s=r(7294);const l={},i=s.createContext(l);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);