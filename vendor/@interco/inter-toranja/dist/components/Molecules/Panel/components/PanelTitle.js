import { jsxs as m, Fragment as s, jsx as i } from "react/jsx-runtime";
import { classNamesMerge as t } from "../../../../utils/classNamesMerge.js";
import { SectionTitle as o } from "../../SectionTitle/SectionTitle.js";
import { Divider as c } from "../../../Atoms/Divider/Divider.js";
const h = ({
  title: e,
  titleId: a,
  className: n,
  onTitleClick: r,
  showDivider: d
}) => /* @__PURE__ */ m(s, { children: [
  r && /* @__PURE__ */ i("div", { className: t(n, "panel__title--navigation"), id: a, children: /* @__PURE__ */ i(o, { title: e, variant: "navigation", onClick: r }) }),
  !r && /* @__PURE__ */ i("div", { className: n, id: a, children: /* @__PURE__ */ i(o, { title: e, showIcon: !1 }) }),
  d && /* @__PURE__ */ i("div", { className: "panel__divider", children: /* @__PURE__ */ i(c, {}) })
] });
export {
  h as PanelTitle
};
