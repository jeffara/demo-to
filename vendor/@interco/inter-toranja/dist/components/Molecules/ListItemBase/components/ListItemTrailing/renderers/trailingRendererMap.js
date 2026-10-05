import { renderBadge as n } from "./renderBadge.js";
import { renderButton as m } from "./renderButton.js";
import { renderCheckbox as i } from "./renderCheckbox.js";
import { renderIconButton as d } from "./renderIconButton.js";
import { renderNeutralIconButton as p } from "./renderNeutralIconButton.js";
import { renderRadio as a } from "./renderRadio.js";
import { renderStepper as c } from "./renderStepper.js";
import { renderSwitch as f } from "./renderSwitch.js";
import { renderTagChevron as u } from "./renderTagChevron.js";
import { renderText as g } from "./renderText.js";
const h = {
  tagChevron: (r, e) => u(r, e),
  badge: (r) => n(r),
  text: (r, e) => g(r, e),
  checkbox: (r, e) => i(r, e),
  radio: (r, e) => a(r, e),
  stepper: (r, e, o, t) => c(r, e, o, t),
  switch: (r, e) => f(r, e),
  button: (r, e, o, t) => m(r, e, o, t),
  iconButton: (r, e, o, t) => d(r, e, o, t),
  neutralIconButton: (r, e, o, t) => p(r, e, o, t)
}, v = (r) => h[r];
export {
  v as getTrailingRenderer
};
