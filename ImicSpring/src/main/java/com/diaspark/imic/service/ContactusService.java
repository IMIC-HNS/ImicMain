package com.diaspark.imic.service;

import org.springframework.stereotype.Component;

import com.diaspark.imic.model.PolicyHolder;

/**
 * @author Nishi Agarwal
 *
 */
@Component
public interface ContactusService {

	public PolicyHolder registerPolicyHolder(PolicyHolder policyholder);
}
