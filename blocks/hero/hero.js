/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, plain, heading, link, finish, media, option } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block);
  const grid = el("div", "hero-grid");
  const content = el("div", "hero-content");
  content.append(
    plain(f.eyebrow, "p", "eyebrow"),
    heading(f.headline, "hero-title hero-headline"),
    take(f.description, "hero-description"),
  );
  content.append(link(f.primaryCta), link(f.secondaryCta, "button secondary"));
  content.append(take(f.checklist, "hero-tags"));
  if (f.disclaimer)
    content.append(plain(f.disclaimer, "small", "disclaimer-note"));
  const visual = el("div", "hero-visual");
  visual.append(
    media(
      f.image,
      "portal-frame " +
        option(block, ["arch", "pill", "rounded", "asymmetric"], "asymmetric"),
    ),
  );
  grid.append(content, visual);
  finish(block, grid);
}
