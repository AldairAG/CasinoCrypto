package com.example.casinocry.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Getter
@Setter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;

    @Column(nullable = false)
    private String password; // Hash de la contraseña
    @Column(nullable = false,columnDefinition = "VARCHAR(255) DEFAULT 'True'")
    private Boolean estadoCuenta = true; // true = activo, false = inactivo
    @Column(nullable = false)
    private BigDecimal saldoUsuario;
    @Column(nullable = false, unique = true)
    private String email;

    @ManyToMany
    @JoinTable(name = "Usuario_Rol", joinColumns = @JoinColumn(name = "id_usuario"), inverseJoinColumns = @JoinColumn(name = "id_rol"))
    @JsonIgnore
    private Set<Rol> roles;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Wallet> wallets;

    @OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Perfil perfil;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaccion> transacciones;

    @ManyToMany
    @JoinTable(name = "Usuario_Notificacion", joinColumns = @JoinColumn(name = "id_usuario"), inverseJoinColumns = @JoinColumn(name = "id_notificacion"))
    private List<Notificacion> notificaciones;

    @ManyToMany
    @JoinTable(name = "Usuario_Promocion", joinColumns = @JoinColumn(name = "id_usuario"), inverseJoinColumns = @JoinColumn(name = "id_promocion"))
    private List<Promocion> promociones;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UsuarioQuiniela> quinielas;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Apuesta> apuestas;

}