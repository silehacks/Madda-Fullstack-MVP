package com.madda.construction.subscription.model;

import com.madda.construction.subscription.model.enums.PlanType;
import jakarta.persistence.*;

@Entity
@Table(name = "subscription_plans")
public class SubscriptionPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private PlanType name;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Integer requestLimit;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PlanType getName() {
        return name;
    }

    public void setName(PlanType name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getRequestLimit() {
        return requestLimit;
    }

    public void setRequestLimit(Integer requestLimit) {
        this.requestLimit = requestLimit;
    }
}