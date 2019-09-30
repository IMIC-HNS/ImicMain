package com.diaspark.imic.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.ClaimStatus;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.repository.UserRepository;

@Service
public class ClaimService {

	@Autowired 
	private UserRepository userRepository;
	
	public PolicyHolder claim(ObjectId policyHolderId)
	{
		PolicyHolder holder=userRepository.findPolicyHolderById(policyHolderId);
		holder.setClaim(ClaimStatus.CLAIMED);
		userRepository.save(holder);
		return holder;
	}
}
