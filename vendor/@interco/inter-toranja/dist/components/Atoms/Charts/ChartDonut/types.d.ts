import { SIZE, STATE } from '../../../../utils/pattern';
export type { ChartColor, ChartPalette, ValueBuilder } from '../shared/types';
export type { LegendOrientation } from '../Legend/types';
export type ChartDonutSize = `${SIZE.SMALL}` | `${SIZE.LARGE}`;
export type ChartDonutState = Extract<`${STATE}`, 'enabled' | 'skeleton'>;
