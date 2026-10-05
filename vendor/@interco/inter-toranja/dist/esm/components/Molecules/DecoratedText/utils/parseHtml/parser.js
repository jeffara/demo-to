import { TAG_REGEX as a } from "./constants.js";
import { addTextNode as l, handleClosingTag as d, handleOpeningTag as x, closeRemainingTags as g } from "./tagHandlers.js";
const p = (t) => {
  const e = {
    elements: [],
    stack: [],
    currentParent: null,
    lastIndex: 0
  };
  let n;
  for (; (n = a.exec(t)) !== null; ) {
    const [, r, s, o] = n, c = t.slice(e.lastIndex, n.index);
    l(e, c), r ? d(e, s) : x(e, s, o), e.lastIndex = a.lastIndex;
  }
  const i = t.slice(e.lastIndex);
  return l(e, i), g(e), e.elements;
};
export {
  p as parseHtmlString
};
