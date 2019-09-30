package com.diaspark.imic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.mongodb.core.mapping.Document;

import com.diaspark.imic.model.Admin;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
import com.diaspark.imic.repository.UserRepository;
import com.diaspark.imic.service.UploadService;

@SpringBootApplication
public class ImicSpringApplication {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UploadService uploadService;

	public static void main(String[] args) {
		SpringApplication.run(ImicSpringApplication.class, args);
		
	}
	
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

}
