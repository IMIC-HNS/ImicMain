package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.repository.UserRepository;
/**
 * @author Nishi Agarwal
 * Implementation of contactus service
 */
@Service
public class ContactusServiceImpl implements ContactusService{

	@Autowired
	ContactusService contactusservice;
	
	@Autowired
	UserRepository userRepository;
	
	/** 
	 * method for register a new policyholder via contactus form
	 * @param policyholder
	 * @return save policyholder
	*/
	public PolicyHolder registerPolicyHolder(PolicyHolder policyholder) {
		policyholder.setStatus(Status.REQUESTED);
		policyholder.setType(Type.POLICYHOLDER);
		return userRepository.save(policyholder);
	}
	

}

