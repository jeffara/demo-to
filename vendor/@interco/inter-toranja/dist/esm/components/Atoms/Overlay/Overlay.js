import { jsx as n } from "react/jsx-runtime";
import { useEffect as y } from "react";
import { OVERLAY_VISIBILITY as t } from "./types.js";
import { classNamesMerge as d } from "../../../utils/classNamesMerge.js";
import { TAGGING_EVENT as p } from "../../../utils/pattern.js";
import '../../../assets/components/Atoms/Overlay/Overlay.modules.css';/* empty css                     */
import { useOverlay as K } from "./hooks/useOverlay.js";
import { AnimatePresence as v } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as E } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const A = ({
  isVisible: r = t.HIDDEN,
  onClick: m,
  onTag: o,
  id: i,
  className: s,
  useFade: I = !0
}) => {
  y(() => {
    r === t.VISIBLE && o && o((e) => ({
      ...e,
      name: p.DISPLAY,
      ComponentProperties: {
        component_name: "Overlay"
      }
    }));
  }, [r, o]);
  const a = (e) => {
    m && (o && o((f) => ({
      ...f,
      name: p.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Overlay",
        action: "close"
      }
    })), m(e));
  }, l = (e) => {
    (e.key === "Enter" || e.key === "Escape") && a(e);
  }, c = d("overlay", s, {
    "overlay--visible": r === t.VISIBLE
  });
  if (r !== t.HIDDEN)
    return I ? /* @__PURE__ */ n(v, { children: /* @__PURE__ */ n(
      E.div,
      {
        exit: { opacity: 0 },
        id: i,
        "data-testid": "overlay-component",
        className: c,
        onClick: a,
        role: "presentation",
        "aria-label": "Overlay Background",
        tabIndex: 0,
        onKeyDown: l
      }
    ) }) : /* @__PURE__ */ n(
      "div",
      {
        id: i,
        "data-testid": "overlay-component",
        className: c,
        onClick: a,
        "aria-label": "Overlay Background",
        tabIndex: 0,
        role: "presentation",
        onKeyDown: l
      }
    );
};
export {
  t as OVERLAY_VISIBILITY,
  A as Overlay,
  K as useOverlay
};
