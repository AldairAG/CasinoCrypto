// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // Usar sessionStorage como almacenamiento compatible
import { combineReducers } from 'redux';

import deportesReducer from './slices/deportesSlice'; // Importa el slice de deportes
import authReducer from './slices/authSlice'; // Importa el slice de auth con datos de ususario

// Configuración de Redux-Persist
const persistConfig = {
  key: 'root', // Clave bajo la cual se guardará el estado
  storage, // Usar sessionStorage como almacenamiento compatible
  whitelist: ['deportes', 'auth'], // Solo persistir los slices 'deportes' y 'auth' (opcional)
};

// Combina todos los reducers
const rootReducer = combineReducers({
  deportes: deportesReducer,
  auth: authReducer,
});

// Aplica persistencia al reducer combinado
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura el store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desactiva la verificación de serialización (necesario para Redux-Persist)
    }),
});

// Exporta el persistor
export const persistor = persistStore(store);