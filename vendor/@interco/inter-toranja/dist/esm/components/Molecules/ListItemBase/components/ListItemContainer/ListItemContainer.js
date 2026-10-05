import { jsx as r } from "react/jsx-runtime";
import { getContainerClassName as I } from "../../utils/classNames.js";
const v = ({
  state: e,
  variant: o,
  interactive: s,
  onClick: n,
  onTag: a,
  containerMainClassName: c,
  children: l,
  testId: m = "listItemContainer",
  componentName: d
}) => {
  const t = s && e === "enabled", C = (i) => {
    if (!t) {
      i.preventDefault();
      return;
    }
    a && d !== "ListItemControl" && a(), n && n(i);
  }, f = I(e, o);
  return /* @__PURE__ */ r(
    "div",
    {
      tabIndex: t ? 0 : -1,
      role: t ? "button" : void 0,
      onClick: C,
      "data-testid": m,
      "data-non-interactive": !t,
      className: f,
      children: /* @__PURE__ */ r("div", { className: c, children: l })
    }
  );
};
export {
  v as ListItemContainer
};
