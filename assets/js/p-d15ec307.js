let e,
  t,
  n = !1;
const l = "undefined" != typeof window ? window : {},
  s = l.document || { head: {} },
  o = {
    t: 0,
    l: "",
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, l) => e.addEventListener(t, n, l),
    rel: (e, t, n, l) => e.removeEventListener(t, n, l),
    ce: (e, t) => new CustomEvent(e, t),
  },
  i = (e) => Promise.resolve(e),
  c = (() => {
    try {
      return (
        new CSSStyleSheet(),
        "function" == typeof new CSSStyleSheet().replaceSync
      );
    } catch (e) {}
    return !1;
  })(),
  r = "http://www.w3.org/1999/xlink",
  u = new WeakMap(),
  a = (e) => "sc-" + e.o,
  f = {},
  y = (e) => "object" == (e = typeof e) || "function" === e,
  $ = (e, t, ...n) => {
    let l = null,
      s = null,
      o = !1,
      i = !1;
    const c = [],
      r = (t) => {
        for (let n = 0; n < t.length; n++)
          (l = t[n]),
            Array.isArray(l)
              ? r(l)
              : null != l &&
                "boolean" != typeof l &&
                ((o = "function" != typeof e && !y(l)) && (l += ""),
                o && i ? (c[c.length - 1].i += l) : c.push(o ? h(null, l) : l),
                (i = o));
      };
    if ((r(n), t)) {
      t.key && (s = t.key);
      {
        const e = t.className || t.class;
        e &&
          (t.class =
            "object" != typeof e
              ? e
              : Object.keys(e)
                  .filter((t) => e[t])
                  .join(" "));
      }
    }
    const u = h(e, null);
    return (u.u = t), c.length > 0 && (u.$ = c), (u.h = s), u;
  },
  h = (e, t) => ({ t: 0, p: e, i: t, m: null, $: null, u: null, h: null }),
  d = {},
  p = (e, t, n, s, i, c) => {
    if (n !== s) {
      let u = D(e, t),
        a = t.toLowerCase();
      if ("class" === t) {
        const t = e.classList,
          l = w(n),
          o = w(s);
        t.remove(...l.filter((e) => e && !o.includes(e))),
          t.add(...o.filter((e) => e && !l.includes(e)));
      } else if ("style" === t) {
        for (const t in n)
          (s && null != s[t]) ||
            (t.includes("-") ? e.style.removeProperty(t) : (e.style[t] = ""));
        for (const t in s)
          (n && s[t] === n[t]) ||
            (t.includes("-")
              ? e.style.setProperty(t, s[t])
              : (e.style[t] = s[t]));
      } else if ("key" === t);
      else if ("ref" === t) s && s(e);
      else if (u || "o" !== t[0] || "n" !== t[1]) {
        const l = y(s);
        if ((u || (l && null !== s)) && !i)
          try {
            if (e.tagName.includes("-")) e[t] = s;
            else {
              const l = null == s ? "" : s;
              "list" === t ? (u = !1) : (null != n && e[t] == l) || (e[t] = l);
            }
          } catch (e) {}
        let o = !1;
        a !== (a = a.replace(/^xlink\:?/, "")) && ((t = a), (o = !0)),
          null == s || !1 === s
            ? (!1 === s && "" !== e.getAttribute(t)) ||
              (o ? e.removeAttributeNS(r, t) : e.removeAttribute(t))
            : (!u || 4 & c || i) &&
              !l &&
              ((s = !0 === s ? "" : s),
              o ? e.setAttributeNS(r, t, s) : e.setAttribute(t, s));
      } else
        (t =
          "-" === t[2] ? t.slice(3) : D(l, a) ? a.slice(2) : a[2] + t.slice(3)),
          n && o.rel(e, t, n, !1),
          s && o.ael(e, t, s, !1);
    }
  },
  m = /\s/,
  w = (e) => (e ? e.split(m) : []),
  b = (e, t, n, l) => {
    const s = 11 === t.m.nodeType && t.m.host ? t.m.host : t.m,
      o = (e && e.u) || f,
      i = t.u || f;
    for (l in o) l in i || p(s, l, o[l], void 0, n, t.t);
    for (l in i) p(s, l, o[l], i[l], n, t.t);
  },
  g = (t, n, l) => {
    const o = n.$[l];
    let i,
      c,
      r = 0;
    if (null !== o.i) i = o.m = s.createTextNode(o.i);
    else if (
      ((i = o.m = s.createElement(o.p)),
      b(null, o, !1),
      null != e && i["s-si"] !== e && i.classList.add((i["s-si"] = e)),
      o.$)
    )
      for (r = 0; r < o.$.length; ++r) (c = g(t, o, r)), c && i.appendChild(c);
    return i;
  },
  k = (e, n, l, s, o, i) => {
    let c,
      r = e;
    for (r.shadowRoot && r.tagName === t && (r = r.shadowRoot); o <= i; ++o)
      s[o] && ((c = g(null, l, o)), c && ((s[o].m = c), r.insertBefore(c, n)));
  },
  S = (e, t, n, l, s) => {
    for (; t <= n; ++t) (l = e[t]) && ((s = l.m), C(l), s.remove());
  },
  j = (e, t) => e.p === t.p && e.h === t.h,
  v = (e, t) => {
    const n = (t.m = e.m),
      l = e.$,
      s = t.$,
      o = t.i;
    null === o
      ? (b(e, t, !1),
        null !== l && null !== s
          ? ((e, t, n, l) => {
              let s,
                o,
                i = 0,
                c = 0,
                r = 0,
                u = 0,
                a = t.length - 1,
                f = t[0],
                y = t[a],
                $ = l.length - 1,
                h = l[0],
                d = l[$];
              for (; i <= a && c <= $; )
                if (null == f) f = t[++i];
                else if (null == y) y = t[--a];
                else if (null == h) h = l[++c];
                else if (null == d) d = l[--$];
                else if (j(f, h)) v(f, h), (f = t[++i]), (h = l[++c]);
                else if (j(y, d)) v(y, d), (y = t[--a]), (d = l[--$]);
                else if (j(f, d))
                  v(f, d),
                    e.insertBefore(f.m, y.m.nextSibling),
                    (f = t[++i]),
                    (d = l[--$]);
                else if (j(y, h))
                  v(y, h), e.insertBefore(y.m, f.m), (y = t[--a]), (h = l[++c]);
                else {
                  for (r = -1, u = i; u <= a; ++u)
                    if (t[u] && null !== t[u].h && t[u].h === h.h) {
                      r = u;
                      break;
                    }
                  r >= 0
                    ? ((o = t[r]),
                      o.p !== h.p
                        ? (s = g(t && t[c], n, r))
                        : (v(o, h), (t[r] = void 0), (s = o.m)),
                      (h = l[++c]))
                    : ((s = g(t && t[c], n, c)), (h = l[++c])),
                    s && f.m.parentNode.insertBefore(s, f.m);
                }
              i > a
                ? k(e, null == l[$ + 1] ? null : l[$ + 1].m, n, l, c, $)
                : c > $ && S(t, i, a);
            })(n, l, t, s)
          : null !== s
          ? (null !== e.i && (n.textContent = ""),
            k(n, null, t, s, 0, s.length - 1))
          : null !== l && S(l, 0, l.length - 1))
      : e.i !== o && (n.data = o);
  },
  C = (e) => {
    e.u && e.u.ref && e.u.ref(null), e.$ && e.$.map(C);
  },
  M = (e) => _(e).g,
  O = (e, t) => {
    t && !e.k && t["s-p"] && t["s-p"].push(new Promise((t) => (e.k = t)));
  },
  x = (e, t) => {
    if (((e.t |= 16), !(4 & e.t))) return O(e, e.S), ne(() => L(e, t));
    e.t |= 512;
  },
  L = (e, t) => {
    const n = e.j;
    let l;
    return t && (l = T(n, "componentWillLoad")), U(l, () => P(e, n, t));
  },
  P = async (e, t, n) => {
    const l = e.g,
      o = l["s-rc"];
    n &&
      ((e) => {
        const t = e.v,
          n = e.g,
          l = t.t,
          o = ((e, t) => {
            let n = a(t);
            const l = K.get(n);
            if (((e = 11 === e.nodeType ? e : s), l))
              if ("string" == typeof l) {
                let t,
                  o = u.get((e = e.head || e));
                o || u.set(e, (o = new Set())),
                  o.has(n) ||
                    ((t = s.createElement("style")),
                    (t.innerHTML = l),
                    e.insertBefore(t, e.querySelector("link")),
                    o && o.add(n));
              } else
                e.adoptedStyleSheets.includes(l) ||
                  (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
            return n;
          })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
        10 & l && ((n["s-sc"] = o), n.classList.add(o + "-h"));
      })(e);
    E(e, t), o && (o.map((e) => e()), (l["s-rc"] = void 0));
    {
      const t = l["s-p"],
        n = () => N(e);
      0 === t.length
        ? n()
        : (Promise.all(t).then(n), (e.t |= 4), (t.length = 0));
    }
  },
  E = (n, l) => {
    try {
      (l = l.render()),
        (n.t &= -17),
        (n.t |= 2),
        ((n, l) => {
          const s = n.g,
            o = n.v,
            i = n.C || h(null, null),
            c = ((e) => e && e.p === d)(l) ? l : $(null, null, l);
          (t = s.tagName),
            o.M && ((c.u = c.u || {}), o.M.map(([e, t]) => (c.u[t] = s[e]))),
            (c.p = null),
            (c.t |= 4),
            (n.C = c),
            (c.m = i.m = s.shadowRoot || s),
            (e = s["s-sc"]),
            v(i, c);
        })(n, l);
    } catch (e) {
      G(e, n.g);
    }
    return null;
  },
  N = (e) => {
    const t = e.g,
      n = e.S;
    64 & e.t || ((e.t |= 64), W(t), e.O(t), n || R()),
      e.k && (e.k(), (e.k = void 0)),
      512 & e.t && te(() => x(e, !1)),
      (e.t &= -517);
  },
  R = () => {
    W(s.documentElement),
      te(() =>
        ((e) => {
          const t = o.ce("appload", { detail: { namespace: "ionicons" } });
          return e.dispatchEvent(t), t;
        })(l)
      );
  },
  T = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (e) {
        G(e);
      }
  },
  U = (e, t) => (e && e.then ? e.then(t) : t()),
  W = (e) => e.classList.add("hydrated"),
  A = (e, t, n) => {
    if (t.L) {
      e.watchers && (t.P = e.watchers);
      const l = Object.entries(t.L),
        s = e.prototype;
      if (
        (l.map(([e, [l]]) => {
          (31 & l || (2 & n && 32 & l)) &&
            Object.defineProperty(s, e, {
              get() {
                return ((e, t) => _(this).N.get(t))(0, e);
              },
              set(n) {
                ((e, t, n, l) => {
                  const s = _(e),
                    o = s.g,
                    i = s.N.get(t),
                    c = s.t,
                    r = s.j;
                  if (
                    ((n = ((e, t) =>
                      null == e || y(e)
                        ? e
                        : 4 & t
                        ? "false" !== e && ("" === e || !!e)
                        : 1 & t
                        ? e + ""
                        : e)(n, l.L[t][0])),
                    (!(8 & c) || void 0 === i) &&
                      n !== i &&
                      (!Number.isNaN(i) || !Number.isNaN(n)) &&
                      (s.N.set(t, n), r))
                  ) {
                    if (l.P && 128 & c) {
                      const e = l.P[t];
                      e &&
                        e.map((e) => {
                          try {
                            r[e](n, i, t);
                          } catch (e) {
                            G(e, o);
                          }
                        });
                    }
                    2 == (18 & c) && x(s, !1);
                  }
                })(this, e, n, t);
              },
              configurable: !0,
              enumerable: !0,
            });
        }),
        1 & n)
      ) {
        const n = new Map();
        (s.attributeChangedCallback = function (e, t, l) {
          o.jmp(() => {
            const t = n.get(e);
            if (this.hasOwnProperty(t)) (l = this[t]), delete this[t];
            else if (
              s.hasOwnProperty(t) &&
              "number" == typeof this[t] &&
              this[t] == l
            )
              return;
            this[t] = (null !== l || "boolean" != typeof this[t]) && l;
          });
        }),
          (e.observedAttributes = l
            .filter(([e, t]) => 15 & t[0])
            .map(([e, l]) => {
              const s = l[1] || e;
              return n.set(s, e), 512 & l[0] && t.M.push([e, s]), s;
            }));
      }
    }
    return e;
  },
  H = (e) => {
    T(e, "connectedCallback");
  },
  q = (e, t = {}) => {
    const n = [],
      i = t.exclude || [],
      r = l.customElements,
      u = s.head,
      f = u.querySelector("meta[charset]"),
      y = s.createElement("style"),
      $ = [];
    let h,
      d = !0;
    Object.assign(o, t),
      (o.l = new URL(t.resourcesUrl || "./", s.baseURI).href),
      e.map((e) => {
        e[1].map((t) => {
          const l = { t: t[0], o: t[1], L: t[2], R: t[3] };
          (l.L = t[2]), (l.M = []), (l.P = {});
          const s = l.o,
            u = class extends HTMLElement {
              constructor(e) {
                super(e),
                  B((e = this), l),
                  1 & l.t && e.attachShadow({ mode: "open" });
              }
              connectedCallback() {
                h && (clearTimeout(h), (h = null)),
                  d
                    ? $.push(this)
                    : o.jmp(() =>
                        ((e) => {
                          if (0 == (1 & o.t)) {
                            const t = _(e),
                              n = t.v,
                              l = () => {};
                            if (1 & t.t) H(t.j);
                            else {
                              t.t |= 1;
                              {
                                let n = e;
                                for (; (n = n.parentNode || n.host); )
                                  if (n["s-p"]) {
                                    O(t, (t.S = n));
                                    break;
                                  }
                              }
                              n.L &&
                                Object.entries(n.L).map(([t, [n]]) => {
                                  if (31 & n && e.hasOwnProperty(t)) {
                                    const n = e[t];
                                    delete e[t], (e[t] = n);
                                  }
                                }),
                                (async (e, t, n, l, s) => {
                                  if (0 == (32 & t.t)) {
                                    {
                                      if (((t.t |= 32), (s = J(n)).then)) {
                                        const e = () => {};
                                        (s = await s), e();
                                      }
                                      s.isProxied ||
                                        ((n.P = s.watchers),
                                        A(s, n, 2),
                                        (s.isProxied = !0));
                                      const e = () => {};
                                      t.t |= 8;
                                      try {
                                        new s(t);
                                      } catch (e) {
                                        G(e);
                                      }
                                      (t.t &= -9), (t.t |= 128), e(), H(t.j);
                                    }
                                    if (s.style) {
                                      let e = s.style;
                                      const t = a(n);
                                      if (!K.has(t)) {
                                        const l = () => {};
                                        ((e, t, n) => {
                                          let l = K.get(e);
                                          c && n
                                            ? ((l = l || new CSSStyleSheet()),
                                              "string" == typeof l
                                                ? (l = t)
                                                : l.replaceSync(t))
                                            : (l = t),
                                            K.set(e, l);
                                        })(t, e, !!(1 & n.t)),
                                          l();
                                      }
                                    }
                                  }
                                  const o = t.S,
                                    i = () => x(t, !0);
                                  o && o["s-rc"] ? o["s-rc"].push(i) : i();
                                })(0, t, n);
                            }
                            l();
                          }
                        })(this)
                      );
              }
              disconnectedCallback() {
                o.jmp(() =>
                  (() => {
                    0 == (1 & o.t) && T(_(this).j, "disconnectedCallback");
                  })()
                );
              }
              componentOnReady() {
                return _(this).T;
              }
            };
          (l.U = e[0]),
            i.includes(s) || r.get(s) || (n.push(s), r.define(s, A(u, l, 1)));
        });
      }),
      (y.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}"),
      y.setAttribute("data-styles", ""),
      u.insertBefore(y, f ? f.nextSibling : u.firstChild),
      (d = !1),
      $.length
        ? $.map((e) => e.connectedCallback())
        : o.jmp(() => (h = setTimeout(R, 30)));
  },
  F = (e) => {
    const t = new URL(e, o.l);
    return t.origin !== l.location.origin ? t.href : t.pathname;
  },
  V = new WeakMap(),
  _ = (e) => V.get(e),
  z = (e, t) => V.set((t.j = e), t),
  B = (e, t) => {
    const n = { t: 0, g: e, v: t, N: new Map() };
    return (
      (n.T = new Promise((e) => (n.O = e))),
      (e["s-p"] = []),
      (e["s-rc"] = []),
      V.set(e, n)
    );
  },
  D = (e, t) => t in e,
  G = (e, t) => (0, console.error)(e, t),
  I = new Map(),
  J = (e) => {
    const t = e.o.replace(/-/g, "_"),
      n = e.U,
      l = I.get(n);
    return l
      ? l[t]
      : import(`./${n}.entry.js`).then((e) => (I.set(n, e), e[t]), G);
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  },
  K = new Map(),
  Q = [],
  X = [],
  Y = (e, t) => (l) => {
    e.push(l), n || ((n = !0), t && 4 & o.t ? te(ee) : o.raf(ee));
  },
  Z = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (e) {
        G(e);
      }
    e.length = 0;
  },
  ee = () => {
    Z(Q), Z(X), (n = Q.length > 0) && o.raf(ee);
  },
  te = (e) => i().then(e),
  ne = Y(X, !0);
export { d as H, M as a, q as b, F as g, $ as h, i as p, z as r };
