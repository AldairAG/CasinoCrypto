export const USER_ROUTES = {
    LANDING_PAGE: '/',
    USER_LAYOUT: '/c/',
    HOME: '/c/home',
    QUINIELAS_LIST: '/c/quniela-list',
    QUINIELA: '/c/quniela/:id',
    CARRITO: '/c/carrito',
    DEPOSITAR: '/c/depositar',
    RETIRAR: '/c/retirar',
    WALLET_LIST: '/c/wallet-list',
    CREAR_WALLET: '/c/crear-wallet',
    USER_PROFILE: '/c/user-profile',
} as const;

export const ADMIN_ROUTES = {
    ADMIN_LAYOUT: '/admin',
    ADMIN_HOME: '/admin/home',
    ADMIN_USERS: '/admin/users',
    ADMIN_USER: '/admin/user',
    ADMIN_QUINIELAS: '/admin/qunielas',
    ADMIN_QUINIELA: '/admin/quniela',
    ADMIN_CREATE_QUINIELA: '/admin/crear-quniela',
}