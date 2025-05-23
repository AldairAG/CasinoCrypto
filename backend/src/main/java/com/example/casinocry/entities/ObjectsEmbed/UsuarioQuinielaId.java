package com.example.casinocry.entities.ObjectsEmbed;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

// Clase para la clave compuesta
@Embeddable
@Getter
@Setter
public class UsuarioQuinielaId implements Serializable {
    @Column(name = "id_usuario")
    private Long idUsuario;
    @Column(name = "id_quiniela")
    private Long idQuiniela;

    public UsuarioQuinielaId() {
    }

    public UsuarioQuinielaId(Long idUsuario, Long idQuiniela) {
        this.idUsuario = idUsuario;
        this.idQuiniela = idQuiniela;
    }

    // equals() y hashCode() son obligatorios
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof UsuarioQuinielaId))
            return false;
        UsuarioQuinielaId that = (UsuarioQuinielaId) o;
        return Objects.equals(idUsuario, that.idUsuario) &&
                Objects.equals(idQuiniela, that.idQuiniela);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUsuario, idQuiniela);
    }
}