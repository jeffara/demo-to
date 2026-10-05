interface UseSnackbarTimeoutProps {
    show: boolean;
    displayDuration: number;
    animationDuration: number;
    onClose: () => void;
}
declare const useSnackbarTimeout: ({ show, displayDuration, animationDuration, onClose, }: UseSnackbarTimeoutProps) => {
    isRendered: boolean;
    classAnimation: string;
    hideSnackbar: () => void;
};
export default useSnackbarTimeout;
