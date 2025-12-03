"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4221], {
        79652: function(e, i, l) {
            l.d(i, {
                j: function() {
                    return BlockEditoSingleItemMyAccount
                }
            });
            var t = l(85893),
                n = l(67294),
                o = l(72042),
                r = l(50595),
                c = l(9863),
                u = l(92815),
                s = l(69278),
                d = l(25431),
                x = l(284),
                a = l(28220);
            let BlockEditoMyAccountSingleImage = e => {
                    let {
                        item: i
                    } = e, l = (0, n.useRef)(null), {
                        isVisible: u
                    } = (0, r.Or)(l), {
                        image: h,
                        title: j,
                        subtitle: k,
                        subtitleColor: v,
                        linkItem: E
                    } = i;
                    return (0, t.jsxs)("div", {
                        ref: l,
                        children: [j && (0, t.jsx)(x.pm, {
                            children: j
                        }), h && (0, t.jsx)(d.f, {
                            image: h,
                            fit: "cover",
                            hasPriority: u
                        }), k && (0, t.jsx)(x.by, {
                            children: (0, t.jsx)(c.RichText, {
                                textAlign: s.C1.CENTER,
                                textColor: v,
                                ...k
                            })
                        }), E && (0, t.jsx)(a.r, {
                            href: E.linkUrl || "",
                            variant: o.rx.AS_BUTTON_SECONDARY,
                            children: E.linkDisplayName
                        })]
                    })
                },
                BlockEditoMyAccountSingleVideo = e => {
                    let {
                        item: i
                    } = e, {
                        title: l,
                        video: n,
                        subtitle: r,
                        subtitleColor: d,
                        linkItem: h,
                        display: j
                    } = i;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [l && (0, t.jsx)(x.pm, {
                            children: l
                        }), n && (0, t.jsx)(u.W, {
                            video: n,
                            type: j || o.De.SMALL
                        }), r && (0, t.jsx)(x.by, {
                            children: (0, t.jsx)(c.RichText, {
                                textAlign: s.C1.CENTER,
                                textColor: d,
                                ...r
                            })
                        }), h && (0, t.jsx)(a.r, {
                            href: h.linkUrl || "",
                            variant: o.rx.AS_BUTTON_SECONDARY,
                            children: h.linkDisplayName
                        })]
                    })
                },
                BlockEditoSingleItemMyAccount = e => {
                    let {
                        item: i
                    } = e, {
                        video: l
                    } = i;
                    return l ? (0, t.jsx)(BlockEditoMyAccountSingleVideo, {
                        item: i
                    }) : (0, t.jsx)(BlockEditoMyAccountSingleImage, {
                        item: i
                    })
                }
        },
        54221: function(e, i, l) {
            l.r(i), l.d(i, {
                BlockEditoSingleMyAccount: function() {
                    return BlockEditoSingleMyAccount
                }
            });
            var t = l(85893),
                n = l(79652),
                o = l(73018),
                r = l(69683);
            let BlockEditoSingleMyAccount = e => {
                var i;
                let {
                    id: l,
                    item: c
                } = e, {
                    data: u
                } = (0, r.O)(), s = null == u ? void 0 : null === (i = u.customerGroups) || void 0 === i ? void 0 : i.filter(e => {
                    var i;
                    return null == c ? void 0 : null === (i = c.customerGroups) || void 0 === i ? void 0 : i.find(i => (null == i ? void 0 : i.toLowerCase()) === (null == e ? void 0 : e.toLowerCase()))
                });
                return c.customerGroups && s && 0 === s.length ? null : (0, t.jsx)(o.Do, {
                    id: l,
                    children: (0, t.jsx)(o.us, {
                        children: (0, t.jsx)(n.j, {
                            item: c
                        })
                    })
                })
            }
        }
    }
]);