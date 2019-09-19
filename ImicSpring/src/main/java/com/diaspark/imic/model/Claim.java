/**
 * 
 */
package com.diaspark.imic.model;

/**
 * @author SHIVANGI RAI
 *
 */
public class Claim {

	private ClaimStatus status;
	private String chequeDetails;
	private String fileUrl;
	/**
	 * @return the status
	 */
	public ClaimStatus getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(ClaimStatus status) {
		this.status = status;
	}
	/**
	 * @return the chequeDetails
	 */
	public String getChequeDetails() {
		return chequeDetails;
	}
	/**
	 * @param chequeDetails the chequeDetails to set
	 */
	public void setChequeDetails(String chequeDetails) {
		this.chequeDetails = chequeDetails;
	}
	/**
	 * @return the fileUrl
	 */
	public String getFileUrl() {
		return fileUrl;
	}
	/**
	 * @param fileUrl the fileUrl to set
	 */
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	
	
}
