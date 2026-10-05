import { createContext as n, useContext as o } from "react";
const e = n(null), u = () => {
  const t = o(e);
  if (!t)
    throw new Error("useInputContext must be used within InputProvider");
  return t;
}, s = e.Provider;
export {
  s as InputProvider,
  u as useInputContext
};
