package com.example.casinocry.entities.prediccion;

import com.example.casinocry.entities.Prediccion;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("TOTAL_GOLES")
@Getter
@Setter
public class PrediccionTotalGoles extends Prediccion {

    private Integer totalGoles;
}
