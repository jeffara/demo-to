import { jsxs as o, jsx as a } from "react/jsx-runtime";
import { mapStateToSTATE as i } from "../../../utils/stateMapper.js";
import { DecoratedText as t } from "../../../../DecoratedText/DecoratedText.js";
const c = (r, l) => {
  const e = i(l);
  return /* @__PURE__ */ o("div", { className: "textTrailing", children: [
    /* @__PURE__ */ a(
      t,
      {
        state: e,
        classStyle: "Type.Body.Medium.Bold",
        classColor: "Color.Text.Neutral.Primary",
        children: r.labelTrailing
      }
    ),
    r.paragraphTrailing && /* @__PURE__ */ a(
      t,
      {
        state: e,
        classStyle: "Type.Body.Medium.Regular",
        classColor: "Color.Text.Neutral.Secondary",
        children: r.paragraphTrailing
      }
    )
  ] });
};
export {
  c as renderText
};
