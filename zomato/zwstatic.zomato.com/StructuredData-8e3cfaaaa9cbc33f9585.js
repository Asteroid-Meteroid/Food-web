(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9401], {
        Zryz: (e, t, a) => {
            "use strict";
            a.d(t, {
                i: () => o,
                k: () => u
            });
            var r = a("7EGn"),
                n = a("VAjR"),
                i = a("P62M"),
                o = function(e, t) {
                    var a = (0, r.default)(e, "current.key", ""),
                        o = {
                            "@context": "https://schema.org",
                            "@type": "Restaurant",
                            name: "Restaurant",
                            url: "",
                            openingHours: "",
                            hasmap: "",
                            menu: "",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "",
                                addressLocality: "",
                                addressRegion: "",
                                postalCode: "",
                                addressCountry: ""
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: "",
                                longitude: ""
                            },
                            potentialAction: {
                                "@type": "OrderAction",
                                deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
                                target: {
                                    "@type": "EntryPoint",
                                    inLanguage: "en-US",
                                    url: "",
                                    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
                                }
                            },
                            telephone: "",
                            priceRange: "",
                            paymentAccepted: "",
                            image: "",
                            servesCuisine: ""
                        },
                        u = (0, r.default)(e, "current.resId", 0),
                        l = (0, r.default)(e, "restaurant.".concat(u, ".sections"), {}),
                        d = (0, r.default)(l, "SECTION_IMAGE_CAROUSEL.entities", []).find((function(e) {
                            return "IMAGES" === e.entity_type
                        })),
                        s = (0, r.default)(d, "entity_ids", {}),
                        c = (0, r.default)(t, "IMAGES.".concat(s[0], ".url"), {});
                    o.name = (0, r.default)(l, "SECTION_BASIC_INFO.name", ""), o.openingHours = (0, r.default)(l, "SECTION_BASIC_INFO.timing.timing_desc", ""), o.potentialAction.inLanguage = (0, r.default)(l, "SECTION_BASIC_INFO.inLanguage", ""), o.telephone = (0, r.default)(l, "SECTION_RES_CONTACT.phoneDetails.phoneStr", ""), o.address.streetAddress = (0, r.default)(l, "SECTION_RES_CONTACT.address", ""), o.geo.latitude = (0, r.default)(l, "SECTION_RES_CONTACT.latitude", ""), o.geo.longitude = (0, r.default)(l, "SECTION_RES_CONTACT.longitude", ""), o.address.addressCountry = (0, r.default)(l, "SECTION_RES_CONTACT.country_name", ""), o.address.addressRegion = (0, r.default)(l, "SECTION_RES_CONTACT.city_name", ""), o.address.postalCode = (0, r.default)(l, "SECTION_RES_CONTACT.zipcode", ""), o.address.addressLocality = (0, r.default)(l, "SECTION_RES_CONTACT.locality_verbose", ""), o.priceRange = (0, r.default)(l, "SECTION_RES_DETAILS.CFT_DETAILS.cfts[0].title", ""), o.servesCuisine = (0, r.default)(l, "SECTION_BASIC_INFO.cuisine_string", ""), o.paymentAccepted = (0, r.default)(l, "SECTION_RES_DETAILS.CFT_DETAILS.accepted_payments", ""), o.hasmap = (0, r.default)(l, "SECTION_RES_CONTACT.static_map_url", ""), o.potentialAction.target.url = "".concat((0, r.default)(e, "current.pageUrl", ""), "/book"), o.image = c, o.url = (0, r.default)(e, "current.pageUrl", ""), o.menu = "".concat((0, r.default)(e, "current.pageUrl", ""), "/menu");
                    var p = (0, r.default)(l, "SECTION_BASIC_INFO.rating.votes", ""),
                        g = (0, r.default)(l, "SECTION_BASIC_INFO.rating.aggregate_rating", "0"),
                        f = (0, r.default)(l, "SECTION_BASIC_INFO.rating.rating_text", ""),
                        m = (0, i.J0)(p),
                        _ = 0 !== (0, i.J0)(g) && "NEW" !== f && m > 0;
                    if (_ && (o.aggregateRating = {
                            "@type": "AggregateRating",
                            ratingValue: g,
                            ratingCount: m,
                            bestRating: 5,
                            worstRating: 0
                        }), _ && a === n.th) {
                        var E = (0, r.default)(l, "SECTION_REVIEWS.entities", []).find((function(e) {
                                return "REVIEWS" === e.entity_type
                            })),
                            S = (0, r.default)(E, "entity_ids", []);
                        o.reviews = S.map((function(e) {
                            var a = {},
                                n = (0, r.default)(t, "REVIEWS.".concat(e), {}),
                                i = (0, r.default)(n, "rating.entities.0.entity_ids.0", ""),
                                o = (0, r.default)(t, "RATING.".concat(i, ".rating"), "");
                            return a.author = (0, r.default)(n, "userName", ""), a.url = (0, r.default)(n, "reviewUrl", ""), a.description = (0, r.default)(n, "reviewText", ""), a.reviewRating = {
                                "@type": "Rating",
                                ratingValue: o,
                                bestRating: 5,
                                worstRating: 0
                            }, a
                        }))
                    }
                    return o
                },
                u = function(e) {
                    return {
                        "@context": "http://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: e.map((function(e, t) {
                            var a = {
                                "@type": "ListItem",
                                position: "",
                                item: {
                                    id: "",
                                    name: "",
                                    url: ""
                                }
                            };
                            return a.position = t, a.item.id = (0, r.default)(e, "url", ""), a.item.url = (0, r.default)(e, "url", ""), a.item.name = (0, r.default)(e, "title", ""), a
                        }))
                    }
                }
        },
        Et5G: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => C
            });
            var r, n = a("rePB"),
                i = a("q1tI"),
                o = a("7EGn"),
                u = a("ifKl"),
                l = a("17x9"),
                d = a.n(l),
                s = a("rid2"),
                c = a("SNoJ"),
                p = a("Zryz"),
                g = a("sd+B"),
                f = a("P62M"),
                m = a("VAjR"),
                _ = a("AdJq"),
                E = (r = {}, (0, n.Z)(r, m.lX, p.i), (0, n.Z)(r, m.Q9, (function(e) {
                    var t, a, r = (0, g.XL)({
                            pages: e
                        }),
                        n = (0, o.default)(r, "SECTION_PRODUCT_DESCRIPTION", {}),
                        i = n.name,
                        u = void 0 === i ? "" : i,
                        l = n.description,
                        d = void 0 === l ? "" : l,
                        s = n.skuId,
                        c = void 0 === s ? "" : s,
                        p = n.brandName,
                        m = void 0 === p ? "" : p,
                        _ = (0, o.default)(e, "current.pageUrl", ""),
                        E = (0, o.default)(r, "SECTION_MEDIA.items", []),
                        S = (0, o.default)(r, "SECTION_PURCHASE.inStock", !1),
                        C = {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: u,
                            url: _,
                            description: d,
                            image: "",
                            potentialAction: {
                                "@type": "Buy",
                                deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
                                target: {
                                    "@type": "EntryPoint",
                                    inLanguage: "en-US",
                                    url: "",
                                    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
                                }
                            }
                        };
                    return C.brand = {
                        "@type": "Brand",
                        name: m
                    }, C.offers = {
                        "@type": "Offer",
                        url: _,
                        priceCurrency: "INR",
                        price: (t = (0, o.default)(r, "SECTION_PURCHASE.price", ""), (0, f.J0)(t.slice(1).split(",").join(""))),
                        itemCondition: "http://schema.org/NewCondition",
                        availability: "http://schema.org/".concat(S ? "InStock" : "OutOfStock")
                    }, C.image = (a = E.find((function(e) {
                        return "image" === e.type
                    })), (0, o.default)(a, "url") ? a.url : ""), C.sku = c, C
                })), (0, n.Z)(r, m.KT, (function(e) {
                    return {
                        "@context": "https://schema.org",
                        "@type": "Website",
                        name: (0, o.default)(e, "current.title", ""),
                        url: (0, o.default)(e, "current.pageUrl", "")
                    }
                })), r),
                S = function(e) {
                    var t = e.pageName,
                        a = e.pageObject,
                        r = e.entities,
                        n = e.pageUrl,
                        l = (0, o.default)(E, t, u.default)(a, r);
                    return i.createElement(s.q, null, i.createElement("link", {
                        rel: "canonical",
                        href: "".concat(_.ho).concat(n)
                    }), i.createElement("script", {
                        type: "application/ld+json"
                    }, JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        name: "Zomato",
                        url: "https://www.zomato.com"
                    })), l && i.createElement("script", {
                        type: "application/ld+json"
                    }, JSON.stringify(l)))
                };
            S.propTypes = {
                pageObject: d().objectOf(d().object),
                entities: d().objectOf(d().object),
                pageName: d().string,
                pageUrl: d().string
            }, S.defaultProps = {
                pageName: "",
                pageUrl: "",
                pageObject: {},
                entities: {}
            };
            const C = (0, c.$j)((function(e) {
                return {
                    pageName: (0, o.default)(e, "pages.current.name", ""),
                    pageUrl: (0, o.default)(e, "pages.current.pageUrl", ""),
                    pageObject: (0, o.default)(e, "pages", {}),
                    entities: (0, o.default)(e, "entities", {})
                }
            }))(S)
        },
        "sd+B": (e, t, a) => {
            "use strict";
            a.d(t, {
                XL: () => i,
                WT: () => o,
                V: () => u
            });
            var r = a("7EGn"),
                n = a("VAjR"),
                i = function(e) {
                    var t = (0, r.default)(e, "pages.current.skuId", 0),
                        a = (0, r.default)(e, "pages.dotePdp", {});
                    return (0, r.default)(a, "".concat(t, ".sections"), {})
                },
                o = function(e) {
                    var t = (0, r.default)(e, "pages.current.subType", ""),
                        a = i(e);
                    return t === n.ZE ? "" : (0, r.default)(a, "SECTION_OTHERS.useAppPillData.deeplink", "")
                },
                u = function(e) {
                    var t = i(e);
                    return (0, r.default)(t, "SECTION_RELATED_SKUS", {})
                }
        }
    }
]);