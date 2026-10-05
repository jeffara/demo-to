function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPetdog = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M6 13v3a3 3 0 1 0 6 0 3 3 0 0 0 6 0v-3M6 17H4.977a3 3 0 0 1-2.884-3.824L4.17 5.9A4 4 0 0 1 8.017 3h7.966a4 4 0 0 1 3.846 2.901l2.079 7.275A3 3 0 0 1 19.023 17H18M8 19a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M9.707 14.707 12 17l2.293-2.293c.63-.63.184-1.707-.707-1.707h-3.172c-.89 0-1.337 1.077-.707 1.707ZM16.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
}));
export default ComponenticPetdog;