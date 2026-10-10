import { jsxs as m, jsx as s } from "react/jsx-runtime";
import { useMemo as O } from "react";
import { TimelineFillingEnum as P, SegmentedControlDensityEnum as K, SegmentedControlClass as g } from "./enums.js";
import { resolveSegmentedControlDensity as M, isIconOnlySegment as R, resolveSegmentIconSize as $, getSegmentKey as w } from "./utils/segmentHelpers.js";
import { Icon as z } from "../../Atoms/Icon/Icon.js";
import { TAGGING_EVENT as B } from "../../../utils/pattern.js";
import { useSegmentedControlState as j } from "./hooks/useSegmentedControlState.js";
import { useSegmentedControlBackground as H } from "./hooks/useSegmentedControlBackground.js";
import { useSegmentedControlClasses as V } from "./hooks/useSegmentedControlClasses.js";
import { useSegmentedControlProperties as F } from "./hooks/useSegmentedControlProperties.js";
import '../../../assets/SegmentedControl.css';const ee = ({
  segments: n,
  onClick: C,
  state: l,
  onTag: a,
  filling: p,
  density: u
}) => {
  const r = M(u), [c, S] = j(n), [i, f, y] = H(
    c,
    n.length
  ), b = O(
    () => n.every((e) => R(e)),
    [n]
  ), I = p === P.HUG && b, v = r === K.COMPACT, N = $(r), { containerClass: E, getSegmentClasses: T, getTextClasses: h } = V(
    l,
    I,
    v
  ), { segmentProperties: k, getSelectedSegmentProperties: A } = F(n), d = (e, t) => {
    a && a((o) => ({
      ...o,
      name: B.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "SegmentedControl",
        segments: k,
        density: r,
        state: l,
        ...A(e)
      }
    })), !e.disabled && (S(t), C(e, t));
  }, D = (e, t) => (o) => {
    (o.key === "Enter" || o.key === " ") && d(e, t);
  }, G = {
    ...i,
    position: "absolute",
    opacity: i.width === "0px" ? 0 : 1
  };
  return /* @__PURE__ */ m("div", { ref: f, className: E, "data-testid": "segmented-control", children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: g.SEGMENT_ACTIVE_BG,
        "data-testid": "segmented-control-active-background",
        style: G,
        "aria-hidden": !0
      }
    ),
    n.map((e, t) => {
      const o = c === t;
      return /* @__PURE__ */ s(
        "div",
        {
          ref: (_) => {
            y.current[t] = _;
          },
          className: T(o, !!e.disabled),
          "data-testid": `segmented-control-item-${t}`,
          ...!e.disabled && {
            onClick: () => d(e, t),
            role: "button",
            tabIndex: 0,
            onKeyDown: D(e, t)
          },
          children: /* @__PURE__ */ m(
            "div",
            {
              className: g.TEXT_CONTAINER,
              "data-testid": `segmented-control-item-text-container-${t}`,
              children: [
                "icon" in e && e.icon && /* @__PURE__ */ s("div", { "data-testid": `segmented-control-item-icon-${t}`, children: /* @__PURE__ */ s(z, { asset: e.icon, state: "enabled", size: N }) }),
                "label" in e && e.label && /* @__PURE__ */ s(
                  "span",
                  {
                    className: h(o),
                    "data-testid": `segmented-control-item-label-${t}`,
                    children: e.label
                  }
                )
              ]
            }
          )
        },
        w(e, t)
      );
    })
  ] });
};
export {
  ee as SegmentedControl
};
