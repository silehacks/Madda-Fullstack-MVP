package com.madda.construction.sourcing.service;

import com.madda.construction.sourcing.dto.request.CreateSourcingRequest;
import com.madda.construction.sourcing.model.SourcingRequest;
import com.madda.construction.sourcing.model.enums.RequestStatus;
import com.madda.construction.sourcing.repository.SourcingRequestRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SourcingService {

    private final SourcingRequestRepository sourcingRequestRepository;

    public SourcingService(SourcingRequestRepository sourcingRequestRepository) {
        this.sourcingRequestRepository = sourcingRequestRepository;
    }

    public SourcingRequest createSourcingRequest(CreateSourcingRequest createSourcingRequest, Long userId) {
        SourcingRequest sourcingRequest = new SourcingRequest();
        sourcingRequest.setUserId(userId);
        sourcingRequest.setMaterialCategory(createSourcingRequest.getMaterialCategory());
        sourcingRequest.setMaterialName(createSourcingRequest.getMaterialName());
        sourcingRequest.setQuantity(createSourcingRequest.getQuantity());
        sourcingRequest.setUnit(createSourcingRequest.getUnit());
        sourcingRequest.setStatus(RequestStatus.OPEN);
        sourcingRequest.setCreatedAt(LocalDateTime.now());
        return sourcingRequestRepository.save(sourcingRequest);
    }

    public List<SourcingRequest> getAllSourcingRequests() {
        return sourcingRequestRepository.findAll();
    }

    public List<SourcingRequest> getSourcingRequestsByUserId(Long userId) {
        return sourcingRequestRepository.findByUserId(userId);
    }

    public SourcingRequest getSourcingRequestById(Long id) {
        return sourcingRequestRepository.findById(id).orElse(null);
    }
}