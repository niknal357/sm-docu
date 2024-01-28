"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[7920],{2027:(e,r,t)=>{t.r(r),t.d(r,{default:()=>q});var n=t(7855),a=t(4165),s=t(5861),c=t(7294),l=t(2263),u=t(8862),o=t(5742),i=t(3692),h=t(5999),m=["zero","one","two","few","many","other"];function d(e){return m.filter((function(r){return e.includes(r)}))}var p={locale:"en",pluralForms:d(["one","other"]),select:function(e){return 1===e?"one":"other"}};function f(){var e=(0,l.Z)().i18n.currentLocale;return(0,c.useMemo)((function(){try{return r=e,t=new Intl.PluralRules(r),{locale:r,pluralForms:d(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),p}var r,t}),[e])}function g(){var e=f();return{selectMessage:function(r,t){return function(e,r,t){var n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=t.select(r),s=t.pluralForms.indexOf(a);return n[Math.min(s,n.length-1)]}(t,r,e)}}}var x=t(1728),v=t(6550),y=t(2389),S=t(1029);const C=function(){var e=(0,y.Z)(),r=(0,v.k6)(),t=(0,v.TH)(),n=(0,l.Z)().siteConfig.baseUrl,a=e?new URLSearchParams(t.search):null,s=(null==a?void 0:a.get("q"))||"",c=(null==a?void 0:a.get("ctx"))||"",u=(null==a?void 0:a.get("version"))||"",o=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:s,searchContext:c&&Array.isArray(S.Kc)&&S.Kc.some((function(e){return"string"==typeof e?e===c:e.path===c}))?c:"",searchVersion:u,updateSearchPath:function(e){var t=o(e);r.replace({search:t.toString()})},updateSearchContext:function(e){var n=new URLSearchParams(t.search);n.set("ctx",e),r.replace({search:n.toString()})},generateSearchPageLink:function(e){var r=o(e);return n+"search?"+r.toString()}}};var j=t(22),I=t(8202),w=t(2539),R=t(726),P=t(1073),b=t(311),_=t(3926);const Z={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var F=t(51),k=t(5893);function A(){var e,r=(0,l.Z)(),t=r.siteConfig.baseUrl,n=r.i18n.currentLocale,u=g().selectMessage,i=C(),m=i.searchValue,d=i.searchContext,p=i.searchVersion,f=i.updateSearchPath,v=i.updateSearchContext,y=(0,c.useState)(m),w=y[0],R=y[1],P=(0,c.useState)(),_=P[0],A=P[1],q=(0,c.useState)(),L=q[0],T=q[1],K=""+t+p,Q=(0,c.useMemo)((function(){return w?(0,h.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:w}):(0,h.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[w]);(0,c.useEffect)((function(){f(w),_&&(w?_(w,(function(e){T(e)})):T(void 0))}),[w,_]);var U=(0,c.useCallback)((function(e){R(e.target.value)}),[]);return(0,c.useEffect)((function(){m&&m!==w&&R(m)}),[m]),(0,c.useEffect)((function(){function e(){return(e=(0,s.Z)((0,a.Z)().mark((function e(){var r,t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(S.Kc)&&!d&&!S.pQ){e.next=6;break}return e.next=3,(0,j.w)(K,d);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={wrappedIndexes:[],zhDictionary:[]};case 7:r=e.t0,t=r.wrappedIndexes,n=r.zhDictionary,A((function(){return(0,I.v)(t,n,100)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d,K]),(0,k.jsxs)(c.Fragment,{children:[(0,k.jsxs)(o.Z,{children:[(0,k.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,k.jsx)("title",{children:Q})]}),(0,k.jsxs)("div",{className:"container margin-vert--lg",children:[(0,k.jsx)("h1",{children:Q}),(0,k.jsxs)("div",{className:"row",children:[(0,k.jsx)("div",{className:(0,x.Z)("col",(e={},e[Z.searchQueryColumn]=Array.isArray(S.Kc),e["col--9"]=Array.isArray(S.Kc),e["col--12"]=!Array.isArray(S.Kc),e)),children:(0,k.jsx)("input",{type:"search",name:"q",className:Z.searchQueryInput,"aria-label":"Search",onChange:U,value:w,autoComplete:"off",autoFocus:!0})}),Array.isArray(S.Kc)?(0,k.jsx)("div",{className:(0,x.Z)("col","col--3","padding-left--none",Z.searchContextColumn),children:(0,k.jsxs)("select",{name:"search-context",className:Z.searchContextInput,id:"context-selector",value:d,onChange:function(e){return v(e.target.value)},children:[S.pQ&&(0,k.jsx)("option",{value:"",children:(0,h.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})}),S.Kc.map((function(e){var r=(0,F._)(e,n),t=r.label,a=r.path;return(0,k.jsx)("option",{value:a,children:t},a)}))]})}):null]}),!_&&w&&(0,k.jsx)("div",{children:(0,k.jsx)(b.Z,{})}),L&&(L.length>0?(0,k.jsx)("p",{children:u(L.length,(0,h.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:L.length}))}):(0,k.jsx)("p",{children:(0,h.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,k.jsx)("section",{children:L&&L.map((function(e){return(0,k.jsx)(N,{searchResult:e},e.document.i)}))})]})]})}function N(e){var r=e.searchResult,t=r.document,a=r.type,s=r.page,c=r.tokens,l=r.metadata,u=0===a,o=2===a,h=(u?t.b:s.b).slice(),m=o?t.s:t.t;u||h.push(s.t);var d="";if(S.vc&&c.length>0){for(var p,f=new URLSearchParams,g=(0,n.Z)(c);!(p=g()).done;){var x=p.value;f.append("_highlight",x)}d="?"+f.toString()}return(0,k.jsxs)("article",{className:Z.searchResultItem,children:[(0,k.jsx)("h2",{children:(0,k.jsx)(i.Z,{to:t.u+d+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,w.C)(m,c):(0,R.o)(m,(0,P.m)(l,"t"),c,100)}})}),h.length>0&&(0,k.jsx)("p",{className:Z.searchResultItemPath,children:(0,_.e)(h)}),o&&(0,k.jsx)("p",{className:Z.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,R.o)(t.t,(0,P.m)(l,"t"),c,100)}})]})}const q=function(){return(0,k.jsx)(u.Z,{children:(0,k.jsx)(A,{})})}}}]);