const l = [
  "trailing_variant",
  "tag_trailing_label",
  "trailing_badge_show_badge",
  "trailing_badge_show_date",
  "trailing_text_label",
  "trailing_text_color",
  "trailing_button_label",
  "trailing_button_variant",
  "trailing_button_hierarchy",
  "trailing_button_state",
  "trailing_button_leading_icon",
  "trailing_iconbutton1_variant",
  "trailing_iconbutton1_hierarchy",
  "trailing_iconbutton1_state",
  "trailing_iconbutton1_icon",
  "trailing_iconbutton2_variant",
  "trailing_iconbutton2_hierarchy",
  "trailing_iconbutton2_state",
  "trailing_iconbutton2_icon",
  "trailing_neutralIconButton_state",
  "trailing_neutralIconButton_icon",
  "trailing_checkbox_checked",
  "trailing_radio_checked",
  "trailing_radio_value",
  "trailing_stepper_value",
  "trailing_stepper_min",
  "trailing_stepper_max",
  "trailing_switch_checked"
], c = (_, i, n) => {
  var e;
  const t = {
    trailing_variant: _
  }, a = {
    tagChevron: () => {
      "tagLabel" in i && (t.tag_trailing_label = i.tagLabel || "");
    },
    badge: () => {
      "showBadge" in i && (t.trailing_badge_show_badge = i.showBadge, t.trailing_badge_show_date = "showDate" in i ? i.showDate : "");
    },
    text: () => {
      "labelTrailing" in i && (t.trailing_text_label = i.labelTrailing, t.trailing_text_color = "labelTrailingColor" in i ? i.labelTrailingColor : "");
    },
    button: () => {
      "label" in i && (t.trailing_button_label = i.label, t.trailing_button_variant = "variant" in i ? i.variant : "", t.trailing_button_hierarchy = "hierarchy" in i ? i.hierarchy : "", t.trailing_button_state = n, t.trailing_button_leading_icon = "icon" in i && i.icon ? "icon" : "");
    },
    iconButton: () => {
      "iconButton" in i && i.iconButton && (t.trailing_iconbutton1_variant = i.iconButton.variant || "", t.trailing_iconbutton1_hierarchy = i.iconButton.hierarchy || "", t.trailing_iconbutton1_state = n, t.trailing_iconbutton1_icon = "icon"), "iconButtonSecond" in i && i.iconButtonSecond && (t.trailing_iconbutton2_variant = i.iconButtonSecond.variant || "", t.trailing_iconbutton2_hierarchy = i.iconButtonSecond.hierarchy || "", t.trailing_iconbutton2_state = n, t.trailing_iconbutton2_icon = "icon");
    },
    neutralIconButton: () => {
      t.trailing_neutralIconButton_state = n, t.trailing_neutralIconButton_icon = "icon";
    },
    checkbox: () => {
      "checked" in i && (t.trailing_checkbox_checked = i.checked);
    },
    radio: () => {
      "checked" in i && (t.trailing_radio_checked = i.checked, t.trailing_radio_value = "value" in i ? i.value : "");
    },
    stepper: () => {
      "value" in i && (t.trailing_stepper_value = i.value, t.trailing_stepper_min = "min" in i ? i.min : "", t.trailing_stepper_max = "max" in i ? i.max : "");
    },
    switch: () => {
      "checked" in i && (t.trailing_switch_checked = i.checked);
    }
  };
  return (e = a[_]) == null || e.call(a), t;
};
export {
  l as TRAILING_TAG_KEYS,
  c as createTrailingTagData
};
