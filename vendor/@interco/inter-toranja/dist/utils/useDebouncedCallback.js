import { useRef as n, useEffect as c, useCallback as l } from "react";
const s = 1300;
function m(t) {
  const e = n(null), u = n(t);
  return c(() => {
    u.current = t;
  }, [t]), c(
    () => () => {
      e.current !== null && clearTimeout(e.current);
    },
    []
  ), l((...o) => {
    e.current !== null && clearTimeout(e.current), e.current = setTimeout(() => {
      var r;
      (r = u.current) == null || r.call(u, ...o);
    }, s);
  }, []);
}
export {
  m as useDebouncedCallback
};
