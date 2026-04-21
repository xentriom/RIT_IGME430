/*! For license information please see settingsBundle.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    n,
    r = {
      142(e, t, n) {
        var r = n(540),
          a = n.t(r, 2),
          o = n(338),
          l = n(522),
          i = n(848);
        function s() {
          const e = (0, l.c)(1);
          let t;
          return (
            e[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)("div", { children: (0, i.jsx)("h1", { children: "Settings" }) })),
                (e[0] = t))
              : (t = e[0]),
            t
          );
        }
        const u = (0, r.createContext)({ isLoggedIn: !1, session: null, setSession: () => {} });
        function c(e) {
          const t = (0, l.c)(7),
            { children: n } = e,
            [a, o] = (0, r.useState)(null);
          let s, c, d;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = () => {
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
              (c = []),
              (t[0] = s),
              (t[1] = c))
            : ((s = t[0]), (c = t[1])),
            (0, r.useEffect)(s, c),
            t[2] !== a
              ? ((d =
                  null === a
                    ? { isLoggedIn: !1, session: null, setSession: o }
                    : { isLoggedIn: !0, session: a, setSession: o }),
                (t[2] = a),
                (t[3] = d))
              : (d = t[3]));
          const f = d;
          let p;
          return (
            t[4] !== n || t[5] !== f
              ? ((p = (0, i.jsx)(u.Provider, { value: f, children: n })),
                (t[4] = n),
                (t[5] = f),
                (t[6] = p))
              : (p = t[6]),
            p
          );
        }
        function d(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
          return function (r) {
            if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
          };
        }
        function f(e, t) {
          if ("function" == typeof e) return e(t);
          null != e && (e.current = t);
        }
        function p(...e) {
          return (t) => {
            let n = !1;
            const r = e.map((e) => {
              const r = f(e, t);
              return (n || "function" != typeof r || (n = !0), r);
            });
            if (n)
              return () => {
                for (let t = 0; t < r.length; t++) {
                  const n = r[t];
                  "function" == typeof n ? n() : f(e[t], null);
                }
              };
          };
        }
        function m(...e) {
          return r.useCallback(p(...e), e);
        }
        function h(e, t = []) {
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
                const s = (t) => {
                  const { scope: n, children: a, ...s } = t,
                    u = n?.[e]?.[l] || o,
                    c = r.useMemo(() => s, Object.values(s));
                  return (0, i.jsx)(u.Provider, { value: c, children: a });
                };
                return (
                  (s.displayName = t + "Provider"),
                  [
                    s,
                    function (n, i) {
                      const s = i?.[e]?.[l] || o,
                        u = r.useContext(s);
                      if (u) return u;
                      if (void 0 !== a) return a;
                      throw new Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              g(a, ...t),
            ]
          );
        }
        function g(...e) {
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
        "undefined" == typeof window || !window.document || window.document.createElement;
        var y = n(961);
        function v(e) {
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
              return (n.type !== r.Fragment && (o.ref = t ? p(t, e) : e), r.cloneElement(n, o));
            }
            return r.Children.count(n) > 1 ? r.Children.only(null) : null;
          });
          return ((t.displayName = `${e}.SlotClone`), t);
        }
        var b = Symbol("radix.slottable");
        function w(e) {
          return (
            r.isValidElement(e) &&
            "function" == typeof e.type &&
            "__radixId" in e.type &&
            e.type.__radixId === b
          );
        }
        var k = [
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
          const n = (function (e) {
              const t = v(e),
                n = r.forwardRef((e, n) => {
                  const { children: a, ...o } = e,
                    l = r.Children.toArray(a),
                    s = l.find(w);
                  if (s) {
                    const e = s.props.children,
                      a = l.map((t) =>
                        t === s
                          ? r.Children.count(e) > 1
                            ? r.Children.only(null)
                            : r.isValidElement(e)
                              ? e.props.children
                              : null
                          : t,
                      );
                    return (0, i.jsx)(t, {
                      ...o,
                      ref: n,
                      children: r.isValidElement(e) ? r.cloneElement(e, void 0, a) : null,
                    });
                  }
                  return (0, i.jsx)(t, { ...o, ref: n, children: a });
                });
              return ((n.displayName = `${e}.Slot`), n);
            })(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const { asChild: a, ...o } = e,
                l = a ? n : t;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, i.jsx)(l, { ...o, ref: r })
              );
            });
          return ((a.displayName = `Primitive.${t}`), { ...e, [t]: a });
        }, {});
        function x(e) {
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
        var S,
          E = "dismissableLayer.update",
          C = r.createContext({
            layers: new Set(),
            layersWithOutsidePointerEventsDisabled: new Set(),
            branches: new Set(),
          }),
          P = r.forwardRef((e, t) => {
            const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: o,
                onFocusOutside: l,
                onInteractOutside: s,
                onDismiss: u,
                ...c
              } = e,
              f = r.useContext(C),
              [p, h] = r.useState(null),
              g = p?.ownerDocument ?? globalThis?.document,
              [, y] = r.useState({}),
              v = m(t, (e) => h(e)),
              b = Array.from(f.layers),
              [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
              P = b.indexOf(w),
              _ = p ? b.indexOf(p) : -1,
              z = f.layersWithOutsidePointerEventsDisabled.size > 0,
              L = _ >= P,
              O = (function (e, t = globalThis?.document) {
                const n = x(e),
                  a = r.useRef(!1),
                  o = r.useRef(() => {});
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                        if (e.target && !a.current) {
                          let r = function () {
                            N("dismissableLayer.pointerDownOutside", n, a, { discrete: !0 });
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
                  n = [...f.branches].some((e) => e.contains(t));
                L && !n && (o?.(e), s?.(e), e.defaultPrevented || u?.());
              }, g),
              R = (function (e, t = globalThis?.document) {
                const n = x(e),
                  a = r.useRef(!1);
                return (
                  r.useEffect(() => {
                    const e = (e) => {
                      e.target &&
                        !a.current &&
                        N(
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
                [...f.branches].some((e) => e.contains(t)) ||
                  (l?.(e), s?.(e), e.defaultPrevented || u?.());
              }, g);
            return (
              (function (e, t = globalThis?.document) {
                const n = x(e);
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
                _ === f.layers.size - 1 &&
                  (a?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
              }, g),
              r.useEffect(() => {
                if (p)
                  return (
                    n &&
                      (0 === f.layersWithOutsidePointerEventsDisabled.size &&
                        ((S = g.body.style.pointerEvents), (g.body.style.pointerEvents = "none")),
                      f.layersWithOutsidePointerEventsDisabled.add(p)),
                    f.layers.add(p),
                    T(),
                    () => {
                      n &&
                        1 === f.layersWithOutsidePointerEventsDisabled.size &&
                        (g.body.style.pointerEvents = S);
                    }
                  );
              }, [p, g, n, f]),
              r.useEffect(
                () => () => {
                  p &&
                    (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), T());
                },
                [p, f],
              ),
              r.useEffect(() => {
                const e = () => y({});
                return (document.addEventListener(E, e), () => document.removeEventListener(E, e));
              }, []),
              (0, i.jsx)(k.div, {
                ...c,
                ref: v,
                style: { pointerEvents: z ? (L ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: d(e.onFocusCapture, R.onFocusCapture),
                onBlurCapture: d(e.onBlurCapture, R.onBlurCapture),
                onPointerDownCapture: d(e.onPointerDownCapture, O.onPointerDownCapture),
              })
            );
          });
        function T() {
          const e = new CustomEvent(E);
          document.dispatchEvent(e);
        }
        function N(e, t, n, { discrete: r }) {
          const a = n.originalEvent.target,
            o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
          (t && a.addEventListener(e, t, { once: !0 }),
            r
              ? (function (e, t) {
                  e && y.flushSync(() => e.dispatchEvent(t));
                })(a, o)
              : a.dispatchEvent(o));
        }
        ((P.displayName = "DismissableLayer"),
          (r.forwardRef((e, t) => {
            const n = r.useContext(C),
              a = r.useRef(null),
              o = m(t, a);
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
              (0, i.jsx)(k.div, { ...e, ref: o })
            );
          }).displayName = "DismissableLayerBranch"));
        var _ = globalThis?.document ? r.useLayoutEffect : () => {},
          z = a[" useId ".trim().toString()] || (() => {}),
          L = 0;
        const O = ["top", "right", "bottom", "left"],
          R = Math.min,
          A = Math.max,
          D = Math.round,
          M = Math.floor,
          F = (e) => ({ x: e, y: e }),
          j = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function I(e, t, n) {
          return A(e, R(t, n));
        }
        function $(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function H(e) {
          return e.split("-")[0];
        }
        function B(e) {
          return e.split("-")[1];
        }
        function U(e) {
          return "x" === e ? "y" : "x";
        }
        function V(e) {
          return "y" === e ? "height" : "width";
        }
        function W(e) {
          const t = e[0];
          return "t" === t || "b" === t ? "y" : "x";
        }
        function Q(e) {
          return U(W(e));
        }
        function q(e) {
          return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
        }
        const Y = ["left", "right"],
          X = ["right", "left"],
          K = ["top", "bottom"],
          G = ["bottom", "top"];
        function Z(e) {
          const t = H(e);
          return j[t] + e.slice(t.length);
        }
        function J(e) {
          return "number" != typeof e
            ? (function (e) {
                return { top: 0, right: 0, bottom: 0, left: 0, ...e };
              })(e)
            : { top: e, right: e, bottom: e, left: e };
        }
        function ee(e) {
          const { x: t, y: n, width: r, height: a } = e;
          return { width: r, height: a, top: n, left: t, right: t + r, bottom: n + a, x: t, y: n };
        }
        function te(e, t, n) {
          let { reference: r, floating: a } = e;
          const o = W(t),
            l = Q(t),
            i = V(l),
            s = H(t),
            u = "y" === o,
            c = r.x + r.width / 2 - a.width / 2,
            d = r.y + r.height / 2 - a.height / 2,
            f = r[i] / 2 - a[i] / 2;
          let p;
          switch (s) {
            case "top":
              p = { x: c, y: r.y - a.height };
              break;
            case "bottom":
              p = { x: c, y: r.y + r.height };
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
          switch (B(t)) {
            case "start":
              p[l] -= f * (n && u ? -1 : 1);
              break;
            case "end":
              p[l] += f * (n && u ? -1 : 1);
          }
          return p;
        }
        async function ne(e, t) {
          var n;
          void 0 === t && (t = {});
          const { x: r, y: a, platform: o, rects: l, elements: i, strategy: s } = e,
            {
              boundary: u = "clippingAncestors",
              rootBoundary: c = "viewport",
              elementContext: d = "floating",
              altBoundary: f = !1,
              padding: p = 0,
            } = $(t, e),
            m = J(p),
            h = i[f ? ("floating" === d ? "reference" : "floating") : d],
            g = ee(
              await o.getClippingRect({
                element:
                  null == (n = await (null == o.isElement ? void 0 : o.isElement(h))) || n
                    ? h
                    : h.contextElement ||
                      (await (null == o.getDocumentElement
                        ? void 0
                        : o.getDocumentElement(i.floating))),
                boundary: u,
                rootBoundary: c,
                strategy: s,
              }),
            ),
            y =
              "floating" === d
                ? { x: r, y: a, width: l.floating.width, height: l.floating.height }
                : l.reference,
            v = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(i.floating)),
            b = ((await (null == o.isElement ? void 0 : o.isElement(v))) &&
              (await (null == o.getScale ? void 0 : o.getScale(v)))) || { x: 1, y: 1 },
            w = ee(
              o.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: i,
                    rect: y,
                    offsetParent: v,
                    strategy: s,
                  })
                : y,
            );
          return {
            top: (g.top - w.top + m.top) / b.y,
            bottom: (w.bottom - g.bottom + m.bottom) / b.y,
            left: (g.left - w.left + m.left) / b.x,
            right: (w.right - g.right + m.right) / b.x,
          };
        }
        function re(e, t) {
          return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width,
          };
        }
        function ae(e) {
          return O.some((t) => e[t] >= 0);
        }
        const oe = new Set(["left", "top"]);
        function le() {
          return "undefined" != typeof window;
        }
        function ie(e) {
          return ce(e) ? (e.nodeName || "").toLowerCase() : "#document";
        }
        function se(e) {
          var t;
          return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
        }
        function ue(e) {
          var t;
          return null == (t = (ce(e) ? e.ownerDocument : e.document) || window.document)
            ? void 0
            : t.documentElement;
        }
        function ce(e) {
          return !!le() && (e instanceof Node || e instanceof se(e).Node);
        }
        function de(e) {
          return !!le() && (e instanceof Element || e instanceof se(e).Element);
        }
        function fe(e) {
          return !!le() && (e instanceof HTMLElement || e instanceof se(e).HTMLElement);
        }
        function pe(e) {
          return (
            !(!le() || "undefined" == typeof ShadowRoot) &&
            (e instanceof ShadowRoot || e instanceof se(e).ShadowRoot)
          );
        }
        function me(e) {
          const { overflow: t, overflowX: n, overflowY: r, display: a } = Ee(e);
          return (
            /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== a && "contents" !== a
          );
        }
        function he(e) {
          return /^(table|td|th)$/.test(ie(e));
        }
        function ge(e) {
          try {
            if (e.matches(":popover-open")) return !0;
          } catch (e) {}
          try {
            return e.matches(":modal");
          } catch (e) {
            return !1;
          }
        }
        const ye = /transform|translate|scale|rotate|perspective|filter/,
          ve = /paint|layout|strict|content/,
          be = (e) => !!e && "none" !== e;
        let we;
        function ke(e) {
          const t = de(e) ? Ee(e) : e;
          return (
            be(t.transform) ||
            be(t.translate) ||
            be(t.scale) ||
            be(t.rotate) ||
            be(t.perspective) ||
            (!xe() && (be(t.backdropFilter) || be(t.filter))) ||
            ye.test(t.willChange || "") ||
            ve.test(t.contain || "")
          );
        }
        function xe() {
          return (
            null == we &&
              (we =
                "undefined" != typeof CSS &&
                CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")),
            we
          );
        }
        function Se(e) {
          return /^(html|body|#document)$/.test(ie(e));
        }
        function Ee(e) {
          return se(e).getComputedStyle(e);
        }
        function Ce(e) {
          return de(e)
            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
            : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
        }
        function Pe(e) {
          if ("html" === ie(e)) return e;
          const t = e.assignedSlot || e.parentNode || (pe(e) && e.host) || ue(e);
          return pe(t) ? t.host : t;
        }
        function Te(e) {
          const t = Pe(e);
          return Se(t)
            ? e.ownerDocument
              ? e.ownerDocument.body
              : e.body
            : fe(t) && me(t)
              ? t
              : Te(t);
        }
        function Ne(e, t, n) {
          var r;
          (void 0 === t && (t = []), void 0 === n && (n = !0));
          const a = Te(e),
            o = a === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = se(a);
          if (o) {
            const e = _e(l);
            return t.concat(l, l.visualViewport || [], me(a) ? a : [], e && n ? Ne(e) : []);
          }
          return t.concat(a, Ne(a, [], n));
        }
        function _e(e) {
          return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
        }
        function ze(e) {
          const t = Ee(e);
          let n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0;
          const a = fe(e),
            o = a ? e.offsetWidth : n,
            l = a ? e.offsetHeight : r,
            i = D(n) !== o || D(r) !== l;
          return (i && ((n = o), (r = l)), { width: n, height: r, $: i });
        }
        function Le(e) {
          return de(e) ? e : e.contextElement;
        }
        function Oe(e) {
          const t = Le(e);
          if (!fe(t)) return F(1);
          const n = t.getBoundingClientRect(),
            { width: r, height: a, $: o } = ze(t);
          let l = (o ? D(n.width) : n.width) / r,
            i = (o ? D(n.height) : n.height) / a;
          return (
            (l && Number.isFinite(l)) || (l = 1),
            (i && Number.isFinite(i)) || (i = 1),
            { x: l, y: i }
          );
        }
        const Re = F(0);
        function Ae(e) {
          const t = se(e);
          return xe() && t.visualViewport
            ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
            : Re;
        }
        function De(e, t, n, r) {
          (void 0 === t && (t = !1), void 0 === n && (n = !1));
          const a = e.getBoundingClientRect(),
            o = Le(e);
          let l = F(1);
          t && (r ? de(r) && (l = Oe(r)) : (l = Oe(e)));
          const i = (function (e, t, n) {
            return (void 0 === t && (t = !1), !(!n || (t && n !== se(e))) && t);
          })(o, n, r)
            ? Ae(o)
            : F(0);
          let s = (a.left + i.x) / l.x,
            u = (a.top + i.y) / l.y,
            c = a.width / l.x,
            d = a.height / l.y;
          if (o) {
            const e = se(o),
              t = r && de(r) ? se(r) : r;
            let n = e,
              a = _e(n);
            for (; a && r && t !== n; ) {
              const e = Oe(a),
                t = a.getBoundingClientRect(),
                r = Ee(a),
                o = t.left + (a.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                l = t.top + (a.clientTop + parseFloat(r.paddingTop)) * e.y;
              ((s *= e.x),
                (u *= e.y),
                (c *= e.x),
                (d *= e.y),
                (s += o),
                (u += l),
                (n = se(a)),
                (a = _e(n)));
            }
          }
          return ee({ width: c, height: d, x: s, y: u });
        }
        function Me(e, t) {
          const n = Ce(e).scrollLeft;
          return t ? t.left + n : De(ue(e)).left + n;
        }
        function Fe(e, t) {
          const n = e.getBoundingClientRect();
          return { x: n.left + t.scrollLeft - Me(e, n), y: n.top + t.scrollTop };
        }
        function je(e, t, n) {
          let r;
          if ("viewport" === t)
            r = (function (e, t) {
              const n = se(e),
                r = ue(e),
                a = n.visualViewport;
              let o = r.clientWidth,
                l = r.clientHeight,
                i = 0,
                s = 0;
              if (a) {
                ((o = a.width), (l = a.height));
                const e = xe();
                (!e || (e && "fixed" === t)) && ((i = a.offsetLeft), (s = a.offsetTop));
              }
              const u = Me(r);
              if (u <= 0) {
                const e = r.ownerDocument,
                  t = e.body,
                  n = getComputedStyle(t),
                  a =
                    ("CSS1Compat" === e.compatMode &&
                      parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                    0,
                  l = Math.abs(r.clientWidth - t.clientWidth - a);
                l <= 25 && (o -= l);
              } else u <= 25 && (o += u);
              return { width: o, height: l, x: i, y: s };
            })(e, n);
          else if ("document" === t)
            r = (function (e) {
              const t = ue(e),
                n = Ce(e),
                r = e.ownerDocument.body,
                a = A(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                o = A(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
              let l = -n.scrollLeft + Me(e);
              const i = -n.scrollTop;
              return (
                "rtl" === Ee(r).direction && (l += A(t.clientWidth, r.clientWidth) - a),
                { width: a, height: o, x: l, y: i }
              );
            })(ue(e));
          else if (de(t))
            r = (function (e, t) {
              const n = De(e, !0, "fixed" === t),
                r = n.top + e.clientTop,
                a = n.left + e.clientLeft,
                o = fe(e) ? Oe(e) : F(1);
              return {
                width: e.clientWidth * o.x,
                height: e.clientHeight * o.y,
                x: a * o.x,
                y: r * o.y,
              };
            })(t, n);
          else {
            const n = Ae(e);
            r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
          }
          return ee(r);
        }
        function Ie(e, t) {
          const n = Pe(e);
          return !(n === t || !de(n) || Se(n)) && ("fixed" === Ee(n).position || Ie(n, t));
        }
        function $e(e, t, n) {
          const r = fe(t),
            a = ue(t),
            o = "fixed" === n,
            l = De(e, !0, o, t);
          let i = { scrollLeft: 0, scrollTop: 0 };
          const s = F(0);
          function u() {
            s.x = Me(a);
          }
          if (r || (!r && !o))
            if ((("body" !== ie(t) || me(a)) && (i = Ce(t)), r)) {
              const e = De(t, !0, o, t);
              ((s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop));
            } else a && u();
          o && !r && a && u();
          const c = !a || r || o ? F(0) : Fe(a, i);
          return {
            x: l.left + i.scrollLeft - s.x - c.x,
            y: l.top + i.scrollTop - s.y - c.y,
            width: l.width,
            height: l.height,
          };
        }
        function He(e) {
          return "static" === Ee(e).position;
        }
        function Be(e, t) {
          if (!fe(e) || "fixed" === Ee(e).position) return null;
          if (t) return t(e);
          let n = e.offsetParent;
          return (ue(e) === n && (n = n.ownerDocument.body), n);
        }
        function Ue(e, t) {
          const n = se(e);
          if (ge(e)) return n;
          if (!fe(e)) {
            let t = Pe(e);
            for (; t && !Se(t); ) {
              if (de(t) && !He(t)) return t;
              t = Pe(t);
            }
            return n;
          }
          let r = Be(e, t);
          for (; r && he(r) && He(r); ) r = Be(r, t);
          return r && Se(r) && He(r) && !ke(r)
            ? n
            : r ||
                (function (e) {
                  let t = Pe(e);
                  for (; fe(t) && !Se(t); ) {
                    if (ke(t)) return t;
                    if (ge(t)) return null;
                    t = Pe(t);
                  }
                  return null;
                })(e) ||
                n;
        }
        const Ve = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: a } = e;
            const o = "fixed" === a,
              l = ue(r),
              i = !!t && ge(t.floating);
            if (r === l || (i && o)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              u = F(1);
            const c = F(0),
              d = fe(r);
            if ((d || (!d && !o)) && (("body" !== ie(r) || me(l)) && (s = Ce(r)), d)) {
              const e = De(r);
              ((u = Oe(r)), (c.x = e.x + r.clientLeft), (c.y = e.y + r.clientTop));
            }
            const f = !l || d || o ? F(0) : Fe(l, s);
            return {
              width: n.width * u.x,
              height: n.height * u.y,
              x: n.x * u.x - s.scrollLeft * u.x + c.x + f.x,
              y: n.y * u.y - s.scrollTop * u.y + c.y + f.y,
            };
          },
          getDocumentElement: ue,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: a } = e;
            const o = [
                ...("clippingAncestors" === n
                  ? ge(t)
                    ? []
                    : (function (e, t) {
                        const n = t.get(e);
                        if (n) return n;
                        let r = Ne(e, [], !1).filter((e) => de(e) && "body" !== ie(e)),
                          a = null;
                        const o = "fixed" === Ee(e).position;
                        let l = o ? Pe(e) : e;
                        for (; de(l) && !Se(l); ) {
                          const t = Ee(l),
                            n = ke(l);
                          (n || "fixed" !== t.position || (a = null),
                            (
                              o
                                ? !n && !a
                                : (!n &&
                                    "static" === t.position &&
                                    a &&
                                    ("absolute" === a.position || "fixed" === a.position)) ||
                                  (me(l) && !n && Ie(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (a = t),
                            (l = Pe(l)));
                        }
                        return (t.set(e, r), r);
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              l = je(t, o[0], a);
            let i = l.top,
              s = l.right,
              u = l.bottom,
              c = l.left;
            for (let e = 1; e < o.length; e++) {
              const n = je(t, o[e], a);
              ((i = A(n.top, i)), (s = R(n.right, s)), (u = R(n.bottom, u)), (c = A(n.left, c)));
            }
            return { width: s - c, height: u - i, x: c, y: i };
          },
          getOffsetParent: Ue,
          getElementRects: async function (e) {
            const t = this.getOffsetParent || Ue,
              n = this.getDimensions,
              r = await n(e.floating);
            return {
              reference: $e(e.reference, await t(e.floating), e.strategy),
              floating: { x: 0, y: 0, width: r.width, height: r.height },
            };
          },
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            const { width: t, height: n } = ze(e);
            return { width: t, height: n };
          },
          getScale: Oe,
          isElement: de,
          isRTL: function (e) {
            return "rtl" === Ee(e).direction;
          },
        };
        function We(e, t) {
          return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        }
        const Qe = function (e) {
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
                    } = $(e, t);
                  if (null != (n = o.arrow) && n.alignmentOffset) return {};
                  const y = H(a),
                    v = W(i),
                    b = H(i) === i,
                    w = await (null == s.isRTL ? void 0 : s.isRTL(u.floating)),
                    k =
                      f ||
                      (b || !h
                        ? [Z(i)]
                        : (function (e) {
                            const t = Z(e);
                            return [q(e), t, q(t)];
                          })(i)),
                    x = "none" !== m;
                  !f &&
                    x &&
                    k.push(
                      ...(function (e, t, n, r) {
                        const a = B(e);
                        let o = (function (e, t, n) {
                          switch (e) {
                            case "top":
                            case "bottom":
                              return n ? (t ? X : Y) : t ? Y : X;
                            case "left":
                            case "right":
                              return t ? K : G;
                            default:
                              return [];
                          }
                        })(H(e), "start" === n, r);
                        return (
                          a && ((o = o.map((e) => e + "-" + a)), t && (o = o.concat(o.map(q)))), o
                        );
                      })(i, h, m, w),
                    );
                  const S = [i, ...k],
                    E = await s.detectOverflow(t, g),
                    C = [];
                  let P = (null == (r = o.flip) ? void 0 : r.overflows) || [];
                  if ((c && C.push(E[y]), d)) {
                    const e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      const r = B(e),
                        a = Q(e),
                        o = V(a);
                      let l =
                        "x" === a
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top";
                      return (t.reference[o] > t.floating[o] && (l = Z(l)), [l, Z(l)]);
                    })(a, l, w);
                    C.push(E[e[0]], E[e[1]]);
                  }
                  if (((P = [...P, { placement: a, overflows: C }]), !C.every((e) => e <= 0))) {
                    var T, N;
                    const e = ((null == (T = o.flip) ? void 0 : T.index) || 0) + 1,
                      t = S[e];
                    if (
                      t &&
                      ("alignment" !== d ||
                        v === W(t) ||
                        P.every((e) => W(e.placement) !== v || e.overflows[0] > 0))
                    )
                      return { data: { index: e, overflows: P }, reset: { placement: t } };
                    let n =
                      null ==
                      (N = P.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1],
                      )[0])
                        ? void 0
                        : N.placement;
                    if (!n)
                      switch (p) {
                        case "bestFit": {
                          var _;
                          const e =
                            null ==
                            (_ = P.filter((e) => {
                              if (x) {
                                const t = W(e.placement);
                                return t === v || "y" === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : _[0];
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
          qe = (e) => ({
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
                { element: u, padding: c = 0 } = $(e, t) || {};
              if (null == u) return {};
              const d = J(c),
                f = { x: n, y: r },
                p = Q(a),
                m = V(p),
                h = await l.getDimensions(u),
                g = "y" === p,
                y = g ? "top" : "left",
                v = g ? "bottom" : "right",
                b = g ? "clientHeight" : "clientWidth",
                w = o.reference[m] + o.reference[p] - f[p] - o.floating[m],
                k = f[p] - o.reference[p],
                x = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u));
              let S = x ? x[b] : 0;
              (S && (await (null == l.isElement ? void 0 : l.isElement(x)))) ||
                (S = i.floating[b] || o.floating[m]);
              const E = w / 2 - k / 2,
                C = S / 2 - h[m] / 2 - 1,
                P = R(d[y], C),
                T = R(d[v], C),
                N = P,
                _ = S - h[m] - T,
                z = S / 2 - h[m] / 2 + E,
                L = I(N, z, _),
                O =
                  !s.arrow &&
                  null != B(a) &&
                  z !== L &&
                  o.reference[m] / 2 - (z < N ? P : T) - h[m] / 2 < 0,
                A = O ? (z < N ? z - N : z - _) : 0;
              return {
                [p]: f[p] + A,
                data: { [p]: L, centerOffset: z - L - A, ...(O && { alignmentOffset: A }) },
                reset: O,
              };
            },
          }),
          Ye = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  const { x: n, y: r, placement: a, rects: o, middlewareData: l } = t,
                    { offset: i = 0, mainAxis: s = !0, crossAxis: u = !0 } = $(e, t),
                    c = { x: n, y: r },
                    d = W(a),
                    f = U(d);
                  let p = c[f],
                    m = c[d];
                  const h = $(i, t),
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
                  if (u) {
                    var y, v;
                    const e = "y" === f ? "width" : "height",
                      t = oe.has(H(a)),
                      n =
                        o.reference[d] -
                        o.floating[e] +
                        ((t && (null == (y = l.offset) ? void 0 : y[d])) || 0) +
                        (t ? 0 : g.crossAxis),
                      r =
                        o.reference[d] +
                        o.reference[e] +
                        (t ? 0 : (null == (v = l.offset) ? void 0 : v[d]) || 0) -
                        (t ? g.crossAxis : 0);
                    m < n ? (m = n) : m > r && (m = r);
                  }
                  return { [f]: p, [d]: m };
                },
              }
            );
          },
          Xe = (e, t, n) => {
            const r = new Map(),
              a = { platform: Ve, ...n },
              o = { ...a.platform, _c: r };
            return (async (e, t, n) => {
              const {
                  placement: r = "bottom",
                  strategy: a = "absolute",
                  middleware: o = [],
                  platform: l,
                } = n,
                i = l.detectOverflow ? l : { ...l, detectOverflow: ne },
                s = await (null == l.isRTL ? void 0 : l.isRTL(t));
              let u = await l.getElementRects({ reference: e, floating: t, strategy: a }),
                { x: c, y: d } = te(u, r, s),
                f = r,
                p = 0;
              const m = {};
              for (let n = 0; n < o.length; n++) {
                const h = o[n];
                if (!h) continue;
                const { name: g, fn: y } = h,
                  {
                    x: v,
                    y: b,
                    data: w,
                    reset: k,
                  } = await y({
                    x: c,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: a,
                    middlewareData: m,
                    rects: u,
                    platform: i,
                    elements: { reference: e, floating: t },
                  });
                ((c = null != v ? v : c),
                  (d = null != b ? b : d),
                  (m[g] = { ...m[g], ...w }),
                  k &&
                    p < 50 &&
                    (p++,
                    "object" == typeof k &&
                      (k.placement && (f = k.placement),
                      k.rects &&
                        (u =
                          !0 === k.rects
                            ? await l.getElementRects({ reference: e, floating: t, strategy: a })
                            : k.rects),
                      ({ x: c, y: d } = te(u, f, s))),
                    (n = -1)));
              }
              return { x: c, y: d, placement: f, strategy: a, middlewareData: m };
            })(e, t, { ...a, platform: o });
          };
        var Ke = "undefined" != typeof document ? r.useLayoutEffect : function () {};
        function Ge(e, t) {
          if (e === t) return !0;
          if (typeof e != typeof t) return !1;
          if ("function" == typeof e && e.toString() === t.toString()) return !0;
          let n, r, a;
          if (e && t && "object" == typeof e) {
            if (Array.isArray(e)) {
              if (((n = e.length), n !== t.length)) return !1;
              for (r = n; 0 !== r--; ) if (!Ge(e[r], t[r])) return !1;
              return !0;
            }
            if (((a = Object.keys(e)), (n = a.length), n !== Object.keys(t).length)) return !1;
            for (r = n; 0 !== r--; ) if (!{}.hasOwnProperty.call(t, a[r])) return !1;
            for (r = n; 0 !== r--; ) {
              const n = a[r];
              if (!(("_owner" === n && e.$$typeof) || Ge(e[n], t[n]))) return !1;
            }
            return !0;
          }
          return e != e && t != t;
        }
        function Ze(e) {
          return "undefined" == typeof window
            ? 1
            : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function Je(e, t) {
          const n = Ze(e);
          return Math.round(t * n) / n;
        }
        function et(e) {
          const t = r.useRef(e);
          return (
            Ke(() => {
              t.current = e;
            }),
            t
          );
        }
        const tt = (e, t) => {
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
                          l = H(n),
                          i = B(n),
                          s = "y" === W(n),
                          u = oe.has(l) ? -1 : 1,
                          c = o && s ? -1 : 1,
                          d = $(t, e);
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
                      : { x: a + s.x, y: o + s.y, data: { ...s, placement: l } };
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          nt = (e, t) => {
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
                        ...u
                      } = $(e, t),
                      c = { x: n, y: r },
                      d = await o.detectOverflow(t, u),
                      f = W(H(a)),
                      p = U(f);
                    let m = c[p],
                      h = c[f];
                    if (l) {
                      const e = "y" === p ? "bottom" : "right";
                      m = I(m + d["y" === p ? "top" : "left"], m, m - d[e]);
                    }
                    if (i) {
                      const e = "y" === f ? "bottom" : "right";
                      h = I(h + d["y" === f ? "top" : "left"], h, h - d[e]);
                    }
                    const g = s.fn({ ...t, [p]: m, [f]: h });
                    return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [p]: l, [f]: i } } };
                  },
                }
              );
            })(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          rt = (e, t) => {
            const n = Qe(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          },
          at = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "size",
                  options: e,
                  async fn(t) {
                    var n, r;
                    const { placement: a, rects: o, platform: l, elements: i } = t,
                      { apply: s = () => {}, ...u } = $(e, t),
                      c = await l.detectOverflow(t, u),
                      d = H(a),
                      f = B(a),
                      p = "y" === W(a),
                      { width: m, height: h } = o.floating;
                    let g, y;
                    "top" === d || "bottom" === d
                      ? ((g = d),
                        (y =
                          f ===
                          ((await (null == l.isRTL ? void 0 : l.isRTL(i.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((y = d), (g = "end" === f ? "top" : "bottom"));
                    const v = h - c.top - c.bottom,
                      b = m - c.left - c.right,
                      w = R(h - c[g], v),
                      k = R(m - c[y], b),
                      x = !t.middlewareData.shift;
                    let S = w,
                      E = k;
                    if (
                      (null != (n = t.middlewareData.shift) && n.enabled.x && (E = b),
                      null != (r = t.middlewareData.shift) && r.enabled.y && (S = v),
                      x && !f)
                    ) {
                      const e = A(c.left, 0),
                        t = A(c.right, 0),
                        n = A(c.top, 0),
                        r = A(c.bottom, 0);
                      p
                        ? (E = m - 2 * (0 !== e || 0 !== t ? e + t : A(c.left, c.right)))
                        : (S = h - 2 * (0 !== n || 0 !== r ? n + r : A(c.top, c.bottom)));
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
          ot = (e, t) => {
            const n = (function (e) {
              return (
                void 0 === e && (e = {}),
                {
                  name: "hide",
                  options: e,
                  async fn(t) {
                    const { rects: n, platform: r } = t,
                      { strategy: a = "referenceHidden", ...o } = $(e, t);
                    switch (a) {
                      case "referenceHidden": {
                        const e = re(
                          await r.detectOverflow(t, { ...o, elementContext: "reference" }),
                          n.reference,
                        );
                        return { data: { referenceHiddenOffsets: e, referenceHidden: ae(e) } };
                      }
                      case "escaped": {
                        const e = re(
                          await r.detectOverflow(t, { ...o, altBoundary: !0 }),
                          n.floating,
                        );
                        return { data: { escapedOffsets: e, escaped: ae(e) } };
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
          lt = (e, t) => {
            const n = ((e) => ({
              name: "arrow",
              options: e,
              fn(t) {
                const { element: n, padding: r } = "function" == typeof e ? e(t) : e;
                return n && ((a = n), {}.hasOwnProperty.call(a, "current"))
                  ? null != n.current
                    ? qe({ element: n.current, padding: r }).fn(t)
                    : {}
                  : n
                    ? qe({ element: n, padding: r }).fn(t)
                    : {};
                var a;
              },
            }))(e);
            return { name: n.name, fn: n.fn, options: [e, t] };
          };
        var it = r.forwardRef((e, t) => {
          const { children: n, width: r = 10, height: a = 5, ...o } = e;
          return (0, i.jsx)(k.svg, {
            ...o,
            ref: t,
            width: r,
            height: a,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, i.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
        it.displayName = "Arrow";
        var st = it,
          ut = "Popper",
          [ct, dt] = h(ut),
          [ft, pt] = ct(ut),
          mt = (e) => {
            const { __scopePopper: t, children: n } = e,
              [a, o] = r.useState(null);
            return (0, i.jsx)(ft, { scope: t, anchor: a, onAnchorChange: o, children: n });
          };
        mt.displayName = ut;
        var ht = "PopperAnchor",
          gt = r.forwardRef((e, t) => {
            const { __scopePopper: n, virtualRef: a, ...o } = e,
              l = pt(ht, n),
              s = r.useRef(null),
              u = m(t, s),
              c = r.useRef(null);
            return (
              r.useEffect(() => {
                const e = c.current;
                ((c.current = a?.current || s.current),
                  e !== c.current && l.onAnchorChange(c.current));
              }),
              a ? null : (0, i.jsx)(k.div, { ...o, ref: u })
            );
          });
        gt.displayName = ht;
        var yt = "PopperContent",
          [vt, bt] = ct(yt),
          wt = r.forwardRef((e, t) => {
            const {
                __scopePopper: n,
                side: a = "bottom",
                sideOffset: o = 0,
                align: l = "center",
                alignOffset: s = 0,
                arrowPadding: u = 0,
                avoidCollisions: c = !0,
                collisionBoundary: d = [],
                collisionPadding: f = 0,
                sticky: p = "partial",
                hideWhenDetached: h = !1,
                updatePositionStrategy: g = "optimized",
                onPlaced: v,
                ...b
              } = e,
              w = pt(yt, n),
              [S, E] = r.useState(null),
              C = m(t, (e) => E(e)),
              [P, T] = r.useState(null),
              N = (function (e) {
                const [t, n] = r.useState(void 0);
                return (
                  _(() => {
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
              })(P),
              z = N?.width ?? 0,
              L = N?.height ?? 0,
              O = a + ("center" !== l ? "-" + l : ""),
              D = "number" == typeof f ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f },
              F = Array.isArray(d) ? d : [d],
              j = F.length > 0,
              I = { padding: D, boundary: F.filter(Et), altBoundary: j },
              {
                refs: $,
                floatingStyles: H,
                placement: B,
                isPositioned: U,
                middlewareData: V,
              } = (function (e) {
                void 0 === e && (e = {});
                const {
                    placement: t = "bottom",
                    strategy: n = "absolute",
                    middleware: a = [],
                    platform: o,
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
                  [p, m] = r.useState(a);
                Ge(p, a) || m(a);
                const [h, g] = r.useState(null),
                  [v, b] = r.useState(null),
                  w = r.useCallback((e) => {
                    e !== E.current && ((E.current = e), g(e));
                  }, []),
                  k = r.useCallback((e) => {
                    e !== C.current && ((C.current = e), b(e));
                  }, []),
                  x = l || h,
                  S = i || v,
                  E = r.useRef(null),
                  C = r.useRef(null),
                  P = r.useRef(d),
                  T = null != u,
                  N = et(u),
                  _ = et(o),
                  z = et(c),
                  L = r.useCallback(() => {
                    if (!E.current || !C.current) return;
                    const e = { placement: t, strategy: n, middleware: p };
                    (_.current && (e.platform = _.current),
                      Xe(E.current, C.current, e).then((e) => {
                        const t = { ...e, isPositioned: !1 !== z.current };
                        O.current &&
                          !Ge(P.current, t) &&
                          ((P.current = t),
                          y.flushSync(() => {
                            f(t);
                          }));
                      }));
                  }, [p, t, n, _, z]);
                Ke(() => {
                  !1 === c &&
                    P.current.isPositioned &&
                    ((P.current.isPositioned = !1), f((e) => ({ ...e, isPositioned: !1 })));
                }, [c]);
                const O = r.useRef(!1);
                (Ke(
                  () => (
                    (O.current = !0),
                    () => {
                      O.current = !1;
                    }
                  ),
                  [],
                ),
                  Ke(() => {
                    if ((x && (E.current = x), S && (C.current = S), x && S)) {
                      if (N.current) return N.current(x, S, L);
                      L();
                    }
                  }, [x, S, L, N, T]));
                const R = r.useMemo(
                    () => ({ reference: E, floating: C, setReference: w, setFloating: k }),
                    [w, k],
                  ),
                  A = r.useMemo(() => ({ reference: x, floating: S }), [x, S]),
                  D = r.useMemo(() => {
                    const e = { position: n, left: 0, top: 0 };
                    if (!A.floating) return e;
                    const t = Je(A.floating, d.x),
                      r = Je(A.floating, d.y);
                    return s
                      ? {
                          ...e,
                          transform: "translate(" + t + "px, " + r + "px)",
                          ...(Ze(A.floating) >= 1.5 && { willChange: "transform" }),
                        }
                      : { position: n, left: t, top: r };
                  }, [n, s, A.floating, d.x, d.y]);
                return r.useMemo(
                  () => ({ ...d, update: L, refs: R, elements: A, floatingStyles: D }),
                  [d, L, R, A, D],
                );
              })({
                strategy: "fixed",
                placement: O,
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
                      u = Le(e),
                      c = a || o ? [...(u ? Ne(u) : []), ...(t ? Ne(t) : [])] : [];
                    c.forEach((e) => {
                      (a && e.addEventListener("scroll", n, { passive: !0 }),
                        o && e.addEventListener("resize", n));
                    });
                    const d =
                      u && i
                        ? (function (e, t) {
                            let n,
                              r = null;
                            const a = ue(e);
                            function o() {
                              var e;
                              (clearTimeout(n), null == (e = r) || e.disconnect(), (r = null));
                            }
                            return (
                              (function l(i, s) {
                                (void 0 === i && (i = !1), void 0 === s && (s = 1), o());
                                const u = e.getBoundingClientRect(),
                                  { left: c, top: d, width: f, height: p } = u;
                                if ((i || t(), !f || !p)) return;
                                const m = {
                                  rootMargin:
                                    -M(d) +
                                    "px " +
                                    -M(a.clientWidth - (c + f)) +
                                    "px " +
                                    -M(a.clientHeight - (d + p)) +
                                    "px " +
                                    -M(c) +
                                    "px",
                                  threshold: A(0, R(1, s)) || 1,
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
                                  (1 !== r || We(u, e.getBoundingClientRect()) || l(), (h = !1));
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
                    let h = s ? De(e) : null;
                    return (
                      s &&
                        (function t() {
                          const r = De(e);
                          (h && !We(h, r) && n(), (h = r), (f = requestAnimationFrame(t)));
                        })(),
                      n(),
                      () => {
                        var e;
                        (c.forEach((e) => {
                          (a && e.removeEventListener("scroll", n),
                            o && e.removeEventListener("resize", n));
                        }),
                          null == d || d(),
                          null == (e = m) || e.disconnect(),
                          (m = null),
                          s && cancelAnimationFrame(f));
                      }
                    );
                  })(...e, { animationFrame: "always" === g }),
                elements: { reference: w.anchor },
                middleware: [
                  tt({ mainAxis: o + L, alignmentAxis: s }),
                  c &&
                    nt({
                      mainAxis: !0,
                      crossAxis: !1,
                      limiter: "partial" === p ? { fn: Ye(W).fn, options: [W, void 0] } : void 0,
                      ...I,
                    }),
                  c && rt({ ...I }),
                  at({
                    ...I,
                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                      const { width: a, height: o } = t.reference,
                        l = e.floating.style;
                      (l.setProperty("--radix-popper-available-width", `${n}px`),
                        l.setProperty("--radix-popper-available-height", `${r}px`),
                        l.setProperty("--radix-popper-anchor-width", `${a}px`),
                        l.setProperty("--radix-popper-anchor-height", `${o}px`));
                    },
                  }),
                  P && lt({ element: P, padding: u }),
                  Ct({ arrowWidth: z, arrowHeight: L }),
                  h && ot({ strategy: "referenceHidden", ...I }),
                ],
              });
            var W;
            const [Q, q] = Pt(B),
              Y = x(v);
            _(() => {
              U && Y?.();
            }, [U, Y]);
            const X = V.arrow?.x,
              K = V.arrow?.y,
              G = 0 !== V.arrow?.centerOffset,
              [Z, J] = r.useState();
            return (
              _(() => {
                S && J(window.getComputedStyle(S).zIndex);
              }, [S]),
              (0, i.jsx)("div", {
                ref: $.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...H,
                  transform: U ? H.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: Z,
                  "--radix-popper-transform-origin": [
                    V.transformOrigin?.x,
                    V.transformOrigin?.y,
                  ].join(" "),
                  ...(V.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
                },
                dir: e.dir,
                children: (0, i.jsx)(vt, {
                  scope: n,
                  placedSide: Q,
                  onArrowChange: T,
                  arrowX: X,
                  arrowY: K,
                  shouldHideArrow: G,
                  children: (0, i.jsx)(k.div, {
                    "data-side": Q,
                    "data-align": q,
                    ...b,
                    ref: C,
                    style: { ...b.style, animation: U ? void 0 : "none" },
                  }),
                }),
              })
            );
          });
        wt.displayName = yt;
        var kt = "PopperArrow",
          xt = { top: "bottom", right: "left", bottom: "top", left: "right" },
          St = r.forwardRef(function (e, t) {
            const { __scopePopper: n, ...r } = e,
              a = bt(kt, n),
              o = xt[a.placedSide];
            return (0, i.jsx)("span", {
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
              children: (0, i.jsx)(st, { ...r, ref: t, style: { ...r.style, display: "block" } }),
            });
          });
        function Et(e) {
          return null !== e;
        }
        St.displayName = kt;
        var Ct = (e) => ({
          name: "transformOrigin",
          options: e,
          fn(t) {
            const { placement: n, rects: r, middlewareData: a } = t,
              o = 0 !== a.arrow?.centerOffset,
              l = o ? 0 : e.arrowWidth,
              i = o ? 0 : e.arrowHeight,
              [s, u] = Pt(n),
              c = { start: "0%", center: "50%", end: "100%" }[u],
              d = (a.arrow?.x ?? 0) + l / 2,
              f = (a.arrow?.y ?? 0) + i / 2;
            let p = "",
              m = "";
            return (
              "bottom" === s
                ? ((p = o ? c : `${d}px`), (m = -i + "px"))
                : "top" === s
                  ? ((p = o ? c : `${d}px`), (m = `${r.floating.height + i}px`))
                  : "right" === s
                    ? ((p = -i + "px"), (m = o ? c : `${f}px`))
                    : "left" === s && ((p = `${r.floating.width + i}px`), (m = o ? c : `${f}px`)),
              { data: { x: p, y: m } }
            );
          },
        });
        function Pt(e) {
          const [t, n = "center"] = e.split("-");
          return [t, n];
        }
        var Tt = mt,
          Nt = gt,
          _t = wt,
          zt = St,
          Lt = r.forwardRef((e, t) => {
            const { container: n, ...a } = e,
              [o, l] = r.useState(!1);
            _(() => l(!0), []);
            const s = n || (o && globalThis?.document?.body);
            return s ? y.createPortal((0, i.jsx)(k.div, { ...a, ref: t }), s) : null;
          });
        Lt.displayName = "Portal";
        var Ot = (e) => {
          const { present: t, children: n } = e,
            a = (function (e) {
              const [t, n] = r.useState(),
                a = r.useRef(null),
                o = r.useRef(e),
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
                  const e = Rt(a.current);
                  l.current = "mounted" === s ? e : "none";
                }, [s]),
                _(() => {
                  const t = a.current,
                    n = o.current;
                  if (n !== e) {
                    const r = l.current,
                      a = Rt(t);
                    (u(
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
                }, [e, u]),
                _(() => {
                  if (t) {
                    let e;
                    const n = t.ownerDocument.defaultView ?? window,
                      r = (r) => {
                        const l = Rt(a.current).includes(CSS.escape(r.animationName));
                        if (r.target === t && l && (u("ANIMATION_END"), !o.current)) {
                          const r = t.style.animationFillMode;
                          ((t.style.animationFillMode = "forwards"),
                            (e = n.setTimeout(() => {
                              "forwards" === t.style.animationFillMode &&
                                (t.style.animationFillMode = r);
                            })));
                        }
                      },
                      i = (e) => {
                        e.target === t && (l.current = Rt(a.current));
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
                    ((a.current = e ? getComputedStyle(e) : null), n(e));
                  }, []),
                }
              );
            })(t),
            o = "function" == typeof n ? n({ present: a.isPresent }) : r.Children.only(n),
            l = m(
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
        function Rt(e) {
          return e?.animationName || "none";
        }
        Ot.displayName = "Presence";
        var At = a[" useInsertionEffect ".trim().toString()] || _;
        Symbol("RADIX:SYNC_STATE");
        var Dt = Object.freeze({
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
          Mt = r.forwardRef((e, t) =>
            (0, i.jsx)(k.span, { ...e, ref: t, style: { ...Dt, ...e.style } }),
          );
        Mt.displayName = "VisuallyHidden";
        var Ft = Mt,
          [jt, It] = h("Tooltip", [dt]),
          $t = dt(),
          Ht = "TooltipProvider",
          Bt = 700,
          Ut = "tooltip.open",
          [Vt, Wt] = jt(Ht),
          Qt = (e) => {
            const {
                __scopeTooltip: t,
                delayDuration: n = Bt,
                skipDelayDuration: a = 300,
                disableHoverableContent: o = !1,
                children: l,
              } = e,
              s = r.useRef(!0),
              u = r.useRef(!1),
              c = r.useRef(0);
            return (
              r.useEffect(() => {
                const e = c.current;
                return () => window.clearTimeout(e);
              }, []),
              (0, i.jsx)(Vt, {
                scope: t,
                isOpenDelayedRef: s,
                delayDuration: n,
                onOpen: r.useCallback(() => {
                  (window.clearTimeout(c.current), (s.current = !1));
                }, []),
                onClose: r.useCallback(() => {
                  (window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => (s.current = !0), a)));
                }, [a]),
                isPointerInTransitRef: u,
                onPointerInTransitChange: r.useCallback((e) => {
                  u.current = e;
                }, []),
                disableHoverableContent: o,
                children: l,
              })
            );
          };
        Qt.displayName = Ht;
        var qt = "Tooltip",
          [Yt, Xt] = jt(qt);
        ((e) => {
          const {
              __scopeTooltip: t,
              children: n,
              open: a,
              defaultOpen: o,
              onOpenChange: l,
              disableHoverableContent: s,
              delayDuration: u,
            } = e,
            c = Wt(qt, e.__scopeTooltip),
            d = $t(t),
            [f, p] = r.useState(null),
            m = (function (e) {
              const [t, n] = r.useState(z());
              return (
                _(() => {
                  n((e) => e ?? String(L++));
                }, [e]),
                t ? `radix-${t}` : ""
              );
            })(),
            h = r.useRef(0),
            g = s ?? c.disableHoverableContent,
            y = u ?? c.delayDuration,
            v = r.useRef(!1),
            [b, w] = (function ({ prop: e, defaultProp: t, onChange: n = () => {}, caller: a }) {
              const [o, l, i] = (function ({ defaultProp: e, onChange: t }) {
                  const [n, a] = r.useState(e),
                    o = r.useRef(n),
                    l = r.useRef(t);
                  return (
                    At(() => {
                      l.current = t;
                    }, [t]),
                    r.useEffect(() => {
                      o.current !== n && (l.current?.(n), (o.current = n));
                    }, [n, o]),
                    [n, a, l]
                  );
                })({ defaultProp: t, onChange: n }),
                s = void 0 !== e,
                u = s ? e : o;
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
            })({
              prop: a,
              defaultProp: o ?? !1,
              onChange: (e) => {
                (e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ut))) : c.onClose(),
                  l?.(e));
              },
              caller: qt,
            }),
            k = r.useMemo(
              () => (b ? (v.current ? "delayed-open" : "instant-open") : "closed"),
              [b],
            ),
            x = r.useCallback(() => {
              (window.clearTimeout(h.current), (h.current = 0), (v.current = !1), w(!0));
            }, [w]),
            S = r.useCallback(() => {
              (window.clearTimeout(h.current), (h.current = 0), w(!1));
            }, [w]),
            E = r.useCallback(() => {
              (window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => {
                  ((v.current = !0), w(!0), (h.current = 0));
                }, y)));
            }, [y, w]);
          return (
            r.useEffect(
              () => () => {
                h.current && (window.clearTimeout(h.current), (h.current = 0));
              },
              [],
            ),
            (0, i.jsx)(Tt, {
              ...d,
              children: (0, i.jsx)(Yt, {
                scope: t,
                contentId: m,
                open: b,
                stateAttribute: k,
                trigger: f,
                onTriggerChange: p,
                onTriggerEnter: r.useCallback(() => {
                  c.isOpenDelayedRef.current ? E() : x();
                }, [c.isOpenDelayedRef, E, x]),
                onTriggerLeave: r.useCallback(() => {
                  g ? S() : (window.clearTimeout(h.current), (h.current = 0));
                }, [S, g]),
                onOpen: x,
                onClose: S,
                disableHoverableContent: g,
                children: n,
              }),
            })
          );
        }).displayName = qt;
        var Kt = "TooltipTrigger";
        r.forwardRef((e, t) => {
          const { __scopeTooltip: n, ...a } = e,
            o = Xt(Kt, n),
            l = Wt(Kt, n),
            s = $t(n),
            u = m(t, r.useRef(null), o.onTriggerChange),
            c = r.useRef(!1),
            f = r.useRef(!1),
            p = r.useCallback(() => (c.current = !1), []);
          return (
            r.useEffect(() => () => document.removeEventListener("pointerup", p), [p]),
            (0, i.jsx)(Nt, {
              asChild: !0,
              ...s,
              children: (0, i.jsx)(k.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...a,
                ref: u,
                onPointerMove: d(e.onPointerMove, (e) => {
                  "touch" !== e.pointerType &&
                    (f.current ||
                      l.isPointerInTransitRef.current ||
                      (o.onTriggerEnter(), (f.current = !0)));
                }),
                onPointerLeave: d(e.onPointerLeave, () => {
                  (o.onTriggerLeave(), (f.current = !1));
                }),
                onPointerDown: d(e.onPointerDown, () => {
                  (o.open && o.onClose(),
                    (c.current = !0),
                    document.addEventListener("pointerup", p, { once: !0 }));
                }),
                onFocus: d(e.onFocus, () => {
                  c.current || o.onOpen();
                }),
                onBlur: d(e.onBlur, o.onClose),
                onClick: d(e.onClick, o.onClose),
              }),
            })
          );
        }).displayName = Kt;
        var Gt = "TooltipPortal",
          [Zt, Jt] = jt(Gt, { forceMount: void 0 }),
          en = "TooltipContent",
          tn = r.forwardRef((e, t) => {
            const n = Jt(en, e.__scopeTooltip),
              { forceMount: r = n.forceMount, side: a = "top", ...o } = e,
              l = Xt(en, e.__scopeTooltip);
            return (0, i.jsx)(Ot, {
              present: r || l.open,
              children: l.disableHoverableContent
                ? (0, i.jsx)(ln, { side: a, ...o, ref: t })
                : (0, i.jsx)(nn, { side: a, ...o, ref: t }),
            });
          }),
          nn = r.forwardRef((e, t) => {
            const n = Xt(en, e.__scopeTooltip),
              a = Wt(en, e.__scopeTooltip),
              o = r.useRef(null),
              l = m(t, o),
              [s, u] = r.useState(null),
              { trigger: c, onClose: d } = n,
              f = o.current,
              { onPointerInTransitChange: p } = a,
              h = r.useCallback(() => {
                (u(null), p(!1));
              }, [p]),
              g = r.useCallback(
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
                  (u(o), p(!0));
                },
                [p],
              );
            return (
              r.useEffect(() => () => h(), [h]),
              r.useEffect(() => {
                if (c && f) {
                  const e = (e) => g(e, f),
                    t = (e) => g(e, c);
                  return (
                    c.addEventListener("pointerleave", e),
                    f.addEventListener("pointerleave", t),
                    () => {
                      (c.removeEventListener("pointerleave", e),
                        f.removeEventListener("pointerleave", t));
                    }
                  );
                }
              }, [c, f, g, h]),
              r.useEffect(() => {
                if (s) {
                  const e = (e) => {
                    const t = e.target,
                      n = { x: e.clientX, y: e.clientY },
                      r = c?.contains(t) || f?.contains(t),
                      a = !(function (e, t) {
                        const { x: n, y: r } = e;
                        let a = !1;
                        for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                          const l = t[e],
                            i = t[o],
                            s = l.x,
                            u = l.y,
                            c = i.x,
                            d = i.y;
                          u > r != d > r && n < ((c - s) * (r - u)) / (d - u) + s && (a = !a);
                        }
                        return a;
                      })(n, s);
                    r ? h() : a && (h(), d());
                  };
                  return (
                    document.addEventListener("pointermove", e),
                    () => document.removeEventListener("pointermove", e)
                  );
                }
              }, [c, f, s, d, h]),
              (0, i.jsx)(ln, { ...e, ref: l })
            );
          }),
          [rn, an] = jt(qt, { isInside: !1 }),
          on = (function (e) {
            const t = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
            return ((t.displayName = `${e}.Slottable`), (t.__radixId = b), t);
          })("TooltipContent"),
          ln = r.forwardRef((e, t) => {
            const {
                __scopeTooltip: n,
                children: a,
                "aria-label": o,
                onEscapeKeyDown: l,
                onPointerDownOutside: s,
                ...u
              } = e,
              c = Xt(en, n),
              d = $t(n),
              { onClose: f } = c;
            return (
              r.useEffect(
                () => (document.addEventListener(Ut, f), () => document.removeEventListener(Ut, f)),
                [f],
              ),
              r.useEffect(() => {
                if (c.trigger) {
                  const e = (e) => {
                    const t = e.target;
                    t?.contains(c.trigger) && f();
                  };
                  return (
                    window.addEventListener("scroll", e, { capture: !0 }),
                    () => window.removeEventListener("scroll", e, { capture: !0 })
                  );
                }
              }, [c.trigger, f]),
              (0, i.jsx)(P, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: s,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: f,
                children: (0, i.jsxs)(_t, {
                  "data-state": c.stateAttribute,
                  ...d,
                  ...u,
                  ref: t,
                  style: {
                    ...u.style,
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
                    (0, i.jsx)(on, { children: a }),
                    (0, i.jsx)(rn, {
                      scope: n,
                      isInside: !0,
                      children: (0, i.jsx)(Ft, {
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
        tn.displayName = en;
        var sn = "TooltipArrow";
        r.forwardRef((e, t) => {
          const { __scopeTooltip: n, ...r } = e,
            a = $t(n);
          return an(sn, n).isInside ? null : (0, i.jsx)(zt, { ...a, ...r, ref: t });
        }).displayName = sn;
        var un = Qt;
        function cn(e) {
          const t = (0, l.c)(6);
          let n, r;
          t[0] !== e
            ? (({ delayDuration: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r))
            : ((n = t[1]), (r = t[2]));
          const a = void 0 === r ? 0 : r;
          let o;
          return (
            t[3] !== a || t[4] !== n
              ? ((o = (0, i.jsx)(un, { "data-slot": "tooltip-provider", delayDuration: a, ...n })),
                (t[3] = a),
                (t[4] = n),
                (t[5] = o))
              : (o = t[5]),
            o
          );
        }
        const dn = (...e) =>
            e
              .filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)
              .join(" ")
              .trim(),
          fn = (e) => {
            const t = ((e) =>
              e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
                n ? n.toUpperCase() : t.toLowerCase(),
              ))(e);
            return t.charAt(0).toUpperCase() + t.slice(1);
          };
        var pn = {
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
        const mn = (e) => {
            for (const t in e)
              if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
            return !1;
          },
          hn = (0, r.createContext)({}),
          gn = (0, r.forwardRef)(
            (
              {
                color: e,
                size: t,
                strokeWidth: n,
                absoluteStrokeWidth: a,
                className: o = "",
                children: l,
                iconNode: i,
                ...s
              },
              u,
            ) => {
              const {
                  size: c = 24,
                  strokeWidth: d = 2,
                  absoluteStrokeWidth: f = !1,
                  color: p = "currentColor",
                  className: m = "",
                } = (0, r.useContext)(hn) ?? {},
                h = (a ?? f) ? (24 * Number(n ?? d)) / Number(t ?? c) : (n ?? d);
              return (0, r.createElement)(
                "svg",
                {
                  ref: u,
                  ...pn,
                  width: t ?? c ?? pn.width,
                  height: t ?? c ?? pn.height,
                  stroke: e ?? p,
                  strokeWidth: h,
                  className: dn("lucide", m, o),
                  ...(!l && !mn(s) && { "aria-hidden": "true" }),
                  ...s,
                },
                [...i.map(([e, t]) => (0, r.createElement)(e, t)), ...(Array.isArray(l) ? l : [l])],
              );
            },
          ),
          yn = (e, t) => {
            const n = (0, r.forwardRef)(({ className: n, ...a }, o) => {
              return (0, r.createElement)(gn, {
                ref: o,
                iconNode: t,
                className: dn(
                  `lucide-${((l = fn(e)), l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`,
                  `lucide-${e}`,
                  n,
                ),
                ...a,
              });
              var l;
            });
            return ((n.displayName = fn(e)), n);
          },
          vn = yn("circle-check", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
          ]),
          bn = yn("info", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "M12 16v-4", key: "1dtifu" }],
            ["path", { d: "M12 8h.01", key: "e9boi3" }],
          ]),
          wn = yn("triangle-alert", [
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
          kn = yn("octagon-x", [
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
          xn = yn("loader-circle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]),
          Sn = Array(12).fill(0),
          En = ({ visible: e, className: t }) =>
            r.createElement(
              "div",
              {
                className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
                "data-visible": e,
              },
              r.createElement(
                "div",
                { className: "sonner-spinner" },
                Sn.map((e, t) =>
                  r.createElement("div", {
                    className: "sonner-loading-bar",
                    key: `spinner-bar-${t}`,
                  }),
                ),
              ),
            ),
          Cn = r.createElement(
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
          Pn = r.createElement(
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
          Tn = r.createElement(
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
          Nn = r.createElement(
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
          _n = r.createElement(
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
        let zn = 1;
        const Ln = new (class {
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
                        : zn++,
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
                        else if (On(e) && !e.ok) {
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
                  const n = (null == t ? void 0 : t.id) || zn++;
                  return (this.create({ jsx: e(n), id: n, ...t }), n);
                }),
                (this.getActiveToasts = () =>
                  this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set()));
            }
          })(),
          On = (e) =>
            e &&
            "object" == typeof e &&
            "ok" in e &&
            "boolean" == typeof e.ok &&
            "status" in e &&
            "number" == typeof e.status;
        function Rn(e) {
          return void 0 !== e.label;
        }
        (Object.assign(
          (e, t) => {
            const n = (null == t ? void 0 : t.id) || zn++;
            return (Ln.addToast({ title: e, ...t, id: n }), n);
          },
          {
            success: Ln.success,
            info: Ln.info,
            warning: Ln.warning,
            error: Ln.error,
            custom: Ln.custom,
            message: Ln.message,
            promise: Ln.promise,
            dismiss: Ln.dismiss,
            loading: Ln.loading,
          },
          { getHistory: () => Ln.toasts, getToasts: () => Ln.getActiveToasts() },
        ),
          (function (e) {
            if ("undefined" == typeof document) return;
            let t = document.head || document.getElementsByTagName("head")[0],
              n = document.createElement("style");
            ((n.type = "text/css"),
              t.appendChild(n),
              n.styleSheet
                ? (n.styleSheet.cssText = e)
                : n.appendChild(document.createTextNode(e)));
          })(
            "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
          ));
        const An = 3,
          Dn = 14;
        function Mn(...e) {
          return e.filter(Boolean).join(" ");
        }
        const Fn = (e) => {
          var t, n, a, o, l, i, s, u, c;
          const {
              invert: d,
              toast: f,
              unstyled: p,
              interacting: m,
              setHeights: h,
              visibleToasts: g,
              heights: y,
              index: v,
              toasts: b,
              expanded: w,
              removeToast: k,
              defaultRichColors: x,
              closeButton: S,
              style: E,
              cancelButtonStyle: C,
              actionButtonStyle: P,
              className: T = "",
              descriptionClassName: N = "",
              duration: _,
              position: z,
              gap: L,
              expandByDefault: O,
              classNames: R,
              icons: A,
              closeButtonAriaLabel: D = "Close toast",
            } = e,
            [M, F] = r.useState(null),
            [j, I] = r.useState(null),
            [$, H] = r.useState(!1),
            [B, U] = r.useState(!1),
            [V, W] = r.useState(!1),
            [Q, q] = r.useState(!1),
            [Y, X] = r.useState(!1),
            [K, G] = r.useState(0),
            [Z, J] = r.useState(0),
            ee = r.useRef(f.duration || _ || 4e3),
            te = r.useRef(null),
            ne = r.useRef(null),
            re = 0 === v,
            ae = v + 1 <= g,
            oe = f.type,
            le = !1 !== f.dismissible,
            ie = f.className || "",
            se = f.descriptionClassName || "",
            ue = r.useMemo(() => y.findIndex((e) => e.toastId === f.id) || 0, [y, f.id]),
            ce = r.useMemo(() => {
              var e;
              return null != (e = f.closeButton) ? e : S;
            }, [f.closeButton, S]),
            de = r.useMemo(() => f.duration || _ || 4e3, [f.duration, _]),
            fe = r.useRef(0),
            pe = r.useRef(0),
            me = r.useRef(0),
            he = r.useRef(null),
            [ge, ye] = z.split("-"),
            ve = r.useMemo(() => y.reduce((e, t, n) => (n >= ue ? e : e + t.height), 0), [y, ue]),
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
            ke = "loading" === oe;
          ((pe.current = r.useMemo(() => ue * L + ve, [ue, ve])),
            r.useEffect(() => {
              ee.current = de;
            }, [de]),
            r.useEffect(() => {
              H(!0);
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
          const xe = r.useCallback(() => {
            (U(!0),
              G(pe.current),
              h((e) => e.filter((e) => e.toastId !== f.id)),
              setTimeout(() => {
                k(f);
              }, 200));
          }, [f, k, h, pe]);
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
                    (null == f.onAutoClose || f.onAutoClose.call(f, f), xe());
                  }, ee.current))),
              () => clearTimeout(e)
            );
          }, [w, m, f, oe, be, xe]),
            r.useEffect(() => {
              f.delete && (xe(), null == f.onDismiss || f.onDismiss.call(f, f));
            }, [xe, f.delete]));
          const Se =
            f.icon ||
            (null == A ? void 0 : A[oe]) ||
            ((e) => {
              switch (e) {
                case "success":
                  return Cn;
                case "info":
                  return Tn;
                case "warning":
                  return Pn;
                case "error":
                  return Nn;
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
              className: Mn(
                T,
                ie,
                null == R ? void 0 : R.toast,
                null == f || null == (t = f.classNames) ? void 0 : t.toast,
                null == R ? void 0 : R.default,
                null == R ? void 0 : R[oe],
                null == f || null == (n = f.classNames) ? void 0 : n[oe],
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (Ee = f.richColors) ? Ee : x,
              "data-styled": !Boolean(f.jsx || f.unstyled || p),
              "data-mounted": $,
              "data-promise": Boolean(f.promise),
              "data-swiped": Y,
              "data-removed": B,
              "data-visible": ae,
              "data-y-position": ge,
              "data-x-position": ye,
              "data-index": v,
              "data-front": re,
              "data-swiping": V,
              "data-dismissible": le,
              "data-type": oe,
              "data-invert": we,
              "data-swipe-out": Q,
              "data-swipe-direction": j,
              "data-expanded": Boolean(w || (O && $)),
              "data-testid": f.testId,
              style: {
                "--index": v,
                "--toasts-before": v,
                "--z-index": b.length - v,
                "--offset": `${B ? K : pe.current}px`,
                "--initial-height": O ? "auto" : `${Z}px`,
                ...E,
                ...f.style,
              },
              onDragEnd: () => {
                (W(!1), F(null), (he.current = null));
              },
              onPointerDown: (e) => {
                2 !== e.button &&
                  !ke &&
                  le &&
                  ((te.current = new Date()),
                  G(pe.current),
                  e.target.setPointerCapture(e.pointerId),
                  "BUTTON" !== e.target.tagName &&
                    (W(!0), (he.current = { x: e.clientX, y: e.clientY })));
              },
              onPointerUp: () => {
                var e, t, n;
                if (Q || !le) return;
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
                  l = "x" === M ? r : a,
                  i = Math.abs(l) / o;
                if (Math.abs(l) >= 45 || i > 0.11)
                  return (
                    G(pe.current),
                    null == f.onDismiss || f.onDismiss.call(f, f),
                    I("x" === M ? (r > 0 ? "right" : "left") : a > 0 ? "down" : "up"),
                    xe(),
                    void q(!0)
                  );
                var s, u;
                (null == (s = ne.current) || s.style.setProperty("--swipe-amount-x", "0px"),
                  null == (u = ne.current) || u.style.setProperty("--swipe-amount-y", "0px"),
                  X(!1),
                  W(!1),
                  F(null));
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
                !M &&
                  (Math.abs(l) > 1 || Math.abs(o) > 1) &&
                  F(Math.abs(l) > Math.abs(o) ? "x" : "y");
                let u = { x: 0, y: 0 };
                const c = (e) => 1 / (1.5 + Math.abs(e) / 20);
                if ("y" === M) {
                  if (s.includes("top") || s.includes("bottom"))
                    if ((s.includes("top") && o < 0) || (s.includes("bottom") && o > 0)) u.y = o;
                    else {
                      const e = o * c(o);
                      u.y = Math.abs(e) < Math.abs(o) ? e : o;
                    }
                } else if ("x" === M && (s.includes("left") || s.includes("right")))
                  if ((s.includes("left") && l < 0) || (s.includes("right") && l > 0)) u.x = l;
                  else {
                    const e = l * c(l);
                    u.x = Math.abs(e) < Math.abs(l) ? e : l;
                  }
                ((Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && X(!0),
                  null == (r = ne.current) || r.style.setProperty("--swipe-amount-x", `${u.x}px`),
                  null == (a = ne.current) || a.style.setProperty("--swipe-amount-y", `${u.y}px`));
              },
            },
            ce && !f.jsx && "loading" !== oe
              ? r.createElement(
                  "button",
                  {
                    "aria-label": D,
                    "data-disabled": ke,
                    "data-close-button": !0,
                    onClick:
                      ke || !le
                        ? () => {}
                        : () => {
                            (xe(), null == f.onDismiss || f.onDismiss.call(f, f));
                          },
                    className: Mn(
                      null == R ? void 0 : R.closeButton,
                      null == f || null == (a = f.classNames) ? void 0 : a.closeButton,
                    ),
                  },
                  null != (Ce = null == A ? void 0 : A.close) ? Ce : _n,
                )
              : null,
            (oe || f.icon || f.promise) &&
              null !== f.icon &&
              (null !== (null == A ? void 0 : A[oe]) || f.icon)
              ? r.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: Mn(
                      null == R ? void 0 : R.icon,
                      null == f || null == (o = f.classNames) ? void 0 : o.icon,
                    ),
                  },
                  f.promise || ("loading" === f.type && !f.icon)
                    ? f.icon ||
                        (function () {
                          var e, t;
                          return (null == A ? void 0 : A.loading)
                            ? r.createElement(
                                "div",
                                {
                                  className: Mn(
                                    null == R ? void 0 : R.loader,
                                    null == f || null == (t = f.classNames) ? void 0 : t.loader,
                                    "sonner-loader",
                                  ),
                                  "data-visible": "loading" === oe,
                                },
                                A.loading,
                              )
                            : r.createElement(En, {
                                className: Mn(
                                  null == R ? void 0 : R.loader,
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
                className: Mn(
                  null == R ? void 0 : R.content,
                  null == f || null == (l = f.classNames) ? void 0 : l.content,
                ),
              },
              r.createElement(
                "div",
                {
                  "data-title": "",
                  className: Mn(
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
                      className: Mn(
                        N,
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
              : f.cancel && Rn(f.cancel)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-cancel": !0,
                      style: f.cancelButtonStyle || C,
                      onClick: (e) => {
                        Rn(f.cancel) &&
                          le &&
                          (null == f.cancel.onClick || f.cancel.onClick.call(f.cancel, e), xe());
                      },
                      className: Mn(
                        null == R ? void 0 : R.cancelButton,
                        null == f || null == (u = f.classNames) ? void 0 : u.cancelButton,
                      ),
                    },
                    f.cancel.label,
                  )
                : null,
            r.isValidElement(f.action)
              ? f.action
              : f.action && Rn(f.action)
                ? r.createElement(
                    "button",
                    {
                      "data-button": !0,
                      "data-action": !0,
                      style: f.actionButtonStyle || P,
                      onClick: (e) => {
                        Rn(f.action) &&
                          (null == f.action.onClick || f.action.onClick.call(f.action, e),
                          e.defaultPrevented || xe());
                      },
                      className: Mn(
                        null == R ? void 0 : R.actionButton,
                        null == f || null == (c = f.classNames) ? void 0 : c.actionButton,
                      ),
                    },
                    f.action.label,
                  )
                : null,
          );
        };
        function jn() {
          if ("undefined" == typeof window) return "ltr";
          if ("undefined" == typeof document) return "ltr";
          const e = document.documentElement.getAttribute("dir");
          return "auto" !== e && e
            ? e
            : window.getComputedStyle(document.documentElement).direction;
        }
        function In(e, t) {
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
        const $n = r.forwardRef(function (e, t) {
            const {
                id: n,
                invert: a,
                position: o = "bottom-right",
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
                visibleToasts: g = An,
                toastOptions: v,
                dir: b = jn(),
                gap: w = Dn,
                icons: k,
                containerAriaLabel: x = "Notifications",
              } = e,
              [S, E] = r.useState([]),
              C = r.useMemo(
                () => (n ? S.filter((e) => e.toasterId === n) : S.filter((e) => !e.toasterId)),
                [S, n],
              ),
              P = r.useMemo(
                () =>
                  Array.from(
                    new Set([o].concat(C.filter((e) => e.position).map((e) => e.position))),
                  ),
                [C, o],
              ),
              [T, N] = r.useState([]),
              [_, z] = r.useState(!1),
              [L, O] = r.useState(!1),
              [R, A] = r.useState(
                "system" !== f
                  ? f
                  : "undefined" != typeof window &&
                      window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light",
              ),
              D = r.useRef(null),
              M = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
              F = r.useRef(null),
              j = r.useRef(!1),
              I = r.useCallback((e) => {
                E((t) => {
                  var n;
                  return (
                    (null == (n = t.find((t) => t.id === e.id)) ? void 0 : n.delete) ||
                      Ln.dismiss(e.id),
                    t.filter(({ id: t }) => t !== e.id)
                  );
                });
              }, []);
            return (
              r.useEffect(
                () =>
                  Ln.subscribe((e) => {
                    e.dismiss
                      ? requestAnimationFrame(() => {
                          E((t) => t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)));
                        })
                      : setTimeout(() => {
                          y.flushSync(() => {
                            E((t) => {
                              const n = t.findIndex((t) => t.id === e.id);
                              return -1 !== n
                                ? [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)]
                                : [e, ...t];
                            });
                          });
                        });
                  }),
                [S],
              ),
              r.useEffect(() => {
                if ("system" !== f) return void A(f);
                if (
                  ("system" === f &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? A("dark")
                      : A("light")),
                  "undefined" == typeof window)
                )
                  return;
                const e = window.matchMedia("(prefers-color-scheme: dark)");
                try {
                  e.addEventListener("change", ({ matches: e }) => {
                    A(e ? "dark" : "light");
                  });
                } catch (t) {
                  e.addListener(({ matches: e }) => {
                    try {
                      A(e ? "dark" : "light");
                    } catch (e) {
                      console.error(e);
                    }
                  });
                }
              }, [f]),
              r.useEffect(() => {
                S.length <= 1 && z(!1);
              }, [S]),
              r.useEffect(() => {
                const e = (e) => {
                  var t, n;
                  (l.every((t) => e[t] || e.code === t) &&
                    (z(!0), null == (n = D.current) || n.focus()),
                    "Escape" !== e.code ||
                      (document.activeElement !== D.current &&
                        !(null == (t = D.current) ? void 0 : t.contains(document.activeElement))) ||
                      z(!1));
                };
                return (
                  document.addEventListener("keydown", e),
                  () => document.removeEventListener("keydown", e)
                );
              }, [l]),
              r.useEffect(() => {
                if (D.current)
                  return () => {
                    F.current &&
                      (F.current.focus({ preventScroll: !0 }),
                      (F.current = null),
                      (j.current = !1));
                  };
              }, [D.current]),
              r.createElement(
                "section",
                {
                  ref: t,
                  "aria-label": `${x} ${M}`,
                  tabIndex: -1,
                  "aria-live": "polite",
                  "aria-relevant": "additions text",
                  "aria-atomic": "false",
                  suppressHydrationWarning: !0,
                },
                P.map((t, n) => {
                  var o;
                  const [l, f] = t.split("-");
                  return C.length
                    ? r.createElement(
                        "ol",
                        {
                          key: t,
                          dir: "auto" === b ? jn() : b,
                          tabIndex: -1,
                          ref: D,
                          className: u,
                          "data-sonner-toaster": !0,
                          "data-sonner-theme": R,
                          "data-y-position": l,
                          "data-x-position": f,
                          style: {
                            "--front-toast-height": `${(null == (o = T[0]) ? void 0 : o.height) || 0}px`,
                            "--width": "356px",
                            "--gap": `${w}px`,
                            ...h,
                            ...In(c, d),
                          },
                          onBlur: (e) => {
                            j.current &&
                              !e.currentTarget.contains(e.relatedTarget) &&
                              ((j.current = !1),
                              F.current &&
                                (F.current.focus({ preventScroll: !0 }), (F.current = null)));
                          },
                          onFocus: (e) => {
                            (e.target instanceof HTMLElement &&
                              "false" === e.target.dataset.dismissible) ||
                              j.current ||
                              ((j.current = !0), (F.current = e.relatedTarget));
                          },
                          onMouseEnter: () => z(!0),
                          onMouseMove: () => z(!0),
                          onMouseLeave: () => {
                            L || z(!1);
                          },
                          onDragEnd: () => z(!1),
                          onPointerDown: (e) => {
                            (e.target instanceof HTMLElement &&
                              "false" === e.target.dataset.dismissible) ||
                              O(!0);
                          },
                          onPointerUp: () => O(!1),
                        },
                        C.filter((e) => (!e.position && 0 === n) || e.position === t).map(
                          (n, o) => {
                            var l, u;
                            return r.createElement(Fn, {
                              key: n.id,
                              icons: k,
                              index: o,
                              toast: n,
                              defaultRichColors: p,
                              duration: null != (l = null == v ? void 0 : v.duration) ? l : m,
                              className: null == v ? void 0 : v.className,
                              descriptionClassName: null == v ? void 0 : v.descriptionClassName,
                              invert: a,
                              visibleToasts: g,
                              closeButton: null != (u = null == v ? void 0 : v.closeButton) ? u : s,
                              interacting: L,
                              position: t,
                              style: null == v ? void 0 : v.style,
                              unstyled: null == v ? void 0 : v.unstyled,
                              classNames: null == v ? void 0 : v.classNames,
                              cancelButtonStyle: null == v ? void 0 : v.cancelButtonStyle,
                              actionButtonStyle: null == v ? void 0 : v.actionButtonStyle,
                              closeButtonAriaLabel: null == v ? void 0 : v.closeButtonAriaLabel,
                              removeToast: I,
                              toasts: C.filter((e) => e.position == n.position),
                              heights: T.filter((e) => e.position == n.position),
                              setHeights: N,
                              expandByDefault: i,
                              gap: w,
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
          Hn = (e) => {
            const t = (0, l.c)(7);
            let n, r, a, o, s;
            return (
              t[0] !== e ? (({ ...n } = e), (t[0] = e), (t[1] = n)) : (n = t[1]),
              t[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = {
                    success: (0, i.jsx)(vn, { className: "size-4" }),
                    info: (0, i.jsx)(bn, { className: "size-4" }),
                    warning: (0, i.jsx)(wn, { className: "size-4" }),
                    error: (0, i.jsx)(kn, { className: "size-4" }),
                    loading: (0, i.jsx)(xn, { className: "size-4 animate-spin" }),
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
                ? ((s = (0, i.jsx)($n, {
                    theme: "dark",
                    className: "toaster group",
                    icons: r,
                    style: a,
                    toastOptions: o,
                    ...n,
                  })),
                  (t[5] = n),
                  (t[6] = s))
                : (s = t[6]),
              s
            );
          };
        (0, o.createRoot)(document.getElementById("root")).render(
          (0, i.jsx)(r.StrictMode, {
            children: (0, i.jsx)(c, {
              children: (0, i.jsxs)(cn, {
                children: [
                  (0, i.jsx)(s, {}),
                  (0, i.jsx)(Hn, { position: "top-center", richColors: !0 }),
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
          y = Symbol.for("react.strict_mode"),
          v = Symbol.for("react.profiler"),
          b = Symbol.for("react.consumer"),
          w = Symbol.for("react.context"),
          k = Symbol.for("react.forward_ref"),
          x = Symbol.for("react.suspense"),
          S = Symbol.for("react.suspense_list"),
          E = Symbol.for("react.memo"),
          C = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var P = Symbol.for("react.activity");
        (Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"));
        var T = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var N = Symbol.iterator;
        function _(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (N && e[N]) || e["@@iterator"])
              ? e
              : null;
        }
        var z = Symbol.for("react.client.reference");
        function L(e) {
          if (null == e) return null;
          if ("function" == typeof e)
            return e.$$typeof === z ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case v:
              return "Profiler";
            case y:
              return "StrictMode";
            case x:
              return "Suspense";
            case S:
              return "SuspenseList";
            case P:
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
              case k:
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
                return null !== (t = e.displayName || null) ? t : L(e.type) || "Memo";
              case C:
                ((t = e._payload), (e = e._init));
                try {
                  return L(e(t));
                } catch (e) {}
            }
          return null;
        }
        var O = Array.isArray,
          R = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          A = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          D = { pending: !1, data: null, method: null, action: null },
          M = [],
          F = -1;
        function j(e) {
          return { current: e };
        }
        function I(e) {
          0 > F || ((e.current = M[F]), (M[F] = null), F--);
        }
        function $(e, t) {
          (F++, (M[F] = e.current), (e.current = t));
        }
        var H,
          B,
          U = j(null),
          V = j(null),
          W = j(null),
          Q = j(null);
        function q(e, t) {
          switch (($(W, t), $(V, e), $(U, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? gd(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI))) e = yd((t = gd(t)), e);
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
        function Y() {
          (I(U), I(V), I(W));
        }
        function X(e) {
          null !== e.memoizedState && $(Q, e);
          var t = U.current,
            n = yd(t, e.type);
          t !== n && ($(V, e), $(U, n));
        }
        function K(e) {
          (V.current === e && (I(U), I(V)), Q.current === e && (I(Q), (cf._currentValue = D)));
        }
        function G(e) {
          if (void 0 === H)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              ((H = (t && t[1]) || ""),
                (B =
                  -1 < e.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + H + e + B;
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
                u = i.split("\n");
              for (a = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot"); ) r++;
              for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot"); ) a++;
              if (r === s.length || a === u.length)
                for (r = s.length - 1, a = u.length - 1; 1 <= r && 0 <= a && s[r] !== u[a]; ) a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (s[r] !== u[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || s[r] !== u[a])) {
                        var c = "\n" + s[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            ((Z = !1), (Error.prepareStackTrace = n));
          }
          return (n = e ? e.displayName || e.name : "") ? G(n) : "";
        }
        function ee(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return G(e.type);
            case 16:
              return G("Lazy");
            case 13:
              return e.child !== t && null !== t ? G("Suspense Fallback") : G("Suspense");
            case 19:
              return G("SuspenseList");
            case 0:
            case 15:
              return J(e.type, !1);
            case 11:
              return J(e.type.render, !1);
            case 1:
              return J(e.type, !0);
            case 31:
              return G("Activity");
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
          ue = r.unstable_ImmediatePriority,
          ce = r.unstable_UserBlockingPriority,
          de = r.unstable_NormalPriority,
          fe = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          me = r.log,
          he = r.unstable_setDisableYieldValue,
          ge = null,
          ye = null;
        function ve(e) {
          if (("function" == typeof me && he(e), ye && "function" == typeof ye.setStrictMode))
            try {
              ye.setStrictMode(ge, e);
            } catch (e) {}
        }
        var be = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((we(e) / ke) | 0)) | 0;
              },
          we = Math.log,
          ke = Math.LN2,
          xe = 256,
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
        function Pe(e, t, n) {
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
        function Te(e, t) {
          return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
        }
        function Ne(e, t) {
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
        function _e() {
          var e = Ee;
          return (!(62914560 & (Ee <<= 1)) && (Ee = 4194304), e);
        }
        function ze(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Le(e, t) {
          ((e.pendingLanes |= t),
            268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function Oe(e, t, n) {
          ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
          var r = 31 - be(t);
          ((e.entangledLanes |= t),
            (e.entanglements[r] = 1073741824 | e.entanglements[r] | (261930 & n)));
        }
        function Re(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - be(n),
              a = 1 << r;
            ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
          }
        }
        function Ae(e, t) {
          var n = t & -t;
          return 0 !== ((n = 42 & n ? 1 : De(n)) & (e.suspendedLanes | t)) ? 0 : n;
        }
        function De(e) {
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
        function Me(e) {
          return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
        }
        function Fe() {
          var e = A.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Ef(e.type);
        }
        function je(e, t) {
          var n = A.p;
          try {
            return ((A.p = e), t());
          } finally {
            A.p = n;
          }
        }
        var Ie = Math.random().toString(36).slice(2),
          $e = "__reactFiber$" + Ie,
          He = "__reactProps$" + Ie,
          Be = "__reactContainer$" + Ie,
          Ue = "__reactEvents$" + Ie,
          Ve = "__reactListeners$" + Ie,
          We = "__reactHandles$" + Ie,
          Qe = "__reactResources$" + Ie,
          qe = "__reactMarker$" + Ie;
        function Ye(e) {
          (delete e[$e], delete e[He], delete e[Ue], delete e[Ve], delete e[We]);
        }
        function Xe(e) {
          var t = e[$e];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Be] || n[$e])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Dd(e); null !== e; ) {
                  if ((n = e[$e])) return n;
                  e = Dd(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ke(e) {
          if ((e = e[$e] || e[Be])) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t)
              return e;
          }
          return null;
        }
        function Ge(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(l(33));
        }
        function Ze(e) {
          var t = e[Qe];
          return (
            t || (t = e[Qe] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t
          );
        }
        function Je(e) {
          e[qe] = !0;
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
        function yt(e, t, n, r, a, o, l, i) {
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
            null == a && null != o && (e.defaultChecked = !!o),
            null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a),
            null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i
              ? (e.name = "" + ct(i))
              : e.removeAttribute("name"));
        }
        function vt(e, t, n, r, a, o, l, i) {
          if (
            (null != o &&
              "function" != typeof o &&
              "symbol" != typeof o &&
              "boolean" != typeof o &&
              (e.type = o),
            null != t || null != n)
          ) {
            if (("submit" === o || "reset" === o) && null == t) return void ft(e);
            ((n = null != n ? "" + ct(n) : ""),
              (t = null != t ? "" + ct(t) : n),
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
            for (n = "" + ct(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function kt(e, t, n) {
          null == t || ((t = "" + ct(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + ct(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function xt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(l(92));
              if (O(r)) {
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
        function Pt(e, t, n) {
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
        function Tt(e) {
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
        var Nt = new Map([
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
          _t =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function zt(e) {
          return _t.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        function Lt() {}
        var Ot = null;
        function Rt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var At = null,
          Dt = null;
        function Mt(e) {
          var t = Ke(e);
          if (t && (e = t.stateNode)) {
            var n = e[He] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (yt(
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
                      var a = r[He] || null;
                      if (!a) throw Error(l(90));
                      yt(
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
                kt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && wt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Ft = !1;
        function jt(e, t, n) {
          if (Ft) return e(t, n);
          Ft = !0;
          try {
            return e(t);
          } finally {
            if (
              ((Ft = !1),
              (null !== At || null !== Dt) &&
                (Zu(), At && ((t = At), (e = Dt), (Dt = At = null), Mt(t), e)))
            )
              for (t = 0; t < e.length; t++) Mt(e[t]);
          }
        }
        function It(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[He] || null;
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
          Ht = !1;
        if ($t)
          try {
            var Bt = {};
            (Object.defineProperty(Bt, "passive", {
              get: function () {
                Ht = !0;
              },
            }),
              window.addEventListener("test", Bt, Bt),
              window.removeEventListener("test", Bt, Bt));
          } catch (e) {
            Ht = !1;
          }
        var Ut = null,
          Vt = null,
          Wt = null;
        function Qt() {
          if (Wt) return Wt;
          var e,
            t,
            n = Vt,
            r = n.length,
            a = "value" in Ut ? Ut.value : Ut.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Wt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function qt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Yt() {
          return !0;
        }
        function Xt() {
          return !1;
        }
        function Kt(e) {
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
                ? Yt
                : Xt),
              (this.isPropagationStopped = Xt),
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
                  (this.isDefaultPrevented = Yt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = Yt));
              },
              persist: function () {},
              isPersistent: Yt,
            }),
            t
          );
        }
        var Gt,
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
          tn = Kt(en),
          nn = f({}, en, { view: 0, detail: 0 }),
          rn = Kt(nn),
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
                      ? ((Gt = e.screenX - Jt.screenX), (Zt = e.screenY - Jt.screenY))
                      : (Zt = Gt = 0),
                    (Jt = e)),
                  Gt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Zt;
            },
          }),
          on = Kt(an),
          ln = Kt(f({}, an, { dataTransfer: 0 })),
          sn = Kt(f({}, nn, { relatedTarget: 0 })),
          un = Kt(f({}, en, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          cn = Kt(
            f({}, en, {
              clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
              },
            }),
          ),
          dn = Kt(f({}, en, { data: 0 })),
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
        var yn = Kt(
            f({}, nn, {
              key: function (e) {
                if (e.key) {
                  var t = fn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = qt(e))
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
                return "keypress" === e.type ? qt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? qt(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
              },
            }),
          ),
          vn = Kt(
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
          bn = Kt(
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
          wn = Kt(f({}, en, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          kn = Kt(
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
          xn = Kt(f({}, en, { newState: 0, oldState: 0 })),
          Sn = [9, 13, 27, 32],
          En = $t && "CompositionEvent" in window,
          Cn = null;
        $t && "documentMode" in document && (Cn = document.documentMode);
        var Pn = $t && "TextEvent" in window && !Cn,
          Tn = $t && (!En || (Cn && 8 < Cn && 11 >= Cn)),
          Nn = String.fromCharCode(32),
          _n = !1;
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
        function Ln(e) {
          return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var On = !1,
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
        function An(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Rn[e.type] : "textarea" === t;
        }
        function Dn(e, t, n, r) {
          (At ? (Dt ? Dt.push(r) : (Dt = [r])) : (At = r),
            0 < (t = nd(t, "onChange")).length &&
              ((n = new tn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
        }
        var Mn = null,
          Fn = null;
        function jn(e) {
          Yc(e, 0);
        }
        function In(e) {
          if (pt(Ge(e))) return e;
        }
        function $n(e, t) {
          if ("change" === e) return t;
        }
        var Hn = !1;
        if ($t) {
          var Bn;
          if ($t) {
            var Un = "oninput" in document;
            if (!Un) {
              var Vn = document.createElement("div");
              (Vn.setAttribute("oninput", "return;"), (Un = "function" == typeof Vn.oninput));
            }
            Bn = Un;
          } else Bn = !1;
          Hn = Bn && (!document.documentMode || 9 < document.documentMode);
        }
        function Wn() {
          Mn && (Mn.detachEvent("onpropertychange", Qn), (Fn = Mn = null));
        }
        function Qn(e) {
          if ("value" === e.propertyName && In(Fn)) {
            var t = [];
            (Dn(t, Fn, e, Rt(e)), jt(jn, t));
          }
        }
        function qn(e, t, n) {
          "focusin" === e
            ? (Wn(), (Fn = n), (Mn = t).attachEvent("onpropertychange", Qn))
            : "focusout" === e && Wn();
        }
        function Yn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return In(Fn);
        }
        function Xn(e, t) {
          if ("click" === e) return In(t);
        }
        function Kn(e, t) {
          if ("input" === e || "change" === e) return In(t);
        }
        var Gn =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              };
        function Zn(e, t) {
          if (Gn(e, t)) return !0;
          if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!ne.call(t, a) || !Gn(e[a], t[a])) return !1;
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
        function ur(e, t, n) {
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
        $t &&
          ((pr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete dr.animationend.animation,
            delete dr.animationiteration.animation,
            delete dr.animationstart.animation),
          "TransitionEvent" in window || delete dr.transitionend.transition);
        var hr = mr("animationend"),
          gr = mr("animationiteration"),
          yr = mr("animationstart"),
          vr = mr("transitionrun"),
          br = mr("transitionstart"),
          wr = mr("transitioncancel"),
          kr = mr("transitionend"),
          xr = new Map(),
          Sr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Er(e, t) {
          (xr.set(e, t), nt(t, [e]));
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
          Pr = [],
          Tr = 0,
          Nr = 0;
        function _r() {
          for (var e = Tr, t = (Nr = Tr = 0); t < e; ) {
            var n = Pr[t];
            Pr[t++] = null;
            var r = Pr[t];
            Pr[t++] = null;
            var a = Pr[t];
            Pr[t++] = null;
            var o = Pr[t];
            if (((Pr[t++] = null), null !== r && null !== a)) {
              var l = r.pending;
              (null === l ? (a.next = a) : ((a.next = l.next), (l.next = a)), (r.pending = a));
            }
            0 !== o && Rr(n, a, o);
          }
        }
        function zr(e, t, n, r) {
          ((Pr[Tr++] = e),
            (Pr[Tr++] = t),
            (Pr[Tr++] = n),
            (Pr[Tr++] = r),
            (Nr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Lr(e, t, n, r) {
          return (zr(e, t, n, r), Ar(e));
        }
        function Or(e, t) {
          return (zr(e, null, null, t), Ar(e));
        }
        function Rr(e, t, n) {
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
        function Ar(e) {
          if (50 < Uu) throw ((Uu = 0), (Vu = null), Error(l(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Dr = {};
        function Mr(e, t, n, r) {
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
        function Fr(e, t, n, r) {
          return new Mr(e, t, n, r);
        }
        function jr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ir(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Fr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
        function Hr(e, t, n, r, a, o) {
          var i = 0;
          if (((r = e), "function" == typeof e)) jr(e) && (i = 1);
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
              case P:
                return (((e = Fr(31, n, t, a)).elementType = P), (e.lanes = o), e);
              case g:
                return Br(n.children, a, o, t);
              case y:
                ((i = 8), (a |= 24));
                break;
              case v:
                return (((e = Fr(12, n, t, 2 | a)).elementType = v), (e.lanes = o), e);
              case x:
                return (((e = Fr(13, n, t, a)).elementType = x), (e.lanes = o), e);
              case S:
                return (((e = Fr(19, n, t, a)).elementType = S), (e.lanes = o), e);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case w:
                      i = 10;
                      break e;
                    case b:
                      i = 9;
                      break e;
                    case k:
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
          return (((t = Fr(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t);
        }
        function Br(e, t, n, r) {
          return (((e = Fr(7, e, r, t)).lanes = n), e);
        }
        function Ur(e, t, n) {
          return (((e = Fr(6, e, null, t)).lanes = n), e);
        }
        function Vr(e) {
          var t = Fr(18, null, null, 0);
          return ((t.stateNode = e), t);
        }
        function Wr(e, t, n) {
          return (
            ((t = Fr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var Qr = new WeakMap();
        function qr(e, t) {
          if ("object" == typeof e && null !== e) {
            var n = Qr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: te(t) }), Qr.set(e, t), t);
          }
          return { value: e, source: t, stack: te(t) };
        }
        var Yr = [],
          Xr = 0,
          Kr = null,
          Gr = 0,
          Zr = [],
          Jr = 0,
          ea = null,
          ta = 1,
          na = "";
        function ra(e, t) {
          ((Yr[Xr++] = Gr), (Yr[Xr++] = Kr), (Kr = e), (Gr = t));
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
          for (; e === Kr; ) ((Kr = Yr[--Xr]), (Yr[Xr] = null), (Gr = Yr[--Xr]), (Yr[Xr] = null));
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
          ua = null,
          ca = !1,
          da = null,
          fa = !1,
          pa = Error(l(519));
        function ma(e) {
          throw (
            wa(
              qr(
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
          switch (((t[$e] = e), (t[He] = r), n)) {
            case "dialog":
              (Xc("cancel", t), Xc("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              Xc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Qc.length; n++) Xc(Qc[n], t);
              break;
            case "source":
              Xc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (Xc("error", t), Xc("load", t));
              break;
            case "details":
              Xc("toggle", t);
              break;
            case "input":
              (Xc("invalid", t),
                vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
              break;
            case "select":
              Xc("invalid", t);
              break;
            case "textarea":
              (Xc("invalid", t), xt(t, r.value, r.defaultValue, r.children));
          }
          (("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          sd(t.textContent, n)
            ? (null != r.popover && (Xc("beforetoggle", t), Xc("toggle", t)),
              null != r.onScroll && Xc("scroll", t),
              null != r.onScrollEnd && Xc("scrollend", t),
              null != r.onClick && (t.onclick = Lt),
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
        function ya(e) {
          if (e !== sa) return !1;
          if (!ca) return (ga(e), (ca = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t = !("form" !== (t = e.type) && "button" !== t) || vd(e.type, e.memoizedProps)),
              (t = !t)),
            t && ua && ma(e),
            ga(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            ua = Ad(e);
          } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
            ua = Ad(e);
          } else
            27 === n
              ? ((n = ua), Cd(e.type) ? ((e = Rd), (Rd = null), (ua = e)) : (ua = n))
              : (ua = sa ? Od(e.stateNode.nextSibling) : null);
          return !0;
        }
        function va() {
          ((ua = sa = null), (ca = !1));
        }
        function ba() {
          var e = da;
          return (null !== e && (null === _u ? (_u = e) : _u.push.apply(_u, e), (da = null)), e);
        }
        function wa(e) {
          null === da ? (da = [e]) : da.push(e);
        }
        var ka = j(null),
          xa = null,
          Sa = null;
        function Ea(e, t, n) {
          ($(ka, t._currentValue), (t._currentValue = n));
        }
        function Ca(e) {
          ((e._currentValue = ka.current), I(ka));
        }
        function Pa(e, t, n) {
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
        function Ta(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var o = a.dependencies;
            if (null !== o) {
              var i = a.child;
              o = o.firstContext;
              e: for (; null !== o; ) {
                var s = o;
                o = a;
                for (var u = 0; u < t.length; u++)
                  if (s.context === t[u]) {
                    ((o.lanes |= n),
                      null !== (s = o.alternate) && (s.lanes |= n),
                      Pa(o.return, n, e),
                      r || (i = null));
                    break e;
                  }
                o = s.next;
              }
            } else if (18 === a.tag) {
              if (null === (i = a.return)) throw Error(l(341));
              ((i.lanes |= n),
                null !== (o = i.alternate) && (o.lanes |= n),
                Pa(i, n, e),
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
        function Na(e, t, n, r) {
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
                Gn(a.pendingProps.value, i.value) || (null !== e ? e.push(s) : (e = [s]));
              }
            } else if (a === Q.current) {
              if (null === (i = a.alternate)) throw Error(l(387));
              i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(cf) : (e = [cf]));
            }
            a = a.return;
          }
          (null !== e && Ta(t, e, n, r), (t.flags |= 262144));
        }
        function _a(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Gn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function za(e) {
          ((xa = e), (Sa = null), null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function La(e) {
          return Ra(xa, e);
        }
        function Oa(e, t) {
          return (null === xa && za(e), Ra(e, t));
        }
        function Ra(e, t) {
          var n = t._currentValue;
          if (((t = { context: t, memoizedValue: n, next: null }), null === Sa)) {
            if (null === e) throw Error(l(308));
            ((Sa = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
          } else Sa = Sa.next = t;
          return n;
        }
        var Aa =
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
          Da = r.unstable_scheduleCallback,
          Ma = r.unstable_NormalPriority,
          Fa = {
            $$typeof: w,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function ja() {
          return { controller: new Aa(), data: new Map(), refCount: 0 };
        }
        function Ia(e) {
          (e.refCount--,
            0 === e.refCount &&
              Da(Ma, function () {
                e.controller.abort();
              }));
        }
        var $a = null,
          Ha = 0,
          Ba = 0,
          Ua = null;
        function Va() {
          if (0 === --Ha && null !== $a) {
            null !== Ua && (Ua.status = "fulfilled");
            var e = $a;
            (($a = null), (Ba = 0), (Ua = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Wa = R.S;
        R.S = function (e, t) {
          ((Ou = ie()),
            "object" == typeof t &&
              null !== t &&
              "function" == typeof t.then &&
              (function (e, t) {
                if (null === $a) {
                  var n = ($a = []);
                  ((Ha = 0),
                    (Ba = Hc()),
                    (Ua = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        n.push(e);
                      },
                    }));
                }
                (Ha++, t.then(Va, Va));
              })(0, t),
            null !== Wa && Wa(e, t));
        };
        var Qa = j(null);
        function qa() {
          var e = Qa.current;
          return null !== e ? e : pu.pooledCache;
        }
        function Ya(e, t) {
          $(Qa, null === t ? Qa.current : t.pool);
        }
        function Xa() {
          var e = qa();
          return null === e ? null : { parent: Fa._currentValue, pool: e };
        }
        var Ka = Error(l(460)),
          Ga = Error(l(474)),
          Za = Error(l(542)),
          Ja = { then: function () {} };
        function eo(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function to(e, t, n) {
          switch (
            (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Lt, Lt), (t = n)), t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (oo((e = t.reason)), e);
            default:
              if ("string" == typeof t.status) t.then(Lt, Lt);
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
                  throw (oo((e = t.reason)), e);
              }
              throw ((ro = t), Ka);
          }
        }
        function no(e) {
          try {
            return (0, e._init)(e._payload);
          } catch (e) {
            if (null !== e && "object" == typeof e && "function" == typeof e.then)
              throw ((ro = e), Ka);
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
          if (e === Ka || e === Za) throw Error(l(483));
        }
        var lo = null,
          io = 0;
        function so(e) {
          var t = io;
          return ((io += 1), null === lo && (lo = []), to(lo, e, t));
        }
        function uo(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function co(e, t) {
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
          function u(e, t, n, r) {
            var o = n.type;
            return o === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" == typeof o && null !== o && o.$$typeof === C && no(o) === t.type))
                ? (uo((t = a(t, n.props)), n), (t.return = e), t)
                : (uo((t = Hr(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Wr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Br(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t)
              return (((t = Ur("" + t, e.mode, n)).return = e), t);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case m:
                  return (
                    uo((n = Hr(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n
                  );
                case h:
                  return (((t = Wr(t, e.mode, n)).return = e), t);
                case C:
                  return f(e, (t = no(t)), n);
              }
              if (O(t) || _(t)) return (((t = Br(t, e.mode, n, null)).return = e), t);
              if ("function" == typeof t.then) return f(e, so(t), n);
              if (t.$$typeof === w) return f(e, Oa(e, t), n);
              co(e, t);
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
                  return n.key === a ? u(e, t, n, r) : null;
                case h:
                  return n.key === a ? c(e, t, n, r) : null;
                case C:
                  return p(e, t, (n = no(n)), r);
              }
              if (O(n) || _(n)) return null !== a ? null : d(e, t, n, r, null);
              if ("function" == typeof n.then) return p(e, t, so(n), r);
              if (n.$$typeof === w) return p(e, t, Oa(e, n), r);
              co(e, n);
            }
            return null;
          }
          function y(e, t, n, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case m:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case h:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case C:
                  return y(e, t, n, (r = no(r)), a);
              }
              if (O(r) || _(r)) return d(t, (e = e.get(n) || null), r, a, null);
              if ("function" == typeof r.then) return y(e, t, n, so(r), a);
              if (r.$$typeof === w) return y(e, t, n, Oa(t, r), a);
              co(t, r);
            }
            return null;
          }
          function v(s, u, c, d) {
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
                            (n(s, u.sibling), ((d = a(u, c.props.children)).return = s), (s = d));
                            break e;
                          }
                        } else if (
                          u.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === C &&
                            no(b) === u.type)
                        ) {
                          (n(s, u.sibling), uo((d = a(u, c.props)), c), (d.return = s), (s = d));
                          break e;
                        }
                        n(s, u);
                        break;
                      }
                      (t(s, u), (u = u.sibling));
                    }
                    c.type === g
                      ? (((d = Br(c.props.children, s.mode, d, c.key)).return = s), (s = d))
                      : (uo((d = Hr(c.type, c.key, c.props, null, s.mode, d)), c),
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
                          (n(s, u.sibling), ((d = a(u, c.children || [])).return = s), (s = d));
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
                  return v(s, u, (c = no(c)), d);
              }
              if (O(c))
                return (function (a, l, i, s) {
                  for (
                    var u = null, c = null, d = l, m = (l = 0), h = null;
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
                      null === c ? (u = g) : (c.sibling = g),
                      (c = g),
                      (d = h));
                  }
                  if (m === i.length) return (n(a, d), ca && ra(a, m), u);
                  if (null === d) {
                    for (; m < i.length; m++)
                      null !== (d = f(a, i[m], s)) &&
                        ((l = o(d, l, m)), null === c ? (u = d) : (c.sibling = d), (c = d));
                    return (ca && ra(a, m), u);
                  }
                  for (d = r(d); m < i.length; m++)
                    null !== (h = y(d, a, m, i[m], s)) &&
                      (e && null !== h.alternate && d.delete(null === h.key ? m : h.key),
                      (l = o(h, l, m)),
                      null === c ? (u = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    ca && ra(a, m),
                    u
                  );
                })(s, u, c, d);
              if (_(c)) {
                if ("function" != typeof (b = _(c))) throw Error(l(150));
                return (function (a, i, s, u) {
                  if (null == s) throw Error(l(151));
                  for (
                    var c = null, d = null, m = i, h = (i = 0), g = null, v = s.next();
                    null !== m && !v.done;
                    h++, v = s.next()
                  ) {
                    m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
                    var b = p(a, m, v.value, u);
                    if (null === b) {
                      null === m && (m = g);
                      break;
                    }
                    (e && m && null === b.alternate && t(a, m),
                      (i = o(b, i, h)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (m = g));
                  }
                  if (v.done) return (n(a, m), ca && ra(a, h), c);
                  if (null === m) {
                    for (; !v.done; h++, v = s.next())
                      null !== (v = f(a, v.value, u)) &&
                        ((i = o(v, i, h)), null === d ? (c = v) : (d.sibling = v), (d = v));
                    return (ca && ra(a, h), c);
                  }
                  for (m = r(m); !v.done; h++, v = s.next())
                    null !== (v = y(m, a, h, v.value, u)) &&
                      (e && null !== v.alternate && m.delete(null === v.key ? h : v.key),
                      (i = o(v, i, h)),
                      null === d ? (c = v) : (d.sibling = v),
                      (d = v));
                  return (
                    e &&
                      m.forEach(function (e) {
                        return t(a, e);
                      }),
                    ca && ra(a, h),
                    c
                  );
                })(s, u, (c = b.call(c)), d);
              }
              if ("function" == typeof c.then) return v(s, u, so(c), d);
              if (c.$$typeof === w) return v(s, u, Oa(s, c), d);
              co(s, c);
            }
            return ("string" == typeof c && "" !== c) ||
              "number" == typeof c ||
              "bigint" == typeof c
              ? ((c = "" + c),
                null !== u && 6 === u.tag
                  ? (n(s, u.sibling), ((d = a(u, c)).return = s), (s = d))
                  : (n(s, u), ((d = Ur(c, s.mode, d)).return = s), (s = d)),
                i(s))
              : n(s, u);
          }
          return function (e, t, n, r) {
            try {
              io = 0;
              var a = v(e, t, n, r);
              return ((lo = null), a);
            } catch (t) {
              if (t === Ka || t === Za) throw t;
              var o = Fr(29, t, null, e.mode);
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
        function yo(e, t) {
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
        function vo(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function bo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & fu)) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = Ar(e)),
              Rr(e, null, n),
              t
            );
          }
          return (zr(e, r, t, n), Ar(e));
        }
        function wo(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n));
          }
        }
        function ko(e, t) {
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
        var xo = !1;
        function So() {
          if (xo && null !== Ua) throw Ua;
        }
        function Eo(e, t, n, r) {
          xo = !1;
          var a = e.updateQueue;
          ho = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            ((s.next = null), null === l ? (o = u) : (l.next = u), (l = s));
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u), (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = u = s = null, i = o; ; ) {
              var p = -536870913 & i.lane,
                m = p !== i.lane;
              if (m ? (hu & p) === p : (r & p) === p) {
                (0 !== p && p === Ba && (xo = !0),
                  null !== c &&
                    (c = c.next =
                      { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null }));
                e: {
                  var h = e,
                    g = i;
                  p = t;
                  var y = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" == typeof (h = g.payload)) {
                        d = h.call(y, d, p);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (null == (p = "function" == typeof (h = g.payload) ? h.call(y, d, p) : h))
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
                  null === c ? ((u = c = m), (s = d)) : (c = c.next = m),
                  (l |= p));
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                ((i = (m = i).next),
                  (m.next = null),
                  (a.lastBaseUpdate = m),
                  (a.shared.pending = null));
              }
            }
            (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null === o && (a.shared.lanes = 0),
              (Su |= l),
              (e.lanes = l),
              (e.memoizedState = d));
          }
        }
        function Co(e, t) {
          if ("function" != typeof e) throw Error(l(191, e));
          e.call(t);
        }
        function Po(e, t) {
          var n = e.callbacks;
          if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) Co(n[e], t);
        }
        var To = j(null),
          No = j(0);
        function _o(e, t) {
          ($(No, (e = ku)), $(To, t), (ku = e | t.baseLanes));
        }
        function zo() {
          ($(No, ku), $(To, To.current));
        }
        function Lo() {
          ((ku = No.current), I(To), I(No));
        }
        var Oo = j(null),
          Ro = null;
        function Ao(e) {
          var t = e.alternate;
          ($(Io, 1 & Io.current),
            $(Oo, e),
            null === Ro &&
              (null === t || null !== To.current || null !== t.memoizedState) &&
              (Ro = e));
        }
        function Do(e) {
          ($(Io, Io.current), $(Oo, e), null === Ro && (Ro = e));
        }
        function Mo(e) {
          22 === e.tag ? ($(Io, Io.current), $(Oo, e), null === Ro && (Ro = e)) : Fo();
        }
        function Fo() {
          ($(Io, Io.current), $(Oo, Oo.current));
        }
        function jo(e) {
          (I(Oo), Ro === e && (Ro = null), I(Io));
        }
        var Io = j(0);
        function $o(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || zd(n) || Ld(n))) return t;
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
        var Ho = 0,
          Bo = null,
          Uo = null,
          Vo = null,
          Wo = !1,
          Qo = !1,
          qo = !1,
          Yo = 0,
          Xo = 0,
          Ko = null,
          Go = 0;
        function Zo() {
          throw Error(l(321));
        }
        function Jo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!Gn(e[n], t[n])) return !1;
          return !0;
        }
        function el(e, t, n, r, a, o) {
          return (
            (Ho = o),
            (Bo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (R.H = null === e || null === e.memoizedState ? hi : gi),
            (qo = !1),
            (o = n(r, a)),
            (qo = !1),
            Qo && (o = nl(t, n, r, a)),
            tl(e),
            o
          );
        }
        function tl(e) {
          R.H = mi;
          var t = null !== Uo && null !== Uo.next;
          if (((Ho = 0), (Vo = Uo = Bo = null), (Wo = !1), (Xo = 0), (Ko = null), t))
            throw Error(l(300));
          null === e || Oi || (null !== (e = e.dependencies) && _a(e) && (Oi = !0));
        }
        function nl(e, t, n, r) {
          Bo = e;
          var a = 0;
          do {
            if ((Qo && (Ko = null), (Xo = 0), (Qo = !1), 25 <= a)) throw Error(l(301));
            if (((a += 1), (Vo = Uo = null), null != e.updateQueue)) {
              var o = e.updateQueue;
              ((o.lastEffect = null),
                (o.events = null),
                (o.stores = null),
                null != o.memoCache && (o.memoCache.index = 0));
            }
            ((R.H = yi), (o = t(n, r)));
          } while (Qo);
          return o;
        }
        function rl() {
          var e = R.H,
            t = e.useState()[0];
          return (
            (t = "function" == typeof t.then ? ul(t) : t),
            (e = e.useState()[0]),
            (null !== Uo ? Uo.memoizedState : null) !== e && (Bo.flags |= 1024),
            t
          );
        }
        function al() {
          var e = 0 !== Yo;
          return ((Yo = 0), e);
        }
        function ol(e, t, n) {
          ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
        }
        function ll(e) {
          if (Wo) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            Wo = !1;
          }
          ((Ho = 0), (Vo = Uo = Bo = null), (Qo = !1), (Xo = Yo = 0), (Ko = null));
        }
        function il() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (null === Vo ? (Bo.memoizedState = Vo = e) : (Vo = Vo.next = e), Vo);
        }
        function sl() {
          if (null === Uo) {
            var e = Bo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Uo.next;
          var t = null === Vo ? Bo.memoizedState : Vo.next;
          if (null !== t) ((Vo = t), (Uo = e));
          else {
            if (null === e) {
              if (null === Bo.alternate) throw Error(l(467));
              throw Error(l(310));
            }
            ((e = {
              memoizedState: (Uo = e).memoizedState,
              baseState: Uo.baseState,
              baseQueue: Uo.baseQueue,
              queue: Uo.queue,
              next: null,
            }),
              null === Vo ? (Bo.memoizedState = Vo = e) : (Vo = Vo.next = e));
          }
          return Vo;
        }
        function ul(e) {
          var t = Xo;
          return (
            (Xo += 1),
            null === Ko && (Ko = []),
            (e = to(Ko, e, t)),
            (t = Bo),
            null === (null === Vo ? t.memoizedState : Vo.next) &&
              ((t = t.alternate), (R.H = null === t || null === t.memoizedState ? hi : gi)),
            e
          );
        }
        function cl(e) {
          if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return ul(e);
            if (e.$$typeof === w) return La(e);
          }
          throw Error(l(438, String(e)));
        }
        function dl(e) {
          var t = null,
            n = Bo.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Bo.alternate;
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
              (Bo.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = T;
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
              u = null,
              c = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (hu & f) === f : (Ho & f) === f) {
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
                    f === Ba && (d = !0));
                else {
                  if ((Ho & p) === p) {
                    ((c = c.next), p === Ba && (d = !0));
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
                    null === u ? ((s = u = f), (i = o)) : (u = u.next = f),
                    (Bo.lanes |= p),
                    (Su |= p));
                }
                ((f = c.action), qo && n(o, f), (o = c.hasEagerState ? c.eagerState : n(o, f)));
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
                  null === u ? ((s = u = p), (i = o)) : (u = u.next = p),
                  (Bo.lanes |= f),
                  (Su |= f));
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (i = o) : (u.next = s),
              !Gn(o, e.memoizedState) && ((Oi = !0), d && null !== (n = Ua)))
            )
              throw n;
            ((e.memoizedState = o),
              (e.baseState = i),
              (e.baseQueue = u),
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
            (Gn(o, t.memoizedState) || (Oi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o));
          }
          return [o, r];
        }
        function gl(e, t, n) {
          var r = Bo,
            a = sl(),
            o = ca;
          if (o) {
            if (void 0 === n) throw Error(l(407));
            n = n();
          } else n = t();
          var i = !Gn((Uo || a).memoizedState, n);
          if (
            (i && ((a.memoizedState = n), (Oi = !0)),
            (a = a.queue),
            Hl(bl.bind(null, r, a, e), [e]),
            a.getSnapshot !== t || i || (null !== Vo && 1 & Vo.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Ml(9, { destroy: void 0 }, vl.bind(null, r, a, n, t), null),
              null === pu)
            )
              throw Error(l(349));
            o || 127 & Ho || yl(r, t, n);
          }
          return n;
        }
        function yl(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Bo.updateQueue)
              ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                (Bo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function vl(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), wl(t) && kl(e));
        }
        function bl(e, t, n) {
          return n(function () {
            wl(t) && kl(e);
          });
        }
        function wl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Gn(e, n);
          } catch (e) {
            return !0;
          }
        }
        function kl(e) {
          var t = Or(e, 2);
          null !== t && qu(t, 0, 2);
        }
        function xl(e) {
          var t = il();
          if ("function" == typeof e) {
            var n = e;
            if (((e = n()), qo)) {
              ve(!0);
              try {
                n();
              } finally {
                ve(!1);
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
            (null !== R.T ? n(!0) : (o.isTransition = !1),
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
            var o = R.T,
              l = {};
            R.T = l;
            try {
              var i = n(a, r),
                s = R.S;
              (null !== s && s(l, i), Pl(e, t, i));
            } catch (n) {
              Nl(e, t, n);
            } finally {
              (null !== o && null !== l.types && (o.types = l.types), (R.T = o));
            }
          } else
            try {
              Pl(e, t, (o = n(a, r)));
            } catch (n) {
              Nl(e, t, n);
            }
        }
        function Pl(e, t, n) {
          null !== n && "object" == typeof n && "function" == typeof n.then
            ? n.then(
                function (n) {
                  Tl(e, t, n);
                },
                function (n) {
                  return Nl(e, t, n);
                },
              )
            : Tl(e, t, n);
        }
        function Tl(e, t, n) {
          ((t.status = "fulfilled"),
            (t.value = n),
            _l(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), Cl(e, n))));
        }
        function Nl(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((t.status = "rejected"), (t.reason = n), _l(t), (t = t.next));
            } while (t !== r);
          }
          e.action = null;
        }
        function _l(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function zl(e, t) {
          return t;
        }
        function Ll(e, t) {
          if (ca) {
            var n = pu.formState;
            if (null !== n) {
              e: {
                var r = Bo;
                if (ca) {
                  if (ua) {
                    t: {
                      for (var a = ua, o = fa; 8 !== a.nodeType; ) {
                        if (!o) {
                          a = null;
                          break t;
                        }
                        if (null === (a = Od(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (o = a.data) || "F" === o ? a : null;
                    }
                    if (a) {
                      ((ua = Od(a.nextSibling)), (r = "F!" === a.data));
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
            (n = si.bind(null, Bo, r)),
            (r.dispatch = n),
            (r = xl(!1)),
            (o = ci.bind(null, Bo, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = il()).queue = a),
            (n = El.bind(null, Bo, a, o, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Ol(e) {
          return Rl(sl(), Uo, e);
        }
        function Rl(e, t, n) {
          if (
            ((t = ml(e, t, zl)[0]),
            (e = pl(fl)[0]),
            "object" == typeof t && null !== t && "function" == typeof t.then)
          )
            try {
              var r = ul(t);
            } catch (e) {
              if (e === Ka) throw Za;
              throw e;
            }
          else r = t;
          var a = (t = sl()).queue,
            o = a.dispatch;
          return (
            n !== t.memoizedState &&
              ((Bo.flags |= 2048), Ml(9, { destroy: void 0 }, Al.bind(null, a, n), null)),
            [r, o, e]
          );
        }
        function Al(e, t) {
          e.action = t;
        }
        function Dl(e) {
          var t = sl(),
            n = Uo;
          if (null !== n) return Rl(t, n, e);
          (sl(), (t = t.memoizedState));
          var r = (n = sl()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function Ml(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = Bo.updateQueue) &&
              ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
              (Bo.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fl() {
          return sl().memoizedState;
        }
        function jl(e, t, n, r) {
          var a = il();
          ((Bo.flags |= e),
            (a.memoizedState = Ml(1 | t, { destroy: void 0 }, n, void 0 === r ? null : r)));
        }
        function Il(e, t, n, r) {
          var a = sl();
          r = void 0 === r ? null : r;
          var o = a.memoizedState.inst;
          null !== Uo && null !== r && Jo(r, Uo.memoizedState.deps)
            ? (a.memoizedState = Ml(t, o, n, r))
            : ((Bo.flags |= e), (a.memoizedState = Ml(1 | t, o, n, r)));
        }
        function $l(e, t) {
          jl(8390656, 8, e, t);
        }
        function Hl(e, t) {
          Il(2048, 8, e, t);
        }
        function Bl(e) {
          var t = sl().memoizedState;
          return (
            (function (e) {
              Bo.flags |= 4;
              var t = Bo.updateQueue;
              if (null === t)
                ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
                  (Bo.updateQueue = t),
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
          return Il(4, 2, e, t);
        }
        function Vl(e, t) {
          return Il(4, 4, e, t);
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
        function Ql(e, t, n) {
          ((n = null != n ? n.concat([e]) : null), Il(4, 4, Wl.bind(null, t, e), n));
        }
        function ql() {}
        function Yl(e, t) {
          var n = sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && Jo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Xl(e, t) {
          var n = sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && Jo(t, r[1])) return r[0];
          if (((r = e()), qo)) {
            ve(!0);
            try {
              e();
            } finally {
              ve(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function Kl(e, t, n) {
          return void 0 === n || (1073741824 & Ho && !(261930 & hu))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n), (e = Qu()), (Bo.lanes |= e), (Su |= e), n);
        }
        function Gl(e, t, n, r) {
          return Gn(n, t)
            ? n
            : null !== To.current
              ? ((e = Kl(e, n, r)), Gn(e, t) || (Oi = !0), e)
              : 42 & Ho && (!(1073741824 & Ho) || 261930 & hu)
                ? ((e = Qu()), (Bo.lanes |= e), (Su |= e), t)
                : ((Oi = !0), (e.memoizedState = n));
        }
        function Zl(e, t, n, r, a) {
          var o = A.p;
          A.p = 0 !== o && 8 > o ? o : 8;
          var l,
            i,
            s,
            u = R.T,
            c = {};
          ((R.T = c), ci(e, !1, t, n));
          try {
            var d = a(),
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
            ((A.p = o), null !== u && null !== c.types && (u.types = c.types), (R.T = u));
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
            D,
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
              memoizedState: D,
              baseState: D,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fl,
                lastRenderedState: D,
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
          return La(cf);
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
                var n = Wu(),
                  r = bo(t, (e = vo(n)), n);
                return (
                  null !== r && (qu(r, 0, n), wo(r, t, n)),
                  (t = { cache: ja() }),
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
            di(e) ? fi(t, n) : null !== (n = Lr(e, t, n, r)) && (qu(n, 0, r), pi(n, t, r)));
        }
        function si(e, t, n) {
          ui(e, t, n, Wu());
        }
        function ui(e, t, n, r) {
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
                if (((a.hasEagerState = !0), (a.eagerState = i), Gn(i, l)))
                  return (zr(e, t, a, 0), null === pu && _r(), !1);
              } catch (e) {}
            if (null !== (n = Lr(e, t, a, r))) return (qu(n, 0, r), pi(n, t, r), !0);
          }
          return !1;
        }
        function ci(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Hc(),
              gesture: null,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            di(e))
          ) {
            if (t) throw Error(l(479));
          } else null !== (t = Lr(e, n, r, 2)) && qu(t, 0, 2);
        }
        function di(e) {
          var t = e.alternate;
          return e === Bo || (null !== t && t === Bo);
        }
        function fi(e, t) {
          Qo = Wo = !0;
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
          readContext: La,
          use: cl,
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
            readContext: La,
            use: cl,
            useCallback: function (e, t) {
              return ((il().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: La,
            useEffect: $l,
            useImperativeHandle: function (e, t, n) {
              ((n = null != n ? n.concat([e]) : null), jl(4194308, 4, Wl.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return jl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              jl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = il();
              t = void 0 === t ? null : t;
              var r = e();
              if (qo) {
                ve(!0);
                try {
                  e();
                } finally {
                  ve(!1);
                }
              }
              return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
              var r = il();
              if (void 0 !== n) {
                var a = n(t);
                if (qo) {
                  ve(!0);
                  try {
                    n(t);
                  } finally {
                    ve(!1);
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
                (e = e.dispatch = ii.bind(null, Bo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (il().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = xl(e)).queue,
                n = si.bind(null, Bo, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: ql,
            useDeferredValue: function (e, t) {
              return Kl(il(), e, t);
            },
            useTransition: function () {
              var e = xl(!1);
              return ((e = Zl.bind(null, Bo, e.queue, !0, !1)), (il().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
              var r = Bo,
                a = il();
              if (ca) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === pu)) throw Error(l(349));
                127 & hu || yl(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                $l(bl.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Ml(9, { destroy: void 0 }, vl.bind(null, r, o, n, t), null),
                n
              );
            },
            useId: function () {
              var e = il(),
                t = pu.identifierPrefix;
              if (ca) {
                var n = na;
                ((t = "_" + t + "R_" + (n = (ta & ~(1 << (32 - be(ta) - 1))).toString(32) + n)),
                  0 < (n = Yo++) && (t += "H" + n.toString(32)),
                  (t += "_"));
              } else t = "_" + t + "r_" + (n = Go++).toString(32) + "_";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: ri,
            useFormState: Ll,
            useActionState: Ll,
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
              return ((t.queue = n), (t = ci.bind(null, Bo, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: dl,
            useCacheRefresh: function () {
              return (il().memoizedState = li.bind(null, Bo));
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
            readContext: La,
            use: cl,
            useCallback: Yl,
            useContext: La,
            useEffect: Hl,
            useImperativeHandle: Ql,
            useInsertionEffect: Ul,
            useLayoutEffect: Vl,
            useMemo: Xl,
            useReducer: pl,
            useRef: Fl,
            useState: function () {
              return pl(fl);
            },
            useDebugValue: ql,
            useDeferredValue: function (e, t) {
              return Gl(sl(), Uo.memoizedState, e, t);
            },
            useTransition: function () {
              var e = pl(fl)[0],
                t = sl().memoizedState;
              return ["boolean" == typeof e ? e : ul(e), t];
            },
            useSyncExternalStore: gl,
            useId: ai,
            useHostTransitionStatus: ri,
            useFormState: Ol,
            useActionState: Ol,
            useOptimistic: function (e, t) {
              return Sl(sl(), 0, e, t);
            },
            useMemoCache: dl,
            useCacheRefresh: oi,
          };
        gi.useEffectEvent = Bl;
        var yi = {
          readContext: La,
          use: cl,
          useCallback: Yl,
          useContext: La,
          useEffect: Hl,
          useImperativeHandle: Ql,
          useInsertionEffect: Ul,
          useLayoutEffect: Vl,
          useMemo: Xl,
          useReducer: hl,
          useRef: Fl,
          useState: function () {
            return hl(fl);
          },
          useDebugValue: ql,
          useDeferredValue: function (e, t) {
            var n = sl();
            return null === Uo ? Kl(n, e, t) : Gl(n, Uo.memoizedState, e, t);
          },
          useTransition: function () {
            var e = hl(fl)[0],
              t = sl().memoizedState;
            return ["boolean" == typeof e ? e : ul(e), t];
          },
          useSyncExternalStore: gl,
          useId: ai,
          useHostTransitionStatus: ri,
          useFormState: Dl,
          useActionState: Dl,
          useOptimistic: function (e, t) {
            var n = sl();
            return null !== Uo ? Sl(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
          },
          useMemoCache: dl,
          useCacheRefresh: oi,
        };
        function vi(e, t, n, r) {
          ((n = null == (n = n(r, (t = e.memoizedState))) ? t : f({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        yi.useEffectEvent = Bl;
        var bi = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Wu(),
              a = vo(r);
            ((a.payload = t),
              null != n && (a.callback = n),
              null !== (t = bo(e, a, r)) && (qu(t, 0, r), wo(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Wu(),
              a = vo(r);
            ((a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              null !== (t = bo(e, a, r)) && (qu(t, 0, r), wo(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Wu(),
              r = vo(n);
            ((r.tag = 2),
              null != t && (r.callback = t),
              null !== (t = bo(e, r, n)) && (qu(t, 0, n), wo(t, e, n)));
          },
        };
        function wi(e, t, n, r, a, o, l) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !(t.prototype && t.prototype.isPureReactComponent && Zn(n, r) && Zn(a, o));
        }
        function ki(e, t, n, r) {
          ((e = t.state),
            "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && bi.enqueueReplaceState(t, t.state, null));
        }
        function xi(e, t) {
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
        function Pi(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function Ti(e, t, n) {
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
        function Ni(e, t, n) {
          return (
            ((n = vo(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Pi(e, t);
            }),
            n
          );
        }
        function _i(e) {
          return (((e = vo(e)).tag = 3), e);
        }
        function zi(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" == typeof a) {
            var o = r.value;
            ((e.payload = function () {
              return a(o);
            }),
              (e.callback = function () {
                Ti(t, n, r);
              }));
          }
          var l = n.stateNode;
          null !== l &&
            "function" == typeof l.componentDidCatch &&
            (e.callback = function () {
              (Ti(t, n, r),
                "function" != typeof a && (null === Du ? (Du = new Set([this])) : Du.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
            });
        }
        var Li = Error(l(461)),
          Oi = !1;
        function Ri(e, t, n, r) {
          t.child = null === e ? mo(t, null, n, r) : po(t, e.child, n, r);
        }
        function Ai(e, t, n, r, a) {
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
            null === e || Oi
              ? (ca && i && oa(t), (t.flags |= 1), Ri(e, t, r, a), t.child)
              : (ol(e, t, a), rs(e, t, a))
          );
        }
        function Di(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" != typeof o ||
              jr(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare
              ? (((e = Hr(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Mi(e, t, o, r, a));
          }
          if (((o = e.child), !as(e, a))) {
            var l = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Zn)(l, r) && e.ref === t.ref)
              return rs(e, t, a);
          }
          return ((t.flags |= 1), ((e = Ir(o, r)).ref = t.ref), (e.return = t), (t.child = e));
        }
        function Mi(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (Zn(o, r) && e.ref === t.ref) {
              if (((Oi = !1), (t.pendingProps = r = o), !as(e, a)))
                return ((t.lanes = e.lanes), rs(e, t, a));
              131072 & e.flags && (Oi = !0);
            }
          }
          return Ui(e, t, n, r, a);
        }
        function Fi(e, t, n, r) {
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
              null !== e && Ya(0, null !== o ? o.cachePool : null),
              null !== o ? _o(t, o) : zo(),
              Mo(t));
          } else
            null !== o
              ? (Ya(0, o.cachePool), _o(t, o), Fo(), (t.memoizedState = null))
              : (null !== e && Ya(0, null), zo(), Fo());
          return (Ri(e, t, a, n), t.child);
        }
        function ji(e, t) {
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
          var o = qa();
          return (
            (o = null === o ? null : { parent: Fa._currentValue, pool: o }),
            (t.memoizedState = { baseLanes: n, cachePool: o }),
            null !== e && Ya(0, null),
            zo(),
            Mo(t),
            null !== e && Na(e, t, r, !0),
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
        function Hi(e, t, n) {
          return (
            po(t, e.child, null, n),
            ((e = $i(t, t.pendingProps)).flags |= 2),
            jo(t),
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
        function Ui(e, t, n, r, a) {
          return (
            za(t),
            (n = el(e, t, n, r, void 0, a)),
            (r = al()),
            null === e || Oi
              ? (ca && r && oa(t), (t.flags |= 1), Ri(e, t, n, a), t.child)
              : (ol(e, t, a), rs(e, t, a))
          );
        }
        function Vi(e, t, n, r, a, o) {
          return (
            za(t),
            (t.updateQueue = null),
            (n = nl(t, r, n, a)),
            tl(e),
            (r = al()),
            null === e || Oi
              ? (ca && r && oa(t), (t.flags |= 1), Ri(e, t, n, o), t.child)
              : (ol(e, t, o), rs(e, t, o))
          );
        }
        function Wi(e, t, n, r, a) {
          if ((za(t), null === t.stateNode)) {
            var o = Dr,
              l = n.contextType;
            ("object" == typeof l && null !== l && (o = La(l)),
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
              (o.context = "object" == typeof l && null !== l ? La(l) : Dr),
              (o.state = t.memoizedState),
              "function" == typeof (l = n.getDerivedStateFromProps) &&
                (vi(t, n, l, r), (o.state = t.memoizedState)),
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
              s = xi(n, i);
            o.props = s;
            var u = o.context,
              c = n.contextType;
            ((l = Dr), "object" == typeof c && null !== c && (l = La(c)));
            var d = n.getDerivedStateFromProps;
            ((c = "function" == typeof d || "function" == typeof o.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              c ||
                ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof o.componentWillReceiveProps) ||
                ((i || u !== l) && ki(t, o, r, l)),
              (ho = !1));
            var f = t.memoizedState;
            ((o.state = f),
              Eo(t, r, o, a),
              So(),
              (u = t.memoizedState),
              i || f !== u || ho
                ? ("function" == typeof d && (vi(t, n, d, r), (u = t.memoizedState)),
                  (s = ho || wi(t, n, s, r, f, u, l))
                    ? (c ||
                        ("function" != typeof o.UNSAFE_componentWillMount &&
                          "function" != typeof o.componentWillMount) ||
                        ("function" == typeof o.componentWillMount && o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" == typeof o.componentDidMount && (t.flags |= 4194308))
                    : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = l),
                  (r = s))
                : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1)));
          } else {
            ((o = t.stateNode),
              yo(e, t),
              (c = xi(n, (l = t.memoizedProps))),
              (o.props = c),
              (d = t.pendingProps),
              (f = o.context),
              (u = n.contextType),
              (s = Dr),
              "object" == typeof u && null !== u && (s = La(u)),
              (u =
                "function" == typeof (i = n.getDerivedStateFromProps) ||
                "function" == typeof o.getSnapshotBeforeUpdate) ||
                ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof o.componentWillReceiveProps) ||
                ((l !== d || f !== s) && ki(t, o, r, s)),
              (ho = !1),
              (f = t.memoizedState),
              (o.state = f),
              Eo(t, r, o, a),
              So());
            var p = t.memoizedState;
            l !== d ||
            f !== p ||
            ho ||
            (null !== e && null !== e.dependencies && _a(e.dependencies))
              ? ("function" == typeof i && (vi(t, n, i, r), (p = t.memoizedState)),
                (c =
                  ho ||
                  wi(t, n, c, r, f, p, s) ||
                  (null !== e && null !== e.dependencies && _a(e.dependencies)))
                  ? (u ||
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
                (r = c))
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
            Bi(e, t),
            (r = !!(128 & t.flags)),
            o || r
              ? ((o = t.stateNode),
                (n = r && "function" != typeof n.getDerivedStateFromError ? null : o.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = po(t, e.child, null, a)), (t.child = po(t, null, n, a)))
                  : Ri(e, t, n, a),
                (t.memoizedState = o.state),
                (e = t.child))
              : (e = rs(e, t, a)),
            e
          );
        }
        function Qi(e, t, n, r) {
          return (va(), (t.flags |= 256), Ri(e, t, n, r), t.child);
        }
        var qi = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Yi(e) {
          return { baseLanes: e, cachePool: Xa() };
        }
        function Xi(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Pu), e);
        }
        function Ki(e, t, n) {
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
            if (ca) {
              if (
                (o ? Ao(t) : Fo(),
                (e = ua)
                  ? null !== (e = null !== (e = _d(e, fa)) && "&" !== e.data ? e : null) &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext: null !== ea ? { id: ta, overflow: na } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((n = Vr(e)).return = t),
                    (t.child = n),
                    (sa = t),
                    (ua = null))
                  : (e = null),
                null === e)
              )
                throw ma(t);
              return (Ld(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var s = a.children;
            return (
              (a = a.fallback),
              o
                ? (Fo(),
                  (s = Zi({ mode: "hidden", children: s }, (o = t.mode))),
                  (a = Br(a, o, n, null)),
                  (s.return = t),
                  (a.return = t),
                  (s.sibling = a),
                  (t.child = s),
                  ((a = t.child).memoizedState = Yi(n)),
                  (a.childLanes = Xi(e, r, n)),
                  (t.memoizedState = qi),
                  ji(null, a))
                : (Ao(t), Gi(t, s))
            );
          }
          var u = e.memoizedState;
          if (null !== u && null !== (s = u.dehydrated)) {
            if (i)
              256 & t.flags
                ? (Ao(t), (t.flags &= -257), (t = Ji(e, t, n)))
                : null !== t.memoizedState
                  ? (Fo(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (Fo(),
                    (s = a.fallback),
                    (o = t.mode),
                    (a = Zi({ mode: "visible", children: a.children }, o)),
                    ((s = Br(s, o, n, null)).flags |= 2),
                    (a.return = t),
                    (s.return = t),
                    (a.sibling = s),
                    (t.child = a),
                    po(t, e.child, null, n),
                    ((a = t.child).memoizedState = Yi(n)),
                    (a.childLanes = Xi(e, r, n)),
                    (t.memoizedState = qi),
                    (t = ji(null, a)));
            else if ((Ao(t), Ld(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              ((r = c),
                ((a = Error(l(419))).stack = ""),
                (a.digest = r),
                wa({ value: a, source: null, stack: null }),
                (t = Ji(e, t, n)));
            } else if ((Oi || Na(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Oi || r)) {
              if (null !== (r = pu) && 0 !== (a = Ae(r, n)) && a !== u.retryLane)
                throw ((u.retryLane = a), Or(e, a), qu(r, 0, a), Li);
              (zd(s) || oc(), (t = Ji(e, t, n)));
            } else
              zd(s)
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = u.treeContext),
                  (ua = Od(s.nextSibling)),
                  (sa = t),
                  (ca = !0),
                  (da = null),
                  (fa = !1),
                  null !== e && ia(t, e),
                  ((t = Gi(t, a.children)).flags |= 4096));
            return t;
          }
          return o
            ? (Fo(),
              (s = a.fallback),
              (o = t.mode),
              (c = (u = e.child).sibling),
              ((a = Ir(u, { mode: "hidden", children: a.children })).subtreeFlags =
                65011712 & u.subtreeFlags),
              null !== c ? (s = Ir(c, s)) : ((s = Br(s, o, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              ji(null, a),
              (a = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Yi(n))
                : (null !== (o = s.cachePool)
                    ? ((u = Fa._currentValue), (o = o.parent !== u ? { parent: u, pool: u } : o))
                    : (o = Xa()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: o })),
              (a.memoizedState = s),
              (a.childLanes = Xi(e, r, n)),
              (t.memoizedState = qi),
              ji(e.child, a))
            : (Ao(t),
              (e = (n = e.child).sibling),
              ((n = Ir(n, { mode: "visible", children: a.children })).return = t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Gi(e, t) {
          return (((t = Zi({ mode: "visible", children: t }, e.mode)).return = e), (e.child = t));
        }
        function Zi(e, t) {
          return (((e = Fr(22, e, null, t)).lanes = 0), e);
        }
        function Ji(e, t, n) {
          return (
            po(t, e.child, null, n),
            ((e = Gi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function es(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), Pa(e.return, t, n));
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
            Ri(e, t, r, n),
            (r = ca ? Gr : 0),
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
            (Su |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Na(e, t, n, !1), 0 === (n & t.childLanes))) return null;
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
          return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !_a(e));
        }
        function os(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Oi = !0;
            else {
              if (!(as(e, n) || 128 & t.flags))
                return (
                  (Oi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (q(t, t.stateNode.containerInfo), Ea(0, Fa, e.memoizedState.cache), va());
                        break;
                      case 27:
                      case 5:
                        X(t);
                        break;
                      case 4:
                        q(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        Ea(0, t.type, t.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== t.memoizedState) return ((t.flags |= 128), Do(t), null);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Ao(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ki(e, t, n)
                              : (Ao(t), null !== (e = rs(e, t, n)) ? e.sibling : null);
                        Ao(t);
                        break;
                      case 19:
                        var a = !!(128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Na(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
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
                        return ((t.lanes = 0), Fi(e, t, n, t.pendingProps));
                      case 24:
                        Ea(0, Fa, e.memoizedState.cache);
                    }
                    return rs(e, t, n);
                  })(e, t, n)
                );
              Oi = !!(131072 & e.flags);
            }
          else ((Oi = !1), ca && 1048576 & t.flags && aa(t, Gr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                var r = t.pendingProps;
                if (((e = no(t.elementType)), (t.type = e), "function" != typeof e)) {
                  if (null != e) {
                    var a = e.$$typeof;
                    if (a === k) {
                      ((t.tag = 11), (t = Ai(null, t, e, r, n)));
                      break e;
                    }
                    if (a === E) {
                      ((t.tag = 14), (t = Di(null, t, e, r, n)));
                      break e;
                    }
                  }
                  throw ((t = L(e) || e), Error(l(306, t, "")));
                }
                jr(e)
                  ? ((r = xi(e, r)), (t.tag = 1), (t = Wi(null, t, e, r, n)))
                  : ((t.tag = 0), (t = Ui(null, t, e, r, n)));
              }
              return t;
            case 0:
              return Ui(e, t, t.type, t.pendingProps, n);
            case 1:
              return Wi(e, t, (r = t.type), (a = xi(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((q(t, t.stateNode.containerInfo), null === e)) throw Error(l(387));
                r = t.pendingProps;
                var o = t.memoizedState;
                ((a = o.element), yo(e, t), Eo(t, r, null, n));
                var i = t.memoizedState;
                if (
                  ((r = i.cache),
                  Ea(0, Fa, r),
                  r !== o.cache && Ta(t, [Fa], n, !0),
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
                    t = Qi(e, t, r, n);
                    break e;
                  }
                  if (r !== a) {
                    (wa((a = qr(Error(l(424)), t))), (t = Qi(e, t, r, n)));
                    break e;
                  }
                  for (
                    e =
                      9 === (e = t.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      ua = Od(e.firstChild),
                      sa = t,
                      ca = !0,
                      da = null,
                      fa = !0,
                      n = mo(t, null, r, n),
                      t.child = n;
                    n;
                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((va(), r === a)) {
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
                  ? (n = Vd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : ca ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = hd(W.current).createElement(n))[$e] = t),
                      (r[He] = e),
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
                X(t),
                null === e &&
                  ca &&
                  ((r = t.stateNode = Md(t.type, t.pendingProps, W.current)),
                  (sa = t),
                  (fa = !0),
                  (a = ua),
                  Cd(t.type) ? ((Rd = a), (ua = Od(r.firstChild))) : (ua = a)),
                Ri(e, t, t.pendingProps.children, n),
                Bi(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  ca &&
                  ((a = r = ua) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
                        } else if (r) {
                          if (!e[qe])
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
                        if (null === (e = Od(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, fa))
                      ? ((t.stateNode = r), (sa = t), (ua = Od(r.firstChild)), (fa = !1), (a = !0))
                      : (a = !1)),
                  a || ma(t)),
                X(t),
                (a = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = o.children),
                vd(a, o) ? (r = null) : null !== i && vd(a, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = el(e, t, rl, null, null, n)), (cf._currentValue = a)),
                Bi(e, t),
                Ri(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  ca &&
                  ((e = n = ua) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = Od(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, fa))
                      ? ((t.stateNode = n), (sa = t), (ua = null), (e = !0))
                      : (e = !1)),
                  e || ma(t)),
                null
              );
            case 13:
              return Ki(e, t, n);
            case 4:
              return (
                q(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = po(t, null, r, n)) : Ri(e, t, r, n),
                t.child
              );
            case 11:
              return Ai(e, t, t.type, t.pendingProps, n);
            case 7:
              return (Ri(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (Ri(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return (
                (r = t.pendingProps), Ea(0, t.type, r.value), Ri(e, t, r.children, n), t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                za(t),
                (r = r((a = La(a)))),
                (t.flags |= 1),
                Ri(e, t, r, n),
                t.child
              );
            case 14:
              return Di(e, t, t.type, t.pendingProps, n);
            case 15:
              return Mi(e, t, t.type, t.pendingProps, n);
            case 19:
              return ns(e, t, n);
            case 31:
              return (function (e, t, n) {
                var r = t.pendingProps,
                  a = !!(128 & t.flags);
                if (((t.flags &= -129), null === e)) {
                  if (ca) {
                    if ("hidden" === r.mode)
                      return ((e = $i(t, r)), (t.lanes = 536870912), ji(null, e));
                    if (
                      (Do(t),
                      (e = ua)
                        ? null !== (e = null !== (e = _d(e, fa)) && "&" === e.data ? e : null) &&
                          ((t.memoizedState = {
                            dehydrated: e,
                            treeContext: null !== ea ? { id: ta, overflow: na } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((n = Vr(e)).return = t),
                          (t.child = n),
                          (sa = t),
                          (ua = null))
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
                  if ((Do(t), a))
                    if (256 & t.flags) ((t.flags &= -257), (t = Hi(e, t, n)));
                    else {
                      if (null === t.memoizedState) throw Error(l(558));
                      ((t.child = e.child), (t.flags |= 128), (t = null));
                    }
                  else if ((Oi || Na(e, t, n, !1), (a = 0 !== (n & e.childLanes)), Oi || a)) {
                    if (null !== (r = pu) && 0 !== (i = Ae(r, n)) && i !== o.retryLane)
                      throw ((o.retryLane = i), Or(e, i), qu(r, 0, i), Li);
                    (oc(), (t = Hi(e, t, n)));
                  } else
                    ((e = o.treeContext),
                      (ua = Od(i.nextSibling)),
                      (sa = t),
                      (ca = !0),
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
              return Fi(e, t, n, t.pendingProps);
            case 24:
              return (
                za(t),
                (r = La(Fa)),
                null === e
                  ? (null === (a = qa()) &&
                      ((a = pu),
                      (o = ja()),
                      (a.pooledCache = o),
                      o.refCount++,
                      null !== o && (a.pooledCacheLanes |= n),
                      (a = o)),
                    (t.memoizedState = { parent: r, cache: a }),
                    go(t),
                    Ea(0, Fa, a))
                  : (0 !== (e.lanes & n) && (yo(e, t), Eo(t, null, null, n), So()),
                    (a = e.memoizedState),
                    (o = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a),
                        Ea(0, Fa, r))
                      : ((r = o.cache), Ea(0, Fa, r), r !== a.cache && Ta(t, [Fa], n, !0))),
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
        function is(e, t, n, r, a) {
          if (((t = !!(32 & e.mode)) && (t = !1), t)) {
            if (((e.flags |= 16777216), (335544128 & a) === a))
              if (e.stateNode.complete) e.flags |= 8192;
              else {
                if (!nc()) throw ((ro = Ja), Ga);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function ss(e, t) {
          if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
          else if (((e.flags |= 16777216), !rf(t))) {
            if (!nc()) throw ((ro = Ja), Ga);
            e.flags |= 8192;
          }
        }
        function us(e, t) {
          (null !== t && (e.flags |= 4),
            16384 & e.flags && ((t = 22 !== e.tag ? _e() : 536870912), (e.lanes |= t), (Tu |= t)));
        }
        function cs(e, t) {
          if (!ca)
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
                Ca(Fa),
                Y(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ya(t)
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
              if ((K(t), (n = W.current), (a = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (ds(t), null);
                }
                ((e = U.current), ya(t) ? ha(t) : ((e = Md(a, r, n)), (t.stateNode = e), ls(t)));
              }
              return (ds(t), null);
            case 5:
              if ((K(t), (a = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && ls(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return (ds(t), null);
                }
                if (((o = U.current), ya(t))) ha(t);
                else {
                  var i = hd(W.current);
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
                  ((o[$e] = t), (o[He] = r));
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
                if (((e = W.current), ya(t))) {
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
                if (((r = ya(t)), null !== n)) {
                  if (null === e) {
                    if (!r) throw Error(l(318));
                    if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null))
                      throw Error(l(557));
                    e[$e] = t;
                  } else (va(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (ds(t), (e = !1));
                } else
                  ((n = ba()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n),
                    (e = !0));
                if (!e) return 256 & t.flags ? (jo(t), t) : (jo(t), null);
                if (128 & t.flags) throw Error(l(558));
              }
              return (ds(t), null);
            case 13:
              if (
                ((r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (((a = ya(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(l(318));
                    if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                      throw Error(l(317));
                    a[$e] = t;
                  } else (va(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (ds(t), (a = !1));
                } else
                  ((a = ba()),
                    null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a),
                    (a = !0));
                if (!a) return 256 & t.flags ? (jo(t), t) : (jo(t), null);
              }
              return (
                jo(t),
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
                    us(t, t.updateQueue),
                    ds(t),
                    null)
              );
            case 4:
              return (Y(), null === e && Zc(t.stateNode.containerInfo), ds(t), null);
            case 10:
              return (Ca(t.type), ds(t), null);
            case 19:
              if ((I(Io), null === (r = t.memoizedState))) return (ds(t), null);
              if (((a = !!(128 & t.flags)), null === (o = r.rendering)))
                if (a) cs(r, !1);
                else {
                  if (0 !== xu || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = $o(e))) {
                        for (
                          t.flags |= 128,
                            cs(r, !1),
                            e = o.updateQueue,
                            t.updateQueue = e,
                            us(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;
                        )
                          ($r(n, e), (n = n.sibling));
                        return ($(Io, (1 & Io.current) | 2), ca && ra(t, r.treeForkCount), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    ie() > Ru &&
                    ((t.flags |= 128), (a = !0), cs(r, !1), (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = $o(o))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      us(t, e),
                      cs(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !o.alternate && !ca)
                    )
                      return (ds(t), null);
                  } else
                    2 * ie() - r.renderingStartTime > Ru &&
                      536870912 !== n &&
                      ((t.flags |= 128), (a = !0), cs(r, !1), (t.lanes = 4194304));
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
                  ca && ra(t, r.treeForkCount),
                  e)
                : (ds(t), null);
            case 22:
            case 23:
              return (
                jo(t),
                Lo(),
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
                null !== e && I(Qa),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                Ca(Fa),
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
                Ca(Fa),
                Y(),
                65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 26:
            case 27:
            case 5:
              return (K(t), null);
            case 31:
              if (null !== t.memoizedState) {
                if ((jo(t), null === t.alternate)) throw Error(l(340));
                va();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 13:
              if ((jo(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(l(340));
                va();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return (I(Io), null);
            case 4:
              return (Y(), null);
            case 10:
              return (Ca(t.type), null);
            case 22:
            case 23:
              return (
                jo(t),
                Lo(),
                null !== e && I(Qa),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 24:
              return (Ca(Fa), null);
            default:
              return null;
          }
        }
        function ms(e, t) {
          switch ((la(t), t.tag)) {
            case 3:
              (Ca(Fa), Y());
              break;
            case 26:
            case 27:
            case 5:
              K(t);
              break;
            case 4:
              Y();
              break;
            case 31:
              null !== t.memoizedState && jo(t);
              break;
            case 13:
              jo(t);
              break;
            case 19:
              I(Io);
              break;
            case 10:
              Ca(t.type);
              break;
            case 22:
            case 23:
              (jo(t), Lo(), null !== e && I(Qa));
              break;
            case 24:
              Ca(Fa);
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
            xc(t, t.return, e);
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
                      u = i;
                    try {
                      u();
                    } catch (e) {
                      xc(a, s, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== o);
            }
          } catch (e) {
            xc(t, t.return, e);
          }
        }
        function ys(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Po(t, n);
            } catch (t) {
              xc(e, e.return, t);
            }
          }
        }
        function vs(e, t, n) {
          ((n.props = xi(e.type, e.memoizedProps)), (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (n) {
            xc(e, t, n);
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
            xc(e, t, n);
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
                xc(e, t, n);
              } finally {
                ((e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                xc(e, t, n);
              }
            else n.current = null;
        }
        function ks(e) {
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
            xc(e, e.return, t);
          }
        }
        function xs(e, t, n) {
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
                          o = m;
                          break;
                        case "name":
                          a = m;
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
                  return void yt(e, i, s, u, c, d, o, a);
                case "select":
                  for (o in ((m = i = s = p = null), n))
                    if (((u = n[o]), n.hasOwnProperty(o) && null != u))
                      switch (o) {
                        case "value":
                          break;
                        case "multiple":
                          m = u;
                        default:
                          r.hasOwnProperty(o) || ud(e, t, o, null, r, u);
                      }
                  for (a in r)
                    if (((o = r[a]), (u = n[a]), r.hasOwnProperty(a) && (null != o || null != u)))
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
                          o !== u && ud(e, t, a, o, r, u);
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
                          ud(e, t, s, null, r, a);
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
                          a !== o && ud(e, t, i, a, r, o);
                      }
                  return void kt(e, p, m);
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
                  if (Tt(t)) {
                    for (var y in n)
                      ((p = n[y]),
                        n.hasOwnProperty(y) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(y) &&
                          cd(e, t, y, void 0, r, p));
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
              for (var v in n)
                ((p = n[v]),
                  n.hasOwnProperty(v) &&
                    null != p &&
                    !r.hasOwnProperty(v) &&
                    ud(e, t, v, null, r, p));
              for (f in r)
                ((p = r[f]),
                  (m = n[f]),
                  !r.hasOwnProperty(f) ||
                    p === m ||
                    (null == p && null == m) ||
                    ud(e, t, f, p, r, m));
            })(r, e.type, n, t),
              (r[He] = t));
          } catch (t) {
            xc(e, e.return, t);
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
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Lt)));
          else if (
            4 !== r &&
            (27 === r && Cd(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child))
          )
            for (Cs(e, t, n), e = e.sibling; null !== e; ) (Cs(e, t, n), (e = e.sibling));
        }
        function Ps(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (4 !== r && (27 === r && Cd(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (Ps(e, t, n), e = e.sibling; null !== e; ) (Ps(e, t, n), (e = e.sibling));
        }
        function Ts(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
            (dd(t, r, n), (t[$e] = e), (t[He] = n));
          } catch (t) {
            xc(e, e.return, t);
          }
        }
        var Ns = !1,
          _s = !1,
          zs = !1,
          Ls = "function" == typeof WeakSet ? WeakSet : Set,
          Os = null;
        function Rs(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (qs(e, n), 4 & r && hs(5, n));
              break;
            case 1:
              if ((qs(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (e) {
                    xc(n, n.return, e);
                  }
                else {
                  var a = xi(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (e) {
                    xc(n, n.return, e);
                  }
                }
              (64 & r && ys(n), 512 & r && bs(n, n.return));
              break;
            case 3:
              if ((qs(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  Po(e, t);
                } catch (e) {
                  xc(n, n.return, e);
                }
              }
              break;
            case 27:
              null === t && 4 & r && Ts(n);
            case 26:
            case 5:
              (qs(e, n), null === t && 4 & r && ks(n), 512 & r && bs(n, n.return));
              break;
            case 12:
              qs(e, n);
              break;
            case 31:
              (qs(e, n), 4 & r && Is(e, n));
              break;
            case 13:
              (qs(e, n),
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
                  })(e, (n = Pc.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || Ns)) {
                ((t = (null !== t && null !== t.memoizedState) || _s), (a = Ns));
                var o = _s;
                ((Ns = r),
                  (_s = t) && !o ? Xs(e, n, !!(8772 & n.subtreeFlags)) : qs(e, n),
                  (Ns = a),
                  (_s = o));
              }
              break;
            case 30:
              break;
            default:
              qs(e, n);
          }
        }
        function As(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), As(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ye(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var Ds = null,
          Ms = !1;
        function Fs(e, t, n) {
          for (n = n.child; null !== n; ) (js(e, t, n), (n = n.sibling));
        }
        function js(e, t, n) {
          if (ye && "function" == typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ge, n);
            } catch (e) {}
          switch (n.tag) {
            case 26:
              (_s || ws(n, t),
                Fs(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              _s || ws(n, t);
              var r = Ds,
                a = Ms;
              (Cd(n.type) && ((Ds = n.stateNode), (Ms = !1)),
                Fs(e, t, n),
                Fd(n.stateNode),
                (Ds = r),
                (Ms = a));
              break;
            case 5:
              _s || ws(n, t);
            case 6:
              if (((r = Ds), (a = Ms), (Ds = null), Fs(e, t, n), (Ms = a), null !== (Ds = r)))
                if (Ms)
                  try {
                    (9 === Ds.nodeType
                      ? Ds.body
                      : "HTML" === Ds.nodeName
                        ? Ds.ownerDocument.body
                        : Ds
                    ).removeChild(n.stateNode);
                  } catch (e) {
                    xc(n, t, e);
                  }
                else
                  try {
                    Ds.removeChild(n.stateNode);
                  } catch (e) {
                    xc(n, t, e);
                  }
              break;
            case 18:
              null !== Ds &&
                (Ms
                  ? (Pd(
                      9 === (e = Ds).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      n.stateNode,
                    ),
                    Bf(e))
                  : Pd(Ds, n.stateNode));
              break;
            case 4:
              ((r = Ds),
                (a = Ms),
                (Ds = n.stateNode.containerInfo),
                (Ms = !0),
                Fs(e, t, n),
                (Ds = r),
                (Ms = a));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (gs(2, n, t), _s || gs(4, n, t), Fs(e, t, n));
              break;
            case 1:
              (_s ||
                (ws(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount && vs(n, t, r)),
                Fs(e, t, n));
              break;
            case 21:
              Fs(e, t, n);
              break;
            case 22:
              ((_s = (r = _s) || null !== n.memoizedState), Fs(e, t, n), (_s = r));
              break;
            default:
              Fs(e, t, n);
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
              xc(t, t.return, e);
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
              Bf(e);
            } catch (e) {
              xc(t, t.return, e);
            }
        }
        function Hs(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 31:
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new Ls()), t);
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Ls()), t
                );
              default:
                throw Error(l(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            if (!n.has(t)) {
              n.add(t);
              var r = Tc.bind(null, e, t);
              t.then(r, r);
            }
          });
        }
        function Bs(e, t) {
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
                      ((Ds = s.stateNode), (Ms = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Ds = s.stateNode), (Ms = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Ds = s.stateNode.containerInfo), (Ms = !0));
                    break e;
                }
                s = s.return;
              }
              if (null === Ds) throw Error(l(160));
              (js(o, i, a),
                (Ds = null),
                (Ms = !1),
                null !== (o = a.alternate) && (o.return = null),
                (a.return = null));
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
              (Bs(t, e), Ws(e), 4 & r && (gs(3, e, e.return), hs(3, e), gs(5, e, e.return)));
              break;
            case 1:
              (Bs(t, e),
                Ws(e),
                512 & r && (_s || null === n || ws(n, n.return)),
                64 & r &&
                  Ns &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var a = Us;
              if ((Bs(t, e), Ws(e), 512 & r && (_s || null === n || ws(n, n.return)), 4 & r)) {
                var o = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                        t: switch (r) {
                          case "title":
                            ((!(o = a.getElementsByTagName("title")[0]) ||
                              o[qe] ||
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
                  else e.stateNode = Kd(a, r, e.memoizedProps);
                else
                  o !== r
                    ? (null === o
                        ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n)
                        : o.count--,
                      null === r ? nf(a, e.type, e.stateNode) : Kd(a, r, e.memoizedProps))
                    : null === r && null !== e.stateNode && xs(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (Bs(t, e),
                Ws(e),
                512 & r && (_s || null === n || ws(n, n.return)),
                null !== n && 4 & r && xs(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if (
                (Bs(t, e), Ws(e), 512 & r && (_s || null === n || ws(n, n.return)), 32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  St(a, "");
                } catch (t) {
                  xc(e, e.return, t);
                }
              }
              (4 & r &&
                null != e.stateNode &&
                xs(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (zs = !0));
              break;
            case 6:
              if ((Bs(t, e), Ws(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                ((r = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = r;
                } catch (t) {
                  xc(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                ((ef = null),
                (a = Us),
                (Us = $d(t.containerInfo)),
                Bs(t, e),
                (Us = a),
                Ws(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bf(t.containerInfo);
                } catch (t) {
                  xc(e, e.return, t);
                }
              zs && ((zs = !1), Qs(e));
              break;
            case 4:
              ((r = Us), (Us = $d(e.stateNode.containerInfo)), Bs(t, e), Ws(e), (Us = r));
              break;
            case 12:
            default:
              (Bs(t, e), Ws(e));
              break;
            case 31:
            case 19:
              (Bs(t, e),
                Ws(e),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Hs(e, r)));
              break;
            case 13:
              (Bs(t, e),
                Ws(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                  (Lu = ie()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Hs(e, r)));
              break;
            case 22:
              a = null !== e.memoizedState;
              var u = null !== n && null !== n.memoizedState,
                c = Ns,
                d = _s;
              if (((Ns = c || a), (_s = d || u), Bs(t, e), (_s = d), (Ns = c), Ws(e), 8192 & r))
                e: for (
                  t = e.stateNode,
                    t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                    a && (null === n || u || Ns || _s || Ys(e)),
                    n = null,
                    t = e;
                  ;
                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      u = n = t;
                      try {
                        if (((o = u.stateNode), a))
                          "function" == typeof (i = o.style).setProperty
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
                        xc(u, u.return, e);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        u.stateNode.nodeValue = a ? "" : u.memoizedProps;
                      } catch (e) {
                        xc(u, u.return, e);
                      }
                    }
                  } else if (18 === t.tag) {
                    if (null === n) {
                      u = t;
                      try {
                        var m = u.stateNode;
                        a ? Td(m, !0) : Td(u.stateNode, !1);
                      } catch (e) {
                        xc(u, u.return, e);
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
                ((r.retryQueue = null), Hs(e, n));
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
                  var a = n.stateNode;
                  Ps(e, Es(e), a);
                  break;
                case 5:
                  var o = n.stateNode;
                  (32 & n.flags && (St(o, ""), (n.flags &= -33)), Ps(e, Es(e), o));
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
              xc(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function Qs(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              (Qs(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling));
            }
        }
        function qs(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (Rs(e, t.alternate, t), (t = t.sibling));
        }
        function Ys(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (gs(4, t, t.return), Ys(t));
                break;
              case 1:
                ws(t, t.return);
                var n = t.stateNode;
                ("function" == typeof n.componentWillUnmount && vs(t, t.return, n), Ys(t));
                break;
              case 27:
                Fd(t.stateNode);
              case 26:
              case 5:
                (ws(t, t.return), Ys(t));
                break;
              case 22:
                null === t.memoizedState && Ys(t);
                break;
              default:
                Ys(t);
            }
            e = e.sibling;
          }
        }
        function Xs(e, t, n) {
          for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
              a = e,
              o = t,
              l = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                (Xs(a, o, n), hs(4, o));
                break;
              case 1:
                if ((Xs(a, o, n), "function" == typeof (a = (r = o).stateNode).componentDidMount))
                  try {
                    a.componentDidMount();
                  } catch (e) {
                    xc(r, r.return, e);
                  }
                if (null !== (a = (r = o).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var s = a.shared.hiddenCallbacks;
                    if (null !== s)
                      for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) Co(s[a], i);
                  } catch (e) {
                    xc(r, r.return, e);
                  }
                }
                (n && 64 & l && ys(o), bs(o, o.return));
                break;
              case 27:
                Ts(o);
              case 26:
              case 5:
                (Xs(a, o, n), n && null === r && 4 & l && ks(o), bs(o, o.return));
                break;
              case 12:
                Xs(a, o, n);
                break;
              case 31:
                (Xs(a, o, n), n && 4 & l && Is(a, o));
                break;
              case 13:
                (Xs(a, o, n), n && 4 & l && $s(a, o));
                break;
              case 22:
                (null === o.memoizedState && Xs(a, o, n), bs(o, o.return));
                break;
              case 30:
                break;
              default:
                Xs(a, o, n);
            }
            t = t.sibling;
          }
        }
        function Ks(e, t) {
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
        function Gs(e, t) {
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
                  xc(t, t.return, e);
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
                    : tu(e, t)
                  : 2 & o._visibility
                    ? Zs(e, t, n, r)
                    : ((o._visibility |= 2), eu(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
                2048 & a && Ks(l, t));
              break;
            case 24:
              (Zs(e, t, n, r), 2048 & a && Gs(t.alternate, t));
          }
        }
        function eu(e, t, n, r, a) {
          for (a = a && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t; ) {
            var o = e,
              l = t,
              i = n,
              s = r,
              u = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                (eu(o, l, i, s, a), hs(8, l));
                break;
              case 23:
                break;
              case 22:
                var c = l.stateNode;
                (null !== l.memoizedState
                  ? 2 & c._visibility
                    ? eu(o, l, i, s, a)
                    : tu(o, l)
                  : ((c._visibility |= 2), eu(o, l, i, s, a)),
                  a && 2048 & u && Ks(l.alternate, l));
                break;
              case 24:
                (eu(o, l, i, s, a), a && 2048 & u && Gs(l.alternate, l));
                break;
              default:
                eu(o, l, i, s, a);
            }
            t = t.sibling;
          }
        }
        function tu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  (tu(n, r), 2048 & a && Ks(r.alternate, r));
                  break;
                case 24:
                  (tu(n, r), 2048 & a && Gs(r.alternate, r));
                  break;
                default:
                  tu(n, r);
              }
              t = t.sibling;
            }
        }
        var nu = 8192;
        function ru(e, t, n) {
          if (e.subtreeFlags & nu) for (e = e.child; null !== e; ) (au(e, t, n), (e = e.sibling));
        }
        function au(e, t, n) {
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
                        var a = Wd(r.href),
                          o = t.querySelector(Qd(a));
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
                          (r = qd(r)),
                          (a = jd.get(a)) && Zd(r, a),
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
              ru(e, t, n);
              break;
            case 3:
            case 4:
              var r = Us;
              ((Us = $d(e.stateNode.containerInfo)), ru(e, t, n), (Us = r));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = nu), (nu = 16777216), ru(e, t, n), (nu = r))
                  : ru(e, t, n));
          }
        }
        function ou(e) {
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
                ((Os = r), uu(r, e));
              }
            ou(e);
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
                ((Os = r), uu(r, e));
              }
            ou(e);
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
          for (; null !== Os; ) {
            var n = Os;
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
            if (null !== (r = n.child)) ((r.return = n), (Os = r));
            else
              e: for (n = e; null !== Os; ) {
                var a = (r = Os).sibling,
                  o = r.return;
                if ((As(r), r === n)) {
                  Os = null;
                  break e;
                }
                if (null !== a) {
                  ((a.return = o), (Os = a));
                  break e;
                }
                Os = o;
              }
          }
        }
        var cu = {
            getCacheForType: function (e) {
              var t = La(Fa),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
              return La(Fa).controller.signal;
            },
          },
          du = "function" == typeof WeakMap ? WeakMap : Map,
          fu = 0,
          pu = null,
          mu = null,
          hu = 0,
          gu = 0,
          yu = null,
          vu = !1,
          bu = !1,
          wu = !1,
          ku = 0,
          xu = 0,
          Su = 0,
          Eu = 0,
          Cu = 0,
          Pu = 0,
          Tu = 0,
          Nu = null,
          _u = null,
          zu = !1,
          Lu = 0,
          Ou = 0,
          Ru = 1 / 0,
          Au = null,
          Du = null,
          Mu = 0,
          Fu = null,
          ju = null,
          Iu = 0,
          $u = 0,
          Hu = null,
          Bu = null,
          Uu = 0,
          Vu = null;
        function Wu() {
          return 2 & fu && 0 !== hu ? hu & -hu : null !== R.T ? Hc() : Fe();
        }
        function Qu() {
          if (0 === Pu)
            if (536870912 & hu && !ca) Pu = 536870912;
            else {
              var e = Se;
              (!(3932160 & (Se <<= 1)) && (Se = 262144), (Pu = e));
            }
          return (null !== (e = Oo.current) && (e.flags |= 32), Pu);
        }
        function qu(e, t, n) {
          (((e !== pu || (2 !== gu && 9 !== gu)) && null === e.cancelPendingCommit) ||
            (ec(e, 0), Gu(e, hu, Pu, !1)),
            Le(e, n),
            (2 & fu && e === pu) ||
              (e === pu && (!(2 & fu) && (Eu |= n), 4 === xu && Gu(e, hu, Pu, !1)), Ac(e)));
        }
        function Yu(e, t, n) {
          if (6 & fu) throw Error(l(327));
          for (
            var r = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || Te(e, t),
              a = r
                ? (function (e, t) {
                    var n = fu;
                    fu |= 2;
                    var r = rc(),
                      a = ac();
                    pu !== e || hu !== t
                      ? ((Au = null), (Ru = ie() + 500), ec(e, t))
                      : (bu = Te(e, t));
                    e: for (;;)
                      try {
                        if (0 !== gu && null !== mu) {
                          t = mu;
                          var o = yu;
                          t: switch (gu) {
                            case 1:
                              ((gu = 0), (yu = null), dc(e, t, o, 1));
                              break;
                            case 2:
                            case 9:
                              if (eo(o)) {
                                ((gu = 0), (yu = null), cc(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== gu && 9 !== gu) || pu !== e || (gu = 7), Ac(e));
                              }),
                                o.then(t, t));
                              break e;
                            case 3:
                              gu = 7;
                              break e;
                            case 4:
                              gu = 5;
                              break e;
                            case 7:
                              eo(o)
                                ? ((gu = 0), (yu = null), cc(t))
                                : ((gu = 0), (yu = null), dc(e, t, o, 7));
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
                                    ((gu = 0), (yu = null));
                                    var u = s.sibling;
                                    if (null !== u) mu = u;
                                    else {
                                      var c = s.return;
                                      null !== c ? ((mu = c), fc(c)) : (mu = null);
                                    }
                                    break t;
                                  }
                              }
                              ((gu = 0), (yu = null), dc(e, t, o, 5));
                              break;
                            case 6:
                              ((gu = 0), (yu = null), dc(e, t, o, 6));
                              break;
                            case 8:
                              (Ju(), (xu = 6));
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
                      (Sa = xa = null),
                      (R.H = r),
                      (R.A = a),
                      (fu = n),
                      null !== mu ? 0 : ((pu = null), (hu = 0), _r(), xu)
                    );
                  })(e, t)
                : lc(e, t, !0),
              o = r;
            ;
          ) {
            if (0 === a) {
              bu && !r && Gu(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !o || Ku(n))) {
              if (2 === a) {
                if (((o = t), e.errorRecoveryDisabledLanes & o)) var i = 0;
                else i = 0 != (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var s = e;
                    a = Nu;
                    var u = s.current.memoizedState.isDehydrated;
                    if ((u && (ec(s, i).flags |= 256), 2 !== (i = lc(s, i, !1)))) {
                      if (wu && !u) {
                        ((s.errorRecoveryDisabledLanes |= o), (Eu |= o), (a = 4));
                        break e;
                      }
                      ((o = _u),
                        (_u = a),
                        null !== o && (null === _u ? (_u = o) : _u.push.apply(_u, o)));
                    }
                    a = i;
                  }
                  if (((o = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                (ec(e, 0), Gu(e, t, 0, !0));
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
                    Gu(r, t, Pu, !vu);
                    break e;
                  case 2:
                    _u = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(l(329));
                }
                if ((62914560 & t) === t && 10 < (a = Lu + 300 - ie())) {
                  if ((Gu(r, t, Pu, !vu), 0 !== Pe(r, 0, !0))) break e;
                  ((Iu = t),
                    (r.timeoutHandle = wd(
                      Xu.bind(null, r, n, _u, Au, zu, t, Pu, Eu, Tu, vu, o, "Throttled", -0, 0),
                      a,
                    )));
                } else Xu(r, n, _u, Au, zu, t, Pu, Eu, Tu, vu, o, null, -0, 0);
              }
              break;
            }
            ((a = lc(e, t, !1)), (o = !1));
          }
          Ac(e);
        }
        function Xu(e, t, n, r, a, o, l, i, s, u, c, d, f, p) {
          if (((e.timeoutHandle = -1), 8192 & (d = t.subtreeFlags) || !(16785408 & ~d))) {
            au(
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
                unsuspend: Lt,
              }),
            );
            var m = (62914560 & o) === o ? Lu - ie() : (4194048 & o) === o ? Ou - ie() : 0;
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
                                        u = s.startTime;
                                      if (u > i) break;
                                      var c = s.transferSize,
                                        d = s.initiatorType;
                                      c &&
                                        fd(d) &&
                                        (l +=
                                          c * ((s = s.responseEnd) < i ? 1 : (i - u) / (s - u)));
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
                (Iu = o),
                (e.cancelPendingCommit = m(
                  mc.bind(null, e, t, o, n, r, a, l, i, s, c, d, null, f, p),
                )),
                void Gu(e, o, l, !u)
              );
          }
          mc(e, t, o, n, r, a, l, i, s);
        }
        function Ku(e) {
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
                  if (!Gn(o(), a)) return !1;
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
        function Gu(e, t, n, r) {
          ((t &= ~Cu),
            (t &= ~Eu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes));
          for (var a = t; 0 < a; ) {
            var o = 31 - be(a),
              l = 1 << o;
            ((r[o] = -1), (a &= ~l));
          }
          0 !== n && Oe(e, n, t);
        }
        function Zu() {
          return !!(6 & fu) || (Dc(0, !1), !1);
        }
        function Ju() {
          if (null !== mu) {
            if (0 === gu) var e = mu.return;
            else ((Sa = xa = null), ll((e = mu)), (lo = null), (io = 0), (e = mu));
            for (; null !== e; ) (ms(e.alternate, e), (e = e.return));
            mu = null;
          }
        }
        function ec(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), kd(n)),
            null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
            (Iu = 0),
            Ju(),
            (pu = e),
            (mu = n = Ir(e.current, null)),
            (hu = t),
            (gu = 0),
            (yu = null),
            (vu = !1),
            (bu = Te(e, t)),
            (wu = !1),
            (Tu = Pu = Cu = Eu = Su = xu = 0),
            (_u = Nu = null),
            (zu = !1),
            8 & t && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - be(r),
                o = 1 << a;
              ((t |= e[a]), (r &= ~o));
            }
          return ((ku = t), _r(), n);
        }
        function tc(e, t) {
          ((Bo = null),
            (R.H = mi),
            t === Ka || t === Za
              ? ((t = ao()), (gu = 3))
              : t === Ga
                ? ((t = ao()), (gu = 4))
                : (gu =
                    t === Li
                      ? 8
                      : null !== t && "object" == typeof t && "function" == typeof t.then
                        ? 6
                        : 1),
            (yu = t),
            null === mu && ((xu = 1), Pi(e, qr(t, e.current))));
        }
        function nc() {
          var e = Oo.current;
          return (
            null === e ||
            ((4194048 & hu) === hu
              ? null === Ro
              : !!((62914560 & hu) === hu || 536870912 & hu) && e === Ro)
          );
        }
        function rc() {
          var e = R.H;
          return ((R.H = mi), null === e ? mi : e);
        }
        function ac() {
          var e = R.A;
          return ((R.A = cu), e);
        }
        function oc() {
          ((xu = 4),
            vu || ((4194048 & hu) !== hu && null !== Oo.current) || (bu = !0),
            (!(134217727 & Su) && !(134217727 & Eu)) || null === pu || Gu(pu, hu, Pu, !1));
        }
        function lc(e, t, n) {
          var r = fu;
          fu |= 2;
          var a = rc(),
            o = ac();
          ((pu === e && hu === t) || ((Au = null), ec(e, t)), (t = !1));
          var l = xu;
          e: for (;;)
            try {
              if (0 !== gu && null !== mu) {
                var i = mu,
                  s = yu;
                switch (gu) {
                  case 8:
                    (Ju(), (l = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === Oo.current && (t = !0);
                    var u = gu;
                    if (((gu = 0), (yu = null), dc(e, i, s, u), n && bu)) {
                      l = 0;
                      break e;
                    }
                    break;
                  default:
                    ((u = gu), (gu = 0), (yu = null), dc(e, i, s, u));
                }
              }
              (ic(), (l = xu));
              break;
            } catch (t) {
              tc(e, t);
            }
          return (
            t && e.shellSuspendCounter++,
            (Sa = xa = null),
            (fu = r),
            (R.H = a),
            (R.A = o),
            null === mu && ((pu = null), (hu = 0), _r()),
            l
          );
        }
        function ic() {
          for (; null !== mu; ) uc(mu);
        }
        function sc() {
          for (; null !== mu && !oe(); ) uc(mu);
        }
        function uc(e) {
          var t = os(e.alternate, e, ku);
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
              (ms(n, t), (t = os(n, (t = mu = $r(t, ku)), ku)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? fc(e) : (mu = t));
        }
        function dc(e, t, n, r) {
          ((Sa = xa = null), ll(t), (lo = null), (io = 0));
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r && "object" == typeof r && "function" == typeof r.then)
                ) {
                  if ((null !== (t = n.alternate) && Na(t, n, a, !0), null !== (n = Oo.current))) {
                    switch (n.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Ro ? oc() : null === n.alternate && 0 === xu && (xu = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === Ja
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              Sc(e, r, a)),
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
                              Sc(e, r, a)),
                          !1
                        );
                    }
                    throw Error(l(435, n.tag));
                  }
                  return (Sc(e, r, a), oc(), !1);
                }
                if (ca)
                  return (
                    null !== (t = Oo.current)
                      ? (!(65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== pa && wa(qr((e = Error(l(422), { cause: r })), n)))
                      : (r !== pa && wa(qr((t = Error(l(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = qr(r, n)),
                        ko(e, (a = Ni(e.stateNode, r, a))),
                        4 !== xu && (xu = 2)),
                    !1
                  );
                var o = Error(l(520), { cause: r });
                if (
                  ((o = qr(o, n)),
                  null === Nu ? (Nu = [o]) : Nu.push(o),
                  4 !== xu && (xu = 2),
                  null === t)
                )
                  return !0;
                ((r = qr(r, n)), (n = t));
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        ko(n, (e = Ni(n.stateNode, r, e))),
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
                              (null !== Du && Du.has(o))))
                        ))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          zi((a = _i(a)), e, n, r),
                          ko(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, hu)
            )
              return ((xu = 1), Pi(e, qr(n, e.current)), void (mu = null));
          } catch (t) {
            if (null !== a) throw ((mu = a), t);
            return ((xu = 1), Pi(e, qr(n, e.current)), void (mu = null));
          }
          32768 & t.flags
            ? (ca || 1 === r
                ? (e = !0)
                : bu || 536870912 & hu
                  ? (e = !1)
                  : ((vu = e = !0),
                    (2 === r || 9 === r || 3 === r || 6 === r) &&
                      null !== (r = Oo.current) &&
                      13 === r.tag &&
                      (r.flags |= 16384)),
              pc(t, e))
            : fc(t);
        }
        function fc(e) {
          var t = e;
          do {
            if (32768 & t.flags) return void pc(t, vu);
            e = t.return;
            var n = fs(t.alternate, t, ku);
            if (null !== n) return void (mu = n);
            if (null !== (t = t.sibling)) return void (mu = t);
            mu = t = e;
          } while (null !== t);
          0 === xu && (xu = 5);
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
          ((xu = 6), (mu = null));
        }
        function mc(e, t, n, r, a, o, i, s, u) {
          e.cancelPendingCommit = null;
          do {
            bc();
          } while (0 !== Mu);
          if (6 & fu) throw Error(l(327));
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
                (0 !== r && Oe(e, r, 0),
                  0 !== o && 0 === a && 0 !== e.tag && (e.suspendedLanes |= o & ~(l & ~t)));
              })(e, n, (o |= Nr), i, s, u),
              e === pu && ((mu = pu = null), (hu = 0)),
              (ju = t),
              (Fu = e),
              (Iu = n),
              ($u = o),
              (Hu = a),
              (Bu = r),
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
              ((r = R.T), (R.T = null), (a = A.p), (A.p = 2), (i = fu), (fu |= 4));
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (pd = yf), rr((e = nr(e))))) {
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
                            u = -1,
                            c = 0,
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var m;
                              f !== n || (0 !== a && 3 !== f.nodeType) || (s = i + a),
                                f !== o || (0 !== r && 3 !== f.nodeType) || (u = i + r),
                                3 === f.nodeType && (i += f.nodeValue.length),
                                null !== (m = f.firstChild);
                            )
                              ((p = f), (f = m));
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (p === n && ++c === a && (s = i),
                                p === o && ++d === r && (u = i),
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
                  for (md = { focusedElem: e, selectionRange: n }, yf = !1, Os = t; null !== Os; )
                    if (((e = (t = Os).child), 1028 & t.subtreeFlags && null !== e))
                      ((e.return = t), (Os = e));
                    else
                      for (; null !== Os; ) {
                        switch (((o = (t = Os).alternate), (e = t.flags), t.tag)) {
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
                                var h = xi(n.type, a);
                                ((e = r.getSnapshotBeforeUpdate(h, o)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (e) {
                                xc(n, n.return, e);
                              }
                            }
                            break;
                          case 3:
                            if (1024 & e)
                              if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) Nd(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    Nd(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (1024 & e) throw Error(l(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (Os = e));
                          break;
                        }
                        Os = t.return;
                      }
                })(e, t);
              } finally {
                ((fu = i), (A.p = a), (R.T = r));
              }
            }
            ((Mu = 1), hc(), gc(), yc());
          }
        }
        function hc() {
          if (1 === Mu) {
            Mu = 0;
            var e = Fu,
              t = ju,
              n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
              ((n = R.T), (R.T = null));
              var r = A.p;
              A.p = 2;
              var a = fu;
              fu |= 4;
              try {
                Vs(t, e);
                var o = md,
                  l = nr(e.containerInfo),
                  i = o.focusedElem,
                  s = o.selectionRange;
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
                        var y = er(i, h),
                          v = er(i, g);
                        if (
                          y &&
                          v &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== y.node ||
                            p.anchorOffset !== y.offset ||
                            p.focusNode !== v.node ||
                            p.focusOffset !== v.offset)
                        ) {
                          var b = d.createRange();
                          (b.setStart(y.node, y.offset),
                            p.removeAllRanges(),
                            h > g
                              ? (p.addRange(b), p.extend(v.node, v.offset))
                              : (b.setEnd(v.node, v.offset), p.addRange(b)));
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
                ((yf = !!pd), (md = pd = null));
              } finally {
                ((fu = a), (A.p = r), (R.T = n));
              }
            }
            ((e.current = t), (Mu = 2));
          }
        }
        function gc() {
          if (2 === Mu) {
            Mu = 0;
            var e = Fu,
              t = ju,
              n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
              ((n = R.T), (R.T = null));
              var r = A.p;
              A.p = 2;
              var a = fu;
              fu |= 4;
              try {
                Rs(e, t.alternate, t);
              } finally {
                ((fu = a), (A.p = r), (R.T = n));
              }
            }
            Mu = 3;
          }
        }
        function yc() {
          if (4 === Mu || 3 === Mu) {
            ((Mu = 0), le());
            var e = Fu,
              t = ju,
              n = Iu,
              r = Bu;
            10256 & t.subtreeFlags || 10256 & t.flags
              ? (Mu = 5)
              : ((Mu = 0), (ju = Fu = null), vc(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (
              (0 === a && (Du = null),
              Me(n),
              (t = t.stateNode),
              ye && "function" == typeof ye.onCommitFiberRoot)
            )
              try {
                ye.onCommitFiberRoot(ge, t, void 0, !(128 & ~t.current.flags));
              } catch (e) {}
            if (null !== r) {
              ((t = R.T), (a = A.p), (A.p = 2), (R.T = null));
              try {
                for (var o = e.onRecoverableError, l = 0; l < r.length; l++) {
                  var i = r[l];
                  o(i.value, { componentStack: i.stack });
                }
              } finally {
                ((R.T = t), (A.p = a));
              }
            }
            (3 & Iu && bc(),
              Ac(e),
              (a = e.pendingLanes),
              261930 & n && 42 & a ? (e === Vu ? Uu++ : ((Uu = 0), (Vu = e))) : (Uu = 0),
              Dc(0, !1));
          }
        }
        function vc(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ia(t));
        }
        function bc() {
          return (hc(), gc(), yc(), wc());
        }
        function wc() {
          if (5 !== Mu) return !1;
          var e = Fu,
            t = $u;
          $u = 0;
          var n = Me(Iu),
            r = R.T,
            a = A.p;
          try {
            ((A.p = 32 > n ? 32 : n), (R.T = null), (n = Hu), (Hu = null));
            var o = Fu,
              i = Iu;
            if (((Mu = 0), (ju = Fu = null), (Iu = 0), 6 & fu)) throw Error(l(331));
            var s = fu;
            if (
              ((fu |= 4),
              iu(o.current),
              Js(o, o.current, i, n),
              (fu = s),
              Dc(0, !1),
              ye && "function" == typeof ye.onPostCommitFiberRoot)
            )
              try {
                ye.onPostCommitFiberRoot(ge, o);
              } catch (e) {}
            return !0;
          } finally {
            ((A.p = a), (R.T = r), vc(e, t));
          }
        }
        function kc(e, t, n) {
          ((t = qr(n, t)),
            null !== (e = bo(e, (t = Ni(e.stateNode, t, 2)), 2)) && (Le(e, 2), Ac(e)));
        }
        function xc(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch && (null === Du || !Du.has(r)))
                ) {
                  ((e = qr(n, e)),
                    null !== (r = bo(t, (n = _i(2)), 2)) && (zi(n, r, t, e), Le(r, 2), Ac(r)));
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
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || ((wu = !0), a.add(n), (e = Ec.bind(null, e, t, n)), t.then(e, e));
        }
        function Ec(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            pu === e &&
              (hu & n) === n &&
              (4 === xu || (3 === xu && (62914560 & hu) === hu && 300 > ie() - Lu)
                ? !(2 & fu) && ec(e, 0)
                : (Cu |= n),
              Tu === hu && (Tu = 0)),
            Ac(e));
        }
        function Cc(e, t) {
          (0 === t && (t = _e()), null !== (e = Or(e, t)) && (Le(e, t), Ac(e)));
        }
        function Pc(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), Cc(e, n));
        }
        function Tc(e, t) {
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
          (null !== r && r.delete(t), Cc(e, n));
        }
        var Nc = null,
          _c = null,
          zc = !1,
          Lc = !1,
          Oc = !1,
          Rc = 0;
        function Ac(e) {
          (e !== _c && null === e.next && (null === _c ? (Nc = _c = e) : (_c = _c.next = e)),
            (Lc = !0),
            zc ||
              ((zc = !0),
              Sd(function () {
                6 & fu ? re(ue, Mc) : Fc();
              })));
        }
        function Dc(e, t) {
          if (!Oc && Lc) {
            Oc = !0;
            do {
              for (var n = !1, r = Nc; null !== r; ) {
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
                    0 !== o && ((n = !0), $c(r, o));
                  } else
                    ((o = hu),
                      !(
                        3 &
                        (o = Pe(
                          r,
                          r === pu ? o : 0,
                          null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                        ))
                      ) ||
                        Te(r, o) ||
                        ((n = !0), $c(r, o)));
                r = r.next;
              }
            } while (n);
            Oc = !1;
          }
        }
        function Mc() {
          Fc();
        }
        function Fc() {
          Lc = zc = !1;
          var e,
            t = 0;
          0 !== Rc &&
            ((e = window.event) && "popstate" === e.type
              ? e !== bd && ((bd = e), 1)
              : ((bd = null), 0)) &&
            (t = Rc);
          for (var n = ie(), r = null, a = Nc; null !== a; ) {
            var o = a.next,
              l = jc(a, n);
            (0 === l
              ? ((a.next = null), null === r ? (Nc = o) : (r.next = o), null === o && (_c = r))
              : ((r = a), (0 !== t || 3 & l) && (Lc = !0)),
              (a = o));
          }
          ((0 !== Mu && 5 !== Mu) || Dc(t, !1), 0 !== Rc && (Rc = 0));
        }
        function jc(e, t) {
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
              ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = Ne(i, t))
              : s <= t && (e.expiredLanes |= i),
              (o &= ~i));
          }
          if (
            ((n = hu),
            (n = Pe(
              e,
              e === (t = pu) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            )),
            (r = e.callbackNode),
            0 === n || (e === t && (2 === gu || 9 === gu)) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && ae(r), (e.callbackNode = null), (e.callbackPriority = 0)
            );
          if (!(3 & n) || Te(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && ae(r), Me(n))) {
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
              (r = Ic.bind(null, e)),
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
        function Ic(e, t) {
          if (0 !== Mu && 5 !== Mu)
            return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (bc() && e.callbackNode !== n) return null;
          var r = hu;
          return 0 ===
            (r = Pe(e, e === pu ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
            ? null
            : (Yu(e, r, t),
              jc(e, ie()),
              null != e.callbackNode && e.callbackNode === n ? Ic.bind(null, e) : null);
        }
        function $c(e, t) {
          if (bc()) return null;
          Yu(e, t, !0);
        }
        function Hc() {
          if (0 === Rc) {
            var e = Ba;
            (0 === e && ((e = xe), !(261888 & (xe <<= 1)) && (xe = 256)), (Rc = e));
          }
          return Rc;
        }
        function Bc(e) {
          return null == e || "symbol" == typeof e || "boolean" == typeof e
            ? null
            : "function" == typeof e
              ? e
              : zt("" + e);
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
          Er(yr, "onAnimationStart"),
          Er("dblclick", "onDoubleClick"),
          Er("focusin", "onFocus"),
          Er("focusout", "onBlur"),
          Er(vr, "onTransitionRun"),
          Er(br, "onTransitionStart"),
          Er(wr, "onTransitionCancel"),
          Er(kr, "onTransitionEnd"),
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
        var Qc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          qc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qc),
          );
        function Yc(e, t) {
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
                    u = i.currentTarget;
                  if (((i = i.listener), s !== o && a.isPropagationStopped())) break e;
                  ((o = i), (a.currentTarget = u));
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
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  ((o = i), (a.currentTarget = u));
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
        function Xc(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Jc(t, e, 2, !1), n.add(r));
        }
        function Kc(e, t, n) {
          var r = 0;
          (t && (r |= 4), Jc(n, e, r, t));
        }
        var Gc = "_reactListening" + Math.random().toString(36).slice(2);
        function Zc(e) {
          if (!e[Gc]) {
            ((e[Gc] = !0),
              et.forEach(function (t) {
                "selectionchange" !== t && (qc.has(t) || Kc(t, !1, e), Kc(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Gc] || ((t[Gc] = !0), Kc("selectionchange", !1, t));
          }
        }
        function Jc(e, t, n, r) {
          switch (Ef(t)) {
            case 2:
              var a = vf;
              break;
            case 8:
              a = bf;
              break;
            default:
              a = wf;
          }
          ((n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ht || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
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
                    var u = l.tag;
                    if ((3 === u || 4 === u) && l.stateNode.containerInfo === a) return;
                    l = l.return;
                  }
                for (; null !== s; ) {
                  if (null === (l = Xe(s))) return;
                  if (5 === (u = l.tag) || 6 === u || 26 === u || 27 === u) {
                    r = o = l;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          jt(function () {
            var r = o,
              a = Rt(n),
              l = [];
            e: {
              var s = xr.get(e);
              if (void 0 !== s) {
                var u = tn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === qt(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = yn;
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
                    u = on;
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
                  case yr:
                    u = un;
                    break;
                  case kr:
                    u = wn;
                    break;
                  case "scroll":
                  case "scrollend":
                    u = rn;
                    break;
                  case "wheel":
                    u = kn;
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
                    u = vn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    u = xn;
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
                0 < d.length && ((s = new u(s, c, null, n, a)), l.push({ event: s, listeners: d }));
              }
            }
            if (!(7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === Ot ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!Xe(c) && !c[Be])) &&
                  (u || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                        ? s.defaultView || s.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !== (c = (c = n.relatedTarget || n.toElement) ? Xe(c) : null) &&
                        ((f = i(c)), (d = c.tag), c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((d = on),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = vn), (g = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
                  (f = null == u ? s : Ge(u)),
                  (m = null == c ? s : Ge(c)),
                  ((s = new d(g, h + "leave", u, n, a)).target = f),
                  (s.relatedTarget = m),
                  (g = null),
                  Xe(a) === r &&
                    (((d = new d(p, h + "enter", c, n, a)).target = m),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  u && c)
                )
                  e: {
                    for (d = rd, h = c, m = 0, g = p = u; g; g = d(g)) m++;
                    g = 0;
                    for (var y = h; y; y = d(y)) g++;
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
                (null !== u && ad(l, s, u, d, !1), null !== c && null !== f && ad(l, f, c, d, !0));
              }
              if (
                "select" === (u = (s = r ? Ge(r) : window).nodeName && s.nodeName.toLowerCase()) ||
                ("input" === u && "file" === s.type)
              )
                var v = $n;
              else if (An(s))
                if (Hn) v = Kn;
                else {
                  v = Yn;
                  var b = qn;
                }
              else
                !(u = s.nodeName) ||
                "input" !== u.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && Tt(r.elementType) && (v = $n)
                  : (v = Xn);
              switch (
                (v && (v = v(e, r))
                  ? Dn(l, v, n, a)
                  : (b && b(e, s, r),
                    "focusout" === e &&
                      r &&
                      "number" === s.type &&
                      null != r.memoizedProps.value &&
                      bt(s, "number", s.value)),
                (b = r ? Ge(r) : window),
                e)
              ) {
                case "focusin":
                  (An(b) || "true" === b.contentEditable) && ((or = b), (lr = r), (ir = null));
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
                  ((sr = !1), ur(l, n, a));
                  break;
                case "selectionchange":
                  if (ar) break;
                case "keydown":
                case "keyup":
                  ur(l, n, a);
              }
              var w;
              if (En)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var k = "onCompositionStart";
                      break e;
                    case "compositionend":
                      k = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      k = "onCompositionUpdate";
                      break e;
                  }
                  k = void 0;
                }
              else
                On
                  ? zn(e, n) && (k = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (k = "onCompositionStart");
              (k &&
                (Tn &&
                  "ko" !== n.locale &&
                  (On || "onCompositionStart" !== k
                    ? "onCompositionEnd" === k && On && (w = Qt())
                    : ((Vt = "value" in (Ut = a) ? Ut.value : Ut.textContent), (On = !0))),
                0 < (b = nd(r, k)).length &&
                  ((k = new dn(k, e, null, n, a)),
                  l.push({ event: k, listeners: b }),
                  (w || null !== (w = Ln(n))) && (k.data = w))),
                (w = Pn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Ln(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((_n = !0), Nn);
                        case "textInput":
                          return (e = t.data) === Nn && _n ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (On)
                        return "compositionend" === e || (!En && zn(e, t))
                          ? ((e = Qt()), (Wt = Vt = Ut = null), (On = !1), e)
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
                          return Tn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (k = nd(r, "onBeforeInput")).length &&
                  ((b = new dn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: b, listeners: k }),
                  (b.data = w)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var o = Bc((a[He] || null).action),
                      l = r.submitter;
                    l &&
                      null !==
                        (t = (t = l[He] || null)
                          ? Bc(t.formAction)
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
                              if (0 !== Rc) {
                                var e = l ? Uc(a, l) : new FormData(a);
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
                                (e = l ? Uc(a, l) : new FormData(a)),
                                ei(n, { pending: !0, data: e, method: a.method, action: o }, o, e));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(l, e, r, n, a));
            }
            Yc(l, t);
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
              u = i.stateNode;
            if (((i = i.tag), null !== s && s === r)) break;
            ((5 !== i && 26 !== i && 27 !== i) ||
              null === u ||
              ((s = u),
              a
                ? null != (u = It(n, o)) && l.unshift(td(n, u, s))
                : a || (null != (u = It(n, o)) && l.push(td(n, u, s)))),
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
        function ud(e, t, n, r, a, o) {
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
              Pt(e, r, o);
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
                    ? ("input" !== t && ud(e, t, "name", a.name, a, null),
                      ud(e, t, "formEncType", a.formEncType, a, null),
                      ud(e, t, "formMethod", a.formMethod, a, null),
                      ud(e, t, "formTarget", a.formTarget, a, null))
                    : (ud(e, t, "encType", a.encType, a, null),
                      ud(e, t, "method", a.method, a, null),
                      ud(e, t, "target", a.target, a, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = zt("" + r)), e.setAttribute(n, r));
              break;
            case "onClick":
              null != r && (e.onclick = Lt);
              break;
            case "onScroll":
              null != r && Xc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Xc("scrollend", e);
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
              (Xc("beforetoggle", e), Xc("toggle", e), it(e, "popover", r));
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
                it(e, (n = Nt.get(n) || n), r);
          }
        }
        function cd(e, t, n, r, a, o) {
          switch (n) {
            case "style":
              Pt(e, r, o);
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
              null != r && Xc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Xc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Lt);
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
                "function" == typeof (o = null != (o = e[He] || null) ? o[n] : null) &&
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
              (Xc("error", e), Xc("load", e));
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
                        ud(e, t, r, i, n, null);
                    }
                }
              return (
                o && ud(e, t, "srcSet", n.srcSet, n, null),
                void (a && ud(e, t, "src", n.src, n, null))
              );
            case "input":
              Xc("invalid", e);
              var s = (r = i = o = null),
                u = null,
                c = null;
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
                        ud(e, t, a, d, n, null);
                    }
                }
              return void vt(e, r, s, u, c, i, o, !1);
            case "select":
              for (o in (Xc("invalid", e), (a = i = r = null), n))
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
                      ud(e, t, o, s, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!a),
                void (null != t ? wt(e, !!a, t, !1) : null != n && wt(e, !!a, n, !0))
              );
            case "textarea":
              for (i in (Xc("invalid", e), (r = o = a = null), n))
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
                      ud(e, t, i, s, n, null);
                  }
              return void xt(e, a, o, r);
            case "option":
              for (u in n)
                n.hasOwnProperty(u) &&
                  null != (a = n[u]) &&
                  ("selected" === u
                    ? (e.selected = a && "function" != typeof a && "symbol" != typeof a)
                    : ud(e, t, u, a, n, null));
              return;
            case "dialog":
              (Xc("beforetoggle", e), Xc("toggle", e), Xc("cancel", e), Xc("close", e));
              break;
            case "iframe":
            case "object":
              Xc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Qc.length; a++) Xc(Qc[a], e);
              break;
            case "image":
              (Xc("error", e), Xc("load", e));
              break;
            case "details":
              Xc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (Xc("error", e), Xc("load", e));
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
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(l(137, t));
                    default:
                      ud(e, t, c, a, n, null);
                  }
              return;
            default:
              if (Tt(t)) {
                for (d in n)
                  n.hasOwnProperty(d) && void 0 !== (a = n[d]) && cd(e, t, d, a, n, void 0);
                return;
              }
          }
          for (s in n) n.hasOwnProperty(s) && null != (a = n[s]) && ud(e, t, s, a, n, null);
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
        function yd(e, t) {
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
        function vd(e, t) {
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
          kd = "function" == typeof clearTimeout ? clearTimeout : void 0,
          xd = "function" == typeof Promise ? Promise : void 0,
          Sd =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== xd
                ? function (e) {
                    return xd.resolve(null).then(e).catch(Ed);
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
        function Pd(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data) || "/&" === n) {
                if (0 === r) return (e.removeChild(a), void Bf(t));
                r--;
              } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
              else if ("html" === n) Fd(e.ownerDocument.documentElement);
              else if ("head" === n) {
                Fd((n = e.ownerDocument.head));
                for (var o = n.firstChild; o; ) {
                  var l = o.nextSibling,
                    i = o.nodeName;
                  (o[qe] ||
                    "SCRIPT" === i ||
                    "STYLE" === i ||
                    ("LINK" === i && "stylesheet" === o.rel.toLowerCase()) ||
                    n.removeChild(o),
                    (o = l));
                }
              } else "body" === n && Fd(e.ownerDocument.body);
            n = a;
          } while (n);
          Bf(t);
        }
        function Td(e, t) {
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
        function Nd(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (Nd(n), Ye(n));
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
        function _d(e, t) {
          for (; 8 !== e.nodeType; ) {
            if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t)
              return null;
            if (null === (e = Od(e.nextSibling))) return null;
          }
          return e;
        }
        function zd(e) {
          return "$?" === e.data || "$~" === e.data;
        }
        function Ld(e) {
          return "$!" === e.data || ("$?" === e.data && "loading" !== e.ownerDocument.readyState);
        }
        function Od(e) {
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
        function Ad(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n || "/&" === n) {
                if (0 === t) return Od(e.nextSibling);
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n) || t++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function Dd(e) {
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
        function Md(e, t, n) {
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
        function Fd(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Ye(e);
        }
        var jd = new Map(),
          Id = new Set();
        function $d(e) {
          return "function" == typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var Hd = A.d;
        A.d = {
          f: function () {
            var e = Hd.f(),
              t = Zu();
            return e || t;
          },
          r: function (e) {
            var t = Ke(e);
            null !== t && 5 === t.tag && "form" === t.type ? ni(t) : Hd.r(e);
          },
          D: function (e) {
            (Hd.D(e), Ud("dns-prefetch", e, null));
          },
          C: function (e, t) {
            (Hd.C(e, t), Ud("preconnect", e, t));
          },
          L: function (e, t, n) {
            Hd.L(e, t, n);
            var r = Bd;
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
                  o = Wd(e);
                  break;
                case "script":
                  o = Yd(e);
              }
              jd.has(o) ||
                ((e = f(
                  { rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t },
                  n,
                )),
                jd.set(o, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(Qd(o))) ||
                  ("script" === t && r.querySelector(Xd(o))) ||
                  (dd((t = r.createElement("link")), "link", e), Je(t), r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Hd.m(e, t);
            var n = Bd;
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
                  o = Yd(e);
              }
              if (
                !jd.has(o) &&
                ((e = f({ rel: "modulepreload", href: e }, t)),
                jd.set(o, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Xd(o))) return;
                }
                (dd((r = n.createElement("link")), "link", e), Je(r), n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            Hd.X(e, t);
            var n = Bd;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                a = Yd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Xd(a))) ||
                  ((e = f({ src: e, async: !0 }, t)),
                  (t = jd.get(a)) && Jd(e, t),
                  Je((o = n.createElement("script"))),
                  dd(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
          S: function (e, t, n) {
            Hd.S(e, t, n);
            var r = Bd;
            if (r && e) {
              var a = Ze(r).hoistableStyles,
                o = Wd(e);
              t = t || "default";
              var l = a.get(o);
              if (!l) {
                var i = { loading: 0, preload: null };
                if ((l = r.querySelector(Qd(o)))) i.loading = 5;
                else {
                  ((e = f({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
                    (n = jd.get(o)) && Zd(e, n));
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
                    Gd(l, t, r));
                }
                ((l = { type: "stylesheet", instance: l, count: 1, state: i }), a.set(o, l));
              }
            }
          },
          M: function (e, t) {
            Hd.M(e, t);
            var n = Bd;
            if (n && e) {
              var r = Ze(n).hoistableScripts,
                a = Yd(e),
                o = r.get(a);
              o ||
                ((o = n.querySelector(Xd(a))) ||
                  ((e = f({ src: e, async: !0, type: "module" }, t)),
                  (t = jd.get(a)) && Jd(e, t),
                  Je((o = n.createElement("script"))),
                  dd(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(a, o));
            }
          },
        };
        var Bd = "undefined" == typeof document ? null : document;
        function Ud(e, t, n) {
          var r = Bd;
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
        function Vd(e, t, n, r) {
          var a,
            o,
            i,
            s,
            u = (u = W.current) ? $d(u) : null;
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
                    (c = u.querySelector(Qd(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    jd.has(e) ||
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
                      jd.set(e, n),
                      c ||
                        ((a = u),
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
                  ? ((t = Yd(n)),
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
        function Qd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function qd(e) {
          return f({}, e, { "data-precedence": e.precedence, precedence: null });
        }
        function Yd(e) {
          return '[src="' + gt(e) + '"]';
        }
        function Xd(e) {
          return "script[async]" + e;
        }
        function Kd(e, t, n) {
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
                  Gd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = Wd(n.href);
                var o = e.querySelector(Qd(a));
                if (o) return ((t.state.loading |= 4), (t.instance = o), Je(o), o);
                ((r = qd(n)),
                  (a = jd.get(a)) && Zd(r, a),
                  Je((o = (e.ownerDocument || e).createElement("link"))));
                var i = o;
                return (
                  (i._p = new Promise(function (e, t) {
                    ((i.onload = e), (i.onerror = t));
                  })),
                  dd(o, "link", r),
                  (t.state.loading |= 4),
                  Gd(o, n.precedence, e),
                  (t.instance = o)
                );
              case "script":
                return (
                  (o = Yd(n.src)),
                  (a = e.querySelector(Xd(o)))
                    ? ((t.instance = a), Je(a), a)
                    : ((r = n),
                      (a = jd.get(o)) && Jd((r = f({}, n)), a),
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
              ((r = t.instance), (t.state.loading |= 4), Gd(r, n.precedence, e));
          return t.instance;
        }
        function Gd(e, t, n) {
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
              !(o[qe] || o[$e] || ("link" === e && "stylesheet" === o.getAttribute("rel"))) &&
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
              (e.count++, (lf = new Map()), t.forEach(uf, e), (lf = null), of.call(e)));
        }
        function uf(e, t) {
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
        var cf = {
          $$typeof: w,
          Provider: null,
          Consumer: null,
          _currentValue: D,
          _currentValue2: D,
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
            return e ? (e = Dr) : Dr;
          })(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = vo(t)).payload = { element: n }),
            null !== (o = void 0 === o ? null : o) && (r.callback = o),
            null !== (n = bo(e, r, t)) && (qu(n, 0, t), wo(n, e, t)));
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
            var t = Or(e, 67108864);
            (null !== t && qu(t, 0, 67108864), mf(e, 67108864));
          }
        }
        function gf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Wu(),
              n = Or(e, (t = De(t)));
            (null !== n && qu(n, 0, t), mf(e, t));
          }
        }
        var yf = !0;
        function vf(e, t, n, r) {
          var a = R.T;
          R.T = null;
          var o = A.p;
          try {
            ((A.p = 2), wf(e, t, n, r));
          } finally {
            ((A.p = o), (R.T = a));
          }
        }
        function bf(e, t, n, r) {
          var a = R.T;
          R.T = null;
          var o = A.p;
          try {
            ((A.p = 8), wf(e, t, n, r));
          } finally {
            ((A.p = o), (R.T = a));
          }
        }
        function wf(e, t, n, r) {
          if (yf) {
            var a = kf(r);
            if (null === a) (ed(e, t, r, xf, n), Rf(e, r));
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return ((Pf = Af(Pf, e, t, n, r, a)), !0);
                  case "dragenter":
                    return ((Tf = Af(Tf, e, t, n, r, a)), !0);
                  case "mouseover":
                    return ((Nf = Af(Nf, e, t, n, r, a)), !0);
                  case "pointerover":
                    var o = a.pointerId;
                    return (_f.set(o, Af(_f.get(o) || null, e, t, n, r, a)), !0);
                  case "gotpointercapture":
                    return ((o = a.pointerId), zf.set(o, Af(zf.get(o) || null, e, t, n, r, a)), !0);
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rf(e, r), 4 & t && -1 < Of.indexOf(e))) {
              for (; null !== a; ) {
                var o = Ke(a);
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
                          (Ac(o), !(6 & fu) && ((Ru = ie() + 500), Dc(0, !1)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      (null !== (i = Or(o, 2)) && qu(i, 0, 2), Zu(), mf(o, 2));
                  }
                if ((null === (o = kf(r)) && ed(e, t, r, xf, n), o === a)) break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else ed(e, t, r, null, n);
          }
        }
        function kf(e) {
          return Sf((e = Rt(e)));
        }
        var xf = null;
        function Sf(e) {
          if (((xf = null), null !== (e = Xe(e)))) {
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
          return ((xf = e), null);
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
          Pf = null,
          Tf = null,
          Nf = null,
          _f = new Map(),
          zf = new Map(),
          Lf = [],
          Of =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function Rf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pf = null;
              break;
            case "dragenter":
            case "dragleave":
              Tf = null;
              break;
            case "mouseover":
            case "mouseout":
              Nf = null;
              break;
            case "pointerover":
            case "pointerout":
              _f.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zf.delete(t.pointerId);
          }
        }
        function Af(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ke(t)) && hf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Df(e) {
          var t = Xe(e.target);
          if (null !== t) {
            var n = i(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = s(n)))
                  return (
                    (e.blockedOn = t),
                    void je(e.priority, function () {
                      gf(n);
                    })
                  );
              } else if (31 === t) {
                if (null !== (t = u(n)))
                  return (
                    (e.blockedOn = t),
                    void je(e.priority, function () {
                      gf(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = kf(e.nativeEvent);
            if (null !== n) return (null !== (t = Ke(n)) && hf(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Ot = r), n.target.dispatchEvent(r), (Ot = null), t.shift());
          }
          return !0;
        }
        function Ff(e, t, n) {
          Mf(e) && n.delete(t);
        }
        function jf() {
          ((Cf = !1),
            null !== Pf && Mf(Pf) && (Pf = null),
            null !== Tf && Mf(Tf) && (Tf = null),
            null !== Nf && Mf(Nf) && (Nf = null),
            _f.forEach(Ff),
            zf.forEach(Ff));
        }
        function If(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Cf || ((Cf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, jf)));
        }
        var $f = null;
        function Hf(e) {
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
                var o = Ke(n);
                null !== o &&
                  (e.splice(t, 3),
                  (t -= 3),
                  ei(o, { pending: !0, data: a, method: n.method, action: r }, r, a));
              }
            }));
        }
        function Bf(e) {
          function t(t) {
            return If(t, e);
          }
          (null !== Pf && If(Pf, e),
            null !== Tf && If(Tf, e),
            null !== Nf && If(Nf, e),
            _f.forEach(t),
            zf.forEach(t));
          for (var n = 0; n < Lf.length; n++) {
            var r = Lf[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < Lf.length && null === (n = Lf[0]).blockedOn; )
            (Df(n), null === n.blockedOn && Lf.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                o = n[r + 1],
                l = a[He] || null;
              if ("function" == typeof o) l || Hf(n);
              else if (l) {
                var i = null;
                if (o && o.hasAttribute("formAction")) {
                  if (((a = o), (l = o[He] || null))) i = l.formAction;
                  else if (null !== Sf(a)) continue;
                } else i = l.action;
                ("function" == typeof i ? (n[r + 1] = i) : (n.splice(r, 3), (r -= 3)), Hf(n));
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
                (ff(e.current, 2, null, e, null, null), Zu(), (t[Be] = null));
              }
            }),
          (Wf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Fe();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Lf.length && 0 !== t && t < Lf[n].priority; n++);
              (Lf.splice(n, 0, e), 0 === n && Df(e));
            }
          }));
        var Qf = a.version;
        if ("19.2.4" !== Qf) throw Error(l(527, Qf, "19.2.4"));
        A.findDOMNode = function (e) {
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
                    if (o === n) return (c(a), e);
                    if (o === r) return (c(a), t);
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) ((n = a), (r = o));
                else {
                  for (var s = !1, u = a.child; u; ) {
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
                  if (!s) {
                    for (u = o.child; u; ) {
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
        var qf = {
          bundleType: 0,
          version: "19.2.4",
          rendererPackageName: "react-dom",
          currentDispatcherRef: R,
          reconcilerVersion: "19.2.4",
        };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Yf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Yf.isDisabled && Yf.supportsFiber)
            try {
              ((ge = Yf.inject(qf)), (ye = Yf));
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
            (t = (function (e, t, n, r, a, o, l, i, s, u, c, d) {
              return (
                (e = new df(e, t, n, l, s, u, c, d, i)),
                (t = 1),
                !0 === o && (t |= 24),
                (o = Fr(3, null, null, t)),
                (e.current = o),
                (o.stateNode = e),
                (t = ja()).refCount++,
                (e.pooledCache = t),
                t.refCount++,
                (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
                go(o),
                e
              );
            })(e, 1, !1, null, 0, r, a, null, o, i, s, Uf)),
            (e[Be] = t.current),
            Zc(e),
            new Vf(t)
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
                r = u(n, t.crossOrigin),
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
          y = {};
        function v(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = y), (this.updater = n || h));
        }
        function b() {}
        function w(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = y), (this.updater = n || h));
        }
        ((v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = v.prototype));
        var k = (w.prototype = new b());
        ((k.constructor = w), g(k, v.prototype), (k.isPureReactComponent = !0));
        var x = Array.isArray;
        function S() {}
        var E = { H: null, A: null, T: null, S: null },
          C = Object.prototype.hasOwnProperty;
        function P(e, t, r) {
          var a = r.ref;
          return { $$typeof: n, type: e, key: t, ref: void 0 !== a ? a : null, props: r };
        }
        function T(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function _(e, t) {
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
                    return z((c = e._init)(e._payload), t, a, o, l);
                }
            }
          if (c)
            return (
              (l = l(e)),
              (c = "" === o ? "." + _(e, 0) : o),
              x(l)
                ? ((a = ""),
                  null != c && (a = c.replace(N, "$&/") + "/"),
                  z(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (T(l) &&
                    ((s = l),
                    (u =
                      a +
                      (null == l.key || (e && e.key === l.key)
                        ? ""
                        : ("" + l.key).replace(N, "$&/") + "/") +
                      c),
                    (l = P(s.type, u, s.props))),
                  t.push(l)),
              1
            );
          c = 0;
          var d,
            p = "" === o ? "." : o + ":";
          if (x(e))
            for (var h = 0; h < e.length; h++) c += z((o = e[h]), t, a, (i = p + _(o, h)), l);
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
              c += z((o = o.value), t, a, (i = p + _(o, h++)), l);
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
          return c;
        }
        function L(e, t, n) {
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
        function O(e) {
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
          A = {
            map: L,
            forEach: function (e, t, n) {
              L(
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
                L(e, function () {
                  t++;
                }),
                t
              );
            },
            toArray: function (e) {
              return (
                L(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!T(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return e;
            },
          };
        ((t.Activity = p),
          (t.Children = A),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = w),
          (t.StrictMode = o),
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
            return P(e.type, a, r);
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
            return P(e, o, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: O };
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
                u = i + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                ((e[r] = c), (e[u] = n), (r = u));
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
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          y = !1,
          v = "function" == typeof setTimeout ? setTimeout : null,
          b = "function" == typeof clearTimeout ? clearTimeout : null,
          w = "undefined" != typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              (a(c), (t.sortIndex = t.expirationTime), n(u, t));
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), k(e), !h))
            if (null !== r(u)) ((h = !0), E || ((E = !0), S()));
            else {
              var t = r(c);
              null !== t && O(x, t.startTime - e);
            }
        }
        var S,
          E = !1,
          C = -1,
          P = 5,
          T = -1;
        function N() {
          return !(!y && t.unstable_now() - T < P);
        }
        function _() {
          if (((y = !1), E)) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              e: {
                ((h = !1), g && ((g = !1), b(C), (C = -1)), (m = !0));
                var o = p;
                try {
                  t: {
                    for (k(e), f = r(u); null !== f && !(f.expirationTime > e && N()); ) {
                      var l = f.callback;
                      if ("function" == typeof l) {
                        ((f.callback = null), (p = f.priorityLevel));
                        var i = l(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" == typeof i)) {
                          ((f.callback = i), k(e), (n = !0));
                          break t;
                        }
                        (f === r(u) && a(u), k(e));
                      } else a(u);
                      f = r(u);
                    }
                    if (null !== f) n = !0;
                    else {
                      var s = r(c);
                      (null !== s && O(x, s.startTime - e), (n = !1));
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
            w(_);
          };
        else if ("undefined" != typeof MessageChannel) {
          var z = new MessageChannel(),
            L = z.port2;
          ((z.port1.onmessage = _),
            (S = function () {
              L.postMessage(null);
            }));
        } else
          S = function () {
            v(_, 0);
          };
        function O(e, n) {
          C = v(function () {
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
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
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
            y = !0;
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
                  n(c, e),
                  null === r(u) && e === r(c) && (g ? (b(C), (C = -1)) : (g = !0), O(x, o - l)))
                : ((e.sortIndex = i), n(u, e), h || m || ((h = !0), E || ((E = !0), S()))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
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
        for (c = 0; c < e.length; c++) {
          for (var [n, r, a] = e[c], i = !0, s = 0; s < n.length; s++)
            (!1 & a || l >= a) && Object.keys(o.O).every((e) => o.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((i = !1), a < l && (l = a));
          if (i) {
            e.splice(c--, 1);
            var u = r();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      a = a || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
      e[c] = [n, r, a];
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
      var e = { 472: 0, 869: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            a,
            [l, i, s] = n,
            u = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (r in i) o.o(i, r) && (o.m[r] = i[r]);
            if (s) var c = s(o);
          }
          for (t && t(n); u < l.length; u++)
            ((a = l[u]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
          return o.O(c);
        },
        n = (self.webpackChunkrit_igme430 = self.webpackChunkrit_igme430 || []);
      (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
    })());
  var l = o.O(void 0, [869], () => o(142));
  l = o.O(l);
})();
