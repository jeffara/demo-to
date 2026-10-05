import { useId as $, useState as A } from "react";
import { PhoneType as h } from "../../InputBase/utils/inputEnums.js";
import { classNamesMerge as y } from "../../../../utils/classNamesMerge.js";
import { STATE as n } from "../../../../utils/pattern.js";
const z = "País", M = "br", X = "+55", j = (e, t) => e === n.SKELETON || e === n.DISABLED || e === n.ERROR ? e : !t || e === n.READ_ONLY ? n.READ_ONLY : e === n.LOADING ? n.ENABLED : e, q = (e) => e ? e.value.toLowerCase() === M || e.prefix === X : !1, J = (e, t) => e != null && e.phoneType ? e.phoneType : q(e) ? h.BR : e ? h.International : t ?? h.BR, Q = (e, t, s) => e ? t.find((l) => l.value === e) ?? s.find((l) => l.value === e) ?? t[0] ?? s[0] : t[0] ?? s[0], ie = (e) => {
  var v;
  const {
    state: t = n.ENABLED,
    selectable: s = !0,
    showHint: l = !1,
    featuredCountryItems: p = [],
    countryItems: r,
    selectedCountryValue: i,
    prefix: C,
    phoneType: T,
    id: D,
    onCountryChange: d,
    onChange: f,
    "data-testid": N = "InputCountry"
  } = e, B = $(), O = D ?? `input-country-${B}`, b = `${O}-select`, [P, R] = A(!1), [m, x] = A(
    i ?? ((v = r[0]) == null ? void 0 : v.value)
  ), I = i !== void 0 ? i : m, o = Q(
    I,
    r,
    p
  ), c = t === n.DISABLED, a = t === n.READ_ONLY, S = t === n.SKELETON, V = !s || c || a || S, g = a, _ = s && !c && !a && !S, k = j(t, s), Y = C ?? (o == null ? void 0 : o.prefix), G = o == null ? void 0 : o.flag, w = J(o, T), F = y("input-country", {
    "input-country--disabled": c,
    "input-country--readonly": a,
    "input-country--error": t === n.ERROR,
    "input-country--loading": t === n.LOADING,
    "input-country--skeleton": S
  }), H = "input-country__fields", K = y("input-country__select", {
    "input-country__select--not-selectable": !s
  }), U = "input-country__input", Z = () => {
    _ && R(!0);
  };
  return {
    rootClasses: F,
    fieldsClasses: H,
    selectClasses: K,
    inputClasses: U,
    dataTestId: N,
    resolvedState: t,
    selectState: k,
    selectable: s,
    showHint: l,
    isDisabled: c,
    isSelectReadOnly: V,
    isInputReadOnly: g,
    canOpenSheet: _,
    isSheetOpen: P,
    closeSheet: () => {
      R(!1);
    },
    handleSelectClick: () => {
      Z();
    },
    handleCountrySelect: (u) => {
      const E = r.find((L) => L.value === u.value) ?? p.find((L) => L.value === u.value);
      E && (i === void 0 && x(E.value), d == null || d(E));
    },
    handleChange: (u) => {
      f == null || f(u);
    },
    resolvedPrefix: Y,
    resolvedFlag: G,
    resolvedPhoneType: w,
    resolvedSelectedValue: I,
    selectAccessibleLabel: z,
    selectId: b,
    inputId: O,
    countryItems: r,
    featuredCountryItems: p
  };
};
export {
  ie as useInputCountry
};
