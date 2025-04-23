package com.example.casinocry.entities.prediccion;

import com.example.casinocry.entities.Prediccion;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("DIFERENCIA_GOLES")
@Getter
@Setter
public class PrediccionDiferenciaGoles extends Prediccion {

    private Integer diferencia;
}
