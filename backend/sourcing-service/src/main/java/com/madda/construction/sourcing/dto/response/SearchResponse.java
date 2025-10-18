package com.madda.construction.sourcing.dto.response;

import java.util.List;

public class SearchResponse {

    private List<SourcingRequestResponse> requests;
    private int currentPage;
    private int totalPages;
    private long totalItems;

    // Getters and Setters

    public List<SourcingRequestResponse> getRequests() {
        return requests;
    }

    public void setRequests(List<SourcingRequestResponse> requests) {
        this.requests = requests;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public long getTotalItems() {
        return totalItems;
    }

    public void setTotalItems(long totalItems) {
        this.totalItems = totalItems;
    }
}