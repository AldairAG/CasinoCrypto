package com.example.casinocry.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.casinocry.entities.Evento;

public interface EventoRepository extends JpaRepository<Evento, Long> {
    
}
