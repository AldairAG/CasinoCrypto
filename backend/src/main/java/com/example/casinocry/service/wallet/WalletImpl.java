package com.example.casinocry.service.wallet;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.casinocry.dto.request.CreateWalletRequest;
import com.example.casinocry.entities.Usuario;
import com.example.casinocry.entities.Wallet;
import com.example.casinocry.repository.UserRepository;
import com.example.casinocry.repository.WalletRepository;

@Service
public class WalletImpl implements WalletService {

    @Autowired
    private WalletRepository walletRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public void createWallet(CreateWalletRequest createWalletRequest) {
        Usuario user = userRepository.findById(createWalletRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Wallet wallet = new Wallet();
        wallet.setTipoCrypto(createWalletRequest.getTipoCryptoString());
        wallet.setDireccionCrypto(createWalletRequest.getDireccionCryptoString());
        wallet.setNombreWallet(createWalletRequest.getWalletNombreString());
        wallet.setUsuario(user);

        walletRepository.save(wallet);
    }

    @Override
    @Transactional
    public void deleteWallet(Long walletId) {
       walletRepository.deleteById(walletId);
    }

    @Override
    @Transactional(readOnly = true)
    public Wallet findWalletById(Long walletId) {
        return walletRepository.findById(walletId)
        .orElseThrow(() -> new RuntimeException("Wallet no encontrada"));
    }

    @Override
    @Transactional(readOnly = true)
    public List<Wallet> findAllWalletsByUserId(Long userId) {
       List<Wallet> walletList=walletRepository.findAllByUsuario_IdUsuario(userId);
    
        if (walletList.isEmpty()) {
            throw new RuntimeException("No hay wallets para este usuario");
        }
        return walletList;

    }

}
