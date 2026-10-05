import {loadIndex,searchRecords} from '../../scripts/search-index.js';
/** Toranja nativo EDS. Conteúdo e instrumentação preservados para autoria AEM. */
import { read, el, text, plain, href, safeURL, finish, uid, cleanup } from "../../scripts/toranja.js";
export default function decorate(block) {
  const { fields: f } = read(block),
    box = el("form", "toranja-search-box"),
    wrapper = el("div", "search-input-wrapper"),
    input = el("input", "toranja-search-input"),
    label = plain(f.label, "label", "search-label"),
    submit = el("button", "button secondary", "Buscar"),
    clear = el("button", "search-clear-btn", "×"),
    results = el("div", "search-results-dropdown");
  input.type = "search";
  input.id = uid("search");
  label.htmlFor = input.id;
  input.placeholder = text(f.placeholder);
  submit.type = "submit";
  clear.type = "button";
  clear.setAttribute("aria-label", "Limpar busca");
  results.hidden = true;
  results.setAttribute("aria-live", "polite");
  let timer,
    sequence = 0;
  const controller = new AbortController();
  cleanup(block, () => {
    clearTimeout(timer);
    controller.abort();
  });
  async function search() {
    const query = input.value.trim().toLocaleLowerCase("pt-BR"),
      current = ++sequence;
    results.replaceChildren();
    if (query.length < Number(text(f.minChars, "2"))) {
      results.hidden = true;
      return;
    }
    try {
      const records=await loadIndex(href(f.indexEndpoint,'/query-index.json'),controller.signal);
      if(current!==sequence)return;
      const matches=searchRecords(records,query,{root:text(f.searchRoot,'/'),limit:Number(text(f.maxResults,'8'))});
      matches.forEach((m) => {
        const a = el("a", "search-result-item");
        a.href = safeURL(m.path);
        a.append(
          el("strong", "search-result-title", m.title),
          el("span", "search-result-desc", m.description || ""),
        );
        results.append(a);
      });
      if (!matches.length)
        results.append(el("p", "search-empty", "Nenhum resultado encontrado."));
    } catch (error) {
      if (error.name === "AbortError") return;
      results.append(
        el(
          "p",
          "search-empty",
          "Busca indisponível no momento. Tente novamente.",
        ),
      );
    }
    results.hidden = false;
  }
  box.onsubmit = (e) => {
    e.preventDefault();
    search();
  };
  input.oninput = () => {
    clearTimeout(timer);
    sequence++;
    if (!input.value.trim()) {
      results.hidden = true;
      return;
    }
    if (block.classList.contains("instant-search"))
      timer = setTimeout(search, 250);
  };
  clear.onclick = () => {
    sequence++;
    input.value = "";
    results.hidden = true;
    input.focus();
  };
  wrapper.append(input, submit, clear);
  box.append(label, wrapper, results);
  finish(block, box);
}
