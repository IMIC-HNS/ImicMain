package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.User;

@Service
public class MailsenderService {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public MailsenderService(JavaMailSender javaMailSender) {
		this.javaMailSender= javaMailSender;
	}
	public void sendEmail(User user) throws MailException{
		
		SimpleMailMessage mail= new SimpleMailMessage();
		
		mail.setTo(user.getEmail());
		mail.setSubject("MAIL FOR CREDENTIALS");
		mail.setText("hii nishi, your credentials for login are nishi123");
		
		javaMailSender.send(mail);
	}
}
