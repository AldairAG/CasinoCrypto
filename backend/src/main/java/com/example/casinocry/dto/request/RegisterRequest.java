package com.example.casinocry.dto.request;

import java.util.Date;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegisterRequest {
    private String username;
    private String password;
    private String email;
    private String telefono;
    private String nombre;
    private String apellidos;
    private Date fechaNacimiento; 
}
