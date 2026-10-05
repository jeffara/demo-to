# Integrações, formulário e busca

## Estado desta entrega

O formulário é configurável por itens no Universal Editor: texto, e-mail, telefone, CPF, senha, área de texto, seleção, checkbox, switch, radio, stepper, valor monetário, número e data. Campos têm nome, rótulo, dica, valor inicial, obrigatoriedade, limites, regex, estado e condição de exibição. Na autoria, os campos condicionais permanecem acessíveis; no site, apenas os campos visíveis e habilitados entram no payload.

Envio, carregamento de dados e ações customizadas estão preparados, mas **nenhum endpoint produtivo foi ativado**. O exemplo usa `inter-lead`; sem registro técnico, informa que o envio ainda não está configurado e não apresenta sucesso fictício. Há estados de carregamento, sucesso, falha, timeout e cancelamento.

## Registrar integração

Ponto de configuração: `scripts/integration-setup.js`, chamado na inicialização da página. O registro é compartilhado entre blocos e runtime compilado.

```js
import {registerIntegration, jsonEndpoint} from './integrations.js';
registerIntegration('inter-lead', jsonEndpoint('/api/leads', {
  mapRequest: fields => ({contact: fields}),
  mapResponse: response => {
    if (!response.accepted) throw new Error('Solicitação não aceita');
    return response;
  },
}));
```

`/api/leads` é ilustrativo: precisa existir no backend/broker. Não disponibilize credenciais privadas no repositório ou propriedades editoriais. `jsonEndpoint` envia JSON por POST, sem credenciais de sessão, valida status HTTP, trata 204 e não repete POST automaticamente. O contrato de sucesso de negócio deve ser verificado por `mapResponse`.

Fontes de dados usam um ID cadastrado, não código JavaScript no editor:

```js
registerIntegration('chart-revenue', async ({parameter}, {signal}) => {
  const response = await fetch('/api/chart?period=' + encodeURIComponent(parameter), {signal});
  if (!response.ok) throw new Error('Dados indisponíveis');
  const data = await response.json();
  return {categories: data.labels, values: data.values};
});
```

| Componente | Propriedades aceitas da resposta |
|---|---|
| ChartBar | categories, values, valueLabels |
| ChartDonut | slice, label, value |
| ChartMeter | bars, legend, value |
| ChartLine | series, categories, yLabels |
| Select | $options (label, value, disabled) |
| InputCountry | countryItems, featuredCountryItems |
| BottomSheetCountry | items, featuredItems |

A resposta deve respeitar os tipos do contrato em `docs/toranja-contract.json`. Os campos não listados são ignorados. Séries desalinhadas são rejeitadas. As fontes são carregadas na montagem do componente; atualização periódica exige uma integração específica posterior.

## Busca

`v3-search` consulta o índice do **conteúdo AEM entregue pelo EDS**, não o repositório privado do Author. O índice padrão é `/query-index.json`; `helix-query.yaml` indexa título, descrição e corpo. A busca ignora acentos, exige todos os termos, prioriza título, aplica raiz e exclusões e percorre páginas do índice. Cache local de cinco minutos. Conteúdo não publicado/indexado não aparece. A ativação/atualização real desse índice precisa ser verificada na instância.

## Vídeo

O autor informa URL e formato automático/arquivo/YouTube, poster, título, legenda e proporção (16:9, 4:3, 1:1 ou 9:16). Arquivos MP4/WebM usam vídeo nativo com `playsinline`; YouTube exige URL/ID válido. Há arquivo VTT opcional com idioma/rótulo. O player se adapta à largura disponível. As permissões de incorporação, CSP e disponibilidade de um provedor externo dependem do ambiente. O showcase contém um MP4 técnico local, não um vídeo institucional aprovado.

## Ações e eventos

Cada callback de ação exposto pode navegar, abrir/fechar painel, enviar/limpar formulário, voltar ou invocar uma ação registrada. Navegação aceita página AEM, URL externa e âncora, com destino mesma/nova aba. Painéis e formulários usam identificadores únicos na página. Ações de navegação/envio ficam desativadas durante a edição.

`registerAction(id, handler)` em `scripts/actions.js` registra extensões técnicas. `toranja:interaction` e `toranja:field-change` são eventos funcionais e podem conter valores do controle; não os encaminhe indiscriminadamente para analytics. `toranja:tagging` possui contrato separado e elimina rótulos/textos pessoais. Nenhum coletor analytics foi ativado.

O `v3-simulator` é uma demonstração local baseada nos parâmetros editoriais. Não consulta cotação, taxa ou motor financeiro de produção.
