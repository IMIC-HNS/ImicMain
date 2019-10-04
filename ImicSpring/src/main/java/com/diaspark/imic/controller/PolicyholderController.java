package com.diaspark.imic.controller;

import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import com.diaspark.imic.model.ClaimDetails;
import com.diaspark.imic.model.ClaimStatus;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.ClaimService;
import com.diaspark.imic.service.PolicyholderRegisterService;
import com.diaspark.imic.service.UploadService;

/**
 * @author Nishi Agarwal
 *Controller for Policyholder complete registration with required mapping
 */
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/policyholder")
@PermitAll

public class PolicyholderController {
	

	  @Autowired
	  private PolicyholderRegisterService policyholderregisterService;
	
	  @Autowired 
	  private ClaimService claimService;
	  
	  @Autowired
	  private UploadService uploadService;
	  List<String> files = new ArrayList<String>();
	  

	 /**  
	 * Uploading aadhar document of policyHolder
	 * @param file
	 * @return the path of the aadhar document uploaded
	 */
	 @PostMapping("/uploadingfile")
	     public ResponseEntity<String> handleFileUpload(HttpServletResponse response, @RequestParam("file") MultipartFile file) {
	    	    String message = "";
	    	    try {
	    	      Path path = uploadService.store(file);
	    	      files.add(file.getOriginalFilename());
	    	      message = "You successfully uploaded " + file.getOriginalFilename() + "!";
	    	      return ResponseEntity.status(HttpStatus.OK).body(path.toFile().getAbsolutePath());
	    	      
	    	      }catch (Exception e) {
	    	      message = "FAIL to upload " + file.getOriginalFilename() + "!";
	    	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
	    	    }
	    	  }
  
	  /**
	   * Registering the policyholder with complete form
	   * @param userId
	   * @param policyholder
	   * @return PolicyHolder with created httpStatus
	  */
	  @PostMapping("/{userId}")
	  public ResponseEntity<PolicyHolder> registerPolicyholder(@PathVariable("userId") ObjectId userId, @RequestBody @Valid PolicyHolder policyholder) {
		PolicyHolder responsePolicyHolder = policyholderregisterService .registerPolicyholder(policyholder, userId);
		return new ResponseEntity<>(responsePolicyHolder, HttpStatus.CREATED);
		
	}
	  
	  @GetMapping("/{userId}")
	  public void showFile(HttpServletResponse response,@PathVariable ObjectId userId) throws FileNotFoundException, IOException
	  {
		  PolicyHolder policyHolder = policyholderregisterService.findUser(userId);
		  //response.setHeader("Content-Disposition", String.format("inline; filename=\"" + "\""));
		  FileCopyUtils.copy(new FileInputStream(new File(policyHolder.getAadharDoc())), response.getOutputStream());
		  response.flushBuffer();

	  }
	  @GetMapping("/claim/{userId}")
	  public void showClaimDoc(HttpServletResponse response,@PathVariable ObjectId userId) throws FileNotFoundException, IOException
	  {
		  PolicyHolder policyHolder = policyholderregisterService.findUser(userId);
		  //response.setHeader("Content-Disposition", String.format("inline; filename=\"" + "\""));
		  FileCopyUtils.copy(new FileInputStream(new File(policyHolder.getClaim().getFileUrl())), response.getOutputStream());
		  response.flushBuffer();

	  }
	  
	  @GetMapping("/claimed")
	  public List<PolicyHolder> getClaimDetails()
	  {
		return claimService.providePolicyHolders();  
	  }
	  
	@PostMapping("/claim/{userId}")
	public PolicyHolder setClaim(@RequestBody ClaimDetails claimDetails,@PathVariable ObjectId userId)
	{
		return claimService.claim(claimDetails,userId);
		
		
	}
	
//	
//	@PostMapping(value="/claim/{userId}")
//	public PolicyHolder changeClaimStatus(@RequestBody ClaimDetails claimDetail,@PathVariable("userId") ObjectId userId)
//	{
//		return claimService.updateUser(userId,claimDetail);
//	}
}
