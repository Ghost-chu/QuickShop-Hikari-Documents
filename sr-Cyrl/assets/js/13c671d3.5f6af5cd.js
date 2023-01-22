"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4307],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>u});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(o),u=n,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return o?a.createElement(m,i(i({ref:t},h),{},{components:o})):a.createElement(m,i({ref:t},h))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},2766:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const r={},i="0x03 Work with Shop(Manager)",s={unversionedId:"development/work-with-shop-manager",id:"development/work-with-shop-manager",title:"0x03 Work with Shop(Manager)",description:"ShopManager is the core component of QuickShop-Hikari, almost everything directly related to the store is done through ShopManager.",source:"@site/docs/development/03-work-with-shop-manager.md",sourceDirName:"development",slug:"/development/work-with-shop-manager",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/development/work-with-shop-manager",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/sr-Cyrl",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0x02 Getting Instances",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/development/get-api-instances"},next:{title:"0x04 Blacklist and PriceLimiter",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/development/blacklist-price-limiter"}},l={},p=[{value:"Getting ShopManager",id:"getting-shopmanager",level:2},{value:"Getting a shop",id:"getting-a-shop",level:2},{value:"Getting all shops on this server",id:"getting-all-shops-on-this-server",level:2},{value:"Getting all loaded shops",id:"getting-all-loaded-shops",level:2},{value:"Load&amp;Unload a shop",id:"loadunload-a-shop",level:2},{value:"Delete or disable shop",id:"delete-or-disable-shop",level:2},{value:"Identify a store",id:"identify-a-store",level:2},{value:"Getting a shop is buying mode or selling mode",id:"getting-a-shop-is-buying-mode-or-selling-mode",level:2},{value:"Getting a shop stacking amount",id:"getting-a-shop-stacking-amount",level:2},{value:"Compare between items",id:"compare-between-items",level:2},{value:"Compare with shop",id:"compare-with-shop",level:3}],h={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"0x03-work-with-shopmanager"},"0x03 Work with Shop(Manager)"),(0,n.kt)("p",null,"ShopManager is the core component of QuickShop-Hikari, almost everything directly related to the store is done through ShopManager."),(0,n.kt)("h2",{id:"getting-shopmanager"},"Getting ShopManager"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ShopManager manager = api.getShopManager();\n")),(0,n.kt)("h2",{id:"getting-a-shop"},"Getting a shop"),(0,n.kt)("p",null,'Since Minecraft has a special "Large Chest", we can\'t simply get the store map directly from the coordinates.',(0,n.kt)("br",{parentName:"p"}),"\n",'QuickShop-Hikari\'s store is only bound to one half of "Large Chest", so to get the store, you need to query both the cube itself and its associated cube.'),(0,n.kt)("p",null,"The good thing is that there is an API in the plugin that allows you to handle this situation very easily."),(0,n.kt)("p",null,"This operation requires that it must be performed on the main thread of the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Shop shop = manager.getShopIncludeAttached(location);\n")),(0,n.kt)("p",null,"By default, we will use ShopCache in order to improve the performance of this method.  "),(0,n.kt)("p",null,"We handle the impact of store updates on the cache very well, so you should not bypass the cache unless there is an unintended result.\nCacheless lookups are slightly more expensive and can only be performed on the server main thread."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Shop bypassCacheShop = manager.getShopIncludeAttached(location,false);\n")),(0,n.kt)("h2",{id:"getting-all-shops-on-this-server"},"Getting all shops on this server"),(0,n.kt)("p",null,"The performance of this method is usually not a problem, but we still do not recommend calling this API too often (e.g. 20 times per second)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"List<Shop> allShops = manager.getAllShops();\n")),(0,n.kt)("h2",{id:"getting-all-loaded-shops"},"Getting all loaded shops"),(0,n.kt)("p",null,"This method will only return stores that are currently active (chunks are loaded, or for some reason in active status)."),(0,n.kt)("p",null,"This method does not trigger a full store lookup, and such stores are maintained separately within QuickShop."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"List<Shop> loadedShops = manager.getLoadedShops();\n")),(0,n.kt)("h2",{id:"loadunload-a-shop"},"Load&Unload a shop"),(0,n.kt)("p",null,"This operation requires that it must be performed on the main thread of the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Shop shop = ...;\n\nshop.onLoad(); // load the shop and put it into loaded shops list\nshop.onUnload(); // unload the shop and remove it from loaded shops list\n")),(0,n.kt)("h2",{id:"delete-or-disable-shop"},"Delete or disable shop"),(0,n.kt)("p",null,"This operation requires that it must be performed on the main thread of the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Shop shop = ...;\n\nshop.delete(); // Permanently delete this store, both memory and database\nshop.delete(true); // Delete this store from memory only, it still will load back from database in next loading\n")),(0,n.kt)("h2",{id:"identify-a-store"},"Identify a store"),(0,n.kt)("p",null,"Please note that store locations are technically variable and you should not use coordinates to identify a store.",(0,n.kt)("br",{parentName:"p"}),"\n","Also RuntimeRandomUniqueId should not be used to identify the store, as the name suggests, the value changes every time the server restarts, it should only be used to handle scenarios where the player interacts with the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"long shopId = shop.getShopId(); // never changes unless this shop was deleted, it can be -1 if shop not ready yet, e.g ShopCreateEvent, use ShopCreateSuccessEvent instead.\n")),(0,n.kt)("h2",{id:"getting-a-shop-is-buying-mode-or-selling-mode"},"Getting a shop is buying mode or selling mode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ShopType type = shop.getShopType();\n// It can be ShopType.SELLING or ShopType.BUYING\n")),(0,n.kt)("h2",{id:"getting-a-shop-stacking-amount"},"Getting a shop stacking amount"),(0,n.kt)("p",null,"Although the value is stored in the ItemStack in the implementation, you should not get this value directly from the ItemStack, it can be overwritten by the configuration in runtime."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"int stackingAmount = shop.getShopStackingAmount();\n")),(0,n.kt)("h2",{id:"compare-between-items"},"Compare between items"),(0,n.kt)("p",null,"QuickShop-Hikari has two item matching implementations with different options for different users, so you should avoid using ItemStack.isSimilar() directly, which can lead to unintended results."),(0,n.kt)("h3",{id:"compare-with-shop"},"Compare with shop"),(0,n.kt)("p",null,"If you need compare with a shop's item, you can use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Shop shop = ...;\nboolean applicable = shop.matches(YOUR_ITEM_STACK);\n")),(0,n.kt)("p",null,"or compare between standalone items (We do not recommend this, different parameter order may lead to different results.)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ItemMatcher matcher = api.getItemMatcher();\nboolean applicable = matcher.matches(ORIGINAL, TARGET);\n")))}d.isMDXComponent=!0}}]);