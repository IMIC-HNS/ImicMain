package com.diaspark.imic.model;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;

//import javax.validation.constraints.NotEmpty;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class Agent extends User{
	
	//@NotEmpty(message="firstName should not be empty")

	private String mobileNumber;
	private String city;
	private String dateOfBirth;
	
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
	 * @return the dateOfBirth
	 */
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	/**
	 * @param dateOfBirth the dateOfBirth to set
	 */
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	/**
	 * @return the policyHolders
	 */
	public List<PolicyHolder> getPolicyHolders() {
		return policyHolders;
	}
	
	public void addPolicyHolder(PolicyHolder policyHolder) {
		this.policyHolders.add(policyHolder);
	}
	
	
	
}
