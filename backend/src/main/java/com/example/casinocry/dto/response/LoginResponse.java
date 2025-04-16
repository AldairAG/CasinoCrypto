package com.example.casinocry.dto.response;

import java.math.BigDecimal;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class LoginResponse {
    private String token;
    private String username;
    private String email;
    private BigDecimal saldo;
    private Long idUser;
    private Long idPerfil;
}
