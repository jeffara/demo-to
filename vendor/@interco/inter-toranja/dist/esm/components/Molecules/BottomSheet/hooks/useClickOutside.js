import { useEffect as a } from "react";
const E = ({
  ref: o,
  extraRef: n,
  isActive: e,
  onClickOutside: s
}) => {
  a(() => {
    if (!e)
      return;
    const r = (u) => {
      var c, i;
      const t = u.target;
      if (!(t instanceof Node))
        return;
      const d = !!((c = o.current) != null && c.contains(t)), m = !!((i = n == null ? void 0 : n.current) != null && i.contains(t));
      d || m || s();
    };
    return document.addEventListener("mousedown", r), () => {
      document.removeEventListener("mousedown", r);
    };
  }, [o, n, e, s]);
};
export {
  E as useClickOutside
};
