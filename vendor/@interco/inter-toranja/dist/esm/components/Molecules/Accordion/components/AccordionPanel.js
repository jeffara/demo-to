import { jsx as i, jsxs as h, Fragment as v } from "react/jsx-runtime";
import { ANIMATION_CONFIG as e } from "../hooks/useAccordionAnimations.js";
import { CONTENT_VARIANT as p } from "../types.js";
import { resolveAccordionChildren as O } from "../utils/resolveAccordionChildren.js";
import { classNamesMerge as f } from "../../../../utils/classNamesMerge.js";
import { AnimatePresence as C } from "../../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as n } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const b = ({
  isSkeleton: r,
  contentId: a,
  showContent: d,
  expand: o,
  contentVariant: t,
  children: m,
  showDivider: c,
  isAccordionFocused: s,
  variants: l,
  controls: N,
  contentControls: A,
  contentVariants: _
}) => /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(
  n.div,
  {
    id: r ? void 0 : a,
    animate: N,
    variants: l,
    transition: {
      duration: e.ACCORDION_EXPAND.duration,
      ease: e.ACCORDION_EXPAND.ease
    },
    children: !r && /* @__PURE__ */ h(v, { children: [
      d && /* @__PURE__ */ i(
        n.div,
        {
          initial: o ? "visible" : "hidden",
          animate: A,
          variants: _,
          exit: o ? "hidden" : "visible",
          className: "accordion__content",
          children: O(m, t ?? p.SLOT)
        }
      ),
      c && /* @__PURE__ */ i(
        "hr",
        {
          className: f("accordion__divider", {
            "accordion__divider--hidden": s
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
