/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, take, plain, finish, option } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block);
  const box = el("div", "manifesto-container");
  box.append(
    take(f.quote, "manifesto-text", "blockquote"),
    plain(f.attribution, "p", "manifesto-footer"),
  );
  box.style.textAlign = option(block, ["left", "center"], "center");
  finish(block, box);
}
