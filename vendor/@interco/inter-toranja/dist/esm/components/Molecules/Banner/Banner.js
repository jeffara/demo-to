import { jsx as l } from "react/jsx-runtime";
import { useState as N, useEffect as $ } from "react";
import { BannerContent as w } from "./BannerContent.js";
import { IMG_STATE as a, BANNER_VARIANT as A } from "./constants.js";
import { classNamesMerge as K } from "../../../utils/classNamesMerge.js";
import { STATE as t, TAGGING_EVENT as f, SIZE as M } from "../../../utils/pattern.js";
import '../../../assets/components/Molecules/Banner/Banner.modules.css';/* empty css                    */
const _ = (e, o, r) => e === t.SKELETON ? t.SKELETON : e === t.ERROR || o === A.IMAGE && r === a.ERROR ? t.ERROR : t.ENABLED, y = (e, o) => `${e}${e.includes("?") ? "&" : "?"}_ts=${o}`, Y = ({
  variant: e,
  state: o = `${t.ENABLED}`,
  size: r = M.MEDIUM,
  url: i,
  webContent: T,
  alt: d = "",
  onClick: m,
  onTag: E
}) => {
  const [D, R] = N(a.LOADING), [O, p] = N(Date.now()), g = i ? y(i, O) : void 0, n = _(o, e, D), L = n === t.SKELETON || n === t.ERROR, b = () => e === A.IMAGE && n === t.ERROR ? (R(a.LOADING), p(Date.now()), !0) : !1, u = () => R(a.LOADED), S = () => R(a.ERROR), I = (s) => {
    E && E((h) => ({
      ...h,
      name: s,
      ComponentProperties: {
        component_name: "Banner",
        variant: e,
        size: r,
        state: n
      }
    }));
  }, c = () => {
    b() || (m == null || m(), I(f.INTERACTION_CLICK));
  }, B = (s) => {
    (s.key === "Enter" || s.key === " ") && c();
  };
  $(() => {
    I(f.DISPLAY);
  }, [e, r, n, E]);
  const G = K("banner", `banner--${e}`, `banner--${r}`, `banner--${n}`);
  return /* @__PURE__ */ l(
    "div",
    {
      className: G,
      "aria-disabled": L,
      onClick: c,
      onKeyDown: B,
      "data-testid": "banner-root",
      role: "button",
      tabIndex: 0,
      "aria-label": d || "Banner",
      children: /* @__PURE__ */ l(
        w,
        {
          state: n,
          variant: e,
          url: g,
          alt: d,
          webContent: T,
          handleImgLoad: u,
          handleImgError: S
        }
      )
    }
  );
};
export {
  Y as Banner,
  _ as getBannerState,
  y as getImageUrlWithTimestamp
};
