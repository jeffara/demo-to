function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFocus = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M16 6.667V1.334M25.333 16h5.334M16 30.667v-5.334M1.333 16h5.334M28 16c0 6.628-5.373 12-12 12S4 22.628 4 16C4 9.373 9.373 4 16 4s12 5.373 12 12Zm-9.333 0a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0Z"
}));
export default ComponenticFocus;