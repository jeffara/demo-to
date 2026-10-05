import { jsx as n } from "react/jsx-runtime";
const d = ({
  shouldShow: t,
  children: e
}) => !t || !e ? null : /* @__PURE__ */ n(
  "div",
  {
    className: "feedback-screen__additional-content",
    "data-testid": "feedback-screen-additional-content",
    children: e
  }
);
export {
  d as FeedbackAdditionalContent
};
