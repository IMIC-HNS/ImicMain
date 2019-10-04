package com.diaspark.imic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.UserDetailService;

/**
 * @author Nishi Agarwal
 *Controller for getting the user details with required mapping
 */
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/user")
public class UserDetail {

	@Autowired
	private UserDetailService userDetail;
	
	/**autofill details of policyholder via get mapping
	 * @param userId
	 * @param isEncoded
	 * @return userdetails
	 */
	 @GetMapping(value="/{userId}/{isEncoded}")
	 public PolicyHolder getDetails(@PathVariable("userId") String userId, @PathVariable("isEncoded") boolean isEncoded){
		 if(userId==null)
			 return null;
		 return userDetail.getUserDetails(userId, isEncoded);
	 }
	
}
