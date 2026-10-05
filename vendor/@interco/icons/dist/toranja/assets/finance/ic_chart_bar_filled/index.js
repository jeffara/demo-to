function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticChartBarFilled = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M19 3a1 1 0 0 1 1 1v15h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10h1V4a1 1 0 0 1 1-1h3Z"
}));
export default ComponenticChartBarFilled;