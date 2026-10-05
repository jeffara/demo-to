import { FloatingActionButtonBehavior } from '../types';
interface UseScrollBehaviorParams {
    behavior: FloatingActionButtonBehavior;
    label?: string;
    fabRef: React.RefObject<HTMLDivElement | null>;
    isLoading: boolean;
}
interface UseScrollBehaviorReturn {
    isExpanded: boolean;
    isVisible: boolean;
    handleScrollToTopClick: () => void;
    handleHideLabelOnScrollClick: () => void;
}
/**
 * Custom hook to manage FloatingActionButton scroll behaviors
 *
 * @param behavior - FAB behavior type
 * @param label - Button label (optional)
 * @returns State and setters for expansion and visibility control
 */
export declare const useScrollBehavior: ({ behavior, label, fabRef, isLoading, }: UseScrollBehaviorParams) => UseScrollBehaviorReturn;
export {};
