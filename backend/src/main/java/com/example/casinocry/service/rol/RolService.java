package com.example.casinocry.service.rol;

import java.util.Optional;

import com.example.casinocry.entities.Rol;

public interface RolService {
    void save(Rol rol);

    Optional<Rol> findByNombre(String nombreRol);
}
