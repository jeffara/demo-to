import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { mapTableVisualStateToSignalState as g, mapTableVisualStateToAtomState as d, mapTableVisualStateToTagState as m } from "../../shared/mapTableVisualState.js";
import { Icon as S } from "../../../../../Atoms/Icon/Icon.js";
import { Signal as T } from "../../../../../Atoms/Signal/Signal.js";
import { Tag as h } from "../../../../../Atoms/Tag/Tag.js";
import { Text as l } from "../../../../../Atoms/Text/Text.js";
import { TextWeight as n, TextSize as c, TextType as o } from "../../../../../Atoms/Text/types.js";
import { SIZE as x, FEEDBACK as y } from "../../../../../../utils/pattern.js";
const b = (e, t) => {
  const r = d(t);
  return /* @__PURE__ */ s("div", { className: "table-cell__text-with-icon", children: [
    e.icon && /* @__PURE__ */ a(S, { asset: e.icon, size: x.MEDIUM, state: r }),
    /* @__PURE__ */ s("div", { className: "table-cell__text", children: [
      /* @__PURE__ */ a(
        l,
        {
          state: r,
          textType: o.Body,
          textSize: c.Medium,
          textWeight: n.Regular,
          children: e.label
        }
      ),
      e.description && /* @__PURE__ */ a(
        l,
        {
          state: r,
          textType: o.Body,
          textSize: c.Small,
          textWeight: n.Regular,
          colorVariant: "secondary",
          children: e.description
        }
      )
    ] })
  ] });
}, z = (e, t) => {
  const r = d(t);
  return /* @__PURE__ */ s("div", { className: "table-cell__value", children: [
    /* @__PURE__ */ a(
      l,
      {
        state: r,
        textType: o.Body,
        textSize: c.Medium,
        textWeight: n.Regular,
        children: e.value
      }
    ),
    e.description && /* @__PURE__ */ a(
      l,
      {
        state: r,
        textType: o.Caption,
        textSize: c.Medium,
        textWeight: n.Regular,
        colorVariant: "secondary",
        children: e.description
      }
    )
  ] });
}, f = (e, t) => /* @__PURE__ */ a(
  h,
  {
    label: e.tag.label,
    color: e.tag.color,
    hierarchy: e.tag.hierarchy,
    size: e.tag.size,
    state: m(t)
  }
), M = (e, t) => {
  const r = m(t);
  if (e.tags.length === 0) {
    const i = d(t);
    return /* @__PURE__ */ a(
      l,
      {
        state: i,
        textType: o.Body,
        textSize: c.Medium,
        textWeight: n.Regular,
        children: "-"
      }
    );
  }
  return /* @__PURE__ */ a("div", { className: "table-cell__tags", children: e.tags.map((i, u) => /* @__PURE__ */ a(
    h,
    {
      label: i.label,
      color: i.color,
      hierarchy: i.hierarchy,
      size: i.size,
      state: r
    },
    `${i.label}-${u}`
  )) });
}, _ = (e, t) => /* @__PURE__ */ a(
  T,
  {
    variant: e.variant ?? y.SUCCESS,
    size: e.size ?? x.MEDIUM,
    state: g(t)
  }
), N = (e, t) => {
  switch (e.type) {
    case "text":
      return b(e, t);
    case "value":
      return z(e, t);
    case "status":
      return f(e, t);
    case "tags":
      return M(e, t);
    case "signal":
      return _(e, t);
    default:
      return null;
  }
};
export {
  N as renderContentCells
};
