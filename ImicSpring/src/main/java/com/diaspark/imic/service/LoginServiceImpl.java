package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
import com.sun.xml.messaging.saaj.util.Base64;

/**
 * @author SHIVANGI RAI
 * Implementation of loginservice
 */

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	UserRepository userRepository;
	
	
	/** method for login user and decode the encoded password of the user
	 * @param loginUser
	 * @return user
	 */
	public User login(User loginUser) {
		User getUser=userRepository.findByEmail(loginUser.getEmail());
		String password = Base64.base64Decode(getUser.getPassword());
		if((getUser!=null) && (password.split("-")[0].equals(loginUser.getPassword()))){
			return getUser;
		}
		return null;
	
      }
	}