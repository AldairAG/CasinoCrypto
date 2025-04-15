package com.example.casinocry.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Apuesta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idApuesta;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_partido", nullable = false)
    private Partido partido;

    private Double montoApostado;
    private String tipoApuesta; // azar/deporte/quiniela
    private String resultado; // ganada/perdida/pendiente
    private Date fechaApuesta;

    // Getters y Setters
}
