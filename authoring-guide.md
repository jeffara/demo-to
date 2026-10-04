# Autoria Toranja

Use o Universal Editor sobre páginas criadas no AEM. O preview local é uma fixture de desenvolvimento.

Selecione a seção e use **Adicionar** para escolher um bloco do grupo Toranja. Conteúdos recorrentes possuem um contêiner e um modelo filho: selecione o contêiner para adicionar itens, e o item para editar seus campos. Reordene pelo editor; não edite JSON para manter uma página após a migração.

- **Hero/teaser/jornada:** texto, nível do título, descrições, CTA, imagem DAM e formato visual.
- **Cards/carrossel:** um item por cartão; conteúdo rich text e imagem em cada item.
- **Abas/accordion:** um item por aba/pergunta. `defaultTab` começa em 1.
- **Segmentos:** `segmentId` define a variante digital/one/prime/win; `defaultSegment` escolhe a aba inicial. Nome, critérios, categoria do cartão, benefícios e CTA são editáveis por item.
- **Tabela comparativa:** o primeiro item contém os cabeçalhos. Os próximos itens são linhas. `feature` é a coluna de identificação; `value1` a `value3` são as colunas de valores. Colunas de valores completamente vazias ficam ocultas. `highlightColumn` usa índice 0 para a identificação, 1 para o primeiro valor.
- **Formulário:** adicione campos filhos. `fieldName` é a chave enviada ao serviço; `kind` define text/email/tel/cpf/select/textarea. Para select, use lista no campo de opções. O consentimento fica no contêiner.
- **Tooltip:** um bloco por termo. Os múltiplos termos das demos foram convertidos em blocos independentes.
- **Header/footer:** edite as páginas compartilhadas nav e footer. Submenus e listas de links são rich text com links. A edição dessas páginas afeta quem as referencia.
- **Seção:** use “Âncora” para navegação interna e “Estilo” para fundos. Mantenha IDs únicos na página.
- **Página:** propriedades `toranjaTheme` (PF/PJ claro/escuro), `toranjaSurface` (desktop/webview), nav e footer controlam apresentação e conteúdo compartilhado.

Campos `classes_*` representam escolhas visuais/comportamentais. Sufixos como `Text`, `Alt` e `Type` complementam links, imagens e títulos; não são blocos separados.

Para a lista completa de campos, consulte `docs/MATRIZ-COMPONENTES.md`. Para importar e homologar, consulte `docs/MIGRACAO-AEM.md`.
