package com.diaspark.imic.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.diaspark.imic.model.User;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;

import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.model.Agent;
import com.diaspark.imic.repository.UserRepository;
import com.sun.xml.messaging.saaj.util.Base64;

/**
 * @author SHIVANGI RAI
 */
@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private MailsenderService mailSender;

    public List<User> providePolicyHolders(Type type) {
        return userRepository.findAllByType(type);
    }

    public List<User> provideAgents(Type type) {
        return userRepository.findAllByType(type);

    }

    public List<PolicyHolder> providePolicyHolder(Status submitted) {
        return userRepository.findByStatus(submitted);
    }

    public PolicyHolder updateUser(Status decided, ObjectId userId) {

        PolicyHolder user = (userRepository.findPolicyHolderById(userId));
        user.setStatus(decided);
        
        userRepository.save(user);
        mailSender.sendEmailToPolicyholder(user, Base64.base64Decode(user.getPassword()));
        return userRepository.findPolicyHolderById(userId);
    }

    public List<PolicyHolder> policyHolders(ObjectId userId) {
        User foundUser = userRepository.findUserById(userId);
        if (foundUser == null) {
            throw new ResourceAccessException("USER not found");
        }

        if (foundUser.getType().equals(Type.ADMIN)) {
            return userRepository.findAllByTypes(Type.POLICYHOLDER);
        } else if (foundUser.getType().equals(Type.AGENT)) {

            return userRepository.findByCityAndPolicyHolder("Indore", Type.POLICYHOLDER);

        } else
            return null;

    }


}


//TODO: Get user by id.
//Check user type.
// if user type is admin then return all policy holder.
//else user type is agent then return all policy holder by city of agent

