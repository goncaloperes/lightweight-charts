"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5090],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>m});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||g[u]||r;return a?t.createElement(m,o(o({ref:n},d),{},{components:a})):t.createElement(m,o({ref:n},d))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25177:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=a(58168),i=(a(96540),a(15680));const r={sidebar_label:"Canvas Rendering Target",sidebar_position:3},o="Canvas Rendering Target",s={unversionedId:"plugins/canvas-rendering-target",id:"version-4.1/plugins/canvas-rendering-target",title:"Canvas Rendering Target",description:"The renderer functions used within the plugins (both Custom Series, and Drawing",source:"@site/versioned_docs/version-4.1/plugins/canvas-rendering-target.md",sourceDirName:"plugins",slug:"/plugins/canvas-rendering-target",permalink:"/lightweight-charts/docs/plugins/canvas-rendering-target",draft:!1,tags:[],version:"4.1",sidebarPosition:3,frontMatter:{sidebar_label:"Canvas Rendering Target",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Custom Series Types",permalink:"/lightweight-charts/docs/plugins/custom_series"},next:{title:"Pixel Perfect Rendering",permalink:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/"}},l={},c=[{value:"Using <code>CanvasRenderingTarget2D</code>",id:"using-canvasrenderingtarget2d",level:2},{value:"Difference between Bitmap and Media",id:"difference-between-bitmap-and-media",level:2},{value:"Bitmap Coordinate Space",id:"bitmap-coordinate-space",level:3},{value:"Bitmap Coordinate Space Usage",id:"bitmap-coordinate-space-usage",level:4},{value:"Media Coordinate Space",id:"media-coordinate-space",level:3},{value:"Media Coordinate Space Usage",id:"media-coordinate-space-usage",level:4},{value:"General Tips",id:"general-tips",level:2}],d={toc:c},p="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(p,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"canvas-rendering-target"},"Canvas Rendering Target"),(0,i.yg)("p",null,"The renderer functions used within the plugins (both Custom Series, and Drawing\nPrimitives) are provided with a ",(0,i.yg)("inlineCode",{parentName:"p"},"CanvasRenderingTarget2D")," interface on which the\ndrawing logic (using the\n",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"Browser's 2D Canvas API"),")\nshould be executed. ",(0,i.yg)("inlineCode",{parentName:"p"},"CanvasRenderingTarget2D")," is provided by the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/tradingview/fancy-canvas"},"Fancy Canvas")," library."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The typescript definitions can be viewed here:"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/fancy-canvas?activeTab=code"},"fancy-canvas on npmjs.com"))),(0,i.yg)("p",{parentName:"admonition"},"and specifically the definition for ",(0,i.yg)("inlineCode",{parentName:"p"},"CanvasRenderingTarget2D")," can be viewed\nhere:"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://unpkg.com/fancy-canvas/canvas-rendering-target.d.ts"},"canvas-rendering-target.d.ts")))),(0,i.yg)("h2",{id:"using-canvasrenderingtarget2d"},"Using ",(0,i.yg)("inlineCode",{parentName:"h2"},"CanvasRenderingTarget2D")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"CanvasRenderingTarget2D")," provides two rendering scope which you can use:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"useMediaCoordinateSpace")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"useBitmapCoordinateSpace"))),(0,i.yg)("h2",{id:"difference-between-bitmap-and-media"},"Difference between Bitmap and Media"),(0,i.yg)("p",null,"Bitmap sizing represents the actual physical pixels on the device's screen,\nwhile the media size represents the size of a pixel according to the operating\nsystem (and browser) which is generally an integer representing the ratio of\nactual physical pixels are used to render a media pixel. This integer ratio is\nreferred to as the device pixel ratio."),(0,i.yg)("p",null,"Using the bitmap sizing allows for more control over the drawn image to ensure\nthat the graphics are crisp and pixel perfect, however this generally means that\nthe code will contain a lot multiplication of coordinates by the pixel ratio. In\ncases where you don't need to draw using the bitmap sizing then it is easier to\nuse media sizing as you don't need to worry about the devices pixel ratio."),(0,i.yg)("h3",{id:"bitmap-coordinate-space"},"Bitmap Coordinate Space"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"useBitmapCoordinateSpace")," can be used to if you would like draw using the\nactual devices pixels as the coordinate sizing. The provided scope (of type\n",(0,i.yg)("inlineCode",{parentName:"p"},"BitmapCoordinatesRenderingScope"),") contains readonly values for the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"context"),"\n(",(0,i.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"CanvasRenderingContext2D"),").\nContext which can be used for rendering."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"horizontalPixelRatio")," (number)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"verticalPixelRatio")," (number)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"bitmapSize")," (Size). Height and width of the canvas in bitmap dimensions."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"mediaSize")," (Size). Height and width of the canvas in media dimensions.")),(0,i.yg)("h4",{id:"bitmap-coordinate-space-usage"},"Bitmap Coordinate Space Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:"title='javascript'",title:"'javascript'"},"// target is an instance of CanvasRenderingTarget2D\ntarget.useBitmapCoordinateSpace(scope => {\n    // scope is an instance of BitmapCoordinatesRenderingScope\n\n    // example of drawing a filled rectangle which fills the canvas\n    scope.context.beginPath();\n    scope.context.rect(0, 0, scope.bitmapSize.width, scope.bitmapSize.height);\n    scope.context.fillStyle = 'rgba(100, 200, 50, 0.5)';\n    scope.context.fill();\n});\n")),(0,i.yg)("h3",{id:"media-coordinate-space"},"Media Coordinate Space"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"useMediaCoordinateSpace")," can be used to if you would like draw using the media\ndimensions as the coordinate sizing. The provided scope (of type\n",(0,i.yg)("inlineCode",{parentName:"p"},"MediaCoordinatesRenderingScope"),") contains readonly values for the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"context"),"\n(",(0,i.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"CanvasRenderingContext2D"),").\nContext which can be used for rendering."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"mediaSize")," (Size). Height and width of the canvas in media dimensions.")),(0,i.yg)("h4",{id:"media-coordinate-space-usage"},"Media Coordinate Space Usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:"title='javascript'",title:"'javascript'"},"// target is an instance of CanvasRenderingTarget2D\ntarget.useMediaCoordinateSpace(scope => {\n    // scope is an instance of BitmapCoordinatesRenderingScope\n\n    // example of drawing a filled rectangle which fills the canvas\n    scope.context.beginPath();\n    scope.context.rect(0, 0, scope.mediaSize.width, scope.mediaSize.height);\n    scope.context.fillStyle = 'rgba(100, 200, 50, 0.5)';\n    scope.context.fill();\n});\n")),(0,i.yg)("h2",{id:"general-tips"},"General Tips"),(0,i.yg)("p",null,"It is recommended that rendering functions should save and restore the canvas\ncontext before and after all the rendering logic to ensure that the canvas state\nis the same as when the renderer function was evoked. To handle the case\nwhen an error in the code might prevent the restore function from being evoked,\nyou should use the try - finally code block to ensure that the context is\ncorrectly restored in all cases."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note")," that ",(0,i.yg)("inlineCode",{parentName:"p"},"useBitmapCoordinateSpace")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"useMediaCoordinateSpace")," will automatically\nsave and restore the canvas context for the logic defined within them. This tip for your\nadditional rendering functions within the ",(0,i.yg)("inlineCode",{parentName:"p"},"use*CoordinateSpace"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:"title='javascript'",title:"'javascript'"},"function myRenderingFunction(scope) {\n    const ctx = scope.context;\n\n    // save the current state of the context to the stack\n    ctx.save();\n\n    try {\n        // example code\n        scope.context.beginPath();\n        scope.context.rect(0, 0, scope.mediaSize.width, scope.mediaSize.height);\n        scope.context.fillStyle = 'rgba(100, 200, 50, 0.5)';\n        scope.context.fill();\n    } finally {\n        // restore the saved context from the stack\n        ctx.restore();\n    }\n}\n\ntarget.useMediaCoordinateSpace(scope => {\n    myRenderingFunction(scope);\n    myOtherRenderingFunction(scope);\n    /* ... */\n});\n")))}g.isMDXComponent=!0}}]);