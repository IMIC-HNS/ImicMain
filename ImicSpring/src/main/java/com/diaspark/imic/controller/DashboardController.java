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
	
	@GetMapping(value="getByStatus")
	public List<PolicyHolder> getPolicyHolderByStatus()
	{
		return dashboard.providePolicyHolder(Status.SUBMITTED);
	}
	
	@PostMapping(value="decision/{userId}")
	public PolicyHolder changeStatus(@PathVariable("userId") ObjectId userId,@RequestParam("status") Status decided)
	{
		return dashboard.updateUser(decided, userId);
		
	}
}