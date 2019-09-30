package com.diaspark.imic.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.security.PermitAll;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.ClaimService;
import com.diaspark.imic.service.UploadService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/policyholder/claim")
@PermitAll
public class ClaimController {

	@Autowired
	private ClaimService claimService;
	
	@Autowired
	  private UploadService uploadService;
	  List<String> files = new ArrayList<String>();
	  
	  @PostMapping("/{userId}")
	  public PolicyHolder setClaimDetails(@PathVariable("userId") ObjectId policyHolderId)
	  {
		  return claimService.claim(policyHolderId);
	  }
}
