package com.madda.construction.subscription.repository;

import com.madda.construction.subscription.model.SubscriptionPlan;
import com.madda.construction.subscription.model.enums.PlanType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubscriptionPlanRepository extends JpaRepository<SubscriptionPlan, Long> {
    Optional<SubscriptionPlan> findByName(PlanType name);
}