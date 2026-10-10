import { useRef as l, useCallback as s, useEffect as v } from "react";
import { useClickOutside as S } from "../../BottomSheet/hooks/useClickOutside.js";
const I = ({
  monthTitleId: u,
  openDropdown: r,
  onCloseDropdown: o,
  onMonthSelect: f,
  onYearSelect: h
}) => {
  const a = l(null), i = `${u}-month`, d = `${u}-year`, R = `${u}-month-dropdown`, k = `${u}-year-dropdown`, C = r === "month", E = r === "year", p = l(null), n = l(!1), m = s(
    (e) => {
      var c;
      const t = e === "month" ? i : d;
      return ((c = a.current) == null ? void 0 : c.querySelector(`#${CSS.escape(t)}`)) ?? null;
    },
    [i, d]
  ), O = s(() => {
    n.current = !1, o();
  }, [o]), y = s(() => {
    n.current = !0, o();
  }, [o]);
  v(() => {
    var t;
    const e = p.current;
    p.current = r, e && r === null && n.current && ((t = m(e)) == null || t.focus()), n.current = !1;
  }, [m, r]), S({
    ref: a,
    isActive: r !== null,
    onClickOutside: O
  }), v(() => {
    if (!r)
      return () => {
      };
    const e = a.current;
    if (!e)
      return () => {
      };
    const t = (c) => {
      c.key === "Escape" && (c.stopPropagation(), y());
    };
    return e.addEventListener("keydown", t), () => {
      e.removeEventListener("keydown", t);
    };
  }, [y, r]);
  const $ = s(
    (e) => {
      n.current = !0, f(e);
    },
    [f]
  ), F = s(
    (e) => {
      n.current = !0, h(e);
    },
    [h]
  );
  return {
    headerRef: a,
    monthChipId: i,
    yearChipId: d,
    monthDropdownId: R,
    yearDropdownId: k,
    isMonthDropdownOpen: C,
    isYearDropdownOpen: E,
    handleMonthSelect: $,
    handleYearSelect: F
  };
};
export {
  I as useCalendarHeader
};
