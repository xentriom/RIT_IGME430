/*! For license information please see profileBundle.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n,
    r = {
      978(e, t, n) {
        var r = n(540),
          a = n.t(r, 2),
          o = n(338),
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
                absoluteStrokeWidth: a,
                className: o = "",
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
                b = (a ?? g) ? (24 * Number(n ?? h)) / Number(t ?? m) : (n ?? h);
              return (0, r.createElement)(
                "svg",
                {
                  ref: p,
                  ...c,
                  width: t ?? m ?? c.width,
                  height: t ?? m ?? c.height,
                  stroke: e ?? v,
                  strokeWidth: b,
                  className: i("lucide", y, o),
                  ...(!l && !u(f) && { "aria-hidden": "true" }),
                  ...f,
                },
                [...s.map(([e, t]) => (0, r.createElement)(e, t)), ...(Array.isArray(l) ? l : [l])],
              );
            },
          ),
          p = (e, t) => {
            const n = (0, r.forwardRef)(({ className: n, ...a }, o) => {
              return (0, r.createElement)(f, {
                ref: o,
                iconNode: t,
                className: i(
                  `lucide-${((l = s(e)), l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`,
                  `lucide-${e}`,
                  n,
                ),
                ...a,
              });
              var l;
            });
            return ((n.displayName = s(e)), n);
          },
          m = p("house", [
            ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
            [
              "path",
              {
                d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                key: "r6nss1",
              },
            ],
          ]),
          h = p("search", [
            ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
            ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ]),
          g = p("bell", [
            ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
            [
              "path",
              {
                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
                key: "11g9vi",
              },
            ],
          ]),
          v = p("user-plus", [
            ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
            ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
            ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
            ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
          ]),
          y = p("message-circle", [
            [
              "path",
              {
                d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
                key: "1sd12s",
              },
            ],
          ]),
          b = p("sparkles", [
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
          w = p("bookmark", [
            [
              "path",
              {
                d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
                key: "oz39mx",
              },
            ],
          ]),
          x = p("rocket", [
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
          k = p("crown", [
            [
              "path",
              {
                d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
                key: "1vdc57",
              },
            ],
            ["path", { d: "M5 21h14", key: "11awu3" }],
          ]),
          S = p("user", [
            ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
            ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
          ]),
          E = p("zap", [
            [
              "path",
              {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db",
              },
            ],
          ]),
          C = p("square-arrow-out-up-right", [
            [
              "path",
              { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" },
            ],
            ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
            ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
          ]),
          N = p("settings", [
            [
              "path",
              {
                d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                key: "1i5ecw",
              },
            ],
            ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
          ]),
          _ = p("log-out", [
            ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
            ["path", { d: "M21 12H9", key: "dn1m92" }],
            ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
          ]),
          j = p("log-in", [
            ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
            ["path", { d: "M15 12H3", key: "6jk70r" }],
            ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
          ]);
        function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
          return function (r) {
            if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
          };
        }
        function z(e, t) {
          if ("function" == typeof e) return e(t);
          null != e && (e.current = t);
        }
        function T(...e) {
          return (t) => {
            let n = !1;
            const r = e.map((e) => {
              const r = z(e, t);
              return (n || "function" != typeof r || (n = !0), r);
            });
            if (n)
              return () => {
                for (let t = 0; t < r.length; t++) {
                  const n = r[t];
                  "function" == typeof n ? n() : z(e[t], null);
                }
              };
          };
        }
        function M(...e) {
          return r.useCallback(T(...e), e);
        }
        "undefined" == typeof window || !window.document || window.document.createElement;
        var O = n(848);
        function R(e, t = []) {
          let n = [];
          const a = () => {
            const t = n.map((e) => r.createContext(e));
            return function (n) {
              const a = n?.[e] || t;
              return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: a } }), [n, a]);
            };
          };
          return (
            (a.scopeName = e),
            [
              function (t, a) {
                const o = r.createContext(a),
                  l = n.length;
                n = [...n, a];
                const i = (t) => {
                  const { scope: n, children: a, ...i } = t,
                    s = n?.[e]?.[l] || o,
                    c = r.useMemo(() => i, Object.values(i));
                  return (0, O.jsx)(s.Provider, { value: c, children: a });
                };
                return (
                  (i.displayName = t + "Provider"),
                  [
                    i,
                    function (n, i) {
                      const s = i?.[e]?.[l] || o,
                        c = r.useContext(s);
                      if (c) return c;
                      if (void 0 !== a) return a;
                      throw new Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              L(a, ...t),
            ]
          );
        }
        function L(...e) {
          const t = e[0];
          if (1 === e.length) return t;
          const n = () => {
            const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
            return function (e) {
              const a = n.reduce(
                (t, { useScope: n, scopeName: r }) => ({ ...t, ...n(e)[`__scope${r}`] }),
                {},
              );
              return r.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
            };
          };
          return ((n.scopeName = t.scopeName), n);
        }
        var D = n(961);
        function A(e) {
          const t = I(e),
            n = r.forwardRef((e, n) => {
              const { children: a, ...o } = e,
                l = r.Children.toArray(a),
                i = l.find(B);
              if (i) {
                const e = i.props.children,
                  a = l.map((t) =>
                    t === i
                      ? r.Children.count(e) > 1
                        ? r.Children.only(null)
                        : r.isValidElement(e)
                          ? e.props.children
                          : null
                      : t,
                  );
                return (0, O.jsx)(t, {
                  ...o,
                  ref: n,
                  children: r.isValidElement(e) ? r.cloneElement(e, void 0, a) : null,
                });
              }
              return (0, O.jsx)(t, { ...o, ref: n, children: a });
            });
          return ((n.displayName = `${e}.Slot`), n);
        }
        var F = A("Slot");
        function I(e) {
          const t = r.forwardRef((e, t) => {
            const { children: n, ...a } = e;
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
                o = (function (e, t) {
                  const n = { ...t };
                  for (const r in t) {
                    const a = e[r],
                      o = t[r];
                    /^on[A-Z]/.test(r)
                      ? a && o
                        ? (n[r] = (...e) => {
                            const t = o(...e);
                            return (a(...e), t);
                          })
                        : a && (n[r] = a)
                      : "style" === r
                        ? (n[r] = { ...a, ...o })
                        : "className" === r && (n[r] = [a, o].filter(Boolean).join(" "));
                  }
                  return { ...e, ...n };
                })(a, n.props);
              return (n.type !== r.Fragment && (o.ref = t ? T(t, e) : e), r.cloneElement(n, o));
            }
            return r.Children.count(n) > 1 ? r.Children.only(null) : null;
          });
          return ((t.displayName = `${e}.SlotClone`), t);
        }
        var $ = Symbol("radix.slottable");
        function B(e) {
          return (
            r.isValidElement(e) &&
            "function" == typeof e.type &&
            "__radixId" in e.type &&
            e.type.__radixId === $
          );
        }
        var H = [
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
          const n = A(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const { asChild: a, ...o } = e,
                l = a ? n : t;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, O.jsx)(l, { ...o, ref: r })
              );
            });
          return ((a.displayName = `Primitive.${t}`), { ...e, [t]: a });
        }, {});
        function U(e, t) {
          e && D.flushSync(() => e.dispatchEvent(t));
        }
        function W(e) {
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
        var V,
          q = "dismissableLayer.update",
          K = r.createContext({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          }),
          Q = r.forwardRef((e, t) => {
            const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: o,
                onFocusOutside: l,
                onInteractOutside: i,
                onDismiss: s,
                ...c
              } = e,
              u = r.useContext(K),
              [d, f] = r.useState(null),
              p = d?.ownerDocument ?? globalThis?.document,
              [, m] = r.useState({}),
              h = M(t, (e) => f(e)),
              g = Array.from(u.layers),
              [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
              y = g.indexOf(v),
              b = d ? g.indexOf(d) : -1,
              w = u.layersWithOutsidePointerEventsDisabled.size > 0,
              x = b >= y,
              k = (function (e, t = globalThis?.document) {
                const n = W(e),
                  a = r.useRef(!1),
                  o = r.useRef(() => {});
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                        if (e.target && !a.current) {
                          let r = function () {
                            G("dismissableLayer.pointerDownOutside", n, a, { discrete: !0 });
                          };
                          const a = { originalEvent: e };
                          "touch" === e.pointerType
                            ? (t.removeEventListener("click", o.current),
                              (o.current = r),
                              t.addEventListener("click", o.current, { once: !0 }))
                            : r();
                        } else t.removeEventListener("click", o.current);
                        a.current = !1;
                      },
                      r = window.setTimeout(() => {
                        t.addEventListener("pointerdown", e);
                      }, 0);
                    return () => {
                      (window.clearTimeout(r),
                        t.removeEventListener("pointerdown", e),
                        t.removeEventListener("click", o.current));
                    };
                  }, [t, n]),
                  { onPointerDownCapture: () => (a.current = !0) }
                );
              })((e) => {
                const t = e.target,
                  n = [...u.branches].some((e) => e.contains(t));
                x && !n && (o?.(e), i?.(e), e.defaultPrevented || s?.());
              }, p),
              S = (function (e, t = globalThis?.document) {
                const n = W(e),
                  a = r.useRef(!1);
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                      e.target &&
                        !a.current &&
                        G(
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
                  { onFocusCapture: () => (a.current = !0), onBlurCapture: () => (a.current = !1) }
                );
              })((e) => {
                const t = e.target;
                [...u.branches].some((e) => e.contains(t)) ||
                  (l?.(e), i?.(e), e.defaultPrevented || s?.());
              }, p);
            return (
              (function (e, t = globalThis?.document) {
                const n = W(e);
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
                  (a?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
              }, p),
              r.useEffect(() => {
                if (d)
                  return (
                    n &&
                      (0 === u.layersWithOutsidePointerEventsDisabled.size &&
                        ((V = p.body.style.pointerEvents), (p.body.style.pointerEvents = "none")),
                      u.layersWithOutsidePointerEventsDisabled.add(d)),
                    u.layers.add(d),
                    Y(),
                    () => {
                      n &&
                        1 === u.layersWithOutsidePointerEventsDisabled.size &&
                        (p.body.style.pointerEvents = V);
                    }
                  );
              }, [d, p, n, u]),
              r.useEffect(
                () => () => {
                  d &&
                    (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Y());
                },
                [d, u],
              ),
              r.useEffect(() => {
                const e = () => m({});
                return (document.addEventListener(q, e), () => document.removeEventListener(q, e));
              }, []),
              (0, O.jsx)(H.div, {
                ...c,
                ref: h,
                style: { pointerEvents: w ? (x ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: P(e.onFocusCapture, S.onFocusCapture),
                onBlurCapture: P(e.onBlurCapture, S.onBlurCapture),
                onPointerDownCapture: P(e.onPointerDownCapture, k.onPointerDownCapture),
              })
            );
          });
        function Y() {
          const e = new CustomEvent(q);
          document.dispatchEvent(e);
        }
        function G(e, t, n, { discrete: r }) {
          const a = n.originalEvent.target,
            o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
          (t && a.addEventListener(e, t, { once: !0 }), r ? U(a, o) : a.dispatchEvent(o));
        }
        ((Q.displayName = "DismissableLayer"),
          (r.forwardRef((e, t) => {
            const n = r.useContext(K),
              a = r.useRef(null),
              o = M(t, a);
            return (
              r.useEffect(() => {
                const e = a.current;
                if (e)
                  return (
                    n.branches.add(e),
                    () => {
                      n.branches.delete(e);
                    }
                  );
              }, [n.branches]),
              (0, O.jsx)(H.div, { ...e, ref: o })
            );
          }).displayName = "DismissableLayerBranch"));
        var X = globalThis?.document ? r.useLayoutEffect : () => {},
          Z = a[" useId ".trim().toString()] || (() => {}),
          J = 0;
        function ee(e) {
          const [t, n] = r.useState(Z());
          return (
            X(() => {
              e || n((e) => e ?? String(J++));
            }, [e]),
            e || (t ? `radix-${t}` : "")
          );
        }
        const te = ["top", "right", "bottom", "left"],
          ne = Math.min,
          re = Math.max,
          ae = Math.round,
          oe = Math.floor,
          le = (e) => ({ x: e, y: e }),
          ie = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function se(e, t, n) {
          return re(e, ne(t, n));
        }
        function ce(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function ue(e) {
          return e.split("-")[0];
        }
        function de(e) {
          return e.split("-")[1];
        }
        function fe(e) {
          return "x" === e ? "y" : "x";
        }
        function pe(e) {
          return "y" === e ? "height" : "width";
        }
        function me(e) {
          const t = e[0];
          return "t" === t || "b" === t ? "y" : "x";
        }
        function he(e) {
          return fe(me(e));
        }
        function ge(e) {
          return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
        }
        const ve = ["left", "right"],
          ye = ["right", "left"],
          be = ["top", "bottom"],
          we = ["bottom", "top"];
        function xe(e) {
          const t = ue(e);
          return ie[t] + e.slice(t.length);
        }
        function ke(e) {
          return "number" != typeof e
            ? (function (e) {
                return { top: 0, right: 0, bottom: 0, left: 0, ...e };
              })(e)
            : { top: e, right: e, bottom: e, left: e };
        }
        function Se(e) {
          const { x: t, y: n, width: r, height: a } = e;
          return { width: r, height: a, top: n, left: t, right: t + r, bottom: n + a, x: t, y: n };
        }
        function Ee(e, t, n) {
          let { reference: r, floating: a } = e;
          const o = me(t),
            l = he(t),
            i = pe(l),
            s = ue(t),
            c = "y" === o,
            u = r.x + r.width / 2 - a.width / 2,
            d = r.y + r.height / 2 - a.height / 2,
            f = r[i] / 2 - a[i] / 2;
          let p;
          switch (s) {
            case "top":
              p = { x: u, y: r.y - a.height };
              break;
            case "bottom":
              p = { x: u, y: r.y + r.height };
              break;
            case "right":
              p = { x: r.x + r.width, y: d };
              break;
            case "left":
              p = { x: r.x - a.width, y: d };
              break;
            default:
              p = { x: r.x, y: r.y };
          }
          switch (de(t)) {
            case "start":
              p[l] -= f * (n && c ? -1 : 1);
              break;
            case "end":
              p[l] += f * (n && c ? -1 : 1);
          }
          return p;
        }
        async function Ce(e, t) {
          var n;
          void 0 === t && (t = {});
          const { x: r, y: a, platform: o, rects: l, elements: i, strategy: s } = e,
            {
              boundary: c = "clippingAncestors",
              rootBoundary: u = "viewport",
              elementContext: d = "floating",
              altBoundary: f = !1,
              padding: p = 0,
            } = ce(t, e),
            m = ke(p),
            h = i[f ? ("floating" === d ? "reference" : "floating") : d],
            g = Se(
              await o.getClippingRect({
                element:
                  null == (n = await (null == o.isElement ? void 0 : o.isElement(h))) || n
                    ? h
                    : h.contextElement ||
                      (await (null == o.getDocumentElement
                        ? void 0
                        : o.getDocumentElement(i.floating))),
                boundary: c,
                rootBoundary: u,
                strategy: s,
              }),
            ),
            v =
              "floating" === d
                ? { x: r, y: a, width: l.floating.width, height: l.floating.height }
                : l.reference,
            y = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(i.floating)),
            b = ((await (null == o.isElement ? void 0 : o.isElement(y))) &&
              (await (null == o.getScale ? void 0 : o.getScale(y)))) || { x: 1, y: 1 },
            w = Se(
              o.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: i,
                    rect: v,
                    offsetParent: y,
                    strategy: s,
                  })
                : v,
            );
          return {
            top: (g.top - w.top + m.top) / b.y,
            bottom: (w.bottom - g.bottom + m.bottom) / b.y,
            left: (g.left - w.left + m.left) / b.x,
            right: (w.right - g.right + m.right) / b.x,
          };
        }
        function Ne(e, t) {
          return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width,
          };
        }
        function _e(e) {
          return te.some((t) => e[t] >= 0);
        }
        const je = new Set(["left", "top"]);
        function Pe() {
          return "undefined" != typeof window;
        }
        function ze(e) {
          return Oe(e) ? (e.nodeName || "").toLowerCase() : "#document";
        }
        function Te(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
        }
        function Me(e) {
          var t;
          return null == (t = (Oe(e) ? e.ownerDocument : e.document) || window.document)
            ? void 0
            : t.documentElement;
        }
        function Oe(e) {
          return !!Pe() && (e instanceof Node || e instanceof Te(e).Node);
        }
        function Re(e) {
          return !!Pe() && (e instanceof Element || e instanceof Te(e).Element);
        }
        function Le(e) {
          return !!Pe() && (e instanceof HTMLElement || e instanceof Te(e).HTMLElement);
        }
        function De(e) {
          return (
            !(!Pe() || "undefined" == typeof ShadowRoot) &&
            (e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot)
          );
        }
        function Ae(e) {
          const { overflow: t, overflowX: n, overflowY: r, display: a } = Ke(e);
          return (
            /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== a && "contents" !== a
          );
        }
        function Fe(e) {
          return /^(table|td|th)$/.test(ze(e));
        }
        function Ie(e) {
          try {
            if (e.matches(":popover-open")) return !0;
          } catch (e) {}
          try {
            return e.matches(":modal");
          } catch (e) {
            return !1;
          }
        }
        const $e = /transform|translate|scale|rotate|perspective|filter/,
          Be = /paint|layout|strict|content/,
          He = (e) => !!e && "none" !== e;
        let Ue;
        function We(e) {
          const t = Re(e) ? Ke(e) : e;
          return (
            He(t.transform) ||
            He(t.translate) ||
            He(t.scale) ||
            He(t.rotate) ||
            He(t.perspective) ||
            (!Ve() && (He(t.backdropFilter) || He(t.filter))) ||
            $e.test(t.willChange || "") ||
            Be.test(t.contain || "")
          );
        }
        function Ve() {
          return (
            null == Ue &&
              (Ue =
                "undefined" != typeof CSS &&
                CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")),
            Ue
          );
        }
        function qe(e) {
          return /^(html|body|#document)$/.test(ze(e));
        }
        function Ke(e) {
          return Te(e).getComputedStyle(e);
        }
        function Qe(e) {
          return Re(e)
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
        }
        function Ye(e) {
          if ("html" === ze(e)) return e;
          const t = e.assignedSlot || e.parentNode || (De(e) && e.host) || Me(e);
          return De(t) ? t.host : t;
        }
        function Ge(e) {
          const t = Ye(e);
          return qe(t)
            ? e.ownerDocument
              ? e.ownerDocument.body
              : e.body
            : Le(t) && Ae(t)
              ? t
              : Ge(t);
        }
        function Xe(e, t, n) {
          var r;
          (void 0 === t && (t = []), void 0 === n && (n = !0));
          const a = Ge(e),
            o = a === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = Te(a);
          if (o) {
            const e = Ze(l);
            return t.concat(l, l.visualViewport || [], Ae(a) ? a : [], e && n ? Xe(e) : []);
          }
          return t.concat(a, Xe(a, [], n));
        }
        function Ze(e) {
          return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
        }
        function Je(e) {
          const t = Ke(e);
          let n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0;
          const a = Le(e),
            o = a ? e.offsetWidth : n,
            l = a ? e.offsetHeight : r,
            i = ae(n) !== o || ae(r) !== l;
          return (i && ((n = o), (r = l)), { width: n, height: r, $: i });
        }
        function et(e) {
          return Re(e) ? e : e.contextElement;
        }
        function tt(e) {
          const t = et(e);
          if (!Le(t)) return le(1);
          const n = t.getBoundingClientRect(),
            { width: r, height: a, $: o } = Je(t);
          let l = (o ? ae(n.width) : n.width) / r,
            i = (o ? ae(n.height) : n.height) / a;
          return (
            (l && Number.isFinite(l)) || (l = 1),
            (i && Number.isFinite(i)) || (i = 1),
            { x: l, y: i }
          );
        }
        const nt = le(0);
        function rt(e) {
          const t = Te(e);
          return Ve() && t.visualViewport
            ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
            : nt;
        }
        function at(e, t, n, r) {
          (void 0 === t && (t = !1), void 0 === n && (n = !1));
          const a = e.getBoundingClientRect(),
            o = et(e);
          let l = le(1);
          t && (r ? Re(r) && (l = tt(r)) : (l = tt(e)));
          const i = (function (e, t, n) {
            return (void 0 === t && (t = !1), !(!n || (t && n !== Te(e))) && t);
          })(o, n, r)
            ? rt(o)
            : le(0);
          let s = (a.left + i.x) / l.x,
            c = (a.top + i.y) / l.y,
            u = a.width / l.x,
            d = a.height / l.y;
          if (o) {
            const e = Te(o),
              t = r && Re(r) ? Te(r) : r;
            let n = e,
              a = Ze(n);
            for (; a && r && t !== n; ) {
              const e = tt(a),
                t = a.getBoundingClientRect(),
                r = Ke(a),
                o = t.left + (a.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                l = t.top + (a.clientTop + parseFloat(r.paddingTop)) * e.y;
              ((s *= e.x),
                (c *= e.y),
                (u *= e.x),
                (d *= e.y),
                (s += o),
                (c += l),
                (n = Te(a)),
                (a = Ze(n)));
            }
          }
          return Se({ width: u, height: d, x: s, y: c });
        }
        function ot(e, t) {
          const n = Qe(e).scrollLeft;
          return t ? t.left + n : at(Me(e)).left + n;
        }
        function lt(e, t) {
          const n = e.getBoundingClientRect();
          return { x: n.left + t.scrollLeft - ot(e, n), y: n.top + t.scrollTop };
        }
        function it(e, t, n) {
          let r;
          if ("viewport" === t)
            r = (function (e, t) {
              const n = Te(e),
                r = Me(e),
                a = n.visualViewport;
              let o = r.clientWidth,
                l = r.clientHeight,
                i = 0,
                s = 0;
              if (a) {
                ((o = a.width), (l = a.height));
                const e = Ve();
                (!e || (e && "fixed" === t)) && ((i = a.offsetLeft), (s = a.offsetTop));
              }
              const c = ot(r);
              if (c <= 0) {
                const e = r.ownerDocument,
                  t = e.body,
                  n = getComputedStyle(t),
                  a =
                    ("CSS1Compat" === e.compatMode &&
                      parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                    0,
                  l = Math.abs(r.clientWidth - t.clientWidth - a);
                l <= 25 && (o -= l);
              } else c <= 25 && (o += c);
              return { width: o, height: l, x: i, y: s };
            })(e, n);
          else if ("document" === t)
            r = (function (e) {
              const t = Me(e),
                n = Qe(e),
                r = e.ownerDocument.body,
                a = re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                o = re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
              let l = -n.scrollLeft + ot(e);
              const i = -n.scrollTop;
              return (
                "rtl" === Ke(r).direction && (l += re(t.clientWidth, r.clientWidth) - a),
                { width: a, height: o, x: l, y: i }
              );
            })(Me(e));
          else if (Re(t))
            r = (function (e, t) {
              const n = at(e, !0, "fixed" === t),
                r = n.top + e.clientTop,
                a = n.left + e.clientLeft,
                o = Le(e) ? tt(e) : le(1);
              return {
                width: e.clientWidth * o.x,
                height: e.clientHeight * o.y,
                x: a * o.x,
                y: r * o.y,
              };
            })(t, n);
          else {
            const n = rt(e);
            r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
          }
          return Se(r);
        }
        function st(e, t) {
          const n = Ye(e);
          return !(n === t || !Re(n) || qe(n)) && ("fixed" === Ke(n).position || st(n, t));
        }
        function ct(e, t, n) {
          const r = Le(t),
            a = Me(t),
            o = "fixed" === n,
            l = at(e, !0, o, t);
          let i = { scrollLeft: 0, scrollTop: 0 };
          const s = le(0);
          function c() {
            s.x = ot(a);
          }
          if (r || (!r && !o))
            if ((("body" !== ze(t) || Ae(a)) && (i = Qe(t)), r)) {
              const e = at(t, !0, o, t);
              ((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop));
            } else a && c();
          o && !r && a && c();
          const u = !a || r || o ? le(0) : lt(a, i);
          return {
            x: l.left + i.scrollLeft - s.x - u.x,
            y: l.top + i.scrollTop - s.y - u.y,
            width: l.width,
            height: l.height,
          };
        }
        function ut(e) {
          return "static" === Ke(e).position;
        }
        function dt(e, t) {
          if (!Le(e) || "fixed" === Ke(e).position) return null;
          if (t) return t(e);
          let n = e.offsetParent;
          return (Me(e) === n && (n = n.ownerDocument.body), n);
        }
        function ft(e, t) {
          const n = Te(e);
          if (Ie(e)) return n;
          if (!Le(e)) {
            let t = Ye(e);
            for (; t && !qe(t); ) {
              if (Re(t) && !ut(t)) return t;
              t = Ye(t);
            }
            return n;
          }
          let r = dt(e, t);
          for (; r && Fe(r) && ut(r); ) r = dt(r, t);
          return r && qe(r) && ut(r) && !We(r)
            ? n
            : r ||
                (function (e) {
                  let t = Ye(e);
                  for (; Le(t) && !qe(t); ) {
                    if (We(t)) return t;
                    if (Ie(t)) return null;
                    t = Ye(t);
                  }
                  return null;
                })(e) ||
                n;
        }
        const pt = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: a } = e;
            const o = "fixed" === a,
              l = Me(r),
              i = !!t && Ie(t.floating);
            if (r === l || (i && o)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              c = le(1);
            const u = le(0),
              d = Le(r);
            if ((d || (!d && !o)) && (("body" !== ze(r) || Ae(l)) && (s = Qe(r)), d)) {
              const e = at(r);
              ((c = tt(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
            }
            const f = !l || d || o ? le(0) : lt(l, s);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - s.scrollLeft * c.x + u.x + f.x,
              y: n.y * c.y - s.scrollTop * c.y + u.y + f.y,
            };
          },
          getDocumentElement: Me,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: a } = e;
            const o = [
                ...("clippingAncestors" === n
                  ? Ie(t)
                    ? []
                    : (function (e, t) {
                        const n = t.get(e);
                        if (n) return n;
                        let r = Xe(e, [], !1).filter((e) => Re(e) && "body" !== ze(e)),
                          a = null;
                        const o = "fixed" === Ke(e).position;
                        let l = o ? Ye(e) : e;
                        for (; Re(l) && !qe(l); ) {
                          const t = Ke(l),
                            n = We(l);
                          (n || "fixed" !== t.position || (a = null),
                            (
                              o
                                ? !n && !a
                                : (!n &&
                                    "static" === t.position &&
                                    a &&
                                    ("absolute" === a.position || "fixed" === a.position)) ||
                                  (Ae(l) && !n && st(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (a = t),
                            (l = Ye(l)));
                        }
                        return (t.set(e, r), r);
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = it(t, o[0], a);
            let i = l.top,
              s = l.right,
              c = l.bottom,
              u = l.left;
            for (let e = 1; e < o.length; e++) {
              const n = it(t, o[e], a);
              ((i = re(n.top, i)),
                (s = ne(n.right, s)),
                (c = ne(n.bottom, c)),
                (u = re(n.left, u)));
            }
            return { width: s - u, height: c - i, x: u, y: i };
          },
          getOffsetParent: ft,
          getElementRects: async function (e) {
            const t = this.getOffsetParent || ft,
              n = this.getDimensions,
              r = await n(e.floating);
            return {
              reference: ct(e.reference, await t(e.floating), e.strategy),
              floating: { x: 0, y: 0, width: r.width, height: r.height },
            };
          },
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            const { width: t, height: n } = Je(e);
            return { width: t, height: n };
          },
          getScale: tt,
          isElement: Re,
          isRTL: function (e) {
            return "rtl" === Ke(e).direction;
          },
        };
        function mt(e, t) {
          return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        }
        const ht = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r;
                  const {
                      placement: a,
                      middlewareData: o,
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
                    } = ce(e, t);
                  if (null != (n = o.arrow) && n.alignmentOffset) return {};
                  const v = ue(a),
                    y = me(i),
                    b = ue(i) === i,
                    w = await (null == s.isRTL ? void 0 : s.isRTL(c.floating)),
                    x =
                      f ||
                      (b || !h
                        ? [xe(i)]
                        : (function (e) {
                            const t = xe(e);
                            return [ge(e), t, ge(t)];
                          })(i)),
                    k = "none" !== m;
                  !f &&
                    k &&
                    x.push(
                      ...(function (e, t, n, r) {
                        const a = de(e);
                        let o = (function (e, t, n) {
                          switch (e) {
                            case "top":
                            case "bottom":
                              return n ? (t ? ye : ve) : t ? ve : ye;
                            case "left":
                            case "right":
                              return t ? be : we;
                            default:
                              return [];
                          }
                        })(ue(e), "start" === n, r);
                        return (
                          a && ((o = o.map((e) => e + "-" + a)), t && (o = o.concat(o.map(ge)))), o
                        );
                      })(i, h, m, w),
                    );
                  const S = [i, ...x],
                    E = await s.detectOverflow(t, g),
                    C = [];
                  let N = (null == (r = o.flip) ? void 0 : r.overflows) || [];
                  if ((u && C.push(E[v]), d)) {
                    const e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      const r = de(e),
                        a = he(e),
                        o = pe(a);
                      let l =
                        "x" === a
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top";
                      return (t.reference[o] > t.floating[o] && (l = xe(l)), [l, xe(l)]);
                    })(a, l, w);
                    C.push(E[e[0]], E[e[1]]);
                  }
                  if (((N = [...N, { placement: a, overflows: C }]), !C.every((e) => e <= 0))) {
                    var _, j;
                    const e = ((null == (_ = o.flip) ? void 0 : _.index) || 0) + 1,
                      t = S[e];
                    if (
                      t &&
                      ("alignment" !== d ||
                        y === me(t) ||
                        N.every((e) => me(e.placement) !== y || e.overflows[0] > 0))
                    )
                      return { data: { index: e, overflows: N }, reset: { placement: t } };
                    let n =
                      null ==
                      (j = N.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1],
                      )[0])
                        ? void 0
                        : j.placement;
                    if (!n)
                      switch (p) {
                        case "bestFit": {
                          var P;
                          const e =
                            null ==
                            (P = N.filter((e) => {
                              if (k) {
                                const t = me(e.placement);
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
                    if (a !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          },
          gt = (e) => ({
            name: "arrow",
            options: e,
            async fn(t) {
              const {
                  x: n,
                  y: r,
                  placement: a,
                  rects: o,
                  platform: l,
                  elements: i,
                  middlewareData: s,
                } = t,
                { element: c, padding: u = 0 } = ce(e, t) || {};
              if (null == c) return {};
              const d = ke(u),
                f = { x: n, y: r },
                p = he(a),
                m = pe(p),
                h = await l.getDimensions(c),
                g = "y" === p,
                v = g ? "top" : "left",
                y = g ? "bottom" : "right",
                b = g ? "clientHeight" : "clientWidth",
                w = o.reference[m] + o.reference[p] - f[p] - o.floating[m],
                x = f[p] - o.reference[p],
                k = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c));
              let S = k ? k[b] : 0;
              (S && (await (null == l.isElement ? void 0 : l.isElement(k)))) ||
                (S = i.floating[b] || o.floating[m]);
              const E = w / 2 - x / 2,
                C = S / 2 - h[m] / 2 - 1,
                N = ne(d[v], C),
                _ = ne(d[y], C),
                j = N,
                P = S - h[m] - _,
                z = S / 2 - h[m] / 2 + E,
                T = se(j, z, P),
                M =
                  !s.arrow &&
                  null != de(a) &&
                  z !== T &&
                  o.reference[m] / 2 - (z < j ? N : _) - h[m] / 2 < 0,
                O = M ? (z < j ? z - j : z - P) : 0;
              return {
                [p]: f[p] + O,
                data: { [p]: T, centerOffset: z - T - O, ...(M && { alignmentOffset: O }) },
                reset: M,
              };
            },
          }),
          vt = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  const { x: n, y: r, placement: a, rects: o, middlewareData: l } = t,
                    { offset: i = 0, mainAxis: s = !0, crossAxis: c = !0 } = ce(e, t),
                    u = { x: n, y: r },
                    d = me(a),
                    f = fe(d);
                  let p = u[f],
                    m = u[d];
                  const h = ce(i, t),
                    g =
                      "number" == typeof h
                        ? { mainAxis: h, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...h };
                  if (s) {
                    const e = "y" === f ? "height" : "width",
                      t = o.reference[f] - o.floating[e] + g.mainAxis,
                      n = o.reference[f] + o.reference[e] - g.mainAxis;
                    p < t ? (p = t) : p > n && (p = n);
                  }
                  if (c) {
                    var v, y;
                    const e = "y" === f ? "width" : "height",
                      t = je.has(ue(a)),
                      n =
                        o.reference[d] -
                        o.floating[e] +
                        ((t && (null == (v = l.offset) ? void 0 : v[d])) || 0) +
                        (t ? 0 : g.crossAxis),
                      r =
                        o.reference[d] +
                        o.reference[e] +
                        (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) -
                        (t ? g.crossAxis : 0);
                    m < n ? (m = n) : m > r && (m = r);
                  }
                  return { [f]: p, [d]: m };
                },
              }
            );
          },
          yt = (e, t, n) => {
            const r = new Map(),
              a = { platform: pt, ...n },
              o = { ...a.platform, _c: r };
            return (async (e, t, n) => {
              const {
                  placement: r = "bottom",
                  strategy: a = "absolute",
                  middleware: o = [],
                  platform: l,
                } = n,
                i = l.detectOverflow ? l : { ...l, detectOverflow: Ce },
                s = await (null == l.isRTL ? void 0 : l.isRTL(t));
              let c = await l.getElementRects({ reference: e, floating: t, strategy: a }),
                { x: u, y: d } = Ee(c, r, s),
                f = r,
                p = 0;
              const m = {};
              for (let n = 0; n < o.length; n++) {
                const h = o[n];
                if (!h) continue;
                const { name: g, fn: v } = h,
                  {
                    x: y,
                    y: b,
                    data: w,
                    reset: x,
                  } = await v({
                    x: u,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: a,
                    middlewareData: m,
                    rects: c,
                    platform: i,
                    elements: { reference: e, floating: t },
                  });
                ((u = null != y ? y : u),
                  (d = null != b ? b : d),
                  (m[g] = { ...m[g], ...w }),
                  x &&
                    p < 50 &&
                    (p++,
                    "object" == typeof x &&
                      (x.placement && (f = x.placement),
                      x.rects &&
                        (c =
                          !0 === x.rects
                            ? await l.getElementRects({ reference: e, floating: t, strategy: a })
                            : x.rects),
                      ({ x: u, y: d } = Ee(c, f, s))),
                    (n = -1)));
              }
              return { x: u, y: d, placement: f, strategy: a, middlewareData: m };
            })(e, t, { ...a, platform: o });
          };
        var bt = "undefined" != typeof document ? r.useLayoutEffect : function () {};
        function wt(e, t) {
          if (e === t) return !0;
          if (typeof e != typeof t) return !1;
          if ("function" == typeof e && e.toString() === t.toString()) return !0;
          let n, r, a;
          if (e && t && "object" == typeof e) {
            if (Array.isArray(e)) {
              if (((n = e.length), n !== t.length)) return !1;
              for (r = n; 0 !== r--; ) if (!wt(e[r], t[r])) return !1;
              return !0;
            }
            if (((a = Object.keys(e)), (n = a.length), n !== Object.keys(t).length)) return !1;
            for (r = n; 0 !== r--; ) if (!{}.hasOwnProperty.call(t, a[r])) return !1;
            for (r = n; 0 !== r--; ) {
              const n = a[r];
              if (!(("_owner" === n && e.$$typeof) || wt(e[n], t[n]))) return !1;
            }
            return !0;
          }
          return e != e && t != t;
        }
        function xt(e) {
          return "undefined" == typeof window
            ? 1
            : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function kt(e, t) {
          const n = xt(e);
          return Math.round(t * n) / n;
        }
        function St(e) {
          const t = r.useRef(e);
          return (
            bt(() => {
              t.current = e;
            }),
            t
          );
        }
        const Et = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = 0),
                {
                  name: "offset",
                  options: e,
                  async fn(t) {
                    var n, r;
                    const { x: a, y: o, placement: l, middlewareData: i } = t,
                      s = await (async function (e, t) {
                        const { placement: n, platform: r, elements: a } = e,
                          o = await (null == r.isRTL ? void 0 : r.isRTL(a.floating)),
                          l = ue(n),
                          i = de(n),
                          s = "y" === me(n),
                          c = je.has(l) ? -1 : 1,
                          u = o && s ? -1 : 1,
                          d = ce(t, e);
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
                      : { x: a + s.x, y: o + s.y, data: { ...s, placement: l } };
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          Ct = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "shift",
                  options: e,
                  async fn(t) {
                    const { x: n, y: r, placement: a, platform: o } = t,
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
                      } = ce(e, t),
                      u = { x: n, y: r },
                      d = await o.detectOverflow(t, c),
                      f = me(ue(a)),
                      p = fe(f);
                    let m = u[p],
                      h = u[f];
                    if (l) {
                      const e = "y" === p ? "bottom" : "right";
                      m = se(m + d["y" === p ? "top" : "left"], m, m - d[e]);
                    }
                    if (i) {
                      const e = "y" === f ? "bottom" : "right";
                      h = se(h + d["y" === f ? "top" : "left"], h, h - d[e]);
                    }
                    const g = s.fn({ ...t, [p]: m, [f]: h });
                    return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [p]: l, [f]: i } } };
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          Nt = (e, t) => ({ fn: vt(e).fn, options: [e, t] }),
          _t = (e, t) => {
            const n = ht(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          jt = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "size",
                  options: e,
                  async fn(t) {
                    var n, r;
                    const { placement: a, rects: o, platform: l, elements: i } = t,
                      { apply: s = () => {}, ...c } = ce(e, t),
                      u = await l.detectOverflow(t, c),
                      d = ue(a),
                      f = de(a),
                      p = "y" === me(a),
                      { width: m, height: h } = o.floating;
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
                      w = ne(h - u[g], y),
                      x = ne(m - u[v], b),
                      k = !t.middlewareData.shift;
                    let S = w,
                      E = x;
                    if (
                      (null != (n = t.middlewareData.shift) && n.enabled.x && (E = b),
                      null != (r = t.middlewareData.shift) && r.enabled.y && (S = y),
                      k && !f)
                    ) {
                      const e = re(u.left, 0),
                        t = re(u.right, 0),
                        n = re(u.top, 0),
                        r = re(u.bottom, 0);
                      p
                        ? (E = m - 2 * (0 !== e || 0 !== t ? e + t : re(u.left, u.right)))
                        : (S = h - 2 * (0 !== n || 0 !== r ? n + r : re(u.top, u.bottom)));
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
          Pt = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    const { rects: n, platform: r } = t,
                      { strategy: a = "referenceHidden", ...o } = ce(e, t);
                    switch (a) {
                      case "referenceHidden": {
                        const e = Ne(
                          await r.detectOverflow(t, { ...o, elementContext: "reference" }),
                          n.reference,
                        );
                        return { data: { referenceHiddenOffsets: e, referenceHidden: _e(e) } };
                      }
                      case "escaped": {
                        const e = Ne(
                          await r.detectOverflow(t, { ...o, altBoundary: !0 }),
                          n.floating,
                        );
                        return { data: { escapedOffsets: e, escaped: _e(e) } };
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
          zt = (e, t) => {
            const n = ((e) => ({
              name: "arrow",
              options: e,
              fn(t) {
                const { element: n, padding: r } = "function" == typeof e ? e(t) : e;
                return n && ((a = n), {}.hasOwnProperty.call(a, "current"))
                  ? null != n.current
                    ? gt({ element: n.current, padding: r }).fn(t)
                    : {}
                  : n
                    ? gt({ element: n, padding: r }).fn(t)
                    : {};
                var a;
              },
            }))(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          };
        var Tt = r.forwardRef((e, t) => {
          const { children: n, width: r = 10, height: a = 5, ...o } = e;
          return (0, O.jsx)(H.svg, {
            ...o,
            ref: t,
            width: r,
            height: a,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, O.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
        Tt.displayName = "Arrow";
        var Mt = Tt;
        function Ot(e) {
          const [t, n] = r.useState(void 0);
          return (
            X(() => {
              if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const t = new ResizeObserver((t) => {
                  if (!Array.isArray(t)) return;
                  if (!t.length) return;
                  const r = t[0];
                  let a, o;
                  if ("borderBoxSize" in r) {
                    const e = r.borderBoxSize,
                      t = Array.isArray(e) ? e[0] : e;
                    ((a = t.inlineSize), (o = t.blockSize));
                  } else ((a = e.offsetWidth), (o = e.offsetHeight));
                  n({ width: a, height: o });
                });
                return (t.observe(e, { box: "border-box" }), () => t.unobserve(e));
              }
              n(void 0);
            }, [e]),
            t
          );
        }
        var Rt = "Popper",
          [Lt, Dt] = R(Rt),
          [At, Ft] = Lt(Rt),
          It = (e) => {
            const { __scopePopper: t, children: n } = e,
              [a, o] = r.useState(null);
            return (0, O.jsx)(At, { scope: t, anchor: a, onAnchorChange: o, children: n });
          };
        It.displayName = Rt;
        var $t = "PopperAnchor",
          Bt = r.forwardRef((e, t) => {
            const { __scopePopper: n, virtualRef: a, ...o } = e,
              l = Ft($t, n),
              i = r.useRef(null),
              s = M(t, i),
              c = r.useRef(null);
            return (
              r.useEffect(() => {
                const e = c.current;
                ((c.current = a?.current || i.current),
                  e !== c.current && l.onAnchorChange(c.current));
              }),
              a ? null : (0, O.jsx)(H.div, { ...o, ref: s })
            );
          });
        Bt.displayName = $t;
        var Ht = "PopperContent",
          [Ut, Wt] = Lt(Ht),
          Vt = r.forwardRef((e, t) => {
            const {
                __scopePopper: n,
                side: a = "bottom",
                sideOffset: o = 0,
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
              v = Ft(Ht, n),
              [y, b] = r.useState(null),
              w = M(t, (e) => b(e)),
              [x, k] = r.useState(null),
              S = Ot(x),
              E = S?.width ?? 0,
              C = S?.height ?? 0,
              N = a + ("center" !== l ? "-" + l : ""),
              _ = "number" == typeof d ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
              j = Array.isArray(u) ? u : [u],
              P = j.length > 0,
              z = { padding: _, boundary: j.filter(Yt), altBoundary: P },
              {
                refs: T,
                floatingStyles: R,
                placement: L,
                isPositioned: A,
                middlewareData: F,
              } = (function (e) {
                void 0 === e && (e = {});
                const {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: a = [],
                    platform: o,
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
                  [p, m] = r.useState(a);
                wt(p, a) || m(a);
                const [h, g] = r.useState(null),
                  [v, y] = r.useState(null),
                  b = r.useCallback((e) => {
                    e !== S.current && ((S.current = e), g(e));
                  }, []),
                  w = r.useCallback((e) => {
                    e !== E.current && ((E.current = e), y(e));
                  }, []),
                  x = l || h,
                  k = i || v,
                  S = r.useRef(null),
                  E = r.useRef(null),
                  C = r.useRef(d),
                  N = null != c,
                  _ = St(c),
                  j = St(o),
                  P = St(u),
                  z = r.useCallback(() => {
                    if (!S.current || !E.current) return;
                    const e = { placement: t, strategy: n, middleware: p };
                    (j.current && (e.platform = j.current),
                      yt(S.current, E.current, e).then((e) => {
                        const t = { ...e, isPositioned: !1 !== P.current };
                        T.current &&
                          !wt(C.current, t) &&
                          ((C.current = t),
                          D.flushSync(() => {
                            f(t);
                          }));
                      }));
                  }, [p, t, n, j, P]);
                bt(() => {
                  !1 === u &&
                    C.current.isPositioned &&
                    ((C.current.isPositioned = !1), f((e) => ({ ...e, isPositioned: !1 })));
                }, [u]);
                const T = r.useRef(!1);
                (bt(
                  () => (
                    (T.current = !0),
                    () => {
                      T.current = !1;
                    }
                  ),
                  [],
                ),
                  bt(() => {
                    if ((x && (S.current = x), k && (E.current = k), x && k)) {
                      if (_.current) return _.current(x, k, z);
                      z();
                    }
                  }, [x, k, z, _, N]));
                const M = r.useMemo(
                    () => ({ reference: S, floating: E, setReference: b, setFloating: w }),
                    [b, w],
                  ),
                  O = r.useMemo(() => ({ reference: x, floating: k }), [x, k]),
                  R = r.useMemo(() => {
                    const e = { position: n, left: 0, top: 0 };
                    if (!O.floating) return e;
                    const t = kt(O.floating, d.x),
                      r = kt(O.floating, d.y);
                    return s
                      ? {
                          ...e,
                          transform: "translate(" + t + "px, " + r + "px)",
                          ...(xt(O.floating) >= 1.5 && { willChange: "transform" }),
                        }
                      : { position: n, left: t, top: r };
                  }, [n, s, O.floating, d.x, d.y]);
                return r.useMemo(
                  () => ({ ...d, update: z, refs: M, elements: O, floatingStyles: R }),
                  [d, z, M, O, R],
                );
              })({
                strategy: "fixed",
                placement: N,
                whileElementsMounted: (...e) =>
                  (function (e, t, n, r) {
                    void 0 === r && (r = {});
                    const {
                        ancestorScroll: a = !0,
                        ancestorResize: o = !0,
                        elementResize: l = "function" == typeof ResizeObserver,
                        layoutShift: i = "function" == typeof IntersectionObserver,
                        animationFrame: s = !1,
                      } = r,
                      c = et(e),
                      u = a || o ? [...(c ? Xe(c) : []), ...(t ? Xe(t) : [])] : [];
                    u.forEach((e) => {
                      (a && e.addEventListener("scroll", n, { passive: !0 }),
                        o && e.addEventListener("resize", n));
                    });
                    const d =
                      c && i
                        ? (function (e, t) {
                            let n,
                              r = null;
                            const a = Me(e);
                            function o() {
                              var e;
                              (clearTimeout(n), null == (e = r) || e.disconnect(), (r = null));
                            }
                            return (
                              (function l(i, s) {
                                (void 0 === i && (i = !1), void 0 === s && (s = 1), o());
                                const c = e.getBoundingClientRect(),
                                  { left: u, top: d, width: f, height: p } = c;
                                if ((i || t(), !f || !p)) return;
                                const m = {
                                  rootMargin:
                                    -oe(d) +
                                    "px " +
                                    -oe(a.clientWidth - (u + f)) +
                                    "px " +
                                    -oe(a.clientHeight - (d + p)) +
                                    "px " +
                                    -oe(u) +
                                    "px",
                                  threshold: re(0, ne(1, s)) || 1,
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
                                  (1 !== r || mt(c, e.getBoundingClientRect()) || l(), (h = !1));
                                }
                                try {
                                  r = new IntersectionObserver(g, { ...m, root: a.ownerDocument });
                                } catch (e) {
                                  r = new IntersectionObserver(g, m);
                                }
                                r.observe(e);
                              })(!0),
                              o
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
                    let h = s ? at(e) : null;
                    return (
                      s &&
                        (function t() {
                          const r = at(e);
                          (h && !mt(h, r) && n(), (h = r), (f = requestAnimationFrame(t)));
                        })(),
                      n(),
                      () => {
                        var e;
                        (u.forEach((e) => {
                          (a && e.removeEventListener("scroll", n),
                            o && e.removeEventListener("resize", n));
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
                  Et({ mainAxis: o + C, alignmentAxis: i }),
                  c &&
                    Ct({
                      mainAxis: !0,
                      crossAxis: !1,
                      limiter: "partial" === f ? Nt() : void 0,
                      ...z,
                    }),
                  c && _t({ ...z }),
                  jt({
                    ...z,
                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                      const { width: a, height: o } = t.reference,
                        l = e.floating.style;
                      (l.setProperty("--radix-popper-available-width", `${n}px`),
                        l.setProperty("--radix-popper-available-height", `${r}px`),
                        l.setProperty("--radix-popper-anchor-width", `${a}px`),
                        l.setProperty("--radix-popper-anchor-height", `${o}px`));
                    },
                  }),
                  x && zt({ element: x, padding: s }),
                  Gt({ arrowWidth: E, arrowHeight: C }),
                  p && Pt({ strategy: "referenceHidden", ...z }),
                ],
              }),
              [I, $] = Xt(L),
              B = W(h);
            X(() => {
              A && B?.();
            }, [A, B]);
            const U = F.arrow?.x,
              V = F.arrow?.y,
              q = 0 !== F.arrow?.centerOffset,
              [K, Q] = r.useState();
            return (
              X(() => {
                y && Q(window.getComputedStyle(y).zIndex);
              }, [y]),
              (0, O.jsx)("div", {
                ref: T.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...R,
                  transform: A ? R.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: K,
                  "--radix-popper-transform-origin": [
                    F.transformOrigin?.x,
                    F.transformOrigin?.y,
                  ].join(" "),
                  ...(F.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
                },
                dir: e.dir,
                children: (0, O.jsx)(Ut, {
                  scope: n,
                  placedSide: I,
                  onArrowChange: k,
                  arrowX: U,
                  arrowY: V,
                  shouldHideArrow: q,
                  children: (0, O.jsx)(H.div, {
                    "data-side": I,
                    "data-align": $,
                    ...g,
                    ref: w,
                    style: { ...g.style, animation: A ? void 0 : "none" },
                  }),
                }),
              })
            );
          });
        Vt.displayName = Ht;
        var qt = "PopperArrow",
          Kt = { top: "bottom", right: "left", bottom: "top", left: "right" },
          Qt = r.forwardRef(function (e, t) {
            const { __scopePopper: n, ...r } = e,
              a = Wt(qt, n),
              o = Kt[a.placedSide];
            return (0, O.jsx)("span", {
              ref: a.onArrowChange,
              style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [o]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[
                  a.placedSide
                ],
                transform: {
                  top: "translateY(100%)",
                  right: "translateY(50%) rotate(90deg) translateX(-50%)",
                  bottom: "rotate(180deg)",
                  left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[a.placedSide],
                visibility: a.shouldHideArrow ? "hidden" : void 0,
              },
              children: (0, O.jsx)(Mt, { ...r, ref: t, style: { ...r.style, display: "block" } }),
            });
          });
        function Yt(e) {
          return null !== e;
        }
        Qt.displayName = qt;
        var Gt = (e) => ({
          name: "transformOrigin",
          options: e,
          fn(t) {
            const { placement: n, rects: r, middlewareData: a } = t,
              o = 0 !== a.arrow?.centerOffset,
              l = o ? 0 : e.arrowWidth,
              i = o ? 0 : e.arrowHeight,
              [s, c] = Xt(n),
              u = { start: "0%", center: "50%", end: "100%" }[c],
              d = (a.arrow?.x ?? 0) + l / 2,
              f = (a.arrow?.y ?? 0) + i / 2;
            let p = "",
              m = "";
            return (
              "bottom" === s
                ? ((p = o ? u : `${d}px`), (m = -i + "px"))
                : "top" === s
                  ? ((p = o ? u : `${d}px`), (m = `${r.floating.height + i}px`))
                  : "right" === s
                    ? ((p = -i + "px"), (m = o ? u : `${f}px`))
                    : "left" === s && ((p = `${r.floating.width + i}px`), (m = o ? u : `${f}px`)),
              { data: { x: p, y: m } }
            );
          },
        });
        function Xt(e) {
          const [t, n = "center"] = e.split("-");
          return [t, n];
        }
        var Zt = It,
          Jt = Bt,
          en = Vt,
          tn = Qt,
          nn = r.forwardRef((e, t) => {
            const { container: n, ...a } = e,
              [o, l] = r.useState(!1);
            X(() => l(!0), []);
            const i = n || (o && globalThis?.document?.body);
            return i ? D.createPortal((0, O.jsx)(H.div, { ...a, ref: t }), i) : null;
          });
        nn.displayName = "Portal";
        var rn = (e) => {
          const { present: t, children: n } = e,
            a = (function (e) {
              const [t, n] = r.useState(),
                a = r.useRef(null),
                o = r.useRef(e),
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
                  const e = an(a.current);
                  l.current = "mounted" === s ? e : "none";
                }, [s]),
                X(() => {
                  const t = a.current,
                    n = o.current;
                  if (n !== e) {
                    const r = l.current,
                      a = an(t);
                    (c(
                      e
                        ? "MOUNT"
                        : "none" === a || "none" === t?.display
                          ? "UNMOUNT"
                          : n && r !== a
                            ? "ANIMATION_OUT"
                            : "UNMOUNT",
                    ),
                      (o.current = e));
                  }
                }, [e, c]),
                X(() => {
                  if (t) {
                    let e;
                    const n = t.ownerDocument.defaultView ?? window,
                      r = (r) => {
                        const l = an(a.current).includes(CSS.escape(r.animationName));
                        if (r.target === t && l && (c("ANIMATION_END"), !o.current)) {
                          const r = t.style.animationFillMode;
                          ((t.style.animationFillMode = "forwards"),
                            (e = n.setTimeout(() => {
                              "forwards" === t.style.animationFillMode &&
                                (t.style.animationFillMode = r);
                            })));
                        }
                      },
                      i = (e) => {
                        e.target === t && (l.current = an(a.current));
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
                    ((a.current = e ? getComputedStyle(e) : null), n(e));
                  }, []),
                }
              );
            })(t),
            o = "function" == typeof n ? n({ present: a.isPresent }) : r.Children.only(n),
            l = M(
              a.ref,
              (function (e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n
                  ? e.ref
                  : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
                    (n = t && "isReactWarning" in t && t.isReactWarning),
                    n ? e.props.ref : e.props.ref || e.ref);
              })(o),
            );
          return "function" == typeof n || a.isPresent ? r.cloneElement(o, { ref: l }) : null;
        };
        function an(e) {
          return e?.animationName || "none";
        }
        rn.displayName = "Presence";
        var on = a[" useInsertionEffect ".trim().toString()] || X;
        function ln({ prop: e, defaultProp: t, onChange: n = () => {}, caller: a }) {
          const [o, l, i] = (function ({ defaultProp: e, onChange: t }) {
              const [n, a] = r.useState(e),
                o = r.useRef(n),
                l = r.useRef(t);
              return (
                on(() => {
                  l.current = t;
                }, [t]),
                r.useEffect(() => {
                  o.current !== n && (l.current?.(n), (o.current = n));
                }, [n, o]),
                [n, a, l]
              );
            })({ defaultProp: t, onChange: n }),
            s = void 0 !== e,
            c = s ? e : o;
          {
            const t = r.useRef(void 0 !== e);
            r.useEffect(() => {
              const e = t.current;
              if (e !== s) {
                const t = e ? "controlled" : "uncontrolled",
                  n = s ? "controlled" : "uncontrolled";
                console.warn(
                  `${a} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
                );
              }
              t.current = s;
            }, [s, a]);
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
        Symbol("RADIX:SYNC_STATE");
        var sn = Object.freeze({
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
          cn = r.forwardRef((e, t) =>
            (0, O.jsx)(H.span, { ...e, ref: t, style: { ...sn, ...e.style } }),
          );
        cn.displayName = "VisuallyHidden";
        var un = cn,
          [dn, fn] = R("Tooltip", [Dt]),
          pn = Dt(),
          mn = "TooltipProvider",
          hn = 700,
          gn = "tooltip.open",
          [vn, yn] = dn(mn),
          bn = (e) => {
            const {
                __scopeTooltip: t,
                delayDuration: n = hn,
                skipDelayDuration: a = 300,
                disableHoverableContent: o = !1,
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
              (0, O.jsx)(vn, {
                scope: t,
                isOpenDelayedRef: i,
                delayDuration: n,
                onOpen: r.useCallback(() => {
                  (window.clearTimeout(c.current), (i.current = !1));
                }, []),
                onClose: r.useCallback(() => {
                  (window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => (i.current = !0), a)));
                }, [a]),
                isPointerInTransitRef: s,
                onPointerInTransitChange: r.useCallback((e) => {
                  s.current = e;
                }, []),
                disableHoverableContent: o,
                children: l,
              })
            );
          };
        bn.displayName = mn;
        var wn = "Tooltip",
          [xn, kn] = dn(wn),
          Sn = (e) => {
            const {
                __scopeTooltip: t,
                children: n,
                open: a,
                defaultOpen: o,
                onOpenChange: l,
                disableHoverableContent: i,
                delayDuration: s,
              } = e,
              c = yn(wn, e.__scopeTooltip),
              u = pn(t),
              [d, f] = r.useState(null),
              p = ee(),
              m = r.useRef(0),
              h = i ?? c.disableHoverableContent,
              g = s ?? c.delayDuration,
              v = r.useRef(!1),
              [y, b] = ln({
                prop: a,
                defaultProp: o ?? !1,
                onChange: (e) => {
                  (e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(gn))) : c.onClose(),
                    l?.(e));
                },
                caller: wn,
              }),
              w = r.useMemo(
                () => (y ? (v.current ? "delayed-open" : "instant-open") : "closed"),
                [y],
              ),
              x = r.useCallback(() => {
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
              (0, O.jsx)(Zt, {
                ...u,
                children: (0, O.jsx)(xn, {
                  scope: t,
                  contentId: p,
                  open: y,
                  stateAttribute: w,
                  trigger: d,
                  onTriggerChange: f,
                  onTriggerEnter: r.useCallback(() => {
                    c.isOpenDelayedRef.current ? S() : x();
                  }, [c.isOpenDelayedRef, S, x]),
                  onTriggerLeave: r.useCallback(() => {
                    h ? k() : (window.clearTimeout(m.current), (m.current = 0));
                  }, [k, h]),
                  onOpen: x,
                  onClose: k,
                  disableHoverableContent: h,
                  children: n,
                }),
              })
            );
          };
        Sn.displayName = wn;
        var En = "TooltipTrigger",
          Cn = r.forwardRef((e, t) => {
            const { __scopeTooltip: n, ...a } = e,
              o = kn(En, n),
              l = yn(En, n),
              i = pn(n),
              s = M(t, r.useRef(null), o.onTriggerChange),
              c = r.useRef(!1),
              u = r.useRef(!1),
              d = r.useCallback(() => (c.current = !1), []);
            return (
              r.useEffect(() => () => document.removeEventListener("pointerup", d), [d]),
              (0, O.jsx)(Jt, {
                asChild: !0,
                ...i,
                children: (0, O.jsx)(H.button, {
                  "aria-describedby": o.open ? o.contentId : void 0,
                  "data-state": o.stateAttribute,
                  ...a,
                  ref: s,
                  onPointerMove: P(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType &&
                      (u.current ||
                        l.isPointerInTransitRef.current ||
                        (o.onTriggerEnter(), (u.current = !0)));
                  }),
                  onPointerLeave: P(e.onPointerLeave, () => {
                    (o.onTriggerLeave(), (u.current = !1));
                  }),
                  onPointerDown: P(e.onPointerDown, () => {
                    (o.open && o.onClose(),
                      (c.current = !0),
                      document.addEventListener("pointerup", d, { once: !0 }));
                  }),
                  onFocus: P(e.onFocus, () => {
                    c.current || o.onOpen();
                  }),
                  onBlur: P(e.onBlur, o.onClose),
                  onClick: P(e.onClick, o.onClose),
                }),
              })
            );
          });
        Cn.displayName = En;
        var Nn = "TooltipPortal",
          [_n, jn] = dn(Nn, { forceMount: void 0 }),
          Pn = (e) => {
            const { __scopeTooltip: t, forceMount: n, children: r, container: a } = e,
              o = kn(Nn, t);
            return (0, O.jsx)(_n, {
              scope: t,
              forceMount: n,
              children: (0, O.jsx)(rn, {
                present: n || o.open,
                children: (0, O.jsx)(nn, { asChild: !0, container: a, children: r }),
              }),
            });
          };
        Pn.displayName = Nn;
        var zn = "TooltipContent",
          Tn = r.forwardRef((e, t) => {
            const n = jn(zn, e.__scopeTooltip),
              { forceMount: r = n.forceMount, side: a = "top", ...o } = e,
              l = kn(zn, e.__scopeTooltip);
            return (0, O.jsx)(rn, {
              present: r || l.open,
              children: l.disableHoverableContent
                ? (0, O.jsx)(Dn, { side: a, ...o, ref: t })
                : (0, O.jsx)(Mn, { side: a, ...o, ref: t }),
            });
          }),
          Mn = r.forwardRef((e, t) => {
            const n = kn(zn, e.__scopeTooltip),
              a = yn(zn, e.__scopeTooltip),
              o = r.useRef(null),
              l = M(t, o),
              [i, s] = r.useState(null),
              { trigger: c, onClose: u } = n,
              d = o.current,
              { onPointerInTransitChange: f } = a,
              p = r.useCallback(() => {
                (s(null), f(!1));
              }, [f]),
              m = r.useCallback(
                (e, t) => {
                  const n = e.currentTarget,
                    r = { x: e.clientX, y: e.clientY },
                    a = (function (e, t, n = 5) {
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
                          a = Math.abs(t.right - e.x),
                          o = Math.abs(t.left - e.x);
                        switch (Math.min(n, r, a, o)) {
                          case o:
                            return "left";
                          case a:
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
                    o = (function (e) {
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
                      ...a,
                      ...(function (e) {
                        const { top: t, right: n, bottom: r, left: a } = e;
                        return [
                          { x: a, y: t },
                          { x: n, y: t },
                          { x: n, y: r },
                          { x: a, y: r },
                        ];
                      })(t.getBoundingClientRect()),
                    ]);
                  (s(o), f(!0));
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
                      a = !(function (e, t) {
                        const { x: n, y: r } = e;
                        let a = !1;
                        for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                          const l = t[e],
                            i = t[o],
                            s = l.x,
                            c = l.y,
                            u = i.x,
                            d = i.y;
                          c > r != d > r && n < ((u - s) * (r - c)) / (d - c) + s && (a = !a);
                        }
                        return a;
                      })(n, i);
                    r ? p() : a && (p(), u());
                  };
                  return (
                    document.addEventListener("pointermove", e),
                    () => document.removeEventListener("pointermove", e)
                  );
                }
              }, [c, d, i, u, p]),
              (0, O.jsx)(Dn, { ...e, ref: l })
            );
          }),
          [On, Rn] = dn(wn, { isInside: !1 }),
          Ln = (function (e) {
            const t = ({ children: e }) => (0, O.jsx)(O.Fragment, { children: e });
            return ((t.displayName = `${e}.Slottable`), (t.__radixId = $), t);
          })("TooltipContent"),
          Dn = r.forwardRef((e, t) => {
            const {
                __scopeTooltip: n,
                children: a,
                "aria-label": o,
                onEscapeKeyDown: l,
                onPointerDownOutside: i,
                ...s
              } = e,
              c = kn(zn, n),
              u = pn(n),
              { onClose: d } = c;
            return (
              r.useEffect(
                () => (document.addEventListener(gn, d), () => document.removeEventListener(gn, d)),
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
              (0, O.jsx)(Q, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: i,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: d,
                children: (0, O.jsxs)(en, {
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
                    (0, O.jsx)(Ln, { children: a }),
                    (0, O.jsx)(On, {
                      scope: n,
                      isInside: !0,
                      children: (0, O.jsx)(un, {
                        id: c.contentId,
                        role: "tooltip",
                        children: o || a,
                      }),
                    }),
                  ],
                }),
              })
            );
          });
        Tn.displayName = zn;
        var An = "TooltipArrow",
          Fn = r.forwardRef((e, t) => {
            const { __scopeTooltip: n, ...r } = e,
              a = pn(n);
            return Rn(An, n).isInside ? null : (0, O.jsx)(tn, { ...a, ...r, ref: t });
          });
        Fn.displayName = An;
        var In = bn,
          $n = Sn,
          Bn = Cn,
          Hn = Pn,
          Un = Tn,
          Wn = Fn;
        function Vn(e) {
          var t,
            n,
            r = "";
          if ("string" == typeof e || "number" == typeof e) r += e;
          else if ("object" == typeof e)
            if (Array.isArray(e)) {
              var a = e.length;
              for (t = 0; t < a; t++) e[t] && (n = Vn(e[t])) && (r && (r += " "), (r += n));
            } else for (n in e) e[n] && (r && (r += " "), (r += n));
          return r;
        }
        function qn() {
          for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
            (e = arguments[n]) && (t = Vn(e)) && (r && (r += " "), (r += t));
          return r;
        }
        const Kn = (e = new Map(), t = null, n) => ({
            nextPart: e,
            validators: t,
            classGroupId: n,
          }),
          Qn = "-",
          Yn = [],
          Gn = (e) => {
            const t = Jn(e),
              { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
            return {
              getClassGroupId: (e) => {
                if (e.startsWith("[") && e.endsWith("]")) return Zn(e);
                const n = e.split(Qn),
                  r = "" === n[0] && n.length > 1 ? 1 : 0;
                return Xn(n, r, t);
              },
              getConflictingClassGroupIds: (e, t) => {
                if (t) {
                  const t = r[e],
                    a = n[e];
                  return t
                    ? a
                      ? ((e, t) => {
                          const n = new Array(e.length + t.length);
                          for (let t = 0; t < e.length; t++) n[t] = e[t];
                          for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
                          return n;
                        })(a, t)
                      : t
                    : a || Yn;
                }
                return n[e] || Yn;
              },
            };
          },
          Xn = (e, t, n) => {
            if (0 === e.length - t) return n.classGroupId;
            const r = e[t],
              a = n.nextPart.get(r);
            if (a) {
              const n = Xn(e, t + 1, a);
              if (n) return n;
            }
            const o = n.validators;
            if (null === o) return;
            const l = 0 === t ? e.join(Qn) : e.slice(t).join(Qn),
              i = o.length;
            for (let e = 0; e < i; e++) {
              const t = o[e];
              if (t.validator(l)) return t.classGroupId;
            }
          },
          Zn = (e) =>
            -1 === e.slice(1, -1).indexOf(":")
              ? void 0
              : (() => {
                  const t = e.slice(1, -1),
                    n = t.indexOf(":"),
                    r = t.slice(0, n);
                  return r ? "arbitrary.." + r : void 0;
                })(),
          Jn = (e) => {
            const { theme: t, classGroups: n } = e;
            return er(n, t);
          },
          er = (e, t) => {
            const n = Kn();
            for (const r in e) {
              const a = e[r];
              tr(a, n, r, t);
            }
            return n;
          },
          tr = (e, t, n, r) => {
            const a = e.length;
            for (let o = 0; o < a; o++) {
              const a = e[o];
              nr(a, t, n, r);
            }
          },
          nr = (e, t, n, r) => {
            "string" != typeof e
              ? "function" != typeof e
                ? or(e, t, n, r)
                : ar(e, t, n, r)
              : rr(e, t, n);
          },
          rr = (e, t, n) => {
            ("" === e ? t : lr(t, e)).classGroupId = n;
          },
          ar = (e, t, n, r) => {
            ir(e)
              ? tr(e(r), t, n, r)
              : (null === t.validators && (t.validators = []),
                t.validators.push(((e, t) => ({ classGroupId: e, validator: t }))(n, e)));
          },
          or = (e, t, n, r) => {
            const a = Object.entries(e),
              o = a.length;
            for (let e = 0; e < o; e++) {
              const [o, l] = a[e];
              tr(l, lr(t, o), n, r);
            }
          },
          lr = (e, t) => {
            let n = e;
            const r = t.split(Qn),
              a = r.length;
            for (let e = 0; e < a; e++) {
              const t = r[e];
              let a = n.nextPart.get(t);
              (a || ((a = Kn()), n.nextPart.set(t, a)), (n = a));
            }
            return n;
          },
          ir = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
          sr = (e) => {
            if (e < 1) return { get: () => {}, set: () => {} };
            let t = 0,
              n = Object.create(null),
              r = Object.create(null);
            const a = (a, o) => {
              ((n[a] = o), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
            };
            return {
              get(e) {
                let t = n[e];
                return void 0 !== t ? t : void 0 !== (t = r[e]) ? (a(e, t), t) : void 0;
              },
              set(e, t) {
                e in n ? (n[e] = t) : a(e, t);
              },
            };
          },
          cr = [],
          ur = (e, t, n, r, a) => ({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: a,
          }),
          dr = (e) => {
            const { prefix: t, experimentalParseClassName: n } = e;
            let r = (e) => {
              const t = [];
              let n,
                r = 0,
                a = 0,
                o = 0;
              const l = e.length;
              for (let i = 0; i < l; i++) {
                const l = e[i];
                if (0 === r && 0 === a) {
                  if (":" === l) {
                    (t.push(e.slice(o, i)), (o = i + 1));
                    continue;
                  }
                  if ("/" === l) {
                    n = i;
                    continue;
                  }
                }
                "[" === l ? r++ : "]" === l ? r-- : "(" === l ? a++ : ")" === l && a--;
              }
              const i = 0 === t.length ? e : e.slice(o);
              let s = i,
                c = !1;
              return (
                i.endsWith("!")
                  ? ((s = i.slice(0, -1)), (c = !0))
                  : i.startsWith("!") && ((s = i.slice(1)), (c = !0)),
                ur(t, c, s, n && n > o ? n - o : void 0)
              );
            };
            if (t) {
              const e = t + ":",
                n = r;
              r = (t) => (t.startsWith(e) ? n(t.slice(e.length)) : ur(cr, !1, t, void 0, !0));
            }
            if (n) {
              const e = r;
              r = (t) => n({ className: t, parseClassName: e });
            }
            return r;
          },
          fr = (e) => {
            const t = new Map();
            return (
              e.orderSensitiveModifiers.forEach((e, n) => {
                t.set(e, 1e6 + n);
              }),
              (e) => {
                const n = [];
                let r = [];
                for (let a = 0; a < e.length; a++) {
                  const o = e[a],
                    l = "[" === o[0],
                    i = t.has(o);
                  l || i
                    ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(o))
                    : r.push(o);
                }
                return (r.length > 0 && (r.sort(), n.push(...r)), n);
              }
            );
          },
          pr = /\s+/,
          mr = (e) => {
            if ("string" == typeof e) return e;
            let t,
              n = "";
            for (let r = 0; r < e.length; r++)
              e[r] && (t = mr(e[r])) && (n && (n += " "), (n += t));
            return n;
          },
          hr = (e, ...t) => {
            let n, r, a, o;
            const l = (e) => {
              const t = r(e);
              if (t) return t;
              const o = ((e, t) => {
                const {
                    parseClassName: n,
                    getClassGroupId: r,
                    getConflictingClassGroupIds: a,
                    sortModifiers: o,
                  } = t,
                  l = [],
                  i = e.trim().split(pr);
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
                  const g = 0 === u.length ? "" : 1 === u.length ? u[0] : o(u).join(":"),
                    v = d ? g + "!" : g,
                    y = v + h;
                  if (l.indexOf(y) > -1) continue;
                  l.push(y);
                  const b = a(h, m);
                  for (let e = 0; e < b.length; ++e) {
                    const t = b[e];
                    l.push(v + t);
                  }
                  s = t + (s.length > 0 ? " " + s : s);
                }
                return s;
              })(e, n);
              return (a(e, o), o);
            };
            return (
              (o = (i) => {
                const s = t.reduce((e, t) => t(e), e());
                return (
                  (n = ((e) => ({
                    cache: sr(e.cacheSize),
                    parseClassName: dr(e),
                    sortModifiers: fr(e),
                    ...Gn(e),
                  }))(s)),
                  (r = n.cache.get),
                  (a = n.cache.set),
                  (o = l),
                  l(i)
                );
              }),
              (...e) =>
                o(
                  ((...e) => {
                    let t,
                      n,
                      r = 0,
                      a = "";
                    for (; r < e.length; )
                      (t = e[r++]) && (n = mr(t)) && (a && (a += " "), (a += n));
                    return a;
                  })(...e),
                )
            );
          },
          gr = [],
          vr = (e) => {
            const t = (t) => t[e] || gr;
            return ((t.isThemeGetter = !0), t);
          },
          yr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
          br = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
          wr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
          xr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          kr =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          Sr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
          Er = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
          Cr =
            /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
          Nr = (e) => wr.test(e),
          _r = (e) => !!e && !Number.isNaN(Number(e)),
          jr = (e) => !!e && Number.isInteger(Number(e)),
          Pr = (e) => e.endsWith("%") && _r(e.slice(0, -1)),
          zr = (e) => xr.test(e),
          Tr = () => !0,
          Mr = (e) => kr.test(e) && !Sr.test(e),
          Or = () => !1,
          Rr = (e) => Er.test(e),
          Lr = (e) => Cr.test(e),
          Dr = (e) => !Fr(e) && !qr(e),
          Ar = (e) => ea(e, aa, Or),
          Fr = (e) => yr.test(e),
          Ir = (e) => ea(e, oa, Mr),
          $r = (e) => ea(e, la, _r),
          Br = (e) => ea(e, sa, Tr),
          Hr = (e) => ea(e, ia, Or),
          Ur = (e) => ea(e, na, Or),
          Wr = (e) => ea(e, ra, Lr),
          Vr = (e) => ea(e, ca, Rr),
          qr = (e) => br.test(e),
          Kr = (e) => ta(e, oa),
          Qr = (e) => ta(e, ia),
          Yr = (e) => ta(e, na),
          Gr = (e) => ta(e, aa),
          Xr = (e) => ta(e, ra),
          Zr = (e) => ta(e, ca, !0),
          Jr = (e) => ta(e, sa, !0),
          ea = (e, t, n) => {
            const r = yr.exec(e);
            return !!r && (r[1] ? t(r[1]) : n(r[2]));
          },
          ta = (e, t, n = !1) => {
            const r = br.exec(e);
            return !!r && (r[1] ? t(r[1]) : n);
          },
          na = (e) => "position" === e || "percentage" === e,
          ra = (e) => "image" === e || "url" === e,
          aa = (e) => "length" === e || "size" === e || "bg-size" === e,
          oa = (e) => "length" === e,
          la = (e) => "number" === e,
          ia = (e) => "family-name" === e,
          sa = (e) => "number" === e || "weight" === e,
          ca = (e) => "shadow" === e,
          ua = hr(
            (Symbol.toStringTag,
            () => {
              const e = vr("color"),
                t = vr("font"),
                n = vr("text"),
                r = vr("font-weight"),
                a = vr("tracking"),
                o = vr("leading"),
                l = vr("breakpoint"),
                i = vr("container"),
                s = vr("spacing"),
                c = vr("radius"),
                u = vr("shadow"),
                d = vr("inset-shadow"),
                f = vr("text-shadow"),
                p = vr("drop-shadow"),
                m = vr("blur"),
                h = vr("perspective"),
                g = vr("aspect"),
                v = vr("ease"),
                y = vr("animate"),
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
                  qr,
                  Fr,
                ],
                w = () => [qr, Fr, s],
                x = () => [Nr, "full", "auto", ...w()],
                k = () => [jr, "none", "subgrid", qr, Fr],
                S = () => ["auto", { span: ["full", jr, qr, Fr] }, jr, qr, Fr],
                E = () => [jr, "auto", qr, Fr],
                C = () => ["auto", "min", "max", "fr", qr, Fr],
                N = () => ["auto", ...w()],
                _ = () => [
                  Nr,
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
                  ...w(),
                ],
                j = () => [Nr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...w()],
                P = () => [
                  Nr,
                  "screen",
                  "full",
                  "lh",
                  "dvh",
                  "lvh",
                  "svh",
                  "min",
                  "max",
                  "fit",
                  ...w(),
                ],
                z = () => [e, qr, Fr],
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
                  Yr,
                  Ur,
                  { position: [qr, Fr] },
                ],
                M = () => ["auto", "cover", "contain", Gr, Ar, { size: [qr, Fr] }],
                O = () => [Pr, Kr, Ir],
                R = () => ["", "none", "full", c, qr, Fr],
                L = () => ["", _r, Kr, Ir],
                D = () => [_r, Pr, Yr, Ur],
                A = () => ["", "none", m, qr, Fr],
                F = () => ["none", _r, qr, Fr],
                I = () => ["none", _r, qr, Fr],
                $ = () => [_r, qr, Fr],
                B = () => [Nr, "full", ...w()];
              return {
                cacheSize: 500,
                theme: {
                  animate: ["spin", "ping", "pulse", "bounce"],
                  aspect: ["video"],
                  blur: [zr],
                  breakpoint: [zr],
                  color: [Tr],
                  container: [zr],
                  "drop-shadow": [zr],
                  ease: ["in", "out", "in-out"],
                  font: [Dr],
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
                  "inset-shadow": [zr],
                  leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                  perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                  radius: [zr],
                  shadow: [zr],
                  spacing: ["px", _r],
                  text: [zr],
                  "text-shadow": [zr],
                  tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
                },
                classGroups: {
                  aspect: [{ aspect: ["auto", "square", Nr, Fr, qr, g] }],
                  container: ["container"],
                  columns: [{ columns: [_r, Fr, qr, i] }],
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
                  inset: [{ inset: x() }],
                  "inset-x": [{ "inset-x": x() }],
                  "inset-y": [{ "inset-y": x() }],
                  start: [{ "inset-s": x(), start: x() }],
                  end: [{ "inset-e": x(), end: x() }],
                  "inset-bs": [{ "inset-bs": x() }],
                  "inset-be": [{ "inset-be": x() }],
                  top: [{ top: x() }],
                  right: [{ right: x() }],
                  bottom: [{ bottom: x() }],
                  left: [{ left: x() }],
                  visibility: ["visible", "invisible", "collapse"],
                  z: [{ z: [jr, "auto", qr, Fr] }],
                  basis: [{ basis: [Nr, "full", "auto", i, ...w()] }],
                  "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                  "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
                  flex: [{ flex: [_r, Nr, "auto", "initial", "none", Fr] }],
                  grow: [{ grow: ["", _r, qr, Fr] }],
                  shrink: [{ shrink: ["", _r, qr, Fr] }],
                  order: [{ order: [jr, "first", "last", "none", qr, Fr] }],
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
                  gap: [{ gap: w() }],
                  "gap-x": [{ "gap-x": w() }],
                  "gap-y": [{ "gap-y": w() }],
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
                  p: [{ p: w() }],
                  px: [{ px: w() }],
                  py: [{ py: w() }],
                  ps: [{ ps: w() }],
                  pe: [{ pe: w() }],
                  pbs: [{ pbs: w() }],
                  pbe: [{ pbe: w() }],
                  pt: [{ pt: w() }],
                  pr: [{ pr: w() }],
                  pb: [{ pb: w() }],
                  pl: [{ pl: w() }],
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
                  "space-x": [{ "space-x": w() }],
                  "space-x-reverse": ["space-x-reverse"],
                  "space-y": [{ "space-y": w() }],
                  "space-y-reverse": ["space-y-reverse"],
                  size: [{ size: _() }],
                  "inline-size": [{ inline: ["auto", ...j()] }],
                  "min-inline-size": [{ "min-inline": ["auto", ...j()] }],
                  "max-inline-size": [{ "max-inline": ["none", ...j()] }],
                  "block-size": [{ block: ["auto", ...P()] }],
                  "min-block-size": [{ "min-block": ["auto", ...P()] }],
                  "max-block-size": [{ "max-block": ["none", ...P()] }],
                  w: [{ w: [i, "screen", ..._()] }],
                  "min-w": [{ "min-w": [i, "screen", "none", ..._()] }],
                  "max-w": [{ "max-w": [i, "screen", "none", "prose", { screen: [l] }, ..._()] }],
                  h: [{ h: ["screen", "lh", ..._()] }],
                  "min-h": [{ "min-h": ["screen", "lh", "none", ..._()] }],
                  "max-h": [{ "max-h": ["screen", "lh", ..._()] }],
                  "font-size": [{ text: ["base", n, Kr, Ir] }],
                  "font-smoothing": ["antialiased", "subpixel-antialiased"],
                  "font-style": ["italic", "not-italic"],
                  "font-weight": [{ font: [r, Jr, Br] }],
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
                        Pr,
                        Fr,
                      ],
                    },
                  ],
                  "font-family": [{ font: [Qr, Hr, t] }],
                  "font-features": [{ "font-features": [Fr] }],
                  "fvn-normal": ["normal-nums"],
                  "fvn-ordinal": ["ordinal"],
                  "fvn-slashed-zero": ["slashed-zero"],
                  "fvn-figure": ["lining-nums", "oldstyle-nums"],
                  "fvn-spacing": ["proportional-nums", "tabular-nums"],
                  "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                  tracking: [{ tracking: [a, qr, Fr] }],
                  "line-clamp": [{ "line-clamp": [_r, "none", qr, $r] }],
                  leading: [{ leading: [o, ...w()] }],
                  "list-image": [{ "list-image": ["none", qr, Fr] }],
                  "list-style-position": [{ list: ["inside", "outside"] }],
                  "list-style-type": [{ list: ["disc", "decimal", "none", qr, Fr] }],
                  "text-alignment": [
                    { text: ["left", "center", "right", "justify", "start", "end"] },
                  ],
                  "placeholder-color": [{ placeholder: z() }],
                  "text-color": [{ text: z() }],
                  "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                  "text-decoration-style": [
                    { decoration: ["solid", "dashed", "dotted", "double", "wavy"] },
                  ],
                  "text-decoration-thickness": [{ decoration: [_r, "from-font", "auto", qr, Ir] }],
                  "text-decoration-color": [{ decoration: z() }],
                  "underline-offset": [{ "underline-offset": [_r, "auto", qr, Fr] }],
                  "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                  "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                  "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                  indent: [{ indent: w() }],
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
                        qr,
                        Fr,
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
                  content: [{ content: ["none", qr, Fr] }],
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
                            jr,
                            qr,
                            Fr,
                          ],
                          radial: ["", qr, Fr],
                          conic: [jr, qr, Fr],
                        },
                        Xr,
                        Wr,
                      ],
                    },
                  ],
                  "bg-color": [{ bg: z() }],
                  "gradient-from-pos": [{ from: O() }],
                  "gradient-via-pos": [{ via: O() }],
                  "gradient-to-pos": [{ to: O() }],
                  "gradient-from": [{ from: z() }],
                  "gradient-via": [{ via: z() }],
                  "gradient-to": [{ to: z() }],
                  rounded: [{ rounded: R() }],
                  "rounded-s": [{ "rounded-s": R() }],
                  "rounded-e": [{ "rounded-e": R() }],
                  "rounded-t": [{ "rounded-t": R() }],
                  "rounded-r": [{ "rounded-r": R() }],
                  "rounded-b": [{ "rounded-b": R() }],
                  "rounded-l": [{ "rounded-l": R() }],
                  "rounded-ss": [{ "rounded-ss": R() }],
                  "rounded-se": [{ "rounded-se": R() }],
                  "rounded-ee": [{ "rounded-ee": R() }],
                  "rounded-es": [{ "rounded-es": R() }],
                  "rounded-tl": [{ "rounded-tl": R() }],
                  "rounded-tr": [{ "rounded-tr": R() }],
                  "rounded-br": [{ "rounded-br": R() }],
                  "rounded-bl": [{ "rounded-bl": R() }],
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
                  "outline-offset": [{ "outline-offset": [_r, qr, Fr] }],
                  "outline-w": [{ outline: ["", _r, Kr, Ir] }],
                  "outline-color": [{ outline: z() }],
                  shadow: [{ shadow: ["", "none", u, Zr, Vr] }],
                  "shadow-color": [{ shadow: z() }],
                  "inset-shadow": [{ "inset-shadow": ["none", d, Zr, Vr] }],
                  "inset-shadow-color": [{ "inset-shadow": z() }],
                  "ring-w": [{ ring: L() }],
                  "ring-w-inset": ["ring-inset"],
                  "ring-color": [{ ring: z() }],
                  "ring-offset-w": [{ "ring-offset": [_r, Ir] }],
                  "ring-offset-color": [{ "ring-offset": z() }],
                  "inset-ring-w": [{ "inset-ring": L() }],
                  "inset-ring-color": [{ "inset-ring": z() }],
                  "text-shadow": [{ "text-shadow": ["none", f, Zr, Vr] }],
                  "text-shadow-color": [{ "text-shadow": z() }],
                  opacity: [{ opacity: [_r, qr, Fr] }],
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
                  "mask-image-linear-pos": [{ "mask-linear": [_r] }],
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
                  "mask-image-radial": [{ "mask-radial": [qr, Fr] }],
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
                  "mask-image-conic-pos": [{ "mask-conic": [_r] }],
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
                  "mask-image": [{ mask: ["none", qr, Fr] }],
                  filter: [{ filter: ["", "none", qr, Fr] }],
                  blur: [{ blur: A() }],
                  brightness: [{ brightness: [_r, qr, Fr] }],
                  contrast: [{ contrast: [_r, qr, Fr] }],
                  "drop-shadow": [{ "drop-shadow": ["", "none", p, Zr, Vr] }],
                  "drop-shadow-color": [{ "drop-shadow": z() }],
                  grayscale: [{ grayscale: ["", _r, qr, Fr] }],
                  "hue-rotate": [{ "hue-rotate": [_r, qr, Fr] }],
                  invert: [{ invert: ["", _r, qr, Fr] }],
                  saturate: [{ saturate: [_r, qr, Fr] }],
                  sepia: [{ sepia: ["", _r, qr, Fr] }],
                  "backdrop-filter": [{ "backdrop-filter": ["", "none", qr, Fr] }],
                  "backdrop-blur": [{ "backdrop-blur": A() }],
                  "backdrop-brightness": [{ "backdrop-brightness": [_r, qr, Fr] }],
                  "backdrop-contrast": [{ "backdrop-contrast": [_r, qr, Fr] }],
                  "backdrop-grayscale": [{ "backdrop-grayscale": ["", _r, qr, Fr] }],
                  "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [_r, qr, Fr] }],
                  "backdrop-invert": [{ "backdrop-invert": ["", _r, qr, Fr] }],
                  "backdrop-opacity": [{ "backdrop-opacity": [_r, qr, Fr] }],
                  "backdrop-saturate": [{ "backdrop-saturate": [_r, qr, Fr] }],
                  "backdrop-sepia": [{ "backdrop-sepia": ["", _r, qr, Fr] }],
                  "border-collapse": [{ border: ["collapse", "separate"] }],
                  "border-spacing": [{ "border-spacing": w() }],
                  "border-spacing-x": [{ "border-spacing-x": w() }],
                  "border-spacing-y": [{ "border-spacing-y": w() }],
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
                        qr,
                        Fr,
                      ],
                    },
                  ],
                  "transition-behavior": [{ transition: ["normal", "discrete"] }],
                  duration: [{ duration: [_r, "initial", qr, Fr] }],
                  ease: [{ ease: ["linear", "initial", v, qr, Fr] }],
                  delay: [{ delay: [_r, qr, Fr] }],
                  animate: [{ animate: ["none", y, qr, Fr] }],
                  backface: [{ backface: ["hidden", "visible"] }],
                  perspective: [{ perspective: [h, qr, Fr] }],
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
                  skew: [{ skew: $() }],
                  "skew-x": [{ "skew-x": $() }],
                  "skew-y": [{ "skew-y": $() }],
                  transform: [{ transform: [qr, Fr, "", "none", "gpu", "cpu"] }],
                  "transform-origin": [{ origin: b() }],
                  "transform-style": [{ transform: ["3d", "flat"] }],
                  translate: [{ translate: B() }],
                  "translate-x": [{ "translate-x": B() }],
                  "translate-y": [{ "translate-y": B() }],
                  "translate-z": [{ "translate-z": B() }],
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
                        qr,
                        Fr,
                      ],
                    },
                  ],
                  "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
                  "pointer-events": [{ "pointer-events": ["auto", "none"] }],
                  resize: [{ resize: ["none", "", "y", "x"] }],
                  "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                  "scroll-m": [{ "scroll-m": w() }],
                  "scroll-mx": [{ "scroll-mx": w() }],
                  "scroll-my": [{ "scroll-my": w() }],
                  "scroll-ms": [{ "scroll-ms": w() }],
                  "scroll-me": [{ "scroll-me": w() }],
                  "scroll-mbs": [{ "scroll-mbs": w() }],
                  "scroll-mbe": [{ "scroll-mbe": w() }],
                  "scroll-mt": [{ "scroll-mt": w() }],
                  "scroll-mr": [{ "scroll-mr": w() }],
                  "scroll-mb": [{ "scroll-mb": w() }],
                  "scroll-ml": [{ "scroll-ml": w() }],
                  "scroll-p": [{ "scroll-p": w() }],
                  "scroll-px": [{ "scroll-px": w() }],
                  "scroll-py": [{ "scroll-py": w() }],
                  "scroll-ps": [{ "scroll-ps": w() }],
                  "scroll-pe": [{ "scroll-pe": w() }],
                  "scroll-pbs": [{ "scroll-pbs": w() }],
                  "scroll-pbe": [{ "scroll-pbe": w() }],
                  "scroll-pt": [{ "scroll-pt": w() }],
                  "scroll-pr": [{ "scroll-pr": w() }],
                  "scroll-pb": [{ "scroll-pb": w() }],
                  "scroll-pl": [{ "scroll-pl": w() }],
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
                    { "will-change": ["auto", "scroll", "contents", "transform", qr, Fr] },
                  ],
                  fill: [{ fill: ["none", ...z()] }],
                  "stroke-w": [{ stroke: [_r, Kr, Ir, $r] }],
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
        function da(...e) {
          return ua(qn(e));
        }
        function fa(e) {
          const t = (0, l.c)(6);
          let n, r;
          t[0] !== e
            ? (({ delayDuration: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r))
            : ((n = t[1]), (r = t[2]));
          const a = void 0 === r ? 0 : r;
          let o;
          return (
            t[3] !== a || t[4] !== n
              ? ((o = (0, O.jsx)(In, { "data-slot": "tooltip-provider", delayDuration: a, ...n })),
                (t[3] = a),
                (t[4] = n),
                (t[5] = o))
              : (o = t[5]),
            o
          );
        }
        function pa(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)($n, { "data-slot": "tooltip", ...n })), (t[2] = n), (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function ma(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(Bn, { "data-slot": "tooltip-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function ha(e) {
          const t = (0, l.c)(13);
          let n, r, a, o;
          t[0] !== e
            ? (({ className: r, sideOffset: o, children: n, ...a } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]));
          const i = void 0 === o ? 0 : o;
          let s, c, u;
          return (
            t[5] !== r
              ? ((s = da(
                  "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  r,
                )),
                (t[5] = r),
                (t[6] = s))
              : (s = t[6]),
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, O.jsx)(Wn, {
                  className:
                    "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground",
                })),
                (t[7] = c))
              : (c = t[7]),
            t[8] !== n || t[9] !== a || t[10] !== i || t[11] !== s
              ? ((u = (0, O.jsx)(Hn, {
                  children: (0, O.jsxs)(Un, {
                    "data-slot": "tooltip-content",
                    sideOffset: i,
                    className: s,
                    ...a,
                    children: [n, c],
                  }),
                })),
                (t[8] = n),
                (t[9] = a),
                (t[10] = i),
                (t[11] = s),
                (t[12] = u))
              : (u = t[12]),
            u
          );
        }
        const ga = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
          va = qn,
          ya = (e, t) => (n) => {
            var r;
            if (null == (null == t ? void 0 : t.variants))
              return va(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: a, defaultVariants: o } = t,
              l = Object.keys(a).map((e) => {
                const t = null == n ? void 0 : n[e],
                  r = null == o ? void 0 : o[e];
                if (null === t) return null;
                const l = ga(t) || ga(r);
                return a[e][l];
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
                      let { class: n, className: r, ...a } = t;
                      return Object.entries(a).every((e) => {
                        let [t, n] = e;
                        return Array.isArray(n)
                          ? n.includes({ ...o, ...i }[t])
                          : { ...o, ...i }[t] === n;
                      })
                        ? [...e, n, r]
                        : e;
                    }, []);
            return va(e, l, s, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
          },
          ba = ya(
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
        function wa(e) {
          const t = (0, l.c)(16);
          let n, r, a, o, i;
          t[0] !== e
            ? (({ className: n, variant: a, size: o, asChild: i, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o),
              (t[5] = i))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]), (i = t[5]));
          const s = void 0 === a ? "default" : a,
            c = void 0 === o ? "default" : o,
            u = void 0 !== i && i ? F : "button";
          let d, f;
          return (
            t[6] !== n || t[7] !== c || t[8] !== s
              ? ((d = da(ba({ variant: s, size: c, className: n }))),
                (t[6] = n),
                (t[7] = c),
                (t[8] = s),
                (t[9] = d))
              : (d = t[9]),
            t[10] !== u || t[11] !== r || t[12] !== c || t[13] !== d || t[14] !== s
              ? ((f = (0, O.jsx)(u, {
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
        function xa(e) {
          const t = e + "CollectionProvider",
            [n, a] = R(t),
            [o, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
            i = (e) => {
              const { scope: t, children: n } = e,
                a = r.useRef(null),
                l = r.useRef(new Map()).current;
              return (0, O.jsx)(o, { scope: t, itemMap: l, collectionRef: a, children: n });
            };
          i.displayName = t;
          const s = e + "CollectionSlot",
            c = A(s),
            u = r.forwardRef((e, t) => {
              const { scope: n, children: r } = e,
                a = M(t, l(s, n).collectionRef);
              return (0, O.jsx)(c, { ref: a, children: r });
            });
          u.displayName = s;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            p = A(d),
            m = r.forwardRef((e, t) => {
              const { scope: n, children: a, ...o } = e,
                i = r.useRef(null),
                s = M(t, i),
                c = l(d, n);
              return (
                r.useEffect(
                  () => (
                    c.itemMap.set(i, { ref: i, ...o }),
                    () => {
                      c.itemMap.delete(i);
                    }
                  ),
                ),
                (0, O.jsx)(p, { [f]: "", ref: s, children: a })
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
              a,
            ]
          );
        }
        Map;
        var ka = r.createContext(void 0);
        function Sa(e) {
          const t = r.useContext(ka);
          return e || t || "ltr";
        }
        var Ea = 0;
        function Ca() {
          r.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return (
              document.body.insertAdjacentElement("afterbegin", e[0] ?? Na()),
              document.body.insertAdjacentElement("beforeend", e[1] ?? Na()),
              Ea++,
              () => {
                (1 === Ea &&
                  document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()),
                  Ea--);
              }
            );
          }, []);
        }
        function Na() {
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
        var _a = "focusScope.autoFocusOnMount",
          ja = "focusScope.autoFocusOnUnmount",
          Pa = { bubbles: !1, cancelable: !0 },
          za = r.forwardRef((e, t) => {
            const {
                loop: n = !1,
                trapped: a = !1,
                onMountAutoFocus: o,
                onUnmountAutoFocus: l,
                ...i
              } = e,
              [s, c] = r.useState(null),
              u = W(o),
              d = W(l),
              f = r.useRef(null),
              p = M(t, (e) => c(e)),
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
              if (a) {
                let e = function (e) {
                    if (m.paused || !s) return;
                    const t = e.target;
                    s.contains(t) ? (f.current = t) : Ra(f.current, { select: !0 });
                  },
                  t = function (e) {
                    if (m.paused || !s) return;
                    const t = e.relatedTarget;
                    null !== t && (s.contains(t) || Ra(f.current, { select: !0 }));
                  },
                  n = function (e) {
                    if (document.activeElement === document.body)
                      for (const t of e) t.removedNodes.length > 0 && Ra(s);
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
            }, [a, s, m.paused]),
              r.useEffect(() => {
                if (s) {
                  La.add(m);
                  const e = document.activeElement;
                  if (!s.contains(e)) {
                    const t = new CustomEvent(_a, Pa);
                    (s.addEventListener(_a, u),
                      s.dispatchEvent(t),
                      t.defaultPrevented ||
                        ((function (e, { select: t = !1 } = {}) {
                          const n = document.activeElement;
                          for (const r of e)
                            if ((Ra(r, { select: t }), document.activeElement !== n)) return;
                        })(
                          Ta(s).filter((e) => "A" !== e.tagName),
                          { select: !0 },
                        ),
                        document.activeElement === e && Ra(s)));
                  }
                  return () => {
                    (s.removeEventListener(_a, u),
                      setTimeout(() => {
                        const t = new CustomEvent(ja, Pa);
                        (s.addEventListener(ja, d),
                          s.dispatchEvent(t),
                          t.defaultPrevented || Ra(e ?? document.body, { select: !0 }),
                          s.removeEventListener(ja, d),
                          La.remove(m));
                      }, 0));
                  };
                }
              }, [s, u, d, m]));
            const h = r.useCallback(
              (e) => {
                if (!n && !a) return;
                if (m.paused) return;
                const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                  r = document.activeElement;
                if (t && r) {
                  const t = e.currentTarget,
                    [a, o] = (function (e) {
                      const t = Ta(e);
                      return [Ma(t, e), Ma(t.reverse(), e)];
                    })(t);
                  a && o
                    ? e.shiftKey || r !== o
                      ? e.shiftKey && r === a && (e.preventDefault(), n && Ra(o, { select: !0 }))
                      : (e.preventDefault(), n && Ra(a, { select: !0 }))
                    : r === t && e.preventDefault();
                }
              },
              [n, a, m.paused],
            );
            return (0, O.jsx)(H.div, { tabIndex: -1, ...i, ref: p, onKeyDown: h });
          });
        function Ta(e) {
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
        function Ma(e, t) {
          for (const n of e) if (!Oa(n, { upTo: t })) return n;
        }
        function Oa(e, { upTo: t }) {
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          for (; e; ) {
            if (void 0 !== t && e === t) return !1;
            if ("none" === getComputedStyle(e).display) return !0;
            e = e.parentElement;
          }
          return !1;
        }
        function Ra(e, { select: t = !1 } = {}) {
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
        za.displayName = "FocusScope";
        var La = (function () {
          let e = [];
          return {
            add(t) {
              const n = e[0];
              (t !== n && n?.pause(), (e = Da(e, t)), e.unshift(t));
            },
            remove(t) {
              ((e = Da(e, t)), e[0]?.resume());
            },
          };
        })();
        function Da(e, t) {
          const n = [...e],
            r = n.indexOf(t);
          return (-1 !== r && n.splice(r, 1), n);
        }
        var Aa = "rovingFocusGroup.onEntryFocus",
          Fa = { bubbles: !1, cancelable: !0 },
          Ia = "RovingFocusGroup",
          [$a, Ba, Ha] = xa(Ia),
          [Ua, Wa] = R(Ia, [Ha]),
          [Va, qa] = Ua(Ia),
          Ka = r.forwardRef((e, t) =>
            (0, O.jsx)($a.Provider, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, O.jsx)($a.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, O.jsx)(Qa, { ...e, ref: t }),
              }),
            }),
          );
        Ka.displayName = Ia;
        var Qa = r.forwardRef((e, t) => {
            const {
                __scopeRovingFocusGroup: n,
                orientation: a,
                loop: o = !1,
                dir: l,
                currentTabStopId: i,
                defaultCurrentTabStopId: s,
                onCurrentTabStopIdChange: c,
                onEntryFocus: u,
                preventScrollOnEntryFocus: d = !1,
                ...f
              } = e,
              p = r.useRef(null),
              m = M(t, p),
              h = Sa(l),
              [g, v] = ln({ prop: i, defaultProp: s ?? null, onChange: c, caller: Ia }),
              [y, b] = r.useState(!1),
              w = W(u),
              x = Ba(n),
              k = r.useRef(!1),
              [S, E] = r.useState(0);
            return (
              r.useEffect(() => {
                const e = p.current;
                if (e) return (e.addEventListener(Aa, w), () => e.removeEventListener(Aa, w));
              }, [w]),
              (0, O.jsx)(Va, {
                scope: n,
                orientation: a,
                dir: h,
                loop: o,
                currentTabStopId: g,
                onItemFocus: r.useCallback((e) => v(e), [v]),
                onItemShiftTab: r.useCallback(() => b(!0), []),
                onFocusableItemAdd: r.useCallback(() => E((e) => e + 1), []),
                onFocusableItemRemove: r.useCallback(() => E((e) => e - 1), []),
                children: (0, O.jsx)(H.div, {
                  tabIndex: y || 0 === S ? -1 : 0,
                  "data-orientation": a,
                  ...f,
                  ref: m,
                  style: { outline: "none", ...e.style },
                  onMouseDown: P(e.onMouseDown, () => {
                    k.current = !0;
                  }),
                  onFocus: P(e.onFocus, (e) => {
                    const t = !k.current;
                    if (e.target === e.currentTarget && t && !y) {
                      const t = new CustomEvent(Aa, Fa);
                      if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                        const e = x().filter((e) => e.focusable);
                        Za(
                          [e.find((e) => e.active), e.find((e) => e.id === g), ...e]
                            .filter(Boolean)
                            .map((e) => e.ref.current),
                          d,
                        );
                      }
                    }
                    k.current = !1;
                  }),
                  onBlur: P(e.onBlur, () => b(!1)),
                }),
              })
            );
          }),
          Ya = "RovingFocusGroupItem",
          Ga = r.forwardRef((e, t) => {
            const {
                __scopeRovingFocusGroup: n,
                focusable: a = !0,
                active: o = !1,
                tabStopId: l,
                children: i,
                ...s
              } = e,
              c = ee(),
              u = l || c,
              d = qa(Ya, n),
              f = d.currentTabStopId === u,
              p = Ba(n),
              { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
            return (
              r.useEffect(() => {
                if (a) return (m(), () => h());
              }, [a, m, h]),
              (0, O.jsx)($a.ItemSlot, {
                scope: n,
                id: u,
                focusable: a,
                active: o,
                children: (0, O.jsx)(H.span, {
                  tabIndex: f ? 0 : -1,
                  "data-orientation": d.orientation,
                  ...s,
                  ref: t,
                  onMouseDown: P(e.onMouseDown, (e) => {
                    a ? d.onItemFocus(u) : e.preventDefault();
                  }),
                  onFocus: P(e.onFocus, () => d.onItemFocus(u)),
                  onKeyDown: P(e.onKeyDown, (e) => {
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
                        : Xa[r];
                    })(e, d.orientation, d.dir);
                    if (void 0 !== t) {
                      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                      e.preventDefault();
                      let a = p()
                        .filter((e) => e.focusable)
                        .map((e) => e.ref.current);
                      if ("last" === t) a.reverse();
                      else if ("prev" === t || "next" === t) {
                        "prev" === t && a.reverse();
                        const o = a.indexOf(e.currentTarget);
                        a = d.loop
                          ? ((r = o + 1), (n = a).map((e, t) => n[(r + t) % n.length]))
                          : a.slice(o + 1);
                      }
                      setTimeout(() => Za(a));
                    }
                    var n, r;
                  }),
                  children:
                    "function" == typeof i ? i({ isCurrentTabStop: f, hasTabStop: null != g }) : i,
                }),
              })
            );
          });
        Ga.displayName = Ya;
        var Xa = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last",
        };
        function Za(e, t = !1) {
          const n = document.activeElement;
          for (const r of e) {
            if (r === n) return;
            if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
          }
        }
        var Ja = Ka,
          eo = Ga,
          to = new WeakMap(),
          no = new WeakMap(),
          ro = {},
          ao = 0,
          oo = function (e) {
            return e && (e.host || oo(e.parentNode));
          },
          lo = function (e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e]),
              a =
                t ||
                (function (e) {
                  return "undefined" == typeof document
                    ? null
                    : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
                })(e);
            return a
              ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))),
                (function (e, t, n, r) {
                  var a = (function (e, t) {
                    return t
                      .map(function (t) {
                        if (e.contains(t)) return t;
                        var n = oo(t);
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
                  ro[n] || (ro[n] = new WeakMap());
                  var o = ro[n],
                    l = [],
                    i = new Set(),
                    s = new Set(a),
                    c = function (e) {
                      e && !i.has(e) && (i.add(e), c(e.parentNode));
                    };
                  a.forEach(c);
                  var u = function (e) {
                    e &&
                      !s.has(e) &&
                      Array.prototype.forEach.call(e.children, function (e) {
                        if (i.has(e)) u(e);
                        else
                          try {
                            var t = e.getAttribute(r),
                              a = null !== t && "false" !== t,
                              s = (to.get(e) || 0) + 1,
                              c = (o.get(e) || 0) + 1;
                            (to.set(e, s),
                              o.set(e, c),
                              l.push(e),
                              1 === s && a && no.set(e, !0),
                              1 === c && e.setAttribute(n, "true"),
                              a || e.setAttribute(r, "true"));
                          } catch (t) {
                            console.error("aria-hidden: cannot operate on ", e, t);
                          }
                      });
                  };
                  return (
                    u(t),
                    i.clear(),
                    ao++,
                    function () {
                      (l.forEach(function (e) {
                        var t = to.get(e) - 1,
                          a = o.get(e) - 1;
                        (to.set(e, t),
                          o.set(e, a),
                          t || (no.has(e) || e.removeAttribute(r), no.delete(e)),
                          a || e.removeAttribute(n));
                      }),
                        --ao ||
                          ((to = new WeakMap()),
                          (to = new WeakMap()),
                          (no = new WeakMap()),
                          (ro = {})));
                    }
                  );
                })(r, a, n, "aria-hidden"))
              : function () {
                  return null;
                };
          },
          io = function () {
            return (
              (io =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                  return e;
                }),
              io.apply(this, arguments)
            );
          };
        function so(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        }
        (Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError);
        var co = "right-scroll-bar-position",
          uo = "width-before-scroll-bar";
        function fo(e, t) {
          return ("function" == typeof e ? e(t) : e && (e.current = t), e);
        }
        var po = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
          mo = new WeakMap();
        function ho(e) {
          return e;
        }
        var go = (function (e) {
            void 0 === e && (e = {});
            var t = (function (e, t) {
              void 0 === t && (t = ho);
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
                  var a = t(e, r);
                  return (
                    n.push(a),
                    function () {
                      n = n.filter(function (e) {
                        return e !== a;
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
                    var a = n;
                    ((n = []), a.forEach(e), (t = n));
                  }
                  var o = function () {
                      var n = t;
                      ((t = []), n.forEach(e));
                    },
                    l = function () {
                      return Promise.resolve().then(o);
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
            return ((t.options = io({ async: !0, ssr: !1 }, e)), t);
          })(),
          vo = function () {},
          yo = r.forwardRef(function (e, t) {
            var n = r.useRef(null),
              a = r.useState({ onScrollCapture: vo, onWheelCapture: vo, onTouchMoveCapture: vo }),
              o = a[0],
              l = a[1],
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
              w = e.gapMode,
              x = so(e, [
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
                  a,
                  o,
                  l =
                    ((n = t || null),
                    (a = function (t) {
                      return e.forEach(function (e) {
                        return fo(e, t);
                      });
                    }),
                    ((o = (0, r.useState)(function () {
                      return {
                        value: n,
                        callback: a,
                        facade: {
                          get current() {
                            return o.value;
                          },
                          set current(e) {
                            var t = o.value;
                            t !== e && ((o.value = e), o.callback(e, t));
                          },
                        },
                      };
                    })[0]).callback = a),
                    o.facade);
                return (
                  po(
                    function () {
                      var t = mo.get(l);
                      if (t) {
                        var n = new Set(t),
                          r = new Set(e),
                          a = l.current;
                        (n.forEach(function (e) {
                          r.has(e) || fo(e, null);
                        }),
                          r.forEach(function (e) {
                            n.has(e) || fo(e, a);
                          }));
                      }
                      mo.set(l, e);
                    },
                    [e],
                  ),
                  l
                );
              })([n, t]),
              E = io(io({}, x), o);
            return r.createElement(
              r.Fragment,
              null,
              d &&
                r.createElement(k, {
                  sideCar: go,
                  removeScrollBar: u,
                  shards: f,
                  noRelative: m,
                  noIsolation: h,
                  inert: g,
                  setCallbacks: l,
                  allowPinchZoom: !!v,
                  lockRef: n,
                  gapMode: w,
                }),
              i
                ? r.cloneElement(r.Children.only(s), io(io({}, E), { ref: S }))
                : r.createElement(b, io({}, E, { className: c, ref: S }), s),
            );
          });
        ((yo.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
          (yo.classNames = { fullWidth: uo, zeroRight: co }));
        var bo = function (e) {
          var t = e.sideCar,
            n = so(e, ["sideCar"]);
          if (!t)
            throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var a = t.read();
          if (!a) throw new Error("Sidecar medium not found");
          return r.createElement(a, io({}, n));
        };
        bo.isSideCarExport = !0;
        var wo = function () {
            var e = 0,
              t = null;
            return {
              add: function (r) {
                var a, o;
                (0 == e &&
                  (t = (function () {
                    if (!document) return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var t = n.nc;
                    return (t && e.setAttribute("nonce", t), e);
                  })()) &&
                  ((o = r),
                  (a = t).styleSheet
                    ? (a.styleSheet.cssText = o)
                    : a.appendChild(document.createTextNode(o)),
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
          xo = function () {
            var e,
              t =
                ((e = wo()),
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
          ko = { left: 0, top: 0, right: 0, gap: 0 },
          So = function (e) {
            return parseInt(e || "", 10) || 0;
          },
          Eo = xo(),
          Co = "data-scroll-locked",
          No = function (e, t, n, r) {
            var a = e.left,
              o = e.top,
              l = e.right,
              i = e.gap;
            return (
              void 0 === n && (n = "margin"),
              "\n  ."
                .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
                .concat(r, ";\n   padding-right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  body[")
                .concat(Co, "] {\n    overflow: hidden ")
                .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                .concat(
                  [
                    t && "position: relative ".concat(r, ";"),
                    "margin" === n &&
                      "\n    padding-left: "
                        .concat(a, "px;\n    padding-top: ")
                        .concat(o, "px;\n    padding-right: ")
                        .concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                        .concat(i, "px ")
                        .concat(r, ";\n    "),
                    "padding" === n && "padding-right: ".concat(i, "px ").concat(r, ";"),
                  ]
                    .filter(Boolean)
                    .join(""),
                  "\n  }\n  \n  .",
                )
                .concat(co, " {\n    right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(uo, " {\n    margin-right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(co, " .")
                .concat(co, " {\n    right: 0 ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(uo, " .")
                .concat(uo, " {\n    margin-right: 0 ")
                .concat(r, ";\n  }\n  \n  body[")
                .concat(Co, "] {\n    ")
                .concat("--removed-body-scroll-bar-size", ": ")
                .concat(i, "px;\n  }\n")
            );
          },
          _o = function () {
            var e = parseInt(document.body.getAttribute(Co) || "0", 10);
            return isFinite(e) ? e : 0;
          },
          jo = function (e) {
            var t = e.noRelative,
              n = e.noImportant,
              a = e.gapMode,
              o = void 0 === a ? "margin" : a;
            r.useEffect(function () {
              return (
                document.body.setAttribute(Co, (_o() + 1).toString()),
                function () {
                  var e = _o() - 1;
                  e <= 0
                    ? document.body.removeAttribute(Co)
                    : document.body.setAttribute(Co, e.toString());
                }
              );
            }, []);
            var l = r.useMemo(
              function () {
                return (function (e) {
                  if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return ko;
                  var t = (function (e) {
                      var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        a = t["padding" === e ? "paddingRight" : "marginRight"];
                      return [So(n), So(r), So(a)];
                    })(e),
                    n = document.documentElement.clientWidth,
                    r = window.innerWidth;
                  return {
                    left: t[0],
                    top: t[1],
                    right: t[2],
                    gap: Math.max(0, r - n + t[2] - t[0]),
                  };
                })(o);
              },
              [o],
            );
            return r.createElement(Eo, { styles: No(l, !t, o, n ? "" : "!important") });
          },
          Po = !1;
        if ("undefined" != typeof window)
          try {
            var zo = Object.defineProperty({}, "passive", {
              get: function () {
                return ((Po = !0), !0);
              },
            });
            (window.addEventListener("test", zo, zo), window.removeEventListener("test", zo, zo));
          } catch (e) {
            Po = !1;
          }
        var To = !!Po && { passive: !1 },
          Mo = function (e, t) {
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
          Oo = function (e, t) {
            var n = t.ownerDocument,
              r = t;
            do {
              if (
                ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
                Ro(e, r))
              ) {
                var a = Lo(e, r);
                if (a[1] > a[2]) return !0;
              }
              r = r.parentNode;
            } while (r && r !== n.body);
            return !1;
          },
          Ro = function (e, t) {
            return "v" === e
              ? (function (e) {
                  return Mo(e, "overflowY");
                })(t)
              : (function (e) {
                  return Mo(e, "overflowX");
                })(t);
          },
          Lo = function (e, t) {
            return "v" === e
              ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
              : (function (e) {
                  return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                })(t);
            var n;
          },
          Do = function (e) {
            return "changedTouches" in e
              ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
              : [0, 0];
          },
          Ao = function (e) {
            return [e.deltaX, e.deltaY];
          },
          Fo = function (e) {
            return e && "current" in e ? e.current : e;
          },
          Io = function (e) {
            return "\n  .block-interactivity-"
              .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
              .concat(e, " {pointer-events: all;}\n");
          },
          $o = 0,
          Bo = [];
        function Ho(e) {
          for (var t = null; null !== e; )
            (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
          return t;
        }
        const Uo =
          ((Wo = function (e) {
            var t = r.useRef([]),
              n = r.useRef([0, 0]),
              a = r.useRef(),
              o = r.useState($o++)[0],
              l = r.useState(xo)[0],
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
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function (e, t, n) {
                      if (n || 2 === arguments.length)
                        for (var r, a = 0, o = t.length; a < o; a++)
                          (!r && a in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map(Fo), !0).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add("allow-interactivity-".concat(o));
                      }),
                      function () {
                        (document.body.classList.remove("block-interactivity-".concat(o)),
                          t.forEach(function (e) {
                            return e.classList.remove("allow-interactivity-".concat(o));
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
                  o = Do(e),
                  l = n.current,
                  s = "deltaX" in e ? e.deltaX : l[0] - o[0],
                  c = "deltaY" in e ? e.deltaY : l[1] - o[1],
                  u = e.target,
                  d = Math.abs(s) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === u.type) return !1;
                var f = window.getSelection(),
                  p = f && f.anchorNode;
                if (p && (p === u || p.contains(u))) return !1;
                var m = Oo(d, u);
                if (!m) return !0;
                if ((m ? (r = d) : ((r = "v" === d ? "h" : "v"), (m = Oo(d, u))), !m)) return !1;
                if ((!a.current && "changedTouches" in e && (s || c) && (a.current = r), !r))
                  return !0;
                var h = a.current || r;
                return (function (e, t, n, r) {
                  var a = (function (e, t) {
                      return "h" === e && "rtl" === t ? -1 : 1;
                    })(e, window.getComputedStyle(t).direction),
                    o = a * r,
                    l = n.target,
                    i = t.contains(l),
                    s = !1,
                    c = o > 0,
                    u = 0,
                    d = 0;
                  do {
                    if (!l) break;
                    var f = Lo(e, l),
                      p = f[0],
                      m = f[1] - f[2] - a * p;
                    (p || m) && Ro(e, l) && ((u += m), (d += p));
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
                if (Bo.length && Bo[Bo.length - 1] === l) {
                  var r = "deltaY" in n ? Ao(n) : Do(n),
                    a = t.current.filter(function (e) {
                      return (
                        e.name === n.type &&
                        (e.target === n.target || n.target === e.shadowParent) &&
                        ((t = e.delta), (a = r), t[0] === a[0] && t[1] === a[1])
                      );
                      var t, a;
                    })[0];
                  if (a && a.should) n.cancelable && n.preventDefault();
                  else if (!a) {
                    var o = (i.current.shards || [])
                      .map(Fo)
                      .filter(Boolean)
                      .filter(function (e) {
                        return e.contains(n.target);
                      });
                    (o.length > 0 ? s(n, o[0]) : !i.current.noIsolation) &&
                      n.cancelable &&
                      n.preventDefault();
                  }
                }
              }, []),
              u = r.useCallback(function (e, n, r, a) {
                var o = { name: e, delta: n, target: r, should: a, shadowParent: Ho(r) };
                (t.current.push(o),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== o;
                    });
                  }, 1));
              }, []),
              d = r.useCallback(function (e) {
                ((n.current = Do(e)), (a.current = void 0));
              }, []),
              f = r.useCallback(function (t) {
                u(t.type, Ao(t), t.target, s(t, e.lockRef.current));
              }, []),
              p = r.useCallback(function (t) {
                u(t.type, Do(t), t.target, s(t, e.lockRef.current));
              }, []);
            r.useEffect(function () {
              return (
                Bo.push(l),
                e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                document.addEventListener("wheel", c, To),
                document.addEventListener("touchmove", c, To),
                document.addEventListener("touchstart", d, To),
                function () {
                  ((Bo = Bo.filter(function (e) {
                    return e !== l;
                  })),
                    document.removeEventListener("wheel", c, To),
                    document.removeEventListener("touchmove", c, To),
                    document.removeEventListener("touchstart", d, To));
                }
              );
            }, []);
            var m = e.removeScrollBar,
              h = e.inert;
            return r.createElement(
              r.Fragment,
              null,
              h ? r.createElement(l, { styles: Io(o) }) : null,
              m ? r.createElement(jo, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
            );
          }),
          go.useMedium(Wo),
          bo);
        var Wo,
          Vo = r.forwardRef(function (e, t) {
            return r.createElement(yo, io({}, e, { ref: t, sideCar: Uo }));
          });
        Vo.classNames = yo.classNames;
        const qo = Vo;
        var Ko = ["Enter", " "],
          Qo = ["ArrowUp", "PageDown", "End"],
          Yo = ["ArrowDown", "PageUp", "Home", ...Qo],
          Go = { ltr: [...Ko, "ArrowRight"], rtl: [...Ko, "ArrowLeft"] },
          Xo = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
          Zo = "Menu",
          [Jo, el, tl] = xa(Zo),
          [nl, rl] = R(Zo, [tl, Dt, Wa]),
          al = Dt(),
          ol = Wa(),
          [ll, il] = nl(Zo),
          [sl, cl] = nl(Zo),
          ul = (e) => {
            const {
                __scopeMenu: t,
                open: n = !1,
                children: a,
                dir: o,
                onOpenChange: l,
                modal: i = !0,
              } = e,
              s = al(t),
              [c, u] = r.useState(null),
              d = r.useRef(!1),
              f = W(l),
              p = Sa(o);
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
              (0, O.jsx)(Zt, {
                ...s,
                children: (0, O.jsx)(ll, {
                  scope: t,
                  open: n,
                  onOpenChange: f,
                  content: c,
                  onContentChange: u,
                  children: (0, O.jsx)(sl, {
                    scope: t,
                    onClose: r.useCallback(() => f(!1), [f]),
                    isUsingKeyboardRef: d,
                    dir: p,
                    modal: i,
                    children: a,
                  }),
                }),
              })
            );
          };
        ul.displayName = Zo;
        var dl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e,
            a = al(n);
          return (0, O.jsx)(Jt, { ...a, ...r, ref: t });
        });
        dl.displayName = "MenuAnchor";
        var fl = "MenuPortal",
          [pl, ml] = nl(fl, { forceMount: void 0 }),
          hl = (e) => {
            const { __scopeMenu: t, forceMount: n, children: r, container: a } = e,
              o = il(fl, t);
            return (0, O.jsx)(pl, {
              scope: t,
              forceMount: n,
              children: (0, O.jsx)(rn, {
                present: n || o.open,
                children: (0, O.jsx)(nn, { asChild: !0, container: a, children: r }),
              }),
            });
          };
        hl.displayName = fl;
        var gl = "MenuContent",
          [vl, yl] = nl(gl),
          bl = r.forwardRef((e, t) => {
            const n = ml(gl, e.__scopeMenu),
              { forceMount: r = n.forceMount, ...a } = e,
              o = il(gl, e.__scopeMenu),
              l = cl(gl, e.__scopeMenu);
            return (0, O.jsx)(Jo.Provider, {
              scope: e.__scopeMenu,
              children: (0, O.jsx)(rn, {
                present: r || o.open,
                children: (0, O.jsx)(Jo.Slot, {
                  scope: e.__scopeMenu,
                  children: l.modal
                    ? (0, O.jsx)(wl, { ...a, ref: t })
                    : (0, O.jsx)(xl, { ...a, ref: t }),
                }),
              }),
            });
          }),
          wl = r.forwardRef((e, t) => {
            const n = il(gl, e.__scopeMenu),
              a = r.useRef(null),
              o = M(t, a);
            return (
              r.useEffect(() => {
                const e = a.current;
                if (e) return lo(e);
              }, []),
              (0, O.jsx)(Sl, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: P(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
                onDismiss: () => n.onOpenChange(!1),
              })
            );
          }),
          xl = r.forwardRef((e, t) => {
            const n = il(gl, e.__scopeMenu);
            return (0, O.jsx)(Sl, {
              ...e,
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            });
          }),
          kl = A("MenuContent.ScrollLock"),
          Sl = r.forwardRef((e, t) => {
            const {
                __scopeMenu: n,
                loop: a = !1,
                trapFocus: o,
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
              v = il(gl, n),
              y = cl(gl, n),
              b = al(n),
              w = ol(n),
              x = el(n),
              [k, S] = r.useState(null),
              E = r.useRef(null),
              C = M(t, E, v.onContentChange),
              N = r.useRef(0),
              _ = r.useRef(""),
              j = r.useRef(0),
              z = r.useRef(null),
              T = r.useRef("right"),
              R = r.useRef(0),
              L = h ? qo : r.Fragment,
              D = h ? { as: kl, allowPinchZoom: !0 } : void 0;
            (r.useEffect(() => () => window.clearTimeout(N.current), []), Ca());
            const A = r.useCallback(
              (e) =>
                T.current === z.current?.side &&
                (function (e, t) {
                  if (!t) return !1;
                  return (function (e, t) {
                    const { x: n, y: r } = e;
                    let a = !1;
                    for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                      const l = t[e],
                        i = t[o],
                        s = l.x,
                        c = l.y,
                        u = i.x,
                        d = i.y;
                      c > r != d > r && n < ((u - s) * (r - c)) / (d - c) + s && (a = !a);
                    }
                    return a;
                  })({ x: e.clientX, y: e.clientY }, t);
                })(e, z.current?.area),
              [],
            );
            return (0, O.jsx)(vl, {
              scope: n,
              searchRef: _,
              onItemEnter: r.useCallback(
                (e) => {
                  A(e) && e.preventDefault();
                },
                [A],
              ),
              onItemLeave: r.useCallback(
                (e) => {
                  A(e) || (E.current?.focus(), S(null));
                },
                [A],
              ),
              onTriggerLeave: r.useCallback(
                (e) => {
                  A(e) && e.preventDefault();
                },
                [A],
              ),
              pointerGraceTimerRef: j,
              onPointerGraceIntentChange: r.useCallback((e) => {
                z.current = e;
              }, []),
              children: (0, O.jsx)(L, {
                ...D,
                children: (0, O.jsx)(za, {
                  asChild: !0,
                  trapped: o,
                  onMountAutoFocus: P(l, (e) => {
                    (e.preventDefault(), E.current?.focus({ preventScroll: !0 }));
                  }),
                  onUnmountAutoFocus: i,
                  children: (0, O.jsx)(Q, {
                    asChild: !0,
                    disableOutsidePointerEvents: s,
                    onEscapeKeyDown: u,
                    onPointerDownOutside: d,
                    onFocusOutside: f,
                    onInteractOutside: p,
                    onDismiss: m,
                    children: (0, O.jsx)(Ja, {
                      asChild: !0,
                      ...w,
                      dir: y.dir,
                      orientation: "vertical",
                      loop: a,
                      currentTabStopId: k,
                      onCurrentTabStopIdChange: S,
                      onEntryFocus: P(c, (e) => {
                        y.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                      preventScrollOnEntryFocus: !0,
                      children: (0, O.jsx)(en, {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Gl(v.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...g,
                        ref: C,
                        style: { outline: "none", ...g.style },
                        onKeyDown: P(g.onKeyDown, (e) => {
                          const t =
                              e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                            n = e.ctrlKey || e.altKey || e.metaKey,
                            r = 1 === e.key.length;
                          t &&
                            ("Tab" === e.key && e.preventDefault(),
                            !n &&
                              r &&
                              ((e) => {
                                const t = _.current + e,
                                  n = x().filter((e) => !e.disabled),
                                  r = document.activeElement,
                                  a = n.find((e) => e.ref.current === r)?.textValue,
                                  o = (function (e, t, n) {
                                    const r =
                                        t.length > 1 && Array.from(t).every((e) => e === t[0])
                                          ? t[0]
                                          : t,
                                      a = n ? e.indexOf(n) : -1;
                                    let o =
                                      ((l = e),
                                      (i = Math.max(a, 0)),
                                      l.map((e, t) => l[(i + t) % l.length]));
                                    var l, i;
                                    1 === r.length && (o = o.filter((e) => e !== n));
                                    const s = o.find((e) =>
                                      e.toLowerCase().startsWith(r.toLowerCase()),
                                    );
                                    return s !== n ? s : void 0;
                                  })(
                                    n.map((e) => e.textValue),
                                    t,
                                    a,
                                  ),
                                  l = n.find((e) => e.textValue === o)?.ref.current;
                                (!(function e(t) {
                                  ((_.current = t),
                                    window.clearTimeout(N.current),
                                    "" !== t && (N.current = window.setTimeout(() => e(""), 1e3)));
                                })(t),
                                  l && setTimeout(() => l.focus()));
                              })(e.key));
                          const a = E.current;
                          if (e.target !== a) return;
                          if (!Yo.includes(e.key)) return;
                          e.preventDefault();
                          const o = x()
                            .filter((e) => !e.disabled)
                            .map((e) => e.ref.current);
                          (Qo.includes(e.key) && o.reverse(),
                            (function (e) {
                              const t = document.activeElement;
                              for (const n of e) {
                                if (n === t) return;
                                if ((n.focus(), document.activeElement !== t)) return;
                              }
                            })(o));
                        }),
                        onBlur: P(e.onBlur, (e) => {
                          e.currentTarget.contains(e.target) ||
                            (window.clearTimeout(N.current), (_.current = ""));
                        }),
                        onPointerMove: P(
                          e.onPointerMove,
                          Jl((e) => {
                            const t = e.target,
                              n = R.current !== e.clientX;
                            if (e.currentTarget.contains(t) && n) {
                              const t = e.clientX > R.current ? "right" : "left";
                              ((T.current = t), (R.current = e.clientX));
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
        bl.displayName = gl;
        var El = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, O.jsx)(H.div, { role: "group", ...r, ref: t });
        });
        El.displayName = "MenuGroup";
        var Cl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, O.jsx)(H.div, { ...r, ref: t });
        });
        Cl.displayName = "MenuLabel";
        var Nl = "MenuItem",
          _l = "menu.itemSelect",
          jl = r.forwardRef((e, t) => {
            const { disabled: n = !1, onSelect: a, ...o } = e,
              l = r.useRef(null),
              i = cl(Nl, e.__scopeMenu),
              s = yl(Nl, e.__scopeMenu),
              c = M(t, l),
              u = r.useRef(!1);
            return (0, O.jsx)(Pl, {
              ...o,
              ref: c,
              disabled: n,
              onClick: P(e.onClick, () => {
                const e = l.current;
                if (!n && e) {
                  const t = new CustomEvent(_l, { bubbles: !0, cancelable: !0 });
                  (e.addEventListener(_l, (e) => a?.(e), { once: !0 }),
                    U(e, t),
                    t.defaultPrevented ? (u.current = !1) : i.onClose());
                }
              }),
              onPointerDown: (t) => {
                (e.onPointerDown?.(t), (u.current = !0));
              },
              onPointerUp: P(e.onPointerUp, (e) => {
                u.current || e.currentTarget?.click();
              }),
              onKeyDown: P(e.onKeyDown, (e) => {
                const t = "" !== s.searchRef.current;
                n ||
                  (t && " " === e.key) ||
                  (Ko.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
              }),
            });
          });
        jl.displayName = Nl;
        var Pl = r.forwardRef((e, t) => {
            const { __scopeMenu: n, disabled: a = !1, textValue: o, ...l } = e,
              i = yl(Nl, n),
              s = ol(n),
              c = r.useRef(null),
              u = M(t, c),
              [d, f] = r.useState(!1),
              [p, m] = r.useState("");
            return (
              r.useEffect(() => {
                const e = c.current;
                e && m((e.textContent ?? "").trim());
              }, [l.children]),
              (0, O.jsx)(Jo.ItemSlot, {
                scope: n,
                disabled: a,
                textValue: o ?? p,
                children: (0, O.jsx)(eo, {
                  asChild: !0,
                  ...s,
                  focusable: !a,
                  children: (0, O.jsx)(H.div, {
                    role: "menuitem",
                    "data-highlighted": d ? "" : void 0,
                    "aria-disabled": a || void 0,
                    "data-disabled": a ? "" : void 0,
                    ...l,
                    ref: u,
                    onPointerMove: P(
                      e.onPointerMove,
                      Jl((e) => {
                        a
                          ? i.onItemLeave(e)
                          : (i.onItemEnter(e),
                            e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
                      }),
                    ),
                    onPointerLeave: P(
                      e.onPointerLeave,
                      Jl((e) => i.onItemLeave(e)),
                    ),
                    onFocus: P(e.onFocus, () => f(!0)),
                    onBlur: P(e.onBlur, () => f(!1)),
                  }),
                }),
              })
            );
          }),
          zl = r.forwardRef((e, t) => {
            const { checked: n = !1, onCheckedChange: r, ...a } = e;
            return (0, O.jsx)(Fl, {
              scope: e.__scopeMenu,
              checked: n,
              children: (0, O.jsx)(jl, {
                role: "menuitemcheckbox",
                "aria-checked": Xl(n) ? "mixed" : n,
                ...a,
                ref: t,
                "data-state": Zl(n),
                onSelect: P(a.onSelect, () => r?.(!!Xl(n) || !n), { checkForDefaultPrevented: !1 }),
              }),
            });
          });
        zl.displayName = "MenuCheckboxItem";
        var Tl = "MenuRadioGroup",
          [Ml, Ol] = nl(Tl, { value: void 0, onValueChange: () => {} }),
          Rl = r.forwardRef((e, t) => {
            const { value: n, onValueChange: r, ...a } = e,
              o = W(r);
            return (0, O.jsx)(Ml, {
              scope: e.__scopeMenu,
              value: n,
              onValueChange: o,
              children: (0, O.jsx)(El, { ...a, ref: t }),
            });
          });
        Rl.displayName = Tl;
        var Ll = "MenuRadioItem",
          Dl = r.forwardRef((e, t) => {
            const { value: n, ...r } = e,
              a = Ol(Ll, e.__scopeMenu),
              o = n === a.value;
            return (0, O.jsx)(Fl, {
              scope: e.__scopeMenu,
              checked: o,
              children: (0, O.jsx)(jl, {
                role: "menuitemradio",
                "aria-checked": o,
                ...r,
                ref: t,
                "data-state": Zl(o),
                onSelect: P(r.onSelect, () => a.onValueChange?.(n), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            });
          });
        Dl.displayName = Ll;
        var Al = "MenuItemIndicator",
          [Fl, Il] = nl(Al, { checked: !1 }),
          $l = r.forwardRef((e, t) => {
            const { __scopeMenu: n, forceMount: r, ...a } = e,
              o = Il(Al, n);
            return (0, O.jsx)(rn, {
              present: r || Xl(o.checked) || !0 === o.checked,
              children: (0, O.jsx)(H.span, { ...a, ref: t, "data-state": Zl(o.checked) }),
            });
          });
        $l.displayName = Al;
        var Bl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, O.jsx)(H.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...r,
            ref: t,
          });
        });
        Bl.displayName = "MenuSeparator";
        var Hl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e,
            a = al(n);
          return (0, O.jsx)(tn, { ...a, ...r, ref: t });
        });
        Hl.displayName = "MenuArrow";
        var Ul = "MenuSub",
          [Wl, Vl] = nl(Ul),
          ql = "MenuSubTrigger",
          Kl = r.forwardRef((e, t) => {
            const n = il(ql, e.__scopeMenu),
              a = cl(ql, e.__scopeMenu),
              o = Vl(ql, e.__scopeMenu),
              l = yl(ql, e.__scopeMenu),
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
              (0, O.jsx)(dl, {
                asChild: !0,
                ...u,
                children: (0, O.jsx)(Pl, {
                  id: o.triggerId,
                  "aria-haspopup": "menu",
                  "aria-expanded": n.open,
                  "aria-controls": o.contentId,
                  "data-state": Gl(n.open),
                  ...e,
                  ref: T(t, o.onTriggerChange),
                  onClick: (t) => {
                    (e.onClick?.(t),
                      e.disabled ||
                        t.defaultPrevented ||
                        (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
                  },
                  onPointerMove: P(
                    e.onPointerMove,
                    Jl((t) => {
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
                  onPointerLeave: P(
                    e.onPointerLeave,
                    Jl((e) => {
                      d();
                      const t = n.content?.getBoundingClientRect();
                      if (t) {
                        const r = n.content?.dataset.side,
                          a = "right" === r,
                          o = a ? -5 : 5,
                          i = t[a ? "left" : "right"],
                          c = t[a ? "right" : "left"];
                        (l.onPointerGraceIntentChange({
                          area: [
                            { x: e.clientX + o, y: e.clientY },
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
                  onKeyDown: P(e.onKeyDown, (t) => {
                    const r = "" !== l.searchRef.current;
                    e.disabled ||
                      (r && " " === t.key) ||
                      (Go[a.dir].includes(t.key) &&
                        (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()));
                  }),
                }),
              })
            );
          });
        Kl.displayName = ql;
        var Ql = "MenuSubContent",
          Yl = r.forwardRef((e, t) => {
            const n = ml(gl, e.__scopeMenu),
              { forceMount: a = n.forceMount, ...o } = e,
              l = il(gl, e.__scopeMenu),
              i = cl(gl, e.__scopeMenu),
              s = Vl(Ql, e.__scopeMenu),
              c = r.useRef(null),
              u = M(t, c);
            return (0, O.jsx)(Jo.Provider, {
              scope: e.__scopeMenu,
              children: (0, O.jsx)(rn, {
                present: a || l.open,
                children: (0, O.jsx)(Jo.Slot, {
                  scope: e.__scopeMenu,
                  children: (0, O.jsx)(Sl, {
                    id: s.contentId,
                    "aria-labelledby": s.triggerId,
                    ...o,
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
                    onFocusOutside: P(e.onFocusOutside, (e) => {
                      e.target !== s.trigger && l.onOpenChange(!1);
                    }),
                    onEscapeKeyDown: P(e.onEscapeKeyDown, (e) => {
                      (i.onClose(), e.preventDefault());
                    }),
                    onKeyDown: P(e.onKeyDown, (e) => {
                      const t = e.currentTarget.contains(e.target),
                        n = Xo[i.dir].includes(e.key);
                      t && n && (l.onOpenChange(!1), s.trigger?.focus(), e.preventDefault());
                    }),
                  }),
                }),
              }),
            });
          });
        function Gl(e) {
          return e ? "open" : "closed";
        }
        function Xl(e) {
          return "indeterminate" === e;
        }
        function Zl(e) {
          return Xl(e) ? "indeterminate" : e ? "checked" : "unchecked";
        }
        function Jl(e) {
          return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
        }
        Yl.displayName = Ql;
        var ei = ul,
          ti = dl,
          ni = hl,
          ri = bl,
          ai = El,
          oi = Cl,
          li = jl,
          ii = zl,
          si = Rl,
          ci = Dl,
          ui = $l,
          di = Bl,
          fi = Hl,
          pi = Kl,
          mi = Yl,
          hi = "DropdownMenu",
          [gi, vi] = R(hi, [rl]),
          yi = rl(),
          [bi, wi] = gi(hi),
          xi = (e) => {
            const {
                __scopeDropdownMenu: t,
                children: n,
                dir: a,
                open: o,
                defaultOpen: l,
                onOpenChange: i,
                modal: s = !0,
              } = e,
              c = yi(t),
              u = r.useRef(null),
              [d, f] = ln({ prop: o, defaultProp: l ?? !1, onChange: i, caller: hi });
            return (0, O.jsx)(bi, {
              scope: t,
              triggerId: ee(),
              triggerRef: u,
              contentId: ee(),
              open: d,
              onOpenChange: f,
              onOpenToggle: r.useCallback(() => f((e) => !e), [f]),
              modal: s,
              children: (0, O.jsx)(ei, {
                ...c,
                open: d,
                onOpenChange: f,
                dir: a,
                modal: s,
                children: n,
              }),
            });
          };
        xi.displayName = hi;
        var ki = "DropdownMenuTrigger",
          Si = r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e,
              o = wi(ki, n),
              l = yi(n);
            return (0, O.jsx)(ti, {
              asChild: !0,
              ...l,
              children: (0, O.jsx)(H.button, {
                type: "button",
                id: o.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": o.open,
                "aria-controls": o.open ? o.contentId : void 0,
                "data-state": o.open ? "open" : "closed",
                "data-disabled": r ? "" : void 0,
                disabled: r,
                ...a,
                ref: T(t, o.triggerRef),
                onPointerDown: P(e.onPointerDown, (e) => {
                  r ||
                    0 !== e.button ||
                    !1 !== e.ctrlKey ||
                    (o.onOpenToggle(), o.open || e.preventDefault());
                }),
                onKeyDown: P(e.onKeyDown, (e) => {
                  r ||
                    (["Enter", " "].includes(e.key) && o.onOpenToggle(),
                    "ArrowDown" === e.key && o.onOpenChange(!0),
                    ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
                }),
              }),
            });
          });
        Si.displayName = ki;
        var Ei = (e) => {
          const { __scopeDropdownMenu: t, ...n } = e,
            r = yi(t);
          return (0, O.jsx)(ni, { ...r, ...n });
        };
        Ei.displayName = "DropdownMenuPortal";
        var Ci = "DropdownMenuContent",
          Ni = r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...a } = e,
              o = wi(Ci, n),
              l = yi(n),
              i = r.useRef(!1);
            return (0, O.jsx)(ri, {
              id: o.contentId,
              "aria-labelledby": o.triggerId,
              ...l,
              ...a,
              ref: t,
              onCloseAutoFocus: P(e.onCloseAutoFocus, (e) => {
                (i.current || o.triggerRef.current?.focus(), (i.current = !1), e.preventDefault());
              }),
              onInteractOutside: P(e.onInteractOutside, (e) => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                (o.modal && !r) || (i.current = !0);
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
        Ni.displayName = Ci;
        var _i = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            a = yi(n);
          return (0, O.jsx)(ai, { ...a, ...r, ref: t });
        });
        _i.displayName = "DropdownMenuGroup";
        var ji = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            a = yi(n);
          return (0, O.jsx)(oi, { ...a, ...r, ref: t });
        });
        ji.displayName = "DropdownMenuLabel";
        var Pi = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            a = yi(n);
          return (0, O.jsx)(li, { ...a, ...r, ref: t });
        });
        ((Pi.displayName = "DropdownMenuItem"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              a = yi(n);
            return (0, O.jsx)(ii, { ...a, ...r, ref: t });
          }).displayName = "DropdownMenuCheckboxItem"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              a = yi(n);
            return (0, O.jsx)(si, { ...a, ...r, ref: t });
          }).displayName = "DropdownMenuRadioGroup"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              a = yi(n);
            return (0, O.jsx)(ci, { ...a, ...r, ref: t });
          }).displayName = "DropdownMenuRadioItem"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              a = yi(n);
            return (0, O.jsx)(ui, { ...a, ...r, ref: t });
          }).displayName = "DropdownMenuItemIndicator"));
        var zi = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            a = yi(n);
          return (0, O.jsx)(di, { ...a, ...r, ref: t });
        });
        ((zi.displayName = "DropdownMenuSeparator"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              a = yi(n);
            return (0, O.jsx)(fi, { ...a, ...r, ref: t });
          }).displayName = "DropdownMenuArrow"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              a = yi(n);
            return (0, O.jsx)(pi, { ...a, ...r, ref: t });
          }).displayName = "DropdownMenuSubTrigger"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              a = yi(n);
            return (0, O.jsx)(mi, {
              ...a,
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
        var Ti = xi,
          Mi = Si,
          Oi = Ei,
          Ri = Ni,
          Li = _i,
          Di = ji,
          Ai = Pi,
          Fi = zi;
        function Ii(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(Ti, { "data-slot": "dropdown-menu", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function $i(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(Mi, { "data-slot": "dropdown-menu-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Bi(e) {
          const t = (0, l.c)(12);
          let n, r, a, o;
          t[0] !== e
            ? (({ className: n, align: a, sideOffset: o, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]));
          const i = void 0 === a ? "start" : a,
            s = void 0 === o ? 4 : o;
          let c, u;
          return (
            t[5] !== n
              ? ((c = da(
                  "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  n,
                )),
                (t[5] = n),
                (t[6] = c))
              : (c = t[6]),
            t[7] !== i || t[8] !== r || t[9] !== s || t[10] !== c
              ? ((u = (0, O.jsx)(Oi, {
                  children: (0, O.jsx)(Ri, {
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
        function Hi(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(Li, { "data-slot": "dropdown-menu-group", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Ui(e) {
          const t = (0, l.c)(12);
          let n, r, a, o;
          t[0] !== e
            ? (({ className: n, inset: r, variant: o, ...a } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]));
          const i = void 0 === o ? "default" : o;
          let s, c;
          return (
            t[5] !== n
              ? ((s = da(
                  "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
                  n,
                )),
                (t[5] = n),
                (t[6] = s))
              : (s = t[6]),
            t[7] !== r || t[8] !== a || t[9] !== s || t[10] !== i
              ? ((c = (0, O.jsx)(Ai, {
                  "data-slot": "dropdown-menu-item",
                  "data-inset": r,
                  "data-variant": i,
                  className: s,
                  ...a,
                })),
                (t[7] = r),
                (t[8] = a),
                (t[9] = s),
                (t[10] = i),
                (t[11] = c))
              : (c = t[11]),
            c
          );
        }
        function Wi(e) {
          const t = (0, l.c)(10);
          let n, r, a, o, i;
          return (
            t[0] !== e
              ? (({ className: n, inset: r, ...a } = e),
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = a))
              : ((n = t[1]), (r = t[2]), (a = t[3])),
            t[4] !== n
              ? ((o = da(
                  "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
                  n,
                )),
                (t[4] = n),
                (t[5] = o))
              : (o = t[5]),
            t[6] !== r || t[7] !== a || t[8] !== o
              ? ((i = (0, O.jsx)(Di, {
                  "data-slot": "dropdown-menu-label",
                  "data-inset": r,
                  className: o,
                  ...a,
                })),
                (t[6] = r),
                (t[7] = a),
                (t[8] = o),
                (t[9] = i))
              : (i = t[9]),
            i
          );
        }
        function Vi(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da("-mx-1 my-1 h-px bg-border", n)), (t[3] = n), (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(Fi, {
                  "data-slot": "dropdown-menu-separator",
                  className: a,
                  ...r,
                })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        const qi = (0, r.createContext)({ isLoggedIn: !1, session: null, setSession: () => {} });
        function Ki(e) {
          const t = (0, l.c)(7),
            { children: n } = e,
            [a, o] = (0, r.useState)(null);
          let i, s, c;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = () => {
                const e = async () => {
                  try {
                    const e = await fetch("/api/session");
                    if (!e.ok) return o(null);
                    const t = await e.json();
                    o(t);
                  } catch {
                    o(null);
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
            t[2] !== a
              ? ((c =
                  null === a
                    ? { isLoggedIn: !1, session: null, setSession: o }
                    : { isLoggedIn: !0, session: a, setSession: o }),
                (t[2] = a),
                (t[3] = c))
              : (c = t[3]));
          const u = c;
          let d;
          return (
            t[4] !== n || t[5] !== u
              ? ((d = (0, O.jsx)(qi.Provider, { value: u, children: n })),
                (t[4] = n),
                (t[5] = u),
                (t[6] = d))
              : (d = t[6]),
            d
          );
        }
        var Qi = n(888);
        function Yi() {
          return () => {};
        }
        var Gi = "Avatar",
          [Xi, Zi] = R(Gi),
          [Ji, es] = Xi(Gi),
          ts = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, ...a } = e,
              [o, l] = r.useState("idle");
            return (0, O.jsx)(Ji, {
              scope: n,
              imageLoadingStatus: o,
              onImageLoadingStatusChange: l,
              children: (0, O.jsx)(H.span, { ...a, ref: t }),
            });
          });
        ts.displayName = Gi;
        var ns = "AvatarImage",
          rs = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, src: a, onLoadingStatusChange: o = () => {}, ...l } = e,
              i = es(ns, n),
              s = (function (e, { referrerPolicy: t, crossOrigin: n }) {
                const a = (0, Qi.useSyncExternalStore)(
                    Yi,
                    () => !0,
                    () => !1,
                  ),
                  o = r.useRef(null),
                  l = a ? (o.current || (o.current = new window.Image()), o.current) : null,
                  [i, s] = r.useState(() => ls(l, e));
                return (
                  X(() => {
                    s(ls(l, e));
                  }, [l, e]),
                  X(() => {
                    const e = (e) => () => {
                      s(e);
                    };
                    if (!l) return;
                    const r = e("loaded"),
                      a = e("error");
                    return (
                      l.addEventListener("load", r),
                      l.addEventListener("error", a),
                      t && (l.referrerPolicy = t),
                      "string" == typeof n && (l.crossOrigin = n),
                      () => {
                        (l.removeEventListener("load", r), l.removeEventListener("error", a));
                      }
                    );
                  }, [l, n, t]),
                  i
                );
              })(a, l),
              c = W((e) => {
                (o(e), i.onImageLoadingStatusChange(e));
              });
            return (
              X(() => {
                "idle" !== s && c(s);
              }, [s, c]),
              "loaded" === s ? (0, O.jsx)(H.img, { ...l, ref: t, src: a }) : null
            );
          });
        rs.displayName = ns;
        var as = "AvatarFallback",
          os = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, delayMs: a, ...o } = e,
              l = es(as, n),
              [i, s] = r.useState(void 0 === a);
            return (
              r.useEffect(() => {
                if (void 0 !== a) {
                  const e = window.setTimeout(() => s(!0), a);
                  return () => window.clearTimeout(e);
                }
              }, [a]),
              i && "loaded" !== l.imageLoadingStatus ? (0, O.jsx)(H.span, { ...o, ref: t }) : null
            );
          });
        function ls(e, t) {
          return e
            ? t
              ? (e.src !== t && (e.src = t),
                e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
              : "error"
            : "idle";
        }
        os.displayName = as;
        var is = ts,
          ss = rs,
          cs = os;
        function us(e) {
          const t = (0, l.c)(10);
          let n, r, a;
          t[0] !== e
            ? (({ className: n, size: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a))
            : ((n = t[1]), (r = t[2]), (a = t[3]));
          const o = void 0 === a ? "default" : a;
          let i, s;
          return (
            t[4] !== n
              ? ((i = da(
                  "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
                  n,
                )),
                (t[4] = n),
                (t[5] = i))
              : (i = t[5]),
            t[6] !== r || t[7] !== o || t[8] !== i
              ? ((s = (0, O.jsx)(is, {
                  "data-slot": "avatar",
                  "data-size": o,
                  className: i,
                  ...r,
                })),
                (t[6] = r),
                (t[7] = o),
                (t[8] = i),
                (t[9] = s))
              : (s = t[9]),
            s
          );
        }
        function ds(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da("aspect-square size-full", n)), (t[3] = n), (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(ss, { "data-slot": "avatar-image", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function fs(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(cs, { "data-slot": "avatar-fallback", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function ps(e) {
          const t = (0, l.c)(22);
          let n, r, a, o, i, s;
          t[0] !== e
            ? (({ size: i, isOrg: a, avatar: n, username: s, className: r, ...o } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o),
              (t[5] = i),
              (t[6] = s))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]), (i = t[5]), (s = t[6]));
          const c = void 0 === i ? "default" : i,
            u = a ? "rounded-sm" : "rounded-full";
          let d, f, p, m, h;
          return (
            t[7] !== r || t[8] !== u
              ? ((d = da(u, r)), (t[7] = r), (t[8] = u), (t[9] = d))
              : (d = t[9]),
            t[10] !== n
              ? ((f = (0, O.jsx)(ds, { src: n, className: "rounded-none" })),
                (t[10] = n),
                (t[11] = f))
              : (f = t[11]),
            t[12] !== s ? ((p = s.charAt(0)), (t[12] = s), (t[13] = p)) : (p = t[13]),
            t[14] !== p
              ? ((m = (0, O.jsx)(fs, { className: "rounded-none uppercase", children: p })),
                (t[14] = p),
                (t[15] = m))
              : (m = t[15]),
            t[16] !== o || t[17] !== c || t[18] !== d || t[19] !== f || t[20] !== m
              ? ((h = (0, O.jsxs)(us, { size: c, className: d, ...o, children: [f, m] })),
                (t[16] = o),
                (t[17] = c),
                (t[18] = d),
                (t[19] = f),
                (t[20] = m),
                (t[21] = h))
              : (h = t[21]),
            h
          );
        }
        const ms = [
          { icon: m, label: "Home", href: "/", showOnMobile: !0 },
          { icon: h, label: "Explore", href: "/", showOnMobile: !0 },
          { icon: g, label: "Notifications", href: "/", showOnMobile: !1 },
          { icon: v, label: "Follow", href: "/", showOnMobile: !1 },
          { icon: y, label: "Chat", href: "/", showOnMobile: !0 },
          { icon: b, label: "Myna", href: "/myna", showOnMobile: !0 },
          { icon: w, label: "Bookmarks", href: "/", showOnMobile: !1 },
          { icon: x, label: "Creator Studio", href: "/", showOnMobile: !1 },
          { icon: k, label: "Premium", href: "/premium", showOnMobile: !0 },
          { icon: S, label: "Profile", href: "/profile", showOnMobile: !0 },
        ];
        function hs() {
          const e = (0, l.c)(37),
            { isLoggedIn: t, session: n } = (0, r.useContext)(qi);
          let a, o;
          (e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, O.jsx)("div", {
                className:
                  "hidden size-9 shrink-0 items-center justify-center rounded-lg bg-primary select-none sm:inline-flex",
                children: "C",
              })),
              (e[0] = a))
            : (a = e[0]),
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, O.jsxs)("div", {
                  className: "flex min-w-0 flex-row gap-4 max-sm:flex-1 sm:flex-col",
                  children: [
                    a,
                    (0, O.jsx)("div", {
                      className:
                        "flex min-w-0 flex-row items-center gap-0.5 max-sm:w-full max-sm:justify-between max-sm:px-1 sm:flex-col sm:justify-start sm:px-0",
                      children: ms.map(gs),
                    }),
                  ],
                })),
                (e[1] = o))
              : (o = e[1]));
          const i = !!t && n.isOrg,
            s = t ? `/api/avatar/${n.avatar}` : void 0,
            c = t ? n.username : "G";
          let u;
          e[2] !== i || e[3] !== s || e[4] !== c
            ? ((u = (0, O.jsx)($i, {
                asChild: !0,
                children: (0, O.jsx)(ps, { isOrg: i, avatar: s, username: c, className: "size-8" }),
              })),
              (e[2] = i),
              (e[3] = s),
              (e[4] = c),
              (e[5] = u))
            : (u = e[5]);
          const d = !!t && n.isOrg,
            f = t ? `/api/avatar/${n.avatar}` : void 0,
            p = t ? n.username : "G";
          let m;
          e[6] !== d || e[7] !== f || e[8] !== p
            ? ((m = (0, O.jsx)(ps, { isOrg: d, avatar: f, username: p, className: "size-8" })),
              (e[6] = d),
              (e[7] = f),
              (e[8] = p),
              (e[9] = m))
            : (m = e[9]);
          const h = t ? n.displayName : "Guest User";
          let g;
          e[10] !== h
            ? ((g = (0, O.jsx)("span", { className: "truncate font-medium", children: h })),
              (e[10] = h),
              (e[11] = g))
            : (g = e[11]);
          const v = t ? `@${n.username}` : "@guestuser";
          let y, b, w, x, S, P, z, T, M, R, L, D;
          return (
            e[12] !== v
              ? ((y = (0, O.jsx)("span", { className: "truncate text-xs", children: v })),
                (e[12] = v),
                (e[13] = y))
              : (y = e[13]),
            e[14] !== g || e[15] !== y
              ? ((b = (0, O.jsxs)("div", {
                  className: "grid flex-1 text-left text-sm leading-tight",
                  children: [g, y],
                })),
                (e[14] = g),
                (e[15] = y),
                (e[16] = b))
              : (b = e[16]),
            e[17] !== b || e[18] !== m
              ? ((w = (0, O.jsx)(Wi, {
                  className: "p-0 font-normal",
                  children: (0, O.jsxs)("div", {
                    className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                    children: [m, b],
                  }),
                })),
                (e[17] = b),
                (e[18] = m),
                (e[19] = w))
              : (w = e[19]),
            e[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, O.jsx)(Vi, {})), (e[20] = x))
              : (x = e[20]),
            e[21] !== t || e[22] !== n
              ? ((S =
                  (!t || "free" === n.plan) &&
                  (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)(Hi, {
                        children: (0, O.jsx)(Ui, {
                          asChild: !0,
                          children: (0, O.jsxs)("a", {
                            href: "/premium",
                            children: [(0, O.jsx)(k, {}), "Upgrade to Premium"],
                          }),
                        }),
                      }),
                      (0, O.jsx)(Vi, {}),
                    ],
                  })),
                (e[21] = t),
                (e[22] = n),
                (e[23] = S))
              : (S = e[23]),
            e[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((P = (0, O.jsxs)(Ui, { children: [(0, O.jsx)(E, {}), " Business"] })), (e[24] = P))
              : (P = e[24]),
            e[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((z = (0, O.jsxs)(Ui, { children: [(0, O.jsx)(C, {}), " Ads"] })), (e[25] = z))
              : (z = e[25]),
            e[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = (0, O.jsxs)(Hi, {
                  children: [
                    P,
                    z,
                    (0, O.jsxs)(Ui, { children: [(0, O.jsx)(N, {}), " Settings & Privacy"] }),
                  ],
                })),
                (M = (0, O.jsx)(Vi, {})),
                (e[26] = T),
                (e[27] = M))
              : ((T = e[26]), (M = e[27])),
            e[28] !== t
              ? ((R = (0, O.jsx)(Ui, {
                  asChild: !0,
                  children: t
                    ? (0, O.jsxs)("a", {
                        href: "/auth/logout",
                        className: "flex items-center gap-2",
                        children: [(0, O.jsx)(_, {}), " Log out"],
                      })
                    : (0, O.jsxs)("a", {
                        href: "/auth/login",
                        className: "flex items-center gap-2",
                        children: [(0, O.jsx)(j, {}), " Log in"],
                      }),
                })),
                (e[28] = t),
                (e[29] = R))
              : (R = e[29]),
            e[30] !== w || e[31] !== S || e[32] !== R
              ? ((L = (0, O.jsxs)(Bi, {
                  className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                  side: "right",
                  align: "end",
                  sideOffset: 4,
                  children: [w, x, S, T, M, R],
                })),
                (e[30] = w),
                (e[31] = S),
                (e[32] = R),
                (e[33] = L))
              : (L = e[33]),
            e[34] !== L || e[35] !== u
              ? ((D = (0, O.jsxs)("div", {
                  className:
                    "flex shrink-0 flex-row items-center gap-4 overflow-y-hidden border-border p-4 max-sm:border-t sm:flex-col sm:px-2",
                  children: [
                    o,
                    (0, O.jsx)("div", {
                      className: "ml-auto sm:mt-auto",
                      children: (0, O.jsxs)(Ii, { children: [u, L] }),
                    }),
                  ],
                })),
                (e[34] = L),
                (e[35] = u),
                (e[36] = D))
              : (D = e[36]),
            D
          );
        }
        function gs(e) {
          return (0, O.jsxs)(
            pa,
            {
              children: [
                (0, O.jsx)(ma, {
                  asChild: !0,
                  children: (0, O.jsx)(wa, {
                    variant: "ghost",
                    size: "icon-lg",
                    className: da(!e.showOnMobile && "hidden sm:inline-flex"),
                    asChild: !0,
                    children: (0, O.jsx)("a", {
                      href: e.href,
                      children: (0, O.jsx)(e.icon, { className: "size-5" }),
                    }),
                  }),
                }),
                (0, O.jsx)(ha, { side: "right", children: e.label }),
              ],
            },
            e.href,
          );
        }
        function vs(e) {
          const t = (0, l.c)(10);
          let n, r, a, o, i;
          return (
            t[0] !== e
              ? (({ className: n, type: a, ...r } = e),
                (t[0] = e),
                (t[1] = n),
                (t[2] = r),
                (t[3] = a))
              : ((n = t[1]), (r = t[2]), (a = t[3])),
            t[4] !== n
              ? ((o = da(
                  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                  n,
                )),
                (t[4] = n),
                (t[5] = o))
              : (o = t[5]),
            t[6] !== r || t[7] !== o || t[8] !== a
              ? ((i = (0, O.jsx)("input", { type: a, "data-slot": "input", className: o, ...r })),
                (t[6] = r),
                (t[7] = o),
                (t[8] = a),
                (t[9] = i))
              : (i = t[9]),
            i
          );
        }
        function ys(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("textarea", { "data-slot": "textarea", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function bs(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", {
                  "data-slot": "input-group",
                  role: "group",
                  className: a,
                  ...r,
                })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        const ws = ya(
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
        function xs(e) {
          const t = (0, l.c)(11);
          let n, r, a;
          t[0] !== e
            ? (({ className: n, align: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a))
            : ((n = t[1]), (r = t[2]), (a = t[3]));
          const o = void 0 === a ? "inline-start" : a;
          let i, s;
          return (
            t[4] !== o || t[5] !== n
              ? ((i = da(ws({ align: o }), n)), (t[4] = o), (t[5] = n), (t[6] = i))
              : (i = t[6]),
            t[7] !== o || t[8] !== r || t[9] !== i
              ? ((s = (0, O.jsx)("div", {
                  role: "group",
                  "data-slot": "input-group-addon",
                  "data-align": o,
                  className: i,
                  onClick: ks,
                  ...r,
                })),
                (t[7] = o),
                (t[8] = r),
                (t[9] = i),
                (t[10] = s))
              : (s = t[10]),
            s
          );
        }
        function ks(e) {
          e.target.closest("button") ||
            e.currentTarget.parentElement?.querySelector("input")?.focus();
        }
        function Ss(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(vs, { "data-slot": "input-group-control", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        ya("flex items-center gap-2 text-sm shadow-none", {
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
        const Es = p("arrow-left", [
            ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
            ["path", { d: "M19 12H5", key: "x3x0zl" }],
          ]),
          Cs = p("calendar", [
            ["path", { d: "M8 2v4", key: "1cmpym" }],
            ["path", { d: "M16 2v4", key: "4m81vk" }],
            ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
            ["path", { d: "M3 10h18", key: "8toen8" }],
          ]),
          Ns = p("lock", [
            [
              "rect",
              { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" },
            ],
            ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
          ]),
          _s = p("arrow-up-right", [
            ["path", { d: "M7 7h10v10", key: "1tivn9" }],
            ["path", { d: "M7 17 17 7", key: "1vkiza" }],
          ]);
        function js(e) {
          const t = (0, l.c)(10);
          let n, r, a;
          t[0] !== e
            ? (({ className: n, size: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a))
            : ((n = t[1]), (r = t[2]), (a = t[3]));
          const o = void 0 === a ? "default" : a;
          let i, s;
          return (
            t[4] !== n
              ? ((i = da(
                  "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
                  n,
                )),
                (t[4] = n),
                (t[5] = i))
              : (i = t[5]),
            t[6] !== r || t[7] !== o || t[8] !== i
              ? ((s = (0, O.jsx)("div", {
                  "data-slot": "card",
                  "data-size": o,
                  className: i,
                  ...r,
                })),
                (t[6] = r),
                (t[7] = o),
                (t[8] = i),
                (t[9] = s))
              : (s = t[9]),
            s
          );
        }
        function Ps(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "card-header", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function zs(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "cn-font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "card-title", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function Ts(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da("px-4 group-data-[size=sm]/card:px-3", n)), (t[3] = n), (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "card-content", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function Ms(e) {
          const t = (0, l.c)(2);
          let n, r;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, O.jsx)(Ps, {
                  children: (0, O.jsx)(zs, {
                    children: (0, O.jsx)("span", {
                      className: "text-xl font-bold",
                      children: "You might like",
                    }),
                  }),
                })),
                (t[0] = n))
              : (n = t[0]),
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, O.jsxs)(js, {
                  children: [
                    n,
                    (0, O.jsx)(Ts, {
                      children: (0, O.jsx)("div", {
                        children: (0, O.jsx)("h2", { children: "You Might Like" }),
                      }),
                    }),
                  ],
                })),
                (t[1] = r))
              : (r = t[1]),
            r
          );
        }
        function Os(e) {
          const t = (0, l.c)(15),
            { username: n, isFollowing: a, onFollowStateChange: o, className: i } = e,
            { isLoggedIn: s, session: c } = (0, r.useContext)(qi),
            [u, d] = (0, r.useTransition)(),
            [f, p] = (0, r.useState)(a);
          let m, h;
          (t[0] !== a
            ? ((m = () => {
                p(a);
              }),
              (t[0] = a),
              (t[1] = m))
            : (m = t[1]),
            t[2] !== a || t[3] !== n
              ? ((h = [n, a]), (t[2] = a), (t[3] = n), (t[4] = h))
              : (h = t[4]),
            (0, r.useEffect)(m, h));
          const g = Boolean(s && c.username === n);
          if (!s || g) {
            let e;
            return (
              t[5] !== i
                ? ((e = (0, O.jsx)(wa, { className: i, disabled: !0, children: "Follow" })),
                  (t[5] = i),
                  (t[6] = e))
                : (e = t[6]),
              e
            );
          }
          let v;
          t[7] !== o || t[8] !== n
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
                    (p(t.isFollowing), o?.(t));
                  }));
              }),
              (t[7] = o),
              (t[8] = n),
              (t[9] = v))
            : (v = t[9]);
          const y = v,
            b = f ? "Unfollow" : "Follow";
          let w;
          return (
            t[10] !== i || t[11] !== u || t[12] !== b || t[13] !== y
              ? ((w = (0, O.jsx)(wa, {
                  type: "button",
                  className: i,
                  onClick: y,
                  disabled: u,
                  children: b,
                })),
                (t[10] = i),
                (t[11] = u),
                (t[12] = b),
                (t[13] = y),
                (t[14] = w))
              : (w = t[14]),
            w
          );
        }
        const Rs = p("ellipsis", [
            ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
            ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
            ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
          ]),
          Ls = p("chart-column", [
            ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
            ["path", { d: "M18 17V9", key: "2bz60n" }],
            ["path", { d: "M13 17V5", key: "1frdt8" }],
            ["path", { d: "M8 17v-3", key: "17ska0" }],
          ]),
          Ds = p("flag", [
            [
              "path",
              {
                d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
                key: "1jaruq",
              },
            ],
          ]),
          As = p("bot", [
            ["path", { d: "M12 8V4H8", key: "hb8ula" }],
            ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
            ["path", { d: "M2 14h2", key: "vft8re" }],
            ["path", { d: "M20 14h2", key: "4cs60a" }],
            ["path", { d: "M15 13v2", key: "1xurst" }],
            ["path", { d: "M9 13v2", key: "rq6x2g" }],
          ]),
          Fs = p("megaphone", [
            [
              "path",
              {
                d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
                key: "q8bfy3",
              },
            ],
            [
              "path",
              { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" },
            ],
            ["path", { d: "M8 6v8", key: "15ugcq" }],
          ]),
          Is = p("trash", [
            ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
            ["path", { d: "M3 6h18", key: "d0wm0j" }],
            ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
          ]),
          $s = p("heart", [
            [
              "path",
              {
                d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
                key: "mvr1a0",
              },
            ],
          ]),
          Bs = p("share", [
            ["path", { d: "M12 2v13", key: "1km8f5" }],
            ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
            ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
          ]);
        var Hs,
          Us = "HoverCard",
          [Ws, Vs] = R(Us, [Dt]),
          qs = Dt(),
          [Ks, Qs] = Ws(Us),
          Ys = (e) => {
            const {
                __scopeHoverCard: t,
                children: n,
                open: a,
                defaultOpen: o,
                onOpenChange: l,
                openDelay: i = 700,
                closeDelay: s = 300,
              } = e,
              c = qs(t),
              u = r.useRef(0),
              d = r.useRef(0),
              f = r.useRef(!1),
              p = r.useRef(!1),
              [m, h] = ln({ prop: a, defaultProp: o ?? !1, onChange: l, caller: Us }),
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
              (0, O.jsx)(Ks, {
                scope: t,
                open: m,
                onOpenChange: h,
                onOpen: g,
                onClose: v,
                onDismiss: y,
                hasSelectionRef: f,
                isPointerDownOnContentRef: p,
                children: (0, O.jsx)(Zt, { ...c, children: n }),
              })
            );
          };
        Ys.displayName = Us;
        var Gs = "HoverCardTrigger",
          Xs = r.forwardRef((e, t) => {
            const { __scopeHoverCard: n, ...r } = e,
              a = Qs(Gs, n),
              o = qs(n);
            return (0, O.jsx)(Jt, {
              asChild: !0,
              ...o,
              children: (0, O.jsx)(H.a, {
                "data-state": a.open ? "open" : "closed",
                ...r,
                ref: t,
                onPointerEnter: P(e.onPointerEnter, oc(a.onOpen)),
                onPointerLeave: P(e.onPointerLeave, oc(a.onClose)),
                onFocus: P(e.onFocus, a.onOpen),
                onBlur: P(e.onBlur, a.onClose),
                onTouchStart: P(e.onTouchStart, (e) => e.preventDefault()),
              }),
            });
          });
        Xs.displayName = Gs;
        var Zs = "HoverCardPortal",
          [Js, ec] = Ws(Zs, { forceMount: void 0 }),
          tc = (e) => {
            const { __scopeHoverCard: t, forceMount: n, children: r, container: a } = e,
              o = Qs(Zs, t);
            return (0, O.jsx)(Js, {
              scope: t,
              forceMount: n,
              children: (0, O.jsx)(rn, {
                present: n || o.open,
                children: (0, O.jsx)(nn, { asChild: !0, container: a, children: r }),
              }),
            });
          };
        tc.displayName = Zs;
        var nc = "HoverCardContent",
          rc = r.forwardRef((e, t) => {
            const n = ec(nc, e.__scopeHoverCard),
              { forceMount: r = n.forceMount, ...a } = e,
              o = Qs(nc, e.__scopeHoverCard);
            return (0, O.jsx)(rn, {
              present: r || o.open,
              children: (0, O.jsx)(ac, {
                "data-state": o.open ? "open" : "closed",
                ...a,
                onPointerEnter: P(e.onPointerEnter, oc(o.onOpen)),
                onPointerLeave: P(e.onPointerLeave, oc(o.onClose)),
                ref: t,
              }),
            });
          });
        rc.displayName = nc;
        var ac = r.forwardRef((e, t) => {
          const {
              __scopeHoverCard: n,
              onEscapeKeyDown: a,
              onPointerDownOutside: o,
              onFocusOutside: l,
              onInteractOutside: i,
              ...s
            } = e,
            c = Qs(nc, n),
            u = qs(n),
            d = r.useRef(null),
            f = M(t, d),
            [p, m] = r.useState(!1);
          return (
            r.useEffect(() => {
              if (p) {
                const e = document.body;
                return (
                  (Hs = e.style.userSelect || e.style.webkitUserSelect),
                  (e.style.userSelect = "none"),
                  (e.style.webkitUserSelect = "none"),
                  () => {
                    ((e.style.userSelect = Hs), (e.style.webkitUserSelect = Hs));
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
            (0, O.jsx)(Q, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onInteractOutside: i,
              onEscapeKeyDown: a,
              onPointerDownOutside: o,
              onFocusOutside: P(l, (e) => {
                e.preventDefault();
              }),
              onDismiss: c.onDismiss,
              children: (0, O.jsx)(en, {
                ...u,
                ...s,
                onPointerDown: P(s.onPointerDown, (e) => {
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
        function oc(e) {
          return (t) => ("touch" === t.pointerType ? void 0 : e());
        }
        r.forwardRef((e, t) => {
          const { __scopeHoverCard: n, ...r } = e,
            a = qs(n);
          return (0, O.jsx)(tn, { ...a, ...r, ref: t });
        }).displayName = "HoverCardArrow";
        var lc = Ys,
          ic = Xs,
          sc = tc,
          cc = rc;
        function uc(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(lc, { "data-slot": "hover-card", ...n })), (t[2] = n), (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function dc(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(ic, { "data-slot": "hover-card-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function fc(e) {
          const t = (0, l.c)(12);
          let n, r, a, o;
          t[0] !== e
            ? (({ className: n, align: a, sideOffset: o, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]));
          const i = void 0 === a ? "center" : a,
            s = void 0 === o ? 4 : o;
          let c, u;
          return (
            t[5] !== n
              ? ((c = da(
                  "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  n,
                )),
                (t[5] = n),
                (t[6] = c))
              : (c = t[6]),
            t[7] !== i || t[8] !== r || t[9] !== s || t[10] !== c
              ? ((u = (0, O.jsx)(sc, {
                  "data-slot": "hover-card-portal",
                  children: (0, O.jsx)(cc, {
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
        const pc = p("loader-circle", [
          ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
        ]);
        function mc(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n ? ((a = da("size-4 animate-spin", n)), (t[3] = n), (t[4] = a)) : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(pc, {
                  role: "status",
                  "aria-label": "Loading",
                  className: a,
                  ...r,
                })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        const hc = p("badge-check", [
          [
            "path",
            {
              d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
              key: "3c2336",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]);
        function gc(e) {
          const t = (0, l.c)(2),
            { isOrg: n, plan: r } = e;
          if (n) {
            let e;
            return (
              t[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, O.jsx)(hc, {
                    className: "size-5 shrink-0 fill-yellow-300 text-background",
                  })),
                  (t[0] = e))
                : (e = t[0]),
              e
            );
          }
          if ("free" === r || "basic" === r) return null;
          let a;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, O.jsx)(hc, {
                  className: "size-5 shrink-0 fill-blue-500 text-background",
                })),
                (t[1] = a))
              : (a = t[1]),
            a
          );
        }
        function vc(e) {
          const t = (0, l.c)(43),
            { username: n } = e,
            { isLoggedIn: a, session: o } = (0, r.useContext)(qi),
            [i, s] = (0, r.useState)(null),
            [c, u] = (0, r.useState)(!0);
          let d, f;
          if (
            (t[0] !== n
              ? ((d = () => {
                  !(async function () {
                    const e = await fetch(`/api/users/${n}`),
                      t = await e.json();
                    (s(t), u(!1));
                  })();
                }),
                (f = [n]),
                (t[0] = n),
                (t[1] = d),
                (t[2] = f))
              : ((d = t[1]), (f = t[2])),
            (0, r.useEffect)(d, f),
            c)
          ) {
            let e;
            return (
              t[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, O.jsxs)("div", {
                    className: "flex flex-col items-center justify-center gap-2",
                    children: [(0, O.jsx)(mc, { "data-icon": "inline-start" }), "Loading..."],
                  })),
                  (t[3] = e))
                : (e = t[3]),
              e
            );
          }
          if (!i) return null;
          const p = Boolean(a && o.username === i.username),
            m = a && !p,
            h = `/api/avatar/${i.avatar}`;
          let g, v, y;
          (t[4] !== i.isOrg || t[5] !== i.username || t[6] !== h
            ? ((g = (0, O.jsx)(ps, {
                isOrg: i.isOrg,
                avatar: h,
                username: i.username,
                className: "size-20 shrink-0",
              })),
              (t[4] = i.isOrg),
              (t[5] = i.username),
              (t[6] = h),
              (t[7] = g))
            : (g = t[7]),
            t[8] !== i.isFollowing || t[9] !== m || t[10] !== n
              ? ((v =
                  m &&
                  (0, O.jsx)(Os, {
                    username: n,
                    isFollowing: i.isFollowing,
                    onFollowStateChange: (e) => s((t) => (t ? { ...t, ...e } : null)),
                  })),
                (t[8] = i.isFollowing),
                (t[9] = m),
                (t[10] = n),
                (t[11] = v))
              : (v = t[11]),
            t[12] !== g || t[13] !== v
              ? ((y = (0, O.jsxs)("div", {
                  className: "flex flex-row justify-between",
                  children: [g, v],
                })),
                (t[12] = g),
                (t[13] = v),
                (t[14] = y))
              : (y = t[14]));
          const b = `/u/${i.username}`;
          let w, x, k, S, E;
          (t[15] !== i.displayName
            ? ((w = (0, O.jsx)("span", {
                className: "truncate text-lg font-bold",
                children: i.displayName,
              })),
              (t[15] = i.displayName),
              (t[16] = w))
            : (w = t[16]),
            t[17] !== i.isOrg || t[18] !== i.plan
              ? ((x = (0, O.jsx)(gc, { isOrg: i.isOrg, plan: i.plan })),
                (t[17] = i.isOrg),
                (t[18] = i.plan),
                (t[19] = x))
              : (x = t[19]),
            t[20] !== w || t[21] !== x
              ? ((k = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [w, x],
                })),
                (t[20] = w),
                (t[21] = x),
                (t[22] = k))
              : (k = t[22]),
            t[23] !== i.username
              ? ((S = (0, O.jsxs)("span", {
                  className: "text-sm text-muted-foreground",
                  children: ["@", i.username],
                })),
                (t[23] = i.username),
                (t[24] = S))
              : (S = t[24]),
            t[25] !== k || t[26] !== S || t[27] !== b
              ? ((E = (0, O.jsxs)("a", {
                  href: b,
                  className:
                    "inline-flex cursor-pointer flex-col underline-offset-4 hover:underline",
                  children: [k, S],
                })),
                (t[25] = k),
                (t[26] = S),
                (t[27] = b),
                (t[28] = E))
              : (E = t[28]));
          const C = i.bio || "No bio yet";
          let N, _, j, P, z;
          return (
            t[29] !== C
              ? ((N = (0, O.jsx)("p", { className: "line-clamp-3", children: C })),
                (t[29] = C),
                (t[30] = N))
              : (N = t[30]),
            t[31] !== i.followingCount
              ? ((_ = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [
                    (0, O.jsx)("span", { className: "font-bold", children: i.followingCount }),
                    "Following",
                  ],
                })),
                (t[31] = i.followingCount),
                (t[32] = _))
              : (_ = t[32]),
            t[33] !== i.followersCount
              ? ((j = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [
                    (0, O.jsx)("span", { className: "font-bold", children: i.followersCount }),
                    "Followers",
                  ],
                })),
                (t[33] = i.followersCount),
                (t[34] = j))
              : (j = t[34]),
            t[35] !== _ || t[36] !== j
              ? ((P = (0, O.jsxs)("div", { className: "flex flex-row gap-2", children: [_, j] })),
                (t[35] = _),
                (t[36] = j),
                (t[37] = P))
              : (P = t[37]),
            t[38] !== E || t[39] !== N || t[40] !== P || t[41] !== y
              ? ((z = (0, O.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [y, E, N, P],
                })),
                (t[38] = E),
                (t[39] = N),
                (t[40] = P),
                (t[41] = y),
                (t[42] = z))
              : (z = t[42]),
            z
          );
        }
        const yc = Array(12).fill(0),
          bc = ({ visible: e, className: t }) =>
            r.createElement(
              "div",
              {
                className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
                "data-visible": e,
              },
              r.createElement(
                "div",
                { className: "sonner-spinner" },
                yc.map((e, t) =>
                  r.createElement("div", {
                    className: "sonner-loading-bar",
                    key: `spinner-bar-${t}`,
                  }),
                ),
              ),
            ),
          wc = r.createElement(
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
          xc = r.createElement(
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
          kc = r.createElement(
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
          Sc = r.createElement(
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
          Ec = r.createElement(
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
        let Cc = 1;
        const Nc = new (class {
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
                    a =
                      "number" == typeof (null == e ? void 0 : e.id) ||
                      (null == (t = e.id) ? void 0 : t.length) > 0
                        ? e.id
                        : Cc++,
                    o = this.toasts.find((e) => e.id === a),
                    l = void 0 === e.dismissible || e.dismissible;
                  return (
                    this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
                    o
                      ? (this.toasts = this.toasts.map((t) =>
                          t.id === a
                            ? (this.publish({ ...t, ...e, id: a, title: n }),
                              { ...t, ...e, id: a, dismissible: l, title: n })
                            : t,
                        ))
                      : this.addToast({ title: n, ...r, dismissible: l, id: a }),
                    a
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
                  const a = Promise.resolve(e instanceof Function ? e() : e);
                  let o,
                    l = void 0 !== n;
                  const i = a
                      .then(async (e) => {
                        if (((o = ["resolve", e]), r.isValidElement(e)))
                          ((l = !1), this.create({ id: n, type: "default", message: e }));
                        else if (_c(e) && !e.ok) {
                          l = !1;
                          const a =
                              "function" == typeof t.error
                                ? await t.error(`HTTP error! status: ${e.status}`)
                                : t.error,
                            o =
                              "function" == typeof t.description
                                ? await t.description(`HTTP error! status: ${e.status}`)
                                : t.description,
                            i = "object" != typeof a || r.isValidElement(a) ? { message: a } : a;
                          this.create({ id: n, type: "error", description: o, ...i });
                        } else if (e instanceof Error) {
                          l = !1;
                          const a = "function" == typeof t.error ? await t.error(e) : t.error,
                            o =
                              "function" == typeof t.description
                                ? await t.description(e)
                                : t.description,
                            i = "object" != typeof a || r.isValidElement(a) ? { message: a } : a;
                          this.create({ id: n, type: "error", description: o, ...i });
                        } else if (void 0 !== t.success) {
                          l = !1;
                          const a = "function" == typeof t.success ? await t.success(e) : t.success,
                            o =
                              "function" == typeof t.description
                                ? await t.description(e)
                                : t.description,
                            i = "object" != typeof a || r.isValidElement(a) ? { message: a } : a;
                          this.create({ id: n, type: "success", description: o, ...i });
                        }
                      })
                      .catch(async (e) => {
                        if (((o = ["reject", e]), void 0 !== t.error)) {
                          l = !1;
                          const a = "function" == typeof t.error ? await t.error(e) : t.error,
                            o =
                              "function" == typeof t.description
                                ? await t.description(e)
                                : t.description,
                            i = "object" != typeof a || r.isValidElement(a) ? { message: a } : a;
                          this.create({ id: n, type: "error", description: o, ...i });
                        }
                      })
                      .finally(() => {
                        (l && (this.dismiss(n), (n = void 0)),
                          null == t.finally || t.finally.call(t));
                      }),
                    s = () =>
                      new Promise((e, t) =>
                        i.then(() => ("reject" === o[0] ? t(o[1]) : e(o[1]))).catch(t),
                      );
                  return "string" != typeof n && "number" != typeof n
                    ? { unwrap: s }
                    : Object.assign(n, { unwrap: s });
                }),
                (this.custom = (e, t) => {
                  const n = (null == t ? void 0 : t.id) || Cc++;
                  return (this.create({ jsx: e(n), id: n, ...t }), n);
                }),
                (this.getActiveToasts = () =>
                  this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set()));
            }
          })(),
          _c = (e) =>
            e &&
            "object" == typeof e &&
            "ok" in e &&
            "boolean" == typeof e.ok &&
            "status" in e &&
            "number" == typeof e.status,
          jc = Object.assign(
            (e, t) => {
              const n = (null == t ? void 0 : t.id) || Cc++;
              return (Nc.addToast({ title: e, ...t, id: n }), n);
            },
            {
              success: Nc.success,
              info: Nc.info,
              warning: Nc.warning,
              error: Nc.error,
              custom: Nc.custom,
              message: Nc.message,
              promise: Nc.promise,
              dismiss: Nc.dismiss,
              loading: Nc.loading,
            },
            { getHistory: () => Nc.toasts, getToasts: () => Nc.getActiveToasts() },
          );
        function Pc(e) {
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
        const zc = 3,
          Tc = 14;
        function Mc(...e) {
          return e.filter(Boolean).join(" ");
        }
        const Oc = (e) => {
          var t, n, a, o, l, i, s, c, u;
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
              expanded: w,
              removeToast: x,
              defaultRichColors: k,
              closeButton: S,
              style: E,
              cancelButtonStyle: C,
              actionButtonStyle: N,
              className: _ = "",
              descriptionClassName: j = "",
              duration: P,
              position: z,
              gap: T,
              expandByDefault: M,
              classNames: O,
              icons: R,
              closeButtonAriaLabel: L = "Close toast",
            } = e,
            [D, A] = r.useState(null),
            [F, I] = r.useState(null),
            [$, B] = r.useState(!1),
            [H, U] = r.useState(!1),
            [W, V] = r.useState(!1),
            [q, K] = r.useState(!1),
            [Q, Y] = r.useState(!1),
            [G, X] = r.useState(0),
            [Z, J] = r.useState(0),
            ee = r.useRef(f.duration || P || 4e3),
            te = r.useRef(null),
            ne = r.useRef(null),
            re = 0 === y,
            ae = y + 1 <= g,
            oe = f.type,
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
            we = f.invert || d,
            xe = "loading" === oe;
          ((pe.current = r.useMemo(() => ce * T + ye, [ce, ye])),
            r.useEffect(() => {
              ee.current = de;
            }, [de]),
            r.useEffect(() => {
              B(!0);
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
              if (!$) return;
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
            }, [$, f.title, f.description, h, f.id, f.jsx, f.action, f.cancel]));
          const ke = r.useCallback(() => {
            (U(!0),
              X(pe.current),
              h((e) => e.filter((e) => e.toastId !== f.id)),
              setTimeout(() => {
                x(f);
              }, 200));
          }, [f, x, h, pe]);
          (r.useEffect(() => {
            if ((f.promise && "loading" === oe) || f.duration === 1 / 0 || "loading" === f.type)
              return;
            let e;
            return (
              w || m || be
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
          }, [w, m, f, oe, be, ke]),
            r.useEffect(() => {
              f.delete && (ke(), null == f.onDismiss || f.onDismiss.call(f, f));
            }, [ke, f.delete]));
          const Se =
            f.icon ||
            (null == R ? void 0 : R[oe]) ||
            ((e) => {
              switch (e) {
                case "success":
                  return wc;
                case "info":
                  return kc;
                case "warning":
                  return xc;
                case "error":
                  return Sc;
                default:
                  return null;
              }
            })(oe);
          var Ee, Ce;
          return r.createElement(
            "li",
            {
              tabIndex: 0,
              ref: ne,
              className: Mc(
                _,
                ie,
                null == O ? void 0 : O.toast,
                null == f || null == (t = f.classNames) ? void 0 : t.toast,
                null == O ? void 0 : O.default,
                null == O ? void 0 : O[oe],
                null == f || null == (n = f.classNames) ? void 0 : n[oe],
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (Ee = f.richColors) ? Ee : k,
              "data-styled": !Boolean(f.jsx || f.unstyled || p),
              "data-mounted": $,
              "data-promise": Boolean(f.promise),
              "data-swiped": Q,
              "data-removed": H,
              "data-visible": ae,
              "data-y-position": ge,
              "data-x-position": ve,
              "data-index": y,
              "data-front": re,
              "data-swiping": W,
              "data-dismissible": le,
              "data-type": oe,
              "data-invert": we,
              "data-swipe-out": q,
              "data-swipe-direction": F,
              "data-expanded": Boolean(w || (M && $)),
              "data-testid": f.testId,
              style: {
                "--index": y,
                "--toasts-before": y,
                "--z-index": b.length - y,
                "--offset": `${H ? G : pe.current}px`,
                "--initial-height": M ? "auto" : `${Z}px`,
                ...E,
                ...f.style,
              },
              onDragEnd: () => {
                (V(!1), A(null), (he.current = null));
              },
              onPointerDown: (e) => {
                2 !== e.button &&
                  !xe &&
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
                  a = Number(
                    (null == (t = ne.current)
                      ? void 0
                      : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0,
                  ),
                  o = new Date().getTime() - (null == (n = te.current) ? void 0 : n.getTime()),
                  l = "x" === D ? r : a,
                  i = Math.abs(l) / o;
                if (Math.abs(l) >= 45 || i > 0.11)
                  return (
                    X(pe.current),
                    null == f.onDismiss || f.onDismiss.call(f, f),
                    I("x" === D ? (r > 0 ? "right" : "left") : a > 0 ? "down" : "up"),
                    ke(),
                    void K(!0)
                  );
                var s, c;
                (null == (s = ne.current) || s.style.setProperty("--swipe-amount-x", "0px"),
                  null == (c = ne.current) || c.style.setProperty("--swipe-amount-y", "0px"),
                  Y(!1),
                  V(!1),
                  A(null));
              },
              onPointerMove: (t) => {
                var n, r, a;
                if (!he.current || !le) return;
                if ((null == (n = window.getSelection()) ? void 0 : n.toString().length) > 0)
                  return;
                const o = t.clientY - he.current.y,
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
                  (Math.abs(l) > 1 || Math.abs(o) > 1) &&
                  A(Math.abs(l) > Math.abs(o) ? "x" : "y");
                let c = { x: 0, y: 0 };
                const u = (e) => 1 / (1.5 + Math.abs(e) / 20);
                if ("y" === D) {
                  if (s.includes("top") || s.includes("bottom"))
                    if ((s.includes("top") && o < 0) || (s.includes("bottom") && o > 0)) c.y = o;
                    else {
                      const e = o * u(o);
                      c.y = Math.abs(e) < Math.abs(o) ? e : o;
                    }
                } else if ("x" === D && (s.includes("left") || s.includes("right")))
                  if ((s.includes("left") && l < 0) || (s.includes("right") && l > 0)) c.x = l;
                  else {
                    const e = l * u(l);
                    c.x = Math.abs(e) < Math.abs(l) ? e : l;
                  }
                ((Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && Y(!0),
                  null == (r = ne.current) || r.style.setProperty("--swipe-amount-x", `${c.x}px`),
                  null == (a = ne.current) || a.style.setProperty("--swipe-amount-y", `${c.y}px`));
              },
            },
            ue && !f.jsx && "loading" !== oe
              ? r.createElement(
                  "button",
                  {
                    "aria-label": L,
                    "data-disabled": xe,
                    "data-close-button": !0,
                    onClick:
                      xe || !le
                        ? () => {}
                        : () => {
                            (ke(), null == f.onDismiss || f.onDismiss.call(f, f));
                          },
                    className: Mc(
                      null == O ? void 0 : O.closeButton,
                      null == f || null == (a = f.classNames) ? void 0 : a.closeButton,
                    ),
                  },
                  null != (Ce = null == R ? void 0 : R.close) ? Ce : Ec,
                )
              : null,
            (oe || f.icon || f.promise) &&
              null !== f.icon &&
              (null !== (null == R ? void 0 : R[oe]) || f.icon)
              ? r.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: Mc(
                      null == O ? void 0 : O.icon,
                      null == f || null == (o = f.classNames) ? void 0 : o.icon,
                    ),
                  },
                  f.promise || ("loading" === f.type && !f.icon)
                    ? f.icon ||
                        (function () {
                          var e, t;
                          return (null == R ? void 0 : R.loading)
                            ? r.createElement(
                                "div",
                                {
                                  className: Mc(
                                    null == O ? void 0 : O.loader,
                                    null == f || null == (t = f.classNames) ? void 0 : t.loader,
                                    "sonner-loader",
                                  ),
                                  "data-visible": "loading" === oe,
                                },
                                R.loading,
                              )
                            : r.createElement(bc, {
                                className: Mc(
                                  null == O ? void 0 : O.loader,
                                  null == f || null == (e = f.classNames) ? void 0 : e.loader,
                                ),
                                visible: "loading" === oe,
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
                className: Mc(
                  null == O ? void 0 : O.content,
                  null == f || null == (l = f.classNames) ? void 0 : l.content,
                ),
              },
              r.createElement(
                "div",
                {
                  "data-title": "",
                  className: Mc(
                    null == O ? void 0 : O.title,
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
                      className: Mc(
                        j,
                        se,
                        null == O ? void 0 : O.description,
                        null == f || null == (s = f.classNames) ? void 0 : s.description,
                      ),
                    },
                    "function" == typeof f.description ? f.description() : f.description,
                  )
                : null,
            ),
            r.isValidElement(f.cancel)
              ? f.cancel
              : f.cancel && Pc(f.cancel)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-cancel": !0,
                      style: f.cancelButtonStyle || C,
                      onClick: (e) => {
                        Pc(f.cancel) &&
                          le &&
                          (null == f.cancel.onClick || f.cancel.onClick.call(f.cancel, e), ke());
                      },
                      className: Mc(
                        null == O ? void 0 : O.cancelButton,
                        null == f || null == (c = f.classNames) ? void 0 : c.cancelButton,
                      ),
                    },
                    f.cancel.label,
                  )
                : null,
            r.isValidElement(f.action)
              ? f.action
              : f.action && Pc(f.action)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-action": !0,
                      style: f.actionButtonStyle || N,
                      onClick: (e) => {
                        Pc(f.action) &&
                          (null == f.action.onClick || f.action.onClick.call(f.action, e),
                          e.defaultPrevented || ke());
                      },
                      className: Mc(
                        null == O ? void 0 : O.actionButton,
                        null == f || null == (u = f.classNames) ? void 0 : u.actionButton,
                      ),
                    },
                    f.action.label,
                  )
                : null,
          );
        };
        function Rc() {
          if ("undefined" == typeof window) return "ltr";
          if ("undefined" == typeof document) return "ltr";
          const e = document.documentElement.getAttribute("dir");
          return "auto" !== e && e
            ? e
            : window.getComputedStyle(document.documentElement).direction;
        }
        function Lc(e, t) {
          const n = {};
          return (
            [e, t].forEach((e, t) => {
              const r = 1 === t,
                a = r ? "--mobile-offset" : "--offset",
                o = r ? "16px" : "24px";
              function l(e) {
                ["top", "right", "bottom", "left"].forEach((t) => {
                  n[`${a}-${t}`] = "number" == typeof e ? `${e}px` : e;
                });
              }
              "number" == typeof e || "string" == typeof e
                ? l(e)
                : "object" == typeof e
                  ? ["top", "right", "bottom", "left"].forEach((t) => {
                      void 0 === e[t]
                        ? (n[`${a}-${t}`] = o)
                        : (n[`${a}-${t}`] = "number" == typeof e[t] ? `${e[t]}px` : e[t]);
                    })
                  : l(o);
            }),
            n
          );
        }
        const Dc = r.forwardRef(function (e, t) {
          const {
              id: n,
              invert: a,
              position: o = "bottom-right",
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
              visibleToasts: g = zc,
              toastOptions: v,
              dir: y = Rc(),
              gap: b = Tc,
              icons: w,
              containerAriaLabel: x = "Notifications",
            } = e,
            [k, S] = r.useState([]),
            E = r.useMemo(
              () => (n ? k.filter((e) => e.toasterId === n) : k.filter((e) => !e.toasterId)),
              [k, n],
            ),
            C = r.useMemo(
              () =>
                Array.from(new Set([o].concat(E.filter((e) => e.position).map((e) => e.position)))),
              [E, o],
            ),
            [N, _] = r.useState([]),
            [j, P] = r.useState(!1),
            [z, T] = r.useState(!1),
            [M, O] = r.useState(
              "system" !== f
                ? f
                : "undefined" != typeof window &&
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light",
            ),
            R = r.useRef(null),
            L = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            A = r.useRef(null),
            F = r.useRef(!1),
            I = r.useCallback((e) => {
              S((t) => {
                var n;
                return (
                  (null == (n = t.find((t) => t.id === e.id)) ? void 0 : n.delete) ||
                    Nc.dismiss(e.id),
                  t.filter(({ id: t }) => t !== e.id)
                );
              });
            }, []);
          return (
            r.useEffect(
              () =>
                Nc.subscribe((e) => {
                  e.dismiss
                    ? requestAnimationFrame(() => {
                        S((t) => t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)));
                      })
                    : setTimeout(() => {
                        D.flushSync(() => {
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
              if ("system" !== f) return void O(f);
              if (
                ("system" === f &&
                  (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? O("dark")
                    : O("light")),
                "undefined" == typeof window)
              )
                return;
              const e = window.matchMedia("(prefers-color-scheme: dark)");
              try {
                e.addEventListener("change", ({ matches: e }) => {
                  O(e ? "dark" : "light");
                });
              } catch (t) {
                e.addListener(({ matches: e }) => {
                  try {
                    O(e ? "dark" : "light");
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
                  (P(!0), null == (n = R.current) || n.focus()),
                  "Escape" !== e.code ||
                    (document.activeElement !== R.current &&
                      !(null == (t = R.current) ? void 0 : t.contains(document.activeElement))) ||
                    P(!1));
              };
              return (
                document.addEventListener("keydown", e),
                () => document.removeEventListener("keydown", e)
              );
            }, [l]),
            r.useEffect(() => {
              if (R.current)
                return () => {
                  A.current &&
                    (A.current.focus({ preventScroll: !0 }), (A.current = null), (F.current = !1));
                };
            }, [R.current]),
            r.createElement(
              "section",
              {
                ref: t,
                "aria-label": `${x} ${L}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0,
              },
              C.map((t, n) => {
                var o;
                const [l, f] = t.split("-");
                return E.length
                  ? r.createElement(
                      "ol",
                      {
                        key: t,
                        dir: "auto" === y ? Rc() : y,
                        tabIndex: -1,
                        ref: R,
                        className: c,
                        "data-sonner-toaster": !0,
                        "data-sonner-theme": M,
                        "data-y-position": l,
                        "data-x-position": f,
                        style: {
                          "--front-toast-height": `${(null == (o = N[0]) ? void 0 : o.height) || 0}px`,
                          "--width": "356px",
                          "--gap": `${b}px`,
                          ...h,
                          ...Lc(u, d),
                        },
                        onBlur: (e) => {
                          F.current &&
                            !e.currentTarget.contains(e.relatedTarget) &&
                            ((F.current = !1),
                            A.current &&
                              (A.current.focus({ preventScroll: !0 }), (A.current = null)));
                        },
                        onFocus: (e) => {
                          (e.target instanceof HTMLElement &&
                            "false" === e.target.dataset.dismissible) ||
                            F.current ||
                            ((F.current = !0), (A.current = e.relatedTarget));
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
                      E.filter((e) => (!e.position && 0 === n) || e.position === t).map((n, o) => {
                        var l, c;
                        return r.createElement(Oc, {
                          key: n.id,
                          icons: w,
                          index: o,
                          toast: n,
                          defaultRichColors: p,
                          duration: null != (l = null == v ? void 0 : v.duration) ? l : m,
                          className: null == v ? void 0 : v.className,
                          descriptionClassName: null == v ? void 0 : v.descriptionClassName,
                          invert: a,
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
                          removeToast: I,
                          toasts: E.filter((e) => e.position == n.position),
                          heights: N.filter((e) => e.position == n.position),
                          setHeights: _,
                          expandByDefault: i,
                          gap: b,
                          expanded: j,
                          swipeDirections: e.swipeDirections,
                        });
                      }),
                    )
                  : null;
              }),
            )
          );
        });
        function Ac(e) {
          const t = (0, l.c)(94),
            { post: n } = e,
            { isLoggedIn: a, session: o } = (0, r.useContext)(qi),
            [i, s] = (0, r.useTransition)(),
            [c, u] = (0, r.useState)(n.likeCount ?? 0),
            [d, f] = (0, r.useState)(!!n.likedByMe),
            [p, m] = (0, r.useState)(!1);
          let h, g;
          (t[0] !== n.likeCount || t[1] !== n.likedByMe
            ? ((h = () => {
                (u(n.likeCount ?? 0), f(!!n.likedByMe));
              }),
              (t[0] = n.likeCount),
              (t[1] = n.likedByMe),
              (t[2] = h))
            : (h = t[2]),
            t[3] !== n._id || t[4] !== n.likeCount || t[5] !== n.likedByMe
              ? ((g = [n._id, n.likeCount, n.likedByMe]),
                (t[3] = n._id),
                (t[4] = n.likeCount),
                (t[5] = n.likedByMe),
                (t[6] = g))
              : (g = t[6]),
            (0, r.useEffect)(h, g));
          const v = a ? o : null,
            b = Boolean(v && n.owner.username === v.username);
          let w;
          t[7] !== b || t[8] !== n.owner || t[9] !== v
            ? ((w =
                b && v
                  ? { displayName: v.displayName, avatar: v.avatar, isOrg: v.isOrg, plan: v.plan }
                  : {
                      displayName: n.owner.displayName,
                      avatar: n.owner.avatar,
                      isOrg: n.owner.isOrg,
                      plan: n.owner.plan,
                    }),
              (t[7] = b),
              (t[8] = n.owner),
              (t[9] = v),
              (t[10] = w))
            : (w = t[10]);
          const x = w;
          let k;
          t[11] !== a || t[12] !== c || t[13] !== d || t[14] !== n._id
            ? ((k = (e) => {
                if ((e.preventDefault(), e.stopPropagation(), !a)) return;
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
                      const a = await e.json();
                      (u(a.likeCount), f(a.likedByMe));
                    } catch {
                      (u(t), f(r));
                    }
                  }));
              }),
              (t[11] = a),
              (t[12] = c),
              (t[13] = d),
              (t[14] = n._id),
              (t[15] = k))
            : (k = t[15]);
          const S = k;
          let E;
          t[16] !== p || t[17] !== b || t[18] !== n._id
            ? ((E = async (e) => {
                (e.preventDefault(),
                  e.stopPropagation(),
                  b &&
                    !p &&
                    jc.promise(
                      fetch(`/posts/${String(n._id)}`, {
                        method: "DELETE",
                        credentials: "same-origin",
                        headers: { Accept: "application/json" },
                      }),
                      {
                        loading: "Deleting post...",
                        success: () => (m(!0), "Post deleted successfully"),
                        error: Ic,
                      },
                    ));
              }),
              (t[16] = p),
              (t[17] = b),
              (t[18] = n._id),
              (t[19] = E))
            : (E = t[19]);
          const C = E;
          if (p) return null;
          const N = `/p/${n._id}`,
            _ = `/api/avatar/${x.avatar}`;
          let j;
          t[20] !== x.isOrg || t[21] !== n.owner.username || t[22] !== _
            ? ((j = (0, O.jsx)(ps, {
                size: "lg",
                isOrg: x.isOrg,
                avatar: _,
                username: n.owner.username,
              })),
              (t[20] = x.isOrg),
              (t[21] = n.owner.username),
              (t[22] = _),
              (t[23] = j))
            : (j = t[23]);
          const P = `/u/${n.owner.username}`;
          let z, T, M, R, L, D, A, F, I, $, B, H, U, W, V, q, K, Q, Y, G, X;
          (t[24] !== x.displayName
            ? ((z = (0, O.jsx)("span", {
                className: "font-bold hover:underline",
                children: x.displayName,
              })),
              (t[24] = x.displayName),
              (t[25] = z))
            : (z = t[25]),
            t[26] !== n.owner.username
              ? ((T = (0, O.jsxs)("span", {
                  className: "text-sm text-muted-foreground",
                  children: ["@", n.owner.username],
                })),
                (t[26] = n.owner.username),
                (t[27] = T))
              : (T = t[27]),
            t[28] !== z || t[29] !== T
              ? ((M = (0, O.jsxs)("div", { className: "min-w-0 truncate", children: [z, " ", T] })),
                (t[28] = z),
                (t[29] = T),
                (t[30] = M))
              : (M = t[30]),
            t[31] !== M || t[32] !== P
              ? ((R = (0, O.jsx)(dc, {
                  asChild: !0,
                  children: (0, O.jsx)("a", {
                    href: P,
                    className: "flex min-w-0 flex-1 cursor-pointer items-center gap-1",
                    children: M,
                  }),
                })),
                (t[31] = M),
                (t[32] = P),
                (t[33] = R))
              : (R = t[33]),
            t[34] !== n.owner.username
              ? ((L = (0, O.jsx)(fc, {
                  children: (0, O.jsx)("div", {
                    className: "flex flex-col gap-1",
                    children: (0, O.jsx)(vc, { username: n.owner.username }),
                  }),
                })),
                (t[34] = n.owner.username),
                (t[35] = L))
              : (L = t[35]),
            t[36] !== x.isOrg || t[37] !== x.plan
              ? ((D = (0, O.jsx)(gc, { isOrg: x.isOrg, plan: x.plan })),
                (t[36] = x.isOrg),
                (t[37] = x.plan),
                (t[38] = D))
              : (D = t[38]),
            t[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = (0, O.jsx)("span", {
                  className: "shrink-0 text-sm text-muted-foreground",
                  children: "•",
                })),
                (t[39] = A))
              : (A = t[39]),
            t[40] !== n.createdDate
              ? ((F = (function (e) {
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
                (t[40] = n.createdDate),
                (t[41] = F))
              : (F = t[41]),
            t[42] !== F
              ? ((I = (0, O.jsx)("span", {
                  className: "shrink-0 text-sm whitespace-nowrap text-muted-foreground",
                  children: F,
                })),
                (t[42] = F),
                (t[43] = I))
              : (I = t[43]),
            t[44] !== R || t[45] !== L || t[46] !== D || t[47] !== I
              ? (($ = (0, O.jsxs)("div", {
                  className: "flex min-w-0 flex-row items-center gap-1",
                  children: [R, L, D, A, I],
                })),
                (t[44] = R),
                (t[45] = L),
                (t[46] = D),
                (t[47] = I),
                (t[48] = $))
              : ($ = t[48]),
            t[49] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, O.jsx)($i, {
                  asChild: !0,
                  children: (0, O.jsx)("div", {
                    className: "rounded-full p-1 hover:bg-muted",
                    children: (0, O.jsx)(Rs, { className: "size-4" }),
                  }),
                })),
                (t[49] = B))
              : (B = t[49]),
            t[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((H = (0, O.jsx)(Ui, {
                  asChild: !0,
                  children: (0, O.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [(0, O.jsx)(Ls, { className: "size-4" }), "View Chirp Interactions"],
                  }),
                })),
                (t[50] = H))
              : (H = t[50]),
            t[51] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = (0, O.jsx)(Ui, {
                  asChild: !0,
                  children: (0, O.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [(0, O.jsx)(Ds, { className: "size-4" }), "Report Chirp"],
                  }),
                })),
                (t[51] = U))
              : (U = t[51]),
            t[52] === Symbol.for("react.memo_cache_sentinel")
              ? ((W = (0, O.jsx)(Ui, {
                  asChild: !0,
                  children: (0, O.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [(0, O.jsx)(As, { className: "size-4" }), "Mark as Spam"],
                  }),
                })),
                (t[52] = W))
              : (W = t[52]),
            t[53] === Symbol.for("react.memo_cache_sentinel")
              ? ((V = (0, O.jsx)(Ui, {
                  asChild: !0,
                  children: (0, O.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [(0, O.jsx)(Fs, { className: "size-4" }), "Request Community Note"],
                  }),
                })),
                (t[53] = V))
              : (V = t[53]),
            t[54] !== C || t[55] !== b
              ? ((q =
                  b &&
                  (0, O.jsx)(Ui, {
                    asChild: !0,
                    children: (0, O.jsxs)("div", {
                      className: "flex flex-row items-center gap-2",
                      onClick: C,
                      children: [(0, O.jsx)(Is, { className: "size-4" }), "Delete Chirp"],
                    }),
                  })),
                (t[54] = C),
                (t[55] = b),
                (t[56] = q))
              : (q = t[56]),
            t[57] !== q
              ? ((K = (0, O.jsxs)(Ii, {
                  children: [B, (0, O.jsxs)(Bi, { className: "w-40", children: [H, U, W, V, q] })],
                })),
                (t[57] = q),
                (t[58] = K))
              : (K = t[58]),
            t[59] !== $ || t[60] !== K
              ? ((Q = (0, O.jsxs)("div", {
                  className: "flex justify-between gap-2",
                  children: [$, K],
                })),
                (t[59] = $),
                (t[60] = K),
                (t[61] = Q))
              : (Q = t[61]),
            t[62] !== n.body
              ? ((Y = (0, O.jsx)("div", {
                  className: "w-full wrap-anywhere whitespace-pre-wrap",
                  children: n.body,
                })),
                (t[62] = n.body),
                (t[63] = Y))
              : (Y = t[63]),
            t[64] === Symbol.for("react.memo_cache_sentinel")
              ? ((G = (0, O.jsx)(y, { className: "size-4" })), (t[64] = G))
              : (G = t[64]),
            t[65] !== n.replyCount
              ? ((X = (0, O.jsxs)("button", {
                  type: "button",
                  className:
                    "flex cursor-pointer flex-row items-center gap-1 hover:text-foreground/80",
                  onClick: Fc,
                  children: [
                    G,
                    (0, O.jsx)("span", { className: "tabular-nums", children: n.replyCount }),
                  ],
                })),
                (t[65] = n.replyCount),
                (t[66] = X))
              : (X = t[66]));
          const Z =
              "flex cursor-pointer flex-row items-center gap-1 hover:text-rose-400 " +
              (d ? "text-rose-400" : ""),
            J = !a || i,
            ee = "size-4 " + (d ? "fill-current" : "");
          let te, ne, re, ae, oe, le, ie, se, ce;
          return (
            t[67] !== ee
              ? ((te = (0, O.jsx)($s, { className: ee })), (t[67] = ee), (t[68] = te))
              : (te = t[68]),
            t[69] !== c
              ? ((ne = (0, O.jsx)("span", { className: "tabular-nums", children: c })),
                (t[69] = c),
                (t[70] = ne))
              : (ne = t[70]),
            t[71] !== Z || t[72] !== J || t[73] !== te || t[74] !== ne || t[75] !== S
              ? ((re = (0, O.jsxs)("button", {
                  type: "button",
                  className: Z,
                  disabled: J,
                  onClick: S,
                  children: [te, ne],
                })),
                (t[71] = Z),
                (t[72] = J),
                (t[73] = te),
                (t[74] = ne),
                (t[75] = S),
                (t[76] = re))
              : (re = t[76]),
            t[77] !== n._id
              ? ((ae = (e) => {
                  (e.preventDefault(),
                    e.stopPropagation(),
                    navigator.clipboard.writeText(`${window.location.origin}/p/${n._id}`),
                    jc.success("Link copied to clipboard"));
                }),
                (t[77] = n._id),
                (t[78] = ae))
              : (ae = t[78]),
            t[79] === Symbol.for("react.memo_cache_sentinel")
              ? ((oe = (0, O.jsx)(Bs, { className: "size-4" })), (t[79] = oe))
              : (oe = t[79]),
            t[80] !== ae
              ? ((le = (0, O.jsx)("button", {
                  type: "button",
                  className: "cursor-pointer hover:text-foreground/80",
                  onClick: ae,
                  children: oe,
                })),
                (t[80] = ae),
                (t[81] = le))
              : (le = t[81]),
            t[82] !== X || t[83] !== re || t[84] !== le
              ? ((ie = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-6",
                  children: [X, re, le],
                })),
                (t[82] = X),
                (t[83] = re),
                (t[84] = le),
                (t[85] = ie))
              : (ie = t[85]),
            t[86] !== Q || t[87] !== Y || t[88] !== ie
              ? ((se = (0, O.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col gap-1",
                  children: [Q, Y, ie],
                })),
                (t[86] = Q),
                (t[87] = Y),
                (t[88] = ie),
                (t[89] = se))
              : (se = t[89]),
            t[90] !== se || t[91] !== N || t[92] !== j
              ? ((ce = (0, O.jsx)(O.Fragment, {
                  children: (0, O.jsx)(uc, {
                    children: (0, O.jsxs)("a", {
                      href: N,
                      className:
                        "group/post flex w-full flex-row gap-2 border-b border-border p-4 hover:bg-muted/50",
                      children: [j, se],
                    }),
                  }),
                })),
                (t[90] = se),
                (t[91] = N),
                (t[92] = j),
                (t[93] = ce))
              : (ce = t[93]),
            ce
          );
        }
        function Fc() {}
        function Ic(e) {
          return e instanceof Error ? e.message : "Could not delete the post.";
        }
        const $c = p("x", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]);
        var Bc = "Dialog",
          [Hc, Uc] = R(Bc),
          [Wc, Vc] = Hc(Bc),
          qc = (e) => {
            const {
                __scopeDialog: t,
                children: n,
                open: a,
                defaultOpen: o,
                onOpenChange: l,
                modal: i = !0,
              } = e,
              s = r.useRef(null),
              c = r.useRef(null),
              [u, d] = ln({ prop: a, defaultProp: o ?? !1, onChange: l, caller: Bc });
            return (0, O.jsx)(Wc, {
              scope: t,
              triggerRef: s,
              contentRef: c,
              contentId: ee(),
              titleId: ee(),
              descriptionId: ee(),
              open: u,
              onOpenChange: d,
              onOpenToggle: r.useCallback(() => d((e) => !e), [d]),
              modal: i,
              children: n,
            });
          };
        qc.displayName = Bc;
        var Kc = "DialogTrigger",
          Qc = r.forwardRef((e, t) => {
            const { __scopeDialog: n, ...r } = e,
              a = Vc(Kc, n),
              o = M(t, a.triggerRef);
            return (0, O.jsx)(H.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": a.open,
              "aria-controls": a.contentId,
              "data-state": pu(a.open),
              ...r,
              ref: o,
              onClick: P(e.onClick, a.onOpenToggle),
            });
          });
        Qc.displayName = Kc;
        var Yc = "DialogPortal",
          [Gc, Xc] = Hc(Yc, { forceMount: void 0 }),
          Zc = (e) => {
            const { __scopeDialog: t, forceMount: n, children: a, container: o } = e,
              l = Vc(Yc, t);
            return (0, O.jsx)(Gc, {
              scope: t,
              forceMount: n,
              children: r.Children.map(a, (e) =>
                (0, O.jsx)(rn, {
                  present: n || l.open,
                  children: (0, O.jsx)(nn, { asChild: !0, container: o, children: e }),
                }),
              ),
            });
          };
        Zc.displayName = Yc;
        var Jc = "DialogOverlay",
          eu = r.forwardRef((e, t) => {
            const n = Xc(Jc, e.__scopeDialog),
              { forceMount: r = n.forceMount, ...a } = e,
              o = Vc(Jc, e.__scopeDialog);
            return o.modal
              ? (0, O.jsx)(rn, { present: r || o.open, children: (0, O.jsx)(nu, { ...a, ref: t }) })
              : null;
          });
        eu.displayName = Jc;
        var tu = A("DialogOverlay.RemoveScroll"),
          nu = r.forwardRef((e, t) => {
            const { __scopeDialog: n, ...r } = e,
              a = Vc(Jc, n);
            return (0, O.jsx)(qo, {
              as: tu,
              allowPinchZoom: !0,
              shards: [a.contentRef],
              children: (0, O.jsx)(H.div, {
                "data-state": pu(a.open),
                ...r,
                ref: t,
                style: { pointerEvents: "auto", ...r.style },
              }),
            });
          }),
          ru = "DialogContent",
          au = r.forwardRef((e, t) => {
            const n = Xc(ru, e.__scopeDialog),
              { forceMount: r = n.forceMount, ...a } = e,
              o = Vc(ru, e.__scopeDialog);
            return (0, O.jsx)(rn, {
              present: r || o.open,
              children: o.modal
                ? (0, O.jsx)(ou, { ...a, ref: t })
                : (0, O.jsx)(lu, { ...a, ref: t }),
            });
          });
        au.displayName = ru;
        var ou = r.forwardRef((e, t) => {
            const n = Vc(ru, e.__scopeDialog),
              a = r.useRef(null),
              o = M(t, n.contentRef, a);
            return (
              r.useEffect(() => {
                const e = a.current;
                if (e) return lo(e);
              }, []),
              (0, O.jsx)(iu, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: P(e.onCloseAutoFocus, (e) => {
                  (e.preventDefault(), n.triggerRef.current?.focus());
                }),
                onPointerDownOutside: P(e.onPointerDownOutside, (e) => {
                  const t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: P(e.onFocusOutside, (e) => e.preventDefault()),
              })
            );
          }),
          lu = r.forwardRef((e, t) => {
            const n = Vc(ru, e.__scopeDialog),
              a = r.useRef(!1),
              o = r.useRef(!1);
            return (0, O.jsx)(iu, {
              ...e,
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                (e.onCloseAutoFocus?.(t),
                  t.defaultPrevented ||
                    (a.current || n.triggerRef.current?.focus(), t.preventDefault()),
                  (a.current = !1),
                  (o.current = !1));
              },
              onInteractOutside: (t) => {
                (e.onInteractOutside?.(t),
                  t.defaultPrevented ||
                    ((a.current = !0),
                    "pointerdown" === t.detail.originalEvent.type && (o.current = !0)));
                const r = t.target,
                  l = n.triggerRef.current?.contains(r);
                (l && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault());
              },
            });
          }),
          iu = r.forwardRef((e, t) => {
            const {
                __scopeDialog: n,
                trapFocus: a,
                onOpenAutoFocus: o,
                onCloseAutoFocus: l,
                ...i
              } = e,
              s = Vc(ru, n),
              c = r.useRef(null),
              u = M(t, c);
            return (
              Ca(),
              (0, O.jsxs)(O.Fragment, {
                children: [
                  (0, O.jsx)(za, {
                    asChild: !0,
                    loop: !0,
                    trapped: a,
                    onMountAutoFocus: o,
                    onUnmountAutoFocus: l,
                    children: (0, O.jsx)(Q, {
                      role: "dialog",
                      id: s.contentId,
                      "aria-describedby": s.descriptionId,
                      "aria-labelledby": s.titleId,
                      "data-state": pu(s.open),
                      ...i,
                      ref: u,
                      onDismiss: () => s.onOpenChange(!1),
                    }),
                  }),
                  (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)(vu, { titleId: s.titleId }),
                      (0, O.jsx)(yu, { contentRef: c, descriptionId: s.descriptionId }),
                    ],
                  }),
                ],
              })
            );
          }),
          su = "DialogTitle",
          cu = r.forwardRef((e, t) => {
            const { __scopeDialog: n, ...r } = e,
              a = Vc(su, n);
            return (0, O.jsx)(H.h2, { id: a.titleId, ...r, ref: t });
          });
        cu.displayName = su;
        var uu = "DialogDescription";
        r.forwardRef((e, t) => {
          const { __scopeDialog: n, ...r } = e,
            a = Vc(uu, n);
          return (0, O.jsx)(H.p, { id: a.descriptionId, ...r, ref: t });
        }).displayName = uu;
        var du = "DialogClose",
          fu = r.forwardRef((e, t) => {
            const { __scopeDialog: n, ...r } = e,
              a = Vc(du, n);
            return (0, O.jsx)(H.button, {
              type: "button",
              ...r,
              ref: t,
              onClick: P(e.onClick, () => a.onOpenChange(!1)),
            });
          });
        function pu(e) {
          return e ? "open" : "closed";
        }
        fu.displayName = du;
        var mu = "DialogTitleWarning",
          [hu, gu] = (function (e, t) {
            const n = r.createContext(t),
              a = (e) => {
                const { children: t, ...a } = e,
                  o = r.useMemo(() => a, Object.values(a));
                return (0, O.jsx)(n.Provider, { value: o, children: t });
              };
            return (
              (a.displayName = e + "Provider"),
              [
                a,
                function (a) {
                  const o = r.useContext(n);
                  if (o) return o;
                  if (void 0 !== t) return t;
                  throw new Error(`\`${a}\` must be used within \`${e}\``);
                },
              ]
            );
          })(mu, { contentName: ru, titleName: su, docsSlug: "dialog" }),
          vu = ({ titleId: e }) => {
            const t = gu(mu),
              n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
            return (
              r.useEffect(() => {
                e && (document.getElementById(e) || console.error(n));
              }, [n, e]),
              null
            );
          },
          yu = ({ contentRef: e, descriptionId: t }) => {
            const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gu("DialogDescriptionWarning").contentName}}.`;
            return (
              r.useEffect(() => {
                const r = e.current?.getAttribute("aria-describedby");
                t && r && (document.getElementById(t) || console.warn(n));
              }, [n, e, t]),
              null
            );
          },
          bu = qc,
          wu = Qc,
          xu = Zc,
          ku = eu,
          Su = au,
          Eu = cu,
          Cu = fu;
        function Nu(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(bu, { "data-slot": "dialog", ...n })), (t[2] = n), (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function _u(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(wu, { "data-slot": "dialog-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function ju(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(xu, { "data-slot": "dialog-portal", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Pu(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, O.jsx)(Cu, { "data-slot": "dialog-close", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function zu(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(ku, { "data-slot": "dialog-overlay", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function Tu(e) {
          const t = (0, l.c)(15);
          let n, r, a, o;
          t[0] !== e
            ? (({ className: r, children: n, showCloseButton: o, ...a } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]));
          const i = void 0 === o || o;
          let s, c, u, d;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, O.jsx)(zu, {})), (t[5] = s))
              : (s = t[5]),
            t[6] !== r
              ? ((c = da(
                  "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  r,
                )),
                (t[6] = r),
                (t[7] = c))
              : (c = t[7]),
            t[8] !== i
              ? ((u =
                  i &&
                  (0, O.jsx)(Cu, {
                    "data-slot": "dialog-close",
                    asChild: !0,
                    children: (0, O.jsxs)(wa, {
                      variant: "ghost",
                      className: "absolute top-2 right-2",
                      size: "icon-sm",
                      children: [
                        (0, O.jsx)($c, {}),
                        (0, O.jsx)("span", { className: "sr-only", children: "Close" }),
                      ],
                    }),
                  })),
                (t[8] = i),
                (t[9] = u))
              : (u = t[9]),
            t[10] !== n || t[11] !== a || t[12] !== c || t[13] !== u
              ? ((d = (0, O.jsxs)(ju, {
                  children: [
                    s,
                    (0, O.jsxs)(Su, {
                      "data-slot": "dialog-content",
                      className: c,
                      ...a,
                      children: [n, u],
                    }),
                  ],
                })),
                (t[10] = n),
                (t[11] = a),
                (t[12] = c),
                (t[13] = u),
                (t[14] = d))
              : (d = t[14]),
            d
          );
        }
        function Mu(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n ? ((a = da("flex flex-col gap-2", n)), (t[3] = n), (t[4] = a)) : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "dialog-header", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function Ou(e) {
          const t = (0, l.c)(14);
          let n, r, a, o;
          t[0] !== e
            ? (({ className: r, showCloseButton: o, children: n, ...a } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a),
              (t[4] = o))
            : ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]));
          const i = void 0 !== o && o;
          let s, c, u;
          return (
            t[5] !== r
              ? ((s = da(
                  "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
                  r,
                )),
                (t[5] = r),
                (t[6] = s))
              : (s = t[6]),
            t[7] !== i
              ? ((c =
                  i &&
                  (0, O.jsx)(Cu, {
                    asChild: !0,
                    children: (0, O.jsx)(wa, { variant: "outline", children: "Close" }),
                  })),
                (t[7] = i),
                (t[8] = c))
              : (c = t[8]),
            t[9] !== n || t[10] !== a || t[11] !== s || t[12] !== c
              ? ((u = (0, O.jsxs)("div", {
                  "data-slot": "dialog-footer",
                  className: s,
                  ...a,
                  children: [n, c],
                })),
                (t[9] = n),
                (t[10] = a),
                (t[11] = s),
                (t[12] = c),
                (t[13] = u))
              : (u = t[13]),
            u
          );
        }
        function Ru(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da("cn-font-heading text-base leading-none font-medium", n)),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(Eu, { "data-slot": "dialog-title", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        var Lu = r.forwardRef((e, t) =>
          (0, O.jsx)(H.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              t.target.closest("button, input, select, textarea") ||
                (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          }),
        );
        Lu.displayName = "Label";
        var Du = Lu;
        function Au(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(Du, { "data-slot": "label", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function Fu(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "field-group", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        const Iu = ya("group/field flex w-full gap-2 data-[invalid=true]:text-destructive", {
          variants: {
            orientation: {
              vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
              horizontal:
                "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
              responsive:
                "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
            },
          },
          defaultVariants: { orientation: "vertical" },
        });
        function $u(e) {
          const t = (0, l.c)(11);
          let n, r, a;
          t[0] !== e
            ? (({ className: n, orientation: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a))
            : ((n = t[1]), (r = t[2]), (a = t[3]));
          const o = void 0 === a ? "vertical" : a;
          let i, s;
          return (
            t[4] !== n || t[5] !== o
              ? ((i = da(Iu({ orientation: o }), n)), (t[4] = n), (t[5] = o), (t[6] = i))
              : (i = t[6]),
            t[7] !== o || t[8] !== r || t[9] !== i
              ? ((s = (0, O.jsx)("div", {
                  role: "group",
                  "data-slot": "field",
                  "data-orientation": o,
                  className: i,
                  ...r,
                })),
                (t[7] = o),
                (t[8] = r),
                (t[9] = i),
                (t[10] = s))
              : (s = t[10]),
            s
          );
        }
        function Bu(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da("group/field-content flex flex-1 flex-col gap-0.5 leading-snug", n)),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "field-content", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function Hu(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10",
                  "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)(Au, { "data-slot": "field-label", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function Uu(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
                  "last:mt-0 nth-last-2:-mt-1",
                  "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("p", { "data-slot": "field-description", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        const Wu = p("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
        var Vu = "Checkbox",
          [qu, Ku] = R(Vu),
          [Qu, Yu] = qu(Vu);
        function Gu(e) {
          const {
              __scopeCheckbox: t,
              checked: n,
              children: a,
              defaultChecked: o,
              disabled: l,
              form: i,
              name: s,
              onCheckedChange: c,
              required: u,
              value: d = "on",
              internal_do_not_use_render: f,
            } = e,
            [p, m] = ln({ prop: n, defaultProp: o ?? !1, onChange: c, caller: Vu }),
            [h, g] = r.useState(null),
            [v, y] = r.useState(null),
            b = r.useRef(!1),
            w = !h || !!i || !!h.closest("form"),
            x = {
              checked: p,
              disabled: l,
              setChecked: m,
              control: h,
              setControl: g,
              name: s,
              form: i,
              value: d,
              hasConsumerStoppedPropagationRef: b,
              required: u,
              defaultChecked: !od(o) && o,
              isFormControl: w,
              bubbleInput: v,
              setBubbleInput: y,
            };
          return (0, O.jsx)(Qu, { scope: t, ...x, children: ad(f) ? f(x) : a });
        }
        var Xu = "CheckboxTrigger",
          Zu = r.forwardRef(({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...a }, o) => {
            const {
                control: l,
                value: i,
                disabled: s,
                checked: c,
                required: u,
                setControl: d,
                setChecked: f,
                hasConsumerStoppedPropagationRef: p,
                isFormControl: m,
                bubbleInput: h,
              } = Yu(Xu, e),
              g = M(o, d),
              v = r.useRef(c);
            return (
              r.useEffect(() => {
                const e = l?.form;
                if (e) {
                  const t = () => f(v.current);
                  return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t));
                }
              }, [l, f]),
              (0, O.jsx)(H.button, {
                type: "button",
                role: "checkbox",
                "aria-checked": od(c) ? "mixed" : c,
                "aria-required": u,
                "data-state": ld(c),
                "data-disabled": s ? "" : void 0,
                disabled: s,
                value: i,
                ...a,
                ref: g,
                onKeyDown: P(t, (e) => {
                  "Enter" === e.key && e.preventDefault();
                }),
                onClick: P(n, (e) => {
                  (f((e) => !!od(e) || !e),
                    h &&
                      m &&
                      ((p.current = e.isPropagationStopped()), p.current || e.stopPropagation()));
                }),
              })
            );
          });
        Zu.displayName = Xu;
        var Ju = r.forwardRef((e, t) => {
          const {
            __scopeCheckbox: n,
            name: r,
            checked: a,
            defaultChecked: o,
            required: l,
            disabled: i,
            value: s,
            onCheckedChange: c,
            form: u,
            ...d
          } = e;
          return (0, O.jsx)(Gu, {
            __scopeCheckbox: n,
            checked: a,
            defaultChecked: o,
            disabled: i,
            required: l,
            onCheckedChange: c,
            name: r,
            form: u,
            value: s,
            internal_do_not_use_render: ({ isFormControl: e }) =>
              (0, O.jsxs)(O.Fragment, {
                children: [
                  (0, O.jsx)(Zu, { ...d, ref: t, __scopeCheckbox: n }),
                  e && (0, O.jsx)(rd, { __scopeCheckbox: n }),
                ],
              }),
          });
        });
        Ju.displayName = Vu;
        var ed = "CheckboxIndicator",
          td = r.forwardRef((e, t) => {
            const { __scopeCheckbox: n, forceMount: r, ...a } = e,
              o = Yu(ed, n);
            return (0, O.jsx)(rn, {
              present: r || od(o.checked) || !0 === o.checked,
              children: (0, O.jsx)(H.span, {
                "data-state": ld(o.checked),
                "data-disabled": o.disabled ? "" : void 0,
                ...a,
                ref: t,
                style: { pointerEvents: "none", ...e.style },
              }),
            });
          });
        td.displayName = ed;
        var nd = "CheckboxBubbleInput",
          rd = r.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
            const {
                control: a,
                hasConsumerStoppedPropagationRef: o,
                checked: l,
                defaultChecked: i,
                required: s,
                disabled: c,
                name: u,
                value: d,
                form: f,
                bubbleInput: p,
                setBubbleInput: m,
              } = Yu(nd, e),
              h = M(n, m),
              g = (function (e) {
                const t = r.useRef({ value: e, previous: e });
                return r.useMemo(
                  () => (
                    t.current.value !== e &&
                      ((t.current.previous = t.current.value), (t.current.value = e)),
                    t.current.previous
                  ),
                  [e],
                );
              })(l),
              v = Ot(a);
            r.useEffect(() => {
              const e = p;
              if (!e) return;
              const t = window.HTMLInputElement.prototype,
                n = Object.getOwnPropertyDescriptor(t, "checked").set,
                r = !o.current;
              if (g !== l && n) {
                const t = new Event("click", { bubbles: r });
                ((e.indeterminate = od(l)), n.call(e, !od(l) && l), e.dispatchEvent(t));
              }
            }, [p, g, l, o]);
            const y = r.useRef(!od(l) && l);
            return (0, O.jsx)(H.input, {
              type: "checkbox",
              "aria-hidden": !0,
              defaultChecked: i ?? y.current,
              required: s,
              disabled: c,
              name: u,
              value: d,
              form: f,
              ...t,
              tabIndex: -1,
              ref: h,
              style: {
                ...t.style,
                ...v,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0,
                transform: "translateX(-100%)",
              },
            });
          });
        function ad(e) {
          return "function" == typeof e;
        }
        function od(e) {
          return "indeterminate" === e;
        }
        function ld(e) {
          return od(e) ? "indeterminate" : e ? "checked" : "unchecked";
        }
        function id(e) {
          const t = (0, l.c)(9);
          let n, r, a, o, i;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, O.jsx)(td, {
                  "data-slot": "checkbox-indicator",
                  className:
                    "grid place-content-center text-current transition-none [&>svg]:size-3.5",
                  children: (0, O.jsx)(Wu, {}),
                })),
                (t[5] = o))
              : (o = t[5]),
            t[6] !== r || t[7] !== a
              ? ((i = (0, O.jsx)(Ju, { "data-slot": "checkbox", className: a, ...r, children: o })),
                (t[6] = r),
                (t[7] = a),
                (t[8] = i))
              : (i = t[8]),
            i
          );
        }
        rd.displayName = nd;
        const sd = p("pencil", [
          [
            "path",
            {
              d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
              key: "1a8usu",
            },
          ],
          ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
        ]);
        function cd(e) {
          const t = (0, l.c)(31),
            { avatarFile: n, setAvatarFile: a } = e,
            { session: o } = (0, r.useContext)(qi),
            i = (0, r.useRef)(null);
          let s;
          t[0] !== n
            ? ((s = n ? URL.createObjectURL(n) : null), (t[0] = n), (t[1] = s))
            : (s = t[1]);
          const c = s;
          let u, d, f;
          if (
            (t[2] !== c
              ? ((u = () => () => {
                  c && URL.revokeObjectURL(c);
                }),
                (d = [c]),
                (t[2] = c),
                (t[3] = u),
                (t[4] = d))
              : ((u = t[3]), (d = t[4])),
            (0, r.useEffect)(u, d),
            !o)
          )
            return null;
          t[5] !== a
            ? ((f = (e) => {
                const t = e.target.files?.[0];
                ((e.target.value = ""),
                  t &&
                    t.type.startsWith("image/") &&
                    jc.promise(
                      (async function (e) {
                        return new Promise((t, n) => {
                          const r = new window.Image(),
                            a = 128;
                          ((r.onload = () => {
                            const e = document.createElement("canvas");
                            ((e.width = a), (e.height = a));
                            const o = e.getContext("2d");
                            if (!o) return void n(new Error("Canvas not available"));
                            const l = r.naturalWidth || r.width,
                              i = r.naturalHeight || r.height,
                              s = Math.max(a / l, a / i),
                              c = Math.max(1, Math.round(l * s)),
                              u = Math.max(1, Math.round(i * s));
                            (o.drawImage(r, (a - c) / 2, (a - u) / 2, c, u),
                              e.toBlob(
                                (e) => {
                                  (URL.revokeObjectURL(r.src),
                                    e
                                      ? t(new File([e], "avatar.jpeg", { type: "image/jpeg" }))
                                      : n(new Error("Could not encode image")));
                                },
                                "image/jpeg",
                                0.85,
                              ));
                          }),
                            (r.onerror = (e) => {
                              (URL.revokeObjectURL(r.src), n(e));
                            }),
                            (r.src = URL.createObjectURL(e)));
                        });
                      })(t),
                      {
                        loading: "Processing image...",
                        success: (e) => (a(e), "Image processed successfully"),
                        error: ud,
                      },
                    ));
              }),
              (t[5] = a),
              (t[6] = f))
            : (f = t[6]);
          const p = f,
            m = o.isOrg ? "rounded-sm" : "rounded-full";
          let h;
          t[7] !== m ? ((h = da(m, "size-16 shrink-0")), (t[7] = m), (t[8] = h)) : (h = t[8]);
          const g = c ?? `/api/avatar/${o.avatar}`;
          let v, y, b, w;
          (t[9] !== g
            ? ((v = (0, O.jsx)(ds, { src: g, className: "rounded-none" })), (t[9] = g), (t[10] = v))
            : (v = t[10]),
            t[11] !== o.username
              ? ((y = o.username.charAt(0)), (t[11] = o.username), (t[12] = y))
              : (y = t[12]),
            t[13] !== y
              ? ((b = (0, O.jsx)(fs, { className: "rounded-none uppercase", children: y })),
                (t[13] = y),
                (t[14] = b))
              : (b = t[14]),
            t[15] !== b || t[16] !== h || t[17] !== v
              ? ((w = (0, O.jsxs)(us, { className: h, children: [v, b] })),
                (t[15] = b),
                (t[16] = h),
                (t[17] = v),
                (t[18] = w))
              : (w = t[18]));
          const x = o.isOrg ? "rounded-sm" : "rounded-full";
          let k, S, E, C, N, _;
          return (
            t[19] !== x
              ? ((k = da(
                  "absolute inset-0 z-10 flex scale-96 items-center justify-center opacity-0 transition-[transform,opacity]",
                  "group-hover/avatar:scale-100 group-hover/avatar:cursor-pointer group-hover/avatar:bg-background/80 group-hover/avatar:opacity-80",
                  x,
                )),
                (t[19] = x),
                (t[20] = k))
              : (k = t[20]),
            t[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = () => i.current?.click()),
                (E = (0, O.jsx)(sd, { className: "size-4 text-foreground" })),
                (t[21] = S),
                (t[22] = E))
              : ((S = t[21]), (E = t[22])),
            t[23] !== k
              ? ((C = (0, O.jsx)("button", {
                  type: "button",
                  className: k,
                  onClick: S,
                  children: E,
                })),
                (t[23] = k),
                (t[24] = C))
              : (C = t[24]),
            t[25] !== p
              ? ((N = (0, O.jsx)("input", {
                  ref: i,
                  type: "file",
                  accept: "image/*",
                  className: "sr-only",
                  onChange: p,
                })),
                (t[25] = p),
                (t[26] = N))
              : (N = t[26]),
            t[27] !== w || t[28] !== C || t[29] !== N
              ? ((_ = (0, O.jsxs)("div", {
                  className: "group/avatar relative",
                  children: [w, C, N],
                })),
                (t[27] = w),
                (t[28] = C),
                (t[29] = N),
                (t[30] = _))
              : (_ = t[30]),
            _
          );
        }
        function ud(e) {
          return e instanceof Error ? e.message : "Could not process that image";
        }
        function dd(e) {
          const t = (0, l.c)(49),
            { onSaved: n } = e,
            { isLoggedIn: a, session: o, setSession: i } = (0, r.useContext)(qi),
            [s, c] = (0, r.useTransition)(),
            [u, d] = (0, r.useState)(!1),
            [f, p] = (0, r.useState)(o?.displayName || ""),
            [m, h] = (0, r.useState)(o?.bio || ""),
            [g, v] = (0, r.useState)(o?.isPublic ?? !0),
            [y, b] = (0, r.useState)(null);
          let w, x, k;
          if (
            (t[0] !== a || t[1] !== o
              ? ((w = () => {
                  a &&
                    fetch(`/api/avatar/${o.avatar}`, { credentials: "same-origin" })
                      .then(pd)
                      .then((e) => {
                        b(new File([e], `${o.username}-avatar.webp`, { type: "image/webp" }));
                      });
                }),
                (x = [a, o]),
                (t[0] = a),
                (t[1] = o),
                (t[2] = w),
                (t[3] = x))
              : ((w = t[2]), (x = t[3])),
            (0, r.useEffect)(w, x),
            !o)
          )
            return null;
          t[4] !== y ||
          t[5] !== m ||
          t[6] !== f ||
          t[7] !== s ||
          t[8] !== g ||
          t[9] !== n ||
          t[10] !== i
            ? ((k = (e) => {
                (e.preventDefault(),
                  s ||
                    c(async () => {
                      jc.promise(
                        new Promise((e, t) => {
                          const r = new FormData();
                          (r.set("displayName", f),
                            r.set("bio", m),
                            r.set("isPublic", String(g)),
                            y && r.set("avatar", y),
                            fetch("/api/users/me", {
                              method: "PATCH",
                              credentials: "same-origin",
                              body: r,
                            })
                              .then((e) => (e.ok || t(e.statusText), e.json()))
                              .then((t) => {
                                (t?.account && i(t.account), n?.(), d(!1), e(t));
                              })
                              .catch((e) => {
                                (console.error(e), t(e));
                              }));
                        }),
                        { loading: "Saving...", success: "Profile updated", error: fd },
                      );
                    }));
              }),
              (t[4] = y),
              (t[5] = m),
              (t[6] = f),
              (t[7] = s),
              (t[8] = g),
              (t[9] = n),
              (t[10] = i),
              (t[11] = k))
            : (k = t[11]);
          const S = k;
          let E, C, N, _, j, P, z, T, M;
          (t[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = (0, O.jsx)(_u, {
                asChild: !0,
                children: (0, O.jsx)(wa, { children: "Edit Profile" }),
              })),
              (t[12] = E))
            : (E = t[12]),
            t[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, O.jsx)(Mu, {
                  children: (0, O.jsx)(Ru, {
                    className: "text-xl font-bold",
                    children: "Edit Profile",
                  }),
                })),
                (t[13] = C))
              : (C = t[13]),
            t[14] !== y
              ? ((N = (0, O.jsx)($u, {
                  children: (0, O.jsx)("div", {
                    className: "flex w-full",
                    children: (0, O.jsx)(cd, { avatarFile: y, setAvatarFile: b }),
                  }),
                })),
                (t[14] = y),
                (t[15] = N))
              : (N = t[15]),
            t[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, O.jsx)(Hu, { children: "Display Name" })), (t[16] = _))
              : (_ = t[16]),
            t[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (e) => p(e.target.value)), (t[17] = j))
              : (j = t[17]),
            t[18] !== f
              ? ((P = (0, O.jsxs)($u, {
                  children: [
                    _,
                    (0, O.jsx)(vs, { type: "text", value: f, maxLength: 50, onChange: j }),
                  ],
                })),
                (t[18] = f),
                (t[19] = P))
              : (P = t[19]),
            t[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((z = (0, O.jsx)(Hu, { children: "Bio" })), (t[20] = z))
              : (z = t[20]),
            t[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = (e) => h(e.target.value)), (t[21] = T))
              : (T = t[21]),
            t[22] !== m
              ? ((M = (0, O.jsxs)($u, {
                  children: [
                    z,
                    (0, O.jsx)(ys, {
                      value: m,
                      rows: 3,
                      maxLength: 160,
                      className: "resize-none",
                      onChange: T,
                    }),
                  ],
                })),
                (t[22] = m),
                (t[23] = M))
              : (M = t[23]));
          const R = !g;
          let L, D, A, F, I, $, B, H, U, W, V;
          return (
            t[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = (e) => v(!0 !== e)), (t[24] = L))
              : (L = t[24]),
            t[25] !== R
              ? ((D = (0, O.jsx)(id, { checked: R, onCheckedChange: L })), (t[25] = R), (t[26] = D))
              : (D = t[26]),
            t[27] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = (0, O.jsx)(Hu, { children: "Protect your posts" })), (t[27] = A))
              : (A = t[27]),
            t[28] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = (0, O.jsxs)(Bu, {
                  children: [
                    A,
                    (0, O.jsxs)(Uu, {
                      children: [
                        "When selected, your posts and other account information are only visible to people who follow you. ",
                        (0, O.jsx)("a", { href: "#", children: "Learn more" }),
                      ],
                    }),
                  ],
                })),
                (t[28] = F))
              : (F = t[28]),
            t[29] !== D
              ? ((I = (0, O.jsxs)($u, { orientation: "horizontal", children: [D, F] })),
                (t[29] = D),
                (t[30] = I))
              : (I = t[30]),
            t[31] !== M || t[32] !== I || t[33] !== N || t[34] !== P
              ? (($ = (0, O.jsxs)(Fu, { children: [N, P, M, I] })),
                (t[31] = M),
                (t[32] = I),
                (t[33] = N),
                (t[34] = P),
                (t[35] = $))
              : ($ = t[35]),
            t[36] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, O.jsx)(Pu, {
                  asChild: !0,
                  children: (0, O.jsx)(wa, { variant: "outline", children: "Cancel" }),
                })),
                (t[36] = B))
              : (B = t[36]),
            t[37] !== s
              ? ((H = s && (0, O.jsx)(mc, { "data-icon": "inline-start" })),
                (t[37] = s),
                (t[38] = H))
              : (H = t[38]),
            t[39] !== S || t[40] !== s || t[41] !== H
              ? ((U = (0, O.jsxs)(Ou, {
                  children: [
                    B,
                    (0, O.jsxs)(wa, {
                      type: "submit",
                      onClick: S,
                      disabled: s,
                      children: [H, "Save"],
                    }),
                  ],
                })),
                (t[39] = S),
                (t[40] = s),
                (t[41] = H),
                (t[42] = U))
              : (U = t[42]),
            t[43] !== $ || t[44] !== U
              ? ((W = (0, O.jsxs)(Tu, { children: [C, $, U] })),
                (t[43] = $),
                (t[44] = U),
                (t[45] = W))
              : (W = t[45]),
            t[46] !== u || t[47] !== W
              ? ((V = (0, O.jsxs)(Nu, { open: u, onOpenChange: d, children: [E, W] })),
                (t[46] = u),
                (t[47] = W),
                (t[48] = V))
              : (V = t[48]),
            V
          );
        }
        function fd(e) {
          return e instanceof Error ? e.message : "Failed to update profile";
        }
        function pd(e) {
          return e.blob();
        }
        function md(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "empty", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function hd(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da("flex max-w-sm flex-col items-center gap-2", n)), (t[3] = n), (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "empty-header", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        const gd = ya(
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
        function vd(e) {
          const t = (0, l.c)(11);
          let n, r, a;
          t[0] !== e
            ? (({ className: n, variant: a, ...r } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = a))
            : ((n = t[1]), (r = t[2]), (a = t[3]));
          const o = void 0 === a ? "default" : a;
          let i, s;
          return (
            t[4] !== n || t[5] !== o
              ? ((i = da(gd({ variant: o, className: n }))), (t[4] = n), (t[5] = o), (t[6] = i))
              : (i = t[6]),
            t[7] !== r || t[8] !== i || t[9] !== o
              ? ((s = (0, O.jsx)("div", {
                  "data-slot": "empty-icon",
                  "data-variant": o,
                  className: i,
                  ...r,
                })),
                (t[7] = r),
                (t[8] = i),
                (t[9] = o),
                (t[10] = s))
              : (s = t[10]),
            s
          );
        }
        function yd(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da("cn-font-heading text-sm font-medium tracking-tight", n)),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "empty-title", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function bd(e) {
          const t = (0, l.c)(8);
          let n, r, a, o;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((a = da(
                  "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
                  n,
                )),
                (t[3] = n),
                (t[4] = a))
              : (a = t[4]),
            t[5] !== r || t[6] !== a
              ? ((o = (0, O.jsx)("div", { "data-slot": "empty-description", className: a, ...r })),
                (t[5] = r),
                (t[6] = a),
                (t[7] = o))
              : (o = t[7]),
            o
          );
        }
        function wd() {
          const e = (0, l.c)(101),
            { isLoggedIn: t, session: n } = (0, r.useContext)(qi);
          let a;
          e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = window.location.pathname.split("/").pop()), (e[0] = a))
            : (a = e[0]);
          const o = a,
            [i, s] = (0, r.useState)(null);
          let c;
          e[1] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (e[1] = c)) : (c = e[1]);
          const [u, d] = (0, r.useState)(c);
          let f;
          e[2] === Symbol.for("react.memo_cache_sentinel") ? ((f = []), (e[2] = f)) : (f = e[2]);
          const [p, m] = (0, r.useState)(f),
            [g, v] = (0, r.useTransition)(),
            [b, w] = (0, r.useState)(!0);
          let x;
          e[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = async () => {
                const e = await fetch(`/api/users/${o}`);
                if (!e.ok) return;
                s(await e.json());
                const t = await fetch(`/api/users/${o}/posts`);
                t.ok && d(await t.json());
              }),
              (e[3] = x))
            : (x = e[3]);
          const k = x;
          let S, E;
          if (
            (e[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = () => {
                  const e = async function () {
                    w(!0);
                    const e = await fetch(`/api/users/${o}`),
                      t = await e.json();
                    s(t);
                    const n = await fetch(`/api/users/${o}/followers`),
                      r = await n.json();
                    (m(r),
                      w(!1),
                      v(async () => {
                        const e = await fetch(`/api/users/${o}/posts`),
                          t = await e.json();
                        d(t);
                      }));
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
                (E = [o]),
                (e[4] = S),
                (e[5] = E))
              : ((S = e[4]), (E = e[5])),
            (0, r.useEffect)(S, E),
            b)
          ) {
            let t;
            return (
              e[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, O.jsx)("div", { children: "Loading..." })), (e[6] = t))
                : (t = e[6]),
              t
            );
          }
          if (!i) {
            let t;
            return (
              e[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, O.jsx)("div", { children: "Account not found" })), (e[7] = t))
                : (t = e[7]),
              t
            );
          }
          const C = Boolean(t && n.username === i.username),
            N = i.isPublic || C || i.isFollowing;
          let _, j, P, z, T, M, R, L;
          (e[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = (0, O.jsx)(hs, {})), (e[8] = _))
            : (_ = e[8]),
            e[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, O.jsx)(Es, { className: "size-6" })), (e[9] = j))
              : (j = e[9]),
            e[10] !== i.displayName
              ? ((P = (0, O.jsx)("span", {
                  className: "text-lg font-bold",
                  children: i.displayName,
                })),
                (e[10] = i.displayName),
                (e[11] = P))
              : (P = e[11]),
            e[12] !== i.isOrg || e[13] !== i.plan
              ? ((z = (0, O.jsx)(gc, { isOrg: i.isOrg, plan: i.plan })),
                (e[12] = i.isOrg),
                (e[13] = i.plan),
                (e[14] = z))
              : (z = e[14]),
            e[15] !== P || e[16] !== z
              ? ((T = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-2",
                  children: [P, z],
                })),
                (e[15] = P),
                (e[16] = z),
                (e[17] = T))
              : (T = e[17]),
            e[18] !== u.length
              ? ((M = (0, O.jsxs)("span", {
                  className: "text-sm text-muted-foreground",
                  children: [u.length, " posts"],
                })),
                (e[18] = u.length),
                (e[19] = M))
              : (M = e[19]),
            e[20] !== T || e[21] !== M
              ? ((R = (0, O.jsxs)("div", {
                  className:
                    "sticky top-0 z-10 flex cursor-pointer flex-row items-center gap-8 bg-background/80 p-4 pb-2 backdrop-blur-sm",
                  onClick: kd,
                  children: [
                    j,
                    (0, O.jsxs)("div", { className: "flex flex-col", children: [T, M] }),
                  ],
                })),
                (e[20] = T),
                (e[21] = M),
                (e[22] = R))
              : (R = e[22]),
            e[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = (0, O.jsx)("div", {
                  className: "absolute inset-0 z-0",
                  style: {
                    backgroundImage:
                      "\n                    radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),\n                    radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),\n                    radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),\n                    radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)\n                  ",
                  },
                })),
                (e[23] = L))
              : (L = e[23]));
          const D = `/api/avatar/${i.avatar}`;
          let A, F, I, $, B, H, U;
          (e[24] !== i.isOrg || e[25] !== i.username || e[26] !== D
            ? ((A = (0, O.jsxs)("div", {
                className: "relative h-full max-h-32 w-full shrink-0 bg-black",
                children: [
                  L,
                  (0, O.jsx)("div", {
                    className: "absolute bottom-0 left-0 translate-y-1/2 px-4",
                    children: (0, O.jsx)(ps, {
                      isOrg: i.isOrg,
                      avatar: D,
                      username: i.username,
                      className: "size-22 shrink-0 border-4 border-background",
                    }),
                  }),
                ],
              })),
              (e[24] = i.isOrg),
              (e[25] = i.username),
              (e[26] = D),
              (e[27] = A))
            : (A = e[27]),
            e[28] !== i.isFollowing || e[29] !== i.username || e[30] !== C
              ? ((F = (0, O.jsx)("div", {
                  className: "self-end p-2",
                  children: C
                    ? (0, O.jsx)(dd, { onSaved: k })
                    : (0, O.jsx)(Os, {
                        username: i.username,
                        isFollowing: i.isFollowing,
                        onFollowStateChange: k,
                      }),
                })),
                (e[28] = i.isFollowing),
                (e[29] = i.username),
                (e[30] = C),
                (e[31] = F))
              : (F = e[31]),
            e[32] !== i.displayName
              ? ((I = (0, O.jsx)("h1", {
                  className: "text-xl font-bold",
                  children: i.displayName,
                })),
                (e[32] = i.displayName),
                (e[33] = I))
              : (I = e[33]),
            e[34] !== i.isOrg || e[35] !== i.plan
              ? (($ = (0, O.jsx)(gc, { isOrg: i.isOrg, plan: i.plan })),
                (e[34] = i.isOrg),
                (e[35] = i.plan),
                (e[36] = $))
              : ($ = e[36]),
            e[37] !== I || e[38] !== $
              ? ((B = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-2",
                  children: [I, $],
                })),
                (e[37] = I),
                (e[38] = $),
                (e[39] = B))
              : (B = e[39]),
            e[40] !== i.username
              ? ((H = (0, O.jsxs)("h2", {
                  className: "text-sm text-muted-foreground",
                  children: ["@", i.username],
                })),
                (e[40] = i.username),
                (e[41] = H))
              : (H = e[41]),
            e[42] !== B || e[43] !== H
              ? ((U = (0, O.jsxs)("div", { className: "flex flex-col", children: [B, H] })),
                (e[42] = B),
                (e[43] = H),
                (e[44] = U))
              : (U = e[44]));
          const W = i.bio || "No bio yet";
          let V, q, K, Q, Y, G, X, Z, J, ee, te, ne, re, ae, oe, le, ie, se, ce, ue, de, fe, pe, me;
          return (
            e[45] !== W
              ? ((V = (0, O.jsx)("p", { className: "text-sm", children: W })),
                (e[45] = W),
                (e[46] = V))
              : (V = e[46]),
            e[47] === Symbol.for("react.memo_cache_sentinel")
              ? ((q = (0, O.jsx)(Cs, { className: "size-4" })), (e[47] = q))
              : (q = e[47]),
            e[48] !== i.createdDate
              ? ((K = new Date(i.createdDate).toLocaleString()),
                (e[48] = i.createdDate),
                (e[49] = K))
              : (K = e[49]),
            e[50] !== K
              ? ((Q = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-2",
                  children: [
                    q,
                    (0, O.jsxs)("span", {
                      className: "text-sm text-muted-foreground",
                      children: ["Joined ", K],
                    }),
                  ],
                })),
                (e[50] = K),
                (e[51] = Q))
              : (Q = e[51]),
            e[52] !== i.followingCount
              ? ((Y = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [
                    (0, O.jsx)("span", { className: "font-bold", children: i.followingCount }),
                    "Following",
                  ],
                })),
                (e[52] = i.followingCount),
                (e[53] = Y))
              : (Y = e[53]),
            e[54] !== i.followersCount
              ? ((G = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-1",
                  children: [
                    (0, O.jsx)("span", { className: "font-bold", children: i.followersCount }),
                    "Followers",
                  ],
                })),
                (e[54] = i.followersCount),
                (e[55] = G))
              : (G = e[55]),
            e[56] !== Y || e[57] !== G
              ? ((X = (0, O.jsxs)("div", {
                  className: "flex flex-row items-center gap-6",
                  children: [Y, G],
                })),
                (e[56] = Y),
                (e[57] = G),
                (e[58] = X))
              : (X = e[58]),
            e[59] !== i.isOrg ||
            e[60] !== i.plan ||
            e[61] !== i.username ||
            e[62] !== t ||
            e[63] !== C ||
            e[64] !== n
              ? ((Z =
                  t &&
                  !C &&
                  !i.isOrg &&
                  ("premium" === i.plan || "premium+" === i.plan) &&
                  !n.isOrg &&
                  ("free" === n.plan || "basic" === n.plan) &&
                  (0, O.jsxs)("div", {
                    className: "flex flex-col gap-2 rounded-lg bg-sidebar-primary/25 p-4 text-sm",
                    children: [
                      (0, O.jsxs)("span", {
                        className: "text-lg font-bold",
                        children: ["@", n.username, ", you aren't verified yet"],
                      }),
                      (0, O.jsxs)("span", {
                        children: [
                          "Get verified like ",
                          (0, O.jsxs)("b", { children: ["@", i.username] }),
                          " to stand out and get boosted reply reach.",
                        ],
                      }),
                      (0, O.jsx)(wa, {
                        asChild: !0,
                        className: "w-fit",
                        children: (0, O.jsx)("a", { href: "/premium", children: "Get Verified" }),
                      }),
                    ],
                  })),
                (e[59] = i.isOrg),
                (e[60] = i.plan),
                (e[61] = i.username),
                (e[62] = t),
                (e[63] = C),
                (e[64] = n),
                (e[65] = Z))
              : (Z = e[65]),
            e[66] !== U || e[67] !== V || e[68] !== Q || e[69] !== X || e[70] !== Z
              ? ((J = (0, O.jsxs)("div", {
                  className: "flex flex-col gap-3 border-b border-border p-4",
                  children: [U, V, Q, X, Z],
                })),
                (e[66] = U),
                (e[67] = V),
                (e[68] = Q),
                (e[69] = X),
                (e[70] = Z),
                (e[71] = J))
              : (J = e[71]),
            e[72] !== N || e[73] !== g || e[74] !== u
              ? ((ee = g
                  ? null
                  : N
                    ? u.length > 0
                      ? (0, O.jsx)(O.Fragment, { children: u.map(xd) })
                      : (0, O.jsx)(md, {
                          children: (0, O.jsxs)(hd, {
                            children: [
                              (0, O.jsx)(vd, { variant: "icon", children: (0, O.jsx)(y, {}) }),
                              (0, O.jsx)(yd, { children: "No Chirps Yet" }),
                              (0, O.jsx)(bd, { children: "The author has not chirped yet" }),
                            ],
                          }),
                        })
                    : (0, O.jsxs)(md, {
                        children: [
                          (0, O.jsxs)(hd, {
                            children: [
                              (0, O.jsx)(vd, { variant: "icon", children: (0, O.jsx)(Ns, {}) }),
                              (0, O.jsx)(yd, { children: "This profile is private" }),
                              (0, O.jsx)(bd, { children: "Follow to see their posts" }),
                            ],
                          }),
                          (0, O.jsx)(wa, {
                            variant: "link",
                            asChild: !0,
                            className: "text-muted-foreground",
                            size: "sm",
                            children: (0, O.jsxs)("a", {
                              href: "#",
                              children: ["Learn More ", (0, O.jsx)(_s, {})],
                            }),
                          }),
                        ],
                      })),
                (e[72] = N),
                (e[73] = g),
                (e[74] = u),
                (e[75] = ee))
              : (ee = e[75]),
            e[76] !== A || e[77] !== F || e[78] !== J || e[79] !== ee
              ? ((te = (0, O.jsxs)("div", {
                  className: "no-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto",
                  children: [A, F, J, ee],
                })),
                (e[76] = A),
                (e[77] = F),
                (e[78] = J),
                (e[79] = ee),
                (e[80] = te))
              : (te = e[80]),
            e[81] !== R || e[82] !== te
              ? ((ne = (0, O.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col border-border sm:border-x",
                  children: [R, te],
                })),
                (e[81] = R),
                (e[82] = te),
                (e[83] = ne))
              : (ne = e[83]),
            e[84] === Symbol.for("react.memo_cache_sentinel")
              ? ((re = (0, O.jsx)(Ss, { placeholder: "Search..." })), (e[84] = re))
              : (re = e[84]),
            e[85] === Symbol.for("react.memo_cache_sentinel")
              ? ((ae = (0, O.jsx)("div", {
                  className: "sticky top-0 z-10 bg-background/80 backdrop-blur-sm",
                  children: (0, O.jsxs)(bs, {
                    children: [re, (0, O.jsx)(xs, { children: (0, O.jsx)(h, {}) })],
                  }),
                })),
                (e[85] = ae))
              : (ae = e[85]),
            e[86] !== p
              ? ((oe = (0, O.jsx)(Ms, { followers: p })), (e[86] = p), (e[87] = oe))
              : (oe = e[87]),
            e[88] === Symbol.for("react.memo_cache_sentinel")
              ? ((le = (0, O.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Terms of Service",
                })),
                (ie = (0, O.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Privacy Policy",
                })),
                (se = (0, O.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Cookie Policy",
                })),
                (ce = (0, O.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Accessibility",
                })),
                (ue = (0, O.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "Ads Info",
                })),
                (de = (0, O.jsx)("a", {
                  href: "/",
                  className: "hover:underline",
                  children: "More ...",
                })),
                (e[88] = le),
                (e[89] = ie),
                (e[90] = se),
                (e[91] = ce),
                (e[92] = ue),
                (e[93] = de))
              : ((le = e[88]),
                (ie = e[89]),
                (se = e[90]),
                (ce = e[91]),
                (ue = e[92]),
                (de = e[93])),
            e[94] === Symbol.for("react.memo_cache_sentinel")
              ? ((fe = (0, O.jsxs)("div", {
                  className: "flex flex-wrap gap-2 text-xs text-muted-foreground",
                  children: [
                    le,
                    ie,
                    se,
                    ce,
                    ue,
                    de,
                    (0, O.jsxs)("span", { children: ["© ", new Date().getFullYear(), " Chitter"] }),
                  ],
                })),
                (e[94] = fe))
              : (fe = e[94]),
            e[95] !== oe || e[96] !== fe
              ? ((pe = (0, O.jsxs)("div", {
                  className: "hidden h-full w-full max-w-xs flex-col gap-4 p-4 sm:flex md:max-w-sm",
                  children: [
                    ae,
                    (0, O.jsxs)("div", {
                      className: "no-scrollbar min-h-0 flex-1 space-y-4 overflow-y-auto",
                      children: [oe, fe],
                    }),
                  ],
                })),
                (e[95] = oe),
                (e[96] = fe),
                (e[97] = pe))
              : (pe = e[97]),
            e[98] !== ne || e[99] !== pe
              ? ((me = (0, O.jsx)("div", {
                  className: "flex h-dvh flex-col overflow-hidden",
                  children: (0, O.jsxs)("div", {
                    className:
                      "mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x",
                    children: [_, ne, pe],
                  }),
                })),
                (e[98] = ne),
                (e[99] = pe),
                (e[100] = me))
              : (me = e[100]),
            me
          );
        }
        function xd(e) {
          return (0, O.jsx)(Ac, { post: e }, e._id);
        }
        function kd() {
          return history.back();
        }
        const Sd = p("circle-check", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
          ]),
          Ed = p("info", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "M12 16v-4", key: "1dtifu" }],
            ["path", { d: "M12 8h.01", key: "e9boi3" }],
          ]),
          Cd = p("triangle-alert", [
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
          Nd = p("octagon-x", [
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
          _d = (e) => {
            const t = (0, l.c)(7);
            let n, r, a, o, i;
            return (
              t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
              t[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = {
                    success: (0, O.jsx)(Sd, { className: "size-4" }),
                    info: (0, O.jsx)(Ed, { className: "size-4" }),
                    warning: (0, O.jsx)(Cd, { className: "size-4" }),
                    error: (0, O.jsx)(Nd, { className: "size-4" }),
                    loading: (0, O.jsx)(pc, { className: "size-4 animate-spin" }),
                  }),
                  (a = {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                    "--border-radius": "var(--radius)",
                  }),
                  (t[2] = r),
                  (t[3] = a))
                : ((r = t[2]), (a = t[3])),
              t[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((o = { classNames: { toast: "cn-toast" } }), (t[4] = o))
                : (o = t[4]),
              t[5] !== n
                ? ((i = (0, O.jsx)(Dc, {
                    theme: "dark",
                    className: "toaster group",
                    icons: r,
                    style: a,
                    toastOptions: o,
                    ...n,
                  })),
                  (t[5] = n),
                  (t[6] = i))
                : (i = t[6]),
              i
            );
          };
        (0, o.createRoot)(document.getElementById("root")).render(
          (0, O.jsx)(r.StrictMode, {
            children: (0, O.jsx)(Ki, {
              children: (0, O.jsxs)(fa, {
                children: [
                  (0, O.jsx)(wd, {}),
                  (0, O.jsx)(_d, { position: "top-center", richColors: !0 }),
                ],
              }),
            }),
          }),
        );
      },
      247(e, t, n) {
        var r = n(982),
          a = n(540),
          o = n(961);
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
          w = Symbol.for("react.context"),
          x = Symbol.for("react.forward_ref"),
          k = Symbol.for("react.suspense"),
          S = Symbol.for("react.suspense_list"),
          E = Symbol.for("react.memo"),
          C = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var N = Symbol.for("react.activity");
        (Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"));
        var _ = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var j = Symbol.iterator;
        function P(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (j && e[j]) || e["@@iterator"])
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
              case w:
                return e.displayName || "Context";
              case b:
                return (e._context.displayName || "Context") + ".Consumer";
              case x:
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
          O = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          R = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          L = { pending: !1, data: null, method: null, action: null },
          D = [],
          A = -1;
        function F(e) {
          return { current: e };
        }
        function I(e) {
          0 > A || ((e.current = D[A]), (D[A] = null), A--);
        }
        function $(e, t) {
          (A++, (D[A] = e.current), (e.current = t));
        }
        var B,
          H,
          U = F(null),
          W = F(null),
          V = F(null),
          q = F(null);
        function K(e, t) {
          switch (($(V, t), $(W, e), $(U, null), t.nodeType)) {
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
          (I(U), $(U, e));
        }
        function Q() {
          (I(U), I(W), I(V));
        }
        function Y(e) {
          null !== e.memoizedState && $(q, e);
          var t = U.current,
            n = vd(t, e.type);
          t !== n && ($(W, e), $(U, n));
        }
        function G(e) {
          (W.current === e && (I(U), I(W)), q.current === e && (I(q), (uf._currentValue = L)));
        }
        function X(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              ((B = (t && t[1]) || ""),
                (H =
                  -1 < e.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + B + e + H;
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
            var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var o = r.DetermineComponentFrameRoot(),
              l = o[0],
              i = o[1];
            if (l && i) {
              var s = l.split("\n"),
                c = i.split("\n");
              for (a = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot"); ) r++;
              for (; a < c.length && !c[a].includes("DetermineComponentFrameRoot"); ) a++;
              if (r === s.length || a === c.length)
                for (r = s.length - 1, a = c.length - 1; 1 <= r && 0 <= a && s[r] !== c[a]; ) a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (s[r] !== c[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || s[r] !== c[a])) {
                        var u = "\n" + s[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= r && 0 <= a);
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
          ae = r.unstable_cancelCallback,
          oe = r.unstable_shouldYield,
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
                return 0 == (e >>>= 0) ? 32 : (31 - ((we(e) / xe) | 0)) | 0;
              },
          we = Math.log,
          xe = Math.LN2,
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
          var a = 0,
            o = e.suspendedLanes,
            l = e.pingedLanes;
          e = e.warmLanes;
          var i = 134217727 & r;
          return (
            0 !== i
              ? 0 !== (r = i & ~o)
                ? (a = Ce(r))
                : 0 !== (l &= i)
                  ? (a = Ce(l))
                  : n || (0 !== (n = i & ~e) && (a = Ce(n)))
              : 0 !== (i = r & ~o)
                ? (a = Ce(i))
                : 0 !== l
                  ? (a = Ce(l))
                  : n || (0 !== (n = r & ~e) && (a = Ce(n))),
            0 === a
              ? 0
              : 0 !== t &&
                  t !== a &&
                  0 === (t & o) &&
                  ((o = a & -a) >= (n = t & -t) || (32 === o && 4194048 & n))
                ? t
                : a
          );
        }
        function _e(e, t) {
          return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
        }
        function je(e, t) {
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
        function Oe(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - be(n),
              a = 1 << r;
            ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
          }
        }
        function Re(e, t) {
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
          var e = R.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Ef(e.type);
        }
        function Fe(e, t) {
          var n = R.p;
          try {
            return ((R.p = e), t());
          } finally {
            R.p = n;
          }
        }
        var Ie = Math.random().toString(36).slice(2),
          $e = "__reactFiber$" + Ie,
          Be = "__reactProps$" + Ie,
          He = "__reactContainer$" + Ie,
          Ue = "__reactEvents$" + Ie,
          We = "__reactListeners$" + Ie,
          Ve = "__reactHandles$" + Ie,
          qe = "__reactResources$" + Ie,
          Ke = "__reactMarker$" + Ie;
        function Qe(e) {
          (delete e[$e], delete e[Be], delete e[Ue], delete e[We], delete e[Ve]);
        }
        function Ye(e) {
          var t = e[$e];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[He] || n[$e])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Ld(e); null !== e; ) {
                  if ((n = e[$e])) return n;
                  e = Ld(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ge(e) {
          if ((e = e[$e] || e[He])) {
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
        var at = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
          ),
          ot = {},
          lt = {};
        function it(e, t, n) {
          if (
            ((a = t),
            ne.call(lt, a) || (!ne.call(ot, a) && (at.test(a) ? (lt[a] = !0) : ((ot[a] = !0), 0))))
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
          var a;
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
                var a = r.get,
                  o = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      ((n = "" + e), o.call(this, e));
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
        function vt(e, t, n, r, a, o, l, i) {
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
            null == a && null != o && (e.defaultChecked = !!o),
            null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a),
            null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i
              ? (e.name = "" + ut(i))
              : e.removeAttribute("name"));
        }
        function yt(e, t, n, r, a, o, l, i) {
          if (
            (null != o &&
              "function" != typeof o &&
              "symbol" != typeof o &&
              "boolean" != typeof o &&
              (e.type = o),
            null != t || null != n)
          ) {
            if (("submit" === o || "reset" === o) && null == t) return void ft(e);
            ((n = null != n ? "" + ut(n) : ""),
              (t = null != t ? "" + ut(t) : n),
              i || t === e.value || (e.value = t),
              (e.defaultValue = t));
          }
          ((r = "function" != typeof (r = null != r ? r : a) && "symbol" != typeof r && !!r),
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
        function wt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              ((a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + ut(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function xt(e, t, n) {
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
            for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Ct(e, a, r));
          } else for (var o in t) t.hasOwnProperty(o) && Ct(e, o, t[o]);
        }
        function _t(e) {
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
        var jt = new Map([
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
        function Ot(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Rt = null,
          Lt = null;
        function Dt(e) {
          var t = Ge(e);
          if (t && (e = t.stateNode)) {
            var n = e[Be] || null;
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
                      var a = r[Be] || null;
                      if (!a) throw Error(l(90));
                      vt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name,
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && pt(r);
                }
                break e;
              case "textarea":
                xt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && wt(e, !!n.multiple, t, !1);
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
              (null !== Rt || null !== Lt) &&
                (Zc(), Rt && ((t = Rt), (e = Lt), (Lt = Rt = null), Dt(t), e)))
            )
              for (t = 0; t < e.length; t++) Dt(e[t]);
          }
        }
        function It(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Be] || null;
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
        var $t = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          Bt = !1;
        if ($t)
          try {
            var Ht = {};
            (Object.defineProperty(Ht, "passive", {
              get: function () {
                Bt = !0;
              },
            }),
              window.addEventListener("test", Ht, Ht),
              window.removeEventListener("test", Ht, Ht));
          } catch (e) {
            Bt = !1;
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
            a = "value" in Ut ? Ut.value : Ut.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Vt = a.slice(e, 1 < t ? 1 - t : void 0));
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
        function Yt() {
          return !1;
        }
        function Gt(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
              )
                ? Qt
                : Yt),
              (this.isPropagationStopped = Yt),
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
          tn = Gt(en),
          nn = f({}, en, { view: 0, detail: 0 }),
          rn = Gt(nn),
          an = f({}, nn, {
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
          on = Gt(an),
          ln = Gt(f({}, an, { dataTransfer: 0 })),
          sn = Gt(f({}, nn, { relatedTarget: 0 })),
          cn = Gt(f({}, en, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          un = Gt(
            f({}, en, {
              clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
              },
            }),
          ),
          dn = Gt(f({}, en, { data: 0 })),
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
        var vn = Gt(
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
          yn = Gt(
            f({}, an, {
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
          bn = Gt(
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
          wn = Gt(f({}, en, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          xn = Gt(
            f({}, an, {
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
          kn = Gt(f({}, en, { newState: 0, oldState: 0 })),
          Sn = [9, 13, 27, 32],
          En = $t && "CompositionEvent" in window,
          Cn = null;
        $t && "documentMode" in document && (Cn = document.documentMode);
        var Nn = $t && "TextEvent" in window && !Cn,
          _n = $t && (!En || (Cn && 8 < Cn && 11 >= Cn)),
          jn = String.fromCharCode(32),
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
          On = {
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
        function Rn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!On[e.type] : "textarea" === t;
        }
        function Ln(e, t, n, r) {
          (Rt ? (Lt ? Lt.push(r) : (Lt = [r])) : (Rt = r),
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
        function $n(e, t) {
          if ("change" === e) return t;
        }
        var Bn = !1;
        if ($t) {
          var Hn;
          if ($t) {
            var Un = "oninput" in document;
            if (!Un) {
              var Wn = document.createElement("div");
              (Wn.setAttribute("oninput", "return;"), (Un = "function" == typeof Wn.oninput));
            }
            Hn = Un;
          } else Hn = !1;
          Bn = Hn && (!document.documentMode || 9 < document.documentMode);
        }
        function Vn() {
          Dn && (Dn.detachEvent("onpropertychange", qn), (An = Dn = null));
        }
        function qn(e) {
          if ("value" === e.propertyName && In(An)) {
            var t = [];
            (Ln(t, An, e, Ot(e)), Ft(Fn, t));
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
        function Yn(e, t) {
          if ("click" === e) return In(t);
        }
        function Gn(e, t) {
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
            var a = n[r];
            if (!ne.call(t, a) || !Xn(e[a], t[a])) return !1;
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
        var ar = $t && "documentMode" in document && 11 >= document.documentMode,
          or = null,
          lr = null,
          ir = null,
          sr = !1;
        function cr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          sr ||
            null == or ||
            or !== mt(r) ||
            ((r =
              "selectionStart" in (r = or) && rr(r)
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
                (t.target = or))));
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
        $t &&
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
          wr = mr("transitioncancel"),
          xr = mr("transitionend"),
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
          _r = 0,
          jr = 0;
        function Pr() {
          for (var e = _r, t = (jr = _r = 0); t < e; ) {
            var n = Nr[t];
            Nr[t++] = null;
            var r = Nr[t];
            Nr[t++] = null;
            var a = Nr[t];
            Nr[t++] = null;
            var o = Nr[t];
            if (((Nr[t++] = null), null !== r && null !== a)) {
              var l = r.pending;
              (null === l ? (a.next = a) : ((a.next = l.next), (l.next = a)), (r.pending = a));
            }
            0 !== o && Or(n, a, o);
          }
        }
        function zr(e, t, n, r) {
          ((Nr[_r++] = e),
            (Nr[_r++] = t),
            (Nr[_r++] = n),
            (Nr[_r++] = r),
            (jr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Tr(e, t, n, r) {
          return (zr(e, t, n, r), Rr(e));
        }
        function Mr(e, t) {
          return (zr(e, null, null, t), Rr(e));
        }
        function Or(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, o = e.return; null !== o; )
            ((o.childLanes |= n),
              null !== (r = o.alternate) && (r.childLanes |= n),
              22 === o.tag && (null === (e = o.stateNode) || 1 & e._visibility || (a = !0)),
              (e = o),
              (o = o.return));
          return 3 === e.tag
            ? ((o = e.stateNode),
              a &&
                null !== t &&
                ((a = 31 - be(n)),
                null === (r = (e = o.hiddenUpdates)[a]) ? (e[a] = [t]) : r.push(t),
                (t.lane = 536870912 | n)),
              o)
            : null;
        }
        function Rr(e) {
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
        function $r(e, t) {
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
        function Br(e, t, n, r, a, o) {
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
                return (((e = Ar(31, n, t, a)).elementType = N), (e.lanes = o), e);
              case g:
                return Hr(n.children, a, o, t);
              case v:
                ((i = 8), (a |= 24));
                break;
              case y:
                return (((e = Ar(12, n, t, 2 | a)).elementType = y), (e.lanes = o), e);
              case k:
                return (((e = Ar(13, n, t, a)).elementType = k), (e.lanes = o), e);
              case S:
                return (((e = Ar(19, n, t, a)).elementType = S), (e.lanes = o), e);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case w:
                      i = 10;
                      break e;
                    case b:
                      i = 9;
                      break e;
                    case x:
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
          return (((t = Ar(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t);
        }
        function Hr(e, t, n, r) {
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
          Yr = 0,
          Gr = null,
          Xr = 0,
          Zr = [],
          Jr = 0,
          ea = null,
          ta = 1,
          na = "";
        function ra(e, t) {
          ((Qr[Yr++] = Xr), (Qr[Yr++] = Gr), (Gr = e), (Xr = t));
        }
        function aa(e, t, n) {
          ((Zr[Jr++] = ta), (Zr[Jr++] = na), (Zr[Jr++] = ea), (ea = e));
          var r = ta;
          e = na;
          var a = 32 - be(r) - 1;
          ((r &= ~(1 << a)), (n += 1));
          var o = 32 - be(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            ((o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (ta = (1 << (32 - be(t) + a)) | (n << a) | r),
              (na = o + e));
          } else ((ta = (1 << o) | (n << a) | r), (na = e));
        }
        function oa(e) {
          null !== e.return && (ra(e, 1), aa(e, 1, 0));
        }
        function la(e) {
          for (; e === Gr; ) ((Gr = Qr[--Yr]), (Qr[Yr] = null), (Xr = Qr[--Yr]), (Qr[Yr] = null));
          for (; e === ea; )
            ((ea = Zr[--Jr]),
              (Zr[Jr] = null),
              (na = Zr[--Jr]),
              (Zr[Jr] = null),
              (ta = Zr[--Jr]),
              (Zr[Jr] = null));
        }
        function ia(e, t) {
          ((Zr[Jr++] = ta),
            (Zr[Jr++] = na),
            (Zr[Jr++] = ea),
            (ta = t.id),
            (na = t.overflow),
            (ea = e));
        }
        var sa = null,
          ca = null,
          ua = !1,
          da = null,
          fa = !1,
          pa = Error(l(519));
        function ma(e) {
          throw (
            wa(
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
            pa
          );
        }
        function ha(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[$e] = e), (t[Be] = r), n)) {
            case "dialog":
              (Yu("cancel", t), Yu("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              Yu("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < qu.length; n++) Yu(qu[n], t);
              break;
            case "source":
              Yu("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (Yu("error", t), Yu("load", t));
              break;
            case "details":
              Yu("toggle", t);
              break;
            case "input":
              (Yu("invalid", t),
                yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
              break;
            case "select":
              Yu("invalid", t);
              break;
            case "textarea":
              (Yu("invalid", t), kt(t, r.value, r.defaultValue, r.children));
          }
          (("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          sd(t.textContent, n)
            ? (null != r.popover && (Yu("beforetoggle", t), Yu("toggle", t)),
              null != r.onScroll && Yu("scroll", t),
              null != r.onScrollEnd && Yu("scrollend", t),
              null != r.onClick && (t.onclick = Tt),
              (t = !0))
            : (t = !1),
            t || ma(e, !0));
        }
        function ga(e) {
          for (sa = e.return; sa; )
            switch (sa.tag) {
              case 5:
              case 31:
              case 13:
                return void (fa = !1);
              case 27:
              case 3:
                return void (fa = !0);
              default:
                sa = sa.return;
            }
        }
        function va(e) {
          if (e !== sa) return !1;
          if (!ua) return (ga(e), (ua = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t = !("form" !== (t = e.type) && "button" !== t) || yd(e.type, e.memoizedProps)),
              (t = !t)),
            t && ca && ma(e),
            ga(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            ca = Rd(e);
          } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            ca = Rd(e);
          } else
            27 === n
              ? ((n = ca), Cd(e.type) ? ((e = Od), (Od = null), (ca = e)) : (ca = n))
              : (ca = sa ? Md(e.stateNode.nextSibling) : null);
          return !0;
        }
        function ya() {
          ((ca = sa = null), (ua = !1));
        }
        function ba() {
          var e = da;
          return (null !== e && (null === Pc ? (Pc = e) : Pc.push.apply(Pc, e), (da = null)), e);
        }
        function wa(e) {
          null === da ? (da = [e]) : da.push(e);
        }
        var xa = F(null),
          ka = null,
          Sa = null;
        function Ea(e, t, n) {
          ($(xa, t._currentValue), (t._currentValue = n));
        }
        function Ca(e) {
          ((e._currentValue = xa.current), I(xa));
        }
        function Na(e, t, n) {
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
        function _a(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var o = a.dependencies;
            if (null !== o) {
              var i = a.child;
              o = o.firstContext;
              e: for (; null !== o; ) {
                var s = o;
                o = a;
                for (var c = 0; c < t.length; c++)
                  if (s.context === t[c]) {
                    ((o.lanes |= n),
                      null !== (s = o.alternate) && (s.lanes |= n),
                      Na(o.return, n, e),
                      r || (i = null));
                    break e;
                  }
                o = s.next;
              }
            } else if (18 === a.tag) {
              if (null === (i = a.return)) throw Error(l(341));
              ((i.lanes |= n),
                null !== (o = i.alternate) && (o.lanes |= n),
                Na(i, n, e),
                (i = null));
            } else i = a.child;
            if (null !== i) i.return = a;
            else
              for (i = a; null !== i; ) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (a = i.sibling)) {
                  ((a.return = i.return), (i = a));
                  break;
                }
                i = i.return;
              }
            a = i;
          }
        }
        function ja(e, t, n, r) {
          e = null;
          for (var a = t, o = !1; null !== a; ) {
            if (!o)
              if (524288 & a.flags) o = !0;
              else if (262144 & a.flags) break;
            if (10 === a.tag) {
              var i = a.alternate;
              if (null === i) throw Error(l(387));
              if (null !== (i = i.memoizedProps)) {
                var s = a.type;
                Xn(a.pendingProps.value, i.value) || (null !== e ? e.push(s) : (e = [s]));
              }
            } else if (a === q.current) {
              if (null === (i = a.alternate)) throw Error(l(387));
              i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(uf) : (e = [uf]));
            }
            a = a.return;
          }
          (null !== e && _a(t, e, n, r), (t.flags |= 262144));
        }
        function Pa(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Xn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function za(e) {
          ((ka = e), (Sa = null), null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function Ta(e) {
          return Oa(ka, e);
        }
        function Ma(e, t) {
          return (null === ka && za(e), Oa(e, t));
        }
        function Oa(e, t) {
          var n = t._currentValue;
          if (((t = { context: t, memoizedValue: n, next: null }), null === Sa)) {
            if (null === e) throw Error(l(308));
            ((Sa = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
          } else Sa = Sa.next = t;
          return n;
        }
        var Ra =
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
          La = r.unstable_scheduleCallback,
          Da = r.unstable_NormalPriority,
          Aa = {
            $$typeof: w,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Fa() {
          return { controller: new Ra(), data: new Map(), refCount: 0 };
        }
        function Ia(e) {
          (e.refCount--,
            0 === e.refCount &&
              La(Da, function () {
                e.controller.abort();
              }));
        }
        var $a = null,
          Ba = 0,
          Ha = 0,
          Ua = null;
        function Wa() {
          if (0 === --Ba && null !== $a) {
            null !== Ua && (Ua.status = "fulfilled");
            var e = $a;
            (($a = null), (Ha = 0), (Ua = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Va = O.S;
        O.S = function (e, t) {
          ((Mc = ie()),
            "object" == typeof t &&
              null !== t &&
              "function" == typeof t.then &&
              (function (e, t) {
                if (null === $a) {
                  var n = ($a = []);
                  ((Ba = 0),
                    (Ha = Bu()),
                    (Ua = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        n.push(e);
                      },
                    }));
                }
                (Ba++, t.then(Wa, Wa));
              })(0, t),
            null !== Va && Va(e, t));
        };
        var qa = F(null);
        function Ka() {
          var e = qa.current;
          return null !== e ? e : pc.pooledCache;
        }
        function Qa(e, t) {
          $(qa, null === t ? qa.current : t.pool);
        }
        function Ya() {
          var e = Ka();
          return null === e ? null : { parent: Aa._currentValue, pool: e };
        }
        var Ga = Error(l(460)),
          Xa = Error(l(474)),
          Za = Error(l(542)),
          Ja = { then: function () {} };
        function eo(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function to(e, t, n) {
          switch (
            (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Tt, Tt), (t = n)), t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (oo((e = t.reason)), e);
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
                  throw (oo((e = t.reason)), e);
              }
              throw ((ro = t), Ga);
          }
        }
        function no(e) {
          try {
            return (0, e._init)(e._payload);
          } catch (e) {
            if (null !== e && "object" == typeof e && "function" == typeof e.then)
              throw ((ro = e), Ga);
            throw e;
          }
        }
        var ro = null;
        function ao() {
          if (null === ro) throw Error(l(459));
          var e = ro;
          return ((ro = null), e);
        }
        function oo(e) {
          if (e === Ga || e === Za) throw Error(l(483));
        }
        var lo = null,
          io = 0;
        function so(e) {
          var t = io;
          return ((io += 1), null === lo && (lo = []), to(lo, e, t));
        }
        function co(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function uo(e, t) {
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
        function fo(e) {
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
          function a(e, t) {
            return (((e = Ir(e, t)).index = 0), (e.sibling = null), e);
          }
          function o(t, n, r) {
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
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" == typeof o && null !== o && o.$$typeof === C && no(o) === t.type))
                ? (co((t = a(t, n.props)), n), (t.return = e), t)
                : (co((t = Br(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Hr(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
              return (((t = Ur("" + t, e.mode, n)).return = e), t);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return (
                    co((n = Br(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n
                  );
                case h:
                  return (((t = Vr(t, e.mode, n)).return = e), t);
                case C:
                  return f(e, (t = no(t)), n);
              }
              if (M(t) || P(t)) return (((t = Hr(t, e.mode, n, null)).return = e), t);
              if ("function" == typeof t.then) return f(e, so(t), n);
              if (t.$$typeof === w) return f(e, Ma(e, t), n);
              uo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n || "bigint" == typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case m:
                  return n.key === a ? c(e, t, n, r) : null;
                case h:
                  return n.key === a ? u(e, t, n, r) : null;
                case C:
                  return p(e, t, (n = no(n)), r);
              }
              if (M(n) || P(n)) return null !== a ? null : d(e, t, n, r, null);
              if ("function" == typeof n.then) return p(e, t, so(n), r);
              if (n.$$typeof === w) return p(e, t, Ma(e, n), r);
              uo(e, n);
            }
            return null;
          }
          function v(e, t, n, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case m:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case h:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case C:
                  return v(e, t, n, (r = no(r)), a);
              }
              if (M(r) || P(r)) return d(t, (e = e.get(n) || null), r, a, null);
              if ("function" == typeof r.then) return v(e, t, n, so(r), a);
              if (r.$$typeof === w) return v(e, t, n, Ma(t, r), a);
              uo(t, r);
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
                            (n(s, c.sibling), ((d = a(c, u.props.children)).return = s), (s = d));
                            break e;
                          }
                        } else if (
                          c.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            no(b) === c.type)
                        ) {
                          (n(s, c.sibling), co((d = a(c, u.props)), u), (d.return = s), (s = d));
                          break e;
                        }
                        n(s, c);
                        break;
                      }
                      (t(s, c), (c = c.sibling));
                    }
                    u.type === g
                      ? (((d = Hr(u.props.children, s.mode, d, u.key)).return = s), (s = d))
                      : (co((d = Br(u.type, u.key, u.props, null, s.mode, d)), u),
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
                          (n(s, c.sibling), ((d = a(c, u.children || [])).return = s), (s = d));
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
                  return y(s, c, (u = no(u)), d);
              }
              if (M(u))
                return (function (a, l, i, s) {
                  for (
                    var c = null, u = null, d = l, m = (l = 0), h = null;
                    null !== d && m < i.length;
                    m++
                  ) {
                    d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
                    var g = p(a, d, i[m], s);
                    if (null === g) {
                      null === d && (d = h);
                      break;
                    }
                    (e && d && null === g.alternate && t(a, d),
                      (l = o(g, l, m)),
                      null === u ? (c = g) : (u.sibling = g),
                      (u = g),
                      (d = h));
                  }
                  if (m === i.length) return (n(a, d), ua && ra(a, m), c);
                  if (null === d) {
                    for (; m < i.length; m++)
                      null !== (d = f(a, i[m], s)) &&
                        ((l = o(d, l, m)), null === u ? (c = d) : (u.sibling = d), (u = d));
                    return (ua && ra(a, m), c);
                  }
                  for (d = r(d); m < i.length; m++)
                    null !== (h = v(d, a, m, i[m], s)) &&
                      (e && null !== h.alternate && d.delete(null === h.key ? m : h.key),
                      (l = o(h, l, m)),
                      null === u ? (c = h) : (u.sibling = h),
                      (u = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    ua && ra(a, m),
                    c
                  );
                })(s, c, u, d);
              if (P(u)) {
                if ("function" != typeof (b = P(u))) throw Error(l(150));
                return (function (a, i, s, c) {
                  if (null == s) throw Error(l(151));
                  for (
                    var u = null, d = null, m = i, h = (i = 0), g = null, y = s.next();
                    null !== m && !y.done;
                    h++, y = s.next()
                  ) {
                    m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
                    var b = p(a, m, y.value, c);
                    if (null === b) {
                      null === m && (m = g);
                      break;
                    }
                    (e && m && null === b.alternate && t(a, m),
                      (i = o(b, i, h)),
                      null === d ? (u = b) : (d.sibling = b),
                      (d = b),
                      (m = g));
                  }
                  if (y.done) return (n(a, m), ua && ra(a, h), u);
                  if (null === m) {
                    for (; !y.done; h++, y = s.next())
                      null !== (y = f(a, y.value, c)) &&
                        ((i = o(y, i, h)), null === d ? (u = y) : (d.sibling = y), (d = y));
                    return (ua && ra(a, h), u);
                  }
                  for (m = r(m); !y.done; h++, y = s.next())
                    null !== (y = v(m, a, h, y.value, c)) &&
                      (e && null !== y.alternate && m.delete(null === y.key ? h : y.key),
                      (i = o(y, i, h)),
                      null === d ? (u = y) : (d.sibling = y),
                      (d = y));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(a, e);
                      }),
                    ua && ra(a, h),
                    u
                  );
                })(s, c, (u = b.call(u)), d);
              }
              if ("function" == typeof u.then) return y(s, c, so(u), d);
              if (u.$$typeof === w) return y(s, c, Ma(s, u), d);
              uo(s, u);
            }
            return ("string" == typeof u && "" !== u) ||
              "number" == typeof u ||
              "bigint" == typeof u
              ? ((u = "" + u),
                null !== c && 6 === c.tag
                  ? (n(s, c.sibling), ((d = a(c, u)).return = s), (s = d))
                  : (n(s, c), ((d = Ur(u, s.mode, d)).return = s), (s = d)),
                i(s))
              : n(s, c);
          }
          return function (e, t, n, r) {
            try {
              io = 0;
              var a = y(e, t, n, r);
              return ((lo = null), a);
            } catch (t) {
              if (t === Ga || t === Za) throw t;
              var o = Ar(29, t, null, e.mode);
              return ((o.lanes = r), (o.return = e), o);
            }
          };
        }
        var po = fo(!0),
          mo = fo(!1),
          ho = !1;
        function go(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function vo(e, t) {
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
        function yo(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function bo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & fc)) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = Rr(e)),
              Or(e, null, n),
              t
            );
          }
          return (zr(e, r, t, n), Rr(e));
        }
        function wo(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Oe(e, n));
          }
        }
        function xo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                (null === o ? (a = o = l) : (o = o.next = l), (n = n.next));
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        var ko = !1;
        function So() {
          if (ko && null !== Ua) throw Ua;
        }
        function Eo(e, t, n, r) {
          ko = !1;
          var a = e.updateQueue;
          ho = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              c = s.next;
            ((s.next = null), null === l ? (o = c) : (l.next = c), (l = s));
            var u = e.alternate;
            null !== u &&
              (i = (u = u.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (u.firstBaseUpdate = c) : (i.next = c), (u.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, u = c = s = null, i = o; ; ) {
              var p = -536870913 & i.lane,
                m = p !== i.lane;
              if (m ? (hc & p) === p : (r & p) === p) {
                (0 !== p && p === Ha && (ko = !0),
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
                      ho = !0;
                  }
                }
                null !== (p = i.callback) &&
                  ((e.flags |= 64),
                  m && (e.flags |= 8192),
                  null === (m = a.callbacks) ? (a.callbacks = [p]) : m.push(p));
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
                if (null === (i = a.shared.pending)) break;
                ((i = (m = i).next),
                  (m.next = null),
                  (a.lastBaseUpdate = m),
                  (a.shared.pending = null));
              }
            }
            (null === u && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null === o && (a.shared.lanes = 0),
              (Sc |= l),
              (e.lanes = l),
              (e.memoizedState = d));
          }
        }
        function Co(e, t) {
          if ("function" != typeof e) throw Error(l(191, e));
          e.call(t);
        }
        function No(e, t) {
          var n = e.callbacks;
          if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) Co(n[e], t);
        }
        var _o = F(null),
          jo = F(0);
        function Po(e, t) {
          ($(jo, (e = xc)), $(_o, t), (xc = e | t.baseLanes));
        }
        function zo() {
          ($(jo, xc), $(_o, _o.current));
        }
        function To() {
          ((xc = jo.current), I(_o), I(jo));
        }
        var Mo = F(null),
          Oo = null;
        function Ro(e) {
          var t = e.alternate;
          ($(Io, 1 & Io.current),
            $(Mo, e),
            null === Oo &&
              (null === t || null !== _o.current || null !== t.memoizedState) &&
              (Oo = e));
        }
        function Lo(e) {
          ($(Io, Io.current), $(Mo, e), null === Oo && (Oo = e));
        }
        function Do(e) {
          22 === e.tag ? ($(Io, Io.current), $(Mo, e), null === Oo && (Oo = e)) : Ao();
        }
        function Ao() {
          ($(Io, Io.current), $(Mo, Mo.current));
        }
        function Fo(e) {
          (I(Mo), Oo === e && (Oo = null), I(Io));
        }
        var Io = F(0);
        function $o(e) {
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
        var Bo = 0,
          Ho = null,
          Uo = null,
          Wo = null,
          Vo = !1,
          qo = !1,
          Ko = !1,
          Qo = 0,
          Yo = 0,
          Go = null,
          Xo = 0;
        function Zo() {
          throw Error(l(321));
        }
        function Jo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!Xn(e[n], t[n])) return !1;
          return !0;
        }
        function el(e, t, n, r, a, o) {
          return (
            (Bo = o),
            (Ho = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (O.H = null === e || null === e.memoizedState ? hi : gi),
            (Ko = !1),
            (o = n(r, a)),
            (Ko = !1),
            qo && (o = nl(t, n, r, a)),
            tl(e),
            o
          );
        }
        function tl(e) {
          O.H = mi;
          var t = null !== Uo && null !== Uo.next;
          if (((Bo = 0), (Wo = Uo = Ho = null), (Vo = !1), (Yo = 0), (Go = null), t))
            throw Error(l(300));
          null === e || Mi || (null !== (e = e.dependencies) && Pa(e) && (Mi = !0));
        }
        function nl(e, t, n, r) {
          Ho = e;
          var a = 0;
          do {
            if ((qo && (Go = null), (Yo = 0), (qo = !1), 25 <= a)) throw Error(l(301));
            if (((a += 1), (Wo = Uo = null), null != e.updateQueue)) {
              var o = e.updateQueue;
              ((o.lastEffect = null),
                (o.events = null),
                (o.stores = null),
                null != o.memoCache && (o.memoCache.index = 0));
            }
            ((O.H = vi), (o = t(n, r)));
          } while (qo);
          return o;
        }
        function rl() {
          var e = O.H,
            t = e.useState()[0];
          return (
            (t = "function" == typeof t.then ? cl(t) : t),
            (e = e.useState()[0]),
            (null !== Uo ? Uo.memoizedState : null) !== e && (Ho.flags |= 1024),
            t
          );
        }
        function al() {
          var e = 0 !== Qo;
          return ((Qo = 0), e);
        }
        function ol(e, t, n) {
          ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
        }
        function ll(e) {
          if (Vo) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            Vo = !1;
          }
          ((Bo = 0), (Wo = Uo = Ho = null), (qo = !1), (Yo = Qo = 0), (Go = null));
        }
        function il() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (null === Wo ? (Ho.memoizedState = Wo = e) : (Wo = Wo.next = e), Wo);
        }
        function sl() {
          if (null === Uo) {
            var e = Ho.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Uo.next;
          var t = null === Wo ? Ho.memoizedState : Wo.next;
          if (null !== t) ((Wo = t), (Uo = e));
          else {
            if (null === e) {
              if (null === Ho.alternate) throw Error(l(467));
              throw Error(l(310));
            }
            ((e = {
              memoizedState: (Uo = e).memoizedState,
              baseState: Uo.baseState,
              baseQueue: Uo.baseQueue,
              queue: Uo.queue,
              next: null,
            }),
              null === Wo ? (Ho.memoizedState = Wo = e) : (Wo = Wo.next = e));
          }
          return Wo;
        }
        function cl(e) {
          var t = Yo;
          return (
            (Yo += 1),
            null === Go && (Go = []),
            (e = to(Go, e, t)),
            (t = Ho),
            null === (null === Wo ? t.memoizedState : Wo.next) &&
              ((t = t.alternate), (O.H = null === t || null === t.memoizedState ? hi : gi)),
            e
          );
        }
        function ul(e) {
          if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return cl(e);
            if (e.$$typeof === w) return Ta(e);
          }
          throw Error(l(438, String(e)));
        }
        function dl(e) {
          var t = null,
            n = Ho.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Ho.alternate;
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
              (Ho.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = _;
          return (t.index++, n);
        }
        function fl(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function pl(e) {
          return ml(sl(), Uo, e);
        }
        function ml(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(l(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            o = r.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              ((a.next = o.next), (o.next = i));
            }
            ((t.baseQueue = a = o), (r.pending = null));
          }
          if (((o = e.baseState), null === a)) e.memoizedState = o;
          else {
            var s = (i = null),
              c = null,
              u = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & u.lane;
              if (f !== u.lane ? (hc & f) === f : (Bo & f) === f) {
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
                    f === Ha && (d = !0));
                else {
                  if ((Bo & p) === p) {
                    ((u = u.next), p === Ha && (d = !0));
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
                    null === c ? ((s = c = f), (i = o)) : (c = c.next = f),
                    (Ho.lanes |= p),
                    (Sc |= p));
                }
                ((f = u.action), Ko && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)));
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
                  null === c ? ((s = c = p), (i = o)) : (c = c.next = p),
                  (Ho.lanes |= f),
                  (Sc |= f));
              u = u.next;
            } while (null !== u && u !== t);
            if (
              (null === c ? (i = o) : (c.next = s),
              !Xn(o, e.memoizedState) && ((Mi = !0), d && null !== (n = Ua)))
            )
              throw n;
            ((e.memoizedState = o),
              (e.baseState = i),
              (e.baseQueue = c),
              (r.lastRenderedState = o));
          }
          return (null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]);
        }
        function hl(e) {
          var t = sl(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              ((o = e(o, i.action)), (i = i.next));
            } while (i !== a);
            (Xn(o, t.memoizedState) || (Mi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o));
          }
          return [o, r];
        }
        function gl(e, t, n) {
          var r = Ho,
            a = sl(),
            o = ua;
          if (o) {
            if (void 0 === n) throw Error(l(407));
            n = n();
          } else n = t();
          var i = !Xn((Uo || a).memoizedState, n);
          if (
            (i && ((a.memoizedState = n), (Mi = !0)),
            (a = a.queue),
            Bl(bl.bind(null, r, a, e), [e]),
            a.getSnapshot !== t || i || (null !== Wo && 1 & Wo.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Dl(9, { destroy: void 0 }, yl.bind(null, r, a, n, t), null),
              null === pc)
            )
              throw Error(l(349));
            o || 127 & Bo || vl(r, t, n);
          }
          return n;
        }
        function vl(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Ho.updateQueue)
              ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                (Ho.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function yl(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), wl(t) && xl(e));
        }
        function bl(e, t, n) {
          return n(function () {
            wl(t) && xl(e);
          });
        }
        function wl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Xn(e, n);
          } catch (e) {
            return !0;
          }
        }
        function xl(e) {
          var t = Mr(e, 2);
          null !== t && Kc(t, 0, 2);
        }
        function kl(e) {
          var t = il();
          if ("function" == typeof e) {
            var n = e;
            if (((e = n()), Ko)) {
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
          return ((e.baseState = n), ml(e, Uo, "function" == typeof r ? r : fl));
        }
        function El(e, t, n, r, a) {
          if (di(e)) throw Error(l(485));
          if (null !== (e = t.action)) {
            var o = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                o.listeners.push(e);
              },
            };
            (null !== O.T ? n(!0) : (o.isTransition = !1),
              r(o),
              null === (n = t.pending)
                ? ((o.next = t.pending = o), Cl(t, o))
                : ((o.next = n.next), (t.pending = n.next = o)));
          }
        }
        function Cl(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var o = O.T,
              l = {};
            O.T = l;
            try {
              var i = n(a, r),
                s = O.S;
              (null !== s && s(l, i), Nl(e, t, i));
            } catch (n) {
              jl(e, t, n);
            } finally {
              (null !== o && null !== l.types && (o.types = l.types), (O.T = o));
            }
          } else
            try {
              Nl(e, t, (o = n(a, r)));
            } catch (n) {
              jl(e, t, n);
            }
        }
        function Nl(e, t, n) {
          null !== n && "object" == typeof n && "function" == typeof n.then
            ? n.then(
                function (n) {
                  _l(e, t, n);
                },
                function (n) {
                  return jl(e, t, n);
                },
              )
            : _l(e, t, n);
        }
        function _l(e, t, n) {
          ((t.status = "fulfilled"),
            (t.value = n),
            Pl(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), Cl(e, n))));
        }
        function jl(e, t, n) {
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
          if (ua) {
            var n = pc.formState;
            if (null !== n) {
              e: {
                var r = Ho;
                if (ua) {
                  if (ca) {
                    t: {
                      for (var a = ca, o = fa; 8 !== a.nodeType; ) {
                        if (!o) {
                          a = null;
                          break t;
                        }
                        if (null === (a = Md(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (o = a.data) || "F" === o ? a : null;
                    }
                    if (a) {
                      ((ca = Md(a.nextSibling)), (r = "F!" === a.data));
                      break e;
                    }
                  }
                  ma(r);
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
            (n = si.bind(null, Ho, r)),
            (r.dispatch = n),
            (r = kl(!1)),
            (o = ui.bind(null, Ho, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = il()).queue = a),
            (n = El.bind(null, Ho, a, o, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Ml(e) {
          return Ol(sl(), Uo, e);
        }
        function Ol(e, t, n) {
          if (
            ((t = ml(e, t, zl)[0]),
            (e = pl(fl)[0]),
            "object" == typeof t && null !== t && "function" == typeof t.then)
          )
            try {
              var r = cl(t);
            } catch (e) {
              if (e === Ga) throw Za;
              throw e;
            }
          else r = t;
          var a = (t = sl()).queue,
            o = a.dispatch;
          return (
            n !== t.memoizedState &&
              ((Ho.flags |= 2048), Dl(9, { destroy: void 0 }, Rl.bind(null, a, n), null)),
            [r, o, e]
          );
        }
        function Rl(e, t) {
          e.action = t;
        }
        function Ll(e) {
          var t = sl(),
            n = Uo;
          if (null !== n) return Ol(t, n, e);
          (sl(), (t = t.memoizedState));
          var r = (n = sl()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function Dl(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = Ho.updateQueue) &&
              ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
              (Ho.updateQueue = t)),
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
          var a = il();
          ((Ho.flags |= e),
            (a.memoizedState = Dl(1 | t, { destroy: void 0 }, n, void 0 === r ? null : r)));
        }
        function Il(e, t, n, r) {
          var a = sl();
          r = void 0 === r ? null : r;
          var o = a.memoizedState.inst;
          null !== Uo && null !== r && Jo(r, Uo.memoizedState.deps)
            ? (a.memoizedState = Dl(t, o, n, r))
            : ((Ho.flags |= e), (a.memoizedState = Dl(1 | t, o, n, r)));
        }
        function $l(e, t) {
          Fl(8390656, 8, e, t);
        }
        function Bl(e, t) {
          Il(2048, 8, e, t);
        }
        function Hl(e) {
          var t = sl().memoizedState;
          return (
            (function (e) {
              Ho.flags |= 4;
              var t = Ho.updateQueue;
              if (null === t)
                ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                  (Ho.updateQueue = t),
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
          return null !== t && Jo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Yl(e, t) {
          var n = sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && Jo(t, r[1])) return r[0];
          if (((r = e()), Ko)) {
            ye(!0);
            try {
              e();
            } finally {
              ye(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function Gl(e, t, n) {
          return void 0 === n || (1073741824 & Bo && !(261930 & hc))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n), (e = qc()), (Ho.lanes |= e), (Sc |= e), n);
        }
        function Xl(e, t, n, r) {
          return Xn(n, t)
            ? n
            : null !== _o.current
              ? ((e = Gl(e, n, r)), Xn(e, t) || (Mi = !0), e)
              : 42 & Bo && (!(1073741824 & Bo) || 261930 & hc)
                ? ((e = qc()), (Ho.lanes |= e), (Sc |= e), t)
                : ((Mi = !0), (e.memoizedState = n));
        }
        function Zl(e, t, n, r, a) {
          var o = R.p;
          R.p = 0 !== o && 8 > o ? o : 8;
          var l,
            i,
            s,
            c = O.T,
            u = {};
          ((O.T = u), ui(e, !1, t, n));
          try {
            var d = a(),
              f = O.S;
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
            ((R.p = o), null !== c && null !== u.types && (c.types = u.types), (O.T = c));
          }
        }
        function Jl() {}
        function ei(e, t, n, r) {
          if (5 !== e.tag) throw Error(l(476));
          var a = ti(e).queue;
          Zl(
            e,
            a,
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
          return Ta(uf);
        }
        function ai() {
          return sl().memoizedState;
        }
        function oi() {
          return sl().memoizedState;
        }
        function li(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Vc(),
                  r = bo(t, (e = yo(n)), n);
                return (
                  null !== r && (Kc(r, 0, n), wo(r, t, n)),
                  (t = { cache: Fa() }),
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
          var a = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (di(e)) fi(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), Xn(i, l)))
                  return (zr(e, t, a, 0), null === pc && Pr(), !1);
              } catch (e) {}
            if (null !== (n = Tr(e, t, a, r))) return (Kc(n, 0, r), pi(n, t, r), !0);
          }
          return !1;
        }
        function ui(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Bu(),
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
          return e === Ho || (null !== t && t === Ho);
        }
        function fi(e, t) {
          qo = Vo = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
        }
        function pi(e, t, n) {
          if (4194048 & n) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Oe(e, n));
          }
        }
        var mi = {
          readContext: Ta,
          use: ul,
          useCallback: Zo,
          useContext: Zo,
          useEffect: Zo,
          useImperativeHandle: Zo,
          useLayoutEffect: Zo,
          useInsertionEffect: Zo,
          useMemo: Zo,
          useReducer: Zo,
          useRef: Zo,
          useState: Zo,
          useDebugValue: Zo,
          useDeferredValue: Zo,
          useTransition: Zo,
          useSyncExternalStore: Zo,
          useId: Zo,
          useHostTransitionStatus: Zo,
          useFormState: Zo,
          useActionState: Zo,
          useOptimistic: Zo,
          useMemoCache: Zo,
          useCacheRefresh: Zo,
        };
        mi.useEffectEvent = Zo;
        var hi = {
            readContext: Ta,
            use: ul,
            useCallback: function (e, t) {
              return ((il().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Ta,
            useEffect: $l,
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
              if (Ko) {
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
                var a = n(t);
                if (Ko) {
                  ye(!0);
                  try {
                    n(t);
                  } finally {
                    ye(!1);
                  }
                }
              } else a = t;
              return (
                (r.memoizedState = r.baseState = a),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: a,
                }),
                (r.queue = e),
                (e = e.dispatch = ii.bind(null, Ho, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (il().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = kl(e)).queue,
                n = si.bind(null, Ho, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: Kl,
            useDeferredValue: function (e, t) {
              return Gl(il(), e, t);
            },
            useTransition: function () {
              var e = kl(!1);
              return ((e = Zl.bind(null, Ho, e.queue, !0, !1)), (il().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
              var r = Ho,
                a = il();
              if (ua) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === pc)) throw Error(l(349));
                127 & hc || vl(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                $l(bl.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Dl(9, { destroy: void 0 }, yl.bind(null, r, o, n, t), null),
                n
              );
            },
            useId: function () {
              var e = il(),
                t = pc.identifierPrefix;
              if (ua) {
                var n = na;
                ((t = "_" + t + "R_" + (n = (ta & ~(1 << (32 - be(ta) - 1))).toString(32) + n)),
                  0 < (n = Qo++) && (t += "H" + n.toString(32)),
                  (t += "_"));
              } else t = "_" + t + "r_" + (n = Xo++).toString(32) + "_";
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
              return ((t.queue = n), (t = ui.bind(null, Ho, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: dl,
            useCacheRefresh: function () {
              return (il().memoizedState = li.bind(null, Ho));
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
            readContext: Ta,
            use: ul,
            useCallback: Ql,
            useContext: Ta,
            useEffect: Bl,
            useImperativeHandle: ql,
            useInsertionEffect: Ul,
            useLayoutEffect: Wl,
            useMemo: Yl,
            useReducer: pl,
            useRef: Al,
            useState: function () {
              return pl(fl);
            },
            useDebugValue: Kl,
            useDeferredValue: function (e, t) {
              return Xl(sl(), Uo.memoizedState, e, t);
            },
            useTransition: function () {
              var e = pl(fl)[0],
                t = sl().memoizedState;
              return ["boolean" == typeof e ? e : cl(e), t];
            },
            useSyncExternalStore: gl,
            useId: ai,
            useHostTransitionStatus: ri,
            useFormState: Ml,
            useActionState: Ml,
            useOptimistic: function (e, t) {
              return Sl(sl(), 0, e, t);
            },
            useMemoCache: dl,
            useCacheRefresh: oi,
          };
        gi.useEffectEvent = Hl;
        var vi = {
          readContext: Ta,
          use: ul,
          useCallback: Ql,
          useContext: Ta,
          useEffect: Bl,
          useImperativeHandle: ql,
          useInsertionEffect: Ul,
          useLayoutEffect: Wl,
          useMemo: Yl,
          useReducer: hl,
          useRef: Al,
          useState: function () {
            return hl(fl);
          },
          useDebugValue: Kl,
          useDeferredValue: function (e, t) {
            var n = sl();
            return null === Uo ? Gl(n, e, t) : Xl(n, Uo.memoizedState, e, t);
          },
          useTransition: function () {
            var e = hl(fl)[0],
              t = sl().memoizedState;
            return ["boolean" == typeof e ? e : cl(e), t];
          },
          useSyncExternalStore: gl,
          useId: ai,
          useHostTransitionStatus: ri,
          useFormState: Ll,
          useActionState: Ll,
          useOptimistic: function (e, t) {
            var n = sl();
            return null !== Uo ? Sl(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
          },
          useMemoCache: dl,
          useCacheRefresh: oi,
        };
        function yi(e, t, n, r) {
          ((n = null == (n = n(r, (t = e.memoizedState))) ? t : f({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        vi.useEffectEvent = Hl;
        var bi = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Vc(),
              a = yo(r);
            ((a.payload = t),
              null != n && (a.callback = n),
              null !== (t = bo(e, a, r)) && (Kc(t, 0, r), wo(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Vc(),
              a = yo(r);
            ((a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              null !== (t = bo(e, a, r)) && (Kc(t, 0, r), wo(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Vc(),
              r = yo(n);
            ((r.tag = 2),
              null != t && (r.callback = t),
              null !== (t = bo(e, r, n)) && (Kc(t, 0, n), wo(t, e, n)));
          },
        };
        function wi(e, t, n, r, a, o, l) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !(t.prototype && t.prototype.isPureReactComponent && Zn(n, r) && Zn(a, o));
        }
        function xi(e, t, n, r) {
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
            for (var a in (n === t && (n = f({}, n)), e)) void 0 === n[a] && (n[a] = e[a]);
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
        function _i(e, t, n) {
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
        function ji(e, t, n) {
          return (
            ((n = yo(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Ni(e, t);
            }),
            n
          );
        }
        function Pi(e) {
          return (((e = yo(e)).tag = 3), e);
        }
        function zi(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" == typeof a) {
            var o = r.value;
            ((e.payload = function () {
              return a(o);
            }),
              (e.callback = function () {
                _i(t, n, r);
              }));
          }
          var l = n.stateNode;
          null !== l &&
            "function" == typeof l.componentDidCatch &&
            (e.callback = function () {
              (_i(t, n, r),
                "function" != typeof a && (null === Lc ? (Lc = new Set([this])) : Lc.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
            });
        }
        var Ti = Error(l(461)),
          Mi = !1;
        function Oi(e, t, n, r) {
          t.child = null === e ? mo(t, null, n, r) : po(t, e.child, n, r);
        }
        function Ri(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          if ("ref" in r) {
            var l = {};
            for (var i in r) "ref" !== i && (l[i] = r[i]);
          } else l = r;
          return (
            za(t),
            (r = el(e, t, n, l, o, a)),
            (i = al()),
            null === e || Mi
              ? (ua && i && oa(t), (t.flags |= 1), Oi(e, t, r, a), t.child)
              : (ol(e, t, a), rs(e, t, a))
          );
        }
        function Li(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" != typeof o ||
              Fr(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare
              ? (((e = Br(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Di(e, t, o, r, a));
          }
          if (((o = e.child), !as(e, a))) {
            var l = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Zn)(l, r) && e.ref === t.ref)
              return rs(e, t, a);
          }
          return ((t.flags |= 1), ((e = Ir(o, r)).ref = t.ref), (e.return = t), (t.child = e));
        }
        function Di(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (Zn(o, r) && e.ref === t.ref) {
              if (((Mi = !1), (t.pendingProps = r = o), !as(e, a)))
                return ((t.lanes = e.lanes), rs(e, t, a));
              131072 & e.flags && (Mi = !0);
            }
          }
          return Ui(e, t, n, r, a);
        }
        function Ai(e, t, n, r) {
          var a = r.children,
            o = null !== e ? e.memoizedState : null;
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
              if (((o = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (r = t.child = e.child, a = 0; null !== r; )
                  ((a = a | r.lanes | r.childLanes), (r = r.sibling));
                r = a & ~o;
              } else ((r = 0), (t.child = null));
              return Ii(e, t, o, n, r);
            }
            if (!(536870912 & n))
              return ((r = t.lanes = 536870912), Ii(e, t, null !== o ? o.baseLanes | n : n, n, r));
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Qa(0, null !== o ? o.cachePool : null),
              null !== o ? Po(t, o) : zo(),
              Do(t));
          } else
            null !== o
              ? (Qa(0, o.cachePool), Po(t, o), Ao(), (t.memoizedState = null))
              : (null !== e && Qa(0, null), zo(), Ao());
          return (Oi(e, t, a, n), t.child);
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
        function Ii(e, t, n, r, a) {
          var o = Ka();
          return (
            (o = null === o ? null : { parent: Aa._currentValue, pool: o }),
            (t.memoizedState = { baseLanes: n, cachePool: o }),
            null !== e && Qa(0, null),
            zo(),
            Do(t),
            null !== e && ja(e, t, r, !0),
            (t.childLanes = a),
            null
          );
        }
        function $i(e, t) {
          return (
            ((t = Zi({ mode: t.mode, children: t.children }, e.mode)).ref = e.ref),
            (e.child = t),
            (t.return = e),
            t
          );
        }
        function Bi(e, t, n) {
          return (
            po(t, e.child, null, n),
            ((e = $i(t, t.pendingProps)).flags |= 2),
            Fo(t),
            (t.memoizedState = null),
            e
          );
        }
        function Hi(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ui(e, t, n, r, a) {
          return (
            za(t),
            (n = el(e, t, n, r, void 0, a)),
            (r = al()),
            null === e || Mi
              ? (ua && r && oa(t), (t.flags |= 1), Oi(e, t, n, a), t.child)
              : (ol(e, t, a), rs(e, t, a))
          );
        }
        function Wi(e, t, n, r, a, o) {
          return (
            za(t),
            (t.updateQueue = null),
            (n = nl(t, r, n, a)),
            tl(e),
            (r = al()),
            null === e || Mi
              ? (ua && r && oa(t), (t.flags |= 1), Oi(e, t, n, o), t.child)
              : (ol(e, t, o), rs(e, t, o))
          );
        }
        function Vi(e, t, n, r, a) {
          if ((za(t), null === t.stateNode)) {
            var o = Lr,
              l = n.contextType;
            ("object" == typeof l && null !== l && (o = Ta(l)),
              (o = new n(r, o)),
              (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
              (o.updater = bi),
              (t.stateNode = o),
              (o._reactInternals = t),
              ((o = t.stateNode).props = r),
              (o.state = t.memoizedState),
              (o.refs = {}),
              go(t),
              (l = n.contextType),
              (o.context = "object" == typeof l && null !== l ? Ta(l) : Lr),
              (o.state = t.memoizedState),
              "function" == typeof (l = n.getDerivedStateFromProps) &&
                (yi(t, n, l, r), (o.state = t.memoizedState)),
              "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof o.getSnapshotBeforeUpdate ||
                ("function" != typeof o.UNSAFE_componentWillMount &&
                  "function" != typeof o.componentWillMount) ||
                ((l = o.state),
                "function" == typeof o.componentWillMount && o.componentWillMount(),
                "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
                l !== o.state && bi.enqueueReplaceState(o, o.state, null),
                Eo(t, r, o, a),
                So(),
                (o.state = t.memoizedState)),
              "function" == typeof o.componentDidMount && (t.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            o = t.stateNode;
            var i = t.memoizedProps,
              s = ki(n, i);
            o.props = s;
            var c = o.context,
              u = n.contextType;
            ((l = Lr), "object" == typeof u && null !== u && (l = Ta(u)));
            var d = n.getDerivedStateFromProps;
            ((u = "function" == typeof d || "function" == typeof o.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              u ||
                ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof o.componentWillReceiveProps) ||
                ((i || c !== l) && xi(t, o, r, l)),
              (ho = !1));
            var f = t.memoizedState;
            ((o.state = f),
              Eo(t, r, o, a),
              So(),
              (c = t.memoizedState),
              i || f !== c || ho
                ? ("function" == typeof d && (yi(t, n, d, r), (c = t.memoizedState)),
                  (s = ho || wi(t, n, s, r, f, c, l))
                    ? (u ||
                        ("function" != typeof o.UNSAFE_componentWillMount &&
                          "function" != typeof o.componentWillMount) ||
                        ("function" == typeof o.componentWillMount && o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" == typeof o.componentDidMount && (t.flags |= 4194308))
                    : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = c)),
                  (o.props = r),
                  (o.state = c),
                  (o.context = l),
                  (r = s))
                : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1)));
          } else {
            ((o = t.stateNode),
              vo(e, t),
              (u = ki(n, (l = t.memoizedProps))),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              (c = n.contextType),
              (s = Lr),
              "object" == typeof c && null !== c && (s = Ta(c)),
              (c =
                "function" == typeof (i = n.getDerivedStateFromProps) ||
                "function" == typeof o.getSnapshotBeforeUpdate) ||
                ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof o.componentWillReceiveProps) ||
                ((l !== d || f !== s) && xi(t, o, r, s)),
              (ho = !1),
              (f = t.memoizedState),
              (o.state = f),
              Eo(t, r, o, a),
              So());
            var p = t.memoizedState;
            l !== d ||
            f !== p ||
            ho ||
            (null !== e && null !== e.dependencies && Pa(e.dependencies))
              ? ("function" == typeof i && (yi(t, n, i, r), (p = t.memoizedState)),
                (u =
                  ho ||
                  wi(t, n, u, r, f, p, s) ||
                  (null !== e && null !== e.dependencies && Pa(e.dependencies)))
                  ? (c ||
                      ("function" != typeof o.UNSAFE_componentWillUpdate &&
                        "function" != typeof o.componentWillUpdate) ||
                      ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, p, s),
                      "function" == typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ("function" != typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = s),
                (r = u))
              : ("function" != typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (o = r),
            Hi(e, t),
            (r = !!(128 & t.flags)),
            o || r
              ? ((o = t.stateNode),
                (n = r && "function" != typeof n.getDerivedStateFromError ? null : o.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = po(t, e.child, null, a)), (t.child = po(t, null, n, a)))
                  : Oi(e, t, n, a),
                (t.memoizedState = o.state),
                (e = t.child))
              : (e = rs(e, t, a)),
            e
          );
        }
        function qi(e, t, n, r) {
          return (ya(), (t.flags |= 256), Oi(e, t, n, r), t.child);
        }
        var Ki = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Qi(e) {
          return { baseLanes: e, cachePool: Ya() };
        }
        function Yi(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Nc), e);
        }
        function Gi(e, t, n) {
          var r,
            a = t.pendingProps,
            o = !1,
            i = !!(128 & t.flags);
          if (
            ((r = i) || (r = (null === e || null !== e.memoizedState) && !!(2 & Io.current)),
            r && ((o = !0), (t.flags &= -129)),
            (r = !!(32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (ua) {
              if (
                (o ? Ro(t) : Ao(),
                (e = ca)
                  ? null !== (e = null !== (e = Pd(e, fa)) && "&" !== e.data ? e : null) &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext: null !== ea ? { id: ta, overflow: na } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((n = Wr(e)).return = t),
                    (t.child = n),
                    (sa = t),
                    (ca = null))
                  : (e = null),
                null === e)
              )
                throw ma(t);
              return (Td(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var s = a.children;
            return (
              (a = a.fallback),
              o
                ? (Ao(),
                  (s = Zi({ mode: "hidden", children: s }, (o = t.mode))),
                  (a = Hr(a, o, n, null)),
                  (s.return = t),
                  (a.return = t),
                  (s.sibling = a),
                  (t.child = s),
                  ((a = t.child).memoizedState = Qi(n)),
                  (a.childLanes = Yi(e, r, n)),
                  (t.memoizedState = Ki),
                  Fi(null, a))
                : (Ro(t), Xi(t, s))
            );
          }
          var c = e.memoizedState;
          if (null !== c && null !== (s = c.dehydrated)) {
            if (i)
              256 & t.flags
                ? (Ro(t), (t.flags &= -257), (t = Ji(e, t, n)))
                : null !== t.memoizedState
                  ? (Ao(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (Ao(),
                    (s = a.fallback),
                    (o = t.mode),
                    (a = Zi({ mode: "visible", children: a.children }, o)),
                    ((s = Hr(s, o, n, null)).flags |= 2),
                    (a.return = t),
                    (s.return = t),
                    (a.sibling = s),
                    (t.child = a),
                    po(t, e.child, null, n),
                    ((a = t.child).memoizedState = Qi(n)),
                    (a.childLanes = Yi(e, r, n)),
                    (t.memoizedState = Ki),
                    (t = Fi(null, a)));
            else if ((Ro(t), Td(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var u = r.dgst;
              ((r = u),
                ((a = Error(l(419))).stack = ""),
                (a.digest = r),
                wa({ value: a, source: null, stack: null }),
                (t = Ji(e, t, n)));
            } else if ((Mi || ja(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Mi || r)) {
              if (null !== (r = pc) && 0 !== (a = Re(r, n)) && a !== c.retryLane)
                throw ((c.retryLane = a), Mr(e, a), Kc(r, 0, a), Ti);
              (zd(s) || ou(), (t = Ji(e, t, n)));
            } else
              zd(s)
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = c.treeContext),
                  (ca = Md(s.nextSibling)),
                  (sa = t),
                  (ua = !0),
                  (da = null),
                  (fa = !1),
                  null !== e && ia(t, e),
                  ((t = Xi(t, a.children)).flags |= 4096));
            return t;
          }
          return o
            ? (Ao(),
              (s = a.fallback),
              (o = t.mode),
              (u = (c = e.child).sibling),
              ((a = Ir(c, { mode: "hidden", children: a.children })).subtreeFlags =
                65011712 & c.subtreeFlags),
              null !== u ? (s = Ir(u, s)) : ((s = Hr(s, o, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              Fi(null, a),
              (a = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Qi(n))
                : (null !== (o = s.cachePool)
                    ? ((c = Aa._currentValue), (o = o.parent !== c ? { parent: c, pool: c } : o))
                    : (o = Ya()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: o })),
              (a.memoizedState = s),
              (a.childLanes = Yi(e, r, n)),
              (t.memoizedState = Ki),
              Fi(e.child, a))
            : (Ro(t),
              (e = (n = e.child).sibling),
              ((n = Ir(n, { mode: "visible", children: a.children })).return = t),
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
            po(t, e.child, null, n),
            ((e = Xi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function es(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), Na(e.return, t, n));
        }
        function ts(e, t, n, r, a, o) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
                treeForkCount: o,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a),
              (l.treeForkCount = o));
        }
        function ns(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          r = r.children;
          var l = Io.current,
            i = !!(2 & l);
          if (
            (i ? ((l = (1 & l) | 2), (t.flags |= 128)) : (l &= 1),
            $(Io, l),
            Oi(e, t, r, n),
            (r = ua ? Xr : 0),
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
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                (null !== (e = n.alternate) && null === $o(e) && (a = n), (n = n.sibling));
              (null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                ts(t, !1, a, n, o, r));
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === $o(e)) {
                  t.child = a;
                  break;
                }
                ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
              }
              ts(t, !0, n, null, o, r);
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
            if ((ja(e, t, n, !1), 0 === (n & t.childLanes))) return null;
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
        function as(e, t) {
          return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Pa(e));
        }
        function os(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Mi = !0;
            else {
              if (!(as(e, n) || 128 & t.flags))
                return (
                  (Mi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (K(t, t.stateNode.containerInfo), Ea(0, Aa, e.memoizedState.cache), ya());
                        break;
                      case 27:
                      case 5:
                        Y(t);
                        break;
                      case 4:
                        K(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        Ea(0, t.type, t.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== t.memoizedState) return ((t.flags |= 128), Lo(t), null);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Ro(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Gi(e, t, n)
                              : (Ro(t), null !== (e = rs(e, t, n)) ? e.sibling : null);
                        Ro(t);
                        break;
                      case 19:
                        var a = !!(128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (ja(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return ns(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                          $(Io, Io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                        return ((t.lanes = 0), Ai(e, t, n, t.pendingProps));
                      case 24:
                        Ea(0, Aa, e.memoizedState.cache);
                    }
                    return rs(e, t, n);
                  })(e, t, n)
                );
              Mi = !!(131072 & e.flags);
            }
          else ((Mi = !1), ua && 1048576 & t.flags && aa(t, Xr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                var r = t.pendingProps;
                if (((e = no(t.elementType)), (t.type = e), "function" != typeof e)) {
                  if (null != e) {
                    var a = e.$$typeof;
                    if (a === x) {
                      ((t.tag = 11), (t = Ri(null, t, e, r, n)));
                      break e;
                    }
                    if (a === E) {
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
              return Vi(e, t, (r = t.type), (a = ki(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((K(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var o = t.memoizedState;
                ((a = o.element), vo(e, t), Eo(t, r, null, n));
                var i = t.memoizedState;
                if (
                  ((r = i.cache),
                  Ea(0, Aa, r),
                  r !== o.cache && _a(t, [Aa], n, !0),
                  So(),
                  (r = i.element),
                  o.isDehydrated)
                ) {
                  if (
                    ((o = { element: r, isDehydrated: !1, cache: i.cache }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = qi(e, t, r, n);
                    break e;
                  }
                  if (r !== a) {
                    (wa((a = Kr(Error(l(424)), t))), (t = qi(e, t, r, n)));
                    break e;
                  }
                  for (
                    e =
                      9 === (e = t.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      ca = Md(e.firstChild),
                      sa = t,
                      ua = !0,
                      da = null,
                      fa = !0,
                      n = mo(t, null, r, n),
                      t.child = n;
                    n;
                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((ya(), r === a)) {
                    t = rs(e, t, n);
                    break e;
                  }
                  Oi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Hi(e, t),
                null === e
                  ? (n = Wd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : ua ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = hd(V.current).createElement(n))[$e] = t),
                      (r[Be] = e),
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
                Y(t),
                null === e &&
                  ua &&
                  ((r = t.stateNode = Dd(t.type, t.pendingProps, V.current)),
                  (sa = t),
                  (fa = !0),
                  (a = ca),
                  Cd(t.type) ? ((Od = a), (ca = Md(r.firstChild))) : (ca = a)),
                Oi(e, t, t.pendingProps.children, n),
                Hi(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  ua &&
                  ((a = r = ca) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
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
                                  "stylesheet" === (o = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  o !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href || "" === a.href ? null : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin ? null : a.crossOrigin) ||
                                  e.getAttribute("title") !== (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((o = e.getAttribute("src")) !== (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !== (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin ? null : a.crossOrigin)) &&
                                  o &&
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
                          var o = null == a.name ? null : "" + a.name;
                          if ("hidden" === a.type && e.getAttribute("name") === o) return e;
                        }
                        if (null === (e = Md(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, fa))
                      ? ((t.stateNode = r), (sa = t), (ca = Md(r.firstChild)), (fa = !1), (a = !0))
                      : (a = !1)),
                  a || ma(t)),
                Y(t),
                (a = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = o.children),
                yd(a, o) ? (r = null) : null !== i && yd(a, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = el(e, t, rl, null, null, n)), (uf._currentValue = a)),
                Hi(e, t),
                Oi(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  ua &&
                  ((e = n = ca) &&
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
                    })(n, t.pendingProps, fa))
                      ? ((t.stateNode = n), (sa = t), (ca = null), (e = !0))
                      : (e = !1)),
                  e || ma(t)),
                null
              );
            case 13:
              return Gi(e, t, n);
            case 4:
              return (
                K(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = po(t, null, r, n)) : Oi(e, t, r, n),
                t.child
              );
            case 11:
              return Ri(e, t, t.type, t.pendingProps, n);
            case 7:
              return (Oi(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (Oi(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return (
                (r = t.pendingProps), Ea(0, t.type, r.value), Oi(e, t, r.children, n), t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                za(t),
                (r = r((a = Ta(a)))),
                (t.flags |= 1),
                Oi(e, t, r, n),
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
                  a = !!(128 & t.flags);
                if (((t.flags &= -129), null === e)) {
                  if (ua) {
                    if ("hidden" === r.mode)
                      return ((e = $i(t, r)), (t.lanes = 536870912), Fi(null, e));
                    if (
                      (Lo(t),
                      (e = ca)
                        ? null !== (e = null !== (e = Pd(e, fa)) && "&" === e.data ? e : null) &&
                          ((t.memoizedState = {
                            dehydrated: e,
                            treeContext: null !== ea ? { id: ta, overflow: na } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((n = Wr(e)).return = t),
                          (t.child = n),
                          (sa = t),
                          (ca = null))
                        : (e = null),
                      null === e)
                    )
                      throw ma(t);
                    return ((t.lanes = 536870912), null);
                  }
                  return $i(t, r);
                }
                var o = e.memoizedState;
                if (null !== o) {
                  var i = o.dehydrated;
                  if ((Lo(t), a))
                    if (256 & t.flags) ((t.flags &= -257), (t = Bi(e, t, n)));
                    else {
                      if (null === t.memoizedState) throw Error(l(558));
                      ((t.child = e.child), (t.flags |= 128), (t = null));
                    }
                  else if ((Mi || ja(e, t, n, !1), (a = 0 !== (n & e.childLanes)), Mi || a)) {
                    if (null !== (r = pc) && 0 !== (i = Re(r, n)) && i !== o.retryLane)
                      throw ((o.retryLane = i), Mr(e, i), Kc(r, 0, i), Ti);
                    (ou(), (t = Bi(e, t, n)));
                  } else
                    ((e = o.treeContext),
                      (ca = Md(i.nextSibling)),
                      (sa = t),
                      (ua = !0),
                      (da = null),
                      (fa = !1),
                      null !== e && ia(t, e),
                      ((t = $i(t, r)).flags |= 4096));
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
                za(t),
                (r = Ta(Aa)),
                null === e
                  ? (null === (a = Ka()) &&
                      ((a = pc),
                      (o = Fa()),
                      (a.pooledCache = o),
                      o.refCount++,
                      null !== o && (a.pooledCacheLanes |= n),
                      (a = o)),
                    (t.memoizedState = { parent: r, cache: a }),
                    go(t),
                    Ea(0, Aa, a))
                  : (0 !== (e.lanes & n) && (vo(e, t), Eo(t, null, null, n), So()),
                    (a = e.memoizedState),
                    (o = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a),
                        Ea(0, Aa, r))
                      : ((r = o.cache), Ea(0, Aa, r), r !== a.cache && _a(t, [Aa], n, !0))),
                Oi(e, t, t.pendingProps.children, n),
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
        function is(e, t, n, r, a) {
          if (((t = !!(32 & e.mode)) && (t = !1), t)) {
            if (((e.flags |= 16777216), (335544128 & a) === a))
              if (e.stateNode.complete) e.flags |= 8192;
              else {
                if (!nu()) throw ((ro = Ja), Xa);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function ss(e, t) {
          if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
          else if (((e.flags |= 16777216), !rf(t))) {
            if (!nu()) throw ((ro = Ja), Xa);
            e.flags |= 8192;
          }
        }
        function cs(e, t) {
          (null !== t && (e.flags |= 4),
            16384 & e.flags && ((t = 22 !== e.tag ? Pe() : 536870912), (e.lanes |= t), (_c |= t)));
        }
        function us(e, t) {
          if (!ua)
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
            for (var a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= 65011712 & a.subtreeFlags),
                (r |= 65011712 & a.flags),
                (a.return = e),
                (a = a.sibling));
          else
            for (a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function fs(e, t, n) {
          var r = t.pendingProps;
          switch ((la(t), t.tag)) {
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
                Ca(Aa),
                Q(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (va(t)
                    ? ls(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                      ((t.flags |= 1024), ba())),
                ds(t),
                null
              );
            case 26:
              var a = t.type,
                o = t.memoizedState;
              return (
                null === e
                  ? (ls(t), null !== o ? (ds(t), ss(t, o)) : (ds(t), is(t, a, 0, 0, n)))
                  : o
                    ? o !== e.memoizedState
                      ? (ls(t), ds(t), ss(t, o))
                      : (ds(t), (t.flags &= -16777217))
                    : ((e = e.memoizedProps) !== r && ls(t), ds(t), is(t, a, 0, 0, n)),
                null
              );
            case 27:
              if ((G(t), (n = V.current), (a = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (ds(t), null);
                }
                ((e = U.current), va(t) ? ha(t) : ((e = Dd(a, r, n)), (t.stateNode = e), ls(t)));
              }
              return (ds(t), null);
            case 5:
              if ((G(t), (a = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (ds(t), null);
                }
                if (((o = U.current), va(t))) ha(t);
                else {
                  var i = hd(V.current);
                  switch (o) {
                    case 1:
                      o = i.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case 2:
                      o = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                      break;
                    default:
                      switch (a) {
                        case "svg":
                          o = i.createElementNS("http://www.w3.org/2000/svg", a);
                          break;
                        case "math":
                          o = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                          break;
                        case "script":
                          (((o = i.createElement("div")).innerHTML = "<script><\/script>"),
                            (o = o.removeChild(o.firstChild)));
                          break;
                        case "select":
                          ((o =
                            "string" == typeof r.is
                              ? i.createElement("select", { is: r.is })
                              : i.createElement("select")),
                            r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size));
                          break;
                        default:
                          o =
                            "string" == typeof r.is
                              ? i.createElement(a, { is: r.is })
                              : i.createElement(a);
                      }
                  }
                  ((o[$e] = t), (o[Be] = r));
                  e: for (i = t.child; null !== i; ) {
                    if (5 === i.tag || 6 === i.tag) o.appendChild(i.stateNode);
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
                  t.stateNode = o;
                  e: switch ((dd(o, a, r), a)) {
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
                if (((e = V.current), va(t))) {
                  if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (a = sa)))
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  ((e[$e] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      sd(e.nodeValue, n)
                    )) || ma(t, !0));
                } else (((e = hd(e).createTextNode(r))[$e] = t), (t.stateNode = e));
              }
              return (ds(t), null);
            case 31:
              if (((n = t.memoizedState), null === e || null !== e.memoizedState)) {
                if (((r = va(t)), null !== n)) {
                  if (null === e) {
                    if (!r) throw Error(l(318));
                    if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null))
                      throw Error(l(557));
                    e[$e] = t;
                  } else (ya(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (ds(t), (e = !1));
                } else
                  ((n = ba()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n),
                    (e = !0));
                if (!e) return 256 & t.flags ? (Fo(t), t) : (Fo(t), null);
                if (128 & t.flags) throw Error(l(558));
              }
              return (ds(t), null);
            case 13:
              if (
                ((r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (((a = va(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(l(318));
                    if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                      throw Error(l(317));
                    a[$e] = t;
                  } else (ya(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (ds(t), (a = !1));
                } else
                  ((a = ba()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a),
                    (a = !0));
                if (!a) return 256 & t.flags ? (Fo(t), t) : (Fo(t), null);
              }
              return (
                Fo(t),
                128 & t.flags
                  ? ((t.lanes = n), t)
                  : ((n = null !== r),
                    (e = null !== e && null !== e.memoizedState),
                    n &&
                      ((a = null),
                      null !== (r = t.child).alternate &&
                        null !== r.alternate.memoizedState &&
                        null !== r.alternate.memoizedState.cachePool &&
                        (a = r.alternate.memoizedState.cachePool.pool),
                      (o = null),
                      null !== r.memoizedState &&
                        null !== r.memoizedState.cachePool &&
                        (o = r.memoizedState.cachePool.pool),
                      o !== a && (r.flags |= 2048)),
                    n !== e && n && (t.child.flags |= 8192),
                    cs(t, t.updateQueue),
                    ds(t),
                    null)
              );
            case 4:
              return (Q(), null === e && Zu(t.stateNode.containerInfo), ds(t), null);
            case 10:
              return (Ca(t.type), ds(t), null);
            case 19:
              if ((I(Io), null === (r = t.memoizedState))) return (ds(t), null);
              if (((a = !!(128 & t.flags)), null === (o = r.rendering)))
                if (a) us(r, !1);
                else {
                  if (0 !== kc || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = $o(e))) {
                        for (
                          t.flags |= 128,
                            us(r, !1),
                            e = o.updateQueue,
                            t.updateQueue = e,
                            cs(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;
                        )
                          ($r(n, e), (n = n.sibling));
                        return ($(Io, (1 & Io.current) | 2), ua && ra(t, r.treeForkCount), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    ie() > Oc &&
                    ((t.flags |= 128), (a = !0), us(r, !1), (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = $o(o))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      cs(t, e),
                      us(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !o.alternate && !ua)
                    )
                      return (ds(t), null);
                  } else
                    2 * ie() - r.renderingStartTime > Oc &&
                      536870912 !== n &&
                      ((t.flags |= 128), (a = !0), us(r, !1), (t.lanes = 4194304));
                r.isBackwards
                  ? ((o.sibling = t.child), (t.child = o))
                  : (null !== (e = r.last) ? (e.sibling = o) : (t.child = o), (r.last = o));
              }
              return null !== r.tail
                ? ((e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.renderingStartTime = ie()),
                  (e.sibling = null),
                  (n = Io.current),
                  $(Io, a ? (1 & n) | 2 : 1 & n),
                  ua && ra(t, r.treeForkCount),
                  e)
                : (ds(t), null);
            case 22:
            case 23:
              return (
                Fo(t),
                To(),
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
                null !== e && I(qa),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                Ca(Aa),
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
          switch ((la(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 3:
              return (
                Ca(Aa),
                Q(),
                65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 26:
            case 27:
            case 5:
              return (G(t), null);
            case 31:
              if (null !== t.memoizedState) {
                if ((Fo(t), null === t.alternate)) throw Error(l(340));
                ya();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 13:
              if ((Fo(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(l(340));
                ya();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return (I(Io), null);
            case 4:
              return (Q(), null);
            case 10:
              return (Ca(t.type), null);
            case 22:
            case 23:
              return (
                Fo(t),
                To(),
                null !== e && I(qa),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 24:
              return (Ca(Aa), null);
            default:
              return null;
          }
        }
        function ms(e, t) {
          switch ((la(t), t.tag)) {
            case 3:
              (Ca(Aa), Q());
              break;
            case 26:
            case 27:
            case 5:
              G(t);
              break;
            case 4:
              Q();
              break;
            case 31:
              null !== t.memoizedState && Fo(t);
              break;
            case 13:
              Fo(t);
              break;
            case 19:
              I(Io);
              break;
            case 10:
              Ca(t.type);
              break;
            case 22:
            case 23:
              (Fo(t), To(), null !== e && I(qa));
              break;
            case 24:
              Ca(Aa);
          }
        }
        function hs(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var o = n.create,
                    l = n.inst;
                  ((r = o()), (l.destroy = r));
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (e) {
            ku(t, t.return, e);
          }
        }
        function gs(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var o = a.next;
              r = o;
              do {
                if ((r.tag & e) === e) {
                  var l = r.inst,
                    i = l.destroy;
                  if (void 0 !== i) {
                    ((l.destroy = void 0), (a = t));
                    var s = n,
                      c = i;
                    try {
                      c();
                    } catch (e) {
                      ku(a, s, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== o);
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
              No(t, n);
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
        function ws(e, t) {
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
        function xs(e) {
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
                  var a = null,
                    o = null,
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
                          o = m;
                          break;
                        case "name":
                          a = m;
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
                  return void vt(e, i, s, c, u, d, o, a);
                case "select":
                  for (o in ((m = i = s = p = null), n))
                    if (((c = n[o]), n.hasOwnProperty(o) && null != c))
                      switch (o) {
                        case "value":
                          break;
                        case "multiple":
                          m = c;
                        default:
                          r.hasOwnProperty(o) || cd(e, t, o, null, r, c);
                      }
                  for (a in r)
                    if (((o = r[a]), (c = n[a]), r.hasOwnProperty(a) && (null != o || null != c)))
                      switch (a) {
                        case "value":
                          p = o;
                          break;
                        case "defaultValue":
                          s = o;
                          break;
                        case "multiple":
                          i = o;
                        default:
                          o !== c && cd(e, t, a, o, r, c);
                      }
                  return (
                    (t = s),
                    (n = i),
                    (r = m),
                    void (null != p
                      ? wt(e, !!n, p, !1)
                      : !!r != !!n && (null != t ? wt(e, !!n, t, !0) : wt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (s in ((m = p = null), n))
                    if (((a = n[s]), n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s)))
                      switch (s) {
                        case "value":
                        case "children":
                          break;
                        default:
                          cd(e, t, s, null, r, a);
                      }
                  for (i in r)
                    if (((a = r[i]), (o = n[i]), r.hasOwnProperty(i) && (null != a || null != o)))
                      switch (i) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          m = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(l(91));
                          break;
                        default:
                          a !== o && cd(e, t, i, a, r, o);
                      }
                  return void xt(e, p, m);
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
                  if (_t(t)) {
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
              (r[Be] = t));
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
        function _s(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
            (dd(t, r, n), (t[$e] = e), (t[Be] = n));
          } catch (t) {
            ku(e, e.return, t);
          }
        }
        var js = !1,
          Ps = !1,
          zs = !1,
          Ts = "function" == typeof WeakSet ? WeakSet : Set,
          Ms = null;
        function Os(e, t, n) {
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
                  var a = ki(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
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
                  No(e, t);
                } catch (e) {
                  ku(n, n.return, e);
                }
              }
              break;
            case 27:
              null === t && 4 & r && _s(n);
            case 26:
            case 5:
              (Ks(e, n), null === t && 4 & r && xs(n), 512 & r && bs(n, n.return));
              break;
            case 12:
              Ks(e, n);
              break;
            case 31:
              (Ks(e, n), 4 & r && Is(e, n));
              break;
            case 13:
              (Ks(e, n),
                4 & r && $s(e, n),
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
              if (!(r = null !== n.memoizedState || js)) {
                ((t = (null !== t && null !== t.memoizedState) || Ps), (a = js));
                var o = Ps;
                ((js = r),
                  (Ps = t) && !o ? Ys(e, n, !!(8772 & n.subtreeFlags)) : Ks(e, n),
                  (js = a),
                  (Ps = o));
              }
              break;
            case 30:
              break;
            default:
              Ks(e, n);
          }
        }
        function Rs(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), Rs(t)),
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
              (Ps || ws(n, t),
                As(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              Ps || ws(n, t);
              var r = Ls,
                a = Ds;
              (Cd(n.type) && ((Ls = n.stateNode), (Ds = !1)),
                As(e, t, n),
                Ad(n.stateNode),
                (Ls = r),
                (Ds = a));
              break;
            case 5:
              Ps || ws(n, t);
            case 6:
              if (((r = Ls), (a = Ds), (Ls = null), As(e, t, n), (Ds = a), null !== (Ls = r)))
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
                    Hf(e))
                  : Nd(Ls, n.stateNode));
              break;
            case 4:
              ((r = Ls),
                (a = Ds),
                (Ls = n.stateNode.containerInfo),
                (Ds = !0),
                As(e, t, n),
                (Ls = r),
                (Ds = a));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (gs(2, n, t), Ps || gs(4, n, t), As(e, t, n));
              break;
            case 1:
              (Ps ||
                (ws(n, t),
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
              Hf(e);
            } catch (e) {
              ku(t, t.return, e);
            }
          }
        }
        function $s(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              Hf(e);
            } catch (e) {
              ku(t, t.return, e);
            }
        }
        function Bs(e, t) {
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
              var r = _u.bind(null, e, t);
              t.then(r, r);
            }
          });
        }
        function Hs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                o = e,
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
              (Fs(o, i, a),
                (Ls = null),
                (Ds = !1),
                null !== (o = a.alternate) && (o.return = null),
                (a.return = null));
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
              (Hs(t, e), Vs(e), 4 & r && (gs(3, e, e.return), hs(3, e), gs(5, e, e.return)));
              break;
            case 1:
              (Hs(t, e),
                Vs(e),
                512 & r && (Ps || null === n || ws(n, n.return)),
                64 & r &&
                  js &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var a = Us;
              if ((Hs(t, e), Vs(e), 512 & r && (Ps || null === n || ws(n, n.return)), 4 & r)) {
                var o = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                        t: switch (r) {
                          case "title":
                            ((!(o = a.getElementsByTagName("title")[0]) ||
                              o[Ke] ||
                              o[$e] ||
                              "http://www.w3.org/2000/svg" === o.namespaceURI ||
                              o.hasAttribute("itemprop")) &&
                              ((o = a.createElement(r)),
                              a.head.insertBefore(o, a.querySelector("head > title"))),
                              dd(o, r, n),
                              (o[$e] = e),
                              Je(o),
                              (r = o));
                            break e;
                          case "link":
                            var i = tf("link", "href", a).get(r + (n.href || ""));
                            if (i)
                              for (var s = 0; s < i.length; s++)
                                if (
                                  (o = i[s]).getAttribute("href") ===
                                    (null == n.href || "" === n.href ? null : n.href) &&
                                  o.getAttribute("rel") === (null == n.rel ? null : n.rel) &&
                                  o.getAttribute("title") === (null == n.title ? null : n.title) &&
                                  o.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin ? null : n.crossOrigin)
                                ) {
                                  i.splice(s, 1);
                                  break t;
                                }
                            (dd((o = a.createElement(r)), r, n), a.head.appendChild(o));
                            break;
                          case "meta":
                            if ((i = tf("meta", "content", a).get(r + (n.content || ""))))
                              for (s = 0; s < i.length; s++)
                                if (
                                  (o = i[s]).getAttribute("content") ===
                                    (null == n.content ? null : "" + n.content) &&
                                  o.getAttribute("name") === (null == n.name ? null : n.name) &&
                                  o.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  o.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv ? null : n.httpEquiv) &&
                                  o.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  i.splice(s, 1);
                                  break t;
                                }
                            (dd((o = a.createElement(r)), r, n), a.head.appendChild(o));
                            break;
                          default:
                            throw Error(l(468, r));
                        }
                        ((o[$e] = e), Je(o), (r = o));
                      }
                      e.stateNode = r;
                    } else nf(a, e.type, e.stateNode);
                  else e.stateNode = Gd(a, r, e.memoizedProps);
                else
                  o !== r
                    ? (null === o
                        ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n)
                        : o.count--,
                      null === r ? nf(a, e.type, e.stateNode) : Gd(a, r, e.memoizedProps))
                    : null === r && null !== e.stateNode && ks(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (Hs(t, e),
                Vs(e),
                512 & r && (Ps || null === n || ws(n, n.return)),
                null !== n && 4 & r && ks(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if (
                (Hs(t, e), Vs(e), 512 & r && (Ps || null === n || ws(n, n.return)), 32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  St(a, "");
                } catch (t) {
                  ku(e, e.return, t);
                }
              }
              (4 & r &&
                null != e.stateNode &&
                ks(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (zs = !0));
              break;
            case 6:
              if ((Hs(t, e), Vs(e), 4 & r)) {
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
                (a = Us),
                (Us = $d(t.containerInfo)),
                Hs(t, e),
                (Us = a),
                Vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Hf(t.containerInfo);
                } catch (t) {
                  ku(e, e.return, t);
                }
              zs && ((zs = !1), qs(e));
              break;
            case 4:
              ((r = Us), (Us = $d(e.stateNode.containerInfo)), Hs(t, e), Vs(e), (Us = r));
              break;
            case 12:
            default:
              (Hs(t, e), Vs(e));
              break;
            case 31:
            case 19:
              (Hs(t, e),
                Vs(e),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Bs(e, r)));
              break;
            case 13:
              (Hs(t, e),
                Vs(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                  (Tc = ie()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Bs(e, r)));
              break;
            case 22:
              a = null !== e.memoizedState;
              var c = null !== n && null !== n.memoizedState,
                u = js,
                d = Ps;
              if (((js = u || a), (Ps = d || c), Hs(t, e), (Ps = d), (js = u), Vs(e), 8192 & r))
                e: for (
                  t = e.stateNode,
                    t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                    a && (null === n || c || js || Ps || Qs(e)),
                    n = null,
                    t = e;
                  ;
                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((o = c.stateNode), a))
                          "function" == typeof (i = o.style).setProperty
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
                        c.stateNode.nodeValue = a ? "" : c.memoizedProps;
                      } catch (e) {
                        ku(c, c.return, e);
                      }
                    }
                  } else if (18 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        var m = c.stateNode;
                        a ? _d(m, !0) : _d(c.stateNode, !1);
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
                ((r.retryQueue = null), Bs(e, n));
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
                  var a = n.stateNode;
                  Ns(e, Es(e), a);
                  break;
                case 5:
                  var o = n.stateNode;
                  (32 & n.flags && (St(o, ""), (n.flags &= -33)), Ns(e, Es(e), o));
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
            for (t = t.child; null !== t; ) (Os(e, t.alternate, t), (t = t.sibling));
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
                ws(t, t.return);
                var n = t.stateNode;
                ("function" == typeof n.componentWillUnmount && ys(t, t.return, n), Qs(t));
                break;
              case 27:
                Ad(t.stateNode);
              case 26:
              case 5:
                (ws(t, t.return), Qs(t));
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
        function Ys(e, t, n) {
          for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
              a = e,
              o = t,
              l = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                (Ys(a, o, n), hs(4, o));
                break;
              case 1:
                if ((Ys(a, o, n), "function" == typeof (a = (r = o).stateNode).componentDidMount))
                  try {
                    a.componentDidMount();
                  } catch (e) {
                    ku(r, r.return, e);
                  }
                if (null !== (a = (r = o).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var s = a.shared.hiddenCallbacks;
                    if (null !== s)
                      for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) Co(s[a], i);
                  } catch (e) {
                    ku(r, r.return, e);
                  }
                }
                (n && 64 & l && vs(o), bs(o, o.return));
                break;
              case 27:
                _s(o);
              case 26:
              case 5:
                (Ys(a, o, n), n && null === r && 4 & l && xs(o), bs(o, o.return));
                break;
              case 12:
                Ys(a, o, n);
                break;
              case 31:
                (Ys(a, o, n), n && 4 & l && Is(a, o));
                break;
              case 13:
                (Ys(a, o, n), n && 4 & l && $s(a, o));
                break;
              case 22:
                (null === o.memoizedState && Ys(a, o, n), bs(o, o.return));
                break;
              case 30:
                break;
              default:
                Ys(a, o, n);
            }
            t = t.sibling;
          }
        }
        function Gs(e, t) {
          var n = null;
          (null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ia(n)));
        }
        function Xs(e, t) {
          ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ia(e)));
        }
        function Zs(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (Js(e, t, n, r), (t = t.sibling));
        }
        function Js(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (Zs(e, t, n, r), 2048 & a && hs(9, t));
              break;
            case 1:
            case 31:
            case 13:
            default:
              Zs(e, t, n, r);
              break;
            case 3:
              (Zs(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ia(e))));
              break;
            case 12:
              if (2048 & a) {
                (Zs(e, t, n, r), (e = t.stateNode));
                try {
                  var o = t.memoizedProps,
                    l = o.id,
                    i = o.onPostCommit;
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
              ((o = t.stateNode),
                (l = t.alternate),
                null !== t.memoizedState
                  ? 2 & o._visibility
                    ? Zs(e, t, n, r)
                    : tc(e, t)
                  : 2 & o._visibility
                    ? Zs(e, t, n, r)
                    : ((o._visibility |= 2), ec(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
                2048 & a && Gs(l, t));
              break;
            case 24:
              (Zs(e, t, n, r), 2048 & a && Xs(t.alternate, t));
          }
        }
        function ec(e, t, n, r, a) {
          for (a = a && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t; ) {
            var o = e,
              l = t,
              i = n,
              s = r,
              c = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                (ec(o, l, i, s, a), hs(8, l));
                break;
              case 23:
                break;
              case 22:
                var u = l.stateNode;
                (null !== l.memoizedState
                  ? 2 & u._visibility
                    ? ec(o, l, i, s, a)
                    : tc(o, l)
                  : ((u._visibility |= 2), ec(o, l, i, s, a)),
                  a && 2048 & c && Gs(l.alternate, l));
                break;
              case 24:
                (ec(o, l, i, s, a), a && 2048 & c && Xs(l.alternate, l));
                break;
              default:
                ec(o, l, i, s, a);
            }
            t = t.sibling;
          }
        }
        function tc(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  (tc(n, r), 2048 & a && Gs(r.alternate, r));
                  break;
                case 24:
                  (tc(n, r), 2048 & a && Xs(r.alternate, r));
                  break;
                default:
                  tc(n, r);
              }
              t = t.sibling;
            }
        }
        var nc = 8192;
        function rc(e, t, n) {
          if (e.subtreeFlags & nc) for (e = e.child; null !== e; ) (ac(e, t, n), (e = e.sibling));
        }
        function ac(e, t, n) {
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
                        var a = Vd(r.href),
                          o = t.querySelector(qd(a));
                        if (o)
                          return (
                            null !== (t = o._p) &&
                              "object" == typeof t &&
                              "function" == typeof t.then &&
                              (e.count++, (e = of.bind(e)), t.then(e, e)),
                            (n.state.loading |= 4),
                            (n.instance = o),
                            void Je(o)
                          );
                        ((o = t.ownerDocument || t),
                          (r = Kd(r)),
                          (a = Fd.get(a)) && Zd(r, a),
                          Je((o = o.createElement("link"))));
                        var l = o;
                        ((l._p = new Promise(function (e, t) {
                          ((l.onload = e), (l.onerror = t));
                        })),
                          dd(o, "link", r),
                          (n.instance = o));
                      }
                      (null === e.stylesheets && (e.stylesheets = new Map()),
                        e.stylesheets.set(n, t),
                        (t = n.state.preload) &&
                          !(3 & n.state.loading) &&
                          (e.count++,
                          (n = of.bind(e)),
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
              ((Us = $d(e.stateNode.containerInfo)), rc(e, t, n), (Us = r));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = nc), (nc = 16777216), rc(e, t, n), (nc = r))
                  : rc(e, t, n));
          }
        }
        function oc(e) {
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
            oc(e);
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
            oc(e);
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
                Ia(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Ms = r));
            else
              e: for (n = e; null !== Ms; ) {
                var a = (r = Ms).sibling,
                  o = r.return;
                if ((Rs(r), r === n)) {
                  Ms = null;
                  break e;
                }
                if (null !== a) {
                  ((a.return = o), (Ms = a));
                  break e;
                }
                Ms = o;
              }
          }
        }
        var uc = {
            getCacheForType: function (e) {
              var t = Ta(Aa),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
              return Ta(Aa).controller.signal;
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
          wc = !1,
          xc = 0,
          kc = 0,
          Sc = 0,
          Ec = 0,
          Cc = 0,
          Nc = 0,
          _c = 0,
          jc = null,
          Pc = null,
          zc = !1,
          Tc = 0,
          Mc = 0,
          Oc = 1 / 0,
          Rc = null,
          Lc = null,
          Dc = 0,
          Ac = null,
          Fc = null,
          Ic = 0,
          $c = 0,
          Bc = null,
          Hc = null,
          Uc = 0,
          Wc = null;
        function Vc() {
          return 2 & fc && 0 !== hc ? hc & -hc : null !== O.T ? Bu() : Ae();
        }
        function qc() {
          if (0 === Nc)
            if (536870912 & hc && !ua) Nc = 536870912;
            else {
              var e = Se;
              (!(3932160 & (Se <<= 1)) && (Se = 262144), (Nc = e));
            }
          return (null !== (e = Mo.current) && (e.flags |= 32), Nc);
        }
        function Kc(e, t, n) {
          (((e !== pc || (2 !== gc && 9 !== gc)) && null === e.cancelPendingCommit) ||
            (eu(e, 0), Xc(e, hc, Nc, !1)),
            Te(e, n),
            (2 & fc && e === pc) ||
              (e === pc && (!(2 & fc) && (Ec |= n), 4 === kc && Xc(e, hc, Nc, !1)), Ru(e)));
        }
        function Qc(e, t, n) {
          if (6 & fc) throw Error(l(327));
          for (
            var r = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || _e(e, t),
              a = r
                ? (function (e, t) {
                    var n = fc;
                    fc |= 2;
                    var r = ru(),
                      a = au();
                    pc !== e || hc !== t
                      ? ((Rc = null), (Oc = ie() + 500), eu(e, t))
                      : (bc = _e(e, t));
                    e: for (;;)
                      try {
                        if (0 !== gc && null !== mc) {
                          t = mc;
                          var o = vc;
                          t: switch (gc) {
                            case 1:
                              ((gc = 0), (vc = null), du(e, t, o, 1));
                              break;
                            case 2:
                            case 9:
                              if (eo(o)) {
                                ((gc = 0), (vc = null), uu(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== gc && 9 !== gc) || pc !== e || (gc = 7), Ru(e));
                              }),
                                o.then(t, t));
                              break e;
                            case 3:
                              gc = 7;
                              break e;
                            case 4:
                              gc = 5;
                              break e;
                            case 7:
                              eo(o)
                                ? ((gc = 0), (vc = null), uu(t))
                                : ((gc = 0), (vc = null), du(e, t, o, 7));
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
                              ((gc = 0), (vc = null), du(e, t, o, 5));
                              break;
                            case 6:
                              ((gc = 0), (vc = null), du(e, t, o, 6));
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
                      (Sa = ka = null),
                      (O.H = r),
                      (O.A = a),
                      (fc = n),
                      null !== mc ? 0 : ((pc = null), (hc = 0), Pr(), kc)
                    );
                  })(e, t)
                : lu(e, t, !0),
              o = r;
            ;
          ) {
            if (0 === a) {
              bc && !r && Xc(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !o || Gc(n))) {
              if (2 === a) {
                if (((o = t), e.errorRecoveryDisabledLanes & o)) var i = 0;
                else i = 0 != (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var s = e;
                    a = jc;
                    var c = s.current.memoizedState.isDehydrated;
                    if ((c && (eu(s, i).flags |= 256), 2 !== (i = lu(s, i, !1)))) {
                      if (wc && !c) {
                        ((s.errorRecoveryDisabledLanes |= o), (Ec |= o), (a = 4));
                        break e;
                      }
                      ((o = Pc),
                        (Pc = a),
                        null !== o && (null === Pc ? (Pc = o) : Pc.push.apply(Pc, o)));
                    }
                    a = i;
                  }
                  if (((o = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                (eu(e, 0), Xc(e, t, 0, !0));
                break;
              }
              e: {
                switch (((r = e), (o = a))) {
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
                if ((62914560 & t) === t && 10 < (a = Tc + 300 - ie())) {
                  if ((Xc(r, t, Nc, !yc), 0 !== Ne(r, 0, !0))) break e;
                  ((Ic = t),
                    (r.timeoutHandle = wd(
                      Yc.bind(null, r, n, Pc, Rc, zc, t, Nc, Ec, _c, yc, o, "Throttled", -0, 0),
                      a,
                    )));
                } else Yc(r, n, Pc, Rc, zc, t, Nc, Ec, _c, yc, o, null, -0, 0);
              }
              break;
            }
            ((a = lu(e, t, !1)), (o = !1));
          }
          Ru(e);
        }
        function Yc(e, t, n, r, a, o, l, i, s, c, u, d, f, p) {
          if (((e.timeoutHandle = -1), 8192 & (d = t.subtreeFlags) || !(16785408 & ~d))) {
            ac(
              t,
              o,
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
            var m = (62914560 & o) === o ? Tc - ie() : (4194048 & o) === o ? Mc - ie() : 0;
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
                          0 === af &&
                          (af =
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
                                  var a = n[r],
                                    o = a.transferSize,
                                    l = a.initiatorType,
                                    i = a.duration;
                                  if (o && i && fd(l)) {
                                    for (l = 0, i = a.responseEnd, r += 1; r < n.length; r++) {
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
                                    if ((--r, (t += (8 * (o + l)) / (a.duration / 1e3)), 10 < ++e))
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
                        var a = setTimeout(
                          function () {
                            if (
                              ((e.waitingForImages = !1),
                              0 === e.count && (e.stylesheets && sf(e, e.stylesheets), e.unsuspend))
                            ) {
                              var t = e.unsuspend;
                              ((e.unsuspend = null), t());
                            }
                          },
                          (e.imgBytes > af ? 50 : 800) + t,
                        );
                        return (
                          (e.unsuspend = n),
                          function () {
                            ((e.unsuspend = null), clearTimeout(r), clearTimeout(a));
                          }
                        );
                      }
                    : null
                );
              })(d, m))
            )
              return (
                (Ic = o),
                (e.cancelPendingCommit = m(
                  mu.bind(null, e, t, o, n, r, a, l, i, s, u, d, null, f, p),
                )),
                void Xc(e, o, l, !c)
              );
          }
          mu(e, t, o, n, r, a, l, i, s);
        }
        function Gc(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  o = a.getSnapshot;
                a = a.value;
                try {
                  if (!Xn(o(), a)) return !1;
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
          for (var a = t; 0 < a; ) {
            var o = 31 - be(a),
              l = 1 << o;
            ((r[o] = -1), (a &= ~l));
          }
          0 !== n && Me(e, n, t);
        }
        function Zc() {
          return !!(6 & fc) || (Lu(0, !1), !1);
        }
        function Jc() {
          if (null !== mc) {
            if (0 === gc) var e = mc.return;
            else ((Sa = ka = null), ll((e = mc)), (lo = null), (io = 0), (e = mc));
            for (; null !== e; ) (ms(e.alternate, e), (e = e.return));
            mc = null;
          }
        }
        function eu(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), xd(n)),
            null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
            (Ic = 0),
            Jc(),
            (pc = e),
            (mc = n = Ir(e.current, null)),
            (hc = t),
            (gc = 0),
            (vc = null),
            (yc = !1),
            (bc = _e(e, t)),
            (wc = !1),
            (_c = Nc = Cc = Ec = Sc = kc = 0),
            (Pc = jc = null),
            (zc = !1),
            8 & t && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - be(r),
                o = 1 << a;
              ((t |= e[a]), (r &= ~o));
            }
          return ((xc = t), Pr(), n);
        }
        function tu(e, t) {
          ((Ho = null),
            (O.H = mi),
            t === Ga || t === Za
              ? ((t = ao()), (gc = 3))
              : t === Xa
                ? ((t = ao()), (gc = 4))
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
          var e = Mo.current;
          return (
            null === e ||
            ((4194048 & hc) === hc
              ? null === Oo
              : !!((62914560 & hc) === hc || 536870912 & hc) && e === Oo)
          );
        }
        function ru() {
          var e = O.H;
          return ((O.H = mi), null === e ? mi : e);
        }
        function au() {
          var e = O.A;
          return ((O.A = uc), e);
        }
        function ou() {
          ((kc = 4),
            yc || ((4194048 & hc) !== hc && null !== Mo.current) || (bc = !0),
            (!(134217727 & Sc) && !(134217727 & Ec)) || null === pc || Xc(pc, hc, Nc, !1));
        }
        function lu(e, t, n) {
          var r = fc;
          fc |= 2;
          var a = ru(),
            o = au();
          ((pc === e && hc === t) || ((Rc = null), eu(e, t)), (t = !1));
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
                    null === Mo.current && (t = !0);
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
            (Sa = ka = null),
            (fc = r),
            (O.H = a),
            (O.A = o),
            null === mc && ((pc = null), (hc = 0), Pr()),
            l
          );
        }
        function iu() {
          for (; null !== mc; ) cu(mc);
        }
        function su() {
          for (; null !== mc && !oe(); ) cu(mc);
        }
        function cu(e) {
          var t = os(e.alternate, e, xc);
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
              (ms(n, t), (t = os(n, (t = mc = $r(t, xc)), xc)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? fu(e) : (mc = t));
        }
        function du(e, t, n, r) {
          ((Sa = ka = null), ll(t), (lo = null), (io = 0));
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r && "object" == typeof r && "function" == typeof r.then)
                ) {
                  if ((null !== (t = n.alternate) && ja(t, n, a, !0), null !== (n = Mo.current))) {
                    switch (n.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Oo ? ou() : null === n.alternate && 0 === kc && (kc = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === Ja
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              Su(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === Ja
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
                              Su(e, r, a)),
                          !1
                        );
                    }
                    throw Error(l(435, n.tag));
                  }
                  return (Su(e, r, a), ou(), !1);
                }
                if (ua)
                  return (
                    null !== (t = Mo.current)
                      ? (!(65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== pa && wa(Kr((e = Error(l(422), { cause: r })), n)))
                      : (r !== pa && wa(Kr((t = Error(l(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = Kr(r, n)),
                        xo(e, (a = ji(e.stateNode, r, a))),
                        4 !== kc && (kc = 2)),
                    !1
                  );
                var o = Error(l(520), { cause: r });
                if (
                  ((o = Kr(o, n)),
                  null === jc ? (jc = [o]) : jc.push(o),
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
                        (e = a & -a),
                        (n.lanes |= e),
                        xo(n, (e = ji(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (o = n.stateNode),
                        !(
                          128 & n.flags ||
                          ("function" != typeof t.getDerivedStateFromError &&
                            (null === o ||
                              "function" != typeof o.componentDidCatch ||
                              (null !== Lc && Lc.has(o))))
                        ))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          zi((a = Pi(a)), e, n, r),
                          xo(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, hc)
            )
              return ((kc = 1), Ni(e, Kr(n, e.current)), void (mc = null));
          } catch (t) {
            if (null !== a) throw ((mc = a), t);
            return ((kc = 1), Ni(e, Kr(n, e.current)), void (mc = null));
          }
          32768 & t.flags
            ? (ua || 1 === r
                ? (e = !0)
                : bc || 536870912 & hc
                  ? (e = !1)
                  : ((yc = e = !0),
                    (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = Mo.current) &&
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
            var n = fs(t.alternate, t, xc);
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
        function mu(e, t, n, r, a, o, i, s, c) {
          e.cancelPendingCommit = null;
          do {
            bu();
          } while (0 !== Dc);
          if (6 & fc) throw Error(l(327));
          if (null !== t) {
            if (t === e.current) throw Error(l(177));
            if (
              ((o = t.lanes | t.childLanes),
              (function (e, t, n, r, a, o) {
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
                  0 !== o && 0 === a && 0 !== e.tag && (e.suspendedLanes |= o & ~(l & ~t)));
              })(e, n, (o |= jr), i, s, c),
              e === pc && ((mc = pc = null), (hc = 0)),
              (Fc = t),
              (Ac = e),
              (Ic = n),
              ($c = o),
              (Bc = a),
              (Hc = r),
              10256 & t.subtreeFlags || 10256 & t.flags
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  re(de, function () {
                    return (wu(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = !!(13878 & t.flags)),
              13878 & t.subtreeFlags || r)
            ) {
              ((r = O.T), (O.T = null), (a = R.p), (R.p = 2), (i = fc), (fc |= 4));
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
                          var a = r.anchorOffset,
                            o = r.focusNode;
                          r = r.focusOffset;
                          try {
                            (n.nodeType, o.nodeType);
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
                              f !== n || (0 !== a && 3 !== f.nodeType) || (s = i + a),
                                f !== o || (0 !== r && 3 !== f.nodeType) || (c = i + r),
                                3 === f.nodeType && (i += f.nodeValue.length),
                                null !== (m = f.firstChild);
                            )
                              ((p = f), (f = m));
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (p === n && ++u === a && (s = i),
                                p === o && ++d === r && (c = i),
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
                        switch (((o = (t = Ms).alternate), (e = t.flags), t.tag)) {
                          case 0:
                            if (
                              4 & e &&
                              null !== (e = null !== (e = t.updateQueue) ? e.events : null)
                            )
                              for (n = 0; n < e.length; n++) (a = e[n]).ref.impl = a.nextImpl;
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
                            if (1024 & e && null !== o) {
                              ((e = void 0),
                                (n = t),
                                (a = o.memoizedProps),
                                (o = o.memoizedState),
                                (r = n.stateNode));
                              try {
                                var h = ki(n.type, a);
                                ((e = r.getSnapshotBeforeUpdate(h, o)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (e) {
                                ku(n, n.return, e);
                              }
                            }
                            break;
                          case 3:
                            if (1024 & e)
                              if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) jd(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    jd(e);
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
                ((fc = i), (R.p = a), (O.T = r));
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
              ((n = O.T), (O.T = null));
              var r = R.p;
              R.p = 2;
              var a = fc;
              fc |= 4;
              try {
                Ws(t, e);
                var o = md,
                  l = nr(e.containerInfo),
                  i = o.focusedElem,
                  s = o.selectionRange;
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
                    var w = d[i];
                    ((w.element.scrollLeft = w.left), (w.element.scrollTop = w.top));
                  }
                }
                ((vf = !!pd), (md = pd = null));
              } finally {
                ((fc = a), (R.p = r), (O.T = n));
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
              ((n = O.T), (O.T = null));
              var r = R.p;
              R.p = 2;
              var a = fc;
              fc |= 4;
              try {
                Os(e, t.alternate, t);
              } finally {
                ((fc = a), (R.p = r), (O.T = n));
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
              r = Hc;
            10256 & t.subtreeFlags || 10256 & t.flags
              ? (Dc = 5)
              : ((Dc = 0), (Fc = Ac = null), yu(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (
              (0 === a && (Lc = null),
              De(n),
              (t = t.stateNode),
              ve && "function" == typeof ve.onCommitFiberRoot)
            )
              try {
                ve.onCommitFiberRoot(ge, t, void 0, !(128 & ~t.current.flags));
              } catch (e) {}
            if (null !== r) {
              ((t = O.T), (a = R.p), (R.p = 2), (O.T = null));
              try {
                for (var o = e.onRecoverableError, l = 0; l < r.length; l++) {
                  var i = r[l];
                  o(i.value, { componentStack: i.stack });
                }
              } finally {
                ((O.T = t), (R.p = a));
              }
            }
            (3 & Ic && bu(),
              Ru(e),
              (a = e.pendingLanes),
              261930 & n && 42 & a ? (e === Wc ? Uc++ : ((Uc = 0), (Wc = e))) : (Uc = 0),
              Lu(0, !1));
          }
        }
        function yu(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ia(t));
        }
        function bu() {
          return (hu(), gu(), vu(), wu());
        }
        function wu() {
          if (5 !== Dc) return !1;
          var e = Ac,
            t = $c;
          $c = 0;
          var n = De(Ic),
            r = O.T,
            a = R.p;
          try {
            ((R.p = 32 > n ? 32 : n), (O.T = null), (n = Bc), (Bc = null));
            var o = Ac,
              i = Ic;
            if (((Dc = 0), (Fc = Ac = null), (Ic = 0), 6 & fc)) throw Error(l(331));
            var s = fc;
            if (
              ((fc |= 4),
              ic(o.current),
              Js(o, o.current, i, n),
              (fc = s),
              Lu(0, !1),
              ve && "function" == typeof ve.onPostCommitFiberRoot)
            )
              try {
                ve.onPostCommitFiberRoot(ge, o);
              } catch (e) {}
            return !0;
          } finally {
            ((R.p = a), (O.T = r), yu(e, t));
          }
        }
        function xu(e, t, n) {
          ((t = Kr(n, t)),
            null !== (e = bo(e, (t = ji(e.stateNode, t, 2)), 2)) && (Te(e, 2), Ru(e)));
        }
        function ku(e, t, n) {
          if (3 === e.tag) xu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch && (null === Lc || !Lc.has(r)))
                ) {
                  ((e = Kr(n, e)),
                    null !== (r = bo(t, (n = Pi(2)), 2)) && (zi(n, r, t, e), Te(r, 2), Ru(r)));
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
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || ((wc = !0), a.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
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
              _c === hc && (_c = 0)),
            Ru(e));
        }
        function Cu(e, t) {
          (0 === t && (t = Pe()), null !== (e = Mr(e, t)) && (Te(e, t), Ru(e)));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), Cu(e, n));
        }
        function _u(e, t) {
          var n = 0;
          switch (e.tag) {
            case 31:
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
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
        var ju = null,
          Pu = null,
          zu = !1,
          Tu = !1,
          Mu = !1,
          Ou = 0;
        function Ru(e) {
          (e !== Pu && null === e.next && (null === Pu ? (ju = Pu = e) : (Pu = Pu.next = e)),
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
              for (var n = !1, r = ju; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var o = 0;
                    else {
                      var l = r.suspendedLanes,
                        i = r.pingedLanes;
                      ((o = (1 << (31 - be(42 | e) + 1)) - 1),
                        (o =
                          201326741 & (o &= a & ~(l & ~i)) ? (201326741 & o) | 1 : o ? 2 | o : 0));
                    }
                    0 !== o && ((n = !0), $u(r, o));
                  } else
                    ((o = hc),
                      !(
                        3 &
                        (o = Ne(
                          r,
                          r === pc ? o : 0,
                          null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                        ))
                      ) ||
                        _e(r, o) ||
                        ((n = !0), $u(r, o)));
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
          0 !== Ou &&
            ((e = window.event) && "popstate" === e.type
              ? e !== bd && ((bd = e), 1)
              : ((bd = null), 0)) &&
            (t = Ou);
          for (var n = ie(), r = null, a = ju; null !== a; ) {
            var o = a.next,
              l = Fu(a, n);
            (0 === l
              ? ((a.next = null), null === r ? (ju = o) : (r.next = o), null === o && (Pu = r))
              : ((r = a), (0 !== t || 3 & l) && (Tu = !0)),
              (a = o));
          }
          ((0 !== Dc && 5 !== Dc) || Lu(t, !1), 0 !== Ou && (Ou = 0));
        }
        function Fu(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              o = -62914561 & e.pendingLanes;
            0 < o;
          ) {
            var l = 31 - be(o),
              i = 1 << l,
              s = a[l];
            (-1 === s
              ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = je(i, t))
              : s <= t && (e.expiredLanes |= i),
              (o &= ~i));
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
              null !== r && null !== r && ae(r), (e.callbackNode = null), (e.callbackPriority = 0)
            );
          if (!(3 & n) || _e(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && ae(r), De(n))) {
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
            null !== r && null !== r && ae(r), (e.callbackPriority = 2), (e.callbackNode = null), 2
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
        function $u(e, t) {
          if (bu()) return null;
          Qc(e, t, !0);
        }
        function Bu() {
          if (0 === Ou) {
            var e = Ha;
            (0 === e && ((e = ke), !(261888 & (ke <<= 1)) && (ke = 256)), (Ou = e));
          }
          return Ou;
        }
        function Hu(e) {
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
          Er(wr, "onTransitionCancel"),
          Er(xr, "onTransitionEnd"),
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
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    s = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), s !== o && a.isPropagationStopped())) break e;
                  ((o = i), (a.currentTarget = c));
                  try {
                    o(a);
                  } catch (e) {
                    Cr(e);
                  }
                  ((a.currentTarget = null), (o = s));
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  ((o = i), (a.currentTarget = c));
                  try {
                    o(a);
                  } catch (e) {
                    Cr(e);
                  }
                  ((a.currentTarget = null), (o = s));
                }
            }
          }
        }
        function Yu(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ju(t, e, 2, !1), n.add(r));
        }
        function Gu(e, t, n) {
          var r = 0;
          (t && (r |= 4), Ju(n, e, r, t));
        }
        var Xu = "_reactListening" + Math.random().toString(36).slice(2);
        function Zu(e) {
          if (!e[Xu]) {
            ((e[Xu] = !0),
              et.forEach(function (t) {
                "selectionchange" !== t && (Ku.has(t) || Gu(t, !1, e), Gu(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Xu] || ((t[Xu] = !0), Gu("selectionchange", !1, t));
          }
        }
        function Ju(e, t, n, r) {
          switch (Ef(t)) {
            case 2:
              var a = yf;
              break;
            case 8:
              a = bf;
              break;
            default:
              a = wf;
          }
          ((n = a.bind(null, t, n, e)),
            (a = void 0),
            !Bt || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1));
        }
        function ed(e, t, n, r, a) {
          var o = r;
          if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var s = r.stateNode.containerInfo;
                if (s === a) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var c = l.tag;
                    if ((3 === c || 4 === c) && l.stateNode.containerInfo === a) return;
                    l = l.return;
                  }
                for (; null !== s; ) {
                  if (null === (l = Ye(s))) return;
                  if (5 === (c = l.tag) || 6 === c || 26 === c || 27 === c) {
                    r = o = l;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Ft(function () {
            var r = o,
              a = Ot(n),
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
                    c = on;
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
                  case xr:
                    c = wn;
                    break;
                  case "scroll":
                  case "scrollend":
                    c = rn;
                    break;
                  case "wheel":
                    c = xn;
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
                0 < d.length && ((s = new c(s, u, null, n, a)), l.push({ event: s, listeners: d }));
              }
            }
            if (!(7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === Mt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!Ye(u) && !u[He])) &&
                  (c || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                        ? s.defaultView || s.parentWindow
                        : window),
                  c
                    ? ((c = r),
                      null !== (u = (u = n.relatedTarget || n.toElement) ? Ye(u) : null) &&
                        ((f = i(u)), (d = u.tag), u !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (u = null))
                    : ((c = null), (u = r)),
                  c !== u))
              ) {
                if (
                  ((d = on),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = yn), (g = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
                  (f = null == c ? s : Xe(c)),
                  (m = null == u ? s : Xe(u)),
                  ((s = new d(g, h + "leave", c, n, a)).target = f),
                  (s.relatedTarget = m),
                  (g = null),
                  Ye(a) === r &&
                    (((d = new d(p, h + "enter", u, n, a)).target = m),
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
                (null !== c && ad(l, s, c, d, !1), null !== u && null !== f && ad(l, f, u, d, !0));
              }
              if (
                "select" === (c = (s = r ? Xe(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ("input" === c && "file" === s.type)
              )
                var y = $n;
              else if (Rn(s))
                if (Bn) y = Gn;
                else {
                  y = Qn;
                  var b = Kn;
                }
              else
                !(c = s.nodeName) ||
                "input" !== c.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && _t(r.elementType) && (y = $n)
                  : (y = Yn);
              switch (
                (y && (y = y(e, r))
                  ? Ln(l, y, n, a)
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
                  (Rn(b) || "true" === b.contentEditable) && ((or = b), (lr = r), (ir = null));
                  break;
                case "focusout":
                  ir = lr = or = null;
                  break;
                case "mousedown":
                  sr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((sr = !1), cr(l, n, a));
                  break;
                case "selectionchange":
                  if (ar) break;
                case "keydown":
                case "keyup":
                  cr(l, n, a);
              }
              var w;
              if (En)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var x = "onCompositionStart";
                      break e;
                    case "compositionend":
                      x = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      x = "onCompositionUpdate";
                      break e;
                  }
                  x = void 0;
                }
              else
                Mn
                  ? zn(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (x = "onCompositionStart");
              (x &&
                (_n &&
                  "ko" !== n.locale &&
                  (Mn || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && Mn && (w = qt())
                    : ((Wt = "value" in (Ut = a) ? Ut.value : Ut.textContent), (Mn = !0))),
                0 < (b = nd(r, x)).length &&
                  ((x = new dn(x, e, null, n, a)),
                  l.push({ event: x, listeners: b }),
                  (w || null !== (w = Tn(n))) && (x.data = w))),
                (w = Nn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Tn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Pn = !0), jn);
                        case "textInput":
                          return (e = t.data) === jn && Pn ? null : e;
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
                          return _n && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (x = nd(r, "onBeforeInput")).length &&
                  ((b = new dn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: b, listeners: x }),
                  (b.data = w)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var o = Hu((a[Be] || null).action),
                      l = r.submitter;
                    l &&
                      null !==
                        (t = (t = l[Be] || null)
                          ? Hu(t.formAction)
                          : l.getAttribute("formAction")) &&
                      ((o = t), (l = null));
                    var i = new tn("action", "action", null, r, a);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== Ou) {
                                var e = l ? Uu(a, l) : new FormData(a);
                                ei(
                                  n,
                                  { pending: !0, data: e, method: a.method, action: o },
                                  null,
                                  e,
                                );
                              }
                            } else
                              "function" == typeof o &&
                                (i.preventDefault(),
                                (e = l ? Uu(a, l) : new FormData(a)),
                                ei(n, { pending: !0, data: e, method: a.method, action: o }, o, e));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(l, e, r, n, a));
            }
            Qu(l, t);
          });
        }
        function td(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function nd(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            if (
              ((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
                null === o ||
                (null != (a = It(e, n)) && r.unshift(td(e, a, o)),
                null != (a = It(e, t)) && r.push(td(e, a, o))),
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
        function ad(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              c = i.stateNode;
            if (((i = i.tag), null !== s && s === r)) break;
            ((5 !== i && 26 !== i && 27 !== i) ||
              null === c ||
              ((s = c),
              a
                ? null != (c = It(n, o)) && l.unshift(td(n, c, s))
                : a || (null != (c = It(n, o)) && l.push(td(n, c, s)))),
              (n = n.return));
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var od = /\r\n?/g,
          ld = /\u0000|\uFFFD/g;
        function id(e) {
          return ("string" == typeof e ? e : "" + e).replace(od, "\n").replace(ld, "");
        }
        function sd(e, t) {
          return ((t = id(t)), id(e) === t);
        }
        function cd(e, t, n, r, a, o) {
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
              Nt(e, r, o);
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
                ("function" == typeof o &&
                  ("formAction" === n
                    ? ("input" !== t && cd(e, t, "name", a.name, a, null),
                      cd(e, t, "formEncType", a.formEncType, a, null),
                      cd(e, t, "formMethod", a.formMethod, a, null),
                      cd(e, t, "formTarget", a.formTarget, a, null))
                    : (cd(e, t, "encType", a.encType, a, null),
                      cd(e, t, "method", a.method, a, null),
                      cd(e, t, "target", a.target, a, null))),
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
              null != r && Yu("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Yu("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(l(60));
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
              (Yu("beforetoggle", e), Yu("toggle", e), it(e, "popover", r));
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
                it(e, (n = jt.get(n) || n), r);
          }
        }
        function ud(e, t, n, r, a, o) {
          switch (n) {
            case "style":
              Nt(e, r, o);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(l(60));
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
              null != r && Yu("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Yu("scrollend", e);
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
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" == typeof (o = null != (o = e[Be] || null) ? o[n] : null) &&
                  e.removeEventListener(t, o, a),
                "function" != typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                      ? e.setAttribute(n, "")
                      : it(e, n, r)
                  : ("function" != typeof o &&
                      null !== o &&
                      (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
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
              (Yu("error", e), Yu("load", e));
              var r,
                a = !1,
                o = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        o = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(l(137, t));
                      default:
                        cd(e, t, r, i, n, null);
                    }
                }
              return (
                o && cd(e, t, "srcSet", n.srcSet, n, null),
                void (a && cd(e, t, "src", n.src, n, null))
              );
            case "input":
              Yu("invalid", e);
              var s = (r = i = o = null),
                c = null,
                u = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var d = n[a];
                  if (null != d)
                    switch (a) {
                      case "name":
                        o = d;
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
                        cd(e, t, a, d, n, null);
                    }
                }
              return void yt(e, r, s, c, u, i, o, !1);
            case "select":
              for (o in (Yu("invalid", e), (a = i = r = null), n))
                if (n.hasOwnProperty(o) && null != (s = n[o]))
                  switch (o) {
                    case "value":
                      r = s;
                      break;
                    case "defaultValue":
                      i = s;
                      break;
                    case "multiple":
                      a = s;
                    default:
                      cd(e, t, o, s, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!a),
                void (null != t ? wt(e, !!a, t, !1) : null != n && wt(e, !!a, n, !0))
              );
            case "textarea":
              for (i in (Yu("invalid", e), (r = o = a = null), n))
                if (n.hasOwnProperty(i) && null != (s = n[i]))
                  switch (i) {
                    case "value":
                      a = s;
                      break;
                    case "defaultValue":
                      o = s;
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
              return void kt(e, a, o, r);
            case "option":
              for (c in n)
                n.hasOwnProperty(c) &&
                  null != (a = n[c]) &&
                  ("selected" === c
                    ? (e.selected = a && "function" != typeof a && "symbol" != typeof a)
                    : cd(e, t, c, a, n, null));
              return;
            case "dialog":
              (Yu("beforetoggle", e), Yu("toggle", e), Yu("cancel", e), Yu("close", e));
              break;
            case "iframe":
            case "object":
              Yu("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < qu.length; a++) Yu(qu[a], e);
              break;
            case "image":
              (Yu("error", e), Yu("load", e));
              break;
            case "details":
              Yu("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (Yu("error", e), Yu("load", e));
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
                if (n.hasOwnProperty(u) && null != (a = n[u]))
                  switch (u) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(l(137, t));
                    default:
                      cd(e, t, u, a, n, null);
                  }
              return;
            default:
              if (_t(t)) {
                for (d in n)
                  n.hasOwnProperty(d) && void 0 !== (a = n[d]) && ud(e, t, d, a, n, void 0);
                return;
              }
          }
          for (s in n) n.hasOwnProperty(s) && null != (a = n[s]) && cd(e, t, s, a, n, null);
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
          wd = "function" == typeof setTimeout ? setTimeout : void 0,
          xd = "function" == typeof clearTimeout ? clearTimeout : void 0,
          kd = "function" == typeof Promise ? Promise : void 0,
          Sd =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== kd
                ? function (e) {
                    return kd.resolve(null).then(e).catch(Ed);
                  }
                : wd;
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
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data) || "/&" === n) {
                if (0 === r) return (e.removeChild(a), void Hf(t));
                r--;
              } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
              else if ("html" === n) Ad(e.ownerDocument.documentElement);
              else if ("head" === n) {
                Ad((n = e.ownerDocument.head));
                for (var o = n.firstChild; o; ) {
                  var l = o.nextSibling,
                    i = o.nodeName;
                  (o[Ke] ||
                    "SCRIPT" === i ||
                    "STYLE" === i ||
                    ("LINK" === i && "stylesheet" === o.rel.toLowerCase()) ||
                    n.removeChild(o),
                    (o = l));
                }
              } else "body" === n && Ad(e.ownerDocument.body);
            n = a;
          } while (n);
          Hf(t);
        }
        function _d(e, t) {
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
        function jd(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (jd(n), Qe(n));
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
        var Od = null;
        function Rd(e) {
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
        function $d(e) {
          return "function" == typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var Bd = R.d;
        R.d = {
          f: function () {
            var e = Bd.f(),
              t = Zc();
            return e || t;
          },
          r: function (e) {
            var t = Ge(e);
            null !== t && 5 === t.tag && "form" === t.type ? ni(t) : Bd.r(e);
          },
          D: function (e) {
            (Bd.D(e), Ud("dns-prefetch", e, null));
          },
          C: function (e, t) {
            (Bd.C(e, t), Ud("preconnect", e, t));
          },
          L: function (e, t, n) {
            Bd.L(e, t, n);
            var r = Hd;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + gt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + gt(n.imageSrcSet) + '"]'),
                  "string" == typeof n.imageSizes &&
                    (a += '[imagesizes="' + gt(n.imageSizes) + '"]'))
                : (a += '[href="' + gt(e) + '"]');
              var o = a;
              switch (t) {
                case "style":
                  o = Vd(e);
                  break;
                case "script":
                  o = Qd(e);
              }
              Fd.has(o) ||
                ((e = f(
                  { rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t },
                  n,
                )),
                Fd.set(o, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(qd(o))) ||
                  ("script" === t && r.querySelector(Yd(o))) ||
                  (dd((t = r.createElement("link")), "link", e), Je(t), r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Bd.m(e, t);
            var n = Hd;
            if (n && e) {
              var r = t && "string" == typeof t.as ? t.as : "script",
                a = 'link[rel="modulepreload"][as="' + gt(r) + '"][href="' + gt(e) + '"]',
                o = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  o = Qd(e);
              }
              if (
                !Fd.has(o) &&
                ((e = f({ rel: "modulepreload", href: e }, t)),
                Fd.set(o, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Yd(o))) return;
                }
                (dd((r = n.createElement("link")), "link", e), Je(r), n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            Bd.X(e, t);
            var n = Hd;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                a = Qd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Yd(a))) ||
                  ((e = f({ src: e, async: !0 }, t)),
                  (t = Fd.get(a)) && Jd(e, t),
                  Je((o = n.createElement("script"))),
                  dd(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
          S: function (e, t, n) {
            Bd.S(e, t, n);
            var r = Hd;
            if (r && e) {
              var a = Ze(r).hoistableStyles,
                o = Vd(e);
              t = t || "default";
              var l = a.get(o);
              if (!l) {
                var i = { loading: 0, preload: null };
                if ((l = r.querySelector(qd(o)))) i.loading = 5;
                else {
                  ((e = f({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
                    (n = Fd.get(o)) && Zd(e, n));
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
                ((l = { type: "stylesheet", instance: l, count: 1, state: i }), a.set(o, l));
              }
            }
          },
          M: function (e, t) {
            Bd.M(e, t);
            var n = Hd;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                a = Qd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Yd(a))) ||
                  ((e = f({ src: e, async: !0, type: "module" }, t)),
                  (t = Fd.get(a)) && Jd(e, t),
                  Je((o = n.createElement("script"))),
                  dd(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
        };
        var Hd = "undefined" == typeof document ? null : document;
        function Ud(e, t, n) {
          var r = Hd;
          if (r && "string" == typeof t && t) {
            var a = gt(t);
            ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" == typeof n && (a += '[crossorigin="' + n + '"]'),
              Id.has(a) ||
                (Id.add(a),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(a) &&
                  (dd((t = r.createElement("link")), "link", e), Je(t), r.head.appendChild(t))));
          }
        }
        function Wd(e, t, n, r) {
          var a,
            o,
            i,
            s,
            c = (c = V.current) ? $d(c) : null;
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
                        ((a = c),
                        (o = e),
                        (i = n),
                        (s = d.state),
                        a.querySelector('link[rel="preload"][as="style"][' + o + "]")
                          ? (s.loading = 1)
                          : ((o = a.createElement("link")),
                            (s.preload = o),
                            o.addEventListener("load", function () {
                              return (s.loading |= 1);
                            }),
                            o.addEventListener("error", function () {
                              return (s.loading |= 2);
                            }),
                            dd(o, "link", i),
                            Je(o),
                            a.head.appendChild(o))))),
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
        function Yd(e) {
          return "script[async]" + e;
        }
        function Gd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector('style[data-href~="' + gt(n.href) + '"]');
                if (r) return ((t.instance = r), Je(r), r);
                var a = f({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Je((r = (e.ownerDocument || e).createElement("style"))),
                  dd(r, "style", a),
                  Xd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = Vd(n.href);
                var o = e.querySelector(qd(a));
                if (o) return ((t.state.loading |= 4), (t.instance = o), Je(o), o);
                ((r = Kd(n)),
                  (a = Fd.get(a)) && Zd(r, a),
                  Je((o = (e.ownerDocument || e).createElement("link"))));
                var i = o;
                return (
                  (i._p = new Promise(function (e, t) {
                    ((i.onload = e), (i.onerror = t));
                  })),
                  dd(o, "link", r),
                  (t.state.loading |= 4),
                  Xd(o, n.precedence, e),
                  (t.instance = o)
                );
              case "script":
                return (
                  (o = Qd(n.src)),
                  (a = e.querySelector(Yd(o)))
                    ? ((t.instance = a), Je(a), a)
                    : ((r = n),
                      (a = Fd.get(o)) && Jd((r = f({}, n)), a),
                      Je((a = (e = e.ownerDocument || e).createElement("script"))),
                      dd(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
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
              a = r.length ? r[r.length - 1] : null,
              o = a,
              l = 0;
            l < r.length;
            l++
          ) {
            var i = r[l];
            if (i.dataset.precedence === t) o = i;
            else if (o !== a) break;
          }
          o
            ? o.parentNode.insertBefore(e, o.nextSibling)
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
              a = (ef = new Map());
            a.set(n, r);
          } else (r = (a = ef).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var o = n[a];
            if (
              !(o[Ke] || o[$e] || ("link" === e && "stylesheet" === o.getAttribute("rel"))) &&
              "http://www.w3.org/2000/svg" !== o.namespaceURI
            ) {
              var l = o.getAttribute(t) || "";
              l = e + l;
              var i = r.get(l);
              i ? i.push(o) : r.set(l, [o]);
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
        var af = 0;
        function of() {
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
              (e.count++, (lf = new Map()), t.forEach(cf, e), (lf = null), of.call(e)));
        }
        function cf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = lf.get(e);
            if (n) var r = n.get(null);
            else {
              ((n = new Map()), lf.set(e, n));
              for (
                var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0;
                o < a.length;
                o++
              ) {
                var l = a[o];
                ("LINK" !== l.nodeName && "not all" === l.getAttribute("media")) ||
                  (n.set(l.dataset.precedence, l), (r = l));
              }
              r && n.set(null, r);
            }
            ((l = (a = t.instance).getAttribute("data-precedence")),
              (o = n.get(l) || r) === r && n.set(null, a),
              n.set(l, a),
              this.count++,
              (r = of.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              o
                ? o.parentNode.insertBefore(a, o.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
              (t.state.loading |= 4));
          }
        }
        var uf = {
          $$typeof: w,
          Provider: null,
          Consumer: null,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
        };
        function df(e, t, n, r, a, o, l, i, s) {
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
            (this.onUncaughtError = a),
            (this.onCaughtError = o),
            (this.onRecoverableError = l),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = s),
            (this.incompleteTransitions = new Map()));
        }
        function ff(e, t, n, r, a, o) {
          ((a = (function (e) {
            return e ? (e = Lr) : Lr;
          })(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = yo(t)).payload = { element: n }),
            null !== (o = void 0 === o ? null : o) && (r.callback = o),
            null !== (n = bo(e, r, t)) && (Kc(n, 0, t), wo(n, e, t)));
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
          var a = O.T;
          O.T = null;
          var o = R.p;
          try {
            ((R.p = 2), wf(e, t, n, r));
          } finally {
            ((R.p = o), (O.T = a));
          }
        }
        function bf(e, t, n, r) {
          var a = O.T;
          O.T = null;
          var o = R.p;
          try {
            ((R.p = 8), wf(e, t, n, r));
          } finally {
            ((R.p = o), (O.T = a));
          }
        }
        function wf(e, t, n, r) {
          if (vf) {
            var a = xf(r);
            if (null === a) (ed(e, t, r, kf, n), Of(e, r));
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return ((Nf = Rf(Nf, e, t, n, r, a)), !0);
                  case "dragenter":
                    return ((_f = Rf(_f, e, t, n, r, a)), !0);
                  case "mouseover":
                    return ((jf = Rf(jf, e, t, n, r, a)), !0);
                  case "pointerover":
                    var o = a.pointerId;
                    return (Pf.set(o, Rf(Pf.get(o) || null, e, t, n, r, a)), !0);
                  case "gotpointercapture":
                    return ((o = a.pointerId), zf.set(o, Rf(zf.get(o) || null, e, t, n, r, a)), !0);
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Of(e, r), 4 & t && -1 < Mf.indexOf(e))) {
              for (; null !== a; ) {
                var o = Ge(a);
                if (null !== o)
                  switch (o.tag) {
                    case 3:
                      if ((o = o.stateNode).current.memoizedState.isDehydrated) {
                        var l = Ce(o.pendingLanes);
                        if (0 !== l) {
                          var i = o;
                          for (i.pendingLanes |= 2, i.entangledLanes |= 2; l; ) {
                            var s = 1 << (31 - be(l));
                            ((i.entanglements[1] |= s), (l &= ~s));
                          }
                          (Ru(o), !(6 & fc) && ((Oc = ie() + 500), Lu(0, !1)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      (null !== (i = Mr(o, 2)) && Kc(i, 0, 2), Zc(), mf(o, 2));
                  }
                if ((null === (o = xf(r)) && ed(e, t, r, kf, n), o === a)) break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else ed(e, t, r, null, n);
          }
        }
        function xf(e) {
          return Sf((e = Ot(e)));
        }
        var kf = null;
        function Sf(e) {
          if (((kf = null), null !== (e = Ye(e)))) {
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
          _f = null,
          jf = null,
          Pf = new Map(),
          zf = new Map(),
          Tf = [],
          Mf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function Of(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nf = null;
              break;
            case "dragenter":
            case "dragleave":
              _f = null;
              break;
            case "mouseover":
            case "mouseout":
              jf = null;
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
        function Rf(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ge(t)) && hf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Lf(e) {
          var t = Ye(e.target);
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
            var n = xf(e.nativeEvent);
            if (null !== n) return (null !== (t = Ge(n)) && hf(t), (e.blockedOn = n), !1);
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
            null !== _f && Df(_f) && (_f = null),
            null !== jf && Df(jf) && (jf = null),
            Pf.forEach(Af),
            zf.forEach(Af));
        }
        function If(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Cf || ((Cf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Ff)));
        }
        var $f = null;
        function Bf(e) {
          $f !== e &&
            (($f = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              $f === e && ($f = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" != typeof r) {
                  if (null === Sf(r || n)) continue;
                  break;
                }
                var o = Ge(n);
                null !== o &&
                  (e.splice(t, 3),
                  (t -= 3),
                  ei(o, { pending: !0, data: a, method: n.method, action: r }, r, a));
              }
            }));
        }
        function Hf(e) {
          function t(t) {
            return If(t, e);
          }
          (null !== Nf && If(Nf, e),
            null !== _f && If(_f, e),
            null !== jf && If(jf, e),
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
              var a = n[r],
                o = n[r + 1],
                l = a[Be] || null;
              if ("function" == typeof o) l || Bf(n);
              else if (l) {
                var i = null;
                if (o && o.hasAttribute("formAction")) {
                  if (((a = o), (l = o[Be] || null))) i = l.formAction;
                  else if (null !== Sf(a)) continue;
                } else i = l.action;
                ("function" == typeof i ? (n[r + 1] = i) : (n.splice(r, 3), (r -= 3)), Bf(n));
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
                    return (a = e);
                  });
                },
                focusReset: "manual",
                scroll: "manual",
              });
          }
          function t() {
            (null !== a && (a(), (a = null)), r || setTimeout(n, 20));
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
              a = null;
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
                  null !== a && (a(), (a = null)));
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
                (ff(e.current, 2, null, e, null, null), Zc(), (t[He] = null));
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
        var qf = a.version;
        if ("19.2.4" !== qf) throw Error(l(527, qf, "19.2.4"));
        R.findDOMNode = function (e) {
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
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return (u(a), e);
                    if (o === r) return (u(a), t);
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) ((n = a), (r = o));
                else {
                  for (var s = !1, c = a.child; c; ) {
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
                  if (!s) {
                    for (c = o.child; c; ) {
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
          currentDispatcherRef: O,
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
            a = "",
            o = Si,
            i = Ei,
            s = Ci;
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (r = !0),
              void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (o = t.onUncaughtError),
              void 0 !== t.onCaughtError && (i = t.onCaughtError),
              void 0 !== t.onRecoverableError && (s = t.onRecoverableError)),
            (t = (function (e, t, n, r, a, o, l, i, s, c, u, d) {
              return (
                (e = new df(e, t, n, l, s, c, u, d, i)),
                (t = 1),
                !0 === o && (t |= 24),
                (o = Ar(3, null, null, t)),
                (e.current = o),
                (o.stateNode = e),
                (t = Fa()).refCount++,
                (e.pooledCache = t),
                t.refCount++,
                (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
                go(o),
                e
              );
            })(e, 1, !1, null, 0, r, a, null, o, i, s, Uf)),
            (e[He] = t.current),
            Zu(e),
            new Wf(t)
          );
        };
      },
      221(e, t, n) {
        var r = n(540);
        function a(e) {
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
        function o() {}
        var l = {
            d: {
              f: o,
              r: function () {
                throw Error(a(522));
              },
              D: o,
              C: o,
              L: o,
              m: o,
              X: o,
              S: o,
              M: o,
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
              throw Error(a(299));
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
                a = "string" == typeof t.integrity ? t.integrity : void 0,
                o = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
              "style" === n
                ? l.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o,
                  })
                : "script" === n &&
                  l.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o,
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
        function a(e, t, r) {
          var a = null;
          if ((void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t))
            for (var o in ((r = {}), t)) "key" !== o && (r[o] = t[o]);
          else r = t;
          return (
            (t = r.ref), { $$typeof: n, type: e, key: a, ref: void 0 !== t ? t : null, props: r }
          );
        }
        ((t.Fragment = r), (t.jsx = a), (t.jsxs = a));
      },
      869(e, t) {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
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
        function w(e, t, n) {
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
        var x = (w.prototype = new b());
        ((x.constructor = w), g(x, y.prototype), (x.isPureReactComponent = !0));
        var k = Array.isArray;
        function S() {}
        var E = { H: null, A: null, T: null, S: null },
          C = Object.prototype.hasOwnProperty;
        function N(e, t, r) {
          var a = r.ref;
          return { $$typeof: n, type: e, key: t, ref: void 0 !== a ? a : null, props: r };
        }
        function _(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var j = /\/+/g;
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
        function z(e, t, a, o, l) {
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
                    return z((u = e._init)(e._payload), t, a, o, l);
                }
            }
          if (u)
            return (
              (l = l(e)),
              (u = "" === o ? "." + P(e, 0) : o),
              k(l)
                ? ((a = ""),
                  null != u && (a = u.replace(j, "$&/") + "/"),
                  z(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (_(l) &&
                    ((s = l),
                    (c =
                      a +
                      (null == l.key || (e && e.key === l.key)
                        ? ""
                        : ("" + l.key).replace(j, "$&/") + "/") +
                      u),
                    (l = N(s.type, c, s.props))),
                  t.push(l)),
              1
            );
          u = 0;
          var d,
            p = "" === o ? "." : o + ":";
          if (k(e))
            for (var h = 0; h < e.length; h++) u += z((o = e[h]), t, a, (i = p + P(o, h)), l);
          else if (
            "function" ==
            typeof (h =
              null === (d = e) || "object" != typeof d
                ? null
                : "function" == typeof (d = (m && d[m]) || d["@@iterator"])
                  ? d
                  : null)
          )
            for (e = h.call(e), h = 0; !(o = e.next()).done; )
              u += z((o = o.value), t, a, (i = p + P(o, h++)), l);
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
                a,
                o,
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
            a = 0;
          return (
            z(e, r, "", "", function (e) {
              return t.call(n, e, a++);
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
        var O =
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
          R = {
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
              if (!_(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return e;
            },
          };
        ((t.Activity = p),
          (t.Children = R),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = w),
          (t.StrictMode = o),
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
              a = e.key;
            if (null != t)
              for (o in (void 0 !== t.key && (a = "" + t.key), t))
                !C.call(t, o) ||
                  "key" === o ||
                  "__self" === o ||
                  "__source" === o ||
                  ("ref" === o && void 0 === t.ref) ||
                  (r[o] = t[o]);
            var o = arguments.length - 2;
            if (1 === o) r.children = n;
            else if (1 < o) {
              for (var l = Array(o), i = 0; i < o; i++) l[i] = arguments[i + 2];
              r.children = l;
            }
            return N(e.type, a, r);
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
              a = {},
              o = null;
            if (null != t)
              for (r in (void 0 !== t.key && (o = "" + t.key), t))
                C.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
            var l = arguments.length - 2;
            if (1 === l) a.children = n;
            else if (1 < l) {
              for (var i = Array(l), s = 0; s < l; s++) i[s] = arguments[s + 2];
              a.children = i;
            }
            if (e && e.defaultProps)
              for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
            return N(e, o, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = _),
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
                a = E.S;
              (null !== a && a(n, r),
                "object" == typeof r && null !== r && "function" == typeof r.then && r.then(S, O));
            } catch (e) {
              O(e);
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
              a = e[r];
            if (!(0 < o(a, t))) break e;
            ((e[r] = t), (e[n] = a), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                c = i + 1,
                u = e[c];
              if (0 > o(s, n))
                c < a && 0 > o(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(c < a && 0 > o(u, n))) break e;
                ((e[r] = u), (e[c] = n), (r = c));
              }
            }
          }
          return t;
        }
        function o(e, t) {
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
          w = "undefined" != typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              (a(u), (t.sortIndex = t.expirationTime), n(c, t));
            }
            t = r(u);
          }
        }
        function k(e) {
          if (((g = !1), x(e), !h))
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
          _ = -1;
        function j() {
          return !(!v && t.unstable_now() - _ < N);
        }
        function P() {
          if (((v = !1), E)) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              e: {
                ((h = !1), g && ((g = !1), b(C), (C = -1)), (m = !0));
                var o = p;
                try {
                  t: {
                    for (x(e), f = r(c); null !== f && !(f.expirationTime > e && j()); ) {
                      var l = f.callback;
                      if ("function" == typeof l) {
                        ((f.callback = null), (p = f.priorityLevel));
                        var i = l(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" == typeof i)) {
                          ((f.callback = i), x(e), (n = !0));
                          break t;
                        }
                        (f === r(c) && a(c), x(e));
                      } else a(c);
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
                  ((f = null), (p = o), (m = !1));
                }
                n = void 0;
              }
            } finally {
              n ? S() : (E = !1);
            }
          }
        }
        if ("function" == typeof w)
          S = function () {
            w(P);
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
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ((o =
                "object" == typeof o && null !== o && "number" == typeof (o = o.delay) && 0 < o
                  ? l + o
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
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) && e === r(u) && (g ? (b(C), (C = -1)) : (g = !0), M(k, o - l)))
                : ((e.sortIndex = i), n(c, e), h || m || ((h = !0), E || ((E = !0), S()))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
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
          a =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                },
          o = r.useState,
          l = r.useEffect,
          i = r.useLayoutEffect,
          s = r.useDebugValue;
        function c(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !a(e, n);
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
                  r = o({ inst: { value: n, getSnapshot: t } }),
                  a = r[0].inst,
                  u = r[1];
                return (
                  i(
                    function () {
                      ((a.value = n), (a.getSnapshot = t), c(a) && u({ inst: a }));
                    },
                    [e, n, t],
                  ),
                  l(
                    function () {
                      return (
                        c(a) && u({ inst: a }),
                        e(function () {
                          c(a) && u({ inst: a });
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
    a = {};
  function o(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var n = (a[e] = { exports: {} });
    return (r[e](n, n.exports, o), n.exports);
  }
  ((o.m = r),
    (e = []),
    (o.O = (t, n, r, a) => {
      if (!n) {
        var l = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, r, a] = e[u], i = !0, s = 0; s < n.length; s++)
            (!1 & a || l >= a) && Object.keys(o.O).every((e) => o.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((i = !1), a < l && (l = a));
          if (i) {
            e.splice(u--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
      e[u] = [n, r, a];
    }),
    (n = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (o.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var a = Object.create(null);
      o.r(a);
      var l = {};
      t = t || [null, n({}), n([]), n(n)];
      for (
        var i = 2 & r && e;
        ("object" == typeof i || "function" == typeof i) && !~t.indexOf(i);
        i = n(i)
      )
        Object.getOwnPropertyNames(i).forEach((t) => (l[t] = () => e[t]));
      return ((l.default = () => e), o.d(a, l), a);
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e = { 138: 0, 869: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            a,
            [l, i, s] = n,
            c = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (r in i) o.o(i, r) && (o.m[r] = i[r]);
            if (s) var u = s(o);
          }
          for (t && t(n); c < l.length; c++)
            ((a = l[c]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
          return o.O(u);
        },
        n = (self.webpackChunkrit_igme430 = self.webpackChunkrit_igme430 || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })(),
    (o.nc = void 0));
  var l = o.O(void 0, [869], () => o(978));
  l = o.O(l);
})();
