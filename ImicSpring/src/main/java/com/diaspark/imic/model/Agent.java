package com.diaspark.imic.model;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Shivangi Rai
 * Agent model(extends User model) with getters and setters of the fields
 */
@Document(collection = "users")
public class Agent extends User{
	
	private String mobileNumber;
	private String city;
	private String dob;
	
	@DBRef(lazy = true)
	private List<PolicyHolder> policyHolders = new ArrayList();
	
	/**
	 * @return the mobileNumber
	 */
	public String getMobileNumber() {
		return mobileNumber;
	}
	/**
	 * @param mobileNumber the mobileNumber to set
	 */
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	
	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}
	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}
	
	
	/**
	 * @return the dob
	 */
	public String getDob() {
		return dob;
	}
	/**
	 * @param dob the dob to set
	 */
	public void setDob(String dob) {
		this.dob = dob;
	}
	
	/**
	 * @return the policyHolders
	 */
	public List<PolicyHolder> getPolicyHolders() {
		return policyHolders;
	}
	/**
	 * @param policyHolder
	 */
	public void addPolicyHolder(PolicyHolder policyHolder) {
		this.policyHolders.add(policyHolder);
	}
	
	
	
}
