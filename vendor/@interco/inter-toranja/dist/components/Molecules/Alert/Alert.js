import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { useAlert as f } from "./hooks/useAlert.js";
import { Signal as S } from "../../Atoms/Signal/Signal.js";
import { Text as r } from "../../Atoms/Text/Text.js";
import { TextWeight as s, TextSize as o, TextType as n } from "../../Atoms/Text/types.js";
import { Link as g } from "../Link/Link.js";
import { FEEDBACK as L, STATE as N, SIZE as k, VARIANT as E } from "../../../utils/pattern.js";
import '../../../assets/Alert.css';const I = (a) => {
  const { variant: m = L.INFORMATION, state: e = N.ENABLED, title: d, description: c, link: i } = a, { textsClassName: h, hasDescription: p, hasLink: x, handleLinkClick: T, handleLinkTag: A } = f(a);
  return /* @__PURE__ */ l("div", { "data-testid": "container-alert", className: "alert", role: "status", children: [
    /* @__PURE__ */ t("div", { className: "alert__signal", children: /* @__PURE__ */ t(S, { variant: m, state: e }) }),
    /* @__PURE__ */ l("div", { className: h, children: [
      /* @__PURE__ */ t(
        r,
        {
          as: "p",
          "data-alert-slot": "title",
          textType: n.Body,
          textSize: o.Small,
          textWeight: s.Bold,
          state: e,
          children: d
        }
      ),
      p && /* @__PURE__ */ t(
        r,
        {
          as: "p",
          "data-alert-slot": "description",
          textType: n.Body,
          textSize: o.Small,
          textWeight: s.Regular,
          state: e,
          children: c
        }
      ),
      x && i && /* @__PURE__ */ t(
        g,
        {
          href: i.href,
          variant: E.DEFAULT,
          label: i.label,
          size: k.SMALL,
          state: e,
          onClick: T,
          onTag: A
        }
      )
    ] })
  ] });
};
export {
  I as Alert
};
