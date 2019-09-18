package com.diaspark.imic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.Policy;
import com.diaspark.imic.services.PolicyService;

@RestController 
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class PolicyController {

	@Autowired
	private PolicyService policyService;
	
	@GetMapping(value="policies")
	public List<Policy> retreivePolicy()
	{	System.out.println(policyService.retrievePolicies());
		return policyService.retrievePolicies();
	}
}
