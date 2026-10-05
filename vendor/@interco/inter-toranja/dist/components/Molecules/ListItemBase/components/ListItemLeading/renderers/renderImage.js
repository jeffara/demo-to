import { jsx as m } from "react/jsx-runtime";
import { mapStateToSTATE as o } from "../../../utils/stateMapper.js";
import { Image as a } from "../../../../../Atoms/Image/Image.js";
const p = (t, r, e) => t ? /* @__PURE__ */ m(
  a,
  {
    ...t,
    state: o(r),
    "data-testid": `${e}-image`
  }
) : null;
export {
  p as renderImage
};
