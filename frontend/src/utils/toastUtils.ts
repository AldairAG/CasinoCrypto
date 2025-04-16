import { toast } from 'react-toastify';

export const handlePromiseWithToast = async <T>(
    promise: Promise<T>,
    successMessage = '¡Operación exitosa!',
    errorMessage = 'Ocurrió un error. Inténtalo de nuevo.'
) => {
    // Mostrar un toast de carga
    const loadingToastId = toast.loading('Procesando...', {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
    });

    try {
        // Esperar a que la promesa se resuelva
        const result = await promise;

        // Actualizar el toast de carga a éxito
        toast.update(loadingToastId, {
            render: successMessage,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
        });

        return result; // Devolver el resultado de la promesa
    } catch (error) {
        // Extraer el mensaje de error del backend o usar uno predeterminado
        type ErrorResponse = { response?: { data?: { message?: string } } };
        const finalErrorMessage = (error as ErrorResponse)?.response?.data?.message || errorMessage;

        // Mostrar un toast de error
        toast.update(loadingToastId, {
            render: finalErrorMessage,
            type: 'error',
            isLoading: false,
            autoClose: 5000,
        });

        throw error; // Relanzar el error para manejarlo fuera si es necesario
    }
};