import { useDispatch, useSelector } from 'react-redux';
import { clearEvento, clearEventos, deportesSelector } from '../Store/slices/deportesSlice.js';
import { Event } from '../types/Event.js';
import { deportesService } from '../services/deportes/partidoService.ts';

/**
 * Hook personalizado `useDeportes` para manejar la lógica relacionada con deportes, ligas y eventos.
 *
 * @returns {Object} Un objeto con las siguientes propiedades y funciones:
 * - `eventos`: Lista de eventos obtenidos del estado global.
 * - `findEventosLigasFamosas`: Función asíncrona para buscar eventos de ligas famosas por su ID.
 *
 * @function findEventosLigasFamosas
 * @param {string} idLiga - El identificador de la liga para buscar sus eventos.
 * @throws {Error} Si ocurre un error al intentar obtener los eventos de la liga.
 *
 * @example
 * const { eventos, findEventosLigasFamosas } = useDeportes();
 * 
 * // Buscar eventos de una liga famosa
 * await findEventosLigasFamosas('12345');
 * console.log(eventos);
 */
export const useDeportes = () => {
    const dispatch = useDispatch();
    const ligas = useSelector(deportesSelector.ligas);
    const deportes = useSelector(deportesSelector.deportes);
    const eventos = useSelector(deportesSelector.eventos);
    const evento = useSelector(deportesSelector.evento);
    

    const setEventos = (data: Event[]) => {        
        dispatch({ type: 'deportes/setEventos', payload: data });
    };

    const setEvento = (data: Event) => {
        dispatch({ type: 'deportes/setEvento', payload: data });
    };

    const findEventosLigasFamosas = async (idLiga:string) => {
        try {
            const result = await deportesService.fetchLigasFamosas(idLiga)
            setEventos(result.events || []);
        } catch (error) {
            console.log('Error fetching eventos:', error);
        }
    }

    const getEventosByIds = async (ids: string[]) => {
        try {
            clearEventos();
            const result = await deportesService.getEventsByIdsService(ids);
            setEventos(result);
        } catch (error) {
            console.log('Error fetching eventos:', error);
        }
    }

    const getEventosById = async (id: string) => {
        try {
            clearEvento();
            const result = await deportesService.getEventByIdService(id);
            setEvento(result);
        } catch (error) {
            console.log('Error fetching eventos:', error);
        }
    }

    return {
        eventos,
        findEventosLigasFamosas,
        getEventosByIds,
        getEventosById,
    }
}