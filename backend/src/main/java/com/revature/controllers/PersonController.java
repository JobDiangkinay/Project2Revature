package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.data.PersonRepository;
import com.revature.models.Person;

@RestController
@RequestMapping(path = "persons")
public class PersonController {
	@Autowired
	PersonRepository personRepository;

	public PersonRepository getPersonRepository() {
		return personRepository;
	}

	public void setPersonRepository(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}

	@GetMapping("/")
	public List<Person> getAllPersons() {
		return getPersonRepository().getAllPersons();
	}

	@GetMapping("/{id}")
	public Person getSpecificPerson(@PathVariable("id") int id) {
		return getPersonRepository().getSpecificPerson(id);
	}
	
	@GetMapping("/currentUser")
	public Person getCurrentUserPerson(HttpSession session) {
		Person person = new Person();
		if (session.getAttribute("personId") != null) {
			int id = (Integer) session.getAttribute("personId");
			person = getPersonRepository().getSpecificPerson(id);
			return person;
		}
			return person;
	}

	@PostMapping("/")
	public Person postPerson(@RequestBody Person person) {
		return getPersonRepository().postPerson(person);
	}
	
	@PostMapping("/update")
	public Person updatePerson(@RequestBody Person person) {
		return getPersonRepository().updatePerson(person);
	}
}
