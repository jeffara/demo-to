# Toranja EDS — versão 3.0

Projeto XWalk para AEM Author + Universal Editor + Edge Delivery Services. Base de conteúdo: `/content/demo-to`. Design System de referência: **@interco/inter-toranja 1.13.3**, fornecido no ZIP oficial.

## Novidades V3

Listas tipadas no editor, composições de conteúdo, ações independentes por botão, formulários condicionais, Select por teclado, correções de Stepper/ListItem, fontes de dados registráveis e estilos isolados com tokens oficiais. Novos exemplos em `/showcase/v3`.

Comece por `docs/DEPLOY-V3.md`, `docs/INTEGRACOES-V3.md` e `docs/AUDITORIA-V3.html`. O histórico V2 permanece em documentos versionados.

## O que está incluído

- **64/64 componentes públicos** do Design System disponíveis no grupo **Toranja oficial** do Universal Editor.
- **751 propriedades próprias** inventariadas diretamente dos arquivos TypeScript do pacote, com rastreabilidade em `docs/toranja-contract.json` e `docs/property-mapping.json`.
- 31 blocos de composição da experiência anterior, preservados, com correções de links, destinos e conteúdo.
- 113 páginas de demonstração importáveis: home, catálogo, 64 exemplos individuais, composições, navegação, rodapé e páginas de destino dos links.
- Pacote de conteúdo `content/demo-to-content.zip`, pronto para importar em um site XWalk **já criado**.
- Código compilado em `scripts/ds-runtime/`. A implantação no EDS não exige executar Node no servidor.

**Cobertura de componentes não é certificação de todas as combinações de propriedades.** Os relatórios registram os testes executados. Publicação, permissões e persistência real no AEM precisam ser homologadas na instância de destino.

## Arquitetura

A página continua usando HTML semântico, blocos EDS e modelos XWalk. As composições existentes usam JavaScript nativo. Os 64 blocos `ds-*` usam o componente React **oficial**, em ilhas independentes, carregadas quando esses blocos existem na página. Não há SPA, roteador React nem substituição da página inteira.

Esta decisão preserva o comportamento e as variantes do Toranja. Ela acrescenta um runtime compartilhado ao catálogo; não equivale a uma reimplementação de todo o DS em JavaScript sem React. O formulário configurável também utiliza esse runtime para renderizar os controles oficiais. As demais composições nativas não o carregam por si só.

O snapshot oficial fica em `vendor/`, para construção reproduzível. `.hlxignore` exclui as fontes, dependências e ferramentas do Code Bus. O pacote de código de entrega permanece abaixo dos limites verificados em `docs/package-audit.json`.

## Começar localmente

Requisitos: Node **22.12 ou superior**, Python 3 e Git. O pacote já inclui o conteúdo e o runtime compilados.

```bash
npm ci
npm run preview
```

Abra `http://127.0.0.1:4173/` e `http://127.0.0.1:4173/demo-toranja`.

Para reconstruir tudo:

```bash
npm run build
npm run export:aem
```

Para reextrair o contrato após substituir o snapshot oficial: `npm run inventory:ds`, depois `npm run build`. Mudanças de versão do DS exigem revisar os exemplos e os mapeamentos antes de publicar.

`tools/upgrade-v2.py` registra a migração da versão anterior. Não faz parte do build normal e não deve ser executado sobre conteúdo editorial já alterado. O QR Code já está no pacote; a migração original usou a biblioteca Python `qrcode`.

## Deploy e importação

O procedimento completo está em **`docs/DEPLOY-V3.md`**. Ordem:

1. Atualizar o repositório de código, preservando a pasta `.git` do seu clone.
2. Confirmar AEM Code Sync e os arquivos compilados no host EDS.
3. Conferir a configuração do site e o mapeamento `/content/demo-to/` → `/`.
4. Importar `content/demo-to-content.zip` no Package Manager.
5. Reprocessar os assets importados se as rendições ainda não existirem.
6. Publicar as páginas para **Preview**; depois, após validação, para **Live**.

O pacote não recria o site nem altera `/conf`, `/apps`, permissões ou credenciais.

## Páginas

| Finalidade | AEM Author | Preview EDS |
|---|---|---|
| Home | `/content/demo-to/index.html` | `/` |
| Catálogo oficial | `/content/demo-to/demo-toranja.html` | `/demo-toranja` |
| Composições anteriores | `/content/demo-to/composicoes.html` | `/composicoes` |
| Button oficial | `/content/demo-to/showcase/button.html` | `/showcase/button` |
| Navegação compartilhada | `/content/demo-to/nav.html` | `/nav` |
| Rodapé compartilhado | `/content/demo-to/footer.html` | `/footer` |

## Autoria

Selecione **o bloco** no Universal Editor para editar suas propriedades. Os nomes exibidos preservam os nomes oficiais do DS; `›` indica uma propriedade interna de um objeto.

- Strings, números, estados e variantes possuem campos próprios.
- Imagens usam referências de assets; destinos usam `aem-content`.
- Tabs, Timeline, Carousel, países e outras listas principais possuem **itens filhos**, com adição, remoção e reordenação pelo editor.
- Listas numéricas, séries e estruturas secundárias usam itens tipados e entradas múltiplas. Campos JSON da V2 ficam ocultos apenas para compatibilidade.
- Slots selecionados suportam composição tipada (texto, imagem, CTA e cartão), além de rich text seguro. JSX e código JavaScript não são digitados no editor.
- Eventos como `onClick` são implementados pela integração e podem emitir `toranja:interaction`. Destinos de clique são configuráveis; callbacks não são código editorial.
- `disabledDates` possui uma lista declarativa de datas; `scrollContainer` usa um seletor opcional. A matriz explicita essas adaptações.
- Atributos HTML comuns têm campos próprios; o conjunto completo de atributos/eventos herdados do React está inventariado, mas não é convertido indiscriminadamente em formulário editorial.

Os exemplos devem respeitar as combinações do DS: uma variante pode exigir propriedades adicionais. Consulte `docs/official/` e o contrato. O painel exibe os campos disponíveis; ele não representa um validador completo de todas as uniões condicionais de tipos React.

## Testes

```bash
npx playwright install chromium
npm test
```

O relatório consolidado fica em `docs/AUDITORIA-V3.html`; os resultados individuais ficam em `docs/validation-*.json`, `docs/acceptance-*.json`, `docs/native-round-*.json` e `docs/package-audit.json`.

Os testes de Universal Editor reproduzem eventos e markup localmente. O aceite autenticado de salvar/reabrir/publicar na sua instância continua sendo uma etapa de implantação, não um resultado simulado apresentado como teste real.

## Integrações externas

O formulário de lead usa uma integração identificada e registrada pelo time técnico. O endpoint legado permanece compatível, oculto no painel. Sem integração, informa que o envio ainda não está configurado; não afirma envio ao CRM. Vídeo e lojas de aplicativos dependem dos seus serviços externos. Nenhuma chamada de teste envia dados para essas integrações.

## Licenças e procedência

O pacote oficial declara licença MIT. O snapshot e os metadados de procedência estão preservados em `vendor/`. Os arquivos de fonte e marca fornecidos devem seguir as condições de uso do Inter. React e ferramentas mantêm suas licenças de origem; consulte `docs/THIRD-PARTY.md`.

## Validação V3

`npm test` executa contratos, pacote e cinco suítes de navegador. `node tools/validate-v3.mjs` repete as cinco suítes em duas rodadas. Instale Chromium com `npx playwright install chromium`. `PLAYWRIGHT_CHROMIUM_EXECUTABLE` é opcional para usar Chromium específico. Relatórios finais e evidências estão em `docs/`.

O DS oficial permanece intacto em vendor. Correções de adaptação estão em `src/ds-compat.jsx`, com rastreabilidade. Os testes cobrem os casos documentados, não todas as combinações possíveis das 751 propriedades.
