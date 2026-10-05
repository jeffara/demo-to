import { jsx as f } from "react/jsx-runtime";
import { AccordionSlot as r } from "../components/AccordionSlot.js";
import { AccordionText as i } from "../components/AccordionText.js";
import { CONTENT_VARIANT as m } from "../types.js";
const A = (o, t) => typeof o != "function" ? /* @__PURE__ */ f(r, { children: o }) : t === m.SLOT ? o(r) : o(i);
export {
  A as resolveAccordionChildren
};
