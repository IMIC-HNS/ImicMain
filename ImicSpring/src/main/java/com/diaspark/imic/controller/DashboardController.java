/**
 * 
 */
package com.diaspark.imic.controller;

import java.util.List;

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
}
