/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, plain, heading, link, finish, media, option } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block);
  const grid = el("div", "chapter-grid");
  const content = el("div", "chapter-content");
  content.append(
    plain(f.moment, "p", "eyebrow"),
    heading(f.headline, "chapter-title chapter-headline"),
    take(f.description, "chapter-description"),
  );
  content.append(link(f.cta));
  if (f.disclaimer)
    content.append(plain(f.disclaimer, "small", "disclaimer-note"));
  const visual = el("div", "chapter-visual");
  visual.append(
    media(
      f.image,
      "portal-frame " +
        option(block, ["arch", "pill", "rounded", "asymmetric"], "asymmetric"),
    ),
  );
  grid.append(visual, content);
  finish(block, grid);
}
