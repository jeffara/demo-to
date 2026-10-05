import { useState as u, useEffect as x } from "react";
const f = (e) => {
  const [n, d] = u(0);
  return x(() => {
    var r;
    if ((r = e[n]) != null && r.disabled) {
      const o = e.findIndex((t) => !(t != null && t.disabled));
      d(o !== -1 ? o : 0);
    }
  }, [e, n]), [n, d];
};
export {
  f as useSegmentedControlState
};
