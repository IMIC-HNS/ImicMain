package com.diaspark.imic.service;

import org.springframework.stereotype.Component;

import com.diaspark.imic.model.PolicyHolder;

/**
 * @author Nishi Agarwal
 * Service interface for contactus form
 */
@Component
public interface ContactusService {

	public PolicyHolder registerPolicyHolder(PolicyHolder policyholder);
}
