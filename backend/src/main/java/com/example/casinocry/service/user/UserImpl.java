package com.example.casinocry.service.user;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.casinocry.auth.AuthService;
import com.example.casinocry.constants.ROLES;
import com.example.casinocry.dto.request.RegisterRequest;
import com.example.casinocry.dto.response.LoginResponse;
import com.example.casinocry.entities.Perfil;
import com.example.casinocry.entities.Rol;
import com.example.casinocry.entities.Usuario;
import com.example.casinocry.repository.UserRepository;
import com.example.casinocry.service.rol.RolService;

@Service
public class UserImpl implements UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RolService rolService;

    @Autowired
    private UserRepository repository;

    @Autowired
    private AuthService authService;

    @Override
    @Transactional
    public LoginResponse registerUser(RegisterRequest registerRequest) {
        Usuario usuario = new Usuario();

        usuario.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        usuario.setEmail(registerRequest.getEmail());
        usuario.setSaldoUsuario(BigDecimal.valueOf(0.0));

        Set<Rol> roles = new HashSet<>();

        // Recuperar el rol desde la base de datos
        Rol rol = rolService.findByNombre(ROLES.CLIENTE_STRING)
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));

        roles.add(rol);
        usuario.setRoles(roles);

        // Crear perfil
        Perfil perfil = new Perfil();

        perfil.setNombre(registerRequest.getNombre());
        perfil.setApellido(registerRequest.getApellidos());
        perfil.setTelefono(registerRequest.getTelefono());
        perfil.setFechaNacimiento(registerRequest.getFechaNacimiento());
        perfil.setFechaRegistro(new Date());

        usuario.setPerfil(perfil);
        perfil.setUsuario(usuario);

        usuario=repository.save(usuario);

        // Generar un token JWT
        String token = authService.authenticate(usuario.getEmail(), registerRequest.getPassword(),
                usuario.getPassword(),
                usuario.getRoles());

        LoginResponse loginResponse = LoginResponse.builder()
                .token(token)
                .username(registerRequest.getUsername())
                .email(registerRequest.getEmail())
                .saldo(usuario.getSaldoUsuario())
                .idUser(usuario.getIdUsuario())
                .idPerfil(perfil.getIdPerfil())
                .build();

        return loginResponse;
    }

    @Override
    @Transactional(readOnly = true)
    public LoginResponse loginUser(String email, String password) {
        Usuario usuario = repository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario inexistente"));

        // Generar un token JWT
        String token = authService.authenticate(usuario.getEmail(), password,usuario.getPassword(),
                usuario.getRoles());

        LoginResponse loginResponse = LoginResponse.builder()
                .token(token)
                .username(usuario.getPerfil().getUsername())
                .email(usuario.getEmail())
                .saldo(usuario.getSaldoUsuario())
                .idUser(usuario.getIdUsuario())
                .idPerfil(usuario.getPerfil().getIdPerfil())
                .build();

        return loginResponse;
    }

    @Override
    public Boolean deleteUserAccount(Long idUser) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUserAccount'");
    }

    @Override
    public void cambiarEmail(Long idUser, String nuevoEmail, String codigoVerificacion) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'cambiarEmail'");
    }

    @Override
    public void cambiarContrasena(Long idUser, String nuevaContrasena, String codigoVerificacion) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'cambiarContrasena'");
    }

}
