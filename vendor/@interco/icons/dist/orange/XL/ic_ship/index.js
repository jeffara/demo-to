function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticShip = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "m60 62.4 5.644-13.687a3.6 3.6 0 0 0-2.082-5.026L43.59 37.03a24 24 0 0 0-15.18 0L8.439 43.687a3.6 3.6 0 0 0-2.081 5.026L13.5 62.4M12 42V21a3 3 0 0 1 3-3h9m36 24V21a3 3 0 0 0-3-3h-9m-24 0h24m-24 0c0-4.97 4.41-9 12-9s12 4.03 12 9m-36 9h48m-7.5 24L48 49.5"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M6 63c18 0 18-6 30-6s12 6 30 6"
}));
export default ComponenticShip;