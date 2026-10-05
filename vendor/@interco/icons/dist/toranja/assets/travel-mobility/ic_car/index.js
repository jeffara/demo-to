function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M12.172 6a3 3 0 0 1 2.121.879l1.828 1.828a1 1 0 0 0 .707.293H20a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H4a3 3 0 0 1-3-3v-2.19c0-1.403.492-2.763 1.39-3.841l.742-.89A3 3 0 0 1 5.437 6h6.735ZM7 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.437 8a1 1 0 0 0-.768.36l-.742.89A4 4 0 0 0 3 11.81V14a1 1 0 0 0 1 1h.17a3.001 3.001 0 0 1 5.66 0h4.34a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3.172a3 3 0 0 1-2.121-.879l-1.828-1.828A1 1 0 0 0 12.172 8H5.437Z"
}));
export default ComponenticCar;