import { jsx as s, jsxs as f, Fragment as A } from "react/jsx-runtime";
import { createContext as x, useRef as b, useState as N, useCallback as I, useContext as g, useMemo as R, useId as w } from "react";
import { Badge as D } from "../../Atoms/Badge/Badge.js";
import { Divider as G } from "../../Atoms/Divider/Divider.js";
import { Text as h } from "../../Atoms/Text/Text.js";
import { TextWeight as T, TextSize as y, TextType as L } from "../../Atoms/Text/types.js";
import { EASING as O, DURATION as B } from "../../../utils/constants/animation.js";
import { STATE as c, TAGGING_EVENT as M } from "../../../utils/pattern.js";
import { L as v, m as K } from "../../../proxy-BBnpZ6GV.js";
import { b as F, f as U } from "../../../visual-element-Dhl5aGeu.js";
import '../../../assets/Tabs.css';const $ = x(null);
function z() {
  const e = b(!1);
  return F(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function W() {
  const e = z(), [r, a] = N(0), n = I(() => {
    e.current && a(r + 1);
  }, [r]);
  return [I(() => U.postRender(n), [n]), r];
}
const k = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function E() {
  const e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new WeakMap(), a = () => e.forEach(k);
  return {
    add: (n) => {
      e.add(n), r.set(n, n.addEventListener("willUpdate", a));
    },
    remove: (n) => {
      e.delete(n);
      const o = r.get(n);
      o && (o(), r.delete(n)), a();
    },
    dirty: a
  };
}
const C = (e) => e === !0, j = (e) => C(e === !0) || e === "id", P = ({ children: e, id: r, inherit: a = !0 }) => {
  const n = g(v), o = g($), [i, p] = W(), d = b(null), u = n.id || o;
  d.current === null && (j(a) && u && (r = r ? u + "-" + r : u), d.current = {
    id: r,
    group: C(a) && n.group || E()
  });
  const t = R(() => ({ ...d.current, forceRender: i }), [p]);
  return s(v.Provider, { value: t, children: e });
}, V = {
  type: "tween",
  duration: B.MODERATE_02,
  ease: O.STANDARD_CREATIVE
};
function q(e, r, a) {
  return e ? c.SKELETON : r ? c.DISABLED : a;
}
function H({
  tab: e,
  index: r,
  isActive: a,
  isDisabled: n,
  isSkeleton: o,
  handleTabClick: i,
  scrollable: p,
  generalState: d,
  activeIndicatorLayoutId: u
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      "data-testid": "tab",
      tabIndex: a ? -1 : 0,
      onClick: () => {
        o || n || i(r);
      },
      onKeyDown: (t) => {
        o || n || (t.key === "Enter" || t.key === " ") && i(r);
      },
      "aria-selected": a,
      "aria-disabled": o || n,
      className: `tabs-navigation__wrapper__container-tabs__tab${p ? "--scrollable" : ""}`,
      children: [
        /* @__PURE__ */ f("span", { className: "tabs-navigation__wrapper__container-tabs__tab__content", children: [
          /* @__PURE__ */ s("span", { className: "tabs-navigation__wrapper__container-tabs__tab__label", children: /* @__PURE__ */ s(
            h,
            {
              state: q(o, n, d),
              as: "span",
              textType: L.Label,
              textSize: y.Medium,
              textWeight: a ? T.Bold : T.Regular,
              children: e.label
            }
          ) }),
          (e == null ? void 0 : e.badge) && !o && !n && /* @__PURE__ */ s("span", { className: "tabs-navigation__wrapper__container-tabs__tab__badge", children: /* @__PURE__ */ s(D, { ...e.badge }) })
        ] }),
        a && !o && !n && /* @__PURE__ */ s(
          K.div,
          {
            layoutId: u,
            transition: V,
            className: "tabs-navigation__wrapper__container-tabs__tab--active",
            "data-testid": `tabs-navigation__wrapper__container-tabs__tab--active-${r}`
          }
        )
      ]
    },
    e.label.concat(r.toString())
  );
}
const oe = ({
  tabs: e,
  state: r,
  scrollable: a = !1,
  onTag: n
}) => {
  const o = w(), i = e.findIndex(
    (t) => t.selected && ![c.DISABLED, c.SKELETON].includes(t.state)
  ), [p, d] = N(
    i !== -1 ? i : e.findIndex((t) => ![c.DISABLED, c.SKELETON].includes(t.state))
  ), u = (t) => {
    var l, _;
    n && n((m) => ({
      ...m,
      name: M.INTERACTION_CLICK,
      ComponentProperties: {
        name: "Tabs",
        label: e[t].label
      }
    })), d(t), (_ = (l = e[t]).onClick) == null || _.call(l, e[t].label, t);
  };
  return /* @__PURE__ */ s(
    "div",
    {
      "data-testid": "tabs-navigation",
      className: `tabs-navigation${a ? "--scrollable" : ""}`,
      children: /* @__PURE__ */ s(
        "div",
        {
          "data-testid": "tabs-navigation__wrapper",
          className: `tabs-navigation__wrapper${a ? "--scrollable" : ""}`,
          children: e && e.length > 0 ? /* @__PURE__ */ f(A, { children: [
            /* @__PURE__ */ s(P, { id: o, children: /* @__PURE__ */ s(
              "div",
              {
                "data-testid": "container-tabs",
                className: "tabs-navigation__wrapper__container-tabs",
                children: e.map((t, l) => {
                  const _ = p === l, m = (t == null ? void 0 : t.state) === c.DISABLED, S = (t == null ? void 0 : t.state) === c.SKELETON || r === c.SKELETON;
                  return /* @__PURE__ */ s(
                    H,
                    {
                      tab: t,
                      index: l,
                      isActive: _,
                      isDisabled: m,
                      isSkeleton: S,
                      handleTabClick: u,
                      scrollable: a,
                      generalState: r,
                      activeIndicatorLayoutId: `active-indicator-${o}`
                    },
                    t.label.concat(l.toString())
                  );
                })
              }
            ) }),
            /* @__PURE__ */ s(G, {})
          ] }) : /* @__PURE__ */ s(
            h,
            {
              as: "span",
              textType: L.Label,
              textSize: y.Medium,
              textWeight: T.Bold,
              children: "Nenhuma aba disponível. Use o componente com a propriedade tabs."
            }
          )
        }
      )
    }
  );
};
export {
  oe as Tabs
};
