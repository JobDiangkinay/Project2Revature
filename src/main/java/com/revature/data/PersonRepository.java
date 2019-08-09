package com.revature.data;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Person;

@Repository
@Transactional
public class PersonRepository {
	@Autowired
	private EntityManager entityManager;
	
	private Session getSession() {
		return entityManager.unwrap(Session.class);
	}
	
	public List<Person> getAllPersons(){
		return getSession().createQuery("from Person",Person.class).list();
	}
	
	public Person getSpecificPerson(int id) {
		Query<Person> query = getSession().createQuery(
		        "SELECT c FROM Person c WHERE c.id = :id", Person.class);
		    return query.setParameter("id", id).getSingleResult();
	}
	
	public Person updatePerson(Person person) {
		getSession().update("Person", person);
		return person;
	}
	
	public Person postPerson(Person person) {
		getSession().save("Person", person);
		return person;
	}
}
