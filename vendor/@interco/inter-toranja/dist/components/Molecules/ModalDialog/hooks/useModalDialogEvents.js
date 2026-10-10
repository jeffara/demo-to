import { useCallback as t } from "react";
const p = ({
  close: o,
  isOpen: l,
  setIsRendered: c,
  controls: s,
  restoreFocusId: e,
  isRendered: h
}) => {
  const i = t(() => {
    var n;
    e && ((n = document.getElementById(e)) == null || n.focus());
  }, [e]), f = t(() => {
    s.start("hidden").then(() => {
      o(), i();
    });
  }, [o, s, i]), a = f, m = t(
    (n) => {
      n.key === "Escape" && a();
    },
    [a]
  ), d = t(
    (n) => {
      n === "hidden" && !l && h && c(!1);
    },
    [l, h, c]
  );
  return {
    handleClose: f,
    handleEscapeClose: a,
    handleKeyDown: m,
    handleAnimationComplete: d
  };
};
export {
  p as useModalDialogEvents
};
