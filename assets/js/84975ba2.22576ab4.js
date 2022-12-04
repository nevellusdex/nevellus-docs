"use strict";(self.webpackChunknevellus_docs=self.webpackChunknevellus_docs||[]).push([[7907],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,f=d["".concat(i,".").concat(h)]||d[h]||c[h]||s;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4214:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),l=["components"],a={},i="Queries",u={unversionedId:"Developers/Subgraphs/Enceladus/Queries",id:"Developers/Subgraphs/Enceladus/Queries",title:"Queries",description:"This page provides some sample query examples to help get you started with the Nevellus Enceladus subgraph.",source:"@site/docs/Developers/Subgraphs/Enceladus/Queries.md",sourceDirName:"Developers/Subgraphs/Enceladus",slug:"/Developers/Subgraphs/Enceladus/Queries",permalink:"/docs/Developers/Subgraphs/Enceladus/Queries",draft:!1,editUrl:"https://github.com/nevellusdex/nevellus-docs/edit/master/docs/Developers/Subgraphs/Enceladus/Queries.md",tags:[],version:"current",lastUpdatedBy:"Fernando Jr",lastUpdatedAt:1670121123,formattedLastUpdatedAt:"12/4/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Entities",permalink:"/docs/Developers/Subgraphs/Enceladus/Entities"},next:{title:"Entities",permalink:"/docs/Developers/Subgraphs/Blocks/Entities"}},p={},c=[{value:"Enceladus",id:"enceladus",level:2},{value:"History",id:"history",level:2},{value:"Pool",id:"pool",level:2},{value:"Pool History",id:"pool-history",level:2}],d={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"queries"},"Queries"),(0,s.kt)("p",null,"This page provides some sample query examples to help get you started with the Nevellus Enceladus subgraph."),(0,s.kt)("p",null,"You can test any of the queries, or write your own, on the ",(0,s.kt)("a",{parentName:"p",href:"https://thegraph.com/hosted-service/subgraph/"},"Nevellus Enceladus subgraph"),"."),(0,s.kt)("h2",{id:"enceladus"},"Enceladus"),(0,s.kt)("p",null,"This query gets the first 5 Enceladus pools that were deployed and returns their ID, bonus multiplier, end block for the multiplier, and the address of the user who deployed the pool."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  enceladuses(first: 5) {\n    id\n    bonusMultiplier\n    bonusEndBlock\n    devaddr\n  }\n")),(0,s.kt)("h2",{id:"history"},"History"),(0,s.kt)("p",null,"This query returns the first 100 history instances, with the ID (address of history) and owner ID (deployer address) as well as te NVLP balances and age for each."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  histories(first: 100) {\n    id\n    owner {\n      id\n    }\n    nvlpBalance\n    nvlpAge\n  }\n}\n")),(0,s.kt)("h2",{id:"pool"},"Pool"),(0,s.kt)("p",null,"This query gets the first 100 pool instances and returns the ID, allocation point, and users of the pool along with their IDs (user addresses) for each pool."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  pools(first: 100) {\n    id\n    allocPoint\n    users {\n      id\n    }\n}\n")),(0,s.kt)("h2",{id:"pool-history"},"Pool History"),(0,s.kt)("p",null,"This query returns the pool histories ordered by their NVLP balance and returns the history ID (address), the pool's ID and the address of the token pair in the pool, and the block at which the history was created."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  poolHistories(orderBy: nvlpBalance) {\n    id\n    pool {\n      id\n      pair\n    }\n    block\n    }\n}\n")))}h.isMDXComponent=!0}}]);