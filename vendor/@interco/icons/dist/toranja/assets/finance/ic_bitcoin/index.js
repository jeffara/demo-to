function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBitcoin = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M14.5 6.75v1.458a2.5 2.5 0 0 1 1.213 3.456 2.876 2.876 0 0 1-1.213 5.018V18a1 1 0 1 1-2 0v-1.25h-.25V18a1 1 0 1 1-2 0v-1.25H9a1 1 0 1 1 0-2h.5V10H9a1 1 0 1 1 0-2h1.25V6.75a1 1 0 1 1 2 0V8h.25V6.75a1 1 0 1 1 2 0Zm-.625 8a.875.875 0 0 0 0-1.75H11.5v1.75h2.375ZM11.5 11v-1h2a.5.5 0 0 1 0 1h-2Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z",
  clipRule: "evenodd"
}));
export default ComponenticBitcoin;