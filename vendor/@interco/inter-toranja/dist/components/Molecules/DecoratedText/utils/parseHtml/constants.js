const s = ["br", "img", "hr"], G = /<(\/?)([a-zA-Z][\w-]*)((?:\s+[\w-]+(?:=(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'))?)*)\s*\/?>/g;
export {
  s as SELF_CLOSING_TAGS,
  G as TAG_REGEX
};
