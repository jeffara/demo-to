/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, number, take, plain, heading, finish, instrument } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    grid = el("div", "toranja-testimonials-grid");
  items.forEach((item) => {
    const card = instrument(
        item.row,
        el("article", "toranja-testimonial-card"),
      ),
      author = el("div", "testimonial-author-box"),
      rating = Math.max(0, Math.min(5, Math.round(number(item.rating, 5)))),
      stars = el("div", "testimonial-stars", "★".repeat(rating));
    stars.setAttribute("aria-label", `${rating} de 5 estrelas`);
    author.append(
      plain(item.author, "strong", "author-name"),
      plain(item.role, "span", "author-role"),
    );
    card.append(
      stars,
      plain(item.quote, "blockquote", "testimonial-quote"),
      author,
    );
    grid.append(card);
  });
  finish(block, heading(f.title), take(f.subtitle), grid);
}
