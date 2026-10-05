import { jsxs as s, Fragment as c, jsx as e } from "react/jsx-runtime";
import { useInputContext as E } from "../context/InputContext.js";
import { getFlagAccessibleName as l } from "../utils/flagAccessibility.js";
import { InputType as D } from "../utils/inputEnums.js";
import { Flag as N } from "../../../Atoms/Flag/Flag.js";
import { IconColors as p } from "../../../Atoms/Icon/constants/iconColors.js";
import { Icon as S } from "../../../Atoms/Icon/Icon.js";
import { SIZE as d, STATE as r } from "../../../../utils/pattern.js";
const A = (t, i) => t ? r.DISABLED : i ? r.SKELETON : r.ENABLED, C = () => {
  const { state: t, config: i } = E(), { isDisabled: a, isSkeleton: m, isFocused: g, hasValueInput: f, showFlag: u } = t, { type: I, flag: n, prefix: o, flagDescriptionId: h } = i;
  return /* @__PURE__ */ s(c, { children: [
    u && /* @__PURE__ */ s(c, { children: [
      /* @__PURE__ */ e("div", { className: "leadingIcon-flag-wrapper", "aria-hidden": "true", children: /* @__PURE__ */ e(
        N,
        {
          iconFlag: n,
          size: d.SMALL,
          state: A(a, m),
          contentDescription: l(n)
        }
      ) }),
      /* @__PURE__ */ e("span", { id: h, className: "sr-only", children: l(n) })
    ] }),
    I === D.SEARCH && /* @__PURE__ */ e(
      "div",
      {
        className: "leadingIcon-icons-wrapper leadingIcon-icons-wrapper--search",
        "aria-hidden": "true",
        children: /* @__PURE__ */ e(
          S,
          {
            asset: "ic_search",
            size: d.MEDIUM,
            state: a ? r.DISABLED : r.ENABLED,
            color: a ? p.Disabled : p.Neutral.Primary
          }
        )
      }
    ),
    o && (g || f) && /* @__PURE__ */ e("span", { className: "fieldset__input-wrapper__prefix type-body-large-regular", children: o })
  ] });
};
export {
  C as InputLeadingContent
};
