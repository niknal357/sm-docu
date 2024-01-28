"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[6059],{2385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(5893),i=s(1151);const t={sidebar_position:3,title:"sm.ai",hide_title:!0,"sidebar-label":"sm.ai"},c=void 0,l={id:"Game-Script-Environment/Static-Functions/sm.ai",title:"sm.ai",description:"sm.ai",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.ai.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.ai",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.ai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"sm.ai",hide_title:!0,"sidebar-label":"sm.ai"},sidebar:"tutorialSidebar",previous:{title:"sm",permalink:"/docs/Game-Script-Environment/Static-Functions/sm"},next:{title:"sm.areaTrigger",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.areaTrigger"}},a={},o=[{value:"sm.ai",id:"smai",level:2},{value:"Functions",id:"functions",level:2},{value:"directPathAvailable",id:"directpathavailable",level:3},{value:"getAimPosition",id:"getaimposition",level:3},{value:"getBreachablePosition",id:"getbreachableposition",level:3},{value:"getClosestTree",id:"getclosesttree",level:3},{value:"getClosestVisibleCharacterType",id:"getclosestvisiblecharactertype",level:3},{value:"getClosestVisibleCrop",id:"getclosestvisiblecrop",level:3},{value:"getClosestVisiblePlayerCharacter",id:"getclosestvisibleplayercharacter",level:3},{value:"getClosestVisibleTeamOpponent",id:"getclosestvisibleteamopponent",level:3},{value:"getRandomCreationPosition",id:"getrandomcreationposition",level:3},{value:"isReachable",id:"isreachable",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"smai",children:"sm.ai"}),"\n",(0,r.jsx)(n.p,{children:"AI utility functions."}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"directpathavailable",children:"directPathAvailable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.directPathAvailable( unit, position )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Checks if the unit can reach the target position by moving straight."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"unit"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "})," "]}),"]: The unit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"position"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The target position."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the target position is directly reachable or not."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getaimposition",children:"getAimPosition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getAimPosition( character, target, range, width )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns true if the character can fire at the target within a given fire lane."}),"\n",(0,r.jsx)(n.p,{children:"Also returns the aim position that allows the character to succeed."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"character"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "})," "]}),"]: The firing character."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"target"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/character "]}),"]: The target."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"range"})," [",(0,r.jsx)("strong",{children:" number "}),"]: The maximum firing distance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"width"})," [",(0,r.jsx)("strong",{children:" number "}),"]: The width of the fire lane."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the character can fire at the target or not."]}),"\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The aim position, if available."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getbreachableposition",children:"getBreachablePosition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getBreachablePosition( unit, position, range, attack )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check if there's an attackable object between the unit and a position."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"unit"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "})," "]}),"]: The unit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"position"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The target position."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"range"})," [",(0,r.jsx)("strong",{children:" number "}),"]: The distance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"attack"})," [",(0,r.jsx)("strong",{children:" int "}),"]: The possible attack level from the attacker."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: True if a breachable object was found or no object was found. False if the found object is unbreachable."]}),"\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The attackable position, if found."]}),"\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Shape",children:" Shape "}),"/",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "}),"/lift "]}),"]: The object to attack."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getclosesttree",children:"getClosestTree"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getClosestTree( position, world )\n"})}),"\n",(0,r.jsx)(n.p,{children:'Find the closest "tree" harvestable in a world.'}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"position"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The position."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"world"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/World",children:" World "})," "]}),"]: The world."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "})," "]}),"]: The closest found tree."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getclosestvisiblecharactertype",children:"getClosestVisibleCharacterType"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getClosestVisibleCharacterType( unit, uuid )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the closest visible character with matching uuid."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"unit"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "})," "]}),"]: The unit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"uuid"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Uuid",children:" Uuid "})," "]}),"]: The character uuid."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "})," "]}),"]: The closest visible character."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getclosestvisiblecrop",children:"getClosestVisibleCrop"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getClosestVisibleCrop( unit )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the closest visible farming harvestable."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"unit"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "})," "]}),"]: The unit."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Harvestable",children:" Harvestable "})," "]}),"]: The closest visible farming harvestable."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getclosestvisibleplayercharacter",children:"getClosestVisiblePlayerCharacter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getClosestVisiblePlayerCharacter( unit )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the closest visible player character."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"unit"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "})," "]}),"]: The unit."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "})," "]}),"]: The closest visible player character."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getclosestvisibleteamopponent",children:"getClosestVisibleTeamOpponent"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getClosestVisibleTeamOpponent( unit, color )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the closest visible character that does not have the given color."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"unit"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "})," "]}),"]: The unit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"color"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Color",children:" Color "})," "]}),"]: The color."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Character",children:" Character "})," "]}),"]: The closest visible team opponent."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"getrandomcreationposition",children:"getRandomCreationPosition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.getRandomCreationPosition( body )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a random position on the given body."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"body"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Body",children:" Body "})," "]}),"]: The body."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The random position."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isreachable",children:"isReachable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"sm.ai.isReachable( unit, position )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check if the unit can reach the target position by moving along a path."}),"\n",(0,r.jsx)("strong",{children:"Arguments:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"unit"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Unit",children:" Unit "})," "]}),"]: The unit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)("code",{children:"position"})," [",(0,r.jsxs)("strong",{children:[" ",(0,r.jsx)("a",{href:"/docs/Game-Script-Environment/Userdata/Vec3",children:" Vec3 "})," "]}),"]: The target position."]}),"\n"]}),"\n",(0,r.jsx)("strong",{children:"Returns:"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[",(0,r.jsx)("strong",{children:" bool "}),"]: Whether the position is reachable or not."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var r=s(7294);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);