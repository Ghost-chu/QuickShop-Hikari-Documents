"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[16],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Economy Formatter",l={unversionedId:"modules/economy-formatter",id:"modules/economy-formatter",title:"Economy Formatter",description:"QuickShop use Economy Formatter to format balance to human readable text.",source:"@site/i18n/nl-NL/docusaurus-plugin-content-docs/current/modules/economy-formatter.md",sourceDirName:"modules",slug:"/modules/economy-formatter",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/economy-formatter",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/nl-NL",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/datasource"},next:{title:"Item Reference (Item Lookup)",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/item-ref"}},c={},u=[{value:"Work with Economy plugins",id:"work-with-economy-plugins",level:2},{value:"Internal Formatter",id:"internal-formatter",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"economy-formatter"},"Economy Formatter"),(0,o.kt)("p",null,"QuickShop use Economy Formatter to format balance to human readable text."),(0,o.kt)("h2",{id:"work-with-economy-plugins"},"Work with Economy plugins"),(0,o.kt)("p",null,"By default, QuickShop will request your installed economy plugin to format balance, but sometimes it may doesn't work (like eco plugin author returns a null), then QuickShop will fallback to internal economy formatter for make sure balance can be formatted."),(0,o.kt)("h2",{id:"internal-formatter"},"Internal Formatter"),(0,o.kt)("p",null,"Internal formatter only will be used when economy plugin's one doesn't work, but anyway, you can force enable it by tweak settings in config.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  #This should fix Vault or an economy plugin incorrectly processing the price and returning a "0" result.\n  #If you enable this setting, then QS will force use the "alternate-currency-symbol".\n  disable-vault-format: false\n')),(0,o.kt)("p",null,"Then you can use these options to customize it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Whether to use decimal format to display money.\nuse-decimal-format: false\n#The decimal format to display money in.\n#The default is #,###.##\ndecimal-format: \"#,###.##\"\nshop:\n  #If vault doesn't return a currency symbol, QuickShop will use this symbol.\n  alternate-currency-symbol: '$'\n  #If the currency symbol should be displayed on the right side (eg 1234$).\n  #By default, it is on the left side (eg $1234).\n  #Only works when disable-vault-format is true.\n  currency-symbol-on-right: false\n  #The maximum number of digits after the decimal.\n  #Set this to -1 to disable it. (Unlimited maximum digits)\n  maximum-digits-in-price: -1\n")))}m.isMDXComponent=!0}}]);