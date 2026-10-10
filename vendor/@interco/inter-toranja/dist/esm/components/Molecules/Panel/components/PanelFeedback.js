import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { Signal as p } from "../../../Atoms/Signal/Signal.js";
import { Text as o } from "../../../Atoms/Text/Text.js";
import { TextSize as s, TextType as n } from "../../../Atoms/Text/types.js";
import { STATE as u } from "../../../../utils/pattern.js";
import { Button as c } from "../../Button/Button.js";
const b = ({
  copy: i,
  className: d,
  copyClassName: m,
  actionsClassName: h,
  actionClassName: t,
  primaryAction: l,
  secondaryAction: r
}) => {
  const x = !!(l || r);
  return /* @__PURE__ */ a("div", { className: d, children: [
    /* @__PURE__ */ e(p, { variant: i.signalVariant, state: u.ENABLED, size: "large" }),
    /* @__PURE__ */ a("div", { className: m, children: [
      /* @__PURE__ */ e(
        o,
        {
          textType: n.Display,
          textSize: s.Small,
          colorScheme: "neutral",
          colorVariant: "primary",
          as: "p",
          children: i.title
        }
      ),
      /* @__PURE__ */ e(
        o,
        {
          textType: n.Body,
          textSize: s.Medium,
          textWeight: "regular",
          colorScheme: "neutral",
          colorVariant: "secondary",
          as: "p",
          children: i.description
        }
      )
    ] }),
    x && /* @__PURE__ */ a("div", { className: h, children: [
      r && /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
        c,
        {
          label: r.label,
          hierarchy: "secondaryOutlined",
          size: "large",
          fill: !0,
          onClick: r.onClick
        }
      ) }),
      l && /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
        c,
        {
          label: l.label,
          hierarchy: "secondary",
          size: "large",
          fill: !0,
          onClick: l.onClick
        }
      ) })
    ] })
  ] });
};
export {
  b as PanelFeedback
};
