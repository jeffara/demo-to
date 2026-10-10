# Integrações do React Adapter

O ponto de configuração é `scripts/integration-setup.js`, chamado na inicialização da página. Nenhum endpoint produtivo foi ativado. Os exemplos de formulário, busca, vídeo e simulador customizados foram retirados desta entrega; veja `react-scope-migration.json`.

## Fontes de dados

Registre adaptadores com `registerIntegration` de `scripts/integrations.js`.

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

## Ações

`registerAction(id, handler)` em `scripts/actions.js` registra extensões técnicas para callbacks dos componentes. Nenhum coletor analytics foi ativado. Integrações de negócio do institucional pertencem ao projeto Custom.
