import { TableCellAlign } from './types';
import { TableColumnCellType } from '../../types';
interface ColumnAlignInput {
    align?: TableCellAlign;
    cellType: TableColumnCellType;
}
export declare const resolveColumnAlign: (column: ColumnAlignInput, defaultAlign?: TableCellAlign) => TableCellAlign | undefined;
export {};
