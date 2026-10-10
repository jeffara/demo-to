import { BreadcrumbProps, BreadcrumbTrailItem } from '../types';
interface UseBreadcrumbReturn {
    shouldRender: boolean;
    ariaLabel: string;
    rootClasses: string;
    listClasses: string;
    itemClasses: string;
    ancestorLinkClasses: string;
    currentClasses: string;
    separatorClasses: string;
    trailItems: BreadcrumbTrailItem[];
}
export declare const useBreadcrumb: (props: Readonly<BreadcrumbProps>) => UseBreadcrumbReturn;
export {};
