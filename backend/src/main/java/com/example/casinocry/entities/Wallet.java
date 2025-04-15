package com.example.casinocry.entities;

import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idWallet;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    private String tipoCrypto; // BTC, ETH, etc.
    private BigDecimal saldo;
    private String direccionCrypto;
    private String nombreWallet;

}
