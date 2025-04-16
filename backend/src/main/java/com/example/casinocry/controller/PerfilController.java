package com.example.casinocry.controller;

import com.example.casinocry.service.perfil.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cc/perfil")
public class PerfilController {

    @Autowired
    private PerfilService perfilService;

    // Endpoint para cambiar el teléfono
    @PutMapping("/{idUser}/telefono")
    public ResponseEntity<?> cambiarTelefono(@PathVariable Long idUser, @RequestParam String nuevoTelefono) {
        try {
            perfilService.cambiarTelefono(idUser, nuevoTelefono);
            return ResponseEntity.ok("Teléfono actualizado exitosamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // Endpoint para enviar un correo de verificación
    @PostMapping("/{idUser}/verificacion-email")
    public ResponseEntity<?> enviarEmailVerificacion(@PathVariable Long idUser, @RequestParam String email) {
        try {
            perfilService.enviarEmailVerificacion(idUser, email);
            return ResponseEntity.ok("Correo de verificación enviado exitosamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // Endpoint para verificar autenticación de dos factores
    @PostMapping("/{idUser}/verificar-dos-factores")
    public ResponseEntity<?> verificarDosFactores(@PathVariable Long idUser, @RequestParam String codigoVerificacion) {
        try {
            perfilService.VerificarDosFactores(idUser, codigoVerificacion);
            return ResponseEntity.ok("Autenticación de dos factores verificada exitosamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // Endpoint para actualizar comprobante de domicilio
    @PutMapping("/{idUser}/comprobante-domicilio")
    public ResponseEntity<?> actualizarComprobanteDomicilio(@PathVariable Long idUser, @RequestParam String comprobanteDomicilio) {
        try {
            perfilService.actualizarComprobanteDomicilio(idUser, comprobanteDomicilio);
            return ResponseEntity.ok("Comprobante de domicilio actualizado exitosamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // Endpoint para actualizar comprobante de identidad
    @PutMapping("/{idUser}/comprobante-identidad")
    public ResponseEntity<?> actualizarComprobanteIdentidad(@PathVariable Long idUser, @RequestParam String comprobanteIdentidad) {
        try {
            perfilService.actualizarComprobanteIdentidad(idUser, comprobanteIdentidad);
            return ResponseEntity.ok("Comprobante de identidad actualizado exitosamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
