(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5199:function(e,t,n){"use strict";n.d(t,{p:function(){return o.p}});var o=n(53610)},48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(86098)}])},53610:function(e,t,n){"use strict";n.d(t,{p:function(){return Seo}});var o=n(85893),i=n(9008),r=n.n(i),a=n(11163),l=n(4298),s=n.n(l),c=n(43052),d=n(68580),m=n(20372),p=n(32397),u=n(27986);let Seo=e=>{var t,n;let{meta:i,additionalProps:l={}}=e,{t:g}=(0,d.T)(),{pageTitle:f}=(0,p.q)(),{locale:v,asPath:h}=(0,a.useRouter)(),j=[f,(0,m.Wl)(v),null!==(t=null==l?void 0:l.storeCity)&&void 0!==t?t:"",null!==(n=null==l?void 0:l.storeName)&&void 0!==n?n:""],x=g(i.title,...j),y=g(i.description,...j),w=g(i["og:title"],...j),b=g(i["og:description"],...j),k=i["json-ld"];(null==k?void 0:k.length)>0&&(k[0].contactPoint={"@type":"ContactPoint",telephone:g("global.support-telephone"),contactType:"Customer Service",areaServed:(0,m.Wl)(v)});let H=h.split("?")[0],S=u.L.toAbs(H,v);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:x},"meta-title"),(0,o.jsx)("meta",{name:"description",content:y},"meta-description"),i.keywords&&(0,o.jsx)("meta",{name:"keywords",content:i.keywords},"meta-keywords"),(0,o.jsx)("link",{rel:"canonical",href:i.canonical||S},"meta-canonical"),i.robots&&(0,o.jsx)("meta",{name:"robots",content:i.robots},"meta-robots"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"meta-viewport"),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"},"meta-favicon"),(0,o.jsx)("meta",{property:"og:title",content:w},"meta-og-title"),(0,o.jsx)("meta",{property:"og:description",content:b},"meta-og-description"),(0,o.jsx)("meta",{property:"og:url",content:i["og:url"]||S},"meta-og-url"),i["og:locale"]&&(0,o.jsx)("meta",{property:"og:locale",content:i["og:locale"]},"meta-og-locale"),i["og:type"]&&(0,o.jsx)("meta",{property:"og:type",content:i["og:type"]},"meta-og-type"),i["og:image"]&&(0,o.jsx)("meta",{property:"og:image",content:i["og:image"]},"meta-og-image"),i["og:image:alt"]&&(0,o.jsx)("meta",{property:"og:image:alt",content:i["og:image:alt"]},"meta-og-image-alt"),i["og:image:type"]&&(0,o.jsx)("meta",{property:"og:image:type",content:i["og:image:type"]},"meta-og-image-type"),i["og:image:width"]&&(0,o.jsx)("meta",{property:"og:image:width",content:i["og:image:width"]},"meta-og-image-width"),i["og:image:height"]&&(0,o.jsx)("meta",{property:"og:image:height",content:i["og:image:height"]},"meta-og-image-height"),(null==k?void 0:k.length)>0&&(0,o.jsx)(s(),{id:"meta-json-ld",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(k,null,0)},strategy:"afterInteractive"},"meta-json-ld"),(0,o.jsx)("meta",{name:"google-site-verification",content:"n8usk_kwgEOFkqNnk5BBx8PmmOTyCCHgCXAHqt3qiiA"},"meta-google-site-verification"),(0,o.jsx)("meta",{name:"facebook-domain-verification",content:"txvd4pv64ynpip3hxlja7243005ie3"},"meta-facebook-domain-verification"),(0,o.jsx)("meta",{name:"naver-site-verification",content:"b6937b14165bf456a50dc6316fbbc2f4d8036960"},"meta-naver-site-verification")]}),(0,o.jsx)(c.j,{})]})}},49802:function(e,t,n){"use strict";n.d(t,{u:function(){return DefaultFooterRegion}});var o=n(85893),i=n(63166);let DefaultFooterRegion=e=>(0,o.jsx)(i.U,{component:null==e?void 0:e.footer})},43834:function(e,t,n){"use strict";n.d(t,{H:function(){return DefaultHeaderRegion}});var o=n(85893),i=n(63166),r=n(67294),a=n(65820),l=n(14141),s=n(18033),c=n(51742);let d=(0,l.ZP)(s.E.div).withConfig({componentId:"sc-b1d0e63c-0"})(e=>{let{theme:t}=e;return"\n  position: fixed;\n  z-index: calc(".concat(t.zIndex.header," - 1);\n  top: calc(var(--spacer-header) + var(--infoBannerHeight));\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  border: none;\n  background: black;\n  color: white;\n  padding: ").concat((0,c.kF)(16),";\n  ")});var m=n(36900),p=n(28220),u=n(30827),g=n(68580),f=n(80885),v=n(95231),h=n(70437),j=n(11163),x=n(69363),y=n(27986);let CartReminderBanner=()=>{let{t:e}=(0,g.T)(),{pathname:t,locale:n}=(0,j.useRouter)(),{data:i}=(0,u.Kc)(),l=null==i?void 0:i.totalBasketProducts,{UIState:s}=(0,f.MS)();(0,v.j)();let c=s.displayedCartReminderBanner;return(0,r.useEffect)(()=>{c&&(0,h.JB)("cartReminder",x.Xf0.VIEW_POPIN,t,"impression",x.ptm.BANNER)},[c]),c?(0,o.jsx)(p.r,{href:"/cart",onClick:e=>{e.preventDefault(),(0,h.JB)("cartReminder",x.Xf0.CLICK_POPIN,t,"intention",x.ptm.BANNER),window.location.href=y.L.toAbs(x.Xl9.cart,n)},children:(0,o.jsx)(a.M,{initial:!1,children:(0,o.jsxs)(d,{initial:{y:"-100vh",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100vh",opacity:0},transition:{duration:2},children:[(0,o.jsx)(m.W2,{display:"flex",padding:5,children:"".concat(l," ").concat(e(1===l?"global.one-item-in-cart":"global.many-items-in-cart"))}),(0,o.jsx)(m.W2,{display:"flex",padding:5,children:e("global.view-cart")})]})})}):null},DefaultHeaderRegion=e=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.U,{component:null==e?void 0:e.landingBanner}),(0,o.jsx)(i.U,{component:null==e?void 0:e.header}),(0,o.jsx)(CartReminderBanner,{}),(0,o.jsx)(i.U,{component:null==e?void 0:e.informativeBanner})]})},41439:function(e,t,n){"use strict";n.d(t,{NA:function(){return l},PQ:function(){return a},w:function(){return s}});var o=n(82729),i=n(51742),r=n(14141);function _templateObject(){let e=(0,o._)([""]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,o._)(["\n  ","\n  ","\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,o._)(["\n  margin-top: ",";\n"]);return _templateObject2=function(){return e},e}let a=r.ZP.main.withConfig({componentId:"sc-be169a81-0"})(_templateObject()),l=(0,r.ZP)(a).withConfig({componentId:"sc-be169a81-1"})(_templateObject1(),e=>{let{noMarginTop:t}=e;return t?"":"margin-top: calc(".concat((0,i.OF)("header")," + var(--infoBannerHeight));")},e=>{let{noPaddingTop:t}=e;return t?"":"padding-top: ".concat((0,i.OF)("content"),";")}),s=r.ZP.div.withConfig({componentId:"sc-be169a81-2"})(_templateObject2(),(0,i.OF)("block-bottom"))},86098:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return B},default:function(){return P}});var o=n(85893),i=n(5199),r=n(32397),a=n(67294),l=n(82729),s=n(14141),c=n(51742);function _templateObject(){let e=(0,l._)(["\n  position: relative;\n  -ms-scroll-chaining: none;\n  overscroll-behavior: contain;\n\n  .swiper {\n    width: 100%;\n    height: min(100vh, 100dvh);\n  }\n\n  .swiper-slide {\n    transition-property: transform, opacity;\n    background-color: ",";\n  }\n"]);return _templateObject=function(){return e},e}let d=s.ZP.div.withConfig({componentId:"sc-2f962fe8-0"})(_templateObject(),(0,c.qz)("primary"));var m=n(2261),p=n(72074),u=n(65610),g=n(90070),f=n(69363),v=n(67428),h=n(21488),j=n(20986),x=n(76215),y=n(58228);let w={direction:"vertical",slidesPerView:1,swipes:{longSwipes:!0,longSwipesRatio:.25,shortSwipes:!0},speed:500,mouseWheel:{sensitivity:1,thresholdDelta:10},effect:"creative",creativeEffect:{prev:{opacity:1,translate:[0,0,-1]},next:{opacity:1,translate:[0,"100%",0]}},keyboard:{enabled:!0,onlyInViewport:!0}},b=s.ZP.div.withConfig({componentId:"sc-6096daa2-0"})(e=>{let{theme:t}=e;return"\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: ".concat((0,c.kF)(200),";\n  transform: translateX(-50%) translateY(-50%);\n  overflow: visible;\n  color: ").concat((0,c.xl)("inverse"),";\n  pointer-events: none;\n  user-select: none;\n\n  > * {\n    transform: translateY(-30px);\n    opacity: 0;\n    animation: 1s var(--ease-fade) 1s 1 fadeIn;\n    animation-fill-mode: forwards;\n  }\n\n  @media ").concat((0,c.bp)("md+",t)," {\n    width: ").concat((0,c.kF)(300),";\n  }\n")});var k=n(80885);let isDefined=e=>null!=e;function getDarkSlide(e,t,n,o,i,r,a){var l,s,c,d,m,p,u;let g=function(e,t,n,o){if(o){let n=null==t?void 0:t[e];return(null==n?void 0:n.items)||[]}{let t=null==n?void 0:n[e];return t?[{...t.item,isSideItem:t.isSideItem}]:[]}}(e,n,o,i),f=null===(l=g[0])||void 0===l?void 0:l.isSideItem;if(f)return!1;let v=!1,h=e===t,j=1===g.length;if(j&&!h&&(null===(s=g[0])||void 0===s?void 0:s.type)==="large"){let e=null===(c=g[0])||void 0===c?void 0:c.dark;r&&isDefined(null===(d=g[0])||void 0===d?void 0:d.tabletDark)?e=null===(p=g[0])||void 0===p?void 0:p.tabletDark:a&&isDefined(null===(m=g[0])||void 0===m?void 0:m.mobileDark)&&(e=null===(u=g[0])||void 0===u?void 0:u.mobileDark),v=!!e}return v}let BlockHomeSlider=e=>{var t,n;let i;let{blocks:r,blocksMobile:l}=e,{isDesktop:s,isTablet:c,isMobile:d}=(0,h.F)(),{UIActions:y}=(0,k.MS)(),H=(0,a.useRef)(),S=null===(t=r[0])||void 0===t?void 0:t.logoCentered;(0,a.useEffect)(()=>(y.setHideHeaderLogo(!!S),()=>{y.setHideHeaderLogo(!1),y.setHeaderLight(!1)}),[y,S]);let _=(0,a.useCallback)(e=>{let t=s?r.length:l.length,n=getDarkSlide(e.activeIndex,t,r,l,s,c,d);y.setHeaderLight(n)},[r,l,s,c,d,y]);return(0,a.useEffect)(()=>{H.current&&_(H.current)},[d,s,c,_]),(0,o.jsx)(m.tq,{direction:w.direction,slidesPerView:w.slidesPerView,longSwipes:w.swipes.longSwipes,longSwipesRatio:w.swipes.longSwipesRatio,shortSwipes:w.swipes.shortSwipes,speed:w.speed,mousewheel:w.mouseWheel,modules:[p.Gk,p.gI,p.N1],effect:w.effect,creativeEffect:w.creativeEffect,keyboard:w.keyboard,onSwiper:e=>{H.current=e},onSlideChange:e=>{var t,n;let o=s?!!(null===(t=r[e.activeIndex])||void 0===t?void 0:t.logoCentered):!!(null===(n=l[e.activeIndex])||void 0===n?void 0:n.logoCentered);y.setHideHeaderLogo(o),_(e)},children:(n=s?r:l,i=f.A3s,n.map((e,t)=>{var n;let r=(0,o.jsx)(m.o5,{children:(0,o.jsxs)(o.Fragment,{children:[0===t&&S&&(0,o.jsx)(b,{children:(0,o.jsx)(u.J,{name:v.W.LogoSansSerif})}),e.items&&(0,o.jsx)(v.U,{component:{componentId:"block-home-".concat(t),componentType:f.EWm.BLOCK_HOME,data:{blockHomeItems:e.items,tags:e.tags,type:e.type,position:i,hasBlockHomeArrow:e.hasBlockHomeArrow&&0===t}}}),e.item&&(0,o.jsx)(j.b,{item:e.item,isSideItem:e.isSideItem,position:i,hasBlockHomeArrow:e.hasBlockHomeArrow&&0===t}),e.type===x.P.FOOTER&&(0,o.jsx)(v.U,{component:{...e.component,data:{...null==e?void 0:null===(n=e.component)||void 0===n?void 0:n.data,legalAndCustomInfos:null}}}),e.type===x.P.LEGAL&&e.richText&&(0,o.jsx)(g.C,{text:e.richText,isFullHeight:!0})]})},"block-".concat(t));return i+=1,r}))})};function HomeSingleSlide_styles_templateObject(){let e=(0,l._)(["\n  height: min(100vh, 100dvh);\n  width: 100%;\n  overflow: scroll;\n  overflow-x: hidden;\n  scroll-snap-type: y mandatory;\n\n  > * {\n    scroll-snap-align: start;\n  }\n"]);return HomeSingleSlide_styles_templateObject=function(){return e},e}let H=s.ZP.section.withConfig({componentId:"sc-a934a514-0"})(HomeSingleSlide_styles_templateObject());var S=n(26067);let HomeSingleSlide=e=>{var t;let{blocks:n,blocksMobile:i,footer:r}=e,{isDesktop:l,isTablet:s,isMobile:c}=(0,h.F)(),d=n[0],m=i[0],p=null===(t=n[0])||void 0===t?void 0:t.logoCentered,{UIActions:u}=(0,k.MS)();return(0,a.useEffect)(()=>{let e=getDarkSlide(0,1,n,i,l,s,c);u.setHeaderLight(e)},[u,l,s,c,n,i]),(0,a.useEffect)(()=>(u.setHideHeaderLogo(!!p),()=>{u.setHideHeaderLogo(!1),u.setHeaderLight(!1)}),[u,p]),(0,o.jsx)(H,{children:(0,o.jsxs)(o.Fragment,{children:[l&&d&&(0,o.jsxs)("div",{children:[p&&(0,o.jsx)(b,{children:(0,o.jsx)(S.J,{name:v.W.LogoSansSerif})}),d.items&&(0,o.jsx)(v.U,{component:{componentId:"home-single-slide",componentType:f.EWm.BLOCK_HOME,data:{type:d.type,blockHomeItems:d.items,tags:d.tags,hasBlockHomeArrow:d.hasBlockHomeArrow}}})]}),!l&&m&&(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(b,{children:(0,o.jsx)(S.J,{name:v.W.LogoSansSerif})}),(0,o.jsx)(j.b,{item:m.item,isSideItem:m.isSideItem,position:f.A3s,hasBlockHomeArrow:m.hasBlockHomeArrow})]}),r]})})};var _=n(41439),C=n(43834),I=n(49802),O=n(46536);function HomePage(){let e=(0,r.q)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.p,{meta:e.meta})})}HomePage.Layout=e=>{let{children:t}=e,{isDesktop:n}=(0,h.F)(),i=(0,r.q)(),l=(0,a.useRef)(null),{enableScroll:s,disableScroll:c}=(0,O.i)();(0,a.useEffect)(()=>(l.current&&n&&c(),()=>{s()}),[c,s,n,l]);let m=(0,a.useMemo)(()=>{var e;return(null===(e=i.regions.mainRegion.components)||void 0===e?void 0:e.map(e=>{let{data:t}=e;return{logoCentered:null==t?void 0:t.logoDisplay,...(0,y.R)(null==t?void 0:t.blockHomeItems),tags:null==t?void 0:t.tags,hasBlockHomeArrow:null==t?void 0:t.hasBlockHomeArrow}}))||[]},[i.regions.mainRegion.components]),p=(0,a.useMemo)(()=>{let e=[],t=null==i?void 0:i.footer;if(t){var n;e.push({logoCentered:!1,type:x.P.FOOTER,component:t});let o=null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.legalAndCustomInfos;o&&e.push({logoCentered:!1,type:x.P.LEGAL,richText:o})}return e},[i.footer]),u=(0,a.useMemo)(()=>[...m,...p],[m,p]),g=(0,a.useMemo)(()=>{let e=u.flatMap(e=>(e.items||[]).map(t=>({item:t,type:e.type,isSideItem:e.type===x.P.DOUBLE,logoCentered:!!(null==e?void 0:e.logoCentered),hasBlockHomeArrow:e.hasBlockHomeArrow})));return[...e,...p]},[u,p]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.H,{...i}),(0,o.jsxs)(_.PQ,{id:"main",children:[(0,o.jsx)(d,{ref:l,children:m.length>1?(0,o.jsx)(BlockHomeSlider,{blocks:u,blocksMobile:g}):(0,o.jsx)(HomeSingleSlide,{blocks:u,blocksMobile:g,footer:(0,o.jsx)(I.u,{...i})})}),t]})]})};var B=!0,P=HomePage}},function(e){e.O(0,[2544,2982,1664,2095,7891,5717,136,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);