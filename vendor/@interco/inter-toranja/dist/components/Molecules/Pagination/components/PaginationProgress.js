import { jsx as r } from "react/jsx-runtime";
import { formatPaginationNumber as e } from "../utils/formatPaginationNumber.js";
import { resolvePaginationTextState as f } from "../utils/resolvePaginationTextState.js";
import { Text as l } from "../../../Atoms/Text/Text.js";
import { TextWeight as c, TextSize as g, TextType as T } from "../../../Atoms/Text/types.js";
const y = ({
  pageOffset: o,
  totalItems: a,
  translations: i,
  language: t,
  isSkeleton: n,
  isInteractive: m
}) => {
  const s = e(o.initial, t), p = e(o.final, t), d = e(a, t), x = `${i.result}: ${s}-${p} ${i.of} ${d}`;
  return /* @__PURE__ */ r("div", { className: "pagination__zone pagination__zone--end", "data-testid": "PaginationProgress", children: /* @__PURE__ */ r(
    l,
    {
      textType: T.Body,
      textSize: g.Large,
      textWeight: c.Regular,
      state: f(n, m),
      as: "p",
      children: x
    }
  ) });
};
export {
  y as PaginationProgress
};
