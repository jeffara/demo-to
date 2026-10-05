import { useRef as d, useCallback as c, useEffect as v } from "react";
import { useClickOutside as S } from "../../BottomSheet/hooks/useClickOutside.js";
const L = ({
  monthTitleId: s,
  openDropdown: t,
  onCloseDropdown: u,
  onMonthSelect: l,
  onYearSelect: f
}) => {
  const o = d(null), a = `${s}-month`, i = `${s}-year`, R = `${s}-month-dropdown`, k = `${s}-year-dropdown`, C = t === "month", E = t === "year", h = d(null), r = d(!1), m = c(
    (e) => {
      var y;
      const n = e === "month" ? a : i;
      return ((y = o.current) == null ? void 0 : y.querySelector(`#${CSS.escape(n)}`)) ?? null;
    },
    [a, i]
  ), O = c(() => {
    r.current = !1, u();
  }, [u]), p = c(() => {
    r.current = !0, u();
  }, [u]);
  v(() => {
    var n;
    const e = h.current;
    h.current = t, e && t === null && r.current && ((n = m(e)) == null || n.focus()), r.current = !1;
  }, [m, t]), S({
    ref: o,
    isActive: t !== null,
    onClickOutside: O
  }), v(() => {
    if (!t)
      return;
    const e = (n) => {
      n.key === "Escape" && p();
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e);
    };
  }, [p, t]);
  const $ = c(
    (e) => {
      r.current = !0, l(e);
    },
    [l]
  ), F = c(
    (e) => {
      r.current = !0, f(e);
    },
    [f]
  );
  return {
    headerRef: o,
    monthChipId: a,
    yearChipId: i,
    monthDropdownId: R,
    yearDropdownId: k,
    isMonthDropdownOpen: C,
    isYearDropdownOpen: E,
    handleMonthSelect: $,
    handleYearSelect: F
  };
};
export {
  L as useCalendarHeader
};
