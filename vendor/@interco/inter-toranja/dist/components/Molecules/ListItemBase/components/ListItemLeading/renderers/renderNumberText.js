import { jsx as a, jsxs as o, Fragment as c } from "react/jsx-runtime";
import { mapStateToSTATE as m } from "../../../utils/stateMapper.js";
import { DecoratedText as t } from "../../../../DecoratedText/DecoratedText.js";
const x = (e, r, l) => {
  if (!e)
    return null;
  const i = e.variant ?? "number", n = i === "numberText" && e.additionalText, d = m(r);
  return /* @__PURE__ */ a(
    "div",
    {
      "data-testid": `${l}-numberText`,
      className: `listItemLeading__numberText listItemLeading__numberText--${i} listItemLeading__numberText--${d}`,
      children: n ? /* @__PURE__ */ o(c, { children: [
        /* @__PURE__ */ a(
          t,
          {
            classStyle: "Type.Label.Small.Bold",
            classColor: "Color.Text.Neutral.Primary",
            testId: `${l}-numberText-label`,
            children: e.label
          }
        ),
        /* @__PURE__ */ a(
          t,
          {
            classStyle: "Type.Caption.Regular",
            classColor: "Color.Text.Neutral.Secondary",
            testId: `${l}-numberText-additional`,
            children: (e == null ? void 0 : e.additionalText) ?? ""
          }
        )
      ] }) : /* @__PURE__ */ a(
        t,
        {
          classStyle: "Type.Label.Medium.Bold",
          classColor: "Color.Text.Neutral.Primary",
          testId: `${l}-numberText-label`,
          children: e.label
        }
      )
    }
  );
};
export {
  x as renderNumberText
};
