function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBarcode = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M5 2a1 1 0 0 1 1 1v8h2V3a1 1 0 0 1 2 0v8h2V3a1 1 0 1 1 2 0 1 1 0 1 1 2 0v8h2V3a1 1 0 1 1 2 0v8h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1V3a1 1 0 0 1 1-1ZM5 15a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1ZM9 15a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1ZM13 15a1 1 0 0 1 1 1 1 1 0 1 1 2 0v5a1 1 0 1 1-2 0 1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1ZM19 15a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Z"
}));
export default ComponenticBarcode;