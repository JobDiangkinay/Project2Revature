package com.revature.data;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.User;

@Repository
@Transactional
public class UserRepository {

	@Autowired
	private EntityManager entityManager;
	
	private Session getSession() {
        return entityManager.unwrap(Session.class);
    }
	
	public List<User> getAllUsers() {
        return getSession().createQuery("from User", User.class).list();
    }
	
	public User postUser(User user) {
        getSession().save("User", user);
        return user;
    }

}
