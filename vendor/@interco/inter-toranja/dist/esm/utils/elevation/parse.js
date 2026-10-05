import { parseCssVariableLines as r } from "../parse-css-variables.js";
function a(e) {
  return r(e, { prefix: "--elevation-" });
}
export {
  a as parseElevations
};
