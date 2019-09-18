/**
 * 
 */
package com.diaspark.imic.service;

import javax.validation.Valid;

import org.springframework.stereotype.Component;

//import com.diaspark.imic.model.LoginUser;
import com.diaspark.imic.model.User;

/**
 * @author SHIVANGI RAI
 *
 */
@Component
//@Service

public interface LoginService {

	

	public User login(@Valid User loginUser);
}
