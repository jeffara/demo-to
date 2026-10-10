import { jsx as e } from "react/jsx-runtime";
import { CountryPickerPanel as c } from "./CountryPickerPanel.js";
import { BottomSheet as u } from "../../Molecules/BottomSheet/BottomSheet.js";
const y = (i) => {
  const { title: n, isOpen: p, close: o, overlay: s, expansible: m, position: l, onTag: t, id: r, ...a } = i;
  return /* @__PURE__ */ e(
    u,
    {
      title: n,
      isOpen: p,
      close: o,
      overlay: s,
      expansible: m,
      position: l,
      onTag: t,
      id: r,
      slot: /* @__PURE__ */ e(c, { ...a, close: o, onTag: t, radioGroupId: r })
    }
  );
};
export {
  y as BottomSheetCountry
};
