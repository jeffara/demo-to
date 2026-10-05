import { FC } from 'react';
import { ListItemContentProps } from './types';
/**
 * ListItemContent - Renders the Content area
 * Reuses logic from legacy ListItem.tsx
 *
 * Supports: Label (required), Paragraph, ParagraphSupport, Tags
 *
 * Contributes tagging data:
 * - label: main text
 * - paragraph: secondary text
 * - paragraph_support: supporting text
 * - tag_label: first tag label if tags exist
 */
export declare const ListItemContent: FC<ListItemContentProps>;
