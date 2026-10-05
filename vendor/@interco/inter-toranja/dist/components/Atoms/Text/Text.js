import { jsx as D } from "react/jsx-runtime";
import { TextWeight as l, TextColorScheme as o, TextType as g } from "./types.js";
import { classNamesMerge as L } from "../../../utils/classNamesMerge.js";
import { STATE as u } from "../../../utils/pattern.js";
import '../../../assets/Text.css';const j = ({
  state: a = u.ENABLED,
  children: i,
  textSize: $,
  textType: r,
  textWeight: c = l.Regular,
  as: f = "span",
  id: C,
  colorScheme: n = o.Neutral,
  colorVariant: d = "primary",
  colorStrong: p,
  ...b
}) => {
  const E = f, S = () => {
    const e = `-${l.Regular}`, t = `-${c}`, s = c === l.Medium;
    return r === g.Body ? s ? e : t : r === g.Label ? t : "";
  }, w = (e, t, s) => e === "caption" ? t === "bold" ? t : "medium" : s, N = () => {
    if (a === u.DISABLED || a === u.SKELETON)
      return "";
    const e = "text--color", t = n === o.Feedback || n === o.Accent, s = `${e}--${n}`, m = `${s}--${d}`;
    return n === o.Disabled ? s : t ? `${m}${p ? "--strong" : "--default"}` : m;
  }, T = S(), x = `type-${r}`, A = w(r, c, $), B = `${x}-${A}${T}`;
  return /* @__PURE__ */ D(
    E,
    {
      ...b,
      id: C,
      title: typeof i == "string" ? i : void 0,
      "data-testid": "text",
      className: L("text", B, `text--${a}`, N()),
      children: i
    }
  );
};
export {
  j as Text
};
