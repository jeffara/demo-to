import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { useSectionTitle as w } from "./hooks/useSectionTitle.js";
import { NeutralIconButton as z } from "../../Atoms/NeutralIconButton/index.js";
import { Text as a } from "../../Atoms/Text/Text.js";
import { TextSize as l, TextType as d } from "../../Atoms/Text/types.js";
import { SIZE as D } from "../../../utils/pattern.js";
import { Icon as b } from "../../Atoms/Icon/Icon.js";
import { IconColors as L } from "../../Atoms/Icon/constants/iconColors.js";
import '../../../assets/SectionTitle.css';const q = (m) => {
  const {
    title: p,
    showDescription: h,
    description: o,
    icon: u,
    state: t,
    resolvedIconState: N,
    isSkeleton: S,
    isNavigation: f,
    isInteractive: i,
    shouldShowIcon: x,
    sectionClassName: T,
    iconClassName: v,
    skeletonClassName: I,
    descriptionClassName: y,
    descriptionStyle: n,
    handleClick: r,
    handleKeyDown: C,
    handleNeutralIconTag: k
  } = w(m), _ = () => x ? S ? /* @__PURE__ */ e("div", { "data-testid": "section-title-icon-skeleton", className: I }) : /* @__PURE__ */ e("div", { "data-testid": "section-title-icon", className: v, children: f ? /* @__PURE__ */ e(
    b,
    {
      asset: "ic_chevron_right",
      size: D.SMALL,
      state: t,
      color: L.Neutral.Secondary
    }
  ) : /* @__PURE__ */ e(
    z,
    {
      onTag: k,
      icon: u ?? "ic_chevron_right",
      onClick: r,
      state: N
    }
  ) }) : null, g = () => {
    if (!h || !o)
      return null;
    const s = /* @__PURE__ */ e(
      a,
      {
        state: t,
        as: "p",
        textType: d.Label,
        textSize: l.Medium,
        colorVariant: "secondary",
        children: o
      }
    );
    return n ? /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "section-title-description",
        className: y,
        style: n,
        children: s
      }
    ) : s;
  };
  return /* @__PURE__ */ c(
    "section",
    {
      "data-testid": "section-title",
      className: T,
      onClick: r,
      onKeyDown: i ? C : void 0,
      tabIndex: i ? 0 : -1,
      role: i ? "button" : void 0,
      children: [
        /* @__PURE__ */ c("div", { "data-testid": "section-title-header", className: "section-title__header", children: [
          /* @__PURE__ */ e(a, { state: t, as: "h4", textType: d.Title, textSize: l.Small, children: p }),
          _()
        ] }),
        g()
      ]
    }
  );
};
export {
  q as SectionTitle
};
