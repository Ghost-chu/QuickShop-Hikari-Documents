"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[36],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=o(n),c=a,m=k["".concat(u,".").concat(c)]||k[c]||d[c]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={},l="Privatsph\xe4re",s={unversionedId:"about/privacy",id:"about/privacy",title:"Privatsph\xe4re",description:"Bei der verwendung des QuickShop-Hikari Dienstes \xfcbermitteln wir die notwendigen und teilweise optionalen Daten an die jeweiligen Dienstleister.",source:"@site/i18n/de-DE/docusaurus-plugin-content-docs/current/about/privacy.md",sourceDirName:"about",slug:"/about/privacy",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/about/privacy",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/de-DE",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lizenzen",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/about/licenses"}},u={},o=[{value:"bStats",id:"bstats",level:2},{value:"bStats Statistiken deaktivieren",id:"bstats-statistiken-deaktivieren",level:3},{value:"Rollbar Fehlerverfolgung",id:"rollbar-fehlerverfolgung",level:2},{value:"Rollbar Fehlerverfolgung deaktivieren",id:"rollbar-fehlerverfolgung-deaktivieren",level:3},{value:"Paste",id:"paste",level:2},{value:"Aktualisierer",id:"aktualisierer",level:2},{value:"Spenden",id:"spenden",level:2}],p={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"privatsph\xe4re"},"Privatsph\xe4re"),(0,a.kt)("p",null,"Bei der verwendung des QuickShop-Hikari Dienstes \xfcbermitteln wir die notwendigen und teilweise optionalen Daten an die jeweiligen Dienstleister."),(0,a.kt)("h2",{id:"bstats"},"bStats"),(0,a.kt)("p",null,"Wir verwenden ",(0,a.kt)("a",{parentName:"p",href:"https://bstats.org/"},"bStats.org")," um statistische Angaben zu sammeln, damit wir unsere Produkte verbessern k\xf6nnen."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bstats.org/privacy-policy"},"bStats' Datenschutzrichtlinien")),(0,a.kt)("p",null,"Alle gesammelten Daten werden auf dieser Seite angezeigt: ",(0,a.kt)("a",{parentName:"p",href:"https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281"},"bStats - QuickShop-Hikari")),(0,a.kt)("h3",{id:"bstats-statistiken-deaktivieren"},"bStats Statistiken deaktivieren"),(0,a.kt)("p",null,"Um das senden von Statistiken an bStats zu verhindern kannst du den bStats Service in der QuickShop-Hikari Konfiguration deaktivieren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Verbiete QuickShop das senden von Daten an bStats.\n#Bitte lass Statistiken aktiviert. Es hilft dem Autor :).\ndisabled-metrics: false\n")),(0,a.kt)("p",null,"Hinweis: Bereits gesammelte Daten werden nicht von bStats entfenrnt. Um existierende Daten zu entfernen, kontaktiere bitte die bStats Administratoren.",(0,a.kt)("br",{parentName:"p"}),"\n","Hinweis: Wir respektieren deine globalen bStats Einstellungen. Solltest du bStats in den globalen einstellungen deaktiviert haben, werden wir keine Daten an bStats senden."),(0,a.kt)("h2",{id:"rollbar-fehlerverfolgung"},"Rollbar Fehlerverfolgung"),(0,a.kt)("p",null,"Wir verwenden ",(0,a.kt)("a",{parentName:"p",href:"https://rollbar.com/"},"Rollbar")," um Fehlermeldungen zu sammeln. Alle Fehlere auf deinem Server, welche mit QuickShop-Hikari zu tun haben, werden automatisch an unsere Rollbar-Bin gesendet."),(0,a.kt)("p",null,"Du kannst Rollbar's Datenschutzrichtlinien ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rollbar.com/docs/privacy-policy"},"hier einsehen"),"."),(0,a.kt)("p",null,"Beinhaltet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zeit"),(0,a.kt)("li",{parentName:"ul"},"Fehler und StackTrace"),(0,a.kt)("li",{parentName:"ul"},"Name des Betriebssystem"),(0,a.kt)("li",{parentName:"ul"},"Typ des Betriebssystems"),(0,a.kt)("li",{parentName:"ul"},"Version des Betriebssystems"),(0,a.kt)("li",{parentName:"ul"},"System-CPU-Kerne"),(0,a.kt)("li",{parentName:"ul"},"Java Version"),(0,a.kt)("li",{parentName:"ul"},"Server/Bukkit Build Version"),(0,a.kt)("li",{parentName:"ul"},"Spieler auf dem Server"),(0,a.kt)("li",{parentName:"ul"},"Online-Modus"),(0,a.kt)("li",{parentName:"ul"},"Deine einzigartige QuickShop-Hikari-ID")),(0,a.kt)("h3",{id:"rollbar-fehlerverfolgung-deaktivieren"},"Rollbar Fehlerverfolgung deaktivieren"),(0,a.kt)("p",null,"Um die Rollbar Fehlerverfolgung zu verbieten kannst du den Rollbar Dienst in der QuickShop-Hikari Konfiguration deaktivieren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Soll es QS erlaubt sein, Fehler automatisch an den Autor weiter zu leiten?\n# Es wird ausserdem eine Paste zur Datenwiederherstellung oder zum Debuggen erstellen, wenn der Server startet.\nauto-report-errors: true\n")),(0,a.kt)("p",null,"Hinweis: Bereits gesammelte Daten werden nicht auf Rollbar gel\xf6scht. Um vorhandene Daten zu entfernen, wende dich an den QuickShop-Hikari Entwickler."),(0,a.kt)("h2",{id:"paste"},"Paste"),(0,a.kt)("p",null,"Wenn du einen Paste mit dem ",(0,a.kt)("inlineCode",{parentName:"p"},"/qs paste")," Befehl erstellst, werden deine Daten auf ",(0,a.kt)("a",{parentName:"p",href:"https://bytebin.lucko.me/"},"Lucko's Bytebin")," hochgeladne.",(0,a.kt)("br",{parentName:"p"}),"\n","Um das hochladen deiner Daten zu verhindern, kannst du einen lokalen Paste mit ",(0,a.kt)("inlineCode",{parentName:"p"},"/qs paste file")," erstellen. Dieser Paste wird lokal auf der Festplatte deines Servers gespeichert, ohne einen Upload."),(0,a.kt)("p",null,"Der Paste Viewer wird auf GitHub Pages gehostet und greift auf die hochgeladenen Daten \xfcber Cloudflare Workers zu."),(0,a.kt)("p",null,"W\xe4hrend wir deinen Paste generieren, zensieren wir sensible Daten. Sende deinen Paste trotzdem nur an Personen, denen du vertraust."),(0,a.kt)("h2",{id:"aktualisierer"},"Aktualisierer"),(0,a.kt)("p",null,"Um nach Updates zu schauen wird QuickShop-Hikari den Nexus von CodeMC.io nach Updates fragen."),(0,a.kt)("p",null,"Um das \xfcberpr\xfcfen nach Updates zu deaktivieren, kannst du es in der Konfiguration anpassen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Soll QS nach Updates suchen d\xfcrfen?\nupdated: false\n")),(0,a.kt)("h2",{id:"spenden"},"Spenden"),(0,a.kt)("p",null,"Wenn du auf ko-fi.com spendest, wird ko-fi pers\xf6hnliche Daten sammeln. Klicke ",(0,a.kt)("a",{parentName:"p",href:"https://more.ko-fi.com/privacy"},"hier")," um ko-fi's Datenschutzrichtlinien einzusehen."),(0,a.kt)("p",null,"Deine pers\xf6hnlichen daten werden ausserdem an Ghost_chu's Webserver gesendet, um deinen Namen in der Fanliste zu zeigen, inklusive:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zeit"),(0,a.kt)("li",{parentName:"ul"},"Deinen Ko-fi Nutzernamen."),(0,a.kt)("li",{parentName:"ul"},"Art der Spende"),(0,a.kt)("li",{parentName:"ul"},"\xd6ffentlich?"),(0,a.kt)("li",{parentName:"ul"},"Nachrichten-ID"),(0,a.kt)("li",{parentName:"ul"},"Nachricht"),(0,a.kt)("li",{parentName:"ul"},"Kofi Transaktions-ID"),(0,a.kt)("li",{parentName:"ul"},"Stufenname")),(0,a.kt)("p",null,"Die gesammelten Daten werden im Gebiet der Volksrepublik China gespeichert und gem\xe4ss der geltenden Gesetze und Vorschriften des Serverstandortes (Peking) verwaltet.",(0,a.kt)("br",{parentName:"p"}),"\n","Um deine Daten zu entfernen, kontaktiere bitte den QuickShop-Hikari Entwickler."),(0,a.kt)("p",null,"Die untenstehenden Daten werden f\xfcr alle ",(0,a.kt)("a",{parentName:"p",href:"https://quickshop-kofi-proxy.ghostchu.workers.dev/"},"hier")," einsehbar sein:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zeit"),(0,a.kt)("li",{parentName:"ul"},"Art"),(0,a.kt)("li",{parentName:"ul"},"Dein Ko-fi Nutzername")),(0,a.kt)("p",null,"Wenn deine Spende als Privat gesetzt wurde, wird sie nicht angezeigt."))}d.isMDXComponent=!0}}]);