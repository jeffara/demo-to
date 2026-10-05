/** Adaptadores de dados cadastrados pelo time técnico, independentes dos componentes. */
const registry=globalThis.__toranjaIntegrations??=new Map();
export function registerIntegration(id,adapter){if(!/^[a-z][\w-]*$/i.test(id)||typeof adapter!=='function')throw Error('Integração inválida');registry.set(id,adapter);return()=>registry.delete(id);}
export function hasIntegration(id){return registry.has(id);}
export async function runIntegration(id,payload,{signal,timeout=15000}={}){
 const adapter=registry.get(id);if(!adapter)throw Error('Integração ainda não configurada.');
 const controller=new AbortController(),abort=()=>controller.abort();signal?.addEventListener('abort',abort,{once:true});if(signal?.aborted)abort();
 const timer=setTimeout(abort,timeout);
 try{return await Promise.race([adapter(payload,{signal:controller.signal}),new Promise((_,reject)=>{const fail=()=>reject(new DOMException('Solicitação cancelada ou tempo excedido.','AbortError'));controller.signal.addEventListener('abort',fail,{once:true});if(controller.signal.aborted)fail();})]);}
 finally{clearTimeout(timer);signal?.removeEventListener('abort',abort);}
}
/** POST sem retries automáticos: previne duplicar criação de leads. */
export function jsonEndpoint(endpoint,{mapRequest=x=>x,mapResponse=x=>x}={}){
 const url=new URL(endpoint,globalThis.location?.href||'https://localhost');
 if(!['https:','http:'].includes(url.protocol))throw Error('Endpoint inválido');
 return async(payload,{signal})=>{const res=await fetch(url,{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify(mapRequest(payload)),signal});if(!res.ok)throw Error('Não foi possível enviar a solicitação.');const result=res.status===204?null:await res.json();return mapResponse(result);};
}
