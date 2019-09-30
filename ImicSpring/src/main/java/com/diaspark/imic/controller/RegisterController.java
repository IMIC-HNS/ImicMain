package com.diaspark.imic.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.Agent;
import com.diaspark.imic.service.RegisterService;

/**
 * @author SHIVANGI RAI
 *Controller for Register Agent with required mapping
 */

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/register")
@PermitAll
public class RegisterController {


	@Autowired
	RegisterService registerService;
	
	 /**Method for registering agent
	 * @param agent
	 * @return agent response with status created
	 */
	 @PostMapping("/agent")
	 public ResponseEntity<Agent> registerAgent(@RequestBody @Valid Agent agent) {
		Agent responseAgent = registerService.registerAgent(agent);
		return new ResponseEntity<>(responseAgent, HttpStatus.CREATED);
		
	 }
	
	
	
}
