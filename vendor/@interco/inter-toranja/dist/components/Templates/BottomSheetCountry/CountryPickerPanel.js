import { jsxs as r, jsx as t, Fragment as M } from "react/jsx-runtime";
import { useId as R } from "react";
import { useBottomSheetCountry as j } from "./hooks/useBottomSheetCountry.js";
import { Flag as G } from "../../Atoms/Flag/Flag.js";
import { Text as p } from "../../Atoms/Text/Text.js";
import { TextWeight as L, TextSize as u, TextType as y } from "../../Atoms/Text/types.js";
import { InputSearch as V } from "../../Molecules/InputSearch/InputSearch.js";
import { ListItemControl as W } from "../../Molecules/ListItemControl/ListItemControl.js";
import { SectionTitle as f } from "../../Molecules/SectionTitle/SectionTitle.js";
import { classNamesMerge as A } from "../../../utils/classNamesMerge.js";
import '../../../assets/CountryPickerPanel.css';const g = (e, o, s, l, i) => /* @__PURE__ */ t(
  W,
  {
    label: e.label,
    paragraph: e.description,
    selected: o,
    showDivider: !1,
    trailingVariant: "radio",
    trailingProps: {
      checked: o,
      value: e.value,
      name: s,
      id: `${s}-${l}-${e.value}`,
      onRadioChange: () => i(e)
    },
    leadingProps: {
      type: "slot",
      slotProps: {
        children: /* @__PURE__ */ t(G, { iconFlag: e.flag, size: "medium", contentDescription: e.label })
      }
    },
    onClick: () => i(e)
  },
  `${l}-${e.value}`
), Z = (e) => {
  const {
    onTag: o,
    variant: s = "sheet",
    radioGroupId: l,
    "data-testid": i = "BottomSheetCountry"
  } = e, v = R().replace(/:/g, ""), n = `bottom-sheet-country-radio-${l ?? v}`, {
    rootClasses: C,
    searchClasses: S,
    emptyClasses: T,
    listClasses: c,
    searchTerm: x,
    searchPlaceholder: I,
    featuredTitle: w,
    allTitle: N,
    sortedFilteredItems: b,
    filteredFeaturedItems: F,
    shouldShowSearch: P,
    shouldShowFeaturedSection: $,
    shouldShowAllTitle: D,
    shouldShowEmptyState: d,
    emptyTitle: z,
    emptyDescription: B,
    handleSearchChange: _,
    handleSelect: h,
    isItemSelected: m
  } = j(e), k = A(C, {
    "bottom-sheet-country--popover": s === "popover"
  });
  return /* @__PURE__ */ r("div", { "data-testid": i, className: k, children: [
    P && /* @__PURE__ */ t("div", { className: S, children: /* @__PURE__ */ t(
      V,
      {
        value: x,
        placeholder: I,
        onChange: _,
        onTag: o,
        showClear: !0
      }
    ) }),
    d && /* @__PURE__ */ r(
      "div",
      {
        className: T,
        "data-testid": "BottomSheetCountry-empty",
        role: "status",
        "aria-live": "polite",
        children: [
          /* @__PURE__ */ t(
            p,
            {
              textType: y.Title,
              textSize: u.Medium,
              textWeight: L.Medium,
              as: "h3",
              children: z
            }
          ),
          /* @__PURE__ */ t(p, { textType: y.Body, textSize: u.Large, colorVariant: "secondary", as: "p", children: B })
        ]
      }
    ),
    !d && /* @__PURE__ */ r(M, { children: [
      $ && /* @__PURE__ */ r("section", { className: "bottom-sheet-country__section", children: [
        /* @__PURE__ */ t(
          f,
          {
            title: w,
            showIcon: !1,
            showDescription: !1,
            onTag: o
          }
        ),
        /* @__PURE__ */ t("div", { className: c, children: F.map(
          (a) => g(
            a,
            m(a.value),
            n,
            "featured",
            h
          )
        ) })
      ] }),
      /* @__PURE__ */ r("section", { className: "bottom-sheet-country__section", children: [
        D && /* @__PURE__ */ t(
          f,
          {
            title: N,
            showIcon: !1,
            showDescription: !1,
            onTag: o
          }
        ),
        /* @__PURE__ */ t("div", { className: c, children: b.map(
          (a) => g(
            a,
            m(a.value),
            n,
            "all",
            h
          )
        ) })
      ] })
    ] })
  ] });
};
export {
  Z as CountryPickerPanel
};
