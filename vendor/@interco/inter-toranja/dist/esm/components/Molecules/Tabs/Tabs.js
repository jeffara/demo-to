import { jsx as e, jsxs as g, Fragment as f } from "react/jsx-runtime";
import { useId as b, useState as S } from "react";
import '../../../assets/components/Molecules/Tabs/Tabs.modules.css';/* empty css                  */
import { Badge as h } from "../../Atoms/Badge/Badge.js";
import { Divider as A } from "../../Atoms/Divider/Divider.js";
import { Text as I } from "../../Atoms/Text/Text.js";
import { TextWeight as E, TextSize as N, TextType as u } from "../../Atoms/Text/types.js";
import { EASING as L, DURATION as w } from "../../../utils/constants/animation.js";
import { STATE as s, TAGGING_EVENT as D } from "../../../utils/pattern.js";
import { LayoutGroup as y } from "../../../node_modules/framer-motion/dist/es/components/LayoutGroup/index.js";
import { motion as O } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const x = {
  type: "tween",
  duration: w.MODERATE_02,
  ease: L.STANDARD_CREATIVE
};
function B(a, r, n) {
  return a ? s.SKELETON : r ? s.DISABLED : n;
}
function C({
  tab: a,
  index: r,
  isActive: n,
  isDisabled: i,
  isSkeleton: o,
  handleTabClick: _,
  scrollable: l,
  generalState: d,
  activeIndicatorLayoutId: m
}) {
  return /* @__PURE__ */ g(
    "div",
    {
      "data-testid": "tab",
      tabIndex: n ? -1 : 0,
      onClick: () => {
        o || i || _(r);
      },
      onKeyDown: (t) => {
        o || i || (t.key === "Enter" || t.key === " ") && _(r);
      },
      "aria-selected": n,
      "aria-disabled": o || i,
      className: `tabs-navigation__wrapper__container-tabs__tab${l ? "--scrollable" : ""}`,
      children: [
        /* @__PURE__ */ g("span", { className: "tabs-navigation__wrapper__container-tabs__tab__content", children: [
          /* @__PURE__ */ e("span", { className: "tabs-navigation__wrapper__container-tabs__tab__label", children: /* @__PURE__ */ e(
            I,
            {
              state: B(o, i, d),
              as: "span",
              textType: u.Label,
              textSize: N.Medium,
              textWeight: n ? E.Bold : E.Regular,
              children: a.label
            }
          ) }),
          (a == null ? void 0 : a.badge) && !o && !i && /* @__PURE__ */ e("span", { className: "tabs-navigation__wrapper__container-tabs__tab__badge", children: /* @__PURE__ */ e(h, { ...a.badge }) })
        ] }),
        n && !o && !i && /* @__PURE__ */ e(
          O.div,
          {
            layoutId: m,
            transition: x,
            className: "tabs-navigation__wrapper__container-tabs__tab--active",
            "data-testid": `tabs-navigation__wrapper__container-tabs__tab--active-${r}`
          }
        )
      ]
    },
    a.label.concat(r.toString())
  );
}
const P = ({
  tabs: a,
  state: r,
  scrollable: n = !1,
  onTag: i
}) => {
  const o = b(), _ = a.findIndex(
    (t) => t.selected && ![s.DISABLED, s.SKELETON].includes(t.state)
  ), [l, d] = S(
    _ !== -1 ? _ : a.findIndex((t) => ![s.DISABLED, s.SKELETON].includes(t.state))
  ), m = (t) => {
    var c, p;
    i && i((T) => ({
      ...T,
      name: D.INTERACTION_CLICK,
      ComponentProperties: {
        name: "Tabs",
        label: a[t].label
      }
    })), d(t), (p = (c = a[t]).onClick) == null || p.call(c, a[t].label, t);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-testid": "tabs-navigation",
      className: `tabs-navigation${n ? "--scrollable" : ""}`,
      children: /* @__PURE__ */ e(
        "div",
        {
          "data-testid": "tabs-navigation__wrapper",
          className: `tabs-navigation__wrapper${n ? "--scrollable" : ""}`,
          children: a && a.length > 0 ? /* @__PURE__ */ g(f, { children: [
            /* @__PURE__ */ e(y, { id: o, children: /* @__PURE__ */ e(
              "div",
              {
                "data-testid": "container-tabs",
                className: "tabs-navigation__wrapper__container-tabs",
                children: a.map((t, c) => {
                  const p = l === c, T = (t == null ? void 0 : t.state) === s.DISABLED, v = (t == null ? void 0 : t.state) === s.SKELETON || r === s.SKELETON;
                  return /* @__PURE__ */ e(
                    C,
                    {
                      tab: t,
                      index: c,
                      isActive: p,
                      isDisabled: T,
                      isSkeleton: v,
                      handleTabClick: m,
                      scrollable: n,
                      generalState: r,
                      activeIndicatorLayoutId: `active-indicator-${o}`
                    },
                    t.label.concat(c.toString())
                  );
                })
              }
            ) }),
            /* @__PURE__ */ e(A, {})
          ] }) : /* @__PURE__ */ e(
            I,
            {
              as: "span",
              textType: u.Label,
              textSize: N.Medium,
              textWeight: E.Bold,
              children: "Nenhuma aba disponível. Use o componente com a propriedade tabs."
            }
          )
        }
      )
    }
  );
};
export {
  P as Tabs
};
