"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=l,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={},i="Placeholders",o={unversionedId:"modules/placeholders",id:"modules/placeholders",title:"Placeholders",description:"QuickShop-Hikari integrates with the PlaceHolderAPI and provides the ability to use PlaceHolders.",source:"@site/i18n/pt-PT/docusaurus-plugin-content-docs/current/modules/placeholders.md",sourceDirName:"modules",slug:"/modules/placeholders",permalink:"/QuickShop-Hikari-Documents/pt-PT/docs/modules/placeholders",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/pt-PT",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance Tweaking",permalink:"/QuickShop-Hikari-Documents/pt-PT/docs/modules/performance-tweaking"},next:{title:"In game sounds and effects",permalink:"/QuickShop-Hikari-Documents/pt-PT/docs/modules/special-effect"}},s={},p=[{value:"Use 3rd-party placeholders in QuickShop-Hikari",id:"use-3rd-party-placeholders-in-quickshop-hikari",level:2},{value:"QuickShop Placeholders",id:"quickshop-placeholders",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"placeholders"},"Placeholders"),(0,l.kt)("p",null,"QuickShop-Hikari integrates with the PlaceHolderAPI and provides the ability to use PlaceHolders."),(0,l.kt)("h2",{id:"use-3rd-party-placeholders-in-quickshop-hikari"},"Use 3rd-party placeholders in QuickShop-Hikari"),(0,l.kt)("p",null,"Most messages are supports PlaceHolderAPI's placeholders."),(0,l.kt)("h2",{id:"quickshop-placeholders"},"QuickShop Placeholders"),(0,l.kt)("p",null,"QuickShop-Hikari registered some placeholders into PlaceHolderAPI, you can use them in any plugin that also support PlaceHolderAPI."),(0,l.kt)("p",null,"All placeholders are cached for 15mins to avoid impact server performance."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_all_x%")," - Count all purchases in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_selling_x%")," - Count all purchases in recent x days which only selling shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_buying_x%")," - Count all purchases in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_global_buying_x%")," - Count all purchases in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_all_x%")," - Count all purchases in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_selling_x%")," - Count all purchases in recent x days which only selling shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_buying_x%")," - Count all purchases in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_purchases_player_buying_x%")," - Count all purchases in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_all_x%")," - Count all purchases transaction amount in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_selling_x%")," - Count all purchases transaction amount in recent x days which only selling shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_global_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_all_x%")," - Count all purchases transaction amount in recent x days with all types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_selling_x%")," - Count all purchases transaction amount in recent x days which only selling shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metrics_recent_transactionamount_player_buying_x%")," - Count all purchases transaction amount in recent x days which only buying shops for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_all%")," - Count all shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_selling%")," - Count all selling shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_buying%")," - Count all buying in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_loaded%")," - Count loaded shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_global_total_unloaded%")," - Count unloaded shops in this server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_all%")," - Count all shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_selling%")," - Count all selling shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_buying%")," - Count all buying in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_loaded%")," - Count loaded shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_shopmanager_player_total_unloaded%")," - Count unloaded shops in this server for single player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metadata_fork%")," - Gets the QuickShop fork name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%qs_metadata_version%")," - Gets the QuickShop version")))}u.isMDXComponent=!0}}]);