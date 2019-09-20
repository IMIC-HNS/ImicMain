
package com.diaspark.imic.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.model.Agent;
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
					User founduserbyid= userRepository.findUserById(userId); 
					
					if(founduserbyid.getType().equals(Type.ADMIN))
					{
						return userRepository.findAllByType(Type.POLICYHOLDER);			
					}		
					else if(founduserbyid.getType().equals(Type.AGENT))
					{
						
						return userRepository.findByCityAndPolicyHolder("Indore", Type.POLICYHOLDER);
						//return userRepository.findByCity(Type.POLICYHOLDER);
					}
				//return userRepository.findByCityAndPolicyHolder("Indore", Type.POLICYHOLDER.name());
					else	
				return null;
						//userRepository.findByCity(Type.POLICYHOLDER);
			}

}


//TODO: Get user by id.
//Check user type.
// if user type is admin then return all policy holder.
//else user type is agent then return all policy holder by city of agent

