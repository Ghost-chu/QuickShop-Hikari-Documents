"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[6349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),N=s(n),h=i,m=N["".concat(c,".").concat(h)]||N[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=N;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},88:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},o="Interaction Manager",l={unversionedId:"modules/interaction",id:"modules/interaction",title:"Interaction Manager",description:"The Interaction Manager allows you customize the click handler.",source:"@site/i18n/ja-JP/docusaurus-plugin-content-docs/current/modules/interaction.md",sourceDirName:"modules",slug:"/modules/interaction",permalink:"/QuickShop-Hikari-Documents/ja-JP/docs/modules/interaction",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ja-JP",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economy Formatter",permalink:"/QuickShop-Hikari-Documents/ja-JP/docs/modules/economy-formatter"},next:{title:"Item Expression",permalink:"/QuickShop-Hikari-Documents/ja-JP/docs/modules/item-expression"}},c={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Glossary",id:"glossary",level:2},{value:"Available Keys",id:"available-keys",level:2},{value:"Available Values",id:"available-values",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interaction-manager"},"Interaction Manager"),(0,i.kt)("p",null,"The Interaction Manager allows you customize the click handler.",(0,i.kt)("br",{parentName:"p"}),"\n","For example, you can set store creation or interaction to occur only when you click on a store while sneaking."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"There is example configuration for ",(0,i.kt)("inlineCode",{parentName:"p"},"interaction.yml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1\n\nSTANDING_LEFT_CLICK_SIGN: TRADE_INTERACTION\nSTANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL\nSTANDING_LEFT_CLICK_SHOPBLOCK: TRADE_INTERACTION\nSTANDING_RIGHT_CLICK_SHOPBLOCK: NONE # Reserve for open chest\nSNEAKING_LEFT_CLICK_SIGN: NONE\nSNEAKING_RIGHT_CLICK_SIGN: NONE\nSNEAKING_LEFT_CLICK_SHOPBLOCK: NONE\nSNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE # Reserve for open chest\n# Direct trade:\n#STANDING_LEFT_CLICK_SIGN: TRADE_INTERACTION\n#STANDING_RIGHT_CLICK_SIGN: CONTROL_PANEL\n#STANDING_LEFT_CLICK_SHOPBLOCK: TRADE_INTERACTION\n#STANDING_RIGHT_CLICK_SHOPBLOCK: NONE\n#SNEAKING_LEFT_CLICK_SIGN: TRADE_DIRECT\n#SNEAKING_RIGHT_CLICK_SIGN:  TRADE_DIRECT_ALL\n#SNEAKING_LEFT_CLICK_SHOPBLOCK: TRADE_DIRECT\n#SNEAKING_RIGHT_CLICK_SHOPBLOCK: NONE\n")),(0,i.kt)("p",null,"The key name of the configuration indicates the behavior. The value value of the configuration indicates the action corresponding to the behavior."),(0,i.kt)("h2",{id:"glossary"},"Glossary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIGN")," - The shop information sign that displaying the price, owner, item name etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SHOPBLOCK")," - The shop block itself, for example, the Chest."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LEFT_CLICK")," - The key that used for destory block, named by Minecraft default value - LEFT_CLICK"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RIGHT_CLICK")," - The key that used for interact block, named by Minecraft default value - RIGHT_CLICK")),(0,i.kt)("h2",{id:"available-keys"},"Available Keys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STANDING_LEFT_CLICK_SIGN")," - Player left click the sign information when standing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STANDING_RIGHT_CLICK_SIGN")," - Player right click the shop information sign when standing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STANDING_LEFT_CLICK_SHOPBLOCK")," - Player left click the shop block when standing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STANDING_RIGHT_CLICK_SHOPBLOCK")," - Player right click the shop block when standing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SNEAKING_LEFT_CLICK_SIGN")," - Player left click the sign information when sneaking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SNEAKING_RIGHT_CLICK_SIGN")," - Player right click the shop information sign when sneaking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SNEAKING_LEFT_CLICK_SHOPBLOCK")," - Player left click the shop block when sneaking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SNEAKING_RIGHT_CLICK_SHOPBLOCK")," - Player right click the shop block when sneaking")),(0,i.kt)("h2",{id:"available-values"},"Available Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NONE")," - Do nothing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRADE_INTERACTION")," - If there is a shop at the target location, send the shop information panel. Otherwise ask the player for shop creation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CONTROL_PANEL")," - If there is a shop at the target location, send the shop control panel. Otherwise do nothing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRADE_DIRECT")," - If there is a shop at the target location, directly purchase for 1x item (or 1x stack in stacking shop) without ask.'"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRADE_DIRECT_ALL")," - If there is a shop at the target location, directly purchase for as much as possible items without ask. (same with type ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," keyword in the chat when quickshop asking the amount in purchase)")))}u.isMDXComponent=!0}}]);