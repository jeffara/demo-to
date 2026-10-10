import { jsxs as k, jsx as e } from "react/jsx-runtime";
import { useCallback as ae } from "react";
import { useInputCountry as le } from "./hooks/useInputCountry.js";
import { DATE_PICKER_POPOVER_VARIANTS as ne } from "../InputDate/utils/pickerAnimation.js";
import { InputText as ie } from "../InputText/InputText.js";
import { Select as ce } from "../Select/Select.js";
import { BottomSheetCountry as de } from "../../Templates/BottomSheetCountry/BottomSheetCountry.js";
import { CountryPickerPanel as ue } from "../../Templates/BottomSheetCountry/CountryPickerPanel.js";
import { A as me } from "../../../index-CDYq4efL.js";
import { m as pe } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/InputCountry.css';const be = (s) => {
  const {
    label: v,
    placeholder: b,
    value: g,
    defaultValue: w,
    hints: x,
    error: r,
    mask: A,
    onDebouncedChange: O,
    onBlur: R,
    onFocus: F,
    bottomSheetTitle: a,
    showCountrySearch: l,
    showCountryFeatured: n,
    countryFeaturedTitle: i,
    countryAllTitle: c,
    countrySearchPlaceholder: d,
    onTag: t
  } = s, {
    rootClasses: N,
    fieldsClasses: D,
    selectClasses: V,
    inputClasses: _,
    pickerClasses: E,
    dataTestId: o,
    resolvedState: j,
    selectState: B,
    showHint: L,
    isDisabled: u,
    isSelectReadOnly: $,
    isInputReadOnly: H,
    isPickerOpen: m,
    isDesktop: p,
    pickerId: J,
    closePicker: h,
    handleSelectClick: K,
    handleCountrySelect: f,
    handleChange: M,
    resolvedPrefix: q,
    resolvedFlag: z,
    resolvedPhoneType: G,
    resolvedSelectedValue: y,
    selectAccessibleLabel: C,
    selectId: Q,
    inputId: U,
    countryItems: I,
    featuredCountryItems: P,
    rootRef: W,
    pickerRef: X,
    selectContainerRef: Y
  } = le(s), Z = ae(
    (re) => {
      t && t((oe) => {
        const S = re(oe), T = Array.isArray(r) ? r.filter((se) => se.trim() !== "") : [];
        return {
          ...S,
          ComponentProperties: {
            ...S.ComponentProperties,
            component_name: "InputCountry",
            ...T.length > 0 ? { error: JSON.stringify(T) } : {}
          }
        };
      });
    },
    [t, r]
  ), ee = p && m, te = a ?? C;
  return /* @__PURE__ */ k("div", { ref: W, "data-testid": o, className: N, children: [
    /* @__PURE__ */ k("div", { className: D, children: [
      /* @__PURE__ */ e("div", { ref: Y, className: V, children: /* @__PURE__ */ e(
        ce,
        {
          id: Q,
          label: C,
          state: B,
          showFlag: !0,
          showContent: !1,
          flag: z,
          onClick: K,
          "data-testid": `${o}-select`,
          ...u ? { disabled: !0 } : {},
          ...$ ? { readOnly: !0 } : {}
        }
      ) }),
      /* @__PURE__ */ e("div", { className: _, children: /* @__PURE__ */ e(
        ie,
        {
          id: U,
          label: v,
          placeholder: b,
          value: g,
          defaultValue: w,
          prefix: q,
          state: j,
          showHint: L,
          hints: x,
          error: r,
          mask: A,
          phoneType: G,
          onChange: M,
          onDebouncedChange: O,
          onBlur: R,
          onFocus: F,
          onTag: Z,
          showClear: !0,
          "data-testid": `${o}-input`,
          customTagProps: {
            customProperties: {
              component_name: "InputCountry"
            }
          },
          ...u ? { disabled: !0 } : {},
          ...H ? { readOnly: !0 } : {}
        }
      ) })
    ] }),
    !p && /* @__PURE__ */ e(
      de,
      {
        title: a,
        isOpen: m,
        close: () => h(),
        items: I,
        featuredItems: P,
        selectedValue: y,
        showSearch: l ?? !1,
        showFeatured: n,
        featuredTitle: i,
        allTitle: c,
        searchPlaceholder: d,
        onSelect: f,
        onTag: t,
        expansible: "on",
        position: "middle",
        overlay: "on"
      }
    ),
    /* @__PURE__ */ e(me, { children: ee && /* @__PURE__ */ e(
      pe.div,
      {
        ref: X,
        id: J,
        className: E,
        role: "dialog",
        "aria-label": te,
        tabIndex: -1,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        variants: ne,
        children: /* @__PURE__ */ e(
          ue,
          {
            variant: "popover",
            items: I,
            featuredItems: P,
            selectedValue: y,
            showSearch: l ?? !1,
            showFeatured: n,
            featuredTitle: i,
            allTitle: c,
            searchPlaceholder: d,
            onSelect: f,
            close: () => h({ restoreFocus: !0 }),
            onTag: t,
            "data-testid": "InputCountry-country-picker"
          }
        )
      },
      "input-country-picker"
    ) })
  ] });
};
export {
  be as InputCountry
};
