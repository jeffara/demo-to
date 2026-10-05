import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { Signal as x } from "../../../../Atoms/Signal/Signal.js";
import { Text as t } from "../../../../Atoms/Text/Text.js";
import { TextSize as d, TextType as a, TextWeight as o } from "../../../../Atoms/Text/types.js";
import { Alert as h } from "../../../../Molecules/Alert/Alert.js";
import { SIZE as f, FEEDBACK as y } from "../../../../../utils/pattern.js";
import { BindLogo as g } from "../BindLogo/BindLogo.js";
const z = ({
  state: i,
  title: n,
  value: s,
  description: m,
  signalVariant: l,
  shouldShowPoweredBy: p,
  alert: r
}) => /* @__PURE__ */ c("div", { className: "feedback-screen__hero", children: [
  /* @__PURE__ */ e("div", { className: "feedback-screen__signal", children: /* @__PURE__ */ e(x, { variant: l, size: f.LARGE, state: i }) }),
  /* @__PURE__ */ c("div", { className: "feedback-screen__text", children: [
    n && /* @__PURE__ */ e(t, { textType: a.Display, textSize: d.Small, state: i, children: n }),
    s && /* @__PURE__ */ e(
      t,
      {
        textType: a.Display,
        textSize: d.Medium,
        textWeight: o.Medium,
        state: i,
        children: s
      }
    ),
    m && /* @__PURE__ */ e(
      t,
      {
        as: "p",
        colorVariant: "secondary",
        textType: a.Body,
        textSize: d.Large,
        textWeight: o.Regular,
        state: i,
        children: m
      }
    )
  ] }),
  p && /* @__PURE__ */ c("div", { className: "feedback-screen__powered-by", "data-testid": "feedback-screen-powered-by", children: [
    /* @__PURE__ */ e(
      t,
      {
        as: "span",
        textType: a.Body,
        textSize: d.Medium,
        textWeight: o.Regular,
        state: i,
        children: "Powered by"
      }
    ),
    /* @__PURE__ */ e(g, {})
  ] }),
  r && /* @__PURE__ */ e("div", { className: "feedback-screen__alert", children: /* @__PURE__ */ e(
    h,
    {
      variant: r.variant ?? y.INFORMATION,
      state: i,
      title: r.title,
      description: r.description ?? "",
      link: r.link,
      onTag: r.onTag
    }
  ) })
] });
export {
  z as FeedbackHero
};
