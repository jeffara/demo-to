import { createElement as o } from "react";
import { ListItemLeading as I } from "../../ListItemBase/components/ListItemLeading/ListItemLeading.js";
import { ListItemContent as u } from "../../ListItemBase/components/ListItemContent/ListItemContent.js";
import { ListItemTrailing as d } from "../../ListItemBase/components/ListItemTrailing/ListItemTrailing.js";
const b = (i) => {
  const {
    label: l,
    labelIcon: r,
    paragraph: a,
    paragraphSupport: m,
    tags: s,
    leadingProps: n,
    trailingVariant: e,
    trailingProps: t
  } = i, c = n && n.type !== "none" ? o(I, {
    ...n,
    testId: "listItemAction-leading"
  }) : null, p = o(u, {
    label: l,
    labelIcon: r,
    paragraph: a,
    paragraphSupport: m,
    tags: s,
    testId: "listItemAction-content"
  }), g = e && t ? o(d, {
    ...t,
    ...e === "button" && "onButtonClick" in t ? { onClick: t.onButtonClick } : {},
    type: e
  }) : null;
  return {
    leadingElement: c,
    contentElement: p,
    trailingElement: g
  };
};
export {
  b as useListItemActionViewModel
};
