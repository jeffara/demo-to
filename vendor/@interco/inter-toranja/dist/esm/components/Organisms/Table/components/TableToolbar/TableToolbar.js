import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { useTableToolbar as s } from "./hooks/useTableToolbar.js";
import { Text as m } from "../../../../Atoms/Text/Text.js";
import { TextWeight as T, TextSize as c, TextType as d } from "../../../../Atoms/Text/types.js";
import '../../../../../assets/components/Organisms/Table/components/TableToolbar/TableToolbar.modules.css';/* empty css                          */
const f = (e) => {
  const { title: o, trailing: i } = e, { rootClasses: a, showActions: l } = s(e);
  return /* @__PURE__ */ r("div", { className: a, "data-testid": "TableToolbar", children: [
    o && /* @__PURE__ */ t("div", { className: "table-toolbar__title", children: /* @__PURE__ */ t(
      m,
      {
        textType: d.Title,
        textSize: c.Medium,
        textWeight: T.Medium,
        as: "h2",
        children: o
      }
    ) }),
    l && /* @__PURE__ */ t("div", { className: "table-toolbar__actions", children: i })
  ] });
};
export {
  f as TableToolbar
};
