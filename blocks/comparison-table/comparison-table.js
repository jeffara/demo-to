/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, number, take, heading, finish, instrument } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    wrapper = el("div", "toranja-table-scroll-wrapper"),
    table = el("table", "toranja-comparison-table"),
    thead = el("thead"),
    tbody = el("tbody");
  items.forEach((item, i) => {
    const tr = instrument(item.row, el("tr"));
    ["feature", "value1", "value2", "value3"]
      .filter((key, j) => j === 0 || items.some((row) => text(row[key])))
      .forEach((key, j) => {
        const cell = take(
          item[key],
          "",
          i === 0 ? "th" : j === 0 ? "th" : "td",
        );
        if (i === 0) cell.scope = "col";
        else if (j === 0) cell.scope = "row";
        if (j === number(f.highlightColumn, 1))
          cell.classList.add("col-highlight");
        tr.append(cell);
      });
    (i === 0 ? thead : tbody).append(tr);
  });
  table.append(thead, tbody);
  wrapper.append(table);
  finish(block, heading(f.title), take(f.subtitle), wrapper);
}
