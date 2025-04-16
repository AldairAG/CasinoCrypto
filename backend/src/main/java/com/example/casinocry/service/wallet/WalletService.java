package com.example.casinocry.service.wallet;

import java.util.List;

import com.example.casinocry.dto.request.CreateWalletRequest;
import com.example.casinocry.entities.Wallet;

public interface WalletService {

    void createWallet(CreateWalletRequest createWalletRequest);

    void deleteWallet(Long walletId);

    Wallet findWalletById(Long walletId);

    List<Wallet> findAllWalletsByUserId(Long userId);
}
