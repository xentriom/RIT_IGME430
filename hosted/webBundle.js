/*! For license information please see webBundle.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n,
    r = {
      566(e, t, n) {
        var r = n(540),
          o = n.t(r, 2),
          a = n(338),
          l = n(522);
        const i = (...e) =>
            e
              .filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)
              .join(" ")
              .trim(),
          s = (e) => {
            const t = ((e) =>
              e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
                n ? n.toUpperCase() : t.toLowerCase(),
              ))(e);
            return t.charAt(0).toUpperCase() + t.slice(1);
          };
        var c = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
        const u = (e) => {
            for (const t in e)
              if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
            return !1;
          },
          d = (0, r.createContext)({}),
          f = (0, r.forwardRef)(
            (
              {
                color: e,
                size: t,
                strokeWidth: n,
                absoluteStrokeWidth: o,
                className: a = "",
                children: l,
                iconNode: s,
                ...f
              },
              p,
            ) => {
              const {
                  size: m = 24,
                  strokeWidth: h = 2,
                  absoluteStrokeWidth: g = !1,
                  color: v = "currentColor",
                  className: y = "",
                } = (0, r.useContext)(d) ?? {},
                b = (o ?? g) ? (24 * Number(n ?? h)) / Number(t ?? m) : (n ?? h);
              return (0, r.createElement)(
                "svg",
                {
                  ref: p,
                  ...c,
                  width: t ?? m ?? c.width,
                  height: t ?? m ?? c.height,
                  stroke: e ?? v,
                  strokeWidth: b,
                  className: i("lucide", y, a),
                  ...(!l && !u(f) && { "aria-hidden": "true" }),
                  ...f,
                },
                [...s.map(([e, t]) => (0, r.createElement)(e, t)), ...(Array.isArray(l) ? l : [l])],
              );
            },
          ),
          p = (e, t) => {
            const n = (0, r.forwardRef)(({ className: n, ...o }, a) => {
              return (0, r.createElement)(f, {
                ref: a,
                iconNode: t,
                className: i(
                  `lucide-${((l = s(e)), l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`,
                  `lucide-${e}`,
                  n,
                ),
                ...o,
              });
              var l;
            });
            return ((n.displayName = s(e)), n);
          },
          m = p("message-circle", [
            [
              "path",
              {
                d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
                key: "1sd12s",
              },
            ],
          ]),
          h = p("search", [
            ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
            ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ]);
        function g(e) {
          var t,
            n,
            r = "";
          if ("string" == typeof e || "number" == typeof e) r += e;
          else if ("object" == typeof e)
            if (Array.isArray(e)) {
              var o = e.length;
              for (t = 0; t < o; t++) e[t] && (n = g(e[t])) && (r && (r += " "), (r += n));
            } else for (n in e) e[n] && (r && (r += " "), (r += n));
          return r;
        }
        function v() {
          for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
            (e = arguments[n]) && (t = g(e)) && (r && (r += " "), (r += t));
          return r;
        }
        const y = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
          b = v,
          x = (e, t) => (n) => {
            var r;
            if (null == (null == t ? void 0 : t.variants))
              return b(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: o, defaultVariants: a } = t,
              l = Object.keys(o).map((e) => {
                const t = null == n ? void 0 : n[e],
                  r = null == a ? void 0 : a[e];
                if (null === t) return null;
                const l = y(t) || y(r);
                return o[e][l];
              }),
              i =
                n &&
                Object.entries(n).reduce((e, t) => {
                  let [n, r] = t;
                  return (void 0 === r || (e[n] = r), e);
                }, {}),
              s =
                null == t || null === (r = t.compoundVariants) || void 0 === r
                  ? void 0
                  : r.reduce((e, t) => {
                      let { class: n, className: r, ...o } = t;
                      return Object.entries(o).every((e) => {
                        let [t, n] = e;
                        return Array.isArray(n)
                          ? n.includes({ ...a, ...i }[t])
                          : { ...a, ...i }[t] === n;
                      })
                        ? [...e, n, r]
                        : e;
                    }, []);
            return b(e, l, s, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
          },
          w = (e = new Map(), t = null, n) => ({ nextPart: e, validators: t, classGroupId: n }),
          k = "-",
          S = [],
          E = (e) => {
            const t = j(e),
              { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
            return {
              getClassGroupId: (e) => {
                if (e.startsWith("[") && e.endsWith("]")) return N(e);
                const n = e.split(k),
                  r = "" === n[0] && n.length > 1 ? 1 : 0;
                return C(n, r, t);
              },
              getConflictingClassGroupIds: (e, t) => {
                if (t) {
                  const t = r[e],
                    o = n[e];
                  return t
                    ? o
                      ? ((e, t) => {
                          const n = new Array(e.length + t.length);
                          for (let t = 0; t < e.length; t++) n[t] = e[t];
                          for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
                          return n;
                        })(o, t)
                      : t
                    : o || S;
                }
                return n[e] || S;
              },
            };
          },
          C = (e, t, n) => {
            if (0 === e.length - t) return n.classGroupId;
            const r = e[t],
              o = n.nextPart.get(r);
            if (o) {
              const n = C(e, t + 1, o);
              if (n) return n;
            }
            const a = n.validators;
            if (null === a) return;
            const l = 0 === t ? e.join(k) : e.slice(t).join(k),
              i = a.length;
            for (let e = 0; e < i; e++) {
              const t = a[e];
              if (t.validator(l)) return t.classGroupId;
            }
          },
          N = (e) =>
            -1 === e.slice(1, -1).indexOf(":")
              ? void 0
              : (() => {
                  const t = e.slice(1, -1),
                    n = t.indexOf(":"),
                    r = t.slice(0, n);
                  return r ? "arbitrary.." + r : void 0;
                })(),
          j = (e) => {
            const { theme: t, classGroups: n } = e;
            return _(n, t);
          },
          _ = (e, t) => {
            const n = w();
            for (const r in e) {
              const o = e[r];
              P(o, n, r, t);
            }
            return n;
          },
          P = (e, t, n, r) => {
            const o = e.length;
            for (let a = 0; a < o; a++) {
              const o = e[a];
              z(o, t, n, r);
            }
          },
          z = (e, t, n, r) => {
            "string" != typeof e
              ? "function" != typeof e
                ? R(e, t, n, r)
                : M(e, t, n, r)
              : T(e, t, n);
          },
          T = (e, t, n) => {
            ("" === e ? t : O(t, e)).classGroupId = n;
          },
          M = (e, t, n, r) => {
            L(e)
              ? P(e(r), t, n, r)
              : (null === t.validators && (t.validators = []),
                t.validators.push(((e, t) => ({ classGroupId: e, validator: t }))(n, e)));
          },
          R = (e, t, n, r) => {
            const o = Object.entries(e),
              a = o.length;
            for (let e = 0; e < a; e++) {
              const [a, l] = o[e];
              P(l, O(t, a), n, r);
            }
          },
          O = (e, t) => {
            let n = e;
            const r = t.split(k),
              o = r.length;
            for (let e = 0; e < o; e++) {
              const t = r[e];
              let o = n.nextPart.get(t);
              (o || ((o = w()), n.nextPart.set(t, o)), (n = o));
            }
            return n;
          },
          L = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
          D = (e) => {
            if (e < 1) return { get: () => {}, set: () => {} };
            let t = 0,
              n = Object.create(null),
              r = Object.create(null);
            const o = (o, a) => {
              ((n[o] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
            };
            return {
              get(e) {
                let t = n[e];
                return void 0 !== t ? t : void 0 !== (t = r[e]) ? (o(e, t), t) : void 0;
              },
              set(e, t) {
                e in n ? (n[e] = t) : o(e, t);
              },
            };
          },
          A = [],
          F = (e, t, n, r, o) => ({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o,
          }),
          I = (e) => {
            const { prefix: t, experimentalParseClassName: n } = e;
            let r = (e) => {
              const t = [];
              let n,
                r = 0,
                o = 0,
                a = 0;
              const l = e.length;
              for (let i = 0; i < l; i++) {
                const l = e[i];
                if (0 === r && 0 === o) {
                  if (":" === l) {
                    (t.push(e.slice(a, i)), (a = i + 1));
                    continue;
                  }
                  if ("/" === l) {
                    n = i;
                    continue;
                  }
                }
                "[" === l ? r++ : "]" === l ? r-- : "(" === l ? o++ : ")" === l && o--;
              }
              const i = 0 === t.length ? e : e.slice(a);
              let s = i,
                c = !1;
              return (
                i.endsWith("!")
                  ? ((s = i.slice(0, -1)), (c = !0))
                  : i.startsWith("!") && ((s = i.slice(1)), (c = !0)),
                F(t, c, s, n && n > a ? n - a : void 0)
              );
            };
            if (t) {
              const e = t + ":",
                n = r;
              r = (t) => (t.startsWith(e) ? n(t.slice(e.length)) : F(A, !1, t, void 0, !0));
            }
            if (n) {
              const e = r;
              r = (t) => n({ className: t, parseClassName: e });
            }
            return r;
          },
          H = (e) => {
            const t = new Map();
            return (
              e.orderSensitiveModifiers.forEach((e, n) => {
                t.set(e, 1e6 + n);
              }),
              (e) => {
                const n = [];
                let r = [];
                for (let o = 0; o < e.length; o++) {
                  const a = e[o],
                    l = "[" === a[0],
                    i = t.has(a);
                  l || i
                    ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
                    : r.push(a);
                }
                return (r.length > 0 && (r.sort(), n.push(...r)), n);
              }
            );
          },
          $ = /\s+/,
          B = (e) => {
            if ("string" == typeof e) return e;
            let t,
              n = "";
            for (let r = 0; r < e.length; r++) e[r] && (t = B(e[r])) && (n && (n += " "), (n += t));
            return n;
          },
          U = (e, ...t) => {
            let n, r, o, a;
            const l = (e) => {
              const t = r(e);
              if (t) return t;
              const a = ((e, t) => {
                const {
                    parseClassName: n,
                    getClassGroupId: r,
                    getConflictingClassGroupIds: o,
                    sortModifiers: a,
                  } = t,
                  l = [],
                  i = e.trim().split($);
                let s = "";
                for (let e = i.length - 1; e >= 0; e -= 1) {
                  const t = i[e],
                    {
                      isExternal: c,
                      modifiers: u,
                      hasImportantModifier: d,
                      baseClassName: f,
                      maybePostfixModifierPosition: p,
                    } = n(t);
                  if (c) {
                    s = t + (s.length > 0 ? " " + s : s);
                    continue;
                  }
                  let m = !!p,
                    h = r(m ? f.substring(0, p) : f);
                  if (!h) {
                    if (!m) {
                      s = t + (s.length > 0 ? " " + s : s);
                      continue;
                    }
                    if (((h = r(f)), !h)) {
                      s = t + (s.length > 0 ? " " + s : s);
                      continue;
                    }
                    m = !1;
                  }
                  const g = 0 === u.length ? "" : 1 === u.length ? u[0] : a(u).join(":"),
                    v = d ? g + "!" : g,
                    y = v + h;
                  if (l.indexOf(y) > -1) continue;
                  l.push(y);
                  const b = o(h, m);
                  for (let e = 0; e < b.length; ++e) {
                    const t = b[e];
                    l.push(v + t);
                  }
                  s = t + (s.length > 0 ? " " + s : s);
                }
                return s;
              })(e, n);
              return (o(e, a), a);
            };
            return (
              (a = (i) => {
                const s = t.reduce((e, t) => t(e), e());
                return (
                  (n = ((e) => ({
                    cache: D(e.cacheSize),
                    parseClassName: I(e),
                    sortModifiers: H(e),
                    ...E(e),
                  }))(s)),
                  (r = n.cache.get),
                  (o = n.cache.set),
                  (a = l),
                  l(i)
                );
              }),
              (...e) =>
                a(
                  ((...e) => {
                    let t,
                      n,
                      r = 0,
                      o = "";
                    for (; r < e.length; )
                      (t = e[r++]) && (n = B(t)) && (o && (o += " "), (o += n));
                    return o;
                  })(...e),
                )
            );
          },
          W = [],
          V = (e) => {
            const t = (t) => t[e] || W;
            return ((t.isThemeGetter = !0), t);
          },
          q = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
          K = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
          Q = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
          G = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          Y =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          X = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
          Z = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
          J =
            /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
          ee = (e) => Q.test(e),
          te = (e) => !!e && !Number.isNaN(Number(e)),
          ne = (e) => !!e && Number.isInteger(Number(e)),
          re = (e) => e.endsWith("%") && te(e.slice(0, -1)),
          oe = (e) => G.test(e),
          ae = () => !0,
          le = (e) => Y.test(e) && !X.test(e),
          ie = () => !1,
          se = (e) => Z.test(e),
          ce = (e) => J.test(e),
          ue = (e) => !fe(e) && !xe(e),
          de = (e) => _e(e, Me, ie),
          fe = (e) => q.test(e),
          pe = (e) => _e(e, Re, le),
          me = (e) => _e(e, Oe, te),
          he = (e) => _e(e, De, ae),
          ge = (e) => _e(e, Le, ie),
          ve = (e) => _e(e, ze, ie),
          ye = (e) => _e(e, Te, ce),
          be = (e) => _e(e, Ae, se),
          xe = (e) => K.test(e),
          we = (e) => Pe(e, Re),
          ke = (e) => Pe(e, Le),
          Se = (e) => Pe(e, ze),
          Ee = (e) => Pe(e, Me),
          Ce = (e) => Pe(e, Te),
          Ne = (e) => Pe(e, Ae, !0),
          je = (e) => Pe(e, De, !0),
          _e = (e, t, n) => {
            const r = q.exec(e);
            return !!r && (r[1] ? t(r[1]) : n(r[2]));
          },
          Pe = (e, t, n = !1) => {
            const r = K.exec(e);
            return !!r && (r[1] ? t(r[1]) : n);
          },
          ze = (e) => "position" === e || "percentage" === e,
          Te = (e) => "image" === e || "url" === e,
          Me = (e) => "length" === e || "size" === e || "bg-size" === e,
          Re = (e) => "length" === e,
          Oe = (e) => "number" === e,
          Le = (e) => "family-name" === e,
          De = (e) => "number" === e || "weight" === e,
          Ae = (e) => "shadow" === e,
          Fe = U(
            (Symbol.toStringTag,
            () => {
              const e = V("color"),
                t = V("font"),
                n = V("text"),
                r = V("font-weight"),
                o = V("tracking"),
                a = V("leading"),
                l = V("breakpoint"),
                i = V("container"),
                s = V("spacing"),
                c = V("radius"),
                u = V("shadow"),
                d = V("inset-shadow"),
                f = V("text-shadow"),
                p = V("drop-shadow"),
                m = V("blur"),
                h = V("perspective"),
                g = V("aspect"),
                v = V("ease"),
                y = V("animate"),
                b = () => [
                  "center",
                  "top",
                  "bottom",
                  "left",
                  "right",
                  "top-left",
                  "left-top",
                  "top-right",
                  "right-top",
                  "bottom-right",
                  "right-bottom",
                  "bottom-left",
                  "left-bottom",
                  xe,
                  fe,
                ],
                x = () => [xe, fe, s],
                w = () => [ee, "full", "auto", ...x()],
                k = () => [ne, "none", "subgrid", xe, fe],
                S = () => ["auto", { span: ["full", ne, xe, fe] }, ne, xe, fe],
                E = () => [ne, "auto", xe, fe],
                C = () => ["auto", "min", "max", "fr", xe, fe],
                N = () => ["auto", ...x()],
                j = () => [
                  ee,
                  "auto",
                  "full",
                  "dvw",
                  "dvh",
                  "lvw",
                  "lvh",
                  "svw",
                  "svh",
                  "min",
                  "max",
                  "fit",
                  ...x(),
                ],
                _ = () => [ee, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...x()],
                P = () => [
                  ee,
                  "screen",
                  "full",
                  "lh",
                  "dvh",
                  "lvh",
                  "svh",
                  "min",
                  "max",
                  "fit",
                  ...x(),
                ],
                z = () => [e, xe, fe],
                T = () => [
                  "center",
                  "top",
                  "bottom",
                  "left",
                  "right",
                  "top-left",
                  "left-top",
                  "top-right",
                  "right-top",
                  "bottom-right",
                  "right-bottom",
                  "bottom-left",
                  "left-bottom",
                  Se,
                  ve,
                  { position: [xe, fe] },
                ],
                M = () => ["auto", "cover", "contain", Ee, de, { size: [xe, fe] }],
                R = () => [re, we, pe],
                O = () => ["", "none", "full", c, xe, fe],
                L = () => ["", te, we, pe],
                D = () => [te, re, Se, ve],
                A = () => ["", "none", m, xe, fe],
                F = () => ["none", te, xe, fe],
                I = () => ["none", te, xe, fe],
                H = () => [te, xe, fe],
                $ = () => [ee, "full", ...x()];
              return {
                cacheSize: 500,
                theme: {
                  animate: ["spin", "ping", "pulse", "bounce"],
                  aspect: ["video"],
                  blur: [oe],
                  breakpoint: [oe],
                  color: [ae],
                  container: [oe],
                  "drop-shadow": [oe],
                  ease: ["in", "out", "in-out"],
                  font: [ue],
                  "font-weight": [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                  ],
                  "inset-shadow": [oe],
                  leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                  perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                  radius: [oe],
                  shadow: [oe],
                  spacing: ["px", te],
                  text: [oe],
                  "text-shadow": [oe],
                  tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
                },
                classGroups: {
                  aspect: [{ aspect: ["auto", "square", ee, fe, xe, g] }],
                  container: ["container"],
                  columns: [{ columns: [te, fe, xe, i] }],
                  "break-after": [
                    {
                      "break-after": [
                        "auto",
                        "avoid",
                        "all",
                        "avoid-page",
                        "page",
                        "left",
                        "right",
                        "column",
                      ],
                    },
                  ],
                  "break-before": [
                    {
                      "break-before": [
                        "auto",
                        "avoid",
                        "all",
                        "avoid-page",
                        "page",
                        "left",
                        "right",
                        "column",
                      ],
                    },
                  ],
                  "break-inside": [
                    { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
                  ],
                  "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                  box: [{ box: ["border", "content"] }],
                  display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                  ],
                  sr: ["sr-only", "not-sr-only"],
                  float: [{ float: ["right", "left", "none", "start", "end"] }],
                  clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                  isolation: ["isolate", "isolation-auto"],
                  "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                  "object-position": [{ object: b() }],
                  overflow: [{ overflow: ["auto", "hidden", "clip", "visible", "scroll"] }],
                  "overflow-x": [{ "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] }],
                  "overflow-y": [{ "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] }],
                  overscroll: [{ overscroll: ["auto", "contain", "none"] }],
                  "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
                  "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
                  position: ["static", "fixed", "absolute", "relative", "sticky"],
                  inset: [{ inset: w() }],
                  "inset-x": [{ "inset-x": w() }],
                  "inset-y": [{ "inset-y": w() }],
                  start: [{ "inset-s": w(), start: w() }],
                  end: [{ "inset-e": w(), end: w() }],
                  "inset-bs": [{ "inset-bs": w() }],
                  "inset-be": [{ "inset-be": w() }],
                  top: [{ top: w() }],
                  right: [{ right: w() }],
                  bottom: [{ bottom: w() }],
                  left: [{ left: w() }],
                  visibility: ["visible", "invisible", "collapse"],
                  z: [{ z: [ne, "auto", xe, fe] }],
                  basis: [{ basis: [ee, "full", "auto", i, ...x()] }],
                  "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                  "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
                  flex: [{ flex: [te, ee, "auto", "initial", "none", fe] }],
                  grow: [{ grow: ["", te, xe, fe] }],
                  shrink: [{ shrink: ["", te, xe, fe] }],
                  order: [{ order: [ne, "first", "last", "none", xe, fe] }],
                  "grid-cols": [{ "grid-cols": k() }],
                  "col-start-end": [{ col: S() }],
                  "col-start": [{ "col-start": E() }],
                  "col-end": [{ "col-end": E() }],
                  "grid-rows": [{ "grid-rows": k() }],
                  "row-start-end": [{ row: S() }],
                  "row-start": [{ "row-start": E() }],
                  "row-end": [{ "row-end": E() }],
                  "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                  "auto-cols": [{ "auto-cols": C() }],
                  "auto-rows": [{ "auto-rows": C() }],
                  gap: [{ gap: x() }],
                  "gap-x": [{ "gap-x": x() }],
                  "gap-y": [{ "gap-y": x() }],
                  "justify-content": [
                    {
                      justify: [
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly",
                        "stretch",
                        "baseline",
                        "center-safe",
                        "end-safe",
                        "normal",
                      ],
                    },
                  ],
                  "justify-items": [
                    {
                      "justify-items": [
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "center-safe",
                        "end-safe",
                        "normal",
                      ],
                    },
                  ],
                  "justify-self": [
                    {
                      "justify-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "center-safe",
                        "end-safe",
                      ],
                    },
                  ],
                  "align-content": [
                    {
                      content: [
                        "normal",
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly",
                        "stretch",
                        "baseline",
                        "center-safe",
                        "end-safe",
                      ],
                    },
                  ],
                  "align-items": [
                    {
                      items: [
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "center-safe",
                        "end-safe",
                        { baseline: ["", "last"] },
                      ],
                    },
                  ],
                  "align-self": [
                    {
                      self: [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "center-safe",
                        "end-safe",
                        { baseline: ["", "last"] },
                      ],
                    },
                  ],
                  "place-content": [
                    {
                      "place-content": [
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly",
                        "stretch",
                        "baseline",
                        "center-safe",
                        "end-safe",
                      ],
                    },
                  ],
                  "place-items": [
                    {
                      "place-items": [
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "center-safe",
                        "end-safe",
                        "baseline",
                      ],
                    },
                  ],
                  "place-self": [
                    {
                      "place-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "center-safe",
                        "end-safe",
                      ],
                    },
                  ],
                  p: [{ p: x() }],
                  px: [{ px: x() }],
                  py: [{ py: x() }],
                  ps: [{ ps: x() }],
                  pe: [{ pe: x() }],
                  pbs: [{ pbs: x() }],
                  pbe: [{ pbe: x() }],
                  pt: [{ pt: x() }],
                  pr: [{ pr: x() }],
                  pb: [{ pb: x() }],
                  pl: [{ pl: x() }],
                  m: [{ m: N() }],
                  mx: [{ mx: N() }],
                  my: [{ my: N() }],
                  ms: [{ ms: N() }],
                  me: [{ me: N() }],
                  mbs: [{ mbs: N() }],
                  mbe: [{ mbe: N() }],
                  mt: [{ mt: N() }],
                  mr: [{ mr: N() }],
                  mb: [{ mb: N() }],
                  ml: [{ ml: N() }],
                  "space-x": [{ "space-x": x() }],
                  "space-x-reverse": ["space-x-reverse"],
                  "space-y": [{ "space-y": x() }],
                  "space-y-reverse": ["space-y-reverse"],
                  size: [{ size: j() }],
                  "inline-size": [{ inline: ["auto", ..._()] }],
                  "min-inline-size": [{ "min-inline": ["auto", ..._()] }],
                  "max-inline-size": [{ "max-inline": ["none", ..._()] }],
                  "block-size": [{ block: ["auto", ...P()] }],
                  "min-block-size": [{ "min-block": ["auto", ...P()] }],
                  "max-block-size": [{ "max-block": ["none", ...P()] }],
                  w: [{ w: [i, "screen", ...j()] }],
                  "min-w": [{ "min-w": [i, "screen", "none", ...j()] }],
                  "max-w": [{ "max-w": [i, "screen", "none", "prose", { screen: [l] }, ...j()] }],
                  h: [{ h: ["screen", "lh", ...j()] }],
                  "min-h": [{ "min-h": ["screen", "lh", "none", ...j()] }],
                  "max-h": [{ "max-h": ["screen", "lh", ...j()] }],
                  "font-size": [{ text: ["base", n, we, pe] }],
                  "font-smoothing": ["antialiased", "subpixel-antialiased"],
                  "font-style": ["italic", "not-italic"],
                  "font-weight": [{ font: [r, je, he] }],
                  "font-stretch": [
                    {
                      "font-stretch": [
                        "ultra-condensed",
                        "extra-condensed",
                        "condensed",
                        "semi-condensed",
                        "normal",
                        "semi-expanded",
                        "expanded",
                        "extra-expanded",
                        "ultra-expanded",
                        re,
                        fe,
                      ],
                    },
                  ],
                  "font-family": [{ font: [ke, ge, t] }],
                  "font-features": [{ "font-features": [fe] }],
                  "fvn-normal": ["normal-nums"],
                  "fvn-ordinal": ["ordinal"],
                  "fvn-slashed-zero": ["slashed-zero"],
                  "fvn-figure": ["lining-nums", "oldstyle-nums"],
                  "fvn-spacing": ["proportional-nums", "tabular-nums"],
                  "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                  tracking: [{ tracking: [o, xe, fe] }],
                  "line-clamp": [{ "line-clamp": [te, "none", xe, me] }],
                  leading: [{ leading: [a, ...x()] }],
                  "list-image": [{ "list-image": ["none", xe, fe] }],
                  "list-style-position": [{ list: ["inside", "outside"] }],
                  "list-style-type": [{ list: ["disc", "decimal", "none", xe, fe] }],
                  "text-alignment": [
                    { text: ["left", "center", "right", "justify", "start", "end"] },
                  ],
                  "placeholder-color": [{ placeholder: z() }],
                  "text-color": [{ text: z() }],
                  "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                  "text-decoration-style": [
                    { decoration: ["solid", "dashed", "dotted", "double", "wavy"] },
                  ],
                  "text-decoration-thickness": [{ decoration: [te, "from-font", "auto", xe, pe] }],
                  "text-decoration-color": [{ decoration: z() }],
                  "underline-offset": [{ "underline-offset": [te, "auto", xe, fe] }],
                  "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                  "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                  "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                  indent: [{ indent: x() }],
                  "vertical-align": [
                    {
                      align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        xe,
                        fe,
                      ],
                    },
                  ],
                  whitespace: [
                    {
                      whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap",
                        "break-spaces",
                      ],
                    },
                  ],
                  break: [{ break: ["normal", "words", "all", "keep"] }],
                  wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
                  hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                  content: [{ content: ["none", xe, fe] }],
                  "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                  "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                  "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                  "bg-position": [{ bg: T() }],
                  "bg-repeat": [
                    { bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
                  ],
                  "bg-size": [{ bg: M() }],
                  "bg-image": [
                    {
                      bg: [
                        "none",
                        {
                          linear: [
                            { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                            ne,
                            xe,
                            fe,
                          ],
                          radial: ["", xe, fe],
                          conic: [ne, xe, fe],
                        },
                        Ce,
                        ye,
                      ],
                    },
                  ],
                  "bg-color": [{ bg: z() }],
                  "gradient-from-pos": [{ from: R() }],
                  "gradient-via-pos": [{ via: R() }],
                  "gradient-to-pos": [{ to: R() }],
                  "gradient-from": [{ from: z() }],
                  "gradient-via": [{ via: z() }],
                  "gradient-to": [{ to: z() }],
                  rounded: [{ rounded: O() }],
                  "rounded-s": [{ "rounded-s": O() }],
                  "rounded-e": [{ "rounded-e": O() }],
                  "rounded-t": [{ "rounded-t": O() }],
                  "rounded-r": [{ "rounded-r": O() }],
                  "rounded-b": [{ "rounded-b": O() }],
                  "rounded-l": [{ "rounded-l": O() }],
                  "rounded-ss": [{ "rounded-ss": O() }],
                  "rounded-se": [{ "rounded-se": O() }],
                  "rounded-ee": [{ "rounded-ee": O() }],
                  "rounded-es": [{ "rounded-es": O() }],
                  "rounded-tl": [{ "rounded-tl": O() }],
                  "rounded-tr": [{ "rounded-tr": O() }],
                  "rounded-br": [{ "rounded-br": O() }],
                  "rounded-bl": [{ "rounded-bl": O() }],
                  "border-w": [{ border: L() }],
                  "border-w-x": [{ "border-x": L() }],
                  "border-w-y": [{ "border-y": L() }],
                  "border-w-s": [{ "border-s": L() }],
                  "border-w-e": [{ "border-e": L() }],
                  "border-w-bs": [{ "border-bs": L() }],
                  "border-w-be": [{ "border-be": L() }],
                  "border-w-t": [{ "border-t": L() }],
                  "border-w-r": [{ "border-r": L() }],
                  "border-w-b": [{ "border-b": L() }],
                  "border-w-l": [{ "border-l": L() }],
                  "divide-x": [{ "divide-x": L() }],
                  "divide-x-reverse": ["divide-x-reverse"],
                  "divide-y": [{ "divide-y": L() }],
                  "divide-y-reverse": ["divide-y-reverse"],
                  "border-style": [
                    { border: ["solid", "dashed", "dotted", "double", "hidden", "none"] },
                  ],
                  "divide-style": [
                    { divide: ["solid", "dashed", "dotted", "double", "hidden", "none"] },
                  ],
                  "border-color": [{ border: z() }],
                  "border-color-x": [{ "border-x": z() }],
                  "border-color-y": [{ "border-y": z() }],
                  "border-color-s": [{ "border-s": z() }],
                  "border-color-e": [{ "border-e": z() }],
                  "border-color-bs": [{ "border-bs": z() }],
                  "border-color-be": [{ "border-be": z() }],
                  "border-color-t": [{ "border-t": z() }],
                  "border-color-r": [{ "border-r": z() }],
                  "border-color-b": [{ "border-b": z() }],
                  "border-color-l": [{ "border-l": z() }],
                  "divide-color": [{ divide: z() }],
                  "outline-style": [
                    { outline: ["solid", "dashed", "dotted", "double", "none", "hidden"] },
                  ],
                  "outline-offset": [{ "outline-offset": [te, xe, fe] }],
                  "outline-w": [{ outline: ["", te, we, pe] }],
                  "outline-color": [{ outline: z() }],
                  shadow: [{ shadow: ["", "none", u, Ne, be] }],
                  "shadow-color": [{ shadow: z() }],
                  "inset-shadow": [{ "inset-shadow": ["none", d, Ne, be] }],
                  "inset-shadow-color": [{ "inset-shadow": z() }],
                  "ring-w": [{ ring: L() }],
                  "ring-w-inset": ["ring-inset"],
                  "ring-color": [{ ring: z() }],
                  "ring-offset-w": [{ "ring-offset": [te, pe] }],
                  "ring-offset-color": [{ "ring-offset": z() }],
                  "inset-ring-w": [{ "inset-ring": L() }],
                  "inset-ring-color": [{ "inset-ring": z() }],
                  "text-shadow": [{ "text-shadow": ["none", f, Ne, be] }],
                  "text-shadow-color": [{ "text-shadow": z() }],
                  opacity: [{ opacity: [te, xe, fe] }],
                  "mix-blend": [
                    {
                      "mix-blend": [
                        "normal",
                        "multiply",
                        "screen",
                        "overlay",
                        "darken",
                        "lighten",
                        "color-dodge",
                        "color-burn",
                        "hard-light",
                        "soft-light",
                        "difference",
                        "exclusion",
                        "hue",
                        "saturation",
                        "color",
                        "luminosity",
                        "plus-darker",
                        "plus-lighter",
                      ],
                    },
                  ],
                  "bg-blend": [
                    {
                      "bg-blend": [
                        "normal",
                        "multiply",
                        "screen",
                        "overlay",
                        "darken",
                        "lighten",
                        "color-dodge",
                        "color-burn",
                        "hard-light",
                        "soft-light",
                        "difference",
                        "exclusion",
                        "hue",
                        "saturation",
                        "color",
                        "luminosity",
                      ],
                    },
                  ],
                  "mask-clip": [
                    { "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] },
                    "mask-no-clip",
                  ],
                  "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
                  "mask-image-linear-pos": [{ "mask-linear": [te] }],
                  "mask-image-linear-from-pos": [{ "mask-linear-from": D() }],
                  "mask-image-linear-to-pos": [{ "mask-linear-to": D() }],
                  "mask-image-linear-from-color": [{ "mask-linear-from": z() }],
                  "mask-image-linear-to-color": [{ "mask-linear-to": z() }],
                  "mask-image-t-from-pos": [{ "mask-t-from": D() }],
                  "mask-image-t-to-pos": [{ "mask-t-to": D() }],
                  "mask-image-t-from-color": [{ "mask-t-from": z() }],
                  "mask-image-t-to-color": [{ "mask-t-to": z() }],
                  "mask-image-r-from-pos": [{ "mask-r-from": D() }],
                  "mask-image-r-to-pos": [{ "mask-r-to": D() }],
                  "mask-image-r-from-color": [{ "mask-r-from": z() }],
                  "mask-image-r-to-color": [{ "mask-r-to": z() }],
                  "mask-image-b-from-pos": [{ "mask-b-from": D() }],
                  "mask-image-b-to-pos": [{ "mask-b-to": D() }],
                  "mask-image-b-from-color": [{ "mask-b-from": z() }],
                  "mask-image-b-to-color": [{ "mask-b-to": z() }],
                  "mask-image-l-from-pos": [{ "mask-l-from": D() }],
                  "mask-image-l-to-pos": [{ "mask-l-to": D() }],
                  "mask-image-l-from-color": [{ "mask-l-from": z() }],
                  "mask-image-l-to-color": [{ "mask-l-to": z() }],
                  "mask-image-x-from-pos": [{ "mask-x-from": D() }],
                  "mask-image-x-to-pos": [{ "mask-x-to": D() }],
                  "mask-image-x-from-color": [{ "mask-x-from": z() }],
                  "mask-image-x-to-color": [{ "mask-x-to": z() }],
                  "mask-image-y-from-pos": [{ "mask-y-from": D() }],
                  "mask-image-y-to-pos": [{ "mask-y-to": D() }],
                  "mask-image-y-from-color": [{ "mask-y-from": z() }],
                  "mask-image-y-to-color": [{ "mask-y-to": z() }],
                  "mask-image-radial": [{ "mask-radial": [xe, fe] }],
                  "mask-image-radial-from-pos": [{ "mask-radial-from": D() }],
                  "mask-image-radial-to-pos": [{ "mask-radial-to": D() }],
                  "mask-image-radial-from-color": [{ "mask-radial-from": z() }],
                  "mask-image-radial-to-color": [{ "mask-radial-to": z() }],
                  "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
                  "mask-image-radial-size": [
                    {
                      "mask-radial": [
                        { closest: ["side", "corner"], farthest: ["side", "corner"] },
                      ],
                    },
                  ],
                  "mask-image-radial-pos": [
                    {
                      "mask-radial-at": [
                        "center",
                        "top",
                        "bottom",
                        "left",
                        "right",
                        "top-left",
                        "left-top",
                        "top-right",
                        "right-top",
                        "bottom-right",
                        "right-bottom",
                        "bottom-left",
                        "left-bottom",
                      ],
                    },
                  ],
                  "mask-image-conic-pos": [{ "mask-conic": [te] }],
                  "mask-image-conic-from-pos": [{ "mask-conic-from": D() }],
                  "mask-image-conic-to-pos": [{ "mask-conic-to": D() }],
                  "mask-image-conic-from-color": [{ "mask-conic-from": z() }],
                  "mask-image-conic-to-color": [{ "mask-conic-to": z() }],
                  "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
                  "mask-origin": [
                    { "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] },
                  ],
                  "mask-position": [{ mask: T() }],
                  "mask-repeat": [
                    { mask: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
                  ],
                  "mask-size": [{ mask: M() }],
                  "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
                  "mask-image": [{ mask: ["none", xe, fe] }],
                  filter: [{ filter: ["", "none", xe, fe] }],
                  blur: [{ blur: A() }],
                  brightness: [{ brightness: [te, xe, fe] }],
                  contrast: [{ contrast: [te, xe, fe] }],
                  "drop-shadow": [{ "drop-shadow": ["", "none", p, Ne, be] }],
                  "drop-shadow-color": [{ "drop-shadow": z() }],
                  grayscale: [{ grayscale: ["", te, xe, fe] }],
                  "hue-rotate": [{ "hue-rotate": [te, xe, fe] }],
                  invert: [{ invert: ["", te, xe, fe] }],
                  saturate: [{ saturate: [te, xe, fe] }],
                  sepia: [{ sepia: ["", te, xe, fe] }],
                  "backdrop-filter": [{ "backdrop-filter": ["", "none", xe, fe] }],
                  "backdrop-blur": [{ "backdrop-blur": A() }],
                  "backdrop-brightness": [{ "backdrop-brightness": [te, xe, fe] }],
                  "backdrop-contrast": [{ "backdrop-contrast": [te, xe, fe] }],
                  "backdrop-grayscale": [{ "backdrop-grayscale": ["", te, xe, fe] }],
                  "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [te, xe, fe] }],
                  "backdrop-invert": [{ "backdrop-invert": ["", te, xe, fe] }],
                  "backdrop-opacity": [{ "backdrop-opacity": [te, xe, fe] }],
                  "backdrop-saturate": [{ "backdrop-saturate": [te, xe, fe] }],
                  "backdrop-sepia": [{ "backdrop-sepia": ["", te, xe, fe] }],
                  "border-collapse": [{ border: ["collapse", "separate"] }],
                  "border-spacing": [{ "border-spacing": x() }],
                  "border-spacing-x": [{ "border-spacing-x": x() }],
                  "border-spacing-y": [{ "border-spacing-y": x() }],
                  "table-layout": [{ table: ["auto", "fixed"] }],
                  caption: [{ caption: ["top", "bottom"] }],
                  transition: [
                    {
                      transition: [
                        "",
                        "all",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        "none",
                        xe,
                        fe,
                      ],
                    },
                  ],
                  "transition-behavior": [{ transition: ["normal", "discrete"] }],
                  duration: [{ duration: [te, "initial", xe, fe] }],
                  ease: [{ ease: ["linear", "initial", v, xe, fe] }],
                  delay: [{ delay: [te, xe, fe] }],
                  animate: [{ animate: ["none", y, xe, fe] }],
                  backface: [{ backface: ["hidden", "visible"] }],
                  perspective: [{ perspective: [h, xe, fe] }],
                  "perspective-origin": [{ "perspective-origin": b() }],
                  rotate: [{ rotate: F() }],
                  "rotate-x": [{ "rotate-x": F() }],
                  "rotate-y": [{ "rotate-y": F() }],
                  "rotate-z": [{ "rotate-z": F() }],
                  scale: [{ scale: I() }],
                  "scale-x": [{ "scale-x": I() }],
                  "scale-y": [{ "scale-y": I() }],
                  "scale-z": [{ "scale-z": I() }],
                  "scale-3d": ["scale-3d"],
                  skew: [{ skew: H() }],
                  "skew-x": [{ "skew-x": H() }],
                  "skew-y": [{ "skew-y": H() }],
                  transform: [{ transform: [xe, fe, "", "none", "gpu", "cpu"] }],
                  "transform-origin": [{ origin: b() }],
                  "transform-style": [{ transform: ["3d", "flat"] }],
                  translate: [{ translate: $() }],
                  "translate-x": [{ "translate-x": $() }],
                  "translate-y": [{ "translate-y": $() }],
                  "translate-z": [{ "translate-z": $() }],
                  "translate-none": ["translate-none"],
                  accent: [{ accent: z() }],
                  appearance: [{ appearance: ["none", "auto"] }],
                  "caret-color": [{ caret: z() }],
                  "color-scheme": [
                    {
                      scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"],
                    },
                  ],
                  cursor: [
                    {
                      cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        xe,
                        fe,
                      ],
                    },
                  ],
                  "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
                  "pointer-events": [{ "pointer-events": ["auto", "none"] }],
                  resize: [{ resize: ["none", "", "y", "x"] }],
                  "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                  "scroll-m": [{ "scroll-m": x() }],
                  "scroll-mx": [{ "scroll-mx": x() }],
                  "scroll-my": [{ "scroll-my": x() }],
                  "scroll-ms": [{ "scroll-ms": x() }],
                  "scroll-me": [{ "scroll-me": x() }],
                  "scroll-mbs": [{ "scroll-mbs": x() }],
                  "scroll-mbe": [{ "scroll-mbe": x() }],
                  "scroll-mt": [{ "scroll-mt": x() }],
                  "scroll-mr": [{ "scroll-mr": x() }],
                  "scroll-mb": [{ "scroll-mb": x() }],
                  "scroll-ml": [{ "scroll-ml": x() }],
                  "scroll-p": [{ "scroll-p": x() }],
                  "scroll-px": [{ "scroll-px": x() }],
                  "scroll-py": [{ "scroll-py": x() }],
                  "scroll-ps": [{ "scroll-ps": x() }],
                  "scroll-pe": [{ "scroll-pe": x() }],
                  "scroll-pbs": [{ "scroll-pbs": x() }],
                  "scroll-pbe": [{ "scroll-pbe": x() }],
                  "scroll-pt": [{ "scroll-pt": x() }],
                  "scroll-pr": [{ "scroll-pr": x() }],
                  "scroll-pb": [{ "scroll-pb": x() }],
                  "scroll-pl": [{ "scroll-pl": x() }],
                  "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                  "snap-stop": [{ snap: ["normal", "always"] }],
                  "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                  "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                  touch: [{ touch: ["auto", "none", "manipulation"] }],
                  "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                  "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                  "touch-pz": ["touch-pinch-zoom"],
                  select: [{ select: ["none", "text", "all", "auto"] }],
                  "will-change": [
                    { "will-change": ["auto", "scroll", "contents", "transform", xe, fe] },
                  ],
                  fill: [{ fill: ["none", ...z()] }],
                  "stroke-w": [{ stroke: [te, we, pe, me] }],
                  stroke: [{ stroke: ["none", ...z()] }],
                  "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
                },
                conflictingClassGroups: {
                  overflow: ["overflow-x", "overflow-y"],
                  overscroll: ["overscroll-x", "overscroll-y"],
                  inset: [
                    "inset-x",
                    "inset-y",
                    "inset-bs",
                    "inset-be",
                    "start",
                    "end",
                    "top",
                    "right",
                    "bottom",
                    "left",
                  ],
                  "inset-x": ["right", "left"],
                  "inset-y": ["top", "bottom"],
                  flex: ["basis", "grow", "shrink"],
                  gap: ["gap-x", "gap-y"],
                  p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                  px: ["pr", "pl"],
                  py: ["pt", "pb"],
                  m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                  mx: ["mr", "ml"],
                  my: ["mt", "mb"],
                  size: ["w", "h"],
                  "font-size": ["leading"],
                  "fvn-normal": [
                    "fvn-ordinal",
                    "fvn-slashed-zero",
                    "fvn-figure",
                    "fvn-spacing",
                    "fvn-fraction",
                  ],
                  "fvn-ordinal": ["fvn-normal"],
                  "fvn-slashed-zero": ["fvn-normal"],
                  "fvn-figure": ["fvn-normal"],
                  "fvn-spacing": ["fvn-normal"],
                  "fvn-fraction": ["fvn-normal"],
                  "line-clamp": ["display", "overflow"],
                  rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                  ],
                  "rounded-s": ["rounded-ss", "rounded-es"],
                  "rounded-e": ["rounded-se", "rounded-ee"],
                  "rounded-t": ["rounded-tl", "rounded-tr"],
                  "rounded-r": ["rounded-tr", "rounded-br"],
                  "rounded-b": ["rounded-br", "rounded-bl"],
                  "rounded-l": ["rounded-tl", "rounded-bl"],
                  "border-spacing": ["border-spacing-x", "border-spacing-y"],
                  "border-w": [
                    "border-w-x",
                    "border-w-y",
                    "border-w-s",
                    "border-w-e",
                    "border-w-bs",
                    "border-w-be",
                    "border-w-t",
                    "border-w-r",
                    "border-w-b",
                    "border-w-l",
                  ],
                  "border-w-x": ["border-w-r", "border-w-l"],
                  "border-w-y": ["border-w-t", "border-w-b"],
                  "border-color": [
                    "border-color-x",
                    "border-color-y",
                    "border-color-s",
                    "border-color-e",
                    "border-color-bs",
                    "border-color-be",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                  ],
                  "border-color-x": ["border-color-r", "border-color-l"],
                  "border-color-y": ["border-color-t", "border-color-b"],
                  translate: ["translate-x", "translate-y", "translate-none"],
                  "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                  "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mbs",
                    "scroll-mbe",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                  ],
                  "scroll-mx": ["scroll-mr", "scroll-ml"],
                  "scroll-my": ["scroll-mt", "scroll-mb"],
                  "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pbs",
                    "scroll-pbe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                  ],
                  "scroll-px": ["scroll-pr", "scroll-pl"],
                  "scroll-py": ["scroll-pt", "scroll-pb"],
                  touch: ["touch-x", "touch-y", "touch-pz"],
                  "touch-x": ["touch"],
                  "touch-y": ["touch"],
                  "touch-pz": ["touch"],
                },
                conflictingClassGroupModifiers: { "font-size": ["leading"] },
                orderSensitiveModifiers: [
                  "*",
                  "**",
                  "after",
                  "backdrop",
                  "before",
                  "details-content",
                  "file",
                  "first-letter",
                  "first-line",
                  "marker",
                  "placeholder",
                  "selection",
                ],
              };
            }),
          );
        function Ie(...e) {
          return Fe(v(e));
        }
        function He(e, t) {
          if ("function" == typeof e) return e(t);
          null != e && (e.current = t);
        }
        function $e(...e) {
          return (t) => {
            let n = !1;
            const r = e.map((e) => {
              const r = He(e, t);
              return (n || "function" != typeof r || (n = !0), r);
            });
            if (n)
              return () => {
                for (let t = 0; t < r.length; t++) {
                  const n = r[t];
                  "function" == typeof n ? n() : He(e[t], null);
                }
              };
          };
        }
        function Be(...e) {
          return r.useCallback($e(...e), e);
        }
        var Ue = n(848);
        function We(e) {
          const t = qe(e),
            n = r.forwardRef((e, n) => {
              const { children: o, ...a } = e,
                l = r.Children.toArray(o),
                i = l.find(Qe);
              if (i) {
                const e = i.props.children,
                  o = l.map((t) =>
                    t === i
                      ? r.Children.count(e) > 1
                        ? r.Children.only(null)
                        : r.isValidElement(e)
                          ? e.props.children
                          : null
                      : t,
                  );
                return (0, Ue.jsx)(t, {
                  ...a,
                  ref: n,
                  children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null,
                });
              }
              return (0, Ue.jsx)(t, { ...a, ref: n, children: o });
            });
          return ((n.displayName = `${e}.Slot`), n);
        }
        var Ve = We("Slot");
        function qe(e) {
          const t = r.forwardRef((e, t) => {
            const { children: n, ...o } = e;
            if (r.isValidElement(n)) {
              const e = (function (e) {
                  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                    n = t && "isReactWarning" in t && t.isReactWarning;
                  return n
                    ? e.ref
                    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
                      (n = t && "isReactWarning" in t && t.isReactWarning),
                      n ? e.props.ref : e.props.ref || e.ref);
                })(n),
                a = (function (e, t) {
                  const n = { ...t };
                  for (const r in t) {
                    const o = e[r],
                      a = t[r];
                    /^on[A-Z]/.test(r)
                      ? o && a
                        ? (n[r] = (...e) => {
                            const t = a(...e);
                            return (o(...e), t);
                          })
                        : o && (n[r] = o)
                      : "style" === r
                        ? (n[r] = { ...o, ...a })
                        : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "));
                  }
                  return { ...e, ...n };
                })(o, n.props);
              return (n.type !== r.Fragment && (a.ref = t ? $e(t, e) : e), r.cloneElement(n, a));
            }
            return r.Children.count(n) > 1 ? r.Children.only(null) : null;
          });
          return ((t.displayName = `${e}.SlotClone`), t);
        }
        var Ke = Symbol("radix.slottable");
        function Qe(e) {
          return (
            r.isValidElement(e) &&
            "function" == typeof e.type &&
            "__radixId" in e.type &&
            e.type.__radixId === Ke
          );
        }
        const Ge = x(
          "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          {
            variants: {
              variant: {
                default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
                outline:
                  "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
                ghost:
                  "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
                destructive:
                  "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default:
                  "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
                lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
                icon: "size-8",
                "icon-xs":
                  "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
                "icon-sm":
                  "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
                "icon-lg": "size-9",
                "icon-xl": "size-12",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        );
        function Ye(e) {
          const t = (0, l.c)(16);
          let n, r, o, a, i;
          t[0] !== e
            ? (({ className: n, variant: o, size: a, asChild: i, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a),
              (t[5] = i))
            : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4]), (i = t[5]));
          const s = void 0 === o ? "default" : o,
            c = void 0 === a ? "default" : a,
            u = void 0 !== i && i ? Ve : "button";
          let d, f;
          return (
            t[6] !== n || t[7] !== c || t[8] !== s
              ? ((d = Ie(Ge({ variant: s, size: c, className: n }))),
                (t[6] = n),
                (t[7] = c),
                (t[8] = s),
                (t[9] = d))
              : (d = t[9]),
            t[10] !== u || t[11] !== r || t[12] !== c || t[13] !== d || t[14] !== s
              ? ((f = (0, Ue.jsx)(u, {
                  "data-slot": "button",
                  "data-variant": s,
                  "data-size": c,
                  className: d,
                  ...r,
                })),
                (t[10] = u),
                (t[11] = r),
                (t[12] = c),
                (t[13] = d),
                (t[14] = s),
                (t[15] = f))
              : (f = t[15]),
            f
          );
        }
        function Xe(e) {
          const t = (0, l.c)(10);
          let n, r, o, a, i;
          return (
            t[0] !== e
              ? (({ className: n, type: o, ...r } = e),
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = o))
              : ((n = t[1]), (r = t[2]), (o = t[3])),
            t[4] !== n
              ? ((a = Ie(
                  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                  n,
                )),
                (t[4] = n),
                (t[5] = a))
              : (a = t[5]),
            t[6] !== r || t[7] !== a || t[8] !== o
              ? ((i = (0, Ue.jsx)("input", { type: o, "data-slot": "input", className: a, ...r })),
                (t[6] = r),
                (t[7] = a),
                (t[8] = o),
                (t[9] = i))
              : (i = t[9]),
            i
          );
        }
        function Ze(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("textarea", { "data-slot": "textarea", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function Je(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", {
                  "data-slot": "input-group",
                  role: "group",
                  className: o,
                  ...r,
                })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const et = x(
          "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
          {
            variants: {
              align: {
                "inline-start":
                  "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
                "inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
                "block-start":
                  "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
                "block-end":
                  "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
              },
            },
            defaultVariants: { align: "inline-start" },
          },
        );
        function tt(e) {
          const t = (0, l.c)(11);
          let n, r, o;
          t[0] !== e
            ? (({ className: n, align: o, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o))
            : ((n = t[1]), (r = t[2]), (o = t[3]));
          const a = void 0 === o ? "inline-start" : o;
          let i, s;
          return (
            t[4] !== a || t[5] !== n
              ? ((i = Ie(et({ align: a }), n)), (t[4] = a), (t[5] = n), (t[6] = i))
              : (i = t[6]),
            t[7] !== a || t[8] !== r || t[9] !== i
              ? ((s = (0, Ue.jsx)("div", {
                  role: "group",
                  "data-slot": "input-group-addon",
                  "data-align": a,
                  className: i,
                  onClick: nt,
                  ...r,
                })),
                (t[7] = a),
                (t[8] = r),
                (t[9] = i),
                (t[10] = s))
              : (s = t[10]),
            s
          );
        }
        function nt(e) {
          e.target.closest("button") ||
            e.currentTarget.parentElement?.querySelector("input")?.focus();
        }
        function rt(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)(Xe, { "data-slot": "input-group-control", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function ot(e, t = []) {
          let n = [];
          const o = () => {
            const t = n.map((e) => r.createContext(e));
            return function (n) {
              const o = n?.[e] || t;
              return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
            };
          };
          return (
            (o.scopeName = e),
            [
              function (t, o) {
                const a = r.createContext(o),
                  l = n.length;
                n = [...n, o];
                const i = (t) => {
                  const { scope: n, children: o, ...i } = t,
                    s = n?.[e]?.[l] || a,
                    c = r.useMemo(() => i, Object.values(i));
                  return (0, Ue.jsx)(s.Provider, { value: c, children: o });
                };
                return (
                  (i.displayName = t + "Provider"),
                  [
                    i,
                    function (n, i) {
                      const s = i?.[e]?.[l] || a,
                        c = r.useContext(s);
                      if (c) return c;
                      if (void 0 !== o) return o;
                      throw new Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              at(o, ...t),
            ]
          );
        }
        function at(...e) {
          const t = e[0];
          if (1 === e.length) return t;
          const n = () => {
            const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
            return function (e) {
              const o = n.reduce(
                (t, { useScope: n, scopeName: r }) => ({ ...t, ...n(e)[`__scope${r}`] }),
                {},
              );
              return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
            };
          };
          return ((n.scopeName = t.scopeName), n);
        }
        function lt(e) {
          const t = r.useRef(e);
          return (
            r.useEffect(() => {
              t.current = e;
            }),
            r.useMemo(
              () =>
                (...e) =>
                  t.current?.(...e),
              [],
            )
          );
        }
        x("flex items-center gap-2 text-sm shadow-none", {
          variants: {
            size: {
              xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
              sm: "",
              "icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
              "icon-sm": "size-8 p-0 has-[>svg]:p-0",
            },
          },
          defaultVariants: { size: "xs" },
        });
        var it = globalThis?.document ? r.useLayoutEffect : () => {},
          st = n(961),
          ct = [
            "a",
            "button",
            "div",
            "form",
            "h2",
            "h3",
            "img",
            "input",
            "label",
            "li",
            "nav",
            "ol",
            "p",
            "select",
            "span",
            "svg",
            "ul",
          ].reduce((e, t) => {
            const n = We(`Primitive.${t}`),
              o = r.forwardRef((e, r) => {
                const { asChild: o, ...a } = e,
                  l = o ? n : t;
                return (
                  "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                  (0, Ue.jsx)(l, { ...a, ref: r })
                );
              });
            return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
          }, {});
        function ut(e, t) {
          e && st.flushSync(() => e.dispatchEvent(t));
        }
        var dt = n(888);
        function ft() {
          return () => {};
        }
        var pt = "Avatar",
          [mt, ht] = ot(pt),
          [gt, vt] = mt(pt),
          yt = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, ...o } = e,
              [a, l] = r.useState("idle");
            return (0, Ue.jsx)(gt, {
              scope: n,
              imageLoadingStatus: a,
              onImageLoadingStatusChange: l,
              children: (0, Ue.jsx)(ct.span, { ...o, ref: t }),
            });
          });
        yt.displayName = pt;
        var bt = "AvatarImage",
          xt = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, src: o, onLoadingStatusChange: a = () => {}, ...l } = e,
              i = vt(bt, n),
              s = (function (e, { referrerPolicy: t, crossOrigin: n }) {
                const o = (0, dt.useSyncExternalStore)(
                    ft,
                    () => !0,
                    () => !1,
                  ),
                  a = r.useRef(null),
                  l = o ? (a.current || (a.current = new window.Image()), a.current) : null,
                  [i, s] = r.useState(() => St(l, e));
                return (
                  it(() => {
                    s(St(l, e));
                  }, [l, e]),
                  it(() => {
                    const e = (e) => () => {
                      s(e);
                    };
                    if (!l) return;
                    const r = e("loaded"),
                      o = e("error");
                    return (
                      l.addEventListener("load", r),
                      l.addEventListener("error", o),
                      t && (l.referrerPolicy = t),
                      "string" == typeof n && (l.crossOrigin = n),
                      () => {
                        (l.removeEventListener("load", r), l.removeEventListener("error", o));
                      }
                    );
                  }, [l, n, t]),
                  i
                );
              })(o, l),
              c = lt((e) => {
                (a(e), i.onImageLoadingStatusChange(e));
              });
            return (
              it(() => {
                "idle" !== s && c(s);
              }, [s, c]),
              "loaded" === s ? (0, Ue.jsx)(ct.img, { ...l, ref: t, src: o }) : null
            );
          });
        xt.displayName = bt;
        var wt = "AvatarFallback",
          kt = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, delayMs: o, ...a } = e,
              l = vt(wt, n),
              [i, s] = r.useState(void 0 === o);
            return (
              r.useEffect(() => {
                if (void 0 !== o) {
                  const e = window.setTimeout(() => s(!0), o);
                  return () => window.clearTimeout(e);
                }
              }, [o]),
              i && "loaded" !== l.imageLoadingStatus ? (0, Ue.jsx)(ct.span, { ...a, ref: t }) : null
            );
          });
        function St(e, t) {
          return e
            ? t
              ? (e.src !== t && (e.src = t),
                e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
              : "error"
            : "idle";
        }
        kt.displayName = wt;
        var Et = yt,
          Ct = xt,
          Nt = kt;
        function jt(e) {
          const t = (0, l.c)(10);
          let n, r, o;
          t[0] !== e
            ? (({ className: n, size: o, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o))
            : ((n = t[1]), (r = t[2]), (o = t[3]));
          const a = void 0 === o ? "default" : o;
          let i, s;
          return (
            t[4] !== n
              ? ((i = Ie(
                  "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
                  n,
                )),
                (t[4] = n),
                (t[5] = i))
              : (i = t[5]),
            t[6] !== r || t[7] !== a || t[8] !== i
              ? ((s = (0, Ue.jsx)(Et, {
                  "data-slot": "avatar",
                  "data-size": a,
                  className: i,
                  ...r,
                })),
                (t[6] = r),
                (t[7] = a),
                (t[8] = i),
                (t[9] = s))
              : (s = t[9]),
            s
          );
        }
        function _t(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie("aspect-square size-full", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)(Ct, { "data-slot": "avatar-image", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function Pt(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)(Nt, { "data-slot": "avatar-fallback", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const zt = p("image", [
            [
              "rect",
              { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" },
            ],
            ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
            ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
          ]),
          Tt = p("image-play", [
            [
              "path",
              {
                d: "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",
                key: "nrt1m3",
              },
            ],
            [
              "path",
              { d: "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "99hgts" },
            ],
            ["path", { d: "m6 21 5-5", key: "1wyjai" }],
            ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          ]),
          Mt = p("smile", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
            ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
            ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
          ]),
          Rt = p("calendar", [
            ["path", { d: "M8 2v4", key: "1cmpym" }],
            ["path", { d: "M16 2v4", key: "4m81vk" }],
            ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
            ["path", { d: "M3 10h18", key: "8toen8" }],
          ]),
          Ot = p("map-pin", [
            [
              "path",
              {
                d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                key: "1r0f0z",
              },
            ],
            ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          ]),
          Lt = p("flag", [
            [
              "path",
              {
                d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
                key: "1jaruq",
              },
            ],
          ]),
          Dt = p("earth", [
            ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
            [
              "path",
              {
                d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
                key: "1tzkfa",
              },
            ],
            [
              "path",
              {
                d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
                key: "14pb5j",
              },
            ],
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ]),
          At = p("user-round-check", [
            ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
            ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
            ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
          ]),
          Ft = p("badge-check", [
            [
              "path",
              {
                d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
                key: "3c2336",
              },
            ],
            ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
          ]),
          It = p("user-round-x", [
            ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
            ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
            ["path", { d: "m17 17 5 5", key: "p7ous7" }],
            ["path", { d: "m22 17-5 5", key: "gqnmv0" }],
          ]),
          Ht = { free: 128, basic: 256, premium: 512, "premium+": 1024 },
          $t = {
            everyone: { icon: Dt, label: "Everyone" },
            followers: { icon: At, label: "Accounts you follow" },
            verified: { icon: Ft, label: "Verified accounts" },
            none: { icon: It, label: "Only you" },
          },
          Bt = (0, r.createContext)({ isLoggedIn: !1, session: null, setSession: () => {} });
        function Ut(e) {
          const t = (0, l.c)(7),
            { children: n } = e,
            [o, a] = (0, r.useState)(null);
          let i, s, c;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = () => {
                const e = async () => {
                  try {
                    const e = await fetch("/api/session");
                    if (!e.ok) return a(null);
                    const t = await e.json();
                    a(t);
                  } catch {
                    a(null);
                  }
                };
                e();
                const t = setInterval(e, 3e5);
                return () => clearInterval(t);
              }),
              (s = []),
              (t[0] = i),
              (t[1] = s))
            : ((i = t[0]), (s = t[1])),
            (0, r.useEffect)(i, s),
            t[2] !== o
              ? ((c =
                  null === o
                    ? { isLoggedIn: !1, session: null, setSession: a }
                    : { isLoggedIn: !0, session: o, setSession: a }),
                (t[2] = o),
                (t[3] = c))
              : (c = t[3]));
          const u = c;
          let d;
          return (
            t[4] !== n || t[5] !== u
              ? ((d = (0, Ue.jsx)(Bt.Provider, { value: u, children: n })),
                (t[4] = n),
                (t[5] = u),
                (t[6] = d))
              : (d = t[6]),
            d
          );
        }
        const Wt = p("loader-circle", [
          ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
        ]);
        function Vt(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n ? ((o = Ie("size-4 animate-spin", n)), (t[3] = n), (t[4] = o)) : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)(Wt, {
                  role: "status",
                  "aria-label": "Loading",
                  className: o,
                  ...r,
                })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const qt = Array(12).fill(0),
          Kt = ({ visible: e, className: t }) =>
            r.createElement(
              "div",
              {
                className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
                "data-visible": e,
              },
              r.createElement(
                "div",
                { className: "sonner-spinner" },
                qt.map((e, t) =>
                  r.createElement("div", {
                    className: "sonner-loading-bar",
                    key: `spinner-bar-${t}`,
                  }),
                ),
              ),
            ),
          Qt = r.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              height: "20",
              width: "20",
            },
            r.createElement("path", {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              clipRule: "evenodd",
            }),
          ),
          Gt = r.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              height: "20",
              width: "20",
            },
            r.createElement("path", {
              fillRule: "evenodd",
              d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              clipRule: "evenodd",
            }),
          ),
          Yt = r.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              height: "20",
              width: "20",
            },
            r.createElement("path", {
              fillRule: "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
              clipRule: "evenodd",
            }),
          ),
          Xt = r.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              height: "20",
              width: "20",
            },
            r.createElement("path", {
              fillRule: "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
              clipRule: "evenodd",
            }),
          ),
          Zt = r.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            r.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            r.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
          );
        let Jt = 1;
        const en = new (class {
            constructor() {
              ((this.subscribe = (e) => (
                this.subscribers.push(e),
                () => {
                  const t = this.subscribers.indexOf(e);
                  this.subscribers.splice(t, 1);
                }
              )),
                (this.publish = (e) => {
                  this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                  (this.publish(e), (this.toasts = [...this.toasts, e]));
                }),
                (this.create = (e) => {
                  var t;
                  const { message: n, ...r } = e,
                    o =
                      "number" == typeof (null == e ? void 0 : e.id) ||
                      (null == (t = e.id) ? void 0 : t.length) > 0
                        ? e.id
                        : Jt++,
                    a = this.toasts.find((e) => e.id === o),
                    l = void 0 === e.dismissible || e.dismissible;
                  return (
                    this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                    a
                      ? (this.toasts = this.toasts.map((t) =>
                          t.id === o
                            ? (this.publish({ ...t, ...e, id: o, title: n }),
                              { ...t, ...e, id: o, dismissible: l, title: n })
                            : t,
                        ))
                      : this.addToast({ title: n, ...r, dismissible: l, id: o }),
                    o
                  );
                }),
                (this.dismiss = (e) => (
                  e
                    ? (this.dismissedToasts.add(e),
                      requestAnimationFrame(() =>
                        this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                      ))
                    : this.toasts.forEach((e) => {
                        this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
                      }),
                  e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                  if (!t) return;
                  let n;
                  void 0 !== t.loading &&
                    (n = this.create({
                      ...t,
                      promise: e,
                      type: "loading",
                      message: t.loading,
                      description: "function" != typeof t.description ? t.description : void 0,
                    }));
                  const o = Promise.resolve(e instanceof Function ? e() : e);
                  let a,
                    l = void 0 !== n;
                  const i = o
                      .then(async (e) => {
                        if (((a = ["resolve", e]), r.isValidElement(e)))
                          ((l = !1), this.create({ id: n, type: "default", message: e }));
                        else if (tn(e) && !e.ok) {
                          l = !1;
                          const o =
                              "function" == typeof t.error
                                ? await t.error(`HTTP error! status: ${e.status}`)
                                : t.error,
                            a =
                              "function" == typeof t.description
                                ? await t.description(`HTTP error! status: ${e.status}`)
                                : t.description,
                            i = "object" != typeof o || r.isValidElement(o) ? { message: o } : o;
                          this.create({ id: n, type: "error", description: a, ...i });
                        } else if (e instanceof Error) {
                          l = !1;
                          const o = "function" == typeof t.error ? await t.error(e) : t.error,
                            a =
                              "function" == typeof t.description
                                ? await t.description(e)
                                : t.description,
                            i = "object" != typeof o || r.isValidElement(o) ? { message: o } : o;
                          this.create({ id: n, type: "error", description: a, ...i });
                        } else if (void 0 !== t.success) {
                          l = !1;
                          const o = "function" == typeof t.success ? await t.success(e) : t.success,
                            a =
                              "function" == typeof t.description
                                ? await t.description(e)
                                : t.description,
                            i = "object" != typeof o || r.isValidElement(o) ? { message: o } : o;
                          this.create({ id: n, type: "success", description: a, ...i });
                        }
                      })
                      .catch(async (e) => {
                        if (((a = ["reject", e]), void 0 !== t.error)) {
                          l = !1;
                          const o = "function" == typeof t.error ? await t.error(e) : t.error,
                            a =
                              "function" == typeof t.description
                                ? await t.description(e)
                                : t.description,
                            i = "object" != typeof o || r.isValidElement(o) ? { message: o } : o;
                          this.create({ id: n, type: "error", description: a, ...i });
                        }
                      })
                      .finally(() => {
                        (l && (this.dismiss(n), (n = void 0)),
                          null == t.finally || t.finally.call(t));
                      }),
                    s = () =>
                      new Promise((e, t) =>
                        i.then(() => ("reject" === a[0] ? t(a[1]) : e(a[1]))).catch(t),
                      );
                  return "string" != typeof n && "number" != typeof n
                    ? { unwrap: s }
                    : Object.assign(n, { unwrap: s });
                }),
                (this.custom = (e, t) => {
                  const n = (null == t ? void 0 : t.id) || Jt++;
                  return (this.create({ jsx: e(n), id: n, ...t }), n);
                }),
                (this.getActiveToasts = () =>
                  this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set()));
            }
          })(),
          tn = (e) =>
            e &&
            "object" == typeof e &&
            "ok" in e &&
            "boolean" == typeof e.ok &&
            "status" in e &&
            "number" == typeof e.status,
          nn = Object.assign(
            (e, t) => {
              const n = (null == t ? void 0 : t.id) || Jt++;
              return (en.addToast({ title: e, ...t, id: n }), n);
            },
            {
              success: en.success,
              info: en.info,
              warning: en.warning,
              error: en.error,
              custom: en.custom,
              message: en.message,
              promise: en.promise,
              dismiss: en.dismiss,
              loading: en.loading,
            },
            { getHistory: () => en.toasts, getToasts: () => en.getActiveToasts() },
          );
        function rn(e) {
          return void 0 !== e.label;
        }
        !(function (e) {
          if ("undefined" == typeof document) return;
          let t = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("style");
          ((n.type = "text/css"),
            t.appendChild(n),
            n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)));
        })(
          "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
        );
        const on = 3,
          an = 14;
        function ln(...e) {
          return e.filter(Boolean).join(" ");
        }
        const sn = (e) => {
          var t, n, o, a, l, i, s, c, u;
          const {
              invert: d,
              toast: f,
              unstyled: p,
              interacting: m,
              setHeights: h,
              visibleToasts: g,
              heights: v,
              index: y,
              toasts: b,
              expanded: x,
              removeToast: w,
              defaultRichColors: k,
              closeButton: S,
              style: E,
              cancelButtonStyle: C,
              actionButtonStyle: N,
              className: j = "",
              descriptionClassName: _ = "",
              duration: P,
              position: z,
              gap: T,
              expandByDefault: M,
              classNames: R,
              icons: O,
              closeButtonAriaLabel: L = "Close toast",
            } = e,
            [D, A] = r.useState(null),
            [F, I] = r.useState(null),
            [H, $] = r.useState(!1),
            [B, U] = r.useState(!1),
            [W, V] = r.useState(!1),
            [q, K] = r.useState(!1),
            [Q, G] = r.useState(!1),
            [Y, X] = r.useState(0),
            [Z, J] = r.useState(0),
            ee = r.useRef(f.duration || P || 4e3),
            te = r.useRef(null),
            ne = r.useRef(null),
            re = 0 === y,
            oe = y + 1 <= g,
            ae = f.type,
            le = !1 !== f.dismissible,
            ie = f.className || "",
            se = f.descriptionClassName || "",
            ce = r.useMemo(() => v.findIndex((e) => e.toastId === f.id) || 0, [v, f.id]),
            ue = r.useMemo(() => {
              var e;
              return null != (e = f.closeButton) ? e : S;
            }, [f.closeButton, S]),
            de = r.useMemo(() => f.duration || P || 4e3, [f.duration, P]),
            fe = r.useRef(0),
            pe = r.useRef(0),
            me = r.useRef(0),
            he = r.useRef(null),
            [ge, ve] = z.split("-"),
            ye = r.useMemo(() => v.reduce((e, t, n) => (n >= ce ? e : e + t.height), 0), [v, ce]),
            be = (() => {
              const [e, t] = r.useState(document.hidden);
              return (
                r.useEffect(() => {
                  const e = () => {
                    t(document.hidden);
                  };
                  return (
                    document.addEventListener("visibilitychange", e),
                    () => window.removeEventListener("visibilitychange", e)
                  );
                }, []),
                e
              );
            })(),
            xe = f.invert || d,
            we = "loading" === ae;
          ((pe.current = r.useMemo(() => ce * T + ye, [ce, ye])),
            r.useEffect(() => {
              ee.current = de;
            }, [de]),
            r.useEffect(() => {
              $(!0);
            }, []),
            r.useEffect(() => {
              const e = ne.current;
              if (e) {
                const t = e.getBoundingClientRect().height;
                return (
                  J(t),
                  h((e) => [{ toastId: f.id, height: t, position: f.position }, ...e]),
                  () => h((e) => e.filter((e) => e.toastId !== f.id))
                );
              }
            }, [h, f.id]),
            r.useLayoutEffect(() => {
              if (!H) return;
              const e = ne.current,
                t = e.style.height;
              e.style.height = "auto";
              const n = e.getBoundingClientRect().height;
              ((e.style.height = t),
                J(n),
                h((e) =>
                  e.find((e) => e.toastId === f.id)
                    ? e.map((e) => (e.toastId === f.id ? { ...e, height: n } : e))
                    : [{ toastId: f.id, height: n, position: f.position }, ...e],
                ));
            }, [H, f.title, f.description, h, f.id, f.jsx, f.action, f.cancel]));
          const ke = r.useCallback(() => {
            (U(!0),
              X(pe.current),
              h((e) => e.filter((e) => e.toastId !== f.id)),
              setTimeout(() => {
                w(f);
              }, 200));
          }, [f, w, h, pe]);
          (r.useEffect(() => {
            if ((f.promise && "loading" === ae) || f.duration === 1 / 0 || "loading" === f.type)
              return;
            let e;
            return (
              x || m || be
                ? (() => {
                    if (me.current < fe.current) {
                      const e = new Date().getTime() - fe.current;
                      ee.current = ee.current - e;
                    }
                    me.current = new Date().getTime();
                  })()
                : ee.current !== 1 / 0 &&
                  ((fe.current = new Date().getTime()),
                  (e = setTimeout(() => {
                    (null == f.onAutoClose || f.onAutoClose.call(f, f), ke());
                  }, ee.current))),
              () => clearTimeout(e)
            );
          }, [x, m, f, ae, be, ke]),
            r.useEffect(() => {
              f.delete && (ke(), null == f.onDismiss || f.onDismiss.call(f, f));
            }, [ke, f.delete]));
          const Se =
            f.icon ||
            (null == O ? void 0 : O[ae]) ||
            ((e) => {
              switch (e) {
                case "success":
                  return Qt;
                case "info":
                  return Yt;
                case "warning":
                  return Gt;
                case "error":
                  return Xt;
                default:
                  return null;
              }
            })(ae);
          var Ee, Ce;
          return r.createElement(
            "li",
            {
              tabIndex: 0,
              ref: ne,
              className: ln(
                j,
                ie,
                null == R ? void 0 : R.toast,
                null == f || null == (t = f.classNames) ? void 0 : t.toast,
                null == R ? void 0 : R.default,
                null == R ? void 0 : R[ae],
                null == f || null == (n = f.classNames) ? void 0 : n[ae],
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (Ee = f.richColors) ? Ee : k,
              "data-styled": !Boolean(f.jsx || f.unstyled || p),
              "data-mounted": H,
              "data-promise": Boolean(f.promise),
              "data-swiped": Q,
              "data-removed": B,
              "data-visible": oe,
              "data-y-position": ge,
              "data-x-position": ve,
              "data-index": y,
              "data-front": re,
              "data-swiping": W,
              "data-dismissible": le,
              "data-type": ae,
              "data-invert": xe,
              "data-swipe-out": q,
              "data-swipe-direction": F,
              "data-expanded": Boolean(x || (M && H)),
              "data-testid": f.testId,
              style: {
                "--index": y,
                "--toasts-before": y,
                "--z-index": b.length - y,
                "--offset": `${B ? Y : pe.current}px`,
                "--initial-height": M ? "auto" : `${Z}px`,
                ...E,
                ...f.style,
              },
              onDragEnd: () => {
                (V(!1), A(null), (he.current = null));
              },
              onPointerDown: (e) => {
                2 !== e.button &&
                  !we &&
                  le &&
                  ((te.current = new Date()),
                  X(pe.current),
                  e.target.setPointerCapture(e.pointerId),
                  "BUTTON" !== e.target.tagName &&
                    (V(!0), (he.current = { x: e.clientX, y: e.clientY })));
              },
              onPointerUp: () => {
                var e, t, n;
                if (q || !le) return;
                he.current = null;
                const r = Number(
                    (null == (e = ne.current)
                      ? void 0
                      : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0,
                  ),
                  o = Number(
                    (null == (t = ne.current)
                      ? void 0
                      : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0,
                  ),
                  a = new Date().getTime() - (null == (n = te.current) ? void 0 : n.getTime()),
                  l = "x" === D ? r : o,
                  i = Math.abs(l) / a;
                if (Math.abs(l) >= 45 || i > 0.11)
                  return (
                    X(pe.current),
                    null == f.onDismiss || f.onDismiss.call(f, f),
                    I("x" === D ? (r > 0 ? "right" : "left") : o > 0 ? "down" : "up"),
                    ke(),
                    void K(!0)
                  );
                var s, c;
                (null == (s = ne.current) || s.style.setProperty("--swipe-amount-x", "0px"),
                  null == (c = ne.current) || c.style.setProperty("--swipe-amount-y", "0px"),
                  G(!1),
                  V(!1),
                  A(null));
              },
              onPointerMove: (t) => {
                var n, r, o;
                if (!he.current || !le) return;
                if ((null == (n = window.getSelection()) ? void 0 : n.toString().length) > 0)
                  return;
                const a = t.clientY - he.current.y,
                  l = t.clientX - he.current.x;
                var i;
                const s =
                  null != (i = e.swipeDirections)
                    ? i
                    : (function (e) {
                        const [t, n] = e.split("-"),
                          r = [];
                        return (t && r.push(t), n && r.push(n), r);
                      })(z);
                !D &&
                  (Math.abs(l) > 1 || Math.abs(a) > 1) &&
                  A(Math.abs(l) > Math.abs(a) ? "x" : "y");
                let c = { x: 0, y: 0 };
                const u = (e) => 1 / (1.5 + Math.abs(e) / 20);
                if ("y" === D) {
                  if (s.includes("top") || s.includes("bottom"))
                    if ((s.includes("top") && a < 0) || (s.includes("bottom") && a > 0)) c.y = a;
                    else {
                      const e = a * u(a);
                      c.y = Math.abs(e) < Math.abs(a) ? e : a;
                    }
                } else if ("x" === D && (s.includes("left") || s.includes("right")))
                  if ((s.includes("left") && l < 0) || (s.includes("right") && l > 0)) c.x = l;
                  else {
                    const e = l * u(l);
                    c.x = Math.abs(e) < Math.abs(l) ? e : l;
                  }
                ((Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && G(!0),
                  null == (r = ne.current) || r.style.setProperty("--swipe-amount-x", `${c.x}px`),
                  null == (o = ne.current) || o.style.setProperty("--swipe-amount-y", `${c.y}px`));
              },
            },
            ue && !f.jsx && "loading" !== ae
              ? r.createElement(
                  "button",
                  {
                    "aria-label": L,
                    "data-disabled": we,
                    "data-close-button": !0,
                    onClick:
                      we || !le
                        ? () => {}
                        : () => {
                            (ke(), null == f.onDismiss || f.onDismiss.call(f, f));
                          },
                    className: ln(
                      null == R ? void 0 : R.closeButton,
                      null == f || null == (o = f.classNames) ? void 0 : o.closeButton,
                    ),
                  },
                  null != (Ce = null == O ? void 0 : O.close) ? Ce : Zt,
                )
              : null,
            (ae || f.icon || f.promise) &&
              null !== f.icon &&
              (null !== (null == O ? void 0 : O[ae]) || f.icon)
              ? r.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: ln(
                      null == R ? void 0 : R.icon,
                      null == f || null == (a = f.classNames) ? void 0 : a.icon,
                    ),
                  },
                  f.promise || ("loading" === f.type && !f.icon)
                    ? f.icon ||
                        (function () {
                          var e, t;
                          return (null == O ? void 0 : O.loading)
                            ? r.createElement(
                                "div",
                                {
                                  className: ln(
                                    null == R ? void 0 : R.loader,
                                    null == f || null == (t = f.classNames) ? void 0 : t.loader,
                                    "sonner-loader",
                                  ),
                                  "data-visible": "loading" === ae,
                                },
                                O.loading,
                              )
                            : r.createElement(Kt, {
                                className: ln(
                                  null == R ? void 0 : R.loader,
                                  null == f || null == (e = f.classNames) ? void 0 : e.loader,
                                ),
                                visible: "loading" === ae,
                              });
                        })()
                    : null,
                  "loading" !== f.type ? Se : null,
                )
              : null,
            r.createElement(
              "div",
              {
                "data-content": "",
                className: ln(
                  null == R ? void 0 : R.content,
                  null == f || null == (l = f.classNames) ? void 0 : l.content,
                ),
              },
              r.createElement(
                "div",
                {
                  "data-title": "",
                  className: ln(
                    null == R ? void 0 : R.title,
                    null == f || null == (i = f.classNames) ? void 0 : i.title,
                  ),
                },
                f.jsx ? f.jsx : "function" == typeof f.title ? f.title() : f.title,
              ),
              f.description
                ? r.createElement(
                    "div",
                    {
                      "data-description": "",
                      className: ln(
                        _,
                        se,
                        null == R ? void 0 : R.description,
                        null == f || null == (s = f.classNames) ? void 0 : s.description,
                      ),
                    },
                    "function" == typeof f.description ? f.description() : f.description,
                  )
                : null,
            ),
            r.isValidElement(f.cancel)
              ? f.cancel
              : f.cancel && rn(f.cancel)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-cancel": !0,
                      style: f.cancelButtonStyle || C,
                      onClick: (e) => {
                        rn(f.cancel) &&
                          le &&
                          (null == f.cancel.onClick || f.cancel.onClick.call(f.cancel, e), ke());
                      },
                      className: ln(
                        null == R ? void 0 : R.cancelButton,
                        null == f || null == (c = f.classNames) ? void 0 : c.cancelButton,
                      ),
                    },
                    f.cancel.label,
                  )
                : null,
            r.isValidElement(f.action)
              ? f.action
              : f.action && rn(f.action)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-action": !0,
                      style: f.actionButtonStyle || N,
                      onClick: (e) => {
                        rn(f.action) &&
                          (null == f.action.onClick || f.action.onClick.call(f.action, e),
                          e.defaultPrevented || ke());
                      },
                      className: ln(
                        null == R ? void 0 : R.actionButton,
                        null == f || null == (u = f.classNames) ? void 0 : u.actionButton,
                      ),
                    },
                    f.action.label,
                  )
                : null,
          );
        };
        function cn() {
          if ("undefined" == typeof window) return "ltr";
          if ("undefined" == typeof document) return "ltr";
          const e = document.documentElement.getAttribute("dir");
          return "auto" !== e && e
            ? e
            : window.getComputedStyle(document.documentElement).direction;
        }
        function un(e, t) {
          const n = {};
          return (
            [e, t].forEach((e, t) => {
              const r = 1 === t,
                o = r ? "--mobile-offset" : "--offset",
                a = r ? "16px" : "24px";
              function l(e) {
                ["top", "right", "bottom", "left"].forEach((t) => {
                  n[`${o}-${t}`] = "number" == typeof e ? `${e}px` : e;
                });
              }
              "number" == typeof e || "string" == typeof e
                ? l(e)
                : "object" == typeof e
                  ? ["top", "right", "bottom", "left"].forEach((t) => {
                      void 0 === e[t]
                        ? (n[`${o}-${t}`] = a)
                        : (n[`${o}-${t}`] = "number" == typeof e[t] ? `${e[t]}px` : e[t]);
                    })
                  : l(a);
            }),
            n
          );
        }
        const dn = r.forwardRef(function (e, t) {
            const {
                id: n,
                invert: o,
                position: a = "bottom-right",
                hotkey: l = ["altKey", "KeyT"],
                expand: i,
                closeButton: s,
                className: c,
                offset: u,
                mobileOffset: d,
                theme: f = "light",
                richColors: p,
                duration: m,
                style: h,
                visibleToasts: g = on,
                toastOptions: v,
                dir: y = cn(),
                gap: b = an,
                icons: x,
                containerAriaLabel: w = "Notifications",
              } = e,
              [k, S] = r.useState([]),
              E = r.useMemo(
                () => (n ? k.filter((e) => e.toasterId === n) : k.filter((e) => !e.toasterId)),
                [k, n],
              ),
              C = r.useMemo(
                () =>
                  Array.from(
                    new Set([a].concat(E.filter((e) => e.position).map((e) => e.position))),
                  ),
                [E, a],
              ),
              [N, j] = r.useState([]),
              [_, P] = r.useState(!1),
              [z, T] = r.useState(!1),
              [M, R] = r.useState(
                "system" !== f
                  ? f
                  : "undefined" != typeof window &&
                      window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light",
              ),
              O = r.useRef(null),
              L = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
              D = r.useRef(null),
              A = r.useRef(!1),
              F = r.useCallback((e) => {
                S((t) => {
                  var n;
                  return (
                    (null == (n = t.find((t) => t.id === e.id)) ? void 0 : n.delete) ||
                      en.dismiss(e.id),
                    t.filter(({ id: t }) => t !== e.id)
                  );
                });
              }, []);
            return (
              r.useEffect(
                () =>
                  en.subscribe((e) => {
                    e.dismiss
                      ? requestAnimationFrame(() => {
                          S((t) => t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)));
                        })
                      : setTimeout(() => {
                          st.flushSync(() => {
                            S((t) => {
                              const n = t.findIndex((t) => t.id === e.id);
                              return -1 !== n
                                ? [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)]
                                : [e, ...t];
                            });
                          });
                        });
                  }),
                [k],
              ),
              r.useEffect(() => {
                if ("system" !== f) return void R(f);
                if (
                  ("system" === f &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? R("dark")
                      : R("light")),
                  "undefined" == typeof window)
                )
                  return;
                const e = window.matchMedia("(prefers-color-scheme: dark)");
                try {
                  e.addEventListener("change", ({ matches: e }) => {
                    R(e ? "dark" : "light");
                  });
                } catch (t) {
                  e.addListener(({ matches: e }) => {
                    try {
                      R(e ? "dark" : "light");
                    } catch (e) {
                      console.error(e);
                    }
                  });
                }
              }, [f]),
              r.useEffect(() => {
                k.length <= 1 && P(!1);
              }, [k]),
              r.useEffect(() => {
                const e = (e) => {
                  var t, n;
                  (l.every((t) => e[t] || e.code === t) &&
                    (P(!0), null == (n = O.current) || n.focus()),
                    "Escape" !== e.code ||
                      (document.activeElement !== O.current &&
                        !(null == (t = O.current) ? void 0 : t.contains(document.activeElement))) ||
                      P(!1));
                };
                return (
                  document.addEventListener("keydown", e),
                  () => document.removeEventListener("keydown", e)
                );
              }, [l]),
              r.useEffect(() => {
                if (O.current)
                  return () => {
                    D.current &&
                      (D.current.focus({ preventScroll: !0 }),
                      (D.current = null),
                      (A.current = !1));
                  };
              }, [O.current]),
              r.createElement(
                "section",
                {
                  ref: t,
                  "aria-label": `${w} ${L}`,
                  tabIndex: -1,
                  "aria-live": "polite",
                  "aria-relevant": "additions text",
                  "aria-atomic": "false",
                  suppressHydrationWarning: !0,
                },
                C.map((t, n) => {
                  var a;
                  const [l, f] = t.split("-");
                  return E.length
                    ? r.createElement(
                        "ol",
                        {
                          key: t,
                          dir: "auto" === y ? cn() : y,
                          tabIndex: -1,
                          ref: O,
                          className: c,
                          "data-sonner-toaster": !0,
                          "data-sonner-theme": M,
                          "data-y-position": l,
                          "data-x-position": f,
                          style: {
                            "--front-toast-height": `${(null == (a = N[0]) ? void 0 : a.height) || 0}px`,
                            "--width": "356px",
                            "--gap": `${b}px`,
                            ...h,
                            ...un(u, d),
                          },
                          onBlur: (e) => {
                            A.current &&
                              !e.currentTarget.contains(e.relatedTarget) &&
                              ((A.current = !1),
                              D.current &&
                                (D.current.focus({ preventScroll: !0 }), (D.current = null)));
                          },
                          onFocus: (e) => {
                            (e.target instanceof HTMLElement &&
                              "false" === e.target.dataset.dismissible) ||
                              A.current ||
                              ((A.current = !0), (D.current = e.relatedTarget));
                          },
                          onMouseEnter: () => P(!0),
                          onMouseMove: () => P(!0),
                          onMouseLeave: () => {
                            z || P(!1);
                          },
                          onDragEnd: () => P(!1),
                          onPointerDown: (e) => {
                            (e.target instanceof HTMLElement &&
                              "false" === e.target.dataset.dismissible) ||
                              T(!0);
                          },
                          onPointerUp: () => T(!1),
                        },
                        E.filter((e) => (!e.position && 0 === n) || e.position === t).map(
                          (n, a) => {
                            var l, c;
                            return r.createElement(sn, {
                              key: n.id,
                              icons: x,
                              index: a,
                              toast: n,
                              defaultRichColors: p,
                              duration: null != (l = null == v ? void 0 : v.duration) ? l : m,
                              className: null == v ? void 0 : v.className,
                              descriptionClassName: null == v ? void 0 : v.descriptionClassName,
                              invert: o,
                              visibleToasts: g,
                              closeButton: null != (c = null == v ? void 0 : v.closeButton) ? c : s,
                              interacting: z,
                              position: t,
                              style: null == v ? void 0 : v.style,
                              unstyled: null == v ? void 0 : v.unstyled,
                              classNames: null == v ? void 0 : v.classNames,
                              cancelButtonStyle: null == v ? void 0 : v.cancelButtonStyle,
                              actionButtonStyle: null == v ? void 0 : v.actionButtonStyle,
                              closeButtonAriaLabel: null == v ? void 0 : v.closeButtonAriaLabel,
                              removeToast: F,
                              toasts: E.filter((e) => e.position == n.position),
                              heights: N.filter((e) => e.position == n.position),
                              setHeights: j,
                              expandByDefault: i,
                              gap: b,
                              expanded: _,
                              swipeDirections: e.swipeDirections,
                            });
                          },
                        ),
                      )
                    : null;
                }),
              )
            );
          }),
          fn = p("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
        function pn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
          return function (r) {
            if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
          };
        }
        "undefined" == typeof window || !window.document || window.document.createElement;
        var mn = o[" useInsertionEffect ".trim().toString()] || it;
        function hn({ prop: e, defaultProp: t, onChange: n = () => {}, caller: o }) {
          const [a, l, i] = (function ({ defaultProp: e, onChange: t }) {
              const [n, o] = r.useState(e),
                a = r.useRef(n),
                l = r.useRef(t);
              return (
                mn(() => {
                  l.current = t;
                }, [t]),
                r.useEffect(() => {
                  a.current !== n && (l.current?.(n), (a.current = n));
                }, [n, a]),
                [n, o, l]
              );
            })({ defaultProp: t, onChange: n }),
            s = void 0 !== e,
            c = s ? e : a;
          {
            const t = r.useRef(void 0 !== e);
            r.useEffect(() => {
              const e = t.current;
              if (e !== s) {
                const t = e ? "controlled" : "uncontrolled",
                  n = s ? "controlled" : "uncontrolled";
                console.warn(
                  `${o} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
                );
              }
              t.current = s;
            }, [s, o]);
          }
          const u = r.useCallback(
            (t) => {
              if (s) {
                const n = (function (e) {
                  return "function" == typeof e;
                })(t)
                  ? t(e)
                  : t;
                n !== e && i.current?.(n);
              } else l(t);
            },
            [s, e, l, i],
          );
          return [c, u];
        }
        function gn(e) {
          const t = e + "CollectionProvider",
            [n, o] = ot(t),
            [a, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
            i = (e) => {
              const { scope: t, children: n } = e,
                o = r.useRef(null),
                l = r.useRef(new Map()).current;
              return (0, Ue.jsx)(a, { scope: t, itemMap: l, collectionRef: o, children: n });
            };
          i.displayName = t;
          const s = e + "CollectionSlot",
            c = We(s),
            u = r.forwardRef((e, t) => {
              const { scope: n, children: r } = e,
                o = Be(t, l(s, n).collectionRef);
              return (0, Ue.jsx)(c, { ref: o, children: r });
            });
          u.displayName = s;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            p = We(d),
            m = r.forwardRef((e, t) => {
              const { scope: n, children: o, ...a } = e,
                i = r.useRef(null),
                s = Be(t, i),
                c = l(d, n);
              return (
                r.useEffect(
                  () => (
                    c.itemMap.set(i, { ref: i, ...a }),
                    () => {
                      c.itemMap.delete(i);
                    }
                  ),
                ),
                (0, Ue.jsx)(p, { [f]: "", ref: s, children: o })
              );
            });
          return (
            (m.displayName = d),
            [
              { Provider: i, Slot: u, ItemSlot: m },
              function (t) {
                const n = l(e + "CollectionConsumer", t);
                return r.useCallback(() => {
                  const e = n.collectionRef.current;
                  if (!e) return [];
                  const t = Array.from(e.querySelectorAll(`[${f}]`));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              o,
            ]
          );
        }
        Symbol("RADIX:SYNC_STATE");
        Map;
        var vn = r.createContext(void 0);
        function yn(e) {
          const t = r.useContext(vn);
          return e || t || "ltr";
        }
        var bn,
          xn = "dismissableLayer.update",
          wn = r.createContext({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          }),
          kn = r.forwardRef((e, t) => {
            const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: o,
                onPointerDownOutside: a,
                onFocusOutside: l,
                onInteractOutside: i,
                onDismiss: s,
                ...c
              } = e,
              u = r.useContext(wn),
              [d, f] = r.useState(null),
              p = d?.ownerDocument ?? globalThis?.document,
              [, m] = r.useState({}),
              h = Be(t, (e) => f(e)),
              g = Array.from(u.layers),
              [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
              y = g.indexOf(v),
              b = d ? g.indexOf(d) : -1,
              x = u.layersWithOutsidePointerEventsDisabled.size > 0,
              w = b >= y,
              k = (function (e, t = globalThis?.document) {
                const n = lt(e),
                  o = r.useRef(!1),
                  a = r.useRef(() => {});
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                        if (e.target && !o.current) {
                          let r = function () {
                            En("dismissableLayer.pointerDownOutside", n, o, { discrete: !0 });
                          };
                          const o = { originalEvent: e };
                          "touch" === e.pointerType
                            ? (t.removeEventListener("click", a.current),
                              (a.current = r),
                              t.addEventListener("click", a.current, { once: !0 }))
                            : r();
                        } else t.removeEventListener("click", a.current);
                        o.current = !1;
                      },
                      r = window.setTimeout(() => {
                        t.addEventListener("pointerdown", e);
                      }, 0);
                    return () => {
                      (window.clearTimeout(r),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", a.current));
                    };
                  }, [t, n]),
                  { onPointerDownCapture: () => (o.current = !0) }
                );
              })((e) => {
                const t = e.target,
                  n = [...u.branches].some((e) => e.contains(t));
                w && !n && (a?.(e), i?.(e), e.defaultPrevented || s?.());
              }, p),
              S = (function (e, t = globalThis?.document) {
                const n = lt(e),
                  o = r.useRef(!1);
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                      e.target &&
                        !o.current &&
                        En(
                          "dismissableLayer.focusOutside",
                          n,
                          { originalEvent: e },
                          { discrete: !1 },
                        );
                    };
                    return (
                      t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                    );
                  }, [t, n]),
                  { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
                );
              })((e) => {
                const t = e.target;
                [...u.branches].some((e) => e.contains(t)) ||
                  (l?.(e), i?.(e), e.defaultPrevented || s?.());
              }, p);
            return (
              (function (e, t = globalThis?.document) {
                const n = lt(e);
                r.useEffect(() => {
                  const e = (e) => {
                    "Escape" === e.key && n(e);
                  };
                  return (
                    t.addEventListener("keydown", e, { capture: !0 }),
                    () => t.removeEventListener("keydown", e, { capture: !0 })
                  );
                }, [n, t]);
              })((e) => {
                b === u.layers.size - 1 &&
                  (o?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
              }, p),
              r.useEffect(() => {
                if (d)
                  return (
                    n &&
                      (0 === u.layersWithOutsidePointerEventsDisabled.size &&
                        ((bn = p.body.style.pointerEvents), (p.body.style.pointerEvents = "none")),
                      u.layersWithOutsidePointerEventsDisabled.add(d)),
                    u.layers.add(d),
                    Sn(),
                    () => {
                      n &&
                        1 === u.layersWithOutsidePointerEventsDisabled.size &&
                        (p.body.style.pointerEvents = bn);
                    }
                  );
              }, [d, p, n, u]),
              r.useEffect(
                () => () => {
                  d &&
                    (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Sn());
                },
                [d, u],
              ),
              r.useEffect(() => {
                const e = () => m({});
                return (
                  document.addEventListener(xn, e), () => document.removeEventListener(xn, e)
                );
              }, []),
              (0, Ue.jsx)(ct.div, {
                ...c,
                ref: h,
                style: { pointerEvents: x ? (w ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: pn(e.onFocusCapture, S.onFocusCapture),
                onBlurCapture: pn(e.onBlurCapture, S.onBlurCapture),
                onPointerDownCapture: pn(e.onPointerDownCapture, k.onPointerDownCapture),
              })
            );
          });
        function Sn() {
          const e = new CustomEvent(xn);
          document.dispatchEvent(e);
        }
        function En(e, t, n, { discrete: r }) {
          const o = n.originalEvent.target,
            a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
          (t && o.addEventListener(e, t, { once: !0 }), r ? ut(o, a) : o.dispatchEvent(a));
        }
        ((kn.displayName = "DismissableLayer"),
          (r.forwardRef((e, t) => {
            const n = r.useContext(wn),
              o = r.useRef(null),
              a = Be(t, o);
            return (
              r.useEffect(() => {
                const e = o.current;
                if (e)
                  return (
                    n.branches.add(e),
                    () => {
                      n.branches.delete(e);
                    }
                  );
              }, [n.branches]),
              (0, Ue.jsx)(ct.div, { ...e, ref: a })
            );
          }).displayName = "DismissableLayerBranch"));
        var Cn = 0;
        function Nn() {
          r.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return (
              document.body.insertAdjacentElement("afterbegin", e[0] ?? jn()),
              document.body.insertAdjacentElement("beforeend", e[1] ?? jn()),
              Cn++,
              () => {
                (1 === Cn &&
                  document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()),
                  Cn--);
              }
            );
          }, []);
        }
        function jn() {
          const e = document.createElement("span");
          return (
            e.setAttribute("data-radix-focus-guard", ""),
            (e.tabIndex = 0),
            (e.style.outline = "none"),
            (e.style.opacity = "0"),
            (e.style.position = "fixed"),
            (e.style.pointerEvents = "none"),
            e
          );
        }
        var _n = "focusScope.autoFocusOnMount",
          Pn = "focusScope.autoFocusOnUnmount",
          zn = { bubbles: !1, cancelable: !0 },
          Tn = r.forwardRef((e, t) => {
            const {
                loop: n = !1,
                trapped: o = !1,
                onMountAutoFocus: a,
                onUnmountAutoFocus: l,
                ...i
              } = e,
              [s, c] = r.useState(null),
              u = lt(a),
              d = lt(l),
              f = r.useRef(null),
              p = Be(t, (e) => c(e)),
              m = r.useRef({
                paused: !1,
                pause() {
                  this.paused = !0;
                },
                resume() {
                  this.paused = !1;
                },
              }).current;
            (r.useEffect(() => {
              if (o) {
                let e = function (e) {
                    if (m.paused || !s) return;
                    const t = e.target;
                    s.contains(t) ? (f.current = t) : Ln(f.current, { select: !0 });
                  },
                  t = function (e) {
                    if (m.paused || !s) return;
                    const t = e.relatedTarget;
                    null !== t && (s.contains(t) || Ln(f.current, { select: !0 }));
                  },
                  n = function (e) {
                    if (document.activeElement === document.body)
                      for (const t of e) t.removedNodes.length > 0 && Ln(s);
                  };
                (document.addEventListener("focusin", e), document.addEventListener("focusout", t));
                const r = new MutationObserver(n);
                return (
                  s && r.observe(s, { childList: !0, subtree: !0 }),
                  () => {
                    (document.removeEventListener("focusin", e),
                      document.removeEventListener("focusout", t),
                      r.disconnect());
                  }
                );
              }
            }, [o, s, m.paused]),
              r.useEffect(() => {
                if (s) {
                  Dn.add(m);
                  const e = document.activeElement;
                  if (!s.contains(e)) {
                    const t = new CustomEvent(_n, zn);
                    (s.addEventListener(_n, u),
                      s.dispatchEvent(t),
                      t.defaultPrevented ||
                        ((function (e, { select: t = !1 } = {}) {
                          const n = document.activeElement;
                          for (const r of e)
                            if ((Ln(r, { select: t }), document.activeElement !== n)) return;
                        })(
                          Mn(s).filter((e) => "A" !== e.tagName),
                          { select: !0 },
                        ),
                        document.activeElement === e && Ln(s)));
                  }
                  return () => {
                    (s.removeEventListener(_n, u),
                      setTimeout(() => {
                        const t = new CustomEvent(Pn, zn);
                        (s.addEventListener(Pn, d),
                          s.dispatchEvent(t),
                          t.defaultPrevented || Ln(e ?? document.body, { select: !0 }),
                          s.removeEventListener(Pn, d),
                          Dn.remove(m));
                      }, 0));
                  };
                }
              }, [s, u, d, m]));
            const h = r.useCallback(
              (e) => {
                if (!n && !o) return;
                if (m.paused) return;
                const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                  r = document.activeElement;
                if (t && r) {
                  const t = e.currentTarget,
                    [o, a] = (function (e) {
                      const t = Mn(e);
                      return [Rn(t, e), Rn(t.reverse(), e)];
                    })(t);
                  o && a
                    ? e.shiftKey || r !== a
                      ? e.shiftKey && r === o && (e.preventDefault(), n && Ln(a, { select: !0 }))
                      : (e.preventDefault(), n && Ln(o, { select: !0 }))
                    : r === t && e.preventDefault();
                }
              },
              [n, o, m.paused],
            );
            return (0, Ue.jsx)(ct.div, { tabIndex: -1, ...i, ref: p, onKeyDown: h });
          });
        function Mn(e) {
          const t = [],
            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
              acceptNode: (e) => {
                const t = "INPUT" === e.tagName && "hidden" === e.type;
                return e.disabled || e.hidden || t
                  ? NodeFilter.FILTER_SKIP
                  : e.tabIndex >= 0
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_SKIP;
              },
            });
          for (; n.nextNode(); ) t.push(n.currentNode);
          return t;
        }
        function Rn(e, t) {
          for (const n of e) if (!On(n, { upTo: t })) return n;
        }
        function On(e, { upTo: t }) {
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          for (; e; ) {
            if (void 0 !== t && e === t) return !1;
            if ("none" === getComputedStyle(e).display) return !0;
            e = e.parentElement;
          }
          return !1;
        }
        function Ln(e, { select: t = !1 } = {}) {
          if (e && e.focus) {
            const n = document.activeElement;
            (e.focus({ preventScroll: !0 }),
              e !== n &&
                (function (e) {
                  return e instanceof HTMLInputElement && "select" in e;
                })(e) &&
                t &&
                e.select());
          }
        }
        Tn.displayName = "FocusScope";
        var Dn = (function () {
          let e = [];
          return {
            add(t) {
              const n = e[0];
              (t !== n && n?.pause(), (e = An(e, t)), e.unshift(t));
            },
            remove(t) {
              ((e = An(e, t)), e[0]?.resume());
            },
          };
        })();
        function An(e, t) {
          const n = [...e],
            r = n.indexOf(t);
          return (-1 !== r && n.splice(r, 1), n);
        }
        var Fn = o[" useId ".trim().toString()] || (() => {}),
          In = 0;
        function Hn(e) {
          const [t, n] = r.useState(Fn());
          return (
            it(() => {
              e || n((e) => e ?? String(In++));
            }, [e]),
            e || (t ? `radix-${t}` : "")
          );
        }
        const $n = ["top", "right", "bottom", "left"],
          Bn = Math.min,
          Un = Math.max,
          Wn = Math.round,
          Vn = Math.floor,
          qn = (e) => ({ x: e, y: e }),
          Kn = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function Qn(e, t, n) {
          return Un(e, Bn(t, n));
        }
        function Gn(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function Yn(e) {
          return e.split("-")[0];
        }
        function Xn(e) {
          return e.split("-")[1];
        }
        function Zn(e) {
          return "x" === e ? "y" : "x";
        }
        function Jn(e) {
          return "y" === e ? "height" : "width";
        }
        function er(e) {
          const t = e[0];
          return "t" === t || "b" === t ? "y" : "x";
        }
        function tr(e) {
          return Zn(er(e));
        }
        function nr(e) {
          return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
        }
        const rr = ["left", "right"],
          or = ["right", "left"],
          ar = ["top", "bottom"],
          lr = ["bottom", "top"];
        function ir(e) {
          const t = Yn(e);
          return Kn[t] + e.slice(t.length);
        }
        function sr(e) {
          return "number" != typeof e
            ? (function (e) {
                return { top: 0, right: 0, bottom: 0, left: 0, ...e };
              })(e)
            : { top: e, right: e, bottom: e, left: e };
        }
        function cr(e) {
          const { x: t, y: n, width: r, height: o } = e;
          return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
        }
        function ur(e, t, n) {
          let { reference: r, floating: o } = e;
          const a = er(t),
            l = tr(t),
            i = Jn(l),
            s = Yn(t),
            c = "y" === a,
            u = r.x + r.width / 2 - o.width / 2,
            d = r.y + r.height / 2 - o.height / 2,
            f = r[i] / 2 - o[i] / 2;
          let p;
          switch (s) {
            case "top":
              p = { x: u, y: r.y - o.height };
              break;
            case "bottom":
              p = { x: u, y: r.y + r.height };
              break;
            case "right":
              p = { x: r.x + r.width, y: d };
              break;
            case "left":
              p = { x: r.x - o.width, y: d };
              break;
            default:
              p = { x: r.x, y: r.y };
          }
          switch (Xn(t)) {
            case "start":
              p[l] -= f * (n && c ? -1 : 1);
              break;
            case "end":
              p[l] += f * (n && c ? -1 : 1);
          }
          return p;
        }
        async function dr(e, t) {
          var n;
          void 0 === t && (t = {});
          const { x: r, y: o, platform: a, rects: l, elements: i, strategy: s } = e,
            {
              boundary: c = "clippingAncestors",
              rootBoundary: u = "viewport",
              elementContext: d = "floating",
              altBoundary: f = !1,
              padding: p = 0,
            } = Gn(t, e),
            m = sr(p),
            h = i[f ? ("floating" === d ? "reference" : "floating") : d],
            g = cr(
              await a.getClippingRect({
                element:
                  null == (n = await (null == a.isElement ? void 0 : a.isElement(h))) || n
                    ? h
                    : h.contextElement ||
                      (await (null == a.getDocumentElement
                        ? void 0
                        : a.getDocumentElement(i.floating))),
                boundary: c,
                rootBoundary: u,
                strategy: s,
              }),
            ),
            v =
              "floating" === d
                ? { x: r, y: o, width: l.floating.width, height: l.floating.height }
                : l.reference,
            y = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(i.floating)),
            b = ((await (null == a.isElement ? void 0 : a.isElement(y))) &&
              (await (null == a.getScale ? void 0 : a.getScale(y)))) || { x: 1, y: 1 },
            x = cr(
              a.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: i,
                    rect: v,
                    offsetParent: y,
                    strategy: s,
                  })
                : v,
            );
          return {
            top: (g.top - x.top + m.top) / b.y,
            bottom: (x.bottom - g.bottom + m.bottom) / b.y,
            left: (g.left - x.left + m.left) / b.x,
            right: (x.right - g.right + m.right) / b.x,
          };
        }
        function fr(e, t) {
          return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width,
          };
        }
        function pr(e) {
          return $n.some((t) => e[t] >= 0);
        }
        const mr = new Set(["left", "top"]);
        function hr() {
          return "undefined" != typeof window;
        }
        function gr(e) {
          return br(e) ? (e.nodeName || "").toLowerCase() : "#document";
        }
        function vr(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
        }
        function yr(e) {
          var t;
          return null == (t = (br(e) ? e.ownerDocument : e.document) || window.document)
            ? void 0
            : t.documentElement;
        }
        function br(e) {
          return !!hr() && (e instanceof Node || e instanceof vr(e).Node);
        }
        function xr(e) {
          return !!hr() && (e instanceof Element || e instanceof vr(e).Element);
        }
        function wr(e) {
          return !!hr() && (e instanceof HTMLElement || e instanceof vr(e).HTMLElement);
        }
        function kr(e) {
          return (
            !(!hr() || "undefined" == typeof ShadowRoot) &&
            (e instanceof ShadowRoot || e instanceof vr(e).ShadowRoot)
          );
        }
        function Sr(e) {
          const { overflow: t, overflowX: n, overflowY: r, display: o } = Rr(e);
          return (
            /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
          );
        }
        function Er(e) {
          return /^(table|td|th)$/.test(gr(e));
        }
        function Cr(e) {
          try {
            if (e.matches(":popover-open")) return !0;
          } catch (e) {}
          try {
            return e.matches(":modal");
          } catch (e) {
            return !1;
          }
        }
        const Nr = /transform|translate|scale|rotate|perspective|filter/,
          jr = /paint|layout|strict|content/,
          _r = (e) => !!e && "none" !== e;
        let Pr;
        function zr(e) {
          const t = xr(e) ? Rr(e) : e;
          return (
            _r(t.transform) ||
            _r(t.translate) ||
            _r(t.scale) ||
            _r(t.rotate) ||
            _r(t.perspective) ||
            (!Tr() && (_r(t.backdropFilter) || _r(t.filter))) ||
            Nr.test(t.willChange || "") ||
            jr.test(t.contain || "")
          );
        }
        function Tr() {
          return (
            null == Pr &&
              (Pr =
                "undefined" != typeof CSS &&
                CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")),
            Pr
          );
        }
        function Mr(e) {
          return /^(html|body|#document)$/.test(gr(e));
        }
        function Rr(e) {
          return vr(e).getComputedStyle(e);
        }
        function Or(e) {
          return xr(e)
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
        }
        function Lr(e) {
          if ("html" === gr(e)) return e;
          const t = e.assignedSlot || e.parentNode || (kr(e) && e.host) || yr(e);
          return kr(t) ? t.host : t;
        }
        function Dr(e) {
          const t = Lr(e);
          return Mr(t)
            ? e.ownerDocument
              ? e.ownerDocument.body
              : e.body
            : wr(t) && Sr(t)
              ? t
              : Dr(t);
        }
        function Ar(e, t, n) {
          var r;
          (void 0 === t && (t = []), void 0 === n && (n = !0));
          const o = Dr(e),
            a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = vr(o);
          if (a) {
            const e = Fr(l);
            return t.concat(l, l.visualViewport || [], Sr(o) ? o : [], e && n ? Ar(e) : []);
          }
          return t.concat(o, Ar(o, [], n));
        }
        function Fr(e) {
          return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
        }
        function Ir(e) {
          const t = Rr(e);
          let n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0;
          const o = wr(e),
            a = o ? e.offsetWidth : n,
            l = o ? e.offsetHeight : r,
            i = Wn(n) !== a || Wn(r) !== l;
          return (i && ((n = a), (r = l)), { width: n, height: r, $: i });
        }
        function Hr(e) {
          return xr(e) ? e : e.contextElement;
        }
        function $r(e) {
          const t = Hr(e);
          if (!wr(t)) return qn(1);
          const n = t.getBoundingClientRect(),
            { width: r, height: o, $: a } = Ir(t);
          let l = (a ? Wn(n.width) : n.width) / r,
            i = (a ? Wn(n.height) : n.height) / o;
          return (
            (l && Number.isFinite(l)) || (l = 1),
            (i && Number.isFinite(i)) || (i = 1),
            { x: l, y: i }
          );
        }
        const Br = qn(0);
        function Ur(e) {
          const t = vr(e);
          return Tr() && t.visualViewport
            ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
            : Br;
        }
        function Wr(e, t, n, r) {
          (void 0 === t && (t = !1), void 0 === n && (n = !1));
          const o = e.getBoundingClientRect(),
            a = Hr(e);
          let l = qn(1);
          t && (r ? xr(r) && (l = $r(r)) : (l = $r(e)));
          const i = (function (e, t, n) {
            return (void 0 === t && (t = !1), !(!n || (t && n !== vr(e))) && t);
          })(a, n, r)
            ? Ur(a)
            : qn(0);
          let s = (o.left + i.x) / l.x,
            c = (o.top + i.y) / l.y,
            u = o.width / l.x,
            d = o.height / l.y;
          if (a) {
            const e = vr(a),
              t = r && xr(r) ? vr(r) : r;
            let n = e,
              o = Fr(n);
            for (; o && r && t !== n; ) {
              const e = $r(o),
                t = o.getBoundingClientRect(),
                r = Rr(o),
                a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
              ((s *= e.x),
                (c *= e.y),
                (u *= e.x),
                (d *= e.y),
                (s += a),
                (c += l),
                (n = vr(o)),
                (o = Fr(n)));
            }
          }
          return cr({ width: u, height: d, x: s, y: c });
        }
        function Vr(e, t) {
          const n = Or(e).scrollLeft;
          return t ? t.left + n : Wr(yr(e)).left + n;
        }
        function qr(e, t) {
          const n = e.getBoundingClientRect();
          return { x: n.left + t.scrollLeft - Vr(e, n), y: n.top + t.scrollTop };
        }
        function Kr(e, t, n) {
          let r;
          if ("viewport" === t)
            r = (function (e, t) {
              const n = vr(e),
                r = yr(e),
                o = n.visualViewport;
              let a = r.clientWidth,
                l = r.clientHeight,
                i = 0,
                s = 0;
              if (o) {
                ((a = o.width), (l = o.height));
                const e = Tr();
                (!e || (e && "fixed" === t)) && ((i = o.offsetLeft), (s = o.offsetTop));
              }
              const c = Vr(r);
              if (c <= 0) {
                const e = r.ownerDocument,
                  t = e.body,
                  n = getComputedStyle(t),
                  o =
                    ("CSS1Compat" === e.compatMode &&
                      parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                    0,
                  l = Math.abs(r.clientWidth - t.clientWidth - o);
                l <= 25 && (a -= l);
              } else c <= 25 && (a += c);
              return { width: a, height: l, x: i, y: s };
            })(e, n);
          else if ("document" === t)
            r = (function (e) {
              const t = yr(e),
                n = Or(e),
                r = e.ownerDocument.body,
                o = Un(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                a = Un(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
              let l = -n.scrollLeft + Vr(e);
              const i = -n.scrollTop;
              return (
                "rtl" === Rr(r).direction && (l += Un(t.clientWidth, r.clientWidth) - o),
                { width: o, height: a, x: l, y: i }
              );
            })(yr(e));
          else if (xr(t))
            r = (function (e, t) {
              const n = Wr(e, !0, "fixed" === t),
                r = n.top + e.clientTop,
                o = n.left + e.clientLeft,
                a = wr(e) ? $r(e) : qn(1);
              return {
                width: e.clientWidth * a.x,
                height: e.clientHeight * a.y,
                x: o * a.x,
                y: r * a.y,
              };
            })(t, n);
          else {
            const n = Ur(e);
            r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
          }
          return cr(r);
        }
        function Qr(e, t) {
          const n = Lr(e);
          return !(n === t || !xr(n) || Mr(n)) && ("fixed" === Rr(n).position || Qr(n, t));
        }
        function Gr(e, t, n) {
          const r = wr(t),
            o = yr(t),
            a = "fixed" === n,
            l = Wr(e, !0, a, t);
          let i = { scrollLeft: 0, scrollTop: 0 };
          const s = qn(0);
          function c() {
            s.x = Vr(o);
          }
          if (r || (!r && !a))
            if ((("body" !== gr(t) || Sr(o)) && (i = Or(t)), r)) {
              const e = Wr(t, !0, a, t);
              ((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop));
            } else o && c();
          a && !r && o && c();
          const u = !o || r || a ? qn(0) : qr(o, i);
          return {
            x: l.left + i.scrollLeft - s.x - u.x,
            y: l.top + i.scrollTop - s.y - u.y,
            width: l.width,
            height: l.height,
          };
        }
        function Yr(e) {
          return "static" === Rr(e).position;
        }
        function Xr(e, t) {
          if (!wr(e) || "fixed" === Rr(e).position) return null;
          if (t) return t(e);
          let n = e.offsetParent;
          return (yr(e) === n && (n = n.ownerDocument.body), n);
        }
        function Zr(e, t) {
          const n = vr(e);
          if (Cr(e)) return n;
          if (!wr(e)) {
            let t = Lr(e);
            for (; t && !Mr(t); ) {
              if (xr(t) && !Yr(t)) return t;
              t = Lr(t);
            }
            return n;
          }
          let r = Xr(e, t);
          for (; r && Er(r) && Yr(r); ) r = Xr(r, t);
          return r && Mr(r) && Yr(r) && !zr(r)
            ? n
            : r ||
                (function (e) {
                  let t = Lr(e);
                  for (; wr(t) && !Mr(t); ) {
                    if (zr(t)) return t;
                    if (Cr(t)) return null;
                    t = Lr(t);
                  }
                  return null;
                })(e) ||
                n;
        }
        const Jr = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
            const a = "fixed" === o,
              l = yr(r),
              i = !!t && Cr(t.floating);
            if (r === l || (i && a)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              c = qn(1);
            const u = qn(0),
              d = wr(r);
            if ((d || (!d && !a)) && (("body" !== gr(r) || Sr(l)) && (s = Or(r)), d)) {
              const e = Wr(r);
              ((c = $r(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
            }
            const f = !l || d || a ? qn(0) : qr(l, s);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - s.scrollLeft * c.x + u.x + f.x,
              y: n.y * c.y - s.scrollTop * c.y + u.y + f.y,
            };
          },
          getDocumentElement: yr,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
            const a = [
                ...("clippingAncestors" === n
                  ? Cr(t)
                    ? []
                    : (function (e, t) {
                        const n = t.get(e);
                        if (n) return n;
                        let r = Ar(e, [], !1).filter((e) => xr(e) && "body" !== gr(e)),
                          o = null;
                        const a = "fixed" === Rr(e).position;
                        let l = a ? Lr(e) : e;
                        for (; xr(l) && !Mr(l); ) {
                          const t = Rr(l),
                            n = zr(l);
                          (n || "fixed" !== t.position || (o = null),
                            (
                              a
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    o &&
                                    ("absolute" === o.position || "fixed" === o.position)) ||
                                  (Sr(l) && !n && Qr(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = Lr(l)));
                        }
                        return (t.set(e, r), r);
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = Kr(t, a[0], o);
            let i = l.top,
              s = l.right,
              c = l.bottom,
              u = l.left;
            for (let e = 1; e < a.length; e++) {
              const n = Kr(t, a[e], o);
              ((i = Un(n.top, i)),
                (s = Bn(n.right, s)),
                (c = Bn(n.bottom, c)),
                (u = Un(n.left, u)));
            }
            return { width: s - u, height: c - i, x: u, y: i };
          },
          getOffsetParent: Zr,
          getElementRects: async function (e) {
            const t = this.getOffsetParent || Zr,
              n = this.getDimensions,
              r = await n(e.floating);
            return {
              reference: Gr(e.reference, await t(e.floating), e.strategy),
              floating: { x: 0, y: 0, width: r.width, height: r.height },
            };
          },
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            const { width: t, height: n } = Ir(e);
            return { width: t, height: n };
          },
          getScale: $r,
          isElement: xr,
          isRTL: function (e) {
            return "rtl" === Rr(e).direction;
          },
        };
        function eo(e, t) {
          return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        }
        const to = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r;
                  const {
                      placement: o,
                      middlewareData: a,
                      rects: l,
                      initialPlacement: i,
                      platform: s,
                      elements: c,
                    } = t,
                    {
                      mainAxis: u = !0,
                      crossAxis: d = !0,
                      fallbackPlacements: f,
                      fallbackStrategy: p = "bestFit",
                      fallbackAxisSideDirection: m = "none",
                      flipAlignment: h = !0,
                      ...g
                    } = Gn(e, t);
                  if (null != (n = a.arrow) && n.alignmentOffset) return {};
                  const v = Yn(o),
                    y = er(i),
                    b = Yn(i) === i,
                    x = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                    w =
                      f ||
                      (b || !h
                        ? [ir(i)]
                        : (function (e) {
                            const t = ir(e);
                            return [nr(e), t, nr(t)];
                          })(i)),
                    k = "none" !== m;
                  !f &&
                    k &&
                    w.push(
                      ...(function (e, t, n, r) {
                        const o = Xn(e);
                        let a = (function (e, t, n) {
                          switch (e) {
                            case "top":
                            case "bottom":
                              return n ? (t ? or : rr) : t ? rr : or;
                            case "left":
                            case "right":
                              return t ? ar : lr;
                            default:
                              return [];
                          }
                        })(Yn(e), "start" === n, r);
                        return (
                          o && ((a = a.map((e) => e + "-" + o)), t && (a = a.concat(a.map(nr)))), a
                        );
                      })(i, h, m, x),
                    );
                  const S = [i, ...w],
                    E = await s.detectOverflow(t, g),
                    C = [];
                  let N = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                  if ((u && C.push(E[v]), d)) {
                    const e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      const r = Xn(e),
                        o = tr(e),
                        a = Jn(o);
                      let l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top";
                      return (t.reference[a] > t.floating[a] && (l = ir(l)), [l, ir(l)]);
                    })(o, l, x);
                    C.push(E[e[0]], E[e[1]]);
                  }
                  if (((N = [...N, { placement: o, overflows: C }]), !C.every((e) => e <= 0))) {
                    var j, _;
                    const e = ((null == (j = a.flip) ? void 0 : j.index) || 0) + 1,
                      t = S[e];
                    if (
                      t &&
                      ("alignment" !== d ||
                        y === er(t) ||
                        N.every((e) => er(e.placement) !== y || e.overflows[0] > 0))
                    )
                      return { data: { index: e, overflows: N }, reset: { placement: t } };
                    let n =
                      null ==
                      (_ = N.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1],
                      )[0])
                        ? void 0
                        : _.placement;
                    if (!n)
                      switch (p) {
                        case "bestFit": {
                          var P;
                          const e =
                            null ==
                            (P = N.filter((e) => {
                              if (k) {
                                const t = er(e.placement);
                                return t === y || "y" === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : P[0];
                          e && (n = e);
                          break;
                        }
                        case "initialPlacement":
                          n = i;
                      }
                    if (o !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          },
          no = (e) => ({
            name: "arrow",
            options: e,
            async fn(t) {
              const {
                  x: n,
                  y: r,
                  placement: o,
                  rects: a,
                  platform: l,
                  elements: i,
                  middlewareData: s,
                } = t,
                { element: c, padding: u = 0 } = Gn(e, t) || {};
              if (null == c) return {};
              const d = sr(u),
                f = { x: n, y: r },
                p = tr(o),
                m = Jn(p),
                h = await l.getDimensions(c),
                g = "y" === p,
                v = g ? "top" : "left",
                y = g ? "bottom" : "right",
                b = g ? "clientHeight" : "clientWidth",
                x = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
                w = f[p] - a.reference[p],
                k = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c));
              let S = k ? k[b] : 0;
              (S && (await (null == l.isElement ? void 0 : l.isElement(k)))) ||
                (S = i.floating[b] || a.floating[m]);
              const E = x / 2 - w / 2,
                C = S / 2 - h[m] / 2 - 1,
                N = Bn(d[v], C),
                j = Bn(d[y], C),
                _ = N,
                P = S - h[m] - j,
                z = S / 2 - h[m] / 2 + E,
                T = Qn(_, z, P),
                M =
                  !s.arrow &&
                  null != Xn(o) &&
                  z !== T &&
                  a.reference[m] / 2 - (z < _ ? N : j) - h[m] / 2 < 0,
                R = M ? (z < _ ? z - _ : z - P) : 0;
              return {
                [p]: f[p] + R,
                data: { [p]: T, centerOffset: z - T - R, ...(M && { alignmentOffset: R }) },
                reset: M,
              };
            },
          }),
          ro = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  const { x: n, y: r, placement: o, rects: a, middlewareData: l } = t,
                    { offset: i = 0, mainAxis: s = !0, crossAxis: c = !0 } = Gn(e, t),
                    u = { x: n, y: r },
                    d = er(o),
                    f = Zn(d);
                  let p = u[f],
                    m = u[d];
                  const h = Gn(i, t),
                    g =
                      "number" == typeof h
                        ? { mainAxis: h, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...h };
                  if (s) {
                    const e = "y" === f ? "height" : "width",
                      t = a.reference[f] - a.floating[e] + g.mainAxis,
                      n = a.reference[f] + a.reference[e] - g.mainAxis;
                    p < t ? (p = t) : p > n && (p = n);
                  }
                  if (c) {
                    var v, y;
                    const e = "y" === f ? "width" : "height",
                      t = mr.has(Yn(o)),
                      n =
                        a.reference[d] -
                        a.floating[e] +
                        ((t && (null == (v = l.offset) ? void 0 : v[d])) || 0) +
                        (t ? 0 : g.crossAxis),
                      r =
                        a.reference[d] +
                        a.reference[e] +
                        (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) -
                        (t ? g.crossAxis : 0);
                    m < n ? (m = n) : m > r && (m = r);
                  }
                  return { [f]: p, [d]: m };
                },
              }
            );
          },
          oo = (e, t, n) => {
            const r = new Map(),
              o = { platform: Jr, ...n },
              a = { ...o.platform, _c: r };
            return (async (e, t, n) => {
              const {
                  placement: r = "bottom",
                  strategy: o = "absolute",
                  middleware: a = [],
                  platform: l,
                } = n,
                i = l.detectOverflow ? l : { ...l, detectOverflow: dr },
                s = await (null == l.isRTL ? void 0 : l.isRTL(t));
              let c = await l.getElementRects({ reference: e, floating: t, strategy: o }),
                { x: u, y: d } = ur(c, r, s),
                f = r,
                p = 0;
              const m = {};
              for (let n = 0; n < a.length; n++) {
                const h = a[n];
                if (!h) continue;
                const { name: g, fn: v } = h,
                  {
                    x: y,
                    y: b,
                    data: x,
                    reset: w,
                  } = await v({
                    x: u,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: m,
                    rects: c,
                    platform: i,
                    elements: { reference: e, floating: t },
                  });
                ((u = null != y ? y : u),
                  (d = null != b ? b : d),
                  (m[g] = { ...m[g], ...x }),
                  w &&
                    p < 50 &&
                    (p++,
                    "object" == typeof w &&
                      (w.placement && (f = w.placement),
                      w.rects &&
                        (c =
                          !0 === w.rects
                            ? await l.getElementRects({ reference: e, floating: t, strategy: o })
                            : w.rects),
                      ({ x: u, y: d } = ur(c, f, s))),
                    (n = -1)));
              }
              return { x: u, y: d, placement: f, strategy: o, middlewareData: m };
            })(e, t, { ...o, platform: a });
          };
        var ao = "undefined" != typeof document ? r.useLayoutEffect : function () {};
        function lo(e, t) {
          if (e === t) return !0;
          if (typeof e != typeof t) return !1;
          if ("function" == typeof e && e.toString() === t.toString()) return !0;
          let n, r, o;
          if (e && t && "object" == typeof e) {
            if (Array.isArray(e)) {
              if (((n = e.length), n !== t.length)) return !1;
              for (r = n; 0 !== r--; ) if (!lo(e[r], t[r])) return !1;
              return !0;
            }
            if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
            for (r = n; 0 !== r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
            for (r = n; 0 !== r--; ) {
              const n = o[r];
              if (!(("_owner" === n && e.$$typeof) || lo(e[n], t[n]))) return !1;
            }
            return !0;
          }
          return e != e && t != t;
        }
        function io(e) {
          return "undefined" == typeof window
            ? 1
            : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function so(e, t) {
          const n = io(e);
          return Math.round(t * n) / n;
        }
        function co(e) {
          const t = r.useRef(e);
          return (
            ao(() => {
              t.current = e;
            }),
            t
          );
        }
        const uo = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = 0),
                {
                  name: "offset",
                  options: e,
                  async fn(t) {
                    var n, r;
                    const { x: o, y: a, placement: l, middlewareData: i } = t,
                      s = await (async function (e, t) {
                        const { placement: n, platform: r, elements: o } = e,
                          a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                          l = Yn(n),
                          i = Xn(n),
                          s = "y" === er(n),
                          c = mr.has(l) ? -1 : 1,
                          u = a && s ? -1 : 1,
                          d = Gn(t, e);
                        let {
                          mainAxis: f,
                          crossAxis: p,
                          alignmentAxis: m,
                        } = "number" == typeof d
                          ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                          : {
                              mainAxis: d.mainAxis || 0,
                              crossAxis: d.crossAxis || 0,
                              alignmentAxis: d.alignmentAxis,
                            };
                        return (
                          i && "number" == typeof m && (p = "end" === i ? -1 * m : m),
                          s ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
                        );
                      })(t, e);
                    return l === (null == (n = i.offset) ? void 0 : n.placement) &&
                      null != (r = i.arrow) &&
                      r.alignmentOffset
                      ? {}
                      : { x: o + s.x, y: a + s.y, data: { ...s, placement: l } };
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          fo = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "shift",
                  options: e,
                  async fn(t) {
                    const { x: n, y: r, placement: o, platform: a } = t,
                      {
                        mainAxis: l = !0,
                        crossAxis: i = !1,
                        limiter: s = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...c
                      } = Gn(e, t),
                      u = { x: n, y: r },
                      d = await a.detectOverflow(t, c),
                      f = er(Yn(o)),
                      p = Zn(f);
                    let m = u[p],
                      h = u[f];
                    if (l) {
                      const e = "y" === p ? "bottom" : "right";
                      m = Qn(m + d["y" === p ? "top" : "left"], m, m - d[e]);
                    }
                    if (i) {
                      const e = "y" === f ? "bottom" : "right";
                      h = Qn(h + d["y" === f ? "top" : "left"], h, h - d[e]);
                    }
                    const g = s.fn({ ...t, [p]: m, [f]: h });
                    return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [p]: l, [f]: i } } };
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          po = (e, t) => ({ fn: ro(e).fn, options: [e, t] }),
          mo = (e, t) => {
            const n = to(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          ho = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "size",
                  options: e,
                  async fn(t) {
                    var n, r;
                    const { placement: o, rects: a, platform: l, elements: i } = t,
                      { apply: s = () => {}, ...c } = Gn(e, t),
                      u = await l.detectOverflow(t, c),
                      d = Yn(o),
                      f = Xn(o),
                      p = "y" === er(o),
                      { width: m, height: h } = a.floating;
                    let g, v;
                    "top" === d || "bottom" === d
                      ? ((g = d),
                        (v =
                          f ===
                          ((await (null == l.isRTL ? void 0 : l.isRTL(i.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((v = d), (g = "end" === f ? "top" : "bottom"));
                    const y = h - u.top - u.bottom,
                      b = m - u.left - u.right,
                      x = Bn(h - u[g], y),
                      w = Bn(m - u[v], b),
                      k = !t.middlewareData.shift;
                    let S = x,
                      E = w;
                    if (
                      (null != (n = t.middlewareData.shift) && n.enabled.x && (E = b),
                      null != (r = t.middlewareData.shift) && r.enabled.y && (S = y),
                      k && !f)
                    ) {
                      const e = Un(u.left, 0),
                        t = Un(u.right, 0),
                        n = Un(u.top, 0),
                        r = Un(u.bottom, 0);
                      p
                        ? (E = m - 2 * (0 !== e || 0 !== t ? e + t : Un(u.left, u.right)))
                        : (S = h - 2 * (0 !== n || 0 !== r ? n + r : Un(u.top, u.bottom)));
                    }
                    await s({ ...t, availableWidth: E, availableHeight: S });
                    const C = await l.getDimensions(i.floating);
                    return m !== C.width || h !== C.height ? { reset: { rects: !0 } } : {};
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          go = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    const { rects: n, platform: r } = t,
                      { strategy: o = "referenceHidden", ...a } = Gn(e, t);
                    switch (o) {
                      case "referenceHidden": {
                        const e = fr(
                          await r.detectOverflow(t, { ...a, elementContext: "reference" }),
                          n.reference,
                        );
                        return { data: { referenceHiddenOffsets: e, referenceHidden: pr(e) } };
                      }
                      case "escaped": {
                        const e = fr(
                          await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                          n.floating,
                        );
                        return { data: { escapedOffsets: e, escaped: pr(e) } };
                      }
                      default:
                        return {};
                    }
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          vo = (e, t) => {
            const n = ((e) => ({
              name: "arrow",
              options: e,
              fn(t) {
                const { element: n, padding: r } = "function" == typeof e ? e(t) : e;
                return n && ((o = n), {}.hasOwnProperty.call(o, "current"))
                  ? null != n.current
                    ? no({ element: n.current, padding: r }).fn(t)
                    : {}
                  : n
                    ? no({ element: n, padding: r }).fn(t)
                    : {};
                var o;
              },
            }))(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          };
        var yo = r.forwardRef((e, t) => {
          const { children: n, width: r = 10, height: o = 5, ...a } = e;
          return (0, Ue.jsx)(ct.svg, {
            ...a,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, Ue.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
        yo.displayName = "Arrow";
        var bo = yo,
          xo = "Popper",
          [wo, ko] = ot(xo),
          [So, Eo] = wo(xo),
          Co = (e) => {
            const { __scopePopper: t, children: n } = e,
              [o, a] = r.useState(null);
            return (0, Ue.jsx)(So, { scope: t, anchor: o, onAnchorChange: a, children: n });
          };
        Co.displayName = xo;
        var No = "PopperAnchor",
          jo = r.forwardRef((e, t) => {
            const { __scopePopper: n, virtualRef: o, ...a } = e,
              l = Eo(No, n),
              i = r.useRef(null),
              s = Be(t, i),
              c = r.useRef(null);
            return (
              r.useEffect(() => {
                const e = c.current;
                ((c.current = o?.current || i.current),
                  e !== c.current && l.onAnchorChange(c.current));
              }),
              o ? null : (0, Ue.jsx)(ct.div, { ...a, ref: s })
            );
          });
        jo.displayName = No;
        var _o = "PopperContent",
          [Po, zo] = wo(_o),
          To = r.forwardRef((e, t) => {
            const {
                __scopePopper: n,
                side: o = "bottom",
                sideOffset: a = 0,
                align: l = "center",
                alignOffset: i = 0,
                arrowPadding: s = 0,
                avoidCollisions: c = !0,
                collisionBoundary: u = [],
                collisionPadding: d = 0,
                sticky: f = "partial",
                hideWhenDetached: p = !1,
                updatePositionStrategy: m = "optimized",
                onPlaced: h,
                ...g
              } = e,
              v = Eo(_o, n),
              [y, b] = r.useState(null),
              x = Be(t, (e) => b(e)),
              [w, k] = r.useState(null),
              S = (function (e) {
                const [t, n] = r.useState(void 0);
                return (
                  it(() => {
                    if (e) {
                      n({ width: e.offsetWidth, height: e.offsetHeight });
                      const t = new ResizeObserver((t) => {
                        if (!Array.isArray(t)) return;
                        if (!t.length) return;
                        const r = t[0];
                        let o, a;
                        if ("borderBoxSize" in r) {
                          const e = r.borderBoxSize,
                            t = Array.isArray(e) ? e[0] : e;
                          ((o = t.inlineSize), (a = t.blockSize));
                        } else ((o = e.offsetWidth), (a = e.offsetHeight));
                        n({ width: o, height: a });
                      });
                      return (t.observe(e, { box: "border-box" }), () => t.unobserve(e));
                    }
                    n(void 0);
                  }, [e]),
                  t
                );
              })(w),
              E = S?.width ?? 0,
              C = S?.height ?? 0,
              N = o + ("center" !== l ? "-" + l : ""),
              j = "number" == typeof d ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
              _ = Array.isArray(u) ? u : [u],
              P = _.length > 0,
              z = { padding: j, boundary: _.filter(Lo), altBoundary: P },
              {
                refs: T,
                floatingStyles: M,
                placement: R,
                isPositioned: O,
                middlewareData: L,
              } = (function (e) {
                void 0 === e && (e = {});
                const {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: o = [],
                    platform: a,
                    elements: { reference: l, floating: i } = {},
                    transform: s = !0,
                    whileElementsMounted: c,
                    open: u,
                  } = e,
                  [d, f] = r.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1,
                  }),
                  [p, m] = r.useState(o);
                lo(p, o) || m(o);
                const [h, g] = r.useState(null),
                  [v, y] = r.useState(null),
                  b = r.useCallback((e) => {
                    e !== S.current && ((S.current = e), g(e));
                  }, []),
                  x = r.useCallback((e) => {
                    e !== E.current && ((E.current = e), y(e));
                  }, []),
                  w = l || h,
                  k = i || v,
                  S = r.useRef(null),
                  E = r.useRef(null),
                  C = r.useRef(d),
                  N = null != c,
                  j = co(c),
                  _ = co(a),
                  P = co(u),
                  z = r.useCallback(() => {
                    if (!S.current || !E.current) return;
                    const e = { placement: t, strategy: n, middleware: p };
                    (_.current && (e.platform = _.current),
                      oo(S.current, E.current, e).then((e) => {
                        const t = { ...e, isPositioned: !1 !== P.current };
                        T.current &&
                          !lo(C.current, t) &&
                          ((C.current = t),
                          st.flushSync(() => {
                            f(t);
                          }));
                      }));
                  }, [p, t, n, _, P]);
                ao(() => {
                  !1 === u &&
                    C.current.isPositioned &&
                    ((C.current.isPositioned = !1), f((e) => ({ ...e, isPositioned: !1 })));
                }, [u]);
                const T = r.useRef(!1);
                (ao(
                  () => (
                    (T.current = !0),
                    () => {
                      T.current = !1;
                    }
                  ),
                  [],
                ),
                  ao(() => {
                    if ((w && (S.current = w), k && (E.current = k), w && k)) {
                      if (j.current) return j.current(w, k, z);
                      z();
                    }
                  }, [w, k, z, j, N]));
                const M = r.useMemo(
                    () => ({ reference: S, floating: E, setReference: b, setFloating: x }),
                    [b, x],
                  ),
                  R = r.useMemo(() => ({ reference: w, floating: k }), [w, k]),
                  O = r.useMemo(() => {
                    const e = { position: n, left: 0, top: 0 };
                    if (!R.floating) return e;
                    const t = so(R.floating, d.x),
                      r = so(R.floating, d.y);
                    return s
                      ? {
                          ...e,
                          transform: "translate(" + t + "px, " + r + "px)",
                          ...(io(R.floating) >= 1.5 && { willChange: "transform" }),
                        }
                      : { position: n, left: t, top: r };
                  }, [n, s, R.floating, d.x, d.y]);
                return r.useMemo(
                  () => ({ ...d, update: z, refs: M, elements: R, floatingStyles: O }),
                  [d, z, M, R, O],
                );
              })({
                strategy: "fixed",
                placement: N,
                whileElementsMounted: (...e) =>
                  (function (e, t, n, r) {
                    void 0 === r && (r = {});
                    const {
                        ancestorScroll: o = !0,
                        ancestorResize: a = !0,
                        elementResize: l = "function" == typeof ResizeObserver,
                        layoutShift: i = "function" == typeof IntersectionObserver,
                        animationFrame: s = !1,
                      } = r,
                      c = Hr(e),
                      u = o || a ? [...(c ? Ar(c) : []), ...(t ? Ar(t) : [])] : [];
                    u.forEach((e) => {
                      (o && e.addEventListener("scroll", n, { passive: !0 }),
                        a && e.addEventListener("resize", n));
                    });
                    const d =
                      c && i
                        ? (function (e, t) {
                            let n,
                              r = null;
                            const o = yr(e);
                            function a() {
                              var e;
                              (clearTimeout(n), null == (e = r) || e.disconnect(), (r = null));
                            }
                            return (
                              (function l(i, s) {
                                (void 0 === i && (i = !1), void 0 === s && (s = 1), a());
                                const c = e.getBoundingClientRect(),
                                  { left: u, top: d, width: f, height: p } = c;
                                if ((i || t(), !f || !p)) return;
                                const m = {
                                  rootMargin:
                                    -Vn(d) +
                                    "px " +
                                    -Vn(o.clientWidth - (u + f)) +
                                    "px " +
                                    -Vn(o.clientHeight - (d + p)) +
                                    "px " +
                                    -Vn(u) +
                                    "px",
                                  threshold: Un(0, Bn(1, s)) || 1,
                                };
                                let h = !0;
                                function g(t) {
                                  const r = t[0].intersectionRatio;
                                  if (r !== s) {
                                    if (!h) return l();
                                    r
                                      ? l(!1, r)
                                      : (n = setTimeout(() => {
                                          l(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  (1 !== r || eo(c, e.getBoundingClientRect()) || l(), (h = !1));
                                }
                                try {
                                  r = new IntersectionObserver(g, { ...m, root: o.ownerDocument });
                                } catch (e) {
                                  r = new IntersectionObserver(g, m);
                                }
                                r.observe(e);
                              })(!0),
                              a
                            );
                          })(c, n)
                        : null;
                    let f,
                      p = -1,
                      m = null;
                    l &&
                      ((m = new ResizeObserver((e) => {
                        let [r] = e;
                        (r &&
                          r.target === c &&
                          m &&
                          t &&
                          (m.unobserve(t),
                          cancelAnimationFrame(p),
                          (p = requestAnimationFrame(() => {
                            var e;
                            null == (e = m) || e.observe(t);
                          }))),
                          n());
                      })),
                      c && !s && m.observe(c),
                      t && m.observe(t));
                    let h = s ? Wr(e) : null;
                    return (
                      s &&
                        (function t() {
                          const r = Wr(e);
                          (h && !eo(h, r) && n(), (h = r), (f = requestAnimationFrame(t)));
                        })(),
                      n(),
                      () => {
                        var e;
                        (u.forEach((e) => {
                          (o && e.removeEventListener("scroll", n),
                            a && e.removeEventListener("resize", n));
                        }),
                          null == d || d(),
                          null == (e = m) || e.disconnect(),
                          (m = null),
                          s && cancelAnimationFrame(f));
                      }
                    );
                  })(...e, { animationFrame: "always" === m }),
                elements: { reference: v.anchor },
                middleware: [
                  uo({ mainAxis: a + C, alignmentAxis: i }),
                  c &&
                    fo({
                      mainAxis: !0,
                      crossAxis: !1,
                      limiter: "partial" === f ? po() : void 0,
                      ...z,
                    }),
                  c && mo({ ...z }),
                  ho({
                    ...z,
                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                      const { width: o, height: a } = t.reference,
                        l = e.floating.style;
                      (l.setProperty("--radix-popper-available-width", `${n}px`),
                        l.setProperty("--radix-popper-available-height", `${r}px`),
                        l.setProperty("--radix-popper-anchor-width", `${o}px`),
                        l.setProperty("--radix-popper-anchor-height", `${a}px`));
                    },
                  }),
                  w && vo({ element: w, padding: s }),
                  Do({ arrowWidth: E, arrowHeight: C }),
                  p && go({ strategy: "referenceHidden", ...z }),
                ],
              }),
              [D, A] = Ao(R),
              F = lt(h);
            it(() => {
              O && F?.();
            }, [O, F]);
            const I = L.arrow?.x,
              H = L.arrow?.y,
              $ = 0 !== L.arrow?.centerOffset,
              [B, U] = r.useState();
            return (
              it(() => {
                y && U(window.getComputedStyle(y).zIndex);
              }, [y]),
              (0, Ue.jsx)("div", {
                ref: T.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...M,
                  transform: O ? M.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: B,
                  "--radix-popper-transform-origin": [
                    L.transformOrigin?.x,
                    L.transformOrigin?.y,
                  ].join(" "),
                  ...(L.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
                },
                dir: e.dir,
                children: (0, Ue.jsx)(Po, {
                  scope: n,
                  placedSide: D,
                  onArrowChange: k,
                  arrowX: I,
                  arrowY: H,
                  shouldHideArrow: $,
                  children: (0, Ue.jsx)(ct.div, {
                    "data-side": D,
                    "data-align": A,
                    ...g,
                    ref: x,
                    style: { ...g.style, animation: O ? void 0 : "none" },
                  }),
                }),
              })
            );
          });
        To.displayName = _o;
        var Mo = "PopperArrow",
          Ro = { top: "bottom", right: "left", bottom: "top", left: "right" },
          Oo = r.forwardRef(function (e, t) {
            const { __scopePopper: n, ...r } = e,
              o = zo(Mo, n),
              a = Ro[o.placedSide];
            return (0, Ue.jsx)("span", {
              ref: o.onArrowChange,
              style: {
                position: "absolute",
                left: o.arrowX,
                top: o.arrowY,
                [a]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[
                  o.placedSide
                ],
                transform: {
                  top: "translateY(100%)",
                  right: "translateY(50%) rotate(90deg) translateX(-50%)",
                  bottom: "rotate(180deg)",
                  left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[o.placedSide],
                visibility: o.shouldHideArrow ? "hidden" : void 0,
              },
              children: (0, Ue.jsx)(bo, { ...r, ref: t, style: { ...r.style, display: "block" } }),
            });
          });
        function Lo(e) {
          return null !== e;
        }
        Oo.displayName = Mo;
        var Do = (e) => ({
          name: "transformOrigin",
          options: e,
          fn(t) {
            const { placement: n, rects: r, middlewareData: o } = t,
              a = 0 !== o.arrow?.centerOffset,
              l = a ? 0 : e.arrowWidth,
              i = a ? 0 : e.arrowHeight,
              [s, c] = Ao(n),
              u = { start: "0%", center: "50%", end: "100%" }[c],
              d = (o.arrow?.x ?? 0) + l / 2,
              f = (o.arrow?.y ?? 0) + i / 2;
            let p = "",
              m = "";
            return (
              "bottom" === s
                ? ((p = a ? u : `${d}px`), (m = -i + "px"))
                : "top" === s
                  ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + i}px`))
                  : "right" === s
                    ? ((p = -i + "px"), (m = a ? u : `${f}px`))
                    : "left" === s && ((p = `${r.floating.width + i}px`), (m = a ? u : `${f}px`)),
              { data: { x: p, y: m } }
            );
          },
        });
        function Ao(e) {
          const [t, n = "center"] = e.split("-");
          return [t, n];
        }
        var Fo = Co,
          Io = jo,
          Ho = To,
          $o = Oo,
          Bo = r.forwardRef((e, t) => {
            const { container: n, ...o } = e,
              [a, l] = r.useState(!1);
            it(() => l(!0), []);
            const i = n || (a && globalThis?.document?.body);
            return i ? st.createPortal((0, Ue.jsx)(ct.div, { ...o, ref: t }), i) : null;
          });
        Bo.displayName = "Portal";
        var Uo = (e) => {
          const { present: t, children: n } = e,
            o = (function (e) {
              const [t, n] = r.useState(),
                o = r.useRef(null),
                a = r.useRef(e),
                l = r.useRef("none"),
                i = e ? "mounted" : "unmounted",
                [s, c] = (function (e, t) {
                  return r.useReducer((e, n) => t[e][n] ?? e, e);
                })(i, {
                  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                  unmounted: { MOUNT: "mounted" },
                });
              return (
                r.useEffect(() => {
                  const e = Wo(o.current);
                  l.current = "mounted" === s ? e : "none";
                }, [s]),
                it(() => {
                  const t = o.current,
                    n = a.current;
                  if (n !== e) {
                    const r = l.current,
                      o = Wo(t);
                    (c(
                      e
                        ? "MOUNT"
                        : "none" === o || "none" === t?.display
                          ? "UNMOUNT"
                          : n && r !== o
                            ? "ANIMATION_OUT"
                            : "UNMOUNT",
                    ),
                      (a.current = e));
                  }
                }, [e, c]),
                it(() => {
                  if (t) {
                    let e;
                    const n = t.ownerDocument.defaultView ?? window,
                      r = (r) => {
                        const l = Wo(o.current).includes(CSS.escape(r.animationName));
                        if (r.target === t && l && (c("ANIMATION_END"), !a.current)) {
                          const r = t.style.animationFillMode;
                          ((t.style.animationFillMode = "forwards"),
                            (e = n.setTimeout(() => {
                              "forwards" === t.style.animationFillMode &&
                                (t.style.animationFillMode = r);
                            })));
                        }
                      },
                      i = (e) => {
                        e.target === t && (l.current = Wo(o.current));
                      };
                    return (
                      t.addEventListener("animationstart", i),
                      t.addEventListener("animationcancel", r),
                      t.addEventListener("animationend", r),
                      () => {
                        (n.clearTimeout(e),
                          t.removeEventListener("animationstart", i),
                          t.removeEventListener("animationcancel", r),
                          t.removeEventListener("animationend", r));
                      }
                    );
                  }
                  c("ANIMATION_END");
                }, [t, c]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(s),
                  ref: r.useCallback((e) => {
                    ((o.current = e ? getComputedStyle(e) : null), n(e));
                  }, []),
                }
              );
            })(t),
            a = "function" == typeof n ? n({ present: o.isPresent }) : r.Children.only(n),
            l = Be(
              o.ref,
              (function (e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n
                  ? e.ref
                  : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
                    (n = t && "isReactWarning" in t && t.isReactWarning),
                    n ? e.props.ref : e.props.ref || e.ref);
              })(a),
            );
          return "function" == typeof n || o.isPresent ? r.cloneElement(a, { ref: l }) : null;
        };
        function Wo(e) {
          return e?.animationName || "none";
        }
        Uo.displayName = "Presence";
        var Vo = "rovingFocusGroup.onEntryFocus",
          qo = { bubbles: !1, cancelable: !0 },
          Ko = "RovingFocusGroup",
          [Qo, Go, Yo] = gn(Ko),
          [Xo, Zo] = ot(Ko, [Yo]),
          [Jo, ea] = Xo(Ko),
          ta = r.forwardRef((e, t) =>
            (0, Ue.jsx)(Qo.Provider, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, Ue.jsx)(Qo.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, Ue.jsx)(na, { ...e, ref: t }),
              }),
            }),
          );
        ta.displayName = Ko;
        var na = r.forwardRef((e, t) => {
            const {
                __scopeRovingFocusGroup: n,
                orientation: o,
                loop: a = !1,
                dir: l,
                currentTabStopId: i,
                defaultCurrentTabStopId: s,
                onCurrentTabStopIdChange: c,
                onEntryFocus: u,
                preventScrollOnEntryFocus: d = !1,
                ...f
              } = e,
              p = r.useRef(null),
              m = Be(t, p),
              h = yn(l),
              [g, v] = hn({ prop: i, defaultProp: s ?? null, onChange: c, caller: Ko }),
              [y, b] = r.useState(!1),
              x = lt(u),
              w = Go(n),
              k = r.useRef(!1),
              [S, E] = r.useState(0);
            return (
              r.useEffect(() => {
                const e = p.current;
                if (e) return (e.addEventListener(Vo, x), () => e.removeEventListener(Vo, x));
              }, [x]),
              (0, Ue.jsx)(Jo, {
                scope: n,
                orientation: o,
                dir: h,
                loop: a,
                currentTabStopId: g,
                onItemFocus: r.useCallback((e) => v(e), [v]),
                onItemShiftTab: r.useCallback(() => b(!0), []),
                onFocusableItemAdd: r.useCallback(() => E((e) => e + 1), []),
                onFocusableItemRemove: r.useCallback(() => E((e) => e - 1), []),
                children: (0, Ue.jsx)(ct.div, {
                  tabIndex: y || 0 === S ? -1 : 0,
                  "data-orientation": o,
                  ...f,
                  ref: m,
                  style: { outline: "none", ...e.style },
                  onMouseDown: pn(e.onMouseDown, () => {
                    k.current = !0;
                  }),
                  onFocus: pn(e.onFocus, (e) => {
                    const t = !k.current;
                    if (e.target === e.currentTarget && t && !y) {
                      const t = new CustomEvent(Vo, qo);
                      if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                        const e = w().filter((e) => e.focusable);
                        la(
                          [e.find((e) => e.active), e.find((e) => e.id === g), ...e]
                            .filter(Boolean)
                            .map((e) => e.ref.current),
                          d,
                        );
                      }
                    }
                    k.current = !1;
                  }),
                  onBlur: pn(e.onBlur, () => b(!1)),
                }),
              })
            );
          }),
          ra = "RovingFocusGroupItem",
          oa = r.forwardRef((e, t) => {
            const {
                __scopeRovingFocusGroup: n,
                focusable: o = !0,
                active: a = !1,
                tabStopId: l,
                children: i,
                ...s
              } = e,
              c = Hn(),
              u = l || c,
              d = ea(ra, n),
              f = d.currentTabStopId === u,
              p = Go(n),
              { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
            return (
              r.useEffect(() => {
                if (o) return (m(), () => h());
              }, [o, m, h]),
              (0, Ue.jsx)(Qo.ItemSlot, {
                scope: n,
                id: u,
                focusable: o,
                active: a,
                children: (0, Ue.jsx)(ct.span, {
                  tabIndex: f ? 0 : -1,
                  "data-orientation": d.orientation,
                  ...s,
                  ref: t,
                  onMouseDown: pn(e.onMouseDown, (e) => {
                    o ? d.onItemFocus(u) : e.preventDefault();
                  }),
                  onFocus: pn(e.onFocus, () => d.onItemFocus(u)),
                  onKeyDown: pn(e.onKeyDown, (e) => {
                    if ("Tab" === e.key && e.shiftKey) return void d.onItemShiftTab();
                    if (e.target !== e.currentTarget) return;
                    const t = (function (e, t, n) {
                      const r = (function (e, t) {
                        return "rtl" !== t
                          ? e
                          : "ArrowLeft" === e
                            ? "ArrowRight"
                            : "ArrowRight" === e
                              ? "ArrowLeft"
                              : e;
                      })(e.key, n);
                      return ("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) ||
                        ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r))
                        ? void 0
                        : aa[r];
                    })(e, d.orientation, d.dir);
                    if (void 0 !== t) {
                      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                      e.preventDefault();
                      let o = p()
                        .filter((e) => e.focusable)
                        .map((e) => e.ref.current);
                      if ("last" === t) o.reverse();
                      else if ("prev" === t || "next" === t) {
                        "prev" === t && o.reverse();
                        const a = o.indexOf(e.currentTarget);
                        o = d.loop
                          ? ((r = a + 1), (n = o).map((e, t) => n[(r + t) % n.length]))
                          : o.slice(a + 1);
                      }
                      setTimeout(() => la(o));
                    }
                    var n, r;
                  }),
                  children:
                    "function" == typeof i ? i({ isCurrentTabStop: f, hasTabStop: null != g }) : i,
                }),
              })
            );
          });
        oa.displayName = ra;
        var aa = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last",
        };
        function la(e, t = !1) {
          const n = document.activeElement;
          for (const r of e) {
            if (r === n) return;
            if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
          }
        }
        var ia = ta,
          sa = oa,
          ca = new WeakMap(),
          ua = new WeakMap(),
          da = {},
          fa = 0,
          pa = function (e) {
            return e && (e.host || pa(e.parentNode));
          },
          ma = function (e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e]),
              o =
                t ||
                (function (e) {
                  return "undefined" == typeof document
                    ? null
                    : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
                })(e);
            return o
              ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
                (function (e, t, n, r) {
                  var o = (function (e, t) {
                    return t
                      .map(function (t) {
                        if (e.contains(t)) return t;
                        var n = pa(t);
                        return n && e.contains(n)
                          ? n
                          : (console.error(
                              "aria-hidden",
                              t,
                              "in not contained inside",
                              e,
                              ". Doing nothing",
                            ),
                            null);
                      })
                      .filter(function (e) {
                        return Boolean(e);
                      });
                  })(t, Array.isArray(e) ? e : [e]);
                  da[n] || (da[n] = new WeakMap());
                  var a = da[n],
                    l = [],
                    i = new Set(),
                    s = new Set(o),
                    c = function (e) {
                      e && !i.has(e) && (i.add(e), c(e.parentNode));
                    };
                  o.forEach(c);
                  var u = function (e) {
                    e &&
                      !s.has(e) &&
                      Array.prototype.forEach.call(e.children, function (e) {
                        if (i.has(e)) u(e);
                        else
                          try {
                            var t = e.getAttribute(r),
                              o = null !== t && "false" !== t,
                              s = (ca.get(e) || 0) + 1,
                              c = (a.get(e) || 0) + 1;
                            (ca.set(e, s),
                              a.set(e, c),
                              l.push(e),
                              1 === s && o && ua.set(e, !0),
                              1 === c && e.setAttribute(n, "true"),
                              o || e.setAttribute(r, "true"));
                          } catch (t) {
                            console.error("aria-hidden: cannot operate on ", e, t);
                          }
                      });
                  };
                  return (
                    u(t),
                    i.clear(),
                    fa++,
                    function () {
                      (l.forEach(function (e) {
                        var t = ca.get(e) - 1,
                          o = a.get(e) - 1;
                        (ca.set(e, t),
                          a.set(e, o),
                          t || (ua.has(e) || e.removeAttribute(r), ua.delete(e)),
                          o || e.removeAttribute(n));
                      }),
                        --fa ||
                          ((ca = new WeakMap()),
                          (ca = new WeakMap()),
                          (ua = new WeakMap()),
                          (da = {})));
                    }
                  );
                })(r, o, n, "aria-hidden"))
              : function () {
                  return null;
                };
          },
          ha = function () {
            return (
              (ha =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              ha.apply(this, arguments)
            );
          };
        function ga(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        }
        (Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError);
        var va = "right-scroll-bar-position",
          ya = "width-before-scroll-bar";
        function ba(e, t) {
          return ("function" == typeof e ? e(t) : e && (e.current = t), e);
        }
        var xa = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
          wa = new WeakMap();
        function ka(e) {
          return e;
        }
        var Sa = (function (e) {
            void 0 === e && (e = {});
            var t = (function (e, t) {
              void 0 === t && (t = ka);
              var n = [],
                r = !1;
              return {
                read: function () {
                  if (r)
                    throw new Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
                    );
                  return n.length ? n[n.length - 1] : e;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    ((n = []), t.forEach(e));
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    ((n = []), o.forEach(e), (t = n));
                  }
                  var a = function () {
                      var n = t;
                      ((t = []), n.forEach(e));
                    },
                    l = function () {
                      return Promise.resolve().then(a);
                    };
                  (l(),
                    (n = {
                      push: function (e) {
                        (t.push(e), l());
                      },
                      filter: function (e) {
                        return ((t = t.filter(e)), n);
                      },
                    }));
                },
              };
            })(null);
            return ((t.options = ha({ async: !0, ssr: !1 }, e)), t);
          })(),
          Ea = function () {},
          Ca = r.forwardRef(function (e, t) {
            var n = r.useRef(null),
              o = r.useState({ onScrollCapture: Ea, onWheelCapture: Ea, onTouchMoveCapture: Ea }),
              a = o[0],
              l = o[1],
              i = e.forwardProps,
              s = e.children,
              c = e.className,
              u = e.removeScrollBar,
              d = e.enabled,
              f = e.shards,
              p = e.sideCar,
              m = e.noRelative,
              h = e.noIsolation,
              g = e.inert,
              v = e.allowPinchZoom,
              y = e.as,
              b = void 0 === y ? "div" : y,
              x = e.gapMode,
              w = ga(e, [
                "forwardProps",
                "children",
                "className",
                "removeScrollBar",
                "enabled",
                "shards",
                "sideCar",
                "noRelative",
                "noIsolation",
                "inert",
                "allowPinchZoom",
                "as",
                "gapMode",
              ]),
              k = p,
              S = (function (e, t) {
                var n,
                  o,
                  a,
                  l =
                    ((n = t || null),
                    (o = function (t) {
                      return e.forEach(function (e) {
                        return ba(e, t);
                      });
                    }),
                    ((a = (0, r.useState)(function () {
                      return {
                        value: n,
                        callback: o,
                        facade: {
                          get current() {
                            return a.value;
                          },
                          set current(e) {
                            var t = a.value;
                            t !== e && ((a.value = e), a.callback(e, t));
                          },
                        },
                      };
                    })[0]).callback = o),
                    a.facade);
                return (
                  xa(
                    function () {
                      var t = wa.get(l);
                      if (t) {
                        var n = new Set(t),
                          r = new Set(e),
                          o = l.current;
                        (n.forEach(function (e) {
                          r.has(e) || ba(e, null);
                        }),
                          r.forEach(function (e) {
                            n.has(e) || ba(e, o);
                          }));
                      }
                      wa.set(l, e);
                    },
                    [e],
                  ),
                  l
                );
              })([n, t]),
              E = ha(ha({}, w), a);
            return r.createElement(
              r.Fragment,
              null,
              d &&
                r.createElement(k, {
                  sideCar: Sa,
                  removeScrollBar: u,
                  shards: f,
                  noRelative: m,
                  noIsolation: h,
                  inert: g,
                  setCallbacks: l,
                  allowPinchZoom: !!v,
                  lockRef: n,
                  gapMode: x,
                }),
              i
                ? r.cloneElement(r.Children.only(s), ha(ha({}, E), { ref: S }))
                : r.createElement(b, ha({}, E, { className: c, ref: S }), s),
            );
          });
        ((Ca.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
          (Ca.classNames = { fullWidth: ya, zeroRight: va }));
        var Na = function (e) {
          var t = e.sideCar,
            n = ga(e, ["sideCar"]);
          if (!t)
            throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var o = t.read();
          if (!o) throw new Error("Sidecar medium not found");
          return r.createElement(o, ha({}, n));
        };
        Na.isSideCarExport = !0;
        var ja = function () {
            var e = 0,
              t = null;
            return {
              add: function (r) {
                var o, a;
                (0 == e &&
                  (t = (function () {
                    if (!document) return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var t = n.nc;
                    return (t && e.setAttribute("nonce", t), e);
                  })()) &&
                  ((a = r),
                  (o = t).styleSheet
                    ? (o.styleSheet.cssText = a)
                    : o.appendChild(document.createTextNode(a)),
                  (function (e) {
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
                  })(t)),
                  e++);
              },
              remove: function () {
                !--e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
              },
            };
          },
          _a = function () {
            var e,
              t =
                ((e = ja()),
                function (t, n) {
                  r.useEffect(
                    function () {
                      return (
                        e.add(t),
                        function () {
                          e.remove();
                        }
                      );
                    },
                    [t && n],
                  );
                });
            return function (e) {
              var n = e.styles,
                r = e.dynamic;
              return (t(n, r), null);
            };
          },
          Pa = { left: 0, top: 0, right: 0, gap: 0 },
          za = function (e) {
            return parseInt(e || "", 10) || 0;
          },
          Ta = _a(),
          Ma = "data-scroll-locked",
          Ra = function (e, t, n, r) {
            var o = e.left,
              a = e.top,
              l = e.right,
              i = e.gap;
            return (
              void 0 === n && (n = "margin"),
              "\n  ."
                .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
                .concat(r, ";\n   padding-right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  body[")
                .concat(Ma, "] {\n    overflow: hidden ")
                .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                .concat(
                  [
                    t && "position: relative ".concat(r, ";"),
                    "margin" === n &&
                      "\n    padding-left: "
                        .concat(o, "px;\n    padding-top: ")
                        .concat(a, "px;\n    padding-right: ")
                        .concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                        .concat(i, "px ")
                        .concat(r, ";\n    "),
                    "padding" === n && "padding-right: ".concat(i, "px ").concat(r, ";"),
                  ]
                    .filter(Boolean)
                    .join(""),
                  "\n  }\n  \n  .",
                )
                .concat(va, " {\n    right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(ya, " {\n    margin-right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(va, " .")
                .concat(va, " {\n    right: 0 ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(ya, " .")
                .concat(ya, " {\n    margin-right: 0 ")
                .concat(r, ";\n  }\n  \n  body[")
                .concat(Ma, "] {\n    ")
                .concat("--removed-body-scroll-bar-size", ": ")
                .concat(i, "px;\n  }\n")
            );
          },
          Oa = function () {
            var e = parseInt(document.body.getAttribute(Ma) || "0", 10);
            return isFinite(e) ? e : 0;
          },
          La = function (e) {
            var t = e.noRelative,
              n = e.noImportant,
              o = e.gapMode,
              a = void 0 === o ? "margin" : o;
            r.useEffect(function () {
              return (
                document.body.setAttribute(Ma, (Oa() + 1).toString()),
                function () {
                  var e = Oa() - 1;
                  e <= 0
                    ? document.body.removeAttribute(Ma)
                    : document.body.setAttribute(Ma, e.toString());
                }
              );
            }, []);
            var l = r.useMemo(
              function () {
                return (function (e) {
                  if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return Pa;
                  var t = (function (e) {
                      var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                      return [za(n), za(r), za(o)];
                    })(e),
                    n = document.documentElement.clientWidth,
                    r = window.innerWidth;
                  return {
                    left: t[0],
                    top: t[1],
                    right: t[2],
                    gap: Math.max(0, r - n + t[2] - t[0]),
                  };
                })(a);
              },
              [a],
            );
            return r.createElement(Ta, { styles: Ra(l, !t, a, n ? "" : "!important") });
          },
          Da = !1;
        if ("undefined" != typeof window)
          try {
            var Aa = Object.defineProperty({}, "passive", {
              get: function () {
                return ((Da = !0), !0);
              },
            });
            (window.addEventListener("test", Aa, Aa), window.removeEventListener("test", Aa, Aa));
          } catch (e) {
            Da = !1;
          }
        var Fa = !!Da && { passive: !1 },
          Ia = function (e, t) {
            if (!(e instanceof Element)) return !1;
            var n = window.getComputedStyle(e);
            return (
              "hidden" !== n[t] &&
              !(
                n.overflowY === n.overflowX &&
                !(function (e) {
                  return "TEXTAREA" === e.tagName;
                })(e) &&
                "visible" === n[t]
              )
            );
          },
          Ha = function (e, t) {
            var n = t.ownerDocument,
              r = t;
            do {
              if (
                ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
                $a(e, r))
              ) {
                var o = Ba(e, r);
                if (o[1] > o[2]) return !0;
              }
              r = r.parentNode;
            } while (r && r !== n.body);
            return !1;
          },
          $a = function (e, t) {
            return "v" === e
              ? (function (e) {
                  return Ia(e, "overflowY");
                })(t)
              : (function (e) {
                  return Ia(e, "overflowX");
                })(t);
          },
          Ba = function (e, t) {
            return "v" === e
              ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
              : (function (e) {
                  return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                })(t);
            var n;
          },
          Ua = function (e) {
            return "changedTouches" in e
              ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
              : [0, 0];
          },
          Wa = function (e) {
            return [e.deltaX, e.deltaY];
          },
          Va = function (e) {
            return e && "current" in e ? e.current : e;
          },
          qa = function (e) {
            return "\n  .block-interactivity-"
              .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
              .concat(e, " {pointer-events: all;}\n");
          },
          Ka = 0,
          Qa = [];
        function Ga(e) {
          for (var t = null; null !== e; )
            (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
          return t;
        }
        const Ya =
          ((Xa = function (e) {
            var t = r.useRef([]),
              n = r.useRef([0, 0]),
              o = r.useRef(),
              a = r.useState(Ka++)[0],
              l = r.useState(_a)[0],
              i = r.useRef(e);
            (r.useEffect(
              function () {
                i.current = e;
              },
              [e],
            ),
              r.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(a));
                    var t = (function (e, t, n) {
                      if (n || 2 === arguments.length)
                        for (var r, o = 0, a = t.length; o < a; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map(Va), !0).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add("allow-interactivity-".concat(a));
                      }),
                      function () {
                        (document.body.classList.remove("block-interactivity-".concat(a)),
                          t.forEach(function (e) {
                            return e.classList.remove("allow-interactivity-".concat(a));
                          }));
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards],
              ));
            var s = r.useCallback(function (e, t) {
                if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey))
                  return !i.current.allowPinchZoom;
                var r,
                  a = Ua(e),
                  l = n.current,
                  s = "deltaX" in e ? e.deltaX : l[0] - a[0],
                  c = "deltaY" in e ? e.deltaY : l[1] - a[1],
                  u = e.target,
                  d = Math.abs(s) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === u.type) return !1;
                var f = window.getSelection(),
                  p = f && f.anchorNode;
                if (p && (p === u || p.contains(u))) return !1;
                var m = Ha(d, u);
                if (!m) return !0;
                if ((m ? (r = d) : ((r = "v" === d ? "h" : "v"), (m = Ha(d, u))), !m)) return !1;
                if ((!o.current && "changedTouches" in e && (s || c) && (o.current = r), !r))
                  return !0;
                var h = o.current || r;
                return (function (e, t, n, r) {
                  var o = (function (e, t) {
                      return "h" === e && "rtl" === t ? -1 : 1;
                    })(e, window.getComputedStyle(t).direction),
                    a = o * r,
                    l = n.target,
                    i = t.contains(l),
                    s = !1,
                    c = a > 0,
                    u = 0,
                    d = 0;
                  do {
                    if (!l) break;
                    var f = Ba(e, l),
                      p = f[0],
                      m = f[1] - f[2] - o * p;
                    (p || m) && $a(e, l) && ((u += m), (d += p));
                    var h = l.parentNode;
                    l = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
                  } while ((!i && l !== document.body) || (i && (t.contains(l) || t === l)));
                  return (
                    ((c && (Math.abs(u) < 1 || !1)) || (!c && (Math.abs(d) < 1 || !1))) && (s = !0),
                    s
                  );
                })(h, t, e, "h" === h ? s : c);
              }, []),
              c = r.useCallback(function (e) {
                var n = e;
                if (Qa.length && Qa[Qa.length - 1] === l) {
                  var r = "deltaY" in n ? Wa(n) : Ua(n),
                    o = t.current.filter(function (e) {
                      return (
                        e.name === n.type &&
                        (e.target === n.target || n.target === e.shadowParent) &&
                        ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1])
                      );
                      var t, o;
                    })[0];
                  if (o && o.should) n.cancelable && n.preventDefault();
                  else if (!o) {
                    var a = (i.current.shards || [])
                      .map(Va)
                      .filter(Boolean)
                      .filter(function (e) {
                        return e.contains(n.target);
                      });
                    (a.length > 0 ? s(n, a[0]) : !i.current.noIsolation) &&
                      n.cancelable &&
                      n.preventDefault();
                  }
                }
              }, []),
              u = r.useCallback(function (e, n, r, o) {
                var a = { name: e, delta: n, target: r, should: o, shadowParent: Ga(r) };
                (t.current.push(a),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== a;
                    });
                  }, 1));
              }, []),
              d = r.useCallback(function (e) {
                ((n.current = Ua(e)), (o.current = void 0));
              }, []),
              f = r.useCallback(function (t) {
                u(t.type, Wa(t), t.target, s(t, e.lockRef.current));
              }, []),
              p = r.useCallback(function (t) {
                u(t.type, Ua(t), t.target, s(t, e.lockRef.current));
              }, []);
            r.useEffect(function () {
              return (
                Qa.push(l),
                e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                document.addEventListener("wheel", c, Fa),
                document.addEventListener("touchmove", c, Fa),
                document.addEventListener("touchstart", d, Fa),
                function () {
                  ((Qa = Qa.filter(function (e) {
                    return e !== l;
                  })),
                    document.removeEventListener("wheel", c, Fa),
                    document.removeEventListener("touchmove", c, Fa),
                    document.removeEventListener("touchstart", d, Fa));
                }
              );
            }, []);
            var m = e.removeScrollBar,
              h = e.inert;
            return r.createElement(
              r.Fragment,
              null,
              h ? r.createElement(l, { styles: qa(a) }) : null,
              m ? r.createElement(La, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
            );
          }),
          Sa.useMedium(Xa),
          Na);
        var Xa,
          Za = r.forwardRef(function (e, t) {
            return r.createElement(Ca, ha({}, e, { ref: t, sideCar: Ya }));
          });
        Za.classNames = Ca.classNames;
        const Ja = Za;
        var el = ["Enter", " "],
          tl = ["ArrowUp", "PageDown", "End"],
          nl = ["ArrowDown", "PageUp", "Home", ...tl],
          rl = { ltr: [...el, "ArrowRight"], rtl: [...el, "ArrowLeft"] },
          ol = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
          al = "Menu",
          [ll, il, sl] = gn(al),
          [cl, ul] = ot(al, [sl, ko, Zo]),
          dl = ko(),
          fl = Zo(),
          [pl, ml] = cl(al),
          [hl, gl] = cl(al),
          vl = (e) => {
            const {
                __scopeMenu: t,
                open: n = !1,
                children: o,
                dir: a,
                onOpenChange: l,
                modal: i = !0,
              } = e,
              s = dl(t),
              [c, u] = r.useState(null),
              d = r.useRef(!1),
              f = lt(l),
              p = yn(a);
            return (
              r.useEffect(() => {
                const e = () => {
                    ((d.current = !0),
                      document.addEventListener("pointerdown", t, { capture: !0, once: !0 }),
                      document.addEventListener("pointermove", t, { capture: !0, once: !0 }));
                  },
                  t = () => (d.current = !1);
                return (
                  document.addEventListener("keydown", e, { capture: !0 }),
                  () => {
                    (document.removeEventListener("keydown", e, { capture: !0 }),
                      document.removeEventListener("pointerdown", t, { capture: !0 }),
                      document.removeEventListener("pointermove", t, { capture: !0 }));
                  }
                );
              }, []),
              (0, Ue.jsx)(Fo, {
                ...s,
                children: (0, Ue.jsx)(pl, {
                  scope: t,
                  open: n,
                  onOpenChange: f,
                  content: c,
                  onContentChange: u,
                  children: (0, Ue.jsx)(hl, {
                    scope: t,
                    onClose: r.useCallback(() => f(!1), [f]),
                    isUsingKeyboardRef: d,
                    dir: p,
                    modal: i,
                    children: o,
                  }),
                }),
              })
            );
          };
        vl.displayName = al;
        var yl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e,
            o = dl(n);
          return (0, Ue.jsx)(Io, { ...o, ...r, ref: t });
        });
        yl.displayName = "MenuAnchor";
        var bl = "MenuPortal",
          [xl, wl] = cl(bl, { forceMount: void 0 }),
          kl = (e) => {
            const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
              a = ml(bl, t);
            return (0, Ue.jsx)(xl, {
              scope: t,
              forceMount: n,
              children: (0, Ue.jsx)(Uo, {
                present: n || a.open,
                children: (0, Ue.jsx)(Bo, { asChild: !0, container: o, children: r }),
              }),
            });
          };
        kl.displayName = bl;
        var Sl = "MenuContent",
          [El, Cl] = cl(Sl),
          Nl = r.forwardRef((e, t) => {
            const n = wl(Sl, e.__scopeMenu),
              { forceMount: r = n.forceMount, ...o } = e,
              a = ml(Sl, e.__scopeMenu),
              l = gl(Sl, e.__scopeMenu);
            return (0, Ue.jsx)(ll.Provider, {
              scope: e.__scopeMenu,
              children: (0, Ue.jsx)(Uo, {
                present: r || a.open,
                children: (0, Ue.jsx)(ll.Slot, {
                  scope: e.__scopeMenu,
                  children: l.modal
                    ? (0, Ue.jsx)(jl, { ...o, ref: t })
                    : (0, Ue.jsx)(_l, { ...o, ref: t }),
                }),
              }),
            });
          }),
          jl = r.forwardRef((e, t) => {
            const n = ml(Sl, e.__scopeMenu),
              o = r.useRef(null),
              a = Be(t, o);
            return (
              r.useEffect(() => {
                const e = o.current;
                if (e) return ma(e);
              }, []),
              (0, Ue.jsx)(zl, {
                ...e,
                ref: a,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: pn(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
                onDismiss: () => n.onOpenChange(!1),
              })
            );
          }),
          _l = r.forwardRef((e, t) => {
            const n = ml(Sl, e.__scopeMenu);
            return (0, Ue.jsx)(zl, {
              ...e,
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            });
          }),
          Pl = We("MenuContent.ScrollLock"),
          zl = r.forwardRef((e, t) => {
            const {
                __scopeMenu: n,
                loop: o = !1,
                trapFocus: a,
                onOpenAutoFocus: l,
                onCloseAutoFocus: i,
                disableOutsidePointerEvents: s,
                onEntryFocus: c,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: m,
                disableOutsideScroll: h,
                ...g
              } = e,
              v = ml(Sl, n),
              y = gl(Sl, n),
              b = dl(n),
              x = fl(n),
              w = il(n),
              [k, S] = r.useState(null),
              E = r.useRef(null),
              C = Be(t, E, v.onContentChange),
              N = r.useRef(0),
              j = r.useRef(""),
              _ = r.useRef(0),
              P = r.useRef(null),
              z = r.useRef("right"),
              T = r.useRef(0),
              M = h ? Ja : r.Fragment,
              R = h ? { as: Pl, allowPinchZoom: !0 } : void 0;
            (r.useEffect(() => () => window.clearTimeout(N.current), []), Nn());
            const O = r.useCallback(
              (e) =>
                z.current === P.current?.side &&
                (function (e, t) {
                  if (!t) return !1;
                  return (function (e, t) {
                    const { x: n, y: r } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const l = t[e],
                        i = t[a],
                        s = l.x,
                        c = l.y,
                        u = i.x,
                        d = i.y;
                      c > r != d > r && n < ((u - s) * (r - c)) / (d - c) + s && (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, t);
                })(e, P.current?.area),
              [],
            );
            return (0, Ue.jsx)(El, {
              scope: n,
              searchRef: j,
              onItemEnter: r.useCallback(
                (e) => {
                  O(e) && e.preventDefault();
                },
                [O],
              ),
              onItemLeave: r.useCallback(
                (e) => {
                  O(e) || (E.current?.focus(), S(null));
                },
                [O],
              ),
              onTriggerLeave: r.useCallback(
                (e) => {
                  O(e) && e.preventDefault();
                },
                [O],
              ),
              pointerGraceTimerRef: _,
              onPointerGraceIntentChange: r.useCallback((e) => {
                P.current = e;
              }, []),
              children: (0, Ue.jsx)(M, {
                ...R,
                children: (0, Ue.jsx)(Tn, {
                  asChild: !0,
                  trapped: a,
                  onMountAutoFocus: pn(l, (e) => {
                    (e.preventDefault(), E.current?.focus({ preventScroll: !0 }));
                  }),
                  onUnmountAutoFocus: i,
                  children: (0, Ue.jsx)(kn, {
                    asChild: !0,
                    disableOutsidePointerEvents: s,
                    onEscapeKeyDown: u,
                    onPointerDownOutside: d,
                    onFocusOutside: f,
                    onInteractOutside: p,
                    onDismiss: m,
                    children: (0, Ue.jsx)(ia, {
                      asChild: !0,
                      ...x,
                      dir: y.dir,
                      orientation: "vertical",
                      loop: o,
                      currentTabStopId: k,
                      onCurrentTabStopIdChange: S,
                      onEntryFocus: pn(c, (e) => {
                        y.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                      preventScrollOnEntryFocus: !0,
                      children: (0, Ue.jsx)(Ho, {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ri(v.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...g,
                        ref: C,
                        style: { outline: "none", ...g.style },
                        onKeyDown: pn(g.onKeyDown, (e) => {
                          const t =
                              e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                            n = e.ctrlKey || e.altKey || e.metaKey,
                            r = 1 === e.key.length;
                          t &&
                            ("Tab" === e.key && e.preventDefault(),
                            !n &&
                              r &&
                              ((e) => {
                                const t = j.current + e,
                                  n = w().filter((e) => !e.disabled),
                                  r = document.activeElement,
                                  o = n.find((e) => e.ref.current === r)?.textValue,
                                  a = (function (e, t, n) {
                                    const r =
                                        t.length > 1 && Array.from(t).every((e) => e === t[0])
                                          ? t[0]
                                          : t,
                                      o = n ? e.indexOf(n) : -1;
                                    let a =
                                      ((l = e),
                                      (i = Math.max(o, 0)),
                                      l.map((e, t) => l[(i + t) % l.length]));
                                    var l, i;
                                    1 === r.length && (a = a.filter((e) => e !== n));
                                    const s = a.find((e) =>
                                      e.toLowerCase().startsWith(r.toLowerCase()),
                                    );
                                    return s !== n ? s : void 0;
                                  })(
                                    n.map((e) => e.textValue),
                                    t,
                                    o,
                                  ),
                                  l = n.find((e) => e.textValue === a)?.ref.current;
                                (!(function e(t) {
                                  ((j.current = t),
                                    window.clearTimeout(N.current),
                                    "" !== t && (N.current = window.setTimeout(() => e(""), 1e3)));
                                })(t),
                                  l && setTimeout(() => l.focus()));
                              })(e.key));
                          const o = E.current;
                          if (e.target !== o) return;
                          if (!nl.includes(e.key)) return;
                          e.preventDefault();
                          const a = w()
                            .filter((e) => !e.disabled)
                            .map((e) => e.ref.current);
                          (tl.includes(e.key) && a.reverse(),
                            (function (e) {
                              const t = document.activeElement;
                              for (const n of e) {
                                if (n === t) return;
                                if ((n.focus(), document.activeElement !== t)) return;
                              }
                            })(a));
                        }),
                        onBlur: pn(e.onBlur, (e) => {
                          e.currentTarget.contains(e.target) ||
                            (window.clearTimeout(N.current), (j.current = ""));
                        }),
                        onPointerMove: pn(
                          e.onPointerMove,
                          li((e) => {
                            const t = e.target,
                              n = T.current !== e.clientX;
                            if (e.currentTarget.contains(t) && n) {
                              const t = e.clientX > T.current ? "right" : "left";
                              ((z.current = t), (T.current = e.clientX));
                            }
                          }),
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            });
          });
        Nl.displayName = Sl;
        var Tl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, Ue.jsx)(ct.div, { role: "group", ...r, ref: t });
        });
        Tl.displayName = "MenuGroup";
        var Ml = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, Ue.jsx)(ct.div, { ...r, ref: t });
        });
        Ml.displayName = "MenuLabel";
        var Rl = "MenuItem",
          Ol = "menu.itemSelect",
          Ll = r.forwardRef((e, t) => {
            const { disabled: n = !1, onSelect: o, ...a } = e,
              l = r.useRef(null),
              i = gl(Rl, e.__scopeMenu),
              s = Cl(Rl, e.__scopeMenu),
              c = Be(t, l),
              u = r.useRef(!1);
            return (0, Ue.jsx)(Dl, {
              ...a,
              ref: c,
              disabled: n,
              onClick: pn(e.onClick, () => {
                const e = l.current;
                if (!n && e) {
                  const t = new CustomEvent(Ol, { bubbles: !0, cancelable: !0 });
                  (e.addEventListener(Ol, (e) => o?.(e), { once: !0 }),
                    ut(e, t),
                    t.defaultPrevented ? (u.current = !1) : i.onClose());
                }
              }),
              onPointerDown: (t) => {
                (e.onPointerDown?.(t), (u.current = !0));
              },
              onPointerUp: pn(e.onPointerUp, (e) => {
                u.current || e.currentTarget?.click();
              }),
              onKeyDown: pn(e.onKeyDown, (e) => {
                const t = "" !== s.searchRef.current;
                n ||
                  (t && " " === e.key) ||
                  (el.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
              }),
            });
          });
        Ll.displayName = Rl;
        var Dl = r.forwardRef((e, t) => {
            const { __scopeMenu: n, disabled: o = !1, textValue: a, ...l } = e,
              i = Cl(Rl, n),
              s = fl(n),
              c = r.useRef(null),
              u = Be(t, c),
              [d, f] = r.useState(!1),
              [p, m] = r.useState("");
            return (
              r.useEffect(() => {
                const e = c.current;
                e && m((e.textContent ?? "").trim());
              }, [l.children]),
              (0, Ue.jsx)(ll.ItemSlot, {
                scope: n,
                disabled: o,
                textValue: a ?? p,
                children: (0, Ue.jsx)(sa, {
                  asChild: !0,
                  ...s,
                  focusable: !o,
                  children: (0, Ue.jsx)(ct.div, {
                    role: "menuitem",
                    "data-highlighted": d ? "" : void 0,
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    ...l,
                    ref: u,
                    onPointerMove: pn(
                      e.onPointerMove,
                      li((e) => {
                        o
                          ? i.onItemLeave(e)
                          : (i.onItemEnter(e),
                            e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
                      }),
                    ),
                    onPointerLeave: pn(
                      e.onPointerLeave,
                      li((e) => i.onItemLeave(e)),
                    ),
                    onFocus: pn(e.onFocus, () => f(!0)),
                    onBlur: pn(e.onBlur, () => f(!1)),
                  }),
                }),
              })
            );
          }),
          Al = r.forwardRef((e, t) => {
            const { checked: n = !1, onCheckedChange: r, ...o } = e;
            return (0, Ue.jsx)(Vl, {
              scope: e.__scopeMenu,
              checked: n,
              children: (0, Ue.jsx)(Ll, {
                role: "menuitemcheckbox",
                "aria-checked": oi(n) ? "mixed" : n,
                ...o,
                ref: t,
                "data-state": ai(n),
                onSelect: pn(o.onSelect, () => r?.(!!oi(n) || !n), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            });
          });
        Al.displayName = "MenuCheckboxItem";
        var Fl = "MenuRadioGroup",
          [Il, Hl] = cl(Fl, { value: void 0, onValueChange: () => {} }),
          $l = r.forwardRef((e, t) => {
            const { value: n, onValueChange: r, ...o } = e,
              a = lt(r);
            return (0, Ue.jsx)(Il, {
              scope: e.__scopeMenu,
              value: n,
              onValueChange: a,
              children: (0, Ue.jsx)(Tl, { ...o, ref: t }),
            });
          });
        $l.displayName = Fl;
        var Bl = "MenuRadioItem",
          Ul = r.forwardRef((e, t) => {
            const { value: n, ...r } = e,
              o = Hl(Bl, e.__scopeMenu),
              a = n === o.value;
            return (0, Ue.jsx)(Vl, {
              scope: e.__scopeMenu,
              checked: a,
              children: (0, Ue.jsx)(Ll, {
                role: "menuitemradio",
                "aria-checked": a,
                ...r,
                ref: t,
                "data-state": ai(a),
                onSelect: pn(r.onSelect, () => o.onValueChange?.(n), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            });
          });
        Ul.displayName = Bl;
        var Wl = "MenuItemIndicator",
          [Vl, ql] = cl(Wl, { checked: !1 }),
          Kl = r.forwardRef((e, t) => {
            const { __scopeMenu: n, forceMount: r, ...o } = e,
              a = ql(Wl, n);
            return (0, Ue.jsx)(Uo, {
              present: r || oi(a.checked) || !0 === a.checked,
              children: (0, Ue.jsx)(ct.span, { ...o, ref: t, "data-state": ai(a.checked) }),
            });
          });
        Kl.displayName = Wl;
        var Ql = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, Ue.jsx)(ct.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...r,
            ref: t,
          });
        });
        Ql.displayName = "MenuSeparator";
        var Gl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e,
            o = dl(n);
          return (0, Ue.jsx)($o, { ...o, ...r, ref: t });
        });
        Gl.displayName = "MenuArrow";
        var Yl = "MenuSub",
          [Xl, Zl] = cl(Yl),
          Jl = "MenuSubTrigger",
          ei = r.forwardRef((e, t) => {
            const n = ml(Jl, e.__scopeMenu),
              o = gl(Jl, e.__scopeMenu),
              a = Zl(Jl, e.__scopeMenu),
              l = Cl(Jl, e.__scopeMenu),
              i = r.useRef(null),
              { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = l,
              u = { __scopeMenu: e.__scopeMenu },
              d = r.useCallback(() => {
                (i.current && window.clearTimeout(i.current), (i.current = null));
              }, []);
            return (
              r.useEffect(() => d, [d]),
              r.useEffect(() => {
                const e = s.current;
                return () => {
                  (window.clearTimeout(e), c(null));
                };
              }, [s, c]),
              (0, Ue.jsx)(yl, {
                asChild: !0,
                ...u,
                children: (0, Ue.jsx)(Dl, {
                  id: a.triggerId,
                  "aria-haspopup": "menu",
                  "aria-expanded": n.open,
                  "aria-controls": a.contentId,
                  "data-state": ri(n.open),
                  ...e,
                  ref: $e(t, a.onTriggerChange),
                  onClick: (t) => {
                    (e.onClick?.(t),
                      e.disabled ||
                        t.defaultPrevented ||
                        (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
                  },
                  onPointerMove: pn(
                    e.onPointerMove,
                    li((t) => {
                      (l.onItemEnter(t),
                        t.defaultPrevented ||
                          e.disabled ||
                          n.open ||
                          i.current ||
                          (l.onPointerGraceIntentChange(null),
                          (i.current = window.setTimeout(() => {
                            (n.onOpenChange(!0), d());
                          }, 100))));
                    }),
                  ),
                  onPointerLeave: pn(
                    e.onPointerLeave,
                    li((e) => {
                      d();
                      const t = n.content?.getBoundingClientRect();
                      if (t) {
                        const r = n.content?.dataset.side,
                          o = "right" === r,
                          a = o ? -5 : 5,
                          i = t[o ? "left" : "right"],
                          c = t[o ? "right" : "left"];
                        (l.onPointerGraceIntentChange({
                          area: [
                            { x: e.clientX + a, y: e.clientY },
                            { x: i, y: t.top },
                            { x: c, y: t.top },
                            { x: c, y: t.bottom },
                            { x: i, y: t.bottom },
                          ],
                          side: r,
                        }),
                          window.clearTimeout(s.current),
                          (s.current = window.setTimeout(
                            () => l.onPointerGraceIntentChange(null),
                            300,
                          )));
                      } else {
                        if ((l.onTriggerLeave(e), e.defaultPrevented)) return;
                        l.onPointerGraceIntentChange(null);
                      }
                    }),
                  ),
                  onKeyDown: pn(e.onKeyDown, (t) => {
                    const r = "" !== l.searchRef.current;
                    e.disabled ||
                      (r && " " === t.key) ||
                      (rl[o.dir].includes(t.key) &&
                        (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()));
                  }),
                }),
              })
            );
          });
        ei.displayName = Jl;
        var ti = "MenuSubContent",
          ni = r.forwardRef((e, t) => {
            const n = wl(Sl, e.__scopeMenu),
              { forceMount: o = n.forceMount, ...a } = e,
              l = ml(Sl, e.__scopeMenu),
              i = gl(Sl, e.__scopeMenu),
              s = Zl(ti, e.__scopeMenu),
              c = r.useRef(null),
              u = Be(t, c);
            return (0, Ue.jsx)(ll.Provider, {
              scope: e.__scopeMenu,
              children: (0, Ue.jsx)(Uo, {
                present: o || l.open,
                children: (0, Ue.jsx)(ll.Slot, {
                  scope: e.__scopeMenu,
                  children: (0, Ue.jsx)(zl, {
                    id: s.contentId,
                    "aria-labelledby": s.triggerId,
                    ...a,
                    ref: u,
                    align: "start",
                    side: "rtl" === i.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: (e) => {
                      (i.isUsingKeyboardRef.current && c.current?.focus(), e.preventDefault());
                    },
                    onCloseAutoFocus: (e) => e.preventDefault(),
                    onFocusOutside: pn(e.onFocusOutside, (e) => {
                      e.target !== s.trigger && l.onOpenChange(!1);
                    }),
                    onEscapeKeyDown: pn(e.onEscapeKeyDown, (e) => {
                      (i.onClose(), e.preventDefault());
                    }),
                    onKeyDown: pn(e.onKeyDown, (e) => {
                      const t = e.currentTarget.contains(e.target),
                        n = ol[i.dir].includes(e.key);
                      t && n && (l.onOpenChange(!1), s.trigger?.focus(), e.preventDefault());
                    }),
                  }),
                }),
              }),
            });
          });
        function ri(e) {
          return e ? "open" : "closed";
        }
        function oi(e) {
          return "indeterminate" === e;
        }
        function ai(e) {
          return oi(e) ? "indeterminate" : e ? "checked" : "unchecked";
        }
        function li(e) {
          return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
        }
        ni.displayName = ti;
        var ii = vl,
          si = yl,
          ci = kl,
          ui = Nl,
          di = Tl,
          fi = Ml,
          pi = Ll,
          mi = Al,
          hi = $l,
          gi = Ul,
          vi = Kl,
          yi = Ql,
          bi = Gl,
          xi = ei,
          wi = ni,
          ki = "DropdownMenu",
          [Si, Ei] = ot(ki, [ul]),
          Ci = ul(),
          [Ni, ji] = Si(ki),
          _i = (e) => {
            const {
                __scopeDropdownMenu: t,
                children: n,
                dir: o,
                open: a,
                defaultOpen: l,
                onOpenChange: i,
                modal: s = !0,
              } = e,
              c = Ci(t),
              u = r.useRef(null),
              [d, f] = hn({ prop: a, defaultProp: l ?? !1, onChange: i, caller: ki });
            return (0, Ue.jsx)(Ni, {
              scope: t,
              triggerId: Hn(),
              triggerRef: u,
              contentId: Hn(),
              open: d,
              onOpenChange: f,
              onOpenToggle: r.useCallback(() => f((e) => !e), [f]),
              modal: s,
              children: (0, Ue.jsx)(ii, {
                ...c,
                open: d,
                onOpenChange: f,
                dir: o,
                modal: s,
                children: n,
              }),
            });
          };
        _i.displayName = ki;
        var Pi = "DropdownMenuTrigger",
          zi = r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
              a = ji(Pi, n),
              l = Ci(n);
            return (0, Ue.jsx)(si, {
              asChild: !0,
              ...l,
              children: (0, Ue.jsx)(ct.button, {
                type: "button",
                id: a.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": a.open,
                "aria-controls": a.open ? a.contentId : void 0,
                "data-state": a.open ? "open" : "closed",
                "data-disabled": r ? "" : void 0,
                disabled: r,
                ...o,
                ref: $e(t, a.triggerRef),
                onPointerDown: pn(e.onPointerDown, (e) => {
                  r ||
                    0 !== e.button ||
                    !1 !== e.ctrlKey ||
                    (a.onOpenToggle(), a.open || e.preventDefault());
                }),
                onKeyDown: pn(e.onKeyDown, (e) => {
                  r ||
                    (["Enter", " "].includes(e.key) && a.onOpenToggle(),
                    "ArrowDown" === e.key && a.onOpenChange(!0),
                    ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
                }),
              }),
            });
          });
        zi.displayName = Pi;
        var Ti = (e) => {
          const { __scopeDropdownMenu: t, ...n } = e,
            r = Ci(t);
          return (0, Ue.jsx)(ci, { ...r, ...n });
        };
        Ti.displayName = "DropdownMenuPortal";
        var Mi = "DropdownMenuContent",
          Ri = r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...o } = e,
              a = ji(Mi, n),
              l = Ci(n),
              i = r.useRef(!1);
            return (0, Ue.jsx)(ui, {
              id: a.contentId,
              "aria-labelledby": a.triggerId,
              ...l,
              ...o,
              ref: t,
              onCloseAutoFocus: pn(e.onCloseAutoFocus, (e) => {
                (i.current || a.triggerRef.current?.focus(), (i.current = !1), e.preventDefault());
              }),
              onInteractOutside: pn(e.onInteractOutside, (e) => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                (a.modal && !r) || (i.current = !0);
              }),
              style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
              },
            });
          });
        Ri.displayName = Mi;
        var Oi = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = Ci(n);
          return (0, Ue.jsx)(di, { ...o, ...r, ref: t });
        });
        Oi.displayName = "DropdownMenuGroup";
        var Li = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = Ci(n);
          return (0, Ue.jsx)(fi, { ...o, ...r, ref: t });
        });
        Li.displayName = "DropdownMenuLabel";
        var Di = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = Ci(n);
          return (0, Ue.jsx)(pi, { ...o, ...r, ref: t });
        });
        ((Di.displayName = "DropdownMenuItem"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = Ci(n);
            return (0, Ue.jsx)(mi, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuCheckboxItem"));
        var Ai = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = Ci(n);
          return (0, Ue.jsx)(hi, { ...o, ...r, ref: t });
        });
        Ai.displayName = "DropdownMenuRadioGroup";
        var Fi = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = Ci(n);
          return (0, Ue.jsx)(gi, { ...o, ...r, ref: t });
        });
        Fi.displayName = "DropdownMenuRadioItem";
        var Ii = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = Ci(n);
          return (0, Ue.jsx)(vi, { ...o, ...r, ref: t });
        });
        Ii.displayName = "DropdownMenuItemIndicator";
        var Hi = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = Ci(n);
          return (0, Ue.jsx)(yi, { ...o, ...r, ref: t });
        });
        ((Hi.displayName = "DropdownMenuSeparator"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = Ci(n);
            return (0, Ue.jsx)(bi, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuArrow"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = Ci(n);
            return (0, Ue.jsx)(xi, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuSubTrigger"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = Ci(n);
            return (0, Ue.jsx)(wi, {
              ...o,
              ...r,
              ref: t,
              style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
              },
            });
          }).displayName = "DropdownMenuSubContent"));
        var $i = _i,
          Bi = zi,
          Ui = Ti,
          Wi = Ri,
          Vi = Oi,
          qi = Li,
          Ki = Di,
          Qi = Ai,
          Gi = Fi,
          Yi = Ii,
          Xi = Hi;
        function Zi(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)($i, { "data-slot": "dropdown-menu", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Ji(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(Bi, { "data-slot": "dropdown-menu-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function es(e) {
          const t = (0, l.c)(12);
          let n, r, o, a;
          t[0] !== e
            ? (({ className: n, align: o, sideOffset: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a))
            : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4]));
          const i = void 0 === o ? "start" : o,
            s = void 0 === a ? 4 : a;
          let c, u;
          return (
            t[5] !== n
              ? ((c = Ie(
                  "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  n,
                )),
                (t[5] = n),
                (t[6] = c))
              : (c = t[6]),
            t[7] !== i || t[8] !== r || t[9] !== s || t[10] !== c
              ? ((u = (0, Ue.jsx)(Ui, {
                  children: (0, Ue.jsx)(Wi, {
                    "data-slot": "dropdown-menu-content",
                    sideOffset: s,
                    align: i,
                    className: c,
                    ...r,
                  }),
                })),
                (t[7] = i),
                (t[8] = r),
                (t[9] = s),
                (t[10] = c),
                (t[11] = u))
              : (u = t[11]),
            u
          );
        }
        function ts(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(Vi, { "data-slot": "dropdown-menu-group", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function ns(e) {
          const t = (0, l.c)(12);
          let n, r, o, a;
          t[0] !== e
            ? (({ className: n, inset: r, variant: a, ...o } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a))
            : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4]));
          const i = void 0 === a ? "default" : a;
          let s, c;
          return (
            t[5] !== n
              ? ((s = Ie(
                  "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
                  n,
                )),
                (t[5] = n),
                (t[6] = s))
              : (s = t[6]),
            t[7] !== r || t[8] !== o || t[9] !== s || t[10] !== i
              ? ((c = (0, Ue.jsx)(Ki, {
                  "data-slot": "dropdown-menu-item",
                  "data-inset": r,
                  "data-variant": i,
                  className: s,
                  ...o,
                })),
                (t[7] = r),
                (t[8] = o),
                (t[9] = s),
                (t[10] = i),
                (t[11] = c))
              : (c = t[11]),
            c
          );
        }
        function rs(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(Qi, { "data-slot": "dropdown-menu-radio-group", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function os(e) {
          const t = (0, l.c)(13);
          let n, r, o, a, i, s, c;
          return (
            t[0] !== e
              ? (({ className: r, children: n, inset: o, ...a } = e),
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = o),
                (t[4] = a))
              : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4])),
            t[5] !== r
              ? ((i = Ie(
                  "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  r,
                )),
                (t[5] = r),
                (t[6] = i))
              : (i = t[6]),
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, Ue.jsx)("span", {
                  className:
                    "pointer-events-none absolute right-2 flex items-center justify-center",
                  "data-slot": "dropdown-menu-radio-item-indicator",
                  children: (0, Ue.jsx)(Yi, { children: (0, Ue.jsx)(fn, {}) }),
                })),
                (t[7] = s))
              : (s = t[7]),
            t[8] !== n || t[9] !== o || t[10] !== a || t[11] !== i
              ? ((c = (0, Ue.jsxs)(Gi, {
                  "data-slot": "dropdown-menu-radio-item",
                  "data-inset": o,
                  className: i,
                  ...a,
                  children: [s, n],
                })),
                (t[8] = n),
                (t[9] = o),
                (t[10] = a),
                (t[11] = i),
                (t[12] = c))
              : (c = t[12]),
            c
          );
        }
        function as(e) {
          const t = (0, l.c)(10);
          let n, r, o, a, i;
          return (
            t[0] !== e
              ? (({ className: n, inset: r, ...o } = e),
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = o))
              : ((n = t[1]), (r = t[2]), (o = t[3])),
            t[4] !== n
              ? ((a = Ie(
                  "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
                  n,
                )),
                (t[4] = n),
                (t[5] = a))
              : (a = t[5]),
            t[6] !== r || t[7] !== o || t[8] !== a
              ? ((i = (0, Ue.jsx)(qi, {
                  "data-slot": "dropdown-menu-label",
                  "data-inset": r,
                  className: a,
                  ...o,
                })),
                (t[6] = r),
                (t[7] = o),
                (t[8] = a),
                (t[9] = i))
              : (i = t[9]),
            i
          );
        }
        function ls(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie("-mx-1 my-1 h-px bg-border", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)(Xi, {
                  "data-slot": "dropdown-menu-separator",
                  className: o,
                  ...r,
                })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function is(e) {
          const t = (0, l.c)(83),
            { parentId: n, allowReplyOption: o, onPosted: a } = e,
            i = void 0 === o || o,
            { isLoggedIn: s, session: c } = (0, r.useContext)(Bt),
            [u, d] = (0, r.useTransition)(),
            [f, p] = (0, r.useState)("everyone"),
            [m, h] = (0, r.useState)(""),
            g = (0, r.useRef)(null);
          let v, y, b, x, w, k;
          t[0] !== m ||
          t[1] !== s ||
          t[2] !== u ||
          t[3] !== a ||
          t[4] !== n ||
          t[5] !== f ||
          t[6] !== c
            ? ((y = async () => {
                const e = m.trim();
                !s ||
                  !e ||
                  e.length > w ||
                  u ||
                  d(async () => {
                    nn.promise(
                      new Promise((t, r) => {
                        fetch(n ? `/posts/${n}/replies` : "/posts", {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Credentials: "same-origin",
                          },
                          body: JSON.stringify({ body: e, audience: f, parent: n }),
                        })
                          .then(us)
                          .then((e) => {
                            (a?.(e), h(""), t(e));
                          })
                          .catch((e) => r(e));
                      }),
                      { loading: "Chirping...", success: "Chirped", error: cs },
                    );
                  });
              }),
              (v = $t[f]),
              (w = s ? Ht[c.plan] : Ht.free),
              (x = s ? ("free" === c.plan || "basic" === c.plan ? "premium" : "premium+") : null),
              (b = m.slice(0, w)),
              (k = m.slice(w)),
              (t[0] = m),
              (t[1] = s),
              (t[2] = u),
              (t[3] = a),
              (t[4] = n),
              (t[5] = f),
              (t[6] = c),
              (t[7] = v),
              (t[8] = y),
              (t[9] = b),
              (t[10] = x),
              (t[11] = w),
              (t[12] = k))
            : ((v = t[7]), (y = t[8]), (b = t[9]), (x = t[10]), (w = t[11]), (k = t[12]));
          const S = k;
          let E, C, N, j;
          (t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = (0, Ue.jsx)(_t, { src: "https://placehold.co/40" })), (t[13] = E))
            : (E = t[13]),
            t[14] !== s || t[15] !== c
              ? ((C = s ? c.username.charAt(0) : "G"), (t[14] = s), (t[15] = c), (t[16] = C))
              : (C = t[16]),
            t[17] !== C
              ? ((N = (0, Ue.jsxs)(jt, {
                  className: "hidden sm:block",
                  children: [E, (0, Ue.jsx)(Pt, { className: "uppercase", children: C })],
                })),
                (t[17] = C),
                (t[18] = N))
              : (N = t[18]),
            t[19] !== m.length || t[20] !== S || t[21] !== b
              ? ((j =
                  m.length > 0 &&
                  (0, Ue.jsxs)("div", {
                    ref: g,
                    "aria-hidden": "true",
                    className:
                      "pointer-events-none absolute inset-0 no-scrollbar field-sizing-content overflow-y-auto px-2.5 py-2 text-base wrap-anywhere whitespace-pre-wrap text-foreground md:text-sm",
                    children: [
                      (0, Ue.jsx)("span", { children: b }),
                      S.length > 0 &&
                        (0, Ue.jsx)("span", {
                          className: "text-destructive-foreground bg-destructive/50",
                          children: S,
                        }),
                    ],
                  })),
                (t[19] = m.length),
                (t[20] = S),
                (t[21] = b),
                (t[22] = j))
              : (j = t[22]));
          const _ = m.length > 0 && "bg-transparent text-transparent caret-foreground";
          let P, z, T, M, R, O, L, D;
          (t[23] !== _
            ? ((P = Ie(
                "no-scrollbar max-h-32 w-full resize-none overflow-y-auto text-wrap wrap-anywhere",
                _,
              )),
              (t[23] = _),
              (t[24] = P))
            : (P = t[24]),
            t[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = (e) => h(e.target.value)),
                (z = (e) => {
                  g.current && (g.current.scrollTop = e.currentTarget.scrollTop);
                }),
                (t[25] = z),
                (t[26] = T))
              : ((z = t[25]), (T = t[26])),
            t[27] !== m || t[28] !== P
              ? ((M = (0, Ue.jsx)(Ze, {
                  placeholder: "What's on your mind?",
                  rows: 3,
                  maxLength: 5e3,
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  autoComplete: "off",
                  className: P,
                  value: m,
                  onChange: T,
                  onScroll: z,
                })),
                (t[27] = m),
                (t[28] = P),
                (t[29] = M))
              : (M = t[29]),
            t[30] !== M || t[31] !== j
              ? ((R = (0, Ue.jsxs)("div", { className: "relative", children: [j, M] })),
                (t[30] = M),
                (t[31] = j),
                (t[32] = R))
              : (R = t[32]),
            t[33] !== m.length || t[34] !== s
              ? ((O =
                  !s &&
                  m.length > 0 &&
                  (0, Ue.jsx)("div", {
                    className:
                      "my-2 flex flex-col gap-2 rounded-md bg-sidebar-primary/25 p-4 text-sm",
                    children: (0, Ue.jsxs)("p", {
                      children: [
                        (0, Ue.jsx)("a", {
                          href: "/auth/login",
                          className: "underline",
                          children: "Log in",
                        }),
                        " ",
                        "to start chirping!",
                      ],
                    }),
                  })),
                (t[33] = m.length),
                (t[34] = s),
                (t[35] = O))
              : (O = t[35]),
            t[36] !== m.length || t[37] !== s || t[38] !== x || t[39] !== w || t[40] !== c
              ? ((L =
                  s &&
                  "premium+" !== c.plan &&
                  m.length > w &&
                  (0, Ue.jsxs)("div", {
                    className:
                      "my-2 flex flex-col gap-2 rounded-md bg-sidebar-primary/25 p-4 text-sm",
                    children: [
                      (0, Ue.jsxs)("p", {
                        children: [
                          "Upgrade to ",
                          (0, Ue.jsx)("span", { className: "capitalize", children: x }),
                          " to write longer posts and Articles.",
                        ],
                      }),
                      (0, Ue.jsx)("a", {
                        href: "/premium",
                        className: "font-bold underline",
                        children: "Upgrade for 50% off",
                      }),
                    ],
                  })),
                (t[36] = m.length),
                (t[37] = s),
                (t[38] = x),
                (t[39] = w),
                (t[40] = c),
                (t[41] = L))
              : (L = t[41]),
            t[42] !== i || t[43] !== v || t[44] !== f
              ? ((D =
                  i &&
                  (0, Ue.jsxs)(Zi, {
                    children: [
                      (0, Ue.jsx)(Ji, {
                        asChild: !0,
                        children: (0, Ue.jsx)("div", {
                          className: "select-none",
                          children: (0, Ue.jsxs)("div", {
                            className:
                              "inline-flex flex-row items-center gap-2 rounded-full px-2 py-1 hover:bg-muted",
                            children: [
                              (0, Ue.jsx)(v.icon, { className: "size-4" }),
                              (0, Ue.jsx)("span", { className: "text-sm", children: v.label }),
                            ],
                          }),
                        }),
                      }),
                      (0, Ue.jsx)(es, {
                        align: "start",
                        className: "w-fit",
                        children: (0, Ue.jsx)(rs, {
                          value: f,
                          onValueChange: (e) => p(e),
                          children: Object.entries($t).map(ss),
                        }),
                      }),
                    ],
                  })),
                (t[42] = i),
                (t[43] = v),
                (t[44] = f),
                (t[45] = D))
              : (D = t[45]));
          const A = m.length > w && "text-destructive";
          let F, I, H, $, B, U, W, V, q, K, Q, G, Y, X, Z;
          return (
            t[46] !== A ? ((F = Ie(A)), (t[46] = A), (t[47] = F)) : (F = t[47]),
            t[48] !== m.length || t[49] !== F
              ? ((I = (0, Ue.jsx)("span", { className: F, children: m.length })),
                (t[48] = m.length),
                (t[49] = F),
                (t[50] = I))
              : (I = t[50]),
            t[51] !== w || t[52] !== I
              ? ((H = (0, Ue.jsxs)("div", {
                  className: "text-xs text-muted-foreground",
                  children: [I, "/", w],
                })),
                (t[51] = w),
                (t[52] = I),
                (t[53] = H))
              : (H = t[53]),
            t[54] !== D || t[55] !== H
              ? (($ = (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center justify-between",
                  children: [D, H],
                })),
                (t[54] = D),
                (t[55] = H),
                (t[56] = $))
              : ($ = t[56]),
            t[57] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, Ue.jsx)("div", {
                  title: "Media",
                  className: "rounded-full p-2 hover:bg-muted",
                  children: (0, Ue.jsx)(zt, { className: "size-4" }),
                })),
                (t[57] = B))
              : (B = t[57]),
            t[58] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = (0, Ue.jsx)("div", {
                  title: "GIF",
                  className: "rounded-full p-2 hover:bg-muted",
                  children: (0, Ue.jsx)(Tt, { className: "size-4" }),
                })),
                (t[58] = U))
              : (U = t[58]),
            t[59] === Symbol.for("react.memo_cache_sentinel")
              ? ((W = (0, Ue.jsx)("div", {
                  title: "Emoji",
                  className: "rounded-full p-2 hover:bg-muted",
                  children: (0, Ue.jsx)(Mt, { className: "size-4" }),
                })),
                (t[59] = W))
              : (W = t[59]),
            t[60] === Symbol.for("react.memo_cache_sentinel")
              ? ((V = (0, Ue.jsx)("div", {
                  title: "Schedule",
                  className: "rounded-full p-2 hover:bg-muted",
                  children: (0, Ue.jsx)(Rt, { className: "size-4" }),
                })),
                (t[60] = V))
              : (V = t[60]),
            t[61] === Symbol.for("react.memo_cache_sentinel")
              ? ((q = (0, Ue.jsx)("div", {
                  title: "Location",
                  className: "rounded-full p-2 hover:bg-muted",
                  children: (0, Ue.jsx)(Ot, { className: "size-4" }),
                })),
                (t[61] = q))
              : (q = t[61]),
            t[62] === Symbol.for("react.memo_cache_sentinel")
              ? ((K = (0, Ue.jsxs)("div", {
                  className: "flex flex-row",
                  children: [
                    B,
                    U,
                    W,
                    V,
                    q,
                    (0, Ue.jsx)("div", {
                      title: "Content Disclosure",
                      className: "rounded-full p-2 hover:bg-muted",
                      children: (0, Ue.jsx)(Lt, { className: "size-4" }),
                    }),
                  ],
                })),
                (t[62] = K))
              : (K = t[62]),
            t[63] !== m || t[64] !== s || t[65] !== u || t[66] !== w
              ? ((Q = !s || 0 === m.trim().length || m.length > w || u),
                (t[63] = m),
                (t[64] = s),
                (t[65] = u),
                (t[66] = w),
                (t[67] = Q))
              : (Q = t[67]),
            t[68] !== u
              ? ((G = u && (0, Ue.jsx)(Vt, { "data-icon": "inline-start" })),
                (t[68] = u),
                (t[69] = G))
              : (G = t[69]),
            t[70] !== y || t[71] !== Q || t[72] !== G
              ? ((Y = (0, Ue.jsxs)("div", {
                  className: "flex flex-row justify-between",
                  children: [
                    K,
                    (0, Ue.jsxs)(Ye, { disabled: Q, onClick: y, children: [G, "Chirp"] }),
                  ],
                })),
                (t[70] = y),
                (t[71] = Q),
                (t[72] = G),
                (t[73] = Y))
              : (Y = t[73]),
            t[74] !== R || t[75] !== O || t[76] !== L || t[77] !== $ || t[78] !== Y
              ? ((X = (0, Ue.jsxs)("div", {
                  className: "flex flex-1 flex-col gap-1",
                  children: [R, O, L, $, Y],
                })),
                (t[74] = R),
                (t[75] = O),
                (t[76] = L),
                (t[77] = $),
                (t[78] = Y),
                (t[79] = X))
              : (X = t[79]),
            t[80] !== X || t[81] !== N
              ? ((Z = (0, Ue.jsxs)("div", {
                  className: "flex flex-row gap-2 border-b border-border p-4",
                  children: [N, X],
                })),
                (t[80] = X),
                (t[81] = N),
                (t[82] = Z))
              : (Z = t[82]),
            Z
          );
        }
        function ss(e) {
          const [t, n] = e;
          return (0, Ue.jsxs)(
            os,
            { value: t, children: [(0, Ue.jsx)(n.icon, { className: "size-4" }), n.label] },
            t,
          );
        }
        function cs(e) {
          return e instanceof Error ? e.message : "Failed to Chirp";
        }
        function us(e) {
          return e.json();
        }
        function ds(e) {
          const t = (0, l.c)(10);
          let n, r, o;
          t[0] !== e
            ? (({ className: n, size: o, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o))
            : ((n = t[1]), (r = t[2]), (o = t[3]));
          const a = void 0 === o ? "default" : o;
          let i, s;
          return (
            t[4] !== n
              ? ((i = Ie(
                  "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
                  n,
                )),
                (t[4] = n),
                (t[5] = i))
              : (i = t[5]),
            t[6] !== r || t[7] !== a || t[8] !== i
              ? ((s = (0, Ue.jsx)("div", {
                  "data-slot": "card",
                  "data-size": a,
                  className: i,
                  ...r,
                })),
                (t[6] = r),
                (t[7] = a),
                (t[8] = i),
                (t[9] = s))
              : (s = t[9]),
            s
          );
        }
        function fs(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "card-header", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function ps(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "cn-font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "card-title", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function ms(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie("px-4 group-data-[size=sm]/card:px-3", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "card-content", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function hs(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "card-footer", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const gs = x(
          "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
          {
            variants: {
              variant: {
                default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
                secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
                destructive:
                  "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
                outline:
                  "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
                ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
                link: "text-primary underline-offset-4 [a&]:hover:underline",
              },
            },
            defaultVariants: { variant: "default" },
          },
        );
        function vs(e) {
          const t = (0, l.c)(13);
          let n, r, o, a;
          t[0] !== e
            ? (({ className: n, variant: o, asChild: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a))
            : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4]));
          const i = void 0 === o ? "default" : o,
            s = void 0 !== a && a ? Ve : "span";
          let c, u;
          return (
            t[5] !== n || t[6] !== i
              ? ((c = Ie(gs({ variant: i }), n)), (t[5] = n), (t[6] = i), (t[7] = c))
              : (c = t[7]),
            t[8] !== s || t[9] !== r || t[10] !== c || t[11] !== i
              ? ((u = (0, Ue.jsx)(s, {
                  "data-slot": "badge",
                  "data-variant": i,
                  className: c,
                  ...r,
                })),
                (t[8] = s),
                (t[9] = r),
                (t[10] = c),
                (t[11] = i),
                (t[12] = u))
              : (u = t[12]),
            u
          );
        }
        function ys() {
          const e = (0, l.c)(3);
          let t, n, r;
          return (
            e[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, Ue.jsx)(fs, {
                  children: (0, Ue.jsxs)(ps, {
                    className: "flex flex-row items-center gap-2",
                    children: [
                      (0, Ue.jsx)("span", {
                        className: "text-lg font-bold md:text-xl",
                        children: "Subscribe to Premium",
                      }),
                      (0, Ue.jsx)(vs, {
                        variant: "outline",
                        className: "bg-green-950 text-xs text-green-300",
                        children: "50% off",
                      }),
                    ],
                  }),
                })),
                (e[0] = t))
              : (t = e[0]),
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, Ue.jsx)(ms, {
                  children: (0, Ue.jsx)("p", {
                    children:
                      "Get rid of ads, see your analytics, boost your replies and unlock 20+ features.",
                  }),
                })),
                (e[1] = n))
              : (n = e[1]),
            e[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, Ue.jsxs)(ds, {
                  children: [
                    t,
                    n,
                    (0, Ue.jsx)(hs, {
                      children: (0, Ue.jsx)(Ye, {
                        asChild: !0,
                        children: (0, Ue.jsx)("a", { href: "/premium", children: "Subscribe" }),
                      }),
                    }),
                  ],
                })),
                (e[2] = r))
              : (r = e[2]),
            r
          );
        }
        const bs = p("house", [
            ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
            [
              "path",
              {
                d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                key: "r6nss1",
              },
            ],
          ]),
          xs = p("bell", [
            ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
            [
              "path",
              {
                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
                key: "11g9vi",
              },
            ],
          ]),
          ws = p("user-plus", [
            ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
            ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
            ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
            ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
          ]),
          ks = p("sparkles", [
            [
              "path",
              {
                d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                key: "1s2grr",
              },
            ],
            ["path", { d: "M20 2v4", key: "1rf3ol" }],
            ["path", { d: "M22 4h-4", key: "gwowj6" }],
            ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
          ]),
          Ss = p("bookmark", [
            [
              "path",
              {
                d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
                key: "oz39mx",
              },
            ],
          ]),
          Es = p("rocket", [
            ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
            [
              "path",
              {
                d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
                key: "u4xsad",
              },
            ],
            [
              "path",
              {
                d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
                key: "676m9",
              },
            ],
            ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }],
          ]),
          Cs = p("crown", [
            [
              "path",
              {
                d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
                key: "1vdc57",
              },
            ],
            ["path", { d: "M5 21h14", key: "11awu3" }],
          ]),
          Ns = p("user", [
            ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
            ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
          ]),
          js = p("zap", [
            [
              "path",
              {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db",
              },
            ],
          ]),
          _s = p("square-arrow-out-up-right", [
            [
              "path",
              { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" },
            ],
            ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
            ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
          ]),
          Ps = p("settings", [
            [
              "path",
              {
                d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                key: "1i5ecw",
              },
            ],
            ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ]),
          zs = p("log-out", [
            ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
            ["path", { d: "M21 12H9", key: "dn1m92" }],
            ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
          ]),
          Ts = p("log-in", [
            ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
            ["path", { d: "M15 12H3", key: "6jk70r" }],
            ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
          ]);
        var Ms = Object.freeze({
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
          }),
          Rs = r.forwardRef((e, t) =>
            (0, Ue.jsx)(ct.span, { ...e, ref: t, style: { ...Ms, ...e.style } }),
          );
        Rs.displayName = "VisuallyHidden";
        var Os = Rs,
          [Ls, Ds] = ot("Tooltip", [ko]),
          As = ko(),
          Fs = "TooltipProvider",
          Is = 700,
          Hs = "tooltip.open",
          [$s, Bs] = Ls(Fs),
          Us = (e) => {
            const {
                __scopeTooltip: t,
                delayDuration: n = Is,
                skipDelayDuration: o = 300,
                disableHoverableContent: a = !1,
                children: l,
              } = e,
              i = r.useRef(!0),
              s = r.useRef(!1),
              c = r.useRef(0);
            return (
              r.useEffect(() => {
                const e = c.current;
                return () => window.clearTimeout(e);
              }, []),
              (0, Ue.jsx)($s, {
                scope: t,
                isOpenDelayedRef: i,
                delayDuration: n,
                onOpen: r.useCallback(() => {
                  (window.clearTimeout(c.current), (i.current = !1));
                }, []),
                onClose: r.useCallback(() => {
                  (window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => (i.current = !0), o)));
                }, [o]),
                isPointerInTransitRef: s,
                onPointerInTransitChange: r.useCallback((e) => {
                  s.current = e;
                }, []),
                disableHoverableContent: a,
                children: l,
              })
            );
          };
        Us.displayName = Fs;
        var Ws = "Tooltip",
          [Vs, qs] = Ls(Ws),
          Ks = (e) => {
            const {
                __scopeTooltip: t,
                children: n,
                open: o,
                defaultOpen: a,
                onOpenChange: l,
                disableHoverableContent: i,
                delayDuration: s,
              } = e,
              c = Bs(Ws, e.__scopeTooltip),
              u = As(t),
              [d, f] = r.useState(null),
              p = Hn(),
              m = r.useRef(0),
              h = i ?? c.disableHoverableContent,
              g = s ?? c.delayDuration,
              v = r.useRef(!1),
              [y, b] = hn({
                prop: o,
                defaultProp: a ?? !1,
                onChange: (e) => {
                  (e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Hs))) : c.onClose(),
                    l?.(e));
                },
                caller: Ws,
              }),
              x = r.useMemo(
                () => (y ? (v.current ? "delayed-open" : "instant-open") : "closed"),
                [y],
              ),
              w = r.useCallback(() => {
                (window.clearTimeout(m.current), (m.current = 0), (v.current = !1), b(!0));
              }, [b]),
              k = r.useCallback(() => {
                (window.clearTimeout(m.current), (m.current = 0), b(!1));
              }, [b]),
              S = r.useCallback(() => {
                (window.clearTimeout(m.current),
                  (m.current = window.setTimeout(() => {
                    ((v.current = !0), b(!0), (m.current = 0));
                  }, g)));
              }, [g, b]);
            return (
              r.useEffect(
                () => () => {
                  m.current && (window.clearTimeout(m.current), (m.current = 0));
                },
                [],
              ),
              (0, Ue.jsx)(Fo, {
                ...u,
                children: (0, Ue.jsx)(Vs, {
                  scope: t,
                  contentId: p,
                  open: y,
                  stateAttribute: x,
                  trigger: d,
                  onTriggerChange: f,
                  onTriggerEnter: r.useCallback(() => {
                    c.isOpenDelayedRef.current ? S() : w();
                  }, [c.isOpenDelayedRef, S, w]),
                  onTriggerLeave: r.useCallback(() => {
                    h ? k() : (window.clearTimeout(m.current), (m.current = 0));
                  }, [k, h]),
                  onOpen: w,
                  onClose: k,
                  disableHoverableContent: h,
                  children: n,
                }),
              })
            );
          };
        Ks.displayName = Ws;
        var Qs = "TooltipTrigger",
          Gs = r.forwardRef((e, t) => {
            const { __scopeTooltip: n, ...o } = e,
              a = qs(Qs, n),
              l = Bs(Qs, n),
              i = As(n),
              s = Be(t, r.useRef(null), a.onTriggerChange),
              c = r.useRef(!1),
              u = r.useRef(!1),
              d = r.useCallback(() => (c.current = !1), []);
            return (
              r.useEffect(() => () => document.removeEventListener("pointerup", d), [d]),
              (0, Ue.jsx)(Io, {
                asChild: !0,
                ...i,
                children: (0, Ue.jsx)(ct.button, {
                  "aria-describedby": a.open ? a.contentId : void 0,
                  "data-state": a.stateAttribute,
                  ...o,
                  ref: s,
                  onPointerMove: pn(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType &&
                      (u.current ||
                        l.isPointerInTransitRef.current ||
                        (a.onTriggerEnter(), (u.current = !0)));
                  }),
                  onPointerLeave: pn(e.onPointerLeave, () => {
                    (a.onTriggerLeave(), (u.current = !1));
                  }),
                  onPointerDown: pn(e.onPointerDown, () => {
                    (a.open && a.onClose(),
                      (c.current = !0),
                      document.addEventListener("pointerup", d, { once: !0 }));
                  }),
                  onFocus: pn(e.onFocus, () => {
                    c.current || a.onOpen();
                  }),
                  onBlur: pn(e.onBlur, a.onClose),
                  onClick: pn(e.onClick, a.onClose),
                }),
              })
            );
          });
        Gs.displayName = Qs;
        var Ys = "TooltipPortal",
          [Xs, Zs] = Ls(Ys, { forceMount: void 0 }),
          Js = (e) => {
            const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
              a = qs(Ys, t);
            return (0, Ue.jsx)(Xs, {
              scope: t,
              forceMount: n,
              children: (0, Ue.jsx)(Uo, {
                present: n || a.open,
                children: (0, Ue.jsx)(Bo, { asChild: !0, container: o, children: r }),
              }),
            });
          };
        Js.displayName = Ys;
        var ec = "TooltipContent",
          tc = r.forwardRef((e, t) => {
            const n = Zs(ec, e.__scopeTooltip),
              { forceMount: r = n.forceMount, side: o = "top", ...a } = e,
              l = qs(ec, e.__scopeTooltip);
            return (0, Ue.jsx)(Uo, {
              present: r || l.open,
              children: l.disableHoverableContent
                ? (0, Ue.jsx)(lc, { side: o, ...a, ref: t })
                : (0, Ue.jsx)(nc, { side: o, ...a, ref: t }),
            });
          }),
          nc = r.forwardRef((e, t) => {
            const n = qs(ec, e.__scopeTooltip),
              o = Bs(ec, e.__scopeTooltip),
              a = r.useRef(null),
              l = Be(t, a),
              [i, s] = r.useState(null),
              { trigger: c, onClose: u } = n,
              d = a.current,
              { onPointerInTransitChange: f } = o,
              p = r.useCallback(() => {
                (s(null), f(!1));
              }, [f]),
              m = r.useCallback(
                (e, t) => {
                  const n = e.currentTarget,
                    r = { x: e.clientX, y: e.clientY },
                    o = (function (e, t, n = 5) {
                      const r = [];
                      switch (t) {
                        case "top":
                          r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                          break;
                        case "bottom":
                          r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                          break;
                        case "left":
                          r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                          break;
                        case "right":
                          r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
                      }
                      return r;
                    })(
                      r,
                      (function (e, t) {
                        const n = Math.abs(t.top - e.y),
                          r = Math.abs(t.bottom - e.y),
                          o = Math.abs(t.right - e.x),
                          a = Math.abs(t.left - e.x);
                        switch (Math.min(n, r, o, a)) {
                          case a:
                            return "left";
                          case o:
                            return "right";
                          case n:
                            return "top";
                          case r:
                            return "bottom";
                          default:
                            throw new Error("unreachable");
                        }
                      })(r, n.getBoundingClientRect()),
                    ),
                    a = (function (e) {
                      const t = e.slice();
                      return (
                        t.sort((e, t) =>
                          e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0,
                        ),
                        (function (e) {
                          if (e.length <= 1) return e.slice();
                          const t = [];
                          for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            for (; t.length >= 2; ) {
                              const e = t[t.length - 1],
                                n = t[t.length - 2];
                              if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                              t.pop();
                            }
                            t.push(r);
                          }
                          t.pop();
                          const n = [];
                          for (let t = e.length - 1; t >= 0; t--) {
                            const r = e[t];
                            for (; n.length >= 2; ) {
                              const e = n[n.length - 1],
                                t = n[n.length - 2];
                              if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                              n.pop();
                            }
                            n.push(r);
                          }
                          return (
                            n.pop(),
                            1 === t.length &&
                            1 === n.length &&
                            t[0].x === n[0].x &&
                            t[0].y === n[0].y
                              ? t
                              : t.concat(n)
                          );
                        })(t)
                      );
                    })([
                      ...o,
                      ...(function (e) {
                        const { top: t, right: n, bottom: r, left: o } = e;
                        return [
                          { x: o, y: t },
                          { x: n, y: t },
                          { x: n, y: r },
                          { x: o, y: r },
                        ];
                      })(t.getBoundingClientRect()),
                    ]);
                  (s(a), f(!0));
                },
                [f],
              );
            return (
              r.useEffect(() => () => p(), [p]),
              r.useEffect(() => {
                if (c && d) {
                  const e = (e) => m(e, d),
                    t = (e) => m(e, c);
                  return (
                    c.addEventListener("pointerleave", e),
                    d.addEventListener("pointerleave", t),
                    () => {
                      (c.removeEventListener("pointerleave", e),
                        d.removeEventListener("pointerleave", t));
                    }
                  );
                }
              }, [c, d, m, p]),
              r.useEffect(() => {
                if (i) {
                  const e = (e) => {
                    const t = e.target,
                      n = { x: e.clientX, y: e.clientY },
                      r = c?.contains(t) || d?.contains(t),
                      o = !(function (e, t) {
                        const { x: n, y: r } = e;
                        let o = !1;
                        for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                          const l = t[e],
                            i = t[a],
                            s = l.x,
                            c = l.y,
                            u = i.x,
                            d = i.y;
                          c > r != d > r && n < ((u - s) * (r - c)) / (d - c) + s && (o = !o);
                        }
                        return o;
                      })(n, i);
                    r ? p() : o && (p(), u());
                  };
                  return (
                    document.addEventListener("pointermove", e),
                    () => document.removeEventListener("pointermove", e)
                  );
                }
              }, [c, d, i, u, p]),
              (0, Ue.jsx)(lc, { ...e, ref: l })
            );
          }),
          [rc, oc] = Ls(Ws, { isInside: !1 }),
          ac = (function (e) {
            const t = ({ children: e }) => (0, Ue.jsx)(Ue.Fragment, { children: e });
            return ((t.displayName = `${e}.Slottable`), (t.__radixId = Ke), t);
          })("TooltipContent"),
          lc = r.forwardRef((e, t) => {
            const {
                __scopeTooltip: n,
                children: o,
                "aria-label": a,
                onEscapeKeyDown: l,
                onPointerDownOutside: i,
                ...s
              } = e,
              c = qs(ec, n),
              u = As(n),
              { onClose: d } = c;
            return (
              r.useEffect(
                () => (document.addEventListener(Hs, d), () => document.removeEventListener(Hs, d)),
                [d],
              ),
              r.useEffect(() => {
                if (c.trigger) {
                  const e = (e) => {
                    const t = e.target;
                    t?.contains(c.trigger) && d();
                  };
                  return (
                    window.addEventListener("scroll", e, { capture: !0 }),
                    () => window.removeEventListener("scroll", e, { capture: !0 })
                  );
                }
              }, [c.trigger, d]),
              (0, Ue.jsx)(kn, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: i,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: d,
                children: (0, Ue.jsxs)(Ho, {
                  "data-state": c.stateAttribute,
                  ...u,
                  ...s,
                  ref: t,
                  style: {
                    ...s.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                  },
                  children: [
                    (0, Ue.jsx)(ac, { children: o }),
                    (0, Ue.jsx)(rc, {
                      scope: n,
                      isInside: !0,
                      children: (0, Ue.jsx)(Os, {
                        id: c.contentId,
                        role: "tooltip",
                        children: a || o,
                      }),
                    }),
                  ],
                }),
              })
            );
          });
        tc.displayName = ec;
        var ic = "TooltipArrow",
          sc = r.forwardRef((e, t) => {
            const { __scopeTooltip: n, ...r } = e,
              o = As(n);
            return oc(ic, n).isInside ? null : (0, Ue.jsx)($o, { ...o, ...r, ref: t });
          });
        sc.displayName = ic;
        var cc = Us,
          uc = Ks,
          dc = Gs,
          fc = Js,
          pc = tc,
          mc = sc;
        function hc(e) {
          const t = (0, l.c)(6);
          let n, r;
          t[0] !== e
            ? (({ delayDuration: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r))
            : ((n = t[1]), (r = t[2]));
          const o = void 0 === r ? 0 : r;
          let a;
          return (
            t[3] !== o || t[4] !== n
              ? ((a = (0, Ue.jsx)(cc, { "data-slot": "tooltip-provider", delayDuration: o, ...n })),
                (t[3] = o),
                (t[4] = n),
                (t[5] = a))
              : (a = t[5]),
            a
          );
        }
        function gc(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(uc, { "data-slot": "tooltip", ...n })), (t[2] = n), (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function vc(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(dc, { "data-slot": "tooltip-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function yc(e) {
          const t = (0, l.c)(13);
          let n, r, o, a;
          t[0] !== e
            ? (({ className: r, sideOffset: a, children: n, ...o } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a))
            : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4]));
          const i = void 0 === a ? 0 : a;
          let s, c, u;
          return (
            t[5] !== r
              ? ((s = Ie(
                  "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  r,
                )),
                (t[5] = r),
                (t[6] = s))
              : (s = t[6]),
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, Ue.jsx)(mc, {
                  className:
                    "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground",
                })),
                (t[7] = c))
              : (c = t[7]),
            t[8] !== n || t[9] !== o || t[10] !== i || t[11] !== s
              ? ((u = (0, Ue.jsx)(fc, {
                  children: (0, Ue.jsxs)(pc, {
                    "data-slot": "tooltip-content",
                    sideOffset: i,
                    className: s,
                    ...o,
                    children: [n, c],
                  }),
                })),
                (t[8] = n),
                (t[9] = o),
                (t[10] = i),
                (t[11] = s),
                (t[12] = u))
              : (u = t[12]),
            u
          );
        }
        const bc = [
          { icon: bs, label: "Home", href: "/", showOnMobile: !0 },
          { icon: h, label: "Explore", href: "/", showOnMobile: !0 },
          { icon: xs, label: "Notifications", href: "/", showOnMobile: !1 },
          { icon: ws, label: "Follow", href: "/", showOnMobile: !1 },
          { icon: m, label: "Chat", href: "/", showOnMobile: !0 },
          { icon: ks, label: "Myna", href: "/", showOnMobile: !0 },
          { icon: Ss, label: "Bookmarks", href: "/", showOnMobile: !1 },
          { icon: Es, label: "Creator Studio", href: "/", showOnMobile: !1 },
          { icon: Cs, label: "Premium", href: "/premium", showOnMobile: !0 },
          { icon: Ns, label: "Profile", href: "/profile", showOnMobile: !0 },
        ];
        function xc() {
          const e = (0, l.c)(41),
            { isLoggedIn: t, session: n } = (0, r.useContext)(Bt);
          let o, a, i, s, c, u, d, f;
          (e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, Ue.jsx)("div", {
                className:
                  "hidden size-9 shrink-0 items-center justify-center rounded-lg bg-primary select-none sm:inline-flex",
                children: "C",
              })),
              (e[0] = o))
            : (o = e[0]),
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, Ue.jsxs)("div", {
                  className: "flex flex-row gap-4 max-sm:flex-1 sm:flex-col",
                  children: [
                    o,
                    (0, Ue.jsx)("div", {
                      className:
                        "flex flex-row items-center gap-0.5 max-sm:w-full max-sm:justify-evenly sm:flex-col",
                      children: bc.map(wc),
                    }),
                  ],
                })),
                (e[1] = a))
              : (a = e[1]),
            e[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, Ue.jsx)(_t, { src: "https://placehold.co/40" })), (e[2] = i))
              : (i = e[2]),
            e[3] !== t || e[4] !== n
              ? ((s = t ? n.username.charAt(0) : "G"), (e[3] = t), (e[4] = n), (e[5] = s))
              : (s = e[5]),
            e[6] !== s
              ? ((c = (0, Ue.jsx)(Ji, {
                  asChild: !0,
                  children: (0, Ue.jsxs)(jt, {
                    children: [i, (0, Ue.jsx)(Pt, { className: "uppercase", children: s })],
                  }),
                })),
                (e[6] = s),
                (e[7] = c))
              : (c = e[7]),
            e[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, Ue.jsx)(_t, { src: "https://placehold.co/40" })), (e[8] = u))
              : (u = e[8]),
            e[9] !== t || e[10] !== n
              ? ((d = t ? n.displayName.charAt(0) : "G"), (e[9] = t), (e[10] = n), (e[11] = d))
              : (d = e[11]),
            e[12] !== d
              ? ((f = (0, Ue.jsxs)(jt, {
                  className: "size-8 rounded-lg",
                  children: [u, (0, Ue.jsx)(Pt, { className: "rounded-lg", children: d })],
                })),
                (e[12] = d),
                (e[13] = f))
              : (f = e[13]));
          const p = t ? n.displayName : "Guest User";
          let m;
          e[14] !== p
            ? ((m = (0, Ue.jsx)("span", { className: "truncate font-medium", children: p })),
              (e[14] = p),
              (e[15] = m))
            : (m = e[15]);
          const h = t ? `@${n.username}` : "@guestuser";
          let g, v, y, b, x, w, k, S, E, C, N, j;
          return (
            e[16] !== h
              ? ((g = (0, Ue.jsx)("span", { className: "truncate text-xs", children: h })),
                (e[16] = h),
                (e[17] = g))
              : (g = e[17]),
            e[18] !== g || e[19] !== m
              ? ((v = (0, Ue.jsxs)("div", {
                  className: "grid flex-1 text-left text-sm leading-tight",
                  children: [m, g],
                })),
                (e[18] = g),
                (e[19] = m),
                (e[20] = v))
              : (v = e[20]),
            e[21] !== v || e[22] !== f
              ? ((y = (0, Ue.jsx)(as, {
                  className: "p-0 font-normal",
                  children: (0, Ue.jsxs)("div", {
                    className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                    children: [f, v],
                  }),
                })),
                (e[21] = v),
                (e[22] = f),
                (e[23] = y))
              : (y = e[23]),
            e[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, Ue.jsx)(ls, {})), (e[24] = b))
              : (b = e[24]),
            e[25] !== t || e[26] !== n
              ? ((x =
                  (!t || "free" === n.plan) &&
                  (0, Ue.jsxs)(Ue.Fragment, {
                    children: [
                      (0, Ue.jsx)(ts, {
                        children: (0, Ue.jsx)(ns, {
                          asChild: !0,
                          children: (0, Ue.jsxs)("a", {
                            href: "/premium",
                            children: [(0, Ue.jsx)(Cs, {}), "Upgrade to Premium"],
                          }),
                        }),
                      }),
                      (0, Ue.jsx)(ls, {}),
                    ],
                  })),
                (e[25] = t),
                (e[26] = n),
                (e[27] = x))
              : (x = e[27]),
            e[28] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, Ue.jsxs)(ns, { children: [(0, Ue.jsx)(js, {}), " Business"] })),
                (e[28] = w))
              : (w = e[28]),
            e[29] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = (0, Ue.jsxs)(ns, { children: [(0, Ue.jsx)(_s, {}), " Ads"] })), (e[29] = k))
              : (k = e[29]),
            e[30] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, Ue.jsxs)(ts, {
                  children: [
                    w,
                    k,
                    (0, Ue.jsxs)(ns, { children: [(0, Ue.jsx)(Ps, {}), " Settings & Privacy"] }),
                  ],
                })),
                (E = (0, Ue.jsx)(ls, {})),
                (e[30] = S),
                (e[31] = E))
              : ((S = e[30]), (E = e[31])),
            e[32] !== t
              ? ((C = (0, Ue.jsx)(ns, {
                  asChild: !0,
                  children: t
                    ? (0, Ue.jsxs)("a", {
                        href: "/auth/logout",
                        className: "flex items-center gap-2",
                        children: [(0, Ue.jsx)(zs, {}), " Log out"],
                      })
                    : (0, Ue.jsxs)("a", {
                        href: "/auth/login",
                        className: "flex items-center gap-2",
                        children: [(0, Ue.jsx)(Ts, {}), " Log in"],
                      }),
                })),
                (e[32] = t),
                (e[33] = C))
              : (C = e[33]),
            e[34] !== y || e[35] !== x || e[36] !== C
              ? ((N = (0, Ue.jsxs)(es, {
                  className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                  side: "right",
                  align: "end",
                  sideOffset: 4,
                  children: [y, b, x, S, E, C],
                })),
                (e[34] = y),
                (e[35] = x),
                (e[36] = C),
                (e[37] = N))
              : (N = e[37]),
            e[38] !== N || e[39] !== c
              ? ((j = (0, Ue.jsxs)("div", {
                  className:
                    "flex flex-row items-center overflow-y-hidden border-border px-2 py-4 max-sm:border-t sm:flex-col",
                  children: [
                    a,
                    (0, Ue.jsx)("div", {
                      className: "ml-auto sm:mt-auto",
                      children: (0, Ue.jsxs)(Zi, { children: [c, N] }),
                    }),
                  ],
                })),
                (e[38] = N),
                (e[39] = c),
                (e[40] = j))
              : (j = e[40]),
            j
          );
        }
        function wc(e) {
          return (0, Ue.jsxs)(
            gc,
            {
              children: [
                (0, Ue.jsx)(vc, {
                  asChild: !0,
                  children: (0, Ue.jsx)(Ye, {
                    variant: "ghost",
                    size: "icon-lg",
                    className: Ie(!e.showOnMobile && "hidden sm:inline-flex"),
                    asChild: !0,
                    children: (0, Ue.jsx)("a", {
                      href: e.href,
                      children: (0, Ue.jsx)(e.icon, { className: "size-5" }),
                    }),
                  }),
                }),
                (0, Ue.jsx)(yc, { side: "right", children: e.label }),
              ],
            },
            e.href,
          );
        }
        const kc = p("ellipsis", [
            ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
            ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
            ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
          ]),
          Sc = p("link", [
            [
              "path",
              { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" },
            ],
            [
              "path",
              { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" },
            ],
          ]),
          Ec = p("trash", [
            ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
            ["path", { d: "M3 6h18", key: "d0wm0j" }],
            ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
          ]),
          Cc = p("heart", [
            [
              "path",
              {
                d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
                key: "mvr1a0",
              },
            ],
          ]),
          Nc = p("share-2", [
            ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
            ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
            ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
            ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
            ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
          ]);
        var jc,
          _c = "HoverCard",
          [Pc, zc] = ot(_c, [ko]),
          Tc = ko(),
          [Mc, Rc] = Pc(_c),
          Oc = (e) => {
            const {
                __scopeHoverCard: t,
                children: n,
                open: o,
                defaultOpen: a,
                onOpenChange: l,
                openDelay: i = 700,
                closeDelay: s = 300,
              } = e,
              c = Tc(t),
              u = r.useRef(0),
              d = r.useRef(0),
              f = r.useRef(!1),
              p = r.useRef(!1),
              [m, h] = hn({ prop: o, defaultProp: a ?? !1, onChange: l, caller: _c }),
              g = r.useCallback(() => {
                (clearTimeout(d.current), (u.current = window.setTimeout(() => h(!0), i)));
              }, [i, h]),
              v = r.useCallback(() => {
                (clearTimeout(u.current),
                  f.current || p.current || (d.current = window.setTimeout(() => h(!1), s)));
              }, [s, h]),
              y = r.useCallback(() => h(!1), [h]);
            return (
              r.useEffect(
                () => () => {
                  (clearTimeout(u.current), clearTimeout(d.current));
                },
                [],
              ),
              (0, Ue.jsx)(Mc, {
                scope: t,
                open: m,
                onOpenChange: h,
                onOpen: g,
                onClose: v,
                onDismiss: y,
                hasSelectionRef: f,
                isPointerDownOnContentRef: p,
                children: (0, Ue.jsx)(Fo, { ...c, children: n }),
              })
            );
          };
        Oc.displayName = _c;
        var Lc = "HoverCardTrigger",
          Dc = r.forwardRef((e, t) => {
            const { __scopeHoverCard: n, ...r } = e,
              o = Rc(Lc, n),
              a = Tc(n);
            return (0, Ue.jsx)(Io, {
              asChild: !0,
              ...a,
              children: (0, Ue.jsx)(ct.a, {
                "data-state": o.open ? "open" : "closed",
                ...r,
                ref: t,
                onPointerEnter: pn(e.onPointerEnter, Wc(o.onOpen)),
                onPointerLeave: pn(e.onPointerLeave, Wc(o.onClose)),
                onFocus: pn(e.onFocus, o.onOpen),
                onBlur: pn(e.onBlur, o.onClose),
                onTouchStart: pn(e.onTouchStart, (e) => e.preventDefault()),
              }),
            });
          });
        Dc.displayName = Lc;
        var Ac = "HoverCardPortal",
          [Fc, Ic] = Pc(Ac, { forceMount: void 0 }),
          Hc = (e) => {
            const { __scopeHoverCard: t, forceMount: n, children: r, container: o } = e,
              a = Rc(Ac, t);
            return (0, Ue.jsx)(Fc, {
              scope: t,
              forceMount: n,
              children: (0, Ue.jsx)(Uo, {
                present: n || a.open,
                children: (0, Ue.jsx)(Bo, { asChild: !0, container: o, children: r }),
              }),
            });
          };
        Hc.displayName = Ac;
        var $c = "HoverCardContent",
          Bc = r.forwardRef((e, t) => {
            const n = Ic($c, e.__scopeHoverCard),
              { forceMount: r = n.forceMount, ...o } = e,
              a = Rc($c, e.__scopeHoverCard);
            return (0, Ue.jsx)(Uo, {
              present: r || a.open,
              children: (0, Ue.jsx)(Uc, {
                "data-state": a.open ? "open" : "closed",
                ...o,
                onPointerEnter: pn(e.onPointerEnter, Wc(a.onOpen)),
                onPointerLeave: pn(e.onPointerLeave, Wc(a.onClose)),
                ref: t,
              }),
            });
          });
        Bc.displayName = $c;
        var Uc = r.forwardRef((e, t) => {
          const {
              __scopeHoverCard: n,
              onEscapeKeyDown: o,
              onPointerDownOutside: a,
              onFocusOutside: l,
              onInteractOutside: i,
              ...s
            } = e,
            c = Rc($c, n),
            u = Tc(n),
            d = r.useRef(null),
            f = Be(t, d),
            [p, m] = r.useState(!1);
          return (
            r.useEffect(() => {
              if (p) {
                const e = document.body;
                return (
                  (jc = e.style.userSelect || e.style.webkitUserSelect),
                  (e.style.userSelect = "none"),
                  (e.style.webkitUserSelect = "none"),
                  () => {
                    ((e.style.userSelect = jc), (e.style.webkitUserSelect = jc));
                  }
                );
              }
            }, [p]),
            r.useEffect(() => {
              if (d.current) {
                const e = () => {
                  (m(!1),
                    (c.isPointerDownOnContentRef.current = !1),
                    setTimeout(() => {
                      "" !== document.getSelection()?.toString() &&
                        (c.hasSelectionRef.current = !0);
                    }));
                };
                return (
                  document.addEventListener("pointerup", e),
                  () => {
                    (document.removeEventListener("pointerup", e),
                      (c.hasSelectionRef.current = !1),
                      (c.isPointerDownOnContentRef.current = !1));
                  }
                );
              }
            }, [c.isPointerDownOnContentRef, c.hasSelectionRef]),
            r.useEffect(() => {
              d.current &&
                (function (e) {
                  const t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                      acceptNode: (e) =>
                        e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                    });
                  for (; n.nextNode(); ) t.push(n.currentNode);
                  return t;
                })(d.current).forEach((e) => e.setAttribute("tabindex", "-1"));
            }),
            (0, Ue.jsx)(kn, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onInteractOutside: i,
              onEscapeKeyDown: o,
              onPointerDownOutside: a,
              onFocusOutside: pn(l, (e) => {
                e.preventDefault();
              }),
              onDismiss: c.onDismiss,
              children: (0, Ue.jsx)(Ho, {
                ...u,
                ...s,
                onPointerDown: pn(s.onPointerDown, (e) => {
                  (e.currentTarget.contains(e.target) && m(!0),
                    (c.hasSelectionRef.current = !1),
                    (c.isPointerDownOnContentRef.current = !0));
                }),
                ref: f,
                style: {
                  ...s.style,
                  userSelect: p ? "text" : void 0,
                  WebkitUserSelect: p ? "text" : void 0,
                  "--radix-hover-card-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-hover-card-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-hover-card-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)",
                },
              }),
            })
          );
        });
        function Wc(e) {
          return (t) => ("touch" === t.pointerType ? void 0 : e());
        }
        r.forwardRef((e, t) => {
          const { __scopeHoverCard: n, ...r } = e,
            o = Tc(n);
          return (0, Ue.jsx)($o, { ...o, ...r, ref: t });
        }).displayName = "HoverCardArrow";
        var Vc = Oc,
          qc = Dc,
          Kc = Hc,
          Qc = Bc;
        function Gc(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(Vc, { "data-slot": "hover-card", ...n })), (t[2] = n), (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Yc(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(qc, { "data-slot": "hover-card-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Xc(e) {
          const t = (0, l.c)(12);
          let n, r, o, a;
          t[0] !== e
            ? (({ className: n, align: o, sideOffset: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a))
            : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4]));
          const i = void 0 === o ? "center" : o,
            s = void 0 === a ? 4 : a;
          let c, u;
          return (
            t[5] !== n
              ? ((c = Ie(
                  "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  n,
                )),
                (t[5] = n),
                (t[6] = c))
              : (c = t[6]),
            t[7] !== i || t[8] !== r || t[9] !== s || t[10] !== c
              ? ((u = (0, Ue.jsx)(Kc, {
                  "data-slot": "hover-card-portal",
                  children: (0, Ue.jsx)(Qc, {
                    "data-slot": "hover-card-content",
                    align: i,
                    sideOffset: s,
                    className: c,
                    ...r,
                  }),
                })),
                (t[7] = i),
                (t[8] = r),
                (t[9] = s),
                (t[10] = c),
                (t[11] = u))
              : (u = t[11]),
            u
          );
        }
        function Zc(e) {
          const t = (0, l.c)(13),
            { username: n, isFollowing: o, onFollowStateChange: a, className: i } = e,
            { isLoggedIn: s, session: c } = (0, r.useContext)(Bt),
            [u, d] = (0, r.useTransition)(),
            [f, p] = (0, r.useState)(o);
          let m, h;
          (t[0] !== o
            ? ((m = () => {
                p(o);
              }),
              (t[0] = o),
              (t[1] = m))
            : (m = t[1]),
            t[2] !== o || t[3] !== n
              ? ((h = [n, o]), (t[2] = o), (t[3] = n), (t[4] = h))
              : (h = t[4]),
            (0, r.useEffect)(m, h));
          const g = Boolean(s && c.username === n);
          if (!s || g) return null;
          let v;
          t[5] !== a || t[6] !== n
            ? ((v = (e) => {
                (e.preventDefault(),
                  e.stopPropagation(),
                  d(async () => {
                    const e = await fetch(`/api/users/${n}/follow`, {
                      method: "POST",
                      credentials: "same-origin",
                    });
                    if (!e.ok) return;
                    const t = await e.json();
                    (p(t.isFollowing), a?.(t));
                  }));
              }),
              (t[5] = a),
              (t[6] = n),
              (t[7] = v))
            : (v = t[7]);
          const y = v,
            b = f ? "Unfollow" : "Follow";
          let x;
          return (
            t[8] !== i || t[9] !== u || t[10] !== b || t[11] !== y
              ? ((x = (0, Ue.jsx)(Ye, {
                  type: "button",
                  className: i,
                  onClick: y,
                  disabled: u,
                  children: b,
                })),
                (t[8] = i),
                (t[9] = u),
                (t[10] = b),
                (t[11] = y),
                (t[12] = x))
              : (x = t[12]),
            x
          );
        }
        function Jc(e) {
          const t = (0, l.c)(43),
            { username: n } = e,
            { isLoggedIn: o, session: a } = (0, r.useContext)(Bt),
            [i, s] = (0, r.useTransition)(),
            [c, u] = (0, r.useState)(null);
          let d, f;
          if (
            (t[0] !== n
              ? ((d = () => {
                  s(async () => {
                    const e = await fetch(`/api/users/${n}`),
                      t = await e.json();
                    u(t);
                  });
                }),
                (f = [n]),
                (t[0] = n),
                (t[1] = d),
                (t[2] = f))
              : ((d = t[1]), (f = t[2])),
            (0, r.useEffect)(d, f),
            i)
          ) {
            let e;
            return (
              t[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, Ue.jsxs)("div", {
                    className: "flex flex-col items-center justify-center gap-2",
                    children: [(0, Ue.jsx)(Vt, { "data-icon": "inline-start" }), "Loading..."],
                  })),
                  (t[3] = e))
                : (e = t[3]),
              e
            );
          }
          if (!c) return null;
          const p = Boolean(o && a.username === c.username),
            m = o && !p;
          let h, g, v, y, b;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, Ue.jsx)(_t, { src: "https://placehold.co/40" })), (t[4] = h))
            : (h = t[4]),
            t[5] !== c.username
              ? ((g = c.username.charAt(0)), (t[5] = c.username), (t[6] = g))
              : (g = t[6]),
            t[7] !== g
              ? ((v = (0, Ue.jsxs)(jt, {
                  className: "size-20 shrink-0",
                  children: [h, (0, Ue.jsx)(Pt, { className: "uppercase", children: g })],
                })),
                (t[7] = g),
                (t[8] = v))
              : (v = t[8]),
            t[9] !== c.isFollowing || t[10] !== m || t[11] !== n
              ? ((y =
                  m &&
                  (0, Ue.jsx)(Zc, {
                    username: n,
                    isFollowing: c.isFollowing,
                    onFollowStateChange: (e) => u((t) => (t ? { ...t, ...e } : null)),
                  })),
                (t[9] = c.isFollowing),
                (t[10] = m),
                (t[11] = n),
                (t[12] = y))
              : (y = t[12]),
            t[13] !== v || t[14] !== y
              ? ((b = (0, Ue.jsxs)("div", {
                  className: "flex flex-row justify-between",
                  children: [v, y],
                })),
                (t[13] = v),
                (t[14] = y),
                (t[15] = b))
              : (b = t[15]));
          const x = `/u/${c.username}`;
          let w, k, S, E, C;
          (t[16] !== c.displayName
            ? ((w = (0, Ue.jsx)("span", {
                className: "text-lg font-bold",
                children: c.displayName,
              })),
              (t[16] = c.displayName),
              (t[17] = w))
            : (w = t[17]),
            t[18] !== c.plan
              ? ((k = "free" !== c.plan && (0, Ue.jsx)(Ft, { className: "size-4 text-primary" })),
                (t[18] = c.plan),
                (t[19] = k))
              : (k = t[19]),
            t[20] !== k || t[21] !== w
              ? ((S = (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [w, k],
                })),
                (t[20] = k),
                (t[21] = w),
                (t[22] = S))
              : (S = t[22]),
            t[23] !== c.username
              ? ((E = (0, Ue.jsxs)("span", {
                  className: "text-sm text-muted-foreground",
                  children: ["@", c.username],
                })),
                (t[23] = c.username),
                (t[24] = E))
              : (E = t[24]),
            t[25] !== S || t[26] !== E || t[27] !== x
              ? ((C = (0, Ue.jsxs)("a", {
                  href: x,
                  className:
                    "inline-flex cursor-pointer flex-col underline-offset-4 hover:underline",
                  children: [S, E],
                })),
                (t[25] = S),
                (t[26] = E),
                (t[27] = x),
                (t[28] = C))
              : (C = t[28]));
          const N = c.bio || "No bio yet";
          let j, _, P, z, T;
          return (
            t[29] !== N
              ? ((j = (0, Ue.jsx)("p", { className: "line-clamp-3", children: N })),
                (t[29] = N),
                (t[30] = j))
              : (j = t[30]),
            t[31] !== c.followingCount
              ? ((_ = (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [
                    (0, Ue.jsx)("span", { className: "font-bold", children: c.followingCount }),
                    "Following",
                  ],
                })),
                (t[31] = c.followingCount),
                (t[32] = _))
              : (_ = t[32]),
            t[33] !== c.followersCount
              ? ((P = (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [
                    (0, Ue.jsx)("span", { className: "font-bold", children: c.followersCount }),
                    "Followers",
                  ],
                })),
                (t[33] = c.followersCount),
                (t[34] = P))
              : (P = t[34]),
            t[35] !== _ || t[36] !== P
              ? ((z = (0, Ue.jsxs)("div", { className: "flex flex-row gap-2", children: [_, P] })),
                (t[35] = _),
                (t[36] = P),
                (t[37] = z))
              : (z = t[37]),
            t[38] !== C || t[39] !== j || t[40] !== z || t[41] !== b
              ? ((T = (0, Ue.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [b, C, j, z],
                })),
                (t[38] = C),
                (t[39] = j),
                (t[40] = z),
                (t[41] = b),
                (t[42] = T))
              : (T = t[42]),
            T
          );
        }
        function eu(e) {
          const t = (0, l.c)(85),
            { post: n } = e,
            { isLoggedIn: o, session: a } = (0, r.useContext)(Bt),
            [i, s] = (0, r.useTransition)(),
            [c, u] = (0, r.useState)(n.likeCount ?? 0),
            [d, f] = (0, r.useState)(!!n.likedByMe),
            [p, h] = (0, r.useState)(!1);
          let g, v;
          (t[0] !== n.likeCount || t[1] !== n.likedByMe
            ? ((g = () => {
                (u(n.likeCount ?? 0), f(!!n.likedByMe));
              }),
              (t[0] = n.likeCount),
              (t[1] = n.likedByMe),
              (t[2] = g))
            : (g = t[2]),
            t[3] !== n._id || t[4] !== n.likeCount || t[5] !== n.likedByMe
              ? ((v = [n._id, n.likeCount, n.likedByMe]),
                (t[3] = n._id),
                (t[4] = n.likeCount),
                (t[5] = n.likedByMe),
                (t[6] = v))
              : (v = t[6]),
            (0, r.useEffect)(g, v));
          const y = o && n.owner.username === a.username;
          let b;
          t[7] !== o || t[8] !== c || t[9] !== d || t[10] !== n._id
            ? ((b = (e) => {
                if ((e.preventDefault(), e.stopPropagation(), !o)) return;
                const t = c,
                  r = d;
                (f(!r),
                  u(r ? t - 1 : t + 1),
                  s(async () => {
                    try {
                      const e = await fetch(`/posts/${String(n._id)}/like`, {
                        method: "POST",
                        credentials: "same-origin",
                        headers: { Accept: "application/json" },
                      });
                      if (!e.ok) return (u(t), void f(r));
                      const o = await e.json();
                      (u(o.likeCount), f(o.likedByMe));
                    } catch {
                      (u(t), f(r));
                    }
                  }));
              }),
              (t[7] = o),
              (t[8] = c),
              (t[9] = d),
              (t[10] = n._id),
              (t[11] = b))
            : (b = t[11]);
          const x = b;
          let w;
          t[12] !== p || t[13] !== y || t[14] !== n._id
            ? ((w = async (e) => {
                (e.preventDefault(),
                  e.stopPropagation(),
                  y &&
                    !p &&
                    nn.promise(
                      fetch(`/posts/${String(n._id)}`, {
                        method: "DELETE",
                        credentials: "same-origin",
                        headers: { Accept: "application/json" },
                      }),
                      {
                        loading: "Deleting post...",
                        success: () => (h(!0), "Post deleted successfully"),
                        error: nu,
                      },
                    ));
              }),
              (t[12] = p),
              (t[13] = y),
              (t[14] = n._id),
              (t[15] = w))
            : (w = t[15]);
          const k = w;
          if (p) return null;
          const S = `/p/${n._id}`;
          let E, C, N;
          (t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = (0, Ue.jsx)(_t, { src: "https://placehold.co/40" })), (t[16] = E))
            : (E = t[16]),
            t[17] !== n.owner.username
              ? ((C = n.owner.username.charAt(0)), (t[17] = n.owner.username), (t[18] = C))
              : (C = t[18]),
            t[19] !== C
              ? ((N = (0, Ue.jsxs)(jt, {
                  size: "lg",
                  children: [E, (0, Ue.jsx)(Pt, { className: "uppercase", children: C })],
                })),
                (t[19] = C),
                (t[20] = N))
              : (N = t[20]));
          const j = `/u/${n.owner.username}`;
          let _, P, z, T, M, R, O, L, D, A, F, I, H, $, B, U, W, V, q;
          (t[21] !== n.owner.displayName
            ? ((_ = (0, Ue.jsx)("span", {
                className: "font-bold hover:underline",
                children: n.owner.displayName,
              })),
              (t[21] = n.owner.displayName),
              (t[22] = _))
            : (_ = t[22]),
            t[23] !== n.owner.username
              ? ((P = (0, Ue.jsxs)("span", {
                  className: "text-sm text-muted-foreground",
                  children: ["@", n.owner.username],
                })),
                (t[23] = n.owner.username),
                (t[24] = P))
              : (P = t[24]),
            t[25] !== n.owner.isPremium
              ? ((z = n.owner.isPremium && (0, Ue.jsx)(Ft, { className: "size-4 text-primary" })),
                (t[25] = n.owner.isPremium),
                (t[26] = z))
              : (z = t[26]),
            t[27] !== _ || t[28] !== P || t[29] !== z || t[30] !== j
              ? ((T = (0, Ue.jsx)(Yc, {
                  asChild: !0,
                  children: (0, Ue.jsxs)("a", {
                    href: j,
                    className: "inline-flex cursor-pointer items-center gap-1",
                    children: [_, P, z],
                  }),
                })),
                (t[27] = _),
                (t[28] = P),
                (t[29] = z),
                (t[30] = j),
                (t[31] = T))
              : (T = t[31]),
            t[32] !== n.owner.username
              ? ((M = (0, Ue.jsx)(Xc, {
                  children: (0, Ue.jsx)("div", {
                    className: "flex flex-col gap-1",
                    children: (0, Ue.jsx)(Jc, { username: n.owner.username }),
                  }),
                })),
                (t[32] = n.owner.username),
                (t[33] = M))
              : (M = t[33]),
            t[34] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = (0, Ue.jsx)("span", {
                  className: "text-sm text-muted-foreground",
                  children: "•",
                })),
                (t[34] = R))
              : (R = t[34]),
            t[35] !== n.createdDate
              ? ((O = (function (e) {
                  const t = new Date(),
                    n = Math.floor((t.getTime() - new Date(e).getTime()) / 1e3);
                  return n < 60
                    ? "just now"
                    : n < 3600
                      ? `${Math.floor(n / 60)}m`
                      : n < 86400
                        ? `${Math.floor(n / 3600)}h`
                        : n < 604800
                          ? `${Math.floor(n / 86400)}d`
                          : new Date(e).toLocaleDateString();
                })(n.createdDate)),
                (t[35] = n.createdDate),
                (t[36] = O))
              : (O = t[36]),
            t[37] !== O
              ? ((L = (0, Ue.jsx)("span", {
                  className: "text-sm text-muted-foreground",
                  children: O,
                })),
                (t[37] = O),
                (t[38] = L))
              : (L = t[38]),
            t[39] !== T || t[40] !== M || t[41] !== L
              ? ((D = (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [T, M, R, L],
                })),
                (t[39] = T),
                (t[40] = M),
                (t[41] = L),
                (t[42] = D))
              : (D = t[42]),
            t[43] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = (0, Ue.jsx)(Ji, {
                  asChild: !0,
                  children: (0, Ue.jsx)("div", {
                    className: "rounded-full p-1 hover:bg-muted",
                    children: (0, Ue.jsx)(kc, { className: "size-4" }),
                  }),
                })),
                (t[43] = A))
              : (A = t[43]),
            t[44] !== n._id
              ? ((F = () => {
                  navigator.clipboard.writeText(`${window.location.origin}/p/${n._id}`);
                }),
                (t[44] = n._id),
                (t[45] = F))
              : (F = t[45]),
            t[46] === Symbol.for("react.memo_cache_sentinel")
              ? ((I = (0, Ue.jsx)(Sc, { className: "size-4" })), (t[46] = I))
              : (I = t[46]),
            t[47] !== F
              ? ((H = (0, Ue.jsx)(ns, {
                  asChild: !0,
                  children: (0, Ue.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    onClick: F,
                    children: [I, "Copy link"],
                  }),
                })),
                (t[47] = F),
                (t[48] = H))
              : (H = t[48]),
            t[49] !== k || t[50] !== y
              ? (($ =
                  y &&
                  (0, Ue.jsx)(ns, {
                    asChild: !0,
                    children: (0, Ue.jsxs)("div", {
                      className: "flex flex-row items-center gap-2",
                      onClick: k,
                      children: [(0, Ue.jsx)(Ec, { className: "size-4" }), "Delete"],
                    }),
                  })),
                (t[49] = k),
                (t[50] = y),
                (t[51] = $))
              : ($ = t[51]),
            t[52] !== H || t[53] !== $
              ? ((B = (0, Ue.jsxs)(Zi, { children: [A, (0, Ue.jsxs)(es, { children: [H, $] })] })),
                (t[52] = H),
                (t[53] = $),
                (t[54] = B))
              : (B = t[54]),
            t[55] !== D || t[56] !== B
              ? ((U = (0, Ue.jsxs)("div", { className: "flex justify-between", children: [D, B] })),
                (t[55] = D),
                (t[56] = B),
                (t[57] = U))
              : (U = t[57]),
            t[58] !== n.body
              ? ((W = (0, Ue.jsx)("div", {
                  className: "w-full wrap-anywhere whitespace-pre-wrap",
                  children: n.body,
                })),
                (t[58] = n.body),
                (t[59] = W))
              : (W = t[59]),
            t[60] === Symbol.for("react.memo_cache_sentinel")
              ? ((V = (0, Ue.jsx)(m, { className: "size-4" })), (t[60] = V))
              : (V = t[60]),
            t[61] !== n.replyCount
              ? ((q = (0, Ue.jsxs)("button", {
                  type: "button",
                  className:
                    "flex cursor-pointer flex-row items-center gap-1 hover:text-foreground/80",
                  onClick: tu,
                  children: [
                    V,
                    (0, Ue.jsx)("span", { className: "tabular-nums", children: n.replyCount }),
                  ],
                })),
                (t[61] = n.replyCount),
                (t[62] = q))
              : (q = t[62]));
          const K =
              "flex cursor-pointer flex-row items-center gap-1 hover:text-rose-400 " +
              (d ? "text-rose-400" : ""),
            Q = !o || i,
            G = "size-4 " + (d ? "fill-current" : "");
          let Y, X, Z, J, ee, te, ne;
          return (
            t[63] !== G
              ? ((Y = (0, Ue.jsx)(Cc, { className: G })), (t[63] = G), (t[64] = Y))
              : (Y = t[64]),
            t[65] !== c
              ? ((X = (0, Ue.jsx)("span", { className: "tabular-nums", children: c })),
                (t[65] = c),
                (t[66] = X))
              : (X = t[66]),
            t[67] !== K || t[68] !== Q || t[69] !== Y || t[70] !== X || t[71] !== x
              ? ((Z = (0, Ue.jsxs)("button", {
                  type: "button",
                  className: K,
                  disabled: Q,
                  onClick: x,
                  children: [Y, X],
                })),
                (t[67] = K),
                (t[68] = Q),
                (t[69] = Y),
                (t[70] = X),
                (t[71] = x),
                (t[72] = Z))
              : (Z = t[72]),
            t[73] === Symbol.for("react.memo_cache_sentinel")
              ? ((J = (0, Ue.jsx)(Nc, { className: "size-4" })), (t[73] = J))
              : (J = t[73]),
            t[74] !== q || t[75] !== Z
              ? ((ee = (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center gap-6",
                  children: [q, Z, J],
                })),
                (t[74] = q),
                (t[75] = Z),
                (t[76] = ee))
              : (ee = t[76]),
            t[77] !== U || t[78] !== W || t[79] !== ee
              ? ((te = (0, Ue.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col gap-1",
                  children: [U, W, ee],
                })),
                (t[77] = U),
                (t[78] = W),
                (t[79] = ee),
                (t[80] = te))
              : (te = t[80]),
            t[81] !== te || t[82] !== S || t[83] !== N
              ? ((ne = (0, Ue.jsx)(Ue.Fragment, {
                  children: (0, Ue.jsx)(Gc, {
                    children: (0, Ue.jsxs)("a", {
                      href: S,
                      className:
                        "group/post flex w-full flex-row gap-2 border-b border-border p-4 hover:bg-muted/50",
                      children: [N, te],
                    }),
                  }),
                })),
                (t[81] = te),
                (t[82] = S),
                (t[83] = N),
                (t[84] = ne))
              : (ne = t[84]),
            ne
          );
        }
        function tu() {}
        function nu(e) {
          return e instanceof Error ? e.message : "Could not delete the post.";
        }
        function ru(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie("animate-pulse rounded-md bg-muted", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "skeleton", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function ou() {
          const e = (0, l.c)(7),
            [t, n] = (0, r.useTransition)();
          let o;
          e[0] === Symbol.for("react.memo_cache_sentinel") ? ((o = []), (e[0] = o)) : (o = e[0]);
          const [a, i] = (0, r.useState)(o);
          let s, c, u, d;
          return (
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = () => {
                  n(async () => {
                    const e = await fetch("/api/stories"),
                      { data: t } = await e.json();
                    i(t.slice(0, 3));
                  });
                }),
                (c = []),
                (e[1] = s),
                (e[2] = c))
              : ((s = e[1]), (c = e[2])),
            (0, r.useEffect)(s, c),
            e[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, Ue.jsx)(fs, {
                  children: (0, Ue.jsx)(ps, {
                    children: (0, Ue.jsx)("span", {
                      className: "text-xl font-bold",
                      children: "Today's News",
                    }),
                  }),
                })),
                (e[3] = u))
              : (u = e[3]),
            e[4] !== t || e[5] !== a
              ? ((d = (0, Ue.jsxs)(ds, {
                  children: [
                    u,
                    (0, Ue.jsx)(ms, {
                      children: (0, Ue.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: t
                          ? (0, Ue.jsx)(Ue.Fragment, {
                              children: Array.from({ length: 3 }).map(lu),
                            })
                          : (0, Ue.jsx)(Ue.Fragment, { children: a.map(au) }),
                      }),
                    }),
                  ],
                })),
                (e[4] = t),
                (e[5] = a),
                (e[6] = d))
              : (d = e[6]),
            d
          );
        }
        function au(e) {
          return (0, Ue.jsxs)(
            "a",
            {
              href: e.sourceUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                (0, Ue.jsx)("span", {
                  className: "font-bold wrap-break-word whitespace-pre-wrap",
                  children: e.title,
                }),
                (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center gap-2 text-sm text-muted-foreground",
                  children: [
                    (0, Ue.jsx)("span", {
                      children: new Date(e.datePublished).toLocaleDateString(),
                    }),
                    (0, Ue.jsx)("span", { children: "•" }),
                    (0, Ue.jsx)("span", { children: e.issue.name }),
                  ],
                }),
              ],
            },
            e.id,
          );
        }
        function lu(e, t) {
          return (0, Ue.jsxs)(
            "div",
            {
              className: "space-y-0.5",
              children: [
                (0, Ue.jsxs)("div", {
                  className: "space-y-1",
                  children: [
                    (0, Ue.jsx)(ru, { className: "h-4 w-full" }),
                    (0, Ue.jsx)(ru, { className: "h-4 w-1/2" }),
                  ],
                }),
                (0, Ue.jsxs)("div", {
                  className: "flex flex-row items-center gap-2",
                  children: [
                    (0, Ue.jsx)(ru, { className: "h-5 w-12" }),
                    (0, Ue.jsx)(ru, { className: "h-5 w-16" }),
                  ],
                }),
              ],
            },
            t,
          );
        }
        function iu() {
          const e = (0, l.c)(11),
            { isLoggedIn: t, session: n } = (0, r.useContext)(Bt),
            [o, a] = (0, r.useTransition)();
          let i;
          e[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = []), (e[0] = i)) : (i = e[0]);
          const [s, c] = (0, r.useState)(i);
          let u;
          e[1] !== t || e[2] !== n
            ? ((u = () => {
                a(async () => {
                  const e = await fetch("/api/users"),
                    r = (await e.json()).filter((e) => !t || e.username !== n.username).slice(0, 3);
                  c(r);
                });
              }),
              (e[1] = t),
              (e[2] = n),
              (e[3] = u))
            : (u = e[3]);
          const d = n?.username;
          let f, p, m;
          return (
            e[4] !== t || e[5] !== d
              ? ((f = [t, d]), (e[4] = t), (e[5] = d), (e[6] = f))
              : (f = e[6]),
            (0, r.useEffect)(u, f),
            e[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, Ue.jsx)(fs, {
                  children: (0, Ue.jsx)(ps, {
                    children: (0, Ue.jsx)("span", {
                      className: "text-xl font-bold",
                      children: "Who to follow",
                    }),
                  }),
                })),
                (e[7] = p))
              : (p = e[7]),
            e[8] !== s || e[9] !== o
              ? ((m = (0, Ue.jsxs)(ds, {
                  children: [
                    p,
                    (0, Ue.jsx)(ms, {
                      children: (0, Ue.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: o
                          ? (0, Ue.jsx)(Ue.Fragment, {
                              children: Array.from({ length: 3 }).map(su),
                            })
                          : (0, Ue.jsx)(Ue.Fragment, {
                              children: s.map((e) =>
                                (0, Ue.jsxs)(
                                  "a",
                                  {
                                    href: `/u/${e.username}`,
                                    className: "flex flex-row items-center gap-2",
                                    children: [
                                      (0, Ue.jsxs)(jt, {
                                        children: [
                                          (0, Ue.jsx)(_t, { src: "https://placehold.co/40" }),
                                          (0, Ue.jsx)(Pt, {
                                            className: "uppercase",
                                            children: e.username.charAt(0),
                                          }),
                                        ],
                                      }),
                                      (0, Ue.jsxs)("div", {
                                        className: "flex w-full flex-row items-center gap-2",
                                        children: [
                                          (0, Ue.jsxs)("div", {
                                            className: "flex flex-1 flex-col",
                                            children: [
                                              (0, Ue.jsxs)(Gc, {
                                                children: [
                                                  (0, Ue.jsx)(Yc, {
                                                    asChild: !0,
                                                    children: (0, Ue.jsxs)("div", {
                                                      className: "flex flex-row items-center gap-1",
                                                      children: [
                                                        (0, Ue.jsx)("span", {
                                                          className:
                                                            "truncate text-base font-bold hover:underline",
                                                          children: e.displayName,
                                                        }),
                                                        "free" !== e.plan &&
                                                          (0, Ue.jsx)(Ft, {
                                                            className:
                                                              "size-4 shrink-0 text-primary",
                                                          }),
                                                      ],
                                                    }),
                                                  }),
                                                  (0, Ue.jsx)(Xc, {
                                                    children: (0, Ue.jsx)(Jc, {
                                                      username: e.username,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              (0, Ue.jsxs)("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: ["@", e.username],
                                              }),
                                            ],
                                          }),
                                          (0, Ue.jsx)("div", {
                                            className: "shrink-0 self-start",
                                            children: (0, Ue.jsx)(Zc, {
                                              username: e.username,
                                              isFollowing: e.isFollowing,
                                              onFollowStateChange: (t) =>
                                                c((n) =>
                                                  n.map((n) =>
                                                    n.username === e.username ? { ...n, ...t } : n,
                                                  ),
                                                ),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.username,
                                ),
                              ),
                            }),
                      }),
                    }),
                  ],
                })),
                (e[8] = s),
                (e[9] = o),
                (e[10] = m))
              : (m = e[10]),
            m
          );
        }
        function su(e, t) {
          return (0, Ue.jsxs)(
            "div",
            {
              className: "flex flex-row items-center gap-2",
              children: [
                (0, Ue.jsx)(ru, { className: "size-8 shrink-0" }),
                (0, Ue.jsxs)("div", {
                  className: "flex w-full flex-row items-center gap-0.5",
                  children: [
                    (0, Ue.jsxs)("div", {
                      className: "flex flex-1 flex-col gap-0.5",
                      children: [
                        (0, Ue.jsx)(ru, { className: "h-6.5 w-1/2" }),
                        (0, Ue.jsx)(ru, { className: "h-4.5 w-1/3" }),
                      ],
                    }),
                    (0, Ue.jsx)("div", {
                      className: "shrink-0 self-start",
                      children: (0, Ue.jsx)(ru, { className: "h-8 w-15.5" }),
                    }),
                  ],
                }),
              ],
            },
            t,
          );
        }
        function cu() {
          const e = (0, l.c)(5);
          let t, n, r, o, a;
          return (
            e[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, Ue.jsx)(ru, { className: "size-10 shrink-0 rounded-full" })), (e[0] = t))
              : (t = e[0]),
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, Ue.jsxs)("div", {
                  className: "flex justify-between gap-2",
                  children: [
                    (0, Ue.jsxs)("div", {
                      className: "flex min-w-0 flex-row flex-wrap items-center gap-1",
                      children: [
                        (0, Ue.jsx)(ru, { className: "h-4 w-28 max-w-[40%]" }),
                        (0, Ue.jsx)(ru, { className: "h-4 w-24 max-w-[35%]" }),
                        (0, Ue.jsx)(ru, { className: "size-1 shrink-0 rounded-full" }),
                        (0, Ue.jsx)(ru, { className: "h-4 w-10 shrink-0" }),
                      ],
                    }),
                    (0, Ue.jsx)(ru, { className: "size-8 shrink-0 rounded-full" }),
                  ],
                })),
                (e[1] = n))
              : (n = e[1]),
            e[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, Ue.jsxs)("div", {
                  className: "flex flex-col gap-2 pt-0.5",
                  children: [
                    (0, Ue.jsx)(ru, { className: "h-4 w-full" }),
                    (0, Ue.jsx)(ru, { className: "h-4 w-[92%]" }),
                    (0, Ue.jsx)(ru, { className: "h-4 w-[64%]" }),
                  ],
                })),
                (e[2] = r))
              : (r = e[2]),
            e[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, Ue.jsxs)("span", {
                  className: "inline-flex items-center gap-1",
                  children: [
                    (0, Ue.jsx)(ru, { className: "size-4 rounded-sm" }),
                    (0, Ue.jsx)(ru, { className: "h-4 w-5" }),
                  ],
                })),
                (e[3] = o))
              : (o = e[3]),
            e[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, Ue.jsxs)("div", {
                  className: "flex w-full flex-row gap-2 border-b border-border p-4",
                  children: [
                    t,
                    (0, Ue.jsxs)("div", {
                      className: "flex min-w-0 flex-1 flex-col gap-1",
                      children: [
                        n,
                        r,
                        (0, Ue.jsxs)("div", {
                          className: "flex flex-row items-center gap-6 pt-1",
                          children: [
                            o,
                            (0, Ue.jsxs)("span", {
                              className: "inline-flex items-center gap-1",
                              children: [
                                (0, Ue.jsx)(ru, { className: "size-4 rounded-sm" }),
                                (0, Ue.jsx)(ru, { className: "h-4 w-5" }),
                              ],
                            }),
                            (0, Ue.jsx)(ru, { className: "size-4 rounded-sm" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
                (e[4] = a))
              : (a = e[4]),
            a
          );
        }
        function uu(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "empty", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function du(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie("flex max-w-sm flex-col items-center gap-2", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "empty-header", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const fu = x(
          "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default: "bg-transparent",
                icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
              },
            },
            defaultVariants: { variant: "default" },
          },
        );
        function pu(e) {
          const t = (0, l.c)(11);
          let n, r, o;
          t[0] !== e
            ? (({ className: n, variant: o, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o))
            : ((n = t[1]), (r = t[2]), (o = t[3]));
          const a = void 0 === o ? "default" : o;
          let i, s;
          return (
            t[4] !== n || t[5] !== a
              ? ((i = Ie(fu({ variant: a, className: n }))), (t[4] = n), (t[5] = a), (t[6] = i))
              : (i = t[6]),
            t[7] !== r || t[8] !== i || t[9] !== a
              ? ((s = (0, Ue.jsx)("div", {
                  "data-slot": "empty-icon",
                  "data-variant": a,
                  className: i,
                  ...r,
                })),
                (t[7] = r),
                (t[8] = i),
                (t[9] = a),
                (t[10] = s))
              : (s = t[10]),
            s
          );
        }
        function mu(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie("cn-font-heading text-sm font-medium tracking-tight", n)),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "empty-title", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function hu(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = Ie(
                  "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, Ue.jsx)("div", { "data-slot": "empty-description", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function gu() {
          const e = (0, l.c)(24),
            [t, n] = (0, r.useTransition)();
          let o;
          e[0] === Symbol.for("react.memo_cache_sentinel") ? ((o = []), (e[0] = o)) : (o = e[0]);
          const [a, i] = (0, r.useState)(o);
          let s, c, u, d, f, p, g, v, y, b, x, w, k, S, E, C, N, j, _;
          return (
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = () => {
                  const e = () => {
                    n(async () => {
                      const e = await fetch("/posts");
                      if (!e.ok) return;
                      const t = await e.json();
                      i(t);
                    });
                  };
                  e();
                  const t = (t) => {
                    t.persisted && e();
                  };
                  return (
                    window.addEventListener("pageshow", t),
                    () => window.removeEventListener("pageshow", t)
                  );
                }),
                (c = [n]),
                (e[1] = s),
                (e[2] = c))
              : ((s = e[1]), (c = e[2])),
            (0, r.useEffect)(s, c),
            e[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, Ue.jsx)(xc, {})), (e[3] = u))
              : (u = e[3]),
            e[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, Ue.jsx)(is, { onPosted: (e) => i((t) => [e, ...t]) })), (e[4] = d))
              : (d = e[4]),
            e[5] !== t || e[6] !== a
              ? ((f = t
                  ? (0, Ue.jsx)(Ue.Fragment, { children: Array.from({ length: 3 }).map(yu) })
                  : a.length > 0
                    ? a.map(vu)
                    : (0, Ue.jsx)("div", {
                        className: "flex flex-col items-center py-8",
                        children: (0, Ue.jsx)(uu, {
                          className: "flex-none",
                          children: (0, Ue.jsxs)(du, {
                            children: [
                              (0, Ue.jsx)(pu, { variant: "icon", children: (0, Ue.jsx)(m, {}) }),
                              (0, Ue.jsx)(mu, { children: "No posts yet" }),
                              (0, Ue.jsx)(hu, { children: "Be the first to post" }),
                            ],
                          }),
                        }),
                      })),
                (e[5] = t),
                (e[6] = a),
                (e[7] = f))
              : (f = e[7]),
            e[8] !== f
              ? ((p = (0, Ue.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col border-border sm:border-x",
                  children: [
                    d,
                    (0, Ue.jsx)("div", {
                      className: "no-scrollbar min-h-0 flex-1 overflow-y-auto pb-8",
                      children: f,
                    }),
                  ],
                })),
                (e[8] = f),
                (e[9] = p))
              : (p = e[9]),
            e[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, Ue.jsx)(rt, { placeholder: "Search..." })), (e[10] = g))
              : (g = e[10]),
            e[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, Ue.jsx)("div", {
                  className: "sticky top-0 z-10 bg-background/80 backdrop-blur-sm",
                  children: (0, Ue.jsxs)(Je, {
                    children: [g, (0, Ue.jsx)(tt, { children: (0, Ue.jsx)(h, {}) })],
                  }),
                })),
                (e[11] = v))
              : (v = e[11]),
            e[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, Ue.jsx)(ys, {})),
                (y = (0, Ue.jsx)(ou, {})),
                (b = (0, Ue.jsx)(iu, {})),
                (e[12] = y),
                (e[13] = b),
                (e[14] = x))
              : ((y = e[12]), (b = e[13]), (x = e[14])),
            e[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, Ue.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Terms of Service",
                })),
                (k = (0, Ue.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Privacy Policy",
                })),
                (S = (0, Ue.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Cookie Policy",
                })),
                (E = (0, Ue.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Accessibility",
                })),
                (C = (0, Ue.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Ads Info",
                })),
                (N = (0, Ue.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "More ...",
                })),
                (e[15] = w),
                (e[16] = k),
                (e[17] = S),
                (e[18] = E),
                (e[19] = C),
                (e[20] = N))
              : ((w = e[15]), (k = e[16]), (S = e[17]), (E = e[18]), (C = e[19]), (N = e[20])),
            e[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, Ue.jsxs)("div", {
                  className: "hidden h-full w-full max-w-xs flex-col gap-4 p-4 sm:flex md:max-w-sm",
                  children: [
                    v,
                    (0, Ue.jsxs)("div", {
                      className: "no-scrollbar min-h-0 flex-1 space-y-4 overflow-y-auto",
                      children: [
                        x,
                        y,
                        b,
                        (0, Ue.jsxs)("div", {
                          className: "flex flex-wrap gap-2 text-xs text-muted-foreground",
                          children: [
                            w,
                            k,
                            S,
                            E,
                            C,
                            N,
                            (0, Ue.jsxs)("span", {
                              children: ["© ", new Date().getFullYear(), " Chitter"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })),
                (e[21] = j))
              : (j = e[21]),
            e[22] !== p
              ? ((_ = (0, Ue.jsx)("div", {
                  className: "flex h-dvh flex-col overflow-hidden",
                  children: (0, Ue.jsxs)("div", {
                    className:
                      "mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x",
                    children: [u, p, j],
                  }),
                })),
                (e[22] = p),
                (e[23] = _))
              : (_ = e[23]),
            _
          );
        }
        function vu(e) {
          return (0, Ue.jsx)(eu, { post: e }, e._id);
        }
        function yu(e, t) {
          return (0, Ue.jsx)(cu, {}, t);
        }
        const bu = p("circle-check", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
          ]),
          xu = p("info", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "M12 16v-4", key: "1dtifu" }],
            ["path", { d: "M12 8h.01", key: "e9boi3" }],
          ]),
          wu = p("triangle-alert", [
            [
              "path",
              {
                d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                key: "wmoenq",
              },
            ],
            ["path", { d: "M12 9v4", key: "juzpu7" }],
            ["path", { d: "M12 17h.01", key: "p32p05" }],
          ]),
          ku = p("octagon-x", [
            ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
            [
              "path",
              {
                d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
                key: "2d38gg",
              },
            ],
            ["path", { d: "m9 9 6 6", key: "z0biqf" }],
          ]),
          Su = (e) => {
            const t = (0, l.c)(7);
            let n, r, o, a, i;
            return (
              t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
              t[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = {
                    success: (0, Ue.jsx)(bu, { className: "size-4" }),
                    info: (0, Ue.jsx)(xu, { className: "size-4" }),
                    warning: (0, Ue.jsx)(wu, { className: "size-4" }),
                    error: (0, Ue.jsx)(ku, { className: "size-4" }),
                    loading: (0, Ue.jsx)(Wt, { className: "size-4 animate-spin" }),
                  }),
                  (o = {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                    "--border-radius": "var(--radius)",
                  }),
                  (t[2] = r),
                  (t[3] = o))
                : ((r = t[2]), (o = t[3])),
              t[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = { classNames: { toast: "cn-toast" } }), (t[4] = a))
                : (a = t[4]),
              t[5] !== n
                ? ((i = (0, Ue.jsx)(dn, {
                    theme: "dark",
                    className: "toaster group",
                    icons: r,
                    style: o,
                    toastOptions: a,
                    ...n,
                  })),
                  (t[5] = n),
                  (t[6] = i))
                : (i = t[6]),
              i
            );
          };
        var Eu = "Dialog",
          [Cu, Nu] = ot(Eu),
          [ju, _u] = Cu(Eu),
          Pu = (e) => {
            const {
                __scopeDialog: t,
                children: n,
                open: o,
                defaultOpen: a,
                onOpenChange: l,
                modal: i = !0,
              } = e,
              s = r.useRef(null),
              c = r.useRef(null),
              [u, d] = hn({ prop: o, defaultProp: a ?? !1, onChange: l, caller: Eu });
            return (0, Ue.jsx)(ju, {
              scope: t,
              triggerRef: s,
              contentRef: c,
              contentId: Hn(),
              titleId: Hn(),
              descriptionId: Hn(),
              open: u,
              onOpenChange: d,
              onOpenToggle: r.useCallback(() => d((e) => !e), [d]),
              modal: i,
              children: n,
            });
          };
        Pu.displayName = Eu;
        var zu = "DialogTrigger";
        r.forwardRef((e, t) => {
          const { __scopeDialog: n, ...r } = e,
            o = _u(zu, n),
            a = Be(t, o.triggerRef);
          return (0, Ue.jsx)(ct.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Wu(o.open),
            ...r,
            ref: a,
            onClick: pn(e.onClick, o.onOpenToggle),
          });
        }).displayName = zu;
        var Tu = "DialogPortal",
          [Mu, Ru] = Cu(Tu, { forceMount: void 0 }),
          Ou = "DialogOverlay";
        r.forwardRef((e, t) => {
          const n = Ru(Ou, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = _u(Ou, e.__scopeDialog);
          return a.modal
            ? (0, Ue.jsx)(Uo, { present: r || a.open, children: (0, Ue.jsx)(Du, { ...o, ref: t }) })
            : null;
        }).displayName = Ou;
        var Lu = We("DialogOverlay.RemoveScroll"),
          Du = r.forwardRef((e, t) => {
            const { __scopeDialog: n, ...r } = e,
              o = _u(Ou, n);
            return (0, Ue.jsx)(Ja, {
              as: Lu,
              allowPinchZoom: !0,
              shards: [o.contentRef],
              children: (0, Ue.jsx)(ct.div, {
                "data-state": Wu(o.open),
                ...r,
                ref: t,
                style: { pointerEvents: "auto", ...r.style },
              }),
            });
          }),
          Au = "DialogContent";
        r.forwardRef((e, t) => {
          const n = Ru(Au, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = _u(Au, e.__scopeDialog);
          return (0, Ue.jsx)(Uo, {
            present: r || a.open,
            children: a.modal
              ? (0, Ue.jsx)(Fu, { ...o, ref: t })
              : (0, Ue.jsx)(Iu, { ...o, ref: t }),
          });
        }).displayName = Au;
        var Fu = r.forwardRef((e, t) => {
            const n = _u(Au, e.__scopeDialog),
              o = r.useRef(null),
              a = Be(t, n.contentRef, o);
            return (
              r.useEffect(() => {
                const e = o.current;
                if (e) return ma(e);
              }, []),
              (0, Ue.jsx)(Hu, {
                ...e,
                ref: a,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: pn(e.onCloseAutoFocus, (e) => {
                  (e.preventDefault(), n.triggerRef.current?.focus());
                }),
                onPointerDownOutside: pn(e.onPointerDownOutside, (e) => {
                  const t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: pn(e.onFocusOutside, (e) => e.preventDefault()),
              })
            );
          }),
          Iu = r.forwardRef((e, t) => {
            const n = _u(Au, e.__scopeDialog),
              o = r.useRef(!1),
              a = r.useRef(!1);
            return (0, Ue.jsx)(Hu, {
              ...e,
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                (e.onCloseAutoFocus?.(t),
                  t.defaultPrevented ||
                    (o.current || n.triggerRef.current?.focus(), t.preventDefault()),
                  (o.current = !1),
                  (a.current = !1));
              },
              onInteractOutside: (t) => {
                (e.onInteractOutside?.(t),
                  t.defaultPrevented ||
                    ((o.current = !0),
                    "pointerdown" === t.detail.originalEvent.type && (a.current = !0)));
                const r = t.target,
                  l = n.triggerRef.current?.contains(r);
                (l && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault());
              },
            });
          }),
          Hu = r.forwardRef((e, t) => {
            const {
                __scopeDialog: n,
                trapFocus: o,
                onOpenAutoFocus: a,
                onCloseAutoFocus: l,
                ...i
              } = e,
              s = _u(Au, n),
              c = r.useRef(null),
              u = Be(t, c);
            return (
              Nn(),
              (0, Ue.jsxs)(Ue.Fragment, {
                children: [
                  (0, Ue.jsx)(Tn, {
                    asChild: !0,
                    loop: !0,
                    trapped: o,
                    onMountAutoFocus: a,
                    onUnmountAutoFocus: l,
                    children: (0, Ue.jsx)(kn, {
                      role: "dialog",
                      id: s.contentId,
                      "aria-describedby": s.descriptionId,
                      "aria-labelledby": s.titleId,
                      "data-state": Wu(s.open),
                      ...i,
                      ref: u,
                      onDismiss: () => s.onOpenChange(!1),
                    }),
                  }),
                  (0, Ue.jsxs)(Ue.Fragment, {
                    children: [
                      (0, Ue.jsx)(Qu, { titleId: s.titleId }),
                      (0, Ue.jsx)(Gu, { contentRef: c, descriptionId: s.descriptionId }),
                    ],
                  }),
                ],
              })
            );
          }),
          $u = "DialogTitle";
        r.forwardRef((e, t) => {
          const { __scopeDialog: n, ...r } = e,
            o = _u($u, n);
          return (0, Ue.jsx)(ct.h2, { id: o.titleId, ...r, ref: t });
        }).displayName = $u;
        var Bu = "DialogDescription";
        r.forwardRef((e, t) => {
          const { __scopeDialog: n, ...r } = e,
            o = _u(Bu, n);
          return (0, Ue.jsx)(ct.p, { id: o.descriptionId, ...r, ref: t });
        }).displayName = Bu;
        var Uu = "DialogClose";
        function Wu(e) {
          return e ? "open" : "closed";
        }
        r.forwardRef((e, t) => {
          const { __scopeDialog: n, ...r } = e,
            o = _u(Uu, n);
          return (0, Ue.jsx)(ct.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: pn(e.onClick, () => o.onOpenChange(!1)),
          });
        }).displayName = Uu;
        var Vu = "DialogTitleWarning",
          [qu, Ku] = (function (e, t) {
            const n = r.createContext(t),
              o = (e) => {
                const { children: t, ...o } = e,
                  a = r.useMemo(() => o, Object.values(o));
                return (0, Ue.jsx)(n.Provider, { value: a, children: t });
              };
            return (
              (o.displayName = e + "Provider"),
              [
                o,
                function (o) {
                  const a = r.useContext(n);
                  if (a) return a;
                  if (void 0 !== t) return t;
                  throw new Error(`\`${o}\` must be used within \`${e}\``);
                },
              ]
            );
          })(Vu, { contentName: Au, titleName: $u, docsSlug: "dialog" }),
          Qu = ({ titleId: e }) => {
            const t = Ku(Vu),
              n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
            return (
              r.useEffect(() => {
                e && (document.getElementById(e) || console.error(n));
              }, [n, e]),
              null
            );
          },
          Gu = ({ contentRef: e, descriptionId: t }) => {
            const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ku("DialogDescriptionWarning").contentName}}.`;
            return (
              r.useEffect(() => {
                const r = e.current?.getAttribute("aria-describedby");
                t && r && (document.getElementById(t) || console.warn(n));
              }, [n, e, t]),
              null
            );
          },
          Yu = Pu;
        function Xu(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, Ue.jsx)(Yu, { "data-slot": "dialog", ...n })), (t[2] = n), (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        (0, a.createRoot)(document.getElementById("root")).render(
          (0, Ue.jsx)(r.StrictMode, {
            children: (0, Ue.jsx)(Ut, {
              children: (0, Ue.jsxs)(hc, {
                children: [
                  (0, Ue.jsx)(Xu, { children: (0, Ue.jsx)(gu, {}) }),
                  (0, Ue.jsx)(Su, { position: "top-center", richColors: !0 }),
                ],
              }),
            }),
          }),
        );
      },
      247(e, t, n) {
        var r = n(982),
          o = n(540),
          a = n(961);
        function l(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function s(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function c(e) {
          if (31 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function u(e) {
          if (i(e) !== e) throw Error(l(188));
        }
        function d(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = d(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var f = Object.assign,
          p = Symbol.for("react.element"),
          m = Symbol.for("react.transitional.element"),
          h = Symbol.for("react.portal"),
          g = Symbol.for("react.fragment"),
          v = Symbol.for("react.strict_mode"),
          y = Symbol.for("react.profiler"),
          b = Symbol.for("react.consumer"),
          x = Symbol.for("react.context"),
          w = Symbol.for("react.forward_ref"),
          k = Symbol.for("react.suspense"),
          S = Symbol.for("react.suspense_list"),
          E = Symbol.for("react.memo"),
          C = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var N = Symbol.for("react.activity");
        (Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"));
        var j = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var _ = Symbol.iterator;
        function P(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (_ && e[_]) || e["@@iterator"])
              ? e
              : null;
        }
        var z = Symbol.for("react.client.reference");
        function T(e) {
          if (null == e) return null;
          if ("function" == typeof e)
            return e.$$typeof === z ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case y:
              return "Profiler";
            case v:
              return "StrictMode";
            case k:
              return "Suspense";
            case S:
              return "SuspenseList";
            case N:
              return "Activity";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case h:
                return "Portal";
              case x:
                return e.displayName || "Context";
              case b:
                return (e._context.displayName || "Context") + ".Consumer";
              case w:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case E:
                return null !== (t = e.displayName || null) ? t : T(e.type) || "Memo";
              case C:
                ((t = e._payload), (e = e._init));
                try {
                  return T(e(t));
                } catch (e) {}
            }
          return null;
        }
        var M = Array.isArray,
          R = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          O = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          L = { pending: !1, data: null, method: null, action: null },
          D = [],
          A = -1;
        function F(e) {
          return { current: e };
        }
        function I(e) {
          0 > A || ((e.current = D[A]), (D[A] = null), A--);
        }
        function H(e, t) {
          (A++, (D[A] = e.current), (e.current = t));
        }
        var $,
          B,
          U = F(null),
          W = F(null),
          V = F(null),
          q = F(null);
        function K(e, t) {
          switch ((H(V, t), H(W, e), H(U, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? gd(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI))) e = vd((t = gd(t)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          (I(U), H(U, e));
        }
        function Q() {
          (I(U), I(W), I(V));
        }
        function G(e) {
          null !== e.memoizedState && H(q, e);
          var t = U.current,
            n = vd(t, e.type);
          t !== n && (H(W, e), H(U, n));
        }
        function Y(e) {
          (W.current === e && (I(U), I(W)), q.current === e && (I(q), (uf._currentValue = L)));
        }
        function X(e) {
          if (void 0 === $)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              (($ = (t && t[1]) || ""),
                (B =
                  -1 < e.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + $ + e + B;
        }
        var Z = !1;
        function J(e, t) {
          if (!e || Z) return "";
          Z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" == typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (e) {
                        var r = e;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (e) {
                        r = e;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (e) {
                      r = e;
                    }
                    (n = e()) && "function" == typeof n.catch && n.catch(function () {});
                  }
                } catch (e) {
                  if (e && r && "string" == typeof e.stack) return [e.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            o &&
              o.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var a = r.DetermineComponentFrameRoot(),
              l = a[0],
              i = a[1];
            if (l && i) {
              var s = l.split("\n"),
                c = i.split("\n");
              for (o = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot"); ) r++;
              for (; o < c.length && !c[o].includes("DetermineComponentFrameRoot"); ) o++;
              if (r === s.length || o === c.length)
                for (r = s.length - 1, o = c.length - 1; 1 <= r && 0 <= o && s[r] !== c[o]; ) o--;
              for (; 1 <= r && 0 <= o; r--, o--)
                if (s[r] !== c[o]) {
                  if (1 !== r || 1 !== o)
                    do {
                      if ((r--, 0 > --o || s[r] !== c[o])) {
                        var u = "\n" + s[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= r && 0 <= o);
                  break;
                }
            }
          } finally {
            ((Z = !1), (Error.prepareStackTrace = n));
          }
          return (n = e ? e.displayName || e.name : "") ? X(n) : "";
        }
        function ee(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return X(e.type);
            case 16:
              return X("Lazy");
            case 13:
              return e.child !== t && null !== t ? X("Suspense Fallback") : X("Suspense");
            case 19:
              return X("SuspenseList");
            case 0:
            case 15:
              return J(e.type, !1);
            case 11:
              return J(e.type.render, !1);
            case 1:
              return J(e.type, !0);
            case 31:
              return X("Activity");
            default:
              return "";
          }
        }
        function te(e) {
          try {
            var t = "",
              n = null;
            do {
              ((t += ee(e, n)), (n = e), (e = e.return));
            } while (e);
            return t;
          } catch (e) {
            return "\nError generating stack: " + e.message + "\n" + e.stack;
          }
        }
        var ne = Object.prototype.hasOwnProperty,
          re = r.unstable_scheduleCallback,
          oe = r.unstable_cancelCallback,
          ae = r.unstable_shouldYield,
          le = r.unstable_requestPaint,
          ie = r.unstable_now,
          se = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          ue = r.unstable_UserBlockingPriority,
          de = r.unstable_NormalPriority,
          fe = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          me = r.log,
          he = r.unstable_setDisableYieldValue,
          ge = null,
          ve = null;
        function ye(e) {
          if (("function" == typeof me && he(e), ve && "function" == typeof ve.setStrictMode))
            try {
              ve.setStrictMode(ge, e);
            } catch (e) {}
        }
        var be = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((xe(e) / we) | 0)) | 0;
              },
          xe = Math.log,
          we = Math.LN2,
          ke = 256,
          Se = 262144,
          Ee = 4194304;
        function Ce(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
              return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 3932160 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Ne(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var o = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes;
          e = e.warmLanes;
          var i = 134217727 & r;
          return (
            0 !== i
              ? 0 !== (r = i & ~a)
                ? (o = Ce(r))
                : 0 !== (l &= i)
                  ? (o = Ce(l))
                  : n || (0 !== (n = i & ~e) && (o = Ce(n)))
              : 0 !== (i = r & ~a)
                ? (o = Ce(i))
                : 0 !== l
                  ? (o = Ce(l))
                  : n || (0 !== (n = r & ~e) && (o = Ce(n))),
            0 === o
              ? 0
              : 0 !== t &&
                  t !== o &&
                  0 === (t & a) &&
                  ((a = o & -o) >= (n = t & -t) || (32 === a && 4194048 & n))
                ? t
                : o
          );
        }
        function je(e, t) {
          return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
        }
        function _e(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Pe() {
          var e = Ee;
          return (!(62914560 & (Ee <<= 1)) && (Ee = 4194304), e);
        }
        function ze(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Te(e, t) {
          ((e.pendingLanes |= t),
            268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function Me(e, t, n) {
          ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
          var r = 31 - be(t);
          ((e.entangledLanes |= t),
            (e.entanglements[r] = 1073741824 | e.entanglements[r] | (261930 & n)));
        }
        function Re(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - be(n),
              o = 1 << r;
            ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
          }
        }
        function Oe(e, t) {
          var n = t & -t;
          return 0 !== ((n = 42 & n ? 1 : Le(n)) & (e.suspendedLanes | t)) ? 0 : n;
        }
        function Le(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function De(e) {
          return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
        }
        function Ae() {
          var e = O.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Ef(e.type);
        }
        function Fe(e, t) {
          var n = O.p;
          try {
            return ((O.p = e), t());
          } finally {
            O.p = n;
          }
        }
        var Ie = Math.random().toString(36).slice(2),
          He = "__reactFiber$" + Ie,
          $e = "__reactProps$" + Ie,
          Be = "__reactContainer$" + Ie,
          Ue = "__reactEvents$" + Ie,
          We = "__reactListeners$" + Ie,
          Ve = "__reactHandles$" + Ie,
          qe = "__reactResources$" + Ie,
          Ke = "__reactMarker$" + Ie;
        function Qe(e) {
          (delete e[He], delete e[$e], delete e[Ue], delete e[We], delete e[Ve]);
        }
        function Ge(e) {
          var t = e[He];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Be] || n[He])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ld(e); null !== e; ) {
                  if ((n = e[He])) return n;
                  e = Ld(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ye(e) {
          if ((e = e[He] || e[Be])) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t)
              return e;
          }
          return null;
        }
        function Xe(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(l(33));
        }
        function Ze(e) {
          var t = e[qe];
          return (
            t || (t = e[qe] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t
          );
        }
        function Je(e) {
          e[Ke] = !0;
        }
        var et = new Set(),
          tt = {};
        function nt(e, t) {
          (rt(e, t), rt(e + "Capture", t));
        }
        function rt(e, t) {
          for (tt[e] = t, e = 0; e < t.length; e++) et.add(t[e]);
        }
        var ot = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
          ),
          at = {},
          lt = {};
        function it(e, t, n) {
          if (
            ((o = t),
            ne.call(lt, o) || (!ne.call(at, o) && (ot.test(o) ? (lt[o] = !0) : ((at[o] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var o;
        }
        function st(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function ct(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function ut(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function dt(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
          );
        }
        function ft(e) {
          if (!e._valueTracker) {
            var t = dt(e) ? "checked" : "value";
            e._valueTracker = (function (e, t, n) {
              var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== r &&
                "function" == typeof r.get &&
                "function" == typeof r.set
              ) {
                var o = r.get,
                  a = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      ((n = "" + e), a.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e, t, "" + e[t]);
          }
        }
        function pt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = dt(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function mt(e) {
          if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var ht = /[\n"\\]/g;
        function gt(e) {
          return e.replace(ht, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function vt(e, t, n, r, o, a, l, i) {
          ((e.name = ""),
            null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l
              ? (e.type = l)
              : e.removeAttribute("type"),
            null != t
              ? "number" === l
                ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + ut(t))
                : e.value !== "" + ut(t) && (e.value = "" + ut(t))
              : ("submit" !== l && "reset" !== l) || e.removeAttribute("value"),
            null != t
              ? bt(e, l, ut(t))
              : null != n
                ? bt(e, l, ut(n))
                : null != r && e.removeAttribute("value"),
            null == o && null != a && (e.defaultChecked = !!a),
            null != o && (e.checked = o && "function" != typeof o && "symbol" != typeof o),
            null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i
              ? (e.name = "" + ut(i))
              : e.removeAttribute("name"));
        }
        function yt(e, t, n, r, o, a, l, i) {
          if (
            (null != a &&
              "function" != typeof a &&
              "symbol" != typeof a &&
              "boolean" != typeof a &&
              (e.type = a),
            null != t || null != n)
          ) {
            if (("submit" === a || "reset" === a) && null == t) return void ft(e);
            ((n = null != n ? "" + ut(n) : ""),
              (t = null != t ? "" + ut(t) : n),
              i || t === e.value || (e.value = t),
              (e.defaultValue = t));
          }
          ((r = "function" != typeof (r = null != r ? r : o) && "symbol" != typeof r && !!r),
            (e.checked = i ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != l &&
              "function" != typeof l &&
              "symbol" != typeof l &&
              "boolean" != typeof l &&
              (e.name = l),
            ft(e));
        }
        function bt(e, t, n) {
          ("number" === t && mt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function xt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              ((o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + ut(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return ((e[o].selected = !0), void (r && (e[o].defaultSelected = !0)));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function wt(e, t, n) {
          null == t || ((t = "" + ut(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + ut(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function kt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(l(92));
              if (M(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
              }
              n = r;
            }
            (null == n && (n = ""), (t = n));
          }
          ((n = ut(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n && "" !== r && null !== r && (e.value = r),
            ft(e));
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var Et = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " ",
          ),
        );
        function Ct(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" == typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
                ? (e.cssFloat = "")
                : (e[t] = "")
            : r
              ? e.setProperty(t, n)
              : "number" != typeof n || 0 === n || Et.has(t)
                ? "float" === t
                  ? (e.cssFloat = n)
                  : (e[t] = ("" + n).trim())
                : (e[t] = n + "px");
        }
        function Nt(e, t, n) {
          if (null != t && "object" != typeof t) throw Error(l(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                    ? (e.cssFloat = "")
                    : (e[r] = ""));
            for (var o in t) ((r = t[o]), t.hasOwnProperty(o) && n[o] !== r && Ct(e, o, r));
          } else for (var a in t) t.hasOwnProperty(a) && Ct(e, a, t[a]);
        }
        function jt(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var _t = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Pt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function zt(e) {
          return Pt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        function Tt() {}
        var Mt = null;
        function Rt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ot = null,
          Lt = null;
        function Dt(e) {
          var t = Ye(e);
          if (t && (e = t.stateNode)) {
            var n = e[$e] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (vt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name,
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll('input[name="' + gt("" + t) + '"][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = r[$e] || null;
                      if (!o) throw Error(l(90));
                      vt(
                        r,
                        o.value,
                        o.defaultValue,
                        o.defaultValue,
                        o.checked,
                        o.defaultChecked,
                        o.type,
                        o.name,
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && pt(r);
                }
                break e;
              case "textarea":
                wt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && xt(e, !!n.multiple, t, !1);
            }
          }
        }
        var At = !1;
        function Ft(e, t, n) {
          if (At) return e(t, n);
          At = !0;
          try {
            return e(t);
          } finally {
            if (
              ((At = !1),
              (null !== Ot || null !== Lt) &&
                (Zc(), Ot && ((t = Ot), (e = Lt), (Lt = Ot = null), Dt(t), e)))
            )
              for (t = 0; t < e.length; t++) Dt(e[t]);
          }
        }
        function It(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[$e] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              ((r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Ht = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          $t = !1;
        if (Ht)
          try {
            var Bt = {};
            (Object.defineProperty(Bt, "passive", {
              get: function () {
                $t = !0;
              },
            }),
              window.addEventListener("test", Bt, Bt),
              window.removeEventListener("test", Bt, Bt));
          } catch (e) {
            $t = !1;
          }
        var Ut = null,
          Wt = null,
          Vt = null;
        function qt() {
          if (Vt) return Vt;
          var e,
            t,
            n = Wt,
            r = n.length,
            o = "value" in Ut ? Ut.value : Ut.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === o[a - t]; t++);
          return (Vt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Kt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Qt() {
          return !0;
        }
        function Gt() {
          return !1;
        }
        function Yt(e) {
          function t(t, n, r, o, a) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(o) : o[l]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
              )
                ? Qt
                : Gt),
              (this.isPropagationStopped = Gt),
              this
            );
          }
          return (
            f(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = Qt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = Qt));
              },
              persist: function () {},
              isPersistent: Qt,
            }),
            t
          );
        }
        var Xt,
          Zt,
          Jt,
          en = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          tn = Yt(en),
          nn = f({}, en, { view: 0, detail: 0 }),
          rn = Yt(nn),
          on = f({}, nn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: gn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Jt &&
                    (Jt && "mousemove" === e.type
                      ? ((Xt = e.screenX - Jt.screenX), (Zt = e.screenY - Jt.screenY))
                      : (Zt = Xt = 0),
                    (Jt = e)),
                  Xt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Zt;
            },
          }),
          an = Yt(on),
          ln = Yt(f({}, on, { dataTransfer: 0 })),
          sn = Yt(f({}, nn, { relatedTarget: 0 })),
          cn = Yt(f({}, en, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          un = Yt(
            f({}, en, {
              clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
              },
            }),
          ),
          dn = Yt(f({}, en, { data: 0 })),
          fn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          pn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          mn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function hn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = mn[e]) && !!t[e];
        }
        function gn() {
          return hn;
        }
        var vn = Yt(
            f({}, nn, {
              key: function (e) {
                if (e.key) {
                  var t = fn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Kt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? pn[e.keyCode] || "Unidentified"
                    : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: gn,
              charCode: function (e) {
                return "keypress" === e.type ? Kt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Kt(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
              },
            }),
          ),
          yn = Yt(
            f({}, on, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          bn = Yt(
            f({}, nn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: gn,
            }),
          ),
          xn = Yt(f({}, en, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          wn = Yt(
            f({}, on, {
              deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          kn = Yt(f({}, en, { newState: 0, oldState: 0 })),
          Sn = [9, 13, 27, 32],
          En = Ht && "CompositionEvent" in window,
          Cn = null;
        Ht && "documentMode" in document && (Cn = document.documentMode);
        var Nn = Ht && "TextEvent" in window && !Cn,
          jn = Ht && (!En || (Cn && 8 < Cn && 11 >= Cn)),
          _n = String.fromCharCode(32),
          Pn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Sn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Tn(e) {
          return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Mn = !1,
          Rn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function On(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Rn[e.type] : "textarea" === t;
        }
        function Ln(e, t, n, r) {
          (Ot ? (Lt ? Lt.push(r) : (Lt = [r])) : (Ot = r),
            0 < (t = nd(t, "onChange")).length &&
              ((n = new tn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
        }
        var Dn = null,
          An = null;
        function Fn(e) {
          Qu(e, 0);
        }
        function In(e) {
          if (pt(Xe(e))) return e;
        }
        function Hn(e, t) {
          if ("change" === e) return t;
        }
        var $n = !1;
        if (Ht) {
          var Bn;
          if (Ht) {
            var Un = "oninput" in document;
            if (!Un) {
              var Wn = document.createElement("div");
              (Wn.setAttribute("oninput", "return;"), (Un = "function" == typeof Wn.oninput));
            }
            Bn = Un;
          } else Bn = !1;
          $n = Bn && (!document.documentMode || 9 < document.documentMode);
        }
        function Vn() {
          Dn && (Dn.detachEvent("onpropertychange", qn), (An = Dn = null));
        }
        function qn(e) {
          if ("value" === e.propertyName && In(An)) {
            var t = [];
            (Ln(t, An, e, Rt(e)), Ft(Fn, t));
          }
        }
        function Kn(e, t, n) {
          "focusin" === e
            ? (Vn(), (An = n), (Dn = t).attachEvent("onpropertychange", qn))
            : "focusout" === e && Vn();
        }
        function Qn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return In(An);
        }
        function Gn(e, t) {
          if ("click" === e) return In(t);
        }
        function Yn(e, t) {
          if ("input" === e || "change" === e) return In(t);
        }
        var Xn =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              };
        function Zn(e, t) {
          if (Xn(e, t)) return !0;
          if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!ne.call(t, o) || !Xn(e[o], t[o])) return !1;
          }
          return !0;
        }
        function Jn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function er(e, t) {
          var n,
            r = Jn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Jn(r);
          }
        }
        function tr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? tr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function nr(e) {
          for (
            var t = mt(
              (e =
                null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document,
            );
            t instanceof e.HTMLIFrameElement;
          ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = mt((e = t.contentWindow).document);
          }
          return t;
        }
        function rr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var or = Ht && "documentMode" in document && 11 >= document.documentMode,
          ar = null,
          lr = null,
          ir = null,
          sr = !1;
        function cr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          sr ||
            null == ar ||
            ar !== mt(r) ||
            ((r =
              "selectionStart" in (r = ar) && rr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (ir && Zn(ir, r)) ||
              ((ir = r),
              0 < (r = nd(lr, "onSelect")).length &&
                ((t = new tn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = ar))));
        }
        function ur(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var dr = {
            animationend: ur("Animation", "AnimationEnd"),
            animationiteration: ur("Animation", "AnimationIteration"),
            animationstart: ur("Animation", "AnimationStart"),
            transitionrun: ur("Transition", "TransitionRun"),
            transitionstart: ur("Transition", "TransitionStart"),
            transitioncancel: ur("Transition", "TransitionCancel"),
            transitionend: ur("Transition", "TransitionEnd"),
          },
          fr = {},
          pr = {};
        function mr(e) {
          if (fr[e]) return fr[e];
          if (!dr[e]) return e;
          var t,
            n = dr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in pr) return (fr[e] = n[t]);
          return e;
        }
        Ht &&
          ((pr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete dr.animationend.animation,
            delete dr.animationiteration.animation,
            delete dr.animationstart.animation),
          "TransitionEvent" in window || delete dr.transitionend.transition);
        var hr = mr("animationend"),
          gr = mr("animationiteration"),
          vr = mr("animationstart"),
          yr = mr("transitionrun"),
          br = mr("transitionstart"),
          xr = mr("transitioncancel"),
          wr = mr("transitionend"),
          kr = new Map(),
          Sr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Er(e, t) {
          (kr.set(e, t), nt(t, [e]));
        }
        Sr.push("scrollEnd");
        var Cr =
            "function" == typeof reportError
              ? reportError
              : function (e) {
                  if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" == typeof e && null !== e && "string" == typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if ("object" == typeof process && "function" == typeof process.emit)
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          Nr = [],
          jr = 0,
          _r = 0;
        function Pr() {
          for (var e = jr, t = (_r = jr = 0); t < e; ) {
            var n = Nr[t];
            Nr[t++] = null;
            var r = Nr[t];
            Nr[t++] = null;
            var o = Nr[t];
            Nr[t++] = null;
            var a = Nr[t];
            if (((Nr[t++] = null), null !== r && null !== o)) {
              var l = r.pending;
              (null === l ? (o.next = o) : ((o.next = l.next), (l.next = o)), (r.pending = o));
            }
            0 !== a && Rr(n, o, a);
          }
        }
        function zr(e, t, n, r) {
          ((Nr[jr++] = e),
            (Nr[jr++] = t),
            (Nr[jr++] = n),
            (Nr[jr++] = r),
            (_r |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Tr(e, t, n, r) {
          return (zr(e, t, n, r), Or(e));
        }
        function Mr(e, t) {
          return (zr(e, null, null, t), Or(e));
        }
        function Rr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var o = !1, a = e.return; null !== a; )
            ((a.childLanes |= n),
              null !== (r = a.alternate) && (r.childLanes |= n),
              22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (o = !0)),
              (e = a),
              (a = a.return));
          return 3 === e.tag
            ? ((a = e.stateNode),
              o &&
                null !== t &&
                ((o = 31 - be(n)),
                null === (r = (e = a.hiddenUpdates)[o]) ? (e[o] = [t]) : r.push(t),
                (t.lane = 536870912 | n)),
              a)
            : null;
        }
        function Or(e) {
          if (50 < Uc) throw ((Uc = 0), (Wc = null), Error(l(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Lr = {};
        function Dr(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Ar(e, t, n, r) {
          return new Dr(e, t, n, r);
        }
        function Fr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ir(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ar(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Hr(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function $r(e, t, n, r, o, a) {
          var i = 0;
          if (((r = e), "function" == typeof e)) Fr(e) && (i = 1);
          else if ("string" == typeof e)
            i = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href)
                    break;
                  return !0;
                case "link":
                  if (
                    "string" != typeof t.rel ||
                    "string" != typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled), "string" == typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" != typeof t.async &&
                    "symbol" != typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" == typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, U.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
                ? 27
                : 5;
          else
            e: switch (e) {
              case N:
                return (((e = Ar(31, n, t, o)).elementType = N), (e.lanes = a), e);
              case g:
                return Br(n.children, o, a, t);
              case v:
                ((i = 8), (o |= 24));
                break;
              case y:
                return (((e = Ar(12, n, t, 2 | o)).elementType = y), (e.lanes = a), e);
              case k:
                return (((e = Ar(13, n, t, o)).elementType = k), (e.lanes = a), e);
              case S:
                return (((e = Ar(19, n, t, o)).elementType = S), (e.lanes = a), e);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case x:
                      i = 10;
                      break e;
                    case b:
                      i = 9;
                      break e;
                    case w:
                      i = 11;
                      break e;
                    case E:
                      i = 14;
                      break e;
                    case C:
                      ((i = 16), (r = null));
                      break e;
                  }
                ((i = 29), (n = Error(l(130, null === e ? "null" : typeof e, ""))), (r = null));
            }
          return (((t = Ar(i, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t);
        }
        function Br(e, t, n, r) {
          return (((e = Ar(7, e, r, t)).lanes = n), e);
        }
        function Ur(e, t, n) {
          return (((e = Ar(6, e, null, t)).lanes = n), e);
        }
        function Wr(e) {
          var t = Ar(18, null, null, 0);
          return ((t.stateNode = e), t);
        }
        function Vr(e, t, n) {
          return (
            ((t = Ar(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var qr = new WeakMap();
        function Kr(e, t) {
          if ("object" == typeof e && null !== e) {
            var n = qr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: te(t) }), qr.set(e, t), t);
          }
          return { value: e, source: t, stack: te(t) };
        }
        var Qr = [],
          Gr = 0,
          Yr = null,
          Xr = 0,
          Zr = [],
          Jr = 0,
          eo = null,
          to = 1,
          no = "";
        function ro(e, t) {
          ((Qr[Gr++] = Xr), (Qr[Gr++] = Yr), (Yr = e), (Xr = t));
        }
        function oo(e, t, n) {
          ((Zr[Jr++] = to), (Zr[Jr++] = no), (Zr[Jr++] = eo), (eo = e));
          var r = to;
          e = no;
          var o = 32 - be(r) - 1;
          ((r &= ~(1 << o)), (n += 1));
          var a = 32 - be(t) + o;
          if (30 < a) {
            var l = o - (o % 5);
            ((a = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (o -= l),
              (to = (1 << (32 - be(t) + o)) | (n << o) | r),
              (no = a + e));
          } else ((to = (1 << a) | (n << o) | r), (no = e));
        }
        function ao(e) {
          null !== e.return && (ro(e, 1), oo(e, 1, 0));
        }
        function lo(e) {
          for (; e === Yr; ) ((Yr = Qr[--Gr]), (Qr[Gr] = null), (Xr = Qr[--Gr]), (Qr[Gr] = null));
          for (; e === eo; )
            ((eo = Zr[--Jr]),
              (Zr[Jr] = null),
              (no = Zr[--Jr]),
              (Zr[Jr] = null),
              (to = Zr[--Jr]),
              (Zr[Jr] = null));
        }
        function io(e, t) {
          ((Zr[Jr++] = to),
            (Zr[Jr++] = no),
            (Zr[Jr++] = eo),
            (to = t.id),
            (no = t.overflow),
            (eo = e));
        }
        var so = null,
          co = null,
          uo = !1,
          fo = null,
          po = !1,
          mo = Error(l(519));
        function ho(e) {
          throw (
            wo(
              Kr(
                Error(
                  l(
                    418,
                    1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                      ? "text"
                      : "HTML",
                    "",
                  ),
                ),
                e,
              ),
            ),
            mo
          );
        }
        function go(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[He] = e), (t[$e] = r), n)) {
            case "dialog":
              (Gu("cancel", t), Gu("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              Gu("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < qu.length; n++) Gu(qu[n], t);
              break;
            case "source":
              Gu("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (Gu("error", t), Gu("load", t));
              break;
            case "details":
              Gu("toggle", t);
              break;
            case "input":
              (Gu("invalid", t),
                yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
              break;
            case "select":
              Gu("invalid", t);
              break;
            case "textarea":
              (Gu("invalid", t), kt(t, r.value, r.defaultValue, r.children));
          }
          (("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          sd(t.textContent, n)
            ? (null != r.popover && (Gu("beforetoggle", t), Gu("toggle", t)),
              null != r.onScroll && Gu("scroll", t),
              null != r.onScrollEnd && Gu("scrollend", t),
              null != r.onClick && (t.onclick = Tt),
              (t = !0))
            : (t = !1),
            t || ho(e, !0));
        }
        function vo(e) {
          for (so = e.return; so; )
            switch (so.tag) {
              case 5:
              case 31:
              case 13:
                return void (po = !1);
              case 27:
              case 3:
                return void (po = !0);
              default:
                so = so.return;
            }
        }
        function yo(e) {
          if (e !== so) return !1;
          if (!uo) return (vo(e), (uo = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t = !("form" !== (t = e.type) && "button" !== t) || yd(e.type, e.memoizedProps)),
              (t = !t)),
            t && co && ho(e),
            vo(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            co = Od(e);
          } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            co = Od(e);
          } else
            27 === n
              ? ((n = co), Cd(e.type) ? ((e = Rd), (Rd = null), (co = e)) : (co = n))
              : (co = so ? Md(e.stateNode.nextSibling) : null);
          return !0;
        }
        function bo() {
          ((co = so = null), (uo = !1));
        }
        function xo() {
          var e = fo;
          return (null !== e && (null === Pc ? (Pc = e) : Pc.push.apply(Pc, e), (fo = null)), e);
        }
        function wo(e) {
          null === fo ? (fo = [e]) : fo.push(e);
        }
        var ko = F(null),
          So = null,
          Eo = null;
        function Co(e, t, n) {
          (H(ko, t._currentValue), (t._currentValue = n));
        }
        function No(e) {
          ((e._currentValue = ko.current), I(ko));
        }
        function jo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _o(e, t, n, r) {
          var o = e.child;
          for (null !== o && (o.return = e); null !== o; ) {
            var a = o.dependencies;
            if (null !== a) {
              var i = o.child;
              a = a.firstContext;
              e: for (; null !== a; ) {
                var s = a;
                a = o;
                for (var c = 0; c < t.length; c++)
                  if (s.context === t[c]) {
                    ((a.lanes |= n),
                      null !== (s = a.alternate) && (s.lanes |= n),
                      jo(a.return, n, e),
                      r || (i = null));
                    break e;
                  }
                a = s.next;
              }
            } else if (18 === o.tag) {
              if (null === (i = o.return)) throw Error(l(341));
              ((i.lanes |= n),
                null !== (a = i.alternate) && (a.lanes |= n),
                jo(i, n, e),
                (i = null));
            } else i = o.child;
            if (null !== i) i.return = o;
            else
              for (i = o; null !== i; ) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (o = i.sibling)) {
                  ((o.return = i.return), (i = o));
                  break;
                }
                i = i.return;
              }
            o = i;
          }
        }
        function Po(e, t, n, r) {
          e = null;
          for (var o = t, a = !1; null !== o; ) {
            if (!a)
              if (524288 & o.flags) a = !0;
              else if (262144 & o.flags) break;
            if (10 === o.tag) {
              var i = o.alternate;
              if (null === i) throw Error(l(387));
              if (null !== (i = i.memoizedProps)) {
                var s = o.type;
                Xn(o.pendingProps.value, i.value) || (null !== e ? e.push(s) : (e = [s]));
              }
            } else if (o === q.current) {
              if (null === (i = o.alternate)) throw Error(l(387));
              i.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
                (null !== e ? e.push(uf) : (e = [uf]));
            }
            o = o.return;
          }
          (null !== e && _o(t, e, n, r), (t.flags |= 262144));
        }
        function zo(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Xn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function To(e) {
          ((So = e), (Eo = null), null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function Mo(e) {
          return Oo(So, e);
        }
        function Ro(e, t) {
          return (null === So && To(e), Oo(e, t));
        }
        function Oo(e, t) {
          var n = t._currentValue;
          if (((t = { context: t, memoizedValue: n, next: null }), null === Eo)) {
            if (null === e) throw Error(l(308));
            ((Eo = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
          } else Eo = Eo.next = t;
          return n;
        }
        var Lo =
            "undefined" != typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    ((t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          Do = r.unstable_scheduleCallback,
          Ao = r.unstable_NormalPriority,
          Fo = {
            $$typeof: x,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Io() {
          return { controller: new Lo(), data: new Map(), refCount: 0 };
        }
        function Ho(e) {
          (e.refCount--,
            0 === e.refCount &&
              Do(Ao, function () {
                e.controller.abort();
              }));
        }
        var $o = null,
          Bo = 0,
          Uo = 0,
          Wo = null;
        function Vo() {
          if (0 === --Bo && null !== $o) {
            null !== Wo && (Wo.status = "fulfilled");
            var e = $o;
            (($o = null), (Uo = 0), (Wo = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var qo = R.S;
        R.S = function (e, t) {
          ((Mc = ie()),
            "object" == typeof t &&
              null !== t &&
              "function" == typeof t.then &&
              (function (e, t) {
                if (null === $o) {
                  var n = ($o = []);
                  ((Bo = 0),
                    (Uo = $u()),
                    (Wo = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        n.push(e);
                      },
                    }));
                }
                (Bo++, t.then(Vo, Vo));
              })(0, t),
            null !== qo && qo(e, t));
        };
        var Ko = F(null);
        function Qo() {
          var e = Ko.current;
          return null !== e ? e : pc.pooledCache;
        }
        function Go(e, t) {
          H(Ko, null === t ? Ko.current : t.pool);
        }
        function Yo() {
          var e = Qo();
          return null === e ? null : { parent: Fo._currentValue, pool: e };
        }
        var Xo = Error(l(460)),
          Zo = Error(l(474)),
          Jo = Error(l(542)),
          ea = { then: function () {} };
        function ta(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function na(e, t, n) {
          switch (
            (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Tt, Tt), (t = n)), t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (la((e = t.reason)), e);
            default:
              if ("string" == typeof t.status) t.then(Tt, Tt);
              else {
                if (null !== (e = pc) && 100 < e.shellSuspendCounter) throw Error(l(482));
                (((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "fulfilled"), (n.value = e));
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "rejected"), (n.reason = e));
                      }
                    },
                  ));
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw (la((e = t.reason)), e);
              }
              throw ((oa = t), Xo);
          }
        }
        function ra(e) {
          try {
            return (0, e._init)(e._payload);
          } catch (e) {
            if (null !== e && "object" == typeof e && "function" == typeof e.then)
              throw ((oa = e), Xo);
            throw e;
          }
        }
        var oa = null;
        function aa() {
          if (null === oa) throw Error(l(459));
          var e = oa;
          return ((oa = null), e);
        }
        function la(e) {
          if (e === Xo || e === Jo) throw Error(l(483));
        }
        var ia = null,
          sa = 0;
        function ca(e) {
          var t = sa;
          return ((sa += 1), null === ia && (ia = []), na(ia, e, t));
        }
        function ua(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function da(e, t) {
          if (t.$$typeof === p) throw Error(l(525));
          throw (
            (e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            )
          );
        }
        function fa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              (null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling));
            return t;
          }
          function o(e, t) {
            return (((e = Ir(e, t)).index = 0), (e.sibling = null), e);
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return (e && null === t.alternate && (t.flags |= 67108866), t);
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ur(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var a = n.type;
            return a === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ("object" == typeof a && null !== a && a.$$typeof === C && ra(a) === t.type))
                ? (ua((t = o(t, n.props)), n), (t.return = e), t)
                : (ua((t = $r(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vr(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Br(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
              return (((t = Ur("" + t, e.mode, n)).return = e), t);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return (
                    ua((n = $r(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n
                  );
                case h:
                  return (((t = Vr(t, e.mode, n)).return = e), t);
                case C:
                  return f(e, (t = ra(t)), n);
              }
              if (M(t) || P(t)) return (((t = Br(t, e.mode, n, null)).return = e), t);
              if ("function" == typeof t.then) return f(e, ca(t), n);
              if (t.$$typeof === x) return f(e, Ro(e, t), n);
              da(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n || "bigint" == typeof n)
              return null !== o ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case m:
                  return n.key === o ? c(e, t, n, r) : null;
                case h:
                  return n.key === o ? u(e, t, n, r) : null;
                case C:
                  return p(e, t, (n = ra(n)), r);
              }
              if (M(n) || P(n)) return null !== o ? null : d(e, t, n, r, null);
              if ("function" == typeof n.then) return p(e, t, ca(n), r);
              if (n.$$typeof === x) return p(e, t, Ro(e, n), r);
              da(e, n);
            }
            return null;
          }
          function v(e, t, n, r, o) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r)
              return s(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case m:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case h:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case C:
                  return v(e, t, n, (r = ra(r)), o);
              }
              if (M(r) || P(r)) return d(t, (e = e.get(n) || null), r, o, null);
              if ("function" == typeof r.then) return v(e, t, n, ca(r), o);
              if (r.$$typeof === x) return v(e, t, n, Ro(t, r), o);
              da(t, r);
            }
            return null;
          }
          function y(s, c, u, d) {
            if (
              ("object" == typeof u &&
                null !== u &&
                u.type === g &&
                null === u.key &&
                (u = u.props.children),
              "object" == typeof u && null !== u)
            ) {
              switch (u.$$typeof) {
                case m:
                  e: {
                    for (var b = u.key; null !== c; ) {
                      if (c.key === b) {
                        if ((b = u.type) === g) {
                          if (7 === c.tag) {
                            (n(s, c.sibling), ((d = o(c, u.props.children)).return = s), (s = d));
                            break e;
                          }
                        } else if (
                          c.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            ra(b) === c.type)
                        ) {
                          (n(s, c.sibling), ua((d = o(c, u.props)), u), (d.return = s), (s = d));
                          break e;
                        }
                        n(s, c);
                        break;
                      }
                      (t(s, c), (c = c.sibling));
                    }
                    u.type === g
                      ? (((d = Br(u.props.children, s.mode, d, u.key)).return = s), (s = d))
                      : (ua((d = $r(u.type, u.key, u.props, null, s.mode, d)), u),
                        (d.return = s),
                        (s = d));
                  }
                  return i(s);
                case h:
                  e: {
                    for (b = u.key; null !== c; ) {
                      if (c.key === b) {
                        if (
                          4 === c.tag &&
                          c.stateNode.containerInfo === u.containerInfo &&
                          c.stateNode.implementation === u.implementation
                        ) {
                          (n(s, c.sibling), ((d = o(c, u.children || [])).return = s), (s = d));
                          break e;
                        }
                        n(s, c);
                        break;
                      }
                      (t(s, c), (c = c.sibling));
                    }
                    (((d = Vr(u, s.mode, d)).return = s), (s = d));
                  }
                  return i(s);
                case C:
                  return y(s, c, (u = ra(u)), d);
              }
              if (M(u))
                return (function (o, l, i, s) {
                  for (
                    var c = null, u = null, d = l, m = (l = 0), h = null;
                    null !== d && m < i.length;
                    m++
                  ) {
                    d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
                    var g = p(o, d, i[m], s);
                    if (null === g) {
                      null === d && (d = h);
                      break;
                    }
                    (e && d && null === g.alternate && t(o, d),
                      (l = a(g, l, m)),
                      null === u ? (c = g) : (u.sibling = g),
                      (u = g),
                      (d = h));
                  }
                  if (m === i.length) return (n(o, d), uo && ro(o, m), c);
                  if (null === d) {
                    for (; m < i.length; m++)
                      null !== (d = f(o, i[m], s)) &&
                        ((l = a(d, l, m)), null === u ? (c = d) : (u.sibling = d), (u = d));
                    return (uo && ro(o, m), c);
                  }
                  for (d = r(d); m < i.length; m++)
                    null !== (h = v(d, o, m, i[m], s)) &&
                      (e && null !== h.alternate && d.delete(null === h.key ? m : h.key),
                      (l = a(h, l, m)),
                      null === u ? (c = h) : (u.sibling = h),
                      (u = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(o, e);
                      }),
                    uo && ro(o, m),
                    c
                  );
                })(s, c, u, d);
              if (P(u)) {
                if ("function" != typeof (b = P(u))) throw Error(l(150));
                return (function (o, i, s, c) {
                  if (null == s) throw Error(l(151));
                  for (
                    var u = null, d = null, m = i, h = (i = 0), g = null, y = s.next();
                    null !== m && !y.done;
                    h++, y = s.next()
                  ) {
                    m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
                    var b = p(o, m, y.value, c);
                    if (null === b) {
                      null === m && (m = g);
                      break;
                    }
                    (e && m && null === b.alternate && t(o, m),
                      (i = a(b, i, h)),
                      null === d ? (u = b) : (d.sibling = b),
                      (d = b),
                      (m = g));
                  }
                  if (y.done) return (n(o, m), uo && ro(o, h), u);
                  if (null === m) {
                    for (; !y.done; h++, y = s.next())
                      null !== (y = f(o, y.value, c)) &&
                        ((i = a(y, i, h)), null === d ? (u = y) : (d.sibling = y), (d = y));
                    return (uo && ro(o, h), u);
                  }
                  for (m = r(m); !y.done; h++, y = s.next())
                    null !== (y = v(m, o, h, y.value, c)) &&
                      (e && null !== y.alternate && m.delete(null === y.key ? h : y.key),
                      (i = a(y, i, h)),
                      null === d ? (u = y) : (d.sibling = y),
                      (d = y));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(o, e);
                      }),
                    uo && ro(o, h),
                    u
                  );
                })(s, c, (u = b.call(u)), d);
              }
              if ("function" == typeof u.then) return y(s, c, ca(u), d);
              if (u.$$typeof === x) return y(s, c, Ro(s, u), d);
              da(s, u);
            }
            return ("string" == typeof u && "" !== u) ||
              "number" == typeof u ||
              "bigint" == typeof u
              ? ((u = "" + u),
                null !== c && 6 === c.tag
                  ? (n(s, c.sibling), ((d = o(c, u)).return = s), (s = d))
                  : (n(s, c), ((d = Ur(u, s.mode, d)).return = s), (s = d)),
                i(s))
              : n(s, c);
          }
          return function (e, t, n, r) {
            try {
              sa = 0;
              var o = y(e, t, n, r);
              return ((ia = null), o);
            } catch (t) {
              if (t === Xo || t === Jo) throw t;
              var a = Ar(29, t, null, e.mode);
              return ((a.lanes = r), (a.return = e), a);
            }
          };
        }
        var pa = fa(!0),
          ma = fa(!1),
          ha = !1;
        function ga(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function va(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              }));
        }
        function ya(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function ba(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & fc)) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              (t = Or(e)),
              Rr(e, null, n),
              t
            );
          }
          return (zr(e, r, t, n), Or(e));
        }
        function xa(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n));
          }
        }
        function wa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                (null === a ? (o = a = l) : (a = a.next = l), (n = n.next));
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        var ka = !1;
        function Sa() {
          if (ka && null !== Wo) throw Wo;
        }
        function Ea(e, t, n, r) {
          ka = !1;
          var o = e.updateQueue;
          ha = !1;
          var a = o.firstBaseUpdate,
            l = o.lastBaseUpdate,
            i = o.shared.pending;
          if (null !== i) {
            o.shared.pending = null;
            var s = i,
              c = s.next;
            ((s.next = null), null === l ? (a = c) : (l.next = c), (l = s));
            var u = e.alternate;
            null !== u &&
              (i = (u = u.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (u.firstBaseUpdate = c) : (i.next = c), (u.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = o.baseState;
            for (l = 0, u = c = s = null, i = a; ; ) {
              var p = -536870913 & i.lane,
                m = p !== i.lane;
              if (m ? (hc & p) === p : (r & p) === p) {
                (0 !== p && p === Uo && (ka = !0),
                  null !== u &&
                    (u = u.next =
                      { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null }));
                e: {
                  var h = e,
                    g = i;
                  p = t;
                  var v = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" == typeof (h = g.payload)) {
                        d = h.call(v, d, p);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (null == (p = "function" == typeof (h = g.payload) ? h.call(v, d, p) : h))
                        break e;
                      d = f({}, d, p);
                      break e;
                    case 2:
                      ha = !0;
                  }
                }
                null !== (p = i.callback) &&
                  ((e.flags |= 64),
                  m && (e.flags |= 8192),
                  null === (m = o.callbacks) ? (o.callbacks = [p]) : m.push(p));
              } else
                ((m = {
                  lane: p,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === u ? ((c = u = m), (s = d)) : (u = u.next = m),
                  (l |= p));
              if (null === (i = i.next)) {
                if (null === (i = o.shared.pending)) break;
                ((i = (m = i).next),
                  (m.next = null),
                  (o.lastBaseUpdate = m),
                  (o.shared.pending = null));
              }
            }
            (null === u && (s = d),
              (o.baseState = s),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = u),
              null === a && (o.shared.lanes = 0),
              (Sc |= l),
              (e.lanes = l),
              (e.memoizedState = d));
          }
        }
        function Ca(e, t) {
          if ("function" != typeof e) throw Error(l(191, e));
          e.call(t);
        }
        function Na(e, t) {
          var n = e.callbacks;
          if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) Ca(n[e], t);
        }
        var ja = F(null),
          _a = F(0);
        function Pa(e, t) {
          (H(_a, (e = wc)), H(ja, t), (wc = e | t.baseLanes));
        }
        function za() {
          (H(_a, wc), H(ja, ja.current));
        }
        function Ta() {
          ((wc = _a.current), I(ja), I(_a));
        }
        var Ma = F(null),
          Ra = null;
        function Oa(e) {
          var t = e.alternate;
          (H(Ia, 1 & Ia.current),
            H(Ma, e),
            null === Ra &&
              (null === t || null !== ja.current || null !== t.memoizedState) &&
              (Ra = e));
        }
        function La(e) {
          (H(Ia, Ia.current), H(Ma, e), null === Ra && (Ra = e));
        }
        function Da(e) {
          22 === e.tag ? (H(Ia, Ia.current), H(Ma, e), null === Ra && (Ra = e)) : Aa();
        }
        function Aa() {
          (H(Ia, Ia.current), H(Ma, Ma.current));
        }
        function Fa(e) {
          (I(Ma), Ra === e && (Ra = null), I(Ia));
        }
        var Ia = F(0);
        function Ha(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || zd(n) || Td(n))) return t;
            } else if (
              19 !== t.tag ||
              ("forwards" !== t.memoizedProps.revealOrder &&
                "backwards" !== t.memoizedProps.revealOrder &&
                "unstable_legacy-backwards" !== t.memoizedProps.revealOrder &&
                "together" !== t.memoizedProps.revealOrder)
            ) {
              if (null !== t.child) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
            } else if (128 & t.flags) return t;
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        var $a = 0,
          Ba = null,
          Ua = null,
          Wa = null,
          Va = !1,
          qa = !1,
          Ka = !1,
          Qa = 0,
          Ga = 0,
          Ya = null,
          Xa = 0;
        function Za() {
          throw Error(l(321));
        }
        function Ja(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!Xn(e[n], t[n])) return !1;
          return !0;
        }
        function el(e, t, n, r, o, a) {
          return (
            ($a = a),
            (Ba = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (R.H = null === e || null === e.memoizedState ? hi : gi),
            (Ka = !1),
            (a = n(r, o)),
            (Ka = !1),
            qa && (a = nl(t, n, r, o)),
            tl(e),
            a
          );
        }
        function tl(e) {
          R.H = mi;
          var t = null !== Ua && null !== Ua.next;
          if ((($a = 0), (Wa = Ua = Ba = null), (Va = !1), (Ga = 0), (Ya = null), t))
            throw Error(l(300));
          null === e || Mi || (null !== (e = e.dependencies) && zo(e) && (Mi = !0));
        }
        function nl(e, t, n, r) {
          Ba = e;
          var o = 0;
          do {
            if ((qa && (Ya = null), (Ga = 0), (qa = !1), 25 <= o)) throw Error(l(301));
            if (((o += 1), (Wa = Ua = null), null != e.updateQueue)) {
              var a = e.updateQueue;
              ((a.lastEffect = null),
                (a.events = null),
                (a.stores = null),
                null != a.memoCache && (a.memoCache.index = 0));
            }
            ((R.H = vi), (a = t(n, r)));
          } while (qa);
          return a;
        }
        function rl() {
          var e = R.H,
            t = e.useState()[0];
          return (
            (t = "function" == typeof t.then ? cl(t) : t),
            (e = e.useState()[0]),
            (null !== Ua ? Ua.memoizedState : null) !== e && (Ba.flags |= 1024),
            t
          );
        }
        function ol() {
          var e = 0 !== Qa;
          return ((Qa = 0), e);
        }
        function al(e, t, n) {
          ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
        }
        function ll(e) {
          if (Va) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            Va = !1;
          }
          (($a = 0), (Wa = Ua = Ba = null), (qa = !1), (Ga = Qa = 0), (Ya = null));
        }
        function il() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (null === Wa ? (Ba.memoizedState = Wa = e) : (Wa = Wa.next = e), Wa);
        }
        function sl() {
          if (null === Ua) {
            var e = Ba.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Ua.next;
          var t = null === Wa ? Ba.memoizedState : Wa.next;
          if (null !== t) ((Wa = t), (Ua = e));
          else {
            if (null === e) {
              if (null === Ba.alternate) throw Error(l(467));
              throw Error(l(310));
            }
            ((e = {
              memoizedState: (Ua = e).memoizedState,
              baseState: Ua.baseState,
              baseQueue: Ua.baseQueue,
              queue: Ua.queue,
              next: null,
            }),
              null === Wa ? (Ba.memoizedState = Wa = e) : (Wa = Wa.next = e));
          }
          return Wa;
        }
        function cl(e) {
          var t = Ga;
          return (
            (Ga += 1),
            null === Ya && (Ya = []),
            (e = na(Ya, e, t)),
            (t = Ba),
            null === (null === Wa ? t.memoizedState : Wa.next) &&
              ((t = t.alternate), (R.H = null === t || null === t.memoizedState ? hi : gi)),
            e
          );
        }
        function ul(e) {
          if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return cl(e);
            if (e.$$typeof === x) return Mo(e);
          }
          throw Error(l(438, String(e)));
        }
        function dl(e) {
          var t = null,
            n = Ba.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Ba.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = { lastEffect: null, events: null, stores: null, memoCache: null }),
              (Ba.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = j;
          return (t.index++, n);
        }
        function fl(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function pl(e) {
          return ml(sl(), Ua, e);
        }
        function ml(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(l(311));
          r.lastRenderedReducer = n;
          var o = e.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== o) {
              var i = o.next;
              ((o.next = a.next), (a.next = i));
            }
            ((t.baseQueue = o = a), (r.pending = null));
          }
          if (((a = e.baseState), null === o)) e.memoizedState = a;
          else {
            var s = (i = null),
              c = null,
              u = (t = o.next),
              d = !1;
            do {
              var f = -536870913 & u.lane;
              if (f !== u.lane ? (hc & f) === f : ($a & f) === f) {
                var p = u.revertLane;
                if (0 === p)
                  (null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                      }),
                    f === Uo && (d = !0));
                else {
                  if (($a & p) === p) {
                    ((u = u.next), p === Uo && (d = !0));
                    continue;
                  }
                  ((f = {
                    lane: 0,
                    revertLane: u.revertLane,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                    null === c ? ((s = c = f), (i = a)) : (c = c.next = f),
                    (Ba.lanes |= p),
                    (Sc |= p));
                }
                ((f = u.action), Ka && n(a, f), (a = u.hasEagerState ? u.eagerState : n(a, f)));
              } else
                ((p = {
                  lane: f,
                  revertLane: u.revertLane,
                  gesture: u.gesture,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
                  null === c ? ((s = c = p), (i = a)) : (c = c.next = p),
                  (Ba.lanes |= f),
                  (Sc |= f));
              u = u.next;
            } while (null !== u && u !== t);
            if (
              (null === c ? (i = a) : (c.next = s),
              !Xn(a, e.memoizedState) && ((Mi = !0), d && null !== (n = Wo)))
            )
              throw n;
            ((e.memoizedState = a),
              (e.baseState = i),
              (e.baseQueue = c),
              (r.lastRenderedState = a));
          }
          return (null === o && (r.lanes = 0), [e.memoizedState, r.dispatch]);
        }
        function hl(e) {
          var t = sl(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var i = (o = o.next);
            do {
              ((a = e(a, i.action)), (i = i.next));
            } while (i !== o);
            (Xn(a, t.memoizedState) || (Mi = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a));
          }
          return [a, r];
        }
        function gl(e, t, n) {
          var r = Ba,
            o = sl(),
            a = uo;
          if (a) {
            if (void 0 === n) throw Error(l(407));
            n = n();
          } else n = t();
          var i = !Xn((Ua || o).memoizedState, n);
          if (
            (i && ((o.memoizedState = n), (Mi = !0)),
            (o = o.queue),
            $l(bl.bind(null, r, o, e), [e]),
            o.getSnapshot !== t || i || (null !== Wa && 1 & Wa.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Dl(9, { destroy: void 0 }, yl.bind(null, r, o, n, t), null),
              null === pc)
            )
              throw Error(l(349));
            a || 127 & $a || vl(r, t, n);
          }
          return n;
        }
        function vl(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Ba.updateQueue)
              ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                (Ba.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function yl(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), xl(t) && wl(e));
        }
        function bl(e, t, n) {
          return n(function () {
            xl(t) && wl(e);
          });
        }
        function xl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Xn(e, n);
          } catch (e) {
            return !0;
          }
        }
        function wl(e) {
          var t = Mr(e, 2);
          null !== t && Kc(t, 0, 2);
        }
        function kl(e) {
          var t = il();
          if ("function" == typeof e) {
            var n = e;
            if (((e = n()), Ka)) {
              ye(!0);
              try {
                n();
              } finally {
                ye(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: fl,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Sl(e, t, n, r) {
          return ((e.baseState = n), ml(e, Ua, "function" == typeof r ? r : fl));
        }
        function El(e, t, n, r, o) {
          if (di(e)) throw Error(l(485));
          if (null !== (e = t.action)) {
            var a = {
              payload: o,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                a.listeners.push(e);
              },
            };
            (null !== R.T ? n(!0) : (a.isTransition = !1),
              r(a),
              null === (n = t.pending)
                ? ((a.next = t.pending = a), Cl(t, a))
                : ((a.next = n.next), (t.pending = n.next = a)));
          }
        }
        function Cl(e, t) {
          var n = t.action,
            r = t.payload,
            o = e.state;
          if (t.isTransition) {
            var a = R.T,
              l = {};
            R.T = l;
            try {
              var i = n(o, r),
                s = R.S;
              (null !== s && s(l, i), Nl(e, t, i));
            } catch (n) {
              _l(e, t, n);
            } finally {
              (null !== a && null !== l.types && (a.types = l.types), (R.T = a));
            }
          } else
            try {
              Nl(e, t, (a = n(o, r)));
            } catch (n) {
              _l(e, t, n);
            }
        }
        function Nl(e, t, n) {
          null !== n && "object" == typeof n && "function" == typeof n.then
            ? n.then(
                function (n) {
                  jl(e, t, n);
                },
                function (n) {
                  return _l(e, t, n);
                },
              )
            : jl(e, t, n);
        }
        function jl(e, t, n) {
          ((t.status = "fulfilled"),
            (t.value = n),
            Pl(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), Cl(e, n))));
        }
        function _l(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((t.status = "rejected"), (t.reason = n), Pl(t), (t = t.next));
            } while (t !== r);
          }
          e.action = null;
        }
        function Pl(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function zl(e, t) {
          return t;
        }
        function Tl(e, t) {
          if (uo) {
            var n = pc.formState;
            if (null !== n) {
              e: {
                var r = Ba;
                if (uo) {
                  if (co) {
                    t: {
                      for (var o = co, a = po; 8 !== o.nodeType; ) {
                        if (!a) {
                          o = null;
                          break t;
                        }
                        if (null === (o = Md(o.nextSibling))) {
                          o = null;
                          break t;
                        }
                      }
                      o = "F!" === (a = o.data) || "F" === a ? o : null;
                    }
                    if (o) {
                      ((co = Md(o.nextSibling)), (r = "F!" === o.data));
                      break e;
                    }
                  }
                  ho(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = il()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: zl,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = si.bind(null, Ba, r)),
            (r.dispatch = n),
            (r = kl(!1)),
            (a = ui.bind(null, Ba, !1, r.queue)),
            (o = { state: t, dispatch: null, action: e, pending: null }),
            ((r = il()).queue = o),
            (n = El.bind(null, Ba, o, a, n)),
            (o.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Ml(e) {
          return Rl(sl(), Ua, e);
        }
        function Rl(e, t, n) {
          if (
            ((t = ml(e, t, zl)[0]),
            (e = pl(fl)[0]),
            "object" == typeof t && null !== t && "function" == typeof t.then)
          )
            try {
              var r = cl(t);
            } catch (e) {
              if (e === Xo) throw Jo;
              throw e;
            }
          else r = t;
          var o = (t = sl()).queue,
            a = o.dispatch;
          return (
            n !== t.memoizedState &&
              ((Ba.flags |= 2048), Dl(9, { destroy: void 0 }, Ol.bind(null, o, n), null)),
            [r, a, e]
          );
        }
        function Ol(e, t) {
          e.action = t;
        }
        function Ll(e) {
          var t = sl(),
            n = Ua;
          if (null !== n) return Rl(t, n, e);
          (sl(), (t = t.memoizedState));
          var r = (n = sl()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function Dl(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = Ba.updateQueue) &&
              ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
              (Ba.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Al() {
          return sl().memoizedState;
        }
        function Fl(e, t, n, r) {
          var o = il();
          ((Ba.flags |= e),
            (o.memoizedState = Dl(1 | t, { destroy: void 0 }, n, void 0 === r ? null : r)));
        }
        function Il(e, t, n, r) {
          var o = sl();
          r = void 0 === r ? null : r;
          var a = o.memoizedState.inst;
          null !== Ua && null !== r && Ja(r, Ua.memoizedState.deps)
            ? (o.memoizedState = Dl(t, a, n, r))
            : ((Ba.flags |= e), (o.memoizedState = Dl(1 | t, a, n, r)));
        }
        function Hl(e, t) {
          Fl(8390656, 8, e, t);
        }
        function $l(e, t) {
          Il(2048, 8, e, t);
        }
        function Bl(e) {
          var t = sl().memoizedState;
          return (
            (function (e) {
              Ba.flags |= 4;
              var t = Ba.updateQueue;
              if (null === t)
                ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                  (Ba.updateQueue = t),
                  (t.events = [e]));
              else {
                var n = t.events;
                null === n ? (t.events = [e]) : n.push(e);
              }
            })({ ref: t, nextImpl: e }),
            function () {
              if (2 & fc) throw Error(l(440));
              return t.impl.apply(void 0, arguments);
            }
          );
        }
        function Ul(e, t) {
          return Il(4, 2, e, t);
        }
        function Wl(e, t) {
          return Il(4, 4, e, t);
        }
        function Vl(e, t) {
          if ("function" == typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" == typeof n ? n() : t(null);
            };
          }
          if (null != t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function ql(e, t, n) {
          ((n = null != n ? n.concat([e]) : null), Il(4, 4, Vl.bind(null, t, e), n));
        }
        function Kl() {}
        function Ql(e, t) {
          var n = sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && Ja(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Gl(e, t) {
          var n = sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && Ja(t, r[1])) return r[0];
          if (((r = e()), Ka)) {
            ye(!0);
            try {
              e();
            } finally {
              ye(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function Yl(e, t, n) {
          return void 0 === n || (1073741824 & $a && !(261930 & hc))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n), (e = qc()), (Ba.lanes |= e), (Sc |= e), n);
        }
        function Xl(e, t, n, r) {
          return Xn(n, t)
            ? n
            : null !== ja.current
              ? ((e = Yl(e, n, r)), Xn(e, t) || (Mi = !0), e)
              : 42 & $a && (!(1073741824 & $a) || 261930 & hc)
                ? ((e = qc()), (Ba.lanes |= e), (Sc |= e), t)
                : ((Mi = !0), (e.memoizedState = n));
        }
        function Zl(e, t, n, r, o) {
          var a = O.p;
          O.p = 0 !== a && 8 > a ? a : 8;
          var l,
            i,
            s,
            c = R.T,
            u = {};
          ((R.T = u), ui(e, !1, t, n));
          try {
            var d = o(),
              f = R.S;
            (null !== f && f(u, d),
              null !== d && "object" == typeof d && "function" == typeof d.then
                ? ci(
                    e,
                    t,
                    ((l = r),
                    (i = []),
                    (s = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        i.push(e);
                      },
                    }),
                    d.then(
                      function () {
                        ((s.status = "fulfilled"), (s.value = l));
                        for (var e = 0; e < i.length; e++) (0, i[e])(l);
                      },
                      function (e) {
                        for (s.status = "rejected", s.reason = e, e = 0; e < i.length; e++)
                          (0, i[e])(void 0);
                      },
                    ),
                    s),
                    Vc(),
                  )
                : ci(e, t, r, Vc()));
          } catch (n) {
            ci(e, t, { then: function () {}, status: "rejected", reason: n }, Vc());
          } finally {
            ((O.p = a), null !== c && null !== u.types && (c.types = u.types), (R.T = c));
          }
        }
        function Jl() {}
        function ei(e, t, n, r) {
          if (5 !== e.tag) throw Error(l(476));
          var o = ti(e).queue;
          Zl(
            e,
            o,
            t,
            L,
            null === n
              ? Jl
              : function () {
                  return (ni(e), n(r));
                },
          );
        }
        function ti(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: L,
              baseState: L,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fl,
                lastRenderedState: L,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fl,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function ni(e) {
          var t = ti(e);
          (null === t.next && (t = e.alternate.memoizedState), ci(e, t.next.queue, {}, Vc()));
        }
        function ri() {
          return Mo(uf);
        }
        function oi() {
          return sl().memoizedState;
        }
        function ai() {
          return sl().memoizedState;
        }
        function li(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Vc(),
                  r = ba(t, (e = ya(n)), n);
                return (
                  null !== r && (Kc(r, 0, n), xa(r, t, n)),
                  (t = { cache: Io() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function ii(e, t, n) {
          var r = Vc();
          ((n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            di(e) ? fi(t, n) : null !== (n = Tr(e, t, n, r)) && (Kc(n, 0, r), pi(n, t, r)));
        }
        function si(e, t, n) {
          ci(e, t, n, Vc());
        }
        function ci(e, t, n, r) {
          var o = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (di(e)) fi(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = a(l, n);
                if (((o.hasEagerState = !0), (o.eagerState = i), Xn(i, l)))
                  return (zr(e, t, o, 0), null === pc && Pr(), !1);
              } catch (e) {}
            if (null !== (n = Tr(e, t, o, r))) return (Kc(n, 0, r), pi(n, t, r), !0);
          }
          return !1;
        }
        function ui(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: $u(),
              gesture: null,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            di(e))
          ) {
            if (t) throw Error(l(479));
          } else null !== (t = Tr(e, n, r, 2)) && Kc(t, 0, 2);
        }
        function di(e) {
          var t = e.alternate;
          return e === Ba || (null !== t && t === Ba);
        }
        function fi(e, t) {
          qa = Va = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
        }
        function pi(e, t, n) {
          if (4194048 & n) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n));
          }
        }
        var mi = {
          readContext: Mo,
          use: ul,
          useCallback: Za,
          useContext: Za,
          useEffect: Za,
          useImperativeHandle: Za,
          useLayoutEffect: Za,
          useInsertionEffect: Za,
          useMemo: Za,
          useReducer: Za,
          useRef: Za,
          useState: Za,
          useDebugValue: Za,
          useDeferredValue: Za,
          useTransition: Za,
          useSyncExternalStore: Za,
          useId: Za,
          useHostTransitionStatus: Za,
          useFormState: Za,
          useActionState: Za,
          useOptimistic: Za,
          useMemoCache: Za,
          useCacheRefresh: Za,
        };
        mi.useEffectEvent = Za;
        var hi = {
            readContext: Mo,
            use: ul,
            useCallback: function (e, t) {
              return ((il().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Mo,
            useEffect: Hl,
            useImperativeHandle: function (e, t, n) {
              ((n = null != n ? n.concat([e]) : null), Fl(4194308, 4, Vl.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return Fl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              Fl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = il();
              t = void 0 === t ? null : t;
              var r = e();
              if (Ka) {
                ye(!0);
                try {
                  e();
                } finally {
                  ye(!1);
                }
              }
              return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
              var r = il();
              if (void 0 !== n) {
                var o = n(t);
                if (Ka) {
                  ye(!0);
                  try {
                    n(t);
                  } finally {
                    ye(!1);
                  }
                }
              } else o = t;
              return (
                (r.memoizedState = r.baseState = o),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: o,
                }),
                (r.queue = e),
                (e = e.dispatch = ii.bind(null, Ba, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (il().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = kl(e)).queue,
                n = si.bind(null, Ba, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: Kl,
            useDeferredValue: function (e, t) {
              return Yl(il(), e, t);
            },
            useTransition: function () {
              var e = kl(!1);
              return ((e = Zl.bind(null, Ba, e.queue, !0, !1)), (il().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
              var r = Ba,
                o = il();
              if (uo) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === pc)) throw Error(l(349));
                127 & hc || vl(r, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                Hl(bl.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                Dl(9, { destroy: void 0 }, yl.bind(null, r, a, n, t), null),
                n
              );
            },
            useId: function () {
              var e = il(),
                t = pc.identifierPrefix;
              if (uo) {
                var n = no;
                ((t = "_" + t + "R_" + (n = (to & ~(1 << (32 - be(to) - 1))).toString(32) + n)),
                  0 < (n = Qa++) && (t += "H" + n.toString(32)),
                  (t += "_"));
              } else t = "_" + t + "r_" + (n = Xa++).toString(32) + "_";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: ri,
            useFormState: Tl,
            useActionState: Tl,
            useOptimistic: function (e) {
              var t = il();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return ((t.queue = n), (t = ui.bind(null, Ba, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: dl,
            useCacheRefresh: function () {
              return (il().memoizedState = li.bind(null, Ba));
            },
            useEffectEvent: function (e) {
              var t = il(),
                n = { impl: e };
              return (
                (t.memoizedState = n),
                function () {
                  if (2 & fc) throw Error(l(440));
                  return n.impl.apply(void 0, arguments);
                }
              );
            },
          },
          gi = {
            readContext: Mo,
            use: ul,
            useCallback: Ql,
            useContext: Mo,
            useEffect: $l,
            useImperativeHandle: ql,
            useInsertionEffect: Ul,
            useLayoutEffect: Wl,
            useMemo: Gl,
            useReducer: pl,
            useRef: Al,
            useState: function () {
              return pl(fl);
            },
            useDebugValue: Kl,
            useDeferredValue: function (e, t) {
              return Xl(sl(), Ua.memoizedState, e, t);
            },
            useTransition: function () {
              var e = pl(fl)[0],
                t = sl().memoizedState;
              return ["boolean" == typeof e ? e : cl(e), t];
            },
            useSyncExternalStore: gl,
            useId: oi,
            useHostTransitionStatus: ri,
            useFormState: Ml,
            useActionState: Ml,
            useOptimistic: function (e, t) {
              return Sl(sl(), 0, e, t);
            },
            useMemoCache: dl,
            useCacheRefresh: ai,
          };
        gi.useEffectEvent = Bl;
        var vi = {
          readContext: Mo,
          use: ul,
          useCallback: Ql,
          useContext: Mo,
          useEffect: $l,
          useImperativeHandle: ql,
          useInsertionEffect: Ul,
          useLayoutEffect: Wl,
          useMemo: Gl,
          useReducer: hl,
          useRef: Al,
          useState: function () {
            return hl(fl);
          },
          useDebugValue: Kl,
          useDeferredValue: function (e, t) {
            var n = sl();
            return null === Ua ? Yl(n, e, t) : Xl(n, Ua.memoizedState, e, t);
          },
          useTransition: function () {
            var e = hl(fl)[0],
              t = sl().memoizedState;
            return ["boolean" == typeof e ? e : cl(e), t];
          },
          useSyncExternalStore: gl,
          useId: oi,
          useHostTransitionStatus: ri,
          useFormState: Ll,
          useActionState: Ll,
          useOptimistic: function (e, t) {
            var n = sl();
            return null !== Ua ? Sl(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
          },
          useMemoCache: dl,
          useCacheRefresh: ai,
        };
        function yi(e, t, n, r) {
          ((n = null == (n = n(r, (t = e.memoizedState))) ? t : f({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        vi.useEffectEvent = Bl;
        var bi = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Vc(),
              o = ya(r);
            ((o.payload = t),
              null != n && (o.callback = n),
              null !== (t = ba(e, o, r)) && (Kc(t, 0, r), xa(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Vc(),
              o = ya(r);
            ((o.tag = 1),
              (o.payload = t),
              null != n && (o.callback = n),
              null !== (t = ba(e, o, r)) && (Kc(t, 0, r), xa(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Vc(),
              r = ya(n);
            ((r.tag = 2),
              null != t && (r.callback = t),
              null !== (t = ba(e, r, n)) && (Kc(t, 0, n), xa(t, e, n)));
          },
        };
        function xi(e, t, n, r, o, a, l) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, l)
            : !(t.prototype && t.prototype.isPureReactComponent && Zn(n, r) && Zn(o, a));
        }
        function wi(e, t, n, r) {
          ((e = t.state),
            "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && bi.enqueueReplaceState(t, t.state, null));
        }
        function ki(e, t) {
          var n = t;
          if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var o in (n === t && (n = f({}, n)), e)) void 0 === n[o] && (n[o] = e[o]);
          return n;
        }
        function Si(e) {
          Cr(e);
        }
        function Ei(e) {
          console.error(e);
        }
        function Ci(e) {
          Cr(e);
        }
        function Ni(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function ji(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function _i(e, t, n) {
          return (
            ((n = ya(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Ni(e, t);
            }),
            n
          );
        }
        function Pi(e) {
          return (((e = ya(e)).tag = 3), e);
        }
        function zi(e, t, n, r) {
          var o = n.type.getDerivedStateFromError;
          if ("function" == typeof o) {
            var a = r.value;
            ((e.payload = function () {
              return o(a);
            }),
              (e.callback = function () {
                ji(t, n, r);
              }));
          }
          var l = n.stateNode;
          null !== l &&
            "function" == typeof l.componentDidCatch &&
            (e.callback = function () {
              (ji(t, n, r),
                "function" != typeof o && (null === Lc ? (Lc = new Set([this])) : Lc.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
            });
        }
        var Ti = Error(l(461)),
          Mi = !1;
        function Ri(e, t, n, r) {
          t.child = null === e ? ma(t, null, n, r) : pa(t, e.child, n, r);
        }
        function Oi(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          if ("ref" in r) {
            var l = {};
            for (var i in r) "ref" !== i && (l[i] = r[i]);
          } else l = r;
          return (
            To(t),
            (r = el(e, t, n, l, a, o)),
            (i = ol()),
            null === e || Mi
              ? (uo && i && ao(t), (t.flags |= 1), Ri(e, t, r, o), t.child)
              : (al(e, t, o), rs(e, t, o))
          );
        }
        function Li(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              Fr(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare
              ? (((e = $r(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Di(e, t, a, r, o));
          }
          if (((a = e.child), !os(e, o))) {
            var l = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Zn)(l, r) && e.ref === t.ref)
              return rs(e, t, o);
          }
          return ((t.flags |= 1), ((e = Ir(a, r)).ref = t.ref), (e.return = t), (t.child = e));
        }
        function Di(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Zn(a, r) && e.ref === t.ref) {
              if (((Mi = !1), (t.pendingProps = r = a), !os(e, o)))
                return ((t.lanes = e.lanes), rs(e, t, o));
              131072 & e.flags && (Mi = !0);
            }
          }
          return Ui(e, t, n, r, o);
        }
        function Ai(e, t, n, r) {
          var o = r.children,
            a = null !== e ? e.memoizedState : null;
          if (
            (null === e &&
              null === t.stateNode &&
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            "hidden" === r.mode)
          ) {
            if (128 & t.flags) {
              if (((a = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (r = t.child = e.child, o = 0; null !== r; )
                  ((o = o | r.lanes | r.childLanes), (r = r.sibling));
                r = o & ~a;
              } else ((r = 0), (t.child = null));
              return Ii(e, t, a, n, r);
            }
            if (!(536870912 & n))
              return ((r = t.lanes = 536870912), Ii(e, t, null !== a ? a.baseLanes | n : n, n, r));
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Go(0, null !== a ? a.cachePool : null),
              null !== a ? Pa(t, a) : za(),
              Da(t));
          } else
            null !== a
              ? (Go(0, a.cachePool), Pa(t, a), Aa(), (t.memoizedState = null))
              : (null !== e && Go(0, null), za(), Aa());
          return (Ri(e, t, o, n), t.child);
        }
        function Fi(e, t) {
          return (
            (null !== e && 22 === e.tag) ||
              null !== t.stateNode ||
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            t.sibling
          );
        }
        function Ii(e, t, n, r, o) {
          var a = Qo();
          return (
            (a = null === a ? null : { parent: Fo._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Go(0, null),
            za(),
            Da(t),
            null !== e && Po(e, t, r, !0),
            (t.childLanes = o),
            null
          );
        }
        function Hi(e, t) {
          return (
            ((t = Zi({ mode: t.mode, children: t.children }, e.mode)).ref = e.ref),
            (e.child = t),
            (t.return = e),
            t
          );
        }
        function $i(e, t, n) {
          return (
            pa(t, e.child, null, n),
            ((e = Hi(t, t.pendingProps)).flags |= 2),
            Fa(t),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ui(e, t, n, r, o) {
          return (
            To(t),
            (n = el(e, t, n, r, void 0, o)),
            (r = ol()),
            null === e || Mi
              ? (uo && r && ao(t), (t.flags |= 1), Ri(e, t, n, o), t.child)
              : (al(e, t, o), rs(e, t, o))
          );
        }
        function Wi(e, t, n, r, o, a) {
          return (
            To(t),
            (t.updateQueue = null),
            (n = nl(t, r, n, o)),
            tl(e),
            (r = ol()),
            null === e || Mi
              ? (uo && r && ao(t), (t.flags |= 1), Ri(e, t, n, a), t.child)
              : (al(e, t, a), rs(e, t, a))
          );
        }
        function Vi(e, t, n, r, o) {
          if ((To(t), null === t.stateNode)) {
            var a = Lr,
              l = n.contextType;
            ("object" == typeof l && null !== l && (a = Mo(l)),
              (a = new n(r, a)),
              (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = bi),
              (t.stateNode = a),
              (a._reactInternals = t),
              ((a = t.stateNode).props = r),
              (a.state = t.memoizedState),
              (a.refs = {}),
              ga(t),
              (l = n.contextType),
              (a.context = "object" == typeof l && null !== l ? Mo(l) : Lr),
              (a.state = t.memoizedState),
              "function" == typeof (l = n.getDerivedStateFromProps) &&
                (yi(t, n, l, r), (a.state = t.memoizedState)),
              "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount &&
                  "function" != typeof a.componentWillMount) ||
                ((l = a.state),
                "function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                l !== a.state && bi.enqueueReplaceState(a, a.state, null),
                Ea(t, r, a, o),
                Sa(),
                (a.state = t.memoizedState)),
              "function" == typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            a = t.stateNode;
            var i = t.memoizedProps,
              s = ki(n, i);
            a.props = s;
            var c = a.context,
              u = n.contextType;
            ((l = Lr), "object" == typeof u && null !== u && (l = Mo(u)));
            var d = n.getDerivedStateFromProps;
            ((u = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              u ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((i || c !== l) && wi(t, a, r, l)),
              (ha = !1));
            var f = t.memoizedState;
            ((a.state = f),
              Ea(t, r, a, o),
              Sa(),
              (c = t.memoizedState),
              i || f !== c || ha
                ? ("function" == typeof d && (yi(t, n, d, r), (c = t.memoizedState)),
                  (s = ha || xi(t, n, s, r, f, c, l))
                    ? (u ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount && a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount && (t.flags |= 4194308))
                    : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = c)),
                  (a.props = r),
                  (a.state = c),
                  (a.context = l),
                  (r = s))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1)));
          } else {
            ((a = t.stateNode),
              va(e, t),
              (u = ki(n, (l = t.memoizedProps))),
              (a.props = u),
              (d = t.pendingProps),
              (f = a.context),
              (c = n.contextType),
              (s = Lr),
              "object" == typeof c && null !== c && (s = Mo(c)),
              (c =
                "function" == typeof (i = n.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((l !== d || f !== s) && wi(t, a, r, s)),
              (ha = !1),
              (f = t.memoizedState),
              (a.state = f),
              Ea(t, r, a, o),
              Sa());
            var p = t.memoizedState;
            l !== d ||
            f !== p ||
            ha ||
            (null !== e && null !== e.dependencies && zo(e.dependencies))
              ? ("function" == typeof i && (yi(t, n, i, r), (p = t.memoizedState)),
                (u =
                  ha ||
                  xi(t, n, u, r, f, p, s) ||
                  (null !== e && null !== e.dependencies && zo(e.dependencies)))
                  ? (c ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, s),
                      "function" == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ("function" != typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = s),
                (r = u))
              : ("function" != typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            Bi(e, t),
            (r = !!(128 & t.flags)),
            a || r
              ? ((a = t.stateNode),
                (n = r && "function" != typeof n.getDerivedStateFromError ? null : a.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = pa(t, e.child, null, o)), (t.child = pa(t, null, n, o)))
                  : Ri(e, t, n, o),
                (t.memoizedState = a.state),
                (e = t.child))
              : (e = rs(e, t, o)),
            e
          );
        }
        function qi(e, t, n, r) {
          return (bo(), (t.flags |= 256), Ri(e, t, n, r), t.child);
        }
        var Ki = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Qi(e) {
          return { baseLanes: e, cachePool: Yo() };
        }
        function Gi(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Nc), e);
        }
        function Yi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = !1,
            i = !!(128 & t.flags);
          if (
            ((r = i) || (r = (null === e || null !== e.memoizedState) && !!(2 & Ia.current)),
            r && ((a = !0), (t.flags &= -129)),
            (r = !!(32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (uo) {
              if (
                (a ? Oa(t) : Aa(),
                (e = co)
                  ? null !== (e = null !== (e = Pd(e, po)) && "&" !== e.data ? e : null) &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext: null !== eo ? { id: to, overflow: no } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((n = Wr(e)).return = t),
                    (t.child = n),
                    (so = t),
                    (co = null))
                  : (e = null),
                null === e)
              )
                throw ho(t);
              return (Td(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var s = o.children;
            return (
              (o = o.fallback),
              a
                ? (Aa(),
                  (s = Zi({ mode: "hidden", children: s }, (a = t.mode))),
                  (o = Br(o, a, n, null)),
                  (s.return = t),
                  (o.return = t),
                  (s.sibling = o),
                  (t.child = s),
                  ((o = t.child).memoizedState = Qi(n)),
                  (o.childLanes = Gi(e, r, n)),
                  (t.memoizedState = Ki),
                  Fi(null, o))
                : (Oa(t), Xi(t, s))
            );
          }
          var c = e.memoizedState;
          if (null !== c && null !== (s = c.dehydrated)) {
            if (i)
              256 & t.flags
                ? (Oa(t), (t.flags &= -257), (t = Ji(e, t, n)))
                : null !== t.memoizedState
                  ? (Aa(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (Aa(),
                    (s = o.fallback),
                    (a = t.mode),
                    (o = Zi({ mode: "visible", children: o.children }, a)),
                    ((s = Br(s, a, n, null)).flags |= 2),
                    (o.return = t),
                    (s.return = t),
                    (o.sibling = s),
                    (t.child = o),
                    pa(t, e.child, null, n),
                    ((o = t.child).memoizedState = Qi(n)),
                    (o.childLanes = Gi(e, r, n)),
                    (t.memoizedState = Ki),
                    (t = Fi(null, o)));
            else if ((Oa(t), Td(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var u = r.dgst;
              ((r = u),
                ((o = Error(l(419))).stack = ""),
                (o.digest = r),
                wo({ value: o, source: null, stack: null }),
                (t = Ji(e, t, n)));
            } else if ((Mi || Po(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Mi || r)) {
              if (null !== (r = pc) && 0 !== (o = Oe(r, n)) && o !== c.retryLane)
                throw ((c.retryLane = o), Mr(e, o), Kc(r, 0, o), Ti);
              (zd(s) || au(), (t = Ji(e, t, n)));
            } else
              zd(s)
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = c.treeContext),
                  (co = Md(s.nextSibling)),
                  (so = t),
                  (uo = !0),
                  (fo = null),
                  (po = !1),
                  null !== e && io(t, e),
                  ((t = Xi(t, o.children)).flags |= 4096));
            return t;
          }
          return a
            ? (Aa(),
              (s = o.fallback),
              (a = t.mode),
              (u = (c = e.child).sibling),
              ((o = Ir(c, { mode: "hidden", children: o.children })).subtreeFlags =
                65011712 & c.subtreeFlags),
              null !== u ? (s = Ir(u, s)) : ((s = Br(s, a, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              Fi(null, o),
              (o = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Qi(n))
                : (null !== (a = s.cachePool)
                    ? ((c = Fo._currentValue), (a = a.parent !== c ? { parent: c, pool: c } : a))
                    : (a = Yo()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: a })),
              (o.memoizedState = s),
              (o.childLanes = Gi(e, r, n)),
              (t.memoizedState = Ki),
              Fi(e.child, o))
            : (Oa(t),
              (e = (n = e.child).sibling),
              ((n = Ir(n, { mode: "visible", children: o.children })).return = t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Xi(e, t) {
          return (((t = Zi({ mode: "visible", children: t }, e.mode)).return = e), (e.child = t));
        }
        function Zi(e, t) {
          return (((e = Ar(22, e, null, t)).lanes = 0), e);
        }
        function Ji(e, t, n) {
          return (
            pa(t, e.child, null, n),
            ((e = Xi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function es(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), jo(e.return, t, n));
        }
        function ts(e, t, n, r, o, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                treeForkCount: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = o),
              (l.treeForkCount = a));
        }
        function ns(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          r = r.children;
          var l = Ia.current,
            i = !!(2 & l);
          if (
            (i ? ((l = (1 & l) | 2), (t.flags |= 128)) : (l &= 1),
            H(Ia, l),
            Ri(e, t, r, n),
            (r = uo ? Xr : 0),
            !i && null !== e && 128 & e.flags)
          )
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && es(e, n, t);
              else if (19 === e.tag) es(e, n, t);
              else if (null !== e.child) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              ((e.sibling.return = e.return), (e = e.sibling));
            }
          switch (o) {
            case "forwards":
              for (n = t.child, o = null; null !== n; )
                (null !== (e = n.alternate) && null === Ha(e) && (o = n), (n = n.sibling));
              (null === (n = o)
                ? ((o = t.child), (t.child = null))
                : ((o = n.sibling), (n.sibling = null)),
                ts(t, !1, o, n, a, r));
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                if (null !== (e = o.alternate) && null === Ha(e)) {
                  t.child = o;
                  break;
                }
                ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
              }
              ts(t, !0, n, null, a, r);
              break;
            case "together":
              ts(t, !1, null, null, void 0, r);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function rs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Sc |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Po(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ir((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;
            )
              ((e = e.sibling), ((n = n.sibling = Ir(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function os(e, t) {
          return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !zo(e));
        }
        function as(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Mi = !0;
            else {
              if (!(os(e, n) || 128 & t.flags))
                return (
                  (Mi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (K(t, t.stateNode.containerInfo), Co(0, Fo, e.memoizedState.cache), bo());
                        break;
                      case 27:
                      case 5:
                        G(t);
                        break;
                      case 4:
                        K(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        Co(0, t.type, t.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== t.memoizedState) return ((t.flags |= 128), La(t), null);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Oa(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Yi(e, t, n)
                              : (Oa(t), null !== (e = rs(e, t, n)) ? e.sibling : null);
                        Oa(t);
                        break;
                      case 19:
                        var o = !!(128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Po(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          o)
                        ) {
                          if (r) return ns(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                          H(Ia, Ia.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                        return ((t.lanes = 0), Ai(e, t, n, t.pendingProps));
                      case 24:
                        Co(0, Fo, e.memoizedState.cache);
                    }
                    return rs(e, t, n);
                  })(e, t, n)
                );
              Mi = !!(131072 & e.flags);
            }
          else ((Mi = !1), uo && 1048576 & t.flags && oo(t, Xr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                var r = t.pendingProps;
                if (((e = ra(t.elementType)), (t.type = e), "function" != typeof e)) {
                  if (null != e) {
                    var o = e.$$typeof;
                    if (o === w) {
                      ((t.tag = 11), (t = Oi(null, t, e, r, n)));
                      break e;
                    }
                    if (o === E) {
                      ((t.tag = 14), (t = Li(null, t, e, r, n)));
                      break e;
                    }
                  }
                  throw ((t = T(e) || e), Error(l(306, t, "")));
                }
                Fr(e)
                  ? ((r = ki(e, r)), (t.tag = 1), (t = Vi(null, t, e, r, n)))
                  : ((t.tag = 0), (t = Ui(null, t, e, r, n)));
              }
              return t;
            case 0:
              return Ui(e, t, t.type, t.pendingProps, n);
            case 1:
              return Vi(e, t, (r = t.type), (o = ki(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((K(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                ((o = a.element), va(e, t), Ea(t, r, null, n));
                var i = t.memoizedState;
                if (
                  ((r = i.cache),
                  Co(0, Fo, r),
                  r !== a.cache && _o(t, [Fo], n, !0),
                  Sa(),
                  (r = i.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = { element: r, isDehydrated: !1, cache: i.cache }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = qi(e, t, r, n);
                    break e;
                  }
                  if (r !== o) {
                    (wo((o = Kr(Error(l(424)), t))), (t = qi(e, t, r, n)));
                    break e;
                  }
                  for (
                    e =
                      9 === (e = t.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      co = Md(e.firstChild),
                      so = t,
                      uo = !0,
                      fo = null,
                      po = !0,
                      n = ma(t, null, r, n),
                      t.child = n;
                    n;
                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((bo(), r === o)) {
                    t = rs(e, t, n);
                    break e;
                  }
                  Ri(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Bi(e, t),
                null === e
                  ? (n = Wd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : uo ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = hd(V.current).createElement(n))[He] = t),
                      (r[$e] = e),
                      dd(r, n, e),
                      Je(r),
                      (t.stateNode = r))
                  : (t.memoizedState = Wd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState,
                    )),
                null
              );
            case 27:
              return (
                G(t),
                null === e &&
                  uo &&
                  ((r = t.stateNode = Dd(t.type, t.pendingProps, V.current)),
                  (so = t),
                  (po = !0),
                  (o = co),
                  Cd(t.type) ? ((Rd = o), (co = Md(r.firstChild))) : (co = o)),
                Ri(e, t, t.pendingProps.children, n),
                Bi(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  uo &&
                  ((o = r = co) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var o = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
                        } else if (r) {
                          if (!e[Ke])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" === (a = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  a !== o.rel ||
                                  e.getAttribute("href") !==
                                    (null == o.href || "" === o.href ? null : o.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == o.crossOrigin ? null : o.crossOrigin) ||
                                  e.getAttribute("title") !== (null == o.title ? null : o.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((a = e.getAttribute("src")) !== (null == o.src ? null : o.src) ||
                                    e.getAttribute("type") !== (null == o.type ? null : o.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == o.crossOrigin ? null : o.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var a = null == o.name ? null : "" + o.name;
                          if ("hidden" === o.type && e.getAttribute("name") === a) return e;
                        }
                        if (null === (e = Md(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, po))
                      ? ((t.stateNode = r), (so = t), (co = Md(r.firstChild)), (po = !1), (o = !0))
                      : (o = !1)),
                  o || ho(t)),
                G(t),
                (o = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = a.children),
                yd(o, a) ? (r = null) : null !== i && yd(o, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((o = el(e, t, rl, null, null, n)), (uf._currentValue = o)),
                Bi(e, t),
                Ri(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  uo &&
                  ((e = n = co) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = Md(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, po))
                      ? ((t.stateNode = n), (so = t), (co = null), (e = !0))
                      : (e = !1)),
                  e || ho(t)),
                null
              );
            case 13:
              return Yi(e, t, n);
            case 4:
              return (
                K(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = pa(t, null, r, n)) : Ri(e, t, r, n),
                t.child
              );
            case 11:
              return Oi(e, t, t.type, t.pendingProps, n);
            case 7:
              return (Ri(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (Ri(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return (
                (r = t.pendingProps), Co(0, t.type, r.value), Ri(e, t, r.children, n), t.child
              );
            case 9:
              return (
                (o = t.type._context),
                (r = t.pendingProps.children),
                To(t),
                (r = r((o = Mo(o)))),
                (t.flags |= 1),
                Ri(e, t, r, n),
                t.child
              );
            case 14:
              return Li(e, t, t.type, t.pendingProps, n);
            case 15:
              return Di(e, t, t.type, t.pendingProps, n);
            case 19:
              return ns(e, t, n);
            case 31:
              return (function (e, t, n) {
                var r = t.pendingProps,
                  o = !!(128 & t.flags);
                if (((t.flags &= -129), null === e)) {
                  if (uo) {
                    if ("hidden" === r.mode)
                      return ((e = Hi(t, r)), (t.lanes = 536870912), Fi(null, e));
                    if (
                      (La(t),
                      (e = co)
                        ? null !== (e = null !== (e = Pd(e, po)) && "&" === e.data ? e : null) &&
                          ((t.memoizedState = {
                            dehydrated: e,
                            treeContext: null !== eo ? { id: to, overflow: no } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((n = Wr(e)).return = t),
                          (t.child = n),
                          (so = t),
                          (co = null))
                        : (e = null),
                      null === e)
                    )
                      throw ho(t);
                    return ((t.lanes = 536870912), null);
                  }
                  return Hi(t, r);
                }
                var a = e.memoizedState;
                if (null !== a) {
                  var i = a.dehydrated;
                  if ((La(t), o))
                    if (256 & t.flags) ((t.flags &= -257), (t = $i(e, t, n)));
                    else {
                      if (null === t.memoizedState) throw Error(l(558));
                      ((t.child = e.child), (t.flags |= 128), (t = null));
                    }
                  else if ((Mi || Po(e, t, n, !1), (o = 0 !== (n & e.childLanes)), Mi || o)) {
                    if (null !== (r = pc) && 0 !== (i = Oe(r, n)) && i !== a.retryLane)
                      throw ((a.retryLane = i), Mr(e, i), Kc(r, 0, i), Ti);
                    (au(), (t = $i(e, t, n)));
                  } else
                    ((e = a.treeContext),
                      (co = Md(i.nextSibling)),
                      (so = t),
                      (uo = !0),
                      (fo = null),
                      (po = !1),
                      null !== e && io(t, e),
                      ((t = Hi(t, r)).flags |= 4096));
                  return t;
                }
                return (
                  ((e = Ir(e.child, { mode: r.mode, children: r.children })).ref = t.ref),
                  (t.child = e),
                  (e.return = t),
                  e
                );
              })(e, t, n);
            case 22:
              return Ai(e, t, n, t.pendingProps);
            case 24:
              return (
                To(t),
                (r = Mo(Fo)),
                null === e
                  ? (null === (o = Qo()) &&
                      ((o = pc),
                      (a = Io()),
                      (o.pooledCache = a),
                      a.refCount++,
                      null !== a && (o.pooledCacheLanes |= n),
                      (o = a)),
                    (t.memoizedState = { parent: r, cache: o }),
                    ga(t),
                    Co(0, Fo, o))
                  : (0 !== (e.lanes & n) && (va(e, t), Ea(t, null, null, n), Sa()),
                    (o = e.memoizedState),
                    (a = t.memoizedState),
                    o.parent !== r
                      ? ((o = { parent: r, cache: r }),
                        (t.memoizedState = o),
                        0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = o),
                        Co(0, Fo, r))
                      : ((r = a.cache), Co(0, Fo, r), r !== o.cache && _o(t, [Fo], n, !0))),
                Ri(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(l(156, t.tag));
        }
        function ls(e) {
          e.flags |= 4;
        }
        function is(e, t, n, r, o) {
          if (((t = !!(32 & e.mode)) && (t = !1), t)) {
            if (((e.flags |= 16777216), (335544128 & o) === o))
              if (e.stateNode.complete) e.flags |= 8192;
              else {
                if (!nu()) throw ((oa = ea), Zo);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function ss(e, t) {
          if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
          else if (((e.flags |= 16777216), !rf(t))) {
            if (!nu()) throw ((oa = ea), Zo);
            e.flags |= 8192;
          }
        }
        function cs(e, t) {
          (null !== t && (e.flags |= 4),
            16384 & e.flags && ((t = 22 !== e.tag ? Pe() : 536870912), (e.lanes |= t), (jc |= t)));
        }
        function us(e, t) {
          if (!uo)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) (null !== n.alternate && (r = n), (n = n.sibling));
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ds(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              ((n |= o.lanes | o.childLanes),
                (r |= 65011712 & o.subtreeFlags),
                (r |= 65011712 & o.flags),
                (o.return = e),
                (o = o.sibling));
          else
            for (o = e.child; null !== o; )
              ((n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function fs(e, t, n) {
          var r = t.pendingProps;
          switch ((lo(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (ds(t), null);
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                No(Fo),
                Q(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (yo(t)
                    ? ls(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                      ((t.flags |= 1024), xo())),
                ds(t),
                null
              );
            case 26:
              var o = t.type,
                a = t.memoizedState;
              return (
                null === e
                  ? (ls(t), null !== a ? (ds(t), ss(t, a)) : (ds(t), is(t, o, 0, 0, n)))
                  : a
                    ? a !== e.memoizedState
                      ? (ls(t), ds(t), ss(t, a))
                      : (ds(t), (t.flags &= -16777217))
                    : ((e = e.memoizedProps) !== r && ls(t), ds(t), is(t, o, 0, 0, n)),
                null
              );
            case 27:
              if ((Y(t), (n = V.current), (o = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (ds(t), null);
                }
                ((e = U.current), yo(t) ? go(t) : ((e = Dd(o, r, n)), (t.stateNode = e), ls(t)));
              }
              return (ds(t), null);
            case 5:
              if ((Y(t), (o = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (ds(t), null);
                }
                if (((a = U.current), yo(t))) go(t);
                else {
                  var i = hd(V.current);
                  switch (a) {
                    case 1:
                      a = i.createElementNS("http://www.w3.org/2000/svg", o);
                      break;
                    case 2:
                      a = i.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                      break;
                    default:
                      switch (o) {
                        case "svg":
                          a = i.createElementNS("http://www.w3.org/2000/svg", o);
                          break;
                        case "math":
                          a = i.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                          break;
                        case "script":
                          (((a = i.createElement("div")).innerHTML = "<script><\/script>"),
                            (a = a.removeChild(a.firstChild)));
                          break;
                        case "select":
                          ((a =
                            "string" == typeof r.is
                              ? i.createElement("select", { is: r.is })
                              : i.createElement("select")),
                            r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size));
                          break;
                        default:
                          a =
                            "string" == typeof r.is
                              ? i.createElement(o, { is: r.is })
                              : i.createElement(o);
                      }
                  }
                  ((a[He] = t), (a[$e] = r));
                  e: for (i = t.child; null !== i; ) {
                    if (5 === i.tag || 6 === i.tag) a.appendChild(i.stateNode);
                    else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                      ((i.child.return = i), (i = i.child));
                      continue;
                    }
                    if (i === t) break e;
                    for (; null === i.sibling; ) {
                      if (null === i.return || i.return === t) break e;
                      i = i.return;
                    }
                    ((i.sibling.return = i.return), (i = i.sibling));
                  }
                  t.stateNode = a;
                  e: switch ((dd(a, o, r), o)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                  r && ls(t);
                }
              }
              return (ds(t), is(t, t.type, null === e || e.memoizedProps, t.pendingProps, n), null);
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && ls(t);
              else {
                if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                if (((e = V.current), yo(t))) {
                  if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (o = so)))
                    switch (o.tag) {
                      case 27:
                      case 5:
                        r = o.memoizedProps;
                    }
                  ((e[He] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      sd(e.nodeValue, n)
                    )) || ho(t, !0));
                } else (((e = hd(e).createTextNode(r))[He] = t), (t.stateNode = e));
              }
              return (ds(t), null);
            case 31:
              if (((n = t.memoizedState), null === e || null !== e.memoizedState)) {
                if (((r = yo(t)), null !== n)) {
                  if (null === e) {
                    if (!r) throw Error(l(318));
                    if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null))
                      throw Error(l(557));
                    e[He] = t;
                  } else (bo(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (ds(t), (e = !1));
                } else
                  ((n = xo()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n),
                    (e = !0));
                if (!e) return 256 & t.flags ? (Fa(t), t) : (Fa(t), null);
                if (128 & t.flags) throw Error(l(558));
              }
              return (ds(t), null);
            case 13:
              if (
                ((r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (((o = yo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                      throw Error(l(317));
                    o[He] = t;
                  } else (bo(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (ds(t), (o = !1));
                } else
                  ((o = xo()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = o),
                    (o = !0));
                if (!o) return 256 & t.flags ? (Fa(t), t) : (Fa(t), null);
              }
              return (
                Fa(t),
                128 & t.flags
                  ? ((t.lanes = n), t)
                  : ((n = null !== r),
                    (e = null !== e && null !== e.memoizedState),
                    n &&
                      ((o = null),
                      null !== (r = t.child).alternate &&
                        null !== r.alternate.memoizedState &&
                        null !== r.alternate.memoizedState.cachePool &&
                        (o = r.alternate.memoizedState.cachePool.pool),
                      (a = null),
                      null !== r.memoizedState &&
                        null !== r.memoizedState.cachePool &&
                        (a = r.memoizedState.cachePool.pool),
                      a !== o && (r.flags |= 2048)),
                    n !== e && n && (t.child.flags |= 8192),
                    cs(t, t.updateQueue),
                    ds(t),
                    null)
              );
            case 4:
              return (Q(), null === e && Zu(t.stateNode.containerInfo), ds(t), null);
            case 10:
              return (No(t.type), ds(t), null);
            case 19:
              if ((I(Ia), null === (r = t.memoizedState))) return (ds(t), null);
              if (((o = !!(128 & t.flags)), null === (a = r.rendering)))
                if (o) us(r, !1);
                else {
                  if (0 !== kc || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = Ha(e))) {
                        for (
                          t.flags |= 128,
                            us(r, !1),
                            e = a.updateQueue,
                            t.updateQueue = e,
                            cs(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;
                        )
                          (Hr(n, e), (n = n.sibling));
                        return (H(Ia, (1 & Ia.current) | 2), uo && ro(t, r.treeForkCount), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    ie() > Rc &&
                    ((t.flags |= 128), (o = !0), us(r, !1), (t.lanes = 4194304));
                }
              else {
                if (!o)
                  if (null !== (e = Ha(a))) {
                    if (
                      ((t.flags |= 128),
                      (o = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      cs(t, e),
                      us(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !a.alternate && !uo)
                    )
                      return (ds(t), null);
                  } else
                    2 * ie() - r.renderingStartTime > Rc &&
                      536870912 !== n &&
                      ((t.flags |= 128), (o = !0), us(r, !1), (t.lanes = 4194304));
                r.isBackwards
                  ? ((a.sibling = t.child), (t.child = a))
                  : (null !== (e = r.last) ? (e.sibling = a) : (t.child = a), (r.last = a));
              }
              return null !== r.tail
                ? ((e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.renderingStartTime = ie()),
                  (e.sibling = null),
                  (n = Ia.current),
                  H(Ia, o ? (1 & n) | 2 : 1 & n),
                  uo && ro(t, r.treeForkCount),
                  e)
                : (ds(t), null);
            case 22:
            case 23:
              return (
                Fa(t),
                Ta(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? !!(536870912 & n) &&
                    !(128 & t.flags) &&
                    (ds(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ds(t),
                null !== (n = t.updateQueue) && cs(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && I(Ko),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                No(Fo),
                ds(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function ps(e, t) {
          switch ((lo(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 3:
              return (
                No(Fo),
                Q(),
                65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 26:
            case 27:
            case 5:
              return (Y(t), null);
            case 31:
              if (null !== t.memoizedState) {
                if ((Fa(t), null === t.alternate)) throw Error(l(340));
                bo();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 13:
              if ((Fa(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(l(340));
                bo();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return (I(Ia), null);
            case 4:
              return (Q(), null);
            case 10:
              return (No(t.type), null);
            case 22:
            case 23:
              return (
                Fa(t),
                Ta(),
                null !== e && I(Ko),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 24:
              return (No(Fo), null);
            default:
              return null;
          }
        }
        function ms(e, t) {
          switch ((lo(t), t.tag)) {
            case 3:
              (No(Fo), Q());
              break;
            case 26:
            case 27:
            case 5:
              Y(t);
              break;
            case 4:
              Q();
              break;
            case 31:
              null !== t.memoizedState && Fa(t);
              break;
            case 13:
              Fa(t);
              break;
            case 19:
              I(Ia);
              break;
            case 10:
              No(t.type);
              break;
            case 22:
            case 23:
              (Fa(t), Ta(), null !== e && I(Ko));
              break;
            case 24:
              No(Fo);
          }
        }
        function hs(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var o = r.next;
              n = o;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var a = n.create,
                    l = n.inst;
                  ((r = a()), (l.destroy = r));
                }
                n = n.next;
              } while (n !== o);
            }
          } catch (e) {
            ku(t, t.return, e);
          }
        }
        function gs(e, t, n) {
          try {
            var r = t.updateQueue,
              o = null !== r ? r.lastEffect : null;
            if (null !== o) {
              var a = o.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var l = r.inst,
                    i = l.destroy;
                  if (void 0 !== i) {
                    ((l.destroy = void 0), (o = t));
                    var s = n,
                      c = i;
                    try {
                      c();
                    } catch (e) {
                      ku(o, s, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (e) {
            ku(t, t.return, e);
          }
        }
        function vs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Na(t, n);
            } catch (t) {
              ku(e, e.return, t);
            }
          }
        }
        function ys(e, t, n) {
          ((n.props = ki(e.type, e.memoizedProps)), (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (n) {
            ku(e, t, n);
          }
        }
        function bs(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (n) {
            ku(e, t, n);
          }
        }
        function xs(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" == typeof r)
              try {
                r();
              } catch (n) {
                ku(e, t, n);
              } finally {
                ((e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                ku(e, t, n);
              }
            else n.current = null;
        }
        function ws(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (t) {
            ku(e, e.return, t);
          }
        }
        function ks(e, t, n) {
          try {
            var r = e.stateNode;
            (!(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var o = null,
                    a = null,
                    i = null,
                    s = null,
                    c = null,
                    u = null,
                    d = null;
                  for (m in n) {
                    var f = n[m];
                    if (n.hasOwnProperty(m) && null != f)
                      switch (m) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          c = f;
                        default:
                          r.hasOwnProperty(m) || cd(e, t, m, null, r, f);
                      }
                  }
                  for (var p in r) {
                    var m = r[p];
                    if (((f = n[p]), r.hasOwnProperty(p) && (null != m || null != f)))
                      switch (p) {
                        case "type":
                          a = m;
                          break;
                        case "name":
                          o = m;
                          break;
                        case "checked":
                          u = m;
                          break;
                        case "defaultChecked":
                          d = m;
                          break;
                        case "value":
                          i = m;
                          break;
                        case "defaultValue":
                          s = m;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != m) throw Error(l(137, t));
                          break;
                        default:
                          m !== f && cd(e, t, p, m, r, f);
                      }
                  }
                  return void vt(e, i, s, c, u, d, a, o);
                case "select":
                  for (a in ((m = i = s = p = null), n))
                    if (((c = n[a]), n.hasOwnProperty(a) && null != c))
                      switch (a) {
                        case "value":
                          break;
                        case "multiple":
                          m = c;
                        default:
                          r.hasOwnProperty(a) || cd(e, t, a, null, r, c);
                      }
                  for (o in r)
                    if (((a = r[o]), (c = n[o]), r.hasOwnProperty(o) && (null != a || null != c)))
                      switch (o) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          s = a;
                          break;
                        case "multiple":
                          i = a;
                        default:
                          a !== c && cd(e, t, o, a, r, c);
                      }
                  return (
                    (t = s),
                    (n = i),
                    (r = m),
                    void (null != p
                      ? xt(e, !!n, p, !1)
                      : !!r != !!n && (null != t ? xt(e, !!n, t, !0) : xt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (s in ((m = p = null), n))
                    if (((o = n[s]), n.hasOwnProperty(s) && null != o && !r.hasOwnProperty(s)))
                      switch (s) {
                        case "value":
                        case "children":
                          break;
                        default:
                          cd(e, t, s, null, r, o);
                      }
                  for (i in r)
                    if (((o = r[i]), (a = n[i]), r.hasOwnProperty(i) && (null != o || null != a)))
                      switch (i) {
                        case "value":
                          p = o;
                          break;
                        case "defaultValue":
                          m = o;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != o) throw Error(l(91));
                          break;
                        default:
                          o !== a && cd(e, t, i, o, r, a);
                      }
                  return void wt(e, p, m);
                case "option":
                  for (var h in n)
                    ((p = n[h]),
                      n.hasOwnProperty(h) &&
                        null != p &&
                        !r.hasOwnProperty(h) &&
                        ("selected" === h ? (e.selected = !1) : cd(e, t, h, null, r, p)));
                  for (c in r)
                    ((p = r[c]),
                      (m = n[c]),
                      !r.hasOwnProperty(c) ||
                        p === m ||
                        (null == p && null == m) ||
                        ("selected" === c
                          ? (e.selected = p && "function" != typeof p && "symbol" != typeof p)
                          : cd(e, t, c, p, r, m)));
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    ((p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        cd(e, t, g, null, r, p));
                  for (u in r)
                    if (
                      ((p = r[u]),
                      (m = n[u]),
                      r.hasOwnProperty(u) && p !== m && (null != p || null != m))
                    )
                      switch (u) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(l(137, t));
                          break;
                        default:
                          cd(e, t, u, p, r, m);
                      }
                  return;
                default:
                  if (jt(t)) {
                    for (var v in n)
                      ((p = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(v) &&
                          ud(e, t, v, void 0, r, p));
                    for (d in r)
                      ((p = r[d]),
                        (m = n[d]),
                        !r.hasOwnProperty(d) ||
                          p === m ||
                          (void 0 === p && void 0 === m) ||
                          ud(e, t, d, p, r, m));
                    return;
                  }
              }
              for (var y in n)
                ((p = n[y]),
                  n.hasOwnProperty(y) &&
                    null != p &&
                    !r.hasOwnProperty(y) &&
                    cd(e, t, y, null, r, p));
              for (f in r)
                ((p = r[f]),
                  (m = n[f]),
                  !r.hasOwnProperty(f) ||
                    p === m ||
                    (null == p && null == m) ||
                    cd(e, t, f, p, r, m));
            })(r, e.type, n, t),
              (r[$e] = t));
          } catch (t) {
            ku(e, e.return, t);
          }
        }
        function Ss(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && Cd(e.type)) ||
            4 === e.tag
          );
        }
        function Es(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Ss(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
            ) {
              if (27 === e.tag && Cd(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? (9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n
                  ).insertBefore(e, t)
                : ((t =
                    9 === n.nodeType
                      ? n.body
                      : "HTML" === n.nodeName
                        ? n.ownerDocument.body
                        : n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Tt)));
          else if (
            4 !== r &&
            (27 === r && Cd(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child))
          )
            for (Cs(e, t, n), e = e.sibling; null !== e; ) (Cs(e, t, n), (e = e.sibling));
        }
        function Ns(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (4 !== r && (27 === r && Cd(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (Ns(e, t, n), e = e.sibling; null !== e; ) (Ns(e, t, n), (e = e.sibling));
        }
        function js(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
            (dd(t, r, n), (t[He] = e), (t[$e] = n));
          } catch (t) {
            ku(e, e.return, t);
          }
        }
        var _s = !1,
          Ps = !1,
          zs = !1,
          Ts = "function" == typeof WeakSet ? WeakSet : Set,
          Ms = null;
        function Rs(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (Ks(e, n), 4 & r && hs(5, n));
              break;
            case 1:
              if ((Ks(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (e) {
                    ku(n, n.return, e);
                  }
                else {
                  var o = ki(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (e) {
                    ku(n, n.return, e);
                  }
                }
              (64 & r && vs(n), 512 & r && bs(n, n.return));
              break;
            case 3:
              if ((Ks(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  Na(e, t);
                } catch (e) {
                  ku(n, n.return, e);
                }
              }
              break;
            case 27:
              null === t && 4 & r && js(n);
            case 26:
            case 5:
              (Ks(e, n), null === t && 4 & r && ws(n), 512 & r && bs(n, n.return));
              break;
            case 12:
              Ks(e, n);
              break;
            case 31:
              (Ks(e, n), 4 & r && Is(e, n));
              break;
            case 13:
              (Ks(e, n),
                4 & r && Hs(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ("$~" === e.data) e._reactRetry = t;
                    else if ("$?" !== e.data || "loading" !== n.readyState) t();
                    else {
                      var r = function () {
                        (t(), n.removeEventListener("DOMContentLoaded", r));
                      };
                      (n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r));
                    }
                  })(e, (n = Nu.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || _s)) {
                ((t = (null !== t && null !== t.memoizedState) || Ps), (o = _s));
                var a = Ps;
                ((_s = r),
                  (Ps = t) && !a ? Gs(e, n, !!(8772 & n.subtreeFlags)) : Ks(e, n),
                  (_s = o),
                  (Ps = a));
              }
              break;
            case 30:
              break;
            default:
              Ks(e, n);
          }
        }
        function Os(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), Os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Qe(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var Ls = null,
          Ds = !1;
        function As(e, t, n) {
          for (n = n.child; null !== n; ) (Fs(e, t, n), (n = n.sibling));
        }
        function Fs(e, t, n) {
          if (ve && "function" == typeof ve.onCommitFiberUnmount)
            try {
              ve.onCommitFiberUnmount(ge, n);
            } catch (e) {}
          switch (n.tag) {
            case 26:
              (Ps || xs(n, t),
                As(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              Ps || xs(n, t);
              var r = Ls,
                o = Ds;
              (Cd(n.type) && ((Ls = n.stateNode), (Ds = !1)),
                As(e, t, n),
                Ad(n.stateNode),
                (Ls = r),
                (Ds = o));
              break;
            case 5:
              Ps || xs(n, t);
            case 6:
              if (((r = Ls), (o = Ds), (Ls = null), As(e, t, n), (Ds = o), null !== (Ls = r)))
                if (Ds)
                  try {
                    (9 === Ls.nodeType
                      ? Ls.body
                      : "HTML" === Ls.nodeName
                        ? Ls.ownerDocument.body
                        : Ls
                    ).removeChild(n.stateNode);
                  } catch (e) {
                    ku(n, t, e);
                  }
                else
                  try {
                    Ls.removeChild(n.stateNode);
                  } catch (e) {
                    ku(n, t, e);
                  }
              break;
            case 18:
              null !== Ls &&
                (Ds
                  ? (Nd(
                      9 === (e = Ls).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      n.stateNode,
                    ),
                    Bf(e))
                  : Nd(Ls, n.stateNode));
              break;
            case 4:
              ((r = Ls),
                (o = Ds),
                (Ls = n.stateNode.containerInfo),
                (Ds = !0),
                As(e, t, n),
                (Ls = r),
                (Ds = o));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (gs(2, n, t), Ps || gs(4, n, t), As(e, t, n));
              break;
            case 1:
              (Ps ||
                (xs(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount && ys(n, t, r)),
                As(e, t, n));
              break;
            case 21:
              As(e, t, n);
              break;
            case 22:
              ((Ps = (r = Ps) || null !== n.memoizedState), As(e, t, n), (Ps = r));
              break;
            default:
              As(e, t, n);
          }
        }
        function Is(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState)
          ) {
            e = e.dehydrated;
            try {
              Bf(e);
            } catch (e) {
              ku(t, t.return, e);
            }
          }
        }
        function Hs(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              Bf(e);
            } catch (e) {
              ku(t, t.return, e);
            }
        }
        function $s(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 31:
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new Ts()), t);
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Ts()), t
                );
              default:
                throw Error(l(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            if (!n.has(t)) {
              n.add(t);
              var r = ju.bind(null, e, t);
              t.then(r, r);
            }
          });
        }
        function Bs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r],
                a = e,
                i = t,
                s = i;
              e: for (; null !== s; ) {
                switch (s.tag) {
                  case 27:
                    if (Cd(s.type)) {
                      ((Ls = s.stateNode), (Ds = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Ls = s.stateNode), (Ds = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Ls = s.stateNode.containerInfo), (Ds = !0));
                    break e;
                }
                s = s.return;
              }
              if (null === Ls) throw Error(l(160));
              (Fs(a, i, o),
                (Ls = null),
                (Ds = !1),
                null !== (a = o.alternate) && (a.return = null),
                (o.return = null));
            }
          if (13886 & t.subtreeFlags) for (t = t.child; null !== t; ) (Ws(t, e), (t = t.sibling));
        }
        var Us = null;
        function Ws(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (Bs(t, e), Vs(e), 4 & r && (gs(3, e, e.return), hs(3, e), gs(5, e, e.return)));
              break;
            case 1:
              (Bs(t, e),
                Vs(e),
                512 & r && (Ps || null === n || xs(n, n.return)),
                64 & r &&
                  _s &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var o = Us;
              if ((Bs(t, e), Vs(e), 512 & r && (Ps || null === n || xs(n, n.return)), 4 & r)) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type), (n = e.memoizedProps), (o = o.ownerDocument || o));
                        t: switch (r) {
                          case "title":
                            ((!(a = o.getElementsByTagName("title")[0]) ||
                              a[Ke] ||
                              a[He] ||
                              "http://www.w3.org/2000/svg" === a.namespaceURI ||
                              a.hasAttribute("itemprop")) &&
                              ((a = o.createElement(r)),
                              o.head.insertBefore(a, o.querySelector("head > title"))),
                              dd(a, r, n),
                              (a[He] = e),
                              Je(a),
                              (r = a));
                            break e;
                          case "link":
                            var i = tf("link", "href", o).get(r + (n.href || ""));
                            if (i)
                              for (var s = 0; s < i.length; s++)
                                if (
                                  (a = i[s]).getAttribute("href") ===
                                    (null == n.href || "" === n.href ? null : n.href) &&
                                  a.getAttribute("rel") === (null == n.rel ? null : n.rel) &&
                                  a.getAttribute("title") === (null == n.title ? null : n.title) &&
                                  a.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin ? null : n.crossOrigin)
                                ) {
                                  i.splice(s, 1);
                                  break t;
                                }
                            (dd((a = o.createElement(r)), r, n), o.head.appendChild(a));
                            break;
                          case "meta":
                            if ((i = tf("meta", "content", o).get(r + (n.content || ""))))
                              for (s = 0; s < i.length; s++)
                                if (
                                  (a = i[s]).getAttribute("content") ===
                                    (null == n.content ? null : "" + n.content) &&
                                  a.getAttribute("name") === (null == n.name ? null : n.name) &&
                                  a.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  a.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv ? null : n.httpEquiv) &&
                                  a.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  i.splice(s, 1);
                                  break t;
                                }
                            (dd((a = o.createElement(r)), r, n), o.head.appendChild(a));
                            break;
                          default:
                            throw Error(l(468, r));
                        }
                        ((a[He] = e), Je(a), (r = a));
                      }
                      e.stateNode = r;
                    } else nf(o, e.type, e.stateNode);
                  else e.stateNode = Yd(o, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a
                        ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n)
                        : a.count--,
                      null === r ? nf(o, e.type, e.stateNode) : Yd(o, r, e.memoizedProps))
                    : null === r && null !== e.stateNode && ks(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (Bs(t, e),
                Vs(e),
                512 & r && (Ps || null === n || xs(n, n.return)),
                null !== n && 4 & r && ks(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if (
                (Bs(t, e), Vs(e), 512 & r && (Ps || null === n || xs(n, n.return)), 32 & e.flags)
              ) {
                o = e.stateNode;
                try {
                  St(o, "");
                } catch (t) {
                  ku(e, e.return, t);
                }
              }
              (4 & r &&
                null != e.stateNode &&
                ks(e, (o = e.memoizedProps), null !== n ? n.memoizedProps : o),
                1024 & r && (zs = !0));
              break;
            case 6:
              if ((Bs(t, e), Vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                ((r = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = r;
                } catch (t) {
                  ku(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                ((ef = null),
                (o = Us),
                (Us = Hd(t.containerInfo)),
                Bs(t, e),
                (Us = o),
                Vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bf(t.containerInfo);
                } catch (t) {
                  ku(e, e.return, t);
                }
              zs && ((zs = !1), qs(e));
              break;
            case 4:
              ((r = Us), (Us = Hd(e.stateNode.containerInfo)), Bs(t, e), Vs(e), (Us = r));
              break;
            case 12:
            default:
              (Bs(t, e), Vs(e));
              break;
            case 31:
            case 19:
              (Bs(t, e),
                Vs(e),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), $s(e, r)));
              break;
            case 13:
              (Bs(t, e),
                Vs(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                  (Tc = ie()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), $s(e, r)));
              break;
            case 22:
              o = null !== e.memoizedState;
              var c = null !== n && null !== n.memoizedState,
                u = _s,
                d = Ps;
              if (((_s = u || o), (Ps = d || c), Bs(t, e), (Ps = d), (_s = u), Vs(e), 8192 & r))
                e: for (
                  t = e.stateNode,
                    t._visibility = o ? -2 & t._visibility : 1 | t._visibility,
                    o && (null === n || c || _s || Ps || Qs(e)),
                    n = null,
                    t = e;
                  ;
                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((a = c.stateNode), o))
                          "function" == typeof (i = a.style).setProperty
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none");
                        else {
                          s = c.stateNode;
                          var f = c.memoizedProps.style,
                            p = null != f && f.hasOwnProperty("display") ? f.display : null;
                          s.style.display =
                            null == p || "boolean" == typeof p ? "" : ("" + p).trim();
                        }
                      } catch (e) {
                        ku(c, c.return, e);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = o ? "" : c.memoizedProps;
                      } catch (e) {
                        ku(c, c.return, e);
                      }
                    }
                  } else if (18 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        var m = c.stateNode;
                        o ? jd(m, !0) : jd(c.stateNode, !1);
                      } catch (e) {
                        ku(c, c.return, e);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) &&
                    null !== t.child
                  ) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    (n === t && (n = null), (t = t.return));
                  }
                  (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), $s(e, n));
            case 30:
            case 21:
          }
        }
        function Vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (Ss(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(l(160));
              switch (n.tag) {
                case 27:
                  var o = n.stateNode;
                  Ns(e, Es(e), o);
                  break;
                case 5:
                  var a = n.stateNode;
                  (32 & n.flags && (St(a, ""), (n.flags &= -33)), Ns(e, Es(e), a));
                  break;
                case 3:
                case 4:
                  var i = n.stateNode.containerInfo;
                  Cs(e, Es(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (t) {
              ku(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function qs(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              (qs(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling));
            }
        }
        function Ks(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (Rs(e, t.alternate, t), (t = t.sibling));
        }
        function Qs(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (gs(4, t, t.return), Qs(t));
                break;
              case 1:
                xs(t, t.return);
                var n = t.stateNode;
                ("function" == typeof n.componentWillUnmount && ys(t, t.return, n), Qs(t));
                break;
              case 27:
                Ad(t.stateNode);
              case 26:
              case 5:
                (xs(t, t.return), Qs(t));
                break;
              case 22:
                null === t.memoizedState && Qs(t);
                break;
              default:
                Qs(t);
            }
            e = e.sibling;
          }
        }
        function Gs(e, t, n) {
          for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
              o = e,
              a = t,
              l = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                (Gs(o, a, n), hs(4, a));
                break;
              case 1:
                if ((Gs(o, a, n), "function" == typeof (o = (r = a).stateNode).componentDidMount))
                  try {
                    o.componentDidMount();
                  } catch (e) {
                    ku(r, r.return, e);
                  }
                if (null !== (o = (r = a).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var s = o.shared.hiddenCallbacks;
                    if (null !== s)
                      for (o.shared.hiddenCallbacks = null, o = 0; o < s.length; o++) Ca(s[o], i);
                  } catch (e) {
                    ku(r, r.return, e);
                  }
                }
                (n && 64 & l && vs(a), bs(a, a.return));
                break;
              case 27:
                js(a);
              case 26:
              case 5:
                (Gs(o, a, n), n && null === r && 4 & l && ws(a), bs(a, a.return));
                break;
              case 12:
                Gs(o, a, n);
                break;
              case 31:
                (Gs(o, a, n), n && 4 & l && Is(o, a));
                break;
              case 13:
                (Gs(o, a, n), n && 4 & l && Hs(o, a));
                break;
              case 22:
                (null === a.memoizedState && Gs(o, a, n), bs(a, a.return));
                break;
              case 30:
                break;
              default:
                Gs(o, a, n);
            }
            t = t.sibling;
          }
        }
        function Ys(e, t) {
          var n = null;
          (null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ho(n)));
        }
        function Xs(e, t) {
          ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ho(e)));
        }
        function Zs(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (Js(e, t, n, r), (t = t.sibling));
        }
        function Js(e, t, n, r) {
          var o = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (Zs(e, t, n, r), 2048 & o && hs(9, t));
              break;
            case 1:
            case 31:
            case 13:
            default:
              Zs(e, t, n, r);
              break;
            case 3:
              (Zs(e, t, n, r),
                2048 & o &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ho(e))));
              break;
            case 12:
              if (2048 & o) {
                (Zs(e, t, n, r), (e = t.stateNode));
                try {
                  var a = t.memoizedProps,
                    l = a.id,
                    i = a.onPostCommit;
                  "function" == typeof i &&
                    i(l, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                } catch (e) {
                  ku(t, t.return, e);
                }
              } else Zs(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              ((a = t.stateNode),
                (l = t.alternate),
                null !== t.memoizedState
                  ? 2 & a._visibility
                    ? Zs(e, t, n, r)
                    : tc(e, t)
                  : 2 & a._visibility
                    ? Zs(e, t, n, r)
                    : ((a._visibility |= 2), ec(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
                2048 & o && Ys(l, t));
              break;
            case 24:
              (Zs(e, t, n, r), 2048 & o && Xs(t.alternate, t));
          }
        }
        function ec(e, t, n, r, o) {
          for (o = o && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t; ) {
            var a = e,
              l = t,
              i = n,
              s = r,
              c = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                (ec(a, l, i, s, o), hs(8, l));
                break;
              case 23:
                break;
              case 22:
                var u = l.stateNode;
                (null !== l.memoizedState
                  ? 2 & u._visibility
                    ? ec(a, l, i, s, o)
                    : tc(a, l)
                  : ((u._visibility |= 2), ec(a, l, i, s, o)),
                  o && 2048 & c && Ys(l.alternate, l));
                break;
              case 24:
                (ec(a, l, i, s, o), o && 2048 & c && Xs(l.alternate, l));
                break;
              default:
                ec(a, l, i, s, o);
            }
            t = t.sibling;
          }
        }
        function tc(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                o = r.flags;
              switch (r.tag) {
                case 22:
                  (tc(n, r), 2048 & o && Ys(r.alternate, r));
                  break;
                case 24:
                  (tc(n, r), 2048 & o && Xs(r.alternate, r));
                  break;
                default:
                  tc(n, r);
              }
              t = t.sibling;
            }
        }
        var nc = 8192;
        function rc(e, t, n) {
          if (e.subtreeFlags & nc) for (e = e.child; null !== e; ) (oc(e, t, n), (e = e.sibling));
        }
        function oc(e, t, n) {
          switch (e.tag) {
            case 26:
              (rc(e, t, n),
                e.flags & nc &&
                  null !== e.memoizedState &&
                  (function (e, t, n, r) {
                    if (
                      !(
                        "stylesheet" !== n.type ||
                        ("string" == typeof r.media && !1 === matchMedia(r.media).matches) ||
                        4 & n.state.loading
                      )
                    ) {
                      if (null === n.instance) {
                        var o = Vd(r.href),
                          a = t.querySelector(qd(o));
                        if (a)
                          return (
                            null !== (t = a._p) &&
                              "object" == typeof t &&
                              "function" == typeof t.then &&
                              (e.count++, (e = af.bind(e)), t.then(e, e)),
                            (n.state.loading |= 4),
                            (n.instance = a),
                            void Je(a)
                          );
                        ((a = t.ownerDocument || t),
                          (r = Kd(r)),
                          (o = Fd.get(o)) && Zd(r, o),
                          Je((a = a.createElement("link"))));
                        var l = a;
                        ((l._p = new Promise(function (e, t) {
                          ((l.onload = e), (l.onerror = t));
                        })),
                          dd(a, "link", r),
                          (n.instance = a));
                      }
                      (null === e.stylesheets && (e.stylesheets = new Map()),
                        e.stylesheets.set(n, t),
                        (t = n.state.preload) &&
                          !(3 & n.state.loading) &&
                          (e.count++,
                          (n = af.bind(e)),
                          t.addEventListener("load", n),
                          t.addEventListener("error", n)));
                    }
                  })(n, Us, e.memoizedState, e.memoizedProps));
              break;
            case 5:
            default:
              rc(e, t, n);
              break;
            case 3:
            case 4:
              var r = Us;
              ((Us = Hd(e.stateNode.containerInfo)), rc(e, t, n), (Us = r));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = nc), (nc = 16777216), rc(e, t, n), (nc = r))
                  : rc(e, t, n));
          }
        }
        function ac(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
          }
        }
        function lc(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Ms = r), cc(r, e));
              }
            ac(e);
          }
          if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) (ic(e), (e = e.sibling));
        }
        function ic(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (lc(e), 2048 & e.flags && gs(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              lc(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), sc(e))
                : lc(e);
          }
        }
        function sc(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Ms = r), cc(r, e));
              }
            ac(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                (gs(8, t, t.return), sc(t));
                break;
              case 22:
                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), sc(t));
                break;
              default:
                sc(t);
            }
            e = e.sibling;
          }
        }
        function cc(e, t) {
          for (; null !== Ms; ) {
            var n = Ms;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                gs(8, n, t);
                break;
              case 23:
              case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ho(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Ms = r));
            else
              e: for (n = e; null !== Ms; ) {
                var o = (r = Ms).sibling,
                  a = r.return;
                if ((Os(r), r === n)) {
                  Ms = null;
                  break e;
                }
                if (null !== o) {
                  ((o.return = a), (Ms = o));
                  break e;
                }
                Ms = a;
              }
          }
        }
        var uc = {
            getCacheForType: function (e) {
              var t = Mo(Fo),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
              return Mo(Fo).controller.signal;
            },
          },
          dc = "function" == typeof WeakMap ? WeakMap : Map,
          fc = 0,
          pc = null,
          mc = null,
          hc = 0,
          gc = 0,
          vc = null,
          yc = !1,
          bc = !1,
          xc = !1,
          wc = 0,
          kc = 0,
          Sc = 0,
          Ec = 0,
          Cc = 0,
          Nc = 0,
          jc = 0,
          _c = null,
          Pc = null,
          zc = !1,
          Tc = 0,
          Mc = 0,
          Rc = 1 / 0,
          Oc = null,
          Lc = null,
          Dc = 0,
          Ac = null,
          Fc = null,
          Ic = 0,
          Hc = 0,
          $c = null,
          Bc = null,
          Uc = 0,
          Wc = null;
        function Vc() {
          return 2 & fc && 0 !== hc ? hc & -hc : null !== R.T ? $u() : Ae();
        }
        function qc() {
          if (0 === Nc)
            if (536870912 & hc && !uo) Nc = 536870912;
            else {
              var e = Se;
              (!(3932160 & (Se <<= 1)) && (Se = 262144), (Nc = e));
            }
          return (null !== (e = Ma.current) && (e.flags |= 32), Nc);
        }
        function Kc(e, t, n) {
          (((e !== pc || (2 !== gc && 9 !== gc)) && null === e.cancelPendingCommit) ||
            (eu(e, 0), Xc(e, hc, Nc, !1)),
            Te(e, n),
            (2 & fc && e === pc) ||
              (e === pc && (!(2 & fc) && (Ec |= n), 4 === kc && Xc(e, hc, Nc, !1)), Ou(e)));
        }
        function Qc(e, t, n) {
          if (6 & fc) throw Error(l(327));
          for (
            var r = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || je(e, t),
              o = r
                ? (function (e, t) {
                    var n = fc;
                    fc |= 2;
                    var r = ru(),
                      o = ou();
                    pc !== e || hc !== t
                      ? ((Oc = null), (Rc = ie() + 500), eu(e, t))
                      : (bc = je(e, t));
                    e: for (;;)
                      try {
                        if (0 !== gc && null !== mc) {
                          t = mc;
                          var a = vc;
                          t: switch (gc) {
                            case 1:
                              ((gc = 0), (vc = null), du(e, t, a, 1));
                              break;
                            case 2:
                            case 9:
                              if (ta(a)) {
                                ((gc = 0), (vc = null), uu(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== gc && 9 !== gc) || pc !== e || (gc = 7), Ou(e));
                              }),
                                a.then(t, t));
                              break e;
                            case 3:
                              gc = 7;
                              break e;
                            case 4:
                              gc = 5;
                              break e;
                            case 7:
                              ta(a)
                                ? ((gc = 0), (vc = null), uu(t))
                                : ((gc = 0), (vc = null), du(e, t, a, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (mc.tag) {
                                case 26:
                                  i = mc.memoizedState;
                                case 5:
                                case 27:
                                  var s = mc;
                                  if (i ? rf(i) : s.stateNode.complete) {
                                    ((gc = 0), (vc = null));
                                    var c = s.sibling;
                                    if (null !== c) mc = c;
                                    else {
                                      var u = s.return;
                                      null !== u ? ((mc = u), fu(u)) : (mc = null);
                                    }
                                    break t;
                                  }
                              }
                              ((gc = 0), (vc = null), du(e, t, a, 5));
                              break;
                            case 6:
                              ((gc = 0), (vc = null), du(e, t, a, 6));
                              break;
                            case 8:
                              (Jc(), (kc = 6));
                              break e;
                            default:
                              throw Error(l(462));
                          }
                        }
                        su();
                        break;
                      } catch (t) {
                        tu(e, t);
                      }
                    return (
                      (Eo = So = null),
                      (R.H = r),
                      (R.A = o),
                      (fc = n),
                      null !== mc ? 0 : ((pc = null), (hc = 0), Pr(), kc)
                    );
                  })(e, t)
                : lu(e, t, !0),
              a = r;
            ;
          ) {
            if (0 === o) {
              bc && !r && Xc(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !a || Yc(n))) {
              if (2 === o) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var i = 0;
                else i = 0 != (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var s = e;
                    o = _c;
                    var c = s.current.memoizedState.isDehydrated;
                    if ((c && (eu(s, i).flags |= 256), 2 !== (i = lu(s, i, !1)))) {
                      if (xc && !c) {
                        ((s.errorRecoveryDisabledLanes |= a), (Ec |= a), (o = 4));
                        break e;
                      }
                      ((a = Pc),
                        (Pc = o),
                        null !== a && (null === Pc ? (Pc = a) : Pc.push.apply(Pc, a)));
                    }
                    o = i;
                  }
                  if (((a = !1), 2 !== o)) continue;
                }
              }
              if (1 === o) {
                (eu(e, 0), Xc(e, t, 0, !0));
                break;
              }
              e: {
                switch (((r = e), (a = o))) {
                  case 0:
                  case 1:
                    throw Error(l(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Xc(r, t, Nc, !yc);
                    break e;
                  case 2:
                    Pc = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(l(329));
                }
                if ((62914560 & t) === t && 10 < (o = Tc + 300 - ie())) {
                  if ((Xc(r, t, Nc, !yc), 0 !== Ne(r, 0, !0))) break e;
                  ((Ic = t),
                    (r.timeoutHandle = xd(
                      Gc.bind(null, r, n, Pc, Oc, zc, t, Nc, Ec, jc, yc, a, "Throttled", -0, 0),
                      o,
                    )));
                } else Gc(r, n, Pc, Oc, zc, t, Nc, Ec, jc, yc, a, null, -0, 0);
              }
              break;
            }
            ((o = lu(e, t, !1)), (a = !1));
          }
          Ou(e);
        }
        function Gc(e, t, n, r, o, a, l, i, s, c, u, d, f, p) {
          if (((e.timeoutHandle = -1), 8192 & (d = t.subtreeFlags) || !(16785408 & ~d))) {
            oc(
              t,
              a,
              (d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Tt,
              }),
            );
            var m = (62914560 & a) === a ? Tc - ie() : (4194048 & a) === a ? Mc - ie() : 0;
            if (
              null !==
              (m = (function (e, t) {
                return (
                  e.stylesheets && 0 === e.count && sf(e, e.stylesheets),
                  0 < e.count || 0 < e.imgCount
                    ? function (n) {
                        var r = setTimeout(function () {
                          if ((e.stylesheets && sf(e, e.stylesheets), e.unsuspend)) {
                            var t = e.unsuspend;
                            ((e.unsuspend = null), t());
                          }
                        }, 6e4 + t);
                        0 < e.imgBytes &&
                          0 === of &&
                          (of =
                            62500 *
                            (function () {
                              if ("function" == typeof performance.getEntriesByType) {
                                for (
                                  var e = 0,
                                    t = 0,
                                    n = performance.getEntriesByType("resource"),
                                    r = 0;
                                  r < n.length;
                                  r++
                                ) {
                                  var o = n[r],
                                    a = o.transferSize,
                                    l = o.initiatorType,
                                    i = o.duration;
                                  if (a && i && fd(l)) {
                                    for (l = 0, i = o.responseEnd, r += 1; r < n.length; r++) {
                                      var s = n[r],
                                        c = s.startTime;
                                      if (c > i) break;
                                      var u = s.transferSize,
                                        d = s.initiatorType;
                                      u &&
                                        fd(d) &&
                                        (l +=
                                          u * ((s = s.responseEnd) < i ? 1 : (i - c) / (s - c)));
                                    }
                                    if ((--r, (t += (8 * (a + l)) / (o.duration / 1e3)), 10 < ++e))
                                      break;
                                  }
                                }
                                if (0 < e) return t / e / 1e6;
                              }
                              return navigator.connection &&
                                "number" == typeof (e = navigator.connection.downlink)
                                ? e
                                : 5;
                            })());
                        var o = setTimeout(
                          function () {
                            if (
                              ((e.waitingForImages = !1),
                              0 === e.count && (e.stylesheets && sf(e, e.stylesheets), e.unsuspend))
                            ) {
                              var t = e.unsuspend;
                              ((e.unsuspend = null), t());
                            }
                          },
                          (e.imgBytes > of ? 50 : 800) + t,
                        );
                        return (
                          (e.unsuspend = n),
                          function () {
                            ((e.unsuspend = null), clearTimeout(r), clearTimeout(o));
                          }
                        );
                      }
                    : null
                );
              })(d, m))
            )
              return (
                (Ic = a),
                (e.cancelPendingCommit = m(
                  mu.bind(null, e, t, a, n, r, o, l, i, s, u, d, null, f, p),
                )),
                void Xc(e, a, l, !c)
              );
          }
          mu(e, t, a, n, r, o, l, i, s);
        }
        function Yc(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var o = n[r],
                  a = o.getSnapshot;
                o = o.value;
                try {
                  if (!Xn(a(), o)) return !1;
                } catch (e) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) ((n.return = t), (t = n));
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }
          return !0;
        }
        function Xc(e, t, n, r) {
          ((t &= ~Cc),
            (t &= ~Ec),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes));
          for (var o = t; 0 < o; ) {
            var a = 31 - be(o),
              l = 1 << a;
            ((r[a] = -1), (o &= ~l));
          }
          0 !== n && Me(e, n, t);
        }
        function Zc() {
          return !!(6 & fc) || (Lu(0, !1), !1);
        }
        function Jc() {
          if (null !== mc) {
            if (0 === gc) var e = mc.return;
            else ((Eo = So = null), ll((e = mc)), (ia = null), (sa = 0), (e = mc));
            for (; null !== e; ) (ms(e.alternate, e), (e = e.return));
            mc = null;
          }
        }
        function eu(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), wd(n)),
            null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
            (Ic = 0),
            Jc(),
            (pc = e),
            (mc = n = Ir(e.current, null)),
            (hc = t),
            (gc = 0),
            (vc = null),
            (yc = !1),
            (bc = je(e, t)),
            (xc = !1),
            (jc = Nc = Cc = Ec = Sc = kc = 0),
            (Pc = _c = null),
            (zc = !1),
            8 & t && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var o = 31 - be(r),
                a = 1 << o;
              ((t |= e[o]), (r &= ~a));
            }
          return ((wc = t), Pr(), n);
        }
        function tu(e, t) {
          ((Ba = null),
            (R.H = mi),
            t === Xo || t === Jo
              ? ((t = aa()), (gc = 3))
              : t === Zo
                ? ((t = aa()), (gc = 4))
                : (gc =
                    t === Ti
                      ? 8
                      : null !== t && "object" == typeof t && "function" == typeof t.then
                        ? 6
                        : 1),
            (vc = t),
            null === mc && ((kc = 1), Ni(e, Kr(t, e.current))));
        }
        function nu() {
          var e = Ma.current;
          return (
            null === e ||
            ((4194048 & hc) === hc
              ? null === Ra
              : !!((62914560 & hc) === hc || 536870912 & hc) && e === Ra)
          );
        }
        function ru() {
          var e = R.H;
          return ((R.H = mi), null === e ? mi : e);
        }
        function ou() {
          var e = R.A;
          return ((R.A = uc), e);
        }
        function au() {
          ((kc = 4),
            yc || ((4194048 & hc) !== hc && null !== Ma.current) || (bc = !0),
            (!(134217727 & Sc) && !(134217727 & Ec)) || null === pc || Xc(pc, hc, Nc, !1));
        }
        function lu(e, t, n) {
          var r = fc;
          fc |= 2;
          var o = ru(),
            a = ou();
          ((pc === e && hc === t) || ((Oc = null), eu(e, t)), (t = !1));
          var l = kc;
          e: for (;;)
            try {
              if (0 !== gc && null !== mc) {
                var i = mc,
                  s = vc;
                switch (gc) {
                  case 8:
                    (Jc(), (l = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === Ma.current && (t = !0);
                    var c = gc;
                    if (((gc = 0), (vc = null), du(e, i, s, c), n && bc)) {
                      l = 0;
                      break e;
                    }
                    break;
                  default:
                    ((c = gc), (gc = 0), (vc = null), du(e, i, s, c));
                }
              }
              (iu(), (l = kc));
              break;
            } catch (t) {
              tu(e, t);
            }
          return (
            t && e.shellSuspendCounter++,
            (Eo = So = null),
            (fc = r),
            (R.H = o),
            (R.A = a),
            null === mc && ((pc = null), (hc = 0), Pr()),
            l
          );
        }
        function iu() {
          for (; null !== mc; ) cu(mc);
        }
        function su() {
          for (; null !== mc && !ae(); ) cu(mc);
        }
        function cu(e) {
          var t = as(e.alternate, e, wc);
          ((e.memoizedProps = e.pendingProps), null === t ? fu(e) : (mc = t));
        }
        function uu(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Wi(n, t, t.pendingProps, t.type, void 0, hc);
              break;
            case 11:
              t = Wi(n, t, t.pendingProps, t.type.render, t.ref, hc);
              break;
            case 5:
              ll(t);
            default:
              (ms(n, t), (t = as(n, (t = mc = Hr(t, wc)), wc)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? fu(e) : (mc = t));
        }
        function du(e, t, n, r) {
          ((Eo = So = null), ll(t), (ia = null), (sa = 0));
          var o = t.return;
          try {
            if (
              (function (e, t, n, r, o) {
                if (
                  ((n.flags |= 32768),
                  null !== r && "object" == typeof r && "function" == typeof r.then)
                ) {
                  if ((null !== (t = n.alternate) && Po(t, n, o, !0), null !== (n = Ma.current))) {
                    switch (n.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Ra ? au() : null === n.alternate && 0 === kc && (kc = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = o),
                          r === ea
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              Su(e, r, o)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === ea
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                  ? (t.retryQueue = new Set([r]))
                                  : n.add(r),
                              Su(e, r, o)),
                          !1
                        );
                    }
                    throw Error(l(435, n.tag));
                  }
                  return (Su(e, r, o), au(), !1);
                }
                if (uo)
                  return (
                    null !== (t = Ma.current)
                      ? (!(65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = o),
                        r !== mo && wo(Kr((e = Error(l(422), { cause: r })), n)))
                      : (r !== mo && wo(Kr((t = Error(l(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (o &= -o),
                        (e.lanes |= o),
                        (r = Kr(r, n)),
                        wa(e, (o = _i(e.stateNode, r, o))),
                        4 !== kc && (kc = 2)),
                    !1
                  );
                var a = Error(l(520), { cause: r });
                if (
                  ((a = Kr(a, n)),
                  null === _c ? (_c = [a]) : _c.push(a),
                  4 !== kc && (kc = 2),
                  null === t)
                )
                  return !0;
                ((r = Kr(r, n)), (n = t));
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = o & -o),
                        (n.lanes |= e),
                        wa(n, (e = _i(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (a = n.stateNode),
                        !(
                          128 & n.flags ||
                          ("function" != typeof t.getDerivedStateFromError &&
                            (null === a ||
                              "function" != typeof a.componentDidCatch ||
                              (null !== Lc && Lc.has(a))))
                        ))
                      )
                        return (
                          (n.flags |= 65536),
                          (o &= -o),
                          (n.lanes |= o),
                          zi((o = Pi(o)), e, n, r),
                          wa(n, o),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, o, t, n, hc)
            )
              return ((kc = 1), Ni(e, Kr(n, e.current)), void (mc = null));
          } catch (t) {
            if (null !== o) throw ((mc = o), t);
            return ((kc = 1), Ni(e, Kr(n, e.current)), void (mc = null));
          }
          32768 & t.flags
            ? (uo || 1 === r
                ? (e = !0)
                : bc || 536870912 & hc
                  ? (e = !1)
                  : ((yc = e = !0),
                    (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = Ma.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
              pu(t, e))
            : fu(t);
        }
        function fu(e) {
          var t = e;
          do {
            if (32768 & t.flags) return void pu(t, yc);
            e = t.return;
            var n = fs(t.alternate, t, wc);
            if (null !== n) return void (mc = n);
            if (null !== (t = t.sibling)) return void (mc = t);
            mc = t = e;
          } while (null !== t);
          0 === kc && (kc = 5);
        }
        function pu(e, t) {
          do {
            var n = ps(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (mc = n));
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (mc = e);
            mc = e = n;
          } while (null !== e);
          ((kc = 6), (mc = null));
        }
        function mu(e, t, n, r, o, a, i, s, c) {
          e.cancelPendingCommit = null;
          do {
            bu();
          } while (0 !== Dc);
          if (6 & fc) throw Error(l(327));
          if (null !== t) {
            if (t === e.current) throw Error(l(177));
            if (
              ((a = t.lanes | t.childLanes),
              (function (e, t, n, r, o, a) {
                var l = e.pendingLanes;
                ((e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0));
                var i = e.entanglements,
                  s = e.expirationTimes,
                  c = e.hiddenUpdates;
                for (n = l & ~n; 0 < n; ) {
                  var u = 31 - be(n),
                    d = 1 << u;
                  ((i[u] = 0), (s[u] = -1));
                  var f = c[u];
                  if (null !== f)
                    for (c[u] = null, u = 0; u < f.length; u++) {
                      var p = f[u];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~d;
                }
                (0 !== r && Me(e, r, 0),
                  0 !== a && 0 === o && 0 !== e.tag && (e.suspendedLanes |= a & ~(l & ~t)));
              })(e, n, (a |= _r), i, s, c),
              e === pc && ((mc = pc = null), (hc = 0)),
              (Fc = t),
              (Ac = e),
              (Ic = n),
              (Hc = a),
              ($c = o),
              (Bc = r),
              10256 & t.subtreeFlags || 10256 & t.flags
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  re(de, function () {
                    return (xu(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = !!(13878 & t.flags)),
              13878 & t.subtreeFlags || r)
            ) {
              ((r = R.T), (R.T = null), (o = O.p), (O.p = 2), (i = fc), (fc |= 4));
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (pd = vf), rr((e = nr(e))))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection &&
                          n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var o = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            (n.nodeType, a.nodeType);
                          } catch (e) {
                            n = null;
                            break e;
                          }
                          var i = 0,
                            s = -1,
                            c = -1,
                            u = 0,
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var m;
                              f !== n || (0 !== o && 3 !== f.nodeType) || (s = i + o),
                                f !== a || (0 !== r && 3 !== f.nodeType) || (c = i + r),
                                3 === f.nodeType && (i += f.nodeValue.length),
                                null !== (m = f.firstChild);
                            )
                              ((p = f), (f = m));
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (p === n && ++u === o && (s = i),
                                p === a && ++d === r && (c = i),
                                null !== (m = f.nextSibling))
                              )
                                break;
                              p = (f = p).parentNode;
                            }
                            f = m;
                          }
                          n = -1 === s || -1 === c ? null : { start: s, end: c };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (md = { focusedElem: e, selectionRange: n }, vf = !1, Ms = t; null !== Ms; )
                    if (((e = (t = Ms).child), 1028 & t.subtreeFlags && null !== e))
                      ((e.return = t), (Ms = e));
                    else
                      for (; null !== Ms; ) {
                        switch (((a = (t = Ms).alternate), (e = t.flags), t.tag)) {
                          case 0:
                            if (
                              4 & e &&
                              null !== (e = null !== (e = t.updateQueue) ? e.events : null)
                            )
                              for (n = 0; n < e.length; n++) (o = e[n]).ref.impl = o.nextImpl;
                            break;
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (1024 & e && null !== a) {
                              ((e = void 0),
                                (n = t),
                                (o = a.memoizedProps),
                                (a = a.memoizedState),
                                (r = n.stateNode));
                              try {
                                var h = ki(n.type, o);
                                ((e = r.getSnapshotBeforeUpdate(h, a)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (e) {
                                ku(n, n.return, e);
                              }
                            }
                            break;
                          case 3:
                            if (1024 & e)
                              if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) _d(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    _d(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (1024 & e) throw Error(l(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (Ms = e));
                          break;
                        }
                        Ms = t.return;
                      }
                })(e, t);
              } finally {
                ((fc = i), (O.p = o), (R.T = r));
              }
            }
            ((Dc = 1), hu(), gu(), vu());
          }
        }
        function hu() {
          if (1 === Dc) {
            Dc = 0;
            var e = Ac,
              t = Fc,
              n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
              ((n = R.T), (R.T = null));
              var r = O.p;
              O.p = 2;
              var o = fc;
              fc |= 4;
              try {
                Ws(t, e);
                var a = md,
                  l = nr(e.containerInfo),
                  i = a.focusedElem,
                  s = a.selectionRange;
                if (l !== i && i && i.ownerDocument && tr(i.ownerDocument.documentElement, i)) {
                  if (null !== s && rr(i)) {
                    var c = s.start,
                      u = s.end;
                    if ((void 0 === u && (u = c), "selectionStart" in i))
                      ((i.selectionStart = c), (i.selectionEnd = Math.min(u, i.value.length)));
                    else {
                      var d = i.ownerDocument || document,
                        f = (d && d.defaultView) || window;
                      if (f.getSelection) {
                        var p = f.getSelection(),
                          m = i.textContent.length,
                          h = Math.min(s.start, m),
                          g = void 0 === s.end ? h : Math.min(s.end, m);
                        !p.extend && h > g && ((l = g), (g = h), (h = l));
                        var v = er(i, h),
                          y = er(i, g);
                        if (
                          v &&
                          y &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== v.node ||
                            p.anchorOffset !== v.offset ||
                            p.focusNode !== y.node ||
                            p.focusOffset !== y.offset)
                        ) {
                          var b = d.createRange();
                          (b.setStart(v.node, v.offset),
                            p.removeAllRanges(),
                            h > g
                              ? (p.addRange(b), p.extend(y.node, y.offset))
                              : (b.setEnd(y.node, y.offset), p.addRange(b)));
                        }
                      }
                    }
                  }
                  for (d = [], p = i; (p = p.parentNode); )
                    1 === p.nodeType &&
                      d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
                  for ("function" == typeof i.focus && i.focus(), i = 0; i < d.length; i++) {
                    var x = d[i];
                    ((x.element.scrollLeft = x.left), (x.element.scrollTop = x.top));
                  }
                }
                ((vf = !!pd), (md = pd = null));
              } finally {
                ((fc = o), (O.p = r), (R.T = n));
              }
            }
            ((e.current = t), (Dc = 2));
          }
        }
        function gu() {
          if (2 === Dc) {
            Dc = 0;
            var e = Ac,
              t = Fc,
              n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
              ((n = R.T), (R.T = null));
              var r = O.p;
              O.p = 2;
              var o = fc;
              fc |= 4;
              try {
                Rs(e, t.alternate, t);
              } finally {
                ((fc = o), (O.p = r), (R.T = n));
              }
            }
            Dc = 3;
          }
        }
        function vu() {
          if (4 === Dc || 3 === Dc) {
            ((Dc = 0), le());
            var e = Ac,
              t = Fc,
              n = Ic,
              r = Bc;
            10256 & t.subtreeFlags || 10256 & t.flags
              ? (Dc = 5)
              : ((Dc = 0), (Fc = Ac = null), yu(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (
              (0 === o && (Lc = null),
              De(n),
              (t = t.stateNode),
              ve && "function" == typeof ve.onCommitFiberRoot)
            )
              try {
                ve.onCommitFiberRoot(ge, t, void 0, !(128 & ~t.current.flags));
              } catch (e) {}
            if (null !== r) {
              ((t = R.T), (o = O.p), (O.p = 2), (R.T = null));
              try {
                for (var a = e.onRecoverableError, l = 0; l < r.length; l++) {
                  var i = r[l];
                  a(i.value, { componentStack: i.stack });
                }
              } finally {
                ((R.T = t), (O.p = o));
              }
            }
            (3 & Ic && bu(),
              Ou(e),
              (o = e.pendingLanes),
              261930 & n && 42 & o ? (e === Wc ? Uc++ : ((Uc = 0), (Wc = e))) : (Uc = 0),
              Lu(0, !1));
          }
        }
        function yu(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ho(t));
        }
        function bu() {
          return (hu(), gu(), vu(), xu());
        }
        function xu() {
          if (5 !== Dc) return !1;
          var e = Ac,
            t = Hc;
          Hc = 0;
          var n = De(Ic),
            r = R.T,
            o = O.p;
          try {
            ((O.p = 32 > n ? 32 : n), (R.T = null), (n = $c), ($c = null));
            var a = Ac,
              i = Ic;
            if (((Dc = 0), (Fc = Ac = null), (Ic = 0), 6 & fc)) throw Error(l(331));
            var s = fc;
            if (
              ((fc |= 4),
              ic(a.current),
              Js(a, a.current, i, n),
              (fc = s),
              Lu(0, !1),
              ve && "function" == typeof ve.onPostCommitFiberRoot)
            )
              try {
                ve.onPostCommitFiberRoot(ge, a);
              } catch (e) {}
            return !0;
          } finally {
            ((O.p = o), (R.T = r), yu(e, t));
          }
        }
        function wu(e, t, n) {
          ((t = Kr(n, t)),
            null !== (e = ba(e, (t = _i(e.stateNode, t, 2)), 2)) && (Te(e, 2), Ou(e)));
        }
        function ku(e, t, n) {
          if (3 === e.tag) wu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                wu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch && (null === Lc || !Lc.has(r)))
                ) {
                  ((e = Kr(n, e)),
                    null !== (r = ba(t, (n = Pi(2)), 2)) && (zi(n, r, t, e), Te(r, 2), Ou(r)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Su(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new dc();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || ((xc = !0), o.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            pc === e &&
              (hc & n) === n &&
              (4 === kc || (3 === kc && (62914560 & hc) === hc && 300 > ie() - Tc)
                ? !(2 & fc) && eu(e, 0)
                : (Cc |= n),
              jc === hc && (jc = 0)),
            Ou(e));
        }
        function Cu(e, t) {
          (0 === t && (t = Pe()), null !== (e = Mr(e, t)) && (Te(e, t), Ou(e)));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), Cu(e, n));
        }
        function ju(e, t) {
          var n = 0;
          switch (e.tag) {
            case 31:
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(l(314));
          }
          (null !== r && r.delete(t), Cu(e, n));
        }
        var _u = null,
          Pu = null,
          zu = !1,
          Tu = !1,
          Mu = !1,
          Ru = 0;
        function Ou(e) {
          (e !== Pu && null === e.next && (null === Pu ? (_u = Pu = e) : (Pu = Pu.next = e)),
            (Tu = !0),
            zu ||
              ((zu = !0),
              Sd(function () {
                6 & fc ? re(ce, Du) : Au();
              })));
        }
        function Lu(e, t) {
          if (!Mu && Tu) {
            Mu = !0;
            do {
              for (var n = !1, r = _u; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var o = r.pendingLanes;
                    if (0 === o) var a = 0;
                    else {
                      var l = r.suspendedLanes,
                        i = r.pingedLanes;
                      ((a = (1 << (31 - be(42 | e) + 1)) - 1),
                        (a =
                          201326741 & (a &= o & ~(l & ~i)) ? (201326741 & a) | 1 : a ? 2 | a : 0));
                    }
                    0 !== a && ((n = !0), Hu(r, a));
                  } else
                    ((a = hc),
                      !(
                        3 &
                        (a = Ne(
                          r,
                          r === pc ? a : 0,
                          null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                        ))
                      ) ||
                        je(r, a) ||
                        ((n = !0), Hu(r, a)));
                r = r.next;
              }
            } while (n);
            Mu = !1;
          }
        }
        function Du() {
          Au();
        }
        function Au() {
          Tu = zu = !1;
          var e,
            t = 0;
          0 !== Ru &&
            ((e = window.event) && "popstate" === e.type
              ? e !== bd && ((bd = e), 1)
              : ((bd = null), 0)) &&
            (t = Ru);
          for (var n = ie(), r = null, o = _u; null !== o; ) {
            var a = o.next,
              l = Fu(o, n);
            (0 === l
              ? ((o.next = null), null === r ? (_u = a) : (r.next = a), null === a && (Pu = r))
              : ((r = o), (0 !== t || 3 & l) && (Tu = !0)),
              (o = a));
          }
          ((0 !== Dc && 5 !== Dc) || Lu(t, !1), 0 !== Ru && (Ru = 0));
        }
        function Fu(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              o = e.expirationTimes,
              a = -62914561 & e.pendingLanes;
            0 < a;
          ) {
            var l = 31 - be(a),
              i = 1 << l,
              s = o[l];
            (-1 === s
              ? (0 !== (i & n) && 0 === (i & r)) || (o[l] = _e(i, t))
              : s <= t && (e.expiredLanes |= i),
              (a &= ~i));
          }
          if (
            ((n = hc),
            (n = Ne(
              e,
              e === (t = pc) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            )),
            (r = e.callbackNode),
            0 === n || (e === t && (2 === gc || 9 === gc)) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && oe(r), (e.callbackNode = null), (e.callbackPriority = 0)
            );
          if (!(3 & n) || je(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && oe(r), De(n))) {
              case 2:
              case 8:
                n = ue;
                break;
              case 32:
              default:
                n = de;
                break;
              case 268435456:
                n = pe;
            }
            return (
              (r = Iu.bind(null, e)),
              (n = re(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && oe(r), (e.callbackPriority = 2), (e.callbackNode = null), 2
          );
        }
        function Iu(e, t) {
          if (0 !== Dc && 5 !== Dc)
            return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (bu() && e.callbackNode !== n) return null;
          var r = hc;
          return 0 ===
            (r = Ne(e, e === pc ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
            ? null
            : (Qc(e, r, t),
              Fu(e, ie()),
              null != e.callbackNode && e.callbackNode === n ? Iu.bind(null, e) : null);
        }
        function Hu(e, t) {
          if (bu()) return null;
          Qc(e, t, !0);
        }
        function $u() {
          if (0 === Ru) {
            var e = Uo;
            (0 === e && ((e = ke), !(261888 & (ke <<= 1)) && (ke = 256)), (Ru = e));
          }
          return Ru;
        }
        function Bu(e) {
          return null == e || "symbol" == typeof e || "boolean" == typeof e
            ? null
            : "function" == typeof e
              ? e
              : zt("" + e);
        }
        function Uu(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Wu = 0; Wu < Sr.length; Wu++) {
          var Vu = Sr[Wu];
          Er(Vu.toLowerCase(), "on" + (Vu[0].toUpperCase() + Vu.slice(1)));
        }
        (Er(hr, "onAnimationEnd"),
          Er(gr, "onAnimationIteration"),
          Er(vr, "onAnimationStart"),
          Er("dblclick", "onDoubleClick"),
          Er("focusin", "onFocus"),
          Er("focusout", "onBlur"),
          Er(yr, "onTransitionRun"),
          Er(br, "onTransitionStart"),
          Er(xr, "onTransitionCancel"),
          Er(wr, "onTransitionEnd"),
          rt("onMouseEnter", ["mouseout", "mouseover"]),
          rt("onMouseLeave", ["mouseout", "mouseover"]),
          rt("onPointerEnter", ["pointerout", "pointerover"]),
          rt("onPointerLeave", ["pointerout", "pointerover"]),
          nt(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(" "),
          ),
          nt(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          nt(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(" "),
          ),
          nt(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(" "),
          ),
          nt(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
          ));
        var qu =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Ku = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qu),
          );
        function Qu(e, t) {
          t = !!(4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    s = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), s !== a && o.isPropagationStopped())) break e;
                  ((a = i), (o.currentTarget = c));
                  try {
                    a(o);
                  } catch (e) {
                    Cr(e);
                  }
                  ((o.currentTarget = null), (a = s));
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  ((a = i), (o.currentTarget = c));
                  try {
                    a(o);
                  } catch (e) {
                    Cr(e);
                  }
                  ((o.currentTarget = null), (a = s));
                }
            }
          }
        }
        function Gu(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ju(t, e, 2, !1), n.add(r));
        }
        function Yu(e, t, n) {
          var r = 0;
          (t && (r |= 4), Ju(n, e, r, t));
        }
        var Xu = "_reactListening" + Math.random().toString(36).slice(2);
        function Zu(e) {
          if (!e[Xu]) {
            ((e[Xu] = !0),
              et.forEach(function (t) {
                "selectionchange" !== t && (Ku.has(t) || Yu(t, !1, e), Yu(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Xu] || ((t[Xu] = !0), Yu("selectionchange", !1, t));
          }
        }
        function Ju(e, t, n, r) {
          switch (Ef(t)) {
            case 2:
              var o = yf;
              break;
            case 8:
              o = bf;
              break;
            default:
              o = xf;
          }
          ((n = o.bind(null, t, n, e)),
            (o = void 0),
            !$t || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1));
        }
        function ed(e, t, n, r, o) {
          var a = r;
          if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var s = r.stateNode.containerInfo;
                if (s === o) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var c = l.tag;
                    if ((3 === c || 4 === c) && l.stateNode.containerInfo === o) return;
                    l = l.return;
                  }
                for (; null !== s; ) {
                  if (null === (l = Ge(s))) return;
                  if (5 === (c = l.tag) || 6 === c || 26 === c || 27 === c) {
                    r = a = l;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Ft(function () {
            var r = a,
              o = Rt(n),
              l = [];
            e: {
              var s = kr.get(e);
              if (void 0 !== s) {
                var c = tn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === Kt(n)) break e;
                  case "keydown":
                  case "keyup":
                    c = vn;
                    break;
                  case "focusin":
                    ((u = "focus"), (c = sn));
                    break;
                  case "focusout":
                    ((u = "blur"), (c = sn));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    c = sn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    c = an;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    c = ln;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    c = bn;
                    break;
                  case hr:
                  case gr:
                  case vr:
                    c = cn;
                    break;
                  case wr:
                    c = xn;
                    break;
                  case "scroll":
                  case "scrollend":
                    c = rn;
                    break;
                  case "wheel":
                    c = wn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    c = un;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    c = yn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    c = kn;
                }
                var d = !!(4 & t),
                  f = !d && ("scroll" === e || "scrollend" === e),
                  p = d ? (null !== s ? s + "Capture" : null) : s;
                d = [];
                for (var m, h = r; null !== h; ) {
                  var g = h;
                  if (
                    ((m = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === m ||
                      null === p ||
                      (null != (g = It(h, p)) && d.push(td(h, g, m))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < d.length && ((s = new c(s, u, null, n, o)), l.push({ event: s, listeners: d }));
              }
            }
            if (!(7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === Mt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!Ge(u) && !u[Be])) &&
                  (c || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                        ? s.defaultView || s.parentWindow
                        : window),
                  c
                    ? ((c = r),
                      null !== (u = (u = n.relatedTarget || n.toElement) ? Ge(u) : null) &&
                        ((f = i(u)), (d = u.tag), u !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (u = null))
                    : ((c = null), (u = r)),
                  c !== u))
              ) {
                if (
                  ((d = an),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = yn), (g = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
                  (f = null == c ? s : Xe(c)),
                  (m = null == u ? s : Xe(u)),
                  ((s = new d(g, h + "leave", c, n, o)).target = f),
                  (s.relatedTarget = m),
                  (g = null),
                  Ge(o) === r &&
                    (((d = new d(p, h + "enter", u, n, o)).target = m),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  c && u)
                )
                  e: {
                    for (d = rd, h = u, m = 0, g = p = c; g; g = d(g)) m++;
                    g = 0;
                    for (var v = h; v; v = d(v)) g++;
                    for (; 0 < m - g; ) ((p = d(p)), m--);
                    for (; 0 < g - m; ) ((h = d(h)), g--);
                    for (; m--; ) {
                      if (p === h || (null !== h && p === h.alternate)) {
                        d = p;
                        break e;
                      }
                      ((p = d(p)), (h = d(h)));
                    }
                    d = null;
                  }
                else d = null;
                (null !== c && od(l, s, c, d, !1), null !== u && null !== f && od(l, f, u, d, !0));
              }
              if (
                "select" === (c = (s = r ? Xe(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ("input" === c && "file" === s.type)
              )
                var y = Hn;
              else if (On(s))
                if ($n) y = Yn;
                else {
                  y = Qn;
                  var b = Kn;
                }
              else
                !(c = s.nodeName) ||
                "input" !== c.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && jt(r.elementType) && (y = Hn)
                  : (y = Gn);
              switch (
                (y && (y = y(e, r))
                  ? Ln(l, y, n, o)
                  : (b && b(e, s, r),
                    "focusout" === e &&
                      r &&
                      "number" === s.type &&
                      null != r.memoizedProps.value &&
                      bt(s, "number", s.value)),
                (b = r ? Xe(r) : window),
                e)
              ) {
                case "focusin":
                  (On(b) || "true" === b.contentEditable) && ((ar = b), (lr = r), (ir = null));
                  break;
                case "focusout":
                  ir = lr = ar = null;
                  break;
                case "mousedown":
                  sr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((sr = !1), cr(l, n, o));
                  break;
                case "selectionchange":
                  if (or) break;
                case "keydown":
                case "keyup":
                  cr(l, n, o);
              }
              var x;
              if (En)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var w = "onCompositionStart";
                      break e;
                    case "compositionend":
                      w = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      w = "onCompositionUpdate";
                      break e;
                  }
                  w = void 0;
                }
              else
                Mn
                  ? zn(e, n) && (w = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
              (w &&
                (jn &&
                  "ko" !== n.locale &&
                  (Mn || "onCompositionStart" !== w
                    ? "onCompositionEnd" === w && Mn && (x = qt())
                    : ((Wt = "value" in (Ut = o) ? Ut.value : Ut.textContent), (Mn = !0))),
                0 < (b = nd(r, w)).length &&
                  ((w = new dn(w, e, null, n, o)),
                  l.push({ event: w, listeners: b }),
                  (x || null !== (x = Tn(n))) && (w.data = x))),
                (x = Nn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Tn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Pn = !0), _n);
                        case "textInput":
                          return (e = t.data) === _n && Pn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Mn)
                        return "compositionend" === e || (!En && zn(e, t))
                          ? ((e = qt()), (Vt = Wt = Ut = null), (Mn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return jn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (w = nd(r, "onBeforeInput")).length &&
                  ((b = new dn("onBeforeInput", "beforeinput", null, n, o)),
                  l.push({ event: b, listeners: w }),
                  (b.data = x)),
                (function (e, t, n, r, o) {
                  if ("submit" === t && n && n.stateNode === o) {
                    var a = Bu((o[$e] || null).action),
                      l = r.submitter;
                    l &&
                      null !==
                        (t = (t = l[$e] || null)
                          ? Bu(t.formAction)
                          : l.getAttribute("formAction")) &&
                      ((a = t), (l = null));
                    var i = new tn("action", "action", null, r, o);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== Ru) {
                                var e = l ? Uu(o, l) : new FormData(o);
                                ei(
                                  n,
                                  { pending: !0, data: e, method: o.method, action: a },
                                  null,
                                  e,
                                );
                              }
                            } else
                              "function" == typeof a &&
                                (i.preventDefault(),
                                (e = l ? Uu(o, l) : new FormData(o)),
                                ei(n, { pending: !0, data: e, method: o.method, action: a }, a, e));
                          },
                          currentTarget: o,
                        },
                      ],
                    });
                  }
                })(l, e, r, n, o));
            }
            Qu(l, t);
          });
        }
        function td(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function nd(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            if (
              ((5 !== (o = o.tag) && 26 !== o && 27 !== o) ||
                null === a ||
                (null != (o = It(e, n)) && r.unshift(td(e, o, a)),
                null != (o = It(e, t)) && r.push(td(e, o, a))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function rd(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function od(e, t, n, r, o) {
          for (var a = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              c = i.stateNode;
            if (((i = i.tag), null !== s && s === r)) break;
            ((5 !== i && 26 !== i && 27 !== i) ||
              null === c ||
              ((s = c),
              o
                ? null != (c = It(n, a)) && l.unshift(td(n, c, s))
                : o || (null != (c = It(n, a)) && l.push(td(n, c, s)))),
              (n = n.return));
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var ad = /\r\n?/g,
          ld = /\u0000|\uFFFD/g;
        function id(e) {
          return ("string" == typeof e ? e : "" + e).replace(ad, "\n").replace(ld, "");
        }
        function sd(e, t) {
          return ((t = id(t)), id(e) === t);
        }
        function cd(e, t, n, r, o, a) {
          switch (n) {
            case "children":
              "string" == typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && St(e, "" + r);
              break;
            case "className":
              st(e, "class", r);
              break;
            case "tabIndex":
              st(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              st(e, n, r);
              break;
            case "style":
              Nt(e, r, a);
              break;
            case "data":
              if ("object" !== t) {
                st(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" == typeof r ||
                "symbol" == typeof r ||
                "boolean" == typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = zt("" + r)), e.setAttribute(n, r));
              break;
            case "action":
            case "formAction":
              if ("function" == typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              }
              if (
                ("function" == typeof a &&
                  ("formAction" === n
                    ? ("input" !== t && cd(e, t, "name", o.name, o, null),
                      cd(e, t, "formEncType", o.formEncType, o, null),
                      cd(e, t, "formMethod", o.formMethod, o, null),
                      cd(e, t, "formTarget", o.formTarget, o, null))
                    : (cd(e, t, "encType", o.encType, o, null),
                      cd(e, t, "method", o.method, o, null),
                      cd(e, t, "target", o.target, o, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = zt("" + r)), e.setAttribute(n, r));
              break;
            case "onClick":
              null != r && (e.onclick = Tt);
              break;
            case "onScroll":
              null != r && Gu("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Gu("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(l(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple = r && "function" != typeof r && "symbol" != typeof r;
              break;
            case "muted":
              e.muted = r && "function" != typeof r && "symbol" != typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" == typeof r ||
                "boolean" == typeof r ||
                "symbol" == typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              ((n = zt("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r
                  ? e.setAttribute(n, r)
                  : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              (Gu("beforetoggle", e), Gu("toggle", e), it(e, "popover", r));
              break;
            case "xlinkActuate":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              ct(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              ct(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              it(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                it(e, (n = _t.get(n) || n), r);
          }
        }
        function ud(e, t, n, r, o, a) {
          switch (n) {
            case "style":
              Nt(e, r, a);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(l(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" == typeof r
                ? St(e, r)
                : ("number" == typeof r || "bigint" == typeof r) && St(e, "" + r);
              break;
            case "onScroll":
              null != r && Gu("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Gu("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Tt);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              tt.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((o = n.endsWith("Capture")),
                (t = n.slice(2, o ? n.length - 7 : void 0)),
                "function" == typeof (a = null != (a = e[$e] || null) ? a[n] : null) &&
                  e.removeEventListener(t, a, o),
                "function" != typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                      ? e.setAttribute(n, "")
                      : it(e, n, r)
                  : ("function" != typeof a &&
                      null !== a &&
                      (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, o)));
          }
        }
        function dd(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              (Gu("error", e), Gu("load", e));
              var r,
                o = !1,
                a = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        o = !0;
                        break;
                      case "srcSet":
                        a = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                      default:
                        cd(e, t, r, i, n, null);
                    }
                }
              return (
                a && cd(e, t, "srcSet", n.srcSet, n, null),
                void (o && cd(e, t, "src", n.src, n, null))
              );
            case "input":
              Gu("invalid", e);
              var s = (r = i = a = null),
                c = null,
                u = null;
              for (o in n)
                if (n.hasOwnProperty(o)) {
                  var d = n[o];
                  if (null != d)
                    switch (o) {
                      case "name":
                        a = d;
                        break;
                      case "type":
                        i = d;
                        break;
                      case "checked":
                        c = d;
                        break;
                      case "defaultChecked":
                        u = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        s = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(l(137, t));
                        break;
                      default:
                        cd(e, t, o, d, n, null);
                    }
                }
              return void yt(e, r, s, c, u, i, a, !1);
            case "select":
              for (a in (Gu("invalid", e), (o = i = r = null), n))
                if (n.hasOwnProperty(a) && null != (s = n[a]))
                  switch (a) {
                    case "value":
                      r = s;
                      break;
                    case "defaultValue":
                      i = s;
                      break;
                    case "multiple":
                      o = s;
                    default:
                      cd(e, t, a, s, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!o),
                void (null != t ? xt(e, !!o, t, !1) : null != n && xt(e, !!o, n, !0))
              );
            case "textarea":
              for (i in (Gu("invalid", e), (r = a = o = null), n))
                if (n.hasOwnProperty(i) && null != (s = n[i]))
                  switch (i) {
                    case "value":
                      o = s;
                      break;
                    case "defaultValue":
                      a = s;
                      break;
                    case "children":
                      r = s;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != s) throw Error(l(91));
                      break;
                    default:
                      cd(e, t, i, s, n, null);
                  }
              return void kt(e, o, a, r);
            case "option":
              for (c in n)
                n.hasOwnProperty(c) &&
                  null != (o = n[c]) &&
                  ("selected" === c
                    ? (e.selected = o && "function" != typeof o && "symbol" != typeof o)
                    : cd(e, t, c, o, n, null));
              return;
            case "dialog":
              (Gu("beforetoggle", e), Gu("toggle", e), Gu("cancel", e), Gu("close", e));
              break;
            case "iframe":
            case "object":
              Gu("load", e);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qu.length; o++) Gu(qu[o], e);
              break;
            case "image":
              (Gu("error", e), Gu("load", e));
              break;
            case "details":
              Gu("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (Gu("error", e), Gu("load", e));
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (o = n[u]))
                  switch (u) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(l(137, t));
                    default:
                      cd(e, t, u, o, n, null);
                  }
              return;
            default:
              if (jt(t)) {
                for (d in n)
                  n.hasOwnProperty(d) && void 0 !== (o = n[d]) && ud(e, t, d, o, n, void 0);
                return;
              }
          }
          for (s in n) n.hasOwnProperty(s) && null != (o = n[s]) && cd(e, t, s, o, n, null);
        }
        function fd(e) {
          switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
              return !0;
            default:
              return !1;
          }
        }
        var pd = null,
          md = null;
        function hd(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function gd(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function vd(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function yd(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            "bigint" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var bd = null,
          xd = "function" == typeof setTimeout ? setTimeout : void 0,
          wd = "function" == typeof clearTimeout ? clearTimeout : void 0,
          kd = "function" == typeof Promise ? Promise : void 0,
          Sd =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== kd
                ? function (e) {
                    return kd.resolve(null).then(e).catch(Ed);
                  }
                : xd;
        function Ed(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function Cd(e) {
          return "head" === e;
        }
        function Nd(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data) || "/&" === n) {
                if (0 === r) return (e.removeChild(o), void Bf(t));
                r--;
              } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
              else if ("html" === n) Ad(e.ownerDocument.documentElement);
              else if ("head" === n) {
                Ad((n = e.ownerDocument.head));
                for (var a = n.firstChild; a; ) {
                  var l = a.nextSibling,
                    i = a.nodeName;
                  (a[Ke] ||
                    "SCRIPT" === i ||
                    "STYLE" === i ||
                    ("LINK" === i && "stylesheet" === a.rel.toLowerCase()) ||
                    n.removeChild(a),
                    (a = l));
                }
              } else "body" === n && Ad(e.ownerDocument.body);
            n = o;
          } while (n);
          Bf(t);
        }
        function jd(e, t) {
          var n = e;
          e = 0;
          do {
            var r = n.nextSibling;
            if (
              (1 === n.nodeType
                ? t
                  ? ((n._stashedDisplay = n.style.display), (n.style.display = "none"))
                  : ((n.style.display = n._stashedDisplay || ""),
                    "" === n.getAttribute("style") && n.removeAttribute("style"))
                : 3 === n.nodeType &&
                  (t
                    ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                    : (n.nodeValue = n._stashedText || "")),
              r && 8 === r.nodeType)
            )
              if ("/$" === (n = r.data)) {
                if (0 === e) break;
                e--;
              } else ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
            n = r;
          } while (n);
        }
        function _d(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (_d(n), Qe(n));
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function Pd(e, t) {
          for (; 8 !== e.nodeType; ) {
            if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t)
              return null;
            if (null === (e = Md(e.nextSibling))) return null;
          }
          return e;
        }
        function zd(e) {
          return "$?" === e.data || "$~" === e.data;
        }
        function Td(e) {
          return "$!" === e.data || ("$?" === e.data && "loading" !== e.ownerDocument.readyState);
        }
        function Md(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "$~" === t ||
                "&" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t || "/&" === t) return null;
            }
          }
          return e;
        }
        var Rd = null;
        function Od(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n || "/&" === n) {
                if (0 === t) return Md(e.nextSibling);
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n) || t++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function Ld(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
                if (0 === t) return e;
                t--;
              } else ("/$" !== n && "/&" !== n) || t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function Dd(e, t, n) {
          switch (((t = hd(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(l(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(l(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(l(454));
              return e;
            default:
              throw Error(l(451));
          }
        }
        function Ad(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Qe(e);
        }
        var Fd = new Map(),
          Id = new Set();
        function Hd(e) {
          return "function" == typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var $d = O.d;
        O.d = {
          f: function () {
            var e = $d.f(),
              t = Zc();
            return e || t;
          },
          r: function (e) {
            var t = Ye(e);
            null !== t && 5 === t.tag && "form" === t.type ? ni(t) : $d.r(e);
          },
          D: function (e) {
            ($d.D(e), Ud("dns-prefetch", e, null));
          },
          C: function (e, t) {
            ($d.C(e, t), Ud("preconnect", e, t));
          },
          L: function (e, t, n) {
            $d.L(e, t, n);
            var r = Bd;
            if (r && e && t) {
              var o = 'link[rel="preload"][as="' + gt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((o += '[imagesrcset="' + gt(n.imageSrcSet) + '"]'),
                  "string" == typeof n.imageSizes &&
                    (o += '[imagesizes="' + gt(n.imageSizes) + '"]'))
                : (o += '[href="' + gt(e) + '"]');
              var a = o;
              switch (t) {
                case "style":
                  a = Vd(e);
                  break;
                case "script":
                  a = Qd(e);
              }
              Fd.has(a) ||
                ((e = f(
                  { rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t },
                  n,
                )),
                Fd.set(a, e),
                null !== r.querySelector(o) ||
                  ("style" === t && r.querySelector(qd(a))) ||
                  ("script" === t && r.querySelector(Gd(a))) ||
                  (dd((t = r.createElement("link")), "link", e), Je(t), r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            $d.m(e, t);
            var n = Bd;
            if (n && e) {
              var r = t && "string" == typeof t.as ? t.as : "script",
                o = 'link[rel="modulepreload"][as="' + gt(r) + '"][href="' + gt(e) + '"]',
                a = o;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  a = Qd(e);
              }
              if (
                !Fd.has(a) &&
                ((e = f({ rel: "modulepreload", href: e }, t)),
                Fd.set(a, e),
                null === n.querySelector(o))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Gd(a))) return;
                }
                (dd((r = n.createElement("link")), "link", e), Je(r), n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            $d.X(e, t);
            var n = Bd;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                o = Qd(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Gd(o))) ||
                  ((e = f({ src: e, async: !0 }, t)),
                  (t = Fd.get(o)) && Jd(e, t),
                  Je((a = n.createElement("script"))),
                  dd(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
          S: function (e, t, n) {
            $d.S(e, t, n);
            var r = Bd;
            if (r && e) {
              var o = Ze(r).hoistableStyles,
                a = Vd(e);
              t = t || "default";
              var l = o.get(a);
              if (!l) {
                var i = { loading: 0, preload: null };
                if ((l = r.querySelector(qd(a)))) i.loading = 5;
                else {
                  ((e = f({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
                    (n = Fd.get(a)) && Zd(e, n));
                  var s = (l = r.createElement("link"));
                  (Je(s),
                    dd(s, "link", e),
                    (s._p = new Promise(function (e, t) {
                      ((s.onload = e), (s.onerror = t));
                    })),
                    s.addEventListener("load", function () {
                      i.loading |= 1;
                    }),
                    s.addEventListener("error", function () {
                      i.loading |= 2;
                    }),
                    (i.loading |= 4),
                    Xd(l, t, r));
                }
                ((l = { type: "stylesheet", instance: l, count: 1, state: i }), o.set(a, l));
              }
            }
          },
          M: function (e, t) {
            $d.M(e, t);
            var n = Bd;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                o = Qd(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Gd(o))) ||
                  ((e = f({ src: e, async: !0, type: "module" }, t)),
                  (t = Fd.get(o)) && Jd(e, t),
                  Je((a = n.createElement("script"))),
                  dd(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
        };
        var Bd = "undefined" == typeof document ? null : document;
        function Ud(e, t, n) {
          var r = Bd;
          if (r && "string" == typeof t && t) {
            var o = gt(t);
            ((o = 'link[rel="' + e + '"][href="' + o + '"]'),
              "string" == typeof n && (o += '[crossorigin="' + n + '"]'),
              Id.has(o) ||
                (Id.add(o),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(o) &&
                  (dd((t = r.createElement("link")), "link", e), Je(t), r.head.appendChild(t))));
          }
        }
        function Wd(e, t, n, r) {
          var o,
            a,
            i,
            s,
            c = (c = V.current) ? Hd(c) : null;
          if (!c) throw Error(l(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" == typeof n.precedence && "string" == typeof n.href
                ? ((t = Vd(n.href)),
                  (r = (n = Ze(c).hoistableStyles).get(t)) ||
                    ((r = { type: "style", instance: null, count: 0, state: null }), n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" == typeof n.href &&
                "string" == typeof n.precedence
              ) {
                e = Vd(n.href);
                var u = Ze(c).hoistableStyles,
                  d = u.get(e);
                if (
                  (d ||
                    ((c = c.ownerDocument || c),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    u.set(e, d),
                    (u = c.querySelector(qd(e))) &&
                      !u._p &&
                      ((d.instance = u), (d.state.loading = 5)),
                    Fd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      Fd.set(e, n),
                      u ||
                        ((o = c),
                        (a = e),
                        (i = n),
                        (s = d.state),
                        o.querySelector('link[rel="preload"][as="style"][' + a + "]")
                          ? (s.loading = 1)
                          : ((a = o.createElement("link")),
                            (s.preload = a),
                            a.addEventListener("load", function () {
                              return (s.loading |= 1);
                            }),
                            a.addEventListener("error", function () {
                              return (s.loading |= 2);
                            }),
                            dd(a, "link", i),
                            Je(a),
                            o.head.appendChild(a))))),
                  t && null === r)
                )
                  throw Error(l(528, ""));
                return d;
              }
              if (t && null !== r) throw Error(l(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" == typeof (n = n.src) &&
                t &&
                "function" != typeof t &&
                "symbol" != typeof t
                  ? ((t = Qd(n)),
                    (r = (n = Ze(c).hoistableScripts).get(t)) ||
                      ((r = { type: "script", instance: null, count: 0, state: null }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(l(444, e));
          }
        }
        function Vd(e) {
          return 'href="' + gt(e) + '"';
        }
        function qd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function Kd(e) {
          return f({}, e, { "data-precedence": e.precedence, precedence: null });
        }
        function Qd(e) {
          return '[src="' + gt(e) + '"]';
        }
        function Gd(e) {
          return "script[async]" + e;
        }
        function Yd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector('style[data-href~="' + gt(n.href) + '"]');
                if (r) return ((t.instance = r), Je(r), r);
                var o = f({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Je((r = (e.ownerDocument || e).createElement("style"))),
                  dd(r, "style", o),
                  Xd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                o = Vd(n.href);
                var a = e.querySelector(qd(o));
                if (a) return ((t.state.loading |= 4), (t.instance = a), Je(a), a);
                ((r = Kd(n)),
                  (o = Fd.get(o)) && Zd(r, o),
                  Je((a = (e.ownerDocument || e).createElement("link"))));
                var i = a;
                return (
                  (i._p = new Promise(function (e, t) {
                    ((i.onload = e), (i.onerror = t));
                  })),
                  dd(a, "link", r),
                  (t.state.loading |= 4),
                  Xd(a, n.precedence, e),
                  (t.instance = a)
                );
              case "script":
                return (
                  (a = Qd(n.src)),
                  (o = e.querySelector(Gd(a)))
                    ? ((t.instance = o), Je(o), o)
                    : ((r = n),
                      (o = Fd.get(a)) && Jd((r = f({}, n)), o),
                      Je((o = (e = e.ownerDocument || e).createElement("script"))),
                      dd(o, "link", r),
                      e.head.appendChild(o),
                      (t.instance = o))
                );
              case "void":
                return null;
              default:
                throw Error(l(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              !(4 & t.state.loading) &&
              ((r = t.instance), (t.state.loading |= 4), Xd(r, n.precedence, e));
          return t.instance;
        }
        function Xd(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
              ),
              o = r.length ? r[r.length - 1] : null,
              a = o,
              l = 0;
            l < r.length;
            l++
          ) {
            var i = r[l];
            if (i.dataset.precedence === t) a = i;
            else if (a !== o) break;
          }
          a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Zd(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title));
        }
        function Jd(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity));
        }
        var ef = null;
        function tf(e, t, n) {
          if (null === ef) {
            var r = new Map(),
              o = (ef = new Map());
            o.set(n, r);
          } else (r = (o = ef).get(n)) || ((r = new Map()), o.set(n, r));
          if (r.has(e)) return r;
          for (r.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
            var a = n[o];
            if (
              !(a[Ke] || a[He] || ("link" === e && "stylesheet" === a.getAttribute("rel"))) &&
              "http://www.w3.org/2000/svg" !== a.namespaceURI
            ) {
              var l = a.getAttribute(t) || "";
              l = e + l;
              var i = r.get(l);
              i ? i.push(a) : r.set(l, [a]);
            }
          }
          return r;
        }
        function nf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null,
          );
        }
        function rf(e) {
          return !!("stylesheet" !== e.type || 3 & e.state.loading);
        }
        var of = 0;
        function af() {
          if ((this.count--, 0 === this.count && (0 === this.imgCount || !this.waitingForImages)))
            if (this.stylesheets) sf(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              ((this.unsuspend = null), e());
            }
        }
        var lf = null;
        function sf(e, t) {
          ((e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++, (lf = new Map()), t.forEach(cf, e), (lf = null), af.call(e)));
        }
        function cf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = lf.get(e);
            if (n) var r = n.get(null);
            else {
              ((n = new Map()), lf.set(e, n));
              for (
                var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0;
                a < o.length;
                a++
              ) {
                var l = o[a];
                ("LINK" !== l.nodeName && "not all" === l.getAttribute("media")) ||
                  (n.set(l.dataset.precedence, l), (r = l));
              }
              r && n.set(null, r);
            }
            ((l = (o = t.instance).getAttribute("data-precedence")),
              (a = n.get(l) || r) === r && n.set(null, o),
              n.set(l, o),
              this.count++,
              (r = af.bind(this)),
              o.addEventListener("load", r),
              o.addEventListener("error", r),
              a
                ? a.parentNode.insertBefore(o, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(o, e.firstChild),
              (t.state.loading |= 4));
          }
        }
        var uf = {
          $$typeof: x,
          Provider: null,
          Consumer: null,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
        };
        function df(e, t, n, r, o, a, l, i, s) {
          ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = ze(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ze(0)),
            (this.hiddenUpdates = ze(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = o),
            (this.onCaughtError = a),
            (this.onRecoverableError = l),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = s),
            (this.incompleteTransitions = new Map()));
        }
        function ff(e, t, n, r, o, a) {
          ((o = (function (e) {
            return e ? (e = Lr) : Lr;
          })(o)),
            null === r.context ? (r.context = o) : (r.pendingContext = o),
            ((r = ya(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = ba(e, r, t)) && (Kc(n, 0, t), xa(n, e, t)));
        }
        function pf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function mf(e, t) {
          (pf(e, t), (e = e.alternate) && pf(e, t));
        }
        function hf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Mr(e, 67108864);
            (null !== t && Kc(t, 0, 67108864), mf(e, 67108864));
          }
        }
        function gf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Vc(),
              n = Mr(e, (t = Le(t)));
            (null !== n && Kc(n, 0, t), mf(e, t));
          }
        }
        var vf = !0;
        function yf(e, t, n, r) {
          var o = R.T;
          R.T = null;
          var a = O.p;
          try {
            ((O.p = 2), xf(e, t, n, r));
          } finally {
            ((O.p = a), (R.T = o));
          }
        }
        function bf(e, t, n, r) {
          var o = R.T;
          R.T = null;
          var a = O.p;
          try {
            ((O.p = 8), xf(e, t, n, r));
          } finally {
            ((O.p = a), (R.T = o));
          }
        }
        function xf(e, t, n, r) {
          if (vf) {
            var o = wf(r);
            if (null === o) (ed(e, t, r, kf, n), Rf(e, r));
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return ((Nf = Of(Nf, e, t, n, r, o)), !0);
                  case "dragenter":
                    return ((jf = Of(jf, e, t, n, r, o)), !0);
                  case "mouseover":
                    return ((_f = Of(_f, e, t, n, r, o)), !0);
                  case "pointerover":
                    var a = o.pointerId;
                    return (Pf.set(a, Of(Pf.get(a) || null, e, t, n, r, o)), !0);
                  case "gotpointercapture":
                    return ((a = o.pointerId), zf.set(a, Of(zf.get(a) || null, e, t, n, r, o)), !0);
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rf(e, r), 4 & t && -1 < Mf.indexOf(e))) {
              for (; null !== o; ) {
                var a = Ye(o);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                        var l = Ce(a.pendingLanes);
                        if (0 !== l) {
                          var i = a;
                          for (i.pendingLanes |= 2, i.entangledLanes |= 2; l; ) {
                            var s = 1 << (31 - be(l));
                            ((i.entanglements[1] |= s), (l &= ~s));
                          }
                          (Ou(a), !(6 & fc) && ((Rc = ie() + 500), Lu(0, !1)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      (null !== (i = Mr(a, 2)) && Kc(i, 0, 2), Zc(), mf(a, 2));
                  }
                if ((null === (a = wf(r)) && ed(e, t, r, kf, n), a === o)) break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else ed(e, t, r, null, n);
          }
        }
        function wf(e) {
          return Sf((e = Rt(e)));
        }
        var kf = null;
        function Sf(e) {
          if (((kf = null), null !== (e = Ge(e)))) {
            var t = i(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = s(t))) return e;
                e = null;
              } else if (31 === n) {
                if (null !== (e = c(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return ((kf = e), null);
        }
        function Ef(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (se()) {
                case ce:
                  return 2;
                case ue:
                  return 8;
                case de:
                case fe:
                  return 32;
                case pe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Cf = !1,
          Nf = null,
          jf = null,
          _f = null,
          Pf = new Map(),
          zf = new Map(),
          Tf = [],
          Mf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function Rf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nf = null;
              break;
            case "dragenter":
            case "dragleave":
              jf = null;
              break;
            case "mouseover":
            case "mouseout":
              _f = null;
              break;
            case "pointerover":
            case "pointerout":
              Pf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zf.delete(t.pointerId);
          }
        }
        function Of(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = Ye(t)) && hf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Lf(e) {
          var t = Ge(e.target);
          if (null !== t) {
            var n = i(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = s(n)))
                  return (
                    (e.blockedOn = t),
                    void Fe(e.priority, function () {
                      gf(n);
                    })
                  );
              } else if (31 === t) {
                if (null !== (t = c(n)))
                  return (
                    (e.blockedOn = t),
                    void Fe(e.priority, function () {
                      gf(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Df(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = wf(e.nativeEvent);
            if (null !== n) return (null !== (t = Ye(n)) && hf(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Mt = r), n.target.dispatchEvent(r), (Mt = null), t.shift());
          }
          return !0;
        }
        function Af(e, t, n) {
          Df(e) && n.delete(t);
        }
        function Ff() {
          ((Cf = !1),
            null !== Nf && Df(Nf) && (Nf = null),
            null !== jf && Df(jf) && (jf = null),
            null !== _f && Df(_f) && (_f = null),
            Pf.forEach(Af),
            zf.forEach(Af));
        }
        function If(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Cf || ((Cf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Ff)));
        }
        var Hf = null;
        function $f(e) {
          Hf !== e &&
            ((Hf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              Hf === e && (Hf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  o = e[t + 2];
                if ("function" != typeof r) {
                  if (null === Sf(r || n)) continue;
                  break;
                }
                var a = Ye(n);
                null !== a &&
                  (e.splice(t, 3),
                  (t -= 3),
                  ei(a, { pending: !0, data: o, method: n.method, action: r }, r, o));
              }
            }));
        }
        function Bf(e) {
          function t(t) {
            return If(t, e);
          }
          (null !== Nf && If(Nf, e),
            null !== jf && If(jf, e),
            null !== _f && If(_f, e),
            Pf.forEach(t),
            zf.forEach(t));
          for (var n = 0; n < Tf.length; n++) {
            var r = Tf[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < Tf.length && null === (n = Tf[0]).blockedOn; )
            (Lf(n), null === n.blockedOn && Tf.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var o = n[r],
                a = n[r + 1],
                l = o[$e] || null;
              if ("function" == typeof a) l || $f(n);
              else if (l) {
                var i = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((o = a), (l = a[$e] || null))) i = l.formAction;
                  else if (null !== Sf(o)) continue;
                } else i = l.action;
                ("function" == typeof i ? (n[r + 1] = i) : (n.splice(r, 3), (r -= 3)), $f(n));
              }
            }
        }
        function Uf() {
          function e(e) {
            e.canIntercept &&
              "react-transition" === e.info &&
              e.intercept({
                handler: function () {
                  return new Promise(function (e) {
                    return (o = e);
                  });
                },
                focusReset: "manual",
                scroll: "manual",
              });
          }
          function t() {
            (null !== o && (o(), (o = null)), r || setTimeout(n, 20));
          }
          function n() {
            if (!r && !navigation.transition) {
              var e = navigation.currentEntry;
              e &&
                null != e.url &&
                navigation.navigate(e.url, {
                  state: e.getState(),
                  info: "react-transition",
                  history: "replace",
                });
            }
          }
          if ("object" == typeof navigation) {
            var r = !1,
              o = null;
            return (
              navigation.addEventListener("navigate", e),
              navigation.addEventListener("navigatesuccess", t),
              navigation.addEventListener("navigateerror", t),
              setTimeout(n, 100),
              function () {
                ((r = !0),
                  navigation.removeEventListener("navigate", e),
                  navigation.removeEventListener("navigatesuccess", t),
                  navigation.removeEventListener("navigateerror", t),
                  null !== o && (o(), (o = null)));
              }
            );
          }
        }
        function Wf(e) {
          this._internalRoot = e;
        }
        function Vf(e) {
          this._internalRoot = e;
        }
        ((Vf.prototype.render = Wf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            ff(t.current, Vc(), e, t, null, null);
          }),
          (Vf.prototype.unmount = Wf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (ff(e.current, 2, null, e, null, null), Zc(), (t[Be] = null));
              }
            }),
          (Vf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ae();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Tf.length && 0 !== t && t < Tf[n].priority; n++);
              (Tf.splice(n, 0, e), 0 === n && Lf(e));
            }
          }));
        var qf = o.version;
        if ("19.2.4" !== qf) throw Error(l(527, qf, "19.2.4"));
        O.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(l(188));
            throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = i(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return (u(o), e);
                    if (a === r) return (u(o), t);
                    a = a.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) ((n = o), (r = a));
                else {
                  for (var s = !1, c = o.child; c; ) {
                    if (c === n) {
                      ((s = !0), (n = o), (r = a));
                      break;
                    }
                    if (c === r) {
                      ((s = !0), (r = o), (n = a));
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!s) {
                    for (c = a.child; c; ) {
                      if (c === n) {
                        ((s = !0), (n = a), (r = o));
                        break;
                      }
                      if (c === r) {
                        ((s = !0), (r = a), (n = o));
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!s) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            null === (e = null !== e ? d(e) : null) ? null : e.stateNode
          );
        };
        var Kf = {
          bundleType: 0,
          version: "19.2.4",
          rendererPackageName: "react-dom",
          currentDispatcherRef: R,
          reconcilerVersion: "19.2.4",
        };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Qf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Qf.isDisabled && Qf.supportsFiber)
            try {
              ((ge = Qf.inject(Kf)), (ve = Qf));
            } catch (e) {}
        }
        t.createRoot = function (e, t) {
          if (!(n = e) || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType))
            throw Error(l(299));
          var n,
            r = !1,
            o = "",
            a = Si,
            i = Ei,
            s = Ci;
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (r = !0),
              void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (i = t.onCaughtError),
              void 0 !== t.onRecoverableError && (s = t.onRecoverableError)),
            (t = (function (e, t, n, r, o, a, l, i, s, c, u, d) {
              return (
                (e = new df(e, t, n, l, s, c, u, d, i)),
                (t = 1),
                !0 === a && (t |= 24),
                (a = Ar(3, null, null, t)),
                (e.current = a),
                (a.stateNode = e),
                (t = Io()).refCount++,
                (e.pooledCache = t),
                t.refCount++,
                (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
                ga(a),
                e
              );
            })(e, 1, !1, null, 0, r, o, null, a, i, s, Uf)),
            (e[Be] = t.current),
            Zu(e),
            new Wf(t)
          );
        };
      },
      221(e, t, n) {
        var r = n(540);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function a() {}
        var l = {
            d: {
              f: a,
              r: function () {
                throw Error(o(522));
              },
              D: a,
              C: a,
              L: a,
              m: a,
              X: a,
              S: a,
              M: a,
            },
            p: 0,
            findDOMNode: null,
          },
          i = Symbol.for("react.portal"),
          s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function c(e, t) {
          return "font" === e
            ? ""
            : "string" == typeof t
              ? "use-credentials" === t
                ? t
                : ""
              : void 0;
        }
        ((t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType))
              throw Error(o(299));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: i,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = s.T,
              n = l.p;
            try {
              if (((s.T = null), (l.p = 2), e)) return e();
            } finally {
              ((s.T = t), (l.p = n), l.d.f());
            }
          }),
          (t.preconnect = function (e, t) {
            "string" == typeof e &&
              ((t = t
                ? "string" == typeof (t = t.crossOrigin)
                  ? "use-credentials" === t
                    ? t
                    : ""
                  : void 0
                : null),
              l.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" == typeof e && l.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" == typeof e && t && "string" == typeof t.as) {
              var n = t.as,
                r = c(n, t.crossOrigin),
                o = "string" == typeof t.integrity ? t.integrity : void 0,
                a = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
              "style" === n
                ? l.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a,
                  })
                : "script" === n &&
                  l.d.X(e, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a,
                    nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" == typeof e)
              if ("object" == typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = c(t.as, t.crossOrigin);
                  l.d.M(e, {
                    crossOrigin: n,
                    integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && l.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" == typeof e &&
              "object" == typeof t &&
              null !== t &&
              "string" == typeof t.as
            ) {
              var n = t.as,
                r = c(n, t.crossOrigin);
              l.d.L(e, n, {
                crossOrigin: r,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                type: "string" == typeof t.type ? t.type : void 0,
                fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" == typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" == typeof e)
              if (t) {
                var n = c(t.as, t.crossOrigin);
                l.d.m(e, {
                  as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                  crossOrigin: n,
                  integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                });
              } else l.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            l.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return s.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return s.H.useHostTransitionStatus();
          }),
          (t.version = "19.2.4"));
      },
      338(e, t, n) {
        (!(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(247)));
      },
      961(e, t, n) {
        (!(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(221)));
      },
      434(e, t, n) {
        var r = n(540).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        t.c = function (e) {
          return r.H.useMemoCache(e);
        };
      },
      698(e, t) {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");
        function o(e, t, r) {
          var o = null;
          if ((void 0 !== r && (o = "" + r), void 0 !== t.key && (o = "" + t.key), "key" in t))
            for (var a in ((r = {}), t)) "key" !== a && (r[a] = t[a]);
          else r = t;
          return (
            (t = r.ref), { $$typeof: n, type: e, key: o, ref: void 0 !== t ? t : null, props: r }
          );
        }
        ((t.Fragment = r), (t.jsx = o), (t.jsxs = o));
      },
      869(e, t) {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.consumer"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.for("react.activity"),
          m = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          v = {};
        function y(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h));
        }
        function b() {}
        function x(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h));
        }
        ((y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = y.prototype));
        var w = (x.prototype = new b());
        ((w.constructor = x), g(w, y.prototype), (w.isPureReactComponent = !0));
        var k = Array.isArray;
        function S() {}
        var E = { H: null, A: null, T: null, S: null },
          C = Object.prototype.hasOwnProperty;
        function N(e, t, r) {
          var o = r.ref;
          return { $$typeof: n, type: e, key: t, ref: void 0 !== o ? o : null, props: r };
        }
        function j(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function P(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? ((n = "" + e.key),
              (r = { "=": "=0", ":": "=2" }),
              "$" +
                n.replace(/[=:]/g, function (e) {
                  return r[e];
                }))
            : t.toString(36);
          var n, r;
        }
        function z(e, t, o, a, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s,
            c,
            u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                    break;
                  case f:
                    return z((u = e._init)(e._payload), t, o, a, l);
                }
            }
          if (u)
            return (
              (l = l(e)),
              (u = "" === a ? "." + P(e, 0) : a),
              k(l)
                ? ((o = ""),
                  null != u && (o = u.replace(_, "$&/") + "/"),
                  z(l, t, o, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (j(l) &&
                    ((s = l),
                    (c =
                      o +
                      (null == l.key || (e && e.key === l.key)
                        ? ""
                        : ("" + l.key).replace(_, "$&/") + "/") +
                      u),
                    (l = N(s.type, c, s.props))),
                  t.push(l)),
              1
            );
          u = 0;
          var d,
            p = "" === a ? "." : a + ":";
          if (k(e))
            for (var h = 0; h < e.length; h++) u += z((a = e[h]), t, o, (i = p + P(a, h)), l);
          else if (
            "function" ==
            typeof (h =
              null === (d = e) || "object" != typeof d
                ? null
                : "function" == typeof (d = (m && d[m]) || d["@@iterator"])
                  ? d
                  : null)
          )
            for (e = h.call(e), h = 0; !(a = e.next()).done; )
              u += z((a = a.value), t, o, (i = p + P(a, h++)), l);
          else if ("object" === i) {
            if ("function" == typeof e.then)
              return z(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" == typeof e.status
                          ? e.then(S, S)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status && ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status && ((e.status = "rejected"), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                o,
                a,
                l,
              );
            throw (
              (t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          }
          return u;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            z(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function M(e) {
          if (-1 === e._status) {
            var t = e._result;
            ((t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R =
            "function" == typeof reportError
              ? reportError
              : function (e) {
                  if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" == typeof e && null !== e && "string" == typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if ("object" == typeof process && "function" == typeof process.emit)
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          O = {
            map: T,
            forEach: function (e, t, n) {
              T(
                e,
                function () {
                  t.apply(this, arguments);
                },
                n,
              );
            },
            count: function (e) {
              var t = 0;
              return (
                T(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                T(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!j(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return e;
            },
          };
        ((t.Activity = p),
          (t.Children = O),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = l),
          (t.PureComponent = x),
          (t.StrictMode = a),
          (t.Suspense = u),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return E.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cacheSignal = function () {
            return null;
          }),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error("The argument must be a React element, but you passed " + e + ".");
            var r = g({}, e.props),
              o = e.key;
            if (null != t)
              for (a in (void 0 !== t.key && (o = "" + t.key), t))
                !C.call(t, a) ||
                  "key" === a ||
                  "__self" === a ||
                  "__source" === a ||
                  ("ref" === a && void 0 === t.ref) ||
                  (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
              for (var l = Array(a), i = 0; i < a; i++) l[i] = arguments[i + 2];
              r.children = l;
            }
            return N(e.type, o, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: i, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              o = {},
              a = null;
            if (null != t)
              for (r in (void 0 !== t.key && (a = "" + t.key), t))
                C.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (o[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) o.children = n;
            else if (1 < l) {
              for (var i = Array(l), s = 0; s < l; s++) i[s] = arguments[s + 2];
              o.children = i;
            }
            if (e && e.defaultProps)
              for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
            return N(e, a, o);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: M };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = E.T,
              n = {};
            E.T = n;
            try {
              var r = e(),
                o = E.S;
              (null !== o && o(n, r),
                "object" == typeof r && null !== r && "function" == typeof r.then && r.then(S, R));
            } catch (e) {
              R(e);
            } finally {
              (null !== t && null !== n.types && (t.types = n.types), (E.T = t));
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return E.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return E.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return E.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return E.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return E.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return E.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return E.H.useEffect(e, t);
          }),
          (t.useEffectEvent = function (e) {
            return E.H.useEffectEvent(e);
          }),
          (t.useId = function () {
            return E.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return E.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return E.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return E.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return E.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return E.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return E.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return E.H.useRef(e);
          }),
          (t.useState = function (e) {
            return E.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return E.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return E.H.useTransition();
          }),
          (t.version = "19.2.4"));
      },
      522(e, t, n) {
        e.exports = n(434);
      },
      540(e, t, n) {
        e.exports = n(869);
      },
      848(e, t, n) {
        e.exports = n(698);
      },
      477(e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            ((e[r] = t), (e[n] = o), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, l = o >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                c = i + 1,
                u = e[c];
              if (0 > a(s, n))
                c < o && 0 > a(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(c < o && 0 > a(u, n))) break e;
                ((e[r] = u), (e[c] = n), (r = c));
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" == typeof performance && "function" == typeof performance.now)
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          v = !1,
          y = "function" == typeof setTimeout ? setTimeout : null,
          b = "function" == typeof clearTimeout ? clearTimeout : null,
          x = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) o(u);
            else {
              if (!(t.startTime <= e)) break;
              (o(u), (t.sortIndex = t.expirationTime), n(c, t));
            }
            t = r(u);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !h))
            if (null !== r(c)) ((h = !0), E || ((E = !0), S()));
            else {
              var t = r(u);
              null !== t && M(k, t.startTime - e);
            }
        }
        var S,
          E = !1,
          C = -1,
          N = 5,
          j = -1;
        function _() {
          return !(!v && t.unstable_now() - j < N);
        }
        function P() {
          if (((v = !1), E)) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              e: {
                ((h = !1), g && ((g = !1), b(C), (C = -1)), (m = !0));
                var a = p;
                try {
                  t: {
                    for (w(e), f = r(c); null !== f && !(f.expirationTime > e && _()); ) {
                      var l = f.callback;
                      if ("function" == typeof l) {
                        ((f.callback = null), (p = f.priorityLevel));
                        var i = l(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" == typeof i)) {
                          ((f.callback = i), w(e), (n = !0));
                          break t;
                        }
                        (f === r(c) && o(c), w(e));
                      } else o(c);
                      f = r(c);
                    }
                    if (null !== f) n = !0;
                    else {
                      var s = r(u);
                      (null !== s && M(k, s.startTime - e), (n = !1));
                    }
                  }
                  break e;
                } finally {
                  ((f = null), (p = a), (m = !1));
                }
                n = void 0;
              }
            } finally {
              n ? S() : (E = !1);
            }
          }
        }
        if ("function" == typeof x)
          S = function () {
            x(P);
          };
        else if ("undefined" != typeof MessageChannel) {
          var z = new MessageChannel(),
            T = z.port2;
          ((z.port1.onmessage = P),
            (S = function () {
              T.postMessage(null);
            }));
        } else
          S = function () {
            y(P, 0);
          };
        function M(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            v = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var l = t.unstable_now();
            switch (
              ((a =
                "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a
                  ? l + a
                  : l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (i = a + i),
                sortIndex: -1,
              }),
              a > l
                ? ((e.sortIndex = a),
                  n(u, e),
                  null === r(c) && e === r(u) && (g ? (b(C), (C = -1)) : (g = !0), M(k, a - l)))
                : ((e.sortIndex = i), n(c, e), h || m || ((h = !0), E || ((E = !0), S()))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          }));
      },
      982(e, t, n) {
        e.exports = n(477);
      },
      493(e, t, n) {
        var r = n(540),
          o =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                },
          a = r.useState,
          l = r.useEffect,
          i = r.useLayoutEffect,
          s = r.useDebugValue;
        function c(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !o(e, n);
          } catch (e) {
            return !0;
          }
        }
        var u =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = a({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  u = r[1];
                return (
                  i(
                    function () {
                      ((o.value = n), (o.getSnapshot = t), c(o) && u({ inst: o }));
                    },
                    [e, n, t],
                  ),
                  l(
                    function () {
                      return (
                        c(o) && u({ inst: o }),
                        e(function () {
                          c(o) && u({ inst: o });
                        })
                      );
                    },
                    [e],
                  ),
                  s(n),
                  n
                );
              };
        t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
      },
      888(e, t, n) {
        e.exports = n(493);
      },
    },
    o = {};
  function a(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var n = (o[e] = { exports: {} });
    return (r[e](n, n.exports, a), n.exports);
  }
  ((a.m = r),
    (e = []),
    (a.O = (t, n, r, o) => {
      if (!n) {
        var l = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, r, o] = e[u], i = !0, s = 0; s < n.length; s++)
            (!1 & o || l >= o) && Object.keys(a.O).every((e) => a.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((i = !1), o < l && (l = o));
          if (i) {
            e.splice(u--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
      e[u] = [n, r, o];
    }),
    (n = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (a.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      a.r(o);
      var l = {};
      t = t || [null, n({}), n([]), n(n)];
      for (
        var i = 2 & r && e;
        ("object" == typeof i || "function" == typeof i) && !~t.indexOf(i);
        i = n(i)
      )
        Object.getOwnPropertyNames(i).forEach((t) => (l[t] = () => e[t]));
      return ((l.default = () => e), a.d(o, l), o);
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e = { 651: 0, 869: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            o,
            [l, i, s] = n,
            c = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (r in i) a.o(i, r) && (a.m[r] = i[r]);
            if (s) var u = s(a);
          }
          for (t && t(n); c < l.length; c++)
            ((o = l[c]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
          return a.O(u);
        },
        n = (self.webpackChunkrit_igme430 = self.webpackChunkrit_igme430 || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })(),
    (a.nc = void 0));
  var l = a.O(void 0, [869], () => a(566));
  l = a.O(l);
})();
