package com.example.casinocry.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import com.example.casinocry.auth.JwtAuthenticationFilter;
import com.example.casinocry.auth.JwtUtil;
import com.example.casinocry.auth.JwtValidationFilter;

@Configuration
public class SecurityConfig {
    @SuppressWarnings("unused")
    private final JwtUtil jwtUtil;

    @Autowired
    private CorsConfig corsConfig;

    public SecurityConfig(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authenticationConfiguration,
            JwtUtil jwtUtil) throws Exception {
        http.csrf(csrf -> csrf.disable()) // Desactivar CSRF (opcional, dependiendo del caso de uso)
                .cors(cors -> cors.configurationSource(corsConfig.corsConfigurationSource())) // Habilitar
                                                                                              // CORS
                .sessionManagement(management -> management
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Sin sesiones
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/**").permitAll()
                        .requestMatchers(HttpMethod.PATCH, "/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/**").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/**").permitAll()
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Permitir

                        // .requestMatchers(HttpMethod.DELETE, "/users/{id}").hasRole("ADMIN")
                        // // Solo accesible para ADMIN
                        .anyRequest().authenticated()) // Proteger todos los demás endpoints
                .addFilter(new JwtAuthenticationFilter(
                        authenticationConfiguration.getAuthenticationManager(), jwtUtil)) // Filtro
                                                                                          // de
                                                                                          // autenticación
                .addFilter(new JwtValidationFilter(
                        authenticationConfiguration.getAuthenticationManager(), jwtUtil)); // Filtro
                                                                                           // de
                                                                                           // validación

        return http.build();
    }
}
