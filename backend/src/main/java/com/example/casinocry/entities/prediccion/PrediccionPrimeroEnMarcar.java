package com.example.casinocry.entities.prediccion;

import com.example.casinocry.entities.Prediccion;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("PRIMERO_EN_MARCAR")
@Getter
@Setter
public class PrediccionPrimeroEnMarcar extends Prediccion {

    private String equipoOMarcador; // equipo o jugador
}
