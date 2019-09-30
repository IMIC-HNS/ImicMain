/**
 * 
 */
package com.diaspark.imic.model;

import org.bson.types.ObjectId;

//import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

//import com.diaspark.imic.model.Nominee;
import com.diaspark.imic.model.User;

/**
 * @author Nishi agarwal
 *
 */
@Document(collection = "users")
public class PolicyHolder extends User{

	private ObjectId agentId;

	private String mobileNumber;
	private String city;
	private String policyNumber;
	private String aadhar;
	private String address;
	private String aadharDoc;
	private Status status;
	private ClaimStatus claim;
	private String dob;
	private Nominee nominee=new Nominee();
	
		public ObjectId getAgentId() {
		return agentId;
	}
	public void setAgentId(ObjectId agentId) {
		this.agentId = agentId;
	}
	public Nominee getNominee() {
		return nominee;
	}
	public void setNominee(Nominee nominee) {
		this.nominee = nominee;
	}
	
	public ClaimStatus getClaim() {
		return claim;
	}
	public void setClaim(ClaimStatus claim) {
		this.claim = claim;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	
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
	 * @return the policyNumber
	 */
	public String getPolicyNumber() {
		return policyNumber;
	}
	/**
	 * @param policyNumber the policyNumber to set
	 */
	public void setPolicyNumber(String policyNumber) {
		this.policyNumber = policyNumber;
	}
	/**
	 * @return the aadhar
	 */
	public String getAadhar() {
		return aadhar;
	}
	/**
	 * @param aadhar the aadhar to set
	 */
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
	/**
	 * @return the aadharDoc
	 */
	public String getAadharDoc() {
		return aadharDoc;
	}
	/**
	 * @param aadharDoc the aadharDoc to set
	 */
	public void setAadharDoc(String aadharDoc) {
		this.aadharDoc = aadharDoc;
	}
	/**
	 * @return the status
	 */
	
	
	public Status getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(Status status) {
		this.status = status;
	}

}
