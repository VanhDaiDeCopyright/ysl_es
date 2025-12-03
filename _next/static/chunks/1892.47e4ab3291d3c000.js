"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1892], {
        16790: function(e, t, o) {
            o.d(t, {
                y: function() {
                    return Region
                }
            });
            var i = o(85893),
                n = o(85255),
                r = o(72042);
            let Region = e => {
                let {
                    region: t
                } = e, o = 0;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(null == t ? void 0 : t.subRegions) && t.subRegions.map((e, t) => (0, i.jsx)(Region, {
                        region: e
                    }, t)), (null == t ? void 0 : t.components) && t.components.map((e, t) => {
                        let d = r.OU.includes(e.componentType);
                        return d && 1 === (o += 1) && e.data && (e.data.isFirstImageComponentShownOnPage = !0), (0, i.jsx)(n.Uk, {
                            component: e
                        }, t)
                    })]
                })
            }
        },
        29793: function(e, t, o) {
            o.d(t, {
                A: function() {
                    return useAccordion
                }
            });
            var i = o(67294),
                n = o(12594),
                r = o(65787);
            let useAccordion = e => {
                let {
                    contentRef: t,
                    persistent: o,
                    context: d,
                    isDefaultOpen: l = !1,
                    handleAccordionChange: s,
                    accordionId: u
                } = e; {
                    let {
                        routerQuery: e,
                        shallowRouteChange: a
                    } = (0, r.x)(), [p, c] = (0, i.useState)(l), [g, m] = (0, i.useState)(!1), triggerChange = () => {
                        s && s(p)
                    };
                    (0, i.useEffect)(() => {
                        let e = d ? "accordionClose".concat(d) : "accordionClose",
                            handleAccordionCloseEvent = e => {
                                let t = e.detail.id;
                                u !== t && c(!1)
                            };
                        return document.addEventListener(e, handleAccordionCloseEvent), () => {
                            document.removeEventListener(e, handleAccordionCloseEvent)
                        }
                    }, [u, d]), (0, i.useEffect)(() => {
                        if (t && t.current) {
                            if ((0, n.Aj)(t.current), p) {
                                let e = d ? "accordionClose".concat(d) : "accordionClose",
                                    o = new CustomEvent(e, {
                                        detail: {
                                            id: u
                                        }
                                    });
                                document.dispatchEvent(o), (0, n.qw)(t.current, {
                                    duration: 500
                                }), setTimeout(() => {
                                    triggerChange()
                                }, 100)
                            } else t.current.offsetHeight && (triggerChange(), (0, n.iM)(t.current, {
                                duration: 500
                            }))
                        }
                    }, [p]);
                    let y = (0, i.useCallback)(() => {
                        if (e.accordionId) {
                            m(!0);
                            return
                        }
                        m(!1)
                    }, [e.accordionId]);
                    return (0, i.useEffect)(() => {
                        if (o) {
                            if (y(), e.accordionId !== u) {
                                c(!1);
                                return
                            }
                            setTimeout(() => {
                                c(!0)
                            }, 200), setTimeout(() => {
                                var e;
                                null === (e = t.current) || void 0 === e || e.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                })
                            }, 400)
                        }
                    }, [t, o, e.accordionId, u, y]), {
                        toggleAccordion: () => {
                            if (o) {
                                let e = {
                                    accordionId: "",
                                    readMoreId: ""
                                };
                                p || (e.accordionId = u), a(e)
                            }
                            c(!p)
                        },
                        isOpen: p,
                        isLight: g
                    }
                }
            }
        },
        29432: function(e, t, o) {
            o.r(t), o.d(t, {
                DefaultLayout: function() {
                    return DefaultLayout
                }
            });
            var i = o(85893),
                n = o(64649),
                r = o(80885),
                d = o(41439),
                l = o(49802),
                s = o(72042),
                u = o(32397),
                a = o(61547),
                p = o(16790);
            let DefaultLayout = e => {
                var t, o, c, g, m;
                let {
                    children: y
                } = e, {
                    UIState: h
                } = (0, r.MS)(), b = (0, u.q)();
                if (!b) return null;
                let f = (null == b ? void 0 : b.isFreeTemplatePage) ? d.PQ : d.NA,
                    v = (null == b ? void 0 : null === (t = b.landingBanner) || void 0 === t ? void 0 : t.componentType) === s.EW.BLOCK_HERO_RD,
                    x = v && !(null == b ? void 0 : null === (c = b.landingBanner) || void 0 === c ? void 0 : null === (o = c.data) || void 0 === o ? void 0 : o.fullWidth);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.w, {
                        isActive: h.isLoading
                    }), (0, i.jsx)(n.H, { ...b
                    }), (0, i.jsxs)(f, {
                        id: "main",
                        noMarginTop: v,
                        noPaddingTop: x,
                        children: [(0, i.jsx)(p.y, {
                            region: null == b ? void 0 : null === (g = b.regions) || void 0 === g ? void 0 : g.topRegion
                        }), y]
                    }), (0, i.jsx)(d.w, {
                        children: (0, i.jsx)(p.y, {
                            region: null == b ? void 0 : null === (m = b.regions) || void 0 === m ? void 0 : m.bottomRegion
                        })
                    }), (0, i.jsx)(l.u, { ...b
                    })]
                })
            }
        },
        41439: function(e, t, o) {
            o.d(t, {
                NA: function() {
                    return l
                },
                PQ: function() {
                    return d
                },
                w: function() {
                    return s
                }
            });
            var i = o(82729),
                n = o(51742),
                r = o(14141);

            function _templateObject() {
                let e = (0, i._)([""]);
                return _templateObject = function() {
                    return e
                }, e
            }

            function _templateObject1() {
                let e = (0, i._)(["\n  ", "\n  ", "\n"]);
                return _templateObject1 = function() {
                    return e
                }, e
            }

            function _templateObject2() {
                let e = (0, i._)(["\n  margin-top: ", ";\n"]);
                return _templateObject2 = function() {
                    return e
                }, e
            }
            let d = r.ZP.main.withConfig({
                    componentId: "sc-be169a81-0"
                })(_templateObject()),
                l = (0, r.ZP)(d).withConfig({
                    componentId: "sc-be169a81-1"
                })(_templateObject1(), e => {
                    let {
                        noMarginTop: t
                    } = e;
                    return t ? "" : "margin-top: calc(".concat((0, n.OF)("header"), " + var(--infoBannerHeight));")
                }, e => {
                    let {
                        noPaddingTop: t
                    } = e;
                    return t ? "" : "padding-top: ".concat((0, n.OF)("content"), ";")
                }),
                s = r.ZP.div.withConfig({
                    componentId: "sc-be169a81-2"
                })(_templateObject2(), (0, n.OF)("block-bottom"))
        },
        84326: function(e, t, o) {
            o.r(t), o.d(t, {
                RdDefaultLayout: function() {
                    return RdDefaultLayout
                }
            });
            var i = o(85893),
                n = o(62826),
                r = o(593),
                d = o(32397),
                l = o(29432),
                s = o(77161);
            let RdDefaultLayout = e => {
                var t, o, u;
                let {
                    children: a
                } = e, p = (0, d.q)(), {
                    navOpen: c
                } = (0, r.H)(), {
                    currentNavItem: g,
                    shouldDisplaySecondaryNav: m
                } = (0, n.K)(null == p ? void 0 : null === (u = p.header) || void 0 === u ? void 0 : null === (o = u.data) || void 0 === o ? void 0 : null === (t = o.navigation) || void 0 === t ? void 0 : t.items);
                return (0, i.jsxs)(l.DefaultLayout, {
                    page: p,
                    children: [m && (0, i.jsx)(s.z, {
                        items: g.subcategories,
                        desktopNavOpen: c,
                        menuLabel: null == g ? void 0 : g.linkDisplayName
                    }), a]
                })
            };
            t.default = RdDefaultLayout
        },
        12594: function(e, t, o) {
            o.d(t, {
                Aj: function() {
                    return slideStop
                },
                iM: function() {
                    return slideUp
                },
                qw: function() {
                    return slideDown
                }
            });
            /*!
             * slide-anim
             * https://github.com/yomotsu/slide-anim
             * (c) 2017 @yomotsu
             * Released under the MIT License.
             */
            let i = [],
                n = {
                    add(e, t, o, n) {
                        this.remove(e), i.push({
                            el: e,
                            defaultStyle: t,
                            timeoutId: o,
                            onCancelled: n
                        })
                    },
                    remove(e) {
                        let t = n.findIndex(e);
                        if (-1 === t) return;
                        let o = i[t];
                        clearTimeout(o.timeoutId), o.onCancelled(), i.splice(t, 1)
                    },
                    find: e => i[n.findIndex(e)],
                    findIndex(e) {
                        let t = -1;
                        return i.some((o, i) => o.el === e && (t = i, !0)), t
                    }
                },
                r = "cubic-bezier( 0.19, 1, 0.22, 1 )";

            function slideDown(e, t = {}) {
                return new Promise(o => {
                    if (-1 !== n.findIndex(e)) return;
                    let i = isVisible(e),
                        d = "number" == typeof t.endHeight,
                        l = t.display || "block",
                        s = t.duration || 400,
                        u = t.onCancelled || function() {},
                        a = e.getAttribute("style") || "",
                        p = window.getComputedStyle(e),
                        c = function(e, t = "block") {
                            let o = e.getAttribute("style") || "",
                                i = window.getComputedStyle(e);
                            e.style.visibility = "hidden", e.style.display = t;
                            let n = pxToNumber(i.getPropertyValue("width"));
                            e.style.position = "absolute", e.style.width = `${n}px`, e.style.height = "", e.style.minHeight = "", e.style.paddingTop = "", e.style.paddingBottom = "", e.style.borderTopWidth = "", e.style.borderBottomWidth = "";
                            let r = pxToNumber(i.getPropertyValue("min-height")),
                                d = pxToNumber(i.getPropertyValue("padding-top")),
                                l = pxToNumber(i.getPropertyValue("padding-bottom")),
                                s = pxToNumber(i.getPropertyValue("border-top-width")),
                                u = pxToNumber(i.getPropertyValue("border-bottom-width")),
                                a = e.scrollHeight;
                            return e.setAttribute("style", o), {
                                height: a,
                                minHeight: r,
                                paddingTop: d,
                                paddingBottom: l,
                                borderTop: s,
                                borderBottom: u
                            }
                        }(e, l),
                        g = /border-box/.test(p.getPropertyValue("box-sizing")),
                        m = c.height,
                        y = c.minHeight,
                        h = c.paddingTop,
                        b = c.paddingBottom,
                        f = c.borderTop,
                        v = c.borderBottom,
                        x = `${s}ms`,
                        T = `height ${x} ${r},min-height ${x} ${r},padding ${x} ${r},border-width ${x} ${r}`,
                        w = i ? p.height : "0px",
                        $ = i ? p.minHeight : "0px",
                        C = i ? p.paddingTop : "0px",
                        j = i ? p.paddingBottom : "0px",
                        B = i ? p.borderTopWidth : "0px",
                        P = i ? p.borderBottomWidth : "0px",
                        A = d ? `${t.endHeight}px` : g ? `${m+f+v}px` : `${m-h-b}px`,
                        W = `${y}px`,
                        H = `${h}px`,
                        I = `${b}px`,
                        N = `${f}px`,
                        _ = `${v}px`;
                    if (w === A && C === H && j === I && B === N && P === _) {
                        o();
                        return
                    }
                    requestAnimationFrame(() => {
                        e.style.height = w, e.style.minHeight = $, e.style.paddingTop = C, e.style.paddingBottom = j, e.style.borderTopWidth = B, e.style.borderBottomWidth = P, e.style.display = l, e.style.overflow = "hidden", e.style.visibility = "visible", e.style.transition = T, e.style.webkitTransition = T, requestAnimationFrame(() => {
                            e.style.height = A, e.style.minHeight = W, e.style.paddingTop = H, e.style.paddingBottom = I, e.style.borderTopWidth = N, e.style.borderBottomWidth = _
                        })
                    });
                    let O = setTimeout(() => {
                        resetStyle(e), e.style.display = l, d && (e.style.height = `${t.endHeight}px`, e.style.overflow = "hidden"), n.remove(e), o()
                    }, s);
                    n.add(e, a, O, u)
                })
            }

            function slideUp(e, t = {}) {
                return new Promise(o => {
                    if (-1 !== n.findIndex(e)) return;
                    let i = isVisible(e),
                        d = t.display || "block",
                        l = t.duration || 400,
                        s = t.onCancelled || function() {};
                    if (!i) {
                        o();
                        return
                    }
                    let u = e.getAttribute("style") || "",
                        a = window.getComputedStyle(e),
                        p = /border-box/.test(a.getPropertyValue("box-sizing")),
                        c = pxToNumber(a.getPropertyValue("min-height")),
                        g = pxToNumber(a.getPropertyValue("padding-top")),
                        m = pxToNumber(a.getPropertyValue("padding-bottom")),
                        y = pxToNumber(a.getPropertyValue("border-top-width")),
                        h = pxToNumber(a.getPropertyValue("border-bottom-width")),
                        b = e.scrollHeight,
                        f = l + "ms",
                        v = `height ${f} ${r},padding ${f} ${r},border-width ${f} ${r}`,
                        x = p ? `${b+y+h}px` : `${b-g-m}px`,
                        T = `${c}px`,
                        w = `${g}px`,
                        $ = `${m}px`,
                        C = `${y}px`,
                        j = `${h}px`;
                    requestAnimationFrame(() => {
                        e.style.height = x, e.style.minHeight = T, e.style.paddingTop = w, e.style.paddingBottom = $, e.style.borderTopWidth = C, e.style.borderBottomWidth = j, e.style.display = d, e.style.overflow = "hidden", e.style.transition = v, e.style.webkitTransition = v, requestAnimationFrame(() => {
                            e.style.height = "0", e.style.minHeight = "0", e.style.paddingTop = "0", e.style.paddingBottom = "0", e.style.borderTopWidth = "0", e.style.borderBottomWidth = "0"
                        })
                    });
                    let B = setTimeout(() => {
                        resetStyle(e), e.style.display = "none", n.remove(e), o()
                    }, l);
                    n.add(e, u, B, s)
                })
            }

            function slideStop(e) {
                let t = n.find(e);
                if (!t) return;
                let o = window.getComputedStyle(e),
                    i = o.height,
                    r = o.paddingTop,
                    d = o.paddingBottom,
                    l = o.borderTopWidth,
                    s = o.borderBottomWidth;
                resetStyle(e), e.style.height = i, e.style.paddingTop = r, e.style.paddingBottom = d, e.style.borderTopWidth = l, e.style.borderBottomWidth = s, e.style.overflow = "hidden", n.remove(e)
            }

            function isVisible(e) {
                return 0 !== e.offsetHeight
            }

            function resetStyle(e) {
                e.style.visibility = "", e.style.height = "", e.style.minHeight = "", e.style.paddingTop = "", e.style.paddingBottom = "", e.style.borderTopWidth = "", e.style.borderBottomWidth = "", e.style.overflow = "", e.style.transition = "", e.style.webkitTransition = ""
            }

            function pxToNumber(e) {
                return +e.replace(/px/, "")
            }
        }
    }
]);