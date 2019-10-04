package com.diaspark.imic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.User;

/**
 * @author Nishi Agarwal
 * Service class for sending mail
 */

@Service
public class MailsenderService {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public MailsenderService(JavaMailSender javaMailSender) {
		this.javaMailSender= javaMailSender;
	}
	
	/**sending email to policyholder with form link
	 * @param user
	 * @param link
	 * @throws MailException
	 */
	public void sendEmail(User user,String link) throws MailException{
		
		SimpleMailMessage mail= new SimpleMailMessage();
		
		mail.setTo(user.getEmail());
		mail.setSubject("IMIC: MAIL FOR FORM FILLING");
		String text="Hii,"+user.getFirstName()+"\n" ;
		text = text + "Thank you for choosing IMIC Health Insurance.\n"
		+ "Kindly fill required details to proceed with the policy . Here is the link for your form"+"\n"+ link;
		text = text+"\n\n"+"Thanks and Regards"+"\n"+"IMIC Team";
		mail.setText(text);
		
	
		javaMailSender.send(mail);
	}
	
	
	/**sending email with credentials to agent
	 * @param user
	 * @param password
	 * @throws MailException
	 */
	public void sendEmailToAgent(User user,String password) throws MailException{
		
		SimpleMailMessage mails= new SimpleMailMessage();
		
		mails.setTo(user.getEmail());
		mails.setSubject("IMIC: MAIL FOR CREDENTIALS");
		String text = "Hii" + user.getFirstName()
		    + "\n Welcome to IMIC Health Insurance service. Kindly find details -";
		text = text + " \n" + "Email: --- " + user.getEmail();
		text = text + " \n" + "Password: --- " + password.split("-")[0];
		text = text + "\n\n"+"Thanks and Regards"+"\n"+"IMIC Team";
		mails.setText(text);		
		javaMailSender.send(mails);
	}
	
	
	/**sending email with credentials to policyholder.
	 * @param user {{@link User}} User to send email.
	 * @param password {@link String} Password of user.
	 * @throws MailException
	 */
	public void sendEmailToPolicyholder(User user,String password) throws MailException{
		
		SimpleMailMessage mailCredentails= new SimpleMailMessage();
		
		mailCredentails.setTo(user.getEmail());
		mailCredentails.setSubject("IMIC: Welcome Mail");
		String text = "Hii" +user.getFirstName() +",\n"
		+ " Welcome to IMIC Health Insurance service." +
		"\n Thank you for believing on us . Kindly find details below -";
		text = text + " \n" + "Email: --- " + user.getEmail();
		text = text + " \n" + "Password: --- " + password;
		text = text+"\n\n"+"Thanks and Regards"+"\n"+"IMIC Team";
		mailCredentails.setText(text);
		javaMailSender.send(mailCredentails);
	}
	
	public void sendClaimEmail(PolicyHolder user) throws MailException{
		
		SimpleMailMessage claimMail= new SimpleMailMessage();
		
		claimMail.setTo(user.getEmail());
		claimMail.setSubject("IMIC: Claim Response Mail");
		String text = "Hii," +user.getFirstName() +",\n"
		 +"\n Thank you for believing on us . Kindly find details for your claim request -";
		text = text+"\n"+user.getClaim().getStatus()+"\nCheque Of Rs."+user.getClaim().getAmount()+" will be send to your address\n";
		text = text+"\n\n"+"Thanks and Regards"+"\n"+"IMIC Team";
		claimMail.setText(text);
		javaMailSender.send(claimMail);
	}
}
