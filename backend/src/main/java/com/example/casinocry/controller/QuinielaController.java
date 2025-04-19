package com.example.casinocry.controller;

import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.entities.Quiniela;
import com.example.casinocry.service.quiniela.QuinielaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cc/quinielas")
public class QuinielaController {

    @Autowired
    private QuinielaService quinielaService;

    @PostMapping
    public ResponseEntity<String> createQuiniela(@RequestBody CreateQuinielaRequest request) {
        try {
            quinielaService.createQuiniela(request);
            return ResponseEntity.ok("Quiniela creada exitosamente.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error al crear la quiniela: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateQuiniela(@PathVariable Long id) {
        try {
            // Implementación futura
            return ResponseEntity.status(501).body("Método no implementado.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error al actualizar la quiniela: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuiniela(@PathVariable Long id) {
        try {
            quinielaService.deleteQuiniela(id);
            return ResponseEntity.ok("Quiniela eliminada exitosamente.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error al eliminar la quiniela: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiniela> getQuinielaById(@PathVariable Long id) {
        try {
            Quiniela quiniela = quinielaService.getQuinielaById(id);
            return ResponseEntity.ok(quiniela);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping
    public ResponseEntity<List<Quiniela>> getAllQuinielas() {
        try {
            List<Quiniela> quinielas = quinielaService.getAllQuinielas();
            return ResponseEntity.ok(quinielas);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
