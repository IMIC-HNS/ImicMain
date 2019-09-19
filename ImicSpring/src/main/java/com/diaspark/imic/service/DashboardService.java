<<<<<<< HEAD
/**
 * 
 */
=======
>>>>>>> origin/Admin
package com.diaspark.imic.service;

import java.util.List;

<<<<<<< HEAD
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;

/**
 * @author SHIVANGI RAI
 *
 */
@Service
public class DashboardService {

	
	@Autowired
	UserRepository userRepository;
	
	ipublic List<PolicyHolder> policyHolders(ObjectId userId)
			{
				return userRepository.findByCityAndPolicyHolder("Indore", Type.POLICYHOLDER.name());
			}
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
>>>>>>> origin/Admin
}
