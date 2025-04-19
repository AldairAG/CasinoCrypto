import { useDispatch, useSelector } from "react-redux";
import { QuinielaFormValues, QuinielaType } from "../types/QuinielaType";
import { quinielaSelector } from '../Store/slices/quinielaSlice';
import { quinielaService } from '../services/casino/quinielaService';


export const useQuiniela = () => {
    const dispatch = useDispatch();
    const quiniela = useSelector(quinielaSelector.quiniela);
    const quinielasList = useSelector(quinielaSelector.quinielasList);

    const setQuiniela= (quiniela: QuinielaType) => {
        dispatch({ type: 'quiniela/setQuiniela', payload: quiniela });
    }

    const setQuinielasList = (quinielasList: QuinielaType[]) => {
        dispatch({ type: 'quiniela/setQuinielasList', payload: quinielasList });
    }

    const createQuiniela=async(quiniela: QuinielaFormValues) => {
        try {
            const requestBody = {
                nombreQuiniela:quiniela.quinielaName,
                fechaInicio:quiniela.startDate,
                fechaFin:quiniela.endDate,
                precioParticipacion:quiniela.costo,
                strDescripcion:quiniela.description,
                banner:'',
                intColumnas:quiniela.columns,
                allowDoubleBets:quiniela.allowDoubleBets,
                allowTripleBets:quiniela.allowTripleBets,
                tipoPremio:quiniela.reparticionPremio,
                tiposApuesta:quiniela.tiposApuesta,
                eventos: quiniela.partidosSeleccionados.map(evento => Number(evento)),
            }
            const result = await quinielaService.createQuinielaService(requestBody);
            console.log("Quiniela created successfully:", result);
        } catch (error) {
            console.log("Error creating Quiniela:", error);
            throw error;    
        }
    }

    return {
        quiniela,
        quinielasList,
        createQuiniela,
    }

}