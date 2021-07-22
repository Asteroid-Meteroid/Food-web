(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2850], {
        syeM: (e, t, r) => {
            "use strict";
            r.d(t, {
                NT: () => n,
                E9: () => a,
                oP: () => s,
                xB: () => o,
                rI: () => u
            });
            var n = {
                    SEARCH: "search",
                    ORDERING: "ordering",
                    ADD_ADDRESS: "add-address",
                    CART: "cart",
                    INIT: "init-flow",
                    ERROR: "error-page"
                },
                a = "Home page saga failed",
                s = "/user/partnership-ordering",
                o = "No location in local storage",
                u = {
                    VALIDATE_USER_FAILED: "validate_user_api_fail",
                    LOGIN_V2_FAILED: "login_v2_fail",
                    NO_LOGIN_AND_GUESTID: "no_allow_login_and_guest_id"
                }
        },
        Mb1N: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => i,
                H: () => c
            });
            var n = r("rePB"),
                a = r("VTBJ"),
                s = r("fujP"),
                o = r("zqKt"),
                u = r("iFif"),
                i = {
                    VALIDATE_USER_ALLOWED_Z_LOGIN: "validate_user_allowed_zomato_login",
                    VALIDATE_USER_GUEST_LOGIN: "validate_user_guest_login",
                    VALIDATE_USER_LOGGED_OUT_FLOW: "validate_user_logged_out",
                    LOGIN_USER_RESPONSE: "login_user_success_response",
                    LOGIN_PROMPT_IMPRESSION: "login_prompt_impression",
                    LOGIN_PROMPT_BUTTON_CLICK: "login_prompt_button_click"
                },
                c = function(e) {
                    var t = e.ename,
                        r = e.appType,
                        c = e.validateUserRes,
                        p = void 0 === c ? null : c,
                        l = e.loginUserRes,
                        d = void 0 === l ? null : l,
                        f = o.Z.getInstance(),
                        _ = (0, a.Z)((0, a.Z)((0, a.Z)((0, n.Z)({}, u.RL.ENAME, t), !(0, s.default)(p) && (0, n.Z)({}, u.RL.VAR4, JSON.stringify({
                            validateUser: p
                        }))), !(0, s.default)(d) && (0, n.Z)({}, u.RL.VAR5, JSON.stringify({
                            loginUser: d
                        }))), {}, (0, n.Z)({}, u.RL.VAR6, JSON.stringify({
                            appType: r
                        })));
                    switch (t) {
                        case i.VALIDATE_USER_ALLOWED_Z_LOGIN:
                        case i.VALIDATE_USER_GUEST_LOGIN:
                        case i.VALIDATE_USER_LOGGED_OUT_FLOW:
                        case i.LOGIN_USER_RESPONSE:
                        case i.LOGIN_PROMPT_IMPRESSION:
                        case i.LOGIN_PROMPT_BUTTON_CLICK:
                            break;
                        default:
                            _ = null
                    }
                    f.sendToJumbo(u.dZ.JEVENT, _)
                }
        },
        Ek7T: (e, t, r) => {
            "use strict";
            r.d(t, {
                ip: () => Y,
                pH: () => F,
                Gb: () => j,
                P6: () => J,
                WV: () => q
            });
            var n = r("HaE+"),
                a = r("VTBJ"),
                s = r("o0o1"),
                o = r.n(s),
                u = r("IihT"),
                i = r("fujP"),
                c = r("7EGn"),
                p = r("yjvN"),
                l = r("A6yj"),
                d = r("KFCZ"),
                f = r("FS8r"),
                _ = r("G2Un"),
                g = r("AdJq"),
                T = r("XFDC"),
                m = r("Ujvf"),
                E = r("T5pW"),
                I = r("zS5N"),
                O = r("nQUI"),
                v = r("X2+A"),
                x = r("VAjR"),
                w = r("HKiI"),
                P = r("syeM"),
                L = r("Mb1N"),
                k = r("BFm+"),
                A = r("SEQN"),
                S = o().mark(Y),
                R = o().mark(z),
                b = o().mark(H),
                N = o().mark(M),
                h = o().mark(V),
                D = o().mark(F),
                U = o().mark(K),
                y = o().mark(B),
                Z = o().mark(j),
                G = o().mark(J),
                C = o().mark(Q);

            function Y(e) {
                var t, r, n, a, s, i, c, l, d, f, _, g, T, m, E, I, O, v, x, w, A, R, b, N, h, D;
                return o().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return t = e.successCallback, r = e.errorCallback, n = e.flowType, a = e.skipPrompt, s = void 0 !== a && a, i = e.initPrompt, c = void 0 !== i && i, l = e.modalPrompt, d = void 0 === l || l, f = e.calculateCartData, _ = void 0 === f ? {} : f, g = !1, o.next = 4, (0, u.Ys)((function(e) {
                                return (0, k.Z)(e)
                            }));
                        case 4:
                            return T = o.sent, o.prev = 5, o.delegateYield(K(s, n), "t0", 7);
                        case 7:
                            if (m = o.t0, I = (E = m || {}).allowLogin, O = void 0 !== I && I, v = E.guestUser, x = void 0 === v ? {} : v, w = E.promptSnippet, A = void 0 === w ? {} : w, b = (R = x || {}).thirdPartyUserId, N = R.guestId, m) {
                                o.next = 12;
                                break
                            }
                            throw Error(P.rI.VALIDATE_USER_FAILED);
                        case 12:
                            if (O || N) {
                                o.next = 14;
                                break
                            }
                            throw Error(P.rI.NO_LOGIN_AND_GUESTID);
                        case 14:
                            if (!A) {
                                o.next = 17;
                                break
                            }
                            return o.delegateYield(H({
                                loginOptionPromptSnippet: A,
                                successCallback: t,
                                skipPrompt: s,
                                modalPrompt: d,
                                flowType: n,
                                calculateCartData: _,
                                errorCallback: r,
                                initPrompt: c
                            }), "t1", 16);
                        case 16:
                            return o.abrupt("return", !1);
                        case 17:
                            if (!b) {
                                o.next = 25;
                                break
                            }
                            return (0, L.H)({
                                ename: L.L.VALIDATE_USER_GUEST_LOGIN,
                                validateUserRes: m,
                                appType: T
                            }), o.next = 21, (0, u.gz)((0, p.pY)(x));
                        case 21:
                            return o.next = 23, ae();
                        case 23:
                            o.next = 36;
                            break;
                        case 25:
                            if (!O) {
                                o.next = 35;
                                break
                            }
                            return (0, L.H)({
                                ename: L.L.VALIDATE_USER_ALLOWED_Z_LOGIN,
                                validateUserRes: m,
                                appType: T
                            }), o.delegateYield(F({
                                skipPrompt: s,
                                modalPrompt: d,
                                successCallback: t,
                                appType: T,
                                flowType: n
                            }), "t2", 28);
                        case 28:
                            if (h = o.t2) {
                                o.next = 31;
                                break
                            }
                            throw Error(P.rI.LOGIN_V2_FAILED);
                        case 31:
                            D = (h || {}).showPrompt, g = void 0 !== D && D && d, o.next = 36;
                            break;
                        case 35:
                            N && ((0, L.H)({
                                ename: L.L.VALIDATE_USER_LOGGED_OUT_FLOW,
                                validateUserRes: m,
                                appType: T
                            }), ne(N));
                        case 36:
                            return o.delegateYield(M(!g && t), "t3", 37);
                        case 37:
                            return o.abrupt("return", !0);
                        case 40:
                            return o.prev = 40, o.t4 = o.catch(5), o.delegateYield(V(r, c, n, o.t4), "t5", 43);
                        case 43:
                            return o.abrupt("return", !1);
                        case 44:
                        case "end":
                            return o.stop()
                    }
                }), S, null, [
                    [5, 40]
                ])
            }

            function z(e) {
                var t, r, n, a;
                return o().wrap((function(s) {
                    for (;;) switch (s.prev = s.next) {
                        case 0:
                            if (t = e.showLoginPrompt, r = e.promptSnippet, n = e.successCallback, !t) {
                                s.next = 7;
                                break
                            }
                            return a = {
                                isVisible: !0,
                                title: (0, c.default)(r, "title.text", ""),
                                subtitle: (0, c.default)(r, "subtitle.text", ""),
                                imageSrc: (0, c.default)(r, "image.url", ""),
                                onPrimaryClickHandler: n,
                                primaryButtonLabel: (0, c.default)(r, "actionButtons[0].text", ""),
                                showPrimaryButton: !0
                            }, s.next = 5, (0, u.gz)((0, v.C2)());
                        case 5:
                            return s.next = 7, (0, u.gz)((0, E.jg)(a));
                        case 7:
                        case "end":
                            return s.stop()
                    }
                }), R)
            }

            function H(e) {
                var t, r, n, s, i, c, p, l, d;
                return o().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return t = e.loginOptionPromptSnippet, r = e.successCallback, n = e.skipPrompt, s = e.modalPrompt, i = e.flowType, c = e.calculateCartData, p = e.errorCallback, l = e.initPrompt, d = (0, a.Z)((0, a.Z)({
                                isVisible: !0
                            }, t), {}, {
                                onClickHandler: r,
                                skipPrompt: n,
                                modalPrompt: s,
                                flowType: i,
                                calculateCartData: c,
                                errorCallback: p,
                                initPrompt: l
                            }), o.next = 4, (0, u.gz)((0, v.C2)());
                        case 4:
                            return o.next = 6, (0, u.gz)((0, A.Up)(d));
                        case 6:
                        case "end":
                            return o.stop()
                    }
                }), b)
            }

            function M(e) {
                return o().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, u.gz)((0, p.GB)());
                        case 2:
                            if ("function" != typeof e) {
                                t.next = 5;
                                break
                            }
                            return t.next = 5, e();
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), N)
            }

            function V(e, t, r, n) {
                var a;
                return o().wrap((function(s) {
                    for (;;) switch (s.prev = s.next) {
                        case 0:
                            if (!t) {
                                s.next = 3;
                                break
                            }
                            return s.next = 3, (0, u.gz)((0, w.D4)({
                                page_info: {
                                    name: x.fP,
                                    isMobile: 1
                                }
                            }));
                        case 3:
                            return s.next = 5, (0, u.Ys)((function(e) {
                                return (0, c.default)(e, "pages.current.name", "")
                            }));
                        case 5:
                            return a = s.sent, s.next = 8, (0, u.gz)((0, p.Ag)());
                        case 8:
                            if ((0, I.j5)(I.yt.USER_PERMISSION_FAILURE, {
                                    message: n.message,
                                    pageName: a,
                                    flowType: r,
                                    appType: I.IF.GPAY
                                }), "function" != typeof e) {
                                s.next = 12;
                                break
                            }
                            return s.next = 12, e();
                        case 12:
                        case "end":
                            return s.stop()
                    }
                }), h)
            }

            function F(e) {
                var t, r, n, a, s, i, c, l, d, f, _, g, T, m, E, I, v, x, w, P;
                return o().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return t = e.skipPrompt, r = e.userId, n = void 0 === r ? 0 : r, a = e.modalPrompt, s = e.successCallback, i = e.appType, c = e.flowType, l = null, o.delegateYield(B(t, c), "t0", 3);
                        case 3:
                            if (d = o.t0, f = d.identityToken, _ = d.phoneToken, t || f && _) {
                                o.next = 10;
                                break
                            }
                            return o.next = 9, (0, u.gz)((0, p.ph)());
                        case 9:
                            return o.abrupt("return", null);
                        case 10:
                            return o.prev = 10, o.next = 13, te(n);
                        case 13:
                            return g = o.sent, o.next = 16, g.json();
                        case 16:
                            l = o.sent, o.next = 22;
                            break;
                        case 19:
                            o.prev = 19, o.t1 = o.catch(10), l = null;
                        case 22:
                            if (m = (T = l || {}).zomatoUser, E = void 0 === m ? null : m, I = T.showPrompt, v = void 0 !== I && I, x = T.promptSnippet, w = void 0 === x ? null : x, l || E) {
                                o.next = 27;
                                break
                            }
                            return o.next = 26, (0, u.gz)((0, p.ph)());
                        case 26:
                            return o.abrupt("return", null);
                        case 27:
                            return o.next = 29, (0, u.gz)((0, O.lx)(E));
                        case 29:
                            return (0, L.H)({
                                ename: L.L.LOGIN_USER_RESPONSE,
                                loginUserRes: l,
                                appType: i
                            }), P = v && a, o.delegateYield(z({
                                showLoginPrompt: P,
                                promptSnippet: w,
                                successCallback: s
                            }), "t2", 32);
                        case 32:
                            return o.next = 34, ae();
                        case 34:
                            return o.next = 36, (0, u.gz)((0, p.WL)());
                        case 36:
                            return o.abrupt("return", l);
                        case 37:
                        case "end":
                            return o.stop()
                    }
                }), D, null, [
                    [10, 19]
                ])
            }

            function K(e, t) {
                var r, n, a, s, u, i;
                return o().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return r = null, o.delegateYield(B(e, t), "t0", 2);
                        case 2:
                            if (n = o.t0, a = n.identityToken, s = n.phoneToken, e || a && s) {
                                o.next = 7;
                                break
                            }
                            return o.abrupt("return", r);
                        case 7:
                            return o.prev = 7, o.next = 10, ee(a, s);
                        case 10:
                            return u = o.sent, o.next = 13, u.json();
                        case 13:
                            return r = o.sent, i = (0, c.default)(r, "guestUser.guestId", ""), o.delegateYield(Q(i, a, s), "t1", 16);
                        case 16:
                            o.next = 21;
                            break;
                        case 18:
                            o.prev = 18, o.t2 = o.catch(7), r = null;
                        case 21:
                            return o.abrupt("return", r);
                        case 22:
                        case "end":
                            return o.stop()
                    }
                }), U, null, [
                    [7, 18]
                ])
            }

            function B(e, t) {
                var r, n, a, s, i, p, l;
                return o().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            return r = {}, n = {}, o.next = 4, (0, u.Ys)((function(e) {
                                return (0, c.default)(e, "pages.current.name", "")
                            }));
                        case 4:
                            return a = o.sent, o.prev = 5, o.next = 8, (0, u.RE)(W, e);
                        case 8:
                            r = o.sent, o.next = 17;
                            break;
                        case 11:
                            if (o.prev = 11, o.t0 = o.catch(5), e) {
                                o.next = 16;
                                break
                            }
                            return o.next = 16, (0, u.gz)((0, m.u1)(o.t0.message));
                        case 16:
                            (0, I.j5)(I.yt.USER_IDENTITY_FAILURE, {
                                message: o.t0.message,
                                pageName: a,
                                flowType: t,
                                appType: I.IF.GPAY
                            });
                        case 17:
                            return o.prev = 17, o.next = 20, (0, u.RE)(X, e);
                        case 20:
                            n = o.sent, o.next = 29;
                            break;
                        case 23:
                            if (o.prev = 23, o.t1 = o.catch(17), e) {
                                o.next = 28;
                                break
                            }
                            return o.next = 28, (0, u.gz)((0, m.u1)(o.t1.message));
                        case 28:
                            (0, I.j5)(I.yt.USER_PERMISSION_FAILURE, {
                                message: o.t1.message,
                                pageName: a,
                                flowType: t,
                                appType: I.IF.GPAY
                            });
                        case 29:
                            return s = r.grantToken, i = void 0 === s ? "" : s, p = n.grantToken, l = void 0 === p ? "" : p, o.abrupt("return", {
                                identityToken: i,
                                phoneToken: l
                            });
                        case 32:
                        case "end":
                            return o.stop()
                    }
                }), y, null, [
                    [5, 11],
                    [17, 23]
                ])
            }

            function j() {
                var e, t;
                return o().wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2, f.K.getItem("guestId");
                        case 2:
                            if (e = r.sent) {
                                r.next = 5;
                                break
                            }
                            return r.abrupt("return");
                        case 5:
                            return r.next = 7, (0, u.gz)((0, p.B8)());
                        case 7:
                            return t = {
                                guest_id: e
                            }, r.next = 10, (0, u.gz)((0, p.pY)(t));
                        case 10:
                        case "end":
                            return r.stop()
                    }
                }), Z)
            }

            function J() {
                var e;
                return o().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, u.RE)($, {});
                        case 2:
                            if (!(e = t.sent)) {
                                t.next = 8;
                                break
                            }
                            return t.next = 6, (0, u.gz)((0, l.s3)(e, void 0, 1));
                        case 6:
                            t.next = 10;
                            break;
                        case 8:
                            return t.next = 10, (0, u.gz)((0, p.O1)());
                        case 10:
                        case "end":
                            return t.stop()
                    }
                }), G)
            }
            var W = function(e) {
                    var t = d.Z.getClient();
                    if (t) return t.requestIdentity(e);
                    throw Error("Oops! Something went wrong")
                },
                X = function(e) {
                    var t = d.Z.getClient();
                    if (t) return t.requestUserDetails(e);
                    throw Error("Oops! Something went wrong")
                },
                q = function() {
                    return new Promise((function(e, t) {
                        d.Z.getClient().requestCurrentLocation().then((function(t) {
                            var r = {
                                coords: {
                                    latitude: t.latitude,
                                    longitude: t.longitude
                                }
                            };
                            e(r)
                        })).catch((function(e) {
                            t(e)
                        }))
                    }))
                };

            function Q(e, t, r) {
                var n, s;
                return o().wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                        case 0:
                            if ({}, n = (0, a.Z)((0, a.Z)((0, a.Z)({}, e && {
                                    "X-ACCESS-UUID": e
                                }), t && {
                                    "X-ZOMATO-THIRDPARTY-IDENTITY-TOKEN": t
                                }), r && {
                                    "X-ZOMATO-THIRDPARTY-PHONE-TOKEN": r
                                }), (0, i.default)(n)) {
                                o.next = 7;
                                break
                            }
                            return s = {
                                headers: n
                            }, (0, _.Io)({
                                config: s
                            }), o.next = 7, (0, u.gz)((0, T.G)(s));
                        case 7:
                        case "end":
                            return o.stop()
                    }
                }), C)
            }
            var $ = function() {
                    var e = (0, n.Z)(o().mark((function e() {
                        var t, r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {}, e.prev = 1, e.next = 4, re();
                                case 4:
                                    return r = e.sent, e.next = 7, r.json();
                                case 7:
                                    t = e.sent, e.next = 17;
                                    break;
                                case 10:
                                    if (e.prev = 10, e.t0 = e.catch(1), !e.t0.response) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 15, e.t0.response.json();
                                case 15:
                                    e.sent;
                                case 17:
                                    return e.abrupt("return", t.url);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                ee = function(e, t) {
                    var r = {
                        method: "POST",
                        headers: (0, a.Z)((0, a.Z)({}, e && {
                            "X-ZOMATO-THIRDPARTY-IDENTITY-TOKEN": e
                        }), t && {
                            "X-ZOMATO-THIRDPARTY-PHONE-TOKEN": t
                        })
                    };
                    return (0, _.ZP)(g.ny, r)
                },
                te = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = {
                            userId: e
                        },
                        s = {
                            method: "POST",
                            headers: (0, a.Z)((0, a.Z)({}, t && {
                                "X-ZOMATO-THIRDPARTY-IDENTITY-TOKEN": t
                            }), r && {
                                "X-ZOMATO-THIRDPARTY-PHONE-TOKEN": r
                            }),
                            body: (0, _.je)(n)
                        };
                    return (0, _.ZP)(g.lW, s)
                },
                re = function() {
                    return (0, _.ZP)(g.Eo, {
                        method: "GET"
                    })
                },
                ne = function(e) {
                    f.K.setItem("guestId", e)
                },
                ae = function() {
                    f.K.removeItem("guestId")
                }
        },
        "3bOz": (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r("1OyB"),
                a = r("rePB"),
                s = function e() {
                    (0, n.Z)(this, e)
                };
            (0, a.Z)(s, "setItem", (function(e, t) {
                return new Promise((function(r) {
                    window.localStorage ? r(window.localStorage.setItem("@PartnershipMweb:" + e, JSON.stringify(t))) : r(null)
                }))
            })), (0, a.Z)(s, "getItem", (function(e) {
                return new Promise((function(t) {
                    window.localStorage ? t(JSON.parse(window.localStorage.getItem("@PartnershipMweb:" + e))) : t(null)
                }))
            })), (0, a.Z)(s, "removeItem", (function(e) {
                return new Promise((function(t) {
                    window.localStorage ? t(window.localStorage.removeItem("@PartnershipMweb:" + e)) : t(null)
                }))
            }))
        },
        FS8r: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => n.Z
            });
            var n = r("3bOz")
        }
    }
]);