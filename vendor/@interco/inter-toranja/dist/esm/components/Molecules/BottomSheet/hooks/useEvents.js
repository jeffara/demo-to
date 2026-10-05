import { useOnDragEnd as p } from "./useOnDragEnd.js";
const u = ({
  controls: t,
  variants: o,
  positionOrder: a,
  initialPosition: s,
  close: d,
  isOpen: h,
  setIsRendered: i,
  currentPosition: l,
  setCurrentPosition: m
}) => {
  const e = () => {
    t.start("hidden").then(() => {
      d();
    });
  }, r = (n) => {
    n.key === "Escape" && e();
  }, { handleDragEnd: c } = p({
    variants: o,
    positionOrder: a,
    initialPosition: s,
    controls: t,
    close: e,
    currentPosition: l,
    setCurrentPosition: m
  });
  return {
    handleClose: e,
    handleKeyDown: r,
    handleDragEnd: c,
    handleAnimationComplete: (n) => {
      n === "hidden" && h && i(!1);
    }
  };
};
export {
  u as useBottomSheetEvents
};
