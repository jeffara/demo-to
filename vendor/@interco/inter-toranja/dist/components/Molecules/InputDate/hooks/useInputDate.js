import { useState as v, useRef as A, useId as q, useEffect as d, useCallback as G } from "react";
import { parseMaskedDate as y, getDatePickerLocale as H, formatMaskedDate as Y } from "../utils/formatInputDate.js";
import { useClickOutside as z } from "../../BottomSheet/hooks/useClickOutside.js";
import { DateType as J } from "../../InputBase/utils/inputEnums.js";
import { classNamesMerge as Q } from "../../../../utils/classNamesMerge.js";
import { STATE as c, SURFACE as W } from "../../../../utils/pattern.js";
import { getToranjaSurface as L } from "../../../../utils/useToranjaSurface/useToranjaSurface.js";
const h = "calendar-icon", X = /* @__PURE__ */ new Set([
  c.DISABLED,
  c.READ_ONLY,
  c.LOADING,
  c.SKELETON
]), N = (t, r) => t == null ? r : String(t), _ = (t, r) => {
  if (t)
    return y(t, r) ?? void 0;
}, Z = (t, r) => ({
  minDate: _(t == null ? void 0 : t.start, r),
  maxDate: _(t == null ? void 0 : t.end, r)
}), ue = (t) => {
  const {
    value: r,
    defaultValue: M,
    onChange: f,
    dateType: i = J.BR,
    pickerRange: k,
    state: b = c.ENABLED,
    disabled: T,
    readOnly: B,
    ...C
  } = t, P = r !== void 0, [g, w] = v(
    () => N(M, "")
  ), S = P ? N(r, "") : g, [o, p] = v(!1), [x, K] = v(L), m = A(null), O = A(null), u = A(null), D = `input-date-picker${q().replace(/:/g, "")}`, s = x === W.DESKTOP, E = !!T || !!B || X.has(b);
  d(() => {
    const e = new MutationObserver(() => {
      K(L());
    });
    return e.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["toranja-surface"]
    }), () => {
      e.disconnect();
    };
  }, []);
  const l = G(() => {
    var e;
    p(!1), (e = u.current) == null || e.focus();
  }, []);
  d(() => {
    s && !E || p(!1);
  }, [s, E]), z({
    ref: O,
    extraRef: u,
    isActive: o,
    onClickOutside: l
  }), d(() => {
    if (!o)
      return () => {
      };
    const e = m.current;
    if (!e)
      return () => {
      };
    const n = (a) => {
      a.key === "Escape" && (a.preventDefault(), l());
    };
    return e.addEventListener("keydown", n), () => {
      e.removeEventListener("keydown", n);
    };
  }, [o, l]), d(() => {
    var n;
    const e = (n = m.current) == null ? void 0 : n.querySelector(
      `[data-testid="${h}"]`
    );
    if (e) {
      if (u.current = e, !s) {
        e.removeAttribute("aria-haspopup"), e.removeAttribute("aria-expanded"), e.removeAttribute("aria-controls");
        return;
      }
      if (e.setAttribute("aria-haspopup", "dialog"), e.setAttribute("aria-expanded", o ? "true" : "false"), o) {
        e.setAttribute("aria-controls", D);
        return;
      }
      e.removeAttribute("aria-controls");
    }
  }, [s, o, D]);
  const I = (e) => {
    P || w(e), f == null || f(e);
  }, V = (e) => {
    if (!s || E || o)
      return;
    const n = e.target;
    if (!(n instanceof Element))
      return;
    const a = n.closest(`[data-testid="${h}"]`);
    !(a instanceof HTMLButtonElement) || a.disabled || (u.current = a, p(!0));
  }, F = (e) => {
    e instanceof Date && (I(Y(e, i)), l());
  }, { minDate: R, maxDate: U } = Z(k, i), $ = y(S, i), j = H(i);
  return {
    rootClasses: Q("input-date", {
      "input-date--open": o
    }),
    pickerClasses: "input-date__picker",
    rootRef: m,
    pickerRef: O,
    isPickerOpen: o,
    isDesktop: s,
    pickerId: D,
    pickerValue: $,
    minDate: R,
    maxDate: U,
    locale: j,
    inputBaseProps: {
      ...C,
      state: b,
      dateType: i,
      pickerRange: k,
      disabled: T,
      readOnly: B,
      value: S,
      onChange: I,
      suppressNativeDatePicker: !0,
      customTagProps: C.customTagProps ?? {
        customProperties: {
          component_name: "InputDate"
        }
      }
    },
    handleRootClick: V,
    handlePickerChange: F
  };
};
export {
  ue as useInputDate
};
