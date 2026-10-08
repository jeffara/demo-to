# V3.1.5 — cabeçalho e logo

- Cabeçalho mobile com altura mínima de 88 px, padding vertical de 20 px e botão de 48 px: espaço entre o botão e a borda inferior.
- Logo da navegação compartilhada com link para / e nome acessível “Inter — página inicial”. Usa o resolvedor de links do projeto. A imagem e os componentes oficiais são preservados.
- Inclui o ajuste de menu em largura integral da V3.1.4.

## Deploy

Extraia o pacote fora do clone. Na pasta extraída:

```bash
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to --apply
cd /caminho/do/clone-demo-to
git diff --stat
git diff --check
git add -A
git commit -m "fix: cabecalho e logo Toranja V3.1.5"
git push
```

Revise o plano antes de aplicar: a baseline substitui arquivos gerenciados, inclusive personalizações locais. Use a branch conectada ao EDS e PR se exigido. O runtime compilado está incluído e não mudou nesta versão.

## Conteúdo

Não precisa reimportar, desinstalar ou excluir o pacote de conteúdo nem republicar páginas. Páginas, modelos, fontes e vendor permanecem idênticos à V3.1.4 por SHA-256. O conteúdo mantém a versão 3.1.1. Publicação só é necessária para mudanças editoriais independentes ou páginas ainda não publicadas.

## Validação e conferência pós-deploy

Contratos estruturais aprovados: 68 blocos, 101 modelos, 2.273 campos, 111 arquivos JS válidos. Os dois arquivos de implementação constam com SHA-256 em /version.json: conferir os bytes descomprimidos do CSS e JS publicados, além da versão 3.1.5.

No celular, conferir espaço abaixo do botão com menu aberto/fechado, retorno pela logo a partir de /showcase/alert, foco de teclado e desktop. A revisão desta entrega foi de código e contratos; não houve nova validação visual em navegador ou em iPhone físico. Os prints fornecidos são evidência da V3.1.4, anterior à correção.
