(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2830], {
        YFsC: (e, n, t) => {
            "use strict";
            t.d(n, {
                bF: () => o,
                JP: () => l,
                pM: () => u,
                oP: () => s,
                sc: () => d,
                EK: () => m,
                lI: () => p,
                XT: () => c,
                fW: () => f,
                jy: () => _,
                i6: () => E,
                RG: () => g,
                Cj: () => T,
                GE: () => h,
                Qj: () => A,
                Jz: () => P,
                pb: () => y,
                K1: () => Z,
                ar: () => C,
                A1: () => v,
                H7: () => O,
                Ok: () => S
            });
            var i, a, r = t("rePB"),
                o = "Get the Zomato App",
                l = "We will send you a link, open it on your phone to download the app",
                u = "Download app from",
                s = "/web/commons/8b714f6f2ae12bf9e5f75549a984fc431564655708.png",
                d = "get-zomato-app",
                m = "https://zomato.onelink.me/xqzv/CTA",
                p = "https://zomato.onelink.me/xqzv/CTA",
                c = "email",
                f = "mobile",
                _ = "",
                E = "Email",
                g = "Phone",
                T = [{
                    label: "Phone",
                    value: f
                }],
                h = [{
                    label: "Email",
                    value: c
                }, {
                    label: "Phone",
                    value: f
                }],
                A = {
                    email: "Enter your email Id",
                    mobile: "Enter your phone number",
                    default: "Please enter a valid value"
                },
                P = {
                    success: (i = {}, (0, r.Z)(i, f, "Message sent. Check your phone to find a link to download the app. Happy eating!"), (0, r.Z)(i, c, "Email sent. Check your email id to find a link to download the app. Happy eating!"), i),
                    failed: (a = {}, (0, r.Z)(a, f, "Something went wrong, please try after some time"), (0, r.Z)(a, c, "Something went wrong, please try after some time"), a)
                },
                y = "app-download-link",
                Z = "united-sms",
                C = "Share App Link",
                v = "Share",
                O = {
                    APP_LINK: "app link",
                    DOWNLOAD_LINK: "app download home page"
                },
                S = {
                    SHARE_CLICK: "share button click",
                    DOWNLOAD_LINK: "app download link"
                }
        },
        HVcu: (e, n, t) => {
            "use strict";
            t.d(n, {
                a: () => u,
                Z: () => d
            });
            var i = t("VTBJ"),
                a = t("7EGn"),
                r = t("ifKl"),
                o = t("f773"),
                l = t("YFsC"),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.XT,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Qj;
                    return {
                        inputValue: "",
                        internationalCode: "+91",
                        valid: !1,
                        errorMessage: n[e],
                        fieldTouched: !1,
                        inputType: e,
                        isSubmitting: !1,
                        isSubmitFailed: !1,
                        isSubmitSuccess: !1,
                        toastState: {
                            text: "",
                            type: "success",
                            show: !1
                        }
                    }
                },
                s = function(e) {
                    switch (e) {
                        case l.XT:
                            return o.if;
                        case l.fW:
                            return o.LV;
                        default:
                            return r.default
                    }
                };
            const d = function(e, n) {
                var t = n.type,
                    r = n.value,
                    o = n.inputType,
                    u = n.apiErrorMessage,
                    d = void 0 === u ? "" : u,
                    m = n.errorMessages;
                switch (t) {
                    case "CHANGE_VALUE":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            inputValue: r,
                            valid: s(e.inputType)(r)
                        });
                    case "CHANGE_TYPE":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            fieldTouched: !1,
                            inputValue: "",
                            inputType: o,
                            errorMessage: (0, a.default)(m, o, m.default),
                            valid: !1
                        });
                    case "BLUR":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            fieldTouched: !0
                        });
                    case "SUBMIT_INITIATE":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            isSubmitting: !0
                        });
                    case "SUBMIT_SUCCESS":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            isSubmitting: !1,
                            inputValue: "",
                            valid: !1,
                            fieldTouched: !1,
                            toastState: {
                                text: l.Jz.success[e.inputType],
                                type: "success",
                                show: !0
                            }
                        });
                    case "SUBMIT_FAILED":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            isSubmitting: !1,
                            inputValue: "",
                            valid: !1,
                            fieldTouched: !1,
                            toastState: {
                                text: d || l.Jz.failed[e.inputType],
                                type: "warning",
                                show: !0
                            }
                        });
                    case "CLOSE_TOAST":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            toastState: (0, i.Z)((0, i.Z)({}, e.toastState), {}, {
                                show: !1
                            })
                        });
                    case "FORM_SUBMIT_FAILED":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            fieldTouched: !0
                        });
                    case "CHANGE_INT_PHONE_CODE":
                        return (0, i.Z)((0, i.Z)({}, e), {}, {
                            internationalCode: r
                        });
                    default:
                        return e
                }
            }
        },
        "5Co9": (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => U
            });
            var i, a, r, o, l = t("wx14"),
                u = t("HaE+"),
                s = t("pU3V"),
                d = t("o0o1"),
                m = t.n(d),
                p = t("q1tI"),
                c = t("17x9"),
                f = t.n(c),
                _ = t("7EGn"),
                E = t("9quZ"),
                g = t("VcZT"),
                T = t("SEds"),
                h = t("P62M"),
                A = t("HVcu"),
                P = t("G2Un"),
                y = t("YFsC"),
                Z = t("Wc2h"),
                C = t("AdJq"),
                v = t("h4VS"),
                O = t("vOnD"),
                S = t("ifKl"),
                x = t("+cBz"),
                I = t("aowA"),
                L = t("kdDk"),
                b = O.default.div(i || (i = (0, v.Z)(["\n  display: flex;\n  align-items: start;\n  margin-bottom: 1rem;\n\n  @media (max-width: 480px) {\n    justify-content: center;\n  }\n"]))),
                w = (0, O.default)(L.default)(a || (a = (0, v.Z)(["\n  margin-left: 0.8rem;\n  display: block;\n  & > span {\n    height: 48px;\n  }\n\n  @media (max-width: 768px) {\n    display: none !important;\n  }\n\n  @media (max-width: 480px) {\n    display: none !important;\n  }\n"]))),
                R = (0, O.default)(L.default)(r || (r = (0, v.Z)(["\n  display: none;\n  margin-left: 0.8rem;\n  & > span {\n    height: 48px;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]))),
                D = (0, O.default)(x.default)(o || (o = (0, v.Z)(["\n  input {\n    min-width: 0;\n  }\n"]))),
                N = function(e) {
                    var n = e.type,
                        t = void 0 === n ? y.XT : n,
                        i = e.value,
                        a = void 0 === i ? "" : i,
                        r = e.onChange,
                        o = void 0 === r ? S.default : r,
                        u = e.errorMsg,
                        s = void 0 === u ? y.jy : u,
                        d = e.onBlur,
                        m = void 0 === d ? S.default : d,
                        c = e.onSubmit,
                        f = void 0 === c ? S.default : c,
                        E = e.isSubmitting,
                        g = void 0 !== E && E,
                        h = e.onCountryCodeChange,
                        A = void 0 === h ? S.default : h,
                        P = e.localizedButtonCaptions,
                        Z = e.localizedEmailLabel,
                        C = {
                            onClick: f,
                            loading: g,
                            disabled: s !== y.jy
                        };
                    return p.createElement(b, null, "email" === t ? p.createElement(I.default, {
                        fullWidth: !0,
                        innerWidth: "100%",
                        label: Z,
                        borderColor: T.teal.z500,
                        value: a,
                        onChange: o,
                        onBlur: m,
                        errorMsg: s,
                        disabled: g
                    }) : p.createElement("div", null, p.createElement(D, {
                        onBlur: m,
                        errorText: s,
                        value: a,
                        onChange: o,
                        disabled: g,
                        fnCountryChange: A
                    })), p.createElement(w, (0, l.Z)({}, C, {
                        btnColor: "red"
                    }), (0, _.default)(P, "shareAppLink", "")), p.createElement(R, (0, l.Z)({}, C, {
                        btnColor: "red",
                        size: "small"
                    }), (0, _.default)(P, "share", "")))
                };
            N.propTypes = {
                type: f().string.isRequired,
                value: f().string.isRequired,
                errorMsg: f().string.isRequired,
                isSubmitting: f().bool.isRequired,
                onChange: f().func.isRequired,
                onBlur: f().func.isRequired,
                onSubmit: f().func.isRequired,
                onCountryCodeChange: f().func.isRequired,
                localizedButtonCaptions: f().objectOf(f().string).isRequired,
                localizedEmailLabel: f().string.isRequired
            }, N.defaultProps = {};
            const G = N;
            var k = t("2VVk"),
                z = function(e) {
                    var n = e.title,
                        t = e.action,
                        i = e.imgUrl,
                        a = e.imgProps,
                        r = e.appStoreUrl,
                        o = e.playStoreUrl,
                        d = e.radioOptions,
                        c = e.Component,
                        f = e.offersData,
                        v = e.subtitle,
                        O = e.united_uuid,
                        S = e.signature,
                        x = e.selectedInputType,
                        I = e.isUnited,
                        L = e.className,
                        b = e.locale,
                        w = {
                            email: (0, _.default)(b, "GET_Z_APP_EMAIL_ERROR_TEXT", y.Qj[y.XT]),
                            mobile: (0, _.default)(b, "GET_Z_APP_PHONE_ERROR_TEXT", y.Qj[y.fW]),
                            default: y.Qj.default
                        },
                        R = (0, p.useReducer)(A.Z, (0, A.a)(x, w)),
                        D = (0, s.Z)(R, 2),
                        N = D[0],
                        z = D[1],
                        U = N.inputValue,
                        H = N.inputType,
                        M = N.valid,
                        B = N.errorMessage,
                        j = N.fieldTouched,
                        K = N.isSubmitting,
                        X = N.toastState,
                        V = N.internationalCode,
                        W = (0, _.default)(b, "GET_Z_APP_EMAIL_RADIO_LABEL", y.i6),
                        F = d || [{
                            label: W,
                            value: y.XT
                        }, {
                            label: (0, _.default)(b, "GET_Z_APP_PHONE_RADIO_LABEL", y.RG),
                            value: y.fW
                        }],
                        q = {
                            shareAppLink: (0, _.default)(b, "GET_Z_APP_SHARE_APP_LINK_CAPTION", y.ar),
                            share: (0, _.default)(b, "GET_Z_APP_SHARE_CAPTION", y.A1)
                        };
                    return p.createElement(k.W2, {
                        isUnited: I,
                        className: L
                    }, p.createElement(g.default, (0, l.Z)({
                        align: "top",
                        onClose: function() {
                            return z({
                                type: "CLOSE_TOAST"
                            })
                        }
                    }, X)), p.createElement(k.$0, null, p.createElement(k.mo, {
                        key: "get-app-link-form-image",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, p.createElement(k.iT, (0, l.Z)({
                        src: (0, h.Vl)(i),
                        height: "45rem",
                        alt: y.sc,
                        fit: "contain"
                    }, a))), p.createElement(k.ex, {
                        key: "get-app-link-form-content",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, p.createElement(k.OT, null, n || (0, _.default)(b, "GET_Z_APP_HEADING_TEXT", y.bF)), p.createElement(k.QD, null, v || (0, _.default)(b, "GET_Z_APP_SUB_TEXT", y.JP)), c && p.createElement(c, {
                        offersData: f
                    }), p.createElement(k.TM, null, p.createElement(k.E5, {
                        onChange: function(e) {
                            return z({
                                type: "CHANGE_TYPE",
                                inputType: e,
                                errorMessages: w
                            })
                        },
                        options: F,
                        name: "radio",
                        selected: H,
                        horizontal: !0,
                        selectedColor: T.red.z500
                    })), p.createElement(G, {
                        type: H,
                        value: U,
                        onChange: function(e) {
                            return z({
                                type: "CHANGE_VALUE",
                                value: e
                            })
                        },
                        onBlur: function() {
                            return z({
                                type: "BLUR"
                            })
                        },
                        errorMsg: j && !M ? B : y.jy,
                        onSubmit: function(e) {
                            if ((0, Z._k)({
                                    eventCategory: y.H7.APP_LINK,
                                    eventAction: Z.m1.CLICK,
                                    eventLabel: y.Ok.SHARE_CLICK
                                }), e.preventDefault(), M) {
                                z({
                                    type: "SUBMIT_INITIATE"
                                });
                                var n = H === y.fW ? "".concat(V).concat(U) : U;
                                (function(e) {
                                    var n = e.action,
                                        t = e.type,
                                        i = e.sendOn,
                                        a = e.unitedUUID,
                                        r = e.signature;
                                    return (0, P.ZP)(C.aK, {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        params: {
                                            action: n,
                                            type: t,
                                            send_on: i,
                                            united_uuid: a,
                                            signature: r
                                        }
                                    }).then((function(e) {
                                        return e.json()
                                    }))
                                })({
                                    action: t,
                                    type: H,
                                    sendOn: n,
                                    unitedUUID: O,
                                    signature: S
                                }).then((function() {
                                    z({
                                        type: "SUBMIT_SUCCESS"
                                    })
                                })).catch(function() {
                                    var e = (0, u.Z)(m().mark((function e(n) {
                                        var t;
                                        return m().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!n.response) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 3, n.response.json();
                                                case 3:
                                                    t = e.sent, z({
                                                        type: "SUBMIT_FAILED",
                                                        apiErrorMessage: t.message_text
                                                    }), e.next = 8;
                                                    break;
                                                case 7:
                                                    z({
                                                        type: "SUBMIT_FAILED"
                                                    });
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(n) {
                                        return e.apply(this, arguments)
                                    }
                                }())
                            } else z({
                                type: "FORM_SUBMIT_FAILED"
                            })
                        },
                        isSubmitting: K,
                        onCountryCodeChange: function(e) {
                            return z({
                                type: "CHANGE_INT_PHONE_CODE",
                                value: e
                            })
                        },
                        localizedEmailLabel: W,
                        localizedButtonCaptions: q
                    }), p.createElement(k.zH, null, (0, _.default)(b, "GET_Z_APP_DOWNLOAD_TEXT", y.pM)), p.createElement(k.Pu, {
                        onClick: function() {
                            return (0, Z._k)({
                                eventCategory: y.H7.DOWNLOAD_LINK,
                                eventAction: Z.m1.CLICK,
                                eventLabel: y.Ok.DOWNLOAD_LINK
                            })
                        }
                    }, p.createElement(E.Appstore, {
                        link: r
                    }), p.createElement(k.pY, null, p.createElement(E.Playstore, {
                        link: o
                    }))), I && p.createElement(k.Ib, null, p.createElement("p", null, "OR", p.createElement(k.Fg, {
                        href: "".concat(C.ho, "/order"),
                        color: T.red.z400
                    }, "Continue to Online Ordering"))))))
                };
            z.propTypes = {
                title: f().string,
                action: f().string,
                imgUrl: f().string,
                imgProps: f().objectOf(f().any),
                appStoreUrl: f().string,
                playStoreUrl: f().string,
                subtitle: f().string,
                Component: f().node,
                offersData: f().objectOf(f().array),
                united_uuid: f().string,
                signature: f().string,
                radioOptions: f().arrayOf(f().object),
                selectedInputType: f().string,
                isUnited: f().bool,
                className: f().string,
                locale: {
                    GET_Z_APP_HEADING_TEXT: f().string,
                    GET_Z_APP_SUB_TEXT: f().string,
                    GET_Z_APP_DOWNLOAD_TEXT: f().string,
                    GET_Z_APP_EMAIL_RADIO_LABEL: f().string,
                    GET_Z_APP_PHONE_RADIO_LABEL: f().string,
                    GET_Z_APP_SHARE_APP_LINK_CAPTION: f().string,
                    GET_Z_APP_SHARE_CAPTION: f().string,
                    GET_Z_APP_EMAIL_ERROR_TEXT: f().string,
                    GET_Z_APP_PHONE_ERROR_TEXT: f().string
                }
            }, z.defaultProps = {
                title: "",
                action: y.pb,
                imgUrl: y.oP,
                imgProps: {},
                appStoreUrl: y.EK,
                playStoreUrl: y.lI,
                subtitle: "",
                Component: null,
                offersData: [],
                united_uuid: "",
                signature: "",
                radioOptions: void 0,
                selectedInputType: y.XT,
                isUnited: !1,
                className: "",
                locale: {
                    GET_Z_APP_HEADING_TEXT: y.bF,
                    GET_Z_APP_SUB_TEXT: y.JP,
                    GET_Z_APP_DOWNLOAD_TEXT: y.pM,
                    GET_Z_APP_EMAIL_RADIO_LABEL: y.i6,
                    GET_Z_APP_PHONE_RADIO_LABEL: y.RG,
                    GET_Z_APP_SHARE_APP_LINK_CAPTION: y.ar,
                    GET_Z_APP_SHARE_CAPTION: y.A1,
                    GET_Z_APP_EMAIL_ERROR_TEXT: y.Qj[y.XT],
                    GET_Z_APP_PHONE_ERROR_TEXT: y.Qj[y.fW]
                }
            };
            const U = z
        },
        "2VVk": (e, n, t) => {
            "use strict";
            t.d(n, {
                $0: () => b,
                ex: () => w,
                iT: () => R,
                Pu: () => D,
                OT: () => N,
                QD: () => G,
                pY: () => k,
                TM: () => z,
                E5: () => U,
                Ib: () => H,
                zH: () => M,
                W2: () => B,
                mo: () => j,
                Fg: () => K
            });
            var i, a, r, o, l, u, s, d, m, p, c, f, _, E, g, T, h = t("h4VS"),
                A = t("vOnD"),
                P = t("lFeK"),
                y = t("/ahK"),
                Z = t("wcxm"),
                C = t("ALki"),
                v = t("8Bj0"),
                O = t("N/Eu"),
                S = t("kdDk"),
                x = t("YgTD"),
                I = t("2fHp"),
                L = t("SEds"),
                b = A.default.div(i || (i = (0, h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n"]))),
                w = A.default.div(a || (a = (0, h.Z)(["\n  position: relative;\n  top: -2.5rem;\n  width: 45rem;\n  margin-left: 2rem;\n  flex-shrink: 0;\n\n  @media (max-width: 768px) {\n    padding-left: 2.5rem;\n    margin-left: 0;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    text-align: center;\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]))),
                R = (0, A.default)(P.default)(r || (r = (0, h.Z)(["\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                D = A.default.div(o || (o = (0, h.Z)(["\n  display: flex;\n  @media (max-width: 580px) {\n    justify-content: center;\n  }\n"]))),
                N = (0, A.default)(y.default)(l || (l = (0, h.Z)(["\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n  font-size: 4.4rem;\n  line-height: 5.6rem;\n\n  @media (max-width: 768px) {\n    font-size: ", ";\n    margin-bottom: 1.5rem;\n    line-height: 1.2;\n  }\n\n  @media (max-width: 480px) {\n    font-size: ", ";\n    margin-bottom: 1.5rem;\n    line-height: 1.2;\n  }\n"])), x.fontSizes.z700, x.fontSizes.z700),
                G = (0, A.default)(Z.P)(u || (u = (0, h.Z)(["\n  margin-bottom: 2.5rem;\n  width: 100%;\n  font-size: 2.2;\n  line-height: 3.2rem;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    line-height: 1.2;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    font-size: 1.6rem;\n    line-height: 1.2;\n  }\n"]))),
                k = A.default.div(s || (s = (0, h.Z)(["\n  margin-left: 2rem;\n"]))),
                z = A.default.div(d || (d = (0, h.Z)(["\n  width: 50%;\n  height: 4rem;\n  @media (max-width: 580px) {\n    width: 100%;\n  }\n"]))),
                U = (0, A.default)(C.default)(m || (m = (0, h.Z)(["\n  @media (max-width: 480px) {\n    justify-content: flex-start !important;\n  }\n"]))),
                H = A.default.div(p || (p = (0, h.Z)(["\n  margin-top: 0.5rem;\n\n  p {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), L.grey.z500, x.fontSizes.z200),
                M = (0, A.default)(Z.P)(c || (c = (0, h.Z)(["\n  color: ", ";\n  font-size: ", ";\n  margin-bottom: 1.5rem;\n"])), L.grey.z500, x.fontSizes.z200),
                B = (0, A.default)(I.default)(f || (f = (0, h.Z)(["\n  margin-top: ", ";\n\n  @media (max-width: 768px) {\n    margin-top: 7.5rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 7.5rem;\n  }\n"])), (function(e) {
                    return e.isUnited ? "6rem" : "3rem"
                })),
                j = A.default.div(_ || (_ = (0, h.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 2rem;\n  width: 100%;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                K = ((0, A.default)(S.default)(E || (E = (0, h.Z)([""]))), (0, A.default)(v.default)(g || (g = (0, h.Z)(["\n  margin-left: 5px;\n\n  span {\n    font-size: 1.8rem;\n    font-weight: 500;\n    text-decoration: underline;\n  }\n"]))));
            (0, A.default)(O.default)(T || (T = (0, h.Z)(["\n  margin-left: 5px;\n"])))
        },
        f773: (e, n, t) => {
            "use strict";
            t.d(n, {
                LV: () => r,
                if: () => o,
                PR: () => u
            });
            var i = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
                a = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                r = function(e) {
                    return i.test(e)
                },
                o = function(e) {
                    return a.test(e)
                },
                l = ["gmail.com", "yahoo.com", "yahoo.co", "yahoo.co.in", "yahoo.co.uk", "outlook.com", "live.com", "msn.com", "rediffmail.com", "aol.com", "hotmail.com", "rocketmail.com"],
                u = function(e) {
                    return o(e) && function(e) {
                        var n = e.indexOf("@");
                        if (-1 === n) return !1;
                        var t = e.substring(n + 1).toLowerCase();
                        return !l.includes(t)
                    }(e)
                }
        }
    }
]);