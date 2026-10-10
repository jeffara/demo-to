/** Synchronous callbacks supplied by trusted project code; editor fields select names, never code. */
const registry=new Map();
export function registerDSBehavior(name,callback){if(typeof callback!=='function')throw Error('Callback inválido');registry.set(name,callback)}
export function getDSBehavior(name){if(!registry.has(name))throw Error('Comportamento não cadastrado: '+name);return registry.get(name)}
