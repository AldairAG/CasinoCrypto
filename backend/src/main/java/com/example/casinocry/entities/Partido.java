package com.example.casinocry.entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Partido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPartido;

    private String equipoLocal;
    private String equipoVisitante;
    private Date fechaPartido;
    private String resultadoFinal; // local/empate/visitante

    // Getters y Setters
}