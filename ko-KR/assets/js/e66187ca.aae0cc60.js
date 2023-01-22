"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,g=d["".concat(l,".").concat(h)]||d[h]||s[h]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},o="0x02 Getting Instances",c={unversionedId:"development/get-api-instances",id:"development/get-api-instances",title:"0x02 Getting Instances",description:"QuickShop-Hikari has two types of instances.",source:"@site/i18n/ko-KR/docusaurus-plugin-content-docs/current/development/02-get-api-instances.md",sourceDirName:"development",slug:"/development/get-api-instances",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/development/get-api-instances",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ko-KR",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0x01 Getting Started",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/development/getting-start"},next:{title:"0x03 Work with Shop(Manager)",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/development/work-with-shop-manager"}},l={},p=[{value:"Code Example",id:"code-example",level:2},{value:"Getting with static method",id:"getting-with-static-method",level:3},{value:"Getting with Bukkit Service Manager",id:"getting-with-bukkit-service-manager",level:3},{value:"Getting with direct internal call",id:"getting-with-direct-internal-call",level:3},{value:"You&#39;re done",id:"youre-done",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0x02-getting-instances"},"0x02 Getting Instances"),(0,r.kt)("p",null,"QuickShop-Hikari has two types of instances."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QuickShopAPI - Contains the APIs you need to develop Addon."),(0,r.kt)("li",{parentName:"ul"},"QuickShop - Internal instances of QuickShop, which can be used when you need deep inheritance with QuickShop-Hikari")),(0,r.kt)("h2",{id:"code-example"},"Code Example"),(0,r.kt)("p",null,"There are multiple ways to get instances of QuickShop."),(0,r.kt)("h3",{id:"getting-with-static-method"},"Getting with static method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nQuickShopAPI api = QuickShopAPI.getInstance();\nQuickShop internalInstance = QuickShopAPI.getPluginInstance();\n\n")),(0,r.kt)("h3",{id:"getting-with-bukkit-service-manager"},"Getting with Bukkit Service Manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'RegisteredServiceProvider<QuickShopProvider> provider = Bukkit.getServicesManager().getRegistration(QuickShopProvider.class);\n  if (provider == null) {\n    throw new IllegalStateException("QuickShop hadn\'t loaded at this moment.");\n  }\n    QuickShopAPI api = provider.getProvider().getApiInstance();\n    QuickShop internalInstance = provider.getProvider().getPluginInstance();\n')),(0,r.kt)("h3",{id:"getting-with-direct-internal-call"},"Getting with direct internal call"),(0,r.kt)("p",null,":::warn"),(0,r.kt)("p",null,"This approach is not recommended and compatibility may be poor."),(0,r.kt)("p",null,":::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"QuickShopAPI api = (QuickShopAPI)QuickShop.getInstance();\nQuickShop internalInstance = QuickShop.getInstance();\n")),(0,r.kt)("h3",{id:"youre-done"},"You're done"),(0,r.kt)("p",null,"Once you get an instance of the plugin API, most of the operations can be done through the instance."))}s.isMDXComponent=!0}}]);