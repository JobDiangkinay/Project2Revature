package com.revature.data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Person;
import com.revature.models.User;

@Repository
@Transactional
public class UserRepository {

	@Autowired
	private EntityManager entityManager;
	
	private Session getSession() {
        return entityManager.unwrap(Session.class);
    }
	
	public User getUser(String Username) {
	try {
		Query<User> query = getSession().createQuery("SELECT u FROM User u WHERE u.username = :username", User.class);
		return query.setParameter("username", Username).getSingleResult();
	}
		catch(NoResultException e){
			User error = new User(0, "empty", "empty", new Person(0, "empty","empty", "empty", "empty"), "empty");
			return error;
			}
	
	}
	public List<User> getAllUsers() {
        return getSession().createQuery("from User", User.class).list();
    }
	
	public User postUser(User user) {
        getSession().save("User", user);
        return user;
    }

	public User getUsername(String username) {
		try {
			Query<User> query = getSession().createQuery("SELECT u FROM User u WHERE u.username = :username", User.class);
			return query.setParameter("username", username).getSingleResult();
		}
		catch(NoResultException e){
			return null;
			}
	}
}
