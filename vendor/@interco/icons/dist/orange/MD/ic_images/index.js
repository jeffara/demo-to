function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticImages = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M20.222 6H7.778C6.796 6 6 6.796 6 7.778v12.444C6 21.204 6.796 22 7.778 22h12.444c.982 0 1.778-.796 1.778-1.778V7.778C22 6.796 21.204 6 20.222 6Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M2 16V4a2 2 0 0 1 2-2h11M11.333 13.111a1.778 1.778 0 1 0 0-3.555 1.778 1.778 0 0 0 0 3.555ZM22 18.444 17.556 14l-8 8"
}));
export default ComponenticImages;