import { createElement as n } from "react";
import { ListItemLeading as d } from "../../ListItemBase/components/ListItemLeading/ListItemLeading.js";
import { ListItemContent as u } from "../../ListItemBase/components/ListItemContent/ListItemContent.js";
import { ListItemTrailing as L } from "../../ListItemBase/components/ListItemTrailing/ListItemTrailing.js";
const k = (o) => {
  const {
    label: r,
    labelIcon: l,
    paragraph: a,
    paragraphSupport: s,
    tags: m,
    leadingProps: t,
    trailingVariant: e,
    trailingProps: i
  } = o, c = t && t.type !== "none" ? n(d, {
    ...t,
    testId: "listItemAction-leading"
  }) : null, p = n(u, {
    label: r,
    labelIcon: l,
    paragraph: a,
    paragraphSupport: s,
    tags: m,
    testId: "listItemAction-content"
  }), g = e === "button" ? { onClick: i.onButtonClick } : {}, I = n(L, {
    ...i,
    ...g,
    type: e
  });
  return {
    leadingElement: c,
    contentElement: p,
    trailingElement: I
  };
};
export {
  k as useListItemActionViewModel
};
