function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticProduct = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M6.038 5.572A2.5 2.5 0 0 1 8.36 4h15.282a2.5 2.5 0 0 1 2.32 1.572l1.324 3.307c.472 1.18.715 2.441.715 3.713V25.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 25.5V12.592a10 10 0 0 1 .715-3.713l1.323-3.307ZM5.333 10.667h21.334M16 4v6.667M13.334 16h5.333"
}));
export default ComponenticProduct;