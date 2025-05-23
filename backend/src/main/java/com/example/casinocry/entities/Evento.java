package com.example.casinocry.entities;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Evento {
    @Id
    private Long idEvento;
    
    private String equipoLocal;
    private String equipoVisitante;
    private Date fechaPartido;

    @JsonBackReference
    @ManyToMany(mappedBy = "eventos")
    private List<Quiniela> quinielas;
}
