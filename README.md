# Inter — Showcase Toranja React Adapter · 5.1.0

Código: `inter-aem-eds-toranja-react`.
Conteúdo AEM: `inter-aem-eds-showcase-toranja-react`.
Origem: baseline `aem-eds-inter-toranja_v4.0.0.zip`, preservada separadamente.
Design system original: `@interco/inter-toranja` 2.0.1.

## Escopo desta versão

Migração dos 73 blocos `ds-*` para `ds-react-*`, incluindo diretórios, arquivos, seletores, identificadores de modelos/filtros, itens de coleções, contratos, geradores, fixtures e conteúdo FileVault. Exemplo: `blocks/ds-react-button/ds-react-button.js`.

Os componentes e tokens originais em `vendor/` não foram alterados. Este pacote continua usando React; não é uma conversão para EDS nativo. A versão major 5.0.0 sinaliza a quebra dos identificadores de conteúdo.

| Repositório | Prefixo | Responsabilidade |
| --- | --- | --- |
| `inter-aem-eds-toranja-react` | `ds-react-*` | Componentes oficiais via React Adapter e seu showcase |
| `inter-aem-eds-toranja` | `ds-eds-*` | Implementação nativa EDS, independente do adapter React |
| `inter-aem-eds-web-custom` | `c-*` | Composição dos sites e extensões consumindo uma versão definida do catálogo nativo |

Esta entrega atualiza o primeiro projeto. Não cria ou publica os outros repositórios. O `inter-aem-eds-web-custom` também compõe o código publicado do institucional: incorpora uma versão definida do Toranja nativo no seu processo de entrega. Não é necessário um quarto repositório unificador.

O grupo de autoria dos 73 componentes é **Toranja — React Adapter**. A versão 5.1.0 contém somente blocos `ds-react-*`; remove os quatro exemplos customizados e suas cinco páginas. A entrega 5.0.0 foi preservada separadamente. A implementação institucional desses recursos pertence ao projeto Custom. Correção sobre a versão anterior: `c-video` já usava HTML/JavaScript nativo; os outros três exemplos usavam React.

Se instalou uma versão anterior, preserve as edições e retire de publicação as rotas `/showcase/custom`, `/showcase/custom/formulario`, `/showcase/custom/busca`, `/showcase/custom/video` e `/showcase/custom/simulador`; depois mova ou remova suas cópias no Author conforme o plano de migração. O pacote 5.1.0 preserva páginas não listadas e **não remove essas páginas automaticamente**. Consulte `docs/react-scope-migration.json`.

## Instalação coordenada de código e conteúdo

1. Preserve o commit anterior e exporte backup das páginas editadas do catálogo. O pacote substitui o conteúdo dessas páginas.
2. Coloque o código deste ZIP no clone do repositório `inter-aem-eds-toranja-react`. Para atualizar um clone existente, rode `python3 tools/sync-baseline.py --target /caminho/do/clone` para revisar o plano e, somente após conferir o diff, execute com `--apply`. Esse utilitário remove arquivos obsoletos das pastas gerenciadas; use somente no clone dedicado ao catálogo.
3. Preserve e revise `fstab.yaml`, `.well-known` e `config/` do seu ambiente. O nome do pacote não renomeia o site EDS, o repositório remoto, nem o mountpoint. Se criar um novo repositório remoto, configure o vínculo correspondente no EDS/Code Sync.
4. Envie o código completo à branch de homologação, incluindo os arquivos compilados e `.hlxignore`; aguarde a sincronização pelo Code Sync.
5. Importe `inter-aem-eds-showcase-toranja-react-5.1.0.zip` pelo Package Manager. Não importe o ZIP de código no Package Manager.
6. Execute Preview/Publish das páginas do catálogo, incluindo `/nav` e `/footer`, e dos assets. A instalação no Author não publica as páginas no EDS.
7. Homologue edição, salvar/reabrir campos e coleções no Universal Editor; confira navegação, componentes e `/version.json` antes de promover.

As raízes permanecem `/content/demo-to` e `/content/dam/toranja-eds-demo`. As URLs editoriais, como `/demo-toranja` e `/showcase/button`, permanecem. O pacote contém 123 páginas e 10 assets. Seus filtros cobrem somente as páginas listadas e seus próprios `jcr:content`, além dos assets específicos; páginas não listadas, `/conf`, `/apps` e configuração da raiz ficam fora.

**Não combine conteúdo antigo `ds-*` com código 5.1.0.** Páginas criadas ou editadas fora dos exemplos entregues precisam migrar seus identificadores `name`, `model` e `filter` conforme `docs/namespace-migration.json`. Campos e valores editoriais mantêm o contrato. Não há aliases legados ocultos. Para rollback, restaure código e conteúdo compatíveis e republique.

## Desenvolvimento

Node 24. Dependências com versões preservadas no lockfile:

```bash
npm ci
npm run build
npm run export:aem
npm run check
npm run test:compliance
python3 tests/baseline-package.py
python3 tests/namespace-migration.py
python3 tools/audit-package.py
python3 tools/package-release.py
```

O runtime já vem compilado; o EDS não executa `npm ci`. Fontes, adapters e geradores estão incluídos para reconstrução. Para atualizar o Toranja, execute `npm run inventory:ds`, revise os contratos e reconstrua; o gerador também usa `ds-react-*`.

## Verificação e limites

Build e verificações estáticas desta versão estão em `docs/namespace-validation.json`, `docs/compliance-v5.1.0.json`, `docs/property-model-validation.json`, `docs/baseline-package-validation.json` e `docs/package-audit.json`.

Não foi executado deploy, instalação no AEM, homologação do Universal Editor, auditoria visual ou Lighthouse desta versão. Relatórios antigos na pasta de trabalho pertencem à baseline 4.0.0; o empacotador desta release exclui essa evidência histórica para evitar confusão.
