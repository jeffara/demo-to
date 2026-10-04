/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, plain, link, href, finish, media, option } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block),
    box = el("figure"),
    frame = el(
      "div",
      "toranja-video-frame portal-" +
        option(block, ["arch", "asymmetric", "pill", "rounded"], "arch"),
    ),
    poster = media(f.posterImage, "video-poster-wrapper"),
    button = el("button", "toranja-play-btn", "▶");
  button.type = "button";
  button.setAttribute("aria-label", "Assistir: " + text(f.title, "vídeo"));
  poster.append(button);
  frame.append(poster);
  button.onclick = () => {
    const url = new URL(href(f.videoUrl), location.href);
    let target;
    if (
      /(^|\.)youtube\.com$/.test(url.hostname) ||
      url.hostname === "youtu.be"
    ) {
      const id =
        url.hostname === "youtu.be"
          ? url.pathname.slice(1)
          : url.searchParams.get("v") || url.pathname.split("/").pop();
      if (!/^[\w-]+$/.test(id || "")) return;
      target = el("iframe", "video-iframe");
      target.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
      target.title = text(f.title, "Vídeo");
      target.allow = "autoplay; encrypted-media; picture-in-picture";
      target.allowFullscreen = true;
    } else if (/\.(mp4|webm)$/i.test(url.pathname)) {
      target = el("video", "video-iframe");
      target.src = url.href;
      target.controls = true;
      target.autoplay = true;
    } else {
      const a = link(f.videoUrl, "button secondary", "Abrir vídeo");
      a.target = "_blank";
      a.rel = "noopener";
      target = a;
    }
    frame.replaceChildren(target);
  };
  box.append(plain(f.title, "h3"), frame, plain(f.caption, "figcaption"));
  finish(block, box);
}
