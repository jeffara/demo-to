import { useState as w, useMemo as y, useCallback as p, useEffect as O } from "react";
import { InputType as b, ForceBarLevel as a } from "../../InputBase/utils/inputEnums.js";
import { STATE as S } from "../../../../utils/pattern.js";
const h = {
  weak: "Senha fraca",
  medium: "Senha média",
  strong: "Senha forte"
}, C = [S.ERROR, S.DISABLED, S.SKELETON], d = (e) => /\s/.test(e), I = (e) => /\d/.test(e), K = (e) => /[A-Z]/.test(e), k = (e) => /[a-z]/.test(e), v = (e) => /[^A-Za-z0-9]/.test(e), _ = (e) => e.length >= 8 && e.length <= 20, D = [
  _,
  I,
  v,
  K,
  k
], N = (e) => {
  if (e.length === 0)
    return { state: `${a.DEFAULT}`, activeSegments: 0 };
  if (d(e))
    return { state: `${a.WEAK}`, activeSegments: 1, label: h.weak };
  const i = D.length, s = D.filter((r) => r(e)).length, l = Math.ceil(i / 3), n = Math.ceil(2 * i / 3);
  return s <= l ? { state: `${a.WEAK}`, activeSegments: 1, label: h.weak } : s <= n ? { state: `${a.MEDIUM}`, activeSegments: 2, label: h.medium } : { state: `${a.STRONG}`, activeSegments: 3, label: h.strong };
}, $ = (e) => e === a.DEFAULT ? "" : `force-bar--${e}`, P = (e) => {
  const {
    label: i,
    state: s = S.ENABLED,
    defaultValue: l = "",
    value: n,
    onChange: r,
    showForceBar: R = !1,
    ...o
  } = e, c = e.type === b.PASSWORD, [A, f] = w(String(l ?? "")), g = n !== void 0 ? String(n) : A, m = y(() => N(g), [g]), B = R && !C.includes(s), F = (t) => {
    c && d(t) || (n === void 0 && f(t), r == null || r(t));
  }, L = p(
    (t) => {
      var E;
      const u = t.key === " " || t.key === "Spacebar" || t.code === "Space";
      if (c && u) {
        t.preventDefault();
        return;
      }
      (E = o.onKeyDown) == null || E.call(o, t);
    },
    [c, o.onKeyDown]
  ), T = p(
    (t) => {
      const u = t.nativeEvent;
      c && u.data && d(u.data) && t.preventDefault();
    },
    [c]
  );
  return O(() => {
    n !== void 0 && f(String(n));
  }, [n]), {
    inputProps: {
      label: i,
      state: s,
      defaultValue: l,
      value: n,
      onChange: F,
      ...o,
      onKeyDown: L,
      onBeforeInput: T
    },
    forceBar: {
      shouldRender: B,
      ...m,
      className: $(m.state)
    }
  };
};
export {
  P as useInputPassword
};
