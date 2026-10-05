import { jsxs as C, jsx as t } from "react/jsx-runtime";
import { useRef as f, useEffect as h } from "react";
import { useListItemContext as u } from "../../context/ListItemContext.js";
import { useListItemTaggingContext as N } from "../../hooks/useListItemTaggingContext.js";
import { mapStateToSTATE as v } from "../../utils/stateMapper.js";
import { mergeTagSlice as x, CONTENT_TAG_KEYS as b } from "../../utils/tagDataUtils.js";
import { Tag as S } from "../../../../Atoms/Tag/Tag.js";
import { DecoratedText as c } from "../../../DecoratedText/DecoratedText.js";
import { v as D } from "../../../../../v4-CRLUkzQ6.js";
import { STATE as _ } from "../../../../../utils/pattern.js";
import '../../../../../assets/ListItemContent.css';const G = ({
  label: n,
  labelIcon: r,
  paragraph: a,
  paragraphSupport: s,
  tags: e,
  testId: l = "listItemContent"
}) => {
  const { state: m } = u(), { setTagData: T } = N(), p = f(
    Array((e == null ? void 0 : e.length) ?? 0).fill("").map(() => D())
  ), y = v(m);
  h(() => {
    T(
      (o) => {
        var d;
        return x(o, b, {
          label: n,
          label_icon: r ? "icon" : void 0,
          paragraph: a ?? void 0,
          paragraph_support: s ?? void 0,
          tag_label: ((d = e == null ? void 0 : e[0]) == null ? void 0 : d.label) ?? void 0
        });
      }
    );
  }, [n, r, a, s, e, T]);
  const i = m === _.LOADING ? _.ENABLED : m;
  return /* @__PURE__ */ C("div", { className: "listItemContent", children: [
    /* @__PURE__ */ C("div", { "data-testid": `${l}-label`, className: "listItemContent__label", children: [
      /* @__PURE__ */ t(
        c,
        {
          state: i,
          classStyle: "Type.Body.Medium.Bold",
          classColor: i === "disabled" ? "Color.Text.Disabled" : "Color.Text.Neutral.Primary",
          children: n
        }
      ),
      r && /* @__PURE__ */ t("span", { className: "listItemContent__label__icon", "data-testid": `${l}-label-icon`, children: r })
    ] }),
    a && /* @__PURE__ */ t("div", { "data-testid": `${l}-paragraph`, className: "listItemContent__paragraphs", children: /* @__PURE__ */ t(
      c,
      {
        state: i,
        classStyle: "Type.Body.Medium.Regular",
        classColor: m === "disabled" ? "Color.Text.Disabled" : "Color.Text.Neutral.Secondary",
        children: a
      }
    ) }),
    s && /* @__PURE__ */ t("div", { "data-testid": `${l}-paragraphSupport`, className: "listItemContent__paragraphs", children: /* @__PURE__ */ t(
      c,
      {
        state: i,
        classStyle: "Type.Body.Medium.Regular",
        classColor: i === "disabled" ? "Color.Text.Disabled" : "Color.Text.Neutral.Secondary",
        children: s
      }
    ) }),
    e && /* @__PURE__ */ t("div", { "data-testid": `${l}-tags`, className: "listItemContent__tags", children: e.filter((o) => o !== void 0).map((o, d) => /* @__PURE__ */ t(
      S,
      {
        label: o.label,
        color: o.color,
        size: "small",
        hierarchy: o.hierarchy ?? "strong",
        state: y
      },
      p.current[d]
    )) })
  ] });
};
export {
  G as ListItemContent
};
