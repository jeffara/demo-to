import { CalendarHeaderOption } from '../types';
export declare const findFirstEnabledIndex: (options: CalendarHeaderOption[]) => number;
export declare const findLastEnabledIndex: (options: CalendarHeaderOption[]) => number;
export declare const findInitialActiveIndex: (options: CalendarHeaderOption[]) => number;
export declare const findNextEnabledIndex: (options: CalendarHeaderOption[], from: number, direction: 1 | -1) => number;
export declare const getVerticalNavigationDirection: (key: string) => 1 | -1 | undefined;
