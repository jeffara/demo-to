import { useEffect as S } from "react";
const c = ({
  isOpen: f,
  position: h,
  initialPosition: m,
  controls: a,
  setIsRendered: t,
  setCurrentPosition: u,
  isRendered: x
}) => {
  S(() => {
    if (f) {
      t(!0);
      const E = h ?? m;
      a.start(E), u(E);
    }
  }, [f, h, m, a, t, u]), S(() => {
    !f && x && a.start("hidden").then(() => {
      t(!1);
    });
  }, [f, x, a, t]);
};
export {
  c as useInitialState
};
