"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69010],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var i=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),l=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},g=function(e){var a=l(e.components);return i.createElement(s.Provider,{value:a},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},c=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),h=l(t),c=n,y=h["".concat(s,".").concat(c)]||h[c]||m[c]||r;return t?i.createElement(y,p(p({ref:a},g),{},{components:t})):i.createElement(y,p({ref:a},g))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,p=new Array(r);p[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[h]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<r;l++)p[l]=t[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},66826:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(58168),n=(t(96540),t(15680));const r={id:"MouseEventParams",title:"Interface: MouseEventParams<HorzScaleItem>",sidebar_label:"MouseEventParams",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,o={unversionedId:"api/interfaces/MouseEventParams",id:"version-4.1/api/interfaces/MouseEventParams",title:"Interface: MouseEventParams<HorzScaleItem>",description:"Represents a mouse event.",source:"@site/versioned_docs/version-4.1/api/interfaces/MouseEventParams.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/MouseEventParams",permalink:"/lightweight-charts/docs/4.1/api/interfaces/MouseEventParams",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"MouseEventParams",title:"Interface: MouseEventParams<HorzScaleItem>",sidebar_label:"MouseEventParams",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"logical",id:"logical",level:3},{value:"point",id:"point",level:3},{value:"seriesData",id:"seriesdata",level:3},{value:"hoveredSeries",id:"hoveredseries",level:3},{value:"hoveredObjectId",id:"hoveredobjectid",level:3},{value:"sourceEvent",id:"sourceevent",level:3}],g={toc:l},h="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(h,(0,i.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Represents a mouse event."),(0,n.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/4.1/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time")))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"time"},"time"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"time"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem")),(0,n.yg)("p",null,"Time of the data at the location of the mouse event."),(0,n.yg)("p",null,"The value will be ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined")," if the location of the event in the chart is outside the range of available data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"logical"},"logical"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"logical"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#logical"},(0,n.yg)("inlineCode",{parentName:"a"},"Logical"))),(0,n.yg)("p",null,"Logical index"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"point"},"point"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"point"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/Point"},(0,n.yg)("inlineCode",{parentName:"a"},"Point"))),(0,n.yg)("p",null,"Location of the event in the chart."),(0,n.yg)("p",null,"The value will be ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined")," if the event is fired outside the chart, for example a mouse leave event."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"seriesdata"},"seriesData"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"seriesData"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"Map"),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsMap"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),", ",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),", ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/AreaData"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BarData"},(0,n.yg)("inlineCode",{parentName:"a"},"BarData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CandlestickData"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BaselineData"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CustomData"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CustomSeriesWhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomSeriesWhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">",", ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#customseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#areaseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#baselineseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#barseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BarSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#candlestickseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#histogramseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#lineseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"LineSeriesOptions")),", ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/AreaStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BaselineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BarStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BarStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CandlestickStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HistogramStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/LineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"LineStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CustomStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">",">",", ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BarData"},(0,n.yg)("inlineCode",{parentName:"a"},"BarData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CustomData"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">",">"),(0,n.yg)("p",null,"Data of all series at the location of the event in the chart."),(0,n.yg)("p",null,"Keys of the map are ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/ISeriesApi"},"ISeriesApi")," instances. Values are prices.\nValues of the map are original data items"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"hoveredseries"},"hoveredSeries"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"hoveredSeries"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/ISeriesApi"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi")),"<keyof ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsMap"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),", ",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),", ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/AreaData"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BarData"},(0,n.yg)("inlineCode",{parentName:"a"},"BarData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CandlestickData"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BaselineData"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CustomData"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CustomSeriesWhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomSeriesWhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">",", ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#customseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#areaseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#baselineseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#barseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BarSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#candlestickseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#histogramseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramSeriesOptions"))," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#lineseriesoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"LineSeriesOptions")),", ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/AreaStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BaselineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/BarStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BarStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CandlestickStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HistogramStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/LineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"LineStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#deeppartial"},(0,n.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CustomStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomStyleOptions"))," & ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon")),">",">"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/ISeriesApi"},"ISeriesApi")," for the series at the point of the mouse event."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"hoveredobjectid"},"hoveredObjectId"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"hoveredObjectId"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"unknown")),(0,n.yg)("p",null,"The ID of the object at the point of the mouse event."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"sourceevent"},"sourceEvent"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"sourceEvent"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/TouchMouseEventData"},(0,n.yg)("inlineCode",{parentName:"a"},"TouchMouseEventData"))),(0,n.yg)("p",null,"The underlying source mouse or touch event data, if available"))}m.isMDXComponent=!0}}]);