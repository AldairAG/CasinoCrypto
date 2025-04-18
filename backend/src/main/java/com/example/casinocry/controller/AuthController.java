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
 * Controlador para manejar las operaciones de autenticación, como el inicio de
 * sesión y el registro de usuarios.
 */
@Controller
@RequestMapping("/cc/auth")
public class AuthController {

    @Autowired
    private UserService userService; // Servicio para manejar la lógica relacionada con usuarios

    /**
     * Endpoint para iniciar sesión en la aplicación.
     *
     * @param credentials Un mapa que contiene las credenciales del usuario:
     *                    - "email": El correo electrónico del usuario.
     *                    - "password": La contraseña del usuario.
     * @return ResponseEntity con el resultado de la operación:
     *         - En caso de éxito (200 OK): Devuelve un objeto {@link LoginResponse} con el token de autenticación.
     *         - En caso de error de validación (400 BAD REQUEST): Devuelve un mensaje indicando que el email y la contraseña son obligatorios.
     *         - En caso de error de autenticación (401 UNAUTHORIZED): Devuelve un mensaje indicando credenciales inválidas o error de autenticación.
     *
     * Ejemplo de respuesta exitosa (200 OK):
     * {
     *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * }
     *
     * Ejemplo de respuesta con error de validación (400 BAD REQUEST):
     * {
     *   "message": "Email y contraseña son obligatorios y no pueden estar vacíos"
     * }
     *
     * Ejemplo de respuesta con error de autenticación (401 UNAUTHORIZED):
     * {
     *   "message": "Credenciales inválidas o error de autenticación"
     * }
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
     * Este endpoint permite registrar un nuevo usuario en el sistema proporcionando
     * los datos necesarios. Si el registro es exitoso, se devuelve un token de
     * autenticación.
     * 
     * Ejemplo de JSON de entrada:
     * {
     * "nombre": "Juan Pérez",
     * "email": "juan.perez@example.com",
     * "password": "contraseña123"
     * "username":""
     * "telefono":""
     * "apellidos":""
     * "fechaNacimiento":""
     * }
     * 
     * Ejemplo de JSON de salida (respuesta exitosa):
     * {
     * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     * }
     * 
     * Ejemplo de JSON de salida (error):
     * {
     * "message": "El email ya está registrado"
     * }
     * 
     * @param registerRequest Un objeto que contiene los datos necesarios para
     *                        registrar al usuario.
     * @return Una respuesta HTTP con el token de autenticación si el registro es
     *         exitoso.
     */
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        try {
            // Llamar al servicio para registrar al usuario
            LoginResponse response = userService.registerUser(registerRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(response); // Respuesta exitosa con el token de
                                                                             // autenticación
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
