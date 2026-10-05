function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStove = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: "#FF7A00",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M5 9h14v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M7 21v-2M17 21v-2M3 9h18M12 3v2M16 3v1M8 3v1M10 13h4"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M8 7a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM12 7a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM16 7a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2Z"
}));
export default ComponenticStove;