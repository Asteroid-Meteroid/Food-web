(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2215], {
        Did2: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => H
            });
            var o, a, i, r, l, s, d, c, u, m = t("pU3V"),
                f = t("q1tI"),
                p = t("SNoJ"),
                g = t("7EGn"),
                h = t("LSsp"),
                x = t("i0d3"),
                E = t("17x9"),
                _ = t.n(E),
                T = t("OM32"),
                b = t("WHL/"),
                w = t("h4VS"),
                k = t("5An4"),
                B = t("wRyO"),
                O = t("vOnD"),
                y = t("kdDk"),
                C = O.default.div(o || (o = (0, w.Z)(["\n  position: fixed;\n  z-index: 10;\n  padding: 0.5rem 1rem;\n  width: 100%;\n  color: ", ";\n  background-color: ", ";\n  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);\n  @media (min-width: 481px) {\n    bottom: 0;\n  }\n  @media (max-width: 480px) {\n    padding: 1rem;\n    ", "\n  }\n"])), h.default, k.default, (function(e) {
                    return e.showBannerOnTop ? (0, O.css)(a || (a = (0, w.Z)(["\n            top: 5.6rem;\n            z-index: 4;\n            position: sticky;\n            margin-bottom: -5.6rem;\n          "]))) : (0, O.css)(i || (i = (0, w.Z)(["\n            bottom: ", ";\n          "])), e.hasExtraBottomMargin ? "6rem" : 0)
                })),
                M = O.default.div(r || (r = (0, w.Z)(["\n  display: flex;\n  align-items: center;\n  @media (max-width: 480px) {\n    justify-content: flex-end;\n    width: 30%;\n  }\n"]))),
                A = O.default.div(l || (l = (0, w.Z)(["\n  flex-shrink: 0;\n  margin-left: 1rem;\n"]))),
                z = O.default.div(s || (s = (0, w.Z)(["\n  flex-shrink: 0;\n"]))),
                v = (0, O.default)(y.default)(d || (d = (0, w.Z)(["\n  min-height: 3rem;\n  & > span {\n    min-height: 3rem;\n    border-radius: 0.4rem;\n  }\n"]))),
                Z = O.default.div(c || (c = (0, w.Z)(["\n  flex-grow: 1;\n  font-size: 1.5rem;\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n  @media (max-width: 480px) {\n    font-size: 1.2rem;\n    width: 70%;\n  }\n"])), B.default.z500),
                N = O.default.div(u || (u = (0, w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 480px) {\n    max-width: none;\n    margin: auto;\n  }\n"]))),
                S = t("VAjR"),
                D = t("w/Wi"),
                L = t("P62M"),
                P = t("Ar8T"),
                I = "web_accept_cookie_action",
                K = function(e) {
                    var n = e.isMobile,
                        t = e.currentPageName,
                        o = e.localizedText,
                        a = e.localizedTextMobile,
                        i = e.hasExtraBottomMargin,
                        r = e.showBannerOnTop,
                        l = e.hasCookie,
                        s = (0, f.useState)(!l),
                        d = (0, m.Z)(s, 2),
                        c = d[0],
                        u = d[1],
                        p = c && !(0, b.ZP)(t),
                        g = function() {
                            u(!1)
                        };
                    return p ? f.createElement(C, {
                        hasExtraBottomMargin: i,
                        showBannerOnTop: r
                    }, f.createElement(N, null, f.createElement(Z, {
                        dangerouslySetInnerHTML: n ? {
                            __html: a
                        } : {
                            __html: o
                        }
                    }), f.createElement(M, null, f.createElement(z, null, f.createElement(v, {
                        size: n ? "compressed" : "small",
                        onClick: function() {
                            (0, P.q)(I), g(), (0, T.d8)("zacpol", 1, 259200)
                        }
                    }, "Accept")), !n && f.createElement(A, null, f.createElement(x.default, {
                        color: h.default,
                        showPointer: !0,
                        onClick: g
                    }))))) : null
                };
            K.propTypes = {
                currentPageName: _().string,
                isMobile: _().number,
                localizedText: _().string,
                localizedTextMobile: _().string,
                hasExtraBottomMargin: _().bool,
                showBannerOnTop: _().bool,
                hasCookie: _().bool
            }, K.defaultProps = {
                currentPageName: "",
                isMobile: 0,
                localizedText: "",
                localizedTextMobile: "",
                hasExtraBottomMargin: !1,
                showBannerOnTop: !1,
                hasCookie: !1
            };
            const H = (0, p.$j)((function(e) {
                var n = (0, g.default)(e, "pages.current.name", ""),
                    t = (0, g.default)(e, "pages.current.userId", 0),
                    o = n === S.Kn ? (0, g.default)(e, "pages.user.".concat(t, ".sections.SECTION_SEARCH_TABS"), []) : (0, g.default)((0, D.V)(e), "SECTION_SEARCH_TABS", []),
                    a = (0, L.Of)(o) && o.length >= 2;
                return {
                    currentPageName: n,
                    localizedText: (0, g.default)(e, "langKeys.COOKIE_BANNER_TEXT", "By using this site you agree to Zomato&apos;s use of cookies to give\n      you a personalised experience. Please read the\n      <a href='/cookiepolicy' target='_blank'>\n        cookie policy\n      </a>\n      for more information or to delete/block them."),
                    localizedTextMobile: (0, g.default)(e, "langKeys.COOKIE_BANNER_TEXT_MOBILE", "By using Zomato&apos;s website, you agree to our\n      <a href='/cookiepolicy' target='_blank'>\n        Cookie Policy\n      </a>\n      "),
                    hasExtraBottomMargin: n === S.mo && a,
                    showBannerOnTop: n === S.lX || n === S.c_,
                    hasCookie: !!(0, g.default)(e, "pageConfig.hasZacpolCookie", !1)
                }
            }))(K)
        },
        gndD: (e, n, t) => {
            "use strict";
            t.d(n, {
                Q: () => a
            });
            var o = t("7EGn"),
                a = function(e) {
                    return (0, o.default)(e, "pages.current.pageUrl", "")
                }
        },
        "w/Wi": (e, n, t) => {
            "use strict";
            t.d(n, {
                V: () => i
            });
            var o = t("7EGn"),
                a = t("gndD"),
                i = function(e) {
                    var n = (0, a.Q)(e),
                        t = (0, o.default)(e, "pages.search", {})[n] || {};
                    return (0, o.default)(t, "sections", {})
                }
        }
    }
]);