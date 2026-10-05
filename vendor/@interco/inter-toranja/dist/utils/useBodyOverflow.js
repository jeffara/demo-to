import { useEffect as o } from "react";
const r = (e) => {
  o(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [e]);
};
export {
  r as useBodyOverflow
};
