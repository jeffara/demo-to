function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLightoff = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 17",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5.604 5.613c.147-.245.266-.525.334-.866.072-.36.36-.664.729-.664h2.666c.369 0 .657.303.729.664C10.399 6.44 12 6.627 12 8.417c0 1.177-.308 2.098-.804 2.782m-2.53 1.5c-.22.034-.443.051-.666.051-2 0-4-1.333-4-4.333 0-.118.007-.229.02-.334"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M6 2.083h4M9.333.75H6.667M2 2.083l12 12"
}));
export default ComponenticLightoff;