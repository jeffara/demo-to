export type BadgeProps = {
    variant: 'dot';
    count?: never;
} | {
    variant: 'label';
    count: number;
};
