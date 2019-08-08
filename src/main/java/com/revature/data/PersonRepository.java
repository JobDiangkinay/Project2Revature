package com.revature.data;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
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
	
	public Person postPerson(Person person) {
		Person newPerson = person;
		getSession().persist("Person", newPerson);
		return newPerson;
	}
}
