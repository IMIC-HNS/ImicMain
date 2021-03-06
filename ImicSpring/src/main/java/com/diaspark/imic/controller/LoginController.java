/**
 * 
 */
package com.diaspark.imic.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.diaspark.imic.model.LoginUser;
import com.diaspark.imic.model.User;
import com.diaspark.imic.service.LoginService;
/**
 * @author SHIVANGI RAI
 *Controller for login user with required mapping
 */

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/login")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	
	/** login method forthe user to login
	 * @param loginUser
	 * @return loginuser
	 */
	 @PostMapping("/")
	 public User login(@RequestBody @Valid User loginUser) {
		return loginService.login(loginUser);
	 }

}
