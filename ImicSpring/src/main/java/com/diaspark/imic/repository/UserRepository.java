/**
 * 
 */
package com.diaspark.imic.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;

import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;

/**
 * @author SHIVANGI RAI
 *
 */
@Component
public interface UserRepository extends MongoRepository<User, Long>{
	@Query
	User findByEmail(String email);

	List<User> findAllByType(Type type);
}
