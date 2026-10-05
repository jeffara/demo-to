function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticUserMoney = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M8 16a3 3 0 0 0-3 3v1h7a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-2a5 5 0 0 1 5-5h4a1 1 0 1 1 0 2H8ZM17 15a2 2 0 1 0 0 4h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 2 0 2 2 0 1 0 0-4h1a1 1 0 1 0 0-2h-1a1 1 0 1 0-2 0Z"
}));
export default ComponenticUserMoney;