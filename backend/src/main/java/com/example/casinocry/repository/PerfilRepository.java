package com.example.casinocry.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.casinocry.entities.Perfil;

import jakarta.websocket.server.PathParam;

public interface PerfilRepository extends JpaRepository<Perfil, Long> {

    @Query("UPDATE Perfil p SET p.telefono = :telefonoNuevo WHERE p.idPerfil = :idPerfil")
    int actualizarTeléfono(@PathParam("telefonoNuevo") String nuevoTelefono, @PathParam("idPerfil") Long idPerfil);

}
