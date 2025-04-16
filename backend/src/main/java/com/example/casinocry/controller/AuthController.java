package com.example.casinocry.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.casinocry.dto.request.RegisterRequest;
import com.example.casinocry.dto.response.LoginResponse;
import com.example.casinocry.service.user.UserService;

/**
 * Controlador para manejar las operaciones de autenticación, como el inicio de sesión y el registro de usuarios.
 */
@Controller
@RequestMapping("/cc/auth")
public class AuthController {

    @Autowired
    private UserService userService; // Servicio para manejar la lógica relacionada con usuarios

    /**
     * Endpoint para iniciar sesión.
     * 
     * @param credentials Un mapa que contiene las credenciales del usuario (email y contraseña).
     * @return Una respuesta HTTP con el token de autenticación si las credenciales son válidas.
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        try {
            // Obtener el email y la contraseña del cuerpo de la solicitud
            String email = credentials.get("email");
            String password = credentials.get("password");

            // Validar que el email y la contraseña no estén vacíos
            if (email == null || email.isBlank() || password == null || password.isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(Map.of("message", "Email y contraseña son obligatorios y no pueden estar vacíos"));
            }

            // Llamar al servicio para autenticar al usuario
            LoginResponse response = userService.loginUser(email, password);
            return ResponseEntity.ok(response); // Respuesta exitosa con el token de autenticación
        } catch (IllegalArgumentException e) {
            // Manejar errores de validación
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            // Manejar errores de autenticación
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Credenciales inválidas o error de autenticación"));
        }
    }

    /**
     * Endpoint para registrar un nuevo usuario.
     * 
     * @param registerRequest Un objeto que contiene los datos necesarios para registrar al usuario.
     * @return Una respuesta HTTP con el token de autenticación si el registro es exitoso.
     */
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        try {
            // Llamar al servicio para registrar al usuario
            LoginResponse response = userService.registerUser(registerRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(response); // Respuesta exitosa con el token de autenticación
        } catch (IllegalArgumentException e) {
            // Manejar errores de validación
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            // Manejar errores inesperados
            System.out.println("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Ocurrió un error al registrar al usuario"));
        }
    }
}
