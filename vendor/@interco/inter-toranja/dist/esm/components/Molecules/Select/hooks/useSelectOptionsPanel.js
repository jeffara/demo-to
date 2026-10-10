import { useRef as v, useState as y, useCallback as c, useEffect as I } from "react";
import { findInitialActiveIndex as x, getVerticalNavigationDirection as m, findNextEnabledIndex as h, findFirstEnabledIndex as R, findLastEnabledIndex as g } from "../../DatePicker/utils/dropdownNavigation.js";
const C = ({
  id: b,
  options: n,
  onSelect: r
}) => {
  const a = v([]), [d, f] = y(() => x(n)), l = n[d], k = l ? `${b}-option-${l.value}` : void 0, s = c((e) => {
    var t;
    f(e), (t = a.current[e]) == null || t.focus();
  }, []);
  I(() => {
    var t;
    const e = x(n);
    f(e), (t = a.current[e]) == null || t.focus();
  }, [n]), I(() => {
    var e, t;
    (t = (e = a.current[d]) == null ? void 0 : e.scrollIntoView) == null || t.call(e, { block: "nearest" });
  }, [d]);
  const p = c(
    (e, t, o) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(), o.isDisabled || r(o.value);
        return;
      }
      const u = m(e.key);
      if (u !== void 0) {
        e.preventDefault(), s(h(n, t, u));
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        const i = R(n);
        i >= 0 && s(i);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        const i = g(n);
        i >= 0 && s(i);
      }
    },
    [s, r, n]
  ), D = c((e, t) => {
    a.current[e] = t;
  }, []), E = c((e) => {
    f(e);
  }, []), O = c(
    (e) => {
      e.isDisabled || r(e.value);
    },
    [r]
  );
  return {
    activeOptionId: k,
    setOptionRef: D,
    handleOptionFocus: E,
    handleOptionKeyDown: p,
    handleOptionClick: O
  };
};
export {
  C as useSelectOptionsPanel
};
