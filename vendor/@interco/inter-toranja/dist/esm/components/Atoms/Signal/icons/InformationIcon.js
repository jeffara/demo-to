import { jsxs as r, jsx as e } from "react/jsx-runtime";
const t = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", fill: "none", children: [
  /* @__PURE__ */ e("g", { filter: "url(#informationBaseBlur)", children: /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "56", height: "56", rx: "1.455", fill: "#6F717E", fillOpacity: "0.7" }) }),
  /* @__PURE__ */ e("g", { transform: "translate(29 16)", children: /* @__PURE__ */ r("g", { filter: "url(#informationGlyphInnerShadow)", transform: "translate(0 32) scale(1 -1)", children: [
    /* @__PURE__ */ e(
      "path",
      {
        d: "M0 1C0 0.447715 0.447715 0 1 0H5C5.55228 0 6 0.447715 6 1V20C6 20.5523 5.55228 21 5 21H1C0.447715 21 0 20.5523 0 20V10.5V1Z",
        fill: "#FFFBEE"
      }
    ),
    /* @__PURE__ */ e(
      "path",
      {
        d: "M0 27C0 26.4477 0.447715 26 1 26H5C5.55228 26 6 26.4477 6 27V31C6 31.5523 5.55228 32 5 32H1C0.447715 32 0 31.5523 0 31V27Z",
        fill: "#FFFBEE"
      }
    )
  ] }) }),
  /* @__PURE__ */ r("defs", { children: [
    /* @__PURE__ */ r(
      "filter",
      {
        id: "informationBaseBlur",
        x: "-10.545",
        y: "-10.545",
        width: "85.09",
        height: "85.09",
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
          /* @__PURE__ */ e("feOffset", { dy: "1.455" }),
          /* @__PURE__ */ e("feGaussianBlur", { stdDeviation: "4.364" }),
          /* @__PURE__ */ e("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
          /* @__PURE__ */ e(
            "feColorMatrix",
            {
              type: "matrix",
              values: "0 0 0 0 0.835294 0 0 0 0 0.835294 0 0 0 0 0.835294 0 0 0 0.3 0"
            }
          ),
          /* @__PURE__ */ e("feBlend", { in2: "shape", result: "effect1_innerShadow_0_information" })
        ]
      }
    ),
    /* @__PURE__ */ r(
      "filter",
      {
        id: "informationGlyphInnerShadow",
        x: "0",
        y: "0",
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
  t as InformationIcon
};
