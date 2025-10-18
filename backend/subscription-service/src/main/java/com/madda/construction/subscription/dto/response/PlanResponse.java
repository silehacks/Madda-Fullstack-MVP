package com.madda.construction.subscription.dto.response;

import com.madda.construction.subscription.model.enums.PlanType;

public class PlanResponse {

    private Long id;
    private PlanType name;
    private Double price;
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