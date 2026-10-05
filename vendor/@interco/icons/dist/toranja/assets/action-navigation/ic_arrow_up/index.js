function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticArrowUp = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M11.99 2a.997.997 0 0 0-.697.293l-7 7a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-7-7A.997.997 0 0 0 12.01 2"
}));
export default ComponenticArrowUp;