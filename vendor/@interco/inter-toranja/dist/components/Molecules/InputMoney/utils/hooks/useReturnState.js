import { InputTypeValue as o, VariantNumeric as m } from "../../types.js";
import { STATE as e } from "../../../../../utils/pattern.js";
const t = (r, i, n) => ({
  isReadOnly: r === e.READ_ONLY,
  isDisabled: r === e.DISABLED,
  isError: r === e.ERROR,
  isSkeleton: r === e.SKELETON,
  isNumberInteger: i === o.Numeric && n === m.Integer
});
export {
  t as useReturnState
};
