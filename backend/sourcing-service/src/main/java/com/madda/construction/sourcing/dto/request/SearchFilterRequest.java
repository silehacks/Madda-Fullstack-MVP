package com.madda.construction.sourcing.dto.request;

import com.madda.construction.sourcing.model.enums.MaterialCategory;
import com.madda.construction.sourcing.model.enums.RequestStatus;

public class SearchFilterRequest {

    private MaterialCategory materialCategory;
    private RequestStatus status;
    private String keyword;

    // Getters and Setters

    public MaterialCategory getMaterialCategory() {
        return materialCategory;
    }

    public void setMaterialCategory(MaterialCategory materialCategory) {
        this.materialCategory = materialCategory;
    }

    public RequestStatus getStatus() {
        return status;
    }

    public void setStatus(RequestStatus status) {
        this.status = status;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}