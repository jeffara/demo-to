const n = (o) => `--color-${o.toLowerCase().replace(/\//g, "-")}`, e = (o) => o.startsWith("Icon"), t = (o) => !o || !e(o) ? void 0 : { fill: `var(${n(o)})` }, c = () => ({
  fill: `var(${n("Icon/Disabled")})`
});
export {
  n as convertIconColorToken,
  c as getDisabledIconColor,
  t as getIconColor,
  e as isValidIconColorToken
};
