/**
 * 
 */
package com.diaspark.imic.repository;

import java.util.List;

<<<<<<< HEAD
import org.bson.types.ObjectId;
=======
>>>>>>> origin/Admin
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;

<<<<<<< HEAD
import com.diaspark.imic.model.PolicyHolder;
=======
>>>>>>> origin/Admin
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;

/**
 * @author SHIVANGI RAI
 *
 */
@Component
public interface UserRepository extends MongoRepository<User,ObjectId>{
	
	@Query
	User findByEmail(String email);
<<<<<<< HEAD
	
	@Query
	PolicyHolder findByType(Type type);
	
	@Query("{'$and':[{'city': ?0},{'type':?1}]}")
	public List <PolicyHolder> findByCityAndPolicyHolder(String city, String policyHolder);
//	("{'$and':[{'city': ?0},{'type':?1}]}")
	
=======

	List<User> findAllByType(Type type);
>>>>>>> origin/Admin
}
