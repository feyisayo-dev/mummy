System.register(
  ["./p-ea7bbed1.system.js", "./p-7329542c.system.js"],
  function (e) {
    "use strict";
    var t, o, i, n, r, s, a, c, l;
    return {
      setters: [
        function (e) {
          t = e.r;
          o = e.h;
          i = e.H;
          n = e.a;
        },
        function (e) {
          r = e.i;
          s = e.b;
          a = e.g;
          c = e.c;
          l = e.d;
        },
      ],
      execute: function () {
        var f = function (e) {
          var t = document.createElement("div");
          t.innerHTML = e;
          for (var o = t.childNodes.length - 1; o >= 0; o--) {
            if (t.childNodes[o].nodeName.toLowerCase() !== "svg") {
              t.removeChild(t.childNodes[o]);
            }
          }
          var i = t.firstElementChild;
          if (i && i.nodeName.toLowerCase() === "svg") {
            var n = i.getAttribute("class") || "";
            i.setAttribute("class", (n + " s-ion-icon").trim());
            if (d(i)) {
              return t.innerHTML;
            }
          }
          return "";
        };
        var d = function (e) {
          if (e.nodeType === 1) {
            if (e.nodeName.toLowerCase() === "script") {
              return false;
            }
            for (var t = 0; t < e.attributes.length; t++) {
              var o = e.attributes[t].name;
              if (r(o) && o.toLowerCase().indexOf("on") === 0) {
                return false;
              }
            }
            for (var t = 0; t < e.childNodes.length; t++) {
              if (!d(e.childNodes[t])) {
                return false;
              }
            }
          }
          return true;
        };
        var u = function (e) {
          return e.startsWith("data:image/svg+xml");
        };
        var h = function (e) {
          return e.indexOf(";utf8,") !== -1;
        };
        var m = new Map();
        var v = new Map();
        var b;
        var p = function (e, t) {
          var o = v.get(e);
          if (!o) {
            if (
              typeof fetch !== "undefined" &&
              typeof document !== "undefined"
            ) {
              if (u(e) && h(e)) {
                if (!b) {
                  b = new DOMParser();
                }
                var i = b.parseFromString(e, "text/html");
                var n = i.querySelector("svg");
                if (n) {
                  m.set(e, n.outerHTML);
                }
                return Promise.resolve();
              } else {
                o = fetch(e).then(function (o) {
                  if (o.ok) {
                    return o.text().then(function (o) {
                      if (o && t !== false) {
                        o = f(o);
                      }
                      m.set(e, o || "");
                    });
                  }
                  m.set(e, "");
                });
                v.set(e, o);
              }
            } else {
              m.set(e, "");
              return Promise.resolve();
            }
          }
          return o;
        };
        var g =
          ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important;font-size:1rem}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
        var w = e(
          "ion_icon",
          (function () {
            function e(e) {
              t(this, e);
              this.iconName = null;
              this.inheritedAttributes = {};
              this.isVisible = false;
              this.mode = y();
              this.lazy = false;
              this.sanitize = true;
            }
            e.prototype.componentWillLoad = function () {
              this.inheritedAttributes = s(this.el, ["aria-label"]);
            };
            e.prototype.connectedCallback = function () {
              var e = this;
              this.waitUntilVisible(this.el, "50px", function () {
                e.isVisible = true;
                e.loadIcon();
              });
            };
            e.prototype.disconnectedCallback = function () {
              if (this.io) {
                this.io.disconnect();
                this.io = undefined;
              }
            };
            e.prototype.waitUntilVisible = function (e, t, o) {
              var i = this;
              if (
                this.lazy &&
                typeof window !== "undefined" &&
                window.IntersectionObserver
              ) {
                var n = (this.io = new window.IntersectionObserver(
                  function (e) {
                    if (e[0].isIntersecting) {
                      n.disconnect();
                      i.io = undefined;
                      o();
                    }
                  },
                  { rootMargin: t }
                ));
                n.observe(e);
              } else {
                o();
              }
            };
            e.prototype.loadIcon = function () {
              var e = this;
              if (this.isVisible) {
                var t = a(this);
                if (t) {
                  if (m.has(t)) {
                    this.svgContent = m.get(t);
                  } else {
                    p(t, this.sanitize).then(function () {
                      return (e.svgContent = m.get(t));
                    });
                  }
                }
              }
              this.iconName = c(
                this.name,
                this.icon,
                this.mode,
                this.ios,
                this.md
              );
            };
            e.prototype.render = function () {
              var e, t;
              var n = this,
                r = n.flipRtl,
                s = n.iconName,
                a = n.inheritedAttributes,
                c = n.el;
              var f = this.mode || "md";
              var d = s
                ? (s.includes("arrow") || s.includes("chevron")) && r !== false
                : false;
              var u = r || d;
              return o(
                i,
                Object.assign(
                  {
                    role: "img",
                    class: Object.assign(
                      Object.assign(
                        ((e = {}), (e[f] = true), e),
                        k(this.color)
                      ),
                      ((t = {}),
                      (t["icon-".concat(this.size)] = !!this.size),
                      (t["flip-rtl"] = u),
                      (t["icon-rtl"] = u && l(c)),
                      t)
                    ),
                  },
                  a
                ),
                this.svgContent
                  ? o("div", {
                      class: "icon-inner",
                      innerHTML: this.svgContent,
                    })
                  : o("div", { class: "icon-inner" })
              );
            };
            Object.defineProperty(e, "assetsDirs", {
              get: function () {
                return ["svg"];
              },
              enumerable: false,
              configurable: true,
            });
            Object.defineProperty(e.prototype, "el", {
              get: function () {
                return n(this);
              },
              enumerable: false,
              configurable: true,
            });
            Object.defineProperty(e, "watchers", {
              get: function () {
                return {
                  name: ["loadIcon"],
                  src: ["loadIcon"],
                  icon: ["loadIcon"],
                  ios: ["loadIcon"],
                  md: ["loadIcon"],
                };
              },
              enumerable: false,
              configurable: true,
            });
            return e;
          })()
        );
        var y = function () {
          return (
            (typeof document !== "undefined" &&
              document.documentElement.getAttribute("mode")) ||
            "md"
          );
        };
        var k = function (e) {
          var t;
          return e
            ? ((t = { "ion-color": true }),
              (t["ion-color-".concat(e)] = true),
              t)
            : null;
        };
        w.style = g;
      },
    };
  }
);
