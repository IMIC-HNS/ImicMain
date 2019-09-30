package com.diaspark.imic.service;
import com.diaspark.imic.model.*;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;

/**
 * @author Himanshu Khatri
 * PolicyService class for initializing the policies , which can be used throughout the application
 */
@Component
public class PolicyService {

	/**initializing the policies in static format
	 * @return policies
	 */
	public static List<Policy> policies = new ArrayList<>();
	static
	{
		policies.add(new Policy(1l,"Individual Mediclaim","An inidividual mediclaim policy offers health coverage to only the policyholder. Only one person can avail the medical insurance benefits against the premium paid. There are a number of health insurance companies that provide individual medicalim plans in India.\r\n" + 
				"The policy cover is 1500 per month.\r\n" + 
				"The policy premium is 1000 per month.\r\n" + 
				"The policy duration will be for lifetime and can be claimed whenever required due to any health issues. And policyholder can either contact us for that or directly to the hospital in which he/she will be admitted by showing the policydetails."));
		policies.add(new Policy(2l,"Senior citizen Mediclaim","Senior citizen health insurance plans are designed to cover hospitalization expenses incurred on the elderly people who have crossed the age of 60 years.\r\n" + 
				"The policy cover is 3000 per month\r\n" + 
				"The policy premium is 500 per month"));
		policies.add(new Policy(3l,"Low-cost Mediclaim","Low cost mediclaim policy provides health coverage which includes basic diseases and policyholder can claim for upto 50000 Rs annually. \r\n" + 
				"This policy can be for 5 years time frame or 15 years or lifetime.\r\n" + 
				"Policyholder can directly apply for claim by opening his/her account \r\n" + 
				"The policy cover is 2000 per month if for 5 years\r\n" + 
				"The policy cover is 1500 per month if for 15 years\r\n" + 
				"The policy cover is 1000 per month if for lifetime."));
	}
	
	public List<Policy> retrievePolicies() {
		return policies;
}
}
