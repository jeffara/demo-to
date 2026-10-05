function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEdit = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M2 14v-2.379c0-.398.158-.779.44-1.06l7.775-7.776a1.5 1.5 0 0 1 2.176.057l.973 1.08a1.5 1.5 0 0 1-.074 2.084L5.436 13.58a1.5 1.5 0 0 1-1.041.42H2ZM9.5 14H14"
}));
export default ComponenticEdit;