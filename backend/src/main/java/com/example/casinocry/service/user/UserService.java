package com.example.casinocry.service.user;

import com.example.casinocry.dto.request.RegisterRequest;
import com.example.casinocry.dto.response.LoginResponse;

public interface UserService {

    LoginResponse registerUser(RegisterRequest registerRequest);
    
    LoginResponse loginUser(String email, String password);
    
    Boolean deleteUserAccount(Long idUser);

    void cambiarEmail(Long idUser, String nuevoEmail,String codigoVerificacion);

    void cambiarContrasena(Long idUser, String nuevaContrasena, String codigoVerificacion);

}
