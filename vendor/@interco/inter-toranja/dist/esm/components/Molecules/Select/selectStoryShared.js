import { jsxs as p, Fragment as c, jsx as e } from "react/jsx-runtime";
import { useState as s } from "react";
import { Select as a } from "./Select.js";
import { STATE as o } from "../../../utils/pattern.js";
import { action as g } from "../../../node_modules/@storybook/addon-actions/dist/chunk-4XZ63LWV.js";
const t = [
  { value: "BR", label: "Brasil" },
  { value: "AR", label: "Argentina" },
  { value: "US", label: "Estados Unidos" },
  { value: "PT", label: "Portugal" },
  { value: "MX", label: "México" }
], O = [
  {
    value: "BR",
    label: "Brasil",
    leadingProps: { type: "flag", flagProps: "brazil" },
    trailingProps: {
      type: "tagChevron",
      tagChevronProps: { showTag: !0, tagLabel: "Local", tagColor: "brand" }
    }
  },
  {
    value: "AR",
    label: "Argentina",
    leadingProps: { type: "flag", flagProps: "argentina" }
  },
  {
    value: "US",
    label: "Estados Unidos",
    leadingProps: { type: "flag", flagProps: "unitedStates" }
  }
], S = [
  {
    value: "checking",
    label: "Conta corrente",
    leadingProps: {
      type: "icon",
      iconProps: {
        asset: "ic_orange",
        size: "medium",
        color: "Icon/Neutral/Primary",
        contentDescription: "Conta corrente"
      }
    },
    trailingProps: { type: "text", textProps: { labelTrailing: "Principal" } }
  },
  {
    value: "savings",
    label: "Poupança",
    leadingProps: {
      type: "icon",
      iconProps: {
        asset: "ic_star",
        size: "medium",
        color: "Icon/Neutral/Primary",
        contentDescription: "Poupança"
      }
    },
    trailingProps: {
      type: "tagChevron",
      tagChevronProps: { showTag: !0, tagLabel: "Novo", tagColor: "brand" }
    }
  },
  {
    value: "credit",
    label: "Cartão de crédito",
    leadingProps: {
      type: "icon",
      iconProps: {
        asset: "ic_orange",
        size: "medium",
        color: "Icon/Neutral/Primary",
        contentDescription: "Cartão de crédito"
      }
    },
    trailingProps: { type: "badge", badgeProps: { showBadge: !0, badgeValue: 2 } }
  }
];
function l(n) {
  const r = n({ screen_name: "STORYBOOK" });
  g("onTag")(r);
}
function T() {
  return /* @__PURE__ */ p(c, { children: [
    /* @__PURE__ */ e(a, { label: "Label", state: o.ENABLED, value: "Opção selecionada", onTag: l }),
    /* @__PURE__ */ e(
      a,
      {
        label: "Label",
        state: o.ERROR,
        value: "Valor inválido",
        hints: ["Selecione uma opção válida"],
        onTag: l
      }
    ),
    /* @__PURE__ */ e(
      a,
      {
        label: "Label",
        state: o.READ_ONLY,
        value: "Somente leitura",
        readOnly: !0,
        onTag: l
      }
    )
  ] });
}
function y() {
  const [n, r] = s(t[0]), [i, u] = s(null);
  return /* @__PURE__ */ p(c, { children: [
    /* @__PURE__ */ e(
      a,
      {
        label: "Label",
        state: o.ENABLED,
        value: n.value,
        options: t,
        onOptionSelect: r,
        onTag: l
      }
    ),
    /* @__PURE__ */ e(
      a,
      {
        label: "Label",
        state: o.ERROR,
        value: (i == null ? void 0 : i.label) ?? "Valor inválido",
        hints: ["Selecione uma opção válida"],
        options: t,
        onOptionSelect: u,
        onTag: l
      }
    ),
    /* @__PURE__ */ e(
      a,
      {
        label: "Label",
        state: o.READ_ONLY,
        value: "Somente leitura",
        readOnly: !0,
        options: t,
        onTag: l
      }
    )
  ] });
}
export {
  S as ACCOUNT_OPTIONS_WITH_ICON,
  t as COUNTRY_OPTIONS,
  O as COUNTRY_OPTIONS_WITH_FLAG,
  y as SelectDesktopPreviewBands,
  T as SelectWebviewPreviewBands,
  l as onTag
};
