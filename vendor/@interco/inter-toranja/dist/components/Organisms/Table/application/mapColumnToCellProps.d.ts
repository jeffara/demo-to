import { TableVisualState } from '../components/shared/types';
import { TableCellProps } from '../components/TableCell/types';
import { ColumnDef } from '../types';
export declare const mapColumnToCellProps: <T extends Record<string, unknown>>(column: ColumnDef<T>, row: T, visualState?: TableVisualState) => TableCellProps;
