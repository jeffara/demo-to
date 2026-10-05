import { nameVariantTrailing as e, nameVariantLeading as g } from "./nameVariant.js";
const _ = (a) => {
  var n, i, l;
  return {
    component_name: "ListItem",
    label: a.label,
    state: a.state,
    leading_variant: g(a),
    paragraph: a.paragraph,
    paragraph_support: a.paragraphSupport,
    tag_label: ((n = a.tags) == null ? void 0 : n.map((t) => t == null ? void 0 : t.label).join(",")) ?? "",
    trailing_variant: e(a),
    //Leading - Avatar
    ...((i = a.leadingAvatar) == null ? void 0 : i.variant) && {
      leading_avatar_variant: a.leadingAvatar.variant
    },
    //Leading - Flag
    ...a.leadingFlag && {
      leading_flag: a.leadingFlag
    },
    //Leading - Icon
    ...a.leadingIcon && {
      leading_icon: a.leadingIcon
    },
    //Leading - Payment Method
    ...a.leadingPaymentMethod && {
      leading_paymentMethod: a.leadingPaymentMethod
    },
    //Trailing - Button
    ...a.trailingButton && {
      trailing_button_variant: a.trailingButton.variant,
      trailing_button_hierarchy: a.trailingButton.hierarchy,
      trailing_button_state: a.trailingButton.loading ?? a.state,
      trailing_button_show_leading_icon: a.leadingIcon,
      trailing_button_label: a.trailingButton.label
    },
    //Trailing - Tag Chevron
    ...a.trailingTagChevron && {
      tag_trailing_label: typeof a.trailingTagChevron == "object" && String((l = a.trailingTagChevron) == null ? void 0 : l.tag)
    },
    //Trailing - Neutral Icon Button
    ...a.trailingNeutralIconButton && {
      trailing_neutralIconButton_state: a.state,
      trailing_neutralIconButton_icon: a.trailingNeutralIconButton.icon
    }
  };
};
export {
  _ as default
};
