package com.example.casinocry.entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Quiniela {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  idQuiniela;

    private String nombreQuiniela;
    private Double premioAcumulado;
    private Integer numeroParticipantes;
    private Date fechaInicio;
    private Date fechaFin;
    private Float precioParticipacion;
    private String estado; // true = activa, false = inactiva

    @OneToMany(mappedBy = "quiniela", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UsuarioQuiniela> usuarios;
 
}