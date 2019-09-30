package com.diaspark.imic.model;


/**
 * @author Himanshu Khatri
 * Policy model with getters and setters of the fields
 */
public class Policy {

	Long policyId;
	String policyName;
	String policyDescription;
	
	public Policy(Long policyId, String policyName, String description) {
		this.policyId = policyId;
		this.policyName = policyName;
		this.policyDescription = description;
	}
	/**
	 * @return policyId
	 */
	public Long getPolicyId() {
		return policyId;
	}
	/**
	 * @param policyId
	 */
	public void setPolicyId(Long policyId) {
		this.policyId = policyId;
	}
	
	/**
	 * @return policyName
	 */
	public String getPolicyname() {
		return policyName;
	}
	/**
	 * @param policyName
	 */
	public void setPolicyname(String policyName) {
		this.policyName = policyName;
	}
	/**
	 * @return policyDescription
	 */
	public String getDescription() {
		return policyDescription;
	}
	/**
	 * @param description
	 */
	public void setDescription(String description) {
		this.policyDescription = description;
	}
	
}
