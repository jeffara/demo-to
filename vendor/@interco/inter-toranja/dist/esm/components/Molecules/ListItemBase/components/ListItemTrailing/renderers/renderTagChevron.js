import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { Icon as n } from "../../../../../Atoms/Icon/Icon.js";
import { Tag as i } from "../../../../../Atoms/Tag/Tag.js";
import { mapStateToSTATE as l } from "../../../utils/stateMapper.js";
import { SIZE as m } from "../../../../../../utils/pattern.js";
const S = (r, e) => {
  const t = l(e);
  return /* @__PURE__ */ a("div", { className: "listItemGeneralTrailing--tagChevron", children: [
    r.showTag && r.tagLabel && /* @__PURE__ */ o(
      i,
      {
        label: r.tagLabel,
        color: r.tagColor ?? "brand",
        size: "small",
        hierarchy: "strong",
        state: t
      }
    ),
    /* @__PURE__ */ o(
      n,
      {
        asset: "ic_chevron_right",
        size: m.SMALL,
        state: t,
        color: "Icon/Neutral/Secondary"
      }
    )
  ] });
};
export {
  S as renderTagChevron
};
