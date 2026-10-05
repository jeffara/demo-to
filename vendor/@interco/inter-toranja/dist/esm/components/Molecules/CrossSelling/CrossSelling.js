import { jsxs as c, jsx as s } from "react/jsx-runtime";
import '../../../assets/components/Molecules/CrossSelling/CrossSelling.modules.css';/* empty css                          */
import { CrossSellingVariant as x } from "./types.js";
import { Checkbox as I } from "../../Atoms/Checkbox/Checkbox.js";
import { Icon as v } from "../../Atoms/Icon/Icon.js";
import { Tag as z } from "../../Atoms/Tag/Tag.js";
import { Text as m } from "../../Atoms/Text/Text.js";
import { TextWeight as p, TextSize as _, TextType as h } from "../../Atoms/Text/types.js";
import { Link as L } from "../Link/Link.js";
import { STATE as N, MODIFIERS as y, SIZE as B, TAGGING_EVENT as D } from "../../../utils/pattern.js";
const V = ({
  state: i = N.ENABLED,
  variant: f = x.Chevron,
  tag: l,
  title: a = "Title",
  subtitle: g = "Pricing or Services",
  description: E = "Description",
  link: e,
  onClick: S,
  onTag: o,
  isChecked: u,
  onCheckboxChange: n
}) => {
  const t = i === N.SKELETON, T = (r) => {
    t || (o && o((d) => ({
      ...d,
      name: D.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "CrossSelling",
        variant: f,
        tag: l,
        title: a,
        pricing: g,
        description: E,
        link: e == null ? void 0 : e.label
      }
    })), S && S(r));
  }, C = (r) => {
    e != null && e.onClick && (r.preventDefault(), r.stopPropagation(), e.onClick(r));
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-testid": "cross-selling",
      className: `cross-selling${t ? y.SKELETON : y.ENABLED}`,
      tabIndex: t ? -1 : 0,
      onClick: T,
      onKeyPress: (r) => {
        (r.key === "Enter" || r.key === " ") && T(r);
      },
      children: [
        !t && l && /* @__PURE__ */ s(z, { label: l, color: "brand", hierarchy: "strong", size: "small" }),
        /* @__PURE__ */ c("div", { className: "cross-selling__container", children: [
          /* @__PURE__ */ c("div", { "data-testid": "cross-selling-header", className: "cross-selling__container__header", children: [
            /* @__PURE__ */ s(
              m,
              {
                as: "p",
                textType: h.Body,
                textSize: _.Medium,
                textWeight: p.Bold,
                state: i,
                children: a
              }
            ),
            /* @__PURE__ */ s("div", { className: "cross-selling__container__action", children: f === x.Checkbox ? /* @__PURE__ */ s(
              I,
              {
                checked: u,
                onChange: (r) => n == null ? void 0 : n(r),
                variant: "default",
                state: i
              }
            ) : /* @__PURE__ */ s("div", { className: `cross-selling__container__action__chevron--${i}`, children: /* @__PURE__ */ s(v, { asset: "ic_chevron_right", size: B.MEDIUM, state: i }) }) })
          ] }),
          /* @__PURE__ */ c(
            "div",
            {
              "data-testid": "cross-selling-description",
              className: "cross-selling__container__description",
              children: [
                /* @__PURE__ */ s(
                  m,
                  {
                    as: "p",
                    textType: h.Body,
                    textSize: _.Medium,
                    textWeight: p.Regular,
                    state: i,
                    children: g
                  }
                ),
                /* @__PURE__ */ s(
                  m,
                  {
                    as: "p",
                    textType: h.Body,
                    textSize: _.Small,
                    textWeight: p.Regular,
                    state: i,
                    children: E
                  }
                )
              ]
            }
          ),
          (e == null ? void 0 : e.href) && (e == null ? void 0 : e.label) && /* @__PURE__ */ s(
            L,
            {
              onTag: (r) => {
                o && o((d) => ({
                  ...d,
                  ...r(),
                  CustomParameters: {
                    nested_in: "CrossSelling",
                    nested_label: a
                  }
                }));
              },
              href: e.href,
              variant: "default",
              label: e.label,
              size: "small",
              state: i,
              onClick: C
            }
          )
        ] })
      ]
    }
  );
};
export {
  V as CrossSelling
};
