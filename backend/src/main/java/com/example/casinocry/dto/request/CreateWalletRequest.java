package com.example.casinocry.dto.request;

import lombok.Getter;

@Getter
public class CreateWalletRequest {
    private Long userId;
    private String walletNombreString;
    private String tipoCryptoString; // BTC, ETH, etc.
    private String direccionCryptoString;
}
