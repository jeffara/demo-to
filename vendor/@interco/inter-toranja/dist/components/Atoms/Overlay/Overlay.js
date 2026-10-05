import { jsx as n } from "react/jsx-runtime";
import { useEffect as y } from "react";
import { OVERLAY_VISIBILITY as a } from "./types.js";
import { classNamesMerge as d } from "../../../utils/classNamesMerge.js";
import { TAGGING_EVENT as c } from "../../../utils/pattern.js";
import { useOverlay as _ } from "./hooks/useOverlay.js";
import { A as v } from "../../../index-CDYq4efL.js";
import { m as E } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/Overlay.css';const A = ({
  isVisible: r = a.HIDDEN,
  onClick: m,
  onTag: o,
  id: l,
  className: p,
  useFade: I = !0
}) => {
  y(() => {
    r === a.VISIBLE && o && o((e) => ({
      ...e,
      name: c.DISPLAY,
      ComponentProperties: {
        component_name: "Overlay"
      }
    }));
  }, [r, o]);
  const t = (e) => {
    m && (o && o((f) => ({
      ...f,
      name: c.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Overlay",
        action: "close"
      }
    })), m(e));
  }, i = (e) => {
    (e.key === "Enter" || e.key === "Escape") && t(e);
  }, s = d("overlay", p, {
    "overlay--visible": r === a.VISIBLE
  });
  if (r !== a.HIDDEN)
    return I ? /* @__PURE__ */ n(v, { children: /* @__PURE__ */ n(
      E.div,
      {
        exit: { opacity: 0 },
        id: l,
        "data-testid": "overlay-component",
        className: s,
        onClick: t,
        role: "presentation",
        "aria-label": "Overlay Background",
        tabIndex: 0,
        onKeyDown: i
      }
    ) }) : /* @__PURE__ */ n(
      "div",
      {
        id: l,
        "data-testid": "overlay-component",
        className: s,
        onClick: t,
        "aria-label": "Overlay Background",
        tabIndex: 0,
        role: "presentation",
        onKeyDown: i
      }
    );
};
export {
  a as OVERLAY_VISIBILITY,
  A as Overlay,
  _ as useOverlay
};
