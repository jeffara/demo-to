import { TEXT_WIDTH_CONFIG as l } from "../constants.js";
const f = (o, i) => {
  const n = i.querySelector(".btn--label"), t = document.createElement("span");
  if (t.style.position = "absolute", t.style.visibility = "hidden", t.style.whiteSpace = "nowrap", t.style.display = "inline-block", n) {
    const e = getComputedStyle(n);
    t.style.font = e.font, t.style.fontSize = e.fontSize, t.style.fontFamily = e.fontFamily, t.style.fontWeight = e.fontWeight, t.style.letterSpacing = e.letterSpacing;
  } else
    t.style.font = getComputedStyle(i).font;
  t.textContent = o, document.body.appendChild(t);
  const s = t.offsetWidth;
  document.body.removeChild(t);
  const d = 64 + Math.min(
    s + l.SAFETY_MARGIN,
    l.MAX_TEXT_WIDTH
  ), a = 64 + l.MAX_TEXT_WIDTH, y = Math.min(d, a);
  i.style.setProperty("--fab-expanded-width", `${y}px`);
};
export {
  f as calculateDynamicWidth
};
