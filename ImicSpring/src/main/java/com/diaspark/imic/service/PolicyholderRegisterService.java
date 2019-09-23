package com.diaspark.imic.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
/**
 * @author Nishi Agarwal
 *
 */
@Service
public class PolicyholderRegisterService {
	
	@Autowired
	UserRepository userRepository;

	public PolicyHolder registerPolicyholder(PolicyHolder policyholder, ObjectId userId) {
		User user = userRepository.findById(userId).orElse(null);
		if(user == null) {
		  throw	new RestClientException("Not Authorized");
		}
		if(user.getType() == Type.AGENT)
		{
			policyholder.setAgentId(user.getId());
			policyholder.setStatus(Status.INITIALISED);
		}
		else
		{
		   policyholder.setStatus(Status.SUBMITTED);
		}
		userRepository.save(policyholder);
		return (PolicyHolder) userRepository.findById(policyholder.getId()).get();
		
	}
}
