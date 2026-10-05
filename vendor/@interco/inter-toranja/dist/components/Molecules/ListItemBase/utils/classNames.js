const s = (e, n) => e === "skeleton" ? `listItemBase__container--skeleton--${n}` : `listItemBase__container--${e}`, i = (e, n) => `listItemBase__container__containerMain${e ?? ""}${n ? " listItemBase__container__containerMain--noLeading" : ""}`, o = (e) => `listItemBase--${e}`;
export {
  s as getContainerClassName,
  i as getContainerMainClassName,
  o as getVariantClassName
};
