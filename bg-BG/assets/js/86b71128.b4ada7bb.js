"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="[Ronsane] Shop Search",s={unversionedId:"addon-3rdparty/rosane-shop-search",id:"addon-3rdparty/rosane-shop-search",title:"[Ronsane] Shop Search",description:"An add-on for the QuickShop Reremake and Hikari spigot plugin. Adds a /finditem command in game for searching through all the shops on the server.",source:"@site/i18n/bg-BG/docusaurus-plugin-content-docs/current/addon-3rdparty/rosane-shop-search.md",sourceDirName:"addon-3rdparty",slug:"/addon-3rdparty/rosane-shop-search",permalink:"/QuickShop-Hikari-Documents/bg-BG/docs/addon-3rdparty/rosane-shop-search",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/bg-BG",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addon (Unofficial)",permalink:"/QuickShop-Hikari-Documents/bg-BG/docs/category/addon-unofficial"},next:{title:"Compatibility Modules",permalink:"/QuickShop-Hikari-Documents/bg-BG/docs/category/compatibility-modules"}},l={},p=[{value:"Features:",id:"features",level:2},{value:"Integrations:",id:"integrations",level:2},{value:"Download:",id:"download",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ronsane-shop-search"},"[Ronsane]"," Shop Search"),(0,a.kt)("p",null,"An add-on for the QuickShop Reremake and Hikari spigot plugin. Adds a /finditem command in game for searching through all the shops on the server."),(0,a.kt)("h2",{id:"features"},"Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Search items based on buying/selling shops"),(0,a.kt)("li",{parentName:"ul"},"Search items by item type"),(0,a.kt)("li",{parentName:"ul"},"Supports query based item search"),(0,a.kt)("li",{parentName:"ul"},"Supports item custom model data for custom items"),(0,a.kt)("li",{parentName:"ul"},"Configurable shop sorting methods"),(0,a.kt)("li",{parentName:"ul"},"Displays enchantments in the result for enchanted items"),(0,a.kt)("li",{parentName:"ul"},"Hides item enchants if item has hide_enchants flag"),(0,a.kt)("li",{parentName:"ul"},"Displays potion effects in the result for Potion items"),(0,a.kt)("li",{parentName:"ul"},"Hide certain shops from appearing in search lists"),(0,a.kt)("li",{parentName:"ul"},"Supports completely safe direct shop teleportation (configurable in config.yml)"),(0,a.kt)("li",{parentName:"ul"},"Ignores shops that are out of stock"),(0,a.kt)("li",{parentName:"ul"},"Support for world blacklisting (Shops in blacklisted worlds are ignored in the search result)"),(0,a.kt)("li",{parentName:"ul"},"All messages in the config.yml support hexcodes so you can get a lot creative with colors.")),(0,a.kt)("h2",{id:"integrations"},"Integrations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports PlayerWarps (by Olzie-12) integration. It shows the nearest warp to each shop in the search result GUI."),(0,a.kt)("li",{parentName:"ul"},"Supports EssentialsX Warps integration for fetching nearest warps.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Global warps list for essentials is updated in batches every 15 minutes due to technical limitations, which is then used in every search query."),(0,a.kt)("li",{parentName:"ul"},"If you added a new warp and want it to get updated immediately, run /finditemadmin reload"),(0,a.kt)("li",{parentName:"ul"},"Remember, this applies only to Essential Warps."))),(0,a.kt)("li",{parentName:"ul"},"WorldGuard region support for fetching the WorldGuard region the shop is in (if overlapping regions, highest priority will be chosen)")),(0,a.kt)("h2",{id:"download"},"Download:"),(0,a.kt)("p",null,"Download from ",(0,a.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/quickshop-addon-shop-search.95104/"},"SpigotMC")))}u.isMDXComponent=!0}}]);