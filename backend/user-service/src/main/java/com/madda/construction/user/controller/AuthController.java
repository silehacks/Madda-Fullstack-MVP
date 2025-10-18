package com.madda.construction.user.controller;

import com.madda.construction.user.dto.request.LoginRequest;
import com.madda.construction.user.dto.request.RegisterRequest;
import com.madda.construction.user.dto.response.AuthResponse;
import com.madda.construction.user.dto.response.UserResponse;
import com.madda.construction.user.model.User;
import com.madda.construction.user.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody RegisterRequest registerRequest) {
        User user = authService.register(registerRequest);
        UserResponse userResponse = new UserResponse();
        userResponse.setId(user.getId());
        userResponse.setCompanyName(user.getCompanyName());
        userResponse.setEmail(user.getEmail());
        userResponse.setStatus(user.getStatus());
        userResponse.setSubscriptionTier(user.getSubscriptionTier());
        return ResponseEntity.ok(userResponse);
    }
}