package com.example.casinocry.entities.prediccion;

import java.util.List;

import com.example.casinocry.entities.Prediccion;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@DiscriminatorValue("RESULTADO_GENERAL")
@Getter
@Setter
public class PrediccionResultadoGeneral extends Prediccion {

    // Puede incluir más de una opción si es doble o triple
    @ElementCollection
    private List<String> posiblesResultados; // Ej: ["GANA_LOCAL", "EMPATE"]
}
