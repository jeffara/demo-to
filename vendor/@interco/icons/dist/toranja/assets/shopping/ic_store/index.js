function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStore = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-4 8.646A3.99 3.99 0 0 1 12 12a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 6 12a3.981 3.981 0 0 1-2-.535V19a1 1 0 0 0 1 1h3v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5h3a1 1 0 0 0 1-1v-7.535A3.98 3.98 0 0 1 18 12a3.99 3.99 0 0 1-3-1.354ZM10 16v4h4v-4h-4ZM5 4a1 1 0 0 0-1 1v3a2 2 0 1 0 4 0 1 1 0 0 1 2 0 2 2 0 1 0 4 0 1 1 0 1 1 2 0 2 2 0 1 0 4 0V5a1 1 0 0 0-1-1H5Z"
}));
export default ComponenticStore;