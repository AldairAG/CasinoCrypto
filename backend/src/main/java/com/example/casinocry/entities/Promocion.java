package com.example.casinocry.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Promocion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPromocion;

    private String titulo;
    private String descripcion;
    private Date fechaInicio;
    private Date fechaFin;
    private String requisitos; // Puedes usar JSON o una estructura similar

    @ManyToMany(mappedBy = "promociones")
    private List<Usuario> usuarios;

    // Getters y Setters
}