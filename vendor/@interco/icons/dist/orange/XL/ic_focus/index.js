function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFocus = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 3,
  d: "M36 15V3m21 33h12M36 69V57M3 36h12m48 0c0 14.912-12.088 27-27 27S9 50.912 9 36 21.088 9 36 9s27 12.088 27 27Zm-21 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
}));
export default ComponenticFocus;