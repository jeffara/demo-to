import { jsx as k } from "react/jsx-runtime";
import { TextSize as f } from "../../Atoms/Text/types.js";
import { STATE as E, TAGGING_EVENT as N } from "../../../utils/pattern.js";
import '../../../assets/Link.css';const h = ({
  variant: i = "default",
  size: m = f.Medium,
  state: r = E.ENABLED,
  onTag: o,
  label: a,
  onClick: t,
  onKeyDown: n,
  ...d
}) => {
  const l = () => {
    o && o((e) => ({
      ...e,
      name: N.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Link",
        variant: i,
        size: m,
        state: r,
        label: a,
        deeplink: d.href
      }
    }));
  }, p = (e) => {
    l(), t == null || t(e);
  }, s = (e) => {
    l(), n == null || n(e);
  };
  return /* @__PURE__ */ k(
    "a",
    {
      "data-testid": "link",
      className: `link type-link-${m} link--${r !== "skeleton" ? i : "skeleton"}`,
      onClick: p,
      onKeyDown: s,
      role: "button",
      tabIndex: 0,
      ...d,
      children: a
    }
  );
};
export {
  h as Link
};
