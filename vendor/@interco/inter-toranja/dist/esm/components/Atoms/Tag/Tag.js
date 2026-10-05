import { jsxs as p, jsx as s } from "react/jsx-runtime";
import '../../../assets/components/Atoms/Tag/Tag.modules.css';/* empty css                 */
import { classNamesMerge as n } from "../../../utils/classNamesMerge.js";
const g = (o) => o.replace(/([A-Z])/g, "-$1").toLowerCase(), x = (o) => {
  const { color: c, hierarchy: t, size: r, label: d = "Label", state: a = "enabled", icon: l } = o, e = g(r), i = n(
    "tag-component",
    a === "skeleton" && `tag-component__skeleton--${e}`,
    a === "disabled" && `tag-component__disabled--${e}`,
    a === "enabled" && `tag-component__${t}--${e}`,
    a === "enabled" && `tag-component__${t}--${e}--${c}`
  ), m = n(
    "text",
    e === "small" && "type-caption-bold",
    e === "large" && "type-label-small-bold",
    e === "extra-large" && "type-label-medium-bold"
  );
  return /* @__PURE__ */ p("div", { "data-testid": "Tag", className: i, children: [
    l && (e === "large" || e === "extra-large") && /* @__PURE__ */ s("div", { className: "tag-component__icon", children: l }),
    /* @__PURE__ */ s("span", { className: m, children: d })
  ] });
};
export {
  x as Tag
};
