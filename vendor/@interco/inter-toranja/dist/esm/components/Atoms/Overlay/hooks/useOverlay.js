import { useState as e } from "react";
import { OVERLAY_VISIBILITY as t } from "../types.js";
function V() {
  const [i, o] = e(t.HIDDEN);
  return {
    visibility: i,
    show: () => o(t.VISIBLE),
    hide: () => {
      o(t.HIDDEN);
    },
    toggle: () => {
      o(
        (I) => I === t.VISIBLE ? t.HIDDEN : t.VISIBLE
      );
    }
  };
}
export {
  V as useOverlay
};
