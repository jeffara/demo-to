import { jsxs as I, jsx as l } from "react/jsx-runtime";
import f from "react";
import { useAccordionAnimations as _ } from "./hooks/useAccordionAnimations.js";
import { useAccordionHandlers as j } from "./hooks/useAccordionHandlers.js";
import { useAccordionState as K } from "./hooks/useAccordionState.js";
import { useAccordionTagging as L } from "./hooks/useAccordionTagging.js";
import { CONTENT_VARIANT as M } from "./types.js";
import { TextSize as O } from "../../Atoms/Text/types.js";
import { classNamesMerge as V } from "../../../utils/classNamesMerge.js";
import { STATE as z } from "../../../utils/pattern.js";
import '../../../assets/components/Molecules/Accordion/Accordion.modules.css';/* empty css                       */
import { AccordionSummary as B } from "./components/AccordionSummary.js";
import { AccordionPanel as F } from "./components/AccordionPanel.js";
import { AccordionSlot as H } from "./components/AccordionSlot.js";
import { AccordionText as P } from "./components/AccordionText.js";
const p = ({
  title: n,
  description: c,
  expand: i = !1,
  showLeading: t = !1,
  leading: a,
  sizeTitle: A = O.Medium,
  showDivider: u = !1,
  state: e = z.ENABLED,
  contentVariant: g = M.SLOT,
  children: T,
  onTag: S
}) => {
  const s = f.useRef(null), { isExpanded: o, isDisabled: m, isSkeleton: r, toggleExpanded: x, isAccordionFocused: C } = K({
    expand: i,
    state: e,
    accordionRef: s
  }), { showContent: E, setShowContent: N, variants: b, controls: h, contentControls: k, contentVariants: y } = _({
    isExpanded: o
  }), { handleTagging: D } = L({
    state: e,
    title: n,
    description: c,
    isExpanded: o,
    showLeading: t,
    leading: a,
    onTag: S
  }), { handleClick: R, handleKeyDown: v } = j({
    state: e,
    isExpanded: o,
    toggleExpanded: x,
    handleTagging: D,
    setShowContent: N
  }), d = `accordion-content${f.useId().replace(/:/g, "")}`, w = r ? "Carregando" : n;
  return /* @__PURE__ */ I(
    "div",
    {
      className: V("accordion", {
        "accordion--expanded": o,
        "accordion--disabled": m,
        "accordion--skeleton": r
      }),
      role: "region",
      "aria-label": w,
      "aria-busy": r ? !0 : void 0,
      ref: s,
      children: [
        /* @__PURE__ */ l(
          B,
          {
            title: n,
            description: c,
            contentId: d,
            sizeTitle: A,
            showLeading: t,
            leading: a,
            isExpanded: o,
            isDisabled: m,
            isSkeleton: r,
            onClick: R,
            onKeyDown: v
          }
        ),
        /* @__PURE__ */ l(
          F,
          {
            isSkeleton: r,
            contentId: d,
            showContent: E,
            expand: i,
            contentVariant: g,
            children: T,
            showDivider: u,
            isAccordionFocused: C,
            variants: b,
            controls: h,
            contentControls: k,
            contentVariants: y
          }
        )
      ]
    }
  );
};
p.Slot = H;
p.Text = P;
export {
  p as Accordion
};
