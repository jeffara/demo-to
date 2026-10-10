import { PAGINATION_LOCALE as r } from "../infrastructure/constants.js";
const i = (o, t) => o.toLocaleString(r[t]);
export {
  i as formatPaginationNumber
};
