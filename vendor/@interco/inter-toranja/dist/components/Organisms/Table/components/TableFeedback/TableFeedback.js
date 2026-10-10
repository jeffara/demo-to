import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { resolveTableFeedback as m } from "./hooks/resolveTableFeedback.js";
import { Signal as p } from "../../../../Atoms/Signal/Signal.js";
import { Text as o } from "../../../../Atoms/Text/Text.js";
import { TextWeight as T, TextSize as l, TextType as s } from "../../../../Atoms/Text/types.js";
import { STATE as b, SIZE as h, FEEDBACK as x } from "../../../../../utils/pattern.js";
import { Button as y } from "../../../../Molecules/Button/Button.js";
import '../../../../../assets/TableFeedback.css';const B = (a) => {
  const { type: r } = a, { rootClasses: c, title: n, description: d, action: t } = m(a);
  return /* @__PURE__ */ i(
    "div",
    {
      className: c,
      "data-testid": r === "error" ? "TableErrorState" : "TableEmptyState",
      role: r === "error" ? "alert" : "status",
      "aria-live": r === "error" ? void 0 : "polite",
      children: [
        /* @__PURE__ */ e("div", { className: "table-feedback__signal", "aria-hidden": "true", children: /* @__PURE__ */ e(p, { variant: x.INFORMATION, size: h.LARGE, state: b.ENABLED }) }),
        /* @__PURE__ */ i("div", { className: "table-feedback__content", children: [
          /* @__PURE__ */ e(
            o,
            {
              textType: s.Title,
              textSize: l.Medium,
              textWeight: T.Medium,
              as: "h3",
              children: n
            }
          ),
          /* @__PURE__ */ e(o, { textType: s.Body, textSize: l.Large, colorVariant: "secondary", as: "p", children: d })
        ] }),
        t && /* @__PURE__ */ e(
          y,
          {
            typeButton: "btn",
            hierarchy: t.hierarchy,
            label: t.label,
            onClick: t.onClick
          }
        )
      ]
    }
  );
};
export {
  B as TableFeedback
};
