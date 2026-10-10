import { jsx as e, jsxs as I } from "react/jsx-runtime";
import N, { useMemo as B, cloneElement as P } from "react";
import { ListItemContainer as R } from "./components/ListItemContainer/ListItemContainer.js";
import { ListItemProvider as w } from "./context/ListItemContext.js";
import { ListItemTaggingProvider as z } from "./context/ListItemTaggingContext.js";
import { useListItemTagging as O } from "./hooks/useListItemTagging.js";
import { getAlignmentClasses as k } from "./utils/alignmentUtils.js";
import { getContainerMainClassName as q, getVariantClassName as F } from "./utils/classNames.js";
import { Divider as G } from "../../Atoms/Divider/Divider.js";
import { Spinner as H } from "../../Atoms/ProgressIndicator/Spinner/Spinner.js";
import { VARIANT as J } from "../../../utils/pattern.js";
import '../../../assets/ListItemBase.css';const se = ({
  state: a = "enabled",
  variant: i = "default",
  selected: d = !1,
  interactive: o = !0,
  onClick: h,
  onTag: c,
  leading: g,
  content: s,
  trailing: n,
  showLeading: L = !0,
  showDivider: v = !0,
  gridModifier: b,
  testId: t = "listItemBase",
  className: T,
  componentName: _ = "ListItemBase",
  alignmentTrailingMode: f = "center-aligned"
}) => {
  const p = L && !!g, x = F(i), M = q(b, !p), V = d ? "listItemBase--selected" : "", A = `listItemBase--${a}`, D = o ? "listItemBase--interactive" : "", r = a === "loading", { handleTag: l, tagData: E, setTagData: y } = O({
    onTag: c,
    componentName: _,
    state: a
  }), S = {
    state: a,
    variant: i,
    selected: d,
    interactive: o,
    onTag: c
  }, j = {
    tagData: E,
    setTagData: y
  }, m = B(
    () => k(f),
    [f]
  ), u = B(() => {
    if (!n || !N.isValidElement(n))
      return null;
    let $;
    if (N.isValidElement(s)) {
      const C = s.props || {};
      $ = typeof C.label == "string" ? C.label : void 0;
    }
    return P(n, {
      onTag: l,
      nestedLabel: $
    });
  }, [n, s, l]);
  return /* @__PURE__ */ e(w, { value: S, children: /* @__PURE__ */ e(z, { value: j, children: /* @__PURE__ */ I(
    "div",
    {
      className: `listItemBase ${x} ${A} ${V} ${D} ${T ?? ""}`.trim(),
      "data-testid": t,
      children: [
        /* @__PURE__ */ I(
          R,
          {
            state: a,
            variant: i,
            interactive: o,
            onClick: h,
            onTag: l,
            componentName: _,
            containerMainClassName: M,
            testId: `${t}-container`,
            children: [
              p && /* @__PURE__ */ e(
                "div",
                {
                  "data-testid": `${t}-leading`,
                  className: `listItemBase__container__containerMain__leading ${m.leading}`,
                  children: g
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  "data-testid": `${t}-body`,
                  className: `listItemBase__container__containerMain__body ${m.content}`,
                  children: s
                }
              ),
              (r || u) && /* @__PURE__ */ e(
                "div",
                {
                  "data-testid": `${t}-trailing`,
                  className: `listItemBase__container__containerMain__trailing ${m.trailing}${r ? " listItemBase__container__containerMain__trailing--loading" : ""}`,
                  children: r ? /* @__PURE__ */ e(H, { size: "medium" }) : u
                }
              )
            ]
          }
        ),
        v && i !== J.CONTAINED && /* @__PURE__ */ e(G, { "data-testid": `${t}-divider` })
      ]
    }
  ) }) });
};
export {
  se as ListItemBase
};
