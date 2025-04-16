package com.example.casinocry.service.perfil;

public interface PerfilService {

    void cambiarTelefono(Long idUser, String nuevoTelefono);

    void enviarEmailVerificacion(Long idUser, String email);

    void VerificarDosFactores(Long idUser, String codigoVerificacion);

    void actualizarComprobanteDomicilio(Long idUser, String comprobanteDomicilio);

    void actualizarComprobanteIdentidad(Long idUser, String comprobanteIdentidad);

}
