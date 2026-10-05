import { jsx as e } from "react/jsx-runtime";
import { Text as a } from "../../../Atoms/Text/Text.js";
import { TextSize as i, TextType as d, TextWeight as T } from "../../../Atoms/Text/types.js";
import { STATE as l } from "../../../../utils/pattern.js";
import { m } from "../../../../proxy-BBnpZ6GV.js";
import { COLLAPSED_TITLE_VARIANTS as x, LARGE_TITLE_VARIANTS as f } from "../hooks/useHeaderSearchAnimation.js";
const A = ({
  title: t,
  isSkeleton: n,
  isTopPages: s,
  isAvatarType: r,
  isLarge: c,
  titleClasses: o
}) => {
  const h = () => r ? /* @__PURE__ */ e(
    a,
    {
      as: "span",
      textType: d.Label,
      textSize: i.Small,
      textWeight: T.Bold,
      state: l.ENABLED,
      children: t
    }
  ) : /* @__PURE__ */ e(
    a,
    {
      as: "h1",
      textType: d.Title,
      textSize: s ? i.Medium : i.Small,
      state: l.ENABLED,
      children: t
    }
  );
  return n ? /* @__PURE__ */ e("div", { "data-testid": "header-title-skeleton", className: "header__skeleton", children: h() }) : /* @__PURE__ */ e(
    m.div,
    {
      "data-testid": "header-title",
      className: o,
      style: { transformOrigin: "left center" },
      initial: c ? "hidden" : !1,
      animate: "visible",
      exit: "hidden",
      variants: x,
      children: /* @__PURE__ */ e("div", { className: "header__title-text", children: h() })
    }
  );
}, S = ({
  title: t,
  isSkeleton: n,
  titleClasses: s,
  titleRowClasses: r
}) => n ? /* @__PURE__ */ e("div", { className: r, children: /* @__PURE__ */ e("div", { "data-testid": "header-title-large-skeleton", className: "header__skeleton", children: /* @__PURE__ */ e(a, { as: "h1", textType: d.Title, textSize: i.Large, state: l.ENABLED, children: t }) }) }) : /* @__PURE__ */ e(
  m.div,
  {
    "data-testid": "header-title-row",
    className: r,
    style: { transformOrigin: "left center" },
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: f,
    children: /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("div", { className: "header__title-text", children: /* @__PURE__ */ e(a, { as: "h1", textType: d.Title, textSize: i.Large, state: l.ENABLED, children: t }) }) })
  }
);
export {
  A as HeaderInlineTitle,
  S as HeaderLargeTitle
};
