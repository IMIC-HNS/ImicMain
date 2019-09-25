package com.diaspark.imic.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.PolicyholderRegisterService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/policyholder")
@PermitAll
public class PolicyholderController {
	

	@Autowired
	PolicyholderRegisterService policyholderregisterService;
	
	@PostMapping("/{userId}")
	public ResponseEntity<PolicyHolder> registerPolicyholder(@PathVariable("userId") ObjectId userId, @RequestBody @Valid PolicyHolder policyholder) {
		PolicyHolder responsePolicyHolder = policyholderregisterService .registerPolicyholder(policyholder, userId);
		return new ResponseEntity<>(responsePolicyHolder, HttpStatus.CREATED);
		
	}
	
	
}
