import { jsx as k } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Link/Link.modules.css';/* empty css                  */
import { TextSize as f } from "../../Atoms/Text/types.js";
import { STATE as E, TAGGING_EVENT as N } from "../../../utils/pattern.js";
const u = ({
  variant: i = "default",
  size: m = f.Medium,
  state: r = E.ENABLED,
  onTag: o,
  label: p,
  onClick: e,
  onKeyDown: n,
  ...a
}) => {
  const d = () => {
    o && o((t) => ({
      ...t,
      name: N.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Link",
        variant: i,
        size: m,
        state: r,
        label: p,
        deeplink: a.href
      }
    }));
  }, l = (t) => {
    d(), e == null || e(t);
  }, s = (t) => {
    d(), n == null || n(t);
  };
  return /* @__PURE__ */ k(
    "a",
    {
      "data-testid": "link",
      className: `link type-link-${m} link--${r !== "skeleton" ? i : "skeleton"}`,
      onClick: l,
      onKeyDown: s,
      role: "button",
      tabIndex: 0,
      ...a,
      children: p
    }
  );
};
export {
  u as Link
};
