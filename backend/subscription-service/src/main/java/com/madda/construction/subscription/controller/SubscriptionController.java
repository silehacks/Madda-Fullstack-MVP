package com.madda.construction.subscription.controller;

import com.madda.construction.subscription.dto.request.SubscribeRequest;
import com.madda.construction.subscription.dto.response.SubscriptionResponse;
import com.madda.construction.subscription.model.Subscription;
import com.madda.construction.subscription.service.SubscriptionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/subscriptions")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @PostMapping
    public ResponseEntity<SubscriptionResponse> subscribe(@RequestBody SubscribeRequest subscribeRequest, @RequestHeader("X-auth-user-id") Long userId) {
        Subscription subscription = subscriptionService.subscribe(userId, subscribeRequest.getPlanId());
        return ResponseEntity.ok(toSubscriptionResponse(subscription));
    }

    @GetMapping("/me")
    public ResponseEntity<SubscriptionResponse> getMySubscription(@RequestHeader("X-auth-user-id") Long userId) {
        Subscription subscription = subscriptionService.getSubscriptionByUserId(userId);
        if (subscription == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toSubscriptionResponse(subscription));
    }

    private SubscriptionResponse toSubscriptionResponse(Subscription subscription) {
        SubscriptionResponse subscriptionResponse = new SubscriptionResponse();
        subscriptionResponse.setId(subscription.getId());
        subscriptionResponse.setUserId(subscription.getUserId());
        subscriptionResponse.setPlanId(subscription.getPlan().getId());
        subscriptionResponse.setPlanName(subscription.getPlan().getName().toString());
        subscriptionResponse.setStatus(subscription.getStatus());
        subscriptionResponse.setStartDate(subscription.getStartDate());
        subscriptionResponse.setEndDate(subscription.getEndDate());
        return subscriptionResponse;
    }
}