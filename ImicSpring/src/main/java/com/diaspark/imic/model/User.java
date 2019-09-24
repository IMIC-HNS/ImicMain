package com.diaspark.imic.model;


import java.util.Base64;

import javax.validation.constraints.Pattern;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Document(collection="users")
@JsonIgnoreProperties
@Component
public class User {
	private String SALT = "IMIC";
	@Id
	private ObjectId id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private Type  type;

	/**
	 * @return the id
	 */
	public String getId() {

		return this.id.toHexString();

	}

	/**
	 * @param id the id to set
	 */
	public void setId(ObjectId id) {
		this.id = id;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the type
	 */
	public Type getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(Type type) {
		this.type = type;
	}
	
	public void updatePassword() {
	 this.password =	Base64.getEncoder().encodeToString((this.password + "-" + SALT).getBytes());
	}
	
	public ObjectId getObjectId(String id) {
		return new ObjectId(id);
	}

	@Override
	public String toString() {
		return "User [SALT=" + SALT + ", id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", password=" + password + ", type=" + type + "]";
	}
	
	
	

}
