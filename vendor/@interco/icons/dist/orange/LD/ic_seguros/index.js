function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSeguros = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M16 14.667v12a2.667 2.667 0 1 1-5.333 0M16 4V2.667"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M16 4C8.636 4 2.667 9.97 2.667 17.333l.229-.228a5.333 5.333 0 0 1 7.542 0l.229.228 2.133-1.6a5.333 5.333 0 0 1 6.4 0l2.133 1.6.23-.228a5.333 5.333 0 0 1 7.542 0l.228.228C29.333 9.97 23.363 4 16 4Z"
}));
export default ComponenticSeguros;