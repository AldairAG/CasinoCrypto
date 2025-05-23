// sportsService.js
import apiClient from './apiClient';

const getNext7DaysMatches = async () => {
    try {
        const response = await apiClient.get('/all_leagues.php');
        return response.data; // La respuesta contiene un array "events"
    } catch (error) {
        console.error('Error fetching next 7 days matches:', error);
        throw error;
    }
};

const fetchLigasFamosas = async (idLiga: string) => {
    try {
        const response = await apiClient.get(`/eventsnextleague.php?id=${idLiga}`)

        // Opcional: filtrar a los próximos 7 días desde hoy
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);

        const matchesInNext7Days = response?.data || [].filter((event: { dateEvent: string | number | Date; }) => {
            const eventDate = new Date(event.dateEvent);
            return eventDate >= today && eventDate <= nextWeek;
        });

        return matchesInNext7Days;
    } catch (error) {
        console.error('Error fetching next 7 days matches:', error);
        throw error;
    }
};

const getEventsByIdsService = async (ids: string[]) => {
    try {
        const requests = ids.map(id =>
            apiClient.get(`/lookupevent.php?id=${id}`)
        );

        const responses = await Promise.all(requests);

        // Extraemos los datos de cada respuesta
        const events = responses.map(res => res.data.events?.[0] || null);
        return events;
    } catch (error) {
        console.error('Error al obtener los eventos:', error);
        return [];
    }
};

const getEventByIdService = async (id: string) => {
    try {
        const response = await apiClient.get(`/lookupevent.php?id=${id}`)
        return response?.data||null;
    } catch (error) {
        console.error('Error al obtener los eventos:', error);
        return null;
    }
};

export const deportesService = {
    getNext7DaysMatches,
    fetchLigasFamosas,
    getEventsByIdsService,
    getEventByIdService,
}