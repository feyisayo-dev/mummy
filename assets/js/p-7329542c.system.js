System.register(["./p-ea7bbed1.system.js"], function (n) {
  "use strict";
  var e;
  return {
    setters: [
      function (n) {
        e = n.g;
      },
    ],
    execute: function () {
      var r;
      var t = function () {
        if (typeof window === "undefined") {
          return new Map();
        } else {
          if (!r) {
            var n = window;
            n.Ionicons = n.Ionicons || {};
            r = n.Ionicons.map = n.Ionicons.map || new Map();
          }
          return r;
        }
      };
      var i = n("a", function (n) {
        Object.keys(n).forEach(function (e) {
          o(e, n[e]);
          var r = e
            .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
            .toLowerCase();
          if (e !== r) {
            o(r, n[e]);
          }
        });
      });
      var o = function (n, e) {
        var r = t();
        if (r.get(n) === undefined) {
          r.set(n, e);
        } else {
          console.warn(
            '[Ionicons Warning]: Multiple icons were mapped to name "'.concat(
              n,
              '". Ensure that multiple icons are not mapped to the same icon name.'
            )
          );
        }
      };
      var u = n("g", function (n) {
        var e = f(n.src);
        if (e) {
          return e;
        }
        e = c(n.name, n.icon, n.mode, n.ios, n.md);
        if (e) {
          return a(e);
        }
        if (n.icon) {
          e = f(n.icon);
          if (e) {
            return e;
          }
          e = f(n.icon[n.mode]);
          if (e) {
            return e;
          }
        }
        return null;
      });
      var a = function (n) {
        var r = t().get(n);
        if (r) {
          return r;
        }
        return e("svg/".concat(n, ".svg"));
      };
      var c = n("c", function (n, e, r, t, i) {
        r = (r && l(r)) === "ios" ? "ios" : "md";
        if (t && r === "ios") {
          n = l(t);
        } else if (i && r === "md") {
          n = l(i);
        } else {
          if (!n && e && !s(e)) {
            n = e;
          }
          if (v(n)) {
            n = l(n);
          }
        }
        if (!v(n) || n.trim() === "") {
          return null;
        }
        var o = n.replace(/[a-z]|-|\d/gi, "");
        if (o !== "") {
          return null;
        }
        return n;
      });
      var f = function (n) {
        if (v(n)) {
          n = n.trim();
          if (s(n)) {
            return n;
          }
        }
        return null;
      };
      var s = function (n) {
        return n.length > 0 && /(\/|\.)/.test(n);
      };
      var v = n("i", function (n) {
        return typeof n === "string";
      });
      var l = function (n) {
        return n.toLowerCase();
      };
      var d = n("b", function (n, e) {
        if (e === void 0) {
          e = [];
        }
        var r = {};
        e.forEach(function (e) {
          if (n.hasAttribute(e)) {
            var t = n.getAttribute(e);
            if (t !== null) {
              r[e] = n.getAttribute(e);
            }
            n.removeAttribute(e);
          }
        });
        return r;
      });
      var m = n("d", function (n) {
        if (n) {
          if (n.dir !== "") {
            return n.dir.toLowerCase() === "rtl";
          }
        }
        return (
          (document === null || document === void 0
            ? void 0
            : document.dir.toLowerCase()) === "rtl"
        );
      });
    },
  };
});
