package com.diaspark.imic.model;

/**
 * @author Nishi Agarwal
 * Nominee class containing setteers and getters for the fields
 */
public class Nominee {
	
    private String nomine;
	private String relationship;
	private String aadharNumber;
	
	/**
	 * @return the nomine
	 */
	public String getNomine() {
		return nomine;
	}
	
	/**
	 * @param nomine
	 */
	public void setNomine(String nomine) {
		this.nomine = nomine;
	}
	
	/** 
	 * @return the relationship
	 */
	public String getRelationship() {
		return relationship;
	}
	/**
	 * @param relationship
	 */
	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}
	/**
	 * @return the aadharnumber
	 */
	public String getAadharNumber() {
		return aadharNumber;
	}
	/**
	 * @param aadharNumber
	 */
	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}
}
