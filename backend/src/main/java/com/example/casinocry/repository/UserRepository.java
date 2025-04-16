package com.example.casinocry.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.casinocry.entities.Usuario;

public interface UserRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    @Query("UPDATE Usuario u SET u.email = :nuevoEmail WHERE u.id = :idUser")
    int actualizarEmail(@Param("nuevoEmail") String nuevoEmail, @Param("idUser") Long idUser);

    @Query("UPDATE Usuario u SET u.telefono = :nuevoTelefono WHERE u.id = :idUser")
    int actualizarTelefono(@Param("nuevoTelefono") String nuevoTelefono, @Param("idUser") Long idUser);
    
}
