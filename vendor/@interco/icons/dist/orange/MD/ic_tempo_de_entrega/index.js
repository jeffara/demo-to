function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTempoDeEntrega = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M5 5H4m1 14H4m-2-7H1m12-4v4l2.5 2.5"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M11 1a1 1 0 1 0 0 2V1Zm4 2a1 1 0 1 0 0-2v2Zm5 9a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2Zm-7 7a7 7 0 0 1-7-7H4a9 9 0 0 0 9 9v-2Zm-7-7a7 7 0 0 1 7-7V3a9 9 0 0 0-9 9h2Zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Zm-2-2h4V1h-4v2Zm1-1v2h2V2h-2Z"
}));
export default ComponenticTempoDeEntrega;