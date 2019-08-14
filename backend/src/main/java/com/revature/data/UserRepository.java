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
		Query<User> query = getSession().createQuery("SELECT u FROM User u WHERE u.username = :username", User.class);
		return query.setParameter("username", Username).getSingleResult();
	}
	public List<User> getAllUsers() {
        return getSession().createQuery("from User", User.class).list();
    }
	
	public User postUser(User user) {
        getSession().save("User", user);
        return user;
    }

	public String getUsername(String username) {
		
		try {
			@SuppressWarnings("unchecked")
			Query<String> query = getSession().createQuery("SELECT u.username FROM User u WHERE u.username = :username");
			return query.setParameter("username", username).getSingleResult();
		}
		catch(NoResultException e){
			return null;
			}
	}
}
