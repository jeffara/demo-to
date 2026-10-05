function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCoinChart = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M23 13a1 1 0 0 1 1 1c0 2.842-1.418 5.342-3.32 7.107C18.79 22.863 16.308 24 14 24a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1c1.175 0 2.433-.597 3.418-1.582C18.403 16.433 19 15.175 19 14a1 1 0 0 1 1-1h3ZM12 1c5.704 0 10.393 4.342 10.945 9.901a1 1 0 1 1-1.99.198 9.001 9.001 0 1 0-9.856 9.856 1 1 0 0 1-.198 1.99C5.341 22.393 1 17.705 1 12 1 5.925 5.925 1 12 1Zm8.911 14c-.257 1.452-1.047 2.8-2.079 3.832-1.032 1.032-2.38 1.822-3.832 2.08v.995c1.448-.26 3.018-1.056 4.32-2.264 1.348-1.253 2.329-2.872 2.603-4.643H20.91ZM12 6a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5H13v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h4.5a.5.5 0 0 0 0-1h-3a2.5 2.5 0 0 1 0-5h.5V7a1 1 0 0 1 1-1Z"
}));
export default ComponenticCoinChart;