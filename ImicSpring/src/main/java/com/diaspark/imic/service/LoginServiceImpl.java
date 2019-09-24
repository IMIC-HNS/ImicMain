/**
 * 
 */
package com.diaspark.imic.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.Type;
//import com.diaspark.imic.model.LoginUser;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
import com.sun.xml.messaging.saaj.util.Base64;

/**
 * @author SHIVANGI RAI
 *
 */

@Service
public class LoginServiceImpl implements LoginService {
	
	//private static final Logger LOGGER = LoggerFactory.getLogger(LoginServiceImpl.class);

	@Autowired
	UserRepository userRepository;
	
	
	public User login(User loginUser) {
		
		

		User getUser=userRepository.findByEmail(loginUser.getEmail());
		String password = Base64.base64Decode(getUser.getPassword());
		if((getUser!=null) && (password.split("-")[0].equals(loginUser.getPassword())))

		//if((getUser!=null) && (getUser.getPassword().equals(loginUser.getPassword())))
		{
			return getUser;
		}
		return null;
	
}}