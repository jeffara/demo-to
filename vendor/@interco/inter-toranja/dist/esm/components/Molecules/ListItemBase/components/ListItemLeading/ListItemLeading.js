import { jsx as f, Fragment as L } from "react/jsx-runtime";
import { useEffect as I } from "react";
import '../../../../../assets/components/Molecules/ListItemBase/components/ListItemLeading/ListItemLeading.modules.css';/* empty css                             */
import { getLeadingRenderer as T } from "./renderers/leadingRendererMap.js";
import { getLeadingTagData as l } from "./utils/getLeadingTagData.js";
import { useListItemContext as P } from "../../context/ListItemContext.js";
import { useListItemTaggingContext as u } from "../../hooks/useListItemTaggingContext.js";
import { mergeTagSlice as x, LEADING_TAG_KEYS as D } from "../../utils/tagDataUtils.js";
const j = (e) => {
  const { state: s } = P(), { setTagData: r } = u(), {
    type: t,
    testId: g = "listItemLeading",
    avatarProps: o,
    flagProps: a,
    iconProps: i,
    indicatorProps: m,
    paymentMethodProps: n
  } = e;
  I(() => {
    const c = l({
      type: t,
      avatarProps: o,
      flagProps: a,
      iconProps: i,
      indicatorProps: m,
      paymentMethodProps: n
    });
    r((d) => x(d, D, c));
  }, [t, o, a, i, m, n, r]);
  const p = T(t);
  return /* @__PURE__ */ f(L, { children: p(e, s, g) });
};
export {
  j as ListItemLeading
};
