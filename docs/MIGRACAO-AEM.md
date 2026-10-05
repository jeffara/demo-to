> Histórico da versão 1.0. Para a versão 2.0, consulte ../README.md, DEPLOY-V2.md e REVISAO-V2.html.

# Instalação e homologação AEM

Destino desta versão: **`/content/demo-to`**. O pacote pronto está em **`content/demo-to-content.zip`**.

## 1. Código EDS

Crie uma branch no repositório que já está associado ao site XWalk. Aplique este projeto, execute `npm run build` e `npm test`, revise o diff e publique a branch pelo fluxo habitual de revisão. Os arquivos de conteúdo em `drafts/` ficam excluídos da entrega de código pelo `.hlxignore`.

AEM Code Sync sincroniza o código do repositório com o EDS. Cloud Manager administra a associação e os ambientes conforme a configuração do programa. Nenhum dos dois cria os recursos de conteúdo a partir de um `index.html` estático. Confira a configuração do site, a branch e o endpoint de conteúdo antes de abrir o editor.

O `fstab.yaml` recebido foi preservado. Sua URL não comprova qual é a raiz JCR do site. Em projetos que usam a Configuration Service, alterações só no `fstab.yaml` podem não alterar a configuração ativa. Verifique a configuração efetiva do site no ambiente.

## 2. Conteúdo inicial

O ZIP `content/demo-to-content.zip` pressupõe um site XWalk **já criado e configurado** em `/content/demo-to`. Não use esse ZIP na ação “Criar site a partir de template”. Use o template XWalk oficial para criar o site, quando necessário; depois importe o pacote pelo processo de pacotes de conteúdo aprovado no seu ambiente.

Os filtros do pacote são:

- `/content/demo-to/index`
- `/content/demo-to/demo-toranja`
- `/content/demo-to/nav`
- `/content/demo-to/footer`
- `/content/dam/toranja-eds-demo`

Esses caminhos são substituídos na importação. A pasta DAM é exclusiva deste conteúdo de demonstração. Não há filtro para `/conf`, usuários, políticas, workflows ou a raiz inteira `/content`.

O comando `npm run export:aem` regenera esse pacote usando `/content/demo-to` como destino padrão. As referências compartilhadas ficam em `/content/demo-to/nav` e `/content/demo-to/footer`.

Para outro site, regenere com `python3 tools/export-aem.py --site-root /content/RAIZ-REAL --output content/toranja-conteudo.zip`. Revise o `META-INF/vault/filter.xml` do ZIP gerado antes de instalar. O gerador grava tipos booleanos/números, relações de itens e referências de imagens DAM. Preserve a configuração e as permissões herdadas do site existente.

O gerador foi validado estruturalmente contra o formato de conteúdo do template XWalk. A importação no AEM, o processamento DAM e a saída do renderizador do ambiente ainda precisam ser homologados.

## 3. Abrir as páginas no Universal Editor

1. Confirme que `component-definition.json`, `component-models.json` e `component-filters.json` estão disponíveis na branch do código.
2. Abra **index** e **demo-toranja** pelo Sites → Editar. Para validar outra branch, use o mecanismo `?ref=<branch>` suportado pelo XWalk.
3. Confira conexão e autenticação AEM no Universal Editor. O renderizador AEM fornece os recursos `data-aue-*`; não copie URNs de uma fixture para produção.
4. Confira imagens, ausência de erros de rede e carregamento de `scripts/editor-support.js` na página instrumentada.
5. Edite cabeçalho em **nav** e rodapé em **footer**; essas páginas são compartilhadas e carregadas pelas propriedades de página `nav` e `footer`. Após alterar uma delas, recarregue as páginas que as consomem para validar a atualização.

## 4. Critérios de aceite no ambiente real

Execute nas duas páginas e registre o resultado:

| Operação | Evidência necessária |
|---|---|
| Selecionar cada bloco | Painel abre o modelo correto, com valores atuais |
| Editar texto, link e imagem | Alteração aparece; salvar e reabrir mantém o valor |
| Trocar variantes | Classes e aparência correspondem à escolha |
| Adicionar item nos 17 contêineres | Novo item usa o modelo filho correto |
| Mover, duplicar e excluir itens/blocos | Conteúdo e recursos permanecem coerentes |
| Editar rich text | Formatação é preservada após atualização e reabertura |
| Atualizar página | Sem necessidade de reconstruir o componente manualmente |
| Publicar e visualizar | Conteúdo salvo coincide com `.aem.page`/`.aem.live` do site |
| Mobile e teclado | Sem overflow da página; menu, abas, accordion e modal utilizáveis |

A edição local com eventos simulados não verifica permissões, persistência JCR, configuração do programa, autenticação ou publicação. Para fechar esses pontos são necessárias as URLs reais do editor e do preview, o repositório/branch e acesso ao ambiente.

## 5. Serviços e conteúdo demonstrativo

- **Busca:** `indexEndpoint` deve apontar para um índice EDS publicado. O arquivo `helix-query.yaml` fornece a configuração base; confirme os caminhos e publique conteúdo antes de esperar resultados.
- **Formulário:** configure `endpoint` com um serviço real que aceite JSON, faça validação no servidor e tenha CORS compatível. Sem endpoint, o bloco informa que é uma demonstração; ele não simula envio bem-sucedido. Envio é desabilitado durante a autoria instrumentada.
- **Vídeo:** escolha URL YouTube ou arquivo MP4/WebM e imagem de capa DAM.
- **App/QR:** selecione QR real em `qrCodeImage`. Não há QR fictício gerado por CSS.
- **Links de produto, condições, dados financeiros e depoimentos:** o conteúdo recebido é demonstrativo. Revise os destinos e o texto antes de publicar um portal real. A calculadora é ilustrativa e suas premissas constam na interface.

Referências Adobe usadas: [modelagem XWalk](https://www.aem.live/developer/component-model-definitions), [blocos instrumentados](https://www.aem.live/developer/universal-editor-blocks), [tutorial Universal Editor](https://www.aem.live/developer/ue-tutorial), [boilerplate XWalk](https://github.com/adobe-rnd/aem-boilerplate-xwalk).
