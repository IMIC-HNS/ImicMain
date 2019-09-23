/**
 * 
 */
package com.diaspark.imic.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.diaspark.imic.model.User;
/**
 * @author SHIVANGI RAI
 *
 */
@Repository
public interface UserRepository extends MongoRepository<User,ObjectId>{

	User findByEmail(String email);
}
