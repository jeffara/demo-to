import { useState as E, useEffect as u } from "react";
const v = ({
  isSearchOpen: t,
  isPermanentSearch: d,
  onSearchOpenChange: l
}) => {
  const [w, s] = E(
    d || t
  ), [f, i] = E(d || t);
  return u(() => {
    if (d || t) {
      s(!0), i(!0);
      return;
    }
    s(!1), l || i(!1);
  }, [t, d, l]), u(() => {
    if (d || !t || !l)
      return () => {
      };
    const o = (x) => {
      x.key === "Escape" && l(!1);
    };
    return window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o);
    };
  }, [d, t, l]), {
    isSearchFieldVisible: d || w,
    isSearchUiExpanded: d || f,
    areTrailingIconsHidden: !d && f,
    handleSearchExitComplete: () => {
      !t && !d && i(!1);
    },
    handleCloseSearch: () => {
      l == null || l(!1);
    }
  };
};
export {
  v as useHeaderSearchExpandState
};
