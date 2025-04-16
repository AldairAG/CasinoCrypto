package com.example.casinocry.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.casinocry.entities.Rol;

public interface RolRepository extends JpaRepository<Rol, Long> {
    Optional<Rol> findByNombreRol(String nombre);

}
