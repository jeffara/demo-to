function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticExplore = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M66 36c0 16.569-13.431 30-30 30m30-30C66 19.431 52.569 6 36 6m30 30h-6M36 66C19.431 66 6 52.569 6 36m30 30v-6M6 36C6 19.431 19.431 6 36 6M6 36h6M36 6v6"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M31.5 31.5 21 51l19.5-10.5L51 21 31.5 31.5Z"
}));
export default ComponenticExplore;