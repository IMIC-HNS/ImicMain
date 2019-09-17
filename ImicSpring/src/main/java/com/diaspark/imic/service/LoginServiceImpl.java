/**
 * 
 */
package com.diaspark.imic.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

//import com.diaspark.imic.model.LoginUser;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;

/**
 * @author SHIVANGI RAI
 *
 */

@Service
public class LoginServiceImpl implements LoginService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(LoginServiceImpl.class);

	@Autowired
	UserRepository userRepository;
	
	
	public User login(User loginUser) {
		
		
		User getUser=userRepository.findByEmail(loginUser.getEmail());
		if((getUser!=null) && (getUser.getPassword().equals(((Integer)loginUser.getPassword().hashCode()).toString())))
		{	
//			if(getUser.getPassword().equals(((Integer)loginUser.getPassword().hashCode()).toString()))
//				{
			System.out.println("HI");
					return getUser;
					
//				}
		}
			else
		{
			return null;
		}
	}
}
