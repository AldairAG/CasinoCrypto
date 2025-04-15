import { useDispatch, useSelector } from 'react-redux';
import { deportesSelector } from '../Store/slices/deportesSlice.js';
import { Event } from '../types/Event.js';
import { deportesService } from '../services/deportes/partidoService.ts';

const popularLeagueIds = [
    4328, // Premier League
    4335, // La Liga
    4332, // Serie A
    4331, // Bundesliga
    4334, // Ligue 1
    4480, // Brasileirao
    4346, // MLS
    4351, // Liga MX
    4337, // Eredivisie
    4344, // Primeira Liga
];

export const useDeportes = () => {
    const dispatch = useDispatch();
    const ligas = useSelector(deportesSelector.ligas);
    const deportes = useSelector(deportesSelector.deportes);
    const eventos = useSelector(deportesSelector.eventos);

    const setEventos = (data: Event[]) => {
        dispatch({ type: 'deportes/setEventos', payload: data });
    };

    const findEventosLigasFamosas = async (idLiga:string) => {
        try {
            const result = await deportesService.fetchLigasFamosas(idLiga)
            setEventos(result.events || []);
        } catch (error) {
            console.log('Error fetching eventos:', error);
        }
    }

    return {
        eventos,
        findEventosLigasFamosas
    }
}