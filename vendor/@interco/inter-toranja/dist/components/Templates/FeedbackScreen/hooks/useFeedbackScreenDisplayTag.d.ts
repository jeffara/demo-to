import { FeedbackScreenProps } from '../types';
interface UseFeedbackScreenDisplayTagParams {
    onTag: FeedbackScreenProps['onTag'];
    state: NonNullable<FeedbackScreenProps['state']>;
    variant: FeedbackScreenProps['variant'];
    title: string;
    value: string;
}
export declare const useFeedbackScreenDisplayTag: ({ onTag, state, variant, title, value, }: UseFeedbackScreenDisplayTagParams) => void;
export {};
