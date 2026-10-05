function r(...n) {
  const e = [];
  for (const t of n)
    if (t)
      if (typeof t == "object" && t !== null)
        for (const o in t)
          Object.prototype.hasOwnProperty.call(t, o) && t[o] && e.push(o);
      else {
        const o = String(t);
        o && e.push(o);
      }
  return e.join(" ");
}
export {
  r as classNamesMerge
};
