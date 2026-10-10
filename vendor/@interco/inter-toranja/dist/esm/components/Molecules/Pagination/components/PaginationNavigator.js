import { jsx as t, jsxs as S } from "react/jsx-runtime";
import { resolvePaginationTextState as u } from "../utils/resolvePaginationTextState.js";
import { Text as g } from "../../../Atoms/Text/Text.js";
import { TextWeight as m, TextSize as l, TextType as x } from "../../../Atoms/Text/types.js";
import { Stepper as v } from "../../Stepper/Stepper.js";
import { StepperState as r } from "../../Stepper/types.js";
const T = (a, e) => a ? r.Skeleton : e ? r.Enabled : r.Disabled, B = ({
  displayPageNumber: a,
  pageCount: e,
  translations: i,
  isInteractive: n,
  isSkeleton: o,
  isLoading: d,
  onPageCommit: c
}) => {
  const p = e > 0 ? 1 : 0, f = Math.max(e, p), h = e > 0 ? a : 0, s = u(o, n);
  return /* @__PURE__ */ t(
    "div",
    {
      className: "pagination__zone pagination__zone--center",
      "data-testid": "PaginationNavigator",
      "aria-busy": d,
      children: /* @__PURE__ */ S("div", { className: "pagination__navigator", children: [
        /* @__PURE__ */ t(
          g,
          {
            textType: x.Body,
            textSize: l.Large,
            textWeight: m.Regular,
            state: s,
            children: i.page
          }
        ),
        /* @__PURE__ */ t("div", { className: "pagination__stepper", children: /* @__PURE__ */ t(
          v,
          {
            enableInput: !1,
            hasBorder: !1,
            min: p,
            max: f,
            step: 1,
            state: T(o, n),
            value: h,
            onValueChange: c
          }
        ) }),
        /* @__PURE__ */ t(
          g,
          {
            textType: x.Body,
            textSize: l.Large,
            textWeight: m.Regular,
            state: s,
            children: `${i.of} ${e}`
          }
        )
      ] })
    }
  );
};
export {
  B as PaginationNavigator
};
