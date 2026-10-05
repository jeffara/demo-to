function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMoneyCheck = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M16.5 10.5a1 1 0 1 0 0-2H15a1 1 0 1 0 0 2h1.5ZM17.5 14.5a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1ZM8 10.75a.25.25 0 0 1 .25-.25H11a1 1 0 1 0 0-2h-1a1 1 0 0 0-2 0v.014A2.25 2.25 0 0 0 8.25 13h1.5a.25.25 0 1 1 0 .5H7a1 1 0 1 0 0 2h1a1 1 0 1 0 2 0v-.014A2.25 2.25 0 0 0 9.75 11h-1.5a.25.25 0 0 1-.25-.25Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5ZM4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z",
  clipRule: "evenodd"
}));
export default ComponenticMoneyCheck;