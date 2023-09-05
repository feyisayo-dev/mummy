import { g as n } from "./p-d15ec307.js";
let e;
const t = () => {
    if ("undefined" == typeof window) return new Map();
    if (!e) {
      const n = window;
      (n.Ionicons = n.Ionicons || {}),
        (e = n.Ionicons.map = n.Ionicons.map || new Map());
    }
    return e;
  },
  o = (n) => {
    Object.keys(n).forEach((e) => {
      i(e, n[e]);
      const t = e
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
        .toLowerCase();
      e !== t && i(t, n[e]);
    });
  },
  i = (n, e) => {
    const o = t();
    void 0 === o.get(n)
      ? o.set(n, e)
      : console.warn(
          `[Ionicons Warning]: Multiple icons were mapped to name "${n}". Ensure that multiple icons are not mapped to the same icon name.`
        );
  },
  r = (n) => {
    let e = u(n.src);
    if (e) return e;
    if (((e = l(n.name, n.icon, n.mode, n.ios, n.md)), e)) return s(e);
    if (n.icon) {
      if (((e = u(n.icon)), e)) return e;
      if (((e = u(n.icon[n.mode])), e)) return e;
    }
    return null;
  },
  s = (e) => t().get(e) || n(`svg/${e}.svg`),
  l = (n, e, t, o, i) => (
    (t = "ios" === (t && c(t)) ? "ios" : "md"),
    o && "ios" === t
      ? (n = c(o))
      : i && "md" === t
      ? (n = c(i))
      : (n || !e || a(e) || (n = e), d(n) && (n = c(n))),
    d(n) && "" !== n.trim()
      ? "" !== n.replace(/[a-z]|-|\d/gi, "")
        ? null
        : n
      : null
  ),
  u = (n) => (d(n) && ((n = n.trim()), a(n)) ? n : null),
  a = (n) => n.length > 0 && /(\/|\.)/.test(n),
  d = (n) => "string" == typeof n,
  c = (n) => n.toLowerCase(),
  m = (n, e = []) => {
    const t = {};
    return (
      e.forEach((e) => {
        n.hasAttribute(e) &&
          (null !== n.getAttribute(e) && (t[e] = n.getAttribute(e)),
          n.removeAttribute(e));
      }),
      t
    );
  },
  p = (n) =>
    n && "" !== n.dir
      ? "rtl" === n.dir.toLowerCase()
      : "rtl" ===
        (null === document || void 0 === document
          ? void 0
          : document.dir.toLowerCase());
export { o as a, m as b, l as c, p as d, r as g, d as i };
