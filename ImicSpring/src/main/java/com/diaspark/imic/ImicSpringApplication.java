package com.diaspark.imic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.event.EventListener;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.diaspark.imic.model.Admin;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
import com.diaspark.imic.service.UploadService;

/**
 * @author Shivangi Rai
 *Main Method of the springboot application
 */
@SpringBootApplication
@Controller
public class ImicSpringApplication implements ErrorController {

	private static final String PATH = "/error";
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UploadService uploadService;

	public static void main(String[] args) {
		SpringApplication.run(ImicSpringApplication.class, args);
		
	}
	
	/**
	 * Using eventListener for creating admin for the application
	 */
	@EventListener(ApplicationReadyEvent.class)
		private void createAdmin() {
		uploadService.init();
		User user = userRepository.findByEmail("admin@diaspark.com");
		if(user != null) {
			System.out.println("already existed");
		} else {
			Admin admin = new Admin();

			admin.setEmail("admin@diaspark.com");
			admin.setPassword("SHIVANGI");
			admin.setType(Type.ADMIN);
			admin.updatePassword();
			userRepository.save(admin);
		}
	}

	@RequestMapping(value = PATH)
	public String error() {
		return "forward:/index.html";
	}

	@Override
	public String getErrorPath() {
		return PATH;
	}
}
