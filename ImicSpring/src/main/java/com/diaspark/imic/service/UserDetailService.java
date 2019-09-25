package com.diaspark.imic.service;

import com.sun.xml.messaging.saaj.util.Base64;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.repository.UserRepository;

@Service
public class UserDetailService {

	@Autowired
	private UserRepository userRepository;
	
	PolicyHolder policyHolder;
	public PolicyHolder getUserDetails(String userId, boolean isEncoded)
	{
		if(isEncoded) {
			userId = Base64.base64Decode(userId);
		}
		if(userId!=null) {
			policyHolder=userRepository.findPolicyHolderById(new ObjectId(userId.split("-")[0]));
		}
		return policyHolder;
		//return userRepository.findById(userId);
		
	}

	
}
