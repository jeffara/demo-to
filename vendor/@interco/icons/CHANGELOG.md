# Changelog

## 7.0.2 (2026-05-20)

No changes.

## 7.0.1 (2026-04-01)

### added (2 changes)

- [Merge branch 'chore/change-dist' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/0d3b197eadc1c6a352ba46da6d4246281dbeeb54) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/173))
- [feat: change mode build and refactor figma orange](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/74df99c6920822044c0631bde5b74a9a208c3171) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/173))

## 7.0.0

### Notas

- **Ícones Toranja/Orange:** cada ícone em `dist/**/index.js` (SVGR gera JSX; `build:babel` transpila in-place). O campo `exports` do pacote aponta para estes ficheiros. A preview Vite resolve `@interco/icons/toranja|orange/...` para o mesmo caminho em `dist/` (`config/vite-resolve-dist-icon-index.ts`).
- **Orange via Figma:** `dist/orange` e `manifest-orange.json` passam a ser gerados no `build:compile` (páginas `SM`, `MD`, `LD`, `LG`, `XL` no ficheiro Foundations). Removidos `build:orange-esm` e passos de cópia dedicados para static no `build:copy`. Ver `docs/figma-orange-foundations.md`.
- O build completo (`yarn build` / `yarn dev`) continua a depender da API Figma e rede para gerar `dist/`.

## 5.9.7 (2026-06-01)

### added (17 changes)

- [Merge branch 'chore/change-dist' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/0d3b197eadc1c6a352ba46da6d4246281dbeeb54) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/173))
- [feat: change mode build and refactor figma orange](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/74df99c6920822044c0631bde5b74a9a208c3171) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/173))
- [Merge branch 'fix/build' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/99d89ab9e38f4fc5b4e34b7df9c2f7d9c5c7172f) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/172))
- [fix: build](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/99f0d13fa3d775c2e1ee43faab7521ae6569a384) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/172))
- [Merge branch 'fix/path-export' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/4bba50efb7813faa1b372670a7a6071cf40df11a) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/170))
- [fix: resolve imports](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/3dfc2fe54b692a45a4b8aa809f9ea208cb7032d8) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/170))
- [Merge branch 'fix/modal-paymentMethods' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/d88545e6410a6cb7e8492c05616852e5d5cd7905) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/169))
- [chore: fix colors assets payment-methods](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/a5c6a1175547524f8b2c9b289b3cbba2b29ea55b) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/169))
- [Merge branch 'feat/new-preview' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/42626d4680ea47cc1b4ce45368b876c8e7833e1b) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/168))
- [feat: new preview v7](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/d6c7aa426f211f18eb5bb932b3b37c06d03d0ea0) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/168))
- [Merge branch 'feat/new-structure' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/43e7c6dfff490c1835f54fd823d472b3ebefa129) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/167))
- [feat: create new structure and remove bidis](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/4a0053da48ce372e06b47cee616d6c10dcadd50d) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/167))
- [Merge branch 'feat/added-flags-payment' into 'v7.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/85e559a67bab08012ac89d429ea3973d96ca2065) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/166))
- [feat: added flags e payment methods](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/7bc0b9b9eac666f81179297c61d1302a56ee4312) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/166))
- [Merge branch 'feature/updating-figma-token' into 'v6.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/09c22b7af94c1930164c3f7f7d394f7dc9ebd38c) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/165))
- [feat: updating-figma-token](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/3846f1f00171e682604b503f16c5fae5286d60db) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/165))
- [Merge branch 'chore/vite-dist' into 'v6.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/44d512f6f09e9654092f994dc29b3680bb3bcd22) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/164))

### changed (2 changes)

- [Merge branch 'refactor-build-process' into 'v5.x'](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/cc0913b66e3f712ee63248b3f8a6c15652f167f3) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/163))
- [refactor: change build output directory from dist/ to lib/](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/commit/e0fb366f054385c78be0826c2b6f7c8f9b129001) ([merge request](https://gitlab.sharedservices.local/pd/pe/global/core-front-end/web/frontend/technology-elements/foundation/inter-frontend-svgs/-/merge_requests/163))
