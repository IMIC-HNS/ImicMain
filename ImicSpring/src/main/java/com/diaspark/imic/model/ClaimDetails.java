/**
 * 
 */
package com.diaspark.imic.model;

/**
 * @author SHIVANGI RAI
 *
 */
public class ClaimDetails {

	private String chequeDetails;
	private String fileUrl;
	private String amount;
	private ClaimStatus status;
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getChequeDetails() {
		return chequeDetails;
	}
	public void setChequeDetails(String chequeDetails) {
		this.chequeDetails = chequeDetails;
	}
	public String getFileUrl() {
		return fileUrl;
	}
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	public ClaimStatus getStatus() {
		return status;
	}
	public void setStatus(ClaimStatus status) {
		this.status = status;
	}
	
	
	
	
}
