import { jsx as r, jsxs as E } from "react/jsx-runtime";
import { memo as c } from "react";
import { BANNER_TEXT as _, BANNER_VARIANT as m } from "./constants.js";
import { TextWeight as N, TextSize as d, TextType as p } from "../../Atoms/Text/types.js";
import { IconColors as f } from "../../Atoms/Icon/constants/iconColors.js";
import { STATE as e, SIZE as x } from "../../../utils/pattern.js";
import { Icon as T } from "../../Atoms/Icon/Icon.js";
import { Text as R } from "../../Atoms/Text/Text.js";
const b = c(
  ({
    state: n,
    variant: a,
    url: o,
    alt: t = "",
    webContent: i,
    handleImgLoad: s,
    handleImgError: l
  }) => n === e.SKELETON ? /* @__PURE__ */ r("div", { className: "banner__skeleton", "aria-hidden": "true" }) : n === e.ERROR ? /* @__PURE__ */ E("div", { className: "banner__error", role: "alert", "aria-live": "polite", children: [
    /* @__PURE__ */ r("span", { className: "banner__error-icon", children: /* @__PURE__ */ r(
      T,
      {
        asset: "ic_rotate_right",
        size: x.MEDIUM,
        state: e.ENABLED,
        color: f.Neutral.Primary
      }
    ) }),
    /* @__PURE__ */ r("div", { className: "banner__error-text", children: /* @__PURE__ */ r(
      R,
      {
        textType: p.Body,
        textSize: d.Medium,
        textWeight: N.Regular,
        "data-testid": "banner-error-text",
        children: _.ERROR_RELOAD
      }
    ) }),
    /* @__PURE__ */ r("span", { className: "banner__error-text" })
  ] }) : n === e.ENABLED && a === m.IMAGE && o ? /* @__PURE__ */ r(
    "img",
    {
      src: o,
      alt: t,
      className: "banner__img",
      onLoad: s,
      onError: l,
      draggable: !1
    }
  ) : n === e.ENABLED && a === m.WEBVIEW && i ? /* @__PURE__ */ r("section", { className: "banner__webview", "aria-label": t, children: i }) : null
);
b.displayName = "BannerContent";
export {
  b as BannerContent
};
