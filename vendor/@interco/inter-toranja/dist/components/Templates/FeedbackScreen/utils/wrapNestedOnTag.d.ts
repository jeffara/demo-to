import { ButtonConfig, FeedbackScreenProps } from '../types';
export interface NestedTagContext {
    title: string;
    value: string;
}
export declare const wrapNestedOnTag: (screenOnTag: FeedbackScreenProps["onTag"], buttonOnTag: ButtonConfig["onTag"], context: NestedTagContext) => ButtonConfig["onTag"];
