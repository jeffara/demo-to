import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { useId as G, useMemo as _ } from "react";
import { TimelineFillingEnum as A, SegmentedControlClass as i } from "./enums.js";
import { isIconOnlySegment as $, getSegmentKey as K } from "./utils/segmentHelpers.js";
import { Icon as O } from "../../Atoms/Icon/Icon.js";
import { TAGGING_EVENT as P } from "../../../utils/pattern.js";
import { useSegmentedControlState as R } from "./hooks/useSegmentedControlState.js";
import { useSegmentedControlBackground as M } from "./hooks/useSegmentedControlBackground.js";
import { useSegmentedControlClasses as j } from "./hooks/useSegmentedControlClasses.js";
import { useSegmentedControlProperties as w } from "./hooks/useSegmentedControlProperties.js";
import { m as B } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/SegmentedControl.css';const W = ({
  segments: n,
  onClick: m,
  state: s,
  onTag: l,
  filling: g
}) => {
  const C = G(), [a, p] = R(n), [u, f, I] = M(
    a,
    n.length
  ), S = _(
    () => n.every((e) => $(e)),
    [n]
  ), b = g === A.HUG && S, { containerClass: N, getSegmentClasses: y, getTextClasses: E } = j(
    s,
    b
  ), { segmentProperties: T, getSelectedSegmentProperties: v } = w(n), c = (e, t) => {
    l && l((o) => ({
      ...o,
      name: P.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "SegmentedControl",
        segments: T,
        state: s,
        ...v(e)
      }
    })), !e.disabled && (p(t), m(e, t));
  }, h = (e, t) => (o) => {
    (o.key === "Enter" || o.key === " ") && c(e, t);
  };
  return /* @__PURE__ */ d("div", { ref: f, className: N, "data-testid": "segmented-control", children: [
    n.map((e, t) => {
      const o = a === t;
      return /* @__PURE__ */ r(
        "div",
        {
          ref: (k) => {
            I.current[t] = k;
          },
          className: y(o, !!e.disabled),
          "data-testid": `segmented-control-item-${t}`,
          ...!e.disabled && {
            onClick: () => c(e, t),
            role: "button",
            tabIndex: 0,
            onKeyDown: h(e, t)
          },
          children: /* @__PURE__ */ d(
            "div",
            {
              className: i.TEXT_CONTAINER,
              "data-testid": `segmented-control-item-text-container-${t}`,
              children: [
                "icon" in e && e.icon && /* @__PURE__ */ r("div", { "data-testid": `segmented-control-item-icon-${t}`, children: /* @__PURE__ */ r(O, { asset: e.icon, state: "enabled", size: "small" }) }),
                "label" in e && e.label && /* @__PURE__ */ r(
                  "span",
                  {
                    className: E(o),
                    "data-testid": `segmented-control-item-label-${t}`,
                    children: e.label
                  }
                )
              ]
            }
          )
        },
        K(e, t)
      );
    }),
    /* @__PURE__ */ r(
      B.div,
      {
        layoutId: `active-background-${C}`,
        className: i.SEGMENT_ACTIVE_BG,
        "data-testid": "segmented-control-active-background",
        style: u
      }
    )
  ] });
};
export {
  W as SegmentedControl
};
