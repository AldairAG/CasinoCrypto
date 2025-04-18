import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userSelector } from '../Store/slices/authSlice';
import { UserType } from '../types/UserType';
import { authService } from '../services/casino/authService';

/**
 * Hook personalizado `useUser` para gestionar el estado del usuario y la navegación en la aplicación.
 *
 * @returns {object} Un objeto con las siguientes propiedades y funciones:
 * 
 * - `user` {UserType}: El usuario actual obtenido del estado global.
 * - `token` {string}: El token de autenticación del usuario obtenido del estado global.
 * - `navigateTo` {(to: string) => void}: Función para navegar a una ruta específica.
 * 
 * @example
 * ```typescript
 * const { user, token, navigateTo } = useUser();
 * 
 * console.log(user); // Información del usuario actual
 * console.log(token); // Token de autenticación
 * 
 * navigateTo('/dashboard'); // Navega a la ruta '/dashboard'
 * ```
 */
export const useUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(userSelector.user);
    const token = useSelector(userSelector.token);

    const setUser = (user: UserType) => {
        dispatch({ type: 'auth/setUser', payload: user });
    }

    const navigateTo = (to: string) => {
        history.push(to);
    }

    const login = async (email: string, password: string) => {
        // Aquí iría tu lógica de inicio de sesión
        const result = await authService.loginService({ username: email, password: password })
        // Por ejemplo, podrías llamar a una API y luego usar `setUser` para actualizar el estado global
        setUser(result?.data?.user);
        // setUser(loggedInUser);
    }

    const register = () => {
        // Aquí iría tu lógica de registro
        // Por ejemplo, podrías llamar a una API y luego usar `setUser` para actualizar el estado global
        // usar login() para iniciar sesión después de registrarse
    }



    return {
        user,
        token,
        login,
        register,
        navigateTo,
    }


}