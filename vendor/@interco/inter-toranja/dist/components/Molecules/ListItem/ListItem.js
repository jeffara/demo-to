import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { useRef as O } from "react";
import { Stepper as W } from "../Stepper/Stepper.js";
import j from "./utils/getComponentProperties.js";
import { Checkbox as D } from "../../Atoms/Checkbox/Checkbox.js";
import { Divider as F } from "../../Atoms/Divider/Divider.js";
import { Icon as k } from "../../Atoms/Icon/Icon.js";
import G from "../../Atoms/IconFlag/IconFlag.js";
import { NeutralIconButton as K } from "../../Atoms/NeutralIconButton/index.js";
import { PaymentMethods as U } from "../../Atoms/PaymentMethods/PaymentMethods.js";
import { Switch as w } from "../../Atoms/Switch/Switch.js";
import { Tag as R } from "../../Atoms/Tag/Tag.js";
import { Text as f } from "../../Atoms/Text/Text.js";
import { TextWeight as I, TextSize as u, TextType as v } from "../../Atoms/Text/types.js";
import { Avatar as H } from "../Avatar/Avatar.js";
import { Button as V } from "../Button/Button.js";
import { Radio as S } from "../RadioButton/RadioButton.js";
import { VARIANT as N, STATE as c, TAGGING_EVENT as Y, SIZE as C, HIERARCHY as Z } from "../../../utils/pattern.js";
import { v as q } from "../../../v4-CRLUkzQ6.js";
import '../../../assets/ListItem.css';const M = (i) => {
  switch (i) {
    case c.ENABLED:
      return "enabled";
    case c.DISABLED:
      return "disabled";
    default:
      return "skeleton";
  }
}, J = (i, a = c.ENABLED) => {
  const {
    leadingAvatar: t,
    leadingCheckbox: l,
    leadingFlag: o,
    leadingIcon: _,
    leadingImage: d,
    leadingPaymentMethod: r
  } = i;
  return t ? /* @__PURE__ */ e(H, { ...t, state: a }) : l ? /* @__PURE__ */ e(D, { variant: l.variant, state: a }) : o ? G(o, a, C.MEDIUM) : _ ? /* @__PURE__ */ e(
    "div",
    {
      "data-testid": "leadingIcon",
      className: `listItem__container__containerMain__leading__icon--${a}`,
      children: /* @__PURE__ */ e(k, { asset: _, state: a })
    }
  ) : d ? /* @__PURE__ */ e(
    "div",
    {
      "data-testid": "image",
      className: `listItem__container__containerMain__leading__image--${a}`,
      children: /* @__PURE__ */ e("img", { src: d.src, alt: d.alt })
    }
  ) : r ? /* @__PURE__ */ e(
    "div",
    {
      "data-testid": "iconPayment",
      className: `listItem__container__containerMain__leading__iconPayment--${a}`,
      children: /* @__PURE__ */ e(U, { paymentMethod: r, state: a })
    }
  ) : null;
}, Q = (i, a = c.ENABLED) => {
  const {
    trailingButton: t,
    trailingCheckbox: l,
    trailingNeutralIconButton: o,
    trailingRadioButton: _,
    trailingStepper: d,
    trailingSwitch: r,
    trailingTagChevron: s,
    trailingText: m
  } = i;
  return t ? /* @__PURE__ */ e(
    V,
    {
      onClick: t == null ? void 0 : t.onClick,
      size: C.SMALL,
      typeButton: "btn",
      hierarchy: (t == null ? void 0 : t.hierarchy) ?? Z.PRIMARY,
      label: t == null ? void 0 : t.label,
      variant: (t == null ? void 0 : t.variant) ?? N.DEFAULT,
      loading: t == null ? void 0 : t.loading,
      state: a,
      onTag: (g) => {
        i.onTag && i.onTag((n) => ({
          ...n,
          ...g(),
          ProductProperties: {
            nested_in: "ListItem",
            nested_label: i.label
          }
        }));
      }
    }
  ) : l ? /* @__PURE__ */ e(D, { variant: l.variant, state: a }) : o ? /* @__PURE__ */ e(
    K,
    {
      icon: o == null ? void 0 : o.icon,
      onClick: o == null ? void 0 : o.onClick,
      state: a
    }
  ) : _ ? /* @__PURE__ */ e(S, { children: /* @__PURE__ */ e(S.Option, { ..._, state: a }) }) : d ? /* @__PURE__ */ e(
    W,
    {
      hasBorder: !1,
      onTag: (g) => {
        i.onTag && i.onTag((n) => ({
          ...n,
          ...g(),
          ProductProperties: {
            nested_in: "ListItem",
            nested_label: i.label
          }
        }));
      },
      ...d
    }
  ) : r ? /* @__PURE__ */ e(
    w,
    {
      onChange: (g) => {
        var n;
        return (n = r == null ? void 0 : r.onChange) == null ? void 0 : n.call(r, g);
      },
      checked: r.checked,
      state: r.state
    }
  ) : s ? /* @__PURE__ */ p(
    "div",
    {
      "data-testid": "trailingTagChevron",
      className: `listItem__container__containerMain__trailing__trailingTagChevron--${a}`,
      children: [
        typeof s == "object" && (s == null ? void 0 : s.tag) && /* @__PURE__ */ e(
          R,
          {
            ...s.tag,
            size: "small",
            hierarchy: "strong",
            state: M(a)
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "IcChevronRight",
            className: "listItem__container__containerMain__trailing__trailingTagChevron__chevron",
            children: /* @__PURE__ */ e(
              k,
              {
                asset: "ic_chevron_right",
                size: C.SMALL,
                state: M(a),
                color: "Icon/Neutral/Primary"
              }
            )
          }
        )
      ]
    }
  ) : m ? /* @__PURE__ */ p("div", { "data-testid": "text", className: "listItem__container__containerMain__trailing__text", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `listItem__container__containerMain__trailing__text__${m.colorLabel}`,
        children: /* @__PURE__ */ e("div", { "data-testid": "bodyLabel", children: /* @__PURE__ */ e(
          f,
          {
            as: "span",
            textType: v.Body,
            textSize: u.Small,
            textWeight: I.Bold,
            state: a,
            children: m.label
          }
        ) })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "bodyParagraphs",
        className: "listItem__container__containerMain__body__paragraphs",
        children: /* @__PURE__ */ e(
          f,
          {
            as: "span",
            textType: v.Body,
            textSize: u.Small,
            textWeight: I.Regular,
            state: a,
            children: m.paragraph
          }
        )
      }
    )
  ] }) : null;
}, ue = (i) => {
  const {
    label: a,
    leadingCheckbox: t,
    leadingImage: l,
    onClick: o,
    onTag: _,
    paragraph: d,
    paragraphSupport: r,
    showDivider: s = !0,
    showLeading: m = !0,
    showTrailing: g = !0,
    state: n = c.ENABLED,
    tags: T,
    trailingButton: b,
    trailingNeutralIconButton: E,
    trailingRadioButton: B,
    trailingTagChevron: L,
    trailingText: A,
    variant: x = N.DEFAULT
  } = i, P = O(Array(T).map(() => q())), z = [
    "listItem__container__containerMain",
    !m && "--noLeading",
    l && !E && !L && !A && !B && !b && "--image",
    l && L && "--image--trailingTagChevron",
    l && A && "--image--trailingText",
    l && E && "--image--trailingNeutralIconButton",
    l && b && "--image--trailingButton",
    t && "--leadingCheckbox",
    b && "--trailingButton"
  ].filter(Boolean).join(""), $ = (h) => {
    if (_ && _((y) => ({
      ...y,
      name: Y.INTERACTION_CLICK,
      ComponentProperties: j(i)
    })), [c.LOADING, c.DISABLED, c.SKELETON].includes(n)) {
      h.preventDefault();
      return;
    }
    o && o(h);
  };
  return /* @__PURE__ */ p("div", { className: `listItem--${x}`, "data-testid": "listItem", children: [
    /* @__PURE__ */ e(
      "div",
      {
        tabIndex: 0,
        role: "button",
        onClick: $,
        "data-testid": "container",
        className: `listItem__container--${n}${n === c.SKELETON ? "--" + x : ""}`,
        children: /* @__PURE__ */ p("div", { className: z, children: [
          m && /* @__PURE__ */ e("div", { "data-testid": "leading", className: "listItem__container__containerMain__leading", children: J(i, n) }),
          /* @__PURE__ */ p("div", { "data-testid": "body", className: "listItem__container__containerMain__body", children: [
            /* @__PURE__ */ e("div", { "data-testid": "label", className: "listItem__container__containerMain__body__label", children: /* @__PURE__ */ e(
              f,
              {
                as: "span",
                textType: v.Body,
                textSize: u.Medium,
                textWeight: I.Bold,
                state: n,
                children: a
              }
            ) }),
            d && /* @__PURE__ */ e(
              "div",
              {
                "data-testid": "paragraph",
                className: "listItem__container__containerMain__body__paragraphs",
                children: /* @__PURE__ */ e(
                  f,
                  {
                    as: "span",
                    textType: v.Body,
                    textSize: u.Medium,
                    textWeight: I.Regular,
                    state: n,
                    children: d
                  }
                )
              }
            ),
            r && /* @__PURE__ */ e(
              "div",
              {
                "data-testid": "paragraphSupport",
                className: "listItem__container__containerMain__body__paragraphs",
                children: /* @__PURE__ */ e(
                  f,
                  {
                    as: "span",
                    textType: v.Body,
                    textSize: u.Medium,
                    textWeight: I.Regular,
                    state: n,
                    children: r
                  }
                )
              }
            ),
            T && /* @__PURE__ */ e("div", { "data-testid": "tags", className: "listItem__container__containerMain__body__tags", children: T.filter((h) => h !== void 0).map((h, y) => /* @__PURE__ */ e(
              R,
              {
                label: h.label,
                color: h.color,
                size: "small",
                hierarchy: "strong",
                state: M(n)
              },
              P.current[y]
            )) })
          ] }),
          g && /* @__PURE__ */ e("div", { "data-testid": "trailing", className: "listItem__container__containerMain__trailing", children: Q(i, n) })
        ] })
      }
    ),
    s && x !== N.CONTAINED && /* @__PURE__ */ e(F, { "data-testid": "divider" })
  ] });
};
export {
  ue as ListItem
};
