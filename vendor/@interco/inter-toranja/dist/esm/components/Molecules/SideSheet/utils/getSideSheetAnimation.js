const n = [0, 0, 0.38, 0.9], e = [0.2, 0, 1, 0.9], t = {
  entrance: {
    duration: 0.4,
    ease: n
  },
  exit: {
    duration: 0.4,
    ease: e
  }
}, i = () => ({
  visible: {
    x: 0,
    opacity: 1,
    transition: t.entrance
  },
  hidden: {
    x: "100%",
    opacity: 0,
    transition: t.exit
  }
});
export {
  t as SIDE_SHEET_ANIMATION_TRANSITIONS,
  i as getSideSheetAnimationVariants
};
