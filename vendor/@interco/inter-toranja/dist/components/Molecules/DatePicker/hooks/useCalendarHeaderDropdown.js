import { useRef as O, useState as y, useCallback as r, useEffect as I } from "react";
import { findInitialActiveIndex as x, getVerticalNavigationDirection as m, findNextEnabledIndex as h, findFirstEnabledIndex as w, findLastEnabledIndex as C } from "../utils/dropdownNavigation.js";
const A = ({
  id: b,
  options: t,
  onSelect: a
}) => {
  const c = O([]), [s, f] = y(() => x(t)), o = t[s], D = o ? `${b}-option-${o.value}` : void 0, d = r((e) => {
    var n;
    f(e), (n = c.current[e]) == null || n.focus();
  }, []);
  I(() => {
    var n;
    const e = x(t);
    f(e), (n = c.current[e]) == null || n.focus();
  }, [t]), I(() => {
    var e, n;
    (n = (e = c.current[s]) == null ? void 0 : e.scrollIntoView) == null || n.call(e, { block: "nearest" });
  }, [s]);
  const k = r(
    (e, n, l) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(), l.isDisabled || a(l.value);
        return;
      }
      const u = m(e.key);
      if (u !== void 0) {
        e.preventDefault(), d(h(t, n, u));
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        const i = w(t);
        i >= 0 && d(i);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        const i = C(t);
        i >= 0 && d(i);
      }
    },
    [d, a, t]
  ), p = r((e, n) => {
    c.current[e] = n;
  }, []), E = r((e) => {
    f(e);
  }, []), v = r(
    (e) => {
      e.isDisabled || a(e.value);
    },
    [a]
  );
  return {
    activeOptionId: D,
    setOptionRef: p,
    handleOptionFocus: E,
    handleOptionKeyDown: k,
    handleOptionClick: v
  };
};
export {
  A as useCalendarHeaderDropdown
};
