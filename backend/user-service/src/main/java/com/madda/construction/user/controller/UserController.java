package com.madda.construction.user.controller;

import com.madda.construction.user.dto.response.UserResponse;
import com.madda.construction.user.model.User;
import com.madda.construction.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getMyProfile(@AuthenticationPrincipal User user) {
        UserResponse userResponse = new UserResponse();
        userResponse.setId(user.getId());
        userResponse.setCompanyName(user.getCompanyName());
        userResponse.setEmail(user.getEmail());
        userResponse.setStatus(user.getStatus());
        userResponse.setSubscriptionTier(user.getSubscriptionTier());
        return ResponseEntity.ok(userResponse);
    }
}