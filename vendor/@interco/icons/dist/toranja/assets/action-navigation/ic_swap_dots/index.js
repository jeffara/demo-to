function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSwapDots = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M17.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 6l-2.293-2.293a1 1 0 0 1 0-1.414ZM3 8a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6a3 3 0 0 1-3-3V8ZM2.293 17.293l3-3a1 1 0 0 1 1.414 1.414L4.414 18l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M17 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
}));
export default ComponenticSwapDots;