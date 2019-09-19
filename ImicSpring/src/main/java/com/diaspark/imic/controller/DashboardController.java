/**
 * 
 */
package com.diaspark.imic.controller;

import java.util.List;

<<<<<<< HEAD
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.DashboardService;

/**
 * @author SHIVANGI RAI
 *
 */
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/dashboard/")
public class DashboardController {

	@Autowired
	DashboardService dashboardService;
	
	@GetMapping("{userId}/policyHolders")
	public List<PolicyHolder> listofPH(@PathVariable ObjectId userId)
	{
		return dashboardService.policyHolders(userId);
		
		
	}
=======
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.service.DashboardService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(value="/")
public class DashboardController {

	@Autowired
	private DashboardService dashboard;
	
	@GetMapping(value="getAgents")
	public List<User> getAgent()
	{
		return dashboard.provideAgents(Type.AGENT);
	}
	
	@GetMapping(value="getPolicyHolder")
	public List<User> getPolicyHolder()
	{
		return dashboard.providePolicyHolders(Type.POLICYHOLDER);
	}
	
>>>>>>> origin/Admin
}
