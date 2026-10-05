import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { Divider as s } from "../../Atoms/Divider/Divider.js";
import { Text as o } from "../../Atoms/Text/Text.js";
import { TextWeight as r, TextType as a, TextSize as c } from "../../Atoms/Text/types.js";
import { STATE as m } from "../../../utils/pattern.js";
import '../../../assets/SectionSubtitle.css';const b = ({
  state: e = m.ENABLED,
  subtitle: d = "Subtitle",
  trailingLabel: l,
  trailingValue: i
}) => /* @__PURE__ */ n("li", { "data-testid": "sectionSubtitle", className: "sectionSubtitle", children: [
  /* @__PURE__ */ n("div", { "data-testid": "sectionSubtitle__container", className: "sectionSubtitle__container", children: [
    /* @__PURE__ */ t(
      o,
      {
        state: e,
        as: "p",
        textSize: c.Medium,
        textType: a.Label,
        textWeight: r.Regular,
        children: d
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        "data-testid": "sectionSubtitle__container__trailing",
        className: "sectionSubtitle__container__trailing",
        children: [
          l && /* @__PURE__ */ t(
            o,
            {
              state: e,
              as: "p",
              textSize: c.Medium,
              textType: a.Label,
              textWeight: r.Medium,
              children: l
            }
          ),
          i && /* @__PURE__ */ t(
            o,
            {
              state: e,
              as: "p",
              id: `sectionSubtitle__trailingValue--${i.variant}`,
              textSize: c.Medium,
              textType: a.Label,
              textWeight: r.Medium,
              children: i.value
            }
          )
        ]
      }
    )
  ] }),
  /* @__PURE__ */ t(s, {})
] });
export {
  b as SectionSubtitle
};
