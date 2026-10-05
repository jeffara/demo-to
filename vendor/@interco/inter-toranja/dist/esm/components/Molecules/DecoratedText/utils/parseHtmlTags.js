import { parseHtmlString as n } from "./parseHtml/parser.js";
import { elementToReact as p } from "./parseHtml/renderer.js";
const l = (e, t, r) => n(e).map(
  (m, o) => p(m, o, t, r)
);
export {
  l as parseDecoratedText
};
