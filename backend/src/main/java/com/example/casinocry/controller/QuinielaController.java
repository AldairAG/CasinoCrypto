package com.example.casinocry.controller;

import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.entities.Quiniela;
import com.example.casinocry.service.quiniela.QuinielaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quinielas")
public class QuinielaController {

    @Autowired
    private QuinielaService quinielaService;

    @PostMapping
    public ResponseEntity<String> createQuiniela(@RequestBody CreateQuinielaRequest request) {
        quinielaService.createQuiniela(request);
        return ResponseEntity.ok("Quiniela creada exitosamente.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateQuiniela(@PathVariable Long id) {
        // Implementación futura
        return ResponseEntity.status(501).body("Método no implementado.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuiniela(@PathVariable Long id) {
        quinielaService.deleteQuiniela(id);
        return ResponseEntity.ok("Quiniela eliminada exitosamente.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiniela> getQuinielaById(@PathVariable Long id) {
        Quiniela quiniela = quinielaService.getQuinielaById(id);
        return ResponseEntity.ok(quiniela);
    }

    @GetMapping
    public ResponseEntity<List<Quiniela>> getAllQuinielas() {
        List<Quiniela> quinielas = quinielaService.getAllQuinielas();
        return ResponseEntity.ok(quinielas);
    }
}
