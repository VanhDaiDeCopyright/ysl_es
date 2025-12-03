(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        48312: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(97813)
            }])
        },
        29021: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return Seo
                }
            });
            var o = n(85893),
                i = n(9008),
                r = n.n(i),
                l = n(11163),
                a = n(99038),
                s = n(20372),
                c = n(32397),
                d = n(33796),
                m = n(72042),
                u = n(29057);
            let Seo = e => {
                var t, n;
                let {
                    meta: i,
                    additionalProps: p = {}
                } = e, {
                    t: g
                } = (0, a.T)(), {
                    pageTitle: f,
                    customerServicePhoneNumber: v,
                    pageType: h,
                    tags: j
                } = (0, c.q)(), {
                    locale: x,
                    asPath: y
                } = (0, l.useRouter)(), w = !1;
                (h === m.Am.COLLECTIONS || (0, u.Kv)(j) && h === m.Am.CONTENT) && (w = !0);
                let b = [f, w ? (null == x ? void 0 : x.toUpperCase()) || "" : (0, s.Wl)(x), null !== (t = null == p ? void 0 : p.storeCity) && void 0 !== t ? t : "", null !== (n = null == p ? void 0 : p.storeName) && void 0 !== n ? n : ""],
                    k = g(i.title, ...b),
                    S = g(i.description, ...b),
                    O = g(i["og:title"], ...b),
                    C = g(i["og:description"], ...b),
                    _ = i["json-ld"];
                (null == _ ? void 0 : _.length) > 0 && _[0].contactPoint && (_[0].description = S, _[0].contactPoint = { ..._[0].contactPoint,
                    telephone: v
                });
                let E = y.split("?")[0],
                    H = d.L.toAbs(E, x);
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)(r(), {
                        children: [(0, o.jsx)("title", {
                            children: k
                        }, "meta-title"), (0, o.jsx)("meta", {
                            name: "description",
                            content: S
                        }, "meta-description"), i.keywords && (0, o.jsx)("meta", {
                            name: "keywords",
                            content: i.keywords
                        }, "meta-keywords"), (0, o.jsx)("link", {
                            rel: "canonical",
                            href: i.canonical || H
                        }, "meta-canonical"), i.robots && (0, o.jsx)("meta", {
                            name: "robots",
                            content: i.robots
                        }, "meta-robots"), (0, o.jsx)("meta", {
                            property: "og:title",
                            content: O
                        }, "meta-og-title"), (0, o.jsx)("meta", {
                            property: "og:description",
                            content: C
                        }, "meta-og-description"), (0, o.jsx)("meta", {
                            property: "og:url",
                            content: i["og:url"] || H
                        }, "meta-og-url"), i["og:locale"] && (0, o.jsx)("meta", {
                            property: "og:locale",
                            content: i["og:locale"]
                        }, "meta-og-locale"), i["og:type"] && (0, o.jsx)("meta", {
                            property: "og:type",
                            content: i["og:type"]
                        }, "meta-og-type"), i["og:image"] && (0, o.jsx)("meta", {
                            property: "og:image",
                            content: i["og:image"]
                        }, "meta-og-image"), i["og:image:alt"] && (0, o.jsx)("meta", {
                            property: "og:image:alt",
                            content: i["og:image:alt"]
                        }, "meta-og-image-alt"), i["og:image:type"] && (0, o.jsx)("meta", {
                            property: "og:image:type",
                            content: i["og:image:type"]
                        }, "meta-og-image-type"), i["og:image:width"] && (0, o.jsx)("meta", {
                            property: "og:image:width",
                            content: i["og:image:width"]
                        }, "meta-og-image-width"), i["og:image:height"] && (0, o.jsx)("meta", {
                            property: "og:image:height",
                            content: i["og:image:height"]
                        }, "meta-og-image-height"), (null == _ ? void 0 : _.length) > 0 && (0, o.jsx)("script", {
                            id: "meta-json-ld",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(_, null, 0)
                            }
                        }, "meta-json-ld"), (0, o.jsx)("meta", {
                            name: "google-site-verification",
                            content: "n8usk_kwgEOFkqNnk5BBx8PmmOTyCCHgCXAHqt3qiiA"
                        }, "meta-google-site-verification"), (0, o.jsx)("meta", {
                            name: "facebook-domain-verification",
                            content: "txvd4pv64ynpip3hxlja7243005ie3"
                        }, "meta-facebook-domain-verification"), (0, o.jsx)("meta", {
                            name: "naver-site-verification",
                            content: "b6937b14165bf456a50dc6316fbbc2f4d8036960"
                        }, "meta-naver-site-verification")]
                    })
                })
            }
        },
        49802: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return DefaultFooterRegion
                }
            });
            var o = n(85893),
                i = n(85255);
            let DefaultFooterRegion = e => (0, o.jsx)(i.Uk, {
                component: null == e ? void 0 : e.footer
            })
        },
        64649: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return DefaultHeaderRegion
                }
            });
            var o = n(85893),
                i = n(85255),
                r = n(61882);
            let DefaultHeaderRegion = e => ((0, r.X)(), (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(i.Uk, {
                    component: null == e ? void 0 : e.landingBanner
                }), (0, o.jsx)(i.Uk, {
                    component: null == e ? void 0 : e.header
                }), (0, o.jsx)(i.Uk, {
                    component: null == e ? void 0 : e.informativeBanner
                })]
            }))
        },
        41439: function(e, t, n) {
            "use strict";
            n.d(t, {
                NA: function() {
                    return a
                },
                PQ: function() {
                    return l
                },
                w: function() {
                    return s
                }
            });
            var o = n(82729),
                i = n(51742),
                r = n(14141);

            function _templateObject() {
                let e = (0, o._)([""]);
                return _templateObject = function() {
                    return e
                }, e
            }

            function _templateObject1() {
                let e = (0, o._)(["\n  ", "\n  ", "\n"]);
                return _templateObject1 = function() {
                    return e
                }, e
            }

            function _templateObject2() {
                let e = (0, o._)(["\n  margin-top: ", ";\n"]);
                return _templateObject2 = function() {
                    return e
                }, e
            }
            let l = r.ZP.main.withConfig({
                    componentId: "sc-be169a81-0"
                })(_templateObject()),
                a = (0, r.ZP)(l).withConfig({
                    componentId: "sc-be169a81-1"
                })(_templateObject1(), e => {
                    let {
                        noMarginTop: t
                    } = e;
                    return t ? "" : "margin-top: calc(".concat((0, i.OF)("header"), " + var(--infoBannerHeight));")
                }, e => {
                    let {
                        noPaddingTop: t
                    } = e;
                    return t ? "" : "padding-top: ".concat((0, i.OF)("content"), ";")
                }),
                s = r.ZP.div.withConfig({
                    componentId: "sc-be169a81-2"
                })(_templateObject2(), (0, i.OF)("block-bottom"))
        },
        97813: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return P
                },
                default: function() {
                    return F
                }
            });
            var o = n(85893),
                i = n(29021),
                r = n(32397),
                l = n(67294),
                a = n(82729),
                s = n(14141),
                c = n(51742);

            function _templateObject() {
                let e = (0, a._)(["\n  position: relative;\n  -ms-scroll-chaining: none;\n  overscroll-behavior: contain;\n\n  .swiper {\n    width: 100%;\n    height: min(100vh, 100dvh);\n  }\n\n  .swiper-slide {\n    transition-property: transform, opacity;\n    background-color: ", ";\n  }\n"]);
                return _templateObject = function() {
                    return e
                }, e
            }
            let d = s.ZP.div.withConfig({
                componentId: "sc-2f962fe8-0"
            })(_templateObject(), (0, c.qz)("primary"));
            var m = n(41439),
                u = n(64649),
                p = n(49802),
                g = n(21488),
                f = n(46536),
                v = n(72042),
                h = n(58228),
                j = n(72703),
                x = n(2261),
                y = n(72074);
            let w = {
                    direction: "vertical",
                    slidesPerView: 1,
                    swipes: {
                        longSwipes: !0,
                        longSwipesRatio: .25,
                        shortSwipes: !0
                    },
                    speed: 500,
                    mouseWheel: {
                        sensitivity: 1,
                        thresholdDelta: 10
                    },
                    effect: "creative",
                    creativeEffect: {
                        prev: {
                            opacity: 1,
                            translate: [0, 0, -1]
                        },
                        next: {
                            opacity: 1,
                            translate: [0, "100%", 0]
                        }
                    },
                    keyboard: {
                        enabled: !0,
                        onlyInViewport: !0
                    }
                },
                b = s.ZP.div.withConfig({
                    componentId: "sc-68f87859-0"
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return "\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: ".concat((0, c.kF)(200), ";\n  transform: translateX(-50%) translateY(-50%);\n  overflow: visible;\n  color: ").concat((0, c.xl)("inverse"), ";\n  pointer-events: none;\n  user-select: none;\n\n  > * {\n    transform: translateY(-30px);\n    opacity: 0;\n    animation: 1s var(--ease-fade) 1s 1 fadeIn;\n    animation-fill-mode: forwards;\n  }\n\n  @media ").concat((0, c.bp)("md+", t), " {\n    width: ").concat((0, c.kF)(300), ";\n  }\n")
                });
            var k = n(80885),
                S = n(66700);

            function getDarkSlide(e, t, n, o, i, r, l) {
                var a, s, c, d, m, u, p;
                let g = function(e, t, n, o) {
                        if (o) {
                            let n = null == t ? void 0 : t[e];
                            return (null == n ? void 0 : n.items) || []
                        } {
                            let t = null == n ? void 0 : n[e];
                            return (null == t ? void 0 : t.items) && t.items.length > 0 ? [...t.items.map(e => ({ ...e,
                                isSideItem: t.isSideItem
                            }))] : []
                        }
                    }(e, n, o, i),
                    f = null === (a = g[0]) || void 0 === a ? void 0 : a.isSideItem;
                if (f) return !1;
                let v = !1,
                    h = e === t,
                    j = 1 === g.length;
                if (j && !h && (null === (s = g[0]) || void 0 === s ? void 0 : s.type) === "large") {
                    let e = null === (c = g[0]) || void 0 === c ? void 0 : c.dark;
                    r && (0, S.$)(null === (d = g[0]) || void 0 === d ? void 0 : d.tabletDark) ? e = null === (u = g[0]) || void 0 === u ? void 0 : u.tabletDark : l && (0, S.$)(null === (m = g[0]) || void 0 === m ? void 0 : m.mobileDark) && (e = null === (p = g[0]) || void 0 === p ? void 0 : p.mobileDark), v = !!e
                }
                return v
            }
            var O = n(11163),
                C = n(85255),
                _ = n(96824),
                E = n(34896),
                H = n(96174),
                I = n(22712);
            let BlockHomeSlider = e => {
                var t;
                let {
                    blocks: n,
                    blocksMobile: i
                } = e, {
                    isDesktop: r,
                    isTablet: a,
                    isMobile: s,
                    deviceDetected: c
                } = (0, g.F)(), {
                    UIActions: d
                } = (0, k.MS)(), m = (0, O.useRouter)(), u = r ? n : i, p = (0, l.useRef)(), [f, h] = l.useState(0), S = null === (t = n[0]) || void 0 === t ? void 0 : t.logoCentered;
                (0, l.useEffect)(() => (d.setHideHeaderLogo(!!S), () => {
                    d.setHideHeaderLogo(!1), d.setHeaderLight(!1)
                }), [d, S]);
                let L = (0, l.useCallback)(e => {
                    let t = r ? n.length : i.length,
                        o = getDarkSlide(e.activeIndex, t, n, i, r, a, s);
                    d.setHeaderLight(o)
                }, [n, i, r, a, s, d]);
                return (0, l.useEffect)(() => {
                    p.current && L(p.current)
                }, [s, r, a, L]), (0, l.useEffect)(() => {
                    let e = m.asPath.split("#")[1];
                    p.current && 0 !== u.length && e && (e => {
                        let t = u.findIndex(t => {
                            let {
                                componentId: n
                            } = t;
                            return n && n === e
                        });
                        if (-1 !== t) {
                            var n;
                            null === (n = p.current) || void 0 === n || n.slideTo(t, 0)
                        }
                    })(e)
                }, [m.asPath, u]), (0, o.jsx)(x.tq, {
                    direction: w.direction,
                    slidesPerView: w.slidesPerView,
                    longSwipes: w.swipes.longSwipes,
                    longSwipesRatio: w.swipes.longSwipesRatio,
                    shortSwipes: w.swipes.shortSwipes,
                    speed: w.speed,
                    mousewheel: w.mouseWheel,
                    modules: [y.Gk, y.gI, y.N1],
                    effect: w.effect,
                    creativeEffect: w.creativeEffect,
                    keyboard: w.keyboard,
                    onSwiper: e => {
                        p.current = e
                    },
                    onSlideChange: e => {
                        var t, o;
                        h(e.activeIndex);
                        let l = r ? !!(null === (t = n[e.activeIndex]) || void 0 === t ? void 0 : t.logoCentered) : !!(null === (o = i[e.activeIndex]) || void 0 === o ? void 0 : o.logoCentered);
                        d.setHideHeaderLogo(l), L(e)
                    },
                    children: (e => {
                        if (!c) return null;
                        let t = I.A3;
                        return e.map((e, n) => {
                            var i;
                            let l = (0, o.jsx)(x.o5, {
                                children: (0, o.jsxs)("div", {
                                    id: e.componentId,
                                    children: [0 === n && S && (0, o.jsx)(b, {
                                        children: (0, o.jsx)(E.J, {
                                            name: _.Wm.LogoSansSerif
                                        })
                                    }), e.items && (0, o.jsx)(C.Uk, {
                                        component: {
                                            componentId: "block-home-".concat(n),
                                            componentType: v.EW.BLOCK_HOME,
                                            data: {
                                                blockHomeItems: e.items,
                                                tags: e.tags,
                                                typeOverride: r || e.type !== j.P.DOUBLE ? e.type : j.P.DOUBLE_MOBILE,
                                                position: t,
                                                isActiveSlide: n === f,
                                                ...e.arrowConfig && 0 === n && {
                                                    arrowConfig: e.arrowConfig
                                                }
                                            }
                                        }
                                    }), e.type === j.P.FOOTER && (0, o.jsx)(C.Uk, {
                                        component: { ...e.component,
                                            data: { ...null == e ? void 0 : null === (i = e.component) || void 0 === i ? void 0 : i.data,
                                                legalAndCustomInfos: null
                                            }
                                        }
                                    }), e.type === j.P.LEGAL && e.richText && (0, o.jsx)(H.C, {
                                        text: e.richText,
                                        isFullHeight: !0
                                    })]
                                })
                            }, "block-".concat(n));
                            return t += 1, l
                        })
                    })(u)
                })
            };

            function HomeSingleSlide_styles_templateObject() {
                let e = (0, a._)(["\n  height: min(100vh, 100dvh);\n  width: 100%;\n  overflow: scroll;\n  overflow-x: hidden;\n  scroll-snap-type: y mandatory;\n\n  > * {\n    scroll-snap-align: start;\n  }\n"]);
                return HomeSingleSlide_styles_templateObject = function() {
                    return e
                }, e
            }
            let L = s.ZP.section.withConfig({
                    componentId: "sc-a934a514-0"
                })(HomeSingleSlide_styles_templateObject()),
                useIsElementNearTopViewport = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
                        [o, i] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let handleScroll = () => {
                                if (!(null == e ? void 0 : e.current)) return;
                                let t = e.current.getBoundingClientRect().top;
                                i(t <= n)
                            },
                            o = t.current;
                        if (o) return o.addEventListener("scroll", handleScroll), handleScroll(), () => {
                            o.removeEventListener("scroll", handleScroll)
                        }
                    }, [t, e, n]), o
                },
                HomeSingleSlide = e => {
                    var t;
                    let {
                        blocks: n,
                        blocksMobile: i,
                        footer: r
                    } = e, {
                        isDesktop: a,
                        isTablet: s,
                        isMobile: c
                    } = (0, g.F)(), d = n[0], m = i[0], u = (0, l.useRef)(null), p = null === (t = n[0]) || void 0 === t ? void 0 : t.logoCentered, {
                        UIActions: f,
                        UIState: h
                    } = (0, k.MS)(), x = useIsElementNearTopViewport(h.footerRef, u);
                    return (0, l.useEffect)(() => {
                        let e = !x && getDarkSlide(0, 1, n, i, a, s, c);
                        return f.setHeaderLight(e)
                    }, [f, a, s, c, n, i, x]), (0, l.useEffect)(() => (f.setHideHeaderLogo(!!p), () => {
                        f.setHideHeaderLogo(!1), f.setHeaderLight(!1)
                    }), [f, p]), (0, o.jsx)(L, {
                        ref: u,
                        children: (0, o.jsxs)(o.Fragment, {
                            children: [a && d && (0, o.jsxs)("div", {
                                children: [p && (0, o.jsx)(b, {
                                    children: (0, o.jsx)(E.J, {
                                        name: _.Wm.LogoSansSerif
                                    })
                                }), d.items && (0, o.jsx)(C.Uk, {
                                    component: {
                                        componentId: d.componentId,
                                        componentType: v.EW.BLOCK_HOME,
                                        data: {
                                            blockHomeItems: d.items,
                                            typeOverride: d.type,
                                            tags: d.tags,
                                            arrowConfig: m.arrowConfig
                                        }
                                    }
                                })]
                            }), !a && m && (0, o.jsxs)(o.Fragment, {
                                children: [p && (0, o.jsx)(b, {
                                    children: (0, o.jsx)(E.J, {
                                        name: _.Wm.LogoSansSerif
                                    })
                                }), (0, o.jsx)(C.Uk, {
                                    component: {
                                        componentId: m.componentId,
                                        componentType: v.EW.BLOCK_HOME,
                                        data: {
                                            blockHomeItems: m.items,
                                            typeOverride: a || m.type !== j.P.DOUBLE ? m.type : j.P.DOUBLE_MOBILE,
                                            position: I.A3,
                                            arrowConfig: m.arrowConfig
                                        }
                                    }
                                })]
                            }), r]
                        })
                    })
                };

            function HomePage() {
                let e = (0, r.q)();
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(i.p, {
                        meta: e.meta
                    })
                })
            }
            HomePage.Layout = e => {
                let {
                    children: t
                } = e, {
                    isDesktop: n
                } = (0, g.F)(), i = (0, r.q)(), a = (0, l.useRef)(null), {
                    enableScroll: s,
                    disableScroll: c
                } = (0, f.i)();
                (0, l.useEffect)(() => (a.current && n && c(), () => {
                    s()
                }), [c, s, n, a]);
                let x = (0, l.useMemo)(() => {
                        var e, t;
                        return (null === (t = i.regions.mainRegion.components) || void 0 === t ? void 0 : null === (e = t.filter(e => e.componentType === v.EW.BLOCK_HOME)) || void 0 === e ? void 0 : e.map(e => {
                            let {
                                data: t,
                                componentId: n
                            } = e;
                            return {
                                componentId: n,
                                logoCentered: null == t ? void 0 : t.logoDisplay,
                                ...(0, h.R)(null == t ? void 0 : t.blockHomeItems),
                                tags: null == t ? void 0 : t.tags,
                                ...(null == t ? void 0 : t.arrowConfig) && {
                                    arrowConfig: t.arrowConfig
                                }
                            }
                        })) || []
                    }, [i.regions.mainRegion.components]),
                    y = (0, l.useMemo)(() => {
                        let e = [],
                            t = null == i ? void 0 : i.footer;
                        if (t) {
                            var n;
                            e.push({
                                logoCentered: !1,
                                type: j.P.FOOTER,
                                component: t
                            });
                            let o = null == t ? void 0 : null === (n = t.data) || void 0 === n ? void 0 : n.legalAndCustomInfos;
                            o && e.push({
                                logoCentered: !1,
                                type: j.P.LEGAL,
                                richText: o
                            })
                        }
                        return e
                    }, [i.footer]),
                    w = (0, l.useMemo)(() => [...x, ...y], [x, y]),
                    b = (0, l.useMemo)(() => {
                        let e = w.flatMap(e => (e.items || []).map(t => ({
                            items: [t],
                            type: e.type,
                            componentId: e.componentId,
                            isSideItem: e.type === j.P.DOUBLE,
                            logoCentered: !!(null == e ? void 0 : e.logoCentered),
                            arrowConfig: e.arrowConfig
                        })));
                        return [...e, ...y]
                    }, [w, y]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(u.H, { ...i
                    }), (0, o.jsxs)(m.PQ, {
                        id: "main",
                        children: [(0, o.jsx)(d, {
                            ref: a,
                            children: x.length > 1 ? (0, o.jsx)(BlockHomeSlider, {
                                blocks: w,
                                blocksMobile: b
                            }) : (0, o.jsx)(HomeSingleSlide, {
                                blocks: w,
                                blocksMobile: b,
                                footer: (0, o.jsx)(p.u, { ...i
                                })
                            })
                        }), t]
                    })]
                })
            };
            var P = !0,
                F = HomePage
        }
    },
    function(e) {
        e.O(0, [2544, 2982, 1664, 5877, 9039, 5675, 7747, 8780, 1330, 7580, 6043, 3447, 3684, 9774, 2888, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);