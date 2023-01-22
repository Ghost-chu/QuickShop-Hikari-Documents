"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3949],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>h});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return n?t.createElement(d,s(s({ref:r},l),{},{components:n})):t.createElement(d,s({ref:r},l))}));function h(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2857:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const i={},s="0x05 Per shop permission",a={unversionedId:"development/per-shop-permission-management",id:"development/per-shop-permission-management",title:"0x05 Per shop permission",description:"QuickShop-Hikari has a per shop permission management system.",source:"@site/i18n/ro-RO/docusaurus-plugin-content-docs/current/development/05-per-shop-permission-management.md",sourceDirName:"development",slug:"/development/per-shop-permission-management",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/development/per-shop-permission-management",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ro-RO",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0x04 Blacklist and PriceLimiter",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/development/blacklist-price-limiter"}},p={},c=[{value:"Check with shop",id:"check-with-shop",level:2},{value:"Register yourself per-shop permission nodes",id:"register-yourself-per-shop-permission-nodes",level:2}],l={toc:c};function m(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0x05-per-shop-permission"},"0x05 Per shop permission"),(0,o.kt)("p",null,"QuickShop-Hikari has a per shop permission management system.",(0,o.kt)("br",{parentName:"p"}),"\n","Therefore, for a normal permission node check is not enough, you need to attach an additional check."),(0,o.kt)("h2",{id:"check-with-shop"},"Check with shop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// check if a player has permission to search this shop (otherwise it should hide from search result)\nboolean visible = shop.playerAuthorize(UUID, BuiltInPermission);\n")),(0,o.kt)("p",null,"If the permission you need to check is from another plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// player uuid, plugin instance, permission\nboolean visible = shop.playerAuthorize(UUID, JavaPlugin, String);\n")),(0,o.kt)("h2",{id:"register-yourself-per-shop-permission-nodes"},"Register yourself per-shop permission nodes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'QuickShop internalInstance = ....;\nShopPermissionManager permManager = internalInstance.getShopPermissionManager();\npermManager.registerPermission(BuiltInShopPermissionGroup.<GROUP_NAME>.getNamespacedNode(), this, "<permission node name here>");\n// for example\npermManager.registerPermission(BuiltInShopPermissionGroup.STAFF.getNamespacedNode(), this, "receive-discord-alert");\n// you need register for everygroup you want to add, there no inheritance\n')))}m.isMDXComponent=!0}}]);