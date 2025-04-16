package com.example.casinocry.entities;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Perfil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPerfil;

    @OneToOne
    @JoinColumn(name = "id_usuario", unique = true, nullable = false)
    @JsonBackReference
    private Usuario usuario;

    private String fotoPerfil;
    private String username;
    private String nombre;
    private String apellido;
    private Date fechaRegistro;
    private Date fechaNacimiento;
    private String telefono;

    // Getters y Setters
}