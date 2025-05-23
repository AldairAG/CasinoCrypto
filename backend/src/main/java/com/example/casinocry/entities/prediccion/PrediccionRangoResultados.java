package com.example.casinocry.entities.prediccion;

import com.example.casinocry.entities.Prediccion;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("RANGO_RESULTADOS")
@Getter
@Setter
public class PrediccionRangoResultados extends Prediccion {

    private String rangoLocal; // Ej: "1-3 goles", "victoria amplia", etc.
    private String rangoVisitante; // Ej: "1-3 goles", "victoria amplia", etc.
}
