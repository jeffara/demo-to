function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticClapper = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M18.114 2.274a2 2 0 0 1 2.45 1.414l.258.965a2 2 0 0 1-1.414 2.45l-4.81 1.289a.955.955 0 0 1-.04.01L12.329 9H19a2 2 0 0 1 2 2v1a2 2 0 0 1-1.017 1.742c.011.085.017.17.017.258v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6c0-.087.006-.173.017-.258A2 2 0 0 1 3 12v-1c0-.533.208-1.016.548-1.375a2.018 2.018 0 0 1-.112-.312l-.26-.966a2.001 2.001 0 0 1 1.416-2.45l13.522-3.623ZM6 20h12v-6H6v6Zm10-4a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h8ZM5 11v1h2.465l.667-1H5Zm4.868 1h3.597l.667-1h-3.597l-.667 1Zm6.667-1-.667 1H19v-1h-2.465ZM5.11 7.83l.26.965 2.38-.639.385-1.137-3.025.81Zm5.347-1.433-.386 1.137 3.475-.93.385-1.139-3.474.932Zm5.796-1.554-.386 1.139 3.025-.811-.26-.966-2.379.638Z"
}));
export default ComponenticClapper;