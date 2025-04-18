package com.example.casinocry.entities;

import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Evento {
    @Id
    private Long idEvento;

    @ManyToMany(mappedBy = "eventos")
    private List<Quiniela> quinielas;
}
