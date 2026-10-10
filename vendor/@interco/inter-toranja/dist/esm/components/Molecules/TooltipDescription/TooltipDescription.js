import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { r as R } from "../../../_virtual/index.js";
import '../../../assets/components/Molecules/TooltipDescription/TooltipDescription.modules.css';/* empty css                                */
import { useTooltipDescription as z } from "./hooks/useTooltipDescription.js";
import { Text as n } from "../../Atoms/Text/Text.js";
import { TextColorScheme as c, TextWeight as p, TextSize as m, TextType as d } from "../../Atoms/Text/types.js";
const V = (h) => {
  const {
    hasDescription: x,
    isOpen: f,
    showTitle: T,
    title: o,
    description: g,
    placement: i,
    tooltipId: v,
    rootClasses: u,
    triggerClasses: C,
    panelClasses: N,
    contentClasses: S,
    caretRowClasses: y,
    caretClasses: D,
    trigger: L,
    triggerRef: P,
    panelRef: b,
    panelStyle: t,
    handleHoverOpen: s,
    handleHoverClose: a
  } = z(h), l = /* @__PURE__ */ e(
    "div",
    {
      className: y,
      "aria-hidden": !0,
      style: { transform: `translateX(${t.caretShift}px)` },
      children: /* @__PURE__ */ e("span", { className: D })
    }
  );
  return /* @__PURE__ */ r(
    "div",
    {
      className: u,
      "data-testid": "TooltipDescription",
      onPointerEnter: s,
      onPointerLeave: a,
      children: [
        /* @__PURE__ */ e("div", { className: C, ref: P, children: L }),
        f && x && R.createPortal(
          /* @__PURE__ */ r(
            "div",
            {
              ref: b,
              className: N,
              id: v,
              role: "tooltip",
              style: { top: t.top, left: t.left },
              onPointerEnter: s,
              onPointerLeave: a,
              children: [
                i === "bottom" && l,
                /* @__PURE__ */ r("div", { className: S, children: [
                  T && o && /* @__PURE__ */ e(
                    n,
                    {
                      as: "p",
                      textType: d.Label,
                      textSize: m.Large,
                      textWeight: p.Bold,
                      colorScheme: c.Neutral,
                      colorVariant: "inverse",
                      children: o
                    }
                  ),
                  /* @__PURE__ */ e(
                    n,
                    {
                      as: "p",
                      textType: d.Label,
                      textSize: m.Medium,
                      textWeight: p.Regular,
                      colorScheme: c.Neutral,
                      colorVariant: "inverse",
                      children: g
                    }
                  )
                ] }),
                i === "top" && l
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
};
export {
  V as TooltipDescription
};
