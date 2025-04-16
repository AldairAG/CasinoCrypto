package com.example.casinocry.service.rol;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.casinocry.entities.Rol;
import com.example.casinocry.repository.RolRepository;

@Service
public class RolImpl implements RolService {

    @Autowired
    RolRepository rolRepository;

    @Override
    public void save(Rol rol) {
        rolRepository.save(rol);
    }

    @Override
    public Optional<Rol> findByNombre(String nombre) {
        return rolRepository.findByNombreRol(nombre);
    }

}
