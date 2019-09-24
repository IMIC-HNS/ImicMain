package com.diaspark.imic.service;

import java.util.Base64;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
/**
 * @author Nishi Agarwal
 *
 */
@Service
public class PolicyholderRegisterService {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	private MailsenderService mailsender;
	private String holderid;
	private String SALT="IMIC";
	private String link;

	public PolicyHolder registerPolicyholder(PolicyHolder policyholder, ObjectId userId) {
		User user = userRepository.findById(userId).orElse(null);
		if(user == null) {
		  throw	new RestClientException("Not Authorized");
		}
		if(user.getType() == Type.AGENT) {
			policyholder.setAgentId(new ObjectId(user.getId()));
			policyholder.setStatus(Status.INITIALISED);
			holderid = policyholder.getId().toString();
			this.holderid =	Base64.getEncoder().encodeToString((holderid + "-" + SALT).getBytes());
			link= "http://localhost:4200/registerpolicyholder/" + holderid;
			mailsender.sendEmail(policyholder,link);

			//localhost:4200/p/policyholder.getId();
			
		}
		else{
		   policyholder.setStatus(Status.SUBMITTED);
		}
		userRepository.save(policyholder);
		return (PolicyHolder) userRepository.findById(policyholder.getObjectId(policyholder.getId())).get();
		
	}
}
