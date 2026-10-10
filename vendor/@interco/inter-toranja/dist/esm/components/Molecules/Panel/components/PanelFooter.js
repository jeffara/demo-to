import { jsx as i, jsxs as l, Fragment as c } from "react/jsx-runtime";
import { Divider as o } from "../../../Atoms/Divider/Divider.js";
import { Spinner as t } from "../../../Atoms/ProgressIndicator/Spinner/Spinner.js";
import { Pagination as s } from "../../Pagination/Pagination.js";
import { Button as a } from "../../Button/Button.js";
const m = ({
  footer: r,
  actionsClassName: e,
  actionClassName: n
}) => /* @__PURE__ */ l(c, { children: [
  /* @__PURE__ */ i("div", { className: "panel__divider", children: /* @__PURE__ */ i(o, {}) }),
  /* @__PURE__ */ l("div", { className: e, children: [
    r.secondary && /* @__PURE__ */ i("div", { className: n, children: /* @__PURE__ */ i(
      a,
      {
        label: r.secondary.label,
        hierarchy: "secondaryOutlined",
        size: "large",
        fill: !0,
        onClick: r.secondary.onClick
      }
    ) }),
    /* @__PURE__ */ i("div", { className: n, children: /* @__PURE__ */ i(
      a,
      {
        label: r.primary.label,
        hierarchy: "secondary",
        size: "large",
        fill: !0,
        onClick: r.primary.onClick
      }
    ) })
  ] })
] }), u = ({
  footer: r,
  className: e,
  actionsClassName: n,
  actionClassName: d
}) => r.type === "loading" ? /* @__PURE__ */ i("div", { className: e, children: /* @__PURE__ */ i(t, { size: "large", ariaLabel: "Carregando" }) }) : r.type === "pagination" ? /* @__PURE__ */ i("div", { className: e, children: /* @__PURE__ */ i(s, { ...r.pagination }) }) : /* @__PURE__ */ i("div", { className: e, children: /* @__PURE__ */ i(
  m,
  {
    footer: r,
    actionsClassName: n,
    actionClassName: d
  }
) });
export {
  u as PanelFooter
};
