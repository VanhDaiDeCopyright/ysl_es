"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7821], {
        61547: function(n, e, t) {
            t.d(e, {
                w: function() {
                    return PageLoader
                }
            });
            var i = t(85893),
                o = t(14141);
            let r = o.ZP.div.withConfig({
                componentId: "sc-a0021517-0"
            })(n => {
                let {
                    isActive: e,
                    theme: t,
                    opacity: i
                } = n;
                return "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #efefef;\n  opacity: 0;\n  z-index: ".concat(t.zIndex.loader, ";\n  display: flex;\n  transition: visibility 0s 1.01s, opacity 1s var(--ease-fade);\n  visibility: hidden;\n  justify-content: center;\n  align-items: center;\n\n  ").concat(e ? "\n          opacity: ".concat(i, ";\n          visibility: visible;\n          transition: opacity 1s var(--ease-fade);\n          pointer-events: auto;\n        ") : "pointer-events: none", "\n\n  span {\n    animation-name: blink;\n    animation-duration: 750ms;\n    animation-iteration-count: infinite;\n    animation-fill-mode: both;\n  }\n")
            });
            var a = t(99038);
            let PageLoader = n => {
                let {
                    isActive: e,
                    opacity: t = .8
                } = n, {
                    t: o
                } = (0, a.T)();
                return (0, i.jsx)(r, {
                    isActive: e,
                    opacity: t,
                    "data-id": "page-loader",
                    children: (0, i.jsx)("span", {
                        children: o("global.loading-label")
                    })
                })
            }
        },
        87149: function(n, e, t) {
            t.d(e, {
                W: function() {
                    return o
                },
                j: function() {
                    return r
                }
            });
            var i = t(51742);
            let o = "\n  mix-blend-mode: difference;\n  color: ".concat((0, i.xl)("inverse"), ";    \n"),
                r = "\n  background-clip: text;\n  background-color: white;\n  -webkit-text-fill-color: transparent;     \n"
        },
        86042: function(n, e, t) {
            t.d(e, {
                FU: function() {
                    return m
                },
                I1: function() {
                    return f
                },
                Km: function() {
                    return u
                },
                L3: function() {
                    return StyledRDNavigationItemHover
                },
                NK: function() {
                    return StyledRDNavigationItemStyle
                },
                r: function() {
                    return d
                },
                zd: function() {
                    return v
                }
            });
            var i = t(14141),
                o = t(72042),
                r = t(51742),
                a = t(71630),
                l = t(28220),
                c = t(87149),
                s = t(52268);
            let StyledRDNavigationItemStyle = n => {
                    let {
                        separator: e = !1,
                        mobileSeparator: t = !1,
                        marginBottomSeparator: i = s.hJ,
                        marginBottom: a = 0,
                        $colorMode: l,
                        theme: d
                    } = n;
                    return "\n  ".concat((0, r.vm)("heading-1", d), ";\n  text-decoration: none;\n  display: flex;\n  text-align: left;\n  align-items: center;\n  ").concat((0, r.bP)(), ";\n  justify-content: flex-start;\n  transition: all 0.25s var(--ease-fade), background-color 0s;\n  white-space: wrap;\n  margin-bottom: ").concat(t ? (0, r.kF)(i) : (0, r.kF)(a), ";\n\n  @media ").concat((0, r.bp)("lg+", d), "  {\n    margin-bottom: ").concat(e ? (0, r.kF)(i) : (0, r.kF)(a), ";\n\n    ").concat(l === o.IX.DIFFERENCE ? c.j : "", ";\n  }\n")
                },
                StyledRDNavigationItemHover = n => {
                    let {
                        isSecondary: e = !1,
                        isActive: t = !1,
                        theme: i
                    } = n;
                    return e && !t ? "\n      opacity: .45;\n      @media ".concat((0, r.bp)("hover", i), " {\n        &:hover {\n          opacity: 1;\n        }\n      }") : t ? void 0 : "\n      opacity: 1;\n      @media ".concat((0, r.bp)("hover", i), " {\n        &:hover {\n          opacity: .45;\n        }\n      }")
                },
                d = (0, i.ZP)(a.ContentfulLink).withConfig({
                    componentId: "sc-d94fd615-0"
                })(n => {
                    let {
                        hover: e = !0,
                        separator: t,
                        mobileSeparator: i,
                        isSecondary: o,
                        isActive: r,
                        $colorMode: a,
                        theme: l
                    } = n;
                    return "\n  color: inherit !important;\n  ".concat(StyledRDNavigationItemStyle({
                        separator: t,
                        mobileSeparator: i,
                        theme: l,
                        $colorMode: a
                    }), ";\n  ").concat(e ? StyledRDNavigationItemHover({
                        isSecondary: o,
                        isActive: r,
                        theme: l
                    }) : "", ";\n")
                }),
                u = (0, i.ZP)(l.r).withConfig({
                    componentId: "sc-d94fd615-1"
                })(n => {
                    let {
                        isActive: e,
                        isSecondary: t,
                        separator: i,
                        mobileSeparator: o,
                        theme: r,
                        $colorMode: a
                    } = n;
                    return "\n  ".concat(StyledRDNavigationItemStyle({
                        separator: i,
                        mobileSeparator: o,
                        theme: r,
                        $colorMode: a
                    }), ";\n  ").concat(StyledRDNavigationItemHover({
                        isSecondary: t,
                        isActive: e,
                        theme: r
                    }), ";\n")
                }),
                m = i.ZP.button.withConfig({
                    componentId: "sc-d94fd615-2"
                })(n => {
                    let {
                        isActive: e,
                        isSecondary: t,
                        separator: i,
                        mobileSeparator: o,
                        theme: r,
                        $colorMode: a
                    } = n;
                    return "\n  ".concat(StyledRDNavigationItemStyle({
                        separator: i,
                        mobileSeparator: o,
                        theme: r,
                        $colorMode: a
                    }), ";\n  ").concat(StyledRDNavigationItemHover({
                        isSecondary: t,
                        isActive: e,
                        theme: r
                    }), ";\n")
                }),
                f = i.ZP.span.withConfig({
                    componentId: "sc-d94fd615-3"
                })(n => {
                    let {
                        separator: e,
                        mobileSeparator: t,
                        theme: i,
                        $colorMode: o
                    } = n;
                    return "\n  ".concat(StyledRDNavigationItemStyle({
                        separator: e,
                        mobileSeparator: t,
                        theme: i,
                        $colorMode: o
                    }), ";\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n")
                }),
                v = i.ZP.span.withConfig({
                    componentId: "sc-d94fd615-4"
                })(n => {
                    let {
                        isSecondary: e,
                        separator: t,
                        mobileSeparator: i,
                        theme: o,
                        $colorMode: r
                    } = n;
                    return "\n  ".concat(StyledRDNavigationItemStyle({
                        separator: t,
                        mobileSeparator: i,
                        theme: o,
                        $colorMode: r
                    }), ";\n  opacity: ").concat(e ? .45 : 1, "\n")
                })
        },
        12690: function(n, e, t) {
            t.d(e, {
                B: function() {
                    return RDNavigationItemButton
                },
                g: function() {
                    return RDNavigationItem
                }
            });
            var i = t(85893),
                o = t(86042),
                r = t(68810),
                a = t(80885),
                l = t(99038),
                c = t(55953);
            let RDNavigationItemButton = n => {
                    let {
                        id: e,
                        label: t,
                        separator: r = !1,
                        mobileSeparator: c = !1,
                        isSecondary: s = !1,
                        isActive: d = !1,
                        handleClickState: u
                    } = n, {
                        UIState: m
                    } = (0, a.MS)(), {
                        t: f
                    } = (0, l.T)();
                    return (0, i.jsx)(o.FU, {
                        separator: r,
                        mobileSeparator: c,
                        isSecondary: s,
                        isActive: d,
                        onClick: () => {
                            u instanceof Function && u(d ? "" : e)
                        },
                        "aria-expanded": d,
                        "aria-label": f(d ? "accessibility.close" : "accessibility.open"),
                        "aria-controls": e,
                        $colorMode: m.rdHeaderColorMode,
                        children: t
                    })
                },
                RDNavigationItem = n => {
                    let {
                        label: e,
                        url: t,
                        separator: l = !1,
                        mobileSeparator: s = !1,
                        isSecondary: d = !1,
                        isActive: u = !1,
                        isHidden: m = !1,
                        menuLabel: f
                    } = n, {
                        setGtmMenuCategories: v
                    } = (0, c.K)(), {
                        UIState: p
                    } = (0, a.MS)();
                    return t ? m ? (0, i.jsx)(o.I1, {
                        separator: l,
                        mobileSeparator: s,
                        "aria-hidden": "true",
                        $colorMode: p.rdHeaderColorMode,
                        children: e
                    }) : (0, i.jsx)(o.r, {
                        linkUrl: t,
                        separator: l,
                        mobileSeparator: s,
                        isSecondary: d,
                        isActive: u,
                        onClick: () => {
                            let n = f || e,
                                t = f ? e : "";
                            (0, r.CV)(n, t), v(n, t)
                        },
                        $colorMode: d ? p.rdHeaderColorMode : "",
                        children: e
                    }) : (0, i.jsx)(o.zd, {
                        separator: l,
                        mobileSeparator: s,
                        "aria-hidden": "true",
                        isSecondary: d,
                        $colorMode: d ? p.rdHeaderColorMode : "",
                        children: e
                    })
                }
        },
        98744: function(n, e, t) {
            t.d(e, {
                G8: function() {
                    return v
                },
                Ti: function() {
                    return m
                },
                Vp: function() {
                    return u
                },
                ki: function() {
                    return p
                },
                y7: function() {
                    return f
                }
            });
            var i = t(82729),
                o = t(14141),
                r = t(51742),
                a = t(59425),
                l = t(87149),
                c = t(28220),
                s = t(90257),
                d = t(52268);

            function _templateObject() {
                let n = (0, i._)(["\n  ", "\n"]);
                return _templateObject = function() {
                    return n
                }, n
            }

            function _templateObject1() {
                let n = (0, i._)(["\n  display: none;\n  overflow: hidden;\n\n  li {\n    margin-left: ", ";\n\n    &:last-child {\n      margin-bottom: ", ";\n    }\n  }\n"]);
                return _templateObject1 = function() {
                    return n
                }, n
            }

            function _templateObject2() {
                let n = (0, i._)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n\n  ", "\n"]);
                return _templateObject2 = function() {
                    return n
                }, n
            }
            let u = o.ZP.nav.withConfig({
                    componentId: "sc-48c7aebd-0"
                })(n => {
                    let {
                        theme: e,
                        hidden: t
                    } = n;
                    return "\n  --top-position: calc(".concat((0, r.OF)("header"), " + ").concat((0, r.OF)("content"), ");\n  display: block;\n  padding-bottom: ").concat((0, r.OF)("inner"), ";\n  width: 100%;\n\n  @media ").concat((0, r.bp)("lg+", e), " {\n    ").concat(l.W, ";\n    position: fixed;\n    padding-bottom: 0;\n    top: var(--top-position);\n    left: var(--outer-gutter);\n    z-index: ").concat(e.zIndex.subNav, ";\n    display: flex;\n    flex-direction: column;\n    transform: translateY(0);\n    opacity: 1;\n    transition: all 0.25s var(--ease-fade), transform 0.3s var(--ease-fade),\n      opacity 0.3s var(--ease-fade);\n    visibility: visible;\n    width: auto;\n\n    ").concat(t ? "\n      transform: translateY(30px);\n      transition: visibility 0s 0.31s, transform 0.3s var(--ease-fade), opacity 0.3s var(--ease-fade);\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n    " : "", ";\n  }\n")
                }),
                m = o.ZP.ul.withConfig({
                    componentId: "sc-48c7aebd-1"
                })(_templateObject(), n => {
                    let {
                        theme: e,
                        $isRd: t
                    } = n;
                    return "\n    @media ".concat((0, r.bp)("md-", e), " {\n    display: block;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    overflow-x: auto;\n    /* So scrollbars are not hiding the text */\n    padding-bottom: ").concat((0, r.kF)(4), ";\n    margin-bottom: ").concat((0, r.kF)(-4), ";\n\n     ").concat(t ? (0, r.vj)() : (0, r.Rw)(e), "\n\n    li {\n      padding: 0 ").concat((0, r.kF)(12), ";\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n\n      &:first-child {\n        margin-left: calc(var(--outer-gutter, 0) - ").concat((0, r.kF)(12), ");\n      }\n\n      &:last-child {\n        margin-right: calc(var(--outer-gutter, 0) - ").concat((0, r.kF)(12), ");\n      }\n    }\n  }\n    ")
                }),
                f = o.ZP.ul.withConfig({
                    componentId: "sc-48c7aebd-2"
                })(_templateObject1(), (0, r.kF)(32), (0, r.kF)(d.hJ)),
                v = (0, o.ZP)(c.r).withConfig({
                    componentId: "sc-48c7aebd-3"
                })(n => {
                    let {
                        theme: e
                    } = n;
                    return "\n   display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  ".concat((0, r.vm)("ui-2", e), ";\n  color: inherit;\n  ").concat((0, r.bP)(), ";\n  ").concat(s.mw, ";\n  ").concat((0, a.x)(e), "\n")
                }),
                p = o.ZP.span.withConfig({
                    componentId: "sc-48c7aebd-4"
                })(_templateObject2(), (0, r.xl)("tertiary"), n => {
                    let {
                        theme: e
                    } = n;
                    return (0, r.vm)("ui-2", e)
                })
        },
        77161: function(n, e, t) {
            t.d(e, {
                z: function() {
                    return NavigationSecondary
                }
            });
            var i = t(85893),
                o = t(98744),
                r = t(88470),
                a = t(62826),
                l = t(51742),
                c = t(21488),
                s = t(67294),
                d = t(11163),
                u = t(29793),
                m = t(12690);
            let NavigationSecondaryItemToggle = n => {
                let {
                    index: e,
                    item: t,
                    menuLabel: r
                } = n, {
                    asPath: l
                } = (0, d.useRouter)(), c = (0, s.useRef)(null), {
                    toggleAccordion: f,
                    isOpen: v
                } = (0, u.A)({
                    contentRef: c,
                    context: "subnavigation",
                    persistent: !1,
                    accordionId: t.linkUrl || ""
                }), {
                    hasActiveSubcategory: p,
                    isActiveLink: g
                } = (0, a.h)(t);
                return ((0, s.useEffect)(() => {
                    (!p && v || p && !v) && f()
                }, [p, l]), t.linkDisplayName && t.subcategories && 0 !== t.subcategories.length) ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m.B, {
                        id: t.linkUrl || "",
                        url: t.linkUrl || "",
                        label: t.linkDisplayName,
                        separator: t.separator,
                        mobileSeparator: t.mobileSeparator,
                        isSecondary: !t.selected,
                        isActive: v || g(t.linkUrl),
                        handleClickState: f
                    }), (0, i.jsx)(o.y7, {
                        ref: c,
                        "aria-labelledby": t.linkUrl || "",
                        children: t.subcategories.map((n, o) => n.linkDisplayName ? (0, i.jsx)("li", {
                            children: (0, i.jsx)(m.g, {
                                id: n.linkId || "item-".concat(o),
                                url: n.linkUrl || "",
                                label: n.linkDisplayName,
                                separator: n.separator,
                                mobileSeparator: n.mobileSeparator,
                                isActive: g(n.linkUrl),
                                isSecondary: !0,
                                menuLabel: r
                            })
                        }, "navigation-secondary-item-".concat(t.linkId).concat(e).concat(n.linkId).concat(o)) : null)
                    })]
                }) : null
            };
            var f = t(41965);
            let NavigationSecondaryItem = n => {
                let {
                    index: e,
                    item: t,
                    menuLabel: r
                } = n, {
                    isDesktop: s
                } = (0, c.F)(), {
                    isActiveNavItem: d,
                    hasActiveSubcategory: u
                } = (0, a.h)(t);
                return t.linkDisplayName ? s ? (0, i.jsx)(i.Fragment, {
                    children: t.subcategories && t.subcategories.length > 0 ? (0, i.jsx)(NavigationSecondaryItemToggle, {
                        index: e,
                        item: t,
                        menuLabel: r
                    }) : (0, i.jsx)(m.g, {
                        id: t.linkId || "item-".concat(e),
                        url: t.linkUrl || "",
                        label: t.linkDisplayName,
                        separator: t.separator,
                        mobileSeparator: t.mobileSeparator,
                        isActive: d || !!u,
                        isSecondary: !0,
                        menuLabel: r
                    })
                }) : t.linkUrl ? (0, i.jsx)(f.p, {
                    href: t.linkUrl || "",
                    customCss: d || u ? "" : "color: ".concat((0, l.xl)("tertiary"), ";"),
                    children: t.linkDisplayName
                }) : (0, i.jsx)(o.ki, {
                    children: t.linkDisplayName
                }) : null
            };
            var v = t(14141),
                p = t(12816);
            let NavigationSecondary = n => {
                let {
                    items: e,
                    desktopNavOpen: t = !1,
                    menuLabel: a
                } = n, {
                    isAtTheTop: l,
                    scrollDirValue: c
                } = (0, r.y)(), s = (0, v.Fg)(), d = (0, p.RJ)(s.id);
                return (0, i.jsx)(o.Vp, {
                    hidden: !l && c === r.S.DOWN || t,
                    children: (0, i.jsx)(o.Ti, {
                        $isRd: d,
                        children: e.map((n, e) => n.linkDisplayName && (0, i.jsx)("li", {
                            children: (0, i.jsx)(NavigationSecondaryItem, {
                                index: e,
                                item: n,
                                menuLabel: a
                            })
                        }, "navigation-secondary-item-".concat(n.linkId).concat(e)))
                    })
                })
            }
        },
        62826: function(n, e, t) {
            t.d(e, {
                K: function() {
                    return useNavigationItems
                },
                h: function() {
                    return useNavigationCurrentItem
                }
            });
            var i = t(67294),
                o = t(11163),
                r = t(93803),
                a = t(84489);
            let useIsActiveLink = () => {
                    let {
                        asPath: n,
                        locale: e
                    } = (0, o.useRouter)(), t = "/".concat(e).concat(n), r = (0, i.useCallback)(e => !!e && (t === e || n === e), [n, t]);
                    return r
                },
                useNavigationItems = function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        {
                            product: e
                        } = (0, r.$)(),
                        {
                            asPath: t
                        } = (0, o.useRouter)(),
                        l = useIsActiveLink(),
                        c = (0, i.useMemo)(() => null == n ? void 0 : n.find(n => !!l(n.linkUrl) || ("subcategories" in n ? n.subcategories.find(n => !!("linkUrl" in n && l(n.linkUrl)) || ("subcategories" in n ? n.subcategories.find(n => l(n.linkUrl)) : void 0)) : void 0)), [n, l]),
                        s = (0, i.useMemo)(() => !!c && !!c.subcategories && 0 !== c.subcategories.length, [c]),
                        d = (0, i.useMemo)(() => c || ((null == e ? void 0 : e.isRd) || t.includes("".concat(a.m3, "/")) ? null == n ? void 0 : n.find(n => {
                            var e;
                            return n.linkUrl && (n.linkUrl.includes("".concat(a.m3, "/")) || (null === (e = n.subcategories) || void 0 === e ? void 0 : e.find(n => {
                                var e;
                                return "linkUrl" in n && (null === (e = n.linkUrl) || void 0 === e ? void 0 : e.includes("".concat(a.m3, "/")))
                            })))
                        }) : t.includes(a.qd) ? null == n ? void 0 : n.find(n => n.linkUrl && n.linkUrl.includes(a.qd)) : c), [c, null == e ? void 0 : e.isRd, t, n]);
                    return {
                        currentNavItem: d,
                        shouldDisplaySecondaryNav: s
                    }
                },
                useNavigationCurrentItem = n => {
                    let e = useIsActiveLink(),
                        t = (0, i.useMemo)(() => "subcategories" in n && n.subcategories.find(n => e(n.linkUrl)), [n, e]),
                        o = e(n.linkUrl);
                    return {
                        isActiveNavItem: o,
                        hasActiveSubcategory: t,
                        isActiveLink: e
                    }
                }
        },
        593: function(n, e, t) {
            t.d(e, {
                H: function() {
                    return useNavigation
                }
            });
            var i = t(67294),
                o = t(18760),
                r = t(46536);
            let useNavigation = () => {
                let [n, e] = (0, i.useState)(!1), {
                    disableScroll: t,
                    enableScroll: a
                } = (0, r.i)(), triggerCloseNav = n => {
                    e(!1), n && n()
                };
                return (0, o.u)("Escape", () => {
                    n && triggerCloseNav()
                }, [n]), (0, i.useEffect)(() => (n ? t() : a(), () => {
                    a()
                }), [n, t, a]), {
                    triggerCloseNav,
                    triggerOpenNav: n => {
                        e(!0), n && n()
                    },
                    navOpen: n
                }
            }
        },
        49802: function(n, e, t) {
            t.d(e, {
                u: function() {
                    return DefaultFooterRegion
                }
            });
            var i = t(85893),
                o = t(85255);
            let DefaultFooterRegion = n => (0, i.jsx)(o.Uk, {
                component: null == n ? void 0 : n.footer
            })
        },
        64649: function(n, e, t) {
            t.d(e, {
                H: function() {
                    return DefaultHeaderRegion
                }
            });
            var i = t(85893),
                o = t(85255),
                r = t(61882);
            let DefaultHeaderRegion = n => ((0, r.X)(), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.Uk, {
                    component: null == n ? void 0 : n.landingBanner
                }), (0, i.jsx)(o.Uk, {
                    component: null == n ? void 0 : n.header
                }), (0, i.jsx)(o.Uk, {
                    component: null == n ? void 0 : n.informativeBanner
                })]
            }))
        },
        88470: function(n, e, t) {
            t.d(e, {
                S: function() {
                    return o
                },
                y: function() {
                    return useScrollDirections
                }
            });
            var i, o, r = t(67294);
            (i = o || (o = {})).UP = "scroll-up", i.DOWN = "scroll-down";
            let isScrolledAboveThreshold = (n, e) => Math.abs(e - n) > 100,
                newScrollDirection = (n, e) => e > n ? "scroll-down" : "scroll-up",
                useScrollDirections = () => {
                    let [n, e] = (0, r.useState)("scroll-up"), [t, i] = (0, r.useState)(""), [o, a] = (0, r.useState)(!0);
                    return (0, r.useEffect)(() => {
                        let n = window.scrollY,
                            scrollDirectionProcess = () => {
                                let t = window.scrollY;
                                e(newScrollDirection(n, t)), a(0 === t), isScrolledAboveThreshold(n, t) && (i(newScrollDirection(n, t)), n = t > 0 ? t : 0)
                            },
                            onScroll = () => {
                                window.requestAnimationFrame(scrollDirectionProcess)
                            };
                        return window.addEventListener("scroll", onScroll), () => window.removeEventListener("scroll", onScroll)
                    }, [t, o]), {
                        scrollDirValue: n,
                        scrollDirWithThreshold: t,
                        isAtTheTop: o
                    }
                }
        }
    }
]);