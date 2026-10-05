import { jsxs as g, jsx as s } from "react/jsx-runtime";
import { classNamesMerge as n } from "../../../utils/classNamesMerge.js";
import '../../../assets/Tag.css';const p = (o) => o.replace(/([A-Z])/g, "-$1").toLowerCase(), $ = (o) => {
  const { color: c, hierarchy: t, size: r, label: d = "Label", state: a = "enabled", icon: l } = o, e = p(r), i = n(
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
  return /* @__PURE__ */ g("div", { "data-testid": "Tag", className: i, children: [
    l && (e === "large" || e === "extra-large") && /* @__PURE__ */ s("div", { className: "tag-component__icon", children: l }),
    /* @__PURE__ */ s("span", { className: m, children: d })
  ] });
};
export {
  $ as Tag
};
