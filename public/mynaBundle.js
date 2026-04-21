/*! For license information please see mynaBundle.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n,
    r = {
      445(e, t, n) {
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
        var u = {
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
        const c = (e) => {
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
                  ...u,
                  width: t ?? m ?? u.width,
                  height: t ?? m ?? u.height,
                  stroke: e ?? v,
                  strokeWidth: b,
                  className: i("lucide", y, a),
                  ...(!l && !c(f) && { "aria-hidden": "true" }),
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
          z = p("log-in", [
            ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
            ["path", { d: "M15 12H3", key: "6jk70r" }],
            ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
          ]);
        function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
          return function (r) {
            if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
          };
        }
        function T(e, t) {
          if ("function" == typeof e) return e(t);
          null != e && (e.current = t);
        }
        function M(...e) {
          return (t) => {
            let n = !1;
            const r = e.map((e) => {
              const r = T(e, t);
              return (n || "function" != typeof r || (n = !0), r);
            });
            if (n)
              return () => {
                for (let t = 0; t < r.length; t++) {
                  const n = r[t];
                  "function" == typeof n ? n() : T(e[t], null);
                }
              };
          };
        }
        function j(...e) {
          return r.useCallback(M(...e), e);
        }
        "undefined" == typeof window || !window.document || window.document.createElement;
        var R = n(848);
        function L(e, t = []) {
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
                    u = r.useMemo(() => i, Object.values(i));
                  return (0, R.jsx)(s.Provider, { value: u, children: o });
                };
                return (
                  (i.displayName = t + "Provider"),
                  [
                    i,
                    function (n, i) {
                      const s = i?.[e]?.[l] || a,
                        u = r.useContext(s);
                      if (u) return u;
                      if (void 0 !== o) return o;
                      throw new Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              O(o, ...t),
            ]
          );
        }
        function O(...e) {
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
        var D = n(961);
        function A(e) {
          const t = F(e),
            n = r.forwardRef((e, n) => {
              const { children: o, ...a } = e,
                l = r.Children.toArray(o),
                i = l.find(B);
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
                return (0, R.jsx)(t, {
                  ...a,
                  ref: n,
                  children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null,
                });
              }
              return (0, R.jsx)(t, { ...a, ref: n, children: o });
            });
          return ((n.displayName = `${e}.Slot`), n);
        }
        var I = A("Slot");
        function F(e) {
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
              return (n.type !== r.Fragment && (a.ref = t ? M(t, e) : e), r.cloneElement(n, a));
            }
            return r.Children.count(n) > 1 ? r.Children.only(null) : null;
          });
          return ((t.displayName = `${e}.SlotClone`), t);
        }
        var H = Symbol("radix.slottable");
        function B(e) {
          return (
            r.isValidElement(e) &&
            "function" == typeof e.type &&
            "__radixId" in e.type &&
            e.type.__radixId === H
          );
        }
        var $ = [
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
            o = r.forwardRef((e, r) => {
              const { asChild: o, ...a } = e,
                l = o ? n : t;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, R.jsx)(l, { ...a, ref: r })
              );
            });
          return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
        }, {});
        function U(e, t) {
          e && D.flushSync(() => e.dispatchEvent(t));
        }
        function V(e) {
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
        var W,
          q = "dismissableLayer.update",
          K = r.createContext({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          }),
          Q = r.forwardRef((e, t) => {
            const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: o,
                onPointerDownOutside: a,
                onFocusOutside: l,
                onInteractOutside: i,
                onDismiss: s,
                ...u
              } = e,
              c = r.useContext(K),
              [d, f] = r.useState(null),
              p = d?.ownerDocument ?? globalThis?.document,
              [, m] = r.useState({}),
              h = j(t, (e) => f(e)),
              g = Array.from(c.layers),
              [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
              y = g.indexOf(v),
              b = d ? g.indexOf(d) : -1,
              w = c.layersWithOutsidePointerEventsDisabled.size > 0,
              x = b >= y,
              k = (function (e, t = globalThis?.document) {
                const n = V(e),
                  o = r.useRef(!1),
                  a = r.useRef(() => {});
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                        if (e.target && !o.current) {
                          let r = function () {
                            G("dismissableLayer.pointerDownOutside", n, o, { discrete: !0 });
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
                  n = [...c.branches].some((e) => e.contains(t));
                x && !n && (a?.(e), i?.(e), e.defaultPrevented || s?.());
              }, p),
              S = (function (e, t = globalThis?.document) {
                const n = V(e),
                  o = r.useRef(!1);
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                      e.target &&
                        !o.current &&
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
                  { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
                );
              })((e) => {
                const t = e.target;
                [...c.branches].some((e) => e.contains(t)) ||
                  (l?.(e), i?.(e), e.defaultPrevented || s?.());
              }, p);
            return (
              (function (e, t = globalThis?.document) {
                const n = V(e);
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
                b === c.layers.size - 1 &&
                  (o?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
              }, p),
              r.useEffect(() => {
                if (d)
                  return (
                    n &&
                      (0 === c.layersWithOutsidePointerEventsDisabled.size &&
                        ((W = p.body.style.pointerEvents), (p.body.style.pointerEvents = "none")),
                      c.layersWithOutsidePointerEventsDisabled.add(d)),
                    c.layers.add(d),
                    Y(),
                    () => {
                      n &&
                        1 === c.layersWithOutsidePointerEventsDisabled.size &&
                        (p.body.style.pointerEvents = W);
                    }
                  );
              }, [d, p, n, c]),
              r.useEffect(
                () => () => {
                  d &&
                    (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Y());
                },
                [d, c],
              ),
              r.useEffect(() => {
                const e = () => m({});
                return (document.addEventListener(q, e), () => document.removeEventListener(q, e));
              }, []),
              (0, R.jsx)($.div, {
                ...u,
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
          const o = n.originalEvent.target,
            a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
          (t && o.addEventListener(e, t, { once: !0 }), r ? U(o, a) : o.dispatchEvent(a));
        }
        ((Q.displayName = "DismissableLayer"),
          (r.forwardRef((e, t) => {
            const n = r.useContext(K),
              o = r.useRef(null),
              a = j(t, o);
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
              (0, R.jsx)($.div, { ...e, ref: a })
            );
          }).displayName = "DismissableLayerBranch"));
        var X = globalThis?.document ? r.useLayoutEffect : () => {},
          Z = o[" useId ".trim().toString()] || (() => {}),
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
          oe = Math.round,
          ae = Math.floor,
          le = (e) => ({ x: e, y: e }),
          ie = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function se(e, t, n) {
          return re(e, ne(t, n));
        }
        function ue(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function ce(e) {
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
          const t = ce(e);
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
          const { x: t, y: n, width: r, height: o } = e;
          return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
        }
        function Ee(e, t, n) {
          let { reference: r, floating: o } = e;
          const a = me(t),
            l = he(t),
            i = pe(l),
            s = ce(t),
            u = "y" === a,
            c = r.x + r.width / 2 - o.width / 2,
            d = r.y + r.height / 2 - o.height / 2,
            f = r[i] / 2 - o[i] / 2;
          let p;
          switch (s) {
            case "top":
              p = { x: c, y: r.y - o.height };
              break;
            case "bottom":
              p = { x: c, y: r.y + r.height };
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
          switch (de(t)) {
            case "start":
              p[l] -= f * (n && u ? -1 : 1);
              break;
            case "end":
              p[l] += f * (n && u ? -1 : 1);
          }
          return p;
        }
        async function Ce(e, t) {
          var n;
          void 0 === t && (t = {});
          const { x: r, y: o, platform: a, rects: l, elements: i, strategy: s } = e,
            {
              boundary: u = "clippingAncestors",
              rootBoundary: c = "viewport",
              elementContext: d = "floating",
              altBoundary: f = !1,
              padding: p = 0,
            } = ue(t, e),
            m = ke(p),
            h = i[f ? ("floating" === d ? "reference" : "floating") : d],
            g = Se(
              await a.getClippingRect({
                element:
                  null == (n = await (null == a.isElement ? void 0 : a.isElement(h))) || n
                    ? h
                    : h.contextElement ||
                      (await (null == a.getDocumentElement
                        ? void 0
                        : a.getDocumentElement(i.floating))),
                boundary: u,
                rootBoundary: c,
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
            w = Se(
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
        const ze = new Set(["left", "top"]);
        function Pe() {
          return "undefined" != typeof window;
        }
        function Te(e) {
          return Re(e) ? (e.nodeName || "").toLowerCase() : "#document";
        }
        function Me(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
        }
        function je(e) {
          var t;
          return null == (t = (Re(e) ? e.ownerDocument : e.document) || window.document)
            ? void 0
            : t.documentElement;
        }
        function Re(e) {
          return !!Pe() && (e instanceof Node || e instanceof Me(e).Node);
        }
        function Le(e) {
          return !!Pe() && (e instanceof Element || e instanceof Me(e).Element);
        }
        function Oe(e) {
          return !!Pe() && (e instanceof HTMLElement || e instanceof Me(e).HTMLElement);
        }
        function De(e) {
          return (
            !(!Pe() || "undefined" == typeof ShadowRoot) &&
            (e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot)
          );
        }
        function Ae(e) {
          const { overflow: t, overflowX: n, overflowY: r, display: o } = Ke(e);
          return (
            /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
          );
        }
        function Ie(e) {
          return /^(table|td|th)$/.test(Te(e));
        }
        function Fe(e) {
          try {
            if (e.matches(":popover-open")) return !0;
          } catch (e) {}
          try {
            return e.matches(":modal");
          } catch (e) {
            return !1;
          }
        }
        const He = /transform|translate|scale|rotate|perspective|filter/,
          Be = /paint|layout|strict|content/,
          $e = (e) => !!e && "none" !== e;
        let Ue;
        function Ve(e) {
          const t = Le(e) ? Ke(e) : e;
          return (
            $e(t.transform) ||
            $e(t.translate) ||
            $e(t.scale) ||
            $e(t.rotate) ||
            $e(t.perspective) ||
            (!We() && ($e(t.backdropFilter) || $e(t.filter))) ||
            He.test(t.willChange || "") ||
            Be.test(t.contain || "")
          );
        }
        function We() {
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
          return /^(html|body|#document)$/.test(Te(e));
        }
        function Ke(e) {
          return Me(e).getComputedStyle(e);
        }
        function Qe(e) {
          return Le(e)
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
        }
        function Ye(e) {
          if ("html" === Te(e)) return e;
          const t = e.assignedSlot || e.parentNode || (De(e) && e.host) || je(e);
          return De(t) ? t.host : t;
        }
        function Ge(e) {
          const t = Ye(e);
          return qe(t)
            ? e.ownerDocument
              ? e.ownerDocument.body
              : e.body
            : Oe(t) && Ae(t)
              ? t
              : Ge(t);
        }
        function Xe(e, t, n) {
          var r;
          (void 0 === t && (t = []), void 0 === n && (n = !0));
          const o = Ge(e),
            a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = Me(o);
          if (a) {
            const e = Ze(l);
            return t.concat(l, l.visualViewport || [], Ae(o) ? o : [], e && n ? Xe(e) : []);
          }
          return t.concat(o, Xe(o, [], n));
        }
        function Ze(e) {
          return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
        }
        function Je(e) {
          const t = Ke(e);
          let n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0;
          const o = Oe(e),
            a = o ? e.offsetWidth : n,
            l = o ? e.offsetHeight : r,
            i = oe(n) !== a || oe(r) !== l;
          return (i && ((n = a), (r = l)), { width: n, height: r, $: i });
        }
        function et(e) {
          return Le(e) ? e : e.contextElement;
        }
        function tt(e) {
          const t = et(e);
          if (!Oe(t)) return le(1);
          const n = t.getBoundingClientRect(),
            { width: r, height: o, $: a } = Je(t);
          let l = (a ? oe(n.width) : n.width) / r,
            i = (a ? oe(n.height) : n.height) / o;
          return (
            (l && Number.isFinite(l)) || (l = 1),
            (i && Number.isFinite(i)) || (i = 1),
            { x: l, y: i }
          );
        }
        const nt = le(0);
        function rt(e) {
          const t = Me(e);
          return We() && t.visualViewport
            ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
            : nt;
        }
        function ot(e, t, n, r) {
          (void 0 === t && (t = !1), void 0 === n && (n = !1));
          const o = e.getBoundingClientRect(),
            a = et(e);
          let l = le(1);
          t && (r ? Le(r) && (l = tt(r)) : (l = tt(e)));
          const i = (function (e, t, n) {
            return (void 0 === t && (t = !1), !(!n || (t && n !== Me(e))) && t);
          })(a, n, r)
            ? rt(a)
            : le(0);
          let s = (o.left + i.x) / l.x,
            u = (o.top + i.y) / l.y,
            c = o.width / l.x,
            d = o.height / l.y;
          if (a) {
            const e = Me(a),
              t = r && Le(r) ? Me(r) : r;
            let n = e,
              o = Ze(n);
            for (; o && r && t !== n; ) {
              const e = tt(o),
                t = o.getBoundingClientRect(),
                r = Ke(o),
                a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
              ((s *= e.x),
                (u *= e.y),
                (c *= e.x),
                (d *= e.y),
                (s += a),
                (u += l),
                (n = Me(o)),
                (o = Ze(n)));
            }
          }
          return Se({ width: c, height: d, x: s, y: u });
        }
        function at(e, t) {
          const n = Qe(e).scrollLeft;
          return t ? t.left + n : ot(je(e)).left + n;
        }
        function lt(e, t) {
          const n = e.getBoundingClientRect();
          return { x: n.left + t.scrollLeft - at(e, n), y: n.top + t.scrollTop };
        }
        function it(e, t, n) {
          let r;
          if ("viewport" === t)
            r = (function (e, t) {
              const n = Me(e),
                r = je(e),
                o = n.visualViewport;
              let a = r.clientWidth,
                l = r.clientHeight,
                i = 0,
                s = 0;
              if (o) {
                ((a = o.width), (l = o.height));
                const e = We();
                (!e || (e && "fixed" === t)) && ((i = o.offsetLeft), (s = o.offsetTop));
              }
              const u = at(r);
              if (u <= 0) {
                const e = r.ownerDocument,
                  t = e.body,
                  n = getComputedStyle(t),
                  o =
                    ("CSS1Compat" === e.compatMode &&
                      parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                    0,
                  l = Math.abs(r.clientWidth - t.clientWidth - o);
                l <= 25 && (a -= l);
              } else u <= 25 && (a += u);
              return { width: a, height: l, x: i, y: s };
            })(e, n);
          else if ("document" === t)
            r = (function (e) {
              const t = je(e),
                n = Qe(e),
                r = e.ownerDocument.body,
                o = re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                a = re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
              let l = -n.scrollLeft + at(e);
              const i = -n.scrollTop;
              return (
                "rtl" === Ke(r).direction && (l += re(t.clientWidth, r.clientWidth) - o),
                { width: o, height: a, x: l, y: i }
              );
            })(je(e));
          else if (Le(t))
            r = (function (e, t) {
              const n = ot(e, !0, "fixed" === t),
                r = n.top + e.clientTop,
                o = n.left + e.clientLeft,
                a = Oe(e) ? tt(e) : le(1);
              return {
                width: e.clientWidth * a.x,
                height: e.clientHeight * a.y,
                x: o * a.x,
                y: r * a.y,
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
          return !(n === t || !Le(n) || qe(n)) && ("fixed" === Ke(n).position || st(n, t));
        }
        function ut(e, t, n) {
          const r = Oe(t),
            o = je(t),
            a = "fixed" === n,
            l = ot(e, !0, a, t);
          let i = { scrollLeft: 0, scrollTop: 0 };
          const s = le(0);
          function u() {
            s.x = at(o);
          }
          if (r || (!r && !a))
            if ((("body" !== Te(t) || Ae(o)) && (i = Qe(t)), r)) {
              const e = ot(t, !0, a, t);
              ((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop));
            } else o && u();
          a && !r && o && u();
          const c = !o || r || a ? le(0) : lt(o, i);
          return {
            x: l.left + i.scrollLeft - s.x - c.x,
            y: l.top + i.scrollTop - s.y - c.y,
            width: l.width,
            height: l.height,
          };
        }
        function ct(e) {
          return "static" === Ke(e).position;
        }
        function dt(e, t) {
          if (!Oe(e) || "fixed" === Ke(e).position) return null;
          if (t) return t(e);
          let n = e.offsetParent;
          return (je(e) === n && (n = n.ownerDocument.body), n);
        }
        function ft(e, t) {
          const n = Me(e);
          if (Fe(e)) return n;
          if (!Oe(e)) {
            let t = Ye(e);
            for (; t && !qe(t); ) {
              if (Le(t) && !ct(t)) return t;
              t = Ye(t);
            }
            return n;
          }
          let r = dt(e, t);
          for (; r && Ie(r) && ct(r); ) r = dt(r, t);
          return r && qe(r) && ct(r) && !Ve(r)
            ? n
            : r ||
                (function (e) {
                  let t = Ye(e);
                  for (; Oe(t) && !qe(t); ) {
                    if (Ve(t)) return t;
                    if (Fe(t)) return null;
                    t = Ye(t);
                  }
                  return null;
                })(e) ||
                n;
        }
        const pt = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
            const a = "fixed" === o,
              l = je(r),
              i = !!t && Fe(t.floating);
            if (r === l || (i && a)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              u = le(1);
            const c = le(0),
              d = Oe(r);
            if ((d || (!d && !a)) && (("body" !== Te(r) || Ae(l)) && (s = Qe(r)), d)) {
              const e = ot(r);
              ((u = tt(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop));
            }
            const f = !l || d || a ? le(0) : lt(l, s);
            return {
              width: n.width * u.x,
              height: n.height * u.y,
              x: n.x * u.x - s.scrollLeft * u.x + c.x + f.x,
              y: n.y * u.y - s.scrollTop * u.y + c.y + f.y,
            };
          },
          getDocumentElement: je,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
            const a = [
                ...("clippingAncestors" === n
                  ? Fe(t)
                    ? []
                    : (function (e, t) {
                        const n = t.get(e);
                        if (n) return n;
                        let r = Xe(e, [], !1).filter((e) => Le(e) && "body" !== Te(e)),
                          o = null;
                        const a = "fixed" === Ke(e).position;
                        let l = a ? Ye(e) : e;
                        for (; Le(l) && !qe(l); ) {
                          const t = Ke(l),
                            n = Ve(l);
                          (n || "fixed" !== t.position || (o = null),
                            (
                              a
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    o &&
                                    ("absolute" === o.position || "fixed" === o.position)) ||
                                  (Ae(l) && !n && st(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = Ye(l)));
                        }
                        return (t.set(e, r), r);
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = it(t, a[0], o);
            let i = l.top,
              s = l.right,
              u = l.bottom,
              c = l.left;
            for (let e = 1; e < a.length; e++) {
              const n = it(t, a[e], o);
              ((i = re(n.top, i)),
                (s = ne(n.right, s)),
                (u = ne(n.bottom, u)),
                (c = re(n.left, c)));
            }
            return { width: s - c, height: u - i, x: c, y: i };
          },
          getOffsetParent: ft,
          getElementRects: async function (e) {
            const t = this.getOffsetParent || ft,
              n = this.getDimensions,
              r = await n(e.floating);
            return {
              reference: ut(e.reference, await t(e.floating), e.strategy),
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
          isElement: Le,
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
                      placement: o,
                      middlewareData: a,
                      rects: l,
                      initialPlacement: i,
                      platform: s,
                      elements: u,
                    } = t,
                    {
                      mainAxis: c = !0,
                      crossAxis: d = !0,
                      fallbackPlacements: f,
                      fallbackStrategy: p = "bestFit",
                      fallbackAxisSideDirection: m = "none",
                      flipAlignment: h = !0,
                      ...g
                    } = ue(e, t);
                  if (null != (n = a.arrow) && n.alignmentOffset) return {};
                  const v = ce(o),
                    y = me(i),
                    b = ce(i) === i,
                    w = await (null == s.isRTL ? void 0 : s.isRTL(u.floating)),
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
                        const o = de(e);
                        let a = (function (e, t, n) {
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
                        })(ce(e), "start" === n, r);
                        return (
                          o && ((a = a.map((e) => e + "-" + o)), t && (a = a.concat(a.map(ge)))), a
                        );
                      })(i, h, m, w),
                    );
                  const S = [i, ...x],
                    E = await s.detectOverflow(t, g),
                    C = [];
                  let N = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                  if ((c && C.push(E[v]), d)) {
                    const e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      const r = de(e),
                        o = he(e),
                        a = pe(o);
                      let l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top";
                      return (t.reference[a] > t.floating[a] && (l = xe(l)), [l, xe(l)]);
                    })(o, l, w);
                    C.push(E[e[0]], E[e[1]]);
                  }
                  if (((N = [...N, { placement: o, overflows: C }]), !C.every((e) => e <= 0))) {
                    var _, z;
                    const e = ((null == (_ = a.flip) ? void 0 : _.index) || 0) + 1,
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
                      (z = N.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1],
                      )[0])
                        ? void 0
                        : z.placement;
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
                    if (o !== n) return { reset: { placement: n } };
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
                  placement: o,
                  rects: a,
                  platform: l,
                  elements: i,
                  middlewareData: s,
                } = t,
                { element: u, padding: c = 0 } = ue(e, t) || {};
              if (null == u) return {};
              const d = ke(c),
                f = { x: n, y: r },
                p = he(o),
                m = pe(p),
                h = await l.getDimensions(u),
                g = "y" === p,
                v = g ? "top" : "left",
                y = g ? "bottom" : "right",
                b = g ? "clientHeight" : "clientWidth",
                w = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
                x = f[p] - a.reference[p],
                k = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u));
              let S = k ? k[b] : 0;
              (S && (await (null == l.isElement ? void 0 : l.isElement(k)))) ||
                (S = i.floating[b] || a.floating[m]);
              const E = w / 2 - x / 2,
                C = S / 2 - h[m] / 2 - 1,
                N = ne(d[v], C),
                _ = ne(d[y], C),
                z = N,
                P = S - h[m] - _,
                T = S / 2 - h[m] / 2 + E,
                M = se(z, T, P),
                j =
                  !s.arrow &&
                  null != de(o) &&
                  T !== M &&
                  a.reference[m] / 2 - (T < z ? N : _) - h[m] / 2 < 0,
                R = j ? (T < z ? T - z : T - P) : 0;
              return {
                [p]: f[p] + R,
                data: { [p]: M, centerOffset: T - M - R, ...(j && { alignmentOffset: R }) },
                reset: j,
              };
            },
          }),
          vt = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  const { x: n, y: r, placement: o, rects: a, middlewareData: l } = t,
                    { offset: i = 0, mainAxis: s = !0, crossAxis: u = !0 } = ue(e, t),
                    c = { x: n, y: r },
                    d = me(o),
                    f = fe(d);
                  let p = c[f],
                    m = c[d];
                  const h = ue(i, t),
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
                  if (u) {
                    var v, y;
                    const e = "y" === f ? "width" : "height",
                      t = ze.has(ce(o)),
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
          yt = (e, t, n) => {
            const r = new Map(),
              o = { platform: pt, ...n },
              a = { ...o.platform, _c: r };
            return (async (e, t, n) => {
              const {
                  placement: r = "bottom",
                  strategy: o = "absolute",
                  middleware: a = [],
                  platform: l,
                } = n,
                i = l.detectOverflow ? l : { ...l, detectOverflow: Ce },
                s = await (null == l.isRTL ? void 0 : l.isRTL(t));
              let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
                { x: c, y: d } = Ee(u, r, s),
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
                    data: w,
                    reset: x,
                  } = await v({
                    x: c,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: m,
                    rects: u,
                    platform: i,
                    elements: { reference: e, floating: t },
                  });
                ((c = null != y ? y : c),
                  (d = null != b ? b : d),
                  (m[g] = { ...m[g], ...w }),
                  x &&
                    p < 50 &&
                    (p++,
                    "object" == typeof x &&
                      (x.placement && (f = x.placement),
                      x.rects &&
                        (u =
                          !0 === x.rects
                            ? await l.getElementRects({ reference: e, floating: t, strategy: o })
                            : x.rects),
                      ({ x: c, y: d } = Ee(u, f, s))),
                    (n = -1)));
              }
              return { x: c, y: d, placement: f, strategy: o, middlewareData: m };
            })(e, t, { ...o, platform: a });
          };
        var bt = "undefined" != typeof document ? r.useLayoutEffect : function () {};
        function wt(e, t) {
          if (e === t) return !0;
          if (typeof e != typeof t) return !1;
          if ("function" == typeof e && e.toString() === t.toString()) return !0;
          let n, r, o;
          if (e && t && "object" == typeof e) {
            if (Array.isArray(e)) {
              if (((n = e.length), n !== t.length)) return !1;
              for (r = n; 0 !== r--; ) if (!wt(e[r], t[r])) return !1;
              return !0;
            }
            if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
            for (r = n; 0 !== r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
            for (r = n; 0 !== r--; ) {
              const n = o[r];
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
                    const { x: o, y: a, placement: l, middlewareData: i } = t,
                      s = await (async function (e, t) {
                        const { placement: n, platform: r, elements: o } = e,
                          a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                          l = ce(n),
                          i = de(n),
                          s = "y" === me(n),
                          u = ze.has(l) ? -1 : 1,
                          c = a && s ? -1 : 1,
                          d = ue(t, e);
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
                          s ? { x: p * c, y: f * u } : { x: f * u, y: p * c }
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
          Ct = (e, t) => {
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
                        ...u
                      } = ue(e, t),
                      c = { x: n, y: r },
                      d = await a.detectOverflow(t, u),
                      f = me(ce(o)),
                      p = fe(f);
                    let m = c[p],
                      h = c[f];
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
          zt = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "size",
                  options: e,
                  async fn(t) {
                    var n, r;
                    const { placement: o, rects: a, platform: l, elements: i } = t,
                      { apply: s = () => {}, ...u } = ue(e, t),
                      c = await l.detectOverflow(t, u),
                      d = ce(o),
                      f = de(o),
                      p = "y" === me(o),
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
                    const y = h - c.top - c.bottom,
                      b = m - c.left - c.right,
                      w = ne(h - c[g], y),
                      x = ne(m - c[v], b),
                      k = !t.middlewareData.shift;
                    let S = w,
                      E = x;
                    if (
                      (null != (n = t.middlewareData.shift) && n.enabled.x && (E = b),
                      null != (r = t.middlewareData.shift) && r.enabled.y && (S = y),
                      k && !f)
                    ) {
                      const e = re(c.left, 0),
                        t = re(c.right, 0),
                        n = re(c.top, 0),
                        r = re(c.bottom, 0);
                      p
                        ? (E = m - 2 * (0 !== e || 0 !== t ? e + t : re(c.left, c.right)))
                        : (S = h - 2 * (0 !== n || 0 !== r ? n + r : re(c.top, c.bottom)));
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
                      { strategy: o = "referenceHidden", ...a } = ue(e, t);
                    switch (o) {
                      case "referenceHidden": {
                        const e = Ne(
                          await r.detectOverflow(t, { ...a, elementContext: "reference" }),
                          n.reference,
                        );
                        return { data: { referenceHiddenOffsets: e, referenceHidden: _e(e) } };
                      }
                      case "escaped": {
                        const e = Ne(
                          await r.detectOverflow(t, { ...a, altBoundary: !0 }),
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
          Tt = (e, t) => {
            const n = ((e) => ({
              name: "arrow",
              options: e,
              fn(t) {
                const { element: n, padding: r } = "function" == typeof e ? e(t) : e;
                return n && ((o = n), {}.hasOwnProperty.call(o, "current"))
                  ? null != n.current
                    ? gt({ element: n.current, padding: r }).fn(t)
                    : {}
                  : n
                    ? gt({ element: n, padding: r }).fn(t)
                    : {};
                var o;
              },
            }))(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          };
        var Mt = r.forwardRef((e, t) => {
          const { children: n, width: r = 10, height: o = 5, ...a } = e;
          return (0, R.jsx)($.svg, {
            ...a,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, R.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
        Mt.displayName = "Arrow";
        var jt = Mt,
          Rt = "Popper",
          [Lt, Ot] = L(Rt),
          [Dt, At] = Lt(Rt),
          It = (e) => {
            const { __scopePopper: t, children: n } = e,
              [o, a] = r.useState(null);
            return (0, R.jsx)(Dt, { scope: t, anchor: o, onAnchorChange: a, children: n });
          };
        It.displayName = Rt;
        var Ft = "PopperAnchor",
          Ht = r.forwardRef((e, t) => {
            const { __scopePopper: n, virtualRef: o, ...a } = e,
              l = At(Ft, n),
              i = r.useRef(null),
              s = j(t, i),
              u = r.useRef(null);
            return (
              r.useEffect(() => {
                const e = u.current;
                ((u.current = o?.current || i.current),
                  e !== u.current && l.onAnchorChange(u.current));
              }),
              o ? null : (0, R.jsx)($.div, { ...a, ref: s })
            );
          });
        Ht.displayName = Ft;
        var Bt = "PopperContent",
          [$t, Ut] = Lt(Bt),
          Vt = r.forwardRef((e, t) => {
            const {
                __scopePopper: n,
                side: o = "bottom",
                sideOffset: a = 0,
                align: l = "center",
                alignOffset: i = 0,
                arrowPadding: s = 0,
                avoidCollisions: u = !0,
                collisionBoundary: c = [],
                collisionPadding: d = 0,
                sticky: f = "partial",
                hideWhenDetached: p = !1,
                updatePositionStrategy: m = "optimized",
                onPlaced: h,
                ...g
              } = e,
              v = At(Bt, n),
              [y, b] = r.useState(null),
              w = j(t, (e) => b(e)),
              [x, k] = r.useState(null),
              S = (function (e) {
                const [t, n] = r.useState(void 0);
                return (
                  X(() => {
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
              })(x),
              E = S?.width ?? 0,
              C = S?.height ?? 0,
              N = o + ("center" !== l ? "-" + l : ""),
              _ = "number" == typeof d ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
              z = Array.isArray(c) ? c : [c],
              P = z.length > 0,
              T = { padding: _, boundary: z.filter(Qt), altBoundary: P },
              {
                refs: M,
                floatingStyles: L,
                placement: O,
                isPositioned: A,
                middlewareData: I,
              } = (function (e) {
                void 0 === e && (e = {});
                const {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: o = [],
                    platform: a,
                    elements: { reference: l, floating: i } = {},
                    transform: s = !0,
                    whileElementsMounted: u,
                    open: c,
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
                wt(p, o) || m(o);
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
                  N = null != u,
                  _ = St(u),
                  z = St(a),
                  P = St(c),
                  T = r.useCallback(() => {
                    if (!S.current || !E.current) return;
                    const e = { placement: t, strategy: n, middleware: p };
                    (z.current && (e.platform = z.current),
                      yt(S.current, E.current, e).then((e) => {
                        const t = { ...e, isPositioned: !1 !== P.current };
                        M.current &&
                          !wt(C.current, t) &&
                          ((C.current = t),
                          D.flushSync(() => {
                            f(t);
                          }));
                      }));
                  }, [p, t, n, z, P]);
                bt(() => {
                  !1 === c &&
                    C.current.isPositioned &&
                    ((C.current.isPositioned = !1), f((e) => ({ ...e, isPositioned: !1 })));
                }, [c]);
                const M = r.useRef(!1);
                (bt(
                  () => (
                    (M.current = !0),
                    () => {
                      M.current = !1;
                    }
                  ),
                  [],
                ),
                  bt(() => {
                    if ((x && (S.current = x), k && (E.current = k), x && k)) {
                      if (_.current) return _.current(x, k, T);
                      T();
                    }
                  }, [x, k, T, _, N]));
                const j = r.useMemo(
                    () => ({ reference: S, floating: E, setReference: b, setFloating: w }),
                    [b, w],
                  ),
                  R = r.useMemo(() => ({ reference: x, floating: k }), [x, k]),
                  L = r.useMemo(() => {
                    const e = { position: n, left: 0, top: 0 };
                    if (!R.floating) return e;
                    const t = kt(R.floating, d.x),
                      r = kt(R.floating, d.y);
                    return s
                      ? {
                          ...e,
                          transform: "translate(" + t + "px, " + r + "px)",
                          ...(xt(R.floating) >= 1.5 && { willChange: "transform" }),
                        }
                      : { position: n, left: t, top: r };
                  }, [n, s, R.floating, d.x, d.y]);
                return r.useMemo(
                  () => ({ ...d, update: T, refs: j, elements: R, floatingStyles: L }),
                  [d, T, j, R, L],
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
                      u = et(e),
                      c = o || a ? [...(u ? Xe(u) : []), ...(t ? Xe(t) : [])] : [];
                    c.forEach((e) => {
                      (o && e.addEventListener("scroll", n, { passive: !0 }),
                        a && e.addEventListener("resize", n));
                    });
                    const d =
                      u && i
                        ? (function (e, t) {
                            let n,
                              r = null;
                            const o = je(e);
                            function a() {
                              var e;
                              (clearTimeout(n), null == (e = r) || e.disconnect(), (r = null));
                            }
                            return (
                              (function l(i, s) {
                                (void 0 === i && (i = !1), void 0 === s && (s = 1), a());
                                const u = e.getBoundingClientRect(),
                                  { left: c, top: d, width: f, height: p } = u;
                                if ((i || t(), !f || !p)) return;
                                const m = {
                                  rootMargin:
                                    -ae(d) +
                                    "px " +
                                    -ae(o.clientWidth - (c + f)) +
                                    "px " +
                                    -ae(o.clientHeight - (d + p)) +
                                    "px " +
                                    -ae(c) +
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
                                  (1 !== r || mt(u, e.getBoundingClientRect()) || l(), (h = !1));
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
                          })(u, n)
                        : null;
                    let f,
                      p = -1,
                      m = null;
                    l &&
                      ((m = new ResizeObserver((e) => {
                        let [r] = e;
                        (r &&
                          r.target === u &&
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
                      u && !s && m.observe(u),
                      t && m.observe(t));
                    let h = s ? ot(e) : null;
                    return (
                      s &&
                        (function t() {
                          const r = ot(e);
                          (h && !mt(h, r) && n(), (h = r), (f = requestAnimationFrame(t)));
                        })(),
                      n(),
                      () => {
                        var e;
                        (c.forEach((e) => {
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
                  Et({ mainAxis: a + C, alignmentAxis: i }),
                  u &&
                    Ct({
                      mainAxis: !0,
                      crossAxis: !1,
                      limiter: "partial" === f ? Nt() : void 0,
                      ...T,
                    }),
                  u && _t({ ...T }),
                  zt({
                    ...T,
                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                      const { width: o, height: a } = t.reference,
                        l = e.floating.style;
                      (l.setProperty("--radix-popper-available-width", `${n}px`),
                        l.setProperty("--radix-popper-available-height", `${r}px`),
                        l.setProperty("--radix-popper-anchor-width", `${o}px`),
                        l.setProperty("--radix-popper-anchor-height", `${a}px`));
                    },
                  }),
                  x && Tt({ element: x, padding: s }),
                  Yt({ arrowWidth: E, arrowHeight: C }),
                  p && Pt({ strategy: "referenceHidden", ...T }),
                ],
              }),
              [F, H] = Gt(O),
              B = V(h);
            X(() => {
              A && B?.();
            }, [A, B]);
            const U = I.arrow?.x,
              W = I.arrow?.y,
              q = 0 !== I.arrow?.centerOffset,
              [K, Q] = r.useState();
            return (
              X(() => {
                y && Q(window.getComputedStyle(y).zIndex);
              }, [y]),
              (0, R.jsx)("div", {
                ref: M.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...L,
                  transform: A ? L.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: K,
                  "--radix-popper-transform-origin": [
                    I.transformOrigin?.x,
                    I.transformOrigin?.y,
                  ].join(" "),
                  ...(I.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
                },
                dir: e.dir,
                children: (0, R.jsx)($t, {
                  scope: n,
                  placedSide: F,
                  onArrowChange: k,
                  arrowX: U,
                  arrowY: W,
                  shouldHideArrow: q,
                  children: (0, R.jsx)($.div, {
                    "data-side": F,
                    "data-align": H,
                    ...g,
                    ref: w,
                    style: { ...g.style, animation: A ? void 0 : "none" },
                  }),
                }),
              })
            );
          });
        Vt.displayName = Bt;
        var Wt = "PopperArrow",
          qt = { top: "bottom", right: "left", bottom: "top", left: "right" },
          Kt = r.forwardRef(function (e, t) {
            const { __scopePopper: n, ...r } = e,
              o = Ut(Wt, n),
              a = qt[o.placedSide];
            return (0, R.jsx)("span", {
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
              children: (0, R.jsx)(jt, { ...r, ref: t, style: { ...r.style, display: "block" } }),
            });
          });
        function Qt(e) {
          return null !== e;
        }
        Kt.displayName = Wt;
        var Yt = (e) => ({
          name: "transformOrigin",
          options: e,
          fn(t) {
            const { placement: n, rects: r, middlewareData: o } = t,
              a = 0 !== o.arrow?.centerOffset,
              l = a ? 0 : e.arrowWidth,
              i = a ? 0 : e.arrowHeight,
              [s, u] = Gt(n),
              c = { start: "0%", center: "50%", end: "100%" }[u],
              d = (o.arrow?.x ?? 0) + l / 2,
              f = (o.arrow?.y ?? 0) + i / 2;
            let p = "",
              m = "";
            return (
              "bottom" === s
                ? ((p = a ? c : `${d}px`), (m = -i + "px"))
                : "top" === s
                  ? ((p = a ? c : `${d}px`), (m = `${r.floating.height + i}px`))
                  : "right" === s
                    ? ((p = -i + "px"), (m = a ? c : `${f}px`))
                    : "left" === s && ((p = `${r.floating.width + i}px`), (m = a ? c : `${f}px`)),
              { data: { x: p, y: m } }
            );
          },
        });
        function Gt(e) {
          const [t, n = "center"] = e.split("-");
          return [t, n];
        }
        var Xt = It,
          Zt = Ht,
          Jt = Vt,
          en = Kt,
          tn = r.forwardRef((e, t) => {
            const { container: n, ...o } = e,
              [a, l] = r.useState(!1);
            X(() => l(!0), []);
            const i = n || (a && globalThis?.document?.body);
            return i ? D.createPortal((0, R.jsx)($.div, { ...o, ref: t }), i) : null;
          });
        tn.displayName = "Portal";
        var nn = (e) => {
          const { present: t, children: n } = e,
            o = (function (e) {
              const [t, n] = r.useState(),
                o = r.useRef(null),
                a = r.useRef(e),
                l = r.useRef("none"),
                i = e ? "mounted" : "unmounted",
                [s, u] = (function (e, t) {
                  return r.useReducer((e, n) => t[e][n] ?? e, e);
                })(i, {
                  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                  unmounted: { MOUNT: "mounted" },
                });
              return (
                r.useEffect(() => {
                  const e = rn(o.current);
                  l.current = "mounted" === s ? e : "none";
                }, [s]),
                X(() => {
                  const t = o.current,
                    n = a.current;
                  if (n !== e) {
                    const r = l.current,
                      o = rn(t);
                    (u(
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
                }, [e, u]),
                X(() => {
                  if (t) {
                    let e;
                    const n = t.ownerDocument.defaultView ?? window,
                      r = (r) => {
                        const l = rn(o.current).includes(CSS.escape(r.animationName));
                        if (r.target === t && l && (u("ANIMATION_END"), !a.current)) {
                          const r = t.style.animationFillMode;
                          ((t.style.animationFillMode = "forwards"),
                            (e = n.setTimeout(() => {
                              "forwards" === t.style.animationFillMode &&
                                (t.style.animationFillMode = r);
                            })));
                        }
                      },
                      i = (e) => {
                        e.target === t && (l.current = rn(o.current));
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
                  u("ANIMATION_END");
                }, [t, u]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(s),
                  ref: r.useCallback((e) => {
                    ((o.current = e ? getComputedStyle(e) : null), n(e));
                  }, []),
                }
              );
            })(t),
            a = "function" == typeof n ? n({ present: o.isPresent }) : r.Children.only(n),
            l = j(
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
        function rn(e) {
          return e?.animationName || "none";
        }
        nn.displayName = "Presence";
        var on = o[" useInsertionEffect ".trim().toString()] || X;
        function an({ prop: e, defaultProp: t, onChange: n = () => {}, caller: o }) {
          const [a, l, i] = (function ({ defaultProp: e, onChange: t }) {
              const [n, o] = r.useState(e),
                a = r.useRef(n),
                l = r.useRef(t);
              return (
                on(() => {
                  l.current = t;
                }, [t]),
                r.useEffect(() => {
                  a.current !== n && (l.current?.(n), (a.current = n));
                }, [n, a]),
                [n, o, l]
              );
            })({ defaultProp: t, onChange: n }),
            s = void 0 !== e,
            u = s ? e : a;
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
          const c = r.useCallback(
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
          return [u, c];
        }
        Symbol("RADIX:SYNC_STATE");
        var ln = Object.freeze({
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
          sn = r.forwardRef((e, t) =>
            (0, R.jsx)($.span, { ...e, ref: t, style: { ...ln, ...e.style } }),
          );
        sn.displayName = "VisuallyHidden";
        var un = sn,
          [cn, dn] = L("Tooltip", [Ot]),
          fn = Ot(),
          pn = "TooltipProvider",
          mn = 700,
          hn = "tooltip.open",
          [gn, vn] = cn(pn),
          yn = (e) => {
            const {
                __scopeTooltip: t,
                delayDuration: n = mn,
                skipDelayDuration: o = 300,
                disableHoverableContent: a = !1,
                children: l,
              } = e,
              i = r.useRef(!0),
              s = r.useRef(!1),
              u = r.useRef(0);
            return (
              r.useEffect(() => {
                const e = u.current;
                return () => window.clearTimeout(e);
              }, []),
              (0, R.jsx)(gn, {
                scope: t,
                isOpenDelayedRef: i,
                delayDuration: n,
                onOpen: r.useCallback(() => {
                  (window.clearTimeout(u.current), (i.current = !1));
                }, []),
                onClose: r.useCallback(() => {
                  (window.clearTimeout(u.current),
                    (u.current = window.setTimeout(() => (i.current = !0), o)));
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
        yn.displayName = pn;
        var bn = "Tooltip",
          [wn, xn] = cn(bn),
          kn = (e) => {
            const {
                __scopeTooltip: t,
                children: n,
                open: o,
                defaultOpen: a,
                onOpenChange: l,
                disableHoverableContent: i,
                delayDuration: s,
              } = e,
              u = vn(bn, e.__scopeTooltip),
              c = fn(t),
              [d, f] = r.useState(null),
              p = ee(),
              m = r.useRef(0),
              h = i ?? u.disableHoverableContent,
              g = s ?? u.delayDuration,
              v = r.useRef(!1),
              [y, b] = an({
                prop: o,
                defaultProp: a ?? !1,
                onChange: (e) => {
                  (e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(hn))) : u.onClose(),
                    l?.(e));
                },
                caller: bn,
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
              (0, R.jsx)(Xt, {
                ...c,
                children: (0, R.jsx)(wn, {
                  scope: t,
                  contentId: p,
                  open: y,
                  stateAttribute: w,
                  trigger: d,
                  onTriggerChange: f,
                  onTriggerEnter: r.useCallback(() => {
                    u.isOpenDelayedRef.current ? S() : x();
                  }, [u.isOpenDelayedRef, S, x]),
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
        kn.displayName = bn;
        var Sn = "TooltipTrigger",
          En = r.forwardRef((e, t) => {
            const { __scopeTooltip: n, ...o } = e,
              a = xn(Sn, n),
              l = vn(Sn, n),
              i = fn(n),
              s = j(t, r.useRef(null), a.onTriggerChange),
              u = r.useRef(!1),
              c = r.useRef(!1),
              d = r.useCallback(() => (u.current = !1), []);
            return (
              r.useEffect(() => () => document.removeEventListener("pointerup", d), [d]),
              (0, R.jsx)(Zt, {
                asChild: !0,
                ...i,
                children: (0, R.jsx)($.button, {
                  "aria-describedby": a.open ? a.contentId : void 0,
                  "data-state": a.stateAttribute,
                  ...o,
                  ref: s,
                  onPointerMove: P(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType &&
                      (c.current ||
                        l.isPointerInTransitRef.current ||
                        (a.onTriggerEnter(), (c.current = !0)));
                  }),
                  onPointerLeave: P(e.onPointerLeave, () => {
                    (a.onTriggerLeave(), (c.current = !1));
                  }),
                  onPointerDown: P(e.onPointerDown, () => {
                    (a.open && a.onClose(),
                      (u.current = !0),
                      document.addEventListener("pointerup", d, { once: !0 }));
                  }),
                  onFocus: P(e.onFocus, () => {
                    u.current || a.onOpen();
                  }),
                  onBlur: P(e.onBlur, a.onClose),
                  onClick: P(e.onClick, a.onClose),
                }),
              })
            );
          });
        En.displayName = Sn;
        var Cn = "TooltipPortal",
          [Nn, _n] = cn(Cn, { forceMount: void 0 }),
          zn = (e) => {
            const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
              a = xn(Cn, t);
            return (0, R.jsx)(Nn, {
              scope: t,
              forceMount: n,
              children: (0, R.jsx)(nn, {
                present: n || a.open,
                children: (0, R.jsx)(tn, { asChild: !0, container: o, children: r }),
              }),
            });
          };
        zn.displayName = Cn;
        var Pn = "TooltipContent",
          Tn = r.forwardRef((e, t) => {
            const n = _n(Pn, e.__scopeTooltip),
              { forceMount: r = n.forceMount, side: o = "top", ...a } = e,
              l = xn(Pn, e.__scopeTooltip);
            return (0, R.jsx)(nn, {
              present: r || l.open,
              children: l.disableHoverableContent
                ? (0, R.jsx)(On, { side: o, ...a, ref: t })
                : (0, R.jsx)(Mn, { side: o, ...a, ref: t }),
            });
          }),
          Mn = r.forwardRef((e, t) => {
            const n = xn(Pn, e.__scopeTooltip),
              o = vn(Pn, e.__scopeTooltip),
              a = r.useRef(null),
              l = j(t, a),
              [i, s] = r.useState(null),
              { trigger: u, onClose: c } = n,
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
                if (u && d) {
                  const e = (e) => m(e, d),
                    t = (e) => m(e, u);
                  return (
                    u.addEventListener("pointerleave", e),
                    d.addEventListener("pointerleave", t),
                    () => {
                      (u.removeEventListener("pointerleave", e),
                        d.removeEventListener("pointerleave", t));
                    }
                  );
                }
              }, [u, d, m, p]),
              r.useEffect(() => {
                if (i) {
                  const e = (e) => {
                    const t = e.target,
                      n = { x: e.clientX, y: e.clientY },
                      r = u?.contains(t) || d?.contains(t),
                      o = !(function (e, t) {
                        const { x: n, y: r } = e;
                        let o = !1;
                        for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                          const l = t[e],
                            i = t[a],
                            s = l.x,
                            u = l.y,
                            c = i.x,
                            d = i.y;
                          u > r != d > r && n < ((c - s) * (r - u)) / (d - u) + s && (o = !o);
                        }
                        return o;
                      })(n, i);
                    r ? p() : o && (p(), c());
                  };
                  return (
                    document.addEventListener("pointermove", e),
                    () => document.removeEventListener("pointermove", e)
                  );
                }
              }, [u, d, i, c, p]),
              (0, R.jsx)(On, { ...e, ref: l })
            );
          }),
          [jn, Rn] = cn(bn, { isInside: !1 }),
          Ln = (function (e) {
            const t = ({ children: e }) => (0, R.jsx)(R.Fragment, { children: e });
            return ((t.displayName = `${e}.Slottable`), (t.__radixId = H), t);
          })("TooltipContent"),
          On = r.forwardRef((e, t) => {
            const {
                __scopeTooltip: n,
                children: o,
                "aria-label": a,
                onEscapeKeyDown: l,
                onPointerDownOutside: i,
                ...s
              } = e,
              u = xn(Pn, n),
              c = fn(n),
              { onClose: d } = u;
            return (
              r.useEffect(
                () => (document.addEventListener(hn, d), () => document.removeEventListener(hn, d)),
                [d],
              ),
              r.useEffect(() => {
                if (u.trigger) {
                  const e = (e) => {
                    const t = e.target;
                    t?.contains(u.trigger) && d();
                  };
                  return (
                    window.addEventListener("scroll", e, { capture: !0 }),
                    () => window.removeEventListener("scroll", e, { capture: !0 })
                  );
                }
              }, [u.trigger, d]),
              (0, R.jsx)(Q, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: i,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: d,
                children: (0, R.jsxs)(Jt, {
                  "data-state": u.stateAttribute,
                  ...c,
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
                    (0, R.jsx)(Ln, { children: o }),
                    (0, R.jsx)(jn, {
                      scope: n,
                      isInside: !0,
                      children: (0, R.jsx)(un, {
                        id: u.contentId,
                        role: "tooltip",
                        children: a || o,
                      }),
                    }),
                  ],
                }),
              })
            );
          });
        Tn.displayName = Pn;
        var Dn = "TooltipArrow",
          An = r.forwardRef((e, t) => {
            const { __scopeTooltip: n, ...r } = e,
              o = fn(n);
            return Rn(Dn, n).isInside ? null : (0, R.jsx)(en, { ...o, ...r, ref: t });
          });
        An.displayName = Dn;
        var In = yn,
          Fn = kn,
          Hn = En,
          Bn = zn,
          $n = Tn,
          Un = An;
        function Vn(e) {
          var t,
            n,
            r = "";
          if ("string" == typeof e || "number" == typeof e) r += e;
          else if ("object" == typeof e)
            if (Array.isArray(e)) {
              var o = e.length;
              for (t = 0; t < o; t++) e[t] && (n = Vn(e[t])) && (r && (r += " "), (r += n));
            } else for (n in e) e[n] && (r && (r += " "), (r += n));
          return r;
        }
        function Wn() {
          for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
            (e = arguments[n]) && (t = Vn(e)) && (r && (r += " "), (r += t));
          return r;
        }
        const qn = (e = new Map(), t = null, n) => ({
            nextPart: e,
            validators: t,
            classGroupId: n,
          }),
          Kn = "-",
          Qn = [],
          Yn = (e) => {
            const t = Zn(e),
              { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
            return {
              getClassGroupId: (e) => {
                if (e.startsWith("[") && e.endsWith("]")) return Xn(e);
                const n = e.split(Kn),
                  r = "" === n[0] && n.length > 1 ? 1 : 0;
                return Gn(n, r, t);
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
                    : o || Qn;
                }
                return n[e] || Qn;
              },
            };
          },
          Gn = (e, t, n) => {
            if (0 === e.length - t) return n.classGroupId;
            const r = e[t],
              o = n.nextPart.get(r);
            if (o) {
              const n = Gn(e, t + 1, o);
              if (n) return n;
            }
            const a = n.validators;
            if (null === a) return;
            const l = 0 === t ? e.join(Kn) : e.slice(t).join(Kn),
              i = a.length;
            for (let e = 0; e < i; e++) {
              const t = a[e];
              if (t.validator(l)) return t.classGroupId;
            }
          },
          Xn = (e) =>
            -1 === e.slice(1, -1).indexOf(":")
              ? void 0
              : (() => {
                  const t = e.slice(1, -1),
                    n = t.indexOf(":"),
                    r = t.slice(0, n);
                  return r ? "arbitrary.." + r : void 0;
                })(),
          Zn = (e) => {
            const { theme: t, classGroups: n } = e;
            return Jn(n, t);
          },
          Jn = (e, t) => {
            const n = qn();
            for (const r in e) {
              const o = e[r];
              er(o, n, r, t);
            }
            return n;
          },
          er = (e, t, n, r) => {
            const o = e.length;
            for (let a = 0; a < o; a++) {
              const o = e[a];
              tr(o, t, n, r);
            }
          },
          tr = (e, t, n, r) => {
            "string" != typeof e
              ? "function" != typeof e
                ? or(e, t, n, r)
                : rr(e, t, n, r)
              : nr(e, t, n);
          },
          nr = (e, t, n) => {
            ("" === e ? t : ar(t, e)).classGroupId = n;
          },
          rr = (e, t, n, r) => {
            lr(e)
              ? er(e(r), t, n, r)
              : (null === t.validators && (t.validators = []),
                t.validators.push(((e, t) => ({ classGroupId: e, validator: t }))(n, e)));
          },
          or = (e, t, n, r) => {
            const o = Object.entries(e),
              a = o.length;
            for (let e = 0; e < a; e++) {
              const [a, l] = o[e];
              er(l, ar(t, a), n, r);
            }
          },
          ar = (e, t) => {
            let n = e;
            const r = t.split(Kn),
              o = r.length;
            for (let e = 0; e < o; e++) {
              const t = r[e];
              let o = n.nextPart.get(t);
              (o || ((o = qn()), n.nextPart.set(t, o)), (n = o));
            }
            return n;
          },
          lr = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
          ir = (e) => {
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
          sr = [],
          ur = (e, t, n, r, o) => ({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o,
          }),
          cr = (e) => {
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
                u = !1;
              return (
                i.endsWith("!")
                  ? ((s = i.slice(0, -1)), (u = !0))
                  : i.startsWith("!") && ((s = i.slice(1)), (u = !0)),
                ur(t, u, s, n && n > a ? n - a : void 0)
              );
            };
            if (t) {
              const e = t + ":",
                n = r;
              r = (t) => (t.startsWith(e) ? n(t.slice(e.length)) : ur(sr, !1, t, void 0, !0));
            }
            if (n) {
              const e = r;
              r = (t) => n({ className: t, parseClassName: e });
            }
            return r;
          },
          dr = (e) => {
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
          fr = /\s+/,
          pr = (e) => {
            if ("string" == typeof e) return e;
            let t,
              n = "";
            for (let r = 0; r < e.length; r++)
              e[r] && (t = pr(e[r])) && (n && (n += " "), (n += t));
            return n;
          },
          mr = (e, ...t) => {
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
                  i = e.trim().split(fr);
                let s = "";
                for (let e = i.length - 1; e >= 0; e -= 1) {
                  const t = i[e],
                    {
                      isExternal: u,
                      modifiers: c,
                      hasImportantModifier: d,
                      baseClassName: f,
                      maybePostfixModifierPosition: p,
                    } = n(t);
                  if (u) {
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
                  const g = 0 === c.length ? "" : 1 === c.length ? c[0] : a(c).join(":"),
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
                    cache: ir(e.cacheSize),
                    parseClassName: cr(e),
                    sortModifiers: dr(e),
                    ...Yn(e),
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
                      (t = e[r++]) && (n = pr(t)) && (o && (o += " "), (o += n));
                    return o;
                  })(...e),
                )
            );
          },
          hr = [],
          gr = (e) => {
            const t = (t) => t[e] || hr;
            return ((t.isThemeGetter = !0), t);
          },
          vr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
          yr = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
          br = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
          wr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          xr =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          kr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
          Sr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
          Er =
            /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
          Cr = (e) => br.test(e),
          Nr = (e) => !!e && !Number.isNaN(Number(e)),
          _r = (e) => !!e && Number.isInteger(Number(e)),
          zr = (e) => e.endsWith("%") && Nr(e.slice(0, -1)),
          Pr = (e) => wr.test(e),
          Tr = () => !0,
          Mr = (e) => xr.test(e) && !kr.test(e),
          jr = () => !1,
          Rr = (e) => Sr.test(e),
          Lr = (e) => Er.test(e),
          Or = (e) => !Ar(e) && !Wr(e),
          Dr = (e) => Jr(e, ro, jr),
          Ar = (e) => vr.test(e),
          Ir = (e) => Jr(e, oo, Mr),
          Fr = (e) => Jr(e, ao, Nr),
          Hr = (e) => Jr(e, io, Tr),
          Br = (e) => Jr(e, lo, jr),
          $r = (e) => Jr(e, to, jr),
          Ur = (e) => Jr(e, no, Lr),
          Vr = (e) => Jr(e, so, Rr),
          Wr = (e) => yr.test(e),
          qr = (e) => eo(e, oo),
          Kr = (e) => eo(e, lo),
          Qr = (e) => eo(e, to),
          Yr = (e) => eo(e, ro),
          Gr = (e) => eo(e, no),
          Xr = (e) => eo(e, so, !0),
          Zr = (e) => eo(e, io, !0),
          Jr = (e, t, n) => {
            const r = vr.exec(e);
            return !!r && (r[1] ? t(r[1]) : n(r[2]));
          },
          eo = (e, t, n = !1) => {
            const r = yr.exec(e);
            return !!r && (r[1] ? t(r[1]) : n);
          },
          to = (e) => "position" === e || "percentage" === e,
          no = (e) => "image" === e || "url" === e,
          ro = (e) => "length" === e || "size" === e || "bg-size" === e,
          oo = (e) => "length" === e,
          ao = (e) => "number" === e,
          lo = (e) => "family-name" === e,
          io = (e) => "number" === e || "weight" === e,
          so = (e) => "shadow" === e,
          uo = mr(
            (Symbol.toStringTag,
            () => {
              const e = gr("color"),
                t = gr("font"),
                n = gr("text"),
                r = gr("font-weight"),
                o = gr("tracking"),
                a = gr("leading"),
                l = gr("breakpoint"),
                i = gr("container"),
                s = gr("spacing"),
                u = gr("radius"),
                c = gr("shadow"),
                d = gr("inset-shadow"),
                f = gr("text-shadow"),
                p = gr("drop-shadow"),
                m = gr("blur"),
                h = gr("perspective"),
                g = gr("aspect"),
                v = gr("ease"),
                y = gr("animate"),
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
                  Wr,
                  Ar,
                ],
                w = () => [Wr, Ar, s],
                x = () => [Cr, "full", "auto", ...w()],
                k = () => [_r, "none", "subgrid", Wr, Ar],
                S = () => ["auto", { span: ["full", _r, Wr, Ar] }, _r, Wr, Ar],
                E = () => [_r, "auto", Wr, Ar],
                C = () => ["auto", "min", "max", "fr", Wr, Ar],
                N = () => ["auto", ...w()],
                _ = () => [
                  Cr,
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
                z = () => [Cr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...w()],
                P = () => [
                  Cr,
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
                T = () => [e, Wr, Ar],
                M = () => [
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
                  Qr,
                  $r,
                  { position: [Wr, Ar] },
                ],
                j = () => ["auto", "cover", "contain", Yr, Dr, { size: [Wr, Ar] }],
                R = () => [zr, qr, Ir],
                L = () => ["", "none", "full", u, Wr, Ar],
                O = () => ["", Nr, qr, Ir],
                D = () => [Nr, zr, Qr, $r],
                A = () => ["", "none", m, Wr, Ar],
                I = () => ["none", Nr, Wr, Ar],
                F = () => ["none", Nr, Wr, Ar],
                H = () => [Nr, Wr, Ar],
                B = () => [Cr, "full", ...w()];
              return {
                cacheSize: 500,
                theme: {
                  animate: ["spin", "ping", "pulse", "bounce"],
                  aspect: ["video"],
                  blur: [Pr],
                  breakpoint: [Pr],
                  color: [Tr],
                  container: [Pr],
                  "drop-shadow": [Pr],
                  ease: ["in", "out", "in-out"],
                  font: [Or],
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
                  "inset-shadow": [Pr],
                  leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                  perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                  radius: [Pr],
                  shadow: [Pr],
                  spacing: ["px", Nr],
                  text: [Pr],
                  "text-shadow": [Pr],
                  tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
                },
                classGroups: {
                  aspect: [{ aspect: ["auto", "square", Cr, Ar, Wr, g] }],
                  container: ["container"],
                  columns: [{ columns: [Nr, Ar, Wr, i] }],
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
                  z: [{ z: [_r, "auto", Wr, Ar] }],
                  basis: [{ basis: [Cr, "full", "auto", i, ...w()] }],
                  "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                  "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
                  flex: [{ flex: [Nr, Cr, "auto", "initial", "none", Ar] }],
                  grow: [{ grow: ["", Nr, Wr, Ar] }],
                  shrink: [{ shrink: ["", Nr, Wr, Ar] }],
                  order: [{ order: [_r, "first", "last", "none", Wr, Ar] }],
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
                  "inline-size": [{ inline: ["auto", ...z()] }],
                  "min-inline-size": [{ "min-inline": ["auto", ...z()] }],
                  "max-inline-size": [{ "max-inline": ["none", ...z()] }],
                  "block-size": [{ block: ["auto", ...P()] }],
                  "min-block-size": [{ "min-block": ["auto", ...P()] }],
                  "max-block-size": [{ "max-block": ["none", ...P()] }],
                  w: [{ w: [i, "screen", ..._()] }],
                  "min-w": [{ "min-w": [i, "screen", "none", ..._()] }],
                  "max-w": [{ "max-w": [i, "screen", "none", "prose", { screen: [l] }, ..._()] }],
                  h: [{ h: ["screen", "lh", ..._()] }],
                  "min-h": [{ "min-h": ["screen", "lh", "none", ..._()] }],
                  "max-h": [{ "max-h": ["screen", "lh", ..._()] }],
                  "font-size": [{ text: ["base", n, qr, Ir] }],
                  "font-smoothing": ["antialiased", "subpixel-antialiased"],
                  "font-style": ["italic", "not-italic"],
                  "font-weight": [{ font: [r, Zr, Hr] }],
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
                        zr,
                        Ar,
                      ],
                    },
                  ],
                  "font-family": [{ font: [Kr, Br, t] }],
                  "font-features": [{ "font-features": [Ar] }],
                  "fvn-normal": ["normal-nums"],
                  "fvn-ordinal": ["ordinal"],
                  "fvn-slashed-zero": ["slashed-zero"],
                  "fvn-figure": ["lining-nums", "oldstyle-nums"],
                  "fvn-spacing": ["proportional-nums", "tabular-nums"],
                  "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                  tracking: [{ tracking: [o, Wr, Ar] }],
                  "line-clamp": [{ "line-clamp": [Nr, "none", Wr, Fr] }],
                  leading: [{ leading: [a, ...w()] }],
                  "list-image": [{ "list-image": ["none", Wr, Ar] }],
                  "list-style-position": [{ list: ["inside", "outside"] }],
                  "list-style-type": [{ list: ["disc", "decimal", "none", Wr, Ar] }],
                  "text-alignment": [
                    { text: ["left", "center", "right", "justify", "start", "end"] },
                  ],
                  "placeholder-color": [{ placeholder: T() }],
                  "text-color": [{ text: T() }],
                  "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                  "text-decoration-style": [
                    { decoration: ["solid", "dashed", "dotted", "double", "wavy"] },
                  ],
                  "text-decoration-thickness": [{ decoration: [Nr, "from-font", "auto", Wr, Ir] }],
                  "text-decoration-color": [{ decoration: T() }],
                  "underline-offset": [{ "underline-offset": [Nr, "auto", Wr, Ar] }],
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
                        Wr,
                        Ar,
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
                  content: [{ content: ["none", Wr, Ar] }],
                  "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                  "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                  "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                  "bg-position": [{ bg: M() }],
                  "bg-repeat": [
                    { bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
                  ],
                  "bg-size": [{ bg: j() }],
                  "bg-image": [
                    {
                      bg: [
                        "none",
                        {
                          linear: [
                            { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                            _r,
                            Wr,
                            Ar,
                          ],
                          radial: ["", Wr, Ar],
                          conic: [_r, Wr, Ar],
                        },
                        Gr,
                        Ur,
                      ],
                    },
                  ],
                  "bg-color": [{ bg: T() }],
                  "gradient-from-pos": [{ from: R() }],
                  "gradient-via-pos": [{ via: R() }],
                  "gradient-to-pos": [{ to: R() }],
                  "gradient-from": [{ from: T() }],
                  "gradient-via": [{ via: T() }],
                  "gradient-to": [{ to: T() }],
                  rounded: [{ rounded: L() }],
                  "rounded-s": [{ "rounded-s": L() }],
                  "rounded-e": [{ "rounded-e": L() }],
                  "rounded-t": [{ "rounded-t": L() }],
                  "rounded-r": [{ "rounded-r": L() }],
                  "rounded-b": [{ "rounded-b": L() }],
                  "rounded-l": [{ "rounded-l": L() }],
                  "rounded-ss": [{ "rounded-ss": L() }],
                  "rounded-se": [{ "rounded-se": L() }],
                  "rounded-ee": [{ "rounded-ee": L() }],
                  "rounded-es": [{ "rounded-es": L() }],
                  "rounded-tl": [{ "rounded-tl": L() }],
                  "rounded-tr": [{ "rounded-tr": L() }],
                  "rounded-br": [{ "rounded-br": L() }],
                  "rounded-bl": [{ "rounded-bl": L() }],
                  "border-w": [{ border: O() }],
                  "border-w-x": [{ "border-x": O() }],
                  "border-w-y": [{ "border-y": O() }],
                  "border-w-s": [{ "border-s": O() }],
                  "border-w-e": [{ "border-e": O() }],
                  "border-w-bs": [{ "border-bs": O() }],
                  "border-w-be": [{ "border-be": O() }],
                  "border-w-t": [{ "border-t": O() }],
                  "border-w-r": [{ "border-r": O() }],
                  "border-w-b": [{ "border-b": O() }],
                  "border-w-l": [{ "border-l": O() }],
                  "divide-x": [{ "divide-x": O() }],
                  "divide-x-reverse": ["divide-x-reverse"],
                  "divide-y": [{ "divide-y": O() }],
                  "divide-y-reverse": ["divide-y-reverse"],
                  "border-style": [
                    { border: ["solid", "dashed", "dotted", "double", "hidden", "none"] },
                  ],
                  "divide-style": [
                    { divide: ["solid", "dashed", "dotted", "double", "hidden", "none"] },
                  ],
                  "border-color": [{ border: T() }],
                  "border-color-x": [{ "border-x": T() }],
                  "border-color-y": [{ "border-y": T() }],
                  "border-color-s": [{ "border-s": T() }],
                  "border-color-e": [{ "border-e": T() }],
                  "border-color-bs": [{ "border-bs": T() }],
                  "border-color-be": [{ "border-be": T() }],
                  "border-color-t": [{ "border-t": T() }],
                  "border-color-r": [{ "border-r": T() }],
                  "border-color-b": [{ "border-b": T() }],
                  "border-color-l": [{ "border-l": T() }],
                  "divide-color": [{ divide: T() }],
                  "outline-style": [
                    { outline: ["solid", "dashed", "dotted", "double", "none", "hidden"] },
                  ],
                  "outline-offset": [{ "outline-offset": [Nr, Wr, Ar] }],
                  "outline-w": [{ outline: ["", Nr, qr, Ir] }],
                  "outline-color": [{ outline: T() }],
                  shadow: [{ shadow: ["", "none", c, Xr, Vr] }],
                  "shadow-color": [{ shadow: T() }],
                  "inset-shadow": [{ "inset-shadow": ["none", d, Xr, Vr] }],
                  "inset-shadow-color": [{ "inset-shadow": T() }],
                  "ring-w": [{ ring: O() }],
                  "ring-w-inset": ["ring-inset"],
                  "ring-color": [{ ring: T() }],
                  "ring-offset-w": [{ "ring-offset": [Nr, Ir] }],
                  "ring-offset-color": [{ "ring-offset": T() }],
                  "inset-ring-w": [{ "inset-ring": O() }],
                  "inset-ring-color": [{ "inset-ring": T() }],
                  "text-shadow": [{ "text-shadow": ["none", f, Xr, Vr] }],
                  "text-shadow-color": [{ "text-shadow": T() }],
                  opacity: [{ opacity: [Nr, Wr, Ar] }],
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
                  "mask-image-linear-pos": [{ "mask-linear": [Nr] }],
                  "mask-image-linear-from-pos": [{ "mask-linear-from": D() }],
                  "mask-image-linear-to-pos": [{ "mask-linear-to": D() }],
                  "mask-image-linear-from-color": [{ "mask-linear-from": T() }],
                  "mask-image-linear-to-color": [{ "mask-linear-to": T() }],
                  "mask-image-t-from-pos": [{ "mask-t-from": D() }],
                  "mask-image-t-to-pos": [{ "mask-t-to": D() }],
                  "mask-image-t-from-color": [{ "mask-t-from": T() }],
                  "mask-image-t-to-color": [{ "mask-t-to": T() }],
                  "mask-image-r-from-pos": [{ "mask-r-from": D() }],
                  "mask-image-r-to-pos": [{ "mask-r-to": D() }],
                  "mask-image-r-from-color": [{ "mask-r-from": T() }],
                  "mask-image-r-to-color": [{ "mask-r-to": T() }],
                  "mask-image-b-from-pos": [{ "mask-b-from": D() }],
                  "mask-image-b-to-pos": [{ "mask-b-to": D() }],
                  "mask-image-b-from-color": [{ "mask-b-from": T() }],
                  "mask-image-b-to-color": [{ "mask-b-to": T() }],
                  "mask-image-l-from-pos": [{ "mask-l-from": D() }],
                  "mask-image-l-to-pos": [{ "mask-l-to": D() }],
                  "mask-image-l-from-color": [{ "mask-l-from": T() }],
                  "mask-image-l-to-color": [{ "mask-l-to": T() }],
                  "mask-image-x-from-pos": [{ "mask-x-from": D() }],
                  "mask-image-x-to-pos": [{ "mask-x-to": D() }],
                  "mask-image-x-from-color": [{ "mask-x-from": T() }],
                  "mask-image-x-to-color": [{ "mask-x-to": T() }],
                  "mask-image-y-from-pos": [{ "mask-y-from": D() }],
                  "mask-image-y-to-pos": [{ "mask-y-to": D() }],
                  "mask-image-y-from-color": [{ "mask-y-from": T() }],
                  "mask-image-y-to-color": [{ "mask-y-to": T() }],
                  "mask-image-radial": [{ "mask-radial": [Wr, Ar] }],
                  "mask-image-radial-from-pos": [{ "mask-radial-from": D() }],
                  "mask-image-radial-to-pos": [{ "mask-radial-to": D() }],
                  "mask-image-radial-from-color": [{ "mask-radial-from": T() }],
                  "mask-image-radial-to-color": [{ "mask-radial-to": T() }],
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
                  "mask-image-conic-pos": [{ "mask-conic": [Nr] }],
                  "mask-image-conic-from-pos": [{ "mask-conic-from": D() }],
                  "mask-image-conic-to-pos": [{ "mask-conic-to": D() }],
                  "mask-image-conic-from-color": [{ "mask-conic-from": T() }],
                  "mask-image-conic-to-color": [{ "mask-conic-to": T() }],
                  "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
                  "mask-origin": [
                    { "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] },
                  ],
                  "mask-position": [{ mask: M() }],
                  "mask-repeat": [
                    { mask: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
                  ],
                  "mask-size": [{ mask: j() }],
                  "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
                  "mask-image": [{ mask: ["none", Wr, Ar] }],
                  filter: [{ filter: ["", "none", Wr, Ar] }],
                  blur: [{ blur: A() }],
                  brightness: [{ brightness: [Nr, Wr, Ar] }],
                  contrast: [{ contrast: [Nr, Wr, Ar] }],
                  "drop-shadow": [{ "drop-shadow": ["", "none", p, Xr, Vr] }],
                  "drop-shadow-color": [{ "drop-shadow": T() }],
                  grayscale: [{ grayscale: ["", Nr, Wr, Ar] }],
                  "hue-rotate": [{ "hue-rotate": [Nr, Wr, Ar] }],
                  invert: [{ invert: ["", Nr, Wr, Ar] }],
                  saturate: [{ saturate: [Nr, Wr, Ar] }],
                  sepia: [{ sepia: ["", Nr, Wr, Ar] }],
                  "backdrop-filter": [{ "backdrop-filter": ["", "none", Wr, Ar] }],
                  "backdrop-blur": [{ "backdrop-blur": A() }],
                  "backdrop-brightness": [{ "backdrop-brightness": [Nr, Wr, Ar] }],
                  "backdrop-contrast": [{ "backdrop-contrast": [Nr, Wr, Ar] }],
                  "backdrop-grayscale": [{ "backdrop-grayscale": ["", Nr, Wr, Ar] }],
                  "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Nr, Wr, Ar] }],
                  "backdrop-invert": [{ "backdrop-invert": ["", Nr, Wr, Ar] }],
                  "backdrop-opacity": [{ "backdrop-opacity": [Nr, Wr, Ar] }],
                  "backdrop-saturate": [{ "backdrop-saturate": [Nr, Wr, Ar] }],
                  "backdrop-sepia": [{ "backdrop-sepia": ["", Nr, Wr, Ar] }],
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
                        Wr,
                        Ar,
                      ],
                    },
                  ],
                  "transition-behavior": [{ transition: ["normal", "discrete"] }],
                  duration: [{ duration: [Nr, "initial", Wr, Ar] }],
                  ease: [{ ease: ["linear", "initial", v, Wr, Ar] }],
                  delay: [{ delay: [Nr, Wr, Ar] }],
                  animate: [{ animate: ["none", y, Wr, Ar] }],
                  backface: [{ backface: ["hidden", "visible"] }],
                  perspective: [{ perspective: [h, Wr, Ar] }],
                  "perspective-origin": [{ "perspective-origin": b() }],
                  rotate: [{ rotate: I() }],
                  "rotate-x": [{ "rotate-x": I() }],
                  "rotate-y": [{ "rotate-y": I() }],
                  "rotate-z": [{ "rotate-z": I() }],
                  scale: [{ scale: F() }],
                  "scale-x": [{ "scale-x": F() }],
                  "scale-y": [{ "scale-y": F() }],
                  "scale-z": [{ "scale-z": F() }],
                  "scale-3d": ["scale-3d"],
                  skew: [{ skew: H() }],
                  "skew-x": [{ "skew-x": H() }],
                  "skew-y": [{ "skew-y": H() }],
                  transform: [{ transform: [Wr, Ar, "", "none", "gpu", "cpu"] }],
                  "transform-origin": [{ origin: b() }],
                  "transform-style": [{ transform: ["3d", "flat"] }],
                  translate: [{ translate: B() }],
                  "translate-x": [{ "translate-x": B() }],
                  "translate-y": [{ "translate-y": B() }],
                  "translate-z": [{ "translate-z": B() }],
                  "translate-none": ["translate-none"],
                  accent: [{ accent: T() }],
                  appearance: [{ appearance: ["none", "auto"] }],
                  "caret-color": [{ caret: T() }],
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
                        Wr,
                        Ar,
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
                    { "will-change": ["auto", "scroll", "contents", "transform", Wr, Ar] },
                  ],
                  fill: [{ fill: ["none", ...T()] }],
                  "stroke-w": [{ stroke: [Nr, qr, Ir, Fr] }],
                  stroke: [{ stroke: ["none", ...T()] }],
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
        function co(...e) {
          return uo(Wn(e));
        }
        function fo(e) {
          const t = (0, l.c)(6);
          let n, r;
          t[0] !== e
            ? (({ delayDuration: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r))
            : ((n = t[1]), (r = t[2]));
          const o = void 0 === r ? 0 : r;
          let a;
          return (
            t[3] !== o || t[4] !== n
              ? ((a = (0, R.jsx)(In, { "data-slot": "tooltip-provider", delayDuration: o, ...n })),
                (t[3] = o),
                (t[4] = n),
                (t[5] = a))
              : (a = t[5]),
            a
          );
        }
        function po(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, R.jsx)(Fn, { "data-slot": "tooltip", ...n })), (t[2] = n), (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function mo(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, R.jsx)(Hn, { "data-slot": "tooltip-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function ho(e) {
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
          let s, u, c;
          return (
            t[5] !== r
              ? ((s = co(
                  "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  r,
                )),
                (t[5] = r),
                (t[6] = s))
              : (s = t[6]),
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, R.jsx)(Un, {
                  className:
                    "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground",
                })),
                (t[7] = u))
              : (u = t[7]),
            t[8] !== n || t[9] !== o || t[10] !== i || t[11] !== s
              ? ((c = (0, R.jsx)(Bn, {
                  children: (0, R.jsxs)($n, {
                    "data-slot": "tooltip-content",
                    sideOffset: i,
                    className: s,
                    ...o,
                    children: [n, u],
                  }),
                })),
                (t[8] = n),
                (t[9] = o),
                (t[10] = i),
                (t[11] = s),
                (t[12] = c))
              : (c = t[12]),
            c
          );
        }
        const go = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
          vo = Wn,
          yo = (e, t) => (n) => {
            var r;
            if (null == (null == t ? void 0 : t.variants))
              return vo(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            const { variants: o, defaultVariants: a } = t,
              l = Object.keys(o).map((e) => {
                const t = null == n ? void 0 : n[e],
                  r = null == a ? void 0 : a[e];
                if (null === t) return null;
                const l = go(t) || go(r);
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
            return vo(e, l, s, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
          },
          bo = yo(
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
        function wo(e) {
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
            u = void 0 === a ? "default" : a,
            c = void 0 !== i && i ? I : "button";
          let d, f;
          return (
            t[6] !== n || t[7] !== u || t[8] !== s
              ? ((d = co(bo({ variant: s, size: u, className: n }))),
                (t[6] = n),
                (t[7] = u),
                (t[8] = s),
                (t[9] = d))
              : (d = t[9]),
            t[10] !== c || t[11] !== r || t[12] !== u || t[13] !== d || t[14] !== s
              ? ((f = (0, R.jsx)(c, {
                  "data-slot": "button",
                  "data-variant": s,
                  "data-size": u,
                  className: d,
                  ...r,
                })),
                (t[10] = c),
                (t[11] = r),
                (t[12] = u),
                (t[13] = d),
                (t[14] = s),
                (t[15] = f))
              : (f = t[15]),
            f
          );
        }
        function xo(e) {
          const t = e + "CollectionProvider",
            [n, o] = L(t),
            [a, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
            i = (e) => {
              const { scope: t, children: n } = e,
                o = r.useRef(null),
                l = r.useRef(new Map()).current;
              return (0, R.jsx)(a, { scope: t, itemMap: l, collectionRef: o, children: n });
            };
          i.displayName = t;
          const s = e + "CollectionSlot",
            u = A(s),
            c = r.forwardRef((e, t) => {
              const { scope: n, children: r } = e,
                o = j(t, l(s, n).collectionRef);
              return (0, R.jsx)(u, { ref: o, children: r });
            });
          c.displayName = s;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            p = A(d),
            m = r.forwardRef((e, t) => {
              const { scope: n, children: o, ...a } = e,
                i = r.useRef(null),
                s = j(t, i),
                u = l(d, n);
              return (
                r.useEffect(
                  () => (
                    u.itemMap.set(i, { ref: i, ...a }),
                    () => {
                      u.itemMap.delete(i);
                    }
                  ),
                ),
                (0, R.jsx)(p, { [f]: "", ref: s, children: o })
              );
            });
          return (
            (m.displayName = d),
            [
              { Provider: i, Slot: c, ItemSlot: m },
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
        Map;
        var ko = r.createContext(void 0);
        function So(e) {
          const t = r.useContext(ko);
          return e || t || "ltr";
        }
        var Eo = 0;
        function Co() {
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
        var No = "focusScope.autoFocusOnMount",
          _o = "focusScope.autoFocusOnUnmount",
          zo = { bubbles: !1, cancelable: !0 },
          Po = r.forwardRef((e, t) => {
            const {
                loop: n = !1,
                trapped: o = !1,
                onMountAutoFocus: a,
                onUnmountAutoFocus: l,
                ...i
              } = e,
              [s, u] = r.useState(null),
              c = V(a),
              d = V(l),
              f = r.useRef(null),
              p = j(t, (e) => u(e)),
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
                    s.contains(t) ? (f.current = t) : Ro(f.current, { select: !0 });
                  },
                  t = function (e) {
                    if (m.paused || !s) return;
                    const t = e.relatedTarget;
                    null !== t && (s.contains(t) || Ro(f.current, { select: !0 }));
                  },
                  n = function (e) {
                    if (document.activeElement === document.body)
                      for (const t of e) t.removedNodes.length > 0 && Ro(s);
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
                  Lo.add(m);
                  const e = document.activeElement;
                  if (!s.contains(e)) {
                    const t = new CustomEvent(No, zo);
                    (s.addEventListener(No, c),
                      s.dispatchEvent(t),
                      t.defaultPrevented ||
                        ((function (e, { select: t = !1 } = {}) {
                          const n = document.activeElement;
                          for (const r of e)
                            if ((Ro(r, { select: t }), document.activeElement !== n)) return;
                        })(
                          To(s).filter((e) => "A" !== e.tagName),
                          { select: !0 },
                        ),
                        document.activeElement === e && Ro(s)));
                  }
                  return () => {
                    (s.removeEventListener(No, c),
                      setTimeout(() => {
                        const t = new CustomEvent(_o, zo);
                        (s.addEventListener(_o, d),
                          s.dispatchEvent(t),
                          t.defaultPrevented || Ro(e ?? document.body, { select: !0 }),
                          s.removeEventListener(_o, d),
                          Lo.remove(m));
                      }, 0));
                  };
                }
              }, [s, c, d, m]));
            const h = r.useCallback(
              (e) => {
                if (!n && !o) return;
                if (m.paused) return;
                const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                  r = document.activeElement;
                if (t && r) {
                  const t = e.currentTarget,
                    [o, a] = (function (e) {
                      const t = To(e);
                      return [Mo(t, e), Mo(t.reverse(), e)];
                    })(t);
                  o && a
                    ? e.shiftKey || r !== a
                      ? e.shiftKey && r === o && (e.preventDefault(), n && Ro(a, { select: !0 }))
                      : (e.preventDefault(), n && Ro(o, { select: !0 }))
                    : r === t && e.preventDefault();
                }
              },
              [n, o, m.paused],
            );
            return (0, R.jsx)($.div, { tabIndex: -1, ...i, ref: p, onKeyDown: h });
          });
        function To(e) {
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
        function Mo(e, t) {
          for (const n of e) if (!jo(n, { upTo: t })) return n;
        }
        function jo(e, { upTo: t }) {
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          for (; e; ) {
            if (void 0 !== t && e === t) return !1;
            if ("none" === getComputedStyle(e).display) return !0;
            e = e.parentElement;
          }
          return !1;
        }
        function Ro(e, { select: t = !1 } = {}) {
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
        Po.displayName = "FocusScope";
        var Lo = (function () {
          let e = [];
          return {
            add(t) {
              const n = e[0];
              (t !== n && n?.pause(), (e = Oo(e, t)), e.unshift(t));
            },
            remove(t) {
              ((e = Oo(e, t)), e[0]?.resume());
            },
          };
        })();
        function Oo(e, t) {
          const n = [...e],
            r = n.indexOf(t);
          return (-1 !== r && n.splice(r, 1), n);
        }
        var Do = "rovingFocusGroup.onEntryFocus",
          Ao = { bubbles: !1, cancelable: !0 },
          Io = "RovingFocusGroup",
          [Fo, Ho, Bo] = xo(Io),
          [$o, Uo] = L(Io, [Bo]),
          [Vo, Wo] = $o(Io),
          qo = r.forwardRef((e, t) =>
            (0, R.jsx)(Fo.Provider, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, R.jsx)(Fo.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, R.jsx)(Ko, { ...e, ref: t }),
              }),
            }),
          );
        qo.displayName = Io;
        var Ko = r.forwardRef((e, t) => {
            const {
                __scopeRovingFocusGroup: n,
                orientation: o,
                loop: a = !1,
                dir: l,
                currentTabStopId: i,
                defaultCurrentTabStopId: s,
                onCurrentTabStopIdChange: u,
                onEntryFocus: c,
                preventScrollOnEntryFocus: d = !1,
                ...f
              } = e,
              p = r.useRef(null),
              m = j(t, p),
              h = So(l),
              [g, v] = an({ prop: i, defaultProp: s ?? null, onChange: u, caller: Io }),
              [y, b] = r.useState(!1),
              w = V(c),
              x = Ho(n),
              k = r.useRef(!1),
              [S, E] = r.useState(0);
            return (
              r.useEffect(() => {
                const e = p.current;
                if (e) return (e.addEventListener(Do, w), () => e.removeEventListener(Do, w));
              }, [w]),
              (0, R.jsx)(Vo, {
                scope: n,
                orientation: o,
                dir: h,
                loop: a,
                currentTabStopId: g,
                onItemFocus: r.useCallback((e) => v(e), [v]),
                onItemShiftTab: r.useCallback(() => b(!0), []),
                onFocusableItemAdd: r.useCallback(() => E((e) => e + 1), []),
                onFocusableItemRemove: r.useCallback(() => E((e) => e - 1), []),
                children: (0, R.jsx)($.div, {
                  tabIndex: y || 0 === S ? -1 : 0,
                  "data-orientation": o,
                  ...f,
                  ref: m,
                  style: { outline: "none", ...e.style },
                  onMouseDown: P(e.onMouseDown, () => {
                    k.current = !0;
                  }),
                  onFocus: P(e.onFocus, (e) => {
                    const t = !k.current;
                    if (e.target === e.currentTarget && t && !y) {
                      const t = new CustomEvent(Do, Ao);
                      if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                        const e = x().filter((e) => e.focusable);
                        Xo(
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
          Qo = "RovingFocusGroupItem",
          Yo = r.forwardRef((e, t) => {
            const {
                __scopeRovingFocusGroup: n,
                focusable: o = !0,
                active: a = !1,
                tabStopId: l,
                children: i,
                ...s
              } = e,
              u = ee(),
              c = l || u,
              d = Wo(Qo, n),
              f = d.currentTabStopId === c,
              p = Ho(n),
              { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
            return (
              r.useEffect(() => {
                if (o) return (m(), () => h());
              }, [o, m, h]),
              (0, R.jsx)(Fo.ItemSlot, {
                scope: n,
                id: c,
                focusable: o,
                active: a,
                children: (0, R.jsx)($.span, {
                  tabIndex: f ? 0 : -1,
                  "data-orientation": d.orientation,
                  ...s,
                  ref: t,
                  onMouseDown: P(e.onMouseDown, (e) => {
                    o ? d.onItemFocus(c) : e.preventDefault();
                  }),
                  onFocus: P(e.onFocus, () => d.onItemFocus(c)),
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
                        : Go[r];
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
                      setTimeout(() => Xo(o));
                    }
                    var n, r;
                  }),
                  children:
                    "function" == typeof i ? i({ isCurrentTabStop: f, hasTabStop: null != g }) : i,
                }),
              })
            );
          });
        Yo.displayName = Qo;
        var Go = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last",
        };
        function Xo(e, t = !1) {
          const n = document.activeElement;
          for (const r of e) {
            if (r === n) return;
            if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
          }
        }
        var Zo = qo,
          Jo = Yo,
          ea = new WeakMap(),
          ta = new WeakMap(),
          na = {},
          ra = 0,
          oa = function (e) {
            return e && (e.host || oa(e.parentNode));
          },
          aa = function (e, t, n) {
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
                        var n = oa(t);
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
                  na[n] || (na[n] = new WeakMap());
                  var a = na[n],
                    l = [],
                    i = new Set(),
                    s = new Set(o),
                    u = function (e) {
                      e && !i.has(e) && (i.add(e), u(e.parentNode));
                    };
                  o.forEach(u);
                  var c = function (e) {
                    e &&
                      !s.has(e) &&
                      Array.prototype.forEach.call(e.children, function (e) {
                        if (i.has(e)) c(e);
                        else
                          try {
                            var t = e.getAttribute(r),
                              o = null !== t && "false" !== t,
                              s = (ea.get(e) || 0) + 1,
                              u = (a.get(e) || 0) + 1;
                            (ea.set(e, s),
                              a.set(e, u),
                              l.push(e),
                              1 === s && o && ta.set(e, !0),
                              1 === u && e.setAttribute(n, "true"),
                              o || e.setAttribute(r, "true"));
                          } catch (t) {
                            console.error("aria-hidden: cannot operate on ", e, t);
                          }
                      });
                  };
                  return (
                    c(t),
                    i.clear(),
                    ra++,
                    function () {
                      (l.forEach(function (e) {
                        var t = ea.get(e) - 1,
                          o = a.get(e) - 1;
                        (ea.set(e, t),
                          a.set(e, o),
                          t || (ta.has(e) || e.removeAttribute(r), ta.delete(e)),
                          o || e.removeAttribute(n));
                      }),
                        --ra ||
                          ((ea = new WeakMap()),
                          (ea = new WeakMap()),
                          (ta = new WeakMap()),
                          (na = {})));
                    }
                  );
                })(r, o, n, "aria-hidden"))
              : function () {
                  return null;
                };
          },
          la = function () {
            return (
              (la =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
              la.apply(this, arguments)
            );
          };
        function ia(e, t) {
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
        var sa = "right-scroll-bar-position",
          ua = "width-before-scroll-bar";
        function ca(e, t) {
          return ("function" == typeof e ? e(t) : e && (e.current = t), e);
        }
        var da = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
          fa = new WeakMap();
        function pa(e) {
          return e;
        }
        var ma = (function (e) {
            void 0 === e && (e = {});
            var t = (function (e, t) {
              void 0 === t && (t = pa);
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
            return ((t.options = la({ async: !0, ssr: !1 }, e)), t);
          })(),
          ha = function () {},
          ga = r.forwardRef(function (e, t) {
            var n = r.useRef(null),
              o = r.useState({ onScrollCapture: ha, onWheelCapture: ha, onTouchMoveCapture: ha }),
              a = o[0],
              l = o[1],
              i = e.forwardProps,
              s = e.children,
              u = e.className,
              c = e.removeScrollBar,
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
              x = ia(e, [
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
                        return ca(e, t);
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
                  da(
                    function () {
                      var t = fa.get(l);
                      if (t) {
                        var n = new Set(t),
                          r = new Set(e),
                          o = l.current;
                        (n.forEach(function (e) {
                          r.has(e) || ca(e, null);
                        }),
                          r.forEach(function (e) {
                            n.has(e) || ca(e, o);
                          }));
                      }
                      fa.set(l, e);
                    },
                    [e],
                  ),
                  l
                );
              })([n, t]),
              E = la(la({}, x), a);
            return r.createElement(
              r.Fragment,
              null,
              d &&
                r.createElement(k, {
                  sideCar: ma,
                  removeScrollBar: c,
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
                ? r.cloneElement(r.Children.only(s), la(la({}, E), { ref: S }))
                : r.createElement(b, la({}, E, { className: u, ref: S }), s),
            );
          });
        ((ga.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
          (ga.classNames = { fullWidth: ua, zeroRight: sa }));
        var va = function (e) {
          var t = e.sideCar,
            n = ia(e, ["sideCar"]);
          if (!t)
            throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var o = t.read();
          if (!o) throw new Error("Sidecar medium not found");
          return r.createElement(o, la({}, n));
        };
        va.isSideCarExport = !0;
        var ya = function () {
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
          ba = function () {
            var e,
              t =
                ((e = ya()),
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
          wa = { left: 0, top: 0, right: 0, gap: 0 },
          xa = function (e) {
            return parseInt(e || "", 10) || 0;
          },
          ka = ba(),
          Sa = "data-scroll-locked",
          Ea = function (e, t, n, r) {
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
                .concat(Sa, "] {\n    overflow: hidden ")
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
                .concat(sa, " {\n    right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(ua, " {\n    margin-right: ")
                .concat(i, "px ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(sa, " .")
                .concat(sa, " {\n    right: 0 ")
                .concat(r, ";\n  }\n  \n  .")
                .concat(ua, " .")
                .concat(ua, " {\n    margin-right: 0 ")
                .concat(r, ";\n  }\n  \n  body[")
                .concat(Sa, "] {\n    ")
                .concat("--removed-body-scroll-bar-size", ": ")
                .concat(i, "px;\n  }\n")
            );
          },
          Ca = function () {
            var e = parseInt(document.body.getAttribute(Sa) || "0", 10);
            return isFinite(e) ? e : 0;
          },
          Na = function (e) {
            var t = e.noRelative,
              n = e.noImportant,
              o = e.gapMode,
              a = void 0 === o ? "margin" : o;
            r.useEffect(function () {
              return (
                document.body.setAttribute(Sa, (Ca() + 1).toString()),
                function () {
                  var e = Ca() - 1;
                  e <= 0
                    ? document.body.removeAttribute(Sa)
                    : document.body.setAttribute(Sa, e.toString());
                }
              );
            }, []);
            var l = r.useMemo(
              function () {
                return (function (e) {
                  if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return wa;
                  var t = (function (e) {
                      var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                      return [xa(n), xa(r), xa(o)];
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
            return r.createElement(ka, { styles: Ea(l, !t, a, n ? "" : "!important") });
          },
          _a = !1;
        if ("undefined" != typeof window)
          try {
            var za = Object.defineProperty({}, "passive", {
              get: function () {
                return ((_a = !0), !0);
              },
            });
            (window.addEventListener("test", za, za), window.removeEventListener("test", za, za));
          } catch (e) {
            _a = !1;
          }
        var Pa = !!_a && { passive: !1 },
          Ta = function (e, t) {
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
          Ma = function (e, t) {
            var n = t.ownerDocument,
              r = t;
            do {
              if (
                ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
                ja(e, r))
              ) {
                var o = Ra(e, r);
                if (o[1] > o[2]) return !0;
              }
              r = r.parentNode;
            } while (r && r !== n.body);
            return !1;
          },
          ja = function (e, t) {
            return "v" === e
              ? (function (e) {
                  return Ta(e, "overflowY");
                })(t)
              : (function (e) {
                  return Ta(e, "overflowX");
                })(t);
          },
          Ra = function (e, t) {
            return "v" === e
              ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
              : (function (e) {
                  return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                })(t);
            var n;
          },
          La = function (e) {
            return "changedTouches" in e
              ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
              : [0, 0];
          },
          Oa = function (e) {
            return [e.deltaX, e.deltaY];
          },
          Da = function (e) {
            return e && "current" in e ? e.current : e;
          },
          Aa = function (e) {
            return "\n  .block-interactivity-"
              .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
              .concat(e, " {pointer-events: all;}\n");
          },
          Ia = 0,
          Fa = [];
        function Ha(e) {
          for (var t = null; null !== e; )
            (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
          return t;
        }
        const Ba =
          (($a = function (e) {
            var t = r.useRef([]),
              n = r.useRef([0, 0]),
              o = r.useRef(),
              a = r.useState(Ia++)[0],
              l = r.useState(ba)[0],
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
                    })([e.lockRef.current], (e.shards || []).map(Da), !0).filter(Boolean);
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
                  a = La(e),
                  l = n.current,
                  s = "deltaX" in e ? e.deltaX : l[0] - a[0],
                  u = "deltaY" in e ? e.deltaY : l[1] - a[1],
                  c = e.target,
                  d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === c.type) return !1;
                var f = window.getSelection(),
                  p = f && f.anchorNode;
                if (p && (p === c || p.contains(c))) return !1;
                var m = Ma(d, c);
                if (!m) return !0;
                if ((m ? (r = d) : ((r = "v" === d ? "h" : "v"), (m = Ma(d, c))), !m)) return !1;
                if ((!o.current && "changedTouches" in e && (s || u) && (o.current = r), !r))
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
                    u = a > 0,
                    c = 0,
                    d = 0;
                  do {
                    if (!l) break;
                    var f = Ra(e, l),
                      p = f[0],
                      m = f[1] - f[2] - o * p;
                    (p || m) && ja(e, l) && ((c += m), (d += p));
                    var h = l.parentNode;
                    l = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
                  } while ((!i && l !== document.body) || (i && (t.contains(l) || t === l)));
                  return (
                    ((u && (Math.abs(c) < 1 || !1)) || (!u && (Math.abs(d) < 1 || !1))) && (s = !0),
                    s
                  );
                })(h, t, e, "h" === h ? s : u);
              }, []),
              u = r.useCallback(function (e) {
                var n = e;
                if (Fa.length && Fa[Fa.length - 1] === l) {
                  var r = "deltaY" in n ? Oa(n) : La(n),
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
                      .map(Da)
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
              c = r.useCallback(function (e, n, r, o) {
                var a = { name: e, delta: n, target: r, should: o, shadowParent: Ha(r) };
                (t.current.push(a),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== a;
                    });
                  }, 1));
              }, []),
              d = r.useCallback(function (e) {
                ((n.current = La(e)), (o.current = void 0));
              }, []),
              f = r.useCallback(function (t) {
                c(t.type, Oa(t), t.target, s(t, e.lockRef.current));
              }, []),
              p = r.useCallback(function (t) {
                c(t.type, La(t), t.target, s(t, e.lockRef.current));
              }, []);
            r.useEffect(function () {
              return (
                Fa.push(l),
                e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                document.addEventListener("wheel", u, Pa),
                document.addEventListener("touchmove", u, Pa),
                document.addEventListener("touchstart", d, Pa),
                function () {
                  ((Fa = Fa.filter(function (e) {
                    return e !== l;
                  })),
                    document.removeEventListener("wheel", u, Pa),
                    document.removeEventListener("touchmove", u, Pa),
                    document.removeEventListener("touchstart", d, Pa));
                }
              );
            }, []);
            var m = e.removeScrollBar,
              h = e.inert;
            return r.createElement(
              r.Fragment,
              null,
              h ? r.createElement(l, { styles: Aa(a) }) : null,
              m ? r.createElement(Na, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
            );
          }),
          ma.useMedium($a),
          va);
        var $a,
          Ua = r.forwardRef(function (e, t) {
            return r.createElement(ga, la({}, e, { ref: t, sideCar: Ba }));
          });
        Ua.classNames = ga.classNames;
        const Va = Ua;
        var Wa = ["Enter", " "],
          qa = ["ArrowUp", "PageDown", "End"],
          Ka = ["ArrowDown", "PageUp", "Home", ...qa],
          Qa = { ltr: [...Wa, "ArrowRight"], rtl: [...Wa, "ArrowLeft"] },
          Ya = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
          Ga = "Menu",
          [Xa, Za, Ja] = xo(Ga),
          [el, tl] = L(Ga, [Ja, Ot, Uo]),
          nl = Ot(),
          rl = Uo(),
          [ol, al] = el(Ga),
          [ll, il] = el(Ga),
          sl = (e) => {
            const {
                __scopeMenu: t,
                open: n = !1,
                children: o,
                dir: a,
                onOpenChange: l,
                modal: i = !0,
              } = e,
              s = nl(t),
              [u, c] = r.useState(null),
              d = r.useRef(!1),
              f = V(l),
              p = So(a);
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
              (0, R.jsx)(Xt, {
                ...s,
                children: (0, R.jsx)(ol, {
                  scope: t,
                  open: n,
                  onOpenChange: f,
                  content: u,
                  onContentChange: c,
                  children: (0, R.jsx)(ll, {
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
        sl.displayName = Ga;
        var ul = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e,
            o = nl(n);
          return (0, R.jsx)(Zt, { ...o, ...r, ref: t });
        });
        ul.displayName = "MenuAnchor";
        var cl = "MenuPortal",
          [dl, fl] = el(cl, { forceMount: void 0 }),
          pl = (e) => {
            const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
              a = al(cl, t);
            return (0, R.jsx)(dl, {
              scope: t,
              forceMount: n,
              children: (0, R.jsx)(nn, {
                present: n || a.open,
                children: (0, R.jsx)(tn, { asChild: !0, container: o, children: r }),
              }),
            });
          };
        pl.displayName = cl;
        var ml = "MenuContent",
          [hl, gl] = el(ml),
          vl = r.forwardRef((e, t) => {
            const n = fl(ml, e.__scopeMenu),
              { forceMount: r = n.forceMount, ...o } = e,
              a = al(ml, e.__scopeMenu),
              l = il(ml, e.__scopeMenu);
            return (0, R.jsx)(Xa.Provider, {
              scope: e.__scopeMenu,
              children: (0, R.jsx)(nn, {
                present: r || a.open,
                children: (0, R.jsx)(Xa.Slot, {
                  scope: e.__scopeMenu,
                  children: l.modal
                    ? (0, R.jsx)(yl, { ...o, ref: t })
                    : (0, R.jsx)(bl, { ...o, ref: t }),
                }),
              }),
            });
          }),
          yl = r.forwardRef((e, t) => {
            const n = al(ml, e.__scopeMenu),
              o = r.useRef(null),
              a = j(t, o);
            return (
              r.useEffect(() => {
                const e = o.current;
                if (e) return aa(e);
              }, []),
              (0, R.jsx)(xl, {
                ...e,
                ref: a,
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
          bl = r.forwardRef((e, t) => {
            const n = al(ml, e.__scopeMenu);
            return (0, R.jsx)(xl, {
              ...e,
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            });
          }),
          wl = A("MenuContent.ScrollLock"),
          xl = r.forwardRef((e, t) => {
            const {
                __scopeMenu: n,
                loop: o = !1,
                trapFocus: a,
                onOpenAutoFocus: l,
                onCloseAutoFocus: i,
                disableOutsidePointerEvents: s,
                onEntryFocus: u,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: m,
                disableOutsideScroll: h,
                ...g
              } = e,
              v = al(ml, n),
              y = il(ml, n),
              b = nl(n),
              w = rl(n),
              x = Za(n),
              [k, S] = r.useState(null),
              E = r.useRef(null),
              C = j(t, E, v.onContentChange),
              N = r.useRef(0),
              _ = r.useRef(""),
              z = r.useRef(0),
              T = r.useRef(null),
              M = r.useRef("right"),
              L = r.useRef(0),
              O = h ? Va : r.Fragment,
              D = h ? { as: wl, allowPinchZoom: !0 } : void 0;
            (r.useEffect(() => () => window.clearTimeout(N.current), []),
              r.useEffect(() => {
                const e = document.querySelectorAll("[data-radix-focus-guard]");
                return (
                  document.body.insertAdjacentElement("afterbegin", e[0] ?? Co()),
                  document.body.insertAdjacentElement("beforeend", e[1] ?? Co()),
                  Eo++,
                  () => {
                    (1 === Eo &&
                      document
                        .querySelectorAll("[data-radix-focus-guard]")
                        .forEach((e) => e.remove()),
                      Eo--);
                  }
                );
              }, []));
            const A = r.useCallback(
              (e) =>
                M.current === T.current?.side &&
                (function (e, t) {
                  if (!t) return !1;
                  return (function (e, t) {
                    const { x: n, y: r } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const l = t[e],
                        i = t[a],
                        s = l.x,
                        u = l.y,
                        c = i.x,
                        d = i.y;
                      u > r != d > r && n < ((c - s) * (r - u)) / (d - u) + s && (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, t);
                })(e, T.current?.area),
              [],
            );
            return (0, R.jsx)(hl, {
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
              pointerGraceTimerRef: z,
              onPointerGraceIntentChange: r.useCallback((e) => {
                T.current = e;
              }, []),
              children: (0, R.jsx)(O, {
                ...D,
                children: (0, R.jsx)(Po, {
                  asChild: !0,
                  trapped: a,
                  onMountAutoFocus: P(l, (e) => {
                    (e.preventDefault(), E.current?.focus({ preventScroll: !0 }));
                  }),
                  onUnmountAutoFocus: i,
                  children: (0, R.jsx)(Q, {
                    asChild: !0,
                    disableOutsidePointerEvents: s,
                    onEscapeKeyDown: c,
                    onPointerDownOutside: d,
                    onFocusOutside: f,
                    onInteractOutside: p,
                    onDismiss: m,
                    children: (0, R.jsx)(Zo, {
                      asChild: !0,
                      ...w,
                      dir: y.dir,
                      orientation: "vertical",
                      loop: o,
                      currentTabStopId: k,
                      onCurrentTabStopIdChange: S,
                      onEntryFocus: P(u, (e) => {
                        y.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                      preventScrollOnEntryFocus: !0,
                      children: (0, R.jsx)(Jt, {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ql(v.open),
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
                                  ((_.current = t),
                                    window.clearTimeout(N.current),
                                    "" !== t && (N.current = window.setTimeout(() => e(""), 1e3)));
                                })(t),
                                  l && setTimeout(() => l.focus()));
                              })(e.key));
                          const o = E.current;
                          if (e.target !== o) return;
                          if (!Ka.includes(e.key)) return;
                          e.preventDefault();
                          const a = x()
                            .filter((e) => !e.disabled)
                            .map((e) => e.ref.current);
                          (qa.includes(e.key) && a.reverse(),
                            (function (e) {
                              const t = document.activeElement;
                              for (const n of e) {
                                if (n === t) return;
                                if ((n.focus(), document.activeElement !== t)) return;
                              }
                            })(a));
                        }),
                        onBlur: P(e.onBlur, (e) => {
                          e.currentTarget.contains(e.target) ||
                            (window.clearTimeout(N.current), (_.current = ""));
                        }),
                        onPointerMove: P(
                          e.onPointerMove,
                          Xl((e) => {
                            const t = e.target,
                              n = L.current !== e.clientX;
                            if (e.currentTarget.contains(t) && n) {
                              const t = e.clientX > L.current ? "right" : "left";
                              ((M.current = t), (L.current = e.clientX));
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
        vl.displayName = ml;
        var kl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, R.jsx)($.div, { role: "group", ...r, ref: t });
        });
        kl.displayName = "MenuGroup";
        var Sl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, R.jsx)($.div, { ...r, ref: t });
        });
        Sl.displayName = "MenuLabel";
        var El = "MenuItem",
          Cl = "menu.itemSelect",
          Nl = r.forwardRef((e, t) => {
            const { disabled: n = !1, onSelect: o, ...a } = e,
              l = r.useRef(null),
              i = il(El, e.__scopeMenu),
              s = gl(El, e.__scopeMenu),
              u = j(t, l),
              c = r.useRef(!1);
            return (0, R.jsx)(_l, {
              ...a,
              ref: u,
              disabled: n,
              onClick: P(e.onClick, () => {
                const e = l.current;
                if (!n && e) {
                  const t = new CustomEvent(Cl, { bubbles: !0, cancelable: !0 });
                  (e.addEventListener(Cl, (e) => o?.(e), { once: !0 }),
                    U(e, t),
                    t.defaultPrevented ? (c.current = !1) : i.onClose());
                }
              }),
              onPointerDown: (t) => {
                (e.onPointerDown?.(t), (c.current = !0));
              },
              onPointerUp: P(e.onPointerUp, (e) => {
                c.current || e.currentTarget?.click();
              }),
              onKeyDown: P(e.onKeyDown, (e) => {
                const t = "" !== s.searchRef.current;
                n ||
                  (t && " " === e.key) ||
                  (Wa.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
              }),
            });
          });
        Nl.displayName = El;
        var _l = r.forwardRef((e, t) => {
            const { __scopeMenu: n, disabled: o = !1, textValue: a, ...l } = e,
              i = gl(El, n),
              s = rl(n),
              u = r.useRef(null),
              c = j(t, u),
              [d, f] = r.useState(!1),
              [p, m] = r.useState("");
            return (
              r.useEffect(() => {
                const e = u.current;
                e && m((e.textContent ?? "").trim());
              }, [l.children]),
              (0, R.jsx)(Xa.ItemSlot, {
                scope: n,
                disabled: o,
                textValue: a ?? p,
                children: (0, R.jsx)(Jo, {
                  asChild: !0,
                  ...s,
                  focusable: !o,
                  children: (0, R.jsx)($.div, {
                    role: "menuitem",
                    "data-highlighted": d ? "" : void 0,
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    ...l,
                    ref: c,
                    onPointerMove: P(
                      e.onPointerMove,
                      Xl((e) => {
                        o
                          ? i.onItemLeave(e)
                          : (i.onItemEnter(e),
                            e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
                      }),
                    ),
                    onPointerLeave: P(
                      e.onPointerLeave,
                      Xl((e) => i.onItemLeave(e)),
                    ),
                    onFocus: P(e.onFocus, () => f(!0)),
                    onBlur: P(e.onBlur, () => f(!1)),
                  }),
                }),
              })
            );
          }),
          zl = r.forwardRef((e, t) => {
            const { checked: n = !1, onCheckedChange: r, ...o } = e;
            return (0, R.jsx)(Dl, {
              scope: e.__scopeMenu,
              checked: n,
              children: (0, R.jsx)(Nl, {
                role: "menuitemcheckbox",
                "aria-checked": Yl(n) ? "mixed" : n,
                ...o,
                ref: t,
                "data-state": Gl(n),
                onSelect: P(o.onSelect, () => r?.(!!Yl(n) || !n), { checkForDefaultPrevented: !1 }),
              }),
            });
          });
        zl.displayName = "MenuCheckboxItem";
        var Pl = "MenuRadioGroup",
          [Tl, Ml] = el(Pl, { value: void 0, onValueChange: () => {} }),
          jl = r.forwardRef((e, t) => {
            const { value: n, onValueChange: r, ...o } = e,
              a = V(r);
            return (0, R.jsx)(Tl, {
              scope: e.__scopeMenu,
              value: n,
              onValueChange: a,
              children: (0, R.jsx)(kl, { ...o, ref: t }),
            });
          });
        jl.displayName = Pl;
        var Rl = "MenuRadioItem",
          Ll = r.forwardRef((e, t) => {
            const { value: n, ...r } = e,
              o = Ml(Rl, e.__scopeMenu),
              a = n === o.value;
            return (0, R.jsx)(Dl, {
              scope: e.__scopeMenu,
              checked: a,
              children: (0, R.jsx)(Nl, {
                role: "menuitemradio",
                "aria-checked": a,
                ...r,
                ref: t,
                "data-state": Gl(a),
                onSelect: P(r.onSelect, () => o.onValueChange?.(n), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            });
          });
        Ll.displayName = Rl;
        var Ol = "MenuItemIndicator",
          [Dl, Al] = el(Ol, { checked: !1 }),
          Il = r.forwardRef((e, t) => {
            const { __scopeMenu: n, forceMount: r, ...o } = e,
              a = Al(Ol, n);
            return (0, R.jsx)(nn, {
              present: r || Yl(a.checked) || !0 === a.checked,
              children: (0, R.jsx)($.span, { ...o, ref: t, "data-state": Gl(a.checked) }),
            });
          });
        Il.displayName = Ol;
        var Fl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e;
          return (0, R.jsx)($.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...r,
            ref: t,
          });
        });
        Fl.displayName = "MenuSeparator";
        var Hl = r.forwardRef((e, t) => {
          const { __scopeMenu: n, ...r } = e,
            o = nl(n);
          return (0, R.jsx)(en, { ...o, ...r, ref: t });
        });
        Hl.displayName = "MenuArrow";
        var Bl = "MenuSub",
          [$l, Ul] = el(Bl),
          Vl = "MenuSubTrigger",
          Wl = r.forwardRef((e, t) => {
            const n = al(Vl, e.__scopeMenu),
              o = il(Vl, e.__scopeMenu),
              a = Ul(Vl, e.__scopeMenu),
              l = gl(Vl, e.__scopeMenu),
              i = r.useRef(null),
              { pointerGraceTimerRef: s, onPointerGraceIntentChange: u } = l,
              c = { __scopeMenu: e.__scopeMenu },
              d = r.useCallback(() => {
                (i.current && window.clearTimeout(i.current), (i.current = null));
              }, []);
            return (
              r.useEffect(() => d, [d]),
              r.useEffect(() => {
                const e = s.current;
                return () => {
                  (window.clearTimeout(e), u(null));
                };
              }, [s, u]),
              (0, R.jsx)(ul, {
                asChild: !0,
                ...c,
                children: (0, R.jsx)(_l, {
                  id: a.triggerId,
                  "aria-haspopup": "menu",
                  "aria-expanded": n.open,
                  "aria-controls": a.contentId,
                  "data-state": Ql(n.open),
                  ...e,
                  ref: M(t, a.onTriggerChange),
                  onClick: (t) => {
                    (e.onClick?.(t),
                      e.disabled ||
                        t.defaultPrevented ||
                        (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
                  },
                  onPointerMove: P(
                    e.onPointerMove,
                    Xl((t) => {
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
                    Xl((e) => {
                      d();
                      const t = n.content?.getBoundingClientRect();
                      if (t) {
                        const r = n.content?.dataset.side,
                          o = "right" === r,
                          a = o ? -5 : 5,
                          i = t[o ? "left" : "right"],
                          u = t[o ? "right" : "left"];
                        (l.onPointerGraceIntentChange({
                          area: [
                            { x: e.clientX + a, y: e.clientY },
                            { x: i, y: t.top },
                            { x: u, y: t.top },
                            { x: u, y: t.bottom },
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
                      (Qa[o.dir].includes(t.key) &&
                        (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()));
                  }),
                }),
              })
            );
          });
        Wl.displayName = Vl;
        var ql = "MenuSubContent",
          Kl = r.forwardRef((e, t) => {
            const n = fl(ml, e.__scopeMenu),
              { forceMount: o = n.forceMount, ...a } = e,
              l = al(ml, e.__scopeMenu),
              i = il(ml, e.__scopeMenu),
              s = Ul(ql, e.__scopeMenu),
              u = r.useRef(null),
              c = j(t, u);
            return (0, R.jsx)(Xa.Provider, {
              scope: e.__scopeMenu,
              children: (0, R.jsx)(nn, {
                present: o || l.open,
                children: (0, R.jsx)(Xa.Slot, {
                  scope: e.__scopeMenu,
                  children: (0, R.jsx)(xl, {
                    id: s.contentId,
                    "aria-labelledby": s.triggerId,
                    ...a,
                    ref: c,
                    align: "start",
                    side: "rtl" === i.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: (e) => {
                      (i.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault());
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
                        n = Ya[i.dir].includes(e.key);
                      t && n && (l.onOpenChange(!1), s.trigger?.focus(), e.preventDefault());
                    }),
                  }),
                }),
              }),
            });
          });
        function Ql(e) {
          return e ? "open" : "closed";
        }
        function Yl(e) {
          return "indeterminate" === e;
        }
        function Gl(e) {
          return Yl(e) ? "indeterminate" : e ? "checked" : "unchecked";
        }
        function Xl(e) {
          return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
        }
        Kl.displayName = ql;
        var Zl = sl,
          Jl = ul,
          ei = pl,
          ti = vl,
          ni = kl,
          ri = Sl,
          oi = Nl,
          ai = zl,
          li = jl,
          ii = Ll,
          si = Il,
          ui = Fl,
          ci = Hl,
          di = Wl,
          fi = Kl,
          pi = "DropdownMenu",
          [mi, hi] = L(pi, [tl]),
          gi = tl(),
          [vi, yi] = mi(pi),
          bi = (e) => {
            const {
                __scopeDropdownMenu: t,
                children: n,
                dir: o,
                open: a,
                defaultOpen: l,
                onOpenChange: i,
                modal: s = !0,
              } = e,
              u = gi(t),
              c = r.useRef(null),
              [d, f] = an({ prop: a, defaultProp: l ?? !1, onChange: i, caller: pi });
            return (0, R.jsx)(vi, {
              scope: t,
              triggerId: ee(),
              triggerRef: c,
              contentId: ee(),
              open: d,
              onOpenChange: f,
              onOpenToggle: r.useCallback(() => f((e) => !e), [f]),
              modal: s,
              children: (0, R.jsx)(Zl, {
                ...u,
                open: d,
                onOpenChange: f,
                dir: o,
                modal: s,
                children: n,
              }),
            });
          };
        bi.displayName = pi;
        var wi = "DropdownMenuTrigger",
          xi = r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
              a = yi(wi, n),
              l = gi(n);
            return (0, R.jsx)(Jl, {
              asChild: !0,
              ...l,
              children: (0, R.jsx)($.button, {
                type: "button",
                id: a.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": a.open,
                "aria-controls": a.open ? a.contentId : void 0,
                "data-state": a.open ? "open" : "closed",
                "data-disabled": r ? "" : void 0,
                disabled: r,
                ...o,
                ref: M(t, a.triggerRef),
                onPointerDown: P(e.onPointerDown, (e) => {
                  r ||
                    0 !== e.button ||
                    !1 !== e.ctrlKey ||
                    (a.onOpenToggle(), a.open || e.preventDefault());
                }),
                onKeyDown: P(e.onKeyDown, (e) => {
                  r ||
                    (["Enter", " "].includes(e.key) && a.onOpenToggle(),
                    "ArrowDown" === e.key && a.onOpenChange(!0),
                    ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
                }),
              }),
            });
          });
        xi.displayName = wi;
        var ki = (e) => {
          const { __scopeDropdownMenu: t, ...n } = e,
            r = gi(t);
          return (0, R.jsx)(ei, { ...r, ...n });
        };
        ki.displayName = "DropdownMenuPortal";
        var Si = "DropdownMenuContent",
          Ei = r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...o } = e,
              a = yi(Si, n),
              l = gi(n),
              i = r.useRef(!1);
            return (0, R.jsx)(ti, {
              id: a.contentId,
              "aria-labelledby": a.triggerId,
              ...l,
              ...o,
              ref: t,
              onCloseAutoFocus: P(e.onCloseAutoFocus, (e) => {
                (i.current || a.triggerRef.current?.focus(), (i.current = !1), e.preventDefault());
              }),
              onInteractOutside: P(e.onInteractOutside, (e) => {
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
        Ei.displayName = Si;
        var Ci = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = gi(n);
          return (0, R.jsx)(ni, { ...o, ...r, ref: t });
        });
        Ci.displayName = "DropdownMenuGroup";
        var Ni = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = gi(n);
          return (0, R.jsx)(ri, { ...o, ...r, ref: t });
        });
        Ni.displayName = "DropdownMenuLabel";
        var _i = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = gi(n);
          return (0, R.jsx)(oi, { ...o, ...r, ref: t });
        });
        ((_i.displayName = "DropdownMenuItem"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = gi(n);
            return (0, R.jsx)(ai, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuCheckboxItem"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = gi(n);
            return (0, R.jsx)(li, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuRadioGroup"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = gi(n);
            return (0, R.jsx)(ii, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuRadioItem"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = gi(n);
            return (0, R.jsx)(si, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuItemIndicator"));
        var zi = r.forwardRef((e, t) => {
          const { __scopeDropdownMenu: n, ...r } = e,
            o = gi(n);
          return (0, R.jsx)(ui, { ...o, ...r, ref: t });
        });
        ((zi.displayName = "DropdownMenuSeparator"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = gi(n);
            return (0, R.jsx)(ci, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuArrow"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = gi(n);
            return (0, R.jsx)(di, { ...o, ...r, ref: t });
          }).displayName = "DropdownMenuSubTrigger"),
          (r.forwardRef((e, t) => {
            const { __scopeDropdownMenu: n, ...r } = e,
              o = gi(n);
            return (0, R.jsx)(fi, {
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
        var Pi = bi,
          Ti = xi,
          Mi = ki,
          ji = Ei,
          Ri = Ci,
          Li = Ni,
          Oi = _i,
          Di = zi;
        function Ai(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, R.jsx)(Pi, { "data-slot": "dropdown-menu", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Ii(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, R.jsx)(Ti, { "data-slot": "dropdown-menu-trigger", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Fi(e) {
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
          let u, c;
          return (
            t[5] !== n
              ? ((u = co(
                  "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                  n,
                )),
                (t[5] = n),
                (t[6] = u))
              : (u = t[6]),
            t[7] !== i || t[8] !== r || t[9] !== s || t[10] !== u
              ? ((c = (0, R.jsx)(Mi, {
                  children: (0, R.jsx)(ji, {
                    "data-slot": "dropdown-menu-content",
                    sideOffset: s,
                    align: i,
                    className: u,
                    ...r,
                  }),
                })),
                (t[7] = i),
                (t[8] = r),
                (t[9] = s),
                (t[10] = u),
                (t[11] = c))
              : (c = t[11]),
            c
          );
        }
        function Hi(e) {
          const t = (0, l.c)(4);
          let n, r;
          return (
            t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
            t[2] !== n
              ? ((r = (0, R.jsx)(Ri, { "data-slot": "dropdown-menu-group", ...n })),
                (t[2] = n),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        function Bi(e) {
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
          let s, u;
          return (
            t[5] !== n
              ? ((s = co(
                  "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
                  n,
                )),
                (t[5] = n),
                (t[6] = s))
              : (s = t[6]),
            t[7] !== r || t[8] !== o || t[9] !== s || t[10] !== i
              ? ((u = (0, R.jsx)(Oi, {
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
                (t[11] = u))
              : (u = t[11]),
            u
          );
        }
        function $i(e) {
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
              ? ((a = co(
                  "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
                  n,
                )),
                (t[4] = n),
                (t[5] = a))
              : (a = t[5]),
            t[6] !== r || t[7] !== o || t[8] !== a
              ? ((i = (0, R.jsx)(Li, {
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
        function Ui(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = co("-mx-1 my-1 h-px bg-border", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)(Di, {
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
        const Vi = (0, r.createContext)({ isLoggedIn: !1, session: null, setSession: () => {} });
        function Wi(e) {
          const t = (0, l.c)(7),
            { children: n } = e,
            [o, a] = (0, r.useState)(null);
          let i, s, u;
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
              ? ((u =
                  null === o
                    ? { isLoggedIn: !1, session: null, setSession: a }
                    : { isLoggedIn: !0, session: o, setSession: a }),
                (t[2] = o),
                (t[3] = u))
              : (u = t[3]));
          const c = u;
          let d;
          return (
            t[4] !== n || t[5] !== c
              ? ((d = (0, R.jsx)(Vi.Provider, { value: c, children: n })),
                (t[4] = n),
                (t[5] = c),
                (t[6] = d))
              : (d = t[6]),
            d
          );
        }
        var qi = n(888);
        function Ki() {
          return () => {};
        }
        var Qi = "Avatar",
          [Yi, Gi] = L(Qi),
          [Xi, Zi] = Yi(Qi),
          Ji = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, ...o } = e,
              [a, l] = r.useState("idle");
            return (0, R.jsx)(Xi, {
              scope: n,
              imageLoadingStatus: a,
              onImageLoadingStatusChange: l,
              children: (0, R.jsx)($.span, { ...o, ref: t }),
            });
          });
        Ji.displayName = Qi;
        var es = "AvatarImage",
          ts = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, src: o, onLoadingStatusChange: a = () => {}, ...l } = e,
              i = Zi(es, n),
              s = (function (e, { referrerPolicy: t, crossOrigin: n }) {
                const o = (0, qi.useSyncExternalStore)(
                    Ki,
                    () => !0,
                    () => !1,
                  ),
                  a = r.useRef(null),
                  l = o ? (a.current || (a.current = new window.Image()), a.current) : null,
                  [i, s] = r.useState(() => os(l, e));
                return (
                  X(() => {
                    s(os(l, e));
                  }, [l, e]),
                  X(() => {
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
              u = V((e) => {
                (a(e), i.onImageLoadingStatusChange(e));
              });
            return (
              X(() => {
                "idle" !== s && u(s);
              }, [s, u]),
              "loaded" === s ? (0, R.jsx)($.img, { ...l, ref: t, src: o }) : null
            );
          });
        ts.displayName = es;
        var ns = "AvatarFallback",
          rs = r.forwardRef((e, t) => {
            const { __scopeAvatar: n, delayMs: o, ...a } = e,
              l = Zi(ns, n),
              [i, s] = r.useState(void 0 === o);
            return (
              r.useEffect(() => {
                if (void 0 !== o) {
                  const e = window.setTimeout(() => s(!0), o);
                  return () => window.clearTimeout(e);
                }
              }, [o]),
              i && "loaded" !== l.imageLoadingStatus ? (0, R.jsx)($.span, { ...a, ref: t }) : null
            );
          });
        function os(e, t) {
          return e
            ? t
              ? (e.src !== t && (e.src = t),
                e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
              : "error"
            : "idle";
        }
        rs.displayName = ns;
        var as = Ji,
          ls = ts,
          is = rs;
        function ss(e) {
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
              ? ((i = co(
                  "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
                  n,
                )),
                (t[4] = n),
                (t[5] = i))
              : (i = t[5]),
            t[6] !== r || t[7] !== a || t[8] !== i
              ? ((s = (0, R.jsx)(as, {
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
        function us(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = co("aspect-square size-full", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)(ls, { "data-slot": "avatar-image", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function cs(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = co(
                  "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)(is, { "data-slot": "avatar-fallback", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function ds(e) {
          const t = (0, l.c)(22);
          let n, r, o, a, i, s;
          t[0] !== e
            ? (({ size: i, isOrg: o, avatar: n, username: s, className: r, ...a } = e),
              (t[0] = e),
              (t[1] = n),
              (t[2] = r),
              (t[3] = o),
              (t[4] = a),
              (t[5] = i),
              (t[6] = s))
            : ((n = t[1]), (r = t[2]), (o = t[3]), (a = t[4]), (i = t[5]), (s = t[6]));
          const u = void 0 === i ? "default" : i,
            c = o ? "rounded-sm" : "rounded-full";
          let d, f, p, m, h;
          return (
            t[7] !== r || t[8] !== c
              ? ((d = co(c, r)), (t[7] = r), (t[8] = c), (t[9] = d))
              : (d = t[9]),
            t[10] !== n
              ? ((f = (0, R.jsx)(us, { src: n, className: "rounded-none" })),
                (t[10] = n),
                (t[11] = f))
              : (f = t[11]),
            t[12] !== s ? ((p = s.charAt(0)), (t[12] = s), (t[13] = p)) : (p = t[13]),
            t[14] !== p
              ? ((m = (0, R.jsx)(cs, { className: "rounded-none uppercase", children: p })),
                (t[14] = p),
                (t[15] = m))
              : (m = t[15]),
            t[16] !== a || t[17] !== u || t[18] !== d || t[19] !== f || t[20] !== m
              ? ((h = (0, R.jsxs)(ss, { size: u, className: d, ...a, children: [f, m] })),
                (t[16] = a),
                (t[17] = u),
                (t[18] = d),
                (t[19] = f),
                (t[20] = m),
                (t[21] = h))
              : (h = t[21]),
            h
          );
        }
        const fs = [
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
        function ps() {
          const e = (0, l.c)(37),
            { isLoggedIn: t, session: n } = (0, r.useContext)(Vi);
          let o, a;
          (e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, R.jsx)("div", {
                className:
                  "hidden size-9 shrink-0 items-center justify-center rounded-lg select-none sm:inline-flex",
                children: (0, R.jsx)("img", {
                  src: "/assets/icons/android-icon-512x512.png",
                  alt: "Chitter",
                }),
              })),
              (e[0] = o))
            : (o = e[0]),
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, R.jsxs)("div", {
                  className: "flex min-w-0 flex-row gap-4 max-sm:flex-1 sm:flex-col",
                  children: [
                    o,
                    (0, R.jsx)("div", {
                      className:
                        "flex min-w-0 flex-row items-center gap-0.5 max-sm:w-full max-sm:justify-between max-sm:px-1 sm:flex-col sm:justify-start sm:px-0",
                      children: fs.map(ms),
                    }),
                  ],
                })),
                (e[1] = a))
              : (a = e[1]));
          const i = !!t && n.isOrg,
            s = t ? `/api/avatar/${n.avatar}` : void 0,
            u = t ? n.username : "G";
          let c;
          e[2] !== i || e[3] !== s || e[4] !== u
            ? ((c = (0, R.jsx)(Ii, {
                asChild: !0,
                children: (0, R.jsx)(ds, { isOrg: i, avatar: s, username: u, className: "size-8" }),
              })),
              (e[2] = i),
              (e[3] = s),
              (e[4] = u),
              (e[5] = c))
            : (c = e[5]);
          const d = !!t && n.isOrg,
            f = t ? `/api/avatar/${n.avatar}` : void 0,
            p = t ? n.username : "G";
          let m;
          e[6] !== d || e[7] !== f || e[8] !== p
            ? ((m = (0, R.jsx)(ds, { isOrg: d, avatar: f, username: p, className: "size-8" })),
              (e[6] = d),
              (e[7] = f),
              (e[8] = p),
              (e[9] = m))
            : (m = e[9]);
          const h = t ? n.displayName : "Guest User";
          let g;
          e[10] !== h
            ? ((g = (0, R.jsx)("span", { className: "truncate font-medium", children: h })),
              (e[10] = h),
              (e[11] = g))
            : (g = e[11]);
          const v = t ? `@${n.username}` : "@guestuser";
          let y, b, w, x, S, P, T, M, j, L, O, D;
          return (
            e[12] !== v
              ? ((y = (0, R.jsx)("span", { className: "truncate text-xs", children: v })),
                (e[12] = v),
                (e[13] = y))
              : (y = e[13]),
            e[14] !== g || e[15] !== y
              ? ((b = (0, R.jsxs)("div", {
                  className: "grid flex-1 text-left text-sm leading-tight",
                  children: [g, y],
                })),
                (e[14] = g),
                (e[15] = y),
                (e[16] = b))
              : (b = e[16]),
            e[17] !== b || e[18] !== m
              ? ((w = (0, R.jsx)($i, {
                  className: "p-0 font-normal",
                  children: (0, R.jsxs)("div", {
                    className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                    children: [m, b],
                  }),
                })),
                (e[17] = b),
                (e[18] = m),
                (e[19] = w))
              : (w = e[19]),
            e[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, R.jsx)(Ui, {})), (e[20] = x))
              : (x = e[20]),
            e[21] !== t || e[22] !== n
              ? ((S =
                  (!t || "free" === n.plan) &&
                  (0, R.jsxs)(R.Fragment, {
                    children: [
                      (0, R.jsx)(Hi, {
                        children: (0, R.jsx)(Bi, {
                          asChild: !0,
                          children: (0, R.jsxs)("a", {
                            href: "/premium",
                            children: [(0, R.jsx)(k, {}), "Upgrade to Premium"],
                          }),
                        }),
                      }),
                      (0, R.jsx)(Ui, {}),
                    ],
                  })),
                (e[21] = t),
                (e[22] = n),
                (e[23] = S))
              : (S = e[23]),
            e[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((P = (0, R.jsxs)(Bi, { children: [(0, R.jsx)(E, {}), " Business"] })), (e[24] = P))
              : (P = e[24]),
            e[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = (0, R.jsxs)(Bi, { children: [(0, R.jsx)(C, {}), " Ads"] })), (e[25] = T))
              : (T = e[25]),
            e[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = (0, R.jsxs)(Hi, {
                  children: [
                    P,
                    T,
                    (0, R.jsx)(Bi, {
                      asChild: !0,
                      children: (0, R.jsxs)("a", {
                        href: "/settings",
                        children: [(0, R.jsx)(N, {}), " Settings & Privacy"],
                      }),
                    }),
                  ],
                })),
                (j = (0, R.jsx)(Ui, {})),
                (e[26] = M),
                (e[27] = j))
              : ((M = e[26]), (j = e[27])),
            e[28] !== t
              ? ((L = (0, R.jsx)(Bi, {
                  asChild: !0,
                  children: t
                    ? (0, R.jsxs)("a", {
                        href: "/auth/logout",
                        className: "flex items-center gap-2",
                        children: [(0, R.jsx)(_, {}), " Log out"],
                      })
                    : (0, R.jsxs)("a", {
                        href: "/auth/login",
                        className: "flex items-center gap-2",
                        children: [(0, R.jsx)(z, {}), " Log in"],
                      }),
                })),
                (e[28] = t),
                (e[29] = L))
              : (L = e[29]),
            e[30] !== w || e[31] !== S || e[32] !== L
              ? ((O = (0, R.jsxs)(Fi, {
                  className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                  side: "right",
                  align: "end",
                  sideOffset: 4,
                  children: [w, x, S, M, j, L],
                })),
                (e[30] = w),
                (e[31] = S),
                (e[32] = L),
                (e[33] = O))
              : (O = e[33]),
            e[34] !== O || e[35] !== c
              ? ((D = (0, R.jsxs)("div", {
                  className:
                    "flex shrink-0 flex-row items-center gap-4 overflow-y-hidden border-border p-4 max-sm:border-t sm:flex-col sm:px-2",
                  children: [
                    a,
                    (0, R.jsx)("div", {
                      className: "ml-auto sm:mt-auto",
                      children: (0, R.jsxs)(Ai, { children: [c, O] }),
                    }),
                  ],
                })),
                (e[34] = O),
                (e[35] = c),
                (e[36] = D))
              : (D = e[36]),
            D
          );
        }
        function ms(e) {
          return (0, R.jsxs)(
            po,
            {
              children: [
                (0, R.jsx)(mo, {
                  asChild: !0,
                  children: (0, R.jsx)(wo, {
                    variant: "ghost",
                    size: "icon-lg",
                    className: co(!e.showOnMobile && "hidden sm:inline-flex"),
                    asChild: !0,
                    children: (0, R.jsx)("a", {
                      href: e.href,
                      children: (0, R.jsx)(e.icon, { className: "size-5" }),
                    }),
                  }),
                }),
                (0, R.jsx)(ho, { side: "right", children: e.label }),
              ],
            },
            e.href,
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
              ? ((o = co(
                  "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)("textarea", { "data-slot": "textarea", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const gs = p("expand", [
            ["path", { d: "m15 15 6 6", key: "1s409w" }],
            ["path", { d: "m15 9 6-6", key: "ko1vev" }],
            ["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
            ["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
            ["path", { d: "M3 16v5h5", key: "1t08am" }],
            ["path", { d: "m3 21 6-6", key: "wwnumi" }],
            ["path", { d: "M3 8V3h5", key: "1ln10m" }],
            ["path", { d: "M9 9 3 3", key: "v551iv" }],
          ]),
          vs = p("history", [
            ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
            ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
            ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
          ]),
          ys = p("ghost", [
            ["path", { d: "M9 10h.01", key: "qbtxuw" }],
            ["path", { d: "M15 10h.01", key: "1qmjsl" }],
            [
              "path",
              {
                d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
                key: "uwwb07",
              },
            ],
          ]),
          bs = p("image", [
            [
              "rect",
              { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" },
            ],
            ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
            ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
          ]),
          ws = p("paintbrush", [
            ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
            [
              "path",
              {
                d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
                key: "18tc5c",
              },
            ],
            [
              "path",
              {
                d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
                key: "ytzfxy",
              },
            ],
          ]),
          xs = p("newspaper", [
            ["path", { d: "M15 18h-5", key: "95g1m2" }],
            ["path", { d: "M18 14h-8", key: "sponae" }],
            [
              "path",
              {
                d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
                key: "39pd36",
              },
            ],
            ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }],
          ]);
        function ks() {
          const e = (0, l.c)(34),
            { isLoggedIn: t } = (0, r.useContext)(Vi),
            [n, o] = (0, r.useState)(""),
            [a, i] = (0, r.useState)(!1);
          let s;
          e[0] !== n || e[1] !== t || e[2] !== a
            ? ((s = async function () {
                if (!t) return;
                const e = n.trim();
                if (!e) return;
                const r = await fetch("/api/myna/chats", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Credentials: "same-origin" },
                  body: JSON.stringify({
                    isPublic: !a,
                    content: e,
                    messageId: crypto.randomUUID(),
                  }),
                });
                if (!r.ok) return;
                const { _id: o } = await r.json();
                window.location.assign(`/myna?conversationId=${encodeURIComponent(String(o))}`);
              }),
              (e[0] = n),
              (e[1] = t),
              (e[2] = a),
              (e[3] = s))
            : (s = e[3]);
          const u = s;
          let c, d, f;
          (e[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, R.jsx)(gs, { className: "size-4" })), (e[4] = c))
            : (c = e[4]),
            e[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, R.jsxs)(wo, {
                  variant: "ghost",
                  type: "button",
                  children: [(0, R.jsx)(vs, { className: "size-4" }), "History"],
                })),
                (e[5] = d))
              : (d = e[5]),
            e[6] !== a ? ((f = () => i(!a)), (e[6] = a), (e[7] = f)) : (f = e[7]));
          const p = a && "text-primary hover:text-primary";
          let m, h, g, v;
          (e[8] !== p ? ((m = co(p)), (e[8] = p), (e[9] = m)) : (m = e[9]),
            e[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, R.jsx)(ys, { className: "size-4" })), (e[10] = h))
              : (h = e[10]),
            e[11] !== f || e[12] !== m
              ? ((g = (0, R.jsxs)("div", {
                  className: "flex flex-row items-center justify-between",
                  children: [
                    c,
                    (0, R.jsxs)("div", {
                      className: "flex flex-row items-center gap-2",
                      children: [
                        d,
                        (0, R.jsxs)(wo, {
                          variant: "ghost",
                          type: "button",
                          onClick: f,
                          className: m,
                          children: [h, "Private"],
                        }),
                      ],
                    }),
                  ],
                })),
                (e[11] = f),
                (e[12] = m),
                (e[13] = g))
              : (g = e[13]),
            e[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, R.jsxs)("div", {
                  className: "flex flex-row items-center gap-2",
                  children: [
                    (0, R.jsx)(b, { className: "size-8" }),
                    (0, R.jsx)("h1", {
                      className: "text-2xl font-bold md:text-4xl",
                      children: "Myna",
                    }),
                  ],
                })),
                (e[14] = v))
              : (v = e[14]));
          const y = !t;
          let w, x, k, S, E, C, N;
          return (
            e[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (e) => o(e.target.value)), (e[15] = w))
              : (w = e[15]),
            e[16] !== t || e[17] !== u
              ? ((x = (e) => {
                  if ("Enter" === e.key && !e.shiftKey) {
                    if ((e.preventDefault(), !t)) return;
                    u();
                  }
                }),
                (e[16] = t),
                (e[17] = u),
                (e[18] = x))
              : (x = e[18]),
            e[19] !== n || e[20] !== x || e[21] !== y
              ? ((k = (0, R.jsx)(hs, {
                  rows: 2,
                  placeholder: "Ask anything",
                  className: "max-h-24 max-w-full resize-none md:max-w-[80%]",
                  disabled: y,
                  value: n,
                  maxLength: 4096,
                  onChange: w,
                  onKeyDown: x,
                })),
                (e[19] = n),
                (e[20] = x),
                (e[21] = y),
                (e[22] = k))
              : (k = e[22]),
            e[23] !== a
              ? ((S = a
                  ? (0, R.jsx)("p", {
                      className: "text-sm wrap-break-word text-muted-foreground",
                      children:
                        "This chat won't appear for other users and will not be used to train models.",
                    })
                  : (0, R.jsxs)("div", {
                      className: "flex flex-row flex-wrap gap-2",
                      children: [
                        (0, R.jsxs)(wo, {
                          variant: "outline",
                          type: "button",
                          children: [(0, R.jsx)(bs, { className: "size-4" }), "Generate Images"],
                        }),
                        (0, R.jsxs)(wo, {
                          variant: "outline",
                          type: "button",
                          children: [(0, R.jsx)(ws, { className: "size-4" }), "Edit Image"],
                        }),
                        (0, R.jsxs)(wo, {
                          variant: "outline",
                          type: "button",
                          children: [(0, R.jsx)(xs, { className: "size-4" }), "Latest News"],
                        }),
                      ],
                    })),
                (e[23] = a),
                (e[24] = S))
              : (S = e[24]),
            e[25] !== k || e[26] !== S
              ? ((E = (0, R.jsxs)("div", {
                  className: "flex flex-1 flex-col items-center justify-center gap-4",
                  children: [v, k, S],
                })),
                (e[25] = k),
                (e[26] = S),
                (e[27] = E))
              : (E = e[27]),
            e[28] !== t
              ? ((C =
                  !t &&
                  (0, R.jsx)("div", {
                    className: "mx-auto w-full max-w-[80%] shrink-0 border-t border-border",
                    children: (0, R.jsxs)("p", {
                      className: "p-3 text-center text-sm text-muted-foreground",
                      children: [
                        (0, R.jsx)("a", {
                          href: "/auth/login",
                          className: "underline-offset-4 hover:underline",
                          children: "Log in",
                        }),
                        " ",
                        "to start chatting with Myna.",
                      ],
                    }),
                  })),
                (e[28] = t),
                (e[29] = C))
              : (C = e[29]),
            e[30] !== E || e[31] !== C || e[32] !== g
              ? ((N = (0, R.jsxs)(R.Fragment, { children: [g, E, C] })),
                (e[30] = E),
                (e[31] = C),
                (e[32] = g),
                (e[33] = N))
              : (N = e[33]),
            N
          );
        }
        function Ss(e) {
          const t = (0, l.c)(18),
            {
              messages: n,
              draft: r,
              setDraft: o,
              send: a,
              listRef: i,
              readOnly: s,
              isStreaming: u,
            } = e,
            c = void 0 !== s && s,
            d = void 0 !== u && u;
          let f, p, m, h;
          if (t[0] !== d || t[1] !== n) {
            let e;
            (t[3] !== d || t[4] !== n.length
              ? ((e = (e, t) => {
                  const r = "assistant" === e.role && d && t === n.length - 1;
                  return (0, R.jsx)(
                    "div",
                    {
                      className: co(
                        "max-w-[min(100%,28rem)] px-3 py-2",
                        "user" === e.role
                          ? "ml-auto rounded-lg bg-primary text-primary-foreground"
                          : "mr-auto",
                      ),
                      children: (0, R.jsxs)("span", {
                        className: "wrap-break-word whitespace-pre-wrap",
                        children: [
                          e.content,
                          r
                            ? (0, R.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "▍",
                              })
                            : null,
                        ],
                      }),
                    },
                    e.id,
                  );
                }),
                (t[3] = d),
                (t[4] = n.length),
                (t[5] = e))
              : (e = t[5]),
              (f = n.map(e)),
              (t[0] = d),
              (t[1] = n),
              (t[2] = f));
          } else f = t[2];
          return (
            t[6] !== i || t[7] !== f
              ? ((p = (0, R.jsx)("div", {
                  ref: i,
                  className:
                    "mx-auto no-scrollbar min-h-0 w-full max-w-full flex-1 space-y-4 overflow-y-auto md:max-w-[80%]",
                  children: f,
                })),
                (t[6] = i),
                (t[7] = f),
                (t[8] = p))
              : (p = t[8]),
            t[9] !== r || t[10] !== d || t[11] !== c || t[12] !== a || t[13] !== o
              ? ((m = (0, R.jsx)("div", {
                  className:
                    "mx-auto w-full max-w-full shrink-0 border-t border-border md:max-w-[80%]",
                  children: c
                    ? (0, R.jsxs)("p", {
                        className: "p-3 text-center text-sm text-muted-foreground",
                        children: [
                          (0, R.jsx)("a", {
                            href: "/auth/login",
                            className: "underline-offset-4 hover:underline",
                            children: "Log in",
                          }),
                          " ",
                          "as the owner to continue chatting.",
                        ],
                      })
                    : (0, R.jsx)(hs, {
                        value: r,
                        maxLength: 4096,
                        onChange: (e) => o(e.target.value),
                        onKeyDown: (e) => {
                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), a());
                        },
                        placeholder: "Ask anything",
                        rows: 2,
                        disabled: d,
                        className: "max-h-24 resize-none",
                      }),
                })),
                (t[9] = r),
                (t[10] = d),
                (t[11] = c),
                (t[12] = a),
                (t[13] = o),
                (t[14] = m))
              : (m = t[14]),
            t[15] !== p || t[16] !== m
              ? ((h = (0, R.jsxs)(R.Fragment, { children: [p, m] })),
                (t[15] = p),
                (t[16] = m),
                (t[17] = h))
              : (h = t[17]),
            h
          );
        }
        function Es(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = co(
                  "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)("div", { "data-slot": "empty", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function Cs(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = co("flex max-w-sm flex-col items-center gap-2", n)), (t[3] = n), (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)("div", { "data-slot": "empty-header", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const Ns = yo(
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
        function _s(e) {
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
              ? ((i = co(Ns({ variant: a, className: n }))), (t[4] = n), (t[5] = a), (t[6] = i))
              : (i = t[6]),
            t[7] !== r || t[8] !== i || t[9] !== a
              ? ((s = (0, R.jsx)("div", {
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
        function zs(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = co("cn-font-heading text-sm font-medium tracking-tight", n)),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)("div", { "data-slot": "empty-title", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        function Ps(e) {
          const t = (0, l.c)(8);
          let n, r, o, a;
          return (
            t[0] !== e
              ? (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r))
              : ((n = t[1]), (r = t[2])),
            t[3] !== n
              ? ((o = co(
                  "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
                  n,
                )),
                (t[3] = n),
                (t[4] = o))
              : (o = t[4]),
            t[5] !== r || t[6] !== o
              ? ((a = (0, R.jsx)("div", { "data-slot": "empty-description", className: o, ...r })),
                (t[5] = r),
                (t[6] = o),
                (t[7] = a))
              : (a = t[7]),
            a
          );
        }
        const Ts = p("lock", [
            [
              "rect",
              { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" },
            ],
            ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
          ]),
          Ms = p("message-circle-x", [
            [
              "path",
              {
                d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
                key: "1sd12s",
              },
            ],
            ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
            ["path", { d: "m9 9 6 6", key: "z0biqf" }],
          ]),
          js = p("arrow-left", [
            ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
            ["path", { d: "M19 12H5", key: "x3x0zl" }],
          ]),
          Rs = p("share", [
            ["path", { d: "M12 2v13", key: "1km8f5" }],
            ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
            ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
          ]),
          Ls = p("square-pen", [
            [
              "path",
              { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" },
            ],
            [
              "path",
              {
                d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
                key: "ohrbg2",
              },
            ],
          ]),
          Os = Array(12).fill(0),
          Ds = ({ visible: e, className: t }) =>
            r.createElement(
              "div",
              {
                className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
                "data-visible": e,
              },
              r.createElement(
                "div",
                { className: "sonner-spinner" },
                Os.map((e, t) =>
                  r.createElement("div", {
                    className: "sonner-loading-bar",
                    key: `spinner-bar-${t}`,
                  }),
                ),
              ),
            ),
          As = r.createElement(
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
          Is = r.createElement(
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
          Fs = r.createElement(
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
          Hs = r.createElement(
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
          Bs = r.createElement(
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
        let $s = 1;
        const Us = new (class {
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
                        : $s++,
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
                        else if (Vs(e) && !e.ok) {
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
                  const n = (null == t ? void 0 : t.id) || $s++;
                  return (this.create({ jsx: e(n), id: n, ...t }), n);
                }),
                (this.getActiveToasts = () =>
                  this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set()));
            }
          })(),
          Vs = (e) =>
            e &&
            "object" == typeof e &&
            "ok" in e &&
            "boolean" == typeof e.ok &&
            "status" in e &&
            "number" == typeof e.status,
          Ws = Object.assign(
            (e, t) => {
              const n = (null == t ? void 0 : t.id) || $s++;
              return (Us.addToast({ title: e, ...t, id: n }), n);
            },
            {
              success: Us.success,
              info: Us.info,
              warning: Us.warning,
              error: Us.error,
              custom: Us.custom,
              message: Us.message,
              promise: Us.promise,
              dismiss: Us.dismiss,
              loading: Us.loading,
            },
            { getHistory: () => Us.toasts, getToasts: () => Us.getActiveToasts() },
          );
        function qs(e) {
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
        const Ks = 3,
          Qs = 14;
        function Ys(...e) {
          return e.filter(Boolean).join(" ");
        }
        const Gs = (e) => {
          var t, n, o, a, l, i, s, u, c;
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
              descriptionClassName: z = "",
              duration: P,
              position: T,
              gap: M,
              expandByDefault: j,
              classNames: R,
              icons: L,
              closeButtonAriaLabel: O = "Close toast",
            } = e,
            [D, A] = r.useState(null),
            [I, F] = r.useState(null),
            [H, B] = r.useState(!1),
            [$, U] = r.useState(!1),
            [V, W] = r.useState(!1),
            [q, K] = r.useState(!1),
            [Q, Y] = r.useState(!1),
            [G, X] = r.useState(0),
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
            ue = r.useMemo(() => v.findIndex((e) => e.toastId === f.id) || 0, [v, f.id]),
            ce = r.useMemo(() => {
              var e;
              return null != (e = f.closeButton) ? e : S;
            }, [f.closeButton, S]),
            de = r.useMemo(() => f.duration || P || 4e3, [f.duration, P]),
            fe = r.useRef(0),
            pe = r.useRef(0),
            me = r.useRef(0),
            he = r.useRef(null),
            [ge, ve] = T.split("-"),
            ye = r.useMemo(() => v.reduce((e, t, n) => (n >= ue ? e : e + t.height), 0), [v, ue]),
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
            xe = "loading" === ae;
          ((pe.current = r.useMemo(() => ue * M + ye, [ue, ye])),
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
                x(f);
              }, 200));
          }, [f, x, h, pe]);
          (r.useEffect(() => {
            if ((f.promise && "loading" === ae) || f.duration === 1 / 0 || "loading" === f.type)
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
          }, [w, m, f, ae, be, ke]),
            r.useEffect(() => {
              f.delete && (ke(), null == f.onDismiss || f.onDismiss.call(f, f));
            }, [ke, f.delete]));
          const Se =
            f.icon ||
            (null == L ? void 0 : L[ae]) ||
            ((e) => {
              switch (e) {
                case "success":
                  return As;
                case "info":
                  return Fs;
                case "warning":
                  return Is;
                case "error":
                  return Hs;
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
              className: Ys(
                _,
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
              "data-removed": $,
              "data-visible": oe,
              "data-y-position": ge,
              "data-x-position": ve,
              "data-index": y,
              "data-front": re,
              "data-swiping": V,
              "data-dismissible": le,
              "data-type": ae,
              "data-invert": we,
              "data-swipe-out": q,
              "data-swipe-direction": I,
              "data-expanded": Boolean(w || (j && H)),
              "data-testid": f.testId,
              style: {
                "--index": y,
                "--toasts-before": y,
                "--z-index": b.length - y,
                "--offset": `${$ ? G : pe.current}px`,
                "--initial-height": j ? "auto" : `${Z}px`,
                ...E,
                ...f.style,
              },
              onDragEnd: () => {
                (W(!1), A(null), (he.current = null));
              },
              onPointerDown: (e) => {
                2 !== e.button &&
                  !xe &&
                  le &&
                  ((te.current = new Date()),
                  X(pe.current),
                  e.target.setPointerCapture(e.pointerId),
                  "BUTTON" !== e.target.tagName &&
                    (W(!0), (he.current = { x: e.clientX, y: e.clientY })));
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
                    F("x" === D ? (r > 0 ? "right" : "left") : o > 0 ? "down" : "up"),
                    ke(),
                    void K(!0)
                  );
                var s, u;
                (null == (s = ne.current) || s.style.setProperty("--swipe-amount-x", "0px"),
                  null == (u = ne.current) || u.style.setProperty("--swipe-amount-y", "0px"),
                  Y(!1),
                  W(!1),
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
                      })(T);
                !D &&
                  (Math.abs(l) > 1 || Math.abs(a) > 1) &&
                  A(Math.abs(l) > Math.abs(a) ? "x" : "y");
                let u = { x: 0, y: 0 };
                const c = (e) => 1 / (1.5 + Math.abs(e) / 20);
                if ("y" === D) {
                  if (s.includes("top") || s.includes("bottom"))
                    if ((s.includes("top") && a < 0) || (s.includes("bottom") && a > 0)) u.y = a;
                    else {
                      const e = a * c(a);
                      u.y = Math.abs(e) < Math.abs(a) ? e : a;
                    }
                } else if ("x" === D && (s.includes("left") || s.includes("right")))
                  if ((s.includes("left") && l < 0) || (s.includes("right") && l > 0)) u.x = l;
                  else {
                    const e = l * c(l);
                    u.x = Math.abs(e) < Math.abs(l) ? e : l;
                  }
                ((Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && Y(!0),
                  null == (r = ne.current) || r.style.setProperty("--swipe-amount-x", `${u.x}px`),
                  null == (o = ne.current) || o.style.setProperty("--swipe-amount-y", `${u.y}px`));
              },
            },
            ce && !f.jsx && "loading" !== ae
              ? r.createElement(
                  "button",
                  {
                    "aria-label": O,
                    "data-disabled": xe,
                    "data-close-button": !0,
                    onClick:
                      xe || !le
                        ? () => {}
                        : () => {
                            (ke(), null == f.onDismiss || f.onDismiss.call(f, f));
                          },
                    className: Ys(
                      null == R ? void 0 : R.closeButton,
                      null == f || null == (o = f.classNames) ? void 0 : o.closeButton,
                    ),
                  },
                  null != (Ce = null == L ? void 0 : L.close) ? Ce : Bs,
                )
              : null,
            (ae || f.icon || f.promise) &&
              null !== f.icon &&
              (null !== (null == L ? void 0 : L[ae]) || f.icon)
              ? r.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: Ys(
                      null == R ? void 0 : R.icon,
                      null == f || null == (a = f.classNames) ? void 0 : a.icon,
                    ),
                  },
                  f.promise || ("loading" === f.type && !f.icon)
                    ? f.icon ||
                        (function () {
                          var e, t;
                          return (null == L ? void 0 : L.loading)
                            ? r.createElement(
                                "div",
                                {
                                  className: Ys(
                                    null == R ? void 0 : R.loader,
                                    null == f || null == (t = f.classNames) ? void 0 : t.loader,
                                    "sonner-loader",
                                  ),
                                  "data-visible": "loading" === ae,
                                },
                                L.loading,
                              )
                            : r.createElement(Ds, {
                                className: Ys(
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
                className: Ys(
                  null == R ? void 0 : R.content,
                  null == f || null == (l = f.classNames) ? void 0 : l.content,
                ),
              },
              r.createElement(
                "div",
                {
                  "data-title": "",
                  className: Ys(
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
                      className: Ys(
                        z,
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
              : f.cancel && qs(f.cancel)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-cancel": !0,
                      style: f.cancelButtonStyle || C,
                      onClick: (e) => {
                        qs(f.cancel) &&
                          le &&
                          (null == f.cancel.onClick || f.cancel.onClick.call(f.cancel, e), ke());
                      },
                      className: Ys(
                        null == R ? void 0 : R.cancelButton,
                        null == f || null == (u = f.classNames) ? void 0 : u.cancelButton,
                      ),
                    },
                    f.cancel.label,
                  )
                : null,
            r.isValidElement(f.action)
              ? f.action
              : f.action && qs(f.action)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-action": !0,
                      style: f.actionButtonStyle || N,
                      onClick: (e) => {
                        qs(f.action) &&
                          (null == f.action.onClick || f.action.onClick.call(f.action, e),
                          e.defaultPrevented || ke());
                      },
                      className: Ys(
                        null == R ? void 0 : R.actionButton,
                        null == f || null == (c = f.classNames) ? void 0 : c.actionButton,
                      ),
                    },
                    f.action.label,
                  )
                : null,
          );
        };
        function Xs() {
          if ("undefined" == typeof window) return "ltr";
          if ("undefined" == typeof document) return "ltr";
          const e = document.documentElement.getAttribute("dir");
          return "auto" !== e && e
            ? e
            : window.getComputedStyle(document.documentElement).direction;
        }
        function Zs(e, t) {
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
        const Js = r.forwardRef(function (e, t) {
          const {
              id: n,
              invert: o,
              position: a = "bottom-right",
              hotkey: l = ["altKey", "KeyT"],
              expand: i,
              closeButton: s,
              className: u,
              offset: c,
              mobileOffset: d,
              theme: f = "light",
              richColors: p,
              duration: m,
              style: h,
              visibleToasts: g = Ks,
              toastOptions: v,
              dir: y = Xs(),
              gap: b = Qs,
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
                Array.from(new Set([a].concat(E.filter((e) => e.position).map((e) => e.position)))),
              [E, a],
            ),
            [N, _] = r.useState([]),
            [z, P] = r.useState(!1),
            [T, M] = r.useState(!1),
            [j, R] = r.useState(
              "system" !== f
                ? f
                : "undefined" != typeof window &&
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light",
            ),
            L = r.useRef(null),
            O = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            A = r.useRef(null),
            I = r.useRef(!1),
            F = r.useCallback((e) => {
              S((t) => {
                var n;
                return (
                  (null == (n = t.find((t) => t.id === e.id)) ? void 0 : n.delete) ||
                    Us.dismiss(e.id),
                  t.filter(({ id: t }) => t !== e.id)
                );
              });
            }, []);
          return (
            r.useEffect(
              () =>
                Us.subscribe((e) => {
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
                  (P(!0), null == (n = L.current) || n.focus()),
                  "Escape" !== e.code ||
                    (document.activeElement !== L.current &&
                      !(null == (t = L.current) ? void 0 : t.contains(document.activeElement))) ||
                    P(!1));
              };
              return (
                document.addEventListener("keydown", e),
                () => document.removeEventListener("keydown", e)
              );
            }, [l]),
            r.useEffect(() => {
              if (L.current)
                return () => {
                  A.current &&
                    (A.current.focus({ preventScroll: !0 }), (A.current = null), (I.current = !1));
                };
            }, [L.current]),
            r.createElement(
              "section",
              {
                ref: t,
                "aria-label": `${x} ${O}`,
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
                        dir: "auto" === y ? Xs() : y,
                        tabIndex: -1,
                        ref: L,
                        className: u,
                        "data-sonner-toaster": !0,
                        "data-sonner-theme": j,
                        "data-y-position": l,
                        "data-x-position": f,
                        style: {
                          "--front-toast-height": `${(null == (a = N[0]) ? void 0 : a.height) || 0}px`,
                          "--width": "356px",
                          "--gap": `${b}px`,
                          ...h,
                          ...Zs(c, d),
                        },
                        onBlur: (e) => {
                          I.current &&
                            !e.currentTarget.contains(e.relatedTarget) &&
                            ((I.current = !1),
                            A.current &&
                              (A.current.focus({ preventScroll: !0 }), (A.current = null)));
                        },
                        onFocus: (e) => {
                          (e.target instanceof HTMLElement &&
                            "false" === e.target.dataset.dismissible) ||
                            I.current ||
                            ((I.current = !0), (A.current = e.relatedTarget));
                        },
                        onMouseEnter: () => P(!0),
                        onMouseMove: () => P(!0),
                        onMouseLeave: () => {
                          T || P(!1);
                        },
                        onDragEnd: () => P(!1),
                        onPointerDown: (e) => {
                          (e.target instanceof HTMLElement &&
                            "false" === e.target.dataset.dismissible) ||
                            M(!0);
                        },
                        onPointerUp: () => M(!1),
                      },
                      E.filter((e) => (!e.position && 0 === n) || e.position === t).map((n, a) => {
                        var l, u;
                        return r.createElement(Gs, {
                          key: n.id,
                          icons: w,
                          index: a,
                          toast: n,
                          defaultRichColors: p,
                          duration: null != (l = null == v ? void 0 : v.duration) ? l : m,
                          className: null == v ? void 0 : v.className,
                          descriptionClassName: null == v ? void 0 : v.descriptionClassName,
                          invert: o,
                          visibleToasts: g,
                          closeButton: null != (u = null == v ? void 0 : v.closeButton) ? u : s,
                          interacting: T,
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
                          setHeights: _,
                          expandByDefault: i,
                          gap: b,
                          expanded: z,
                          swipeDirections: e.swipeDirections,
                        });
                      }),
                    )
                  : null;
              }),
            )
          );
        });
        function eu(e) {
          const t = (0, l.c)(33),
            { conversationId: n } = e,
            { isLoggedIn: o, session: a } = (0, r.useContext)(Vi);
          let i;
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { status: "loading" }), (t[0] = i))
            : (i = t[0]);
          const [s, u] = (0, r.useState)(i);
          let c;
          t[1] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (t[1] = c)) : (c = t[1]);
          const [d, f] = (0, r.useState)(c),
            [p, m] = (0, r.useState)(""),
            [h, g] = (0, r.useState)(null),
            v = (0, r.useRef)(null);
          let y, b, w, x, k, S, E;
          (t[2] !== h
            ? ((y = () => {
                if (!h) return;
                const { messageId: e, full: t } = h,
                  { delayMs: n, charsPerTick: r } = (function (e) {
                    if (e < 1) return { delayMs: 8, charsPerTick: 1 };
                    const t = 2200 + 6300 * Math.min(1, e / 4096),
                      n = Math.max(1, Math.floor(t / 8)),
                      r = Math.max(1, Math.ceil(e / n)),
                      o = Math.ceil(e / r);
                    return { delayMs: Math.max(8, Math.min(45, t / o)), charsPerTick: r };
                  })(t.length);
                let o = 0,
                  a = 0;
                const l = () => {
                  ((o = Math.min(t.length, o + r)),
                    f((n) => {
                      const r = n.findIndex((t) => t.id === e);
                      if (-1 === r) return n;
                      const a = [...n];
                      return ((a[r] = { ...a[r], content: t.slice(0, o) }), a);
                    }));
                };
                if ((l(), o >= t.length)) return void g(null);
                let i = performance.now() + n;
                const s = (e) => {
                  o >= t.length || (e >= i && (l(), (i += n), o >= t.length))
                    ? g(null)
                    : (a = requestAnimationFrame(s));
                };
                return ((a = requestAnimationFrame(s)), () => cancelAnimationFrame(a));
              }),
              (b = [h]),
              (t[2] = h),
              (t[3] = y),
              (t[4] = b))
            : ((y = t[3]), (b = t[4])),
            (0, r.useEffect)(y, b),
            t[5] !== n || t[6] !== o || t[7] !== a
              ? ((w = () => {
                  !(async function () {
                    (g(null), u({ status: "loading" }));
                    const e = await (async function (e, t, n) {
                      const r = await fetch(`/api/myna/chats/${encodeURIComponent(e)}`, {
                        credentials: "same-origin",
                      });
                      if (403 === r.status) {
                        const e = await r.json();
                        return "CHAT_PRIVATE" === e.code
                          ? { kind: "private", account: e.account }
                          : { kind: "missing" };
                      }
                      if (!r.ok) return { kind: "missing" };
                      const o = await r.json();
                      return {
                        kind: "ready",
                        messages: o.messages ?? [],
                        canEdit: Boolean(t && n && String(o.account._id) === String(n._id)),
                      };
                    })(n, o, a);
                    "private" !== e.kind
                      ? "missing" !== e.kind
                        ? (f(e.messages), u({ status: "ready", canEdit: e.canEdit }))
                        : u({ status: "missing" })
                      : u({ status: "private", account: e.account });
                  })();
                }),
                (x = [n, o, a]),
                (t[5] = n),
                (t[6] = o),
                (t[7] = a),
                (t[8] = w),
                (t[9] = x))
              : ((w = t[8]), (x = t[9])),
            (0, r.useEffect)(w, x),
            t[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = () => {
                  const e = v.current;
                  if (!e) return;
                  const t = requestAnimationFrame(() => {
                    e.scrollTop = e.scrollHeight;
                  });
                  return () => cancelAnimationFrame(t);
                }),
                (t[10] = k))
              : (k = t[10]),
            t[11] !== d ? ((S = [d]), (t[11] = d), (t[12] = S)) : (S = t[12]),
            (0, r.useEffect)(k, S),
            t[13] !== n || t[14] !== p || t[15] !== s.canEdit || t[16] !== s.status
              ? ((E = async function () {
                  if ("ready" !== s.status || !s.canEdit) return;
                  const e = p.trim();
                  if (!e) return;
                  const t = await fetch(`/api/myna/chats/${encodeURIComponent(n)}/messages`, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: crypto.randomUUID(), content: e }),
                  });
                  if (!t.ok) return;
                  const r = (await t.json()).messages ?? [],
                    o = r[r.length - 1];
                  ("assistant" === o?.role && o.content.length > 0
                    ? (f([...r.slice(0, -1), { ...o, content: "" }]),
                      g({ messageId: o.id, full: o.content }))
                    : (g(null), f(r)),
                    m(""));
                }),
                (t[13] = n),
                (t[14] = p),
                (t[15] = s.canEdit),
                (t[16] = s.status),
                (t[17] = E))
              : (E = t[17]));
          const C = E;
          if ("loading" === s.status) {
            let e;
            return (
              t[18] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, R.jsx)("div", {
                    className:
                      "flex flex-1 items-center justify-center text-sm text-muted-foreground",
                    children: "Loading…",
                  })),
                  (t[18] = e))
                : (e = t[18]),
              e
            );
          }
          if ("private" === s.status) {
            let e, n, r, o;
            return (
              t[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, R.jsx)(tu, {})), (t[19] = e))
                : (e = t[19]),
              t[20] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, R.jsx)(_s, { variant: "icon", children: (0, R.jsx)(Ts, {}) })),
                  (r = (0, R.jsx)(zs, { children: "This chat is private" })),
                  (t[20] = n),
                  (t[21] = r))
                : ((n = t[20]), (r = t[21])),
              t[22] !== s.account.username
                ? ((o = (0, R.jsxs)(R.Fragment, {
                    children: [
                      e,
                      (0, R.jsx)(Es, {
                        children: (0, R.jsxs)(Cs, {
                          children: [
                            n,
                            r,
                            (0, R.jsxs)(Ps, {
                              children: [
                                "Ask ",
                                (0, R.jsxs)("span", {
                                  className: "font-medium text-foreground",
                                  children: ["@", s.account.username],
                                }),
                                " to make it public if you want to view it.",
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  })),
                  (t[22] = s.account.username),
                  (t[23] = o))
                : (o = t[23]),
              o
            );
          }
          if ("missing" === s.status) {
            let e, n;
            return (
              t[24] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, R.jsx)(tu, {})), (t[24] = e))
                : (e = t[24]),
              t[25] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, R.jsxs)(R.Fragment, {
                    children: [
                      e,
                      (0, R.jsx)(Es, {
                        children: (0, R.jsxs)(Cs, {
                          children: [
                            (0, R.jsx)(_s, { variant: "icon", children: (0, R.jsx)(Ms, {}) }),
                            (0, R.jsx)(zs, { children: "Chat not found" }),
                            (0, R.jsx)(Ps, {
                              children: "The chat you are looking for does not exist.",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })),
                  (t[25] = n))
                : (n = t[25]),
              n
            );
          }
          let N;
          t[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = (0, R.jsx)(tu, {})), (t[26] = N))
            : (N = t[26]);
          const _ = !s.canEdit,
            z = null !== h;
          let P;
          return (
            t[27] !== p || t[28] !== d || t[29] !== C || t[30] !== _ || t[31] !== z
              ? ((P = (0, R.jsxs)(R.Fragment, {
                  children: [
                    N,
                    (0, R.jsx)(Ss, {
                      messages: d,
                      draft: p,
                      setDraft: m,
                      send: C,
                      listRef: v,
                      readOnly: _,
                      isStreaming: z,
                    }),
                  ],
                })),
                (t[27] = p),
                (t[28] = d),
                (t[29] = C),
                (t[30] = _),
                (t[31] = z),
                (t[32] = P))
              : (P = t[32]),
            P
          );
        }
        function tu() {
          const e = (0, l.c)(5);
          let t, n, r, o, a;
          return (
            e[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, R.jsx)(wo, {
                  variant: "ghost",
                  asChild: !0,
                  children: (0, R.jsx)("a", {
                    href: "/myna",
                    children: (0, R.jsx)(js, { className: "size-4" }),
                  }),
                })),
                (e[0] = t))
              : (t = e[0]),
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, R.jsx)(wo, {
                  variant: "ghost",
                  type: "button",
                  onClick: nu,
                  children: (0, R.jsx)(Rs, { className: "size-4" }),
                })),
                (e[1] = n))
              : (n = e[1]),
            e[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, R.jsx)(wo, {
                  variant: "ghost",
                  type: "button",
                  children: (0, R.jsx)(w, { className: "size-4" }),
                })),
                (e[2] = r))
              : (r = e[2]),
            e[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, R.jsx)(wo, {
                  variant: "ghost",
                  type: "button",
                  children: (0, R.jsx)(vs, { className: "size-4" }),
                })),
                (e[3] = o))
              : (o = e[3]),
            e[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, R.jsxs)("div", {
                  className: "flex flex-row items-center justify-between",
                  children: [
                    t,
                    (0, R.jsxs)("div", {
                      className: "flex flex-row gap-2",
                      children: [
                        n,
                        r,
                        o,
                        (0, R.jsx)(wo, {
                          variant: "ghost",
                          asChild: !0,
                          children: (0, R.jsx)("a", {
                            href: "/myna",
                            children: (0, R.jsx)(Ls, { className: "size-4" }),
                          }),
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
        function nu() {
          (navigator.clipboard.writeText(window.location.href),
            Ws.success("Chat link copied to clipboard"));
        }
        function ru() {
          const e = (0, l.c)(3);
          let t;
          e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = new URLSearchParams(window.location.search).get("conversationId")), (e[0] = t))
            : (t = e[0]);
          const n = t;
          let r, o;
          return (
            e[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, R.jsx)(ps, {})), (e[1] = r))
              : (r = e[1]),
            e[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, R.jsx)("div", {
                  className: "flex h-dvh flex-col overflow-hidden",
                  children: (0, R.jsxs)("div", {
                    className:
                      "mx-auto flex h-full w-full max-w-5xl flex-col-reverse border-border sm:flex-row sm:border-x",
                    children: [
                      r,
                      (0, R.jsx)("div", {
                        className:
                          "flex min-h-0 flex-1 flex-col gap-4 overflow-hidden border-border p-4 sm:border-x",
                        children: n ? (0, R.jsx)(eu, { conversationId: n }) : (0, R.jsx)(ks, {}),
                      }),
                    ],
                  }),
                })),
                (e[2] = o))
              : (o = e[2]),
            o
          );
        }
        const ou = p("circle-check", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
          ]),
          au = p("info", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "M12 16v-4", key: "1dtifu" }],
            ["path", { d: "M12 8h.01", key: "e9boi3" }],
          ]),
          lu = p("triangle-alert", [
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
          iu = p("octagon-x", [
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
          su = p("loader-circle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]),
          uu = (e) => {
            const t = (0, l.c)(7);
            let n, r, o, a, i;
            return (
              t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
              t[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = {
                    success: (0, R.jsx)(ou, { className: "size-4" }),
                    info: (0, R.jsx)(au, { className: "size-4" }),
                    warning: (0, R.jsx)(lu, { className: "size-4" }),
                    error: (0, R.jsx)(iu, { className: "size-4" }),
                    loading: (0, R.jsx)(su, { className: "size-4 animate-spin" }),
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
                ? ((i = (0, R.jsx)(Js, {
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
        (0, a.createRoot)(document.getElementById("root")).render(
          (0, R.jsx)(r.StrictMode, {
            children: (0, R.jsx)(Wi, {
              children: (0, R.jsxs)(fo, {
                children: [
                  (0, R.jsx)(ru, {}),
                  (0, R.jsx)(uu, { position: "top-center", richColors: !0 }),
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
        function u(e) {
          if (31 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function c(e) {
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
        var z = Symbol.iterator;
        function P(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (z && e[z]) || e["@@iterator"])
              ? e
              : null;
        }
        var T = Symbol.for("react.client.reference");
        function M(e) {
          if (null == e) return null;
          if ("function" == typeof e)
            return e.$$typeof === T ? null : e.displayName || e.name || null;
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
                return null !== (t = e.displayName || null) ? t : M(e.type) || "Memo";
              case C:
                ((t = e._payload), (e = e._init));
                try {
                  return M(e(t));
                } catch (e) {}
            }
          return null;
        }
        var j = Array.isArray,
          R = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          L = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          O = { pending: !1, data: null, method: null, action: null },
          D = [],
          A = -1;
        function I(e) {
          return { current: e };
        }
        function F(e) {
          0 > A || ((e.current = D[A]), (D[A] = null), A--);
        }
        function H(e, t) {
          (A++, (D[A] = e.current), (e.current = t));
        }
        var B,
          $,
          U = I(null),
          V = I(null),
          W = I(null),
          q = I(null);
        function K(e, t) {
          switch ((H(W, t), H(V, e), H(U, null), t.nodeType)) {
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
          (F(U), H(U, e));
        }
        function Q() {
          (F(U), F(V), F(W));
        }
        function Y(e) {
          null !== e.memoizedState && H(q, e);
          var t = U.current,
            n = vd(t, e.type);
          t !== n && (H(V, e), H(U, n));
        }
        function G(e) {
          (V.current === e && (F(U), F(V)), q.current === e && (F(q), (cf._currentValue = O)));
        }
        function X(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              ((B = (t && t[1]) || ""),
                ($ =
                  -1 < e.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + B + e + $;
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
                u = i.split("\n");
              for (o = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot"); ) r++;
              for (; o < u.length && !u[o].includes("DetermineComponentFrameRoot"); ) o++;
              if (r === s.length || o === u.length)
                for (r = s.length - 1, o = u.length - 1; 1 <= r && 0 <= o && s[r] !== u[o]; ) o--;
              for (; 1 <= r && 0 <= o; r--, o--)
                if (s[r] !== u[o]) {
                  if (1 !== r || 1 !== o)
                    do {
                      if ((r--, 0 > --o || s[r] !== u[o])) {
                        var c = "\n" + s[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
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
          ue = r.unstable_ImmediatePriority,
          ce = r.unstable_UserBlockingPriority,
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
        function _e(e, t) {
          return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
        }
        function ze(e, t) {
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
        function Te(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Me(e, t) {
          ((e.pendingLanes |= t),
            268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function je(e, t, n) {
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
        function Le(e, t) {
          var n = t & -t;
          return 0 !== ((n = 42 & n ? 1 : Oe(n)) & (e.suspendedLanes | t)) ? 0 : n;
        }
        function Oe(e) {
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
          var e = L.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Ef(e.type);
        }
        function Ie(e, t) {
          var n = L.p;
          try {
            return ((L.p = e), t());
          } finally {
            L.p = n;
          }
        }
        var Fe = Math.random().toString(36).slice(2),
          He = "__reactFiber$" + Fe,
          Be = "__reactProps$" + Fe,
          $e = "__reactContainer$" + Fe,
          Ue = "__reactEvents$" + Fe,
          Ve = "__reactListeners$" + Fe,
          We = "__reactHandles$" + Fe,
          qe = "__reactResources$" + Fe,
          Ke = "__reactMarker$" + Fe;
        function Qe(e) {
          (delete e[He], delete e[Be], delete e[Ue], delete e[Ve], delete e[We]);
        }
        function Ye(e) {
          var t = e[He];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[$e] || n[He])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Od(e); null !== e; ) {
                  if ((n = e[He])) return n;
                  e = Od(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ge(e) {
          if ((e = e[He] || e[$e])) {
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
        function ut(e, t, n, r) {
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
        function ct(e) {
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
                ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + ct(t))
                : e.value !== "" + ct(t) && (e.value = "" + ct(t))
              : ("submit" !== l && "reset" !== l) || e.removeAttribute("value"),
            null != t
              ? bt(e, l, ct(t))
              : null != n
                ? bt(e, l, ct(n))
                : null != r && e.removeAttribute("value"),
            null == o && null != a && (e.defaultChecked = !!a),
            null != o && (e.checked = o && "function" != typeof o && "symbol" != typeof o),
            null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i
              ? (e.name = "" + ct(i))
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
            ((n = null != n ? "" + ct(n) : ""),
              (t = null != t ? "" + ct(t) : n),
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
        function wt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              ((o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + ct(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return ((e[o].selected = !0), void (r && (e[o].defaultSelected = !0)));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function xt(e, t, n) {
          null == t || ((t = "" + ct(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + ct(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function kt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(l(92));
              if (j(r)) {
                if (1 < r.length) throw Error(l(93));
                r = r[0];
              }
              n = r;
            }
            (null == n && (n = ""), (t = n));
          }
          ((n = ct(t)),
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
        var zt = new Map([
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
        function Tt(e) {
          return Pt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        function Mt() {}
        var jt = null;
        function Rt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Lt = null,
          Ot = null;
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
                      var o = r[Be] || null;
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
                xt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && wt(e, !!n.multiple, t, !1);
            }
          }
        }
        var At = !1;
        function It(e, t, n) {
          if (At) return e(t, n);
          At = !0;
          try {
            return e(t);
          } finally {
            if (
              ((At = !1),
              (null !== Lt || null !== Ot) &&
                (Zu(), Lt && ((t = Lt), (e = Ot), (Ot = Lt = null), Dt(t), e)))
            )
              for (t = 0; t < e.length; t++) Dt(e[t]);
          }
        }
        function Ft(e, t) {
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
        var Ht = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          Bt = !1;
        if (Ht)
          try {
            var $t = {};
            (Object.defineProperty($t, "passive", {
              get: function () {
                Bt = !0;
              },
            }),
              window.addEventListener("test", $t, $t),
              window.removeEventListener("test", $t, $t));
          } catch (e) {
            Bt = !1;
          }
        var Ut = null,
          Vt = null,
          Wt = null;
        function qt() {
          if (Wt) return Wt;
          var e,
            t,
            n = Vt,
            r = n.length,
            o = "value" in Ut ? Ut.value : Ut.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === o[a - t]; t++);
          return (Wt = o.slice(e, 1 < t ? 1 - t : void 0));
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
          an = Gt(on),
          ln = Gt(f({}, on, { dataTransfer: 0 })),
          sn = Gt(f({}, nn, { relatedTarget: 0 })),
          un = Gt(f({}, en, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          cn = Gt(
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
          kn = Gt(f({}, en, { newState: 0, oldState: 0 })),
          Sn = [9, 13, 27, 32],
          En = Ht && "CompositionEvent" in window,
          Cn = null;
        Ht && "documentMode" in document && (Cn = document.documentMode);
        var Nn = Ht && "TextEvent" in window && !Cn,
          _n = Ht && (!En || (Cn && 8 < Cn && 11 >= Cn)),
          zn = String.fromCharCode(32),
          Pn = !1;
        function Tn(e, t) {
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
        function Mn(e) {
          return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var jn = !1,
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
        function Ln(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Rn[e.type] : "textarea" === t;
        }
        function On(e, t, n, r) {
          (Lt ? (Ot ? Ot.push(r) : (Ot = [r])) : (Lt = r),
            0 < (t = nd(t, "onChange")).length &&
              ((n = new tn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
        }
        var Dn = null,
          An = null;
        function In(e) {
          Qc(e, 0);
        }
        function Fn(e) {
          if (pt(Xe(e))) return e;
        }
        function Hn(e, t) {
          if ("change" === e) return t;
        }
        var Bn = !1;
        if (Ht) {
          var $n;
          if (Ht) {
            var Un = "oninput" in document;
            if (!Un) {
              var Vn = document.createElement("div");
              (Vn.setAttribute("oninput", "return;"), (Un = "function" == typeof Vn.oninput));
            }
            $n = Un;
          } else $n = !1;
          Bn = $n && (!document.documentMode || 9 < document.documentMode);
        }
        function Wn() {
          Dn && (Dn.detachEvent("onpropertychange", qn), (An = Dn = null));
        }
        function qn(e) {
          if ("value" === e.propertyName && Fn(An)) {
            var t = [];
            (On(t, An, e, Rt(e)), It(In, t));
          }
        }
        function Kn(e, t, n) {
          "focusin" === e
            ? (Wn(), (An = n), (Dn = t).attachEvent("onpropertychange", qn))
            : "focusout" === e && Wn();
        }
        function Qn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Fn(An);
        }
        function Yn(e, t) {
          if ("click" === e) return Fn(t);
        }
        function Gn(e, t) {
          if ("input" === e || "change" === e) return Fn(t);
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
        function ur(e, t, n) {
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
        function cr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var dr = {
            animationend: cr("Animation", "AnimationEnd"),
            animationiteration: cr("Animation", "AnimationIteration"),
            animationstart: cr("Animation", "AnimationStart"),
            transitionrun: cr("Transition", "TransitionRun"),
            transitionstart: cr("Transition", "TransitionStart"),
            transitioncancel: cr("Transition", "TransitionCancel"),
            transitionend: cr("Transition", "TransitionEnd"),
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
          zr = 0;
        function Pr() {
          for (var e = _r, t = (zr = _r = 0); t < e; ) {
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
        function Tr(e, t, n, r) {
          ((Nr[_r++] = e),
            (Nr[_r++] = t),
            (Nr[_r++] = n),
            (Nr[_r++] = r),
            (zr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Mr(e, t, n, r) {
          return (Tr(e, t, n, r), Lr(e));
        }
        function jr(e, t) {
          return (Tr(e, null, null, t), Lr(e));
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
        function Lr(e) {
          if (50 < Uu) throw ((Uu = 0), (Vu = null), Error(l(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Or = {};
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
        function Ir(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Fr(e, t) {
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
        function Br(e, t, n, r, o, a) {
          var i = 0;
          if (((r = e), "function" == typeof e)) Ir(e) && (i = 1);
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
                return $r(n.children, o, a, t);
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
          return (((t = Ar(i, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t);
        }
        function $r(e, t, n, r) {
          return (((e = Ar(7, e, r, t)).lanes = n), e);
        }
        function Ur(e, t, n) {
          return (((e = Ar(6, e, null, t)).lanes = n), e);
        }
        function Vr(e) {
          var t = Ar(18, null, null, 0);
          return ((t.stateNode = e), t);
        }
        function Wr(e, t, n) {
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
          eo = null,
          to = 1,
          no = "";
        function ro(e, t) {
          ((Qr[Yr++] = Xr), (Qr[Yr++] = Gr), (Gr = e), (Xr = t));
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
          for (; e === Gr; ) ((Gr = Qr[--Yr]), (Qr[Yr] = null), (Xr = Qr[--Yr]), (Qr[Yr] = null));
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
          uo = null,
          co = !1,
          fo = null,
          po = !1,
          mo = Error(l(519));
        function ho(e) {
          throw (
            xo(
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
          switch (((t[He] = e), (t[Be] = r), n)) {
            case "dialog":
              (Yc("cancel", t), Yc("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              Yc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < qc.length; n++) Yc(qc[n], t);
              break;
            case "source":
              Yc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (Yc("error", t), Yc("load", t));
              break;
            case "details":
              Yc("toggle", t);
              break;
            case "input":
              (Yc("invalid", t),
                yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
              break;
            case "select":
              Yc("invalid", t);
              break;
            case "textarea":
              (Yc("invalid", t), kt(t, r.value, r.defaultValue, r.children));
          }
          (("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          sd(t.textContent, n)
            ? (null != r.popover && (Yc("beforetoggle", t), Yc("toggle", t)),
              null != r.onScroll && Yc("scroll", t),
              null != r.onScrollEnd && Yc("scrollend", t),
              null != r.onClick && (t.onclick = Mt),
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
          if (!co) return (vo(e), (co = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t = !("form" !== (t = e.type) && "button" !== t) || yd(e.type, e.memoizedProps)),
              (t = !t)),
            t && uo && ho(e),
            vo(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            uo = Ld(e);
          } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            uo = Ld(e);
          } else
            27 === n
              ? ((n = uo), Cd(e.type) ? ((e = Rd), (Rd = null), (uo = e)) : (uo = n))
              : (uo = so ? jd(e.stateNode.nextSibling) : null);
          return !0;
        }
        function bo() {
          ((uo = so = null), (co = !1));
        }
        function wo() {
          var e = fo;
          return (null !== e && (null === Pu ? (Pu = e) : Pu.push.apply(Pu, e), (fo = null)), e);
        }
        function xo(e) {
          null === fo ? (fo = [e]) : fo.push(e);
        }
        var ko = I(null),
          So = null,
          Eo = null;
        function Co(e, t, n) {
          (H(ko, t._currentValue), (t._currentValue = n));
        }
        function No(e) {
          ((e._currentValue = ko.current), F(ko));
        }
        function _o(e, t, n) {
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
        function zo(e, t, n, r) {
          var o = e.child;
          for (null !== o && (o.return = e); null !== o; ) {
            var a = o.dependencies;
            if (null !== a) {
              var i = o.child;
              a = a.firstContext;
              e: for (; null !== a; ) {
                var s = a;
                a = o;
                for (var u = 0; u < t.length; u++)
                  if (s.context === t[u]) {
                    ((a.lanes |= n),
                      null !== (s = a.alternate) && (s.lanes |= n),
                      _o(a.return, n, e),
                      r || (i = null));
                    break e;
                  }
                a = s.next;
              }
            } else if (18 === o.tag) {
              if (null === (i = o.return)) throw Error(l(341));
              ((i.lanes |= n),
                null !== (a = i.alternate) && (a.lanes |= n),
                _o(i, n, e),
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
                (null !== e ? e.push(cf) : (e = [cf]));
            }
            o = o.return;
          }
          (null !== e && zo(t, e, n, r), (t.flags |= 262144));
        }
        function To(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Xn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Mo(e) {
          ((So = e), (Eo = null), null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function jo(e) {
          return Lo(So, e);
        }
        function Ro(e, t) {
          return (null === So && Mo(e), Lo(e, t));
        }
        function Lo(e, t) {
          var n = t._currentValue;
          if (((t = { context: t, memoizedValue: n, next: null }), null === Eo)) {
            if (null === e) throw Error(l(308));
            ((Eo = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
          } else Eo = Eo.next = t;
          return n;
        }
        var Oo =
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
          Io = {
            $$typeof: w,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Fo() {
          return { controller: new Oo(), data: new Map(), refCount: 0 };
        }
        function Ho(e) {
          (e.refCount--,
            0 === e.refCount &&
              Do(Ao, function () {
                e.controller.abort();
              }));
        }
        var Bo = null,
          $o = 0,
          Uo = 0,
          Vo = null;
        function Wo() {
          if (0 === --$o && null !== Bo) {
            null !== Vo && (Vo.status = "fulfilled");
            var e = Bo;
            ((Bo = null), (Uo = 0), (Vo = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var qo = R.S;
        R.S = function (e, t) {
          ((ju = ie()),
            "object" == typeof t &&
              null !== t &&
              "function" == typeof t.then &&
              (function (e, t) {
                if (null === Bo) {
                  var n = (Bo = []);
                  (($o = 0),
                    (Uo = Bc()),
                    (Vo = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        n.push(e);
                      },
                    }));
                }
                ($o++, t.then(Wo, Wo));
              })(0, t),
            null !== qo && qo(e, t));
        };
        var Ko = I(null);
        function Qo() {
          var e = Ko.current;
          return null !== e ? e : pu.pooledCache;
        }
        function Yo(e, t) {
          H(Ko, null === t ? Ko.current : t.pool);
        }
        function Go() {
          var e = Qo();
          return null === e ? null : { parent: Io._currentValue, pool: e };
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
            (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Mt, Mt), (t = n)), t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (la((e = t.reason)), e);
            default:
              if ("string" == typeof t.status) t.then(Mt, Mt);
              else {
                if (null !== (e = pu) && 100 < e.shellSuspendCounter) throw Error(l(482));
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
        function ua(e) {
          var t = sa;
          return ((sa += 1), null === ia && (ia = []), na(ia, e, t));
        }
        function ca(e, t) {
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
            return (((e = Fr(e, t)).index = 0), (e.sibling = null), e);
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
          function u(e, t, n, r) {
            var a = n.type;
            return a === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ("object" == typeof a && null !== a && a.$$typeof === C && ra(a) === t.type))
                ? (ca((t = o(t, n.props)), n), (t.return = e), t)
                : (ca((t = Br(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Wr(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = $r(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
              return (((t = Ur("" + t, e.mode, n)).return = e), t);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return (
                    ca((n = Br(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n
                  );
                case h:
                  return (((t = Wr(t, e.mode, n)).return = e), t);
                case C:
                  return f(e, (t = ra(t)), n);
              }
              if (j(t) || P(t)) return (((t = $r(t, e.mode, n, null)).return = e), t);
              if ("function" == typeof t.then) return f(e, ua(t), n);
              if (t.$$typeof === w) return f(e, Ro(e, t), n);
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
                  return n.key === o ? u(e, t, n, r) : null;
                case h:
                  return n.key === o ? c(e, t, n, r) : null;
                case C:
                  return p(e, t, (n = ra(n)), r);
              }
              if (j(n) || P(n)) return null !== o ? null : d(e, t, n, r, null);
              if ("function" == typeof n.then) return p(e, t, ua(n), r);
              if (n.$$typeof === w) return p(e, t, Ro(e, n), r);
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
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case h:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case C:
                  return v(e, t, n, (r = ra(r)), o);
              }
              if (j(r) || P(r)) return d(t, (e = e.get(n) || null), r, o, null);
              if ("function" == typeof r.then) return v(e, t, n, ua(r), o);
              if (r.$$typeof === w) return v(e, t, n, Ro(t, r), o);
              da(t, r);
            }
            return null;
          }
          function y(s, u, c, d) {
            if (
              ("object" == typeof c &&
                null !== c &&
                c.type === g &&
                null === c.key &&
                (c = c.props.children),
              "object" == typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case m:
                  e: {
                    for (var b = c.key; null !== u; ) {
                      if (u.key === b) {
                        if ((b = c.type) === g) {
                          if (7 === u.tag) {
                            (n(s, u.sibling), ((d = o(u, c.props.children)).return = s), (s = d));
                            break e;
                          }
                        } else if (
                          u.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            ra(b) === u.type)
                        ) {
                          (n(s, u.sibling), ca((d = o(u, c.props)), c), (d.return = s), (s = d));
                          break e;
                        }
                        n(s, u);
                        break;
                      }
                      (t(s, u), (u = u.sibling));
                    }
                    c.type === g
                      ? (((d = $r(c.props.children, s.mode, d, c.key)).return = s), (s = d))
                      : (ca((d = Br(c.type, c.key, c.props, null, s.mode, d)), c),
                        (d.return = s),
                        (s = d));
                  }
                  return i(s);
                case h:
                  e: {
                    for (b = c.key; null !== u; ) {
                      if (u.key === b) {
                        if (
                          4 === u.tag &&
                          u.stateNode.containerInfo === c.containerInfo &&
                          u.stateNode.implementation === c.implementation
                        ) {
                          (n(s, u.sibling), ((d = o(u, c.children || [])).return = s), (s = d));
                          break e;
                        }
                        n(s, u);
                        break;
                      }
                      (t(s, u), (u = u.sibling));
                    }
                    (((d = Wr(c, s.mode, d)).return = s), (s = d));
                  }
                  return i(s);
                case C:
                  return y(s, u, (c = ra(c)), d);
              }
              if (j(c))
                return (function (o, l, i, s) {
                  for (
                    var u = null, c = null, d = l, m = (l = 0), h = null;
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
                      null === c ? (u = g) : (c.sibling = g),
                      (c = g),
                      (d = h));
                  }
                  if (m === i.length) return (n(o, d), co && ro(o, m), u);
                  if (null === d) {
                    for (; m < i.length; m++)
                      null !== (d = f(o, i[m], s)) &&
                        ((l = a(d, l, m)), null === c ? (u = d) : (c.sibling = d), (c = d));
                    return (co && ro(o, m), u);
                  }
                  for (d = r(d); m < i.length; m++)
                    null !== (h = v(d, o, m, i[m], s)) &&
                      (e && null !== h.alternate && d.delete(null === h.key ? m : h.key),
                      (l = a(h, l, m)),
                      null === c ? (u = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(o, e);
                      }),
                    co && ro(o, m),
                    u
                  );
                })(s, u, c, d);
              if (P(c)) {
                if ("function" != typeof (b = P(c))) throw Error(l(150));
                return (function (o, i, s, u) {
                  if (null == s) throw Error(l(151));
                  for (
                    var c = null, d = null, m = i, h = (i = 0), g = null, y = s.next();
                    null !== m && !y.done;
                    h++, y = s.next()
                  ) {
                    m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
                    var b = p(o, m, y.value, u);
                    if (null === b) {
                      null === m && (m = g);
                      break;
                    }
                    (e && m && null === b.alternate && t(o, m),
                      (i = a(b, i, h)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (m = g));
                  }
                  if (y.done) return (n(o, m), co && ro(o, h), c);
                  if (null === m) {
                    for (; !y.done; h++, y = s.next())
                      null !== (y = f(o, y.value, u)) &&
                        ((i = a(y, i, h)), null === d ? (c = y) : (d.sibling = y), (d = y));
                    return (co && ro(o, h), c);
                  }
                  for (m = r(m); !y.done; h++, y = s.next())
                    null !== (y = v(m, o, h, y.value, u)) &&
                      (e && null !== y.alternate && m.delete(null === y.key ? h : y.key),
                      (i = a(y, i, h)),
                      null === d ? (c = y) : (d.sibling = y),
                      (d = y));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(o, e);
                      }),
                    co && ro(o, h),
                    c
                  );
                })(s, u, (c = b.call(c)), d);
              }
              if ("function" == typeof c.then) return y(s, u, ua(c), d);
              if (c.$$typeof === w) return y(s, u, Ro(s, c), d);
              da(s, c);
            }
            return ("string" == typeof c && "" !== c) ||
              "number" == typeof c ||
              "bigint" == typeof c
              ? ((c = "" + c),
                null !== u && 6 === u.tag
                  ? (n(s, u.sibling), ((d = o(u, c)).return = s), (s = d))
                  : (n(s, u), ((d = Ur(c, s.mode, d)).return = s), (s = d)),
                i(s))
              : n(s, u);
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
          if (((r = r.shared), 2 & fu)) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              (t = Lr(e)),
              Rr(e, null, n),
              t
            );
          }
          return (Tr(e, r, t, n), Lr(e));
        }
        function wa(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n));
          }
        }
        function xa(e, t) {
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
          if (ka && null !== Vo) throw Vo;
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
              u = s.next;
            ((s.next = null), null === l ? (a = u) : (l.next = u), (l = s));
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u), (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = o.baseState;
            for (l = 0, c = u = s = null, i = a; ; ) {
              var p = -536870913 & i.lane,
                m = p !== i.lane;
              if (m ? (hu & p) === p : (r & p) === p) {
                (0 !== p && p === Uo && (ka = !0),
                  null !== c &&
                    (c = c.next =
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
                  null === c ? ((u = c = m), (s = d)) : (c = c.next = m),
                  (l |= p));
              if (null === (i = i.next)) {
                if (null === (i = o.shared.pending)) break;
                ((i = (m = i).next),
                  (m.next = null),
                  (o.lastBaseUpdate = m),
                  (o.shared.pending = null));
              }
            }
            (null === c && (s = d),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null === a && (o.shared.lanes = 0),
              (Su |= l),
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
        var _a = I(null),
          za = I(0);
        function Pa(e, t) {
          (H(za, (e = xu)), H(_a, t), (xu = e | t.baseLanes));
        }
        function Ta() {
          (H(za, xu), H(_a, _a.current));
        }
        function Ma() {
          ((xu = za.current), F(_a), F(za));
        }
        var ja = I(null),
          Ra = null;
        function La(e) {
          var t = e.alternate;
          (H(Fa, 1 & Fa.current),
            H(ja, e),
            null === Ra &&
              (null === t || null !== _a.current || null !== t.memoizedState) &&
              (Ra = e));
        }
        function Oa(e) {
          (H(Fa, Fa.current), H(ja, e), null === Ra && (Ra = e));
        }
        function Da(e) {
          22 === e.tag ? (H(Fa, Fa.current), H(ja, e), null === Ra && (Ra = e)) : Aa();
        }
        function Aa() {
          (H(Fa, Fa.current), H(ja, ja.current));
        }
        function Ia(e) {
          (F(ja), Ra === e && (Ra = null), F(Fa));
        }
        var Fa = I(0);
        function Ha(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || Td(n) || Md(n))) return t;
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
        var Ba = 0,
          $a = null,
          Ua = null,
          Va = null,
          Wa = !1,
          qa = !1,
          Ka = !1,
          Qa = 0,
          Ya = 0,
          Ga = null,
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
            (Ba = a),
            ($a = t),
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
          if (((Ba = 0), (Va = Ua = $a = null), (Wa = !1), (Ya = 0), (Ga = null), t))
            throw Error(l(300));
          null === e || ji || (null !== (e = e.dependencies) && To(e) && (ji = !0));
        }
        function nl(e, t, n, r) {
          $a = e;
          var o = 0;
          do {
            if ((qa && (Ga = null), (Ya = 0), (qa = !1), 25 <= o)) throw Error(l(301));
            if (((o += 1), (Va = Ua = null), null != e.updateQueue)) {
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
            (t = "function" == typeof t.then ? ul(t) : t),
            (e = e.useState()[0]),
            (null !== Ua ? Ua.memoizedState : null) !== e && ($a.flags |= 1024),
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
          if (Wa) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            Wa = !1;
          }
          ((Ba = 0), (Va = Ua = $a = null), (qa = !1), (Ya = Qa = 0), (Ga = null));
        }
        function il() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (null === Va ? ($a.memoizedState = Va = e) : (Va = Va.next = e), Va);
        }
        function sl() {
          if (null === Ua) {
            var e = $a.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Ua.next;
          var t = null === Va ? $a.memoizedState : Va.next;
          if (null !== t) ((Va = t), (Ua = e));
          else {
            if (null === e) {
              if (null === $a.alternate) throw Error(l(467));
              throw Error(l(310));
            }
            ((e = {
              memoizedState: (Ua = e).memoizedState,
              baseState: Ua.baseState,
              baseQueue: Ua.baseQueue,
              queue: Ua.queue,
              next: null,
            }),
              null === Va ? ($a.memoizedState = Va = e) : (Va = Va.next = e));
          }
          return Va;
        }
        function ul(e) {
          var t = Ya;
          return (
            (Ya += 1),
            null === Ga && (Ga = []),
            (e = na(Ga, e, t)),
            (t = $a),
            null === (null === Va ? t.memoizedState : Va.next) &&
              ((t = t.alternate), (R.H = null === t || null === t.memoizedState ? hi : gi)),
            e
          );
        }
        function cl(e) {
          if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return ul(e);
            if (e.$$typeof === w) return jo(e);
          }
          throw Error(l(438, String(e)));
        }
        function dl(e) {
          var t = null,
            n = $a.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = $a.alternate;
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
              ($a.updateQueue = n)),
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
              u = null,
              c = (t = o.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (hu & f) === f : (Ba & f) === f) {
                var p = c.revertLane;
                if (0 === p)
                  (null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    f === Uo && (d = !0));
                else {
                  if ((Ba & p) === p) {
                    ((c = c.next), p === Uo && (d = !0));
                    continue;
                  }
                  ((f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    gesture: null,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === u ? ((s = u = f), (i = a)) : (u = u.next = f),
                    ($a.lanes |= p),
                    (Su |= p));
                }
                ((f = c.action), Ka && n(a, f), (a = c.hasEagerState ? c.eagerState : n(a, f)));
              } else
                ((p = {
                  lane: f,
                  revertLane: c.revertLane,
                  gesture: c.gesture,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((s = u = p), (i = a)) : (u = u.next = p),
                  ($a.lanes |= f),
                  (Su |= f));
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (i = a) : (u.next = s),
              !Xn(a, e.memoizedState) && ((ji = !0), d && null !== (n = Vo)))
            )
              throw n;
            ((e.memoizedState = a),
              (e.baseState = i),
              (e.baseQueue = u),
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
            (Xn(a, t.memoizedState) || (ji = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a));
          }
          return [a, r];
        }
        function gl(e, t, n) {
          var r = $a,
            o = sl(),
            a = co;
          if (a) {
            if (void 0 === n) throw Error(l(407));
            n = n();
          } else n = t();
          var i = !Xn((Ua || o).memoizedState, n);
          if (
            (i && ((o.memoizedState = n), (ji = !0)),
            (o = o.queue),
            Bl(bl.bind(null, r, o, e), [e]),
            o.getSnapshot !== t || i || (null !== Va && 1 & Va.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Dl(9, { destroy: void 0 }, yl.bind(null, r, o, n, t), null),
              null === pu)
            )
              throw Error(l(349));
            a || 127 & Ba || vl(r, t, n);
          }
          return n;
        }
        function vl(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = $a.updateQueue)
              ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                ($a.updateQueue = t),
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
          var t = jr(e, 2);
          null !== t && Ku(t, 0, 2);
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
              zl(e, t, n);
            } finally {
              (null !== a && null !== l.types && (a.types = l.types), (R.T = a));
            }
          } else
            try {
              Nl(e, t, (a = n(o, r)));
            } catch (n) {
              zl(e, t, n);
            }
        }
        function Nl(e, t, n) {
          null !== n && "object" == typeof n && "function" == typeof n.then
            ? n.then(
                function (n) {
                  _l(e, t, n);
                },
                function (n) {
                  return zl(e, t, n);
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
        function zl(e, t, n) {
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
        function Tl(e, t) {
          return t;
        }
        function Ml(e, t) {
          if (co) {
            var n = pu.formState;
            if (null !== n) {
              e: {
                var r = $a;
                if (co) {
                  if (uo) {
                    t: {
                      for (var o = uo, a = po; 8 !== o.nodeType; ) {
                        if (!a) {
                          o = null;
                          break t;
                        }
                        if (null === (o = jd(o.nextSibling))) {
                          o = null;
                          break t;
                        }
                      }
                      o = "F!" === (a = o.data) || "F" === a ? o : null;
                    }
                    if (o) {
                      ((uo = jd(o.nextSibling)), (r = "F!" === o.data));
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
              lastRenderedReducer: Tl,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = si.bind(null, $a, r)),
            (r.dispatch = n),
            (r = kl(!1)),
            (a = ci.bind(null, $a, !1, r.queue)),
            (o = { state: t, dispatch: null, action: e, pending: null }),
            ((r = il()).queue = o),
            (n = El.bind(null, $a, o, a, n)),
            (o.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function jl(e) {
          return Rl(sl(), Ua, e);
        }
        function Rl(e, t, n) {
          if (
            ((t = ml(e, t, Tl)[0]),
            (e = pl(fl)[0]),
            "object" == typeof t && null !== t && "function" == typeof t.then)
          )
            try {
              var r = ul(t);
            } catch (e) {
              if (e === Xo) throw Jo;
              throw e;
            }
          else r = t;
          var o = (t = sl()).queue,
            a = o.dispatch;
          return (
            n !== t.memoizedState &&
              (($a.flags |= 2048), Dl(9, { destroy: void 0 }, Ll.bind(null, o, n), null)),
            [r, a, e]
          );
        }
        function Ll(e, t) {
          e.action = t;
        }
        function Ol(e) {
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
            null === (t = $a.updateQueue) &&
              ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
              ($a.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Al() {
          return sl().memoizedState;
        }
        function Il(e, t, n, r) {
          var o = il();
          (($a.flags |= e),
            (o.memoizedState = Dl(1 | t, { destroy: void 0 }, n, void 0 === r ? null : r)));
        }
        function Fl(e, t, n, r) {
          var o = sl();
          r = void 0 === r ? null : r;
          var a = o.memoizedState.inst;
          null !== Ua && null !== r && Ja(r, Ua.memoizedState.deps)
            ? (o.memoizedState = Dl(t, a, n, r))
            : (($a.flags |= e), (o.memoizedState = Dl(1 | t, a, n, r)));
        }
        function Hl(e, t) {
          Il(8390656, 8, e, t);
        }
        function Bl(e, t) {
          Fl(2048, 8, e, t);
        }
        function $l(e) {
          var t = sl().memoizedState;
          return (
            (function (e) {
              $a.flags |= 4;
              var t = $a.updateQueue;
              if (null === t)
                ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                  ($a.updateQueue = t),
                  (t.events = [e]));
              else {
                var n = t.events;
                null === n ? (t.events = [e]) : n.push(e);
              }
            })({ ref: t, nextImpl: e }),
            function () {
              if (2 & fu) throw Error(l(440));
              return t.impl.apply(void 0, arguments);
            }
          );
        }
        function Ul(e, t) {
          return Fl(4, 2, e, t);
        }
        function Vl(e, t) {
          return Fl(4, 4, e, t);
        }
        function Wl(e, t) {
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
          ((n = null != n ? n.concat([e]) : null), Fl(4, 4, Wl.bind(null, t, e), n));
        }
        function Kl() {}
        function Ql(e, t) {
          var n = sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && Ja(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Yl(e, t) {
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
        function Gl(e, t, n) {
          return void 0 === n || (1073741824 & Ba && !(261930 & hu))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n), (e = qu()), ($a.lanes |= e), (Su |= e), n);
        }
        function Xl(e, t, n, r) {
          return Xn(n, t)
            ? n
            : null !== _a.current
              ? ((e = Gl(e, n, r)), Xn(e, t) || (ji = !0), e)
              : 42 & Ba && (!(1073741824 & Ba) || 261930 & hu)
                ? ((e = qu()), ($a.lanes |= e), (Su |= e), t)
                : ((ji = !0), (e.memoizedState = n));
        }
        function Zl(e, t, n, r, o) {
          var a = L.p;
          L.p = 0 !== a && 8 > a ? a : 8;
          var l,
            i,
            s,
            u = R.T,
            c = {};
          ((R.T = c), ci(e, !1, t, n));
          try {
            var d = o(),
              f = R.S;
            (null !== f && f(c, d),
              null !== d && "object" == typeof d && "function" == typeof d.then
                ? ui(
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
                    Wu(),
                  )
                : ui(e, t, r, Wu()));
          } catch (n) {
            ui(e, t, { then: function () {}, status: "rejected", reason: n }, Wu());
          } finally {
            ((L.p = a), null !== u && null !== c.types && (u.types = c.types), (R.T = u));
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
            O,
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
              memoizedState: O,
              baseState: O,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fl,
                lastRenderedState: O,
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
          (null === t.next && (t = e.alternate.memoizedState), ui(e, t.next.queue, {}, Wu()));
        }
        function ri() {
          return jo(cf);
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
                var n = Wu(),
                  r = ba(t, (e = ya(n)), n);
                return (
                  null !== r && (Ku(r, 0, n), wa(r, t, n)),
                  (t = { cache: Fo() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function ii(e, t, n) {
          var r = Wu();
          ((n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            di(e) ? fi(t, n) : null !== (n = Mr(e, t, n, r)) && (Ku(n, 0, r), pi(n, t, r)));
        }
        function si(e, t, n) {
          ui(e, t, n, Wu());
        }
        function ui(e, t, n, r) {
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
                  return (Tr(e, t, o, 0), null === pu && Pr(), !1);
              } catch (e) {}
            if (null !== (n = Mr(e, t, o, r))) return (Ku(n, 0, r), pi(n, t, r), !0);
          }
          return !1;
        }
        function ci(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Bc(),
              gesture: null,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            di(e))
          ) {
            if (t) throw Error(l(479));
          } else null !== (t = Mr(e, n, r, 2)) && Ku(t, 0, 2);
        }
        function di(e) {
          var t = e.alternate;
          return e === $a || (null !== t && t === $a);
        }
        function fi(e, t) {
          qa = Wa = !0;
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
          readContext: jo,
          use: cl,
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
            readContext: jo,
            use: cl,
            useCallback: function (e, t) {
              return ((il().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: jo,
            useEffect: Hl,
            useImperativeHandle: function (e, t, n) {
              ((n = null != n ? n.concat([e]) : null), Il(4194308, 4, Wl.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return Il(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              Il(4, 2, e, t);
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
                (e = e.dispatch = ii.bind(null, $a, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (il().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = kl(e)).queue,
                n = si.bind(null, $a, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: Kl,
            useDeferredValue: function (e, t) {
              return Gl(il(), e, t);
            },
            useTransition: function () {
              var e = kl(!1);
              return ((e = Zl.bind(null, $a, e.queue, !0, !1)), (il().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
              var r = $a,
                o = il();
              if (co) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === pu)) throw Error(l(349));
                127 & hu || vl(r, t, n);
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
                t = pu.identifierPrefix;
              if (co) {
                var n = no;
                ((t = "_" + t + "R_" + (n = (to & ~(1 << (32 - be(to) - 1))).toString(32) + n)),
                  0 < (n = Qa++) && (t += "H" + n.toString(32)),
                  (t += "_"));
              } else t = "_" + t + "r_" + (n = Xa++).toString(32) + "_";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: ri,
            useFormState: Ml,
            useActionState: Ml,
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
              return ((t.queue = n), (t = ci.bind(null, $a, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: dl,
            useCacheRefresh: function () {
              return (il().memoizedState = li.bind(null, $a));
            },
            useEffectEvent: function (e) {
              var t = il(),
                n = { impl: e };
              return (
                (t.memoizedState = n),
                function () {
                  if (2 & fu) throw Error(l(440));
                  return n.impl.apply(void 0, arguments);
                }
              );
            },
          },
          gi = {
            readContext: jo,
            use: cl,
            useCallback: Ql,
            useContext: jo,
            useEffect: Bl,
            useImperativeHandle: ql,
            useInsertionEffect: Ul,
            useLayoutEffect: Vl,
            useMemo: Yl,
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
              return ["boolean" == typeof e ? e : ul(e), t];
            },
            useSyncExternalStore: gl,
            useId: oi,
            useHostTransitionStatus: ri,
            useFormState: jl,
            useActionState: jl,
            useOptimistic: function (e, t) {
              return Sl(sl(), 0, e, t);
            },
            useMemoCache: dl,
            useCacheRefresh: ai,
          };
        gi.useEffectEvent = $l;
        var vi = {
          readContext: jo,
          use: cl,
          useCallback: Ql,
          useContext: jo,
          useEffect: Bl,
          useImperativeHandle: ql,
          useInsertionEffect: Ul,
          useLayoutEffect: Vl,
          useMemo: Yl,
          useReducer: hl,
          useRef: Al,
          useState: function () {
            return hl(fl);
          },
          useDebugValue: Kl,
          useDeferredValue: function (e, t) {
            var n = sl();
            return null === Ua ? Gl(n, e, t) : Xl(n, Ua.memoizedState, e, t);
          },
          useTransition: function () {
            var e = hl(fl)[0],
              t = sl().memoizedState;
            return ["boolean" == typeof e ? e : ul(e), t];
          },
          useSyncExternalStore: gl,
          useId: oi,
          useHostTransitionStatus: ri,
          useFormState: Ol,
          useActionState: Ol,
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
        vi.useEffectEvent = $l;
        var bi = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Wu(),
              o = ya(r);
            ((o.payload = t),
              null != n && (o.callback = n),
              null !== (t = ba(e, o, r)) && (Ku(t, 0, r), wa(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Wu(),
              o = ya(r);
            ((o.tag = 1),
              (o.payload = t),
              null != n && (o.callback = n),
              null !== (t = ba(e, o, r)) && (Ku(t, 0, r), wa(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Wu(),
              r = ya(n);
            ((r.tag = 2),
              null != t && (r.callback = t),
              null !== (t = ba(e, r, n)) && (Ku(t, 0, n), wa(t, e, n)));
          },
        };
        function wi(e, t, n, r, o, a, l) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, l)
            : !(t.prototype && t.prototype.isPureReactComponent && Zn(n, r) && Zn(o, a));
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
        function zi(e, t, n) {
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
        function Ti(e, t, n, r) {
          var o = n.type.getDerivedStateFromError;
          if ("function" == typeof o) {
            var a = r.value;
            ((e.payload = function () {
              return o(a);
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
                "function" != typeof o && (null === Ou ? (Ou = new Set([this])) : Ou.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
            });
        }
        var Mi = Error(l(461)),
          ji = !1;
        function Ri(e, t, n, r) {
          t.child = null === e ? ma(t, null, n, r) : pa(t, e.child, n, r);
        }
        function Li(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          if ("ref" in r) {
            var l = {};
            for (var i in r) "ref" !== i && (l[i] = r[i]);
          } else l = r;
          return (
            Mo(t),
            (r = el(e, t, n, l, a, o)),
            (i = ol()),
            null === e || ji
              ? (co && i && ao(t), (t.flags |= 1), Ri(e, t, r, o), t.child)
              : (al(e, t, o), rs(e, t, o))
          );
        }
        function Oi(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              Ir(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare
              ? (((e = Br(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Di(e, t, a, r, o));
          }
          if (((a = e.child), !os(e, o))) {
            var l = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Zn)(l, r) && e.ref === t.ref)
              return rs(e, t, o);
          }
          return ((t.flags |= 1), ((e = Fr(a, r)).ref = t.ref), (e.return = t), (t.child = e));
        }
        function Di(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Zn(a, r) && e.ref === t.ref) {
              if (((ji = !1), (t.pendingProps = r = a), !os(e, o)))
                return ((t.lanes = e.lanes), rs(e, t, o));
              131072 & e.flags && (ji = !0);
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
              return Fi(e, t, a, n, r);
            }
            if (!(536870912 & n))
              return ((r = t.lanes = 536870912), Fi(e, t, null !== a ? a.baseLanes | n : n, n, r));
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Yo(0, null !== a ? a.cachePool : null),
              null !== a ? Pa(t, a) : Ta(),
              Da(t));
          } else
            null !== a
              ? (Yo(0, a.cachePool), Pa(t, a), Aa(), (t.memoizedState = null))
              : (null !== e && Yo(0, null), Ta(), Aa());
          return (Ri(e, t, o, n), t.child);
        }
        function Ii(e, t) {
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
        function Fi(e, t, n, r, o) {
          var a = Qo();
          return (
            (a = null === a ? null : { parent: Io._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Yo(0, null),
            Ta(),
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
        function Bi(e, t, n) {
          return (
            pa(t, e.child, null, n),
            ((e = Hi(t, t.pendingProps)).flags |= 2),
            Ia(t),
            (t.memoizedState = null),
            e
          );
        }
        function $i(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ui(e, t, n, r, o) {
          return (
            Mo(t),
            (n = el(e, t, n, r, void 0, o)),
            (r = ol()),
            null === e || ji
              ? (co && r && ao(t), (t.flags |= 1), Ri(e, t, n, o), t.child)
              : (al(e, t, o), rs(e, t, o))
          );
        }
        function Vi(e, t, n, r, o, a) {
          return (
            Mo(t),
            (t.updateQueue = null),
            (n = nl(t, r, n, o)),
            tl(e),
            (r = ol()),
            null === e || ji
              ? (co && r && ao(t), (t.flags |= 1), Ri(e, t, n, a), t.child)
              : (al(e, t, a), rs(e, t, a))
          );
        }
        function Wi(e, t, n, r, o) {
          if ((Mo(t), null === t.stateNode)) {
            var a = Or,
              l = n.contextType;
            ("object" == typeof l && null !== l && (a = jo(l)),
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
              (a.context = "object" == typeof l && null !== l ? jo(l) : Or),
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
            var u = a.context,
              c = n.contextType;
            ((l = Or), "object" == typeof c && null !== c && (l = jo(c)));
            var d = n.getDerivedStateFromProps;
            ((c = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              c ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((i || u !== l) && xi(t, a, r, l)),
              (ha = !1));
            var f = t.memoizedState;
            ((a.state = f),
              Ea(t, r, a, o),
              Sa(),
              (u = t.memoizedState),
              i || f !== u || ha
                ? ("function" == typeof d && (yi(t, n, d, r), (u = t.memoizedState)),
                  (s = ha || wi(t, n, s, r, f, u, l))
                    ? (c ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount && a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount && (t.flags |= 4194308))
                    : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = l),
                  (r = s))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1)));
          } else {
            ((a = t.stateNode),
              va(e, t),
              (c = ki(n, (l = t.memoizedProps))),
              (a.props = c),
              (d = t.pendingProps),
              (f = a.context),
              (u = n.contextType),
              (s = Or),
              "object" == typeof u && null !== u && (s = jo(u)),
              (u =
                "function" == typeof (i = n.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((l !== d || f !== s) && xi(t, a, r, s)),
              (ha = !1),
              (f = t.memoizedState),
              (a.state = f),
              Ea(t, r, a, o),
              Sa());
            var p = t.memoizedState;
            l !== d ||
            f !== p ||
            ha ||
            (null !== e && null !== e.dependencies && To(e.dependencies))
              ? ("function" == typeof i && (yi(t, n, i, r), (p = t.memoizedState)),
                (c =
                  ha ||
                  wi(t, n, c, r, f, p, s) ||
                  (null !== e && null !== e.dependencies && To(e.dependencies)))
                  ? (u ||
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
                (r = c))
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
            $i(e, t),
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
          return { baseLanes: e, cachePool: Go() };
        }
        function Yi(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Nu), e);
        }
        function Gi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = !1,
            i = !!(128 & t.flags);
          if (
            ((r = i) || (r = (null === e || null !== e.memoizedState) && !!(2 & Fa.current)),
            r && ((a = !0), (t.flags &= -129)),
            (r = !!(32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (co) {
              if (
                (a ? La(t) : Aa(),
                (e = uo)
                  ? null !== (e = null !== (e = Pd(e, po)) && "&" !== e.data ? e : null) &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext: null !== eo ? { id: to, overflow: no } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((n = Vr(e)).return = t),
                    (t.child = n),
                    (so = t),
                    (uo = null))
                  : (e = null),
                null === e)
              )
                throw ho(t);
              return (Md(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var s = o.children;
            return (
              (o = o.fallback),
              a
                ? (Aa(),
                  (s = Zi({ mode: "hidden", children: s }, (a = t.mode))),
                  (o = $r(o, a, n, null)),
                  (s.return = t),
                  (o.return = t),
                  (s.sibling = o),
                  (t.child = s),
                  ((o = t.child).memoizedState = Qi(n)),
                  (o.childLanes = Yi(e, r, n)),
                  (t.memoizedState = Ki),
                  Ii(null, o))
                : (La(t), Xi(t, s))
            );
          }
          var u = e.memoizedState;
          if (null !== u && null !== (s = u.dehydrated)) {
            if (i)
              256 & t.flags
                ? (La(t), (t.flags &= -257), (t = Ji(e, t, n)))
                : null !== t.memoizedState
                  ? (Aa(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (Aa(),
                    (s = o.fallback),
                    (a = t.mode),
                    (o = Zi({ mode: "visible", children: o.children }, a)),
                    ((s = $r(s, a, n, null)).flags |= 2),
                    (o.return = t),
                    (s.return = t),
                    (o.sibling = s),
                    (t.child = o),
                    pa(t, e.child, null, n),
                    ((o = t.child).memoizedState = Qi(n)),
                    (o.childLanes = Yi(e, r, n)),
                    (t.memoizedState = Ki),
                    (t = Ii(null, o)));
            else if ((La(t), Md(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              ((r = c),
                ((o = Error(l(419))).stack = ""),
                (o.digest = r),
                xo({ value: o, source: null, stack: null }),
                (t = Ji(e, t, n)));
            } else if ((ji || Po(e, t, n, !1), (r = 0 !== (n & e.childLanes)), ji || r)) {
              if (null !== (r = pu) && 0 !== (o = Le(r, n)) && o !== u.retryLane)
                throw ((u.retryLane = o), jr(e, o), Ku(r, 0, o), Mi);
              (Td(s) || ac(), (t = Ji(e, t, n)));
            } else
              Td(s)
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = u.treeContext),
                  (uo = jd(s.nextSibling)),
                  (so = t),
                  (co = !0),
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
              (c = (u = e.child).sibling),
              ((o = Fr(u, { mode: "hidden", children: o.children })).subtreeFlags =
                65011712 & u.subtreeFlags),
              null !== c ? (s = Fr(c, s)) : ((s = $r(s, a, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              Ii(null, o),
              (o = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Qi(n))
                : (null !== (a = s.cachePool)
                    ? ((u = Io._currentValue), (a = a.parent !== u ? { parent: u, pool: u } : a))
                    : (a = Go()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: a })),
              (o.memoizedState = s),
              (o.childLanes = Yi(e, r, n)),
              (t.memoizedState = Ki),
              Ii(e.child, o))
            : (La(t),
              (e = (n = e.child).sibling),
              ((n = Fr(n, { mode: "visible", children: o.children })).return = t),
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
          (null !== r && (r.lanes |= t), _o(e.return, t, n));
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
          var l = Fa.current,
            i = !!(2 & l);
          if (
            (i ? ((l = (1 & l) | 2), (t.flags |= 128)) : (l &= 1),
            H(Fa, l),
            Ri(e, t, r, n),
            (r = co ? Xr : 0),
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
            (Su |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Po(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Fr((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;
            )
              ((e = e.sibling), ((n = n.sibling = Fr(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function os(e, t) {
          return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !To(e));
        }
        function as(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) ji = !0;
            else {
              if (!(os(e, n) || 128 & t.flags))
                return (
                  (ji = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (K(t, t.stateNode.containerInfo), Co(0, Io, e.memoizedState.cache), bo());
                        break;
                      case 27:
                      case 5:
                        Y(t);
                        break;
                      case 4:
                        K(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        Co(0, t.type, t.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== t.memoizedState) return ((t.flags |= 128), Oa(t), null);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (La(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Gi(e, t, n)
                              : (La(t), null !== (e = rs(e, t, n)) ? e.sibling : null);
                        La(t);
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
                          H(Fa, Fa.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                        return ((t.lanes = 0), Ai(e, t, n, t.pendingProps));
                      case 24:
                        Co(0, Io, e.memoizedState.cache);
                    }
                    return rs(e, t, n);
                  })(e, t, n)
                );
              ji = !!(131072 & e.flags);
            }
          else ((ji = !1), co && 1048576 & t.flags && oo(t, Xr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                var r = t.pendingProps;
                if (((e = ra(t.elementType)), (t.type = e), "function" != typeof e)) {
                  if (null != e) {
                    var o = e.$$typeof;
                    if (o === x) {
                      ((t.tag = 11), (t = Li(null, t, e, r, n)));
                      break e;
                    }
                    if (o === E) {
                      ((t.tag = 14), (t = Oi(null, t, e, r, n)));
                      break e;
                    }
                  }
                  throw ((t = M(e) || e), Error(l(306, t, "")));
                }
                Ir(e)
                  ? ((r = ki(e, r)), (t.tag = 1), (t = Wi(null, t, e, r, n)))
                  : ((t.tag = 0), (t = Ui(null, t, e, r, n)));
              }
              return t;
            case 0:
              return Ui(e, t, t.type, t.pendingProps, n);
            case 1:
              return Wi(e, t, (r = t.type), (o = ki(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((K(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                ((o = a.element), va(e, t), Ea(t, r, null, n));
                var i = t.memoizedState;
                if (
                  ((r = i.cache),
                  Co(0, Io, r),
                  r !== a.cache && zo(t, [Io], n, !0),
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
                    (xo((o = Kr(Error(l(424)), t))), (t = qi(e, t, r, n)));
                    break e;
                  }
                  for (
                    e =
                      9 === (e = t.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      uo = jd(e.firstChild),
                      so = t,
                      co = !0,
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
                $i(e, t),
                null === e
                  ? (n = Vd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : co ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = hd(W.current).createElement(n))[He] = t),
                      (r[Be] = e),
                      dd(r, n, e),
                      Je(r),
                      (t.stateNode = r))
                  : (t.memoizedState = Vd(
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
                  co &&
                  ((r = t.stateNode = Dd(t.type, t.pendingProps, W.current)),
                  (so = t),
                  (po = !0),
                  (o = uo),
                  Cd(t.type) ? ((Rd = o), (uo = jd(r.firstChild))) : (uo = o)),
                Ri(e, t, t.pendingProps.children, n),
                $i(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  co &&
                  ((o = r = uo) &&
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
                        if (null === (e = jd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, po))
                      ? ((t.stateNode = r), (so = t), (uo = jd(r.firstChild)), (po = !1), (o = !0))
                      : (o = !1)),
                  o || ho(t)),
                Y(t),
                (o = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = a.children),
                yd(o, a) ? (r = null) : null !== i && yd(o, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((o = el(e, t, rl, null, null, n)), (cf._currentValue = o)),
                $i(e, t),
                Ri(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  co &&
                  ((e = n = uo) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = jd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, po))
                      ? ((t.stateNode = n), (so = t), (uo = null), (e = !0))
                      : (e = !1)),
                  e || ho(t)),
                null
              );
            case 13:
              return Gi(e, t, n);
            case 4:
              return (
                K(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = pa(t, null, r, n)) : Ri(e, t, r, n),
                t.child
              );
            case 11:
              return Li(e, t, t.type, t.pendingProps, n);
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
                Mo(t),
                (r = r((o = jo(o)))),
                (t.flags |= 1),
                Ri(e, t, r, n),
                t.child
              );
            case 14:
              return Oi(e, t, t.type, t.pendingProps, n);
            case 15:
              return Di(e, t, t.type, t.pendingProps, n);
            case 19:
              return ns(e, t, n);
            case 31:
              return (function (e, t, n) {
                var r = t.pendingProps,
                  o = !!(128 & t.flags);
                if (((t.flags &= -129), null === e)) {
                  if (co) {
                    if ("hidden" === r.mode)
                      return ((e = Hi(t, r)), (t.lanes = 536870912), Ii(null, e));
                    if (
                      (Oa(t),
                      (e = uo)
                        ? null !== (e = null !== (e = Pd(e, po)) && "&" === e.data ? e : null) &&
                          ((t.memoizedState = {
                            dehydrated: e,
                            treeContext: null !== eo ? { id: to, overflow: no } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((n = Vr(e)).return = t),
                          (t.child = n),
                          (so = t),
                          (uo = null))
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
                  if ((Oa(t), o))
                    if (256 & t.flags) ((t.flags &= -257), (t = Bi(e, t, n)));
                    else {
                      if (null === t.memoizedState) throw Error(l(558));
                      ((t.child = e.child), (t.flags |= 128), (t = null));
                    }
                  else if ((ji || Po(e, t, n, !1), (o = 0 !== (n & e.childLanes)), ji || o)) {
                    if (null !== (r = pu) && 0 !== (i = Le(r, n)) && i !== a.retryLane)
                      throw ((a.retryLane = i), jr(e, i), Ku(r, 0, i), Mi);
                    (ac(), (t = Bi(e, t, n)));
                  } else
                    ((e = a.treeContext),
                      (uo = jd(i.nextSibling)),
                      (so = t),
                      (co = !0),
                      (fo = null),
                      (po = !1),
                      null !== e && io(t, e),
                      ((t = Hi(t, r)).flags |= 4096));
                  return t;
                }
                return (
                  ((e = Fr(e.child, { mode: r.mode, children: r.children })).ref = t.ref),
                  (t.child = e),
                  (e.return = t),
                  e
                );
              })(e, t, n);
            case 22:
              return Ai(e, t, n, t.pendingProps);
            case 24:
              return (
                Mo(t),
                (r = jo(Io)),
                null === e
                  ? (null === (o = Qo()) &&
                      ((o = pu),
                      (a = Fo()),
                      (o.pooledCache = a),
                      a.refCount++,
                      null !== a && (o.pooledCacheLanes |= n),
                      (o = a)),
                    (t.memoizedState = { parent: r, cache: o }),
                    ga(t),
                    Co(0, Io, o))
                  : (0 !== (e.lanes & n) && (va(e, t), Ea(t, null, null, n), Sa()),
                    (o = e.memoizedState),
                    (a = t.memoizedState),
                    o.parent !== r
                      ? ((o = { parent: r, cache: r }),
                        (t.memoizedState = o),
                        0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = o),
                        Co(0, Io, r))
                      : ((r = a.cache), Co(0, Io, r), r !== o.cache && zo(t, [Io], n, !0))),
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
                if (!nc()) throw ((oa = ea), Zo);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function ss(e, t) {
          if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
          else if (((e.flags |= 16777216), !rf(t))) {
            if (!nc()) throw ((oa = ea), Zo);
            e.flags |= 8192;
          }
        }
        function us(e, t) {
          (null !== t && (e.flags |= 4),
            16384 & e.flags && ((t = 22 !== e.tag ? Pe() : 536870912), (e.lanes |= t), (_u |= t)));
        }
        function cs(e, t) {
          if (!co)
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
                No(Io),
                Q(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (yo(t)
                    ? ls(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                      ((t.flags |= 1024), wo())),
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
              if ((G(t), (n = W.current), (o = t.type), null !== e && null != t.stateNode))
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
              if ((G(t), (o = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (ds(t), null);
                }
                if (((a = U.current), yo(t))) go(t);
                else {
                  var i = hd(W.current);
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
                  ((a[He] = t), (a[Be] = r));
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
                if (((e = W.current), yo(t))) {
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
                  ((n = wo()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n),
                    (e = !0));
                if (!e) return 256 & t.flags ? (Ia(t), t) : (Ia(t), null);
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
                  ((o = wo()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = o),
                    (o = !0));
                if (!o) return 256 & t.flags ? (Ia(t), t) : (Ia(t), null);
              }
              return (
                Ia(t),
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
                    us(t, t.updateQueue),
                    ds(t),
                    null)
              );
            case 4:
              return (Q(), null === e && Zc(t.stateNode.containerInfo), ds(t), null);
            case 10:
              return (No(t.type), ds(t), null);
            case 19:
              if ((F(Fa), null === (r = t.memoizedState))) return (ds(t), null);
              if (((o = !!(128 & t.flags)), null === (a = r.rendering)))
                if (o) cs(r, !1);
                else {
                  if (0 !== ku || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = Ha(e))) {
                        for (
                          t.flags |= 128,
                            cs(r, !1),
                            e = a.updateQueue,
                            t.updateQueue = e,
                            us(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;
                        )
                          (Hr(n, e), (n = n.sibling));
                        return (H(Fa, (1 & Fa.current) | 2), co && ro(t, r.treeForkCount), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    ie() > Ru &&
                    ((t.flags |= 128), (o = !0), cs(r, !1), (t.lanes = 4194304));
                }
              else {
                if (!o)
                  if (null !== (e = Ha(a))) {
                    if (
                      ((t.flags |= 128),
                      (o = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      us(t, e),
                      cs(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !a.alternate && !co)
                    )
                      return (ds(t), null);
                  } else
                    2 * ie() - r.renderingStartTime > Ru &&
                      536870912 !== n &&
                      ((t.flags |= 128), (o = !0), cs(r, !1), (t.lanes = 4194304));
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
                  (n = Fa.current),
                  H(Fa, o ? (1 & n) | 2 : 1 & n),
                  co && ro(t, r.treeForkCount),
                  e)
                : (ds(t), null);
            case 22:
            case 23:
              return (
                Ia(t),
                Ma(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? !!(536870912 & n) &&
                    !(128 & t.flags) &&
                    (ds(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ds(t),
                null !== (n = t.updateQueue) && us(t, n.retryQueue),
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
                null !== e && F(Ko),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                No(Io),
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
                No(Io),
                Q(),
                65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 26:
            case 27:
            case 5:
              return (G(t), null);
            case 31:
              if (null !== t.memoizedState) {
                if ((Ia(t), null === t.alternate)) throw Error(l(340));
                bo();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 13:
              if ((Ia(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(l(340));
                bo();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return (F(Fa), null);
            case 4:
              return (Q(), null);
            case 10:
              return (No(t.type), null);
            case 22:
            case 23:
              return (
                Ia(t),
                Ma(),
                null !== e && F(Ko),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 24:
              return (No(Io), null);
            default:
              return null;
          }
        }
        function ms(e, t) {
          switch ((lo(t), t.tag)) {
            case 3:
              (No(Io), Q());
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
              null !== t.memoizedState && Ia(t);
              break;
            case 13:
              Ia(t);
              break;
            case 19:
              F(Fa);
              break;
            case 10:
              No(t.type);
              break;
            case 22:
            case 23:
              (Ia(t), Ma(), null !== e && F(Ko));
              break;
            case 24:
              No(Io);
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
            kc(t, t.return, e);
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
                      u = i;
                    try {
                      u();
                    } catch (e) {
                      kc(o, s, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (e) {
            kc(t, t.return, e);
          }
        }
        function vs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Na(t, n);
            } catch (t) {
              kc(e, e.return, t);
            }
          }
        }
        function ys(e, t, n) {
          ((n.props = ki(e.type, e.memoizedProps)), (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (n) {
            kc(e, t, n);
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
            kc(e, t, n);
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
                kc(e, t, n);
              } finally {
                ((e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                kc(e, t, n);
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
            kc(e, e.return, t);
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
                    u = null,
                    c = null,
                    d = null;
                  for (m in n) {
                    var f = n[m];
                    if (n.hasOwnProperty(m) && null != f)
                      switch (m) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          u = f;
                        default:
                          r.hasOwnProperty(m) || ud(e, t, m, null, r, f);
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
                          c = m;
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
                          m !== f && ud(e, t, p, m, r, f);
                      }
                  }
                  return void vt(e, i, s, u, c, d, a, o);
                case "select":
                  for (a in ((m = i = s = p = null), n))
                    if (((u = n[a]), n.hasOwnProperty(a) && null != u))
                      switch (a) {
                        case "value":
                          break;
                        case "multiple":
                          m = u;
                        default:
                          r.hasOwnProperty(a) || ud(e, t, a, null, r, u);
                      }
                  for (o in r)
                    if (((a = r[o]), (u = n[o]), r.hasOwnProperty(o) && (null != a || null != u)))
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
                          a !== u && ud(e, t, o, a, r, u);
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
                    if (((o = n[s]), n.hasOwnProperty(s) && null != o && !r.hasOwnProperty(s)))
                      switch (s) {
                        case "value":
                        case "children":
                          break;
                        default:
                          ud(e, t, s, null, r, o);
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
                          o !== a && ud(e, t, i, o, r, a);
                      }
                  return void xt(e, p, m);
                case "option":
                  for (var h in n)
                    ((p = n[h]),
                      n.hasOwnProperty(h) &&
                        null != p &&
                        !r.hasOwnProperty(h) &&
                        ("selected" === h ? (e.selected = !1) : ud(e, t, h, null, r, p)));
                  for (u in r)
                    ((p = r[u]),
                      (m = n[u]),
                      !r.hasOwnProperty(u) ||
                        p === m ||
                        (null == p && null == m) ||
                        ("selected" === u
                          ? (e.selected = p && "function" != typeof p && "symbol" != typeof p)
                          : ud(e, t, u, p, r, m)));
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
                        ud(e, t, g, null, r, p));
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (m = n[c]),
                      r.hasOwnProperty(c) && p !== m && (null != p || null != m))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(l(137, t));
                          break;
                        default:
                          ud(e, t, c, p, r, m);
                      }
                  return;
                default:
                  if (_t(t)) {
                    for (var v in n)
                      ((p = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(v) &&
                          cd(e, t, v, void 0, r, p));
                    for (d in r)
                      ((p = r[d]),
                        (m = n[d]),
                        !r.hasOwnProperty(d) ||
                          p === m ||
                          (void 0 === p && void 0 === m) ||
                          cd(e, t, d, p, r, m));
                    return;
                  }
              }
              for (var y in n)
                ((p = n[y]),
                  n.hasOwnProperty(y) &&
                    null != p &&
                    !r.hasOwnProperty(y) &&
                    ud(e, t, y, null, r, p));
              for (f in r)
                ((p = r[f]),
                  (m = n[f]),
                  !r.hasOwnProperty(f) ||
                    p === m ||
                    (null == p && null == m) ||
                    ud(e, t, f, p, r, m));
            })(r, e.type, n, t),
              (r[Be] = t));
          } catch (t) {
            kc(e, e.return, t);
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
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Mt)));
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
            for (var r = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
            (dd(t, r, n), (t[He] = e), (t[Be] = n));
          } catch (t) {
            kc(e, e.return, t);
          }
        }
        var zs = !1,
          Ps = !1,
          Ts = !1,
          Ms = "function" == typeof WeakSet ? WeakSet : Set,
          js = null;
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
                    kc(n, n.return, e);
                  }
                else {
                  var o = ki(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (e) {
                    kc(n, n.return, e);
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
                  kc(n, n.return, e);
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
              (Ks(e, n), 4 & r && Fs(e, n));
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
                  })(e, (n = Nc.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || zs)) {
                ((t = (null !== t && null !== t.memoizedState) || Ps), (o = zs));
                var a = Ps;
                ((zs = r),
                  (Ps = t) && !a ? Ys(e, n, !!(8772 & n.subtreeFlags)) : Ks(e, n),
                  (zs = o),
                  (Ps = a));
              }
              break;
            case 30:
              break;
            default:
              Ks(e, n);
          }
        }
        function Ls(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), Ls(t)),
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
        var Os = null,
          Ds = !1;
        function As(e, t, n) {
          for (n = n.child; null !== n; ) (Is(e, t, n), (n = n.sibling));
        }
        function Is(e, t, n) {
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
              var r = Os,
                o = Ds;
              (Cd(n.type) && ((Os = n.stateNode), (Ds = !1)),
                As(e, t, n),
                Ad(n.stateNode),
                (Os = r),
                (Ds = o));
              break;
            case 5:
              Ps || ws(n, t);
            case 6:
              if (((r = Os), (o = Ds), (Os = null), As(e, t, n), (Ds = o), null !== (Os = r)))
                if (Ds)
                  try {
                    (9 === Os.nodeType
                      ? Os.body
                      : "HTML" === Os.nodeName
                        ? Os.ownerDocument.body
                        : Os
                    ).removeChild(n.stateNode);
                  } catch (e) {
                    kc(n, t, e);
                  }
                else
                  try {
                    Os.removeChild(n.stateNode);
                  } catch (e) {
                    kc(n, t, e);
                  }
              break;
            case 18:
              null !== Os &&
                (Ds
                  ? (Nd(
                      9 === (e = Os).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      n.stateNode,
                    ),
                    $f(e))
                  : Nd(Os, n.stateNode));
              break;
            case 4:
              ((r = Os),
                (o = Ds),
                (Os = n.stateNode.containerInfo),
                (Ds = !0),
                As(e, t, n),
                (Os = r),
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
        function Fs(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState)
          ) {
            e = e.dehydrated;
            try {
              $f(e);
            } catch (e) {
              kc(t, t.return, e);
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
              $f(e);
            } catch (e) {
              kc(t, t.return, e);
            }
        }
        function Bs(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 31:
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new Ms()), t);
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Ms()), t
                );
              default:
                throw Error(l(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            if (!n.has(t)) {
              n.add(t);
              var r = _c.bind(null, e, t);
              t.then(r, r);
            }
          });
        }
        function $s(e, t) {
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
                      ((Os = s.stateNode), (Ds = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Os = s.stateNode), (Ds = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Os = s.stateNode.containerInfo), (Ds = !0));
                    break e;
                }
                s = s.return;
              }
              if (null === Os) throw Error(l(160));
              (Is(a, i, o),
                (Os = null),
                (Ds = !1),
                null !== (a = o.alternate) && (a.return = null),
                (o.return = null));
            }
          if (13886 & t.subtreeFlags) for (t = t.child; null !== t; ) (Vs(t, e), (t = t.sibling));
        }
        var Us = null;
        function Vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              ($s(t, e), Ws(e), 4 & r && (gs(3, e, e.return), hs(3, e), gs(5, e, e.return)));
              break;
            case 1:
              ($s(t, e),
                Ws(e),
                512 & r && (Ps || null === n || ws(n, n.return)),
                64 & r &&
                  zs &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var o = Us;
              if (($s(t, e), Ws(e), 512 & r && (Ps || null === n || ws(n, n.return)), 4 & r)) {
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
                  else e.stateNode = Gd(o, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a
                        ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n)
                        : a.count--,
                      null === r ? nf(o, e.type, e.stateNode) : Gd(o, r, e.memoizedProps))
                    : null === r && null !== e.stateNode && ks(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              ($s(t, e),
                Ws(e),
                512 & r && (Ps || null === n || ws(n, n.return)),
                null !== n && 4 & r && ks(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if (
                ($s(t, e), Ws(e), 512 & r && (Ps || null === n || ws(n, n.return)), 32 & e.flags)
              ) {
                o = e.stateNode;
                try {
                  St(o, "");
                } catch (t) {
                  kc(e, e.return, t);
                }
              }
              (4 & r &&
                null != e.stateNode &&
                ks(e, (o = e.memoizedProps), null !== n ? n.memoizedProps : o),
                1024 & r && (Ts = !0));
              break;
            case 6:
              if (($s(t, e), Ws(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                ((r = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = r;
                } catch (t) {
                  kc(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                ((ef = null),
                (o = Us),
                (Us = Hd(t.containerInfo)),
                $s(t, e),
                (Us = o),
                Ws(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $f(t.containerInfo);
                } catch (t) {
                  kc(e, e.return, t);
                }
              Ts && ((Ts = !1), qs(e));
              break;
            case 4:
              ((r = Us), (Us = Hd(e.stateNode.containerInfo)), $s(t, e), Ws(e), (Us = r));
              break;
            case 12:
            default:
              ($s(t, e), Ws(e));
              break;
            case 31:
            case 19:
              ($s(t, e),
                Ws(e),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Bs(e, r)));
              break;
            case 13:
              ($s(t, e),
                Ws(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                  (Mu = ie()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Bs(e, r)));
              break;
            case 22:
              o = null !== e.memoizedState;
              var u = null !== n && null !== n.memoizedState,
                c = zs,
                d = Ps;
              if (((zs = c || o), (Ps = d || u), $s(t, e), (Ps = d), (zs = c), Ws(e), 8192 & r))
                e: for (
                  t = e.stateNode,
                    t._visibility = o ? -2 & t._visibility : 1 | t._visibility,
                    o && (null === n || u || zs || Ps || Qs(e)),
                    n = null,
                    t = e;
                  ;
                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      u = n = t;
                      try {
                        if (((a = u.stateNode), o))
                          "function" == typeof (i = a.style).setProperty
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none");
                        else {
                          s = u.stateNode;
                          var f = u.memoizedProps.style,
                            p = null != f && f.hasOwnProperty("display") ? f.display : null;
                          s.style.display =
                            null == p || "boolean" == typeof p ? "" : ("" + p).trim();
                        }
                      } catch (e) {
                        kc(u, u.return, e);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        u.stateNode.nodeValue = o ? "" : u.memoizedProps;
                      } catch (e) {
                        kc(u, u.return, e);
                      }
                    }
                  } else if (18 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        var m = u.stateNode;
                        o ? _d(m, !0) : _d(u.stateNode, !1);
                      } catch (e) {
                        kc(u, u.return, e);
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
        function Ws(e) {
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
              kc(e, e.return, t);
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
              o = e,
              a = t,
              l = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                (Ys(o, a, n), hs(4, a));
                break;
              case 1:
                if ((Ys(o, a, n), "function" == typeof (o = (r = a).stateNode).componentDidMount))
                  try {
                    o.componentDidMount();
                  } catch (e) {
                    kc(r, r.return, e);
                  }
                if (null !== (o = (r = a).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var s = o.shared.hiddenCallbacks;
                    if (null !== s)
                      for (o.shared.hiddenCallbacks = null, o = 0; o < s.length; o++) Ca(s[o], i);
                  } catch (e) {
                    kc(r, r.return, e);
                  }
                }
                (n && 64 & l && vs(a), bs(a, a.return));
                break;
              case 27:
                _s(a);
              case 26:
              case 5:
                (Ys(o, a, n), n && null === r && 4 & l && xs(a), bs(a, a.return));
                break;
              case 12:
                Ys(o, a, n);
                break;
              case 31:
                (Ys(o, a, n), n && 4 & l && Fs(o, a));
                break;
              case 13:
                (Ys(o, a, n), n && 4 & l && Hs(o, a));
                break;
              case 22:
                (null === a.memoizedState && Ys(o, a, n), bs(a, a.return));
                break;
              case 30:
                break;
              default:
                Ys(o, a, n);
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
                  kc(t, t.return, e);
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
                    : tu(e, t)
                  : 2 & a._visibility
                    ? Zs(e, t, n, r)
                    : ((a._visibility |= 2), eu(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
                2048 & o && Gs(l, t));
              break;
            case 24:
              (Zs(e, t, n, r), 2048 & o && Xs(t.alternate, t));
          }
        }
        function eu(e, t, n, r, o) {
          for (o = o && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t; ) {
            var a = e,
              l = t,
              i = n,
              s = r,
              u = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                (eu(a, l, i, s, o), hs(8, l));
                break;
              case 23:
                break;
              case 22:
                var c = l.stateNode;
                (null !== l.memoizedState
                  ? 2 & c._visibility
                    ? eu(a, l, i, s, o)
                    : tu(a, l)
                  : ((c._visibility |= 2), eu(a, l, i, s, o)),
                  o && 2048 & u && Gs(l.alternate, l));
                break;
              case 24:
                (eu(a, l, i, s, o), o && 2048 & u && Xs(l.alternate, l));
                break;
              default:
                eu(a, l, i, s, o);
            }
            t = t.sibling;
          }
        }
        function tu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                o = r.flags;
              switch (r.tag) {
                case 22:
                  (tu(n, r), 2048 & o && Gs(r.alternate, r));
                  break;
                case 24:
                  (tu(n, r), 2048 & o && Xs(r.alternate, r));
                  break;
                default:
                  tu(n, r);
              }
              t = t.sibling;
            }
        }
        var nu = 8192;
        function ru(e, t, n) {
          if (e.subtreeFlags & nu) for (e = e.child; null !== e; ) (ou(e, t, n), (e = e.sibling));
        }
        function ou(e, t, n) {
          switch (e.tag) {
            case 26:
              (ru(e, t, n),
                e.flags & nu &&
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
                        var o = Wd(r.href),
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
                          (o = Id.get(o)) && Zd(r, o),
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
              ru(e, t, n);
              break;
            case 3:
            case 4:
              var r = Us;
              ((Us = Hd(e.stateNode.containerInfo)), ru(e, t, n), (Us = r));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = nu), (nu = 16777216), ru(e, t, n), (nu = r))
                  : ru(e, t, n));
          }
        }
        function au(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
          }
        }
        function lu(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((js = r), uu(r, e));
              }
            au(e);
          }
          if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) (iu(e), (e = e.sibling));
        }
        function iu(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (lu(e), 2048 & e.flags && gs(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              lu(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), su(e))
                : lu(e);
          }
        }
        function su(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((js = r), uu(r, e));
              }
            au(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                (gs(8, t, t.return), su(t));
                break;
              case 22:
                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), su(t));
                break;
              default:
                su(t);
            }
            e = e.sibling;
          }
        }
        function uu(e, t) {
          for (; null !== js; ) {
            var n = js;
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
            if (null !== (r = n.child)) ((r.return = n), (js = r));
            else
              e: for (n = e; null !== js; ) {
                var o = (r = js).sibling,
                  a = r.return;
                if ((Ls(r), r === n)) {
                  js = null;
                  break e;
                }
                if (null !== o) {
                  ((o.return = a), (js = o));
                  break e;
                }
                js = a;
              }
          }
        }
        var cu = {
            getCacheForType: function (e) {
              var t = jo(Io),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
              return jo(Io).controller.signal;
            },
          },
          du = "function" == typeof WeakMap ? WeakMap : Map,
          fu = 0,
          pu = null,
          mu = null,
          hu = 0,
          gu = 0,
          vu = null,
          yu = !1,
          bu = !1,
          wu = !1,
          xu = 0,
          ku = 0,
          Su = 0,
          Eu = 0,
          Cu = 0,
          Nu = 0,
          _u = 0,
          zu = null,
          Pu = null,
          Tu = !1,
          Mu = 0,
          ju = 0,
          Ru = 1 / 0,
          Lu = null,
          Ou = null,
          Du = 0,
          Au = null,
          Iu = null,
          Fu = 0,
          Hu = 0,
          Bu = null,
          $u = null,
          Uu = 0,
          Vu = null;
        function Wu() {
          return 2 & fu && 0 !== hu ? hu & -hu : null !== R.T ? Bc() : Ae();
        }
        function qu() {
          if (0 === Nu)
            if (536870912 & hu && !co) Nu = 536870912;
            else {
              var e = Se;
              (!(3932160 & (Se <<= 1)) && (Se = 262144), (Nu = e));
            }
          return (null !== (e = ja.current) && (e.flags |= 32), Nu);
        }
        function Ku(e, t, n) {
          (((e !== pu || (2 !== gu && 9 !== gu)) && null === e.cancelPendingCommit) ||
            (ec(e, 0), Xu(e, hu, Nu, !1)),
            Me(e, n),
            (2 & fu && e === pu) ||
              (e === pu && (!(2 & fu) && (Eu |= n), 4 === ku && Xu(e, hu, Nu, !1)), Lc(e)));
        }
        function Qu(e, t, n) {
          if (6 & fu) throw Error(l(327));
          for (
            var r = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || _e(e, t),
              o = r
                ? (function (e, t) {
                    var n = fu;
                    fu |= 2;
                    var r = rc(),
                      o = oc();
                    pu !== e || hu !== t
                      ? ((Lu = null), (Ru = ie() + 500), ec(e, t))
                      : (bu = _e(e, t));
                    e: for (;;)
                      try {
                        if (0 !== gu && null !== mu) {
                          t = mu;
                          var a = vu;
                          t: switch (gu) {
                            case 1:
                              ((gu = 0), (vu = null), dc(e, t, a, 1));
                              break;
                            case 2:
                            case 9:
                              if (ta(a)) {
                                ((gu = 0), (vu = null), cc(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== gu && 9 !== gu) || pu !== e || (gu = 7), Lc(e));
                              }),
                                a.then(t, t));
                              break e;
                            case 3:
                              gu = 7;
                              break e;
                            case 4:
                              gu = 5;
                              break e;
                            case 7:
                              ta(a)
                                ? ((gu = 0), (vu = null), cc(t))
                                : ((gu = 0), (vu = null), dc(e, t, a, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (mu.tag) {
                                case 26:
                                  i = mu.memoizedState;
                                case 5:
                                case 27:
                                  var s = mu;
                                  if (i ? rf(i) : s.stateNode.complete) {
                                    ((gu = 0), (vu = null));
                                    var u = s.sibling;
                                    if (null !== u) mu = u;
                                    else {
                                      var c = s.return;
                                      null !== c ? ((mu = c), fc(c)) : (mu = null);
                                    }
                                    break t;
                                  }
                              }
                              ((gu = 0), (vu = null), dc(e, t, a, 5));
                              break;
                            case 6:
                              ((gu = 0), (vu = null), dc(e, t, a, 6));
                              break;
                            case 8:
                              (Ju(), (ku = 6));
                              break e;
                            default:
                              throw Error(l(462));
                          }
                        }
                        sc();
                        break;
                      } catch (t) {
                        tc(e, t);
                      }
                    return (
                      (Eo = So = null),
                      (R.H = r),
                      (R.A = o),
                      (fu = n),
                      null !== mu ? 0 : ((pu = null), (hu = 0), Pr(), ku)
                    );
                  })(e, t)
                : lc(e, t, !0),
              a = r;
            ;
          ) {
            if (0 === o) {
              bu && !r && Xu(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !a || Gu(n))) {
              if (2 === o) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var i = 0;
                else i = 0 != (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var s = e;
                    o = zu;
                    var u = s.current.memoizedState.isDehydrated;
                    if ((u && (ec(s, i).flags |= 256), 2 !== (i = lc(s, i, !1)))) {
                      if (wu && !u) {
                        ((s.errorRecoveryDisabledLanes |= a), (Eu |= a), (o = 4));
                        break e;
                      }
                      ((a = Pu),
                        (Pu = o),
                        null !== a && (null === Pu ? (Pu = a) : Pu.push.apply(Pu, a)));
                    }
                    o = i;
                  }
                  if (((a = !1), 2 !== o)) continue;
                }
              }
              if (1 === o) {
                (ec(e, 0), Xu(e, t, 0, !0));
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
                    Xu(r, t, Nu, !yu);
                    break e;
                  case 2:
                    Pu = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(l(329));
                }
                if ((62914560 & t) === t && 10 < (o = Mu + 300 - ie())) {
                  if ((Xu(r, t, Nu, !yu), 0 !== Ne(r, 0, !0))) break e;
                  ((Fu = t),
                    (r.timeoutHandle = wd(
                      Yu.bind(null, r, n, Pu, Lu, Tu, t, Nu, Eu, _u, yu, a, "Throttled", -0, 0),
                      o,
                    )));
                } else Yu(r, n, Pu, Lu, Tu, t, Nu, Eu, _u, yu, a, null, -0, 0);
              }
              break;
            }
            ((o = lc(e, t, !1)), (a = !1));
          }
          Lc(e);
        }
        function Yu(e, t, n, r, o, a, l, i, s, u, c, d, f, p) {
          if (((e.timeoutHandle = -1), 8192 & (d = t.subtreeFlags) || !(16785408 & ~d))) {
            ou(
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
                unsuspend: Mt,
              }),
            );
            var m = (62914560 & a) === a ? Mu - ie() : (4194048 & a) === a ? ju - ie() : 0;
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
                                        u = s.startTime;
                                      if (u > i) break;
                                      var c = s.transferSize,
                                        d = s.initiatorType;
                                      c &&
                                        fd(d) &&
                                        (l +=
                                          c * ((s = s.responseEnd) < i ? 1 : (i - u) / (s - u)));
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
                (Fu = a),
                (e.cancelPendingCommit = m(
                  mc.bind(null, e, t, a, n, r, o, l, i, s, c, d, null, f, p),
                )),
                void Xu(e, a, l, !u)
              );
          }
          mc(e, t, a, n, r, o, l, i, s);
        }
        function Gu(e) {
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
        function Xu(e, t, n, r) {
          ((t &= ~Cu),
            (t &= ~Eu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes));
          for (var o = t; 0 < o; ) {
            var a = 31 - be(o),
              l = 1 << a;
            ((r[a] = -1), (o &= ~l));
          }
          0 !== n && je(e, n, t);
        }
        function Zu() {
          return !!(6 & fu) || (Oc(0, !1), !1);
        }
        function Ju() {
          if (null !== mu) {
            if (0 === gu) var e = mu.return;
            else ((Eo = So = null), ll((e = mu)), (ia = null), (sa = 0), (e = mu));
            for (; null !== e; ) (ms(e.alternate, e), (e = e.return));
            mu = null;
          }
        }
        function ec(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), xd(n)),
            null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
            (Fu = 0),
            Ju(),
            (pu = e),
            (mu = n = Fr(e.current, null)),
            (hu = t),
            (gu = 0),
            (vu = null),
            (yu = !1),
            (bu = _e(e, t)),
            (wu = !1),
            (_u = Nu = Cu = Eu = Su = ku = 0),
            (Pu = zu = null),
            (Tu = !1),
            8 & t && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var o = 31 - be(r),
                a = 1 << o;
              ((t |= e[o]), (r &= ~a));
            }
          return ((xu = t), Pr(), n);
        }
        function tc(e, t) {
          (($a = null),
            (R.H = mi),
            t === Xo || t === Jo
              ? ((t = aa()), (gu = 3))
              : t === Zo
                ? ((t = aa()), (gu = 4))
                : (gu =
                    t === Mi
                      ? 8
                      : null !== t && "object" == typeof t && "function" == typeof t.then
                        ? 6
                        : 1),
            (vu = t),
            null === mu && ((ku = 1), Ni(e, Kr(t, e.current))));
        }
        function nc() {
          var e = ja.current;
          return (
            null === e ||
            ((4194048 & hu) === hu
              ? null === Ra
              : !!((62914560 & hu) === hu || 536870912 & hu) && e === Ra)
          );
        }
        function rc() {
          var e = R.H;
          return ((R.H = mi), null === e ? mi : e);
        }
        function oc() {
          var e = R.A;
          return ((R.A = cu), e);
        }
        function ac() {
          ((ku = 4),
            yu || ((4194048 & hu) !== hu && null !== ja.current) || (bu = !0),
            (!(134217727 & Su) && !(134217727 & Eu)) || null === pu || Xu(pu, hu, Nu, !1));
        }
        function lc(e, t, n) {
          var r = fu;
          fu |= 2;
          var o = rc(),
            a = oc();
          ((pu === e && hu === t) || ((Lu = null), ec(e, t)), (t = !1));
          var l = ku;
          e: for (;;)
            try {
              if (0 !== gu && null !== mu) {
                var i = mu,
                  s = vu;
                switch (gu) {
                  case 8:
                    (Ju(), (l = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === ja.current && (t = !0);
                    var u = gu;
                    if (((gu = 0), (vu = null), dc(e, i, s, u), n && bu)) {
                      l = 0;
                      break e;
                    }
                    break;
                  default:
                    ((u = gu), (gu = 0), (vu = null), dc(e, i, s, u));
                }
              }
              (ic(), (l = ku));
              break;
            } catch (t) {
              tc(e, t);
            }
          return (
            t && e.shellSuspendCounter++,
            (Eo = So = null),
            (fu = r),
            (R.H = o),
            (R.A = a),
            null === mu && ((pu = null), (hu = 0), Pr()),
            l
          );
        }
        function ic() {
          for (; null !== mu; ) uc(mu);
        }
        function sc() {
          for (; null !== mu && !ae(); ) uc(mu);
        }
        function uc(e) {
          var t = as(e.alternate, e, xu);
          ((e.memoizedProps = e.pendingProps), null === t ? fc(e) : (mu = t));
        }
        function cc(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Vi(n, t, t.pendingProps, t.type, void 0, hu);
              break;
            case 11:
              t = Vi(n, t, t.pendingProps, t.type.render, t.ref, hu);
              break;
            case 5:
              ll(t);
            default:
              (ms(n, t), (t = as(n, (t = mu = Hr(t, xu)), xu)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? fc(e) : (mu = t));
        }
        function dc(e, t, n, r) {
          ((Eo = So = null), ll(t), (ia = null), (sa = 0));
          var o = t.return;
          try {
            if (
              (function (e, t, n, r, o) {
                if (
                  ((n.flags |= 32768),
                  null !== r && "object" == typeof r && "function" == typeof r.then)
                ) {
                  if ((null !== (t = n.alternate) && Po(t, n, o, !0), null !== (n = ja.current))) {
                    switch (n.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Ra ? ac() : null === n.alternate && 0 === ku && (ku = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = o),
                          r === ea
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              Sc(e, r, o)),
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
                              Sc(e, r, o)),
                          !1
                        );
                    }
                    throw Error(l(435, n.tag));
                  }
                  return (Sc(e, r, o), ac(), !1);
                }
                if (co)
                  return (
                    null !== (t = ja.current)
                      ? (!(65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = o),
                        r !== mo && xo(Kr((e = Error(l(422), { cause: r })), n)))
                      : (r !== mo && xo(Kr((t = Error(l(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (o &= -o),
                        (e.lanes |= o),
                        (r = Kr(r, n)),
                        xa(e, (o = zi(e.stateNode, r, o))),
                        4 !== ku && (ku = 2)),
                    !1
                  );
                var a = Error(l(520), { cause: r });
                if (
                  ((a = Kr(a, n)),
                  null === zu ? (zu = [a]) : zu.push(a),
                  4 !== ku && (ku = 2),
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
                        xa(n, (e = zi(n.stateNode, r, e))),
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
                              (null !== Ou && Ou.has(a))))
                        ))
                      )
                        return (
                          (n.flags |= 65536),
                          (o &= -o),
                          (n.lanes |= o),
                          Ti((o = Pi(o)), e, n, r),
                          xa(n, o),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, o, t, n, hu)
            )
              return ((ku = 1), Ni(e, Kr(n, e.current)), void (mu = null));
          } catch (t) {
            if (null !== o) throw ((mu = o), t);
            return ((ku = 1), Ni(e, Kr(n, e.current)), void (mu = null));
          }
          32768 & t.flags
            ? (co || 1 === r
                ? (e = !0)
                : bu || 536870912 & hu
                  ? (e = !1)
                  : ((yu = e = !0),
                    (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = ja.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
              pc(t, e))
            : fc(t);
        }
        function fc(e) {
          var t = e;
          do {
            if (32768 & t.flags) return void pc(t, yu);
            e = t.return;
            var n = fs(t.alternate, t, xu);
            if (null !== n) return void (mu = n);
            if (null !== (t = t.sibling)) return void (mu = t);
            mu = t = e;
          } while (null !== t);
          0 === ku && (ku = 5);
        }
        function pc(e, t) {
          do {
            var n = ps(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (mu = n));
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (mu = e);
            mu = e = n;
          } while (null !== e);
          ((ku = 6), (mu = null));
        }
        function mc(e, t, n, r, o, a, i, s, u) {
          e.cancelPendingCommit = null;
          do {
            bc();
          } while (0 !== Du);
          if (6 & fu) throw Error(l(327));
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
                  u = e.hiddenUpdates;
                for (n = l & ~n; 0 < n; ) {
                  var c = 31 - be(n),
                    d = 1 << c;
                  ((i[c] = 0), (s[c] = -1));
                  var f = u[c];
                  if (null !== f)
                    for (u[c] = null, c = 0; c < f.length; c++) {
                      var p = f[c];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~d;
                }
                (0 !== r && je(e, r, 0),
                  0 !== a && 0 === o && 0 !== e.tag && (e.suspendedLanes |= a & ~(l & ~t)));
              })(e, n, (a |= zr), i, s, u),
              e === pu && ((mu = pu = null), (hu = 0)),
              (Iu = t),
              (Au = e),
              (Fu = n),
              (Hu = a),
              (Bu = o),
              ($u = r),
              10256 & t.subtreeFlags || 10256 & t.flags
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  re(de, function () {
                    return (wc(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = !!(13878 & t.flags)),
              13878 & t.subtreeFlags || r)
            ) {
              ((r = R.T), (R.T = null), (o = L.p), (L.p = 2), (i = fu), (fu |= 4));
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
                            u = -1,
                            c = 0,
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var m;
                              f !== n || (0 !== o && 3 !== f.nodeType) || (s = i + o),
                                f !== a || (0 !== r && 3 !== f.nodeType) || (u = i + r),
                                3 === f.nodeType && (i += f.nodeValue.length),
                                null !== (m = f.firstChild);
                            )
                              ((p = f), (f = m));
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (p === n && ++c === o && (s = i),
                                p === a && ++d === r && (u = i),
                                null !== (m = f.nextSibling))
                              )
                                break;
                              p = (f = p).parentNode;
                            }
                            f = m;
                          }
                          n = -1 === s || -1 === u ? null : { start: s, end: u };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (md = { focusedElem: e, selectionRange: n }, vf = !1, js = t; null !== js; )
                    if (((e = (t = js).child), 1028 & t.subtreeFlags && null !== e))
                      ((e.return = t), (js = e));
                    else
                      for (; null !== js; ) {
                        switch (((a = (t = js).alternate), (e = t.flags), t.tag)) {
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
                                kc(n, n.return, e);
                              }
                            }
                            break;
                          case 3:
                            if (1024 & e)
                              if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) zd(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    zd(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (1024 & e) throw Error(l(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (js = e));
                          break;
                        }
                        js = t.return;
                      }
                })(e, t);
              } finally {
                ((fu = i), (L.p = o), (R.T = r));
              }
            }
            ((Du = 1), hc(), gc(), vc());
          }
        }
        function hc() {
          if (1 === Du) {
            Du = 0;
            var e = Au,
              t = Iu,
              n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
              ((n = R.T), (R.T = null));
              var r = L.p;
              L.p = 2;
              var o = fu;
              fu |= 4;
              try {
                Vs(t, e);
                var a = md,
                  l = nr(e.containerInfo),
                  i = a.focusedElem,
                  s = a.selectionRange;
                if (l !== i && i && i.ownerDocument && tr(i.ownerDocument.documentElement, i)) {
                  if (null !== s && rr(i)) {
                    var u = s.start,
                      c = s.end;
                    if ((void 0 === c && (c = u), "selectionStart" in i))
                      ((i.selectionStart = u), (i.selectionEnd = Math.min(c, i.value.length)));
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
                ((fu = o), (L.p = r), (R.T = n));
              }
            }
            ((e.current = t), (Du = 2));
          }
        }
        function gc() {
          if (2 === Du) {
            Du = 0;
            var e = Au,
              t = Iu,
              n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
              ((n = R.T), (R.T = null));
              var r = L.p;
              L.p = 2;
              var o = fu;
              fu |= 4;
              try {
                Rs(e, t.alternate, t);
              } finally {
                ((fu = o), (L.p = r), (R.T = n));
              }
            }
            Du = 3;
          }
        }
        function vc() {
          if (4 === Du || 3 === Du) {
            ((Du = 0), le());
            var e = Au,
              t = Iu,
              n = Fu,
              r = $u;
            10256 & t.subtreeFlags || 10256 & t.flags
              ? (Du = 5)
              : ((Du = 0), (Iu = Au = null), yc(e, e.pendingLanes));
            var o = e.pendingLanes;
            if (
              (0 === o && (Ou = null),
              De(n),
              (t = t.stateNode),
              ve && "function" == typeof ve.onCommitFiberRoot)
            )
              try {
                ve.onCommitFiberRoot(ge, t, void 0, !(128 & ~t.current.flags));
              } catch (e) {}
            if (null !== r) {
              ((t = R.T), (o = L.p), (L.p = 2), (R.T = null));
              try {
                for (var a = e.onRecoverableError, l = 0; l < r.length; l++) {
                  var i = r[l];
                  a(i.value, { componentStack: i.stack });
                }
              } finally {
                ((R.T = t), (L.p = o));
              }
            }
            (3 & Fu && bc(),
              Lc(e),
              (o = e.pendingLanes),
              261930 & n && 42 & o ? (e === Vu ? Uu++ : ((Uu = 0), (Vu = e))) : (Uu = 0),
              Oc(0, !1));
          }
        }
        function yc(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ho(t));
        }
        function bc() {
          return (hc(), gc(), vc(), wc());
        }
        function wc() {
          if (5 !== Du) return !1;
          var e = Au,
            t = Hu;
          Hu = 0;
          var n = De(Fu),
            r = R.T,
            o = L.p;
          try {
            ((L.p = 32 > n ? 32 : n), (R.T = null), (n = Bu), (Bu = null));
            var a = Au,
              i = Fu;
            if (((Du = 0), (Iu = Au = null), (Fu = 0), 6 & fu)) throw Error(l(331));
            var s = fu;
            if (
              ((fu |= 4),
              iu(a.current),
              Js(a, a.current, i, n),
              (fu = s),
              Oc(0, !1),
              ve && "function" == typeof ve.onPostCommitFiberRoot)
            )
              try {
                ve.onPostCommitFiberRoot(ge, a);
              } catch (e) {}
            return !0;
          } finally {
            ((L.p = o), (R.T = r), yc(e, t));
          }
        }
        function xc(e, t, n) {
          ((t = Kr(n, t)),
            null !== (e = ba(e, (t = zi(e.stateNode, t, 2)), 2)) && (Me(e, 2), Lc(e)));
        }
        function kc(e, t, n) {
          if (3 === e.tag) xc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch && (null === Ou || !Ou.has(r)))
                ) {
                  ((e = Kr(n, e)),
                    null !== (r = ba(t, (n = Pi(2)), 2)) && (Ti(n, r, t, e), Me(r, 2), Lc(r)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Sc(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new du();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || ((wu = !0), o.add(n), (e = Ec.bind(null, e, t, n)), t.then(e, e));
        }
        function Ec(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            pu === e &&
              (hu & n) === n &&
              (4 === ku || (3 === ku && (62914560 & hu) === hu && 300 > ie() - Mu)
                ? !(2 & fu) && ec(e, 0)
                : (Cu |= n),
              _u === hu && (_u = 0)),
            Lc(e));
        }
        function Cc(e, t) {
          (0 === t && (t = Pe()), null !== (e = jr(e, t)) && (Me(e, t), Lc(e)));
        }
        function Nc(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), Cc(e, n));
        }
        function _c(e, t) {
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
          (null !== r && r.delete(t), Cc(e, n));
        }
        var zc = null,
          Pc = null,
          Tc = !1,
          Mc = !1,
          jc = !1,
          Rc = 0;
        function Lc(e) {
          (e !== Pc && null === e.next && (null === Pc ? (zc = Pc = e) : (Pc = Pc.next = e)),
            (Mc = !0),
            Tc ||
              ((Tc = !0),
              Sd(function () {
                6 & fu ? re(ue, Dc) : Ac();
              })));
        }
        function Oc(e, t) {
          if (!jc && Mc) {
            jc = !0;
            do {
              for (var n = !1, r = zc; null !== r; ) {
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
                    0 !== a && ((n = !0), Hc(r, a));
                  } else
                    ((a = hu),
                      !(
                        3 &
                        (a = Ne(
                          r,
                          r === pu ? a : 0,
                          null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                        ))
                      ) ||
                        _e(r, a) ||
                        ((n = !0), Hc(r, a)));
                r = r.next;
              }
            } while (n);
            jc = !1;
          }
        }
        function Dc() {
          Ac();
        }
        function Ac() {
          Mc = Tc = !1;
          var e,
            t = 0;
          0 !== Rc &&
            ((e = window.event) && "popstate" === e.type
              ? e !== bd && ((bd = e), 1)
              : ((bd = null), 0)) &&
            (t = Rc);
          for (var n = ie(), r = null, o = zc; null !== o; ) {
            var a = o.next,
              l = Ic(o, n);
            (0 === l
              ? ((o.next = null), null === r ? (zc = a) : (r.next = a), null === a && (Pc = r))
              : ((r = o), (0 !== t || 3 & l) && (Mc = !0)),
              (o = a));
          }
          ((0 !== Du && 5 !== Du) || Oc(t, !1), 0 !== Rc && (Rc = 0));
        }
        function Ic(e, t) {
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
              ? (0 !== (i & n) && 0 === (i & r)) || (o[l] = ze(i, t))
              : s <= t && (e.expiredLanes |= i),
              (a &= ~i));
          }
          if (
            ((n = hu),
            (n = Ne(
              e,
              e === (t = pu) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            )),
            (r = e.callbackNode),
            0 === n || (e === t && (2 === gu || 9 === gu)) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && oe(r), (e.callbackNode = null), (e.callbackPriority = 0)
            );
          if (!(3 & n) || _e(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && oe(r), De(n))) {
              case 2:
              case 8:
                n = ce;
                break;
              case 32:
              default:
                n = de;
                break;
              case 268435456:
                n = pe;
            }
            return (
              (r = Fc.bind(null, e)),
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
        function Fc(e, t) {
          if (0 !== Du && 5 !== Du)
            return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (bc() && e.callbackNode !== n) return null;
          var r = hu;
          return 0 ===
            (r = Ne(e, e === pu ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
            ? null
            : (Qu(e, r, t),
              Ic(e, ie()),
              null != e.callbackNode && e.callbackNode === n ? Fc.bind(null, e) : null);
        }
        function Hc(e, t) {
          if (bc()) return null;
          Qu(e, t, !0);
        }
        function Bc() {
          if (0 === Rc) {
            var e = Uo;
            (0 === e && ((e = ke), !(261888 & (ke <<= 1)) && (ke = 256)), (Rc = e));
          }
          return Rc;
        }
        function $c(e) {
          return null == e || "symbol" == typeof e || "boolean" == typeof e
            ? null
            : "function" == typeof e
              ? e
              : Tt("" + e);
        }
        function Uc(e, t) {
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
        for (var Vc = 0; Vc < Sr.length; Vc++) {
          var Wc = Sr[Vc];
          Er(Wc.toLowerCase(), "on" + (Wc[0].toUpperCase() + Wc.slice(1)));
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
        var qc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Kc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qc),
          );
        function Qc(e, t) {
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
                    u = i.currentTarget;
                  if (((i = i.listener), s !== a && o.isPropagationStopped())) break e;
                  ((a = i), (o.currentTarget = u));
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
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  ((a = i), (o.currentTarget = u));
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
        function Yc(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Jc(t, e, 2, !1), n.add(r));
        }
        function Gc(e, t, n) {
          var r = 0;
          (t && (r |= 4), Jc(n, e, r, t));
        }
        var Xc = "_reactListening" + Math.random().toString(36).slice(2);
        function Zc(e) {
          if (!e[Xc]) {
            ((e[Xc] = !0),
              et.forEach(function (t) {
                "selectionchange" !== t && (Kc.has(t) || Gc(t, !1, e), Gc(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Xc] || ((t[Xc] = !0), Gc("selectionchange", !1, t));
          }
        }
        function Jc(e, t, n, r) {
          switch (Ef(t)) {
            case 2:
              var o = yf;
              break;
            case 8:
              o = bf;
              break;
            default:
              o = wf;
          }
          ((n = o.bind(null, t, n, e)),
            (o = void 0),
            !Bt || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (o = !0),
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
                    var u = l.tag;
                    if ((3 === u || 4 === u) && l.stateNode.containerInfo === o) return;
                    l = l.return;
                  }
                for (; null !== s; ) {
                  if (null === (l = Ye(s))) return;
                  if (5 === (u = l.tag) || 6 === u || 26 === u || 27 === u) {
                    r = a = l;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          It(function () {
            var r = a,
              o = Rt(n),
              l = [];
            e: {
              var s = kr.get(e);
              if (void 0 !== s) {
                var u = tn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === Kt(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = vn;
                    break;
                  case "focusin":
                    ((c = "focus"), (u = sn));
                    break;
                  case "focusout":
                    ((c = "blur"), (u = sn));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = sn;
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
                    u = an;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = ln;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = bn;
                    break;
                  case hr:
                  case gr:
                  case vr:
                    u = un;
                    break;
                  case xr:
                    u = wn;
                    break;
                  case "scroll":
                  case "scrollend":
                    u = rn;
                    break;
                  case "wheel":
                    u = xn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = cn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = yn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    u = kn;
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
                      (null != (g = Ft(h, p)) && d.push(td(h, g, m))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < d.length && ((s = new u(s, c, null, n, o)), l.push({ event: s, listeners: d }));
              }
            }
            if (!(7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === jt ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!Ye(c) && !c[$e])) &&
                  (u || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                        ? s.defaultView || s.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !== (c = (c = n.relatedTarget || n.toElement) ? Ye(c) : null) &&
                        ((f = i(c)), (d = c.tag), c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((d = an),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = yn), (g = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
                  (f = null == u ? s : Xe(u)),
                  (m = null == c ? s : Xe(c)),
                  ((s = new d(g, h + "leave", u, n, o)).target = f),
                  (s.relatedTarget = m),
                  (g = null),
                  Ye(o) === r &&
                    (((d = new d(p, h + "enter", c, n, o)).target = m),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  u && c)
                )
                  e: {
                    for (d = rd, h = c, m = 0, g = p = u; g; g = d(g)) m++;
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
                (null !== u && od(l, s, u, d, !1), null !== c && null !== f && od(l, f, c, d, !0));
              }
              if (
                "select" === (u = (s = r ? Xe(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ("input" === u && "file" === s.type)
              )
                var y = Hn;
              else if (Ln(s))
                if (Bn) y = Gn;
                else {
                  y = Qn;
                  var b = Kn;
                }
              else
                !(u = s.nodeName) ||
                "input" !== u.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && _t(r.elementType) && (y = Hn)
                  : (y = Yn);
              switch (
                (y && (y = y(e, r))
                  ? On(l, y, n, o)
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
                  (Ln(b) || "true" === b.contentEditable) && ((ar = b), (lr = r), (ir = null));
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
                  ((sr = !1), ur(l, n, o));
                  break;
                case "selectionchange":
                  if (or) break;
                case "keydown":
                case "keyup":
                  ur(l, n, o);
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
                jn
                  ? Tn(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (x = "onCompositionStart");
              (x &&
                (_n &&
                  "ko" !== n.locale &&
                  (jn || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && jn && (w = qt())
                    : ((Vt = "value" in (Ut = o) ? Ut.value : Ut.textContent), (jn = !0))),
                0 < (b = nd(r, x)).length &&
                  ((x = new dn(x, e, null, n, o)),
                  l.push({ event: x, listeners: b }),
                  (w || null !== (w = Mn(n))) && (x.data = w))),
                (w = Nn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Pn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Pn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (jn)
                        return "compositionend" === e || (!En && Tn(e, t))
                          ? ((e = qt()), (Wt = Vt = Ut = null), (jn = !1), e)
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
                  ((b = new dn("onBeforeInput", "beforeinput", null, n, o)),
                  l.push({ event: b, listeners: x }),
                  (b.data = w)),
                (function (e, t, n, r, o) {
                  if ("submit" === t && n && n.stateNode === o) {
                    var a = $c((o[Be] || null).action),
                      l = r.submitter;
                    l &&
                      null !==
                        (t = (t = l[Be] || null)
                          ? $c(t.formAction)
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
                              if (0 !== Rc) {
                                var e = l ? Uc(o, l) : new FormData(o);
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
                                (e = l ? Uc(o, l) : new FormData(o)),
                                ei(n, { pending: !0, data: e, method: o.method, action: a }, a, e));
                          },
                          currentTarget: o,
                        },
                      ],
                    });
                  }
                })(l, e, r, n, o));
            }
            Qc(l, t);
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
                (null != (o = Ft(e, n)) && r.unshift(td(e, o, a)),
                null != (o = Ft(e, t)) && r.push(td(e, o, a))),
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
              u = i.stateNode;
            if (((i = i.tag), null !== s && s === r)) break;
            ((5 !== i && 26 !== i && 27 !== i) ||
              null === u ||
              ((s = u),
              o
                ? null != (u = Ft(n, a)) && l.unshift(td(n, u, s))
                : o || (null != (u = Ft(n, a)) && l.push(td(n, u, s)))),
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
        function ud(e, t, n, r, o, a) {
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
              ((r = Tt("" + r)), e.setAttribute(n, r));
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
                    ? ("input" !== t && ud(e, t, "name", o.name, o, null),
                      ud(e, t, "formEncType", o.formEncType, o, null),
                      ud(e, t, "formMethod", o.formMethod, o, null),
                      ud(e, t, "formTarget", o.formTarget, o, null))
                    : (ud(e, t, "encType", o.encType, o, null),
                      ud(e, t, "method", o.method, o, null),
                      ud(e, t, "target", o.target, o, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = Tt("" + r)), e.setAttribute(n, r));
              break;
            case "onClick":
              null != r && (e.onclick = Mt);
              break;
            case "onScroll":
              null != r && Yc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Yc("scrollend", e);
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
              ((n = Tt("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
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
              (Yc("beforetoggle", e), Yc("toggle", e), it(e, "popover", r));
              break;
            case "xlinkActuate":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
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
                it(e, (n = zt.get(n) || n), r);
          }
        }
        function cd(e, t, n, r, o, a) {
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
              null != r && Yc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Yc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Mt);
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
                "function" == typeof (a = null != (a = e[Be] || null) ? a[n] : null) &&
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
              (Yc("error", e), Yc("load", e));
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
                        ud(e, t, r, i, n, null);
                    }
                }
              return (
                a && ud(e, t, "srcSet", n.srcSet, n, null),
                void (o && ud(e, t, "src", n.src, n, null))
              );
            case "input":
              Yc("invalid", e);
              var s = (r = i = a = null),
                u = null,
                c = null;
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
                        u = d;
                        break;
                      case "defaultChecked":
                        c = d;
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
                        ud(e, t, o, d, n, null);
                    }
                }
              return void yt(e, r, s, u, c, i, a, !1);
            case "select":
              for (a in (Yc("invalid", e), (o = i = r = null), n))
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
                      ud(e, t, a, s, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!o),
                void (null != t ? wt(e, !!o, t, !1) : null != n && wt(e, !!o, n, !0))
              );
            case "textarea":
              for (i in (Yc("invalid", e), (r = a = o = null), n))
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
                      ud(e, t, i, s, n, null);
                  }
              return void kt(e, o, a, r);
            case "option":
              for (u in n)
                n.hasOwnProperty(u) &&
                  null != (o = n[u]) &&
                  ("selected" === u
                    ? (e.selected = o && "function" != typeof o && "symbol" != typeof o)
                    : ud(e, t, u, o, n, null));
              return;
            case "dialog":
              (Yc("beforetoggle", e), Yc("toggle", e), Yc("cancel", e), Yc("close", e));
              break;
            case "iframe":
            case "object":
              Yc("load", e);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qc.length; o++) Yc(qc[o], e);
              break;
            case "image":
              (Yc("error", e), Yc("load", e));
              break;
            case "details":
              Yc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (Yc("error", e), Yc("load", e));
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
              for (c in n)
                if (n.hasOwnProperty(c) && null != (o = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(l(137, t));
                    default:
                      ud(e, t, c, o, n, null);
                  }
              return;
            default:
              if (_t(t)) {
                for (d in n)
                  n.hasOwnProperty(d) && void 0 !== (o = n[d]) && cd(e, t, d, o, n, void 0);
                return;
              }
          }
          for (s in n) n.hasOwnProperty(s) && null != (o = n[s]) && ud(e, t, s, o, n, null);
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
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data) || "/&" === n) {
                if (0 === r) return (e.removeChild(o), void $f(t));
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
          $f(t);
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
        function zd(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (zd(n), Qe(n));
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
            if (null === (e = jd(e.nextSibling))) return null;
          }
          return e;
        }
        function Td(e) {
          return "$?" === e.data || "$~" === e.data;
        }
        function Md(e) {
          return "$!" === e.data || ("$?" === e.data && "loading" !== e.ownerDocument.readyState);
        }
        function jd(e) {
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
        function Ld(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n || "/&" === n) {
                if (0 === t) return jd(e.nextSibling);
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n) || t++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function Od(e) {
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
        var Id = new Map(),
          Fd = new Set();
        function Hd(e) {
          return "function" == typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var Bd = L.d;
        L.d = {
          f: function () {
            var e = Bd.f(),
              t = Zu();
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
            var r = $d;
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
                  a = Wd(e);
                  break;
                case "script":
                  a = Qd(e);
              }
              Id.has(a) ||
                ((e = f(
                  { rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t },
                  n,
                )),
                Id.set(a, e),
                null !== r.querySelector(o) ||
                  ("style" === t && r.querySelector(qd(a))) ||
                  ("script" === t && r.querySelector(Yd(a))) ||
                  (dd((t = r.createElement("link")), "link", e), Je(t), r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Bd.m(e, t);
            var n = $d;
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
                !Id.has(a) &&
                ((e = f({ rel: "modulepreload", href: e }, t)),
                Id.set(a, e),
                null === n.querySelector(o))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Yd(a))) return;
                }
                (dd((r = n.createElement("link")), "link", e), Je(r), n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            Bd.X(e, t);
            var n = $d;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                o = Qd(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Yd(o))) ||
                  ((e = f({ src: e, async: !0 }, t)),
                  (t = Id.get(o)) && Jd(e, t),
                  Je((a = n.createElement("script"))),
                  dd(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
          S: function (e, t, n) {
            Bd.S(e, t, n);
            var r = $d;
            if (r && e) {
              var o = Ze(r).hoistableStyles,
                a = Wd(e);
              t = t || "default";
              var l = o.get(a);
              if (!l) {
                var i = { loading: 0, preload: null };
                if ((l = r.querySelector(qd(a)))) i.loading = 5;
                else {
                  ((e = f({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
                    (n = Id.get(a)) && Zd(e, n));
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
            Bd.M(e, t);
            var n = $d;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                o = Qd(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Yd(o))) ||
                  ((e = f({ src: e, async: !0, type: "module" }, t)),
                  (t = Id.get(o)) && Jd(e, t),
                  Je((a = n.createElement("script"))),
                  dd(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
        };
        var $d = "undefined" == typeof document ? null : document;
        function Ud(e, t, n) {
          var r = $d;
          if (r && "string" == typeof t && t) {
            var o = gt(t);
            ((o = 'link[rel="' + e + '"][href="' + o + '"]'),
              "string" == typeof n && (o += '[crossorigin="' + n + '"]'),
              Fd.has(o) ||
                (Fd.add(o),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(o) &&
                  (dd((t = r.createElement("link")), "link", e), Je(t), r.head.appendChild(t))));
          }
        }
        function Vd(e, t, n, r) {
          var o,
            a,
            i,
            s,
            u = (u = W.current) ? Hd(u) : null;
          if (!u) throw Error(l(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" == typeof n.precedence && "string" == typeof n.href
                ? ((t = Wd(n.href)),
                  (r = (n = Ze(u).hoistableStyles).get(t)) ||
                    ((r = { type: "style", instance: null, count: 0, state: null }), n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" == typeof n.href &&
                "string" == typeof n.precedence
              ) {
                e = Wd(n.href);
                var c = Ze(u).hoistableStyles,
                  d = c.get(e);
                if (
                  (d ||
                    ((u = u.ownerDocument || u),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, d),
                    (c = u.querySelector(qd(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    Id.has(e) ||
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
                      Id.set(e, n),
                      c ||
                        ((o = u),
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
                    (r = (n = Ze(u).hoistableScripts).get(t)) ||
                      ((r = { type: "script", instance: null, count: 0, state: null }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(l(444, e));
          }
        }
        function Wd(e) {
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
                o = Wd(n.href);
                var a = e.querySelector(qd(o));
                if (a) return ((t.state.loading |= 4), (t.instance = a), Je(a), a);
                ((r = Kd(n)),
                  (o = Id.get(o)) && Zd(r, o),
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
                  (o = e.querySelector(Yd(a)))
                    ? ((t.instance = o), Je(o), o)
                    : ((r = n),
                      (o = Id.get(a)) && Jd((r = f({}, n)), o),
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
              (e.count++, (lf = new Map()), t.forEach(uf, e), (lf = null), af.call(e)));
        }
        function uf(e, t) {
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
        var cf = {
          $$typeof: w,
          Provider: null,
          Consumer: null,
          _currentValue: O,
          _currentValue2: O,
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
            (this.expirationTimes = Te(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Te(0)),
            (this.hiddenUpdates = Te(null)),
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
            return e ? (e = Or) : Or;
          })(o)),
            null === r.context ? (r.context = o) : (r.pendingContext = o),
            ((r = ya(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = ba(e, r, t)) && (Ku(n, 0, t), wa(n, e, t)));
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
            var t = jr(e, 67108864);
            (null !== t && Ku(t, 0, 67108864), mf(e, 67108864));
          }
        }
        function gf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Wu(),
              n = jr(e, (t = Oe(t)));
            (null !== n && Ku(n, 0, t), mf(e, t));
          }
        }
        var vf = !0;
        function yf(e, t, n, r) {
          var o = R.T;
          R.T = null;
          var a = L.p;
          try {
            ((L.p = 2), wf(e, t, n, r));
          } finally {
            ((L.p = a), (R.T = o));
          }
        }
        function bf(e, t, n, r) {
          var o = R.T;
          R.T = null;
          var a = L.p;
          try {
            ((L.p = 8), wf(e, t, n, r));
          } finally {
            ((L.p = a), (R.T = o));
          }
        }
        function wf(e, t, n, r) {
          if (vf) {
            var o = xf(r);
            if (null === o) (ed(e, t, r, kf, n), Rf(e, r));
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return ((Nf = Lf(Nf, e, t, n, r, o)), !0);
                  case "dragenter":
                    return ((_f = Lf(_f, e, t, n, r, o)), !0);
                  case "mouseover":
                    return ((zf = Lf(zf, e, t, n, r, o)), !0);
                  case "pointerover":
                    var a = o.pointerId;
                    return (Pf.set(a, Lf(Pf.get(a) || null, e, t, n, r, o)), !0);
                  case "gotpointercapture":
                    return ((a = o.pointerId), Tf.set(a, Lf(Tf.get(a) || null, e, t, n, r, o)), !0);
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rf(e, r), 4 & t && -1 < jf.indexOf(e))) {
              for (; null !== o; ) {
                var a = Ge(o);
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
                          (Lc(a), !(6 & fu) && ((Ru = ie() + 500), Oc(0, !1)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      (null !== (i = jr(a, 2)) && Ku(i, 0, 2), Zu(), mf(a, 2));
                  }
                if ((null === (a = xf(r)) && ed(e, t, r, kf, n), a === o)) break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else ed(e, t, r, null, n);
          }
        }
        function xf(e) {
          return Sf((e = Rt(e)));
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
                if (null !== (e = u(t))) return e;
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
                case ue:
                  return 2;
                case ce:
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
          zf = null,
          Pf = new Map(),
          Tf = new Map(),
          Mf = [],
          jf =
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
              _f = null;
              break;
            case "mouseover":
            case "mouseout":
              zf = null;
              break;
            case "pointerover":
            case "pointerout":
              Pf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tf.delete(t.pointerId);
          }
        }
        function Lf(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = Ge(t)) && hf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Of(e) {
          var t = Ye(e.target);
          if (null !== t) {
            var n = i(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = s(n)))
                  return (
                    (e.blockedOn = t),
                    void Ie(e.priority, function () {
                      gf(n);
                    })
                  );
              } else if (31 === t) {
                if (null !== (t = u(n)))
                  return (
                    (e.blockedOn = t),
                    void Ie(e.priority, function () {
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
            ((jt = r), n.target.dispatchEvent(r), (jt = null), t.shift());
          }
          return !0;
        }
        function Af(e, t, n) {
          Df(e) && n.delete(t);
        }
        function If() {
          ((Cf = !1),
            null !== Nf && Df(Nf) && (Nf = null),
            null !== _f && Df(_f) && (_f = null),
            null !== zf && Df(zf) && (zf = null),
            Pf.forEach(Af),
            Tf.forEach(Af));
        }
        function Ff(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Cf || ((Cf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, If)));
        }
        var Hf = null;
        function Bf(e) {
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
                var a = Ge(n);
                null !== a &&
                  (e.splice(t, 3),
                  (t -= 3),
                  ei(a, { pending: !0, data: o, method: n.method, action: r }, r, o));
              }
            }));
        }
        function $f(e) {
          function t(t) {
            return Ff(t, e);
          }
          (null !== Nf && Ff(Nf, e),
            null !== _f && Ff(_f, e),
            null !== zf && Ff(zf, e),
            Pf.forEach(t),
            Tf.forEach(t));
          for (var n = 0; n < Mf.length; n++) {
            var r = Mf[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < Mf.length && null === (n = Mf[0]).blockedOn; )
            (Of(n), null === n.blockedOn && Mf.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var o = n[r],
                a = n[r + 1],
                l = o[Be] || null;
              if ("function" == typeof a) l || Bf(n);
              else if (l) {
                var i = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((o = a), (l = a[Be] || null))) i = l.formAction;
                  else if (null !== Sf(o)) continue;
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
        function Vf(e) {
          this._internalRoot = e;
        }
        function Wf(e) {
          this._internalRoot = e;
        }
        ((Wf.prototype.render = Vf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            ff(t.current, Wu(), e, t, null, null);
          }),
          (Wf.prototype.unmount = Vf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (ff(e.current, 2, null, e, null, null), Zu(), (t[$e] = null));
              }
            }),
          (Wf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ae();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Mf.length && 0 !== t && t < Mf[n].priority; n++);
              (Mf.splice(n, 0, e), 0 === n && Of(e));
            }
          }));
        var qf = o.version;
        if ("19.2.4" !== qf) throw Error(l(527, qf, "19.2.4"));
        L.findDOMNode = function (e) {
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
                    if (a === n) return (c(o), e);
                    if (a === r) return (c(o), t);
                    a = a.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) ((n = o), (r = a));
                else {
                  for (var s = !1, u = o.child; u; ) {
                    if (u === n) {
                      ((s = !0), (n = o), (r = a));
                      break;
                    }
                    if (u === r) {
                      ((s = !0), (r = o), (n = a));
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!s) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        ((s = !0), (n = a), (r = o));
                        break;
                      }
                      if (u === r) {
                        ((s = !0), (r = a), (n = o));
                        break;
                      }
                      u = u.sibling;
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
            (t = (function (e, t, n, r, o, a, l, i, s, u, c, d) {
              return (
                (e = new df(e, t, n, l, s, u, c, d, i)),
                (t = 1),
                !0 === a && (t |= 24),
                (a = Ar(3, null, null, t)),
                (e.current = a),
                (a.stateNode = e),
                (t = Fo()).refCount++,
                (e.pooledCache = t),
                t.refCount++,
                (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
                ga(a),
                e
              );
            })(e, 1, !1, null, 0, r, o, null, a, i, s, Uf)),
            (e[$e] = t.current),
            Zc(e),
            new Vf(t)
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
        function u(e, t) {
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
                r = u(n, t.crossOrigin),
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
                  var n = u(t.as, t.crossOrigin);
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
                r = u(n, t.crossOrigin);
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
                var n = u(t.as, t.crossOrigin);
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
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
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
          var o = r.ref;
          return { $$typeof: n, type: e, key: t, ref: void 0 !== o ? o : null, props: r };
        }
        function _(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var z = /\/+/g;
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
        function T(e, t, o, a, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case f:
                    return T((c = e._init)(e._payload), t, o, a, l);
                }
            }
          if (c)
            return (
              (l = l(e)),
              (c = "" === a ? "." + P(e, 0) : a),
              k(l)
                ? ((o = ""),
                  null != c && (o = c.replace(z, "$&/") + "/"),
                  T(l, t, o, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (_(l) &&
                    ((s = l),
                    (u =
                      o +
                      (null == l.key || (e && e.key === l.key)
                        ? ""
                        : ("" + l.key).replace(z, "$&/") + "/") +
                      c),
                    (l = N(s.type, u, s.props))),
                  t.push(l)),
              1
            );
          c = 0;
          var d,
            p = "" === a ? "." : a + ":";
          if (k(e))
            for (var h = 0; h < e.length; h++) c += T((a = e[h]), t, o, (i = p + P(a, h)), l);
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
              c += T((a = a.value), t, o, (i = p + P(a, h++)), l);
          else if ("object" === i) {
            if ("function" == typeof e.then)
              return T(
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
          return c;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function j(e) {
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
          L = {
            map: M,
            forEach: function (e, t, n) {
              M(
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
                M(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                M(e, function (e) {
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
          (t.Children = L),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = l),
          (t.PureComponent = w),
          (t.StrictMode = a),
          (t.Suspense = c),
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
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: j };
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
                u = i + 1,
                c = e[u];
              if (0 > a(s, n))
                u < o && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                ((e[r] = c), (e[u] = n), (r = u));
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
        var u = [],
          c = [],
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
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              (o(c), (t.sortIndex = t.expirationTime), n(u, t));
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), x(e), !h))
            if (null !== r(u)) ((h = !0), E || ((E = !0), S()));
            else {
              var t = r(c);
              null !== t && j(k, t.startTime - e);
            }
        }
        var S,
          E = !1,
          C = -1,
          N = 5,
          _ = -1;
        function z() {
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
                var a = p;
                try {
                  t: {
                    for (x(e), f = r(u); null !== f && !(f.expirationTime > e && z()); ) {
                      var l = f.callback;
                      if ("function" == typeof l) {
                        ((f.callback = null), (p = f.priorityLevel));
                        var i = l(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" == typeof i)) {
                          ((f.callback = i), x(e), (n = !0));
                          break t;
                        }
                        (f === r(u) && o(u), x(e));
                      } else o(u);
                      f = r(u);
                    }
                    if (null !== f) n = !0;
                    else {
                      var s = r(c);
                      (null !== s && j(k, s.startTime - e), (n = !1));
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
        if ("function" == typeof w)
          S = function () {
            w(P);
          };
        else if ("undefined" != typeof MessageChannel) {
          var T = new MessageChannel(),
            M = T.port2;
          ((T.port1.onmessage = P),
            (S = function () {
              M.postMessage(null);
            }));
        } else
          S = function () {
            y(P, 0);
          };
        function j(e, n) {
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
                  n(c, e),
                  null === r(u) && e === r(c) && (g ? (b(C), (C = -1)) : (g = !0), j(k, a - l)))
                : ((e.sortIndex = i), n(u, e), h || m || ((h = !0), E || ((E = !0), S()))),
              e
            );
          }),
          (t.unstable_shouldYield = z),
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
        function u(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !o(e, n);
          } catch (e) {
            return !0;
          }
        }
        var c =
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
                  c = r[1];
                return (
                  i(
                    function () {
                      ((o.value = n), (o.getSnapshot = t), u(o) && c({ inst: o }));
                    },
                    [e, n, t],
                  ),
                  l(
                    function () {
                      return (
                        u(o) && c({ inst: o }),
                        e(function () {
                          u(o) && c({ inst: o });
                        })
                      );
                    },
                    [e],
                  ),
                  s(n),
                  n
                );
              };
        t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
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
        for (c = 0; c < e.length; c++) {
          for (var [n, r, o] = e[c], i = !0, s = 0; s < n.length; s++)
            (!1 & o || l >= o) && Object.keys(a.O).every((e) => a.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((i = !1), o < l && (l = o));
          if (i) {
            e.splice(c--, 1);
            var u = r();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
      e[c] = [n, r, o];
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
      var e = { 742: 0, 869: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            o,
            [l, i, s] = n,
            u = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (r in i) a.o(i, r) && (a.m[r] = i[r]);
            if (s) var c = s(a);
          }
          for (t && t(n); u < l.length; u++)
            ((o = l[u]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
          return a.O(c);
        },
        n = (self.webpackChunkrit_igme430 = self.webpackChunkrit_igme430 || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })(),
    (a.nc = void 0));
  var l = a.O(void 0, [869], () => a(445));
  l = a.O(l);
})();
