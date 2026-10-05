import { jsx as r } from "react/jsx-runtime";
import { useImageState as b } from "./hooks/useImageState.js";
import { ImageContent as h } from "./ImageContentComponent/ImageContent.js";
import { ImageContentScale as j } from "./types.js";
import { getImageClasses as v } from "./utils/getImageClasses.js";
import { STATE as B } from "../../../utils/pattern.js";
import '../../../assets/Image.css';const J = ({
  src: m,
  contentDescription: s = "",
  contentScale: n = j.FILL,
  width: l,
  height: d,
  fillWidth: e = !1,
  fillHeight: a = !1,
  ratio: o,
  radius: f,
  borderColor: i,
  borderWeight: c,
  enableZoom: g = !1,
  state: S = B.ENABLED,
  onError: p,
  onLoad: I,
  id: C,
  className: E,
  ...L
}) => {
  const { imageSrc: t, loadStates: u, handleLoad: y, handleError: N, getDimensionStyles: x } = b({
    src: m,
    width: l,
    height: d,
    fillWidth: e,
    fillHeight: a,
    ratio: o,
    onLoad: I,
    onError: p
  }), { finalClassName: A, currentState: D, borderColorStyle: T } = v({
    fillWidth: e,
    fillHeight: a,
    contentScale: n,
    radius: f,
    borderColor: i,
    borderWeight: c,
    state: S,
    enableZoom: g,
    ratio: o,
    className: E,
    loadStates: u,
    imageSrc: t
  });
  return /* @__PURE__ */ r(
    "div",
    {
      id: C,
      className: A,
      style: { ...x(), ...T },
      "data-testid": "image",
      ...L,
      children: /* @__PURE__ */ r(
        h,
        {
          currentState: D,
          imageSrc: t,
          contentDescription: s,
          onLoad: y,
          onError: N
        }
      )
    }
  );
};
export {
  J as Image,
  J as default
};
