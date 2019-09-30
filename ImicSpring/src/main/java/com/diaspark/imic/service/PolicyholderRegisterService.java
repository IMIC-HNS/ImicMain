package com.diaspark.imic.service;

import java.util.Base64;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;

import com.diaspark.imic.model.Agent;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
/**
 * @author Nishi Agarwal
 * Implementing the service for registering the Policyholder
 */

@Service
public class PolicyholderRegisterService {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	private MailsenderService mailSender;
	private String holderId;
	private String SALT="IMIC";
	private String link;

	/**
	 * method for register policyholder with updating the status of his/her policy and also send mail
	 * @param policyHolder
	 * @param userId
	 * @return register policyholder  
	 */
	public PolicyHolder registerPolicyholder(PolicyHolder policyHolder, ObjectId userId) {
		User user = userRepository.findById(userId).orElse(null);
		if(user == null) {
		  throw	new RestClientException("Not Authorized");
		}
		if(user.getType() == Type.AGENT) {
			Agent agent = (Agent) user;
			policyHolder.setAgentId(new ObjectId(user.getId()));
			policyHolder.setPassword("IMIC" + policyHolder.getLastName());
			policyHolder.updatePassword();
			policyHolder.setStatus(Status.INITIALISED);
			holderId = policyHolder.getId().toString();
			
			this.holderId =	Base64.getEncoder().encodeToString((holderId + "-" + SALT).getBytes());
			link= "http://imic-hns.ap-south-1.elasticbeanstalk.com/registerpolicyholder/" + holderId;
			mailSender.sendEmail(policyHolder,link);

			//localhost:4200/p/policyholder.getId();
			agent.addPolicyHolder(policyHolder);
			userRepository.save(agent);
			
		}
		else{
			PolicyHolder foundPolicyHolder =userRepository.findPolicyHolderById(policyHolder.getObjectId(policyHolder.getId()));
			policyHolder.setAgentId(foundPolicyHolder.getAgentId());
			policyHolder.setPassword(foundPolicyHolder.getPassword());
			policyHolder.setType(Type.POLICYHOLDER);
			policyHolder.setStatus(Status.SUBMITTED);
		}
		userRepository.save(policyHolder);
		return (PolicyHolder) userRepository.findById(policyHolder.getObjectId(policyHolder.getId())).get();
		
	}
}
