import { useEffect as c } from "react";
const a = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', d = (e) => Array.from(e.querySelectorAll(a)).filter(
  (n) => n.getAttribute("aria-hidden") !== "true"
), f = (e, n) => {
  c(() => {
    if (!n || !e.current)
      return () => {
      };
    const l = e.current, o = (t) => {
      if (t.key !== "Tab")
        return;
      const r = d(l);
      if (r.length === 0)
        return;
      const s = r[0], u = r[r.length - 1];
      if (t.shiftKey && document.activeElement === s) {
        t.preventDefault(), u.focus();
        return;
      }
      !t.shiftKey && document.activeElement === u && (t.preventDefault(), s.focus());
    };
    return document.addEventListener("keydown", o), () => {
      document.removeEventListener("keydown", o);
    };
  }, [e, n]);
};
export {
  a as FOCUSABLE_SELECTOR,
  d as getFocusableElements,
  f as useFocusTrap
};
