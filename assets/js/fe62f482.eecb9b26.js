"use strict";(self.webpackChunknevellus_docs=self.webpackChunknevellus_docs||[]).push([[5829],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),s=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(7294),a=r(6010),l="tabItem_Ymn6";function o(t){var e=t.children,r=t.hidden,o=t.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},e)}},5488:function(t,e,r){r.d(e,{Z:function(){return m}});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),d=r(7094),s=r(2466),u="tabList__CuJ",p="tabItem_LNqP";function c(t){var e,r,o=t.lazy,c=t.block,m=t.defaultValue,f=t.values,g=t.groupId,b=t.className,k=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),h=(0,i.l)(y,(function(t,e){return t.value===e.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(e=null!=m?m:null==(r=k.find((function(t){return t.props.default})))?void 0:r.props.value)?e:k[0].props.value;if(null!==N&&!y.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,d.U)(),T=v.tabGroupChoices,O=v.setTabGroupChoices,E=(0,a.useState)(N),w=E[0],x=E[1],P=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=T[g];null!=S&&S!==w&&y.some((function(t){return t.value===S}))&&x(S)}var D=function(t){var e=t.currentTarget,r=P.indexOf(e),n=y[r].value;n!==w&&(_(e),x(n),null!=g&&O(g,String(n)))},j=function(t){var e,r=null;switch(t.key){case"ArrowRight":var n,a=P.indexOf(t.currentTarget)+1;r=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var l,o=P.indexOf(t.currentTarget)-1;r=null!=(l=P[o])?l:P[P.length-1]}null==(e=r)||e.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},y.map((function(t){var e=t.value,r=t.label,o=t.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return P.push(t)},onKeyDown:j,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===e})}),null!=r?r:e)}))),o?(0,a.cloneElement)(k.filter((function(t){return t.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function m(t){var e=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(e)},t))}},2656:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(5488),i=r(5162),d=["components"],s={},u="Bridged Token List",p={unversionedId:"Ecosystem/Bridged Token List",id:"Ecosystem/Bridged Token List",title:"Bridged Token List",description:"Below is a list of all tokens staked in crosschain Nevellus farms, mapped to their bridges of origin. In the unfortunate case of a bridge exploit, this can be used to assess exposure to the effected bridge(s) and inform your next actions.",source:"@site/docs/Ecosystem/Bridged Token List.mdx",sourceDirName:"Ecosystem",slug:"/Ecosystem/Bridged Token List",permalink:"/docs/Ecosystem/Bridged Token List",draft:!1,editUrl:"https://github.com/nevellusdex/nevellus-docs/edit/master/docs/Ecosystem/Bridged Token List.mdx",tags:[],version:"current",lastUpdatedBy:"Fernando Jr",lastUpdatedAt:1670194109,formattedLastUpdatedAt:"12/4/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Official Nevellus Links",permalink:"/docs/Ecosystem/Official Nevellus Links"},next:{title:"Press Kit",permalink:"/docs/Ecosystem/Press Kit"}},c={},m=[],f={toc:m};function g(t){var e=t.components,r=(0,a.Z)(t,d);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bridged-token-list"},"Bridged Token List"),(0,l.kt)("p",null,"Below is a list of all tokens staked in crosschain Nevellus farms, mapped to their bridges of origin. In the unfortunate case of a bridge exploit, this can be used to assess exposure to the effected bridge(s) and inform your next actions."),(0,l.kt)("p",null,"This is a living list, and will be added to as necessary."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"arbitrum",label:"Arbitrum",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Token"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Bridge"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Contract"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"WETH"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://bridge.arbitrum.io/"},"bridge.arbitrum.io")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"USDC"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://bridge.arbitrum.io/"},"bridge.arbitrum.io")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DAI"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://bridge.arbitrum.io/"},"bridge.arbitrum.io")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"USDT"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://bridge.arbitrum.io/"},"bridge.arbitrum.io")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"WBTC"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://bridge.arbitrum.io/"},"bridge.arbitrum.io")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NVLS"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://bridge.arbitrum.io/"},"bridge.arbitrum.io")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed"))))),(0,l.kt)(i.Z,{value:"polygon",label:"Polygon",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Token"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Bridge"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Contract"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"AVAX"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://www.relaychain.com/"},"relaychain.com")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"WETH"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://polygon.technology/"},"polygon (POS)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"USDC"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://polygon.technology/"},"polygon (POS)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"USDT"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://polygon.technology/"},"polygon (POS)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"WBTC"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://polygon.technology/"},"polygon (POS)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DAI"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://polygon.technology/"},"polygon (POS)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"LINK"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://polygon.technology/"},"polygon (POS)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not_deployed")))))))}g.isMDXComponent=!0}}]);