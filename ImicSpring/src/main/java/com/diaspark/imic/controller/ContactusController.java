/**
 * 
 */
package com.diaspark.imic.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.ContactusService;

/**
 * @author Nishi Agarwal
 *
 */
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/contactus")
public class ContactusController {
	@Autowired
	ContactusService contactusService;
	
	@PostMapping("/")
	public ResponseEntity<PolicyHolder> registerPolicyHolder(@RequestBody @Valid PolicyHolder policyholder ) {
		PolicyHolder responsePolicyHolder = contactusService.registerPolicyHolder(policyholder);
		return new ResponseEntity<>(responsePolicyHolder, HttpStatus.CREATED);
		
	}

}
