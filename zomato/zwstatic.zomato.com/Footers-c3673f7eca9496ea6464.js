(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7775], {
        XwKE: (e, r, n) => {
            "use strict";
            n.r(r), n.d(r, {
                default: () => m
            });
            var t = n("7EGn"),
                i = n("q1tI"),
                u = n("17x9"),
                s = n.n(u),
                o = n("SNoJ"),
                c = n("MKeS"),
                l = n("VAjR"),
                a = (0, c.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "FeedingPhilippinesFooter"
                    },
                    isReady: function(e) {
                        var r = this.resolve(e);
                        return !0 === this.resolved[r] && !!n.m[r]
                    },
                    importAsync: function() {
                        return n.e(1403).then(n.bind(n, "N7Ro"))
                    },
                    requireAsync: function(e) {
                        var r = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return r.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(r) {
                        var t = this.resolve(r);
                        return n(t)
                    },
                    resolve: function e() {
                        return "N7Ro"
                    }
                }),
                v = (0, c.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "ZomatoFooter"
                    },
                    isReady: function(e) {
                        var r = this.resolve(e);
                        return !0 === this.resolved[r] && !!n.m[r]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(1694), n.e(6649)]).then(n.bind(n, "CiQE"))
                    },
                    requireAsync: function(e) {
                        var r = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return r.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(r) {
                        var t = this.resolve(r);
                        return n(t)
                    },
                    resolve: function e() {
                        return "CiQE"
                    }
                }),
                h = (0, c.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "PartnershipFooter"
                    },
                    isReady: function(e) {
                        var r = this.resolve(e);
                        return !0 === this.resolved[r] && !!n.m[r]
                    },
                    importAsync: function() {
                        return n.e(6554).then(n.bind(n, "SdFs"))
                    },
                    requireAsync: function(e) {
                        var r = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return r.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(r) {
                        var t = this.resolve(r);
                        return n(t)
                    },
                    resolve: function e() {
                        return "SdFs"
                    }
                });

            function d(e, r, n) {
                var t = [l.RO, l.M6, l.c_, l.bE, l.fP, l.yl, l.ih, l.ri, l.id, l.Y, l.R_, l.u8, l.po],
                    i = [l.l1, l.kl];
                return !!(t.includes(e) || e === l.lX && i.includes(r) && n)
            }
            var f = function(e) {
                var r = e.currentPageName,
                    n = e.currentPageSubtype,
                    t = e.isMobile,
                    u = [l.PC, l.z4, l.wr],
                    s = [l.cP, l.eO];
                return d(r, n, t) ? null : u.includes(r) ? i.createElement(a, null) : s.includes(r) ? i.createElement(h, null) : i.createElement(v, {
                    isMobile: t
                })
            };
            f.propTypes = {
                currentPageName: s().string,
                currentPageSubtype: s().string,
                isMobile: s().bool
            }, f.defaultProps = {
                currentPageName: "",
                currentPageSubtype: "",
                isMobile: !1
            };
            var p = function(e) {
                return {
                    currentPageName: (0, t.default)(e, "pages.current.name", ""),
                    currentPageSubtype: (0, t.default)(e, "pages.current.subType", ""),
                    isMobile: (0, t.default)(e, "pages.current.isMobile", "")
                }
            };
            const m = (0, o.$j)(p)(f)
        }
    }
]);