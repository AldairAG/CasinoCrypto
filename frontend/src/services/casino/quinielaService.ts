import { QuinielaRequestType } from "../../types/QinielaType";
import apiClient from "./apiClient";

const createQuinielaService = async (quiniela:QuinielaRequestType) => {
    try {
        const result = await apiClient.post('/quinielas', quiniela);
        return result;
    } catch (error) {
        console.error("Error en el servicio de creación de quiniela:", error);
        throw error;
    }
}

const getQuinielaService = async () => {
    try {
        const result = await apiClient.get('/quinielas');
        return result;
    } catch (error) {
        console.error("Error en el servicio de creación de quiniela:", error);
        throw error;
    }
}

const getQuinielaByIdService = async (id:number) => {
    try {
        const result = await apiClient.get(`/quinielas/${id}`);
        console.log("result", result.data);
        
        return result;
    } catch (error) {
        console.error("ERROR AL OBTENER INFORMACION", error);
        throw error;
    }
}

export const quinielaService = {
    createQuinielaService,
    getQuinielaService, 
    getQuinielaByIdService,
}