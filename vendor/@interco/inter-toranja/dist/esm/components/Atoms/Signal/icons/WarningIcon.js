import { jsxs as r, jsx as e } from "react/jsx-runtime";
const a = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", fill: "none", children: [
  /* @__PURE__ */ e("g", { filter: "url(#warningBaseBlur)", children: /* @__PURE__ */ e(
    "path",
    {
      d: "M31.0481 4.3943C31.5738 3.86857 32.4262 3.86857 32.9519 4.3943L59.6057 31.0481C60.1314 31.5738 60.1314 32.4262 59.6057 32.9519L32.9519 59.6057C32.4262 60.1314 31.5738 60.1314 31.0481 59.6057L4.3943 32.9519C3.86857 32.4262 3.86857 31.5738 4.3943 31.0481L31.0481 4.3943Z",
      fill: "#E19D00",
      fillOpacity: "0.7"
    }
  ) }),
  /* @__PURE__ */ r("g", { filter: "url(#warningGlyphInnerShadow)", children: [
    /* @__PURE__ */ e(
      "path",
      {
        d: "M29 17C29 16.4477 29.4477 16 30 16H34C34.5523 16 35 16.4477 35 17V36C35 36.5523 34.5523 37 34 37H30C29.4477 37 29 36.5523 29 36V26.5V17Z",
        fill: "#FFFBEE"
      }
    ),
    /* @__PURE__ */ e(
      "path",
      {
        d: "M29 43C29 42.4477 29.4477 42 30 42H34C34.5523 42 35 42.4477 35 43V47C35 47.5523 34.5523 48 34 48H30C29.4477 48 29 47.5523 29 47V43Z",
        fill: "#FFFBEE"
      }
    )
  ] }),
  /* @__PURE__ */ r("defs", { children: [
    /* @__PURE__ */ r(
      "filter",
      {
        id: "warningBaseBlur",
        x: "-22.6667",
        y: "-22.6667",
        width: "109.3334",
        height: "109.3334",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              in: "SourceAlpha",
              type: "matrix",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
              result: "hardAlpha"
            }
          ),
          /* @__PURE__ */ e("feOffset", { dy: "1.33333" }),
          /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "4" }),
          /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              type: "matrix",
              values: "0 0 0 0 0.950792 0 0 0 0 0.692253 0 0 0 0 0.245686 0 0 0 0.3 0"
            }
          ),
          /* @__PURE__ */ e("feBlend", { in2: "shape", result: "effect1_innerShadow_0_85" })
        ]
      }
    ),
    /* @__PURE__ */ r(
      "filter",
      {
        id: "warningGlyphInnerShadow",
        x: "29",
        y: "16",
        width: "6",
        height: "33.3333",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ e("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ e("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              in: "SourceAlpha",
              type: "matrix",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
              result: "hardAlpha"
            }
          ),
          /* @__PURE__ */ e("feOffset", { dy: "1.33333" }),
          /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "1.33333" }),
          /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              type: "matrix",
              values: "0 0 0 0 0.418728 0 0 0 0 0.370011 0 0 0 0 0.0939465 0 0 0 0.2 0"
            }
          ),
          /* @__PURE__ */ e("feBlend", { in2: "shape", result: "effect1_innerShadow_0_86" })
        ]
      }
    )
  ] })
] });
export {
  a as WarningIcon
};
