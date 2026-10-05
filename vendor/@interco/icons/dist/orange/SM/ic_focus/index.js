function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFocus = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M8 3.333V.667M12.667 8h2.666M8 15.333v-2.667M.667 8h2.666M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0ZM9.333 8a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z"
}));
export default ComponenticFocus;