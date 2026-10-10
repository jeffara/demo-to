import { useId as re, useState as I, useRef as h, useEffect as m, useCallback as se, useLayoutEffect as oe } from "react";
import { useClickOutside as ce } from "../../BottomSheet/hooks/useClickOutside.js";
import { PhoneType as C } from "../../InputBase/utils/inputEnums.js";
import { classNamesMerge as x } from "../../../../utils/classNamesMerge.js";
import { STATE as r, SURFACE as ie } from "../../../../utils/pattern.js";
import { getToranjaSurface as w } from "../../../../utils/useToranjaSurface/useToranjaSurface.js";
const ue = "País", le = "br", ae = "+55", fe = (t, n) => t === r.SKELETON || t === r.DISABLED || t === r.ERROR ? t : !n || t === r.READ_ONLY ? r.READ_ONLY : t === r.LOADING ? r.ENABLED : t, de = (t) => t ? t.value.toLowerCase() === le || t.prefix === ae : !1, pe = (t, n) => t != null && t.phoneType ? t.phoneType : de(t) ? C.BR : t ? C.International : n ?? C.BR, Ee = (t, n, i) => t ? n.find((a) => a.value === t) ?? i.find((a) => a.value === t) ?? n[0] ?? i[0] : n[0] ?? i[0], ke = (t) => {
  var g;
  const {
    state: n = r.ENABLED,
    selectable: i = !0,
    showHint: a = !1,
    featuredCountryItems: L = [],
    countryItems: d,
    selectedCountryValue: p,
    prefix: F,
    phoneType: H,
    id: M,
    onCountryChange: A,
    onChange: y,
    "data-testid": V = "InputCountry"
  } = t, _ = re(), T = M ?? `input-country-${_}`, f = `${T}-select`, R = `input-country-picker${_.replace(/:/g, "")}`, [c, O] = I(!1), [K, Y] = I(w), D = h(null), b = h(null), N = h(null), [G, U] = I(
    p ?? ((g = d[0]) == null ? void 0 : g.value)
  ), o = K === ie.DESKTOP, B = p !== void 0 ? p : G, u = Ee(
    B,
    d,
    L
  ), E = n === r.DISABLED, v = n === r.READ_ONLY, k = n === r.SKELETON, $ = !i || E || v || k, j = v, P = i && !E && !v && !k, Z = fe(n, i), q = F ?? (u == null ? void 0 : u.prefix), z = u == null ? void 0 : u.flag, X = pe(u, H);
  m(() => {
    const e = new MutationObserver(() => {
      Y(w());
    });
    return e.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["toranja-surface"]
    }), () => {
      e.disconnect();
    };
  }, []);
  const S = se(
    (e) => {
      if (O(!1), !(e != null && e.restoreFocus))
        return;
      const s = document.getElementById(f);
      s instanceof HTMLElement && s.focus();
    },
    [f]
  );
  m(() => {
    o && O(!1);
  }, [o]), ce({
    ref: b,
    extraRef: N,
    isActive: c && o,
    onClickOutside: () => S()
  }), oe(() => {
    if (!c || !o)
      return;
    const e = b.current;
    if (!e)
      return;
    const s = e.querySelector('[data-testid="input-search"]');
    if (s instanceof HTMLElement) {
      s.focus();
      return;
    }
    e.focus();
  }, [c, o]), m(() => {
    if (!c || !o)
      return () => {
      };
    const e = D.current;
    if (!e)
      return () => {
      };
    const s = (l) => {
      l.key === "Escape" && (l.preventDefault(), S({ restoreFocus: !0 }));
    };
    return e.addEventListener("keydown", s), () => {
      e.removeEventListener("keydown", s);
    };
  }, [c, o, S]), m(() => {
    const e = document.getElementById(f);
    if (e instanceof HTMLElement) {
      if (!o) {
        e.removeAttribute("aria-haspopup"), e.removeAttribute("aria-expanded"), e.removeAttribute("aria-controls");
        return;
      }
      if (e.setAttribute("aria-haspopup", "dialog"), e.setAttribute("aria-expanded", c ? "true" : "false"), c) {
        e.setAttribute("aria-controls", R);
        return;
      }
      e.removeAttribute("aria-controls");
    }
  }, [o, c, R, f]);
  const J = x("input-country", {
    "input-country--disabled": E,
    "input-country--readonly": v,
    "input-country--error": n === r.ERROR,
    "input-country--loading": n === r.LOADING,
    "input-country--skeleton": k,
    "input-country--open": c && o
  }), Q = "input-country__fields", W = x("input-country__select", {
    "input-country__select--not-selectable": !i
  }), ee = "input-country__input", te = "input-country__picker", ne = () => {
    P && O(!0);
  };
  return {
    rootClasses: J,
    fieldsClasses: Q,
    selectClasses: W,
    inputClasses: ee,
    pickerClasses: te,
    dataTestId: V,
    resolvedState: n,
    selectState: Z,
    selectable: i,
    showHint: a,
    isDisabled: E,
    isSelectReadOnly: $,
    isInputReadOnly: j,
    canOpenSheet: P,
    isPickerOpen: c,
    isDesktop: o,
    pickerId: R,
    closePicker: S,
    handleSelectClick: () => {
      ne();
    },
    handleCountrySelect: (e) => {
      const s = d.find((l) => l.value === e.value) ?? L.find((l) => l.value === e.value);
      s && (p === void 0 && U(s.value), A == null || A(s));
    },
    handleChange: (e) => {
      y == null || y(e);
    },
    resolvedPrefix: q,
    resolvedFlag: z,
    resolvedPhoneType: X,
    resolvedSelectedValue: B,
    selectAccessibleLabel: ue,
    selectId: f,
    inputId: T,
    countryItems: d,
    featuredCountryItems: L,
    rootRef: D,
    pickerRef: b,
    selectContainerRef: N
  };
};
export {
  ke as useInputCountry
};
