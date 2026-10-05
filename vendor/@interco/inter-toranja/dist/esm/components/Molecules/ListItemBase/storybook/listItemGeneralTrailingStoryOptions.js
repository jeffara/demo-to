const t = [
  "tagChevronOnly",
  "tagChevronWithTag",
  "badgeOnly",
  "badgeWithDate",
  "badgeDateOnly",
  "text"
], a = {
  tagChevronOnly: {
    type: "tagChevron"
  },
  tagChevronWithTag: {
    type: "tagChevron",
    tagChevronProps: {
      showTag: !0,
      tagLabel: "Label",
      tagColor: "brand"
    }
  },
  badgeOnly: {
    type: "badge",
    badgeProps: {
      showBadge: !0,
      badgeValue: 5
    }
  },
  badgeWithDate: {
    type: "badge",
    badgeProps: {
      showDate: !0,
      date: "Ontem",
      showBadge: !0,
      badgeValue: 12
    }
  },
  badgeDateOnly: {
    type: "badge",
    badgeProps: {
      showDate: !0,
      date: "Há 2h"
    }
  },
  text: {
    type: "text",
    textProps: {
      labelTrailing: "R$ 50,00",
      labelTrailingColor: "success",
      paragraphTrailing: "Concluído"
    }
  }
}, g = {
  tagChevronOnly: "Tag chevron (chevron only)",
  tagChevronWithTag: "Tag chevron (with tag)",
  badgeOnly: "Badge (badge only)",
  badgeWithDate: "Badge (with date)",
  badgeDateOnly: "Badge (date only)",
  text: "Text (label + paragraph)"
}, r = (e) => typeof e == "string" ? a[e] : e;
export {
  t as LIST_ITEM_GENERAL_TRAILING_OPTIONS,
  a as listItemGeneralTrailingPropsMapping,
  g as listItemGeneralTrailingStoryLabels,
  r as resolveListItemGeneralTrailingStoryProps
};
