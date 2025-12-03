"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9432], {
        61547: function(n, e, t) {
            t.d(e, {
                w: function() {
                    return PageLoader
                }
            });
            var o = t(85893),
                i = t(14141);
            let a = i.ZP.div.withConfig({
                componentId: "sc-a0021517-0"
            })(n => {
                let {
                    isActive: e,
                    theme: t,
                    opacity: o
                } = n;
                return "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #efefef;\n  opacity: 0;\n  z-index: ".concat(t.zIndex.loader, ";\n  display: flex;\n  transition: visibility 0s 1.01s, opacity 1s var(--ease-fade);\n  visibility: hidden;\n  justify-content: center;\n  align-items: center;\n\n  ").concat(e ? "\n          opacity: ".concat(o, ";\n          visibility: visible;\n          transition: opacity 1s var(--ease-fade);\n          pointer-events: auto;\n        ") : "pointer-events: none", "\n\n  span {\n    animation-name: blink;\n    animation-duration: 750ms;\n    animation-iteration-count: infinite;\n    animation-fill-mode: both;\n  }\n")
            });
            var l = t(99038);
            let PageLoader = n => {
                let {
                    isActive: e,
                    opacity: t = .8
                } = n, {
                    t: i
                } = (0, l.T)();
                return (0, o.jsx)(a, {
                    isActive: e,
                    opacity: t,
                    "data-id": "page-loader",
                    children: (0, o.jsx)("span", {
                        children: i("global.loading-label")
                    })
                })
            }
        },
        16790: function(n, e, t) {
            t.d(e, {
                y: function() {
                    return Region
                }
            });
            var o = t(85893),
                i = t(85255),
                a = t(72042);
            let Region = n => {
                let {
                    region: e
                } = n, t = 0;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(null == e ? void 0 : e.subRegions) && e.subRegions.map((n, e) => (0, o.jsx)(Region, {
                        region: n
                    }, e)), (null == e ? void 0 : e.components) && e.components.map((n, e) => {
                        let l = a.OU.includes(n.componentType);
                        return l && 1 === (t += 1) && n.data && (n.data.isFirstImageComponentShownOnPage = !0), (0, o.jsx)(i.Uk, {
                            component: n
                        }, e)
                    })]
                })
            }
        },
        49802: function(n, e, t) {
            t.d(e, {
                u: function() {
                    return DefaultFooterRegion
                }
            });
            var o = t(85893),
                i = t(85255);
            let DefaultFooterRegion = n => (0, o.jsx)(i.Uk, {
                component: null == n ? void 0 : n.footer
            })
        },
        64649: function(n, e, t) {
            t.d(e, {
                H: function() {
                    return DefaultHeaderRegion
                }
            });
            var o = t(85893),
                i = t(85255),
                a = t(61882);
            let DefaultHeaderRegion = n => ((0, a.X)(), (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(i.Uk, {
                    component: null == n ? void 0 : n.landingBanner
                }), (0, o.jsx)(i.Uk, {
                    component: null == n ? void 0 : n.header
                }), (0, o.jsx)(i.Uk, {
                    component: null == n ? void 0 : n.informativeBanner
                })]
            }))
        },
        29432: function(n, e, t) {
            t.r(e), t.d(e, {
                DefaultLayout: function() {
                    return DefaultLayout
                }
            });
            var o = t(85893),
                i = t(64649),
                a = t(80885),
                l = t(41439),
                r = t(49802),
                c = t(72042),
                u = t(32397),
                d = t(61547),
                s = t(16790);
            let DefaultLayout = n => {
                var e, t, p, f, m;
                let {
                    children: g
                } = n, {
                    UIState: v
                } = (0, a.MS)(), b = (0, u.q)();
                if (!b) return null;
                let j = (null == b ? void 0 : b.isFreeTemplatePage) ? l.PQ : l.NA,
                    h = (null == b ? void 0 : null === (e = b.landingBanner) || void 0 === e ? void 0 : e.componentType) === c.EW.BLOCK_HERO_RD,
                    x = h && !(null == b ? void 0 : null === (p = b.landingBanner) || void 0 === p ? void 0 : null === (t = p.data) || void 0 === t ? void 0 : t.fullWidth);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(d.w, {
                        isActive: v.isLoading
                    }), (0, o.jsx)(i.H, { ...b
                    }), (0, o.jsxs)(j, {
                        id: "main",
                        noMarginTop: h,
                        noPaddingTop: x,
                        children: [(0, o.jsx)(s.y, {
                            region: null == b ? void 0 : null === (f = b.regions) || void 0 === f ? void 0 : f.topRegion
                        }), g]
                    }), (0, o.jsx)(l.w, {
                        children: (0, o.jsx)(s.y, {
                            region: null == b ? void 0 : null === (m = b.regions) || void 0 === m ? void 0 : m.bottomRegion
                        })
                    }), (0, o.jsx)(r.u, { ...b
                    })]
                })
            }
        },
        41439: function(n, e, t) {
            t.d(e, {
                NA: function() {
                    return r
                },
                PQ: function() {
                    return l
                },
                w: function() {
                    return c
                }
            });
            var o = t(82729),
                i = t(51742),
                a = t(14141);

            function _templateObject() {
                let n = (0, o._)([""]);
                return _templateObject = function() {
                    return n
                }, n
            }

            function _templateObject1() {
                let n = (0, o._)(["\n  ", "\n  ", "\n"]);
                return _templateObject1 = function() {
                    return n
                }, n
            }

            function _templateObject2() {
                let n = (0, o._)(["\n  margin-top: ", ";\n"]);
                return _templateObject2 = function() {
                    return n
                }, n
            }
            let l = a.ZP.main.withConfig({
                    componentId: "sc-be169a81-0"
                })(_templateObject()),
                r = (0, a.ZP)(l).withConfig({
                    componentId: "sc-be169a81-1"
                })(_templateObject1(), n => {
                    let {
                        noMarginTop: e
                    } = n;
                    return e ? "" : "margin-top: calc(".concat((0, i.OF)("header"), " + var(--infoBannerHeight));")
                }, n => {
                    let {
                        noPaddingTop: e
                    } = n;
                    return e ? "" : "padding-top: ".concat((0, i.OF)("content"), ";")
                }),
                c = a.ZP.div.withConfig({
                    componentId: "sc-be169a81-2"
                })(_templateObject2(), (0, i.OF)("block-bottom"))
        }
    }
]);