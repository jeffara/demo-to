/** Integração local em Chromium. Eventos UE são simulados; não substituem homologação AEM. */
import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { serve } from "../tools/serve.mjs";
import { blockHTML } from "../tools/render-content.mjs";
const require = createRequire(import.meta.url);
const { chromium } = require(
  process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES
    ? process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES + "/playwright"
    : "playwright",
);
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
    : {}),
  args: ["--no-sandbox"],
});
const server = await serve();
const pages = JSON.parse(fs.readFileSync("content/pages.json"));
const contracts = JSON.parse(fs.readFileSync("content/contracts.json"));
const samples = Object.fromEntries(
  Object.values(pages)
    .flatMap((p) => p.sections.flatMap((s) => s.content.filter((c) => c.block)))
    .map((b) => [b.block, b]),
);
const report = {
  scope: "Testes locais; fixtures e eventos UE simulados. Sem conexão com AEM.",
  tests: [],
};
const check = async (name, fn) => {
  try {
    const detail = await fn();
    report.tests.push({ name, pass: true, ...detail });
    console.log("OK", name);
  } catch (e) {
    report.tests.push({ name, pass: false, error: e.message });
    console.error("FAIL", name, e.message);
  }
};
const page = await browser.newPage();
const origin = "http://127.0.0.1:4173";
async function mount(name, properties = {}, items, authored = false) {
  const data = structuredClone(samples[name]);
  Object.assign(data.properties, properties);
  if (items) data.items = items;
  await page.evaluate(
    async ({ name, markup }) => {
      document.body.innerHTML = "<main>" + markup + "</main>";
      const block = document.querySelector("main").firstElementChild;
      block.classList.add("block");
      await (
        await import("/blocks/" + name + "/" + name + ".js")
      ).default(block);
    },
    { name, markup: blockHTML(data, authored, "urn:test:" + name) },
  );
  return data;
}
try {
  for (const width of [390, 768, 1440])
    for (const name of ["index", "demo-toranja"])
      await check(`${name}: ${width}px`, async () => {
        const p = await browser.newPage({ viewport: { width, height: 900 } });
        const errors = [];
        p.on("pageerror", (e) => errors.push(e.message));
        p.on("response", (r) => {
          if (r.status() >= 400) errors.push(r.status() + " " + r.url());
        });
        await p.goto(origin + "/" + name + ".html");
        await p.waitForFunction(
          () => document.documentElement.dataset.toranjaLoaded === "true",
        );
        const state = await p.evaluate(() => ({
          ready: document.querySelectorAll("[data-toranja-ready]").length,
          failed: [...document.querySelectorAll(".block")]
            .filter((b) => !b.dataset.toranjaReady)
            .map((b) => b.dataset.blockName),
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          ids: [...document.querySelectorAll("[id]")].map((e) => e.id),
          headerLinks: document.querySelectorAll("header .nav-link").length,
          footerColumns: document.querySelectorAll("footer .footer-col").length,
        }));
        await p.close();
        assert.deepEqual(errors, []);
        assert.deepEqual(state.failed, []);
        assert.equal(state.overflow, false);
        assert.equal(new Set(state.ids).size, state.ids.length);
        assert.ok(state.headerLinks > 0);
        assert.ok(state.footerColumns > 1);
        return { ready: state.ready };
      });
  await page.goto(origin + "/index.html");
  await page.waitForFunction(
    () => document.documentElement.dataset.toranjaLoaded,
  );
  for (const [name, sample] of Object.entries(samples))
    await check(name + ": múltiplas instâncias e recursos UE", async () => {
      const result = await page.evaluate(
        async ({ name, markup }) => {
          document.body.innerHTML =
            "<main>" +
            markup +
            markup.replaceAll("urn:test:one", "urn:test:two") +
            "</main>";
          const blocks = [...document.querySelector("main").children];
          for (const block of blocks)
            await (
              await import("/blocks/" + name + "/" + name + ".js")
            ).default(block);
          const ids = [...document.querySelectorAll("[id]")].map((e) => e.id);
          return {
            ready: blocks.every((b) => b.dataset.toranjaReady === "true"),
            ids,
            resources: [
              ...document.querySelectorAll("[data-aue-resource]"),
            ].map((e) => e.dataset.aueResource),
          };
        },
        { name, markup: blockHTML(sample, true, "urn:test:one") },
      );
      assert.ok(result.ready);
      assert.equal(new Set(result.ids).size, result.ids.length);
      for (const root of ["urn:test:one", "urn:test:two"]) {
        assert.ok(result.resources.includes(root));
        for (let i = 0; i < (sample.items || []).length; i++)
          assert.ok(
            result.resources.includes(root + "/item_" + i),
            "Recurso filho perdido",
          );
      }
    });
  for (const name of Object.keys(contracts.containers))
    await check(name + ": edição/reordenação de itens", async () => {
      const base = structuredClone(samples[name]);
      if (!base?.items.length) return;
      const field = contracts.cells[contracts.containers[name]].find(
        (k) => !/(image|link|segmentId|fieldName|number|value\d)/i.test(k),
      );
      const items = base.items.slice().reverse();
      items[0][field] = "Item editado " + name;
      items.push(structuredClone(items[0]));
      await mount(name, {}, items, true);
      assert.ok(
        await page
          .locator("main")
          .innerText()
          .then((t) => t.includes("Item editado " + name)),
      );
      const resources = await page
        .locator("[data-aue-resource]")
        .evaluateAll((nodes) => nodes.map((n) => n.dataset.aueResource));
      assert.ok(
        resources.includes("urn:test:" + name + "/item_" + (items.length - 1)),
      );
    });
  await check("Hero: título, CTA, imagem e variante", async () => {
    await mount("hero", {
      headline: "Título atualizado",
      headlineType: "h2",
      primaryCta: "#novo",
      primaryCtaText: "Novo CTA",
      image: "/assets/demo/6aa4033b9055.jpg",
      imageAlt: "Foto atualizada",
      "classes_portal-variant": "pill",
    });
    assert.equal(
      await page.locator(".hero h2").innerText(),
      "Título atualizado",
    );
    assert.equal(
      await page.locator(".hero a").first().getAttribute("href"),
      "#novo",
    );
    assert.equal(await page.locator(".hero a").first().innerText(), "Novo CTA");
    assert.equal(
      await page.locator(".hero img").getAttribute("alt"),
      "Foto atualizada",
    );
    assert.equal(await page.locator(".hero .portal-frame.pill").count(), 1);
  });
  await check("Abas: seleção inicial e teclado", async () => {
    await mount("tabs", { defaultTab: 2 });
    const tabs = page.locator(".tabs [role=tab]");
    assert.equal(await tabs.nth(1).getAttribute("aria-selected"), "true");
    await tabs.nth(1).focus();
    await page.keyboard.press("Home");
    assert.equal(await tabs.first().getAttribute("aria-selected"), "true");
  });
  await check("Accordion: single-open e multi-open", async () => {
    await mount("accordion", { classes_behavior: "single-open" });
    await page.locator("summary").nth(0).click();
    await page.locator("summary").nth(1).click();
    assert.equal(await page.locator("details[open]").count(), 1);
    await mount("accordion", { classes_behavior: "multi-open" });
    await page.locator("summary").nth(0).click();
    await page.locator("summary").nth(1).click();
    assert.equal(await page.locator("details[open]").count(), 2);
  });
  await check("Simulador: limites e valor autorados", async () => {
    await mount("simulator", {
      minValue: 20,
      maxValue: 80,
      defaultValue: 60,
      cdiRate: 8,
    });
    const input = page.locator("input[type=range]");
    assert.equal(await input.getAttribute("min"), "20");
    assert.equal(await input.getAttribute("max"), "80");
    assert.equal(await input.inputValue(), "60");
  });
  await check("Carrossel: controles e indicadores configuráveis", async () => {
    await mount("carousel", {
      classes_autoplay: false,
      "classes_show-arrows": false,
      "classes_show-indicators": false,
    });
    assert.equal(await page.locator(".carousel button").count(), 0);
    await mount("carousel", {
      classes_autoplay: false,
      "classes_show-arrows": true,
      "classes_show-indicators": true,
    });
    await page.locator(".carousel-btn").nth(1).click();
    assert.equal(
      await page.locator(".carousel-dot[aria-current=true]").count(),
      1,
    );
  });
  await check(
    "Modal: abertura, fechamento e instância de autoria",
    async () => {
      await mount("modal", { trigger: "Abrir termos" });
      await page
        .getByRole("button", { name: "Abrir termos", exact: true })
        .click();
      assert.equal(await page.locator("dialog").evaluate((e) => e.open), true);
      await page.getByRole("button", { name: "Fechar", exact: true }).click();
      assert.equal(await page.locator("dialog").evaluate((e) => e.open), false);
    },
  );
  await check("Form: envio real e mensagem editável", async () => {
    await page.route("**/test-submit", (r) =>
      r.fulfill({ status: 200, body: "{}", contentType: "application/json" }),
    );
    await mount(
      "form",
      {
        endpoint: "/test-submit",
        submitLabel: "Enviar dados",
        successMessage: "Recebido no teste",
        consent: "",
      },
      [
        {
          fieldName: "email",
          label: "Email",
          kind: "email",
          required: true,
          placeholder: "Seu email",
          options: "",
        },
      ],
    );
    await page.locator("input[name=email]").fill("teste@example.com");
    await page.getByRole("button", { name: "Enviar dados" }).click();
    await page.waitForFunction(
      () =>
        document.querySelector(".form-status")?.textContent ===
        "Recebido no teste",
    );
    await page.unroute("**/test-submit");
  });
  await check("Busca: índice e resultados", async () => {
    await page.route("**/test-index.json", (r) =>
      r.fulfill({
        contentType: "application/json",
        body: JSON.stringify({
          data: [
            {
              title: "Resultado Toranja",
              description: "Demonstração",
              path: "/demo-toranja",
            },
          ],
        }),
      }),
    );
    await mount("search-bar", {
      indexEndpoint: "/test-index.json",
      "classes_instant-search": false,
    });
    await page.locator("input").fill("Toranja");
    await page.getByRole("button", { name: "Buscar", exact: true }).click();
    await page.waitForSelector(".search-result-item");
    assert.equal(
      await page.locator(".search-result-title").innerText(),
      "Resultado Toranja",
    );
  });
  await check("Header mobile: conteúdo compartilhado e menu", async () => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(origin + "/index.html");
    await page.waitForFunction(
      () => document.documentElement.dataset.toranjaLoaded,
    );
    await page.getByRole("button", { name: "Abrir menu", exact: true }).click();
    assert.equal(await page.locator("header .main-nav").isVisible(), true);
    await page.keyboard.press("Escape");
    assert.equal(
      await page.locator("header .mobile-toggle").getAttribute("aria-expanded"),
      "false",
    );
  });
  await check("Universal Editor: atualização simulada sem reload", async () => {
    await mount("hero", {}, undefined, true);
    await page.evaluate(async () => {
      document.querySelector("main").dataset.aueResource = "urn:test:main";
      await import("/scripts/editor-support.js");
    });
    const data = structuredClone(samples.hero);
    data.properties.headline = "Atualização recebida do editor";
    const markup = blockHTML(data, true, "urn:test:hero");
    await page.evaluate(
      (content) =>
        document
          .querySelector("main")
          .dispatchEvent(
            new CustomEvent("aue:content-update", {
              bubbles: true,
              detail: {
                request: { target: { resource: "urn:test:hero" } },
                response: { updates: [{ content }] },
              },
            }),
          ),
      markup,
    );
    await page.waitForFunction(
      () =>
        document.querySelector(".hero-headline")?.textContent ===
        "Atualização recebida do editor",
    );
    assert.equal(await page.locator(".hero").count(), 1);
  });
} finally {
  fs.mkdirSync("docs/validation", { recursive: true });
  fs.writeFileSync(
    "docs/validation/browser-results.json",
    JSON.stringify(report, null, 2) + "\n",
  );
  await browser.close();
  server.close();
}
const failed = report.tests.filter((t) => !t.pass);
console.log(
  `${report.tests.length - failed.length}/${report.tests.length} verificações aprovadas.`,
);
if (failed.length) process.exitCode = 1;
