package com.diaspark.imic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
//import org.springframework.data.mongodb.core.mapping.Document;

import com.diaspark.imic.model.Admin;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.repository.UserRepository;

@SpringBootApplication
public class ImicSpringApplication {
	
	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(ImicSpringApplication.class, args);
		
	}
	
	@EventListener(ApplicationReadyEvent.class)
		private void createAdmin() {
		Admin admin = new Admin();
	
		admin.setEmail("shivangi.rai@diaspark.com");
		admin.setPassword("SHIVANGI");
		admin.setType(Type.ADMIN);
		admin.updatePassword();
		userRepository.save(admin);
	}

}
