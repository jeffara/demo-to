import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useCallback as X } from "react";
import { useInputCountry as Y } from "./hooks/useInputCountry.js";
import { InputText as Z } from "../InputText/InputText.js";
import { Select as ee } from "../Select/Select.js";
import { BottomSheetCountry as te } from "../../Templates/BottomSheetCountry/BottomSheetCountry.js";
import '../../../assets/components/Molecules/InputCountry/InputCountry.modules.css';/* empty css                          */
const de = (s) => {
  const {
    label: d,
    placeholder: c,
    value: u,
    defaultValue: h,
    hints: m,
    error: t,
    mask: p,
    onDebouncedChange: y,
    onBlur: C,
    onFocus: f,
    bottomSheetTitle: S,
    showCountrySearch: g,
    showCountryFeatured: T,
    countryFeaturedTitle: I,
    countryAllTitle: b,
    countrySearchPlaceholder: v,
    onTag: o
  } = s, {
    rootClasses: w,
    fieldsClasses: P,
    selectClasses: x,
    inputClasses: O,
    dataTestId: r,
    resolvedState: F,
    selectState: N,
    showHint: k,
    isDisabled: l,
    isSelectReadOnly: A,
    isInputReadOnly: V,
    isSheetOpen: j,
    closeSheet: B,
    handleSelectClick: D,
    handleCountrySelect: R,
    handleChange: _,
    resolvedPrefix: $,
    resolvedFlag: H,
    resolvedPhoneType: J,
    resolvedSelectedValue: L,
    selectAccessibleLabel: M,
    selectId: q,
    inputId: z,
    countryItems: E,
    featuredCountryItems: G
  } = Y(s), K = X(
    (Q) => {
      o && o((U) => {
        const a = Q(U), n = Array.isArray(t) ? t.filter((W) => W.trim() !== "") : [];
        return {
          ...a,
          ComponentProperties: {
            ...a.ComponentProperties,
            component_name: "InputCountry",
            ...n.length > 0 ? { error: JSON.stringify(n) } : {}
          }
        };
      });
    },
    [o, t]
  );
  return /* @__PURE__ */ i("div", { "data-testid": r, className: w, children: [
    /* @__PURE__ */ i("div", { className: P, children: [
      /* @__PURE__ */ e("div", { className: x, children: /* @__PURE__ */ e(
        ee,
        {
          id: q,
          label: M,
          state: N,
          showFlag: !0,
          showContent: !1,
          flag: H,
          onClick: D,
          "data-testid": `${r}-select`,
          ...l ? { disabled: !0 } : {},
          ...A ? { readOnly: !0 } : {}
        }
      ) }),
      /* @__PURE__ */ e("div", { className: O, children: /* @__PURE__ */ e(
        Z,
        {
          id: z,
          label: d,
          placeholder: c,
          value: u,
          defaultValue: h,
          prefix: $,
          state: F,
          showHint: k,
          hints: m,
          error: t,
          mask: p,
          phoneType: J,
          onChange: _,
          onDebouncedChange: y,
          onBlur: C,
          onFocus: f,
          onTag: K,
          showClear: !0,
          "data-testid": `${r}-input`,
          customTagProps: {
            customProperties: {
              component_name: "InputCountry"
            }
          },
          ...l ? { disabled: !0 } : {},
          ...V ? { readOnly: !0 } : {}
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      te,
      {
        title: S,
        isOpen: j,
        close: B,
        items: E,
        featuredItems: G,
        selectedValue: L,
        showSearch: g ?? !1,
        showFeatured: T,
        featuredTitle: I,
        allTitle: b,
        searchPlaceholder: v,
        onSelect: R,
        onTag: o,
        expansible: "on",
        position: "middle",
        overlay: "on"
      }
    )
  ] });
};
export {
  de as InputCountry
};
