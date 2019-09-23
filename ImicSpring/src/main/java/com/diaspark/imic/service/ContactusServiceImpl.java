package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.repository.UserRepository;
/**
 * @author Nishi Agarwal
 *
 */
@Service
public class ContactusServiceImpl implements ContactusService{

	@Autowired
	ContactusService contactusservice;
	
	@Autowired
	UserRepository userRepository;
	
	public PolicyHolder registerPolicyHolder(PolicyHolder policyholder) {
		policyholder.setStatus(Status.REQUESTED);
		return userRepository.save(policyholder);
		//return (PolicyHolder)userRepository.findByEmail(policyholder.getEmail());
	}
	

}

