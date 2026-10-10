import { createElement as t } from "react";
import { ListItemLeading as I } from "../../ListItemBase/components/ListItemLeading/ListItemLeading.js";
import { ListItemContent as d } from "../../ListItemBase/components/ListItemContent/ListItemContent.js";
import { ListItemTrailing as L } from "../../ListItemBase/components/ListItemTrailing/ListItemTrailing.js";
const T = "checkbox", C = (n) => {
  const {
    label: o,
    labelIcon: r,
    paragraph: i,
    paragraphSupport: l,
    tags: a,
    leadingProps: e,
    trailingVariant: s,
    trailingProps: m
  } = n, p = e ? t(I, {
    ...e,
    testId: "listItemControl-leading"
  }) : null, c = t(d, {
    label: o,
    labelIcon: r,
    paragraph: i,
    paragraphSupport: l,
    tags: a,
    testId: "listItemControl-content"
  }), g = t(L, {
    type: s ?? T,
    ...m
  });
  return {
    leadingElement: p,
    contentElement: c,
    trailingElement: g
  };
};
export {
  C as useListItemControlViewModel
};
