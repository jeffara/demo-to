import { useMemo as n } from "react";
import { getSegmentIconName as o, getSegmentLabel as r } from "../utils/segmentHelpers.js";
const g = (t) => ({
  segmentProperties: n(
    () => JSON.stringify(
      t.map((e) => ({
        label: r(e),
        icon: o(e)
      }))
    ),
    [t]
  ),
  getSelectedSegmentProperties: (e) => ({
    icon_selected: o(e),
    label_selected: r(e) || !1
  })
});
export {
  g as useSegmentedControlProperties
};
