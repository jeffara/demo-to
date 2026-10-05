import { jsx as o } from "react/jsx-runtime";
import { useEffect as l } from "react";
import '../../../../../assets/components/Molecules/ListItemBase/components/ListItemTrailing/ListItemTrailing.modules.css';/* empty css                              */
import { createTrailingTagData as s, TRAILING_TAG_KEYS as c } from "./onTagDataTralingUtil.js";
import { getTrailingRenderer as T } from "./renderers/trailingRendererMap.js";
import { useListItemContext as f } from "../../context/ListItemContext.js";
import { useListItemTaggingContext as d } from "../../hooks/useListItemTaggingContext.js";
import { mergeTagSlice as I } from "../../utils/tagDataUtils.js";
const v = (t) => {
  const { state: e } = f(), { setTagData: i } = d(), n = `listItemTrailing--${t.type}`, r = T(t.type), a = JSON.stringify(
    s(
      t.type,
      t,
      e
    )
  );
  return l(() => {
    const m = JSON.parse(a);
    i((g) => I(g, c, m));
  }, [a, i]), /* @__PURE__ */ o("div", { className: `listItemTrailing ${n}`, children: r(t, e, t == null ? void 0 : t.onTag, t.nestedLabel) });
};
export {
  v as ListItemTrailing
};
