package com.madda.construction.sourcing.dto.request;

import com.madda.construction.sourcing.model.enums.MaterialCategory;

public class CreateSourcingRequest {

    private MaterialCategory materialCategory;
    private String materialName;
    private Double quantity;
    private String unit;

    // Getters and Setters

    public MaterialCategory getMaterialCategory() {
        return materialCategory;
    }

    public void setMaterialCategory(MaterialCategory materialCategory) {
        this.materialCategory = materialCategory;
    }

    public String getMaterialName() {
        return materialName;
    }

    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}