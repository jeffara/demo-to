import { jsx as f, Fragment as L } from "react/jsx-runtime";
import { useEffect as I } from "react";
import { getLeadingRenderer as T } from "./renderers/leadingRendererMap.js";
import { getLeadingTagData as l } from "./utils/getLeadingTagData.js";
import { useListItemContext as P } from "../../context/ListItemContext.js";
import { useListItemTaggingContext as u } from "../../hooks/useListItemTaggingContext.js";
import { mergeTagSlice as x, LEADING_TAG_KEYS as D } from "../../utils/tagDataUtils.js";
import '../../../../../assets/ListItemLeading.css';const _ = (e) => {
  const { state: s } = P(), { setTagData: r } = u(), {
    type: t,
    testId: g = "listItemLeading",
    avatarProps: o,
    flagProps: a,
    iconProps: i,
    indicatorProps: n,
    paymentMethodProps: m
  } = e;
  I(() => {
    const c = l({
      type: t,
      avatarProps: o,
      flagProps: a,
      iconProps: i,
      indicatorProps: n,
      paymentMethodProps: m
    });
    r((d) => x(d, D, c));
  }, [t, o, a, i, n, m, r]);
  const p = T(t);
  return /* @__PURE__ */ f(L, { children: p(e, s, g) });
};
export {
  _ as ListItemLeading
};
