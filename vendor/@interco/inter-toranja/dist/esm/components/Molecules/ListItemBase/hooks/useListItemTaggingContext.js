import { useContext as e } from "react";
import { ListItemTaggingContext as o } from "../context/ListItemTaggingContext.js";
const r = () => {
  const t = e(o);
  if (!t)
    throw new Error("useListItemTaggingContext must be used within ListItemTaggingProvider");
  return t;
};
export {
  r as useListItemTaggingContext
};
