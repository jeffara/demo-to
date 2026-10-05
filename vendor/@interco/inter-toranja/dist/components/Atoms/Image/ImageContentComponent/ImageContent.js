import { jsx as m } from "react/jsx-runtime";
import { useRef as o, useCallback as f } from "react";
import { Icon as u } from "../../Icon/Icon.js";
const e = {
  SKELETON: "skeleton",
  ERROR: "error",
  LOADING: "loading",
  LOADED: "loaded"
}, A = ({
  currentState: t,
  imageSrc: a,
  contentDescription: c,
  onLoad: r,
  onError: i
}) => {
  const s = o(r);
  s.current = r;
  const g = f(
    (l) => {
      var n;
      l && t === e.LOADING && l.complete && l.naturalHeight !== 0 && ((n = s.current) == null || n.call(s));
    },
    [t]
  );
  switch (t) {
    case e.SKELETON:
      return null;
    case e.ERROR:
      return /* @__PURE__ */ m(u, { asset: "ic_image_error", contentDescription: "Erro no carregamento da imagem" });
    case e.LOADING:
      return /* @__PURE__ */ m(
        "img",
        {
          ref: g,
          src: a,
          alt: c,
          className: "image__img",
          onLoad: r,
          onError: i,
          style: { opacity: 0 }
        }
      );
    case e.LOADED:
    default:
      return a ? /* @__PURE__ */ m(
        "img",
        {
          ref: g,
          src: a,
          alt: c,
          className: "image__img",
          onLoad: r,
          onError: i
        }
      ) : null;
  }
};
export {
  A as ImageContent
};
