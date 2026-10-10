import { jsxs as P, jsx as E } from "react/jsx-runtime";
import { useRef as j } from "react";
import { VARIANT as r, SIZE as p, STATE as c, HIERARCHY as d, TAGGING_EVENT as H, createBEMClassNames as w } from "../../../utils/pattern.js";
import { Spinner as Z } from "../../Atoms/ProgressIndicator/Spinner/Spinner.js";
import { Icon as q } from "../../Atoms/Icon/Icon.js";
import { resolveButtonSpinnerSize as J, resolveNeutralIconButtonIconSize as Q, resolveButtonIconSize as W } from "../../Atoms/Icon/utils/sizeUtils.js";
import '../../../assets/Button.css';const oe = (L) => {
  const {
    variant: m = r.DEFAULT,
    label: u,
    disabled: R,
    leadingIcon: f,
    loading: v,
    onClick: T,
    size: i = p.LARGE,
    state: s = c.ENABLED,
    hierarchy: e = d.PRIMARY,
    typeButton: n = "btn",
    onTag: C,
    fill: g,
    hug: S,
    className: h,
    ...D
  } = L, t = w(n, m), y = j(null), a = v ?? s === c.LOADING, N = R ?? s === c.DISABLED, b = !(a || s === c.SKELETON), B = [
    d.SECONDARY,
    d.SECONDARY_OUTLINED,
    d.TERTIARY
  ].includes(e), z = m === r.DESTRUCTIVE && e === d.SECONDARY, M = m === r.INVERSE && e === d.PRIMARY, O = n === "btn-neutral", $ = m === r.DEFAULT && B || z || M || O, Y = (o) => {
    if (a || N || s === c.SKELETON) {
      o.preventDefault();
      return;
    }
    C && C((I) => ({
      ...I,
      name: H.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Button",
        variant: m,
        size: i,
        hierarchy: e,
        state: s,
        label: u,
        show_leading_icon: !!f,
        leading_icon: f
      }
    })), T && T(o);
  }, _ = (o) => {
    o.currentTarget.blur();
  }, x = () => {
    const o = `type-label-${i}-bold ${t.element[e].base}`, I = [
      a && t.element[e].modifier.loading,
      s === c.SKELETON && t.skeleton,
      N && t.element[e].modifier.disabled
    ].filter(Boolean).join(" "), F = {
      [p.SMALL]: t.element[e].modifier.small,
      [p.LARGE]: t.element[e].modifier.large,
      [p.MEDIUM]: t.element[e].modifier.medium
    };
    let l = "";
    n === "btn" && (g && !S ? l = "fill" : S && !g && (l = "hug"), l = l || "hug");
    const K = F[i] + (l ? "--" + l : "");
    return `${t.block} ${o} ${I} ${K}`.trim();
  }, A = a ? u ? `${u}, carregando` : "Carregando" : null, G = x(), U = J(i, n), V = n === "btn-neutral" ? Q(i) : W(i), k = `${G} ${h || ""}`.trim();
  return /* @__PURE__ */ P(
    "button",
    {
      ref: y,
      type: "button",
      className: k,
      onClick: Y,
      onMouseLeave: _,
      disabled: N,
      "aria-disabled": N || a,
      "aria-label": A ?? void 0,
      ...D,
      children: [
        /* @__PURE__ */ E("span", { className: "sr-only", role: "status", "aria-live": "polite", "aria-atomic": "true", children: A }),
        f && /* @__PURE__ */ E(
          "span",
          {
            "data-testid": "leadingIcon",
            className: "btn--leadingIcon",
            "aria-hidden": !b || void 0,
            style: {
              visibility: b ? "visible" : "hidden",
              display: !b && n === "btn-neutral" ? "none" : void 0
            },
            children: /* @__PURE__ */ E(q, { asset: f, size: V })
          }
        ),
        (n === "btn" || n === "btn-fab") && u && /* @__PURE__ */ E(
          "span",
          {
            className: n === "btn-fab" ? "btn--label" : void 0,
            "aria-hidden": !b || void 0,
            style: { visibility: b ? "visible" : "hidden" },
            children: u
          }
        ),
        a && /* @__PURE__ */ E(
          Z,
          {
            "data-testid": "spinner",
            variant: $ ? r.DEFAULT : r.INVERSE,
            size: U,
            ariaLabel: null
          }
        )
      ]
    }
  );
};
export {
  oe as Button
};
