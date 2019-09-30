package com.diaspark.imic.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.PolicyHolder;

import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;

import com.diaspark.imic.model.User;
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
	private DashboardService dashboardService;

	@GetMapping("{userId}/policyHolders")
	public List<PolicyHolder> listofPH(@PathVariable("userId") ObjectId userId)
	{
		return dashboardService.policyHolders(userId);


	}
	
	@GetMapping(value="getAgents")
	public List<User> getAgent()
	{
		return dashboardService.provideAgents(Type.AGENT);
	}

	@GetMapping(value="{city}")
	public List<PolicyHolder> getPolicyHolder(@PathVariable("city") String city,@RequestParam("type") Type type)
	{
		return dashboardService.getPolicyHolders(city,type);
	}
	@GetMapping(value="getPolicyHolder")
	public List<User> getPolicyHolder()
	{
		return dashboardService.providePolicyHolders(Type.POLICYHOLDER);
	}
	
	@GetMapping(value="getByStatus")
	public List<PolicyHolder> getPolicyHolderByStatus(@RequestParam("status") Status required )
	{
		return dashboardService.providePolicyHolder(required);
	}

	@PostMapping(value="decision/{userId}")
	public PolicyHolder changeStatus(@PathVariable("userId") ObjectId userId,@RequestParam("status") Status decided)
	{
		return dashboardService.updateUser(decided, userId);
		
	}
}
