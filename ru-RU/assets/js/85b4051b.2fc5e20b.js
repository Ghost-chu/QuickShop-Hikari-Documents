"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[9035],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Performance Tweaking",l={unversionedId:"modules/performance-tweaking",id:"modules/performance-tweaking",title:"Performance Tweaking",description:"If you're running a larget network, you can tweak QuickShop-Hikari settings for better performance.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/modules/performance-tweaking.md",sourceDirName:"modules",slug:"/modules/performance-tweaking",permalink:"/QuickShop-Hikari-Documents/ru-RU/docs/modules/performance-tweaking",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ru-RU",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"notifaction-system",permalink:"/QuickShop-Hikari-Documents/ru-RU/docs/modules/notifaction-system"},next:{title:"Placeholders",permalink:"/QuickShop-Hikari-Documents/ru-RU/docs/modules/placeholders"}},s={},p=[{value:"Trim the isolated data",id:"trim-the-isolated-data",level:2},{value:"Purge the history logs",id:"purge-the-history-logs",level:2},{value:"Use Virtual DisplayItem",id:"use-virtual-displayitem",level:2},{value:"Turn off offline-player auto-complete",id:"turn-off-offline-player-auto-complete",level:2},{value:"Turn off responsive inventory stock/space recalculate",id:"turn-off-responsive-inventory-stockspace-recalculate",level:2},{value:"Turn off display item auto despawn",id:"turn-off-display-item-auto-despawn",level:2},{value:"Enable Async Owner Name Fetch",id:"enable-async-owner-name-fetch",level:2},{value:"Disable QuickShop-Reremake shop sign migrating",id:"disable-quickshop-reremake-shop-sign-migrating",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"performance-tweaking"},"Performance Tweaking"),(0,r.kt)("p",null,"If you're running a larget network, you can tweak QuickShop-Hikari settings for better performance."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The default configuration of QuickShop-Hikari has achieved a moderate balance between performance and player friendliness, unless you notice that QuickShop-Hikari has affected the performance of the server, otherwise you do not need to perform optimization.")),(0,r.kt)("h2",{id:"trim-the-isolated-data"},"Trim the isolated data"),(0,r.kt)("p",null,"While the QuickShop-Hikari working progress, some data will went to a isolated data which had no reference by any other records."),(0,r.kt)("p",null,"Trim the isolated data can improve the plugin startup time and database query time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"/qs database trim\n")),(0,r.kt)("h2",{id:"purge-the-history-logs"},"Purge the history logs"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Purge the history logs will also reset all QuickShop-Hikari metrics on this server, and have the risk make other addons who depend on internal-metrics stop working."),(0,r.kt)("p",{parentName:"admonition"},"Take care and backup!")),(0,r.kt)("p",null,"QuickShop-Hikari will record logs into database including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System logs"),(0,r.kt)("li",{parentName:"ul"},"Shop Creation"),(0,r.kt)("li",{parentName:"ul"},"Shop Changes"),(0,r.kt)("li",{parentName:"ul"},"Shop Deletion"),(0,r.kt)("li",{parentName:"ul"},"Player Purchase"),(0,r.kt)("li",{parentName:"ul"},"Any Transaction by QuickShop-Hikari")),(0,r.kt)("p",null,"You can purge them by execute command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"/qs database purgelogs\n")),(0,r.kt)("h2",{id:"use-virtual-displayitem"},"Use Virtual DisplayItem"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"ENABLED")," by default but only works if you have ProtocolLib installed.")),(0,r.kt)("p",null,"If you hadn't try Virtual DisplayItem yet, you totally should use it! It greatly improve the display performance and tick time."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/ru-RU/docs/modules/shops/display-system"},"DisplayItem System")),(0,r.kt)("h2",{id:"turn-off-offline-player-auto-complete"},"Turn off offline-player auto-complete"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"DISABLED")," by default.")),(0,r.kt)("p",null,"The offline-player auto-complete can offer better experenice for player auto-complete.",(0,r.kt)("br",{parentName:"p"}),"\n","But it can create massive Mojang API requests if server running under online-mode.",(0,r.kt)("br",{parentName:"p"}),"\n","It can increase the load of Mojang's API server and may ban your ip for few mintues to too frequent requests.",(0,r.kt)("br",{parentName:"p"}),"\n","Turn off this feature by set the settings in config.yml like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should QS use OfflinePlayer list for TabComplete?\n#This might improve player experience, but may cause lag due to searching what can be a long list.\n#false = Only use the OnlinePlayer list.\n#true = A list of all players that have ever joined your server.\ninclude-offlineplayer-list: false\n")),(0,r.kt)("h2",{id:"turn-off-responsive-inventory-stockspace-recalculate"},"Turn off responsive inventory stock/space recalculate"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"ENABLED")," by default.")),(0,r.kt)("p",null,"QuickShop-Hikari will recalculate the shop inventory contents for update stock/space on hopper move event.",(0,r.kt)("br",{parentName:"p"}),"\n","It may cause the heavy load the hurt the TPS on busy or redstone theme servers."),(0,r.kt)("p",null," it can be disabled by change the setting below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #Update the signs when something (eg Hoppers) triggers InventoryMoveItemEvent?\n  #Disable this if you think that it impacts your server performance.\n  update-sign-when-inventory-moving: false\n")),(0,r.kt)("h2",{id:"turn-off-display-item-auto-despawn"},"Turn off display item auto despawn"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"DISABLED")," by default.")),(0,r.kt)("p",null,"The display-auto-despawn will check ALL loaded shops location and calculate the distance with ALL online players who in the same world with target shop.",(0,r.kt)("br",{parentName:"p"}),"\n","It can cause the heavy load on your server."),(0,r.kt)("p",null,"Disable this feature by change the setting below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.\n  display-auto-despawn: false\n")),(0,r.kt)("h2",{id:"enable-async-owner-name-fetch"},"Enable Async Owner Name Fetch"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"DISABLED")," by default."),(0,r.kt)("p",{parentName:"admonition"},"You can adjust this option in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  #[BETA] Should we async fetch the owner name?\n  #If you enable this option, the calls for ContainerShop#ownerName will return the cached result.\n  #If the request out of cache, QuickShop-Hikari will allow up to 20 ms for sync fetch username.\n  #Then it will turn to background and return "N/A" this time.\n  #This may cause some display problems (e.g. the info sign will show that the shop owner is N/A)\n  #But once the cache is completed for fetching in the background, the next request will return the correct username\n  #This is very useful for large servers, because sometimes players may accidentally load a large number of long ago shops, resulting in a large number of main route IO requests for username queries and causing a spike in lagging\n  async-owner-name-fetch: false\n')),(0,r.kt)("h2",{id:"disable-quickshop-reremake-shop-sign-migrating"},"Disable QuickShop-Reremake shop sign migrating"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is ",(0,r.kt)("strong",{parentName:"p"},"DISABLED")," by default.")),(0,r.kt)("p",null,"If your server is not migrated from QuickShop-Reremake, you should keep this option off to avoid unnecessary sign metadata checks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Legacy data updater\n# Turn on this will make QuickShop to execute extra checks and may affect performance.\n# Only turn it on when you updating from old versions.\nlegacy-updater:\n  shop-sign: false\n")))}c.isMDXComponent=!0}}]);