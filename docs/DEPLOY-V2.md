# Implantação da versão 2.0

## 1. Atualizar o código

Use seu clone de `jeffara/demo-to`. Extraia o projeto 2.0 em uma pasta separada e copie o conteúdo para o clone, preservando `.git`. Não copie `node_modules`. Faça uma branch para revisar:

```bash
git switch -c toranja-v2
npm ci
npm run build
npm run export:aem
git add -A
git status
git commit -m "feat: catálogo Toranja oficial e autoria EDS v2"
git push -u origin toranja-v2
```

Revise e integre a branch em `main`. Os arquivos compilados `scripts/ds-runtime/`, os modelos agregados e `scripts/contracts.js` devem estar no commit. `.gitignore` exclui dependências. `.hlxignore` limita o que é entregue pelo EDS. Não remova o histórico Git.

Se o repositório já rastreava dependências, remova apenas o rastreamento uma vez:

```bash
git rm -r --cached --ignore-unmatch node_modules
git add .gitignore
git commit -m "chore: remove dependências geradas do rastreamento"
```

## 2. Conferir código e fonte de conteúdo

Host de preview: `https://main--demo-to--jeffara.aem.page`.

Confirme que `/scripts/aem.js`, `/scripts/ds-runtime/toranja-runtime.js`, `/component-models.json` e `/component-definition.json` retornam 200. O grupo `toranja-official` deve conter os 64 componentes.

O `fstab.yaml` aponta para:

```
https://author-p25321-e2324527.adobeaemcloud.com/bin/franklin.delivery/jeffara/demo-to/main
```

Em sites já provisionados no Configuration Service, mudar somente `fstab.yaml` não atualiza necessariamente a fonte ativa. No Site Admin, confira **Content Source URL** e o tipo de fonte AEM/markup correspondente.

- Site Admin: https://tools.aem.live/tools/site-admin/index.html
- Documentação: https://www.aem.live/developer/ue-tutorial

## 3. Conferir raiz e mapeamento

Na instância AEM, o site `/content/demo-to` deve herdar a configuração Edge Delivery correta, com Project URL `https://main--demo-to--jeffara.aem.page`.

A configuração atual permite o mapeamento implícito da raiz do site. Para tornar explícito o mapeamento das páginas e dos assets, o projeto fornece `config/public-paths.json`:

```json
{
  "paths": {
    "mappings": [
      "/content/demo-to/:/",
      "/content/dam/toranja-eds-demo/:/assets/"
    ],
    "includes": ["/content/demo-to/", "/content/dam/toranja-eds-demo/"],
    "excludes": ["/content/demo-to/**/drafts/**"]
  }
}
```

No Admin Edit, abra a configuração pública de **org `jeffara`, site `demo-to`**, faça backup do JSON atual e incorpore a propriedade `paths` acima, preservando as demais configurações. Salve.

- Admin Edit: https://tools.aem.live/tools/admin-edit/index.html
- Referência: https://www.aem.live/developer/authoring-path-mapping

Se a configuração AEM estiver explicitamente no modo legado **file based / paths.json**, use o conteúdo de `config/paths-legacy.json` como `paths.json` na raiz do repositório, faça commit e confira sua leitura pelo AEM. Esse arquivo é uma alternativa de compatibilidade; não ative configurações conflitantes nos dois lugares. Para uma instalação atual, siga a configuração pública do serviço.

## 4. Importar conteúdo

Não é necessário recriar o site. Antes de substituir as páginas de demonstração que já foram editadas, faça um pacote de backup desses caminhos no Package Manager.

Importe e instale **`content/demo-to-content.zip`**. Ele contém 105 páginas e 9 assets. O filtro inclui as páginas nomeadas; páginas pai usam merge para preservar outros filhos. Assets são filtrados individualmente. O pacote não altera `/conf` ou `/apps`.

O site XWalk e seu template precisam existir antes desta etapa. Este ZIP é um pacote de conteúdo, não o Site Template da Adobe.

Assets ficam em `/content/dam/toranja-eds-demo`. Se não houver miniaturas/rendições, selecione os assets e execute **Reprocess Assets / Full Process**. Aguarde concluir antes de publicar.

## 5. Publicar para Preview

A instalação no Package Manager grava no AEM; ela **não** envia automaticamente o conteúdo para o Content Bus do EDS.

No Universal Editor, abra `index.html` e use **Publish → Preview**. Faça o mesmo para `nav`, `footer`, `demo-toranja`, `composicoes` e os exemplos sob `showcase`. Para publicar todo o catálogo, use o recurso de publicação em lote disponibilizado pela sua instância AEM/EDS, incluindo as páginas filhas.

Se a publicação for recusada, confira a conta técnica nas configurações EDS do AEM e sua permissão no User Admin, conforme o tutorial Adobe. Não troque o token por credenciais salvas no repositório.

Depois da publicação, abra:

- https://main--demo-to--jeffara.aem.page/
- https://main--demo-to--jeffara.aem.page/demo-toranja
- https://main--demo-to--jeffara.aem.page/showcase/button

O `.html` continua normal no Author. No EDS, páginas de conteúdo usam URLs sem extensão.

## 6. Diagnóstico do problema observado

No diagnóstico desta revisão:

| Caminho | Resultado | Indicação |
|---|---|---|
| `/scripts/aem.js` | 200 | Código disponível |
| `/` | 404, `failed to load /index.md from content-bus` | Home ausente nesse destino de conteúdo |
| `/demo-toranja` | 404, `failed to load /demo-toranja.md from content-bus` | Catálogo ausente nesse destino |
| `/index.html` | 404, `failed to load /index.html from code-bus` | URL tentou carregar arquivo de código |

Isso identifica a ausência no destino, mas não distingue sozinho entre conteúdo nunca publicado, publicação com erro ou mapeamento para outro caminho. Confira a configuração e publique novamente. O log está em `docs/remote-route-diagnostic.json`.

```bash
npm run diagnose:eds
```

Um redirect JavaScript não resolve um 404 ocorrido antes de carregar a página. Para preservar URLs públicas legadas com `.html`, configure redirects no CDN do domínio de produção; não duplique as páginas como HTML estático no Code Bus.

## 7. Homologação autenticada e Live

Na instância real, valide:

1. Selecionar Button, configurar página interna com o seletor AEM e uma URL externa; salvar, recarregar e confirmar.
2. Alterar texto, estado, tamanho e imagem de componentes oficiais.
3. Adicionar uma seção e um bloco do grupo Toranja oficial.
4. Adicionar, remover e reordenar itens em Tabs, Timeline, Carousel e listas de países.
5. Editar os links de `nav` e `footer`; gerar Preview dessas páginas compartilhadas.
6. Publicar a página, comparar o preview com a edição e conferir os destinos sem `.html`.
7. Validar mobile, navegação por teclado e as integrações externas configuradas.

Somente depois desse aceite publique para **Live** (`https://main--demo-to--jeffara.aem.live`) e configure/valide o domínio de produção, caso exista.
