import { jsx as o, jsxs as d } from "react/jsx-runtime";
import c from "react";
import { Text as x } from "../../Atoms/Text/Text.js";
import { TextType as f, TextSize as T } from "../../Atoms/Text/types.js";
import { STATE as h } from "../../../utils/pattern.js";
import '../../../assets/RadioButton.css';const a = ({
  checked: r,
  children: e,
  id: t,
  name: n,
  onChange: l,
  state: i,
  value: p,
  variant: s
}) => {
  const m = `radio__content__option--${s}--${i}`;
  return /* @__PURE__ */ d("div", { children: [
    /* @__PURE__ */ o("label", { htmlFor: t, className: m, children: /* @__PURE__ */ o(
      "input",
      {
        checked: r,
        disabled: i === h.DISABLED,
        id: t,
        name: n,
        onChange: l,
        type: "radio",
        value: p
      }
    ) }),
    e && /* @__PURE__ */ o(x, { textSize: T.Medium, textType: f.Label, as: "span", children: /* @__PURE__ */ o("label", { htmlFor: t, children: e }) })
  ] });
}, _ = ({ children: r }) => {
  const e = c.Children.toArray(r).filter(
    (t) => t.type === a
  );
  return /* @__PURE__ */ o("div", { className: "radio", children: e });
};
_.Option = a;
export {
  _ as Radio
};
