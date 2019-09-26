/**
 * 
 */
package com.diaspark.imic.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
/**
 * @author SHIVANGI RAI
 *
 */
@Repository
public interface UserRepository extends MongoRepository<User, ObjectId>{
	@Query
	User findByEmail(String email);

	@Query
	List<User> findAllByType(Type type);
	
	@Query("{status:?0}")
	List<PolicyHolder> findByStatus(Status s);

	@Query
	PolicyHolder findPolicyHolderById(ObjectId id);

	@Query("{'$and':[{'city': ?0},{'type':?1}]}")
	public List<PolicyHolder> findByCityAndPolicyHolder(String city, Type policyHolder);


	@Query("{'type':?0}")
	List<PolicyHolder> findAllByTypes(Type policyholder);

	@Query
	User findUserById(ObjectId userId);

	PolicyHolder findById(String userId);

	String findCityById(ObjectId userId);

	@Query
	List<PolicyHolder> findByCityAndStatus(String city, Status required);
}
