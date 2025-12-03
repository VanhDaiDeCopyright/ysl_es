"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1201], {
        79652: function(e, t, i) {
            i.d(t, {
                j: function() {
                    return BlockEditoSingleItemMyAccount
                }
            });
            var n = i(85893),
                l = i(67294),
                c = i(72042),
                r = i(50595),
                o = i(9863),
                u = i(92815),
                s = i(69278),
                d = i(25431),
                x = i(284),
                j = i(28220);
            let BlockEditoMyAccountSingleImage = e => {
                    let {
                        item: t
                    } = e, i = (0, l.useRef)(null), {
                        isVisible: u
                    } = (0, r.Or)(i), {
                        image: a,
                        title: h,
                        subtitle: k,
                        subtitleColor: E,
                        linkItem: A
                    } = t;
                    return (0, n.jsxs)("div", {
                        ref: i,
                        children: [h && (0, n.jsx)(x.pm, {
                            children: h
                        }), a && (0, n.jsx)(d.f, {
                            image: a,
                            fit: "cover",
                            hasPriority: u
                        }), k && (0, n.jsx)(x.by, {
                            children: (0, n.jsx)(o.RichText, {
                                textAlign: s.C1.CENTER,
                                textColor: E,
                                ...k
                            })
                        }), A && (0, n.jsx)(j.r, {
                            href: A.linkUrl || "",
                            variant: c.rx.AS_BUTTON_SECONDARY,
                            children: A.linkDisplayName
                        })]
                    })
                },
                BlockEditoMyAccountSingleVideo = e => {
                    let {
                        item: t
                    } = e, {
                        title: i,
                        video: l,
                        subtitle: r,
                        subtitleColor: d,
                        linkItem: a,
                        display: h
                    } = t;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [i && (0, n.jsx)(x.pm, {
                            children: i
                        }), l && (0, n.jsx)(u.W, {
                            video: l,
                            type: h || c.De.SMALL
                        }), r && (0, n.jsx)(x.by, {
                            children: (0, n.jsx)(o.RichText, {
                                textAlign: s.C1.CENTER,
                                textColor: d,
                                ...r
                            })
                        }), a && (0, n.jsx)(j.r, {
                            href: a.linkUrl || "",
                            variant: c.rx.AS_BUTTON_SECONDARY,
                            children: a.linkDisplayName
                        })]
                    })
                },
                BlockEditoSingleItemMyAccount = e => {
                    let {
                        item: t
                    } = e, {
                        video: i
                    } = t;
                    return i ? (0, n.jsx)(BlockEditoMyAccountSingleVideo, {
                        item: t
                    }) : (0, n.jsx)(BlockEditoMyAccountSingleImage, {
                        item: t
                    })
                }
        },
        71201: function(e, t, i) {
            i.r(t), i.d(t, {
                BlockEditoDoubleMyAccount: function() {
                    return BlockEditoDoubleMyAccount
                }
            });
            var n = i(85893),
                l = i(284),
                c = i(79652);
            let BlockEditoDoubleMyAccount = e => {
                let {
                    items: t,
                    id: i
                } = e;
                return (0, n.jsx)(l.WY, {
                    id: i,
                    children: t.map((e, t) => {
                        let {
                            item: i
                        } = e;
                        return (0, n.jsx)(l.qB, {
                            children: (0, n.jsx)(c.j, {
                                item: i
                            })
                        }, t)
                    })
                })
            }
        }
    }
]);