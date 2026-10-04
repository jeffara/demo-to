/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, number, take, heading, link, finish, uid } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block),
    box = el("div", "mini-simulator"),
    head = el("div", "sim-header"),
    controls = el("div", "sim-controls"),
    row = el("label", "sim-row", "Quanto você quer guardar?"),
    display = el("strong"),
    slider = el("input", "sim-slider"),
    results = el("div", "sim-results"),
    inter = el("div", "sim-res-col highlight"),
    savings = el("div", "sim-res-col");
  const min = Math.max(0, number(f.minValue, 500)),
    max = Math.max(min, number(f.maxValue, 100000)),
    rate = Math.max(0, number(f.cdiRate, 10.75)) / 100;
  head.append(
    heading(f.title, "sim-title", "h3"),
    take(f.subtitle, "sim-subtitle"),
  );
  slider.type = "range";
  slider.id = uid("sim");
  slider.min = min;
  slider.max = max;
  slider.step = "any";
  slider.value = Math.max(min, Math.min(max, number(f.defaultValue, 10000)));
  row.htmlFor = slider.id;
  row.append(display);
  controls.append(row, slider);
  const res = el("strong"),
    poup = el("strong"),
    diff = el("small", "sim-diff-note");
  inter.append(el("span", "", "No Inter (102% do CDI em 1 ano)"), res, diff);
  savings.append(el("span", "", "Poupança — referência de 6,17% a.a."), poup);
  results.append(inter, savings);
  const fmt = (v) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const update = () => {
    const v = Number(slider.value);
    display.textContent = fmt(v);
    res.textContent = fmt(v * (1 + rate * 1.02));
    poup.textContent = fmt(v * 1.0617);
    diff.textContent = "Diferença: " + fmt(v * (rate * 1.02 - 0.0617));
  };
  slider.oninput = update;
  update();
  box.append(
    head,
    controls,
    results,
    el(
      "small",
      "sim-disclaimer",
      "Simulação ilustrativa, sem impostos. Rentabilidade e taxas precisam ser validadas antes da publicação.",
    ),
    link(f.cta),
  );
  finish(block, box);
}
