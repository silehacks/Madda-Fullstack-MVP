package com.madda.construction.subscription.service;

import com.madda.construction.subscription.model.Subscription;
import com.madda.construction.subscription.model.SubscriptionPlan;
import com.madda.construction.subscription.model.enums.SubscriptionStatus;
import com.madda.construction.subscription.repository.SubscriptionRepository;
import com.madda.construction.subscription.repository.SubscriptionPlanRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;
    private final SubscriptionPlanRepository subscriptionPlanRepository;

    public SubscriptionService(SubscriptionRepository subscriptionRepository, SubscriptionPlanRepository subscriptionPlanRepository) {
        this.subscriptionRepository = subscriptionRepository;
        this.subscriptionPlanRepository = subscriptionPlanRepository;
    }

    public Subscription subscribe(Long userId, Long planId) {
        SubscriptionPlan plan = subscriptionPlanRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found"));

        Subscription subscription = new Subscription();
        subscription.setUserId(userId);
        subscription.setPlan(plan);
        subscription.setStatus(SubscriptionStatus.ACTIVE);
        subscription.setStartDate(LocalDate.now());
        // For simplicity, setting end date to one year from now
        subscription.setEndDate(LocalDate.now().plusYears(1));

        return subscriptionRepository.save(subscription);
    }

    public Subscription getSubscriptionByUserId(Long userId) {
        return subscriptionRepository.findByUserId(userId).orElse(null);
    }
}