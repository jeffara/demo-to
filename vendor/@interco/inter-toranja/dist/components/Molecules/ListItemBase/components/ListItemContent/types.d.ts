import { ReactNode } from 'react';
import { Color, Hierarchy, SegmentColor } from '../../../../Atoms/Tag/types';
/**
 * Tag props for Content area
 */
export interface ListItemContentTagProps {
    label: string;
    color: Color;
    hierarchy?: Hierarchy<Color | SegmentColor>;
}
/**
 * ListItemContent props
 */
export interface ListItemContentProps {
    /**
     * Main label (required) - DecoratedText that can contain an icon
     */
    label: string;
    /**
     * Optional icon to display with label
     */
    labelIcon?: ReactNode;
    /**
     * Secondary paragraph (optional) - DecoratedText
     */
    paragraph?: string;
    /**
     * Support paragraph (optional) - DecoratedText
     */
    paragraphSupport?: string;
    /**
     * Tags (maximum 3)
     */
    tags?: [ListItemContentTagProps, ListItemContentTagProps?, ListItemContentTagProps?];
    /**
     * Test ID
     */
    testId?: string;
}
