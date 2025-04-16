package com.example.casinocry.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.casinocry.constants.ROLES;
import com.example.casinocry.entities.Rol;
import com.example.casinocry.service.rol.RolService;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private RolService RolService;

    @Override
    public void run(String... args) throws Exception {

        // Crear roles si no existen
        if (RolService.findByNombre(ROLES.ADMIN_STRING).isEmpty()) {
            RolService.save(Rol.builder().nombreRol(ROLES.ADMIN_STRING).build());
        }
        if (RolService.findByNombre(ROLES.CLIENTE_STRING).isEmpty()) {
            RolService.save(Rol.builder().nombreRol(ROLES.CLIENTE_STRING).build());
        }
        if (RolService.findByNombre(ROLES.PROPIETARIO_STRING).isEmpty()) {
            RolService.save(Rol.builder().nombreRol(ROLES.PROPIETARIO_STRING).build());
        }
    }
}