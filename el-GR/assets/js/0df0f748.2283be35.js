"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[5309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},c="In game sounds and effects",i={unversionedId:"modules/special-effect",id:"modules/special-effect",title:"In game sounds and effects",description:"When you typing and execute a quickshop command, you should hear the sounds like typewriter, it can be changed in config.yml.",source:"@site/i18n/el-GR/docusaurus-plugin-content-docs/current/modules/special-effect.md",sourceDirName:"modules",slug:"/modules/special-effect",permalink:"/QuickShop-Hikari-Documents/el-GR/docs/modules/special-effect",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/el-GR",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Placeholders",permalink:"/QuickShop-Hikari-Documents/el-GR/docs/modules/placeholders"},next:{title:"Transaction System",permalink:"/QuickShop-Hikari-Documents/el-GR/docs/modules/transaction-system"}},l={},u=[{value:"Configuration",id:"configuration",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"in-game-sounds-and-effects"},"In game sounds and effects"),(0,o.kt)("p",null,"When you typing and execute a quickshop command, you should hear the sounds like typewriter, it can be changed in config.yml.",(0,o.kt)("br",{parentName:"p"}),"\n","It's not an important feature, but can have (why not :))."),(0,o.kt)("p",null,"Anyway, you can disable them if you dislike them."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Special in-game effect\neffect:\n  #Sound related\n  sound:\n    #Should we play sound while player trying tab completing?\n    ontabcomplete: true\n    #Should we play sound while player executing commands?\n    oncommand: true\n    #Should we play sound while player clicking shop container/sign?\n    onclick: true\n")))}p.isMDXComponent=!0}}]);