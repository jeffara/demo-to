interface BulletModifierParams {
    index: number;
    selected: number;
    maxVisibleBullets: number;
    isPossibleInfinite: boolean;
    balanceRestLeft: number;
    balanceRestRight: number;
    oldActiveIndex: number;
}
export declare const resolveBulletModifier: (params: BulletModifierParams) => string;
export {};
