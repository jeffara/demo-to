import { jsx as r } from "react/jsx-runtime";
import { ErrorIcon as a } from "./icons/ErrorIcon.js";
import { InformationIcon as s } from "./icons/InformationIcon.js";
import { PendingIcon as m } from "./icons/Pending.js";
import { ScheduledIcon as E } from "./icons/ScheduledIcon.js";
import { SuccessIcon as I } from "./icons/SuccessIcon.js";
import { WarningIcon as S } from "./icons/WarningIcon.js";
import { SIZE as u, STATE as f, FEEDBACK as n } from "../../../utils/pattern.js";
import '../../../assets/Signal.css';const g = (o) => {
  const { variant: t, state: e = f.ENABLED, size: c = u.MEDIUM } = o, i = () => {
    switch (t) {
      case n.SUCCESS:
        return /* @__PURE__ */ r(I, {});
      case n.WARNING:
        return /* @__PURE__ */ r(S, {});
      case n.ERROR:
        return /* @__PURE__ */ r(a, {});
      case n.INFORMATION:
        return /* @__PURE__ */ r(s, {});
      case n.PENDING:
        return /* @__PURE__ */ r(m, {});
      case n.SCHEDULED:
        return /* @__PURE__ */ r(E, {});
      default:
        return n.SUCCESS;
    }
  };
  return /* @__PURE__ */ r("div", { "data-testid": "container-icon", className: `signal--${c}--${e}`, children: i() });
};
export {
  g as Signal
};
