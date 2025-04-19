export type QuinielaType = {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    userId: number;
    quinielaTypeId: number;
    quinielaTypeName: string;
    quinielaTypeDescription: string;
    quinielaTypeCreatedAt: Date;
    quinielaTypeUpdatedAt: Date;
    quinielaTypeDeletedAt?: Date | null;
}

export type QuinielaFormValues ={
    quinielaName: string,
    costo: number,
    startDate: string,
    endDate: string,
    description: string,
    banner: null,
    urlBanner: string,
    columns: number,
    allowDoubleBets: boolean,
    allowTripleBets: boolean,
    tiposApuesta: string[],
    reparticionPremio: string,
    partidosSeleccionados: string[],
};

export type QuinielaRequestBody = {
    nombreQuiniela: string,
    fechaInicio: string,
    fechaFin: string,
    precioParticipacion: number,
    strDescripcion: string,
    banner: string,
    intColumnas: number,
    allowDoubleBets: boolean,
    allowTripleBets: boolean,
    tipoPremio: string,
    tiposApuesta: string[],
    eventos: number[],
}