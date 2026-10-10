# Toranja + EDS — 4.0.0

Adaptador React para o pacote fornecido de `@interco/inter-toranja` **2.0.1**. São 73 componentes oficiais, quatro composições Custom e 128 páginas de demonstração. As 878 propriedades próprias estão classificadas no inventário e no mapeamento de autoria. O runtime monta os componentes oficiais; não replica manualmente seu DOM interno.

Os 4.230 arquivos do vendor conferem byte a byte com o ZIP recebido. Tokens, fontes completas, variantes e estados oficiais são preservados. A comparação de estilos computados cobre 88 cenários (11 componentes, quatro temas e duas larguras); não certifica todas as combinações possíveis do design system.

## Implantação

**Código e conteúdo passam para 4.0.0. É necessário importar e publicar o conteúdo atualizado.** O runtime acompanha a entrega compilado.

1. Preserve o commit anterior e exporte backup de `/content/demo-to`, dos assets envolvidos e das edições existentes.
2. Revise a sincronização com `python3 tools/sync-baseline.py --target /caminho/do/clone`. Aplique com `--apply` e revise o diff. Preserve as configurações do ambiente.
3. Faça commit/push em uma branch de homologação. Inclua blocos, modelos JSON, chunks, estilos, `head.html`, `.hlxignore` e `version.json`. Aguarde o Code Sync.
4. Instale `demo-to-content-4.0.0.zip` pelo Package Manager **sem uninstall/delete**. O filtro replace dos descendentes de `/content/demo-to` pode sobrescrever edições e remover páginas ausentes da baseline. Para conteúdo de negócio, revise e migre seletivamente a partir do backup.
5. Homologue edição, salvar/reabrir propriedades e coleções no Universal Editor. Teste Select, Stepper, Table, Sidebar, overlays, menu mobile e logo para Home.
6. Execute Preview/Publish das 128 páginas, incluindo Home, nav e footer, e dos assets necessários. Instalar no Author não publica no EDS.
7. Confira `/version.json` em Preview e Live: código/conteúdo `4.0.0`, DS `2.0.1`. Repita Lighthouse no domínio publicado antes de promover a versão.

O pacote interno `content/demo-to-content.zip` tem a mesma versão 4.0.0 do ZIP de conteúdo entregue separadamente. Em rollback, restaure código e backup editorial compatíveis e republique.

## Desenvolvimento e validação

Use Node 24. Execute `npm ci`, `npm run build` e `npm run export:aem` para reconstruir. Não edite chunks compilados manualmente.

`npm test` valida estrutura, pacote, modelos e comportamento no browser. Instale Chromium com `npx playwright install chromium` ou defina `PLAYWRIGHT_CHROMIUM_EXECUTABLE`. `npm run test:compliance` verifica a integridade do vendor, tokens e mapeamento.

Para repetir a comparação direta: `node tools/build-reference.mjs` e `node tests/official-parity.mjs`. `node tests/deployment-files.mjs` confirma que o frontend não depende de arquivos excluídos pelo `.hlxignore`.

Após atualizar o DS, execute `npm run inventory:ds`, revise contratos/modelos, reconstrua e valide variantes, estados e callbacks. Não são removidas variantes CSS com base apenas nos exemplos.

## Lighthouse

Com Chrome instalado no Mac:

```bash
AUDIT_RUNS=3 MIN_PERFORMANCE=98 npm run test:performance -- https://seu-dominio/
```

São três execuções por perfil desktop/mobile para Home, catálogo e layouts. `CHROME_PATH` é opcional; `AUDIT_ROUTES` e `AUDIT_OUTPUT` ajustam o escopo. O comando retorna erro se alguma mediana ficar abaixo de 98 ou a medição estiver incompleta.

Resultados finais: `docs/performance-v4.0.0/summary.json`, com relatórios HTML/JSON individuais. A medição local usa gzip/HTTP, sem extensões, e não reproduz integralmente o CDN, a latência ou o conteúdo publicado. Confira o resultado real no guia: performance, acessibilidade, boas práticas e SEO são notas distintas. A entrega não promete uma nota que os relatórios não comprovam.

## Design system e autoria

Novos componentes: Breadcrumb, MenuPopup, ModalDialog, Pagination, Panel, SideSheet, Sidebar, Table e TooltipDescription. Select usa `options`/`onOptionSelect`; Stepper usa `value`/`onValueChange`. Exemplos e formulário Custom foram migrados para essas APIs.

Enums seguem os tipos oficiais. Objetos, coleções e slots têm campos de autoria; dados genéricos de Table e marca customizada da Sidebar aceitam JSON declarativo. Callbacks não serializáveis usam identificadores registrados por `registerDSBehavior` em `scripts/ds-behaviors.js`. Refs e contratos de DOM permanecem técnicos. Consulte `docs/toranja-contract.json` e `docs/property-mapping.json`.

O contêiner do exemplo de Sidebar permite rolagem horizontal em telas estreitas, preservando sua largura oficial. A entrega compartilha e compacta recursos, antecipa fontes críticas e prioriza os blocos visíveis. Experimentos com subconjuntos de fontes foram descartados por diferença de espaçamento.

Não houve deploy remoto nem homologação autenticada de persistência no Universal Editor. Os relatórios identificam limitações de acessibilidade do pacote oficial; elas não foram encobertas com alterações internas no vendor.

Guia atual: `docs/EDS_AEM_Universal_Editor_Arquitetura_Deploy_4.0.0_FINAL.html`. Relatórios de versões anteriores são históricos.
