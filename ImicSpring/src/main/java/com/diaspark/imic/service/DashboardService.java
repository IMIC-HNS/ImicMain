/**
 * 
 */
package com.diaspark.imic.service;

import java.util.List;

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
	
	public List<PolicyHolder> policyHolders(ObjectId userId)
			{
				return userRepository.findByCityAndPolicyHolder("Indore", Type.POLICYHOLDER.name());
			}
	

}
