import { useEffect as c } from "react";
const s = ({
  timer: e,
  itemCount: l,
  isDragging: o,
  setCurrentIndex: r
}) => {
  c(() => {
    if (!e || e < 1 || o)
      return;
    const a = setInterval(() => {
      r((t) => (t + 1) % l);
    }, e * 1e3);
    return () => {
      clearInterval(a);
    };
  }, [e, l, o, r]);
};
export {
  s as useCarouselAutoplay
};
