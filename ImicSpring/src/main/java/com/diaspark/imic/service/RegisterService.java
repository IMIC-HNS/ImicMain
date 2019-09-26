package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.diaspark.imic.model.Agent;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;

/**
 * @author SHIVANGI RAI
 *
 */
@Service
//@Component
public class RegisterService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	private MailsenderService mailSender;
	

	public Agent registerAgent(Agent agent) {
		User user = userRepository.findByEmail(agent.getEmail());
		if(user == null)
		{
			//agent.updatePassword();
			agent.setType(Type.AGENT);
			agent.setPassword("IMIC" + agent.getLastName());
			mailSender.sendEmailToAgent(agent, agent.getPassword());
			agent.updatePassword();
			return userRepository.save(agent);
		}
		else
		{
			return null;
		}
	}
	
	
}
