"use strict";(self.webpackChunknevellus_docs=self.webpackChunknevellus_docs||[]).push([[8060],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3191:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:6},l="Governance/Voting FAQ",u={unversionedId:"FAQ/Governance FAQ",id:"FAQ/Governance FAQ",title:"Governance/Voting FAQ",description:"What are the Multisigs and who are the signers?",source:"@site/docs/FAQ/Governance FAQ.md",sourceDirName:"FAQ",slug:"/FAQ/Governance FAQ",permalink:"/docs/FAQ/Governance FAQ",draft:!1,editUrl:"https://github.com/nevellusdex/nevellus-docs/edit/master/docs/FAQ/Governance FAQ.md",tags:[],version:"current",lastUpdatedBy:"fernandocfjr",lastUpdatedAt:1671597571,formattedLastUpdatedAt:"12/21/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"General FAQ",permalink:"/docs/FAQ/General FAQ"},next:{title:"Nevellusnomics FAQ",permalink:"/docs/FAQ/Nevellusnomics FAQ"}},c={},p=[{value:"What are the Multisigs and who are the signers?",id:"what-are-the-multisigs-and-who-are-the-signers",level:3},{value:"What&#39;s the role of the Operations Multisig?",id:"whats-the-role-of-the-operations-multisig",level:3},{value:"What&#39;s the role of the Treasury Multisig?",id:"whats-the-role-of-the-treasury-multisig",level:3},{value:"How many signers are needed?",id:"how-many-signers-are-needed",level:3},{value:"Can anyone submit a governance proposal?",id:"can-anyone-submit-a-governance-proposal",level:3},{value:"How can a proposal be pushed to a vote?",id:"how-can-a-proposal-be-pushed-to-a-vote",level:3},{value:"How do I vote?",id:"how-do-i-vote",level:3},{value:"Do I have to pay gas to vote?",id:"do-i-have-to-pay-gas-to-vote",level:3},{value:"How is my NEVELLUSDEX calculated?",id:"how-is-my-nevellusdex-calculated",level:3},{value:"How much NEVELLUSDEX is needed to reach quorum on a proposal?",id:"how-much-nevellusdex-is-needed-to-reach-quorum-on-a-proposal",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"governancevoting-faq"},"Governance/Voting FAQ"),(0,a.kt)("h3",{id:"what-are-the-multisigs-and-who-are-the-signers"},"What are the Multisigs and who are the signers?"),(0,a.kt)("p",null,"The Multisigs are the ultimate decision-makers in the Nevellus ecosystem. The Treasury Multisig wallet is composed of 1 prominent and trusted member of the DeFi/Ethereum ecosystem, and they must approve any use of the devfunds. A transaction requires at least 2 out of 4 signatures to pass and be executed. Signers of Treasury Multisig: ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/0xFernandojr"},"@0xFernandojr")),(0,a.kt)("p",null,"The Ops Multisig is primarily composed of core team members and is the hurdle that needs to be passed for any changes to our smart contracts. Any transaction to be executed requires at least 2 signatures out of 4. Signers of the Ops Multisig: ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/0xFernandojr"},"@0xFernandojr")),(0,a.kt)("h3",{id:"whats-the-role-of-the-operations-multisig"},"What's the role of the Operations Multisig?"),(0,a.kt)("p",null,"Adding / removing pools; changing pool weights (rewards); changing the $NVLS block reward; approving transactions coming out the growth fund; overall changes to the smart contracts."),(0,a.kt)("h3",{id:"whats-the-role-of-the-treasury-multisig"},"What's the role of the Treasury Multisig?"),(0,a.kt)("p",null,"Approving transactions coming out of the devfund."),(0,a.kt)("h3",{id:"how-many-signers-are-needed"},"How many signers are needed?"),(0,a.kt)("p",null,"2 for Ops, 2 for Treasury"),(0,a.kt)("h3",{id:"can-anyone-submit-a-governance-proposal"},"Can anyone submit a governance proposal?"),(0,a.kt)("p",null,"Yes! Any member of the Nevellus community is welcome to submit a proposal.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Forum website is under development.")),(0,a.kt)("h3",{id:"how-can-a-proposal-be-pushed-to-a-vote"},"How can a proposal be pushed to a vote?"),(0,a.kt)("p",null,"If a proposal gathers enough community interest, enthusiasm and engagement, it is then reviewed by the core team. If approved, a formal vote can be submitted ",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org/#/nevellusgov"},"here")),(0,a.kt)("h3",{id:"how-do-i-vote"},"How do I vote?"),(0,a.kt)("p",null,"You can vote ",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org/#/nevellusgov"},"here")),(0,a.kt)("h3",{id:"do-i-have-to-pay-gas-to-vote"},"Do I have to pay gas to vote?"),(0,a.kt)("p",null,"Nope! It's completely free."),(0,a.kt)("h3",{id:"how-is-my-nevellusdex-calculated"},"How is my NEVELLUSDEX calculated?"),(0,a.kt)("p",null,"NVLS-ETH pair: 1 $NVLS in the pool = 2 NEVELLUSDEX"),(0,a.kt)("p",null,"sNVLS (staked $NVLS): the number of staked $NVLS (it will change over time as your $NVLS balance grows) = your NEVELLUSDEX"),(0,a.kt)("h3",{id:"how-much-nevellusdex-is-needed-to-reach-quorum-on-a-proposal"},"How much NEVELLUSDEX is needed to reach quorum on a proposal?"),(0,a.kt)("p",null,"5 million NEVELLUSDEX."))}h.isMDXComponent=!0}}]);