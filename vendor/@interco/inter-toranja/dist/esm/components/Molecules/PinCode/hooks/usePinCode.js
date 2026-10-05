import { useState as Y, useRef as P, useCallback as f, useEffect as j } from "react";
import { STATE as p } from "../../../../utils/pattern.js";
import C from "../../../../node_modules/uuid/dist/esm-browser/v4.js";
const J = (n, a) => {
  const D = /^\d$/, O = /^[a-zA-Z0-9]$/;
  return n ? a === "number" ? D.test(n) : O.test(n) : !1;
}, Q = (n, a, D) => {
  const A = a === "number" ? /\d/g : /[a-zA-Z0-9]/g, E = [];
  let s = A.exec(n);
  for (; s !== null && E.length < D; )
    E.push(s[0]), s = A.exec(n);
  return E.join("");
}, w = (n) => {
  const a = n.findIndex((D) => D === "");
  return a >= 0 ? a : Math.max(n.length - 1, 0);
};
function er({
  fields: n = 3,
  state: a,
  disabled: D,
  hidden: O = !1,
  type: v = "number",
  onGetValue: A,
  onComplete: E,
  onStateChange: s
}) {
  const [b, L] = Y(Array(n).fill("")), [g, R] = Y(null), [k, M] = Y(a), I = P([]), F = P([]), y = P(!1), i = P(b), G = P(
    Array(n).fill("").map(() => C())
  ), d = D ?? k === p.DISABLED, u = k === p.ERROR, B = k === p.SKELETON, m = k === p.READ_ONLY, h = O ? "password" : "text", l = f(
    (r) => {
      typeof A == "function" && A(r.join(""));
    },
    [A]
  ), o = f((r) => {
    var t, e;
    R(r), (t = I.current[r]) == null || t.focus(), (e = I.current[r]) == null || e.select();
  }, []), N = f(() => {
    if (y.current)
      return;
    y.current = !0;
    const r = Array(n).fill("");
    L(r), i.current = r, M(p.ENABLED), s == null || s(p.ENABLED), l(r), o(0), queueMicrotask(() => {
      y.current = !1;
    });
  }, [n, l, s, o]), V = f(
    (r) => {
      const t = r.join("");
      R(null), l(r), E == null || E(t), queueMicrotask(() => {
        I.current.forEach((e) => e == null ? void 0 : e.blur());
      });
    },
    [l, E]
  ), q = f(
    (r, t) => {
      const e = r.currentTarget.value.slice(-1);
      if (!J(e, v)) {
        r.currentTarget.value = i.current[t] ?? "";
        return;
      }
      if (u) {
        y.current = !0;
        const T = Array(n).fill("");
        T[0] = e, L(T), i.current = T, M(p.ENABLED), s == null || s(p.ENABLED), l(T), o(w(T)), queueMicrotask(() => {
          y.current = !1;
        });
        return;
      }
      const c = w(i.current), _ = [...i.current];
      if (_[c] = e, L(_), i.current = _, _.every((T) => T !== "")) {
        V(_);
        return;
      }
      l(_), o(w(_));
    },
    [v, u, n, l, s, V, o]
  ), x = f(
    (r) => {
      r.preventDefault();
      const t = Q(r.clipboardData.getData("text"), v, n);
      if (!t)
        return;
      const e = Array.from(t.padEnd(n, ""));
      if (L(e), i.current = e, u && (M(p.ENABLED), s == null || s(p.ENABLED)), e.every((_) => _ !== "")) {
        V(e);
        return;
      }
      l(e), o(w(e));
    },
    [v, n, u, s, V, l, o]
  ), z = f(
    (r, t) => {
      const { key: e } = r;
      if (e === "ArrowLeft" || e === "ArrowRight") {
        r.preventDefault();
        return;
      }
      if (e === "Backspace" && u) {
        r.preventDefault(), N();
        return;
      }
      if (e !== "Backspace")
        return;
      r.preventDefault();
      const c = [...i.current];
      if (c[t] !== "") {
        c[t] = "", L(c), i.current = c, l(c), o(t);
        return;
      }
      t > 0 && (c[t - 1] = "", L(c), i.current = c, l(c), o(t - 1));
    },
    [u, N, l, o]
  ), H = f(
    (r) => {
      var e, c;
      if (d || B)
        return;
      if (u) {
        N();
        return;
      }
      if (m) {
        R(r), (e = I.current[r]) == null || e.select();
        return;
      }
      const t = w(i.current);
      if (t !== r) {
        o(t);
        return;
      }
      R(r), (c = I.current[r]) == null || c.select();
    },
    [d, B, u, m, N, o]
  ), K = f((r) => {
    const t = r.relatedTarget;
    t instanceof HTMLElement && I.current.some((c) => c === t) || R(null);
  }, []), W = f(
    (r) => {
      if (!(d || B || m || r.target instanceof HTMLInputElement)) {
        if (r.preventDefault(), u) {
          N();
          return;
        }
        o(w(i.current));
      }
    },
    [d, B, m, u, N, o]
  ), Z = f(
    (r) => [
      "fieldset__pin-code-input-wrapper",
      g === r && "fieldset__pin-code-input-wrapper--focused",
      u && "fieldset__pin-code-input-wrapper--error",
      d && "fieldset__pin-code-input-wrapper--disabled",
      m && "fieldset__pin-code-input-wrapper--readonly"
      /* READ_ONLY */
    ].filter(Boolean).join(" "),
    [g, u, d, m]
  ), $ = f(
    () => [
      "fieldset__pin-code-input-wrapper__input type-code-extra-large",
      d && "fieldset__pin-code-input-wrapper__input--disabled",
      u && "fieldset__pin-code-input-wrapper__input--error"
      /* INPUT_ERROR */
    ].filter(Boolean).join(" "),
    [d, u]
  );
  return j(() => {
    M(a);
  }, [a]), j(() => {
    i.current = b;
  }, [b]), {
    valuePinCode: b,
    fieldsetKeys: G,
    inputRefs: I,
    fieldsetRefs: F,
    isDisabled: d,
    isError: u,
    isSkeleton: B,
    isReadOnly: m,
    typeInput: h,
    handleInput: q,
    handlePaste: x,
    handleNavigation: z,
    handleFocus: H,
    handleBlur: K,
    handleContainerPointerDown: W,
    getClassNames: Z,
    getInputClassNames: $
  };
}
export {
  er as usePinCode
};
