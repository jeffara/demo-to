import { jsx as e, jsxs as r, Fragment as O } from "react/jsx-runtime";
import { useTableColumnHeader as W } from "./hooks/useTableColumnHeader.js";
import { Checkbox as H } from "../../../../Atoms/Checkbox/Checkbox.js";
import { Icon as h } from "../../../../Atoms/Icon/Icon.js";
import { Text as m } from "../../../../Atoms/Text/Text.js";
import { TextWeight as u, TextSize as b, TextType as x } from "../../../../Atoms/Text/types.js";
import { STATE as a, SIZE as p } from "../../../../../utils/pattern.js";
import '../../../../../assets/TableColumnHeader.css';const $ = (l) => {
  const { label: t, minWidth: c, children: C, onClick: S } = l, _ = c !== void 0 ? { minWidth: c } : void 0, {
    rootClasses: T,
    controlState: i,
    labelColorVariant: k,
    isSkeleton: f,
    sortable: o,
    sortIconAsset: s,
    sortIconColor: N,
    showCheckbox: v,
    checkboxVariant: L,
    checkboxChecked: E,
    checkboxOnChange: g,
    ariaSort: y,
    isSortInteractive: I
  } = W(l), n = () => {
    if (t)
      return /* @__PURE__ */ e(
        m,
        {
          state: i,
          textType: x.Body,
          textSize: b.Medium,
          textWeight: u.Bold,
          colorVariant: k,
          children: t
        }
      );
  }, d = () => {
    if (!(!o || !s))
      return /* @__PURE__ */ e("span", { className: "table-column-header__sort-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(h, { asset: s, size: p.SMALL, state: a.ENABLED, color: N }) });
  }, M = () => /* @__PURE__ */ r("span", { className: "table-column-header__label-skeleton", "aria-hidden": "true", children: [
    n() ?? /* @__PURE__ */ e(
      m,
      {
        state: a.SKELETON,
        textType: x.Caption,
        textSize: b.Medium,
        textWeight: u.Bold,
        children: "Label"
      }
    ),
    o && /* @__PURE__ */ e(h, { asset: "ic_chevron_down", size: p.SMALL, state: a.SKELETON })
  ] }), z = () => /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      className: "table-column-header__sort-button",
      onClick: S,
      "aria-label": t ? `Ordenar coluna ${t}` : "Ordenar coluna",
      children: [
        t && /* @__PURE__ */ e("span", { className: "table-column-header__label", children: n() }),
        d()
      ]
    }
  ), A = () => /* @__PURE__ */ r(O, { children: [
    t && /* @__PURE__ */ e("span", { className: "table-column-header__label", children: n() }),
    d()
  ] });
  return /* @__PURE__ */ e(
    "th",
    {
      "data-testid": "TableColumnHeader",
      className: T,
      scope: "col",
      style: _,
      "aria-sort": o ? y : void 0,
      children: /* @__PURE__ */ r("div", { className: "table-column-header__content", children: [
        v && /* @__PURE__ */ e(
          "div",
          {
            className: "table-column-header__checkbox",
            onClick: (B) => B.stopPropagation(),
            children: /* @__PURE__ */ e(
              H,
              {
                variant: L,
                state: i,
                checked: E,
                onChange: g
              }
            )
          }
        ),
        f ? M() : I ? z() : A(),
        C
      ] })
    }
  );
};
export {
  $ as TableColumnHeader
};
