/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, finish, media, option, instrument } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { items } = read(block);
  const list = el("ul", "cards-list");
  list.style.setProperty(
    "--cards-columns",
    option(block, ["2", "3", "4"], "3"),
  );
  items.forEach((item) => {
    const li = instrument(item.row, el("li", "cards-card"));
    li.append(
      media(item.image, "cards-card-image"),
      take(item.content, "cards-card-body"),
    );
    list.append(li);
  });
  finish(block, list);
}
