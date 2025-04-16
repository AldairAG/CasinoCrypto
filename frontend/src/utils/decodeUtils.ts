import { jwtDecode } from 'jwt-decode';

export const getRolesFromToken = (token: string): string[] => {
    if (!token) return [];

    try {
        const { roles = [] } = jwtDecode<{ roles?: Array<{ nombre?: string; name?: string; id?: string }> }>(token);

        return roles.map(({ nombre, name, id }) => nombre || name || id || '').filter(Boolean);
    } catch (error) {
        console.error('Error decoding token:', error);
        return [];
    }
};
