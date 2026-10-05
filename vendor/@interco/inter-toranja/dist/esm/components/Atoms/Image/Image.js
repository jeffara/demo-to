import { jsx as r } from "react/jsx-runtime";
import { useImageState as b } from "./hooks/useImageState.js";
import { ImageContent as h } from "./ImageContentComponent/ImageContent.js";
import { ImageContentScale as j } from "./types.js";
import { getImageClasses as v } from "./utils/getImageClasses.js";
import { STATE as B } from "../../../utils/pattern.js";
import '../../../assets/components/Atoms/Image/Image.modules.css';/* empty css                   */
const K = ({
  src: m,
  contentDescription: s = "",
  contentScale: n = j.FILL,
  width: l,
  height: d,
  fillWidth: e = !1,
  fillHeight: o = !1,
  ratio: t,
  radius: i,
  borderColor: f,
  borderWeight: c,
  enableZoom: g = !1,
  state: p = B.ENABLED,
  onError: S,
  onLoad: I,
  id: C,
  className: E,
  ...L
}) => {
  const { imageSrc: a, loadStates: u, handleLoad: y, handleError: N, getDimensionStyles: x } = b({
    src: m,
    width: l,
    height: d,
    fillWidth: e,
    fillHeight: o,
    ratio: t,
    onLoad: I,
    onError: S
  }), { finalClassName: A, currentState: D, borderColorStyle: T } = v({
    fillWidth: e,
    fillHeight: o,
    contentScale: n,
    radius: i,
    borderColor: f,
    borderWeight: c,
    state: p,
    enableZoom: g,
    ratio: t,
    className: E,
    loadStates: u,
    imageSrc: a
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
          imageSrc: a,
          contentDescription: s,
          onLoad: y,
          onError: N
        }
      )
    }
  );
};
export {
  K as Image,
  K as default
};
