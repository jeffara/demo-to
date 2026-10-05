import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { useAlert as f } from "./hooks/useAlert.js";
import { Signal as S } from "../../Atoms/Signal/Signal.js";
import { Text as l } from "../../Atoms/Text/Text.js";
import { TextWeight as o, TextSize as s, TextType as n } from "../../Atoms/Text/types.js";
import { Link as g } from "../Link/Link.js";
import { FEEDBACK as L, STATE as N, SIZE as k, VARIANT as E } from "../../../utils/pattern.js";
import '../../../assets/components/Molecules/Alert/Alert.modules.css';/* empty css                   */
const F = (a) => {
  const { variant: m = L.INFORMATION, state: e = N.ENABLED, title: d, description: c, link: i } = a, { textsClassName: p, hasDescription: h, hasLink: x, handleLinkClick: T, handleLinkTag: A } = f(a);
  return /* @__PURE__ */ r("div", { "data-testid": "container-alert", className: "alert", role: "status", children: [
    /* @__PURE__ */ t("div", { className: "alert__signal", children: /* @__PURE__ */ t(S, { variant: m, state: e }) }),
    /* @__PURE__ */ r("div", { className: p, children: [
      /* @__PURE__ */ t(
        l,
        {
          as: "p",
          "data-alert-slot": "title",
          textType: n.Body,
          textSize: s.Small,
          textWeight: o.Bold,
          state: e,
          children: d
        }
      ),
      h && /* @__PURE__ */ t(
        l,
        {
          as: "p",
          "data-alert-slot": "description",
          textType: n.Body,
          textSize: s.Small,
          textWeight: o.Regular,
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
  F as Alert
};
