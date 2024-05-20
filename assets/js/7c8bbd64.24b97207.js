"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5587],{15680:(e,n,l)=>{l.d(n,{xA:()=>s,yg:()=>d});var i=l(96540);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function p(e,n){if(null==e)return{};var l,i,t=function(e,n){if(null==e)return{};var l,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)l=r[i],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)l=r[i],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var o=i.createContext({}),g=function(e){var n=i.useContext(o),l=n;return e&&(l="function"==typeof e?e(n):a(a({},n),e)),l},s=function(e){var n=g(e.components);return i.createElement(o.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var l=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=g(l),c=t,d=y["".concat(o,".").concat(c)]||y[c]||u[c]||r;return l?i.createElement(d,a(a({ref:n},s),{},{components:l})):i.createElement(d,a({ref:n},s))}));function d(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=l.length,a=new Array(r);a[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[y]="string"==typeof e?e:t,a[1]=p;for(var g=2;g<r;g++)a[g]=l[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}c.displayName="MDXCreateElement"},31249:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var i=l(58168),t=(l(96540),l(15680));const r={id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,p={unversionedId:"api/interfaces/PriceLineOptions",id:"version-4.0/api/interfaces/PriceLineOptions",title:"Interface: PriceLineOptions",description:"Represents a price line options.",source:"@site/versioned_docs/version-4.0/api/interfaces/PriceLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceLineOptions",permalink:"/lightweight-charts/docs/4.0/api/interfaces/PriceLineOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},g=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"price",id:"price",level:3},{value:"color",id:"color",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineVisible",id:"linevisible",level:3},{value:"axisLabelVisible",id:"axislabelvisible",level:3},{value:"title",id:"title",level:3},{value:"axisLabelColor",id:"axislabelcolor",level:3},{value:"axisLabelTextColor",id:"axislabeltextcolor",level:3}],s={toc:g},y="wrapper";function u(e){let{components:n,...l}=e;return(0,t.yg)(y,(0,i.A)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Represents a price line options."),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"id"},"id"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"id"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("p",null,"The optional ID of this price line."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"price"},"price"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"price"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"number")),(0,t.yg)("p",null,"Price line's value."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"0")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"color"},"color"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"color"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("p",null,"Price line's color."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"''")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"linewidth"},"lineWidth"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"lineWidth"),": ",(0,t.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#linewidth"},(0,t.yg)("inlineCode",{parentName:"a"},"LineWidth"))),(0,t.yg)("p",null,"Price line's width in pixels."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"1")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"linestyle"},"lineStyle"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"lineStyle"),": ",(0,t.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/LineStyle"},(0,t.yg)("inlineCode",{parentName:"a"},"LineStyle"))),(0,t.yg)("p",null,"Price line's style."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/LineStyle#solid"},"Solid")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"linevisible"},"lineVisible"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"lineVisible"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Display line."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"true")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"axislabelvisible"},"axisLabelVisible"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"axisLabelVisible"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Display the current price value in on the price scale."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"true")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"title"},"title"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"title"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("p",null,"Price line's on the chart pane."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"''")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"axislabelcolor"},"axisLabelColor"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"axisLabelColor"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("p",null,"Background color for the axis label.\nWill default to the price line color if unspecified."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"''")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"axislabeltextcolor"},"axisLabelTextColor"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"axisLabelTextColor"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("p",null,"Text color for the axis label."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"''")))}u.isMDXComponent=!0}}]);