import { useEffect as u } from "react";
const l = ({
  isOpen: a,
  isRendered: i,
  controls: t,
  setIsRendered: f
}) => {
  u(() => {
    a && (f(!0), t.start("visible"));
  }, [a, t, f]), u(() => {
    !a && i && t.start("hidden").then(() => {
      f(!1);
    });
  }, [a, i, t, f]);
};
export {
  l as useModalDialogInitialState
};
