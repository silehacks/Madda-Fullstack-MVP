package com.madda.construction.sourcing.controller;

import com.madda.construction.sourcing.dto.request.CreateSourcingRequest;
import com.madda.construction.sourcing.dto.response.SourcingRequestResponse;
import com.madda.construction.sourcing.model.SourcingRequest;
import com.madda.construction.sourcing.service.SourcingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/sourcing")
public class SourcingController {

    private final SourcingService sourcingService;

    public SourcingController(SourcingService sourcingService) {
        this.sourcingService = sourcingService;
    }

    @PostMapping
    public ResponseEntity<SourcingRequestResponse> createSourcingRequest(@RequestBody CreateSourcingRequest createSourcingRequest, @RequestHeader("X-auth-user-id") Long userId) {
        SourcingRequest sourcingRequest = sourcingService.createSourcingRequest(createSourcingRequest, userId);
        return ResponseEntity.ok(toSourcingRequestResponse(sourcingRequest));
    }

    @GetMapping
    public ResponseEntity<List<SourcingRequestResponse>> getAllSourcingRequests() {
        List<SourcingRequest> sourcingRequests = sourcingService.getAllSourcingRequests();
        return ResponseEntity.ok(sourcingRequests.stream().map(this::toSourcingRequestResponse).collect(Collectors.toList()));
    }

    @GetMapping("/my-requests")
    public ResponseEntity<List<SourcingRequestResponse>> getMySourcingRequests(@RequestHeader("X-auth-user-id") Long userId) {
        List<SourcingRequest> sourcingRequests = sourcingService.getSourcingRequestsByUserId(userId);
        return ResponseEntity.ok(sourcingRequests.stream().map(this::toSourcingRequestResponse).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<SourcingRequestResponse> getSourcingRequestById(@PathVariable Long id) {
        SourcingRequest sourcingRequest = sourcingService.getSourcingRequestById(id);
        if (sourcingRequest == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toSourcingRequestResponse(sourcingRequest));
    }

    private SourcingRequestResponse toSourcingRequestResponse(SourcingRequest sourcingRequest) {
        SourcingRequestResponse sourcingRequestResponse = new SourcingRequestResponse();
        sourcingRequestResponse.setId(sourcingRequest.getId());
        sourcingRequestResponse.setUserId(sourcingRequest.getUserId());
        sourcingRequestResponse.setMaterialCategory(sourcingRequest.getMaterialCategory());
        sourcingRequestResponse.setMaterialName(sourcingRequest.getMaterialName());
        sourcingRequestResponse.setQuantity(sourcingRequest.getQuantity());
        sourcingRequestResponse.setUnit(sourcingRequest.getUnit());
        sourcingRequestResponse.setStatus(sourcingRequest.getStatus());
        sourcingRequestResponse.setCreatedAt(sourcingRequest.getCreatedAt());
        return sourcingRequestResponse;
    }
}