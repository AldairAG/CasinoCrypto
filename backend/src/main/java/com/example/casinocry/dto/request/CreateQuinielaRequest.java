package com.example.casinocry.dto.request;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CreateQuinielaRequest {
    private String nombreQuiniela;
    private Date fechaInicio;
    private Date fechaFin;
    private Float precioParticipacion;
    private String strDescripcion;
    private String banner;
    private Integer intColumnas;
    private Boolean allowDoubleBets;
    private Boolean allowTripleBets;
    private String tipoPremio;
    private List<String> tiposApuesta;
    private List<Long> eventos;
}
