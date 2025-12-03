"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8309], {
        76026: function(n, t, e) {
            e.d(t, {
                Db: function() {
                    return l
                },
                H7: function() {
                    return d
                },
                OF: function() {
                    return b
                },
                Sn: function() {
                    return u
                },
                UN: function() {
                    return s
                }
            });
            var r = e(82729),
                o = e(14141),
                c = e(51742),
                i = e(96411);

            function _templateObject() {
                let n = (0, r._)(["\n  display: inline-flex;\n  padding: ", " ", "; /* 36px height */\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  ", "\n  ", "\n\n  ", ";\n"]);
                return _templateObject = function() {
                    return n
                }, n
            }

            function _templateObject1() {
                let n = (0, r._)(["\n        cursor: default;\n        pointer-events: none;\n        animation: ", " 1s infinite;\n      "]);
                return _templateObject1 = function() {
                    return n
                }, n
            }

            function _templateObject2() {
                let n = (0, r._)(["\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:active {\n    background: ", ";\n  }\n\n  ", "\n"]);
                return _templateObject2 = function() {
                    return n
                }, n
            }

            function _templateObject3() {
                let n = (0, r._)(["\n  border: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  padding: ", " ", ";\n\n  ", "\n"]);
                return _templateObject3 = function() {
                    return n
                }, n
            }

            function _templateObject4() {
                let n = (0, r._)(["\n  ", "\n"]);
                return _templateObject4 = function() {
                    return n
                }, n
            }

            function _templateObject5() {
                let n = (0, r._)(["\n  padding: 0;\n  ", "\n\n  ", "\n"]);
                return _templateObject5 = function() {
                    return n
                }, n
            }
            let a = (0, o.F4)({
                    "0%": {
                        color: "".concat((0, c.xl)("inverse"))
                    },
                    "50%": {
                        color: "".concat((0, c.xl)("primary"))
                    },
                    "100%": {
                        color: "".concat((0, c.xl)("inverse"))
                    }
                }),
                u = o.ZP.button.withConfig({
                    componentId: "sc-991f323b-0"
                })(_templateObject(), (0, c.kF)(10), (0, c.kF)(20), n => {
                    let {
                        theme: t
                    } = n;
                    return (0, c.vm)("body-1", t)
                }, (0, c.bP)(), n => {
                    let {
                        fullWidth: t
                    } = n;
                    return t && "width: 100%;"
                }),
                l = (0, o.ZP)(u).withConfig({
                    componentId: "sc-991f323b-1"
                })(_templateObject2(), (0, c.qz)("inverse"), (0, c.xl)("inverse"), (0, c.qz)("secondary"), (0, c.qz)("tertiary"), n => {
                    let {
                        isDisabled: t,
                        isDisabledWithLoading: e
                    } = n;
                    return t ? "\n          cursor: default;\n          pointer-events: none;\n          color: ".concat((0, c.xl)("secondary"), ";\n          border: 1px solid ").concat((0, c.Oe)("secondary"), ";\n          background: ").concat((0, c.qz)("light"), ";\n        ") : e ? (0, o.iv)(_templateObject1(), a) : void 0
                }),
                d = (0, o.ZP)(u).withConfig({
                    componentId: "sc-991f323b-2"
                })(_templateObject3(), (0, c.Oe)("primary"), (0, c.qz)("primary"), (0, c.xl)("primary"), (0, c.kF)(9), (0, c.kF)(19), n => n.isDisabled ? "\n          cursor: default;\n          pointer-events: none;\n          color: ".concat((0, c.xl)("secondary"), ";\n          border-color: ").concat((0, c.Oe)("secondary"), ";\n          background: ").concat((0, c.qz)("light"), ";\n        ") : ""),
                s = o.ZP.button.withConfig({
                    componentId: "sc-991f323b-3"
                })(_templateObject4(), n => (0, i.RP)(n)),
                b = (0, o.ZP)(u).withConfig({
                    componentId: "sc-991f323b-4"
                })(_templateObject5(), (0, c.eC)(), n => {
                    let {
                        theme: t
                    } = n;
                    return "\n    @media ".concat((0, c.bp)("hover", t), " {\n      &:hover {\n        color: inherit;\n      }\n    }\n  ")
                })
        },
        88309: function(n, t, e) {
            e.r(t), e.d(t, {
                Button: function() {
                    return d
                }
            });
            var r = e(85893),
                o = e(76026),
                c = e(67294),
                i = e(34896),
                a = e(96411),
                u = e(72042);
            let l = {
                    [u.Wu.PRIMARY]: o.Db,
                    [u.Wu.SECONDARY]: o.H7,
                    [u.Wu.AS_LINK]: o.UN,
                    [u.Wu.UNDERLINED]: o.OF
                },
                d = (0, c.forwardRef)((n, t) => {
                    let {
                        children: e,
                        type: o = "button",
                        variant: c = u.Wu.SECONDARY,
                        fullWidth: d = !1,
                        disabled: s = !1,
                        disabledWithLoading: b,
                        onClick: p,
                        icon: f,
                        isIconFirst: m = !1,
                        leftIconMargin: _ = 0,
                        onMouseEnter: O,
                        onMouseLeave: h,
                        className: j,
                        id: g,
                        dataQaTag: v,
                        ...x
                    } = n, k = l[c], y = f ? (0, r.jsxs)(a.BK, {
                        isIconFirst: m,
                        leftIconMargin: _,
                        children: [(0, r.jsx)("span", {
                            children: e
                        }), (0, r.jsx)(i.J, {
                            name: f,
                            hidden: !0
                        })]
                    }) : e;
                    return (0, r.jsx)(k, {
                        ref: t,
                        isDisabled: s,
                        isDisabledWithLoading: b,
                        "aria-disabled": s,
                        type: o || "button",
                        onClick: n => {
                            p instanceof Function && !s && (n.preventDefault(), p(n))
                        },
                        onMouseEnter: O,
                        onMouseLeave: h,
                        className: j,
                        id: g,
                        fullWidth: d,
                        "data-cs-override-id": g,
                        "data-qa": v,
                        ...c === u.Wu.AS_LINK && x,
                        children: y
                    })
                });
            d.displayName = "Button"
        }
    }
]);