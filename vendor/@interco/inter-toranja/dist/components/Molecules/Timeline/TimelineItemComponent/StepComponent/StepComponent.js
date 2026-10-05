import { jsx as e } from "react/jsx-runtime";
import { TimelineStepStatusEnum as s } from "../../utils/enums.js";
import { classNamesMerge as n } from "../../../../../utils/classNamesMerge.js";
import { STATE as l, SIZE as N } from "../../../../../utils/pattern.js";
import { Signal as _ } from "../../../../Atoms/Signal/Signal.js";
import { Icon as C } from "../../../../Atoms/Icon/Icon.js";
import '../../../../../assets/StepComponent.css';const A = ({
  status: t,
  state: r = l.ENABLED,
  isSmaller: p
}) => {
  const c = "step-container", o = "stepStatus__dot", i = "stepStatus__icon", m = "stepStatus__signal", E = "stepStatus--skeleton", d = p ? `${c}--small` : `${c}--large`, S = t === s.CURRENT && r === l.DISABLED ? "incomplete" : "current";
  if (r === l.SKELETON) {
    const L = n(c, d);
    return /* @__PURE__ */ e("div", { className: L, children: /* @__PURE__ */ e("span", { className: E, "data-testid": "step-skeleton" }) });
  }
  let a;
  switch (t) {
    case s.CURRENT:
      a = /* @__PURE__ */ e(
        "span",
        {
          className: n(o, `${o}--${S}`),
          "data-testid": "step-current"
        }
      );
      break;
    case s.CURRENT_PADLOCK:
      a = /* @__PURE__ */ e("span", { className: i, "data-testid": "step-current-padlock", children: /* @__PURE__ */ e(C, { asset: "ic_padlock", size: N.SMALL }) });
      break;
    case s.INCOMPLETE:
      a = /* @__PURE__ */ e("span", { className: n(o, `${o}--incomplete`), "data-testid": "step-incomplete" });
      break;
    case s.INCOMPLETE_PADLOCK:
      a = /* @__PURE__ */ e(
        "span",
        {
          className: n(i, `${i}--incomplete`),
          "data-testid": "step-incomplete-padlock",
          children: /* @__PURE__ */ e(C, { asset: "ic_padlock_open", size: N.SMALL })
        }
      );
      break;
    case s.SUCCESS:
    case s.ERROR:
    case s.WARNING:
    case s.PENDING:
      a = /* @__PURE__ */ e(
        "span",
        {
          className: n(m, `${m}--${t}`),
          "data-testid": `step-${t}`,
          children: /* @__PURE__ */ e(_, { size: p ? "small" : "medium", variant: t, state: "enabled" })
        }
      );
      break;
    default:
      a = /* @__PURE__ */ e("span", {});
      break;
  }
  const k = n(c, d);
  return /* @__PURE__ */ e("div", { className: k, "data-testid": `step-container-${t}`, children: a });
};
export {
  A as StepComponent
};
