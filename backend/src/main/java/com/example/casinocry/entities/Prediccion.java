package com.example.casinocry.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Prediccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPrediccion;
    private Integer golesLocal;
    private Integer golesVisitante;
    private String prediccion; // local/empate/visitante

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario"),
            @JoinColumn(name = "id_quiniela", referencedColumnName = "id_quiniela")
    })
    private UsuarioQuiniela usuarioQuiniela;

    @ManyToOne
    @JoinColumn(name = "id_partido", nullable = false)
    private Partido partido;

    // Getters y Setters
}
