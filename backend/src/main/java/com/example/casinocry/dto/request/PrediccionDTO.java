package com.example.casinocry.dto.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PrediccionDTO {
    private String strTipoPrediccion;

    //Marcador exacto
    private Integer intResultadoLocal;
    private Integer intResultadoVisitante;

    //Rango de goles
    private String strRangoLocal;
    private String strRangoVisitante;

    //Marcador general
    private Long idGanador;

    //Primero en marcar
    private Long idPrimeroEnMarcar;

    //Diferencia de goles
    private String strDiferenciaDeGoles;

    //Marcador exacto con goles totales
    private String intTotalGoles;
}
