import { Prediccion, PrediccionPost } from "./Prediccion";

export interface QuinielaRequestType {
    idQuiniela: number;
    nombreQuiniela: string;
    fechaInicio: string;
    fechaFin: string;
    precioParticipacion: number;
    strDescripcion: string;
    intColumnas: number;
    allowDoubleBets: boolean;
    allowTripleBets: boolean;
    tipoPremio: string;
    tiposApuesta: string[];
    eventos: string[];
}

export interface QuinielaType {
    idQuiniela: number;
    nombreQuiniela: string;
    premioAcumulado: number;
    numeroParticipantes: number;
    fechaInicio: string;
    fechaFin: string;
    precioParticipacion: number;
    estado: string;
    strDescripcion: string;
    urlBanner: string;
    intColumnas: number;
    allowDoubleBets: boolean;
    allowTripleBets: boolean;
    tipoPremio: string;
    tiposApuestas: string[];
    eventos: string[];
}

export type QuinielaPostType= {
    nombreQuiniela: string;
    fechaFin: string;
    precioParticipacion: number;
    idQuiniela: number;
    idUsuario: number;
    predicciones: PrediccionPost[];
    tipoApuesta: string;
}