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

const fetchLigasFamosas = async (idLiga:string) => {
    try {
        const response = await apiClient.get(`/eventsnextleague.php?id=${idLiga}`)
        
        // Opcional: filtrar a los próximos 7 días desde hoy
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);

        const matchesInNext7Days = response?.data||[].filter((event: { dateEvent: string | number | Date; }) => {
            const eventDate = new Date(event.dateEvent);
            return eventDate >= today && eventDate <= nextWeek;
        });

        return matchesInNext7Days;
    } catch (error) {
        console.error('Error fetching next 7 days matches:', error);
        throw error;
    }
};

export const deportesService = {
    getNext7DaysMatches,
    fetchLigasFamosas,
}