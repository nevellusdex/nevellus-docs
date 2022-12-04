"use strict";(self.webpackChunknevellus_docs=self.webpackChunknevellus_docs||[]).push([[5215],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return v}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),v=a,f=p["".concat(u,".").concat(v)]||p[v]||c[v]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6069:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},u="OpenMevLibrary",s={unversionedId:"Developers/Guard/OpenMevLibrary",id:"Developers/Guard/OpenMevLibrary",title:"OpenMevLibrary",description:"CommodityStream, Inc",source:"@site/docs/Developers/Guard/OpenMevLibrary.md",sourceDirName:"Developers/Guard",slug:"/Developers/Guard/OpenMevLibrary",permalink:"/docs/Developers/Guard/OpenMevLibrary",draft:!1,editUrl:"https://github.com/nevellusdex/nevellus-docs/edit/master/docs/Developers/Guard/OpenMevLibrary.md",tags:[],version:"current",lastUpdatedBy:"Fernando Jr",lastUpdatedAt:1670121123,formattedLastUpdatedAt:"12/4/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"IWETH",permalink:"/docs/Developers/Guard/IWETH"},next:{title:"OpenMevRouter",permalink:"/docs/Developers/Guard/OpenMevRouter"}},d={},c=[{value:"Errors",id:"errors",level:2},{value:"IdenticalAddresses",id:"identicaladdresses",level:3},{value:"InsufficientLiquidity",id:"insufficientliquidity",level:3},{value:"InvalidPath",id:"invalidpath",level:3},{value:"Overflow",id:"overflow",level:3},{value:"ZeroAddress",id:"zeroaddress",level:3},{value:"ZeroAmount",id:"zeroamount",level:3}],p={toc:c};function v(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openmevlibrary"},"OpenMevLibrary"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"CommodityStream, Inc")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"OpenMevLibrary")),(0,o.kt)("p",null,"Optimal MEV library to support OpenMevRouter"),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("h3",{id:"identicaladdresses"},"IdenticalAddresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"error IdenticalAddresses()\n")),(0,o.kt)("h3",{id:"insufficientliquidity"},"InsufficientLiquidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"error InsufficientLiquidity()\n")),(0,o.kt)("h3",{id:"invalidpath"},"InvalidPath"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"error InvalidPath()\n")),(0,o.kt)("h3",{id:"overflow"},"Overflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"error Overflow()\n")),(0,o.kt)("h3",{id:"zeroaddress"},"ZeroAddress"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"error ZeroAddress()\n")),(0,o.kt)("h3",{id:"zeroamount"},"ZeroAmount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"error ZeroAmount()\n")))}v.isMDXComponent=!0}}]);