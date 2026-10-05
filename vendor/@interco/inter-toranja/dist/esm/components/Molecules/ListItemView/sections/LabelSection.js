import { jsxs as f, Fragment as h, jsx as t } from "react/jsx-runtime";
import { IconColors as x } from "../../../Atoms/Icon/constants/iconColors.js";
import { TextWeight as y, TextSize as T, TextType as I } from "../../../Atoms/Text/types.js";
import { STATE as L, SIZE as S, TAGGING_EVENT as b } from "../../../../utils/pattern.js";
import { Text as u } from "../../../Atoms/Text/Text.js";
import { Icon as A } from "../../../Atoms/Icon/Icon.js";
const z = ({
  label: o,
  helper: c,
  isEnabled: r,
  className: a,
  helperOnClick: i,
  onTag: l,
  state: d,
  orientation: p
}) => {
  const n = !!(c && r), m = n ? {
    tabIndex: 0,
    role: "button",
    onClick: () => {
      i && i(), l && l((e) => ({
        ...e,
        name: b.INTERACTION_CLICK,
        ComponentProperties: {
          component_name: "ListItemView",
          state: d,
          orietation: p,
          label: o
        }
      }));
    },
    onKeyDown: (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i && i());
    },
    "aria-label": typeof o == "string" ? o : void 0
  } : {}, s = /* @__PURE__ */ f(h, { children: [
    r && /* @__PURE__ */ t(
      u,
      {
        as: "span",
        textType: I.Label,
        textSize: T.Medium,
        textWeight: y.Regular,
        children: o
      }
    ),
    n && /* @__PURE__ */ t("span", { "data-testid": "help-icon", children: /* @__PURE__ */ t(
      A,
      {
        asset: "ic_help_circle",
        size: S.SMALL,
        state: L.ENABLED,
        color: x.Neutral.Secondary
      }
    ) })
  ] });
  return n ? /* @__PURE__ */ t("label", { className: a, "data-testid": "label", ...m, children: s }) : /* @__PURE__ */ t("div", { className: a, "data-testid": "label", children: s });
};
export {
  z as LabelSection
};
