import { IconName } from '../types';
/**
 * Lazy-loaded icon module type
 */
type LazyIconModule = {
    default: string;
};
/**
 * Icon registry result type
 */
type IconRegistryResult = (() => Promise<LazyIconModule>) | Promise<null>;
/**
 * Retrieves lazy-loaded icon from registry
 */
export declare const getLazyIconRegistry: (name: IconName) => IconRegistryResult;
export {};
