package com.example.casinocry.entities;

import java.util.List;

import com.example.casinocry.entities.ObjectsEmbed.UsuarioQuinielaId;

import jakarta.persistence.CascadeType;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Usuario_Quiniela")
public class UsuarioQuiniela {
    @EmbeddedId
    private UsuarioQuinielaId id;

    @ManyToOne
    @MapsId("idUsuario")
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @MapsId("idQuiniela")
    @JoinColumn(name = "id_quiniela", nullable = false)
    private Quiniela quiniela;

    @OneToMany(mappedBy = "usuarioQuiniela", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Prediccion> predicciones;

}
