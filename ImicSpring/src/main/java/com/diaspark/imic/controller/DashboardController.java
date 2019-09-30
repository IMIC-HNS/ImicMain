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
 * Controller for Dashboard with required mapping
 */
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/dashboard/")
public class DashboardController {

	@Autowired
	private DashboardService dashboardService;

	/** 
	 * ListofPH method to provide list of policyholders
	 * @param userId
	 * @return list of policyholders by id
	 */
	@GetMapping("{userId}/policyHolders")
	public List<PolicyHolder> listofPH(@PathVariable("userId") ObjectId userId)
	{
		return dashboardService.policyHolders(userId);


	}
	
	/**
	 * getAgents provides list of user type agent
	 * @return list of agents
	 */
	@GetMapping(value="getAgents")
	public List<User> getAgent()
	{
		return dashboardService.provideAgents(Type.AGENT);
	}

	/**
	 * getPolicyholders provides policyholders by city and type
	 * @param city
	 * @param type
	 * @return policyholders by city and type
	 */
	@GetMapping(value="{city}")
	public List<PolicyHolder> getPolicyHolders(@PathVariable("city") String city,@RequestParam("type") Type type)
	{
		return dashboardService.getPolicyHolders(city, type);
	}
	/**getting list of users
	 * @return policyholders with type policyHolder on dashboard
	 */
	@GetMapping(value="getPolicyHolder")
	public List<User> getPolicyHolder()
	{
		return dashboardService.providePolicyHolders(Type.POLICYHOLDER);
	}
	
	/**getting list of policyholders
	 * @return policyholders with status submitted on dashboard
	 */
	@GetMapping(value="getByStatus")
	public List<PolicyHolder> getPolicyHolderByStatus(@RequestParam("status") Status required )
	{
		return dashboardService.providePolicyHolder(required);
	}

	/**method for change status
	 * @param userId
	 * @param decided
	 * @return user
	 */
	@PostMapping(value="decision/{userId}")
	public PolicyHolder changeStatus(@PathVariable("userId") ObjectId userId,@RequestParam("status") Status decided)
	{
		return dashboardService.updateUser(decided, userId);
		
	}
}
