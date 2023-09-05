import { r as o, h as t, H as i, a as r } from "./p-d15ec307.js";
import { i as n, b as s, g as e, c, d as l } from "./p-7cfdab2b.js";
const a = (o) => {
    if (1 === o.nodeType) {
      if ("script" === o.nodeName.toLowerCase()) return !1;
      for (let t = 0; t < o.attributes.length; t++) {
        const i = o.attributes[t].name;
        if (n(i) && 0 === i.toLowerCase().indexOf("on")) return !1;
      }
      for (let t = 0; t < o.childNodes.length; t++)
        if (!a(o.childNodes[t])) return !1;
    }
    return !0;
  },
  h = new Map(),
  d = new Map();
let f;
const m = class {
    constructor(t) {
      o(this, t),
        (this.iconName = null),
        (this.inheritedAttributes = {}),
        (this.isVisible = !1),
        (this.mode = u()),
        (this.lazy = !1),
        (this.sanitize = !0);
    }
    componentWillLoad() {
      this.inheritedAttributes = s(this.el, ["aria-label"]);
    }
    connectedCallback() {
      this.waitUntilVisible(this.el, "50px", () => {
        (this.isVisible = !0), this.loadIcon();
      });
    }
    disconnectedCallback() {
      this.io && (this.io.disconnect(), (this.io = void 0));
    }
    waitUntilVisible(o, t, i) {
      if (
        this.lazy &&
        "undefined" != typeof window &&
        window.IntersectionObserver
      ) {
        const r = (this.io = new window.IntersectionObserver(
          (o) => {
            o[0].isIntersecting && (r.disconnect(), (this.io = void 0), i());
          },
          { rootMargin: t }
        ));
        r.observe(o);
      } else i();
    }
    loadIcon() {
      if (this.isVisible) {
        const o = e(this);
        o &&
          (h.has(o)
            ? (this.svgContent = h.get(o))
            : ((o, t) => {
                let i = d.get(o);
                if (!i) {
                  if (
                    "undefined" == typeof fetch ||
                    "undefined" == typeof document
                  )
                    return h.set(o, ""), Promise.resolve();
                  if (
                    ((o) => o.startsWith("data:image/svg+xml"))(o) &&
                    ((o) => -1 !== o.indexOf(";utf8,"))(o)
                  ) {
                    f || (f = new DOMParser());
                    const t = f
                      .parseFromString(o, "text/html")
                      .querySelector("svg");
                    return t && h.set(o, t.outerHTML), Promise.resolve();
                  }
                  (i = fetch(o).then((i) => {
                    if (i.ok)
                      return i.text().then((i) => {
                        i &&
                          !1 !== t &&
                          (i = ((o) => {
                            const t = document.createElement("div");
                            t.innerHTML = o;
                            for (let o = t.childNodes.length - 1; o >= 0; o--)
                              "svg" !==
                                t.childNodes[o].nodeName.toLowerCase() &&
                                t.removeChild(t.childNodes[o]);
                            const i = t.firstElementChild;
                            if (i && "svg" === i.nodeName.toLowerCase()) {
                              const o = i.getAttribute("class") || "";
                              if (
                                (i.setAttribute(
                                  "class",
                                  (o + " s-ion-icon").trim()
                                ),
                                a(i))
                              )
                                return t.innerHTML;
                            }
                            return "";
                          })(i)),
                          h.set(o, i || "");
                      });
                    h.set(o, "");
                  })),
                    d.set(o, i);
                }
                return i;
              })(o, this.sanitize).then(() => (this.svgContent = h.get(o))));
      }
      this.iconName = c(this.name, this.icon, this.mode, this.ios, this.md);
    }
    render() {
      const { flipRtl: o, iconName: r, inheritedAttributes: n, el: s } = this,
        e = this.mode || "md",
        c = !!r && (r.includes("arrow") || r.includes("chevron")) && !1 !== o,
        a = o || c;
      return t(
        i,
        Object.assign(
          {
            role: "img",
            class: Object.assign(Object.assign({ [e]: !0 }, p(this.color)), {
              [`icon-${this.size}`]: !!this.size,
              "flip-rtl": a,
              "icon-rtl": a && l(s),
            }),
          },
          n
        ),
        t(
          "div",
          this.svgContent
            ? { class: "icon-inner", innerHTML: this.svgContent }
            : { class: "icon-inner" }
        )
      );
    }
    static get assetsDirs() {
      return ["svg"];
    }
    get el() {
      return r(this);
    }
    static get watchers() {
      return {
        name: ["loadIcon"],
        src: ["loadIcon"],
        icon: ["loadIcon"],
        ios: ["loadIcon"],
        md: ["loadIcon"],
      };
    }
  },
  u = () =>
    ("undefined" != typeof document &&
      document.documentElement.getAttribute("mode")) ||
    "md",
  p = (o) => (o ? { "ion-color": !0, [`ion-color-${o}`]: !0 } : null);
m.style =
  ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important;font-size:1rem}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
export { m as ion_icon };
