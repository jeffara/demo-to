import { jsx as i, jsxs as h, Fragment as v } from "react/jsx-runtime";
import { ANIMATION_CONFIG as e } from "../hooks/useAccordionAnimations.js";
import { CONTENT_VARIANT as p } from "../types.js";
import { resolveAccordionChildren as O } from "../utils/resolveAccordionChildren.js";
import { classNamesMerge as f } from "../../../../utils/classNamesMerge.js";
import { A as C } from "../../../../index-CDYq4efL.js";
import { m as a } from "../../../../proxy-BBnpZ6GV.js";
const b = ({
  isSkeleton: r,
  contentId: n,
  showContent: d,
  expand: o,
  contentVariant: m,
  children: t,
  showDivider: s,
  isAccordionFocused: c,
  variants: l,
  controls: N,
  contentControls: A,
  contentVariants: _
}) => /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(
  a.div,
  {
    id: r ? void 0 : n,
    animate: N,
    variants: l,
    transition: {
      duration: e.ACCORDION_EXPAND.duration,
      ease: e.ACCORDION_EXPAND.ease
    },
    children: !r && /* @__PURE__ */ h(v, { children: [
      d && /* @__PURE__ */ i(
        a.div,
        {
          initial: o ? "visible" : "hidden",
          animate: A,
          variants: _,
          exit: o ? "hidden" : "visible",
          className: "accordion__content",
          children: O(t, m ?? p.SLOT)
        }
      ),
      s && /* @__PURE__ */ i(
        "hr",
        {
          className: f("accordion__divider", {
            "accordion__divider--hidden": c
          }),
          role: "separator"
        }
      )
    ] })
  }
) });
export {
  b as AccordionPanel
};
