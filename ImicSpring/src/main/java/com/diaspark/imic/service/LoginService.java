package com.diaspark.imic.service;

import javax.validation.Valid;

import org.springframework.stereotype.Component;

//import com.diaspark.imic.model.LoginUser;
import com.diaspark.imic.model.User;

/**
 * @author SHIVANGI RAI
 * Service interface for login user
 */
@Component

public interface LoginService {

	/**
	 * @param loginUser
	 * @return
	 */
	public User login(@Valid User loginUser);
}
