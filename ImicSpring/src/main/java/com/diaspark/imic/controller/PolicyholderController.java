package com.diaspark.imic.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.service.PolicyholderRegisterService;
import com.diaspark.imic.service.UploadService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/policyholder")
@PermitAll
public class PolicyholderController {
	

	  @Autowired
	  private PolicyholderRegisterService policyholderregisterService;
	
	  @Autowired
	  private UploadService uploadService;
	  List<String> files = new ArrayList<String>();
	  
	  
	  @PostMapping("/uploadingfile")
	     public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
	    	    String message = "";
	    	    try {
	    	      Path path = uploadService.store(file);
	    	      files.add(file.getOriginalFilename());
	    	 
	    	      message = "You successfully uploaded " + file.getOriginalFilename() + "!";
	    	      return ResponseEntity.status(HttpStatus.OK).body(path.toFile().getAbsolutePath());
	    	    } catch (Exception e) {
	    	      message = "FAIL to upload " + file.getOriginalFilename() + "!";
	    	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
	    	    }
	    	  }
  
	@PostMapping("/{userId}")
	public ResponseEntity<PolicyHolder> registerPolicyholder(@PathVariable("userId") ObjectId userId, @RequestBody @Valid PolicyHolder policyholder) {
		PolicyHolder responsePolicyHolder = policyholderregisterService .registerPolicyholder(policyholder, userId);
		return new ResponseEntity<>(responsePolicyHolder, HttpStatus.CREATED);
		
	}
	
	
}
