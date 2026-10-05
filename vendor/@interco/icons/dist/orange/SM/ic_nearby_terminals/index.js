function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticNearbyTerminals = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M12.3 8c.608 0 1.14.412 1.291 1l1.032 4a1.333 1.333 0 0 1-1.292 1.667H2.678c-.87 0-1.508-.82-1.292-1.664l1.024-4A1.333 1.333 0 0 1 3.702 8m7.631-3.333c0 2.004-2.607 4.667-3.333 4.667S4.667 6.67 4.667 4.667c0-1.633 1.518-3.333 3.333-3.333 1.815 0 3.333 1.7 3.333 3.333Zm-2.244.089a1.089 1.089 0 1 1-2.178 0 1.089 1.089 0 0 1 2.178 0Z"
}));
export default ComponenticNearbyTerminals;