import { useDispatch, useSelector } from "react-redux";
import { quinielaService } from "../services/casino/quinielaService";
import { QuinielaRequestType, QuinielaType } from "../types/QinielaType";
import { quinielasSelector } from "../Store/slices/quinielasSlice";

export const useQuiniela = () => {
    const dispatch = useDispatch();
    const quiniela = useSelector(quinielasSelector.quiniela);
    const quinielaList = useSelector(quinielasSelector.quinielaList);

    const setQuiniela = (quiniela: QuinielaType) => {
        dispatch({ type: 'quiniela/setQuiniela', payload: quiniela });
    }
    const setQuinielaList = (quinielaList: QuinielaType[]) => {
        dispatch({ type: 'quiniela/setQuinielasList', payload: quinielaList });
    }

    const createQuiniela = async (quiniela: QuinielaRequestType) => {
        try {
            const result = await quinielaService.createQuinielaService(quiniela);
            return result;
        } catch (error) {
            console.error("Error en el servicio de creación de quiniela:", error);
            throw error;
        }
    }

    const getQuinielaList = async () => {
        try {
            const result = await quinielaService.getQuinielaService();
            console.log("result", result.data);
            setQuinielaList(result?.data||[]);
        } catch (error) {
            console.error("Error en el servicio de obtención de quinielas:", error);
            throw error;
        }
    }

    const getQuinielaById = async (id: number) => {
        try {
            const result = await quinielaService.getQuinielaByIdService(id);
            setQuiniela(result.data);
        } catch (error) {
            console.error("Error en el servicio de obtención de quiniela por ID:", error);
            throw error;
        }
    }

    return {
        quiniela,
        quinielaList,
        createQuiniela,
        getQuinielaList,
        getQuinielaById,
    }
}
