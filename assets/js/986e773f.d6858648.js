"use strict";(self.webpackChunknevellus_docs=self.webpackChunknevellus_docs||[]).push([[8023],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,v=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1895:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],u={sidebar_position:9},s="Interfaces",l={unversionedId:"Developers/Nevellus/Interfaces",id:"Developers/Nevellus/Interfaces",title:"Interfaces",description:"Listed below are all of the interfaces used in the aforementioned core contracts.",source:"@site/docs/Developers/Nevellus/Interfaces.md",sourceDirName:"Developers/Nevellus",slug:"/Developers/Nevellus/Interfaces",permalink:"/docs/Developers/Nevellus/Interfaces",draft:!1,editUrl:"https://github.com/nevellusdex/nevellus-docs/edit/master/docs/Developers/Nevellus/Interfaces.md",tags:[],version:"current",lastUpdatedBy:"Fernando Jr",lastUpdatedAt:1670121123,formattedLastUpdatedAt:"12/4/2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"NevellusToken",permalink:"/docs/Developers/Nevellus/NevellusToken"},next:{title:"Overview",permalink:"/docs/Developers/Packages/Overview"}},c={},d=[{value:"IERC20",id:"ierc20",level:2},{value:"IEnceladus",id:"ienceladus",level:2},{value:"IDioneV2",id:"idionev2",level:2},{value:"IRewarder",id:"irewarder",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interfaces"},"Interfaces"),(0,a.kt)("p",null,"Listed below are all of the interfaces used in the aforementioned core contracts."),(0,a.kt)("h2",{id:"ierc20"},"IERC20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IERC20 {\n    event Approval(address indexed owner, address indexed spender, uint value);\n    event Transfer(address indexed from, address indexed to, uint value);\n\n    function name() external view returns (string memory);\n    function symbol() external view returns (string memory);\n    function decimals() external view returns (uint8);\n    function totalSupply() external view returns (uint);\n    function balanceOf(address owner) external view returns (uint);\n    function allowance(address owner, address spender) external view returns (uint);\n\n    function approve(address spender, uint value) external returns (bool);\n    function transfer(address to, uint value) external returns (bool);\n    function transferFrom(address from, address to, uint value) external returns (bool);\n}\n")),(0,a.kt)("p",null,"Standard ERC20 interface; source code can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevellusdex"},"here"),"."),(0,a.kt)("h2",{id:"ienceladus"},"IEnceladus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IEnceladus {\n    using BoringERC20 for IERC20;\n    struct UserInfo {\n        uint256 amount;     // How many LP tokens the user has provided.\n        uint256 rewardDebt; // Reward debt. See explanation below.\n    }\n\n    struct PoolInfo {\n        IERC20 lpToken;           // Address of LP token contract.\n        uint256 allocPoint;       // How many allocation points assigned to this pool. NVLS to distribute per block.\n        uint256 lastRewardBlock;  // Last block number that NVLS distribution occurs.\n        uint256 accNvlsPerShare; // Accumulated NVLS per share, times 1e12. See below.\n    }\n\n    function poolInfo(uint256 pid) external view returns (IEnceladus.PoolInfo memory);\n    function pendingNvls(uint256 _pid, address _user) external view returns (uint256);\n    function deposit(uint256 _pid, uint256 _amount) external;\n    function withdraw(uint256 _pid, uint256 _amount) external;\n}\n")),(0,a.kt)("p",null,"Enceladus contract interface; source code can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevellusdex"},"here"),"."),(0,a.kt)("h2",{id:"idionev2"},"IDioneV2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IDioneV2 {\n    struct UserInfo {\n        uint256 amount;\n        uint256 rewardDebt;\n    }\n\n    struct PoolInfo {\n        uint128 accNvlsPerShare;\n        uint64 lastRewardTime;\n        uint64 allocPoint;\n    }\n\n    function poolLength() external view returns (uint256);\n    function updatePool(uint256 pid) external returns (IDioneV2.PoolInfo memory);\n    function userInfo(uint256 _pid, address _user) external view returns (uint256, uint256);\n    function deposit(uint256 pid, uint256 amount, address to) external;\n    function withdraw(uint256 pid, uint256 amount, address to) external;\n    function harvest(uint256 pid, address to) external;\n    function withdrawAndHarvest(uint256 pid, uint256 amount, address to) external;\n    function emergencyWithdraw(uint256 pid, address to) external;\n}\n")),(0,a.kt)("p",null,"Dione contract interface; source code can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevellusdex"},"here"),"."),(0,a.kt)("h2",{id:"irewarder"},"IRewarder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"interface IRewarder {\n    using BoringERC20 for IERC20;\n    function onNvlsReward(uint256 pid, address user, address recipient, uint256 nvlsAmount, uint256 newLpAmount) external;\n    function pendingTokens(uint256 pid, address user, uint256 nvlsAmount) external view returns (IERC20[] memory, uint256[] memory);\n}\n")),(0,a.kt)("p",null,"Rewarder contract interface; source code can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevellusdex"},"here"),"."))}f.isMDXComponent=!0}}]);