import { jsx as t, jsxs as a, Fragment as R } from "react/jsx-runtime";
import { useId as V } from "react";
import { useBottomSheetCountry as W } from "./hooks/useBottomSheetCountry.js";
import { Flag as A } from "../../Atoms/Flag/Flag.js";
import { Text as y } from "../../Atoms/Text/Text.js";
import { TextWeight as E, TextSize as f, TextType as S } from "../../Atoms/Text/types.js";
import { BottomSheet as G } from "../../Molecules/BottomSheet/BottomSheet.js";
import { InputSearch as O } from "../../Molecules/InputSearch/InputSearch.js";
import { ListItemControl as q } from "../../Molecules/ListItemControl/ListItemControl.js";
import { SectionTitle as g } from "../../Molecules/SectionTitle/SectionTitle.js";
import '../../../assets/components/Templates/BottomSheetCountry/BottomSheetCountry.modules.css';/* empty css                                */
const v = (e, r, l, s, i) => /* @__PURE__ */ t(
  q,
  {
    label: e.label,
    paragraph: e.description,
    selected: r,
    showDivider: !1,
    trailingVariant: "radio",
    trailingProps: {
      checked: r,
      value: e.value,
      name: l,
      id: `${l}-${s}-${e.value}`,
      onRadioChange: () => i(e)
    },
    leadingProps: {
      type: "slot",
      slotProps: {
        children: /* @__PURE__ */ t(A, { iconFlag: e.flag, size: "medium", contentDescription: e.label })
      }
    },
    onClick: () => i(e)
  },
  `${s}-${e.value}`
), ae = (e) => {
  const { title: r, isOpen: l, close: s, overlay: i, expansible: C, position: T, onTag: n, id: c } = e, x = V().replace(/:/g, ""), d = `bottom-sheet-country-radio-${c ?? x}`, {
    rootClasses: w,
    searchClasses: I,
    emptyClasses: b,
    listClasses: h,
    searchTerm: N,
    searchPlaceholder: B,
    featuredTitle: F,
    allTitle: $,
    sortedFilteredItems: D,
    filteredFeaturedItems: z,
    shouldShowSearch: P,
    shouldShowFeaturedSection: _,
    shouldShowAllTitle: j,
    shouldShowEmptyState: m,
    emptyTitle: k,
    emptyDescription: L,
    handleSearchChange: M,
    handleSelect: p,
    isItemSelected: u
  } = W(e);
  return /* @__PURE__ */ t(
    G,
    {
      title: r,
      isOpen: l,
      close: s,
      overlay: i,
      expansible: C,
      position: T,
      onTag: n,
      id: c,
      slot: /* @__PURE__ */ a("div", { "data-testid": "BottomSheetCountry", className: w, children: [
        P && /* @__PURE__ */ t("div", { className: I, children: /* @__PURE__ */ t(
          O,
          {
            value: N,
            placeholder: B,
            onChange: M,
            onTag: n,
            showClear: !0
          }
        ) }),
        m && /* @__PURE__ */ a(
          "div",
          {
            className: b,
            "data-testid": "BottomSheetCountry-empty",
            role: "status",
            "aria-live": "polite",
            children: [
              /* @__PURE__ */ t(
                y,
                {
                  textType: S.Title,
                  textSize: f.Medium,
                  textWeight: E.Medium,
                  as: "h3",
                  children: k
                }
              ),
              /* @__PURE__ */ t(
                y,
                {
                  textType: S.Body,
                  textSize: f.Large,
                  colorVariant: "secondary",
                  as: "p",
                  children: L
                }
              )
            ]
          }
        ),
        !m && /* @__PURE__ */ a(R, { children: [
          _ && /* @__PURE__ */ a("section", { className: "bottom-sheet-country__section", children: [
            /* @__PURE__ */ t(
              g,
              {
                title: F,
                showIcon: !1,
                showDescription: !1,
                onTag: n
              }
            ),
            /* @__PURE__ */ t("div", { className: h, children: z.map(
              (o) => v(
                o,
                u(o.value),
                d,
                "featured",
                p
              )
            ) })
          ] }),
          /* @__PURE__ */ a("section", { className: "bottom-sheet-country__section", children: [
            j && /* @__PURE__ */ t(
              g,
              {
                title: $,
                showIcon: !1,
                showDescription: !1,
                onTag: n
              }
            ),
            /* @__PURE__ */ t("div", { className: h, children: D.map(
              (o) => v(
                o,
                u(o.value),
                d,
                "all",
                p
              )
            ) })
          ] })
        ] })
      ] })
    }
  );
};
export {
  ae as BottomSheetCountry
};
