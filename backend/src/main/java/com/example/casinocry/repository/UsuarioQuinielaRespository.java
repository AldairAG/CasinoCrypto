package com.example.casinocry.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.casinocry.entities.UsuarioQuiniela;
import com.example.casinocry.entities.ObjectsEmbed.UsuarioQuinielaId;

public interface UsuarioQuinielaRespository extends JpaRepository<UsuarioQuiniela, UsuarioQuinielaId> {

}
