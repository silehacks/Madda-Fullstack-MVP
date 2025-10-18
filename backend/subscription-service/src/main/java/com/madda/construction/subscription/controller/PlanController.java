package com.madda.construction.subscription.controller;

import com.madda.construction.subscription.dto.response.PlanResponse;
import com.madda.construction.subscription.model.SubscriptionPlan;
import com.madda.construction.subscription.service.PlanService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/plans")
public class PlanController {

    private final PlanService planService;

    public PlanController(PlanService planService) {
        this.planService = planService;
    }

    @GetMapping
    public ResponseEntity<List<PlanResponse>> getAllPlans() {
        List<SubscriptionPlan> plans = planService.getAllPlans();
        return ResponseEntity.ok(plans.stream().map(this::toPlanResponse).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlanResponse> getPlanById(@PathVariable Long id) {
        SubscriptionPlan plan = planService.getPlanById(id);
        if (plan == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toPlanResponse(plan));
    }

    private PlanResponse toPlanResponse(SubscriptionPlan plan) {
        PlanResponse planResponse = new PlanResponse();
        planResponse.setId(plan.getId());
        planResponse.setName(plan.getName());
        planResponse.setPrice(plan.getPrice());
        planResponse.setRequestLimit(plan.getRequestLimit());
        return planResponse;
    }
}