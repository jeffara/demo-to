import { useState as T, useRef as d, useCallback as u } from "react";
const z = (a) => {
  const [F, I] = T(41), e = d(null), l = d(null), m = u((o, i) => {
    if (!e.current || !o || o === "000" || o.trim() === "")
      return 41;
    const t = document.createElement("span");
    t.style.visibility = "hidden", t.style.position = "absolute", t.style.whiteSpace = "nowrap";
    try {
      const n = getComputedStyle(e.current);
      t.style.fontFamily = n.fontFamily || "inherit", t.style.fontWeight = n.fontWeight || "normal";
    } catch {
      t.style.fontFamily = "inherit", t.style.fontWeight = "normal";
    }
    t.textContent = o, document.body.appendChild(t);
    let r = 41, c = 10, s = 41;
    for (; c <= s; ) {
      const n = Math.floor((c + s) / 2);
      t.style.fontSize = `${n}px`;
      let S = 0;
      S = t.getBoundingClientRect().width || 0;
      const f = Math.min(20, i * 0.1);
      S <= i - f ? (r = n, c = n + 1) : s = n - 1;
    }
    return document.body.removeChild(t), Math.max(r, 10);
  }, []), N = u(
    (o) => {
      if (!e.current || !l.current)
        return;
      const i = l.current.clientWidth, t = a ? i - 160 : i, r = e.current.value || o, c = m(r, t);
      I(c);
    },
    [a, m]
  ), _ = u(() => {
    e.current && e.current.focus();
  }, []);
  return { fontSize: F, setFontSize: I, inputRef: e, containerRef: l, adjustFont: N, handleFocus: _ };
};
export {
  z as useAdjustFont
};
