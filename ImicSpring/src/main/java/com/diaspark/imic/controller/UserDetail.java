package com.diaspark.imic.controller;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.User;
import com.diaspark.imic.service.UserDetailService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/get")
public class UserDetail {

	@Autowired
	private UserDetailService userDetail;
	
	@GetMapping(value="/{userId}")
	public Optional<User> getDetails(@PathVariable ObjectId userId)
	{
		return userDetail.getUserDetails(userId);
	}
}
