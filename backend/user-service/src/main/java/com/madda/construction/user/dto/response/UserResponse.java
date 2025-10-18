package com.madda.construction.user.dto.response;

import com.madda.construction.user.model.enums.SubscriptionTier;
import com.madda.construction.user.model.enums.UserStatus;

public class UserResponse {
    private Long id;
    private String companyName;
    private String email;
    private UserStatus status;
    private SubscriptionTier subscriptionTier;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }

    public SubscriptionTier getSubscriptionTier() {
        return subscriptionTier;
    }

    public void setSubscriptionTier(SubscriptionTier subscriptionTier) {
        this.subscriptionTier = subscriptionTier;
    }
}