import { jsxs as _, jsx as e } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Widget/Widget.modules.css';/* empty css                    */
import { Icon as E } from "../../Atoms/Icon/Icon.js";
import { Tag as N } from "../../Atoms/Tag/Tag.js";
import { Text as m } from "../../Atoms/Text/Text.js";
import { TextSize as h, TextType as L } from "../../Atoms/Text/types.js";
import { ColorType as r, SIZE as t, STATE as a, MODIFIERS as S, TAGGING_EVENT as y } from "../../../utils/pattern.js";
const B = (u) => {
  const {
    showHeader: c = !0,
    color: d = r.Default,
    timeAgo: n = "",
    tag: l = "Label Tag",
    tagColor: w = r.Default,
    title: s = "Title",
    children: p,
    size: i = t.SMALL,
    state: o = a.ENABLED,
    onClick: T,
    onTag: f
  } = u, A = (g) => {
    switch (d === "default" ? g : d) {
      case r.Success:
        return "green";
      case r.Error:
        return "red";
      case r.Warning:
        return "gold";
      case r.Information:
        return "blue";
      default:
        return "brand";
    }
  };
  return /* @__PURE__ */ _(
    "div",
    {
      role: "button",
      onClick: () => {
        f && f((g) => ({
          ...g,
          name: y.INTERACTION_CLICK,
          ComponentProperties: {
            component_name: "Widget",
            size: i,
            state: o,
            show_header: c.toString(),
            title: s,
            color: d,
            show_time_ago: (!!n).toString(),
            time_ago: n,
            show_tag: (!!l).toString(),
            tag_label: l
          }
        })), o !== a.SKELETON && T && T();
      },
      className: `widget--${i}${o === a.SKELETON ? "--skeleton" : ""}`,
      title: s,
      "data-testid": "widget",
      children: [
        c && /* @__PURE__ */ e("div", { "data-testid": "widget-header", className: `widget__header--${d}`, children: /* @__PURE__ */ _("div", { className: `widget__header__container${i === t.SMALL ? S.SMALL : ""}`, children: [
          /* @__PURE__ */ e(
            "div",
            {
              "data-testid": "widget-title",
              className: `widget__header__container__title${i === t.SMALL ? S.SMALL : ""}`,
              children: /* @__PURE__ */ e(m, { textType: L.Body, textSize: h.Medium, children: s })
            }
          ),
          a.ERROR !== o && /* @__PURE__ */ _(
            "div",
            {
              className: `widget__header__container__info${i === t.SMALL ? S.SMALL : ""}`,
              children: [
                n && /* @__PURE__ */ e(
                  "div",
                  {
                    "data-testid": "widget-timeAgo",
                    className: "widget__header__container__info__timeAgo",
                    children: /* @__PURE__ */ e(m, { textType: L.Body, textSize: h.Medium, children: n })
                  }
                ),
                l && i !== t.SMALL && /* @__PURE__ */ e("div", { className: "widget__header__container__info__tag", children: /* @__PURE__ */ e(
                  N,
                  {
                    color: A(w),
                    hierarchy: "strong",
                    label: l,
                    size: t.SMALL
                  }
                ) })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "widget-body",
            className: `widget__body${c ? "" : "--noheader"}  type-body-medium-regular`,
            children: a.ERROR === o ? /* @__PURE__ */ _("div", { "data-testid": "widget__body__error", className: "widget__body__error", children: [
              /* @__PURE__ */ e(E, { asset: "ic_rotate_right", size: t.MEDIUM }),
              /* @__PURE__ */ e(m, { textType: L.Body, textSize: h.Medium, children: "Tente carregar novamente" })
            ] }) : p
          }
        )
      ]
    }
  );
};
export {
  B as Widget
};
