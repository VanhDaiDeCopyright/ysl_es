"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1331], {
        31331: function(e, i, n) {
            n.r(i), n.d(i, {
                RDHeader: function() {
                    return RDHeader
                }
            });
            var r = n(85893),
                t = n(67294),
                o = n(11163),
                l = n(54483),
                a = n.n(l),
                s = n(593),
                d = n(21488),
                c = n(80885),
                u = n(62826),
                v = n(17902),
                m = n(52268);
            let g = m.hJ,
                getNavigationItemYPosition = (e, i) => {
                    let n = i.filter((i, n) => i.separator && n < e),
                        r = e * m.xR,
                        t = n.length * m.hJ;
                    return r + t + g
                };
            var p = n(24131),
                h = n(99038),
                f = n(12690),
                k = n(39785),
                b = n(93616),
                y = n(84489);
            let RDNavigationPrimary = e => {
                let {
                    colorMode: i,
                    hideLogo: n,
                    items: o,
                    navOpen: l,
                    triggerOpenNav: a,
                    triggerCloseNav: s
                } = e, {
                    isDesktop: c
                } = (0, d.F)(), m = (0, t.useRef)(null), g = (0, p.L)(m), {
                    currentNavItem: x
                } = (0, u.K)(o), {
                    scrollUp: N,
                    scrolled: S
                } = (0, v.Y)(80), {
                    t: M
                } = (0, h.T)(), j = x ? o.findIndex(e => e.linkUrl === x.linkUrl) : 0, I = (0, t.useMemo)(() => getNavigationItemYPosition(j, o), [j, o]), U = (0, t.useMemo)(() => o.map((e, i) => j > i ? getNavigationItemYPosition(i, o) : I), [j, o, I]), handleLeaveState = () => s();
                (0, t.useEffect)(() => {
                    c && g !== l && (g && !l ? a() : !g && l && s())
                }, [g]);
                let C = {
                    scrolled: !!(S && x && !N),
                    navOpen: l,
                    colorMode: i,
                    mobileNavOpen: l && !c
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        ref: m,
                        onMouseEnter: () => !n && c && a(),
                        onMouseLeave: handleLeaveState,
                        onClick: handleLeaveState,
                        children: [(0, r.jsx)(k.O5, {
                            href: y.HB,
                            "aria-label": M("accessibility.header-rive-droite-logo"),
                            hide: n,
                            ...C,
                            children: (0, r.jsx)(b.T, {
                                primary: !0
                            })
                        }), x && (x.linkUrl ? (0, r.jsx)(k.FP, {
                            href: x.linkUrl,
                            $yPosition: I,
                            ...C,
                            children: x.linkDisplayName
                        }) : (0, r.jsx)(k.w4, {
                            $yPosition: I,
                            ...C,
                            children: x.linkDisplayName
                        })), (0, r.jsx)(k.wv, {
                            isOpen: l,
                            children: o.map((e, i) => e.linkDisplayName && (0, r.jsx)("li", {
                                style: {
                                    "--yPosition": "-".concat(U[i], "px")
                                },
                                children: (0, r.jsx)(f.g, {
                                    id: e.linkId || "item-".concat(i),
                                    url: e.linkUrl || "",
                                    label: e.linkDisplayName,
                                    separator: e.separator,
                                    mobileSeparator: e.mobileSeparator,
                                    isSecondary: !1,
                                    isHidden: j === i
                                })
                            }, "navigation-primary-item-".concat(i)))
                        })]
                    }), (0, r.jsx)(k.Ai, {
                        isOpen: l
                    })]
                })
            };
            var x = n(82729),
                N = n(14141);

            function _templateObject() {
                let e = (0, x._)(["\n  width: 100%;\n  z-index: ", ";\n  top: 0;\n  transition: opacity 0.35s var(--ease-fade);\n  visibility: visible;\n  opacity: 1;\n\n  ", "\n"]);
                return _templateObject = function() {
                    return e
                }, e
            }
            let S = N.ZP.header.withConfig({
                componentId: "sc-efdc7cd9-0"
            })(_templateObject(), e => {
                let {
                    theme: i
                } = e;
                return i.zIndex.header
            }, e => e.hidden ? "\n          & {\n            transition: visibility 0s 0.351s, opacity 0.35s var(--ease-fade);\n            opacity: 0;\n            visibility: hidden;\n          }\n        " : "");
            var M = n(17469),
                j = n(11486);
            let RDHeader = e => {
                let {
                    menu: i,
                    regAndCountriesList: n
                } = e, {
                    isMobile: t
                } = (0, d.F)(), l = (0, o.useRouter)(), {
                    UIState: u
                } = (0, c.MS)(), {
                    triggerCloseNav: v,
                    triggerOpenNav: m,
                    navOpen: g
                } = (0, s.H)(), {
                    isDesktop: p
                } = (0, d.F)(), h = l.pathname === y.HB;
                return (0, r.jsxs)(S, {
                    hidden: !u.isHeaderVisible,
                    children: [(0, r.jsx)(RDNavigationPrimary, {
                        hideLogo: !!(h || g && t),
                        colorMode: u.rdHeaderColorMode,
                        items: i.items,
                        navOpen: g,
                        triggerCloseNav: v,
                        triggerOpenNav: m
                    }), (0, r.jsx)(a(), {
                        active: g && !p,
                        children: (0, r.jsxs)("div", {
                            children: [!p && (0, r.jsx)(M.d, {
                                navOpen: g,
                                triggerCloseNav: v,
                                items: i.items,
                                secondaryItems: i.generalLinks,
                                regAndCountriesList: n
                            }), (0, r.jsx)(j.y, {
                                colorMode: u.rdHeaderColorMode,
                                items: i.generalLinks,
                                navOpen: g,
                                triggerOpenNav: m
                            })]
                        })
                    })]
                })
            }
        },
        12690: function(e, i, n) {
            n.d(i, {
                B: function() {
                    return RDNavigationItemButton
                },
                g: function() {
                    return RDNavigationItem
                }
            });
            var r = n(85893),
                t = n(86042),
                o = n(68810),
                l = n(80885),
                a = n(99038),
                s = n(55953);
            let RDNavigationItemButton = e => {
                    let {
                        id: i,
                        label: n,
                        separator: o = !1,
                        mobileSeparator: s = !1,
                        isSecondary: d = !1,
                        isActive: c = !1,
                        handleClickState: u
                    } = e, {
                        UIState: v
                    } = (0, l.MS)(), {
                        t: m
                    } = (0, a.T)();
                    return (0, r.jsx)(t.FU, {
                        separator: o,
                        mobileSeparator: s,
                        isSecondary: d,
                        isActive: c,
                        onClick: () => {
                            u instanceof Function && u(c ? "" : i)
                        },
                        "aria-expanded": c,
                        "aria-label": m(c ? "accessibility.close" : "accessibility.open"),
                        "aria-controls": i,
                        $colorMode: v.rdHeaderColorMode,
                        children: n
                    })
                },
                RDNavigationItem = e => {
                    let {
                        label: i,
                        url: n,
                        separator: a = !1,
                        mobileSeparator: d = !1,
                        isSecondary: c = !1,
                        isActive: u = !1,
                        isHidden: v = !1,
                        menuLabel: m
                    } = e, {
                        setGtmMenuCategories: g
                    } = (0, s.K)(), {
                        UIState: p
                    } = (0, l.MS)();
                    return n ? v ? (0, r.jsx)(t.I1, {
                        separator: a,
                        mobileSeparator: d,
                        "aria-hidden": "true",
                        $colorMode: p.rdHeaderColorMode,
                        children: i
                    }) : (0, r.jsx)(t.r, {
                        linkUrl: n,
                        separator: a,
                        mobileSeparator: d,
                        isSecondary: c,
                        isActive: u,
                        onClick: () => {
                            let e = m || i,
                                n = m ? i : "";
                            (0, o.CV)(e, n), g(e, n)
                        },
                        $colorMode: c ? p.rdHeaderColorMode : "",
                        children: i
                    }) : (0, r.jsx)(t.zd, {
                        separator: a,
                        mobileSeparator: d,
                        "aria-hidden": "true",
                        isSecondary: c,
                        $colorMode: c ? p.rdHeaderColorMode : "",
                        children: i
                    })
                }
        },
        62826: function(e, i, n) {
            n.d(i, {
                K: function() {
                    return useNavigationItems
                },
                h: function() {
                    return useNavigationCurrentItem
                }
            });
            var r = n(67294),
                t = n(11163),
                o = n(93803),
                l = n(84489);
            let useIsActiveLink = () => {
                    let {
                        asPath: e,
                        locale: i
                    } = (0, t.useRouter)(), n = "/".concat(i).concat(e), o = (0, r.useCallback)(i => !!i && (n === i || e === i), [e, n]);
                    return o
                },
                useNavigationItems = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        {
                            product: i
                        } = (0, o.$)(),
                        {
                            asPath: n
                        } = (0, t.useRouter)(),
                        a = useIsActiveLink(),
                        s = (0, r.useMemo)(() => null == e ? void 0 : e.find(e => !!a(e.linkUrl) || ("subcategories" in e ? e.subcategories.find(e => !!("linkUrl" in e && a(e.linkUrl)) || ("subcategories" in e ? e.subcategories.find(e => a(e.linkUrl)) : void 0)) : void 0)), [e, a]),
                        d = (0, r.useMemo)(() => !!s && !!s.subcategories && 0 !== s.subcategories.length, [s]),
                        c = (0, r.useMemo)(() => s || ((null == i ? void 0 : i.isRd) || n.includes("".concat(l.m3, "/")) ? null == e ? void 0 : e.find(e => {
                            var i;
                            return e.linkUrl && (e.linkUrl.includes("".concat(l.m3, "/")) || (null === (i = e.subcategories) || void 0 === i ? void 0 : i.find(e => {
                                var i;
                                return "linkUrl" in e && (null === (i = e.linkUrl) || void 0 === i ? void 0 : i.includes("".concat(l.m3, "/")))
                            })))
                        }) : n.includes(l.qd) ? null == e ? void 0 : e.find(e => e.linkUrl && e.linkUrl.includes(l.qd)) : s), [s, null == i ? void 0 : i.isRd, n, e]);
                    return {
                        currentNavItem: c,
                        shouldDisplaySecondaryNav: d
                    }
                },
                useNavigationCurrentItem = e => {
                    let i = useIsActiveLink(),
                        n = (0, r.useMemo)(() => "subcategories" in e && e.subcategories.find(e => i(e.linkUrl)), [e, i]),
                        t = i(e.linkUrl);
                    return {
                        isActiveNavItem: t,
                        hasActiveSubcategory: n,
                        isActiveLink: i
                    }
                }
        },
        17902: function(e, i, n) {
            n.d(i, {
                Y: function() {
                    return useScrollUp
                }
            });
            var r = n(67294);
            let useScrollUp = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    i = arguments.length > 1 ? arguments[1] : void 0,
                    [n, t] = (0, r.useState)(!1),
                    [o, l] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    let n = window.scrollY,
                        r = !1,
                        updateScrollDir = () => {
                            let o = window.scrollY,
                                a = o + window.innerHeight,
                                s = document.body.scrollHeight - e <= a;
                            if (s || 0 > Math.abs(o - n)) {
                                r = !1;
                                return
                            }
                            if (t(o < n), l(o > e), null == i ? void 0 : i.current) {
                                var d;
                                let n = (null == i ? void 0 : null === (d = i.current) || void 0 === d ? void 0 : d.getBoundingClientRect().top) || 0;
                                l(n < e)
                            }
                            n = o > 0 ? o : 0, r = !1
                        },
                        onScroll = () => {
                            r || (window.requestAnimationFrame(updateScrollDir), r = !0)
                        };
                    return window.addEventListener("scroll", onScroll, {
                        passive: !0
                    }), () => window.removeEventListener("scroll", onScroll)
                }, [i, n, e]), {
                    scrollUp: n,
                    scrolled: o
                }
            }
        }
    }
]);