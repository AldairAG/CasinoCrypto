package com.example.casinocry.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Notificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNotificacion;

    private String mensaje;
    private Date fechaHora;
    private String tituloNotificacion;
    private String tipoNotificacion; // Puede ser "promocion", "sistema",resultado.

    @ManyToMany(mappedBy = "notificaciones")
    private List<Usuario> usuarios;

    // Getters y Setters
}