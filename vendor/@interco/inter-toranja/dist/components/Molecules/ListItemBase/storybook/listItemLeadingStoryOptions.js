import { jsx as t } from "react/jsx-runtime";
import { PAYMENT as o } from "../../../Atoms/PaymentMethods/types.js";
const i = [
  "avatar",
  "checkbox",
  "flag",
  "icon",
  "image",
  "indicator",
  "numberText",
  "paymentMethod",
  "slot",
  "none"
], a = {
  avatar: {
    type: "avatar",
    avatarProps: {
      variant: "icon",
      icon: "ic_orange",
      size: "medium",
      color: "soft",
      state: "enabled"
    }
  },
  checkbox: {
    type: "checkbox",
    checkboxProps: {
      checked: !1,
      state: "enabled"
    }
  },
  flag: {
    type: "flag",
    flagProps: "brazil"
  },
  icon: {
    type: "icon",
    iconProps: {
      asset: "ic_orange",
      size: "medium",
      color: "Icon/Neutral/Primary",
      contentDescription: "Icon"
    }
  },
  image: {
    type: "image",
    imageProps: {
      src: { local: "/Placeholder.png" },
      contentDescription: "Product",
      width: 64,
      height: 64,
      radius: "medium",
      borderColor: "neutral-default",
      borderWeight: "small",
      contentScale: "fill"
    }
  },
  indicator: {
    type: "indicator",
    indicatorProps: {
      color: "Color/Chart/Brand/Default",
      icon: {
        asset: "ic_orange",
        size: "small",
        color: "Icon/Neutral/Primary",
        contentDescription: "Status"
      }
    }
  },
  numberText: {
    type: "numberText",
    numberTextProps: {
      label: "000",
      additionalText: "abc",
      variant: "numberText"
    }
  },
  paymentMethod: {
    type: "paymentMethod",
    paymentMethodProps: o.MASTERCARD
  },
  slot: {
    type: "slot",
    slotProps: {
      children: /* @__PURE__ */ t(
        "span",
        {
          style: {
            padding: "var(--spacing-4) var(--spacing-8)",
            borderRadius: "var(--radius-small)",
            background: "var(--color-surface-neutral-strong)"
          },
          children: "Slot"
        }
      )
    }
  },
  none: void 0
}, c = {
  avatar: "Avatar",
  checkbox: "Checkbox",
  flag: "Flag",
  icon: "Icon",
  image: "Image",
  indicator: "Indicator",
  numberText: "Number / Text",
  paymentMethod: "Payment method",
  slot: "Slot",
  none: "None"
}, s = (e) => typeof e == "string" ? a[e] : e;
export {
  i as LIST_ITEM_LEADING_OPTIONS,
  a as listItemLeadingPropsMapping,
  c as listItemLeadingStoryLabels,
  s as resolveListItemLeadingStoryProps
};
