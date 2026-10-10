# Entrega 3.1.8 — otimização de entrega

Código 3.1.8; conteúdo 3.1.7; snapshot Toranja 1.13.3. Nenhum deploy remoto foi realizado.

## Resultado

CSS/JavaScript compilados mais compactos; fonte Inter Latin antecipada; limpeza dos chunks antigos corrigida. Os experimentos sem ganho consistente foram descartados. O adaptador React e todos os componentes oficiais foram mantidos.

| Página | Perfil | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS |
|---|---|---:|---:|---:|---:|---:|---:|
| / | desktop | 100 | 87 | 96 | 100 | 0.594 s | 0.0000 |
| / | mobile | 97 | 87 | 96 | 100 | 2.335 s | 0.0000 |
| /demo-toranja | desktop | 100 | 63 | 96 | 100 | 0.527 s | 0.0000 |
| /demo-toranja | mobile | 97 | 63 | 96 | 100 | 2.256 s | 0.0000 |
| /showcase/layouts | desktop | 100 | 87 | 96 | 100 | 0.593 s | 0.0000 |
| /showcase/layouts | mobile | 95 | 87 | 96 | 100 | 2.569 s | 0.0067 |

Medianas de três execuções por página/perfil, 18 no total. Lighthouse 13.5.0, Chromium 153, HTTP local com gzip, cache frio e navegador sem extensões. Nenhum teste de navegador concorrente durante a medição final. O domínio publicado/CDN/Media Bus não foi medido. TBT mediano de 14 ms no catálogo mobile e zero nos outros cinco cenários.

**A meta 98 não foi atingida em todas as páginas/perfis.** A Home e o catálogo passaram de 96 para 97 mobile em relação às medianas locais documentadas da 3.1.7; layouts permaneceram em 95. Não foram alterados componentes ou estados para melhorar artificialmente as notas. Notas de acessibilidade e boas práticas continuam limitadas pelos problemas registrados na versão anterior; consulte os audits individuais.

## Integridade e testes

- 9.822 arquivos do vendor idênticos; 64 componentes e 751 propriedades próprias mapeadas.
- 101 modelos e 2.265 campos; verificação de 1.963 descritores e 35.126 valores de enumeração sem lacunas.
- 320 verificações locais aprovadas: renderização, aceitação, integração, páginas/fluxos, conteúdo e fontes.
- Comparação de árvore/estilos computados em 4.044 nós: seis cenários, Home/catálogo/layouts a 393 e 1440 px, sem diferenças após estabilizar animações.
- Modelos, contratos, páginas e pacote de conteúdo iguais à 3.1.7 byte a byte.
- Guia HTML verificado em 393 e 1440 px, sem erro de JavaScript ou overflow da página; a tabela larga tem rolagem própria.
- Homologação autenticada no Universal Editor e Safari/iPhone físico não realizada nesta rodada. A comparação não cobre todas as combinações de propriedades ou todos os navegadores.

## Deploy

Se o conteúdo 3.1.7 já está instalado e publicado: somente atualizar o código 3.1.8, aguardar Code Sync/cache e verificar version.json e hashes. Não reimportar conteúdo nem republicar páginas somente por esta atualização.

Se a baseline editorial ainda é anterior à 3.1.7: o pacote contém content/demo-to-content.zip, versão 3.1.7, inalterado. Faça backup, instale sobre o anterior sem uninstall/delete e execute Preview/Publish das páginas/ativos necessários. O filtro pode sobrescrever edições e remover páginas ausentes da baseline sob /content/demo-to.

Guia: docs/EDS_AEM_Universal_Editor_Arquitetura_Deploy_3.1.8_FINAL.html. README.md descreve os comandos.

## Evidências

- docs/performance-v3.1.8/summary.json e os 18 arquivos release-*.json: medição final.
- docs/performance-v3.1.8/experiments/: tentativas excluídas da mediana final, incluindo implementações descartadas. Não são evidência de equivalência da entrega final.
- docs/compliance-v3.1.8.json, docs/delivery-equivalence-v3.1.8.json, docs/content-compatibility-v3.1.8.json e os relatórios de testes v3.1.8.
- docs/changed-files-v3.1.8.json: arquivos alterados em relação à entrega anterior (documentação e fixtures excluídas).
