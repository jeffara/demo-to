import { jsx as e } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Chip/Chip.modules.css';/* empty css                  */
import { Flag as E } from "../../Atoms/Flag/Flag.js";
import { Icon as _ } from "../../Atoms/Icon/Icon.js";
import { Spinner as b } from "../../Atoms/ProgressIndicator/Spinner/Spinner.js";
import { classNamesMerge as y } from "../../../utils/classNamesMerge.js";
import { STATE as r, TAGGING_EVENT as A } from "../../../utils/pattern.js";
const F = ({
  label: d,
  onClick: n,
  onTag: f,
  state: t = r.ENABLED,
  selected: p = !1,
  leadingIcon: l,
  trailingIcon: o,
  variant: h = "default",
  flagIcon: u = "ic_flag_brazil",
  ...g
}) => {
  const a = t === r.DISABLED, c = t === r.SKELETON, s = t === r.LOADING, m = h === "flag", N = y("chip", {
    "chip--disabled": a,
    "chip--selected": p,
    "chip--default": !p,
    "chip--skeleton": c,
    "chip--loading": s,
    "chip--flag": m
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: N,
      onClick: (i) => {
        if (a || c || s) {
          i.preventDefault();
          return;
        }
        f && f((D) => ({
          ...D,
          name: A.INTERACTION_CLICK,
          ComponentProperties: {
            component_name: "Chip",
            selected: p,
            state: t,
            label: d,
            variant: h,
            show_leading_icon: !!l,
            leading_icon: l,
            show_trailing_icon: !!o,
            trailing_icon: o,
            flag_icon: m ? u : void 0
          }
        })), n && n();
      },
      "aria-busy": s,
      onKeyDown: (i) => {
        a || s || (i.key === "Enter" || i.key === " ") && (i.preventDefault(), n == null || n());
      },
      role: "button",
      tabIndex: 0,
      ...g,
      "aria-disabled": a || s,
      children: (() => {
        const i = [];
        return s ? i.push(/* @__PURE__ */ e(b, { size: "small", variant: "default" }, "spinner")) : (m ? i.push(
          /* @__PURE__ */ e(
            E,
            {
              iconFlag: u,
              size: "small",
              state: a ? "disabled" : c ? "skeleton" : "enabled"
            },
            "flag"
          )
        ) : l && i.push(
          /* @__PURE__ */ e("div", { "data-testid": "leading-icon", children: /* @__PURE__ */ e(_, { asset: l, size: "small" }, "leading-icon") })
        ), d && i.push(
          /* @__PURE__ */ e("span", { className: "type-label-medium-medium", children: d }, "label")
        ), o && i.push(
          /* @__PURE__ */ e("div", { "data-testid": "trailing-icon", className: "chip__trailing-icon", children: /* @__PURE__ */ e(_, { asset: o, size: "small" }, "trailing-icon") })
        )), i;
      })()
    }
  );
};
export {
  F as Chip
};
