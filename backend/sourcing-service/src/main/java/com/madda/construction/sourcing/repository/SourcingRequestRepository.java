package com.madda.construction.sourcing.repository;

import com.madda.construction.sourcing.model.SourcingRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SourcingRequestRepository extends JpaRepository<SourcingRequest, Long> {
    List<SourcingRequest> findByUserId(Long userId);
}