/** Ponto único de configuração pelo time técnico. Não colocar segredos no frontend. */
import {registerIntegration,jsonEndpoint} from './integrations.js';
export function initializeIntegrations(){
 const leadEndpoint=''; // Preencher após receber URL e contrato do broker Inter.
 if(leadEndpoint)registerIntegration('inter-lead',jsonEndpoint(leadEndpoint,{
  mapRequest:fields=>fields, // Substituir pelo contrato aprovado.
  mapResponse:response=>response,
 }));
 // Fontes de gráficos/listas: registerIntegration('id', async (params,{signal})=>dados).
 // As propriedades da resposta permitidas estão documentadas em docs/INTEGRACOES-V3.md.
}

// Synchronous DS callback example, when required by a real integration:
// import {registerDSBehavior} from './ds-behaviors.js';
// registerDSBehavior('table-row-id', row => String(row.id));
// Select table-row-id in Table → getRowId — comportamento cadastrado.
