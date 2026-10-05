function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticUmbrella = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M13 2a1 1 0 1 0-2 0v.045C5.394 2.55 1 7.262 1 13a1 1 0 0 0 1.707.707l.172-.171a3 3 0 0 1 4.242 0l.172.171A1 1 0 0 0 8.6 13.8l1.6-1.2c.248-.186.518-.33.8-.429V20a1 1 0 1 1-2 0 1 1 0 1 0-2 0 3 3 0 1 0 6 0v-7.829c.282.1.552.243.8.429l1.6 1.2a1 1 0 0 0 1.307-.093l.172-.171a3 3 0 0 1 4.242 0l.172.171A1 1 0 0 0 23 13c0-5.738-4.393-10.45-10-10.955V2Zm-1 2a9.003 9.003 0 0 0-8.772 6.98 5.005 5.005 0 0 1 4.834.723L9 11a5 5 0 0 1 6 0l.938.704a5.005 5.005 0 0 1 4.835-.724C19.855 6.982 16.276 4 12 4Z",
  clipRule: "evenodd"
}));
export default ComponenticUmbrella;