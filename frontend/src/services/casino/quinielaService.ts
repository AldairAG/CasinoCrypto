import { QuinielaRequestBody, QuinielaType } from '../../types/QuinielaType';
import apiClient from './apiClient';

const createQuinielaService = async (quiniela: QuinielaRequestBody) => {
    const result = await apiClient.post('/quinielas', quiniela);
    return result;
}

export const quinielaService = {
    createQuinielaService,
};