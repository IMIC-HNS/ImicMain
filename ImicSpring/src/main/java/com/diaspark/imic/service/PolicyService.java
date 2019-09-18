package com.diaspark.imic.services;
import com.diaspark.imic.model.*;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;



@Component
public class PolicyService {

	public static List<Policy> policies = new ArrayList<>();
	static
	{
		policies.add(new Policy(1l,"Policy 1","Individual Mediclaim"));
		policies.add(new Policy(2l,"Policy 2","Senior citizen Mediclaim"));
		policies.add(new Policy(3l,"Policy 3","Low-cost Mediclaim"));
	}
	
	public List<Policy> retrievePolicies() {
		return policies;
}
}
