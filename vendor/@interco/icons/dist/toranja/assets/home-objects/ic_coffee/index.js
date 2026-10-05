function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCoffee = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M6 3a2 2 0 0 0-2 2v6c0 3.477 3.312 6 7 6 2.933 0 5.63-1.597 6.61-4H18a4 4 0 0 0 0-8 2 2 0 0 0-2-2H6Zm14 6a2 2 0 0 1-2 2V7a2 2 0 0 1 2 2ZM6 11c0 2.046 2.06 4 5 4s5-1.954 5-4V5H6v6Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
}));
export default ComponenticCoffee;