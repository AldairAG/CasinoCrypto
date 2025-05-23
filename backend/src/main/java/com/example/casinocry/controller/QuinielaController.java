package com.example.casinocry.controller;

import com.example.casinocry.dto.request.ArmarQuinielaRequest;
import com.example.casinocry.dto.request.CreateQuinielaRequest;
import com.example.casinocry.entities.Quiniela;
import com.example.casinocry.service.quiniela.QuinielaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        } catch (IllegalArgumentException e) {
            // Manejo de errores por argumentos inválidos
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        } catch (RuntimeException e) {
            // Manejo de errores específicos de negocio
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        } catch (Exception e) {
            // Manejo de errores generales
            return ResponseEntity.status(500).body("Error interno del servidor: " + e.getMessage());
        }
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
        try {
            Quiniela quiniela = quinielaService.getQuinielaById(id);
            if (quiniela == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            return ResponseEntity.status(HttpStatus.OK).body(quiniela);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping
    public ResponseEntity<List<Quiniela>> getAllQuinielas() {
        try {
            List<Quiniela> quinielas = quinielaService.getAllQuinielas();
            return ResponseEntity.status(HttpStatus.OK).body(quinielas);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PostMapping("/armar")
    public ResponseEntity<String> armarQuiniela(@RequestBody ArmarQuinielaRequest request) {
        try {
            quinielaService.armarQuiniela(request);
            return ResponseEntity.ok("Usuario y predicciones asociadas exitosamente a la quiniela.");
        } catch (RuntimeException e) {
            // Manejo de errores específicos de negocio
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        } catch (Exception e) {
            // Manejo de errores generales
            return ResponseEntity.status(500).body("Error interno del servidor: " + e.getMessage());
        }
    }
}
