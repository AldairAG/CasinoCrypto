package com.example.casinocry.controller;

import com.example.casinocry.dto.request.CreateWalletRequest;
import com.example.casinocry.entities.Wallet;
import com.example.casinocry.service.wallet.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cc/wallets")
public class WalletController {

    @Autowired
    private WalletService walletService;

    // Endpoint para crear una wallet
    @PostMapping
    public ResponseEntity<?> createWallet(@RequestBody CreateWalletRequest createWalletRequest) {
        try {
            walletService.createWallet(createWalletRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body("Wallet creada exitosamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // Endpoint para eliminar una wallet por ID
    @DeleteMapping("/{walletId}")
    public ResponseEntity<?> deleteWallet(@PathVariable Long walletId) {
        try {
            walletService.deleteWallet(walletId);
            return ResponseEntity.ok("Wallet eliminada exitosamente");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // Endpoint para buscar una wallet por ID
    @GetMapping("/{walletId}")
    public ResponseEntity<?> findWalletById(@PathVariable Long walletId) {
        try {
            Wallet wallet = walletService.findWalletById(walletId);
            return ResponseEntity.ok(wallet);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // Endpoint para listar todas las wallets de un usuario
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> findAllWalletsByUserId(@PathVariable Long userId) {
        try {
            List<Wallet> wallets = walletService.findAllWalletsByUserId(userId);
            return ResponseEntity.ok(wallets);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
