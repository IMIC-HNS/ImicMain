//package com.diaspark.imic.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.MailException;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.diaspark.imic.model.User;
//import com.diaspark.imic.service.MailsenderService;
//
///**
// * @author Nishi Agarwal
// *
// */
//@RestController
//@CrossOrigin(origins="*")
//public class MailsenderController {
//	
//	@Autowired
//	private MailsenderService notificationService;
//	
//	@Autowired
//	private User user;
//	
//	@RequestMapping("sendmail")
//	public String send() {
//		user.setFirstName("Nishi");
//		user.setLastName("Agarwal");
//		user.setEmail("nishiagarwal5897@gmail.com");
//		
//		try {
//			notificationService.sendEmail(user);
//		} catch (MailException mailException) {
//			System.out.println(mailException);
//		}
//		return "Congratulations! Your mail has been send to the user.";
//	}
//
//}
