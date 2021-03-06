(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1694], {
        "0zwj": (e, t, n) => {
            "use strict";
            var a = n("TqRt"),
                r = n("cDf5");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("J4zp")),
                i = C(n("q1tI")),
                o = a(n("17x9")),
                u = C(n("vOnD")),
                d = a(n("5An4")),
                f = a(n("HMsx")),
                c = a(n("ukK4")),
                s = a(n("PQmA")),
                m = a(n("RuGz")),
                p = a(n("cjht")),
                g = a(n("eLLh")),
                v = a(n("NANp")),
                h = a(n("ifKl"));

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (b = function(e) {
                    return e ? n : t
                })(e)
            }

            function C(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = b(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            var w = {
                    DESKTOP: 650,
                    TABLET: 500,
                    MOBILE: 300
                },
                y = function e(t) {
                    var n = t.country,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        o = void 0 === r ? "" : r,
                        u = t.countries,
                        d = void 0 === u ? [] : u,
                        f = t.onSelect,
                        c = void 0 === f ? h.default : f,
                        p = (0, i.useState)(a),
                        v = (0, l.default)(p, 2),
                        b = v[0],
                        C = v[1],
                        y = (0, i.useState)(o),
                        k = (0, l.default)(y, 2),
                        j = k[0],
                        L = k[1],
                        M = (0, i.useState)(!1),
                        O = (0, l.default)(M, 2),
                        _ = O[0],
                        q = O[1],
                        S = (0, i.useState)(0),
                        z = (0, l.default)(S, 2),
                        P = z[0],
                        D = z[1],
                        T = function(e, t, n) {
                            C(e), L(t), c(t, n)
                        },
                        R = "undefined" != typeof window ? window.innerWidth / 2 + Math.min(900, window.innerWidth) / 2 : 0,
                        A = (0, i.useRef)();
                    return (0, i.useEffect)((function() {
                        var e = function(e) {
                                return w[e] || 650
                            }(function() {
                                var e = "undefined" != typeof window ? window.innerWidth : 0;
                                return e >= 768 ? "DESKTOP" : e < 768 && e > 480 ? "TABLET" : "MOBILE"
                            }()),
                            t = A.current.getBoundingClientRect().x,
                            n = t <= 0 ? t : t + e >= R ? t + e - R : 0;
                        n && D(-1 * (n + 10))
                    }), []), i.default.createElement(I, {
                        handleClickOutside: function() {
                            return q(!1)
                        }
                    }, i.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return q(!_)
                        },
                        tabIndex: "0",
                        "aria-labelledby": "country-dropdown-label"
                    }, i.default.createElement(e.label, {
                        id: "country-dropdown-label"
                    }, "Select Country"), i.default.createElement(e.Arrow, {
                        visible: _
                    }), i.default.createElement(e.Menu, {
                        visible: _,
                        tabIndex: "-1",
                        "aria-activedescendant": "country-active",
                        ref: A,
                        left: P
                    }, i.default.createElement(x, {
                        gap: 5,
                        visible: _
                    }, d.map((function(e) {
                        return i.default.createElement(g.default.Item, {
                            colD: 3,
                            colT: 4,
                            colM: 6,
                            key: e.value
                        }, i.default.createElement(E, {
                            name: e.name,
                            value: e.value,
                            onSelect: T,
                            selected: j === e.value,
                            countryObj: e
                        }))
                    })))), i.default.createElement(e.Head, null, i.default.createElement(m.default, {
                        country: j,
                        width: 22
                    }), i.default.createElement(e.CountryName, null, b), i.default.createElement(s.default, {
                        size: 15
                    }))))
                },
                x = (0, u.default)(g.default).withConfig({
                    componentId: "sc-10ugfab-0"
                })(["display:", ";"], (function(e) {
                    return e.visible ? "inital" : "none"
                })),
                I = (0, u.default)(p.default).withConfig({
                    componentId: "sc-10ugfab-1"
                })(["max-width:100%;"]),
                k = function(e) {
                    return e.visible ? "1rem 1.4rem 1.4rem 1.4rem" : 0
                },
                E = function e(t) {
                    var n = t.name,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        l = void 0 === r ? "" : r,
                        o = t.onSelect,
                        u = void 0 === o ? h.default : o,
                        d = t.selected,
                        f = void 0 !== d && d,
                        c = t.countryObj;
                    return i.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return u(a, l, c)
                        },
                        isSelected: f,
                        id: f ? "country-active" : "country-" + l
                    }, i.default.createElement(m.default, {
                        country: l,
                        width: 24
                    }), i.default.createElement(e.CountryName, null, a))
                };
            y.label = u.default.label.withConfig({
                componentId: "sc-10ugfab-2"
            })(["display:none;"]), E.CountryName = u.default.span.withConfig({
                componentId: "sc-10ugfab-3"
            })(["font-size:1.4rem;color:", ";line-height:1.6rem;margin:0 0.5rem 0 0.8rem;font-weight:400;"], d.default), E.propTypes = {
                name: o.default.string,
                value: o.default.string,
                onSelect: o.default.func,
                selected: o.default.bool,
                countryObj: o.default.object.isRequired
            }, E.Wrapper = u.default.div.withConfig({
                componentId: "sc-10ugfab-4"
            })(["display:flex;align-items:center;cursor:pointer;width:96%;padding:1%;:hover{background:", ";}", ""], f.default.z100, (function(e) {
                return e.isSelected && (0, u.css)(["background:", ";"], c.default.z100)
            })), y.propTypes = {
                country: o.default.string,
                countries: o.default.array,
                onSelect: o.default.func,
                value: o.default.string
            }, y.Arrow = u.default.span.withConfig({
                componentId: "sc-10ugfab-5"
            })(["display:", ";position:absolute;top:-1.7rem;left:3.1rem;width:2.1rem;height:2.3rem;transform:rotate(45deg);border-radius:2.2rem 0 0.4rem 0;background:#fff;z-index:11;"], (function(e) {
                return e.visible ? "block" : "none"
            })), y.Menu = u.default.div.withConfig({
                componentId: "sc-10ugfab-6"
            })(["position:absolute;opacity:", ";bottom:4rem;left:", "px;width:", ";visibility:", ";height:", ";background-color:#fff;box-shadow:0.1rem 4rem 4rem rgba(0,0,0,0.15);border-radius:", ";padding:", ";cursor:default;transform-origin:0 100%;transition-property:opacity,padding;will-change:opacity,padding;transition-duration:", ";@media (max-width:768px) and (min-width:481px){width:50rem;}@media (max-width:480px) and (min-width:321px){padding:", ";width:30rem;}@media (max-width:320px){padding:", ";width:28rem;}z-index:10;"], (function(e) {
                return e.visible ? 1 : 0
            }), (function(e) {
                return e.left
            }), (function(e) {
                return e.visible ? "65rem" : 0
            }), (function(e) {
                return e.visible ? "visible" : "hidden"
            }), (function(e) {
                return e.visible ? "auto" : 0
            }), v.default.radius, (function(e) {
                return e.visible ? "1.2rem 1.6rem 1.6rem 1.6rem" : 0
            }), v.default.animationDuration, k, k), y.Head = u.default.div.withConfig({
                componentId: "sc-10ugfab-7"
            })(["display:flex;align-items:center;max-width:100%;overflow:hidden;text-overflow:ellipsis;"]), y.CountryName = u.default.span.withConfig({
                componentId: "sc-10ugfab-8"
            })(["font-size:1.8rem;line-height:2rem;max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";margin:0 0.5rem 0 0;font-weight:400;@media (max-width:480px){font-size:1.6rem;}"], d.default), y.Wrapper = u.default.div.withConfig({
                componentId: "sc-10ugfab-9"
            })(["min-width:10rem;width:max-content;max-width:100%;cursor:pointer;position:relative;padding:0.3rem 0.7rem;border:1px solid ", ";border-radius:0.6rem;"], f.default.z400);
            var j = y;
            t.default = j
        },
        BYLu: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("0zwj")).default;
            t.default = r
        },
        meID: (e, t, n) => {
            "use strict";
            var a = n("TqRt"),
                r = n("cDf5");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("pVnL")),
                i = a(n("q1tI")),
                o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n("vOnD")),
                u = a(n("17x9")),
                d = n("fHDd");
            a(n("HMsx"));

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (f = function(e) {
                    return e ? n : t
                })(e)
            }
            var c = function e(t) {
                    var n = t.width,
                        a = void 0 === n ? 45 : n,
                        r = t.country,
                        o = g(void 0 === r ? "" : r),
                        u = m(45, a),
                        d = s(u, 45);
                    return i.default.createElement(e.Image, (0, l.default)({}, t, {
                        width: 45,
                        xy: o,
                        scaleFactor: u,
                        leftMargin: d
                    }))
                },
                s = function(e, t) {
                    return e ? Math.floor((t * e - t) / 2) : 0
                },
                m = function(e, t) {
                    return t / e
                },
                p = {
                    malaysia: 1,
                    philippines: 2,
                    srilanka: 3,
                    india: 4,
                    canada: 5,
                    chile: 6,
                    "united-states": 7,
                    newzealand: 8,
                    southafrica: 9,
                    ireland: 10,
                    uk: 11,
                    uae: 12,
                    "czech-republic": 13,
                    "singapore-country": 14,
                    portugal: 15,
                    qatar: 16,
                    australia: 17,
                    slovakia: 18,
                    brasil: 19,
                    poland: 20,
                    indonesia: 21,
                    lebanon: 22,
                    italy: 23,
                    turkey: 24,
                    india2: 25
                },
                g = function(e) {
                    var t = (p[e] || 0) - 1;
                    return "".concat(-(45 * t + 2 * t), "px 0px")
                };
            c.propTypes = {
                width: u.default.number,
                country: u.default.string
            }, c.Image = o.default.span.withConfig({
                componentId: "sc-13tn0rn-0"
            })(["width:", "rem;height:", "rem;display:inline-block;background:url(", ") no-repeat;background-position:", ";transform:scale(", ");", ""], (function(e) {
                return e.width / 10
            }), (function(e) {
                return e.width / 10 * .667
            }), (0, d.getCDN)("data/webuikit/0687ff554c86e36cda9498212e221af61563274375.png"), (function(e) {
                return e.xy
            }), (function(e) {
                return e.scaleFactor
            }), (function(e) {
                return !!e.leftMargin && (0, o.css)(["margin-left:", "rem;"], e.leftMargin / 10)
            }));
            var v = c;
            t.default = v
        },
        RuGz: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("meID")).default;
            t.default = r
        },
        Fptk: (e, t, n) => {
            "use strict";
            var a = n("TqRt"),
                r = n("cDf5");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("q1tI")),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n("vOnD")),
                o = a(n("HMsx")),
                u = a(n("7EGn")),
                d = a(n("17x9")),
                f = n("9quZ"),
                c = a(n("BYLu")),
                s = a(n("z5gk")),
                m = a(n("eLLh")),
                p = a(n("ifKl"));

            function g(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (g = function(e) {
                    return e ? n : t
                })(e)
            }
            var v = (0, n("fHDd").getCDN)("web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"),
                h = function e(t) {
                    var n = t.fnCountrySelect,
                        a = void 0 === n ? p.default : n,
                        r = t.fnLanguageSelect,
                        i = void 0 === r ? p.default : r,
                        o = t.companyContent,
                        d = t.foodiesContent,
                        c = t.restaurantsContent,
                        s = t.forYouContent,
                        m = t.icons,
                        g = t.disclaimer,
                        h = t.countries,
                        w = t.languages,
                        y = t.storeLinks,
                        x = (y = void 0 === y ? {} : y).appStoreLink,
                        I = void 0 === x ? "" : x,
                        k = y.playStoreLink,
                        E = void 0 === k ? "" : k,
                        j = t.onStoreClick,
                        L = void 0 === j ? p.default : j,
                        q = t.selectedCountry,
                        S = t.selectedLanguage,
                        z = t.large,
                        P = void 0 !== z && z,
                        D = t.showQrCode,
                        T = void 0 !== D && D,
                        R = t.qrCode,
                        A = R.qrId,
                        W = void 0 === A ? "" : A,
                        H = R.qrInnerId,
                        N = void 0 === H ? "" : H,
                        V = R.qrLink,
                        Z = void 0 === V ? "" : V,
                        F = R.qrImageUrl,
                        K = void 0 === F ? "" : F,
                        Q = t.footerDataArray,
                        U = t.isMobile,
                        B = t.zLogoImg,
                        Y = (0, u.default)(Q, "COMPANY", "Company"),
                        G = (0, u.default)(Q, "FOR_FOODIES", "For Foodies"),
                        J = (0, u.default)(Q, "FOR_RESTAURANTS", "For Restaurants"),
                        X = (0, u.default)(Q, "FOR_YOU", "For You"),
                        $ = (0, u.default)(Q, "SOCIAL_LINKS", "Social links");
                    return l.default.createElement(e.Wrapper, null, l.default.createElement(e.Content, {
                        large: P
                    }, l.default.createElement(e.Top, null, l.default.createElement(e.Img, {
                        src: B || v,
                        alt: "Zomato logo",
                        height: "28px"
                    }), l.default.createElement(O, null), l.default.createElement(M, {
                        languages: w,
                        countries: h,
                        handleCountrySelect: a,
                        handleLangSelect: i,
                        selectedCountry: q,
                        selectedLanguage: S,
                        horizontal: !0
                    })), l.default.createElement(e.List, null, l.default.createElement(e.Column, {
                        colM: 7,
                        colD: 2.2,
                        colT: 2.2,
                        fnCountrySelect: a,
                        fnLanguageSelect: i,
                        countries: h,
                        languages: w,
                        name: Y,
                        columnContent: o
                    }), l.default.createElement(e.Column, {
                        colM: 5,
                        colD: 2.3,
                        name: G,
                        columnContent: d
                    }), l.default.createElement(e.Column, {
                        colM: 7,
                        colD: 3,
                        name: J,
                        columnContent: c
                    }), l.default.createElement(e.Column, {
                        colM: 5,
                        colD: 2,
                        name: X,
                        columnContent: s
                    }), T ? l.default.createElement(_, {
                        qrId: W,
                        innerId: N,
                        link: Z,
                        imageUrl: K
                    }) : l.default.createElement(l.default.Fragment, null, !!U && l.default.createElement(C, null, l.default.createElement(e.MobileStoreLinks, {
                        onClick: L
                    }, l.default.createElement(f.Appstore, {
                        link: I
                    }), l.default.createElement(f.Playstore, {
                        link: E
                    }))), !!U && l.default.createElement(C, {
                        colM: 12
                    }, l.default.createElement(b, null, $)), l.default.createElement(e.Links, {
                        colM: 12,
                        colD: 2.2,
                        name: $,
                        icons: m,
                        appStoreLink: I,
                        playStoreLink: E,
                        isMobile: U,
                        onStoreClick: L
                    }))), l.default.createElement(e.HR, null), l.default.createElement(e.Disclaimer, null, g)))
                };
            h.MobileStoreLinks = i.default.div.withConfig({
                componentId: "sc-elhb8j-0"
            })(["display:flex;justify-content:space-around;"]), h.Img = i.default.img.withConfig({
                componentId: "sc-elhb8j-1"
            })(["@media (max-width:480px){margin-bottom:3rem;}"]), h.Top = i.default.section.withConfig({
                componentId: "sc-elhb8j-2"
            })(["display:flex;align-items:center;width:100%;justify-content:space-between;margin-bottom:4rem;@media (max-width:480px){flex-direction:column;align-items:flex-start;}"]);
            var b = i.default.p.withConfig({
                    componentId: "sc-elhb8j-3"
                })(["margin:0;margin-top:0.4rem;font-size:1.6rem;text-align:center;"]),
                C = (0, i.default)(m.default.Item).withConfig({
                    componentId: "sc-elhb8j-4"
                })(["display:none;@media (max-width:480px){display:block;margin-bottom:1.5rem;}"]),
                w = function(e) {
                    var t = e.appStoreLink,
                        n = e.playStoreLink,
                        a = e.showInMobile,
                        r = void 0 === a || a,
                        i = e.onStoreClick;
                    return l.default.createElement(h.StoreLinksContainer, {
                        showInMobile: r,
                        onClick: i
                    }, l.default.createElement(f.Appstore, {
                        link: t
                    }), l.default.createElement(O, null), l.default.createElement(f.Playstore, {
                        link: n
                    }))
                };
            w.propTypes = {
                appStoreLink: d.default.string.isRequired,
                playStoreLink: d.default.string.isRequired,
                showInMobile: d.default.bool,
                horizontal: d.default.bool
            };
            var y = d.default.shape({
                    name: d.default.string,
                    value: d.default.string
                }),
                x = y,
                I = {
                    name: "India",
                    value: "india"
                },
                k = {
                    name: "English",
                    value: "EN"
                };
            h.propTypes = {
                fnCountrySelect: d.default.func,
                fnLanguageSelect: d.default.func,
                companyContent: d.default.array,
                foodiesContent: d.default.array,
                restaurantsContent: d.default.array,
                forYouContent: d.default.array,
                icons: d.default.array,
                disclaimer: d.default.string,
                countries: d.default.array,
                languages: d.default.array,
                storeLinks: d.default.shape({
                    appStoreLink: d.default.string.isRequired,
                    playStoreLink: d.default.string.isRequired
                }).isRequired,
                selectedLanguage: x,
                selectedCountry: y,
                large: d.default.bool,
                showQrCode: d.default.bool,
                qrCode: d.default.shape({
                    qrId: d.default.string,
                    qrInnerId: d.default.string,
                    qrLink: d.default.string,
                    qrImageUrl: d.default.string
                }),
                footerDataArray: d.default.objectOf(d.default.any),
                isMobile: d.default.bool,
                onStoreClick: d.default.func
            }, h.defaultProps = {
                showQrCode: !1,
                qrCode: {
                    qrId: "",
                    qrInnerId: "",
                    qrLink: "",
                    qrImageUrl: ""
                },
                selectedCountry: I,
                selectedLanguage: k,
                footerDataArray: {},
                isMobile: !0,
                onStoreClick: p.default,
                zLogoImg: ""
            }, h.Disclaimer = i.default.p.withConfig({
                componentId: "sc-elhb8j-5"
            })(["font-size:1.3rem;color:", ";line-height:1.7rem;margin-top:2.3rem;@media (max-width:480px){margin-bottom:3rem;}"], o.default.z800), h.Links = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.icons,
                    r = void 0 === a ? [] : a,
                    i = e.appStoreLink,
                    o = e.playStoreLink,
                    u = e.isMobile,
                    d = e.onStoreClick;
                return l.default.createElement(h.LinksContainer, e, l.default.createElement(L, null, n), l.default.createElement(h.IconContainer, null, r.map((function(e) {
                    return l.default.createElement(h.Item.A, {
                        key: e.name,
                        href: e.link,
                        target: "_blank",
                        isIcon: !0
                    }, !u && l.default.createElement(j, null, l.default.createElement(e.component, {
                        size: 22
                    })), !!u && l.default.createElement(E, null, l.default.createElement(e.component, {
                        size: 28
                    })))
                }))), l.default.createElement(O, null), l.default.createElement(O, null), l.default.createElement(w, {
                    appStoreLink: i,
                    playStoreLink: o,
                    showInMobile: !1,
                    onStoreClick: d
                }))
            };
            var E = i.default.div.withConfig({
                    componentId: "sc-elhb8j-6"
                })(["display:none;@media (max-width:480px){display:block;}"]),
                j = i.default.div.withConfig({
                    componentId: "sc-elhb8j-7"
                })(["@media (max-width:480px){display:none;}"]),
                L = i.default.h6.withConfig({
                    componentId: "sc-elhb8j-8"
                })(["font-size:1.4rem;letter-spacing:0.2rem;text-transform:uppercase;font-weight:500;margin:0 0 1.2rem 0;@media (max-width:480px){display:none;}"]);
            h.Column = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.columnContent,
                    r = void 0 === a ? [] : a;
                return l.default.createElement(h.ColumnContainer, e, l.default.createElement(h.Heading, null, n), l.default.createElement("nav", null, r.map((function(e) {
                    return l.default.createElement(h.Item, {
                        key: e.label,
                        label: e.label,
                        link: e.link
                    })
                }))))
            }, h.Item = function(e) {
                return l.default.createElement(h.Item.A, {
                    href: e.link
                }, l.default.createElement(h.Item.P, null, e.label))
            }, h.Locale = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.columnContent,
                    r = void 0 === a ? [] : a;
                return l.default.createElement(h.LocaleContainer, e, l.default.createElement(h.Column, {
                    colM: 7,
                    colD: 2,
                    columnContent: r,
                    name: n
                }), l.default.createElement(O, null))
            };
            var M = function(e) {
                var t = e.selectedLanguage,
                    n = e.selectedCountry,
                    a = e.languages,
                    r = e.countries,
                    i = e.handleCountrySelect,
                    o = e.handleLangSelect,
                    u = e.showInMobile,
                    d = void 0 === u || u,
                    f = e.horizontal,
                    m = void 0 !== f && f;
                return l.default.createElement(h.DropdownContainer, {
                    showInMobile: d,
                    horizontal: m
                }, l.default.createElement(c.default, {
                    country: n.name,
                    value: n.value,
                    countries: r,
                    onSelect: i
                }), l.default.createElement(O, {
                    horizontal: m
                }), l.default.createElement(s.default, {
                    lang: t.name,
                    value: t.value,
                    languages: a,
                    onSelect: o
                }))
            };
            M.propTypes = {
                languages: d.default.array.isRequired,
                countries: d.default.array.isRequired,
                handleCountrySelect: d.default.func.isRequired,
                handleLangSelect: d.default.func.isRequired,
                showInMobile: d.default.bool,
                horizontal: d.default.bool,
                selectedCountry: y,
                selectedLanguage: x
            }, M.defaultProps = {
                selectedCountry: I,
                selectedLanguage: k
            }, h.Locale.propTypes = {
                name: d.default.string,
                columnContent: d.default.array
            }, h.DropdownContainer = i.default.section.withConfig({
                componentId: "sc-elhb8j-9"
            })(["", " ", ""], (function(e) {
                return e.horizontal && (0, i.css)(["display:flex;"])
            }), (function(e) {
                return !e.showInMobile && (0, i.css)(["@media (max-width:480px){display:none;}"])
            })), h.StoreLinksContainer = i.default.section.withConfig({
                componentId: "sc-elhb8j-10"
            })(["", ""], (function(e) {
                return !e.showInMobile && (0, i.css)(["@media (max-width:480px){display:none;}"])
            }));
            var O = i.default.div.withConfig({
                componentId: "sc-elhb8j-11"
            })(["margin-top:", ";", " @media (max-width:768px) and (min-width:481px){margin-right:1.2rem;}"], (function(e) {
                return e.m ? "".concat(e.m, "px") : "1.2rem"
            }), (function(e) {
                return e.horizontal && (0, i.css)(["margin-left:2rem;"])
            }));
            h.Links.propTypes = {
                name: d.default.string,
                icons: d.default.array,
                appStoreLink: d.default.string,
                playStoreLink: d.default.string
            }, h.Column.propTypes = {
                name: d.default.string,
                columnContent: d.default.array
            }, h.Item.propTypes = {
                label: d.default.string,
                link: d.default.string
            }, h.HR = i.default.hr.withConfig({
                componentId: "sc-elhb8j-12"
            })(["margin-top:5rem;border:0;border-top:1px solid ", ";@media (max-width:480px){margin-top:4.4rem;}"], o.default.z300), h.LinksContainer = (0, i.default)(m.default.Item).withConfig({
                componentId: "sc-elhb8j-13"
            })(["display:flex;flex-direction:column;@media (max-width:480px){margin-top:0.5rem;flex-direction:row;width:100%;justify-content:center;}"]), h.IconContainer = i.default.div.withConfig({
                componentId: "sc-elhb8j-14"
            })(["display:flex;margin-left:0.6rem;justify-content:flex-start;@media (max-width:550px) and (min-width:481px){flex-direction:column;}"]), h.Item.P = i.default.p.withConfig({
                componentId: "sc-elhb8j-15"
            })(["font-size:1.4rem;line-height:2.1rem;color:", ";margin:0.5rem 0;@media (max-width:480px){font-size:1.3rem;line-height:1.6rem;}:hover{color:#1c1c1c;}"], o.default.z700), h.Item.A = i.default.a.withConfig({
                componentId: "sc-elhb8j-16"
            })(["text-decoration:none;", ""], (function(e) {
                return e.isIcon && (0, i.css)(["margin-right:0.8rem;@media (max-width:550px) and (min-width:481px){margin-top:0.8rem;}"])
            })), h.Heading = i.default.h6.withConfig({
                componentId: "sc-elhb8j-17"
            })(["font-size:1.4rem;letter-spacing:0.2rem;text-transform:uppercase;font-weight:500;margin:0 0 1.2rem 0;"]), h.LocaleContainer = (0, i.default)(m.default.Item).withConfig({
                componentId: "sc-elhb8j-18"
            })(["@media (max-width:480px){margin-bottom:3rem;}"]), h.ColumnContainer = (0, i.default)(m.default.Item).withConfig({
                componentId: "sc-elhb8j-19"
            })(["@media (max-width:480px){margin-bottom:3rem;}"]), h.Wrapper = i.default.footer.withConfig({
                componentId: "sc-elhb8j-20"
            })(["width:100%;background:", ";display:flex;justify-content:center;@media (min-width:768px) and (max-width:900px){&{padding:0 1.5rem;}}"], o.default.z95), h.Content = i.default.div.withConfig({
                componentId: "sc-elhb8j-21"
            })(["max-width:", ";width:", ";padding:4.8rem 0 2.2rem 0;position:relative;@media (max-width:768px) and (min-width:481px){padding:4.8rem 2.4rem 2.2rem 2.4rem;}@media (max-width:480px){padding:4.8rem 1rem 14.2rem 1rem;}"], (function(e) {
                return e.large ? "110rem" : "90rem"
            }), (function(e) {
                return e.large ? "110rem" : "90rem"
            })), h.List = (0, i.default)(m.default).withConfig({
                componentId: "sc-elhb8j-22"
            })(["justify-content:space-between;"]);
            var _ = function(e) {
                var t = e.qrId,
                    n = void 0 === t ? "" : t,
                    a = e.innerId,
                    r = void 0 === a ? "" : a,
                    i = e.link,
                    o = void 0 === i ? "" : i,
                    u = e.imageUrl,
                    d = void 0 === u || u;
                return l.default.createElement(h.Qr, null, l.default.createElement("div", {
                    id: n
                }, l.default.createElement("div", {
                    id: r
                }, l.default.createElement("a", {
                    href: o
                }, l.default.createElement("img", {
                    src: d
                })))))
            };
            h.Qr = i.default.div.withConfig({
                componentId: "sc-elhb8j-23"
            })(["width:13rem;img{width:100%;}@media (max-width:480px){margin:0 auto;}"]), _.propTypes = {
                qrId: d.default.string.isRequired,
                innerId: d.default.string.isRequired,
                link: d.default.string.isRequired,
                imageUrl: d.default.string.isRequired
            };
            var q = h;
            t.default = q
        },
        "94yn": (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            t.Z = void 0;
            var r = a(n("Fptk")).default;
            t.Z = r
        },
        cjht: (e, t, n) => {
            "use strict";
            var a = n("TqRt"),
                r = n("cDf5");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("pVnL")),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = l ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n("q1tI")),
                o = a(n("17x9")),
                u = a(n("vOnD")),
                d = a(n("ifKl"));

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (f = function(e) {
                    return e ? n : t
                })(e)
            }
            var c = function e(t) {
                var n = (0, i.useRef)(),
                    a = t.handleClickOutside,
                    r = t.removeHandler;
                return (0, i.useEffect)((function() {
                    if ("function" == typeof a && !r) {
                        var e = function(e) {
                            n.current && n.current.contains(e.target) || a(e)
                        };
                        return document.addEventListener("mousedown", e),
                            function() {
                                document.removeEventListener("mousedown", e)
                            }
                    }
                    return d.default
                }), [a, r]), i.default.createElement(e.Wrapper, (0, l.default)({}, t, {
                    ref: n
                }), t.children)
            };
            c.Wrapper = u.default.div.withConfig({
                componentId: "sc-18n4g8v-0"
            })(["width:", ";"], (function(e) {
                return e.width ? e.width : "max-content"
            })), c.propTypes = {
                width: o.default.string,
                children: o.default.node,
                handleClickOutside: o.default.func.isRequired,
                removeHandler: o.default.bool
            }, c.defaultProps = {
                removeHandler: !1
            };
            var s = c;
            t.default = s
        },
        PQmA: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pVnL")),
                l = a(n("q1tI")),
                i = a(n("w/pp")),
                o = a(n("6jlT")),
                u = function(e) {
                    var t = (0, o.default)();
                    return l.default.createElement(i.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("title", null, "chevron-down"), l.default.createElement("path", {
                        d: "M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"
                    }))
                };
            t.default = u
        },
        STzO: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pVnL")),
                l = a(n("q1tI")),
                i = a(n("w/pp")),
                o = a(n("6jlT")),
                u = function(e) {
                    var t = (0, o.default)();
                    return l.default.createElement(i.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"
                    }))
                };
            t.default = u
        },
        hHop: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pVnL")),
                l = a(n("q1tI")),
                i = a(n("w/pp")),
                o = a(n("6jlT")),
                u = function(e) {
                    var t = (0, o.default)();
                    return l.default.createElement(i.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375ZM13 6.8125C12.6875 6.8125 12.375 7.0625 12.375 7.4375C12.375 7.8125 12.625 8.0625 13 8.0625C13.375 8.0625 13.625 7.8125 13.625 7.4375C13.625 7.0625 13.3125 6.8125 13 6.8125ZM10.1875 7.5C8.75 7.5 7.5 8.6875 7.5 10.1875C7.5 11.6875 8.6875 12.875 10.1875 12.875C11.6875 12.875 12.875 11.6875 12.875 10.1875C12.875 8.6875 11.6875 7.5 10.1875 7.5ZM10.1875 8.4375C11.125 8.4375 11.9375 9.1875 11.9375 10.1875C11.9375 11.1875 11.1875 11.9375 10.1875 11.9375C9.25 11.9375 8.4375 11.1875 8.4375 10.1875C8.4375 9.1875 9.25 8.4375 10.1875 8.4375Z"
                    }))
                };
            t.default = u
        },
        aQdf: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pVnL")),
                l = a(n("q1tI")),
                i = a(n("w/pp")),
                o = a(n("6jlT")),
                u = function(e) {
                    var t = (0, o.default)();
                    return l.default.createElement(i.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("title", null, "language-globe"), l.default.createElement("path", {
                        d: "M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.011-5.518-4.482-9.989-9.999-10h-0.001zM17.14 6.18h-3c-0.264-1.393-0.63-2.62-1.107-3.791l0.047 0.131c1.755 0.733 3.161 2.010 4.039 3.618l0.021 0.042zM18.1 10c-0.002 0.676-0.090 1.33-0.252 1.954l0.012-0.054h-3.44c0.059-0.57 0.092-1.231 0.092-1.9s-0.034-1.33-0.099-1.982l0.007 0.082h3.44c0.15 0.57 0.238 1.224 0.24 1.899v0.001zM1.9 10c0.002-0.676 0.090-1.33 0.252-1.954l-0.012 0.054h3.46c-0.059 0.57-0.092 1.231-0.092 1.9s0.034 1.33 0.099 1.982l-0.007-0.082h-3.46c-0.15-0.57-0.238-1.224-0.24-1.899v-0.001zM7.48 8.1h5.040c0.063 0.57 0.099 1.231 0.099 1.9s-0.036 1.33-0.107 1.981l0.007-0.081h-5.040c-0.063-0.57-0.099-1.231-0.099-1.9s0.036-1.33 0.107-1.981l-0.007 0.081zM10.76 1.9c0.603 1.228 1.106 2.657 1.436 4.152l0.024 0.128h-4.44c0.354-1.623 0.857-3.052 1.51-4.395l-0.050 0.115c0.24 0 0.5 0 0.76 0s0.48 0 0.76 0zM6.96 2.48c-0.445 1.051-0.825 2.291-1.079 3.576l-0.021 0.124h-3c0.899-1.65 2.305-2.927 4.007-3.64l0.053-0.020zM2.86 13.8h3c0.262 1.4 0.629 2.634 1.107 3.811l-0.047-0.131c-1.757-0.738-3.165-2.022-4.039-3.637l-0.021-0.043zM9.24 18.1c-0.605-1.234-1.108-2.67-1.437-4.172l-0.023-0.128h4.44c-0.352 1.63-0.855 3.066-1.51 4.415l0.050-0.115c-0.24 0-0.5 0-0.76 0s-0.48 0-0.76 0zM13.040 17.52c0.431-1.046 0.798-2.28 1.041-3.558l0.019-0.122h3.040c-0.902 1.642-2.308 2.912-4.006 3.62l-0.054 0.020z"
                    }))
                };
            t.default = u
        },
        H4ep: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pVnL")),
                l = a(n("q1tI")),
                i = a(n("w/pp")),
                o = a(n("6jlT")),
                u = function(e) {
                    var t = (0, o.default)();
                    return l.default.createElement(i.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.0625 8.125V8.5L9.6875 8.4375C8.3125 8.25 7.125 7.6875 6.125 6.6875L5.625 6.1875L5.5 6.5625C5.25 7.375 5.375 8.25 5.9375 8.8125C6.25 9.125 6.1875 9.1875 5.6875 9C5.5 8.9375 5.375 8.875 5.3125 8.9375C5.25 9 5.4375 9.6875 5.5625 9.9375C5.75 10.3125 6.1875 10.6875 6.5625 10.875L6.9375 11.0625H6.5C6.0625 11.0625 6.0625 11.0625 6.125 11.25C6.3125 11.75 6.875 12.25 7.5625 12.5L8 12.6875L7.625 12.9375C7 13.3125 6.3125 13.5 5.625 13.5C5.3125 13.5 5 13.5625 5 13.5625C5 13.625 5.9375 14.0625 6.4375 14.25C8.0625 14.75 9.9375 14.5 11.375 13.6875C12.375 13.0625 13.375 11.875 13.875 10.75C14.125 10.125 14.375 9 14.375 8.5C14.375 8.1875 14.4375 8.125 14.8125 7.6875C15.0625 7.4375 15.3125 7.1875 15.3125 7.0625C15.375 6.9375 15.375 6.9375 15 7.0625C14.375 7.3125 14.25 7.25 14.625 6.875C14.875 6.625 15.125 6.1875 15.125 6.0625C15.125 6.0625 15 6.0625 14.875 6.125C14.75 6.1875 14.4375 6.3125 14.1875 6.375L13.8125 6.5L13.5 6.25C13.3125 6.125 13 5.9375 12.875 5.9375C12.5 5.8125 11.9375 5.8125 11.5625 6C10.5625 6.25 10 7.1875 10.0625 8.125Z"
                    }))
                };
            t.default = u
        },
        RhL5: (e, t, n) => {
            "use strict";
            var a = n("TqRt"),
                r = n("cDf5");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("J4zp")),
                i = b(n("q1tI")),
                o = b(n("vOnD")),
                u = a(n("17x9")),
                d = a(n("5An4")),
                f = a(n("HMsx")),
                c = a(n("ukK4")),
                s = a(n("PQmA")),
                m = a(n("aQdf")),
                p = a(n("NANp")),
                g = a(n("cjht")),
                v = a(n("ifKl"));

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }

            function b(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = h(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            var C = function e(t) {
                    var n = t.lang,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        o = void 0 === r ? "," : r,
                        u = t.onSelect,
                        d = void 0 === u ? v.default : u,
                        f = t.languages,
                        c = void 0 === f ? [] : f,
                        p = (0, i.useState)(a),
                        h = (0, l.default)(p, 2),
                        b = h[0],
                        C = h[1],
                        y = (0, i.useState)(o),
                        x = (0, l.default)(y, 2),
                        I = x[0],
                        k = x[1],
                        E = (0, i.useState)(!1),
                        j = (0, l.default)(E, 2),
                        L = j[0],
                        M = j[1],
                        O = function(e, t) {
                            C(e), k(t), d(t)
                        };
                    return i.default.createElement(g.default, {
                        handleClickOutside: function() {
                            return M(!1)
                        }
                    }, i.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return M(!L)
                        },
                        tabIndex: "0",
                        "aria-labelledby": "language-dropdown-label"
                    }, i.default.createElement(e.ariaLabel, {
                        id: "language-dropdown-label"
                    }, "Select Language"), i.default.createElement(e.Menu, {
                        visible: L,
                        tabIndex: "-1",
                        "aria-activedescendant": "lang-active"
                    }, i.default.createElement(e.Arrow, {
                        visible: L
                    }), i.default.createElement(e.LanguageContainer, null, L && c.map((function(e) {
                        return i.default.createElement(w, {
                            name: e.name,
                            value: e.value,
                            key: e.value,
                            onSelect: O,
                            selected: e.value == I
                        })
                    })))), i.default.createElement(e.Head, null, i.default.createElement(m.default, {
                        size: 18
                    }), i.default.createElement(e.Label, null, b), i.default.createElement(s.default, {
                        size: 15
                    }))))
                },
                w = function e(t) {
                    var n = t.name,
                        a = t.value,
                        r = t.onSelect,
                        l = t.selected,
                        o = void 0 !== l && l;
                    return i.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return r(n, a)
                        },
                        isSelected: o,
                        id: o ? "lang-active" : "lang-" + a
                    }, n)
                };
            w.propTypes = {
                name: u.default.string,
                value: u.default.string,
                onSelect: u.default.func,
                selected: u.default.bool
            }, w.Wrapper = o.default.div.withConfig({
                componentId: "sc-zqptxt-0"
            })(["padding:0.6rem 0.5rem;min-width:10rem;:hover{background:", ";}cursor:pointer;", ""], f.default.z100, (function(e) {
                return e.isSelected && (0, o.css)(["background:", ";"], c.default.z100)
            })), C.ariaLabel = o.default.label.withConfig({
                componentId: "sc-zqptxt-1"
            })(["display:none;"]), C.propTypes = {
                lang: u.default.string,
                value: u.default.string,
                onSelect: u.default.func,
                languages: u.default.array
            }, C.LanguageContainer = o.default.section.withConfig({
                componentId: "sc-zqptxt-2"
            })(["display:flex;flex-direction:column;"]), C.Arrow = o.default.span.withConfig({
                componentId: "sc-zqptxt-3"
            })(["display:", ";position:absolute;bottom:-1rem;left:6rem;width:2.1rem;height:2.3rem;transform:rotate(45deg);border-radius:2.2rem 0 0.4rem 0;background:#fff;"], (function(e) {
                return e.visible ? "block" : "none"
            })), C.Menu = o.default.div.withConfig({
                componentId: "sc-zqptxt-4"
            })(["left:-2.3rem;position:absolute;opacity:", ";bottom:4rem;width:", ";height:", ";background-color:#fff;box-shadow:0.1rem 4rem 4rem rgba(0,0,0,0.15);border-radius:", ";padding:", ";cursor:default;transform-origin:0 100%;transition-property:transform,opacity,padding;will-change:transform,opacity,padding;transition-duration:", ";z-index:10;"], (function(e) {
                return e.visible ? 1 : 0
            }), (function(e) {
                return e.visible ? "max-content" : 0
            }), (function(e) {
                return e.visible ? "auto" : 0
            }), p.default.radius, (function(e) {
                return e.visible ? "1rem 1.4rem 1.4rem 1.4rem" : 0
            }), p.default.animationDuration), C.Head = o.default.div.withConfig({
                componentId: "sc-zqptxt-5"
            })(["display:flex;align-items:center;"]), C.Label = o.default.span.withConfig({
                componentId: "sc-zqptxt-6"
            })(["font-size:1.8rem;line-height:2rem;color:", ";margin:0 0.5rem 0 0.8rem;margin-top:0.2rem;font-weight:400;@media (max-width:480px){font-size:1.6rem;}"], d.default), C.Wrapper = o.default.div.withConfig({
                componentId: "sc-zqptxt-7"
            })(["position:relative;cursor:pointer;min-width:10rem;width:max-content;padding:0.7rem;border:1px solid ", ";border-radius:0.6rem;"], f.default.z400);
            var y = C;
            t.default = y
        },
        z5gk: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("RhL5")).default;
            t.default = r
        },
        Xozv: (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pVnL")),
                l = a(n("q1tI")),
                i = a(n("Qj/m")),
                o = function(e) {
                    return l.default.createElement(i.default, (0, r.default)({
                        type: "appstore"
                    }, e))
                };
            t.default = o
        },
        "5jyK": (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pVnL")),
                l = a(n("q1tI")),
                i = a(n("Qj/m")),
                o = function(e) {
                    return l.default.createElement(i.default, (0, r.default)({
                        type: "playstore"
                    }, e))
                };
            t.default = o
        },
        "Qj/m": (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("q1tI")),
                l = a(n("17x9")),
                i = a(n("vOnD")),
                o = a(n("lFeK")),
                u = n("fHDd"),
                d = {
                    playstore: {
                        url_logo_1x: "data/webuikit/61f7c9690d8ba4525ba863d0914ef2aa1556001313.png",
                        url_logo_2x: "data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png",
                        url_logo_3x: "data/webuikit/171050f49cdf259cff90fa3b21a87ccd1556001348.png",
                        url_logo_4x: "data/webuikit/a336792fc43e33ed4df43cfd3ff542431556001376.png"
                    },
                    appstore: {
                        url_logo_1x: "data/webuikit/69c8ac2b881b7ae167c36b480580274e1556003577.png",
                        url_logo_2x: "data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png",
                        url_logo_3x: "data/webuikit/bd19aa0be8dd3a92e58861cb82b9bccb1556003662.png",
                        url_logo_4x: "data/webuikit/9b91a3427bae3d2bf001e3a97f52c7111556003706.png"
                    }
                },
                f = function e(t) {
                    var n = t.type,
                        a = void 0 === n ? "appstore" : n,
                        l = t.width,
                        i = void 0 === l ? 137 : l,
                        u = t.link,
                        d = void 0 === u ? "" : u,
                        f = parseInt(i * (40 / 137)),
                        s = c(a, i);
                    return r.default.createElement(e.A, {
                        href: d,
                        target: "_blank",
                        "aria-label": "app store link"
                    }, r.default.createElement(o.default, {
                        width: "".concat(i / 10, "rem"),
                        height: "".concat(f / 10, "rem"),
                        src: s
                    }))
                },
                c = function(e, t) {
                    return t <= 314 ? (0, u.getCDN)(d[e].url_logo_2x) : t <= 451 ? (0, u.getCDN)(d[e].url_logo_3x) : (0, u.getCDN)(d[e].url_logo_4x)
                };
            f.A = i.default.a.withConfig({
                componentId: "sc-16nfz79-0"
            })(["text-decoration:none;"]), f.propTypes = {
                type: l.default.oneOf(["appstore", "playstore"]),
                width: l.default.number,
                link: l.default.string
            };
            var s = f;
            t.default = s
        },
        "9quZ": (e, t, n) => {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Playstore", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "Appstore", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            });
            var r = a(n("5jyK")),
                l = a(n("Xozv"))
        }
    }
]);