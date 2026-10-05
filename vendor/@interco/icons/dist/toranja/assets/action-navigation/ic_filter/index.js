function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFilter = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M21 2a1 1 0 0 1 .857 1.515L16 13.277V18a4 4 0 0 1-8 0v-4.723L2.143 3.515A1.001 1.001 0 0 1 3 2h18ZM4.767 4l5.068 8.447c.108.18.165.387.165.597V18a2 2 0 1 0 4 0v-4.956c0-.21.057-.417.165-.597L19.233 4H4.767Z"
}));
export default ComponenticFilter;