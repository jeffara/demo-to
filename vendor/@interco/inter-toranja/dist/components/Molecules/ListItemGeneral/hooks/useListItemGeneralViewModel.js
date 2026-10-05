import { createElement as i } from "react";
import { buildGeneralTrailingElementProps as M } from "../../ListItemBase/utils/buildGeneralTrailingProps.js";
import { resolveAlignmentTrailingMode as x } from "../../ListItemBase/utils/resolveAlignmentTrailingMode.js";
import { ListItemLeading as T } from "../../ListItemBase/components/ListItemLeading/ListItemLeading.js";
import { ListItemContent as b } from "../../ListItemBase/components/ListItemContent/ListItemContent.js";
import { ListItemTrailing as I } from "../../ListItemBase/components/ListItemTrailing/ListItemTrailing.js";
const E = (n) => {
  const {
    label: r,
    labelIcon: o,
    paragraph: a,
    paragraphSupport: p,
    tags: l,
    leadingProps: e,
    trailingVariant: g,
    trailingProps: m,
    alignmentTrailingMode: s
  } = n, d = void 0, c = e && e.type !== "none" ? i(T, e) : void 0, y = i(b, {
    label: r,
    labelIcon: o,
    paragraph: a,
    paragraphSupport: p,
    tags: l
  }), t = M(g, m), f = t ? i(I, {
    type: t.type,
    ...t.type === "tagChevron" && t.tagChevronProps,
    ...t.type === "badge" && t.badgeProps,
    ...t.type === "text" && t.textProps
  }) : void 0, h = x({
    explicitMode: s,
    trailingType: t == null ? void 0 : t.type,
    hasParagraphTrailing: (t == null ? void 0 : t.type) === "text" ? !!t.textProps.paragraphTrailing : !1
  });
  return {
    leading: c,
    content: y,
    trailing: f,
    gridModifier: d,
    alignmentTrailingMode: h
  };
};
export {
  E as useListItemGeneralViewModel
};
