package com.diaspark.imic.service;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.diaspark.imic.model.Agent;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
import com.sun.xml.messaging.saaj.util.Base64;

/**
 * @author SHIVANGI RAI
 * Service class for implementing dashboard
 */
@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private MailsenderService mailSender;

    /**
     * method to return list of policyholders
     * @param type
     * @return user by type
     */
    public List<User> providePolicyHolders(Type type) {
        return userRepository.findAllByType(type);
    }

    /**
     * method to return list of agents
     * @param type
     * @return user by type
     */
    public List<User> provideAgents(Type type) {
        return userRepository.findAllByType(type);

    }
    

    /**
     * method to return list of policyholders
     * @param submitted
     * @return user by status
     */
    public List<PolicyHolder> providePolicyHolder(Status submitted) {
        return userRepository.findByStatus(submitted);
    }

    /** 
     * method to update the policyholders
     * @param decided
     * @param userId
     * @return policyholders by id
     */
    public PolicyHolder updateUser(Status decided, ObjectId userId) {

        PolicyHolder user = (userRepository.findPolicyHolderById(userId));
        user.setStatus(decided);
        
        userRepository.save(user);
        mailSender.sendEmailToPolicyholder(user, Base64.base64Decode(user.getPassword()).split("-")[0]);
        return userRepository.findPolicyHolderById(userId);
    }

    
    /**
     * method to return list of policyholders
     * @param userId
     * @return list of policyholders according to the type 
     */
    public List<PolicyHolder> policyHolders(ObjectId userId) {
        User foundUser = userRepository.findUserById(userId);
        if (foundUser == null) {
            throw new ResourceAccessException("USER not found");
        }
        if (foundUser.getType().equals(Type.ADMIN)) {
            return userRepository.findAllByTypes(Type.POLICYHOLDER);
        } else if (foundUser.getType().equals(Type.AGENT)) {
        		Agent foundAgent=(Agent)(foundUser);
            return userRepository.findByCityAndPolicyHolder(foundAgent.getCity(), Type.POLICYHOLDER);

        } else
            return null;

    }

	/**
	 * method to return policyholder by city and type
	 * @param city
	 * @param type
	 * @return user policyholder by city and type
	 */
	public List<PolicyHolder> getPolicyHolders(String city,Type type) {
		return userRepository.findByCityAndType(city,type);
	}


}

