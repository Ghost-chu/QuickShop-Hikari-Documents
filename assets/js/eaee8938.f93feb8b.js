"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Transaction System",s={unversionedId:"modules/transaction-system",id:"modules/transaction-system",title:"Transaction System",description:"QuickShop-Hikari have a system to ensure the transactional consistency, Avoid errors in the transaction process that destroy the data consistency of both parties.",source:"@site/docs/modules/transaction-system.md",sourceDirName:"modules",slug:"/modules/transaction-system",permalink:"/QuickShop-Hikari-Documents/docs/modules/transaction-system",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/master/docs/modules/transaction-system.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"In game sounds and effects",permalink:"/QuickShop-Hikari-Documents/docs/modules/special-effect"},next:{title:"Addon",permalink:"/QuickShop-Hikari-Documents/docs/category/addon"}},c={},l=[{value:"How it works?",id:"how-it-works",level:2},{value:"For Economy",id:"for-economy",level:2},{value:"For Inventory",id:"for-inventory",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transaction-system"},"Transaction System"),(0,o.kt)("p",null,"QuickShop-Hikari have a system to ensure the transactional consistency, Avoid errors in the transaction process that destroy the data consistency of both parties."),(0,o.kt)("p",null,"TL;DR If the transaction fails, QuickShop will roll back the money of both parties, restore the Inventory to the state before the transaction started, and reverse the transaction."),(0,o.kt)("h2",{id:"how-it-works"},"How it works?"),(0,o.kt)("p",null,"Currently, QuickShop-Hikari have two of types that support Transaction System."),(0,o.kt)("h2",{id:"for-economy"},"For Economy"),(0,o.kt)("p",null,"QuickShop record the amounts of balance that deposit or withdraw, and re-withdraw and re-deposit back them when transaction failed."),(0,o.kt)("h2",{id:"for-inventory"},"For Inventory"),(0,o.kt)("p",null,"QuickShop will take a snapshot for both shop inventory and player inventory, and restore the snapshot them when transaction failed."))}p.isMDXComponent=!0}}]);