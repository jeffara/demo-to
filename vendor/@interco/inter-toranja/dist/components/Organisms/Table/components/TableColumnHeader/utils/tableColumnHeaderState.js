import { IconColors as n } from "../../../../../Atoms/Icon/constants/iconColors.js";
const t = (r, e) => r || e ? "primary" : "secondary", c = (r, e) => r ? e === "asc" ? "ic_chevron_up" : "ic_chevron_down" : null, u = (r, e) => r ? n.Brand.Default : e ? n.Neutral.Primary : n.Neutral.Secondary, i = (r, e) => {
  if (r === "asc")
    return "ascending";
  if (r === "desc")
    return "descending";
  if (e)
    return "none";
};
export {
  i as resolveAriaSort,
  t as resolveLabelColorVariant,
  c as resolveSortIconAsset,
  u as resolveSortIconColor
};
