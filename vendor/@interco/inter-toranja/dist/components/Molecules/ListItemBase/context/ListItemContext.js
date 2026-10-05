import { jsx as r } from "react/jsx-runtime";
import { createContext as s, useContext as i } from "react";
const e = s(void 0), x = ({ value: t, children: o }) => /* @__PURE__ */ r(e.Provider, { value: t, children: o }), c = () => {
  const t = i(e);
  if (!t)
    throw new Error("useListItemContext must be used within ListItemProvider");
  return t;
};
export {
  x as ListItemProvider,
  c as useListItemContext
};
