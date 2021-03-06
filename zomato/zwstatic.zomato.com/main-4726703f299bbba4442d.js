(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [179], {
        LPu3: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r, i = n("h4VS"),
                o = n("q1tI"),
                a = n("17x9"),
                s = n.n(a),
                u = n("SNoJ"),
                l = n("vOnD"),
                c = n("7EGn"),
                d = n("I3Ur"),
                m = function(e) {
                    var t = e.pageInfo,
                        n = void 0 === t ? {} : t,
                        r = n.name,
                        i = void 0 === r ? "" : r,
                        a = n.isMobile,
                        s = void 0 === a ? 0 : a,
                        u = (0, c.default)(d.Z, i, {}),
                        l = u.Component,
                        m = u.Fallback;
                    return i && l ? !!s && "restaurant" === i ? o.createElement(f, null, o.createElement(l, {
                        fallback: m && o.createElement(m, {
                            isMobile: s
                        })
                    })) : o.createElement(l, {
                        fallback: m && o.createElement(m, {
                            isMobile: s
                        })
                    }) : null
                },
                f = l.default.div(r || (r = (0, i.Z)(["\n  min-height: 100vh;\n"])));
            m.propTypes = {
                pageInfo: s().objectOf(s().any)
            }, m.defaultProps = {
                pageInfo: {}
            };
            const h = (0, u.$j)((function(e) {
                return {
                    pageInfo: (0, c.default)(e, "pages.current", {})
                }
            }))(m)
        },
        NWYR: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n("q1tI"),
                i = n("17x9"),
                o = n.n(i),
                a = n("rid2"),
                s = n("SNoJ"),
                u = n("7EGn"),
                l = n("VAjR"),
                c = function(e) {
                    var t = e.title,
                        n = e.description,
                        i = e.keywords,
                        o = e.ogTitle,
                        s = e.ogUrl,
                        u = e.ogPageUrl,
                        l = e.ogType,
                        c = e.ogDescription,
                        d = e.isNoIndex,
                        m = e.hrefLangInfo,
                        f = e.isNutritionHomePage;
                    return r.createElement(a.q, null, r.createElement("meta", {
                        charSet: "utf-8"
                    }), r.createElement("title", null, t), d && r.createElement("meta", {
                        name: "robots",
                        content: "noindex"
                    }), r.createElement("meta", {
                        name: "robots",
                        content: "NOODP,NOYDIR"
                    }), r.createElement("meta", {
                        name: "description",
                        content: n
                    }), r.createElement("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }), i && r.createElement("meta", {
                        name: "keywords",
                        content: i
                    }), o && r.createElement("meta", {
                        property: "og:title",
                        content: o
                    }), s && r.createElement("meta", {
                        property: "og:image",
                        content: s
                    }), u && r.createElement("meta", {
                        property: "og:url",
                        content: u
                    }), l && r.createElement("meta", {
                        property: "og:type",
                        content: l
                    }), c && r.createElement("meta", {
                        property: "og:description",
                        content: c
                    }), f && r.createElement("meta", {
                        name: "google-site-verification",
                        content: "0i6V18eMleMynN33TAheRgP-pquxiK8v7TjH1qRG9iY"
                    }), m && m.map((function(e) {
                        return r.createElement("link", {
                            rel: "alternate",
                            hrefLang: e.hreflang,
                            href: e.link
                        })
                    })))
                };
            c.propTypes = {
                title: o().string,
                description: o().string,
                keywords: o().string,
                ogTitle: o().string,
                ogDescription: o().string,
                ogUrl: o().string,
                ogPageUrl: o().string,
                ogType: o().string,
                isNoIndex: o().bool,
                hrefLangInfo: o().arrayOf(o().object),
                isNutritionHomePage: o().bool
            }, c.defaultProps = {
                title: "Zomato",
                description: "Better food for more people",
                keywords: "",
                ogTitle: "",
                ogDescription: "",
                ogUrl: "",
                ogPageUrl: "",
                ogType: "",
                isNoIndex: !1,
                hrefLangInfo: [],
                isNutritionHomePage: !1
            };
            const d = (0, s.$j)((function(e) {
                return {
                    title: (0, u.default)(e, "pages.current.pageTitle", ""),
                    description: (0, u.default)(e, "pages.current.pageDescription", ""),
                    keywords: (0, u.default)(e, "pages.current.pageKeywords", ""),
                    ogTitle: (0, u.default)(e, "pages.current.ogTitle", ""),
                    ogDescription: (0, u.default)(e, "pages.current.ogDescription", ""),
                    ogUrl: (0, u.default)(e, "pages.current.ogUrl", ""),
                    ogPageUrl: (0, u.default)(e, "pages.current.ogPageUrl", ""),
                    ogType: (0, u.default)(e, "pages.current.ogType", ""),
                    isNoIndex: (0, u.default)(e, "pages.current.isNoIndex", !1),
                    hrefLangInfo: (0, u.default)(e, "hrefLangInfo", []),
                    isNutritionHomePage: (0, u.default)(e, "pages.current.name", "") === l.KT
                }
            }))(c)
        },
        "0cYI": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r, i = n("SNoJ"),
                o = n("7EGn"),
                a = n("6x74"),
                s = n("h4VS"),
                u = n("pU3V"),
                l = n("q1tI"),
                c = n("PlcA"),
                d = n("vOnD"),
                m = n("wRyO"),
                f = n("LSsp"),
                h = n("czsM"),
                p = n("17x9"),
                v = n.n(p),
                g = n("ifKl"),
                E = n("V3te"),
                _ = n("hfmy"),
                b = n("uBBW"),
                y = function(e) {
                    var t = e.isOnline,
                        n = e.extraBottomPadding,
                        r = e.setStatusOnline,
                        i = e.setStatusOffline,
                        o = (0, l.useState)(!1),
                        s = (0, u.Z)(o, 2),
                        d = s[0],
                        m = s[1];
                    return (0, l.useEffect)((function() {
                        var e;
                        return -1 !== t ? (m(!0), t && (e = setTimeout((function() {
                                return m(!1)
                            }), 3e3))) : "undefined" != typeof window && window.navigator && !window.navigator.onLine && i(),
                            function() {
                                return e ? clearTimeout(e) : g.default
                            }
                    }), [t]), (0, l.useEffect)((function() {
                        return "undefined" != typeof window && (window.addEventListener("online", r), window.addEventListener("offline", i)),
                            function() {
                                "undefined" != typeof window && (window.removeEventListener("online", r), window.removeEventListener("offline", i))
                            }
                    }), []), l.createElement(b.x2, {
                        reducer: {
                            networkState: a.ZP,
                            root: !0
                        }
                    }, l.createElement(c.default, null, -1 !== t && l.createElement(I, {
                        visible: d,
                        isOnline: t,
                        extraBottomPadding: n
                    }, t ? "Back online" : "No internet connectivity. Please check your network")))
                };
            y.propTypes = {
                isOnline: v().bool.isRequired,
                extraBottomPadding: v().bool,
                setStatusOnline: v().func.isRequired,
                setStatusOffline: v().func.isRequired
            }, y.defaultProps = {
                extraBottomPadding: !1
            };
            var I = d.default.div(r || (r = (0, s.Z)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  font-size: 1.2rem;\n  padding: 0.3rem 1rem;\n  padding-bottom: ", ";\n  text-align: center;\n  background: ", ";\n  opacity: ", ";\n  color: ", ";\n  z-index: 100;\n  transform: translateY(", ");\n  transition: transform 0.25s ease, visibility 0.25s ease, opacity 0.25s ease;\n"])), (function(e) {
                return e.extraBottomPadding ? "".concat((0, _.u)(E.vh), "rem") : "0.3rem"
            }), (function(e) {
                return e.isOnline ? h.default.z600 : m.default.z700
            }), (function(e) {
                return e.visible ? 1 : 0
            }), f.default, (function(e) {
                return e.visible ? 0 : "3rem"
            }));
            const w = y;
            var A = {
                setStatusOnline: a.su,
                setStatusOffline: a.nH
            };
            const T = (0, i.$j)((function(e) {
                var t = (0, o.default)(e, "deviceSpecificInfo.styles.extraBottomPadding", !1);
                return {
                    isOnline: (0, o.default)(e, "networkState.isOnline", -1),
                    extraBottomPadding: t
                }
            }), A)(w)
        },
        "6x74": (e, t, n) => {
            "use strict";
            n.d(t, {
                su: () => o,
                nH: () => a,
                ZP: () => s
            });
            var r = n("VTBJ"),
                i = {
                    isOnline: -1
                },
                o = function() {
                    return {
                        type: "SET_STATUS_ONLINE"
                    }
                },
                a = function() {
                    return {
                        type: "SET_STATUS_OFFLINE"
                    }
                };
            const s = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.type,
                    o = void 0 === n ? "" : n;
                switch (o) {
                    case "SET_STATUS_ONLINE":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isOnline: !0
                        });
                    case "SET_STATUS_OFFLINE":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isOnline: !1
                        });
                    default:
                        return e
                }
            }
        },
        "3etr": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n("q1tI"),
                i = n("17x9"),
                o = n.n(i),
                a = n("rid2"),
                s = n("SNoJ"),
                u = n("7EGn"),
                l = n("WHL/"),
                c = function(e) {
                    var t = e.currentPageName;
                    return r.createElement(a.q, null, (0, l.ZP)(t) && r.createElement("script", {
                        src: "https://microapps.google.com/apis/v1alpha/microapps.js"
                    }))
                };
            c.propTypes = {
                currentPageName: o().string
            }, c.defaultProps = {
                currentPageName: ""
            };
            const d = (0, s.$j)((function(e) {
                return {
                    currentPageName: (0, u.default)(e, "pages.current.name", "")
                }
            }))(c)
        },
        GNdq: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n("q1tI"),
                i = n("7EGn"),
                o = n("SNoJ"),
                a = n("17x9"),
                s = n.n(a),
                u = n("VAjR"),
                l = n("58Ml"),
                c = [u.Le, u.c_, u.Ul, u.wn, u.i1, u.wr, u.xR, u.ih, u.id],
                d = function(e) {
                    var t = e.url,
                        n = e.pageName,
                        i = e.subType;
                    return (0, r.useEffect)((function() {
                        (function(e, t) {
                            return !!c.includes(e) || !(e !== u.M6 || !l.N7.includes(t))
                        })(n, i) && window.scrollTo(0, 0)
                    }), [t, i]), null
                };
            d.propTypes = {
                url: s().string.isRequired,
                pageName: s().string.isRequired,
                subType: s().string.isRequired
            };
            const m = (0, o.$j)((function(e) {
                return {
                    url: (0, i.default)(e, "pages.current.pageUrl", ""),
                    pageName: (0, i.default)(e, "pages.current.name", ""),
                    subType: (0, i.default)(e, "pages.current.subType", "")
                }
            }))(d)
        },
        "NN/6": (e, t, n) => {
            "use strict";
            n.d(t, {
                sr: () => r,
                XG: () => i,
                VK: () => o,
                iD: () => a
            });
            var r = {
                    INITIATE: "SET_CSRF_IN_WINDOW_INITIATE",
                    SUCCESS: "SET_CSRF_IN_WINDOW_SUCCESS",
                    FAILED: "SET_CSRF_IN_WINDOW_FAILED",
                    CLEAR: "SET_CSRF_IN_WINDOW_CLEAR"
                },
                i = {
                    type: r.INITIATE
                },
                o = function() {
                    return {
                        type: r.SUCCESS
                    }
                },
                a = function() {
                    return {
                        type: r.FAILED
                    }
                }
        },
        yYoY: (e, t, n) => {
            "use strict";
            n.d(t, {
                PM: () => r,
                J6: () => i,
                iY: () => o
            });
            var r = {
                    OPEN: "CONTINUE_IN_APP_MODAL_OPEN",
                    CLOSE: "CONTINUE_IN_APP_MODAL_CLOSE"
                },
                i = function() {
                    return {
                        type: r.OPEN
                    }
                },
                o = function() {
                    return {
                        type: r.CLOSE
                    }
                }
        },
        tdEM: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r, i = n("h4VS"),
                o = n("pU3V"),
                a = n("q1tI"),
                s = n("SNoJ"),
                u = n("vOnD"),
                l = n("17x9"),
                c = n.n(l),
                d = n("7EGn"),
                m = n("WjMd"),
                f = n("P62M"),
                h = function(e) {
                    var t = e.isPageLoadRequestSent,
                        n = e.requestedPage,
                        r = (0, a.useState)(!0),
                        i = (0, o.Z)(r, 2),
                        s = i[0],
                        u = i[1];
                    return (0, a.useEffect)((function() {
                        u(!!t)
                    }), [t, n]), a.createElement(p, {
                        active: s,
                        key: n
                    })
                },
                p = (0, u.default)(m.Z)(r || (r = (0, i.Z)(["\n  height: 3px;\n"])));
            h.propTypes = {
                isPageLoadRequestSent: c().bool.isRequired,
                requestedPage: c().string.isRequired
            };
            const v = (0, s.$j)((function(e) {
                return {
                    isPageLoadRequestSent: (0, d.default)(e, "apiState.GET_PAGE_INFO.isFetching", !1) || (0, d.default)(e, "apiState.APPLY_FILTERS.isFetching", !1),
                    requestedPage: (0, d.default)(e, "apiState.GET_PAGE_INFO.fetchingUrl", "")
                }
            }))((0, a.memo)(h, f.Uh))
        },
        ocwp: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => $
            });
            var r = n("h4VS"),
                i = n("q1tI"),
                o = n("17x9"),
                a = n.n(o),
                s = n("MKeS"),
                u = n("rid2"),
                l = n("P62M"),
                c = n("SNoJ"),
                d = n("7EGn"),
                m = n("vOnD"),
                f = n("zqKt"),
                h = n("yM/X"),
                p = n("VcZT"),
                v = n("WjMd"),
                g = n("Ujvf"),
                E = n("nQUI"),
                _ = n("VAjR"),
                b = n("PdVL"),
                y = n("Wc2h"),
                I = n("fyQP"),
                w = n("o3Vs"),
                A = n("WHL/"),
                T = n("fMrO"),
                Z = n("NWYR"),
                S = n("NN/6"),
                O = n("GNdq"),
                C = n("1yBQ"),
                N = n("0cYI"),
                R = n("3etr"),
                P = n("LPu3"),
                L = n("tdEM"),
                x = n("ZEPn"),
                D = n("EyxB"),
                k = n("5h7m"),
                M = n("+dRJ"),
                U, G = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "CookieBanner-CookieBanner"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(2215).then(n.bind(n, "Did2"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "Did2"
                    }
                }),
                q = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "Footers"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7775).then(n.bind(n, "XwKE"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "XwKE"
                    }
                }),
                V = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "zwebmolecules-dist-Login"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6069), n.e(6400)]).then(n.bind(n, "QhZA"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "QhZA"
                    }
                }),
                F = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-common-Navbar"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(6996).then(n.bind(n, "TIfy"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "TIfy"
                    }
                }),
                H = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "PageBlocker"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(6197).then(n.bind(n, "boBE"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "boBE"
                    }
                }),
                B = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "StructuredData"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(9401).then(n.bind(n, "Et5G"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "Et5G"
                    }
                }),
                j = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-common-components-PartnershipLoginModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(5633).then(n.bind(n, "GepR"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "GepR"
                    }
                }),
                z = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-common-components-PartnershipLoginOptionModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(6230), n.e(5707), n.e(2850), n.e(6533), n.e(2282), n.e(5638)]).then(n.bind(n, "3Te9"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "3Te9"
                    }
                }),
                W = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-OpenAppModalV2"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(873).then(n.bind(n, "rSfY"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "rSfY"
                    }
                }),
                K = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Search-components-AerobarMobile"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(4244).then(n.bind(n, "Z7uT"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "Z7uT"
                    }
                }),
                Y = m.default.div(U || (U = (0, r.Z)(["\n  position: relative;\n"])));

            function J(e) {
                var t = e.pageInfo,
                    n = e.dispatchTosetCsrfInWindow,
                    r = e.isModalOpen,
                    o = e.closeModal,
                    a = e.setLoginType,
                    s = e.loginType,
                    c = e.location,
                    d = e.user,
                    m = e.isPartnershipFlow,
                    g = e.toastDetails,
                    E = e.removeToast,
                    b = e.loginModalLocale,
                    A = e.isLoggedIn,
                    T = e.fpaVisible,
                    S = e.setUser,
                    C = e.isBot,
                    x = e.pageConfig,
                    M = e.trackingDataLogin,
                    U = e.showOpenAppModal,
                    J = e.o2CheckoutFlow,
                    X = e.showOrderFlowNavbar,
                    Q = t.pageUrl,
                    $ = void 0 === Q ? "" : Q,
                    ee = t.name,
                    te = void 0 === ee ? "" : ee,
                    ne = t.isMobile,
                    re = c.cityId,
                    ie = void 0 === re ? 0 : re,
                    oe = c.countryId,
                    ae = void 0 === oe ? 0 : oe,
                    se = d.basic_info,
                    ue = (se = void 0 === se ? {} : se).id,
                    le = void 0 === ue ? 0 : ue,
                    ce = x.hideCookieBanner,
                    de = x.hideFooter,
                    me = x.hideLogin,
                    fe = x.hideNavbar,
                    he = x.hidePageBlocker,
                    pe = x.hideStructuredData,
                    ve = [_.mo, _.cP];
                (0, l.yF)() || C || f.Z.getInstance().setParams({
                    city_id: ie,
                    user_id: le
                });
                (0, i.useEffect)((function() {
                    return (0, w.f)(te, ne)
                }), []), (0, i.useEffect)((function() {
                    n()
                }), []);
                var ge = function(e) {
                    var t = e.user;
                    S(void 0 === t ? {} : t)
                };
                (0, i.useEffect)((function() {
                    $ && !T && ((0, y.Kd)(t, c, d), C || f.Z.getInstance().sendPageView($))
                }), [$, T]);
                var Ee = !m && !me && r,
                    _e = U && !(0, D.RZ)(),
                    be = ve.includes(te),
                    ye = (0, i.useRef)(null);
                return (0, k.Z)({
                    isOpen: r,
                    path: $,
                    modalRef: ye,
                    isEnabled: !m && ne
                }), i.createElement(i.Fragment, null, i.createElement(Z.Z, null), Ee && i.createElement(u.q, null, i.createElement("script", {
                    src: "https://apis.google.com/js/platform.js?onload=onGoogleAPILoaded",
                    defer: !0,
                    referrerpolicy: "no-referrer"
                })), !pe && i.createElement(B, null), !!ne && be && i.createElement(K, null), !ce && i.createElement(G, {
                    isMobile: ne
                }), i.createElement(R.Z, null), i.createElement(Y, null, _e && i.createElement(W, null), i.createElement(L.Z, null), !fe && i.createElement(F, {
                    pageName: te,
                    showOrderFlowNavbar: X
                }), i.createElement(O.Z, null), i.createElement(h.default, null, i.createElement(P.Z, null), i.createElement(p.default, {
                    show: !!g.show,
                    align: g.align,
                    onClose: E,
                    text: g.text,
                    type: g.type
                })), m && i.createElement(j, null), m && i.createElement(z, null), !de && i.createElement(q, null), Ee && i.createElement(V, {
                    ref: ye,
                    isMobile: !!ne,
                    o2CheckoutFlow: J,
                    isOpen: r,
                    fnCloseRequest: o,
                    loginType: s,
                    setLoginType: a,
                    fnOnAuthenticate: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.name,
                            r = void 0 === n ? "" : n,
                            i = t.subType,
                            o = void 0 === i ? "" : i,
                            a = [_.c_, _.Le],
                            s = [_.kl];
                        a.includes(r) || s.includes(o) ? ge(e) : setTimeout((function() {
                            window.location.reload()
                        }), 100)
                    },
                    links: {
                        tos: 208 === ae ? "/termsofservice/turkey" : "/conditions",
                        privacy: "/privacy",
                        content: "/policies"
                    },
                    locale: b,
                    enableOneTap: !A,
                    enablePhoneLogin: !0,
                    genericActionCallback: function(e) {
                        (0, I.r)(t, e), (0, I.Z)(M, e)
                    },
                    fallback: i.createElement(v.Z, {
                        active: !0
                    })
                }), i.createElement(N.Z, null), !he && i.createElement(H, null)))
            }
            J.propTypes = {
                pageInfo: a().objectOf(a().any).isRequired,
                dispatchTosetCsrfInWindow: a().func.isRequired,
                setUser: a().func.isRequired,
                isModalOpen: a().bool.isRequired,
                closeModal: a().func.isRequired,
                setLoginType: a().func.isRequired,
                loginType: a().string.isRequired,
                location: a().shape({
                    cityName: a().string,
                    countryName: a().string,
                    cityId: a().number,
                    countryId: a().number
                }),
                user: a().objectOf(a().any).isRequired,
                isPartnershipFlow: a().bool,
                toastDetails: a().shape({
                    show: a().bool,
                    text: a().string,
                    type: a().string,
                    align: a().string
                }).isRequired,
                removeToast: a().func.isRequired,
                loginModalLocale: a().objectOf(a().string),
                isLoggedIn: a().bool,
                fpaVisible: a().bool,
                isBot: a().number,
                pageConfig: x.rg,
                trackingDataLogin: a().objectOf(a().any),
                showOpenAppModal: a().bool,
                o2CheckoutFlow: a().bool,
                showOrderFlowNavbar: a().bool
            }, J.defaultProps = {
                location: {
                    cityName: "",
                    countryName: ""
                },
                loginModalLocale: {},
                isPartnershipFlow: !1,
                isLoggedIn: !1,
                fpaVisible: !1,
                isBot: 0,
                pageConfig: x.tX,
                trackingDataLogin: {},
                showOpenAppModal: !1,
                o2CheckoutFlow: !1,
                showOrderFlowNavbar: !1
            };
            var X = function(e) {
                    var t = (0, l.hO)(e.langKeys),
                        n = (0, x.BZ)(e),
                        r = (0, T._)(e),
                        i = (0, b.Z)(e),
                        o = (0, x.BZ)(e).openAppModalV2,
                        a = (0, d.default)(e, "pages.current", {}),
                        s = (0, A.ZP)((0, d.default)(e, "pages.current.name", ""));
                    return {
                        pageInfo: a,
                        showOpenAppModal: Boolean(o) && !o.hideOnPageLoad,
                        isBot: (0, l.uy)(e),
                        isModalOpen: !!(0, d.default)(e, "uiLogic.loginModalOpen", !1),
                        loginType: (0, d.default)(e, "uiLogic.loginType", "login"),
                        location: (0, d.default)(e, "location.currentLocation", {}),
                        user: (0, d.default)(e, "user", {}),
                        isPartnershipFlow: s,
                        toastDetails: (0, d.default)(e, "uiLogic.toastDetails", {}),
                        loginModalLocale: t,
                        isLoggedIn: (0, l.Pc)(e),
                        fpaVisible: (0, C.MC)(e),
                        pageConfig: n,
                        trackingDataLogin: r,
                        o2CheckoutFlow: i,
                        showOrderFlowNavbar: (0, M.y)((0, d.default)(a, "subType", ""), (0, d.default)(a, "name", ""), s, (0, d.default)(a, "isMobile", !1))
                    }
                },
                Q = function(e) {
                    return {
                        dispatchTosetCsrfInWindow: function() {
                            return e(S.XG)
                        },
                        closeModal: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.success,
                                r = void 0 !== n && n;
                            return e((0, g.DZ)({
                                success: r
                            }))
                        },
                        setLoginType: function(t) {
                            return e((0, g.Zs)(t))
                        },
                        removeToast: function() {
                            return e((0, g.yg)())
                        },
                        setUser: function(t) {
                            return e((0, E.lx)(t))
                        }
                    }
                };
            const $ = (0, c.$j)(X, Q)((0, i.memo)(J, l.Uh))
        },
        akXP: (e, t, n) => {
            "use strict";
            n.d(t, {
                c8: () => c,
                a3: () => d,
                ZP: () => f
            });
            var r = n("HaE+"),
                i = n("o0o1"),
                o = n.n(i),
                a = n("IihT"),
                s = n("AdJq"),
                u = n("NN/6"),
                l = o().mark(m),
                c = function() {
                    var e = (0, r.Z)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(s.cz);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t.json());
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function(e) {
                    window.csrft = e.csrf || "", e.csrf && (window.csrf_set_time = (new Date).valueOf())
                };

            function m() {
                var e;
                return o().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = {}, t.prev = 1, t.next = 4, (0, a.RE)(c);
                        case 4:
                            e = t.sent, t.next = 10;
                            break;
                        case 7:
                            t.prev = 7, t.t0 = t.catch(1), e = {
                                csrf: ""
                            };
                        case 10:
                            return t.next = 12, d(e);
                        case 12:
                            return t.next = 14, (0, a.gz)(e.csrf ? (0, u.VK)() : (0, u.iD)());
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }), l, null, [
                    [1, 7]
                ])
            }
            const f = m
        },
        o3Vs: (e, t, n) => {
            "use strict";
            n.d(t, {
                f: () => c
            });
            var r = n("VTBJ"),
                i = n("rePB"),
                o = n("7EGn"),
                a = n("w6Sm"),
                s = n("iFif"),
                u = n("B8dP"),
                l = n("WHL/"),
                c = function(e, t) {
                    (0, a.kz)(d(e, t)), (0, a.Tx)(d(e, t)), (0, a.Tb)(d(e, t)), (0, a.Y)(d(e, t)), (0, a.CA)(d(e, t))
                },
                d = function(e, t) {
                    return function(n) {
                        var a = n.name,
                            c = n.value,
                            d = c ? (c / 1e3).toFixed(3) : 0,
                            m = (0, l.ZP)(e);
                        (0, u.V)((0, r.Z)({
                            name: a,
                            value: d,
                            pageName: e,
                            platform: t ? s.iw.MOBILE : s.iw.DESKTOP,
                            appType: m ? s.IF.GPAY : ""
                        }, function() {
                            if ("undefined" != typeof window) {
                                var e, t = (0, o.default)(window, "navigator.connection");
                                return e = {}, (0, i.Z)(e, "downlink", (0, o.default)(t, "downlink", "DATA NOT AVAILABLE")), (0, i.Z)(e, "effectiveType", (0, o.default)(t, "effectiveType", "DATA NOT AVAILABLE")), e
                            }
                            return {}
                        }()))
                    }
                }
        },
        "45g5": (e, t, n) => {
            "use strict";
            n.d(t, {
                Ww: () => r,
                r0: () => i,
                qH: () => o,
                ou: () => a,
                M8: () => s,
                AZ: () => u,
                Gd: () => l,
                n9: () => c,
                A4: () => d,
                lx: () => m,
                iD: () => f,
                Zu: () => h,
                KU: () => p,
                xh: () => v,
                m9: () => g,
                T3: () => E,
                zO: () => _,
                Ex: () => b,
                Fq: () => y,
                Qg: () => I,
                _t: () => w,
                XH: () => A,
                Ye: () => T,
                $_: () => Z,
                HQ: () => S,
                DE: () => O,
                Ky: () => C,
                EQ: () => N,
                VJ: () => R,
                Id: () => P,
                H4: () => L,
                J: () => x,
                UL: () => D,
                os: () => k,
                AU: () => M,
                iX: () => U,
                Y: () => G,
                W0: () => q,
                Zs: () => V,
                Fm: () => F,
                fO: () => H,
                g1: () => B,
                uQ: () => j,
                Fr: () => z,
                we: () => W,
                V0: () => K,
                w6: () => Y,
                gj: () => J,
                Bv: () => X,
                gy: () => Q,
                Az: () => $,
                Zf: () => ee,
                pv: () => te,
                Le: () => ne,
                gQ: () => re,
                MU: () => ie,
                sI: () => oe
            });
            var r = "RES_PAGE_LEFT_HEADER",
                i = "RES_PAGE_RIGHT_HEADER",
                o = "RES_PAGE_FOOTER",
                a = "RES_PAGE_STICKY",
                s = "RES_PAGE_IN_CONTENT_1",
                u = "RES_PAGE_IN_CONTENT_2",
                l = "RES_PAGE_IN_CONTENT_3",
                c = "RES_PAGE_HEADER",
                d = "RES_MENU_PAGE_FOOTER",
                m = "RES_GALLERY_BEFORE_PHOTOS",
                f = "RES_OVERVIEW_HEADER",
                h = "RES_MENU_PAGE_HEADER",
                p = "RES_PHOTOS_PAGE_HEADER",
                v = "SEARCH_PAGE_HEADER",
                g = "SEARCH_PAGE_RIGHT_HEADER",
                E = "SEARCH_PAGE_IN_CONTENT",
                _ = "COLLECTIONS_FEATURED_HEADER",
                b = "COLLECTIONS_FEATURED_FOOTER",
                y = "COLLECTIONS_FEATURED_RIGHT_HEADER",
                I = "COLLECTIONS_ME_HEADER",
                w = "COLLECTIONS_ME_FOOTER",
                A = "COLLECTIONS_ME_RIGHT_HEADER",
                T = "COLLECTIONS_BOOKMARKED_HEADER",
                Z = "COLLECTIONS_BOOKMARKED_FOOTER",
                S = "COLLECTIONS_BOOKMARKED_RIGHT_HEADER",
                O = "COLLECTIONS_SINGLE_HEADER",
                C = "COLLECTIONS_SINGLE_FOOTER",
                N = "COLLECTIONS_SINGLE_RIGHT_HEADER",
                R = "USER_FOOD_JOURNEY_HEADER",
                P = "USER_FOOD_JOURNEY_FOOTER",
                L = "USER_FOOD_JOURNEY_RIGHT_HEADER",
                x = "USER_FOOD_JOURNEY_STICKY",
                D = "USER_PHOTOS_HEADER",
                k = "USER_PHOTOS_FOOTER",
                M = "USER_PHOTOS_RIGHT_HEADER",
                U = "USER_PHOTOS_STICKY",
                G = "USER_FOLLOWERS_HEADER",
                q = "USER_FOLLOWERS_FOOTER",
                V = "USER_FOLLOWERS_RIGHT_HEADER",
                F = "USER_FOLLOWERS_STICKY",
                H = "USER_RECENTLY_VIEWED_HEADER",
                B = "USER_RECENTLY_VIEWED_FOOTER",
                j = "USER_RECENTLY_VIEWED_RIGHT_HEADER",
                z = "USER_RECENTLY_VIEWED_STICKY",
                W = "USER_REVIEWS_HEADER",
                K = "USER_REVIEWS_FOOTER",
                Y = "USER_REVIEWS_RIGHT_HEADER",
                J = "USER_REVIEWS_STICKY",
                X = "USER_BLOG_HEADER",
                Q = "USER_BLOG_FOOTER",
                $ = "USER_BLOG_RIGHT_HEADER",
                ee = "USER_BLOG_STICKY",
                te = "USER_BOOKING_HEADER",
                ne = "USER_BOOKING_FOOTER",
                re = "USER_BOOKING_RIGHT_HEADER",
                ie = "USER_BOOKING_STICKY",
                oe = "CITY_PAGE_STICKY"
        },
        V3te: (e, t, n) => {
            "use strict";
            n.d(t, {
                _8: () => r,
                Vb: () => i,
                vh: () => o
            });
            var r = "primary",
                i = "secondary",
                o = "network status"
        },
        I3Ur: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => je
            });
            var r = n("rePB"),
                i = n("MKeS"),
                o = n("FaQd"),
                a = n("9wrz"),
                s = n("v3cd"),
                u = n("9GJC"),
                l = n("/TPN"),
                c = n("MJVv"),
                d = n("LP7x"),
                m = n("ZysW"),
                f = n("v7Ez"),
                h = n("xTcC"),
                p = n("ePP4"),
                v = n("YrrC"),
                g = n("Vyl6"),
                E = n("asmC"),
                _ = n("zbD0"),
                b = n("qP8M"),
                y = n("0S1l"),
                I = n("jFW/"),
                w = n("U0QK"),
                A = n("VAjR"),
                T, Z = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-AboutUs"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(5885), n.e(6389), n.e(8643), n.e(5193), n.e(8518)]).then(n.bind(n, "T2R7"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "T2R7"
                    }
                }),
                S = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-DeliveryCities"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(8348), n.e(6262), n.e(6230), n.e(5707), n.e(2850), n.e(8315), n.e(5556), n.e(5878), n.e(5904)]).then(n.bind(n, "1l9s"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "1l9s"
                    }
                }),
                O = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PlanPage"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(1694), n.e(8849), n.e(6649), n.e(1002)]).then(n.bind(n, "5p9z"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "5p9z"
                    }
                }),
                C = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FamilyPlan"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(2226).then(n.bind(n, "84aF"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "84aF"
                    }
                }),
                N = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Careers"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(593), n.e(7969)]).then(n.bind(n, "QIRe"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "QIRe"
                    }
                }),
                R = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Contact"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(7180), n.e(705)]).then(n.bind(n, "OEH3"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "OEH3"
                    }
                }),
                P = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Jobs-AllJobs"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4540), n.e(7946), n.e(3242), n.e(5974)]).then(n.bind(n, "vNjx"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "vNjx"
                    }
                }),
                L = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Jobs-Department"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(5885), n.e(6389), n.e(4540), n.e(8643), n.e(7946), n.e(3242), n.e(2784)]).then(n.bind(n, "YpYL"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "YpYL"
                    }
                }),
                x = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Awards"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4540), n.e(9478)]).then(n.bind(n, "CkDU"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "CkDU"
                    }
                }),
                D = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(3426), n.e(9284), n.e(6069), n.e(6400), n.e(845), n.e(8003), n.e(2830), n.e(8644)]).then(n.bind(n, "fAQZ"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "fAQZ"
                    }
                }),
                k = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandTicketsPage"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(9284), n.e(6069), n.e(6400), n.e(7630), n.e(1261)]).then(n.bind(n, "o1ah"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "o1ah"
                    }
                }),
                M = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandCart"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6069), n.e(6400), n.e(5466)]).then(n.bind(n, "HJrp"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "HJrp"
                    }
                }),
                U = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandGallery"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(6069), n.e(6400), n.e(7108), n.e(5521)]).then(n.bind(n, "rgda"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "rgda"
                    }
                }),
                G = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Zomaland-ZomalandOrdersPage"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(2488), n.e(6069), n.e(6400), n.e(845), n.e(492)]).then(n.bind(n, "EmbV"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "EmbV"
                    }
                }),
                q = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Sneakpeek"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(3426), n.e(5955), n.e(6728), n.e(4622)]).then(n.bind(n, "pwcR"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "pwcR"
                    }
                }),
                V = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-HygieneRatings"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6728), n.e(341)]).then(n.bind(n, "0CAv"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "0CAv"
                    }
                }),
                F = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-HygieneRatings-FAQ"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(4757).then(n.bind(n, "Enb7"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "Enb7"
                    }
                }),
                H = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Gold"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4540), n.e(7496), n.e(5448), n.e(1114), n.e(9701)]).then(n.bind(n, "q1Ou"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "q1Ou"
                    }
                }),
                B = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Advertise"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6069), n.e(4540), n.e(7496), n.e(2853), n.e(2830), n.e(1114), n.e(2723)]).then(n.bind(n, "2XAr"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "2XAr"
                    }
                }),
                j = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-SauceBlog"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(3426), n.e(5885), n.e(6389), n.e(8643), n.e(9170), n.e(2834)]).then(n.bind(n, "WDG3"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "WDG3"
                    }
                }),
                z = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-FoodAtWork"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(3426), n.e(4540), n.e(7496), n.e(6872), n.e(1114), n.e(1941)]).then(n.bind(n, "R7Wn"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "R7Wn"
                    }
                }),
                W = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Celebrations"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4540), n.e(7496), n.e(6931)]).then(n.bind(n, "A/0o"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "A/0o"
                    }
                }),
                K = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Kitchen"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(3426), n.e(6202), n.e(233), n.e(3732), n.e(6069), n.e(4540), n.e(7268), n.e(8014), n.e(5713)]).then(n.bind(n, "qYOq"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "qYOq"
                    }
                }),
                Y = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Restaurant"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(2190), n.e(5502)]).then(n.bind(n, "qSKw"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "qSKw"
                    }
                }),
                J = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-O2Payment"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(6069), n.e(1685), n.e(6390), n.e(6230), n.e(5707), n.e(2850), n.e(6533), n.e(8242), n.e(2282), n.e(2190), n.e(4214), n.e(7814), n.e(9010)]).then(n.bind(n, "0Z+i"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "0Z+i"
                    }
                }),
                X = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PostOrder"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6230), n.e(5707), n.e(2850), n.e(1871), n.e(1437), n.e(729)]).then(n.bind(n, "JJzL"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "JJzL"
                    }
                }),
                Q = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Gift"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6230), n.e(5707), n.e(8625)]).then(n.bind(n, "Iu+W"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "Iu+W"
                    }
                }),
                $ = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Goodbye"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(9549).then(n.bind(n, "AWZx"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "AWZx"
                    }
                }),
                ee = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Gold"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(6416).then(n.bind(n, "2nr1"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "2nr1"
                    }
                }),
                te = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Business-Kitchen-FAQ"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7132).then(n.bind(n, "3O1s"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "3O1s"
                    }
                }),
                ne = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PageNotFound"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(6274).then(n.bind(n, "CnTS"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "CnTS"
                    }
                }),
                re = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Beware-Beware"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(4055).then(n.bind(n, "SrLL"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "SrLL"
                    }
                }),
                ie = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Collections"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(3296), n.e(6230), n.e(5707), n.e(3057), n.e(476)]).then(n.bind(n, "9Xqo"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "9Xqo"
                    }
                }),
                oe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-CollectionDetails"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(3296), n.e(6230), n.e(5707), n.e(4900), n.e(7221), n.e(3057), n.e(6267)]).then(n.bind(n, "dU08"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "dU08"
                    }
                }),
                ae = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-DownloadApp"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6069), n.e(2830), n.e(3283)]).then(n.bind(n, "ZcMp"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "ZcMp"
                    }
                }),
                se = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Contests"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(7319), n.e(7013)]).then(n.bind(n, "Uj4G"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "Uj4G"
                    }
                }),
                ue = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-User"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(6230), n.e(5707), n.e(2850), n.e(1437), n.e(743), n.e(2978)]).then(n.bind(n, "FhIK"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "FhIK"
                    }
                }),
                le = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-UserSettings"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(417).then(n.bind(n, "a80T"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "a80T"
                    }
                }),
                ce = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Search"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(3930), n.e(6230), n.e(5707), n.e(2190), n.e(743), n.e(4624), n.e(4168)]).then(n.bind(n, "pH2P"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "pH2P"
                    }
                }),
                de = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Report"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7684).then(n.bind(n, "gefg"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "gefg"
                    }
                }),
                me = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Jobs-SingleJob"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(404), n.e(4266)]).then(n.bind(n, "xqxM"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "xqxM"
                    }
                }),
                fe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-GoldSubscriptionAgreement"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(5381)]).then(n.bind(n, "P15c"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "P15c"
                    }
                }),
                he = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TNCs-MerchantDeliveryTerms"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6291), n.e(8163)]).then(n.bind(n, "+Y+J"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "+Y+J"
                    }
                }),
                pe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TNCs-CsrTerms"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6291), n.e(9828)]).then(n.bind(n, "vVxz"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "vVxz"
                    }
                }),
                ve = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TNCs-Turkey"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6291), n.e(14)]).then(n.bind(n, "m4im"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "m4im"
                    }
                }),
                ge = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Country"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(4455).then(n.bind(n, "EfTu"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "EfTu"
                    }
                }),
                Ee = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-PostBook"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(4537), n.e(3124), n.e(2556)]).then(n.bind(n, "L0mW"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "L0mW"
                    }
                }),
                _e = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-City"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(6069), n.e(8089), n.e(6230), n.e(5707), n.e(2830), n.e(4624), n.e(965)]).then(n.bind(n, "7Y/c"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "7Y/c"
                    }
                }),
                be = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-COVID"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(3224).then(n.bind(n, "8+xD"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "8+xD"
                    }
                }),
                ye = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FeedingPhilippines"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(134), n.e(1744), n.e(4627), n.e(2207)]).then(n.bind(n, "nz3R"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "nz3R"
                    }
                }),
                Ie = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FeedingIndonesia"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(134), n.e(1744), n.e(4627), n.e(4211)]).then(n.bind(n, "UdcY"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "UdcY"
                    }
                }),
                we = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FeedingLebanon"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(134), n.e(1744), n.e(4627), n.e(4577)]).then(n.bind(n, "f+bG"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "f+bG"
                    }
                }),
                Ae = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ZoomBackgrounds"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(134), n.e(6230), n.e(5707), n.e(9543)]).then(n.bind(n, "qQ9L"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "qQ9L"
                    }
                }),
                Te = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-TalentHub"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4540), n.e(5116), n.e(2135)]).then(n.bind(n, "2UFV"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "2UFV"
                    }
                }),
                Ze = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-ContactlessDining"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6069), n.e(134), n.e(7268), n.e(2830), n.e(9686)]).then(n.bind(n, "xGAT"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "xGAT"
                    }
                }),
                Se = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-CDNG"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(5707), n.e(6533), n.e(2190), n.e(4917)]).then(n.bind(n, "vnjY"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "vnjY"
                    }
                }),
                Oe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-QRCodeScanner"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6230), n.e(5707), n.e(5059), n.e(222)]).then(n.bind(n, "Fgd6"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "Fgd6"
                    }
                }),
                Ce = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-CupcakeGift"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(4975).then(n.bind(n, "JH4w"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "JH4w"
                    }
                }),
                Ne = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Dote-DotePdp"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(3426), n.e(9413), n.e(5534), n.e(2904), n.e(7515)]).then(n.bind(n, "PhTE"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "PhTE"
                    }
                }),
                Re = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Dote-DoteHome"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(3426), n.e(9413), n.e(391), n.e(6230), n.e(5707), n.e(743), n.e(2904), n.e(2423)]).then(n.bind(n, "ZPff"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "ZPff"
                    }
                }),
                Pe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-Init"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(8348), n.e(6230), n.e(5707), n.e(2850), n.e(8315), n.e(1294)]).then(n.bind(n, "ab+U"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "ab+U"
                    }
                }),
                Le = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-Search"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(8348), n.e(2370), n.e(3222), n.e(3128), n.e(7672), n.e(6230), n.e(5707), n.e(2850), n.e(8315), n.e(5556), n.e(4900), n.e(743), n.e(1160), n.e(9398), n.e(8867)]).then(n.bind(n, "uESb"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "uESb"
                    }
                }),
                xe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-Restaurant"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(6230), n.e(5707), n.e(2850), n.e(6533), n.e(2282), n.e(2190), n.e(5380), n.e(4906)]).then(n.bind(n, "7zNK"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "7zNK"
                    }
                }),
                De = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-O2Payment"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6588), n.e(1685), n.e(1046), n.e(6230), n.e(5707), n.e(2850), n.e(6533), n.e(8242), n.e(7814), n.e(6741)]).then(n.bind(n, "3zgm"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "3zgm"
                    }
                }),
                ke = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-User"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(9843), n.e(6230), n.e(5707), n.e(2850), n.e(1871), n.e(1437), n.e(7258), n.e(7943)]).then(n.bind(n, "I3ph"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "I3ph"
                    }
                }),
                Me = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-PaymentStatus"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7409).then(n.bind(n, "8WCf"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "8WCf"
                    }
                }),
                Ue = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-PostOrder"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(6230), n.e(5707), n.e(2850), n.e(1871), n.e(1437), n.e(5617)]).then(n.bind(n, "vqUz"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "vqUz"
                    }
                }),
                Ge = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-MaxSafety"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(3429).then(n.bind(n, "0B19"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "0B19"
                    }
                }),
                qe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "partnership-pages-common-components-ErrorPage"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(504).then(n.bind(n, "HDi5"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "HDi5"
                    }
                }),
                Ve = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-FinancialInfo"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(1202).then(n.bind(n, "z+J2"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "z+J2"
                    }
                }),
                Fe = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-InvestorRelations"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7075).then(n.bind(n, "AmG3"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "AmG3"
                    }
                }),
                He = (0, i.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "pages-Loyalty"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(8348), n.e(2663), n.e(1156), n.e(6230), n.e(5707), n.e(2850), n.e(8315), n.e(5556), n.e(4605), n.e(7284)]).then(n.bind(n, "IzXw"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "IzXw"
                    }
                }),
                Be = (T = {}, (0, r.Z)(T, A.FA, {
                    Component: Z,
                    Fallback: o.Z
                }), (0, r.Z)(T, A.L1, {
                    Component: S
                }), (0, r.Z)(T, A.oP, {
                    Component: Ve
                }), (0, r.Z)(T, A.po, {
                    Component: O
                }), (0, r.Z)(T, A.hd, {
                    Component: C
                }), (0, r.Z)(T, A.Aw, {
                    Component: N,
                    Fallback: a.Z
                }), (0, r.Z)(T, A.p5, {
                    Component: R
                }), (0, r.Z)(T, A.Pp, {
                    Component: L
                }), (0, r.Z)(T, A.BO, {
                    Component: P,
                    Fallback: s.Z
                }), (0, r.Z)(T, A.Fv, {
                    Component: x
                }), (0, r.Z)(T, A.QR, {
                    Component: D,
                    Fallback: h.Z
                }), (0, r.Z)(T, A.vY, {
                    Component: D,
                    Fallback: h.Z
                }), (0, r.Z)(T, A.Ex, {
                    Component: k,
                    Fallback: h.Z
                }), (0, r.Z)(T, A.vL, {
                    Component: U,
                    Fallback: h.Z
                }), (0, r.Z)(T, A.c$, {
                    Component: M,
                    Fallback: h.Z
                }), (0, r.Z)(T, A.n3, {
                    Component: G,
                    Fallback: h.Z
                }), (0, r.Z)(T, A.Hd, {
                    Component: q,
                    Fallback: c.Z
                }), (0, r.Z)(T, A.xf, {
                    Component: V,
                    Fallback: u.Z
                }), (0, r.Z)(T, A.Zn, {
                    Component: F,
                    Fallback: l.Z
                }), (0, r.Z)(T, A.fq, {
                    Component: H,
                    Fallback: d.Z
                }), (0, r.Z)(T, A.Eq, {
                    Component: B,
                    Fallback: d.Z
                }), (0, r.Z)(T, A.$7, {
                    Component: j
                }), (0, r.Z)(T, A.OF, {
                    Component: z,
                    Fallback: d.Z
                }), (0, r.Z)(T, A.RQ, {
                    Component: W,
                    Fallback: d.Z
                }), (0, r.Z)(T, A.NF, {
                    Component: K,
                    Fallback: d.Z
                }), (0, r.Z)(T, A.qW, {
                    Component: te,
                    Fallback: l.Z
                }), (0, r.Z)(T, A.lX, {
                    Component: Y,
                    Fallback: b.Z
                }), (0, r.Z)(T, A.eO, {
                    Component: xe,
                    Fallback: b.Z
                }), (0, r.Z)(T, A.Hk, {
                    Component: re,
                    Fallback: d.Z
                }), (0, r.Z)(T, A.c_, {
                    Component: J,
                    Fallback: f.Z
                }), (0, r.Z)(T, A.ih, {
                    Component: De,
                    Fallback: f.Z
                }), (0, r.Z)(T, A.Le, {
                    Component: J,
                    Fallback: f.Z
                }), (0, r.Z)(T, A.bE, {
                    Component: X,
                    Fallback: m.Z
                }), (0, r.Z)(T, A.R_, {
                    Component: Q
                }), (0, r.Z)(T, A.sK, {
                    Component: $
                }), (0, r.Z)(T, A.ri, {
                    Component: Ue,
                    Fallback: m.Z
                }), (0, r.Z)(T, A.Ul, {
                    Component: ie,
                    Fallback: p.Z
                }), (0, r.Z)(T, A.wn, {
                    Component: oe,
                    Fallback: v.Z
                }), (0, r.Z)(T, A.lJ, {
                    Component: se,
                    Fallback: o.Z
                }), (0, r.Z)(T, A.Hi, {
                    Component: ne
                }), (0, r.Z)(T, A.Y, {
                    Component: ne
                }), (0, r.Z)(T, A.fP, {
                    Component: qe
                }), (0, r.Z)(T, A.RF, {
                    Component: ae
                }), (0, r.Z)(T, A.xR, {
                    Component: ue
                }), (0, r.Z)(T, A.t0, {
                    Component: le
                }), (0, r.Z)(T, A.id, {
                    Component: ke
                }), (0, r.Z)(T, A.Kn, {
                    Component: ue
                }), (0, r.Z)(T, A.mo, {
                    Component: ce,
                    Fallback: E.Z
                }), (0, r.Z)(T, A.cP, {
                    Component: Le,
                    Fallback: E.Z
                }), (0, r.Z)(T, A.X3, {
                    Component: de
                }), (0, r.Z)(T, A.ns, {
                    Component: me
                }), (0, r.Z)(T, A.Hm, {
                    Component: fe
                }), (0, r.Z)(T, A.si, {
                    Component: ge
                }), (0, r.Z)(T, A.mG, {
                    Component: Ee,
                    Fallback: g.Z
                }), (0, r.Z)(T, A.ND, {
                    Component: be
                }), (0, r.Z)(T, A.dP, {
                    Component: ee,
                    Fallback: ee
                }), (0, r.Z)(T, A.PC, {
                    Component: ye
                }), (0, r.Z)(T, A.z4, {
                    Component: Ie
                }), (0, r.Z)(T, A.Fw, {
                    Component: we
                }), (0, r.Z)(T, A.Or, {
                    Component: _e
                }), (0, r.Z)(T, A.i1, {
                    Component: Ae
                }), (0, r.Z)(T, A.Sp, {
                    Component: he
                }), (0, r.Z)(T, A.W4, {
                    Component: pe
                }), (0, r.Z)(T, A.HN, {
                    Component: ve,
                    Fallback: _.Z
                }), (0, r.Z)(T, A.wr, {
                    Component: Te
                }), (0, r.Z)(T, A.sB, {
                    Component: Ze
                }), (0, r.Z)(T, A.M6, {
                    Component: Se
                }), (0, r.Z)(T, A.Q9, {
                    Component: Ne,
                    Fallback: I.Z
                }), (0, r.Z)(T, A.KT, {
                    Component: Re,
                    Fallback: w.Z
                }), (0, r.Z)(T, A.RO, {
                    Component: Oe
                }), (0, r.Z)(T, A.yl, {
                    Component: Pe
                }), (0, r.Z)(T, A.bo, {
                    Component: Me
                }), (0, r.Z)(T, A.u8, {
                    Component: Ce
                }), (0, r.Z)(T, A.tY, {
                    Component: Ge,
                    Fallback: y.Z
                }), (0, r.Z)(T, A.AM, {
                    Component: Fe
                }), (0, r.Z)(T, A.pA, {
                    Component: He
                }), T);
            const je = Be
        },
        "z6+9": (e, t, n) => {
            "use strict";
            n.d(t, {
                Jh: () => i,
                Nt: () => o,
                _$: () => a,
                Xx: () => s,
                F1: () => u,
                XI: () => l,
                zm: () => c,
                ai: () => d,
                Gk: () => m,
                wL: () => f,
                xh: () => h,
                B9: () => p,
                ii: () => v,
                dD: () => g,
                i8: () => E,
                W$: () => _,
                x7: () => b,
                xF: () => y,
                Dr: () => I,
                _D: () => w,
                jD: () => A,
                VL: () => T,
                nS: () => Z,
                pD: () => S,
                Q4: () => O,
                w6: () => C,
                Kc: () => N,
                cC: () => R,
                Ln: () => P,
                SF: () => L,
                z0: () => x,
                Vt: () => D
            });
            var r = n("P62M"),
                i = (0, r.Vl)("/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"),
                o = (0, r.Vl)("/web_assets/ee34583804919f1d9d5a45a32db80a891604300478.png"),
                a = (0, r.Vl)("/web_assets/1587250f42958c80332fc592559f05661603954264.png"),
                s = (0, r.E_)(i, 132, 28, 1.5),
                u = (0, r.Vl)("/web/about/48fc8d7806d6a947fd041a8a1cf83bac1563875757.png"),
                l = (0, r.Vl)("/web/assets/7c86b742bd6ea6a45d5753abaab025201608640583.png"),
                c = "data/o2_assets/a7c35e5e665dda9d67a279f4f814947f1568208663.png",
                d = "images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                m = (0, r.Vl)("/web/postOrder/9cb6643a1b66a11b4d33789bc96eac9e1569498080.png"),
                f = (0, r.Vl)("/web/postOrder/b0df37608bb7ae5a43b7cb243328a0d81569497860.png"),
                h = (0, r.Vl)("/web/postOrder/773b626446ef0924e7b66dbbc69b02831574322025.png"),
                p = (0, r.Vl)("/web/postOrder/assets/8b2ff73f037655d699e5a5b8bbcadf3c1568864204.png"),
                v = (0, r.Vl)("/data/web_assets/e2e7c8de82deb03cf098c26b5213a2491579280907.png"),
                g = (0, r.Vl)("/web/crystal/snapaec5323792a0f1a1492529bc21364dfa1577955444.png"),
                E = ((0, r.Vl)("/web/hygiene/c37c247df4b839d5e96080f7263ec3f61564127737.png"), (0, r.Vl)("/web/gold/a592f2312b0a5c5d6cbb08de036013461582638554.png"), (0, r.Vl)("/data/pro/d8f65b73ded67bfe79e608b4315471ed1596199816.png")),
                _ = ((0, r.Vl)("/web/gold/d50cf4704e29154772116a37357f18dd1582638574.png"), (0, r.Vl)("/data/pro/9683780ffa98c93dd39a31841d464be21596199764.png")),
                b = (0, r.Vl)("/web_assets/b69badeeb9ef00f59428b4c09ef4c1901575873261.png"),
                y = (0, r.Vl)("/webFrontend/ccb7ca5e4d20be837ccc9389b3a8c40a1582614849.png"),
                I = ((0, r.Vl)("/web/feeding0db69e016d891381f3505a30815a196e1585164832.jpeg"), (0, r.Vl)("/web/feeding/b53f2db8ef07367b63aeb88bb5e601d01586006187.jpeg")),
                w = (0, r.Vl)("/web/feeding/e17c57ae9c1ef84e78b976bc414596001586003587.jpeg"),
                A = (0, r.Vl)("/feedingIndonesia/5d4eef56630279a6d5b1d075c11d299c1587379177.png"),
                T = (0, r.Vl)("/feedingIndonesia0ed782f597cac9dc6797c4ad20c5d87f1587287334.png"),
                Z = (0, r.Vl)("/web/assets/f0b1bdc4cdae3c9e54964d791e83be401614320771.jpeg"),
                S = (0, r.Vl)("/web/assets/search/6d548ba48f0e4e4b46c19ad4b15a3f011615379209.jpeg"),
                O = (0, r.Vl)("/web_assets/b9d6c3e60ce23b82cae6ce2eee52a0091597815439.png"),
                C = (0, r.Vl)("/web_assets/a9fc313ca57b63281dae2e450096c5c71597815428.png"),
                N = (0, r.Vl)("/web_assets/027f22e7b0cf018efc4ec962a86676841597815452.png"),
                R = (0, r.Vl)("/webFrontend/2a52902d43d9f026c34bec4384843e1b1600146571.jpeg"),
                P = ((0, r.Vl)("/data/o2_assets/d8dd7b11d84f5c88a0aa33562bc067741620116409.png"), "/data/web_assets/b023b039102c25ce5d3f1e531eed94be1573803886.png"),
                L = "/data/web_assets/3b7cbfa00706a1a380b2333ca75b0a351583927058.png",
                x = "/web/takeaway/2e6bff90a6cc8c07bf316027329e24da1587473365.png",
                D = "/data/contactlessdining/b8e6796728c977ef9af02975730888d61590059588.png"
        },
        kHo1: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vq: () => r,
                VN: () => i,
                C2: () => o
            });
            var r = "development",
                i = "sauce",
                o = "munchies"
        },
        VAjR: (e, t, n) => {
            "use strict";
            n.d(t, {
                Hi: () => r,
                aL: () => i,
                Sd: () => o,
                bV: () => a,
                lX: () => s,
                Aw: () => u,
                p5: () => l,
                BO: () => c,
                ns: () => d,
                Pp: () => m,
                FA: () => f,
                L1: () => h,
                Fv: () => p,
                Hd: () => v,
                xf: () => g,
                Zn: () => E,
                fq: () => _,
                Eq: () => b,
                $7: () => y,
                OF: () => I,
                RQ: () => w,
                NF: () => A,
                qW: () => T,
                Hk: () => Z,
                bZ: () => S,
                kl: () => O,
                Q9: () => C,
                KT: () => N,
                ZE: () => R,
                l1: () => P,
                v6: () => L,
                sk: () => x,
                yg: () => D,
                FP: () => k,
                th: () => M,
                c_: () => U,
                Le: () => G,
                bE: () => q,
                R_: () => V,
                sK: () => F,
                QR: () => H,
                vY: () => B,
                Ex: () => j,
                c$: () => z,
                vL: () => W,
                n3: () => K,
                Ul: () => Y,
                wn: () => J,
                RF: () => X,
                lJ: () => Q,
                xR: () => $,
                uU: () => ee,
                sU: () => te,
                kk: () => ne,
                gv: () => re,
                d5: () => ie,
                Ve: () => oe,
                V0: () => ae,
                r$: () => se,
                P3: () => ue,
                hV: () => le,
                ZA: () => ce,
                JD: () => de,
                HK: () => me,
                RE: () => fe,
                ap: () => he,
                N9: () => pe,
                Cr: () => ve,
                ev: () => ge,
                EW: () => Ee,
                YO: () => _e,
                Kn: () => be,
                s3: () => ye,
                g5: () => Ie,
                mo: () => we,
                t0: () => Ae,
                bv: () => Te,
                OH: () => Ze,
                $g: () => Se,
                X3: () => Oe,
                Hm: () => Ce,
                si: () => Ne,
                U5: () => Re,
                mG: () => Pe,
                Or: () => Le,
                ND: () => xe,
                dP: () => De,
                i1: () => ke,
                PC: () => Me,
                z4: () => Ue,
                Fw: () => Ge,
                Sp: () => qe,
                W4: () => Ve,
                HN: () => Fe,
                wr: () => He,
                sB: () => Be,
                M6: () => je,
                RO: () => ze,
                u8: () => We,
                po: () => Ke,
                hd: () => Ye,
                oP: () => Je,
                fP: () => Xe,
                yl: () => Qe,
                cP: () => $e,
                ih: () => et,
                eO: () => tt,
                bo: () => nt,
                id: () => rt,
                JH: () => it,
                ri: () => ot,
                Y: () => at,
                tY: () => st,
                AM: () => ut,
                y5: () => lt,
                cY: () => ct,
                tf: () => dt,
                m$: () => mt,
                ls: () => ft,
                gB: () => ht,
                NV: () => pt,
                pA: () => vt
            });
            var r = "404",
                i = "business",
                o = "home",
                a = "developer",
                s = "restaurant",
                u = "careers",
                l = "contact",
                c = "alljobs",
                d = "single-job",
                m = "department",
                f = "who-we-are",
                h = "delivery-cities",
                p = "awards",
                v = "sneakpeek",
                g = "hygiene",
                E = "hygiene-faq",
                _ = "gold-business",
                b = "advertise-business",
                y = "sauce",
                I = "food-business",
                w = "celebrations",
                A = "kitchen-business",
                T = "kitchen-business-faq",
                Z = "beware-of-fraud",
                S = "booking",
                O = "order",
                C = "dote-pdp",
                N = "dote-home",
                R = "faq",
                P = "takeaway",
                L = "dailyMenu",
                x = "menu",
                D = "photos",
                k = "events",
                M = "reviews",
                U = "web-o2-payment",
                G = "web-takeaway-payment",
                q = "web-o2-post-order",
                V = "gift-receive",
                F = "goodbye",
                H = "zomaland",
                B = "zmland/pre-register.php",
                j = "zomaland_tickets_page",
                z = "zomaland_cart",
                W = "zomaland_gallery",
                K = "zomaland_orders_page",
                Y = "collections",
                J = "singleCollection",
                X = "app-download",
                Q = "contests",
                $ = "user",
                ee = "foodjourney",
                te = "reviews",
                ne = "photos",
                re = "network",
                ie = "rec-viewed",
                oe = "favorite",
                ae = "ordering",
                se = "addresses",
                ue = "bookmarks",
                le = "bookings",
                ce = "blogs",
                de = "profile",
                me = "credits",
                fe = "managewallets",
                he = "managecards",
                pe = "feedback",
                ve = "emergency",
                ge = "notifications",
                Ee = "cdng-history",
                _e = "dining-help",
                be = "user-search",
                ye = "search-ordering",
                Ie = "search-profile",
                we = "search",
                Ae = "user-settings",
                Te = "privacy",
                Ze = "notification",
                Se = "invite",
                Oe = "report-fraud",
                Ce = "gold-subscription-agreement",
                Ne = "country",
                Re = "booking",
                Pe = "post-book",
                Le = "city",
                xe = "covid-19",
                De = "gold/index.php",
                ke = "zoom-backgrounds",
                Me = "feeding-philippines",
                Ue = "feeding-indonesia",
                Ge = "feeding-lebanon",
                qe = "b2b_delivery_tnc_page",
                Ve = "CSR_TNC_PAGE",
                Fe = "turkey_ttg_guide",
                He = "talent_hub",
                Be = "contactless-dining",
                je = "restaurant-cdng",
                ze = "scanner",
                We = "cupcake",
                Ke = "pro_plan_page_v2",
                Ye = "pro-join-family",
                Je = "financial-information",
                Xe = "error-page",
                Qe = "partnership-init",
                $e = "partnership-search",
                et = "partnership-web-o2-payment",
                tt = "partnership-restaurant",
                nt = "partnership-payment-status",
                rt = "partnership-user",
                it = "partnership-ordering",
                ot = "partnership-web-o2-post-order",
                at = "partnership-404",
                st = "max-safety",
                ut = "investor-relations",
                lt = "home",
                ct = "financials",
                dt = "news-and-events",
                mt = "governance",
                ft = "resources",
                ht = "esg-initiatives",
                pt = "board-member",
                vt = "loyalty"
        },
        AdJq: (e, t, n) => {
            "use strict";
            n.d(t, {
                _n: () => a,
                C4: () => s,
                AY: () => u,
                Jx: () => l,
                my: () => c,
                lJ: () => d,
                ZE: () => m,
                W5: () => f,
                OX: () => h,
                l4: () => p,
                xG: () => v,
                Yy: () => g,
                MM: () => E,
                CT: () => _,
                Ly: () => b,
                aK: () => y,
                n9: () => I,
                J_: () => w,
                rk: () => A,
                if: () => T,
                u3: () => Z,
                hJ: () => S,
                cY: () => O,
                BU: () => C,
                gT: () => N,
                HB: () => R,
                n$: () => P,
                qj: () => L,
                dW: () => x,
                o0: () => D,
                Oq: () => k,
                cK: () => M,
                wP: () => U,
                rU: () => G,
                vI: () => q,
                PC: () => V,
                Mk: () => F,
                yW: () => H,
                U2: () => B,
                e5: () => j,
                oD: () => z,
                HC: () => W,
                Bt: () => K,
                cz: () => Y,
                aV: () => J,
                AF: () => X,
                qi: () => Q,
                Lc: () => $,
                uD: () => ee,
                w3: () => te,
                p4: () => ne,
                t_: () => re,
                sy: () => ie,
                Dq: () => oe,
                NP: () => ae,
                $A: () => se,
                qz: () => ue,
                OV: () => le,
                Yl: () => ce,
                Ye: () => de,
                ey: () => me,
                YZ: () => fe,
                gf: () => he,
                bR: () => pe,
                Qs: () => ve,
                Gg: () => ge,
                eo: () => Ee,
                g3: () => _e,
                TS: () => be,
                HW: () => ye,
                Eq: () => Ie,
                O$: () => we,
                IO: () => Ae,
                jj: () => Te,
                N1: () => Ze,
                OU: () => Se,
                LG: () => Oe,
                p2: () => Ce,
                tj: () => Ne,
                cU: () => Re,
                Ed: () => Pe,
                Xs: () => Le,
                y$: () => xe,
                IR: () => De,
                J1: () => ke,
                ho: () => Me,
                kJ: () => Ue,
                L$: () => Ge,
                an: () => qe,
                fp: () => Ve,
                aU: () => Fe,
                HY: () => He,
                OB: () => Be,
                D_: () => je,
                pj: () => ze,
                Bn: () => We,
                mY: () => Ke,
                aL: () => Ye,
                ET: () => Je,
                LM: () => Xe,
                zi: () => Qe,
                OF: () => $e,
                Y$: () => et,
                EN: () => tt,
                XP: () => nt,
                t$: () => rt,
                eq: () => it,
                IA: () => ot,
                KQ: () => at,
                tZ: () => st,
                qf: () => ut,
                Qi: () => lt,
                wf: () => ct,
                gY: () => dt,
                cu: () => mt,
                QC: () => ft,
                wk: () => ht,
                jK: () => pt,
                gV: () => vt,
                D1: () => gt,
                Fl: () => Et,
                WW: () => _t,
                QH: () => bt,
                FR: () => yt,
                bk: () => It,
                eL: () => wt,
                ny: () => At,
                lW: () => Tt,
                Eo: () => Zt,
                oi: () => St,
                qu: () => Ot,
                Wb: () => Ct
            });
            var r = "https://www.zomato.com",
                i = "https://www.zomato.com",
                o = "https://api.zomato.com";
            "production" === n("kHo1").Vq ? (r = "https://www.zomato.com", i = "http://localhost:9000", o = "https://zomato-api-gateway.eks.zdev.net") : "undefined" != typeof window && (r = window.location.origin), "1" === String("0") && (i = "https://zpaykit-service.eks.zdev.net");
            var a = "".concat(r, "/webroutes"),
                s = "".concat(r, "/webroutes/blog/posts"),
                u = "".concat(r, "/webroutes/getPage"),
                l = ("".concat(r, "/webroutes/restaurant/info"), "".concat(r, "/webroutes/restaurant/getHygieneDetails")),
                c = "".concat(r, "/webroutes/restaurant/getHyperpureDetails"),
                d = "".concat(r, "/webroutes/careers/filter?"),
                m = "".concat(r, "/webroutes/contact/submitForm"),
                f = "".concat(r, "/webroutes/awards/winners/"),
                h = "".concat(r, "/webroutes/sauce/tag/"),
                p = "".concat(r, "/webroutes/sauce/subscribe"),
                v = "https://www.zomato.com",
                g = "".concat(r, "/webroutes/hygiene"),
                E = "".concat(r, "/webroutes/sneakpeek"),
                _ = "".concat(r, "/webroutes/business/submit-contact"),
                b = "".concat(r, "/webroutes/business/submit-contact-celebrations"),
                y = "".concat(r, "/webroutes/share/link"),
                I = "".concat(r, "/webroutes/kitchen/leads"),
                w = "".concat(r, "/webroutes/kitchen/city"),
                A = "".concat(r, "/webroutes/restaurant/rate"),
                T = "".concat(r, "/webroutes/restaurant/userModalInfo"),
                Z = "".concat(r, "/webroutes/restaurant/bookmark"),
                S = "".concat(r, "/webroutes/photos/viewGallery"),
                O = "".concat(r, "/webroutes/photos/loadMore"),
                C = "".concat(r, "/webroutes/reviews/switchTab"),
                N = "".concat(r, "/webroutes/reviews/loadMore"),
                R = "".concat(r, "/webroutes/reviews/sortReviews"),
                P = "".concat(r, "/webroutes/reviews/likeReview"),
                L = "".concat(r, "/webroutes/reviews/follow"),
                x = "".concat(r, "/webroutes/reviews/comment/post"),
                D = "".concat(r, "/webroutes/photos/comment/post"),
                k = "".concat(r, "/webroutes/reviews/comment/delete"),
                M = "".concat(r, "/webroutes/restaurant/share"),
                U = "".concat(r, "/webroutes/photos/like"),
                G = "".concat(r, "/webroutes/photos/comment/delete"),
                q = "".concat(r, "/webroutes/reviews/comment/loadMore"),
                V = "".concat(r, "/webroutes/reviews/comment/loadMoreManagement"),
                F = ("".concat(r, "/php/o2_handler.php"), "".concat(r, "/webroutes/photos/upload")),
                H = "".concat(r, "/webroutes/photos/submitPhoto"),
                B = "".concat(r, "/webroutes/reviews/suggestTags"),
                j = "".concat(r, "/webroutes/reviews/post"),
                z = "".concat(r, "/webroutes/photos/loadMore"),
                W = "".concat(r, "/webroutes/menu/viewMenu"),
                K = "".concat(r, "/webroutes/promo/info"),
                Y = ("".concat(r, "/webroutes/postOrder/crystalPromoCard"), "".concat(r, "/webroutes/auth/csrf")),
                J = "".concat(r, "/php/o2_handler.php"),
                X = ("".concat(r, "/webroutes/placeorder"), "".concat(r, "/webroutes/order/cart")),
                Q = "".concat(r, "/payments_service/make_payment_response.php"),
                $ = ("".concat(r, "/webroutes/postOrder/getRiderStatus"), "".concat(r, "/webroutes/postOrder/pollCrystalData")),
                ee = "".concat(r, "/webroutes/postOrder/riderVaccineCertificate"),
                te = "".concat(r, "/webroutes/gift/getCrystalData"),
                ne = "".concat(r, "/php/reportErrorHandler.php"),
                re = "".concat(r, "/webroutes/ads"),
                ie = "".concat(r, "/webroutes/order/address"),
                oe = "".concat(r, "/webroutes/collection/saveCollection"),
                ae = "".concat(r, "/webroutes/payment/blockedPayment"),
                se = "".concat(r, "/webroutes/order/resOffer"),
                ue = "".concat(r, "/php/chat_auth_handler.php"),
                le = "".concat(r, "/webroutes/postOrder/requestCallback"),
                ce = "".concat(r, "/webroutes/postOrder/deliveryRating"),
                de = "".concat(r, "/webroutes/postOrder/deliveryFeedback"),
                me = "".concat(r, "/webroutes/postOrder/orderRating"),
                fe = "".concat(r, "/webroutes/postOrder/dishRating"),
                he = "".concat(r, "/webroutes/postOrder/markOrderDelivered"),
                pe = "".concat(r, "/webroutes/user/reviews"),
                ve = "".concat(r, "/webroutes/user/orders"),
                ge = "".concat(r, "/webroutes/user/cdngOrders"),
                Ee = "".concat(r, "/webroutes/user/address"),
                _e = "".concat(r, "/webroutes/user/photos"),
                be = ("".concat(r, "/webroutes/user/bookmarks"), "".concat(r, "/webroutes/user/booking")),
                ye = "".concat(r, "/webroutes/user/network"),
                Ie = "".concat(r, "/webroutes/user/blogs"),
                we = "".concat(r, "/webroutes/order/details"),
                Ae = "".concat(r, "/webroutes/user/booking/info"),
                Te = "".concat(r, "/webroutes/user/coverPhoto"),
                Ze = "".concat(r, "/webroutes/order/markFavorite"),
                Se = "".concat(r, "/webroutes/user/network"),
                Oe = "".concat(r, "/webroutes/user/profilePic"),
                Ce = "".concat(r, "/webroutes/user/deleteProfilePic"),
                Ne = "".concat(r, "/webroutes/user/editProfile"),
                Re = "".concat(r, "/webroutes/order/deleteAddress"),
                Pe = "".concat(r, "/webroutes/order/valid"),
                Le = "".concat(r, "/webroutes/location/search"),
                xe = "".concat(r, "/webroutes/reviews/delete"),
                De = ("".concat(r, "/webroutes/user/notifications"), "".concat(r, "/webroutes/user/deleteAccount")),
                ke = "".concat(r, "/webroutes/zoomBackgrounds/downloadImage"),
                Me = r,
                Ue = "".concat(r, "/webroutes/order/autoVerifyPhone"),
                Ge = "".concat(r, "/webroutes/contactlessDining/submitLeads"),
                qe = "".concat(r, "/webroutes/payment/zpaykitCode"),
                Ve = "".concat(i),
                Fe = "".concat(r, "/webroutes/zomaland/ticket-history"),
                He = "".concat(r, "/ajax_handlers/zomaland/pre_register.php"),
                Be = "".concat(r, "/webroutes/zomaland/submit-contact"),
                je = "".concat(r, "/webroutes/zomaland/get-order"),
                ze = "".concat(r, "/webroutes/zomaland/cancel-ticket"),
                We = "".concat(r, "/php/zomaland/make_payment.php"),
                Ke = "".concat(r, "/php/zomaland/payment_handler.php"),
                Ye = "".concat(r, "/webroutes/contest/vote"),
                Je = "".concat(r, "/webroutes/business/report-fraud"),
                Xe = "".concat(r, "/webroutes/location/get"),
                Qe = "".concat(r, "/webroutes/location/locationGeoData"),
                $e = "".concat(r, "/webapi/searchapi.php"),
                et = ("".concat(r, "/webapi/handlers/Search/index.php"), "".concat(r, "/webroutes/location/search")),
                tt = "".concat(r, "/webroutes/search/autoSuggest"),
                nt = "".concat(r, "/webroutes/search/home"),
                rt = "".concat(r, "/webroutes/search/applyFilter"),
                it = "".concat(r, "/webroutes/book/checkPhoneVerification"),
                ot = "".concat(r, "/webroutes/book/verifyPhone"),
                at = "".concat(r, "/webroutes/book/makeBooking"),
                st = "".concat(r, "/webroutes/book/modifyBooking"),
                ut = "".concat(r, "/webroutes/book/getTimeSlots"),
                lt = "".concat(r, "/webroutes/book/cancelBooking"),
                ct = ("".concat(r, "/webroutes/feeding/getTotalAmount"), "".concat(r, "/webroutes/home/quickLinks")),
                dt = "".concat(r, "/webroutes/cupcake/register"),
                mt = "".concat(r, "/webroutes/dote/home"),
                ft = "".concat(r, "/webroutes/loyalty/submit-contact"),
                ht = "".concat(r, "/webroutes/cdng/fetchQRData"),
                pt = "".concat(r, "/webroutes/postCdng/getOrderDetails"),
                vt = "".concat(r, "/webroutes/cdng/reviewOrder"),
                gt = "".concat(r, "/webroutes/cdng/sendOrder"),
                Et = "".concat(r, "/webroutes/cdng/callServer"),
                _t = "".concat(r, "/webroutes/cdng/getCallServerState"),
                bt = "".concat(r, "/webroutes/cdng/getDiningCart"),
                yt = "".concat(r, "/webroutes/cdng/makePayment"),
                It = "".concat(r, "/webroutes/cdng/getTransactionStatus"),
                wt = "".concat(r, "/webroutes/cdng/invalidateUserVisit"),
                At = "".concat(r, "/webroutes/partnerships/validateUser"),
                Tt = "".concat(r, "/webroutes/partnerships/loginV2"),
                Zt = "".concat(r, "/webroutes/home/o2quickLinks"),
                St = "".concat(r, "/webroutes/partnerships/verify-payment-status"),
                Ot = "".concat(r, "/webroutes/partnerships/complete-payment"),
                Ct = "".concat(o, "/gw/web/user/notification_preferences")
        },
        iFif: (e, t, n) => {
            "use strict";
            n.d(t, {
                dZ: () => r,
                uf: () => i,
                RL: () => o,
                IF: () => a,
                G2: () => s,
                iw: () => u
            });
            var r = {
                    ZTRACKING: "ztracking",
                    JADTRACKING: "jadtracking",
                    JADTRACKING_SERVES: "jadtracking_serves",
                    JEVENT: "jevent",
                    ZSEARCH_EVENTS_LOG: "zsearch_events_log",
                    UTMTRACKING: "utm_tracking"
                },
                i = 6,
                o = {
                    ENAME: "ename",
                    VAR1: "var1",
                    VAR2: "var2",
                    VAR3: "var3",
                    VAR4: "var4",
                    VAR5: "var5",
                    VAR6: "var6"
                },
                a = {
                    GPAY: "gpay",
                    NORMAL: "normal"
                },
                s = "add to cart",
                u = {
                    MOBILE: "Mobile",
                    DESKTOP: "Desktop"
                }
        },
        "rqX/": (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => i
            });
            var r = n("zqKt"),
                i = function(e, t) {
                    r.Z.getInstance().sendToJumbo(e, t)
                }
        },
        Ar8T: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => s
            });
            var r = n("VTBJ"),
                i = n("rqX/"),
                o = n("iFif"),
                a = n("P62M"),
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = {
                            ename: e
                        },
                        s = {};
                    (0, a.Of)(t) && (t.forEach((function(e, t) {
                        var r = e;
                        t < o.uf ? (e && "string" != typeof e && (r = JSON.stringify(e)), n["var".concat(t + 1)] = r) : s["var".concat(t + 1)] = r
                    })), t.length > o.uf && (n.var6 = JSON.stringify((0, r.Z)({
                        var6: n.var6
                    }, s)))), (0, i.m)(o.dZ.JEVENT, n)
                }
        },
        B8dP: (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => a
            });
            var r = n("rePB"),
                i = n("zqKt"),
                o = n("iFif"),
                a = function(e) {
                    var t = e.name,
                        n = void 0 === t ? "" : t,
                        a = e.pageName,
                        s = void 0 === a ? "" : a,
                        u = e.value,
                        l = e.platform,
                        c = void 0 === l ? "" : l,
                        d = e.appType,
                        m = void 0 === d ? "" : d,
                        f = e.downlink,
                        h = void 0 === f ? 0 : f,
                        p = e.effectiveType,
                        v = void 0 === p ? "" : p;
                    if (n && s && u) {
                        var g, E = i.Z.getInstance(),
                            _ = (g = {}, (0, r.Z)(g, o.RL.ENAME, "new_web_performance_metric"), (0, r.Z)(g, o.RL.VAR1, n), (0, r.Z)(g, o.RL.VAR2, s), (0, r.Z)(g, o.RL.VAR3, u), (0, r.Z)(g, o.RL.VAR4, c), (0, r.Z)(g, o.RL.VAR5, JSON.stringify({
                                downlink: h,
                                effectiveType: v
                            })), (0, r.Z)(g, o.RL.VAR6, JSON.stringify({
                                appType: m || o.IF.NORMAL
                            })), g);
                        E.sendToJumbo(o.dZ.JEVENT, _)
                    }
                }
        },
        gwKh: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => s
            });
            var r, i = n("rePB"),
                o = n("VAjR"),
                a = (r = {}, (0, i.Z)(r, o.lX, "res_info"), (0, i.Z)(r, o.sk, "res_menus"), (0, i.Z)(r, o.yg, "res_photos"), (0, i.Z)(r, o.th, "res_reviews"), (0, i.Z)(r, o.FP, "res_events"), (0, i.Z)(r, o.kl, "order"), (0, i.Z)(r, o.v6, "res_daily_menus"), r),
                s = function(e) {
                    return a[e] || ""
                }
        },
        iWs2: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = function(e, t, n, r) {
                return {
                    enableCloseOnBack: e,
                    isOpen: t,
                    closeModal: n,
                    pageUrl: r
                }
            }
        },
        fyQP: (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => v,
                Z: () => g
            });
            var r = n("rePB"),
                i = n("zqKt"),
                o = n("7EGn"),
                a = n("fujP"),
                s = n("iFif"),
                u = n("Wc2h"),
                l = n("VAjR"),
                c = {
                    LOGIN_SCREEN: "ZomatoWebLoginPageLoaded",
                    OTP_SCREEN: "ZomatoWebOTPLoaded",
                    MULTI_ACCOUNT_SCREEN: "ZomatoWebMultiAccountLoaded",
                    CREATE_ACCOUNT_SCREEN: "ZomatoWebSignupPageLoaded",
                    PHONE_CREATE_ACCOUNT_SCREEN: "ZomatoWebPhoneSignupPageLoaded"
                },
                d = {
                    SEND_LOGIN_OTP: "ZomatoWebLoginPageTap",
                    CREATE_ACCOUNT: "ZomatoWebSignupPageTap",
                    ACCOUNT_LINK: "ZomatoWebAccountLinkPageTap",
                    PHONE_CREATE_ACCOUNT: "ZomatoWebPhoneSignupPageTap"
                },
                m = {
                    login: "ZomatoWebSigninSuccess",
                    signup: "ZomatoWebSignupSuccess"
                },
                f = "create account",
                h = "continue with google",
                p = "create account button",
                v = function(e, t) {
                    var n, v, g = i.Z.getInstance(),
                        E = t.action,
                        _ = void 0 === E ? "" : E,
                        b = t.screen,
                        y = void 0 === b ? "" : b,
                        I = t.method,
                        w = void 0 === I ? "" : I,
                        A = t.flow,
                        T = void 0 === A ? "" : A,
                        Z = t.success,
                        S = void 0 === Z ? "false" : Z,
                        O = t.message,
                        C = void 0 === O ? "" : O,
                        N = e.name,
                        R = void 0 === N ? "" : N,
                        P = {},
                        L = {};
                    switch (_) {
                        case "SCREEN_LOADED_ACTION":
                            if ((0, o.default)(c, y, "")) {
                                var x, D = t.pageOpenSource,
                                    k = void 0 === D ? "" : D;
                                x = {}, (0, r.Z)(x, s.RL.ENAME, (0, o.default)(c, y, "")), (0, r.Z)(x, s.RL.VAR1, R), (0, r.Z)(x, s.RL.VAR2, T), (0, r.Z)(x, s.RL.VAR3, w), (0, r.Z)(x, s.RL.VAR6, k), P = x
                            }
                            break;
                        case "OTP_ENTERED":
                            var M = t.pageOpenSource,
                                U = void 0 === M ? "" : M;
                            n = {}, (0, r.Z)(n, s.RL.ENAME, "ZomatoWebOTPEntered"), (0, r.Z)(n, s.RL.VAR1, R), (0, r.Z)(n, s.RL.VAR2, T), (0, r.Z)(n, s.RL.VAR3, w), (0, r.Z)(n, s.RL.VAR4, S), (0, r.Z)(n, s.RL.VAR5, C), (0, r.Z)(n, s.RL.VAR6, U), P = n;
                            break;
                        case "TAP_BUTTON":
                            var G, q = t.tapButtonName,
                                V = void 0 === q ? "" : q,
                                F = t.type,
                                H = void 0 === F ? "" : F;
                            if ("CREATE_ACCOUNT" === H && R === l.c_ && (L = {
                                    eventCategory: f,
                                    eventAction: u.m1.CLICK,
                                    eventLabel: p
                                }), (0, o.default)(d, H, "")) G = {}, (0, r.Z)(G, s.RL.ENAME, (0, o.default)(d, H, "")), (0, r.Z)(G, s.RL.VAR1, R), (0, r.Z)(G, s.RL.VAR2, V), (0, r.Z)(G, s.RL.VAR3, w), (0, r.Z)(G, s.RL.VAR4, S), (0, r.Z)(G, s.RL.VAR5, C), P = G;
                            break;
                        case "GOOGLE_SIGN_IN":
                            R === l.c_ && "signup" === T && (L = {
                                eventCategory: f,
                                eventAction: u.m1.CLICK,
                                eventLabel: h
                            });
                            var B = S ? "GoogleSigninSuccess" : "GoogleSigninFailed";
                            v = {}, (0, r.Z)(v, s.RL.ENAME, B), (0, r.Z)(v, s.RL.VAR1, R), (0, r.Z)(v, s.RL.VAR2, T), (0, r.Z)(v, s.RL.VAR3, C), P = v;
                            break;
                        case "SUCCESS_CALLBACK_ACTION":
                            var j;
                            if ((0, o.default)(m, T, "")) j = {}, (0, r.Z)(j, s.RL.ENAME, (0, o.default)(m, T, "")), (0, r.Z)(j, s.RL.VAR1, R), P = j
                    }(0, a.default)(P) || g.sendToJumbo(s.dZ.JEVENT, P), (0, a.default)(L) || (0, u._k)(L)
                },
                g = function(e, t) {
                    var n = t.action,
                        r = void 0 === n ? "" : n,
                        i = t.flow,
                        a = void 0 === i ? "" : i;
                    switch (r) {
                        case "SCREEN_LOADED_ACTION":
                            if ("login" === a) {
                                var s = (0, o.default)(e, "googleAdsPayload.loginClick", "");
                                s && (0, u.KU)(s)
                            } else if ("signup" === a) {
                                var l = (0, o.default)(e, "googleAdsPayload.signupClick", "");
                                l && (0, u.KU)(l)
                            }
                            break;
                        case "SUCCESS_CALLBACK_ACTION":
                            if ("signup" === a) {
                                var c = (0, o.default)(e, "googleAdsPayload.signupSuccess", "");
                                c && (0, u.KU)(c)
                            }
                    }
                }
        },
        fMrO: (e, t, n) => {
            "use strict";
            n.d(t, {
                _: () => o
            });
            var r = n("7EGn"),
                i = n("VAjR"),
                o = function(e) {
                    var t = (0, r.default)(e, "pages.current.name", ""),
                        n = (0, r.default)(e, "pages.current.pageUrl", ""),
                        o = (0, r.default)(e, "pages.current.cityId", 0),
                        a = (0, r.default)(e, "pages.current.resId", 0),
                        s = (0, r.default)(e, "pages.current.userId", 0),
                        u = (0, r.default)(e, "pages.current.skuId", 0),
                        l = {};
                    switch (t) {
                        case i.mo:
                            l = (0, r.default)(e, "pages.".concat(t, ".").concat(n, ".trackingDataLogin"));
                            break;
                        case i.Or:
                            l = (0, r.default)(e, "pages.".concat(t, ".").concat(o, ".trackingDataLogin"));
                            break;
                        case i.lX:
                            l = (0, r.default)(e, "pages.".concat(t, ".").concat(a, ".trackingDataLogin"));
                            break;
                        case i.c_:
                            l = (0, r.default)(e, "pages.orderOnline.trackingDataLogin");
                            break;
                        case i.xR:
                            l = (0, r.default)(e, "pages.".concat(t, ".").concat(s, ".trackingDataLogin"));
                            break;
                        case i.Q9:
                            l = (0, r.default)(e, "pages.dotePdp.".concat(u, ".trackingDataLogin"));
                            break;
                        case i.KT:
                            l = (0, r.default)(e, "pages.doteHome.trackingDataLogin")
                    }
                    return l
                }
        },
        "5h7m": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("q1tI");
            const i = function(e) {
                var t = e.isOpen,
                    n = e.modalRef,
                    i = e.path,
                    o = e.isEnabled,
                    a = (0, r.useRef)(!0);
                (0, r.useEffect)((function() {
                    var e, r;
                    return t && o && (r = function(e) {
                            e && e.preventDefault(), !0 === a.current && (a.current = !1, window.history.pushState({
                                url: i
                            }, null, i)), n && n.current && "function" == typeof n.current.loginModalClose && n.current.loginModalClose()
                        }, e = window.onpopstate, window.onpopstate = r, window.history.pushState({
                            url: i
                        }, null, i)),
                        function() {
                            window.onpopstate === r && (window.onpopstate = function() {
                                window.onpopstate = e
                            }, window.history.back())
                        }
                }), [t, n, o])
            }
        },
        "5wsu": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n("q1tI"),
                i = n("B5+Q");
            const o = function(e) {
                return function(t) {
                    return (0, r.useEffect)((function() {
                        (0, i.Z)()
                    }), []), r.createElement(e, t)
                }
            }
        },
        KtWY: (e, t, n) => {
            "use strict";
            var r = n("q1tI"),
                i = n("i8i4"),
                o = n("rid2"),
                a = n("SNoJ"),
                s = n("MKeS"),
                u = n("NsBr"),
                l = n("A6yj"),
                c = n("ocwp"),
                d = n("7EGn");
            const m = function(e, t, n, r, i, o, a, s, u) {
                for (var l = !0, c = !1, d = 0; d < document.scripts.length; d++)
                    if (document.scripts[d].src.indexOf(a) > -1) {
                        l = !("no" === document.scripts[d].getAttribute("data-lazy"));
                        break
                    }
                var m = !1,
                    f = [],
                    h = function e(t) {
                        (t.e || t.p || t.f && t.f.indexOf("capture") > -1 || t.f && t.f.indexOf("showReportDialog") > -1) && l && p(f), e.data.push(t)
                    };

                function p(a) {
                    if (!m) {
                        m = !0;
                        var l = t.getElementsByTagName(n)[0],
                            c = t.createElement(n);
                        c.src = s, c.setAttribute("crossorigin", "anonymous"), c.addEventListener("load", (function() {
                            try {
                                e[r] = v, e[i] = g;
                                var t = e[o],
                                    n = t.init;
                                t.init = function(e) {
                                        var t = u;
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                        n(t)
                                    },
                                    function(t, n) {
                                        try {
                                            for (var o = h.data, a = 0; a < t.length; a++) "function" == typeof t[a] && t[a]();
                                            var s = !1,
                                                u = e.__SENTRY__;
                                            void 0 !== u && u.hub && u.hub.getClient() && (s = !0);
                                            var l = !1;
                                            for (a = 0; a < o.length; a++)
                                                if (o[a].f) {
                                                    l = !0;
                                                    var c = o[a];
                                                    !1 === s && "init" !== c.f && n.init(), s = !0, n[c.f].apply(n, c.a)
                                                }!1 === s && !1 === l && n.init();
                                            var d = e[r],
                                                m = e[i];
                                            for (a = 0; a < o.length; a++) o[a].e && d ? d.apply(e, o[a].e) : o[a].p && m && m.apply(e, [o[a].p])
                                        } catch (e) {}
                                    }(a, t)
                            } catch (e) {}
                        })), l.parentNode.insertBefore(c, l)
                    }
                }
                h.data = [], e[o] = e[o] || {}, e[o].onLoad = function(e) {
                    f.push(e), l && !c || p(f)
                }, e[o].forceLoad = function() {
                    c = !0, l && setTimeout((function() {
                        p(f)
                    }))
                }, ["init", "addBreadcrumb", "captureMessage", "captureException", "captureEvent", "configureScope", "withScope", "showReportDialog"].forEach((function(t) {
                    e[o][t] = function() {
                        h({
                            f: t,
                            a: arguments
                        })
                    }
                }));
                var v = e[r];
                e[r] = function(t, n, r, i, o) {
                    h({
                        e: [].slice.call(arguments)
                    }), v && v.apply(e, arguments)
                };
                var g = e[i];
                e[i] = function(t) {
                    h({
                        p: t.reason
                    }), g && g.apply(e, arguments)
                }, l || setTimeout((function() {
                    p(f)
                }))
            };
            var f, h, p, v = {
                    url: "https://browser.sentry-cdn.com/5.6.1/bundle.min.js",
                    dsn: "https://1c6f02b6fef24467b6790bd3ebe41c4d@sentry.zomato.com/52",
                    publicKey: "1c6f02b6fef24467b6790bd3ebe41c4d"
                },
                g = {
                    url: "https://browser.sentry-cdn.com/5.6.1/bundle.min.js",
                    dsn: "https://942bccb3a53742318f88a5bf3d8c5a89@sentry.zomato.com/158",
                    publicKey: "942bccb3a53742318f88a5bf3d8c5a89"
                },
                E = n("WHL/"),
                _ = n("G2Un"),
                b = n("KFCZ"),
                y = n("alT1");
            f = y.h, h = f.getState(), p = (0, E.ZP)((0, d.default)(h, "pages.current.name", !1)) ? g : v, m(window, document, "script", "onerror", "onunhandledrejection", "Sentry", p.publicKey, p.url, {
                    dsn: p.dsn,
                    release: "2462"
                }), n.p = window.publicPath || "/web/", (0, u.default)(), (0, _.Kg)(y.h), b.Z.setClientFromStore(y.h),
                function(e) {
                    var t = e.getState(),
                        n = t.pages.current,
                        r = (n = void 0 === n ? {} : n).pageUrl,
                        i = void 0 === r ? window.location.pathname : r,
                        o = n.isMobile,
                        a = void 0 === o ? 0 : o,
                        s = t.pageConfig,
                        u = (s = void 0 === s ? {} : s).cacheMeta,
                        c = (u = void 0 === u ? {} : u).cacheable;
                    if (void 0 !== c && c) {
                        var d = window.location.pathname + window.location.search;
                        window.history.replaceState({
                            url: d
                        }, "", d)
                    } else window.history.replaceState({
                        url: i
                    }, "", i);
                    window.onpopstate = function(t) {
                        var n = t.state,
                            r = void 0 === n ? {} : n,
                            i = r && r.url ? r.url : "";
                        i ? (0, l.ij)(e.dispatch, i, "", !1, a) : window.location.reload()
                    }
                }(y.h), (0, s.TA)((function() {
                    var e = document.querySelector("#root");
                    (0, i.hydrate)(r.createElement(o.B, null, r.createElement(a.zt, {
                        store: y.h
                    }, r.createElement(c.Z, null))), e)
                }))
        },
        FaQd: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r, i, o, a = n("h4VS"),
                s = n("q1tI"),
                u = n("BAyj"),
                l = n("vOnD"),
                c = n("2fHp"),
                d = n("kCs9"),
                m = (0, l.default)(u.default)(r || (r = (0, a.Z)(["\n  height: 64px;\n  width: 600px;\n  border-radius: 8px;\n  margin-top: 100px;\n  margin-bottom: 15px;\n\n  @media (max-width: 768px) {\n    margin-top: 75px;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75px;\n  }\n"]))),
                f = (0, l.default)(u.default)(i || (i = (0, a.Z)(["\n  height: 20px;\n  width: 700px;\n  border-radius: 8px;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 60px;\n    width: 80%;\n    margin-bottom: 25px;\n    margin: auto;\n  }\n"]))),
                h = (0, l.default)(u.default)(o || (o = (0, a.Z)(["\n  height: 520px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 280px;\n    margin-bottom: 25px;\n  }\n"])));
            const p = function() {
                return s.createElement(s.Fragment, null, s.createElement(d.Z, null), s.createElement(c.default, null, s.createElement(m, null), s.createElement(f, null), s.createElement(h, null)))
            }
        },
        LP7x: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r, i, o = n("h4VS"),
                a = n("q1tI"),
                s = n("vOnD"),
                u = n("BAyj"),
                l = s.default.div(r || (r = (0, o.Z)(["\n  margin-bottom: 100px;\n  height: 80vh;\n  width: 100vw;\n  position: relative;\n"]))),
                c = s.default.div(i || (i = (0, o.Z)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 57.17%,\n      rgba(0, 0, 0, 0.46) 100%\n    ),\n    rgba(0, 0, 0, 0.6);\n"])));
            const d = function() {
                return a.createElement(l, null, a.createElement(u.default, {
                    height: "100%",
                    width: "100%"
                }), a.createElement(c, null))
            }
        },
        "58Ml": (e, t, n) => {
            "use strict";
            n.d(t, {
                qL: () => r,
                RO: () => i,
                sk: () => o,
                Qx: () => a,
                $L: () => s,
                qW: () => u,
                EK: () => l,
                N7: () => c
            });
            var r = "welcome",
                i = "scanner",
                o = "menu",
                a = "table_view",
                s = "cart",
                u = "payment_status",
                l = "transaction_status",
                c = [r, i, o, a, s, u, l]
        },
        "9wrz": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r, i, o, a, s, u, l = n("h4VS"),
                c = n("q1tI"),
                d = n("BAyj"),
                m = n("vOnD"),
                f = n("2fHp"),
                h = n("eLLh"),
                p = n("kCs9"),
                v = (0, m.default)(d.default)(r || (r = (0, l.Z)(["\n  height: 44px;\n  width: 600px;\n  border-radius: 8px;\n\n  margin-bottom: 15px;\n\n  @media (max-width: 768px) {\n    width: 70%;\n  }\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                g = (0, m.default)(d.default)(i || (i = (0, l.Z)(["\n  height: 20px;\n  width: 700px;\n  border-radius: 8px;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                E = (0, m.default)(d.default)(o || (o = (0, l.Z)(["\n  height: 254px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 225px;\n    width: 100%;\n  }\n"]))),
                _ = (0, m.default)(d.default)(a || (a = (0, l.Z)(["\n  height: 150px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 150px;\n    width: 100%;\n    display: none;\n  }\n"]))),
                b = (0, m.default)(h.default)(s || (s = (0, l.Z)(["\n  margin-top: 100px;\n\n  @media (max-width: 768px) {\n    margin-top: 75px;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75px;\n  }\n"]))),
                y = (0, m.default)(d.default)(u || (u = (0, l.Z)(["\n  display: none;\n\n  @media (max-width: 480px) {\n    display: inherit;\n    border-radius: 8px;\n    width: 80%;\n    margin: initial;\n    margin-bottom: 25px;\n    height: 36px;\n  }\n"])));
            const I = function() {
                return c.createElement(c.Fragment, null, c.createElement(p.Z, null), c.createElement(f.default, null, c.createElement(b, {
                    gap: 50
                }, c.createElement(h.default.Item, {
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, c.createElement(y, null), c.createElement(E, null)), c.createElement(h.default.Item, {
                    colD: 6,
                    colT: 6,
                    colM: 12
                }, c.createElement(v, null), c.createElement(g, null), c.createElement(_, null)))))
            }
        },
        YrrC: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var r, i, o, a = n("h4VS"),
                s = n("q1tI"),
                u = n("vOnD"),
                l = n("2fHp"),
                c = n("XhtD"),
                d = n("eLLh"),
                m = n("BAyj"),
                f = u.default.p(r || (r = (0, a.Z)([""]))),
                h = (0, u.default)(m.default)(i || (i = (0, a.Z)(["\n  height: 3rem;\n  width: 60%;\n"]))),
                p = (0, u.default)(m.default)(o || (o = (0, a.Z)(["\n  margin-top: 0.5rem;\n  height: 2rem;\n  width: 90%;\n"])));
            const v = function() {
                return s.createElement(f, null, s.createElement(h, null), s.createElement(p, null), s.createElement(p, null))
            };
            var g, E, _ = u.default.section(g || (g = (0, a.Z)([""]))),
                b = (0, u.default)(m.default)(E || (E = (0, a.Z)(["\n  height: 18.5rem;\n  width: 100%;\n  border-radius: 0.6rem;\n  @media (max-width: 480px) {\n    height: 10.5rem;\n  }\n"])));
            const y = function() {
                return s.createElement(_, null, s.createElement(b, null), s.createElement(v, null))
            };
            var I, w = u.default.section(I || (I = (0, a.Z)(["\n  margin-top: 5.5rem;\n"])));
            const A = function() {
                return s.createElement(w, null, s.createElement(d.default, {
                    gap: 15
                }, (0, c.default)(12).map((function(e) {
                    return s.createElement(d.default.Item, {
                        key: e,
                        colD: 4,
                        colT: 6,
                        colM: 6
                    }, s.createElement(y, null))
                }))))
            };
            var T, Z, S = (0, u.default)(m.default)(T || (T = (0, a.Z)(["\n  width: 100%;\n  height: 40rem;\n  @media (max-width: 480px) {\n    height: 24rem;\n  }\n"]))),
                O = function e() {
                    return s.createElement(e.Wrapper, null, s.createElement(S, null))
                };
            O.Wrapper = u.default.div(Z || (Z = (0, a.Z)(["\n  width: 100%;\n"])));
            const C = O;
            var N, R, P = (0, u.default)(l.default)(N || (N = (0, a.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 480px) {\n    flex-direction: column-reverse;\n  }\n  @media (max-width: 768px) {\n    max-width: 90%;\n  }\n"]))),
                L = u.default.div(R || (R = (0, a.Z)(["\n  margin: 5rem 0;\n"])));
            const x = function() {
                return s.createElement(P, null, s.createElement(L, null, s.createElement(C, null), s.createElement(A, null)))
            }
        },
        ePP4: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => P
            });
            var r, i, o, a, s, u, l = n("h4VS"),
                c = n("q1tI"),
                d = n("vOnD"),
                m = n("2fHp"),
                f = n("XhtD"),
                h = n("BAyj"),
                p = d.default.p(r || (r = (0, l.Z)(["\n  margin: 1rem auto;\n"]))),
                v = (0, d.default)(h.default)(i || (i = (0, l.Z)(["\n  height: 3rem;\n  width: 40%;\n"]))),
                g = (0, d.default)(h.default)(o || (o = (0, l.Z)(["\n  height: 1.8rem;\n  margin-top: 0.5rem;\n  width: 60%;\n"]))),
                E = d.default.div(a || (a = (0, l.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  align-self: flex-start;\n  min-height: 5.6rem;\n  margin: 1rem auto;\n  width: 100%;\n"]))),
                _ = d.default.div(s || (s = (0, l.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  width: 100%;\n"]))),
                b = (0, d.default)(h.default)(u || (u = (0, l.Z)(["\n  margin: 1.6rem 2.4rem;\n  height: 3rem;\n  width: 15rem;\n"])));
            const y = function() {
                return c.createElement(p, null, c.createElement(v, null), c.createElement(g, null), c.createElement(E, null, c.createElement(_, null, (0, f.default)(3).map((function(e) {
                    return c.createElement(b, {
                        key: e
                    })
                })))))
            };
            var I, w, A = n("eLLh"),
                T = d.default.p(I || (I = (0, l.Z)([""]))),
                Z = (0, d.default)(h.default)(w || (w = (0, l.Z)(["\n  height: 21rem;\n  width: 100%;\n  border-radius: 0.6rem;\n"])));
            const S = function() {
                return c.createElement(T, null, c.createElement(A.default, {
                    gap: 20
                }, (0, f.default)(9).map((function(e) {
                    return c.createElement(A.default.Item, {
                        key: e,
                        colD: 4,
                        colT: 6,
                        colM: 6
                    }, c.createElement(Z, null))
                }))))
            };
            var O, C, N = (0, d.default)(m.default)(O || (O = (0, l.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 480px) {\n    flex-direction: column-reverse;\n  }\n  @media (max-width: 768px) {\n    max-width: 90%;\n  }\n"]))),
                R = d.default.div(C || (C = (0, l.Z)(["\n  margin: 5rem 0;\n"])));
            const P = function() {
                return c.createElement(N, null, c.createElement(R, null, c.createElement(y, null), c.createElement(S, null)))
            }
        },
        U0QK: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r, i, o, a, s, u, l = n("h4VS"),
                c = n("q1tI"),
                d = n("vOnD"),
                m = n("Ph1n"),
                f = n("BAyj"),
                h = function() {
                    return c.createElement(g, null, c.createElement(b, {
                        height: "15.2rem",
                        width: "20.8rem"
                    }), c.createElement(b, {
                        height: "2.2rem",
                        width: "8rem",
                        margin: "0.7rem 0 0.4rem"
                    }), c.createElement(b, {
                        height: "1.6rem",
                        width: "16rem"
                    }))
                };
            const p = function() {
                return c.createElement(v, null, c.createElement(b, {
                    height: "24rem",
                    width: "100%"
                }), c.createElement(_, null, c.createElement(b, {
                    height: "1.9rem",
                    width: "100%",
                    margin: "0.3rem 0"
                }), c.createElement(b, {
                    height: "1.9rem",
                    width: "100%",
                    margin: "0.3rem 0"
                }), c.createElement(b, {
                    height: "1.9rem",
                    width: "100%",
                    margin: "0.3rem 0"
                })), c.createElement(m.default, {
                    gap: 12
                }, c.createElement(m.default.Item, {
                    colD: 4,
                    colT: 4,
                    colM: 4
                }, c.createElement(b, {
                    height: "9.6rem",
                    width: "10.9rem",
                    margin: "0.5rem 0 1rem"
                })), c.createElement(m.default.Item, {
                    colD: 4,
                    colT: 4,
                    colM: 4
                }, c.createElement(b, {
                    height: "9.6rem",
                    width: "10.9rem",
                    margin: "0.5rem 0 1rem"
                })), c.createElement(m.default.Item, {
                    colD: 4,
                    colT: 4,
                    colM: 4
                }, c.createElement(b, {
                    height: "9.6rem",
                    width: "10.9rem",
                    margin: "0.5rem 0 1rem"
                }))), c.createElement(b, {
                    height: "2.1rem",
                    width: "17rem",
                    margin: "2.5rem 0 1.6rem"
                }), c.createElement(E, null, c.createElement(h, null), c.createElement(h, null)))
            };
            var v = d.default.div(r || (r = (0, l.Z)(["\n  width: 100%;\n  padding: 1.2rem 1.2rem 5rem;\n"]))),
                g = d.default.div(i || (i = (0, l.Z)(["\n  margin-right: 1.2rem;\n"]))),
                E = d.default.div(o || (o = (0, l.Z)(["\n  display: flex;\n  align-items: center;\n"]))),
                _ = d.default.div(a || (a = (0, l.Z)(["\n  margin: 0.8rem 0;\n"]))),
                b = (0, d.default)(f.default)(s || (s = (0, l.Z)(["\n  margin: ", ";\n  ", ";\n"])), (function(e) {
                    return e.margin || 0
                }), (function(e) {
                    return !e.isCircle && (0, d.css)(u || (u = (0, l.Z)(["\n      border-radius: 0.4rem;\n    "])))
                }))
        },
        "jFW/": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r, i, o, a, s, u, l, c, d = n("h4VS"),
                m = n("q1tI"),
                f = n("vOnD"),
                h = n("BAyj"),
                p = n("wy32"),
                v = function() {
                    return m.createElement(I, null, m.createElement(A, {
                        height: "7.5rem",
                        width: "7.5rem",
                        margin: "0 1.2rem 0 0"
                    }), m.createElement("div", null, m.createElement(A, {
                        height: "2rem",
                        width: "10rem",
                        margin: "0.5rem 0 0.8rem"
                    }), m.createElement(A, {
                        height: "1.8rem",
                        width: "15rem"
                    }), m.createElement(A, {
                        height: "2rem",
                        width: "100%",
                        margin: "0.7rem 0 1.5rem"
                    })))
                };
            const g = function() {
                return m.createElement(_, null, m.createElement(A, {
                    height: "24rem",
                    width: "100%"
                }), m.createElement(w, null, m.createElement(A, {
                    height: "1.7rem",
                    width: "15rem",
                    margin: "0.3rem 0 0"
                }), m.createElement(A, {
                    height: "2.5rem",
                    width: "20rem",
                    margin: "0.6rem 0 0.5rem"
                }), m.createElement(A, {
                    height: "1.4rem",
                    width: "100%",
                    margin: "0.4rem 0"
                }), m.createElement(A, {
                    height: "1.4rem",
                    width: "100%",
                    margin: "0.4rem 0"
                })), m.createElement(b, null, m.createElement(y, {
                    height: "2.4rem",
                    width: "2.4rem"
                }), m.createElement(A, {
                    height: "1.4rem",
                    width: "17rem"
                })), m.createElement(p._n, null), m.createElement(E, null, m.createElement("div", null, m.createElement(A, {
                    height: "1.7rem",
                    width: "10rem",
                    margin: "0 0 0.4rem"
                }), m.createElement(A, {
                    height: "1.5rem",
                    width: "15rem"
                })), m.createElement(A, {
                    height: "4.4rem",
                    width: "15rem"
                })), m.createElement(p.zN, null), m.createElement(A, {
                    height: "2.1rem",
                    width: "17rem",
                    margin: "0 0 2.2rem"
                }), m.createElement(v, null), m.createElement(p._n, null), m.createElement(v, null))
            };
            var E = f.default.div(r || (r = (0, d.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),
                _ = f.default.div(i || (i = (0, d.Z)(["\n  width: 100%;\n  padding: 1.2rem 1.2rem 5rem;\n"]))),
                b = f.default.div(o || (o = (0, d.Z)(["\n  margin-top: 0.8rem;\n  display: flex;\n  align-items: center;\n"]))),
                y = (0, f.default)(h.default)(a || (a = (0, d.Z)(["\n  border-radius: 50%;\n  margin-right: 0.8rem;\n"]))),
                I = f.default.div(s || (s = (0, d.Z)(["\n  display: flex;\n  margin-top: 2rem;\n"]))),
                w = f.default.div(u || (u = (0, d.Z)(["\n  margin: 0.8rem 0;\n"]))),
                A = (0, f.default)(h.default)(l || (l = (0, d.Z)(["\n  margin: ", ";\n  ", ";\n"])), (function(e) {
                    return e.margin || 0
                }), (function(e) {
                    return !e.isCircle && (0, f.css)(c || (c = (0, d.Z)(["\n      border-radius: 0.4rem;\n    "])))
                }))
        },
        wy32: (e, t, n) => {
            "use strict";
            n.d(t, {
                _n: () => h,
                gn: () => p,
                S0: () => v,
                zN: () => g,
                S5: () => E
            });
            var r, i, o, a, s, u, l = n("h4VS"),
                c = n("vOnD"),
                d = n("HMsx"),
                m = n("wcxm"),
                f = c.default.div(r || (r = (0, l.Z)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"])), d.default.z200),
                h = (0, c.default)(f)(i || (i = (0, l.Z)(["\n  margin: 1.6rem 0 1.2rem;\n"]))),
                p = c.default.div(o || (o = (0, l.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),
                v = (0, c.default)(m.P)(a || (a = (0, l.Z)(["\n  font-size: 1.6rem;\n  font-weight: 600;\n"]))),
                g = (0, c.default)(f)(s || (s = (0, l.Z)(["\n  margin: 1.2rem 0 2.4rem;\n"]))),
                E = (0, c.default)(m.P)(u || (u = (0, l.Z)(["\n  font-size: 1.5rem;\n  text-decoration: line-through;\n  margin-right: 0.5rem;\n"])))
        },
        "/TPN": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r, i, o = n("h4VS"),
                a = n("q1tI"),
                s = n("vOnD"),
                u = n("eLLh"),
                l = n("2fHp"),
                c = n("KKt4"),
                d = (0, s.default)(l.default)(r || (r = (0, o.Z)(["\n  margin-top: 10rem;\n\n  @media (max-width: 768px) {\n    margin-top: 7.5rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 7.5rem;\n  }\n"]))),
                m = (0, s.default)(c.Z)(i || (i = (0, o.Z)(["\n  border-radius: 8px;\n"])));
            const f = function() {
                return a.createElement(a.Fragment, null, a.createElement(c.Z, {
                    height: "300"
                }), a.createElement(d, null, a.createElement(u.default, {
                    gap: 30
                }, a.createElement(u.default.Item, {
                    colD: 4,
                    colT: 5,
                    colM: 12
                }, a.createElement(m, {
                    height: "20rem"
                })), a.createElement(u.default.Item, {
                    colD: 8,
                    colT: 7,
                    colM: 12
                }, a.createElement(m, {
                    height: "50rem"
                })))))
            }
        },
        "9GJC": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r, i = n("h4VS"),
                o = n("q1tI"),
                a = n("2fHp"),
                s = n("vOnD"),
                u = n("kCs9"),
                l = n("wx14"),
                c = n("BAyj"),
                d = n("17x9"),
                m = n.n(d),
                f = (0, s.default)(c.default)(r || (r = (0, i.Z)(["\n  border-radius: ", ";\n  margin-bottom: 16px;\n"])), (function(e) {
                    return e.radius ? e.radius : 0
                })),
                h = function(e) {
                    var t = e.radius,
                        n = void 0 === t ? 0 : t;
                    return o.createElement(f, (0, l.Z)({}, e, {
                        radius: n
                    }))
                };
            h.defaultProps = {
                radius: 0
            }, h.propTypes = {
                radius: m().string
            };
            const p = h;
            var v, g, E = n("KKt4"),
                _ = (0, s.default)(p)(v || (v = (0, i.Z)(["\n  width: 500;\n  height: 40px;\n\n  @media (max-width: 768px) {\n    height: 36px;\n  }\n\n  @media (max-width: 480px) {\n    height: 30px;\n  }\n"]))),
                b = (0, s.default)(a.default)(g || (g = (0, i.Z)(["\n  margin-top: 100;\n  margin-bottom: 100;\n  @media (max-width: 768px) {\n    margin-top: 75;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75;\n  }\n"])));
            const y = function() {
                return o.createElement(o.Fragment, null, o.createElement(u.Z, null), o.createElement(b, null, o.createElement(_, {
                    radius: 16
                }), o.createElement(E.Z, {
                    height: "200px"
                })))
            }
        },
        v3cd: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r, i, o, a, s = n("q1tI"),
                u = n("kCs9"),
                l = n("h4VS"),
                c = n("BAyj"),
                d = n("2fHp"),
                m = n("eLLh"),
                f = n("vOnD"),
                h = (0, f.default)(d.default)(r || (r = (0, l.Z)(["\n  margin-top: 40px;\n  @media (max-width: 768px) {\n    margin-top: 40px;\n  }\n  @media (max-width: 480px) {\n    margin-top: 40px;\n  }\n"]))),
                p = (0, f.default)(c.default)(i || (i = (0, l.Z)(["\n  width: 100%;\n  height: ", ";\n  border-radius: 8px;\n  margin-bottom: 16px;\n\n  @media (max-width: 768px) {\n    display: ", ";\n  }\n"])), (function(e) {
                    return e.height ? e.height : 100
                }), (function(e) {
                    return e.displayOnTab ? e.displayOnTab : "inherit"
                })),
                v = (0, f.default)(c.default)(o || (o = (0, l.Z)(["\n  height: 50px;\n  width: 100%;\n  border-radius: 8px;\n  margin-bottom: 20px;\n"]))),
                g = (0, f.default)(c.default)(a || (a = (0, l.Z)(["\n  height: 32px;\n  width: 75;\n  border-radius: 8px;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: ", ";\n  }\n"])), (function(e) {
                    return e.displayOnTab ? e.displayOnTab : "inherit"
                }));
            const E = function() {
                return s.createElement(s.Fragment, null, s.createElement(h, null, s.createElement(m.default, {
                    gap: 15
                }, s.createElement(m.default.Item, {
                    colD: 4,
                    colT: 12,
                    colM: 12
                }, s.createElement(p, {
                    height: 300,
                    displayOnTab: "none"
                }), s.createElement(g, {
                    displayOnTab: "inherit"
                })), s.createElement(m.default.Item, {
                    colD: 8,
                    colT: 12,
                    colM: 12
                }, s.createElement(v, null), s.createElement(p, null), s.createElement(p, null), s.createElement(p, null)))))
            };
            const _ = function() {
                return s.createElement(s.Fragment, null, s.createElement(u.Z, null), s.createElement(E, null))
            }
        },
        "0S1l": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r, i, o = n("h4VS"),
                a = n("q1tI"),
                s = n("BAyj"),
                u = n("vOnD"),
                l = (0, u.default)(s.default)(r || (r = (0, o.Z)(["\n  width: 100%;\n  height: 50rem;\n  margin-bottom: 2rem;\n"]))),
                c = (0, u.default)(s.default)(i || (i = (0, o.Z)(["\n  width: 100%;\n  height: 23rem;\n  margin-bottom: 2rem;\n"])));
            const d = function() {
                return a.createElement(a.Fragment, null, a.createElement(l, null), a.createElement(c, null), a.createElement(l, null))
            }
        },
        v7Ez: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r, i, o, a, s, u, l, c, d = n("h4VS"),
                m = n("q1tI"),
                f = n("BAyj"),
                h = n("vOnD"),
                p = n("2fHp"),
                v = n("eLLh"),
                g = (0, h.default)(f.default)(r || (r = (0, d.Z)(["\n  height: 4rem;\n  width: 60%;\n  border-radius: 0.8rem;\n  margin-bottom: 3rem;\n  margin-top: 2rem;\n\n  @media (max-width: 768px) {\n    margin-top: 2rem;\n    height: 4rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 2rem;\n    height: 3.6rem;\n  }\n"]))),
                E = (0, h.default)(p.default)(i || (i = (0, d.Z)([""]))),
                _ = (0, h.default)(f.default)(o || (o = (0, d.Z)(["\n  width: 30rem;\n  height: 2.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.8rem;\n"]))),
                b = (0, h.default)(f.default)(a || (a = (0, d.Z)(["\n  width: 100%;\n  height: 2.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.8rem;\n"]))),
                y = (0, h.default)(f.default)(s || (s = (0, d.Z)(["\n  border-radius: 0.8rem;\n  height: 25rem;\n  width: 100%;\n  margin-bottom: 3rem;\n"]))),
                I = (0, h.default)(f.default)(u || (u = (0, d.Z)(["\n  border-radius: 0.8rem;\n  height: 5rem;\n  width: 100%;\n  margin-bottom: 3rem;\n"]))),
                w = (0, h.default)(f.default)(l || (l = (0, d.Z)(["\n  border-radius: 0.8rem;\n  height: 20rem;\n  width: 100%;\n  margin-bottom: 3rem;\n"]))),
                A = (0, h.default)(v.default)(c || (c = (0, d.Z)(["\n  margin-bottom: 10rem;\n"])));
            const T = function() {
                return m.createElement(m.Fragment, null, m.createElement(E, null, m.createElement(g, null), m.createElement(A, {
                    gap: 20
                }, m.createElement(v.default.Item, {
                    colD: 8,
                    colT: 12,
                    colM: 12
                }, m.createElement(_, null), m.createElement(I, null), m.createElement(_, null), m.createElement(y, null)), m.createElement(v.default.Item, {
                    colD: 4,
                    colT: 12,
                    colM: 12
                }, m.createElement(b, null), m.createElement(y, null), m.createElement(w, null), m.createElement(I, null)))))
            }
        },
        Vyl6: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r, i, o, a, s = n("h4VS"),
                u = n("q1tI"),
                l = n("vOnD"),
                c = n("2fHp"),
                d = n("BAyj"),
                m = n("eLLh"),
                f = n("HMsx"),
                h = l.default.div(r || (r = (0, s.Z)(["\n  margin-bottom: 10rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    margin-top: 2rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 7.5rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .menu-list {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .menu-list.pill-list {\n    margin-bottom: 1.5rem;\n  }\n\n  .tritem {\n    border-radius: 0.8rem;\n    margin-bottom: 1rem;\n  }\n\n  .tritem.sponsored {\n    height: 20rem;\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n\n  .tritem.sponsored-subheading {\n    height: 2.2rem;\n    width: 75%;\n    margin-bottom: 0.5rem;\n  }\n\n  .tritem.sponsored-sub-subheading {\n    height: 1.8rem;\n    width: 60%;\n    margin-bottom: 0.5rem;\n  }\n\n  .pill {\n    height: 3.6rem;\n    border-radius: 1.8rem;\n    width: 100%;\n  }\n\n  .app {\n    margin-bottom: 2rem;\n  }\n\n  .line {\n    margin-top: 0.5rem;\n  }\n\n  .button {\n    border-radius: 0.8rem;\n    margin-right: 1rem;\n  }\n"]))),
                p = l.default.div(i || (i = (0, s.Z)(["\n  flex-grow: 1;\n  margin-right: 2rem;\n"]))),
                v = l.default.div(o || (o = (0, s.Z)(["\n  flex-shrink: 0;\n  width: 35rem;\n  height: 42rem;\n  border: 1px solid ", ";\n  border-radius: 0.8rem;\n  margin-top: 2rem;\n  padding: 1rem;\n"])), f.default.z100),
                g = l.default.div(a || (a = (0, s.Z)(["\n  margin-top: 2rem;\n  display: flex;\n"])));
            const E = function() {
                return u.createElement(c.default, {
                    large: !0
                }, u.createElement(h, null, u.createElement(p, null, u.createElement(d.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "15rem",
                    width: "100%"
                }), u.createElement(m.default, {
                    className: "menu-list",
                    gap: 20
                }, u.createElement(m.default.Item, {
                    colD: 5
                }, u.createElement(d.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                })), u.createElement(m.default.Item, {
                    colD: 5
                }, u.createElement(d.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }), u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }))), u.createElement(d.default, {
                    className: "subheading",
                    height: "6.8rem",
                    width: "100%"
                }), u.createElement(m.default, {
                    className: "menu-list",
                    gap: 20
                }, u.createElement(m.default.Item, {
                    colD: 3
                }, u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                })), u.createElement(m.default.Item, {
                    colD: 3
                }, u.createElement(d.default, {
                    className: "tritem",
                    height: "5rem",
                    width: "100%"
                }))), u.createElement(d.default, {
                    className: "heading",
                    height: "4rem",
                    width: "40rem"
                })), u.createElement(v, null, u.createElement(d.default, {
                    className: "map",
                    width: "100%",
                    height: "15rem"
                }), u.createElement(d.default, {
                    className: "subheading-1",
                    height: "2.8rem"
                }), u.createElement(d.default, {
                    className: "line",
                    width: "100%",
                    height: "1.5rem"
                }), u.createElement(d.default, {
                    className: "line",
                    width: "70%",
                    height: "1.5rem"
                }), u.createElement(g, null, u.createElement(d.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                }), u.createElement(d.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                })))))
            }
        },
        ZysW: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r, i, o, a, s, u, l, c, d, m = n("h4VS"),
                f = n("q1tI"),
                h = n("BAyj"),
                p = n("vOnD"),
                v = n("2fHp"),
                g = n("eLLh"),
                E = (0, p.default)(h.default)(r || (r = (0, m.Z)(["\n  height: 6.4rem;\n  width: 60%;\n  border-radius: 0.8rem;\n  margin-bottom: 1.5rem;\n\n  @media (max-width: 768px) {\n    height: 4rem;\n  }\n\n  @media (max-width: 480px) {\n    height: 3.6rem;\n  }\n"]))),
                _ = (0, p.default)(h.default)(i || (i = (0, m.Z)(["\n  height: 520px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 280px;\n    margin-bottom: 25px;\n  }\n"]))),
                b = (0, p.default)(v.default)(o || (o = (0, m.Z)([""]))),
                y = (0, p.default)(h.default)(a || (a = (0, m.Z)(["\n  width: 30rem;\n  height: 2.5rem;\n  margin-bottom: 4rem;\n"]))),
                I = (0, p.default)(h.default)(s || (s = (0, m.Z)(["\n  width: 100%;\n  height: 2.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.8rem;\n"]))),
                w = (0, p.default)(h.default)(u || (u = (0, m.Z)(["\n  border-radius: 0.8rem;\n  height: 25rem;\n  width: 100%;\n  margin-bottom: 1.5rem;\n"]))),
                A = (0, p.default)(h.default)(l || (l = (0, m.Z)(["\n  border-radius: 0.8rem;\n  height: 15rem;\n  width: 100%;\n  margin-bottom: 1.5rem;\n"]))),
                T = (0, p.default)(h.default)(c || (c = (0, m.Z)(["\n  border-radius: 0.8rem;\n  height: 20rem;\n  width: 100%;\n  margin-bottom: 1.5rem;\n"]))),
                Z = (0, p.default)(g.default)(d || (d = (0, m.Z)(["\n  margin-bottom: 10rem;\n"])));
            const S = function() {
                return f.createElement(f.Fragment, null, f.createElement(b, null, f.createElement(Z, {
                    gap: 20
                }, f.createElement(g.default.Item, {
                    colD: 8,
                    colT: 12,
                    colM: 12
                }, f.createElement(E, null), f.createElement(y, null), f.createElement(_, null)), f.createElement(g.default.Item, {
                    colD: 4,
                    colT: 12,
                    colM: 12
                }, f.createElement(I, null), f.createElement(w, null), f.createElement(A, null), f.createElement(T, null), f.createElement(T, null)))))
            }
        },
        a9dC: (e, t, n) => {
            "use strict";
            n.d(t, {
                t9: () => i,
                YX: () => o,
                mN: () => a,
                BI: () => s,
                i9: () => u,
                bS: () => l,
                QZ: () => c,
                o0: () => d,
                W$: () => m
            });
            var r = n("VTBJ"),
                i = {
                    INITIATE: "GET_CART_INITIATE",
                    SUCCESS: "GET_CART_SUCCESS",
                    FAILED: "GET_CART_FAILED",
                    CLEAR: "GET_CART_CLEAR"
                },
                o = "CALCULATE_CART_SUCCESS_OCCURRED",
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return {
                        type: i.INITIATE,
                        payload: e,
                        gotoPaymentsPage: t
                    }
                },
                s = function(e) {
                    return (0, r.Z)({
                        type: i.SUCCESS
                    }, e)
                },
                u = function(e) {
                    return {
                        type: i.FAILED,
                        cartErrorDetails: e
                    }
                },
                l = function() {
                    return {
                        type: i.CLEAR,
                        payload: {}
                    }
                },
                c = {
                    INITIATE: "INITIALIZE_CALCULATE_CART_INITIATE"
                },
                d = function(e, t) {
                    return {
                        type: c.INITIATE,
                        payload: t,
                        isOrderAboveMinAmount: e
                    }
                },
                m = function(e, t) {
                    return {
                        type: o,
                        resId: e,
                        cartData: t
                    }
                }
        },
        ScDn: (e, t, n) => {
            "use strict";
            n.d(t, {
                EV: () => i,
                cY: () => o,
                lx: () => a,
                t_: () => s,
                g3: () => u,
                c7: () => l,
                js: () => c,
                xl: () => d,
                ko: () => m,
                Oq: () => f,
                qO: () => h,
                vI: () => p,
                OF: () => v,
                GW: () => g,
                qj: () => E,
                dE: () => _,
                wz: () => b,
                nN: () => y,
                qX: () => I,
                do: () => w,
                y$: () => A,
                pl: () => T,
                sD: () => Z,
                qN: () => S,
                mq: () => O,
                Gx: () => C,
                Ts: () => N,
                f$: () => R,
                iW: () => P,
                yR: () => L,
                fK: () => x,
                kN: () => D,
                $C: () => k,
                Vp: () => M,
                RM: () => U,
                ED: () => G,
                xf: () => q,
                Ae: () => V,
                dQ: () => F,
                $D: () => H,
                hC: () => B,
                x9: () => j,
                gc: () => z,
                MR: () => W,
                ui: () => K,
                m: () => Y,
                P3: () => J
            });
            var r = n("VTBJ"),
                i = "UPDATE_REVIEWS",
                o = "LOAD_MORE_PHOTOS",
                a = "SWITCH_GALLERY_TAB",
                s = "POST_RATING",
                u = "POST_REVIEW",
                l = "TOGGLE_BOOKMARK",
                c = "TOGGLE_LIKE_REVIEW",
                d = "ADD_COMMENT_REVIEW",
                m = "ADD_COMMENT_PHOTO",
                f = "DELETE_COMMENT_REVIEW",
                h = "DELETE_COMMENT_PHOTO",
                p = "LOAD_MORE_COMMENTS",
                v = "LOAD_MORE_MANAGEMENT_COMMENTS",
                g = "SET_MENU_IMAGES",
                E = "FOLLOW_REVIEWER",
                _ = "ADD_MENU_ITEM",
                b = "REMOVE_MENU_ITEM",
                y = "UPDATE_PHOTO_LIKE",
                I = "CLEAR_CART",
                w = "UPDATE_LOCAL_STORAGE_CART",
                A = "DELETE_REVIEW",
                T = "REMOVE_ORDER_DATA",
                Z = "UPDATE_RES_SERVICEABILITY",
                S = function(e) {
                    return {
                        type: I,
                        data: e
                    }
                },
                O = function(e) {
                    return {
                        type: _,
                        data: e
                    }
                },
                C = function(e) {
                    return {
                        type: b,
                        data: e
                    }
                },
                N = function(e) {
                    return {
                        type: T,
                        resId: e
                    }
                },
                R = function(e, t) {
                    return (0, r.Z)((0, r.Z)({
                        type: s
                    }, e), {}, {
                        resId: t
                    })
                },
                P = function(e, t) {
                    return (0, r.Z)((0, r.Z)({
                        type: u
                    }, e), {}, {
                        resId: t
                    })
                },
                L = function(e) {
                    return {
                        type: l,
                        data: e
                    }
                },
                x = function(e) {
                    return {
                        type: c,
                        reviewId: e
                    }
                },
                D = function(e, t, n) {
                    return {
                        type: d,
                        commentId: t,
                        reviewId: n,
                        entities: e
                    }
                },
                k = function(e, t) {
                    return {
                        type: y,
                        photoId: e,
                        hasLiked: t
                    }
                },
                M = function(e, t, n) {
                    return {
                        type: m,
                        commentId: t,
                        photoId: n,
                        entities: e
                    }
                },
                U = function(e, t, n) {
                    return {
                        type: "EDIT_COMMENT_REVIEW",
                        commentId: t,
                        reviewId: n,
                        entities: e
                    }
                },
                G = function(e, t, n) {
                    return {
                        type: "EDIT_COMMENT_PHOTO",
                        commentId: t,
                        photoId: n,
                        entities: e
                    }
                },
                q = function(e, t) {
                    return {
                        type: f,
                        commentId: e,
                        reviewId: t
                    }
                },
                V = function(e, t) {
                    return {
                        type: h,
                        commentId: e,
                        photoId: t
                    }
                },
                F = function(e, t, n, r) {
                    return {
                        type: p,
                        reviewId: t,
                        commentIds: n,
                        more: r,
                        entities: e
                    }
                },
                H = function(e, t, n, r) {
                    return {
                        type: v,
                        reviewId: t,
                        commentIds: n,
                        more: r,
                        entities: e
                    }
                },
                B = function(e, t, n) {
                    return {
                        type: i,
                        reviewsData: t,
                        resId: n,
                        entities: e
                    }
                },
                j = function(e, t) {
                    return {
                        type: g,
                        data: e,
                        resId: t
                    }
                },
                z = function(e, t, n, r, i) {
                    return {
                        type: o,
                        entities: e,
                        pageImagesText: t,
                        currentPage: n,
                        photoIds: r,
                        resId: i
                    }
                },
                W = function(e, t, n) {
                    return {
                        type: a,
                        entities: e,
                        galleryData: t,
                        resId: n
                    }
                },
                K = function(e) {
                    return {
                        type: E,
                        reviewId: e
                    }
                },
                Y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return {
                        type: A,
                        reviewId: e,
                        resId: t,
                        userId: n
                    }
                },
                J = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return {
                        type: Z,
                        resId: e,
                        resServiceablity: t
                    }
                }
        },
        "cY/j": (e, t, n) => {
            "use strict";
            n.d(t, {
                lq: () => i,
                hN: () => o,
                Z6: () => a,
                Tj: () => s,
                $W: () => u
            });
            var r = n("7EGn"),
                i = "UPDATE_CART_PROGRESS",
                o = function(e) {
                    var t = e.currentState;
                    return {
                        type: i,
                        currentState: t
                    }
                },
                a = {
                    CART_IDLE: "CART_IDLE",
                    CONTINUE_CLICKED: "CONTINUE_CLICKED",
                    LOGIN_IN_PROGRESS: "LOGIN_IN_PROGRESS",
                    LOGIN_FAILED: "LOGIN_FAILED",
                    LOGIN_SUCCESS: "LOGIN_SUCCESS",
                    PARTNER_LOGIN_FAILED: "PARTNER_LOGIN_FAILED",
                    PARTNER_LOGIN_SUCCESS: "PARTNER_LOGIN_SUCCESS",
                    CART_API_CALLED: "CART_API_CALLED",
                    CART_API_SUCCESS: "CART_API_SUCCESS",
                    CART_API_SUCCESS_CHECKOUT_LOADING: "CART_API_SUCCESS_CHECKOUT_LOADING",
                    CART_API_FAILED: "CART_API_FAILED"
                },
                s = function(e) {
                    return (0, r.default)(e, "pages.orderCartProgress.currentState", "")
                },
                u = function(e) {
                    var t = s(e);
                    return [a.CONTINUE_CLICKED, a.LOGIN_IN_PROGRESS, a.LOGIN_SUCCESS, a.CART_API_CALLED].includes(t)
                }
        },
        qP8M: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n("q1tI"),
                i = n("17x9"),
                o = n.n(i),
                a = n("SNoJ"),
                s = n("7EGn"),
                u = n("NZ+d"),
                l = n("TBd4"),
                c = n("5wsu"),
                d = n("6aLt"),
                m = n("WCUj"),
                f = n("czRw"),
                h = n("en2A"),
                p = n("VAjR"),
                v = function(e) {
                    var t = e.isMobile,
                        n = e.isResHeaderCached;
                    return r.createElement(d.W2, {
                        large: !0
                    }, n ? r.createElement(r.Fragment, null, r.createElement(f.Z, {
                        subType: p.kl
                    }), r.createElement(m.Z, null)) : r.createElement(r.Fragment, null, r.createElement(d.eP, {
                        width: "100%",
                        height: "37rem"
                    }), t ? r.createElement(l.Z, null) : r.createElement(u.Z, null)))
                };
            v.propTypes = {
                isMobile: o().bool,
                isResHeaderCached: o().bool
            }, v.defaultProps = {
                isMobile: !1,
                isResHeaderCached: !1
            };
            const g = (0, a.$j)((function(e) {
                var t = (0, s.default)(e, "pages.current.resId", 0),
                    n = (0, s.default)(e, "pages.restaurant.".concat(t, ".sections"), {});
                return {
                    isResHeaderCached: (0, s.default)((0, s.default)(n, h.r0, {}), "isResHeaderCached", !1)
                }
            }))((0, c.Z)(v))
        },
        "6aLt": (e, t, n) => {
            "use strict";
            n.d(t, {
                W2: () => _,
                eP: () => b
            });
            var r, i, o, a, s, u, l, c, d, m, f, h = n("h4VS"),
                p = n("vOnD"),
                v = n("2fHp"),
                g = n("BAyj"),
                E = n("HMsx"),
                _ = (0, p.default)(v.default)(r || (r = (0, h.Z)(["\n  margin-top: 1rem;\n  padding-bottom: 5rem;\n\n  @media (max-width: 480px) {\n    margin: 0;\n    width: 100%;\n  }\n"]))),
                b = (0, p.default)(g.default)(i || (i = (0, h.Z)(["\n  margin-top: 3.2rem;\n\n  @media (max-width: 480px) {\n    margin-top: 0;\n    height: 25rem;\n  }\n"])));
            p.default.div(o || (o = (0, h.Z)(["\n  @media (max-width: 480px) {\n    margin: 1rem;\n    margin-bottom: 3rem;\n  }\n"]))), (0, p.default)(g.default)(a || (a = (0, h.Z)(["\n  margin-top: 1.4rem;\n\n  @media (max-width: 480px) {\n    margin-top: 1.5rem;\n    height: 2.8rem;\n  }\n"]))), (0, p.default)(g.default)(s || (s = (0, h.Z)(["\n  margin-top: ", ";\n\n  @media (max-width: 480px) {\n    margin-top: ", ";\n    height: 1.8rem;\n  }\n"])), (function(e) {
                return e.topMargin && "1rem"
            }), (function(e) {
                return e.topMargin && "0.5rem"
            })), p.default.div(u || (u = (0, h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), p.default.div(l || (l = (0, h.Z)(["\n  border-radius: 0.6rem;\n  margin: 1.5rem 1rem 1rem 0;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), p.default.div(c || (c = (0, h.Z)(["\n  height: 5.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-bottom: 0.2rem solid ", ";\n  margin-bottom: 0.6rem;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"])), E.default.z100), (0, p.default)(g.default)(d || (d = (0, h.Z)(["\n  margin: 1.3rem 1.8rem 1.9rem;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), p.default.div(m || (m = (0, h.Z)(["\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))), (0, p.default)(g.default)(f || (f = (0, h.Z)(["\n  display: none;\n  @media (max-width: 480px) {\n    display: block;\n    width: 100%;\n    height: 6.6rem;\n    margin: 1rem 0;\n  }\n"])))
        },
        "NZ+d": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r, i, o, a, s = n("h4VS"),
                u = n("q1tI"),
                l = n("vOnD"),
                c = n("BAyj"),
                d = n("eLLh"),
                m = n("HMsx"),
                f = l.default.div(r || (r = (0, s.Z)(["\n  margin-bottom: 10rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 7.5rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .menu-list {\n    margin-bottom: 1rem;\n  }\n\n  .menu-list.pill-list {\n    margin-bottom: 1.5rem;\n  }\n\n  .menu-item {\n    border-radius: 0.8rem;\n  }\n\n  .menu-item.sponsored {\n    height: 20rem;\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n\n  .menu-item.sponsored-subheading {\n    height: 2.2rem;\n    width: 75%;\n    margin-bottom: 0.5rem;\n  }\n\n  .menu-item.sponsored-sub-subheading {\n    height: 1.8rem;\n    width: 60%;\n    margin-bottom: 0.5rem;\n  }\n\n  .pill {\n    height: 3.6rem;\n    border-radius: 1.8rem;\n    width: 100%;\n  }\n\n  .map {\n    margin-bottom: 2rem;\n  }\n\n  .line {\n    margin-top: 0.5rem;\n  }\n\n  .button {\n    border-radius: 0.8rem;\n    margin-right: 1rem;\n  }\n"]))),
                h = l.default.div(i || (i = (0, s.Z)(["\n  flex-grow: 1;\n  margin-right: 2rem;\n"]))),
                p = l.default.div(o || (o = (0, s.Z)(["\n  flex-shrink: 0;\n  width: 35rem;\n  height: 42rem;\n  border: 1px solid ", ";\n  border-radius: 0.8rem;\n  padding: 1rem;\n"])), m.default.z100),
                v = l.default.div(a || (a = (0, s.Z)(["\n  margin-top: 2rem;\n  display: flex;\n"])));
            const g = function() {
                return u.createElement(f, null, u.createElement(h, null, u.createElement(c.default, {
                    className: "heading",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(c.default, {
                    className: "subheading-1",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(d.default, {
                    className: "menu-list",
                    gap: 20
                }, u.createElement(d.default.Item, {
                    colD: 4
                }, u.createElement(c.default, {
                    className: "menu-item",
                    height: "21rem",
                    width: "22rem"
                })), u.createElement(d.default.Item, {
                    colD: 4
                }, u.createElement(c.default, {
                    className: "menu-item",
                    height: "21rem",
                    width: "22rem"
                })), u.createElement(d.default.Item, {
                    colD: 4
                }, u.createElement(c.default, {
                    className: "menu-item",
                    height: "21rem",
                    width: "22rem"
                }))), u.createElement(c.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(d.default, {
                    className: "menu-list pill-list",
                    gap: 10
                }, u.createElement(d.default.Item, {
                    colD: 2
                }, u.createElement(c.default, {
                    className: "pill"
                })), u.createElement(d.default.Item, {
                    colD: 2
                }, u.createElement(c.default, {
                    className: "pill"
                })), u.createElement(d.default.Item, {
                    colD: 2
                }, u.createElement(c.default, {
                    className: "pill"
                }))), u.createElement(c.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), u.createElement(d.default, {
                    className: "menu-list",
                    gap: 15
                }, u.createElement(d.default.Item, {
                    colD: 6
                }, u.createElement(c.default, {
                    className: "menu-item sponsored"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-subheading"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-sub-subheading"
                })), u.createElement(d.default.Item, {
                    colD: 6
                }, u.createElement(c.default, {
                    className: "menu-item sponsored"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-subheading"
                }), u.createElement(c.default, {
                    className: "menu-item sponsored-sub-subheading"
                })))), u.createElement(p, null, u.createElement(c.default, {
                    className: "subheading-1",
                    height: "2.8rem"
                }), u.createElement(c.default, {
                    className: "heading",
                    height: "2.8rem",
                    width: "20rem"
                }), u.createElement(c.default, {
                    className: "subheading-1",
                    height: "3.2rem"
                }), u.createElement(c.default, {
                    className: "map",
                    width: "100%",
                    height: "15rem"
                }), u.createElement(c.default, {
                    className: "line",
                    width: "100%",
                    height: "1.5rem"
                }), u.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "1.5rem"
                }), u.createElement(v, null, u.createElement(c.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                }), u.createElement(c.default, {
                    width: "10rem",
                    height: "3.6rem",
                    className: "button"
                }))))
            }
        },
        TBd4: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r, i = n("h4VS"),
                o = n("q1tI"),
                a = n("vOnD"),
                s = n("BAyj"),
                u = n("eLLh"),
                l = a.default.div(r || (r = (0, i.Z)(["\n  width: 100%;\n  padding: 2rem 1rem;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .menu-list {\n    margin-bottom: 1rem;\n  }\n\n  .menu-list.pill-list {\n    margin-bottom: 1.5rem;\n  }\n\n  .menu-item {\n    border-radius: 0.8rem;\n  }\n\n  .menu-item.sponsored {\n    height: 15rem;\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n\n  .menu-item.sponsored-subheading {\n    height: 2.2rem;\n    width: 75%;\n    margin-bottom: 0.5rem;\n  }\n\n  .menu-item.sponsored-sub-subheading {\n    height: 1.8rem;\n    width: 60%;\n    margin-bottom: 0.5rem;\n  }\n\n  .pill {\n    height: 3.6rem;\n    border-radius: 1.8rem;\n    width: 100%;\n  }\n"])));
            const c = function() {
                return o.createElement(l, null, o.createElement(s.default, {
                    className: "heading",
                    height: "2.8rem",
                    width: "30rem"
                }), o.createElement(s.default, {
                    className: "subheading-1",
                    height: "2.8rem",
                    width: "20rem"
                }), o.createElement(u.default, {
                    className: "menu-list",
                    gap: 10
                }, o.createElement(u.default.Item, {
                    colD: 4
                }, o.createElement(s.default, {
                    className: "menu-item",
                    height: "10rem",
                    width: "10rem"
                })), o.createElement(u.default.Item, {
                    colD: 4
                }, o.createElement(s.default, {
                    className: "menu-item",
                    height: "10rem",
                    width: "10rem"
                })), o.createElement(u.default.Item, {
                    colD: 4
                }, o.createElement(s.default, {
                    className: "menu-item",
                    height: "10rem",
                    width: "10rem"
                }))), o.createElement(s.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), o.createElement(u.default, {
                    className: "menu-list pill-list",
                    gap: 10
                }, o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                })), o.createElement(u.default.Item, {
                    colD: 2
                }, o.createElement(s.default, {
                    className: "pill"
                }))), o.createElement(s.default, {
                    className: "subheading-2",
                    height: "2.8rem",
                    width: "30rem"
                }), o.createElement(u.default, {
                    className: "menu-list",
                    gap: 15
                }, o.createElement(u.default.Item, {
                    colD: 6
                }, o.createElement(s.default, {
                    className: "menu-item sponsored"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-subheading"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-sub-subheading"
                })), o.createElement(u.default.Item, {
                    colD: 6
                }, o.createElement(s.default, {
                    className: "menu-item sponsored"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-subheading"
                }), o.createElement(s.default, {
                    className: "menu-item sponsored-sub-subheading"
                }))))
            }
        },
        WCUj: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r, i = n("h4VS"),
                o = n("q1tI"),
                a = n("vOnD"),
                s = n("BAyj"),
                u = n("eLLh"),
                l = a.default.div(r || (r = (0, i.Z)(["\n  width: 100%;\n  padding: 2rem 1rem;\n  padding-top: 0rem;\n  .border-radius {\n    border-radius: 0.4rem;\n  }\n  .subheading-2 {\n    padding-bottom: 0;\n  }\n  .offer-list-1 {\n    margin-top: 2.7rem;\n    margin-bottom: 1.4rem;\n  }\n  .offer-list-2 {\n    margin-bottom: 1.9rem;\n  }\n  .offer-list-3 {\n    margin-bottom: 2.2rem;\n  }\n  .order-title {\n    margin-bottom: 2rem;\n  }\n  .dish-heading {\n    margin-bottom: 1.5rem;\n  }\n  .order-menu-list {\n    margin-bottom: 1.9rem;\n  }\n"])));
            const c = function() {
                return o.createElement(l, null, o.createElement(u.default, {
                    className: "offer-list-1",
                    gap: 43
                }, o.createElement(u.default.Item, {
                    colM: 5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.5rem"
                })), o.createElement(u.default.Item, {
                    colM: 7,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.5rem"
                }))), o.createElement(u.default, {
                    className: "offer-list-2",
                    gap: 11
                }, o.createElement(u.default.Item, {
                    colM: 5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "4.1rem"
                })), o.createElement(u.default.Item, {
                    colM: 5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "4.1rem"
                }))), o.createElement(u.default, {
                    className: "offer-list-3",
                    gap: 150
                }, o.createElement(u.default.Item, {
                    colM: 6,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.3rem"
                })), o.createElement(u.default.Item, {
                    colM: 6,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.3rem"
                }))), o.createElement(s.default, {
                    className: "subheading-2 order-title border-radius",
                    height: "2.3rem",
                    width: "50%"
                }), o.createElement(u.default, {
                    className: "order-menu-list",
                    gap: 13
                }, o.createElement(u.default.Item, {
                    colD: 3.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "8.5rem"
                })), o.createElement(u.default.Item, {
                    colD: 5.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "dish-heading border-radius",
                    height: "2.3rem",
                    width: "70%"
                }), o.createElement(s.default, {
                    className: "dish-subheading border-radius",
                    height: "1.9rem"
                })), o.createElement(u.default.Item, {
                    colD: 3,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    height: "2.3rem"
                }))), o.createElement(u.default, {
                    gap: 13
                }, o.createElement(u.default.Item, {
                    colD: 3.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "8.5rem"
                })), o.createElement(u.default.Item, {
                    colD: 5.5,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "dish-heading border-radius",
                    height: "2.3rem",
                    width: "70%"
                }), o.createElement(s.default, {
                    className: "dish-subheading border-radius",
                    height: "1.9rem"
                })), o.createElement(u.default.Item, {
                    colD: 3,
                    className: "subheading-2"
                }, o.createElement(s.default, {
                    className: "border-radius",
                    height: "2.3rem"
                }))))
            }
        },
        T6B4: (e, t, n) => {
            "use strict";
            n.d(t, {
                OD: () => r,
                b1: () => i,
                a_: () => o,
                rF: () => a,
                TC: () => s,
                z$: () => u,
                xD: () => l,
                XB: () => c,
                x1: () => d,
                V5: () => m,
                cx: () => f,
                Xw: () => h,
                vP: () => p,
                dX: () => v,
                yf: () => g,
                ur: () => E,
                SR: () => _,
                fR: () => b,
                De: () => y
            });
            var r = "donations",
                i = "tip",
                o = "total_user",
                a = "amount",
                s = "percentage",
                u = "@Web:cart",
                l = "@Web:cart:validation:flag",
                c = "Do you want to clear all items in your cart?",
                d = "Your cart has existing items from",
                m = "Do you want to clear it and add items from",
                f = "clear-cart-modal",
                h = 1,
                p = 0,
                v = 1,
                g = 0,
                E = 1,
                _ = 0,
                b = 36e5,
                y = 3e5
        },
        RE6O: (e, t, n) => {
            "use strict";
            n.d(t, {
                uA: () => s,
                eH: () => u,
                Zy: () => l,
                ar: () => c
            });
            var r = n("VTBJ"),
                i = n("fujP"),
                o = n("r5Zp"),
                a = n("T6B4"),
                s = function(e) {
                    var t = (e.parsedMenuData || {}).timestamp,
                        n = void 0 === t ? 0 : t,
                        r = Date.now();
                    return n && r - n > a.fR
                },
                u = function(e) {
                    if ("undefined" != typeof window) {
                        var t = (0, o.By)(),
                            n = t.timestamp;
                        if (void 0 === n ? 0 : n) {
                            var i = Date.now() - (a.fR - e),
                                s = (0, r.Z)((0, r.Z)({}, t), {}, {
                                    timestamp: i
                                });
                            (0, o.yD)(s)
                        }
                    }
                },
                l = function(e, t, n) {
                    var r = e || {},
                        i = r.restaurantId,
                        o = void 0 === i ? 0 : i,
                        a = r.cartSubtype;
                    return t === o && n === (void 0 === a ? "" : a)
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return function() {
                        try {
                            if ("undefined" != typeof window) {
                                var r = (0, o.By)();
                                if (s({
                                        parsedMenuData: r
                                    }))(0, o.iU)();
                                else if ((0, i.default)(e) && l(r, t, n)) return {
                                    updatedCartData: r
                                }
                            }
                        } catch (e) {}
                        return {
                            updatedCartData: e
                        }
                    }
                }
        },
        KbIs: (e, t, n) => {
            "use strict";
            n.d(t, {
                qN: () => u,
                mq: () => l,
                el: () => c,
                Gx: () => d,
                fC: () => m,
                Vl: () => f,
                Kq: () => h,
                e7: () => p,
                Hj: () => v
            });
            var r = n("Ff2n"),
                i = n("gmvh"),
                o = n("rePB"),
                a = n("VTBJ"),
                s = n("P62M"),
                u = function() {
                    return {
                        type: "CLEAR_CART"
                    }
                },
                l = function(e) {
                    return {
                        type: "ADD_MENU_ITEM",
                        data: e
                    }
                },
                c = function(e) {
                    return {
                        type: "ADD_MULTIPLE_MENU_ITEM",
                        data: e
                    }
                },
                d = function(e) {
                    return {
                        type: "REMOVE_MENU_ITEM",
                        data: e
                    }
                },
                m = function(e) {
                    return {
                        type: "REPEAT_LAST_CUSTOMISATION",
                        data: e
                    }
                },
                f = function(e) {
                    return {
                        type: "ADD_INSTRUCTION",
                        data: e
                    }
                },
                h = function(e) {
                    return {
                        type: "REINIT_MENU",
                        data: e
                    }
                },
                p = function(e, t) {
                    var n = "".concat(e);
                    return t.forEach((function(e) {
                        var t = e.id,
                            r = void 0 === t ? "" : t,
                            i = e.items;
                        r && (void 0 === i ? [] : i).forEach((function(e) {
                            var t = e.item_id;
                            n += void 0 === t ? "" : t
                        }))
                    })), n
                },
                v = function(e, t) {
                    var n = t.type,
                        u = void 0 === n ? "" : n,
                        l = t.data,
                        c = void 0 === l ? {} : l;
                    if ("REINIT_MENU" === u) return (0, a.Z)((0, a.Z)({}, e), c);
                    var d = c.menuItem,
                        m = void 0 === d ? {} : d,
                        f = c.selectedGroupItemIdentifier,
                        h = void 0 === f ? "" : f,
                        v = c.groups,
                        g = void 0 === v ? [] : v,
                        E = c.menuItemPrice,
                        _ = void 0 === E ? 0 : E,
                        b = c.itemId,
                        y = void 0 === b ? "" : b,
                        I = c.instruction,
                        w = void 0 === I ? "" : I,
                        A = c.itemCount,
                        T = void 0 === A ? 0 : A,
                        Z = e.totalItemCount,
                        S = void 0 === Z ? 0 : Z,
                        O = e.totalAmount,
                        C = void 0 === O ? 0 : O,
                        N = e.orderItems,
                        R = void 0 === N ? {} : N,
                        P = m.item,
                        L = (P = void 0 === P ? {} : P).id,
                        x = void 0 === L ? "" : L,
                        D = P.price,
                        k = void 0 === D ? 0 : D,
                        M = (0, s.Of)(g) || !h ? p(x, g) : h,
                        U = R[x] || {},
                        G = U.count,
                        q = void 0 === G ? 0 : G,
                        V = U.selectedGroups,
                        F = void 0 === V ? {} : V,
                        H = F[M] || {},
                        B = H.menuItemPrice,
                        j = void 0 === B ? k : B,
                        z = H.count,
                        W = void 0 === z ? 0 : z,
                        K = {};
                    if (K = (0, o.Z)({}, M, {
                            groups: g,
                            menuItemPrice: _,
                            count: W + 1
                        }), "ADD_MENU_ITEM" === u) return (0, a.Z)((0, a.Z)({}, e), {}, {
                        orderItems: (0, a.Z)((0, a.Z)({}, R), {}, (0, o.Z)({}, x, (0, a.Z)((0, a.Z)({}, U), {}, {
                            menuItem: m,
                            selectedGroups: (0, a.Z)((0, a.Z)({}, F), K),
                            lastAddedItemGroups: g,
                            count: q + 1
                        }))),
                        totalItemCount: S + 1,
                        totalAmount: C + _
                    });
                    if ("ADD_MULTIPLE_MENU_ITEM" === u) return K = (0, o.Z)({}, M, {
                        groups: g,
                        menuItemPrice: _,
                        count: W + T
                    }), (0, a.Z)((0, a.Z)({}, e), {}, {
                        orderItems: (0, a.Z)((0, a.Z)({}, R), {}, (0, o.Z)({}, x, (0, a.Z)((0, a.Z)({}, U), {}, {
                            menuItem: m,
                            selectedGroups: (0, a.Z)((0, a.Z)({}, F), K),
                            lastAddedItemGroups: g,
                            count: q + T
                        }))),
                        totalItemCount: S + T,
                        totalAmount: C + T * _
                    });
                    if ("REMOVE_MENU_ITEM" === u) {
                        if (q > 0) {
                            var Y = q - 1;
                            if (Y > 0) {
                                var J = {},
                                    X = (F[M] || {}).count,
                                    Q = void 0 === X ? 0 : X;
                                return Q - 1 ? J = (0, o.Z)({}, M, (0, a.Z)((0, a.Z)({}, F[M]), {}, {
                                    count: Q - 1
                                })) : delete F[M], (0, a.Z)((0, a.Z)({}, e), {}, {
                                    orderItems: (0, a.Z)((0, a.Z)({}, R), {}, (0, o.Z)({}, x, (0, a.Z)((0, a.Z)({}, U), {}, {
                                        selectedGroups: (0, a.Z)((0, a.Z)({}, F), J),
                                        count: Y
                                    }))),
                                    totalItemCount: S - 1,
                                    totalAmount: C - _
                                })
                            }
                            R[x];
                            var $ = (0, r.Z)(R, [x].map(i.Z));
                            return (0, a.Z)((0, a.Z)({}, e), {}, {
                                orderItems: (0, a.Z)({}, $),
                                totalItemCount: S - 1,
                                totalAmount: C - _
                            })
                        }
                        return e
                    }
                    return "CLOSE_CUSTOMISED_MENU" === u ? (0, a.Z)((0, a.Z)({}, e), {}, {
                        customisationMenu: (0, o.Z)({}, y, !1)
                    }) : "REPEAT_LAST_CUSTOMISATION" === u ? (K = (0, o.Z)({}, M, {
                        groups: g,
                        menuItemPrice: j,
                        count: W + 1
                    }), (0, a.Z)((0, a.Z)({}, e), {}, {
                        orderItems: (0, a.Z)((0, a.Z)({}, R), {}, (0, o.Z)({}, x, (0, a.Z)((0, a.Z)({}, U), {}, {
                            selectedGroups: (0, a.Z)((0, a.Z)({}, F), K),
                            count: q + 1
                        }))),
                        totalItemCount: S + 1,
                        totalAmount: C + j
                    })) : "OPEN_CUSTOMISATION_MENU" === u ? (0, a.Z)((0, a.Z)({}, e), {}, {
                        customisationMenu: (0, o.Z)({}, y, !0)
                    }) : "OPEN_REPEAT_CUSTOMISATION" === u ? (0, a.Z)((0, a.Z)({}, e), {}, {
                        repeatCustomisation: (0, o.Z)({}, y, !0)
                    }) : "CLOSE_REPEAT_CUSTOMISATION" === u ? (0, a.Z)((0, a.Z)({}, e), {}, {
                        repeatCustomisation: (0, o.Z)({}, y, !1)
                    }) : "OPEN_REMOVE_ITEM_MENU" === u ? (0, a.Z)((0, a.Z)({}, e), {}, {
                        removeItemCustomisation: (0, o.Z)({}, y, !0)
                    }) : "CLOSE_REMOVE_ITEM_MENU" === u ? (0, a.Z)((0, a.Z)({}, e), {}, {
                        removeItemCustomisation: (0, o.Z)({}, y, !1)
                    }) : "CLEAR_CART" === u ? {} : "ADD_INSTRUCTION" === u ? (0, a.Z)((0, a.Z)({}, e), {}, {
                        orderItems: (0, a.Z)((0, a.Z)({}, R), {}, (0, o.Z)({}, x, (0, a.Z)((0, a.Z)({}, U), {}, {
                            instruction: w
                        })))
                    }) : e
                }
        },
        "4x9D": (e, t, n) => {
            "use strict";
            n.d(t, {
                wx: () => o,
                qX: () => a,
                bE: () => s
            });
            var r = n("fujP"),
                i = n("T6B4"),
                o = function() {
                    try {
                        var e = window.localStorage.getItem(i.xD);
                        return (0, r.default)(e) ? 1 : Number(e)
                    } catch (e) {
                        return ""
                    }
                },
                a = function(e) {
                    window.localStorage.setItem(i.xD, e)
                },
                s = function() {
                    window.localStorage.removeItem(i.xD)
                }
        },
        cyO1: (e, t, n) => {
            "use strict";
            n.d(t, {
                vR: () => r,
                nF: () => i,
                KF: () => o,
                pf: () => a,
                E_: () => s,
                y7: () => u,
                l2: () => l
            });
            var r = {
                    OPEN: "OPEN_PROMO_BLOCKER",
                    CLOSE: "CLOSE_PROMO_BLOCKER"
                },
                i = "OPEN_PROMO_BLOCKER_ON_PAGE_LOAD",
                o = "CLOSE_PROMO_BLOCKER_ON_PAGE_LOAD",
                a = function() {
                    return {
                        type: r.OPEN
                    }
                },
                s = function() {
                    return {
                        type: r.CLOSE
                    }
                },
                u = function() {
                    return {
                        type: i
                    }
                },
                l = function() {
                    return {
                        type: o
                    }
                }
        },
        czRw: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => $n
            });
            var r, i, o, a, s, u, l, c, d, m, f, h, p, v, g, E, _, b, y, I = n("VTBJ"),
                w = n("SNoJ"),
                A = n("7EGn"),
                T = n("P62M"),
                Z = n("A6yj"),
                S = n("h4VS"),
                O = n("q1tI"),
                C = n("vOnD"),
                N = n("17x9"),
                R = n.n(N),
                P = n("ifKl"),
                L = n("UXvI"),
                x = n("r/cL"),
                D = n("rePB"),
                k = n("wcxm"),
                M = n("kdDk"),
                U = (n("lFeK"), n("dnas"), n("aM9N")),
                G = n("/zEH"),
                q = n("rCKB"),
                V = n("V/FI"),
                F = n("HMsx"),
                H = n("wRyO"),
                B = n("pZ4b"),
                j = n("8QQM"),
                z = n("5An4"),
                W = n("ukK4"),
                K = n("ncyx"),
                Y = (U.default, G.default, q.default, V.default, function(e) {
                    return function() {
                        return e.length > 0 ? O.createElement(X, null, e.map((function(e) {
                            var t = e.days,
                                n = e.timing;
                            return O.createElement(J, null, O.createElement(Q, null, t, " : "), O.createElement($, null, n || "Closed"), O.createElement("br", null))
                        }))) : null
                    }
                }),
                J = C.default.div(r || (r = (0, S.Z)(["\n  text-align: left;\n"]))),
                X = C.default.div(i || (i = (0, S.Z)(["\n  padding: 0 1rem;\n"]))),
                Q = C.default.span(o || (o = (0, S.Z)(["\n  line-height: 1.5;\n  color: ", ";\n  padding-right: 0.3rem;\n  font-weight: 400;\n"])), z.default),
                $ = C.default.span(a || (a = (0, S.Z)(["\n  font-weight: 400;\n  font-size: 1.4rem;\n  color: ", ";\n"])), F.default.z600),
                ee = (s = {}, (0, D.Z)(s, K.I6, {
                    background: H.default.z200,
                    color: H.default.z500,
                    border: H.default.z100,
                    text: "This restaurant is permanently closed"
                }), (0, D.Z)(s, K.FH, {
                    background: j.default.z200,
                    color: j.default.z500,
                    border: j.default.z100,
                    text: "This restaurant is temporarily closed"
                }), (0, D.Z)(s, K.pW, {
                    background: B.default.z200,
                    color: B.default.z500,
                    border: B.default.z100,
                    text: "This restaurant is opening soon"
                }), (0, D.Z)(s, K.CW, {
                    background: W.default.z200,
                    color: W.default.z500,
                    border: W.default.z100,
                    text: "This restaurant is shelled"
                }), (0, D.Z)(s, K.WC, {
                    background: B.default.z200,
                    color: B.default.z500,
                    border: B.default.z100,
                    text: ""
                }), s),
                te = (C.default.div(u || (u = (0, S.Z)(["\n  background: ", ";\n  padding: 5rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.8rem 0.8rem 0 0;\n"])), F.default.z200), C.default.div(l || (l = (0, S.Z)(["\n  width: 60rem;\n"]))), C.default.div(c || (c = (0, S.Z)(["\n  padding: 2.4rem;\n"]))), C.default.p(d || (d = (0, S.Z)(["\n  font-size: 1.6rem;\n  color: ", ";\n"])), F.default.z700));
            (0, C.default)(te)(m || (m = (0, S.Z)(["\n  font-weight: 500;\n"]))), C.default.a(f || (f = (0, S.Z)(["\n  text-decoration: none;\n  color: ", ";\n"])), H.default.z500), C.default.div(h || (h = (0, S.Z)(["\n  margin-top: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
            R().string.isRequired, R().string.isRequired, R().string.isRequired, R().string.isRequired, R().string.isRequired, R().string.isRequired, R().string.isRequired, R().string.isRequired, R().string.isRequired, R().string.isRequired, R().func.isRequired;
            var ne = function e(t) {
                var n = t.basicInfo,
                    r = t.setMediaAlertOpen,
                    i = n.media_alert,
                    o = n.disclaimer_text,
                    a = n.learn_more_text,
                    s = (0, K.EM)(n),
                    u = ee[s] || {},
                    l = u.background,
                    c = u.color,
                    d = u.border,
                    m = u.text;
                return s ? O.createElement(e.Wrapper, {
                    bg: l,
                    color: c,
                    border: d
                }, O.createElement(re, null, o || m), !!i && O.createElement(ie, {
                    appearance: "link",
                    onClick: function() {
                        return r(!0)
                    }
                }, a)) : null
            };
            ne.Wrapper = C.default.div(p || (p = (0, S.Z)(["\n  width: 100%;\n  border: 1px solid ", ";\n  color: ", ";\n  background: ", ";\n  line-height: 2rem;\n  padding-bottom: 1.4rem;\n  border-radius: 0.8rem;\n  margin-top: 1rem;\n  font-weight: 400;\n  @media (max-width: 480px) {\n    border-radius: 0;\n  }\n"])), (function(e) {
                return e.border
            }), (function(e) {
                return e.color
            }), (function(e) {
                return e.bg
            }));
            var re = C.default.div(v || (v = (0, S.Z)(["\n  padding: 1.4rem 2rem 0 2rem;\n  font-size: 1.4rem;\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"]))),
                ie = (0, C.default)(M.default)(g || (g = (0, S.Z)(["\n  span {\n    text-decoration: underline;\n    font-weight: 500;\n    font-size: 1.4rem;\n  }\n  display: block;\n  padding: 0 2rem 0.6rem 0.4rem;\n  @media (max-width: 480px) {\n    span {\n      font-size: 1.2rem;\n    }\n  }\n"])));
            ne.propTypes = {
                basicInfo: R().objectOf(R().any).isRequired,
                setMediaAlertOpen: R().func
            }, ne.defaultProps = {
                setMediaAlertOpen: P.default
            };
            C.default.section(E || (E = (0, S.Z)(["\n  @media (min-width: 769px) {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    padding: 0 1.2rem;\n  }\n\n  display: flex;\n  justify-content: space-around;\n  margin-top: 2rem;\n"]))), C.default.section(_ || (_ = (0, S.Z)(["\n  cursor: pointer;\n"]))), C.default.div(b || (b = (0, S.Z)(["\n  display: flex;\n  justify-content: center;\n\n  i {\n    background-color: ", ";\n    border-radius: 50%;\n    padding: 1.1rem;\n  }\n"])), F.default.z100), (0, C.default)(k.P)(y || (y = (0, S.Z)(["\n  text-align: center;\n"])));
            var oe, ae, se, ue = n("wx14"),
                le = n("pU3V"),
                ce = n("Ff2n"),
                de = n("fujP"),
                me = n("LSsp"),
                fe = n("FaQdN"),
                he = n("FR2j"),
                pe = n("VVlO"),
                ve = n("q5yu"),
                ge = n("mPYp"),
                Ee = n("ZDJO"),
                _e = C.default.section(oe || (oe = (0, S.Z)(["\n  display: flex;\n  margin-top: 1.5rem;\n  @media (max-width: 480px) {\n    margin-top: 0;\n    margin-bottom: 1.5rem;\n  }\n"]))),
                be = (0, C.default)(ve.default)(ae || (ae = (0, S.Z)(["\n  ", "\n"])), (function(e) {
                    return e.isPartner ? "margin-left: 0rem;" : "margin-left: 4rem;"
                })),
                ye = C.default.div(se || (se = (0, S.Z)(["\n  font-weight: 500;\n  margin-top: 2rem;\n  @media (max-width: 768px) {\n    margin: 0 0 0.6rem 0;\n  }\n"]))),
                Ie = {
                    text: R().string.isRequired,
                    color: R().string.isRequired,
                    bgColor: R().string.isRequired
                },
                we = function(e, t) {
                    var n = e.rating,
                        r = e.subtext,
                        i = e.color,
                        o = e.newOnDelivery;
                    return {
                        value: n,
                        reviewStr: r,
                        ratingColor: i,
                        clickHandler: n ? t : void 0,
                        reviewStrComponent: void 0 !== o && o ? O.createElement(Ee.Z, {
                            text: r
                        }) : null,
                        showOnHeader: !0
                    }
                },
                Ae = function(e) {
                    var t = e.newlyOpenedObj,
                        n = e.suspiciousReviewsObj,
                        r = e.ratings,
                        i = e.clickHandler,
                        o = e.isPartner;
                    if (!(0, de.default)(t)) {
                        var a = t.text,
                            s = void 0 === a ? "" : a,
                            u = t.bgColor,
                            l = void 0 === u ? B.default.z300 : u,
                            c = t.color,
                            d = void 0 === c ? me.default : c;
                        return O.createElement(ye, null, O.createElement(ge.default, {
                            label: s.toUpperCase(),
                            bgColor: l,
                            textColor: d
                        }))
                    }
                    if (!(0, de.default)(n)) {
                        var m = n.text,
                            f = void 0 === m ? "" : m,
                            h = n.bgColor,
                            p = void 0 === h ? H.default.z100 : h,
                            v = n.color,
                            g = void 0 === v ? H.default.z400 : v;
                        return O.createElement(ye, null, O.createElement(ge.default, {
                            label: f.toUpperCase(),
                            bgColor: p,
                            textColor: g
                        }))
                    }
                    var E = (0, A.default)(r, "DINING", {}),
                        _ = (0, A.default)(r, "DELIVERY", {});
                    return O.createElement(_e, null, !(0, de.default)(E) && O.createElement(ve.default, we(E, i)), !(0, de.default)(_) && O.createElement(be, (0, ue.Z)({
                        isPartner: o
                    }, we(_, i))))
                };
            Ae.propTypes = {
                newlyOpenedObj: R().objectOf(Ie),
                suspiciousReviewsObj: R().objectOf(Ie),
                ratings: R().objectOf(R().object),
                clickHandler: R().func,
                isPartner: R().bool
            }, Ae.defaultProps = {
                newlyOpenedObj: {},
                suspiciousReviewsObj: {},
                ratings: {},
                clickHandler: null,
                isPartner: !1
            };
            const Te = Ae;
            var Ze, Se, Oe, Ce, Ne, Re, Pe, Le, xe, De, ke, Me, Ue, Ge, qe, Ve, Fe, He, Be, je, ze, We, Ke, Ye, Je, Xe, Qe, $e = n("s5TX"),
                et = n("xJdj"),
                tt = n("epTT"),
                nt = n("NJ3P"),
                rt = n("/ahK"),
                it = n("N/Eu"),
                ot = C.default.section(Ze || (Ze = (0, S.Z)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 480px) {\n    padding: 0 1rem;\n  }\n"]))),
                at = C.default.section(Se || (Se = (0, S.Z)(["\n  margin-top: 1rem;\n  @media (max-width: 480px) {\n    width: 100%\n    margin-top: ", "rem;\n  }\n"])), (function(e) {
                    return e.extraTopMargin ? 2.4 : 1
                })),
                st = (0, C.default)($e.default)(Oe || (Oe = (0, S.Z)(["\n  font-weight: 500;\n  font-size: 3.6rem;\n  cursor: pointer;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n  }\n"]))),
                ut = (0, C.default)(rt.default)(Ce || (Ce = (0, S.Z)(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n"]))),
                lt = C.default.section(Ne || (Ne = (0, S.Z)(["\n  font-size: 1.8rem;\n  line-height: 1.5;\n  color: ", ";\n  margin-top: 0.5rem;\n"])), F.default.z600),
                ct = C.default.div(Re || (Re = (0, S.Z)(["\n  @media (max-width: 480px) {\n    line-height: 1.2;\n  }\n"]))),
                dt = C.default.a(Pe || (Pe = (0, S.Z)(["\n  color: ", ";\n  display: inline;\n  text-decoration: none;\n  &:hover {\n    color: ", ";\n  }\n  @media (max-width: 480px) {\n    font-size: 1.4rem;\n    font-weight: 400;\n  }\n"])), F.default.z700, F.default.z900),
                mt = C.default.a(Le || (Le = (0, S.Z)(["\n  text-decoration: none;\n  font-size: 1.6rem;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), F.default.z500, F.default.z700),
                ft = C.default.section(xe || (xe = (0, S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n  align-items: flex-start;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: ", "%;\n  }\n"])), (function(e) {
                    return e.showNewRating ? 100 : 115
                })),
                ht = C.default.section(De || (De = (0, S.Z)(["\n  display: flex;\n  align-items: center;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: ", "%;\n    flex-wrap: wrap;\n  }\n"])), (function(e) {
                    return e.showNewRating ? 100 : 115
                })),
                pt = C.default.span(ke || (ke = (0, S.Z)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), B.default.z300),
                vt = C.default.span(Me || (Me = (0, S.Z)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  ", "\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n    ", "\n  }\n"])), F.default.z600, (function(e) {
                    return e.showOpenNow && (0, C.css)(Ue || (Ue = (0, S.Z)(["\n      &:before {\n        content: '-';\n        margin: 0 1rem;\n      }\n    "])))
                }), (function(e) {
                    return e.showOpenNow && (0, C.css)(Ge || (Ge = (0, S.Z)(["\n        &:before {\n          content: '-';\n          margin: 0 1rem;\n        }\n      "])))
                })),
                gt = (0, C.default)(et.Z)(qe || (qe = (0, S.Z)(["\n  font-size: 1.4rem;\n"]))),
                Et = (0, C.default)(tt.default)(Ve || (Ve = (0, S.Z)(["\n  margin-left: 0.8rem;\n"]))),
                _t = C.default.section(Fe || (Fe = (0, S.Z)(["\n  margin: 1.6rem 0 0 1rem;\n  box-shadow: 0 1px 4px rgba(28, 28, 28, 0.08);\n  border-radius: 0.7rem;\n  width: 7.2rem;\n  height: fit-content;\n  cursor: pointer;\n\n  @media (max-width: 480px) {\n    margin: 1.2rem 0 0 0.5rem;\n    width: 5rem;\n    flex-shrink: 0;\n  }\n"]))),
                bt = C.default.div(He || (He = (0, S.Z)(["\n  background: ", ";\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.6rem 0.6rem 0 0;\n"])), (function(e) {
                    return e.bg ? e.bg : H.default.z700
                })),
                yt = (0, C.default)(nt.Z)(Be || (Be = (0, S.Z)(["\n  font-weight: 500;\n  border-radius: ", ";\n  border-top-left-radius: 0.7rem;\n  border-top-right-radius: 0.7rem;\n  text-align: center;\n  height: 3.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: unset !important;\n\n  @media (max-width: 480px) {\n    height: 3.2rem;\n    font-size: 1.8rem !important;\n  }\n"])), (function(e) {
                    return e.isNew ? "0.7rem" : 0
                })),
                It = (0, C.default)(k.P)(je || (je = (0, S.Z)(["\n  text-align: center;\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"]))),
                wt = (0, C.default)(k.P)(ze || (ze = (0, S.Z)(["\n  text-align: center;\n  @media (max-width: 768px) {\n    font-size: 1rem;\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    font-size: 0.8rem;\n  }\n"])), F.default.z600),
                At = C.default.span(We || (We = (0, S.Z)(["\n  color: ", ";\n  font-size: 1.3rem;\n  line-height: 1.5;\n  margin-top: 0.3rem;\n  &:before {\n    content: '*';\n    margin: 0 0.1rem 0 0;\n  }\n  @media (max-width: 480px) {\n    font-size: 1.1rem;\n  }\n"])), F.default.z500),
                Tt = C.default.div(Ke || (Ke = (0, S.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 480px) {\n    align-items: start;\n  }\n"]))),
                Zt = (0, C.default)(it.default)(Ye || (Ye = (0, S.Z)(["\n  margin-left: 0.5rem;\n"]))),
                St = C.default.a(Je || (Je = (0, S.Z)(["\n  text-decoration: none;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  @media (max-width: 480px) {\n    min-width: 8rem;\n    margin-left: 0.2rem;\n  }\n"])), H.default.z500),
                Ot = n("Ar8T"),
                Ct = "res_view_rating_click",
                Nt = function() {
                    (0, Ot.q)(Ct)
                },
                Rt = n("VAjR"),
                Pt = C.default.section(Xe || (Xe = (0, S.Z)(["\n  display: flex;\n  margin-top: 1.5rem;\n  @media (max-width: 480px) {\n    margin-top: 0.5rem;\n    margin-bottom: 0.8rem;\n  }\n"]))),
                Lt = C.default.div(Qe || (Qe = (0, S.Z)(["\n  font-weight: 500;\n  margin-top: 2rem;\n  @media (max-width: 768px) {\n    margin: 0 0 0.6rem 0;\n  }\n"]))),
                xt = {
                    text: R().string.isRequired,
                    color: R().string.isRequired,
                    bgColor: R().string.isRequired
                },
                Dt = function(e) {
                    var t = e.newlyOpenedObj,
                        n = e.suspiciousReviewsObj,
                        r = e.ratings,
                        i = e.clickHandler;
                    if (!(0, de.default)(t)) {
                        var o = t.text,
                            a = void 0 === o ? "" : o,
                            s = t.bgColor,
                            u = void 0 === s ? B.default.z300 : s,
                            l = t.color,
                            c = void 0 === l ? me.default : l;
                        return a && O.createElement(Lt, null, O.createElement(ge.default, {
                            label: a.toUpperCase(),
                            bgColor: u,
                            textColor: c
                        }))
                    }
                    if (!(0, de.default)(n)) {
                        var d = n.text,
                            m = void 0 === d ? "" : d,
                            f = n.bgColor,
                            h = void 0 === f ? H.default.z100 : f,
                            p = n.color,
                            v = void 0 === p ? H.default.z400 : p;
                        return m && O.createElement(Lt, null, O.createElement(ge.default, {
                            label: m.toUpperCase(),
                            bgColor: h,
                            textColor: v
                        }))
                    }
                    var g = (0, A.default)(r, "DELIVERY", {});
                    return !(0, de.default)(g) && O.createElement(Pt, null, O.createElement(ve.default, (0, ue.Z)({
                        align: "right"
                    }, function(e, t) {
                        var n = e.rating,
                            r = e.subtext,
                            i = e.color,
                            o = e.newOnDelivery,
                            a = void 0 !== o && o;
                        return {
                            value: n,
                            reviewStr: "(".concat(r, ")"),
                            ratingColor: i,
                            clickHandler: n ? t : void 0,
                            reviewStrComponent: a ? O.createElement(Ee.Z, {
                                text: r
                            }) : null,
                            showOnHeader: !0
                        }
                    }(g, i))))
                };
            Dt.propTypes = {
                newlyOpenedObj: R().objectOf(xt),
                suspiciousReviewsObj: R().objectOf(xt),
                ratings: R().objectOf(R().object),
                clickHandler: R().func
            }, Dt.defaultProps = {
                newlyOpenedObj: {},
                suspiciousReviewsObj: {},
                ratings: {},
                clickHandler: P.default
            };
            const kt = Dt;
            var Mt = n("s2Gh"),
                Ut = n("ZR86"),
                Gt = n("gwKh"),
                qt = n("OM32"),
                Vt = n("en2A"),
                Ft = function(e) {
                    return (0, T.Of)(e) ? O.createElement(ct, null, e.map((function(t, n) {
                        var r = t.name,
                            i = t.url;
                        return O.createElement("span", {
                            key: r
                        }, O.createElement(dt, {
                            href: i
                        }, r), n !== e.length - 1 && O.createElement("span", null, ", "))
                    }))) : null
                },
                Ht = ["name", "rating", "rating_new", "timing", "locality", "setParent", "reviewSectionData", "cuisines", "isMobile", "isCompressed", "loadThisPage", "hideTimingInfo", "isPartner", "subType", "moreInfoText", "openAppModalInfo", "reviewDeeplinkUrl", "showOpenNow"],
                Bt = function(e) {
                    var t = e.name,
                        n = e.rating,
                        r = e.rating_new,
                        i = e.timing,
                        o = e.locality,
                        a = e.setParent,
                        s = e.reviewSectionData,
                        u = e.cuisines,
                        l = e.isMobile,
                        c = e.isCompressed,
                        d = e.loadThisPage,
                        m = e.hideTimingInfo,
                        f = e.isPartner,
                        h = e.subType,
                        p = e.moreInfoText,
                        v = e.openAppModalInfo,
                        g = e.reviewDeeplinkUrl,
                        E = e.showOpenNow,
                        _ = (0, ce.Z)(e, Ht),
                        b = (0, O.useState)(!1),
                        y = (0, le.Z)(b, 2),
                        I = y[0],
                        w = y[1],
                        T = function(e) {
                            return function() {
                                a(e)
                            }
                        },
                        Z = !f,
                        S = _.resUrl,
                        C = void 0 === S ? "" : S,
                        N = function() {
                            !(0, de.default)(C) && Z && d(C, l ? 1 : 0)
                        },
                        R = function() {
                            Nt(), g && !(0, qt.ej)(Vt.Ul) ? ((0, qt.d8)(Vt.Ul, "true", 30), (0, Ut.V$)(P, Ut.Hp.OPEN_MODAL, L), w(!0)) : T(s)()
                        },
                        P = (0, Gt.q)(h),
                        L = "resHeader",
                        x = (0, de.default)(r),
                        D = (0, A.default)(i, "customised_timings.disclaimer", ""),
                        k = l ? he.Z : gt,
                        M = l && h === Rt.kl,
                        U = !x && l && h !== Rt.kl,
                        G = C && M,
                        q = !x && M,
                        V = !m && !f && !M,
                        B = function() {
                            return l && h === Rt.kl ? O.createElement(ut, {
                                onClick: N
                            }, t) : O.createElement(st, {
                                onCLick: N
                            }, t)
                        };
                    return O.createElement(ot, null, O.createElement(at, {
                        extraTopMargin: h === Rt.kl
                    }, U && O.createElement(Te, (0, ue.Z)({}, r, {
                        isPartner: f,
                        clickHandler: !f && R
                    })), O.createElement(Tt, null, O.createElement(B, null), G && O.createElement(St, {
                        href: C,
                        onClick: function() {
                            d(C, 1)
                        }
                    }, p, O.createElement(Zt, {
                        size: "10",
                        color: H.default.z500
                    }))), q && O.createElement(kt, (0, ue.Z)({}, r, {
                        clickHandler: !f && R
                    })), O.createElement(lt, null, Ft(u), !M && O.createElement(mt, {
                        href: Z && (0, A.default)(o, "url", "")
                    }, (0, A.default)(o, "text", ""))), V && O.createElement(ft, {
                        showNewRating: !(0, de.default)(r)
                    }, O.createElement(ht, {
                        showNewRating: !(0, de.default)(r)
                    }, E && O.createElement(pt, null, (0, A.default)(_, "res_status_text", "")), O.createElement(vt, {
                        showOpenNow: E
                    }, (0, A.default)(i, "timing_desc", "")), O.createElement(k, {
                        label: Y((0, A.default)(i, "customised_timings.opening_hours", [])),
                        appearance: "light",
                        position: c ? "top" : "right",
                        widthMaxContent: !l
                    }, O.createElement(Et, {
                        size: 14,
                        color: F.default.z500,
                        onClick: function() {
                            (0, Mt.CH)()
                        }
                    }))), !!D && O.createElement(At, null, D))), x && !(0, A.default)(_, "is_opening_soon", 0) && O.createElement(_t, {
                        onClick: R
                    }, (0, A.default)(n, "has_fake_reviews", !1) ? O.createElement(bt, {
                        bg: (0, A.default)(n, "fake_review_details.banner.background_color")
                    }, O.createElement(fe.default, {
                        color: me.default,
                        size: 26
                    })) : O.createElement(yt, {
                        size: n.is_new ? "2.3rem" : "3rem",
                        value: n.rating_text,
                        color: (0, A.default)(n, "is_new", !1) ? F.default.z300 : "#".concat(n.rating_color),
                        isNew: n.is_new
                    }), !n.is_new && !n.has_fake_reviews && O.createElement(O.Fragment, null, O.createElement(It, {
                        color: F.default.z700,
                        margin: "0.3rem 0 0",
                        size: "1.6rem",
                        lineHeight: "regular"
                    }, n.votes), O.createElement(wt, {
                        color: F.default.z400,
                        margin: "0 0 0.2rem",
                        size: "1.2rem"
                    }, n.subtext))), !l && !x && O.createElement(Te, (0, ue.Z)({}, r, {
                        isPartner: f,
                        clickHandler: !f && R
                    })), O.createElement(pe.Z, {
                        isReviewModal: !0,
                        visible: I,
                        onClose: function() {
                            (0, Ut.V$)(P, Ut.Hp.CLOSE_MODAL, L), w(!1)
                        },
                        onUseAppAction: function() {
                            w(!1), (0, Ut.V$)(P, Ut.Hp.USE_APP, L), setTimeout((function() {
                                window.location.href = g
                            }), 100)
                        },
                        onContinueRedirectionAction: function() {
                            w(!1), (0, Ut.V$)(P, Ut.Hp.CONTINUE_REDIRECTION, L), T(s)()
                        },
                        modalInfo: v
                    }))
                };
            Bt.propTypes = {
                name: R().string.isRequired,
                cuisine_string: R().string.isRequired,
                rating: R().shape({
                    rating_text: R().string,
                    subtext: R().string,
                    votes: R().string,
                    has_fake_reviews: R().bool,
                    is_new: R().bool,
                    rating_color: R().string
                }),
                locality: R().shape({
                    text: R().string,
                    url: R().string
                }).isRequired,
                timing: R().shape({
                    timing_desc: R().string,
                    customised_timings: R().object
                }).isRequired,
                setParent: R().func,
                reviewSectionData: R().shape({
                    subType: R().string,
                    pageUrl: R().string
                }),
                cuisines: R().arrayOf(R().object),
                isMobile: R().bool,
                isCompressed: R().bool,
                rating_new: R().objectOf(R().object),
                loadThisPage: R().func,
                resUrl: R().string,
                hideTimingInfo: R().bool,
                isPartner: R().bool,
                subType: R().string,
                moreInfoText: R().string,
                openAppModalInfo: R().shape({
                    title: R().string,
                    description: R().string,
                    clickActionText: R().string,
                    closeActionText: R().string,
                    image: R().string
                }),
                reviewDeeplinkUrl: R().string,
                showOpenNow: R().bool
            }, Bt.defaultProps = {
                rating: {},
                setParent: P.default,
                reviewSectionData: {},
                cuisines: [],
                isMobile: !1,
                isCompressed: !1,
                rating_new: {},
                loadThisPage: P.default,
                resUrl: "",
                hideTimingInfo: !1,
                isPartner: !1,
                subType: "",
                moreInfoText: "",
                openAppModalInfo: {
                    title: "",
                    description: "",
                    clickActionText: "",
                    closeActionText: "",
                    image: ""
                },
                reviewDeeplinkUrl: "",
                showOpenNow: !1
            };
            const jt = Bt;
            var zt, Wt, Kt, Yt, Jt, Xt, Qt, $t, en, tn, nn, rn, on, an, sn, un, ln, cn, dn, mn, fn = n("nusx"),
                hn = C.default.section(zt || (zt = (0, S.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  @media (max-width: 480px) {\n    padding: 0 0 0 1rem;\n  }\n"]))),
                pn = C.default.section(Wt || (Wt = (0, S.Z)(["\n  margin-top: 1rem;\n  width: 100%;\n  @media (max-width: 480px) {\n    margin-top: ", "rem;\n  }\n"])), (function(e) {
                    return e.extraTopMargin ? 2.4 : 1
                })),
                vn = (0, C.default)($e.default)(Kt || (Kt = (0, S.Z)(["\n  font-weight: 500;\n  font-size: 3.6rem;\n  cursor: pointer;\n  @media (max-width: 480px) {\n    font-size: 2.4rem;\n  }\n"]))),
                gn = (0, C.default)(rt.default)(Yt || (Yt = (0, S.Z)(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n"]))),
                En = C.default.section(Jt || (Jt = (0, S.Z)(["\n  font-size: 1.8rem;\n  line-height: 1.5;\n  color: ", ";\n  margin-top: 0.5rem;\n"])), F.default.z600),
                _n = C.default.a(Xt || (Xt = (0, S.Z)(["\n  text-decoration: none;\n  font-size: 1.6rem;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), F.default.z500, F.default.z700),
                bn = C.default.section(Qt || (Qt = (0, S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n  align-items: flex-start;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n"]))),
                yn = C.default.section($t || ($t = (0, S.Z)(["\n  display: flex;\n  align-items: center;\n  transition: opacity 0.2s ease-in-out;\n\n  @media (max-width: 480px) {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n"]))),
                In = C.default.span(en || (en = (0, S.Z)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"])), B.default.z300),
                wn = C.default.span(tn || (tn = (0, S.Z)(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 1.5;\n  ", "\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n    ", "\n  }\n"])), F.default.z600, (function(e) {
                    return e.showOpenNow && (0, C.css)(nn || (nn = (0, S.Z)(["\n      &:before {\n        content: '-';\n        margin: 0 1rem;\n      }\n    "])))
                }), (function(e) {
                    return e.showOpenNow && (0, C.css)(rn || (rn = (0, S.Z)(["\n        &:before {\n          content: '-';\n          margin: 0 1rem;\n        }\n      "])))
                })),
                An = (0, C.default)(et.Z)(on || (on = (0, S.Z)(["\n  font-size: 1.4rem;\n"]))),
                Tn = (0, C.default)(tt.default)(an || (an = (0, S.Z)(["\n  margin-left: 0.8rem;\n"]))),
                Zn = C.default.span(sn || (sn = (0, S.Z)(["\n  color: ", ";\n  font-size: 1.3rem;\n  line-height: 1.5;\n  margin-top: 0.3rem;\n  &:before {\n    content: '*';\n    margin: 0 0.1rem 0 0;\n  }\n  @media (max-width: 480px) {\n    font-size: 1.1rem;\n  }\n"])), F.default.z500),
                Sn = C.default.div(un || (un = (0, S.Z)(["\n  width: 100%;\n  @media (max-width: 480px) {\n    padding-right: 0.5rem;\n  }\n"]))),
                On = C.default.div(ln || (ln = (0, S.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  @media (max-width: 480px) {\n    align-items: end;\n  }\n"]))),
                Cn = C.default.div(cn || (cn = (0, S.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n"]))),
                Nn = (0, C.default)(it.default)(dn || (dn = (0, S.Z)(["\n  margin-left: 0.5rem;\n"]))),
                Rn = C.default.a(mn || (mn = (0, S.Z)(["\n  text-decoration: none;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  @media (max-width: 480px) {\n    min-width: 8rem;\n    margin-left: 0.2rem;\n    margin-top: 0.4rem;\n  }\n"])), H.default.z500),
                Pn = n("Ujff"),
                Ln = n("czsM"),
                xn = {
                    text: R().string.isRequired,
                    color: R().string.isRequired,
                    bgColor: R().string.isRequired
                },
                Dn = function(e) {
                    var t = e.newlyOpenedObj,
                        n = e.suspiciousReviewObj,
                        r = e.ratings,
                        i = e.clickHandler,
                        o = e.showConicalRating,
                        a = e.ratingV2Size;
                    if (!(0, de.default)(t)) return O.createElement(Pn.Z, (0, ue.Z)({}, (0, fn.Mk)({
                        data: t,
                        clickHandler: i
                    }), {
                        size: a,
                        appearance: "outline",
                        textColor: Ln.default.z500,
                        conicalRating: o
                    }));
                    if (!(0, de.default)(n)) return O.createElement(Pn.Z, (0, ue.Z)({}, (0, fn.Mk)({
                        data: n,
                        clickHandler: i
                    }), {
                        size: a,
                        conicalRating: o
                    }));
                    var s = (0, A.default)(r, "DELIVERY", (0, A.default)(r, "DINING", {}));
                    return !(0, de.default)(s) && O.createElement(Pn.Z, (0, ue.Z)({}, (0, fn.Mk)({
                        data: s,
                        clickHandler: i
                    }), {
                        size: a,
                        conicalRating: o
                    }))
                };
            Dn.propTypes = {
                newlyOpenedObj: R().objectOf(xn),
                suspiciousReviewObj: R().objectOf(xn),
                ratings: R().objectOf(R().object),
                clickHandler: R().func,
                showConicalRating: R().bool,
                ratingV2Size: R().number
            }, Dn.defaultProps = {
                newlyOpenedObj: {},
                suspiciousReviewObj: {},
                ratings: {},
                clickHandler: P.default,
                showConicalRating: 0,
                ratingV2Size: 400
            };
            const kn = Dn;
            var Mn = function(e) {
                var t = e.showNewRating,
                    n = e.resStatusText,
                    r = e.showOpenNow,
                    i = e.timing,
                    o = e.infoLineOnClick,
                    a = e.tooltipPosition,
                    s = e.disclaimerText,
                    u = e.widthMaxContent,
                    l = e.showMobileTooltip ? he.Z : An;
                return O.createElement(bn, {
                    showNewRating: t
                }, O.createElement(yn, {
                    showNewRating: t
                }, r && O.createElement(In, null, n), O.createElement(wn, {
                    showOpenNow: r
                }, (0, A.default)(i, "timing_desc", "")), O.createElement(l, {
                    label: Y((0, A.default)(i, "customised_timings.opening_hours", [])),
                    appearance: "light",
                    position: a,
                    widthMaxContent: u
                }, O.createElement(Tn, {
                    size: 14,
                    color: F.default.z500,
                    onClick: o
                }))), !!s && O.createElement(Zn, null, s))
            };
            Mn.propTypes = {
                showNewRating: R().bool,
                showOpenNow: R().bool,
                resStatusText: R().string,
                timing: R().shape({
                    timing_desc: R().string,
                    customised_timings: R().object
                }).isRequired,
                tooltipPosition: R().string,
                widthMaxContent: R().bool,
                infoLineOnClick: R().func,
                disclaimerText: R().string,
                showMobileTooltip: R().bool
            }, Mn.defaultProps = {
                showNewRating: !1,
                showOpenNow: !1,
                resStatusText: "",
                tooltipPosition: "",
                widthMaxContent: !1,
                infoLineOnClick: P.default,
                disclaimerText: "",
                showMobileTooltip: !1
            };
            const Un = Mn;
            var Gn = ["name", "rating_new", "timing", "locality", "setParent", "reviewSectionData", "cuisines", "isMobile", "isCompressed", "loadThisPage", "hideTimingInfo", "isPartner", "subType", "moreInfoText", "openAppModalInfo", "reviewDeeplinkUrl", "showOpenNow"],
                qn = function(e) {
                    var t = e.name,
                        n = e.rating_new,
                        r = e.timing,
                        i = e.locality,
                        o = e.setParent,
                        a = e.reviewSectionData,
                        s = e.cuisines,
                        u = e.isMobile,
                        l = e.isCompressed,
                        c = e.loadThisPage,
                        d = e.hideTimingInfo,
                        m = e.isPartner,
                        f = e.subType,
                        h = e.moreInfoText,
                        p = e.openAppModalInfo,
                        v = e.reviewDeeplinkUrl,
                        g = e.showOpenNow,
                        E = (0, ce.Z)(e, Gn),
                        _ = (0, O.useState)(!1),
                        b = (0, le.Z)(_, 2),
                        y = b[0],
                        I = b[1],
                        w = function(e) {
                            return function() {
                                o(e)
                            }
                        },
                        T = !m,
                        Z = E.resUrl,
                        S = void 0 === Z ? "" : Z,
                        C = (0, Gt.q)(f),
                        N = function() {
                            !(0, de.default)(S) && T && c(S, u ? 1 : 0)
                        },
                        R = function() {
                            Nt(), v && !(0, qt.ej)(Vt.Ul) ? ((0, qt.d8)(Vt.Ul, "true", 30), (0, Ut.V$)(C, Ut.Hp.OPEN_MODAL, P), I(!0)) : w(a)()
                        },
                        P = "resHeader",
                        L = (0, A.default)(r, "customised_timings.disclaimer", ""),
                        x = u && f === Rt.kl,
                        D = !m && u && f !== Rt.kl,
                        k = !m && S && x,
                        M = x || m,
                        U = !d && !m && !x,
                        G = m || u && f === Rt.kl,
                        q = function() {
                            return u && f === Rt.kl ? O.createElement(gn, {
                                onClick: N
                            }, t) : O.createElement(vn, {
                                onCLick: N
                            }, t)
                        };
                    return O.createElement(hn, null, O.createElement(pn, {
                        extraTopMargin: f === Rt.kl
                    }, D && O.createElement(fn.ZP, (0, ue.Z)({}, n, {
                        isPartner: m,
                        clickHandler: !m && R,
                        isMobile: u,
                        ratingV2Size: u ? 300 : 400
                    })), O.createElement(On, null, O.createElement(Sn, null, O.createElement(Cn, null, O.createElement(q, null), !u && O.createElement(fn.ZP, (0, ue.Z)({}, n, {
                        isPartner: m,
                        clickHandler: !m && R
                    }))), O.createElement(En, null, Ft(s), !x && O.createElement(_n, {
                        href: T && (0, A.default)(i, "url", "")
                    }, (0, A.default)(i, "text", ""))), U && O.createElement(Un, {
                        showNewRating: !(0, de.default)(n),
                        showOpenNow: g,
                        resStatusText: (0, A.default)(E, "res_status_text", ""),
                        timing: r,
                        tooltipPosition: l ? "top" : "right",
                        widthMaxContent: !u,
                        infoLineOnClick: function() {
                            (0, Mt.CH)()
                        },
                        disclaimerText: L,
                        showMobileTooltip: u
                    })), M && O.createElement(kn, (0, ue.Z)({}, n, {
                        clickHandler: !m && R,
                        showConicalRating: G,
                        ratingV2Size: u ? 200 : 400
                    }))), k && O.createElement(Rn, {
                        href: S,
                        onClick: function() {
                            c(S, 1)
                        }
                    }, h, O.createElement(Nn, {
                        size: "10",
                        color: H.default.z500
                    }))), O.createElement(pe.Z, {
                        isReviewModal: !0,
                        visible: y,
                        onClose: function() {
                            (0, Ut.V$)(C, Ut.Hp.CLOSE_MODAL, P), I(!1)
                        },
                        onUseAppAction: function() {
                            I(!1), (0, Ut.V$)(C, Ut.Hp.USE_APP, P), setTimeout((function() {
                                window.location.href = v
                            }), 100)
                        },
                        onContinueRedirectionAction: function() {
                            I(!1), (0, Ut.V$)(C, Ut.Hp.CONTINUE_REDIRECTION, P), w(a)()
                        },
                        modalInfo: p
                    }))
                };
            qn.propTypes = {
                name: R().string.isRequired,
                cuisine_string: R().string.isRequired,
                rating: R().shape({
                    rating_text: R().string,
                    subtext: R().string,
                    votes: R().string,
                    has_fake_reviews: R().bool,
                    is_new: R().bool,
                    rating_color: R().string
                }),
                locality: R().shape({
                    text: R().string,
                    url: R().string
                }).isRequired,
                timing: R().shape({
                    timing_desc: R().string,
                    customised_timings: R().object
                }).isRequired,
                setParent: R().func,
                reviewSectionData: R().shape({
                    subType: R().string,
                    pageUrl: R().string
                }),
                cuisines: R().arrayOf(R().object),
                isMobile: R().bool,
                isCompressed: R().bool,
                rating_new: R().objectOf(R().object),
                loadThisPage: R().func,
                resUrl: R().string,
                hideTimingInfo: R().bool,
                isPartner: R().bool,
                subType: R().string,
                moreInfoText: R().string,
                openAppModalInfo: R().shape({
                    title: R().string,
                    description: R().string,
                    clickActionText: R().string,
                    closeActionText: R().string,
                    image: R().string
                }),
                reviewDeeplinkUrl: R().string,
                showOpenNow: R().bool
            }, qn.defaultProps = {
                rating: {},
                setParent: P.default,
                reviewSectionData: {},
                cuisines: [],
                isMobile: !1,
                isCompressed: !1,
                rating_new: {},
                loadThisPage: P.default,
                resUrl: "",
                hideTimingInfo: !1,
                isPartner: !1,
                subType: "",
                moreInfoText: "",
                openAppModalInfo: {
                    title: "",
                    description: "",
                    clickActionText: "",
                    closeActionText: "",
                    image: ""
                },
                reviewDeeplinkUrl: "",
                showOpenNow: !1
            };
            const Vn = qn;
            var Fn, Hn, Bn = C.default.section(Fn || (Fn = (0, S.Z)(["\n  position: ", "\n  top: 0;\n  z-index: ", "\n  background: ", ";\n  align-self: flex-start;\n  width: 100%;\n  @media (min-width: 481px) and (max-width: 768px) {\n    padding: 0 1rem;\n  }\n  @media (min-width: 769px) {\n    width: calc(100% + 1rem);\n    padding-right: 1rem;\n  }\n  @media (max-width: 480px) {\n    padding-bottom: 1rem;\n  }\n"])), (function(e) {
                    return e.isMobile ? "relative" : "sticky"
                }), (function(e) {
                    return e.isMobile ? "0" : "3"
                }), me.default),
                jn = function(e) {
                    var t = e.basicInfo,
                        n = e.setHeight,
                        r = e.setParent,
                        i = e.navData,
                        o = e.resHeaderDetails,
                        a = e.refCallback,
                        s = e.setCompressed,
                        u = e.isCompressed,
                        l = e.isMobile,
                        c = e.loadThisPage,
                        d = e.setMediaAlertOpen,
                        m = e.isFloodReliefRes,
                        f = e.hideTimingInfo,
                        h = e.currentPage,
                        p = e.isPartner,
                        v = e.subType,
                        g = e.moreInfoText,
                        E = e.openAppModalInfo,
                        _ = e.reviewDeeplinkUrl,
                        b = e.showOpenNow,
                        y = e.showRatingV2,
                        w = (0, O.useRef)(null);
                    (0, O.useEffect)((function() {
                        return n((0, A.default)(w, "current.clientHeight"))
                    })), (0, O.useEffect)((function() {
                        return a(w)
                    }), []);
                    var T = i.find((function(e) {
                            return "reviews" === e.subType
                        })),
                        Z = function() {
                            var e = w.current.getBoundingClientRect();
                            e.top > 0 && u && s(!1), e.top <= 0 && !u && s(!0)
                        };
                    (0, O.useEffect)((function() {
                        if (m) return P.default;
                        var e = (0, L.Z)(Z, 100);
                        return window.addEventListener("scroll", e),
                            function() {
                                window.removeEventListener("scroll", e)
                            }
                    }), [u, m]);
                    var S = (0, I.Z)((0, I.Z)((0, I.Z)({}, t), o), {}, {
                        setParent: r,
                        reviewSectionData: T,
                        isCompressed: u,
                        isMobile: l,
                        loadThisPage: c,
                        hideTimingInfo: f,
                        isPartner: p,
                        subType: v,
                        moreInfoText: g,
                        openAppModalInfo: E,
                        reviewDeeplinkUrl: _,
                        showOpenNow: b
                    });
                    return O.createElement(Bn, {
                        ref: w,
                        currentPage: h,
                        isMobile: l
                    }, y ? O.createElement(Vn, S) : O.createElement(jt, S), !m && O.createElement(x.Z, {
                        showActions: !u
                    }), O.createElement(zn, {
                        isCompressed: u
                    }, O.createElement(ne, {
                        basicInfo: t,
                        setMediaAlertOpen: d
                    })))
                },
                zn = C.default.div(Hn || (Hn = (0, S.Z)(["\n  max-width: 100%;\n  transform: ", ";\n  transition: transform 0.2s ease-in-out;\n"])), (function(e) {
                    return e.isCompressed ? "translate3d(0px, -63px, 0px)" : "translateZ(0px)"
                }));
            jn.propTypes = {
                basicInfo: R().shape({
                    name: R().string,
                    rating: R().shape({
                        rating_text: R().string,
                        subtext: R().string,
                        votes: R().string
                    })
                }).isRequired,
                featureRail: R().arrayOf(R().object),
                resHeaderDetails: R().shape({
                    cuisines: R().array,
                    establishments: R().array,
                    locality: R().object
                }),
                currentPage: R().string,
                setHeight: R().func,
                setParent: R().func,
                navData: R().arrayOf(R().object).isRequired,
                refCallback: R().func,
                setCompressed: R().func,
                banUGCStates: R().bool,
                reviewed: R().bool,
                isLoggedIn: R().bool.isRequired,
                isMobile: R().bool,
                isCompressed: R().bool,
                loadThisPage: R().func,
                setMediaAlertOpen: R().func,
                isFloodReliefRes: R().bool,
                hideTimingInfo: R().bool,
                isPartner: R().bool,
                subType: R().string,
                moreInfoText: R().string,
                openAppModalInfo: R().shape({
                    title: R().string,
                    description: R().string,
                    clickActionText: R().string,
                    closeActionText: R().string,
                    image: R().string
                }),
                reviewDeeplinkUrl: R().string,
                showOpenNow: R().bool,
                showRatingV2: R().bool
            }, jn.defaultProps = {
                featureRail: [],
                isMobile: !1,
                currentPage: "",
                setHeight: P.default,
                setParent: P.default,
                resHeaderDetails: {},
                refCallback: P.default,
                setCompressed: P.default,
                banUGCStates: !1,
                reviewed: !1,
                isCompressed: !1,
                loadThisPage: P.default,
                setMediaAlertOpen: P.default,
                isFloodReliefRes: !1,
                hideTimingInfo: !1,
                isPartner: !1,
                subType: "",
                moreInfoText: "",
                openAppModalInfo: {
                    title: "",
                    description: "",
                    clickActionText: "",
                    closeActionText: "",
                    image: ""
                },
                reviewDeeplinkUrl: "",
                showOpenNow: !1,
                showRatingV2: !1
            };
            const Wn = (0, O.memo)(jn, T.Uh);
            var Kn = n("Ujvf"),
                Yn = n("ScDn"),
                Jn = n("O7nn"),
                Xn = n("v4uT"),
                Qn = [Vt.xf, Vt.w2, Vt.Z7, Vt.tG];
            const $n = (0, w.$j)((function(e) {
                var t, n, r = (0, A.default)(e, "pages.current.resId", 0),
                    i = (0, A.default)(e, "pages.restaurant.".concat(r, ".sections"), {}),
                    o = (0, A.default)(i, Vt.i6, {}),
                    a = !!(0, A.default)(e, "pages.current.isFloodReliefRes", !1),
                    s = (0, Jn.Z)((0, A.default)(i, "".concat(Vt.ts, ".reviewModalInfo"), {}));
                return {
                    isFloodReliefRes: a,
                    featureRail: (t = (0, A.default)(i, Vt.Ek, {}), n = [], Qn.forEach((function(e) {
                        t[e] && n.push((0, I.Z)((0, I.Z)({}, t[e]), {}, {
                            type: e
                        }))
                    })), n),
                    navData: (0, A.default)(e, "pages.restaurant.".concat(r, ".navbarSection"), []),
                    isLoggedIn: (0, T.Pc)(e),
                    resHeaderDetails: {
                        locality: (0, A.default)(i, "".concat(Vt.EN, ".LOCALITY"), {}),
                        cuisines: (0, A.default)(i, "".concat(Vt.EN, ".CUISINES"), []),
                        establishments: (0, A.default)(i, "".concat(Vt.EN, ".ESTABLISHMENTS"), [])
                    },
                    reviewed: (0, A.default)(i, "".concat(Vt.i6, ".review.reviewed"), !1),
                    basicInfo: (0, A.default)(i, Vt.r0, {}),
                    isMobile: !!(0, A.default)(e, "pages.current.isMobile", !1),
                    isPartner: (0, A.default)(i, "".concat(Vt.r0, ".is_partner"), !1),
                    locale: {
                        WRITE_REVIEW_TITLE: (0, A.default)(e, "langKeys.WRITE_REVIEW_TITLE", ""),
                        RATE_EXPERIENCE_TITLE: (0, A.default)(e, "langKeys.RATE_EXPERIENCE_TITLE", ""),
                        NO_REVIEW_TEXT: (0, A.default)(e, "langKeys.NO_REVIEW_TEXT", ""),
                        ADD_REVIEW_TITLE: (0, A.default)(e, "langKeys.ADD_REVIEW_TITLE", "")
                    },
                    share: (0, A.default)(o, "share", {}),
                    bookmark: (0, A.default)(o, "bookmark", {}),
                    gAds: (0, A.default)(e, "gAds", []),
                    moreInfoText: (0, A.default)(e, "langKeys.MORE_INFO_TEXT", "More Info"),
                    openAppModalInfo: s,
                    reviewDeeplinkUrl: (0, A.default)(s, "reviewDeeplinkUrl", ""),
                    showOpenNow: (0, A.default)(i, "".concat(Vt.r0, ".show_open_now"), !1),
                    showRatingV2: (0, Xn.Z)(e)
                }
            }), (function(e) {
                return {
                    openLoginForm: function() {
                        return e((0, Kn.WG)())
                    },
                    showErrorToast: function(t) {
                        return e((0, Kn.u1)(t))
                    },
                    showSuccessToast: function(t) {
                        return e((0, Kn.SC)(t))
                    },
                    updateBookmark: function(t) {
                        e((0, Yn.yR)(t))
                    },
                    loadThisPage: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return (0, Z.ij)(e, t, void 0, void 0, n)
                    }
                }
            }))(Wn)
        },
        FR2j: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r, i, o = n("h4VS"),
                a = n("pU3V"),
                s = n("q1tI"),
                u = n("vOnD"),
                l = n("17x9"),
                c = n.n(l),
                d = n("FrN4"),
                m = n("ifKl"),
                f = n("HMsx"),
                h = function(e) {
                    var t = e.label,
                        n = e.children,
                        r = (0, s.useState)(!1),
                        i = (0, a.Z)(r, 2),
                        o = i[0],
                        u = i[1];
                    return s.createElement(s.Fragment, null, s.createElement(p, {
                        onClick: function() {
                            return u(!0)
                        }
                    }, n), s.createElement(d.default, {
                        visible: o,
                        onClose: function() {
                            return u(!1)
                        },
                        isCentered: !0
                    }, s.createElement(v, null, "function" == typeof t ? t() : t)))
                },
                p = u.default.span(r || (r = (0, o.Z)([""]))),
                v = u.default.div(i || (i = (0, o.Z)(["\n  padding: 1rem;\n  font-size: 1.2rem;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  min-height: 8rem;\n"])), f.default.z900);
            h.propTypes = {
                label: c().oneOf([c().func, c().string]),
                children: c().node
            }, h.defaultProps = {
                label: m.default,
                children: null
            };
            const g = h
        },
        "r/cL": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n("wx14"),
                i = n("q1tI"),
                o = n("MKeS"),
                a = n("X6dH"),
                s = (0, o.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "layoutEntries-ResHeaderDesktop"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(2258), n.e(6230), n.e(5707), n.e(5165), n.e(3532)]).then(n.bind(n, "XzJK"))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return "XzJK"
                    }
                }),
                u = function(e) {
                    return i.createElement(a.Z, (0, r.Z)({
                        DesktopComponent: s
                    }, e))
                };
            const l = u
        },
        en2A: (e, t, n) => {
            "use strict";
            n.d(t, {
                xf: () => i,
                w2: () => o,
                Z7: () => a,
                tG: () => s,
                c9: () => u,
                _c: () => l,
                nh: () => c,
                OF: () => d,
                vI: () => m,
                qI: () => f,
                gU: () => h,
                X: () => p,
                iK: () => v,
                xR: () => g,
                OU: () => E,
                H7: () => _,
                Ok: () => b,
                Bt: () => y,
                Ms: () => I,
                ts: () => w,
                r0: () => A,
                gE: () => T,
                Ek: () => Z,
                HN: () => S,
                EN: () => O,
                G9: () => C,
                tL: () => N,
                W3: () => R,
                zJ: () => P,
                hE: () => L,
                Fs: () => x,
                YB: () => D,
                oI: () => k,
                i6: () => M,
                BX: () => U,
                nm: () => G,
                K_: () => q,
                s: () => V,
                A0: () => F,
                eZ: () => H,
                AK: () => B,
                m: () => j,
                rc: () => z,
                ur: () => W,
                DV: () => K,
                F: () => Y,
                ZS: () => J,
                tC: () => X,
                lk: () => Q,
                iI: () => $,
                lX: () => ee,
                u4: () => te,
                YT: () => ne,
                I6: () => re,
                Cw: () => ie,
                QN: () => oe,
                Xy: () => ae,
                WX: () => se,
                w4: () => ue,
                Dy: () => le,
                Y1: () => ce,
                S3: () => de,
                d9: () => me,
                pG: () => fe,
                zK: () => he,
                Z6: () => pe,
                oc: () => ve,
                qr: () => ge,
                qS: () => Ee,
                cg: () => _e,
                xy: () => be,
                yD: () => ye,
                fr: () => Ie,
                q_: () => we,
                Ul: () => Ae,
                GP: () => Te,
                Mz: () => Ze
            });
            var r = n("VAjR"),
                i = "HYGIENE",
                o = "HYPERPURE",
                a = "TRANSPARENCY",
                s = "QUALITY",
                u = "SAFETY_WHO",
                l = "SAFETY_RIDER",
                c = "SAFETY_TEMP",
                d = "Load more management comments",
                m = "Load more comments",
                f = "Okay",
                h = "edit",
                p = "delete",
                v = "publish",
                g = "unfollow",
                E = "follow",
                _ = {
                    RES_PAGE: "restaurant page"
                },
                b = {
                    SHARE: "share",
                    BOOKMARK: "bookmark",
                    DIRECTIONS: "directions top",
                    DIRECTIONS_MAP: "directions map",
                    CALL: "call",
                    TABLE_RESERVATIONS: "table reservations"
                },
                y = "RES_TO_SEARCH_HOME_BACK_EVENT",
                I = "SECTION_IMAGE_CAROUSEL",
                w = "SECTION_REVIEW_AND_ORDER_MODAL_INFO",
                A = "SECTION_BASIC_INFO",
                T = "SECTION_OBP_TAGS",
                Z = "SECTION_FEATURE_RAIL",
                S = "SECTION_MAGIC_LINKS",
                O = "SECTION_RES_HEADER_DETAILS",
                C = "SECTION_RES_DETAILS",
                N = "SECTION_MENU_MODAL_INFO",
                R = "SECTION_DAILY_MENU",
                P = "SECTION_DAILY_MENU_HIGHLIGHTS",
                L = "SECTION_BRUNCH_DETAILS",
                x = "SECTION_BUFFET_DETAILS",
                D = "SECTION_FEATURED_COLLECTIONS",
                k = "SECTION_SPONSORED_ADS",
                M = "SECTION_USER_ACTIONS",
                U = "SECTION_TABLE_BOOKING",
                G = "SECTION_RES_CONTACT",
                q = "SECTION_RATING_HISTOGRAM",
                V = "SECTION_RATING_HIGHLIGHTS",
                F = "SECTION_TOP_TAGS",
                H = "SECTION_USER_RATING",
                B = "SECTION_REVIEW_HIGHLIGHTS",
                j = "SECTION_SIMILAR_RES",
                z = "SECTION_EVENTS",
                W = "SECTION_EVENTS_HIGHLIGHTS",
                K = "SECTION_REVIEWS",
                Y = "SECTION_GALLERY_PHOTOS",
                J = "SECTION_IMAGE_MENU",
                X = "SECTION_BREADCRUMBS",
                Q = "SECTION_RATING_DATA",
                $ = "SECTION_FOOTER",
                ee = "SECTION_UPCOMING_BOOKING",
                te = "SECTION_GPAY_PROMO_DATA",
                ne = "IMAGES",
                re = "VIDEOS",
                ie = "COLLECTIONS",
                oe = "AD_BANNERS",
                ae = "RESTAURANTS",
                se = "REVIEWS",
                ue = "RATING",
                le = "POSITIVE_TAGS",
                ce = "NEGATIVE_TAGS",
                de = "REVIEW_COMMENTS",
                me = "REVIEW_REPLIES",
                fe = "PHOTO_COMMENTS",
                he = "EVENTS",
                pe = "SECTION_RESERVATION_DATA",
                ve = "SECTION_TEXT_MENU",
                ge = 330,
                Ee = 220,
                _e = [r.lX, r.eO, r.M6],
                be = [r.lX, r.eO],
                ye = [r.kl, r.l1],
                Ie = [r.lX, r.sk, r.th, r.yg],
                we = [r.lX, r.sk, r.th],
                Ae = "openAppReviewModal",
                Te = "openAppOrderModal",
                Ze = 56
        },
        s2Gh: (e, t, n) => {
            "use strict";
            n.d(t, {
                KQ: () => I,
                Cn: () => w,
                mI: () => A,
                CL: () => T,
                hz: () => Z,
                RB: () => S,
                gx: () => O,
                CH: () => C,
                fd: () => N,
                x7: () => R,
                lc: () => P,
                qC: () => L,
                vB: () => x,
                D5: () => D,
                Ke: () => k,
                pv: () => M,
                $0: () => U,
                Qy: () => G,
                Xn: () => q,
                Hp: () => V
            });
            var r = n("Ar8T"),
                i = "web_res_scroll",
                o = "cart_unit_cost_missing",
                a = "cart_unit_cost_parse_failed",
                s = "res_page_carousel_arrow_click",
                u = "res_page_z_logo_click",
                l = "res_page_back_icon_click",
                c = "res_page_info_icon_click",
                d = "res_page_mobile_tabs_click",
                m = "res_property_tags_click",
                f = "res_page_menu_image_click",
                h = "res_page_see_all_outlets_click",
                p = "res_page_our_sponsors_card_click",
                v = "res_page_write_review_stars_click",
                g = "res_page_single_review_user_image_click",
                E = "res_page_single_review_user_image_click",
                _ = "res_page_single_review_follow_click",
                b = "res_page_view_all_reviews_click",
                y = "res_page_similar_res_card_click",
                I = {
                    REVIEW: "review",
                    CALL: "call",
                    DIRECTION: "direction"
                },
                w = function(e) {
                    (0, r.q)(i, [e])
                },
                A = function(e) {
                    var t = e.dishes,
                        n = e.resId,
                        i = e.userId,
                        a = e.appType;
                    (0, r.q)(o, [t, i, n, a])
                },
                T = function(e) {
                    var t = e.price,
                        n = e.resId,
                        i = e.userId,
                        o = e.appType;
                    (0, r.q)(a, [t, n, i, o])
                },
                Z = function(e) {
                    (0, r.q)(s, [e])
                },
                S = function() {
                    (0, r.q)(u)
                },
                O = function() {
                    (0, r.q)(l)
                },
                C = function() {
                    (0, r.q)(c)
                },
                N = function(e) {
                    (0, r.q)(d, [e])
                },
                R = function(e) {
                    (0, r.q)(m, [e])
                },
                P = function(e, t) {
                    (0, r.q)(f, [e, t])
                },
                L = function() {
                    (0, r.q)(h)
                },
                x = function() {
                    (0, r.q)(p)
                },
                D = function() {
                    (0, r.q)(v)
                },
                k = function(e) {
                    (0, r.q)(g, [e])
                },
                M = function(e) {
                    (0, r.q)(E, [e])
                },
                U = function(e) {
                    (0, r.q)(_, [e])
                },
                G = function() {
                    (0, r.q)(b)
                },
                q = function() {
                    (0, r.q)(y)
                },
                V = function(e) {
                    (0, r.q)("res_page_bottom_tab_click", [e])
                }
        },
        ncyx: (e, t, n) => {
            "use strict";
            n.d(t, {
                I6: () => r,
                FH: () => i,
                pW: () => o,
                CW: () => a,
                WC: () => s,
                EM: () => u
            });
            var r = "PERM_CLOSED",
                i = "TEMP_CLOSED",
                o = "OPENING_SOON",
                a = "SHELLED",
                s = "DISCLAIMER",
                u = function(e) {
                    var t = e.is_perm_closed,
                        n = e.is_temp_closed,
                        u = e.is_opening_soon,
                        l = e.is_shelled,
                        c = e.disclaimer_text,
                        d = "";
                    return t ? d = r : n ? d = i : u ? d = o : c ? d = s : l && (d = a), d
                }
        },
        ZR86: (e, t, n) => {
            "use strict";
            n.d(t, {
                Hp: () => c,
                S$: () => d,
                cL: () => m,
                Vu: () => f,
                FT: () => h,
                V$: () => p
            });
            var r = n("Ar8T"),
                i = n("gwKh"),
                o = n("VAjR"),
                a = "mweb_open_app_modal_click_action",
                s = "mweb_menu_modal_click_action",
                u = "mweb_order_modal_click_action",
                l = "mweb_review_modal_click_action",
                c = {
                    USE_APP: "use-app",
                    CONTINUE_REDIRECTION: "continue-redirection",
                    CLOSE_MODAL: "close-modal",
                    OPEN_MODAL: "open-modal"
                },
                d = "non-AMP",
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        i = [e, t, n];
                    (0, r.q)(a, i)
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = [e, d, t];
                    (0, r.q)(s, n)
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = [e || (0, i.q)(o.lX), d, t];
                    (0, r.q)(u, n)
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        i = [e, d, t, n];
                    (0, r.q)(l, i)
                }
        },
        "n+uj": (e, t, n) => {
            "use strict";
            n.d(t, {
                kz: () => r,
                nF: () => i,
                c6: () => o,
                SN: () => a,
                P9: () => s,
                P0: () => u,
                xh: () => l,
                O: () => c,
                gz: () => d,
                TR: () => m,
                _$: () => f,
                RB: () => h,
                ED: () => p,
                lZ: () => v,
                bo: () => g,
                j8: () => E,
                bY: () => _,
                GJ: () => b,
                H8: () => y,
                h8: () => I
            });
            var r = {
                    INITIATE: "LOAD_MORE_SEARCH_RESULTS_INITIATE",
                    SUCCESS: "LOAD_MORE_SEARCH_RESULTS_SUCCESS",
                    FAILED: "LOAD_MORE_SEARCH_RESULTS_FAILED"
                },
                i = {
                    MOUNT: "SEARCH_PAGE_MOUNTED"
                },
                o = function() {
                    return {
                        type: i.MOUNT
                    }
                },
                a = function() {
                    return {
                        type: r.INITIATE
                    }
                },
                s = function(e, t) {
                    return {
                        type: r.SUCCESS,
                        searchResult: e,
                        pageUrl: t
                    }
                },
                u = function() {
                    return {
                        type: r.FAILED
                    }
                },
                l = {
                    INITIATE: "APPLY_FILTERS_INITIATE",
                    SUCCESS: "APPLY_FILTERS_SUCCESS",
                    FAILED: "APPLY_FILTERS_FAILED"
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return {
                        type: l.INITIATE,
                        filters: e,
                        locationChanged: t
                    }
                },
                d = function(e) {
                    return {
                        type: l.SUCCESS,
                        searchResult: e
                    }
                },
                m = function() {
                    return {
                        type: l.FAILED
                    }
                },
                f = "APPLY_MODAL_FILTERS",
                h = function(e) {
                    return {
                        type: f,
                        modalFilters: e
                    }
                },
                p = "APPLY_RAIL_FILTER",
                v = function(e) {
                    return {
                        type: p,
                        filter: e
                    }
                },
                g = "CLEAR_ALL_SEARCH_FILTERS",
                E = function() {
                    return {
                        type: g
                    }
                },
                _ = "CLEAR_SEARCH_MODAL_FILTER",
                b = function(e) {
                    return {
                        type: _,
                        filterName: e
                    }
                },
                y = "SELECT_SEARCH_TAB",
                I = function(e) {
                    return {
                        type: y,
                        tab: e
                    }
                }
        },
        asmC: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r, i, o = n("h4VS"),
                a = n("q1tI"),
                s = n("vOnD"),
                u = n("XhtD"),
                l = n("BAyj"),
                c = n("eLLh"),
                d = n("2fHp"),
                m = n("f5P+");
            const f = function() {
                var e = (0, u.default)(4);
                return a.createElement(d.default, {
                    large: !0
                }, a.createElement(h, null, a.createElement(c.default, {
                    gap: 20
                }, e.map((function(e) {
                    return a.createElement(c.default.Item, {
                        colD: 2,
                        colM: 3,
                        key: e
                    }, a.createElement(p, null))
                })))), a.createElement(m.Z, null))
            };
            var h = s.default.div(r || (r = (0, o.Z)(["\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  @media (max-width: 480px) {\n    margin-bottom: 2rem;\n  }\n"]))),
                p = (0, s.default)(l.default)(i || (i = (0, o.Z)(["\n  border-radius: 0.6rem;\n  height: 4rem;\n  @media (max-width: 480px) {\n    height: 3rem;\n  }\n"])))
        },
        VVlO: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => de
            });
            var r, i, o, a, s, u, l, c, d, m, f, h, p, v, g, E, _, b, y, I, w, A = n("q1tI"),
                T = n("17x9"),
                Z = n.n(T),
                S = n("ifKl"),
                O = n("FrN4"),
                C = n("30GX"),
                N = n("SNoJ"),
                R = n("7EGn"),
                P = n("8rAy"),
                L = n("P62M"),
                x = n("h4VS"),
                D = n("vOnD"),
                k = n("HMsx"),
                M = n("wRyO"),
                U = n("LSsp"),
                G = n("lFeK"),
                q = n("SEds"),
                V = n("wcxm"),
                F = D.default.div(r || (r = (0, x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),
                H = D.default.div(i || (i = (0, x.Z)(["\n  width: 4.6rem;\n  height: 0.5rem;\n  background: ", ";\n  border-radius: 0.8rem;\n  margin: 0 0 1.6rem 0;\n  ", "\n"])), k.default.z200, (function(e) {
                    return e.isReviewModal && (0, D.css)(o || (o = (0, x.Z)(["\n      margin-left: 2rem;\n    "])))
                })),
                B = D.default.div(a || (a = (0, x.Z)(["\n  display: flex;\n  align-items: center;\n"]))),
                j = D.default.div(s || (s = (0, x.Z)(["\n  display: flex;\n  align-items: flex-start;\n"]))),
                z = D.default.div(u || (u = (0, x.Z)(["\n  display: flex;\n  align-items: ", ";\n  width: 100vw;\n"])), (function(e) {
                    return e.isProCard ? "center" : "flex-start"
                })),
                W = D.default.div(l || (l = (0, x.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 1.2rem 1.2rem 0 0;\n  align-items: center;\n  background: linear-gradient(281.02deg, ", " 1.23%, #f1f1f1 98.88%);\n  margin: -3.1rem -2rem 1.9rem -2rem;\n  padding: 1.2rem 2rem 0 2rem;\n  ", "\n"])), U.default, (function(e) {
                    return e.noLeftPadding && (0, D.css)(c || (c = (0, x.Z)(["\n      padding-left: 0;\n    "])))
                })),
                K = D.default.div(d || (d = (0, x.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 1.2rem 1.2rem 0 0;\n  align-items: center;\n  background: linear-gradient(281.02deg, ", " 1.23%, #f1f1f1 98.88%);\n  padding-top: 1.2rem;\n  margin-bottom: 1.8rem;\n  padding-bottom: 3rem;\n  min-height: 18.5rem;\n  ", "\n"])), U.default, (function(e) {
                    return e.leftPadding && (0, D.css)(m || (m = (0, x.Z)(["\n      padding-left: 2rem;\n    "])))
                })),
                Y = D.default.div(f || (f = (0, x.Z)(["\n  display: block;\n  width: 100vw;\n  margin-top: -3.1rem;\n  & > section:first-child {\n    height: 15rem;\n    margin-bottom: 5rem;\n  }\n  & > section:first-child > section:first-child > div {\n    display: none;\n  }\n"]))),
                J = (0, D.default)(V.P)(h || (h = (0, x.Z)(["\n  margin-left: ", ";\n"])), (function(e) {
                    return e.isReviewModal ? "1rem" : "2.4rem"
                })),
                X = (0, D.default)(V.P)(p || (p = (0, x.Z)(["\n  margin-left: 2.4rem;\n  margin-right: 2rem;\n"]))),
                Q = (0, D.default)(G.default)(v || (v = (0, x.Z)(["\n  width: ", ";\n  height: ", ";\n  border-radius: 0.5rem;\n  margin: 0 0.6rem 1.6rem 0.6rem;\n"])), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                $ = D.default.p(g || (g = (0, x.Z)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 500;\n  color: ", ";\n  margin: 0 0 1.1rem 0;\n"])), k.default.z900),
                ee = D.default.p(E || (E = (0, x.Z)(["\n  font-size: 1.4rem;\n  line-height: 2.1rem;\n  font-weight: 400;\n  color: ", ";\n  margin: 0 0 2.2rem 0;\n  padding: 0rem 3.8rem;\n  text-align: center;\n"])), k.default.z600),
                te = (0, D.default)(V.P)(_ || (_ = (0, x.Z)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 500;\n  color: ", ";\n  margin: 0 0 1.2rem 0;\n"])), q.black),
                ne = (0, D.default)(V.P)(b || (b = (0, x.Z)(["\n  font-size: 1.4rem;\n  line-height: 2.1rem;\n  font-weight: 400;\n  color: ", ";\n"])), q.black),
                re = D.default.div(y || (y = (0, x.Z)(["\n  width: 100%;\n  background: ", ";\n  border-radius: 0.6rem;\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  font-weight: 500;\n  margin: 0 0 1.8rem 0;\n  padding: 0.9rem 0rem;\n  text-align: center;\n"])), M.default.z500, U.default),
                ie = D.default.p(I || (I = (0, x.Z)(["\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: ", ";\n  margin: 0 0 2.4rem 0;\n  ", "\n"])), M.default.z500, (function(e) {
                    return e.extraBottomPadding && (0, D.css)(w || (w = (0, x.Z)(["\n      margin-bottom: 4.5rem;\n    "])))
                })),
                oe = n("z6+9"),
                ae = n("QVsL"),
                se = n("iWs2"),
                ue = function(e) {
                    var t = e.title,
                        n = e.description,
                        r = e.image,
                        i = e.isProCard;
                    return A.createElement(K, {
                        leftPadding: i
                    }, A.createElement(H, null), A.createElement(z, {
                        isProCard: i
                    }, A.createElement(C.default, {
                        height: i ? "4.5rem" : "12rem",
                        width: "12rem",
                        src: r,
                        alt: "order image"
                    }), A.createElement(X, null, A.createElement(te, null, t), A.createElement(ne, null, n))))
                };
            ue.propTypes = {
                title: Z().string,
                description: Z().string,
                image: Z().string,
                isProCard: Z().bool
            }, ue.defaultProps = {
                title: "",
                description: "",
                image: "",
                isProCard: !1
            };
            const le = ue;
            var ce = function(e) {
                var t = e.isMenuModal,
                    n = e.isReviewModal,
                    r = e.isOrderModal,
                    i = e.isliveTrackingModal,
                    o = e.visible,
                    a = e.onClose,
                    s = e.onUseAppAction,
                    u = e.onContinueRedirectionAction,
                    l = e.modalInfo,
                    c = e.pageUrl,
                    d = e.extraBottomPadding,
                    m = l.title,
                    f = l.description,
                    h = l.clickActionText,
                    p = l.closeActionText,
                    v = l.image,
                    g = l.modalData;
                return (0, ae.Z)((0, se.Z)(!0, o, a, c)), A.createElement(O.default, {
                    visible: o,
                    onClose: a,
                    type: "medium",
                    slideOnMobile: !0,
                    isCentered: !0,
                    mobileHeight: "0vh",
                    padding: "1rem 2rem 2rem 2rem"
                }, A.createElement(F, null, A.createElement(H, null), t || n || r ? A.createElement(A.Fragment, null, r ? !!o && A.createElement(Y, null, A.createElement(P.default, {
                    componentData: g,
                    componentToRender: le,
                    slidesToShowMobile: 1,
                    autoScroll: !0,
                    mobileArrowHidden: !0,
                    activeRedDots: !0
                })) : A.createElement(W, {
                    noLeftPadding: n
                }, A.createElement(H, {
                    isReviewModal: n
                }), A.createElement(j, null, A.createElement(C.default, {
                    height: n ? "13.8rem" : "13.1rem",
                    width: n ? "26rem" : "13rem",
                    src: v,
                    alt: "menu image"
                }), A.createElement(J, {
                    isReviewModal: n
                }, A.createElement(te, null, m), A.createElement(ne, null, f))))) : A.createElement(A.Fragment, null, A.createElement(B, null, A.createElement(Q, {
                    src: oe.XI,
                    size: "4rem"
                }), i && A.createElement(Q, {
                    src: (0, L.Vl)(oe.Ln),
                    size: "3.6rem"
                })), A.createElement($, null, m), A.createElement(ee, null, f)), A.createElement(re, {
                    onClick: s
                }, h), A.createElement(ie, {
                    onClick: u,
                    extraBottomPadding: d
                }, p)))
            };
            ce.propTypes = {
                isReviewModal: Z().bool,
                isMenuModal: Z().bool,
                isOrderModal: Z().bool,
                isliveTrackingModal: Z().bool,
                visible: Z().bool.isRequired,
                onClose: Z().func.isRequired,
                onUseAppAction: Z().func,
                onContinueRedirectionAction: Z().func,
                modalInfo: Z().shape({
                    title: Z().string,
                    description: Z().string,
                    clickActionText: Z().string,
                    closeActionText: Z().string,
                    image: Z().string,
                    modalData: Z().shape({
                        title: Z().string,
                        description: Z().string,
                        image: Z().string,
                        isProCard: Z().bool
                    })
                }),
                pageUrl: Z().string,
                extraBottomPadding: Z().bool
            }, ce.defaultProps = {
                isliveTrackingModal: !1,
                isMenuModal: !1,
                isReviewModal: !1,
                isOrderModal: !1,
                onUseAppAction: S.default,
                onContinueRedirectionAction: S.default,
                modalInfo: {
                    title: "",
                    description: "",
                    clickActionText: "",
                    closeActionText: "",
                    image: "",
                    modalData: {
                        title: "",
                        description: "",
                        image: "",
                        isProCard: !1
                    }
                },
                pageUrl: "",
                extraBottomPadding: !1
            };
            const de = (0, N.$j)((function(e) {
                return {
                    pageUrl: (0, R.default)(e, "pages.current.pageUrl", ""),
                    extraBottomPadding: (0, R.default)(e, "deviceSpecificInfo.styles.extraBottomPadding", !1)
                }
            }))((0, A.memo)(ce, L.Uh))
        },
        EyxB: (e, t, n) => {
            "use strict";
            n.d(t, {
                tt: () => p,
                yl: () => f,
                HP: () => E,
                Yr: () => _,
                i: () => b,
                X0: () => y,
                fR: () => h,
                G0: () => m,
                Sc: () => v,
                rS: () => g,
                z8: () => I,
                fj: () => T,
                _D: () => w,
                JJ: () => A,
                RZ: () => Z,
                ag: () => S
            });
            var r, i = n("h4VS"),
                o = n("VTBJ"),
                a = (n("q1tI"), n("vOnD")),
                s = n("7EGn"),
                u = n("wcxm"),
                l = (n("HMsx"), n("OM32")),
                c = n("P62M"),
                d = n("VAjR"),
                m = "PREVIOUSLY_ORDERED_RAIL",
                f = "COLLECTION_RAIL",
                h = "LDC_Rail",
                p = "brands",
                v = "restaurant",
                g = 3,
                E = 5,
                _ = 4,
                b = 2,
                y = 2,
                I = "SEARCH_RESULTS_BANNER",
                w = function(e) {
                    var t = e.info,
                        n = e.cardAction,
                        r = e.handleOnClick,
                        i = e.isMobile,
                        a = e.order;
                    return {
                        info: (0, o.Z)((0, o.Z)({}, t), {}, {
                            image: (0, o.Z)((0, o.Z)({}, t.image), {}, {
                                url: (0, c.E_)((0, s.default)(t, "image.url", ""), 108, 108)
                            })
                        }),
                        order: (0, o.Z)((0, o.Z)({}, a), {}, {
                            isDeliveringNow: a.isServiceable
                        }),
                        handleOnClick: function() {
                            return function() {
                                return r((0, s.default)(n, "clickUrl", ""))
                            }
                        },
                        isMobile: i
                    }
                },
                A = function(e, t, n) {
                    return {
                        id: (0, s.default)(e, "id", ""),
                        place: {
                            image: {
                                url: (0, s.default)(e, "image.url", ""),
                                base64: (0, s.default)(e, "image.base64", "")
                            },
                            title: (0, s.default)(e, "name", ""),
                            num_places: (0, s.default)(e, "num_places", ""),
                            url: (0, s.default)(e, "url", "")
                        },
                        imageHeight: n ? "24rem" : "32rem",
                        imageWidth: n ? "20rem" : "26rem",
                        onClick: t((0, s.default)(e, "url", ""))
                    }
                },
                T = ((0, a.default)(u.P)(r || (r = (0, i.Z)(["\n  margin-top: 0.4rem;\n\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n  }\n"]))), function() {
                    (0, l.d8)("disableOpenApp", "true", 30)
                }),
                Z = function() {
                    return !!(0, l.ej)("disableOpenApp")
                },
                S = function(e, t) {
                    return {
                        page_info: {
                            name: t ? d.eO : d.lX,
                            isMobile: e
                        }
                    }
                }
        },
        "f5P+": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m,
                _: () => f
            });
            var r, i, o, a = n("h4VS"),
                s = n("q1tI"),
                u = n("vOnD"),
                l = n("XhtD"),
                c = n("BAyj"),
                d = n("eLLh");
            const m = function() {
                (0, s.useEffect)((function() {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }), []);
                var e = (0, l.default)(20);
                return s.createElement(d.default, {
                    gap: 25
                }, e.map((function(e) {
                    return s.createElement(d.default.Item, {
                        colD: 4,
                        colM: 12,
                        key: e
                    }, s.createElement(f, null))
                })))
            };
            var f = function() {
                    return s.createElement("div", null, s.createElement(h, null), s.createElement(p, null), s.createElement(v, null), s.createElement(v, null))
                },
                h = (0, u.default)(c.default)(r || (r = (0, a.Z)(["\n  height: 25rem;\n  border-radius: 0.8rem;\n  @media (max-width: 480px) {\n    height: 22rem;\n  }\n"]))),
                p = (0, u.default)(c.default)(i || (i = (0, a.Z)(["\n  width: 40%;\n  height: 2.6rem;\n  margin-top: 1.5rem;\n  border-radius: 0.6rem;\n"]))),
                v = (0, u.default)(c.default)(o || (o = (0, a.Z)(["\n  height: 1.9rem;\n  margin-top: 1rem;\n  border-radius: 0.6rem;\n"])))
        },
        rGZ9: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gw: () => r,
                zZ: () => i
            });
            var r = "delivery",
                i = "VIEW"
        },
        MJVv: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r, i = n("h4VS"),
                o = n("q1tI"),
                a = n("vOnD"),
                s = n("BAyj"),
                u = (0, a.default)(s.default)(r || (r = (0, i.Z)(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 0.05) 85%,\n    rgba(0, 0, 0, 0.3) 100%\n  );\n"])));
            const l = function() {
                return o.createElement(u, null)
            }
        },
        zbD0: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r, i, o, a = n("h4VS"),
                s = n("q1tI"),
                u = n("vOnD"),
                l = n("2fHp"),
                c = n("BAyj"),
                d = u.default.div(r || (r = (0, a.Z)(["\n  margin-bottom: 10rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  .heading {\n    border-radius: 0.8rem;\n    margin-bottom: 2.5rem;\n    margin-top: 2rem;\n    height: 2.8rem;\n  }\n\n  .subheading-1 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 7.5rem;\n  }\n\n  .subheading-2 {\n    margin-bottom: 1.5rem;\n    border-radius: 0.8rem;\n    height: 2.4rem;\n    width: 10rem;\n  }\n\n  .line {\n    margin-top: 1rem;\n  }\n"]))),
                m = u.default.div(i || (i = (0, a.Z)(["\n  flex-grow: 1;\n  margin-right: 2rem;\n"]))),
                f = u.default.div(o || (o = (0, a.Z)(["\n  flex-shrink: 0;\n  width: 35rem;\n  height: 42rem;\n  border-radius: 0.8rem;\n  margin-top: 2rem;\n  padding: 1rem;\n"])));
            const h = function() {
                return s.createElement(l.default, {
                    large: !0
                }, s.createElement(d, null, s.createElement(f, null, s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                })), s.createElement(m, null, s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "40rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "80%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "40rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "80%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "90%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "1.8rem",
                    width: "20rem"
                }), s.createElement(c.default, {
                    className: "line",
                    width: "70%",
                    height: "2rem"
                }), s.createElement(c.default, {
                    className: "heading",
                    height: "4rem",
                    width: "40rem"
                }))))
            }
        },
        nWop: (e, t, n) => {
            "use strict";
            n.d(t, {
                yF: () => i,
                ct: () => o,
                uv: () => a,
                Gg: () => s,
                I7: () => u,
                M$: () => l,
                DZ: () => c,
                tj: () => d,
                Mw: () => m,
                AU: () => f,
                Tl: () => h,
                nF: () => p,
                tB: () => v,
                rY: () => g,
                mm: () => E,
                Mx: () => _,
                ZZ: () => b,
                CO: () => y,
                s2: () => I,
                Y5: () => w,
                s7: () => A,
                ai: () => T,
                VN: () => Z,
                Yb: () => S
            });
            var r = n("VTBJ"),
                i = {
                    INITIATE: "GET_PAGINATED_DATA_INITIATE",
                    SUCCESS: "GET_PAGINATED_DATA_SUCCESS",
                    FAILED: "GET_PAGINATED_DATA_FAILED"
                },
                o = {
                    INITIATE: "GET_DINELINE_INITIATE",
                    SUCCESS: "GET_DINELINE_SUCCESS",
                    FAILED: "GET_DINELINE_FAILED"
                },
                a = "TOGGLE_FAVOURITE_ORDER",
                s = "TOGGLE_USER_FOLLOWING",
                u = "TOGGLE_HEADER_FOLLOWING",
                l = "CHANGE_COVER_PHOTO",
                c = "CHANGE_PROFILE_PHOTO",
                d = "EDIT_PROFILE",
                m = "PUBLISH_BLOG",
                f = "EDIT_ADDRESS",
                h = function(e, t) {
                    return {
                        type: i.INITIATE,
                        url: e,
                        params: t
                    }
                },
                p = function(e) {
                    return (0, r.Z)({
                        type: i.SUCCESS
                    }, e)
                },
                v = function(e) {
                    return {
                        type: i.FAILED,
                        payload: e
                    }
                },
                g = function(e) {
                    return {
                        type: a,
                        orderId: e
                    }
                },
                E = function(e) {
                    return {
                        type: s,
                        userId: e
                    }
                },
                _ = function(e) {
                    return {
                        type: u,
                        userId: e
                    }
                },
                b = function(e, t) {
                    return {
                        type: l,
                        userId: e,
                        imageUrl: t
                    }
                },
                y = function(e, t) {
                    return {
                        type: c,
                        userId: e,
                        imageUrl: t
                    }
                },
                I = function(e, t) {
                    return {
                        type: d,
                        userId: e,
                        data: t
                    }
                },
                w = function(e) {
                    return (0, r.Z)({
                        type: o.INITIATE
                    }, e)
                },
                A = function(e) {
                    return (0, r.Z)({
                        type: o.SUCCESS
                    }, e)
                },
                T = function(e) {
                    return (0, r.Z)({
                        type: o.FAILED
                    }, e)
                },
                Z = function(e, t, n) {
                    return (0, r.Z)((0, r.Z)({
                        type: m
                    }, e), {}, {
                        userId: t,
                        postId: n
                    })
                },
                S = function(e, t, n, r) {
                    return {
                        type: f,
                        userId: e,
                        oldAddressId: t,
                        newAddressId: n,
                        entities: r
                    }
                }
        },
        NEP9: (e, t, n) => {
            "use strict";
            n.d(t, {
                mM: () => u,
                sF: () => l,
                H4: () => c,
                eR: () => d,
                t5: () => m,
                MS: () => f,
                Sh: () => h,
                d$: () => p,
                BX: () => v,
                SH: () => g,
                SY: () => E,
                yc: () => _,
                dL: () => b,
                cu: () => y,
                F4: () => I,
                ff: () => w,
                QL: () => A,
                Sl: () => T,
                sH: () => Z,
                WX: () => S,
                tJ: () => O,
                U4: () => C,
                PT: () => N,
                GV: () => R,
                WB: () => P,
                M5: () => L,
                U$: () => x,
                dF: () => D,
                OU: () => k,
                xR: () => M,
                CF: () => U,
                bv: () => G,
                nn: () => q,
                KV: () => V,
                K3: () => F,
                tr: () => H,
                bl: () => B,
                rN: () => j,
                f6: () => z,
                MC: () => W,
                pi: () => K,
                sk: () => Y,
                Dg: () => J,
                GH: () => X
            });
            var r, i, o = n("rePB"),
                a = n("VAjR"),
                s = n("45g5"),
                u = "SECTION_USER_BASIC_INFO",
                l = "SECTION_USER_PHOTOS",
                c = "SECTION_USER_REC_VIEWED",
                d = "SECTION_USER_ORDER_HISTORY",
                m = "SECTION_USER_ADDRESS",
                f = "SECTION_USER_FOLLOWER",
                h = "SECTION_USER_REVIEWS",
                p = "SECTION_USER_ORDER_FAVORITE",
                v = "SECTION_TABLE_BOOKING",
                g = "SECTION_BLOG_POSTS",
                E = "SECTION_PROFILE_NAVIGATION",
                _ = "SECTION_PENDING_BLOG_POSTS",
                b = "SECTION_USER_FEED",
                y = "SECTION_SUGGESTED_USERS",
                I = "SECTION_USER_WIDGET",
                w = "SECTION_CDNG_HISTORY",
                A = "SECTION_CDNG_HELP",
                T = "ORDER",
                Z = "USER",
                S = "REVIEWS",
                O = "REVIEW_COMMENTS",
                C = "PHOTO_COMMENTS",
                N = "REVIEW_REPLIES",
                R = "TAGS",
                P = "ADDRESSES",
                L = "IMAGES",
                x = "PENDING_REVIEW",
                D = "CDNG_ORDER",
                k = "follow_user",
                M = "unfollow_user",
                U = "/webFrontend/e8dbf3973a8918dcdf9e7e61daae70f71581003303.png",
                G = "/webFrontend/0fe9c098c4a1284e04065bd13bc1dd911581004318.png",
                q = "/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png",
                V = "/webFrontend/c33e5cd0b755a03f9b2f374b1b8271a91581004801.png",
                F = "/webFrontend/1a33af2333871e0c1222a3ee21ea697f1581070577.png",
                H = "/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png",
                B = [a.P3, a.HK, a.RE, a.ap, a.N9, a.Cr, a.ev, a.$g, a.bv],
                j = 150,
                z = {
                    mobile: {
                        width: "15rem",
                        height: "17rem"
                    },
                    desktop: {
                        width: "18rem",
                        height: "20rem"
                    }
                },
                W = ["MEZZO", "MEDIO"],
                K = (r = {}, (0, o.Z)(r, a.uU, [s.VJ, s.H4]), (0, o.Z)(r, a.kk, [s.UL, s.AU]), (0, o.Z)(r, a.gv, [s.Y, s.Zs]), (0, o.Z)(r, a.d5, [s.fO, s.uQ]), (0, o.Z)(r, a.sU, [s.we, s.w6]), (0, o.Z)(r, a.ZA, [s.Bv, s.Az]), (0, o.Z)(r, a.hV, [s.pv, s.gQ]), r),
                Y = (i = {}, (0, o.Z)(i, a.uU, [s.Id]), (0, o.Z)(i, a.kk, [s.os]), (0, o.Z)(i, a.gv, [s.W0]), (0, o.Z)(i, a.d5, [s.g1]), (0, o.Z)(i, a.sU, [s.V0]), (0, o.Z)(i, a.ZA, [s.gy]), (0, o.Z)(i, a.hV, [s.Le]), i),
                J = [a.xR, a.Kn, a.id],
                X = [a.V0, a.s3, a.JH]
        },
        xTcC: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r, i, o, a = n("h4VS"),
                s = n("q1tI"),
                u = n("BAyj"),
                l = n("vOnD"),
                c = n("2fHp"),
                d = n("kCs9"),
                m = (0, l.default)(u.default)(r || (r = (0, a.Z)(["\n  height: 64px;\n  width: 600px;\n  border-radius: 8px;\n  margin-top: 100px;\n  margin-bottom: 15px;\n\n  @media (max-width: 768px) {\n    margin-top: 75px;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 75px;\n  }\n"]))),
                f = (0, l.default)(u.default)(i || (i = (0, a.Z)(["\n  height: 20px;\n  width: 700px;\n  border-radius: 8px;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 60px;\n    width: 80%;\n    margin-bottom: 25px;\n    margin: auto;\n  }\n"]))),
                h = (0, l.default)(u.default)(o || (o = (0, a.Z)(["\n  height: 520px;\n  width: 100%;\n  border-radius: 8px;\n  margin: auto;\n  margin-bottom: 40px;\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n\n  @media (max-width: 480px) {\n    height: 280px;\n    margin-bottom: 25px;\n  }\n"])));
            const p = function() {
                return s.createElement(s.Fragment, null, s.createElement(d.Z, null), s.createElement(c.default, null, s.createElement(m, null), s.createElement(f, null), s.createElement(h, null)))
            }
        },
        CjUt: (e, t, n) => {
            "use strict";
            n.d(t, {
                Pb: () => r,
                Cc: () => i,
                tc: () => o
            });
            var r = {
                    OPEN: "OPEN_PRECISE_LOCATION_BANNER",
                    CLOSE: "CLOSE_PRECISE_LOCATION_BANNER"
                },
                i = function() {
                    return {
                        type: r.CLOSE
                    }
                },
                o = function() {
                    return {
                        type: r.OPEN
                    }
                }
        },
        KKt4: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r, i = n("wx14"),
                o = n("h4VS"),
                a = n("q1tI"),
                s = n("vOnD"),
                u = n("BAyj"),
                l = (0, s.default)(u.default)(r || (r = (0, o.Z)(["\n  margin: ", ";\n  border-radius: ", ";\n\n  @media (max-width: 768px) {\n    margin: ", ";\n    border-radius: ", ";\n  }\n\n  @media (max-width: 480px) {\n    margin: ", ";\n    border-radius: ", ";\n  }\n"])), (function(e) {
                    return e.marginD ? e.marginD : "none"
                }), (function(e) {
                    return e.radiusD ? e.radiusD : 0
                }), (function(e) {
                    return e.marginT ? e.marginT : "none"
                }), (function(e) {
                    return e.radiusT ? e.radiusT : 0
                }), (function(e) {
                    return e.marginM ? e.marginM : "none"
                }), (function(e) {
                    return e.radiusM ? e.radiusM : 0
                }));
            const c = function(e) {
                return a.createElement(l, (0, i.Z)({
                    width: "100%"
                }, e))
            }
        },
        kCs9: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r, i, o, a = n("h4VS"),
                s = n("q1tI"),
                u = n("BAyj"),
                l = n("vOnD"),
                c = l.default.div(r || (r = (0, a.Z)(["\n  position: relative;\n  width: 100%;\n  height: 540;\n\n  @media (max-width: 768px) {\n    height: 500px;\n  }\n\n  @media (max-width: 480px) {\n    height: 412px;\n  }\n"]))),
                d = (0, l.default)(u.default)(i || (i = (0, a.Z)(["\n  width: 100%;\n"]))),
                m = l.default.div(o || (o = (0, a.Z)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 57.17%,\n      rgba(0, 0, 0, 0.46) 100%\n    ),\n    rgba(0, 0, 0, 0.6);\n"])));
            const f = function() {
                return s.createElement(s.Fragment, null, s.createElement(c, null, s.createElement(d, null), s.createElement(m, null)))
            }
        },
        HKiI: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qf: () => r,
                XS: () => i,
                Au: () => o,
                AY: () => a,
                D4: () => s,
                BD: () => u,
                j: () => l,
                qn: () => c,
                o: () => d
            });
            var r = "SET_CURRENT_CITY",
                i = "SET_CURRENT_PAGE",
                o = "SET_UNIVERSAL_CART",
                a = {
                    INITIATE: "GET_PAGE_INFO_INITIATE",
                    SUCCESS: "GET_PAGE_INFO_SUCCESS",
                    FAILED: "GET_PAGE_INFO_FAILED"
                };

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.page_info,
                    n = void 0 === t ? {} : t,
                    r = e.page_data,
                    o = void 0 === r ? {} : r,
                    a = e.entities,
                    s = void 0 === a ? {} : a,
                    u = e.user,
                    l = void 0 === u ? {} : u,
                    c = e.location,
                    d = void 0 === c ? {} : c,
                    m = e.footerInfo,
                    f = void 0 === m ? {} : m,
                    h = e.langKeys,
                    p = void 0 === h ? {} : h,
                    v = e.deviceSpecificInfo,
                    g = void 0 === v ? {} : v,
                    E = e.pageBlockerInfo,
                    _ = void 0 === E ? {} : E,
                    b = e.setTransientData,
                    y = void 0 === b || b,
                    I = e.fetchConfigs,
                    w = void 0 === I ? {} : I,
                    A = e.hrefLangInfo,
                    T = void 0 === A ? [] : A,
                    Z = e.pageConfig,
                    S = void 0 === Z ? {} : Z;
                return {
                    type: i,
                    pageInfo: n,
                    pageData: o,
                    entities: s,
                    user: l,
                    location: d,
                    footerInfo: f,
                    langKeys: p,
                    deviceSpecificInfo: g,
                    pageBlockerInfo: _,
                    setTransientData: y,
                    fetchConfigs: w,
                    hrefLangInfo: T,
                    pageConfig: S
                }
            }
            var u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return {
                        type: a.INITIATE,
                        pageUrl: e,
                        location: t,
                        isMobile: n,
                        forceLoad: r
                    }
                },
                l = function(e) {
                    return {
                        type: a.SUCCESS,
                        payload: e
                    }
                },
                c = function(e) {
                    return {
                        type: a.FAILED,
                        err: e
                    }
                },
                d = function(e) {
                    return {
                        type: o,
                        data: e
                    }
                }
        },
        TESf: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n("wx14"),
                i = n("Ff2n"),
                o = n("q1tI"),
                a = n("17x9"),
                s = n.n(a),
                u = n("SNoJ"),
                l = n("7EGn"),
                c = ["isMobile", "MobileComponent", "DesktopComponent", "children"],
                d = o.forwardRef((function(e, t) {
                    var n = e.isMobile,
                        a = e.MobileComponent,
                        s = e.DesktopComponent,
                        u = e.children,
                        l = (0, i.Z)(e, c);
                    return n ? null !== a && o.createElement(a, (0, r.Z)({}, l, {
                        ref: t
                    }), u) : null !== s && o.createElement(s, (0, r.Z)({}, l, {
                        ref: t
                    }), u)
                }));
            d.propTypes = {
                isMobile: s().bool,
                MobileComponent: s().elementType,
                DesktopComponent: s().elementType,
                children: s().node
            }, d.defaultProps = {
                isMobile: !1,
                MobileComponent: null,
                DesktopComponent: null,
                children: null
            };
            const m = (0, u.$j)((function(e) {
                return {
                    isMobile: !!(0, l.default)(e, "pages.current.isMobile", !1)
                }
            }), null, null, {
                forwardRef: !0
            })(d)
        },
        X6dH: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n("TESf").Z
        },
        nusx: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => A,
                Mk: () => b
            });
            var r, i, o = n("wx14"),
                a = n("q1tI"),
                s = n("17x9"),
                u = n.n(s),
                l = n("fujP"),
                c = n("7EGn"),
                d = n("ifKl"),
                m = n("Ujff"),
                f = n("czsM"),
                h = n("h4VS"),
                p = n("vOnD"),
                v = p.default.section(r || (r = (0, h.Z)(["\n  display: flex;\n  align-items: end;\n  @media (max-width: 480px) {\n    padding-right: 1rem;\n    justify-content: flex-start;\n    align-items: center;\n    margin-bottom: 1.2rem;\n    margin-top: 1rem;\n  }\n"]))),
                g = p.default.div(i || (i = (0, h.Z)(["\n  width: 4rem;\n"]))),
                E = n("GBU/"),
                _ = {
                    text: u().string.isRequired,
                    color: u().string.isRequired,
                    bgColor: u().string.isRequired
                },
                b = function(e) {
                    var t = e.data,
                        n = t.ratingV2,
                        r = void 0 === n ? "-" : n,
                        i = t.bgColorV2,
                        o = void 0 === i ? {
                            type: "grey",
                            tint: 500
                        } : i,
                        a = t.subtitle,
                        s = void 0 === a ? "" : a,
                        u = e.clickHandler,
                        l = void 0 === u ? d.default : u;
                    return {
                        value: r,
                        title: s,
                        color: (0, E.Z)(o),
                        clickHandler: l
                    }
                },
                y = function(e, t) {
                    return t ? "".concat((0, c.default)(e, "reviewCount", ""), " ").concat((0, c.default)(e, "subtitle", "")) : (0, c.default)(e, "reviewCount", "")
                },
                I = function(e, t) {
                    return t ? "" : (0, c.default)(e, "sideSubTitle", "")
                },
                w = function(e) {
                    var t = e.newlyOpenedObj,
                        n = e.suspiciousReviewObj,
                        r = e.ratings,
                        i = e.clickHandler,
                        s = e.isMobile;
                    if (!(0, l.default)(t)) return a.createElement(v, null, a.createElement(m.Z, (0, o.Z)({
                        appearance: "outline",
                        textColor: f.default.z500
                    }, b({
                        data: t,
                        clickHandler: i
                    }), {
                        size: s ? 300 : 400,
                        sideTitle: (0, c.default)(t, "text", "")
                    })));
                    if (!(0, l.default)(n)) return a.createElement(v, null, a.createElement(m.Z, (0, o.Z)({}, b({
                        data: n,
                        clickHandler: i
                    }), {
                        size: s ? 300 : 400,
                        sideTitle: (0, c.default)(n, "text", "")
                    })));
                    var u = (0, c.default)(r, "DINING", {}),
                        d = (0, c.default)(r, "DELIVERY", {});
                    return a.createElement(v, null, !(0, l.default)(u) && a.createElement(m.Z, (0, o.Z)({}, b({
                        data: u,
                        clickHandler: i
                    }), {
                        size: s ? 300 : 400,
                        sideTitle: y(u, s),
                        sideSubTitle: I(u, s),
                        showSideSubTitleUnderlined: !0
                    })), !(0, l.default)(u) && !(0, l.default)(d) && a.createElement(g, null), !(0, l.default)(d) && a.createElement(m.Z, (0, o.Z)({}, b({
                        data: d,
                        clickHandler: i
                    }), {
                        size: s ? 300 : 400,
                        sideTitle: y(d, s),
                        sideSubTitle: I(d, s),
                        showSideSubTitleUnderlined: !0
                    })))
                };
            w.propTypes = {
                newlyOpenedObj: u().objectOf(_),
                suspiciousReviewObj: u().objectOf(_),
                ratings: u().objectOf(u().object),
                clickHandler: u().func,
                isMobile: u().bool
            }, w.defaultProps = {
                newlyOpenedObj: {},
                suspiciousReviewObj: {},
                ratings: {},
                clickHandler: null,
                isMobile: !1
            };
            const A = w
        },
        ZDJO: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r, i, o, a = n("h4VS"),
                s = n("q1tI"),
                u = n("17x9"),
                l = n.n(u),
                c = n("vOnD"),
                d = n("czsM"),
                m = function(e) {
                    var t = e.text,
                        n = e.align;
                    return s.createElement(f, {
                        align: n
                    }, t.toUpperCase())
                };
            m.propTypes = {
                text: l().string.isRequired,
                align: l().oneOf(["bottom-left", "bottom-center", "bottom-right", "right"])
            }, m.defaultProps = {
                align: "bottom-center"
            };
            var f = c.default.div(r || (r = (0, a.Z)(["\n  font-size: 1.4rem;\n  text-align: center;\n  color: ", ";\n  width: max-content;\n  font-weight: 500;\n  border: 0.5px solid ", ";\n  border-radius: 0.2rem;\n  padding: 0rem 0.4rem;\n  ", ";\n  @media (max-width: 480px) {\n    font-size: 0.9rem;\n    font-weight: 600;\n    padding: 0.2rem 0.3rem;\n  }\n"])), d.default.z600, d.default.z500, (function(e) {
                return "right" === e.align ? (0, c.css)(i || (i = (0, a.Z)(["\n          margin-left: 0.2rem;\n        "]))) : (0, c.css)(o || (o = (0, a.Z)(["\n          margin-top: 0.2rem;\n        "])))
            }));
            const h = m
        },
        o59D: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vj: () => w,
                ZP: () => I,
                A8: () => T,
                JK: () => A
            });
            var r, i = n("SNoJ"),
                o = n("7EGn"),
                a = n("h4VS"),
                s = n("q1tI"),
                u = n("17x9"),
                l = n.n(u),
                c = n("vOnD"),
                d = n("2qDD"),
                m = n("e4ru"),
                f = n("LSsp"),
                h = n("nXaw"),
                p = n("Ar8T"),
                v = "web_scroll_to_top_button_visible",
                g = "web_scroll_to_top_button_click",
                E = function(e) {
                    (0, h.z)(e), (0, p.q)(g)
                },
                _ = function(e) {
                    var t = e.isVisible;
                    return (0, s.useEffect)((function() {
                        t && (0, p.q)(v)
                    }), [t]), s.createElement(y, {
                        onClick: E,
                        visible: t
                    }, s.createElement(m.default, {
                        color: f.default,
                        size: 32
                    }))
                };
            _.propTypes = {
                isVisible: l().bool
            }, _.defaultProps = {
                isVisible: !1
            };
            const b = _;
            var y = (0, c.default)(d.default)(r || (r = (0, a.Z)(["\n  position: fixed;\n  bottom: 3rem;\n  right: 3rem;\n  width: 6.8rem;\n  height: 6.8rem;\n  min-width: unset;\n  min-height: unset;\n  border-radius: 50%;\n  transition: opacity 0.8s, visibility 0.8s;\n  opacity: ", ";\n  z-index: ", ";\n  visibility: ", ";\n  box-shadow: 0 1.6rem 1.6rem rgba(54, 54, 54, 0.06),\n    0 0.8rem 0.8rem rgba(54, 54, 54, 0.08);\n  span {\n    min-width: inherit;\n    min-height: inherit;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    display: flex;\n    justify-content: center;\n  }\n  &:hover i {\n    transform: unset;\n  }\n"])), (function(e) {
                return e.visible ? 1 : 0
            }), (function(e) {
                return e.visible ? 2 : 0
            }), (function(e) {
                return e.visible ? "visible" : "hidden"
            }));
            const I = (0, i.$j)((function(e) {
                return {
                    isVisible: (0, o.default)(e, "uiLogic.isScrollToTopFloatingButtonVisible", !1)
                }
            }))(b);
            var w = {
                    HIDE: "HIDE_SCROLL_TO_TOP_FLOATING_BUTTON",
                    SHOW: "SHOW_SCROLL_TO_TOP_FLOATING_BUTTON"
                },
                A = function() {
                    return {
                        type: w.SHOW
                    }
                },
                T = function() {
                    return {
                        type: w.HIDE
                    }
                }
        },
        "5RJS": (e, t, n) => {
            "use strict";
            n.d(t, {
                wl: () => i,
                X0: () => o,
                ME: () => a,
                H6: () => s,
                x$: () => u
            });
            var r = n("VTBJ"),
                i = {
                    INITIATE: "GET_LOCATION_DETAILS_INITIATE",
                    SUCCESS: "GET_LOCATION_DETAILS_SUCCESS",
                    FAILED: "GET_LOCATION_DETAILS_FAILED"
                },
                o = function(e, t, n, o) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                    return (0, r.Z)({
                        type: i.INITIATE,
                        lat: e,
                        lng: t,
                        entityId: n,
                        entityType: o,
                        persist: s,
                        storeUserSelected: u
                    }, a)
                },
                a = function(e) {
                    return {
                        type: i.SUCCESS,
                        location: e
                    }
                },
                s = function(e) {
                    return {
                        type: i.FAILED,
                        err: e
                    }
                },
                u = function(e, t, n) {
                    var r = e.entity_id,
                        o = void 0 === r ? 0 : r,
                        a = e.entity_type,
                        s = void 0 === a ? "" : a,
                        u = e.address_latitude,
                        l = void 0 === u ? 0 : u,
                        c = e.address_longitude,
                        d = void 0 === c ? 0 : c,
                        m = e.place,
                        f = (m = void 0 === m ? {} : m).placeId,
                        h = void 0 === f ? 0 : f,
                        p = m.placeType,
                        v = void 0 === p ? "" : p,
                        g = m.placeName,
                        E = void 0 === g ? "" : g,
                        _ = m.cellId,
                        b = void 0 === _ ? 0 : _,
                        y = e.id,
                        I = void 0 === y ? 0 : y;
                    return {
                        type: i.INITIATE,
                        lat: 0,
                        lng: 0,
                        entityId: o,
                        entityType: s,
                        persist: !0,
                        storeUserSelected: !0,
                        userDefinedLatitude: l,
                        userDefinedLongitude: d,
                        placeId: h,
                        placeType: v,
                        placeName: E,
                        cellId: b,
                        addressId: I,
                        autoDetectAddress: !0,
                        resId: n,
                        pageType: t
                    }
                }
        },
        TaAX: (e, t, n) => {
            "use strict";
            n.d(t, {
                OF: () => r,
                Sj: () => i,
                mP: () => o,
                Ff: () => a
            });
            var r = {
                    INITIATE: "GET_POPULAR_LOCATION_INITIATE",
                    SUCCESS: "GET_POPULAR_LOCATION_SUCCESS",
                    FAILED: "GET_POPULAR_LOCATION_FAILED"
                },
                i = function(e) {
                    return {
                        type: r.INITIATE,
                        cityId: e
                    }
                },
                o = function(e) {
                    return {
                        type: r.SUCCESS,
                        locationsData: e
                    }
                },
                a = function(e) {
                    return {
                        type: r.FAILED,
                        err: e
                    }
                }
        },
        sC5X: (e, t, n) => {
            "use strict";
            n.d(t, {
                mQ: () => r,
                V6: () => i
            });
            var r = {
                    INITIATE: "GET_POPULAR_SEARCHES_INITIATE",
                    SUCCESS: "GET_POPULAR_SEARCHES_SUCCESS",
                    FAILED: "GET_POPULAR_SEARCHES_FAILED"
                },
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return {
                        type: r.INITIATE,
                        entityType: e,
                        entityId: t,
                        cityId: n
                    }
                }
        },
        yL8x: (e, t, n) => {
            "use strict";
            n.d(t, {
                rU: () => r,
                Ju: () => i,
                l1: () => o,
                x6: () => a,
                zI: () => s
            });
            var r = {
                    INITIATE_GET: "RECENTLY_SELECTED_LOCATIONS_INITIATE_GET",
                    SUCCESS_GET: "RECENTLY_SELECTED_LOCATIONS_SUCCESS_GET",
                    INITIATE_SAVE: "RECENTLY_SELECTED_LOCATIONS_INITIATE_SAVE",
                    SUCCESS_SAVE: "RECENTLY_SELECTED_LOCATIONS_SUCCESS_SAVE"
                },
                i = function() {
                    return {
                        type: r.INITIATE_GET
                    }
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return {
                        type: r.SUCCESS_GET,
                        recentlySelectedLocations: e
                    }
                },
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        type: r.INITIATE_SAVE,
                        recentlySelectedLocation: e
                    }
                },
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        type: r.SUCCESS_SAVE,
                        recentlySelectedLocations: e
                    }
                }
        },
        "4+bF": (e, t, n) => {
            "use strict";
            n.d(t, {
                vm: () => i,
                rg: () => o,
                _G: () => a,
                Gh: () => s
            });
            var r = n("ifKl"),
                i = {
                    INITIATE: "GET_SAVED_ADDRESS_INITIATE",
                    SUCCESS: "GET_SAVED_ADDRESS_SUCCESS",
                    FAILED: "GET_SAVED_ADDRESS_FAILED"
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                    return {
                        type: i.INITIATE,
                        resId: e,
                        setShowShimmer: t
                    }
                },
                a = function(e) {
                    return {
                        type: i.SUCCESS,
                        savedAddress: e
                    }
                },
                s = function(e) {
                    return {
                        type: i.FAILED,
                        err: e
                    }
                }
        },
        oClw: (e, t, n) => {
            "use strict";
            n.d(t, {
                pT: () => r,
                AM: () => i,
                wV: () => o
            });
            var r = {
                    OPEN: "OPEN_UNIVERSAL_SEARCH_MODAL",
                    CLOSE: "CLOSE_UNIVERSAL_SEARCH_MODAL"
                },
                i = function() {
                    return {
                        type: r.OPEN
                    }
                },
                o = function() {
                    return {
                        type: r.CLOSE
                    }
                }
        },
        "X2+A": (e, t, n) => {
            "use strict";
            n.d(t, {
                By: () => r,
                DO: () => i,
                nr: () => o,
                or: () => a,
                NW: () => s,
                lF: () => u,
                C2: () => l,
                Js: () => c,
                tf: () => d,
                D9: () => m,
                vY: () => f
            });
            var r = {
                    OPEN: "OPEN_UNIVERSAL_LOCATION_MODAL",
                    CLOSE: "CLOSE_UNIVERSAL_LOCATION_MODAL"
                },
                i = {
                    OPEN: "OPEN_UNIVERSAL_LOCATION_WITH_BANNER_MODAL",
                    CLOSE: "CLOSE_UNIVERSAL_LOCATION_WITH_BANNER_MODAL"
                },
                o = {
                    OPEN: "OPEN_UNIVERSAL_LOCATION_MODAL_WITH_DISH_CARD",
                    CLOSE: "CLOSE_UNIVERSAL_LOCATION_MODAL_WITH_DISH_CARD"
                },
                a = "SET_DISH_HEADER_HEIGHT",
                s = function() {
                    return {
                        type: r.OPEN
                    }
                },
                u = function() {
                    return {
                        type: i.OPEN
                    }
                },
                l = function() {
                    return {
                        type: r.CLOSE
                    }
                },
                c = function() {
                    return {
                        type: i.CLOSE
                    }
                },
                d = function(e) {
                    return {
                        type: o.OPEN,
                        universalLMDishCard: e
                    }
                },
                m = function() {
                    return {
                        type: o.CLOSE
                    }
                },
                f = function(e) {
                    return {
                        type: a,
                        dishHeaderHeight: e
                    }
                }
        },
        ZEPn: (e, t, n) => {
            "use strict";
            n.d(t, {
                tX: () => s,
                rg: () => a,
                BZ: () => r.B
            });
            var r = n("VXJo"),
                i = n("17x9"),
                o = n.n(i),
                a = o().shape({
                    hideCookieBanner: o().bool,
                    hideFooter: o().bool,
                    hideLogin: o().bool,
                    hideNavbar: o().bool,
                    hideNotifications: o().bool,
                    hidePageBlocker: o().bool,
                    hideStructuredData: o().bool
                }),
                s = {
                    hideCookieBanner: !1,
                    hideFooter: !1,
                    hideLogin: !1,
                    hideNavbar: !1,
                    hideNotifications: !1,
                    hidePageBlocker: !1,
                    hideStructuredData: !1
                }
        },
        VXJo: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => r
            });
            var r = function(e) {
                var t, n, r, i, o, a, s, u, l, c, d, m, f, h, p = null !== (t = e.pageConfig) && void 0 !== t ? t : {};
                return {
                    hideCookieBanner: null !== (n = p.hideCookieBanner) && void 0 !== n && n,
                    hideFooter: null !== (r = p.hideFooter) && void 0 !== r && r,
                    hideLogin: null !== (i = p.hideLogin) && void 0 !== i && i,
                    hideNavbar: null !== (o = p.hideNavbar) && void 0 !== o && o,
                    hideNotifications: null !== (a = p.hideNotifications) && void 0 !== a && a,
                    hidePageBlocker: null !== (s = p.hidePageBlocker) && void 0 !== s && s,
                    hideStructuredData: null !== (u = p.hideStructuredData) && void 0 !== u && u,
                    openAppModalV2: null !== (l = p.openAppModalV2) && void 0 !== l ? l : void 0,
                    showLocationBannerAutoPopup: null !== (c = p.showLocationBannerAutoPopup) && void 0 !== c && c,
                    isPageCacheable: null !== (d = null == p || null === (m = p.cacheMeta) || void 0 === m ? void 0 : m.cacheable) && void 0 !== d && d,
                    showResToHomeLoader: null !== (f = p.showResToHomeLoader) && void 0 !== f && f,
                    showCheckoutToResLoader: null !== (h = p.showCheckoutToResLoader) && void 0 !== h && h
                }
            }
        },
        r5Zp: (e, t, n) => {
            "use strict";
            n.d(t, {
                dE: () => I,
                Te: () => w,
                qX: () => S,
                Sn: () => O,
                wz: () => A,
                i: () => Z,
                Gg: () => T,
                By: () => R,
                iU: () => L,
                yD: () => P,
                Uo: () => C
            });
            var r = n("rePB"),
                i = n("o0o1"),
                o = n.n(i),
                a = n("IihT"),
                s = n("7EGn"),
                u = n("P62M"),
                l = n("KbIs"),
                c = n("Ff2n"),
                d = n("gmvh"),
                m = n("VTBJ"),
                f = function(e) {
                    var t = e.oldState,
                        n = e.menuItem,
                        i = e.itemGroups,
                        o = e.menuItemPrice,
                        a = e.groups,
                        s = e.commonData,
                        u = void 0 === s ? {} : s,
                        l = n.item,
                        c = (l = void 0 === l ? {} : l).id,
                        d = void 0 === c ? "" : c,
                        f = t.totalItemCount,
                        h = void 0 === f ? 0 : f,
                        p = t.totalAmount,
                        v = void 0 === p ? 0 : p,
                        g = t.orderItems,
                        E = void 0 === g ? {} : g,
                        _ = E[d] || {},
                        b = _.count,
                        y = void 0 === b ? 0 : b,
                        I = _.selectedGroups,
                        w = void 0 === I ? {} : I;
                    return (0, m.Z)((0, m.Z)((0, m.Z)({}, t), {}, {
                        orderItems: (0, m.Z)((0, m.Z)({}, E), {}, (0, r.Z)({}, d, (0, m.Z)((0, m.Z)({}, _), {}, {
                            menuItem: n,
                            selectedGroups: (0, m.Z)((0, m.Z)({}, w), i),
                            lastAddedItemGroups: a,
                            count: y + 1
                        })))
                    }, u), {}, {
                        totalItemCount: h + 1,
                        totalAmount: v + o
                    })
                },
                h = function(e) {
                    var t = e.oldState,
                        n = e.menuItem,
                        i = e.itemGroups,
                        o = e.menuItemPrice,
                        a = e.groups,
                        s = e.multipleItemCount,
                        u = e.commonData,
                        l = void 0 === u ? {} : u,
                        c = n.item,
                        d = (c = void 0 === c ? {} : c).id,
                        f = void 0 === d ? "" : d,
                        h = t.totalItemCount,
                        p = void 0 === h ? 0 : h,
                        v = t.totalAmount,
                        g = void 0 === v ? 0 : v,
                        E = t.orderItems,
                        _ = void 0 === E ? {} : E,
                        b = _[f] || {},
                        y = b.count,
                        I = void 0 === y ? 0 : y,
                        w = b.selectedGroups,
                        A = void 0 === w ? {} : w;
                    return (0, m.Z)((0, m.Z)((0, m.Z)({}, t), {}, {
                        orderItems: (0, m.Z)((0, m.Z)({}, _), {}, (0, r.Z)({}, f, (0, m.Z)((0, m.Z)({}, b), {}, {
                            menuItem: n,
                            selectedGroups: (0, m.Z)((0, m.Z)({}, A), i),
                            lastAddedItemGroups: a,
                            count: I + s
                        })))
                    }, l), {}, {
                        totalItemCount: p + s,
                        totalAmount: g + s * o
                    })
                },
                p = function(e) {
                    var t = e.oldState,
                        n = e.menuItem,
                        i = e.itemGroups,
                        o = e.selectedGroupPrice,
                        a = e.commonData,
                        s = void 0 === a ? {} : a,
                        u = n.item,
                        l = (u = void 0 === u ? {} : u).id,
                        c = void 0 === l ? "" : l,
                        d = t.totalItemCount,
                        f = void 0 === d ? 0 : d,
                        h = t.totalAmount,
                        p = void 0 === h ? 0 : h,
                        v = t.orderItems,
                        g = void 0 === v ? {} : v,
                        E = g[c] || {},
                        _ = E.count,
                        b = void 0 === _ ? 0 : _,
                        y = E.selectedGroups,
                        I = void 0 === y ? {} : y;
                    return (0, m.Z)((0, m.Z)((0, m.Z)({}, t), {}, {
                        orderItems: (0, m.Z)((0, m.Z)({}, g), {}, (0, r.Z)({}, c, (0, m.Z)((0, m.Z)({}, E), {}, {
                            selectedGroups: (0, m.Z)((0, m.Z)({}, I), i),
                            count: b + 1
                        })))
                    }, s), {}, {
                        totalItemCount: f + 1,
                        totalAmount: p + o
                    })
                },
                v = function(e) {
                    var t = e.oldState,
                        n = e.menuItem,
                        i = e.itemGroupIdentifier,
                        o = e.menuItemPrice,
                        a = e.commonData,
                        s = void 0 === a ? {} : a,
                        u = n.item,
                        l = (u = void 0 === u ? {} : u).id,
                        f = void 0 === l ? "" : l,
                        h = t.totalItemCount,
                        p = void 0 === h ? 0 : h,
                        v = t.totalAmount,
                        g = void 0 === v ? 0 : v,
                        E = t.orderItems,
                        _ = void 0 === E ? {} : E,
                        b = _[f] || {},
                        y = b.count,
                        I = void 0 === y ? 0 : y,
                        w = b.selectedGroups,
                        A = void 0 === w ? {} : w;
                    if (I > 0) {
                        var T = I - 1;
                        if (T > 0) {
                            var Z = {},
                                S = (A[i] || {}).count,
                                O = void 0 === S ? 0 : S;
                            return O - 1 ? Z = (0, r.Z)({}, i, (0, m.Z)((0, m.Z)({}, A[i]), {}, {
                                count: O - 1
                            })) : delete A[i], (0, m.Z)((0, m.Z)((0, m.Z)({}, t), {}, {
                                orderItems: (0, m.Z)((0, m.Z)({}, _), {}, (0, r.Z)({}, f, (0, m.Z)((0, m.Z)({}, b), {}, {
                                    selectedGroups: (0, m.Z)((0, m.Z)({}, A), Z),
                                    count: T
                                })))
                            }, s), {}, {
                                totalItemCount: p - 1,
                                totalAmount: g - o
                            })
                        }
                        _[f];
                        var C = (0, c.Z)(_, [f].map(d.Z));
                        return (0, m.Z)((0, m.Z)((0, m.Z)({}, t), {}, {
                            orderItems: (0, m.Z)({}, C)
                        }, s), {}, {
                            totalItemCount: p - 1,
                            totalAmount: g - o
                        })
                    }
                    return (0, m.Z)((0, m.Z)({}, t), s)
                },
                g = n("4x9D"),
                E = n("T6B4"),
                _ = n("IzBX"),
                b = n("OM32"),
                y = o().mark(C),
                I = "ADD_MENU_ITEM",
                w = "ADD_MULTIPLE_MENU_ITEM",
                A = "REMOVE_MENU_ITEM",
                T = "REPEAT_LAST_CUSTOMISATION",
                Z = "REMOVE_OUT_OF_STOCK_ITEMS",
                S = "CLEAR_CART",
                O = "docr";

            function C(e) {
                var t, n, i, c, d, m, g, E, C, L, x, D, k, M, U, G, q, V, F, H, B, j, z, W, K, Y, J, X, Q, $, ee, te, ne, re, ie, oe, ae, se, ue, le, ce, de, me, fe, he, pe, ve, ge, Ee, _e, be, ye, Ie, we, Ae, Te, Ze, Se;
                return o().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return t = e.data, i = (n = void 0 === t ? {} : t).actionType, c = void 0 === i ? "" : i, d = n.menuItem, m = void 0 === d ? {} : d, g = n.menuItemPrice, E = void 0 === g ? 0 : g, C = n.selectedGroupItemIdentifier, L = void 0 === C ? "" : C, x = n.groups, D = void 0 === x ? [] : x, k = n.itemCount, M = void 0 === k ? 0 : k, U = n.orderItems, G = void 0 === U ? {} : U, q = n.totalAmount, V = void 0 === q ? 0 : q, F = n.totalItemCount, H = void 0 === F ? 0 : F, o.next = 4, (0, a.Ys)((function(e) {
                                return (0, s.default)(e, "pages.current.resId", 0)
                            }));
                        case 4:
                            return B = o.sent, o.next = 7, (0, a.Ys)((function(e) {
                                return (0, s.default)(e, "pages.restaurant.".concat(B, ".sections"), {})
                            }));
                        case 7:
                            return j = o.sent, o.next = 10, (0, a.Ys)(_.Z);
                        case 10:
                            z = o.sent, W = (0, s.default)(j, "SECTION_BASIC_INFO.res_thumb", ""), K = (0, s.default)(j, "SECTION_BASIC_INFO.name", ""), Y = (0, s.default)(j, "SECTION_BASIC_INFO.resUrl", ""), J = (0, s.default)(j, "SECTION_RES_HEADER_DETAILS.LOCALITY.text", ""), null === (X = R()) && (X = {}), Q = X.restaurantId, B !== (void 0 === Q ? 0 : Q) && (X = {}), $ = Date.now(), te = (ee = X).orderItems, ne = void 0 === te ? {} : te, re = ee.resImg, ie = void 0 === re ? "" : re, oe = ee.resName, ae = void 0 === oe ? "" : oe, se = ee.resLocation, ue = void 0 === se ? "" : se, le = ee.resOrderUrl, ce = void 0 === le ? "" : le, de = m.item, me = (de = void 0 === de ? {} : de).id, fe = void 0 === me ? "" : me, he = de.price, pe = void 0 === he ? 0 : he, ve = (0, u.Of)(D) || !L ? (0, l.e7)(fe, D) : L, ge = ne[fe] || {}, Ee = ge.selectedGroups, _e = (void 0 === Ee ? {} : Ee)[ve] || {}, be = _e.menuItemPrice, ye = void 0 === be ? pe : be, Ie = _e.count, we = void 0 === Ie ? 0 : Ie, Ae = {
                                timestamp: $,
                                restaurantId: B,
                                cartSubtype: z,
                                resImg: W,
                                resName: K,
                                resOrderUrl: Y,
                                resLocation: J
                            }, Te = {}, Ze = {}, Ze = (0, r.Z)({}, ve, {
                                groups: D,
                                menuItemPrice: E,
                                count: we + 1
                            }), c === I && (Te = f({
                                oldState: X,
                                menuItem: m,
                                itemGroups: Ze,
                                menuItemPrice: E,
                                groups: D,
                                commonData: Ae
                            })), c === w && (Ze = (0, r.Z)({}, ve, {
                                groups: D,
                                menuItemPrice: E,
                                count: we + M
                            }), Te = h({
                                oldState: X,
                                menuItem: m,
                                itemGroups: Ze,
                                menuItemPrice: E,
                                groups: D,
                                multipleItemCount: M,
                                commonData: Ae
                            })), c === T && (Ze = (0, r.Z)({}, ve, {
                                groups: D,
                                menuItemPrice: ye,
                                count: we + 1
                            }), Te = p({
                                oldState: X,
                                menuItem: m,
                                itemGroups: Ze,
                                selectedGroupPrice: ye,
                                commonData: Ae
                            })), c === A && (Se = N(E, ye), Te = v({
                                oldState: X,
                                menuItem: m,
                                itemGroupIdentifier: ve,
                                menuItemPrice: Se,
                                commonData: Ae
                            })), c === Z && (Te = {
                                timestamp: $,
                                restaurantId: B,
                                orderItems: G,
                                totalItemCount: H,
                                totalAmount: V,
                                resImg: ie,
                                resName: ae,
                                resLocation: ue,
                                resOrderUrl: ce,
                                cartSubtype: z
                            }), c === S && ((0, b.kT)(O), Te = {}), P(Te);
                        case 40:
                        case "end":
                            return o.stop()
                    }
                }), y)
            }
            var N = function(e, t) {
                    return 0 === e ? t : e
                },
                R = function() {
                    try {
                        return JSON.parse(window.localStorage.getItem(E.z$))
                    } catch (e) {
                        return ""
                    }
                },
                P = function(e) {
                    window.localStorage.setItem(E.z$, JSON.stringify(e))
                },
                L = function() {
                    (0, b.kT)(O), window.localStorage.removeItem(E.z$), (0, g.bE)()
                }
        },
        "GBU/": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y,
                a: () => w
            });
            var r, i, o, a, s, u, l, c = n("rePB"),
                d = n("7EGn"),
                m = n("wRyO"),
                f = n("5An4"),
                h = n("LSsp"),
                p = n("pZ4b"),
                v = n("HeTv"),
                g = n("czsM"),
                E = n("HMsx"),
                _ = {
                    red: m.default,
                    orange: p.default,
                    yellow: v.default,
                    green: g.default,
                    black: f.default,
                    white: h.default,
                    grey: E.default
                },
                b = function(e) {
                    var t = (0, d.default)(e, "type", "white"),
                        n = (0, d.default)(_, t, h.default);
                    return "black" === t || "white" === t ? n : n["z".concat(Number((0, d.default)(e, "tint", "900")))]
                };
            const y = b;
            var I = (l = {}, (0, c.Z)(l, 0, (r = {}, (0, c.Z)(r, "type", "grey"), (0, c.Z)(r, "tint", 400), r)), (0, c.Z)(l, 1, (i = {}, (0, c.Z)(i, "type", "red"), (0, c.Z)(i, "tint", 500), i)), (0, c.Z)(l, 2, (o = {}, (0, c.Z)(o, "type", "red"), (0, c.Z)(o, "tint", 400), o)), (0, c.Z)(l, 3, (a = {}, (0, c.Z)(a, "type", "yellow"), (0, c.Z)(a, "tint", 600), a)), (0, c.Z)(l, 4, (s = {}, (0, c.Z)(s, "type", "green"), (0, c.Z)(s, "tint", 600), s)), (0, c.Z)(l, 5, (u = {}, (0, c.Z)(u, "type", "green"), (0, c.Z)(u, "tint", 800), u)), l),
                w = function(e) {
                    return b(I[e || 0])
                }
        },
        nXaw: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => r
            });
            var r = function() {
                document.body.scrollIntoView({
                    behavior: "smooth"
                })
            }
        },
        G2Un: (e, t, n) => {
            "use strict";
            n.d(t, {
                S5: () => m,
                j5: () => f,
                je: () => h,
                v$: () => v,
                Kg: () => I,
                Io: () => w,
                XG: () => A,
                ZP: () => T
            });
            var r = n("HaE+"),
                i = n("VTBJ"),
                o = n("U8pU"),
                a = n("o0o1"),
                s = n.n(a),
                u = n("7EGn"),
                l = n("/1FC"),
                c = n("fujP"),
                d = n("akXP"),
                m = "POST",
                f = "GET";

            function h(e) {
                var t = new FormData;
                return function e(n, r) {
                    Object.keys(r).forEach((function(i) {
                        if ("object" === (0, o.Z)(r[i]) && null !== r[i]) {
                            var a = "" === n ? i : "".concat(n, "[").concat(i, "]");
                            e(a, r[i])
                        } else {
                            var s = "" === n ? i : "".concat(n, "[").concat(i, "]");
                            t.append(s, r[i])
                        }
                    }))
                }("", e), t
            }

            function p(e) {
                return Object.keys(e).map((function(t) {
                    return n = t, r = e[t], (0, l.default)(r) ? r.map((function(e) {
                        return "".concat(n, "[]=").concat(e)
                    })).join("&") : "".concat(n, "=").concat(r);
                    var n, r
                })).join("&")
            }
            var v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, c.default)(t) ? e : e + (-1 === e.indexOf("?") ? "?" : "&") + p(t)
                },
                g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (0, i.Z)((0, i.Z)({}, (0, u.default)(t, "extra", {})), {}, {
                            headers: (0, i.Z)((0, i.Z)({}, t.headers || {}), {}, {
                                "x-zomato-csrft": window.csrft
                            }),
                            url: v(e, (0, u.default)(t, "params", {})),
                            method: t.method || f,
                            credentials: "same-origin",
                            redirect: "follow"
                        });
                    if ((0, u.default)(t, "method", f).toUpperCase() !== f) {
                        var r = (0, u.default)(t, "body", null);
                        n = (0, i.Z)((0, i.Z)({}, n), r && {
                            body: r
                        })
                    }
                    return n
                },
                E = function(e) {
                    if (e.redirected && (window.location.href = e.url), e.ok) return e;
                    var t = new Error(e.statusText);
                    throw t.response = e, t
                },
                _ = function(e) {
                    return window.csrf_set_time = (new Date).valueOf(), e
                },
                b = function() {
                    var e = (0, r.Z)(s().mark((function e() {
                        var t, n, r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = new Date, n = window.csrf_set_time, !(t - n >= 144e4) && window.csrft) {
                                        e.next = 14;
                                        break
                                    }
                                    return r = {}, e.prev = 4, e.next = 7, (0, d.c8)();
                                case 7:
                                    r = e.sent, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(4), r = {
                                        csrf: ""
                                    };
                                case 13:
                                    (0, d.a3)(r);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 10]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n, r, o, a, u, l, c = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, r = y.fetchConfig || {}, o = r.headers, a = void 0 === o ? {} : o, e.next = 4, b();
                                case 4:
                                    return u = (0, i.Z)((0, i.Z)({}, n), {}, {
                                        headers: (0, i.Z)((0, i.Z)({}, a), n.headers)
                                    }), l = g(t, u), e.abrupt("return", fetch(l.url, l).then(_).then(E));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function(e) {
                    var t = e.getState().fetchConfigs;
                    y.fetchConfig = t
                },
                w = function(e) {
                    var t = e.config,
                        n = (0, u.default)(y, "fetchConfig.headers", {}),
                        r = (0, u.default)(t, "headers", {});
                    y.fetchConfig = {
                        headers: (0, i.Z)((0, i.Z)({}, n), r)
                    }
                },
                A = function() {
                    var e = (0, r.Z)(s().mark((function e(t) {
                        var n, r, i, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.url, r = t.body, e.next = 3, y(n, {
                                        body: JSON.stringify(r),
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 3:
                                    return i = e.sent, e.next = 6, i.json();
                                case 6:
                                    return o = e.sent, e.abrupt("return", o);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            const T = y
        },
        hfmy: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => o,
                V: () => a
            });
            var r = n("7EGn"),
                i = n("V3te"),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i._8;
                    switch (e) {
                        case i._8:
                            return 2.5;
                        case i.Vb:
                            return 1;
                        case i.vh:
                            return 2;
                        default:
                            return 2.5
                    }
                },
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o();
                    return (0, r.default)(e, "deviceSpecificInfo.styles.extraBottomPadding", !1) ? n : t
                }
        },
        A6yj: (e, t, n) => {
            "use strict";
            n.d(t, {
                ij: () => d,
                It: () => m,
                uk: () => f,
                Dk: () => h,
                Wc: () => p,
                Wn: () => v,
                YR: () => g,
                s3: () => E,
                rP: () => _
            });
            var r = n("o0o1"),
                i = n.n(r),
                o = n("7EGn"),
                a = n("IihT"),
                s = n("HKiI"),
                u = n("AdJq"),
                l = i().mark(g),
                c = i().mark(_),
                d = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    r && window.history.pushState({
                        url: t
                    }, "", t), e((0, s.BD)(t, n, i, o))
                },
                m = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    window.history.replaceState({
                        url: t
                    }, "", t), e((0, s.BD)(t, n, r, i))
                },
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    return n && window.history.pushState({
                        url: e
                    }, "", e), (0, s.BD)(e, t, r)
                },
                h = "LOAD_PAGE",
                p = "REPLACE_PAGE",
                v = function(e, t, n, r, i) {
                    return {
                        type: h,
                        url: e,
                        location: t,
                        pushHistory: n,
                        isMobile: r,
                        forceLoad: i
                    }
                };

            function g(e) {
                var t, n, r, c, d;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = (0, o.default)(e, "url"), n = (0, o.default)(e, "location"), r = Boolean((0, o.default)(e, "pushHistory", !0)), c = Boolean((0, o.default)(e, "isMobile", 0)), d = Boolean((0, o.default)(e, "forceLoad", 0)), 0 === t.indexOf(u.ho) && (t = t.slice(u.ho.length)), r && window.history.pushState({
                                url: t
                            }, "", t), i.next = 9, (0, a.gz)((0, s.BD)(t, n, c ? 1 : 0, d));
                        case 9:
                        case "end":
                            return i.stop()
                    }
                }), l)
            }
            var E = function(e, t, n, r) {
                return {
                    type: p,
                    url: e,
                    location: t,
                    isMobile: n,
                    forceLoad: r
                }
            };

            function _(e) {
                var t, n, r, u;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = b((0, o.default)(e, "url")), n = (0, o.default)(e, "location"), r = Boolean((0, o.default)(e, "isMobile", 0)), u = (0, o.default)(e, "forceLoad", !1), window.history.replaceState({
                                url: t
                            }, "", t), i.next = 7, (0, a.gz)((0, s.BD)(t, n, r ? 1 : 0, u));
                        case 7:
                        case "end":
                            return i.stop()
                    }
                }), c)
            }
            var b = function(e) {
                var t = e;
                return 0 === t.indexOf(u.ho) && (t = e.slice(u.ho.length)), t
            }
        },
        "B5+Q": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = function() {
                var e = window.getComputedStyle(document.documentElement).overflowY;
                ["scroll", "auto"].includes(e) ? document.body.scrollTop = 0 : window.scrollTo(0, 0)
            }
        },
        yjvN: (e, t, n) => {
            "use strict";
            n.d(t, {
                KW: () => r,
                Am: () => i,
                Ii: () => o,
                d: () => a,
                uM: () => s,
                y_: () => u,
                Fd: () => l,
                Xg: () => c,
                xI: () => d,
                WL: () => m,
                ph: () => f,
                O1: () => h,
                TF: () => p,
                GB: () => v,
                Ag: () => g,
                B8: () => E,
                pY: () => _
            });
            var r = {
                    INITIATE: "GET_USER_PERMISSION_INITIATE",
                    SUCCESS: "GET_USER_PERMISSION_SUCCESS",
                    FAILED: "GET_USER_PERMISSION_FAILED"
                },
                i = {
                    INITIATE: "GET_UUID_FROM_STORAGE_INITIATE",
                    SUCCESS: "GET_UUID_FROM_STORAGE_SUCCESS"
                },
                o = {
                    INITIATE: "GET_HOME_PAGE_INITIATE",
                    SUCCESS: "GET_HOME_PAGE_SUCCESS",
                    FAILED: "GET_HOME_PAGE_FAILED"
                },
                a = "SET_PARTNERSHIP_USER",
                s = {
                    INITIATE: "PARTNERSHIP_LOGIN_INITIATE",
                    SUCCESS: "PARTNERSHIP_LOGIN_SUCCESS",
                    FAILED: "PARTNERSHIP_LOGIN_FAILED"
                },
                u = "mobile",
                l = "name",
                c = function() {
                    return {
                        type: o.INITIATE
                    }
                },
                d = function(e) {
                    var t = e.skipPrompt,
                        n = e.flowType,
                        r = e.modalPrompt,
                        i = e.successCallback,
                        o = e.appType,
                        a = e.userId,
                        u = void 0 === a ? 0 : a;
                    return {
                        type: s.INITIATE,
                        skipPrompt: t,
                        flowType: n,
                        userId: u,
                        modalPrompt: r,
                        successCallback: i,
                        appType: o
                    }
                },
                m = function() {
                    return {
                        type: s.SUCCESS
                    }
                },
                f = function() {
                    return {
                        type: s.FAILED
                    }
                },
                h = function() {
                    return {
                        type: o.FAILED
                    }
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.successCallback,
                        n = void 0 === t ? null : t,
                        i = e.errorCallback,
                        o = void 0 === i ? null : i,
                        a = e.flowType,
                        s = void 0 === a ? "" : a,
                        u = e.skipPrompt,
                        l = void 0 !== u && u,
                        c = e.initPrompt,
                        d = void 0 !== c && c,
                        m = e.modalPrompt,
                        f = void 0 !== m && m;
                    return {
                        type: r.INITIATE,
                        successCallback: n,
                        errorCallback: o,
                        flowType: s,
                        skipPrompt: l,
                        initPrompt: d,
                        modalPrompt: f
                    }
                },
                v = function() {
                    return {
                        type: r.SUCCESS
                    }
                },
                g = function(e) {
                    return {
                        type: r.FAILED,
                        payload: e
                    }
                },
                E = function() {
                    return {
                        type: i.SUCCESS
                    }
                },
                _ = function(e) {
                    return {
                        type: a,
                        user: e
                    }
                }
        },
        QVsL: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("q1tI");
            const i = function(e) {
                var t = e.enableCloseOnBack,
                    n = e.isOpen,
                    i = e.closeModal,
                    o = e.pageUrl,
                    a = (0, r.useRef)(i);
                (0, r.useEffect)((function() {
                    a.current = i
                }), [i]), (0, r.useEffect)((function() {
                    var e, r;
                    return n && t && (r = function(e) {
                            e && e.preventDefault(), window.history.pushState({
                                url: o
                            }, null, o), "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), "function" == typeof a.current && a.current()
                        }, e = window.onpopstate, window.onpopstate = r, window.history.pushState({
                            url: o
                        }, null, o)),
                        function() {
                            window.onpopstate === r && (window.onpopstate = function() {
                                window.onpopstate = e
                            }, window.history.back())
                        }
                }), [t, n, o])
            }
        },
        KFCZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n("1OyB"),
                i = n("vuIU"),
                o = n("rePB"),
                a = n("7EGn"),
                s = n("VTBJ"),
                u = n("yjvN"),
                l = {
                    name: {
                        scope: "user.name"
                    },
                    mobile: {
                        scope: "user.mobile"
                    }
                },
                c = function(e) {
                    return String("string" != typeof e ? e.toFixed(2) : parseFloat(e).toFixed(2))
                },
                d = function() {
                    function e() {
                        (0, r.Z)(this, e), this.CLIENT_NAME = e.CLIENT_NAME
                    }
                    return (0, i.Z)(e, [{
                        key: "isPlatformAvailable",
                        value: function() {
                            return window.microapps
                        }
                    }, {
                        key: "requestIdentity",
                        value: function(e) {
                            var t = {
                                skipPrompt: e
                            };
                            return window.microapps.getIdentity(t).then((function(e) {
                                return {
                                    grantToken: e,
                                    scopes: [u.Fd].map((function(e) {
                                        return l[e].scope
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "requestCurrentLocation",
                        value: function() {
                            return window.microapps.getCurrentLocation().then((function(e) {
                                return e
                            }))
                        }
                    }, {
                        key: "getPaymentMethodType",
                        value: function() {
                            return e.PAYMENT_METHOD_TYPE
                        }
                    }, {
                        key: "getPaymentMethodId",
                        value: function() {
                            return e.PAYMENT_METHOD_ID
                        }
                    }, {
                        key: "requestPayment",
                        value: function(t) {
                            var n, r = (0, a.default)(t, "gpay_data", {}),
                                i = (0, a.default)(t, "tab", {}),
                                o = (0, a.default)(t, "voucher_meta_data", {}),
                                u = null !== (n = (0, a.default)(o, "voucher_code", "")) && void 0 !== n ? n : "",
                                l = {
                                    displayItems: [{
                                        type: "SUBTOTAL",
                                        price: c((0, a.default)(o, "subtotal", 0))
                                    }, {
                                        type: "DISCOUNT",
                                        price: c(-1 * (0, a.default)(o, "voucher_discount", 0))
                                    }],
                                    offerInfo: {
                                        offers: [{
                                            redemptionCode: u
                                        }]
                                    }
                                },
                                d = {
                                    apiVersion: (0, a.default)(r, "api_version", e.apiVersion),
                                    apiVersionMinor: (0, a.default)(r, "api_version_minor", e.apiVersionMinor),
                                    allowedPaymentMethods: [{
                                        type: "UPI",
                                        parameters: {
                                            payeeVpa: (0, a.default)(r, "payee_vpa", ""),
                                            payeeName: (0, a.default)(r, "payee_name", ""),
                                            mcc: (0, a.default)(r, "mcc", ""),
                                            transactionReferenceId: (0, a.default)(r, "transaction_reference_id", ""),
                                            transactionId: (0, a.default)(r, "transaction_id", "")
                                        },
                                        tokenizationSpecification: {
                                            type: "DIRECT"
                                        }
                                    }],
                                    transactionInfo: (0, s.Z)({
                                        countryCode: e.COUNTRY_CODE,
                                        totalPriceStatus: e.TOTAL_PRICE_STATUS,
                                        totalPrice: c((0, a.default)(i, "order.total_cost", 0)),
                                        currencyCode: (0, a.default)(i, "currency_code", "")
                                    }, !!u && l)
                                };
                            return window.microapps.requestPayment(d).then((function(e) {
                                return {
                                    data: JSON.stringify(e)
                                }
                            }))
                        }
                    }, {
                        key: "requestUserDetails",
                        value: function(e) {
                            return window.microapps.getPhoneNumber({
                                skipPrompt: e
                            }).then((function(e) {
                                return {
                                    grantToken: e,
                                    scopes: [u.y_].map((function(e) {
                                        return l[e].scope
                                    }))
                                }
                            }))
                        }
                    }]), e
                }();
            (0, o.Z)(d, "CLIENT_NAME", "GPAY"), (0, o.Z)(d, "CLIENT_ID", "ordering_sdk_gpay_pwa_v1"), (0, o.Z)(d, "PAYMENT_METHOD_TYPE", "gpay_checkout"), (0, o.Z)(d, "PAYMENT_METHOD_ID", 0), (0, o.Z)(d, "apiVersion", 2), (0, o.Z)(d, "apiVersionMinor", 0), (0, o.Z)(d, "COUNTRY_CODE", "IN"), (0, o.Z)(d, "TOTAL_PRICE_STATUS", "FINAL");
            var m = n("VAjR"),
                f = n("WHL/"),
                h = {
                    ordering_sdk_gpay_pwa_v1: {
                        CLIENT_NAME: d.CLIENT_NAME,
                        CLIENT_ID: d.CLIENT_ID,
                        ZOMATO_ORDERING_API_KEY: d.ZOMATO_ORDERING_API_KEY,
                        ZOMATO_ORDERING_SECRET_KEY: d.ZOMATO_ORDERING_SECRET_KEY
                    }
                },
                p = function() {
                    function e() {
                        (0, r.Z)(this, e)
                    }
                    return (0, i.Z)(e, null, [{
                        key: "setClient",
                        value: function(t) {
                            var n = function(e) {
                                return h[e]
                            }(t);
                            e.client = n
                        }
                    }, {
                        key: "getClient",
                        value: function() {
                            var t;
                            switch (e.client.CLIENT_NAME) {
                                case d.CLIENT_NAME:
                                    t = new d
                            }
                            return t
                        }
                    }, {
                        key: "isWhitelistedPartner",
                        value: function(t) {
                            return e.whitelistedPartners.includes(t)
                        }
                    }, {
                        key: "isRedirectAllowedPartner",
                        value: function(t) {
                            return e.redirectToOrderSummaryPartners.includes(t)
                        }
                    }, {
                        key: "setClientFromStore",
                        value: function(t) {
                            var n = t.getState(),
                                r = (0, a.default)(n, "pages.current.name", ""),
                                i = "";
                            switch (r) {
                                case m.eO:
                                    var o = (0, a.default)(n, "pages.current.resId", 0);
                                    i = (0, a.default)(n, "pages.restaurant.".concat(o, ".sections.CLIENT_DETAILS_SECTION.clientId"), "");
                                    break;
                                case m.yl:
                                    i = (0, a.default)(n, "pages.partnershipInit.sections.CLIENT_DETAILS_SECTION.clientId", "");
                                    break;
                                default:
                                    i = ""
                            }(0, f.ZP)(r) && (i = function(e) {
                                return (0, a.default)(e, "pages.current.clientId", "")
                            }(n)), e.setClient(i)
                        }
                    }]), e
                }();
            (0, o.Z)(p, "client", {}), (0, o.Z)(p, "whitelistedPartners", [d.CLIENT_NAME])
        },
        "8YR+": (e, t, n) => {
            "use strict";
            n.d(t, {
                _G: () => a,
                lO: () => s,
                ZP: () => u
            });
            var r = "OPEN_DOES_NOT_DELIVER_MODAL",
                i = "CLOSE_DOES_NOT_DELIVER_MODAL",
                o = {
                    isVisible: !1
                },
                a = function() {
                    return {
                        type: r
                    }
                },
                s = function() {
                    return {
                        type: i
                    }
                };
            const u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case r:
                        return {
                            isVisible: !0
                        };
                    case i:
                        return o;
                    default:
                        return e
                }
            }
        },
        XFDC: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => r,
                G: () => i
            });
            var r = "UPDATE_FETCH_CONFIG",
                i = function(e) {
                    return {
                        type: r,
                        fetchConfigs: e
                    }
                }
        },
        "1yBQ": (e, t, n) => {
            "use strict";
            n.d(t, {
                uY: () => a,
                r4: () => s,
                ZP: () => l,
                EK: () => c,
                MC: () => d
            });
            var r = n("VTBJ"),
                i = n("7EGn"),
                o = n("HKiI"),
                a = function(e) {
                    return {
                        type: "ADD_FPA_PAGE_VIEW",
                        pageView: e
                    }
                },
                s = function() {
                    return {
                        type: "DISMISS_FPA"
                    }
                },
                u = {
                    pageViews: [],
                    adVisible: !1
                };

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "ADD_FPA_PAGE_VIEW":
                        var n = t.pageView,
                            a = e.pageViews;
                        switch (a.length) {
                            case 0:
                                return (0, r.Z)((0, r.Z)({}, e), {}, {
                                    pageViews: [n]
                                });
                            case 1:
                                return (0, r.Z)((0, r.Z)({}, e), {}, {
                                    pageViews: [a[0], n]
                                });
                            default:
                                return (0, r.Z)((0, r.Z)({}, e), {}, {
                                    pageViews: [a[1], n]
                                })
                        }
                    case o.XS:
                        var s = !!(0, i.default)(t, "pageData.sections.SECTION_FULL_PAGE_AD.ad", null);
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            adVisible: s
                        });
                    case "DISMISS_FPA":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            adVisible: !1
                        });
                    default:
                        return e
                }
            }
            var c = function(e) {
                    return (0, i.default)(e, "fullPageAds.pageViews", [])
                },
                d = function(e) {
                    return (0, i.default)(e, "fullPageAds.adVisible", !1)
                }
        },
        bJA0: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r,
                m: () => i
            });

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.type,
                    r = void 0 === n ? "" : n,
                    i = t.gAds,
                    o = void 0 === i ? [] : i;
                switch (r) {
                    case "SET_ADS_DATA":
                        return o;
                    default:
                        return e
                }
            }
            var i = function(e) {
                return {
                    type: "SET_ADS_DATA",
                    gAds: e
                }
            }
        },
        "0j0V": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a,
                P: () => s
            });
            var r = n("VTBJ"),
                i = n("HKiI"),
                o = {};

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.type,
                    a = void 0 === n ? "" : n,
                    s = t.pageBlockerInfo,
                    u = void 0 === s ? {} : s;
                switch (a) {
                    case i.XS:
                        return (0, r.Z)((0, r.Z)({}, e), u);
                    case "RESET_BLOCKER_DATA":
                        return {};
                    default:
                        return e
                }
            }
            var s = function() {
                return {
                    type: "RESET_BLOCKER_DATA"
                }
            }
        },
        Mhsq: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => a,
                Lb: () => s,
                dr: () => u,
                NH: () => l
            });
            var r = n("VTBJ"),
                i = n("HKiI"),
                o = {
                    showLocationBannerAutoPopup: !1
                };

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.type,
                    a = void 0 === n ? "" : n,
                    s = t.pageConfig,
                    u = void 0 === s ? {} : s;
                switch (a) {
                    case i.XS:
                        return (0, r.Z)((0, r.Z)({}, e), u);
                    case "LOCATION_POPUP_FLOW_ALLOWED":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isLocationPopupFlowAllowed: !1
                        });
                    case "DISABLE_LOCATION_BANNER_AUTO_POPUP":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            showLocationBannerAutoPopup: !1
                        });
                    default:
                        return e
                }
            }
            var s = function() {
                    return {
                        type: "UNSET_TRIGGER_LOCATION_FOR_GPAY"
                    }
                },
                u = function() {
                    return {
                        type: "LOCATION_POPUP_FLOW_ALLOWED"
                    }
                },
                l = function() {
                    return {
                        type: "DISABLE_LOCATION_BANNER_AUTO_POPUP"
                    }
                }
        },
        T5pW: (e, t, n) => {
            "use strict";
            n.d(t, {
                jg: () => o,
                o_: () => a,
                ZP: () => s
            });
            var r = n("VTBJ"),
                i = {
                    isVisible: !1
                },
                o = function(e) {
                    return {
                        type: "OPEN_PARTNER_MODAL",
                        registerModal: e
                    }
                },
                a = function() {
                    return {
                        type: "CLOSE_PARTNER_MODAL"
                    }
                };
            const s = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "OPEN_PARTNER_MODAL":
                        return (0, r.Z)({}, t.registerModal);
                    case "CLOSE_PARTNER_MODAL":
                        return i;
                    default:
                        return e
                }
            }
        },
        SEQN: (e, t, n) => {
            "use strict";
            n.d(t, {
                Up: () => a,
                ZK: () => s,
                ZP: () => u
            });
            var r = n("VTBJ"),
                i = n("ifKl"),
                o = {
                    isVisible: !1
                },
                a = function(e) {
                    return {
                        type: "OPEN_PARTNER_LOGIN_OPTION_MODAL",
                        optionModal: e
                    }
                },
                s = function(e, t, n, r, i) {
                    return {
                        type: "CLOSE_PARTNER_LOGIN_OPTION_MODAL",
                        flowType: e,
                        calculateCartData: t,
                        successCallback: n,
                        errorCallback: r,
                        initPrompt: i
                    }
                };
            const u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t || {},
                    a = n.type,
                    s = void 0 === a ? "" : a,
                    u = n.optionModal,
                    l = void 0 === u ? {} : u,
                    c = n.flowType,
                    d = void 0 === c ? "" : c,
                    m = n.calculateCartData,
                    f = void 0 === m ? {} : m,
                    h = n.successCallback,
                    p = void 0 === h ? i.default : h,
                    v = n.errorCallback,
                    g = void 0 === v ? i.default : v,
                    E = n.initPrompt,
                    _ = void 0 !== E && E;
                switch (s) {
                    case "OPEN_PARTNER_LOGIN_OPTION_MODAL":
                        return (0, r.Z)({}, l);
                    case "CLOSE_PARTNER_LOGIN_OPTION_MODAL":
                        return (0, r.Z)((0, r.Z)({}, o), {}, {
                            flowType: d,
                            calculateCartData: f,
                            onClickHandler: p,
                            errorCallback: g,
                            initPrompt: _
                        });
                    default:
                        return e
                }
            }
        },
        Ujvf: (e, t, n) => {
            "use strict";
            n.d(t, {
                cO: () => h,
                ZP: () => v,
                Mo: () => g,
                DZ: () => E,
                kb: () => _,
                WG: () => b,
                m6: () => y,
                Zs: () => I,
                hN: () => w,
                y3: () => A,
                yg: () => T,
                Ut: () => Z,
                SC: () => S,
                u1: () => O,
                JG: () => C,
                Gi: () => N
            });
            var r = n("VTBJ"),
                i = n("a9dC"),
                o = n("X2+A"),
                a = n("n+uj"),
                s = n("oClw"),
                u = n("CjUt"),
                l = n("o59D"),
                c = n("HKiI"),
                d = n("cyO1"),
                m = n("yYoY"),
                f = n("WHL/"),
                h = "INITIATE_LOGIN_MODAL_CLOSE",
                p = {
                    isPreciseLocationBannerOpen: !0,
                    searchPageMounted: !1,
                    isUniversalLocationWithBannerModalOpen: !1,
                    isUniversalLocationModalWithDishCardOpen: !1,
                    mountPartnershipPreciseLocationModal: !0,
                    universalLMDishCard: {},
                    promoBlockerOnPageLoadAllowed: !1
                };

            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.type,
                    f = void 0 === n ? "" : n,
                    h = t.modalState,
                    v = void 0 !== h && h,
                    g = t.loginType,
                    E = void 0 === g ? "login" : g,
                    _ = t.toastDetails,
                    b = void 0 === _ ? {} : _,
                    y = t.cartErrorDetails,
                    I = void 0 === y ? {} : y,
                    w = t.pageSpecific,
                    A = t.universalLMDishCard,
                    T = void 0 === A ? {} : A,
                    Z = t.dishHeaderHeight,
                    S = void 0 === Z ? 0 : Z,
                    O = t.activeMenuIdx,
                    C = void 0 === O ? 0 : O;
                switch (f) {
                    case c.XS:
                        return R(t) ? (0, r.Z)((0, r.Z)({}, e), {}, {
                            isPreciseLocationBannerOpen: !1
                        }) : e;
                    case "CHANGE_LOGIN_MODAL_STATE":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            loginModalOpen: v
                        });
                    case "CHANGE_LOGIN_MODAL_STATE_TYPE":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            loginType: E,
                            loginModalOpen: v
                        });
                    case "CHANGE_LOGIN_TYPE":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            loginType: E
                        });
                    case "CLOSE_TOAST":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            toastDetails: {
                                show: !1
                            }
                        });
                    case "OPEN_NOTIFICATIONS":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            notificationBar: !0
                        });
                    case "MENU_MODAL_CONTINUE":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            closeMenuModal: !0,
                            activeMenuIdx: C
                        });
                    case "CLOSE_NOTIFICATIONS":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            notificationBar: !1
                        });
                    case "OPEN_TOAST":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            toastDetails: b
                        });
                    case "DOTE_FAQ_ID":
                        return (0, r.Z)((0, r.Z)({}, e), w);
                    case i.t9.FAILED:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            cartDetails: (0, r.Z)((0, r.Z)({}, I), {}, {
                                show: !0
                            })
                        });
                    case i.t9.CLEAR:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            cartDetails: {
                                show: !1
                            }
                        });
                    case o.By.OPEN:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalLocationModalOpen: !0
                        });
                    case a.nF.MOUNT:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            searchPageMounted: !0
                        });
                    case o.DO.OPEN:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalLocationWithBannerModalOpen: !0
                        });
                    case u.Pb.CLOSE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isPreciseLocationBannerOpen: !1
                        });
                    case u.Pb.OPEN:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isPreciseLocationBannerOpen: !0
                        });
                    case o.By.CLOSE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalLocationModalOpen: !1
                        });
                    case o.DO.CLOSE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalLocationWithBannerModalOpen: !1
                        });
                    case o.nr.OPEN:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalLocationModalWithDishCardOpen: !0,
                            universalLMDishCard: T
                        });
                    case o.nr.CLOSE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalLocationModalWithDishCardOpen: !1
                        });
                    case o.or:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            dishHeaderHeight: S
                        });
                    case s.pT.OPEN:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalSearchModalOpen: !0
                        });
                    case s.pT.CLOSE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isUniversalSearchModalOpen: !1
                        });
                    case l.Vj.SHOW:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isScrollToTopFloatingButtonVisible: !0
                        });
                    case l.Vj.HIDE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isScrollToTopFloatingButtonVisible: !1
                        });
                    case d.vR.OPEN:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isPromoBlockerOpen: !0
                        });
                    case d.vR.CLOSE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isPromoBlockerOpen: !1
                        });
                    case d.nF:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            promoBlockerOnPageLoadAllowed: !0
                        });
                    case d.KF:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            promoBlockerOnPageLoadAllowed: !1
                        });
                    case m.PM.OPEN:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isContinueInAppOpen: !0
                        });
                    case m.PM.CLOSE:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            isContinueInAppOpen: !1
                        });
                    case "UNMOUNT_PARTNERSHIP_PRECISE_LOCATION_MODAL":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            mountPartnershipPreciseLocationModal: !1
                        });
                    default:
                        return e
                }
            }
            var g = function() {
                    return {
                        type: "CHANGE_LOGIN_MODAL_STATE",
                        modalState: !0
                    }
                },
                E = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.success,
                        n = void 0 !== t && t;
                    return {
                        type: h,
                        success: n
                    }
                },
                _ = function() {
                    return {
                        type: "CHANGE_LOGIN_MODAL_STATE",
                        modalState: !1
                    }
                },
                b = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return {
                        type: "CHANGE_LOGIN_MODAL_STATE_TYPE",
                        modalState: !0,
                        loginType: "login",
                        enableScrollOnClose: e
                    }
                },
                y = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return {
                        type: "CHANGE_LOGIN_MODAL_STATE_TYPE",
                        modalState: !0,
                        loginType: "signup",
                        enableScrollOnClose: e
                    }
                },
                I = function(e) {
                    return {
                        type: "CHANGE_LOGIN_TYPE",
                        loginType: e
                    }
                },
                w = function() {
                    return {
                        type: "OPEN_NOTIFICATIONS"
                    }
                },
                A = function(e) {
                    return {
                        type: "MENU_MODAL_CONTINUE",
                        activeMenuIdx: e
                    }
                },
                T = function() {
                    return {
                        type: "CLOSE_TOAST"
                    }
                },
                Z = function(e) {
                    return {
                        type: "DOTE_FAQ_ID",
                        pageSpecific: {
                            doteFaqId: e
                        }
                    }
                },
                S = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top";
                    return {
                        type: "OPEN_TOAST",
                        toastDetails: {
                            text: e,
                            show: !0,
                            type: "success",
                            align: t
                        }
                    }
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Oops! Something went wrong. Please contact support.";
                    return {
                        type: "OPEN_TOAST",
                        toastDetails: {
                            text: e,
                            show: !0,
                            type: "error"
                        }
                    }
                },
                C = function(e) {
                    return {
                        type: "OPEN_TOAST",
                        toastDetails: {
                            text: e,
                            show: !0,
                            type: "darkDefault"
                        }
                    }
                },
                N = function() {
                    return {
                        type: "UNMOUNT_PARTNERSHIP_PRECISE_LOCATION_MODAL"
                    }
                },
                R = function(e) {
                    if (e.type !== c.XS) return !1;
                    var t = e.pageInfo.name;
                    return (0, f.ZP)(t)
                }
        },
        nQUI: (e, t, n) => {
            "use strict";
            n.d(t, {
                C_: () => l,
                ZP: () => c,
                y9: () => d,
                Nr: () => m,
                lx: () => f,
                TX: () => h,
                WY: () => p
            });
            var r = n("VTBJ"),
                i = n("7EGn"),
                o = n("VAjR"),
                a = n("HKiI"),
                s = n("4+bF"),
                u = n("yjvN"),
                l = "SET_LOGGED_IN_USER";

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.type,
                    c = void 0 === n ? "" : n,
                    d = t.user,
                    m = void 0 === d ? {} : d,
                    f = t.address,
                    h = void 0 === f ? {} : f,
                    p = t.savedAddress,
                    v = void 0 === p ? {} : p,
                    g = t.pageData,
                    E = void 0 === g ? {} : g,
                    _ = t.pageInfo,
                    b = void 0 === _ ? {} : _;
                switch (c) {
                    case u.d:
                        var y = m.thirdPartyUserId,
                            I = m.guestId,
                            w = m.email,
                            A = m.name,
                            T = m.phone,
                            Z = {
                                id: y,
                                mobile: T,
                                guestId: I,
                                email: w,
                                name: A
                            },
                            S = {
                                basic_info: Z
                            };
                        return (0, r.Z)({}, S);
                    case l:
                    case a.XS:
                        var O = m || {},
                            C = (0, i.default)(e, "currentAddress", {}),
                            N = (0, i.default)(b, "name", ""),
                            R = (0, i.default)(b, "subType", "order"),
                            P = (0, i.default)(E, "menuList", {}),
                            L = (0, i.default)(E, "".concat(R, ".menuList"), P),
                            x = (0, i.default)(L, "address", {}),
                            D = (0, r.Z)({}, e);
                        return N === o.lX && (D = (0, r.Z)((0, r.Z)({}, D), {}, {
                            currentAddress: (0, r.Z)((0, r.Z)({}, C), x)
                        })), (0, r.Z)((0, r.Z)({}, D), O);
                    case "SET_USER_CURRENT_ADDRESS":
                        return h && Object.keys(h).length ? (0, r.Z)((0, r.Z)({}, e), {}, {
                            currentAddress: h
                        }) : e;
                    case "CLEAR_CURRENT_ADDRESS":
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            currentAddress: {}
                        });
                    case "LOGOUT_USER":
                        return {};
                    case s.vm.SUCCESS:
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            savedAddress: v
                        });
                    case "UPDATE_USERNAME":
                        var k = t.data,
                            M = void 0 === k ? {} : k,
                            U = (0, i.default)(e, "basic_info", {});
                        return (0, r.Z)((0, r.Z)({}, e), {}, {
                            basic_info: (0, r.Z)((0, r.Z)({}, U), {}, {
                                name: M.name
                            })
                        });
                    default:
                        return e
                }
            }
            var d = function() {
                    return {
                        type: "CLEAR_CURRENT_ADDRESS"
                    }
                },
                m = function(e) {
                    return {
                        type: "SET_USER_CURRENT_ADDRESS",
                        address: e
                    }
                },
                f = function(e) {
                    return {
                        type: l,
                        user: e
                    }
                },
                h = function() {
                    return {
                        type: "LOGOUT_USER"
                    }
                },
                p = function(e) {
                    return {
                        type: "UPDATE_USERNAME",
                        data: e
                    }
                }
        },
        alT1: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => o
            });
            var r = n("uBBW"),
                i = "undefined" != typeof window && window.__PRELOADED_STATE__;
            "undefined" != typeof window && delete window.__PRELOADED_STATE__;
            var o = "undefined" == typeof window ? {
                getState: function() {
                    return {}
                }
            } : (0, r.ZP)(i)
        },
        uBBW: (e, t, n) => {
            "use strict";
            n.d(t, {
                x2: () => Re,
                ZP: () => Pe
            });
            var r = n("pU3V"),
                i = n("Ff2n"),
                o = n("VTBJ"),
                a = n("q1tI"),
                s = n("17x9"),
                u = n.n(s),
                l = n("fujP"),
                c = n("ANjH"),
                d = n("SNoJ"),
                m = n("mM01"),
                f = n("ifKl"),
                h = n("HKiI"),
                p = {
                    name: "",
                    pageUrl: ""
                };

            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t.type,
                    r = void 0 === n ? "" : n,
                    i = t.pageInfo,
                    a = void 0 === i ? {} : i;
                switch (r) {
                    case h.XS:
                        return (0, o.Z)({}, a);
                    default:
                        return e
                }
            }
            var g = n("o0o1"),
                E = n.n(g),
                _ = n("IihT"),
                b = n("7EGn"),
                y = n("AdJq"),
                I = n("G2Un"),
                w = E().mark(T);

            function A(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = {
                        page_url: e,
                        location: t,
                        isMobile: n
                    },
                    i = {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        params: r
                    };
                return (0, I.ZP)(y.AY, i).then((function(e) {
                    return e.json()
                }))
            }

            function T(e) {
                var t, n, r, i, o, a, s, u;
                return E().wrap((function(l) {
                    for (;;) switch (l.prev = l.next) {
                        case 0:
                            return t = {}, l.next = 3, (0, _.Ys)((function(e) {
                                return (0, b.default)(e, "pageUrlMappings")
                            }));
                        case 3:
                            return n = l.sent, l.next = 6, e.pageUrl;
                        case 6:
                            return r = l.sent, l.next = 9, e.location;
                        case 9:
                            return i = l.sent, l.next = 12, e.isMobile;
                        case 12:
                            return o = l.sent, a = e.forceLoad, s = void 0 !== a && a, l.next = 16, d = void 0, d = r, (c = i) && (d += "?location=".concat(c)), d;
                        case 16:
                            if (u = l.sent, n[u] && !s) {
                                l.next = 31;
                                break
                            }
                            return l.prev = 18, l.next = 21, (0, _.RE)(A, e.pageUrl, i, o);
                        case 21:
                            t = l.sent, l.next = 29;
                            break;
                        case 24:
                            return l.prev = 24, l.t0 = l.catch(18), l.next = 28, (0, _.gz)((0, h.qn)(l.t0));
                        case 28:
                            return l.abrupt("return");
                        case 29:
                            l.next = 32;
                            break;
                        case 31:
                            t.page_info = n[u];
                        case 32:
                            return l.next = 34, (0, _.gz)((0, h.j)());
                        case 34:
                            return l.next = 36, (0, _.gz)((0, h.D4)(t));
                        case 36:
                        case "end":
                            return l.stop()
                    }
                    var c, d
                }), w, null, [
                    [18, 24]
                ])
            }
            var Z = n("akXP"),
                S = n("NN/6"),
                O = n("A6yj"),
                C = n("4+bF"),
                N = n("HaE+"),
                R = E().mark(L),
                P = function() {
                    var e = (0, N.Z)(E().mark((function e(t) {
                        var n;
                        return E().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = [], e.next = 3, (0, I.ZP)(y.sy, {
                                        params: {
                                            res_id: t
                                        }
                                    });
                                case 3:
                                    return n = e.sent, e.next = 6, n.json();
                                case 6:
                                    return n = e.sent, e.abrupt("return", n);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();

            function L(e) {
                var t, n, r, i, o, a;
                return E().wrap((function(s) {
                    for (;;) switch (s.prev = s.next) {
                        case 0:
                            return t = {}, n = e.resId, r = void 0 === n ? 0 : n, i = e.setShowShimmer, o = void 0 === i ? f.default : i, s.prev = 2, s.next = 5, (0, _.RE)(P, r);
                        case 5:
                            t = s.sent, s.next = 19;
                            break;
                        case 8:
                            if (s.prev = 8, s.t0 = s.catch(2), a = s.t0, !s.t0.response) {
                                s.next = 15;
                                break
                            }
                            return s.next = 14, a.response.json();
                        case 14:
                            a = s.sent;
                        case 15:
                            return o(!1), s.next = 18, (0, _.gz)((0, C.Gh)(a));
                        case 18:
                            return s.abrupt("return");
                        case 19:
                            return o(!1), s.next = 22, (0, _.gz)((0, C._G)(t));
                        case 22:
                        case "end":
                            return s.stop()
                    }
                }), R, null, [
                    [2, 8]
                ])
            }
            var x = n("Ujvf"),
                D = n("cY/j"),
                k = n("Ht22"),
                M = E().mark(G),
                U = E().mark(q);

            function G(e) {
                var t;
                return E().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return t = e.success, n.next = 3, (0, _.RE)(q, {
                                success: t
                            });
                        case 3:
                            return n.next = 5, (0, _.gz)((0, x.kb)());
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }), M)
            }

            function q(e) {
                var t, n, r, i;
                return E().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return t = e.success, o.next = 3, (0, _.Ys)(D.Tj);
                        case 3:
                            if (o.sent === D.Z6.LOGIN_IN_PROGRESS) {
                                o.next = 6;
                                break
                            }
                            return o.abrupt("return");
                        case 6:
                            if (n = "", t) {
                                o.next = 11;
                                break
                            }
                            n = D.Z6.LOGIN_FAILED, o.next = 18;
                            break;
                        case 11:
                            return n = D.Z6.LOGIN_SUCCESS, o.next = 14, (0, _.Ys)(k.Z);
                        case 14:
                            return r = o.sent, i = (0, b.default)(r, "CART_LOGIN_SUCCESS_MESSAGE", "You are successfully logged in!"), o.next = 18, (0, _.gz)((0, x.SC)(i));
                        case 18:
                            return o.next = 20, (0, _.gz)((0, D.hN)({
                                currentState: n
                            }));
                        case 20:
                        case "end":
                            return o.stop()
                    }
                }), U)
            }
            const V = G;
            var F = E().mark(H);

            function H() {
                return E().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, (0, _.Fm)(x.cO, V);
                        case 2:
                            return e.next = 4, (0, _.Fm)(h.AY.INITIATE, T);
                        case 4:
                            return e.next = 6, (0, _.Fm)(S.sr.INITIATE, Z.ZP);
                        case 6:
                            return e.next = 8, (0, _.Fm)(O.Dk, O.YR);
                        case 8:
                            return e.next = 10, (0, _.Fm)(O.Wc, O.rP);
                        case 10:
                            return e.next = 12, (0, _.Fm)(C.vm.INITIATE, L);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), F)
            }
            var B = n("rePB"),
                j = n("VAjR"),
                z = {},
                W = function(e) {
                    var t = e.pageUrl;
                    return e.location && (t += "?location=".concat(e.location)), t
                };
            n("RE6O");
            const K = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = /(_(SUCCESS|INITIATE|FAILED|CLEAR))$/g,
                    i = t.type.match(n),
                    a = "",
                    s = "";
                if (i && i.length && t.type.split(i[0])[0]) {
                    var u = t.type.split(i[0]),
                        l = (0, r.Z)(u, 1);
                    s = l[0], a = i[0].slice(1)
                }
                switch (a) {
                    case "INITIATE":
                        return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, s, {
                            isIdle: !1,
                            isFetching: !0,
                            fetchingUrl: t.pageUrl
                        }));
                    case "SUCCESS":
                        return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, s, {
                            isIdle: !1,
                            isFetching: !1,
                            success: !0
                        }));
                    case "FAILED":
                        return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, s, {
                            isIdle: !1,
                            isFetching: !1,
                            success: !1
                        }));
                    case "CLEAR":
                        return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, s, {
                            isIdle: !0,
                            isFetching: !1
                        }));
                    default:
                        return e
                }
            };
            var Y = n("K0nr"),
                J = n("ScDn"),
                X = n("en2A");
            var Q = n("gmvh");
            var $ = n("NEP9"),
                ee = n("nWop");
            const te = (0, c.UY)({
                REVIEWS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        i = t.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, b.default)(a, X.WX, {});
                    switch (r) {
                        case J.js:
                            var u = t.reviewId,
                                l = void 0 === u ? 0 : u,
                                c = (0, b.default)(e, "".concat(l, ".isLikedByUser"), !1),
                                d = !c,
                                m = (0, b.default)(e, "".concat(l, ".likeCount"), 0),
                                f = c ? m - 1 : m + 1;
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, l, (0, o.Z)((0, o.Z)({}, e[l]), {}, {
                                isLikedByUser: d,
                                likeCount: f
                            })));
                        case J.xl:
                            var h = t.reviewId,
                                p = void 0 === h ? 0 : h,
                                v = t.commentId,
                                g = void 0 === v ? 0 : v,
                                E = (0, b.default)(e, "".concat(p, ".commentCount"), 0),
                                _ = (0, b.default)(e, "".concat(p, ".comments.entities.0.entity_ids"), []).slice();
                            return _.unshift(g), (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, p, (0, o.Z)((0, o.Z)({}, e[p]), {}, {
                                commentCount: E + 1,
                                comments: {
                                    entities: [{
                                        entity_type: X.S3,
                                        entity_ids: _
                                    }]
                                }
                            })));
                        case J.Oq:
                            var y = t.reviewId,
                                I = void 0 === y ? 0 : y,
                                w = t.commentId,
                                A = void 0 === w ? 0 : w,
                                T = (0, b.default)(e, "".concat(I, ".commentCount"), 0),
                                Z = (0, b.default)(e, "".concat(I, ".comments.entities.0.entity_ids"), []).filter((function(e) {
                                    return e !== A
                                }));
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, I, (0, o.Z)((0, o.Z)({}, e[I]), {}, {
                                commentCount: T - 1,
                                comments: {
                                    entities: [{
                                        entity_type: X.S3,
                                        entity_ids: Z
                                    }]
                                }
                            })));
                        case J.vI:
                            var S = t.reviewId,
                                O = void 0 === S ? 0 : S,
                                C = t.commentIds,
                                N = void 0 === C ? [] : C,
                                R = t.more,
                                P = void 0 !== R && R,
                                L = [].concat((0, Y.Z)((0, b.default)(e, "".concat(O, ".comments.entities.0.entity_ids"), [])), (0, Y.Z)(N));
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, O, (0, o.Z)((0, o.Z)({}, e[O]), {}, {
                                moreComments: P,
                                comments: {
                                    entities: [{
                                        entity_type: X.S3,
                                        entity_ids: L
                                    }]
                                }
                            })));
                        case J.OF:
                            var x = t.reviewId,
                                D = void 0 === x ? 0 : x,
                                k = t.commentIds,
                                M = void 0 === k ? [] : k,
                                U = t.more,
                                G = void 0 !== U && U,
                                q = [].concat((0, Y.Z)((0, b.default)(e, "".concat(D, ".managementComments.entities.0.entity_ids"), [])), (0, Y.Z)(M));
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, D, (0, o.Z)((0, o.Z)({}, e[D]), {}, {
                                moreManagementComments: G,
                                managementComments: {
                                    entities: [{
                                        entity_type: X.d9,
                                        entity_ids: q
                                    }]
                                }
                            })));
                        case J.qj:
                            var V = t.reviewId,
                                F = void 0 === V ? 0 : V,
                                H = (0, b.default)(e, "".concat(F, ".isFollowed")),
                                j = !H;
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, F, (0, o.Z)((0, o.Z)({}, e[F]), {}, {
                                isFollowed: j
                            })));
                        default:
                            if (Object.keys(s).length > 0) {
                                var z = e;
                                return Object.keys(s).forEach((function(t) {
                                    z = (0, o.Z)((0, o.Z)({}, z), {}, (0, B.Z)({}, t, (0, o.Z)((0, o.Z)({}, e[t]), s[t])))
                                })), z
                            }
                            return e
                    }
                },
                IMAGES: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        i = t.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, b.default)(a, X.YT, {});
                    switch (r) {
                        case J.ko:
                            var u = t.photoId,
                                l = void 0 === u ? 0 : u,
                                c = t.commentId,
                                d = void 0 === c ? 0 : c,
                                m = (0, b.default)(e, "".concat(l, ".commentCount"), 0),
                                f = (0, b.default)(e, "".concat(l, ".comments.entities.0.entity_ids"), []).slice();
                            return f.unshift(d), (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, l, (0, o.Z)((0, o.Z)({}, e[l]), {}, {
                                commentCount: m + 1,
                                comments: {
                                    entities: [{
                                        entity_type: X.pG,
                                        entity_ids: f
                                    }]
                                }
                            })));
                        case J.qO:
                            var h = t.photoId,
                                p = void 0 === h ? 0 : h,
                                v = t.commentId,
                                g = void 0 === v ? 0 : v,
                                E = (0, b.default)(e, "".concat(p, ".commentCount"), 0),
                                _ = (0, b.default)(e, "".concat(p, ".comments.entities.0.entity_ids"), []).filter((function(e) {
                                    return e !== g
                                }));
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, p, (0, o.Z)((0, o.Z)({}, e[p]), {}, {
                                commentCount: E - 1,
                                comments: {
                                    entities: [{
                                        entity_type: X.pG,
                                        entity_ids: _
                                    }]
                                }
                            })));
                        case J.nN:
                            var y = t.photoId,
                                I = void 0 === y ? 0 : y,
                                w = t.hasLiked,
                                A = void 0 !== w && w,
                                T = (0, b.default)(e, "".concat(I, ".likeCount"), 0);
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, I, (0, o.Z)((0, o.Z)({}, e[I]), {}, {
                                likeCount: A ? T + 1 : T - 1,
                                isLiked: +A
                            })));
                        default:
                            return Object.keys(s).length > 0 ? (0, o.Z)((0, o.Z)({}, e), s) : e
                    }
                },
                VIDEOS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.I6, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                REVIEW_COMMENTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        a = t.entities,
                        s = void 0 === a ? {} : a,
                        u = (0, b.default)(s, X.S3, {});
                    switch (r) {
                        case J.Oq:
                            var l = t.commentId,
                                c = (e[l], (0, i.Z)(e, [l].map(Q.Z)));
                            return (0, o.Z)({}, c);
                        default:
                            return Object.keys(u).length > 0 ? (0, o.Z)((0, o.Z)({}, e), u) : e
                    }
                },
                REVIEW_REPLIES: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.d9, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                PHOTO_COMMENTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        a = t.entities,
                        s = void 0 === a ? {} : a,
                        u = (0, b.default)(s, X.pG, {});
                    switch (r) {
                        case J.qO:
                            var l = t.commentId,
                                c = (e[l], (0, i.Z)(e, [l].map(Q.Z)));
                            return (0, o.Z)({}, c);
                        default:
                            return Object.keys(u).length > 0 ? (0, o.Z)((0, o.Z)({}, e), u) : e
                    }
                },
                POSITIVE_TAGS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.Dy, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                NEGATIVE_TAGS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.Y1, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                RATING: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.w4, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                EVENTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.zK, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                AD_BANNERS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.QN, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                RESTAURANTS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.Xy, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                COLLECTIONS: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, X.Cw, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                ORDER: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        i = t.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, b.default)(a, $.Sl, {});
                    switch (r) {
                        case ee.uv:
                            var u = t.orderId,
                                l = void 0 === u ? 0 : u,
                                c = (0, b.default)(e, "".concat(l, ".isFavourite"), 0) ? 0 : 1;
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, l, (0, o.Z)((0, o.Z)({}, e[l]), {}, {
                                isFavourite: c
                            })));
                        default:
                            return Object.keys(s).length > 0 ? (0, o.Z)((0, o.Z)({}, e), s) : e
                    }
                },
                ADDRESSES: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, $.WB, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                USER: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        i = t.entities,
                        a = void 0 === i ? {} : i,
                        s = (0, b.default)(a, $.sH, {});
                    switch (r) {
                        case ee.Gg:
                            var u = t.userId,
                                l = void 0 === u ? 0 : u,
                                c = (0, b.default)(e, "".concat(l, ".isFollowed"), !1);
                            return (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, l, (0, o.Z)((0, o.Z)({}, e[l]), {}, {
                                isFollowed: !c
                            })));
                        default:
                            return Object.keys(s).length > 0 ? (0, o.Z)((0, o.Z)({}, e), s) : e
                    }
                },
                PENDING_REVIEW: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, $.U$, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                },
                CDNG_ORDER: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t.type, t.entities),
                        r = void 0 === n ? {} : n,
                        i = (0, b.default)(r, $.dF, {});
                    return Object.keys(i).length > 0 ? (0, o.Z)((0, o.Z)({}, e), i) : e
                }
            });
            var ne = n("nQUI"),
                re = n("5RJS"),
                ie = n("TaAX"),
                oe = n("sC5X"),
                ae = n("yL8x");
            var se = n("bJA0"),
                ue = {
                    languages: [],
                    selectedLanguage: {}
                };
            var le = {};
            var ce = {};
            var de = n("Mhsq"),
                me = n("0j0V"),
                fe = n("1yBQ"),
                he = n("XFDC");
            const pe = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t || {},
                    r = n.type,
                    i = void 0 === r ? "" : r,
                    a = n.fetchConfigs,
                    s = void 0 === a ? {} : a;
                switch (i) {
                    case h.XS:
                    case he.m:
                        return (0, o.Z)((0, o.Z)({}, e), {}, {
                            headers: (0, o.Z)((0, o.Z)({}, (0, b.default)(e, "headers", {})), (0, b.default)(s, "headers", {}))
                        });
                    default:
                        return e
                }
            };
            var ve = [];
            var ge = n("T5pW"),
                Ee = n("SEQN"),
                _e = n("8YR+");
            var be = n("6x74"),
                ye = n("kHo1"),
                Ie = ["root"],
                we = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e
                },
                Ae = {
                    pageUrlMappings: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.pageInfo,
                            a = void 0 === i ? {} : i,
                            s = t.pageConfig,
                            u = void 0 === s ? {} : s;
                        switch (r) {
                            case h.XS:
                                var l = (0, b.default)(a, "subType", "");
                                return l !== j.kl || (0, b.default)(u, "orderPagePerformance.storeInReducer", !0) ? (0, o.Z)((0, o.Z)({}, e), {}, (0, B.Z)({}, W(t.pageInfo), a)) : e;
                            default:
                                return e
                        }
                    },
                    apiState: K,
                    entities: te,
                    user: ne.ZP,
                    uiLogic: x.ZP,
                    location: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.location,
                            a = void 0 === i ? {} : i,
                            s = t.popularSearches,
                            u = void 0 === s ? [] : s,
                            l = t.locationsData,
                            c = ((l = void 0 === l ? {} : l).subzone, l.city),
                            d = void 0 === c ? {} : c,
                            m = t.recentlySelectedLocations,
                            f = void 0 === m ? [] : m;
                        switch (r) {
                            case h.XS:
                            case re.wl.SUCCESS:
                                return (0, o.Z)((0, o.Z)({}, e), {}, {
                                    currentLocation: (0, o.Z)((0, o.Z)({}, e.currentLocation), a)
                                });
                            case ie.OF.SUCCESS:
                                return (0, o.Z)((0, o.Z)({}, e), {}, {
                                    popularLocations: [],
                                    cityData: d
                                });
                            case oe.mQ.SUCCESS:
                                return (0, o.Z)((0, o.Z)({}, e), {}, {
                                    popularSearches: u
                                });
                            case ae.rU.SUCCESS_GET:
                            case ae.rU.SUCCESS_SAVE:
                                return (0, o.Z)((0, o.Z)({}, e), {}, {
                                    recentlySelectedLocations: f
                                });
                            default:
                                return e
                        }
                    },
                    gAds: se.Z,
                    footer: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.footerInfo,
                            a = void 0 === i ? {} : i;
                        switch (r) {
                            case h.XS:
                            case "SET_FOOTER_DATA":
                                return (0, o.Z)((0, o.Z)({}, e), a);
                            default:
                                return e
                        }
                    },
                    langKeys: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.langKeys,
                            a = void 0 === i ? {} : i;
                        switch (r) {
                            case h.XS:
                            case "SET_STATIC_LANG_KEYS":
                                return (0, o.Z)((0, o.Z)({}, e), a);
                            default:
                                return e
                        }
                    },
                    deviceSpecificInfo: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.deviceSpecificInfo,
                            a = void 0 === i ? {} : i;
                        switch (r) {
                            case h.XS:
                            case "SET_DEVICE_SPECIFIC_INFO":
                                return (0, o.Z)((0, o.Z)({}, e), a);
                            default:
                                return e
                        }
                    },
                    pageConfig: de.ZP,
                    pageBlockerInfo: me.Z,
                    transientData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.pageInfo,
                            o = void 0 === i ? {} : i,
                            a = t.pageData,
                            s = void 0 === a ? {} : a,
                            u = t.pageConfig,
                            l = void 0 === u ? {} : u,
                            c = t.setTransientData,
                            d = void 0 === c || c;
                        switch (r) {
                            case h.XS:
                                return d ? {
                                    pageInfo: o,
                                    pageData: s,
                                    pageConfig: l
                                } : {};
                            default:
                                return e
                        }
                    },
                    fullPageAds: fe.ZP,
                    networkState: be.ZP,
                    fetchConfigs: pe,
                    hrefLangInfo: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.hrefLangInfo,
                            o = void 0 === i ? [] : i;
                        switch (r) {
                            case h.XS:
                            case "SET_HREF_LANG_INFO":
                                return [].concat((0, Y.Z)(e), (0, Y.Z)(o));
                            default:
                                return e
                        }
                    },
                    partnershipLoginModal: ge.ZP,
                    partnershipLoginOptionModal: Ee.ZP,
                    doesNotDeliverModal: _e.ZP
                },
                Te = {
                    blogData: we,
                    careers: we,
                    allJobs: we,
                    department: we,
                    aboutus: we,
                    sneakpeek: we,
                    networkState: we,
                    partnershipLoginModal: we,
                    partnershipLoginOptionModal: we,
                    doesNotDeliverModal: we
                },
                Ze = {
                    restaurant: we,
                    user: we,
                    awards: we,
                    sauceBlog: we,
                    Kitchen: we,
                    celebrations: we,
                    cdng: we,
                    postOrder: we,
                    zomaland: we,
                    orderOnline: we,
                    deliverycities: we,
                    pageNotFound: we,
                    collections: we,
                    collectionDetails: we,
                    appDownload: we,
                    contests: we,
                    singleJob: we,
                    goldSubscriptionAgreement: we,
                    zoomBackgrounds: we,
                    feedingPhilippines: we,
                    feedingIndonesia: we,
                    country: we,
                    tablePostBooking: we,
                    search: we,
                    city: we,
                    gold: we,
                    talentHub: we,
                    dining: we,
                    scanner: we,
                    cupcake: we,
                    partnershipInit: we,
                    dotePdp: we,
                    doteHome: we,
                    paymentStatus: we,
                    contact: we,
                    gift: we,
                    goodbye: we,
                    planPage: we,
                    familyPlanPage: we,
                    orderCartProgress: we,
                    financialInformation: we,
                    userSettings: we,
                    investorRelations: we
                },
                Se = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.asyncPageReducers,
                        n = void 0 === t ? {} : t,
                        r = e.asyncRootReducers,
                        i = void 0 === r ? {} : r;
                    return (0, c.UY)((0, o.Z)((0, o.Z)((0, o.Z)((0, o.Z)({}, Ae), Te), i), {}, {
                        pages: (0, c.UY)((0, o.Z)((0, o.Z)({
                            current: v
                        }, Ze), n))
                    }))
                },
                Oe = function(e) {
                    var t = (0, o.Z)({}, e);
                    return t.asyncRootReducers = {}, t.asyncPageReducers = {
                        current: v
                    }, t.injectReducer = function(e, n) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        r ? t.asyncRootReducers[e] = n : t.asyncPageReducers[e] = n, t.replaceReducer(Se(t));
                        var i = t.getState(),
                            o = i.transientData,
                            a = (o = void 0 === o ? {} : o).pageInfo,
                            s = void 0 === a ? {} : a,
                            u = o.pageData,
                            c = void 0 === u ? {} : u,
                            d = o.pageConfig,
                            m = void 0 === d ? {} : d;
                        (0, l.default)(s) || (0, l.default)(c) || t.dispatch((0, h.D4)({
                            page_info: s,
                            page_data: c,
                            pageConfig: m,
                            setTransientData: !1
                        }))
                    }, t
                },
                Ce = function(e, t) {
                    var n = (0, c.MT)(e, {}, (0, c.md)(t));
                    return n.injectSaga = f.default, Oe(n)
                },
                Ne = function(e) {
                    var t = (0, m.ZP)(),
                        n = (0, c.md)(t)(c.MT),
                        r = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__,
                        i = function(e, t, n) {
                            var r = (0, o.Z)({}, e),
                                i = {};
                            return r.injectSaga = function(e, n) {
                                var r = {};
                                return i[e] || (r = t(n), i[e] = r), r
                            }, r.injectSaga("root", n), r
                        }("production" === ye.Vq && r ? n(Se(), e, window.__REDUX_DEVTOOLS_EXTENSION__()) : n(Se(), e), t.run, H);
                    return Oe(i)
                },
                Re = function(e) {
                    var t = e.reducer,
                        n = e.children,
                        o = e.sagas,
                        s = function(e, t) {
                            var n = e.root;
                            ! function(e, t) {
                                var n = e.injectReducer,
                                    r = e.asyncPageReducers,
                                    o = e.asyncRootReducers,
                                    a = (t.root, (0, i.Z)(t, Ie)),
                                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    u = Object.keys(a)[0],
                                    l = s ? o : r;
                                u in l || n(u, a[u], s)
                            }(t, e, void 0 !== n && n)
                        };
                    return a.createElement(d.ET.Consumer, null, (function(e) {
                        var i = e.store;
                        return function(e, t) {
                            var n = e.injectSaga;
                            Object.entries(t).forEach((function(e) {
                                var t = (0, r.Z)(e, 2),
                                    i = t[0],
                                    o = t[1];
                                n(i, o)
                            }))
                        }(i, o), Array.isArray(t) ? t.forEach((function(e) {
                            return s(e, i)
                        })) : (0, l.default)(t) || s(t, i), n
                    }))
                };
            Re.propTypes = {
                reducer: u().oneOfType([u().object, u().arrayOf(u().object)]).isRequired,
                sagas: u().objectOf(u().func),
                children: u().node.isRequired
            }, Re.defaultProps = {
                sagas: {}
            };
            const Pe = function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return n ? Ne(e) : Ce(r, t)
            }
        },
        OM32: (e, t, n) => {
            "use strict";
            n.d(t, {
                d8: () => i,
                ej: () => o,
                kT: () => a
            });
            var r = n("Ar8T"),
                i = function(e, t, n) {
                    var r = new Date;
                    r.setTime(r.getTime() + 60 * n * 1e3);
                    var i = r.toGMTString();
                    document.cookie = "".concat(e, "=").concat(t, ";expires=").concat(i, ";path=/")
                },
                o = function(e) {
                    if ("undefined" == typeof document) return "";
                    try {
                        for (var t = "".concat(e, "="), n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i += 1) {
                            for (var o = n[i];
                                " " === o.charAt(0);) o = o.substring(1);
                            if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                        }
                    } catch (e) {
                        (0, r.q)("DECODE_URI_MALFORMED", [document.cookie, e.message])
                    }
                    return ""
                },
                a = function(e) {
                    document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/")
                }
        },
        qNwi: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("7EGn");
            const i = function(e) {
                return (0, r.default)(e, "pages.current.name", "") || ""
            }
        },
        IzBX: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r, i = n("rePB"),
                o = n("7EGn"),
                a = n("VAjR"),
                s = n("qNwi"),
                u = (r = {}, (0, i.Z)(r, a.c_, a.kl), (0, i.Z)(r, a.Le, a.l1), (0, i.Z)(r, a.ih, a.kl), r),
                l = [a.c_, a.Le, a.ih];
            const c = function(e) {
                var t = (0, s.Z)(e);
                return l.includes(t) ? u[t] : (0, o.default)(e, "pages.current.subType", "") || ""
            }
        },
        Ht22: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("7EGn");
            const i = function(e) {
                return (0, r.default)(e, "pages.current.resId", 0) || 0
            }
        },
        O7nn: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("7EGn");
            const i = function(e) {
                return {
                    image: (0, r.default)(e, "image", ""),
                    title: (0, r.default)(e, "BROWSE_REVIEW_OPEN_APP_MODAL_TITLE", "Reviews are better in app"),
                    description: (0, r.default)(e, "BROWSE_REVIEW_OPEN_APP_MODAL_DESCRIPTION", "Select restaurants based on user generated reviews, ratings and photos"),
                    clickActionText: (0, r.default)(e, "OPEN_APP_MODAL_CLICK_ACTION_TEXT", "Continue in app"),
                    closeActionText: (0, r.default)(e, "OPEN_APP_MODAL_CLOSE_ACTION_TEXT", "Continue in browser"),
                    reviewDeeplinkUrl: (0, r.default)(e, "reviewDeeplinkUrl", "")
                }
            }
        },
        Wc2h: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ok: () => c,
                m1: () => l,
                Kd: () => u,
                _k: () => d,
                KU: () => m
            });
            var r = n("7EGn"),
                i = n("VAjR"),
                o = {
                    GLOBAL: "global",
                    CITY: "city",
                    COUNTRY: "country"
                },
                a = n("AdJq");

            function s(e, t, n, r, s, u) {
                if (window && window.ga) {
                    var l = window.ga.getByName(e);
                    if (l) l.get("page") !== n && (l.set("page", n), l.set("title", u), l.set("location", "".concat(a.ho).concat(n)), e !== o.GLOBAL ? l.send("pageview") : function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = n.cityName,
                            a = void 0 === o ? "" : o,
                            s = n.countryName,
                            u = void 0 === s ? "" : s,
                            l = r.basic_info;
                        e.set("dimension1", l ? "true" : "false"), e.set("dimension2", u), e.set("dimension3", a);
                        var c = "Others";
                        switch (t) {
                            case i.lX:
                                c = "Restaurant";
                                break;
                            case i.mo:
                                c = "Search";
                                break;
                            case i.si:
                                c = "Country";
                                break;
                            case i.Or:
                                c = "City";
                                break;
                            case i.Ul:
                                c = "Collections";
                                break;
                            case i.wn:
                                c = "Single Collection";
                                break;
                            case i.xR:
                                c = "Users"
                        }
                        e.set("dimension4", c), e.send("pageview")
                    }(l, t, r, s))
                }
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (window && window.ga) {
                    var r = e.name,
                        i = void 0 === r ? "" : r,
                        a = e.pageUrl,
                        u = void 0 === a ? "" : a,
                        l = e.pageTitle,
                        c = void 0 === l ? "" : l,
                        d = u || window.location.pathname;
                    window.ga((function() {
                        Object.values(o).forEach((function(e) {
                            s(e, i, d, t, n, c)
                        }))
                    }))
                }
            }
            var l = {
                    BUTTON_CLICK: "button click",
                    CLICK: "click",
                    ICON_CLICK: "icon click"
                },
                c = {
                    ADD_TO_CART_CONTINUE: "add to cart continue"
                };

            function d(e) {
                var t = e.eventCategory,
                    n = void 0 === t ? "" : t,
                    r = e.eventAction,
                    i = void 0 === r ? "" : r,
                    a = e.eventLabel,
                    s = void 0 === a ? "" : a;
                window && window.ga && window.ga((function() {
                    Object.values(o).forEach((function(e) {
                        window.ga.getByName(e).send({
                            hitType: "event",
                            eventCategory: n,
                            eventAction: i,
                            eventLabel: s
                        })
                    }))
                }))
            }

            function m(e) {
                Array.isArray(e) ? e.forEach(f) : f(e)
            }

            function f(e) {
                if (window.gtag) {
                    var t = (0, r.default)(e, "eventName", "");
                    if (t) {
                        var n = (0, r.default)(e, "payload", {});
                        window.gtag("event", t, n)
                    }
                }
            }
        },
        P62M: (e, t, n) => {
            "use strict";
            n.d(t, {
                Vl: () => f,
                E_: () => h,
                yF: () => p,
                Of: () => v,
                Uh: () => g,
                s$: () => E,
                Pc: () => _,
                OI: () => b,
                J0: () => y,
                mp: () => I,
                hO: () => w,
                FB: () => A,
                uy: () => T
            });
            var r = n("rePB"),
                i = n("VTBJ"),
                o = n("q1tI"),
                a = n("bmMU"),
                s = n.n(a),
                u = n("GLlo"),
                l = n("etdC"),
                c = n("Z3Pq"),
                d = n("7EGn"),
                m = n("VAjR"),
                f = function(e) {
                    return "https://b.zmtcdn.com".concat(e)
                },
                h = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
                        i = t * r,
                        o = n * r,
                        a = e.indexOf("?") >= 0,
                        s = "fit=around|".concat(i, ":").concat(o, "&crop=").concat(i, ":").concat(o, ";*,*");
                    return a ? "".concat(e, "&").concat(s) : "".concat(e, "?").concat(s)
                };

            function p() {
                return !(void 0 === n.g || !n.g.ssr)
            }
            var v = function(e) {
                    return Array.isArray(e) && !!e.length
                },
                g = function(e, t) {
                    return s()((0, u.Z)(e, (0, l.Z)(e)), (0, u.Z)(t, (0, l.Z)(t)))
                },
                E = function(e) {
                    var t = (0, d.default)(e, "pages.current.subType", m.kl),
                        n = (0, d.default)(e, "pages.current.resId", 0);
                    return t === m.l1 ? (0, d.default)(e, "pages.restaurant.".concat(n, ".takeAwayDetails"), {}) : t === m.kl ? (0, d.default)(e, "pages.restaurant.".concat(n, ".orderDetails"), {}) : {}
                },
                _ = function(e) {
                    var t = Number((0, d.default)(e, "user.basic_info.id", 0));
                    return t = Number.isNaN(t) ? 0 : t, Boolean(t)
                },
                b = function(e) {
                    var t = !!(0, d.default)(e, "user.basic_info.id", 0),
                        n = !!(0, d.default)(e, "user.basic_info.guestId", 0);
                    return t && !n
                };

            function y(e) {
                if ("number" == typeof e && !Number.isNaN(e)) return e;
                if ("string" != typeof e) return null;
                var t = e.replace(/,/g, ""),
                    n = parseFloat(t);
                return Number.isNaN(n) ? null : n
            }
            var I = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = new RegExp(/(\{[\d]+\})/),
                        a = !1,
                        s = e.split(i).map((function(e) {
                            if (e.match(i)) {
                                var t = Number(e.slice(1).slice(0, -1)),
                                    r = n[t];
                                return o.isValidElement(n[t]) ? a || (a = !0) : "string" != typeof n[t] && (r = n[t].toString()), r
                            }
                            return e
                        }));
                    return a ? s : s.join("")
                },
                w = function(e) {
                    var t = {
                        login_failed_title: "Login Failed",
                        signup_failed_title: "Signup Failed",
                        otp_verification_title: "OTP Verification",
                        login_title: "Login",
                        signup_title: "Signup",
                        signup_name_error_message: "Please enter a valid name",
                        signup_empty_email_error_message: "Please enter an email",
                        signup_invalid_email_error_message: "Invalid Email id",
                        signup_phone_error_message: "Please enter phone number",
                        signup_full_name_label: "Full Name",
                        signup_email_label: "Email",
                        signup_phone_label: "Phone",
                        terms_of_service_text: "Terms of Service",
                        privacy_policy_text: "Privacy Policy",
                        content_policies: "Content Policies",
                        agree_to_zomato_policy_text: "I agree to Zomato's {0}, {1} and {2}",
                        create_account_button_text: "Create account",
                        already_have_an_account_text: "Already have an account? {0}",
                        login_with_phone_error: "Login with Phone number is not currently available",
                        new_to_zomato_text: "New to Zomato?",
                        send_otp_text: "Send One Time Password",
                        error_messaage_box_try_other_methods_text: "Try using other methods",
                        error_messaage_box_skip_for_now_text: "Skip for now",
                        new_otp_has_been_sent_text: "A new OTP has been sent",
                        not_received_otp_text: "Didn't receive OTP?",
                        resend_now_text: "Resend Now",
                        terminate_verification_text: "Are you sure you want to terminate the verification?",
                        yes_button_text: "Yes",
                        no_button_text: "No",
                        continue_with_google_button_text: "Continue with Google",
                        error_occured_text: "Error occurred!",
                        or_text: "or"
                    };
                    return Object.keys(e).reduce((function(n, o) {
                        var a = o.toLowerCase();
                        return t[a] ? (0, i.Z)((0, i.Z)({}, n), {}, (0, r.Z)({}, a, e[o])) : n
                    }), {})
                },
                A = function(e, t) {
                    return (0, c.Z)(e, (function(e) {
                        return e[t]
                    }))
                },
                T = function(e) {
                    return (0, d.default)(e, "deviceSpecificInfo.isBot", 0)
                }
        },
        PdVL: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n("qNwi"),
                i = n("IzBX"),
                o = n("VAjR");
            const a = function(e) {
                var t = (0, r.Z)(e),
                    n = (0, i.Z)(e);
                return !(!t || !n) && !(![o.lX].includes(t) || ![o.kl, o.l1].includes(n))
            }
        },
        "+dRJ": (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => o
            });
            var r = n("VAjR"),
                i = n("rGZ9"),
                o = function(e, t, n, o) {
                    return (e === r.kl && t === r.lX || e === i.Gw && t === r.mo) && !n && o
                }
        },
        v4uT: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("7EGn");
            const i = function(e) {
                return (0, r.default)(e, "pageConfig.showRatingV2", !1)
            }
        },
        "WHL/": (e, t, n) => {
            "use strict";
            n.d(t, {
                S7: () => s,
                $1: () => u,
                ZP: () => l
            });
            var r = n("7EGn"),
                i = n("VAjR"),
                o = [i.fP, i.eO, i.cP, i.ih, i.yl, i.id, i.JH, i.ri, i.Y],
                a = function(e) {
                    return o.includes(e)
                },
                s = function(e) {
                    return a((0, r.default)(e, "pages.current.name", ""))
                },
                u = function(e) {
                    return (0, r.default)(e, "uiLogic.mountPartnershipPreciseLocationModal", !0)
                };
            const l = a
        }
    },
    e => {
        "use strict";
        e.O(0, [6588, 7352, 7517, 427, 6519, 9685, 8422], () => {
            return t = "KtWY", e(e.s = t);
            var t
        });
        e.O()
    }
]);