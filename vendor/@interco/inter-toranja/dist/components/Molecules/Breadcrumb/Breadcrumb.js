import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { useBreadcrumb as C } from "./hooks/useBreadcrumb.js";
import { DecoratedText as p } from "../DecoratedText/DecoratedText.js";
import { SIZE as h } from "../../../utils/pattern.js";
import { Icon as f } from "../../Atoms/Icon/Icon.js";
import { IconColors as S } from "../../Atoms/Icon/constants/iconColors.js";
import '../../../assets/Breadcrumb.css';const N = "Type.Body.Small.Bold", T = "Color.Text.Neutral.Secondary", b = (r) => /* @__PURE__ */ e("span", { className: r, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
}, A = (r) => {
  const {
    shouldRender: s,
    ariaLabel: a,
    rootClasses: o,
    listClasses: l,
    itemClasses: t,
    ancestorLinkClasses: c,
    currentClasses: i,
    separatorClasses: d,
    trailItems: u
  } = C(r);
  return s ? /* @__PURE__ */ e("nav", { "data-testid": "Breadcrumb", className: o, "aria-label": a, children: /* @__PURE__ */ e("ol", { className: l, children: u.map((n) => /* @__PURE__ */ m("li", { className: t, children: [
    L(n, { ancestorLinkClasses: c, currentClasses: i }),
    n.showSeparator ? b(d) : null
  ] }, n.id)) }) }) : null;
};
export {
  A as Breadcrumb
};
