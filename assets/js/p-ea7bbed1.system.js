var __extends =
  (this && this.__extends) ||
  (function () {
    var e = function (t, r) {
      e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
        };
      return e(t, r);
    };
    return function (t, r) {
      if (typeof r !== "function" && r !== null)
        throw new TypeError(
          "Class extends value " + String(r) + " is not a constructor or null"
        );
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype =
        r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })();
var __awaiter =
  (this && this.__awaiter) ||
  function (e, t, r, n) {
    function a(e) {
      return e instanceof r
        ? e
        : new r(function (t) {
            t(e);
          });
    }
    return new (r || (r = Promise))(function (r, i) {
      function l(e) {
        try {
          s(n.next(e));
        } catch (e) {
          i(e);
        }
      }
      function o(e) {
        try {
          s(n["throw"](e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        e.done ? r(e.value) : a(e.value).then(l, o);
      }
      s((n = n.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      },
      n,
      a,
      i,
      l;
    return (
      (l = { next: o(0), throw: o(1), return: o(2) }),
      typeof Symbol === "function" &&
        (l[Symbol.iterator] = function () {
          return this;
        }),
      l
    );
    function o(e) {
      return function (t) {
        return s([e, t]);
      };
    }
    function s(l) {
      if (n) throw new TypeError("Generator is already executing.");
      while (r)
        try {
          if (
            ((n = 1),
            a &&
              (i =
                l[0] & 2
                  ? a["return"]
                  : l[0]
                  ? a["throw"] || ((i = a["return"]) && i.call(a), 0)
                  : a.next) &&
              !(i = i.call(a, l[1])).done)
          )
            return i;
          if (((a = 0), i)) l = [l[0] & 2, i.value];
          switch (l[0]) {
            case 0:
            case 1:
              i = l;
              break;
            case 4:
              r.label++;
              return { value: l[1], done: false };
            case 5:
              r.label++;
              a = l[1];
              l = [0];
              continue;
            case 7:
              l = r.ops.pop();
              r.trys.pop();
              continue;
            default:
              if (
                !((i = r.trys), (i = i.length > 0 && i[i.length - 1])) &&
                (l[0] === 6 || l[0] === 2)
              ) {
                r = 0;
                continue;
              }
              if (l[0] === 3 && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                r.label = l[1];
                break;
              }
              if (l[0] === 6 && r.label < i[1]) {
                r.label = i[1];
                i = l;
                break;
              }
              if (i && r.label < i[2]) {
                r.label = i[2];
                r.ops.push(l);
                break;
              }
              if (i[2]) r.ops.pop();
              r.trys.pop();
              continue;
          }
          l = t.call(e, r);
        } catch (e) {
          l = [6, e];
          a = 0;
        } finally {
          n = i = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: true };
    }
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, a = t.length, i; n < a; n++) {
        if (i || !(n in t)) {
          if (!i) i = Array.prototype.slice.call(t, 0, n);
          i[n] = t[n];
        }
      }
    return e.concat(i || Array.prototype.slice.call(t));
  };
System.register([], function (e, t) {
  "use strict";
  return {
    execute: function () {
      var r = this;
      var n = "ionicons";
      var a;
      var i;
      var l = false;
      var o = false;
      var s = typeof window !== "undefined" ? window : {};
      var f = s.document || { head: {} };
      var u = {
        $flags$: 0,
        $resourcesUrl$: "",
        jmp: function (e) {
          return e();
        },
        raf: function (e) {
          return requestAnimationFrame(e);
        },
        ael: function (e, t, r, n) {
          return e.addEventListener(t, r, n);
        },
        rel: function (e, t, r, n) {
          return e.removeEventListener(t, r, n);
        },
        ce: function (e, t) {
          return new CustomEvent(e, t);
        },
      };
      var $ = e("p", function (e) {
        return Promise.resolve(e);
      });
      var c = (function () {
        try {
          new CSSStyleSheet();
          return typeof new CSSStyleSheet().replaceSync === "function";
        } catch (e) {}
        return false;
      })();
      var v = "{visibility:hidden}.hydrated{visibility:inherit}";
      var h = "http://www.w3.org/1999/xlink";
      var d = function (e, t) {
        if (t === void 0) {
          t = "";
        }
        {
          return function () {
            return;
          };
        }
      };
      var p = function (e, t) {
        {
          return function () {
            return;
          };
        }
      };
      var m = new WeakMap();
      var y = function (e, t, r) {
        var n = me.get(e);
        if (c && r) {
          n = n || new CSSStyleSheet();
          if (typeof n === "string") {
            n = t;
          } else {
            n.replaceSync(t);
          }
        } else {
          n = t;
        }
        me.set(e, n);
      };
      var g = function (e, t, r, n) {
        var a = w(t);
        var i = me.get(a);
        e = e.nodeType === 11 ? e : f;
        if (i) {
          if (typeof i === "string") {
            e = e.head || e;
            var l = m.get(e);
            var o = void 0;
            if (!l) {
              m.set(e, (l = new Set()));
            }
            if (!l.has(a)) {
              {
                {
                  o = f.createElement("style");
                  o.innerHTML = i;
                }
                e.insertBefore(o, e.querySelector("link"));
              }
              if (l) {
                l.add(a);
              }
            }
          } else if (!e.adoptedStyleSheets.includes(i)) {
            e.adoptedStyleSheets = __spreadArray(
              __spreadArray([], e.adoptedStyleSheets, true),
              [i],
              false
            );
          }
        }
        return a;
      };
      var b = function (e) {
        var t = e.$cmpMeta$;
        var r = e.$hostElement$;
        var n = t.$flags$;
        var a = d("attachStyles", t.$tagName$);
        var i = g(r.shadowRoot ? r.shadowRoot : r.getRootNode(), t);
        if (n & 10) {
          r["s-sc"] = i;
          r.classList.add(i + "-h");
        }
        a();
      };
      var w = function (e, t) {
        return "sc-" + e.$tagName$;
      };
      var _ = {};
      var S = function (e) {
        return e != null;
      };
      var R = function (e) {
        e = typeof e;
        return e === "object" || e === "function";
      };
      var k = e("h", function (e, t) {
        var r = [];
        for (var n = 2; n < arguments.length; n++) {
          r[n - 2] = arguments[n];
        }
        var a = null;
        var i = null;
        var l = false;
        var o = false;
        var s = [];
        var f = function (t) {
          for (var r = 0; r < t.length; r++) {
            a = t[r];
            if (Array.isArray(a)) {
              f(a);
            } else if (a != null && typeof a !== "boolean") {
              if ((l = typeof e !== "function" && !R(a))) {
                a = String(a);
              }
              if (l && o) {
                s[s.length - 1].$text$ += a;
              } else {
                s.push(l ? N(null, a) : a);
              }
              o = l;
            }
          }
        };
        f(r);
        if (t) {
          if (t.key) {
            i = t.key;
          }
          {
            var u = t.className || t.class;
            if (u) {
              t.class =
                typeof u !== "object"
                  ? u
                  : Object.keys(u)
                      .filter(function (e) {
                        return u[e];
                      })
                      .join(" ");
            }
          }
        }
        var $ = N(e, null);
        $.$attrs$ = t;
        if (s.length > 0) {
          $.$children$ = s;
        }
        {
          $.$key$ = i;
        }
        return $;
      });
      var N = function (e, t) {
        var r = {
          $flags$: 0,
          $tag$: e,
          $text$: t,
          $elm$: null,
          $children$: null,
        };
        {
          r.$attrs$ = null;
        }
        {
          r.$key$ = null;
        }
        return r;
      };
      var x = e("H", {});
      var C = function (e) {
        return e && e.$tag$ === x;
      };
      var E = function (e, t, r, n, a, i) {
        if (r !== n) {
          var l = ve(e, t);
          var o = t.toLowerCase();
          if (t === "class") {
            var f = e.classList;
            var $ = A(r);
            var c = A(n);
            f.remove.apply(
              f,
              $.filter(function (e) {
                return e && !c.includes(e);
              })
            );
            f.add.apply(
              f,
              c.filter(function (e) {
                return e && !$.includes(e);
              })
            );
          } else if (t === "style") {
            {
              for (var v in r) {
                if (!n || n[v] == null) {
                  if (v.includes("-")) {
                    e.style.removeProperty(v);
                  } else {
                    e.style[v] = "";
                  }
                }
              }
            }
            for (var v in n) {
              if (!r || n[v] !== r[v]) {
                if (v.includes("-")) {
                  e.style.setProperty(v, n[v]);
                } else {
                  e.style[v] = n[v];
                }
              }
            }
          } else if (t === "key");
          else if (t === "ref") {
            if (n) {
              n(e);
            }
          } else if (!l && t[0] === "o" && t[1] === "n") {
            if (t[2] === "-") {
              t = t.slice(3);
            } else if (ve(s, o)) {
              t = o.slice(2);
            } else {
              t = o[2] + t.slice(3);
            }
            if (r) {
              u.rel(e, t, r, false);
            }
            if (n) {
              u.ael(e, t, n, false);
            }
          } else {
            var d = R(n);
            if ((l || (d && n !== null)) && !a) {
              try {
                if (!e.tagName.includes("-")) {
                  var p = n == null ? "" : n;
                  if (t === "list") {
                    l = false;
                  } else if (r == null || e[t] != p) {
                    e[t] = p;
                  }
                } else {
                  e[t] = n;
                }
              } catch (e) {}
            }
            var m = false;
            {
              if (o !== (o = o.replace(/^xlink\:?/, ""))) {
                t = o;
                m = true;
              }
            }
            if (n == null || n === false) {
              if (n !== false || e.getAttribute(t) === "") {
                if (m) {
                  e.removeAttributeNS(h, t);
                } else {
                  e.removeAttribute(t);
                }
              }
            } else if ((!l || i & 4 || a) && !d) {
              n = n === true ? "" : n;
              if (m) {
                e.setAttributeNS(h, t, n);
              } else {
                e.setAttribute(t, n);
              }
            }
          }
        }
      };
      var j = /\s/;
      var A = function (e) {
        return !e ? [] : e.split(j);
      };
      var M = function (e, t, r, n) {
        var a =
          t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
        var i = (e && e.$attrs$) || _;
        var l = t.$attrs$ || _;
        {
          for (n in i) {
            if (!(n in l)) {
              E(a, n, i[n], undefined, r, t.$flags$);
            }
          }
        }
        for (n in l) {
          E(a, n, i[n], l[n], r, t.$flags$);
        }
      };
      var P = function (e, t, r, n) {
        var i = t.$children$[r];
        var o = 0;
        var s;
        var u;
        if (i.$text$ !== null) {
          s = i.$elm$ = f.createTextNode(i.$text$);
        } else {
          s = i.$elm$ = f.createElement(i.$tag$);
          {
            M(null, i, l);
          }
          if (S(a) && s["s-si"] !== a) {
            s.classList.add((s["s-si"] = a));
          }
          if (i.$children$) {
            for (o = 0; o < i.$children$.length; ++o) {
              u = P(e, i, o);
              if (u) {
                s.appendChild(u);
              }
            }
          }
        }
        return s;
      };
      var O = function (e, t, r, n, a, l) {
        var o = e;
        var s;
        if (o.shadowRoot && o.tagName === i) {
          o = o.shadowRoot;
        }
        for (; a <= l; ++a) {
          if (n[a]) {
            s = P(null, r, a);
            if (s) {
              n[a].$elm$ = s;
              o.insertBefore(s, t);
            }
          }
        }
      };
      var T = function (e, t, r, n, a) {
        for (; t <= r; ++t) {
          if ((n = e[t])) {
            a = n.$elm$;
            z(n);
            a.remove();
          }
        }
      };
      var L = function (e, t, r, n) {
        var a = 0;
        var i = 0;
        var l = 0;
        var o = 0;
        var s = t.length - 1;
        var f = t[0];
        var u = t[s];
        var $ = n.length - 1;
        var c = n[0];
        var v = n[$];
        var h;
        var d;
        while (a <= s && i <= $) {
          if (f == null) {
            f = t[++a];
          } else if (u == null) {
            u = t[--s];
          } else if (c == null) {
            c = n[++i];
          } else if (v == null) {
            v = n[--$];
          } else if (I(f, c)) {
            U(f, c);
            f = t[++a];
            c = n[++i];
          } else if (I(u, v)) {
            U(u, v);
            u = t[--s];
            v = n[--$];
          } else if (I(f, v)) {
            U(f, v);
            e.insertBefore(f.$elm$, u.$elm$.nextSibling);
            f = t[++a];
            v = n[--$];
          } else if (I(u, c)) {
            U(u, c);
            e.insertBefore(u.$elm$, f.$elm$);
            u = t[--s];
            c = n[++i];
          } else {
            l = -1;
            {
              for (o = a; o <= s; ++o) {
                if (t[o] && t[o].$key$ !== null && t[o].$key$ === c.$key$) {
                  l = o;
                  break;
                }
              }
            }
            if (l >= 0) {
              d = t[l];
              if (d.$tag$ !== c.$tag$) {
                h = P(t && t[i], r, l);
              } else {
                U(d, c);
                t[l] = undefined;
                h = d.$elm$;
              }
              c = n[++i];
            } else {
              h = P(t && t[i], r, i);
              c = n[++i];
            }
            if (h) {
              {
                f.$elm$.parentNode.insertBefore(h, f.$elm$);
              }
            }
          }
        }
        if (a > s) {
          O(e, n[$ + 1] == null ? null : n[$ + 1].$elm$, r, n, i, $);
        } else if (i > $) {
          T(t, a, s);
        }
      };
      var I = function (e, t) {
        if (e.$tag$ === t.$tag$) {
          {
            return e.$key$ === t.$key$;
          }
        }
        return false;
      };
      var U = function (e, t) {
        var r = (t.$elm$ = e.$elm$);
        var n = e.$children$;
        var a = t.$children$;
        var i = t.$text$;
        if (i === null) {
          {
            {
              M(e, t, l);
            }
          }
          if (n !== null && a !== null) {
            L(r, n, t, a);
          } else if (a !== null) {
            if (e.$text$ !== null) {
              r.textContent = "";
            }
            O(r, null, t, a, 0, a.length - 1);
          } else if (n !== null) {
            T(n, 0, n.length - 1);
          }
        } else if (e.$text$ !== i) {
          r.data = i;
        }
      };
      var z = function (e) {
        {
          e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
          e.$children$ && e.$children$.map(z);
        }
      };
      var B = function (e, t) {
        var r = e.$hostElement$;
        var n = e.$cmpMeta$;
        var l = e.$vnode$ || N(null, null);
        var o = C(t) ? t : k(null, null, t);
        i = r.tagName;
        if (n.$attrsToReflect$) {
          o.$attrs$ = o.$attrs$ || {};
          n.$attrsToReflect$.map(function (e) {
            var t = e[0],
              n = e[1];
            return (o.$attrs$[n] = r[t]);
          });
        }
        o.$tag$ = null;
        o.$flags$ |= 4;
        e.$vnode$ = o;
        o.$elm$ = l.$elm$ = r.shadowRoot || r;
        {
          a = r["s-sc"];
        }
        U(l, o);
      };
      var H = e("a", function (e) {
        return ue(e).$hostElement$;
      });
      var V = function (e, t, r) {
        var n = u.ce(t, r);
        e.dispatchEvent(n);
        return n;
      };
      var q = function (e, t) {
        if (t && !e.$onRenderResolve$ && t["s-p"]) {
          t["s-p"].push(
            new Promise(function (t) {
              return (e.$onRenderResolve$ = t);
            })
          );
        }
      };
      var W = function (e, t) {
        {
          e.$flags$ |= 16;
        }
        if (e.$flags$ & 4) {
          e.$flags$ |= 512;
          return;
        }
        q(e, e.$ancestorComponent$);
        var r = function () {
          return F(e, t);
        };
        return Re(r);
      };
      var F = function (e, t) {
        var r = d("scheduleUpdate", e.$cmpMeta$.$tagName$);
        var n = e.$lazyInstance$;
        var a;
        if (t) {
          {
            a = Q(n, "componentWillLoad");
          }
        }
        r();
        return X(a, function () {
          return G(e, n, t);
        });
      };
      var G = function (e, t, n) {
        return __awaiter(r, void 0, void 0, function () {
          var r, a, i, l, o, s;
          return __generator(this, function (f) {
            r = e.$hostElement$;
            a = d("update", e.$cmpMeta$.$tagName$);
            i = r["s-rc"];
            if (n) {
              b(e);
            }
            l = d("render", e.$cmpMeta$.$tagName$);
            {
              D(e, t);
            }
            if (i) {
              i.map(function (e) {
                return e();
              });
              r["s-rc"] = undefined;
            }
            l();
            a();
            {
              o = r["s-p"];
              s = function () {
                return J(e);
              };
              if (o.length === 0) {
                s();
              } else {
                Promise.all(o).then(s);
                e.$flags$ |= 4;
                o.length = 0;
              }
            }
            return [2];
          });
        });
      };
      var D = function (e, t, r) {
        try {
          t = t.render();
          {
            e.$flags$ &= ~16;
          }
          {
            e.$flags$ |= 2;
          }
          {
            {
              {
                B(e, t);
              }
            }
          }
        } catch (t) {
          he(t, e.$hostElement$);
        }
        return null;
      };
      var J = function (e) {
        var t = e.$cmpMeta$.$tagName$;
        var r = e.$hostElement$;
        var n = d("postUpdate", t);
        var a = e.$ancestorComponent$;
        if (!(e.$flags$ & 64)) {
          e.$flags$ |= 64;
          {
            Y(r);
          }
          n();
          {
            e.$onReadyResolve$(r);
            if (!a) {
              K();
            }
          }
        } else {
          n();
        }
        {
          if (e.$onRenderResolve$) {
            e.$onRenderResolve$();
            e.$onRenderResolve$ = undefined;
          }
          if (e.$flags$ & 512) {
            Se(function () {
              return W(e, false);
            });
          }
          e.$flags$ &= ~(4 | 512);
        }
      };
      var K = function (e) {
        {
          Y(f.documentElement);
        }
        Se(function () {
          return V(s, "appload", { detail: { namespace: n } });
        });
      };
      var Q = function (e, t, r) {
        if (e && e[t]) {
          try {
            return e[t](r);
          } catch (e) {
            he(e);
          }
        }
        return undefined;
      };
      var X = function (e, t) {
        return e && e.then ? e.then(t) : t();
      };
      var Y = function (e) {
        return e.classList.add("hydrated");
      };
      var Z = function (e, t) {
        if (e != null && !R(e)) {
          if (t & 4) {
            return e === "false" ? false : e === "" || !!e;
          }
          if (t & 1) {
            return String(e);
          }
          return e;
        }
        return e;
      };
      var ee = function (e, t) {
        return ue(e).$instanceValues$.get(t);
      };
      var te = function (e, t, r, n) {
        var a = ue(e);
        var i = a.$hostElement$;
        var l = a.$instanceValues$.get(t);
        var o = a.$flags$;
        var s = a.$lazyInstance$;
        r = Z(r, n.$members$[t][0]);
        var f = Number.isNaN(l) && Number.isNaN(r);
        var u = r !== l && !f;
        if ((!(o & 8) || l === undefined) && u) {
          a.$instanceValues$.set(t, r);
          if (s) {
            if (n.$watchers$ && o & 128) {
              var $ = n.$watchers$[t];
              if ($) {
                $.map(function (e) {
                  try {
                    s[e](r, l, t);
                  } catch (e) {
                    he(e, i);
                  }
                });
              }
            }
            if ((o & (2 | 16)) === 2) {
              W(a, false);
            }
          }
        }
      };
      var re = function (e, t, r) {
        if (t.$members$) {
          if (e.watchers) {
            t.$watchers$ = e.watchers;
          }
          var n = Object.entries(t.$members$);
          var a = e.prototype;
          n.map(function (e) {
            var n = e[0],
              i = e[1][0];
            if (i & 31 || (r & 2 && i & 32)) {
              Object.defineProperty(a, n, {
                get: function () {
                  return ee(this, n);
                },
                set: function (e) {
                  te(this, n, e, t);
                },
                configurable: true,
                enumerable: true,
              });
            }
          });
          if (r & 1) {
            var i = new Map();
            a.attributeChangedCallback = function (e, t, r) {
              var n = this;
              u.jmp(function () {
                var t = i.get(e);
                if (n.hasOwnProperty(t)) {
                  r = n[t];
                  delete n[t];
                } else if (
                  a.hasOwnProperty(t) &&
                  typeof n[t] === "number" &&
                  n[t] == r
                ) {
                  return;
                }
                n[t] = r === null && typeof n[t] === "boolean" ? false : r;
              });
            };
            e.observedAttributes = n
              .filter(function (e) {
                var t = e[0],
                  r = e[1];
                return r[0] & 15;
              })
              .map(function (e) {
                var r = e[0],
                  n = e[1];
                var a = n[1] || r;
                i.set(a, r);
                if (n[0] & 512) {
                  t.$attrsToReflect$.push([r, a]);
                }
                return a;
              });
          }
        }
        return e;
      };
      var ne = function (e, t, n, a, i) {
        return __awaiter(r, void 0, void 0, function () {
          var e, r, a, l, o, s, f;
          return __generator(this, function (u) {
            switch (u.label) {
              case 0:
                if (!((t.$flags$ & 32) === 0)) return [3, 3];
                t.$flags$ |= 32;
                i = pe(n);
                if (!i.then) return [3, 2];
                e = p();
                return [4, i];
              case 1:
                i = u.sent();
                e();
                u.label = 2;
              case 2:
                if (!i.isProxied) {
                  {
                    n.$watchers$ = i.watchers;
                  }
                  re(i, n, 2);
                  i.isProxied = true;
                }
                r = d("createInstance", n.$tagName$);
                {
                  t.$flags$ |= 8;
                }
                try {
                  new i(t);
                } catch (e) {
                  he(e);
                }
                {
                  t.$flags$ &= ~8;
                }
                {
                  t.$flags$ |= 128;
                }
                r();
                ae(t.$lazyInstance$);
                if (i.style) {
                  a = i.style;
                  l = w(n);
                  if (!me.has(l)) {
                    o = d("registerStyles", n.$tagName$);
                    y(l, a, !!(n.$flags$ & 1));
                    o();
                  }
                }
                u.label = 3;
              case 3:
                s = t.$ancestorComponent$;
                f = function () {
                  return W(t, true);
                };
                if (s && s["s-rc"]) {
                  s["s-rc"].push(f);
                } else {
                  f();
                }
                return [2];
            }
          });
        });
      };
      var ae = function (e) {
        {
          Q(e, "connectedCallback");
        }
      };
      var ie = function (e) {
        if ((u.$flags$ & 1) === 0) {
          var t = ue(e);
          var r = t.$cmpMeta$;
          var n = d("connectedCallback", r.$tagName$);
          if (!(t.$flags$ & 1)) {
            t.$flags$ |= 1;
            {
              var a = e;
              while ((a = a.parentNode || a.host)) {
                if (a["s-p"]) {
                  q(t, (t.$ancestorComponent$ = a));
                  break;
                }
              }
            }
            if (r.$members$) {
              Object.entries(r.$members$).map(function (t) {
                var r = t[0],
                  n = t[1][0];
                if (n & 31 && e.hasOwnProperty(r)) {
                  var a = e[r];
                  delete e[r];
                  e[r] = a;
                }
              });
            }
            {
              ne(e, t, r);
            }
          } else {
            ae(t.$lazyInstance$);
          }
          n();
        }
      };
      var le = function (e) {
        if ((u.$flags$ & 1) === 0) {
          var t = ue(e);
          var r = t.$lazyInstance$;
          {
            Q(r, "disconnectedCallback");
          }
        }
      };
      var oe = e("b", function (e, t) {
        if (t === void 0) {
          t = {};
        }
        var r = d();
        var n = [];
        var a = t.exclude || [];
        var i = s.customElements;
        var l = f.head;
        var o = l.querySelector("meta[charset]");
        var $ = f.createElement("style");
        var c = [];
        var h;
        var p = true;
        Object.assign(u, t);
        u.$resourcesUrl$ = new URL(t.resourcesUrl || "./", f.baseURI).href;
        e.map(function (e) {
          e[1].map(function (t) {
            var r = {
              $flags$: t[0],
              $tagName$: t[1],
              $members$: t[2],
              $listeners$: t[3],
            };
            {
              r.$members$ = t[2];
            }
            {
              r.$attrsToReflect$ = [];
            }
            {
              r.$watchers$ = {};
            }
            var l = r.$tagName$;
            var o = (function (e) {
              __extends(t, e);
              function t(t) {
                var n = e.call(this, t) || this;
                t = n;
                ce(t, r);
                if (r.$flags$ & 1) {
                  {
                    {
                      t.attachShadow({ mode: "open" });
                    }
                  }
                }
                return n;
              }
              t.prototype.connectedCallback = function () {
                var e = this;
                if (h) {
                  clearTimeout(h);
                  h = null;
                }
                if (p) {
                  c.push(this);
                } else {
                  u.jmp(function () {
                    return ie(e);
                  });
                }
              };
              t.prototype.disconnectedCallback = function () {
                var e = this;
                u.jmp(function () {
                  return le(e);
                });
              };
              t.prototype.componentOnReady = function () {
                return ue(this).$onReadyPromise$;
              };
              return t;
            })(HTMLElement);
            r.$lazyBundleId$ = e[0];
            if (!a.includes(l) && !i.get(l)) {
              n.push(l);
              i.define(l, re(o, r, 1));
            }
          });
        });
        {
          $.innerHTML = n + v;
          $.setAttribute("data-styles", "");
          l.insertBefore($, o ? o.nextSibling : l.firstChild);
        }
        p = false;
        if (c.length) {
          c.map(function (e) {
            return e.connectedCallback();
          });
        } else {
          {
            u.jmp(function () {
              return (h = setTimeout(K, 30));
            });
          }
        }
        r();
      });
      var se = e("g", function (e) {
        var t = new URL(e, u.$resourcesUrl$);
        return t.origin !== s.location.origin ? t.href : t.pathname;
      });
      var fe = new WeakMap();
      var ue = function (e) {
        return fe.get(e);
      };
      var $e = e("r", function (e, t) {
        return fe.set((t.$lazyInstance$ = e), t);
      });
      var ce = function (e, t) {
        var r = {
          $flags$: 0,
          $hostElement$: e,
          $cmpMeta$: t,
          $instanceValues$: new Map(),
        };
        {
          r.$onReadyPromise$ = new Promise(function (e) {
            return (r.$onReadyResolve$ = e);
          });
          e["s-p"] = [];
          e["s-rc"] = [];
        }
        return fe.set(e, r);
      };
      var ve = function (e, t) {
        return t in e;
      };
      var he = function (e, t) {
        return (0, console.error)(e, t);
      };
      var de = new Map();
      var pe = function (e, r, n) {
        var a = e.$tagName$.replace(/-/g, "_");
        var i = e.$lazyBundleId$;
        var l = de.get(i);
        if (l) {
          return l[a];
        }
        /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return t
          .import("./".concat(i, ".entry.js").concat(""))
          .then(function (e) {
            {
              de.set(i, e);
            }
            return e[a];
          }, he);
      };
      var me = new Map();
      var ye = [];
      var ge = [];
      var be = function (e, t) {
        return function (r) {
          e.push(r);
          if (!o) {
            o = true;
            if (t && u.$flags$ & 4) {
              Se(_e);
            } else {
              u.raf(_e);
            }
          }
        };
      };
      var we = function (e) {
        for (var t = 0; t < e.length; t++) {
          try {
            e[t](performance.now());
          } catch (e) {
            he(e);
          }
        }
        e.length = 0;
      };
      var _e = function () {
        we(ye);
        {
          we(ge);
          if ((o = ye.length > 0)) {
            u.raf(_e);
          }
        }
      };
      var Se = function (e) {
        return $().then(e);
      };
      var Re = be(ge, true);
    },
  };
});
