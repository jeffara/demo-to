import { createElement as t } from "react";
import { ListItemLeading as I } from "../../ListItemBase/components/ListItemLeading/ListItemLeading.js";
import { ListItemContent as d } from "../../ListItemBase/components/ListItemContent/ListItemContent.js";
import { ListItemTrailing as u } from "../../ListItemBase/components/ListItemTrailing/ListItemTrailing.js";
const b = (o) => {
  const {
    label: r,
    labelIcon: l,
    paragraph: i,
    paragraphSupport: a,
    tags: m,
    leadingProps: e,
    trailingVariant: n,
    trailingProps: s
  } = o, p = e ? t(I, {
    ...e,
    testId: "listItemControl-leading"
  }) : null, g = t(d, {
    label: r,
    labelIcon: l,
    paragraph: i,
    paragraphSupport: a,
    tags: m,
    testId: "listItemControl-content"
  }), c = n ? t(u, {
    type: n,
    ...s
  }) : null;
  return {
    leadingElement: p,
    contentElement: g,
    trailingElement: c
  };
};
export {
  b as useListItemControlViewModel
};
