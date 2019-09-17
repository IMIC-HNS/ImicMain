/**
 * 
 */
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
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.RegisterService;

/**
 * @author SHIVANGI RAI
 *
 */
@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/register")
@PermitAll
public class RegisterController {


	@Autowired
	RegisterService registerService;
	
	@PostMapping("/agent")
	public ResponseEntity<Agent> registerAgent(@RequestBody @Valid Agent agent) {
		Agent responseAgent = registerService.registerAgent(agent);
		return new ResponseEntity<>(responseAgent, HttpStatus.CREATED);
		
	}
	
	
	
}
