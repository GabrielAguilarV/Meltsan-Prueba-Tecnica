import toast, { type ToastPosition } from "react-hot-toast";

const configToast = {
    duration: 6000,
    position: 'top-center' as ToastPosition,
    style: {
        fontFamily: 'Segoe UI, Roboto, Arial, sans-serif',
        fontSize: '1rem',
    }
}

export const showSuccessToast = (message: string) => {
    toast.success(message, configToast);
};

export const showErrorToast = (message: string) => {
    toast.error(message, configToast);
};
