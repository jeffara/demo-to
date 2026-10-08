# Atualização V3.1.3 — espaçamento e navegação mobile

Leia `docs/ATUALIZACAO-V3.1.3.md`. Corrige os recortes do rodapé, o espaçamento dos accordions e a navegação das abas em telas estreitas. Runtime compilado incluído. Não é necessário reimportar o conteúdo. Relatórios de versões anteriores permanecem como histórico.

# Atualização V3.1.2 — calendário e tipografia

Leia `docs/ATUALIZACAO-V3.1.2.md` para atualizar uma V3.1.1 existente. Esta atualização é de código/fontes; o pacote de conteúdo permanece 3.1.1 e não precisa ser reimportado. Evidências atuais: `docs/AUDITORIA-V3.1.2.html`. Relatórios com “baseline-final” referem-se à entrega anterior, salvo nova execução explícita.

# Toranja EDS — V3 final (3.1.1)

Projeto XWalk para AEM Author + Universal Editor + Edge Delivery Services, em `/content/demo-to`. Referência: **@interco/inter-toranja 1.13.3**, fornecida pelo usuário.

## Escopo exato

O catálogo possui **64/64 componentes oficiais** e quatro blocos funcionais no grupo **DS Toranja Custom**. Seção, texto padrão e os tipos de item são infraestrutura de autoria XWalk; não são apresentados como componentes adicionais do Toranja.

- 751 propriedades próprias classificadas em campos, coleções, ações e contratos técnicos.
- 101 modelos e 2.273 campos, incluindo itens e propriedades de layout.
- 119 páginas, incluindo exemplos individuais dos 64 componentes e as galerias `/showcase/layouts` e `/showcase/custom`.
- Conteúdo importável em `content/demo-to-content.zip`: 119 páginas e 11 assets.
- Home, navegação do catálogo, composições, formulários demonstrativos e layouts reorganizados.
- Snapshot oficial do vendor preservado; adaptadores ficam fora dele.

**DS Toranja Custom:** `v3-form` (formulário configurável), `v3-search` (busca no índice público EDS), `v3-video` (player responsivo) e `v3-simulator` (simulação local com taxas editoriais). São funcionalidades próprias do projeto, separadas dos 64 exports oficiais. Galeria em `/showcase/custom` e exemplos em `/showcase/custom/formulario`, `/showcase/custom/busca`, `/showcase/custom/video` e `/showcase/custom/simulador`.

O formulário está preparado para integração posterior, sem endpoint produtivo ativado. A busca depende de `/query-index.json` configurado e atualizado no EDS. O player aceita MP4/WebM e YouTube. O simulador usa parâmetros editoriais ilustrativos. Consulte `docs/INTEGRACOES-V3.md`.

O conteúdo da Jornada é uma composição de componentes oficiais, sem reintrodução do bloco customizado `moments-journey`.

## Layout e autoria

Selecione uma **Section** no Universal Editor para configurar layout, largura, espaçamento, alinhamento, fundo e ordem no mobile. Consulte `docs/AUTORIA-LAYOUTS.md` e visite `/showcase/layouts`.

No modo **Colunas independentes**, selecione cada componente e use **Layout — coluna na seção**. É possível colocar vários componentes na mesma coluna. A estrutura do repositório continua plana: seção → blocos. Agrupamentos de colunas são apenas apresentação no navegador.

## Começar

Requisitos: Node 22.12+, Python 3 e Git.

```bash
npm ci
npm run preview
```

Abra `http://127.0.0.1:4173/`, `/demo-toranja`, `/composicoes` e `/showcase/layouts`.

```bash
npm run build
npm run check
npm run export:aem
python3 tools/audit-package.py
python3 tests/baseline-package.py
```

Para executar as duas rodadas de testes:

```bash
npx playwright install chromium
npm test
```

Use `PLAYWRIGHT_CHROMIUM_EXECUTABLE` se quiser indicar um Chromium existente. `content/pages.json` é a fonte dos exemplos entregues; o build não sobrescreve esse conteúdo com versões anteriores. Os utilitários `curate-showcases.mjs` e `polish-catalog.mjs` registram a curadoria inicial e não fazem parte do build cotidiano.

## Entrega

Leia **`docs/DEPLOY-V3-FINAL.md`**. As evidências estão em `docs/AUDITORIA-V3-FINAL.html`. Não recrie o site. Sincronize o clone com `tools/sync-baseline.py`, revise as exclusões, faça commit/push, importe o ZIP interno e publique conteúdo, nav, footer e referências.

**Faça backup antes da importação:** o pacote substitui os descendentes de `/content/demo-to`, removendo páginas ausentes da entrega e alterações editoriais anteriores. Preserva `jcr:content` da raiz e não inclui `/conf` nos filtros. O pacote não despublica automaticamente URLs antigas.

`fstab.yaml`, configuração EDS remota, permissões e conta técnica precisam corresponder ao ambiente. `config/public-paths.json` é apenas referência, não aplica configuração remota via Git.

A home EDS usa `/`; `.html` permanece nas URLs de edição do Author. O código entrega ilhas React do pacote oficial dentro de blocos EDS; não é uma SPA.

**Limite da evidência:** cobertura 64/64 é cobertura dos exports do snapshot fornecido, não de versões futuras nem de todas as combinações de propriedades. A validação entregue é local. Persistência real no Universal Editor, instalação FileVault, permissões e publicação precisam ser homologadas no AEM.
