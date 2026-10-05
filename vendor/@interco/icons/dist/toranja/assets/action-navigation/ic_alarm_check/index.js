function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAlarmCheck = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm2.293 4.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.39.024l-2-1.867a1 1 0 0 1 1.366-1.462l1.293 1.207 3.317-3.316Zm-9-8a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 1 1-1.414-1.414l3-3Zm12 0a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z"
}));
export default ComponenticAlarmCheck;