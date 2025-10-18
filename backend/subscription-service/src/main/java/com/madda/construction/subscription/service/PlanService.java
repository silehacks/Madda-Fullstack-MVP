package com.madda.construction.subscription.service;

import com.madda.construction.subscription.model.SubscriptionPlan;
import com.madda.construction.subscription.repository.SubscriptionPlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {

    private final SubscriptionPlanRepository subscriptionPlanRepository;

    public PlanService(SubscriptionPlanRepository subscriptionPlanRepository) {
        this.subscriptionPlanRepository = subscriptionPlanRepository;
    }

    public List<SubscriptionPlan> getAllPlans() {
        return subscriptionPlanRepository.findAll();
    }

    public SubscriptionPlan getPlanById(Long id) {
        return subscriptionPlanRepository.findById(id).orElse(null);
    }
}