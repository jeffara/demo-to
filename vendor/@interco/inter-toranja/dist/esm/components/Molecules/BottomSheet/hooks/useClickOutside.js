import { useEffect as u } from "react";
const c = ({ ref: e, isActive: t, onClickOutside: n }) => {
  u(() => {
    if (!t)
      return;
    const r = (o) => {
      e.current && !e.current.contains(o.target) && n();
    };
    return document.addEventListener("mousedown", r), () => {
      document.removeEventListener("mousedown", r);
    };
  }, [e, t, n]);
};
export {
  c as useClickOutside
};
