import { useState as p, useRef as u, useLayoutEffect as f } from "react";
const x = (o, d) => {
  const [l, a] = p({
    left: "0px",
    width: "0px",
    height: "0px",
    top: "0px"
  }), c = u([]), r = u(null);
  return f(() => {
    const g = () => {
      const t = c.current[o], i = r.current;
      if (!t || !i)
        return null;
      const e = t.getBoundingClientRect(), s = i.getBoundingClientRect();
      return {
        left: `${e.left - s.left}px`,
        width: `${e.width}px`,
        height: `${e.height}px`,
        top: `${e.top - s.top}px`
      };
    }, n = () => {
      const t = g();
      t && a(t);
    };
    return n(), window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, [o, d]), [l, r, c];
};
export {
  x as useSegmentedControlBackground
};
