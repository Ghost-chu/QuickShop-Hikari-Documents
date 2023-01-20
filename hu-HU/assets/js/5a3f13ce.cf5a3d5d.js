"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[765],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(t),m=l,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={},i="Placeholders",o={unversionedId:"modules/placeholders",id:"modules/placeholders",title:"Placeholders",description:"QuickShop-Hikari integrates with the PlaceHolderAPI and provides the ability to use PlaceHolders.",source:"@site/i18n/hu-HU/docusaurus-plugin-content-docs/current/modules/placeholders.md",sourceDirName:"modules",slug:"/modules/placeholders",permalink:"/QuickShop-Hikari-Documents/hu-HU/docs/modules/placeholders",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/hu-HU",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance Tweaking",permalink:"/QuickShop-Hikari-Documents/hu-HU/docs/modules/performance-tweaking"},next:{title:"In game sounds and effects",permalink:"/QuickShop-Hikari-Documents/hu-HU/docs/modules/special-effect"}},s={},p=[{value:"Use 3rd-party placeholders in QuickShop-Hikari",id:"use-3rd-party-placeholders-in-quickshop-hikari",level:2},{value:"QuickShop Placeholders",id:"quickshop-placeholders",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"placeholders"},"Placeholders"),(0,l.kt)("p",null,"QuickShop-Hikari integrates with the PlaceHolderAPI and provides the ability to use PlaceHolders."),(0,l.kt)("h2",{id:"use-3rd-party-placeholders-in-quickshop-hikari"},"Use 3rd-party placeholders in QuickShop-Hikari"),(0,l.kt)("p",null,"Most messages are supports PlaceHolderAPI's placeholders."),(0,l.kt)("h2",{id:"quickshop-placeholders"},"QuickShop Placeholders"),(0,l.kt)("p",null,"QuickShop-Hikari registered some placeholders into PlaceHolderAPI, you can use them in any plugin that also support PlaceHolderAPI."),(0,l.kt)("p",null,"All placeholders are cached for 15mins to avoid impact server performance."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_all_x%")," - Count all purchases in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_selling_x%")," - Count all purchases in recent x days which only selling shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_buying_x%")," - Count all purchases in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_buying_x%")," - Count all purchases in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_all_x%")," - Count all purchases in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_selling_x%")," - Count all purchases in recent x days which only selling shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_buying_x%")," - Count all purchases in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_buying_x%")," - Count all purchases in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_all_x%")," - Count all purchases transaction amount in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_selling_x%")," - Count all purchases transaction amount in recent x days which only selling shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_all_x%")," - Count all purchases transaction amount in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_selling_x%")," - Count all purchases transaction amount in recent x days which only selling shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_all%")," - Count all shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_selling%")," - Count all selling shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_buying%")," - Count all buying in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_loaded%")," - Count loaded shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_unloaded%")," - Count unloaded shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_all%")," - Count all shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_selling%")," - Count all selling shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_buying%")," - Count all buying in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_loaded%")," - Count loaded shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_unloaded%")," - Count unloaded shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metadata_fork%")," - Gets the QuickShop fork name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metadata_version%")," - Gets the QuickShop version")))}u.isMDXComponent=!0}}]);