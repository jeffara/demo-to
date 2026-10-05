function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHelpCircle = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 9.857C10 8.877 10.849 8 12 8s2 .877 2 1.857-.849 1.857-2 1.857a1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.408c1.7-.424 3-1.905 3-3.735C16 7.681 14.163 6 12 6 9.837 6 8 7.681 8 9.857a1 1 0 0 0 2 0Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
  clipRule: "evenodd"
}));
export default ComponenticHelpCircle;