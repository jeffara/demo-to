# V3.1.2 — atualização de calendário e tipografia

Base: V3.1.1 com Toranja React 1.13.3. O ZIP externo é o projeto completo, não um pacote para o AEM Package Manager.

## Alterações

- InputDate e InputText com máscara de data: o calendário nativo passa a usar a posição do campo visível, inclusive dentro de iframe. O popup é do navegador/sistema operacional; seu desenho pode variar entre dispositivos.
- Formato US: máscara e validação passam a concordar com MM/DD/YYYY, com o placeholder e com a conversão do calendário oficial. Formato BR e limites mínimo/máximo preservados.
- Inter variável, pesos 100–900, e Roboto Mono variável, pesos 100–700, hospedadas no próprio EDS, com subconjuntos latino e latino estendido e licenças OFL incluídas.
- Citrina Regular 400 do CDN oficial adicionada. Citrina Medium 500 do pacote React preservada. Os aliases Citrina e Citrina VF continuam compatíveis com os tokens oficiais.
- Nenhuma alteração nas páginas, nos modelos do Universal Editor ou nos 9.822 arquivos do vendor.

## Atualizar uma V3.1.1 já instalada

1. Extraia o projeto completo em uma pasta separada. Confira e salve alterações locais do seu clone antes de sincronizar.
2. Na pasta extraída, visualize a comparação. O utilitário preserva `.git`, o `fstab.yaml` existente e as configurações de ambiente:

```bash
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to
```

3. Confira o plano e aplique:

```bash
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to --apply
cd /caminho/do/clone-demo-to
git status --short
git diff --stat
git diff --check
git add -A
git commit -m "fix: ancora calendario Toranja e carrega fontes oficiais"
git push
```

Use a branch conectada ao site EDS e o fluxo de PR existente, se aplicável. O runtime compilado está incluído; não é necessário instalar dependências para publicar estes arquivos. Para recompilar, use Node >=22.12, `npm ci` e `npm run build:runtime`.

**Não limpe o Git e não reimporte o conteúdo para esta atualização.** `content/demo-to-content.zip` permanece na versão 3.1.1 e tem o mesmo conteúdo da baseline anterior. Reimportá-lo pode substituir alterações editoriais realizadas no Author.

4. Após a sincronização do código, recarregue o preview e o Universal Editor. Confirme o calendário em `/showcase/input-date` e a tipografia na raiz. No Network, confira que `/styles/fonts.css` e os arquivos `/fonts/*.woff2` respondem 200. Em Computed/Rendered Fonts, confirme Inter e Citrina.
5. Valide no seu navegador: abrir calendário; selecionar data; alterar propriedades; salvar; fechar e reabrir a página no Universal Editor. Os testes locais não substituem a persistência real no AEM.

## Páginas ainda não publicadas

Consulte `publication-pending.csv` e `AUDITORIA-V3.1.2.html`. A checagem registrou 95/119 em Preview e 94/119 em Live; páginas ausentes responderam 404 em duas tentativas. Não é possível inferir o estado interno do job de publicação apenas por esse retorno.

No AEM Sites, selecione as páginas indicadas ou a árvore desejada em Gerenciar publicação, confira explicitamente a inclusão dos descendentes e das referências e publique. Acompanhe a conclusão da tarefa. O push de código não publica páginas que só existem no Author.

## Cobertura e limites

O catálogo representa os 64 exports oficiais e classifica 751 propriedades próprias do snapshot 1.13.3. Nem toda propriedade React vira um campo simples: callbacks usam ações/eventos, slots usam conteúdo/composição e referências DOM usam adaptadores técnicos. Atributos HTML herdados não entram nessa contagem como uma lista exaustiva.

As duas rodadas locais validam casos definidos de componentes, páginas, interações, layouts e autoria simulada. Elas não comprovam todas as combinações de propriedades, a persistência autenticada do Universal Editor, todos os navegadores ou serviços REST de produção ainda não configurados.

O Universal Editor não oferece o Responsive Grid/redimensionamento por alças do Page Editor tradicional. Neste projeto, proporção, colunas, largura, alinhamento e espaçamentos são configurados nas propriedades da seção e dos componentes.

Fonte Adobe: https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/page-editor-universal-editor

Acesso público conferido: `/` e `/demo-toranja` retornam 200 em Preview e Live. `/index`, `/index.html` e `/demo-toranja.html` retornam 404 nesses ambientes; use os caminhos canônicos sem extensão. No Author, `.html` continua válido.
