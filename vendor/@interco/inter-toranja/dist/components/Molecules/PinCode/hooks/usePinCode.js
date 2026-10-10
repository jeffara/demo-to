import { useState as Y, useRef as b, useCallback as f, useEffect as j } from "react";
import { STATE as p } from "../../../../utils/pattern.js";
import { v as h } from "../../../../v4-CRLUkzQ6.js";
const J = (n, a) => {
  const I = /^\d$/, E = /^[a-zA-Z0-9]$/;
  return n ? a === "number" ? I.test(n) : E.test(n) : !1;
}, Q = (n, a, I) => {
  const w = a === "number" ? /\d/g : /[a-zA-Z0-9]/g, D = [];
  let s = w.exec(n);
  for (; s !== null && D.length < I; )
    D.push(s[0]), s = w.exec(n);
  return D.join("");
}, R = (n) => {
  const a = n.findIndex((I) => I === "");
  return a >= 0 ? a : Math.max(n.length - 1, 0);
};
function er({
  fields: n = 3,
  state: a,
  disabled: I,
  hidden: E = !1,
  type: y = "number",
  onGetValue: w,
  onComplete: D,
  onStateChange: s
}) {
  const [m, N] = Y(Array(n).fill("")), [g, B] = Y(null), [k, M] = Y(a), T = b([]), F = b([]), P = b(!1), i = b(m), G = b(
    Array(n).fill("").map(() => h())
  ), d = I ?? k === p.DISABLED, u = k === p.ERROR, O = k === p.SKELETON, A = k === p.READ_ONLY, q = E ? "password" : "text", l = f(
    (r) => {
      typeof w == "function" && w(r.join(""));
    },
    [w]
  ), o = f((r) => {
    var t, e;
    B(r), (t = T.current[r]) == null || t.focus(), (e = T.current[r]) == null || e.select();
  }, []), v = f(() => {
    if (P.current)
      return;
    P.current = !0;
    const r = Array(n).fill("");
    N(r), i.current = r, M(p.ENABLED), s == null || s(p.ENABLED), l(r), o(0), queueMicrotask(() => {
      P.current = !1;
    });
  }, [n, l, s, o]), V = f(
    (r) => {
      const t = r.join("");
      B(null), l(r), D == null || D(t), queueMicrotask(() => {
        T.current.forEach((e) => e == null ? void 0 : e.blur());
      });
    },
    [l, D]
  ), x = f(
    (r, t) => {
      const e = r.currentTarget.value.slice(-1);
      if (!J(e, y)) {
        r.currentTarget.value = i.current[t] ?? "";
        return;
      }
      if (u) {
        P.current = !0;
        const L = Array(n).fill("");
        L[0] = e, N(L), i.current = L, M(p.ENABLED), s == null || s(p.ENABLED), l(L), o(R(L)), queueMicrotask(() => {
          P.current = !1;
        });
        return;
      }
      const c = R(i.current), _ = [...i.current];
      if (_[c] = e, N(_), i.current = _, _.every((L) => L !== "")) {
        V(_);
        return;
      }
      l(_), o(R(_));
    },
    [y, u, n, l, s, V, o]
  ), z = f(
    (r) => {
      r.preventDefault();
      const t = Q(r.clipboardData.getData("text"), y, n);
      if (!t)
        return;
      const e = Array.from(t.padEnd(n, ""));
      if (N(e), i.current = e, u && (M(p.ENABLED), s == null || s(p.ENABLED)), e.every((_) => _ !== "")) {
        V(e);
        return;
      }
      l(e), o(R(e));
    },
    [y, n, u, s, V, l, o]
  ), H = f(
    (r, t) => {
      const { key: e } = r;
      if (e === "ArrowLeft" || e === "ArrowRight") {
        r.preventDefault();
        return;
      }
      if (e === "Backspace" && u) {
        r.preventDefault(), v();
        return;
      }
      if (e !== "Backspace")
        return;
      r.preventDefault();
      const c = [...i.current];
      if (c[t] !== "") {
        c[t] = "", N(c), i.current = c, l(c), o(t);
        return;
      }
      t > 0 && (c[t - 1] = "", N(c), i.current = c, l(c), o(t - 1));
    },
    [u, v, l, o]
  ), K = f(
    (r) => {
      var e, c;
      if (d || O)
        return;
      if (u) {
        v();
        return;
      }
      if (A) {
        B(r), (e = T.current[r]) == null || e.select();
        return;
      }
      const t = R(i.current);
      if (t !== r) {
        o(t);
        return;
      }
      B(r), (c = T.current[r]) == null || c.select();
    },
    [d, O, u, A, v, o]
  ), W = f((r) => {
    const t = r.relatedTarget;
    t instanceof HTMLElement && T.current.some((c) => c === t) || B(null);
  }, []), Z = f(
    (r) => {
      if (!(d || O || A || r.target instanceof HTMLInputElement)) {
        if (r.preventDefault(), u) {
          v();
          return;
        }
        o(R(i.current));
      }
    },
    [d, O, A, u, v, o]
  ), $ = f(
    (r) => [
      "fieldset__pin-code-input-wrapper",
      g === r && "fieldset__pin-code-input-wrapper--focused",
      u && "fieldset__pin-code-input-wrapper--error",
      d && "fieldset__pin-code-input-wrapper--disabled",
      A && "fieldset__pin-code-input-wrapper--readonly",
      E && m[r] !== "" && "fieldset__pin-code-input-wrapper--masked-value"
      /* MASKED_VALUE */
    ].filter(Boolean).join(" "),
    [g, u, d, A, E, m]
  ), C = f(
    (r) => [
      "fieldset__pin-code-input-wrapper__input",
      "type-code-extra-large",
      E && m[r] !== "" && "fieldset__pin-code-input-wrapper__input--hidden",
      d && "fieldset__pin-code-input-wrapper__input--disabled",
      u && "fieldset__pin-code-input-wrapper__input--error"
      /* INPUT_ERROR */
    ].filter(Boolean).join(" "),
    [E, m, d, u]
  );
  return j(() => {
    M(a);
  }, [a]), j(() => {
    i.current = m;
  }, [m]), {
    valuePinCode: m,
    fieldsetKeys: G,
    inputRefs: T,
    fieldsetRefs: F,
    isDisabled: d,
    isError: u,
    isSkeleton: O,
    isReadOnly: A,
    typeInput: q,
    handleInput: x,
    handlePaste: z,
    handleNavigation: H,
    handleFocus: K,
    handleBlur: W,
    handleContainerPointerDown: Z,
    getClassNames: $,
    getInputClassNames: C
  };
}
export {
  er as usePinCode
};
