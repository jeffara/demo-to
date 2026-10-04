/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, number, take, finish, media, instrument, editing, cleanup } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f, items } = read(block),
    box = el("div", "toranja-carousel-container"),
    track = el("div", "toranja-carousel-track"),
    controls = el("div", "toranja-carousel-controls"),
    dots = el("div", "carousel-dots");
  track.tabIndex = 0;
  track.setAttribute("aria-label", "Carrossel");
  items.forEach((item, i) => {
    const slide = instrument(item.row, el("div", "toranja-carousel-slide"));
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-label", `${i + 1} de ${items.length}`);
    slide.append(
      media(item.image, "cards-card-image"),
      take(item.content, "cards-card-body"),
    );
    track.append(slide);
  });
  let active = 0;
  const go = (i) => {
    active = (i + items.length) % Math.max(items.length, 1);
    const slide = track.children[active];
    if (slide)
      track.scrollTo({
        left: slide.offsetLeft - track.children[0].offsetLeft,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    [...dots.children].forEach((d, j) => {
      d.classList.toggle("active", j === active);
      d.setAttribute("aria-current", String(j === active));
    });
  };
  if (block.classList.contains("show-arrows")) {
    for (const [label, step] of [
      ["Anterior", -1],
      ["Próximo", 1],
    ]) {
      const b = el("button", "carousel-btn", label);
      b.type = "button";
      b.onclick = () => go(active + step);
      controls.append(b);
    }
  }
  if (block.classList.contains("show-indicators"))
    items.forEach((_, i) => {
      const dot = el("button", "carousel-dot");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir para slide ${i + 1}`);
      dot.onclick = () => go(i);
      dots.append(dot);
    });
  controls.append(dots);
  box.append(track, controls);
  finish(block, box);
  go(0);
  track.addEventListener("keydown", (e) => {
    if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      go(active + (e.key === "ArrowLeft" ? -1 : 1));
    }
  });
  track.addEventListener(
    "scroll",
    () => {
      const first = track.children[0];
      if (!first) return;
      active = [...track.children].reduce(
        (best, s, i) =>
          Math.abs(s.offsetLeft - first.offsetLeft - track.scrollLeft) <
          Math.abs(
            track.children[best].offsetLeft -
              first.offsetLeft -
              track.scrollLeft,
          )
            ? i
            : best,
        0,
      );
      [...dots.children].forEach((d, i) =>
        d.classList.toggle("active", i === active),
      );
    },
    { passive: true },
  );
  if (
    block.classList.contains("autoplay") &&
    !editing() &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches &&
    items.length > 1
  ) {
    let timer,
      paused = false;
    const stop = () => clearInterval(timer),
      start = () => {
        stop();
        if (!paused)
          timer = setInterval(
            () => go(active + 1),
            Math.max(1500, number(f.interval, 5000)),
          );
      };
    const pause = el("button", "carousel-btn", "Pausar");
    pause.type = "button";
    pause.onclick = () => {
      paused = !paused;
      pause.textContent = paused ? "Reproduzir" : "Pausar";
      start();
    };
    controls.append(pause);
    box.addEventListener("mouseenter", stop);
    box.addEventListener("mouseleave", start);
    box.addEventListener("focusin", stop);
    box.addEventListener("focusout", start);
    start();
    cleanup(block, stop);
  }
}
