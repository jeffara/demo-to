import { SURFACE } from '../pattern';
export type ToranjaSurface = `${SURFACE.WEBVIEW}` | `${SURFACE.DESKTOP}`;
interface UseToranjaSurfaceOptions {
    defaultSurface?: ToranjaSurface;
}
interface UseToranjaSurfaceResult {
    surface: ToranjaSurface;
    setSurface: (surface: ToranjaSurface) => void;
    surfaces: ReadonlyArray<ToranjaSurface>;
}
export declare const isToranjaSurface: (value: unknown) => value is ToranjaSurface;
export declare const getToranjaSurface: () => ToranjaSurface;
export declare const setToranjaSurface: (surface: ToranjaSurface) => void;
export declare const useToranjaSurface: (options?: UseToranjaSurfaceOptions) => UseToranjaSurfaceResult;
export {};
