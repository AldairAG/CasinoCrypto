export type PrediccionPost = {
    idEvento: number;

    strTipoPrediccion: string;

    //Marcador exacto
    intResultadoLocal: number|null;
    intResultadoVisitante: number|null;

    //Rango de goles
    strRangoLocal: string;
    strRangoVisitante: string;

    //Marcador general
    idGanador: number|null;

    //Primero en marcar
    idPrimeroEnMarcar: number|null;

    //Diferencia de goles
    strDiferenciaDeGoles: string|null;

    //Marcador exacto con goles totales
    intTotalGoles: number|null;

};

export type Prediccion = {
    idPrediccion: number;
    idEvento: number;
    idQuiniela: number;
    idUsuario: number;

    strTipoPrediccion: string;

    //Marcador exacto
    intResultadoLocal: number|null;
    intResultadoVisitante: number|null;

    //Rango de goles
    strRangoLocal: string;
    strRangoVisitante: string;

    //Marcador general
    idGanador: number|null;

    //Primero en marcar
    idPrimeroEnMarcar: number|null;

    //Diferencia de goles
    strDiferenciaDeGoles: string|null;

    //Marcador exacto con goles totales
    intTotalGoles: string|null;

};