!function(e) {
    e.fn.marquee = function(t) {
        return this.each(function() {
            var i, a, n, r, s, o = e.extend({}, e.fn.marquee.defaults, t), u = e(this), d = 3, p = "animation-play-state", l = !1, c = function(e, t, i) {
                for (var a = ["webkit", "moz", "MS", "o", ""], n = 0; n < a.length; n++)
                    a[n] || (t = t.toLowerCase()),
                    e.addEventListener(a[n] + t, i, !1)
            }, f = function(e) {
                var t = [];
                for (var i in e)
                    e.hasOwnProperty(i) && t.push(i + ":" + e[i]);
                return t.push(),
                "{" + t.join(",") + "}"
            }, m = function() {
                u.timer = setTimeout(B, o.delayBeforeStart)
            }, g = {
                pause: function() {
                    l && o.allowCss3Support ? i.css(p, "paused") : e.fn.pause && i.pause(),
                    u.data("runningStatus", "paused"),
                    u.trigger("paused")
                },
                resume: function() {
                    l && o.allowCss3Support ? i.css(p, "running") : e.fn.resume && i.resume(),
                    u.data("runningStatus", "resumed"),
                    u.trigger("resumed")
                },
                toggle: function() {
                    g["resumed" == u.data("runningStatus") ? "pause" : "resume"]()
                },
                destroy: function() {
                    clearTimeout(u.timer),
                    u.find("*").andSelf().unbind(),
                    u.html(u.find(".js-marquee:first").html())
                }
            };
            if ("string" == typeof t)
                return void (e.isFunction(g[t]) && (i || (i = u.find(".js-marquee-wrapper")),
                u.data("css3AnimationIsSupported") === !0 && (l = !0),
                g[t]()));
            var h;
            e.each(o, function(e, t) {
                if (h = u.attr("data-" + e),
                "undefined" != typeof h) {
                    switch (h) {
                    case "true":
                        h = !0;
                        break;
                    case "false":
                        h = !1
                    }
                    o[e] = h
                }
            }),
            o.duration = o.speed || o.duration,
            r = "up" == o.direction || "down" == o.direction,
            o.gap = o.duplicated ? parseInt(o.gap) : 0,
            u.wrapInner('<div class="js-marquee"></div>');
            var v = u.find(".js-marquee").css({
                "margin-right": o.gap,
                "float": "left"
            });
            if (o.duplicated && v.clone(!0).appendTo(u),
            u.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),
            i = u.find(".js-marquee-wrapper"),
            r) {
                var y = u.height();
                i.removeAttr("style"),
                u.height(y),
                u.find(".js-marquee").css({
                    "float": "none",
                    "margin-bottom": o.gap,
                    "margin-right": 0
                }),
                o.duplicated && u.find(".js-marquee:last").css({
                    "margin-bottom": 0
                });
                var x = u.find(".js-marquee:first").height() + o.gap;
                o.startVisible && !o.duplicated ? (o._completeDuration = (parseInt(x, 10) + parseInt(y, 10)) / parseInt(y, 10) * o.duration,
                o.duration = parseInt(x, 10) / parseInt(y, 10) * o.duration) : o.duration = (parseInt(x, 10) + parseInt(y, 10)) / parseInt(y, 10) * o.duration
            } else
                s = u.find(".js-marquee:first").width() + o.gap,
                a = u.width(),
                o.startVisible && !o.duplicated ? (o._completeDuration = (parseInt(s, 10) + parseInt(a, 10)) / parseInt(a, 10) * o.duration,
                o.duration = parseInt(s, 10) / parseInt(a, 10) * o.duration) : o.duration = (parseInt(s, 10) + parseInt(a, 10)) / parseInt(a, 10) * o.duration;
            if (o.duplicated && (o.duration = o.duration / 2),
            o.allowCss3Support) {
                var I = document.body || document.createElement("div")
                  , b = "marqueeAnimation-" + Math.floor(1e7 * Math.random())
                  , S = "Webkit Moz O ms Khtml".split(" ")
                  , w = "animation"
                  , q = ""
                  , j = "";
                if (I.style.animation && (j = "@keyframes " + b + " ",
                l = !0),
                l === !1)
                    for (var C = 0; C < S.length; C++)
                        if (void 0 !== I.style[S[C] + "AnimationName"]) {
                            var V = "-" + S[C].toLowerCase() + "-";
                            w = V + w,
                            p = V + p,
                            j = "@" + V + "keyframes " + b + " ",
                            l = !0;
                            break
                        }
                l && (q = b + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing,
                u.data("css3AnimationIsSupported", !0))
            }
            var A = function() {
                i.css("margin-top", "up" == o.direction ? y + "px" : "-" + x + "px")
            }
              , k = function() {
                i.css("margin-left", "left" == o.direction ? a + "px" : "-" + s + "px")
            };
            o.duplicated ? (r ? o.startVisible ? i.css("margin-top", 0) : i.css("margin-top", "up" == o.direction ? y + "px" : "-" + (2 * x - o.gap) + "px") : o.startVisible ? i.css("margin-left", 0) : i.css("margin-left", "left" == o.direction ? a + "px" : "-" + (2 * s - o.gap) + "px"),
            o.startVisible || (d = 1)) : o.startVisible ? d = 2 : r ? A() : k();
            var B = function() {
                if (o.duplicated && (1 === d ? (o._originalDuration = o.duration,
                r ? o.duration = "up" == o.direction ? o.duration + y / (x / o.duration) : 2 * o.duration : o.duration = "left" == o.direction ? o.duration + a / (s / o.duration) : 2 * o.duration,
                q && (q = b + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing),
                d++) : 2 === d && (o.duration = o._originalDuration,
                q && (b += "0",
                j = e.trim(j) + "0 ",
                q = b + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing),
                d++)),
                r ? o.duplicated ? (d > 2 && i.css("margin-top", "up" == o.direction ? 0 : "-" + x + "px"),
                n = {
                    "margin-top": "up" == o.direction ? "-" + x + "px" : 0
                }) : o.startVisible ? 2 === d ? (q && (q = b + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing),
                n = {
                    "margin-top": "up" == o.direction ? "-" + x + "px" : y + "px"
                },
                d++) : 3 === d && (o.duration = o._completeDuration,
                q && (b += "0",
                j = e.trim(j) + "0 ",
                q = b + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing),
                A()) : (A(),
                n = {
                    "margin-top": "up" == o.direction ? "-" + i.height() + "px" : y + "px"
                }) : o.duplicated ? (d > 2 && i.css("margin-left", "left" == o.direction ? 0 : "-" + s + "px"),
                n = {
                    "margin-left": "left" == o.direction ? "-" + s + "px" : 0
                }) : o.startVisible ? 2 === d ? (q && (q = b + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing),
                n = {
                    "margin-left": "left" == o.direction ? "-" + s + "px" : a + "px"
                },
                d++) : 3 === d && (o.duration = o._completeDuration,
                q && (b += "0",
                j = e.trim(j) + "0 ",
                q = b + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing),
                k()) : (k(),
                n = {
                    "margin-left": "left" == o.direction ? "-" + s + "px" : a + "px"
                }),
                u.trigger("beforeStarting"),
                l) {
                    i.css(w, q);
                    var t = j + " { 100%  " + f(n) + "}"
                      , p = i.find("style");
                    0 !== p.length ? p.filter(":last").html(t) : i.append("<style>" + t + "</style>"),
                    c(i[0], "AnimationIteration", function() {
                        u.trigger("finished")
                    }),
                    c(i[0], "AnimationEnd", function() {
                        B(),
                        u.trigger("finished")
                    })
                } else
                    i.animate(n, o.duration, o.easing, function() {
                        u.trigger("finished"),
                        o.pauseOnCycle ? m() : B()
                    });
                u.data("runningStatus", "resumed")
            };
            u.bind("pause", g.pause),
            u.bind("resume", g.resume),
            o.pauseOnHover && u.bind("mouseenter mouseleave", g.toggle),
            l && o.allowCss3Support ? B() : m()
        })
    }
    ,
    e.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1e3,
        direction: "left",
        duplicated: !1,
        duration: 5e3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1,
        startVisible: !1
    }
}(jQuery);
