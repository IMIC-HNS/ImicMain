package com.diaspark.imic.service;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.diaspark.imic.controller.PolicyHolder;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;

@Service
public class UserDetailService {

	@Autowired
	private UserRepository userRepository;
	
	public Optional<User> getUserDetails(ObjectId userId, boolean isEncoded)
	{
		if(isEncoded) {
			userId = null;//decode id
		}
		return userRepository.findById(userId);
		
	}

	
}
