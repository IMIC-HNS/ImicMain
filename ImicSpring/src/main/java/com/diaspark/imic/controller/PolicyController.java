package com.diaspark.imic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.Policy;
import com.diaspark.imic.service.PolicyService;

/**
 * @author Himanshu Khatri
 *Controller for getting the policies throughout the application with required mapping
 */
@RestController 
@CrossOrigin(origins = "*")
@RequestMapping("/api/")
public class PolicyController {

	@Autowired
	private PolicyService policyService;
	
	/** method for retreiving the details of policies
	 * @return policyService for retrieving the policies
	 */
	 @GetMapping(value="policies")
	 public List<Policy> retreivePolicy()
	 {	System.out.println(policyService.retrievePolicies());
		return policyService.retrievePolicies();
	 }
}
