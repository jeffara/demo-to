function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStethoscope = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M11 2a1 1 0 0 1 1 1h.029c2.13 0 3.58 2.156 2.78 4.13l-2.603 6.405c-.526 1.293-1.56 2.084-2.706 2.371V18a2 2 0 1 0 4 0v-4.75a3.25 3.25 0 0 1 6.5 0v2.92a3.001 3.001 0 1 1-2 0v-2.92a1.25 1.25 0 1 0-2.5 0V18a4 4 0 1 1-8 0v-2.094a3.913 3.913 0 0 1-2.706-2.371L2.192 7.129C1.39 5.156 2.842 3 4.972 3H5a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0h-.029a1 1 0 0 0-.926 1.376l2.602 6.406c.676 1.663 3.03 1.663 3.706 0l2.602-6.406A1 1 0 0 0 12.03 5H12a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm7 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
  clipRule: "evenodd"
}));
export default ComponenticStethoscope;