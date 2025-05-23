package com.example.casinocry.entities;

import java.time.LocalDateTime;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo_prediccion", discriminatorType = DiscriminatorType.STRING)
public abstract class Prediccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPrediccion;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario"),
            @JoinColumn(name = "id_quiniela", referencedColumnName = "id_quiniela")
    })
    private UsuarioQuiniela usuarioQuiniela;

    @ManyToOne
    @JoinColumn(name = "id_evento", nullable = false)
    private Evento evento;

    private Boolean esDoble = false;
    private Boolean esTriple = false;

    private Boolean acertada;

    private LocalDateTime fechaCreacion = LocalDateTime.now();
}
