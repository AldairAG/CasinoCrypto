import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {userSelector  } from '../Store/slices/authSlice';
import { UserType } from '../types/UserType';

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
export const useUser=()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(userSelector.user);
    const token = useSelector(userSelector.token);

    const setUser=(user:UserType)=>{
        dispatch({ type: 'auth/setUser', payload: user });
    }

    const navigateTo=(to:string)=>{
        history.push(to);
    }

    const login=()=>{}

    const register=()=>{}



    return{
        user,
        token,
        login,
        register,
        navigateTo,
    }
        
    
}