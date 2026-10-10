import { useState as p, useRef as u, useLayoutEffect as g } from "react";
const h = (s, d) => {
  const [f, a] = p({
    left: "0px",
    width: "0px",
    height: "0px",
    top: "0px"
  }), r = u([]), i = u(null);
  return g(() => {
    const l = () => {
      const e = r.current[s], n = i.current;
      if (!e || !n)
        return null;
      const t = e.getBoundingClientRect(), c = n.getBoundingClientRect();
      return {
        left: `${t.left - c.left}px`,
        width: `${t.width}px`,
        height: `${t.height}px`,
        top: `${t.top - c.top}px`
      };
    }, o = () => {
      const e = l();
      e && a(e);
    };
    if (o(), window.addEventListener("resize", o), typeof ResizeObserver < "u") {
      const e = i.current, n = new ResizeObserver(() => {
        o();
      });
      return e && n.observe(e), r.current.forEach((t) => {
        t && n.observe(t);
      }), () => {
        n.disconnect(), window.removeEventListener("resize", o);
      };
    }
    return () => {
      window.removeEventListener("resize", o);
    };
  }, [s, d]), [f, i, r];
};
export {
  h as useSegmentedControlBackground
};
