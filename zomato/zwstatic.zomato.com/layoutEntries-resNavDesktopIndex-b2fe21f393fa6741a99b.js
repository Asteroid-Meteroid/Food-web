(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1907], {
        "6rry": (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, {
                default: () => O
            });
            var n, r = t("h4VS"),
                s = t("q1tI"),
                u = t("SNoJ"),
                l = t("17x9"),
                d = t.n(l),
                o = t("vOnD"),
                c = t("7EGn"),
                i = t("ifKl"),
                g = t("HMsx"),
                f = t("T9qK"),
                S = t("P62M"),
                h = t("Mifg"),
                p = function(e, a, t) {
                    return [{
                        key: h.O6.SIGNIN,
                        src: "",
                        activePages: [],
                        title: t.LOGIN_TITLE || h.O6.SIGNIN,
                        fnOnClick: e
                    }, {
                        key: h.O6.SIGNUP,
                        src: "",
                        activePages: [],
                        title: t.SIGNUP_TITLE || h.O6.SIGNUP,
                        fnOnClick: a
                    }]
                },
                b = function(e, a) {
                    return [{
                        key: h.O6.ADDRESTAURANT,
                        src: "",
                        activePages: [],
                        title: e || h.O6.ADDRESTAURANT,
                        fnOnClick: a
                    }]
                },
                A = function(e) {
                    var a = e.handleSignin,
                        t = e.handleSignup,
                        n = e.locale,
                        r = e.currentPageSubType,
                        u = e.breadcrumbs,
                        l = e.transparentPages,
                        d = e.showZomatoLogo,
                        o = e.showAddRestaurant,
                        c = e.addRestaurantText,
                        i = e.handleAddRestaurantClick,
                        g = function(e, a) {
                            var t = "restaurant" === a ? 2 : 3,
                                n = e[e.length - t] || {},
                                r = n.url,
                                s = void 0 === r ? "" : r,
                                u = n.title;
                            return {
                                text: void 0 === u ? "" : u,
                                link: s
                            }
                        }(u, r);
                    return s.createElement(T, null, s.createElement(f.Z, {
                        transparentPages: l,
                        navbarLinks: p(a, t, n),
                        addRestaurantNavLink: b(c, i),
                        showAddRestaurant: o,
                        backToSearchPageDetails: g,
                        showZomatoLogo: d
                    }))
                },
                T = o.default.div(n || (n = (0, r.Z)(["\n  box-shadow: inset 0px -0.5px 0px ", ";\n"])), g.default.z200);
            A.propTypes = {
                handleSignin: d().func,
                handleSignup: d().func,
                locale: d().objectOf(d().string),
                breadcrumbs: d().arrayOf(d().object),
                currentPageSubType: d().string,
                transparentPages: d().arrayOf(d().string),
                showZomatoLogo: d().bool,
                showAddRestaurant: d().bool,
                addRestaurantText: d().string,
                handleAddRestaurantClick: d().func
            }, A.defaultProps = {
                handleSignin: i.default,
                handleSignup: i.default,
                locale: {},
                breadcrumbs: [],
                currentPageSubType: "",
                transparentPages: [],
                showZomatoLogo: !0,
                showAddRestaurant: !1,
                addRestaurantText: "",
                handleAddRestaurantClick: i.default
            };
            const O = (0, u.$j)((function(e) {
                var a = (0, c.default)(e, "pages.current.resId", 0);
                return {
                    breadcrumbs: (0, c.default)(e, "pages.restaurant.".concat(a, ".sections.SECTION_BREADCRUMBS"), []),
                    currentPageSubType: (0, c.default)(e, "pages.current.subType", ""),
                    locale: (0, c.default)(e, "langKeys", {})
                }
            }), null)((0, s.memo)(A, S.Uh))
        }
    }
]);