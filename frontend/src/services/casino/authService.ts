import apiClient from './apiClient';
import {handlePromiseWithToast} from '../../utils/toastUtils';

export const loginService = async (request: { username: string; password: string }) => {
    try {
        // Llama al cliente API (apiClient) para hacer una solicitud POST al endpoint '/auth/login'.
        // Se envía el objeto 'request' como el cuerpo de la solicitud.
        const result = await apiClient.post('/auth/login', request);

        // Si la solicitud es exitosa, devuelve el resultado de la respuesta.
        return result;
    } catch (error) {
        // Si ocurre un error durante la solicitud, se captura aquí.
        // Se imprime un mensaje de error en la consola para facilitar la depuración.
        console.error("Error en el servicio de inicio de sesión:", error);

        // Lanza el error para que pueda ser manejado por quien llame a esta función.
        throw error;
    }
}

// export const registerService = async () => {
    
// }

// En tu archivo authService.ts
export const registerService = async (request: {
    //Variables que se envian al backend para el registro
    username: string;
    password: string;
    email: string;
    telefono: string;
    nombre: string;
    apellidos: string;
    fechaNacimiento: string;
}) => {
    try {
        const result = await apiClient.post('/auth/register', request);
        return result;
    } catch (error) {
        console.error("Error en el servicio de registro:", error);
        throw error;
    }
}

export const authService={
    loginService,
    registerService,
}