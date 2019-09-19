package com.diaspark.imic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.User;
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
}
