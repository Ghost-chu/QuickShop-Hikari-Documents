"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Databases",s={unversionedId:"modules/datasource",id:"modules/datasource",title:"Databases",description:"QuickShop-Hikari support H2 and MySQL two type of databases.",source:"@site/docs/modules/datasource.md",sourceDirName:"modules",slug:"/modules/datasource",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/datasource",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/main/packages/create-docusaurus/templates/shared/docs/modules/datasource.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command Alias",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/cmd-alias"},next:{title:"Economy Formatter",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/economy-formatter"}},u={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Migrate",id:"migrate",level:2}],l={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"databases"},"Databases"),(0,n.kt)("p",null,"QuickShop-Hikari support ",(0,n.kt)("inlineCode",{parentName:"p"},"H2")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," two type of databases."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'#MySQL database settings.\ndatabase:\n  #false = use local SQLite database.\n  #true = use local/remote MySQL database.\n  mysql: false\n  # The database address. (Only required if mysql is true)\n  host: localhost\n  # The database port. (Only required if mysql is true)\n  port: 3306\n  # The database names. (Only required if mysql is true)\n  database: quickshop\n  # The database username. (Only required if mysql is true)\n  user: root\n  # The database password. (Only required if mysql is true)\n  password: passwd\n  # Set prefix to "none" to remove prefix (Both local and remote will be used).\n  prefix: "qs_"\n  # Should QuickShop use SSL for database connections?  (Only required if mysql is true)\n  usessl: false\n  # Properties for creating connections, you can add your own properties for datasource here. (Both local and remote will be used).\n  properties:\n    connection-timeout: 60000\n    validation-timeout: 3000\n    idle-timeout: 60000\n    login-timeout: 10\n    maxLifeTime: 60000\n    maximum-pool-size: 8\n    minimum-idle: 2\n    cachePrepStmts: true\n    prepStmtCacheSize: 250\n    prepStmtCacheSqlLimit: 2048\n    useUnicode: true\n    characterEncoding: utf8\n')),(0,n.kt)("h2",{id:"migrate"},"Migrate"),(0,n.kt)("p",null,"If you want migrate your quickshop data from one type of database to another type, you can export your data then import them."),(0,n.kt)("p",null,"Execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"/qs export")," command in console, quickshop will export a zip which include shop datas."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"exported data",src:r(428).Z,width:"1237",height:"103"})),(0,n.kt)("p",null,"Stop your database, switch the datasource, and start the server.",(0,n.kt)("br",{parentName:"p"}),"\n","You may noticed all shops are gone, because new datasources had no data inside, we will restore them from export."),(0,n.kt)("p",null,"Rename that exported ZIP file to ",(0,n.kt)("inlineCode",{parentName:"p"},"recovery.zip"),", execute ",(0,n.kt)("inlineCode",{parentName:"p"},"/qs recovery")," and restart your server, all shops should back."))}p.isMDXComponent=!0},428:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/database-export-f9f6644cea9e78d473d19c3972a64284.png"}}]);