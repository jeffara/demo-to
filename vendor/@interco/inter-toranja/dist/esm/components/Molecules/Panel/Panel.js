import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { PanelFeedback as v } from "./components/PanelFeedback.js";
import { PanelFooter as u } from "./components/PanelFooter.js";
import { PanelTitle as x } from "./components/PanelTitle.js";
import { usePanel as F } from "./hooks/usePanel.js";
import '../../../assets/components/Molecules/Panel/Panel.modules.css';/* empty css                   */
const g = (s) => {
  const { title: a, onTitleClick: r, showDivider: n, footer: o, children: d } = s, {
    rootClasses: m,
    titleClasses: C,
    bodyClasses: f,
    footerClasses: b,
    footerActionsClasses: p,
    feedbackActionsClasses: y,
    actionClassName: t,
    feedbackClassName: N,
    feedbackCopyClassName: k,
    titleId: l,
    isFeedback: i,
    feedbackCopy: c,
    feedbackPrimaryAction: A,
    feedbackSecondaryAction: P
  } = F(s);
  return /* @__PURE__ */ h(
    "section",
    {
      className: m,
      "data-testid": "panel",
      "aria-labelledby": a ? l : void 0,
      children: [
        a && /* @__PURE__ */ e(
          x,
          {
            title: a,
            titleId: l,
            className: C,
            onTitleClick: r,
            showDivider: n
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: f,
            "data-testid": "panel-body",
            role: i ? "status" : void 0,
            children: i && c ? /* @__PURE__ */ e(
              v,
              {
                copy: c,
                className: N,
                copyClassName: k,
                actionsClassName: y,
                actionClassName: t,
                primaryAction: A,
                secondaryAction: P
              }
            ) : d
          }
        ),
        o && /* @__PURE__ */ e(
          u,
          {
            footer: o,
            className: b,
            actionsClassName: p,
            actionClassName: t
          }
        )
      ]
    }
  );
};
export {
  g as Panel
};
