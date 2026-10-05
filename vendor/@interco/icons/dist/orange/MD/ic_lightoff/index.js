function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLightoff = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M8.405 8.294c.221-.366.4-.786.502-1.298C9.015 6.454 9.447 6 10 6h4c.552 0 .985.454 1.093.996C15.598 9.533 18 9.816 18 12.5c0 1.766-.462 3.148-1.205 4.174M13 18.924c-.33.051-.665.076-1 .076-3 0-6-2-6-6.5 0-.177.01-.343.03-.5"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M9 3h6m-1-2h-4M3 3l18 18"
}));
export default ComponenticLightoff;