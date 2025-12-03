"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6994], {
        93121: function(n, t, e) {
            e.d(t, {
                b: function() {
                    return NavigationAccordion
                }
            });
            var o = e(85893),
                i = e(14141),
                r = e(51742),
                a = e(67763),
                c = e(12816);
            let l = i.ZP.ul.withConfig({
                    componentId: "sc-b51c990c-0"
                })(n => {
                    let {
                        theme: t
                    } = n;
                    return "\n    @media ".concat((0, r.bp)("lg", t), " {\n      padding-top: ").concat((0, r.kF)(16), ";\n    }\n  ")
                }),
                s = i.ZP.li.withConfig({
                    componentId: "sc-b51c990c-1"
                })(n => {
                    let {
                        $mobileSeparator: t
                    } = n;
                    return "\n    margin-bottom: ".concat(t ? (0, r.kF)(16) : "0", ";\n")
                }),
                styledAccordionLabelStyles = n => {
                    let {
                        hasOneOpened: t,
                        $mobileSeparator: e
                    } = n;
                    return "\n  width: 100%;\n  display: flex;\n  color: ".concat(t ? (0, r.xl)("tertiary") : (0, r.xl)("primary"), ";\n  margin-bottom: ").concat(e ? (0, r.kF)(16) : "0", ";\n")
                },
                d = (0, i.ZP)(a.aK).withConfig({
                    componentId: "sc-b51c990c-2"
                })(n => {
                    let {
                        theme: t,
                        hasOneOpened: e,
                        $mobileSeparator: o,
                        $hover: i = !0
                    } = n;
                    return "\n  ".concat(styledAccordionLabelStyles({
                        hasOneOpened: e,
                        $mobileSeparator: o
                    }), ";\n  text-decoration: none;\n  transition: color 0.25s linear;\n\n  ").concat((0, r.bP)(2, -1), "\n\n  ").concat(i ? "@media ".concat((0, r.bp)("hover", t), " {\n    &:hover {\n      color: ").concat((0, c.RJ)(t.id) ? (0, r.xl)("tertiary") : (0, r.xl)("primary"), ";\n    }\n  }") : "", "\n\n")
                });
            i.ZP.span.withConfig({
                componentId: "sc-b51c990c-3"
            })(n => {
                let {
                    hasOneOpened: t,
                    $mobileSeparator: e
                } = n;
                return "\n  ".concat(styledAccordionLabelStyles({
                    hasOneOpened: t,
                    $mobileSeparator: e
                }), ";\n")
            });
            let styledNavAccordionItemStyles = n => "\n  ".concat((0, r.vm)("ui-1", n), "\n  display: inline-flex;\n  width: 100%;\n  padding: ").concat((0, r.kF)(4), " 0;\n  color: ").concat((0, r.xl)("primary"), ";\n"),
                m = i.ZP.span.withConfig({
                    componentId: "sc-b51c990c-4"
                })(n => {
                    let {
                        theme: t
                    } = n;
                    return "\n  ".concat(styledNavAccordionItemStyles(t), ";\n")
                }),
                p = i.ZP.a.withConfig({
                    componentId: "sc-b51c990c-5"
                })(n => {
                    let {
                        theme: t
                    } = n;
                    return "\n  ".concat(styledNavAccordionItemStyles(t), ";\n  text-decoration: none;\n  transition: color 0.25s linear;\n  ").concat((0, r.bP)(2, -1), "\n\n  @media ").concat((0, r.bp)("hover", t), " {\n    &:hover {\n      color: ").concat((0, r.xl)("tertiary"), ";\n    }\n  }\n")
                });
            var u = e(28220),
                g = e(64903);
            let NavigationAccordion = n => {
                let {
                    hasOneOpened: t,
                    hasChanged: e,
                    label: i,
                    subcategories: r,
                    linkUrl: a,
                    $mobileSeparator: c,
                    onLinkClick: b,
                    id: h
                } = n;
                return r && 0 !== r.length ? (0, o.jsx)(g.Accordion, {
                    persistent: !1,
                    label: i,
                    context: "navigation",
                    hasOneOpened: t,
                    hasChanged: n => {
                        e && e(n ? i : "")
                    },
                    id: i,
                    accordionId: h,
                    mobileSeparator: c,
                    children: (0, o.jsx)(l, {
                        children: null == r ? void 0 : r.map((n, t) => (0, o.jsxs)(s, {
                            id: n.menuCategoryUniqueId,
                            $mobileSeparator: n.mobileSeparator,
                            onClick: () => b && b({
                                menuCategory: i,
                                menuSubCategory: n.linkDisplayName
                            }),
                            children: [!n.linkUrl && (0, o.jsx)(m, {
                                children: n.linkDisplayName
                            }), n.linkUrl && (0, o.jsx)(u.r, {
                                href: n.linkUrl,
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, o.jsx)(p, {
                                    children: n.linkDisplayName
                                })
                            })]
                        }, "links-".concat(t)))
                    })
                }) : a ? (0, o.jsx)(u.r, {
                    href: a,
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, o.jsx)(d, {
                        as: "a",
                        hasOneOpened: t,
                        $mobileSeparator: c,
                        onClick: () => b && b({
                            menuCategory: i
                        }),
                        "data-cs-override-id": h,
                        children: i
                    })
                }) : (0, o.jsx)(d, {
                    as: "span",
                    hasOneOpened: t,
                    $hover: !1,
                    onClick: () => b && b({
                        menuCategory: i
                    }),
                    "data-cs-override-id": h,
                    children: i
                })
            }
        },
        76994: function(n, t, e) {
            e.r(t), e.d(t, {
                RDNavigationMobileItem: function() {
                    return RDNavigationMobileItem
                }
            });
            var o = e(85893),
                i = e(67294),
                r = e(82729),
                a = e(14141),
                c = e(96411),
                l = e(86042);

            function _templateObject() {
                let n = (0, r._)(["\n  ", ";\n  ", ";\n"]);
                return _templateObject = function() {
                    return n
                }, n
            }

            function _templateObject1() {
                let n = (0, r._)(["\n  ", ";\n  ", ";\n"]);
                return _templateObject1 = function() {
                    return n
                }, n
            }

            function _templateObject2() {
                let n = (0, r._)(["\n  ", ";\n"]);
                return _templateObject2 = function() {
                    return n
                }, n
            }
            let s = (0, a.ZP)(c.mw).withConfig({
                    componentId: "sc-6459d20e-0"
                })(_templateObject(), n => {
                    let {
                        $separator: t,
                        $mobileSeparator: e,
                        theme: o
                    } = n;
                    return (0, l.NK)({
                        separator: t,
                        mobileSeparator: e,
                        marginBottomSeparator: 28,
                        marginBottom: 8,
                        theme: o
                    })
                }, n => {
                    let {
                        theme: t
                    } = n;
                    return (0, l.L3)({
                        theme: t
                    })
                }),
                d = a.ZP.button.withConfig({
                    componentId: "sc-6459d20e-1"
                })(_templateObject1(), n => {
                    let {
                        $separator: t,
                        $mobileSeparator: e,
                        theme: o
                    } = n;
                    return (0, l.NK)({
                        separator: t,
                        mobileSeparator: e,
                        marginBottomSeparator: 28,
                        marginBottom: 8,
                        theme: o
                    })
                }, n => {
                    let {
                        theme: t
                    } = n;
                    return (0, l.L3)({
                        theme: t
                    })
                }),
                m = a.ZP.span.withConfig({
                    componentId: "sc-6459d20e-2"
                })(_templateObject2(), n => {
                    let {
                        $separator: t,
                        $mobileSeparator: e,
                        theme: o
                    } = n;
                    return (0, l.NK)({
                        separator: t,
                        mobileSeparator: e,
                        marginBottomSeparator: 28,
                        marginBottom: 8,
                        theme: o
                    })
                });
            var p = e(96824),
                u = e(51742),
                g = e(52268);

            function RDNavigationAccordions_styles_templateObject() {
                let n = (0, r._)(["\n  ", ";\n  text-align: left;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  margin-bottom: ", ";\n  margin-left: ", ";\n  ", ";\n"]);
                return RDNavigationAccordions_styles_templateObject = function() {
                    return n
                }, n
            }

            function RDNavigationAccordions_styles_templateObject1() {
                let n = (0, r._)(["\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  z-index: ", ";\n  transition: visibility 0s 0.41s;\n\n  ", "\n"]);
                return RDNavigationAccordions_styles_templateObject1 = function() {
                    return n
                }, n
            }

            function RDNavigationAccordions_styles_templateObject2() {
                let n = (0, r._)(["\n  height: 100%;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 0 var(--outer-gutter);\n"]);
                return RDNavigationAccordions_styles_templateObject2 = function() {
                    return n
                }, n
            }
            let b = a.ZP.button.withConfig({
                    componentId: "sc-97c7855-0"
                })(RDNavigationAccordions_styles_templateObject(), n => {
                    let {
                        theme: t
                    } = n;
                    return (0, u.vm)("heading-1", t)
                }, (0, u.kF)(40), (0, u.kF)(-8), (0, u.bP)()),
                h = a.ZP.div.withConfig({
                    componentId: "sc-97c7855-1"
                })(RDNavigationAccordions_styles_templateObject1(), n => {
                    let {
                        theme: t
                    } = n;
                    return t.zIndex.nav
                }, n => {
                    let {
                        expanded: t
                    } = n;
                    return t ? "\n          visibility: visible;\n          transition: none;\n        " : "\n          overflow: hidden;\n          visibility: hidden;\n        "
                }),
                v = a.ZP.div.withConfig({
                    componentId: "sc-97c7855-2"
                })(RDNavigationAccordions_styles_templateObject2()),
                f = a.ZP.div.withConfig({
                    componentId: "sc-97c7855-3"
                })(n => {
                    let {
                        theme: t
                    } = n;
                    return "\n  padding-top: ".concat((0, u.kF)(20), ";\n  padding-bottom: ").concat((0, u.kF)(20), ";\n\n  @media ").concat((0, u.bp)("md+", t), " {\n    padding-top: ").concat(g.gv, ";\n    padding-bottom: ").concat((0, u.kF)(120), ";\n    margin-left: ").concat((0, u.zD)(1, "var(--inner-gutter)"), ";\n    margin-right: ").concat((0, u.zD)(1, "var(--inner-gutter)"), ";\n  }\n")
                });
            var y = e(34896),
                j = e(93121);
            let x = (0, i.forwardRef)((n, t) => {
                let {
                    id: e,
                    label: r,
                    items: a = [],
                    isActive: c = !1,
                    onClickBack: l
                } = n, [s, d] = (0, i.useState)("");
                return (0, o.jsx)(h, {
                    id: e,
                    expanded: c,
                    ref: t,
                    children: (0, o.jsx)(v, {
                        children: (0, o.jsxs)(f, {
                            children: [(0, o.jsxs)(b, {
                                onClick: l,
                                children: [(0, o.jsx)(y.J, {
                                    name: p.Wm.RDArrowLeft
                                }), r]
                            }), a.map((n, t) => (0, o.jsx)("div", {
                                children: (0, o.jsx)(j.b, {
                                    label: n.linkDisplayName || "",
                                    linkUrl: n.linkUrl || "",
                                    subcategories: n.subcategories,
                                    $mobileSeparator: n.mobileSeparator,
                                    hasOneOpened: "" !== s,
                                    hasChanged: n => {
                                        d(n)
                                    }
                                }, "accordion-".concat(t))
                            }, "navigation-accordions-item-".concat(t)))]
                        })
                    })
                })
            });
            x.displayName = "RDNavigationAccordions";
            let RDNavigationMobileItem = n => {
                let {
                    handleClickState: t,
                    isActive: e = !1,
                    id: r,
                    url: a,
                    categories: c,
                    label: l,
                    separator: p = !1,
                    mobileSeparator: u = !1
                } = n, g = (0, i.useRef)(null), b = (0, i.useRef)(null);
                return c && c.length > 0 ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(d, {
                        onClick: () => {
                            t && t(e ? "" : r, g)
                        },
                        $separator: p,
                        $mobileSeparator: u,
                        ref: b,
                        children: l
                    }), (0, o.jsx)(x, {
                        isActive: e,
                        id: "menumobile-".concat(r),
                        label: l,
                        items: c,
                        onClickBack: () => {
                            if (t) {
                                var n;
                                t(e ? "" : r, g), null == b || null === (n = b.current) || void 0 === n || n.focus()
                            }
                        },
                        ref: g
                    })]
                }) : a ? (0, o.jsx)(s, {
                    href: a,
                    $mobileSeparator: u,
                    children: l
                }) : (0, o.jsx)(m, {
                    $separator: p,
                    $mobileSeparator: u,
                    children: l
                })
            }
        }
    }
]);