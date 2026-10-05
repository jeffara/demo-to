import { jsx as a } from "react/jsx-runtime";
import { Flag as o } from "../../../Atoms/Flag/Flag.js";
import { STATE as i, SIZE as m } from "../../../../utils/pattern.js";
const d = ({ flag: t, className: r }) => /* @__PURE__ */ a("div", { className: r, "data-testid": "avatar-flag", children: /* @__PURE__ */ a(o, { iconFlag: t, size: m.SMALL, state: i.ENABLED }) });
export {
  d as AvatarFlag
};
