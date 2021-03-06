package com.diaspark.imic.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.diaspark.imic.model.ClaimStatus;
import com.diaspark.imic.model.PolicyHolder;
import com.diaspark.imic.model.Status;
import com.diaspark.imic.model.Type;
import com.diaspark.imic.model.User;
/**
 * @author SHIVANGI RAI
 * User repository having queries for using mongoDb 
 */
@Repository
public interface UserRepository extends MongoRepository<User, ObjectId>{
	/**
	 * @param email
	 * @return user
	 */
	@Query
	User findByEmail(String email);

	/**
	 * @param type
	 * @return list of users
	 */
	@Query
	List<User> findAllByType(Type type);
	
	/**
	 * @param s (for status)
	 * @return list of policyholders
	 */
	@Query("{status:?0}")
	List<PolicyHolder> findByStatus(Status s);

	/**
	 * @param id
	 * @return policyHolder
	 */
	@Query
	PolicyHolder findPolicyHolderById(ObjectId id);

	/**
	 * @param city
	 * @param policyHolder
	 * @return list of policyholders
	 */
	@Query("{'$and':[{'city': ?0},{'type':?1}]}")
	public List<PolicyHolder> findByCityAndPolicyHolder(String city, Type policyHolder);


	/**
	 * @param policyholder
	 * @return  list of policyholders
	 */
	@Query("{'type':?0}")
	List<PolicyHolder> findAllByTypes(Type policyholder);

	/**
	 * @param userId
	 * @return user
	 */
	@Query
	User findUserById(ObjectId userId);

	/**
	 * @param userId
	 * @return policyHolders
	 */
	PolicyHolder findById(String userId);
	
	/**
	 * @param userId
	 * @return 
	 */
	String findCityById(ObjectId userId);

	/**
	 * @param city
	 * @param type
	 * @return list of policyholder
	 */
	@Query
	public List<PolicyHolder> findByCityAndType(String city, Type type);
	
	/**
	 * @param city
	 * @param type
	 * @return list of policyholder
	 */
	@Query
	List<PolicyHolder> findByCityAndStatus(String city, Status initialised);

	@Query
	List<PolicyHolder> findPolicyHoldersByClaimStatus(ClaimStatus claimed);

}
	
