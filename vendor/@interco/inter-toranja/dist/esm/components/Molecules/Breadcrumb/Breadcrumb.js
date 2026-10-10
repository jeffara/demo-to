import { jsx as e, jsxs as u } from "react/jsx-runtime";
import { useBreadcrumb as C } from "./hooks/useBreadcrumb.js";
import { DecoratedText as p } from "../DecoratedText/DecoratedText.js";
import { SIZE as h } from "../../../utils/pattern.js";
import '../../../assets/components/Molecules/Breadcrumb/Breadcrumb.modules.css';/* empty css                        */
import { Icon as f } from "../../Atoms/Icon/Icon.js";
import { IconColors as S } from "../../Atoms/Icon/constants/iconColors.js";
const N = "Type.Body.Small.Bold", T = "Color.Text.Neutral.Secondary", b = (r) => /* @__PURE__ */ e("span", { className: r, "aria-hidden": "true", children: /* @__PURE__ */ e(
  f,
  {
    asset: "ic_chevron_right",
    size: h.SMALL,
    color: S.Neutral.Secondary,
    contentDescription: ""
  }
) }), x = (r) => /* @__PURE__ */ e(p, { classStyle: N, classColor: T, children: r }), L = (r, s) => {
  if (r.isCurrent)
    return /* @__PURE__ */ e("span", { className: s.currentClasses, "aria-current": "page", children: r.label });
  const a = x(r.label);
  return r.isInteractive ? /* @__PURE__ */ e("a", { className: s.ancestorLinkClasses, href: r.href ?? "#", onClick: r.handleClick, children: a }) : a;
}, O = (r) => {
  const {
    shouldRender: s,
    ariaLabel: a,
    rootClasses: n,
    listClasses: l,
    itemClasses: t,
    ancestorLinkClasses: c,
    currentClasses: i,
    separatorClasses: d,
    trailItems: m
  } = C(r);
  return s ? /* @__PURE__ */ e("nav", { "data-testid": "Breadcrumb", className: n, "aria-label": a, children: /* @__PURE__ */ e("ol", { className: l, children: m.map((o) => /* @__PURE__ */ u("li", { className: t, children: [
    L(o, { ancestorLinkClasses: c, currentClasses: i }),
    o.showSeparator ? b(d) : null
  ] }, o.id)) }) }) : null;
};
export {
  O as Breadcrumb
};
