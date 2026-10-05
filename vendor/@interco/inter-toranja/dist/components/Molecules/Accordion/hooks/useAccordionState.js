import s from "react";
import { STATE as S } from "../../../../utils/pattern.js";
const p = ({
  expand: n,
  state: E,
  accordionRef: t
}) => {
  const [m, r] = s.useState(n), [v, l] = s.useState(!1), e = E === S.SKELETON, f = E === S.DISABLED;
  s.useEffect(() => {
    e && r(!1);
  }, [e]), s.useEffect(() => {
    r(n);
  }, [n]);
  const L = () => {
    f || e || r((u) => !u);
  };
  return s.useEffect(() => {
    const u = () => {
      l(!0);
    }, i = () => {
      l(!1);
    };
    return t != null && t.current && (t.current.addEventListener("focusin", u), t.current.addEventListener("focusout", i)), () => {
      t != null && t.current && (t.current.removeEventListener("focusin", u), t.current.removeEventListener("focusout", i));
    };
  }, [t]), {
    isExpanded: e ? !1 : m,
    toggleExpanded: L,
    isAccordionFocused: v,
    isDisabled: f,
    isSkeleton: e
  };
};
export {
  p as useAccordionState
};
