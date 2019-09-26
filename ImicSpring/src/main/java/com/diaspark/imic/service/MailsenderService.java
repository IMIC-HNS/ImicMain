package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.User;
import com.sun.xml.messaging.saaj.util.Base64;

@Service
public class MailsenderService {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public MailsenderService(JavaMailSender javaMailSender) {
		this.javaMailSender= javaMailSender;
	}
	//sending email to policyholder with form link
	public void sendEmail(User user,String link) throws MailException{
		
		SimpleMailMessage mail= new SimpleMailMessage();
		
		mail.setTo(user.getEmail());
		mail.setSubject("MAIL FOR CREDENTIALS");
		mail.setSubject("MAIL FOR FORM FILLING");
		mail.setText("Hii user, here is the link for your form filling");
		mail.setText(link);
	
		javaMailSender.send(mail);
	}
	
	//sending email with credentials to agent
	public void sendEmailToAgent(User user,String password) throws MailException{
		
		SimpleMailMessage mails= new SimpleMailMessage();
		
		mails.setTo(user.getEmail());
		mails.setSubject("MAIL FOR CREDENTIALS");
		String text = "Hii Agent,\n" +user.getFirstName()+" your username will be your Email-Id and password is mentioned below";
		text = text + " \n" + "Email: --- " + user.getEmail();
		text = text + " \n" + "Password: --- " + password.split("-")[0];
		mails.setText(text);		
		javaMailSender.send(mails);
	}
	
	//sending email with credentails to policyholder
	public void sendEmailToPolicyholder(User user,String password) throws MailException{
		
		SimpleMailMessage mailCredentails= new SimpleMailMessage();
		
		mailCredentails.setTo(user.getEmail());
		mailCredentails.setSubject("MAIL FOR CREDENTIALS");
		String text = "Hii" +user.getFirstName()+" your username will be your Email-Id and password is mentioned below";
		text = text + " \n" + "Email: --- " + user.getEmail();
		text = text + " \n" + "Password: --- " + password;
		mailCredentails.setText(text);
		javaMailSender.send(mailCredentails);
	}
}
