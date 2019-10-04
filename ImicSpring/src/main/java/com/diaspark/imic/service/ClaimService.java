package com.diaspark.imic.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.ClaimDetails;
import com.diaspark.imic.model.ClaimStatus;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.repository.UserRepository;

@Service
public class ClaimService {

	@Autowired 
	private UserRepository userRepository;
	
	@Autowired 
	private MailsenderService mailSenderService;
	public PolicyHolder claim(ClaimDetails claim, ObjectId policyHolderId)
	{
		PolicyHolder holder=userRepository.findPolicyHolderById(policyHolderId);
		//claim.setStatus(ClaimStatus.CLAIMED);
		holder.setClaim(claim);
		userRepository.save(holder);
		return holder;
	}

	public PolicyHolder updateUser(ObjectId userId, ClaimDetails claimDetail) {
		PolicyHolder holder=userRepository.findPolicyHolderById(userId);
		holder.setClaim(claimDetail);
		mailSenderService.sendClaimEmail(holder);
		userRepository.save(holder);
		// TODO Auto-generated method stub
		return null;
	}

	public List<PolicyHolder> providePolicyHolders() {
		// TODO Auto-generated method stub
		return userRepository.findPolicyHoldersByClaimStatus(ClaimStatus.CLAIMED);
	}
}
