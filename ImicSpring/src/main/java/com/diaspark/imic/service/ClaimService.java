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

    public PolicyHolder claim(ClaimDetails claim, ObjectId policyHolderId) {
        PolicyHolder holder = userRepository.findPolicyHolderById(policyHolderId);
        holder.setClaim(claim);
        userRepository.save(holder);
        if (ClaimStatus.APPROVED.equals(claim.getStatus())) {
            mailSenderService.sendApprovedClaimEmail(holder);
        } else if (ClaimStatus.REJECTED.equals(claim.getStatus())) {
			mailSenderService.sendRejectedClaimEmail(holder);
		}
        return holder;
    }

    public List<PolicyHolder> providePolicyHolders() {
        // TODO Auto-generated method stub
        return userRepository.findPolicyHoldersByClaimStatus(ClaimStatus.CLAIMED);
    }
}
