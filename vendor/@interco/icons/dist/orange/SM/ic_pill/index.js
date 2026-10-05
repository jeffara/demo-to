function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPill = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M6.22 5.16a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm5.964 2.31L7.47 12.184l1.06 1.06 4.714-4.714-1.06-1.06ZM3.816 8.53 8.53 3.816l-1.06-1.06L2.756 7.47l1.06 1.06Zm0 3.654a2.583 2.583 0 0 1 0-3.654l-1.06-1.06a4.083 4.083 0 0 0 0 5.774l1.06-1.06Zm3.654 0a2.583 2.583 0 0 1-3.654 0l-1.06 1.06a4.083 4.083 0 0 0 5.774 0l-1.06-1.06Zm4.714-8.368a2.583 2.583 0 0 1 0 3.654l1.06 1.06a4.083 4.083 0 0 0 0-5.774l-1.06 1.06Zm1.06-1.06a4.083 4.083 0 0 0-5.774 0l1.06 1.06a2.583 2.583 0 0 1 3.654 0l1.06-1.06Zm-2.357 7.07L6.221 5.16 5.16 6.22l4.667 4.667 1.06-1.06Z"
}));
export default ComponenticPill;