import { jsx as r, Fragment as h } from "react/jsx-runtime";
import { TimelineStateEnum as s, TimelineItemContentType as l } from "../../utils/enums.js";
import { TextWeight as n, TextSize as p, TextType as T } from "../../../../Atoms/Text/types.js";
import { Link as f } from "../../../Link/Link.js";
import { Tag as x } from "../../../../Atoms/Tag/Tag.js";
import { Button as y } from "../../../Button/Button.js";
import { Text as b } from "../../../../Atoms/Text/Text.js";
const C = ({
  content: e,
  state: o = s.ENABLED,
  onTag: t,
  title: d
}) => {
  const a = o === s.DISABLED, m = (i) => {
    t && t((u) => ({
      ...u,
      ...i(),
      ComponentProperties: {
        nested_in: "Timeline",
        nested_label: d
      }
    }));
  };
  switch (e == null ? void 0 : e.type) {
    case l.AuxiliarText:
      return /* @__PURE__ */ r(
        b,
        {
          textType: T.Body,
          textSize: p.Medium,
          textWeight: n.Regular,
          state: a ? "disabled" : "enabled",
          children: e.text
        }
      );
    case l.Button:
      return Array.isArray(e.buttons) ? /* @__PURE__ */ r(h, { children: e.buttons.map(
        (i) => i ? /* @__PURE__ */ r(
          y,
          {
            label: i.label,
            size: "small",
            onClick: i.onClick,
            disabled: a || !!i.disabled,
            onTag: m,
            hierarchy: i.hierarchy,
            hug: !0
          }
        ) : null
      ) }) : null;
    case l.Link:
      return /* @__PURE__ */ r(f, { label: e.label, href: e.href, size: "small", onTag: m });
    case l.Tag:
      return /* @__PURE__ */ r(
        x,
        {
          color: e.color,
          hierarchy: e.hierarchy ?? "soft",
          label: e.label,
          size: "small"
        }
      );
    case l.Slot:
      return /* @__PURE__ */ r("div", { className: `timelineItem__slot ${a ? "timelineItem__slot--disabled" : ""}`, children: e.content });
    default:
      return /* @__PURE__ */ r("div", { className: "timelineItem__empty" });
  }
};
export {
  C as TimelineItemContentRenderer
};
