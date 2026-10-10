import { useId as n, useRef as r } from "react";
import { MODAL_DIALOG_OVERLAY as i } from "../types.js";
const c = ({
  id: l,
  overlay: e = i.ON,
  showCloseButton: a = !1
}) => {
  const t = n().replace(/:/g, ""), o = l ?? `modal-dialog-${t}`, s = `${o}-title`, d = r(null);
  return {
    dialogId: o,
    titleId: s,
    panelClassName: "modal-dialog__panel",
    rootClassName: "modal-dialog",
    resolvedOverlay: e,
    shouldShowCloseButton: a,
    dialogRef: d
  };
};
export {
  c as useModalDialog
};
