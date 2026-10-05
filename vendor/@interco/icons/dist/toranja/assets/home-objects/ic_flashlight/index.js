function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFlashlight = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M17 2a3 3 0 0 1 3 3v2.528a3 3 0 0 1-.316 1.341l-1.579 3.156a1 1 0 0 0-.105.447V19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6.528a1 1 0 0 0-.105-.447L4.316 8.87A3 3 0 0 1 4 7.53V5a3 3 0 0 1 3-3h10ZM6.618 9l1.066 2.13A3 3 0 0 1 8 12.473V19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6.528a3 3 0 0 1 .316-1.341L17.382 9H6.618ZM12 12a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM7 4a1 1 0 0 0-1 1v2h12V5a1 1 0 0 0-1-1H7Z"
}));
export default ComponenticFlashlight;