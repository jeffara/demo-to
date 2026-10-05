function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBoxOff = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M2.293 2.293a1 1 0 0 1 1.414 0l1.18 1.179c.409-.3.91-.472 1.44-.472h10.504a3 3 0 0 1 2.774 1.858l.717 1.743A9.003 9.003 0 0 1 21 10.026v9.56l.707.707a1 1 0 1 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414ZM4 9a1 1 0 0 1 1 1v8a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-8a1 1 0 0 1 1-1Zm15 8.586v-7.56c0-.344-.025-.687-.075-1.026h-8.51L19 17.586ZM8.414 7H11V5H6.414l2 2ZM13 7h5.324l-.568-1.38A1 1 0 0 0 16.83 5H13v2Z"
}));
export default ComponenticBoxOff;