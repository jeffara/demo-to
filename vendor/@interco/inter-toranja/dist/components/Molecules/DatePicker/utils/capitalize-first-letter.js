const o = (r, e) => {
  const t = r.toLocaleLowerCase(e);
  return t.charAt(0).toLocaleUpperCase(e) + t.slice(1);
};
export {
  o as capitalizeFirstLetter
};
