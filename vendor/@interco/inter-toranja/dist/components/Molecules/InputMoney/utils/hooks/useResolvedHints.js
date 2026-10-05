import { resolveFormFieldHints as u } from "../../../../../utils/accessibility/formFieldAccessibility.js";
const c = ({
  hint: o,
  isError: n,
  validationError: s
}) => {
  const e = !!(o && o.length > 0), r = n || s !== null, { errorMessages: t, infoHints: l, shouldShowErrors: i, shouldShowInfoHints: h } = u(
    {
      hints: r ? [] : o ?? [],
      error: r && e ? o : void 0,
      validationErrors: s && !e ? [s] : [],
      isError: r,
      showHint: !0
    }
  );
  return {
    errorMessages: t,
    infoHints: l,
    shouldShowErrors: i,
    shouldShowInfoHints: h
  };
};
export {
  c as useResolvedHints
};
