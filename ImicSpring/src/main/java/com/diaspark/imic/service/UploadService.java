/**
 * 
 */
package com.diaspark.imic.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Nishi Agarwal
 *
 */
@Service
public class UploadService {

	/**
	 * specifying the root directory for saving the files
	 */
	private final Path rootLocation = Paths.get("uploadFile");
	
	
	/**method for storing the uploaded file
	 * @param file
	 * @return save file to root location
	 */
	public Path store(MultipartFile file) {
		try {
			Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
			return this.rootLocation.resolve(file.getOriginalFilename());
		    } catch (Exception e) {
		      throw new RuntimeException("FAIL!");
		    }
		}
	
	 /**
	 * init method for creating file directory to the root location
	 */
	public void init() {
		    try {
		    	File dir = new File(rootLocation.toFile().getAbsolutePath());
		    	if(!dir.exists()) {
		      Files.createDirectory(rootLocation);
		    	}
		    } catch (IOException e) {
		      throw new RuntimeException("Could not initialize storage!");
		    }
		  }

}
