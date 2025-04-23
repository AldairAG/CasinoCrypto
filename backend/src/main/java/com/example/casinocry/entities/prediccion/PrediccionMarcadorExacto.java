package com.example.casinocry.entities.prediccion;

import com.example.casinocry.entities.Prediccion;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("MARCADOR_EXACTO")
@Getter
@Setter
public class PrediccionMarcadorExacto extends Prediccion {

    private Integer marcadorLocal;
    private Integer marcadorVisitante;
}
