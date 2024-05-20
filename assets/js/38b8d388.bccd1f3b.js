"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8787],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=u(n),g=o,f=y["".concat(p,".").concat(g)]||y[g]||c[g]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},72314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const a={id:"LayoutOptions",title:"Interface: LayoutOptions",sidebar_label:"LayoutOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"api/interfaces/LayoutOptions",id:"api/interfaces/LayoutOptions",title:"Interface: LayoutOptions",description:"Represents layout options",source:"@site/docs/api/interfaces/LayoutOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LayoutOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LayoutOptions",title:"Interface: LayoutOptions",sidebar_label:"LayoutOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},u=[{value:"Properties",id:"properties",level:2},{value:"background",id:"background",level:3},{value:"textColor",id:"textcolor",level:3},{value:"fontSize",id:"fontsize",level:3},{value:"fontFamily",id:"fontfamily",level:3}],s={toc:u},y="wrapper";function c(e){let{components:t,...n}=e;return(0,o.yg)(y,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Represents layout options"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"background"},"background"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"background"),": ",(0,o.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#background"},(0,o.yg)("inlineCode",{parentName:"a"},"Background"))),(0,o.yg)("p",null,"Chart and scales background color."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"{ type: ColorType.Solid, color: '#FFFFFF' }")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"textcolor"},"textColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"textColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Color of text on the scales."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#191919'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"fontsize"},"fontSize"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"fontSize"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,"Font size of text on scales in pixels."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"12")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"fontfamily"},"fontFamily"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"fontFamily"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Font family of text on the scales."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif")))}c.isMDXComponent=!0}}]);