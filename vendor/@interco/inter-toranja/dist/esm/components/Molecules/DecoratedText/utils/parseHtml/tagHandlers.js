import { parseAttributes as l } from "./attributeParser.js";
import { SELF_CLOSING_TAGS as o } from "./constants.js";
const i = (e, n) => {
  if (!n)
    return;
  const r = { type: "text", content: n };
  e.currentParent ? (e.currentParent.children = e.currentParent.children || [], e.currentParent.children.push(r)) : e.elements.push(r);
}, h = (e, n, r) => {
  const c = l(r), t = {
    type: "element",
    content: "",
    tagName: n.toLowerCase(),
    attributes: c,
    children: []
  };
  o.includes(t.tagName) ? e.currentParent ? e.currentParent.children.push(t) : e.elements.push(t) : (e.stack.push(t), e.currentParent = t);
}, p = (e, n) => {
  if (e.stack.length === 0)
    return;
  if (e.stack[e.stack.length - 1].tagName === n.toLowerCase()) {
    const c = e.stack.pop();
    e.stack.length > 0 ? (e.currentParent = e.stack[e.stack.length - 1], e.currentParent.children.push(c)) : (e.elements.push(c), e.currentParent = null);
  }
}, m = (e) => {
  for (; e.stack.length > 0; )
    e.elements.push(e.stack.pop());
};
export {
  i as addTextNode,
  m as closeRemainingTags,
  p as handleClosingTag,
  h as handleOpeningTag
};
