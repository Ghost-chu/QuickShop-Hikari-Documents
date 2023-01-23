"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||a;return r?i.createElement(d,c(c({ref:t},p),{},{components:r})):i.createElement(d,c({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const a={},c="0x04 Blacklist and PriceLimiter",o={unversionedId:"development/blacklist-price-limiter",id:"development/blacklist-price-limiter",title:"0x04 Blacklist and PriceLimiter",description:"Often during the coding process you may try to respect QuickShop-Hikari's blacklist and price limiter. Thanks to ItemExpression, you definitely do not want to parse expressions yourself.",source:"@site/i18n/ca-ES/docusaurus-plugin-content-docs/current/development/04-blacklist-price-limiter.md",sourceDirName:"development",slug:"/development/blacklist-price-limiter",permalink:"/QuickShop-Hikari-Documents/ca-ES/docs/development/blacklist-price-limiter",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ca-ES",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0x03 Work with Shop(Manager)",permalink:"/QuickShop-Hikari-Documents/ca-ES/docs/development/work-with-shop-manager"},next:{title:"0x05 Per shop permission",permalink:"/QuickShop-Hikari-Documents/ca-ES/docs/development/per-shop-permission-management"}},l={},s=[{value:"Check if a material can be a shop",id:"check-if-a-material-can-be-a-shop",level:2},{value:"Check if a item has been blacklisted",id:"check-if-a-item-has-been-blacklisted",level:2},{value:"Check if a price is allow with given price",id:"check-if-a-price-is-allow-with-given-price",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"0x04-blacklist-and-pricelimiter"},"0x04 Blacklist and PriceLimiter"),(0,n.kt)("p",null,"Often during the coding process you may try to respect QuickShop-Hikari's blacklist and price limiter. Thanks to ItemExpression, you definitely do not want to parse expressions yourself."),(0,n.kt)("h2",{id:"check-if-a-material-can-be-a-shop"},"Check if a material can be a shop"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"  boolean shoppable = Util.isShoppables(material);\n")),(0,n.kt)("h2",{id:"check-if-a-item-has-been-blacklisted"},"Check if a item has been blacklisted"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack stack = ...;\nQuickShopAPI api = ...;\n\nShopItemBlackList blacklist = api.getShopItemBlackList();\nboolean blacklisted = blacklist.isBlacklisted(stack);\n")),(0,n.kt)("h2",{id:"check-if-a-price-is-allow-with-given-price"},"Check if a price is allow with given price"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ItemStack stack = ...;\nShopManager manager = ...;\nPriceLimiter limiter = manager.getPriceLimiter();\nPriceLimiterCheckResult result = limiter.check(player/sender, stack, currency, price);\n\ndouble min = result.getMin();\ndouble max = result.getMax();\nPriceLimiterStatus status = result.getStatus();\n\n//status can be:\n//PASS\n//REACHED_PRICE_MAX_LIMIT (unused yet)\n//REACHED_PRICE_MIN_LIMIT (unused yet)\n//PRICE_RESTRICTED (usually use this one)\n//NOT_A_WHOLE_NUMBER\n//NOT_VALID\n")))}u.isMDXComponent=!0}}]);