import { jsxs as o, jsx as t } from "react/jsx-runtime";
import '../../../assets/components/Molecules/SectionSubtitle/SectionSubtitle.modules.css';/* empty css                             */
import { Divider as s } from "../../Atoms/Divider/Divider.js";
import { Text as r } from "../../Atoms/Text/Text.js";
import { TextWeight as n, TextType as a, TextSize as c } from "../../Atoms/Text/types.js";
import { STATE as m } from "../../../utils/pattern.js";
const h = ({
  state: e = m.ENABLED,
  subtitle: d = "Subtitle",
  trailingLabel: l,
  trailingValue: i
}) => /* @__PURE__ */ o("li", { "data-testid": "sectionSubtitle", className: "sectionSubtitle", children: [
  /* @__PURE__ */ o("div", { "data-testid": "sectionSubtitle__container", className: "sectionSubtitle__container", children: [
    /* @__PURE__ */ t(
      r,
      {
        state: e,
        as: "p",
        textSize: c.Medium,
        textType: a.Label,
        textWeight: n.Regular,
        children: d
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        "data-testid": "sectionSubtitle__container__trailing",
        className: "sectionSubtitle__container__trailing",
        children: [
          l && /* @__PURE__ */ t(
            r,
            {
              state: e,
              as: "p",
              textSize: c.Medium,
              textType: a.Label,
              textWeight: n.Medium,
              children: l
            }
          ),
          i && /* @__PURE__ */ t(
            r,
            {
              state: e,
              as: "p",
              id: `sectionSubtitle__trailingValue--${i.variant}`,
              textSize: c.Medium,
              textType: a.Label,
              textWeight: n.Medium,
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
  h as SectionSubtitle
};
