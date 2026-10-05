const g = (a) => {
  const n = {};
  return a.variant && (n.leading_avatar_variant = a.variant, a.variant === "icon" && "icon" in a && (n.leading_avatar_icon = a.icon)), n;
}, i = {
  avatar: ({ avatarProps: a }) => a ? g(a) : {},
  flag: ({ flagProps: a }) => a ? { leading_flag: a } : {},
  icon: ({ iconProps: a }) => a != null && a.asset ? { leading_icon: a.asset } : {},
  indicator: ({ indicatorProps: a }) => {
    var n;
    return (n = a == null ? void 0 : a.icon) != null && n.asset ? { leading_icon: a.icon.asset } : {};
  },
  paymentMethod: ({ paymentMethodProps: a }) => a ? { leading_paymentMethod: a } : {},
  checkbox: () => ({}),
  image: () => ({}),
  numberText: () => ({}),
  slot: () => ({}),
  none: () => ({})
}, c = (a) => {
  const { type: n } = a, e = i[n], t = (e == null ? void 0 : e(a)) ?? {};
  return {
    leading_variant: n,
    ...t
  };
};
export {
  c as getLeadingTagData
};
