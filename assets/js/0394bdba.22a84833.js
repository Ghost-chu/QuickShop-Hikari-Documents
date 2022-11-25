"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[9260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Installation",l={unversionedId:"setup/install",id:"setup/install",title:"Installation",description:"This will walk through installing QuickShop-Hikari on your Spigot server.",source:"@site/docs/setup/install.md",sourceDirName:"setup",slug:"/setup/install",permalink:"/QuickShop-Hikari-Documents/docs/setup/install",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/main/packages/create-docusaurus/templates/shared/docs/setup/install.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/QuickShop-Hikari-Documents/docs/category/setup"},next:{title:"Permission",permalink:"/QuickShop-Hikari-Documents/docs/setup/permissions"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Install QuickShop-Hikari",id:"install-quickshop-hikari",level:2},{value:"Configure QuickShop to allow player use it",id:"configure-quickshop-to-allow-player-use-it",level:2},{value:"It&#39;s done",id:"its-done",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This will walk through installing QuickShop-Hikari on your Spigot server."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/wiki/buildtools/"},"Spigot"),"-based Minecraft server (1.18.2 or higher, Java 17+)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You also can use ",(0,o.kt)("a",{parentName:"li",href:"https://papermc.io/"},"Paper")," and it's fork for better compatibility, more features and higher performance."))),(0,o.kt)("li",{parentName:"ul"},"Plugin ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/34315/"},"Vault")," for bridge economy system between QuickShop and your economy plugins."),(0,o.kt)("li",{parentName:"ul"},"Plugin ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/1997"},"ProtocolLib")," for Virtual DisplayItem, Per-player localization."),(0,o.kt)("li",{parentName:"ul"},"Any Vault compatiable economy plugin like ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/75669/"},"XConomy"),", If you have ",(0,o.kt)("a",{parentName:"li",href:"https://modrinth.com/plugin/essentialsx"},"EssentialsX"),", it will also works well."),(0,o.kt)("li",{parentName:"ul"},"A permission management plugin like ",(0,o.kt)("a",{parentName:"li",href:"https://luckperms.net/"},"LuckPerms"),".")),(0,o.kt)("p",null,"In the following documents, we will assume that you are using the latest version of QuickShop-Hikari, ProtocolLib, XConomy, Vault and LuckPerms under Windows 11 operation system (Linux basiclly same)."),(0,o.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("p",null,"Before install QuickShop-Hikari, you should make sure you have all dependencies including ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/34315/"},"Vault"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/1997"},"ProtocolLib"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/75669/"},"XConomy")," (or ",(0,o.kt)("a",{parentName:"p",href:"https://modrinth.com/plugin/essentialsx"},"EssentialsX")," if you want) and ",(0,o.kt)("a",{parentName:"p",href:"https://luckperms.net/"},"LuckPerms")," installed!"),(0,o.kt)("p",null,"Just download them and drop into ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder and you're done!"),(0,o.kt)("h2",{id:"install-quickshop-hikari"},"Install QuickShop-Hikari"),(0,o.kt)("p",null,"Download latest QuickShop-Hikari from ",(0,o.kt)("a",{parentName:"p",href:"https://modrinth.com/plugin/quickshop-hikari"},"Modrinth"),", if you find multiple files that have ",(0,o.kt)("inlineCode",{parentName:"p"},"Compat-")," prefix in file name, ignore them in this step.",(0,o.kt)("br",{parentName:"p"}),"\n","The only file you need download should have a ",(0,o.kt)("strong",{parentName:"p"},"Primary")," tag like the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"download primary file",src:r(6697).Z,width:"903",height:"154"})),(0,o.kt)("p",null,"Drop the QuickShop jar into your ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder, start the server, then execute ",(0,o.kt)("inlineCode",{parentName:"p"},"qs")," command in console. If your install properly, plugin commands help will output like the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"console test",src:r(9494).Z,width:"1730",height:"954"})),(0,o.kt)("p",null,"If you see any errors in output, you can read FAQ section or join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/Bu3dVtmsD3"},"Discord")," support server and ask in ",(0,o.kt)("inlineCode",{parentName:"p"},"#qsh-support")," channel."),(0,o.kt)("h2",{id:"configure-quickshop-to-allow-player-use-it"},"Configure QuickShop to allow player use it"),(0,o.kt)("p",null,"By default settings, players are unable to create their shops."),(0,o.kt)("p",null,"To allow players create and own shops, you must grant the necessary permissions to players."),(0,o.kt)("p",null,"Fortunately, for the most of users, all you need to do is run a simple command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mcfunction"},"/lp group default permission set quickshop.player true\n")),(0,o.kt)("p",null,"and you're done! Players now able to create and use shops and access to most features."),(0,o.kt)("p",null,"To advanced permission setup, you check ",(0,o.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/docs/setup/permissions"},"here"),"."),(0,o.kt)("h2",{id:"its-done"},"It's done"),(0,o.kt)("p",null,"Now QuickShop-Hikari can running on your server, for more settings, check the left navigation and see different sections."))}c.isMDXComponent=!0},6697:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/download-primary-f8c08f13e675a104b2dcfd97317d722d.png"},9494:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/qs-command-test-b0704988e547b9c6376c6ca7b6d104d8.png"}}]);