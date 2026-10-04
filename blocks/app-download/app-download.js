/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, take, heading, link, finish, media } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block),
    box = el("div", "toranja-app-download-card"),
    info = el("div", "app-download-info"),
    actions = el("div", "app-download-buttons");
  info.append(
    heading(f.title, "app-download-title"),
    take(f.subtitle, "app-download-subtitle"),
  );
  for (const [key, label] of [
    ["appleStoreUrl", "App Store"],
    ["googlePlayUrl", "Google Play"],
  ]) {
    const a = link(f[key], "store-badge", label);
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    actions.append(a);
  }
  info.append(actions);
  box.append(info);
  if (f.qrCodeImage?.querySelector("img")) {
    const qr = media(f.qrCodeImage, "app-download-qr");
    box.append(qr);
  }
  finish(block, box);
}
