import { jsx as r } from "react/jsx-runtime";
import '../../../assets/components/Atoms/Signal/Signal.modules.css';/* empty css                    */
import { ErrorIcon as a } from "./icons/ErrorIcon.js";
import { InformationIcon as m } from "./icons/InformationIcon.js";
import { PendingIcon as s } from "./icons/Pending.js";
import { ScheduledIcon as E } from "./icons/ScheduledIcon.js";
import { SuccessIcon as I } from "./icons/SuccessIcon.js";
import { WarningIcon as S } from "./icons/WarningIcon.js";
import { SIZE as u, STATE as f, FEEDBACK as o } from "../../../utils/pattern.js";
const U = (n) => {
  const { variant: t, state: e = f.ENABLED, size: c = u.MEDIUM } = n, i = () => {
    switch (t) {
      case o.SUCCESS:
        return /* @__PURE__ */ r(I, {});
      case o.WARNING:
        return /* @__PURE__ */ r(S, {});
      case o.ERROR:
        return /* @__PURE__ */ r(a, {});
      case o.INFORMATION:
        return /* @__PURE__ */ r(m, {});
      case o.PENDING:
        return /* @__PURE__ */ r(s, {});
      case o.SCHEDULED:
        return /* @__PURE__ */ r(E, {});
      default:
        return o.SUCCESS;
    }
  };
  return /* @__PURE__ */ r("div", { "data-testid": "container-icon", className: `signal--${c}--${e}`, children: i() });
};
export {
  U as Signal
};
