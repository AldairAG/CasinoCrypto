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
    private Long idQuiniela;

    private String nombreQuiniela;
    private Double premioAcumulado;
    private Integer numeroParticipantes;
    private Date fechaInicio;
    private Date fechaFin;
    private Float precioParticipacion;
    private String estado;
    private String strDescripcion;
    private String urlBanner;
    private Integer intColumnas;
    private Boolean allowDoubleBets;
    private Boolean allowTripleBets;
    private String tipoPremio;

    @ElementCollection
    private List<String> tiposApuestas;

    @ManyToMany
    @JoinTable(
        name = "quiniela_evento", // Nombre de la tabla intermedia
        joinColumns = @JoinColumn(name = "id_quiniela"), // Columna que referencia a Quiniela
        inverseJoinColumns = @JoinColumn(name = "id_evento") // Columna que referencia a Evento
    )
    private List<Evento> eventos;

    @OneToMany(mappedBy = "quiniela", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UsuarioQuiniela> usuarios;
}