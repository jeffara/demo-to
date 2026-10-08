# V3.1.4 — menu mobile

Correção de CSS para a navegação compartilhada em telas de até 760 px. A regra genérica `.section.nav-row`, carregada depois de base.css, voltava a centralizar os itens. O ajuste final usa escopo mais específico e garante alinhamento à esquerda, links e botões em largura integral, links/botões com altura mínima de 48 px e controle do menu de pelo menos 44 px. Rótulos longos podem quebrar linha. O menu continua no fluxo da página.

## Atualizar

Extraia fora do clone Git. Na pasta extraída `aem-eds-inter-toranja`, execute:

```bash
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to --apply
cd /caminho/do/clone-demo-to
git diff --stat
git diff --check
git add -A
git commit -m "fix: menu mobile Toranja V3.1.4"
git push
```

Revise o plano do sincronizador antes de aplicar: esta é uma baseline completa e pode substituir personalizações locais das pastas gerenciadas. Use a branch vinculada ao EDS e PR se exigido pelo repositório. Runtime compilado incluído: não é necessário recompilar para esta correção de CSS.

## Conteúdo: nenhuma operação necessária

Não desinstale, exclua ou reimporte o pacote de conteúdo. Não é necessário republicar páginas para esta correção. Páginas, pacote de conteúdo 3.1.1, modelos e os três JSONs do Universal Editor foram comparados por SHA-256 e permanecem idênticos à V3.1.3. A correção aplica-se às páginas existentes que usam a navegação compartilhada. Mudanças editoriais independentes e páginas ainda não publicadas requerem publicação própria.

## Identificação da entrega

O arquivo `/version.json` informa 3.1.4 e o SHA-256 esperado de `styles/layout.css`. Para confirmar o deploy, confira ambos: o número da versão sozinho não comprova que todos os arquivos já sincronizaram.

## Verificação realizada e limites

Contratos: 68 blocos, 101 modelos, 2.273 campos e 111 arquivos JS válidos. Auditoria do pacote: 64 exports oficiais, 751 propriedades classificadas, 119 páginas e 148 XML válidos; nenhuma alteração em /conf ou /apps. Conteúdo, modelos, fontes e vendor comparados por hash. Correção revisada contra as regras de cascata e os seletores oficiais de Link/Button.

Não houve nova execução de testes de navegador mobile nesta entrega. As capturas fornecidas orientaram a correção, mas não são evidência do resultado pós-correção. Após o deploy, conferir em 320/390/430 px: abrir/fechar menu, tocar links e botões, fechar com Escape no teclado, mudar para desktop e voltar, e verificar ausência de rolagem horizontal. Conferir Home e /showcase/layouts. Safari/iPhone e persistência real no Universal Editor permanecem fora desta validação.
