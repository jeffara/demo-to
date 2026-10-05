function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCompass = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm1 3a1 1 0 1 1-2 0v-.945A9.004 9.004 0 0 0 3.055 11H4a1 1 0 1 1 0 2h-.945A9.004 9.004 0 0 0 11 20.945V20a1 1 0 1 1 2 0v.945A9.004 9.004 0 0 0 20.945 13H20a1 1 0 1 1 0-2h.945A9.004 9.004 0 0 0 13 3.055V4Zm3.526 2.12a1 1 0 0 1 1.355 1.354l-3.5 6.5a1.005 1.005 0 0 1-.407.407l-6.5 3.5a1 1 0 0 1-1.355-1.355l3.5-6.5c.093-.172.235-.314.407-.407l6.5-3.5Zm-5.288 5.118L9.461 14.54l3.3-1.777L14.54 9.46l-3.3 1.777Z"
}));
export default ComponenticCompass;