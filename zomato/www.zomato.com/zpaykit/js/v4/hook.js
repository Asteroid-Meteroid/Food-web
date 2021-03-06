! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/zpaykit/js/", n(n.s = 54)
}({
    1: function(t, e) {
        t.exports = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
    },
    54: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(9),
            o = n.n(i),
            r = n(1),
            c = n.n(r);

        function a(t) {
            return "function" == typeof t
        }
        window.zpayapi = new function t() {
            var e = this;
            o()(this, t), c()(this, "isTopicPresent", (function(t) {
                return e.topics.hasOwnProperty.call(e.topics, t)
            })), c()(this, "widgetOnLoad", (function(t) {
                e.subscribe("widget_on_load", t)
            })), c()(this, "subscribe", (function(t, n) {
                e.isTopicPresent() || (e.topics[t] = []);
                var i = e.topics[t].push(n) - 1;
                return {
                    remove: function() {
                        delete e.topics[t][i]
                    }
                }
            })), c()(this, "publish", (function(t, e) {
                if (null !== document.getElementById("payment_widget")) {
                    var n = document.getElementById("payment_widget").contentWindow,
                        i = {};
                    i.topic = t, i.payload = e, n.postMessage(i, "*")
                }
            })), c()(this, "receiveTopic", (function(t) {
                var n = t.data.topic,
                    i = t.data.payload;
                switch (n) {
                    case "widget_status":
                        var o = i.status;
                        o && (e.isWidgetLoaded = o, e.isTopicPresent("widget_on_load") && e.topics.widget_on_load.forEach((function(t) {
                            a(t) && t()
                        })));
                        break;
                    default:
                        e.isTopicPresent(n) && e.topics[n].forEach((function(t) {
                            a(t) && t(void 0 !== i ? i : {})
                        }))
                }
            })), c()(this, "addTopicListener", (function() {
                window.addEventListener("message", e.receiveTopic, !1)
            })), c()(this, "isWidgetInitiated", (function() {
                return e.isWidgetLoaded
            })), c()(this, "changeBillingDetails", (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.publish("change_billing_details", t)
            })), c()(this, "payButtonClicked", (function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.publish("pay_button_clicked", t)
            })), this.topics = [], this.isWidgetLoaded = !1
        }, window.zpayapi.addTopicListener()
    },
    9: function(t, e) {
        t.exports = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }
});