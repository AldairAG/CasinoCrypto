package com.example.casinocry.service.perfil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.example.casinocry.repository.PerfilRepository;

public class PerfilImpl implements PerfilService {

    @Autowired
    private PerfilRepository perfilRepository;

    @Override
    @Transactional
    public void cambiarTelefono(Long idUser, String nuevoTelefono) {
        perfilRepository.actualizarTeléfono(nuevoTelefono, idUser);
    }

    @Override
    public void enviarEmailVerificacion(Long idUser, String email) {
        
    }

    @Override
    @Transactional
    public void VerificarDosFactores(Long idUser, String codigoVerificacion) {
        
    }

    @Override
    @Transactional
    public void actualizarComprobanteDomicilio(Long idUser, String comprobanteDomicilio) {
    }

    @Override
    @Transactional
    public void actualizarComprobanteIdentidad(Long idUser, String comprobanteIdentidad) {
    }
    
}
