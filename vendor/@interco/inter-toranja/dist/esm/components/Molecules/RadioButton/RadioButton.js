import { jsx as o, jsxs as d } from "react/jsx-runtime";
import c from "react";
import '../../../assets/components/Molecules/RadioButton/RadioButton.modules.css';/* empty css                         */
import { Text as x } from "../../Atoms/Text/Text.js";
import { TextType as f, TextSize as T } from "../../Atoms/Text/types.js";
import { STATE as h } from "../../../utils/pattern.js";
const a = ({
  checked: e,
  children: r,
  id: t,
  name: n,
  onChange: l,
  state: i,
  value: p,
  variant: m
}) => {
  const s = `radio__content__option--${m}--${i}`;
  return /* @__PURE__ */ d("div", { children: [
    /* @__PURE__ */ o("label", { htmlFor: t, className: s, children: /* @__PURE__ */ o(
      "input",
      {
        checked: e,
        disabled: i === h.DISABLED,
        id: t,
        name: n,
        onChange: l,
        type: "radio",
        value: p
      }
    ) }),
    r && /* @__PURE__ */ o(x, { textSize: T.Medium, textType: f.Label, as: "span", children: /* @__PURE__ */ o("label", { htmlFor: t, children: r }) })
  ] });
}, _ = ({ children: e }) => {
  const r = c.Children.toArray(e).filter(
    (t) => t.type === a
  );
  return /* @__PURE__ */ o("div", { className: "radio", children: r });
};
_.Option = a;
export {
  _ as Radio
};
