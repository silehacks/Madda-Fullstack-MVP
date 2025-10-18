package com.madda.construction.user.service;

import com.madda.construction.user.dto.request.LoginRequest;
import com.madda.construction.user.dto.request.RegisterRequest;
import com.madda.construction.user.dto.response.AuthResponse;
import com.madda.construction.user.model.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtService jwtService;

    public AuthService(AuthenticationManager authenticationManager, UserService userService, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtService = jwtService;
    }

    public AuthResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );
        UserDetails userDetails = userService.loadUserByUsername(loginRequest.getEmail());
        String token = jwtService.generateToken(userDetails);
        return new AuthResponse(token);
    }

    public User register(RegisterRequest registerRequest) {
        return userService.registerUser(registerRequest);
    }
}