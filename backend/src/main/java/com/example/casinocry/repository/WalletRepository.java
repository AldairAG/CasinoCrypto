package com.example.casinocry.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.casinocry.entities.Wallet;

public interface WalletRepository extends JpaRepository<Wallet, Long> {

    List<Wallet> findAllByUsuario_IdUsuario(Long userId);

}
 