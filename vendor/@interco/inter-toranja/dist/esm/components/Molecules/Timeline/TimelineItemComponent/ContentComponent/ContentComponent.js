import { jsx as i, Fragment as h } from "react/jsx-runtime";
import { TimelineStateEnum as s, TimelineItemContentType as l } from "../../utils/enums.js";
import { TextWeight as n, TextSize as p, TextType as T } from "../../../../Atoms/Text/types.js";
import { Tag as f } from "../../../../Atoms/Tag/Tag.js";
import { Link as x } from "../../../Link/Link.js";
import { Button as y } from "../../../Button/Button.js";
import { Text as b } from "../../../../Atoms/Text/Text.js";
const B = ({
  content: e,
  state: o = s.ENABLED,
  onTag: t,
  title: d
}) => {
  const a = o === s.DISABLED, m = (r) => {
    t && t((u) => ({
      ...u,
      ...r(),
      ComponentProperties: {
        nested_in: "Timeline",
        nested_label: d
      }
    }));
  };
  switch (e == null ? void 0 : e.type) {
    case l.AuxiliarText:
      return /* @__PURE__ */ i(
        b,
        {
          textType: T.Body,
          textSize: p.Small,
          textWeight: n.Regular,
          state: a ? "disabled" : "enabled",
          children: e.text
        }
      );
    case l.Button:
      return Array.isArray(e.buttons) ? /* @__PURE__ */ i(h, { children: e.buttons.map(
        (r) => r ? /* @__PURE__ */ i(
          y,
          {
            label: r.label,
            size: "small",
            onClick: r.onClick,
            disabled: a || !!r.disabled,
            onTag: m,
            hierarchy: r.hierarchy,
            hug: !0
          }
        ) : null
      ) }) : null;
    case l.Link:
      return /* @__PURE__ */ i(x, { label: e.label, href: e.href, size: "small", onTag: m });
    case l.Tag:
      return /* @__PURE__ */ i(
        f,
        {
          color: e.color,
          hierarchy: e.hierarchy ?? "soft",
          label: e.label,
          size: "small"
        }
      );
    case l.Slot:
      return /* @__PURE__ */ i("div", { className: `timelineItem__slot ${a ? "timelineItem__slot--disabled" : ""}`, children: e.content });
    default:
      return /* @__PURE__ */ i("div", { className: "timelineItem__empty" });
  }
};
export {
  B as TimelineItemContentRenderer
};
