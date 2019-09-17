/**
 * 
 */
package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.LoginUser;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;

/**
 * @author SHIVANGI RAI
 *
 */
@Component
//@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	LoginService loginService;

	@Autowired
	UserRepository userRepository;
	
	public User login(LoginUser loginUser) {
		
		User getUser=userRepository.findByEmail(loginUser.getEmail());
		if(getUser.getPassword().equals(((Integer)loginUser.getPassword().hashCode()).toString()))
				{
					return getUser;
				}
		else
		{
			return null;
		}
	}
}
