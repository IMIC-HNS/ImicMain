package com.diaspark.imic.model;


public class Policy {

	Long policyId;
	String policyName;
	String policyDescription;
	public Long getPolicyId() {
		return policyId;
	}
	public Policy(Long policyId, String policyName, String description) {
		this.policyId = policyId;
		this.policyName = policyName;
		this.policyDescription = description;
	}
	public void setPolicyId(Long policyId) {
		this.policyId = policyId;
	}
	public String getPolicyname() {
		return policyName;
	}
	public void setPolicyname(String policyName) {
		this.policyName = policyName;
	}
	public String getDescription() {
		return policyDescription;
	}
	public void setDescription(String description) {
		this.policyDescription = description;
	}
	
}
