package com.diaspark.imic.service;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.User;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.repository.UserRepository;

@Service
public class DashboardService {
	
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> provideAgents(Type type)
	{
		return userRepository.findAllByType(type);
		
	}
	
	public List<User> providePolicyHolders(Type type)
	{
		return userRepository.findAllByType(type);
	}

	public List<PolicyHolder> providePolicyHolder(Status submitted) {
		// TODO Auto-generated method stub
//		submitted=Status.REQUESTED;
		return userRepository.findByStatus(submitted);
	}

	public PolicyHolder updateUser(Status decided, ObjectId userId) {
		// TODO Auto-generated method stub
		
		PolicyHolder user = (PolicyHolder)(userRepository.findById(userId).get());
		user.setStatus(decided);
		return user;
	}
}
