import { jsx as m } from "react/jsx-runtime";
import '../../../assets/components/Molecules/DecoratedText/DecoratedText.modules.css';/* empty css                           */
import { parseDecoratedText as b } from "./utils/parseHtmlTags.js";
import { tokenToTextCSSVar as v, typographyTokenToClass as h } from "./utils/tokenMapper.js";
import { STATE as a } from "../../../utils/pattern.js";
const S = ({
  children: e,
  classStyle: r,
  classColor: i,
  maxLines: l,
  fullWidth: x = !1,
  linkTriggers: y,
  testId: d,
  className: f,
  state: n = a.ENABLED,
  ...c
}) => {
  const k = /<[a-zA-Z][\w-]*(?:\s+[\w-]+(?:=(?:"[^"]{0,500}"|'[^']{0,500}'))?)*\s*\/?>/.test(e), o = n === a.DISABLED, s = n === a.SKELETON, p = [
    "decorated-text",
    r ? h(r) : "",
    x && "decorated-text--full-width",
    o && "decorated-text--disabled",
    s && "decorated-text--skeleton",
    f
  ].filter(Boolean).join(" "), t = {
    ...l && {
      display: "-webkit-box",
      WebkitLineClamp: l,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    ...i && !o && !s && {
      color: `var(${v(i)})`
    }
  };
  if (k) {
    const T = b(e, y, s || o);
    return /* @__PURE__ */ m(
      "div",
      {
        className: p,
        style: Object.keys(t).length ? t : void 0,
        "data-testid": d,
        ...c,
        children: T
      }
    );
  }
  return /* @__PURE__ */ m(
    "div",
    {
      className: p,
      style: Object.keys(t).length ? t : void 0,
      "data-testid": d,
      ...c,
      children: e
    }
  );
};
export {
  S as DecoratedText
};
